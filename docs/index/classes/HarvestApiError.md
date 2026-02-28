[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / HarvestApiError

# Class: HarvestApiError

Defined in: src/errors.ts:1

## Extends

- `Error`

## Extended by

- [`HarvestRateLimitError`](HarvestRateLimitError.md)
- [`HarvestNotFoundError`](HarvestNotFoundError.md)
- [`HarvestUnprocessableError`](HarvestUnprocessableError.md)

## Constructors

### Constructor

> **new HarvestApiError**(`status`, `statusText`, `body`): `HarvestApiError`

Defined in: src/errors.ts:2

#### Parameters

##### status

`number`

##### statusText

`string`

##### body

`unknown`

#### Returns

`HarvestApiError`

#### Overrides

`Error.constructor`

## Properties

### body

> `readonly` **body**: `unknown`

Defined in: src/errors.ts:5

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### status

> `readonly` **status**: `number`

Defined in: src/errors.ts:3

***

### statusText

> `readonly` **statusText**: `string`

Defined in: src/errors.ts:4
