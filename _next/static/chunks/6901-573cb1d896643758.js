"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6901],{96901:function(e,a,n){n.d(a,{_h:function(){return ne},K5:function(){return ae}});var t,r,i,c=n(17674),o=n(8198),u=n(98260),d=n(39499),f=n.n(d),s=n(67294),E=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'),l=n(92777),A=n(82262),p=n(81531),C=n(63553),_=n(37247),b=n(59499),U=n(38776);function B(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,_.Z)(e);if(a){var r=(0,_.Z)(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return(0,C.Z)(this,n)}}function O(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function D(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?O(Object(n),!0).forEach((function(a){(0,b.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var w=new u.WU(u.a_.MAINNET,"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",6,"USDC","USD//C"),I=new u.WU(u.a_.GOERLI,"0x07865c6e87b9f70255377e024ace6630c1eaa37f",6,"USDC","USD//C"),W=new u.WU(u.a_.SEPOLIA,"0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5",6,"USDC","USD//C"),v=new u.WU(u.a_.OPTIMISM,"0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",6,"USDC","USD//C"),h=new u.WU(u.a_.OPTIMISM_GOERLI,"0xe05606174bac4A6364B31bd0eCA4bf4dD368f8C6",6,"USDC","USD//C"),M=new u.WU(u.a_.ARBITRUM_ONE,"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",6,"USDC","USD//C"),y=new u.WU(u.a_.ARBITRUM_GOERLI,"0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892",6,"USDC","USD//C"),N=new u.WU(u.a_.POLYGON,"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",6,"USDC","USD Coin"),T=new u.WU(u.a_.POLYGON_MUMBAI,"0x0fa8781a83e46826621b3bc094ea2a0212e71b23",6,"USDC","USD Coin"),S=new u.WU(u.a_.CELO,"0x37f750B7cC259A2f741AF45294f6a16572CF5cAd",6,"USDCet","USDC (Portal from Ethereum)"),m=new u.WU(u.a_.BASE,"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",6,"USDC","USD Coin"),L=(new u.WU(u.a_.MAINNET,"0x6B175474E89094C44Da98b954EedeAC495271d0F",18,"DAI","Dai Stablecoin"),new u.WU(u.a_.ARBITRUM_ONE,"0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",18,"DAI","Dai stable coin"),new u.WU(u.a_.OPTIMISM,"0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",18,"DAI","Dai stable coin"),new u.WU(u.a_.MAINNET,"0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",18,"MATIC","Polygon Matic"),new u.WU(u.a_.POLYGON,"0x0000000000000000000000000000000000001010",18,"MATIC","Matic"),new u.WU(u.a_.POLYGON,"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",18,"DAI","Dai Stablecoin"),new u.WU(u.a_.POLYGON,"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",6,"USDT","Tether USD"),new u.WU(u.a_.POLYGON,"0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",8,"WBTC","Wrapped BTC"),new u.WU(u.a_.MAINNET,"0xdAC17F958D2ee523a2206206994597C13D831ec7",6,"USDT","Tether USD"),new u.WU(u.a_.ARBITRUM_ONE,"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",6,"USDT","Tether USD"),new u.WU(u.a_.OPTIMISM,"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",6,"USDT","Tether USD"),new u.WU(u.a_.MAINNET,"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",8,"WBTC","Wrapped BTC"),new u.WU(u.a_.ARBITRUM_ONE,"0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",8,"WBTC","Wrapped BTC"),new u.WU(u.a_.OPTIMISM,"0x68f180fcCe6836688e9084f035309E29Bf0A2095",8,"WBTC","Wrapped BTC"),new u.WU(u.a_.POLYGON_MUMBAI,"0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa",18,"WETH","Wrapped Ether"),new u.WU(u.a_.POLYGON,"0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",18,"WETH","Wrapped Ether"),new u.WU(u.a_.CELO,"0x471EcE3750Da237f93B8E339c536989b8978a438",18,"CELO","Celo")),x=(new u.WU(u.a_.CELO,"0x765DE816845861e75A25fCA122bb6898B8B1282a",18,"cUSD","Celo Dollar"),new u.WU(u.a_.CELO,"0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",18,"cEUR","Celo Euro Stablecoin"),new u.WU(u.a_.CELO,"0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207",18,"ETH","Portal Ether"),new u.WU(u.a_.CELO,"0xd71Ffd0940c920786eC4DbB5A12306669b5b81EF",18,"WBTC","Wrapped BTC"),new u.WU(u.a_.CELO_ALFAJORES,"0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",18,"CELO","Celo")),F=(new u.WU(u.a_.CELO_ALFAJORES,"0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",18,"CUSD","Celo Dollar"),new u.WU(u.a_.CELO_ALFAJORES,"0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F",18,"CEUR","Celo Euro Stablecoin"),new u.WU(u.a_.BNB,"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",18,"USDC","USDC")),R=(new u.WU(u.a_.BNB,"0x55d398326f99059fF775485246999027B3197955",18,"USDT","USDT"),new u.WU(u.a_.BNB,"0x2170Ed0880ac9A755fd29B2688956BD959F933F8",18,"ETH","Ethereum"),new u.WU(u.a_.BNB,"0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",18,"BTCB","BTCB"),new u.WU(u.a_.BNB,"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",18,"BUSD","BUSD"),new u.WU(u.a_.BNB,"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",18,"DAI","DAI"),new u.WU(u.a_.AVALANCHE,"0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",6,"USDC","USDC Token")),Z=(new u.WU(u.a_.AVALANCHE,"0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",6,"USDT","Tether USD"),new u.WU(u.a_.AVALANCHE,"0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",18,"WETH","Wrapped Ether"),new u.WU(u.a_.AVALANCHE,"0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",18,"DAI.e","Dai.e Token"),t={},(0,b.Z)(t,u.a_.MAINNET,new u.WU(u.a_.MAINNET,u.w3[u.a_.MAINNET],18,"UNI","Uniswap")),(0,b.Z)(t,u.a_.GOERLI,new u.WU(u.a_.GOERLI,u.w3[u.a_.GOERLI],18,"UNI","Uniswap")),(0,b.Z)(t,u.a_.SEPOLIA,new u.WU(u.a_.SEPOLIA,u.w3[u.a_.SEPOLIA],18,"UNI","Uniswap")),new u.WU(u.a_.ARBITRUM_ONE,"0x912CE59144191C1204E64559FE8253a0e49E6548",18,"ARB","Arbitrum"),new u.WU(u.a_.OPTIMISM,"0x4200000000000000000000000000000000000042",18,"OP","Optimism"),new u.WU(u.a_.MAINNET,"0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",18,"LDO","Lido DAO Token"),new u.WU(u.a_.MAINNET,"0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",18,"NMR","Numeraire"),new u.WU(u.a_.MAINNET,"0xd3E4Ba569045546D09CF021ECC5dFe42b1d7f6E4",18,"MNW","Morpheus.Network"),D(D({},u.g9),{},(r={},(0,b.Z)(r,u.a_.OPTIMISM,new u.WU(u.a_.OPTIMISM,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether")),(0,b.Z)(r,u.a_.OPTIMISM_GOERLI,new u.WU(u.a_.OPTIMISM_GOERLI,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether")),(0,b.Z)(r,u.a_.BASE,new u.WU(u.a_.BASE,"0x4200000000000000000000000000000000000006",18,"WETH","Wrapped Ether")),(0,b.Z)(r,u.a_.ARBITRUM_ONE,new u.WU(u.a_.ARBITRUM_ONE,"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",18,"WETH","Wrapped Ether")),(0,b.Z)(r,u.a_.ARBITRUM_GOERLI,new u.WU(u.a_.ARBITRUM_GOERLI,"0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",18,"WETH","Wrapped Ether")),(0,b.Z)(r,u.a_.SEPOLIA,new u.WU(u.a_.SEPOLIA,"0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",18,"WETH","Wrapped Ether")),(0,b.Z)(r,u.a_.POLYGON,new u.WU(u.a_.POLYGON,"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",18,"WMATIC","Wrapped MATIC")),(0,b.Z)(r,u.a_.POLYGON_MUMBAI,new u.WU(u.a_.POLYGON_MUMBAI,"0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",18,"WMATIC","Wrapped MATIC")),(0,b.Z)(r,u.a_.CELO,new u.WU(u.a_.CELO,"0x471ece3750da237f93b8e339c536989b8978a438",18,"CELO","Celo native asset")),(0,b.Z)(r,u.a_.CELO_ALFAJORES,new u.WU(u.a_.CELO_ALFAJORES,"0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9",18,"CELO","Celo native asset")),(0,b.Z)(r,u.a_.BNB,new u.WU(u.a_.BNB,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNB")),(0,b.Z)(r,u.a_.AVALANCHE,new u.WU(u.a_.AVALANCHE,"0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",18,"WAVAX","Wrapped AVAX")),r)));function P(e){return e===u.a_.POLYGON_MUMBAI||e===u.a_.POLYGON}var G=function(e){(0,p.Z)(n,e);var a=B(n);function n(e){if((0,l.Z)(this,n),!P(e))throw new Error("Not Polygon");return a.call(this,e,18,"MATIC","Matic")}return(0,A.Z)(n,[{key:"equals",value:function(e){return e.isNative&&e.chainId===this.chainId}},{key:"wrapped",get:function(){if(!P(this.chainId))throw new Error("Not Polygon");var e=Z[this.chainId];return(0,U.Z)(e instanceof u.WU),e}}]),n}(u.Yp);function g(e){return e===u.a_.BNB}var k=function(e){(0,p.Z)(n,e);var a=B(n);function n(e){if((0,l.Z)(this,n),!g(e))throw new Error("Not bnb");return a.call(this,e,18,"BNB","BNB")}return(0,A.Z)(n,[{key:"equals",value:function(e){return e.isNative&&e.chainId===this.chainId}},{key:"wrapped",get:function(){if(!g(this.chainId))throw new Error("Not bnb");var e=Z[this.chainId];return(0,U.Z)(e instanceof u.WU),e}}]),n}(u.Yp);function Y(e){return e===u.a_.AVALANCHE}var H=function(e){(0,p.Z)(n,e);var a=B(n);function n(e){if((0,l.Z)(this,n),!Y(e))throw new Error("Not avalanche");return a.call(this,e,18,"AVAX","AVAX")}return(0,A.Z)(n,[{key:"equals",value:function(e){return e.isNative&&e.chainId===this.chainId}},{key:"wrapped",get:function(){if(!Y(this.chainId))throw new Error("Not avalanche");var e=Z[this.chainId];return(0,U.Z)(e instanceof u.WU),e}}]),n}(u.Yp),V=function(e){(0,p.Z)(n,e);var a=B(n);function n(){return(0,l.Z)(this,n),a.apply(this,arguments)}return(0,A.Z)(n,[{key:"wrapped",get:function(){var e=Z[this.chainId];if(e)return e;throw new Error("Unsupported chain ID: ".concat(this.chainId))}}],[{key:"onChain",value:function(e){var a;return null!==(a=this._cachedExtendedEther[e])&&void 0!==a?a:this._cachedExtendedEther[e]=new n(e)}}]),n}(u.sf);(0,b.Z)(V,"_cachedExtendedEther",{});var j={};function J(e){return j[e]?j[e]:(a=P(e)?new G(e):function(e){return e===u.a_.CELO_ALFAJORES||e===u.a_.CELO}(e)?function(e){switch(e){case u.a_.CELO_ALFAJORES:return x;case u.a_.CELO:return L;default:throw new Error("Not celo")}}(e):g(e)?new k(e):Y(e)?new H(e):V.onChain(e),j[e]=a);var a}i={},(0,b.Z)(i,u.a_.MAINNET,w.address),(0,b.Z)(i,u.a_.ARBITRUM_ONE,M.address),(0,b.Z)(i,u.a_.ARBITRUM_GOERLI,y.address),(0,b.Z)(i,u.a_.OPTIMISM,v.address),(0,b.Z)(i,u.a_.OPTIMISM_GOERLI,h.address),(0,b.Z)(i,u.a_.POLYGON,N.address),(0,b.Z)(i,u.a_.POLYGON_MUMBAI,T.address),(0,b.Z)(i,u.a_.BNB,F.address),(0,b.Z)(i,u.a_.BASE,m.address),(0,b.Z)(i,u.a_.CELO,S.address),(0,b.Z)(i,u.a_.CELO_ALFAJORES,S.address),(0,b.Z)(i,u.a_.GOERLI,I.address),(0,b.Z)(i,u.a_.SEPOLIA,W.address),(0,b.Z)(i,u.a_.AVALANCHE,R.address);var q=n(77537),X=n(2658),K=n(20154),$=n(37221);var z=new o.vU(E),Q={gasRequired:185e3};function ee(e,a){return function(e,a){var n=(0,q.Z)().chainId,t=(0,s.useMemo)((function(){var e;return null!==(e=null===a||void 0===a?void 0:a.filter((function(e){return!1!==(0,X.U)(null===e||void 0===e?void 0:e.address)&&(null===e||void 0===e?void 0:e.chainId)===n})))&&void 0!==e?e:[]}),[n,a]),r=(0,s.useMemo)((function(){return t.map((function(e){return e.address}))}),[t]),i=(0,K._Y)(r,z,"balanceOf",(0,s.useMemo)((function(){return[e]}),[e]),Q),c=(0,s.useMemo)((function(){return i.some((function(e){return e.loading}))}),[i]);return(0,s.useMemo)((function(){return[e&&t.length>0?t.reduce((function(e,a,n){var t,r,c=null===i||void 0===i||null===(t=i[n])||void 0===t||null===(r=t.result)||void 0===r?void 0:r[0],o=c?f().BigInt(c.toString()):void 0;return o&&(e[a.address]=u.ih.fromRawAmount(a,o)),e}),{}):{},c]}),[e,t,c,i])}(e,a)[0]}function ae(e,a){var n=(0,s.useMemo)((function(){var e;return null!==(e=null===a||void 0===a?void 0:a.filter((function(e){var a;return null!==(a=null===e||void 0===e?void 0:e.isToken)&&void 0!==a&&a})))&&void 0!==e?e:[]}),[a]),t=(0,q.Z)().chainId,r=ee(e,n),i=(0,s.useMemo)((function(){var e;return null!==(e=null===a||void 0===a?void 0:a.some((function(e){return null===e||void 0===e?void 0:e.isNative})))&&void 0!==e&&e}),[a]),o=function(e){var a=(0,q.Z)().chainId,n=(0,$.h$)(),t=(0,s.useMemo)((function(){return e?e.map(X.U).filter((function(e){return!1!==e})).sort().map((function(e){return[e]})):[]}),[e]),r=(0,K.es)(n,"getEthBalance",t);return(0,s.useMemo)((function(){return t.reduce((function(e,n,t){var i,o,d=(0,c.Z)(n,1)[0],s=null===r||void 0===r||null===(i=r[t])||void 0===i||null===(o=i.result)||void 0===o?void 0:o[0];return s&&a&&(e[d]=u.ih.fromRawAmount(J(a),f().BigInt(s.toString()))),e}),{})}),[t,a,r])}((0,s.useMemo)((function(){return i?[e]:[]}),[i,e]));return(0,s.useMemo)((function(){var n;return null!==(n=null===a||void 0===a?void 0:a.map((function(a){if(e&&a&&a.chainId===t&&r)return a.isToken?r[a.address]:a.isNative?o[e]:void 0})))&&void 0!==n?n:[]}),[e,t,a,o,r])}function ne(e,a){return ae(e,(0,s.useMemo)((function(){return[a]}),[a]))[0]}}}]);
//# sourceMappingURL=6901-573cb1d896643758.js.map