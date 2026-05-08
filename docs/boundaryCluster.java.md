# `boundaryCluster` Submodule <a name="`boundaryCluster` Submodule" id="@cdktn/provider-hcp.boundaryCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BoundaryCluster <a name="BoundaryCluster" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster hcp_boundary_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryCluster;

BoundaryCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .password(java.lang.String)
    .tier(java.lang.String)
    .username(java.lang.String)
//  .authTokenTimeToLive(java.lang.String)
//  .authTokenTimeToStale(java.lang.String)
//  .id(java.lang.String)
//  .maintenanceWindowConfig(BoundaryClusterMaintenanceWindowConfig)
//  .projectId(java.lang.String)
//  .timeouts(BoundaryClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the Boundary cluster. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password of the initial admin user. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username of the initial admin user. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.authTokenTimeToLive">authTokenTimeToLive</a></code> | <code>java.lang.String</code> | The time to live for the auth token in golang's time.Duration string format. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.authTokenTimeToStale">authTokenTimeToStale</a></code> | <code>java.lang.String</code> | The time to stale for the auth token in golang's time.Duration string format. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#id BoundaryCluster#id}. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.maintenanceWindowConfig">maintenanceWindowConfig</a></code> | <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | maintenance_window_config block. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Boundary cluster is located. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The ID of the Boundary cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#cluster_id BoundaryCluster#cluster_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password of the initial admin user.

This must be at least 8 characters in length. Note that this may show up in logs, and it will be stored in the state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#password BoundaryCluster#password}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#tier BoundaryCluster#tier}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username of the initial admin user.

This must be at least 3 characters in length, alphanumeric, hyphen, or period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#username BoundaryCluster#username}

---

##### `authTokenTimeToLive`<sup>Optional</sup> <a name="authTokenTimeToLive" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.authTokenTimeToLive"></a>

- *Type:* java.lang.String

The time to live for the auth token in golang's time.Duration string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#auth_token_time_to_live BoundaryCluster#auth_token_time_to_live}

---

##### `authTokenTimeToStale`<sup>Optional</sup> <a name="authTokenTimeToStale" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.authTokenTimeToStale"></a>

- *Type:* java.lang.String

The time to stale for the auth token in golang's time.Duration string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#auth_token_time_to_stale BoundaryCluster#auth_token_time_to_stale}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#id BoundaryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowConfig`<sup>Optional</sup> <a name="maintenanceWindowConfig" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.maintenanceWindowConfig"></a>

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

maintenance_window_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#maintenance_window_config BoundaryCluster#maintenance_window_config}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Boundary cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#project_id BoundaryCluster#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#timeouts BoundaryCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig">putMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetAuthTokenTimeToLive">resetAuthTokenTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetAuthTokenTimeToStale">resetAuthTokenTimeToStale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetMaintenanceWindowConfig">resetMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenanceWindowConfig` <a name="putMaintenanceWindowConfig" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig"></a>

