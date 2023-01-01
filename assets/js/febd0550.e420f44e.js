"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1894],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(r),m=o,f=g["".concat(c,".").concat(m)]||g[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},99528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(25773),o=(r(27378),r(35318));const a={title:"How to develop plugin in API Gateway",authors:[{name:"Qi Guo",title:"Author",url:"https://github.com/guoqqqi",image_url:"https://avatars.githubusercontent.com/u/72343596?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["API Gateway","Logging","file logger"],description:"This article introduces the specific steps for front-end engineers to develop file-logger plugins on the cloud-native API gateway Apache APISIX.",tags:["Plugins","Ecosystem"]},i=void 0,l={permalink:"/blog/2022/02/16/file-logger-api-gateway",source:"@site/blog/2022/02/16/file-logger-api-gateway.md",title:"How to develop plugin in API Gateway",description:"This article introduces the specific steps for front-end engineers to develop file-logger plugins on the cloud-native API gateway Apache APISIX.",date:"2022-02-16T00:00:00.000Z",formattedDate:"February 16, 2022",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:9.155,truncated:!0,authors:[{name:"Qi Guo",title:"Author",url:"https://github.com/guoqqqi",image_url:"https://avatars.githubusercontent.com/u/72343596?v=4",imageURL:"https://avatars.githubusercontent.com/u/72343596?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"Biweekly Report (Feb 1 - Feb 14)",permalink:"/blog/2022/02/17/weekly-report-0214"},nextItem:{title:"Apache APISIX Vulnerability for Rewriting X-REAL-IP Header (CVE-2022-24112)",permalink:"/blog/2022/02/11/cve-2022-24112"}},c={authorsImageUrls:[void 0,void 0]},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article documents the process of developing the ",(0,o.kt)("inlineCode",{parentName:"p"},"file-logger")," plugin by a front-end engineer with no back-end experience.")))}s.isMDXComponent=!0}}]);