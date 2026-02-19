# `dataHcpPrivateLink` Submodule <a name="`dataHcpPrivateLink` Submodule" id="@cdktn/provider-hcp.dataHcpPrivateLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPrivateLink <a name="DataHcpPrivateLink" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link hcp_private_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_private_link

dataHcpPrivateLink.DataHcpPrivateLink(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hvn_id: str,
  private_link_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpPrivateLinkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN associated with the private link. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.privateLinkId">private_link_id</a></code> | <code>str</code> | The ID of the private link. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#id DataHcpPrivateLink#id}. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the private link is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts">DataHcpPrivateLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HVN associated with the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#hvn_id DataHcpPrivateLink#hvn_id}

---

##### `private_link_id`<sup>Required</sup> <a name="private_link_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.privateLinkId"></a>

- *Type:* str

The ID of the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#private_link_id DataHcpPrivateLink#private_link_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#id DataHcpPrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the private link is located.

If not specified, the project configured in the provider is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#project_id DataHcpPrivateLink#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts">DataHcpPrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#timeouts DataHcpPrivateLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#default DataHcpPrivateLink#default}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataHcpPrivateLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isConstruct"></a>

```python
from cdktn_provider_hcp import data_hcp_private_link

dataHcpPrivateLink.DataHcpPrivateLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isTerraformElement"></a>

```python
from cdktn_provider_hcp import data_hcp_private_link

dataHcpPrivateLink.DataHcpPrivateLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isTerraformDataSource"></a>

```python
from cdktn_provider_hcp import data_hcp_private_link

dataHcpPrivateLink.DataHcpPrivateLink.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.generateConfigForImport"></a>

```python
from cdktn_provider_hcp import data_hcp_private_link

dataHcpPrivateLink.DataHcpPrivateLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataHcpPrivateLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpPrivateLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpPrivateLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpPrivateLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.consumerAccounts">consumer_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.consumerIpRanges">consumer_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.consumerRegions">consumer_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.defaultRegion">default_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference">DataHcpPrivateLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.vaultClusterId">vault_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.privateLinkIdInput">private_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts">DataHcpPrivateLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.privateLinkId">private_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `consumer_accounts`<sup>Required</sup> <a name="consumer_accounts" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.consumerAccounts"></a>

```python
consumer_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consumer_ip_ranges`<sup>Required</sup> <a name="consumer_ip_ranges" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.consumerIpRanges"></a>

```python
consumer_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consumer_regions`<sup>Required</sup> <a name="consumer_regions" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.consumerRegions"></a>

```python
consumer_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `default_region`<sup>Required</sup> <a name="default_region" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.defaultRegion"></a>

```python
default_region: str
```

- *Type:* str

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.timeouts"></a>

```python
timeouts: DataHcpPrivateLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference">DataHcpPrivateLinkTimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vault_cluster_id`<sup>Required</sup> <a name="vault_cluster_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.vaultClusterId"></a>

```python
vault_cluster_id: str
```

- *Type:* str

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_link_id_input`<sup>Optional</sup> <a name="private_link_id_input" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.privateLinkIdInput"></a>

```python
private_link_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataHcpPrivateLinkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts">DataHcpPrivateLinkTimeouts</a>

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_link_id`<sup>Required</sup> <a name="private_link_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.privateLinkId"></a>

```python
private_link_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPrivateLinkConfig <a name="DataHcpPrivateLinkConfig" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_private_link

dataHcpPrivateLink.DataHcpPrivateLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hvn_id: str,
  private_link_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpPrivateLinkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN associated with the private link. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.privateLinkId">private_link_id</a></code> | <code>str</code> | The ID of the private link. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#id DataHcpPrivateLink#id}. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the private link is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts">DataHcpPrivateLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HVN associated with the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#hvn_id DataHcpPrivateLink#hvn_id}

---

##### `private_link_id`<sup>Required</sup> <a name="private_link_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.privateLinkId"></a>

```python
private_link_id: str
```

- *Type:* str

The ID of the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#private_link_id DataHcpPrivateLink#private_link_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#id DataHcpPrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the private link is located.

If not specified, the project configured in the provider is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#project_id DataHcpPrivateLink#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkConfig.property.timeouts"></a>

```python
timeouts: DataHcpPrivateLinkTimeouts
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts">DataHcpPrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#timeouts DataHcpPrivateLink#timeouts}

---

### DataHcpPrivateLinkTimeouts <a name="DataHcpPrivateLinkTimeouts" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_private_link

dataHcpPrivateLink.DataHcpPrivateLinkTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#default DataHcpPrivateLink#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/private_link#default DataHcpPrivateLink#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpPrivateLinkTimeoutsOutputReference <a name="DataHcpPrivateLinkTimeoutsOutputReference" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_private_link

dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts">DataHcpPrivateLinkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataHcpPrivateLinkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpPrivateLink.DataHcpPrivateLinkTimeouts">DataHcpPrivateLinkTimeouts</a>

---



