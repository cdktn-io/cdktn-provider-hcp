# `dataHcpVaultSecretsDynamicSecret` Submodule <a name="`dataHcpVaultSecretsDynamicSecret` Submodule" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultSecretsDynamicSecret <a name="DataHcpVaultSecretsDynamicSecret" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_dynamic_secret.DataHcpVaultSecretsDynamicSecret;

DataHcpVaultSecretsDynamicSecret.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appName(java.lang.String)
    .secretName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.appName">appName</a></code> | <code>java.lang.String</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.secretName">secretName</a></code> | <code>java.lang.String</code> | The name of the Vault Secrets secret. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.appName"></a>

- *Type:* java.lang.String

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret#app_name DataHcpVaultSecretsDynamicSecret#app_name}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.secretName"></a>

- *Type:* java.lang.String

The name of the Vault Secrets secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret#secret_name DataHcpVaultSecretsDynamicSecret#secret_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpVaultSecretsDynamicSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_dynamic_secret.DataHcpVaultSecretsDynamicSecret;

DataHcpVaultSecretsDynamicSecret.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_dynamic_secret.DataHcpVaultSecretsDynamicSecret;

DataHcpVaultSecretsDynamicSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_dynamic_secret.DataHcpVaultSecretsDynamicSecret;

DataHcpVaultSecretsDynamicSecret.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_dynamic_secret.DataHcpVaultSecretsDynamicSecret;

DataHcpVaultSecretsDynamicSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpVaultSecretsDynamicSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataHcpVaultSecretsDynamicSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpVaultSecretsDynamicSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpVaultSecretsDynamicSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpVaultSecretsDynamicSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretProvider">secretProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretValues">secretValues</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appNameInput">appNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secretProvider`<sup>Required</sup> <a name="secretProvider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretProvider"></a>

```java
public java.lang.String getSecretProvider();
```

- *Type:* java.lang.String

---

##### `secretValues`<sup>Required</sup> <a name="secretValues" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretValues"></a>

```java
public StringMap getSecretValues();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appNameInput"></a>

```java
public java.lang.String getAppNameInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultSecretsDynamicSecretConfig <a name="DataHcpVaultSecretsDynamicSecretConfig" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_dynamic_secret.DataHcpVaultSecretsDynamicSecretConfig;

DataHcpVaultSecretsDynamicSecretConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appName(java.lang.String)
    .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.appName">appName</a></code> | <code>java.lang.String</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.secretName">secretName</a></code> | <code>java.lang.String</code> | The name of the Vault Secrets secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret#app_name DataHcpVaultSecretsDynamicSecret#app_name}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

The name of the Vault Secrets secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_dynamic_secret#secret_name DataHcpVaultSecretsDynamicSecret#secret_name}

---



