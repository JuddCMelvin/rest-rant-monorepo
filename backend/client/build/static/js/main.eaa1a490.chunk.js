(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(20),s=c.n(r),i=c(22),l=c(3),o=c(0);var j=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:"HOME"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{height:"300",width:"500",src:"http://localhost:5000/images/chia-fruit-drink.jpg",alt:"Chia Fruit Shake"}),Object(o.jsxs)("div",{children:["Photo by ",Object(o.jsx)("a",{href:"AUTHOR_LINK",children:"Brenda Godinez"})," on ",Object(o.jsx)("a",{href:"UNSPLASH_LINK",children:"Unsplash"})]})]}),Object(o.jsx)("a",{href:"/places",children:Object(o.jsx)("button",{className:"btn-primary",children:"Places Page"})})]})},u=c(4),b=c.n(u),m=c(7),h=c(6);var d=function(e){var t=Object(l.f)(),c=Object(n.useState)([]),a=Object(h.a)(c,2),r=a[0],s=a[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/places");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=r.map((function(e){return Object(o.jsxs)("div",{className:"col-sm-6",children:[Object(o.jsx)("h2",{children:Object(o.jsx)("a",{href:"#",onClick:function(){return t.push("/places/".concat(e.placeId))},children:e.name})}),Object(o.jsx)("p",{className:"text-center",children:e.cuisines}),Object(o.jsx)("img",{style:{maxWidth:200},src:e.pic,alt:e.name}),Object(o.jsxs)("p",{className:"text-center",children:["Located in ",e.city,", ",e.state]})]},e.placeId)}));return Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:"Places to Rant or Rave About"}),Object(o.jsx)("div",{className:"row",children:i})]})},O=c(23),p=c(2);var f=function(e){var t=e.comment,c=e.onDelete;return Object(o.jsxs)("div",{className:"border col-sm-4",children:[Object(o.jsx)("h2",{className:"rant",children:t.rant?"Rant! \ud83d\ude21":"Rave! \ud83d\ude3b"}),Object(o.jsx)("h4",{children:t.content}),Object(o.jsx)("h3",{children:Object(o.jsxs)("strong",{children:["- ",t.author.firstName," ",t.author.lastName]})}),Object(o.jsxs)("h4",{children:["Rating: ",t.stars]}),Object(o.jsx)("button",{className:"btn btn-danger",onClick:c,children:"Delete Comment"})]})};var x=function(e){var t=e.place,c=e.onSubmit,a=Object(n.useState)([]),r=Object(h.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)({content:"",stars:3,rant:!1,authorId:""}),j=Object(h.a)(l,2),u=j[0],d=j[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var t,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/users");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,d(Object(p.a)(Object(p.a)({},u),{},{authorId:null===(t=n[0])||void 0===t?void 0:t.userId})),i(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=s.map((function(e){return Object(o.jsxs)("option",{value:e.userId,children:[e.firstName," ",e.lastName]},e.userId)}));return Object(o.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),c(u),d({content:"",stars:3,rant:!1,authorId:null===(t=s[0])||void 0===t?void 0:t.userId})},children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"form-group col-sm-12",children:[Object(o.jsx)("label",{htmlFor:"content",children:"Content"}),Object(o.jsx)("textarea",{required:!0,value:u.content,onChange:function(e){return d(Object(p.a)(Object(p.a)({},u),{},{content:e.target.value}))},className:"form-control",id:"content",name:"content"})]})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"form-group col-sm-4",children:[Object(o.jsx)("label",{htmlFor:"state",children:"Author"}),Object(o.jsx)("select",{className:"form-control",value:u.authorId,onChange:function(e){return d(Object(p.a)(Object(p.a)({},u),{},{authorId:e.target.value}))},children:O})]}),Object(o.jsxs)("div",{className:"form-group col-sm-4",children:[Object(o.jsx)("label",{htmlFor:"stars",children:"Star Rating"}),Object(o.jsx)("input",{value:u.stars,onChange:function(e){return d(Object(p.a)(Object(p.a)({},u),{},{stars:e.target.value}))},type:"range",step:"0.5",min:"1",max:"5",id:"stars",name:"stars",className:"form-control"})]}),Object(o.jsxs)("div",{className:"form-group col-sm-4",children:[Object(o.jsx)("label",{htmlFor:"rand",children:"Rant"}),Object(o.jsx)("input",{checked:t.rant,onClick:function(e){return d(Object(p.a)(Object(p.a)({},u),{},{rant:e.target.checked}))},type:"checkbox",id:"rant",name:"rant",className:"form-control"})]})]}),Object(o.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Add Comment"})]})};var v=function(){var e=Object(l.g)().placeId,t=Object(l.f)(),c=Object(n.useState)(null),a=Object(h.a)(c,2),r=a[0],s=a[1];if(Object(n.useEffect)((function(){(function(){var t=Object(m.a)(b.a.mark((function t(){var c,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/places/".concat(e));case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,s(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),null===r)return Object(o.jsx)("h1",{children:"Loading"});function i(){return(i=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/places/".concat(r.placeId),{method:"DELETE"});case 2:t.push("/places");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/places/".concat(r.placeId,"/comments/").concat(t.commentId),{method:"DELETE"});case 2:s(Object(p.a)(Object(p.a)({},r),{},{comments:r.comments.filter((function(e){return e.commentId!==t.commentId}))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(m.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/places/".concat(r.placeId,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(Object(p.a)(Object(p.a)({},r),{},{comments:[].concat(Object(O.a)(r.comments),[n])}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=Object(o.jsx)("h3",{className:"inactive",children:"No comments yet!"}),v=Object(o.jsx)("h3",{className:"inactive",children:"Not yet rated"});if(r.comments.length){for(var g=r.comments.reduce((function(e,t){return e+t.stars}),0),N=Math.round(g/r.comments.length),y="",w=0;w<N;w++)y+="\u2b50\ufe0f";v=Object(o.jsxs)("h3",{children:[y," stars"]}),d=r.comments.map((function(e){return Object(o.jsx)(f,{comment:e,onDelete:function(){return function(e){return j.apply(this,arguments)}(e)}},e.commentId)}))}return Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-sm-6",children:[Object(o.jsx)("img",{style:{maxWidth:200},src:r.pic,alt:r.name}),Object(o.jsxs)("h3",{children:["Located in ",r.city,", ",r.state]})]}),Object(o.jsxs)("div",{className:"col-sm-6",children:[Object(o.jsx)("h1",{children:r.name}),Object(o.jsx)("h2",{children:"Rating"}),v,Object(o.jsx)("br",{}),Object(o.jsx)("h2",{children:"Description"}),Object(o.jsxs)("h3",{children:[r.name," has been serving ",r.city,", ",r.state," since ",r.founded,"."]}),Object(o.jsxs)("h4",{children:["Serving ",r.cuisines,"."]}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{className:"btn btn-warning",onClick:function(){t.push("/places/".concat(r.placeId,"/edit"))},children:"Edit"})," ",Object(o.jsx)("button",{type:"submit",className:"btn btn-danger",onClick:function(){return i.apply(this,arguments)},children:"Delete"})]})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("h2",{children:"Comments"}),Object(o.jsx)("div",{className:"row",children:d}),Object(o.jsx)("hr",{}),Object(o.jsx)("h2",{children:"Got Your Own Rant or Rave?"}),Object(o.jsx)(x,{place:r,onSubmit:function(e){return u.apply(this,arguments)}})]})},g=Object(n.createContext)();var N=function(e){var t=e.children,c=Object(n.useState)(null),a=Object(h.a)(c,2),r=a[0],s=a[1];return Object(o.jsx)(g.Provider,{value:{currentUser:r,setCurrentUser:s},children:t})};var y=function(){var e=Object(l.f)(),t=Object(n.useContext)(g).currentUser,c=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("li",{style:{float:"right"},children:Object(o.jsx)("a",{href:"#",onClick:function(){return e.push("/sign-up")},children:"Sign Up"})}),Object(o.jsx)("li",{style:{float:"right"},children:Object(o.jsx)("a",{href:"#",onClick:function(){return e.push("/login")},children:"Login"})})]});return t&&(c=Object(o.jsxs)("li",{style:{float:"right"},children:["Logged in as ",t.firstName," ",t.lastName]})),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",onClick:function(){return e.push("/")},children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",onClick:function(){return e.push("/places")},children:"Places"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",onClick:function(){return e.push("/places/new")},children:"Add Place"})}),c]})})};var w=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:"404: PAGE NOT FOUND"}),Object(o.jsx)("p",{children:"Oops, sorry, we can't find this page!"}),Object(o.jsx)("img",{src:"http://localhost:5000/images/kittykat.jpeg",alt:"cute cat pic"})]})};var C=function(){var e=Object(l.f)(),t=Object(n.useState)({name:"",pic:"",city:"",state:"",cuisines:""}),c=Object(h.a)(t,2),a=c[0],r=c[1];function s(){return(s=Object(m.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("http://localhost:5000/places",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:e.push("/places");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:"Add a New Place"}),Object(o.jsxs)("form",{onSubmit:function(e){return s.apply(this,arguments)},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Place Name"}),Object(o.jsx)("input",{required:!0,value:a.name,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{name:e.target.value}))},className:"form-control",id:"name",name:"name"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"founded",children:"Year Founded"}),Object(o.jsx)("input",{required:!0,value:a.founded,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{founded:e.target.value}))},className:"form-control",id:"founded",name:"founded"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"pic",children:"Place Picture"}),Object(o.jsx)("input",{value:a.pic,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{pic:e.target.value}))},className:"form-control",id:"pic",name:"pic"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{value:a.city,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{city:e.target.value}))},className:"form-control",id:"city",name:"city"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"state",children:"State"}),Object(o.jsx)("input",{value:a.state,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{state:e.target.value}))},className:"form-control",id:"state",name:"state"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"cuisines",children:"Cuisines"}),Object(o.jsx)("input",{value:a.cuisines,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{cuisines:e.target.value}))},className:"form-control",id:"cuisines",name:"cuisines",required:!0})]}),Object(o.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Add Place"})]})]})};var S=function(){var e=Object(l.f)(),t=Object(l.g)().placeId,c=Object(n.useState)({name:"",pic:"",city:"",state:"",cuisines:""}),a=Object(h.a)(c,2),r=a[0],s=a[1];function i(){return(i=Object(m.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("http://localhost:5000/places/".concat(r.placeId),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:e.push("/places/".concat(r.placeId));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/places/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:"Edit Place"}),Object(o.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Place Name"}),Object(o.jsx)("input",{required:!0,value:r.name,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{name:e.target.value}))},className:"form-control",id:"name",name:"name"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"founded",children:"Year Founded"}),Object(o.jsx)("input",{required:!0,value:r.founded,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{founded:e.target.value}))},className:"form-control",id:"founded",name:"founded"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"pic",children:"Place Picture"}),Object(o.jsx)("input",{value:r.pic,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{pic:e.target.value}))},className:"form-control",id:"pic",name:"pic"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{value:r.city,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{city:e.target.value}))},className:"form-control",id:"city",name:"city"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"state",children:"State"}),Object(o.jsx)("input",{value:r.state,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{state:e.target.value}))},className:"form-control",id:"state",name:"state"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"cuisines",children:"Cuisines"}),Object(o.jsx)("input",{value:r.cuisines,onChange:function(e){return s(Object(p.a)(Object(p.a)({},r),{},{cuisines:e.target.value}))},className:"form-control",id:"cuisines",name:"cuisines",required:!0})]}),Object(o.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Save"})]})]})};var k=function(){var e=Object(l.f)(),t=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),c=Object(h.a)(t,2),a=c[0],r=c[1];function s(){return(s=Object(m.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("http://localhost:5000/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:"Sign Up"}),Object(o.jsxs)("form",{onSubmit:function(e){return s.apply(this,arguments)},children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(o.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(o.jsx)("input",{required:!0,value:a.firstName,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{firstName:e.target.value}))},className:"form-control",id:"firstName",name:"firstName"})]}),Object(o.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(o.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(o.jsx)("input",{required:!0,value:a.lastName,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{lastName:e.target.value}))},className:"form-control",id:"lastName",name:"lastName"})]})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"email",required:!0,value:a.email,onChange:function(e){return r(Object(p.a)(Object(p.a)({},a),{},{email:e.target.value}))},className:"form-control",id:"email",name:"email"})]})}),Object(o.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Sign Up"})]})]})};var I=function(){Object(l.f)(),Object(n.useContext)(g).setCurrentUser;var e=Object(n.useState)({email:"",password:""}),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(h.a)(r,2),i=s[0];function j(){return(j=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s[1],Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:"Login"}),null!==i?Object(o.jsx)("div",{className:"alert alert-danger",role:"alert",children:i}):null,Object(o.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"email",required:!0,value:c.email,onChange:function(e){return a(Object(p.a)(Object(p.a)({},c),{},{email:e.target.value}))},className:"form-control",id:"email",name:"email"})]}),Object(o.jsxs)("div",{className:"col-sm-6 form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{type:"password",required:!0,value:c.password,onChange:function(e){return a(Object(p.a)(Object(p.a)({},c),{},{password:e.target.value}))},className:"form-control",id:"password",name:"password"})]})]}),Object(o.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Login"})]})]})};var F=function(){return Object(o.jsx)(N,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(y,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(l.a,{exact:!0,path:"/sign-up",component:k}),Object(o.jsx)(l.a,{exact:!0,path:"/login",component:I}),Object(o.jsx)(l.a,{exact:!0,path:"/places",component:d}),Object(o.jsx)(l.a,{exact:!0,path:"/places/new",component:C}),Object(o.jsx)(l.a,{exact:!0,path:"/places/:placeId",component:v}),Object(o.jsx)(l.a,{exact:!0,path:"/places/:placeId/edit",component:S}),Object(o.jsx)(l.a,{path:"/",component:w})]})]})})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.eaa1a490.chunk.js.map