```java
public void putMaintenanceWindowConfig(BoundaryClusterMaintenanceWindowConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts"></a>

```java
public void putTimeouts(BoundaryClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

---

##### `resetAuthTokenTimeToLive` <a name="resetAuthTokenTimeToLive" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetAuthTokenTimeToLive"></a>

```java
public void resetAuthTokenTimeToLive()
```

##### `resetAuthTokenTimeToStale` <a name="resetAuthTokenTimeToStale" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetAuthTokenTimeToStale"></a>

```java
public void resetAuthTokenTimeToStale()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceWindowConfig` <a name="resetMaintenanceWindowConfig" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetMaintenanceWindowConfig"></a>

```java
public void resetMaintenanceWindowConfig()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BoundaryCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryCluster;

BoundaryCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryCluster;

BoundaryCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryCluster;

BoundaryCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryCluster;

BoundaryCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BoundaryCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BoundaryCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BoundaryCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BoundaryCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BoundaryCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterUrl">clusterUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfig">maintenanceWindowConfig</a></code> | <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference">BoundaryClusterMaintenanceWindowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference">BoundaryClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.authTokenTimeToLiveInput">authTokenTimeToLiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.authTokenTimeToStaleInput">authTokenTimeToStaleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfigInput">maintenanceWindowConfigInput</a></code> | <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.authTokenTimeToLive">authTokenTimeToLive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.authTokenTimeToStale">authTokenTimeToStale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterUrl`<sup>Required</sup> <a name="clusterUrl" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterUrl"></a>

```java
public java.lang.String getClusterUrl();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowConfig`<sup>Required</sup> <a name="maintenanceWindowConfig" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfig"></a>

```java
public BoundaryClusterMaintenanceWindowConfigOutputReference getMaintenanceWindowConfig();
```

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference">BoundaryClusterMaintenanceWindowConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.timeouts"></a>

```java
public BoundaryClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference">BoundaryClusterTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `authTokenTimeToLiveInput`<sup>Optional</sup> <a name="authTokenTimeToLiveInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.authTokenTimeToLiveInput"></a>

```java
public java.lang.String getAuthTokenTimeToLiveInput();
```

- *Type:* java.lang.String

---

##### `authTokenTimeToStaleInput`<sup>Optional</sup> <a name="authTokenTimeToStaleInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.authTokenTimeToStaleInput"></a>

```java
public java.lang.String getAuthTokenTimeToStaleInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowConfigInput`<sup>Optional</sup> <a name="maintenanceWindowConfigInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfigInput"></a>

```java
public BoundaryClusterMaintenanceWindowConfig getMaintenanceWindowConfigInput();
```

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.timeoutsInput"></a>

```java
public IResolvable|BoundaryClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `authTokenTimeToLive`<sup>Required</sup> <a name="authTokenTimeToLive" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.authTokenTimeToLive"></a>

```java
public java.lang.String getAuthTokenTimeToLive();
```

- *Type:* java.lang.String

---

##### `authTokenTimeToStale`<sup>Required</sup> <a name="authTokenTimeToStale" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.authTokenTimeToStale"></a>

```java
public java.lang.String getAuthTokenTimeToStale();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.boundaryCluster.BoundaryCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BoundaryClusterConfig <a name="BoundaryClusterConfig" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryClusterConfig;

BoundaryClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .password(java.lang.String)
    .tier(java.lang.String)
    .username(java.lang.String)
//  .authTokenTimeToLive(java.lang.String)
//  .authTokenTimeToStale(java.lang.String)
//  .id(java.lang.String)
//  .maintenanceWindowConfig(BoundaryClusterMaintenanceWindowConfig)
//  .projectId(java.lang.String)
//  .timeouts(BoundaryClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the Boundary cluster. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password of the initial admin user. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username of the initial admin user. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.authTokenTimeToLive">authTokenTimeToLive</a></code> | <code>java.lang.String</code> | The time to live for the auth token in golang's time.Duration string format. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.authTokenTimeToStale">authTokenTimeToStale</a></code> | <code>java.lang.String</code> | The time to stale for the auth token in golang's time.Duration string format. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#id BoundaryCluster#id}. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.maintenanceWindowConfig">maintenanceWindowConfig</a></code> | <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | maintenance_window_config block. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Boundary cluster is located. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The ID of the Boundary cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#cluster_id BoundaryCluster#cluster_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of the initial admin user.

This must be at least 8 characters in length. Note that this may show up in logs, and it will be stored in the state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#password BoundaryCluster#password}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#tier BoundaryCluster#tier}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the initial admin user.

This must be at least 3 characters in length, alphanumeric, hyphen, or period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#username BoundaryCluster#username}

---

##### `authTokenTimeToLive`<sup>Optional</sup> <a name="authTokenTimeToLive" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.authTokenTimeToLive"></a>

```java
public java.lang.String getAuthTokenTimeToLive();
```

- *Type:* java.lang.String

The time to live for the auth token in golang's time.Duration string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#auth_token_time_to_live BoundaryCluster#auth_token_time_to_live}

---

##### `authTokenTimeToStale`<sup>Optional</sup> <a name="authTokenTimeToStale" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.authTokenTimeToStale"></a>

```java
public java.lang.String getAuthTokenTimeToStale();
```

- *Type:* java.lang.String

The time to stale for the auth token in golang's time.Duration string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#auth_token_time_to_stale BoundaryCluster#auth_token_time_to_stale}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#id BoundaryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowConfig`<sup>Optional</sup> <a name="maintenanceWindowConfig" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.maintenanceWindowConfig"></a>

```java
public BoundaryClusterMaintenanceWindowConfig getMaintenanceWindowConfig();
```

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

maintenance_window_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#maintenance_window_config BoundaryCluster#maintenance_window_config}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Boundary cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#project_id BoundaryCluster#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.timeouts"></a>

```java
public BoundaryClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#timeouts BoundaryCluster#timeouts}

---

### BoundaryClusterMaintenanceWindowConfig <a name="BoundaryClusterMaintenanceWindowConfig" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryClusterMaintenanceWindowConfig;

BoundaryClusterMaintenanceWindowConfig.builder()
//  .day(java.lang.String)
//  .end(java.lang.Number)
//  .start(java.lang.Number)
//  .upgradeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.day">day</a></code> | <code>java.lang.String</code> | The maintenance day of the week for scheduled upgrades. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.end">end</a></code> | <code>java.lang.Number</code> | The end time which upgrades can be performed. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.start">start</a></code> | <code>java.lang.Number</code> | The start time which upgrades can be performed. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.upgradeType">upgradeType</a></code> | <code>java.lang.String</code> | The upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#day BoundaryCluster#day}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

The end time which upgrades can be performed.

Uses 24H clock and must be in UTC time zone. Valid options include - 1 to 24 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#end BoundaryCluster#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

The start time which upgrades can be performed.

Uses 24H clock and must be in UTC time zone. Valid options include - 0 to 23 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#start BoundaryCluster#start}

---

##### `upgradeType`<sup>Optional</sup> <a name="upgradeType" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.upgradeType"></a>

```java
public java.lang.String getUpgradeType();
```

- *Type:* java.lang.String

The upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#upgrade_type BoundaryCluster#upgrade_type}

---

### BoundaryClusterTimeouts <a name="BoundaryClusterTimeouts" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryClusterTimeouts;

BoundaryClusterTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#create BoundaryCluster#create}. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#default BoundaryCluster#default}. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#delete BoundaryCluster#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#create BoundaryCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#default BoundaryCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/boundary_cluster#delete BoundaryCluster#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BoundaryClusterMaintenanceWindowConfigOutputReference <a name="BoundaryClusterMaintenanceWindowConfigOutputReference" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryClusterMaintenanceWindowConfigOutputReference;

new BoundaryClusterMaintenanceWindowConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetUpgradeType">resetUpgradeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetEnd` <a name="resetEnd" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetEnd"></a>

```java
public void resetEnd()
```

##### `resetStart` <a name="resetStart" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetStart"></a>

```java
public void resetStart()
```

##### `resetUpgradeType` <a name="resetUpgradeType" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetUpgradeType"></a>

```java
public void resetUpgradeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.endInput">endInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeTypeInput">upgradeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.end">end</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeType">upgradeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.endInput"></a>

```java
public java.lang.Number getEndInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `upgradeTypeInput`<sup>Optional</sup> <a name="upgradeTypeInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeTypeInput"></a>

```java
public java.lang.String getUpgradeTypeInput();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `upgradeType`<sup>Required</sup> <a name="upgradeType" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeType"></a>

```java
public java.lang.String getUpgradeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.internalValue"></a>

```java
public BoundaryClusterMaintenanceWindowConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---


### BoundaryClusterTimeoutsOutputReference <a name="BoundaryClusterTimeoutsOutputReference" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.boundary_cluster.BoundaryClusterTimeoutsOutputReference;

new BoundaryClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BoundaryClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

---



