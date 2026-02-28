import { CrudResource } from "./base.js";

export interface Client {
  id: number;
  name: string;
  is_active: boolean;
  address: string | null;
  statement_key: string;
  currency: string;
  created_at: string;
  updated_at: string;
}

export class ClientsResource extends CrudResource<Client> {
  protected readonly path = "/clients";
  protected readonly dataKey = "clients";
}
