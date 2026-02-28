[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / UserTeammatesResource

# Class: UserTeammatesResource

Defined in: src/resources/users.ts:153

## Constructors

### Constructor

> **new UserTeammatesResource**(`client`, `userId`): `UserTeammatesResource`

Defined in: src/resources/users.ts:154

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### userId

`number`

#### Returns

`UserTeammatesResource`

## Methods

### list()

> **list**(`params?`): `Promise`\<[`User`](../interfaces/User.md)[]\>

Defined in: src/resources/users.ts:163

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`User`](../interfaces/User.md)[]\>

***

### update()

> **update**(`data`): `Promise`\<[`User`](../interfaces/User.md)[]\>

Defined in: src/resources/users.ts:169

Update (replace) teammates for a user.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`User`](../interfaces/User.md)[]\>
