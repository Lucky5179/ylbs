(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9618],{85892:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ie}});var n=r(88175),i=r(15446),o=r(94233),s=r(46158),a=r(77537),l=r(61953),u=r(36336),c=r(81138),d=r(67294),p=r(85893),x=function(){return(0,p.jsx)(l.Z,{sx:{pt:{xs:8,md:12},pb:{xs:4,md:8}},children:(0,p.jsx)(u.Z,{sx:{pb:0},children:(0,p.jsx)(l.Z,{sx:{px:0},children:(0,p.jsx)(c.Z,{variant:"h1",sx:{fontSize:{xs:"28px",md:"32px"}},children:"Leverage"})})})})},m=r(90116),f=r(49501),h=r(62097),b=r(61225),j=r(45556),v=r(71467),y=r(89154),g=r(87899),O=r(98924),k=r(90871),P=r(57911),C=r(58527),w=r(71709),Z=r(95700),A=r(8195),L=r(59499),S=r(4730),D=r(36667),_=["sx"];function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,L.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.sx,r=(0,S.Z)(e,_);return(0,p.jsx)(D.Z,T(T({},r),{},{sx:T((0,L.Z)({color:"#CDBEFD",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.06)",background:"radial-gradient(302.62% 77.77% at 0% 0%, rgba(128, 97, 229, 0.14) 0%, rgba(128, 97, 229, 0.00) 100%), radial-gradient(253.43% 70.61% at 100% 100%, rgba(128, 97, 229, 0.12) 0%, rgba(128, 97, 229, 0.00) 100%), #2A2A32",minWidth:"min-content"},":hover",{border:"1px solid rgba(255, 255, 255, 0.12)",backgroundColor:"#36363f"}),t)}))},E=["sx"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,L.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=function(e){var t=e.sx,r=(0,S.Z)(e,E);return(0,p.jsx)(D.Z,R(R({},r),{},{sx:R((0,L.Z)({borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.06)",backgroundColor:"#2A2A32",minWidth:"min-content"},":hover",{border:"1px solid rgba(255, 255, 255, 0.12)",backgroundColor:"#36363f"}),t)}))},q=r(34275),B=r(49486),z=function(e){var t=e.marketId,r=e.positionAddress,n=e.controlType,i=(0,h.Z)().breakpoints;return(0,b.Z)(i.up("md"))?(0,p.jsxs)(Z.T,{size:"big",children:[(0,p.jsx)(K,{positionAddress:r,controlType:n}),(0,p.jsx)(M,{marketId:t,positionAddress:r,disabled:n===B.N3.AlmPosition})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(K,{positionAddress:r,controlType:n}),(0,p.jsx)(M,{marketId:t,positionAddress:r,disabled:n===B.N3.AlmPosition})]})},K=function(e){var t=e.positionAddress,r=e.controlType,n=(0,A.vR)().openActions;return(0,p.jsx)(W,{onClick:function(){return t&&n(t,r)},children:"Actions"})},M=function(e){var t=e.marketId,r=e.positionAddress,n=e.disabled,i=(0,A.vR)().openAutomations,o=(0,q.v)({marketId:t,positions:r?[r]:void 0}).data,s=(null===o||void 0===o?void 0:o.compounds[0].initialized)||(null===o||void 0===o?void 0:o.rebalances[0].initialized)||(null===o||void 0===o?void 0:o.deleverages[0].initialized);return(0,p.jsxs)(N,{onClick:function(){return r&&t&&i(t,r)},disabled:n,children:["Automations",s&&(0,p.jsx)(l.Z,{sx:{position:"absolute",top:"-3px",right:"-3px",width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#AFF113"}})]})},U=r(77461),V=r(20736),Y=r(26509),H=r(4071),G=function(e){var t=e.title,r=e.head,n=(0,h.Z)(),i=(0,b.Z)(n.breakpoints.down("xsm"));return(0,p.jsx)(j.l,{titleComponent:(0,p.jsx)(c.Z,{component:"div",variant:"h3",sx:{mr:4},children:t}),children:(0,p.jsxs)(p.Fragment,{children:[!i&&(0,p.jsx)(U.B,{head:r,firstColumnWidth:H.r.POOL,buttonsColumnSize:"big"}),i?(0,p.jsx)(Y.H,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(V.x,{head:r,firstColumnWidth:H.r.POOL,buttonsColumnSize:"big",secondButton:!0}),(0,p.jsx)(V.x,{head:r,firstColumnWidth:H.r.POOL,buttonsColumnSize:"big",secondButton:!0})]})]})})},X=[{title:(0,p.jsx)(f.cC,{id:"Pool"}),sortKey:"pool"},{title:(0,p.jsx)(f.cC,{id:"Liquidity"},"Liquidity"),sortKey:"liquidity"},{title:(0,p.jsx)(f.cC,{id:"Debt Value"},"debtValue"),sortKey:"debtValue"},{title:(0,p.jsx)(f.cC,{id:"Fees Earned"},"feesEarned"),sortKey:"feesEarned"},{title:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.cC,{id:"Net Worth"},"netWorth"),(0,p.jsx)(C.G,{wrapperProps:{ml:1},children:(0,p.jsx)("div",{children:"Net worth = Liquidity - Debt Value + Fees Earned"})})]}),sortKey:"netWorth"},{title:(0,p.jsx)(f.cC,{id:"Est. Net APR"},"borrowAPY"),sortKey:"estNetApr"},{title:(0,p.jsx)(f.cC,{id:"Health"},"health"),sortKey:"health"}],$=function(){var e=(0,h.Z)().breakpoints,t=(0,v.HT)().loading,r=(0,b.Z)(e.up("md")),n=(0,y.F)(),i=n.data,o=n.isLoading,s=(0,w.$)(),a=s.data,u=s.isLoading,x=(0,g.Yh)((function(e){return(0,O.Aj)(e,[].concat((0,m.Z)(i),(0,m.Z)(a)))})),C=(0,d.useMemo)((function(){return x.reduce((function(e,t){return e.totalLiquidity+=t.marketReferenceCurrencyValue,e.totalFeesEarned+=t.token0.marketReferenceCurrencyFee+t.token1.marketReferenceCurrencyFee,e.totalNetWorth+=t.token0.netWorthUsd+t.token1.netWorthUsd,e}),{totalLiquidity:0,totalFeesEarned:0,totalNetWorth:0})}),[i,a]),Z=C.totalLiquidity,A=C.totalFeesEarned,L=C.totalNetWorth;return t||o||u?(0,p.jsx)(G,{title:(0,p.jsx)(f.cC,{id:"Your Leveraged Positions"}),head:X.map((function(e){return e.title}))}):(0,p.jsx)(j.l,{titleComponent:(0,p.jsx)(c.Z,{component:"div",variant:"h3",sx:{mr:4,mb:{xs:0,md:2}},children:(0,p.jsx)(f.cC,{id:"Your Leveraged Positions"})}),subTitleComponent:(0,p.jsxs)(l.Z,{sx:{display:"flex",gap:6},children:[(0,p.jsx)(P.C,{caption:"Total Liquidity",value:Z,symbol:"USD"}),(0,p.jsx)(P.C,{caption:"Fees Earned",value:A,symbol:"USD"}),(0,p.jsx)(P.C,{caption:"Net Worth",value:L,symbol:"USD"})]}),localStorageName:"leveragedPositionsTableCollapse",noData:!x.length,hasCollapseButton:!r,children:(0,p.jsx)(k.O,{head:X,positions:x,actions:function(e){return(0,p.jsx)(z,{marketId:e.position.marketId,positionAddress:e.positionAddress,controlType:e.position.controlType})},columnsType:"leveraged"})})},J=r(52064),Q=r(24997),ee=r(17674),te=r(50029),re=r(87794),ne=r.n(re),ie=r(70794),oe=r(91747),se=r(65216),ae=r(17e3),le=function(e){return(0,ie.Z)(1).div((0,ie.Z)(1).minus((0,ie.Z)(e.baseLTVasCollateral).div(1e4)))},ue=r(37920),ce=r(11288),de=function(e,t,r){var n=le(t),i=function(e){return(0,ie.Z)((0,ue.G)({rate:e.variableBorrowRate,duration:ce.E_}).toString()).div((0,ie.Z)(10).pow(27))}(t),o=e.multipliedBy((0,ie.Z)(1e4).minus(r||0)).dividedBy(1e4);return e.plus(o.minus(i).multipliedBy(n.minus(1)))},pe=r(31001),xe=r(18528),me=r(46930),fe=r(59922),he=r(73502),be=["data"];function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ve=[],ye=function(){var e=(0,te.Z)(ne().mark((function e(t){var r,n,i,o,s;return ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.marketId,n=t.endpointURL,e.prev=1,i="".concat(n,"/concentrated_liquidity/displayed_pairs?market_id=").concat(r),e.next=5,fetch(i);case 5:return o=e.sent,e.next=8,o.json();case 8:return s=e.sent,e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=(0,me.f)().currentNetworkConfig,t=(0,g.Yh)((function(e){return[e.currentChainId,e.account,e.isMarketsReady,e.getCurrentChainMarketData(),e.getMarketDataById]})),r=(0,ee.Z)(t,5),n=r[0],i=r[1],o=r[2],s=r[3],a=r[4],l=e.yldrYpiUrl,u=(0,v.HT)(),c=u.reserves,d=u.loading,p=(0,fe.B)(),x=p.data,m=p.isLoading,f=s.map((function(e){return e.marketId})),h=(0,he.ye)({chainId:n}).data,b=(0,ae.a)({queryFn:function(){var e=f.map((function(e){return ye({marketId:e,endpointURL:l})}));return Promise.all(e)},queryKey:[pe.iP.DISPLAYED_PAIRS,n,f,i],enabled:Boolean(i)&&o&&!d&&!m,refetchInterval:pe.g_,select:function(e){return e.reduce((function(e,t,r){return t.filter((function(t){var n=(0,xe.v)({reserves:c,address:t.token_0}),i=(0,xe.v)({reserves:c,address:t.token_1});if(n&&i){var o,s,l,u,d=(0,ie.Z)(t.max_apr).div(100),p=null===(o=x.find((function(e){return e.marketId===f[r]})))||void 0===o?void 0:o.revenueFee,m=de(d,n,p),b=de(d,i,p),j=ie.Z.max(d,m,b),v=le(n),y=le(i),g=ie.Z.min(v,y),O=null===(s=h.find((function(e){return(0,se.toChecksumAddress)(e.token_0)===(0,se.toChecksumAddress)(n.underlyingAsset)&&(0,se.toChecksumAddress)(e.token_1)===(0,se.toChecksumAddress)(i.underlyingAsset)&&e.cl_market.id===f[r]})))||void 0===s?void 0:s.market.name;e.push({marketId:null===(l=a(f[r]))||void 0===l?void 0:l.marketId,marketName:null===(u=a(f[r]))||void 0===u?void 0:u.marketName,type:B.Tw.Pool,tokenId:t.id,token0:{symbol:n.symbol,iconSymbol:n.iconSymbol,underlyingAsset:(0,se.toChecksumAddress)(n.underlyingAsset)},token1:{symbol:i.symbol,iconSymbol:i.iconSymbol,underlyingAsset:(0,se.toChecksumAddress)(i.underlyingAsset)},liquidity:oe.O$.from(0),marketReferenceCurrencyValue:0,maxLeverage:g.toNumber(),uniswapLink:t.url,poolType:t.pair_type,fee:(0,ie.Z)(t.max_apr_fee).div(1e4).toNumber(),maxApr:j.toNumber(),almMarketName:O})}})),e}),[])}}),j=b.data,y=(0,S.Z)(b,be);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){(0,L.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({data:j||ve},y)},Oe=r(4530),ke=r(11163),Pe=r(68861),Ce=function(e){var t=e.position,r=e.uniswapLink,n=(0,h.Z)().breakpoints;return(0,b.Z)(n.up("md"))?(0,p.jsx)(Z.T,{size:"big",children:t.type===B.Tw.Pool?(0,p.jsx)(Ze,{position:t,uniswapLink:r}):(0,p.jsx)(we,{position:t})}):(0,p.jsx)(p.Fragment,{children:t.type===B.Tw.Pool?(0,p.jsx)(Ze,{position:t,uniswapLink:r}):(0,p.jsx)(we,{position:t})})},we=function(e){var t=e.position,r=(0,A.vR)().openLeveragePosition;return(0,p.jsx)(W,{onClick:function(){t.tokenId&&r(t.tokenId.toString()),window.gtag("event","leverage_leverage_click")},children:(0,p.jsx)(f.cC,{id:"Leverage"})})},Ze=function(e){var t=e.position,r=(0,ke.useRouter)();return(0,p.jsx)(W,{onClick:function(){window.gtag("event","leverage_create_position"),r.push(Pe.Z6.leverageAdd(t.marketId,t.token0.underlyingAsset,t.token1.underlyingAsset))},children:(0,p.jsx)(f.cC,{id:"Create & Leverage"})})},Ae=r(46398),Le=function(e){var t=e.title,r=e.head,n=(0,h.Z)(),i=(0,b.Z)(n.breakpoints.down("xsm"));return(0,p.jsx)(j.l,{titleComponent:(0,p.jsx)(c.Z,{component:"div",variant:"h3",sx:{mr:4},children:t}),children:(0,p.jsxs)(p.Fragment,{children:[!i&&(0,p.jsx)(U.B,{head:r,firstColumnWidth:H.r.POOL,buttonsColumnSize:"big"}),i?(0,p.jsx)(Y.H,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(V.x,{head:r,firstColumnWidth:H.r.POOL,buttonsColumnSize:"big"}),(0,p.jsx)(V.x,{head:r,firstColumnWidth:H.r.POOL,buttonsColumnSize:"big"})]})]})})},Se=["key","value","label"];function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){(0,L.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Fe=[{title:(0,p.jsx)(f.cC,{id:"Pool"}),sortKey:"pool"},{title:(0,p.jsx)(f.cC,{id:"Type"},"Type"),sortKey:"type"},{title:(0,p.jsx)(f.cC,{id:"Liquidity"},"Liquidity"),sortKey:"liquidity"},{title:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.cC,{id:"Max Net APR"},"Max Net APR"),(0,p.jsx)(C.G,{wrapperProps:{ml:1},children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{children:"The Max Net APR indicates the anticipated annualized rate that a liquidity provider could have earned over the past 24 hours."}),(0,p.jsx)("p",{children:"For stable pools, the Max Net APR calculations are based on a position within the range of [-0.5%; 0.5%], whereas for volatile pools, a position within the range of [-10%; 10%] is applied."}),(0,p.jsx)("p",{children:"Please note that this is a projected value, and it may deviate from your actual rate, either lower or higher."})]})})]}),sortKey:"maxApr"},{title:(0,p.jsx)(f.cC,{id:"Max Leverage"},"maxLeverage"),sortKey:"maxLeverage"}],Te=function(e){var t=e.key,r=e.value,n=e.label,i=(0,S.Z)(e,Se);return(0,p.jsx)(Q.C,_e(_e({value:r,size:"small",sx:{width:{xs:"33%",md:"unset"},minWidth:"min-content",flex:"1 1 auto",textWrap:"nowrap",px:{xs:2,md:3}}},i),{},{children:n}),t)},Ne=function(){var e=(0,d.useState)(Ae.sS[0]),t=e[0],r=e[1],n=(0,d.useState)(Ae.wP[0]),i=n[0],o=n[1],s=(0,d.useState)(Ae.y1[0]),a=s[0],u=s[1],x=(0,me.f)().currentChainId,v=(0,J.q)(),y=v.data,P=v.isLoading,C=ge(),w=C.data,Z=C.isLoading,A=(0,h.Z)().breakpoints,L=(0,b.Z)(A.up("md")),S=(0,g.Yh)((function(e){return(0,O.Jc)(e,y)})).filter((function(e){return e.marketReferenceCurrencyValue>0})).map((function(e){var t,r=null===(t=w.find((function(t){return t.token0.underlyingAsset===e.token0.underlyingAsset&&t.token1.underlyingAsset===e.token1.underlyingAsset})))||void 0===t?void 0:t.poolType;return _e(_e({},e),{},{poolType:r})})),D=Ae.y1.filter((function(e){return e.chainIds.includes(x)})),_=[].concat((0,m.Z)(S),(0,m.Z)(w)),F=D.length>2;return P||Z?(0,p.jsx)(Le,{title:(0,p.jsx)(f.cC,{id:"Positions to Leverage"}),head:Fe.map((function(e){return e.title}))}):(0,p.jsx)(j.l,{titleComponent:(0,p.jsx)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,p.jsx)(c.Z,{component:"div",variant:"h3",sx:{mr:4,mb:{xs:0,md:2}},children:(0,p.jsx)(f.cC,{id:"Positions to Leverage"})})}),filterComponent:(0,p.jsxs)(l.Z,{sx:{display:"flex",gap:{xs:3,md:4},justifyContent:"end",flexDirection:{xs:"column",md:"row"}},children:[F&&(0,p.jsx)(Oe.t,{color:"primary",exclusive:!0,value:a.value,onChange:function(e,t){u(Ae.y1.find((function(e){return e.value===t}))||Ae.y1[0])},sx:{mt:{xs:4,md:"unset"}},children:D.map((function(e){return(0,p.jsx)(Te,{value:e.value,label:(0,p.jsxs)(p.Fragment,{children:[e.icon,e.label]})},e.value)}))}),(0,p.jsx)(Oe.t,{color:"primary",exclusive:!0,value:i.value,onChange:function(e,t){o(Ae.wP.find((function(e){return e.value===t}))||Ae.wP[0])},sx:{mt:{xs:F?"unset":4,md:"unset"},mb:{xs:1,md:"unset"}},children:Ae.wP.map((function(e){return(0,p.jsx)(Te,{value:e.value,label:e.label},e.value)}))}),(0,p.jsx)(Oe.t,{color:"primary",exclusive:!0,value:t.value,onChange:function(e,t){r(Ae.sS.find((function(e){return e.value===t}))||Ae.sS[0])},sx:{mt:{xs:F?"unset":4,md:"unset"},mb:{xs:1,md:"unset"}},children:Ae.sS.map((function(e){return(0,p.jsx)(Te,{value:e.value,label:e.label},e.value)}))})]}),localStorageName:"leveragedPositionsTableCollapse",noData:!_.length,hasCollapseButton:!L,children:(0,p.jsx)(k.O,{head:Fe,positions:_,actions:function(e){return(0,p.jsx)(Ce,_e({},e))},columnsType:"leverage",typeFilter:t,marketFilter:a,controlPositionFilter:i})})},Ee=function(){return(0,p.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:{xs:4,md:8},width:"100%"},children:[(0,p.jsx)($,{}),(0,p.jsx)(Ne,{})]})};function Ie(){var e=(0,a.Z)(),t=e.currentAccount,r=e.loading,s=(0,n.T)().isPermissionsLoading;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x,{}),(0,p.jsx)(i.O,{children:t&&!s?(0,p.jsx)(Ee,{}):(0,p.jsx)(o.w,{loading:r})})]})}Ie.getLayout=function(e){return(0,p.jsx)(s.Z,{children:e})}},4530:function(e,t,r){"use strict";r.d(t,{t:function(){return c}});var n=r(59499),i=r(4730),o=r(85390),s=r(85893),a=["children","sx"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e){var t=e.children,r=e.sx,n=(0,i.Z)(e,a);return(0,s.jsx)(o.Z,u(u({},n),{},{sx:u({flex:{xs:"1 1 auto",md:"unset"},width:{xs:"100%",md:"unset"},padding:"3px",gap:1,borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.06)",backgroundColor:"#26262B"},r),children:t}))}},2272:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leverage",function(){return r(85892)}])}},function(e){e.O(0,[3662,1066,6165,5278,626,729,1011,8873,2490,7529,1018,5525,4411,468,534,1878,7331,9816,6158,7978,7593,762,2548,9774,2888,179],(function(){return t=2272,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=leverage-fac4863e1e5e3c54.js.map