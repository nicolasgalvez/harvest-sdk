import { describe, it, expect } from "vitest";
import { mockClient } from "./helpers.js";
import { Paginator } from "../src/paginator.js";

describe("Paginator", () => {
  it("yields all items from a single page", async () => {
    const client = mockClient();
    client.get.mockResolvedValueOnce({
      items: [{ id: 1 }, { id: 2 }],
      total_pages: 1,
    });

    const paginator = new Paginator(client, "/items", "items");
    const results = await paginator.toArray();

    expect(results).toEqual([{ id: 1 }, { id: 2 }]);
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(client.get).toHaveBeenCalledWith("/items", {
      page: 1,
      per_page: 100,
    });
  });

  it("fetches multiple pages", async () => {
    const client = mockClient();
    client.get
      .mockResolvedValueOnce({
        items: [{ id: 1 }],
        total_pages: 3,
      })
      .mockResolvedValueOnce({
        items: [{ id: 2 }],
        total_pages: 3,
      })
      .mockResolvedValueOnce({
        items: [{ id: 3 }],
        total_pages: 3,
      });

    const paginator = new Paginator(client, "/items", "items");
    const results = await paginator.toArray();

    expect(results).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    expect(client.get).toHaveBeenCalledTimes(3);
    expect(client.get).toHaveBeenNthCalledWith(2, "/items", {
      page: 2,
      per_page: 100,
    });
    expect(client.get).toHaveBeenNthCalledWith(3, "/items", {
      page: 3,
      per_page: 100,
    });
  });

  it("stops early when items array is empty", async () => {
    const client = mockClient();
    client.get.mockResolvedValueOnce({
      items: [],
      total_pages: 5,
    });

    const paginator = new Paginator(client, "/items", "items");
    const results = await paginator.toArray();

    expect(results).toEqual([]);
    expect(client.get).toHaveBeenCalledTimes(1);
  });

  it("stops early when items key is missing", async () => {
    const client = mockClient();
    client.get.mockResolvedValueOnce({ total_pages: 5 });

    const paginator = new Paginator(client, "/items", "items");
    const results = await paginator.toArray();

    expect(results).toEqual([]);
    expect(client.get).toHaveBeenCalledTimes(1);
  });

  it("defaults to 1 page when total_pages is missing", async () => {
    const client = mockClient();
    client.get.mockResolvedValueOnce({
      items: [{ id: 1 }],
      // no total_pages
    });

    const paginator = new Paginator(client, "/items", "items");
    const results = await paginator.toArray();

    expect(results).toEqual([{ id: 1 }]);
    expect(client.get).toHaveBeenCalledTimes(1);
  });

  it("uses custom per_page value", async () => {
    const client = mockClient();
    client.get.mockResolvedValueOnce({
      items: [{ id: 1 }],
      total_pages: 1,
    });

    const paginator = new Paginator(client, "/items", "items", {
      per_page: 25,
    });
    await paginator.toArray();

    expect(client.get).toHaveBeenCalledWith("/items", {
      page: 1,
      per_page: 25,
    });
  });

  it("preserves additional filter params across pages", async () => {
    const client = mockClient();
    client.get
      .mockResolvedValueOnce({
        items: [{ id: 1 }],
        total_pages: 2,
      })
      .mockResolvedValueOnce({
        items: [{ id: 2 }],
        total_pages: 2,
      });

    const paginator = new Paginator(client, "/items", "items", {
      is_active: true,
    });
    await paginator.toArray();

    expect(client.get).toHaveBeenNthCalledWith(1, "/items", {
      is_active: true,
      page: 1,
      per_page: 100,
    });
    expect(client.get).toHaveBeenNthCalledWith(2, "/items", {
      is_active: true,
      page: 2,
      per_page: 100,
    });
  });

  it("works as async iterator with for-await", async () => {
    const client = mockClient();
    client.get.mockResolvedValueOnce({
      items: [{ id: 1 }, { id: 2 }],
      total_pages: 1,
    });

    const paginator = new Paginator(client, "/items", "items");
    const results: unknown[] = [];
    for await (const item of paginator) {
      results.push(item);
    }

    expect(results).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
