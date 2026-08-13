# `logStreamingDestination` Submodule <a name="`logStreamingDestination` Submodule" id="@cdktn/provider-hcp.logStreamingDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogStreamingDestination <a name="LogStreamingDestination" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination hcp_log_streaming_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestination;

LogStreamingDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .cloudwatch(LogStreamingDestinationCloudwatch)
//  .datadog(LogStreamingDestinationDatadog)
//  .splunkCloud(LogStreamingDestinationSplunkCloud)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The HCP Log Streaming Destination’s name. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.datadog">datadog</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.splunkCloud">splunkCloud</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The HCP Log Streaming Destination’s name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#name LogStreamingDestination#name}

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.cloudwatch"></a>

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}.

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.datadog"></a>

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}.

---

##### `splunkCloud`<sup>Optional</sup> <a name="splunkCloud" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.Initializer.parameter.splunkCloud"></a>

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch">putCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog">putDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud">putSplunkCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.resetCloudwatch">resetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.resetDatadog">resetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.resetSplunkCloud">resetSplunkCloud</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudwatch` <a name="putCloudwatch" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch"></a>

```java
public void putCloudwatch(LogStreamingDestinationCloudwatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putCloudwatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

---

##### `putDatadog` <a name="putDatadog" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog"></a>

```java
public void putDatadog(LogStreamingDestinationDatadog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

---

##### `putSplunkCloud` <a name="putSplunkCloud" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud"></a>

```java
public void putSplunkCloud(LogStreamingDestinationSplunkCloud value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.putSplunkCloud.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

---

##### `resetCloudwatch` <a name="resetCloudwatch" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.resetCloudwatch"></a>

```java
public void resetCloudwatch()
```

##### `resetDatadog` <a name="resetDatadog" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.resetDatadog"></a>

```java
public void resetDatadog()
```

##### `resetSplunkCloud` <a name="resetSplunkCloud" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.resetSplunkCloud"></a>

```java
public void resetSplunkCloud()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogStreamingDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestination;

LogStreamingDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestination;

LogStreamingDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestination;

LogStreamingDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestination;

LogStreamingDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogStreamingDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogStreamingDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogStreamingDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogStreamingDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogStreamingDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference">LogStreamingDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadog">datadog</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference">LogStreamingDestinationDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloud">splunkCloud</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference">LogStreamingDestinationSplunkCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.streamingDestinationId">streamingDestinationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatchInput">cloudwatchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadogInput">datadogInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloudInput">splunkCloudInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatch"></a>

```java
public LogStreamingDestinationCloudwatchOutputReference getCloudwatch();
```

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference">LogStreamingDestinationCloudwatchOutputReference</a>

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadog"></a>

```java
public LogStreamingDestinationDatadogOutputReference getDatadog();
```

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference">LogStreamingDestinationDatadogOutputReference</a>

---

##### `splunkCloud`<sup>Required</sup> <a name="splunkCloud" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloud"></a>

```java
public LogStreamingDestinationSplunkCloudOutputReference getSplunkCloud();
```

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference">LogStreamingDestinationSplunkCloudOutputReference</a>

---

##### `streamingDestinationId`<sup>Required</sup> <a name="streamingDestinationId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.streamingDestinationId"></a>

```java
public java.lang.String getStreamingDestinationId();
```

- *Type:* java.lang.String

---

##### `cloudwatchInput`<sup>Optional</sup> <a name="cloudwatchInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.cloudwatchInput"></a>

```java
public IResolvable|LogStreamingDestinationCloudwatch getCloudwatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

---

##### `datadogInput`<sup>Optional</sup> <a name="datadogInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.datadogInput"></a>

```java
public IResolvable|LogStreamingDestinationDatadog getDatadogInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `splunkCloudInput`<sup>Optional</sup> <a name="splunkCloudInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.splunkCloudInput"></a>

```java
public IResolvable|LogStreamingDestinationSplunkCloud getSplunkCloudInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogStreamingDestinationCloudwatch <a name="LogStreamingDestinationCloudwatch" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.Initializer"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestinationCloudwatch;

LogStreamingDestinationCloudwatch.builder()
    .externalId(java.lang.String)
    .region(java.lang.String)
    .roleArn(java.lang.String)
//  .logGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.externalId">externalId</a></code> | <code>java.lang.String</code> | The external_id to provide when assuming the aws IAM role. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.region">region</a></code> | <code>java.lang.String</code> | The region the CloudWatch destination is set up to stream to. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The role_arn that will be assumed to stream logs. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | The log_group_name of the CloudWatch destination. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

The external_id to provide when assuming the aws IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#external_id LogStreamingDestination#external_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region the CloudWatch destination is set up to stream to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#region LogStreamingDestination#region}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The role_arn that will be assumed to stream logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#role_arn LogStreamingDestination#role_arn}

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

The log_group_name of the CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#log_group_name LogStreamingDestination#log_group_name}

---

### LogStreamingDestinationConfig <a name="LogStreamingDestinationConfig" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestinationConfig;

LogStreamingDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .cloudwatch(LogStreamingDestinationCloudwatch)
//  .datadog(LogStreamingDestinationDatadog)
//  .splunkCloud(LogStreamingDestinationSplunkCloud)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The HCP Log Streaming Destination’s name. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.datadog">datadog</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.splunkCloud">splunkCloud</a></code> | <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The HCP Log Streaming Destination’s name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#name LogStreamingDestination#name}

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.cloudwatch"></a>

```java
public LogStreamingDestinationCloudwatch getCloudwatch();
```

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#cloudwatch LogStreamingDestination#cloudwatch}.

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.datadog"></a>

```java
public LogStreamingDestinationDatadog getDatadog();
```

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#datadog LogStreamingDestination#datadog}.

---

##### `splunkCloud`<sup>Optional</sup> <a name="splunkCloud" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationConfig.property.splunkCloud"></a>

```java
public LogStreamingDestinationSplunkCloud getSplunkCloud();
```

- *Type:* <a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}.

---

### LogStreamingDestinationDatadog <a name="LogStreamingDestinationDatadog" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.Initializer"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestinationDatadog;

LogStreamingDestinationDatadog.builder()
    .apiKey(java.lang.String)
    .endpoint(java.lang.String)
//  .applicationKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The value for the DD-API-KEY to send when making requests to DataDog. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The Datadog endpoint to send logs to. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | The value for the DD-APPLICATION-KEY to send when making requests to DataDog. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

The value for the DD-API-KEY to send when making requests to DataDog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#api_key LogStreamingDestination#api_key}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The Datadog endpoint to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}

---

##### `applicationKey`<sup>Optional</sup> <a name="applicationKey" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog.property.applicationKey"></a>

```java
public java.lang.String getApplicationKey();
```

- *Type:* java.lang.String

The value for the DD-APPLICATION-KEY to send when making requests to DataDog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#application_key LogStreamingDestination#application_key}

---

### LogStreamingDestinationSplunkCloud <a name="LogStreamingDestinationSplunkCloud" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.Initializer"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestinationSplunkCloud;

LogStreamingDestinationSplunkCloud.builder()
    .endpoint(java.lang.String)
    .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The Splunk Cloud endpoint to send logs to. Streaming to free trial instances is not supported. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.token">token</a></code> | <code>java.lang.String</code> | The authentication token that will be used by the platform to access Splunk Cloud. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The Splunk Cloud endpoint to send logs to. Streaming to free trial instances is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The authentication token that will be used by the platform to access Splunk Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.114.0/docs/resources/log_streaming_destination#token LogStreamingDestination#token}

---

## Classes <a name="Classes" id="Classes"></a>

### LogStreamingDestinationCloudwatchOutputReference <a name="LogStreamingDestinationCloudwatchOutputReference" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestinationCloudwatchOutputReference;

new LogStreamingDestinationCloudwatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.resetLogGroupName"></a>

```java
public void resetLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatchOutputReference.property.internalValue"></a>

```java
public IResolvable|LogStreamingDestinationCloudwatch getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationCloudwatch">LogStreamingDestinationCloudwatch</a>

---


### LogStreamingDestinationDatadogOutputReference <a name="LogStreamingDestinationDatadogOutputReference" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestinationDatadogOutputReference;

new LogStreamingDestinationDatadogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resetApplicationKey">resetApplicationKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationKey` <a name="resetApplicationKey" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.resetApplicationKey"></a>

```java
public void resetApplicationKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKeyInput">applicationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `applicationKeyInput`<sup>Optional</sup> <a name="applicationKeyInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKeyInput"></a>

```java
public java.lang.String getApplicationKeyInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.applicationKey"></a>

```java
public java.lang.String getApplicationKey();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadogOutputReference.property.internalValue"></a>

```java
public IResolvable|LogStreamingDestinationDatadog getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationDatadog">LogStreamingDestinationDatadog</a>

---


### LogStreamingDestinationSplunkCloudOutputReference <a name="LogStreamingDestinationSplunkCloudOutputReference" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer"></a>

```java
import io.cdktn.providers.hcp.log_streaming_destination.LogStreamingDestinationSplunkCloudOutputReference;

new LogStreamingDestinationSplunkCloudOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloudOutputReference.property.internalValue"></a>

```java
public IResolvable|LogStreamingDestinationSplunkCloud getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-hcp.logStreamingDestination.LogStreamingDestinationSplunkCloud">LogStreamingDestinationSplunkCloud</a>

---



