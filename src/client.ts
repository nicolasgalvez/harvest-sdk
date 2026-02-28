import type { HarvestConfig } from "./types.js";
import { buildQueryString, serializeParams } from "./params.js";
import {
  HarvestApiError,
  HarvestNotFoundError,
  HarvestRateLimitError,
  HarvestUnprocessableError,
} from "./errors.js";

export class HarvestClient {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(config: HarvestConfig) {
    this.baseUrl = config.baseUrl ?? "https://api.harvestapp.com/v2";
    this.headers = {
      "Harvest-Account-Id": config.accountId,
      Authorization: `Bearer ${config.accessToken}`,
      "User-Agent": config.userAgent ?? "harvest-sdk-typescript",
    };
  }

  async get<T>(path: string, params?: Record<string, unknown>): Promise<T> {
    const qs = buildQueryString(params);
    const url = `${this.baseUrl}${path}${qs}`;
    return this.request<T>(url, { method: "GET" });
  }

  async post<T>(path: string, body?: Record<string, unknown>): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const init: RequestInit = { method: "POST" };
    if (body && Object.keys(body).length > 0) {
      init.headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      init.body = serializeParams(body);
    }
    return this.request<T>(url, init);
  }

  async patch<T>(path: string, body?: Record<string, unknown>): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const init: RequestInit = { method: "PATCH" };
    if (body && Object.keys(body).length > 0) {
      init.headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      init.body = serializeParams(body);
    }
    return this.request<T>(url, init);
  }

  async delete(path: string): Promise<void> {
    const url = `${this.baseUrl}${path}`;
    await this.request(url, { method: "DELETE" });
  }

  private async request<T>(url: string, init: RequestInit): Promise<T> {
    const response = await fetch(url, {
      ...init,
      headers: {
        ...this.headers,
        ...((init.headers as Record<string, string>) ?? {}),
      },
    });

    if (response.status === 204) return undefined as T;

    if (!response.ok) {
      const body = await response.json().catch(() => null);

      if (response.status === 429) {
        const retryAfter = Number(response.headers.get("Retry-After")) || 15;
        throw new HarvestRateLimitError(retryAfter, body);
      }
      if (response.status === 404) {
        throw new HarvestNotFoundError(body);
      }
      if (response.status === 422) {
        throw new HarvestUnprocessableError(body);
      }
      throw new HarvestApiError(response.status, response.statusText, body);
    }

    return response.json() as Promise<T>;
  }
}
