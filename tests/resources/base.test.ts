import { describe, it, expect } from "vitest";
import { mockClient } from "../helpers.js";
import { CrudResource } from "../../src/resources/base.js";
import { Paginator } from "../../src/paginator.js";

// Concrete test subclass
class TestResource extends CrudResource<{ id: number; name: string }> {
  protected readonly path = "/widgets";
  protected readonly dataKey = "widgets";
}

describe("CrudResource", () => {
  it("list() calls client.get with path and params", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ widgets: [{ id: 1, name: "A" }] });

    const resource = new TestResource(client);
    const result = await resource.list({ page: 1, per_page: 10 });

    expect(client.get).toHaveBeenCalledWith("/widgets", {
      page: 1,
      per_page: 10,
    });
    expect(result).toEqual([{ id: 1, name: "A" }]);
  });

  it("list() extracts dataKey array from response", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({
      widgets: [{ id: 1 }, { id: 2 }],
      total_pages: 1,
    });

    const resource = new TestResource(client);
    const result = await resource.list();

    expect(result).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("list() falls back to empty array when dataKey is missing", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ total_pages: 1 });

    const resource = new TestResource(client);
    const result = await resource.list();

    expect(result).toEqual([]);
  });

  it("listAll() returns a Paginator instance", () => {
    const client = mockClient();
    const resource = new TestResource(client);
    const paginator = resource.listAll();

    expect(paginator).toBeInstanceOf(Paginator);
  });

  it("listAll() passes params to Paginator", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({
      widgets: [{ id: 1 }],
      total_pages: 1,
    });

    const resource = new TestResource(client);
    const paginator = resource.listAll({ is_active: true });
    await paginator.toArray();

    expect(client.get).toHaveBeenCalledWith("/widgets", {
      is_active: true,
      page: 1,
      per_page: 100,
    });
  });

  it("get(id) calls client.get with path/id", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ id: 42, name: "Widget" });

    const resource = new TestResource(client);
    const result = await resource.get(42);

    expect(client.get).toHaveBeenCalledWith("/widgets/42");
    expect(result).toEqual({ id: 42, name: "Widget" });
  });

  it("create(data) calls client.post with path and data", async () => {
    const client = mockClient();
    client.post.mockResolvedValue({ id: 1, name: "New" });

    const resource = new TestResource(client);
    const result = await resource.create({ name: "New" });

    expect(client.post).toHaveBeenCalledWith("/widgets", { name: "New" });
    expect(result).toEqual({ id: 1, name: "New" });
  });

  it("update(id, data) calls client.patch with path/id and data", async () => {
    const client = mockClient();
    client.patch.mockResolvedValue({ id: 1, name: "Updated" });

    const resource = new TestResource(client);
    const result = await resource.update(1, { name: "Updated" });

    expect(client.patch).toHaveBeenCalledWith("/widgets/1", {
      name: "Updated",
    });
    expect(result).toEqual({ id: 1, name: "Updated" });
  });

  it("delete(id) calls client.delete with path/id", async () => {
    const client = mockClient();
    client.delete.mockResolvedValue(undefined);

    const resource = new TestResource(client);
    await resource.delete(1);

    expect(client.delete).toHaveBeenCalledWith("/widgets/1");
  });
});
