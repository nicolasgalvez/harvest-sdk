import type { HarvestClient } from "../client.js";
import type { PaginationParams } from "../types.js";
import { CrudResource } from "./base.js";
import { Paginator } from "../paginator.js";

export interface EstimateLineItem {
  id?: number;
  kind: string;
  description?: string;
  quantity?: number;
  unit_price?: number;
  amount?: number;
  taxed?: boolean;
  taxed2?: boolean;
}

export interface Estimate {
  id: number;
  client_key: string;
  number: string;
  purchase_order: string | null;
  amount: number;
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
  issue_date: string | null;
  sent_at: string | null;
  accepted_at: string | null;
  declined_at: string | null;
  created_at: string;
  updated_at: string;
  client: { id: number; name: string };
  creator: { id: number; name: string };
  line_items: EstimateLineItem[];
}

export interface EstimateMessage {
  id: number;
  sent_by: string;
  sent_by_email: string;
  sent_from: string;
  sent_from_email: string;
  recipients: { name: string; email: string }[];
  subject: string;
  body: string;
  send_me_a_copy: boolean;
  event_type: string | null;
  created_at: string;
  updated_at: string;
}

export class EstimatesResource extends CrudResource<Estimate> {
  protected readonly path = "/estimates";
  protected readonly dataKey = "estimates";

  /** Access messages for an estimate. */
  messages(estimateId: number): EstimateMessagesResource {
    return new EstimateMessagesResource(this.client, estimateId);
  }
}

export class EstimateMessagesResource {
  constructor(
    private readonly client: HarvestClient,
    private readonly estimateId: number,
  ) {}

  private get path() {
    return `/estimates/${this.estimateId}/messages`;
  }

  async list(params?: PaginationParams & Record<string, unknown>): Promise<EstimateMessage[]> {
    const response = await this.client.get<Record<string, unknown>>(this.path, params);
    return (response.estimate_messages as EstimateMessage[]) ?? [];
  }

  listAll(params?: Record<string, unknown>): Paginator<EstimateMessage> {
    return new Paginator<EstimateMessage>(this.client, this.path, "estimate_messages", params);
  }

  async create(data: Record<string, unknown>): Promise<EstimateMessage> {
    return this.client.post<EstimateMessage>(this.path, data);
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`${this.path}/${id}`);
  }
}
