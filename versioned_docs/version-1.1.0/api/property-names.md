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

### `LsNode` Properties

- `"Key"`
- `"Id"`
- `"RouterHash"`
- `"DomainId"`
- `"RouterIp"`
- `"PeerHash"`
- `"PeerIp"`
- `"PeerAsn"`
- `"Timestamp"`
- `"IgpRouterId"`
- `"Asn"`
- `"Mtid"`
- `"AreaId"`
- `"Protocol"`
- `"ProtocolId"`
- `"Name"`
- `"IsPrepolicy"`
- `"IsAdjRibIn"`

### `LsLink` Properties

- `"Key"`
- `"Id"`
- `"RouterHash"`
- `"RouterIp"`
- `"DomainId"`
- `"PeerHash"`
- `"PeerIp"`
- `"PeerAsn"`
- `"Timestamp"`
- `"IgpRouterId"`
- `"Protocol"`
- `"AreaId"`
- `"Nexthop"`
- `"Mtid"`
- `"LocalLinkIp"`
- `"RemoteLinkIp"`
- `"IgpMetric"`
- `"RemoteNodeHash"`
- `"LocalNodeHash"`
- `"RemoteIgpRouterId"`

### `LsPrefix` Properties

- `"Key"`
- `"Id"`
- `"RouterHash"`
- `"RouterIp"`
- `"DomainId"`
- `"PeerHash"`
- `"PeerIp"`
- `"PeerAsn"`
- `"Timestamp"`
- `"IgpRouterId"`
- `"Protocol"`
- `"AreaId"`
- `"Nexthop"`
- `"LocalNodeHash"`
- `"Mtid"`
- `"Prefix"`
- `"PrefixLen"`
- `"PrefixMetric"`
- `"IsPrepolicy"`
- `"IsAdjRibIn"`

### `LsSrv6Sid` Properties

- `"Key"`
- `"Id"`
- `"RouterHash"`
- `"RouterIp"`
- `"DomainId"`
- `"PeerHash"`
- `"PeerIp"`
- `"PeerAsn"`
- `"Timestamp"`
- `"IgpRouterId"`
- `"LocalNodeAsn"`
- `"Protocol"`
- `"Nexthop"`
- `"LocalNodeHash"`
- `"Mtid"`
- `"IgpFlags"`
- `"IsPrepolicy"`
- `"IsAdjRibIn"`
- `"Srv6Sid"`

### `LsNodeEdge` Properties

- `"Key"`
- `"Id"`
- `"From"`
- `"To"`
- `"Link"`

### Properties for Physical Interfaces

- `"DataRate"`
- `"PacketsSent"`
- `"PacketsReceived"`

### Properties for Loopback Interfaces

- `"State"`
- `"LastStateTransitionTime"`
