# `dataHcpVaultSecretsDynamicSecret` Submodule <a name="`dataHcpVaultSecretsDynamicSecret` Submodule" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultSecretsDynamicSecret <a name="DataHcpVaultSecretsDynamicSecret" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new DataHcpVaultSecretsDynamicSecret(Construct Scope, string Id, DataHcpVaultSecretsDynamicSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig">DataHcpVaultSecretsDynamicSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig">DataHcpVaultSecretsDynamicSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpVaultSecretsDynamicSecret resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

DataHcpVaultSecretsDynamicSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

DataHcpVaultSecretsDynamicSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

DataHcpVaultSecretsDynamicSecret.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

DataHcpVaultSecretsDynamicSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataHcpVaultSecretsDynamicSecret resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpVaultSecretsDynamicSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpVaultSecretsDynamicSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpVaultSecretsDynamicSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretProvider">SecretProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretValues">SecretValues</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appNameInput">AppNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SecretProvider`<sup>Required</sup> <a name="SecretProvider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretProvider"></a>

```csharp
public string SecretProvider { get; }
```

- *Type:* string

---

##### `SecretValues`<sup>Required</sup> <a name="SecretValues" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretValues"></a>

```csharp
public StringMap SecretValues { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appNameInput"></a>

```csharp
public string AppNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultSecretsDynamicSecretConfig <a name="DataHcpVaultSecretsDynamicSecretConfig" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new DataHcpVaultSecretsDynamicSecretConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppName,
    string SecretName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.appName">AppName</a></code> | <code>string</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | The name of the Vault Secrets secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.appName"></a>

```csharp
public string AppName { get; set; }
```

- *Type:* string

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret#app_name DataHcpVaultSecretsDynamicSecret#app_name}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

The name of the Vault Secrets secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret#secret_name DataHcpVaultSecretsDynamicSecret#secret_name}

---



