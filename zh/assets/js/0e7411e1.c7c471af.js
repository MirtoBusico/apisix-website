"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[13575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61313:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={title:"ApisixClusterConfig"},o=void 0,s={unversionedId:"concepts/apisix_cluster_config",id:"version-1.0.0/concepts/apisix_cluster_config",isDocsHomePage:!1,title:"ApisixClusterConfig",description:"ApisixClusterConfig is a CRD resource which used to describe an APISIX cluster, currently it's not a required\nresource but its existence can enrich an APISIX cluster, for instance, enabling cluster-wide monitoring, rate limiting and so on.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.0.0/concepts/apisix_cluster_config.md",sourceDirName:"concepts",slug:"/concepts/apisix_cluster_config",permalink:"/zh/docs/ingress-controller/1.0.0/concepts/apisix_cluster_config",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.0.0/docs/zh/latest/concepts/apisix_cluster_config.md",tags:[],version:"1.0.0",frontMatter:{title:"ApisixClusterConfig"}},l=[{value:"Monitoring",id:"monitoring",children:[]},{value:"Admin Config",id:"admin-config",children:[]},{value:"Multiple Clusters Management",id:"multiple-clusters-management",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," is a CRD resource which used to describe an APISIX cluster, currently it's not a required\nresource but its existence can enrich an APISIX cluster, for instance, enabling cluster-wide monitoring, rate limiting and so on."),(0,r.kt)("p",null,"monitoring features like collecting ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," metrics\nand ",(0,r.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/"},"skywalking")," spans"),(0,r.kt)("h2",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"By default, monitoring are not enabled for the APISIX cluster, this is not favorable\nif you'd like to learn the real running status of your cluster. In such a case, you\ncould create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," to enable these features explicitly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  monitoring:\n    prometheus:\n      enable: true\n    skywalking:\n      enable: true\n      sampleRatio: 0.5\n")),(0,r.kt)("p",null,'The above example enables both the Prometheus and Skywalking for the APISIX cluster which name is "default".\nPlease see ',(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/prometheus"},"Prometheus in APISIX")," and ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/skywalking"},"Skywalking in APISIX")," for the details."),(0,r.kt)("h2",{id:"admin-config"},"Admin Config"),(0,r.kt)("p",null,"The default APISIX cluster is configured through command line options like ",(0,r.kt)("inlineCode",{parentName:"p"},"--default-apisix-cluster-xxx"),". They are constant in apisix-ingress-controller's lifecycle, you have to change the definition\nof Deployment or Pod template. Now with the help of ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig"),", you can change some administrative fields on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  admin:\n    baseURL: http://apisix-gw.default.svc.cluster.local:9180/apisix/admin\n    adminKey: "123456"\n')),(0,r.kt)("p",null,"The above ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," sets the base url and admin key for the APISIX cluster ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"'),". Once this\nresource is processed, resources like Route, Upstream and others will be pushed to the new address with the new admin key (for authentication)."),(0,r.kt)("h2",{id:"multiple-clusters-management"},"Multiple Clusters Management"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," is also designed for supporting multiple clusters management, but currently this function IS NOT ENABLED YET.\nOnly the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," with the same named configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"--default-apisix-cluster-name")," option will be handled by apisix-ingress-controller, other instances will be neglected."),(0,r.kt)("p",null,"The current delete event for ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," doesn't mean the apisix-ingress-controller will lose the view of the corresponding APISIX cluster but\nresetting all the features on it, so the running of APISIX cluster is not influenced by this event."))}p.isMDXComponent=!0}}]);