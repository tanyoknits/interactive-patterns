"use strict";(self.webpackChunk_tanyoknits_interactive_patterns=self.webpackChunk_tanyoknits_interactive_patterns||[]).push([[878],{878:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(5690),a=n(8269),s=n(7574);function o(t){var e=t.schema,n=t.measurement,o=e.total.body-e.waistDec,c=(0,r.K)(e.total.body/2,o/2,{avoidEnds:!0,sts:"ssk-k2tog",count:2,hasDoubleNest:!0}),l=2+2*e.raglan.every2+4*e.raglan.every4;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Dv,{title:"Body & sleeves split",rowType:"Rnd ".concat(l+1," + CO"),rows:[{text:"k till mA, rm mA, slip sts to scrap yarn or stitch holder till mB, rm mB, CO ".concat(e.underarm,", k incl chart B till mC, \n          slip sts in scrap yarn or stitch holder till mD, CO ").concat(e.underarm,", k till BOR"),notes:"total ".concat(e.total.body," sts")}],afterList:["In the next rnd, k all incl chart B","Rep the last row till appx. ".concat((0,a.YS)(n.hem+.25)," shorter than the desired length.")]}),(0,s.jsx)(a.Dv,{title:"Waistline dec",rowType:"Next rnd",rows:[{text:"{".concat(c.sts.join(", "),"}, rep{-}"),notes:"".concat(e.waistDec," sts dec'd, total ").concat(o," sts")},{text:"change to a smaller needle, k all"}]}),(0,s.jsx)(a.Dv,{title:"Hem ribbing",rowType:"Next rnd",rows:[{text:"(k1, p1), rep (-) to end (".concat(o/2," times)")},{text:"as rnd 1"}],notes:"Work in ribbing for ".concat((0,a.YS)(n.hem),". BO with Sewn-on BO is recommended.")})]})}},5690:function(t,e,n){n.d(e,{K:function(){return a}});var r=n(8269);function a(t,e,n){var a=!0,s=!1,o=3===n.count?(0,r.v5)(t,e):(0,r.FV)(t,e),c=n.avoidEnds,l=n.sts,i=n.count,h=n.hasDoubleNest,u=Math.floor((o[0]-i)/2);0===u&&(a=!1),c&&(o[0]-=u);var d=o.map((function(n,r){var a=l.split("-");return 3===i&&r===o.length-1&&(e-t)%2!==0?"k".concat(n-2,", ").concat(a[2]):"k".concat(n-i,", ").concat(r<o.length/2?a[0]:a[1])}));c&&u>0&&d.push("k".concat(u));var p=(0,r.gM)(d),v=0,m=p.reduce((function(t,e,n){if(n<v)return t;var r=function t(e){for(var r=[p.slice(n,n+e)],a=n+e;a<=p.length-e&&JSON.stringify(r[0])===JSON.stringify(p.slice(a,a+e));a+=e)r.push(r[0]),s=!0;return r.length>1||e>p.length/2?r:t(e+1)}(2);if(r.length>1){var a=r[0];t.push("[".concat(a.join(", "),"] x ").concat(r.length)),v+=r.flat().length}else t.push(e),v++;return t}),[]);return{sts:h?m:p,avoidEndAvailable:a,doubleNestAvailable:s}}}}]);
//# sourceMappingURL=878.564b368b.chunk.js.map