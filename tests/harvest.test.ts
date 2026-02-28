import { describe, it, expect } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "./msw-server.js";
import { Harvest } from "../src/index.js";
import { ClientsResource } from "../src/resources/clients.js";
import { CompanyResource } from "../src/resources/company.js";
import { ContactsResource } from "../src/resources/contacts.js";
import { EstimateItemCategoriesResource } from "../src/resources/estimateItemCategories.js";
import { EstimatesResource } from "../src/resources/estimates.js";
import { ExpenseCategoriesResource } from "../src/resources/expenseCategories.js";
import { ExpensesResource } from "../src/resources/expenses.js";
import { InvoiceItemCategoriesResource } from "../src/resources/invoiceItemCategories.js";
import { InvoicesResource } from "../src/resources/invoices.js";
import { ProjectsResource } from "../src/resources/projects.js";
import { ReportsResource } from "../src/resources/reports.js";
import { RolesResource } from "../src/resources/roles.js";
import { TaskAssignmentsResource } from "../src/resources/taskAssignments.js";
import { TasksResource } from "../src/resources/tasks.js";
import { TimeEntriesResource } from "../src/resources/timeEntries.js";
import { UserAssignmentsResource } from "../src/resources/userAssignments.js";
import { UsersResource } from "../src/resources/users.js";

// Catch-all handler so the constructor's client doesn't fail if anything leaks
server.use(
  http.all("https://api.harvestapp.com/*", () => {
    return HttpResponse.json({});
  }),
);

function makeHarvest() {
  return new Harvest({
    accountId: "12345",
    accessToken: "test-token",
  });
}

describe("Harvest wiring", () => {
  const harvest = makeHarvest();

  it("clients is ClientsResource", () => {
    expect(harvest.clients).toBeInstanceOf(ClientsResource);
  });

  it("company is CompanyResource", () => {
    expect(harvest.company).toBeInstanceOf(CompanyResource);
  });

  it("contacts is ContactsResource", () => {
    expect(harvest.contacts).toBeInstanceOf(ContactsResource);
  });

  it("estimateItemCategories is EstimateItemCategoriesResource", () => {
    expect(harvest.estimateItemCategories).toBeInstanceOf(
      EstimateItemCategoriesResource,
    );
  });

  it("estimates is EstimatesResource", () => {
    expect(harvest.estimates).toBeInstanceOf(EstimatesResource);
  });

  it("expenseCategories is ExpenseCategoriesResource", () => {
    expect(harvest.expenseCategories).toBeInstanceOf(
      ExpenseCategoriesResource,
    );
  });

  it("expenses is ExpensesResource", () => {
    expect(harvest.expenses).toBeInstanceOf(ExpensesResource);
  });

  it("invoiceItemCategories is InvoiceItemCategoriesResource", () => {
    expect(harvest.invoiceItemCategories).toBeInstanceOf(
      InvoiceItemCategoriesResource,
    );
  });

  it("invoices is InvoicesResource", () => {
    expect(harvest.invoices).toBeInstanceOf(InvoicesResource);
  });

  it("projects is ProjectsResource", () => {
    expect(harvest.projects).toBeInstanceOf(ProjectsResource);
  });

  it("reports is ReportsResource", () => {
    expect(harvest.reports).toBeInstanceOf(ReportsResource);
  });

  it("roles is RolesResource", () => {
    expect(harvest.roles).toBeInstanceOf(RolesResource);
  });

  it("taskAssignments is TaskAssignmentsResource", () => {
    expect(harvest.taskAssignments).toBeInstanceOf(TaskAssignmentsResource);
  });

  it("tasks is TasksResource", () => {
    expect(harvest.tasks).toBeInstanceOf(TasksResource);
  });

  it("timeEntries is TimeEntriesResource", () => {
    expect(harvest.timeEntries).toBeInstanceOf(TimeEntriesResource);
  });

  it("userAssignments is UserAssignmentsResource", () => {
    expect(harvest.userAssignments).toBeInstanceOf(UserAssignmentsResource);
  });

  it("users is UsersResource", () => {
    expect(harvest.users).toBeInstanceOf(UsersResource);
  });
});
