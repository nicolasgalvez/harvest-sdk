import { CrudResource } from "./base.js";

export interface ExpenseCategory {
  id: number;
  name: string;
  unit_name: string | null;
  unit_price: number | null;
  is_active: boolean;
  deactivate_date: string | null;
  created_at: string;
  updated_at: string;
}

export class ExpenseCategoriesResource extends CrudResource<ExpenseCategory> {
  protected readonly path = "/expense_categories";
  protected readonly dataKey = "expense_categories";
}
