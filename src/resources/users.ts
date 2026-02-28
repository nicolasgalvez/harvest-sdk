import type { HarvestClient } from "../client.js";
import type { PaginationParams } from "../types.js";
import { CrudResource } from "./base.js";
import { Paginator } from "../paginator.js";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  timezone: string;
  has_access_to_all_future_projects: boolean;
  is_contractor: boolean;
  is_active: boolean;
  weekly_capacity: number;
  default_hourly_rate: number | null;
  cost_rate: number | null;
  roles: string[];
  access_roles: string[];
  avatar_url: string;
  created_at: string;
  updated_at: string;
}

export interface BillableRate {
  id: number;
  amount: number;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface CostRate {
  id: number;
  amount: number;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectAssignment {
  id: number;
  is_project_manager: boolean;
  is_active: boolean;
  use_default_rates: boolean;
  budget: number | null;
  created_at: string;
  updated_at: string;
  hourly_rate: number | null;
  project: { id: number; name: string; code: string };
  client: { id: number; name: string };
  task_assignments: { id: number; billable: boolean; is_active: boolean; created_at: string; updated_at: string; hourly_rate: number | null; budget: number | null; task: { id: number; name: string } }[];
}

export class UsersResource extends CrudResource<User> {
  protected readonly path = "/users";
  protected readonly dataKey = "users";

  /** Retrieve the currently authenticated user. */
  async me(): Promise<User> {
    return this.client.get<User>("/users/me");
  }

  /** List project assignments for the current user. */
  async myProjectAssignments(params?: PaginationParams & Record<string, unknown>): Promise<ProjectAssignment[]> {
    const response = await this.client.get<Record<string, unknown>>(
      "/users/me/project_assignments",
      params,
    );
    return (response.project_assignments as ProjectAssignment[]) ?? [];
  }

  /** Access billable rates for a user. */
  billableRates(userId: number): UserBillableRatesResource {
    return new UserBillableRatesResource(this.client, userId);
  }

  /** Access cost rates for a user. */
  costRates(userId: number): UserCostRatesResource {
    return new UserCostRatesResource(this.client, userId);
  }

  /** Access teammates for a user. */
  teammates(userId: number): UserTeammatesResource {
    return new UserTeammatesResource(this.client, userId);
  }

  /** List project assignments for a specific user. */
  projectAssignments(userId: number): UserProjectAssignmentsResource {
    return new UserProjectAssignmentsResource(this.client, userId);
  }
}

export class UserBillableRatesResource {
  constructor(
    private readonly client: HarvestClient,
    private readonly userId: number,
  ) {}

  private get path() {
    return `/users/${this.userId}/billable_rates`;
  }

  async list(params?: PaginationParams & Record<string, unknown>): Promise<BillableRate[]> {
    const response = await this.client.get<Record<string, unknown>>(this.path, params);
    return (response.billable_rates as BillableRate[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<BillableRate> {
    return new Paginator<BillableRate>(this.client, this.path, "billable_rates", params);
  }

  async get(id: number): Promise<BillableRate> {
    return this.client.get<BillableRate>(`${this.path}/${id}`);
  }

  async create(data: Record<string, unknown>): Promise<BillableRate> {
    return this.client.post<BillableRate>(this.path, data);
  }
}

export class UserCostRatesResource {
  constructor(
    private readonly client: HarvestClient,
    private readonly userId: number,
  ) {}

  private get path() {
    return `/users/${this.userId}/cost_rates`;
  }

  async list(params?: PaginationParams & Record<string, unknown>): Promise<CostRate[]> {
    const response = await this.client.get<Record<string, unknown>>(this.path, params);
    return (response.cost_rates as CostRate[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<CostRate> {
    return new Paginator<CostRate>(this.client, this.path, "cost_rates", params);
  }

  async get(id: number): Promise<CostRate> {
    return this.client.get<CostRate>(`${this.path}/${id}`);
  }

  async create(data: Record<string, unknown>): Promise<CostRate> {
    return this.client.post<CostRate>(this.path, data);
  }
}

export class UserTeammatesResource {
  constructor(
    private readonly client: HarvestClient,
    private readonly userId: number,
  ) {}

  private get path() {
    return `/users/${this.userId}/teammates`;
  }

  async list(params?: PaginationParams & Record<string, unknown>): Promise<User[]> {
    const response = await this.client.get<Record<string, unknown>>(this.path, params);
    return (response.teammates as User[]) ?? [];
  }

  /** Update (replace) teammates for a user. */
  async update(data: Record<string, unknown>): Promise<User[]> {
    const response = await this.client.patch<Record<string, unknown>>(this.path, data);
    return (response.teammates as User[]) ?? [];
  }
}

export class UserProjectAssignmentsResource {
  constructor(
    private readonly client: HarvestClient,
    private readonly userId: number,
  ) {}

  private get path() {
    return `/users/${this.userId}/project_assignments`;
  }

  async list(params?: PaginationParams & Record<string, unknown>): Promise<ProjectAssignment[]> {
    const response = await this.client.get<Record<string, unknown>>(this.path, params);
    return (response.project_assignments as ProjectAssignment[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<ProjectAssignment> {
    return new Paginator<ProjectAssignment>(this.client, this.path, "project_assignments", params);
  }
}
