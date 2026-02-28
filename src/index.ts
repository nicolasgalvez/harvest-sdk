import type { HarvestConfig } from "./types.js";
import { HarvestClient } from "./client.js";
import { ClientsResource } from "./resources/clients.js";
import { CompanyResource } from "./resources/company.js";
import { ContactsResource } from "./resources/contacts.js";
import { EstimateItemCategoriesResource } from "./resources/estimateItemCategories.js";
import { EstimatesResource } from "./resources/estimates.js";
import { ExpenseCategoriesResource } from "./resources/expenseCategories.js";
import { ExpensesResource } from "./resources/expenses.js";
import { InvoiceItemCategoriesResource } from "./resources/invoiceItemCategories.js";
import { InvoicesResource } from "./resources/invoices.js";
import { ProjectsResource } from "./resources/projects.js";
import { ReportsResource } from "./resources/reports.js";
import { RolesResource } from "./resources/roles.js";
import { TaskAssignmentsResource } from "./resources/taskAssignments.js";
import { TasksResource } from "./resources/tasks.js";
import { TimeEntriesResource } from "./resources/timeEntries.js";
import { UserAssignmentsResource } from "./resources/userAssignments.js";
import { UsersResource } from "./resources/users.js";

export class Harvest {
  public readonly clients: ClientsResource;
  public readonly company: CompanyResource;
  public readonly contacts: ContactsResource;
  public readonly estimateItemCategories: EstimateItemCategoriesResource;
  public readonly estimates: EstimatesResource;
  public readonly expenseCategories: ExpenseCategoriesResource;
  public readonly expenses: ExpensesResource;
  public readonly invoiceItemCategories: InvoiceItemCategoriesResource;
  public readonly invoices: InvoicesResource;
  public readonly projects: ProjectsResource;
  public readonly reports: ReportsResource;
  public readonly roles: RolesResource;
  public readonly taskAssignments: TaskAssignmentsResource;
  public readonly tasks: TasksResource;
  public readonly timeEntries: TimeEntriesResource;
  public readonly userAssignments: UserAssignmentsResource;
  public readonly users: UsersResource;

  constructor(config: HarvestConfig) {
    const client = new HarvestClient(config);

    this.clients = new ClientsResource(client);
    this.company = new CompanyResource(client);
    this.contacts = new ContactsResource(client);
    this.estimateItemCategories = new EstimateItemCategoriesResource(client);
    this.estimates = new EstimatesResource(client);
    this.expenseCategories = new ExpenseCategoriesResource(client);
    this.expenses = new ExpensesResource(client);
    this.invoiceItemCategories = new InvoiceItemCategoriesResource(client);
    this.invoices = new InvoicesResource(client);
    this.projects = new ProjectsResource(client);
    this.reports = new ReportsResource(client);
    this.roles = new RolesResource(client);
    this.taskAssignments = new TaskAssignmentsResource(client);
    this.tasks = new TasksResource(client);
    this.timeEntries = new TimeEntriesResource(client);
    this.userAssignments = new UserAssignmentsResource(client);
    this.users = new UsersResource(client);
  }
}

// Re-export everything
export { HarvestClient } from "./client.js";
export { Paginator } from "./paginator.js";
export * from "./types.js";
export * from "./errors.js";
export * from "./resources/clients.js";
export * from "./resources/company.js";
export * from "./resources/contacts.js";
export * from "./resources/estimateItemCategories.js";
export * from "./resources/estimates.js";
export * from "./resources/expenseCategories.js";
export * from "./resources/expenses.js";
export * from "./resources/invoiceItemCategories.js";
export * from "./resources/invoices.js";
export * from "./resources/projects.js";
export * from "./resources/reports.js";
export * from "./resources/roles.js";
export * from "./resources/taskAssignments.js";
export * from "./resources/tasks.js";
export * from "./resources/timeEntries.js";
export * from "./resources/userAssignments.js";
export * from "./resources/users.js";
