[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / UserCostRatesResource

# Class: UserCostRatesResource

Defined in: src/resources/users.ts:125

## Constructors

### Constructor

> **new UserCostRatesResource**(`client`, `userId`): `UserCostRatesResource`

Defined in: src/resources/users.ts:126

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### userId

`number`

#### Returns

`UserCostRatesResource`

## Methods

### create()

> **create**(`data`): `Promise`\<[`CostRate`](../interfaces/CostRate.md)\>

Defined in: src/resources/users.ts:148

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`CostRate`](../interfaces/CostRate.md)\>

***

### get()

> **get**(`id`): `Promise`\<[`CostRate`](../interfaces/CostRate.md)\>

Defined in: src/resources/users.ts:144

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`CostRate`](../interfaces/CostRate.md)\>

***

### list()

> **list**(`params?`): `Promise`\<[`CostRate`](../interfaces/CostRate.md)[]\>

Defined in: src/resources/users.ts:135

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`CostRate`](../interfaces/CostRate.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`CostRate`](../interfaces/CostRate.md)\>

Defined in: src/resources/users.ts:140

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`CostRate`](../interfaces/CostRate.md)\>
