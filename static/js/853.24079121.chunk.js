"use strict";(self.webpackChunk_tanyoknits_interactive_patterns=self.webpackChunk_tanyoknits_interactive_patterns||[]).push([[853],{8853:function(t,e,r){r.r(e),r.d(e,{default:function(){return a}});var n=r(3060),s=r(5690),o=r(7574);function a(t){for(var e=t.schema,r=t.measurement,a=t.centerChart,c=e.total.sleeve,l=e.sleeve,i=l.decRows,u=l.finalDec,h=u.row-a.row,f=c,d=0;d<i.length;d++)i[d]+1<=h&&(f-=2);var v=Math.floor((f-a.sts)/2),p=(0,s.K)(f,f-u.sts,{avoidEnds:!0,sts:"k2tog-ssk",count:2,hasDoubleNest:!0});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Dv,{intro:"\ud83e\udea1 Move the sts in scrap yarn or stitch holder to US 11 / 7mm needle.",rowType:"Pick up",rows:[{text:"underarm ".concat(e.underarm," sts"),notes:"sleeve total ".concat(c," sts")}],afterList:["Pm after ".concat(Math.round(e.underarm/2)," sts - this is BOR of sleeve. Rnd 1 start here.")],notes:"Following row numbers are based on the sleeve length from underarm, ".concat((0,n.YS)(r.sleeve_length_from_underarm),".")}),(0,o.jsx)(n.Dv,{rowType:"Next rnd",rows:[{text:"k".concat(c)}],notes:"Rep the prev row to approx ".concat((0,n.YS)(2),".")}),(0,o.jsx)(n.Dv,{title:"Taper sleeve",intro:"Dec 1 at each side of marker across two rnds",rowType:"Rnd",startRowID:i[0]-1,rows:[{text:"k till 2 sts bef marker, k2tog"},{text:"k2, ssk, k till marker",notes:"2 sts dec, ".concat(c-2," sts remain")}],notes:"rep at row ".concat(i.slice(1).map((function(t){return"".concat(t,"/").concat(t+1)})).join(", ")," (").concat(c-2*i.length," sts remain)")}),(0,o.jsx)(n.Dv,{title:"Chart A before cuff",intro:"While you work taper sleeve dec, start chart A at row ".concat(h,"."),beforeList:["After dec, ".concat(f," sts left."),"From BOR, pm A at ".concat(v," sts (mA is the beg of chart A.)"),"From A, pm B at ".concat(a.sts," sts (mB is the end of chart A.)")],rowType:"Rnd",startRowID:h-1,rows:[{text:"k till mA, smA, work chart B, smB, k till BOR"}]}),(0,o.jsx)(n.Dv,{title:"Final decrease",rowType:"Rnd",startRowID:u.row-1,rows:[{text:p.sts.join(", "),notes:"".concat(u.sts," dec'd, ").concat(f-u.sts," sts left")},{text:"Change to smaller needle, k all"}]}),(0,o.jsx)(n.Dv,{title:"Hem 1x1 ribbing",rowType:"Rnd",startRowID:u.row+1,rows:[{text:"(k1, p1) repeat (-) till BOR"}],notes:"Rep the prev row to approx ".concat((0,n.YS)(r.cuff_length),".")})]})}},5690:function(t,e,r){r.d(e,{K:function(){return s}});var n=r(3060);function s(t,e,r){var s=!0,o=!1,a=3===r.count?(0,n.v5)(t,e):(0,n.FV)(t,e),c=r.avoidEnds,l=r.sts,i=r.count,u=r.hasDoubleNest,h=Math.floor((a[0]-i)/2);0===h&&(s=!1),c&&(a[0]-=h);var f=a.map((function(r,n){var s=l.split("-");return 3===i&&n===a.length-1&&(e-t)%2!==0?"k".concat(r-2,", ").concat(s[2]):"k".concat(r-i,", ").concat(n<a.length/2?s[0]:s[1])}));c&&h>0&&f.push("k".concat(h));var d=(0,n.gM)(f),v=0,p=d.reduce((function(t,e,r){if(r<v)return t;var n=function t(e){for(var n=[d.slice(r,r+e)],s=r+e;s<=d.length-e&&JSON.stringify(n[0])===JSON.stringify(d.slice(s,s+e));s+=e)n.push(n[0]),o=!0;return n.length>1||e>d.length/2?n:t(e+1)}(2);if(n.length>1){var s=n[0];t.push("[".concat(s.join(", "),"] x ").concat(n.length)),v+=n.flat().length}else t.push(e),v++;return t}),[]);return{sts:u?p:d,avoidEndAvailable:s,doubleNestAvailable:o}}}}]);
//# sourceMappingURL=853.24079121.chunk.js.map