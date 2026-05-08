# `dataHcpVaultSecretsApp` Submodule <a name="`dataHcpVaultSecretsApp` Submodule" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultSecretsApp <a name="DataHcpVaultSecretsApp" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_app hcp_vault_secrets_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.appName">appName</a></code> | <code>java.lang.String</code> | The name of the Vault Secrets application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.Initializer.parameter.appName"></a>

- *Type:* java.lang.String

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_app#app_name DataHcpVaultSecretsApp#app_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHcpVaultSecretsApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isConstruct"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformDataSource"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsApp;

DataHcpVaultSecretsApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpVaultSecretsApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataHcpVaultSecretsApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpVaultSecretsApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpVaultSecretsApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataHcpVaultSecretsApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.secrets">secrets</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.appNameInput">appNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.secrets"></a>

```java
public StringMap getSecrets();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.appNameInput"></a>

```java
public java.lang.String getAppNameInput();
```

- *Type:* java.lang.String

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultSecretsAppConfig <a name="DataHcpVaultSecretsAppConfig" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.data_hcp_vault_secrets_app.DataHcpVaultSecretsAppConfig;

DataHcpVaultSecretsAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.appName">appName</a></code> | <code>java.lang.String</code> | The name of the Vault Secrets application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-hcp.dataHcpVaultSecretsApp.DataHcpVaultSecretsAppConfig.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/vault_secrets_app#app_name DataHcpVaultSecretsApp#app_name}

---



