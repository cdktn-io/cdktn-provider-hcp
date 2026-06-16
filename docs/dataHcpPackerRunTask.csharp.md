# `dataHcpPackerRunTask` Submodule <a name="`dataHcpPackerRunTask` Submodule" id="@cdktn/provider-hcp.dataHcpPackerRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPackerRunTask <a name="DataHcpPackerRunTask" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/packer_run_task hcp_packer_run_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new DataHcpPackerRunTask(Construct Scope, string Id, DataHcpPackerRunTaskConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig">DataHcpPackerRunTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig">DataHcpPackerRunTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.putTimeouts"></a>

```csharp
private void PutTimeouts(DataHcpPackerRunTaskTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts">DataHcpPackerRunTaskTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpPackerRunTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

DataHcpPackerRunTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

DataHcpPackerRunTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

DataHcpPackerRunTask.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

DataHcpPackerRunTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataHcpPackerRunTask resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpPackerRunTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpPackerRunTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/packer_run_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpPackerRunTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.hmacKey">HmacKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference">DataHcpPackerRunTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts">DataHcpPackerRunTaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `HmacKey`<sup>Required</sup> <a name="HmacKey" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.hmacKey"></a>

```csharp
public string HmacKey { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.timeouts"></a>

```csharp
public DataHcpPackerRunTaskTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference">DataHcpPackerRunTaskTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.timeoutsInput"></a>

```csharp
public IResolvable|DataHcpPackerRunTaskTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts">DataHcpPackerRunTaskTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPackerRunTaskConfig <a name="DataHcpPackerRunTaskConfig" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new DataHcpPackerRunTaskConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string ProjectId = null,
    DataHcpPackerRunTaskTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/packer_run_task#id DataHcpPackerRunTask#id}. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the HCP Packer Registry is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts">DataHcpPackerRunTaskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/packer_run_task#id DataHcpPackerRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the HCP Packer Registry is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/packer_run_task#project_id DataHcpPackerRunTask#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskConfig.property.timeouts"></a>

```csharp
public DataHcpPackerRunTaskTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts">DataHcpPackerRunTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/packer_run_task#timeouts DataHcpPackerRunTask#timeouts}

---

### DataHcpPackerRunTaskTimeouts <a name="DataHcpPackerRunTaskTimeouts" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new DataHcpPackerRunTaskTimeouts {
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/packer_run_task#default DataHcpPackerRunTask#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/packer_run_task#default DataHcpPackerRunTask#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpPackerRunTaskTimeoutsOutputReference <a name="DataHcpPackerRunTaskTimeoutsOutputReference" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new DataHcpPackerRunTaskTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts">DataHcpPackerRunTaskTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataHcpPackerRunTaskTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-hcp.dataHcpPackerRunTask.DataHcpPackerRunTaskTimeouts">DataHcpPackerRunTaskTimeouts</a>

---



