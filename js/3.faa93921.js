(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{c534:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"hHh Lpr lFf"}},[i("q-header",[i("q-toolbar",[i("q-btn",{attrs:{color:"white",flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1)],1),i("q-drawer",{ref:"drawer",attrs:{overlay:"",bordered:"",breakpoint:500,"content-class":"bg-primary text-white"},on:{mouseout:t.mouseOutofDrawer},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",[i("q-item",{attrs:{tag:"a",href:"#/home"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"home"}})],1),i("q-item-section",[i("q-item-label",[t._v("Home")])],1)],1),i("q-item",{attrs:{tag:"a",href:"#/settings"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"settings"}})],1),i("q-item-section",[i("q-item-label",[t._v("Settings")])],1)],1),i("q-item",{attrs:{tag:"a",href:"#/license"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"account_balance"}})],1),i("q-item-section",[i("q-item-label",[t._v("License")])],1)],1),i("q-item",{attrs:{tag:"a",href:"#/profile"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"person"}})],1),i("q-item-section",[i("q-item-label",[t._v("Profile")])],1)],1),i("q-item",{attrs:{tag:"a",href:"#/logout"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"logout"}})],1),i("q-item-section",[i("q-item-label",[t._v("Logout")])],1)],1)],1)],1),i("q-page-container",[i("q-page",{staticClass:"fbg-primary"},[t.passed?i("router-view"):t._e()],1)],1)],1)},o=[],a=(i("c975"),i("e6cf"),i("37c0"),i("27d6"),i("d47f"),i("310f"),i("b2c9")),n=i("625f"),r=i("faa1"),l=i.n(r),c=i("f40c");const h=Object(n["a"])(),f=new l.a;new c["d"]({events:f});var d={name:"MainLayout",components:{},watch:{slide:{handler(t,e){let i=t.match(/^[a-zA-Z]*/g)[0];this.farmbotChanged(i)},immediate:!0}},async created(){try{await a["a"].guard("/"),this.passed=!0}catch(t){}},mounted(){this.lastScrollPosition=window.pageYOffset,window.addEventListener("scroll",this.onScroll);const t=document.createElement("meta");t.name="viewport",t.content="width=device-width, initial-scale=1",document.head.appendChild(t)},beforeDestroy(){window.removeEventListener("scroll",this.onScroll)},data(){return{passed:!1,path:"/",isAtHome:!0,leftDrawerOpen:!1,infoOpened:!1,offset:5,showNavbar:!0,lastScrollPosition:0,scrollValue:0,botType:"",botName:"",botSubType:"",botLength:null,botWidth:null,botHeight:null,botCost:0,botArea:0,slide:"genesis2D",slides:["genesis2D","genesisXL2D","express2D","expressXL2D"],lorem:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."}},methods:{openLink(t,e=!1){window.open(t,e)},nextSlide:function(){let t=this.slides.indexOf(this.slide);t++,t>=this.slides.length&&(t=0),this.slide=this.slides[t]},previousSlide:function(){let t=this.slides.indexOf(this.slide);t--,t<0&&(t=this.slides.length-1),this.slide=this.slides[t]},pathChanged:function(){"/"===this.path?this.isAtHome=!0:this.isAtHome=!1},farmbotChanged:function(t){console.log(h);let e=h.getFarmbotSize(t);this.botType=e.type,this.botName=e.name,this.botSubType=e.subtype!==this.botName?e.subtype:"",this.botLength=e.length,this.botWidth=e.width,this.botHeight=e.height,this.botCost=e.cost,this.botArea=this.botLength*this.botWidth/1e6,this.clickBtns()},clickBtns(){this.infoOpened&&this.showNavbar&&this.$nextTick((function(){this.$refs.info_btn.$el.click()}))},mouseOutofDrawer(t){Math.abs(t.clientX-this.$refs.drawer.width)<5&&(this.leftDrawerOpen=!1)},onScroll(){if(window.pageYOffset<0)return;if(Math.abs(window.pageYOffset-this.lastScrollPosition)<this.offset)return;console.log(window.pageYOffset);let t=this.showNavbar;if(this.showNavbar=window.pageYOffset<this.lastScrollPosition,this.showNavbar&&!t&&this.infoOpened){this.$nextTick((function(){this.$refs.info_btn.$el.click()})),console.log(this.$refs,this.$refs.info_btn);for(let t in this.$refs)console.log(t);console.log(this.$refs["info_btn"]),console.log(this.$refs.info_btn)}this.showNavbar&&console.log(t,this.infoOpened),this.lastScrollPosition=window.pageYOffset},onClick:function(){}}},m=d,b=i("2877"),p=i("4d5a"),u=i("e359"),w=i("65c6"),g=i("9c40"),q=i("9404"),v=i("1c1c"),O=i("66e5"),y=i("4074"),D=i("0016"),L=i("0170"),S=i("09e3"),_=i("9989"),k=i("eebe"),$=i.n(k),Q=Object(b["a"])(m,s,o,!1,null,null,null);e["default"]=Q.exports;$()(Q,"components",{QLayout:p["a"],QHeader:u["a"],QToolbar:w["a"],QBtn:g["a"],QDrawer:q["a"],QList:v["a"],QItem:O["a"],QItemSection:y["a"],QIcon:D["a"],QItemLabel:L["a"],QPageContainer:S["a"],QPage:_["a"]})}}]);