"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[55937],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(t),u=o,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},23353:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const r={title:"FAQ"},i=void 0,l={unversionedId:"FAQ",id:"version-2.15/FAQ",isDocsHomePage:!1,title:"FAQ",description:"If you need a Vue.js build of the Apache APISIX Dashboard 1.0, use the master-vue branch.",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.15/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/zh/docs/dashboard/FAQ",editUrl:"/zh/edit#https://github.com/apache/apisix-dashboard/edit/release/2.15/docs/zh/latest/FAQ.md",tags:[],version:"2.15",frontMatter:{title:"FAQ"},sidebar:"version-2.15/docs",previous:{title:"Backend Tests",permalink:"/zh/docs/dashboard/back-end-tests"},next:{title:"Data Loader",permalink:"/zh/docs/dashboard/modules/data_loader"}},s=[{value:"1. Vue.js version of the Dashboard",id:"1-vuejs-version-of-the-dashboard",children:[]},{value:"2. What are the differences between Dashboard version 2.0 and version 1.5?",id:"2-what-are-the-differences-between-dashboard-version-20-and-version-15",children:[]},{value:"3. Etcd compatibility issues",id:"3-etcd-compatibility-issues",children:[]},{value:"4. After modifying the plugin schema or creating a custom plugin in Apache APISIX, why can&#39;t I find it on the dashboard?",id:"4-after-modifying-the-plugin-schema-or-creating-a-custom-plugin-in-apache-apisix-why-cant-i-find-it-on-the-dashboard",children:[]},{value:"5. How to write API documentation",id:"5-how-to-write-api-documentation",children:[]},{value:"6. How to allow all IPs to access APISIX Dashboard",id:"6-how-to-allow-all-ips-to-access-apisix-dashboard",children:[]},{value:"7. What is the default strategy when import a duplicate route?",id:"7-what-is-the-default-strategy-when-import-a-duplicate-route",children:[]},{value:"8. APISIX dashboard add grafana cross-domain problem",id:"8-apisix-dashboard-add-grafana-cross-domain-problem",children:[]},{value:"9. APISIX dashboard configured domain name, the embedded Grafana can&#39;t login",id:"9-apisix-dashboard-configured-domain-name-the-embedded-grafana-cant-login",children:[]}],d={toc:s};function c(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-vuejs-version-of-the-dashboard"},"1. Vue.js version of the Dashboard"),(0,o.kt)("p",null,"If you need a Vue.js build of the Apache APISIX Dashboard 1.0, use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/tree/master-vue"},"master-vue branch"),"."),(0,o.kt)("h3",{id:"2-what-are-the-differences-between-dashboard-version-20-and-version-15"},"2. What are the differences between Dashboard version 2.0 and version 1.5?"),(0,o.kt)("p",null,"The 2.0 version of the dashboard removed MySQL from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/tree/backup-1.5-latest"},"version 1.5")," and will operate directly on etcd."),(0,o.kt)("h3",{id:"3-etcd-compatibility-issues"},"3. Etcd compatibility issues"),(0,o.kt)("p",null,"If you are using Apache APISIX below v2.0, be aware that the data from the etcd v2 API is ",(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/v2-migration/"},"not compatible")," with the data from the v3 API. Apache APISIX Dashboard v2.0 and above uses the etcd v3 API, and apisix 1.5 and below uses the etcd v2 API."),(0,o.kt)("h3",{id:"4-after-modifying-the-plugin-schema-or-creating-a-custom-plugin-in-apache-apisix-why-cant-i-find-it-on-the-dashboard"},"4. After modifying the plugin schema or creating a custom plugin in Apache APISIX, why can't I find it on the dashboard?"),(0,o.kt)("p",null,"Since the Dashboard caches the jsonschema data of the plugins in Apache APISIX, you need to synchronize the data in the Dashboard after you create your custom plugins in Apache APISIX, which currently ",(0,o.kt)("strong",{parentName:"p"},"only supports manual operation"),". Please follow the following guide."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm that your APISIX is running and has enabled control API (enabled by default and only runs local access)\nRefer to the beginning in:\n",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/control-api"},"https://apisix.apache.org/docs/apisix/control-api"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following commands to export jsonchema on your APISIX server (if it is configured for non-local access, it does not need to be executed on your APISIX server, and the access IP and port should be modified accordingly)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl 127.0.0.1:9090/v1/schema > schema.json\n")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/control-api#get-v1schema"},"https://apisix.apache.org/docs/apisix/control-api#get-v1schema")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the exported ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.json")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf")," directory in the Dashboard working directory (About working directory, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/docs/en/latest/deploy.md#working-directory"},"https://github.com/apache/apisix-dashboard/blob/master/docs/en/latest/deploy.md#working-directory"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart the Manager API"))),(0,o.kt)("h3",{id:"5-how-to-write-api-documentation"},"5. How to write API documentation"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-swagger/go-swagger"},"go-swagger")," to generate Swagger 2.0 documents, and then convert them to markdown format so that they can be viewed directly in the github repository. Specific steps are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write comments according to ",(0,o.kt)("a",{parentName:"p",href:"https://goswagger.io/use/spec.html"},"Specification"),". For details, please refer to the existing example ",(0,o.kt)("inlineCode",{parentName:"p"},"api/internal/handler/route/route.go")," in this project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"go-swagger")," tool to generate Swagger 2.0 documents."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ swagger generate spec -o ./docs/en/latest/api/api.yaml --scan-models\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"swagger-markdown")," tool to convert Swagger 2.0 documents into markdown documents.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ swagger-markdown -i ./docs/en/latest/api/api.yaml\n")),(0,o.kt)("h3",{id:"6-how-to-allow-all-ips-to-access-apisix-dashboard"},"6. How to allow all IPs to access APISIX Dashboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Allow all IPv4 access")),(0,o.kt)("p",null,"By default, the IPv4 range of ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.0/24")," is allowed to access ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard"),". If you want to allow all IPv4 access, then just configure ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.allow_list")," in the configuration file of ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/conf.yaml")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"conf:\n  allow_list:\n    - 0.0.0.0/0\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Allow all IPv6 access")),(0,o.kt)("p",null,"By default, the IPv6 range of ",(0,o.kt)("inlineCode",{parentName:"p"},"::1")," is allowed to access ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard"),". If you want to allow all IPv6 access, then just configure ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.allow_list")," in the configuration file of ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/conf.yaml")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"conf:\n  allow_list:\n    - ::/0\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Allow all IP access")),(0,o.kt)("p",null,"If you want to allow all IPs to access ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard"),", you only need to do the following configuration in the configuration file of ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/conf.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"conf:\n  allow_list:\n")),(0,o.kt)("p",null,"Restart ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api"),", all IPs can access ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard"),"."),(0,o.kt)("p",null,"Note: You can use this method in development and test environment to allow all IPs to access your ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX Dashboard")," instance, but it is not safe to use it in a production environment. In production environment, please only authorize specific IP addresses or address ranges to access your instance."),(0,o.kt)("h3",{id:"7-what-is-the-default-strategy-when-import-a-duplicate-route"},"7. What is the default strategy when import a duplicate route?"),(0,o.kt)("p",null,"Currently we reject import duplicate route, that is to say when you import a route which has the same attributes, all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," ",(0,o.kt)("inlineCode",{parentName:"p"},"uris")," ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," ",(0,o.kt)("inlineCode",{parentName:"p"},"remote_addr")," ",(0,o.kt)("inlineCode",{parentName:"p"},"remote_addrs")," ",(0,o.kt)("inlineCode",{parentName:"p"},"priority")," ",(0,o.kt)("inlineCode",{parentName:"p"},"vars")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"filter_func"),", as the existing route, you will get an error while importing a route from OAS3.0."),(0,o.kt)("h3",{id:"8-apisix-dashboard-add-grafana-cross-domain-problem"},"8. APISIX dashboard add grafana cross-domain problem"),(0,o.kt)("p",null,"Modifying the Grafana configuration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable anonymous access:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# grep 'auth.anonymous' -A 3 defaults.ini\n[auth.anonymous]\n# enable anonymous access\nenabled = true\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Allow access via iframe")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# grep 'allow_embedding' defaults.ini\nallow_embedding = true\n\xb7\xb7\xb7\n")),(0,o.kt)("h3",{id:"9-apisix-dashboard-configured-domain-name-the-embedded-grafana-cant-login"},"9. APISIX dashboard configured domain name, the embedded Grafana can't login"),(0,o.kt)("p",null,"If the domain name of the address is configured as HTTPS, the embedded grafana will jump to the login page after logging in. You can refer to this solution:"),(0,o.kt)("p",null,"It's best for Grafana to configure the domain name in the same way. Otherwise there will be problems with address resolution."))}c.isMDXComponent=!0}}]);