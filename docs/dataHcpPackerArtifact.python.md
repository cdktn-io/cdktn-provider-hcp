# `dataHcpPackerArtifact` Submodule <a name="`dataHcpPackerArtifact` Submodule" id="@cdktn/provider-hcp.dataHcpPackerArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPackerArtifact <a name="DataHcpPackerArtifact" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact hcp_packer_artifact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_packer_artifact

dataHcpPackerArtifact.DataHcpPackerArtifact(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket_name: str,
  platform: str,
  region: str,
  channel_name: str = None,
  component_type: str = None,
  project_id: str = None,
  version_fingerprint: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | The name of the HCP Packer Bucket where the Artifact is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Name of the platform where the HCP Packer Artifact is stored. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region where the HCP Packer Artifact is stored, if any. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | The name of the HCP Packer Channel the Version containing this Artifact is assigned to. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.componentType">component_type</a></code> | <code>str</code> | Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP Organization where the Artifact is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.versionFingerprint">version_fingerprint</a></code> | <code>str</code> | The fingerprint of the HCP Packer Version where the Artifact is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.bucketName"></a>

- *Type:* str

The name of the HCP Packer Bucket where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#bucket_name DataHcpPackerArtifact#bucket_name}

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.platform"></a>

- *Type:* str

Name of the platform where the HCP Packer Artifact is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#platform DataHcpPackerArtifact#platform}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.region"></a>

- *Type:* str

The Region where the HCP Packer Artifact is stored, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#region DataHcpPackerArtifact#region}

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.channelName"></a>

- *Type:* str

The name of the HCP Packer Channel the Version containing this Artifact is assigned to.

The Version currently assigned to the Channel will be fetched.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#channel_name DataHcpPackerArtifact#channel_name}

---

##### `component_type`<sup>Optional</sup> <a name="component_type" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.componentType"></a>

- *Type:* str

Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#component_type DataHcpPackerArtifact#component_type}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP Organization where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#project_id DataHcpPackerArtifact#project_id}

---

##### `version_fingerprint`<sup>Optional</sup> <a name="version_fingerprint" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.versionFingerprint"></a>

- *Type:* str

The fingerprint of the HCP Packer Version where the Artifact is located.

If provided in the config, it is used to fetch the Version.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#version_fingerprint DataHcpPackerArtifact#version_fingerprint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetChannelName">reset_channel_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetComponentType">reset_component_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetVersionFingerprint">reset_version_fingerprint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_channel_name` <a name="reset_channel_name" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetChannelName"></a>

```python
def reset_channel_name() -> None
```

##### `reset_component_type` <a name="reset_component_type" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetComponentType"></a>

```python
def reset_component_type() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_version_fingerprint` <a name="reset_version_fingerprint" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetVersionFingerprint"></a>

```python
def reset_version_fingerprint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataHcpPackerArtifact resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct"></a>

```python
from cdktn_provider_hcp import data_hcp_packer_artifact

dataHcpPackerArtifact.DataHcpPackerArtifact.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement"></a>

```python
from cdktn_provider_hcp import data_hcp_packer_artifact

dataHcpPackerArtifact.DataHcpPackerArtifact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource"></a>

```python
from cdktn_provider_hcp import data_hcp_packer_artifact

dataHcpPackerArtifact.DataHcpPackerArtifact.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport"></a>

```python
from cdktn_provider_hcp import data_hcp_packer_artifact

dataHcpPackerArtifact.DataHcpPackerArtifact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataHcpPackerArtifact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpPackerArtifact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpPackerArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpPackerArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.buildId">build_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.externalIdentifier">external_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.packerRunUuid">packer_run_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.revokeAt">revoke_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentTypeInput">component_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprintInput">version_fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentType">component_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprint">version_fingerprint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `build_id`<sup>Required</sup> <a name="build_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `external_identifier`<sup>Required</sup> <a name="external_identifier" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.externalIdentifier"></a>

```python
external_identifier: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `packer_run_uuid`<sup>Required</sup> <a name="packer_run_uuid" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.packerRunUuid"></a>

```python
packer_run_uuid: str
```

- *Type:* str

---

##### `revoke_at`<sup>Required</sup> <a name="revoke_at" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.revokeAt"></a>

```python
revoke_at: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `component_type_input`<sup>Optional</sup> <a name="component_type_input" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentTypeInput"></a>

```python
component_type_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `version_fingerprint_input`<sup>Optional</sup> <a name="version_fingerprint_input" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprintInput"></a>

```python
version_fingerprint_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `component_type`<sup>Required</sup> <a name="component_type" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentType"></a>

```python
component_type: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `version_fingerprint`<sup>Required</sup> <a name="version_fingerprint" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprint"></a>

```python
version_fingerprint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPackerArtifactConfig <a name="DataHcpPackerArtifactConfig" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_packer_artifact

dataHcpPackerArtifact.DataHcpPackerArtifactConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket_name: str,
  platform: str,
  region: str,
  channel_name: str = None,
  component_type: str = None,
  project_id: str = None,
  version_fingerprint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the HCP Packer Bucket where the Artifact is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.platform">platform</a></code> | <code>str</code> | Name of the platform where the HCP Packer Artifact is stored. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.region">region</a></code> | <code>str</code> | The Region where the HCP Packer Artifact is stored, if any. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.channelName">channel_name</a></code> | <code>str</code> | The name of the HCP Packer Channel the Version containing this Artifact is assigned to. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.componentType">component_type</a></code> | <code>str</code> | Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP Organization where the Artifact is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.versionFingerprint">version_fingerprint</a></code> | <code>str</code> | The fingerprint of the HCP Packer Version where the Artifact is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the HCP Packer Bucket where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#bucket_name DataHcpPackerArtifact#bucket_name}

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Name of the platform where the HCP Packer Artifact is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#platform DataHcpPackerArtifact#platform}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region where the HCP Packer Artifact is stored, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#region DataHcpPackerArtifact#region}

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

The name of the HCP Packer Channel the Version containing this Artifact is assigned to.

The Version currently assigned to the Channel will be fetched.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#channel_name DataHcpPackerArtifact#channel_name}

---

##### `component_type`<sup>Optional</sup> <a name="component_type" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.componentType"></a>

```python
component_type: str
```

- *Type:* str

Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#component_type DataHcpPackerArtifact#component_type}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP Organization where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#project_id DataHcpPackerArtifact#project_id}

---

##### `version_fingerprint`<sup>Optional</sup> <a name="version_fingerprint" id="@cdktn/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.versionFingerprint"></a>

```python
version_fingerprint: str
```

- *Type:* str

The fingerprint of the HCP Packer Version where the Artifact is located.

If provided in the config, it is used to fetch the Version.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/packer_artifact#version_fingerprint DataHcpPackerArtifact#version_fingerprint}

---



