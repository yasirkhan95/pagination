(this["webpackJsonpredux-crud"]=this["webpackJsonpredux-crud"]||[]).push([[0],{41:function(e,t,a){e.exports=a(70)},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),s=a(31),l=a(32),i=a(39),u=a(33),d=a(40),p=a(15),m=a(35),h=a.n(m),E=(a(68),a(9)),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={itemPerPage:8},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.Data_Loaded_Successfully()}},{key:"render",value:function(){var e=this,t=void 0===this.props.location.state,a=t?1*this.state.itemPerPage:this.props.location.state.currentPage*this.state.itemPerPage,n=a-this.state.itemPerPage,c=this.props.data.slice(n,a);console.log(this.props);for(var o=[],s=1;s<=Math.ceil(this.props.data.length/this.state.itemPerPage);s++)o.push(s);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main my-auto"},this.props.loading?r.a.createElement("div",{className:"loader"}):c.map((function(e){return r.a.createElement("div",{className:" div-25"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.id,"?size=120x120"),alt:""}),r.a.createElement("h4",{className:"mt-3"},e.title.substr(0,10)),r.a.createElement("p",null,e.body.substr(0,100)))}))),r.a.createElement("div",{className:"text-center pt-4"},r.a.createElement("ul",null,o.map((function(a,n){return r.a.createElement("li",{key:n,id:a,style:{backgroundColor:t?"":a===e.props.location.state.currentPage?"red":""},onClick:function(t){return e.props.history.push({pathname:"/path/".concat(a),state:{currentPage:a}})}},a)})))))}}]),t}(n.Component),f=Object(p.b)((function(e){return{data:e.data,loading:e.loading}}),{Data_Loaded_Successfully:function(){return function(e){e({type:"LOADING"}),h.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e({type:"RECEIVED_DATA",payload:t.data})})).catch((function(t){e({type:"LOADING_ERR",payload:t})}))}}})(Object(E.d)(g)),y=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center pb-4"},"All Posts"),r.a.createElement(f,null))},b=a(11),v=a(37),O=a.n(v),P=a(38),j=a(12),D={data:[],loading:!1,Error:[]},N=a(18),A=[P.a,O.a],_=Object(b.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(j.a)({},e,{loading:!0});case"LOADING_ERR":return Object(j.a)({},e,{loading:!1,Error:t.payload});case"RECEIVED_DATA":return Object(j.a)({},e,{loading:!1,data:t.payload});default:return Object(j.a)({},e)}}),b.a.apply(void 0,A));o.a.render(r.a.createElement(p.a,{store:_},r.a.createElement(N.a,null,r.a.createElement(y,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b5ff85be.chunk.js.map