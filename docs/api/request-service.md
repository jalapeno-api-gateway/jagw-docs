---
sidebar_position: 1
title: "Request Service"
---

import TOCInline from "@theme/TOCInline"

<TOCInline toc={toc[toc.length - 1].children}/>

## Protobuf Definition

```protobuf
service RequestService {
    rpc GetLSNodes(TopologyRequest) returns (LSNodeResponse) {}
    rpc GetLSLinks(TopologyRequest) returns (LSLinkResponse) {}
    rpc GetLSPrefixes(TopologyRequest) returns (LSPrefixResponse) {}
    rpc GetLSSRv6SIDs(TopologyRequest) returns (LSSRv6SIDResponse) {}
    rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}
}
```

## Methods

### `GetLSNodes()`

```protobuf
rpc GetLSNodes(TopologyRequest) returns (LSNodeResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LSNodeResponse](messages#lsnoderesponse)

#### Description

Takes a [TopologyRequest](messages#topologyrequest) with the specified **keys** and **propertyNames** and returns an [LSNodeResponse](messages#lsnoderesponse) containing all requested [LSNodes](messages#lsnode) with the requested properties.

- Omitting **keys** returns all available [LSNodes](messages#lsnode).
- Omitting **propertyNames** returns [LSNodes](messages#lsnode) with all available properties.

#### Examples

keys | propertyNames | [LSNodeResponse](messages#lsnoderesponse)
--- | --- | ---
[<br />"nodeKey1",<br />"nodeKey2"<br />] | [<br />"Name",<br />"ASN",<br />"RouterIP"<br />] | [LSNodeResponse](messages#lsnoderesponse) contains [LSNodes](messages#lsnode) for the two specified keys with the three requested properties.
- | [<br />"Name",<br />"ASN",<br />"RouterIP"<br />] | [LSNodeResponse](messages#lsnoderesponse) contains all available [LSNodes](messages#lsnode) with the three requested properties.
[<br />"nodeKey1",<br />"nodeKey2"<br />] | - | [LSNodeResponse](messages#lsnoderesponse) contains [LSNodes](messages#lsnode) for the two specified keys with all available properties.
- | - | [LSNodeResponse](messages#lsnoderesponse) contains all available [LSNodes](messages#lsnode) with all available properties.

### `GetLSLinks()`

```protobuf
rpc GetLSLinks(TopologyRequest) returns (LSLinkResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LSLinkResponse](messages#lslinkresponse)

#### Description

See method [GetLSNodes()](#getlsnodes). It follows the same principle regarding **keys** and **propertyNames**.

### `GetLSPrefixes()`

```protobuf
rpc GetLSPrefixes(TopologyRequest) returns (LSPrefixResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LSPrefixResponse](messages#lsprefixresponse)

#### Description

See method [GetLSNodes()](#getlsnodes). It follows the same principle regarding **keys** and **propertyNames**.

### `GetLSSRv6SIDs()`

```protobuf
rpc GetLSSRv6SIDs(TopologyRequest) returns (LSSRv6SIDResponse) {}
```

*See also*: [TopologyRequest](messages#topologyrequest), [LSSRv6SIDResponse](messages#lssrv6sidresponse)

#### Description

See method [GetLSNodes()](#getlsnodes). It follows the same principle regarding **keys** and **propertyNames**.

### `GetTelemetryData()`

```protobuf
rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}
```

*See also*: [TelemetryRequest](messages#telemetryrequest), [TelemetryResponse](messages#telemetryresponse)

#### Description

Takes a [TelemetryRequest](messages#telemetryrequest) with the specified **ipv4addresses** and **propertyNames** and returns an [TelemetryResponse](messages#telemetryresponse) containing [TelemetryData](messages#telemetrydata) objects (one for each **ipv4address**) and all requested properties.

- Omitting **ipv4addresses** returns an empty [TelemetryResponse](messages#telemetryresponse).
- Omitting **propertyNames** returns [TelemetryData](messages#telemetrydata) with all available properties.

#### Examples

ipv4addresses | propertyNames | [TelemetryResponse](messages#telemetryresponse)
--- | --- | ---
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | [TelemetryResponse](messages#telemetryresponse) contains [TelemetryData](messages#telemetrydata) for the two specified ipv4addresses with the three requested properties.
- | [<br />"DataRate",<br />"PacketsSent",<br />"PacketsReceived"<br />] | [TelemetryResponse](messages#telemetryresponse) contains no [TelemetryData](messages#telemetrydata)!
[<br />"1.2.3.4",<br />"2.3.4.5"<br />] | - | [TelemetryResponse](messages#telemetryresponse) contains [TelemetryData](messages#telemetrydata) for the two specified ipv4addresses with all available properties.
- | - | [TelemetryResponse](messages#telemetryresponse) contains no [TelemetryData](messages#telemetrydata)!
