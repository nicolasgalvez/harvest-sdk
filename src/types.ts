export interface HarvestConfig {
  accountId: string;
  accessToken: string;
  baseUrl?: string;
  userAgent?: string;
}

export interface PaginationParams {
  page?: number;
  per_page?: number;
}

export interface PaginationMeta {
  per_page: number;
  total_pages: number;
  total_entries: number;
  next_page: number | null;
  previous_page: number | null;
  page: number;
}

export interface PaginatedResponse<T> {
  [key: string]: T[] | PaginationMeta | unknown;
}

export interface Links {
  first: string;
  next: string | null;
  previous: string | null;
  last: string;
}
