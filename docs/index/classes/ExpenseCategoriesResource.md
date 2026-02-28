[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / ExpenseCategoriesResource

# Class: ExpenseCategoriesResource

Defined in: src/resources/expenseCategories.ts:14

## Extends

- `CrudResource`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

## Constructors

### Constructor

> **new ExpenseCategoriesResource**(`client`): `ExpenseCategoriesResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`ExpenseCategoriesResource`

#### Inherited from

`CrudResource<ExpenseCategory>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

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

> **get**(`id`): `Promise`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

#### Inherited from

`CrudResource.listAll`

***

### update()

> **update**(`id`, `data`): `Promise`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`ExpenseCategory`](../interfaces/ExpenseCategory.md)\>

#### Inherited from

`CrudResource.update`
