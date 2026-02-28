[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / InvoiceItemCategoriesResource

# Class: InvoiceItemCategoriesResource

Defined in: src/resources/invoiceItemCategories.ts:12

## Extends

- `CrudResource`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

## Constructors

### Constructor

> **new InvoiceItemCategoriesResource**(`client`): `InvoiceItemCategoriesResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`InvoiceItemCategoriesResource`

#### Inherited from

`CrudResource<InvoiceItemCategory>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

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

> **get**(`id`): `Promise`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

#### Inherited from

`CrudResource.listAll`

***

### update()

> **update**(`id`, `data`): `Promise`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`InvoiceItemCategory`](../interfaces/InvoiceItemCategory.md)\>

#### Inherited from

`CrudResource.update`
