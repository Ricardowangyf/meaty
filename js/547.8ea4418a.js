"use strict";(self["webpackChunkmeaty"]=self["webpackChunkmeaty"]||[]).push([[547],{271:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"routerlink"},[e("router-link",{staticClass:"anotherbutton router-link-exact-active",attrs:{to:"/all"}},[e("div",{staticClass:"fontsize"},[t._v("全部")])]),e("router-link",{staticClass:"xiangrikui",attrs:{to:"/homepage/sunflower"}},[e("div",{staticClass:"anotherfontsize"},[t._v("向日葵")])]),e("router-link",{staticClass:"xiangrikui",attrs:{to:"/homepage/cactus"}},[e("div",{staticClass:"anotherfontsize"},[t._v("仙人掌")])]),e("router-link",{staticClass:"xiangrikui",attrs:{to:"/homepage/greenpineapple"}},[e("div",{staticClass:"anotherfontsize"},[t._v("绿萝")])])],1)},i=[],n=(s(7658),s(3861)),r={name:"FilterButton",mounted(){(0,n.i)().then((t=>{this.tableData=t.data,console.log("---\x3e ",this.tableData)}))},methods:{filterDatas(t,e){this.items="trash"===t?e.filter((t=>t.deleteAt)):"favorites"===t?e.filter((t=>t.favorties)):e,console.log("this.items",this.items),console.log("type:  ",t),this.items&&this.items.length>0&&this.$router.push(`/homepage/${t}/${this.items[0].name}`).catch((t=>{console.log(t)}))}}},l=r,o=s(1001),c=(0,o.Z)(l,a,i,!1,null,null,null),u=c.exports},6156:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navigationbar"},[e("router-link",{staticClass:"backgroundd",attrs:{to:"/"}},[e("div",{staticClass:"padding"},[e("li",[e("img",{attrs:{src:s(194)}})]),e("li",{staticClass:"home"},[t._v("主页")])])]),e("router-link",{staticClass:"backgroundd",attrs:{to:"/commUnity"}},[e("div",{staticClass:"padding"},[e("li",[e("img",{attrs:{src:s(4694)}})]),e("li",{staticClass:"home"},[t._v("社区")])])]),e("router-link",{staticClass:"backgroundd",attrs:{to:"/shopcenter"}},[e("div",{staticClass:"padding"},[e("li",[e("img",{attrs:{src:s(9664)}})]),e("li",{staticClass:"home"},[t._v("商城")])])])],1)},i=[],n={name:"FooterPage"},r=n,l=s(1001),o=(0,l.Z)(r,a,i,!1,null,null,null),c=o.exports},7910:function(t,e,s){s.r(e),s.d(e,{default:function(){return k}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body center"},[e("div",{staticClass:"main"},[e("div",{staticClass:"inputandcion"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.keyWord,expression:"keyWord",modifiers:{trim:!0}}],staticClass:"keyword",attrs:{laceholder:"搜索你想要的产品"},domProps:{value:t.keyWord},on:{input:function(e){e.target.composing||(t.keyWord=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"centernow"},[e("RectAngle"),e("Filterbutton"),t._l(t.tableData,(function(t){return e("li",{key:t.name,staticClass:"background"},[e("HomeAll",{attrs:{title:t.name,des:t.imgurl,eal:t.paragraph}})],1)}))],2),e("FooterPage")],1)])},i=[],n=(s(7658),s(1351)),r=s(271),l=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rectangle"},[e("div",{staticClass:"content"},[e("h1",{staticClass:"meatyname"},[t._v("多肉植物")]),e("p",{staticClass:"air"},[t._v("让空气更加清新")]),e("p",{staticClass:"make"},[t._v("MAKE THE AIR FRESHRE")])]),e("img",{staticClass:"cactus",attrs:{src:s(212)}})])}],c={name:"RectAngle"},u=c,m=s(1001),d=(0,m.Z)(u,l,o,!1,null,null,null),h=d.exports,p=s(6156),g=s(3861),f={name:"HomePage",props:["type"],data(){return{tableData:[],item:[],name:" ",keyWord:" "}},mounted(){(0,g.i)().then((t=>{this.tableData=t.data,console.log("---\x3e ",this.tableData)}))},components:{HomeAll:n["default"],FooterPage:p.Z,Filterbutton:r.Z,RectAngle:h},watch:{$route:{handler(t,e){const s=t.params.type,a=e.params.type;this.name=t.params.name,s&&s!==a&&this.filterDatas(s,this.tableData)}}},methods:{filterDatas(t,e){this.item="sunflower"===t?e.filter((t=>t.sunflower)):"cactus"===t?e.filter((t=>t.cactus)):"greenpineapple"===t?e.filter((t=>t.greenpineapple)):e,console.log("this.item",this.item),console.log("type",t),this.item&&this.item.length>0&&this.$router.push(" ").catch((t=>{console.log(t)}))}}},v=f,C=(0,m.Z)(v,a,i,!1,null,null,null),k=C.exports},4694:function(t,e,s){t.exports=s.p+"img/community.2f4875ca.svg"},194:function(t,e,s){t.exports=s.p+"img/home.edf78cb9.svg"},9664:function(t,e,s){t.exports=s.p+"img/shop.a1329161.svg"},212:function(t,e,s){t.exports=s.p+"img/cactus.e20481be.jpg"}}]);
//# sourceMappingURL=547.8ea4418a.js.map