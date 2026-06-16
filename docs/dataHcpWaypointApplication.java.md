# `dataHcpWaypointApplication` Submodule <a name="`dataHcpWaypointApplication` Submodule" id="@cdktn/provider-hcp.dataHcpWaypointApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointApplication <a name="DataHcpWaypointApplication" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application hcp_waypoint_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplication;

DataHcpWaypointApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .actions(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputVariables(IResolvable|java.util.List<DataHcpWaypointApplicationInputVariables>)
//  .name(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | List of actions by 'ID' to assign to this Template. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the Application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.inputVariables">inputVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>></code> | Input variables for the Application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint Application is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.actions"></a>

- *Type:* java.util.List<java.lang.String>

List of actions by 'ID' to assign to this Template.

Applications created from this Template will have these actions assigned to them. Only 'ID' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#actions DataHcpWaypointApplication#actions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#id DataHcpWaypointApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.inputVariables"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>>

Input variables for the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#input_variables DataHcpWaypointApplication#input_variables}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#name DataHcpWaypointApplication#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint Application is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#project_id DataHcpWaypointApplication#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.putInputVariables"></a>

```java
public void putInputVariables(IResolvable|java.util.List<DataHcpWaypointApplicationInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.putInputVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetActions"></a>

```java
public void resetActions()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetId"></a>

```java
public void resetId()
```

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetInputVariables"></a>

```java
public void resetInputVariables()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetName"></a>

```java
public void resetName()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpWaypointApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isConstruct"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplication;

DataHcpWaypointApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplication;

DataHcpWaypointApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformDataSource"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplication;

DataHcpWaypointApplication.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplication;

DataHcpWaypointApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpWaypointApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataHcpWaypointApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpWaypointApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpWaypointApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList">DataHcpWaypointApplicationInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.outputValues">outputValues</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList">DataHcpWaypointApplicationOutputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.readmeMarkdown">readmeMarkdown</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.inputVariablesInput">inputVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.inputVariables"></a>

```java
public DataHcpWaypointApplicationInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList">DataHcpWaypointApplicationInputVariablesList</a>

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `outputValues`<sup>Required</sup> <a name="outputValues" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.outputValues"></a>

```java
public DataHcpWaypointApplicationOutputValuesList getOutputValues();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList">DataHcpWaypointApplicationOutputValuesList</a>

---

##### `readmeMarkdown`<sup>Required</sup> <a name="readmeMarkdown" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.readmeMarkdown"></a>

```java
public java.lang.String getReadmeMarkdown();
```

- *Type:* java.lang.String

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.inputVariablesInput"></a>

```java
public IResolvable|java.util.List<DataHcpWaypointApplicationInputVariables> getInputVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointApplicationConfig <a name="DataHcpWaypointApplicationConfig" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplicationConfig;

DataHcpWaypointApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .actions(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputVariables(IResolvable|java.util.List<DataHcpWaypointApplicationInputVariables>)
//  .name(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | List of actions by 'ID' to assign to this Template. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.inputVariables">inputVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>></code> | Input variables for the Application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint Application is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

List of actions by 'ID' to assign to this Template.

Applications created from this Template will have these actions assigned to them. Only 'ID' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#actions DataHcpWaypointApplication#actions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#id DataHcpWaypointApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.inputVariables"></a>

```java
public IResolvable|java.util.List<DataHcpWaypointApplicationInputVariables> getInputVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>>

Input variables for the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#input_variables DataHcpWaypointApplication#input_variables}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#name DataHcpWaypointApplication#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint Application is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/data-sources/waypoint_application#project_id DataHcpWaypointApplication#project_id}

---

### DataHcpWaypointApplicationInputVariables <a name="DataHcpWaypointApplicationInputVariables" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplicationInputVariables;

DataHcpWaypointApplicationInputVariables.builder()
    .build();
```


### DataHcpWaypointApplicationOutputValues <a name="DataHcpWaypointApplicationOutputValues" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValues.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplicationOutputValues;

DataHcpWaypointApplicationOutputValues.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointApplicationInputVariablesList <a name="DataHcpWaypointApplicationInputVariablesList" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplicationInputVariablesList;

new DataHcpWaypointApplicationInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.get"></a>

```java
public DataHcpWaypointApplicationInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataHcpWaypointApplicationInputVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>>

---


### DataHcpWaypointApplicationInputVariablesOutputReference <a name="DataHcpWaypointApplicationInputVariablesOutputReference" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplicationInputVariablesOutputReference;

new DataHcpWaypointApplicationInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHcpWaypointApplicationInputVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationInputVariables">DataHcpWaypointApplicationInputVariables</a>

---


### DataHcpWaypointApplicationOutputValuesList <a name="DataHcpWaypointApplicationOutputValuesList" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplicationOutputValuesList;

new DataHcpWaypointApplicationOutputValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.get"></a>

```java
public DataHcpWaypointApplicationOutputValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataHcpWaypointApplicationOutputValuesOutputReference <a name="DataHcpWaypointApplicationOutputValuesOutputReference" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_waypoint_application.DataHcpWaypointApplicationOutputValuesOutputReference;

new DataHcpWaypointApplicationOutputValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.sensitive">sensitive</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValues">DataHcpWaypointApplicationOutputValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.sensitive"></a>

```java
public IResolvable getSensitive();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValuesOutputReference.property.internalValue"></a>

```java
public DataHcpWaypointApplicationOutputValues getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationOutputValues">DataHcpWaypointApplicationOutputValues</a>

---



