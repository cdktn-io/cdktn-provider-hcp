# `hvnPeeringConnection` Submodule <a name="`hvnPeeringConnection` Submodule" id="@cdktn/provider-hcp.hvnPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HvnPeeringConnection <a name="HvnPeeringConnection" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection hcp_hvn_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer"></a>

```typescript
import { hvnPeeringConnection } from '@cdktn/provider-hcp'

new hvnPeeringConnection.HvnPeeringConnection(scope: Construct, id: string, config: HvnPeeringConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig">HvnPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig">HvnPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: HvnPeeringConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HvnPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isConstruct"></a>

```typescript
import { hvnPeeringConnection } from '@cdktn/provider-hcp'

hvnPeeringConnection.HvnPeeringConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformElement"></a>

```typescript
import { hvnPeeringConnection } from '@cdktn/provider-hcp'

hvnPeeringConnection.HvnPeeringConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformResource"></a>

```typescript
import { hvnPeeringConnection } from '@cdktn/provider-hcp'

hvnPeeringConnection.HvnPeeringConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport"></a>

```typescript
import { hvnPeeringConnection } from '@cdktn/provider-hcp'

hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HvnPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HvnPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HvnPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HvnPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.peeringId">peeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference">HvnPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn1Input">hvn1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn2Input">hvn2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn1">hvn1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn2">hvn2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.timeouts"></a>

```typescript
public readonly timeouts: HvnPeeringConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference">HvnPeeringConnectionTimeoutsOutputReference</a>

---

##### `hvn1Input`<sup>Optional</sup> <a name="hvn1Input" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn1Input"></a>

```typescript
public readonly hvn1Input: string;
```

- *Type:* string

---

##### `hvn2Input`<sup>Optional</sup> <a name="hvn2Input" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn2Input"></a>

```typescript
public readonly hvn2Input: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HvnPeeringConnectionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>

---

##### `hvn1`<sup>Required</sup> <a name="hvn1" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn1"></a>

```typescript
public readonly hvn1: string;
```

- *Type:* string

---

##### `hvn2`<sup>Required</sup> <a name="hvn2" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn2"></a>

```typescript
public readonly hvn2: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HvnPeeringConnectionConfig <a name="HvnPeeringConnectionConfig" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.Initializer"></a>

```typescript
import { hvnPeeringConnection } from '@cdktn/provider-hcp'

const hvnPeeringConnectionConfig: hvnPeeringConnection.HvnPeeringConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.hvn1">hvn1</a></code> | <code>string</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.hvn2">hvn2</a></code> | <code>string</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#id HvnPeeringConnection#id}. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where HVN peering connection is located. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hvn1`<sup>Required</sup> <a name="hvn1" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.hvn1"></a>

```typescript
public readonly hvn1: string;
```

- *Type:* string

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#hvn_1 HvnPeeringConnection#hvn_1}

---

##### `hvn2`<sup>Required</sup> <a name="hvn2" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.hvn2"></a>

```typescript
public readonly hvn2: string;
```

- *Type:* string

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#hvn_2 HvnPeeringConnection#hvn_2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#id HvnPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where HVN peering connection is located.

Always matches hvn_1's project ID. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#project_id HvnPeeringConnection#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HvnPeeringConnectionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#timeouts HvnPeeringConnection#timeouts}

---

### HvnPeeringConnectionTimeouts <a name="HvnPeeringConnectionTimeouts" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.Initializer"></a>

```typescript
import { hvnPeeringConnection } from '@cdktn/provider-hcp'

const hvnPeeringConnectionTimeouts: hvnPeeringConnection.HvnPeeringConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#create HvnPeeringConnection#create}. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#default HvnPeeringConnection#default}. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#delete HvnPeeringConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#create HvnPeeringConnection#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#default HvnPeeringConnection#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/hvn_peering_connection#delete HvnPeeringConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### HvnPeeringConnectionTimeoutsOutputReference <a name="HvnPeeringConnectionTimeoutsOutputReference" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { hvnPeeringConnection } from '@cdktn/provider-hcp'

new hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HvnPeeringConnectionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>

---



