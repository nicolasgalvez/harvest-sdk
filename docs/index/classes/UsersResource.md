[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / UsersResource

# Class: UsersResource

Defined in: src/resources/users.ts:58

## Extends

- `CrudResource`\<[`User`](../interfaces/User.md)\>

## Constructors

### Constructor

> **new UsersResource**(`client`): `UsersResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`UsersResource`

#### Inherited from

`CrudResource<User>.constructor`

## Methods

### billableRates()

> **billableRates**(`userId`): [`UserBillableRatesResource`](UserBillableRatesResource.md)

Defined in: src/resources/users.ts:77

Access billable rates for a user.

#### Parameters

##### userId

`number`

#### Returns

[`UserBillableRatesResource`](UserBillableRatesResource.md)

***

### costRates()

> **costRates**(`userId`): [`UserCostRatesResource`](UserCostRatesResource.md)

Defined in: src/resources/users.ts:82

Access cost rates for a user.

#### Parameters

##### userId

`number`

#### Returns

[`UserCostRatesResource`](UserCostRatesResource.md)

***

### create()

> **create**(`data`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

#### Inherited from

`CrudResource.create`

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: src/resources/base.ts:45

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`CrudResource.delete`

***

### get()

> **get**(`id`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`User`](../interfaces/User.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`User`](../interfaces/User.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`User`](../interfaces/User.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`User`](../interfaces/User.md)\>

#### Inherited from

`CrudResource.listAll`

***

### me()

> **me**(): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: src/resources/users.ts:63

Retrieve the currently authenticated user.

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

***

### myProjectAssignments()

> **myProjectAssignments**(`params?`): `Promise`\<[`ProjectAssignment`](../interfaces/ProjectAssignment.md)[]\>

Defined in: src/resources/users.ts:68

List project assignments for the current user.

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`ProjectAssignment`](../interfaces/ProjectAssignment.md)[]\>

***

### projectAssignments()

> **projectAssignments**(`userId`): [`UserProjectAssignmentsResource`](UserProjectAssignmentsResource.md)

Defined in: src/resources/users.ts:92

List project assignments for a specific user.

#### Parameters

##### userId

`number`

#### Returns

[`UserProjectAssignmentsResource`](UserProjectAssignmentsResource.md)

***

### teammates()

> **teammates**(`userId`): [`UserTeammatesResource`](UserTeammatesResource.md)

Defined in: src/resources/users.ts:87

Access teammates for a user.

#### Parameters

##### userId

`number`

#### Returns

[`UserTeammatesResource`](UserTeammatesResource.md)

***

### update()

> **update**(`id`, `data`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

#### Inherited from

`CrudResource.update`
