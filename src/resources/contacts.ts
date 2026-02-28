import { CrudResource } from "./base.js";

export interface Contact {
  id: number;
  client: { id: number; name: string };
  title: string | null;
  first_name: string;
  last_name: string | null;
  email: string | null;
  phone_office: string | null;
  phone_mobile: string | null;
  fax: string | null;
  created_at: string;
  updated_at: string;
}

export class ContactsResource extends CrudResource<Contact> {
  protected readonly path = "/contacts";
  protected readonly dataKey = "contacts";
}
