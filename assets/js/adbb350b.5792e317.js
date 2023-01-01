"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5427],{5318:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var n=o(7378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(o),m=a,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||r;return o?n.createElement(d,i(i({ref:t},l),{},{components:o})):n.createElement(d,i({ref:t},l))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4891:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(5773),a=(o(7378),o(5318));const r={id:"contributor-guide",title:"Contributing flow",keywords:["API gateway","APISIX","Apache APISIX","contributor guide"],description:"Guidelines for Apache APISIX contributors."},i=void 0,s={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"Contributing flow",description:"Guidelines for Apache APISIX contributors.",source:"@site/docs/general/contributor-guide.md",sourceDirName:".",slug:"/contributor-guide",permalink:"/docs/general/contributor-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/contributor-guide.md",tags:[],version:"current",frontMatter:{id:"contributor-guide",title:"Contributing flow",keywords:["API gateway","APISIX","Apache APISIX","contributor guide"],description:"Guidelines for Apache APISIX contributors."},sidebar:"docs",previous:{title:"Submitting an issue",permalink:"/docs/general/submit-issue"},next:{title:"Contribute a blog post",permalink:"/docs/general/blog"}},u=[{value:"What can I contribute?",id:"what-can-i-contribute",children:[]},{value:"Choosing an issue to work on",id:"choosing-an-issue-to-work-on",children:[{value:"Good first issues",id:"good-first-issues",children:[]}]},{value:"Git flow",id:"git-flow",children:[{value:"Fork the repo and clone your fork",id:"fork-the-repo-and-clone-your-fork",children:[]},{value:"Add &#39;upstream&#39; repo to list of remotes",id:"add-upstream-repo-to-list-of-remotes",children:[]},{value:"Create your branch",id:"create-your-branch",children:[]},{value:"Commiting your changes",id:"commiting-your-changes",children:[]},{value:"Open a pull request",id:"open-a-pull-request",children:[]}]},{value:"Two-Factor Authentication (2FA)",id:"two-factor-authentication-2fa",children:[{value:"Configuring 2FA on GitHub",id:"configuring-2fa-on-github",children:[]},{value:"Submitting code",id:"submitting-code",children:[]}]}],c={toc:u};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes the general flow for contributing to APISIX repos."),(0,a.kt)("h2",{id:"what-can-i-contribute"},"What can I contribute?"),(0,a.kt)("p",null,"Any and all forms of contributions are welcome! For example you can,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Fix issues tagged with "',(0,a.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide/#good-first-issues"},"good first issue"),'" or "',(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues?q=is%3Aopen+label%3A%22help+wanted%22+sort%3Aupdated-desc"},"help wanted"),'" labels.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Join the discussions on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/general/join/"},"mailing list"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Answer questions in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"issues")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"discussions"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Review open ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc"},"pull requests"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Improve the website.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Improve documentation or write a blog post.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Any other form of code or non-code contribution."))),(0,a.kt)("p",null,"If you would like to contribute, let us know by sending an email to ",(0,a.kt)("a",{parentName:"p",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org"),"!"),(0,a.kt)("h2",{id:"choosing-an-issue-to-work-on"},"Choosing an issue to work on"),(0,a.kt)("p",null,"You can also contribute by fixing one of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"open issues"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once you have chosen an issue to work on or ",(0,a.kt)("a",{parentName:"p",href:"/docs/general/submit-issue"},"opened a new issue"),", please comment on the issue and ask a ",(0,a.kt)("a",{parentName:"p",href:"/team"},"Committer or PMC")," to assign it to you.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Please check to see if the issue is already being worked on and indicate when you will be able to complete it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect with a ",(0,a.kt)("a",{parentName:"p",href:"/team"},"Committer or PMC")," for providing feedback on your issue and reviewing your PR."))),(0,a.kt)("h3",{id:"good-first-issues"},"Good first issues"),(0,a.kt)("p",null,'Issues labelled "good first issues" are low hanging fruits that are easy to fix. These issues can help you make your first contributions to APISIX.'),(0,a.kt)("p",null,"To start, you can go through this ",(0,a.kt)("a",{parentName:"p",href:"/contribute"},'curated list of "good first issues"'),"."),(0,a.kt)("h2",{id:"git-flow"},"Git flow"),(0,a.kt)("p",null,"To contribute code or documentation, setup your local machine for development."),(0,a.kt)("h3",{id:"fork-the-repo-and-clone-your-fork"},"Fork the repo and clone your fork"),(0,a.kt)("p",null,"Fork the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/"},"APISIX repo")," and clone your fork to your local machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/your-username/apisix.git\n")),(0,a.kt)("h3",{id:"add-upstream-repo-to-list-of-remotes"},"Add 'upstream' repo to list of remotes"),(0,a.kt)("p",null,"Check to see if the upstream repo has been configured by listing the remotes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git remote -v\n")),(0,a.kt)("p",null,"If not, you can add the upstream remote."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://github.com/apache/apisix.git\n")),(0,a.kt)("p",null,"Learn more about Git and GitHub flow by following the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"GitHub Docs"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Setup your name and email address to make sure that your ID shows up in the contributor list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'git config --global user.name "full name"\ngit config --global user.email "mail address"\n')),(0,a.kt)("h3",{id:"create-your-branch"},"Create your branch"),(0,a.kt)("p",null,"To keep your local fork up to date, fetch and rebase with the upstream remote."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream\ngit checkout master\ngit rebase upstream/master\ngit push origin master\n")),(0,a.kt)("p",null,"Then, to make changes, create a new branch in your local fork."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b issue-no\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The commits in a PR are squashed before merging. This could result in commit logs different from upstream if you are using an older branch."),(0,a.kt)("h3",{id:"commiting-your-changes"},"Commiting your changes"),(0,a.kt)("p",null,"Contributors are expected to adhere to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct.html"},"Code of Conduct")," throughout the process."),(0,a.kt)("p",null,"Once you make the changes, commit the files and push the changes to your fork."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ git add modified-file-names\n$ git commit -m 'commit message'\n$ git push origin issue-no\n")),(0,a.kt)("h3",{id:"open-a-pull-request"},"Open a pull request"),(0,a.kt)("p",null,"Once you have your changes pushed to your fork, it is time to start the process of merging it to upstream by opening a pull request."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/github-flow#create-a-pull-request"},"GitHub flow")," for detailed instructions on making a pull request."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a pull request to the master branch.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure that the pull request title has a semantic prefix like ",(0,a.kt)("inlineCode",{parentName:"p"},"fix:")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"feat:")," or any other ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/commitizen/conventional-commit-types/blob/master/index.json"},"conventional commit types"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reach out to your mentor for starting the review process.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Engage in discussions and provide clarifications to reviewers' questions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wait for your PR to be approved and merged.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Congratulate yourself for being an official contributor of Apache APISIX!"))),(0,a.kt)("h2",{id:"two-factor-authentication-2fa"},"Two-Factor Authentication (2FA)"),(0,a.kt)("p",null,"Two-Factor Authentication (2FA) refers to the authentication method that combines both a password and an object (credit card, SMS, tokens, or biomarkers as fingerprint) to identify a user."),(0,a.kt)("p",null,"To ensure the security of the committer\u2019s account, we need you to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"},"configure 2FA")," while signing in to contribute code on GitHub. For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa"},"Securing your account with two-factor authentication (2FA)"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": If 2FA is not enabled, you are liable to be removed from the project and would not be able to access Apache APISIX's repositories."),(0,a.kt)("h3",{id:"configuring-2fa-on-github"},"Configuring 2FA on GitHub"),(0,a.kt)("p",null,"You can configure 2FA using a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-totp-mobile-app"},"mobile app")," or via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-text-messages"},"text message"),"."),(0,a.kt)("p",null,"GitHub recommends using a time-based-one-time password (TOTP) mobile application to configure 2FA. Read ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"},"Configuring two-factor authentication")," for detailed information."),(0,a.kt)("h3",{id:"submitting-code"},"Submitting code"),(0,a.kt)("p",null,"After enabling 2FA, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"create a personal access token")," to perform Git operations."),(0,a.kt)("p",null,"You can then use the username + personal access token combination in place of the username + password combination while pushing your code."))}l.isMDXComponent=!0}}]);