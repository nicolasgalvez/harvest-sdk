---
title: Pagination
group: Guides
---

# Pagination

Harvest API responses are paginated. The SDK provides three ways to work with paginated data.

## Single Page with `list()`

Returns one page of results. Pass `page` and `per_page` to control which page:

```ts
const firstPage = await harvest.timeEntries.list({ per_page: 25 });
const secondPage = await harvest.timeEntries.list({ per_page: 25, page: 2 });
```

All resource-specific filters can be combined with pagination params:

```ts
const entries = await harvest.timeEntries.list({
  from: "2025-01-01",
  to: "2025-01-31",
  per_page: 50,
});
```

## Auto-Pagination with `listAll()`

Returns a {@link Paginator} that fetches pages automatically as you iterate. This is the easiest way to get all records:

```ts
for await (const entry of harvest.timeEntries.listAll()) {
  console.log(entry.id, entry.hours);
}
```

Or collect everything into an array:

```ts
const allEntries = await harvest.timeEntries.listAll().toArray();
```

### How It Works

The `Paginator` starts at page 1 and requests pages with `per_page: 100` (the maximum). After yielding all items from a page, it checks `total_pages` to decide whether to fetch the next page. This means:

- You never need to manually track page numbers
- Network requests happen lazily — the next page is only fetched when you consume all items from the current one
- You can break out of the loop early and no further requests are made

### Passing Filters

Filters work the same as with `list()`, minus `page` (which is managed for you):

```ts
const recentEntries = harvest.timeEntries.listAll({
  from: "2025-01-01",
  to: "2025-01-31",
  per_page: 50, // override the default 100
});

for await (const entry of recentEntries) {
  console.log(entry);
}
```

## Pagination Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | `number` | `1` | Page number (used by `list()` only) |
| `per_page` | `number` | `100` for `listAll()` | Results per page (max 100) |
