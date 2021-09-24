---
sidebar_position: 1
title: "Request Service"
---

import TOCInline from "@theme/TOCInline"

## gRPC Methods

<TOCInline toc={toc[toc.length - 3].children}/>

## gRPC Messages

<TOCInline toc={toc[toc.length - 2].children}/>

## Properties

<TOCInline toc={toc[toc.length - 1].children}/>

## Protobuf Definition

```protobuf
service RequestService {
    rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}
    rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}
    rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}
}
```

## Methods

### `GetLsNodes(TopologyRequest)`

#### Definition

```protobuf
rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}
```

#### Parameters

[TopologyRequest](#topologyrequest)

#### Returns

[LsNodeResponse](#lsnoderesponse)

#### Description

Takes a [TopologyRequest](#topologyrequest) with the specified **keys** and **propertyNames** and returns an [LsNodeResponse](#lsnoderesponse) containing all requested [LsNodes](#lsnode) with the requested properties.

- Omitting **keys** returns all available [LsNodes](#lsnode).
- Omitting **propertyNames** returns [LsNodes](#lsnode) with all available properties.

#### Examples

keys | propertyNames | [LsNodeResponse](#lsnoderesponse)
--- | --- | ---
[<br />"nodeKey1",<br />"nodeKey2"<br />] | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | [LsNodeResponse](#lsnoderesponse) contains [LsNodes](#lsnode) for the two specified keys with the three requested properties.
- | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | [LsNodeResponse](#lsnoderesponse) contains all available [LsNodes](#lsnode) with the three requested properties.
[<br />"nodeKey1",<br />"nodeKey2"<br />] | - | [LsNodeResponse](#lsnoderesponse) contains [LsNodes](#lsnode) for the two specified keys with all available properties.
- | - | [LsNodeResponse](#lsnoderesponse) contains all available [LsNodes](#lsnode) with all available properties.

### `GetLsLinks(TopologyRequest)`

#### Definition

```protobuf
rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}
```

#### Parameters

[TopologyRequest](#topologyrequest)

#### Returns

[LsLinkResponse](#lslinkresponse)

#### Description

Takes a [TopologyRequest](#topologyrequest) with the specified **keys** and **propertyNames** and returns an [LsLinkResponse](#lslinkresponse) containing all requested [LsLinks](#lslink) with the requested properties.

- Omitting **keys** returns all available [LsLinks](#lslink).
- Omitting **propertyNames** returns [LsLinks](#lslink) with all available properties.

#### Examples

See examples for method [GetLsNodes(TopologyRequest)](#examples), as it follows the same principle.

### `GetTelemetryData(TelemetryRequest)`

#### Definition

```protobuf
rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}
```

#### Parameters

[TelemetryRequest](#telemetryrequest)

#### Returns

[TelemetryResponse](#telemetryresponse)

#### Description

Takes a [TelemetryRequest](#telemetryrequest) with the specified **ipv4addresses** and **propertyNames** and returns an [TelemetryResponse](#telemetryresponse) containing [TelemetryData](#telemetrydata) objects (one for each **ipv4address**) and all requested properties.

- Omitting **ipv4addresses** returns an empty [TelemetryResponse](#telemetryresponse).
- Omitting **propertyNames** returns [TelemetryData](#telemetrydata) with all available properties.

#### Examples

ipv4addresses | propertyNames | [TelemetryResponse](#telemetryresponse)
--- | --- | ---
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | [TelemetryResponse](#telemetryresponse) contains [TelemetryData](#telemetrydata) for the two specified ipv4addresses with the three requested properties.
- | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | [TelemetryResponse](#telemetryresponse) contains no [TelemetryData](#telemetrydata)!
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | - | [TelemetryResponse](#telemetryresponse) contains [TelemetryData](#telemetrydata) for the two specified ipv4addresses with all available properties.
- | - | [TelemetryResponse](#telemetryresponse) contains no [TelemetryData](#telemetrydata)!

## Messages

### `TelemetryRequest`

```protobuf
message TelemetryRequest {
    repeated string ipv4addresses = 1;
    repeated string propertyNames = 2;
}
```

Find all available **propertyNames** in section [PropertyNames](#propertynames).

### `TelemetryResponse`

```protobuf
message TelemetryResponse {
    repeated TelemetryData telemetryData = 1;
}
```

For further details, see:

- [TelemetryData](#telemetrydata)

### `TelemetryData`

```protobuf
message TelemetryData {
    string ipv4address = 1;
    optional int64 dataRate = 2;
}
```

:::info keyword 'optional'
All properties that are preceded by the **optional** keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of [proto3](https://developers.google.com/protocol-buffers/docs/proto3).
The reason of why some properties were made **optional** is explained [here](#somewhere) TODO.
:::

### `TopologyRequest`

```protobuf
message TopologyRequest {
    repeated string keys = 1;
    repeated string propertyNames = 2;
}
```

Find all available **propertyNames** in section [PropertyNames](#propertynames).

### `LsNodeResponse`

```protobuf
message LsNodeResponse {
    repeated LsNode lsNodes = 1;
}
```

<!-- #### Example
```json
LsNodeResponse {
  LsNodes: [
    {
      Key: "nodeKey1"
      Name: "node1"
      Asn: 1234
      Router_ip: "1.2.3.4"
    },
    {
      Key: "nodeKey2"
      Name: "node2"
      Asn: 1234
      Router_ip: "2.3.4.5"
    }
  ]
}
``` -->

For further details, see:

- [LsNode](#lsnode)

### `LsNode`

```protobuf
message LsNode {
    string key = 1;
    optional string name = 2;
    optional int32 asn = 3;
    optional string router_ip = 4;
}
```

:::info keyword 'optional'
All properties that are preceded by the **optional** keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of [proto3](https://developers.google.com/protocol-buffers/docs/proto3).
The reason of why some properties were made **optional** is explained [here](#somewhere) TODO.
:::

### `LsLinkResponse`

```protobuf
message LsLinkResponse {
    repeated LsLink lsLinks = 1;
}
```

For further details, see:

- [LsLink](#lslink)

### `LsLink`

```protobuf
message LsLink {
    string key = 1;
    optional string router_ip = 2;
    optional string peer_ip = 3;
    optional string localLink_ip = 4;
    optional string remoteLink_ip = 5;
    optional int32 igp_metric = 6;
}
```

:::info keyword 'optional'
All properties that are preceded by the **optional** keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of [proto3](https://developers.google.com/protocol-buffers/docs/proto3).
The reason of why some properties were made **optional** is explained [here](#somewhere) TODO.
:::

## PropertyNames

When creating a [TopologyRequest](#topologyrequest) or a [TelemetryRequest](#telemetryrequest) you can specify **propertyNames** to define the properties you want to be returned for the requested objects. This is optional, since omitting **propertyNames** results in all available properties being returned.
Which **propertyNames** are available depends on the type of object (i.e. [LsNode](#lsnode), [LsLink](#lslink), [TelemetryData](#telemetrydata)).

### `LsNode` PropertyNames

propertyName | Corresponding field in [LsNode](#lsnode)
--- | ---
"Asn" | LsNode.Asn
"Name" | LsNode.Name
"RouterIp" | LsNode.Router_ip

### `LsLink` PropertyNames

propertyName | Corresponding field in [LsLink](#lslink)
--- | ---
"IgpMetric" | LsLink.Igp_metric
"LocalLinkIp" | LsLink.LocalLink_ip
"PeerIp" | LsLink.Peer_ip
"RemoteLinkIp" | LsLink.RemoteLink_ip
"RouterIp" | LsLink.Router_ip

### `TelemetryData` PropertyNames for Physical Interfaces

propertyName | Corresponding field in [TelemetryData](#telemetrydata)
--- | ---
"DataRate" | TelemetryData.DataRate
"PacketsReceived" | TelemetryData.PacketsReceived
"PacketsSent" | TelemetryData.PacketsSent

### `TelemetryData` PropertyNames for Loopback Interfaces

propertyName | Corresponding field in [TelemetryData](#telemetrydata)
--- | ---
"State" | TelemetryData.State
"LastStateTransitionTime" | TelemetryData.LastStateTransitionTime
