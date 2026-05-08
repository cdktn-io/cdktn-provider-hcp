# `vaultRadarSourceGithubEnterprise` Submodule <a name="`vaultRadarSourceGithubEnterprise` Submodule" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSourceGithubEnterprise <a name="VaultRadarSourceGithubEnterprise" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_enterprise hcp_vault_radar_source_github_enterprise}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new VaultRadarSourceGithubEnterprise(Construct Scope, string Id, VaultRadarSourceGithubEnterpriseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig">VaultRadarSourceGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig">VaultRadarSourceGithubEnterpriseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetDetectorType">ResetDetectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDetectorType` <a name="ResetDetectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetDetectorType"></a>

```csharp
private void ResetDetectorType()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VaultRadarSourceGithubEnterprise resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

VaultRadarSourceGithubEnterprise.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

VaultRadarSourceGithubEnterprise.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

VaultRadarSourceGithubEnterprise.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

VaultRadarSourceGithubEnterprise.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VaultRadarSourceGithubEnterprise resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultRadarSourceGithubEnterprise to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultRadarSourceGithubEnterprise that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_enterprise#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VaultRadarSourceGithubEnterprise to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.detectorTypeInput">DetectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganizationInput">GithubOrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.detectorType">DetectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganization">GithubOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DetectorTypeInput`<sup>Optional</sup> <a name="DetectorTypeInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.detectorTypeInput"></a>

```csharp
public string DetectorTypeInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `GithubOrganizationInput`<sup>Optional</sup> <a name="GithubOrganizationInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganizationInput"></a>

```csharp
public string GithubOrganizationInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `DetectorType`<sup>Required</sup> <a name="DetectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.detectorType"></a>

```csharp
public string DetectorType { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `GithubOrganization`<sup>Required</sup> <a name="GithubOrganization" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganization"></a>

```csharp
public string GithubOrganization { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSourceGithubEnterpriseConfig <a name="VaultRadarSourceGithubEnterpriseConfig" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Hcp;

new VaultRadarSourceGithubEnterpriseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string GithubOrganization,
    string Token,
    string DetectorType = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.domainName">DomainName</a></code> | <code>string</code> | Fully qualified domain name of the server. (Example: myserver.acme.com). |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.githubOrganization">GithubOrganization</a></code> | <code>string</code> | GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.token">Token</a></code> | <code>string</code> | GitHub personal access token. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.detectorType">DetectorType</a></code> | <code>string</code> | The detector type which will monitor this resource. The default is HCP if not specified. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Fully qualified domain name of the server. (Example: myserver.acme.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_enterprise#domain_name VaultRadarSourceGithubEnterprise#domain_name}

---

##### `GithubOrganization`<sup>Required</sup> <a name="GithubOrganization" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.githubOrganization"></a>

```csharp
public string GithubOrganization { get; set; }
```

- *Type:* string

GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_enterprise#github_organization VaultRadarSourceGithubEnterprise#github_organization}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

GitHub personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_enterprise#token VaultRadarSourceGithubEnterprise#token}

---

##### `DetectorType`<sup>Optional</sup> <a name="DetectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.detectorType"></a>

```csharp
public string DetectorType { get; set; }
```

- *Type:* string

The detector type which will monitor this resource. The default is HCP if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_enterprise#detector_type VaultRadarSourceGithubEnterprise#detector_type}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_enterprise#project_id VaultRadarSourceGithubEnterprise#project_id}

---



