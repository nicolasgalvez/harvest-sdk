[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / EstimateItemCategoriesResource

# Class: EstimateItemCategoriesResource

Defined in: src/resources/estimateItemCategories.ts:10

## Extends

- `CrudResource`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

## Constructors

### Constructor

> **new EstimateItemCategoriesResource**(`client`): `EstimateItemCategoriesResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`EstimateItemCategoriesResource`

#### Inherited from

`CrudResource<EstimateItemCategory>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

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

> **get**(`id`): `Promise`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

#### Inherited from

`CrudResource.listAll`

***

### update()

> **update**(`id`, `data`): `Promise`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`EstimateItemCategory`](../interfaces/EstimateItemCategory.md)\>

#### Inherited from

`CrudResource.update`
