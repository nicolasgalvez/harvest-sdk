import { CrudResource } from "./base.js";

export interface Role {
  id: number;
  name: string;
  user_ids: number[];
  created_at: string;
  updated_at: string;
}

export class RolesResource extends CrudResource<Role> {
  protected readonly path = "/roles";
  protected readonly dataKey = "roles";
}
