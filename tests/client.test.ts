import { describe, it, expect } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "./msw-server.js";
import { HarvestClient } from "../src/client.js";
import {
  HarvestApiError,
  HarvestRateLimitError,
  HarvestNotFoundError,
  HarvestUnprocessableError,
} from "../src/errors.js";

const BASE = "https://api.harvestapp.com/v2";

function makeClient(overrides?: { baseUrl?: string }) {
  return new HarvestClient({
    accountId: "12345",
    accessToken: "test-token",
    ...overrides,
  });
}

describe("HarvestClient constructor", () => {
  it("uses default baseUrl", async () => {
    const client = makeClient();
    server.use(
      http.get(`${BASE}/test`, ({ request }) => {
        return HttpResponse.json({ ok: true });
      }),
    );
    const result = await client.get<{ ok: boolean }>("/test");
    expect(result.ok).toBe(true);
  });

  it("uses custom baseUrl", async () => {
    const custom = "https://custom.example.com";
    const client = makeClient({ baseUrl: custom });
    server.use(
      http.get(`${custom}/test`, () => HttpResponse.json({ ok: true })),
    );
    const result = await client.get<{ ok: boolean }>("/test");
    expect(result.ok).toBe(true);
  });

  it("sends correct auth headers", async () => {
    const client = makeClient();
    let capturedHeaders: Record<string, string> = {};
    server.use(
      http.get(`${BASE}/test`, ({ request }) => {
        capturedHeaders = {
          authorization: request.headers.get("Authorization") ?? "",
          accountId: request.headers.get("Harvest-Account-Id") ?? "",
          userAgent: request.headers.get("User-Agent") ?? "",
        };
        return HttpResponse.json({});
      }),
    );
    await client.get("/test");
    expect(capturedHeaders.authorization).toBe("Bearer test-token");
    expect(capturedHeaders.accountId).toBe("12345");
    expect(capturedHeaders.userAgent).toBe("harvest-sdk-typescript");
  });
});

describe("GET", () => {
  it("appends query string to URL", async () => {
    const client = makeClient();
    let capturedUrl = "";
    server.use(
      http.get(`${BASE}/projects`, ({ request }) => {
        capturedUrl = request.url;
        return HttpResponse.json({ projects: [] });
      }),
    );
    await client.get("/projects", { is_active: true, page: 1 });
    expect(capturedUrl).toContain("is_active=true");
    expect(capturedUrl).toContain("page=1");
  });

  it("returns parsed JSON", async () => {
    const client = makeClient();
    const data = { id: 1, name: "Test" };
    server.use(
      http.get(`${BASE}/clients/1`, () => HttpResponse.json(data)),
    );
    const result = await client.get("/clients/1");
    expect(result).toEqual(data);
  });
});

describe("POST", () => {
  it("sends body as x-www-form-urlencoded", async () => {
    const client = makeClient();
    let capturedContentType = "";
    let capturedBody = "";
    server.use(
      http.post(`${BASE}/clients`, async ({ request }) => {
        capturedContentType = request.headers.get("Content-Type") ?? "";
        capturedBody = await request.text();
        return HttpResponse.json({ id: 1 });
      }),
    );
    await client.post("/clients", { name: "Acme" });
    expect(capturedContentType).toBe("application/x-www-form-urlencoded");
    expect(capturedBody).toContain("name=Acme");
  });

  it("sends no Content-Type or body when body is undefined", async () => {
    const client = makeClient();
    let capturedContentType: string | null = null;
    let capturedBody = "";
    server.use(
      http.post(`${BASE}/actions/run`, async ({ request }) => {
        capturedContentType = request.headers.get("Content-Type");
        capturedBody = await request.text();
        return HttpResponse.json({ ok: true });
      }),
    );
    await client.post("/actions/run");
    expect(capturedContentType).toBeNull();
    expect(capturedBody).toBe("");
  });

  it("sends no Content-Type or body when body is empty object", async () => {
    const client = makeClient();
    let capturedContentType: string | null = null;
    server.use(
      http.post(`${BASE}/actions/run`, async ({ request }) => {
        capturedContentType = request.headers.get("Content-Type");
        return HttpResponse.json({ ok: true });
      }),
    );
    await client.post("/actions/run", {});
    expect(capturedContentType).toBeNull();
  });
});

