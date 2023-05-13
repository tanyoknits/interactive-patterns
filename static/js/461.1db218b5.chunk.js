"use strict";(self.webpackChunk_tanyoknits_interactive_patterns=self.webpackChunk_tanyoknits_interactive_patterns||[]).push([[461],{1153:function(t,n,e){e.d(n,{Z:function(){return o}});var a=e(2328),r=e(7574);function o(t){var n=t.needle,e=t.method,o=t.direction,s=t.coCount;return(0,r.jsx)(a.Z,{intro:"\ud83e\udea1 With a ".concat(n," needle").concat(null!=e?" using ".concat(e," method"):""),rows:[{text:"CO ".concat(s," ").concat("round"===o?"in the rnd":"flat")}],rowType:"CO",afterList:"round"===o?["Pm at the end to indicate BOR (middle back)"]:[]})}},3461:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var a=e(3028),r=e(5690),o=e(9012),s=e(1153),l=e(604),c=e(2328),i=e(7574);function h(t){var n=t.part,e=t.needle,a=t.rib,r=t.sts,o=t.length,s=t.rowType;return(0,i.jsx)(c.Z,{title:"".concat(n," ").concat(a[0],"x").concat(a[1]," ribbing"),intro:null!=e?"\ud83e\udea1 Change to needle size ".concat(e):"",rowType:s,startRowID:0,rows:[{text:"(k".concat(a[0],", p").concat(a[1],"), rep (-) to end (").concat(r/(a[0]+a[1])," times)")},{text:"as rnd 1"}],notes:"Work in ribbing for ".concat((0,l.YS)(o),", reset row count.")})}function m(t){var n=t.schema,e=t.measurement,c=t.centerChartStsCount,m=n.co+n.initialInc,u=(0,r.K)(n.co/2,m/2,{avoidEnds:!0,sts:"m1l-m1r",count:1,hasDoubleNest:!0}),d=Math.round(n.raglan.halfBody/2),f=Math.round(n.raglan.sleeve/2),g=n.raglanTable.filter((function(t){return t.row===n.shortRow.row+2}))[0].front,k=Math.round((g-c)/2),w=n.raglan.every4-n.raglan.incSkip;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{needle:"US 8 / 5mm",method:"Tubular CO",direction:"round",coCount:n.co}),(0,i.jsx)(h,{part:"Neck band",needle:"US 10 / 6mm",rib:[1,1],sts:n.co,length:e.neck_band_height}),(0,i.jsx)(l.Dv,{title:"Initial neckline increase",rows:[{text:"Inc ".concat(n.initialInc," sts: {").concat(u.sts.join(", "),"}, rep{-}"),notes:"total ".concat(m," sts")},{text:"\ud83e\udea1 Change to a US 10.75 / 7mm needle, pm for 4 raglan increase inc as foll while k all sts."}],afterList:["From the mBOR, pm A at ".concat(d," sts."),"From A, pm B at ".concat(n.raglan.sleeve," sts (mA-mB is right sleeve.)"),"From B, pm C at ".concat(n.raglan.halfBody," sts."),"From C, pm D at ".concat(n.raglan.sleeve," sts (mC-mD is left sleeve.)")],startRowID:0}),(0,i.jsx)(l.Dv,{title:"Short row (SR) tog with raglan inc",intro:"SR starts at rnd/row 3. It gradually lifts the back neck by making it taller than the front. SR is worked in St st back and forth (flat). While working on the RS, you also work raglan inc on the two points of each sleeve if your SR passes raglan markers. Pm for two SR start points",beforeList:["From A, pm R at ".concat(f," sts (mR is the SR start point on RS - right sleeve)"),"From C, pm W at ".concat(n.raglan.sleeve-f," (mW is the SR start point on WS - left sleeve)")],rows:[]}),(0,i.jsx)(l.Uo,(0,a.Z)((0,a.Z)({},n.shortRow),{},{incSkip:n.raglan.incSkip,sleeve:n.raglan.sleeve,halfBody:n.raglan.halfBody,raglanOffset:[2,1]})),(0,i.jsx)(l.Dv,{intro:"Pick up all w&t in the next rnd. Cont to work on raglan inc every 2 rows. Rm mR and mW.",startRowID:n.shortRow.row+2,rows:[{text:"k till 2 sts bef mA, RLI, k2, smA, k, LLI, k till bef mB, RLI, k1, smB, k2, LLI, k till 2 sts bef mC, RLI, k2, smC, k, LLI, k till bef mD, RLI, k1, smD, k2, LLI, k till BOR"},{text:"k all"}],notes:"Rep the raglan inc of the last two rows until row ".concat(2+2*n.raglan.every2)}),(0,i.jsx)(l.Dv,{title:"Chart B at the front center",intro:"Start to knit chart B at the center of A as you cont raglan inc. Pm at the beg and end of the chart.",beforeList:["From B, pm E at ".concat(k," sts (mE is the beg of chart A.)"),"From E, pm F at ".concat(c," sts (mF is the end of chart A.)")],startRowID:2+n.shortRow.row+2,rows:[{text:"Work same till mE, smE, work chart B, smF, cont"},{text:"k all"}]}),(0,i.jsx)(l.Dv,{intro:"Cont to work on raglan inc every 2 rows on the front side, and every 4 rows on the back side.",startRowID:2+2*n.raglan.every2,rows:[{text:"Work raglan inc all mA, mB, mC, and mD, work chart B at front center"},{text:"k all"},{text:"Work raglan inc only around mB and mC, work chart B at front center"},{text:"k all"}],notes:"Rep the last 4 rows until row ".concat(2+2*n.raglan.every2+4*(n.raglan.every4-w),".")}),w>0&&(0,i.jsx)(l.Dv,{intro:"Cont to work on raglan inc every 4 rows at all raglan points (total 8 sts inc'd).",startRowID:2+2*n.raglan.every2+4*(n.raglan.every4-w),rows:[{text:"Work raglan inc all mA, mB, mC, and mD, work chart B at front center"},{text:"k all"},{text:"k all"},{text:"k all"}],notes:"".concat(w>1?"Rep the last 4 rows until row ".concat(2+2*n.raglan.every2+4*n.raglan.every4,"."):""," Table below shows the sts count at the end of each rnd.")}),(0,i.jsx)(o.G,(0,a.Z)({direction:"round"},n.raglan))]})}},5690:function(t,n,e){e.d(n,{K:function(){return r}});var a=e(604);function r(t,n,e){var r=!0,o=!1,s=3===e.count?(0,a.v5)(t,n):(0,a.FV)(t,n),l=e.avoidEnds,c=e.sts,i=e.count,h=e.hasDoubleNest,m=Math.floor((s[0]-i)/2);0===m&&(r=!1),l&&(s[0]-=m);var u=s.map((function(e,a){var r=c.split("-");return 3===i&&a===s.length-1&&(n-t)%2!==0?"k".concat(e-2,", ").concat(r[2]):"k".concat(e-i,", ").concat(a<s.length/2?r[0]:r[1])}));l&&m>0&&u.push("k".concat(m));var d=(0,a.gM)(u),f=0,g=d.reduce((function(t,n,e){if(e<f)return t;var a=function t(n){for(var a=[d.slice(e,e+n)],r=e+n;r<=d.length-n&&JSON.stringify(a[0])===JSON.stringify(d.slice(r,r+n));r+=n)a.push(a[0]),o=!0;return a.length>1||n>d.length/2?a:t(n+1)}(2);if(a.length>1){var r=a[0];t.push("[".concat(r.join(", "),"] x ").concat(a.length)),f+=a.flat().length}else t.push(n),f++;return t}),[]);return{sts:h?g:d,avoidEndAvailable:r,doubleNestAvailable:o}}}}]);
//# sourceMappingURL=461.1db218b5.chunk.js.map