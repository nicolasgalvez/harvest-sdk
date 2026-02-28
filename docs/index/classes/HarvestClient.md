[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / HarvestClient

# Class: HarvestClient

Defined in: src/client.ts:10

## Constructors

### Constructor

> **new HarvestClient**(`config`): `HarvestClient`

Defined in: src/client.ts:14

#### Parameters

##### config

[`HarvestConfig`](../interfaces/HarvestConfig.md)

#### Returns

`HarvestClient`

## Methods

### delete()

> **delete**(`path`): `Promise`\<`void`\>

Defined in: src/client.ts:53

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**\<`T`\>(`path`, `params?`): `Promise`\<`T`\>

Defined in: src/client.ts:23

#### Type Parameters

##### T

`T`

#### Parameters

##### path

`string`

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`T`\>

***

### patch()

> **patch**\<`T`\>(`path`, `body?`): `Promise`\<`T`\>

Defined in: src/client.ts:41

#### Type Parameters

##### T

`T`

#### Parameters

##### path

`string`

##### body?

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`T`\>

***

### post()

> **post**\<`T`\>(`path`, `body?`): `Promise`\<`T`\>

Defined in: src/client.ts:29

#### Type Parameters

##### T

`T`

#### Parameters

##### path

`string`

##### body?

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`T`\>
