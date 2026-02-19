# `packerRunTask` Submodule <a name="`packerRunTask` Submodule" id="@cdktn/provider-hcp.packerRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PackerRunTask <a name="PackerRunTask" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task hcp_packer_run_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.Initializer"></a>

```typescript
import { packerRunTask } from '@cdktn/provider-hcp'

new packerRunTask.PackerRunTask(scope: Construct, id: string, config?: PackerRunTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig">PackerRunTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig">PackerRunTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetRegenerateHmac">resetRegenerateHmac</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.putTimeouts"></a>

```typescript
public putTimeouts(value: PackerRunTaskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts">PackerRunTaskTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegenerateHmac` <a name="resetRegenerateHmac" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetRegenerateHmac"></a>

```typescript
public resetRegenerateHmac(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PackerRunTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.isConstruct"></a>

```typescript
import { packerRunTask } from '@cdktn/provider-hcp'

packerRunTask.PackerRunTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.isTerraformElement"></a>

```typescript
import { packerRunTask } from '@cdktn/provider-hcp'

packerRunTask.PackerRunTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.isTerraformResource"></a>

```typescript
import { packerRunTask } from '@cdktn/provider-hcp'

packerRunTask.PackerRunTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.generateConfigForImport"></a>

```typescript
import { packerRunTask } from '@cdktn/provider-hcp'

packerRunTask.PackerRunTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PackerRunTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PackerRunTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PackerRunTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PackerRunTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.hmacKey">hmacKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference">PackerRunTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.regenerateHmacInput">regenerateHmacInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts">PackerRunTaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.regenerateHmac">regenerateHmac</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `hmacKey`<sup>Required</sup> <a name="hmacKey" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.hmacKey"></a>

```typescript
public readonly hmacKey: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.timeouts"></a>

```typescript
public readonly timeouts: PackerRunTaskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference">PackerRunTaskTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regenerateHmacInput`<sup>Optional</sup> <a name="regenerateHmacInput" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.regenerateHmacInput"></a>

```typescript
public readonly regenerateHmacInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PackerRunTaskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts">PackerRunTaskTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `regenerateHmac`<sup>Required</sup> <a name="regenerateHmac" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.regenerateHmac"></a>

```typescript
public readonly regenerateHmac: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.packerRunTask.PackerRunTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PackerRunTaskConfig <a name="PackerRunTaskConfig" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.Initializer"></a>

```typescript
import { packerRunTask } from '@cdktn/provider-hcp'

const packerRunTaskConfig: packerRunTask.PackerRunTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#id PackerRunTask#id}. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the HCP Packer Registry is located. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.regenerateHmac">regenerateHmac</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the HMAC Key (`hmac_key`) will be regenerated during `terraform apply`. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts">PackerRunTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#id PackerRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the HCP Packer Registry is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#project_id PackerRunTask#project_id}

---

##### `regenerateHmac`<sup>Optional</sup> <a name="regenerateHmac" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.regenerateHmac"></a>

```typescript
public readonly regenerateHmac: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the HMAC Key (`hmac_key`) will be regenerated during `terraform apply`.

While set to true, the key will be regenerated on every `terraform apply` until `regenerate_hmac` is set to false or removed from the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#regenerate_hmac PackerRunTask#regenerate_hmac}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PackerRunTaskTimeouts;
```

- *Type:* <a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts">PackerRunTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#timeouts PackerRunTask#timeouts}

---

### PackerRunTaskTimeouts <a name="PackerRunTaskTimeouts" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.Initializer"></a>

```typescript
import { packerRunTask } from '@cdktn/provider-hcp'

const packerRunTaskTimeouts: packerRunTask.PackerRunTaskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#create PackerRunTask#create}. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#default PackerRunTask#default}. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#delete PackerRunTask#delete}. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#update PackerRunTask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#create PackerRunTask#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#default PackerRunTask#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#delete PackerRunTask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/packer_run_task#update PackerRunTask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PackerRunTaskTimeoutsOutputReference <a name="PackerRunTaskTimeoutsOutputReference" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.Initializer"></a>

```typescript
import { packerRunTask } from '@cdktn/provider-hcp'

new packerRunTask.PackerRunTaskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts">PackerRunTaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PackerRunTaskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.packerRunTask.PackerRunTaskTimeouts">PackerRunTaskTimeouts</a>

---



