"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[371],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7192:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_label:"Participate in the Celestia Testnets"},o="Participate in the Celestia Testnets",c={unversionedId:"nodes/participate",id:"nodes/participate",title:"Participate in the Celestia Testnets",description:"Celestia currently has two exisiting testnets that will enable participation:",source:"@site/docs/nodes/participate.md",sourceDirName:"nodes",slug:"/nodes/participate",permalink:"/pr-preview/pr-412/nodes/participate",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/participate.md",tags:[],version:"current",frontMatter:{sidebar_label:"Participate in the Celestia Testnets"},sidebar:"nodes",previous:{title:"Overview",permalink:"/pr-preview/pr-412/nodes/overview"},next:{title:"Arabica Devnet",permalink:"/pr-preview/pr-412/nodes/arabica-devnet"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"participate-in-the-celestia-testnets"},"Participate in the Celestia Testnets"),(0,a.kt)("p",null,"Celestia currently has two exisiting testnets that will enable participation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./arabica-devnet"},"Arabica Devnet"),": A devnet focused on developers who\nwant to deploy sovereign rollups on the latest changes from Celestia's codebase.\nArabica will be updated frequently and might be unstable at times given new updates.\nValidators won't be able to validate on Arabica as it is not designed for\nvalidators to participate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./mocha-testnet"},"Mocha Testnet"),": A testnet focused on enabling validators\nto test out their infrastructure by running nodes connected to the network. Developers\ncan also deploy sovereign rollups on Mocha, it just will always be behind Arabica\nas Mocha upgrades are slower given they need to be done via hardforks in coordination\nwith the validator community on Mocha.")))}u.isMDXComponent=!0}}]);