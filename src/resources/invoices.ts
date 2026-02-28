import type { HarvestClient } from "../client.js";
import type { PaginationParams } from "../types.js";
import { CrudResource } from "./base.js";
import { Paginator } from "../paginator.js";

export interface InvoiceLineItem {
  id?: number;
  kind: string;
  description?: string;
  quantity?: number;
  unit_price?: number;
  amount?: number;
  taxed?: boolean;
  taxed2?: boolean;
  project?: { id: number; name: string; code: string };
}

export interface Invoice {
  id: number;
  client_key: string;
  number: string;
  purchase_order: string | null;
  amount: number;
  due_amount: number;
  tax: number | null;
  tax_amount: number;
  tax2: number | null;
  tax2_amount: number;
  discount: number | null;
  discount_amount: number;
  subject: string | null;
  notes: string | null;
  currency: string;
  state: string;
  period_start: string | null;
  period_end: string | null;
  issue_date: string;
  due_date: string;
  payment_term: string;
  sent_at: string | null;
  paid_at: string | null;
  paid_date: string | null;
  closed_at: string | null;
  recurring_invoice_id: number | null;
  created_at: string;
  updated_at: string;
  client: { id: number; name: string };
  estimate: { id: number } | null;
  retainer: { id: number } | null;
  creator: { id: number; name: string };
  line_items: InvoiceLineItem[];
}

export interface InvoiceMessage {
  id: number;
  sent_by: string;
  sent_by_email: string;
  sent_from: string;
  sent_from_email: string;
  recipients: { name: string; email: string }[];
  subject: string;
  body: string;
  include_link_to_client_invoice: boolean;
  attach_pdf: boolean;
  send_me_a_copy: boolean;
  thank_you: boolean;
  event_type: string | null;
  reminder: boolean;
  send_reminder_on: string | null;
  created_at: string;
  updated_at: string;
}

export class InvoicesResource extends CrudResource<Invoice> {
  protected readonly path = "/invoices";
  protected readonly dataKey = "invoices";

  /** Access messages (send, list, delete) for an invoice. */
  messages(invoiceId: number): InvoiceMessagesResource {
    return new InvoiceMessagesResource(this.client, invoiceId);
  }
}

export class InvoiceMessagesResource {
  constructor(
    private readonly client: HarvestClient,
    private readonly invoiceId: number,
  ) {}

  private get path() {
    return `/invoices/${this.invoiceId}/messages`;
  }

  async list(params?: PaginationParams & Record<string, unknown>): Promise<InvoiceMessage[]> {
    const response = await this.client.get<Record<string, unknown>>(this.path, params);
    return (response.invoice_messages as InvoiceMessage[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<InvoiceMessage> {
    return new Paginator<InvoiceMessage>(this.client, this.path, "invoice_messages", params);
  }

  async create(data: Record<string, unknown>): Promise<InvoiceMessage> {
    return this.client.post<InvoiceMessage>(this.path, data);
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`${this.path}/${id}`);
  }
}
