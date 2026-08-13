/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/resource_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ResourceControlPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The list of constraint IDs to enable for the organization. Each constraint ID must be a recognized constraint returned by ListConstraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/resource_control_policy#enabled_constraints ResourceControlPolicy#enabled_constraints}
  */
  readonly enabledConstraints: string[];
  /**
  * The ID of the organization to manage the resource control policy for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/resource_control_policy#organization_id ResourceControlPolicy#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/resource_control_policy hcp_resource_control_policy}
*/
export class ResourceControlPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_resource_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ResourceControlPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceControlPolicy to import
  * @param importFromId The id of the existing ResourceControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/resource_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "hcp_resource_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/resource_control_policy hcp_resource_control_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceControlPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceControlPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_resource_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.114.0',
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
    this._enabledConstraints = config.enabledConstraints;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled_constraints - computed: false, optional: false, required: true
  private _enabledConstraints?: string[]; 
  public get enabledConstraints() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_constraints'));
  }
  public set enabledConstraints(value: string[]) {
    this._enabledConstraints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledConstraintsInput() {
    return this._enabledConstraints;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled_constraints: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enabledConstraints),
      organization_id: cdktn.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled_constraints: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enabledConstraints),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      organization_id: {
        value: cdktn.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
