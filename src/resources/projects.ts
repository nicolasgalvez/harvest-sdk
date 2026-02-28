import { CrudResource } from "./base.js";
import { ProjectUserAssignmentsResource } from "./userAssignments.js";
import { ProjectTaskAssignmentsResource } from "./taskAssignments.js";

export interface Project {
  id: number;
  name: string;
  code: string;
  is_active: boolean;
  is_billable: boolean;
  is_fixed_fee: boolean;
  bill_by: string;
  budget: number | null;
  budget_by: string;
  budget_is_monthly: boolean;
  notify_when_over_budget: boolean;
  over_budget_notification_percentage: number;
  over_budget_notification_date: string | null;
  show_budget_to_all: boolean;
  cost_budget: number | null;
  cost_budget_include_expenses: boolean;
  hourly_rate: number | null;
  fee: number | null;
  notes: string | null;
  starts_on: string | null;
  ends_on: string | null;
  created_at: string;
  updated_at: string;
  client: { id: number; name: string; currency: string };
}

export class ProjectsResource extends CrudResource<Project> {
  protected readonly path = "/projects";
  protected readonly dataKey = "projects";

  /** Access user assignments nested under a project. */
  userAssignments(projectId: number): ProjectUserAssignmentsResource {
    return new ProjectUserAssignmentsResource(this.client, projectId);
  }

  /** Access task assignments nested under a project. */
  taskAssignments(projectId: number): ProjectTaskAssignmentsResource {
    return new ProjectTaskAssignmentsResource(this.client, projectId);
  }
}
