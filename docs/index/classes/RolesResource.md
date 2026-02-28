[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / RolesResource

# Class: RolesResource

Defined in: src/resources/roles.ts:11

## Extends

- `CrudResource`\<[`Role`](../interfaces/Role.md)\>

## Constructors

### Constructor

> **new RolesResource**(`client`): `RolesResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`RolesResource`

#### Inherited from

`CrudResource<Role>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`Role`](../interfaces/Role.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

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

> **get**(`id`): `Promise`\<[`Role`](../interfaces/Role.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`Role`](../interfaces/Role.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`Role`](../interfaces/Role.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`Role`](../interfaces/Role.md)\>

#### Inherited from

`CrudResource.listAll`

***

### update()

> **update**(`id`, `data`): `Promise`\<[`Role`](../interfaces/Role.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

#### Inherited from

`CrudResource.update`
