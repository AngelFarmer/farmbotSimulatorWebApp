(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{10:function(n,e){},11:function(n,e){},12:function(n,e){},13:function(n,e){},14:function(n,e){},15:function(n,e){},16:function(n,e){},"6daa":function(n,e,t){"use strict";t.r(e);t("e6cf");var o=t("cf57");const s=t("faa1"),a=t("4556");class c extends s{constructor(){super()}async confirm(n,e,t="Confirm"){return new Promise(((o,s)=>{n.$q.dialog({title:t,message:e,cancel:!0,persistent:!0}).onOk((()=>o(!0))).onOk((()=>o(!0))).onCancel((()=>s(!0))).onDismiss((()=>s(!0)))}))}showDialog(n,e="",t="",s=0){let c=a({length:10});const i=n.$q.dialog({title:e,message:t,progress:{spinner:o["a"],color:"primary"},persistent:!0,ok:!1});let r,u,l=s;i.update({message:`${l} secs`});const f=()=>{clearInterval(r),clearInterval(u),i.hide()};return u=setInterval((()=>{s>0?(l--,0===l&&f()):l++,i.update({message:`${l} secs`})}),1e3),this.once(c,f),c}}e["default"]=new c},"6e1b":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div")},s=[],a=(t("e6cf"),t("faa1")),c=t.n(a),i=t("f40c");const r=new c.a;let u=new i["d"]({events:r});const l=t("6daa").default;var f={name:"Logout",components:{},async created(){u.logout();l.showDialog(this,"Logging out","");window.location.assign("/")},data(){return{}}},d=f,g=t("2877"),p=Object(g["a"])(d,o,s,!1,null,null,null);e["default"]=p.exports},7:function(n,e){},8:function(n,e){},9:function(n,e){}}]);