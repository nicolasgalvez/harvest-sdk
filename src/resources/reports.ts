import type { HarvestClient } from "../client.js";

export interface TimeReportResult {
  client_id: number;
  client_name: string;
  project_id: number;
  project_name: string;
  task_id?: number;
  task_name?: string;
  user_id?: number;
  user_name?: string;
  total_hours: number;
  billable_hours: number;
  currency: string;
  billable_amount: number;
}

export interface TimeReport {
  results: TimeReportResult[];
  per_page: number;
  total_pages: number;
  total_entries: number;
  next_page: number | null;
  previous_page: number | null;
  page: number;
}

export interface ExpenseReportResult {
  client_id: number;
  client_name: string;
  project_id?: number;
  project_name?: string;
  expense_category_id?: number;
  expense_category_name?: string;
  user_id?: number;
  user_name?: string;
  total_amount: number;
  billable_amount: number;
  currency: string;
}

export interface ExpenseReport {
  results: ExpenseReportResult[];
  per_page: number;
  total_pages: number;
  total_entries: number;
  next_page: number | null;
  previous_page: number | null;
  page: number;
}

export interface UninvoicedReport {
  results: {
    client_id: number;
    client_name: string;
    project_id: number;
    project_name: string;
    currency: string;
    total_hours: number;
    uninvoiced_hours: number;
    uninvoiced_expenses: number;
    uninvoiced_amount: number;
  }[];
  per_page: number;
  total_pages: number;
  total_entries: number;
  next_page: number | null;
  previous_page: number | null;
  page: number;
}

export interface ProjectBudgetReport {
  results: {
    client_id: number;
    client_name: string;
    project_id: number;
    project_name: string;
    budget_is_monthly: boolean;
    budget_by: string;
    is_active: boolean;
    budget: number;
    budget_spent: number;
    budget_remaining: number;
  }[];
  per_page: number;
  total_pages: number;
  total_entries: number;
  next_page: number | null;
  previous_page: number | null;
  page: number;
}

export interface ReportParams {
  from: string;
  to: string;
  page?: number;
  per_page?: number;
  [key: string]: unknown;
}

export class TimeReports {
  constructor(private readonly client: HarvestClient) {}

  async byClients(params: ReportParams): Promise<TimeReport> {
    return this.client.get<TimeReport>("/reports/time/clients", params);
  }

  async byProjects(params: ReportParams): Promise<TimeReport> {
    return this.client.get<TimeReport>("/reports/time/projects", params);
  }

  async byTasks(params: ReportParams): Promise<TimeReport> {
    return this.client.get<TimeReport>("/reports/time/tasks", params);
  }

  async byTeam(params: ReportParams): Promise<TimeReport> {
    return this.client.get<TimeReport>("/reports/time/team", params);
  }
}

export class ExpenseReports {
  constructor(private readonly client: HarvestClient) {}

  async byClients(params: ReportParams): Promise<ExpenseReport> {
    return this.client.get<ExpenseReport>("/reports/expenses/clients", params);
  }

  async byProjects(params: ReportParams): Promise<ExpenseReport> {
    return this.client.get<ExpenseReport>("/reports/expenses/projects", params);
  }

  async byCategories(params: ReportParams): Promise<ExpenseReport> {
    return this.client.get<ExpenseReport>("/reports/expenses/categories", params);
  }

  async byTeam(params: ReportParams): Promise<ExpenseReport> {
    return this.client.get<ExpenseReport>("/reports/expenses/team", params);
  }
}

export class ReportsResource {
  public readonly time: TimeReports;
  public readonly expenses: ExpenseReports;

  constructor(private readonly client: HarvestClient) {
    this.time = new TimeReports(client);
    this.expenses = new ExpenseReports(client);
  }

  async uninvoiced(params: ReportParams): Promise<UninvoicedReport> {
    return this.client.get<UninvoicedReport>("/reports/uninvoiced", params);
  }

  async projectBudget(params?: Record<string, unknown>): Promise<ProjectBudgetReport> {
    return this.client.get<ProjectBudgetReport>("/reports/project_budget", params);
  }
}
