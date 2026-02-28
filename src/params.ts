/**
 * Serialize an object into bracket-notation key-value pairs
 * suitable for application/x-www-form-urlencoded bodies.
 *
 * Handles nested objects and arrays:
 *   { line_items: [{ kind: "Service" }] }
 *   → "line_items[0][kind]=Service"
 */
export function serializeParams(
  params: Record<string, unknown>,
): string {
  const parts: string[] = [];

  function encode(prefix: string, value: unknown): void {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((item, i) => {
        encode(`${prefix}[${i}]`, item);
      });
    } else if (typeof value === "object" && !(value instanceof Date)) {
      for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
        encode(`${prefix}[${k}]`, v);
      }
    } else {
      parts.push(
        `${encodeURIComponent(prefix)}=${encodeURIComponent(String(value))}`,
      );
    }
  }

  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined) continue;

    if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (typeof item === "object" && item !== null) {
          encode(`${key}[${i}]`, item);
        } else {
          parts.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`,
          );
        }
      });
    } else if (typeof value === "object" && !(value instanceof Date)) {
      encode(key, value);
    } else {
      parts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
      );
    }
  }

  return parts.join("&");
}

/** Build a query string from flat params (for GET requests) */
export function buildQueryString(
  params?: Record<string, unknown>,
): string {
  if (!params) return "";
  const parts: string[] = [];
  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined) continue;
    if (typeof value === "boolean") {
      parts.push(`${encodeURIComponent(key)}=${value}`);
    } else {
      parts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
      );
    }
  }
  return parts.length ? `?${parts.join("&")}` : "";
}
