"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[6185],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},3873:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tableOfContentsInline_3fWc";function i(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children}))}))):null}var l=function(e){var t=e.toc;return r.createElement("div",{className:(0,a.Z)(o)},r.createElement(i,{toc:t}))}},4334:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),l=n(3873),s=["components"],u={sidebar_position:6,title:"YANG Models"},c=void 0,d={unversionedId:"yang-models",id:"version-1.3.0/yang-models",isDocsHomePage:!1,title:"YANG Models",description:"Content",source:"@site/versioned_docs/version-1.3.0/yang-models.md",sourceDirName:".",slug:"/yang-models",permalink:"/jagw-docs/docs/yang-models",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.3.0/yang-models.md",tags:[],version:"1.3.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"YANG Models"},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Properties",permalink:"/jagw-docs/docs/api/properties"}},p=[{value:"Content",id:"content",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Adding More Telemetry Data To A Jalape\xf1o Instance",id:"adding-more-telemetry-data-to-a-jalape\xf1o-instance",children:[]},{value:"YANG Search",id:"yang-search",children:[]},{value:"Configuring A Router For YANG Push",id:"configuring-a-router-for-yang-push",children:[]},{value:"Verify Your YANG Push configuration",id:"verify-your-yang-push-configuration",children:[]},{value:"Exploring Locally Stored YANG Models",id:"exploring-locally-stored-yang-models",children:[]},{value:"YANG model support on Cisco IOS-XR",id:"yang-model-support-on-cisco-ios-xr",children:[]}],m={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)(l.Z,{toc:p,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In order for the Jalape\xf1o Framework to provide developers with telemetry data, routers first have to be configured to send the required counters to the ingress Telegraf instance of Jalape\xf1o."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://yangcatalog.org/"},"YANG")," (Yet Another Next Generation) is a data modeling language. There is a large collection of YANG models that define different sets of counters."),(0,o.kt)("p",null,"YANG models are also stored locally on the routers. If configured properly, the routers will send the counters of a YANG model the specified endpoint."),(0,o.kt)("br",null),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,i.Z)("/img/yang-push-in-jalapeno.png"),alt:"deployment-diagram",width:"90%"})),(0,o.kt)("h2",{id:"adding-more-telemetry-data-to-a-jalape\xf1o-instance"},"Adding More Telemetry Data To A Jalape\xf1o Instance"),(0,o.kt)("p",null,"The following steps describe how to have more counters available in Jalape\xf1o:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find a YANG model that provides the required counters by using a search engine as well as ",(0,o.kt)("a",{parentName:"li",href:"https://yangcatalog.org/yang-search"},"YANG search"),"."),(0,o.kt)("li",{parentName:"ol"},"Configure the YANG model on the routers in your network and point them to the ingress Telegraf of Jalape\xf1o."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/INSRapperswil/jagw-explorer"},"JAGW Explorer")," to verify the model through the Jalape\xf1o API Gateway.")),(0,o.kt)("p",null,"The chapters below will provide you with more details on the process."),(0,o.kt)("h2",{id:"yang-search"},"YANG Search"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://yangcatalog.org/yang-search"},"YANG search")," can help you find and explore YANG models."),(0,o.kt)("p",null,"Once you have found a model that fits your needs (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Cisco-IOS-XR-pfi-im-cmd-oper"),"), you can explore it by entering it in the search bar and then clicking on ",(0,o.kt)("strong",{parentName:"p"},"Tree View")," on any of the search results."),(0,o.kt)("br",null),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,i.Z)("/img/yang-search.png"),alt:"deployment-diagram",width:"90%"})),(0,o.kt)("h2",{id:"configuring-a-router-for-yang-push"},"Configuring A Router For YANG Push"),(0,o.kt)("p",null,"To configure a YANG model on a router you can use the following configuration as a reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"telemetry model-driven\n destination-group <destination-group-name>\n  address-family ipv4 <jalapeno-ip-address> port <ingress-telegraf-port>\n   encoding self-describing-gpb\n   protocol grpc\n  !\n !\n sensor-group <sensor-group-name>\n  sensor-path Cisco-IOS-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface\n  sensor-path Cisco-IOS-XR-sysadmin-asr9k-envmon-ui:environment/oper\n !\n subscription <subscription-name>\n  sensor-group-id <sensor-group-name> sample-interval <sample-interval-in-ms>\n  destination-id <destination-group-name>\n !\n!\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do not forget to commit your changes afterwards!"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<destination-group-name",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Can be any string.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<sensor-group-name",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Can be any string.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<subscription-name",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Can be any string.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<jalapeno-ip-address",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The IP address of the server where Jalape\xf1o is running.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<ingress-telegraf-port",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The port number of the ingress Telegraf (default: ",(0,o.kt)("strong",{parentName:"td"},"32400"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<sample-interval-in-ms",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The frequency of how often the router pushes updates. A common value is ",(0,o.kt)("strong",{parentName:"td"},"10000")," (10 seconds).")))),(0,o.kt)("h2",{id:"verify-your-yang-push-configuration"},"Verify Your YANG Push configuration"),(0,o.kt)("p",null,"To verify your YANG push configuration run the following command on the router:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"router# show telemetry model-driven subscription <subscription-name>\n")),(0,o.kt)("p",null,"This will provide you with an output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Mon Apr 30 04:33:42.421 EST\n\nSubscription:  1\n\n-------------\n\n  State:       NOT ACTIVE\n\n  Sensor groups:\n\n  Id: Memory\n\n    Sample Interval:      10000 ms\n\n    Sensor Path:          Cisco-IOS\xae-XR-pfi-im-cmd-oper:interfaces/interface-xr/interface\n    Sensor Path State:    Resolved\n    Sensor Path:          Cisco-IOS\xae-XR-sysadmin-asr9k-envmon-ui:environment/oper\n    Sensor Path State:    Not Resolved\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a ",(0,o.kt)("strong",{parentName:"p"},"Sensor Path State")," has the value ",(0,o.kt)("strong",{parentName:"p"},"Not Resolved")," it means, that the router was unable to find the specified Sensor Path locally."))),(0,o.kt)("h2",{id:"exploring-locally-stored-yang-models"},"Exploring Locally Stored YANG Models"),(0,o.kt)("p",null,"Routers keep copies of YANG models stored locally. To check if a YANG model is available on your router, run these commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"router# run\n$ cd /pkg/yang\n$ ls\n")),(0,o.kt)("h2",{id:"yang-model-support-on-cisco-ios-xr"},"YANG model support on Cisco IOS-XR"),(0,o.kt)("p",null,"Not all versions of Cisco IOS-XR support all YANG models. Here you can find out which models are supported by your router:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YangModels/yang/tree/master/vendor/cisco/xr"},"https://github.com/YangModels/yang/tree/master/vendor/cisco/xr")),(0,o.kt)("p",null,"If you see a warning from GitHub concerning truncating (see image below), you might have to clone the repository to find your YANG model, because GitHub does not show more than 1'000 files per folder."),(0,o.kt)("br",null),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,i.Z)("/img/cisco-ios-xr-yang-models-github.png"),alt:"deployment-diagram",width:"100%"})))}g.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);