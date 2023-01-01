"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[22407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68202:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"azure-functions",keywords:["APISIX","Plugin","Azure Functions","azure-functions"],description:"This document contains information about the Apache APISIX azure-functions Plugin."},l=void 0,o={unversionedId:"plugins/azure-functions",id:"version-3.0/plugins/azure-functions",isDocsHomePage:!1,title:"azure-functions",description:"This document contains information about the Apache APISIX azure-functions Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.0/plugins/azure-functions.md",sourceDirName:"plugins",slug:"/plugins/azure-functions",permalink:"/docs/apisix/plugins/azure-functions",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.0/docs/en/latest/plugins/azure-functions.md",tags:[],version:"3.0",frontMatter:{title:"azure-functions",keywords:["APISIX","Plugin","Azure Functions","azure-functions"],description:"This document contains information about the Apache APISIX azure-functions Plugin."},sidebar:"version-3.0/docs",previous:{title:"serverless",permalink:"/docs/apisix/plugins/serverless"},next:{title:"openwhisk",permalink:"/docs/apisix/plugins/openwhisk"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[{value:"Configuring path forwarding",id:"configuring-path-forwarding",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-functions")," Plugin is used to integrate APISIX with ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-in/services/functions/"},"Azure Serverless Function")," as a dynamic upstream to proxy all requests for a particular URI to the Microsoft Azure Cloud."),(0,r.kt)("p",null,"When enabled, the Plugin terminates the ongoing request to the configured URI and initiates a new request to Azure Functions on behalf of the client with configured authorization details, request headers, body and parameters (all three passed from the original request). It returns back the response with headers, status code and the body to the client that initiated the request with APISIX."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Azure FunctionS endpoint which triggers the serverless function. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"http://test-apisix.azurewebsites.net/api/HttpTrigger"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization credentials to access Azure Functions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorization.apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generated API key to authorize requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorization.clientid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Azure AD client ID to authorize requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3000"),(0,r.kt)("td",{parentName:"tr",align:null},"[100,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Proxy request timeout in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," performs SSL verification.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," keeps the connection alive for reuse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of requests that can be sent on this connection before closing it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"60000"),(0,r.kt)("td",{parentName:"tr",align:null},"[1000,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Time is ms for connection to remain idle without closing.")))),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master_apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"API Key secret that could be used to access the Azure Functions URI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master_clientid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Azure AD client ID that could be used to authorize the function URI.")))),(0,r.kt)("p",null,"Metadata can be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-functions")," Plugin for an authorization fallback. If there are no authorization details in the Plugin's attributes, the ",(0,r.kt)("inlineCode",{parentName:"p"},"master_apikey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"master_clientid")," configured in the metadata is used."),(0,r.kt)("p",null,"The relative order priority is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plugin looks for ",(0,r.kt)("inlineCode",{parentName:"li"},"x-functions-key")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"x-functions-clientid")," key inside the header from the request to APISIX."),(0,r.kt)("li",{parentName:"ol"},"If not found, the Plugin checks the configured attributes for authorization details. If present, it adds the respective header to the request sent to the Azure Functions."),(0,r.kt)("li",{parentName:"ol"},"If authorization details are not configured in the Plugin's attributes, APISIX fetches the metadata and uses the master keys.")),(0,r.kt)("p",null,"To add a new master API key, you can make a request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/admin/plugin_metadata")," with the required metadata as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/azure-functions -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '\n{\n    \"master_apikey\" : \"<Your Azure master access key>\"\n}'\n")),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"You can configure the Plugin on a specific Route as shown below assuming that you already have your Azure Functions up and running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "azure-functions": {\n            "function_uri": "http://test-apisix.azurewebsites.net/api/HttpTrigger",\n            "authorization": {\n                "apikey": "<Generated API key to access the Azure-Function>"\n            }\n        }\n    },\n    "uri": "/azure"\n}\'\n')),(0,r.kt)("p",null,"Now, any requests (HTTP/1.1, HTTPS, HTTP2) to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/azure")," will invoke the configured Azure Functions URI and the response will be proxied back to the client."),(0,r.kt)("p",null,'In the example below, the Azure Function takes in name from the query and returns a message "Hello $name":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET http://localhost:9080/azure\\?name=APISIX\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nRequest-Context: appId=cid-v1:38aae829-293b-43c2-82c6-fa94aec0a071\nDate: Wed, 17 Nov 2021 14:46:55 GMT\nServer: APISIX/2.10.2\n\nHello, APISIX\n")),(0,r.kt)("p",null,"Another example of a request where the client communicates with APISIX via HTTP/2 is shown below (make sure you have configured ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_http2: true")," in your default configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"config-default.yaml"),"). You can do this by uncommenting the port ",(0,r.kt)("inlineCode",{parentName:"p"},"9081")," from the field ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.node_listen"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET --http2 --http2-prior-knowledge http://localhost:9081/azure\\?name=APISIX\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/2 200\ncontent-type: text/plain; charset=utf-8\nrequest-context: appId=cid-v1:38aae829-293b-43c2-82c6-fa94aec0a071\ndate: Wed, 17 Nov 2021 14:54:07 GMT\nserver: APISIX/2.10.2\n\nHello, APISIX\n")),(0,r.kt)("h3",{id:"configuring-path-forwarding"},"Configuring path forwarding"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-functions")," Plugins also supports URL path forwarding while proxying requests to the Azure Functions upstream. Extensions to the base request path gets appended to the ",(0,r.kt)("inlineCode",{parentName:"p"},"function_uri")," specified in the Plugin configuration."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," configured on a Route must end with ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for this feature to work properly. APISIX Routes are matched strictly and the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," implies that any subpath to this URI would be matched to the same Route."))),(0,r.kt)("p",null,"The example below configures this feature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "azure-functions": {\n            "function_uri": "http://app-bisakh.azurewebsites.net/api",\n            "authorization": {\n                "apikey": "<Generated API key to access the Azure-Function>"\n            }\n        }\n    },\n    "uri": "/azure/*"\n}\'\n')),(0,r.kt)("p",null,"Now, any requests to the path ",(0,r.kt)("inlineCode",{parentName:"p"},"azure/HttpTrigger1")," will invoke the Azure Function and the added path is forwarded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET http://127.0.0.1:9080/azure/HttpTrigger1\\?name\\=APISIX\\\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Wed, 01 Dec 2021 14:19:53 GMT\nRequest-Context: appId=cid-v1:4d4b6221-07f1-4e1a-9ea0-b86a5d533a94\nServer: APISIX/2.11.0\n\nHello, APISIX\n")),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-functions")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/azure",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);