(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function pi(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function hi(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=et(r)?Zs(r):hi(r);if(i)for(const a in i)e[a]=i[a]}return e}else{if(et(t))return t;if(X(t))return t}}const Xs=/;(?![^(]*\))/g,Js=/:([^]+)/,Qs=/\/\*.*?\*\//gs;function Zs(t){const e={};return t.replace(Qs,"").split(Xs).forEach(n=>{if(n){const r=n.split(Js);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zn(t){let e="";if(et(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=Zn(t[n]);r&&(e+=r+" ")}else if(X(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",el=pi(tl);function po(t){return!!t||t===""}function nl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=tr(t[r],e[r]);return n}function tr(t,e){if(t===e)return!0;let n=ia(t),r=ia(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ge(t),r=Ge(e),n||r)return t===e;if(n=L(t),r=L(e),n||r)return n&&r?nl(t,e):!1;if(n=X(t),r=X(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,a=Object.keys(e).length;if(i!==a)return!1;for(const o in t){const s=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(s&&!l||!s&&l||!tr(t[o],e[o]))return!1}}return String(t)===String(e)}function rl(t,e){return t.findIndex(n=>tr(n,e))}const Nn=t=>et(t)?t:t==null?"":L(t)||X(t)&&(t.toString===vo||!R(t.toString))?JSON.stringify(t,ho,2):String(t),ho=(t,e)=>e&&e.__v_isRef?ho(t,e.value):Ae(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:nr(e)?{[`Set(${e.size})`]:[...e.values()]}:X(e)&&!L(e)&&!bo(e)?String(e):e,q={},Oe=[],Et=()=>{},il=()=>!1,al=/^on[^a-z]/,er=t=>al.test(t),gi=t=>t.startsWith("onUpdate:"),ft=Object.assign,vi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ol=Object.prototype.hasOwnProperty,z=(t,e)=>ol.call(t,e),L=Array.isArray,Ae=t=>fn(t)==="[object Map]",nr=t=>fn(t)==="[object Set]",ia=t=>fn(t)==="[object Date]",R=t=>typeof t=="function",et=t=>typeof t=="string",Ge=t=>typeof t=="symbol",X=t=>t!==null&&typeof t=="object",go=t=>X(t)&&R(t.then)&&R(t.catch),vo=Object.prototype.toString,fn=t=>vo.call(t),sl=t=>fn(t).slice(8,-1),bo=t=>fn(t)==="[object Object]",bi=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ln=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ll=/-(\w)/g,jt=rr(t=>t.replace(ll,(e,n)=>n?n.toUpperCase():"")),fl=/\B([A-Z])/g,Ne=rr(t=>t.replace(fl,"-$1").toLowerCase()),ir=rr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sr=rr(t=>t?`on${ir(t)}`:""),Un=(t,e)=>!Object.is(t,e),Fn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xe=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let aa;const cl=()=>aa||(aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Mt;class yo{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function ul(t){return new yo(t)}function dl(t,e=Mt){e&&e.active&&e.effects.push(t)}const yi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_o=t=>(t.w&Qt)>0,wo=t=>(t.n&Qt)>0,ml=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qt},pl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];_o(i)&&!wo(i)?i.delete(t):e[n++]=i,i.w&=~Qt,i.n&=~Qt}e.length=n}},Dr=new WeakMap;let Ue=0,Qt=1;const zr=30;let xt;const me=Symbol(""),Ur=Symbol("");class _i{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dl(this,r)}run(){if(!this.active)return this.fn();let e=xt,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xt,xt=this,Xt=!0,Qt=1<<++Ue,Ue<=zr?ml(this):oa(this),this.fn()}finally{Ue<=zr&&pl(this),Qt=1<<--Ue,xt=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(oa(this),this.onStop&&this.onStop(),this.active=!1)}}function oa(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const xo=[];function Le(){xo.push(Xt),Xt=!1}function Fe(){const t=xo.pop();Xt=t===void 0?!0:t}function gt(t,e,n){if(Xt&&xt){let r=Dr.get(t);r||Dr.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=yi()),ko(i)}}function ko(t,e){let n=!1;Ue<=zr?wo(t)||(t.n|=Qt,n=!_o(t)):n=!t.has(xt),n&&(t.add(xt),xt.deps.push(t))}function Ut(t,e,n,r,i,a){const o=Dr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&L(t)){const l=Xe(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":L(t)?bi(n)&&s.push(o.get("length")):(s.push(o.get(me)),Ae(t)&&s.push(o.get(Ur)));break;case"delete":L(t)||(s.push(o.get(me)),Ae(t)&&s.push(o.get(Ur)));break;case"set":Ae(t)&&s.push(o.get(me));break}if(s.length===1)s[0]&&Hr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Hr(yi(l))}}function Hr(t,e){const n=L(t)?t:[...t];for(const r of n)r.computed&&sa(r);for(const r of n)r.computed||sa(r)}function sa(t,e){(t!==xt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const hl=pi("__proto__,__v_isRef,__isVue"),Oo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ge)),gl=wi(),vl=wi(!1,!0),bl=wi(!0),la=yl();function yl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=W(this);for(let a=0,o=this.length;a<o;a++)gt(r,"get",a+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Le();const r=W(this)[e].apply(this,n);return Fe(),r}}),t}function wi(t=!1,e=!1){return function(r,i,a){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&a===(t?e?Fl:Io:e?So:Co).get(r))return r;const o=L(r);if(!t&&o&&z(la,i))return Reflect.get(la,i,a);const s=Reflect.get(r,i,a);return(Ge(i)?Oo.has(i):hl(i))||(t||gt(r,"get",i),e)?s:st(s)?o&&bi(i)?s:s.value:X(s)?t?Po(s):or(s):s}}const _l=Ao(),wl=Ao(!0);function Ao(t=!1){return function(n,r,i,a){let o=n[r];if(Je(o)&&st(o)&&!st(i))return!1;if(!t&&(!Br(i)&&!Je(i)&&(o=W(o),i=W(i)),!L(n)&&st(o)&&!st(i)))return o.value=i,!0;const s=L(n)&&bi(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,i,a);return n===W(a)&&(s?Un(i,o)&&Ut(n,"set",r,i):Ut(n,"add",r,i)),l}}function xl(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ut(t,"delete",e,void 0),r}function kl(t,e){const n=Reflect.has(t,e);return(!Ge(e)||!Oo.has(e))&&gt(t,"has",e),n}function Ol(t){return gt(t,"iterate",L(t)?"length":me),Reflect.ownKeys(t)}const Eo={get:gl,set:_l,deleteProperty:xl,has:kl,ownKeys:Ol},Al={get:bl,set(t,e){return!0},deleteProperty(t,e){return!0}},El=ft({},Eo,{get:vl,set:wl}),xi=t=>t,ar=t=>Reflect.getPrototypeOf(t);function vn(t,e,n=!1,r=!1){t=t.__v_raw;const i=W(t),a=W(e);n||(e!==a&&gt(i,"get",e),gt(i,"get",a));const{has:o}=ar(i),s=r?xi:n?Ei:Ai;if(o.call(i,e))return s(t.get(e));if(o.call(i,a))return s(t.get(a));t!==i&&t.get(e)}function bn(t,e=!1){const n=this.__v_raw,r=W(n),i=W(t);return e||(t!==i&&gt(r,"has",t),gt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function yn(t,e=!1){return t=t.__v_raw,!e&&gt(W(t),"iterate",me),Reflect.get(t,"size",t)}function fa(t){t=W(t);const e=W(this);return ar(e).has.call(e,t)||(e.add(t),Ut(e,"add",t,t)),this}function ca(t,e){e=W(e);const n=W(this),{has:r,get:i}=ar(n);let a=r.call(n,t);a||(t=W(t),a=r.call(n,t));const o=i.call(n,t);return n.set(t,e),a?Un(e,o)&&Ut(n,"set",t,e):Ut(n,"add",t,e),this}function ua(t){const e=W(this),{has:n,get:r}=ar(e);let i=n.call(e,t);i||(t=W(t),i=n.call(e,t)),r&&r.call(e,t);const a=e.delete(t);return i&&Ut(e,"delete",t,void 0),a}function da(){const t=W(this),e=t.size!==0,n=t.clear();return e&&Ut(t,"clear",void 0,void 0),n}function _n(t,e){return function(r,i){const a=this,o=a.__v_raw,s=W(o),l=e?xi:t?Ei:Ai;return!t&&gt(s,"iterate",me),o.forEach((c,f)=>r.call(i,l(c),l(f),a))}}function wn(t,e,n){return function(...r){const i=this.__v_raw,a=W(i),o=Ae(a),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),f=n?xi:e?Ei:Ai;return!e&&gt(a,"iterate",l?Ur:me),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[f(m[0]),f(m[1])]:f(m),done:h}},[Symbol.iterator](){return this}}}}function qt(t){return function(...e){return t==="delete"?!1:this}}function Cl(){const t={get(a){return vn(this,a)},get size(){return yn(this)},has:bn,add:fa,set:ca,delete:ua,clear:da,forEach:_n(!1,!1)},e={get(a){return vn(this,a,!1,!0)},get size(){return yn(this)},has:bn,add:fa,set:ca,delete:ua,clear:da,forEach:_n(!1,!0)},n={get(a){return vn(this,a,!0)},get size(){return yn(this,!0)},has(a){return bn.call(this,a,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:_n(!0,!1)},r={get(a){return vn(this,a,!0,!0)},get size(){return yn(this,!0)},has(a){return bn.call(this,a,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:_n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=wn(a,!1,!1),n[a]=wn(a,!0,!1),e[a]=wn(a,!1,!0),r[a]=wn(a,!0,!0)}),[t,n,e,r]}const[Sl,Il,Pl,Tl]=Cl();function ki(t,e){const n=e?t?Tl:Pl:t?Il:Sl;return(r,i,a)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(z(n,i)&&i in r?n:r,i,a)}const Ml={get:ki(!1,!1)},Nl={get:ki(!1,!0)},Ll={get:ki(!0,!1)},Co=new WeakMap,So=new WeakMap,Io=new WeakMap,Fl=new WeakMap;function Rl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jl(t){return t.__v_skip||!Object.isExtensible(t)?0:Rl(sl(t))}function or(t){return Je(t)?t:Oi(t,!1,Eo,Ml,Co)}function $l(t){return Oi(t,!1,El,Nl,So)}function Po(t){return Oi(t,!0,Al,Ll,Io)}function Oi(t,e,n,r,i){if(!X(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=i.get(t);if(a)return a;const o=jl(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return i.set(t,s),s}function Ee(t){return Je(t)?Ee(t.__v_raw):!!(t&&t.__v_isReactive)}function Je(t){return!!(t&&t.__v_isReadonly)}function Br(t){return!!(t&&t.__v_isShallow)}function To(t){return Ee(t)||Je(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Mo(t){return Hn(t,"__v_skip",!0),t}const Ai=t=>X(t)?or(t):t,Ei=t=>X(t)?Po(t):t;function Dl(t){Xt&&xt&&(t=W(t),ko(t.dep||(t.dep=yi())))}function zl(t,e){t=W(t),t.dep&&Hr(t.dep)}function st(t){return!!(t&&t.__v_isRef===!0)}function Ul(t){return st(t)?t.value:t}const Hl={get:(t,e,n)=>Ul(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return st(i)&&!st(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function No(t){return Ee(t)?t:new Proxy(t,Hl)}var Lo;class Bl{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Lo]=!1,this._dirty=!0,this.effect=new _i(e,()=>{this._dirty||(this._dirty=!0,zl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=W(this);return Dl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Lo="__v_isReadonly";function Wl(t,e,n=!1){let r,i;const a=R(t);return a?(r=t,i=Et):(r=t.get,i=t.set),new Bl(r,i,a||!i,n)}function Jt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(a){sr(a,e,n)}return i}function Ct(t,e,n,r){if(R(t)){const a=Jt(t,e,n,r);return a&&go(a)&&a.catch(o=>{sr(o,e,n)}),a}const i=[];for(let a=0;a<t.length;a++)i.push(Ct(t[a],e,n,r));return i}function sr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let a=e.parent;const o=e.proxy,s=n;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,o,s)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,s]);return}}Yl(t,n,i,r)}function Yl(t,e,n,r=!0){console.error(t)}let Qe=!1,Wr=!1;const it=[];let Ft=0;const Ce=[];let zt=null,se=0;const Fo=Promise.resolve();let Ci=null;function Kl(t){const e=Ci||Fo;return t?e.then(this?t.bind(this):t):e}function ql(t){let e=Ft+1,n=it.length;for(;e<n;){const r=e+n>>>1;Ze(it[r])<t?e=r+1:n=r}return e}function Si(t){(!it.length||!it.includes(t,Qe&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?it.push(t):it.splice(ql(t.id),0,t),Ro())}function Ro(){!Qe&&!Wr&&(Wr=!0,Ci=Fo.then($o))}function Vl(t){const e=it.indexOf(t);e>Ft&&it.splice(e,1)}function Gl(t){L(t)?Ce.push(...t):(!zt||!zt.includes(t,t.allowRecurse?se+1:se))&&Ce.push(t),Ro()}function ma(t,e=Qe?Ft+1:0){for(;e<it.length;e++){const n=it[e];n&&n.pre&&(it.splice(e,1),e--,n())}}function jo(t){if(Ce.length){const e=[...new Set(Ce)];if(Ce.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,r)=>Ze(n)-Ze(r)),se=0;se<zt.length;se++)zt[se]();zt=null,se=0}}const Ze=t=>t.id==null?1/0:t.id,Xl=(t,e)=>{const n=Ze(t)-Ze(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $o(t){Wr=!1,Qe=!0,it.sort(Xl);const e=Et;try{for(Ft=0;Ft<it.length;Ft++){const n=it[Ft];n&&n.active!==!1&&Jt(n,null,14)}}finally{Ft=0,it.length=0,jo(),Qe=!1,Ci=null,(it.length||Ce.length)&&$o()}}function Jl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let i=n;const a=e.startsWith("update:"),o=a&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[f]||q;h&&(i=n.map(y=>et(y)?y.trim():y)),m&&(i=n.map(Xe))}let s,l=r[s=Sr(e)]||r[s=Sr(jt(e))];!l&&a&&(l=r[s=Sr(Ne(e))]),l&&Ct(l,t,6,i);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Ct(c,t,6,i)}}function Do(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const a=t.emits;let o={},s=!1;if(!R(t)){const l=c=>{const f=Do(c,e,!0);f&&(s=!0,ft(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!s?(X(t)&&r.set(t,null),null):(L(a)?a.forEach(l=>o[l]=null):ft(o,a),X(t)&&r.set(t,o),o)}function lr(t,e){return!t||!er(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Ne(e))||z(t,e))}let yt=null,zo=null;function Bn(t){const e=yt;return yt=t,zo=t&&t.type.__scopeId||null,e}function Ql(t,e=yt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&ka(-1);const a=Bn(e);let o;try{o=t(...i)}finally{Bn(a),r._d&&ka(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:m,data:h,setupState:y,ctx:N,inheritAttrs:P}=t;let D,x;const C=Bn(t);try{if(n.shapeFlag&4){const j=i||r;D=Lt(f.call(j,j,m,a,y,h,N)),x=l}else{const j=e;D=Lt(j.length>1?j(a,{attrs:l,slots:s,emit:c}):j(a,null)),x=e.props?l:Zl(l)}}catch(j){Ye.length=0,sr(j,t,1),D=lt(tn)}let E=D;if(x&&P!==!1){const j=Object.keys(x),{shapeFlag:H}=E;j.length&&H&7&&(o&&j.some(gi)&&(x=tf(x,o)),E=Pe(E,x))}return n.dirs&&(E=Pe(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),D=E,Bn(C),D}const Zl=t=>{let e;for(const n in t)(n==="class"||n==="style"||er(n))&&((e||(e={}))[n]=t[n]);return e},tf=(t,e)=>{const n={};for(const r in t)(!gi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ef(t,e,n){const{props:r,children:i,component:a}=t,{props:o,children:s,patchFlag:l}=e,c=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?pa(r,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const h=f[m];if(o[h]!==r[h]&&!lr(c,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?pa(r,o,c):!0:!!o;return!1}function pa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(e[a]!==t[a]&&!lr(n,a))return!0}return!1}function nf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const rf=t=>t.__isSuspense;function af(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Gl(t)}function of(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=nt||yt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&R(e)?e.call(r.proxy):e}}const xn={};function Se(t,e,n){return Uo(t,e,n)}function Uo(t,e,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=q){const s=nt;let l,c=!1,f=!1;if(st(t)?(l=()=>t.value,c=Br(t)):Ee(t)?(l=()=>t,r=!0):L(t)?(f=!0,c=t.some(E=>Ee(E)||Br(E)),l=()=>t.map(E=>{if(st(E))return E.value;if(Ee(E))return ce(E);if(R(E))return Jt(E,s,2)})):R(t)?e?l=()=>Jt(t,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ct(t,s,3,[h])}:l=Et,e&&r){const E=l;l=()=>ce(E())}let m,h=E=>{m=x.onStop=()=>{Jt(E,s,4)}},y;if(nn)if(h=Et,e?n&&Ct(e,s,3,[l(),f?[]:void 0,h]):l(),i==="sync"){const E=ec();y=E.__watcherHandles||(E.__watcherHandles=[])}else return Et;let N=f?new Array(t.length).fill(xn):xn;const P=()=>{if(x.active)if(e){const E=x.run();(r||c||(f?E.some((j,H)=>Un(j,N[H])):Un(E,N)))&&(m&&m(),Ct(e,s,3,[E,N===xn?void 0:f&&N[0]===xn?[]:N,h]),N=E)}else x.run()};P.allowRecurse=!!e;let D;i==="sync"?D=P:i==="post"?D=()=>mt(P,s&&s.suspense):(P.pre=!0,s&&(P.id=s.uid),D=()=>Si(P));const x=new _i(l,D);e?n?P():N=x.run():i==="post"?mt(x.run.bind(x),s&&s.suspense):x.run();const C=()=>{x.stop(),s&&s.scope&&vi(s.scope.effects,x)};return y&&y.push(C),C}function sf(t,e,n){const r=this.proxy,i=et(t)?t.includes(".")?Ho(r,t):()=>r[t]:t.bind(r,r);let a;R(e)?a=e:(a=e.handler,n=e);const o=nt;Te(this);const s=Uo(i,a.bind(r),n);return o?Te(o):pe(),s}function Ho(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ce(t,e){if(!X(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),st(t))ce(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)ce(t[n],e);else if(nr(t)||Ae(t))t.forEach(n=>{ce(n,e)});else if(bo(t))for(const n in t)ce(t[n],e);return t}function Ii(t){return R(t)?{setup:t,name:t.name}:t}const Rn=t=>!!t.type.__asyncLoader,Bo=t=>t.type.__isKeepAlive;function lf(t,e){Wo(t,"a",e)}function ff(t,e){Wo(t,"da",e)}function Wo(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fr(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Bo(i.parent.vnode)&&cf(r,e,n,i),i=i.parent}}function cf(t,e,n,r){const i=fr(e,t,r,!0);Yo(()=>{vi(r[e],i)},n)}function fr(t,e,n=nt,r=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Le(),Te(n);const s=Ct(e,n,t,o);return pe(),Fe(),s});return r?i.unshift(a):i.push(a),a}}const Yt=t=>(e,n=nt)=>(!nn||t==="sp")&&fr(t,(...r)=>e(...r),n),uf=Yt("bm"),df=Yt("m"),mf=Yt("bu"),pf=Yt("u"),hf=Yt("bum"),Yo=Yt("um"),gf=Yt("sp"),vf=Yt("rtg"),bf=Yt("rtc");function yf(t,e=nt){fr("ec",t,e)}function ha(t,e){const n=yt;if(n===null)return t;const r=pr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[o,s,l,c=q]=e[a];o&&(R(o)&&(o={mounted:o,updated:o}),o.deep&&ce(s),i.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return t}function ie(t,e,n,r){const i=t.dirs,a=e&&e.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Le(),Ct(l,n,8,[t.el,s,t,e]),Fe())}}const Ko="components";function jn(t,e){return wf(Ko,t,!0,e)||t}const _f=Symbol();function wf(t,e,n=!0,r=!1){const i=yt||nt;if(i){const a=i.type;if(t===Ko){const s=Qf(a,!1);if(s&&(s===e||s===jt(e)||s===ir(jt(e))))return a}const o=ga(i[t]||a[t],e)||ga(i.appContext[t],e);return!o&&r?a:o}}function ga(t,e){return t&&(t[e]||t[jt(e)]||t[ir(jt(e))])}const Yr=t=>t?ns(t)?pr(t)||t.proxy:Yr(t.parent):null,We=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yr(t.parent),$root:t=>Yr(t.root),$emit:t=>t.emit,$options:t=>Pi(t),$forceUpdate:t=>t.f||(t.f=()=>Si(t.update)),$nextTick:t=>t.n||(t.n=Kl.bind(t.proxy)),$watch:t=>sf.bind(t)}),Pr=(t,e)=>t!==q&&!t.__isScriptSetup&&z(t,e),xf={get({_:t},e){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return a[e]}else{if(Pr(r,e))return o[e]=1,r[e];if(i!==q&&z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&z(c,e))return o[e]=3,a[e];if(n!==q&&z(n,e))return o[e]=4,n[e];Kr&&(o[e]=0)}}const f=We[e];let m,h;if(f)return e==="$attrs"&&gt(t,"get",e),f(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==q&&z(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,z(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:a}=t;return Pr(i,e)?(i[e]=n,!0):r!==q&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||t!==q&&z(t,o)||Pr(e,o)||(s=a[0])&&z(s,o)||z(r,o)||z(We,o)||z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Kr=!0;function kf(t){const e=Pi(t),n=t.proxy,r=t.ctx;Kr=!1,e.beforeCreate&&va(e.beforeCreate,t,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:m,mounted:h,beforeUpdate:y,updated:N,activated:P,deactivated:D,beforeDestroy:x,beforeUnmount:C,destroyed:E,unmounted:j,render:H,renderTracked:ut,renderTriggered:rt,errorCaptured:_t,serverPrefetch:bt,expose:$t,inheritAttrs:$e,components:mn,directives:pn,filters:Ar}=e;if(c&&Of(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const J in o){const Y=o[J];R(Y)&&(r[J]=Y.bind(n))}if(i){const J=i.call(n,n);X(J)&&(t.data=or(J))}if(Kr=!0,a)for(const J in a){const Y=a[J],ne=R(Y)?Y.bind(n,n):R(Y.get)?Y.get.bind(n,n):Et,hn=!R(Y)&&R(Y.set)?Y.set.bind(n):Et,re=ht({get:ne,set:hn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>re.value,set:It=>re.value=It})}if(s)for(const J in s)qo(s[J],r,n,J);if(l){const J=R(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{of(Y,J[Y])})}f&&va(f,t,"c");function at(J,Y){L(Y)?Y.forEach(ne=>J(ne.bind(n))):Y&&J(Y.bind(n))}if(at(uf,m),at(df,h),at(mf,y),at(pf,N),at(lf,P),at(ff,D),at(yf,_t),at(bf,ut),at(vf,rt),at(hf,C),at(Yo,j),at(gf,bt),L($t))if($t.length){const J=t.exposed||(t.exposed={});$t.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:ne=>n[Y]=ne})})}else t.exposed||(t.exposed={});H&&t.render===Et&&(t.render=H),$e!=null&&(t.inheritAttrs=$e),mn&&(t.components=mn),pn&&(t.directives=pn)}function Of(t,e,n=Et,r=!1){L(t)&&(t=qr(t));for(const i in t){const a=t[i];let o;X(a)?"default"in a?o=Be(a.from||i,a.default,!0):o=Be(a.from||i):o=Be(a),st(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function va(t,e,n){Ct(L(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qo(t,e,n,r){const i=r.includes(".")?Ho(n,r):()=>n[r];if(et(t)){const a=e[t];R(a)&&Se(i,a)}else if(R(t))Se(i,t.bind(n));else if(X(t))if(L(t))t.forEach(a=>qo(a,e,n,r));else{const a=R(t.handler)?t.handler.bind(n):e[t.handler];R(a)&&Se(i,a,t)}}function Pi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=t.appContext,s=a.get(e);let l;return s?l=s:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Wn(l,c,o,!0)),Wn(l,e,o)),X(e)&&a.set(e,l),l}function Wn(t,e,n,r=!1){const{mixins:i,extends:a}=e;a&&Wn(t,a,n,!0),i&&i.forEach(o=>Wn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Af[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Af={data:ba,props:oe,emits:oe,methods:oe,computed:oe,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:oe,directives:oe,watch:Cf,provide:ba,inject:Ef};function ba(t,e){return e?t?function(){return ft(R(t)?t.call(this,this):t,R(e)?e.call(this,this):e)}:e:t}function Ef(t,e){return oe(qr(t),qr(e))}function qr(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function oe(t,e){return t?ft(ft(Object.create(null),t),e):e}function Cf(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function Sf(t,e,n,r=!1){const i={},a={};Hn(a,mr,1),t.propsDefaults=Object.create(null),Vo(t,e,i,a);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:$l(i):t.type.props?t.props=i:t.props=a,t.attrs=a}function If(t,e,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=t,s=W(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let m=0;m<f.length;m++){let h=f[m];if(lr(t.emitsOptions,h))continue;const y=e[h];if(l)if(z(a,h))y!==a[h]&&(a[h]=y,c=!0);else{const N=jt(h);i[N]=Vr(l,s,N,y,t,!1)}else y!==a[h]&&(a[h]=y,c=!0)}}}else{Vo(t,e,i,a)&&(c=!0);let f;for(const m in s)(!e||!z(e,m)&&((f=Ne(m))===m||!z(e,f)))&&(l?n&&(n[m]!==void 0||n[f]!==void 0)&&(i[m]=Vr(l,s,m,void 0,t,!0)):delete i[m]);if(a!==s)for(const m in a)(!e||!z(e,m))&&(delete a[m],c=!0)}c&&Ut(t,"set","$attrs")}function Vo(t,e,n,r){const[i,a]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(Ln(l))continue;const c=e[l];let f;i&&z(i,f=jt(l))?!a||!a.includes(f)?n[f]=c:(s||(s={}))[f]=c:lr(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(a){const l=W(n),c=s||q;for(let f=0;f<a.length;f++){const m=a[f];n[m]=Vr(i,l,m,c[m],t,!z(c,m))}}return o}function Vr(t,e,n,r,i,a){const o=t[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Te(i),r=c[n]=l.call(null,e),pe())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Ne(n))&&(r=!0))}return r}function Go(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const a=t.props,o={},s=[];let l=!1;if(!R(t)){const f=m=>{l=!0;const[h,y]=Go(m,e,!0);ft(o,h),y&&s.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!a&&!l)return X(t)&&r.set(t,Oe),Oe;if(L(a))for(let f=0;f<a.length;f++){const m=jt(a[f]);ya(m)&&(o[m]=q)}else if(a)for(const f in a){const m=jt(f);if(ya(m)){const h=a[f],y=o[m]=L(h)||R(h)?{type:h}:Object.assign({},h);if(y){const N=xa(Boolean,y.type),P=xa(String,y.type);y[0]=N>-1,y[1]=P<0||N<P,(N>-1||z(y,"default"))&&s.push(m)}}}const c=[o,s];return X(t)&&r.set(t,c),c}function ya(t){return t[0]!=="$"}function _a(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function wa(t,e){return _a(t)===_a(e)}function xa(t,e){return L(e)?e.findIndex(n=>wa(n,t)):R(e)&&wa(e,t)?0:-1}const Xo=t=>t[0]==="_"||t==="$stable",Ti=t=>L(t)?t.map(Lt):[Lt(t)],Pf=(t,e,n)=>{if(e._n)return e;const r=Ql((...i)=>Ti(e(...i)),n);return r._c=!1,r},Jo=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Xo(i))continue;const a=t[i];if(R(a))e[i]=Pf(i,a,r);else if(a!=null){const o=Ti(a);e[i]=()=>o}}},Qo=(t,e)=>{const n=Ti(e);t.slots.default=()=>n},Tf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),Hn(e,"_",n)):Jo(e,t.slots={})}else t.slots={},e&&Qo(t,e);Hn(t.slots,mr,1)},Mf=(t,e,n)=>{const{vnode:r,slots:i}=t;let a=!0,o=q;if(r.shapeFlag&32){const s=e._;s?n&&s===1?a=!1:(ft(i,e),!n&&s===1&&delete i._):(a=!e.$stable,Jo(e,i)),o=e}else e&&(Qo(t,e),o={default:1});if(a)for(const s in i)!Xo(s)&&!(s in o)&&delete i[s]};function Zo(){return{app:null,config:{isNativeTag:il,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nf=0;function Lf(t,e){return function(r,i=null){R(r)||(r=Object.assign({},r)),i!=null&&!X(i)&&(i=null);const a=Zo(),o=new Set;let s=!1;const l=a.app={_uid:Nf++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:nc,get config(){return a.config},set config(c){},use(c,...f){return o.has(c)||(c&&R(c.install)?(o.add(c),c.install(l,...f)):R(c)&&(o.add(c),c(l,...f))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,f){return f?(a.components[c]=f,l):a.components[c]},directive(c,f){return f?(a.directives[c]=f,l):a.directives[c]},mount(c,f,m){if(!s){const h=lt(r,i);return h.appContext=a,f&&e?e(h,c):t(h,c,m),s=!0,l._container=c,c.__vue_app__=l,pr(h.component)||h.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,f){return a.provides[c]=f,l}};return l}}function Gr(t,e,n,r,i=!1){if(L(t)){t.forEach((h,y)=>Gr(h,e&&(L(e)?e[y]:e),n,r,i));return}if(Rn(r)&&!i)return;const a=r.shapeFlag&4?pr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=t,c=e&&e.r,f=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(et(c)?(f[c]=null,z(m,c)&&(m[c]=null)):st(c)&&(c.value=null)),R(l))Jt(l,s,12,[o,f]);else{const h=et(l),y=st(l);if(h||y){const N=()=>{if(t.f){const P=h?z(m,l)?m[l]:f[l]:l.value;i?L(P)&&vi(P,a):L(P)?P.includes(a)||P.push(a):h?(f[l]=[a],z(m,l)&&(m[l]=f[l])):(l.value=[a],t.k&&(f[t.k]=l.value))}else h?(f[l]=o,z(m,l)&&(m[l]=o)):y&&(l.value=o,t.k&&(f[t.k]=o))};o?(N.id=-1,mt(N,n)):N()}}}const mt=af;function Ff(t){return Rf(t)}function Rf(t,e){const n=cl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:m,nextSibling:h,setScopeId:y=Et,insertStaticContent:N}=t,P=(u,d,p,v=null,g=null,w=null,O=!1,_=null,k=!!d.dynamicChildren)=>{if(u===d)return;u&&!ze(u,d)&&(v=gn(u),It(u,g,w,!0),u=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:S}=d;switch(b){case cr:D(u,d,p,v);break;case tn:x(u,d,p,v);break;case Tr:u==null&&C(d,p,v,O);break;case Nt:mn(u,d,p,v,g,w,O,_,k);break;default:S&1?H(u,d,p,v,g,w,O,_,k):S&6?pn(u,d,p,v,g,w,O,_,k):(S&64||S&128)&&b.process(u,d,p,v,g,w,O,_,k,be)}T!=null&&g&&Gr(T,u&&u.ref,w,d||u,!d)},D=(u,d,p,v)=>{if(u==null)r(d.el=s(d.children),p,v);else{const g=d.el=u.el;d.children!==u.children&&c(g,d.children)}},x=(u,d,p,v)=>{u==null?r(d.el=l(d.children||""),p,v):d.el=u.el},C=(u,d,p,v)=>{[u.el,u.anchor]=N(u.children,d,p,v,u.el,u.anchor)},E=({el:u,anchor:d},p,v)=>{let g;for(;u&&u!==d;)g=h(u),r(u,p,v),u=g;r(d,p,v)},j=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),i(u),u=p;i(d)},H=(u,d,p,v,g,w,O,_,k)=>{O=O||d.type==="svg",u==null?ut(d,p,v,g,w,O,_,k):bt(u,d,g,w,O,_,k)},ut=(u,d,p,v,g,w,O,_)=>{let k,b;const{type:T,props:S,shapeFlag:M,transition:F,dirs:$}=u;if(k=u.el=o(u.type,w,S&&S.is,S),M&8?f(k,u.children):M&16&&_t(u.children,k,null,v,g,w&&T!=="foreignObject",O,_),$&&ie(u,null,v,"created"),S){for(const B in S)B!=="value"&&!Ln(B)&&a(k,B,null,S[B],w,u.children,v,g,Dt);"value"in S&&a(k,"value",null,S.value),(b=S.onVnodeBeforeMount)&&Tt(b,v,u)}rt(k,u,u.scopeId,O,v),$&&ie(u,null,v,"beforeMount");const K=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;K&&F.beforeEnter(k),r(k,d,p),((b=S&&S.onVnodeMounted)||K||$)&&mt(()=>{b&&Tt(b,v,u),K&&F.enter(k),$&&ie(u,null,v,"mounted")},g)},rt=(u,d,p,v,g)=>{if(p&&y(u,p),v)for(let w=0;w<v.length;w++)y(u,v[w]);if(g){let w=g.subTree;if(d===w){const O=g.vnode;rt(u,O,O.scopeId,O.slotScopeIds,g.parent)}}},_t=(u,d,p,v,g,w,O,_,k=0)=>{for(let b=k;b<u.length;b++){const T=u[b]=_?Gt(u[b]):Lt(u[b]);P(null,T,d,p,v,g,w,O,_)}},bt=(u,d,p,v,g,w,O)=>{const _=d.el=u.el;let{patchFlag:k,dynamicChildren:b,dirs:T}=d;k|=u.patchFlag&16;const S=u.props||q,M=d.props||q;let F;p&&ae(p,!1),(F=M.onVnodeBeforeUpdate)&&Tt(F,p,d,u),T&&ie(d,u,p,"beforeUpdate"),p&&ae(p,!0);const $=g&&d.type!=="foreignObject";if(b?$t(u.dynamicChildren,b,_,p,v,$,w):O||Y(u,d,_,null,p,v,$,w,!1),k>0){if(k&16)$e(_,d,S,M,p,v,g);else if(k&2&&S.class!==M.class&&a(_,"class",null,M.class,g),k&4&&a(_,"style",S.style,M.style,g),k&8){const K=d.dynamicProps;for(let B=0;B<K.length;B++){const Z=K[B],wt=S[Z],ye=M[Z];(ye!==wt||Z==="value")&&a(_,Z,wt,ye,g,u.children,p,v,Dt)}}k&1&&u.children!==d.children&&f(_,d.children)}else!O&&b==null&&$e(_,d,S,M,p,v,g);((F=M.onVnodeUpdated)||T)&&mt(()=>{F&&Tt(F,p,d,u),T&&ie(d,u,p,"updated")},v)},$t=(u,d,p,v,g,w,O)=>{for(let _=0;_<d.length;_++){const k=u[_],b=d[_],T=k.el&&(k.type===Nt||!ze(k,b)||k.shapeFlag&70)?m(k.el):p;P(k,b,T,null,v,g,w,O,!0)}},$e=(u,d,p,v,g,w,O)=>{if(p!==v){if(p!==q)for(const _ in p)!Ln(_)&&!(_ in v)&&a(u,_,p[_],null,O,d.children,g,w,Dt);for(const _ in v){if(Ln(_))continue;const k=v[_],b=p[_];k!==b&&_!=="value"&&a(u,_,b,k,O,d.children,g,w,Dt)}"value"in v&&a(u,"value",p.value,v.value)}},mn=(u,d,p,v,g,w,O,_,k)=>{const b=d.el=u?u.el:s(""),T=d.anchor=u?u.anchor:s("");let{patchFlag:S,dynamicChildren:M,slotScopeIds:F}=d;F&&(_=_?_.concat(F):F),u==null?(r(b,p,v),r(T,p,v),_t(d.children,p,T,g,w,O,_,k)):S>0&&S&64&&M&&u.dynamicChildren?($t(u.dynamicChildren,M,p,g,w,O,_),(d.key!=null||g&&d===g.subTree)&&ts(u,d,!0)):Y(u,d,p,T,g,w,O,_,k)},pn=(u,d,p,v,g,w,O,_,k)=>{d.slotScopeIds=_,u==null?d.shapeFlag&512?g.ctx.activate(d,p,v,O,k):Ar(d,p,v,g,w,O,k):Qi(u,d,k)},Ar=(u,d,p,v,g,w,O)=>{const _=u.component=qf(u,v,g);if(Bo(u)&&(_.ctx.renderer=be),Vf(_),_.asyncDep){if(g&&g.registerDep(_,at),!u.el){const k=_.subTree=lt(tn);x(null,k,d,p)}return}at(_,u,d,p,g,w,O)},Qi=(u,d,p)=>{const v=d.component=u.component;if(ef(u,d,p))if(v.asyncDep&&!v.asyncResolved){J(v,d,p);return}else v.next=d,Vl(v.update),v.update();else d.el=u.el,v.vnode=d},at=(u,d,p,v,g,w,O)=>{const _=()=>{if(u.isMounted){let{next:T,bu:S,u:M,parent:F,vnode:$}=u,K=T,B;ae(u,!1),T?(T.el=$.el,J(u,T,O)):T=$,S&&Fn(S),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Tt(B,F,T,$),ae(u,!0);const Z=Ir(u),wt=u.subTree;u.subTree=Z,P(wt,Z,m(wt.el),gn(wt),u,g,w),T.el=Z.el,K===null&&nf(u,Z.el),M&&mt(M,g),(B=T.props&&T.props.onVnodeUpdated)&&mt(()=>Tt(B,F,T,$),g)}else{let T;const{el:S,props:M}=d,{bm:F,m:$,parent:K}=u,B=Rn(d);if(ae(u,!1),F&&Fn(F),!B&&(T=M&&M.onVnodeBeforeMount)&&Tt(T,K,d),ae(u,!0),S&&Cr){const Z=()=>{u.subTree=Ir(u),Cr(S,u.subTree,u,g,null)};B?d.type.__asyncLoader().then(()=>!u.isUnmounted&&Z()):Z()}else{const Z=u.subTree=Ir(u);P(null,Z,p,v,u,g,w),d.el=Z.el}if($&&mt($,g),!B&&(T=M&&M.onVnodeMounted)){const Z=d;mt(()=>Tt(T,K,Z),g)}(d.shapeFlag&256||K&&Rn(K.vnode)&&K.vnode.shapeFlag&256)&&u.a&&mt(u.a,g),u.isMounted=!0,d=p=v=null}},k=u.effect=new _i(_,()=>Si(b),u.scope),b=u.update=()=>k.run();b.id=u.uid,ae(u,!0),b()},J=(u,d,p)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,If(u,d.props,v,p),Mf(u,d.children,p),Le(),ma(),Fe()},Y=(u,d,p,v,g,w,O,_,k=!1)=>{const b=u&&u.children,T=u?u.shapeFlag:0,S=d.children,{patchFlag:M,shapeFlag:F}=d;if(M>0){if(M&128){hn(b,S,p,v,g,w,O,_,k);return}else if(M&256){ne(b,S,p,v,g,w,O,_,k);return}}F&8?(T&16&&Dt(b,g,w),S!==b&&f(p,S)):T&16?F&16?hn(b,S,p,v,g,w,O,_,k):Dt(b,g,w,!0):(T&8&&f(p,""),F&16&&_t(S,p,v,g,w,O,_,k))},ne=(u,d,p,v,g,w,O,_,k)=>{u=u||Oe,d=d||Oe;const b=u.length,T=d.length,S=Math.min(b,T);let M;for(M=0;M<S;M++){const F=d[M]=k?Gt(d[M]):Lt(d[M]);P(u[M],F,p,null,g,w,O,_,k)}b>T?Dt(u,g,w,!0,!1,S):_t(d,p,v,g,w,O,_,k,S)},hn=(u,d,p,v,g,w,O,_,k)=>{let b=0;const T=d.length;let S=u.length-1,M=T-1;for(;b<=S&&b<=M;){const F=u[b],$=d[b]=k?Gt(d[b]):Lt(d[b]);if(ze(F,$))P(F,$,p,null,g,w,O,_,k);else break;b++}for(;b<=S&&b<=M;){const F=u[S],$=d[M]=k?Gt(d[M]):Lt(d[M]);if(ze(F,$))P(F,$,p,null,g,w,O,_,k);else break;S--,M--}if(b>S){if(b<=M){const F=M+1,$=F<T?d[F].el:v;for(;b<=M;)P(null,d[b]=k?Gt(d[b]):Lt(d[b]),p,$,g,w,O,_,k),b++}}else if(b>M)for(;b<=S;)It(u[b],g,w,!0),b++;else{const F=b,$=b,K=new Map;for(b=$;b<=M;b++){const pt=d[b]=k?Gt(d[b]):Lt(d[b]);pt.key!=null&&K.set(pt.key,b)}let B,Z=0;const wt=M-$+1;let ye=!1,ea=0;const De=new Array(wt);for(b=0;b<wt;b++)De[b]=0;for(b=F;b<=S;b++){const pt=u[b];if(Z>=wt){It(pt,g,w,!0);continue}let Pt;if(pt.key!=null)Pt=K.get(pt.key);else for(B=$;B<=M;B++)if(De[B-$]===0&&ze(pt,d[B])){Pt=B;break}Pt===void 0?It(pt,g,w,!0):(De[Pt-$]=b+1,Pt>=ea?ea=Pt:ye=!0,P(pt,d[Pt],p,null,g,w,O,_,k),Z++)}const na=ye?jf(De):Oe;for(B=na.length-1,b=wt-1;b>=0;b--){const pt=$+b,Pt=d[pt],ra=pt+1<T?d[pt+1].el:v;De[b]===0?P(null,Pt,p,ra,g,w,O,_,k):ye&&(B<0||b!==na[B]?re(Pt,p,ra,2):B--)}}},re=(u,d,p,v,g=null)=>{const{el:w,type:O,transition:_,children:k,shapeFlag:b}=u;if(b&6){re(u.component.subTree,d,p,v);return}if(b&128){u.suspense.move(d,p,v);return}if(b&64){O.move(u,d,p,be);return}if(O===Nt){r(w,d,p);for(let S=0;S<k.length;S++)re(k[S],d,p,v);r(u.anchor,d,p);return}if(O===Tr){E(u,d,p);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(w),r(w,d,p),mt(()=>_.enter(w),g);else{const{leave:S,delayLeave:M,afterLeave:F}=_,$=()=>r(w,d,p),K=()=>{S(w,()=>{$(),F&&F()})};M?M(w,$,K):K()}else r(w,d,p)},It=(u,d,p,v=!1,g=!1)=>{const{type:w,props:O,ref:_,children:k,dynamicChildren:b,shapeFlag:T,patchFlag:S,dirs:M}=u;if(_!=null&&Gr(_,null,p,u,!0),T&256){d.ctx.deactivate(u);return}const F=T&1&&M,$=!Rn(u);let K;if($&&(K=O&&O.onVnodeBeforeUnmount)&&Tt(K,d,u),T&6)Gs(u.component,p,v);else{if(T&128){u.suspense.unmount(p,v);return}F&&ie(u,null,d,"beforeUnmount"),T&64?u.type.remove(u,d,p,g,be,v):b&&(w!==Nt||S>0&&S&64)?Dt(b,d,p,!1,!0):(w===Nt&&S&384||!g&&T&16)&&Dt(k,d,p),v&&Zi(u)}($&&(K=O&&O.onVnodeUnmounted)||F)&&mt(()=>{K&&Tt(K,d,u),F&&ie(u,null,d,"unmounted")},p)},Zi=u=>{const{type:d,el:p,anchor:v,transition:g}=u;if(d===Nt){Vs(p,v);return}if(d===Tr){j(u);return}const w=()=>{i(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:O,delayLeave:_}=g,k=()=>O(p,w);_?_(u.el,w,k):k()}else w()},Vs=(u,d)=>{let p;for(;u!==d;)p=h(u),i(u),u=p;i(d)},Gs=(u,d,p)=>{const{bum:v,scope:g,update:w,subTree:O,um:_}=u;v&&Fn(v),g.stop(),w&&(w.active=!1,It(O,u,d,p)),_&&mt(_,d),mt(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Dt=(u,d,p,v=!1,g=!1,w=0)=>{for(let O=w;O<u.length;O++)It(u[O],d,p,v,g)},gn=u=>u.shapeFlag&6?gn(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),ta=(u,d,p)=>{u==null?d._vnode&&It(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,p),ma(),jo(),d._vnode=u},be={p:P,um:It,m:re,r:Zi,mt:Ar,mc:_t,pc:Y,pbc:$t,n:gn,o:t};let Er,Cr;return e&&([Er,Cr]=e(be)),{render:ta,hydrate:Er,createApp:Lf(ta,Er)}}function ae({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ts(t,e,n=!1){const r=t.children,i=e.children;if(L(r)&&L(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=Gt(i[a]),s.el=o.el),n||ts(o,s)),s.type===cr&&(s.el=o.el)}}function jf(t){const e=t.slice(),n=[0];let r,i,a,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,t[n[s]]<c?a=s+1:o=s;c<t[n[a]]&&(a>0&&(e[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=e[o];return n}const $f=t=>t.__isTeleport,Nt=Symbol(void 0),cr=Symbol(void 0),tn=Symbol(void 0),Tr=Symbol(void 0),Ye=[];let Ot=null;function ur(t=!1){Ye.push(Ot=t?null:[])}function Df(){Ye.pop(),Ot=Ye[Ye.length-1]||null}let en=1;function ka(t){en+=t}function zf(t){return t.dynamicChildren=en>0?Ot||Oe:null,Df(),en>0&&Ot&&Ot.push(t),t}function dr(t,e,n,r,i,a){return zf(U(t,e,n,r,i,a,!0))}function Xr(t){return t?t.__v_isVNode===!0:!1}function ze(t,e){return t.type===e.type&&t.key===e.key}const mr="__vInternal",es=({key:t})=>t??null,$n=({ref:t,ref_key:e,ref_for:n})=>t!=null?et(t)||st(t)||R(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function U(t,e=null,n=null,r=0,i=null,a=t===Nt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&es(e),ref:e&&$n(e),scopeId:zo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:yt};return s?(Mi(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),en>0&&!o&&Ot&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ot.push(l),l}const lt=Uf;function Uf(t,e=null,n=null,r=0,i=null,a=!1){if((!t||t===_f)&&(t=tn),Xr(t)){const s=Pe(t,e,!0);return n&&Mi(s,n),en>0&&!a&&Ot&&(s.shapeFlag&6?Ot[Ot.indexOf(t)]=s:Ot.push(s)),s.patchFlag|=-2,s}if(Zf(t)&&(t=t.__vccOpts),e){e=Hf(e);let{class:s,style:l}=e;s&&!et(s)&&(e.class=Zn(s)),X(l)&&(To(l)&&!L(l)&&(l=ft({},l)),e.style=hi(l))}const o=et(t)?1:rf(t)?128:$f(t)?64:X(t)?4:R(t)?2:0;return U(t,e,n,r,i,o,a,!0)}function Hf(t){return t?To(t)||mr in t?ft({},t):t:null}function Pe(t,e,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=t,s=e?Wf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&es(s),ref:e&&e.ref?n&&i?L(i)?i.concat($n(e)):[i,$n(e)]:$n(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pe(t.ssContent),ssFallback:t.ssFallback&&Pe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Bf(t=" ",e=0){return lt(cr,null,t,e)}function Lt(t){return t==null||typeof t=="boolean"?lt(tn):L(t)?lt(Nt,null,t.slice()):typeof t=="object"?Gt(t):lt(cr,null,String(t))}function Gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pe(t)}function Mi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Mi(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(mr in e)?e._ctx=yt:i===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else R(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[Bf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Zn([e.class,r.class]));else if(i==="style")e.style=hi([e.style,r.style]);else if(er(i)){const a=e[i],o=r[i];o&&a!==o&&!(L(a)&&a.includes(o))&&(e[i]=a?[].concat(a,o):o)}else i!==""&&(e[i]=r[i])}return e}function Tt(t,e,n,r=null){Ct(t,e,7,[n,r])}const Yf=Zo();let Kf=0;function qf(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Yf,a={uid:Kf++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Go(r,i),emitsOptions:Do(r,i),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Jl.bind(null,a),t.ce&&t.ce(a),a}let nt=null;const Te=t=>{nt=t,t.scope.on()},pe=()=>{nt&&nt.scope.off(),nt=null};function ns(t){return t.vnode.shapeFlag&4}let nn=!1;function Vf(t,e=!1){nn=e;const{props:n,children:r}=t.vnode,i=ns(t);Sf(t,n,i,e),Tf(t,r);const a=i?Gf(t,e):void 0;return nn=!1,a}function Gf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mo(new Proxy(t.ctx,xf));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Jf(t):null;Te(t),Le();const a=Jt(r,t,0,[t.props,i]);if(Fe(),pe(),go(a)){if(a.then(pe,pe),e)return a.then(o=>{Oa(t,o,e)}).catch(o=>{sr(o,t,0)});t.asyncDep=a}else Oa(t,a,e)}else rs(t,e)}function Oa(t,e,n){R(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:X(e)&&(t.setupState=No(e)),rs(t,n)}let Aa;function rs(t,e,n){const r=t.type;if(!t.render){if(!e&&Aa&&!r.render){const i=r.template||Pi(t).template;if(i){const{isCustomElement:a,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ft(ft({isCustomElement:a,delimiters:s},o),l);r.render=Aa(i,c)}}t.render=r.render||Et}Te(t),Le(),kf(t),Fe(),pe()}function Xf(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function Jf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Xf(t))},slots:t.slots,emit:t.emit,expose:e}}function pr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(No(Mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in We)return We[n](t)},has(e,n){return n in e||n in We}}))}function Qf(t,e=!0){return R(t)?t.displayName||t.name:t.name||e&&t.__name}function Zf(t){return R(t)&&"__vccOpts"in t}const ht=(t,e)=>Wl(t,e,nn);function is(t,e,n){const r=arguments.length;return r===2?X(e)&&!L(e)?Xr(e)?lt(t,null,[e]):lt(t,e):lt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xr(n)&&(n=[n]),lt(t,e,n))}const tc=Symbol(""),ec=()=>Be(tc),nc="3.2.45",rc="http://www.w3.org/2000/svg",le=typeof document<"u"?document:null,Ea=le&&le.createElement("template"),ic={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?le.createElementNS(rc,t):le.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>le.createTextNode(t),createComment:t=>le.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>le.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,a){const o=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ea.innerHTML=r?`<svg>${t}</svg>`:t;const s=Ea.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ac(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function oc(t,e,n){const r=t.style,i=et(n);if(n&&!i){for(const a in n)Jr(r,a,n[a]);if(e&&!et(e))for(const a in e)n[a]==null&&Jr(r,a,"")}else{const a=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=a)}}const Ca=/\s*!important$/;function Jr(t,e,n){if(L(n))n.forEach(r=>Jr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=sc(t,e);Ca.test(n)?t.setProperty(Ne(r),n.replace(Ca,""),"important"):t[r]=n}}const Sa=["Webkit","Moz","ms"],Mr={};function sc(t,e){const n=Mr[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return Mr[e]=r;r=ir(r);for(let i=0;i<Sa.length;i++){const a=Sa[i]+r;if(a in t)return Mr[e]=a}return e}const Ia="http://www.w3.org/1999/xlink";function lc(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ia,e.slice(6,e.length)):t.setAttributeNS(Ia,e,n);else{const a=el(e);n==null||a&&!po(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function fc(t,e,n,r,i,a,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,a),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let s=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=po(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function fe(t,e,n,r){t.addEventListener(e,n,r)}function cc(t,e,n,r){t.removeEventListener(e,n,r)}function uc(t,e,n,r,i=null){const a=t._vei||(t._vei={}),o=a[e];if(r&&o)o.value=r;else{const[s,l]=dc(e);if(r){const c=a[e]=hc(r,i);fe(t,s,c,l)}else o&&(cc(t,s,o,l),a[e]=void 0)}}const Pa=/(?:Once|Passive|Capture)$/;function dc(t){let e;if(Pa.test(t)){e={};let r;for(;r=t.match(Pa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ne(t.slice(2)),e]}let Nr=0;const mc=Promise.resolve(),pc=()=>Nr||(mc.then(()=>Nr=0),Nr=Date.now());function hc(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ct(gc(r,n.value),e,5,[r])};return n.value=t,n.attached=pc(),n}function gc(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Ta=/^on[a-z]/,vc=(t,e,n,r,i=!1,a,o,s,l)=>{e==="class"?ac(t,r,i):e==="style"?oc(t,n,r):er(e)?gi(e)||uc(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bc(t,e,r,i))?fc(t,e,r,a,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),lc(t,e,r,i))};function bc(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ta.test(e)&&R(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ta.test(e)&&et(n)?!1:e in t}const Yn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>Fn(e,n):e};function yc(t){t.target.composing=!0}function Ma(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _c={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Yn(i);const a=r||i.props&&i.props.type==="number";fe(t,e?"change":"input",o=>{if(o.target.composing)return;let s=t.value;n&&(s=s.trim()),a&&(s=Xe(s)),t._assign(s)}),n&&fe(t,"change",()=>{t.value=t.value.trim()}),e||(fe(t,"compositionstart",yc),fe(t,"compositionend",Ma),fe(t,"change",Ma))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},a){if(t._assign=Yn(a),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Xe(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wc={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=nr(e);fe(t,"change",()=>{const a=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Xe(Kn(o)):Kn(o));t._assign(t.multiple?i?new Set(a):a:a[0])}),t._assign=Yn(r)},mounted(t,{value:e}){Na(t,e)},beforeUpdate(t,e,n){t._assign=Yn(n)},updated(t,{value:e}){Na(t,e)}};function Na(t,e){const n=t.multiple;if(!(n&&!L(e)&&!nr(e))){for(let r=0,i=t.options.length;r<i;r++){const a=t.options[r],o=Kn(a);if(n)L(e)?a.selected=rl(e,o)>-1:a.selected=e.has(o);else if(tr(Kn(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Kn(t){return"_value"in t?t._value:t.value}const xc=ft({patchProp:vc},ic);let La;function kc(){return La||(La=Ff(xc))}const Oc=(...t)=>{const e=kc().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Ac(r);if(!i)return;const a=e._component;!R(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ac(t){return et(t)?document.querySelector(t):t}const hr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Ec={},Cc={class:"text-center mt-10 mb-10 font-sans"},Sc=U("h1",{class:"text-3xl font-bold"},"Weight Conversion Tool",-1),Ic=U("h2",{class:"text-xs"},"Developed by Jessé Carvalho",-1);function Pc(t,e){const n=jn("font-awesome-icon");return ur(),dr("header",Cc,[lt(n,{icon:"fa-solid fa-scale-unbalanced-flip",class:"text-4xl"}),Sc,Ic])}const Tc=hr(Ec,[["render",Pc]]);function Mc(){return as().__VUE_DEVTOOLS_GLOBAL_HOOK__}function as(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Nc=typeof Proxy=="function",Lc="devtools-plugin:setup",Fc="plugin:settings:set";let _e,Qr;function Rc(){var t;return _e!==void 0||(typeof window<"u"&&window.performance?(_e=!0,Qr=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(_e=!0,Qr=global.perf_hooks.performance):_e=!1),_e}function jc(){return Rc()?Qr.now():Date.now()}class $c{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const s=e.settings[o];r[o]=s.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let a=Object.assign({},r);try{const o=localStorage.getItem(i),s=JSON.parse(o);Object.assign(a,s)}catch{}this.fallbacks={getSettings(){return a},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}a=o},now(){return jc()}},n&&n.on(Fc,(o,s)=>{o===this.plugin.id&&this.fallbacks.setSettings(s)}),this.proxiedOn=new Proxy({},{get:(o,s)=>this.target?this.target.on[s]:(...l)=>{this.onQueue.push({method:s,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,s)=>this.target?this.target[s]:s==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(s)?(...l)=>(this.targetQueue.push({method:s,args:l,resolve:()=>{}}),this.fallbacks[s](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:s,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Dc(t,e){const n=t,r=as(),i=Mc(),a=Nc&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))i.emit(Lc,t,e);else{const o=a?new $c(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Ni="store";function zc(t){return t===void 0&&(t=null),Be(t!==null?t:Ni)}function Uc(t,e){return t.filter(e)[0]}function Zr(t,e){if(e===void 0&&(e=[]),t===null||typeof t!="object")return t;var n=Uc(e,function(i){return i.original===t});if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach(function(i){r[i]=Zr(t[i],e)}),r}function Re(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function os(t){return t!==null&&typeof t=="object"}function Hc(t){return t&&typeof t.then=="function"}function Bc(t,e){return function(){return t(e)}}function ss(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function ls(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;gr(t,n,[],t._modules.root,!0),Li(t,n,e)}function Li(t,e,n){var r=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,o={},s={},l=ul(!0);l.run(function(){Re(a,function(c,f){o[f]=Bc(c,t),s[f]=ht(function(){return o[f]()}),Object.defineProperty(t.getters,f,{get:function(){return s[f].value},enumerable:!0})})}),t._state=or({data:e}),t._scope=l,t.strict&&Vc(t),r&&n&&t._withCommit(function(){r.data=null}),i&&i.stop()}function gr(t,e,n,r,i){var a=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!a&&!i){var s=Fi(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){s[l]=r.state})}var c=r.context=Wc(t,o,n);r.forEachMutation(function(f,m){var h=o+m;Yc(t,h,f,c)}),r.forEachAction(function(f,m){var h=f.root?m:o+m,y=f.handler||f;Kc(t,h,y,c)}),r.forEachGetter(function(f,m){var h=o+m;qc(t,h,f,c)}),r.forEachChild(function(f,m){gr(t,e,n.concat(m),f,i)})}function Wc(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(a,o,s){var l=qn(a,o,s),c=l.payload,f=l.options,m=l.type;return(!f||!f.root)&&(m=e+m),t.dispatch(m,c)},commit:r?t.commit:function(a,o,s){var l=qn(a,o,s),c=l.payload,f=l.options,m=l.type;(!f||!f.root)&&(m=e+m),t.commit(m,c,f)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return fs(t,e)}},state:{get:function(){return Fi(t.state,n)}}}),i}function fs(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var a=i.slice(r);Object.defineProperty(n,a,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Yc(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function Kc(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var s=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Hc(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):s})}function qc(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(a){return n(r.state,r.getters,a.state,a.getters)})}function Vc(t){Se(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Fi(t,e){return e.reduce(function(n,r){return n[r]},t)}function qn(t,e,n){return os(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Gc="vuex bindings",Fa="vuex:mutations",Lr="vuex:actions",we="vuex",Xc=0;function Jc(t,e){Dc({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Gc]},function(n){n.addTimelineLayer({id:Fa,label:"Vuex Mutations",color:Ra}),n.addTimelineLayer({id:Lr,label:"Vuex Actions",color:Ra}),n.addInspector({id:we,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===we)if(r.filter){var i=[];ms(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[ds(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===we){var i=r.nodeId;fs(e,i),r.state=tu(nu(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===we){var i=r.nodeId,a=r.path;i!=="root"&&(a=i.split("/").filter(Boolean).concat(a)),e._withCommit(function(){r.set(e._state.data,a,r.state.value)})}}),e.subscribe(function(r,i){var a={};r.payload&&(a.payload=r.payload),a.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(we),n.sendInspectorState(we),n.addTimelineEvent({layerId:Fa,event:{time:Date.now(),title:r.type,data:a}})}),e.subscribeAction({before:function(r,i){var a={};r.payload&&(a.payload=r.payload),r._id=Xc++,r._time=Date.now(),a.state=i,n.addTimelineEvent({layerId:Lr,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:a}})},after:function(r,i){var a={},o=Date.now()-r._time;a.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(a.payload=r.payload),a.state=i,n.addTimelineEvent({layerId:Lr,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:a}})}})})}var Ra=8702998,Qc=6710886,Zc=16777215,cs={label:"namespaced",textColor:Zc,backgroundColor:Qc};function us(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function ds(t,e){return{id:e||"root",label:us(e),tags:t.namespaced?[cs]:[],children:Object.keys(t._children).map(function(n){return ds(t._children[n],e+n+"/")})}}function ms(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[cs]:[]}),Object.keys(e._children).forEach(function(i){ms(t,e._children[i],n,r+i+"/")})}function tu(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var a=eu(e);i.getters=Object.keys(a).map(function(o){return{key:o.endsWith("/")?us(o):o,editable:!1,value:ti(function(){return a[o]})}})}return i}function eu(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,a=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[a]=ti(function(){return t[n]})}else e[n]=ti(function(){return t[n]})}),e}function nu(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,a){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return a===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ti(t){try{return t()}catch(e){return e}}var St=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},ps={namespaced:{configurable:!0}};ps.namespaced.get=function(){return!!this._rawModule.namespaced};St.prototype.addChild=function(e,n){this._children[e]=n};St.prototype.removeChild=function(e){delete this._children[e]};St.prototype.getChild=function(e){return this._children[e]};St.prototype.hasChild=function(e){return e in this._children};St.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};St.prototype.forEachChild=function(e){Re(this._children,e)};St.prototype.forEachGetter=function(e){this._rawModule.getters&&Re(this._rawModule.getters,e)};St.prototype.forEachAction=function(e){this._rawModule.actions&&Re(this._rawModule.actions,e)};St.prototype.forEachMutation=function(e){this._rawModule.mutations&&Re(this._rawModule.mutations,e)};Object.defineProperties(St.prototype,ps);var ve=function(e){this.register([],e,!1)};ve.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};ve.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};ve.prototype.update=function(e){hs([],this.root,e)};ve.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var a=new St(n,r);if(e.length===0)this.root=a;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],a)}n.modules&&Re(n.modules,function(s,l){i.register(e.concat(l),s,r)})};ve.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);i&&i.runtime&&n.removeChild(r)};ve.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function hs(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;hs(t.concat(r),e.getChild(r),n.modules[r])}}function ru(t){return new ct(t)}var ct=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var a=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ve(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=a;var o=this,s=this,l=s.dispatch,c=s.commit;this.dispatch=function(h,y){return l.call(o,h,y)},this.commit=function(h,y,N){return c.call(o,h,y,N)},this.strict=i;var f=this._modules.root.state;gr(this,f,[],this._modules.root),Li(this,f),r.forEach(function(m){return m(n)})},Ri={state:{configurable:!0}};ct.prototype.install=function(e,n){e.provide(n||Ni,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Jc(e,this)};Ri.state.get=function(){return this._state.data};Ri.state.set=function(t){};ct.prototype.commit=function(e,n,r){var i=this,a=qn(e,n,r),o=a.type,s=a.payload,l={type:o,payload:s},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(m){m(s)})}),this._subscribers.slice().forEach(function(f){return f(l,i.state)}))};ct.prototype.dispatch=function(e,n){var r=this,i=qn(e,n),a=i.type,o=i.payload,s={type:a,payload:o},l=this._actions[a];if(l){try{this._actionSubscribers.slice().filter(function(f){return f.before}).forEach(function(f){return f.before(s,r.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(f){return f(o)})):l[0](o);return new Promise(function(f,m){c.then(function(h){try{r._actionSubscribers.filter(function(y){return y.after}).forEach(function(y){return y.after(s,r.state)})}catch{}f(h)},function(h){try{r._actionSubscribers.filter(function(y){return y.error}).forEach(function(y){return y.error(s,r.state,h)})}catch{}m(h)})})}};ct.prototype.subscribe=function(e,n){return ss(e,this._subscribers,n)};ct.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return ss(r,this._actionSubscribers,n)};ct.prototype.watch=function(e,n,r){var i=this;return Se(function(){return e(i.state,i.getters)},n,Object.assign({},r))};ct.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ct.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),gr(this,this.state,e,this._modules.get(e),r.preserveState),Li(this,this.state)};ct.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Fi(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),ls(this)};ct.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ct.prototype.hotUpdate=function(e){this._modules.update(e),ls(this,!0)};ct.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ct.prototype,Ri);var vr=yr(function(t,e){var n={};return br(e).forEach(function(r){var i=r.key,a=r.val;n[i]=function(){var s=this.$store.state,l=this.$store.getters;if(t){var c=_r(this.$store,"mapState",t);if(!c)return;s=c.context.state,l=c.context.getters}return typeof a=="function"?a.call(this,s,l):s[a]},n[i].vuex=!0}),n}),ji=yr(function(t,e){var n={};return br(e).forEach(function(r){var i=r.key,a=r.val;n[i]=function(){for(var s=[],l=arguments.length;l--;)s[l]=arguments[l];var c=this.$store.commit;if(t){var f=_r(this.$store,"mapMutations",t);if(!f)return;c=f.context.commit}return typeof a=="function"?a.apply(this,[c].concat(s)):c.apply(this.$store,[a].concat(s))}}),n}),gs=yr(function(t,e){var n={};return br(e).forEach(function(r){var i=r.key,a=r.val;a=t+a,n[i]=function(){if(!(t&&!_r(this.$store,"mapGetters",t)))return this.$store.getters[a]},n[i].vuex=!0}),n}),vs=yr(function(t,e){var n={};return br(e).forEach(function(r){var i=r.key,a=r.val;n[i]=function(){for(var s=[],l=arguments.length;l--;)s[l]=arguments[l];var c=this.$store.dispatch;if(t){var f=_r(this.$store,"mapActions",t);if(!f)return;c=f.context.dispatch}return typeof a=="function"?a.apply(this,[c].concat(s)):c.apply(this.$store,[a].concat(s))}}),n}),iu=function(t){return{mapState:vr.bind(null,t),mapGetters:gs.bind(null,t),mapMutations:ji.bind(null,t),mapActions:vs.bind(null,t)}};function br(t){return au(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function au(t){return Array.isArray(t)||os(t)}function yr(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function _r(t,e,n){var r=t._modulesNamespaceMap[n];return r}function ou(t){t===void 0&&(t={});var e=t.collapsed;e===void 0&&(e=!0);var n=t.filter;n===void 0&&(n=function(f,m,h){return!0});var r=t.transformer;r===void 0&&(r=function(f){return f});var i=t.mutationTransformer;i===void 0&&(i=function(f){return f});var a=t.actionFilter;a===void 0&&(a=function(f,m){return!0});var o=t.actionTransformer;o===void 0&&(o=function(f){return f});var s=t.logMutations;s===void 0&&(s=!0);var l=t.logActions;l===void 0&&(l=!0);var c=t.logger;return c===void 0&&(c=console),function(f){var m=Zr(f.state);typeof c>"u"||(s&&f.subscribe(function(h,y){var N=Zr(y);if(n(h,m,N)){var P=Da(),D=i(h),x="mutation "+h.type+P;ja(c,x,e),c.log("%c prev state","color: #9E9E9E; font-weight: bold",r(m)),c.log("%c mutation","color: #03A9F4; font-weight: bold",D),c.log("%c next state","color: #4CAF50; font-weight: bold",r(N)),$a(c)}m=N}),l&&f.subscribeAction(function(h,y){if(a(h,y)){var N=Da(),P=o(h),D="action "+h.type+N;ja(c,D,e),c.log("%c action","color: #03A9F4; font-weight: bold",P),$a(c)}}))}}function ja(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch{t.log(e)}}function $a(t){try{t.groupEnd()}catch{t.log("—— log end ——")}}function Da(){var t=new Date;return" @ "+kn(t.getHours(),2)+":"+kn(t.getMinutes(),2)+":"+kn(t.getSeconds(),2)+"."+kn(t.getMilliseconds(),3)}function su(t,e){return new Array(e+1).join(t)}function kn(t,e){return su("0",e-t.toString().length)+t}var lu={version:"4.1.0",Store:ct,storeKey:Ni,createStore:ru,useStore:zc,mapState:vr,mapMutations:ji,mapGetters:gs,mapActions:vs,createNamespacedHelpers:iu,createLogger:ou};const fu=lu,cu={computed:{...vr(["weight_info","error_info"]),local_weight_info:{get(){return this.weight_info},set(t){this.doCalc(t)}}},methods:{...ji(["doCalc"])},watch:{"local_weight_info.selected_weight":{handler:"doCalc",imediate:!0,deep:!0},"local_weight_info.weight_quantity":{handler:"doCalc",imediate:!0,deep:!0}}},uu={class:"weight-attributes w-5/6 md:w-1/2 m-auto"},du={class:"text-white"},mu={class:"grid grid-cols-2 grid-flow-col gap-2"},pu=U("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Weight",-1),hu=U("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Measurement",-1),gu=U("option",{value:"KG",selected:""},"Kilograms",-1),vu=U("option",{value:"PD"},"Pounds",-1),bu=U("option",{value:"OZ"},"Ounces",-1),yu=[gu,vu,bu];function _u(t,e,n,r,i,a){return ur(),dr("div",uu,[U("div",{class:Zn(["bg-red-500 rounded-sm pt-3 pb-3 mb-5",{hidden:t.error_info.error_disabled}])},[U("p",du,Nn(t.error_info.error_message),1)],2),U("div",mu,[U("div",null,[pu,ha(U("input",{type:"text",id:"weight","onUpdate:modelValue":e[0]||(e[0]=o=>a.local_weight_info.weight_quantity=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Weight",required:""},null,512),[[_c,a.local_weight_info.weight_quantity]])]),U("div",null,[hu,ha(U("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>a.local_weight_info.selected_weight=o),id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},yu,512),[[wc,a.local_weight_info.selected_weight]])])])])}const wu=hr(cu,[["render",_u]]),xu={computed:{...vr(["weight_info","error_info"])}},ku={class:"conversion-table mt-5"},Ou=U("h2",{class:"text-xl font-bold"},"Conversion Table",-1),Au={class:"table-fixed w-5/6 md:w-1/2 m-auto"},Eu=U("tr",{class:"bg-blue-500 text-white"},[U("th",{class:"pt-3 pb-3"},"type"),U("th",null,"quantity")],-1),Cu=U("td",null,"Kilograms",-1),Su=U("td",null,"Pounds",-1),Iu=U("td",null,"Inches",-1);function Pu(t,e,n,r,i,a){return ur(),dr("div",ku,[Ou,U("table",Au,[U("thead",null,[Eu,U("tr",null,[Cu,U("td",null,Nn(t.weight_info.kg_quantity),1)]),U("tr",null,[Su,U("td",null,Nn(t.weight_info.pd_quantity),1)]),U("tr",null,[Iu,U("td",null,Nn(t.weight_info.oz_quantity),1)])])])])}const Tu=hr(xu,[["render",Pu]]),Mu={components:{HeaderInfo:Tc,WeightConversor:wu,WeightTable:Tu}},Nu={class:"text-center"};function Lu(t,e,n,r,i,a){const o=jn("header-info"),s=jn("weight-conversor"),l=jn("weight-table");return ur(),dr(Nt,null,[lt(o),U("main",Nu,[lt(s),lt(l)])],64)}const Fu=hr(Mu,[["render",Lu]]);function za(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?za(Object(n),!0).forEach(function(r){tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):za(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vn(t){return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vn(t)}function Ru(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ua(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ju(t,e,n){return e&&Ua(t.prototype,e),n&&Ua(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $i(t,e){return Du(t)||Uu(t,e)||bs(t,e)||Bu()}function cn(t){return $u(t)||zu(t)||bs(t)||Hu()}function $u(t){if(Array.isArray(t))return ei(t)}function Du(t){if(Array.isArray(t))return t}function zu(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Uu(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function bs(t,e){if(t){if(typeof t=="string")return ei(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ei(t,e)}}function ei(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ha=function(){},Di={},ys={},_s=null,ws={mark:Ha,measure:Ha};try{typeof window<"u"&&(Di=window),typeof document<"u"&&(ys=document),typeof MutationObserver<"u"&&(_s=MutationObserver),typeof performance<"u"&&(ws=performance)}catch{}var Wu=Di.navigator||{},Ba=Wu.userAgent,Wa=Ba===void 0?"":Ba,Zt=Di,G=ys,Ya=_s,On=ws;Zt.document;var Kt=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",xs=~Wa.indexOf("MSIE")||~Wa.indexOf("Trident/"),An,En,Cn,Sn,In,Ht="___FONT_AWESOME___",ni=16,ks="fa",Os="svg-inline--fa",he="data-fa-i2svg",ri="data-fa-pseudo-element",Yu="data-fa-pseudo-element-pending",zi="data-prefix",Ui="data-icon",Ka="fontawesome-i2svg",Ku="async",qu=["HTML","HEAD","STYLE","SCRIPT"],As=function(){try{return!0}catch{return!1}}(),V="classic",Q="sharp",Hi=[V,Q];function un(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[V]}})}var rn=un((An={},tt(An,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),tt(An,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),An)),an=un((En={},tt(En,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),tt(En,Q,{solid:"fass"}),En)),on=un((Cn={},tt(Cn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),tt(Cn,Q,{fass:"fa-solid"}),Cn)),Vu=un((Sn={},tt(Sn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),tt(Sn,Q,{"fa-solid":"fass"}),Sn)),Gu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Es="fa-layers-text",Xu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ju=un((In={},tt(In,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),tt(In,Q,{900:"fass"}),In)),Cs=[1,2,3,4,5,6,7,8,9,10],Qu=Cs.concat([11,12,13,14,15,16,17,18,19,20]),Zu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sn=new Set;Object.keys(an[V]).map(sn.add.bind(sn));Object.keys(an[Q]).map(sn.add.bind(sn));var td=[].concat(Hi,cn(sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(Cs.map(function(t){return"".concat(t,"x")})).concat(Qu.map(function(t){return"w-".concat(t)})),Ke=Zt.FontAwesomeConfig||{};function ed(t){var e=G.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function nd(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(G&&typeof G.querySelector=="function"){var rd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rd.forEach(function(t){var e=$i(t,2),n=e[0],r=e[1],i=nd(ed(n));i!=null&&(Ke[r]=i)})}var Ss={styleDefault:"solid",familyDefault:"classic",cssPrefix:ks,replacementClass:Os,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ke.familyPrefix&&(Ke.cssPrefix=Ke.familyPrefix);var Me=A(A({},Ss),Ke);Me.autoReplaceSvg||(Me.observeMutations=!1);var I={};Object.keys(Ss).forEach(function(t){Object.defineProperty(I,t,{enumerable:!0,set:function(n){Me[t]=n,qe.forEach(function(r){return r(I)})},get:function(){return Me[t]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(e){Me.cssPrefix=e,qe.forEach(function(n){return n(I)})},get:function(){return Me.cssPrefix}});Zt.FontAwesomeConfig=I;var qe=[];function id(t){return qe.push(t),function(){qe.splice(qe.indexOf(t),1)}}var Vt=ni,Rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ad(t){if(!(!t||!Kt)){var e=G.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return G.head.insertBefore(e,r),t}}var od="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ln(){for(var t=12,e="";t-- >0;)e+=od[Math.random()*62|0];return e}function je(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Bi(t){return t.classList?je(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Is(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Is(t[n]),'" ')},"").trim()}function wr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Wi(t){return t.size!==Rt.size||t.x!==Rt.x||t.y!==Rt.y||t.rotate!==Rt.rotate||t.flipX||t.flipY}function ld(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function fd(t){var e=t.transform,n=t.width,r=n===void 0?ni:n,i=t.height,a=i===void 0?ni:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&xs?l+="translate(".concat(e.x/Vt-r/2,"em, ").concat(e.y/Vt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Vt,"em), calc(-50% + ").concat(e.y/Vt,"em)) "):l+="translate(".concat(e.x/Vt,"em, ").concat(e.y/Vt,"em) "),l+="scale(".concat(e.size/Vt*(e.flipX?-1:1),", ").concat(e.size/Vt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var cd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ps(){var t=ks,e=Os,n=I.cssPrefix,r=I.replacementClass,i=cd;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var qa=!1;function Fr(){I.autoAddCss&&!qa&&(ad(Ps()),qa=!0)}var ud={mixout:function(){return{dom:{css:Ps,insertCss:Fr}}},hooks:function(){return{beforeDOMElementCreation:function(){Fr()},beforeI2svg:function(){Fr()}}}},Bt=Zt||{};Bt[Ht]||(Bt[Ht]={});Bt[Ht].styles||(Bt[Ht].styles={});Bt[Ht].hooks||(Bt[Ht].hooks={});Bt[Ht].shims||(Bt[Ht].shims=[]);var At=Bt[Ht],Ts=[],dd=function t(){G.removeEventListener("DOMContentLoaded",t),Gn=1,Ts.map(function(e){return e()})},Gn=!1;Kt&&(Gn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Gn||G.addEventListener("DOMContentLoaded",dd));function md(t){Kt&&(Gn?setTimeout(t,0):Ts.push(t))}function dn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?Is(t):"<".concat(e," ").concat(sd(r),">").concat(a.map(dn).join(""),"</").concat(e,">")}function Va(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var pd=function(e,n){return function(r,i,a,o){return e.call(n,r,i,a,o)}},Rr=function(e,n,r,i){var a=Object.keys(e),o=a.length,s=i!==void 0?pd(n,i):n,l,c,f;for(r===void 0?(l=1,f=e[a[0]]):(l=0,f=r);l<o;l++)c=a[l],f=s(f,e[c],c,e);return f};function hd(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ii(t){var e=hd(t);return e.length===1?e[0].toString(16):null}function gd(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ga(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ai(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ga(e);typeof At.hooks.addPack=="function"&&!i?At.hooks.addPack(t,Ga(e)):At.styles[t]=A(A({},At.styles[t]||{}),a),t==="fas"&&ai("fa",e)}var Pn,Tn,Mn,xe=At.styles,vd=At.shims,bd=(Pn={},tt(Pn,V,Object.values(on[V])),tt(Pn,Q,Object.values(on[Q])),Pn),Yi=null,Ms={},Ns={},Ls={},Fs={},Rs={},yd=(Tn={},tt(Tn,V,Object.keys(rn[V])),tt(Tn,Q,Object.keys(rn[Q])),Tn);function _d(t){return~td.indexOf(t)}function wd(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!_d(i)?i:null}var js=function(){var e=function(a){return Rr(xe,function(o,s,l){return o[l]=Rr(s,a,{}),o},{})};Ms=e(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Ns=e(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Rs=e(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in xe||I.autoFetchSvg,r=Rr(vd,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Ls=r.names,Fs=r.unicodes,Yi=xr(I.styleDefault,{family:I.familyDefault})};id(function(t){Yi=xr(t.styleDefault,{family:I.familyDefault})});js();function Ki(t,e){return(Ms[t]||{})[e]}function xd(t,e){return(Ns[t]||{})[e]}function de(t,e){return(Rs[t]||{})[e]}function $s(t){return Ls[t]||{prefix:null,iconName:null}}function kd(t){var e=Fs[t],n=Ki("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function te(){return Yi}var qi=function(){return{prefix:null,iconName:null,rest:[]}};function xr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?V:n,i=rn[r][t],a=an[r][t]||an[r][i],o=t in At.styles?t:null;return a||o||null}var Xa=(Mn={},tt(Mn,V,Object.keys(on[V])),tt(Mn,Q,Object.keys(on[Q])),Mn);function kr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(e={},tt(e,V,"".concat(I.cssPrefix,"-").concat(V)),tt(e,Q,"".concat(I.cssPrefix,"-").concat(Q)),e),o=null,s=V;(t.includes(a[V])||t.some(function(c){return Xa[V].includes(c)}))&&(s=V),(t.includes(a[Q])||t.some(function(c){return Xa[Q].includes(c)}))&&(s=Q);var l=t.reduce(function(c,f){var m=wd(I.cssPrefix,f);if(xe[f]?(f=bd[s].includes(f)?Vu[s][f]:f,o=f,c.prefix=f):yd[s].indexOf(f)>-1?(o=f,c.prefix=xr(f,{family:s})):m?c.iconName=m:f!==I.replacementClass&&f!==a[V]&&f!==a[Q]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var h=o==="fa"?$s(c.iconName):{},y=de(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||y||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!xe.far&&xe.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},qi());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(xe.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=de(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=te()||"fas"),l}var Od=function(){function t(){Ru(this,t),this.definitions={}}return ju(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),ai(s,o[s]);var l=on[V][s];l&&ai(l,o[s]),js()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Ja=[],ke={},Ie={},Ad=Object.keys(Ie);function Ed(t,e){var n=e.mixoutsTo;return Ja=t,ke={},Object.keys(Ie).forEach(function(r){Ad.indexOf(r)===-1&&delete Ie[r]}),Ja.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Vn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){ke[o]||(ke[o]=[]),ke[o].push(a[o])})}r.provides&&r.provides(Ie)}),n}function oi(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=ke[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ge(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ke[t]||[];i.forEach(function(a){a.apply(null,n)})}function Wt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ie[t]?Ie[t].apply(null,e):void 0}function si(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||te();if(e)return e=de(n,e)||e,Va(Ds.definitions,n,e)||Va(At.styles,n,e)}var Ds=new Od,Cd=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ge("noAuto")},Sd={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kt?(ge("beforeI2svg",e),Wt("pseudoElements2svg",e),Wt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,md(function(){Pd({autoReplaceSvgRoot:n}),ge("watch",e)})}},Id={icon:function(e){if(e===null)return null;if(Vn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:de(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=xr(e[0]);return{prefix:r,iconName:de(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(I.cssPrefix,"-"))>-1||e.match(Gu))){var i=kr(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||te(),iconName:de(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=te();return{prefix:a,iconName:de(a,e)||e}}}},vt={noAuto:Cd,config:I,dom:Sd,parse:Id,library:Ds,findIconDefinition:si,toHtml:dn},Pd=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(At.styles).length>0||I.autoFetchSvg)&&Kt&&I.autoReplaceSvg&&vt.dom.i2svg({node:r})};function Or(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return dn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Kt){var r=G.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Td(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(Wi(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=wr(A(A({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Md(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(I.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:o}),children:r}]}]}function Vi(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,m=t.extra,h=t.watchable,y=h===void 0?!1:h,N=r.found?r:n,P=N.width,D=N.height,x=i==="fak",C=[I.replacementClass,a?"".concat(I.cssPrefix,"-").concat(a):""].filter(function(bt){return m.classes.indexOf(bt)===-1}).filter(function(bt){return bt!==""||!!bt}).concat(m.classes).join(" "),E={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(D)})},j=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/D*16*.0625,"em")}:{};y&&(E.attributes[he]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||ln())},children:[l]}),delete E.attributes.title);var H=A(A({},E),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:A(A({},j),m.styles)}),ut=r.found&&n.found?Wt("generateAbstractMask",H)||{children:[],attributes:{}}:Wt("generateAbstractIcon",H)||{children:[],attributes:{}},rt=ut.children,_t=ut.attributes;return H.children=rt,H.attributes=_t,s?Md(H):Td(H)}function Qa(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=A(A(A({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[he]="");var f=A({},o.styles);Wi(i)&&(f.transform=fd({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=wr(f);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Nd(t){var e=t.content,n=t.title,r=t.extra,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=wr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var jr=At.styles;function li(t){var e=t[0],n=t[1],r=t.slice(4),i=$i(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ue.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ue.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ue.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var Ld={found:!1,width:512,height:512};function Fd(t,e){!As&&!I.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function fi(t,e){var n=e;return e==="fa"&&I.styleDefault!==null&&(e=te()),new Promise(function(r,i){if(Wt("missingIconAbstract"),n==="fa"){var a=$s(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&jr[e]&&jr[e][t]){var o=jr[e][t];return r(li(o))}Fd(t,e),r(A(A({},Ld),{},{icon:I.showMissingIcons&&t?Wt("missingIconAbstract")||{}:{}}))})}var Za=function(){},ci=I.measurePerformance&&On&&On.mark&&On.measure?On:{mark:Za,measure:Za},He='FA "6.2.1"',Rd=function(e){return ci.mark("".concat(He," ").concat(e," begins")),function(){return zs(e)}},zs=function(e){ci.mark("".concat(He," ").concat(e," ends")),ci.measure("".concat(He," ").concat(e),"".concat(He," ").concat(e," begins"),"".concat(He," ").concat(e," ends"))},Gi={begin:Rd,end:zs},Dn=function(){};function to(t){var e=t.getAttribute?t.getAttribute(he):null;return typeof e=="string"}function jd(t){var e=t.getAttribute?t.getAttribute(zi):null,n=t.getAttribute?t.getAttribute(Ui):null;return e&&n}function $d(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(I.replacementClass)}function Dd(){if(I.autoReplaceSvg===!0)return zn.replace;var t=zn[I.autoReplaceSvg];return t||zn.replace}function zd(t){return G.createElementNS("http://www.w3.org/2000/svg",t)}function Ud(t){return G.createElement(t)}function Us(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?zd:Ud:n;if(typeof t=="string")return G.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(Us(o,{ceFn:r}))}),i}function Hd(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Us(i),n)}),n.getAttribute(he)===null&&I.keepOriginalSource){var r=G.createComment(Hd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Bi(n).indexOf(I.replacementClass))return zn.replace(e);var i=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return dn(s)}).join(`
`);n.setAttribute(he,""),n.innerHTML=o}};function eo(t){t()}function Hs(t,e){var n=typeof e=="function"?e:Dn;if(t.length===0)n();else{var r=eo;I.mutateApproach===Ku&&(r=Zt.requestAnimationFrame||eo),r(function(){var i=Dd(),a=Gi.begin("mutate");t.map(i),a(),n()})}}var Xi=!1;function Bs(){Xi=!0}function ui(){Xi=!1}var Xn=null;function no(t){if(Ya&&I.observeMutations){var e=t.treeCallback,n=e===void 0?Dn:e,r=t.nodeCallback,i=r===void 0?Dn:r,a=t.pseudoElementsCallback,o=a===void 0?Dn:a,s=t.observeMutationsRoot,l=s===void 0?G:s;Xn=new Ya(function(c){if(!Xi){var f=te();je(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!to(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&to(m.target)&&~Zu.indexOf(m.attributeName))if(m.attributeName==="class"&&jd(m.target)){var h=kr(Bi(m.target)),y=h.prefix,N=h.iconName;m.target.setAttribute(zi,y||f),N&&m.target.setAttribute(Ui,N)}else $d(m.target)&&i(m.target)})}}),Kt&&Xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bd(){Xn&&Xn.disconnect()}function Wd(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Yd(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=kr(Bi(t));return i.prefix||(i.prefix=te()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=xd(i.prefix,t.innerText)||Ki(i.prefix,ii(t.innerText))),!i.iconName&&I.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Kd(t){var e=je(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return I.autoA11y&&(n?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||ln()):(e["aria-hidden"]="true",e.focusable="false")),e}function qd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ro(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Yd(t),r=n.iconName,i=n.prefix,a=n.rest,o=Kd(t),s=oi("parseNodeAttributes",{},t),l=e.styleParser?Wd(t):[];return A({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Vd=At.styles;function Ws(t){var e=I.autoReplaceSvg==="nest"?ro(t,{styleParser:!1}):ro(t);return~e.extra.classes.indexOf(Es)?Wt("generateLayersText",t,e):Wt("generateSvgReplacementMutation",t,e)}var ee=new Set;Hi.map(function(t){ee.add("fa-".concat(t))});Object.keys(rn[V]).map(ee.add.bind(ee));Object.keys(rn[Q]).map(ee.add.bind(ee));ee=cn(ee);function io(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kt)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(Ka,"-").concat(m))},i=function(m){return n.remove("".concat(Ka,"-").concat(m))},a=I.autoFetchSvg?ee:Hi.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Vd));a.includes("fa")||a.push("fa");var o=[".".concat(Es,":not([").concat(he,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(he,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=je(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Gi.begin("onTree"),c=s.reduce(function(f,m){try{var h=Ws(m);h&&f.push(h)}catch(y){As||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,m){Promise.all(c).then(function(h){Hs(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(h){l(),m(h)})})}function Gd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ws(t).then(function(n){n&&Hs([n],e)})}function Xd(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:si(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:si(i||{})),t(r,A(A({},n),{},{mask:i}))}}var Jd=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Rt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,m=n.title,h=m===void 0?null:m,y=n.titleId,N=y===void 0?null:y,P=n.classes,D=P===void 0?[]:P,x=n.attributes,C=x===void 0?{}:x,E=n.styles,j=E===void 0?{}:E;if(e){var H=e.prefix,ut=e.iconName,rt=e.icon;return Or(A({type:"icon"},e),function(){return ge("beforeDOMElementCreation",{iconDefinition:e,params:n}),I.autoA11y&&(h?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(N||ln()):(C["aria-hidden"]="true",C.focusable="false")),Vi({icons:{main:li(rt),mask:l?li(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ut,transform:A(A({},Rt),i),symbol:o,title:h,maskId:f,titleId:N,extra:{attributes:C,styles:j,classes:D}})})}},Qd={mixout:function(){return{icon:Xd(Jd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=io,n.nodeCallback=Gd,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?G:r,a=n.callback,o=a===void 0?function(){}:a;return io(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,m=r.maskId,h=r.extra;return new Promise(function(y,N){Promise.all([fi(i,s),f.iconName?fi(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var D=$i(P,2),x=D[0],C=D[1];y([n,Vi({icons:{main:x,mask:C},prefix:s,iconName:i,transform:l,symbol:c,maskId:m,title:a,titleId:o,extra:h,watchable:!0})])}).catch(N)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=wr(s);l.length>0&&(i.style=l);var c;return Wi(o)&&(c=Wt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},Zd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Or({type:"layer"},function(){ge("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(cn(a)).join(" ")},children:o}]})}}}},tm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,m=f===void 0?{}:f;return Or({type:"counter",content:n},function(){return ge("beforeDOMElementCreation",{content:n,params:r}),Nd({content:n.toString(),title:a,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(cn(s))}})})}}}},em={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Rt:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,m=f===void 0?{}:f,h=r.styles,y=h===void 0?{}:h;return Or({type:"text",content:n},function(){return ge("beforeDOMElementCreation",{content:n,params:r}),Qa({content:n,transform:A(A({},Rt),a),title:s,extra:{attributes:m,styles:y,classes:["".concat(I.cssPrefix,"-layers-text")].concat(cn(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(xs){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return I.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qa({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},nm=new RegExp('"',"ug"),ao=[1105920,1112319];function rm(t){var e=t.replace(nm,""),n=gd(e,0),r=n>=ao[0]&&n<=ao[1],i=e.length===2?e[0]===e[1]:!1;return{value:ii(i?e[0]:e),isSecondary:r||i}}function oo(t,e){var n="".concat(Yu).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=je(t.children),o=a.filter(function(rt){return rt.getAttribute(ri)===e})[0],s=Zt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Xu),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Q:V,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?an[h][l[2].toLowerCase()]:Ju[h][c],N=rm(m),P=N.value,D=N.isSecondary,x=l[0].startsWith("FontAwesome"),C=Ki(y,P),E=C;if(x){var j=kd(P);j.iconName&&j.prefix&&(C=j.iconName,y=j.prefix)}if(C&&!D&&(!o||o.getAttribute(zi)!==y||o.getAttribute(Ui)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var H=qd(),ut=H.extra;ut.attributes[ri]=e,fi(C,y).then(function(rt){var _t=Vi(A(A({},H),{},{icons:{main:rt,mask:qi()},prefix:y,iconName:E,extra:ut,watchable:!0})),bt=G.createElement("svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=_t.map(function($t){return dn($t)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function im(t){return Promise.all([oo(t,"::before"),oo(t,"::after")])}function am(t){return t.parentNode!==document.head&&!~qu.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ri)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function so(t){if(Kt)return new Promise(function(e,n){var r=je(t.querySelectorAll("*")).filter(am).map(im),i=Gi.begin("searchPseudoElements");Bs(),Promise.all(r).then(function(){i(),ui(),e()}).catch(function(){i(),ui(),n()})})}var om={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=so,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?G:r;I.searchPseudoElements&&so(i)}}},lo=!1,sm={mixout:function(){return{dom:{unwatch:function(){Bs(),lo=!0}}}},hooks:function(){return{bootstrap:function(){no(oi("mutationObserverCallbacks",{}))},noAuto:function(){Bd()},watch:function(n){var r=n.observeMutationsRoot;lo?ui():no(oi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},fo=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},lm={mixout:function(){return{parse:{transform:function(n){return fo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=fo(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:h};return{tag:"g",attributes:A({},y.outer),children:[{tag:"g",attributes:A({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),y.path)}]}]}}}},$r={x:0,y:0,width:"100%",height:"100%"};function co(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fm(t){return t.tag==="g"?t.children:[t]}var cm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?kr(i.split(" ").map(function(o){return o.trim()})):qi();return a.prefix||(a.prefix=te()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,f=a.icon,m=o.width,h=o.icon,y=ld({transform:l,containerWidth:m,iconWidth:c}),N={tag:"rect",attributes:A(A({},$r),{},{fill:"white"})},P=f.children?{children:f.children.map(co)}:{},D={tag:"g",attributes:A({},y.inner),children:[co(A({tag:f.tag,attributes:A(A({},f.attributes),y.path)},P))]},x={tag:"g",attributes:A({},y.outer),children:[D]},C="mask-".concat(s||ln()),E="clip-".concat(s||ln()),j={tag:"mask",attributes:A(A({},$r),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,x]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:fm(h)},j]};return r.push(H,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(C,")")},$r)}),{children:r,attributes:i}}}},um={provides:function(e){var n=!1;Zt.matchMedia&&(n=Zt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},dm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},mm=[ud,Qd,Zd,tm,em,om,sm,lm,cm,um,dm];Ed(mm,{mixoutsTo:vt});vt.noAuto;var Ys=vt.config,pm=vt.library;vt.dom;var Jn=vt.parse;vt.findIconDefinition;vt.toHtml;var hm=vt.icon;vt.layer;var gm=vt.text;vt.counter;function uo(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?uo(Object(n),!0).forEach(function(r){dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):uo(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Qn(t){return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qn(t)}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vm(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bm(t,e){if(t==null)return{};var n=vm(t,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function di(t){return ym(t)||_m(t)||wm(t)||xm()}function ym(t){if(Array.isArray(t))return mi(t)}function _m(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wm(t,e){if(t){if(typeof t=="string")return mi(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mi(t,e)}}function mi(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function xm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ks={exports:{}};(function(t){(function(e){var n=function(x,C,E){if(!c(C)||m(C)||h(C)||y(C)||l(C))return C;var j,H=0,ut=0;if(f(C))for(j=[],ut=C.length;H<ut;H++)j.push(n(x,C[H],E));else{j={};for(var rt in C)Object.prototype.hasOwnProperty.call(C,rt)&&(j[x(rt,E)]=n(x,C[rt],E))}return j},r=function(x,C){C=C||{};var E=C.separator||"_",j=C.split||/(?=[A-Z])/;return x.split(j).join(E)},i=function(x){return N(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(C,E){return E?E.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},a=function(x){var C=i(x);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(x,C){return r(x,C).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},f=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},h=function(x){return s.call(x)=="[object RegExp]"},y=function(x){return s.call(x)=="[object Boolean]"},N=function(x){return x=x-0,x===x},P=function(x,C){var E=C&&"process"in C?C.process:C;return typeof E!="function"?x:function(j,H){return E(j,x,H)}},D={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(x,C){return n(P(i,C),x)},decamelizeKeys:function(x,C){return n(P(o,C),x,C)},pascalizeKeys:function(x,C){return n(P(a,C),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(km)})(Ks);var Om=Ks.exports,Am=["class","style"];function Em(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Om.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return e[i]=a,e},{})}function Cm(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ji(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ji(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.class=Cm(f);break;case"style":l.style=Em(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=bm(n,Am);return is(t.tag,kt(kt(kt({},e),{},{class:i.class,style:kt(kt({},i.style),o)},i.attrs),s),r)}var qs=!1;try{qs=!0}catch{}function Sm(){if(!qs&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ve(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?dt({},t,e):{}}function Im(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},dt(e,"fa-".concat(t.size),t.size!==null),dt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),dt(e,"fa-pull-".concat(t.pull),t.pull!==null),dt(e,"fa-swap-opacity",t.swapOpacity),dt(e,"fa-bounce",t.bounce),dt(e,"fa-shake",t.shake),dt(e,"fa-beat",t.beat),dt(e,"fa-fade",t.fade),dt(e,"fa-beat-fade",t.beatFade),dt(e,"fa-flash",t.flash),dt(e,"fa-spin-pulse",t.spinPulse),dt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function mo(t){if(t&&Qn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jn.icon)return Jn.icon(t);if(t===null)return null;if(Qn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Pm=Ii({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=ht(function(){return mo(e.icon)}),a=ht(function(){return Ve("classes",Im(e))}),o=ht(function(){return Ve("transform",typeof e.transform=="string"?Jn.transform(e.transform):e.transform)}),s=ht(function(){return Ve("mask",mo(e.mask))}),l=ht(function(){return hm(i.value,kt(kt(kt(kt({},a.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});Se(l,function(f){if(!f)return Sm("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var c=ht(function(){return l.value?Ji(l.value.abstract[0],{},r):null});return function(){return c.value}}});Ii({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Ys.familyPrefix,a=ht(function(){return["".concat(i,"-layers")].concat(di(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return is("div",{class:a.value},r.default?r.default():[])}}});Ii({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Ys.familyPrefix,a=ht(function(){return Ve("classes",[].concat(di(e.counter?["".concat(i,"-layers-counter")]:[]),di(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=ht(function(){return Ve("transform",typeof e.transform=="string"?Jn.transform(e.transform):e.transform)}),s=ht(function(){var c=gm(e.value.toString(),kt(kt({},o.value),a.value)),f=c.abstract;return e.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=ht(function(){return Ji(s.value,{},r)});return function(){return l.value}}});var Tm={prefix:"fas",iconName:"scale-unbalanced-flip",icon:[640,512,["balance-scale-right"],"f516","M117.9 62.4c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l113 37.7C265 15.8 290.7 0 320 0c44.2 0 80 35.8 80 80c0 3-.2 5.9-.5 8.8l122.6 40.9c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2L366.4 145.2c-4.5 3.2-9.3 5.9-14.4 8.2V480c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-21-9.2-37.2-27-44.2-49l-125.9-42zm396.3 211c-.4-.8-1.3-1.3-2.2-1.3s-1.7 .5-2.2 1.3L435.1 416H588.9L514.2 273.3zM512 224c18.8 0 36 10.4 44.7 27l77.8 148.5c3.1 5.8 6.1 14 5.5 23.8c-.7 12.1-4.8 35.2-24.8 55.1C594.9 498.6 562.2 512 512 512s-82.9-13.4-103.2-33.5c-20-20-24.2-43-24.8-55.1c-.6-9.8 2.5-18 5.5-23.8L467.3 251c8.7-16.6 25.9-27 44.7-27zM128 144c-.9 0-1.7 .5-2.2 1.3L51.1 288H204.9L130.2 145.3c-.4-.8-1.3-1.3-2.2-1.3zm44.7-21l77.8 148.5c3.1 5.8 6.1 14 5.5 23.8c-.7 12.1-4.8 35.2-24.8 55.1C210.9 370.6 178.2 384 128 384s-82.9-13.4-103.2-33.5c-20-20-24.2-43-24.8-55.1c-.6-9.8 2.5-18 5.5-23.8L83.3 123C92 106.4 109.2 96 128 96s36 10.4 44.7 27z"]},Mm={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};const Nm=new fu.Store({state:{weight_info:{kg_quantity:0,pd_quantity:0,oz_quantity:0,weight_quantity:0,selected_weight:"KG"},error_info:{error_disabled:!0,error_message:""}},mutations:{doCalc(t){!isNaN(t.weight_info.weight_quantity)&&t.weight_info.weight_quantity.length>0?(t.error_info.error_disabled=!0,t.error_info.error_message="",t.weight_info.selected_weight=="KG"?(t.weight_info.kg_quantity=t.weight_info.weight_quantity,t.weight_info.pd_quantity=(t.weight_info.weight_quantity*2.20462262185).toFixed(2),t.weight_info.oz_quantity=(t.weight_info.weight_quantity*35.27).toFixed(2)):t.weight_info.selected_weight=="PD"?(t.weight_info.kg_quantity=(t.weight_info.weight_quantity*.453592).toFixed(2),t.weight_info.pd_quantity=t.weight_info.weight_quantity,t.weight_info.oz_quantity=(t.weight_info.weight_quantity*16).toFixed(2)):t.weight_info.selected_weight=="OZ"&&(t.weight_info.kg_quantity=(t.weight_info.weight_quantity*.0283495).toFixed(2),t.weight_info.pd_quantity=(t.weight_info.weight_quantity*.0625).toFixed(2),t.weight_info.oz_quantity=t.weight_info.weight_quantity)):t.weight_info.weight_quantity.length==0?(t.weight_info.kg_quantity=0,t.weight_info.pd_quantity=0,t.weight_info.oz_quantity=0):(t.error_info.error_disabled=!1,t.error_info.error_message="Quantity is invalid, please use a number instead")}}});pm.add(Mm,Tm);Oc(Fu).component("font-awesome-icon",Pm).use(Nm).mount("#app");
