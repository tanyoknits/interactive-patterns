"use strict";(self.webpackChunk_tanyoknits_interactive_patterns=self.webpackChunk_tanyoknits_interactive_patterns||[]).push([[204,878,853,461,876,272],{1153:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(2328),o=n(7574);function s(t){var e=t.needle,n=t.method,s=t.direction,a=t.coCount;return(0,o.jsx)(r.Z,{intro:"\ud83e\udea1 With a ".concat(e," needle").concat(null!=n?" using ".concat(n," method"):""),rows:[{text:"CO ".concat(a," ").concat("round"===s?"in the rnd":"flat")}],rowType:"CO",afterList:"round"===s?["Pm at the end to indicate BOR (middle back)"]:[]})}},24:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(4394),o=n(7141),s=n(7574);function a(t){var e=t.isRow,n=void 0!==e&&e;return(0,s.jsxs)(r.b,{width:"fit-content",children:[(0,s.jsx)(o.z,{}),"Chart is interactive - click a ",n?"row":"stitch group"," to see the corresponding written instruction."]})}},1762:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(3028),o=n(6234),s=n(6596),a=n(9418),i=n(4485),l=n(969),c=n(604),d=n(2289),u=n(24),h=n(7574);function m(t){var e,n=t.intro,m=t.motifBySize,f=(t.showReflected,(0,l.useState)(0)),v=(0,o.Z)(f,2),w=v[0],p=v[1],g=null!==(e=m[w])&&void 0!==e?e:m[0],k=g.motif,x=g.direction,b=(0,c.sy)(k.chart);return(0,h.jsxs)(s.k,{direction:"column",gap:6,children:[null!=n&&(0,h.jsx)(a.x,{children:n}),(0,h.jsxs)(i.g,{spacing:6,align:"left",children:[(0,h.jsxs)(s.k,{gap:6,alignItems:"center",flexWrap:"wrap",children:[m.length>1&&(0,h.jsx)(d.Z,{sizes:m.map((function(t){return t.sizes.join(", ")})),selectedSize:w,onChange:function(t){return p(t)}}),(0,h.jsx)(u.Z,{})]}),(0,h.jsx)(c.Yu,(0,r.Z)((0,r.Z)({},k),{},{direction:x})),(0,h.jsx)(c.SB,{stitches:b,hasWS:!0})]})]})}},4118:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(6596),o=n(7574);function s(t){var e=t.children;return(0,o.jsx)(r.k,{direction:"column",gap:8,mb:2,pt:2,children:e})}},878:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var r=n(5690),o=n(604),s=n(7574);function a(t){var e=t.schema,n=t.measurement,a=e.total.body-e.waistDec,i=(0,r.K)(e.total.body/2,a/2,{avoidEnds:!0,sts:"ssk-k2tog",count:2,hasDoubleNest:!0}),l=2+2*e.raglan.every2+4*e.raglan.every4;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Dv,{title:"Body & sleeves split",rowType:"Rnd ".concat(l+1," + CO"),rows:[{text:"k till mA, rm mA, slip sts to scrap yarn or stitch holder till mB, rm mB, CO ".concat(e.underarm,", k incl chart B till mC, \n          slip sts in scrap yarn or stitch holder till mD, CO ").concat(e.underarm,", k till BOR"),notes:"total ".concat(e.total.body," sts")}],afterList:["In the next rnd, k all incl chart B","Rep the last row till appx. ".concat((0,o.YS)(n.hem+.25)," shorter than the desired length.")]}),(0,s.jsx)(o.Dv,{title:"Waistline dec",rowType:"Next rnd",rows:[{text:"{".concat(i.sts.join(", "),"}, rep{-}"),notes:"".concat(e.waistDec," sts dec'd, total ").concat(a," sts")},{text:"change to a smaller needle, k all"}]}),(0,s.jsx)(o.Dv,{title:"Hem ribbing",rowType:"Next rnd",rows:[{text:"(k1, p1), rep (-) to end (".concat(a/2," times)")},{text:"as rnd 1"}],notes:"Work in ribbing for ".concat((0,o.YS)(n.hem),". BO with Sewn-on BO is recommended.")})]})}},4204:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(604),o=n(5876),s=n(1978),a=n(9752),i=n(3461),l=n(878),c=n(8853),d=n(4118),u=n(7574);function h(t){var e=t.menu,n=t.size,h=null;if(0===e)h=(0,u.jsx)(r.wp,{list:o.overview});else if(1===e){var m=a.motifBBySize.filter((function(t){return t.sizes.includes(s.sizes[n])}))[0].motif;h=(0,u.jsx)(i.default,{schema:s.schemaBySize[n],measurement:s.measurements[n],centerChartStsCount:null===m||void 0===m?void 0:m.stsCount})}else if(2===e)h=(0,u.jsx)(l.default,{schema:s.schemaBySize[n],measurement:s.measurements[n]});else{var f=a.motifABySize.filter((function(t){return t.sizes.includes(s.sizes[n])}))[0].motif;h=(0,u.jsx)(c.default,{schema:s.schemaBySize[n],measurement:s.measurements[n],centerChart:{sts:null===f||void 0===f?void 0:f.stsCount,row:null===f||void 0===f?void 0:f.chart.length}})}return(0,u.jsx)(d.Z,{children:h})}},8853:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var r=n(604),o=n(5690),s=n(7574);function a(t){for(var e=t.schema,n=t.measurement,a=t.centerChart,i=e.total.sleeve,l=e.sleeve,c=l.decRows,d=l.finalDec,u=d.row-a.row,h=i,m=0;m<c.length;m++)c[m]+1<=u&&(h-=2);var f=Math.floor((h-a.sts)/2),v=(0,o.K)(h,h-d.sts,{avoidEnds:!0,sts:"k2tog-ssk",count:2,hasDoubleNest:!0});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Dv,{intro:"\ud83e\udea1 Move the sts in scrap yarn or stitch holder to US 11 / 7mm needle.",rowType:"Pick up",rows:[{text:"underarm ".concat(e.underarm," sts"),notes:"sleeve total ".concat(i," sts")}],afterList:["Pm after ".concat(Math.round(e.underarm/2)," sts - this is BOR of sleeve. Rnd 1 start here.")],notes:"Following row numbers are based on the sleeve length from underarm, ".concat((0,r.YS)(n.sleeve_length_from_underarm),".")}),(0,s.jsx)(r.Dv,{rowType:"Next rnd",rows:[{text:"k".concat(i)}],notes:"Rep the prev row to approx ".concat((0,r.YS)(2),".")}),(0,s.jsx)(r.Dv,{title:"Taper sleeve",intro:"Dec 1 at each side of marker across two rnds",rowType:"Rnd",startRowID:c[0]-1,rows:[{text:"k till 2 sts bef marker, k2tog"},{text:"k2, ssk, k till marker",notes:"2 sts dec, ".concat(i-2," sts remain")}],notes:"rep at row ".concat(c.slice(1).map((function(t){return"".concat(t,"/").concat(t+1)})).join(", ")," (").concat(i-2*c.length," sts remain)")}),(0,s.jsx)(r.Dv,{title:"Chart A before cuff",intro:"While you work taper sleeve dec, start chart A at row ".concat(u,"."),beforeList:["After dec, ".concat(h," sts left."),"From BOR, pm A at ".concat(f," sts (mA is the beg of chart A.)"),"From A, pm B at ".concat(a.sts," sts (mB is the end of chart A.)")],rowType:"Rnd",startRowID:u-1,rows:[{text:"k till mA, smA, work chart B, smB, k till BOR"}]}),(0,s.jsx)(r.Dv,{title:"Final decrease",rowType:"Rnd",startRowID:d.row-1,rows:[{text:v.sts.join(", "),notes:"".concat(d.sts," dec'd, ").concat(h-d.sts," sts left")},{text:"Change to smaller needle, k all"}]}),(0,s.jsx)(r.Dv,{title:"Hem 1x1 ribbing",rowType:"Rnd",startRowID:d.row+1,rows:[{text:"(k1, p1) repeat (-) till BOR"}],notes:"Rep the prev row to approx ".concat((0,r.YS)(n.cuff_length),".")})]})}},3461:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var r=n(3028),o=n(5690),s=n(9012),a=n(1153),i=n(604),l=n(2328),c=n(7574);function d(t){var e=t.part,n=t.needle,r=t.rib,o=t.sts,s=t.length,a=t.rowType;return(0,c.jsx)(l.Z,{title:"".concat(e," ").concat(r[0],"x").concat(r[1]," ribbing"),intro:null!=n?"\ud83e\udea1 Change to needle size ".concat(n):"",rowType:a,startRowID:0,rows:[{text:"(k".concat(r[0],", p").concat(r[1],"), rep (-) to end (").concat(o/(r[0]+r[1])," times)")},{text:"as rnd 1"}],notes:"Work in ribbing for ".concat((0,i.YS)(s),", reset row count.")})}function u(t){var e=t.schema,n=t.measurement,l=t.centerChartStsCount,u=e.co+e.initialInc,h=(0,o.K)(e.co/2,u/2,{avoidEnds:!0,sts:"m1l-m1r",count:1,hasDoubleNest:!0}),m=Math.round(e.raglan.halfBody/2),f=Math.round(e.raglan.sleeve/2),v=e.raglanTable.filter((function(t){return t.row===e.shortRow.row+2}))[0].front,w=Math.round((v-l)/2),p=e.raglan.every4-e.raglan.incSkip;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{needle:"US 8 / 5mm",method:"Tubular CO",direction:"round",coCount:e.co}),(0,c.jsx)(d,{part:"Neck band",needle:"US 10 / 6mm",rib:[1,1],sts:e.co,length:n.neck_band_height}),(0,c.jsx)(i.Dv,{title:"Initial neckline increase",rows:[{text:"Inc ".concat(e.initialInc," sts: {").concat(h.sts.join(", "),"}, rep{-}"),notes:"total ".concat(u," sts")},{text:"\ud83e\udea1 Change to a US 10.75 / 7mm needle, pm for 4 raglan increase inc as foll while k all sts."}],afterList:["From the mBOR, pm A at ".concat(m," sts."),"From A, pm B at ".concat(e.raglan.sleeve," sts (mA-mB is right sleeve.)"),"From B, pm C at ".concat(e.raglan.halfBody," sts."),"From C, pm D at ".concat(e.raglan.sleeve," sts (mC-mD is left sleeve.)")],startRowID:0}),(0,c.jsx)(i.Dv,{title:"Short row (SR) tog with raglan inc",intro:"SR starts at rnd/row 3. It gradually lifts the back neck by making it taller than the front. SR is worked in St st back and forth (flat). While working on the RS, you also work raglan inc on the two points of each sleeve if your SR passes raglan markers. Pm for two SR start points",beforeList:["From A, pm R at ".concat(f," sts (mR is the SR start point on RS - right sleeve)"),"From C, pm W at ".concat(e.raglan.sleeve-f," (mW is the SR start point on WS - left sleeve)")],rows:[]}),(0,c.jsx)(i.Uo,(0,r.Z)((0,r.Z)({},e.shortRow),{},{incSkip:e.raglan.incSkip,sleeve:e.raglan.sleeve,halfBody:e.raglan.halfBody,raglanOffset:[2,1]})),(0,c.jsx)(i.Dv,{intro:"Pick up all w&t in the next rnd. Cont to work on raglan inc every 2 rows. Rm mR and mW.",startRowID:e.shortRow.row+2,rows:[{text:"k till 2 sts bef mA, RLI, k2, smA, k, LLI, k till bef mB, RLI, k1, smB, k2, LLI, k till 2 sts bef mC, RLI, k2, smC, k, LLI, k till bef mD, RLI, k1, smD, k2, LLI, k till BOR"},{text:"k all"}],notes:"Rep the raglan inc of the last two rows until row ".concat(2+2*e.raglan.every2)}),(0,c.jsx)(i.Dv,{title:"Chart B at the front center",intro:"Start to knit chart B at the center of A as you cont raglan inc. Pm at the beg and end of the chart.",beforeList:["From B, pm E at ".concat(w," sts (mE is the beg of chart A.)"),"From E, pm F at ".concat(l," sts (mF is the end of chart A.)")],startRowID:2+e.shortRow.row+2,rows:[{text:"Work same till mE, smE, work chart B, smF, cont"},{text:"k all"}]}),(0,c.jsx)(i.Dv,{intro:"Cont to work on raglan inc every 2 rows on the front side, and every 4 rows on the back side.",startRowID:2+2*e.raglan.every2,rows:[{text:"Work raglan inc all mA, mB, mC, and mD, work chart B at front center"},{text:"k all"},{text:"Work raglan inc only around mB and mC, work chart B at front center"},{text:"k all"}],notes:"Rep the last 4 rows until row ".concat(2+2*e.raglan.every2+4*(e.raglan.every4-p),".")}),p>0&&(0,c.jsx)(i.Dv,{intro:"Cont to work on raglan inc every 4 rows at all raglan points (total 8 sts inc'd).",startRowID:2+2*e.raglan.every2+4*(e.raglan.every4-p),rows:[{text:"Work raglan inc all mA, mB, mC, and mD, work chart B at front center"},{text:"k all"},{text:"k all"},{text:"k all"}],notes:"".concat(p>1?"Rep the last 4 rows until row ".concat(2+2*e.raglan.every2+4*e.raglan.every4,"."):""," Table below shows the sts count at the end of each rnd.")}),(0,c.jsx)(s.G,(0,r.Z)({direction:"round"},e.raglan))]})}},5876:function(t,e,n){n.r(e),n.d(e,{overview:function(){return o},patternInfo:function(){return r}});var r={pageInfo:[{id:"overview",label:"Overview",isLinear:!0},{id:"yoke",label:"Yoke",isLinear:!0},{id:"body",label:"Body",isLinear:!0},{id:"sleeve",label:"Sleeve"}],sizes:n(1978).sizes},o=["Starting from the back center, work from the top down in the round.","After neckband ribbing, short row shaping is worked as you increase stitches in raglan yoke.","As you keep working on raglan yoke, start to work Chart A in front.","After you finish the raglan increase, separate body and sleeves, put sleeve stitches in scrap yarn or stitch holder.","Work the body in the round as you keep working Chart A. Work the sleeves, add Chart B right before each cuff."]},9752:function(t,e,n){n.r(e),n.d(e,{motifABySize:function(){return C},motifBBySize:function(){return S}});var r,o,s,a,i,l,c,d,u,h,m=n(3028),f=n(604),v=n(1978),w=n(1762),p=n(7574),g=f.DF.c2l,k=f.DF.m1l,x=f.DF.lli,b=f.DF.llip,y=[(0,f.JR)(5,!0),(0,f.JR)(4,!0),(0,f.JR)(3,!0),(0,f.JR)(2,!0)],R={stsCount:y[1].stsCount,chart:(0,f.A_)(y.slice(1,4)),glyphSize:"M"},B={stsCount:y[0].stsCount,chart:(0,f.A_)(y.slice(0,3)),glyphSize:"M"},C=[{sizes:v.sizes.slice(0,6),motif:(0,m.Z)((0,m.Z)({},y[3]),{},{title:void 0})},{sizes:v.sizes.slice(6),motif:(0,m.Z)((0,m.Z)({},y[2]),{},{title:void 0})}],S=[{sizes:v.sizes.slice(0,6),motif:R},{sizes:v.sizes.slice(6),motif:B}],j=[{title:"Tubular CO",desc:"Used for stretch neckline cast on",video:null===(r=f.c9["Tubular CO"])||void 0===r?void 0:r.videos[0].url},{title:"m1l & m1r",desc:"Make 1 left/right, used for neckline increase",video:null===(o=k.videos)||void 0===o?void 0:o[0].url},{title:"w&t",desc:"Wrap & turn; short row technique, my preference is German short row. ",video:null===(s=f.c9["Wrap & Turn"])||void 0===s||null===(a=s.videos)||void 0===a?void 0:a[0].url},{title:"LLI & RLI",desc:"Lifted increase to the left/right, used for raglan increase",video:null===(i=x.videos)||void 0===i?void 0:i[0].url},{title:"RLI-P & LLI-P",desc:"Lifted increase to the right/left side on the wrong side, used for raglan increase on the wrong side (odd number of short rows)",video:null===(l=b.videos)||void 0===l?void 0:l[0].url},{title:"LT & RT",desc:"Left/right twist, basically 2-sts cable done without cable needle",video:null===(c=g.videos)||void 0===c?void 0:c[0].url},{title:"Cable CO",desc:"Recommended for CO while body and sleeve are split",video:null===(d=f.c9["Underarm CO"])||void 0===d?void 0:d.videos[0].url},{title:"Underarm pick up",desc:"Gapless underarm pick up, one of the useful tips is:",video:null===(u=f.c9["Underarm pick up"])||void 0===u?void 0:u.videos[0].url},{title:"Sewn on BO",desc:"Or tubular BO",video:null===(h=f.c9["Tubular BO"])||void 0===h?void 0:h.videos[0].url}],D=[{id:"chart-A",label:"Chart A",component:(0,p.jsx)(w.Z,{intro:"Following stitch pattern is incorporated at the center of sleeve end, right before cuff.",motifBySize:C})},{id:"chart-B",label:"Chart B",component:(0,p.jsx)(w.Z,{intro:"Following stitch pattern is incorporated at the center of front, after short row is complete. Chart B is a stacked variation of Chart A in three different sizes.",motifBySize:S})},{id:"techniques",label:"Techniques",component:(0,p.jsx)(f.k2,{list:j})},{id:"abbr",label:"Abbreviations",component:(0,p.jsx)(f.Bv,{list:["bef","BO","beg","BOR","CO","dec","foll","inc","pm*","sm*","rm*","rep","rnd","SR","tog","WS","RS","cont","incl","appx"]})}];e.default=D},5690:function(t,e,n){n.d(e,{K:function(){return o}});var r=n(604);function o(t,e,n){var o=!0,s=!1,a=3===n.count?(0,r.v5)(t,e):(0,r.FV)(t,e),i=n.avoidEnds,l=n.sts,c=n.count,d=n.hasDoubleNest,u=Math.floor((a[0]-c)/2);0===u&&(o=!1),i&&(a[0]-=u);var h=a.map((function(n,r){var o=l.split("-");return 3===c&&r===a.length-1&&(e-t)%2!==0?"k".concat(n-2,", ").concat(o[2]):"k".concat(n-c,", ").concat(r<a.length/2?o[0]:o[1])}));i&&u>0&&h.push("k".concat(u));var m=(0,r.gM)(h),f=0,v=m.reduce((function(t,e,n){if(n<f)return t;var r=function t(e){for(var r=[m.slice(n,n+e)],o=n+e;o<=m.length-e&&JSON.stringify(r[0])===JSON.stringify(m.slice(o,o+e));o+=e)r.push(r[0]),s=!0;return r.length>1||e>m.length/2?r:t(e+1)}(2);if(r.length>1){var o=r[0];t.push("[".concat(o.join(", "),"] x ").concat(r.length)),f+=r.flat().length}else t.push(e),f++;return t}),[]);return{sts:d?v:m,avoidEndAvailable:o,doubleNestAvailable:s}}}}]);
//# sourceMappingURL=204.1c5eadcc.chunk.js.map