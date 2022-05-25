"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[393],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,g=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Setting Up A Celestia Bridge Node",d={unversionedId:"nodes/bridge-node",id:"nodes/bridge-node",title:"Setting Up A Celestia Bridge Node",description:"This tutorial will go over the steps to setting up your Celestia Bridge node.",source:"@site/docs/nodes/bridge-node.md",sourceDirName:"nodes",slug:"/nodes/bridge-node",permalink:"/nodes/bridge-node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/bridge-node.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Setting Up A Celestia Validator Node",permalink:"/nodes/validator-node"},next:{title:"Setting Up A Celestia Full Node",permalink:"/nodes/full-node"}},u={},p=[{value:"Overview of Bridge Nodes",id:"overview-of-bridge-nodes",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setting Up Your Bridge Node",id:"setting-up-your-bridge-node",level:2},{value:"Setup The Dependencies",id:"setup-the-dependencies",level:3},{value:"Deploy the Celestia Bridge Node",id:"deploy-the-celestia-bridge-node",level:2},{value:"Install Celestia Node",id:"install-celestia-node",level:3},{value:"Get the trusted hash",id:"get-the-trusted-hash",level:3},{value:"Initialize the Bridge Node",id:"initialize-the-bridge-node",level:3},{value:"Configure the Bridge Node",id:"configure-the-bridge-node",level:3},{value:"Run the Bridge Node",id:"run-the-bridge-node",level:3},{value:"Optional: Start the Bridge Node with SystemD",id:"optional-start-the-bridge-node-with-systemd",level:3}],c={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-a-celestia-bridge-node"},"Setting Up A Celestia Bridge Node"),(0,i.kt)("p",null,"This tutorial will go over the steps to setting up your Celestia Bridge node."),(0,i.kt)("p",null,"Bridge nodes connect the data availability layer and the consensus layer while\nalso having the option of becoming a validator."),(0,i.kt)("h2",{id:"overview-of-bridge-nodes"},"Overview of Bridge Nodes"),(0,i.kt)("p",null,"A Celestia bridge node has the following properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Import and process \u201craw\u201d headers & blocks from a trusted Core process\n(meaning a trusted RPC connection to a celestia-core node) in the Consensus\nnetwork. Bridge Nodes can run this Core process internally (embedded) or\nsimply connect to a remote endpoint. Bridge Nodes also have the option of\nbeing an active validator in the Consensus network."),(0,i.kt)("li",{parentName:"ol"},"Validate and erasure code the \u201craw\u201d blocks"),(0,i.kt)("li",{parentName:"ol"},"Supply block shares with data availability headers to Light Nodes in the\nDA network.\n",(0,i.kt)("img",{alt:"bridge-node-diagram",src:n(8842).Z,width:"2802",height:"700"}))),(0,i.kt)("p",null,"From an implementation perspective, Bridge Nodes run two separate processes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Celestia App with Celestia Core\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"see repo"),")"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Celestia App")," is the state machine where the application and the\nproof-of-stake logic is run. Celestia App is built on\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/"},"Cosmos SDK")," and also encompasses\n",(0,i.kt)("strong",{parentName:"li"},"Celestia Core"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Celestia Core")," is the state interaction, consensus and block production\nlayer. Celestia Core is built on\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/"},"Tendermint Core"),", modified to store data roots\nof erasure coded blocks among other changes\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/celestia-core/tree/master/docs/celestia-architecture"},"see ADRs"),")."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Celestia Node (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node"},"see repo"),")"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Celestia Node")," augments the above with a separate libp2p network that\nserves data availability sampling requests. The team sometimes refer to\nthis as the \u201chalo\u201d network.")))),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nbridge node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,i.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,i.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,i.kt)("h2",{id:"setting-up-your-bridge-node"},"Setting Up Your Bridge Node"),(0,i.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,i.kt)("h3",{id:"setup-the-dependencies"},"Setup The Dependencies"),(0,i.kt)("p",null,"Follow the tutorial here installing the dependencies ",(0,i.kt)("a",{parentName:"p",href:"../developers/environment"},"here"),"."),(0,i.kt)("h2",{id:"deploy-the-celestia-bridge-node"},"Deploy the Celestia Bridge Node"),(0,i.kt)("h3",{id:"install-celestia-node"},"Install Celestia Node"),(0,i.kt)("p",null,"Install the Celestia Node binary, which will be used to run the Bridge Node."),(0,i.kt)("p",null,"Follow the tutorial for installing Celestia Node ",(0,i.kt)("a",{parentName:"p",href:"../developers/celestia-node"},"here"),"."),(0,i.kt)("h3",{id:"get-the-trusted-hash"},"Get the trusted hash"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Caveat: You need a running celestia-app in order to continue this guideline.\nPlease refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/celestia-app.md"},"celestia-app.md"),"\nfor installation.  ")),(0,i.kt)("p",null,"You need to have the trusted server to initialize the Bridge Node. You can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:26657")," for your local run of ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-app"),". The trusted hash\nis an optional flag and does not need to be used. If you are not passing it,\nthe Bridge Node will just sync from the beginning, which is also the preferred\noption of how to run it."),(0,i.kt)("p",null,"An example of how to query your local celestia-app to get the trusted hash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s http://localhost:26657/block?height=1 | grep -A1 block_id | grep hash\n")),(0,i.kt)("h3",{id:"initialize-the-bridge-node"},"Initialize the Bridge Node"),(0,i.kt)("p",null,"Run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.remote tcp://<ip-address>:26657 \\\n  --core.grpc http://<ip-address>:9090\n")),(0,i.kt)("h3",{id:"configure-the-bridge-node"},"Configure the Bridge Node"),(0,i.kt)("p",null,"To configure your Bridge Node to connect to your network of choice,\nselect one of the networks you would like to connect to from this list and\nfollow the instructions there before proceeding with the rest of this guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/devnet-2#configure-the-bridge-node"},"Devnet-2"))),(0,i.kt)("h3",{id:"run-the-bridge-node"},"Run the Bridge Node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start \n")),(0,i.kt)("h3",{id:"optional-start-the-bridge-node-with-systemd"},"Optional: Start the Bridge Node with SystemD"),(0,i.kt)("p",null,"SystemD is a daemon service useful for running applications as background processes."),(0,i.kt)("p",null,"Create Celestia Bridge systemd file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-bridge.service\n[Unit]\nDescription=celestia-bridge Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia bridge start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,i.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-bridge.service\n")),(0,i.kt)("p",null,"Enable and start celestia-bridge daemon:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable celestia-bridge\nsudo systemctl start celestia-bridge && sudo journalctl -u \\\ncelestia-bridge.service -f\n")),(0,i.kt)("p",null,"Now, the Celestia bridge node will start syncing headers and storing blocks\nfrom Celestia application."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: At startup, we can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"multiaddress")," from Celestia Bridge Node.\nThis is ",(0,i.kt)("strong",{parentName:"p"},"needed for future Light Node")," connections and communication\nbetween Celestia Bridge Nodes  ")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"/ip4/46.101.22.123/tcp/2121/p2p/12D3KooWD5wCBJXKQuDjhXFjTFMrZoysGVLtVht5hMoVbSLCbV22\n")),(0,i.kt)("p",null,"You should be seeing logs coming through of the bridge node syncing."),(0,i.kt)("p",null,"You have successfully set up a bridge node that is syncing with the network."))}h.isMDXComponent=!0},8842:function(e,t,n){t.Z=n.p+"assets/images/BridgeNodes-c9d5799bf588d3becaefb313bd03b0c2.png"}}]);