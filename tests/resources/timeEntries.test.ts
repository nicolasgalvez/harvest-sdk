import { describe, it, expect } from "vitest";
import { mockClient } from "../helpers.js";
import { TimeEntriesResource } from "../../src/resources/timeEntries.js";

describe("TimeEntriesResource", () => {
  it("stop(id) calls client.patch with correct path", async () => {
    const client = mockClient();
    const entry = { id: 5, is_running: false };
    client.patch.mockResolvedValue(entry);

    const resource = new TimeEntriesResource(client);
    const result = await resource.stop(5);

    expect(client.patch).toHaveBeenCalledWith("/time_entries/5/stop");
    expect(result).toEqual(entry);
  });

  it("restart(id) calls client.patch with correct path", async () => {
    const client = mockClient();
    const entry = { id: 5, is_running: true };
    client.patch.mockResolvedValue(entry);

    const resource = new TimeEntriesResource(client);
    const result = await resource.restart(5);

    expect(client.patch).toHaveBeenCalledWith("/time_entries/5/restart");
    expect(result).toEqual(entry);
  });

  it("deleteExternalReference(id) calls client.delete with correct path", async () => {
    const client = mockClient();
    client.delete.mockResolvedValue(undefined);

    const resource = new TimeEntriesResource(client);
    await resource.deleteExternalReference(5);

    expect(client.delete).toHaveBeenCalledWith(
      "/time_entries/5/external_reference",
    );
  });
});
