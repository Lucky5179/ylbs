"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4209],{88543:function(e,t,n){n.d(t,{XC:function(){return g},mf:function(){return b},Ys:function(){return x},Rh:function(){return h}});var r=n(59499),o=n(4730),i=n(5506),a=n(1568),c=n(70918),s=n(61953),l=n(80562),C=n(81645),d=(n(67294),n(85893)),u=["open","setOpen","withCloseButton","contentMaxWidth","children"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.open,n=e.setOpen,r=e.withCloseButton,p=void 0===r||r,g=e.contentMaxWidth,h=void 0===g?420:g,v=e.children,L=(0,o.Z)(e,u),b=function(){return n(!1)};return(0,d.jsx)(a.Z,f(f({open:t,onClose:b,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",".MuiPaper-root":{outline:"none",borderRadius:"16px"}},onClick:function(e){e.stopPropagation()}},L),{},{children:(0,d.jsxs)(c.Z,{sx:{display:"grid",gridTemplateAreas:'"header" "content" "footer"',position:"relative",margin:"16px",overflowY:"hidden",width:"100%",maxWidth:{xs:"359px",xsm:"".concat(h,"px")},maxHeight:"calc(100vh - 20px)",py:6},children:[p&&(0,d.jsx)(s.Z,{sx:{position:"absolute",top:"24px",right:"50px",zIndex:5},children:(0,d.jsx)(l.Z,{sx:{borderRadius:"50%",p:0,minWidth:0,position:"fixed",bgcolor:"background.paper"},onClick:b,"data-cy":"close-button",children:(0,d.jsx)(C.Z,{sx:{fontSize:"28px",color:"grey[40]"},children:(0,d.jsx)(i.Z,{"data-cy":"CloseModalIcon"})})})}),v]})}))},h=function(e){var t=e.children,n=e.withDivider;return(0,d.jsx)(s.Z,{sx:{gridArea:"header",px:6,pb:4,borderBottom:n?"1px solid rgba(255, 255, 255, 0.08)":"unset"},children:t})};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.children,n=e.sx;return(0,d.jsx)(s.Z,{sx:L({gridArea:"content",maxHeight:"calc(100vh - 140px)",position:"relative",overflowY:"auto",px:6},n),children:t})},x=function(e){var t=e.children;return(0,d.jsx)(s.Z,{sx:{gridArea:"footer",px:6,pt:2},children:t})}},34275:function(e,t,n){n.d(t,{v:function(){return s}});var r=n(17674),o=n(17e3),i=n(31001),a=n(13613),c=n(87899),s=function(e){var t=e.marketId,n=e.positions,s=void 0===n?[]:n,l=e.enabled,C=void 0===l||l,d=(0,a.z)().yldrLeverageAutomationsService,u=(0,c.Yh)((function(e){return[e.currentChainId,e.isMarketsReady,e.getMarketDataById(t)]})),p=(0,r.Z)(u,3),f=p[0],g=p[1],h=p[2],v=h.addresses.leverageAutomationsAddress;return(0,o.a)({queryFn:function(){return d.getConfiguredAutomations(f,v,s)},queryKey:[i.iP.YLDR_LEVERAGE_AUTOMATIONS,f,t,v,s],enabled:Boolean(h.marketId&&v&&s.length)&&g&&C,refetchInterval:i.g_})}},44209:function(e,t,n){n.r(t),n.d(t,{AutomationsModal:function(){return Z}});var r,o=n(67294),i=n(8195),a=n(88543),c=n(59499),s=n(23378),l=n(75743),C=n(34275),d=n(87899),u=n(50468);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var f,g=function(e){return o.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("g",{id:"arrow-down-on-square-2_svg__arrow-down-on-square-2"},o.createElement("g",{id:"arrow-down-on-square-2_svg__Vector"},o.createElement("path",{d:"M12.9598 1.05033C12.9598 0.520139 12.53 0.090332 11.9998 0.090332C11.4697 0.090332 11.0398 0.520138 11.0398 1.05033L11.0398 10.2827L9.67867 8.92151C9.30376 8.5466 8.69592 8.54661 8.32102 8.92151C7.94612 9.29641 7.94612 9.90425 8.32102 10.2792L11.321 13.2792C11.5011 13.4592 11.7452 13.5603 11.9998 13.5603C12.2545 13.5603 12.4986 13.4592 12.6787 13.2792L15.6787 10.2792C16.0536 9.90425 16.0536 9.29641 15.6787 8.92151C15.3038 8.54661 14.6959 8.54661 14.321 8.92151L12.9598 10.2827V1.05033Z",fill:"#8061E5"}),o.createElement("path",{d:"M17.6998 4.98057C19.4727 4.98057 20.9098 6.41773 20.9098 8.19057C20.9098 8.63766 20.5474 9.0001 20.1003 9.0001H19.7994C19.3523 9.0001 18.9898 8.63766 18.9898 8.19057C18.9898 7.47812 18.4123 6.90057 17.6998 6.90057H16.1998C15.6697 6.90057 15.2398 6.47076 15.2398 5.94057C15.2398 5.41037 15.6697 4.98057 16.1998 4.98057H17.6998Z",fill:"#8061E5"}),o.createElement("path",{d:"M5.00984 8.19057C5.00984 7.47812 5.5874 6.90057 6.29984 6.90057H7.79984C8.33004 6.90057 8.75984 6.47076 8.75984 5.94057C8.75984 5.41037 8.33004 4.98057 7.79984 4.98057H6.29984C4.52701 4.98057 3.08984 6.41773 3.08984 8.19057V19.5906C3.08984 21.3634 4.52701 22.8006 6.29984 22.8006H11.0398C11.57 22.8006 11.9998 22.3708 11.9998 21.8406C11.9998 21.3104 11.57 20.8806 11.0398 20.8806H6.29984C5.5874 20.8806 5.00984 20.303 5.00984 19.5906V8.19057Z",fill:"#8061E5"}),o.createElement("path",{d:"M21.171 10.8001C21.3874 10.8001 21.5759 10.9473 21.6284 11.1572L21.7911 11.808C21.9389 12.3992 22.4005 12.8608 22.9917 13.0086L23.6425 13.1713C23.8524 13.2238 23.9996 13.4123 23.9996 13.6287C23.9996 13.845 23.8524 14.0336 23.6425 14.086L22.9917 14.2487C22.4005 14.3965 21.9389 14.8581 21.7911 15.4493L21.6284 16.1001C21.5759 16.31 21.3874 16.4572 21.171 16.4572C20.9547 16.4572 20.7661 16.31 20.7137 16.1001L20.551 15.4493C20.4032 14.8581 19.9416 14.3965 19.3504 14.2487L18.6996 14.086C18.4897 14.0336 18.3425 13.845 18.3425 13.6287C18.3425 13.4123 18.4897 13.2238 18.6996 13.1713L19.3504 13.0086C19.9416 12.8608 20.4032 12.3992 20.551 11.808L20.7137 11.1572C20.7661 10.9473 20.9547 10.8001 21.171 10.8001Z",fill:"#8061E5"}),o.createElement("path",{d:"M15.5139 12.6858C15.7244 12.6858 15.9094 12.8253 15.9672 13.0277L16.4783 14.8168C16.7021 15.5998 17.3142 16.2119 18.0972 16.4357L19.8863 16.9468C20.0886 17.0046 20.2282 17.1896 20.2282 17.4001C20.2282 17.6106 20.0886 17.7956 19.8863 17.8534L18.0972 18.3645C17.3142 18.5883 16.7021 19.2004 16.4783 19.9834L15.9672 21.7725C15.9094 21.9748 15.7244 22.1144 15.5139 22.1144C15.3034 22.1144 15.1184 21.9748 15.0606 21.7725L14.5495 19.9834C14.3257 19.2004 13.7136 18.5883 12.9306 18.3645L11.1415 17.8534C10.9391 17.7956 10.7996 17.6106 10.7996 17.4001C10.7996 17.1896 10.9391 17.0046 11.1415 16.9468L12.9306 16.4357C13.7136 16.2119 14.3257 15.5998 14.5495 14.8168L15.0606 13.0277C15.1184 12.8253 15.3034 12.6858 15.5139 12.6858Z",fill:"#8061E5"}),o.createElement("path",{d:"M20.6754 19.6082C20.6112 19.4157 20.4311 19.2858 20.2282 19.2858C20.0253 19.2858 19.8451 19.4157 19.7809 19.6082L19.5331 20.3516C19.4393 20.6331 19.2184 20.8541 18.9368 20.9479L18.1934 21.1957C18.0009 21.2599 17.871 21.44 17.871 21.643C17.871 21.8459 18.0009 22.026 18.1934 22.0902L18.9368 22.338C19.2184 22.4318 19.4393 22.6528 19.5331 22.9343L19.7809 23.6777C19.8451 23.8702 20.0253 24.0001 20.2282 24.0001C20.4311 24.0001 20.6112 23.8702 20.6754 23.6777L20.9232 22.9343C21.0171 22.6528 21.238 22.4318 21.5195 22.338L22.263 22.0902C22.4555 22.026 22.5853 21.8459 22.5853 21.643C22.5853 21.44 22.4555 21.2599 22.263 21.1957L21.5195 20.9479C21.238 20.8541 21.0171 20.6331 20.9232 20.3516L20.6754 19.6082Z",fill:"#8061E5"})))))};function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var v,L=function(e){return o.createElement("svg",h({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f||(f=o.createElement("g",{id:"arrow-path-2_svg__arrow-path-2"},o.createElement("g",{id:"arrow-path-2_svg__Vector"},o.createElement("path",{d:"M12.9623 2.84073C7.90365 2.30904 3.37177 5.97889 2.84008 11.0376C2.78466 11.5649 3.16718 12.0372 3.69447 12.0927C4.22176 12.1481 4.69414 11.7656 4.74956 11.2383C5.17041 7.23417 8.75753 4.32937 12.7616 4.75021C14.084 4.8892 15.2846 5.37292 16.2854 6.10144L18.052 7.38497L15.4082 7.8037C14.8846 7.88664 14.5273 8.37839 14.6102 8.90206C14.6932 9.42572 15.1849 9.783 15.7086 9.70006L20.6397 8.91905C21.1634 8.83611 21.5207 8.34435 21.4377 7.82069L20.6567 2.88955C20.5738 2.36589 20.082 2.00861 19.5584 2.09155C19.0347 2.17449 18.6774 2.66624 18.7604 3.18991L19.1785 5.83018L17.4147 4.54866C16.1483 3.62676 14.6294 3.01595 12.9623 2.84073Z",fill:"#8061E5"}),o.createElement("path",{d:"M11.0369 21.1598C9.37005 20.9846 7.85137 20.374 6.58507 19.4523L4.82085 18.1696L5.23915 20.8106C5.32209 21.3343 4.96481 21.826 4.44114 21.909C3.91748 21.9919 3.42573 21.6346 3.34279 21.111L2.56176 16.1798C2.47882 15.6561 2.8361 15.1644 3.35977 15.0814L8.29094 14.3004C8.81461 14.2175 9.30636 14.5747 9.3893 15.0984C9.47224 15.6221 9.11496 16.1138 8.5913 16.1968L5.94818 16.6154L7.71413 17.8993C8.71488 18.6278 9.91523 19.1114 11.2376 19.2503C11.5871 19.2871 11.8672 19.5742 11.8611 19.9255L11.8527 20.406C11.845 20.8496 11.4781 21.2062 11.0369 21.1598Z",fill:"#8061E5"}),o.createElement("path",{d:"M21.1718 10.8C21.3881 10.8 21.5767 10.9472 21.6291 11.1571L21.7919 11.808C21.9397 12.3991 22.4012 12.8607 22.9924 13.0085L23.6433 13.1712C23.8531 13.2237 24.0004 13.4123 24.0004 13.6286C24.0004 13.8449 23.8531 14.0335 23.6433 14.0859L22.9924 14.2486C22.4012 14.3964 21.9397 14.858 21.7919 15.4492L21.6291 16.1001C21.5767 16.3099 21.3881 16.4571 21.1718 16.4571C20.9555 16.4571 20.7669 16.3099 20.7144 16.1001L20.5517 15.4492C20.4039 14.858 19.9423 14.3964 19.3512 14.2486L18.7003 14.0859C18.4904 14.0335 18.3432 13.8449 18.3432 13.6286C18.3432 13.4123 18.4904 13.2237 18.7003 13.1712L19.3512 13.0085C19.9423 12.8607 20.4039 12.3991 20.5517 11.808L20.7144 11.1571C20.7669 10.9472 20.9555 10.8 21.1718 10.8Z",fill:"#8061E5"}),o.createElement("path",{d:"M15.5147 12.6857C15.7251 12.6857 15.9101 12.8253 15.9679 13.0276L16.4791 14.8167C16.7028 15.5997 17.3149 16.2118 18.098 16.4356L19.887 16.9467C20.0894 17.0045 20.2289 17.1895 20.2289 17.4C20.2289 17.6105 20.0894 17.7955 19.887 17.8533L18.098 18.3644C17.3149 18.5882 16.7028 19.2003 16.4791 19.9833L15.9679 21.7724C15.9101 21.9748 15.7251 22.1143 15.5147 22.1143C15.3042 22.1143 15.1192 21.9748 15.0614 21.7724L14.5502 19.9833C14.3265 19.2003 13.7144 18.5882 12.9313 18.3644L11.1423 17.8533C10.9399 17.7955 10.8004 17.6105 10.8004 17.4C10.8004 17.1895 10.9399 17.0045 11.1423 16.9467L12.9313 16.4356C13.7144 16.2118 14.3265 15.5997 14.5502 14.8167L15.0614 13.0276C15.1192 12.8253 15.3042 12.6857 15.5147 12.6857Z",fill:"#8061E5"}),o.createElement("path",{d:"M20.6762 19.6081C20.612 19.4156 20.4319 19.2857 20.2289 19.2857C20.026 19.2857 19.8459 19.4156 19.7817 19.6081L19.5339 20.3515C19.44 20.633 19.2191 20.854 18.9376 20.9478L18.1941 21.1956C18.0016 21.2598 17.8718 21.4399 17.8718 21.6429C17.8718 21.8458 18.0016 22.0259 18.1941 22.0901L18.9376 22.3379C19.2191 22.4318 19.44 22.6527 19.5339 22.9342L19.7817 23.6777C19.8459 23.8702 20.026 24 20.2289 24C20.4319 24 20.612 23.8702 20.6762 23.6777L20.924 22.9342C21.0178 22.6527 21.2388 22.4318 21.5203 22.3379L22.2637 22.0901C22.4562 22.0259 22.5861 21.8458 22.5861 21.6429C22.5861 21.4399 22.4562 21.2598 22.2637 21.1956L21.5203 20.9478C21.2388 20.854 21.0178 20.633 20.924 20.3515L20.6762 19.6081Z",fill:"#8061E5"})))))};function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var x,m=function(e){return o.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),v||(v=o.createElement("g",{id:"exit-2_svg__exit-2"},o.createElement("g",{id:"exit-2_svg__Vector"},o.createElement("path",{d:"M21.3093 2.08961C21.8789 2.65926 22.1989 3.43186 22.1989 4.23745V8.58745C22.1989 9.14664 21.7456 9.59995 21.1864 9.59995C20.6273 9.59995 20.1739 9.14664 20.1739 8.58745V4.23745C20.1739 3.96892 20.0673 3.71139 19.8774 3.52151C19.6875 3.33162 19.43 3.22495 19.1614 3.22495H11.7364C11.4679 3.22495 11.2104 3.33162 11.0205 3.52151C10.8306 3.71139 10.7239 3.96892 10.7239 4.23745V6.93745C10.7239 7.20598 10.6173 7.46352 10.4274 7.6534C10.2375 7.84328 9.97998 7.94995 9.71145 7.94995C9.44292 7.94995 9.18538 7.84328 8.9955 7.6534C8.80562 7.46352 8.69895 7.20598 8.69895 6.93745V4.23745C8.69895 3.43186 9.01897 2.65926 9.58861 2.08961C10.1583 1.51997 10.9309 1.19995 11.7364 1.19995H19.1614C19.967 1.19995 20.7396 1.51997 21.3093 2.08961Z",fill:"#8061E5"}),o.createElement("path",{d:"M13.3493 11.9999C13.3493 11.7314 13.2426 11.4739 13.0527 11.284C12.8628 11.0941 12.6053 10.9874 12.3368 10.9874H4.24968L5.66448 9.71439C5.76644 9.6263 5.84979 9.51874 5.90965 9.39801C5.96951 9.27729 6.00467 9.14583 6.01307 9.01134C6.02147 8.87686 6.00294 8.74204 5.95856 8.61481C5.91419 8.48758 5.84486 8.37048 5.75465 8.27039C5.66444 8.17029 5.55516 8.08921 5.43321 8.0319C5.31125 7.97458 5.17909 7.94218 5.04445 7.9366C4.90982 7.93103 4.77543 7.95238 4.64915 7.99941C4.52288 8.04644 4.40726 8.1182 4.30908 8.21049L0.934077 11.248C0.82879 11.3429 0.744614 11.4589 0.686998 11.5885C0.629381 11.718 0.599609 11.8582 0.599609 11.9999C0.599609 12.1417 0.629381 12.2819 0.686998 12.4114C0.744614 12.541 0.82879 12.657 0.934077 12.7519L4.30908 15.7894C4.40726 15.8817 4.52288 15.9534 4.64915 16.0005C4.77543 16.0475 4.90982 16.0689 5.04445 16.0633C5.17909 16.0577 5.31125 16.0253 5.43321 15.968C5.55516 15.9107 5.66444 15.8296 5.75465 15.7295C5.84486 15.6294 5.91419 15.5123 5.95856 15.3851C6.00294 15.2578 6.02147 15.123 6.01307 14.9885C6.00467 14.8541 5.96951 14.7226 5.90965 14.6019C5.84979 14.4811 5.76644 14.3736 5.66448 14.2855L4.24968 13.0124H12.3368C12.4697 13.0124 12.6014 12.9863 12.7242 12.9354C12.8471 12.8845 12.9587 12.8099 13.0527 12.7159C13.1467 12.6219 13.2213 12.5102 13.2722 12.3874C13.3231 12.2646 13.3493 12.1329 13.3493 11.9999Z",fill:"#8061E5"}),o.createElement("path",{d:"M21.171 10.8C21.3874 10.8 21.5759 10.9472 21.6284 11.157L21.7911 11.8079C21.9389 12.3991 22.4005 12.8607 22.9917 13.0085L23.6425 13.1712C23.8524 13.2236 23.9996 13.4122 23.9996 13.6285C23.9996 13.8448 23.8524 14.0334 23.6425 14.0859L22.9917 14.2486C22.4005 14.3964 21.9389 14.858 21.7911 15.4491L21.6284 16.1C21.5759 16.3099 21.3874 16.4571 21.171 16.4571C20.9547 16.4571 20.7661 16.3099 20.7137 16.1L20.551 15.4491C20.4032 14.858 19.9416 14.3964 19.3504 14.2486L18.6996 14.0859C18.4897 14.0334 18.3425 13.8448 18.3425 13.6285C18.3425 13.4122 18.4897 13.2236 18.6996 13.1712L19.3504 13.0085C19.9416 12.8607 20.4032 12.3991 20.551 11.8079L20.7137 11.157C20.7661 10.9472 20.9547 10.8 21.171 10.8Z",fill:"#8061E5"}),o.createElement("path",{d:"M15.5139 12.6857C15.7244 12.6857 15.9094 12.8252 15.9672 13.0276L16.4783 14.8166C16.7021 15.5997 17.3142 16.2118 18.0972 16.4355L19.8863 16.9467C20.0886 17.0045 20.2282 17.1895 20.2282 17.4C20.2282 17.6104 20.0886 17.7954 19.8863 17.8532L18.0972 18.3644C17.3142 18.5881 16.7021 19.2002 16.4783 19.9833L15.9672 21.7723C15.9094 21.9747 15.7244 22.1142 15.5139 22.1142C15.3034 22.1142 15.1184 21.9747 15.0606 21.7723L14.5495 19.9833C14.3257 19.2002 13.7136 18.5881 12.9306 18.3644L11.1415 17.8532C10.9391 17.7954 10.7996 17.6104 10.7996 17.4C10.7996 17.1895 10.9391 17.0045 11.1415 16.9467L12.9306 16.4355C13.7136 16.2118 14.3257 15.5997 14.5495 14.8166L15.0606 13.0276C15.1184 12.8252 15.3034 12.6857 15.5139 12.6857Z",fill:"#8061E5"}),o.createElement("path",{d:"M20.6754 19.608C20.6112 19.4155 20.4311 19.2857 20.2282 19.2857C20.0253 19.2857 19.8451 19.4155 19.7809 19.608L19.5331 20.3514C19.4393 20.633 19.2184 20.8539 18.9368 20.9478L18.1934 21.1956C18.0009 21.2597 17.871 21.4399 17.871 21.6428C17.871 21.8457 18.0009 22.0259 18.1934 22.09L18.9368 22.3379C19.2184 22.4317 19.4393 22.6526 19.5331 22.9342L19.7809 23.6776C19.8451 23.8701 20.0253 24 20.2282 24C20.4311 24 20.6112 23.8701 20.6754 23.6776L20.9232 22.9342C21.0171 22.6526 21.238 22.4317 21.5195 22.3379L22.263 22.09C22.4555 22.0259 22.5853 21.8457 22.5853 21.6428C22.5853 21.4399 22.4555 21.2597 22.263 21.1956L21.5195 20.9478C21.238 20.8539 21.0171 20.633 20.9232 20.3514L20.6754 19.608Z",fill:"#8061E5"})))))};!function(e){e[e.AutoCompounding=0]="AutoCompounding",e[e.AutoRebalancing=1]="AutoRebalancing",e[e.AutoExit=2]="AutoExit"}(x||(x={}));var j=n(85893),y=[{type:x.AutoCompounding,icon:(0,j.jsx)(g,{}),label:"Auto-compounding",description:"Set a trigger for a fees auto-reinvesting"},{type:x.AutoRebalancing,icon:(0,j.jsx)(L,{}),label:"Auto-rebalancing",description:"Set a trigger for a position auto-rebalancing"},{type:x.AutoExit,icon:(0,j.jsx)(m,{}),label:"Auto-exit",description:"Set a trigger for a position auto-closure"}];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){var e=(0,i.vR)(),t=e.openAutoCompoundFees,n=e.openAutoRebalance,r=e.openAutoExit,a=e.args,p=(0,d.Yh)((function(e){return e.getMarketDataById(a.marketId)})),f=(0,C.v)({marketId:a.marketId,positions:[a.positionAddress]}).data,g=(0,o.useMemo)((function(){var e;return e={},(0,c.Z)(e,x.AutoCompounding,null===f||void 0===f?void 0:f.compounds[0].initialized),(0,c.Z)(e,x.AutoRebalancing,null===f||void 0===f?void 0:f.rebalances[0].initialized),(0,c.Z)(e,x.AutoExit,null===f||void 0===f?void 0:f.deleverages[0].initialized),e}),[f]),h=(0,o.useMemo)((function(){return y.map((function(e){var t=!p.addresses.leverageAutomationsAddress&&!e.disabled;return w(w({},e),{},{disabled:!!t||e.disabled,endIcon:t?(0,j.jsx)(s.Z,{color:"error",label:"Not available"}):g[e.type]?(0,j.jsx)(s.Z,{color:"success",label:"Enabled"}):e.endIcon})}))}),[p.addresses.leverageAutomationsAddress,g]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u.E,{title:"Select automation",sx:{ml:6}}),(0,j.jsx)(l.q,{items:h,onSelect:function(e){switch(y[e].type){case x.AutoCompounding:return window.gtag("event","leverage_auto_compound_click"),void(a.positionAddress&&t(a.positionAddress));case x.AutoRebalancing:return window.gtag("event","leverage_auto_rebalance_click"),void(a.positionAddress&&n(a.positionAddress));case x.AutoExit:return window.gtag("event","leverage_auto_exit_click"),void(a.positionAddress&&r(a.positionAddress))}}})]})},Z=function(){var e=(0,i.vR)(),t=e.type,n=e.close;return(0,j.jsx)(a.XC,{open:t===i.w8.Automations,setOpen:n,children:(0,j.jsx)(E,{})})}},75743:function(e,t,n){n.d(t,{q:function(){return f}});var r=n(59499),o=(n(67294),n(852)),i=n(98649),a=n(63542),c=n(8164),s=n(18502),l=n(29894),C=n(61702),d=n(61953),u=n(81138),p=n(85893),f=function(e){var t=e.items,n=e.onSelect;return(0,p.jsx)(o.Z,{children:t.map((function(e,o){var f;return(0,p.jsxs)(i.Z,{sx:(0,r.Z)({borderBottom:o<t.length-1?"1px solid rgba(255, 255, 255, 0.08)":"unset",px:4,py:3,whiteSpace:"unset"},"&.".concat(a.Z.disabled),(f={opacity:1},(0,r.Z)(f,">.".concat(c.Z.root),{opacity:.5}),(0,r.Z)(f,"p.".concat(s.Z.root),{opacity:.5}),f)),disabled:e.disabled,onClick:function(){return null===n||void 0===n?void 0:n(o)},children:[(0,p.jsx)(l.Z,{sx:{mr:4},children:e.icon}),(0,p.jsxs)(C.Z,{sx:(0,r.Z)({},">span",{display:"flex",flexDirection:"column",gap:1}),children:[(0,p.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",gap:3},children:[(0,p.jsx)(u.Z,{variant:"main14",children:e.label}),e.endIcon&&(0,p.jsx)(l.Z,{children:e.endIcon})]}),(0,p.jsx)(u.Z,{variant:"secondary13",color:"text.secondary",children:e.description})]})]},e.label)}))})}}}]);
//# sourceMappingURL=4209.5cf0242f6e4a3bc9.js.map