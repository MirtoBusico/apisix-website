"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6233],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,f=h["".concat(i,".").concat(m)]||h[m]||s[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",slug:"2021/07/27/use-of-plugin-orchestration-in-apache-apisix",author:"\u741a\u81f4\u8fdc",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4",keywords:["API \u7f51\u5173","APISIX","\u63d2\u4ef6\u7f16\u6392","Apache APISIX Dashboard"],description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u4f60\u53ef\u4ee5\u4e86\u89e3\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u53ca\u5176\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002",tags:["Ecosystem"]},c=void 0,p={permalink:"/zh/blog/2021/07/27/use-of-plugin-orchestration-in-apache-apisix",source:"@site/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX.md",title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u4f60\u53ef\u4ee5\u4e86\u89e3\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u53ca\u5176\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002",date:"2021-07-27T00:00:00.000Z",formattedDate:"2021\u5e747\u670827\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:10.24,truncated:!0,authors:[{name:"\u741a\u81f4\u8fdc",url:"https://github.com/juzhiyuan",imageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"}],prevItem:{title:"Apache APISIX 2.8 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/07/28/release-apache-apisix-2.8"},nextItem:{title:"ApacheCon Asia 2021\uff1aApache APISIX \u6280\u672f\u8bae\u9898\u4e00\u89c8",permalink:"/zh/blog/2021/07/25/apachecon-asia"}},i={authorsImageUrls:[void 0]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3 Apache APISIX \u4e0e\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002\u672c\u6587\u4f5c\u8005\u741a\u81f4\u8fdc\uff0cApache APISIX PMC\uff0c\u5728",(0,a.kt)("a",{parentName:"p",href:"https://api7.ai/"},"\u652f\u6d41\u79d1\u6280"),"\u8d1f\u8d23\u4f01\u4e1a\u4ea7\u54c1\u4e0e\u5927\u524d\u7aef\u6280\u672f\u3002")))}s.isMDXComponent=!0}}]);