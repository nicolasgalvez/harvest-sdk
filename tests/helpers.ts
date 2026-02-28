import { vi } from "vitest";
import type { HarvestClient } from "../src/client.js";

/**
 * Creates a mock HarvestClient with vi.fn() stubs for all methods.
 * Used by paginator and resource tests to avoid coupling to fetch/msw.
 */
export function mockClient() {
  return {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  } as unknown as HarvestClient & {
    get: ReturnType<typeof vi.fn>;
    post: ReturnType<typeof vi.fn>;
    patch: ReturnType<typeof vi.fn>;
    delete: ReturnType<typeof vi.fn>;
  };
}
