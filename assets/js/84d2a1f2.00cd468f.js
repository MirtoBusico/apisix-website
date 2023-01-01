"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[50414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76627:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Development Guide"},l=void 0,i={unversionedId:"develop",id:"develop",isDocsHomePage:!1,title:"Development Guide",description:"The Dashboard contains both manager-api and web parts, so you need to start the development environment separately.",source:"@site/docs/apisix-dashboard/develop.md",sourceDirName:".",slug:"/develop",permalink:"/docs/dashboard/next/develop",editUrl:"/edit#https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/develop.md",tags:[],version:"current",frontMatter:{title:"Development Guide"},sidebar:"docs",previous:{title:"Rebuild Docker image",permalink:"/docs/dashboard/next/deploy-with-docker"},next:{title:"i18n User Guide",permalink:"/docs/dashboard/next/I18N_USER_GUIDE"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Clone the project",id:"clone-the-project",children:[]},{value:"Start developing",id:"start-developing",children:[{value:"manager-api",id:"manager-api",children:[]},{value:"web",id:"web",children:[]}]}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Dashboard contains both ",(0,r.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," parts, so you need to start the development environment separately."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before development, refer to this ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/next/install"},"guide")," to install dependencies."),(0,r.kt)("h2",{id:"clone-the-project"},"Clone the project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone -b release/2.15 https://github.com/apache/apisix-dashboard.git\n")),(0,r.kt)("h2",{id:"start-developing"},"Start developing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix-dashboard\n")),(0,r.kt)("h3",{id:"manager-api"},"manager-api"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Please change the configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"api/conf/conf.yaml"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the root directory, launch development mode."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ make api-run\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"In the root directory, stop development mode.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ make api-stop\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/next/FAQ"},"FAQ")," about the problem of displaying exception in the dashboard after adding custom plugins or modifying plugin's schema.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If writing an back end E2E test, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/next/back-end-tests"},"Back End E2E Writing Guide")))),(0,r.kt)("h3",{id:"web"},"web"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"web")," directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ./web\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Please change the ",(0,r.kt)("inlineCode",{parentName:"li"},"manager-api")," address in the ",(0,r.kt)("inlineCode",{parentName:"li"},"web/.env")," file. If you follow this guidelines, the address may need to be set as below.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All commands here are for Linux environment, other systems please use the corresponding commands for your platform. You are also welcome to contribute your own methods.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "SERVE_URL_DEV=http://localhost:9000" > web/.env\n')),(0,r.kt)("p",null,"If you don't want to create the file, you can also export the variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export SERVE_URL_DEV=http://localhost:9000\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Launch development mode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn install\n\n$ yarn start\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If there is an error about gyp during yarn install, please ignore it and go ahead!")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"If writing an front end E2E test, please refer to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/dashboard/next/front-end-e2e"},"Front End E2E Writing Guide"))))}d.isMDXComponent=!0}}]);