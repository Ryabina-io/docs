"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9051],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2162:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const i={sidebar_label:"gm world Overview"},l="\u2600\ufe0f\xa0Introduction",a={unversionedId:"developers/gm-world",id:"developers/gm-world",title:"\u2600\ufe0f\xa0Introduction",description:"In this tutorial, we will build a sovereign gm world rollup using rollmint",source:"@site/docs/developers/gm-world.md",sourceDirName:"developers",slug:"/developers/gm-world",permalink:"/pr-preview/pr-423/fr/developers/gm-world",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-world.md",tags:[],version:"current",frontMatter:{sidebar_label:"gm world Overview"},sidebar:"developers",previous:{title:"gm world",permalink:"/pr-preview/pr-423/fr/category/gm-world"},next:{title:"Setup",permalink:"/pr-preview/pr-423/fr/developers/gm-setup"}},c={},u=[{value:"Table of Contents",id:"table-of-contents",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0fintroduction"},"\u2600\ufe0f\xa0Introduction"),(0,o.kt)("p",null,"In this tutorial, we will build a sovereign ",(0,o.kt)("inlineCode",{parentName:"p"},"gm world")," rollup using rollmint\nand Celestia\u2019s data availability and consensus layer to submit rollmint blocks."),(0,o.kt)("p",null,"This tutorial will cover setting up a Celestia Light Node, Ignite CLI, and\nbuilding a Cosmos-SDK application-specific rollup blockchain on top of\nCelestia."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK")," is a framework for\nbuilding blockchain applications. The Cosmos Ecosystem uses\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"},"Inter-Blockchain Communication (IBC)"),"\nto allow blockchains to communicate with one another."),(0,o.kt)("admonition",{title:"caution",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The script for this tutorial is built for Mocha Testnet.\nIf you choose to use Arabica Devnet,\nyou will need to modify the script manually.")),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./gm-setup"},"Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./gm-node"},"Run a Light Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./gm-rollmint"},"Build a Sovereign Rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./gm-query"},"Query your Rollup"))))}s.isMDXComponent=!0}}]);