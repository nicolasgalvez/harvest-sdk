import { CrudResource } from "./base.js";

export interface Expense {
  id: number;
  notes: string | null;
  total_cost: number;
  units: number | null;
  is_closed: boolean;
  is_locked: boolean;
  is_billed: boolean;
  locked_reason: string | null;
  spent_date: string;
  billable: boolean;
  receipt: { url: string; file_name: string; file_size: number; content_type: string } | null;
  created_at: string;
  updated_at: string;
  user: { id: number; name: string };
  user_assignment: { id: number; is_project_manager: boolean; is_active: boolean; budget: number | null; created_at: string; updated_at: string; hourly_rate: number | null };
  project: { id: number; name: string; code: string };
  expense_category: { id: number; name: string; unit_price: number | null; unit_name: string | null };
  client: { id: number; name: string; currency: string };
  invoice: { id: number; number: string } | null;
}

export class ExpensesResource extends CrudResource<Expense> {
  protected readonly path = "/expenses";
  protected readonly dataKey = "expenses";
}
