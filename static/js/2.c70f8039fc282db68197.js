webpackJsonp([2],{M41L:function(t,e){},"m+Z1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=new(n("7+uW").default),i={data:function(){return{collapse:!1,item:[{icon:"el-icon-s-home",index:"personalInf",title:"个人信息"},{icon:"el-icon-s-home",index:"receivingAddress",title:"收货地址"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;s.$on("collapse",function(e){t.collapse=e,s.$emit("collapse-content",e)})}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#303133","text-color":"#fff","active-text-color":"orange","unique-opened":"",router:""}},[t._l(t.item,function(e){return[e.subs?[n("el-submenu",{key:e.index,attrs:{index:e.index}},[n("template",{slot:"title"},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e){return[e.subs?n("el-submenu",{key:e.index,attrs:{index:e.index}},[n("template",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.subs,function(e,s){return n("el-menu-item",{key:s,attrs:{index:e.index}},[t._v("\n                "+t._s(e.title)+"\n              ")])})],2):n("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.title))])]})],2)]:[n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},staticRenderFns:[]};var o={name:"Home",data:function(){return{tagsList:[],collapse:!1}},components:{vSidebar:n("VU/8")(i,a,!1,function(t){n("z1Uz")},"data-v-54dd0d3e",null).exports},created:function(){var t=this;s.$on("collapse-content",function(e){t.collapse=e}),s.$on("tags",function(e){for(var n=[],s=0,i=e.length;s<i;s++)e[s].name&&n.push(e[s].name);t.tagsList=n})}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[e("keep-alive",{attrs:{include:this.tagsList}},[e("router-view")],1)],1),this._v(" "),e("el-backtop",{attrs:{target:".content"}})],1)])],1)},staticRenderFns:[]};var c=n("VU/8")(o,l,!1,function(t){n("M41L")},"data-v-64e76fec",null);e.default=c.exports},z1Uz:function(t,e){}});
//# sourceMappingURL=2.c70f8039fc282db68197.js.map