"use strict";(self.webpackChunk_tanyoknits_interactive_patterns=self.webpackChunk_tanyoknits_interactive_patterns||[]).push([[556,418,796,660],{24:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4394),o=n(7141),a=n(7574);function c(e){var t=e.isRow,n=void 0!==t&&t;return(0,a.jsxs)(r.b,{width:"fit-content",children:[(0,a.jsx)(o.z,{}),"Chart is interactive - click a ",n?"row":"stitch group"," to see the corresponding written instruction."]})}},1762:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(3028),o=n(6234),a=n(6596),c=n(9418),i=n(4485),s=n(969),l=n(604),u=n(2289),f=n(24),d=n(7574);function h(e){var t,n=e.intro,h=e.motifBySize,v=(e.showReflected,(0,s.useState)(0)),m=(0,o.Z)(v,2),S=m[0],p=m[1],b=null!==(t=h[S])&&void 0!==t?t:h[0],k=b.motif,g=b.direction,D=(0,l.sy)(k.chart);return(0,d.jsxs)(a.k,{direction:"column",gap:6,children:[null!=n&&(0,d.jsx)(c.x,{children:n}),(0,d.jsxs)(i.g,{spacing:6,align:"left",children:[(0,d.jsxs)(a.k,{gap:6,alignItems:"center",flexWrap:"wrap",children:[h.length>1&&(0,d.jsx)(u.Z,{sizes:h.map((function(e){return e.sizes.join(", ")})),selectedSize:S,onChange:function(e){return p(e)}}),(0,d.jsx)(f.Z,{})]}),(0,d.jsx)(l.Yu,(0,r.Z)((0,r.Z)({},k),{},{direction:g})),(0,d.jsx)(l.SB,{stitches:D,hasWS:!0})]})]})}},9441:function(e,t,n){n.d(t,{KB:function(){return w},Ps:function(){return g},Qi:function(){return k},Y2:function(){return D},fy:function(){return y}});var r=n(3028),o=n(8079),a=n(604),c=n(7236),i=n(578),s=a.DF.k,l=a.DF.rli,u=a.DF.lli,f=a.DF.m1r,d=a.DF.m1l,h=a.DF.sr_rs,v=a.DF.sr_ws,m=a.DF.empty,S=a.DF.koco,p=a.DF.k2tog,b=a.DF.ssk,k=["After CO, starting from the front left neck, work from the top down flat.","Short row shaping is worked as you increase stitches in raglan yoke.","As you keep working on raglan yoke, incorporate stitch patterns","After you finish the raglan increase, separate body and sleeves, put sleeve stitches in scrap yarn or stitch holder.","Work the body flat as you keep working stitch patterns. Work the sleeves before each cuff.","Work button band along the two sides of front and neck, add button holes on the front right as you go.","Sew buttons on the other left side of button band."];function g(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1.2,c=e/4,s=t/4,l=n.neck_circumference*c,u=n.under_arm_circumference*c,f=n.underarm*c,d=u-f,h=n.bust_circumference*c-2*f,v=n.yoke_length*s,m=2*d+h,S=(0,a.Qd)(d),p=(0,a.Qd)(h),b=(0,a.Qd)((m-l)/8),k={sleeve:(0,a.ZD)(S-2*b),back:(0,a.ZD)((p-4*b)/2),frontOneSide:2},g=2*k.sleeve+k.back+2*k.frontOneSide,D=Math.round((m-l-2*v)/4),y=b-D,w=(0,a.ZD)(n.neck_depth*s/2),_={every2Rows:D,every4Rows:y,frontIncSkip:w},Z=(0,a.Qd)(n.neck_band_height*c)-2,R=(0,a.Qd)(k.back/2)-(0,a.Qd)(Z/2),C=1+2*D+4*y,j=Math.ceil(C/4)-w/2,x=R-j,z=k.back+2*b,O=k.frontOneSide+j+b,B={sleeve:k.sleeve+2*b,back:z,frontOneSide:O,body:z+2*O,underarm:(0,a.ZD)(f),sleeveAdj:r},Q=B.body+2*B.underarm-2*r,A={bodyBeforeVInc:Q,sleeve:B.sleeve+B.underarm+r,body:Q+2*x},F=1+2*_.every2Rows,W=F+4*_.every4Rows,I=W+2,E=n.hem*s,L=(0,a.ZD)(n.total_length*s-E)-1,M=(0,a.Qd)(n.cuff_length*s),N=(0,a.ZD)(n.wrist_circumference*c),T=(0,a.Qd)(2*s),Y=(0,a.Qd)(n.sleeve_length_from_underarm*s),q=(0,a.Qd)(1.4*N),H=Y-M-T-2,P=(0,a.ZD)(A.sleeve-q)/2,G=(0,i.AZ)(H,P),K=A.sleeve-2*P-N,U=Y-M-2,V=U+2+(0,a.Qd)(1.2*M);return{co:g,start:k,raglan:_,vNeck:{every4RowWithRaglan:j,every4RowAfterRaglan:x},yokeSplit:B,total:A,rows:{every2RowIncStart:1,every4RowIncStart:F,split:W,afterRaglanIncStart:I,lastNeckInc:I+4*x-2,hemDecStart:L,bo:L+(0,a.Qd)(E*o)},arm:{cuffSts:N,decOffset:T,decRows:G,cuffDecRow:U,cuffDecSts:K,cuffBO:V},totalSts:0}}function D(e,t,n,i,S){for(var p=e.baseChart,b=t.baseChart,k=n.baseChart,g=(0,o.Z)(i.baseChart.map((function(e){return(0,o.Z)(e)}))),D=(0,o.Z)(i.baseChart.map((function(e){return(0,o.Z)(e)}))),y=S.start,w=S.raglan,_=S.vNeck,Z=S.yokeSplit,R=y.sleeve,C=_.every4RowWithRaglan,j=_.every4RowAfterRaglan,x=w.every2Rows,z=w.every4Rows,O=w.frontIncSkip,B=Z.frontOneSide+j,Q=C+j,A=x+z,F=0;F<2*O;F++)(0,a.SD)(p[F],0,B),(0,a.SD)(b[F],0,B),(0,a.SD)(g[F],0,A),(0,a.SD)(D[F],null,A),0===F&&(0,a.SD)(p[F],Q,2,s),F===2*O-2&&(0,a.SD)(b[F],B-Q-2,2,s),F===2*O-1&&((0,a.SD)(p[F],Q,2,s),(0,a.SD)(b[F],B-Q-2,2,s));(0,c.s)(R,2*O).slice(0,O-1).forEach((function(e,t){(0,a.SD)(g[2*t+1],A,e,[].concat((0,o.Z)(Array(e-1).fill(m)),[h])),(0,a.SD)(g[2*t+2],A,e),(0,a.SD)(D[2*t],null,A+e,[v].concat((0,o.Z)(Array(e-1).fill(m)))),(0,a.SD)(D[2*t+1],null,A+e)}));for(var W=0;W<Q;W++){var I=2*O+4*W,E=Q-W-1,L=Array(E).fill(m),M=[s,s];if(null==p[I])break;(0,a.SD)(p[I],0,E+4,[].concat((0,o.Z)(L),[s,f],M)),(0,a.SD)(b[I],null,E+4,[].concat(M,[d,s],(0,o.Z)(L)));for(var N=1;N<4;N++){var T=p[I+N],Y=b[I+N];if(null==T||null==Y)break;(0,a.SD)(T,0,E+2,[].concat((0,o.Z)(L),M)),(0,a.SD)(Y,null,E+2,[].concat(M,(0,o.Z)(L)))}}function q(e,t,n,r,c){for(var i=0;i<t;i++)for(var f=r+i*e,d=n-i-1,h=Array(d).fill(m),v=0;v<e;v++){var S=p[f+v],y=b[f+v],w=g[f+v],_=D[f+v],Z=k[f+v],R="front"===c?[S,y,w,_]:[Z,Z,_,w];0===v?((0,a.SD)(R[0],null,d+2,[l,s].concat((0,o.Z)(h))),(0,a.SD)(R[1],0,d+2,[].concat((0,o.Z)(h),[s,u])),(0,a.SD)(R[2],0,d+2,[].concat((0,o.Z)(h),[s,u])),(0,a.SD)(R[3],null,d+2,[l,s].concat((0,o.Z)(h)))):((0,a.SD)(R[0],null,d+1,[s].concat((0,o.Z)(h))),(0,a.SD)(R[1],0,d+1,[].concat((0,o.Z)(h),[s])),(0,a.SD)(R[2],0,d+1,[].concat((0,o.Z)(h),[s])),(0,a.SD)(R[3],null,d+1,[s].concat((0,o.Z)(h))))}}return q(2,x+O,A,2*O,"front"),q(4,z-O,A-x-O,2*O+2*(x+O),"front"),q(2,x,A,0,"back"),q(4,z,A-x,2*x,"back"),[e,(0,r.Z)((0,r.Z)({},i),{},{baseChart:g}),n,(0,r.Z)((0,r.Z)({},i),{},{baseChart:D}),t]}function y(e,t,n,r){var o=t.baseChart[0];return(0,a.SD)(o,0,r,S),(0,a.SD)(o,null,r,S),(0,a.IQ)([e,t,n])}function w(e,t){var n=t.rows.split,c=t.arm,i=c.cuffDecRow,l=c.decRows,u=c.cuffSts,f=e.baseChart.slice(n,n+i);l.forEach((function(e,t){var n=f[e],r=t+1,c=Array(r).fill(m);(0,a.SD)(n,0,r+3,[].concat((0,o.Z)(c),[s,s,p])),(0,a.SD)(n,null,r+3,[b,s,s].concat((0,o.Z)(c)));for(var u=t<l.length-1?l[t+1]:i,d=e+1;d<u;d++){var h=f[d];(0,a.SD)(h,0,r),(0,a.SD)(h,null,r)}}));var d=(0,a.pD)(t.total.sleeve-2*l.length,u),h=f[i-1],v=(0,a.hn)(h);return(0,a.SD)(h,0,h.length,v.map((function(e){return a.DF[e]}))),d.forEach((function(e,t){var n=e+l.length;(0,a.SD)(h,n,2,[p,m])})),(0,r.Z)((0,r.Z)({},e),{},{baseChart:f})}},5556:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(660),o=n(7574);function a(e){var t=e.menu;return(0,o.jsx)(o.Fragment,{children:r.default[t].component})}},5418:function(e,t,n){n.r(t);var r=n(8056),o={yarn:{maker:"Lana Grossa",line:"Puno Luce",color:"White",url:"https://www.lana-grossa.de/en/yarns/detail/puno-luce/1123/",shape:"ball",yards:273,grams:50},needles:[{type:"circular",size:r.H[7],usage:"Body"},{type:"circular",size:r.H[5],usage:"Bands"}],gauge:{sts:"Stockinette stitch",sts_count:26,row_count:36,needle:r.H[7]},notions:["Cable Needle","Tapestry needle","Stitch markers"],difficulty:"Intermediate",photoCount:0};t.default=o},7796:function(e,t,n){n.r(t),n.d(t,{introSizing:function(){return u},measurements:function(){return s},schemaBySize:function(){return l},sizes:function(){return i}});var r=n(9037),o=n(5418),a=n(3555),c=n(9441),i=["M"],s=(0,a.sf)(i,r.KY,{neck_circumference:[21.7],neck_depth:[1],bust_circumference:[41.04],under_arm_circumference:[16.52],wrist_circumference:[10.4],total_length:[24],sleeve_length_from_underarm:[17.5],underarm:[2.052],yoke_length:[9.25],neck_band_height:[1],arm_band_height:[1],hem:[2]}),l=s.map((function(e,t){return(0,c.Ps)(o.default.gauge.sts_count,o.default.gauge.row_count,e)})),u=(0,a.i$)(i,r.Et,s,l.map((function(e){return e.totalSts})),["bust"],["bust_circumference","neck_circumference","under_arm_circumference","sleeve_length_from_underarm","total_length"])},660:function(e,t,n){n.r(t),n.d(t,{cable:function(){return d},twistLace:function(){return h}});var r,o,a,c,i=n(604),s=n(7796),l=n(1762),u=n(7574),f=i.DF.m1l,d=[{sizes:s.sizes,motif:(0,i.AW)(4,4,"left",2)}],h=[{sizes:s.sizes,motif:{chart:(0,i.bz)(["p k2tog yo p ","p k:2 p","p yo ssk p","p k:2 p"]),stsCount:4}}],v=[{title:"Cable CO",desc:"Used for neckline CO",video:"https://www.youtube.com/watch?v=4YUfdREnSQI"},{title:"m1l & m1r",desc:"Make 1 left/right, used for arm inset increase",video:null===(r=f.videos)||void 0===r?void 0:r[0].url},{title:"w & t",desc:"Wrap & turn; short row technique, my preference is German short row. ",video:null===(o=i.c9["Wrap & Turn"])||void 0===o||null===(a=o.videos)||void 0===a?void 0:a[0].url},{title:"Sewn on BO",desc:"Or tubular BO",video:null===(c=i.c9["Tubular BO"])||void 0===c?void 0:c.videos[0].url}],m=[{id:"cable",label:"Cable",component:(0,u.jsx)(l.Z,{motifBySize:d})},{id:"lace",label:"Lace",component:(0,u.jsx)(l.Z,{motifBySize:h})},{id:"techniques",label:"Techniques",component:(0,u.jsx)(i.k2,{list:v})},{id:"abbr",label:"Abbreviations",component:(0,u.jsx)(i.Bv,{list:["CO","BO","cont","inc","dec","rep","RS","SR","WS","pu"]})}];t.default=m}}]);
//# sourceMappingURL=556.69c67cd9.chunk.js.map