# `vaultRadarSourceGithubCloud` Submodule <a name="`vaultRadarSourceGithubCloud` Submodule" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSourceGithubCloud <a name="VaultRadarSourceGithubCloud" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud hcp_vault_radar_source_github_cloud}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer"></a>

```java
import io.cdktn.providers.hcp.vault_radar_source_github_cloud.VaultRadarSourceGithubCloud;

VaultRadarSourceGithubCloud.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .githubOrganization(java.lang.String)
    .token(java.lang.String)
//  .detectorType(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.githubOrganization">githubOrganization</a></code> | <code>java.lang.String</code> | GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | GitHub personal access token. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.detectorType">detectorType</a></code> | <code>java.lang.String</code> | The detector type which will monitor this resource. The default is HCP if not specified. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `githubOrganization`<sup>Required</sup> <a name="githubOrganization" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.githubOrganization"></a>

- *Type:* java.lang.String

GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#github_organization VaultRadarSourceGithubCloud#github_organization}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.token"></a>

- *Type:* java.lang.String

GitHub personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#token VaultRadarSourceGithubCloud#token}

---

##### `detectorType`<sup>Optional</sup> <a name="detectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.detectorType"></a>

- *Type:* java.lang.String

The detector type which will monitor this resource. The default is HCP if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#detector_type VaultRadarSourceGithubCloud#detector_type}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#project_id VaultRadarSourceGithubCloud#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetDetectorType">resetDetectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDetectorType` <a name="resetDetectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetDetectorType"></a>

```java
public void resetDetectorType()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VaultRadarSourceGithubCloud resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct"></a>

```java
import io.cdktn.providers.hcp.vault_radar_source_github_cloud.VaultRadarSourceGithubCloud;

VaultRadarSourceGithubCloud.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.vault_radar_source_github_cloud.VaultRadarSourceGithubCloud;

VaultRadarSourceGithubCloud.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource"></a>

```java
import io.cdktn.providers.hcp.vault_radar_source_github_cloud.VaultRadarSourceGithubCloud;

VaultRadarSourceGithubCloud.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.vault_radar_source_github_cloud.VaultRadarSourceGithubCloud;

VaultRadarSourceGithubCloud.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultRadarSourceGithubCloud.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VaultRadarSourceGithubCloud resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultRadarSourceGithubCloud to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultRadarSourceGithubCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VaultRadarSourceGithubCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorTypeInput">detectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganizationInput">githubOrganizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorType">detectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganization">githubOrganization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `detectorTypeInput`<sup>Optional</sup> <a name="detectorTypeInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorTypeInput"></a>

```java
public java.lang.String getDetectorTypeInput();
```

- *Type:* java.lang.String

---

##### `githubOrganizationInput`<sup>Optional</sup> <a name="githubOrganizationInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganizationInput"></a>

```java
public java.lang.String getGithubOrganizationInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `detectorType`<sup>Required</sup> <a name="detectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorType"></a>

```java
public java.lang.String getDetectorType();
```

- *Type:* java.lang.String

---

##### `githubOrganization`<sup>Required</sup> <a name="githubOrganization" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganization"></a>

```java
public java.lang.String getGithubOrganization();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSourceGithubCloudConfig <a name="VaultRadarSourceGithubCloudConfig" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.vault_radar_source_github_cloud.VaultRadarSourceGithubCloudConfig;

VaultRadarSourceGithubCloudConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .githubOrganization(java.lang.String)
    .token(java.lang.String)
//  .detectorType(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.githubOrganization">githubOrganization</a></code> | <code>java.lang.String</code> | GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.token">token</a></code> | <code>java.lang.String</code> | GitHub personal access token. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.detectorType">detectorType</a></code> | <code>java.lang.String</code> | The detector type which will monitor this resource. The default is HCP if not specified. |
| <code><a href="#@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `githubOrganization`<sup>Required</sup> <a name="githubOrganization" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.githubOrganization"></a>

```java
public java.lang.String getGithubOrganization();
```

- *Type:* java.lang.String

GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#github_organization VaultRadarSourceGithubCloud#github_organization}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

GitHub personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#token VaultRadarSourceGithubCloud#token}

---

##### `detectorType`<sup>Optional</sup> <a name="detectorType" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.detectorType"></a>

```java
public java.lang.String getDetectorType();
```

- *Type:* java.lang.String

The detector type which will monitor this resource. The default is HCP if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#detector_type VaultRadarSourceGithubCloud#detector_type}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_source_github_cloud#project_id VaultRadarSourceGithubCloud#project_id}

---



