import { describe, it, expect } from "vitest";
import {
  HarvestApiError,
  HarvestRateLimitError,
  HarvestNotFoundError,
  HarvestUnprocessableError,
} from "../src/errors.js";

describe("HarvestApiError", () => {
  it("has correct .name", () => {
    const err = new HarvestApiError(500, "Internal Server Error", null);
    expect(err.name).toBe("HarvestApiError");
  });

  it("formats message from status and statusText", () => {
    const err = new HarvestApiError(500, "Internal Server Error", null);
    expect(err.message).toBe("Harvest API error 500: Internal Server Error");
  });

  it("exposes status, statusText, and body", () => {
    const body = { error: "something broke" };
    const err = new HarvestApiError(500, "Internal Server Error", body);
    expect(err.status).toBe(500);
    expect(err.statusText).toBe("Internal Server Error");
    expect(err.body).toEqual(body);
  });

  it("body can be null", () => {
    const err = new HarvestApiError(500, "Internal Server Error", null);
    expect(err.body).toBeNull();
  });

  it("is instanceof Error", () => {
    const err = new HarvestApiError(500, "Internal Server Error", null);
    expect(err).toBeInstanceOf(Error);
  });
});

describe("HarvestRateLimitError", () => {
  it("has correct .name", () => {
    const err = new HarvestRateLimitError(15, null);
    expect(err.name).toBe("HarvestRateLimitError");
  });

  it("has status 429", () => {
    const err = new HarvestRateLimitError(15, null);
    expect(err.status).toBe(429);
  });

  it("exposes retryAfter", () => {
    const err = new HarvestRateLimitError(30, null);
    expect(err.retryAfter).toBe(30);
  });

  it("is instanceof HarvestApiError", () => {
    const err = new HarvestRateLimitError(15, null);
    expect(err).toBeInstanceOf(HarvestApiError);
  });

  it("is instanceof Error", () => {
    const err = new HarvestRateLimitError(15, null);
    expect(err).toBeInstanceOf(Error);
  });

  it("formats message correctly", () => {
    const err = new HarvestRateLimitError(15, null);
    expect(err.message).toBe("Harvest API error 429: Too Many Requests");
  });
});

describe("HarvestNotFoundError", () => {
  it("has correct .name", () => {
    const err = new HarvestNotFoundError(null);
    expect(err.name).toBe("HarvestNotFoundError");
  });

  it("has status 404", () => {
    const err = new HarvestNotFoundError(null);
    expect(err.status).toBe(404);
  });

  it("is instanceof HarvestApiError", () => {
    const err = new HarvestNotFoundError(null);
    expect(err).toBeInstanceOf(HarvestApiError);
  });

  it("is instanceof Error", () => {
    const err = new HarvestNotFoundError(null);
    expect(err).toBeInstanceOf(Error);
  });
});

describe("HarvestUnprocessableError", () => {
  it("has correct .name", () => {
    const err = new HarvestUnprocessableError({ message: "invalid" });
    expect(err.name).toBe("HarvestUnprocessableError");
  });

  it("has status 422", () => {
    const err = new HarvestUnprocessableError(null);
    expect(err.status).toBe(422);
  });

  it("is instanceof HarvestApiError", () => {
    const err = new HarvestUnprocessableError(null);
    expect(err).toBeInstanceOf(HarvestApiError);
  });

  it("is instanceof Error", () => {
    const err = new HarvestUnprocessableError(null);
    expect(err).toBeInstanceOf(Error);
  });

  it("exposes body", () => {
    const body = { message: "Name is required" };
    const err = new HarvestUnprocessableError(body);
    expect(err.body).toEqual(body);
  });
});
