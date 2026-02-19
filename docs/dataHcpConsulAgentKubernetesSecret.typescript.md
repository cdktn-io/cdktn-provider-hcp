# `dataHcpConsulAgentKubernetesSecret` Submodule <a name="`dataHcpConsulAgentKubernetesSecret` Submodule" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpConsulAgentKubernetesSecret <a name="DataHcpConsulAgentKubernetesSecret" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret hcp_consul_agent_kubernetes_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer"></a>

```typescript
import { dataHcpConsulAgentKubernetesSecret } from '@cdktn/provider-hcp'

new dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret(scope: Construct, id: string, config: DataHcpConsulAgentKubernetesSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig">DataHcpConsulAgentKubernetesSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig">DataHcpConsulAgentKubernetesSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.putTimeouts"></a>

```typescript
public putTimeouts(value: DataHcpConsulAgentKubernetesSecretTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpConsulAgentKubernetesSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isConstruct"></a>

```typescript
import { dataHcpConsulAgentKubernetesSecret } from '@cdktn/provider-hcp'

dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformElement"></a>

```typescript
import { dataHcpConsulAgentKubernetesSecret } from '@cdktn/provider-hcp'

dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformDataSource"></a>

```typescript
import { dataHcpConsulAgentKubernetesSecret } from '@cdktn/provider-hcp'

dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport"></a>

```typescript
import { dataHcpConsulAgentKubernetesSecret } from '@cdktn/provider-hcp'

dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataHcpConsulAgentKubernetesSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpConsulAgentKubernetesSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpConsulAgentKubernetesSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpConsulAgentKubernetesSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference">DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference">DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataHcpConsulAgentKubernetesSecretTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpConsulAgentKubernetesSecretConfig <a name="DataHcpConsulAgentKubernetesSecretConfig" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.Initializer"></a>

```typescript
import { dataHcpConsulAgentKubernetesSecret } from '@cdktn/provider-hcp'

const dataHcpConsulAgentKubernetesSecretConfig: dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret#id DataHcpConsulAgentKubernetesSecret#id}. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret#cluster_id DataHcpConsulAgentKubernetesSecret#cluster_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret#id DataHcpConsulAgentKubernetesSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret#project_id DataHcpConsulAgentKubernetesSecret#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcpConsulAgentKubernetesSecretTimeouts;
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret#timeouts DataHcpConsulAgentKubernetesSecret#timeouts}

---

### DataHcpConsulAgentKubernetesSecretTimeouts <a name="DataHcpConsulAgentKubernetesSecretTimeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts.Initializer"></a>

```typescript
import { dataHcpConsulAgentKubernetesSecret } from '@cdktn/provider-hcp'

const dataHcpConsulAgentKubernetesSecretTimeouts: dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret#default DataHcpConsulAgentKubernetesSecret#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_kubernetes_secret#default DataHcpConsulAgentKubernetesSecret#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference <a name="DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataHcpConsulAgentKubernetesSecret } from '@cdktn/provider-hcp'

new dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHcpConsulAgentKubernetesSecretTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a>

---



