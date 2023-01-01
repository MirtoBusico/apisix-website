"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[54183],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(t),s=r,k=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},73200:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={title:"mocking",keywords:["APISIX","Plugin","Mocking","mocking"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `mocking` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/mocking",id:"plugins/mocking",isDocsHomePage:!1,title:"mocking",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `mocking` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/mocking.md",sourceDirName:"plugins",slug:"/plugins/mocking",permalink:"/zh/docs/apisix/next/plugins/mocking",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/mocking.md",tags:[],version:"current",frontMatter:{title:"mocking",keywords:["APISIX","Plugin","Mocking","mocking"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `mocking` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"docs",previous:{title:"fault-injection",permalink:"/zh/docs/apisix/next/plugins/fault-injection"},next:{title:"key-auth",permalink:"/zh/docs/apisix/next/plugins/key-auth"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],d={toc:o};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mocking")," \u63d2\u4ef6\u7528\u4e8e\u6a21\u62df API\u3002\u5f53\u6267\u884c\u8be5\u63d2\u4ef6\u65f6\uff0c\u5b83\u5c06\u968f\u673a\u8fd4\u56de\u6307\u5b9a\u683c\u5f0f\u7684\u6a21\u62df\u6570\u636e\uff0c\u5e76\u4e14\u8bf7\u6c42\u4e0d\u4f1a\u8f6c\u53d1\u5230\u4e0a\u6e38\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ef6\u65f6\u8fd4\u56de\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u54cd\u5e94\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u54cd\u5e94\u7684 Header ",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_example"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u54cd\u5e94\u7684 Body\uff0c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"response_schema")," \u5b57\u6bb5\u4e8c\u9009\u4e00\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_schema"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u54cd\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"jsonschema")," \u5bf9\u8c61\uff0c\u672a\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"td"},"response_example")," \u5b57\u6bb5\u65f6\u751f\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"with_mock_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u6dfb\u52a0\u54cd\u5e94\u5934 ",(0,r.kt)("inlineCode",{parentName:"td"},"x-mock-by: APISIX/{version}"),"\u3002\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\u5219\u4e0d\u6dfb\u52a0\u8be5\u54cd\u5e94\u5934\u3002")))),(0,r.kt)("p",null,"JSON Schema \u5728\u5176\u5b57\u6bb5\u4e2d\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"integer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"array"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a JSON Schema \u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "properties":{\n        "field0":{\n            "example":"abcd",\n            "type":"string"\n        },\n        "field1":{\n            "example":123.12,\n            "type":"number"\n        },\n        "field3":{\n            "properties":{\n                "field3_1":{\n                    "type":"string"\n                },\n                "field3_2":{\n                    "properties":{\n                        "field3_2_1":{\n                            "example":true,\n                            "type":"boolean"\n                        },\n                        "field3_2_2":{\n                            "items":{\n                                "example":155.55,\n                                "type":"integer"\n                            },\n                            "type":"array"\n                        }\n                    },\n                    "type":"object"\n                }\n            },\n            "type":"object"\n        },\n        "field2":{\n            "items":{\n                "type":"string"\n            },\n            "type":"array"\n        }\n    },\n    "type":"object"\n}\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u4e0a\u8ff0 JSON Schema \u53ef\u80fd\u751f\u6210\u7684\u8fd4\u56de\u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "field1": 123.12,\n    "field3": {\n        "field3_1": "LCFE0",\n        "field3_2": {\n            "field3_2_1": true,\n            "field3_2_2": [\n                155,\n                155\n            ]\n        }\n    },\n    "field0": "abcd",\n    "field2": [\n        "sC"\n    ]\n}\n')),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"mocking")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "mocking": {\n            "delay": 1,\n            "content_type": "application/json",\n            "response_status": 200,\n            "response_schema": {\n               "properties":{\n                   "field0":{\n                       "example":"abcd",\n                       "type":"string"\n                   },\n                   "field1":{\n                       "example":123.12,\n                       "type":"number"\n                   },\n                   "field3":{\n                       "properties":{\n                           "field3_1":{\n                               "type":"string"\n                           },\n                           "field3_2":{\n                               "properties":{\n                                   "field3_2_1":{\n                                       "example":true,\n                                       "type":"boolean"\n                                   },\n                                   "field3_2_2":{\n                                       "items":{\n                                           "example":155.55,\n                                           "type":"integer"\n                                       },\n                                       "type":"array"\n                                   }\n                               },\n                               "type":"object"\n                           }\n                       },\n                       "type":"object"\n                   },\n                   "field2":{\n                       "items":{\n                           "type":"string"\n                       },\n                       "type":"array"\n                   }\n               },\n               "type":"object"\n           }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u6d4b\u8bd5\u63d2\u4ef6\u662f\u5426\u542f\u7528\u6210\u529f\uff1a"),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"mocking")," \u63d2\u4ef6\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "delay":0,\n  "content_type":"",\n  "with_mock_header":true,\n  "response_status":201,\n  "response_example":"{\\"a\\":1,\\"b\\":2}"\n}\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/test-mock -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'HTTP/1.1 201 Created\nDate: Fri, 14 Jan 2022 11:49:34 GMT\nContent-Type: application/json;charset=utf8\nTransfer-Encoding: chunked\nConnection: keep-alive\nx-mock-by: APISIX/2.10.0\nServer: APISIX/2.10.0\n\n{"a":1,"b":2}\n')),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"mocking")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);