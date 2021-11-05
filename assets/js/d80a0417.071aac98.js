"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[905],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=i(r),k=a,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||s;return r?n.createElement(c,l(l({ref:t},d),{},{components:r})):n.createElement(c,l({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3873:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(6010),s="tableOfContentsInline_3fWc";function l(e){var t=e.toc,r=e.isChild;return t.length?n.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(l,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return n.createElement("div",{className:(0,a.Z)(s)},n.createElement(l,{toc:t}))}},2849:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),l=r(3873),o=["components"],p={sidebar_position:1,title:"Request Service"},i=void 0,d={unversionedId:"api/request-service",id:"api/request-service",isDocsHomePage:!1,title:"Request Service",description:"Protobuf Definition",source:"@site/docs/api/request-service.md",sourceDirName:"api",slug:"/api/request-service",permalink:"/jagw-docs/docs/next/api/request-service",editUrl:"https://github.com/jalapeno-api-gateway/docs/api/request-service.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Request Service"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/jagw-docs/docs/next/getting-started"},next:{title:"Subscription Service",permalink:"/jagw-docs/docs/next/api/subscription-service"}},m=[{value:"Protobuf Definition",id:"protobuf-definition",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>GetLsNodes()</code>",id:"getlsnodes",children:[]},{value:"<code>GetLsLinks()</code>",id:"getlslinks",children:[]},{value:"<code>GetLsPrefixes()</code>",id:"getlsprefixes",children:[]},{value:"<code>GetLsSrv6Sids()</code>",id:"getlssrv6sids",children:[]},{value:"<code>GetLsNodeEdges()</code>",id:"getlsnodeedges",children:[]},{value:"<code>GetTelemetryData()</code>",id:"gettelemetrydata",children:[]}]}],u={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,{toc:m[m.length-1].children,mdxType:"TOCInline"}),(0,s.kt)("h2",{id:"protobuf-definition"},"Protobuf Definition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"service RequestService {\n    rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}\n    rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}\n    rpc GetLsPrefixes(TopologyRequest) returns (LsPrefixResponse) {}\n    rpc GetLsSrv6Sids(TopologyRequest) returns (LsSrv6SidResponse) {}\n    rpc GetLsNodeEdges(TopologyRequest) returns (LsNodeEdgeResponse) {}\n    rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}\n}\n")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"getlsnodes"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetLsNodes()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsNodes(TopologyRequest) returns (LsNodeResponse) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnoderesponse"},"LsNodeResponse")),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,"Takes a ",(0,s.kt)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest")," with the specified ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"propertyNames")," and returns an ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnoderesponse"},"LsNodeResponse")," containing all requested ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnode"},"LsNodes")," with the requested properties."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Omitting ",(0,s.kt)("strong",{parentName:"li"},"keys")," returns all available ",(0,s.kt)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes"),"."),(0,s.kt)("li",{parentName:"ul"},"Omitting ",(0,s.kt)("strong",{parentName:"li"},"propertyNames")," returns ",(0,s.kt)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes")," with all available properties.")),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"keys"),(0,s.kt)("th",{parentName:"tr",align:null},"propertyNames"),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"th",href:"messages#lsnoderesponse"},"LsNodeResponse")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"nodeKey1",',(0,s.kt)("br",null),'"nodeKey2"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"Name",',(0,s.kt)("br",null),'"Asn",',(0,s.kt)("br",null),'"RouterIp"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"messages#lsnoderesponse"},"LsNodeResponse")," contains ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," for the two specified keys with the three requested properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"Name",',(0,s.kt)("br",null),'"Asn",',(0,s.kt)("br",null),'"RouterIp"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"messages#lsnoderesponse"},"LsNodeResponse")," contains all available ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," with the three requested properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"nodeKey1",',(0,s.kt)("br",null),'"nodeKey2"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"messages#lsnoderesponse"},"LsNodeResponse")," contains ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," for the two specified keys with all available properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"messages#lsnoderesponse"},"LsNodeResponse")," contains all available ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," with all available properties.")))),(0,s.kt)("h3",{id:"getlslinks"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetLsLinks()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsLinks(TopologyRequest) returns (LsLinkResponse) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lslinkresponse"},"LsLinkResponse")),(0,s.kt)("h4",{id:"description-1"},"Description"),(0,s.kt)("p",null,"See method ",(0,s.kt)("a",{parentName:"p",href:"#getlsnodes"},"GetLsNodes()"),". It follows the same principle regarding ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"propertyNames"),"."),(0,s.kt)("h3",{id:"getlsprefixes"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetLsPrefixes()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsPrefixes(TopologyRequest) returns (LsPrefixResponse) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lsprefixresponse"},"LsPrefixResponse")),(0,s.kt)("h4",{id:"description-2"},"Description"),(0,s.kt)("p",null,"See method ",(0,s.kt)("a",{parentName:"p",href:"#getlsnodes"},"GetLsNodes()"),". It follows the same principle regarding ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"propertyNames"),"."),(0,s.kt)("h3",{id:"getlssrv6sids"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetLsSrv6Sids()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsSrv6Sids(TopologyRequest) returns (LsSrv6SidResponse) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lssrv6sidresponse"},"LsSrv6SidResponse")),(0,s.kt)("h4",{id:"description-3"},"Description"),(0,s.kt)("p",null,"See method ",(0,s.kt)("a",{parentName:"p",href:"#getlsnodes"},"GetLsNodes()"),". It follows the same principle regarding ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"propertyNames"),"."),(0,s.kt)("h3",{id:"getlsnodeedges"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetLsNodeEdges()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetLsNodeEdges(TopologyRequest) returns (LsNodeEdgeResponse) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologyrequest"},"TopologyRequest"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnodeedgeresponse"},"LsNodeEdgeResponse")),(0,s.kt)("h4",{id:"description-4"},"Description"),(0,s.kt)("p",null,"See method ",(0,s.kt)("a",{parentName:"p",href:"#getlsnodes"},"GetLsNodes()"),". It follows the same principle regarding ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"propertyNames"),"."),(0,s.kt)("h3",{id:"gettelemetrydata"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetTelemetryData()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetTelemetryData(TelemetryRequest) returns (TelemetryResponse) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetryrequest"},"TelemetryRequest"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetryresponse"},"TelemetryResponse")),(0,s.kt)("h4",{id:"description-5"},"Description"),(0,s.kt)("p",null,"Takes a ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetryrequest"},"TelemetryRequest")," with the specified ",(0,s.kt)("strong",{parentName:"p"},"ipv4addresses")," and ",(0,s.kt)("strong",{parentName:"p"},"propertyNames")," and returns an ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetryresponse"},"TelemetryResponse")," containing ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetrydata"},"TelemetryData")," objects (one for each ",(0,s.kt)("strong",{parentName:"p"},"ipv4address"),") and all requested properties."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Omitting ",(0,s.kt)("strong",{parentName:"li"},"ipv4addresses")," returns an empty ",(0,s.kt)("a",{parentName:"li",href:"messages#telemetryresponse"},"TelemetryResponse"),"."),(0,s.kt)("li",{parentName:"ul"},"Omitting ",(0,s.kt)("strong",{parentName:"li"},"propertyNames")," returns ",(0,s.kt)("a",{parentName:"li",href:"messages#telemetrydata"},"TelemetryData")," with all available properties.")),(0,s.kt)("h4",{id:"examples-1"},"Examples"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"ipv4addresses"),(0,s.kt)("th",{parentName:"tr",align:null},"propertyNames"),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"th",href:"messages#telemetryresponse"},"TelemetryResponse")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"1.2.3.4",',(0,s.kt)("br",null),'"2.3.4.5"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"DataRate",',(0,s.kt)("br",null),'"PacketsSent",',(0,s.kt)("br",null),'"PacketsReceived"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"messages#telemetryresponse"},"TelemetryResponse")," contains ",(0,s.kt)("a",{parentName:"td",href:"messages#telemetrydata"},"TelemetryData")," for the two specified ipv4addresses with the three requested properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"DataRate",',(0,s.kt)("br",null),'"PacketsSent",',(0,s.kt)("br",null),'"PacketsReceived"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"messages#telemetryresponse"},"TelemetryResponse")," contains no ",(0,s.kt)("a",{parentName:"td",href:"messages#telemetrydata"},"TelemetryData"),"!")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"1.2.3.4",',(0,s.kt)("br",null),'"2.3.4.5"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"messages#telemetryresponse"},"TelemetryResponse")," contains ",(0,s.kt)("a",{parentName:"td",href:"messages#telemetrydata"},"TelemetryData")," for the two specified ipv4addresses with all available properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"messages#telemetryresponse"},"TelemetryResponse")," contains no ",(0,s.kt)("a",{parentName:"td",href:"messages#telemetrydata"},"TelemetryData"),"!")))))}k.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);