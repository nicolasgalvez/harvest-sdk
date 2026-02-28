[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / UserProjectAssignmentsResource

# Class: UserProjectAssignmentsResource

Defined in: src/resources/users.ts:175

## Constructors

### Constructor

> **new UserProjectAssignmentsResource**(`client`, `userId`): `UserProjectAssignmentsResource`

Defined in: src/resources/users.ts:176

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### userId

`number`

#### Returns

`UserProjectAssignmentsResource`

## Methods

### list()

> **list**(`params?`): `Promise`\<[`ProjectAssignment`](../interfaces/ProjectAssignment.md)[]\>

Defined in: src/resources/users.ts:185

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`ProjectAssignment`](../interfaces/ProjectAssignment.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`ProjectAssignment`](../interfaces/ProjectAssignment.md)\>

Defined in: src/resources/users.ts:190

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`ProjectAssignment`](../interfaces/ProjectAssignment.md)\>
