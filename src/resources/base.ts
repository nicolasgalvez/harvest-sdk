import type { HarvestClient } from "../client.js";
import type { PaginationParams } from "../types.js";
import { Paginator } from "../paginator.js";

export abstract class BaseResource {
  constructor(protected readonly client: HarvestClient) {}
}

export interface ListResponse<T> {
  [key: string]: T[] | number | unknown;
}

/**
 * Generic CRUD resource providing list/get/create/update/delete.
 * Subclasses specify the path and data key used in paginated responses.
 */
export abstract class CrudResource<T> extends BaseResource {
  protected abstract readonly path: string;
  protected abstract readonly dataKey: string;

  async list(params?: PaginationParams & Record<string, unknown>): Promise<T[]> {
    const response = await this.client.get<Record<string, unknown>>(
      this.path,
      params,
    );
    return (response[this.dataKey] as T[]) ?? [];
  }

  listAll(params?: Omit<PaginationParams, "page"> & Record<string, unknown>): Paginator<T> {
    return new Paginator<T>(this.client, this.path, this.dataKey, params);
  }

  async get(id: number): Promise<T> {
    return this.client.get<T>(`${this.path}/${id}`);
  }

  async create(data: Record<string, unknown>): Promise<T> {
    return this.client.post<T>(this.path, data);
  }

  async update(id: number, data: Record<string, unknown>): Promise<T> {
    return this.client.patch<T>(`${this.path}/${id}`, data);
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`${this.path}/${id}`);
  }
}
