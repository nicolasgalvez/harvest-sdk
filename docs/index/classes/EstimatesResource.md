[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / EstimatesResource

# Class: EstimatesResource

Defined in: src/resources/estimates.ts:59

## Extends

- `CrudResource`\<[`Estimate`](../interfaces/Estimate.md)\>

## Constructors

### Constructor

> **new EstimatesResource**(`client`): `EstimatesResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`EstimatesResource`

#### Inherited from

`CrudResource<Estimate>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`Estimate`](../interfaces/Estimate.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Estimate`](../interfaces/Estimate.md)\>

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

> **get**(`id`): `Promise`\<[`Estimate`](../interfaces/Estimate.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Estimate`](../interfaces/Estimate.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`Estimate`](../interfaces/Estimate.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Estimate`](../interfaces/Estimate.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`Estimate`](../interfaces/Estimate.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`Estimate`](../interfaces/Estimate.md)\>

#### Inherited from

`CrudResource.listAll`

***

### messages()

> **messages**(`estimateId`): [`EstimateMessagesResource`](EstimateMessagesResource.md)

Defined in: src/resources/estimates.ts:64

Access messages for an estimate.

#### Parameters

##### estimateId

`number`

#### Returns

[`EstimateMessagesResource`](EstimateMessagesResource.md)

***

### update()

> **update**(`id`, `data`): `Promise`\<[`Estimate`](../interfaces/Estimate.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Estimate`](../interfaces/Estimate.md)\>

#### Inherited from

`CrudResource.update`
