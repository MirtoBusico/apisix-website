"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7062],{35318:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>m});var a=l(27378);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=o(l),m=n,d=k["".concat(c,".").concat(m)]||k[m]||s[m]||r;return l?a.createElement(d,p(p({ref:t},u),{},{components:l})):a.createElement(d,p({ref:t},u))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,p=new Array(r);p[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var o=2;o<r;o++)p[o]=l[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,l)}k.displayName="MDXCreateElement"},24917:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=l(25773),n=(l(27378),l(35318));const r={title:"Apache APISIX \u5982\u4f55\u901a\u8fc7\u7f51\u5173\u5c42\u4e3a Airwallex \u6570\u636e\u4e3b\u6743\u4fdd\u9a7e\u62a4\u822a",author:"\u674e\u6768",keywords:["Apache APISIX","API \u7f51\u5173","Airwallex","\u6570\u636e\u4e3b\u6743","\u6570\u636e\u4e2d\u5fc3"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Airwallex \u7a7a\u4e2d\u4e91\u6c47\u662f\u5982\u4f55\u4f7f\u7528\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fdb\u884c\u7f51\u5173\u5c42\u90e8\u7f72\u6765\u52a0\u56fa\u6570\u636e\u4e3b\u6743\u65b9\u9762\u7684\u5efa\u8bbe\u4ee5\u53ca\u767b\u5f55\u4e0e\u5bc6\u7801\u91cd\u7f6e\u3001\u590d\u6742\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u64cd\u4f5c\u7b49\u573a\u666f\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/Airwallex.png"},p=void 0,i={permalink:"/zh/blog/2021/11/03/airwallex-usercase",source:"@site/blog/2021/11/03/airwallex-usercase.md",title:"Apache APISIX \u5982\u4f55\u901a\u8fc7\u7f51\u5173\u5c42\u4e3a Airwallex \u6570\u636e\u4e3b\u6743\u4fdd\u9a7e\u62a4\u822a",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Airwallex \u7a7a\u4e2d\u4e91\u6c47\u662f\u5982\u4f55\u4f7f\u7528\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fdb\u884c\u7f51\u5173\u5c42\u90e8\u7f72\u6765\u52a0\u56fa\u6570\u636e\u4e3b\u6743\u65b9\u9762\u7684\u5efa\u8bbe\u4ee5\u53ca\u767b\u5f55\u4e0e\u5bc6\u7801\u91cd\u7f6e\u3001\u590d\u6742\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u64cd\u4f5c\u7b49\u573a\u666f\u3002",date:"2021-11-03T00:00:00.000Z",formattedDate:"2021\u5e7411\u67083\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:14.725,truncated:!0,authors:[{name:"\u674e\u6768"}],prevItem:{title:"\u6d45\u8c08 Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027",permalink:"/zh/blog/2021/11/04/skywalking"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff0810.15-10.31\uff09",permalink:"/zh/blog/2021/11/02/weekly-report-1031"}},c={authorsImageUrls:[void 0]},o=[{value:"\u4e3a\u4ec0\u4e48\u8981\u5904\u7406\u6570\u636e\u4e3b\u6743",id:"\u4e3a\u4ec0\u4e48\u8981\u5904\u7406\u6570\u636e\u4e3b\u6743",children:[{value:"\u4ec0\u4e48\u662f\u6570\u636e\u4e3b\u6743",id:"\u4ec0\u4e48\u662f\u6570\u636e\u4e3b\u6743",children:[],level:3},{value:"\u8de8\u56fd\u4e1a\u52a1\u6570\u636e\u4f20\u8f93\u73b0\u72b6",id:"\u8de8\u56fd\u4e1a\u52a1\u6570\u636e\u4f20\u8f93\u73b0\u72b6",children:[],level:3}],level:2},{value:"\u6253\u9020 Apache APISIX \u667a\u80fd\u8def\u7531\u7f51\u5173",id:"\u6253\u9020-apache-apisix-\u667a\u80fd\u8def\u7531\u7f51\u5173",children:[{value:"\u573a\u666f\u4e00\uff1a\u767b\u9646\u4e0e\u5bc6\u7801\u91cd\u7f6e",id:"\u573a\u666f\u4e00\u767b\u9646\u4e0e\u5bc6\u7801\u91cd\u7f6e",children:[],level:3},{value:"\u573a\u666f\u4e8c\uff1a\u590d\u6742\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u64cd\u4f5c",id:"\u573a\u666f\u4e8c\u590d\u6742\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u64cd\u4f5c",children:[{value:"\u6709\u72b6\u6001\u6a21\u5f0f",id:"\u6709\u72b6\u6001\u6a21\u5f0f",children:[],level:4},{value:"\u65e0\u72b6\u6001\u6a21\u5f0f",id:"\u65e0\u72b6\u6001\u6a21\u5f0f",children:[],level:4}],level:3}],level:2},{value:"\u5173\u4e8e\u6570\u636e\u4e3b\u6743\u7684\u6001\u5ea6",id:"\u5173\u4e8e\u6570\u636e\u4e3b\u6743\u7684\u6001\u5ea6",children:[],level:2}],u={toc:o};function s(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u5e26\u6765\u5173\u4e8e Airwallex \u7a7a\u4e2d\u4e91\u6c47\u662f\u5982\u4f55\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u7f51\u5173\u5c42\u90e8\u7f72\u6765\u52a0\u56fa\u6570\u636e\u4e3b\u6743\u65b9\u9762\u7684\u5efa\u8bbe\u3002")),(0,n.kt)("p",null,"\u4f5c\u8005\u674e\u6768\u535a\u58eb\uff0cApache APISIX Committer\uff0cAirwallex \u7a7a\u4e2d\u4e91\u6c47\u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba\uff0c\u8d1f\u8d23\u516c\u53f8\u6280\u672f\u5e73\u53f0\u7684\u6f14\u8fdb\u3002\u66fe\u5c31\u804c\u4e8e\u4e07\u5411\u533a\u5757\u94fe\u9886\u5bfc\u8fd0\u94fe\u76df\u548c\u82b1\u65d7\u96c6\u56e2\u9886\u5bfc OTC \u884d\u751f\u54c1\u98ce\u63a7\u5e73\u53f0\u3002"),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u5904\u7406\u6570\u636e\u4e3b\u6743"},"\u4e3a\u4ec0\u4e48\u8981\u5904\u7406\u6570\u636e\u4e3b\u6743"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.airwallex.com/cn"},"Airwallex \u7a7a\u4e2d\u4e91\u6c47"),"\u662f\u4e00\u5bb6\u5168\u7403\u91d1\u878d\u79d1\u6280\u516c\u53f8\uff0c\u5e2e\u52a9\u5168\u7403\u7528\u6237\u8fdb\u884c\u6536\u4ed8\u6b3e\u670d\u52a1\u4ee5\u53ca\u8de8\u5883\u652f\u4ed8\u7b49\u573a\u666f\u3002\u6784\u5efa\u4e86\u5168\u7403\u91d1\u878d\u57fa\u7840\u8bbe\u65bd\u5e73\u53f0\uff0c\u652f\u4ed8\u7f51\u7edc\u5df2\u8986\u76d6\u5168\u7403 130 \u591a\u4e2a\u56fd\u5bb6\u548c\u5730\u533a\u7684 50 \u4f59\u79cd\u8d27\u5e01\uff0c\u4e3a\u4f01\u4e1a\u63d0\u4f9b\u6570\u5b57\u5316\u7684\u91d1\u878d\u79d1\u6280\u4ea7\u54c1\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635907812263-929d9f89-2bee-403e-9641-2e18b077e1b3.png",alt:"\u7a7a\u4e2d\u4e91\u6c47\u4e1a\u52a1"})),(0,n.kt)("p",null,"\u5168\u7403\u5316\u670d\u52a1\u5185\u5bb9\u9700\u6c42\u4e0b\uff0c\u516c\u53f8\u4e1a\u52a1\u7684\u8fdb\u884c\u52bf\u5fc5\u8981\u8003\u8651\u6570\u636e\u4e3b\u6743\u7684\u98ce\u9669\u3002"),(0,n.kt)("h3",{id:"\u4ec0\u4e48\u662f\u6570\u636e\u4e3b\u6743"},"\u4ec0\u4e48\u662f\u6570\u636e\u4e3b\u6743"),(0,n.kt)("p",null,"\u6570\u636e\u4e3b\u6743\u662f\u6307\u7f51\u7edc\u7a7a\u95f4\u4e2d\u7684\u56fd\u5bb6\u4e3b\u6743\uff0c\u4f53\u73b0\u4e86\u56fd\u5bb6\u4f5c\u4e3a\u63a7\u5236\u6570\u636e\u6743\u7684\u4e3b\u4f53\u5730\u4f4d\u3002\u5728\u63cf\u8ff0\u6570\u636e\u4e3b\u6743\u91cd\u8981\u6027\u4e4b\u524d\uff0c\u6211\u4eec\u7b80\u5355\u4e3e\u51e0\u4e2a\u4f8b\u5b50\u3002"),(0,n.kt)("p",null,"GDPR\uff08General Data Protection Regulation\uff0c\u300a\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\u662f\u6b27\u76df\u5236\u5b9a\u7684\u76d1\u7ba1\u6587\u4ef6\uff0c\u662f\u9488\u5bf9\u4e2a\u4eba\u6570\u636e\u7684\u9690\u79c1\u548c\u4fdd\u62a4\u7684\u6761\u4f8b\u3002GDPR \u4e2d\u6709\u4e00\u6761\u6700\u57fa\u672c\u7684\u8981\u6c42\uff0c\u6240\u6709\u7684\u7528\u6237\u6570\u636e\u6536\u96c6\u884c\u4e3a\u90fd\u9700\u8981\u7ecf\u8fc7\u7528\u6237\u7684\u540c\u610f\uff0c\u540c\u65f6\u8fd8\u8981\u4fdd\u8bc1\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u6e05\u9664\u4e2a\u4eba\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u6240\u4ee5\u5982\u679c Airwallex \u7a7a\u4e2d\u4e91\u6c47\u8981\u628a\u6b27\u6d32\u7684\u6570\u636e\u8f6c\u79fb\u5230\u5176\u4ed6\u5730\u533a\u65f6\uff0c\u5c31\u5fc5\u987b\u8981\u4fdd\u8bc1\u7b2c\u4e09\u65b9\u56fd\u5bb6\u5bf9\u6570\u636e\u4e3b\u6743\u7684\u8981\u6c42\u7b26\u5408\u6b27\u76df\u5bf9\u6570\u636e\u4e3b\u6743\u7684\u8981\u6c42\u3002"),(0,n.kt)("p",null,"\u5173\u4e8e\u6570\u636e\u9700\u8981\u7b26\u5408\u5730\u65b9\u6cd5\u6848\u7684\u95ee\u9898\uff0c\u8de8\u56fd\u4e1a\u52a1\u4e0b\u786e\u5b9e\u9700\u8981\u987e\u8651\u5f88\u591a\u3002"),(0,n.kt)("p",null,"\u6bd4\u5982\u300a\u7f8e\u56fd\u7231\u56fd\u8005\u6cd5\u6848\u300b\u8981\u6c42\u6240\u6709\u5728\u7f8e\u56fd\u5883\u5185\u5b58\u50a8\u6570\u636e\uff0c\u6216\u8005\u7f8e\u56fd\u516c\u53f8\u5b58\u50a8\u7684\u6570\u636e\uff0c\u90fd\u5728\u7f8e\u56fd\u7684\u76d1\u7ba1\u8303\u56f4\uff0c\u7f8e\u56fd\u7684\u53f8\u6cd5\u90e8\u3001CIA \u53ef\u4ee5\u8981\u6c42\u516c\u53f8\u63d0\u4f9b\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u5728 2013 \u5e74 911 \u4e8b\u4ef6\u4e4b\u540e\uff0c\u7f8e\u56fd\u53f8\u6cd5\u90e8\u8981\u6c42\u5fae\u8f6f\u63d0\u4f9b\u5176\u5728\u7231\u5c14\u5170\u670d\u52a1\u5668\u4e0a\u5b58\u50a8\u7684\u4e00\u4e9b\u90ae\u4ef6\u4fe1\u606f\uff0c\u5f53\u65f6\u5fae\u8f6f\u4ee5\u4f1a\u8fdd\u53cd\u6b27\u76df\u76d1\u7ba1\u8981\u6c42\u7684\u7406\u7531\u62d2\u7edd\u4e86\u7f8e\u56fd\u53f8\u6cd5\u90e8\u8bf7\u6c42\u3002\u7136\u540e\u7f8e\u56fd\u53f8\u6cd5\u90e8\u5c06\u5fae\u8f6f\u544a\u4e0a\u6cd5\u5ead\uff0c\u4f46\u662f\u6700\u540e\u5fae\u8f6f\u80dc\u8bc9\u3002\u540e\u6765\uff0c\u7f8e\u56fd\u5f88\u591a\u516c\u53f8\u4e3a\u4e86\u907f\u514d\u6570\u636e\u4e3b\u6743\u53cd\u9762\u7684\u98ce\u9669\uff0c\u628a\u6570\u636e\u4e2d\u5fc3\u76f4\u63a5\u653e\u5230\u4e86\u6b27\u6d32\uff0c\u8ba4\u4e3a\u8fd9\u6837\u5c31\u5b89\u5168\u4e86\u3002\u4f46\u662f\u6700\u8fd1\u5728\u4e00\u4e9b\u6848\u4f8b\u4e2d\u6cd5\u5b98\u5224\u5b9a\uff0c\u7f8e\u56fd\u4ecd\u7136\u662f\u6709\u6743\u9650\u53bb\u7d22\u8981\u7f8e\u56fd\u516c\u53f8\u5728\u6b27\u6d32\u7684\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u4ece\u4ee5\u4e0a\u4e8b\u4ef6\u6765\u770b\uff0c\u6570\u636e\u4e3b\u6743\u786e\u5b9e\u4e3a Airwallex \u7a7a\u4e2d\u4e91\u6c47\u7684\u5168\u7403\u4e1a\u52a1\u5e26\u4e86\u5f88\u5927\u7684\u6311\u6218\uff0c\u5982\u4f55\u5728\u4e1a\u52a1\u4e2d\u5c06\u6570\u636e\u4e3b\u6743\u95ee\u9898\u5904\u7406\u5f97\u5f53\u4e5f\u53d8\u5f97\u5c24\u4e3a\u91cd\u8981\u3002"),(0,n.kt)("h3",{id:"\u8de8\u56fd\u4e1a\u52a1\u6570\u636e\u4f20\u8f93\u73b0\u72b6"},"\u8de8\u56fd\u4e1a\u52a1\u6570\u636e\u4f20\u8f93\u73b0\u72b6"),(0,n.kt)("p",null,"\u7531\u4e8e\u4e1a\u52a1\u6d89\u53ca\u5230\u8de8\u56fd\u5c5e\u6027\uff0c\u6240\u4ee5\u5728\u6280\u672f\u5904\u7406\u4e2d\u4f1a\u9047\u5230\u4e00\u4e9b\u95ee\u9898\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635907812252-3d427136-b986-4ac5-a853-d9bbbb4439d3.png",alt:"\u4e1a\u52a1\u6d41\u7a0b"})),(0,n.kt)("p",null,"\u8de8\u56fd\u516c\u53f8\u7684\u6570\u636e\u6d41\u901a\u4f53\u73b0\u5728\u5404\u4e2a\u5730\u533a\u4e4b\u95f4\u7684\u591a\u79cd\u4ea4\u4e92\u3002\u5728\u6ca1\u6709\u6570\u636e\u4e3b\u6743\u8981\u6c42\u65f6\uff0c\u6570\u636e\u53ef\u4ee5\u5b58\u653e\u5728\u6b27\u6d32\uff0c\u7136\u540e\u540c\u6b65\u5230\u4e9a\u6d32\u6216\u8005\u5168\u7403\u4efb\u4f55\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u3002\u540e\u7eed\u8fdb\u884c\u6570\u636e\u4e1a\u52a1\u8bf7\u6c42\u65f6\uff0c\u53ea\u9700\u5c06\u4e1a\u52a1\u5c01\u88c5\u5230\u4e00\u4e2a\u670d\u52a1\u91cc\u5373\u53ef\u3002"),(0,n.kt)("p",null,"\u4f46\u5728\u5f53\u4e0b\u91cd\u89c6\u6570\u636e\u4e3b\u6743\u7684\u65f6\u4ee3\uff0c\u4e0a\u8ff0\u65b9\u6cd5\u5c31\u884c\u4e0d\u901a\u4e86\u3002\u56e0\u4e3a\u5f88\u591a\u6570\u636e\u7684\u6d41\u901a\u5f00\u59cb\u53d7\u7ba1\u63a7\uff0c\u65e0\u6cd5\u6cbf\u7528\u4e4b\u524d\u7684\u67b6\u6784\u3002\u672c\u56fd\u6570\u636e\u53ea\u5141\u8bb8\u672c\u56fd\u5f53\u5730\u5904\u7406\uff0c\u4e0d\u53ef\u8de8\u56fd\u8bf7\u6c42\u5904\u7406\u3002\u6240\u4ee5\u5f53\u6211\u4eec\u628a\u7528\u6237\u6570\u636e\u5b58\u50a8\u5728\u7528\u6237\u672c\u56fd\u8303\u56f4\uff08\u5373\u4e0b\u56fe\u300c\u72ec\u81ea\u5c01\u95ed\u300d\u67b6\u6784\uff09\u5185\u65f6\uff0c\u95ee\u9898\u5c31\u5f00\u59cb\u6d8c\u73b0\u4e86\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635907812255-73d11508-d9ec-4ac6-b0a0-5913a1acb2c8.png",alt:"\u5355\u72ec\u90e8\u7f72"})),(0,n.kt)("p",null,"\u9996\u5148\u8fd9\u79cd\u60c5\u51b5\u4e0b\u65e0\u6cd5\u8ba9\u670d\u52a1\u505a\u5230\u5b8c\u5168\u65e0\u72b6\u6001\u6a21\u5f0f\uff0c\u540c\u65f6\u5728\u5b9e\u9645\u4e1a\u52a1\u4e2d\u7edd\u5927\u90e8\u5206\u573a\u666f\u5e76\u4e0d\u4f1a\u8fd9\u4e48\u7b80\u5355\u3002\u56e0\u4e3a\u4e1a\u52a1\u7684\u5b8c\u6210\uff0c\u52bf\u5fc5\u4f1a\u6d89\u53ca\u5230\u591a\u96c6\u7fa4\u4e4b\u95f4\u7684\u4ea4\u4e92\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635907812257-962b1247-f5ca-448f-904d-fd47c3ea4586.png",alt:"\u591a\u96c6\u7fa4\u4ea4\u4e92"})),(0,n.kt)("p",null,"\u6240\u4ee5\u5728\u6570\u636e\u5b58\u50a8\u65b9\u9762\uff0c\u9996\u5148\u8981\u89e3\u51b3\u7684\u95ee\u9898\u5c31\u662f\u5728\u6570\u636e\u5165\u53e3\u5904\u8fdb\u884c\u5730\u533a/\u533a\u57df\u8fa8\u522b\u914d\u7f6e\u3002\u5c31\u50cf\u4e9a\u9a6c\u900a\u4e00\u6837\uff0c\u7528\u6237\u5728\u7f8e\u533a\u8d2d\u4e70\u7684\u7535\u5b50\u4e66\uff0c\u662f\u65e0\u6cd5\u7528\u56fd\u533a\u8d26\u53f7\u4e0b\u8f7d\u5230\u81ea\u5df1 Kindle \u4e0a\u3002\u56e0\u4e3a\u5404\u4e2a\u56fd\u5bb6\uff08\u533a\u57df\uff09\u4e4b\u95f4\u7684\u6570\u636e\u662f\u5b8c\u5168\u9694\u79bb\u7684\u3002\u53ea\u8981\u7528\u6237\u70b9\u51fb\u4e86\u4e9a\u9a6c\u900a\u4e2d\u56fd\u7ad9\uff0c\u5c31\u610f\u5473\u7740\u4f60\u7684\u6240\u6709\u8bf7\u6c42\u90fd\u4e0d\u4f1a\u8de8\u51fa\u4e2d\u56fd\u6570\u636e\u4e2d\u5fc3\u3002"),(0,n.kt)("p",null,"\u4e9a\u9a6c\u900a\u7684\u8fd9\u79cd\u64cd\u4f5c\u6a21\u5f0f\u5176\u5b9e\u5c31\u662f\u8ba9\u7528\u6237\u81ea\u5df1\u51b3\u5b9a\u5c06\u4e2a\u4eba\u6570\u636e\u5b58\u50a8\u5728\u54ea\u4e2a\u5730\u533a\uff0c\u4f46\u662f\u968f\u4e4b\u5e26\u6765\u7684\u95ee\u9898\u5c31\u662f\u5355\u4eba\u591a\u5730\u533a\u8d26\u53f7\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u4e8e\u4e2a\u4eba\u7528\u6237\u800c\u8a00\u662f\u975e\u5e38\u4e0d\u65b9\u4fbf\u8fdb\u884c\u7ba1\u7406\u4e0e\u540c\u6b65\u7684\u3002"),(0,n.kt)("p",null,"\u6240\u4ee5\u5bf9\u4e8e\u591a\u5730\u533a\u591a\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u5e94\u8be5\u8fd8\u9700\u8981\u4e00\u4e2a\u300c\u5229\u5668\u300d\u6765\u8fdb\u884c\u52a8\u6001\u5206\u914d\u51b3\u5b9a\u540e\u7eed\u6570\u636e\u8d70\u5411\u3002"),(0,n.kt)("h2",{id:"\u6253\u9020-apache-apisix-\u667a\u80fd\u8def\u7531\u7f51\u5173"},"\u6253\u9020 Apache APISIX \u667a\u80fd\u8def\u7531\u7f51\u5173"),(0,n.kt)("p",null,"\u6240\u4ee5\u57fa\u4e8e\u4e0a\u8ff0\u4e1a\u52a1\u573a\u666f\uff0c\u6211\u4eec\u51b3\u5b9a\u91c7\u53d6\u300c\u667a\u80fd\u8def\u7531\u300d\u6a21\u5f0f\uff0c\u901a\u8fc7\u7f51\u5173\u6765\u51b3\u5b9a\u4e0d\u540c\u7c7b\u578b\u6570\u636e\u8bf7\u6c42\u7684\u843d\u811a\u70b9\u4e0e\u8d70\u5411\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635907812259-59637175-4beb-4e1e-a813-bb7c40a5acf9.png",alt:"\u667a\u80fd\u8def\u7531\u6a21\u5f0f"})),(0,n.kt)("p",null,"\u5982\u4e0a\u56fe\u5c31\u662f\u300c\u667a\u80fd\u8def\u7531\u300d\u6a21\u5f0f\u4e0b\u7684\u67b6\u6784\u56fe\u3002\u7f51\u5173\u4e3b\u8981\u5206\u4e3a\u4e24\u5c42\uff0c\u7b2c\u4e00\u5c42\u8d1f\u8d23\u8def\u7531\u8bf7\u6c42\uff0c\u6839\u636e\u6761\u4ef6\u6765\u5224\u65ad\u8bf7\u6c42\u5e94\u5230\u8fbe\u54ea\u4e2a\u6570\u636e\u4e2d\u5fc3\uff1b\u7b2c\u4e8c\u5c42\u7f51\u5173\u5219\u662f\u8fdb\u884c\u6d41\u91cf\u8f6c\u53d1\u3002\u6240\u4ee5\u7f51\u5173\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e2d\u4e3b\u8981\u89e3\u51b3\u7684\u95ee\u9898\u5c31\u662f\u7ed9\u6bcf\u4e2a\u8bf7\u6c42\u5206\u914d\u597d\u300c\u5f52\u5bbf\u300d\uff0c\u7136\u540e\u8fdb\u884c\u540e\u7eed\u7684\u6d41\u91cf\u8f6c\u53d1\u4e0e\u4e1a\u52a1\u5904\u7406\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6d41\u91cf\u4fe1\u606f\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e0d\u660e\u8eab\u4efd\u8bf7\u6c42"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c\uff1a\u7528\u6237\u7b2c\u4e00\u6b21\u6ce8\u518c\u65f6\u4fe1\u606f\u4e0d\u5168\uff0c\u4e0d\u77e5\u9053\u6b64\u7528\u6237\u7684\u6ce8\u518c\u6570\u636e\u653e\u5728\u54ea\u4e2a\u6570\u636e\u4e2d\u5fc3"),(0,n.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\uff1a\u6bd4\u5982 HTML\u3001CSS\uff0c\u8fd9\u4e9b\u4e0d\u9700\u8981\u77e5\u9053\u7528\u6237\u8eab\u4efd"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5df2\u77e5\u8eab\u4efd\u8bf7\u6c42"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u767b\u5f55\uff1a\u7528\u6237\u767b\u5f55\uff0c\u8bf4\u660e\u5df2\u5b8c\u6210\u6ce8\u518c\u6d41\u7a0b\uff0c\u6b64\u65f6\u5df2\u77e5\u6570\u636e\u4e2d\u5fc3\u5728\u54ea"),(0,n.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u91cd\u7f6e\uff1a\u53ef\u4ee5\u901a\u8fc7\u7528\u6237\u540d\u3001\u624b\u673a\u53f7\u3001\u90ae\u7bb1\u3001\u57ce\u5e02\u7b49\u4fe1\u606f\u53cd\u67e5\u6570\u636e\u5728\u54ea\uff0c\u518d\u8fdb\u884c\u540e\u7eed\u8bf7\u6c42\u7684\u5206\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u590d\u6742\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u64cd\u4f5c")))),(0,n.kt)("p",null,"\u5728\u7f51\u5173\u5c42\u9762\u7684\u90e8\u7f72\u4e0a\uff0c\u6211\u4eec\u91c7\u7528\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX"),"\u3002\u63a5\u4e0b\u6765\u5c31\u7b80\u5355\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e0b\uff0c\u6211\u4eec\u5982\u4f55\u57fa\u4e8e Apache APISIX \u7684 API \u7f51\u5173\u6765\u8fdb\u884c\u52a8\u6001\u3001\u591a\u6570\u636e\u4e2d\u5fc3\u7684\u8def\u7531\u573a\u666f\u5904\u7406\u3002"),(0,n.kt)("h3",{id:"\u573a\u666f\u4e00\u767b\u9646\u4e0e\u5bc6\u7801\u91cd\u7f6e"},"\u573a\u666f\u4e00\uff1a\u767b\u9646\u4e0e\u5bc6\u7801\u91cd\u7f6e"),(0,n.kt)("p",null,"\u7528\u6237\u767b\u5f55\u65f6\u6211\u4eec\u80fd\u62ff\u5230\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4f46\u662f\u5bc6\u7801\u662f\u4e0d\u80fd\u4f5c\u4e3a\u8bc6\u522b\u4fe1\u606f\u7684\uff0c\u800c\u4e14\u4e5f\u4e0d\u5141\u8bb8\u968f\u4fbf\u4f20\u9012\u3002\u6240\u4ee5\u53ea\u80fd\u6839\u636e\u7528\u6237\u540d\u67e5\u8be2\uff0c\u5224\u65ad\u8fd9\u4e2a\u7528\u6237\u662f\u5c5e\u4e8e\u54ea\u4e2a\u5730\u533a\u7684\u3002\u4e1a\u52a1\u4e0a\u662f\u9700\u8981\u8bbe\u8ba1\u4e00\u4e2a\u5168\u7403\u80fd\u591f\u540c\u6b65\u7684\u6570\u636e\u5b58\u50a8\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635907812260-69fbda9e-56cc-443d-8ea7-a1f10dba041e.png",alt:"\u767b\u9646\u6a21\u5f0f"})),(0,n.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u5982\u4e0a\u6240\u793a\u7684\u6570\u636e\u5b58\u50a8\u67b6\u6784\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u5168\u7403\u5316\u7684\u6570\u636e\u540c\u6b65\u3002\u6bd4\u5982\uff1a\u4e00\u4f4d\u7528\u6237\u5728\u4e2d\u56fd\u6ce8\u518c\u8d26\u53f7\uff0c\u6211\u4eec\u901a\u8fc7 CDC\uff08Change Data Capture\uff09\u628a\u76f8\u5173\u6570\u636e\u8f6c\u5316\u6210 Kafka message\uff0c\u901a\u8fc7\u4e13\u95e8\u7684 listener \u8fdb\u884c\u672c\u5730\u6d88\u606f\u7684\u63a5\u6536\uff0c\u7136\u540e\u505a\u8fdb\u4e00\u6b65\u7684\u8f6c\u5316\u3002\u5982\uff1a\u53bb\u9664\u7528\u6237\u540d\u3001Email \u7b49\u4e2a\u4eba\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u90fd\u662f\u4e0d\u80fd\u8de8\u5883\u5b58\u50a8\u7684\u3002"),(0,n.kt)("p",null,"\u5728\u8f6c\u5316\uff08Transformer\uff09\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u8fdb\u884c\u52a0\u76d0\u6216\u8005\u54c8\u5e0c\u52a0\u5bc6\u5904\u7406\uff0c\u6700\u540e\u5728\u7f51\u5173\u5c42\u8fdb\u884c\u76f8\u5173\u7684\u4e1a\u52a1\u8bf7\u6c42\u5904\u7406\uff0c\u5373\u6570\u636e\u533a\u57df\u5206\u914d\u53ca\u540e\u7eed\u7684\u6d41\u91cf\u8f6c\u53d1\u3002\u5b9e\u73b0\u57fa\u4e8e Apache APISIX \u7f51\u5173\u5c42\u9762\u7684\u4e1a\u52a1\u5904\u7406\u3002"),(0,n.kt)("h3",{id:"\u573a\u666f\u4e8c\u590d\u6742\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u64cd\u4f5c"},"\u573a\u666f\u4e8c\uff1a\u590d\u6742\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u64cd\u4f5c"),(0,n.kt)("p",null,"\u4e1a\u52a1\u64cd\u4f5c\u662f\u5f53\u64cd\u4f5c\u4e00\u7b14\u6570\u636e\u65f6\uff0c\u6211\u5e94\u8be5\u7528\u600e\u6837\u7684\u65b9\u5f0f\u51b3\u5b9a\u8fd9\u7b14\u6570\u636e\u53bb\u54ea\u91cc\u6267\u884c\u3002\u5e38\u89c4\u7684\u4e1a\u52a1\u64cd\u4f5c\u6bd4\u5982\u67d0\u7528\u6237\u67e5\u8be2\u81ea\u5df1\u7684\u8d26\u6237\u4fe1\u606f\u6216\u5386\u53f2\u8bb0\u5f55\u7b49\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e00\u822c\u5206\u4e3a\u4e24\u79cd\u6a21\u5f0f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635907812247-123eca67-5039-487c-9d02-f3881e16c411.png",alt:"\u4e1a\u52a1\u64cd\u4f5c\u6a21\u5f0f"})),(0,n.kt)("h4",{id:"\u6709\u72b6\u6001\u6a21\u5f0f"},"\u6709\u72b6\u6001\u6a21\u5f0f"),(0,n.kt)("p",null,"\u6709\u72b6\u6001\u6a21\u5f0f\u4e00\u822c\u4f1a\u5229\u7528 Session\uff08\u5982\u4e0a\u56fe\u5de6\u4fa7\uff09\uff0c\u5ba2\u6237\u7aef\u767b\u5f55\u5b8c\u6210\u540e Sever \u4f1a\u5c06\u9644\u5e26 Session ID \u7684 Cookie \u7ed9\u5230\u5ba2\u6237\u7aef\u3002\u5728\u8bf7\u6c42\u65f6\uff0c\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u7f51\u5173\u5c42\u4f1a\u4f7f\u7528 Cookie \u4e2d\u7684\u4fe1\u606f\u67e5\u8be2\u7528\u6237\u6240\u5904\u7684\u5730\u533a\u3002\u5373\u4fbf\u7528\u6237\u66f4\u6362\u4e86\u670d\u52a1\u5668\uff0c\u4f9d\u7136\u53ef\u4ee5\u4fdd\u6301\u767b\u5f55\u72b6\u6001\uff0c\u7cfb\u7edf\u4e5f\u53ef\u4ee5\u5224\u5b9a\u4ece\u54ea\u91cc\u83b7\u53d6\u6570\u636e\u3002\n\u6bd4\u5982\u7528\u6237\u6b63\u5728\u8fdb\u884c\u8de8\u56fd\u65c5\u884c\uff0c\u6700\u521d\u5728\u6b27\u6d32\u767b\u5f55\u7cfb\u7edf\uff0c\u5750\u98de\u673a\u6765\u5230\u4e86\u4e9a\u6d32\u3002\u5728\u4e9a\u6d32\u767b\u5f55\u65f6\u7cfb\u7edf\u4f1a\u901a\u8fc7 Session \u5224\u65ad\u8be5\u7528\u6237\u4fe1\u606f\u5904\u4e8e\u54ea\u4e2a\u6570\u636e\u4e2d\u5fc3\uff0c\u5c31\u4f1a\u628a\u8bf7\u6c42\u5206\u53d1\u7ed9\u5bf9\u5e94\u6570\u636e\u4e2d\u5fc3\u8fdb\u884c\u540e\u7eed\u4e1a\u52a1\u64cd\u4f5c\u3002"),(0,n.kt)("h4",{id:"\u65e0\u72b6\u6001\u6a21\u5f0f"},"\u65e0\u72b6\u6001\u6a21\u5f0f"),(0,n.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u4e0d\u4f1a\u4ec5\u63d0\u4f9b\u7f51\u9875\u8bbf\u95ee\u8fd9\u6837\u4e00\u4e2a\u529f\u80fd\uff0c\u8fd8\u4f1a\u6709\u4e00\u4e9b API \u8bbf\u95ee\u8fdb\u884c\u96c6\u6210\u3002\u6240\u4ee5\u5f53\u8fdb\u884c API \u8bbf\u95ee\u65f6\uff0c\u901a\u8fc7 Cookie \u4f20\u9012 Session ID \u7684\u65b9\u5f0f\u662f\u4e0d\u5408\u9002\u7684\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u91c7\u7528\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684 Token\uff08\u5982\u4e0a\u56fe\u53f3\u4fa7\uff09\u3002Token \u5185\u4f1a\u5305\u542b\u6240\u5904\u6570\u636e\u4e2d\u5fc3\u7684\u5177\u4f53\u4fe1\u606f\uff0c\u8fd9\u6837 Apache APISIX \u5c31\u53ef\u4ee5\u6839\u636e Token \u51b3\u5b9a\u8bbf\u95ee\u54ea\u4e2a\u6570\u636e\u4e2d\u5fc3\u3002"),(0,n.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u5f53\u540e\u7eed\u8fdb\u884c\u4e1a\u52a1\u6269\u5c55\u65f6\uff0c\u80fd\u591f\u4fdd\u6301\u52a8\u6001\u6027\u3002\u5982\u679c\u6700\u521d\u662f\u9759\u6001\u8bbe\u8ba1\uff0c\u57fa\u4e8e\u6700\u5f00\u59cb\u6ce8\u518c\u65f6\u7684\u4fe1\u606f\u51b3\u5b9a\u6570\u636e\u4e2d\u5fc3\uff0c\u90a3\u4e48\u672a\u6765\u51fa\u73b0\u8de8\u6570\u636e\u4e2d\u5fc3\u573a\u666f\u65f6\u5c31\u4f1a\u975e\u5e38\u96be\u5904\u7406\u3002"),(0,n.kt)("p",null,"\u65e0\u72b6\u6001\u6a21\u5f0f\u4e0b\u8fd8\u6709\u4e00\u79cd\u573a\u666f\u4e5f\u662f\u6bd4\u8f83\u590d\u6742\u7684\uff0c\u5c31\u662f\u7528\u6237\u6ce8\u518c\u3002\u56e0\u4e3a\u6ce8\u518c\u65f6\u53ea\u80fd\u6839\u636e\u7528\u6237\u586b\u5199\u7684\u6ce8\u518c\u4fe1\u606f\uff0c\u51b3\u5b9a\u653e\u5230\u54ea\u4e2a\u6570\u636e\u4e2d\u5fc3\u3002\u4f46\u5047\u5982\u540e\u671f\u7528\u6237\u79fb\u6c11\u4e86\uff0c\u6216\u8005\u516c\u53f8\u8fc1\u79fb\u5230\u522b\u7684\u5730\u65b9\uff0c\u6211\u4eec\u5c31\u8981\u505a\u76f8\u5173\u7684\u6570\u636e\u6e05\u9664\uff0c\u628a\u7528\u6237\u7684\u4ea4\u6613\u6570\u636e\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u7b49\u5168\u90e8\u8fc1\u79fb\u5230\u53e6\u5916\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u3002\u8fd9\u79cd\u6570\u636e\u5207\u6362\u6210\u672c\u5176\u5b9e\u662f\u6bd4\u8f83\u9ad8\u7684\uff0c\u76ee\u524d\u6211\u4eec\u5185\u90e8\u4e5f\u662f\u652f\u6301\u7528\u6237\u5207\u6362\u6570\u636e\u4e2d\u5fc3\u8fd9\u6837\u590d\u6742\u7684\u573a\u666f\uff0c\u4f46\u540e\u9762\u4e5f\u4f1a\u5f00\u59cb\u8003\u8651\u600e\u6837\u51cf\u5c11\u5207\u6362\u6570\u636e\u4e2d\u5fc3\u5bf9\u6574\u4f53\u67b6\u6784\u7684\u5f71\u54cd\u3002"),(0,n.kt)("h2",{id:"\u5173\u4e8e\u6570\u636e\u4e3b\u6743\u7684\u6001\u5ea6"},"\u5173\u4e8e\u6570\u636e\u4e3b\u6743\u7684\u6001\u5ea6"),(0,n.kt)("p",null,"\u5176\u5b9e\u524d\u8fb9\u6211\u4eec\u63d0\u5230\u7684\u6240\u6709\u5185\u5bb9\uff0c\u90fd\u5728\u8bf4\u660e\u4e00\u4e2a\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u300c\u6570\u636e\u548c\u6240\u5c5e\u5730\u300d\u3002\u4f46\u662f\u5728\u8fdb\u884c\u6570\u636e\u6240\u5c5e\u5730\u5212\u5206\u4e4b\u524d\uff0c\u6709\u4e00\u4e2a\u524d\u63d0\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u90a3\u5c31\u662f\u4fe1\u606f\u5904\u7406\u5ea6\u3002"),(0,n.kt)("p",null,"\u6570\u636e\u662f\u654f\u611f\u7684\uff0c\u5f53\u6211\u4eec\u62ff\u5230\u7528\u6237\u6570\u636e\u8fdb\u884c\u6570\u636e\u5206\u6790/\u5546\u4e1a BI \u6216\u5176\u4ed6\u5927\u6570\u636e\u5206\u6790\u65f6\uff0c\u662f\u4e0d\u80fd\u76f4\u63a5\u62ff\u6765\u5c31\u7acb\u5373\u4f7f\u7528\u7684\u3002\u8981\u5148\u5728\u4e2a\u4eba\u5c42\u9762\u8fdb\u884c\u654f\u611f\u4fe1\u606f\u7684\u8fc7\u6ee4\uff0c\u9664\u6b64\u4e4b\u5916\u8fd8\u8981\u5728\u6570\u636e\u805a\u5408\u5c42\u9762\uff0c\u5c06\u540c\u4e00\u5730\u533a\u6570\u636e\u6c47\u805a\u770b\u6574\u4f53\u6570\u636e\u65f6\uff0c\u518d\u5bf9\u7528\u6237\u4fe1\u606f\u8fdb\u884c\u518d\u6b21\u62bd\u8c61\u5904\u7406\uff0c\u8fbe\u5230\u65e0\u6cd5\u5b8c\u5168\u8bc6\u522b\u7528\u6237\u7684\u72b6\u6001\u3002"),(0,n.kt)("p",null,"\u8fd9\u6837\u624d\u7b26\u5408\u76d1\u7ba1\u7684\u8981\u6c42\uff0c\u624d\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u4fe1\u606f\u7528\u4e8e\u6570\u636e\u5206\u6790\u3002\u8fd9\u662f\u5173\u4e8e\u6570\u636e\u5904\u7406\u6700\u6839\u672c\u7684\u8981\u6c42\uff0c\u6211\u4eec\u5bf9\u6570\u636e\u76d1\u7ba1\u662f\u89c4\u8303\u5316\u7684\u540c\u65f6\uff0c\u4e5f\u8981\u4fdd\u8bc1\u7528\u6237\u4fe1\u606f\u7684\u300c\u5b89\u5168\u5316\u300d\u3002"),(0,n.kt)("p",null,"\u5f53\u7136\uff0c\u8fd9\u6b21\u6240\u5206\u4eab\u7684\u57fa\u4e8e Apache APISIX \u8fdb\u884c\u7f51\u5173\u5c42\u9762\u5904\u7406\u6570\u636e\u4e3b\u6743\u53ea\u662f\u5728\u300c\u5e94\u5bf9\u6570\u636e\u4e3b\u6743\u98ce\u9669\u300d\u8fc7\u7a0b\u4e2d\u6240\u505a\u7684\u4e00\u90e8\u5206\u3002\u6211\u4eec\u671f\u671b Apache APISIX \u7f51\u5173\u53ef\u4ee5\u5e2e\u52a9 Airwallex \u5728\u6570\u636e\u4e3b\u6743\u5c42\u9762\u505a\u7684\u66f4\u597d\u66f4\u5b8c\u5584\uff0c\u76ee\u524d\u6765\u770b\uff0cApache APISIX \u5df2\u7ecf\u505a\u5230\u4e86\u6211\u4eec\u671f\u671b\u7684\u90a3\u6837\u3002"))}s.isMDXComponent=!0}}]);