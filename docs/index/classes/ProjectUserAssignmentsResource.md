[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / ProjectUserAssignmentsResource

# Class: ProjectUserAssignmentsResource

Defined in: src/resources/userAssignments.ts:35

Nested user assignments for a specific project.

## Constructors

### Constructor

> **new ProjectUserAssignmentsResource**(`client`, `projectId`): `ProjectUserAssignmentsResource`

Defined in: src/resources/userAssignments.ts:36

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### projectId

`number`

#### Returns

`ProjectUserAssignmentsResource`

## Methods

### create()

> **create**(`data`): `Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)\>

Defined in: src/resources/userAssignments.ts:58

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: src/resources/userAssignments.ts:66

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)\>

Defined in: src/resources/userAssignments.ts:54

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)\>

***

### list()

> **list**(`params?`): `Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)[]\>

Defined in: src/resources/userAssignments.ts:45

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`UserAssignment`](../interfaces/UserAssignment.md)\>

Defined in: src/resources/userAssignments.ts:50

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`UserAssignment`](../interfaces/UserAssignment.md)\>

***

### update()

> **update**(`id`, `data`): `Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)\>

Defined in: src/resources/userAssignments.ts:62

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)\>
