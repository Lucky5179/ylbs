"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1941],{81902:function(e,r,t){var n;t.d(r,{R:function(){return n}}),function(e){e.supplyCap="supplyCap",e.borrowCap="borrowCap"}(n||(n={}))},74758:function(e,r,t){t.d(r,{W:function(){return P}});var n=t(59499),o=t(4730),a=t(49501),s=t(33740),i=t(62097),c=t(61953),l=t(81138),u=t(70754),d=t(81011),p=t(80562),b=t(55343),m=t(46541),f=t(98649),x=t(61702),y=t(36667),v=t(67294),h=t(57333),O=t(81902),g=t(58527),j=t(85893),w=["capType"];function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var T=function(e){var r=e.capType,t=(0,o.Z)(e,w),n=r===O.R.supplyCap?(0,j.jsx)(a.cC,{id:"This is the total amount that you are able to supply to in this reserve. You are able to supply your wallet balance up until the supply cap is reached."}):(0,j.jsx)(a.cC,{id:"This is the total amount available for you to borrow. You can borrow based on your collateral and until the borrow cap is reached."});return(0,j.jsx)(g.G,E(E({},t),{},{children:n}))},_=t(72667),C=t(41024),S=["onChange"];function N(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?N(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D=v.forwardRef((function(e,r){var t=e.onChange,n=(0,o.Z)(e,S);return(0,j.jsx)(h.Z,B(B({},n),{},{getInputRef:r,onValueChange:function(r){r.value!==e.value&&t({target:{name:e.name,value:r.value||""}})},thousandSeparator:!0,isNumericString:!0,allowNegative:!1}))})),P=function(e){var r=e.value,t=e.usdValue,n=e.symbol,o=e.onChange,v=e.disabled,h=e.disableInput,O=e.onSelect,g=e.assets,w=e.capType,A=e.maxValue,E=e.isMaxSelected,S=e.inputTitle,N=e.balanceText,P=e.loading,I=void 0!==P&&P,L=e.selectOptionHeader,R=e.selectOption,k=e.sx,Z=void 0===k?{}:k,W=(0,i.Z)(),U=1===g.length?g[0]:g&&g.find((function(e){return e.symbol===n}));return(0,j.jsxs)(c.Z,B(B({},Z),{},{children:[(0,j.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",mb:2},children:[(0,j.jsx)(l.Z,{variant:"secondary13",color:"text.tertiary",children:S||(0,j.jsx)(a.cC,{id:"Amount"})}),w&&(0,j.jsx)(T,{capType:w})]}),(0,j.jsxs)(c.Z,{sx:function(e){return{py:3,px:4,border:"1px solid ".concat(e.palette.divider),backgroundColor:e.palette.background.surface,borderRadius:"8px"}},children:[(0,j.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",mb:2},children:[I?(0,j.jsx)(c.Z,{sx:{flex:1},children:(0,j.jsx)(u.Z,{color:"inherit",size:"16px"})}):(0,j.jsx)(d.ZP,{sx:{flex:1},placeholder:"0.00",disabled:v||h,value:r,autoFocus:!0,onChange:function(e){o&&(Number(e.target.value)>Number(A)?o("-1"):o(e.target.value))},inputProps:{"aria-label":"amount input",style:{fontSize:"21px",lineHeight:"28,01px",padding:0,height:"28px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}},inputComponent:D}),""!==r&&!h&&(0,j.jsx)(p.Z,{sx:{minWidth:0,p:0,left:8,zIndex:1,color:"text.muted","&:hover":{color:"text.secondary"}},onClick:function(){o&&o("")},disabled:v,children:(0,j.jsx)(s.Z,{height:16})}),O&&1!==g.length?(0,j.jsx)(b.Z,{children:(0,j.jsxs)(m.Z,{disabled:v,value:U.symbol,onChange:function(e){var r=g.find((function(r){return r.symbol===e.target.value}));O&&O(r),o&&o("")},variant:"outlined",className:"AssetInput__select","data-cy":"assetSelect",MenuProps:{sx:{maxHeight:"240px",".MuiPaper-root":{border:"dark"===W.palette.mode?"1px solid #EBEBED1F":"unset",boxShadow:"0px 2px 10px 0px #0000001A"}}},sx:{p:0,"&.AssetInput__select .MuiOutlinedInput-input":{p:0,backgroundColor:"transparent",pr:"24px !important"},"&.AssetInput__select .MuiOutlinedInput-notchedOutline":{display:"none"},"&.AssetInput__select .MuiSelect-icon":{color:"text.primary",right:"0%"}},renderValue:function(e){var r=1===g.length?g[0]:g&&g.find((function(r){return r.symbol===e}));return(0,j.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},"data-cy":"assetsSelectedOption_".concat(r.symbol.toUpperCase()),children:[(0,j.jsx)(_.T1,{symbol:r.iconSymbol||r.symbol,sx:{mr:2,ml:4}}),(0,j.jsx)(l.Z,{variant:"main16",color:"text.primary",children:e})]})},children:[L||void 0,g.map((function(e){return(0,j.jsx)(f.Z,{value:e.symbol,"data-cy":"assetsSelectOption_".concat(e.symbol.toUpperCase()),children:R?R(e):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(_.T1,{symbol:e.iconSymbol||e.symbol,sx:{fontSize:"22px",mr:1}}),(0,j.jsx)(x.Z,{sx:{mr:6},children:e.symbol}),e.balance&&(0,j.jsx)(C.BK,{value:e.balance,compact:!0})]})},e.symbol)}))]})}):(0,j.jsxs)(c.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,j.jsx)(_.T1,{symbol:U.iconSymbol||U.symbol,sx:{mr:2,ml:4}}),(0,j.jsx)(l.Z,{variant:"main19",sx:{lineHeight:"28px"},"data-cy":"inputAsset",children:n})]})]}),(0,j.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",height:"16px"},children:[I?(0,j.jsx)(c.Z,{sx:{flex:1}}):(0,j.jsx)(C.BK,{value:isNaN(Number(t))?0:Number(t),compact:!0,symbol:"USD",variant:"secondary13",color:"text.muted",symbolsColor:"text.muted",flexGrow:1}),U.balance&&o&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(l.Z,{component:"div",variant:"secondary13",color:"text.secondary",children:[N&&""!==N?N:(0,j.jsx)(a.cC,{id:"Balance"})," ",(0,j.jsx)(C.BK,{value:U.balance,compact:!0,variant:"secondary13",color:"text.secondary",symbolsColor:"text.disabled"})]}),!h&&(0,j.jsx)(y.Z,{size:"small",sx:{minWidth:0,ml:"7px",p:0,fontSize:"11px",fontWeight:"600"},onClick:function(){o("-1")},disabled:v||E,children:(0,j.jsx)(a.cC,{id:"Max"})})]})]})]})]}))}},81941:function(e,r,t){t.r(r),t.d(r,{BorrowModal:function(){return z}});var n=t(59499),o=t(49501),a=t(38995),s=t(67294),i=t(8195),c=t(31959),l=t(64691),u=t(33896),d=t(15060),p=t(11288),b=t(87803),m=t(81138),f=t(71467),x=t(57646),y=t(46930),v=t(59286),h=t(87385),O=t(51324),g=t(81902),j=t(74758),w=t(6751),A=t(21878),E=t(50029),T=t(17674),_=t(87794),C=t.n(_),S=t(48211),N=t(56371),B=t(72864),D=t(19419),P=t(77537),I=t(87899),L=t(39771),R=t(31001),k=t(23609),Z=t(48321),W=t(85893);function U(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?U(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var G,M=s.memo((function(e){var r=e.symbol,t=e.poolReserve,n=e.amountToBorrow,a=e.poolAddress,c=e.isWrongNetwork,l=e.blocked,d=e.sx,p=(0,I.Yh)((function(e){return[e.borrow,e.getCreditDelegationApprovedAmount,e.currentMarketData,e.generateApproveDelegation,e.estimateGasLimit,e.addTransaction]})),b=(0,T.Z)(p,6),m=b[0],f=b[1],x=b[2],y=b[3],v=b[4],h=b[5],O=(0,i.vR)(),g=O.approvalTxState,j=O.mainTxState,w=O.loadingTxns,A=O.setMainTxState,_=O.setTxError,U=O.setGasLimit,G=O.setLoadingTxns,M=O.setApprovalTxState,Y=(0,D.n)(),F=Y.refetchPoolData,V=Y.refetchIncentiveData,z=(0,P.Z)().sendTx,q=(0,s.useState)(!1),Q=q[0],K=q[1],$=(0,s.useState)(),J=$[0],X=$[1],ee=function(){var e=(0,E.Z)(C().mark((function e(){var r,n,o,a;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!Q||!J){e.next=14;break}return n=y({debtTokenAddress:t.variableDebtTokenAddress,delegatee:null!==(r=x.addresses.WETH_GATEWAY)&&void 0!==r?r:"",amount:u.ke}),M(H(H({},g),{},{loading:!0})),e.next=6,v(n);case 6:return n=e.sent,e.next=9,z(n);case 9:return o=e.sent,e.next=12,o.wait(1);case 12:M({txHash:o.hash,loading:!1,success:!0}),te(!0);case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(0),a=(0,L.WG)(e.t0,L.aD.GAS_ESTIMATION,!1),_(a),M({txHash:void 0,loading:!1});case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=(0,E.Z)(C().mark((function e(){var r,o,s;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(H(H({},j),{},{loading:!0})),r=m({amount:(0,N.parseUnits)(n,t.decimals).toString(),reserve:a,debtTokenAddress:t.variableDebtTokenAddress}),e.next=5,v(r);case 5:return r=e.sent,e.next=8,z(r);case 8:return o=e.sent,e.next=11,o.wait(1);case 11:A({txHash:o.hash,loading:!1,success:!0}),h(o.hash,{action:S.UQ.borrow,txState:"success",asset:a,amount:n,assetName:t.name}),B.queryClient.invalidateQueries({queryKey:[R.iP.POOL_TOKENS]}),F&&F(),V&&V(),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(0),s=(0,L.WG)(e.t0,L.aD.GAS_ESTIMATION,!1),_(s),A({txHash:void 0,loading:!1});case 23:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),te=(0,s.useCallback)(function(){var e=(0,E.Z)(C().mark((function e(r){var o,s,i;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a!==u.hP||void 0!==J&&!r){e.next=8;break}return G(!0),e.next=4,f({debtTokenAddress:t.variableDebtTokenAddress,delegatee:null!==(o=x.addresses.WETH_GATEWAY)&&void 0!==o?o:""});case 4:s=e.sent,X(s),e.next=10;break;case 8:K(!1),M({});case 10:J&&a===u.hP&&(i=(0,Z.iv)({approvedAmount:J.amount,amount:n,signedAmount:"0"}),K(i),i&&M({})),G(!1);case 12:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[n,J,x.addresses.WETH_GATEWAY,f,a,t.variableDebtTokenAddress,M,G]);return(0,s.useEffect)((function(){te()}),[te,a]),(0,s.useEffect)((function(){var e=0;e=Number(u.eB[S.UQ.borrow].recommended),Q&&!g.success&&(e+=Number(Z.Fi)),U(e.toString())}),[Q,g,U]),(0,W.jsx)(k.B,{blocked:l,mainTxState:j,approvalTxState:g,requiresAmount:!0,amount:n,isWrongNetwork:c,handleAction:function(){return window.gtag("event","lending_borrow_modal_confirm",{asset:r}),re()},actionText:(0,W.jsx)(o.cC,{id:"Borrow {symbol}",values:{symbol:r}}),actionInProgressText:(0,W.jsx)(o.cC,{id:"Borrowing {symbol}",values:{symbol:r}}),handleApproval:function(){return ee()},requiresApproval:Q,preparingTransactions:w,sx:d})}));!function(e){e[e.STABLE_RATE_NOT_ENABLED=0]="STABLE_RATE_NOT_ENABLED",e[e.NOT_ENOUGH_LIQUIDITY=1]="NOT_ENOUGH_LIQUIDITY",e[e.BORROWING_NOT_AVAILABLE=2]="BORROWING_NOT_AVAILABLE",e[e.NOT_ENOUGH_BORROWED=3]="NOT_ENOUGH_BORROWED"}(G||(G={}));var Y=function(e){var r=e.underlyingAsset,t=e.isWrongNetwork,n=e.poolReserve,a=e.unwrap,c=e.setUnwrap,l=e.symbol,E=(0,i.vR)(),T=E.mainTxState,_=E.gasLimit,C=E.txError,S=E.setTxError,N=(0,f.HT)(),B=N.user,D=N.marketReferencePriceInUsd,P=(0,y.f)().currentNetworkConfig,I=(0,x.ov)().borrowCap,L=(0,s.useState)(""),R=L[0],k=L[1],Z=(0,v.nG)(n,B),U=R===Z,H=(0,d.hE)(R).multipliedBy(n.formattedPriceInMarketReferenceCurrency).multipliedBy(D).shiftedBy(-p.$3),Y=(0,b.L1)({collateralBalanceMarketReferenceCurrency:B.totalCollateralUSD,borrowBalanceMarketReferenceCurrency:(0,d.hE)(B.totalBorrowsUSD).plus(H),currentLiquidationThreshold:B.currentLiquidationThreshold}),F=(0,d.hE)(R).multipliedBy(n.priceInUSD),V=void 0;(0,d.hE)(R).gt(n.formattedAvailableLiquidity)?V=G.NOT_ENOUGH_LIQUIDITY:n.borrowingEnabled||(V=G.BORROWING_NOT_AVAILABLE);var z={address:r,symbol:n.iconSymbol,decimals:n.decimals},q=a&&n.isWrappedBaseAsset?P.baseAssetSymbol:n.iconSymbol;if(T.success)return(0,W.jsx)(w.R,{action:(0,W.jsx)(o.cC,{id:"Borrowed"}),amount:R,symbol:q,addToken:a&&n.isWrappedBaseAsset?void 0:z});var Q=n.vIncentivesData;return(0,W.jsxs)(W.Fragment,{children:[I.determineWarningDisplay({borrowCap:I}),(0,W.jsx)(j.W,{value:R,onChange:function(e){if("-1"===e)k(Z);else{var r=(0,h.$w)(e,n.decimals);k(r)}},usdValue:F.toString(10),assets:[{balance:Z,symbol:l,iconSymbol:q}],symbol:l,capType:g.R.borrowCap,isMaxSelected:U,maxValue:Z,balanceText:(0,W.jsx)(o.cC,{id:"Available"})}),void 0!==V&&(0,W.jsx)(m.Z,{variant:"helperText",color:"error.main",children:function(){switch(V){case G.BORROWING_NOT_AVAILABLE:return(0,W.jsx)(o.cC,{id:"Borrowing is currently unavailable for {0}.",values:{0:n.symbol}});case G.NOT_ENOUGH_BORROWED:return(0,W.jsx)(o.cC,{id:"You can borrow this asset with a stable rate only if you borrow more than the amount you are supplying as collateral."});case G.NOT_ENOUGH_LIQUIDITY:return(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(o.cC,{id:"There are not enough funds in the{0}reserve to borrow",values:{0:n.symbol}})});case G.STABLE_RATE_NOT_ENABLED:return(0,W.jsx)(o.cC,{id:"The Stable Rate is not enabled for this currency"});default:return null}}()}),n.isWrappedBaseAsset&&(0,W.jsx)(A.Pu,{unwrapped:a,setUnWrapped:c,label:(0,W.jsx)(m.Z,{children:"Unwrap ".concat(n.symbol," (to borrow ").concat(P.baseAssetSymbol,")")})}),(0,W.jsxs)(A.m6,{gasLimit:_,children:[(0,W.jsx)(A.aE,{incentives:Q,symbol:n.symbol}),(0,W.jsx)(A.jz,{visibleHfChange:!!R,healthFactor:B.healthFactor,futureHealthFactor:Y.toString(10)})]}),C&&(0,W.jsx)(O.Y,{variant:"error",txError:C,onClose:function(){return S(void 0)}}),(0,W.jsx)(M,{poolReserve:n,amountToBorrow:R,poolAddress:a&&n.isWrappedBaseAsset?u.hP:n.underlyingAsset,isWrongNetwork:t,symbol:l,blocked:void 0!==V})]})};function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function V(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var z=function(){var e=(0,i.vR)(),r=e.type,t=e.close,n=e.args,u=(0,s.useState)(!0),d=u[0],p=u[1],b=function(e){p(e)};return(0,W.jsx)(c.P,{open:r===i.w8.Borrow,setOpen:t,children:(0,W.jsx)(l.A,{title:(0,W.jsx)(o.cC,{id:"Borrow"}),underlyingAsset:n.underlyingAsset,keepWrappedSymbol:!d,requiredPermission:a.g.BORROWER,children:function(e){return(0,W.jsx)(Y,V(V({},e),{},{unwrap:d,setUnwrap:b}))}})})}},48321:function(e,r,t){t.d(r,{pQ:function(){return a},Fi:function(){return s},iv:function(){return i},Vc:function(){return c},yI:function(){return l}});t(70794);var n,o=t(29946);!function(e){e[e.SUPPLY_CAP_REACHED=0]="SUPPLY_CAP_REACHED",e[e.HF_BELOW_ONE=1]="HF_BELOW_ONE",e[e.NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH=2]="NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH",e[e.ZERO_LTV_WITHDRAW_BLOCKED=3]="ZERO_LTV_WITHDRAW_BLOCKED"}(n||(n={}));var a=65e3,s=55e3,i=function(e){var r=e.approvedAmount,t=e.signedAmount,n=e.amount;return!("-1"===r||"0"!==r&&Number(r)>=Number(n)||Number(t)>=Number(n))},c=function(e){var r=[];return e.userReservesData.forEach((function(e){Number(e.scaledYTokenBalance)>0&&"0"===e.reserve.baseLTVasCollateral&&e.usageAsCollateralEnabledOnUser&&"0"!==e.reserve.reserveLiquidationThreshold&&r.push(e.reserve.symbol)})),r},l=function(e){if(!e.reserve.usageAsCollateralEnabled)return o.z.UNAVAILABLE;o.z.ENABLED;return e&&"0"!==e.scaledYTokenBalance?e.usageAsCollateralEnabledOnUser?o.z.ENABLED:o.z.DISABLED:o.z.ENABLED}},59286:function(e,r,t){t.d(r,{nG:function(){return i},hF:function(){return c}});var n=t(15060),o=t(70794),a=t(46547),s=t(87385);function i(e,r){var t=e.availableLiquidityUSD,i=o.Z.min(r.availableBorrowsUSD,t),c="0"===e.borrowCap?(0,n.hE)(a.Bz.toString()):(0,n.hE)(Number(e.borrowCap)).minus((0,n.hE)(e.totalDebt)),l=o.Z.max(o.Z.min(e.formattedAvailableLiquidity,c),0),u=(0,n.hE)((null===r||void 0===r?void 0:r.availableBorrowsMarketReferenceCurrency)||0).div(e.formattedPriceInMarketReferenceCurrency),d=o.Z.min(u,l),p=d.gte(u)||"0"!==r.totalBorrowsMarketReferenceCurrency&&i.lt(t)||i.eq(t)&&"0"!==e.totalDebt||e.borrowCapUSD&&"0"!==e.totalDebt&&i.gte(t)?d.multipliedBy("0.99"):d;return(0,s.$w)(p.toString(10),e.decimals)}function c(e){var r=e.borrowingEnabled,t=e.isActive,n=e.isFrozen,o=e.isPaused;return!(!r||!t||n||o)}}}]);
//# sourceMappingURL=1941.65eefd3fc91508f5.js.map