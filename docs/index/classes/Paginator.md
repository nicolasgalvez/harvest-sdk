[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / Paginator

# Class: Paginator\<T\>

Defined in: src/paginator.ts:10

Auto-paginating async iterable.

Usage:
  for await (const entry of harvest.timeEntries.listAll()) { ... }
  const all = await harvest.timeEntries.listAll().toArray();

## Type Parameters

### T

`T`

## Implements

- `AsyncIterable`\<`T`\>

## Constructors

### Constructor

> **new Paginator**\<`T`\>(`client`, `path`, `dataKey`, `params?`): `Paginator`\<`T`\>

Defined in: src/paginator.ts:16

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

##### path

`string`

##### dataKey

`string`

##### params?

`Record`\<`string`, `unknown`\> = `{}`

#### Returns

`Paginator`\<`T`\>

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterableIterator`\<`T`\>

Defined in: src/paginator.ts:28

#### Returns

`AsyncIterableIterator`\<`T`\>

#### Implementation of

`AsyncIterable.[asyncIterator]`

***

### toArray()

> **toArray**(): `Promise`\<`T`[]\>

Defined in: src/paginator.ts:51

#### Returns

`Promise`\<`T`[]\>
