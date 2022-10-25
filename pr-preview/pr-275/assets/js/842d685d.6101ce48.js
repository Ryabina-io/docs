"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3797],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Mamaki Testnet"},s="Mamaki Testnet",p={unversionedId:"nodes/mamaki-testnet",id:"nodes/mamaki-testnet",title:"Mamaki Testnet",description:"mamaki-testnet",source:"@site/docs/nodes/mamaki-testnet.md",sourceDirName:"nodes",slug:"/nodes/mamaki-testnet",permalink:"/nodes/mamaki-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/mamaki-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Mamaki Testnet"},sidebar:"nodes",previous:{title:"Arabica Devnet",permalink:"/nodes/arabica-devnet"},next:{title:"Resources",permalink:"/category/resources"}},c={},u=[{value:"RPC endpoints",id:"rpc-endpoints",level:2},{value:"Mamaki Testnet faucet",id:"mamaki-testnet-faucet",level:2},{value:"Explorers",id:"explorers",level:2},{value:"Setup P2P network",id:"setup-p2p-network",level:2},{value:"Quick-sync with snapshot",id:"quick-sync-with-snapshot",level:2},{value:"Delegate to a validator",id:"delegate-to-a-validator",level:2},{value:"Connect validator",id:"connect-validator",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mamaki-testnet"},"Mamaki Testnet"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mamaki-testnet",src:n(747).Z,width:"2000",height:"1000"})),(0,o.kt)("p",null,"This guide contains the relevant sections for how to connect to Mamaki,\ndepending on the type of node you are running. Mamaki Testnet is designed\nto help validators test out their infrastructure and node software\nwith the test network. Developers are encouraged to deploy their\nsovereign rollups on Mamaki, but we also recommend ",(0,o.kt)("a",{parentName:"p",href:"/nodes/arabica-devnet"},"Arabica Devnet"),"\nfor that as it is designed for development purposes."),(0,o.kt)("p",null,"Mamaki is a milestone in Celestia, allowing everyone to test out\ncore functionalities on the network. Read the anouncement ",(0,o.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-testnet-introduces-alpha-data-availability-api/"},"here"),"."),(0,o.kt)("p",null,"Your best approach to participating is to first determine which node\nyou would like to run. Each node guides will link to the relevant network\nin order to show you how to connect to them."),(0,o.kt)("p",null,"You have a list of options on the type of nodes you can run in order to\nparticipate in Mamaki:"),(0,o.kt)("p",null,"Consensus:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/validator-node"},"Validator Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/consensus-full-node"},"Consensus Full Node"))),(0,o.kt)("p",null,"Data Availability:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/bridge-node"},"Bridge Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/full-storage-node"},"Full Storage Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/light-node"},"Light Node"))),(0,o.kt)("p",null,"Select the type of node you would like to run and follow the instructions\non each respective page. Whenever you are asked to select the type of network\nyou want to connect to in those guides, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Mamaki")," in order to refer\nto the correct instructions on this page on how to connect to Mamaki."),(0,o.kt)("h2",{id:"rpc-endpoints"},"RPC endpoints"),(0,o.kt)("p",null,"There is a list of RPC endpoints you can use to connect to Mamaki Testnet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rpc-mamaki.pops.one"},"https://rpc-mamaki.pops.one")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rpc-1.celestia.nodes.guru"},"https://rpc-1.celestia.nodes.guru")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grpc-1.celestia.nodes.guru:10790"},"https://grpc-1.celestia.nodes.guru:10790")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://celestia-testnet-rpc.polkachu.com/"},"https://celestia-testnet-rpc.polkachu.com/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rpc.celestia.testnet.run/"},"https://rpc.celestia.testnet.run")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rpc.mamaki.celestia.counterpoint.software"},"https://rpc.mamaki.celestia.counterpoint.software"))),(0,o.kt)("h2",{id:"mamaki-testnet-faucet"},"Mamaki Testnet faucet"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER\nDISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS\nDO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC\nDISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.")),(0,o.kt)("p",null,"You can request from Mamaki Testnet Faucet on the #mamaki-faucet channel on\nCelestia's Discord server with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$request <CELESTIA-ADDRESS>\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<CELESTIA-ADDRESS>")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia1******")," generated address."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Faucet has a limit of 10 tokens per week per address/Discord ID")),(0,o.kt)("h2",{id:"explorers"},"Explorers"),(0,o.kt)("p",null,"There are several explorers you can use for Mamaki:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.mintscan.io/celestia-testnet"},"https://testnet.mintscan.io/celestia-testnet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://celestia.explorers.guru/"},"https://celestia.explorers.guru/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://celestiascan.vercel.app/"},"https://celestiascan.vercel.app/"))),(0,o.kt)("h2",{id:"setup-p2p-network"},"Setup P2P network"),(0,o.kt)("p",null,"Now we will setup the P2P Networks by cloning the networks repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git\n")),(0,o.kt)("p",null,'To initialize the network pick a "node-name" that describes your\nnode. The --chain-id parameter we are using here is ',(0,o.kt)("inlineCode",{parentName:"p"},"mamaki"),". Keep in\nmind that this might change if a new testnet is deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd init "node-name" --chain-id mamaki\n')),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file. For mamaki we are using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp $HOME/networks/mamaki/genesis.json $HOME/.celestia-app/config\n")),(0,o.kt)("p",null,"Set seeds and peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'BOOTSTRAP_PEERS=$(curl -sL https://raw.githubusercontent.com/celestiaorg/networks/master/mamaki/bootstrap-peers.txt | tr -d \'\\n\')\necho $BOOTSTRAP_PEERS\nsed -i.bak -e "s/^bootstrap-peers *=.*/bootstrap-peers = \\"$BOOTSTRAP_PEERS\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,o.kt)("p",null,"Note: You can find more peers ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/mamaki/peers.txt"},"here"),"."),(0,o.kt)("h2",{id:"quick-sync-with-snapshot"},"Quick-sync with snapshot"),(0,o.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,o.kt)("inlineCode",{parentName:"p"},"mamaki"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">mamaki.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n')),(0,o.kt)("h2",{id:"delegate-to-a-validator"},"Delegate to a validator"),(0,o.kt)("p",null,"To delegate tokens to the ",(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," validator, as an\nexample you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking delegate \\\n    celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p 1000000utia \\\n    --from=$VALIDATOR_WALLET --chain-id=mamaki\n")),(0,o.kt)("p",null,"If successful, you should see a similar output as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')),(0,o.kt)("p",null,"You can check if the TX hash went through using the block explorer by\ninputting the ",(0,o.kt)("inlineCode",{parentName:"p"},"txhash")," ID that was returned."),(0,o.kt)("h2",{id:"connect-validator"},"Connect validator"),(0,o.kt)("p",null,"Continuing the Validator tutorial, here are the steps to connect your\nvalidator to Mamaki:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'MONIKER="your_moniker"\nVALIDATOR_WALLET="validator"\n\ncelestia-appd tx staking create-validator \\\n    --amount=1000000utia \\\n    --pubkey=$(celestia-appd tendermint show-validator) \\\n    --moniker=$MONIKER \\\n    --chain-id=mamaki \\\n    --commission-rate=0.1 \\\n    --commission-max-rate=0.2 \\\n    --commission-max-change-rate=0.01 \\\n    --min-self-delegation=1000000 \\\n    --from=$VALIDATOR_WALLET \\\n    --keyring-backend=test\n')),(0,o.kt)("p",null,"You will be prompted to confirm the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"confirm transaction before signing and broadcasting [y/N]: y\n")),(0,o.kt)("p",null,"Inputting ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," should provide an output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')),(0,o.kt)("p",null,"You should now be able to see your validator from a block explorer like ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.explorers.guru/"},"here")))}d.isMDXComponent=!0},747:function(e,t,n){t.Z=n.p+"assets/images/mamaki-d63b2fa8215b512b0703a12df0d7d05d.png"}}]);