---
sidebar_position: 3
title: "Messages"
---

import TOCInline from "@theme/TOCInline"

## Request Service

<TOCInline toc={toc[toc.length - 4].children}/>

## Subscription Service

<TOCInline toc={toc[toc.length - 3].children}/>

## Common

<TOCInline toc={toc[toc.length - 2].children}/>

## Base

<TOCInline toc={toc[toc.length - 1].children}/>

## About Messages

This sections lists all `protobuf` messages defined by the services of the Jalapeño API Gateway.

:::info 'required', 'optional' & 'repeated'
All properties that are preceded by either the **optional** or **required** keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of [proto2](https://developers.google.com/protocol-buffers/docs/proto).

The reason for this design choice is explained in the section [Why use proto2 instead of proto3?](../design/design-choices#why-use-proto2-instead-of-proto3).
:::

## Request Messages

### `TopologyRequest`

```protobuf
message TopologyRequest {
    repeated string keys = 1;
    repeated string propertyNames = 2;
}
```

### `TelemetryRequest`

```protobuf
message TelemetryRequest {
    repeated string ipv4addresses = 1;
    repeated string propertyNames = 2;
}
```

### `LSNodeResponse`

```protobuf
message LSNodeResponse {
    repeated LSNode lsNodes = 1;
}
```

### `LSLinkResponse`

```protobuf
message LSLinkResponse {
    repeated LSLink lsLinks = 1;
}
```

### `LSPrefixResponse`

```protobuf
message LSPrefixResponse {
    repeated LSPrefix lsPrefixes = 1;
}
```

### `LSSRv6SIDResponse`

```protobuf
message LSSRv6SIDResponse {
    repeated LSSRv6SID lsSRv6SIDs = 1;
}
```

### `TelemetryResponse`

```protobuf
message TelemetryResponse {
    repeated TelemetryData telemetryData = 1;
}
```

### `TelemetryData`

```protobuf
message TelemetryData {
    required string ipv4address = 1;
    optional int64 dataRate = 2;
    optional int64 packetsSent = 3;
    optional int64 packetsReceived = 4;
    optional string state = 5;
    optional int64 lastStateTransitionTime = 6;
}
```

## Subscription Messages

### `TopologySubscription`

```protobuf
message TopologySubscription {
    repeated string keys = 1;
    repeated string propertyNames = 2;
}
```

### `TelemetrySubscription`

```protobuf
message TelemetrySubscription {
    repeated string ipv4addresses = 1;
    repeated string propertyNames = 2;
}
```

### `LSNodeEvent`

```protobuf
message LSNodeEvent {
    required string action = 1;
    required string key = 2;
    optional LSNode lsNode = 3;
}
```

### `LSLinkEvent`

```protobuf
message LSLinkEvent {
    required string action = 1;
    required string key = 2;
    optional LSLink lsLink = 3;
}
```

### `LSPrefixEvent`

```protobuf
message LSPrefixEvent {
    required string action = 1;
    required string key = 2;
    optional LSPrefix lsPrefix = 3;
}
```

### `LSSRv6SIDEvent`

```protobuf
message LSSRv6SIDEvent {
    required string action = 1;
    required string key = 2;
    optional LSSRv6SID lsSRv6SID = 3;
}
```

### `TelemetryEvent`

```protobuf
message TelemetryEvent {
    required string ipv4address = 1;
    optional int64 dataRate = 2;
    optional int64 packetsSent = 3;
    optional int64 packetsReceived = 4;
    optional string state = 5;
    optional int64 lastStateTransitionTime = 6;
}
```

## Common Messages

These messages are used by both the **Request Service** and the **Subscription Service**.

### `LSNode`

```protobuf
message LSNode {
    required string Key = 1;
    optional string ID = 2;
    optional string RouterHash = 3;
    optional int64 DomainID = 4;
    optional string RouterIP = 5;
    optional string PeerHash = 6;
    optional string PeerIP = 7;
    optional int32 PeerASN = 8;
    optional string Timestamp = 9;
    optional string IGPRouterID = 10;
    optional uint32 ASN = 11;
    repeated MultiTopologyIdentifier MTID = 12;
    optional string AreaID = 13;
    optional string Protocol = 14;
    optional uint32 ProtocolID = 15;
    optional string Name = 16;
    optional bool IsPrepolicy = 17;
    optional bool IsAdjRIBIn = 18;
}
```

### `LSLink`

```protobuf
message LSLink {
    required string Key = 1;
    optional string ID = 2;
    optional string RouterHash = 3;
    optional string RouterIP = 4;
    optional int64 DomainID = 5;
    optional string PeerHash = 6;
    optional string PeerIP = 7;
    optional int32 PeerASN = 8;
    optional string Timestamp = 9;
    optional string IGPRouterID = 10;
    optional string Protocol = 11;
    optional string AreaID = 12;
    optional string Nexthop = 13;
    optional MultiTopologyIdentifier MTID = 14;
    optional string LocalLinkIP = 15;
    optional string RemoteLinkIP = 16;
    optional uint32 IGPMetric = 17;
    optional string RemoteNodeHash = 18;
    optional string LocalNodeHash = 19;
    optional string RemoteIGPRouterID = 20;
}
```

### `LSPrefix`

```protobuf
message LSPrefix {
    required string Key = 1;
    optional string ID = 2;
    optional string RouterHash = 3;
    optional string RouterIP = 4;
    optional int64 DomainID = 5;
    optional string PeerHash = 6;
    optional string PeerIP = 7;
    optional int32 PeerASN = 8;
    optional string Timestamp = 9;
    optional string IGPRouterID = 10;
    optional string Protocol = 11;
    optional string AreaID = 12;
    optional string Nexthop = 13;
    optional string LocalNodeHash = 14;
    optional MultiTopologyIdentifier MTID = 15;
    optional string Prefix = 16;
    optional int32 PrefixLen = 17;
    optional uint32 PrefixMetric = 18;
    optional bool IsPrepolicy = 19;
    optional bool IsAdjRIBIn = 20;
}
```

### `LSSRv6SID`

```protobuf
message LSSRv6SID {
    required string Key = 1;
    optional string ID = 2;
    optional string RouterHash = 3;
    optional string RouterIP = 4;
    optional int64 DomainID = 5;
    optional string PeerHash = 6;
    optional string PeerIP = 7;
    optional int32 PeerASN = 8;
    optional string Timestamp = 9;
    optional string IGPRouterID = 10;
    optional uint32 LocalNodeASN = 11;
    optional string Protocol = 12;
    optional string Nexthop = 13;
    optional string LocalNodeHash = 14;
    optional MultiTopologyIdentifier MTID = 15;
    optional uint32 IGPFlags = 16;
    optional bool IsPrepolicy = 17;
    optional bool IsAdjRIBIn = 18;
    optional string SRv6SID = 19;
}
```

## Base Messages

### `MultiTopologyIdentifier`

```protobuf
message MultiTopologyIdentifier {
    required bool OFlag = 1;
    required bool AFlag = 2;
    required uint32 MTID = 3;
}
```
