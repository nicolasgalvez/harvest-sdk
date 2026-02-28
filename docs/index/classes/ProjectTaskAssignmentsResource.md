[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / ProjectTaskAssignmentsResource

# Class: ProjectTaskAssignmentsResource

Defined in: src/resources/taskAssignments.ts:34

Nested task assignments for a specific project.

## Constructors

### Constructor

> **new ProjectTaskAssignmentsResource**(`client`, `projectId`): `ProjectTaskAssignmentsResource`

Defined in: src/resources/taskAssignments.ts:35

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### projectId

`number`

#### Returns

`ProjectTaskAssignmentsResource`

## Methods

### create()

> **create**(`data`): `Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>

Defined in: src/resources/taskAssignments.ts:57

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: src/resources/taskAssignments.ts:65

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>

Defined in: src/resources/taskAssignments.ts:53

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>

***

### list()

> **list**(`params?`): `Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)[]\>

Defined in: src/resources/taskAssignments.ts:44

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>

Defined in: src/resources/taskAssignments.ts:49

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>

***

### update()

> **update**(`id`, `data`): `Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>

Defined in: src/resources/taskAssignments.ts:61

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>
