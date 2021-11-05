"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8219:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(4996),o=["components"],s={sidebar_position:1,title:"Concept"},p=void 0,c={unversionedId:"design/concept",id:"version-1.0.0/design/concept",isDocsHomePage:!1,title:"Concept",description:"This section describes the basic concept and core functionality of the Jalape\xf1o API Gateway.",source:"@site/versioned_docs/version-1.0.0/design/concept.md",sourceDirName:"design",slug:"/design/concept",permalink:"/jagw-docs/docs/design/concept",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.0.0/design/concept.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Concept"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Introduction",permalink:"/jagw-docs/docs/introduction"},next:{title:"Design Choices",permalink:"/jagw-docs/docs/design/design-choices"}},u=[{value:"Deployment Diagram",id:"deployment-diagram",children:[]},{value:"Behavior of Jalape\xf1o Components",id:"behavior-of-jalape\xf1o-components",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Requests",id:"requests",children:[]},{value:"Subscriptions",id:"subscriptions",children:[]}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the basic concept and core functionality of the Jalape\xf1o API Gateway."),(0,i.kt)("h2",{id:"deployment-diagram"},"Deployment Diagram"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/img/api-gateway-deployment.png"),alt:"deployment-diagram",width:"700px"})),(0,i.kt)("h2",{id:"behavior-of-jalape\xf1o-components"},"Behavior of Jalape\xf1o Components"),(0,i.kt)("p",null,"To understand how the Jalape\xf1o API Gateway works, it helps to understand how Jalape\xf1o itself works."),(0,i.kt)("p",null,"Here the basic principle of Jalape\xf1o is described:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Changes to the network are published in various Kafka topics, i.e. in the topic ",(0,i.kt)("inlineCode",{parentName:"li"},"gobmp.parsed.ls_node"),", by ",(0,i.kt)("inlineCode",{parentName:"li"},"GoBMP")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Telegraf"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Kafka Topics for unprocessed events"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"These are all Kafka topics to which ",(0,i.kt)("code",null,"GoBMP")," writes topology updates:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"gobmp.parsed.evpn"),(0,i.kt)("li",null,"gobmp.parsed.flowspec"),(0,i.kt)("li",null,"gobmp.parsed.flowspec_v4"),(0,i.kt)("li",null,"gobmp.parsed.flowspec_v6"),(0,i.kt)("li",null,"gobmp.parsed.l3vpn"),(0,i.kt)("li",null,"gobmp.parsed.l3vpn_v4"),(0,i.kt)("li",null,"gobmp.parsed.l3vpn_v6"),(0,i.kt)("li",null,"gobmp.parsed.ls_link"),(0,i.kt)("li",null,"gobmp.parsed.ls_node"),(0,i.kt)("li",null,"gobmp.parsed.ls_prefix"),(0,i.kt)("li",null,"gobmp.parsed.ls_srv6_sid"),(0,i.kt)("li",null,"gobmp.parsed.peer"),(0,i.kt)("li",null,"gobmp.parsed.sr_policy"),(0,i.kt)("li",null,"gobmp.parsed.sr_policy_v4"),(0,i.kt)("li",null,"gobmp.parsed.sr_policy_v6"),(0,i.kt)("li",null,"gobmp.parsed.unicast_prefix"),(0,i.kt)("li",null,"gobmp.parsed.unicast_prefix_v4"),(0,i.kt)("li",null,"gobmp.parsed.unicast_prefix_v6"))),(0,i.kt)("li",null,"This is the Kafka topic to which ",(0,i.kt)("code",null,"Telegraf")," (the one connected to the network) writes telemetry updates:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"jalapeno.telemetry"))))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The data processor ",(0,i.kt)("inlineCode",{parentName:"li"},"Topology")," processes the events and updates the GraphDB."),(0,i.kt)("li",{parentName:"ol"},"When it has successfully updated the database, it writes a message to a seperate Kafka topic (ending in ",(0,i.kt)("inlineCode",{parentName:"li"},"_events"),"), i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"gobmp.parsed.ls_node_events"),". This message contains the key to the document in the GraphDB that has been updated (or deleted).")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Kafka Topics for processed events"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"These are all Kafka topics to which the processor ",(0,i.kt)("code",null,"Topology")," writes updates, once it has successfully updated the ",(0,i.kt)("code",null,"GraphDB"),":",(0,i.kt)("ul",null,(0,i.kt)("li",null,"gobmp.parsed.evpn_events"),(0,i.kt)("li",null,"gobmp.parsed.flowspec_events"),(0,i.kt)("li",null,"gobmp.parsed.flowspec_v4_events"),(0,i.kt)("li",null,"gobmp.parsed.flowspec_v6_events"),(0,i.kt)("li",null,"gobmp.parsed.l3vpn_events"),(0,i.kt)("li",null,"gobmp.parsed.l3vpn_v4_events"),(0,i.kt)("li",null,"gobmp.parsed.l3vpn_v6_events"),(0,i.kt)("li",null,"gobmp.parsed.ls_link_events"),(0,i.kt)("li",null,"gobmp.parsed.ls_node_events"),(0,i.kt)("li",null,"gobmp.parsed.ls_prefix_events"),(0,i.kt)("li",null,"gobmp.parsed.ls_srv6_sid_events"),(0,i.kt)("li",null,"gobmp.parsed.peer_events"),(0,i.kt)("li",null,"gobmp.parsed.sr_policy_events"),(0,i.kt)("li",null,"gobmp.parsed.sr_policy_v4_events"),(0,i.kt)("li",null,"gobmp.parsed.sr_policy_v6_events"),(0,i.kt)("li",null,"gobmp.parsed.unicast_prefix_events"),(0,i.kt)("li",null,"gobmp.parsed.unicast_prefix_v4_events"),(0,i.kt)("li",null,"gobmp.parsed.unicast_prefix_v6_events"),(0,i.kt)("li",null,"jalapeno.ls_node_edge_events"))),(0,i.kt)("li",null,"The processor ",(0,i.kt)("code",null,"Telegraf")," (the one connected to the ",(0,i.kt)("code",null,"TSDB"),") does not currently write anything back to Kafka."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Event Message"),"An event message produced by the processor ",(0,i.kt)("code",null,"Topology")," and published in one of the ",(0,i.kt)("code",null,"_events")," topics looks like this:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  type EventMessage struct {\n     TopicType int //represents an enum\n     Key       string\n     ID        string\n     Action    string\n  }\n"))),(0,i.kt)("h2",{id:"caching"},"Caching"),(0,i.kt)("p",null,"This is the behavior of the caching system when the API Gateway is started for the first time:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Cache Service subscribes to all Kafka topics ending in ",(0,i.kt)("inlineCode",{parentName:"li"},"_events")," (they all contain updates on topology data), i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"gobmp.parsed.ls_node_events"),". It does ",(0,i.kt)("strong",{parentName:"li"},"not yet")," start processing these events."),(0,i.kt)("li",{parentName:"ol"},"It then fetches the current state of all existing documents from the GraphDB and stores them in the cache."),(0,i.kt)("li",{parentName:"ol"},"It now starts processing the messages from the Kafka topics.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the message describes an ",(0,i.kt)("strong",{parentName:"li"},"update"),", the Cache Service refetches the document from the GraphDB and overwrites the entry in the cache."),(0,i.kt)("li",{parentName:"ul"},"If the message describes a ",(0,i.kt)("strong",{parentName:"li"},"deletion"),", the Cache Service deletes the entry from the cache.")))),(0,i.kt)("p",null,"The Cache is now always an exact duplicate of the GraphDB. Even though it is not the most space efficient solution to cache all topology data (this can be improved upon in the future), it has two advantages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It reduces the load on the GraphDB."),(0,i.kt)("li",{parentName:"ul"},"It reduces response times to API requests (reading from the cache is faster than reading from the database).")),(0,i.kt)("p",null,"Telemetry data is not cached for two reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Telemetry data updates too frequently to justify caching."),(0,i.kt)("li",{parentName:"ul"},"The amount of telemetry data makes caching it unfeasible.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/img/caching-system.png"),alt:"caching-system",width:"400px"})),(0,i.kt)("h2",{id:"requests"},"Requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To request data from the API Gateway, an SR-App first initializes a gRPC connection with the Request Service."),(0,i.kt)("li",{parentName:"ul"},"The SR-App calls gRPC methods to request either topology or telemetry data."),(0,i.kt)("li",{parentName:"ul"},"The Request Service either queries the cache (for topology data) or the TSDB (for telemetry data) and returns the result to the SR-App.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/img/request-handling.png"),alt:"request-handling",width:"400px"})),(0,i.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Subscription Service allows SR-Apps to subscribe to both topology and telemetry data."),(0,i.kt)("li",{parentName:"ul"},"The Subscription Service constantly watches Kafka topics for topology data (topics ending in ",(0,i.kt)("inlineCode",{parentName:"li"},"_events"),"). Upon receiving a message, it fetches the updated document from the GraphDB (unless it has been deleted) and informs all subscribers."),(0,i.kt)("li",{parentName:"ul"},"The Subscription Service also constantly watches the Kafka topic for telemetry data (topic ",(0,i.kt)("inlineCode",{parentName:"li"},"jalapeno.telemetry"),"). Upon receiving a message, it extracts the data from the telemetry string and informs all subscribers.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/img/subscription-handling.png"),alt:"subscription-handling",width:"350px"})))}h.isMDXComponent=!0}}]);