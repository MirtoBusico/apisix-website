"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[88941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),u=l,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=function(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},55064:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(79443);const i=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var r=a(86010);const p="tabItem_vU9c",o="tabItemActive_cw6a";const s=function(e){var t;const{lazy:a,block:l,defaultValue:s,values:c,groupId:m,className:d}=e,u=n.Children.toArray(e.children),k=null!=c?c:u.map((e=>({value:e.props.value,label:e.props.label}))),N=null!=s?s:null==(t=u.find((e=>e.props.default)))?void 0:t.props.value,{tabGroupChoices:h,setTabGroupChoices:g}=i(),[v,I]=(0,n.useState)(N),b=[];if(null!=m){const e=h[m];null!=e&&e!==v&&k.some((t=>t.value===e))&&I(e)}const f=e=>{const t=e.currentTarget,a=b.indexOf(t),n=k[a].value;I(n),null!=m&&(g(m,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:l}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&l<=r&&n<=i&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((()=>t.classList.remove(o)),2e3))}),150))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=b.indexOf(e.target)+1;a=b[t]||b[0];break}case"ArrowLeft":{const t=b.indexOf(e.target)-1;a=b[t]||b[b.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},d)},k.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,r.Z)("tabs__item",p,{"tabs__item--active":v===t}),key:t,ref:e=>b.push(e),onKeyDown:x,onFocus:f,onClick:f},null!=a?a:t)}))),a?(0,n.cloneElement)(u.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},79443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=(0,a(67294).createContext)(void 0)},61713:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),i=a(55064),r=a(58215);const p={id:"building-apisix",title:"\u6e90\u7801\u5b89\u88c5 APISIX",keywords:["API \u7f51\u5173","Apache APISIX","\u8d21\u732e\u4ee3\u7801","\u6784\u5efa APISIX","\u6e90\u7801\u5b89\u88c5 APISIX"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u672c\u5730\u4f7f\u7528\u6e90\u7801\u5b89\u88c5 API \u7f51\u5173 Apache APISIX \u6765\u6784\u5efa\u5f00\u53d1\u73af\u5883\u3002"},o=void 0,s={unversionedId:"building-apisix",id:"version-3.0/building-apisix",isDocsHomePage:!1,title:"\u6e90\u7801\u5b89\u88c5 APISIX",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u672c\u5730\u4f7f\u7528\u6e90\u7801\u5b89\u88c5 API \u7f51\u5173 Apache APISIX \u6765\u6784\u5efa\u5f00\u53d1\u73af\u5883\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/building-apisix.md",sourceDirName:".",slug:"/building-apisix",permalink:"/zh/docs/apisix/building-apisix",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/building-apisix.md",tags:[],version:"3.0",frontMatter:{id:"building-apisix",title:"\u6e90\u7801\u5b89\u88c5 APISIX",keywords:["API \u7f51\u5173","Apache APISIX","\u8d21\u732e\u4ee3\u7801","\u6784\u5efa APISIX","\u6e90\u7801\u5b89\u88c5 APISIX"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u672c\u5730\u4f7f\u7528\u6e90\u7801\u5b89\u88c5 API \u7f51\u5173 Apache APISIX \u6765\u6784\u5efa\u5f00\u53d1\u73af\u5883\u3002"},sidebar:"version-3.0/docs",previous:{title:"Control API",permalink:"/zh/docs/apisix/control-api"},next:{title:"External Plugin",permalink:"/zh/docs/apisix/external-plugin"}},c=[{value:"\u6e90\u7801\u5b89\u88c5 APISIX",id:"\u6e90\u7801\u5b89\u88c5-apisix",children:[]},{value:"\u5b89\u88c5 etcd",id:"\u5b89\u88c5-etcd",children:[]},{value:"\u7ba1\u7406 APISIX \u670d\u52a1",id:"\u7ba1\u7406-apisix-\u670d\u52a1",children:[]},{value:"\u4e3a APISIX \u6784\u5efa APISIX-Base",id:"\u4e3a-apisix-\u6784\u5efa-apisix-base",children:[]},{value:"\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b",id:"\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b",children:[{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",children:[]},{value:"\u8fd0\u884c\u6307\u5b9a\u7684\u6d4b\u8bd5\u7528\u4f8b",id:"\u8fd0\u884c\u6307\u5b9a\u7684\u6d4b\u8bd5\u7528\u4f8b",children:[]}]}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u4e3a APISIX \u505a\u51fa\u8d21\u732e\u6216\u914d\u7f6e\u5f00\u53d1\u73af\u5883\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003\u672c\u6559\u7a0b\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u5b89\u88c5 APISIX\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/installation-guide"},"\u5b89\u88c5\u6307\u5357"),"\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u60f3\u4e3a\u7279\u5b9a\u7684\u73af\u5883\u6216\u6253\u5305 APISIX\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"apisix-build-tools"),"\u3002"))),(0,l.kt)("h2",{id:"\u6e90\u7801\u5b89\u88c5-apisix"},"\u6e90\u7801\u5b89\u88c5 APISIX"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u4f9d\u8d56\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/apache/apisix/master/utils/install-dependencies.sh -sL | bash -\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u5e76\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"APISIX_VERSION"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"APISIX_VERSION='3.0.0'\nmkdir apisix-${APISIX_VERSION}\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u4e0b\u8f7d APISIX \u6e90\u7801\u5305\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://downloads.apache.org/apisix/${APISIX_VERSION}/apache-apisix-${APISIX_VERSION}-src.tgz\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"\u4e0b\u8f7d\u9875\u9762"),"\u4e0b\u8f7d\u6e90\u7801\u5305\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u8be5\u9875\u9762\u627e\u5230 APISIX Dashboard \u548c APISIX Ingress Controller \u7684\u6e90\u7801\u5305\u3002"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u6e90\u7801\u5305\u540e\uff0c\u4f60\u53ef\u4ee5\u5c06\u6587\u4ef6\u89e3\u538b\u5230\u4e4b\u524d\u521b\u5efa\u7684\u6587\u4ef6\u5939\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf apache-apisix-${APISIX_VERSION}-src.tgz -C apisix-${APISIX_VERSION}\n")),(0,l.kt)("p",null,"\u7136\u540e\u5207\u6362\u5230\u89e3\u538b\u7684\u76ee\u5f55\uff0c\u521b\u5efa\u4f9d\u8d56\u9879\u5e76\u5b89\u88c5 APISIX\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd apisix-${APISIX_VERSION}\nmake deps\nmake install\n")),(0,l.kt)("p",null,"\u8be5\u547d\u4ee4\u5c06\u5b89\u88c5 APISIX \u8fd0\u884c\u65f6\u4f9d\u8d56\u7684 Lua \u5e93\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix")," \u547d\u4ee4\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u5728\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"make deps")," \u65f6\u6536\u5230\u7c7b\u4f3c ",(0,l.kt)("inlineCode",{parentName:"p"},"Could not find header file for LDAP/PCRE/openssl")," \u7684\u9519\u8bef\u6d88\u606f\uff0c\u8bf7\u4f7f\u7528\u6b64\u89e3\u51b3\u65b9\u6848\u3002"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"luarocks")," \u652f\u6301\u81ea\u5b9a\u4e49\u7f16\u8bd1\u65f6\u4f9d\u8d56\u9879\uff08\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/luarocks/luarocks/wiki/Config-file-format"},"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f"),"\uff09\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177\u5b89\u88c5\u7f3a\u5c11\u7684\u8f6f\u4ef6\u5305\u5e76\u5c06\u5176\u5b89\u88c5\u76ee\u5f55\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"luarocks")," \u53d8\u91cf\u8868\u4e2d\u3002\u6b64\u65b9\u6cd5\u9002\u7528\u4e8e macOS\u3001Ubuntu\u3001CentOS \u548c\u5176\u4ed6\u7c7b\u4f3c\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,l.kt)("p",{parentName:"div"},"\u6b64\u5904\u4ec5\u7ed9\u51fa macOS \u7684\u5177\u4f53\u89e3\u51b3\u6b65\u9aa4\uff0c\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u7684\u89e3\u51b3\u65b9\u6848\u7c7b\u4f3c\uff1a"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"openldap"),"\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install openldap\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u547d\u4ee4\u627e\u5230\u672c\u5730\u5b89\u88c5\u76ee\u5f55\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew --prefix openldap\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u8def\u5f84\u6dfb\u52a0\u5230\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\u4e2d\uff08\u9009\u62e9\u4e24\u79cd\u65b9\u6cd5\u4e2d\u7684\u4e00\u79cd\u5373\u53ef\uff09\uff1a"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"luarocks config")," \u547d\u4ee4\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"LDAP_DIR"),"\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"luarocks config variables.LDAP_DIR /opt/homebrew/cellar/openldap/2.6.1\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f60\u8fd8\u53ef\u4ee5\u66f4\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"luarocks")," \u7684\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u3002\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.luaorcks/config-5.1.lua")," \u6587\u4ef6\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'variables = { LDAP_DIR = "/opt/homebrew/cellar/openldap/2.6.1", LDAP_INCDIR = "/opt/homebrew/cellar/openldap/2.6.1/include", }\n')),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/cellar/openldap/")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"brew")," \u5728 macOS(Apple Silicon) \u4e0a\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"openldap")," \u7684\u9ed8\u8ba4\u4f4d\u7f6e\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/opt/openldap/")," \u662f brew \u5728 macOS(Intel) \u4e0a\u5b89\u88c5 openldap \u7684\u9ed8\u8ba4\u4f4d\u7f6e\u3002"))))))),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u518d\u9700\u8981 APISIX\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make uninstall && make undeps\n")),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8be5\u64cd\u4f5c\u5c06\u5220\u9664\u6240\u6709\u76f8\u5173\u6587\u4ef6\u3002"))),(0,l.kt)("h2",{id:"\u5b89\u88c5-etcd"},"\u5b89\u88c5 etcd"),(0,l.kt)("p",null,"APISIX \u9ed8\u8ba4\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},"etcd")," \u6765\u4fdd\u5b58\u548c\u540c\u6b65\u914d\u7f6e\u3002\u5728\u8fd0\u884c APISIX \u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5728\u4f60\u7684\u673a\u5668\u4e0a\u5b89\u88c5 etcd\u3002"),(0,l.kt)(i.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ETCD_VERSION='3.4.18'\nwget https://github.com/etcd-io/etcd/releases/download/v${ETCD_VERSION}/etcd-v${ETCD_VERSION}-linux-amd64.tar.gz\ntar -xvf etcd-v${ETCD_VERSION}-linux-amd64.tar.gz && \\\n  cd etcd-v${ETCD_VERSION}-linux-amd64 && \\\n  sudo cp -a etcd etcdctl /usr/bin/\nnohup etcd >/tmp/etcd.log 2>&1 &\n"))),(0,l.kt)(r.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install etcd\nbrew services start etcd\n")))),(0,l.kt)("h2",{id:"\u7ba1\u7406-apisix-\u670d\u52a1"},"\u7ba1\u7406 APISIX \u670d\u52a1"),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316 NGINX \u914d\u7f6e\u6587\u4ef6\u548c etcd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix help")," \u547d\u4ee4\uff0c\u67e5\u770b\u8fd4\u56de\u7ed3\u679c\uff0c\u83b7\u53d6\u5176\u4ed6\u64cd\u4f5c\u547d\u4ee4\u53ca\u5176\u63cf\u8ff0\u3002"))),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\uff0cAPISIX \u5c06\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx.conf"),"\uff0c\u5e76\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx.conf")," \u7684\u8bed\u6cd5\u662f\u5426\u6b63\u786e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apisix test\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c APISIX\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apisix start\n")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u505c\u6b62 APISIX\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix quit")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix stop")," \u547d\u4ee4\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"apisix quit")," \u5c06\u6b63\u5e38\u5173\u95ed APISIX\uff0c\u8be5\u6307\u4ee4\u786e\u4fdd\u5728\u505c\u6b62\u4e4b\u524d\u5b8c\u6210\u6240\u6709\u6536\u5230\u7684\u8bf7\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apisix quit\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"apisix stop")," \u547d\u4ee4\u4f1a\u5f3a\u5236\u5173\u95ed APISIX \u5e76\u4e22\u5f03\u6240\u6709\u8bf7\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apisix stop\n")),(0,l.kt)("h2",{id:"\u4e3a-apisix-\u6784\u5efa-apisix-base"},"\u4e3a APISIX \u6784\u5efa APISIX-Base"),(0,l.kt)("p",null,"APISIX \u7684\u4e00\u4e9b\u7279\u6027\u9700\u8981\u5728 OpenResty \u4e2d\u5f15\u5165\u989d\u5916\u7684 NGINX \u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u8fd9\u4e9b\u529f\u80fd\uff0c\u4f60\u9700\u8981\u6784\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 OpenResty \u53d1\u884c\u7248\uff08APISIX-Base\uff09\u3002\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"apisix-build-tools")," \u914d\u7f6e\u4f60\u7684\u6784\u5efa\u73af\u5883\u5e76\u8fdb\u884c\u6784\u5efa\u3002"),(0,l.kt)("h2",{id:"\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b"},"\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u5c55\u793a\u4e86\u5982\u4f55\u8fd0\u884c APISIX \u7684\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"perl")," \u7684\u5305\u7ba1\u7406\u5668 ",(0,l.kt)("a",{parentName:"p",href:"https://metacpan.org/pod/App::cpanminus#INSTALLATION"},"cpanminus"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"cpanm")," \u6765\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openresty/test-nginx"},"test-nginx")," \u7684\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cpanm --notest Test::Nginx IPC::Run > build.log 2>&1 || (cat build.log && exit 1)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"test-nginx")," \u6e90\u7801\u514b\u9686\u5230\u672c\u5730\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/openresty/test-nginx.git\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5f53\u524d\u76ee\u5f55\u6dfb\u52a0\u5230 Perl \u7684\u6a21\u5757\u76ee\u5f55\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export PERL5LIB=.:$PERL5LIB\n")),(0,l.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6307\u5b9a NGINX \u4e8c\u8fdb\u5236\u8def\u5f84\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"TEST_NGINX_BINARY=/usr/local/bin/openresty prove -Itest-nginx/lib -r t\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u90e8\u5206\u6d4b\u8bd5\u9700\u8981\u4f9d\u8d56\u5916\u90e8\u670d\u52a1\u548c\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\u3002\u5982\u679c\u60f3\u8981\u5b8c\u6574\u5730\u6784\u5efa\u6d4b\u8bd5\u73af\u5883\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/ci/linux_openresty_common_runner.sh"},"ci/linux_openresty_common_runner.sh"),"\u3002"))),(0,l.kt)("h3",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u8fd0\u884c APISIX \u6d4b\u8bd5\u7528\u4f8b\u7684\u5e38\u89c1\u6545\u969c\u6392\u9664\u6b65\u9aa4\u3002"),(0,l.kt)("p",null,"\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},'Error unknown directive "lua_package_path" in /API_ASPIX/apisix/t/servroot/conf/nginx.conf')," \u62a5\u9519\uff0c\u662f\u56e0\u4e3a\u9ed8\u8ba4\u7684 NGINX \u5b89\u88c5\u8def\u5f84\u672a\u627e\u5230\uff0c\u89e3\u51b3\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Linux \u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"macOS \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"homebrew")," \u7684\u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=/usr/local/opt/openresty/nginx/sbin:$PATH\n")))),(0,l.kt)("h3",{id:"\u8fd0\u884c\u6307\u5b9a\u7684\u6d4b\u8bd5\u7528\u4f8b"},"\u8fd0\u884c\u6307\u5b9a\u7684\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\u6307\u5b9a\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"prove -Itest-nginx/lib -r t/plugin/openid-connect.t\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/internal/testing-framework.md"},"testing framework"),"\u3002"))}d.isMDXComponent=!0},86010:(e,t,a)=>{function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}a.d(t,{Z:()=>l});const l=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}}}]);