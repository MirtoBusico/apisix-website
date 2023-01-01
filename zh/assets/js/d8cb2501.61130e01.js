"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[34312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87803:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const s={title:"Using External Services Discovery In ApisixUpstream"},a=void 0,o={unversionedId:"tutorials/external-service-discovery",id:"tutorials/external-service-discovery",isDocsHomePage:!1,title:"Using External Services Discovery In ApisixUpstream",description:"In this tutorial, we will introduce how to configure external services discovery in the ApisixUpstream resources.",source:"@site/docs/apisix-ingress-controller/tutorials/external-service-discovery.md",sourceDirName:"tutorials",slug:"/tutorials/external-service-discovery",permalink:"/zh/docs/ingress-controller/next/tutorials/external-service-discovery",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/tutorials/external-service-discovery.md",tags:[],version:"current",frontMatter:{title:"Using External Services Discovery In ApisixUpstream"},sidebar:"docs",previous:{title:"Using External Services In ApisixUpstream",permalink:"/zh/docs/ingress-controller/next/tutorials/external-service"},next:{title:"ApisixRoute/v2beta3",permalink:"/zh/docs/ingress-controller/next/references/apisix_route_v2beta3"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Introduction",id:"introduction",children:[]}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, we will introduce how to configure external services discovery in the ApisixUpstream resources."),(0,i.kt)("p",null,"APISIX already supports various service discovery components, such as DNS, consul, nacos, etc.\nPlease see ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/discovery/"},"Integration service discovery registry")," for details."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An available Kubernetes cluster"),(0,i.kt)("li",{parentName:"ul"},"An available APISIX and APISIX Ingress Controller installation")),(0,i.kt)("p",null,"We assume that your APISIX is installed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," namespace."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Integration of APISIX Ingress with service discovery components is configured through the ApisixUpstream resource.\nIn this case, we don't configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"backends")," field in the ApisixRoute resource.\nInstead, we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstreams")," field to refer to an ApisixUpstream resources with the ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery")," field configured."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# httpbin-route.yaml\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n  - name: rule1\n    match:\n      hosts:\n      - local.httpbin.org\n      paths:\n      - /*\n    # backends:  # We won't use the `backends` field\n    #    - serviceName: httpbin\n    #      servicePort: 80\n    upstreams:\n    - name: httpbin-upstream\n")),(0,i.kt)("p",null,"This configuration tells the ingress controller not to resolve upstream hosts through the K8s services, but to use the configuration defined in the referenced ApisixUpstream.\nThe referenced ApisixUpstream ",(0,i.kt)("em",{parentName:"p"},"MUST")," have ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery")," field configured. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# httpbin-upstream.yaml\napiVersion: apisix.apache.org/v2\nkind: ApisixUpstream\nmetadata:\n  name: httpbin-upstream\nspec:\n  discovery:\n    type: dns\n    serviceName: httpbin.default.svc.cluster.local\n")),(0,i.kt)("p",null,"In this yaml example, we configured ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.default.svc.cluster.local")," as the backend.\nThe type of service discovery needs to be pre-configured in APISIX. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  dns:\n    servers:\n      - "10.96.0.10:53" # default kube-dns cluster IP.\n')),(0,i.kt)("p",null,"After applying the above configuration, we can try to access ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.default.svc.cluster.local")," directly through APISIX."))}p.isMDXComponent=!0}}]);