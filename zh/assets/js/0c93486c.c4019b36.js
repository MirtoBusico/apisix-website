"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30338],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2408:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"Deploy with RPM"},i=void 0,l={unversionedId:"deploy-with-rpm",id:"version-2.6.1/deploy-with-rpm",isDocsHomePage:!1,title:"Deploy with RPM",description:"NOTE: Only support CentOS 7 currently, for more information, please refer to here.",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.6.1/deploy-with-rpm.md",sourceDirName:".",slug:"/deploy-with-rpm",permalink:"/zh/docs/dashboard/2.6.1/deploy-with-rpm",editUrl:"/zh/edit#https://github.com/apache/apisix-dashboard/edit/release/2.6.1/docs/zh/latest/deploy-with-rpm.md",tags:[],version:"2.6.1",frontMatter:{title:"Deploy with RPM"},sidebar:"version-2.6.1/docs",previous:{title:"Deploy with Docker",permalink:"/zh/docs/dashboard/2.6.1/deploy-with-docker"},next:{title:"Development Guide",permalink:"/zh/docs/dashboard/2.6.1/develop"}},p=[{value:"Install from RPM",id:"install-from-rpm",children:[]},{value:"Run",id:"run",children:[]}],s={toc:p};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Only support CentOS 7 currently, for more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/2.6.1/deploy"},"here"),"."),(0,o.kt)("h2",{id:"install-from-rpm"},"Install from RPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo yum install -y https://github.com/apache/apisix-dashboard/releases/download/v2.6/apisix-dashboard-2.6-0.x86_64.rpm\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Before you start, make sure the following dependencies are installed and running in your environment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo nohup manager-api -p /usr/local/apisix/dashboard/ &\n")))}c.isMDXComponent=!0}}]);