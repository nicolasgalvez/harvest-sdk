[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / UserAssignmentsResource

# Class: UserAssignmentsResource

Defined in: src/resources/userAssignments.ts:20

Top-level user assignments list (across all projects).

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new UserAssignmentsResource**(`client`): `UserAssignmentsResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`UserAssignmentsResource`

#### Inherited from

`BaseResource.constructor`

## Methods

### list()

> **list**(`params?`): `Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)[]\>

Defined in: src/resources/userAssignments.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`UserAssignment`](../interfaces/UserAssignment.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`UserAssignment`](../interfaces/UserAssignment.md)\>

Defined in: src/resources/userAssignments.ts:29

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`UserAssignment`](../interfaces/UserAssignment.md)\>
