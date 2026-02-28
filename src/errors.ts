export class HarvestApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    public readonly body: unknown,
  ) {
    super(`Harvest API error ${status}: ${statusText}`);
    this.name = "HarvestApiError";
  }
}

export class HarvestRateLimitError extends HarvestApiError {
  public readonly retryAfter: number;

  constructor(retryAfter: number, body: unknown) {
    super(429, "Too Many Requests", body);
    this.name = "HarvestRateLimitError";
    this.retryAfter = retryAfter;
  }
}

export class HarvestNotFoundError extends HarvestApiError {
  constructor(body: unknown) {
    super(404, "Not Found", body);
    this.name = "HarvestNotFoundError";
  }
}

export class HarvestUnprocessableError extends HarvestApiError {
  constructor(body: unknown) {
    super(422, "Unprocessable Entity", body);
    this.name = "HarvestUnprocessableError";
  }
}
