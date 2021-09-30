---
sidebar_position: 2
title: "Subscription Service"
---

import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## Protobuf Definition

```protobuf
service SubscriptionService {
    rpc SubscribeToLSNodes(TopologySubscription) returns (stream LSNodeEvent) {}
    rpc SubscribeToLSLinks(TopologySubscription) returns (stream LSLinkEvent) {}
    rpc SubscribeToLSPrefixes(TopologySubscription) returns (stream LSPrefixEvent) {}
    rpc SubscribeToLSSRv6SIDs(TopologySubscription) returns (stream LSSRv6SIDEvent) {}
    rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}
}
```

## Methods

### `SubscribeToLSNodes()`

```protobuf
rpc SubscribeToLSNodes(TopologySubscription) returns (stream LSNodeEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LSNodeEvent](messages#lsnodeevent)

#### Description

Takes a [TopologySubscription](messages#topologysubscription) with the specified **keys** and **propertyNames** and returns a stream of [LSNodeEvents](messages#lsnodeevent). An LSNodeEvent contains an update to a single [LSNode](messages#lsnode). Only [LSNodes](messages#lsnode) matching one of the specified **keys** are returned and only properties specified in **propertyNames** are set.

- Omitting **keys** streams [LSNodeEvents](messages#lsnodeevent) for all available [LSNodes](messages#lsnode).
- Omitting **propertyNames** streams [LSNodeEvents](messages#lsnodeevent) for [LSNodes](messages#lsnode) with all available properties.

#### Examples

keys | propertyNames | [LSNodeEvents](messages#lsnodeevent)
--- | --- | ---
[<br />"nodeKey1",<br />"nodeKey2"<br />] | [<br />"Name",<br />"ASN",<br />"RouterIP"<br />] | Streams [LSNodeEvents](messages#lsnodeevent) for [LSNodes](messages#lsnode) for the two specified keys with the three requested properties.
- | [<br />"Name",<br />"ASN",<br />"RouterIP"<br />] | Streams [LSNodeEvents](messages#lsnodeevent) for all available [LSNodes](messages#lsnode) with the three requested properties.
[<br />"nodeKey1",<br />"nodeKey2"<br />] | - | Streams [LSNodeEvents](messages#lsnodeevent) for [LSNodes](messages#lsnode) for the two specified keys with all available properties.
- | - | Streams [LSNodeEvents](messages#lsnodeevent) for all available [LSNodes](messages#lsnode) with all available properties.

### `SubscribeToLSLinks()`

```protobuf
rpc SubscribeToLSLinks(TopologySubscription) returns (stream LSLinkEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LSLinkEvent](messages#lslinkevent)

#### Description

See method [SubscribeToLSNodes()](#subscribetolsnodes). It follows the same principle regarding **keys** and **propertyNames**.

### `SubscribeToLSPrefixes()`

```protobuf
rpc SubscribeToLSPrefixes(TopologySubscription) returns (stream LSPrefixEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LSPrefixEvent](messages#lsprefixevent)

#### Description

See method [SubscribeToLSNodes()](#subscribetolsnodes). It follows the same principle regarding **keys** and **propertyNames**.

### `SubscribeToLSSRv6SIDs()`

```protobuf
rpc SubscribeToLSSRv6SIDs(TopologySubscription) returns (stream LSSRv6SIDEvent) {}
```

*See also*: [TopologySubscription](messages#topologysubscription), [LSSRv6SIDEvent](messages#lssrv6sidevent)

#### Description

See method [SubscribeToLSNodes()](#subscribetolsnodes). It follows the same principle regarding **keys** and **propertyNames**.

### `SubscribeToTelemetryData()`

```protobuf
rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}
```

*See also*: [TelemetrySubscription](messages#telemetrysubscription), [TelemetryResponse](messages#telemetryresponse)

#### Description

Takes a [TelemetrySubscription](messages#telemetrysubscription) with the specified **ipv4addresses** and **propertyNames** and returns a stream of [TelemetryEvents](messages#telemetryevent). A TelemetryEvent contains an update to a single event tied to an ipv4address.

- Omitting **ipv4addresses** streams [TelemetryEvents](messages#telemetryevent) for all available ipv4addresses.
- Omitting **propertyNames** streams [TelemetryEvents](messages#telemetryevent) with all available properties.

#### Examples

ipv4addresses | propertyNames | [TelemetryEvent](messages#telemetryevent)
--- | --- | ---
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | Streams [TelemetryEvents](messages#telemetryevent) for the two specified ipv4addresses with the three requested properties.
- | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | Streams [TelemetryEvents](messages#telemetryevent) for all available ipv4addresses with the three specified properties.
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | - | Streams [TelemetryEvents](messages#telemetryevent) for the two specified ipv4addresses with all available properties.
- | - | Streams [TelemetryEvents](messages#telemetryevent) for all available ipv4addresses with all available properties.
