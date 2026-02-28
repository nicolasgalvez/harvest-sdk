import { describe, it, expect } from "vitest";
import { mockClient } from "../helpers.js";
import { ProjectsResource } from "../../src/resources/projects.js";
import { ProjectUserAssignmentsResource } from "../../src/resources/userAssignments.js";
import { ProjectTaskAssignmentsResource } from "../../src/resources/taskAssignments.js";

describe("ProjectsResource", () => {
  it("userAssignments(projectId) returns ProjectUserAssignmentsResource", () => {
    const client = mockClient();
    const resource = new ProjectsResource(client);
    const sub = resource.userAssignments(99);

    expect(sub).toBeInstanceOf(ProjectUserAssignmentsResource);
  });

  it("taskAssignments(projectId) returns ProjectTaskAssignmentsResource", () => {
    const client = mockClient();
    const resource = new ProjectsResource(client);
    const sub = resource.taskAssignments(99);

    expect(sub).toBeInstanceOf(ProjectTaskAssignmentsResource);
  });

  it("nested userAssignments constructs correct URLs", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ user_assignments: [{ id: 1 }] });

    const resource = new ProjectsResource(client);
    const sub = resource.userAssignments(42);
    await sub.list();

    expect(client.get).toHaveBeenCalledWith(
      "/projects/42/user_assignments",
      undefined,
    );
  });

  it("nested taskAssignments constructs correct URLs", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ task_assignments: [{ id: 1 }] });

    const resource = new ProjectsResource(client);
    const sub = resource.taskAssignments(42);
    await sub.list();

    expect(client.get).toHaveBeenCalledWith(
      "/projects/42/task_assignments",
      undefined,
    );
  });

  it("nested userAssignments CRUD uses correct paths", async () => {
    const client = mockClient();
    client.get.mockResolvedValue({ id: 5 });
    client.post.mockResolvedValue({ id: 6 });
    client.patch.mockResolvedValue({ id: 5 });
    client.delete.mockResolvedValue(undefined);

    const sub = new ProjectUserAssignmentsResource(client, 42);

    await sub.get(5);
    expect(client.get).toHaveBeenCalledWith(
      "/projects/42/user_assignments/5",
    );

    await sub.create({ user_id: 10 });
    expect(client.post).toHaveBeenCalledWith(
      "/projects/42/user_assignments",
      { user_id: 10 },
    );

    await sub.update(5, { is_project_manager: true });
    expect(client.patch).toHaveBeenCalledWith(
      "/projects/42/user_assignments/5",
      { is_project_manager: true },
    );

    await sub.delete(5);
    expect(client.delete).toHaveBeenCalledWith(
      "/projects/42/user_assignments/5",
    );
  });
});
