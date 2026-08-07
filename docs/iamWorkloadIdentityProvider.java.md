# `iamWorkloadIdentityProvider` Submodule <a name="`iamWorkloadIdentityProvider` Submodule" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityProvider <a name="IamWorkloadIdentityProvider" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider hcp_iam_workload_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProvider;

IamWorkloadIdentityProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .conditionalAccess(java.lang.String)
    .name(java.lang.String)
    .servicePrincipal(java.lang.String)
//  .aws(IamWorkloadIdentityProviderAws)
//  .description(java.lang.String)
//  .oidc(IamWorkloadIdentityProviderOidc)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.conditionalAccess">conditionalAccess</a></code> | <code>java.lang.String</code> | conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The workload identity provider's name. Ideally, this should be descriptive of the workload being federated. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.servicePrincipal">servicePrincipal</a></code> | <code>java.lang.String</code> | The service principal's resource name for which the workload identity provider will be created for. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the workload identity provider. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditionalAccess`<sup>Required</sup> <a name="conditionalAccess" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.conditionalAccess"></a>

- *Type:* java.lang.String

conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens.

It restricts which upstream identities are allowed to access the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#conditional_access IamWorkloadIdentityProvider#conditional_access}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The workload identity provider's name. Ideally, this should be descriptive of the workload being federated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#name IamWorkloadIdentityProvider#name}

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.servicePrincipal"></a>

- *Type:* java.lang.String

The service principal's resource name for which the workload identity provider will be created for.

Only service principals created within a project are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#service_principal IamWorkloadIdentityProvider#service_principal}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the workload identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#description IamWorkloadIdentityProvider#description}

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc">putOidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOidc">resetOidc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws"></a>

```java
public void putAws(IamWorkloadIdentityProviderAws value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

---

##### `putOidc` <a name="putOidc" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc"></a>

```java
public void putOidc(IamWorkloadIdentityProviderOidc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

---

##### `resetAws` <a name="resetAws" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetAws"></a>

```java
public void resetAws()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOidc` <a name="resetOidc" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOidc"></a>

```java
public void resetOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProvider;

IamWorkloadIdentityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProvider;

IamWorkloadIdentityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProvider;

IamWorkloadIdentityProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProvider;

IamWorkloadIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamWorkloadIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IamWorkloadIdentityProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamWorkloadIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamWorkloadIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference">IamWorkloadIdentityProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference">IamWorkloadIdentityProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.awsInput">awsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccessInput">conditionalAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidcInput">oidcInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccess">conditionalAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipal">servicePrincipal</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.aws"></a>

```java
public IamWorkloadIdentityProviderAwsOutputReference getAws();
```

- *Type:* <a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference">IamWorkloadIdentityProviderAwsOutputReference</a>

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidc"></a>

```java
public IamWorkloadIdentityProviderOidcOutputReference getOidc();
```

- *Type:* <a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference">IamWorkloadIdentityProviderOidcOutputReference</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.awsInput"></a>

```java
public IResolvable|IamWorkloadIdentityProviderAws getAwsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

---

##### `conditionalAccessInput`<sup>Optional</sup> <a name="conditionalAccessInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccessInput"></a>

```java
public java.lang.String getConditionalAccessInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oidcInput`<sup>Optional</sup> <a name="oidcInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidcInput"></a>

```java
public IResolvable|IamWorkloadIdentityProviderOidc getOidcInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipalInput"></a>

```java
public java.lang.String getServicePrincipalInput();
```

- *Type:* java.lang.String

---

##### `conditionalAccess`<sup>Required</sup> <a name="conditionalAccess" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccess"></a>

```java
public java.lang.String getConditionalAccess();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipal"></a>

```java
public java.lang.String getServicePrincipal();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityProviderAws <a name="IamWorkloadIdentityProviderAws" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.Initializer"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProviderAws;

IamWorkloadIdentityProviderAws.builder()
    .accountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The AWS Account ID that is allowed to exchange workload identities. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The AWS Account ID that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#account_id IamWorkloadIdentityProvider#account_id}

---

### IamWorkloadIdentityProviderConfig <a name="IamWorkloadIdentityProviderConfig" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProviderConfig;

IamWorkloadIdentityProviderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .conditionalAccess(java.lang.String)
    .name(java.lang.String)
    .servicePrincipal(java.lang.String)
//  .aws(IamWorkloadIdentityProviderAws)
//  .description(java.lang.String)
//  .oidc(IamWorkloadIdentityProviderOidc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.conditionalAccess">conditionalAccess</a></code> | <code>java.lang.String</code> | conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | The workload identity provider's name. Ideally, this should be descriptive of the workload being federated. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.servicePrincipal">servicePrincipal</a></code> | <code>java.lang.String</code> | The service principal's resource name for which the workload identity provider will be created for. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the workload identity provider. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditionalAccess`<sup>Required</sup> <a name="conditionalAccess" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.conditionalAccess"></a>

```java
public java.lang.String getConditionalAccess();
```

- *Type:* java.lang.String

conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens.

It restricts which upstream identities are allowed to access the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#conditional_access IamWorkloadIdentityProvider#conditional_access}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The workload identity provider's name. Ideally, this should be descriptive of the workload being federated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#name IamWorkloadIdentityProvider#name}

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.servicePrincipal"></a>

```java
public java.lang.String getServicePrincipal();
```

- *Type:* java.lang.String

The service principal's resource name for which the workload identity provider will be created for.

Only service principals created within a project are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#service_principal IamWorkloadIdentityProvider#service_principal}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.aws"></a>

```java
public IamWorkloadIdentityProviderAws getAws();
```

- *Type:* <a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the workload identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#description IamWorkloadIdentityProvider#description}

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.oidc"></a>

```java
public IamWorkloadIdentityProviderOidc getOidc();
```

- *Type:* <a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}.

---

### IamWorkloadIdentityProviderOidc <a name="IamWorkloadIdentityProviderOidc" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.Initializer"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProviderOidc;

IamWorkloadIdentityProviderOidc.builder()
    .issuerUri(java.lang.String)
//  .allowedAudiences(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | The URL of the OIDC Issuer that is allowed to exchange workload identities. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities. |

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

The URL of the OIDC Issuer that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#issuer_uri IamWorkloadIdentityProvider#issuer_uri}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities.

The access token must have an audience that is contained in this set. If no audience is set, the default allowed audience will be the resource name of the WorkloadIdentityProvider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.113.0/docs/resources/iam_workload_identity_provider#allowed_audiences IamWorkloadIdentityProvider#allowed_audiences}

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityProviderAwsOutputReference <a name="IamWorkloadIdentityProviderAwsOutputReference" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProviderAwsOutputReference;

new IamWorkloadIdentityProviderAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.internalValue"></a>

```java
public IResolvable|IamWorkloadIdentityProviderAws getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

---


### IamWorkloadIdentityProviderOidcOutputReference <a name="IamWorkloadIdentityProviderOidcOutputReference" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.iam_workload_identity_provider.IamWorkloadIdentityProviderOidcOutputReference;

new IamWorkloadIdentityProviderOidcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resetAllowedAudiences"></a>

```java
public void resetAllowedAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUriInput"></a>

```java
public java.lang.String getIssuerUriInput();
```

- *Type:* java.lang.String

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.internalValue"></a>

```java
public IResolvable|IamWorkloadIdentityProviderOidc getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

---



