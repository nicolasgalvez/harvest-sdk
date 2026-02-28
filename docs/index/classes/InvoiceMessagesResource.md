[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / InvoiceMessagesResource

# Class: InvoiceMessagesResource

Defined in: src/resources/invoices.ts:84

## Constructors

### Constructor

> **new InvoiceMessagesResource**(`client`, `invoiceId`): `InvoiceMessagesResource`

Defined in: src/resources/invoices.ts:85

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### invoiceId

`number`

#### Returns

`InvoiceMessagesResource`

## Methods

### create()

> **create**(`data`): `Promise`\<[`InvoiceMessage`](../interfaces/InvoiceMessage.md)\>

Defined in: src/resources/invoices.ts:103

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`InvoiceMessage`](../interfaces/InvoiceMessage.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: src/resources/invoices.ts:107

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### list()

> **list**(`params?`): `Promise`\<[`InvoiceMessage`](../interfaces/InvoiceMessage.md)[]\>

Defined in: src/resources/invoices.ts:94

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`InvoiceMessage`](../interfaces/InvoiceMessage.md)[]\>

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`InvoiceMessage`](../interfaces/InvoiceMessage.md)\>

Defined in: src/resources/invoices.ts:99

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`InvoiceMessage`](../interfaces/InvoiceMessage.md)\>
