"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[26205],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),o=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=o(n.components);return r.createElement(p.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,p=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),s=o(t),m=i,d=s["".concat(p,".").concat(m)]||s[m]||g[m]||l;return t?r.createElement(d,a(a({ref:e},c),{},{components:t})):r.createElement(d,a({ref:e},c))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,a=new Array(l);a[0]=s;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=n,u.mdxType="string"==typeof n?n:i,a[1]=u;for(var o=2;o<l;o++)a[o]=t[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},14124:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const l={title:"External Plugin"},a=void 0,u={unversionedId:"external-plugin",id:"version-2.13/external-plugin",isDocsHomePage:!1,title:"External Plugin",description:"APISIX \u652f\u6301\u4f7f\u7528 Lua \u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u5728 APISIX \u5185\u90e8\u6267\u884c\u3002\n\u6709\u65f6\u5019\u4f60\u60f3\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\u6765\u5f00\u53d1\u63d2\u4ef6\uff0c\u56e0\u6b64\uff0cAPISIX \u652f\u6301\u4ee5 Sidecar \u7684\u65b9\u5f0f\u52a0\u8f7d\u548c\u8fd0\u884c\u4f60\u5199\u7684\u63d2\u4ef6\u3002\n\u8fd9\u91cc\u7684 Sidecar \u5c31\u662f Plugin Runner \uff0c\u4f60\u5199\u7684\u63d2\u4ef6\u53eb\u505a External Plugin \u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/external-plugin.md",sourceDirName:".",slug:"/external-plugin",permalink:"/zh/docs/apisix/2.13/external-plugin",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.13/docs/zh/latest/external-plugin.md",tags:[],version:"2.13",frontMatter:{title:"External Plugin"},sidebar:"version-2.13/docs",previous:{title:"APISIX variable",permalink:"/zh/docs/apisix/2.13/apisix-variable"},next:{title:"Wasm",permalink:"/zh/docs/apisix/2.13/wasm"}},p=[{value:"\u4ec0\u4e48\u662f External Plugin \u548c Plugin Runner",id:"\u4ec0\u4e48\u662f-external-plugin-\u548c-plugin-runner",children:[]},{value:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684",id:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684",children:[]},{value:"\u5b83\u662f\u5982\u4f55\u5b9e\u73b0\u7684",id:"\u5b83\u662f\u5982\u4f55\u5b9e\u73b0\u7684",children:[]},{value:"\u652f\u6301\u7684 Plugin Runner",id:"\u652f\u6301\u7684-plugin-runner",children:[]},{value:"\u5728 APISIX \u4e2d\u914d\u7f6e Plugin Runner",id:"\u5728-apisix-\u4e2d\u914d\u7f6e-plugin-runner",children:[]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"\u7531 APISIX \u7ba1\u7406\u65f6\uff0c Plugin Runner \u65e0\u6cd5\u8bbf\u95ee\u6211\u7684\u73af\u5883\u53d8\u91cf",id:"\u7531-apisix-\u7ba1\u7406\u65f6-plugin-runner-\u65e0\u6cd5\u8bbf\u95ee\u6211\u7684\u73af\u5883\u53d8\u91cf",children:[]},{value:"APISIX \u4f7f\u7528 SIGKILL \u7ec8\u6b62 Plugin Runner \uff0c\u800c\u4e0d\u662f\u4f7f\u7528 SIGTERM\uff01",id:"apisix-\u4f7f\u7528-sigkill-\u7ec8\u6b62-plugin-runner-\u800c\u4e0d\u662f\u4f7f\u7528-sigterm",children:[]}]}],o={toc:p};function c(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f-external-plugin-\u548c-plugin-runner"},"\u4ec0\u4e48\u662f External Plugin \u548c Plugin Runner"),(0,i.kt)("p",null,"APISIX \u652f\u6301\u4f7f\u7528 Lua \u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u5728 APISIX \u5185\u90e8\u6267\u884c\u3002\n\u6709\u65f6\u5019\u4f60\u60f3\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\u6765\u5f00\u53d1\u63d2\u4ef6\uff0c\u56e0\u6b64\uff0cAPISIX \u652f\u6301\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Sidecar")," \u7684\u65b9\u5f0f\u52a0\u8f7d\u548c\u8fd0\u884c\u4f60\u5199\u7684\u63d2\u4ef6\u3002\n\u8fd9\u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Sidecar")," \u5c31\u662f Plugin Runner \uff0c\u4f60\u5199\u7684\u63d2\u4ef6\u53eb\u505a External Plugin \u3002"),(0,i.kt)("h2",{id:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/external-plugin.png",alt:"external-plugin"})),(0,i.kt)("p",null,"\u5f53\u4f60\u5728 APISIX \u4e2d\u914d\u7f6e\u4e86\u4e00\u4e2a Plugin Runner \uff0cAPISIX \u5c06\u4ee5\u5b50\u8fdb\u7a0b\u7684\u65b9\u5f0f\u8fd0\u884c\u8be5 Plugin Runner \u3002\n\u8be5\u5b50\u8fdb\u7a0b\u4e0e APISIX \u8fdb\u7a0b\u4ece\u5c5e\u76f8\u540c\u7528\u6237\u3002\u5f53\u91cd\u542f\u6216\u8005\u91cd\u65b0\u52a0\u8f7d APISIX \u65f6\uff0c\u8be5 Plugin Runner \u4e5f\u5c06\u88ab\u91cd\u542f\u3002"),(0,i.kt)("p",null,"\u4e00\u65e6\u4f60\u4e3a\u6307\u5b9a\u8def\u7531\u914d\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ext-plugin-*")," \u63d2\u4ef6\uff0c\n\u5339\u914d\u8be5\u8def\u7531\u7684\u8bf7\u6c42\u5c06\u89e6\u53d1\u4ece APISIX \u5230  Plugin Runner \u7684 RPC \u8c03\u7528\u3002"),(0,i.kt)("p",null," Plugin Runner \u5c06\u5904\u7406\u8be5 RPC \u8c03\u7528\uff0c\u5728\u5176\u4fa7\u521b\u5efa\u4e00\u4e2a\u8bf7\u6c42\uff0c\u8fd0\u884c External Plugin \u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9 APISIX \u3002"),(0,i.kt)("p",null," External Plugin \u53ca\u5176\u6267\u884c\u987a\u5e8f\u5728\u8fd9\u91cc ",(0,i.kt)("inlineCode",{parentName:"p"},"ext-plugin-*")," \u914d\u7f6e\u3002\u4e0e\u5176\u4ed6\u63d2\u4ef6\u4e00\u6837\uff0c External Plugin \u53ef\u4ee5\u52a8\u6001\u542f\u7528\u548c\u91cd\u65b0\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u5b83\u662f\u5982\u4f55\u5b9e\u73b0\u7684"},"\u5b83\u662f\u5982\u4f55\u5b9e\u73b0\u7684"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5bf9 Plugin Runner \u5185\u90e8\u5b9e\u73b0\u611f\u5174\u8da3\uff0c\u8bf7\u53c2\u8003\u8fd9\u4efd\u6587\u6863\uff1a\n",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/internal/plugin-runner"},"The Implementation of Plugin Runner")),(0,i.kt)("h2",{id:"\u652f\u6301\u7684-plugin-runner"},"\u652f\u6301\u7684 Plugin Runner"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-java-plugin-runner"},"https://github.com/apache/apisix-java-plugin-runner")),(0,i.kt)("li",{parentName:"ul"},"Go: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-go-plugin-runner"},"https://github.com/apache/apisix-go-plugin-runner")),(0,i.kt)("li",{parentName:"ul"},"Python: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-python-plugin-runner"},"https://github.com/apache/apisix-python-plugin-runner")),(0,i.kt)("li",{parentName:"ul"},"JavaScript: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zenozeng/apisix-javascript-plugin-runner"},"https://github.com/zenozeng/apisix-javascript-plugin-runner"))),(0,i.kt)("h2",{id:"\u5728-apisix-\u4e2d\u914d\u7f6e-plugin-runner"},"\u5728 APISIX \u4e2d\u914d\u7f6e Plugin Runner"),(0,i.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u8fd0\u884c Plugin Runner \uff0c\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'ext-plugin:\n  cmd: ["blah"] # replace it to the real runner executable according to the runner you choice\n')),(0,i.kt)("p",null,"APISIX \u5c06\u4ee5\u5b50\u8fdb\u7a0b\u7684\u65b9\u5f0f\u7ba1\u7406\u8be5 Plugin Runner \u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u5728 Mac \u4e0a\uff0cAPISIX ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.6")," \u65e0\u6cd5\u7ba1\u7406\u8be5 Plugin Runner \u3002"),(0,i.kt)("p",null,"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5e0c\u671b\u5355\u72ec\u8fd0\u884c Plugin Runner \uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u91cd\u65b0\u542f\u52a8\u5b83\uff0c\u800c\u65e0\u9700\u5148\u91cd\u65b0\u542f\u52a8 APISIX \u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u6307\u5b9a\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_LISTEN_ADDRESS"),", \u6211\u4eec\u53ef\u4ee5\u4f7f Plugin Runner \u76d1\u542c\u4e00\u4e2a\u56fa\u5b9a\u7684\u5730\u5740\u3002\n\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"APISIX_LISTEN_ADDRESS=unix:/tmp/x.sock\n")),(0,i.kt)("p",null,"\u6b64\u65f6\uff0c Plugin Runner \u5c06\u76d1\u542c ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/x.sock")),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u4f60\u9700\u8981\u914d\u7f6e APISIX \u53d1\u9001 RPC \u8bf7\u6c42\u5230\u8be5\u56fa\u5b9a\u7684\u5730\u5740\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'ext-plugin:\n  # cmd: ["blah"] # don\'t configure the executable!\n  path_for_test: "/tmp/x.sock" # without \'unix:\' prefix\n')),(0,i.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\uff0c\u4e0d\u5e94\u8be5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"path_for_test"),"\uff0c\u6b64\u65f6\u76d1\u542c\u7684\u5730\u5740\u5c06\u52a8\u6001\u751f\u6210\u3002"),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("h3",{id:"\u7531-apisix-\u7ba1\u7406\u65f6-plugin-runner-\u65e0\u6cd5\u8bbf\u95ee\u6211\u7684\u73af\u5883\u53d8\u91cf"},"\u7531 APISIX \u7ba1\u7406\u65f6\uff0c Plugin Runner \u65e0\u6cd5\u8bbf\u95ee\u6211\u7684\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,"\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.7"),"\uff0cAPISIX \u53ef\u4ee5\u5c06\u73af\u5883\u53d8\u91cf\u4f20\u9012\u7ed9 Plugin Runner \u3002"),(0,i.kt)("p",null,"\u7136\u800c\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNginx \u5c06\u9690\u85cf\u6240\u6709\u73af\u5883\u53d8\u91cf\u3002\u6240\u4ee5\u4f60\u9700\u8981\u9996\u5148\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u58f0\u660e\u73af\u5883\u53d8\u91cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx_config:\n  envs:\n    - MY_ENV_VAR\n")),(0,i.kt)("h3",{id:"apisix-\u4f7f\u7528-sigkill-\u7ec8\u6b62-plugin-runner-\u800c\u4e0d\u662f\u4f7f\u7528-sigterm"},"APISIX \u4f7f\u7528 SIGKILL \u7ec8\u6b62 Plugin Runner \uff0c\u800c\u4e0d\u662f\u4f7f\u7528 SIGTERM\uff01"),(0,i.kt)("p",null,"\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.7"),"\uff0c\u5f53\u8dd1\u5728 OpenResty 1.19+ \u65f6\uff0cAPISIX \u5c06\u4f7f\u7528 SIGTERM \u6765\u505c\u6b62 Plugin Runner \u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0cAPISIX \u9700\u8981\u7b49\u5f85 Plugin Runner \u9000\u51fa\uff0c\u8fd9\u6837\u6211\u4eec\u624d\u80fd\u786e\u4fdd\u8d44\u6e90\u5f97\u4ee5\u88ab\u91ca\u653e\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u5148\u53d1\u9001 SIGTERM \u3002\u7136\u540e\u5728 1 \u79d2\u540e\uff0c\u5982\u679c Plugin Runner \u4ecd\u7136\u5728\u8fd0\u884c\uff0c\u6211\u4eec\u5c06\u53d1\u9001 SIGKILL \u3002"))}c.isMDXComponent=!0}}]);