"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1998],{76478:function(e,r,n){n.d(r,{U:function(){return o}});var t=n(98260),i=n(46930);function o(e){var r=(0,i.f)().currentChainId;return e?new t.WU(r,e.underlyingAsset,e.decimals,e.symbol,e.name):void 0}},67365:function(e,r,n){n.d(r,{L:function(){return i}});var t=n(25525);function i(e,r,n){if(e&&r&&"number"===typeof n)return(0,t.zz)(e,r,n)}},8534:function(e,r,n){n.d(r,{U:function(){return l}});var t=n(59499),i=n(18081),o=n(24997),a=n(85893);function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var l=function(e){var r=e.isSorted,n=e.invertDisabled,s=e.onCurrencyToggle,l=e.baseCurrencySymbol,u=e.quoteCurrencySymbol,d=e.sx;return(0,a.jsxs)(i.t,{color:"primary",exclusive:!0,value:r,onChange:s,disabled:n,sx:c((0,t.Z)({height:"28px",flex:{xs:"1 1 auto",md:"unset"},width:{xs:"100%",md:"unset"},mb:{xs:1,md:"unset"},padding:"2px"},">button",{border:"none !important"}),d),children:[(0,a.jsx)(o.C,{size:"small",value:!0,children:r?l:u}),(0,a.jsx)(o.C,{size:"small",value:!1,children:r?u:l})]})}},11998:function(e,r,n){n.r(r),n.d(r,{AutoRebalanceModal:function(){return ye}});var t=n(59499),i=n(67294),o=n(8195),a=n(88543),s=n(32369),c=n(49501),l=n(70794),u=n(61953),d=n(81138),g=n(93736),p=n(2802),f=n(4530),m=n(71467),x=n(18528),v=n(76478),y=n(6103),b=n(51342),h=n(36667),C=n(1390),P=n(85893),w=function(e){var r=e.label,n=e.description,i=e.value,o=e.minValue,a=e.maxValue,s=e.onChange;return(0,P.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:2,flex:1,padding:3,borderRadius:"8px",border:"1px solid var(--stroke-6, rgba(255, 255, 255, 0.06))",background:"#2A2A32"},children:[(0,P.jsxs)(u.Z,{children:[(0,P.jsx)(d.Z,{variant:"secondary13",color:"text.secondary",children:r}),(0,P.jsx)(C.A,{value:i,minValue:o,maxValue:a,onChange:s,isPercentage:!0,sx:(0,t.Z)({fontSize:"18px"},">input",{pb:.5,pt:1})}),(0,P.jsx)(d.Z,{variant:"main12",color:"text.tertiary",children:n})]}),(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,P.jsx)(h.Z,{size:"small",onClick:function(){if(i){var e=Number(i)+1;e>=o&&e<=a&&s(e.toString())}},sx:{width:"28px",minWidth:"28px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.06)"},children:(0,P.jsx)(y.Z,{})}),(0,P.jsx)(h.Z,{size:"small",onClick:function(){if(i){var e=Number(i)-1;e>=o&&e<=a&&s(e.toString())}},sx:{width:"28px",minWidth:"28px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.06)"},children:(0,P.jsx)(b.Z,{})})]})]})},k=n(91327),T=function(e){if(!e)return(0,l.O)(0);var r=(0,l.O)(k.B).pow(e);return r.isGreaterThanOrEqualTo(1)?r.minus(1).multipliedBy(100).decimalPlaces(2):(0,l.O)(1).minus(r).multipliedBy(-100).decimalPlaces(2)},j=function(e){return Math.round((r=k.B,n=1+e/100,Math.log(n)/Math.log(r)));var r,n};var O=n(85441),S=n(35374),D=n(24997),E=n(21878),A=n(50468),U=n(6751),Z=n(77642),N=n(54181),F=[{value:g.a.RANGE,label:"Out of range"},{value:g.a.PRICE,label:"Price"},{value:g.a.TICKS,label:"Percent"}],I=-99,L=-.01,B=.01,R=function(e){var r=e.endConfigEnabled,n=e.setEndConfigEnabled,t=e.endTriggerType,o=e.setEndTriggerType,a=e.value,s=e.setValue,c=(0,i.useRef)(10..toString()),l=(0,i.useRef)(90..toString());return(0,i.useEffect)((function(){a&&r&&(t===g.D.COUNT&&(c.current=a),t===g.D.TIMESTAMP&&(l.current=a))}),[a]),(0,P.jsxs)(u.Z,{children:[(0,P.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:4,pt:2.5,pb:1.5},children:[(0,P.jsx)(d.Z,{variant:"secondary14",children:"End auto-rebalancing"}),(0,P.jsx)(N.Z,{checked:r,onChange:function(e){n(e.target.checked),s(t===g.D.COUNT?c.current:l.current)}})]}),r&&(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:2,mt:3},children:[(0,P.jsx)(d.Z,{variant:"secondary14",color:"text.tertiary",children:"End auto-rebalancing after"}),(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.jsxs)(f.t,{color:"primary",exclusive:!0,value:t,onChange:function(e,r){var n;null!==(n=r)&&(o(n),s(n===g.D.COUNT?c.current:l.current))},sx:{flex:"unset",width:"unset"},children:[(0,P.jsx)(D.C,{size:"small",value:g.D.COUNT,sx:{width:"50%",fontSize:"14px"},children:"Count"}),(0,P.jsx)(D.C,{size:"small",value:g.D.TIMESTAMP,sx:{width:"50%",fontSize:"14px"},children:"Days"})]}),(0,P.jsx)(C.A,{minValue:1,value:a,onChange:function(e){s(e)},sx:{borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.06)",backgroundColor:"#2A2A32",py:1,px:3}})]})]})]})},V=n(68690),M=n(8534),q=n(67365),z=function(e){var r=e.label,n=e.value,t=e.symbolTokenA,i=e.symbolTokenB;return(0,P.jsxs)(u.Z,{sx:{flex:1,px:4,py:3,borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.06)",background:"#1F1F23"},children:[(0,P.jsx)(d.Z,{variant:"secondary13",color:"text.secondary",children:r}),(0,P.jsx)(d.Z,{variant:"main15",sx:{mt:1,mb:.5},children:(0,p.d)(n)}),(0,P.jsxs)(d.Z,{variant:"main12",color:"text.tertiary",children:[t," per ",i]})]})},_=function(e){var r=e.enrichedPosition,n=e.baseCurrency,t=e.quoteCurrency,o=e.symbolTokenA,a=e.symbolTokenB,s=e.setTriggerLower,c=e.setTriggerUpper,l=e.onCurrencyToggle,g=e.isSorted,p=(0,q.L)(null===n||void 0===n?void 0:n.wrapped,null===t||void 0===t?void 0:t.wrapped,g?r.tickLower:r.tickUpper),f=(0,q.L)(null===n||void 0===n?void 0:n.wrapped,null===t||void 0===t?void 0:t.wrapped,g?r.tickUpper:r.tickLower);return(0,i.useEffect)((function(){s(r.tickLower),c(r.tickUpper)}),[r.tickLower,r.tickUpper]),(0,P.jsxs)(u.Z,{children:[(0,P.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:4},children:[(0,P.jsx)(d.Z,{variant:"secondary14",color:"text.tertiary",children:"If position is out of range"}),(0,P.jsx)(M.U,{baseCurrencySymbol:g?o:a,quoteCurrencySymbol:g?a:o,isSorted:g,onCurrencyToggle:l,sx:{flex:"unset",width:"unset"}})]}),(0,P.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",gap:2,mt:3},children:[(0,P.jsx)(z,{label:"Min price",value:null===p||void 0===p?void 0:p.toFixed(12),symbolTokenA:g?o:a,symbolTokenB:g?a:o}),(0,P.jsx)(V.Z,{}),(0,P.jsx)(z,{label:"Max price",value:null===f||void 0===f?void 0:f.toFixed(12),symbolTokenA:g?o:a,symbolTokenB:g?a:o})]})]})},G=n(17674),X=n(5143),Y=n(31559),K=n(11288),W=function(e){return e?{triggerLower:e.triggerLower,triggerUpper:e.triggerUpper,newTicksDown:e.newTicksDown,newTicksUp:e.newTicksUp,recurring:{rangeConfig:{rangeConfigType:e.recurring.rangeConfig[0],ticksDown:e.recurring.rangeConfig[1],ticksUp:e.recurring.rangeConfig[2],sqrtPriceX96Down:e.recurring.rangeConfig[3].toString(),sqrtPriceX96Up:e.recurring.rangeConfig[4].toString()},endConfig:{triggerType:e.recurring.endConfig[0],count:e.recurring.endConfig[1].toNumber(),timestamp:e.recurring.endConfig[2].toNumber()},active:e.recurring.active},gasFeeConfig:{maxUsd:(0,l.O)(e.gasFeeConfig.maxUsd.toString()).div((0,l.O)(10).pow(K.$3)).toNumber(),maxPositionPercent:e.gasFeeConfig.maxPositionPercent.toNumber()/100},initialized:e.initialized}:{triggerLower:0,triggerUpper:0,newTicksDown:0,newTicksUp:0,recurring:{rangeConfig:{rangeConfigType:0,ticksDown:0,ticksUp:0,sqrtPriceX96Down:"0",sqrtPriceX96Up:"0"},endConfig:{triggerType:0,count:0,timestamp:0},active:!1},gasFeeConfig:{maxUsd:0,maxPositionPercent:0},initialized:!1}},H=function(e){var r=e.enrichedPosition,n=e.configuredAutomationsData,t=e.symbolTokenA,o=e.symbolTokenB,a=e.onCurrencyToggle,s=e.setTriggerLower,c=e.setTriggerUpper,p=e.isSorted,f=p?r.poolPrice:r.invertedPoolPrice,m=(0,l.O)(f).div(100).multipliedBy(-1).decimalPlaces(12),x=(0,l.O)(f).div(100).decimalPlaces(12),v=i.useState(!0),y=(0,G.Z)(v,2),b=y[0],h=y[1],C=i.useState(!0),w=(0,G.Z)(C,2),k=w[0],T=w[1],j=i.useState(m.toFixed()),O=(0,G.Z)(j,2),S=O[0],D=O[1],E=i.useState(x.toFixed()),A=(0,G.Z)(E,2),U=A[0],Z=A[1],N=(0,i.useRef)(p),F=f.minus(f.div(1e4)).multipliedBy(-1).decimalPlaces(12).toNumber(),I=m.div(100).decimalPlaces(12).toNumber(),L=x.div(100).decimalPlaces(12).toNumber(),B=f.div(1e3).decimalPlaces(12).toNumber();return(0,i.useEffect)((function(){if(b){var e=(0,Y.e)(r.poolPrice.plus(Number(p?S:r.poolPrice.multipliedBy((0,l.O)(S).div(r.invertedPoolPrice).decimalPlaces(12)))||0),r.token0.decimals,r.token1.decimals);s(e)}else s(r.tickLower)}),[s,S,b,r.poolPrice,r.invertedPoolPrice]),(0,i.useEffect)((function(){if(k){var e=(0,Y.e)(r.poolPrice.plus(Number(p?U:r.poolPrice.multipliedBy((0,l.O)(U).div(r.invertedPoolPrice).decimalPlaces(12)))||0),r.token0.decimals,r.token1.decimals);c(e)}else c(r.tickUpper)}),[c,U,k,r.poolPrice,r.invertedPoolPrice]),(0,i.useEffect)((function(){var e=W(null===n||void 0===n?void 0:n.rebalances[0]);if(e.recurring.rangeConfig.rangeConfigType===g.a.PRICE&&e.initialized){if(e.recurring.rangeConfig.sqrtPriceX96Down){var t=e.recurring.rangeConfig.sqrtPriceX96Down,i=(0,l.O)(t).multipliedBy(t).multipliedBy((0,l.O)(10).pow(r.token0.decimals)).div((0,l.O)(10).pow(r.token1.decimals)).div((0,l.O)(2).pow(192)).multipliedBy(-1).decimalPlaces(12).toFixed();D(i)}if(e.recurring.rangeConfig.sqrtPriceX96Up){var o=e.recurring.rangeConfig.sqrtPriceX96Up,a=(0,l.O)(o).multipliedBy(o).multipliedBy((0,l.O)(10).pow(r.token0.decimals)).div((0,l.O)(10).pow(r.token1.decimals)).div((0,l.O)(2).pow(192)).decimalPlaces(12).toFixed();Z(a)}}}),[]),(0,i.useEffect)((function(){if(p!==N.current){var e=N.current?r.poolPrice:r.invertedPoolPrice,n=(0,l.O)(S).div(e),t=(0,l.O)(U).div(e);D(f.multipliedBy(n).decimalPlaces(12).toFixed()),Z(f.multipliedBy(t).decimalPlaces(12).toFixed()),N.current=p}}),[p]),(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:4,mb:1},children:[(0,P.jsx)(d.Z,{variant:"secondary14",color:"text.tertiary",children:"If price goes"}),(0,P.jsx)(M.U,{baseCurrencySymbol:p?t:o,quoteCurrencySymbol:p?o:t,isSorted:p,onCurrencyToggle:a,sx:{flex:"unset",width:"unset"}})]}),(0,P.jsx)(X.Y,{title:"Below current price by",symbolTokenA:p?t:o,symbolTokenB:p?o:t,value:S,minValue:F,maxValue:I,enabled:b,setEnabled:h,onChange:D,onIncrement:function(){return D((Number(S)+B<I?Number(S)+B:I).toString())},onDecrement:function(){return D((Number(S)-B>F?Number(S)-B:F).toString())}}),(0,P.jsx)(X.Y,{title:"Above current price by",symbolTokenA:p?t:o,symbolTokenB:p?o:t,value:U,minValue:L,enabled:k,setEnabled:T,onChange:Z,onDecrement:function(){return Z((Number(U)-B>L?Number(U)-B:L).toString())}})]})},Q=function(e){var r=e.enrichedPosition,n=e.configuredAutomationsData,t=e.symbolTokenA,o=e.symbolTokenB,a=e.onCurrencyToggle,s=e.setTriggerLower,c=e.setTriggerUpper,l=e.isSorted,p=i.useState(!0),f=(0,G.Z)(p,2),m=f[0],x=f[1],v=i.useState(!0),y=(0,G.Z)(v,2),b=y[0],h=y[1],C=i.useState(L.toString()),w=(0,G.Z)(C,2),k=w[0],j=w[1],O=i.useState(B.toString()),S=(0,G.Z)(O,2),D=S[0],E=S[1];return(0,i.useEffect)((function(){if(m){var e=(0,Y.e)(r.poolPrice.plus(r.poolPrice.div(100).multipliedBy(Number(k)||0)),r.token0.decimals,r.token1.decimals);s(e)}else s(r.tickLower)}),[s,k,m,r.tickCurrent]),(0,i.useEffect)((function(){if(b){var e=(0,Y.e)(r.poolPrice.plus(r.poolPrice.div(100).multipliedBy(Number(D)||0)),r.token0.decimals,r.token1.decimals);c(e)}else c(r.tickUpper)}),[c,D,b,r.tickCurrent]),(0,i.useEffect)((function(){var e=W(null===n||void 0===n?void 0:n.rebalances[0]);e.recurring.rangeConfig.rangeConfigType===g.a.TICKS&&e.initialized&&(e.recurring.rangeConfig.ticksDown&&j(T(-e.recurring.rangeConfig.ticksDown).toString()),e.recurring.rangeConfig.ticksUp&&E(T(e.recurring.rangeConfig.ticksUp).toString()))}),[]),(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:4,mb:1},children:[(0,P.jsx)(d.Z,{variant:"secondary14",color:"text.tertiary",children:"If price goes"}),(0,P.jsx)(M.U,{baseCurrencySymbol:l?t:o,quoteCurrencySymbol:l?o:t,isSorted:l,onCurrencyToggle:a,sx:{flex:"unset",width:"unset"}})]}),(0,P.jsx)(X.Y,{title:"Below current price by",symbolTokenA:l?t:o,symbolTokenB:l?o:t,value:k,minValue:I,maxValue:L,enabled:m,setEnabled:x,onChange:j,isPercentage:!0,onIncrement:function(){return j((Number(k)<L?Number(k)+1:L).toString())},onDecrement:function(){return j((Number(k)>I?Number(k)-1:I).toString())}}),(0,P.jsx)(X.Y,{title:"Above current price by",symbolTokenA:l?t:o,symbolTokenB:l?o:t,value:D,minValue:B,maxValue:99,enabled:b,setEnabled:h,onChange:E,isPercentage:!0,onIncrement:function(){return E((Number(D)<99?Number(D)+1:99).toString())},onDecrement:function(){return E((Number(D)>B?Number(D)-1:B).toString())}})]})},$=n(50029),J=n(87794),ee=n.n(J),re=n(72864),ne=n(31001),te=n(77537),ie=n(87899),oe=n(39771),ae=n(70574);function se(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function ce(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?se(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var le,ue=i.memo((function(e){var r=e.marketId,n=e.positionAddress,t=e.triggerLower,a=e.triggerUpper,s=e.newTicksDown,c=e.newTicksUp,l=e.gasFeeConfig,d=e.recurring,g=e.isWrongNetwork,p=e.initialized,f=e.hasValueChanges,m=(0,o.vR)(),x=m.mainTxState,v=m.setMainTxState,y=m.setTxError,b=m.setGasLimit,h=(0,te.Z)().sendTx,C=(0,ie.Yh)((function(e){return e.currentChainId})),w=(0,ie.Yh)((function(e){return[e.setupAutoRebalance,e.cancelAutoRebalance,e.estimateGasLimit]})),k=(0,G.Z)(w,3),T=k[0],j=k[1],O=k[2],S=function(){var e=(0,$.Z)(ee().mark((function e(){var i,o,u;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&n&&t&&a&&s&&c&&l&&!x.success){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,window.gtag("event","leverage_modal_setup_auto_rebalance"),y(void 0),v(ce(ce({},x),{},{loading:!0,value:"setup"})),i=T({marketId:r,positionAddress:n,triggerLower:t,triggerUpper:a,newTicksDown:s,newTicksUp:c,recurring:d,gasFeeConfig:l}),e.next=9,h(i);case 9:return o=e.sent,e.next=12,re.queryClient.invalidateQueries({queryKey:[ne.iP.YLDR_LEVERAGE_AUTOMATIONS,C,r,[n]]});case 12:return e.next=14,o.wait(1);case 14:return e.next=16,re.queryClient.invalidateQueries({queryKey:[ne.iP.YLDR_LEVERAGE_AUTOMATIONS,C,r,[n]]});case 16:v({txHash:o.hash,loading:!1,success:!0}),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(2),u=(0,oe.WG)(e.t0,oe.aD.GAS_ESTIMATION,!1),y(u),v({txHash:void 0,loading:!1});case 24:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,$.Z)(ee().mark((function e(){var t,i,o;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&n&&!x.success){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,window.gtag("event","leverage_modal_cancel_auto_rebalance"),y(void 0),v(ce(ce({},x),{},{loading:!0,value:"cancel"})),t=j(r,n),e.next=9,h(t);case 9:return i=e.sent,e.next=12,re.queryClient.invalidateQueries({queryKey:[ne.iP.YLDR_LEVERAGE_AUTOMATIONS,C,r,[n]]});case 12:return e.next=14,i.wait(1);case 14:return e.next=16,re.queryClient.invalidateQueries({queryKey:[ne.iP.YLDR_LEVERAGE_AUTOMATIONS,C,r,[n]]});case 16:v({txHash:i.hash,loading:!1,success:!0}),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(2),o=(0,oe.WG)(e.t0,oe.aD.GAS_ESTIMATION,!1),y(o),v({txHash:void 0,loading:!1});case 24:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){if(r&&n&&t&&a&&s&&c&&l&&!x.success){var e=function(){var e=(0,$.Z)(ee().mark((function e(){var i,o,u;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=T({marketId:r,positionAddress:n,triggerLower:t,triggerUpper:a,newTicksDown:s,newTicksUp:c,gasFeeConfig:l,recurring:d}),e.next=3,O(o);case 3:u=e.sent,b((null===(i=u.gasLimit)||void 0===i?void 0:i.toString())||"0");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=setTimeout(e,500),o=setInterval(e,15e3);return function(){clearInterval(o),clearTimeout(i)}}}),[t,a,s,c,l.maxUsd,l.maxPositionPercent,x.success]),(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.jsx)(ae.v,{mainTxState:x,disabledLoading:"cancel"===x.value,isWrongNetwork:g,requiresAmount:!0,preparingTransactions:!1,actionText:p?"Apply changes":"Enable auto-rebalance",actionInProgressText:p?"Applying changes":"Enabling auto-rebalance",handleAction:S,variantPositive:!0,disabled:!f&&p}),p&&(0,P.jsx)(ae.v,{mainTxState:x,disabledLoading:"setup"===x.value,isWrongNetwork:g,requiresAmount:!0,preparingTransactions:!1,actionText:"Disable auto-rebalance",actionInProgressText:"Disabling auto-rebalance",handleAction:D,variantPositive:!1,sx:{mt:0}})]})}));!function(e){e.percent="percent",e.usd="usd"}(le||(le={}));var de=function(e){return Math.ceil((e-Math.floor(Date.now()/1e3))/86400)},ge=function(e){var r=e.gasFeeCeilingType,n=e.setGasFeeCeilingType,t=e.value,o=e.setValue,a=e.marketReferenceCurrencyValue,s=(0,ie.Yh)((function(e){return e.currentNetworkConfig})),c=s.compoundGasCost,g=(0,l.O)(s.compoundGasCost).div((0,l.O)(a).div(100)).decimalPlaces(2).toNumber(),m=(0,i.useRef)(c.toString()),x=(0,i.useRef)(g.toString());return(0,i.useLayoutEffect)((function(){t?(r===le.usd&&(m.current=t),r===le.percent&&(x.current=t)):o(r===le.usd?m.current:x.current)}),[t]),(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.jsx)(d.Z,{variant:"secondary14",color:"text.tertiary",children:"Gas fee ceiling"}),(0,P.jsxs)(u.Z,{sx:{display:"flex",gap:2},children:[(0,P.jsxs)(f.t,{color:"primary",exclusive:!0,value:r,onChange:function(e,r){var t;null!==(t=r)&&(n(t),o(t===le.usd?m.current:x.current))},sx:{flex:"unset",width:"unset"},children:[(0,P.jsx)(D.C,{value:le.percent,size:"medium",sx:{width:"43px",height:"36px"},children:(0,P.jsx)(d.Z,{variant:"secondary15",color:"text.secondary",children:"%"})}),(0,P.jsx)(D.C,{value:le.usd,size:"medium",sx:{width:"43px",height:"36px"},children:(0,P.jsx)(d.Z,{variant:"secondary15",color:"text.secondary",children:"$"})})]}),(0,P.jsx)(C.A,{value:t,onChange:o,isPercentage:r===le.percent,endAdornment:r===le.percent?(0,P.jsxs)(d.Z,{variant:"secondary15",color:"text.tertiary",children:["~",(0,p.d)(a*(Number(t)/100))]}):null,sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:2,height:"44px",width:"100%",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.06)",background:"#2A2A32",py:2,px:3}})]})]})},pe=n(51324);function fe(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function me(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?fe(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var xe=i.memo((function(e){var r=e.enrichedPosition,n=e.configuredAutomationsData,s=e.positionAddress,y=e.isWrongNetwork,b=(0,i.useState)(g.a.RANGE),h=b[0],C=b[1],k=(0,i.useState)(le.percent),N=k[0],V=k[1],M=(0,i.useState)(""),q=M[0],z=M[1],G=(0,i.useState)(!1),X=G[0],K=G[1],$=(0,i.useState)(!1),J=$[0],ee=$[1],re=(0,i.useState)(g.D.COUNT),ne=re[0],te=re[1],ie=(0,i.useState)("0"),oe=ie[0],ae=ie[1],se=(0,i.useState)(r.tickLower),ce=se[0],fe=se[1],xe=(0,i.useState)(r.tickUpper),ve=xe[0],ye=xe[1],be=(0,i.useState)(""),he=be[0],Ce=be[1],Pe=(0,i.useState)(""),we=Pe[0],ke=Pe[1],Te=(0,i.useState)(!0),je=Te[0],Oe=Te[1],Se=(0,o.vR)(),De=Se.mainTxState,Ee=Se.txError,Ae=Se.setTxError,Ue=Se.gasLimit,Ze=(0,m.HT)().reserves,Ne=(0,x.v)({reserves:Ze,address:r.token0.underlyingAsset}),Fe=(0,x.v)({reserves:Ze,address:r.token1.underlyingAsset}),Ie=(0,v.U)(je?Ne:Fe),Le=(0,v.U)(je?Fe:Ne),Be=je?r.poolPrice:r.invertedPoolPrice,Re=ce>=r.tickCurrent?r.tickCurrent-1:ce,Ve=ve<=r.tickCurrent?r.tickCurrent+1:ve,Me=Math.abs(j(Number(he))),qe=Math.abs(j(Number(we))),ze=(0,S.N)(ce,r.token0.decimals,r.token1.decimals),_e=(0,S.N)(ve,r.token0.decimals,r.token1.decimals),Ge=function(e,r,n){var t=W(e),i=T(-t.newTicksDown).toFixed(),o=T(t.newTicksUp).toFixed(),a=t.gasFeeConfig.maxUsd?le.usd:le.percent;if(n.rangeConfigType!==t.recurring.rangeConfig.rangeConfigType)return!0;if(n.gasFeeCeilingType!==a)return!0;if(a===le.usd&&n.gasFeeCeilingValue!==t.gasFeeConfig.maxUsd.toString())return!0;if(a===le.percent&&n.gasFeeCeilingValue!==t.gasFeeConfig.maxPositionPercent.toString())return!0;if(n.endTriggerType!==t.recurring.endConfig.triggerType)return!0;if(n.endTriggerType===g.D.COUNT&&n.endTriggerValue!==t.recurring.endConfig.count.toString())return!0;if(n.endTriggerType===g.D.TIMESTAMP){var s=de(t.recurring.endConfig.timestamp).toString();if(n.endTriggerValue!==s)return!0}if(n.lowerPercent!==i)return!0;if(n.upperPercent!==o)return!0;if(n.rangeConfigType===g.a.TICKS){var c=T(-t.recurring.rangeConfig.ticksDown).toString(),u=T(t.recurring.rangeConfig.ticksUp).toString(),d=(0,Y.e)(r.poolPrice.plus(r.poolPrice.div(100).multipliedBy(c)),r.token0.decimals,r.token1.decimals),p=(0,Y.e)(r.poolPrice.plus(r.poolPrice.div(100).multipliedBy(u)),r.token0.decimals,r.token1.decimals);if(n.triggerLower!==d)return!0;if(n.triggerUpper!==p)return!0}if(n.rangeConfigType===g.a.PRICE){var f=(0,l.O)(t.recurring.rangeConfig.sqrtPriceX96Down).multipliedBy(t.recurring.rangeConfig.sqrtPriceX96Down).multipliedBy((0,l.O)(10).pow(r.token0.decimals)).div((0,l.O)(10).pow(r.token1.decimals)).div((0,l.O)(2).pow(192)).toFixed(),m=(0,l.O)(t.recurring.rangeConfig.sqrtPriceX96Up).multipliedBy(t.recurring.rangeConfig.sqrtPriceX96Up).multipliedBy((0,l.O)(10).pow(r.token0.decimals)).div((0,l.O)(10).pow(r.token1.decimals)).div((0,l.O)(2).pow(192)).toFixed(),x=(0,Y.e)(r.poolPrice.minus(f),r.token0.decimals,r.token1.decimals),v=(0,Y.e)(r.poolPrice.plus(m),r.token0.decimals,r.token1.decimals);if(n.triggerLower!==x)return!0;if(n.triggerUpper!==v)return!0}return!1}(null===n||void 0===n?void 0:n.rebalances[0],r,{triggerLower:Re,triggerUpper:Ve,rangeConfigType:h,gasFeeCeilingType:N,gasFeeCeilingValue:q,endTriggerType:ne,endTriggerValue:oe,lowerPercent:he,upperPercent:we}),Xe={marketId:r.marketId,initialized:X,recurring:{rangeConfig:{rangeConfigType:h,ticksDown:h===g.a.TICKS?r.tickCurrent-ce:0,ticksUp:h===g.a.TICKS?ve-r.tickCurrent:0,sqrtPriceX96Down:h===g.a.PRICE?(0,O.t)(r.poolPrice.minus((null===ze||void 0===ze?void 0:ze.toFixed())||0).abs(),r.token0.decimals,r.token1.decimals).toFixed():"0",sqrtPriceX96Up:h===g.a.PRICE?(0,O.t)((0,l.O)((null===_e||void 0===_e?void 0:_e.toFixed())||0).minus(r.poolPrice).abs(),r.token0.decimals,r.token1.decimals).toFixed():"0"},endConfig:J?{triggerType:ne,count:ne===g.D.COUNT?parseInt(oe):0,timestamp:ne===g.D.TIMESTAMP?Math.round(Date.now()/1e3)+Math.round(24*parseInt(oe)*60*60):0}:{triggerType:g.D.TIMESTAMP,count:0,timestamp:Math.round(Date.now()/1e3)+Math.round(31536e5)},active:!0},gasFeeConfig:{maxUsd:N===le.usd?Number(q):0,maxPositionPercent:N===le.percent?(0,l.O)(q).multipliedBy(100).decimalPlaces(0).toNumber():0},triggerLower:Re,triggerUpper:Ve,newTicksDown:Me,newTicksUp:qe,positionAddress:s,isWrongNetwork:y,hasValueChanges:Ge},Ye=function(){return Oe((function(e){return!e}))};return(0,i.useLayoutEffect)((function(){var e=W(null===n||void 0===n?void 0:n.rebalances[0]),t=T(-e.newTicksDown).toFixed(),i=T(e.newTicksUp).toFixed(),o=e.gasFeeConfig.maxUsd?le.usd:le.percent;if(e.initialized)K(e.initialized),C(e.recurring.rangeConfig.rangeConfigType),Ce(t),ke(i),ee(e.recurring.active),te(e.recurring.endConfig.triggerType),ae(e.recurring.endConfig.triggerType===g.D.COUNT?e.recurring.endConfig.count.toString():de(e.recurring.endConfig.timestamp).toString()),V(o),z(o===le.usd?e.gasFeeConfig.maxUsd.toString():e.gasFeeConfig.maxPositionPercent.toString());else{var a,s,c,l,u=(0,S.N)(r.tickLower,null===(a=r.token0)||void 0===a?void 0:a.decimals,null===(s=r.token1)||void 0===s?void 0:s.decimals),d=(0,S.N)(r.tickUpper,null===(c=r.token0)||void 0===c?void 0:c.decimals,null===(l=r.token1)||void 0===l?void 0:l.decimals),p=Be.minus((null===u||void 0===u?void 0:u.toFixed())||0).div(r.poolPrice.div(100)).multipliedBy(-1).decimalPlaces(0),f=Be.multipliedBy(-1).plus((null===d||void 0===d?void 0:d.toFixed())||0).div(r.poolPrice.div(100)).decimalPlaces(0);Ce(p.isLessThan(L)?p.toFixed():L.toString()),ke(f.isGreaterThan(B)?f.toFixed():B.toString())}}),[]),De.success?(0,P.jsx)(a.mf,{children:(0,P.jsx)(U.R,{action:(0,P.jsx)(c.cC,{id:"successfully enabled"}),amount:De.value,prefix:"$"})}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a.Rh,{withDivider:!0,children:(0,P.jsx)(A.Z,{title:X?"Disable auto-rebalance":"Enable auto-rebalance",marketName:null===r||void 0===r?void 0:r.marketName,tokenA:null===r||void 0===r?void 0:r.token0,tokenB:null===r||void 0===r?void 0:r.token1,fee:null===r||void 0===r?void 0:r.fee})}),(0,P.jsxs)(a.mf,{sx:{display:"flex",flexDirection:"column",gap:5,pt:5},children:[(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.jsx)(d.Z,{variant:"secondary14",color:"text.tertiary",children:"Rebalance position when"}),(0,P.jsx)(f.t,{color:"primary",exclusive:!0,value:h,onChange:function(e,r){return C(r)},sx:{width:"100%"},children:F.map((function(e){return(0,P.jsx)(D.C,{value:e.value,size:"small",sx:{flex:"1 1 auto",fontSize:"14px"},children:e.label},e.value)}))})]}),(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:1.5},children:[(0,P.jsx)(d.Z,{variant:"secondary13",color:"text.secondary",children:"Current Price"}),(0,P.jsxs)(u.Z,{sx:(0,t.Z)({display:"flex",alignItems:"end",gap:1.5,lineHeight:0},">p",{lineHeight:"100%"}),children:[(0,P.jsx)(d.Z,{variant:"secondary16",children:(0,p.d)(Be)}),(0,P.jsxs)(d.Z,{variant:"secondary14",color:"text.tertiary",children:[null===Ie||void 0===Ie?void 0:Ie.symbol," per ",null===Le||void 0===Le?void 0:Le.symbol]})]})]}),h===g.a.RANGE&&(0,P.jsx)(_,{enrichedPosition:r,baseCurrency:Ie,quoteCurrency:Le,symbolTokenA:r.token0.symbol,symbolTokenB:r.token1.symbol,setTriggerLower:fe,setTriggerUpper:ye,onCurrencyToggle:Ye,isSorted:je}),h===g.a.PRICE&&(0,P.jsx)(H,{enrichedPosition:r,configuredAutomationsData:n,symbolTokenA:r.token0.symbol,symbolTokenB:r.token1.symbol,setTriggerLower:fe,setTriggerUpper:ye,onCurrencyToggle:Ye,isSorted:je}),h===g.a.TICKS&&(0,P.jsx)(Q,{enrichedPosition:r,configuredAutomationsData:n,symbolTokenA:r.token0.symbol,symbolTokenB:r.token1.symbol,setTriggerLower:fe,setTriggerUpper:ye,onCurrencyToggle:Ye,isSorted:je}),(0,P.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.jsx)(d.Z,{variant:"secondary14",color:"text.tertiary",children:"Then set new price range"}),(0,P.jsxs)(u.Z,{sx:{display:"flex",gap:2},children:[(0,P.jsx)(w,{label:"Min price",description:"Below future price",value:he,minValue:I,maxValue:L,onChange:Ce}),(0,P.jsx)(w,{label:"Max price",description:"Above future price",value:we,minValue:B,maxValue:99,onChange:ke})]})]}),(0,P.jsx)(ge,{gasFeeCeilingType:N,setGasFeeCeilingType:V,value:q,setValue:z,marketReferenceCurrencyValue:r.marketReferenceCurrencyValue}),(0,P.jsx)(R,{endConfigEnabled:J,setEndConfigEnabled:ee,endTriggerType:ne,setEndTriggerType:te,value:oe,setValue:ae}),(0,P.jsx)(E.m6,{description:Z.U,gasLimit:Ue,skipLoad:!0,sx:{mt:0},children:(0,P.jsx)(E.oD,{description:"Protocol fee",captionColor:"text.secondary",value:.0015,percent:!0})}),Ee&&(0,P.jsx)(pe.Y,{variant:"error",txError:Ee,onClose:function(){return Ae(void 0)}})]}),(0,P.jsx)(a.Ys,{children:(0,P.jsx)(ue,me({},Xe))})]})}));function ve(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var ye=function(){var e=(0,o.vR)(),r=e.type,n=e.args,i=e.close;return(0,P.jsx)(a.XC,{open:r===o.w8.AutoRebalance,setOpen:i,children:(0,P.jsx)(s.o,{positionAddress:n.positionAddress,modernStyle:!0,children:function(e){return(0,P.jsx)(xe,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ve(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},e))}})})}},1390:function(e,r,n){n.d(r,{A:function(){return g}});var t=n(59499),i=n(4730),o=n(67294),a=n(81011),s=n(32295),c=n(85893),l=["minValue","maxValue","value","isPercentage","onChange","onBlur","decimalPlaces","sx"];function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var g=function(e){var r=e.minValue,n=e.maxValue,t=e.value,u=e.isPercentage,g=e.onChange,p=e.onBlur,f=e.decimalPlaces,m=e.sx,x=(0,i.Z)(e,l),v=(0,o.useRef)(null);return(0,c.jsx)(a.ZP,d({inputRef:v,value:"".concat(t).concat(u?"%":""),onChange:function(e){var t=e.currentTarget.value.replace(/[^\d.,-]/g,"").replace(",",".");if((0,s.i)(t.replace("-",""),f)){if(n&&n>0){var i=Number(t)>n?n.toString():t;g(i)}else if(r&&r<0){var o=Number(t)<r?r.toString():t;g(o)}else g(t);setTimeout((function(){if(v.current){var e=t.length;v.current.selectionStart=e,v.current.selectionEnd=e}}),0)}},onBlur:function(){if(r&&r>0){var e=Number(t)<r||isNaN(parseFloat(t))?r.toString():t;g(e)}if(n&&n<0){var i=Number(t)>n||isNaN(parseFloat(t))?n.toString():t;g(i)}null===p||void 0===p||p()},onFocus:function(){setTimeout((function(){if(v.current){var e=t.toString().length;v.current.selectionStart=e,v.current.selectionEnd=e}}),0)},sx:d({fontSize:"15px"},m)},x))}},4530:function(e,r,n){n.d(r,{t:function(){return u}});var t=n(59499),i=n(4730),o=n(85390),a=n(85893),s=["children","sx"];function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var u=function(e){var r=e.children,n=e.sx,t=(0,i.Z)(e,s);return(0,a.jsx)(o.Z,l(l({},t),{},{sx:l({flex:{xs:"1 1 auto",md:"unset"},width:{xs:"100%",md:"unset"},padding:"3px",gap:1,borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.06)",backgroundColor:"#26262B"},n),children:r}))}},2802:function(e,r,n){n.d(r,{d:function(){return i}});var t=n(70794),i=function(e){if(!e)return"0";var r=(0,t.Z)(e);return r.abs().isLessThan(.1)?r.toFixed(8):r.abs().isLessThan(10)?r.toFixed(4):r.toFixed(2)}},32295:function(e,r,n){n.d(r,{i:function(){return t}});var t=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=new RegExp("^(?!0[0-9])[0-9]+[.,]?[0-9]{0,".concat(r,"}$"),"g");return(null===e||void 0===e?void 0:e.match(n))&&e.length<=79||!e.length}}}]);
//# sourceMappingURL=1998.50fab4ce2747ceab.js.map