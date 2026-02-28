import { describe, it, expect } from "vitest";
import { mockClient } from "../helpers.js";
import {
  UsersResource,
  UserBillableRatesResource,
  UserCostRatesResource,
  UserTeammatesResource,
  UserProjectAssignmentsResource,
} from "../../src/resources/users.js";

describe("UsersResource", () => {
  it("me() calls client.get('/users/me')", async () => {
    const client = mockClient();
    const user = { id: 1, first_name: "Nick" };
    client.get.mockResolvedValue(user);

    const resource = new UsersResource(client);
    const result = await resource.me();

    expect(client.get).toHaveBeenCalledWith("/users/me");
    expect(result).toEqual(user);
  });

  it("myProjectAssignments() extracts project_assignments key", async () => {
    const client = mockClient();
    const assignments = [{ id: 1 }, { id: 2 }];
    client.get.mockResolvedValue({ project_assignments: assignments });

    const resource = new UsersResource(client);
    const result = await resource.myProjectAssignments();

    expect(client.get).toHaveBeenCalledWith(
      "/users/me/project_assignments",
      undefined,
    );
    expect(result).toEqual(assignments);
  });

  it("myProjectAssignments() falls back to empty array", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({});

    const resource = new UsersResource(client);
    const result = await resource.myProjectAssignments();

    expect(result).toEqual([]);
  });

  it("billableRates() returns UserBillableRatesResource", () => {
    const client = mockClient();
    const resource = new UsersResource(client);
    const sub = resource.billableRates(42);

    expect(sub).toBeInstanceOf(UserBillableRatesResource);
  });

  it("costRates() returns UserCostRatesResource", () => {
    const client = mockClient();
    const resource = new UsersResource(client);
    const sub = resource.costRates(42);

    expect(sub).toBeInstanceOf(UserCostRatesResource);
  });

  it("teammates() returns UserTeammatesResource", () => {
    const client = mockClient();
    const resource = new UsersResource(client);
    const sub = resource.teammates(42);

    expect(sub).toBeInstanceOf(UserTeammatesResource);
  });

  it("projectAssignments() returns UserProjectAssignmentsResource", () => {
    const client = mockClient();
    const resource = new UsersResource(client);
    const sub = resource.projectAssignments(42);

    expect(sub).toBeInstanceOf(UserProjectAssignmentsResource);
  });
});

describe("UserBillableRatesResource", () => {
  it("list() uses correct path with userId", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ billable_rates: [{ id: 1 }] });

    const resource = new UserBillableRatesResource(client, 42);
    const result = await resource.list();

    expect(client.get).toHaveBeenCalledWith(
      "/users/42/billable_rates",
      undefined,
    );
    expect(result).toEqual([{ id: 1 }]);
  });

  it("get(id) uses correct path", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ id: 10, amount: 150 });

    const resource = new UserBillableRatesResource(client, 42);
    await resource.get(10);

    expect(client.get).toHaveBeenCalledWith("/users/42/billable_rates/10");
  });

  it("create(data) uses correct path", async () => {
    const client = mockClient();
    client.post.mockResolvedValue({ id: 11, amount: 200 });

    const resource = new UserBillableRatesResource(client, 42);
    await resource.create({ amount: 200 });

    expect(client.post).toHaveBeenCalledWith("/users/42/billable_rates", {
      amount: 200,
    });
  });
});

describe("UserTeammatesResource", () => {
  it("list() extracts teammates from response", async () => {
    const client = mockClient();
    const teammates = [{ id: 1 }, { id: 2 }];
    client.get.mockResolvedValue({ teammates });

    const resource = new UserTeammatesResource(client, 42);
    const result = await resource.list();

    expect(client.get).toHaveBeenCalledWith(
      "/users/42/teammates",
      undefined,
    );
    expect(result).toEqual(teammates);
  });

  it("update() unwraps .teammates from response", async () => {
    const client = mockClient();
    const teammates = [{ id: 10 }, { id: 20 }];
    client.patch.mockResolvedValue({ teammates });

    const resource = new UserTeammatesResource(client, 42);
    const result = await resource.update({ teammate_ids: [10, 20] });

    expect(client.patch).toHaveBeenCalledWith("/users/42/teammates", {
      teammate_ids: [10, 20],
    });
    expect(result).toEqual(teammates);
  });

  it("update() falls back to empty array", async () => {
    const client = mockClient();
    client.patch.mockResolvedValue({});

    const resource = new UserTeammatesResource(client, 42);
    const result = await resource.update({ teammate_ids: [] });

    expect(result).toEqual([]);
  });
});
