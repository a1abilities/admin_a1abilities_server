(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="http://localhost:5000",r={set:function(e){var t=e.userName,n=e.name,a=e.token;sessionStorage.setItem("token",a),sessionStorage.setItem("userName",t),sessionStorage.setItem("name",n)},get:function(){return{token:sessionStorage.getItem("token"),userName:sessionStorage.getItem("userName"),name:sessionStorage.getItem("name")}},remove:function(){sessionStorage.clear()},get notEmpty(){var e=null!==this.get().token,t=""!==this.get().token;return e&&t}}},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),l=n.n(o),c=(n(28),n(12)),i=n(6),u=(n(29),n(3)),m=n(14),s=n(15),E=n(18),b=n(16),h=n(19),p=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"loader",class:"show fullscreen center"},r.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},r.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),r.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#f4b214"})))}}]),t}(a.Component),f=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,72))})),d=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,73))})),g=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,74))})),y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,75))})),O=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,76))})),k=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,77))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,78))})),j=Object(a.lazy)((function(){return n.e(14).then(n.bind(null,79))})),v=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,80))})),w=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,81))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,82))}));var z=function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"app",id:"app"},r.a.createElement(c.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(p,null)},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/home",render:function(e){return u.b.notEmpty?r.a.createElement(j,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/editor",render:function(e){return u.b.notEmpty?r.a.createElement(P,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/OurTechnology",render:function(e){return u.b.notEmpty?r.a.createElement(w,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/Services",render:function(e){return u.b.notEmpty?r.a.createElement(v,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/Contact",render:function(e){return u.b.notEmpty?r.a.createElement(g,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/About",render:function(e){return u.b.notEmpty?r.a.createElement(d,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/WhyUs",render:function(e){return u.b.notEmpty?r.a.createElement(f,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/OurGoals",render:function(e){return u.b.notEmpty?r.a.createElement(y,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/OurPartners",render:function(e){return u.b.notEmpty?r.a.createElement(O,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/Portfolio",render:function(e){return u.b.notEmpty?r.a.createElement(k,e):r.a.createElement(i.a,{to:"/login"})}}),r.a.createElement(i.b,{exact:!0,path:"/login",render:function(e){return u.b.notEmpty?r.a.createElement(i.a,{to:"/home"}):r.a.createElement(x,e)}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,2,3]]]);
//# sourceMappingURL=main.b2413dad.chunk.js.map