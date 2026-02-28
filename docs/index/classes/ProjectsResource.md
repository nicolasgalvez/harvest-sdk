[**harvest-sdk**](../../README.md)

***

[harvest-sdk](../../README.md) / [index](../README.md) / ProjectsResource

# Class: ProjectsResource

Defined in: src/resources/projects.ts:32

## Extends

- `CrudResource`\<[`Project`](../interfaces/Project.md)\>

## Constructors

### Constructor

> **new ProjectsResource**(`client`): `ProjectsResource`

Defined in: src/resources/base.ts:6

#### Parameters

##### client

[`HarvestClient`](HarvestClient.md)

#### Returns

`ProjectsResource`

#### Inherited from

`CrudResource<Project>.constructor`

## Methods

### create()

> **create**(`data`): `Promise`\<[`Project`](../interfaces/Project.md)\>

Defined in: src/resources/base.ts:37

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Project`](../interfaces/Project.md)\>

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

> **get**(`id`): `Promise`\<[`Project`](../interfaces/Project.md)\>

Defined in: src/resources/base.ts:33

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Project`](../interfaces/Project.md)\>

#### Inherited from

`CrudResource.get`

***

### list()

> **list**(`params?`): `Promise`\<[`Project`](../interfaces/Project.md)[]\>

Defined in: src/resources/base.ts:21

#### Parameters

##### params?

[`PaginationParams`](../interfaces/PaginationParams.md) & `Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Project`](../interfaces/Project.md)[]\>

#### Inherited from

`CrudResource.list`

***

### listAll()

> **listAll**(`params?`): [`Paginator`](Paginator.md)\<[`Project`](../interfaces/Project.md)\>

Defined in: src/resources/base.ts:29

#### Parameters

##### params?

`Omit`\<[`PaginationParams`](../interfaces/PaginationParams.md), `"page"`\> & `Record`\<`string`, `unknown`\>

#### Returns

[`Paginator`](Paginator.md)\<[`Project`](../interfaces/Project.md)\>

#### Inherited from

`CrudResource.listAll`

***

### taskAssignments()

> **taskAssignments**(`projectId`): [`ProjectTaskAssignmentsResource`](ProjectTaskAssignmentsResource.md)

Defined in: src/resources/projects.ts:42

Access task assignments nested under a project.

#### Parameters

##### projectId

`number`

#### Returns

[`ProjectTaskAssignmentsResource`](ProjectTaskAssignmentsResource.md)

***

### update()

> **update**(`id`, `data`): `Promise`\<[`Project`](../interfaces/Project.md)\>

Defined in: src/resources/base.ts:41

#### Parameters

##### id

`number`

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`Project`](../interfaces/Project.md)\>

#### Inherited from

`CrudResource.update`

***

### userAssignments()

> **userAssignments**(`projectId`): [`ProjectUserAssignmentsResource`](ProjectUserAssignmentsResource.md)

Defined in: src/resources/projects.ts:37

Access user assignments nested under a project.

#### Parameters

##### projectId

`number`

#### Returns

[`ProjectUserAssignmentsResource`](ProjectUserAssignmentsResource.md)
