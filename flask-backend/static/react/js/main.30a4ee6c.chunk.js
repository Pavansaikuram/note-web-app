(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),c=a.n(o),u=(a(40),a(18)),l=a.n(u),i=a(32),s=a(7),m=a(8),h=a(10),p=a(9),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(){e.props.updateAuth(!1),localStorage.setItem("auth","false"),e.props.history.push("/")},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("button",{block:!0,bsSize:"large",type:"submit",onClick:this.onSubmit},"Logout")))}}]),a}(n.Component),b=(a(42),a(15)),d=a(12),f=a(17),g=a.n(f),E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={notes:[]},n}return Object(m.a)(a,[{key:"GetNotes",value:function(){var e=this;return g.a.get("/getnotes").then((function(t){for(var a=0;a<t.data.length;a++)e.state.notes.push(t.data[a])})),this.setState(),console.log(this.state.notes),r.a.createElement("div",null,this.state.notes.map((function(e){return{c:e}})))}},{key:"render",value:function(){return this.GetNotes()}}]),a}(n.Component),j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={values:[]},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"createUI",value:function(){var e=this;return this.state.values.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("input",{type:"text",value:t||"",onChange:e.handleChange.bind(e,a)}),r.a.createElement("input",{type:"button",value:"remove",onClick:e.removeClick.bind(e,a)}))}))}},{key:"handleChange",value:function(e,t){var a=Object(b.a)(this.state.values);a[e]=t.target.value,this.setState({values:a})}},{key:"addClick",value:function(){this.setState((function(e){return{values:[].concat(Object(b.a)(e.values),[""])}}))}},{key:"removeClick",value:function(e){var t=Object(b.a)(this.state.values);t.splice(e,1),this.setState({values:t})}},{key:"handleSubmit",value:function(e){console.log(this.state.values.join(",")),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("form",{onSubmit:this.handleSubmit},this.createUI(),r.a.createElement("input",{type:"button",value:"add more",onClick:this.addClick.bind(this)}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),O=a(33),k=(a(60),function(){var e="";return{getName:function(){return e},setName:function(t){e=t}}}()),S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={email:"",password:""},e.changeHandler=function(t){var a=t.target.name;console.log(a),e.setState(Object(O.a)({},a,t.target.value))},e.onSubmit=function(){k.setName("authentication"),console.log("hi pavan"+k.getName()),"pavansaikuramsetti8@gmail.com"===e.state.email&&"pavan"===e.state.password?(localStorage.setItem("auth","true"),e.props.updateAuth(!0),e.props.history.push("/nav/counters")):alert("Register to sign in")},e.onSubmit=e.onSubmit.bind(Object(d.a)(e)),e}return Object(m.a)(a,[{key:"render",value:function(){return console.log("login page"),r.a.createElement("div",{className:"Login"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"email",placeholder:"email",onChange:this.changeHandler}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement("button",{block:!0,bsSize:"large",type:"submit",onClick:this.onSubmit},"Login")))}}]),a}(n.Component),y=a(1),w=a(13),C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={show:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===localStorage.getItem("auth")?localStorage.setItem("auth","false"):"true"===localStorage.getItem("auth")&&this.setState({show:!0});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;console.log("App rendered");var t="true"===localStorage.getItem("auth");return console.log(t),r.a.createElement(w.b,{className:"container"},r.a.createElement("div",{className:"App"},t?r.a.createElement(y.b,{path:"/nav",render:function(t){return r.a.createElement(v,Object.assign({},t,{updateAuth:function(t){return e.setState({show:t})}}))}}):r.a.createElement(y.a,{to:"/"}),r.a.createElement("div",null,t?r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/nav/counters",render:function(t){return r.a.createElement(j,Object.assign({},t,{updateAuth:function(t){return e.setState({show:t})}}))}})):r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(S,Object.assign({},t,{updateAuth:function(t){return e.setState({show:t})}}))}})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(66);c.a.render(r.a.createElement(w.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.30a4ee6c.chunk.js.map