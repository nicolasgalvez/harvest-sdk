import { describe, it, expect } from "vitest";
import { mockClient } from "../helpers.js";
import {
  InvoicesResource,
  InvoiceMessagesResource,
} from "../../src/resources/invoices.js";
import { Paginator } from "../../src/paginator.js";

describe("InvoicesResource", () => {
  it("messages(invoiceId) returns InvoiceMessagesResource", () => {
    const client = mockClient();
    const resource = new InvoicesResource(client);
    const sub = resource.messages(42);

    expect(sub).toBeInstanceOf(InvoiceMessagesResource);
  });
});

describe("InvoiceMessagesResource", () => {
  it("list() calls correct path and extracts invoice_messages", async () => {
    const client = mockClient();
    const messages = [{ id: 1, subject: "Invoice" }];
    client.get.mockResolvedValue({ invoice_messages: messages });

    const resource = new InvoiceMessagesResource(client, 42);
    const result = await resource.list();

    expect(client.get).toHaveBeenCalledWith(
      "/invoices/42/messages",
      undefined,
    );
    expect(result).toEqual(messages);
  });

  it("list() falls back to empty array", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({});

    const resource = new InvoiceMessagesResource(client, 42);
    const result = await resource.list();

    expect(result).toEqual([]);
  });

  it("listAll() returns a Paginator", () => {
    const client = mockClient();
    const resource = new InvoiceMessagesResource(client, 42);
    const paginator = resource.listAll();

    expect(paginator).toBeInstanceOf(Paginator);
  });

  it("create() calls correct path", async () => {
    const client = mockClient();
    client.post.mockResolvedValue({ id: 1 });

    const resource = new InvoiceMessagesResource(client, 42);
    await resource.create({ event_type: "send" });

    expect(client.post).toHaveBeenCalledWith("/invoices/42/messages", {
      event_type: "send",
    });
  });

  it("delete() calls correct path", async () => {
    const client = mockClient();
    client.delete.mockResolvedValue(undefined);

    const resource = new InvoiceMessagesResource(client, 42);
    await resource.delete(10);

    expect(client.delete).toHaveBeenCalledWith("/invoices/42/messages/10");
  });
});
