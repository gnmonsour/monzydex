(this.webpackJsonpmonzydex=this.webpackJsonpmonzydex||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),a=(n(13),n(5)),i=n(6),h=n(2),u=n(8),l=n(7),d=(n(14),n(15),n(16),n(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set3&size=180x180")}),Object(d.jsx)("h2",{children:e.monster.name}),Object(d.jsx)("p",{children:e.monster.email})]})},f=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e,t){return Object(d.jsx)(j,{monster:e},t)}))})})},m=(n(18),function(e){var t=e.placeholder,n=e.handleChange,c=e.count,r=void 0!=={count:c}?"".concat(c," found"):"";return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n}),Object(d.jsxs)("p",{id:"list-count",children:[r," "]})]})}),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchVal:""},e.doSearch=e.doSearch.bind(Object(h.a)(e)),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch((function(e){console.log("error on fetch")}))}},{key:"doSearch",value:function(e){this.setState({searchVal:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchVal,r=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"monzydex"}),Object(d.jsx)(m,{placeholder:"Search The Dex",handleChange:function(t){return e.doSearch(t)},count:r.length}),Object(d.jsx)(f,{monsters:r})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.dd02f75d.chunk.js.map