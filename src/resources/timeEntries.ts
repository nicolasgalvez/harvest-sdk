import { CrudResource } from "./base.js";

export interface TimeEntry {
  id: number;
  spent_date: string;
  hours: number;
  hours_without_timer: number;
  rounded_hours: number;
  notes: string | null;
  is_locked: boolean;
  locked_reason: string | null;
  is_closed: boolean;
  is_billed: boolean;
  timer_started_at: string | null;
  started_time: string | null;
  ended_time: string | null;
  is_running: boolean;
  billable: boolean;
  budgeted: boolean;
  billable_rate: number | null;
  cost_rate: number | null;
  created_at: string;
  updated_at: string;
  user: { id: number; name: string };
  client: { id: number; name: string; currency: string };
  project: { id: number; name: string; code: string };
  task: { id: number; name: string };
  user_assignment: { id: number; is_project_manager: boolean; is_active: boolean; budget: number | null; created_at: string; updated_at: string; hourly_rate: number | null };
  task_assignment: { id: number; billable: boolean; is_active: boolean; created_at: string; updated_at: string; hourly_rate: number | null; budget: number | null };
  invoice: { id: number; number: string } | null;
  external_reference: { id: string; group_id: string; account_id: string; permalink: string } | null;
}

export class TimeEntriesResource extends CrudResource<TimeEntry> {
  protected readonly path = "/time_entries";
  protected readonly dataKey = "time_entries";

  /** Stop a running time entry timer. */
  async stop(id: number): Promise<TimeEntry> {
    return this.client.patch<TimeEntry>(`/time_entries/${id}/stop`);
  }

  /** Restart a stopped time entry timer. */
  async restart(id: number): Promise<TimeEntry> {
    return this.client.patch<TimeEntry>(`/time_entries/${id}/restart`);
  }

  /** Delete external reference for a time entry. */
  async deleteExternalReference(id: number): Promise<void> {
    return this.client.delete(`/time_entries/${id}/external_reference`);
  }
}
