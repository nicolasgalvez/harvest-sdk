[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / TimeEntriesResource

# Class: TimeEntriesResource

Defined in: src/resources/timeEntries.ts:34

## Extends

- `CrudResource`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

## Constructors

### Constructor

> **new TimeEntriesResource**(`client`): `TimeEntriesResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`TimeEntriesResource`

#### Inherited from

`CrudResource<TimeEntry>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

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

### deleteExternalReference()

> **deleteExternalReference**(`id`): `Promise`\<`void`\>

Defined in: src/resources/timeEntries.ts:49

Delete external reference for a time entry.

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

#### Inherited from

`CrudResource.listAll`

***

### restart()

> **restart**(`id`): `Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

Defined in: src/resources/timeEntries.ts:44

Restart a stopped time entry timer.

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

***

### stop()

> **stop**(`id`): `Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

Defined in: src/resources/timeEntries.ts:39

Stop a running time entry timer.

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

***

### update()

> **update**(`id`, `data`): `Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`TimeEntry`](../interfaces/TimeEntry.md)\>

#### Inherited from

`CrudResource.update`
