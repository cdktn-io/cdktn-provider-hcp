# `dataHcpPackerArtifact` Submodule <a name="`dataHcpPackerArtifact` Submodule" id="@cdktn/provider-hcp.dataHcpPackerArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPackerArtifact <a name="DataHcpPackerArtifact" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact hcp_packer_artifact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_packer_artifact.DataHcpPackerArtifact;

DataHcpPackerArtifact.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucketName(java.lang.String)
    .platform(java.lang.String)
    .region(java.lang.String)
//  .channelName(java.lang.String)
//  .componentType(java.lang.String)
//  .projectId(java.lang.String)
//  .versionFingerprint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the HCP Packer Bucket where the Artifact is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.platform">platform</a></code> | <code>java.lang.String</code> | Name of the platform where the HCP Packer Artifact is stored. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region where the HCP Packer Artifact is stored, if any. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | The name of the HCP Packer Channel the Version containing this Artifact is assigned to. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.componentType">componentType</a></code> | <code>java.lang.String</code> | Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP Organization where the Artifact is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.versionFingerprint">versionFingerprint</a></code> | <code>java.lang.String</code> | The fingerprint of the HCP Packer Version where the Artifact is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

The name of the HCP Packer Bucket where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#bucket_name DataHcpPackerArtifact#bucket_name}

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.platform"></a>

- *Type:* java.lang.String

Name of the platform where the HCP Packer Artifact is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#platform DataHcpPackerArtifact#platform}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region where the HCP Packer Artifact is stored, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#region DataHcpPackerArtifact#region}

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

The name of the HCP Packer Channel the Version containing this Artifact is assigned to.

The Version currently assigned to the Channel will be fetched.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#channel_name DataHcpPackerArtifact#channel_name}

---

##### `componentType`<sup>Optional</sup> <a name="componentType" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.componentType"></a>

- *Type:* java.lang.String

Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#component_type DataHcpPackerArtifact#component_type}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP Organization where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#project_id DataHcpPackerArtifact#project_id}

---

##### `versionFingerprint`<sup>Optional</sup> <a name="versionFingerprint" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.versionFingerprint"></a>

- *Type:* java.lang.String

The fingerprint of the HCP Packer Version where the Artifact is located.

If provided in the config, it is used to fetch the Version.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#version_fingerprint DataHcpPackerArtifact#version_fingerprint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetComponentType">resetComponentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetVersionFingerprint">resetVersionFingerprint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetChannelName"></a>

```java
public void resetChannelName()
```

##### `resetComponentType` <a name="resetComponentType" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetComponentType"></a>

```java
public void resetComponentType()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetVersionFingerprint` <a name="resetVersionFingerprint" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetVersionFingerprint"></a>

```java
public void resetVersionFingerprint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpPackerArtifact resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct"></a>

```java
import io.cdktn.providers.hcp.data_hcp_packer_artifact.DataHcpPackerArtifact;

DataHcpPackerArtifact.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.data_hcp_packer_artifact.DataHcpPackerArtifact;

DataHcpPackerArtifact.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource"></a>

```java
import io.cdktn.providers.hcp.data_hcp_packer_artifact.DataHcpPackerArtifact;

DataHcpPackerArtifact.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.data_hcp_packer_artifact.DataHcpPackerArtifact;

DataHcpPackerArtifact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpPackerArtifact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataHcpPackerArtifact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpPackerArtifact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpPackerArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpPackerArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.buildId">buildId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.externalIdentifier">externalIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.labels">labels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.packerRunUuid">packerRunUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.revokeAt">revokeAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentTypeInput">componentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprintInput">versionFingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentType">componentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprint">versionFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.buildId"></a>

```java
public java.lang.String getBuildId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `externalIdentifier`<sup>Required</sup> <a name="externalIdentifier" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.externalIdentifier"></a>

```java
public java.lang.String getExternalIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `packerRunUuid`<sup>Required</sup> <a name="packerRunUuid" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.packerRunUuid"></a>

```java
public java.lang.String getPackerRunUuid();
```

- *Type:* java.lang.String

---

##### `revokeAt`<sup>Required</sup> <a name="revokeAt" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.revokeAt"></a>

```java
public java.lang.String getRevokeAt();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `componentTypeInput`<sup>Optional</sup> <a name="componentTypeInput" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentTypeInput"></a>

```java
public java.lang.String getComponentTypeInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `versionFingerprintInput`<sup>Optional</sup> <a name="versionFingerprintInput" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprintInput"></a>

```java
public java.lang.String getVersionFingerprintInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `versionFingerprint`<sup>Required</sup> <a name="versionFingerprint" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprint"></a>

```java
public java.lang.String getVersionFingerprint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPackerArtifactConfig <a name="DataHcpPackerArtifactConfig" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_packer_artifact.DataHcpPackerArtifactConfig;

DataHcpPackerArtifactConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucketName(java.lang.String)
    .platform(java.lang.String)
    .region(java.lang.String)
//  .channelName(java.lang.String)
//  .componentType(java.lang.String)
//  .projectId(java.lang.String)
//  .versionFingerprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the HCP Packer Bucket where the Artifact is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.platform">platform</a></code> | <code>java.lang.String</code> | Name of the platform where the HCP Packer Artifact is stored. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region where the HCP Packer Artifact is stored, if any. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | The name of the HCP Packer Channel the Version containing this Artifact is assigned to. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.componentType">componentType</a></code> | <code>java.lang.String</code> | Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP Organization where the Artifact is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.versionFingerprint">versionFingerprint</a></code> | <code>java.lang.String</code> | The fingerprint of the HCP Packer Version where the Artifact is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the HCP Packer Bucket where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#bucket_name DataHcpPackerArtifact#bucket_name}

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

Name of the platform where the HCP Packer Artifact is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#platform DataHcpPackerArtifact#platform}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region where the HCP Packer Artifact is stored, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#region DataHcpPackerArtifact#region}

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

The name of the HCP Packer Channel the Version containing this Artifact is assigned to.

The Version currently assigned to the Channel will be fetched.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#channel_name DataHcpPackerArtifact#channel_name}

---

##### `componentType`<sup>Optional</sup> <a name="componentType" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#component_type DataHcpPackerArtifact#component_type}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP Organization where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#project_id DataHcpPackerArtifact#project_id}

---

##### `versionFingerprint`<sup>Optional</sup> <a name="versionFingerprint" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.versionFingerprint"></a>

```java
public java.lang.String getVersionFingerprint();
```

- *Type:* java.lang.String

The fingerprint of the HCP Packer Version where the Artifact is located.

If provided in the config, it is used to fetch the Version.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#version_fingerprint DataHcpPackerArtifact#version_fingerprint}

---



