"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[65896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53938:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"ua-restriction",keywords:["APISIX","API Gateway","UA restriction"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX ua-restriction \u63d2\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06\u6307\u5b9a\u7684 User-Agent \u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u6765\u9650\u5236\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002"},l=void 0,p={unversionedId:"plugins/ua-restriction",id:"plugins/ua-restriction",isDocsHomePage:!1,title:"ua-restriction",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX ua-restriction \u63d2\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06\u6307\u5b9a\u7684 User-Agent \u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u6765\u9650\u5236\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/ua-restriction.md",sourceDirName:"plugins",slug:"/plugins/ua-restriction",permalink:"/zh/docs/apisix/next/plugins/ua-restriction",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/ua-restriction.md",tags:[],version:"current",frontMatter:{title:"ua-restriction",keywords:["APISIX","API Gateway","UA restriction"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX ua-restriction \u63d2\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06\u6307\u5b9a\u7684 User-Agent \u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u6765\u9650\u5236\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002"},sidebar:"docs",previous:{title:"ip-restriction",permalink:"/zh/docs/apisix/next/plugins/ip-restriction"},next:{title:"referer-restriction",permalink:"/zh/docs/apisix/next/plugins/referer-restriction"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5c06\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," \u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u7684\u65b9\u5f0f\u6765\u9650\u5236\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"\u4e00\u79cd\u5e38\u89c1\u7684\u573a\u666f\u662f\u7528\u6765\u8bbe\u7f6e\u722c\u866b\u89c4\u5219\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," \u662f\u5ba2\u6237\u7aef\u5728\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u65f6\u7684\u8eab\u4efd\u6807\u8bc6\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u4e00\u4e9b\u722c\u866b\u7a0b\u5e8f\u7684\u8bf7\u6c42\u5934\u5217\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u63d2\u4ef6\u7684\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allowlist"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a0\u5165\u767d\u540d\u5355\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"User-Agent"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"denylist"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a0\u5165\u9ed1\u540d\u5355\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"User-Agent"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},'"Not allowed"'),(0,a.kt)("td",{parentName:"tr",align:null},"[1, 1024]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u672a\u5141\u8bb8\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"User-Agent")," \u8bbf\u95ee\u65f6\u8fd4\u56de\u7684\u4fe1\u606f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bypass_missing"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"td"},"User-Agent")," \u8bf7\u6c42\u5934\u4e0d\u5b58\u5728\u6216\u683c\u5f0f\u6709\u8bef\u65f6\uff0c\u5c06\u7ed5\u8fc7\u68c0\u67e5\u3002")))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"allowlist")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"denylist")," \u53ef\u4ee5\u540c\u65f6\u542f\u7528\u3002\u540c\u65f6\u542f\u7528\u65f6\uff0c\u63d2\u4ef6\u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," \u5148\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"allowlist"),"\uff0c\u518d\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"denylist"),"\u3002"))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528\u5e76\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "ua-restriction": {\n            "bypass_missing": true,\n             "allowlist": [\n                 "my-bot1",\n                 "(Baiduspider)/(\\\\d+)\\\\.(\\\\d+)"\n             ],\n             "denylist": [\n                 "my-bot2",\n                 "(Twitterspider)/(\\\\d+)\\\\.(\\\\d+)"\n             ]\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u5f53\u672a\u5141\u8bb8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," \u8bbf\u95ee\u65f6\uff0c\u9ed8\u8ba4\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},'{"message":"Not allowed"}'),"\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"message"),"\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u90e8\u5206\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"plugins": {\n    "ua-restriction": {\n        "denylist": [\n            "my-bot2",\n            "(Twitterspider)/(\\\\d+)\\\\.(\\\\d+)"\n        ],\n        "message": "Do you want to do something bad?"\n    }\n}\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u4f60\u53ef\u4ee5\u5148\u53d1\u8d77\u4e00\u4e2a\u7b80\u5355\u7684\u8bf7\u6c42\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -i\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u5934\u4e2d\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," \u72b6\u6001\u7801\uff0c\u4ee3\u8868\u8bf7\u6c42\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8bf7\u6c42\u7684\u540c\u65f6\u6307\u5b9a\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"denylist")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent"),"\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Twitterspider/2.0"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html --header 'User-Agent: Twitterspider/2.0'\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u5934\u4e2d\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"403")," \u72b6\u6001\u7801\uff0c\u8bf7\u6c42\u5931\u8d25\uff0c\u4ee3\u8868\u63d2\u4ef6\u751f\u6548\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 403 Forbidden\n...\n{"message":"Not allowed"}\n')),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ua-restriction")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);