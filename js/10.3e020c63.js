(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{c52c:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-tabs",{staticClass:"bg-white text-primary",attrs:{"inline-label":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"robot",icon:"agriculture",label:"Robot"}}),a("q-tab",{attrs:{name:"scene",icon:"movie",label:"Scene"}})],1),a("div",{staticClass:"q-pa-md"},["robot"===e.tab?a("robotSettings"):e._e(),"scene"===e.tab?a("sceneSettings"):e._e()],1)],1)},n=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"bg-secondary my-card",attrs:{dark:"",bordered:""}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-h6"},[e._v("Robot Settings")]),a("div",{staticClass:"text-subtitle2"},[e._v("Select the robot to simulate")])]),a("q-separator",{attrs:{dark:"",inset:""}}),a("q-card-section",[e._v("\n        scene settings\n    ")])],1)},r=[],o=(a("e6cf"),{name:"robotSettings",props:{},async created(){return new Promise((async(e,t)=>{}))},data(){return{}},methods:{}}),i=o,l=a("2877"),d=a("f09f"),b=a("a370"),u=a("eb85"),p=a("eebe"),S=a.n(p),m=Object(l["a"])(i,c,r,!1,null,null,null),v=m.exports;S()(m,"components",{QCard:d["a"],QCardSection:b["a"],QSeparator:u["a"]});var g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-card",{staticClass:"bg-secondary my-card",attrs:{dark:"",bordered:""}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-h6"},[e._v("Scene Settings")]),a("div",{staticClass:"text-subtitle2"},[e._v("Select the Scene to Use in the Simulation")])]),a("q-separator",{attrs:{dark:"",inset:""}}),a("q-card-section",[a("q-select",{attrs:{outlined:"",options:e.scenes,label:"Scene"},on:{input:e.changeScene},model:{value:e.scene,callback:function(t){e.scene=t},expression:"scene"}})],1)],1)],1)},h=[],f=a("f40c"),q={name:"sceneSettings",props:{},async created(){this.scenes=f["b"].allScenes(),this.scene=f["b"].getScene()},data(){return{scenes:[],scene:""}},methods:{changeScene(e){f["b"].setScene(e),this.$q.notify({type:"positive",message:`Scene has been changed to ${e}`})}}},C=q,_=a("ddd8"),x=Object(l["a"])(C,g,h,!1,null,null,null),y=x.exports;S()(x,"components",{QCard:d["a"],QCardSection:b["a"],QSeparator:u["a"],QSelect:_["a"]});var Q={name:"settings",components:{robotSettings:v,sceneSettings:y},data(){return{tab:"robot"}},created(){}},k=Q,w=a("429bb"),$=a("7460"),j=Object(l["a"])(k,s,n,!1,null,null,null);t["default"]=j.exports;S()(j,"components",{QTabs:w["a"],QTab:$["a"]})}}]);