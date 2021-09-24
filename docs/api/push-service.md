---
sidebar_position: 2
title: "Push Service"
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
service PushService {
    rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}
    rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}
    rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}
}
```

## Methods

### `SubscribeToLsNodes(TopologySubscription)`

#### Definition

```protobuf
rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}
```

#### Parameters

[TopologySubscription](#topologysubscription)

#### Returns

[LsNodeEvent](#lsnodeevent)

#### Description

Takes a [TopologySubscription](#topologysubscription) with the specified **keys** and **propertyNames** and returns a stream of [LsNodeEvents](#lsnodeevent). An LsNodeEvent contains an update to a single [LsNode](#lsnode). Only [LsNodes](#lsnode) matching one of the specified **keys** are returned and only properties specified in **propertyNames** are set.

- Omitting **keys** streams [LsNodeEvents](#lsnodeevent) for all available [LsNodes](#lsnode).
- Omitting **propertyNames** streams [LsNodeEvents](#lsnodeevent) for [LsNodes](#lsnode) with all available properties.

#### Examples

keys | propertyNames | [LsNodeEvents](#lsnodeevent)
--- | --- | ---
[<br />"nodeKey1",<br />"nodeKey2"<br />] | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | Streams [LsNodeEvents](#lsnodeevent) for [LsNodes](#lsnode) for the two specified keys with the three requested properties.
- | [<br />"Name",<br />"Asn",<br />"RouterIp"<br />] | Streams [LsNodeEvents](#lsnodeevent) for all available [LsNodes](#lsnode) with the three requested properties.
[<br />"nodeKey1",<br />"nodeKey2"<br />] | - | Streams [LsNodeEvents](#lsnodeevent) for [LsNodes](#lsnode) for the two specified keys with all available properties.
- | - | Streams [LsNodeEvents](#lsnodeevent) for all available [LsNodes](#lsnode) with all available properties.

### `SubscribeToLsLinks(TopologySubscription)`

#### Definition

```protobuf
rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}
```

#### Parameters

[TopologySubscription](#topologysubscription)

#### Returns

[LsLinkEvent](#lslinkevent)

#### Description

Takes a [TopologySubscription](#topologysubscription) with the specified **keys** and **propertyNames** and returns a stream of [LsLinkEvents](#lslinkevent). An LsLinkEvent contains an update to a single [LsLink](#lslink). Only [LsLinks](#lslink) matching one of the specified **keys** are returned and only properties specified in **propertyNames** are set.

- Omitting **keys** streams [LsLinkEvents](#lslinkevent) for all available [LsLink](#lslink).
- Omitting **propertyNames** streams [LsLinkEvents](#lslinkevent) for [LsLink](#lslink) with all available properties.

#### Examples

See examples for method [SubscribeToLsNodes(TopologySubscription)](#examples), as it follows the same principle.

### `SubscribeToTelemetryData(TelemetrySubscription)`

#### Definition

```protobuf
rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}
```

#### Parameters

[TelemetrySubscription](#telemetrysubscription)

#### Returns

[TelemetryResponse](#telemetryresponse)

#### Description

Takes a [TelemetrySubscription](#telemetrysubscription) with the specified **ipv4addresses** and **propertyNames** and returns a stream of [TelemetryEvents](#telemetryevent). A TelemetryEvent contains an update to a single event tied to an ipv4address.

- Omitting **ipv4addresses** streams [TelemetryEvents](#telemetryevent) for all available ipv4addresses.
- Omitting **propertyNames** streams [TelemetryEvents](#telemetryevent) with all available properties.

#### Examples

ipv4addresses | propertyNames | [TelemetryEvent](#telemetryevent)
--- | --- | ---
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | Streams [TelemetryEvents](#telemetryevent) for the two specified ipv4addresses with the three requested properties.
- | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | Streams [TelemetryEvents](#telemetryevent) for all available ipv4addresses with the three specified properties.
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | - | Streams [TelemetryEvents](#telemetryevent) for the two specified ipv4addresses with all available properties.
- | - | Streams [TelemetryEvents](#telemetryevent) for all available ipv4addresses with all available properties.

## Messages

### `TelemetrySubscription`

```protobuf
message TelemetrySubscription {
    repeated string ipv4addresses = 1;
    repeated string propertyNames = 2;
}
```

Find all available **propertyNames** in section [PropertyNames](#propertynames).

### `TelemetryEvent`

```protobuf
message TelemetryEvent {
    string ipv4address = 1;
    optional int64 dataRate = 2;
    optional int64 packetsSent = 3;
    optional int64 packetsReceived = 4;
    optional string state = 5;
    optional int64 lastStateTransitionTime = 6;
}
```

:::info keyword 'optional'
All properties that are preceded by the **optional** keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of [proto3](https://developers.google.com/protocol-buffers/docs/proto3).
The reason of why some properties were made **optional** is explained [here](#somewhere) TODO.
:::

### `TopologySubscription`

```protobuf
message TopologySubscription {
    repeated string keys = 1;
    repeated string propertyNames = 2;
}
```

Find all available **propertyNames** in section [PropertyNames](#propertynames).

### `LsNodeEvent`

```protobuf
message LsNodeEvent {
    string action = 1;
    string key = 2;
    LsNode lsNode = 3;
}
```

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

### `LsLinkEvent`

```protobuf
message LsLinkEvent {
    string action = 1;
    string key = 2;
    LsLink lsLink = 3;
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

When creating a [TopologySubscription](#topologysubscription) or a [TelemetrySubscription](#telemetrysubscription) you can specify **propertyNames** to define the properties you want to be returned for the requested objects. This is optional, since omitting **propertyNames** results in all available properties being returned.
Which **propertyNames** are available depends on the type of object (i.e. [LsNode](#lsnode), [LsLink](#lslink), [TelemetryEvent](#telemetryevent)).

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

### `TelemetryEvent` PropertyNames for Physical Interfaces

propertyName | Corresponding field in [TelemetryEvent](#telemetryevent)
--- | ---
"DataRate" | TelemetryEvent.DataRate
"PacketsReceived" | TelemetryEvent.PacketsReceived
"PacketsSent" | TelemetryEvent.PacketsSent

### `TelemetryEvent` PropertyNames for Loopback Interfaces

propertyName | Corresponding field in [TelemetryEvent](#telemetryevent)
--- | ---
"State" | TelemetryEvent.State
"LastStateTransitionTime" | TelemetryEvent.LastStateTransitionTime
