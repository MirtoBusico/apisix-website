"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9339],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=n,g=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},37511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(25773),n=(a(27378),a(35318));const i={title:"Weekly Report (Aug 23 - Aug 29)",keywords:["APISIX","API Gateway","Community Weekly","Contributor","Good first issue"],description:"The Apache APISIX Community Weekly Newsletter hopes to help community members better understand the weekly progress of the Apache APISIX community.",tags:["Community"]},o=void 0,s={permalink:"/blog/2021/08/30/weekly-report",source:"@site/blog/2021/08/30/weekly-report.md",title:"Weekly Report (Aug 23 - Aug 29)",description:"The Apache APISIX Community Weekly Newsletter hopes to help community members better understand the weekly progress of the Apache APISIX community.",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.38,truncated:!0,authors:[],prevItem:{title:"Webinar\uff5c Apache APISIX Ingress Community Meeting",permalink:"/blog/2021/08/30/ingress-meeting"},nextItem:{title:"Release Apache APISIX 2.9",permalink:"/blog/2021/08/27/release-apache-apisix-2.9"}},p={authorsImageUrls:[]},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Contributor statistics",id:"contributor-statistics",children:[],level:2},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #4241",id:"issue-4241",children:[],level:3},{value:"Issue #4441",id:"issue-4441",children:[],level:3},{value:"Issue #3601",id:"issue-3601",children:[],level:3},{value:"Issue #3931",id:"issue-3931",children:[],level:3}],level:2},{value:"Feature highlights of the week",id:"feature-highlights-of-the-week",children:[],level:2},{value:"Recommended blog posts of the week",id:"recommended-blog-posts-of-the-week",children:[],level:2}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Apache APISIX has grown as a community from the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements cannot be achieved without the joint efforts of our community partners."),(0,n.kt)("p",null,'"The Apache APISIX Community Weekly Newsletter hopes to help community members better grasp the weekly progress of the Apache APISIX community and facilitate your participation in the Apache APISIX community.'),(0,n.kt)("p",null,"We've also put together some issues for those new to the community! If you are interested, don't miss them!"),(0,n.kt)("h2",{id:"contributor-statistics"},"Contributor statistics"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630393952402-4965d35c-6b05-4f71-9966-2fea7f7939d3.JPG",alt:"Number of new contributors"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630393952406-9f61c39b-ea9e-4451-bd26-ab845a32a222.JPG",alt:"New contributors this week"})),(0,n.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,n.kt)("h3",{id:"issue-4241"},"Issue #4241"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Link"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4241"},"https://github.com/apache/apisix/issues/4241")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem Description"),': Now when adding the jwt-auth plugin to a service/route, the jwt token does not contain a "key" declaration.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "iss": "http://127.0.0.1",\n  "client_id": "application1",\n  "sub": "1234567890",\n  "iat": 1516239022\n}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630393952407-b6a26364-6c36-47f6-82c2-81514c31f20b.PNG",alt:"Screenshot of issue description"})),(0,n.kt)("h3",{id:"issue-4441"},"Issue #4441"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Link"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4441"},"Issue #4441")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Issue Description"),': Now APISIX stream_routes parameter "remote_addr" only support single ip, need to support multiple ip or match rule like "192.168.0.0/16", like http routing parameter "remote_addr".'),(0,n.kt)("h3",{id:"issue-3601"},"Issue #3601"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Link"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/3601"},"Issue #3601")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Issue Description"),": Currently APISIX only has unit tests for request-response gRPC proxies, and no tests related to streaming gRPC. Need to add test cases for streaming gRPC to it."),(0,n.kt)("h3",{id:"issue-3931"},"Issue #3931"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Link"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/3931"},"Issue #3931")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Issue Description"),": http_to_https in the redirect plugin lacks curl tests, need to add curl tests for http_to_https in the redirect plugin and update the documentation ",(0,n.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/redirect"},"Apache APISIX redirect plugin"),"."),(0,n.kt)("h2",{id:"feature-highlights-of-the-week"},"Feature highlights of the week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"uri-blocker support for ignoring case when matching request URIs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Related PR"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4868"},"https://github.com/apache/apisix/pull/4868")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contributor"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/okaybase"},"okaybase")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"kafka-logger Support for configuring acks parameters for kafka producers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Related PR"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4878"},"https://github.com/apache/apisix/pull/4878")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contributors"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/okaybase"},"okaybase")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"kafka-logger supports configuring the cluster name parameter"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Related PR"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4876"},"https://github.com/apache/apisix/pull/4876")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"contributor"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tzssangglass"},"tzssangglass")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"referer-restriction Support for configuring blacklist"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Related PR"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4916"},"https://github.com/apache/apisix/pull/4916")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contributor"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/okaybase"},"okaybase"))))),(0,n.kt)("h2",{id:"recommended-blog-posts-of-the-week"},"Recommended blog posts of the week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/25/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication/"},"Centralized Authentication with the OpenID Connect Plugin for Apache APISIX"),": Apache APISIX is a dynamic, real-time, high-performance API gateway that provides rich traffic management features such as load balancing, dynamic upstream, canary release, service meltdown, authentication, observability, etc. Apache APISIX not only supports plug-in dynamic changes and Apache APISIX's OpenID Connect plug-in supports OpenID, which allows users to replace authentication from traditional authentication mode to centralized authentication mode.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua"},"Why did APISIX choose the Nginx + Lua technology stack?"),': Provides the historical background and advantages of the Nginx + Lua technology stack chosen by APISIX, noting that " High performance + flexibility" is what makes APISIX stand out from other gateways.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/27/release-apache-apisix-2.9/"},"Apache APISIX 2.9 Released with More New Features!"),": Apache APISIX version 2.9 is released! With 30+ developers, 100+ PR submissions, 2 new features, and improved support for plugins, find out what's new in Apache APISIX 2.9!"))))}c.isMDXComponent=!0}}]);