# `vaultSecretsIntegrationTwilio` Submodule <a name="`vaultSecretsIntegrationTwilio` Submodule" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationTwilio <a name="VaultSecretsIntegrationTwilio" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio hcp_vault_secrets_integration_twilio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer"></a>

```java
import io.cdktn.providers.hcp.vault_secrets_integration_twilio.VaultSecretsIntegrationTwilio;

VaultSecretsIntegrationTwilio.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capabilities(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .projectId(java.lang.String)
//  .staticCredentialDetails(VaultSecretsIntegrationTwilioStaticCredentialDetails)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a></code> | Twilio API key parts used to authenticate against the target Twilio account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#capabilities VaultSecretsIntegrationTwilio#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#name VaultSecretsIntegrationTwilio#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#project_id VaultSecretsIntegrationTwilio#project_id}

---

##### `staticCredentialDetails`<sup>Optional</sup> <a name="staticCredentialDetails" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.staticCredentialDetails"></a>

- *Type:* <a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

Twilio API key parts used to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#static_credential_details VaultSecretsIntegrationTwilio#static_credential_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails">putStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetStaticCredentialDetails">resetStaticCredentialDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStaticCredentialDetails` <a name="putStaticCredentialDetails" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails"></a>

```java
public void putStaticCredentialDetails(VaultSecretsIntegrationTwilioStaticCredentialDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetStaticCredentialDetails` <a name="resetStaticCredentialDetails" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetStaticCredentialDetails"></a>

```java
public void resetStaticCredentialDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VaultSecretsIntegrationTwilio resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct"></a>

```java
import io.cdktn.providers.hcp.vault_secrets_integration_twilio.VaultSecretsIntegrationTwilio;

VaultSecretsIntegrationTwilio.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.vault_secrets_integration_twilio.VaultSecretsIntegrationTwilio;

VaultSecretsIntegrationTwilio.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource"></a>

```java
import io.cdktn.providers.hcp.vault_secrets_integration_twilio.VaultSecretsIntegrationTwilio;

VaultSecretsIntegrationTwilio.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.vault_secrets_integration_twilio.VaultSecretsIntegrationTwilio;

VaultSecretsIntegrationTwilio.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultSecretsIntegrationTwilio.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VaultSecretsIntegrationTwilio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultSecretsIntegrationTwilio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultSecretsIntegrationTwilio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationTwilio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetailsInput">staticCredentialDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `staticCredentialDetails`<sup>Required</sup> <a name="staticCredentialDetails" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetails"></a>

```java
public VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference getStaticCredentialDetails();
```

- *Type:* <a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `staticCredentialDetailsInput`<sup>Optional</sup> <a name="staticCredentialDetailsInput" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetailsInput"></a>

```java
public IResolvable|VaultSecretsIntegrationTwilioStaticCredentialDetails getStaticCredentialDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationTwilioConfig <a name="VaultSecretsIntegrationTwilioConfig" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.vault_secrets_integration_twilio.VaultSecretsIntegrationTwilioConfig;

VaultSecretsIntegrationTwilioConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capabilities(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .projectId(java.lang.String)
//  .staticCredentialDetails(VaultSecretsIntegrationTwilioStaticCredentialDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a></code> | Twilio API key parts used to authenticate against the target Twilio account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#capabilities VaultSecretsIntegrationTwilio#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#name VaultSecretsIntegrationTwilio#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#project_id VaultSecretsIntegrationTwilio#project_id}

---

##### `staticCredentialDetails`<sup>Optional</sup> <a name="staticCredentialDetails" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.staticCredentialDetails"></a>

```java
public VaultSecretsIntegrationTwilioStaticCredentialDetails getStaticCredentialDetails();
```

- *Type:* <a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

Twilio API key parts used to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#static_credential_details VaultSecretsIntegrationTwilio#static_credential_details}

---

### VaultSecretsIntegrationTwilioStaticCredentialDetails <a name="VaultSecretsIntegrationTwilioStaticCredentialDetails" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.Initializer"></a>

```java
import io.cdktn.providers.hcp.vault_secrets_integration_twilio.VaultSecretsIntegrationTwilioStaticCredentialDetails;

VaultSecretsIntegrationTwilioStaticCredentialDetails.builder()
    .accountSid(java.lang.String)
    .apiKeySecret(java.lang.String)
    .apiKeySid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.accountSid">accountSid</a></code> | <code>java.lang.String</code> | Account SID for the target Twilio account. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySecret">apiKeySecret</a></code> | <code>java.lang.String</code> | Api key secret used with the api key SID to authenticate against the target Twilio account. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySid">apiKeySid</a></code> | <code>java.lang.String</code> | Api key SID to authenticate against the target Twilio account. |

---

##### `accountSid`<sup>Required</sup> <a name="accountSid" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.accountSid"></a>

```java
public java.lang.String getAccountSid();
```

- *Type:* java.lang.String

Account SID for the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#account_sid VaultSecretsIntegrationTwilio#account_sid}

---

##### `apiKeySecret`<sup>Required</sup> <a name="apiKeySecret" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySecret"></a>

```java
public java.lang.String getApiKeySecret();
```

- *Type:* java.lang.String

Api key secret used with the api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#api_key_secret VaultSecretsIntegrationTwilio#api_key_secret}

---

##### `apiKeySid`<sup>Required</sup> <a name="apiKeySid" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySid"></a>

```java
public java.lang.String getApiKeySid();
```

- *Type:* java.lang.String

Api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/vault_secrets_integration_twilio#api_key_sid VaultSecretsIntegrationTwilio#api_key_sid}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference <a name="VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.vault_secrets_integration_twilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference;

new VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSidInput">accountSidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecretInput">apiKeySecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySidInput">apiKeySidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSid">accountSid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecret">apiKeySecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySid">apiKeySid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountSidInput`<sup>Optional</sup> <a name="accountSidInput" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSidInput"></a>

```java
public java.lang.String getAccountSidInput();
```

- *Type:* java.lang.String

---

##### `apiKeySecretInput`<sup>Optional</sup> <a name="apiKeySecretInput" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecretInput"></a>

```java
public java.lang.String getApiKeySecretInput();
```

- *Type:* java.lang.String

---

##### `apiKeySidInput`<sup>Optional</sup> <a name="apiKeySidInput" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySidInput"></a>

```java
public java.lang.String getApiKeySidInput();
```

- *Type:* java.lang.String

---

##### `accountSid`<sup>Required</sup> <a name="accountSid" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSid"></a>

```java
public java.lang.String getAccountSid();
```

- *Type:* java.lang.String

---

##### `apiKeySecret`<sup>Required</sup> <a name="apiKeySecret" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecret"></a>

```java
public java.lang.String getApiKeySecret();
```

- *Type:* java.lang.String

---

##### `apiKeySid`<sup>Required</sup> <a name="apiKeySid" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySid"></a>

```java
public java.lang.String getApiKeySid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|VaultSecretsIntegrationTwilioStaticCredentialDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

---



