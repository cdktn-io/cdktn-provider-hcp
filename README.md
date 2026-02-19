
# CDKTN prebuilt bindings for hashicorp/hcp provider version 0.111.0

This repo builds and publishes the [Terraform hcp provider](https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs) bindings for [CDK Terrain](https://cdktn.io).

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktn/provider-hcp](https://www.npmjs.com/package/@cdktn/provider-hcp).

`npm install @cdktn/provider-hcp`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktn-provider-hcp](https://pypi.org/project/cdktn-provider-hcp).

`pipenv install cdktn-provider-hcp`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/Io.Cdktn.Providers.Hcp](https://www.nuget.org/packages/Io.Cdktn.Providers.Hcp).

`dotnet add package Io.Cdktn.Providers.Hcp`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/io.cdktn/cdktn-provider-hcp](https://mvnrepository.com/artifact/io.cdktn/cdktn-provider-hcp).

```
<dependency>
    <groupId>io.cdktn</groupId>
    <artifactId>cdktn-provider-hcp</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```

### Go

The go package is generated into the [`github.com/cdktn-io/cdktn-provider-hcp-go`](https://github.com/cdktn-io/cdktn-provider-hcp-go) package.

`go get github.com/cdktn-io/cdktn-provider-hcp-go/hcp/<version>`

Where `<version>` is the version of the prebuilt provider you would like to use e.g. `v11`. The full module name can be found
within the [go.mod](https://github.com/cdktn-io/cdktn-provider-hcp-go/blob/main/hcp/go.mod#L1) file.

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktn/provider-hcp).

## Versioning

This project is explicitly not tracking the Terraform hcp provider version 1:1. In fact, it always tracks `latest` of `~> 0.45` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by [generating the provider constructs manually](https://cdktn.io/docs/concepts/providers#import-providers).

These are the upstream dependencies:

- [CDK Terrain](https://cdktn.io) - Last official release
- [Terraform hcp provider](https://registry.terraform.io/providers/hashicorp/hcp/0.111.0)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [CDK Terrain](https://cdktn.io) project:

- [Create bug report](https://github.com/open-constructs/cdk-terrain/issues)
- [Create feature request](https://github.com/open-constructs/cdk-terrain/issues)

## Contributing

### Projen

This is mostly based on [Projen](https://projen.io), which takes care of generating the entire repository.

### cdktn-provider-project based on Projen

There's a custom [project builder](https://github.com/cdktn-io/cdktn-provider-project) which encapsulate the common settings for all `cdktn` prebuilt providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [CDKTN Repository Manager](https://github.com/cdktn-io/cdktn-repository-manager/).
