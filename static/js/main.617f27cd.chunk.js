(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(5),i=(n(25),n(1)),l=n(3),u=n(4),h=n(7),d=n(6),b=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},a.a.createElement("img",{height:"200",width:"200",alt:"robo",src:"https://robohash.org/".concat(r,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(b,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},p=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Error"):this.props.children}}]),n}(r.Component),g=(n(26),function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}),E="CHANGE_SEARCH_FIELD",v="REQUEST_ROBOTS_PENDING",y="REQUEST_ROBOTS_SUCCESS",O="REQUEST_ROBOTS_FAILURE",R=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",{className:"f1"},"loading"):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(p,{searchChange:n}),a.a.createElement(g,null,a.a.createElement(f,null,a.a.createElement(m,{robots:c}))))}}]),n}(r.Component),j=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:E,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:v}),fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:y,payload:t})})).catch((function(t){return e({type:O,payload:t})}))}))}}}))(R);n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={searchField:""},C={isPending:!1,robots:[],error:""},S=n(14),k=n(15),N=Object(S.createLogger)(),F=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case E:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object.assign({},e,{isPending:!0});case y:case O:return Object.assign({},e,{robots:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(F,Object(i.a)(k.a,N));c.a.render(a.a.createElement(s.a,{store:_},a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.617f27cd.chunk.js.map