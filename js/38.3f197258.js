"use strict";(self["webpackChunkmeaty"]=self["webpackChunkmeaty"]||[]).push([[38],{5476:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"navigation-bar"},[a("router-link",{staticClass:"backgroundd",attrs:{to:"/"}},[a("div",{staticClass:"padding"},[a("li",[a("img",{attrs:{src:s(194)}})]),a("li",{staticClass:"home"},[t._v("主页")])])]),a("router-link",{staticClass:"backgroundd",attrs:{to:"/community"}},[a("div",{staticClass:"padding"},[a("li",[a("img",{attrs:{src:s(4694)}})]),a("li",{staticClass:"home"},[t._v("社区")])])]),a("router-link",{staticClass:"backgroundd",attrs:{to:"/shopcenter"}},[a("div",{staticClass:"padding"},[a("li",[a("img",{attrs:{src:s(9664)}})]),a("li",{staticClass:"home"},[t._v("商城")])])])],1)},i=[],l={name:"FooterPage"},n=l,r=s(1001),o=(0,r.Z)(n,e,i,!1,null,null,null),c=o.exports},3038:function(t,a,s){s.r(a),s.d(a,{default:function(){return D}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"body center"},[a("div",{staticClass:"main"},[a("div",{staticClass:"inputandcion"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.keyWord,expression:"keyWord",modifiers:{trim:!0}}],staticClass:"keyword",attrs:{placeholder:"搜索你想要的产品","suffix-icon":"",change:""},domProps:{value:t.keyWord},on:{input:function(a){a.target.composing||(t.keyWord=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}}),a("button",{staticClass:"sousuo",on:{click:t.serch}},[a("img",{staticClass:"hualigs",attrs:{src:s(3655),alt:""}}),a("div",{staticClass:"claer"})])]),a("div",{staticClass:"centernow"},[a("RectAngle"),a("div",{staticClass:"button-link"},[a("ul",{staticClass:"buttonstyle"},t._l(t.tabList,(function(s,e){return a("li",{key:e,staticClass:"plant-name",class:{active:t.currentIndex===e},on:{click:function(a){return t.clickTab(e,s)}}},[t._v(" "+t._s(s.name)+" ")])})),0)]),t.tableData&&t.tableData.length>0?a("div",t._l(t.tableData,(function(s,e){return a("li",{key:e,staticClass:"plant-assembly",on:{click:function(a){return t.button(s)}}},[a("HomePagetwo",{attrs:{title:s.name,des:s.imgurl,eal:s.paragraph}})],1)})),0):t._e()],1),a("FooterPage")],1)])},i=[],l=(s(7658),s(3861)),n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"paragraphcontent"},[a("div",{staticClass:"picture"},[a("img",{staticClass:"imgsize",attrs:{src:t.des}})]),a("div",{staticClass:"textspacing"},[a("h1",{staticClass:"header"},[t._v(t._s(t.title))]),a("h2",{staticClass:"paragraph"},[t._v(t._s(t.eal))]),a("el-rate",{attrs:{disabled:"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)])},r=[],o={props:{title:{type:String,default:""},des:{type:String,default:""},eal:{type:String,default:""}},data(){return{value:5}}},c=o,u=s(1001),d=(0,u.Z)(c,n,r,!1,null,null,null),m=d.exports,h=function(){var t=this;t._self._c;return t._m(0)},p=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"rectangle"},[a("div",{staticClass:"content"},[a("h1",{staticClass:"meatyname"},[t._v("多肉植物")]),a("p",{staticClass:"air"},[t._v("让空气更加清新")]),a("p",{staticClass:"make"},[t._v("MAKE THE AIR FRESHRE")])]),a("img",{staticClass:"cactus",attrs:{src:s(212)}})])}],g={name:"RectAngle"},f=g,v=(0,u.Z)(f,h,p,!1,null,null,null),b=v.exports,C=s(5476),k={name:"HomePage",props:["type"],data(){return{tableData:[],items:[],name:" ",keyWord:" ",tabList:[{id:1,name:"全部"},{id:2,name:"向日葵"},{id:3,name:"仙人掌"},{id:4,name:"玉露"}],currentIndex:0,content:"fdgfdgffdgfd"}},mounted(){(0,l.i)().then((t=>{this.tableData=t.data;const a=this.$route.params.type||"all";this.filterDatas(a,t.data),console.log("this.tableData",this.tableData)}))},components:{HomePagetwo:m,FooterPage:C.Z,RectAngle:b},methods:{getList(t){(0,l.i)().then((a=>{this.tableData=t?a.data.filter((a=>a.sunflower===t)):a.data;const s=this.$route.params.type||"all";this.filterDatas(s,a.data),console.log("this.tableData",a.data)}))},button(t){this.$router.push({path:"/detail",query:{name:t.name}}),this.showData=!this.showData,this.HomePagetwo=this.dataToShow},serch(){var t=[];if(this.keyWord)for(var a=0;a<this.tableData.length;a++)this.tableData[a].name===this.keyWord&&(t.push(this.tableData[a]),console.log("this.tableData",this.tableData));else t=this.tableData;this.items=[...t],this.tableData=this.items,console.log("------:>this.tableData",this.items)},filterDatas(t,a){this.items="Trash"===t?a.filter((t=>t.deleteAt)):"favorites"===t?a.filter((t=>t.favorties)):a,console.log("type:  ",t)},clickTab(t,a){this.currentIndex=t,this.getList(a.name)}}},y=k,_=(0,u.Z)(y,e,i,!1,null,null,null),D=_.exports},4694:function(t,a,s){t.exports=s.p+"img/community.2f4875ca.svg"},194:function(t,a,s){t.exports=s.p+"img/home.edf78cb9.svg"},3655:function(t,a,s){t.exports=s.p+"img/search.9166c4a4.svg"},9664:function(t,a,s){t.exports=s.p+"img/shop.a1329161.svg"},212:function(t,a,s){t.exports=s.p+"img/cactus.e20481be.jpg"}}]);
//# sourceMappingURL=38.3f197258.js.map