[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / TaskAssignmentsResource

# Class: TaskAssignmentsResource

Defined in: src/resources/taskAssignments.ts:19

Top-level task assignments list (across all projects).

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new TaskAssignmentsResource**(`client`): `TaskAssignmentsResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`TaskAssignmentsResource`

#### Inherited from

`BaseResource.constructor`

## Methods

### list()

> **list**(`params?`): `Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)[]\>

Defined in: src/resources/taskAssignments.ts:20

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`TaskAssignment`](../interfaces/TaskAssignment.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>

Defined in: src/resources/taskAssignments.ts:28

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`TaskAssignment`](../interfaces/TaskAssignment.md)\>
