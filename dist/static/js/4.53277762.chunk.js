(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{38:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),l=t(3);function c(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-block header-block-collapse d-lg-none d-xl-none"},r.a.createElement("button",{className:"collapse-btn",id:"sidebar-collapse-btn"},r.a.createElement("i",{className:"fa fa-bars"}))),r.a.createElement("div",{className:"header-block header-block-search"}),r.a.createElement("div",{className:"header-block header-block-nav"},r.a.createElement("ul",{className:"nav-profile"},r.a.createElement("li",{className:"notifications new"}),r.a.createElement("li",{className:"profile dropdown"},r.a.createElement("a",{"data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",{className:"name"},r.a.createElement("button",{onClick:function(){l.b.remove(),e.history.push("/login")},type:"button",class:"btn btn-default btn-sm"},r.a.createElement("i",{class:"fa fa-sign-out"}," ",r.a.createElement("span",null," Log out")))))))))}},39:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n);function l(){return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("div",{className:"brand"},r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"l l1"}),r.a.createElement("span",{className:"l l2"}),r.a.createElement("span",{className:"l l3"}),r.a.createElement("span",{className:"l l4"}),r.a.createElement("span",{className:"l l5"}))," A1abilities Admin")),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"sidebar-menu metismenu",id:"sidebar-menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"}," ",r.a.createElement("i",{className:"fa fa-home"})," Dashboard ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Services"}," ",r.a.createElement("i",{className:"fa fa-th-large"})," Services ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/OurTechnology"},r.a.createElement("i",{className:"fa fa-area-chart"})," Technology")),r.a.createElement("li",null,r.a.createElement("a",{href:"/About"},r.a.createElement("i",{className:"fa fa-table"})," About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/OurGoals"},r.a.createElement("i",{className:"fa fa-pencil-square-o"})," Goals ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Portfolio"},r.a.createElement("i",{className:"fa fa-desktop"})," Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{href:"/WhyUs"},r.a.createElement("i",{className:"fa fa-bell"})," Why Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/OurPartners"},r.a.createElement("i",{className:"fa fa-flask"}),"  Our Partners")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Contact"},r.a.createElement("i",{className:"fa fa-file-text-o"})," Contact"))))))}},40:function(e,a,t){"use strict";var n=t(36),r=t.n(n),l=t(37),c=t(42),s=t.n(c),o=t(3);function m(e){(e||401===e.response.status)&&(o.b.remove(),document.location.reload())}var i=function(e){var a=e.methodType;return{method:void 0===a?"GET":a,headers:{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}};a.a={login:function(){var e=Object(l.a)(r.a.mark((function e(a){var t,n,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/login"),e.prev=2,e.next=5,s()(n,Object.assign({},i({methodType:"POST"}),{data:t}));case 5:return l=e.sent,c=l.data,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(2),m(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),addUpdateFormContent:function(){var e=Object(l.a)(r.a.mark((function e(a){var t,n,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/addUpdateFormContent"),e.prev=2,e.next=5,s()(n,Object.assign({},i({methodType:"POST"}),{data:t.formData}));case 5:return l=e.sent,c=l.data,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(2),m(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),getTabRelatedList:function(){var e=Object(l.a)(r.a.mark((function e(a){var t,n,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/getTabRelatedList"),e.prev=2,e.next=5,s()(n,Object.assign({},i({methodType:"POST"}),{data:t}));case 5:return l=e.sent,c=l.data,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(2),m(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),getContactList:function(){var e=Object(l.a)(r.a.mark((function e(a){var t,n,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/getContactList"),e.prev=2,e.next=5,s()(n,Object.assign({},i({methodType:"GET"}),{data:t}));case 5:return l=e.sent,c=l.data,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(2),m(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),changeState:function(){var e=Object(l.a)(r.a.mark((function e(a){var t,n,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/changeState"),e.prev=2,e.next=5,s()(n,Object.assign({},i({methodType:"POST"}),{data:t}));case 5:return l=e.sent,c=l.data,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(2),m(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}()}},44:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},45:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(44);function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}},82:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(36),r=t.n(n),l=t(37),c=t(44),s=t(45),o=t(43),m=t(0),i=t.n(m),d=t(38),u=t(39),p=t(40);function f(e){var a=e.location.state,t=a.type,n=a.operation;console.log(a);var f="",b="";switch(t){case"services":b="Our Services",f="/Services";break;case"technology":b="Our Technology",f="/OurTechnology";break;case"whyus":b="Why Us",f="/WhyUs";break;case"contact":b="Contact",f="/Contact";break;case"partners":b="Our Partners",f="/OurPartners";break;case"about":b="About us",f="/About";break;case"goals":b="Our Goals",f="/OurGoals";break;case"portfolio":b="Portfolio",f="/Portfolio"}var E=Object(m.useState)({name:"",content:"",link:"",address:"",email:"",mobile:""}),v=Object(o.a)(E,2),g=v[0],h=v[1],N=function(e){h(Object(s.a)({},g,Object(c.a)({},e.target.name,e.target.value)))};Object(m.useEffect)((function(){"data"===Object.keys(a)[2]&&h({name:a.data.title,content:a.data.content,link:a.data.link,address:a.data.address,email:a.data.email,mobile:a.data.mobile})}),[]);var y=function(){var c=Object(l.a)(r.a.mark((function l(){var c,s;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""===g.content||""===g.address||""===g.email){r.next=10;break}return c={id:a.data.id,operation:n,type:t,address:g.address,mobile:g.mobile,email:g.email},(s=new FormData).append("data",JSON.stringify(c)),r.next=6,p.a.addUpdateFormContent({formData:s});case 6:!0===r.sent.is_successful&&e.history.push(f),r.next=11;break;case 10:alert("Need all fields");case 11:case"end":return r.stop()}}),l)})));return function(){return c.apply(this,arguments)}}(),O=function(){var c=Object(l.a)(r.a.mark((function l(){var c,s;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""===g.name||""===g.content){r.next=18;break}return r.prev=1,c={operation:n,type:t,title:g.name,content:g.content,link:g.link},"update"===n&&(c.id=a.data.id,c.image_id=a.data.image_id,c.link_id=a.data.link_id),(s=new FormData).append("data",JSON.stringify(c)),s.append("images",document.getElementById("upload_image").files[0]),r.next=9,p.a.addUpdateFormContent({formData:s});case 9:!0===r.sent.is_successful?e.history.push(f):"add"===n&&alert("operation failed"),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),console.log("Error...",r.t0);case 16:r.next=19;break;case 18:alert("Need all fields");case 19:case"end":return r.stop()}}),l,null,[[1,13]])})));return function(){return c.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement(d.a,e),i.a.createElement(u.a,null),i.a.createElement("div",null,i.a.createElement("div",{className:"sidebar-overlay",id:"sidebar-overlay"}),i.a.createElement("div",{className:"sidebar-mobile-menu-handle",id:"sidebar-mobile-menu-handle"}),i.a.createElement("div",{className:"mobile-menu-handle"}),i.a.createElement("article",{className:"content item-editor-page"},i.a.createElement("div",{className:"title-block"},i.a.createElement("h3",{className:"title"},b,i.a.createElement("a",{href:f},i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"),i.a.createElement("span",{className:"sr-only"},"Close"))),i.a.createElement("span",{className:"sparkline bar","data-type":"bar"}))),i.a.createElement("form",{name:"item"},i.a.createElement("div",{className:"card card-block"},"contact"===t?i.a.createElement("div",null,i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label text-xs-right"}," Address: "),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("input",{className:"form-control boxed",placeholder:!0,type:"text",value:g.address,name:"address",onChange:N}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label text-xs-right"}," Mobile: "),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("input",{className:"form-control boxed",placeholder:!0,type:"text",value:g.mobile,name:"mobile",onChange:N}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label text-xs-right"}," Email: "),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("input",{className:"form-control boxed",placeholder:!0,type:"text",value:g.email,name:"email",onChange:N}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("div",{className:"col-sm-10 col-sm-offset-2"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:y},"   Submit ")))):i.a.createElement("div",null,i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label text-xs-right"}," Name: "),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("input",{className:"form-control boxed",placeholder:!0,type:"text",value:g.name,name:"name",onChange:N}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label text-xs-right"}," Content: "),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("textarea",{className:"form-control boxed ",rows:"8",type:"text",value:g.content,name:"content",onChange:N}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label text-xs-right"}," Link: "),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("input",{className:"form-control boxed",placeholder:!0,type:"text",value:g.link,name:"link",onChange:N}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-2 form-control-label text-xs-right"}," Images: "),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement("div",{className:"images-container"},i.a.createElement("div",{className:"image-container"},i.a.createElement("div",{id:"imagePreview",className:"image",style:{backgroundImage:""}}),i.a.createElement("img",{src:""})),i.a.createElement("a",{href:"#",className:"add-image","data-toggle":"modal","data-target":"#modal-media"},i.a.createElement("div",{className:"image-container new"},i.a.createElement("div",{className:"image"},i.a.createElement("i",{className:"fa fa-plus"}))))))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("div",{className:"col-sm-10 col-sm-offset-2"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:O},"   Submit "))))))),i.a.createElement("div",{className:"modal fade",id:"modal-media"},i.a.createElement("div",{className:"modal-dialog modal-lg"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h4",{className:"modal-title"},"Choose Image"),i.a.createElement("button",{type:"button",id:"closeFrame",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"),i.a.createElement("span",{className:"sr-only"},"Close"))),i.a.createElement("div",{className:"modal-body modal-tab-container"},i.a.createElement("ul",{className:"nav nav-tabs modal-tabs",role:"tablist"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link active",href:"#upload","data-toggle":"tab",role:"tab"},"Upload"))),i.a.createElement("div",{className:"tab-content modal-tab-content"},i.a.createElement("div",{className:"upload-container"},i.a.createElement("div",{id:"dropzone"},i.a.createElement("form",{className:"dropzone needsclick dz-clickable",id:"demo-upload"},i.a.createElement("div",{className:"dz-message-block"},i.a.createElement("div",{className:"dz-message "},i.a.createElement("input",{accept:"image/gif, image/jpeg, image/png, image/jpg",style:{display:"none"},id:"upload_image",type:"file",onChange:function(e){!function(e){if(document.getElementById("upload_image").files&&document.getElementById("upload_image").files[0]){var a=new FileReader;a.onload=function(e){document.getElementById("imagePreview").style.backgroundImage="url("+e.target.result+")"},a.readAsDataURL(document.getElementById("upload_image").files[0]),document.getElementById("closeFrame").click()}}()}}),i.a.createElement("label",{htmlFor:"upload_image"},"Click to upload.")))))))))))))}}}]);
//# sourceMappingURL=4.53277762.chunk.js.map