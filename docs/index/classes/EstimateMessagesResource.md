[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / EstimateMessagesResource

# Class: EstimateMessagesResource

Defined in: src/resources/estimates.ts:69

## Constructors

### Constructor

> **new EstimateMessagesResource**(`client`, `estimateId`): `EstimateMessagesResource`

Defined in: src/resources/estimates.ts:70

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### estimateId

`number`

#### Returns

`EstimateMessagesResource`

## Methods

### create()

> **create**(`data`): `Promise`\<[`EstimateMessage`](../interfaces/EstimateMessage.md)\>

Defined in: src/resources/estimates.ts:88

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`EstimateMessage`](../interfaces/EstimateMessage.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: src/resources/estimates.ts:92

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### list()

> **list**(`params?`): `Promise`\<[`EstimateMessage`](../interfaces/EstimateMessage.md)[]\>

Defined in: src/resources/estimates.ts:79

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`EstimateMessage`](../interfaces/EstimateMessage.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`EstimateMessage`](../interfaces/EstimateMessage.md)\>

Defined in: src/resources/estimates.ts:84

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`EstimateMessage`](../interfaces/EstimateMessage.md)\>
