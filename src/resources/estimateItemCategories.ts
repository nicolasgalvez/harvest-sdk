import { CrudResource } from "./base.js";

export interface EstimateItemCategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export class EstimateItemCategoriesResource extends CrudResource<EstimateItemCategory> {
  protected readonly path = "/estimate_item_categories";
  protected readonly dataKey = "estimate_item_categories";
}
