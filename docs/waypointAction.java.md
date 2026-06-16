# `waypointAction` Submodule <a name="`waypointAction` Submodule" id="@cdktn/provider-hcp.waypointAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointAction <a name="WaypointAction" id="@cdktn/provider-hcp.waypointAction.WaypointAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action hcp_waypoint_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointAction;

WaypointAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .request(WaypointActionRequest)
//  .description(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Action. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.request">request</a></code> | <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a></code> | The kind of HTTP request this should trigger. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the Action. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Action is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#name WaypointAction#name}

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.request"></a>

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

The kind of HTTP request this should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#request WaypointAction#request}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#description WaypointAction#description}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Action is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#project_id WaypointAction#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.putRequest">putRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.waypointAction.WaypointAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.waypointAction.WaypointAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.waypointAction.WaypointAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.waypointAction.WaypointAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.waypointAction.WaypointAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.waypointAction.WaypointAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.waypointAction.WaypointAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.waypointAction.WaypointAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.waypointAction.WaypointAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.waypointAction.WaypointAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.waypointAction.WaypointAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.waypointAction.WaypointAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.waypointAction.WaypointAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.waypointAction.WaypointAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.waypointAction.WaypointAction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.waypointAction.WaypointAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.waypointAction.WaypointAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.waypointAction.WaypointAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.waypointAction.WaypointAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.waypointAction.WaypointAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequest` <a name="putRequest" id="@cdktn/provider-hcp.waypointAction.WaypointAction.putRequest"></a>

```java
public void putRequest(WaypointActionRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.waypointAction.WaypointAction.putRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-hcp.waypointAction.WaypointAction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WaypointAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.waypointAction.WaypointAction.isConstruct"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointAction;

WaypointAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.waypointAction.WaypointAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.waypointAction.WaypointAction.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointAction;

WaypointAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.waypointAction.WaypointAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.waypointAction.WaypointAction.isTerraformResource"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointAction;

WaypointAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.waypointAction.WaypointAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.waypointAction.WaypointAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointAction;

WaypointAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WaypointAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WaypointAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.waypointAction.WaypointAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WaypointAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WaypointAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.waypointAction.WaypointAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WaypointAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.request">request</a></code> | <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference">WaypointActionRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.requestInput">requestInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.request"></a>

```java
public WaypointActionRequestOutputReference getRequest();
```

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference">WaypointActionRequestOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.requestInput"></a>

```java
public IResolvable|WaypointActionRequest getRequestInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.waypointAction.WaypointAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointActionConfig <a name="WaypointActionConfig" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointActionConfig;

WaypointActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .request(WaypointActionRequest)
//  .description(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Action. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.request">request</a></code> | <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a></code> | The kind of HTTP request this should trigger. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the Action. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Action is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#name WaypointAction#name}

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.request"></a>

```java
public WaypointActionRequest getRequest();
```

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

The kind of HTTP request this should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#request WaypointAction#request}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#description WaypointAction#description}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.waypointAction.WaypointActionConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Action is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#project_id WaypointAction#project_id}

---

### WaypointActionRequest <a name="WaypointActionRequest" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequest.Initializer"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointActionRequest;

WaypointActionRequest.builder()
//  .agent(WaypointActionRequestAgent)
//  .custom(WaypointActionRequestCustom)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent">WaypointActionRequestAgent</a></code> | Agent mode allows users to define the agent to use for the request. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a></code> | Custom mode allows users to define the HTTP method, the request body, etc. |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequest.property.agent"></a>

```java
public WaypointActionRequestAgent getAgent();
```

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent">WaypointActionRequestAgent</a>

Agent mode allows users to define the agent to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#agent WaypointAction#agent}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequest.property.custom"></a>

```java
public WaypointActionRequestCustom getCustom();
```

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a>

Custom mode allows users to define the HTTP method, the request body, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#custom WaypointAction#custom}

---

### WaypointActionRequestAgent <a name="WaypointActionRequestAgent" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.Initializer"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointActionRequestAgent;

WaypointActionRequestAgent.builder()
    .group(java.lang.String)
    .operationId(java.lang.String)
//  .actionRunId(java.lang.String)
//  .body(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.property.group">group</a></code> | <code>java.lang.String</code> | The name of the group that the operation is in. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.property.operationId">operationId</a></code> | <code>java.lang.String</code> | The identifying name of the operation in the agent config file. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.property.actionRunId">actionRunId</a></code> | <code>java.lang.String</code> | An optional action run id. If specified the agent will interact with the actions subsystem. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.property.body">body</a></code> | <code>java.lang.String</code> | Arguments to the operation, specified as JSON. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The name of the group that the operation is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#group WaypointAction#group}

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.property.operationId"></a>

