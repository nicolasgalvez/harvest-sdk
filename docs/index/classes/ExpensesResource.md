[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / ExpensesResource

# Class: ExpensesResource

Defined in: src/resources/expenses.ts:25

## Extends

- `CrudResource`\<[`Expense`](../interfaces/Expense.md)\>

## Constructors

### Constructor

> **new ExpensesResource**(`client`): `ExpensesResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`ExpensesResource`

#### Inherited from

`CrudResource<Expense>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`Expense`](../interfaces/Expense.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Expense`](../interfaces/Expense.md)\>

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

> **get**(`id`): `Promise`\<[`Expense`](../interfaces/Expense.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Expense`](../interfaces/Expense.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`Expense`](../interfaces/Expense.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Expense`](../interfaces/Expense.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`Expense`](../interfaces/Expense.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`Expense`](../interfaces/Expense.md)\>

#### Inherited from

`CrudResource.listAll`

***

### update()

> **update**(`id`, `data`): `Promise`\<[`Expense`](../interfaces/Expense.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Expense`](../interfaces/Expense.md)\>

#### Inherited from

`CrudResource.update`
