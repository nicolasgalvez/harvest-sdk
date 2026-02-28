import { describe, it, expect } from "vitest";
import { mockClient } from "../helpers.js";
import { ReportsResource } from "../../src/resources/reports.js";

const reportParams = { from: "2024-01-01", to: "2024-01-31" };

describe("ReportsResource — time reports", () => {
  it("time.byClients() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.time.byClients(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/time/clients",
      reportParams,
    );
  });

  it("time.byProjects() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.time.byProjects(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/time/projects",
      reportParams,
    );
  });

  it("time.byTasks() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.time.byTasks(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/time/tasks",
      reportParams,
    );
  });

  it("time.byTeam() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.time.byTeam(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/time/team",
      reportParams,
    );
  });
});

describe("ReportsResource — expense reports", () => {
  it("expenses.byClients() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.expenses.byClients(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/expenses/clients",
      reportParams,
    );
  });

  it("expenses.byProjects() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.expenses.byProjects(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/expenses/projects",
      reportParams,
    );
  });

  it("expenses.byCategories() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.expenses.byCategories(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/expenses/categories",
      reportParams,
    );
  });

  it("expenses.byTeam() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.expenses.byTeam(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/expenses/team",
      reportParams,
    );
  });
});

describe("ReportsResource — uninvoiced and projectBudget", () => {
  it("uninvoiced() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.uninvoiced(reportParams);

    expect(client.get).toHaveBeenCalledWith(
      "/reports/uninvoiced",
      reportParams,
    );
  });

  it("projectBudget() calls correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.projectBudget();

    expect(client.get).toHaveBeenCalledWith(
      "/reports/project_budget",
      undefined,
    );
  });

  it("projectBudget() passes params when provided", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ results: [] });

    const resource = new ReportsResource(client);
    await resource.projectBudget({ is_active: true });

    expect(client.get).toHaveBeenCalledWith("/reports/project_budget", {
      is_active: true,
    });
  });
});
