"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9833],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),u=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||l[f]||s;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<s;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5714:function(e,r,t){t.r(r),t.d(r,{assets:function(){return a},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=t(3117),o=(t(7294),t(3905));const s={sidebar_label:"Devops Resources"},i="DevOps Resources",c={unversionedId:"nodes/devops-resources",id:"nodes/devops-resources",title:"DevOps Resources",description:"This section will be provide an overview of different available resources",source:"@site/docs/nodes/devops-resources.md",sourceDirName:"nodes",slug:"/nodes/devops-resources",permalink:"/pr-preview/pr-352/nodes/devops-resources",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/devops-resources.md",tags:[],version:"current",frontMatter:{sidebar_label:"Devops Resources"},sidebar:"nodes",previous:{title:"SystemD",permalink:"/pr-preview/pr-352/nodes/systemd"},next:{title:"Config.toml Guide",permalink:"/pr-preview/pr-352/nodes/config-toml"}},a={},u=[{value:"Docker Compose",id:"docker-compose",level:2}],p={toc:u};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"devops-resources"},"DevOps Resources"),(0,o.kt)("p",null,"This section will be provide an overview of different available resources\nfor Developers and Node Operators looking to test out Celestia architecture."),(0,o.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One resource for playing with Docker Compose for Celestia infrastructure\nis the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/ephemeral-cluster"},"ephemeral-cluster"),"\nrepository. This repository provides infrastructure for doing integration\ntestings for development by running a Docker Compose instance of Celestia\ndevnet. It is not recommended to be used as-is for running nodes individually.")))}l.isMDXComponent=!0}}]);