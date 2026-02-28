import type { HarvestClient } from "./client.js";

/**
 * Auto-paginating async iterable.
 *
 * Usage:
 *   for await (const entry of harvest.timeEntries.listAll()) { ... }
 *   const all = await harvest.timeEntries.listAll().toArray();
 */
export class Paginator<T> implements AsyncIterable<T> {
  private readonly client: HarvestClient;
  private readonly path: string;
  private readonly dataKey: string;
  private readonly params: Record<string, unknown>;

  constructor(
    client: HarvestClient,
    path: string,
    dataKey: string,
    params: Record<string, unknown> = {},
  ) {
    this.client = client;
    this.path = path;
    this.dataKey = dataKey;
    this.params = params;
  }

  async *[Symbol.asyncIterator](): AsyncIterableIterator<T> {
    let page = 1;
    let totalPages = 1;

    do {
      const response = await this.client.get<Record<string, unknown>>(
        this.path,
        { ...this.params, page, per_page: this.params.per_page ?? 100 },
      );

      const items = response[this.dataKey] as T[] | undefined;
      if (!items || items.length === 0) return;

      for (const item of items) {
        yield item;
      }

      const totalPagesValue = (response as Record<string, unknown>).total_pages;
      totalPages = typeof totalPagesValue === "number" ? totalPagesValue : 1;
      page++;
    } while (page <= totalPages);
  }

  async toArray(): Promise<T[]> {
    const results: T[] = [];
    for await (const item of this) {
      results.push(item);
    }
    return results;
  }
}
