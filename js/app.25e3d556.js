(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={4:0},a={4:0},c=[];function i(e){return u.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"c5d0917d",2:"c5adf636",3:"faa93921",5:"5773bac0",6:"0bca9956",7:"d50eda63",8:"b75061e9",9:"bc862266",10:"3e020c63"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={1:1,5:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"d05e9012",2:"31d6cfe0",3:"31d6cfe0",5:"719d96c7",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},1:function(e,t){},2:function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("5b0d"),n("9044");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),c=n("b05d"),i=n("2a19"),u=n("436b"),l=n("f508"),s=n("b12a");r["a"].use(c["a"],{config:{},lang:o["a"],iconSet:a["a"],plugins:{Notify:i["a"],Dialog:u["a"],Loading:l["a"],AppFullscreen:s["a"]}});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],p={name:"App"},h=p,m=n("2877"),b=Object(m["a"])(h,f,d,!1,null,null,null),v=b.exports,g=n("2f62");r["a"].use(g["a"]);var y=function(){const e=new g["a"].Store({modules:{},strict:!1});return e},w=(n("ddb0"),n("8c4f"));const P=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(1).then(n.bind(null,"27d6"))}]},{path:"/home",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"2710")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"eea6"))}],meta:{requiresAuth:!0}},{path:"/settings",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"c534")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"c52c"))}],meta:{requiresAuth:!0}},{path:"/delete",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"c534")),children:[{path:"",component:()=>n.e(9).then(n.bind(null,"8cfd"))}],meta:{requiresAuth:!0}},{path:"/logout",component:()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"2710")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"6e1b"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"e51e"))}];var O=P,j=n("f40c");r["a"].use(w["a"]);const A=n("1712").to;var k=function(){const e=new w["a"]({scrollBehavior:()=>({x:0,y:0}),routes:O,mode:"hash",base:""});return e.beforeEach((async(e,t,n)=>{e.matched.some((async e=>{if(e.meta.requiresAuth){let[e,t]=await A(j["a"].checkTokenAndRefresh());e&&n({path:"/"})}n()}))})),e},x=async function(){const e="function"===typeof y?await y({Vue:r["a"]}):y,t="function"===typeof k?await k({Vue:r["a"],store:e}):k;e.$router=t;const n={router:t,store:e,render:e=>e(v),el:"#q-app"};return{app:n,store:e,router:t}},E=n("bc3a"),S=n.n(E);r["a"].prototype.$axios=S.a;var _=n("cae4");const q="";async function C(){const{app:e,store:t,router:n}=await x();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),i=[void 0,_["a"]];for(let l=0;!1===o&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:c,publicPath:q})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&new r["a"](e)}C()},3:function(e,t){},4:function(e,t){},5:function(e,t){},"5b0d":function(e,t,n){},6:function(e,t){},7:function(e,t){},8:function(e,t){}});