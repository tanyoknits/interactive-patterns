"use strict";(self.webpackChunk_tanyoknits_interactive_patterns=self.webpackChunk_tanyoknits_interactive_patterns||[]).push([[878],{878:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(5690),s=n(636),a=n(7574);function o(t){var e=t.schema,n=t.measurement,o=e.total.body-e.waistDec,c=(0,r.T)(e.total.body/2,o/2,{avoidEnds:!0,sts:"ssk-k2tog",count:2,hasDoubleNest:!0}),l=2+2*e.raglan.every2+4*e.raglan.every4;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Dv,{title:"Body & sleeves split",rowType:"Rnd ".concat(l+1," + CO"),rows:[{text:"k till mA, rm mA, slip sts to scrap yarn or stitch holder till mB, rm mB, CO ".concat(e.underarm,", k incl chart B till mC, \n          slip sts in scrap yarn or stitch holder till mD, CO ").concat(e.underarm,", k till BOR"),notes:"total ".concat(e.total.body," sts")}]}),(0,a.jsx)(s.Dv,{rowType:"Rnd",startRowID:l+1,rows:[{text:"k all incl chart B"}],notes:"Rep the last row till appx. ".concat((0,s.YS)(n.hem+.25)," shorter than the desired length.")}),(0,a.jsx)(s.Dv,{title:"Waistline dec",rowType:"Next rnd",rows:[{text:"{".concat(c.sts.join(", "),"}, rep{-}"),notes:"".concat(e.waistDec," sts dec'd, total ").concat(o," sts")},{text:"change to a smaller needle, k all"}]}),(0,a.jsx)(s.Dv,{title:"Hem ribbing",rowType:"Next rnd",rows:[{text:"(k1, p1), rep (-) to end (".concat(o/2," times)")},{text:"as rnd 1"}],notes:"Work in ribbing for ".concat((0,s.YS)(n.hem),". BO with Sewn-on BO is recommended.")})]})}},5690:function(t,e,n){n.d(e,{T:function(){return s}});var r=n(636);function s(t,e,n){var s=!0,a=!1,o=3===n.count?(0,r.v5)(t,e):(0,r.FV)(t,e),c=n.avoidEnds,l=n.sts,i=n.count,u=n.hasDoubleNest,h=Math.floor((o[0]-i)/2);0===h&&(s=!1),c&&(o[0]-=h);var d=o.map((function(n,r){var s=l.split("-");return 3===i&&r===o.length-1&&(e-t)%2!==0?"k".concat(n-2,", ").concat(s[2]):"k".concat(n-i,", ").concat(r<o.length/2?s[0]:s[1])}));c&&h>0&&d.push("k".concat(h));var p=(0,r.sA)(d),v=0,m=p.reduce((function(t,e,n){if(n<v)return t;var r=function t(e){for(var r=[p.slice(n,n+e)],s=n+e;s<=p.length-e&&JSON.stringify(r[0])===JSON.stringify(p.slice(s,s+e));s+=e)r.push(r[0]),a=!0;return r.length>1||e>p.length/2?r:t(e+1)}(2);if(r.length>1){var s=r[0];t.push("[".concat(s.join(", "),"] x ").concat(r.length)),v+=r.flat().length}else t.push(e),v++;return t}),[]);return{sts:u?m:p,avoidEndAvailable:s,doubleNestAvailable:a}}}}]);
//# sourceMappingURL=878.34c408d0.chunk.js.map