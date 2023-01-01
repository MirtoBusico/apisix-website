"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2355],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||o;return a?r.createElement(d,s(s({ref:t},p),{},{components:a})):r.createElement(d,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(25773),n=(a(27378),a(35318));const o={title:"Web resource caching: Server-Side",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258"}],keywords:["Web","HTTP","Cache","Performance"],description:"The subject of Web resource caching is as old as the World Wide Web itself. However, I'd like to offer an as-exhaustive-as-possible catalog of how one can improve performance by caching. Web resource caching can happen in two different places: client-side - on the browser and server side. In the previous post, I explained the former; this post focuses on the latter.",tags:["Case Studies"],image:"https://static.apiseven.com/2022/12/13/63981be362ec4.jpg"},s=void 0,c={permalink:"/blog/2022/12/14/web-caching-server",source:"@site/blog/2022/12/14/web-caching-server.md",title:"Web resource caching: Server-Side",description:"The subject of Web resource caching is as old as the World Wide Web itself. However, I'd like to offer an as-exhaustive-as-possible catalog of how one can improve performance by caching. Web resource caching can happen in two different places: client-side - on the browser and server side. In the previous post, I explained the former; this post focuses on the latter.",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"Case Studies",permalink:"/blog/tags/case-studies"}],readingTime:3.985,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258",imageURL:"https://avatars.githubusercontent.com/u/752258"}],prevItem:{title:"Release Apache APISIX 3.1.0",permalink:"/blog/2022/12/30/release-apache-apisix-3.1.0"},nextItem:{title:"Web resource caching: Client-Side",permalink:"/blog/2022/12/07/web-caching-client"}},i={authorsImageUrls:[void 0]},l=[{value:"Conclusion",id:"conclusion",children:[],level:2}],p={toc:l};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The subject of Web resource caching is as old as the World Wide Web itself. However, I'd like to offer an as-exhaustive-as-possible catalog of how one can improve performance by caching. Web resource caching can happen in two different places: client-side - on the browser and server side. In the ",(0,n.kt)("a",{parentName:"p",href:"https://blog.frankel.ch/web-caching/client/"},"previous post"),", I explained the former; this post focuses on the latter.")),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://blog.frankel.ch/web-caching/server/"})),(0,n.kt)("p",null,"While client-side caching works well, it has one central issue: to serve the resource locally, it must first have it in the cache. Thus, each client needs its cached resource. If the requested resource is intensive to compute, it doesn't scale. The idea behind server-side caching is to compute the resource once and serve it from the cache to all clients."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://blog.frankel.ch/assets/generated/web-caching/server-cache.svg",alt:"Server-side cache principle"})),(0,n.kt)("p",null,"A couple of dedicated server-side resource caching solutions have emerged over the years: ",(0,n.kt)("a",{parentName:"p",href:"https://memcached.org/"},"Memcached"),", ",(0,n.kt)("a",{parentName:"p",href:"https://varnish-cache.org/"},"Varnish"),", ",(0,n.kt)("a",{parentName:"p",href:"http://www.squid-cache.org/"},"Squid"),", etc. Other solutions are less focused on web resource caching and more generic, ",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis")," or ",(0,n.kt)("a",{parentName:"p",href:"https://hazelcast.com/"},"Hazelcast"),"."),(0,n.kt)("p",null,"If you want to dive deeper into generic caching solutions, please check these ",(0,n.kt)("a",{parentName:"p",href:"https://blog.frankel.ch/choose-cache/1/"},"two")," ",(0,n.kt)("a",{parentName:"p",href:"https://blog.frankel.ch/choose-cache/2/"},"posts")," on the subject."),(0,n.kt)("p",null,"To continue with the sample from last week, I'll use Apache APISIX to demo server-side caching. APISIX relies on the ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/proxy-cache/"},"proxy-cache")," plugin for caching. Unfortunately, at the moment, APISIX doesn't integrate with any third-party caching solution. It offers two options: memory-based and disk-based."),(0,n.kt)("p",null,"In general, the former is faster, but memory is expensive, while the latter is slower, but disk storage is cheap. Within OpenResty, however, the disk option may be faster because of how LuaJIT handles memory. You should probably start with the disk, and if it's not fast enough, mount ",(0,n.kt)("a",{parentName:"p",href:"https://datacadamia.com/os/linux/shared_memory"},"/dev/shm"),"."),(0,n.kt)("p",null,"Here are my new routes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /cache\n    upstream_id: 1\n    plugins:\n      proxy-rewrite:\n        regex_uri: ["/cache(.*)", "/$1"]\n      proxy-cache: ~\n')),(0,n.kt)("p",null,"Note that the default cache key is the host and the request URI, which includes query parameters."),(0,n.kt)("p",null,"The default ",(0,n.kt)("inlineCode",{parentName:"p"},"proxy-cache")," configuration uses the default disk-based ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml#L53-L69"},"configuration"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"  proxy_cache:                      # Proxy Caching configuration\n    cache_ttl: 10s                  # The default caching time in disk if the upstream does not specify the cache time\n    zones:                          # The parameters of a cache\n      - name: disk_cache_one        # The name of the cache, administrator can specify\n                                    # which cache to use by name in the admin api (disk|memory)\n        memory_size: 50m            # The size of shared memory, it's used to store the cache index for\n                                    # disk strategy, store cache content for memory strategy (disk|memory)\n        disk_size: 1G               # The size of disk, it's used to store the cache data (disk)\n        disk_path: /tmp/disk_cache_one  # The path to store the cache data (disk)\n        cache_levels: 1:2           # The hierarchy levels of a cache (disk)\n      - name: memory_cache\n        memory_size: 50m\n")),(0,n.kt)("p",null,"We can test the setup with ",(0,n.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -v localhost:9080/cache\n")),(0,n.kt)("p",null,"The response is interesting:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'< HTTP/1.1 200 OK\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 147\n< Connection: keep-alive\n< Date: Tue, 29 Nov 2022 13:17:00 GMT\n< Last-Modified: Wed, 23 Nov 2022 13:58:55 GMT\n< ETag: "637e271f-93"\n< Server: APISIX/3.0.0\n< Apisix-Cache-Status: MISS                      #1\n< Accept-Ranges: bytes\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Because the cache is empty, APISIX has a cache miss. Hence, the response is from the upstream")),(0,n.kt)("p",null,"If we ",(0,n.kt)("inlineCode",{parentName:"p"},"curl")," again before the default cache expiration period (300 seconds), the response is from the cache:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"< HTTP/1.1 200 OK\n...\n< Apisix-Cache-Status: HIT\n")),(0,n.kt)("p",null,"After the expiration period, the response is from the upstream, but the header is explicit:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"< HTTP/1.1 200 OK\n...\n< Apisix-Cache-Status: EXPIRED\n")),(0,n.kt)("p",null,"Note that we can explicitly purge the entire cache by using the custom ",(0,n.kt)("inlineCode",{parentName:"p"},"PURGE")," HTTP method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:9080/cache -X PURGE\n")),(0,n.kt)("p",null,"After purging the cache, the above cycle starts anew."),(0,n.kt)("p",null,"Note that it's also possible to bypass the cache, ",(0,n.kt)("em",{parentName:"p"},"e.g."),", for testing purposes. We can configure the plugin accordingly:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /cache*\n    upstream_id: 1\n      proxy-cache:\n        cache_bypass: ["$arg_bypass"]       #1\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Bypass the cache if you send a ",(0,n.kt)("inlineCode",{parentName:"li"},"bypass")," query parameter with a non-",(0,n.kt)("inlineCode",{parentName:"li"},"0")," value")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -v localhost:9080/cache?bypass=please\n")),(0,n.kt)("p",null,"It serves the resource from the upstream regardless of the cache status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"< HTTP/1.1 200 OK\n...\n< Apisix-Cache-Status: BYPASS\n")),(0,n.kt)("p",null,"For more details on all available configuration parameters, check the ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/proxy-cache/"},"proxy-cache")," plugin."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"This post was relatively straightforward. The most challenging issue with server-side caching is the configuration: what to cache, for how long, etc. Unfortunately, it depends significantly on your context, problems, and available resources. You probably need to apply ",(0,n.kt)("abbr",{title:"Plan Do Check Act"},"PDCA"),": guesstimate a relevant configuration, apply it, measure the performance, and rinse and repeat until you find your sweet spot."),(0,n.kt)("p",null,"I hope that with an understanding of both client-side and server-side caching, you'll be able to improve the performance of your applications."),(0,n.kt)("p",null,"The source code is available on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ajavageek/web-caching"},"GitHub"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To go further:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/tutorials/cache-api-responses/"},"Cache API responses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/proxy-cache/"},"proxy-cache plugin"))))}h.isMDXComponent=!0}}]);