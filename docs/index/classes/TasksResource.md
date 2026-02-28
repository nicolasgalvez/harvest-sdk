[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / TasksResource

# Class: TasksResource

Defined in: src/resources/tasks.ts:14

## Extends

- `CrudResource`\<[`Task`](../interfaces/Task.md)\>

## Constructors

### Constructor

> **new TasksResource**(`client`): `TasksResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`TasksResource`

#### Inherited from

`CrudResource<Task>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`Task`](../interfaces/Task.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Task`](../interfaces/Task.md)\>

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

> **get**(`id`): `Promise`\<[`Task`](../interfaces/Task.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Task`](../interfaces/Task.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`Task`](../interfaces/Task.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Task`](../interfaces/Task.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`Task`](../interfaces/Task.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`Task`](../interfaces/Task.md)\>

#### Inherited from

`CrudResource.listAll`

***

### update()

> **update**(`id`, `data`): `Promise`\<[`Task`](../interfaces/Task.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Task`](../interfaces/Task.md)\>

#### Inherited from

`CrudResource.update`
