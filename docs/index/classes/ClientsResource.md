[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / ClientsResource

# Class: ClientsResource

Defined in: src/resources/clients.ts:14

## Extends

- `CrudResource`\<[`Client`](../interfaces/Client.md)\>

## Constructors

### Constructor

> **new ClientsResource**(`client`): `ClientsResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`ClientsResource`

#### Inherited from

`CrudResource<Client>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`Client`](../interfaces/Client.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Client`](../interfaces/Client.md)\>

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

> **get**(`id`): `Promise`\<[`Client`](../interfaces/Client.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Client`](../interfaces/Client.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`Client`](../interfaces/Client.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Client`](../interfaces/Client.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`Client`](../interfaces/Client.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`Client`](../interfaces/Client.md)\>

#### Inherited from

`CrudResource.listAll`

***

### update()

> **update**(`id`, `data`): `Promise`\<[`Client`](../interfaces/Client.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Client`](../interfaces/Client.md)\>

#### Inherited from

`CrudResource.update`
