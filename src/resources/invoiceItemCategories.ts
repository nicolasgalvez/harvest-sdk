import { CrudResource } from "./base.js";

export interface InvoiceItemCategory {
  id: number;
  name: string;
  use_as_service: boolean;
  use_as_expense: boolean;
  created_at: string;
  updated_at: string;
}

export class InvoiceItemCategoriesResource extends CrudResource<InvoiceItemCategory> {
  protected readonly path = "/invoice_item_categories";
  protected readonly dataKey = "invoice_item_categories";
}
