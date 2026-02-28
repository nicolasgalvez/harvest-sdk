# Harvest SDK

TypeScript SDK for the Harvest API v2.

## Commands

- `npm run build` — build with tsup (ESM + CJS + types)
- `npm run typecheck` — type-check without emitting
- `npm test` — run tests with vitest
- `npm run docs` — regenerate docs with typedoc

## Architecture

- `src/client.ts` — HTTP client (fetch-based, handles auth headers and error mapping)
- `src/resources/base.ts` — `BaseResource` and `CrudResource<T>` with generic list/get/create/update/delete
- `src/resources/*.ts` — one file per Harvest resource, each exports an interface + resource class
- `src/paginator.ts` — `Paginator<T>` async iterable for auto-pagination
- `src/errors.ts` — error hierarchy: `HarvestApiError` → `NotFound`, `Unprocessable`, `RateLimit`
- `src/types.ts` — shared types (`HarvestConfig`, `PaginationParams`, `PaginationMeta`)
- `guides/*.md` — hand-written docs, included in typedoc output via `projectDocuments`
- `tests/` — vitest tests using msw for HTTP mocking

## Conventions

- Resources that extend `CrudResource<T>` inherit list/listAll/get/create/update/delete — don't duplicate these methods
- Sub-resources (messages, rates, assignments) use factory methods on the parent resource (e.g. `harvest.invoices.messages(id)`)
- All HTTP bodies are sent as `application/x-www-form-urlencoded`, not JSON
- `docs/` is generated but committed — edit `guides/*.md` for custom docs, run `npm run docs` to regenerate, and commit the result
