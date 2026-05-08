# `dataHcpWaypointAction` Submodule <a name="`dataHcpWaypointAction` Submodule" id="@cdktn/provider-hcp.dataHcpWaypointAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointAction <a name="DataHcpWaypointAction" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_action hcp_waypoint_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointAction;

DataHcpWaypointAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the Action. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_action#id DataHcpWaypointAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_action#name DataHcpWaypointAction#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpWaypointAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isConstruct"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointAction;

DataHcpWaypointAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointAction;

DataHcpWaypointAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformDataSource"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointAction;

DataHcpWaypointAction.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointAction;

DataHcpWaypointAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpWaypointAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataHcpWaypointAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpWaypointAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpWaypointAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.request">request</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference">DataHcpWaypointActionRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.request"></a>

```java
public DataHcpWaypointActionRequestOutputReference getRequest();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference">DataHcpWaypointActionRequestOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointActionConfig <a name="DataHcpWaypointActionConfig" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointActionConfig;

DataHcpWaypointActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Action. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_action#id DataHcpWaypointAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_action#name DataHcpWaypointAction#name}

---

### DataHcpWaypointActionRequest <a name="DataHcpWaypointActionRequest" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointActionRequest;

DataHcpWaypointActionRequest.builder()
//  .agent(DataHcpWaypointActionRequestAgent)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent">DataHcpWaypointActionRequestAgent</a></code> | Agent mode allows users to define the agent to use for the request. |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest.property.agent"></a>

```java
public DataHcpWaypointActionRequestAgent getAgent();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent">DataHcpWaypointActionRequestAgent</a>

Agent mode allows users to define the agent to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_action#agent DataHcpWaypointAction#agent}

---

### DataHcpWaypointActionRequestAgent <a name="DataHcpWaypointActionRequestAgent" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointActionRequestAgent;

DataHcpWaypointActionRequestAgent.builder()
    .build();
```


### DataHcpWaypointActionRequestCustom <a name="DataHcpWaypointActionRequestCustom" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustom.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointActionRequestCustom;

DataHcpWaypointActionRequestCustom.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointActionRequestAgentOutputReference <a name="DataHcpWaypointActionRequestAgentOutputReference" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointActionRequestAgentOutputReference;

new DataHcpWaypointActionRequestAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.actionRunId">actionRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.operationId">operationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent">DataHcpWaypointActionRequestAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionRunId`<sup>Required</sup> <a name="actionRunId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.actionRunId"></a>

```java
public java.lang.String getActionRunId();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.operationId"></a>

```java
public java.lang.String getOperationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHcpWaypointActionRequestAgent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent">DataHcpWaypointActionRequestAgent</a>

---


### DataHcpWaypointActionRequestCustomOutputReference <a name="DataHcpWaypointActionRequestCustomOutputReference" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointActionRequestCustomOutputReference;

new DataHcpWaypointActionRequestCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.headers">headers</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustom">DataHcpWaypointActionRequestCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.headers"></a>

```java
public StringMap getHeaders();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.internalValue"></a>

```java
public DataHcpWaypointActionRequestCustom getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustom">DataHcpWaypointActionRequestCustom</a>

---


### DataHcpWaypointActionRequestOutputReference <a name="DataHcpWaypointActionRequestOutputReference" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_action.DataHcpWaypointActionRequestOutputReference;

new DataHcpWaypointActionRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.putAgent">putAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.resetAgent">resetAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgent` <a name="putAgent" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.putAgent"></a>

```java
public void putAgent(DataHcpWaypointActionRequestAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.putAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent">DataHcpWaypointActionRequestAgent</a>

---

##### `resetAgent` <a name="resetAgent" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.resetAgent"></a>

```java
public void resetAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference">DataHcpWaypointActionRequestAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference">DataHcpWaypointActionRequestCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.agentInput">agentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent">DataHcpWaypointActionRequestAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest">DataHcpWaypointActionRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.agent"></a>

```java
public DataHcpWaypointActionRequestAgentOutputReference getAgent();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgentOutputReference">DataHcpWaypointActionRequestAgentOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.custom"></a>

```java
public DataHcpWaypointActionRequestCustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference">DataHcpWaypointActionRequestCustomOutputReference</a>

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.agentInput"></a>

```java
public IResolvable|DataHcpWaypointActionRequestAgent getAgentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestAgent">DataHcpWaypointActionRequestAgent</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.internalValue"></a>

```java
public DataHcpWaypointActionRequest getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest">DataHcpWaypointActionRequest</a>

---



