---
title: Getting Started
group: Guides
---

# Getting Started

## Installation

```bash
npm install harvest-sdk
```

## Configuration

Create a client with your Harvest account ID and personal access token:

```ts
import { Harvest } from "harvest-sdk";

const harvest = new Harvest({
  accountId: "123456",
  accessToken: "your-token-here",
});
```

### Configuration Options

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `accountId` | Yes | — | Your Harvest account ID |
| `accessToken` | Yes | — | Personal access token or OAuth2 token |
| `baseUrl` | No | `https://api.harvestapp.com/v2` | API base URL |
| `userAgent` | No | `harvest-sdk-typescript` | Custom User-Agent header |

You can find your account ID and create a personal access token at [id.getharvest.com/developers](https://id.getharvest.com/developers).

## Quick Example

```ts
// Get the authenticated user
const me = await harvest.users.me();
console.log(`Hello, ${me.first_name}!`);

// List all active clients
const clients = await harvest.clients.list({ is_active: true });

// Create a time entry
const entry = await harvest.timeEntries.create({
  project_id: 12345,
  task_id: 678,
  spent_date: "2025-01-15",
  hours: 2.5,
  notes: "SDK development",
});

// Iterate through all time entries (auto-paginated)
for await (const entry of harvest.timeEntries.listAll()) {
  console.log(entry.spent_date, entry.hours);
}
```

## Resources

Every resource is accessed as a property on the `Harvest` instance:

| Property | Resource |
|----------|----------|
| `harvest.clients` | {@link ClientsResource} |
| `harvest.company` | {@link CompanyResource} |
| `harvest.contacts` | {@link ContactsResource} |
| `harvest.estimates` | {@link EstimatesResource} |
| `harvest.estimateItemCategories` | {@link EstimateItemCategoriesResource} |
| `harvest.expenses` | {@link ExpensesResource} |
| `harvest.expenseCategories` | {@link ExpenseCategoriesResource} |
| `harvest.invoices` | {@link InvoicesResource} |
| `harvest.invoiceItemCategories` | {@link InvoiceItemCategoriesResource} |
| `harvest.projects` | {@link ProjectsResource} |
| `harvest.reports` | {@link ReportsResource} |
| `harvest.roles` | {@link RolesResource} |
| `harvest.tasks` | {@link TasksResource} |
| `harvest.taskAssignments` | {@link TaskAssignmentsResource} |
| `harvest.timeEntries` | {@link TimeEntriesResource} |
| `harvest.users` | {@link UsersResource} |
| `harvest.userAssignments` | {@link UserAssignmentsResource} |
