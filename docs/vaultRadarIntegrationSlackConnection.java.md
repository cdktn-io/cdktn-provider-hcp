# `vaultRadarIntegrationSlackConnection` Submodule <a name="`vaultRadarIntegrationSlackConnection` Submodule" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarIntegrationSlackConnection <a name="VaultRadarIntegrationSlackConnection" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_integration_slack_connection hcp_vault_radar_integration_slack_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer"></a>

```java
import io.cdktn.providers.hcp.vault_radar_integration_slack_connection.VaultRadarIntegrationSlackConnection;

VaultRadarIntegrationSlackConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .token(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of connection. Name must be unique. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Slack bot user OAuth token. Example: Bot token strings begin with 'xoxb'. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of connection. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_integration_slack_connection#name VaultRadarIntegrationSlackConnection#name}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Slack bot user OAuth token. Example: Bot token strings begin with 'xoxb'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_integration_slack_connection#token VaultRadarIntegrationSlackConnection#token}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_integration_slack_connection#project_id VaultRadarIntegrationSlackConnection#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VaultRadarIntegrationSlackConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isConstruct"></a>

```java
import io.cdktn.providers.hcp.vault_radar_integration_slack_connection.VaultRadarIntegrationSlackConnection;

VaultRadarIntegrationSlackConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.vault_radar_integration_slack_connection.VaultRadarIntegrationSlackConnection;

VaultRadarIntegrationSlackConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.hcp.vault_radar_integration_slack_connection.VaultRadarIntegrationSlackConnection;

VaultRadarIntegrationSlackConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.vault_radar_integration_slack_connection.VaultRadarIntegrationSlackConnection;

VaultRadarIntegrationSlackConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultRadarIntegrationSlackConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VaultRadarIntegrationSlackConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultRadarIntegrationSlackConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultRadarIntegrationSlackConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_integration_slack_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VaultRadarIntegrationSlackConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarIntegrationSlackConnectionConfig <a name="VaultRadarIntegrationSlackConnectionConfig" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.vault_radar_integration_slack_connection.VaultRadarIntegrationSlackConnectionConfig;

VaultRadarIntegrationSlackConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .token(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of connection. Name must be unique. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.token">token</a></code> | <code>java.lang.String</code> | Slack bot user OAuth token. Example: Bot token strings begin with 'xoxb'. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of connection. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_integration_slack_connection#name VaultRadarIntegrationSlackConnection#name}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Slack bot user OAuth token. Example: Bot token strings begin with 'xoxb'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_integration_slack_connection#token VaultRadarIntegrationSlackConnection#token}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultRadarIntegrationSlackConnection.VaultRadarIntegrationSlackConnectionConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_integration_slack_connection#project_id VaultRadarIntegrationSlackConnection#project_id}

---



