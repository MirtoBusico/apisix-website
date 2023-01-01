"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9852],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(r),m=a,h=g["".concat(p,".").concat(m)]||g[m]||s[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},36183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 NGINX \u7684\u53ef\u89c2\u6d4b\u6027",author:"\u91d1\u536b",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars.githubusercontent.com/u/4413028?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Nginx","\u53ef\u89c2\u6d4b\u6027"],description:"\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u7b49\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002",tags:["Ecosystem"]},i=void 0,c={permalink:"/zh/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx",source:"@site/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx.md",title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 NGINX \u7684\u53ef\u89c2\u6d4b\u6027",description:"\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u7b49\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002",date:"2021-08-06T00:00:00.000Z",formattedDate:"2021\u5e748\u67086\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:19.22,truncated:!0,authors:[{name:"\u91d1\u536b",url:"https://github.com/gxthrj",imageURL:"https://avatars.githubusercontent.com/u/4413028?v=4"}],prevItem:{title:"\u820d\u5f03 Kong \u548c NGINX\uff0cAPISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",permalink:"/zh/blog/2021/08/09/apache-apisix-in-quliankeji"},nextItem:{title:"Kong-To-APISIX \u8fc1\u79fb\u5de5\u5177",permalink:"/zh/blog/2021/08/05/kong-to-apisix"}},p={authorsImageUrls:[void 0]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u8fd9\u4e9b\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002")))}s.isMDXComponent=!0}}]);