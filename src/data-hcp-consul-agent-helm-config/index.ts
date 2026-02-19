/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataHcpConsulAgentHelmConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the HCP Consul cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#cluster_id DataHcpConsulAgentHelmConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Denotes that the gossip ports should be exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#expose_gossip_ports DataHcpConsulAgentHelmConfig#expose_gossip_ports}
  */
  readonly exposeGossipPorts?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#id DataHcpConsulAgentHelmConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The FQDN for the Kubernetes API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#kubernetes_endpoint DataHcpConsulAgentHelmConfig#kubernetes_endpoint}
  */
  readonly kubernetesEndpoint: string;
  /**
  * 
  * The ID of the HCP project where the HCP Consul cluster is located.
  * If not specified, the project specified in the HCP Provider config block will be used, if configured.
  * If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#project_id DataHcpConsulAgentHelmConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#timeouts DataHcpConsulAgentHelmConfig#timeouts}
  */
  readonly timeouts?: DataHcpConsulAgentHelmConfigTimeouts;
}
export interface DataHcpConsulAgentHelmConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#default DataHcpConsulAgentHelmConfig#default}
  */
  readonly default?: string;
}

export function dataHcpConsulAgentHelmConfigTimeoutsToTerraform(struct?: DataHcpConsulAgentHelmConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktn.stringToTerraform(struct!.default),
  }
}


export function dataHcpConsulAgentHelmConfigTimeoutsToHclTerraform(struct?: DataHcpConsulAgentHelmConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHcpConsulAgentHelmConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcpConsulAgentHelmConfigTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpConsulAgentHelmConfigTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config hcp_consul_agent_helm_config}
*/
export class DataHcpConsulAgentHelmConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_consul_agent_helm_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataHcpConsulAgentHelmConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpConsulAgentHelmConfig to import
  * @param importFromId The id of the existing DataHcpConsulAgentHelmConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpConsulAgentHelmConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "hcp_consul_agent_helm_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/consul_agent_helm_config hcp_consul_agent_helm_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpConsulAgentHelmConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpConsulAgentHelmConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_consul_agent_helm_config',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.111.0',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._exposeGossipPorts = config.exposeGossipPorts;
    this._id = config.id;
    this._kubernetesEndpoint = config.kubernetesEndpoint;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // expose_gossip_ports - computed: false, optional: true, required: false
  private _exposeGossipPorts?: boolean | cdktn.IResolvable; 
  public get exposeGossipPorts() {
    return this.getBooleanAttribute('expose_gossip_ports');
  }
  public set exposeGossipPorts(value: boolean | cdktn.IResolvable) {
    this._exposeGossipPorts = value;
  }
  public resetExposeGossipPorts() {
    this._exposeGossipPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeGossipPortsInput() {
    return this._exposeGossipPorts;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kubernetes_endpoint - computed: false, optional: false, required: true
  private _kubernetesEndpoint?: string; 
  public get kubernetesEndpoint() {
    return this.getStringAttribute('kubernetes_endpoint');
  }
  public set kubernetesEndpoint(value: string) {
    this._kubernetesEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEndpointInput() {
    return this._kubernetesEndpoint;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHcpConsulAgentHelmConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpConsulAgentHelmConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktn.stringToTerraform(this._clusterId),
      expose_gossip_ports: cdktn.booleanToTerraform(this._exposeGossipPorts),
      id: cdktn.stringToTerraform(this._id),
      kubernetes_endpoint: cdktn.stringToTerraform(this._kubernetesEndpoint),
      project_id: cdktn.stringToTerraform(this._projectId),
      timeouts: dataHcpConsulAgentHelmConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktn.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expose_gossip_ports: {
        value: cdktn.booleanToHclTerraform(this._exposeGossipPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_endpoint: {
        value: cdktn.stringToHclTerraform(this._kubernetesEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktn.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataHcpConsulAgentHelmConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataHcpConsulAgentHelmConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
