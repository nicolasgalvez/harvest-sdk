import type { HarvestClient } from "../client.js";
import type { PaginationParams } from "../types.js";
import { BaseResource } from "./base.js";
import { Paginator } from "../paginator.js";

export interface TaskAssignment {
  id: number;
  billable: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  hourly_rate: number | null;
  budget: number | null;
  project: { id: number; name: string; code: string };
  task: { id: number; name: string };
}

/** Top-level task assignments list (across all projects). */
export class TaskAssignmentsResource extends BaseResource {
  async list(params?: PaginationParams & Record<string, unknown>): Promise<TaskAssignment[]> {
    const response = await this.client.get<Record<string, unknown>>(
      "/task_assignments",
      params,
    );
    return (response.task_assignments as TaskAssignment[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<TaskAssignment> {
    return new Paginator<TaskAssignment>(this.client, "/task_assignments", "task_assignments", params);
  }
}

/** Nested task assignments for a specific project. */
export class ProjectTaskAssignmentsResource {
  constructor(
    private readonly client: HarvestClient,
    private readonly projectId: number,
  ) {}

  private get path() {
    return `/projects/${this.projectId}/task_assignments`;
  }

  async list(params?: PaginationParams & Record<string, unknown>): Promise<TaskAssignment[]> {
    const response = await this.client.get<Record<string, unknown>>(this.path, params);
    return (response.task_assignments as TaskAssignment[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<TaskAssignment> {
    return new Paginator<TaskAssignment>(this.client, this.path, "task_assignments", params);
  }

  async get(id: number): Promise<TaskAssignment> {
    return this.client.get<TaskAssignment>(`${this.path}/${id}`);
  }

  async create(data: Record<string, unknown>): Promise<TaskAssignment> {
    return this.client.post<TaskAssignment>(this.path, data);
  }

  async update(id: number, data: Record<string, unknown>): Promise<TaskAssignment> {
    return this.client.patch<TaskAssignment>(`${this.path}/${id}`, data);
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`${this.path}/${id}`);
  }
}
