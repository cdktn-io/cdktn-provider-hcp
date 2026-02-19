# `dataHcpAzurePeeringConnection` Submodule <a name="`dataHcpAzurePeeringConnection` Submodule" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpAzurePeeringConnection <a name="DataHcpAzurePeeringConnection" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection hcp_azure_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_azure_peering_connection

dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hvn_link: str,
  peering_id: str,
  id: str = None,
  timeouts: DataHcpAzurePeeringConnectionTimeouts = None,
  wait_for_active_state: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.hvnLink">hvn_link</a></code> | <code>str</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.peeringId">peering_id</a></code> | <code>str</code> | The ID of the peering connection. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#id DataHcpAzurePeeringConnection#id}. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.waitForActiveState">wait_for_active_state</a></code> | <code>bool \| cdktn.IResolvable</code> | If `true`, Terraform will wait for the peering connection to reach an `ACTIVE` state before continuing. Default `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.hvnLink"></a>

- *Type:* str

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#hvn_link DataHcpAzurePeeringConnection#hvn_link}

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.peeringId"></a>

- *Type:* str

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#peering_id DataHcpAzurePeeringConnection#peering_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#id DataHcpAzurePeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#timeouts DataHcpAzurePeeringConnection#timeouts}

---

##### `wait_for_active_state`<sup>Optional</sup> <a name="wait_for_active_state" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.waitForActiveState"></a>

- *Type:* bool | cdktn.IResolvable

If `true`, Terraform will wait for the peering connection to reach an `ACTIVE` state before continuing. Default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#wait_for_active_state DataHcpAzurePeeringConnection#wait_for_active_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetWaitForActiveState">reset_wait_for_active_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#read DataHcpAzurePeeringConnection#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_active_state` <a name="reset_wait_for_active_state" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetWaitForActiveState"></a>

```python
def reset_wait_for_active_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataHcpAzurePeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isConstruct"></a>

```python
from cdktn_provider_hcp import data_hcp_azure_peering_connection

dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformElement"></a>

```python
from cdktn_provider_hcp import data_hcp_azure_peering_connection

dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformDataSource"></a>

```python
from cdktn_provider_hcp import data_hcp_azure_peering_connection

dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport"></a>

```python
from cdktn_provider_hcp import data_hcp_azure_peering_connection

dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataHcpAzurePeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpAzurePeeringConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpAzurePeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpAzurePeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.azurePeeringId">azure_peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerResourceGroupName">peer_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerSubscriptionId">peer_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerTenantId">peer_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerVnetName">peer_vnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerVnetRegion">peer_vnet_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference">DataHcpAzurePeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.useRemoteGateways">use_remote_gateways</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.hvnLinkInput">hvn_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peeringIdInput">peering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.waitForActiveStateInput">wait_for_active_state_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.hvnLink">hvn_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peeringId">peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.waitForActiveState">wait_for_active_state</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allow_forwarded_traffic`<sup>Required</sup> <a name="allow_forwarded_traffic" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.allowForwardedTraffic"></a>

```python
allow_forwarded_traffic: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `azure_peering_id`<sup>Required</sup> <a name="azure_peering_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.azurePeeringId"></a>

```python
azure_peering_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `peer_resource_group_name`<sup>Required</sup> <a name="peer_resource_group_name" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerResourceGroupName"></a>

```python
peer_resource_group_name: str
```

- *Type:* str

---

##### `peer_subscription_id`<sup>Required</sup> <a name="peer_subscription_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerSubscriptionId"></a>

```python
peer_subscription_id: str
```

- *Type:* str

---

##### `peer_tenant_id`<sup>Required</sup> <a name="peer_tenant_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerTenantId"></a>

```python
peer_tenant_id: str
```

- *Type:* str

---

##### `peer_vnet_name`<sup>Required</sup> <a name="peer_vnet_name" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerVnetName"></a>

```python
peer_vnet_name: str
```

- *Type:* str

---

##### `peer_vnet_region`<sup>Required</sup> <a name="peer_vnet_region" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerVnetRegion"></a>

```python
peer_vnet_region: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.timeouts"></a>

```python
timeouts: DataHcpAzurePeeringConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference">DataHcpAzurePeeringConnectionTimeoutsOutputReference</a>

---

##### `use_remote_gateways`<sup>Required</sup> <a name="use_remote_gateways" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.useRemoteGateways"></a>

```python
use_remote_gateways: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `hvn_link_input`<sup>Optional</sup> <a name="hvn_link_input" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.hvnLinkInput"></a>

```python
hvn_link_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `peering_id_input`<sup>Optional</sup> <a name="peering_id_input" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peeringIdInput"></a>

```python
peering_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataHcpAzurePeeringConnectionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a>

---

##### `wait_for_active_state_input`<sup>Optional</sup> <a name="wait_for_active_state_input" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.waitForActiveStateInput"></a>

```python
wait_for_active_state_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.hvnLink"></a>

```python
hvn_link: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

---

##### `wait_for_active_state`<sup>Required</sup> <a name="wait_for_active_state" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.waitForActiveState"></a>

```python
wait_for_active_state: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpAzurePeeringConnectionConfig <a name="DataHcpAzurePeeringConnectionConfig" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_azure_peering_connection

dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hvn_link: str,
  peering_id: str,
  id: str = None,
  timeouts: DataHcpAzurePeeringConnectionTimeouts = None,
  wait_for_active_state: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.hvnLink">hvn_link</a></code> | <code>str</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.peeringId">peering_id</a></code> | <code>str</code> | The ID of the peering connection. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#id DataHcpAzurePeeringConnection#id}. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.waitForActiveState">wait_for_active_state</a></code> | <code>bool \| cdktn.IResolvable</code> | If `true`, Terraform will wait for the peering connection to reach an `ACTIVE` state before continuing. Default `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.hvnLink"></a>

```python
hvn_link: str
```

- *Type:* str

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#hvn_link DataHcpAzurePeeringConnection#hvn_link}

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#peering_id DataHcpAzurePeeringConnection#peering_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#id DataHcpAzurePeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.timeouts"></a>

```python
timeouts: DataHcpAzurePeeringConnectionTimeouts
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#timeouts DataHcpAzurePeeringConnection#timeouts}

---

##### `wait_for_active_state`<sup>Optional</sup> <a name="wait_for_active_state" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.waitForActiveState"></a>

```python
wait_for_active_state: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If `true`, Terraform will wait for the peering connection to reach an `ACTIVE` state before continuing. Default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#wait_for_active_state DataHcpAzurePeeringConnection#wait_for_active_state}

---

### DataHcpAzurePeeringConnectionTimeouts <a name="DataHcpAzurePeeringConnectionTimeouts" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_azure_peering_connection

dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#read DataHcpAzurePeeringConnection#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/azure_peering_connection#read DataHcpAzurePeeringConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpAzurePeeringConnectionTimeoutsOutputReference <a name="DataHcpAzurePeeringConnectionTimeoutsOutputReference" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_azure_peering_connection

dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataHcpAzurePeeringConnectionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a>

---



