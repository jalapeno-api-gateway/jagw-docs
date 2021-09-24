---
sidebar_position: 1
---

# Introduction

## Deployment Diagram
<div align="center">
<img src="https://gitlab.ost.ch/ins/jalapeno-api/request-service/-/raw/master/assets/api-gateway-deployment.png" alt="deployment-diagram" width="700px" />
</div>

## Caching
### Behavior of Jalapeño Components
1. Changes to the network topology are published in various Kafka topics, i.e. in the topic `gobmp.parsed.ls_node`
2. The data processor `Topology` processes the events and updates the GraphDB.
3. When it has successfully updated the database, it writes a message to a seperate Kafka topic (ending in `_events`), i.e. `gobmp.parsed.ls_node_events`. This message contains the key to the document in the GraphDB that has been updated (or deleted).

### Caching System Startup Behavior
This is the behavior of the caching system when the API Gateway is started for the first time:
1. The Cache Service subscribes to all Kafka topics ending in `_events` (they all contain updates on topology data), i.e. `gobmp.parsed.ls_node_events`. It does **not yet** start processing these events.
2. It then fetches the current state of all existing documents from the GraphDB and stores them in the cache.
3. It now starts processing the messages from the Kafka topics.
   - If the message describes an **update**, the Cache Service refetches the document from the GraphDB and overwrites the entry in the cache.
   - If the message describes a **deletion**, the Cache Service deletes the entry from the cache.

The Cache is now always an exact duplicate of the GraphDB. Even though it is not the most space efficient solution to cache all topology data (this can be improved upon in the future), it has two advantages.
- It reduces the load on the GraphDB.
- It reduces response times to API requests (reading from the cache is faster than reading from the database).

Telemetry data is not cached for two reasons:
- Telemetry data updates too frequently to justify caching.
- The amount of telemetry data makes caching it unfeasible.

<div align="center">
<img src="https://gitlab.ost.ch/ins/jalapeno-api/request-service/-/raw/master/assets/caching-system.png" alt="caching-system" width="400px" />
</div>

## Handling Requests
- To request data from the API Gateway, an SR-App first initializes a gRPC connection with the Request Service.
- The SR-App calls gRPC methods to request either topology or telemetry data.
- The Request Service either queries the cache (for topology data) or the TSDB (for telemetry data) and returns the result to the SR-App.

<div align="center">
<img src="https://gitlab.ost.ch/ins/jalapeno-api/request-service/-/raw/master/assets/request-handling.png" alt="request-handling" width="400px" />
</div>

## Handling Subscriptions
- The Push Service allows SR-Apps to subscribe to both topology and telemetry data.
- The Push Service constantly watches Kafka topics for topology data (topics ending in `_events`). Upon receiving a message, it fetches the updated document from the GraphDB (unless it has been deleted) and informs all subscribers.
- The Push Service also constantly watches the Kafka topic for telemetry data (topic `jalapeno.telemetry`). Upon receiving a message, it extracts the data from the telemetry string and informs all subscribers.

<div align="center">
<img src="https://gitlab.ost.ch/ins/jalapeno-api/request-service/-/raw/master/assets/subscription-handling.png" alt="subscription-handling" width="350px" />
</div>