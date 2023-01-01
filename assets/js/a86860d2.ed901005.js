"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24615:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"elasticsearch-logger",keywords:["APISIX","API Gateway","Plugin","Elasticsearch-logger"],description:"This document contains information about the Apache APISIX elasticsearch-logger Plugin."},i=void 0,s={unversionedId:"plugins/elasticsearch-logger",id:"version-3.0/plugins/elasticsearch-logger",isDocsHomePage:!1,title:"elasticsearch-logger",description:"This document contains information about the Apache APISIX elasticsearch-logger Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.0/plugins/elasticsearch-logger.md",sourceDirName:"plugins",slug:"/plugins/elasticsearch-logger",permalink:"/docs/apisix/plugins/elasticsearch-logger",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.0/docs/en/latest/plugins/elasticsearch-logger.md",tags:[],version:"3.0",frontMatter:{title:"elasticsearch-logger",keywords:["APISIX","API Gateway","Plugin","Elasticsearch-logger"],description:"This document contains information about the Apache APISIX elasticsearch-logger Plugin."},sidebar:"version-3.0/docs",previous:{title:"loggly",permalink:"/docs/apisix/plugins/loggly"},next:{title:"tencent-cloud-cls",permalink:"/docs/apisix/plugins/tencent-cloud-cls"}},o=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[{value:"Full configuration",id:"full-configuration",children:[]},{value:"Minimal configuration example",id:"minimal-configuration-example",children:[]}]},{value:"Example usage",id:"example-usage",children:[]},{value:"Metadata",id:"metadata",children:[{value:"Disable Metadata",id:"disable-metadata",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],c={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch-logger")," Plugin is used to forward logs to ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/welcome-to-elastic/current/getting-started-general-purpose.html"},"Elasticsearch")," for analysis and storage."),(0,r.kt)("p",null,"When the Plugin is enabled, APISIX will serialize the request context information to ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html#docs-bulk"},"Elasticsearch Bulk format")," and submit it to the batch queue. When the maximum batch size is exceeded, the data in the queue is pushed to Elasticsearch. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"batch processor")," for more details."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("inlineCode",{parentName:"td"},"field")," configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field.index"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-index-field.html#mapping-index-field"},"_index field"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field.type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch default value"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.17/mapping-type-field.html#mapping-type-field"},"_type field"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/setting-up-authentication.html"},"authentication")," configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth.username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/setting-up-authentication.html"},"authentication")," username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth.password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/setting-up-authentication.html"},"authentication")," password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," enables SSL verification as per ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty docs"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch send data timeout in seconds.")))),(0,r.kt)("p",null,"This Plugin supports using batch processors to aggregate and process entries (logs/data) in a batch. This avoids the need for frequently submitting the data. The batch processor submits data every ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor#configuration"},"Batch Processor")," for more information or setting your custom configuration."),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("h3",{id:"full-configuration"},"Full configuration"),(0,r.kt)("p",null,"The example below shows a complete configuration of the Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "elasticsearch-logger":{\n            "endpoint_addr":"http://127.0.0.1:9200",\n            "field":{\n                "index":"services",\n                "type":"collector"\n            },\n            "auth":{\n                "username":"elastic",\n                "password":"123456"\n            },\n            "ssl_verify":false,\n            "timeout": 60,\n            "retry_delay":1,\n            "buffer_duration":60,\n            "max_retry_count":0,\n            "batch_max_size":1000,\n            "inactive_timeout":5,\n            "name":"elasticsearch-logger"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/elasticsearch.do"\n}\'\n')),(0,r.kt)("h3",{id:"minimal-configuration-example"},"Minimal configuration example"),(0,r.kt)("p",null,"The example below shows a bare minimum configuration of the Plugin on a Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "elasticsearch-logger":{\n            "endpoint_addr":"http://127.0.0.1:9200",\n            "field":{\n                "index":"services"\n            }\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/elasticsearch.do"\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Once you have configured the Route to use the Plugin, when you make a request to APISIX, it will be logged in your Elasticsearch server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/elasticsearch.do\\?q\\=hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("p",null,"You should be able to get the log from elasticsearch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "http://127.0.0.1:9200/services/_search" | jq .\n{\n  "took": 0,\n   ...\n    "hits": [\n      {\n        "_index": "services",\n        "_type": "_doc",\n        "_id": "M1qAxYIBRmRqWkmH4Wya",\n        "_score": 1,\n        "_source": {\n          "apisix_latency": 0,\n          "route_id": "1",\n          "server": {\n            "version": "2.15.0",\n            "hostname": "apisix"\n          },\n          "request": {\n            "size": 102,\n            "uri": "/elasticsearch.do?q=hello",\n            "querystring": {\n              "q": "hello"\n            },\n            "headers": {\n              "user-agent": "curl/7.29.0",\n              "host": "127.0.0.1:9080",\n              "accept": "*/*"\n            },\n            "url": "http://127.0.0.1:9080/elasticsearch.do?q=hello",\n            "method": "GET"\n          },\n          "service_id": "",\n          "latency": 0,\n          "upstream": "127.0.0.1:1980",\n          "upstream_latency": 1,\n          "client_ip": "127.0.0.1",\n          "start_time": 1661170929107,\n          "response": {\n            "size": 192,\n            "headers": {\n              "date": "Mon, 22 Aug 2022 12:22:09 GMT",\n              "server": "APISIX/2.15.0",\n              "content-type": "text/plain; charset=utf-8",\n              "connection": "close",\n              "transfer-encoding": "chunked"\n            },\n            "status": 200\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"You can also set the format of the logs by configuring the Plugin metadata. The following configurations are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,r.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/apisix-variable.md"},"APISIX")," or ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Configuring the Plugin metadata is global in scope. This means that it will take effect on all Routes and Services which use the ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch-logger")," Plugin."))),(0,r.kt)("p",null,"The example below shows how you can configure through the Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/elasticsearch-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"With this configuration, your logs would be formatted as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("p",null," make a request to APISIX again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/elasticsearch.do\\?q\\=hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("p",null,"You should be able to get this log from elasticsearch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "http://127.0.0.1:9200/services/_search" | jq .\n{\n  "took": 0,\n  ...\n  "hits": {\n    "total": {\n      "value": 1,\n      "relation": "eq"\n    },\n    "max_score": 1,\n    "hits": [\n      {\n        "_index": "services",\n        "_type": "_doc",\n        "_id": "NVqExYIBRmRqWkmH4WwG",\n        "_score": 1,\n        "_source": {\n          "@timestamp": "2022-08-22T20:26:31+08:00",\n          "client_ip": "127.0.0.1",\n          "host": "127.0.0.1",\n          "route_id": "1"\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"disable-metadata"},"Disable Metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/elasticsearch-logger \\\n-H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch-logger")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{},\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/elasticsearch.do"\n}\'\n')))}u.isMDXComponent=!0}}]);