```java
public java.lang.String getOperationId();
```

- *Type:* java.lang.String

The identifying name of the operation in the agent config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#operation_id WaypointAction#operation_id}

---

##### `actionRunId`<sup>Optional</sup> <a name="actionRunId" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.property.actionRunId"></a>

```java
public java.lang.String getActionRunId();
```

- *Type:* java.lang.String

An optional action run id. If specified the agent will interact with the actions subsystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#action_run_id WaypointAction#action_run_id}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Arguments to the operation, specified as JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#body WaypointAction#body}

---

### WaypointActionRequestCustom <a name="WaypointActionRequestCustom" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.Initializer"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointActionRequestCustom;

WaypointActionRequestCustom.builder()
    .method(java.lang.String)
//  .body(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.property.method">method</a></code> | <code>java.lang.String</code> | The HTTP method to use for the request. Must be one of: 'GET', 'POST', 'PUT', 'DELETE', or 'PATCH'. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.property.body">body</a></code> | <code>java.lang.String</code> | The body to be submitted with the request. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key value headers to send with the request. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.property.url">url</a></code> | <code>java.lang.String</code> | The full URL this request should make when invoked. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The HTTP method to use for the request. Must be one of: 'GET', 'POST', 'PUT', 'DELETE', or 'PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#method WaypointAction#method}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

The body to be submitted with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#body WaypointAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key value headers to send with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#headers WaypointAction#headers}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The full URL this request should make when invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.112.0/docs/resources/waypoint_action#url WaypointAction#url}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointActionRequestAgentOutputReference <a name="WaypointActionRequestAgentOutputReference" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointActionRequestAgentOutputReference;

new WaypointActionRequestAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.resetActionRunId">resetActionRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.resetBody">resetBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionRunId` <a name="resetActionRunId" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.resetActionRunId"></a>

```java
public void resetActionRunId()
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.resetBody"></a>

```java
public void resetBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.actionRunIdInput">actionRunIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.operationIdInput">operationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.actionRunId">actionRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.operationId">operationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent">WaypointActionRequestAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionRunIdInput`<sup>Optional</sup> <a name="actionRunIdInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.actionRunIdInput"></a>

```java
public java.lang.String getActionRunIdInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.operationIdInput"></a>

```java
public java.lang.String getOperationIdInput();
```

- *Type:* java.lang.String

---

##### `actionRunId`<sup>Required</sup> <a name="actionRunId" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.actionRunId"></a>

```java
public java.lang.String getActionRunId();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.operationId"></a>

```java
public java.lang.String getOperationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference.property.internalValue"></a>

```java
public IResolvable|WaypointActionRequestAgent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent">WaypointActionRequestAgent</a>

---


### WaypointActionRequestCustomOutputReference <a name="WaypointActionRequestCustomOutputReference" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointActionRequestCustomOutputReference;

new WaypointActionRequestCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.internalValue"></a>

```java
public IResolvable|WaypointActionRequestCustom getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a>

---


### WaypointActionRequestOutputReference <a name="WaypointActionRequestOutputReference" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.waypoint_action.WaypointActionRequestOutputReference;

new WaypointActionRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putAgent">putAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resetAgent">resetAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resetCustom">resetCustom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgent` <a name="putAgent" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putAgent"></a>

```java
public void putAgent(WaypointActionRequestAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent">WaypointActionRequestAgent</a>

---

##### `putCustom` <a name="putCustom" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putCustom"></a>

```java
public void putCustom(WaypointActionRequestCustom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a>

---

##### `resetAgent` <a name="resetAgent" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resetAgent"></a>

```java
public void resetAgent()
```

##### `resetCustom` <a name="resetCustom" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resetCustom"></a>

```java
public void resetCustom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference">WaypointActionRequestAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference">WaypointActionRequestCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.agentInput">agentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent">WaypointActionRequestAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.customInput">customInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.agent"></a>

```java
public WaypointActionRequestAgentOutputReference getAgent();
```

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgentOutputReference">WaypointActionRequestAgentOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.custom"></a>

```java
public WaypointActionRequestCustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference">WaypointActionRequestCustomOutputReference</a>

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.agentInput"></a>

```java
public IResolvable|WaypointActionRequestAgent getAgentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestAgent">WaypointActionRequestAgent</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.customInput"></a>

```java
public IResolvable|WaypointActionRequestCustom getCustomInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.internalValue"></a>

```java
public IResolvable|WaypointActionRequest getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

---



