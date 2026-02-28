[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / ReportsResource

# Class: ReportsResource

Defined in: src/resources/reports.ts:141

## Constructors

### Constructor

> **new ReportsResource**(`client`): `ReportsResource`

Defined in: src/resources/reports.ts:145

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`ReportsResource`

## Properties

### expenses

> `readonly` **expenses**: [`ExpenseReports`](ExpenseReports.md)

Defined in: src/resources/reports.ts:143

***

### time

> `readonly` **time**: [`TimeReports`](TimeReports.md)

Defined in: src/resources/reports.ts:142

## Methods

### projectBudget()

> **projectBudget**(`params?`): `Promise`\<[`ProjectBudgetReport`](../interfaces/ProjectBudgetReport.md)\>

Defined in: src/resources/reports.ts:154

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`ProjectBudgetReport`](../interfaces/ProjectBudgetReport.md)\>

***

### uninvoiced()

> **uninvoiced**(`params`): `Promise`\<[`UninvoicedReport`](../interfaces/UninvoicedReport.md)\>

Defined in: src/resources/reports.ts:150

#### Parameters

##### params

[`ReportParams`](../interfaces/ReportParams.md)

#### Returns

`Promise`\<[`UninvoicedReport`](../interfaces/UninvoicedReport.md)\>
