"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[987],{3873:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(7294),n=a(6010),l="tableOfContentsInline_3fWc";function r(e){var t=e.toc,a=e.isChild;return t.length?i.createElement("ul",{className:a?"":"table-of-contents"},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return i.createElement("div",{className:(0,n.Z)(l)},i.createElement(r,{toc:t}))}},967:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return N},default:function(){return d}});var i=a(7462),n=a(3366),l=(a(7294),a(3905)),r=a(3873),p=["components"],o={sidebar_position:4,title:"PropertyNames"},m=void 0,k={unversionedId:"api/property-names",id:"api/property-names",isDocsHomePage:!1,title:"PropertyNames",description:"About PropertyNames",source:"@site/docs/api/property-names.md",sourceDirName:"api",slug:"/api/property-names",permalink:"/jagw-docs/docs/api/property-names",editUrl:"https://github.com/jalapeno-api-gateway/docs/api/property-names.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"PropertyNames"},sidebar:"tutorialSidebar",previous:{title:"Messages",permalink:"/jagw-docs/docs/api/messages"}},N=[{value:"About PropertyNames",id:"about-propertynames",children:[]},{value:"All PropertyNames",id:"all-propertynames",children:[{value:"<code>LSNode</code> Properties",id:"lsnode-properties",children:[]},{value:"<code>LSLink</code> Properties",id:"lslink-properties",children:[]},{value:"<code>LSPrefix</code> Properties",id:"lsprefix-properties",children:[]},{value:"<code>LSSRv6SID</code> Properties",id:"lssrv6sid-properties",children:[]},{value:"Properties for Physical Interfaces",id:"properties-for-physical-interfaces",children:[]},{value:"Properties for Loopback Interfaces",id:"properties-for-loopback-interfaces",children:[]}]}],s={toc:N};function d(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{toc:N[N.length-1].children,mdxType:"TOCInline"}),(0,l.kt)("h2",{id:"about-propertynames"},"About PropertyNames"),(0,l.kt)("p",null,"When making a request or a subscription you can specify ",(0,l.kt)("strong",{parentName:"p"},"propertyNames")," (i.e. in ",(0,l.kt)("a",{parentName:"p",href:"request-service#topologyrequest"},"TopologyRequest")," or ",(0,l.kt)("a",{parentName:"p",href:"subscription-service#telemetrysubscription"},"TelemetrySubscription"),"). This allows you to define the properties you want to be returned for the requested objects. This is optional, since omitting ",(0,l.kt)("strong",{parentName:"p"},"propertyNames")," results in all available properties being returned."),(0,l.kt)("p",null,"Different objects provide different ",(0,l.kt)("strong",{parentName:"p"},"propertyNames")," (i.e. ",(0,l.kt)("a",{parentName:"p",href:"messages#lsnode"},"LSNode"),", ",(0,l.kt)("a",{parentName:"p",href:"messages#lslink"},"LSLink"),", ",(0,l.kt)("a",{parentName:"p",href:"messages#telemetrydata"},"TelemetryData"),")."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"invalid propertyNames")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The Jalape\xf1o API Gateway ignores invalid propertyNames. Make sure therefore, that the strings you provide match the propertyNames below exactly."))),(0,l.kt)("h2",{id:"all-propertynames"},"All PropertyNames"),(0,l.kt)("h3",{id:"lsnode-properties"},(0,l.kt)("inlineCode",{parentName:"h3"},"LSNode")," Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Key"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"ID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RouterHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"DomainID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RouterIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerASN"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Timestamp"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IGPRouterID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"ASN"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"MTID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"AreaID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Protocol"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"ProtocolID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Name"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IsPrepolicy"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IsAdjRIBIn"'))),(0,l.kt)("h3",{id:"lslink-properties"},(0,l.kt)("inlineCode",{parentName:"h3"},"LSLink")," Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Key"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"ID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RouterHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RouterIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"DomainID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerASN"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Timestamp"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IGPRouterID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Protocol"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"AreaID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Nexthop"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"MTID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"LocalLinkIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RemoteLinkIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IGPMetric"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RemoteNodeHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"LocalNodeHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RemoteIGPRouterID"'))),(0,l.kt)("h3",{id:"lsprefix-properties"},(0,l.kt)("inlineCode",{parentName:"h3"},"LSPrefix")," Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Key"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"ID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RouterHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RouterIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"DomainID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerASN"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Timestamp"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IGPRouterID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Protocol"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"AreaID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Nexthop"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"LocalNodeHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"MTID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Prefix"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PrefixLen"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PrefixMetric"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IsPrepolicy"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IsAdjRIBIn"'))),(0,l.kt)("h3",{id:"lssrv6sid-properties"},(0,l.kt)("inlineCode",{parentName:"h3"},"LSSRv6SID")," Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Key"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"ID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RouterHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"RouterIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"DomainID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerIP"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PeerASN"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Timestamp"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IGPRouterID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"LocalNodeASN"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Protocol"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"Nexthop"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"LocalNodeHash"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"MTID"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IGPFlags"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IsPrepolicy"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"IsAdjRIBIn"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"SRv6SID"'))),(0,l.kt)("h3",{id:"properties-for-physical-interfaces"},"Properties for Physical Interfaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"DataRate"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PacketsSent"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"PacketsReceived"'))),(0,l.kt)("h3",{id:"properties-for-loopback-interfaces"},"Properties for Loopback Interfaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"State"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"LastStateTransitionTime"'))))}d.isMDXComponent=!0}}]);