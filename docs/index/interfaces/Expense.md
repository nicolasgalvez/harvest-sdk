[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / Expense

# Interface: Expense

Defined in: src/resources/expenses.ts:3

## Properties

### billable

> **billable**: `boolean`

Defined in: src/resources/expenses.ts:13

***

### client

> **client**: `object`

Defined in: src/resources/expenses.ts:21

#### currency

> **currency**: `string`

#### id

> **id**: `number`

#### name

> **name**: `string`

***

### created\_at

> **created\_at**: `string`

Defined in: src/resources/expenses.ts:15

***

### expense\_category

> **expense\_category**: `object`

Defined in: src/resources/expenses.ts:20

#### id

> **id**: `number`

#### name

> **name**: `string`

#### unit\_name

> **unit\_name**: `string` \| `null`

#### unit\_price

> **unit\_price**: `number` \| `null`

***

### id

> **id**: `number`

Defined in: src/resources/expenses.ts:4

***

### invoice

> **invoice**: \{ `id`: `number`; `number`: `string`; \} \| `null`

Defined in: src/resources/expenses.ts:22

***

### is\_billed

> **is\_billed**: `boolean`

Defined in: src/resources/expenses.ts:10

***

### is\_closed

> **is\_closed**: `boolean`

Defined in: src/resources/expenses.ts:8

***

### is\_locked

> **is\_locked**: `boolean`

Defined in: src/resources/expenses.ts:9

***

### locked\_reason

> **locked\_reason**: `string` \| `null`

Defined in: src/resources/expenses.ts:11

***

### notes

> **notes**: `string` \| `null`

Defined in: src/resources/expenses.ts:5

***

### project

> **project**: `object`

Defined in: src/resources/expenses.ts:19

#### code

> **code**: `string`

#### id

> **id**: `number`

#### name

> **name**: `string`

***

### receipt

> **receipt**: \{ `content_type`: `string`; `file_name`: `string`; `file_size`: `number`; `url`: `string`; \} \| `null`

Defined in: src/resources/expenses.ts:14

***

### spent\_date

> **spent\_date**: `string`

Defined in: src/resources/expenses.ts:12

***

### total\_cost

> **total\_cost**: `number`

Defined in: src/resources/expenses.ts:6

***

### units

> **units**: `number` \| `null`

Defined in: src/resources/expenses.ts:7

***

### updated\_at

> **updated\_at**: `string`

Defined in: src/resources/expenses.ts:16

***

### user

> **user**: `object`

Defined in: src/resources/expenses.ts:17

#### id

> **id**: `number`

#### name

> **name**: `string`

***

### user\_assignment

> **user\_assignment**: `object`

Defined in: src/resources/expenses.ts:18

#### budget

> **budget**: `number` \| `null`

#### created\_at

> **created\_at**: `string`

#### hourly\_rate

> **hourly\_rate**: `number` \| `null`

#### id

> **id**: `number`

#### is\_active

> **is\_active**: `boolean`

#### is\_project\_manager

> **is\_project\_manager**: `boolean`

#### updated\_at

> **updated\_at**: `string`
