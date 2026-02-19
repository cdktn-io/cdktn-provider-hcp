# `dataHcpConsulAgentHelmConfig` Submodule <a name="`dataHcpConsulAgentHelmConfig` Submodule" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpConsulAgentHelmConfig <a name="DataHcpConsulAgentHelmConfig" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config hcp_consul_agent_helm_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_consul_agent_helm_config

dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  kubernetes_endpoint: str,
  expose_gossip_ports: bool | IResolvable = None,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpConsulAgentHelmConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.kubernetesEndpoint">kubernetes_endpoint</a></code> | <code>str</code> | The FQDN for the Kubernetes API. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.exposeGossipPorts">expose_gossip_ports</a></code> | <code>bool \| cdktn.IResolvable</code> | Denotes that the gossip ports should be exposed. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#id DataHcpConsulAgentHelmConfig#id}. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#cluster_id DataHcpConsulAgentHelmConfig#cluster_id}

---

##### `kubernetes_endpoint`<sup>Required</sup> <a name="kubernetes_endpoint" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.kubernetesEndpoint"></a>

- *Type:* str

The FQDN for the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#kubernetes_endpoint DataHcpConsulAgentHelmConfig#kubernetes_endpoint}

---

##### `expose_gossip_ports`<sup>Optional</sup> <a name="expose_gossip_ports" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.exposeGossipPorts"></a>

- *Type:* bool | cdktn.IResolvable

Denotes that the gossip ports should be exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#expose_gossip_ports DataHcpConsulAgentHelmConfig#expose_gossip_ports}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#id DataHcpConsulAgentHelmConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#project_id DataHcpConsulAgentHelmConfig#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#timeouts DataHcpConsulAgentHelmConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetExposeGossipPorts">reset_expose_gossip_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#default DataHcpConsulAgentHelmConfig#default}.

---

##### `reset_expose_gossip_ports` <a name="reset_expose_gossip_ports" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetExposeGossipPorts"></a>

```python
def reset_expose_gossip_ports() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataHcpConsulAgentHelmConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isConstruct"></a>

```python
from cdktn_provider_hcp import data_hcp_consul_agent_helm_config

dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformElement"></a>

```python
from cdktn_provider_hcp import data_hcp_consul_agent_helm_config

dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_hcp import data_hcp_consul_agent_helm_config

dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport"></a>

```python
from cdktn_provider_hcp import data_hcp_consul_agent_helm_config

dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataHcpConsulAgentHelmConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpConsulAgentHelmConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpConsulAgentHelmConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpConsulAgentHelmConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference">DataHcpConsulAgentHelmConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.exposeGossipPortsInput">expose_gossip_ports_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.kubernetesEndpointInput">kubernetes_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.exposeGossipPorts">expose_gossip_ports</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.kubernetesEndpoint">kubernetes_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.timeouts"></a>

```python
timeouts: DataHcpConsulAgentHelmConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference">DataHcpConsulAgentHelmConfigTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `expose_gossip_ports_input`<sup>Optional</sup> <a name="expose_gossip_ports_input" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.exposeGossipPortsInput"></a>

```python
expose_gossip_ports_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_endpoint_input`<sup>Optional</sup> <a name="kubernetes_endpoint_input" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.kubernetesEndpointInput"></a>

```python
kubernetes_endpoint_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataHcpConsulAgentHelmConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a>

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `expose_gossip_ports`<sup>Required</sup> <a name="expose_gossip_ports" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.exposeGossipPorts"></a>

```python
expose_gossip_ports: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_endpoint`<sup>Required</sup> <a name="kubernetes_endpoint" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.kubernetesEndpoint"></a>

```python
kubernetes_endpoint: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpConsulAgentHelmConfigConfig <a name="DataHcpConsulAgentHelmConfigConfig" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_consul_agent_helm_config

dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  kubernetes_endpoint: str,
  expose_gossip_ports: bool | IResolvable = None,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpConsulAgentHelmConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.kubernetesEndpoint">kubernetes_endpoint</a></code> | <code>str</code> | The FQDN for the Kubernetes API. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.exposeGossipPorts">expose_gossip_ports</a></code> | <code>bool \| cdktn.IResolvable</code> | Denotes that the gossip ports should be exposed. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#id DataHcpConsulAgentHelmConfig#id}. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#cluster_id DataHcpConsulAgentHelmConfig#cluster_id}

---

##### `kubernetes_endpoint`<sup>Required</sup> <a name="kubernetes_endpoint" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.kubernetesEndpoint"></a>

```python
kubernetes_endpoint: str
```

- *Type:* str

The FQDN for the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#kubernetes_endpoint DataHcpConsulAgentHelmConfig#kubernetes_endpoint}

---

##### `expose_gossip_ports`<sup>Optional</sup> <a name="expose_gossip_ports" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.exposeGossipPorts"></a>

```python
expose_gossip_ports: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Denotes that the gossip ports should be exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#expose_gossip_ports DataHcpConsulAgentHelmConfig#expose_gossip_ports}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#id DataHcpConsulAgentHelmConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#project_id DataHcpConsulAgentHelmConfig#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.timeouts"></a>

```python
timeouts: DataHcpConsulAgentHelmConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#timeouts DataHcpConsulAgentHelmConfig#timeouts}

---

### DataHcpConsulAgentHelmConfigTimeouts <a name="DataHcpConsulAgentHelmConfigTimeouts" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_consul_agent_helm_config

dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#default DataHcpConsulAgentHelmConfig#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#default DataHcpConsulAgentHelmConfig#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpConsulAgentHelmConfigTimeoutsOutputReference <a name="DataHcpConsulAgentHelmConfigTimeoutsOutputReference" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_hcp import data_hcp_consul_agent_helm_config

dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataHcpConsulAgentHelmConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a>

---



