[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / TimeEntry

# Interface: TimeEntry

Defined in: src/resources/timeEntries.ts:3

## Properties

### billable

> **billable**: `boolean`

Defined in: src/resources/timeEntries.ts:18

***

### billable\_rate

> **billable\_rate**: `number` \| `null`

Defined in: src/resources/timeEntries.ts:20

***

### budgeted

> **budgeted**: `boolean`

Defined in: src/resources/timeEntries.ts:19

***

### client

> **client**: `object`

Defined in: src/resources/timeEntries.ts:25

#### currency

> **currency**: `string`

#### id

> **id**: `number`

#### name

> **name**: `string`

***

### cost\_rate

> **cost\_rate**: `number` \| `null`

Defined in: src/resources/timeEntries.ts:21

***

### created\_at

> **created\_at**: `string`

Defined in: src/resources/timeEntries.ts:22

***

### ended\_time

> **ended\_time**: `string` \| `null`

Defined in: src/resources/timeEntries.ts:16

***

### external\_reference

> **external\_reference**: \{ `account_id`: `string`; `group_id`: `string`; `id`: `string`; `permalink`: `string`; \} \| `null`

Defined in: src/resources/timeEntries.ts:31

***

### hours

> **hours**: `number`

Defined in: src/resources/timeEntries.ts:6

***

### hours\_without\_timer

> **hours\_without\_timer**: `number`

Defined in: src/resources/timeEntries.ts:7

***

### id

> **id**: `number`

Defined in: src/resources/timeEntries.ts:4

***

### invoice

> **invoice**: \{ `id`: `number`; `number`: `string`; \} \| `null`

Defined in: src/resources/timeEntries.ts:30

***

### is\_billed

> **is\_billed**: `boolean`

Defined in: src/resources/timeEntries.ts:13

***

### is\_closed

> **is\_closed**: `boolean`

Defined in: src/resources/timeEntries.ts:12

***

### is\_locked

> **is\_locked**: `boolean`

Defined in: src/resources/timeEntries.ts:10

***

### is\_running

> **is\_running**: `boolean`

Defined in: src/resources/timeEntries.ts:17

***

### locked\_reason

> **locked\_reason**: `string` \| `null`

Defined in: src/resources/timeEntries.ts:11

***

### notes

> **notes**: `string` \| `null`

Defined in: src/resources/timeEntries.ts:9

***

### project

> **project**: `object`

Defined in: src/resources/timeEntries.ts:26

#### code

> **code**: `string`

#### id

> **id**: `number`

#### name

> **name**: `string`

***

### rounded\_hours

> **rounded\_hours**: `number`

Defined in: src/resources/timeEntries.ts:8

***

### spent\_date

> **spent\_date**: `string`

Defined in: src/resources/timeEntries.ts:5

***

### started\_time

> **started\_time**: `string` \| `null`

Defined in: src/resources/timeEntries.ts:15

***

### task

> **task**: `object`

Defined in: src/resources/timeEntries.ts:27

#### id

> **id**: `number`

#### name

> **name**: `string`

***

### task\_assignment

> **task\_assignment**: `object`

Defined in: src/resources/timeEntries.ts:29

#### billable

> **billable**: `boolean`

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

#### updated\_at

> **updated\_at**: `string`

***

### timer\_started\_at

> **timer\_started\_at**: `string` \| `null`

Defined in: src/resources/timeEntries.ts:14

***

### updated\_at

> **updated\_at**: `string`

Defined in: src/resources/timeEntries.ts:23

***

### user

> **user**: `object`

Defined in: src/resources/timeEntries.ts:24

#### id

> **id**: `number`

#### name

> **name**: `string`

***

### user\_assignment

> **user\_assignment**: `object`

Defined in: src/resources/timeEntries.ts:28

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
