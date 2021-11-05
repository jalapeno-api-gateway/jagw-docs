"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[729],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return t?i.createElement(m,a(a({ref:n},d),{},{components:t})):i.createElement(m,a({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3873:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(7294),o=t(6010),r="tableOfContentsInline_3fWc";function a(e){var n=e.toc,t=e.isChild;return n.length?i.createElement("ul",{className:t?"":"table-of-contents"},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(a,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var n=e.toc;return i.createElement("div",{className:(0,o.Z)(r)},i.createElement(a,{toc:n}))}},4558:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return g}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),a=t(3873),s=["components"],l={sidebar_position:3,title:"Messages"},p=void 0,d={unversionedId:"api/messages",id:"version-1.0.0/api/messages",isDocsHomePage:!1,title:"Messages",description:"Request Service",source:"@site/versioned_docs/version-1.0.0/api/messages.md",sourceDirName:"api",slug:"/api/messages",permalink:"/jagw-docs/docs/api/messages",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.0.0/api/messages.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Messages"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Subscription Service",permalink:"/jagw-docs/docs/api/subscription-service"},next:{title:"PropertyNames",permalink:"/jagw-docs/docs/api/property-names"}},c=[{value:"Request Service",id:"request-service",children:[]},{value:"Subscription Service",id:"subscription-service",children:[]},{value:"Common",id:"common",children:[]},{value:"Base",id:"base",children:[]},{value:"About Messages",id:"about-messages",children:[]},{value:"Request Messages",id:"request-messages",children:[{value:"<code>TopologyRequest</code>",id:"topologyrequest",children:[]},{value:"<code>TelemetryRequest</code>",id:"telemetryrequest",children:[]},{value:"<code>LsNodeResponse</code>",id:"lsnoderesponse",children:[]},{value:"<code>LsLinkResponse</code>",id:"lslinkresponse",children:[]},{value:"<code>LsPrefixResponse</code>",id:"lsprefixresponse",children:[]},{value:"<code>LsSrv6SidResponse</code>",id:"lssrv6sidresponse",children:[]},{value:"<code>LsNodeEdgeResponse</code>",id:"lsnodeedgeresponse",children:[]},{value:"<code>TelemetryResponse</code>",id:"telemetryresponse",children:[]},{value:"<code>TelemetryData</code>",id:"telemetrydata",children:[]}]},{value:"Subscription Messages",id:"subscription-messages",children:[{value:"<code>TopologySubscription</code>",id:"topologysubscription",children:[]},{value:"<code>TelemetrySubscription</code>",id:"telemetrysubscription",children:[]},{value:"<code>LsNodeEvent</code>",id:"lsnodeevent",children:[]},{value:"<code>LsLinkEvent</code>",id:"lslinkevent",children:[]},{value:"<code>LsPrefixEvent</code>",id:"lsprefixevent",children:[]},{value:"<code>LsSrv6SidEvent</code>",id:"lssrv6sidevent",children:[]},{value:"<code>LsNodeEdgeEvent</code>",id:"lsnodeedgeevent",children:[]},{value:"<code>TelemetryEvent</code>",id:"telemetryevent",children:[]}]},{value:"Common Messages",id:"common-messages",children:[{value:"<code>LsNode</code>",id:"lsnode",children:[]},{value:"<code>LsLink</code>",id:"lslink",children:[]},{value:"<code>LsPrefix</code>",id:"lsprefix",children:[]},{value:"<code>LsSrv6Sid</code>",id:"lssrv6sid",children:[]},{value:"<code>LsNodeEdge</code>",id:"lsnodeedge",children:[]}]},{value:"Base Messages",id:"base-messages",children:[{value:"<code>MultiTopologyIdentifier</code>",id:"multitopologyidentifier",children:[]},{value:"<code>InterfaceIdentifier</code>",id:"interfaceidentifier",children:[]}]}],u={toc:c};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"request-service"},"Request Service"),(0,r.kt)(a.Z,{toc:c[c.length-4].children,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"subscription-service"},"Subscription Service"),(0,r.kt)(a.Z,{toc:c[c.length-3].children,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"common"},"Common"),(0,r.kt)(a.Z,{toc:c[c.length-2].children,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"base"},"Base"),(0,r.kt)(a.Z,{toc:c[c.length-1].children,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"about-messages"},"About Messages"),(0,r.kt)("p",null,"This sections lists all ",(0,r.kt)("inlineCode",{parentName:"p"},"protobuf")," messages defined by the services of the Jalape\xf1o API Gateway."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"'required', 'optional' & 'repeated'")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All properties that are preceded by either the ",(0,r.kt)("strong",{parentName:"p"},"optional")," or ",(0,r.kt)("strong",{parentName:"p"},"required")," keyword do not contain the actual value, but rather pointers to those values. This is due to the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto"},"proto2"),"."),(0,r.kt)("p",{parentName:"div"},"The reason for this design choice is explained in the section ",(0,r.kt)("a",{parentName:"p",href:"../design/design-choices#why-use-proto2-instead-of-proto3"},"Why use proto2 instead of proto3?"),"."))),(0,r.kt)("h2",{id:"request-messages"},"Request Messages"),(0,r.kt)("h3",{id:"topologyrequest"},(0,r.kt)("inlineCode",{parentName:"h3"},"TopologyRequest")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TopologyRequest {\n    repeated string keys = 1;\n    repeated string property_names = 2;\n}\n")),(0,r.kt)("h3",{id:"telemetryrequest"},(0,r.kt)("inlineCode",{parentName:"h3"},"TelemetryRequest")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetryRequest {\n    repeated InterfaceIdentifier interface_ids = 1;\n    repeated string property_names = 2;\n}\n")),(0,r.kt)("h3",{id:"lsnoderesponse"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsNodeResponse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeResponse {\n    repeated LsNode ls_nodes = 1;\n}\n")),(0,r.kt)("h3",{id:"lslinkresponse"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsLinkResponse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsLinkResponse {\n    repeated LsLink ls_links = 1;\n}\n")),(0,r.kt)("h3",{id:"lsprefixresponse"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsPrefixResponse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsPrefixResponse {\n    repeated LsPrefix ls_prefixes = 1;\n}\n")),(0,r.kt)("h3",{id:"lssrv6sidresponse"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsSrv6SidResponse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsSrv6SidResponse {\n    repeated LsSrv6Sid ls_srv6_sids = 1;\n}\n")),(0,r.kt)("h3",{id:"lsnodeedgeresponse"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsNodeEdgeResponse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeEdgeResponse {\n    repeated LsNodeEdge ls_node_edges = 1;\n}\n")),(0,r.kt)("h3",{id:"telemetryresponse"},(0,r.kt)("inlineCode",{parentName:"h3"},"TelemetryResponse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetryResponse {\n    repeated TelemetryData telemetry_data = 1;\n}\n")),(0,r.kt)("h3",{id:"telemetrydata"},(0,r.kt)("inlineCode",{parentName:"h3"},"TelemetryData")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetryData {\n    required InterfaceIdentifier interface_id = 1;\n    optional string ipv4_address = 2;\n    optional int64 data_rate = 3;\n    optional int64 packets_sent = 4;\n    optional int64 packets_received = 5;\n    optional string state = 6;\n    optional int64 last_state_transition_time = 7;\n}\n")),(0,r.kt)("h2",{id:"subscription-messages"},"Subscription Messages"),(0,r.kt)("h3",{id:"topologysubscription"},(0,r.kt)("inlineCode",{parentName:"h3"},"TopologySubscription")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TopologySubscription {\n    repeated string keys = 1;\n    repeated string property_names = 2;\n}\n")),(0,r.kt)("h3",{id:"telemetrysubscription"},(0,r.kt)("inlineCode",{parentName:"h3"},"TelemetrySubscription")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetrySubscription {\n    repeated InterfaceIdentifier interface_ids = 1;\n    repeated string property_names = 2;\n}\n")),(0,r.kt)("h3",{id:"lsnodeevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsNodeEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsNode ls_node = 3;\n}\n")),(0,r.kt)("h3",{id:"lslinkevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsLinkEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsLinkEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsLink ls_link = 3;\n}\n")),(0,r.kt)("h3",{id:"lsprefixevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsPrefixEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsPrefixEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsPrefix ls_prefix = 3;\n}\n")),(0,r.kt)("h3",{id:"lssrv6sidevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsSrv6SidEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsSrv6SidEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsSrv6Sid ls_srv6_sid = 3;\n}\n")),(0,r.kt)("h3",{id:"lsnodeedgeevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsNodeEdgeEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeEdgeEvent {\n    required string action = 1;\n    required string key = 2;\n    optional LsNodeEdge ls_node_edge = 3;\n}\n")),(0,r.kt)("h3",{id:"telemetryevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"TelemetryEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message TelemetryEvent {\n    required InterfaceIdentifier interface_id = 1;\n    optional string ipv4_address = 2;\n    optional int64 data_rate = 3;\n    optional int64 packets_sent = 4;\n    optional int64 packets_received = 5;\n    optional string state = 6;\n    optional int64 last_state_transition_time = 7;\n}\n")),(0,r.kt)("h2",{id:"common-messages"},"Common Messages"),(0,r.kt)("p",null,"These messages are used by both the ",(0,r.kt)("strong",{parentName:"p"},"Request Service")," and the ",(0,r.kt)("strong",{parentName:"p"},"Subscription Service"),"."),(0,r.kt)("h3",{id:"lsnode"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsNode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsNode {\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional int64 domain_id = 4;\n    optional string router_ip = 5;\n    optional string peer_hash = 6;\n    optional string peer_ip = 7;\n    optional int32 peer_asn = 8;\n    optional string timestamp = 9;\n    optional string igp_router_id = 10;\n    optional uint32 asn = 11;\n    repeated MultiTopologyIdentifier mtid = 12;\n    optional string area_id = 13;\n    optional string protocol = 14;\n    optional uint32 protocol_id = 15; // protobuf does not support uint8\n    optional string name = 16;\n    optional bool is_prepolicy = 17;\n    optional bool is_adj_rib_in = 18;\n}\n")),(0,r.kt)("h3",{id:"lslink"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsLink")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsLink {\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional string router_ip = 4;\n    optional int64 domain_id = 5;\n    optional string peer_hash = 6;\n    optional string peer_ip = 7;\n    optional int32 peer_asn = 8;\n    optional string timestamp = 9;\n    optional string igp_router_id = 10;\n    optional string protocol = 11;\n    optional string area_id = 12;\n    optional string nexthop = 13;\n    optional MultiTopologyIdentifier mtid = 14;\n    optional string local_link_id = 15;\n    optional string remote_link_id = 16;\n    optional string local_link_ip = 17;\n    optional string remote_link_ip = 18;\n    optional uint32 igp_metric = 19;\n    optional string remote_node_hash = 20;\n    optional string local_node_hash = 21;\n    optional string remote_igp_router_id = 22;\n}\n\n")),(0,r.kt)("h3",{id:"lsprefix"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsPrefix")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsPrefix {\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional string router_ip = 4;\n    optional int64 domain_id = 5;\n    optional string peer_hash = 6;\n    optional string peer_ip = 7;\n    optional int32 peer_asn = 8;\n    optional string timestamp = 9;\n    optional string igp_router_id = 10;\n    optional string protocol = 11;\n    optional string area_id = 12;\n    optional string nexthop = 13;\n    optional string local_node_hash = 14;\n    optional MultiTopologyIdentifier mtid = 15;\n    optional string prefix = 16;\n    optional int32 prefix_len = 17;\n    optional uint32 prefix_metric = 18;\n    optional bool is_prepolicy = 19;\n    optional bool is_adj_rib_in = 20;\n}\n")),(0,r.kt)("h3",{id:"lssrv6sid"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsSrv6Sid")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsSrv6Sid {\n    required string key = 1;\n    optional string id = 2;\n    optional string router_hash = 3;\n    optional string router_ip = 4;\n    optional int64 domain_id = 5;\n    optional string peer_hash = 6;\n    optional string peer_ip = 7;\n    optional int32 peer_asn = 8;\n    optional string timestamp = 9;\n    optional string igp_router_id = 10;\n    optional uint32 local_node_asn = 11;\n    optional string protocol = 12;\n    optional string nexthop = 13;\n    optional string local_node_hash = 14;\n    optional MultiTopologyIdentifier mtid = 15;\n    optional uint32 igp_flags = 16; // protobuf does not support uint8\n    optional bool is_prepolicy = 17;\n    optional bool is_adj_rib_in = 18;\n    optional string srv6_sid = 19;\n}\n")),(0,r.kt)("h3",{id:"lsnodeedge"},(0,r.kt)("inlineCode",{parentName:"h3"},"LsNodeEdge")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message LsNodeEdge {\n    required string key = 1;\n    optional string id = 2;\n    optional string from = 3;\n    optional string to = 4;\n    optional string link = 5;\n}\n")),(0,r.kt)("h2",{id:"base-messages"},"Base Messages"),(0,r.kt)("h3",{id:"multitopologyidentifier"},(0,r.kt)("inlineCode",{parentName:"h3"},"MultiTopologyIdentifier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MultiTopologyIdentifier {\n    required bool o_flag = 1;\n    required bool a_flag = 2;\n    required uint32 mtid = 3; // protobuf does not support uint16\n}\n")),(0,r.kt)("h3",{id:"interfaceidentifier"},(0,r.kt)("inlineCode",{parentName:"h3"},"InterfaceIdentifier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message InterfaceIdentifier {\n    required string hostname = 1;\n    required int32 link_id = 2;\n}\n")))}g.isMDXComponent=!0},6010:function(e,n,t){function i(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);