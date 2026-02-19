# `vaultSecretsApp` Submodule <a name="`vaultSecretsApp` Submodule" id="@cdktn/provider-hcp.vaultSecretsApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsApp <a name="VaultSecretsApp" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_app hcp_vault_secrets_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.Initializer"></a>

```typescript
import { vaultSecretsApp } from '@cdktn/provider-hcp'

new vaultSecretsApp.VaultSecretsApp(scope: Construct, id: string, config: VaultSecretsAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig">VaultSecretsAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig">VaultSecretsAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.resetSyncNames">resetSyncNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetSyncNames` <a name="resetSyncNames" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.resetSyncNames"></a>

```typescript
public resetSyncNames(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VaultSecretsApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isConstruct"></a>

```typescript
import { vaultSecretsApp } from '@cdktn/provider-hcp'

vaultSecretsApp.VaultSecretsApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isTerraformElement"></a>

```typescript
import { vaultSecretsApp } from '@cdktn/provider-hcp'

vaultSecretsApp.VaultSecretsApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isTerraformResource"></a>

```typescript
import { vaultSecretsApp } from '@cdktn/provider-hcp'

vaultSecretsApp.VaultSecretsApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.generateConfigForImport"></a>

```typescript
import { vaultSecretsApp } from '@cdktn/provider-hcp'

vaultSecretsApp.VaultSecretsApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VaultSecretsApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VaultSecretsApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.appNameInput">appNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.syncNamesInput">syncNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.syncNames">syncNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.appNameInput"></a>

```typescript
public readonly appNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `syncNamesInput`<sup>Optional</sup> <a name="syncNamesInput" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.syncNamesInput"></a>

```typescript
public readonly syncNamesInput: string[];
```

- *Type:* string[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `syncNames`<sup>Required</sup> <a name="syncNames" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.syncNames"></a>

```typescript
public readonly syncNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsAppConfig <a name="VaultSecretsAppConfig" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.Initializer"></a>

```typescript
import { vaultSecretsApp } from '@cdktn/provider-hcp'

const vaultSecretsAppConfig: vaultSecretsApp.VaultSecretsAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.appName">appName</a></code> | <code>string</code> | The Vault Secrets App name. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.description">description</a></code> | <code>string</code> | The Vault Secrets app description. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the HCP Vault Secrets app is located. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.syncNames">syncNames</a></code> | <code>string[]</code> | Set of sync names to associate with this app. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The Vault Secrets App name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_app#app_name VaultSecretsApp#app_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The Vault Secrets app description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_app#description VaultSecretsApp#description}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the HCP Vault Secrets app is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_app#project_id VaultSecretsApp#project_id}

---

##### `syncNames`<sup>Optional</sup> <a name="syncNames" id="@cdktn/provider-hcp.vaultSecretsApp.VaultSecretsAppConfig.property.syncNames"></a>

```typescript
public readonly syncNames: string[];
```

- *Type:* string[]

Set of sync names to associate with this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_app#sync_names VaultSecretsApp#sync_names}

---



