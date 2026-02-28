---
title: Error Handling
group: Guides
---

# Error Handling

All API errors throw typed error classes that extend {@link HarvestApiError}.

## Error Hierarchy

```
HarvestApiError
├── HarvestNotFoundError      (404)
├── HarvestUnprocessableError (422)
└── HarvestRateLimitError     (429)
```

Any non-2xx response throws one of these. Status codes 404, 422, and 429 get specific subclasses; all other errors throw the base {@link HarvestApiError}.

## Catching Errors

```ts
import {
  HarvestApiError,
  HarvestNotFoundError,
  HarvestRateLimitError,
  HarvestUnprocessableError,
} from "harvest-sdk";

try {
  const client = await harvest.clients.get(999999);
} catch (error) {
  if (error instanceof HarvestNotFoundError) {
    // 404 — resource doesn't exist
    console.log("Not found");
  } else if (error instanceof HarvestUnprocessableError) {
    // 422 — validation failed
    console.log("Validation error:", error.body);
  } else if (error instanceof HarvestRateLimitError) {
    // 429 — rate limited
    console.log(`Retry after ${error.retryAfter} seconds`);
  } else if (error instanceof HarvestApiError) {
    // Any other API error
    console.log(`${error.status}: ${error.statusText}`, error.body);
  }
}
```

## Error Properties

### {@link HarvestApiError}

| Property | Type | Description |
|----------|------|-------------|
| `status` | `number` | HTTP status code |
| `statusText` | `string` | HTTP status text |
| `body` | `unknown` | Parsed JSON response body |
| `message` | `string` | `"Harvest API error {status}: {statusText}"` |

### {@link HarvestRateLimitError}

Extends `HarvestApiError` with:

| Property | Type | Description |
|----------|------|-------------|
| `retryAfter` | `number` | Seconds to wait before retrying (from the `Retry-After` header, defaults to 15) |

## Rate Limiting

Harvest enforces rate limits per account. When you hit the limit, the SDK throws a {@link HarvestRateLimitError} with the `retryAfter` value from the response header:

```ts
try {
  await harvest.timeEntries.list();
} catch (error) {
  if (error instanceof HarvestRateLimitError) {
    await new Promise((r) => setTimeout(r, error.retryAfter * 1000));
    // retry the request
  }
}
```

The SDK does not automatically retry rate-limited requests — you control the retry strategy.
