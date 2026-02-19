# `dataHcpIamPolicy` Submodule <a name="`dataHcpIamPolicy` Submodule" id="@cdktn/provider-hcp.dataHcpIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpIamPolicy <a name="DataHcpIamPolicy" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/iam_policy hcp_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

new dataHcpIamPolicy.DataHcpIamPolicy(scope: Construct, id: string, config: DataHcpIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig">DataHcpIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig">DataHcpIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.putBindings">putBindings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBindings` <a name="putBindings" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.putBindings"></a>

```typescript
public putBindings(value: IResolvable | DataHcpIamPolicyBindings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.putBindings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isConstruct"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

dataHcpIamPolicy.DataHcpIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformElement"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

dataHcpIamPolicy.DataHcpIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

dataHcpIamPolicy.DataHcpIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataHcpIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.bindings">bindings</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList">DataHcpIamPolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.bindingsInput">bindingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.bindings"></a>

```typescript
public readonly bindings: DataHcpIamPolicyBindingsList;
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList">DataHcpIamPolicyBindingsList</a>

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `bindingsInput`<sup>Optional</sup> <a name="bindingsInput" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.bindingsInput"></a>

```typescript
public readonly bindingsInput: IResolvable | DataHcpIamPolicyBindings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpIamPolicyBindings <a name="DataHcpIamPolicyBindings" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.Initializer"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

const dataHcpIamPolicyBindings: dataHcpIamPolicy.DataHcpIamPolicyBindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.property.principals">principals</a></code> | <code>string[]</code> | The set of principals to bind to the given role. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.property.role">role</a></code> | <code>string</code> | The role name to bind to the given principals. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

The set of principals to bind to the given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/iam_policy#principals DataHcpIamPolicy#principals}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The role name to bind to the given principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/iam_policy#role DataHcpIamPolicy#role}

---

### DataHcpIamPolicyConfig <a name="DataHcpIamPolicyConfig" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.Initializer"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

const dataHcpIamPolicyConfig: dataHcpIamPolicy.DataHcpIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.bindings">bindings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>[]</code> | A binding associates a set of principals to a role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.bindings"></a>

```typescript
public readonly bindings: IResolvable | DataHcpIamPolicyBindings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>[]

A binding associates a set of principals to a role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/iam_policy#bindings DataHcpIamPolicy#bindings}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpIamPolicyBindingsList <a name="DataHcpIamPolicyBindingsList" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

new dataHcpIamPolicy.DataHcpIamPolicyBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.get"></a>

```typescript
public get(index: number): DataHcpIamPolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHcpIamPolicyBindings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>[]

---


### DataHcpIamPolicyBindingsOutputReference <a name="DataHcpIamPolicyBindingsOutputReference" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer"></a>

```typescript
import { dataHcpIamPolicy } from '@cdktn/provider-hcp'

new dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHcpIamPolicyBindings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>

---



