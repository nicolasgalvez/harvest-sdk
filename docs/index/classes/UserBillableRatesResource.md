[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / UserBillableRatesResource

# Class: UserBillableRatesResource

Defined in: src/resources/users.ts:97

## Constructors

### Constructor

> **new UserBillableRatesResource**(`client`, `userId`): `UserBillableRatesResource`

Defined in: src/resources/users.ts:98

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### userId

`number`

#### Returns

`UserBillableRatesResource`

## Methods

### create()

> **create**(`data`): `Promise`\<[`BillableRate`](../interfaces/BillableRate.md)\>

Defined in: src/resources/users.ts:120

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`BillableRate`](../interfaces/BillableRate.md)\>

***

### get()

> **get**(`id`): `Promise`\<[`BillableRate`](../interfaces/BillableRate.md)\>

Defined in: src/resources/users.ts:116

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`BillableRate`](../interfaces/BillableRate.md)\>

***

### list()

> **list**(`params?`): `Promise`\<[`BillableRate`](../interfaces/BillableRate.md)[]\>

Defined in: src/resources/users.ts:107

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`BillableRate`](../interfaces/BillableRate.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`BillableRate`](../interfaces/BillableRate.md)\>

Defined in: src/resources/users.ts:112

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`BillableRate`](../interfaces/BillableRate.md)\>
