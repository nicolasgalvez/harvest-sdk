import type { HarvestClient } from "../client.js";
import type { PaginationParams } from "../types.js";
import { BaseResource } from "./base.js";
import { Paginator } from "../paginator.js";

export interface UserAssignment {
  id: number;
  is_project_manager: boolean;
  is_active: boolean;
  use_default_rates: boolean;
  budget: number | null;
  created_at: string;
  updated_at: string;
  hourly_rate: number | null;
  project: { id: number; name: string; code: string };
  user: { id: number; name: string };
}

/** Top-level user assignments list (across all projects). */
export class UserAssignmentsResource extends BaseResource {
  async list(params?: PaginationParams & Record<string, unknown>): Promise<UserAssignment[]> {
    const response = await this.client.get<Record<string, unknown>>(
      "/user_assignments",
      params,
    );
    return (response.user_assignments as UserAssignment[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<UserAssignment> {
    return new Paginator<UserAssignment>(this.client, "/user_assignments", "user_assignments", params);
  }
}

/** Nested user assignments for a specific project. */
export class ProjectUserAssignmentsResource {
  constructor(
    private readonly client: HarvestClient,
    private readonly projectId: number,
  ) {}

  private get path() {
    return `/projects/${this.projectId}/user_assignments`;
  }

  async list(params?: PaginationParams & Record<string, unknown>): Promise<UserAssignment[]> {
    const response = await this.client.get<Record<string, unknown>>(this.path, params);
    return (response.user_assignments as UserAssignment[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<UserAssignment> {
    return new Paginator<UserAssignment>(this.client, this.path, "user_assignments", params);
  }

  async get(id: number): Promise<UserAssignment> {
    return this.client.get<UserAssignment>(`${this.path}/${id}`);
  }

  async create(data: Record<string, unknown>): Promise<UserAssignment> {
    return this.client.post<UserAssignment>(this.path, data);
  }

  async update(id: number, data: Record<string, unknown>): Promise<UserAssignment> {
    return this.client.patch<UserAssignment>(`${this.path}/${id}`, data);
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`${this.path}/${id}`);
  }
}
