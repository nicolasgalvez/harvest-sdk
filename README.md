# @procyon-creative/harvest-sdk

TypeScript SDK for the [Harvest API v2](https://help.getharvest.com/api-v2/).

## Installation

```bash
npm install @procyon-creative/harvest-sdk
```

## Quick Start

```ts
import { Harvest } from "@procyon-creative/harvest-sdk";

const harvest = new Harvest({
  accountId: "123456",
  accessToken: "your-token-here",
});

// Get the authenticated user
const me = await harvest.users.me();

// List all active clients
const clients = await harvest.clients.list({ is_active: true });

// Create a time entry
await harvest.timeEntries.create({
  project_id: 12345,
  task_id: 678,
  spent_date: "2025-01-15",
  hours: 2.5,
});

// Auto-paginate through all time entries
for await (const entry of harvest.timeEntries.listAll()) {
  console.log(entry.spent_date, entry.hours);
}
```

## Configuration

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `accountId` | Yes | — | Your Harvest account ID |
| `accessToken` | Yes | — | Personal access token or OAuth2 token |
| `baseUrl` | No | `https://api.harvestapp.com/v2` | API base URL |
| `userAgent` | No | `harvest-sdk-typescript` | Custom User-Agent header |

Get your credentials at [id.getharvest.com/developers](https://id.getharvest.com/developers).

## Resources

| Property | Description |
|----------|-------------|
| `harvest.clients` | Client companies |
| `harvest.company` | Your Harvest account |
| `harvest.contacts` | Client contacts |
| `harvest.estimates` | Estimates and estimate messages |
| `harvest.estimateItemCategories` | Estimate line item categories |
| `harvest.expenses` | Expense records |
| `harvest.expenseCategories` | Expense categories |
| `harvest.invoices` | Invoices and invoice messages |
| `harvest.invoiceItemCategories` | Invoice line item categories |
| `harvest.projects` | Projects, user assignments, task assignments |
| `harvest.reports` | Time, expense, uninvoiced, and budget reports |
| `harvest.roles` | User roles |
| `harvest.tasks` | Task definitions |
| `harvest.taskAssignments` | Task assignments across projects |
| `harvest.timeEntries` | Time entries with timer controls |
| `harvest.users` | Users, rates, teammates, project assignments |
| `harvest.userAssignments` | User assignments across projects |

## Pagination

Single page:

```ts
const page = await harvest.timeEntries.list({ page: 1, per_page: 25 });
```

Auto-paginate all results:

```ts
for await (const entry of harvest.timeEntries.listAll()) {
  console.log(entry);
}

// Or collect into an array
const all = await harvest.timeEntries.listAll().toArray();
```

## Error Handling

```ts
import {
  HarvestNotFoundError,
  HarvestRateLimitError,
  HarvestUnprocessableError,
} from "@procyon-creative/harvest-sdk";

try {
  await harvest.clients.get(999);
} catch (error) {
  if (error instanceof HarvestNotFoundError) {
    // 404
  } else if (error instanceof HarvestRateLimitError) {
    // 429 — retry after error.retryAfter seconds
  } else if (error instanceof HarvestUnprocessableError) {
    // 422 — validation error, check error.body
  }
}
```

## Documentation

Full API docs and guides are in the [`docs/`](docs/) folder.

## License

MIT
