# `vaultRadarSourceGithubCloud` Submodule <a name="`vaultRadarSourceGithubCloud` Submodule" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSourceGithubCloud <a name="VaultRadarSourceGithubCloud" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud hcp_vault_radar_source_github_cloud}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new VaultRadarSourceGithubCloud(Construct Scope, string Id, VaultRadarSourceGithubCloudConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig">VaultRadarSourceGithubCloudConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig">VaultRadarSourceGithubCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetDetectorType">ResetDetectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetTokenEnvVar">ResetTokenEnvVar</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDetectorType` <a name="ResetDetectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetDetectorType"></a>

```csharp
private void ResetDetectorType()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetTokenEnvVar` <a name="ResetTokenEnvVar" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetTokenEnvVar"></a>

```csharp
private void ResetTokenEnvVar()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VaultRadarSourceGithubCloud resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

VaultRadarSourceGithubCloud.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

VaultRadarSourceGithubCloud.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

VaultRadarSourceGithubCloud.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

VaultRadarSourceGithubCloud.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VaultRadarSourceGithubCloud resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultRadarSourceGithubCloud to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultRadarSourceGithubCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VaultRadarSourceGithubCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorTypeInput">DetectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganizationInput">GithubOrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenEnvVarInput">TokenEnvVarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorType">DetectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganization">GithubOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenEnvVar">TokenEnvVar</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DetectorTypeInput`<sup>Optional</sup> <a name="DetectorTypeInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorTypeInput"></a>

```csharp
public string DetectorTypeInput { get; }
```

- *Type:* string

---

##### `GithubOrganizationInput`<sup>Optional</sup> <a name="GithubOrganizationInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganizationInput"></a>

```csharp
public string GithubOrganizationInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TokenEnvVarInput`<sup>Optional</sup> <a name="TokenEnvVarInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenEnvVarInput"></a>

```csharp
public string TokenEnvVarInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `DetectorType`<sup>Required</sup> <a name="DetectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorType"></a>

```csharp
public string DetectorType { get; }
```

- *Type:* string

---

##### `GithubOrganization`<sup>Required</sup> <a name="GithubOrganization" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganization"></a>

```csharp
public string GithubOrganization { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `TokenEnvVar`<sup>Required</sup> <a name="TokenEnvVar" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenEnvVar"></a>

```csharp
public string TokenEnvVar { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSourceGithubCloudConfig <a name="VaultRadarSourceGithubCloudConfig" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new VaultRadarSourceGithubCloudConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GithubOrganization,
    string DetectorType = null,
    string ProjectId = null,
    string Token = null,
    string TokenEnvVar = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.githubOrganization">GithubOrganization</a></code> | <code>string</code> | GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.detectorType">DetectorType</a></code> | <code>string</code> | The detector type to use for monitoring this source. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where Vault Radar is located. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.token">Token</a></code> | <code>string</code> | GitHub personal access token. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.tokenEnvVar">TokenEnvVar</a></code> | <code>string</code> | Environment variable name containing the GitHub personal access token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GithubOrganization`<sup>Required</sup> <a name="GithubOrganization" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.githubOrganization"></a>

```csharp
public string GithubOrganization { get; set; }
```

- *Type:* string

GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#github_organization VaultRadarSourceGithubCloud#github_organization}

---

##### `DetectorType`<sup>Optional</sup> <a name="DetectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.detectorType"></a>

```csharp
public string DetectorType { get; set; }
```

- *Type:* string

The detector type to use for monitoring this source.

Valid values are 'hcp' (managed by HCP) or 'agent' (self-hosted agent). Defaults to 'hcp'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#detector_type VaultRadarSourceGithubCloud#detector_type}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#project_id VaultRadarSourceGithubCloud#project_id}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

GitHub personal access token.

Required when detector_type is 'hcp' or not specified (defaults to 'hcp'). Cannot be used when detector_type is 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#token VaultRadarSourceGithubCloud#token}

---

##### `TokenEnvVar`<sup>Optional</sup> <a name="TokenEnvVar" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.tokenEnvVar"></a>

```csharp
public string TokenEnvVar { get; set; }
```

- *Type:* string

Environment variable name containing the GitHub personal access token.

When detector_type is 'agent', this is required. When detector_type is 'hcp' or not specified (defaults to 'hcp'), this is optional and can be set to enable optional secret copying via the Vault Radar Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#token_env_var VaultRadarSourceGithubCloud#token_env_var}

---