describe("PATCH", () => {
  it("sends body as x-www-form-urlencoded", async () => {
    const client = makeClient();
    let capturedBody = "";
    server.use(
      http.patch(`${BASE}/clients/1`, async ({ request }) => {
        capturedBody = await request.text();
        return HttpResponse.json({ id: 1, name: "Updated" });
      }),
    );
    await client.patch("/clients/1", { name: "Updated" });
    expect(capturedBody).toContain("name=Updated");
  });

  it("sends no body when body is undefined", async () => {
    const client = makeClient();
    let capturedBody = "";
    server.use(
      http.patch(`${BASE}/time_entries/1/stop`, async ({ request }) => {
        capturedBody = await request.text();
        return HttpResponse.json({ id: 1 });
      }),
    );
    await client.patch("/time_entries/1/stop");
    expect(capturedBody).toBe("");
  });
});

describe("DELETE", () => {
  it("returns void on 204", async () => {
    const client = makeClient();
    server.use(
      http.delete(`${BASE}/clients/1`, () => {
        return new HttpResponse(null, { status: 204 });
      }),
    );
    const result = await client.delete("/clients/1");
    expect(result).toBeUndefined();
  });
});

describe("error handling", () => {
  it("throws HarvestRateLimitError on 429 with Retry-After", async () => {
    const client = makeClient();
    server.use(
      http.get(`${BASE}/test`, () => {
        return HttpResponse.json(
          { error: "rate limited" },
          {
            status: 429,
            statusText: "Too Many Requests",
            headers: { "Retry-After": "30" },
          },
        );
      }),
    );
    try {
      await client.get("/test");
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(HarvestRateLimitError);
      const rateErr = err as HarvestRateLimitError;
      expect(rateErr.retryAfter).toBe(30);
      expect(rateErr.status).toBe(429);
    }
  });

  it("defaults retryAfter to 15 when Retry-After header is missing", async () => {
    const client = makeClient();
    server.use(
      http.get(`${BASE}/test`, () => {
        return HttpResponse.json({ error: "rate limited" }, { status: 429 });
      }),
    );
    try {
      await client.get("/test");
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(HarvestRateLimitError);
      expect((err as HarvestRateLimitError).retryAfter).toBe(15);
    }
  });

  it("defaults retryAfter to 15 when Retry-After is 0", async () => {
    const client = makeClient();
    server.use(
      http.get(`${BASE}/test`, () => {
        return HttpResponse.json(
          {},
          { status: 429, headers: { "Retry-After": "0" } },
        );
      }),
    );
    try {
      await client.get("/test");
      expect.unreachable("should have thrown");
    } catch (err) {
      expect((err as HarvestRateLimitError).retryAfter).toBe(15);
    }
  });

  it("throws HarvestNotFoundError on 404", async () => {
    const client = makeClient();
    server.use(
      http.get(`${BASE}/missing`, () => {
        return HttpResponse.json(
          { error_description: "not found" },
          { status: 404 },
        );
      }),
    );
    await expect(client.get("/missing")).rejects.toBeInstanceOf(
      HarvestNotFoundError,
    );
  });

  it("throws HarvestUnprocessableError on 422", async () => {
    const client = makeClient();
    server.use(
      http.post(`${BASE}/clients`, () => {
        return HttpResponse.json(
          { message: "Name is required" },
          { status: 422 },
        );
      }),
    );
    await expect(
      client.post("/clients", { name: "" }),
    ).rejects.toBeInstanceOf(HarvestUnprocessableError);
  });

  it("throws generic HarvestApiError on 500", async () => {
    const client = makeClient();
    server.use(
      http.get(`${BASE}/test`, () => {
        return HttpResponse.json(
          { error: "kaboom" },
          { status: 500, statusText: "Internal Server Error" },
        );
      }),
    );
    try {
      await client.get("/test");
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(HarvestApiError);
      expect((err as HarvestApiError).status).toBe(500);
      expect((err as HarvestApiError).body).toEqual({ error: "kaboom" });
    }
  });

  it("sets body to null when error response is not valid JSON", async () => {
    const client = makeClient();
    server.use(
      http.get(`${BASE}/test`, () => {
        return new HttpResponse("not json", {
          status: 500,
          statusText: "Internal Server Error",
        });
      }),
    );
    try {
      await client.get("/test");
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(HarvestApiError);
      expect((err as HarvestApiError).body).toBeNull();
    }
  });
});
