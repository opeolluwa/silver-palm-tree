import{x as ce,y as ae,d as ue,a as se,I as fe,B as de,S as pe,z as le,A as he,_ as ve,r as K,o as F,c as L,f as me,C as V,q as ee,F as te,D as ge,e as R,t as re,p as be,k as ye}from"./index.79959ad7.js";import{A as _e}from"./AppModal.8bb3523b.js";import{A as we}from"./AppEmptyState.b58f9d81.js";import{u as ne}from"./notes.38063ce3.js";import{m as Z,H as oe}from"./index.867c1d86.js";function Se(f,_){for(var n=0;n<_.length;n++){var a=_[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(f,a.key,a)}}function xe(f){var _=new Date(f),n=_.getMonth()+1,a=n<10?"0".concat(n):n,e=_.getDate()<10?"0".concat(_.getDate()):_.getDate(),t=_.getHours()<10?"0".concat(_.getHours()):_.getHours(),r=_.getMinutes()<10?"0".concat(_.getMinutes()):_.getMinutes();return"".concat(_.getFullYear(),"-").concat(a,"-").concat(e," ").concat(t,":").concat(r)}function H(f,_){return" ".concat(f," ").concat(_).concat(f>1?"s":""," ago")}function U(f,_){return" ".concat(f," ").concat(_).concat(f>1?"s":""," atr\xE1s")}function G(f,_){return" ".concat(f," ").concat(_).concat(f>1?"s":""," atr\xE1s")}function X(f,_){return"il y a ".concat(f," ").concat(_).concat(f>1?"s":"")}function q(f,_){return" ".concat(f," ").concat(_).concat(f>1?"s":""," temu")}var Oe={zh_TW:{short:{now:"\u525B\u525B",sec:" \u79D2",min:" \u5206",hour:" \u5C0F\u6642",day:" \u5929"},long:{now:"\u525B\u525B",sec:" \u79D2\u9418\u524D",min:" \u5206\u9418\u524D",hour:" \u5C0F\u6642\u524D",day:" \u5929\u524D"}},zh_CN:{short:{now:"\u521A\u521A",sec:" \u79D2",min:" \u5206",hour:" \u5C0F\u65F6",day:" \u5929"},long:{now:"\u521A\u521A",sec:" \u79D2\u949F\u524D",min:" \u5206\u949F\u524D",hour:" \u5C0F\u65F6\u524D",day:" \u5929\u524D"}},en:{short:{now:"just now",sec:"s",min:"m",hour:"h",day:"d"},long:{now:"just now",sec:function(f){return H(f,"second")},min:function(f){return H(f,"minute")},hour:function(f){return H(f,"hour")},day:function(f){return H(f,"day")}}},jp:{short:{now:"\u3059\u3053\u3057\u524D",sec:" \u79D2",min:" \u5206",hour:" \u6642\u9593",day:" \u65E5"},long:{now:"\u3059\u3053\u3057\u524D",sec:" \u79D2\u524D",min:" \u5206\u524D",hour:" \u6642\u9593\u524D",day:" \u65E5\u524D"}},pt_BR:{short:{now:"agora",sec:"s",min:"m",hour:"h",day:"d"},long:{now:"agora",sec:function(f){return G(f,"segundo")},min:function(f){return G(f,"minuto")},hour:function(f){return G(f,"hora")},day:function(f){return G(f,"dia")}}},es:{short:{now:"ahora mismo",sec:"s",min:"m",hour:"h",day:"d"},long:{now:"ahora mismo",sec:function(f){return U(f,"segundo")},min:function(f){return U(f,"minuto")},hour:function(f){return U(f,"hora")},day:function(f){return U(f,"dia")}}},ar:{short:{now:"\u0642\u0628\u0644 \u0642\u0644\u064A\u0644",sec:" \u062B\u0627\u0646\u064A\u0629",min:" \u062F\u0642\u064A\u0642\u0629",hour:" \u0633\u0627\u0639\u0629",day:" \u064A\u0648\u0645"},long:{now:"\u0642\u0628\u0644 \u0642\u0644\u064A\u0644",sec:function(f){return" \u0642\u0628\u0644 ".concat(f," \u062B\u0648\u0627\u0646\u064A")},min:function(f){return" \u0642\u0628\u0644 ".concat(f," \u062F\u0642\u0627\u0626\u0642")},hour:function(f){return" \u0642\u0628\u0644 ".concat(f," \u0633\u0627\u0639\u0627\u062A")},day:function(f){return" \u0642\u0628\u0644 ".concat(f," \u0623\u064A\u0627\u0645")}}},fr:{short:{now:"maintenant",sec:"s",min:"m",hour:"h",day:"j"},long:{now:"maintenant",sec:function(f){return X(f,"seconde")},min:function(f){return X(f,"minute")},hour:function(f){return X(f,"heure")},day:function(f){return X(f,"jour")}}},pl:{short:{now:"przed chwil\u0105",sec:"s",min:"m",hour:"g",day:"d"},long:{now:"przed chwil\u0105",sec:function(f){return q(f,"sekund")},min:function(f){return q(f,"minut")},hour:function(f){return q(f,"godzin")},day:function(f){return q(f,"dni")}}},tr:{short:{now:"\u015Fimdi",sec:"sn",min:"dk",hour:"s",day:"g"},long:{now:"\u015Fimdi",sec:"saniye",min:"dakika",hour:"saat",day:"g\xFCn"}}},Ee=function(){function f(a,e,t){(function(r,o){if(!(r instanceof o))throw new TypeError("Cannot call a class as a function")})(this,f),this.dateTime=a,this.locale=e||"en",this.type=t||"short"}var _,n;return _=f,(n=[{key:"setLocale",value:function(a){this.locale=a}},{key:"getTimeAgoString",value:function(a,e){return typeof e=="string"?"".concat(a).concat(e):e(a)}},{key:"getTimeAgo",value:function(){var a,e,t=Oe[this.locale][this.type],r=t.now,o=t.min,i=t.hour,c=t.day,s=(a=this.dateTime,!isNaN(a)||/^\d+$/.test(a)?a:a instanceof Date?a.getTime():(a=(a||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(a).getTime())),p=new Date().getTime(),u=((e=new Date).setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e.getTime(),function(){var d=new Date;d.setMonth(0),d.setDate(1),d.setHours(0),d.setMinutes(0),d.setSeconds(0),d.setMilliseconds(0),d.getTime()}(),(p-s)/1e3);return{timeago:u<=0||Math.floor(u/60)<=0?r:u<3600?this.getTimeAgoString(Math.round(u/60),o):u>=3600&&Math.round(u/3600)<24?this.getTimeAgoString(Math.round(u/3600),i):u/86400<=31?this.getTimeAgoString(Math.round(u/86400),c):function(d){var l=new Date(d),h=l.getMonth()+1,m=h<10?"0".concat(h):h,b=l.getDate()<10?"0".concat(l.getDate()):l.getDate();return"".concat(l.getFullYear(),"-").concat(m,"-").concat(b)}(s),nowString:xe(s)}}}])&&Se(_.prototype,n),f}();function Te(f,_,n,a,e,t,r,o,i,c){typeof r!="boolean"&&(i=o,o=r,r=!1);const s=typeof n=="function"?n.options:n;let p;if(f&&f.render&&(s.render=f.render,s.staticRenderFns=f.staticRenderFns,s._compiled=!0,e&&(s.functional=!0)),a&&(s._scopeId=a),t?(p=function(u){(u=u||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(u=__VUE_SSR_CONTEXT__),_&&_.call(this,i(u)),u&&u._registeredComponents&&u._registeredComponents.add(t)},s._ssrRegister=p):_&&(p=r?function(u){_.call(this,c(u,this.$root.$options.shadowRoot))}:function(u){_.call(this,o(u))}),p)if(s.functional){const u=s.render;s.render=function(d,l){return p.call(l),u(d,l)}}else{const u=s.beforeCreate;s.beforeCreate=u?[].concat(u,p):[p]}return n}const je=Te({render:function(){var f=this.$createElement;return(this._self._c||f)("span",[this._t("default",null,{timeago:this.timeago})],2)},staticRenderFns:[]},void 0,{name:"TimeAgo",props:{datetime:{type:[String,Date,Number],default:function(f){return new Date}},locale:{type:String,default:"en"},refresh:{type:[Number,Boolean],default:!1},long:{type:Boolean,default:!1},todo:{type:Function,default:function(f){}},tooltip:{type:[String,Boolean],default:!1}},data:function(){return{timeago:"",nowString:"",intervalId:null}},computed:{options:function(){return{placement:typeof this.tooltip=="string"?this.tooltip:"top",content:this.nowString}}},methods:{reloadTime:function(){var f,_,n,a=(f=this.datetime,_=this.locale,n=this.long?"long":"short",new Ee(f,_,n).getTimeAgo()),e=a.timeago,t=a.nowString;this.timeago=e,this.nowString=t,this.intervalId&&this.todo()}},mounted:function(){var f=this;this.$nextTick(function(){f.reloadTime(),f.refresh&&(f.refresh===!0||f.refresh,f.intervalId=setInterval(f.reloadTime,1e3*f.refresh))})},destroyed:function(){this.intervalId&&clearInterval(this.intervalId)}},void 0,!1,void 0,!1,void 0,void 0,void 0),Ne=je;var ie={exports:{}};(function(f,_){(function(n,a){f.exports=a()})(typeof self<"u"?self:ae,function(){return function(n){var a={};function e(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=a,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r||4&r&&typeof t=="object"&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&typeof t!="string")for(var i in t)e.d(o,i,function(c){return t[c]}.bind(null,i));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s="fb15")}({"00ee":function(n,a,e){var t=e("b622"),r=t("toStringTag"),o={};o[r]="z",n.exports=String(o)==="[object z]"},"0366":function(n,a,e){var t=e("e330"),r=e("59ed"),o=e("40d5"),i=t(t.bind);n.exports=function(c,s){return r(c),s===void 0?c:o?i(c,s):function(){return c.apply(s,arguments)}}},"06cf":function(n,a,e){var t=e("83ab"),r=e("c65b"),o=e("d1e7"),i=e("5c6c"),c=e("fc6a"),s=e("a04b"),p=e("1a2d"),u=e("0cfb"),d=Object.getOwnPropertyDescriptor;a.f=t?d:function(l,h){if(l=c(l),h=s(h),u)try{return d(l,h)}catch{}if(p(l,h))return i(!r(o.f,l,h),l[h])}},"07fa":function(n,a,e){var t=e("50c4");n.exports=function(r){return t(r.length)}},"0b42":function(n,a,e){var t=e("da84"),r=e("e8b5"),o=e("68ee"),i=e("861d"),c=e("b622"),s=c("species"),p=t.Array;n.exports=function(u){var d;return r(u)&&(d=u.constructor,o(d)&&(d===p||r(d.prototype))?d=void 0:i(d)&&(d=d[s],d===null&&(d=void 0))),d===void 0?p:d}},"0cfb":function(n,a,e){var t=e("83ab"),r=e("d039"),o=e("cc12");n.exports=!t&&!r(function(){return Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a!=7})},"0d51":function(n,a,e){var t=e("da84"),r=t.String;n.exports=function(o){try{return r(o)}catch{return"Object"}}},"13d2":function(n,a,e){var t=e("d039"),r=e("1626"),o=e("1a2d"),i=e("83ab"),c=e("5e77").CONFIGURABLE,s=e("8925"),p=e("69f3"),u=p.enforce,d=p.get,l=Object.defineProperty,h=i&&!t(function(){return l(function(){},"length",{value:8}).length!==8}),m=String(String).split("String"),b=n.exports=function(y,v,g){String(v).slice(0,7)==="Symbol("&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),g&&g.getter&&(v="get "+v),g&&g.setter&&(v="set "+v),(!o(y,"name")||c&&y.name!==v)&&l(y,"name",{value:v,configurable:!0}),h&&g&&o(g,"arity")&&y.length!==g.arity&&l(y,"length",{value:g.arity});try{g&&o(g,"constructor")&&g.constructor?i&&l(y,"prototype",{writable:!1}):y.prototype&&(y.prototype=void 0)}catch{}var x=u(y);return o(x,"source")||(x.source=m.join(typeof v=="string"?v:"")),y};Function.prototype.toString=b(function(){return r(this)&&d(this).source||s(this)},"toString")},1626:function(n,a){n.exports=function(e){return typeof e=="function"}},"1a2d":function(n,a,e){var t=e("e330"),r=e("7b0b"),o=t({}.hasOwnProperty);n.exports=Object.hasOwn||function(i,c){return o(r(i),c)}},"1d80":function(n,a,e){var t=e("da84"),r=t.TypeError;n.exports=function(o){if(o==null)throw r("Can't call method on "+o);return o}},"1dde":function(n,a,e){var t=e("d039"),r=e("b622"),o=e("2d00"),i=r("species");n.exports=function(c){return o>=51||!t(function(){var s=[],p=s.constructor={};return p[i]=function(){return{foo:1}},s[c](Boolean).foo!==1})}},"23cb":function(n,a,e){var t=e("5926"),r=Math.max,o=Math.min;n.exports=function(i,c){var s=t(i);return s<0?r(s+c,0):o(s,c)}},"23e7":function(n,a,e){var t=e("da84"),r=e("06cf").f,o=e("9112"),i=e("cb2d"),c=e("6374"),s=e("e893"),p=e("94ca");n.exports=function(u,d){var l,h,m,b,y,v,g=u.target,x=u.global,O=u.stat;if(h=x?t:O?t[g]||c(g,{}):(t[g]||{}).prototype,h)for(m in d){if(y=d[m],u.dontCallGetSet?(v=r(h,m),b=v&&v.value):b=h[m],l=p(x?m:g+(O?".":"#")+m,u.forced),!l&&b!==void 0){if(typeof y==typeof b)continue;s(y,b)}(u.sham||b&&b.sham)&&o(y,"sham",!0),i(h,m,y,u)}}},"241c":function(n,a,e){var t=e("ca84"),r=e("7839"),o=r.concat("length","prototype");a.f=Object.getOwnPropertyNames||function(i){return t(i,o)}},"2d00":function(n,a,e){var t,r,o=e("da84"),i=e("342f"),c=o.process,s=o.Deno,p=c&&c.versions||s&&s.version,u=p&&p.v8;u&&(t=u.split("."),r=t[0]>0&&t[0]<4?1:+(t[0]+t[1])),!r&&i&&(t=i.match(/Edge\/(\d+)/),(!t||t[1]>=74)&&(t=i.match(/Chrome\/(\d+)/),t&&(r=+t[1]))),n.exports=r},"342f":function(n,a,e){var t=e("d066");n.exports=t("navigator","userAgent")||""},"3a9b":function(n,a,e){var t=e("e330");n.exports=t({}.isPrototypeOf)},"3bbe":function(n,a,e){var t=e("da84"),r=e("1626"),o=t.String,i=t.TypeError;n.exports=function(c){if(typeof c=="object"||r(c))return c;throw i("Can't set "+o(c)+" as a prototype")}},"408a":function(n,a,e){var t=e("e330");n.exports=t(1 .valueOf)},"40d5":function(n,a,e){var t=e("d039");n.exports=!t(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})},"44ad":function(n,a,e){var t=e("da84"),r=e("e330"),o=e("d039"),i=e("c6b6"),c=t.Object,s=r("".split);n.exports=o(function(){return!c("z").propertyIsEnumerable(0)})?function(p){return i(p)=="String"?s(p,""):c(p)}:c},"485a":function(n,a,e){var t=e("da84"),r=e("c65b"),o=e("1626"),i=e("861d"),c=t.TypeError;n.exports=function(s,p){var u,d;if(p==="string"&&o(u=s.toString)&&!i(d=r(u,s))||o(u=s.valueOf)&&!i(d=r(u,s))||p!=="string"&&o(u=s.toString)&&!i(d=r(u,s)))return d;throw c("Can't convert object to primitive value")}},4930:function(n,a,e){var t=e("2d00"),r=e("d039");n.exports=!!Object.getOwnPropertySymbols&&!r(function(){var o=Symbol();return!String(o)||!(Object(o)instanceof Symbol)||!Symbol.sham&&t&&t<41})},"4d64":function(n,a,e){var t=e("fc6a"),r=e("23cb"),o=e("07fa"),i=function(c){return function(s,p,u){var d,l=t(s),h=o(l),m=r(u,h);if(c&&p!=p){for(;h>m;)if(d=l[m++],d!=d)return!0}else for(;h>m;m++)if((c||m in l)&&l[m]===p)return c||m||0;return!c&&-1}};n.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(n,a,e){var t=e("5926"),r=Math.min;n.exports=function(o){return o>0?r(t(o),9007199254740991):0}},5692:function(n,a,e){var t=e("c430"),r=e("c6cd");(n.exports=function(o,i){return r[o]||(r[o]=i!==void 0?i:{})})("versions",[]).push({version:"3.22.7",mode:t?"pure":"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.7/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(n,a,e){var t=e("d066"),r=e("e330"),o=e("241c"),i=e("7418"),c=e("825a"),s=r([].concat);n.exports=t("Reflect","ownKeys")||function(p){var u=o.f(c(p)),d=i.f;return d?s(u,d(p)):u}},"577e":function(n,a,e){var t=e("da84"),r=e("f5df"),o=t.String;n.exports=function(i){if(r(i)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return o(i)}},5899:function(n,a){n.exports=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`},"58a8":function(n,a,e){var t=e("e330"),r=e("1d80"),o=e("577e"),i=e("5899"),c=t("".replace),s="["+i+"]",p=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(l){return function(h){var m=o(r(h));return 1&l&&(m=c(m,p,"")),2&l&&(m=c(m,u,"")),m}};n.exports={start:d(1),end:d(2),trim:d(3)}},5926:function(n,a,e){var t=e("b42e");n.exports=function(r){var o=+r;return o!==o||o===0?0:t(o)}},"59ed":function(n,a,e){var t=e("da84"),r=e("1626"),o=e("0d51"),i=t.TypeError;n.exports=function(c){if(r(c))return c;throw i(o(c)+" is not a function")}},"5c6c":function(n,a){n.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(n,a,e){var t=e("83ab"),r=e("1a2d"),o=Function.prototype,i=t&&Object.getOwnPropertyDescriptor,c=r(o,"name"),s=c&&function(){}.name==="something",p=c&&(!t||t&&i(o,"name").configurable);n.exports={EXISTS:c,PROPER:s,CONFIGURABLE:p}},6374:function(n,a,e){var t=e("da84"),r=Object.defineProperty;n.exports=function(o,i){try{r(t,o,{value:i,configurable:!0,writable:!0})}catch{t[o]=i}return i}},"65f0":function(n,a,e){var t=e("0b42");n.exports=function(r,o){return new(t(r))(o===0?0:o)}},"68ee":function(n,a,e){var t=e("e330"),r=e("d039"),o=e("1626"),i=e("f5df"),c=e("d066"),s=e("8925"),p=function(){},u=[],d=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,h=t(l.exec),m=!l.exec(p),b=function(v){if(!o(v))return!1;try{return d(p,u,v),!0}catch{return!1}},y=function(v){if(!o(v))return!1;switch(i(v)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!h(l,s(v))}catch{return!0}};y.sham=!0,n.exports=!d||r(function(){var v;return b(b.call)||!b(Object)||!b(function(){v=!0})||v})?y:b},"69f3":function(n,a,e){var t,r,o,i=e("7f9a"),c=e("da84"),s=e("e330"),p=e("861d"),u=e("9112"),d=e("1a2d"),l=e("c6cd"),h=e("f772"),m=e("d012"),b="Object already initialized",y=c.TypeError,v=c.WeakMap,g=function(w){return o(w)?r(w):t(w,{})},x=function(w){return function(S){var M;if(!p(S)||(M=r(S)).type!==w)throw y("Incompatible receiver, "+w+" required");return M}};if(i||l.state){var O=l.state||(l.state=new v),j=s(O.get),P=s(O.has),N=s(O.set);t=function(w,S){if(P(O,w))throw new y(b);return S.facade=w,N(O,w,S),S},r=function(w){return j(O,w)||{}},o=function(w){return P(O,w)}}else{var T=h("state");m[T]=!0,t=function(w,S){if(d(w,T))throw new y(b);return S.facade=w,u(w,T,S),S},r=function(w){return d(w,T)?w[T]:{}},o=function(w){return d(w,T)}}n.exports={set:t,get:r,has:o,enforce:g,getterFor:x}},7156:function(n,a,e){var t=e("1626"),r=e("861d"),o=e("d2bb");n.exports=function(i,c,s){var p,u;return o&&t(p=c.constructor)&&p!==s&&r(u=p.prototype)&&u!==s.prototype&&o(i,u),i}},7418:function(n,a){a.f=Object.getOwnPropertySymbols},7839:function(n,a){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(n,a,e){var t=e("da84"),r=e("1d80"),o=t.Object;n.exports=function(i){return o(r(i))}},"7f9a":function(n,a,e){var t=e("da84"),r=e("1626"),o=e("8925"),i=t.WeakMap;n.exports=r(i)&&/native code/.test(o(i))},"825a":function(n,a,e){var t=e("da84"),r=e("861d"),o=t.String,i=t.TypeError;n.exports=function(c){if(r(c))return c;throw i(o(c)+" is not an object")}},"83ab":function(n,a,e){var t=e("d039");n.exports=!t(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},"861d":function(n,a,e){var t=e("1626");n.exports=function(r){return typeof r=="object"?r!==null:t(r)}},8875:function(n,a,e){var t,r,o;(function(i,c){r=[],t=c,o=typeof t=="function"?t.apply(a,r):t,o===void 0||(n.exports=o)})(typeof self<"u"&&self,function(){function i(){var c=Object.getOwnPropertyDescriptor(document,"currentScript");if(!c&&"currentScript"in document&&document.currentScript||c&&c.get!==i&&document.currentScript)return document.currentScript;try{throw new Error}catch(x){var s,p,u,d=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,l=/@([^@]*):(\d+):(\d+)\s*$/gi,h=d.exec(x.stack)||l.exec(x.stack),m=h&&h[1]||!1,b=h&&h[2]||!1,y=document.location.href.replace(document.location.hash,""),v=document.getElementsByTagName("script");m===y&&(s=document.documentElement.outerHTML,p=new RegExp("(?:[^\\n]+?\\n){0,"+(b-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),u=s.replace(p,"$1").trim());for(var g=0;g<v.length;g++)if(v[g].readyState==="interactive"||v[g].src===m||m===y&&v[g].innerHTML&&v[g].innerHTML.trim()===u)return v[g];return null}}return i})},8925:function(n,a,e){var t=e("e330"),r=e("1626"),o=e("c6cd"),i=t(Function.toString);r(o.inspectSource)||(o.inspectSource=function(c){return i(c)}),n.exports=o.inspectSource},"90e3":function(n,a,e){var t=e("e330"),r=0,o=Math.random(),i=t(1 .toString);n.exports=function(c){return"Symbol("+(c===void 0?"":c)+")_"+i(++r+o,36)}},9112:function(n,a,e){var t=e("83ab"),r=e("9bf2"),o=e("5c6c");n.exports=t?function(i,c,s){return r.f(i,c,o(1,s))}:function(i,c,s){return i[c]=s,i}},"94ca":function(n,a,e){var t=e("d039"),r=e("1626"),o=/#|\.prototype\./,i=function(d,l){var h=s[c(d)];return h==u||h!=p&&(r(l)?t(l):!!l)},c=i.normalize=function(d){return String(d).replace(o,".").toLowerCase()},s=i.data={},p=i.NATIVE="N",u=i.POLYFILL="P";n.exports=i},"9bf2":function(n,a,e){var t=e("da84"),r=e("83ab"),o=e("0cfb"),i=e("aed9"),c=e("825a"),s=e("a04b"),p=t.TypeError,u=Object.defineProperty,d=Object.getOwnPropertyDescriptor,l="enumerable",h="configurable",m="writable";a.f=r?i?function(b,y,v){if(c(b),y=s(y),c(v),typeof b=="function"&&y==="prototype"&&"value"in v&&m in v&&!v[m]){var g=d(b,y);g&&g[m]&&(b[y]=v.value,v={configurable:h in v?v[h]:g[h],enumerable:l in v?v[l]:g[l],writable:!1})}return u(b,y,v)}:u:function(b,y,v){if(c(b),y=s(y),c(v),o)try{return u(b,y,v)}catch{}if("get"in v||"set"in v)throw p("Accessors not supported");return"value"in v&&(b[y]=v.value),b}},a04b:function(n,a,e){var t=e("c04e"),r=e("d9b5");n.exports=function(o){var i=t(o,"string");return r(i)?i:i+""}},a9e3:function(n,a,e){var t=e("83ab"),r=e("da84"),o=e("e330"),i=e("94ca"),c=e("cb2d"),s=e("1a2d"),p=e("7156"),u=e("3a9b"),d=e("d9b5"),l=e("c04e"),h=e("d039"),m=e("241c").f,b=e("06cf").f,y=e("9bf2").f,v=e("408a"),g=e("58a8").trim,x="Number",O=r[x],j=O.prototype,P=r.TypeError,N=o("".slice),T=o("".charCodeAt),w=function(C){var A=l(C,"number");return typeof A=="bigint"?A:S(A)},S=function(C){var A,D,Y,W,B,Q,z,J,k=l(C,"number");if(d(k))throw P("Cannot convert a Symbol value to a number");if(typeof k=="string"&&k.length>2){if(k=g(k),A=T(k,0),A===43||A===45){if(D=T(k,2),D===88||D===120)return NaN}else if(A===48){switch(T(k,1)){case 66:case 98:Y=2,W=49;break;case 79:case 111:Y=8,W=55;break;default:return+k}for(B=N(k,2),Q=B.length,z=0;z<Q;z++)if(J=T(B,z),J<48||J>W)return NaN;return parseInt(B,Y)}}return+k};if(i(x,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var M,I=function(C){var A=arguments.length<1?0:O(w(C)),D=this;return u(j,D)&&h(function(){v(D)})?p(Object(A),D,I):A},E=t?m(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;E.length>$;$++)s(O,M=E[$])&&!s(I,M)&&y(I,M,b(O,M));I.prototype=j,j.constructor=I,c(r,x,I,{constructor:!0})}},aed9:function(n,a,e){var t=e("83ab"),r=e("d039");n.exports=t&&r(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},b0c0:function(n,a,e){var t=e("83ab"),r=e("5e77").EXISTS,o=e("e330"),i=e("9bf2").f,c=Function.prototype,s=o(c.toString),p=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=o(p.exec),d="name";t&&!r&&i(c,d,{configurable:!0,get:function(){try{return u(p,s(this))[1]}catch{return""}}})},b42e:function(n,a){var e=Math.ceil,t=Math.floor;n.exports=Math.trunc||function(r){var o=+r;return(o>0?t:e)(o)}},b622:function(n,a,e){var t=e("da84"),r=e("5692"),o=e("1a2d"),i=e("90e3"),c=e("4930"),s=e("fdbf"),p=r("wks"),u=t.Symbol,d=u&&u.for,l=s?u:u&&u.withoutSetter||i;n.exports=function(h){if(!o(p,h)||!c&&typeof p[h]!="string"){var m="Symbol."+h;c&&o(u,h)?p[h]=u[h]:p[h]=s&&d?d(m):l(m)}return p[h]}},b727:function(n,a,e){var t=e("0366"),r=e("e330"),o=e("44ad"),i=e("7b0b"),c=e("07fa"),s=e("65f0"),p=r([].push),u=function(d){var l=d==1,h=d==2,m=d==3,b=d==4,y=d==6,v=d==7,g=d==5||y;return function(x,O,j,P){for(var N,T,w=i(x),S=o(w),M=t(O,j),I=c(S),E=0,$=P||s,C=l?$(x,I):h||v?$(x,0):void 0;I>E;E++)if((g||E in S)&&(N=S[E],T=M(N,E,w),d))if(l)C[E]=T;else if(T)switch(d){case 3:return!0;case 5:return N;case 6:return E;case 2:p(C,N)}else switch(d){case 4:return!1;case 7:p(C,N)}return y?-1:m||b?b:C}};n.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c04e:function(n,a,e){var t=e("da84"),r=e("c65b"),o=e("861d"),i=e("d9b5"),c=e("dc4a"),s=e("485a"),p=e("b622"),u=t.TypeError,d=p("toPrimitive");n.exports=function(l,h){if(!o(l)||i(l))return l;var m,b=c(l,d);if(b){if(h===void 0&&(h="default"),m=r(b,l,h),!o(m)||i(m))return m;throw u("Can't convert object to primitive value")}return h===void 0&&(h="number"),s(l,h)}},c430:function(n,a){n.exports=!1},c65b:function(n,a,e){var t=e("40d5"),r=Function.prototype.call;n.exports=t?r.bind(r):function(){return r.apply(r,arguments)}},c6b6:function(n,a,e){var t=e("e330"),r=t({}.toString),o=t("".slice);n.exports=function(i){return o(r(i),8,-1)}},c6cd:function(n,a,e){var t=e("da84"),r=e("6374"),o="__core-js_shared__",i=t[o]||r(o,{});n.exports=i},c8ba:function(n,a){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch{typeof window=="object"&&(e=window)}n.exports=e},ca84:function(n,a,e){var t=e("e330"),r=e("1a2d"),o=e("fc6a"),i=e("4d64").indexOf,c=e("d012"),s=t([].push);n.exports=function(p,u){var d,l=o(p),h=0,m=[];for(d in l)!r(c,d)&&r(l,d)&&s(m,d);for(;u.length>h;)r(l,d=u[h++])&&(~i(m,d)||s(m,d));return m}},cb2d:function(n,a,e){var t=e("1626"),r=e("9112"),o=e("13d2"),i=e("6374");n.exports=function(c,s,p,u){u||(u={});var d=u.enumerable,l=u.name!==void 0?u.name:s;return t(p)&&o(p,l,u),u.global?d?c[s]=p:i(s,p):(u.unsafe?c[s]&&(d=!0):delete c[s],d?c[s]=p:r(c,s,p)),c}},cc12:function(n,a,e){var t=e("da84"),r=e("861d"),o=t.document,i=r(o)&&r(o.createElement);n.exports=function(c){return i?o.createElement(c):{}}},d012:function(n,a){n.exports={}},d039:function(n,a){n.exports=function(e){try{return!!e()}catch{return!0}}},d066:function(n,a,e){var t=e("da84"),r=e("1626"),o=function(i){return r(i)?i:void 0};n.exports=function(i,c){return arguments.length<2?o(t[i]):t[i]&&t[i][c]}},d1e7:function(n,a,e){var t={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!t.call({1:2},1);a.f=o?function(i){var c=r(this,i);return!!c&&c.enumerable}:t},d2bb:function(n,a,e){var t=e("e330"),r=e("825a"),o=e("3bbe");n.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var i,c=!1,s={};try{i=t(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),i(s,[]),c=s instanceof Array}catch{}return function(p,u){return r(p),o(u),c?i(p,u):p.__proto__=u,p}}():void 0)},d81d:function(n,a,e){var t=e("23e7"),r=e("b727").map,o=e("1dde"),i=o("map");t({target:"Array",proto:!0,forced:!i},{map:function(c){return r(this,c,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(n,a,e){var t=e("da84"),r=e("d066"),o=e("1626"),i=e("3a9b"),c=e("fdbf"),s=t.Object;n.exports=c?function(p){return typeof p=="symbol"}:function(p){var u=r("Symbol");return o(u)&&i(u.prototype,s(p))}},da84:function(n,a,e){(function(t){var r=function(o){return o&&o.Math==Math&&o};n.exports=r(typeof globalThis=="object"&&globalThis)||r(typeof window=="object"&&window)||r(typeof self=="object"&&self)||r(typeof t=="object"&&t)||function(){return this}()||Function("return this")()}).call(this,e("c8ba"))},dc4a:function(n,a,e){var t=e("59ed");n.exports=function(r,o){var i=r[o];return i==null?void 0:t(i)}},e330:function(n,a,e){var t=e("40d5"),r=Function.prototype,o=r.bind,i=r.call,c=t&&o.bind(i,i);n.exports=t?function(s){return s&&c(s)}:function(s){return s&&function(){return i.apply(s,arguments)}}},e893:function(n,a,e){var t=e("1a2d"),r=e("56ef"),o=e("06cf"),i=e("9bf2");n.exports=function(c,s,p){for(var u=r(s),d=i.f,l=o.f,h=0;h<u.length;h++){var m=u[h];t(c,m)||p&&t(p,m)||d(c,m,l(s,m))}}},e8b5:function(n,a,e){var t=e("c6b6");n.exports=Array.isArray||function(r){return t(r)=="Array"}},f5df:function(n,a,e){var t=e("da84"),r=e("00ee"),o=e("1626"),i=e("c6b6"),c=e("b622"),s=c("toStringTag"),p=t.Object,u=i(function(){return arguments}())=="Arguments",d=function(l,h){try{return l[h]}catch{}};n.exports=r?i:function(l){var h,m,b;return l===void 0?"Undefined":l===null?"Null":typeof(m=d(h=p(l),s))=="string"?m:u?i(h):(b=i(h))=="Object"&&o(h.callee)?"Arguments":b}},f772:function(n,a,e){var t=e("5692"),r=e("90e3"),o=t("keys");n.exports=function(i){return o[i]||(o[i]=r(i))}},fb15:function(n,a,e){if(e.r(a),e.d(a,"install",function(){return b}),e.d(a,"Observer",function(){return h}),typeof window<"u"){var t=window.document.currentScript,r=e("8875");t=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var o=t&&t.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(e.p=o[1])}e("d81d"),e("b0c0");var i=function(){var v=this,g=v.$createElement,x=v._self._c||g;return x("div",[v._t("default")],2)},c=[],s=(e("a9e3"),{name:"observer",data:function(){return{observer:null}},props:{root:{type:[HTMLElement,window],default:null},rootMargin:{type:[String,Number],default:"0px"},threshold:{type:[Array,Number],default:0}},methods:{unobserve:function(){this.observer.unobserve(this.$el)}},mounted:function(){var v=this,g={root:this.root,rootMargin:this.rootMargin,threshold:this.threshold};this.observer=new IntersectionObserver(function(x){v.$emit("on-change",x[0],v.unobserve)},g),this.observer.observe(this.$el)},beforeDestroy:function(){this.observer&&(this.unobserve(),this.observer=null)}}),p=s;function u(v,g,x,O,j,P,N,T){var w,S=typeof v=="function"?v.options:v;if(g&&(S.render=g,S.staticRenderFns=x,S._compiled=!0),O&&(S.functional=!0),P&&(S._scopeId="data-v-"+P),N?(w=function(E){E=E||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,E||typeof __VUE_SSR_CONTEXT__>"u"||(E=__VUE_SSR_CONTEXT__),j&&j.call(this,E),E&&E._registeredComponents&&E._registeredComponents.add(N)},S._ssrRegister=w):j&&(w=T?function(){j.call(this,(S.functional?this.parent:this).$root.$options.shadowRoot)}:j),w)if(S.functional){S._injectStyles=w;var M=S.render;S.render=function(E,$){return w.call($),M(E,$)}}else{var I=S.beforeCreate;S.beforeCreate=I?[].concat(I,w):[w]}return{exports:v,options:S}}var d=u(p,i,c,!1,null,null,null),l=d.exports,h=l,m=[h],b=function(v){m.map(function(g){v.component(g.name,g)})};typeof window<"u"&&window.Vue&&b(window.Vue);var y=h;a.default=y},fc6a:function(n,a,e){var t=e("44ad"),r=e("1d80");n.exports=function(o){return t(r(o))}},fdbf:function(n,a,e){var t=e("4930");n.exports=t&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}})})})(ie);const Ie=ce(ie.exports);Z.setOptions({renderer:new Z.Renderer,highlight:function(f,_){const n=oe.getLanguage(_)?_:"plaintext";return oe.highlight(f,{language:n}).value},langPrefix:"hljs language-",pedantic:!1,gfm:!0,breaks:!1,sanitize:!1,smartypants:!1,xhtml:!1});const Me=ue({name:"ProjectView",components:{BaseButton:se,Icon:fe,AppModal:_e,BaseTextInput:de,AppEmptyState:we,Spinner:pe,Timeago:Ne,Observer:Ie},data:()=>({showProjectModal:!1,addProject:{name:"",description:"",url:"",image:"",github:"",technologies:""}}),mounted(){this.$watch(()=>this.$route.params,()=>{this.fetchNoteRequests()},{immediate:!0})},computed:{...le(ne,["noteEntries","noOfRows","pageIndex","isLoading"])},methods:{...he(ne,["fetchAllNotes"]),async fetchNoteRequests(){await this.fetchAllNotes()},handleIntersection(){alert("fool"),this.fetchNoteRequests()},editNote(f){this.$router.push({name:"view-note",params:{noteId:String(f)}})},renderMarkDown(f){return Z.parse(String(f))}}});const Ae=f=>(be("data-v-19d35f11"),f=f(),ye(),f),ke={key:0,class:"fetching__data"},Ce=Ae(()=>R("p",null,"fetching entries",-1)),Pe={key:3},$e=["onClick"],De={class:"note__entry__header"},Fe={class:"trim__text"},Re={class:"note__entry__header__date"},Le={class:"note__entry__content"},Be=["innerHTML"];function ze(f,_,n,a,e,t){var c,s,p;const r=K("Spinner"),o=K("AppEmptyState"),i=K("AppNetworkError");return F(),L(te,null,[f.isLoading?(F(),L("div",ke,[me(r),Ce])):V("",!0),((c=f.noteEntries)==null?void 0:c.length)===0?(F(),ee(o,{key:1})):V("",!0),!f.isLoading&&((s=f.noteEntries)==null?void 0:s.length)===0?(F(),ee(i,{key:2})):V("",!0),Number((p=f.noteEntries)==null?void 0:p.length)>0&&!f.isLoading?(F(),L("div",Pe,[(F(!0),L(te,null,ge(f.noteEntries,u=>(F(),L("div",{class:"note__entry",key:u.id.toString(),onClick:d=>f.editNote(u.id.toString())},[R("div",De,[R("h3",Fe,re(u.title),1),R("p",Re,re(new Date(u.dateAdded.toString()).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"short",day:"numeric"})),1)]),R("div",Le,[R("p",{class:"trim__text",innerHTML:f.renderMarkDown(u.content)},null,8,Be)])],8,$e))),128))])):V("",!0)],64)}const qe=ve(Me,[["render",ze],["__scopeId","data-v-19d35f11"]]);export{qe as default};
