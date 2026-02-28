[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / InvoicesResource

# Class: InvoicesResource

Defined in: src/resources/invoices.ts:74

## Extends

- `CrudResource`\<[`Invoice`](../interfaces/Invoice.md)\>

## Constructors

### Constructor

> **new InvoicesResource**(`client`): `InvoicesResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`InvoicesResource`

#### Inherited from

`CrudResource<Invoice>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

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

> **get**(`id`): `Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`Invoice`](../interfaces/Invoice.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Invoice`](../interfaces/Invoice.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`Invoice`](../interfaces/Invoice.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`Invoice`](../interfaces/Invoice.md)\>

#### Inherited from

`CrudResource.listAll`

***

### messages()

> **messages**(`invoiceId`): [`InvoiceMessagesResource`](InvoiceMessagesResource.md)

Defined in: src/resources/invoices.ts:79

Access messages (send, list, delete) for an invoice.

#### Parameters

##### invoiceId

`number`

#### Returns

[`InvoiceMessagesResource`](InvoiceMessagesResource.md)

***

### update()

> **update**(`id`, `data`): `Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

#### Inherited from

`CrudResource.update`
