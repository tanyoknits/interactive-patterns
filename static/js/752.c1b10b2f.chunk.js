"use strict";(self.webpackChunk_tanyoknits_interactive_patterns=self.webpackChunk_tanyoknits_interactive_patterns||[]).push([[752,429,418,796,660],{1153:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2328),i=n(7574);function o(e){var t=e.needle,n=e.method,o=e.direction,c=e.coCount;return(0,i.jsx)(r.Z,{intro:"\ud83e\udea1 With a ".concat(t," needle").concat(null!=n?" using ".concat(n," method"):""),rows:[{text:"CO ".concat(c," ").concat("round"===o?"in the rnd":"flat")}],rowType:"CO",afterList:"round"===o?["Pm at the end to indicate BOR (middle back)"]:[]})}},24:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4394),i=n(7141),o=n(7574);function c(e){var t=e.isRow,n=void 0!==t&&t;return(0,o.jsxs)(r.b,{width:"fit-content",children:[(0,o.jsx)(i.z,{}),"Chart is interactive - click a ",n?"row":"stitch group"," to see the corresponding written instruction."]})}},1665:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(3028),i=n(6234),o=n(6596),c=n(9788),a=n(969),s=n(1998),u=n(604),l=n(1153),d=n(24),f=n(7574);function v(e){var t=e.chart,n=e.instruction,v=(0,a.useState)("1"),h=(0,i.Z)(v,2),m=h[0],p=h[1],S=(0,a.useState)([0,null]),k=(0,i.Z)(S,2),b=k[0],Z=k[1];return(0,f.jsxs)(o.k,{direction:"column",gap:4,children:[null!=(null===n||void 0===n?void 0:n.co)&&(0,f.jsx)(l.Z,(0,r.Z)({},null===n||void 0===n?void 0:n.co)),null!=(null===n||void 0===n?void 0:n.beforeList)&&(0,f.jsx)(u.wp,{list:null===n||void 0===n?void 0:n.beforeList}),(0,f.jsx)(s.Z,{menu:m,setMenu:p,options:["Chart","Inline (text)","Split by motif (text)"]}),"1"===m&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{isRow:!0}),(0,f.jsx)(c.xu,{width:"100%",overflow:"auto",children:(0,f.jsx)(u.xH,(0,r.Z)((0,r.Z)({},t),{},{focus:b,setFocus:Z,isOnlyRowClickable:!0}))})]}),"2"===m&&(0,f.jsx)(u.NY,(0,r.Z)({},t)),"3"===m&&(0,f.jsx)(u.NY,(0,r.Z)((0,r.Z)({},t),{},{display:"block"})),null!=(null===n||void 0===n?void 0:n.afterList)&&(0,f.jsx)(u.wp,{list:null===n||void 0===n?void 0:n.afterList})]})}},1762:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(3028),i=n(6234),o=n(6596),c=n(9418),a=n(4485),s=n(969),u=n(604),l=n(2289),d=n(24),f=n(7574);function v(e){var t,n=e.intro,v=e.motifBySize,h=(e.showReflected,(0,s.useState)(0)),m=(0,i.Z)(h,2),p=m[0],S=m[1],k=null!==(t=v[p])&&void 0!==t?t:v[0],b=k.motif,Z=k.direction,w=(0,u.sy)(b.chart);return(0,f.jsxs)(o.k,{direction:"column",gap:6,children:[null!=n&&(0,f.jsx)(c.x,{children:n}),(0,f.jsxs)(a.g,{spacing:6,align:"left",children:[(0,f.jsxs)(o.k,{gap:6,alignItems:"center",flexWrap:"wrap",children:[v.length>1&&(0,f.jsx)(l.Z,{sizes:v.map((function(e){return e.sizes.join(", ")})),selectedSize:p,onChange:function(e){return S(e)}}),(0,f.jsx)(d.Z,{})]}),(0,f.jsx)(u.Yu,(0,r.Z)((0,r.Z)({},b),{},{direction:Z})),(0,f.jsx)(u.SB,{stitches:w,hasWS:!0})]})]})}n(6287)},4118:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(6596),i=n(7574);function o(e){var t=e.children;return(0,i.jsx)(r.k,{direction:"column",gap:8,mb:2,pt:2,children:t})}},9441:function(e,t,n){n.d(t,{J:function(){return m},P:function(){return h}});var r=n(3028),i=n(8079),o=n(604),c=n(7236),a=n(578),s=o.DF.rli,u=o.DF.k,l=o.DF.lli,d=o.DF.sr_rs,f=o.DF.sr_ws,v=o.DF.empty;function h(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1.2,c=e/4,s=t/4,u=n.neck_circumference*c,l=n.under_arm_circumference*c,d=n.underarm*c,f=l-d,v=n.bust_circumference*c-2*d,h=n.yoke_length*s,m=2*f+v,p=(0,o.Qd)(f),S=(0,o.Qd)(v),k=(0,o.Qd)((m-u)/8),b={sleeve:(0,o.ZD)(p-2*k),back:(0,o.ZD)((S-4*k)/2),frontOneSide:2},Z=2*b.sleeve+b.back+b.frontOneSide,w=Math.ceil((m-u-2*h)/4),g=k-w,y=(0,o.ZD)(n.neck_depth*s/2),_={every2Rows:w,every4Rows:g,frontIncSkip:y},D=(0,o.Qd)(n.neck_band_height*c)-2,x=(0,o.Qd)(b.back/2)-(0,o.Qd)(D/2),j=1+2*w+4*g,C=Math.ceil(j/4)-y/2,R=x-C,z=b.back+2*k,O=b.frontOneSide+C+k,B={sleeve:b.sleeve+2*k,back:z,frontOneSide:O,body:z+2*O,underarm:(0,o.Qd)(d),sleeveAdj:r},Q=B.body+2*B.underarm-2*r,A={bodyBeforeVInc:Q,sleeve:B.sleeve+B.underarm+r,body:Q+2*R},I=1+2*_.every2Rows,U=I+4*_.every4Rows,L=U+2,W=n.hem*s,F=(0,o.ZD)(n.total_length*s-W)-1,N=(0,o.Qd)(n.cuff_length*s),P=(0,o.ZD)(n.cuff_circumference*c),M=(0,o.Qd)(2*s),Y=(0,o.Qd)(n.sleeve_length_from_underarm*s),T=(0,o.Qd)(1.4*P),H=Y-N-M-2,q=(0,o.ZD)(A.sleeve-T)/2,E=(0,a.AZ)(H,q),G=A.sleeve-2*q-P,J=Y-N-2,K=J+2+(0,o.Qd)(1.2*N);return{co:Z,start:b,raglan:_,vNeck:{every4RowWithRaglan:C,every4RowAfterRaglan:R},yokeSplit:B,total:A,rows:{every2RowIncStart:1,every4RowIncStart:I,split:U,afterRaglanIncStart:L,lastNeckInc:L+4*R-3,hemDecStart:F,bo:F+(0,o.Qd)(W*i)},arm:{cuffSts:P,decOffset:M,decRows:E,cuffDecRow:J,cuffDecSts:G,cuffBO:K},totalSts:0}}function m(e,t,n,a,h){for(var m=e.baseChart,p=t.baseChart,S=n.baseChart,k=(0,i.Z)(a.baseChart.map((function(e){return(0,i.Z)(e)}))),b=(0,i.Z)(a.baseChart.map((function(e){return(0,i.Z)(e)}))),Z=h.start,w=h.raglan,g=h.vNeck,y=h.yokeSplit,_=(Z.frontOneSide,Z.sleeve),D=g.every4RowWithRaglan,x=g.every4RowAfterRaglan,j=w.every2Rows,C=w.every4Rows,R=w.frontIncSkip,z=y.frontOneSide+x,O=D+x,B=j+C,Q=0;Q<2*R;Q++)(0,o.SD)(m[Q],0,z),0!==Q&&Q!==2*R-1||(0,o.SD)(m[Q],O,2,u),(0,o.SD)(p[Q],0,z),(0,o.SD)(k[Q],0,B),(0,o.SD)(b[Q],null,B);(0,c.s)(_,2*R+2).slice(0,R).forEach((function(e,t){t<R-1&&((0,o.SD)(k[2*t+1],B,e,[].concat((0,i.Z)(Array(e-1).fill(v)),[d])),(0,o.SD)(k[2*t+2],B,e)),(0,o.SD)(b[2*t],null,B+e,[f].concat((0,i.Z)(Array(e-1).fill(v)))),(0,o.SD)(b[2*t+1],null,B+e)}));for(var A=0;A<O;A++){var I=2*R+4*A,U=O-A-1,L=Array(U).fill(v),W=[u,u];(0,o.SD)(m[I],0,U+4,[].concat((0,i.Z)(L),[u,s],W)),(0,o.SD)(p[I],null,U+4,[].concat(W,[l,u],(0,i.Z)(L)));for(var F=1;F<4;F++){var N=m[I+F],P=p[I+F];if(null==N||null==P)break;(0,o.SD)(N,0,U+2,[].concat((0,i.Z)(L),W)),(0,o.SD)(P,null,U+2,[].concat(W,(0,i.Z)(L)))}}function M(e,t,n,r,c){for(var a=0;a<t;a++)for(var d=r+a*e,f=n-a-1,h=Array(f).fill(v),Z=0;Z<e;Z++){var w=m[d+Z],g=p[d+Z],y=k[d+Z],_=b[d+Z],D=S[d+Z],x="front"===c?[w,g,y,_]:[D,D,_,y];0===Z?((0,o.SD)(x[0],null,f+2,[s,u].concat((0,i.Z)(h))),(0,o.SD)(x[1],0,f+2,[].concat((0,i.Z)(h),[u,l])),(0,o.SD)(x[2],0,f+2,[].concat((0,i.Z)(h),[u,l])),(0,o.SD)(x[3],null,f+2,[s,u].concat((0,i.Z)(h)))):((0,o.SD)(x[0],null,f),(0,o.SD)(x[1],0,f),(0,o.SD)(x[2],0,f),(0,o.SD)(x[3],null,f))}}return M(2,j+R,B,2*R,"front"),M(4,C-R,B-j-R,2*R+2*(j+R),"front"),M(2,j,B,0,"back"),M(4,C,B-j,2*j,"back"),[e,(0,r.Z)((0,r.Z)({},a),{},{baseChart:k}),n,(0,r.Z)((0,r.Z)({},a),{},{baseChart:b}),t]}},1752:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(604),i=n(4118),o=n(8429),c=n(7796),a=n(9441),s=n(1665),u=n(7574);function l(e){var t=e.menu,n=e.size,l=o.repeatedPattern[n],d=c.schemaBySize[n],f=d.rows,v=d.yokeSplit,h=d.total,m=d.vNeck,p=d.arm,S=m.every4RowAfterRaglan,k=f.hemDecStart,b=f.lastNeckInc,Z=f.split,w=h.body,g=h.sleeve,y=v.frontOneSide,_=v.underarm,D=p.cuffBO,x=(0,r.MU)(l,w,k,3),j={id:"grape",stsCount:4,rowCount:l.length},C=(0,r.vj)(x,null,0,j),R=(0,r.Uk)(C,[0,b],[0,y+S]),z=(0,r.Uk)(C,[0,b],[w-(y+S),w]),O=(0,r.Uk)(C,[0,f.split],[y+S+_,w-(y+S+_)]),B=(0,r.MU)(l,g,Z+D,3),Q=(0,r.vj)(B,null,0,j),A=(0,r.Uk)(Q,[0,Z],[_/2,g-_/2]),I=(0,a.J)(R,z,O,A,d),U=(0,r.IQ)(I,Z-1);return(0,u.jsx)(i.Z,{children:0===t?(0,u.jsx)(r.Yu,{chart:l,stsCount:20}):(0,u.jsx)(s.Z,{chart:{chart:(0,r.Nk)(U),size:"S",direction:"flat",showStsCountPerRow:!0}})})}},8429:function(e,t,n){n.r(t),n.d(t,{repeatedPattern:function(){return d}});var r=n(3028),i=n(604),o=n(660),c=n(7796),a=n(3555),s=c.sizes.map((function(e){return(0,i.bz)(["p k:2 p"])})),u=c.sizes.map((function(e){return(0,i.bz)(["k p"])})),l=["orange","teal"],d=c.sizes.map((function(e,t){var n=(0,r.Z)((0,r.Z)({},(0,a.U5)(o.cable,e)),{},{id:l[0]}),c={chart:(0,i.bz)(["k:4"]),stsCount:4,id:l[0]},d=(0,a.U5)(o.twistLace,e).chart.map((function(e){return(0,i.l4)(e)})),f=(0,r.Z)((0,r.Z)({},(0,a.U5)(o.twistLace,e)),{},{chart:d,id:l[1]}),v={chart:(0,i.bz)(["p k2tog yo p","k:4"]).map((function(e){return(0,i.l4)(e)})),stsCount:4,id:l[1]},h=(0,i.A_)([n,n,c,c,f,f,v],!0),m=(0,i.A_)([f,f,v,n,n,c,c],!0);return(0,i.Pp)([u[t],h,s[t],m,(0,i.UB)(u[t])],20)}))},5418:function(e,t,n){n.r(t);var r=n(8056),i={yarn:{maker:"Lana Grossa",line:"Puno Luce",color:"White",url:"https://www.lana-grossa.de/en/yarns/detail/puno-luce/1123/",shape:"ball",yards:273,grams:50},needles:[{type:"circular",size:r.H[6],usage:"Body"},{type:"circular",size:r.H[5],usage:"Bands"}],gauge:{sts:"Stockinette stitch",sts_count:24,row_count:34,needle:r.H[6]},notions:["Cable Needle","Tapestry needle","Stitch markers"],difficulty:"Intermediate",photoCount:0};t.default=i},7796:function(e,t,n){n.r(t),n.d(t,{introSizing:function(){return l},measurements:function(){return s},schemaBySize:function(){return u},sizes:function(){return a}});var r=n(9037),i=n(5418),o=n(3555),c=n(9441),a=["M"],s=(0,o.sf)(a,r.KY,{neck_circumference:[21.7],neck_depth:[1],bust_circumference:[41.04],under_arm_circumference:[16.52],wrist_circumference:[10.4],total_length:[24],sleeve_length_from_underarm:[17.5],underarm:[2.052],yoke_length:[9.25],neck_band_height:[1],arm_band_height:[1],hem:[2]}),u=s.map((function(e,t){return(0,c.P)(i.default.gauge.sts_count,i.default.gauge.row_count,e)})),l=(0,o.i$)(a,r.Et,s,u.map((function(e){return e.totalSts})),["bust"],["bust_circumference","neck_circumference","under_arm_circumference","sleeve_length_from_underarm","total_length"])},660:function(e,t,n){n.r(t),n.d(t,{cable:function(){return f},twistLace:function(){return v}});var r,i,o,c,a=n(604),s=n(7796),u=n(1762),l=n(7574),d=a.DF.m1l,f=[{sizes:s.sizes,motif:(0,a.AW)(4,4,"left",2),direction:"flat"}],v=[{sizes:s.sizes,motif:{chart:(0,a.bz)(["p k2tog yo p ","p k:2 p","p yo ssk p","p k:2 p"]),stsCount:4},direction:"flat"}],h=[{title:"Cable CO",desc:"Used for neckline CO",video:"https://www.youtube.com/watch?v=4YUfdREnSQI"},{title:"m1l & m1r",desc:"Make 1 left/right, used for arm inset increase",video:null===(r=d.videos)||void 0===r?void 0:r[0].url},{title:"w & t",desc:"Wrap & turn; short row technique, my preference is German short row. ",video:null===(i=a.c9["Wrap & Turn"])||void 0===i||null===(o=i.videos)||void 0===o?void 0:o[0].url},{title:"Sewn on BO",desc:"Or tubular BO",video:null===(c=a.c9["Tubular BO"])||void 0===c?void 0:c.videos[0].url}],m=[{id:"cable",label:"Cable",component:(0,l.jsx)(u.Z,{motifBySize:f})},{id:"lace",label:"Lace",component:(0,l.jsx)(u.Z,{motifBySize:v})},{id:"techniques",label:"Techniques",component:(0,l.jsx)(a.k2,{list:h})},{id:"abbr",label:"Abbreviations",component:(0,l.jsx)(a.Bv,{list:["CO","BO","cont","inc","dec","rep","RS","SR","WS","pu"]})}];t.default=m},6287:function(e,t,n){n.r(t),t.default={}}}]);
//# sourceMappingURL=752.c1b10b2f.chunk.js.map