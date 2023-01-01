"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3328],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,h=m["".concat(p,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={title:"\u4f7f\u7528 Apache APISIX \u4ee3\u7406 gRPC \u670d\u52a1",authors:[{name:"\u55bb\u67cf\u4ef2",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","gRPC","Google","proto","\u63d2\u4ef6"],description:"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u901a\u8fc7 `grpc-transcode`\u63d2\u4ef6\u6765\u5c06\u5ba2\u6237\u7aef\u7684 HTTP \u6d41\u91cf\u4ee3\u7406\u5230\u540e\u7aef gRPC \u670d\u52a1\u4e0a\u3002",tags:["Ecosystem"]},c=void 0,i={permalink:"/zh/blog/2021/12/30/apisix-proxy-grpc-service",source:"@site/blog/2021/12/30/apisix-proxy-grpc-service.md",title:"\u4f7f\u7528 Apache APISIX \u4ee3\u7406 gRPC \u670d\u52a1",description:"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u901a\u8fc7 `grpc-transcode`\u63d2\u4ef6\u6765\u5c06\u5ba2\u6237\u7aef\u7684 HTTP \u6d41\u91cf\u4ee3\u7406\u5230\u540e\u7aef gRPC \u670d\u52a1\u4e0a\u3002",date:"2021-12-30T00:00:00.000Z",formattedDate:"2021\u5e7412\u670830\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:5.235,truncated:!0,authors:[{name:"\u55bb\u67cf\u4ef2",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4",imageURL:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Apache APISIX \u7ed3\u5408 Authing \u5b9e\u73b0\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7ba1\u7406",permalink:"/zh/blog/2022/01/04/authing"},nextItem:{title:"Apache APISIX Dashboard \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-45232)",permalink:"/zh/blog/2021/12/28/dashboard-cve-2021-45232"}},p={authorsImageUrls:[void 0,void 0]},u=[],l={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-transcode"),"\u63d2\u4ef6\u6765\u5c06\u5ba2\u6237\u7aef\u7684 HTTP \u6d41\u91cf\u4ee3\u7406\u5230\u540e\u7aef gRPC \u670d\u52a1\u4e0a\u3002")))}s.isMDXComponent=!0}}]);