import { describe, it, expect } from "vitest";
import { serializeParams, buildQueryString } from "../src/params.js";

describe("serializeParams", () => {
  it("serializes flat string values", () => {
    expect(serializeParams({ name: "Acme" })).toBe("name=Acme");
  });

  it("serializes flat number values", () => {
    expect(serializeParams({ amount: 42 })).toBe("amount=42");
  });

  it("serializes multiple flat values", () => {
    expect(serializeParams({ a: "1", b: "2" })).toBe("a=1&b=2");
  });

  it("serializes nested objects with bracket notation", () => {
    const result = serializeParams({ user: { name: "Nick" } });
    expect(result).toBe("user%5Bname%5D=Nick");
  });

  it("serializes arrays of primitives with bare key repeat", () => {
    const result = serializeParams({ ids: [1, 2, 3] });
    expect(result).toBe("ids=1&ids=2&ids=3");
  });

  it("serializes arrays of objects with bracket-indexed notation", () => {
    const result = serializeParams({
      line_items: [{ kind: "Service" }, { kind: "Product" }],
    });
    expect(result).toBe(
      "line_items%5B0%5D%5Bkind%5D=Service&line_items%5B1%5D%5Bkind%5D=Product",
    );
  });

  it("serializes deeply nested structures", () => {
    const result = serializeParams({
      a: { b: { c: "deep" } },
    });
    expect(result).toBe("a%5Bb%5D%5Bc%5D=deep");
  });

  it("skips null values", () => {
    expect(serializeParams({ a: "1", b: null })).toBe("a=1");
  });

  it("skips undefined values", () => {
    expect(serializeParams({ a: "1", b: undefined })).toBe("a=1");
  });

  it("returns empty string for empty object", () => {
    expect(serializeParams({})).toBe("");
  });

  it("serializes Date values as strings", () => {
    const date = new Date("2024-01-15T00:00:00.000Z");
    const result = serializeParams({ from: date });
    expect(result).toContain("from=");
    expect(result).toContain("2024");
  });

  it("encodes special characters", () => {
    const result = serializeParams({ name: "a b&c=d" });
    expect(result).toBe("name=a%20b%26c%3Dd");
  });

  it("serializes boolean values", () => {
    expect(serializeParams({ active: true })).toBe("active=true");
    expect(serializeParams({ active: false })).toBe("active=false");
  });
});

describe("buildQueryString", () => {
  it("returns empty string for undefined params", () => {
    expect(buildQueryString()).toBe("");
  });

  it("returns empty string for empty object", () => {
    expect(buildQueryString({})).toBe("");
  });

  it("builds single param with ? prefix", () => {
    expect(buildQueryString({ page: 1 })).toBe("?page=1");
  });

  it("builds multiple params", () => {
    expect(buildQueryString({ page: 1, per_page: 100 })).toBe(
      "?page=1&per_page=100",
    );
  });

  it("serializes booleans without encodeURIComponent", () => {
    // Booleans should be "true"/"false" not "%74rue" etc.
    const result = buildQueryString({ is_active: true });
    expect(result).toBe("?is_active=true");
  });

  it("skips null values", () => {
    expect(buildQueryString({ a: "1", b: null })).toBe("?a=1");
  });

  it("skips undefined values", () => {
    expect(buildQueryString({ a: "1", b: undefined })).toBe("?a=1");
  });

  it("encodes special characters in values", () => {
    const result = buildQueryString({ q: "a b&c" });
    expect(result).toBe("?q=a%20b%26c");
  });

  it("returns empty string when all values are null", () => {
    expect(buildQueryString({ a: null, b: undefined })).toBe("");
  });
});
