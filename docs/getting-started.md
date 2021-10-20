---
sidebar_position: 4
title: "Getting Started"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Jalapeño API Gateway uses gRPC for communication. You can download the Protobuf definitions here:

- <a target="_blank" href={useBaseUrl('/protobuf-files/v1.0.0-beta/requestservice.proto')}>requestservice.proto (v1.0.0-beta)</a>
- <a target="_blank" href={useBaseUrl('/protobuf-files/v1.0.0-beta/subscriptionservice.proto')}>subscriptionservice.proto (v1.0.0-beta)</a>

To compile the files, you will need to install both the [protobuf compiler](https://grpc.io/docs/protoc-installation/) and the language specific [gRPC compiler](https://grpc.io/docs/languages/).

Once you have compiled the files and added the generated code to your project, you can connect to the Request Service and the Subscription Service and use the gRPC Methods documented in the [API Documentation](http://localhost:3000/jagw-docs/docs/api/request-service).

To initialize a gRPC connection, refer to the language specific documentation for [gRPC](https://grpc.io/docs/languages/) (i.e. [for Golang](https://grpc.io/docs/languages/go/basics/#client)).

You can also refer to our [demo-sr-app](https://github.com/jalapeno-api-gateway/demo-sr-app).


