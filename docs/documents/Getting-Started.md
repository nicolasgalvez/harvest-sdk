[**harvest-sdk**](../README.md)

***

[harvest-sdk](../README.md) / Getting Started

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
| `harvest.clients` | [ClientsResource](../index/classes/ClientsResource.md) |
| `harvest.company` | [CompanyResource](../index/classes/CompanyResource.md) |
| `harvest.contacts` | [ContactsResource](../index/classes/ContactsResource.md) |
| `harvest.estimates` | [EstimatesResource](../index/classes/EstimatesResource.md) |
| `harvest.estimateItemCategories` | [EstimateItemCategoriesResource](../index/classes/EstimateItemCategoriesResource.md) |
| `harvest.expenses` | [ExpensesResource](../index/classes/ExpensesResource.md) |
| `harvest.expenseCategories` | [ExpenseCategoriesResource](../index/classes/ExpenseCategoriesResource.md) |
| `harvest.invoices` | [InvoicesResource](../index/classes/InvoicesResource.md) |
| `harvest.invoiceItemCategories` | [InvoiceItemCategoriesResource](../index/classes/InvoiceItemCategoriesResource.md) |
| `harvest.projects` | [ProjectsResource](../index/classes/ProjectsResource.md) |
| `harvest.reports` | [ReportsResource](../index/classes/ReportsResource.md) |
| `harvest.roles` | [RolesResource](../index/classes/RolesResource.md) |
| `harvest.tasks` | [TasksResource](../index/classes/TasksResource.md) |
| `harvest.taskAssignments` | [TaskAssignmentsResource](../index/classes/TaskAssignmentsResource.md) |
| `harvest.timeEntries` | [TimeEntriesResource](../index/classes/TimeEntriesResource.md) |
| `harvest.users` | [UsersResource](../index/classes/UsersResource.md) |
| `harvest.userAssignments` | [UserAssignmentsResource](../index/classes/UserAssignmentsResource.md) |
