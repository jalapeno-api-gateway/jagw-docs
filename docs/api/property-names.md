---
sidebar_position: 4
title: "PropertyNames"
---

import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## About PropertyNames

When making a request or a subscription you can specify **propertyNames** (i.e. in [TopologyRequest](request-service#topologyrequest) or [TelemetrySubscription](subscription-service#telemetrysubscription)). This allows you to define the properties you want to be returned for the requested objects. This is optional, since omitting **propertyNames** results in all available properties being returned.

Different objects provide different **propertyNames** (i.e. [LSNode](messages#lsnode), [LSLink](messages#lslink), [TelemetryData](messages#telemetrydata)).

:::caution invalid propertyNames
The Jalapeño API Gateway ignores invalid propertyNames. Make sure therefore, that the strings you provide match the propertyNames below exactly.
:::

## All PropertyNames

### `LSNode` Properties

- `"Key"`
- `"ID"`
- `"RouterHash"`
- `"DomainID"`
- `"RouterIP"`
- `"PeerHash"`
- `"PeerIP"`
- `"PeerASN"`
- `"Timestamp"`
- `"IGPRouterID"`
- `"ASN"`
- `"MTID"`
- `"AreaID"`
- `"Protocol"`
- `"ProtocolID"`
- `"Name"`
- `"IsPrepolicy"`
- `"IsAdjRIBIn"`

### `LSLink` Properties

- `"Key"`
- `"ID"`
- `"RouterHash"`
- `"RouterIP"`
- `"DomainID"`
- `"PeerHash"`
- `"PeerIP"`
- `"PeerASN"`
- `"Timestamp"`
- `"IGPRouterID"`
- `"Protocol"`
- `"AreaID"`
- `"Nexthop"`
- `"MTID"`
- `"LocalLinkIP"`
- `"RemoteLinkIP"`
- `"IGPMetric"`
- `"RemoteNodeHash"`
- `"LocalNodeHash"`
- `"RemoteIGPRouterID"`

### `LSPrefix` Properties

- `"Key"`
- `"ID"`
- `"RouterHash"`
- `"RouterIP"`
- `"DomainID"`
- `"PeerHash"`
- `"PeerIP"`
- `"PeerASN"`
- `"Timestamp"`
- `"IGPRouterID"`
- `"Protocol"`
- `"AreaID"`
- `"Nexthop"`
- `"LocalNodeHash"`
- `"MTID"`
- `"Prefix"`
- `"PrefixLen"`
- `"PrefixMetric"`
- `"IsPrepolicy"`
- `"IsAdjRIBIn"`

### `LSSRv6SID` Properties

- `"Key"`
- `"ID"`
- `"RouterHash"`
- `"RouterIP"`
- `"DomainID"`
- `"PeerHash"`
- `"PeerIP"`
- `"PeerASN"`
- `"Timestamp"`
- `"IGPRouterID"`
- `"LocalNodeASN"`
- `"Protocol"`
- `"Nexthop"`
- `"LocalNodeHash"`
- `"MTID"`
- `"IGPFlags"`
- `"IsPrepolicy"`
- `"IsAdjRIBIn"`
- `"SRv6SID"`

### Properties for Physical Interfaces

- `"DataRate"`
- `"PacketsSent"`
- `"PacketsReceived"`

### Properties for Loopback Interfaces

- `"State"`
- `"LastStateTransitionTime"`
