/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VaultRadarSourceGithubCloudConfig extends cdktn.TerraformMetaArguments {
  /**
  * The detector type to use for monitoring this source. Valid values are 'hcp' (managed by HCP) or 'agent' (self-hosted agent). Defaults to 'hcp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#detector_type VaultRadarSourceGithubCloud#detector_type}
  */
  readonly detectorType?: string;
  /**
  * GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#github_organization VaultRadarSourceGithubCloud#github_organization}
  */
  readonly githubOrganization: string;
  /**
  * The ID of the HCP project where Vault Radar is located. If not specified, the project specified in the HCP Provider config block will be used, if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#project_id VaultRadarSourceGithubCloud#project_id}
  */
  readonly projectId?: string;
  /**
  * GitHub personal access token. Required when detector_type is 'hcp' or not specified (defaults to 'hcp'). Cannot be used when detector_type is 'agent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#token VaultRadarSourceGithubCloud#token}
  */
  readonly token?: string;
  /**
  * Environment variable name containing the GitHub personal access token. When detector_type is 'agent', this is required. When detector_type is 'hcp' or not specified (defaults to 'hcp'), this is optional and can be set to enable optional secret copying via the Vault Radar Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#token_env_var VaultRadarSourceGithubCloud#token_env_var}
  */
  readonly tokenEnvVar?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud hcp_vault_radar_source_github_cloud}
*/
export class VaultRadarSourceGithubCloud extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_radar_source_github_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VaultRadarSourceGithubCloud resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultRadarSourceGithubCloud to import
  * @param importFromId The id of the existing VaultRadarSourceGithubCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultRadarSourceGithubCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_radar_source_github_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/vault_radar_source_github_cloud hcp_vault_radar_source_github_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultRadarSourceGithubCloudConfig
  */
  public constructor(scope: Construct, id: string, config: VaultRadarSourceGithubCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_radar_source_github_cloud',
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
    this._detectorType = config.detectorType;
    this._githubOrganization = config.githubOrganization;
    this._projectId = config.projectId;
    this._token = config.token;
    this._tokenEnvVar = config.tokenEnvVar;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detector_type - computed: false, optional: true, required: false
  private _detectorType?: string; 
  public get detectorType() {
    return this.getStringAttribute('detector_type');
  }
  public set detectorType(value: string) {
    this._detectorType = value;
  }
  public resetDetectorType() {
    this._detectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorTypeInput() {
    return this._detectorType;
  }

  // github_organization - computed: false, optional: false, required: true
  private _githubOrganization?: string; 
  public get githubOrganization() {
    return this.getStringAttribute('github_organization');
  }
  public set githubOrganization(value: string) {
    this._githubOrganization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationInput() {
    return this._githubOrganization;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_env_var - computed: false, optional: true, required: false
  private _tokenEnvVar?: string; 
  public get tokenEnvVar() {
    return this.getStringAttribute('token_env_var');
  }
  public set tokenEnvVar(value: string) {
    this._tokenEnvVar = value;
  }
  public resetTokenEnvVar() {
    this._tokenEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEnvVarInput() {
    return this._tokenEnvVar;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detector_type: cdktn.stringToTerraform(this._detectorType),
      github_organization: cdktn.stringToTerraform(this._githubOrganization),
      project_id: cdktn.stringToTerraform(this._projectId),
      token: cdktn.stringToTerraform(this._token),
      token_env_var: cdktn.stringToTerraform(this._tokenEnvVar),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detector_type: {
        value: cdktn.stringToHclTerraform(this._detectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_organization: {
        value: cdktn.stringToHclTerraform(this._githubOrganization),
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
      token: {
        value: cdktn.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_env_var: {
        value: cdktn.stringToHclTerraform(this._tokenEnvVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
