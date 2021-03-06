(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),u=(a(90),a(5)),i=a.n(u),s=a(10),l=a(72),d=a(73),p=a(27),f=a(82),m=a(81),v=a(42),h=a.n(v),b=a(15),C=a(227),g=a(231),y=a(228),E=a(229),_=a(31),j=a.n(_),w=a(74),O=a.n(w),x=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;if(a){var u=[Object(b.a)(Object(b.a)({},a),{},{title:"Infected"}),Object(b.a)(Object(b.a)({},n),{},{title:"Recoverd"}),Object(b.a)(Object(b.a)({},c),{},{title:"Deaths"})].map((function(e,t){var a=[j.a.Card,j.a[e.title]];return r.a.createElement(C.a,{item:!0,component:g.a,key:t,xs:12,md:3,className:a.join(" ")},r.a.createElement(y.a,null,r.a.createElement(E.a,{gutterBottom:!0},e.title),r.a.createElement(E.a,{gutterBottom:!0,variant:"h5"},r.a.createElement(O.a,{start:0,end:e.value,duration:2.5,separator:","})),r.a.createElement(E.a,{gutterBottom:!0,color:"textSecondary"}," ",new Date(o).toDateString())))}));return r.a.createElement("div",{className:j.a.Container},r.a.createElement(C.a,{container:!0,spacing:3,justify:"space-around"},u))}return r.a.createElement("div",null," Loading ...!!")},k=a(30),I=a(44),S=a(32),D=a.n(S),N="https://covid19.mathdro.id/api",B=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r,c,o,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t&&"global"!==t?N+"/countries/"+t:N,e.prev=1,e.next=4,D.a.get(a);case 4:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.lastUpdate,s=r.deaths,e.abrupt("return",{confirmed:c,recovered:o,lastUpdate:u,deaths:s});case 13:e.prev=13,e.t0=e.catch(1),console.log("The Error ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=a(79),A=a.n(U),L=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,u=e.country,l=Object(n.useState)([]),d=Object(k.a)(l,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,P();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=p.length?r.a.createElement(I.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deathss",backgroundColor:"rgba(255 , 0 , 0 , .5)",borderColor:"red",fill:!0}]}}):null,v=a?r.a.createElement(I.Bar,{data:{labels:["Infected ","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,.5)","rgba(0,255,0,.5)","rgba(255,0,0,.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:A.a.Container},u&&"global"!==u?v:m)},M=a(232),W=a(230),J=a(45),F=a.n(J),G=function(e){var t=e.PickCountry,a=Object(n.useState)([]),c=Object(k.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,R();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:F.a.Container},r.a.createElement(M.a,{className:F.a.FormControl},r.a.createElement(W.a,{onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"global"}," Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},K=a(80),T=a.n(K),X=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:a=e.sent,n.setState({data:a,country:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:{},country:null},n.handleCountryChange=n.handleCountryChange.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:h.a.Container},r.a.createElement("img",{src:T.a,className:h.a.Image,alt:"Covid19"}),r.a.createElement(x,{data:t}),r.a.createElement(G,{PickCountry:this.handleCountryChange}),r.a.createElement(L,{data:t,country:a}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){e.exports={Container:"Card_Container__S3IhW",Card:"Card_Card__3Em8m",Infected:"Card_Infected__3AMPk",Recoverd:"Card_Recoverd__1Sl3D",Deaths:"Card_Deaths__2i8_k"}},42:function(e,t,a){e.exports={Container:"App_Container__ppy6K",Image:"App_Image__2oeSj"}},45:function(e,t,a){e.exports={Container:"CountryPicker_Container__Lw7UX"}},79:function(e,t,a){e.exports={Container:"Chart_Container__2ShI9"}},80:function(e,t,a){e.exports=a.p+"static/media/covid.d7265326.png"},85:function(e,t,a){e.exports=a(209)},90:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.732e74b8.chunk.js.map