import { CrudResource } from "./base.js";

export interface Task {
  id: number;
  name: string;
  billable_by_default: boolean;
  default_hourly_rate: number | null;
  is_default: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export class TasksResource extends CrudResource<Task> {
  protected readonly path = "/tasks";
  protected readonly dataKey = "tasks";
}
