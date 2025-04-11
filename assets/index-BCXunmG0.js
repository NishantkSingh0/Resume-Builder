(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function Qp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bl={exports:{}},Li={},Dl={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function n0(){if(Of)return we;Of=1;var n=Symbol.for("react.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.iterator;function w(L){return L===null||typeof L!="object"?null:(L=k&&L[k]||L["@@iterator"],typeof L=="function"?L:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,B={};function b(L,V,te){this.props=L,this.context=V,this.refs=B,this.updater=te||j}b.prototype.isReactComponent={},b.prototype.setState=function(L,V){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,V,"setState")},b.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=b.prototype;function S(L,V,te){this.props=L,this.context=V,this.refs=B,this.updater=te||j}var W=S.prototype=new g;W.constructor=S,E(W,b.prototype),W.isPureReactComponent=!0;var T=Array.isArray,z=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function O(L,V,te){var se,ye={},ve=null,Ne=null;if(V!=null)for(se in V.ref!==void 0&&(Ne=V.ref),V.key!==void 0&&(ve=""+V.key),V)z.call(V,se)&&!I.hasOwnProperty(se)&&(ye[se]=V[se]);var ce=arguments.length-2;if(ce===1)ye.children=te;else if(1<ce){for(var Se=Array(ce),He=0;He<ce;He++)Se[He]=arguments[He+2];ye.children=Se}if(L&&L.defaultProps)for(se in ce=L.defaultProps,ce)ye[se]===void 0&&(ye[se]=ce[se]);return{$$typeof:n,type:L,key:ve,ref:Ne,props:ye,_owner:P.current}}function H(L,V){return{$$typeof:n,type:L.type,key:V,ref:L.ref,props:L.props,_owner:L._owner}}function y(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function F(L){var V={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(te){return V[te]})}var U=/\/+/g;function re(L,V){return typeof L=="object"&&L!==null&&L.key!=null?F(""+L.key):V.toString(36)}function ie(L,V,te,se,ye){var ve=typeof L;(ve==="undefined"||ve==="boolean")&&(L=null);var Ne=!1;if(L===null)Ne=!0;else switch(ve){case"string":case"number":Ne=!0;break;case"object":switch(L.$$typeof){case n:case s:Ne=!0}}if(Ne)return Ne=L,ye=ye(Ne),L=se===""?"."+re(Ne,0):se,T(ye)?(te="",L!=null&&(te=L.replace(U,"$&/")+"/"),ie(ye,V,te,"",function(He){return He})):ye!=null&&(y(ye)&&(ye=H(ye,te+(!ye.key||Ne&&Ne.key===ye.key?"":(""+ye.key).replace(U,"$&/")+"/")+L)),V.push(ye)),1;if(Ne=0,se=se===""?".":se+":",T(L))for(var ce=0;ce<L.length;ce++){ve=L[ce];var Se=se+re(ve,ce);Ne+=ie(ve,V,te,Se,ye)}else if(Se=w(L),typeof Se=="function")for(L=Se.call(L),ce=0;!(ve=L.next()).done;)ve=ve.value,Se=se+re(ve,ce++),Ne+=ie(ve,V,te,Se,ye);else if(ve==="object")throw V=String(L),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Ne}function _e(L,V,te){if(L==null)return L;var se=[],ye=0;return ie(L,se,"","",function(ve){return V.call(te,ve,ye++)}),se}function xe(L){if(L._status===-1){var V=L._result;V=V(),V.then(function(te){(L._status===0||L._status===-1)&&(L._status=1,L._result=te)},function(te){(L._status===0||L._status===-1)&&(L._status=2,L._result=te)}),L._status===-1&&(L._status=0,L._result=V)}if(L._status===1)return L._result.default;throw L._result}var ke={current:null},q={transition:null},oe={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function Z(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:_e,forEach:function(L,V,te){_e(L,function(){V.apply(this,arguments)},te)},count:function(L){var V=0;return _e(L,function(){V++}),V},toArray:function(L){return _e(L,function(V){return V})||[]},only:function(L){if(!y(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},we.Component=b,we.Fragment=i,we.Profiler=u,we.PureComponent=S,we.StrictMode=a,we.Suspense=h,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,we.act=Z,we.cloneElement=function(L,V,te){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var se=E({},L.props),ye=L.key,ve=L.ref,Ne=L._owner;if(V!=null){if(V.ref!==void 0&&(ve=V.ref,Ne=P.current),V.key!==void 0&&(ye=""+V.key),L.type&&L.type.defaultProps)var ce=L.type.defaultProps;for(Se in V)z.call(V,Se)&&!I.hasOwnProperty(Se)&&(se[Se]=V[Se]===void 0&&ce!==void 0?ce[Se]:V[Se])}var Se=arguments.length-2;if(Se===1)se.children=te;else if(1<Se){ce=Array(Se);for(var He=0;He<Se;He++)ce[He]=arguments[He+2];se.children=ce}return{$$typeof:n,type:L.type,key:ye,ref:ve,props:se,_owner:Ne}},we.createContext=function(L){return L={$$typeof:m,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:d,_context:L},L.Consumer=L},we.createElement=O,we.createFactory=function(L){var V=O.bind(null,L);return V.type=L,V},we.createRef=function(){return{current:null}},we.forwardRef=function(L){return{$$typeof:f,render:L}},we.isValidElement=y,we.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:xe}},we.memo=function(L,V){return{$$typeof:_,type:L,compare:V===void 0?null:V}},we.startTransition=function(L){var V=q.transition;q.transition={};try{L()}finally{q.transition=V}},we.unstable_act=Z,we.useCallback=function(L,V){return ke.current.useCallback(L,V)},we.useContext=function(L){return ke.current.useContext(L)},we.useDebugValue=function(){},we.useDeferredValue=function(L){return ke.current.useDeferredValue(L)},we.useEffect=function(L,V){return ke.current.useEffect(L,V)},we.useId=function(){return ke.current.useId()},we.useImperativeHandle=function(L,V,te){return ke.current.useImperativeHandle(L,V,te)},we.useInsertionEffect=function(L,V){return ke.current.useInsertionEffect(L,V)},we.useLayoutEffect=function(L,V){return ke.current.useLayoutEffect(L,V)},we.useMemo=function(L,V){return ke.current.useMemo(L,V)},we.useReducer=function(L,V,te){return ke.current.useReducer(L,V,te)},we.useRef=function(L){return ke.current.useRef(L)},we.useState=function(L){return ke.current.useState(L)},we.useSyncExternalStore=function(L,V,te){return ke.current.useSyncExternalStore(L,V,te)},we.useTransition=function(){return ke.current.useTransition()},we.version="18.3.1",we}var Lf;function Iu(){return Lf||(Lf=1,Dl.exports=n0()),Dl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function r0(){if(Mf)return Li;Mf=1;var n=Iu(),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function m(f,h,_){var v,k={},w=null,j=null;_!==void 0&&(w=""+_),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(j=h.ref);for(v in h)a.call(h,v)&&!d.hasOwnProperty(v)&&(k[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)k[v]===void 0&&(k[v]=h[v]);return{$$typeof:s,type:f,key:w,ref:j,props:k,_owner:u.current}}return Li.Fragment=i,Li.jsx=m,Li.jsxs=m,Li}var Bf;function i0(){return Bf||(Bf=1,Bl.exports=r0()),Bl.exports}var l=i0(),R=Iu();const he=Qp(R);var Mi={},Df;function s0(){if(Df)return Mi;Df=1,Object.defineProperty(Mi,"__esModule",{value:!0}),Mi.parse=m,Mi.serialize=_;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,d=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function m(w,j){const E=new d,B=w.length;if(B<2)return E;const b=(j==null?void 0:j.decode)||v;let g=0;do{const S=w.indexOf("=",g);if(S===-1)break;const W=w.indexOf(";",g),T=W===-1?B:W;if(S>T){g=w.lastIndexOf(";",S-1)+1;continue}const z=f(w,g,S),P=h(w,S,z),I=w.slice(z,P);if(E[I]===void 0){let O=f(w,S+1,T),H=h(w,T,O);const y=b(w.slice(O,H));E[I]=y}g=T+1}while(g<B);return E}function f(w,j,E){do{const B=w.charCodeAt(j);if(B!==32&&B!==9)return j}while(++j<E);return E}function h(w,j,E){for(;j>E;){const B=w.charCodeAt(--j);if(B!==32&&B!==9)return j+1}return E}function _(w,j,E){const B=(E==null?void 0:E.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const b=B(j);if(!s.test(b))throw new TypeError(`argument val is invalid: ${j}`);let g=w+"="+b;if(!E)return g;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);g+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);g+="; Domain="+E.domain}if(E.path){if(!a.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);g+="; Path="+E.path}if(E.expires){if(!k(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);g+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(g+="; HttpOnly"),E.secure&&(g+="; Secure"),E.partitioned&&(g+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"none":g+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return g}function v(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function k(w){return u.call(w)==="[object Date]"}return Mi}s0();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zf="popstate";function a0(n={}){function s(u,d){let{pathname:m="/",search:f="",hash:h=""}=ir(u.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),du("",{pathname:m,search:f,hash:h},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function i(u,d){let m=u.document.querySelector("base"),f="";if(m&&m.getAttribute("href")){let h=u.location.href,_=h.indexOf("#");f=_===-1?h:h.slice(0,_)}return f+"#"+(typeof d=="string"?d:Wi(d))}function a(u,d){Bt(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return l0(s,i,a,n)}function De(n,s){if(n===!1||n===null||typeof n>"u")throw new Error(s)}function Bt(n,s){if(!n){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function o0(){return Math.random().toString(36).substring(2,10)}function $f(n,s){return{usr:n.state,key:n.key,idx:s}}function du(n,s,i=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof s=="string"?ir(s):s,state:i,key:s&&s.key||a||o0()}}function Wi({pathname:n="/",search:s="",hash:i=""}){return s&&s!=="?"&&(n+=s.charAt(0)==="?"?s:"?"+s),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ir(n){let s={};if(n){let i=n.indexOf("#");i>=0&&(s.hash=n.substring(i),n=n.substring(0,i));let a=n.indexOf("?");a>=0&&(s.search=n.substring(a),n=n.substring(0,a)),n&&(s.pathname=n)}return s}function l0(n,s,i,a={}){let{window:u=document.defaultView,v5Compat:d=!1}=a,m=u.history,f="POP",h=null,_=v();_==null&&(_=0,m.replaceState({...m.state,idx:_},""));function v(){return(m.state||{idx:null}).idx}function k(){f="POP";let b=v(),g=b==null?null:b-_;_=b,h&&h({action:f,location:B.location,delta:g})}function w(b,g){f="PUSH";let S=du(B.location,b,g);i(S,b),_=v()+1;let W=$f(S,_),T=B.createHref(S);try{m.pushState(W,"",T)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;u.location.assign(T)}d&&h&&h({action:f,location:B.location,delta:1})}function j(b,g){f="REPLACE";let S=du(B.location,b,g);i(S,b),_=v();let W=$f(S,_),T=B.createHref(S);m.replaceState(W,"",T),d&&h&&h({action:f,location:B.location,delta:0})}function E(b){let g=u.location.origin!=="null"?u.location.origin:u.location.href,S=typeof b=="string"?b:Wi(b);return S=S.replace(/ $/,"%20"),De(g,`No window.location.(origin|href) available to create URL for href: ${S}`),new URL(S,g)}let B={get action(){return f},get location(){return n(u,m)},listen(b){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(zf,k),h=b,()=>{u.removeEventListener(zf,k),h=null}},createHref(b){return s(u,b)},createURL:E,encodeLocation(b){let g=E(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:w,replace:j,go(b){return m.go(b)}};return B}function Xp(n,s,i="/"){return u0(n,s,i,!1)}function u0(n,s,i,a){let u=typeof s=="string"?ir(s):s,d=In(u.pathname||"/",i);if(d==null)return null;let m=Yp(n);c0(m);let f=null;for(let h=0;f==null&&h<m.length;++h){let _=b0(d);f=y0(m[h],_,a)}return f}function Yp(n,s=[],i=[],a=""){let u=(d,m,f)=>{let h={relativePath:f===void 0?d.path||"":f,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};h.relativePath.startsWith("/")&&(De(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let _=sn([a,h.relativePath]),v=i.concat(h);d.children&&d.children.length>0&&(De(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Yp(d.children,s,v,_)),!(d.path==null&&!d.index)&&s.push({path:_,score:_0(_,d.index),routesMeta:v})};return n.forEach((d,m)=>{var f;if(d.path===""||!((f=d.path)!=null&&f.includes("?")))u(d,m);else for(let h of qp(d.path))u(d,m,h)}),s}function qp(n){let s=n.split("/");if(s.length===0)return[];let[i,...a]=s,u=i.endsWith("?"),d=i.replace(/\?$/,"");if(a.length===0)return u?[d,""]:[d];let m=qp(a.join("/")),f=[];return f.push(...m.map(h=>h===""?d:[d,h].join("/"))),u&&f.push(...m),f.map(h=>n.startsWith("/")&&h===""?"/":h)}function c0(n){n.sort((s,i)=>s.score!==i.score?i.score-s.score:x0(s.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var d0=/^:[\w-]+$/,f0=3,p0=2,h0=1,m0=10,g0=-2,Ff=n=>n==="*";function _0(n,s){let i=n.split("/"),a=i.length;return i.some(Ff)&&(a+=g0),s&&(a+=p0),i.filter(u=>!Ff(u)).reduce((u,d)=>u+(d0.test(d)?f0:d===""?h0:m0),a)}function x0(n,s){return n.length===s.length&&n.slice(0,-1).every((a,u)=>a===s[u])?n[n.length-1]-s[s.length-1]:0}function y0(n,s,i=!1){let{routesMeta:a}=n,u={},d="/",m=[];for(let f=0;f<a.length;++f){let h=a[f],_=f===a.length-1,v=d==="/"?s:s.slice(d.length)||"/",k=Na({path:h.relativePath,caseSensitive:h.caseSensitive,end:_},v),w=h.route;if(!k&&_&&i&&!a[a.length-1].route.index&&(k=Na({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!k)return null;Object.assign(u,k.params),m.push({params:u,pathname:sn([d,k.pathname]),pathnameBase:N0(sn([d,k.pathnameBase])),route:w}),k.pathnameBase!=="/"&&(d=sn([d,k.pathnameBase]))}return m}function Na(n,s){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,a]=v0(n.path,n.caseSensitive,n.end),u=s.match(i);if(!u)return null;let d=u[0],m=d.replace(/(.)\/+$/,"$1"),f=u.slice(1);return{params:a.reduce((_,{paramName:v,isOptional:k},w)=>{if(v==="*"){let E=f[w]||"";m=d.slice(0,d.length-E.length).replace(/(.)\/+$/,"$1")}const j=f[w];return k&&!j?_[v]=void 0:_[v]=(j||"").replace(/%2F/g,"/"),_},{}),pathname:d,pathnameBase:m,pattern:n}}function v0(n,s=!1,i=!0){Bt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,f,h)=>(a.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,s?void 0:"i"),a]}function b0(n){try{return n.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Bt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),n}}function In(n,s){if(s==="/")return n;if(!n.toLowerCase().startsWith(s.toLowerCase()))return null;let i=s.endsWith("/")?s.length-1:s.length,a=n.charAt(i);return a&&a!=="/"?null:n.slice(i)||"/"}function w0(n,s="/"){let{pathname:i,search:a="",hash:u=""}=typeof n=="string"?ir(n):n;return{pathname:i?i.startsWith("/")?i:k0(i,s):s,search:j0(a),hash:E0(u)}}function k0(n,s){let i=s.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function zl(n,s,i,a){return`Cannot include a '${n}' character in a manually specified \`to.${s}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function S0(n){return n.filter((s,i)=>i===0||s.route.path&&s.route.path.length>0)}function Jp(n){let s=S0(n);return s.map((i,a)=>a===s.length-1?i.pathname:i.pathnameBase)}function Zp(n,s,i,a=!1){let u;typeof n=="string"?u=ir(n):(u={...n},De(!u.pathname||!u.pathname.includes("?"),zl("?","pathname","search",u)),De(!u.pathname||!u.pathname.includes("#"),zl("#","pathname","hash",u)),De(!u.search||!u.search.includes("#"),zl("#","search","hash",u)));let d=n===""||u.pathname==="",m=d?"/":u.pathname,f;if(m==null)f=i;else{let k=s.length-1;if(!a&&m.startsWith("..")){let w=m.split("/");for(;w[0]==="..";)w.shift(),k-=1;u.pathname=w.join("/")}f=k>=0?s[k]:"/"}let h=w0(u,f),_=m&&m!=="/"&&m.endsWith("/"),v=(d||m===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(_||v)&&(h.pathname+="/"),h}var sn=n=>n.join("/").replace(/\/\/+/g,"/"),N0=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),j0=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,E0=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function C0(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var eh=["POST","PUT","PATCH","DELETE"];new Set(eh);var T0=["GET",...eh];new Set(T0);var Ur=R.createContext(null);Ur.displayName="DataRouter";var Ma=R.createContext(null);Ma.displayName="DataRouterState";var th=R.createContext({isTransitioning:!1});th.displayName="ViewTransition";var P0=R.createContext(new Map);P0.displayName="Fetchers";var I0=R.createContext(null);I0.displayName="Await";var Vt=R.createContext(null);Vt.displayName="Navigation";var Gi=R.createContext(null);Gi.displayName="Location";var ln=R.createContext({outlet:null,matches:[],isDataRoute:!1});ln.displayName="Route";var Au=R.createContext(null);Au.displayName="RouteError";function A0(n,{relative:s}={}){De(Vi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=R.useContext(Vt),{hash:u,pathname:d,search:m}=Ki(n,{relative:s}),f=d;return i!=="/"&&(f=d==="/"?i:sn([i,d])),a.createHref({pathname:f,search:m,hash:u})}function Vi(){return R.useContext(Gi)!=null}function An(){return De(Vi(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Gi).location}var nh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rh(n){R.useContext(Vt).static||R.useLayoutEffect(n)}function Ru(){let{isDataRoute:n}=R.useContext(ln);return n?G0():R0()}function R0(){De(Vi(),"useNavigate() may be used only in the context of a <Router> component.");let n=R.useContext(Ur),{basename:s,navigator:i}=R.useContext(Vt),{matches:a}=R.useContext(ln),{pathname:u}=An(),d=JSON.stringify(Jp(a)),m=R.useRef(!1);return rh(()=>{m.current=!0}),R.useCallback((h,_={})=>{if(Bt(m.current,nh),!m.current)return;if(typeof h=="number"){i.go(h);return}let v=Zp(h,JSON.parse(d),u,_.relative==="path");n==null&&s!=="/"&&(v.pathname=v.pathname==="/"?s:sn([s,v.pathname])),(_.replace?i.replace:i.push)(v,_.state,_)},[s,i,d,u,n])}R.createContext(null);function Ki(n,{relative:s}={}){let{matches:i}=R.useContext(ln),{pathname:a}=An(),u=JSON.stringify(Jp(i));return R.useMemo(()=>Zp(n,JSON.parse(u),a,s==="path"),[n,u,a,s])}function O0(n,s){return ih(n,s)}function ih(n,s,i,a){var g;De(Vi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=R.useContext(Vt),{matches:d}=R.useContext(ln),m=d[d.length-1],f=m?m.params:{},h=m?m.pathname:"/",_=m?m.pathnameBase:"/",v=m&&m.route;{let S=v&&v.path||"";sh(h,!v||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let k=An(),w;if(s){let S=typeof s=="string"?ir(s):s;De(_==="/"||((g=S.pathname)==null?void 0:g.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${S.pathname}" was given in the \`location\` prop.`),w=S}else w=k;let j=w.pathname||"/",E=j;if(_!=="/"){let S=_.replace(/^\//,"").split("/");E="/"+j.replace(/^\//,"").split("/").slice(S.length).join("/")}let B=Xp(n,{pathname:E});Bt(v||B!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Bt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=z0(B&&B.map(S=>Object.assign({},S,{params:Object.assign({},f,S.params),pathname:sn([_,u.encodeLocation?u.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?_:sn([_,u.encodeLocation?u.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),d,i,a);return s&&b?R.createElement(Gi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},b):b}function L0(){let n=H0(),s=C0(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:a},d={padding:"2px 4px",backgroundColor:a},m=null;return console.error("Error handled by React Router default ErrorBoundary:",n),m=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:d},"ErrorBoundary")," or"," ",R.createElement("code",{style:d},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},s),i?R.createElement("pre",{style:u},i):null,m)}var M0=R.createElement(L0,null),B0=class extends R.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,s){return s.location!==n.location||s.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:s.error,location:s.location,revalidation:n.revalidation||s.revalidation}}componentDidCatch(n,s){console.error("React Router caught the following error during render",n,s)}render(){return this.state.error!==void 0?R.createElement(ln.Provider,{value:this.props.routeContext},R.createElement(Au.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function D0({routeContext:n,match:s,children:i}){let a=R.useContext(Ur);return a&&a.static&&a.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=s.route.id),R.createElement(ln.Provider,{value:n},i)}function z0(n,s=[],i=null,a=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(s.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,d=i==null?void 0:i.errors;if(d!=null){let h=u.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id])!==void 0);De(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let m=!1,f=-1;if(i)for(let h=0;h<u.length;h++){let _=u[h];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(f=h),_.route.id){let{loaderData:v,errors:k}=i,w=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!k||k[_.route.id]===void 0);if(_.route.lazy||w){m=!0,f>=0?u=u.slice(0,f+1):u=[u[0]];break}}}return u.reduceRight((h,_,v)=>{let k,w=!1,j=null,E=null;i&&(k=d&&_.route.id?d[_.route.id]:void 0,j=_.route.errorElement||M0,m&&(f<0&&v===0?(sh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,E=null):f===v&&(w=!0,E=_.route.hydrateFallbackElement||null)));let B=s.concat(u.slice(0,v+1)),b=()=>{let g;return k?g=j:w?g=E:_.route.Component?g=R.createElement(_.route.Component,null):_.route.element?g=_.route.element:g=h,R.createElement(D0,{match:_,routeContext:{outlet:h,matches:B,isDataRoute:i!=null},children:g})};return i&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?R.createElement(B0,{location:i.location,revalidation:i.revalidation,component:j,error:k,children:b(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):b()},null)}function Ou(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $0(n){let s=R.useContext(Ur);return De(s,Ou(n)),s}function F0(n){let s=R.useContext(Ma);return De(s,Ou(n)),s}function U0(n){let s=R.useContext(ln);return De(s,Ou(n)),s}function Lu(n){let s=U0(n),i=s.matches[s.matches.length-1];return De(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function W0(){return Lu("useRouteId")}function H0(){var a;let n=R.useContext(Au),s=F0("useRouteError"),i=Lu("useRouteError");return n!==void 0?n:(a=s.errors)==null?void 0:a[i]}function G0(){let{router:n}=$0("useNavigate"),s=Lu("useNavigate"),i=R.useRef(!1);return rh(()=>{i.current=!0}),R.useCallback(async(u,d={})=>{Bt(i.current,nh),i.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:s,...d}))},[n,s])}var Uf={};function sh(n,s,i){!s&&!Uf[n]&&(Uf[n]=!0,Bt(!1,i))}R.memo(V0);function V0({routes:n,future:s,state:i}){return ih(n,void 0,i,s)}function Jn(n){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function K0({basename:n="/",children:s=null,location:i,navigationType:a="POP",navigator:u,static:d=!1}){De(!Vi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),f=R.useMemo(()=>({basename:m,navigator:u,static:d,future:{}}),[m,u,d]);typeof i=="string"&&(i=ir(i));let{pathname:h="/",search:_="",hash:v="",state:k=null,key:w="default"}=i,j=R.useMemo(()=>{let E=In(h,m);return E==null?null:{location:{pathname:E,search:_,hash:v,state:k,key:w},navigationType:a}},[m,h,_,v,k,w,a]);return Bt(j!=null,`<Router basename="${m}"> is not able to match the URL "${h}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:R.createElement(Vt.Provider,{value:f},R.createElement(Gi.Provider,{children:s,value:j}))}function Q0({children:n,location:s}){return O0(fu(n),s)}function fu(n,s=[]){let i=[];return R.Children.forEach(n,(a,u)=>{if(!R.isValidElement(a))return;let d=[...s,u];if(a.type===R.Fragment){i.push.apply(i,fu(a.props.children,d));return}De(a.type===Jn,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!a.props.index||!a.props.children,"An index route cannot have child routes.");let m={id:a.props.id||d.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(m.children=fu(a.props.children,d)),i.push(m)}),i}var _a="get",xa="application/x-www-form-urlencoded";function Ba(n){return n!=null&&typeof n.tagName=="string"}function X0(n){return Ba(n)&&n.tagName.toLowerCase()==="button"}function Y0(n){return Ba(n)&&n.tagName.toLowerCase()==="form"}function q0(n){return Ba(n)&&n.tagName.toLowerCase()==="input"}function J0(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Z0(n,s){return n.button===0&&(!s||s==="_self")&&!J0(n)}var ra=null;function e_(){if(ra===null)try{new FormData(document.createElement("form"),0),ra=!1}catch{ra=!0}return ra}var t_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $l(n){return n!=null&&!t_.has(n)?(Bt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xa}"`),null):n}function n_(n,s){let i,a,u,d,m;if(Y0(n)){let f=n.getAttribute("action");a=f?In(f,s):null,i=n.getAttribute("method")||_a,u=$l(n.getAttribute("enctype"))||xa,d=new FormData(n)}else if(X0(n)||q0(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||f.getAttribute("action");if(a=h?In(h,s):null,i=n.getAttribute("formmethod")||f.getAttribute("method")||_a,u=$l(n.getAttribute("formenctype"))||$l(f.getAttribute("enctype"))||xa,d=new FormData(f,n),!e_()){let{name:_,type:v,value:k}=n;if(v==="image"){let w=_?`${_}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else _&&d.append(_,k)}}else{if(Ba(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=_a,a=null,u=xa,m=n}return d&&u==="text/plain"&&(m=d,d=void 0),{action:a,method:i.toLowerCase(),encType:u,formData:d,body:m}}function Mu(n,s){if(n===!1||n===null||typeof n>"u")throw new Error(s)}async function r_(n,s){if(n.id in s)return s[n.id];try{let i=await import(n.module);return s[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function i_(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function s_(n,s,i){let a=await Promise.all(n.map(async u=>{let d=s.routes[u.route.id];if(d){let m=await r_(d,i);return m.links?m.links():[]}return[]}));return u_(a.flat(1).filter(i_).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Wf(n,s,i,a,u,d){let m=(h,_)=>i[_]?h.route.id!==i[_].route.id:!0,f=(h,_)=>{var v;return i[_].pathname!==h.pathname||((v=i[_].route.path)==null?void 0:v.endsWith("*"))&&i[_].params["*"]!==h.params["*"]};return d==="assets"?s.filter((h,_)=>m(h,_)||f(h,_)):d==="data"?s.filter((h,_)=>{var k;let v=a.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(m(h,_)||f(h,_))return!0;if(h.route.shouldRevalidate){let w=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((k=i[0])==null?void 0:k.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function a_(n,s){return o_(n.map(i=>{let a=s.routes[i.route.id];if(!a)return[];let u=[a.module];return a.imports&&(u=u.concat(a.imports)),u}).flat(1))}function o_(n){return[...new Set(n)]}function l_(n){let s={},i=Object.keys(n).sort();for(let a of i)s[a]=n[a];return s}function u_(n,s){let i=new Set;return new Set(s),n.reduce((a,u)=>{let d=JSON.stringify(l_(u));return i.has(d)||(i.add(d),a.push({key:d,link:u})),a},[])}function c_(n){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname="_root.data":s.pathname=`${s.pathname.replace(/\/$/,"")}.data`,s}function d_(){let n=R.useContext(Ur);return Mu(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function f_(){let n=R.useContext(Ma);return Mu(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Bu=R.createContext(void 0);Bu.displayName="FrameworkContext";function ah(){let n=R.useContext(Bu);return Mu(n,"You must render this element inside a <HydratedRouter> element"),n}function p_(n,s){let i=R.useContext(Bu),[a,u]=R.useState(!1),[d,m]=R.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:_,onMouseLeave:v,onTouchStart:k}=s,w=R.useRef(null);R.useEffect(()=>{if(n==="render"&&m(!0),n==="viewport"){let B=g=>{g.forEach(S=>{m(S.isIntersecting)})},b=new IntersectionObserver(B,{threshold:.5});return w.current&&b.observe(w.current),()=>{b.disconnect()}}},[n]),R.useEffect(()=>{if(a){let B=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(B)}}},[a]);let j=()=>{u(!0)},E=()=>{u(!1),m(!1)};return i?n!=="intent"?[d,w,{}]:[d,w,{onFocus:Bi(f,j),onBlur:Bi(h,E),onMouseEnter:Bi(_,j),onMouseLeave:Bi(v,E),onTouchStart:Bi(k,j)}]:[!1,w,{}]}function Bi(n,s){return i=>{n&&n(i),i.defaultPrevented||s(i)}}function h_({page:n,...s}){let{router:i}=d_(),a=R.useMemo(()=>Xp(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?R.createElement(g_,{page:n,matches:a,...s}):null}function m_(n){let{manifest:s,routeModules:i}=ah(),[a,u]=R.useState([]);return R.useEffect(()=>{let d=!1;return s_(n,s,i).then(m=>{d||u(m)}),()=>{d=!0}},[n,s,i]),a}function g_({page:n,matches:s,...i}){let a=An(),{manifest:u,routeModules:d}=ah(),{loaderData:m,matches:f}=f_(),h=R.useMemo(()=>Wf(n,s,f,u,a,"data"),[n,s,f,u,a]),_=R.useMemo(()=>Wf(n,s,f,u,a,"assets"),[n,s,f,u,a]),v=R.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let j=new Set,E=!1;if(s.forEach(b=>{var S;let g=u.routes[b.route.id];!g||!g.hasLoader||(!h.some(W=>W.route.id===b.route.id)&&b.route.id in m&&((S=d[b.route.id])!=null&&S.shouldRevalidate)||g.hasClientLoader?E=!0:j.add(b.route.id))}),j.size===0)return[];let B=c_(n);return E&&j.size>0&&B.searchParams.set("_routes",s.filter(b=>j.has(b.route.id)).map(b=>b.route.id).join(",")),[B.pathname+B.search]},[m,a,u,h,s,n,d]),k=R.useMemo(()=>a_(_,u),[_,u]),w=m_(_);return R.createElement(R.Fragment,null,v.map(j=>R.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...i})),k.map(j=>R.createElement("link",{key:j,rel:"modulepreload",href:j,...i})),w.map(({key:j,link:E})=>R.createElement("link",{key:j,...E})))}function __(...n){return s=>{n.forEach(i=>{typeof i=="function"?i(s):i!=null&&(i.current=s)})}}var oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{oh&&(window.__reactRouterVersion="7.1.3")}catch{}function x_({basename:n,children:s,window:i}){let a=R.useRef();a.current==null&&(a.current=a0({window:i,v5Compat:!0}));let u=a.current,[d,m]=R.useState({action:u.action,location:u.location}),f=R.useCallback(h=>{R.startTransition(()=>m(h))},[m]);return R.useLayoutEffect(()=>u.listen(f),[u,f]),R.createElement(K0,{basename:n,children:s,location:d.location,navigationType:d.action,navigator:u})}var lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uh=R.forwardRef(function({onClick:s,discover:i="render",prefetch:a="none",relative:u,reloadDocument:d,replace:m,state:f,target:h,to:_,preventScrollReset:v,viewTransition:k,...w},j){let{basename:E}=R.useContext(Vt),B=typeof _=="string"&&lh.test(_),b,g=!1;if(typeof _=="string"&&B&&(b=_,oh))try{let H=new URL(window.location.href),y=_.startsWith("//")?new URL(H.protocol+_):new URL(_),F=In(y.pathname,E);y.origin===H.origin&&F!=null?_=F+y.search+y.hash:g=!0}catch{Bt(!1,`<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=A0(_,{relative:u}),[W,T,z]=p_(a,w),P=w_(_,{replace:m,state:f,target:h,preventScrollReset:v,relative:u,viewTransition:k});function I(H){s&&s(H),H.defaultPrevented||P(H)}let O=R.createElement("a",{...w,...z,href:b||S,onClick:g||d?s:I,ref:__(j,T),target:h,"data-discover":!B&&i==="render"?"true":void 0});return W&&!B?R.createElement(R.Fragment,null,O,R.createElement(h_,{page:S})):O});uh.displayName="Link";var y_=R.forwardRef(function({"aria-current":s="page",caseSensitive:i=!1,className:a="",end:u=!1,style:d,to:m,viewTransition:f,children:h,..._},v){let k=Ki(m,{relative:_.relative}),w=An(),j=R.useContext(Ma),{navigator:E,basename:B}=R.useContext(Vt),b=j!=null&&E_(k)&&f===!0,g=E.encodeLocation?E.encodeLocation(k).pathname:k.pathname,S=w.pathname,W=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;i||(S=S.toLowerCase(),W=W?W.toLowerCase():null,g=g.toLowerCase()),W&&B&&(W=In(W,B)||W);const T=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let z=S===g||!u&&S.startsWith(g)&&S.charAt(T)==="/",P=W!=null&&(W===g||!u&&W.startsWith(g)&&W.charAt(g.length)==="/"),I={isActive:z,isPending:P,isTransitioning:b},O=z?s:void 0,H;typeof a=="function"?H=a(I):H=[a,z?"active":null,P?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let y=typeof d=="function"?d(I):d;return R.createElement(uh,{..._,"aria-current":O,className:H,ref:v,style:y,to:m,viewTransition:f},typeof h=="function"?h(I):h)});y_.displayName="NavLink";var v_=R.forwardRef(({discover:n="render",fetcherKey:s,navigate:i,reloadDocument:a,replace:u,state:d,method:m=_a,action:f,onSubmit:h,relative:_,preventScrollReset:v,viewTransition:k,...w},j)=>{let E=N_(),B=j_(f,{relative:_}),b=m.toLowerCase()==="get"?"get":"post",g=typeof f=="string"&&lh.test(f),S=W=>{if(h&&h(W),W.defaultPrevented)return;W.preventDefault();let T=W.nativeEvent.submitter,z=(T==null?void 0:T.getAttribute("formmethod"))||m;E(T||W.currentTarget,{fetcherKey:s,method:z,navigate:i,replace:u,state:d,relative:_,preventScrollReset:v,viewTransition:k})};return R.createElement("form",{ref:j,method:b,action:B,onSubmit:a?h:S,...w,"data-discover":!g&&n==="render"?"true":void 0})});v_.displayName="Form";function b_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ch(n){let s=R.useContext(Ur);return De(s,b_(n)),s}function w_(n,{target:s,replace:i,state:a,preventScrollReset:u,relative:d,viewTransition:m}={}){let f=Ru(),h=An(),_=Ki(n,{relative:d});return R.useCallback(v=>{if(Z0(v,s)){v.preventDefault();let k=i!==void 0?i:Wi(h)===Wi(_);f(n,{replace:k,state:a,preventScrollReset:u,relative:d,viewTransition:m})}},[h,f,_,i,a,s,n,u,d,m])}var k_=0,S_=()=>`__${String(++k_)}__`;function N_(){let{router:n}=ch("useSubmit"),{basename:s}=R.useContext(Vt),i=W0();return R.useCallback(async(a,u={})=>{let{action:d,method:m,encType:f,formData:h,body:_}=n_(a,s);if(u.navigate===!1){let v=u.fetcherKey||S_();await n.fetch(v,i,u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:_,formMethod:u.method||m,formEncType:u.encType||f,flushSync:u.flushSync})}else await n.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:_,formMethod:u.method||m,formEncType:u.encType||f,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,s,i])}function j_(n,{relative:s}={}){let{basename:i}=R.useContext(Vt),a=R.useContext(ln);De(a,"useFormAction must be used inside a RouteContext");let[u]=a.matches.slice(-1),d={...Ki(n||".",{relative:s})},m=An();if(n==null){d.search=m.search;let f=new URLSearchParams(d.search),h=f.getAll("index");if(h.some(v=>v==="")){f.delete("index"),h.filter(k=>k).forEach(k=>f.append("index",k));let v=f.toString();d.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:sn([i,d.pathname])),Wi(d)}function E_(n,s={}){let i=R.useContext(th);De(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=ch("useViewTransitionState"),u=Ki(n,{relative:s.relative});if(!i.isTransitioning)return!1;let d=In(i.currentLocation.pathname,a)||i.currentLocation.pathname,m=In(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Na(u.pathname,m)!=null||Na(u.pathname,d)!=null}new TextEncoder;var Fl={exports:{}},ft={},Ul={exports:{}},Wl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function C_(){return Hf||(Hf=1,function(n){function s(q,oe){var Z=q.length;q.push(oe);e:for(;0<Z;){var L=Z-1>>>1,V=q[L];if(0<u(V,oe))q[L]=oe,q[Z]=V,Z=L;else break e}}function i(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var oe=q[0],Z=q.pop();if(Z!==oe){q[0]=Z;e:for(var L=0,V=q.length,te=V>>>1;L<te;){var se=2*(L+1)-1,ye=q[se],ve=se+1,Ne=q[ve];if(0>u(ye,Z))ve<V&&0>u(Ne,ye)?(q[L]=Ne,q[ve]=Z,L=ve):(q[L]=ye,q[se]=Z,L=se);else if(ve<V&&0>u(Ne,Z))q[L]=Ne,q[ve]=Z,L=ve;else break e}}return oe}function u(q,oe){var Z=q.sortIndex-oe.sortIndex;return Z!==0?Z:q.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var m=Date,f=m.now();n.unstable_now=function(){return m.now()-f}}var h=[],_=[],v=1,k=null,w=3,j=!1,E=!1,B=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(q){for(var oe=i(_);oe!==null;){if(oe.callback===null)a(_);else if(oe.startTime<=q)a(_),oe.sortIndex=oe.expirationTime,s(h,oe);else break;oe=i(_)}}function T(q){if(B=!1,W(q),!E)if(i(h)!==null)E=!0,xe(z);else{var oe=i(_);oe!==null&&ke(T,oe.startTime-q)}}function z(q,oe){E=!1,B&&(B=!1,g(O),O=-1),j=!0;var Z=w;try{for(W(oe),k=i(h);k!==null&&(!(k.expirationTime>oe)||q&&!F());){var L=k.callback;if(typeof L=="function"){k.callback=null,w=k.priorityLevel;var V=L(k.expirationTime<=oe);oe=n.unstable_now(),typeof V=="function"?k.callback=V:k===i(h)&&a(h),W(oe)}else a(h);k=i(h)}if(k!==null)var te=!0;else{var se=i(_);se!==null&&ke(T,se.startTime-oe),te=!1}return te}finally{k=null,w=Z,j=!1}}var P=!1,I=null,O=-1,H=5,y=-1;function F(){return!(n.unstable_now()-y<H)}function U(){if(I!==null){var q=n.unstable_now();y=q;var oe=!0;try{oe=I(!0,q)}finally{oe?re():(P=!1,I=null)}}else P=!1}var re;if(typeof S=="function")re=function(){S(U)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,_e=ie.port2;ie.port1.onmessage=U,re=function(){_e.postMessage(null)}}else re=function(){b(U,0)};function xe(q){I=q,P||(P=!0,re())}function ke(q,oe){O=b(function(){q(n.unstable_now())},oe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){E||j||(E=!0,xe(z))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(q){switch(w){case 1:case 2:case 3:var oe=3;break;default:oe=w}var Z=w;w=oe;try{return q()}finally{w=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,oe){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=w;w=q;try{return oe()}finally{w=Z}},n.unstable_scheduleCallback=function(q,oe,Z){var L=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?L+Z:L):Z=L,q){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=Z+V,q={id:v++,callback:oe,priorityLevel:q,startTime:Z,expirationTime:V,sortIndex:-1},Z>L?(q.sortIndex=Z,s(_,q),i(h)===null&&q===i(_)&&(B?(g(O),O=-1):B=!0,ke(T,Z-L))):(q.sortIndex=V,s(h,q),E||j||(E=!0,xe(z))),q},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(q){var oe=w;return function(){var Z=w;w=oe;try{return q.apply(this,arguments)}finally{w=Z}}}}(Wl)),Wl}var Gf;function T_(){return Gf||(Gf=1,Ul.exports=C_()),Ul.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function P_(){if(Vf)return ft;Vf=1;var n=Iu(),s=T_();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,u={};function d(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(u[e]=t,e=0;e<t.length;e++)a.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},k={};function w(e){return h.call(k,e)?!0:h.call(v,e)?!1:_.test(e)?k[e]=!0:(v[e]=!0,!1)}function j(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,t,r,o){if(t===null||typeof t>"u"||j(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,r,o,c,p,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=c,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=p,this.removeEmptyString=x}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(g,S);b[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(g,S);b[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(g,S);b[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,r,o){var c=b.hasOwnProperty(t)?b[t]:null;(c!==null?c.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E(t,r,c,o)&&(r=null),o||c===null?w(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):c.mustUseProperty?e[c.propertyName]=r===null?c.type===3?!1:"":r:(t=c.attributeName,o=c.attributeNamespace,r===null?e.removeAttribute(t):(c=c.type,r=c===3||c===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var T=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),F=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),q=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,L;function V(e){if(L===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return`
`+L+e}var te=!1;function se(e,t){if(!e||te)return"";te=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var o=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){o=$}e.call(t.prototype)}else{try{throw Error()}catch($){o=$}e()}}catch($){if($&&o&&typeof $.stack=="string"){for(var c=$.stack.split(`
`),p=o.stack.split(`
`),x=c.length-1,N=p.length-1;1<=x&&0<=N&&c[x]!==p[N];)N--;for(;1<=x&&0<=N;x--,N--)if(c[x]!==p[N]){if(x!==1||N!==1)do if(x--,N--,0>N||c[x]!==p[N]){var C=`
`+c[x].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=x&&0<=N);break}}}finally{te=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?V(e):""}function ye(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ve(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case P:return"Portal";case H:return"Profiler";case O:return"StrictMode";case re:return"Suspense";case ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case F:return(e.displayName||"Context")+".Consumer";case y:return(e._context.displayName||"Context")+".Provider";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _e:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function Ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(t);case 8:return t===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function He(e){var t=Se(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,p=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(x){o=""+x,p.call(this,x)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ct(e){e._valueTracker||(e._valueTracker=He(e))}function at(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Se(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ar(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Vr(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=ce(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kr(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function or(e,t){Kr(e,t);var r=ce(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lr(e,t.type,r):t.hasOwnProperty("defaultValue")&&lr(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qr(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function lr(e,t,r){(t!=="number"||Mn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var un=Array.isArray;function Kt(e,t,r,o){if(e=e.options,t){t={};for(var c=0;c<r.length;c++)t["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=t.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+ce(r),t=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ur(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xr(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(i(92));if(un(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ce(r)}}function Yr(e,t){var r=ce(t.value),o=ce(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function qr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function G(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var J,ee=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,c){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,c)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=J.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Le(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dn=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){Dn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Qu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Xu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,c=Qu(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,c):e[r]=c}}var lm=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(e,t){if(t){if(lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Xa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,cr=null,dr=null;function Yu(e){if(e=vi(e)){if(typeof Ja!="function")throw Error(i(280));var t=e.stateNode;t&&(t=xs(t),Ja(e.stateNode,e.type,t))}}function qu(e){cr?dr?dr.push(e):dr=[e]:cr=e}function Ju(){if(cr){var e=cr,t=dr;if(dr=cr=null,Yu(e),t)for(e=0;e<t.length;e++)Yu(t[e])}}function Zu(e,t){return e(t)}function ec(){}var Za=!1;function tc(e,t,r){if(Za)return e(t,r);Za=!0;try{return Zu(e,t,r)}finally{Za=!1,(cr!==null||dr!==null)&&(ec(),Ju())}}function Zr(e,t){var r=e.stateNode;if(r===null)return null;var o=xs(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var eo=!1;if(f)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){eo=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{eo=!1}function um(e,t,r,o,c,p,x,N,C){var $=Array.prototype.slice.call(arguments,3);try{t.apply(r,$)}catch(Q){this.onError(Q)}}var ti=!1,Yi=null,qi=!1,to=null,cm={onError:function(e){ti=!0,Yi=e}};function dm(e,t,r,o,c,p,x,N,C){ti=!1,Yi=null,um.apply(cm,arguments)}function fm(e,t,r,o,c,p,x,N,C){if(dm.apply(this,arguments),ti){if(ti){var $=Yi;ti=!1,Yi=null}else throw Error(i(198));qi||(qi=!0,to=$)}}function zn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function nc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rc(e){if(zn(e)!==e)throw Error(i(188))}function pm(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,o=t;;){var c=r.return;if(c===null)break;var p=c.alternate;if(p===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===r)return rc(c),e;if(p===o)return rc(c),t;p=p.sibling}throw Error(i(188))}if(r.return!==o.return)r=c,o=p;else{for(var x=!1,N=c.child;N;){if(N===r){x=!0,r=c,o=p;break}if(N===o){x=!0,o=c,r=p;break}N=N.sibling}if(!x){for(N=p.child;N;){if(N===r){x=!0,r=p,o=c;break}if(N===o){x=!0,o=p,r=c;break}N=N.sibling}if(!x)throw Error(i(189))}}if(r.alternate!==o)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function ic(e){return e=pm(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var ac=s.unstable_scheduleCallback,oc=s.unstable_cancelCallback,hm=s.unstable_shouldYield,mm=s.unstable_requestPaint,$e=s.unstable_now,gm=s.unstable_getCurrentPriorityLevel,no=s.unstable_ImmediatePriority,lc=s.unstable_UserBlockingPriority,Ji=s.unstable_NormalPriority,_m=s.unstable_LowPriority,uc=s.unstable_IdlePriority,Zi=null,Dt=null;function xm(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Zi,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:bm,ym=Math.log,vm=Math.LN2;function bm(e){return e>>>=0,e===0?32:31-(ym(e)/vm|0)|0}var es=64,ts=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,c=e.suspendedLanes,p=e.pingedLanes,x=r&268435455;if(x!==0){var N=x&~c;N!==0?o=ni(N):(p&=x,p!==0&&(o=ni(p)))}else x=r&~c,x!==0?o=ni(x):p!==0&&(o=ni(p));if(o===0)return 0;if(t!==0&&t!==o&&(t&c)===0&&(c=o&-o,p=t&-t,c>=p||c===16&&(p&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Tt(t),c=1<<r,o|=e[r],t&=~c;return o}function wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function km(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,p=e.pendingLanes;0<p;){var x=31-Tt(p),N=1<<x,C=c[x];C===-1?((N&r)===0||(N&o)!==0)&&(c[x]=wm(N,t)):C<=t&&(e.expiredLanes|=N),p&=~N}}function ro(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cc(){var e=es;return es<<=1,(es&4194240)===0&&(es=64),e}function io(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ri(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=r}function Sm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var c=31-Tt(r),p=1<<c;t[c]=0,o[c]=-1,e[c]=-1,r&=~p}}function so(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Tt(r),c=1<<o;c&t|e[o]&t&&(e[o]|=t),r&=~c}}var Te=0;function dc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fc,ao,pc,hc,mc,oo=!1,rs=[],cn=null,dn=null,fn=null,ii=new Map,si=new Map,pn=[],Nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function ai(e,t,r,o,c,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:p,targetContainers:[c]},t!==null&&(t=vi(t),t!==null&&ao(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function jm(e,t,r,o,c){switch(t){case"focusin":return cn=ai(cn,e,t,r,o,c),!0;case"dragenter":return dn=ai(dn,e,t,r,o,c),!0;case"mouseover":return fn=ai(fn,e,t,r,o,c),!0;case"pointerover":var p=c.pointerId;return ii.set(p,ai(ii.get(p)||null,e,t,r,o,c)),!0;case"gotpointercapture":return p=c.pointerId,si.set(p,ai(si.get(p)||null,e,t,r,o,c)),!0}return!1}function _c(e){var t=$n(e.target);if(t!==null){var r=zn(t);if(r!==null){if(t=r.tag,t===13){if(t=nc(r),t!==null){e.blockedOn=t,mc(e.priority,function(){pc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=uo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Ya=o,r.target.dispatchEvent(o),Ya=null}else return t=vi(r),t!==null&&ao(t),e.blockedOn=r,!1;t.shift()}return!0}function xc(e,t,r){is(e)&&r.delete(t)}function Em(){oo=!1,cn!==null&&is(cn)&&(cn=null),dn!==null&&is(dn)&&(dn=null),fn!==null&&is(fn)&&(fn=null),ii.forEach(xc),si.forEach(xc)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,oo||(oo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Em)))}function li(e){function t(c){return oi(c,e)}if(0<rs.length){oi(rs[0],e);for(var r=1;r<rs.length;r++){var o=rs[r];o.blockedOn===e&&(o.blockedOn=null)}}for(cn!==null&&oi(cn,e),dn!==null&&oi(dn,e),fn!==null&&oi(fn,e),ii.forEach(t),si.forEach(t),r=0;r<pn.length;r++)o=pn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<pn.length&&(r=pn[0],r.blockedOn===null);)_c(r),r.blockedOn===null&&pn.shift()}var fr=T.ReactCurrentBatchConfig,ss=!0;function Cm(e,t,r,o){var c=Te,p=fr.transition;fr.transition=null;try{Te=1,lo(e,t,r,o)}finally{Te=c,fr.transition=p}}function Tm(e,t,r,o){var c=Te,p=fr.transition;fr.transition=null;try{Te=4,lo(e,t,r,o)}finally{Te=c,fr.transition=p}}function lo(e,t,r,o){if(ss){var c=uo(e,t,r,o);if(c===null)Eo(e,t,o,as,r),gc(e,o);else if(jm(c,e,t,r,o))o.stopPropagation();else if(gc(e,o),t&4&&-1<Nm.indexOf(e)){for(;c!==null;){var p=vi(c);if(p!==null&&fc(p),p=uo(e,t,r,o),p===null&&Eo(e,t,o,as,r),p===c)break;c=p}c!==null&&o.stopPropagation()}else Eo(e,t,o,null,r)}}var as=null;function uo(e,t,r,o){if(as=null,e=qa(o),e=$n(e),e!==null)if(t=zn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=nc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return as=e,null}function yc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gm()){case no:return 1;case lc:return 4;case Ji:case _m:return 16;case uc:return 536870912;default:return 16}default:return 16}}var hn=null,co=null,os=null;function vc(){if(os)return os;var e,t=co,r=t.length,o,c="value"in hn?hn.value:hn.textContent,p=c.length;for(e=0;e<r&&t[e]===c[e];e++);var x=r-e;for(o=1;o<=x&&t[r-o]===c[p-o];o++);return os=c.slice(e,1<o?1-o:void 0)}function ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function us(){return!0}function bc(){return!1}function mt(e){function t(r,o,c,p,x){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=p,this.target=x,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(r=e[N],this[N]=r?r(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?us:bc,this.isPropagationStopped=bc,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=us)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=us)},persist:function(){},isPersistent:us}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=mt(pr),ui=Z({},pr,{view:0,detail:0}),Pm=mt(ui),po,ho,ci,cs=Z({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(po=e.screenX-ci.screenX,ho=e.screenY-ci.screenY):ho=po=0,ci=e),po)},movementY:function(e){return"movementY"in e?e.movementY:ho}}),wc=mt(cs),Im=Z({},cs,{dataTransfer:0}),Am=mt(Im),Rm=Z({},ui,{relatedTarget:0}),mo=mt(Rm),Om=Z({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lm=mt(Om),Mm=Z({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bm=mt(Mm),Dm=Z({},pr,{data:0}),kc=mt(Dm),zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Um(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fm[e])?!!t[e]:!1}function go(){return Um}var Wm=Z({},ui,{key:function(e){if(e.key){var t=zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:go,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hm=mt(Wm),Gm=Z({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=mt(Gm),Vm=Z({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:go}),Km=mt(Vm),Qm=Z({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=mt(Qm),Ym=Z({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qm=mt(Ym),Jm=[9,13,27,32],_o=f&&"CompositionEvent"in window,di=null;f&&"documentMode"in document&&(di=document.documentMode);var Zm=f&&"TextEvent"in window&&!di,Nc=f&&(!_o||di&&8<di&&11>=di),jc=" ",Ec=!1;function Cc(e,t){switch(e){case"keyup":return Jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function eg(e,t){switch(e){case"compositionend":return Tc(t);case"keypress":return t.which!==32?null:(Ec=!0,jc);case"textInput":return e=t.data,e===jc&&Ec?null:e;default:return null}}function tg(e,t){if(hr)return e==="compositionend"||!_o&&Cc(e,t)?(e=vc(),os=co=hn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ng[e.type]:t==="textarea"}function Ic(e,t,r,o){qu(o),t=ms(t,"onChange"),0<t.length&&(r=new fo("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var fi=null,pi=null;function rg(e){Xc(e,0)}function ds(e){var t=yr(e);if(at(t))return e}function ig(e,t){if(e==="change")return t}var Ac=!1;if(f){var xo;if(f){var yo="oninput"in document;if(!yo){var Rc=document.createElement("div");Rc.setAttribute("oninput","return;"),yo=typeof Rc.oninput=="function"}xo=yo}else xo=!1;Ac=xo&&(!document.documentMode||9<document.documentMode)}function Oc(){fi&&(fi.detachEvent("onpropertychange",Lc),pi=fi=null)}function Lc(e){if(e.propertyName==="value"&&ds(pi)){var t=[];Ic(t,pi,e,qa(e)),tc(rg,t)}}function sg(e,t,r){e==="focusin"?(Oc(),fi=t,pi=r,fi.attachEvent("onpropertychange",Lc)):e==="focusout"&&Oc()}function ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(pi)}function og(e,t){if(e==="click")return ds(t)}function lg(e,t){if(e==="input"||e==="change")return ds(t)}function ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:ug;function hi(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!h.call(t,c)||!Pt(e[c],t[c]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,t){var r=Mc(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mc(r)}}function Dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=Mn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Mn(e.document)}return t}function vo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cg(e){var t=zc(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Dc(r.ownerDocument.documentElement,r)){if(o!==null&&vo(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=r.textContent.length,p=Math.min(o.start,c);o=o.end===void 0?p:Math.min(o.end,c),!e.extend&&p>o&&(c=o,o=p,p=c),c=Bc(r,p);var x=Bc(r,o);c&&x&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),p>o?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dg=f&&"documentMode"in document&&11>=document.documentMode,mr=null,bo=null,mi=null,wo=!1;function $c(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wo||mr==null||mr!==Mn(o)||(o=mr,"selectionStart"in o&&vo(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mi&&hi(mi,o)||(mi=o,o=ms(bo,"onSelect"),0<o.length&&(t=new fo("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=mr)))}function fs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gr={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionend:fs("Transition","TransitionEnd")},ko={},Fc={};f&&(Fc=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function ps(e){if(ko[e])return ko[e];if(!gr[e])return e;var t=gr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Fc)return ko[e]=t[r];return e}var Uc=ps("animationend"),Wc=ps("animationiteration"),Hc=ps("animationstart"),Gc=ps("transitionend"),Vc=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){Vc.set(e,t),d(t,[e])}for(var So=0;So<Kc.length;So++){var No=Kc[So],fg=No.toLowerCase(),pg=No[0].toUpperCase()+No.slice(1);mn(fg,"on"+pg)}mn(Uc,"onAnimationEnd"),mn(Wc,"onAnimationIteration"),mn(Hc,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(Gc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function Qc(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,fm(o,t,void 0,e),e.currentTarget=null}function Xc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;e:{var p=void 0;if(t)for(var x=o.length-1;0<=x;x--){var N=o[x],C=N.instance,$=N.currentTarget;if(N=N.listener,C!==p&&c.isPropagationStopped())break e;Qc(c,N,$),p=C}else for(x=0;x<o.length;x++){if(N=o[x],C=N.instance,$=N.currentTarget,N=N.listener,C!==p&&c.isPropagationStopped())break e;Qc(c,N,$),p=C}}}if(qi)throw e=to,qi=!1,to=null,e}function Ie(e,t){var r=t[Ro];r===void 0&&(r=t[Ro]=new Set);var o=e+"__bubble";r.has(o)||(Yc(t,e,2,!1),r.add(o))}function jo(e,t,r){var o=0;t&&(o|=4),Yc(r,e,o,t)}var hs="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[hs]){e[hs]=!0,a.forEach(function(r){r!=="selectionchange"&&(hg.has(r)||jo(r,!1,e),jo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hs]||(t[hs]=!0,jo("selectionchange",!1,t))}}function Yc(e,t,r,o){switch(yc(t)){case 1:var c=Cm;break;case 4:c=Tm;break;default:c=lo}r=c.bind(null,t,r,e),c=void 0,!eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,r,{capture:!0,passive:c}):e.addEventListener(t,r,!0):c!==void 0?e.addEventListener(t,r,{passive:c}):e.addEventListener(t,r,!1)}function Eo(e,t,r,o,c){var p=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var N=o.stateNode.containerInfo;if(N===c||N.nodeType===8&&N.parentNode===c)break;if(x===4)for(x=o.return;x!==null;){var C=x.tag;if((C===3||C===4)&&(C=x.stateNode.containerInfo,C===c||C.nodeType===8&&C.parentNode===c))return;x=x.return}for(;N!==null;){if(x=$n(N),x===null)return;if(C=x.tag,C===5||C===6){o=p=x;continue e}N=N.parentNode}}o=o.return}tc(function(){var $=p,Q=qa(r),X=[];e:{var K=Vc.get(e);if(K!==void 0){var ne=fo,le=e;switch(e){case"keypress":if(ls(r)===0)break e;case"keydown":case"keyup":ne=Hm;break;case"focusin":le="focus",ne=mo;break;case"focusout":le="blur",ne=mo;break;case"beforeblur":case"afterblur":ne=mo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Km;break;case Uc:case Wc:case Hc:ne=Lm;break;case Gc:ne=Xm;break;case"scroll":ne=Pm;break;case"wheel":ne=qm;break;case"copy":case"cut":case"paste":ne=Bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=Sc}var ue=(t&4)!==0,Fe=!ue&&e==="scroll",M=ue?K!==null?K+"Capture":null:K;ue=[];for(var A=$,D;A!==null;){D=A;var Y=D.stateNode;if(D.tag===5&&Y!==null&&(D=Y,M!==null&&(Y=Zr(A,M),Y!=null&&ue.push(xi(A,Y,D)))),Fe)break;A=A.return}0<ue.length&&(K=new ne(K,le,null,r,Q),X.push({event:K,listeners:ue}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",K&&r!==Ya&&(le=r.relatedTarget||r.fromElement)&&($n(le)||le[Qt]))break e;if((ne||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ne?(le=r.relatedTarget||r.toElement,ne=$,le=le?$n(le):null,le!==null&&(Fe=zn(le),le!==Fe||le.tag!==5&&le.tag!==6)&&(le=null)):(ne=null,le=$),ne!==le)){if(ue=wc,Y="onMouseLeave",M="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ue=Sc,Y="onPointerLeave",M="onPointerEnter",A="pointer"),Fe=ne==null?K:yr(ne),D=le==null?K:yr(le),K=new ue(Y,A+"leave",ne,r,Q),K.target=Fe,K.relatedTarget=D,Y=null,$n(Q)===$&&(ue=new ue(M,A+"enter",le,r,Q),ue.target=D,ue.relatedTarget=Fe,Y=ue),Fe=Y,ne&&le)t:{for(ue=ne,M=le,A=0,D=ue;D;D=_r(D))A++;for(D=0,Y=M;Y;Y=_r(Y))D++;for(;0<A-D;)ue=_r(ue),A--;for(;0<D-A;)M=_r(M),D--;for(;A--;){if(ue===M||M!==null&&ue===M.alternate)break t;ue=_r(ue),M=_r(M)}ue=null}else ue=null;ne!==null&&qc(X,K,ne,ue,!1),le!==null&&Fe!==null&&qc(X,Fe,le,ue,!0)}}e:{if(K=$?yr($):window,ne=K.nodeName&&K.nodeName.toLowerCase(),ne==="select"||ne==="input"&&K.type==="file")var de=ig;else if(Pc(K))if(Ac)de=lg;else{de=ag;var fe=sg}else(ne=K.nodeName)&&ne.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(de=og);if(de&&(de=de(e,$))){Ic(X,de,r,Q);break e}fe&&fe(e,K,$),e==="focusout"&&(fe=K._wrapperState)&&fe.controlled&&K.type==="number"&&lr(K,"number",K.value)}switch(fe=$?yr($):window,e){case"focusin":(Pc(fe)||fe.contentEditable==="true")&&(mr=fe,bo=$,mi=null);break;case"focusout":mi=bo=mr=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,$c(X,r,Q);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":$c(X,r,Q)}var pe;if(_o)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else hr?Cc(e,r)&&(ge="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ge="onCompositionStart");ge&&(Nc&&r.locale!=="ko"&&(hr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&hr&&(pe=vc()):(hn=Q,co="value"in hn?hn.value:hn.textContent,hr=!0)),fe=ms($,ge),0<fe.length&&(ge=new kc(ge,e,null,r,Q),X.push({event:ge,listeners:fe}),pe?ge.data=pe:(pe=Tc(r),pe!==null&&(ge.data=pe)))),(pe=Zm?eg(e,r):tg(e,r))&&($=ms($,"onBeforeInput"),0<$.length&&(Q=new kc("onBeforeInput","beforeinput",null,r,Q),X.push({event:Q,listeners:$}),Q.data=pe))}Xc(X,t)})}function xi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ms(e,t){for(var r=t+"Capture",o=[];e!==null;){var c=e,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=Zr(e,r),p!=null&&o.unshift(xi(e,p,c)),p=Zr(e,t),p!=null&&o.push(xi(e,p,c))),e=e.return}return o}function _r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qc(e,t,r,o,c){for(var p=t._reactName,x=[];r!==null&&r!==o;){var N=r,C=N.alternate,$=N.stateNode;if(C!==null&&C===o)break;N.tag===5&&$!==null&&(N=$,c?(C=Zr(r,p),C!=null&&x.unshift(xi(r,C,N))):c||(C=Zr(r,p),C!=null&&x.push(xi(r,C,N)))),r=r.return}x.length!==0&&e.push({event:t,listeners:x})}var mg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function Jc(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(gg,"")}function gs(e,t,r){if(t=Jc(t),Jc(e)!==t&&r)throw Error(i(425))}function _s(){}var Co=null,To=null;function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,xg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(yg)}:Io;function yg(e){setTimeout(function(){throw e})}function Ao(e,t){var r=t,o=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(o===0){e.removeChild(c),li(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=c}while(r);li(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),zt="__reactFiber$"+xr,yi="__reactProps$"+xr,Qt="__reactContainer$"+xr,Ro="__reactEvents$"+xr,vg="__reactListeners$"+xr,bg="__reactHandles$"+xr;function $n(e){var t=e[zt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qt]||r[zt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ed(e);e!==null;){if(r=e[zt])return r;e=ed(e)}return t}e=r,r=e.parentNode}return null}function vi(e){return e=e[zt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function xs(e){return e[yi]||null}var Oo=[],vr=-1;function _n(e){return{current:e}}function Ae(e){0>vr||(e.current=Oo[vr],Oo[vr]=null,vr--)}function Pe(e,t){vr++,Oo[vr]=e.current,e.current=t}var xn={},Ze=_n(xn),ot=_n(!1),Fn=xn;function br(e,t){var r=e.type.contextTypes;if(!r)return xn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in r)c[p]=t[p];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function lt(e){return e=e.childContextTypes,e!=null}function ys(){Ae(ot),Ae(Ze)}function td(e,t,r){if(Ze.current!==xn)throw Error(i(168));Pe(Ze,t),Pe(ot,r)}function nd(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var c in o)if(!(c in t))throw Error(i(108,Ne(e)||"Unknown",c));return Z({},r,o)}function vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Fn=Ze.current,Pe(Ze,e),Pe(ot,ot.current),!0}function rd(e,t,r){var o=e.stateNode;if(!o)throw Error(i(169));r?(e=nd(e,t,Fn),o.__reactInternalMemoizedMergedChildContext=e,Ae(ot),Ae(Ze),Pe(Ze,e)):Ae(ot),Pe(ot,r)}var Xt=null,bs=!1,Lo=!1;function id(e){Xt===null?Xt=[e]:Xt.push(e)}function wg(e){bs=!0,id(e)}function yn(){if(!Lo&&Xt!==null){Lo=!0;var e=0,t=Te;try{var r=Xt;for(Te=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Xt=null,bs=!1}catch(c){throw Xt!==null&&(Xt=Xt.slice(e+1)),ac(no,yn),c}finally{Te=t,Lo=!1}}return null}var wr=[],kr=0,ws=null,ks=0,bt=[],wt=0,Un=null,Yt=1,qt="";function Wn(e,t){wr[kr++]=ks,wr[kr++]=ws,ws=e,ks=t}function sd(e,t,r){bt[wt++]=Yt,bt[wt++]=qt,bt[wt++]=Un,Un=e;var o=Yt;e=qt;var c=32-Tt(o)-1;o&=~(1<<c),r+=1;var p=32-Tt(t)+c;if(30<p){var x=c-c%5;p=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Yt=1<<32-Tt(t)+c|r<<c|o,qt=p+e}else Yt=1<<p|r<<c|o,qt=e}function Mo(e){e.return!==null&&(Wn(e,1),sd(e,1,0))}function Bo(e){for(;e===ws;)ws=wr[--kr],wr[kr]=null,ks=wr[--kr],wr[kr]=null;for(;e===Un;)Un=bt[--wt],bt[wt]=null,qt=bt[--wt],bt[wt]=null,Yt=bt[--wt],bt[wt]=null}var gt=null,_t=null,Oe=!1,It=null;function ad(e,t){var r=jt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function od(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,_t=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Un!==null?{id:Yt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=jt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,gt=e,_t=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(Oe){var t=_t;if(t){var r=t;if(!od(e,t)){if(Do(e))throw Error(i(418));t=gn(r.nextSibling);var o=gt;t&&od(e,t)?ad(o,r):(e.flags=e.flags&-4097|2,Oe=!1,gt=e)}}else{if(Do(e))throw Error(i(418));e.flags=e.flags&-4097|2,Oe=!1,gt=e}}}function ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function Ss(e){if(e!==gt)return!1;if(!Oe)return ld(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Po(e.type,e.memoizedProps)),t&&(t=_t)){if(Do(e))throw ud(),Error(i(418));for(;t;)ad(e,t),t=gn(t.nextSibling)}if(ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){_t=gn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=gt?gn(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=_t;e;)e=gn(e.nextSibling)}function Sr(){_t=gt=null,Oe=!1}function $o(e){It===null?It=[e]:It.push(e)}var kg=T.ReactCurrentBatchConfig;function bi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var o=r.stateNode}if(!o)throw Error(i(147,e));var c=o,p=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===p?t.ref:(t=function(x){var N=c.refs;x===null?delete N[p]:N[p]=x},t._stringRef=p,t)}if(typeof e!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Ns(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cd(e){var t=e._init;return t(e._payload)}function dd(e){function t(M,A){if(e){var D=M.deletions;D===null?(M.deletions=[A],M.flags|=16):D.push(A)}}function r(M,A){if(!e)return null;for(;A!==null;)t(M,A),A=A.sibling;return null}function o(M,A){for(M=new Map;A!==null;)A.key!==null?M.set(A.key,A):M.set(A.index,A),A=A.sibling;return M}function c(M,A){return M=En(M,A),M.index=0,M.sibling=null,M}function p(M,A,D){return M.index=D,e?(D=M.alternate,D!==null?(D=D.index,D<A?(M.flags|=2,A):D):(M.flags|=2,A)):(M.flags|=1048576,A)}function x(M){return e&&M.alternate===null&&(M.flags|=2),M}function N(M,A,D,Y){return A===null||A.tag!==6?(A=Il(D,M.mode,Y),A.return=M,A):(A=c(A,D),A.return=M,A)}function C(M,A,D,Y){var de=D.type;return de===I?Q(M,A,D.props.children,Y,D.key):A!==null&&(A.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===xe&&cd(de)===A.type)?(Y=c(A,D.props),Y.ref=bi(M,A,D),Y.return=M,Y):(Y=Xs(D.type,D.key,D.props,null,M.mode,Y),Y.ref=bi(M,A,D),Y.return=M,Y)}function $(M,A,D,Y){return A===null||A.tag!==4||A.stateNode.containerInfo!==D.containerInfo||A.stateNode.implementation!==D.implementation?(A=Al(D,M.mode,Y),A.return=M,A):(A=c(A,D.children||[]),A.return=M,A)}function Q(M,A,D,Y,de){return A===null||A.tag!==7?(A=qn(D,M.mode,Y,de),A.return=M,A):(A=c(A,D),A.return=M,A)}function X(M,A,D){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Il(""+A,M.mode,D),A.return=M,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case z:return D=Xs(A.type,A.key,A.props,null,M.mode,D),D.ref=bi(M,null,A),D.return=M,D;case P:return A=Al(A,M.mode,D),A.return=M,A;case xe:var Y=A._init;return X(M,Y(A._payload),D)}if(un(A)||oe(A))return A=qn(A,M.mode,D,null),A.return=M,A;Ns(M,A)}return null}function K(M,A,D,Y){var de=A!==null?A.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return de!==null?null:N(M,A,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case z:return D.key===de?C(M,A,D,Y):null;case P:return D.key===de?$(M,A,D,Y):null;case xe:return de=D._init,K(M,A,de(D._payload),Y)}if(un(D)||oe(D))return de!==null?null:Q(M,A,D,Y,null);Ns(M,D)}return null}function ne(M,A,D,Y,de){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(D)||null,N(A,M,""+Y,de);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case z:return M=M.get(Y.key===null?D:Y.key)||null,C(A,M,Y,de);case P:return M=M.get(Y.key===null?D:Y.key)||null,$(A,M,Y,de);case xe:var fe=Y._init;return ne(M,A,D,fe(Y._payload),de)}if(un(Y)||oe(Y))return M=M.get(D)||null,Q(A,M,Y,de,null);Ns(A,Y)}return null}function le(M,A,D,Y){for(var de=null,fe=null,pe=A,ge=A=0,Xe=null;pe!==null&&ge<D.length;ge++){pe.index>ge?(Xe=pe,pe=null):Xe=pe.sibling;var Ee=K(M,pe,D[ge],Y);if(Ee===null){pe===null&&(pe=Xe);break}e&&pe&&Ee.alternate===null&&t(M,pe),A=p(Ee,A,ge),fe===null?de=Ee:fe.sibling=Ee,fe=Ee,pe=Xe}if(ge===D.length)return r(M,pe),Oe&&Wn(M,ge),de;if(pe===null){for(;ge<D.length;ge++)pe=X(M,D[ge],Y),pe!==null&&(A=p(pe,A,ge),fe===null?de=pe:fe.sibling=pe,fe=pe);return Oe&&Wn(M,ge),de}for(pe=o(M,pe);ge<D.length;ge++)Xe=ne(pe,M,ge,D[ge],Y),Xe!==null&&(e&&Xe.alternate!==null&&pe.delete(Xe.key===null?ge:Xe.key),A=p(Xe,A,ge),fe===null?de=Xe:fe.sibling=Xe,fe=Xe);return e&&pe.forEach(function(Cn){return t(M,Cn)}),Oe&&Wn(M,ge),de}function ue(M,A,D,Y){var de=oe(D);if(typeof de!="function")throw Error(i(150));if(D=de.call(D),D==null)throw Error(i(151));for(var fe=de=null,pe=A,ge=A=0,Xe=null,Ee=D.next();pe!==null&&!Ee.done;ge++,Ee=D.next()){pe.index>ge?(Xe=pe,pe=null):Xe=pe.sibling;var Cn=K(M,pe,Ee.value,Y);if(Cn===null){pe===null&&(pe=Xe);break}e&&pe&&Cn.alternate===null&&t(M,pe),A=p(Cn,A,ge),fe===null?de=Cn:fe.sibling=Cn,fe=Cn,pe=Xe}if(Ee.done)return r(M,pe),Oe&&Wn(M,ge),de;if(pe===null){for(;!Ee.done;ge++,Ee=D.next())Ee=X(M,Ee.value,Y),Ee!==null&&(A=p(Ee,A,ge),fe===null?de=Ee:fe.sibling=Ee,fe=Ee);return Oe&&Wn(M,ge),de}for(pe=o(M,pe);!Ee.done;ge++,Ee=D.next())Ee=ne(pe,M,ge,Ee.value,Y),Ee!==null&&(e&&Ee.alternate!==null&&pe.delete(Ee.key===null?ge:Ee.key),A=p(Ee,A,ge),fe===null?de=Ee:fe.sibling=Ee,fe=Ee);return e&&pe.forEach(function(t0){return t(M,t0)}),Oe&&Wn(M,ge),de}function Fe(M,A,D,Y){if(typeof D=="object"&&D!==null&&D.type===I&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case z:e:{for(var de=D.key,fe=A;fe!==null;){if(fe.key===de){if(de=D.type,de===I){if(fe.tag===7){r(M,fe.sibling),A=c(fe,D.props.children),A.return=M,M=A;break e}}else if(fe.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===xe&&cd(de)===fe.type){r(M,fe.sibling),A=c(fe,D.props),A.ref=bi(M,fe,D),A.return=M,M=A;break e}r(M,fe);break}else t(M,fe);fe=fe.sibling}D.type===I?(A=qn(D.props.children,M.mode,Y,D.key),A.return=M,M=A):(Y=Xs(D.type,D.key,D.props,null,M.mode,Y),Y.ref=bi(M,A,D),Y.return=M,M=Y)}return x(M);case P:e:{for(fe=D.key;A!==null;){if(A.key===fe)if(A.tag===4&&A.stateNode.containerInfo===D.containerInfo&&A.stateNode.implementation===D.implementation){r(M,A.sibling),A=c(A,D.children||[]),A.return=M,M=A;break e}else{r(M,A);break}else t(M,A);A=A.sibling}A=Al(D,M.mode,Y),A.return=M,M=A}return x(M);case xe:return fe=D._init,Fe(M,A,fe(D._payload),Y)}if(un(D))return le(M,A,D,Y);if(oe(D))return ue(M,A,D,Y);Ns(M,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,A!==null&&A.tag===6?(r(M,A.sibling),A=c(A,D),A.return=M,M=A):(r(M,A),A=Il(D,M.mode,Y),A.return=M,M=A),x(M)):r(M,A)}return Fe}var Nr=dd(!0),fd=dd(!1),js=_n(null),Es=null,jr=null,Fo=null;function Uo(){Fo=jr=Es=null}function Wo(e){var t=js.current;Ae(js),e._currentValue=t}function Ho(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Er(e,t){Es=e,Fo=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Fo!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(Es===null)throw Error(i(308));jr=e,Es.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Hn=null;function Go(e){Hn===null?Hn=[e]:Hn.push(e)}function pd(e,t,r,o){var c=t.interleaved;return c===null?(r.next=r,Go(t)):(r.next=c.next,c.next=r),t.interleaved=r,Jt(e,o)}function Jt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var vn=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(je&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,Jt(e,r)}return c=o.interleaved,c===null?(t.next=t,Go(o)):(t.next=c.next,c.next=t),o.interleaved=t,Jt(e,r)}function Cs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,so(e,r)}}function md(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var x={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};p===null?c=p=x:p=p.next=x,r=r.next}while(r!==null);p===null?c=p=t:p=p.next=t}else c=p=t;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ts(e,t,r,o){var c=e.updateQueue;vn=!1;var p=c.firstBaseUpdate,x=c.lastBaseUpdate,N=c.shared.pending;if(N!==null){c.shared.pending=null;var C=N,$=C.next;C.next=null,x===null?p=$:x.next=$,x=C;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,N=Q.lastBaseUpdate,N!==x&&(N===null?Q.firstBaseUpdate=$:N.next=$,Q.lastBaseUpdate=C))}if(p!==null){var X=c.baseState;x=0,Q=$=C=null,N=p;do{var K=N.lane,ne=N.eventTime;if((o&K)===K){Q!==null&&(Q=Q.next={eventTime:ne,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var le=e,ue=N;switch(K=t,ne=r,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){X=le.call(ne,X,K);break e}X=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,K=typeof le=="function"?le.call(ne,X,K):le,K==null)break e;X=Z({},X,K);break e;case 2:vn=!0}}N.callback!==null&&N.lane!==0&&(e.flags|=64,K=c.effects,K===null?c.effects=[N]:K.push(N))}else ne={eventTime:ne,lane:K,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Q===null?($=Q=ne,C=X):Q=Q.next=ne,x|=K;if(N=N.next,N===null){if(N=c.shared.pending,N===null)break;K=N,N=K.next,K.next=null,c.lastBaseUpdate=K,c.shared.pending=null}}while(!0);if(Q===null&&(C=X),c.baseState=C,c.firstBaseUpdate=$,c.lastBaseUpdate=Q,t=c.shared.interleaved,t!==null){c=t;do x|=c.lane,c=c.next;while(c!==t)}else p===null&&(c.shared.lanes=0);Kn|=x,e.lanes=x,e.memoizedState=X}}function gd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],c=o.callback;if(c!==null){if(o.callback=null,o=r,typeof c!="function")throw Error(i(191,c));c.call(o)}}}var wi={},$t=_n(wi),ki=_n(wi),Si=_n(wi);function Gn(e){if(e===wi)throw Error(i(174));return e}function Ko(e,t){switch(Pe(Si,t),Pe(ki,e),Pe($t,wi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:G(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=G(t,e)}Ae($t),Pe($t,t)}function Cr(){Ae($t),Ae(ki),Ae(Si)}function _d(e){Gn(Si.current);var t=Gn($t.current),r=G(t,e.type);t!==r&&(Pe(ki,e),Pe($t,r))}function Qo(e){ki.current===e&&(Ae($t),Ae(ki))}var Me=_n(0);function Ps(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xo=[];function Yo(){for(var e=0;e<Xo.length;e++)Xo[e]._workInProgressVersionPrimary=null;Xo.length=0}var Is=T.ReactCurrentDispatcher,qo=T.ReactCurrentBatchConfig,Vn=0,Be=null,Ge=null,Ke=null,As=!1,Ni=!1,ji=0,Sg=0;function et(){throw Error(i(321))}function Jo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Pt(e[r],t[r]))return!1;return!0}function Zo(e,t,r,o,c,p){if(Vn=p,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?Cg:Tg,e=r(o,c),Ni){p=0;do{if(Ni=!1,ji=0,25<=p)throw Error(i(301));p+=1,Ke=Ge=null,t.updateQueue=null,Is.current=Pg,e=r(o,c)}while(Ni)}if(Is.current=Ls,t=Ge!==null&&Ge.next!==null,Vn=0,Ke=Ge=Be=null,As=!1,t)throw Error(i(300));return e}function el(){var e=ji!==0;return ji=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Be.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function St(){if(Ge===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ke===null?Be.memoizedState:Ke.next;if(t!==null)Ke=t,Ge=e;else{if(e===null)throw Error(i(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ke===null?Be.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Ei(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=St(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var o=Ge,c=o.baseQueue,p=r.pending;if(p!==null){if(c!==null){var x=c.next;c.next=p.next,p.next=x}o.baseQueue=c=p,r.pending=null}if(c!==null){p=c.next,o=o.baseState;var N=x=null,C=null,$=p;do{var Q=$.lane;if((Vn&Q)===Q)C!==null&&(C=C.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),o=$.hasEagerState?$.eagerState:e(o,$.action);else{var X={lane:Q,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};C===null?(N=C=X,x=o):C=C.next=X,Be.lanes|=Q,Kn|=Q}$=$.next}while($!==null&&$!==p);C===null?x=o:C.next=N,Pt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseState=x,t.baseQueue=C,r.lastRenderedState=o}if(e=r.interleaved,e!==null){c=e;do p=c.lane,Be.lanes|=p,Kn|=p,c=c.next;while(c!==e)}else c===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function nl(e){var t=St(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,p=t.memoizedState;if(c!==null){r.pending=null;var x=c=c.next;do p=e(p,x.action),x=x.next;while(x!==c);Pt(p,t.memoizedState)||(ut=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),r.lastRenderedState=p}return[p,o]}function xd(){}function yd(e,t){var r=Be,o=St(),c=t(),p=!Pt(o.memoizedState,c);if(p&&(o.memoizedState=c,ut=!0),o=o.queue,rl(wd.bind(null,r,o,e),[e]),o.getSnapshot!==t||p||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,Ci(9,bd.bind(null,r,o,c,t),void 0,null),Qe===null)throw Error(i(349));(Vn&30)!==0||vd(r,t,c)}return c}function vd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function bd(e,t,r,o){t.value=r,t.getSnapshot=o,kd(t)&&Sd(e)}function wd(e,t,r){return r(function(){kd(t)&&Sd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Pt(e,r)}catch{return!0}}function Sd(e){var t=Jt(e,1);t!==null&&Lt(t,e,1,-1)}function Nd(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:e},t.queue=e,e=e.dispatch=Eg.bind(null,Be,e),[t.memoizedState,e]}function Ci(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function jd(){return St().memoizedState}function Rs(e,t,r,o){var c=Ft();Be.flags|=e,c.memoizedState=Ci(1|t,r,void 0,o===void 0?null:o)}function Os(e,t,r,o){var c=St();o=o===void 0?null:o;var p=void 0;if(Ge!==null){var x=Ge.memoizedState;if(p=x.destroy,o!==null&&Jo(o,x.deps)){c.memoizedState=Ci(t,r,p,o);return}}Be.flags|=e,c.memoizedState=Ci(1|t,r,p,o)}function Ed(e,t){return Rs(8390656,8,e,t)}function rl(e,t){return Os(2048,8,e,t)}function Cd(e,t){return Os(4,2,e,t)}function Td(e,t){return Os(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Id(e,t,r){return r=r!=null?r.concat([e]):null,Os(4,4,Pd.bind(null,t,e),r)}function il(){}function Ad(e,t){var r=St();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Jo(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Rd(e,t){var r=St();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Jo(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Od(e,t,r){return(Vn&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r):(Pt(r,t)||(r=cc(),Be.lanes|=r,Kn|=r,e.baseState=!0),t)}function Ng(e,t){var r=Te;Te=r!==0&&4>r?r:4,e(!0);var o=qo.transition;qo.transition={};try{e(!1),t()}finally{Te=r,qo.transition=o}}function Ld(){return St().memoizedState}function jg(e,t,r){var o=Nn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Md(e))Bd(t,r);else if(r=pd(e,t,r,o),r!==null){var c=it();Lt(r,e,o,c),Dd(r,t,o)}}function Eg(e,t,r){var o=Nn(e),c={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Md(e))Bd(t,c);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var x=t.lastRenderedState,N=p(x,r);if(c.hasEagerState=!0,c.eagerState=N,Pt(N,x)){var C=t.interleaved;C===null?(c.next=c,Go(t)):(c.next=C.next,C.next=c),t.interleaved=c;return}}catch{}finally{}r=pd(e,t,c,o),r!==null&&(c=it(),Lt(r,e,o,c),Dd(r,t,o))}}function Md(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function Bd(e,t){Ni=As=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dd(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,so(e,r)}}var Ls={readContext:kt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Cg={readContext:kt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Ed,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Rs(4194308,4,Pd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rs(4,2,e,t)},useMemo:function(e,t){var r=Ft();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Ft();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=jg.bind(null,Be,e),[o.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Nd,useDebugValue:il,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Nd(!1),t=e[0];return e=Ng.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Be,c=Ft();if(Oe){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),Qe===null)throw Error(i(349));(Vn&30)!==0||vd(o,t,r)}c.memoizedState=r;var p={value:r,getSnapshot:t};return c.queue=p,Ed(wd.bind(null,o,p,e),[e]),o.flags|=2048,Ci(9,bd.bind(null,o,p,r,t),void 0,null),r},useId:function(){var e=Ft(),t=Qe.identifierPrefix;if(Oe){var r=qt,o=Yt;r=(o&~(1<<32-Tt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=ji++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Sg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tg={readContext:kt,useCallback:Ad,useContext:kt,useEffect:rl,useImperativeHandle:Id,useInsertionEffect:Cd,useLayoutEffect:Td,useMemo:Rd,useReducer:tl,useRef:jd,useState:function(){return tl(Ei)},useDebugValue:il,useDeferredValue:function(e){var t=St();return Od(t,Ge.memoizedState,e)},useTransition:function(){var e=tl(Ei)[0],t=St().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:yd,useId:Ld,unstable_isNewReconciler:!1},Pg={readContext:kt,useCallback:Ad,useContext:kt,useEffect:rl,useImperativeHandle:Id,useInsertionEffect:Cd,useLayoutEffect:Td,useMemo:Rd,useReducer:nl,useRef:jd,useState:function(){return nl(Ei)},useDebugValue:il,useDeferredValue:function(e){var t=St();return Ge===null?t.memoizedState=e:Od(t,Ge.memoizedState,e)},useTransition:function(){var e=nl(Ei)[0],t=St().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:yd,useId:Ld,unstable_isNewReconciler:!1};function At(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function sl(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ms={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=it(),c=Nn(e),p=Zt(o,c);p.payload=t,r!=null&&(p.callback=r),t=bn(e,p,c),t!==null&&(Lt(t,e,c,o),Cs(t,e,c))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=it(),c=Nn(e),p=Zt(o,c);p.tag=1,p.payload=t,r!=null&&(p.callback=r),t=bn(e,p,c),t!==null&&(Lt(t,e,c,o),Cs(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=it(),o=Nn(e),c=Zt(r,o);c.tag=2,t!=null&&(c.callback=t),t=bn(e,c,o),t!==null&&(Lt(t,e,o,r),Cs(t,e,o))}};function zd(e,t,r,o,c,p,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,p,x):t.prototype&&t.prototype.isPureReactComponent?!hi(r,o)||!hi(c,p):!0}function $d(e,t,r){var o=!1,c=xn,p=t.contextType;return typeof p=="object"&&p!==null?p=kt(p):(c=lt(t)?Fn:Ze.current,o=t.contextTypes,p=(o=o!=null)?br(e,c):xn),t=new t(r,p),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ms,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=p),t}function Fd(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function al(e,t,r,o){var c=e.stateNode;c.props=r,c.state=e.memoizedState,c.refs={},Vo(e);var p=t.contextType;typeof p=="object"&&p!==null?c.context=kt(p):(p=lt(t)?Fn:Ze.current,c.context=br(e,p)),c.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(sl(e,t,p,r),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&Ms.enqueueReplaceState(c,c.state,null),Ts(e,r,c,o),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t){try{var r="",o=t;do r+=ye(o),o=o.return;while(o);var c=r}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:t,stack:c,digest:null}}function ol(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ll(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ig=typeof WeakMap=="function"?WeakMap:Map;function Ud(e,t,r){r=Zt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Ws||(Ws=!0,kl=o),ll(e,t)},r}function Wd(e,t,r){r=Zt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var c=t.value;r.payload=function(){return o(c)},r.callback=function(){ll(e,t)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(r.callback=function(){ll(e,t),typeof o!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),r}function Hd(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Ig;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(r)||(c.add(r),e=Gg.bind(null,e,t,r),t.then(e,e))}function Gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vd(e,t,r,o,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Zt(-1,1),t.tag=2,bn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Ag=T.ReactCurrentOwner,ut=!1;function rt(e,t,r,o){t.child=e===null?fd(t,null,r,o):Nr(t,e.child,r,o)}function Kd(e,t,r,o,c){r=r.render;var p=t.ref;return Er(t,c),o=Zo(e,t,r,o,p,c),r=el(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,en(e,t,c)):(Oe&&r&&Mo(t),t.flags|=1,rt(e,t,o,c),t.child)}function Qd(e,t,r,o,c){if(e===null){var p=r.type;return typeof p=="function"&&!Pl(p)&&p.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=p,Xd(e,t,p,o,c)):(e=Xs(r.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,(e.lanes&c)===0){var x=p.memoizedProps;if(r=r.compare,r=r!==null?r:hi,r(x,o)&&e.ref===t.ref)return en(e,t,c)}return t.flags|=1,e=En(p,o),e.ref=t.ref,e.return=t,t.child=e}function Xd(e,t,r,o,c){if(e!==null){var p=e.memoizedProps;if(hi(p,o)&&e.ref===t.ref)if(ut=!1,t.pendingProps=o=p,(e.lanes&c)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,en(e,t,c)}return ul(e,t,r,o,c)}function Yd(e,t,r){var o=t.pendingProps,c=o.children,p=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Ir,xt),xt|=r;else{if((r&1073741824)===0)return e=p!==null?p.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pe(Ir,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=p!==null?p.baseLanes:r,Pe(Ir,xt),xt|=o}else p!==null?(o=p.baseLanes|r,t.memoizedState=null):o=r,Pe(Ir,xt),xt|=o;return rt(e,t,c,r),t.child}function qd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,r,o,c){var p=lt(r)?Fn:Ze.current;return p=br(t,p),Er(t,c),r=Zo(e,t,r,o,p,c),o=el(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,en(e,t,c)):(Oe&&o&&Mo(t),t.flags|=1,rt(e,t,r,c),t.child)}function Jd(e,t,r,o,c){if(lt(r)){var p=!0;vs(t)}else p=!1;if(Er(t,c),t.stateNode===null)Ds(e,t),$d(t,r,o),al(t,r,o,c),o=!0;else if(e===null){var x=t.stateNode,N=t.memoizedProps;x.props=N;var C=x.context,$=r.contextType;typeof $=="object"&&$!==null?$=kt($):($=lt(r)?Fn:Ze.current,$=br(t,$));var Q=r.getDerivedStateFromProps,X=typeof Q=="function"||typeof x.getSnapshotBeforeUpdate=="function";X||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(N!==o||C!==$)&&Fd(t,x,o,$),vn=!1;var K=t.memoizedState;x.state=K,Ts(t,o,x,c),C=t.memoizedState,N!==o||K!==C||ot.current||vn?(typeof Q=="function"&&(sl(t,r,Q,o),C=t.memoizedState),(N=vn||zd(t,r,N,o,K,C,$))?(X||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=C),x.props=o,x.state=C,x.context=$,o=N):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{x=t.stateNode,hd(e,t),N=t.memoizedProps,$=t.type===t.elementType?N:At(t.type,N),x.props=$,X=t.pendingProps,K=x.context,C=r.contextType,typeof C=="object"&&C!==null?C=kt(C):(C=lt(r)?Fn:Ze.current,C=br(t,C));var ne=r.getDerivedStateFromProps;(Q=typeof ne=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(N!==X||K!==C)&&Fd(t,x,o,C),vn=!1,K=t.memoizedState,x.state=K,Ts(t,o,x,c);var le=t.memoizedState;N!==X||K!==le||ot.current||vn?(typeof ne=="function"&&(sl(t,r,ne,o),le=t.memoizedState),($=vn||zd(t,r,$,o,K,le,C)||!1)?(Q||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(o,le,C),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(o,le,C)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||N===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||N===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=le),x.props=o,x.state=le,x.context=C,o=$):(typeof x.componentDidUpdate!="function"||N===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||N===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),o=!1)}return cl(e,t,r,o,p,c)}function cl(e,t,r,o,c,p){qd(e,t);var x=(t.flags&128)!==0;if(!o&&!x)return c&&rd(t,r,!1),en(e,t,p);o=t.stateNode,Ag.current=t;var N=x&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&x?(t.child=Nr(t,e.child,null,p),t.child=Nr(t,null,N,p)):rt(e,t,N,p),t.memoizedState=o.state,c&&rd(t,r,!0),t.child}function Zd(e){var t=e.stateNode;t.pendingContext?td(e,t.pendingContext,t.pendingContext!==t.context):t.context&&td(e,t.context,!1),Ko(e,t.containerInfo)}function ef(e,t,r,o,c){return Sr(),$o(c),t.flags|=256,rt(e,t,r,o),t.child}var dl={dehydrated:null,treeContext:null,retryLane:0};function fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function tf(e,t,r){var o=t.pendingProps,c=Me.current,p=!1,x=(t.flags&128)!==0,N;if((N=x)||(N=e!==null&&e.memoizedState===null?!1:(c&2)!==0),N?(p=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Pe(Me,c&1),e===null)return zo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(x=o.children,e=o.fallback,p?(o=t.mode,p=t.child,x={mode:"hidden",children:x},(o&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=x):p=Ys(x,o,0,null),e=qn(e,o,r,null),p.return=t,e.return=t,p.sibling=e,t.child=p,t.child.memoizedState=fl(r),t.memoizedState=dl,e):pl(t,x));if(c=e.memoizedState,c!==null&&(N=c.dehydrated,N!==null))return Rg(e,t,x,o,N,c,r);if(p){p=o.fallback,x=t.mode,c=e.child,N=c.sibling;var C={mode:"hidden",children:o.children};return(x&1)===0&&t.child!==c?(o=t.child,o.childLanes=0,o.pendingProps=C,t.deletions=null):(o=En(c,C),o.subtreeFlags=c.subtreeFlags&14680064),N!==null?p=En(N,p):(p=qn(p,x,r,null),p.flags|=2),p.return=t,o.return=t,o.sibling=p,t.child=o,o=p,p=t.child,x=e.child.memoizedState,x=x===null?fl(r):{baseLanes:x.baseLanes|r,cachePool:null,transitions:x.transitions},p.memoizedState=x,p.childLanes=e.childLanes&~r,t.memoizedState=dl,o}return p=e.child,e=p.sibling,o=En(p,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function pl(e,t){return t=Ys({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bs(e,t,r,o){return o!==null&&$o(o),Nr(t,e.child,null,r),e=pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rg(e,t,r,o,c,p,x){if(r)return t.flags&256?(t.flags&=-257,o=ol(Error(i(422))),Bs(e,t,x,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(p=o.fallback,c=t.mode,o=Ys({mode:"visible",children:o.children},c,0,null),p=qn(p,c,x,null),p.flags|=2,o.return=t,p.return=t,o.sibling=p,t.child=o,(t.mode&1)!==0&&Nr(t,e.child,null,x),t.child.memoizedState=fl(x),t.memoizedState=dl,p);if((t.mode&1)===0)return Bs(e,t,x,null);if(c.data==="$!"){if(o=c.nextSibling&&c.nextSibling.dataset,o)var N=o.dgst;return o=N,p=Error(i(419)),o=ol(p,o,void 0),Bs(e,t,x,o)}if(N=(x&e.childLanes)!==0,ut||N){if(o=Qe,o!==null){switch(x&-x){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(o.suspendedLanes|x))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Jt(e,c),Lt(o,e,c,-1))}return Tl(),o=ol(Error(i(421))),Bs(e,t,x,o)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=Vg.bind(null,e),c._reactRetry=t,null):(e=p.treeContext,_t=gn(c.nextSibling),gt=t,Oe=!0,It=null,e!==null&&(bt[wt++]=Yt,bt[wt++]=qt,bt[wt++]=Un,Yt=e.id,qt=e.overflow,Un=t),t=pl(t,o.children),t.flags|=4096,t)}function nf(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ho(e.return,t,r)}function hl(e,t,r,o,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=r,p.tailMode=c)}function rf(e,t,r){var o=t.pendingProps,c=o.revealOrder,p=o.tail;if(rt(e,t,o.children,r),o=Me.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,r,t);else if(e.tag===19)nf(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Pe(Me,o),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(r=t.child,c=null;r!==null;)e=r.alternate,e!==null&&Ps(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=t.child,t.child=null):(c=r.sibling,r.sibling=null),hl(t,!1,c,r,p);break;case"backwards":for(r=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Ps(e)===null){t.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}hl(t,!0,r,null,p);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ds(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=En(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=En(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Og(e,t,r){switch(t.tag){case 3:Zd(t),Sr();break;case 5:_d(t);break;case 1:lt(t.type)&&vs(t);break;case 4:Ko(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,c=t.memoizedProps.value;Pe(js,o._currentValue),o._currentValue=c;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Pe(Me,Me.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?tf(e,t,r):(Pe(Me,Me.current&1),e=en(e,t,r),e!==null?e.sibling:null);Pe(Me,Me.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return rf(e,t,r);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pe(Me,Me.current),o)break;return null;case 22:case 23:return t.lanes=0,Yd(e,t,r)}return en(e,t,r)}var sf,ml,af,of;sf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ml=function(){},af=function(e,t,r,o){var c=e.memoizedProps;if(c!==o){e=t.stateNode,Gn($t.current);var p=null;switch(r){case"input":c=ar(e,c),o=ar(e,o),p=[];break;case"select":c=Z({},c,{value:void 0}),o=Z({},o,{value:void 0}),p=[];break;case"textarea":c=ur(e,c),o=ur(e,o),p=[];break;default:typeof c.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=_s)}Qa(r,o);var x;r=null;for($ in c)if(!o.hasOwnProperty($)&&c.hasOwnProperty($)&&c[$]!=null)if($==="style"){var N=c[$];for(x in N)N.hasOwnProperty(x)&&(r||(r={}),r[x]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(u.hasOwnProperty($)?p||(p=[]):(p=p||[]).push($,null));for($ in o){var C=o[$];if(N=c!=null?c[$]:void 0,o.hasOwnProperty($)&&C!==N&&(C!=null||N!=null))if($==="style")if(N){for(x in N)!N.hasOwnProperty(x)||C&&C.hasOwnProperty(x)||(r||(r={}),r[x]="");for(x in C)C.hasOwnProperty(x)&&N[x]!==C[x]&&(r||(r={}),r[x]=C[x])}else r||(p||(p=[]),p.push($,r)),r=C;else $==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,N=N?N.__html:void 0,C!=null&&N!==C&&(p=p||[]).push($,C)):$==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push($,""+C):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(u.hasOwnProperty($)?(C!=null&&$==="onScroll"&&Ie("scroll",e),p||N===C||(p=[])):(p=p||[]).push($,C))}r&&(p=p||[]).push("style",r);var $=p;(t.updateQueue=$)&&(t.flags|=4)}},of=function(e,t,r,o){r!==o&&(t.flags|=4)};function Ti(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&14680064,o|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Lg(e,t,r){var o=t.pendingProps;switch(Bo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return lt(t.type)&&ys(),tt(t),null;case 3:return o=t.stateNode,Cr(),Ae(ot),Ae(Ze),Yo(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,It!==null&&(jl(It),It=null))),ml(e,t),tt(t),null;case 5:Qo(t);var c=Gn(Si.current);if(r=t.type,e!==null&&t.stateNode!=null)af(e,t,r,o,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(i(166));return tt(t),null}if(e=Gn($t.current),Ss(t)){o=t.stateNode,r=t.type;var p=t.memoizedProps;switch(o[zt]=t,o[yi]=p,e=(t.mode&1)!==0,r){case"dialog":Ie("cancel",o),Ie("close",o);break;case"iframe":case"object":case"embed":Ie("load",o);break;case"video":case"audio":for(c=0;c<gi.length;c++)Ie(gi[c],o);break;case"source":Ie("error",o);break;case"img":case"image":case"link":Ie("error",o),Ie("load",o);break;case"details":Ie("toggle",o);break;case"input":Vr(o,p),Ie("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!p.multiple},Ie("invalid",o);break;case"textarea":Xr(o,p),Ie("invalid",o)}Qa(r,p),c=null;for(var x in p)if(p.hasOwnProperty(x)){var N=p[x];x==="children"?typeof N=="string"?o.textContent!==N&&(p.suppressHydrationWarning!==!0&&gs(o.textContent,N,e),c=["children",N]):typeof N=="number"&&o.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&gs(o.textContent,N,e),c=["children",""+N]):u.hasOwnProperty(x)&&N!=null&&x==="onScroll"&&Ie("scroll",o)}switch(r){case"input":Ct(o),Qr(o,p,!0);break;case"textarea":Ct(o),qr(o);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(o.onclick=_s)}o=c,t.updateQueue=o,o!==null&&(t.flags|=4)}else{x=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jr(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=x.createElement(r,{is:o.is}):(e=x.createElement(r),r==="select"&&(x=e,o.multiple?x.multiple=!0:o.size&&(x.size=o.size))):e=x.createElementNS(e,r),e[zt]=t,e[yi]=o,sf(e,t,!1,!1),t.stateNode=e;e:{switch(x=Xa(r,o),r){case"dialog":Ie("cancel",e),Ie("close",e),c=o;break;case"iframe":case"object":case"embed":Ie("load",e),c=o;break;case"video":case"audio":for(c=0;c<gi.length;c++)Ie(gi[c],e);c=o;break;case"source":Ie("error",e),c=o;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),c=o;break;case"details":Ie("toggle",e),c=o;break;case"input":Vr(e,o),c=ar(e,o),Ie("invalid",e);break;case"option":c=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},c=Z({},o,{value:void 0}),Ie("invalid",e);break;case"textarea":Xr(e,o),c=ur(e,o),Ie("invalid",e);break;default:c=o}Qa(r,c),N=c;for(p in N)if(N.hasOwnProperty(p)){var C=N[p];p==="style"?Xu(e,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&ee(e,C)):p==="children"?typeof C=="string"?(r!=="textarea"||C!=="")&&Le(e,C):typeof C=="number"&&Le(e,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(u.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Ie("scroll",e):C!=null&&W(e,p,C,x))}switch(r){case"input":Ct(e),Qr(e,o,!1);break;case"textarea":Ct(e),qr(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ce(o.value));break;case"select":e.multiple=!!o.multiple,p=o.value,p!=null?Kt(e,!!o.multiple,p,!1):o.defaultValue!=null&&Kt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=_s)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)of(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(i(166));if(r=Gn(Si.current),Gn($t.current),Ss(t)){if(o=t.stateNode,r=t.memoizedProps,o[zt]=t,(p=o.nodeValue!==r)&&(e=gt,e!==null))switch(e.tag){case 3:gs(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(o.nodeValue,r,(e.mode&1)!==0)}p&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[zt]=t,t.stateNode=o}return tt(t),null;case 13:if(Ae(Me),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&_t!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ud(),Sr(),t.flags|=98560,p=!1;else if(p=Ss(t),o!==null&&o.dehydrated!==null){if(e===null){if(!p)throw Error(i(318));if(p=t.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[zt]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),p=!1}else It!==null&&(jl(It),It=null),p=!0;if(!p)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Me.current&1)!==0?Ve===0&&(Ve=3):Tl())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Cr(),ml(e,t),e===null&&_i(t.stateNode.containerInfo),tt(t),null;case 10:return Wo(t.type._context),tt(t),null;case 17:return lt(t.type)&&ys(),tt(t),null;case 19:if(Ae(Me),p=t.memoizedState,p===null)return tt(t),null;if(o=(t.flags&128)!==0,x=p.rendering,x===null)if(o)Ti(p,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(x=Ps(e),x!==null){for(t.flags|=128,Ti(p,!1),o=x.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)p=r,e=o,p.flags&=14680066,x=p.alternate,x===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=x.childLanes,p.lanes=x.lanes,p.child=x.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=x.memoizedProps,p.memoizedState=x.memoizedState,p.updateQueue=x.updateQueue,p.type=x.type,e=x.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Pe(Me,Me.current&1|2),t.child}e=e.sibling}p.tail!==null&&$e()>Ar&&(t.flags|=128,o=!0,Ti(p,!1),t.lanes=4194304)}else{if(!o)if(e=Ps(x),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ti(p,!0),p.tail===null&&p.tailMode==="hidden"&&!x.alternate&&!Oe)return tt(t),null}else 2*$e()-p.renderingStartTime>Ar&&r!==1073741824&&(t.flags|=128,o=!0,Ti(p,!1),t.lanes=4194304);p.isBackwards?(x.sibling=t.child,t.child=x):(r=p.last,r!==null?r.sibling=x:t.child=x,p.last=x)}return p.tail!==null?(t=p.tail,p.rendering=t,p.tail=t.sibling,p.renderingStartTime=$e(),t.sibling=null,r=Me.current,Pe(Me,o?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return Cl(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(xt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Mg(e,t){switch(Bo(t),t.tag){case 1:return lt(t.type)&&ys(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),Ae(ot),Ae(Ze),Yo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Qo(t),null;case 13:if(Ae(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Me),null;case 4:return Cr(),null;case 10:return Wo(t.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var zs=!1,nt=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){ze(e,t,o)}else r.current=null}function gl(e,t,r){try{r()}catch(o){ze(e,t,o)}}var lf=!1;function Dg(e,t){if(Co=ss,e=zc(),vo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break e}var x=0,N=-1,C=-1,$=0,Q=0,X=e,K=null;t:for(;;){for(var ne;X!==r||c!==0&&X.nodeType!==3||(N=x+c),X!==p||o!==0&&X.nodeType!==3||(C=x+o),X.nodeType===3&&(x+=X.nodeValue.length),(ne=X.firstChild)!==null;)K=X,X=ne;for(;;){if(X===e)break t;if(K===r&&++$===c&&(N=x),K===p&&++Q===o&&(C=x),(ne=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=ne}r=N===-1||C===-1?null:{start:N,end:C}}else r=null}r=r||{start:0,end:0}}else r=null;for(To={focusedElem:e,selectionRange:r},ss=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var le=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,Fe=le.memoizedState,M=t.stateNode,A=M.getSnapshotBeforeUpdate(t.elementType===t.type?ue:At(t.type,ue),Fe);M.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(Y){ze(t,t.return,Y)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return le=lf,lf=!1,le}function Pi(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&e)===e){var p=c.destroy;c.destroy=void 0,p!==void 0&&gl(t,r,p)}c=c.next}while(c!==o)}}function $s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function _l(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function uf(e){var t=e.alternate;t!==null&&(e.alternate=null,uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[yi],delete t[Ro],delete t[vg],delete t[bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cf(e){return e.tag===5||e.tag===3||e.tag===4}function df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_s));else if(o!==4&&(e=e.child,e!==null))for(xl(e,t,r),e=e.sibling;e!==null;)xl(e,t,r),e=e.sibling}function yl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(yl(e,t,r),e=e.sibling;e!==null;)yl(e,t,r),e=e.sibling}var qe=null,Rt=!1;function wn(e,t,r){for(r=r.child;r!==null;)ff(e,t,r),r=r.sibling}function ff(e,t,r){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Zi,r)}catch{}switch(r.tag){case 5:nt||Pr(r,t);case 6:var o=qe,c=Rt;qe=null,wn(e,t,r),qe=o,Rt=c,qe!==null&&(Rt?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(Rt?(e=qe,r=r.stateNode,e.nodeType===8?Ao(e.parentNode,r):e.nodeType===1&&Ao(e,r),li(e)):Ao(qe,r.stateNode));break;case 4:o=qe,c=Rt,qe=r.stateNode.containerInfo,Rt=!0,wn(e,t,r),qe=o,Rt=c;break;case 0:case 11:case 14:case 15:if(!nt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){c=o=o.next;do{var p=c,x=p.destroy;p=p.tag,x!==void 0&&((p&2)!==0||(p&4)!==0)&&gl(r,t,x),c=c.next}while(c!==o)}wn(e,t,r);break;case 1:if(!nt&&(Pr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(N){ze(r,t,N)}wn(e,t,r);break;case 21:wn(e,t,r);break;case 22:r.mode&1?(nt=(o=nt)||r.memoizedState!==null,wn(e,t,r),nt=o):wn(e,t,r);break;default:wn(e,t,r)}}function pf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Bg),t.forEach(function(o){var c=Kg.bind(null,e,o);r.has(o)||(r.add(o),o.then(c,c))})}}function Ot(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];try{var p=e,x=t,N=x;e:for(;N!==null;){switch(N.tag){case 5:qe=N.stateNode,Rt=!1;break e;case 3:qe=N.stateNode.containerInfo,Rt=!0;break e;case 4:qe=N.stateNode.containerInfo,Rt=!0;break e}N=N.return}if(qe===null)throw Error(i(160));ff(p,x,c),qe=null,Rt=!1;var C=c.alternate;C!==null&&(C.return=null),c.return=null}catch($){ze(c,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hf(t,e),t=t.sibling}function hf(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Ut(e),o&4){try{Pi(3,e,e.return),$s(3,e)}catch(ue){ze(e,e.return,ue)}try{Pi(5,e,e.return)}catch(ue){ze(e,e.return,ue)}}break;case 1:Ot(t,e),Ut(e),o&512&&r!==null&&Pr(r,r.return);break;case 5:if(Ot(t,e),Ut(e),o&512&&r!==null&&Pr(r,r.return),e.flags&32){var c=e.stateNode;try{Le(c,"")}catch(ue){ze(e,e.return,ue)}}if(o&4&&(c=e.stateNode,c!=null)){var p=e.memoizedProps,x=r!==null?r.memoizedProps:p,N=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&Kr(c,p),Xa(N,x);var $=Xa(N,p);for(x=0;x<C.length;x+=2){var Q=C[x],X=C[x+1];Q==="style"?Xu(c,X):Q==="dangerouslySetInnerHTML"?ee(c,X):Q==="children"?Le(c,X):W(c,Q,X,$)}switch(N){case"input":or(c,p);break;case"textarea":Yr(c,p);break;case"select":var K=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?Kt(c,!!p.multiple,ne,!1):K!==!!p.multiple&&(p.defaultValue!=null?Kt(c,!!p.multiple,p.defaultValue,!0):Kt(c,!!p.multiple,p.multiple?[]:"",!1))}c[yi]=p}catch(ue){ze(e,e.return,ue)}}break;case 6:if(Ot(t,e),Ut(e),o&4){if(e.stateNode===null)throw Error(i(162));c=e.stateNode,p=e.memoizedProps;try{c.nodeValue=p}catch(ue){ze(e,e.return,ue)}}break;case 3:if(Ot(t,e),Ut(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(ue){ze(e,e.return,ue)}break;case 4:Ot(t,e),Ut(e);break;case 13:Ot(t,e),Ut(e),c=e.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(wl=$e())),o&4&&pf(e);break;case 22:if(Q=r!==null&&r.memoizedState!==null,e.mode&1?(nt=($=nt)||Q,Ot(t,e),nt=$):Ot(t,e),Ut(e),o&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!Q&&(e.mode&1)!==0)for(ae=e,Q=e.child;Q!==null;){for(X=ae=Q;ae!==null;){switch(K=ae,ne=K.child,K.tag){case 0:case 11:case 14:case 15:Pi(4,K,K.return);break;case 1:Pr(K,K.return);var le=K.stateNode;if(typeof le.componentWillUnmount=="function"){o=K,r=K.return;try{t=o,le.props=t.memoizedProps,le.state=t.memoizedState,le.componentWillUnmount()}catch(ue){ze(o,r,ue)}}break;case 5:Pr(K,K.return);break;case 22:if(K.memoizedState!==null){_f(X);continue}}ne!==null?(ne.return=K,ae=ne):_f(X)}Q=Q.sibling}e:for(Q=null,X=e;;){if(X.tag===5){if(Q===null){Q=X;try{c=X.stateNode,$?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=X.stateNode,C=X.memoizedProps.style,x=C!=null&&C.hasOwnProperty("display")?C.display:null,N.style.display=Qu("display",x))}catch(ue){ze(e,e.return,ue)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=$?"":X.memoizedProps}catch(ue){ze(e,e.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===e)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===e)break e;for(;X.sibling===null;){if(X.return===null||X.return===e)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Ot(t,e),Ut(e),o&4&&pf(e);break;case 21:break;default:Ot(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(cf(r)){var o=r;break e}r=r.return}throw Error(i(160))}switch(o.tag){case 5:var c=o.stateNode;o.flags&32&&(Le(c,""),o.flags&=-33);var p=df(e);yl(e,p,c);break;case 3:case 4:var x=o.stateNode.containerInfo,N=df(e);xl(e,N,x);break;default:throw Error(i(161))}}catch(C){ze(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zg(e,t,r){ae=e,mf(e)}function mf(e,t,r){for(var o=(e.mode&1)!==0;ae!==null;){var c=ae,p=c.child;if(c.tag===22&&o){var x=c.memoizedState!==null||zs;if(!x){var N=c.alternate,C=N!==null&&N.memoizedState!==null||nt;N=zs;var $=nt;if(zs=x,(nt=C)&&!$)for(ae=c;ae!==null;)x=ae,C=x.child,x.tag===22&&x.memoizedState!==null?xf(c):C!==null?(C.return=x,ae=C):xf(c);for(;p!==null;)ae=p,mf(p),p=p.sibling;ae=c,zs=N,nt=$}gf(e)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,ae=p):gf(e)}}function gf(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||$s(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!nt)if(r===null)o.componentDidMount();else{var c=t.elementType===t.type?r.memoizedProps:At(t.type,r.memoizedProps);o.componentDidUpdate(c,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var p=t.updateQueue;p!==null&&gd(t,p,o);break;case 3:var x=t.updateQueue;if(x!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}gd(t,x,r)}break;case 5:var N=t.stateNode;if(r===null&&t.flags&4){r=N;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&r.focus();break;case"img":C.src&&(r.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var Q=$.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&li(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}nt||t.flags&512&&_l(t)}catch(K){ze(t,t.return,K)}}if(t===e){ae=null;break}if(r=t.sibling,r!==null){r.return=t.return,ae=r;break}ae=t.return}}function _f(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ae=r;break}ae=t.return}}function xf(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{$s(4,t)}catch(C){ze(t,r,C)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var c=t.return;try{o.componentDidMount()}catch(C){ze(t,c,C)}}var p=t.return;try{_l(t)}catch(C){ze(t,p,C)}break;case 5:var x=t.return;try{_l(t)}catch(C){ze(t,x,C)}}}catch(C){ze(t,t.return,C)}if(t===e){ae=null;break}var N=t.sibling;if(N!==null){N.return=t.return,ae=N;break}ae=t.return}}var $g=Math.ceil,Fs=T.ReactCurrentDispatcher,vl=T.ReactCurrentOwner,Nt=T.ReactCurrentBatchConfig,je=0,Qe=null,Ue=null,Je=0,xt=0,Ir=_n(0),Ve=0,Ii=null,Kn=0,Us=0,bl=0,Ai=null,ct=null,wl=0,Ar=1/0,tn=null,Ws=!1,kl=null,kn=null,Hs=!1,Sn=null,Gs=0,Ri=0,Sl=null,Vs=-1,Ks=0;function it(){return(je&6)!==0?$e():Vs!==-1?Vs:Vs=$e()}function Nn(e){return(e.mode&1)===0?1:(je&2)!==0&&Je!==0?Je&-Je:kg.transition!==null?(Ks===0&&(Ks=cc()),Ks):(e=Te,e!==0||(e=window.event,e=e===void 0?16:yc(e.type)),e)}function Lt(e,t,r,o){if(50<Ri)throw Ri=0,Sl=null,Error(i(185));ri(e,r,o),((je&2)===0||e!==Qe)&&(e===Qe&&((je&2)===0&&(Us|=r),Ve===4&&jn(e,Je)),dt(e,o),r===1&&je===0&&(t.mode&1)===0&&(Ar=$e()+500,bs&&yn()))}function dt(e,t){var r=e.callbackNode;km(e,t);var o=ns(e,e===Qe?Je:0);if(o===0)r!==null&&oc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&oc(r),t===1)e.tag===0?wg(vf.bind(null,e)):id(vf.bind(null,e)),xg(function(){(je&6)===0&&yn()}),r=null;else{switch(dc(o)){case 1:r=no;break;case 4:r=lc;break;case 16:r=Ji;break;case 536870912:r=uc;break;default:r=Ji}r=Cf(r,yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function yf(e,t){if(Vs=-1,Ks=0,(je&6)!==0)throw Error(i(327));var r=e.callbackNode;if(Rr()&&e.callbackNode!==r)return null;var o=ns(e,e===Qe?Je:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Qs(e,o);else{t=o;var c=je;je|=2;var p=wf();(Qe!==e||Je!==t)&&(tn=null,Ar=$e()+500,Xn(e,t));do try{Wg();break}catch(N){bf(e,N)}while(!0);Uo(),Fs.current=p,je=c,Ue!==null?t=0:(Qe=null,Je=0,t=Ve)}if(t!==0){if(t===2&&(c=ro(e),c!==0&&(o=c,t=Nl(e,c))),t===1)throw r=Ii,Xn(e,0),jn(e,o),dt(e,$e()),r;if(t===6)jn(e,o);else{if(c=e.current.alternate,(o&30)===0&&!Fg(c)&&(t=Qs(e,o),t===2&&(p=ro(e),p!==0&&(o=p,t=Nl(e,p))),t===1))throw r=Ii,Xn(e,0),jn(e,o),dt(e,$e()),r;switch(e.finishedWork=c,e.finishedLanes=o,t){case 0:case 1:throw Error(i(345));case 2:Yn(e,ct,tn);break;case 3:if(jn(e,o),(o&130023424)===o&&(t=wl+500-$e(),10<t)){if(ns(e,0)!==0)break;if(c=e.suspendedLanes,(c&o)!==o){it(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Io(Yn.bind(null,e,ct,tn),t);break}Yn(e,ct,tn);break;case 4:if(jn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,c=-1;0<o;){var x=31-Tt(o);p=1<<x,x=t[x],x>c&&(c=x),o&=~p}if(o=c,o=$e()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*$g(o/1960))-o,10<o){e.timeoutHandle=Io(Yn.bind(null,e,ct,tn),o);break}Yn(e,ct,tn);break;case 5:Yn(e,ct,tn);break;default:throw Error(i(329))}}}return dt(e,$e()),e.callbackNode===r?yf.bind(null,e):null}function Nl(e,t){var r=Ai;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=ct,ct=r,t!==null&&jl(t)),e}function jl(e){ct===null?ct=e:ct.push.apply(ct,e)}function Fg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var c=r[o],p=c.getSnapshot;c=c.value;try{if(!Pt(p(),c))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~bl,t&=~Us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Tt(t),o=1<<r;e[r]=-1,t&=~o}}function vf(e){if((je&6)!==0)throw Error(i(327));Rr();var t=ns(e,0);if((t&1)===0)return dt(e,$e()),null;var r=Qs(e,t);if(e.tag!==0&&r===2){var o=ro(e);o!==0&&(t=o,r=Nl(e,o))}if(r===1)throw r=Ii,Xn(e,0),jn(e,t),dt(e,$e()),r;if(r===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,ct,tn),dt(e,$e()),null}function El(e,t){var r=je;je|=1;try{return e(t)}finally{je=r,je===0&&(Ar=$e()+500,bs&&yn())}}function Qn(e){Sn!==null&&Sn.tag===0&&(je&6)===0&&Rr();var t=je;je|=1;var r=Nt.transition,o=Te;try{if(Nt.transition=null,Te=1,e)return e()}finally{Te=o,Nt.transition=r,je=t,(je&6)===0&&yn()}}function Cl(){xt=Ir.current,Ae(Ir)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,_g(r)),Ue!==null)for(r=Ue.return;r!==null;){var o=r;switch(Bo(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ys();break;case 3:Cr(),Ae(ot),Ae(Ze),Yo();break;case 5:Qo(o);break;case 4:Cr();break;case 13:Ae(Me);break;case 19:Ae(Me);break;case 10:Wo(o.type._context);break;case 22:case 23:Cl()}r=r.return}if(Qe=e,Ue=e=En(e.current,null),Je=xt=t,Ve=0,Ii=null,bl=Us=Kn=0,ct=Ai=null,Hn!==null){for(t=0;t<Hn.length;t++)if(r=Hn[t],o=r.interleaved,o!==null){r.interleaved=null;var c=o.next,p=r.pending;if(p!==null){var x=p.next;p.next=c,o.next=x}r.pending=o}Hn=null}return e}function bf(e,t){do{var r=Ue;try{if(Uo(),Is.current=Ls,As){for(var o=Be.memoizedState;o!==null;){var c=o.queue;c!==null&&(c.pending=null),o=o.next}As=!1}if(Vn=0,Ke=Ge=Be=null,Ni=!1,ji=0,vl.current=null,r===null||r.return===null){Ve=1,Ii=t,Ue=null;break}e:{var p=e,x=r.return,N=r,C=t;if(t=Je,N.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=C,Q=N,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ne=Gd(x);if(ne!==null){ne.flags&=-257,Vd(ne,x,N,p,t),ne.mode&1&&Hd(p,$,t),t=ne,C=$;var le=t.updateQueue;if(le===null){var ue=new Set;ue.add(C),t.updateQueue=ue}else le.add(C);break e}else{if((t&1)===0){Hd(p,$,t),Tl();break e}C=Error(i(426))}}else if(Oe&&N.mode&1){var Fe=Gd(x);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),Vd(Fe,x,N,p,t),$o(Tr(C,N));break e}}p=C=Tr(C,N),Ve!==4&&(Ve=2),Ai===null?Ai=[p]:Ai.push(p),p=x;do{switch(p.tag){case 3:p.flags|=65536,t&=-t,p.lanes|=t;var M=Ud(p,C,t);md(p,M);break e;case 1:N=C;var A=p.type,D=p.stateNode;if((p.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(kn===null||!kn.has(D)))){p.flags|=65536,t&=-t,p.lanes|=t;var Y=Wd(p,N,t);md(p,Y);break e}}p=p.return}while(p!==null)}Sf(r)}catch(de){t=de,Ue===r&&r!==null&&(Ue=r=r.return);continue}break}while(!0)}function wf(){var e=Fs.current;return Fs.current=Ls,e===null?Ls:e}function Tl(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Qe===null||(Kn&268435455)===0&&(Us&268435455)===0||jn(Qe,Je)}function Qs(e,t){var r=je;je|=2;var o=wf();(Qe!==e||Je!==t)&&(tn=null,Xn(e,t));do try{Ug();break}catch(c){bf(e,c)}while(!0);if(Uo(),je=r,Fs.current=o,Ue!==null)throw Error(i(261));return Qe=null,Je=0,Ve}function Ug(){for(;Ue!==null;)kf(Ue)}function Wg(){for(;Ue!==null&&!hm();)kf(Ue)}function kf(e){var t=Ef(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Sf(e):Ue=t,vl.current=null}function Sf(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Lg(r,t,xt),r!==null){Ue=r;return}}else{if(r=Mg(r,t),r!==null){r.flags&=32767,Ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ve===0&&(Ve=5)}function Yn(e,t,r){var o=Te,c=Nt.transition;try{Nt.transition=null,Te=1,Hg(e,t,r,o)}finally{Nt.transition=c,Te=o}return null}function Hg(e,t,r,o){do Rr();while(Sn!==null);if((je&6)!==0)throw Error(i(327));r=e.finishedWork;var c=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var p=r.lanes|r.childLanes;if(Sm(e,p),e===Qe&&(Ue=Qe=null,Je=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Hs||(Hs=!0,Cf(Ji,function(){return Rr(),null})),p=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||p){p=Nt.transition,Nt.transition=null;var x=Te;Te=1;var N=je;je|=4,vl.current=null,Dg(e,r),hf(r,e),cg(To),ss=!!Co,To=Co=null,e.current=r,zg(r),mm(),je=N,Te=x,Nt.transition=p}else e.current=r;if(Hs&&(Hs=!1,Sn=e,Gs=c),p=e.pendingLanes,p===0&&(kn=null),xm(r.stateNode),dt(e,$e()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)c=t[r],o(c.value,{componentStack:c.stack,digest:c.digest});if(Ws)throw Ws=!1,e=kl,kl=null,e;return(Gs&1)!==0&&e.tag!==0&&Rr(),p=e.pendingLanes,(p&1)!==0?e===Sl?Ri++:(Ri=0,Sl=e):Ri=0,yn(),null}function Rr(){if(Sn!==null){var e=dc(Gs),t=Nt.transition,r=Te;try{if(Nt.transition=null,Te=16>e?16:e,Sn===null)var o=!1;else{if(e=Sn,Sn=null,Gs=0,(je&6)!==0)throw Error(i(331));var c=je;for(je|=4,ae=e.current;ae!==null;){var p=ae,x=p.child;if((ae.flags&16)!==0){var N=p.deletions;if(N!==null){for(var C=0;C<N.length;C++){var $=N[C];for(ae=$;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:Pi(8,Q,p)}var X=Q.child;if(X!==null)X.return=Q,ae=X;else for(;ae!==null;){Q=ae;var K=Q.sibling,ne=Q.return;if(uf(Q),Q===$){ae=null;break}if(K!==null){K.return=ne,ae=K;break}ae=ne}}}var le=p.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var Fe=ue.sibling;ue.sibling=null,ue=Fe}while(ue!==null)}}ae=p}}if((p.subtreeFlags&2064)!==0&&x!==null)x.return=p,ae=x;else e:for(;ae!==null;){if(p=ae,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Pi(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ae=M;break e}ae=p.return}}var A=e.current;for(ae=A;ae!==null;){x=ae;var D=x.child;if((x.subtreeFlags&2064)!==0&&D!==null)D.return=x,ae=D;else e:for(x=A;ae!==null;){if(N=ae,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:$s(9,N)}}catch(de){ze(N,N.return,de)}if(N===x){ae=null;break e}var Y=N.sibling;if(Y!==null){Y.return=N.return,ae=Y;break e}ae=N.return}}if(je=c,yn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Zi,e)}catch{}o=!0}return o}finally{Te=r,Nt.transition=t}}return!1}function Nf(e,t,r){t=Tr(r,t),t=Ud(e,t,1),e=bn(e,t,1),t=it(),e!==null&&(ri(e,1,t),dt(e,t))}function ze(e,t,r){if(e.tag===3)Nf(e,e,r);else for(;t!==null;){if(t.tag===3){Nf(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(kn===null||!kn.has(o))){e=Tr(r,e),e=Wd(t,e,1),t=bn(t,e,1),e=it(),t!==null&&(ri(t,1,e),dt(t,e));break}}t=t.return}}function Gg(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(Je&r)===r&&(Ve===4||Ve===3&&(Je&130023424)===Je&&500>$e()-wl?Xn(e,0):bl|=r),dt(e,t)}function jf(e,t){t===0&&((e.mode&1)===0?t=1:(t=ts,ts<<=1,(ts&130023424)===0&&(ts=4194304)));var r=it();e=Jt(e,t),e!==null&&(ri(e,t,r),dt(e,r))}function Vg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),jf(e,r)}function Kg(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(i(314))}o!==null&&o.delete(t),jf(e,r)}var Ef;Ef=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)ut=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ut=!1,Og(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,Oe&&(t.flags&1048576)!==0&&sd(t,ks,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ds(e,t),e=t.pendingProps;var c=br(t,Ze.current);Er(t,r),c=Zo(null,t,o,e,c,r);var p=el();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(o)?(p=!0,vs(t)):p=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Vo(t),c.updater=Ms,t.stateNode=c,c._reactInternals=t,al(t,o,e,r),t=cl(null,t,o,!0,p,r)):(t.tag=0,Oe&&p&&Mo(t),rt(null,t,c,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Ds(e,t),e=t.pendingProps,c=o._init,o=c(o._payload),t.type=o,c=t.tag=Xg(o),e=At(o,e),c){case 0:t=ul(null,t,o,e,r);break e;case 1:t=Jd(null,t,o,e,r);break e;case 11:t=Kd(null,t,o,e,r);break e;case 14:t=Qd(null,t,o,At(o.type,e),r);break e}throw Error(i(306,o,""))}return t;case 0:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:At(o,c),ul(e,t,o,c,r);case 1:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:At(o,c),Jd(e,t,o,c,r);case 3:e:{if(Zd(t),e===null)throw Error(i(387));o=t.pendingProps,p=t.memoizedState,c=p.element,hd(e,t),Ts(t,o,null,r);var x=t.memoizedState;if(o=x.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){c=Tr(Error(i(423)),t),t=ef(e,t,o,r,c);break e}else if(o!==c){c=Tr(Error(i(424)),t),t=ef(e,t,o,r,c);break e}else for(_t=gn(t.stateNode.containerInfo.firstChild),gt=t,Oe=!0,It=null,r=fd(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Sr(),o===c){t=en(e,t,r);break e}rt(e,t,o,r)}t=t.child}return t;case 5:return _d(t),e===null&&zo(t),o=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,x=c.children,Po(o,c)?x=null:p!==null&&Po(o,p)&&(t.flags|=32),qd(e,t),rt(e,t,x,r),t.child;case 6:return e===null&&zo(t),null;case 13:return tf(e,t,r);case 4:return Ko(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Nr(t,null,o,r):rt(e,t,o,r),t.child;case 11:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:At(o,c),Kd(e,t,o,c,r);case 7:return rt(e,t,t.pendingProps,r),t.child;case 8:return rt(e,t,t.pendingProps.children,r),t.child;case 12:return rt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,c=t.pendingProps,p=t.memoizedProps,x=c.value,Pe(js,o._currentValue),o._currentValue=x,p!==null)if(Pt(p.value,x)){if(p.children===c.children&&!ot.current){t=en(e,t,r);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var N=p.dependencies;if(N!==null){x=p.child;for(var C=N.firstContext;C!==null;){if(C.context===o){if(p.tag===1){C=Zt(-1,r&-r),C.tag=2;var $=p.updateQueue;if($!==null){$=$.shared;var Q=$.pending;Q===null?C.next=C:(C.next=Q.next,Q.next=C),$.pending=C}}p.lanes|=r,C=p.alternate,C!==null&&(C.lanes|=r),Ho(p.return,r,t),N.lanes|=r;break}C=C.next}}else if(p.tag===10)x=p.type===t.type?null:p.child;else if(p.tag===18){if(x=p.return,x===null)throw Error(i(341));x.lanes|=r,N=x.alternate,N!==null&&(N.lanes|=r),Ho(x,r,t),x=p.sibling}else x=p.child;if(x!==null)x.return=p;else for(x=p;x!==null;){if(x===t){x=null;break}if(p=x.sibling,p!==null){p.return=x.return,x=p;break}x=x.return}p=x}rt(e,t,c.children,r),t=t.child}return t;case 9:return c=t.type,o=t.pendingProps.children,Er(t,r),c=kt(c),o=o(c),t.flags|=1,rt(e,t,o,r),t.child;case 14:return o=t.type,c=At(o,t.pendingProps),c=At(o.type,c),Qd(e,t,o,c,r);case 15:return Xd(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:At(o,c),Ds(e,t),t.tag=1,lt(o)?(e=!0,vs(t)):e=!1,Er(t,r),$d(t,o,c),al(t,o,c,r),cl(null,t,o,!0,e,r);case 19:return rf(e,t,r);case 22:return Yd(e,t,r)}throw Error(i(156,t.tag))};function Cf(e,t){return ac(e,t)}function Qg(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,r,o){return new Qg(e,t,r,o)}function Pl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xg(e){if(typeof e=="function")return Pl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===U)return 11;if(e===_e)return 14}return 2}function En(e,t){var r=e.alternate;return r===null?(r=jt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xs(e,t,r,o,c,p){var x=2;if(o=e,typeof e=="function")Pl(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case I:return qn(r.children,c,p,t);case O:x=8,c|=8;break;case H:return e=jt(12,r,t,c|2),e.elementType=H,e.lanes=p,e;case re:return e=jt(13,r,t,c),e.elementType=re,e.lanes=p,e;case ie:return e=jt(19,r,t,c),e.elementType=ie,e.lanes=p,e;case ke:return Ys(r,c,p,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:x=10;break e;case F:x=9;break e;case U:x=11;break e;case _e:x=14;break e;case xe:x=16,o=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=jt(x,r,t,c),t.elementType=e,t.type=o,t.lanes=p,t}function qn(e,t,r,o){return e=jt(7,e,o,t),e.lanes=r,e}function Ys(e,t,r,o){return e=jt(22,e,o,t),e.elementType=ke,e.lanes=r,e.stateNode={isHidden:!1},e}function Il(e,t,r){return e=jt(6,e,null,t),e.lanes=r,e}function Al(e,t,r){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yg(e,t,r,o,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=io(0),this.expirationTimes=io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=io(0),this.identifierPrefix=o,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Rl(e,t,r,o,c,p,x,N,C){return e=new Yg(e,t,r,N,C),t===1?(t=1,p===!0&&(t|=8)):t=0,p=jt(3,null,null,t),e.current=p,p.stateNode=e,p.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vo(p),e}function qg(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Tf(e){if(!e)return xn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var r=e.type;if(lt(r))return nd(e,r,t)}return t}function Pf(e,t,r,o,c,p,x,N,C){return e=Rl(r,o,!0,e,c,p,x,N,C),e.context=Tf(null),r=e.current,o=it(),c=Nn(r),p=Zt(o,c),p.callback=t??null,bn(r,p,c),e.current.lanes=c,ri(e,c,o),dt(e,o),e}function qs(e,t,r,o){var c=t.current,p=it(),x=Nn(c);return r=Tf(r),t.context===null?t.context=r:t.pendingContext=r,t=Zt(p,x),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=bn(c,t,x),e!==null&&(Lt(e,c,x,p),Cs(e,c,x)),x}function Js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function If(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ol(e,t){If(e,t),(e=e.alternate)&&If(e,t)}var Af=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ll(e){this._internalRoot=e}Zs.prototype.render=Ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));qs(e,t,null,null)},Zs.prototype.unmount=Ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){qs(null,e,null,null)}),t[Qt]=null}};function Zs(e){this._internalRoot=e}Zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pn.length&&t!==0&&t<pn[r].priority;r++);pn.splice(r,0,e),r===0&&_c(e)}};function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rf(){}function Jg(e,t,r,o,c){if(c){if(typeof o=="function"){var p=o;o=function(){var $=Js(x);p.call($)}}var x=Pf(t,o,e,0,null,!1,!1,"",Rf);return e._reactRootContainer=x,e[Qt]=x.current,_i(e.nodeType===8?e.parentNode:e),Qn(),x}for(;c=e.lastChild;)e.removeChild(c);if(typeof o=="function"){var N=o;o=function(){var $=Js(C);N.call($)}}var C=Rl(e,0,!1,null,null,!1,!1,"",Rf);return e._reactRootContainer=C,e[Qt]=C.current,_i(e.nodeType===8?e.parentNode:e),Qn(function(){qs(t,C,r,o)}),C}function ta(e,t,r,o,c){var p=r._reactRootContainer;if(p){var x=p;if(typeof c=="function"){var N=c;c=function(){var C=Js(x);N.call(C)}}qs(t,x,e,c)}else x=Jg(r,t,e,c,o);return Js(x)}fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ni(t.pendingLanes);r!==0&&(so(t,r|1),dt(t,$e()),(je&6)===0&&(Ar=$e()+500,yn()))}break;case 13:Qn(function(){var o=Jt(e,1);if(o!==null){var c=it();Lt(o,e,1,c)}}),Ol(e,1)}},ao=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var r=it();Lt(t,e,134217728,r)}Ol(e,134217728)}},pc=function(e){if(e.tag===13){var t=Nn(e),r=Jt(e,t);if(r!==null){var o=it();Lt(r,e,t,o)}Ol(e,t)}},hc=function(){return Te},mc=function(e,t){var r=Te;try{return Te=e,t()}finally{Te=r}},Ja=function(e,t,r){switch(t){case"input":if(or(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var c=xs(o);if(!c)throw Error(i(90));at(o),or(o,c)}}}break;case"textarea":Yr(e,r);break;case"select":t=r.value,t!=null&&Kt(e,!!r.multiple,t,!1)}},Zu=El,ec=Qn;var Zg={usingClientEntryPoint:!1,Events:[vi,yr,xs,qu,Ju,El]},Oi={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e0={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{Zi=na.inject(e0),Dt=na}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg,ft.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ml(t))throw Error(i(200));return qg(e,t,null,r)},ft.createRoot=function(e,t){if(!Ml(e))throw Error(i(299));var r=!1,o="",c=Af;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Rl(e,1,!1,null,null,r,!1,o,c),e[Qt]=t.current,_i(e.nodeType===8?e.parentNode:e),new Ll(t)},ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e},ft.flushSync=function(e){return Qn(e)},ft.hydrate=function(e,t,r){if(!ea(t))throw Error(i(200));return ta(null,e,t,!0,r)},ft.hydrateRoot=function(e,t,r){if(!Ml(e))throw Error(i(405));var o=r!=null&&r.hydratedSources||null,c=!1,p="",x=Af;if(r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),t=Pf(t,null,e,1,r??null,c,!1,p,x),e[Qt]=t.current,_i(e),o)for(e=0;e<o.length;e++)r=o[e],c=r._getVersion,c=c(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,c]:t.mutableSourceEagerHydrationData.push(r,c);return new Zs(t)},ft.render=function(e,t,r){if(!ea(t))throw Error(i(200));return ta(null,e,t,!1,r)},ft.unmountComponentAtNode=function(e){if(!ea(e))throw Error(i(40));return e._reactRootContainer?(Qn(function(){ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1},ft.unstable_batchedUpdates=El,ft.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!ea(r))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ta(e,t,r,!1,o)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var Kf;function I_(){if(Kf)return Fl.exports;Kf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),Fl.exports=P_(),Fl.exports}var ia={},Qf;function A_(){if(Qf)return ia;Qf=1;var n=I_();return ia.createRoot=n.createRoot,ia.hydrateRoot=n.hydrateRoot,ia}var R_=A_();const O_=Qp(R_),Da=R.createContext(),L_=({children:n})=>{const[s,i]=R.useState(Math.random()<.5);return l.jsx(Da.Provider,{value:{isDark:s,setIsDark:i},children:n})};function pu(){return pu=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},pu.apply(this,arguments)}var M_={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,s){},onStringTyped:function(n,s){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,s){},onTypingResumed:function(n,s){},onReset:function(n){},onStop:function(n,s){},onStart:function(n,s){},onDestroy:function(n){}},B_=new(function(){function n(){}var s=n.prototype;return s.load=function(i,a,u){if(i.el=typeof u=="string"?document.querySelector(u):u,i.options=pu({},M_,a),i.isInput=i.el.tagName.toLowerCase()==="input",i.attr=i.options.attr,i.bindInputFocusEvents=i.options.bindInputFocusEvents,i.showCursor=!i.isInput&&i.options.showCursor,i.cursorChar=i.options.cursorChar,i.cursorBlinking=!0,i.elContent=i.attr?i.el.getAttribute(i.attr):i.el.textContent,i.contentType=i.options.contentType,i.typeSpeed=i.options.typeSpeed,i.startDelay=i.options.startDelay,i.backSpeed=i.options.backSpeed,i.smartBackspace=i.options.smartBackspace,i.backDelay=i.options.backDelay,i.fadeOut=i.options.fadeOut,i.fadeOutClass=i.options.fadeOutClass,i.fadeOutDelay=i.options.fadeOutDelay,i.isPaused=!1,i.strings=i.options.strings.map(function(_){return _.trim()}),i.stringsElement=typeof i.options.stringsElement=="string"?document.querySelector(i.options.stringsElement):i.options.stringsElement,i.stringsElement){i.strings=[],i.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var d=Array.prototype.slice.apply(i.stringsElement.children),m=d.length;if(m)for(var f=0;f<m;f+=1)i.strings.push(d[f].innerHTML.trim())}for(var h in i.strPos=0,i.currentElContent=this.getCurrentElContent(i),i.currentElContent&&i.currentElContent.length>0&&(i.strPos=i.currentElContent.length-1,i.strings.unshift(i.currentElContent)),i.sequence=[],i.strings)i.sequence[h]=h;i.arrayPos=0,i.stopNum=0,i.loop=i.options.loop,i.loopCount=i.options.loopCount,i.curLoop=0,i.shuffle=i.options.shuffle,i.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},i.typingComplete=!1,i.autoInsertCss=i.options.autoInsertCss,i.autoInsertCss&&(this.appendCursorAnimationCss(i),this.appendFadeOutAnimationCss(i))},s.getCurrentElContent=function(i){return i.attr?i.el.getAttribute(i.attr):i.isInput?i.el.value:i.contentType==="html"?i.el.innerHTML:i.el.textContent},s.appendCursorAnimationCss=function(i){var a="data-typed-js-cursor-css";if(i.showCursor&&!document.querySelector("["+a+"]")){var u=document.createElement("style");u.setAttribute(a,"true"),u.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(u)}},s.appendFadeOutAnimationCss=function(i){var a="data-typed-fadeout-js-css";if(i.fadeOut&&!document.querySelector("["+a+"]")){var u=document.createElement("style");u.setAttribute(a,"true"),u.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(u)}},n}()),Xf=new(function(){function n(){}var s=n.prototype;return s.typeHtmlChars=function(i,a,u){if(u.contentType!=="html")return a;var d=i.substring(a).charAt(0);if(d==="<"||d==="&"){var m;for(m=d==="<"?">":";";i.substring(a+1).charAt(0)!==m&&!(1+ ++a>i.length););a++}return a},s.backSpaceHtmlChars=function(i,a,u){if(u.contentType!=="html")return a;var d=i.substring(a).charAt(0);if(d===">"||d===";"){var m;for(m=d===">"?"<":"&";i.substring(a-1).charAt(0)!==m&&!(--a<0););a--}return a},n}()),hu=function(){function n(i,a){B_.load(this,a,i),this.begin()}var s=n.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(i){i===void 0&&(i=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,i&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var i=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){i.strPos===0?i.typewrite(i.strings[i.sequence[i.arrayPos]],i.strPos):i.backspace(i.strings[i.sequence[i.arrayPos]],i.strPos)},this.startDelay)},s.typewrite=function(i,a){var u=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var d=this.humanizer(this.typeSpeed),m=1;this.pause.status!==!0?this.timeout=setTimeout(function(){a=Xf.typeHtmlChars(i,a,u);var f=0,h=i.substring(a);if(h.charAt(0)==="^"&&/^\^\d+/.test(h)){var _=1;_+=(h=/\d+/.exec(h)[0]).length,f=parseInt(h),u.temporaryPause=!0,u.options.onTypingPaused(u.arrayPos,u),i=i.substring(0,a)+i.substring(a+_),u.toggleBlinking(!0)}if(h.charAt(0)==="`"){for(;i.substring(a+m).charAt(0)!=="`"&&(m++,!(a+m>i.length)););var v=i.substring(0,a),k=i.substring(v.length+1,a+m),w=i.substring(a+m+1);i=v+k+w,m--}u.timeout=setTimeout(function(){u.toggleBlinking(!1),a>=i.length?u.doneTyping(i,a):u.keepTyping(i,a,m),u.temporaryPause&&(u.temporaryPause=!1,u.options.onTypingResumed(u.arrayPos,u))},f)},d):this.setPauseStatus(i,a,!0)},s.keepTyping=function(i,a,u){a===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var d=i.substring(0,a+=u);this.replaceText(d),this.typewrite(i,a)},s.doneTyping=function(i,a){var u=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){u.backspace(i,a)},this.backDelay))},s.backspace=function(i,a){var u=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var d=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){a=Xf.backSpaceHtmlChars(i,a,u);var m=i.substring(0,a);if(u.replaceText(m),u.smartBackspace){var f=u.strings[u.arrayPos+1];u.stopNum=f&&m===f.substring(0,a)?a:0}a>u.stopNum?(a--,u.backspace(i,a)):a<=u.stopNum&&(u.arrayPos++,u.arrayPos===u.strings.length?(u.arrayPos=0,u.options.onLastStringBackspaced(),u.shuffleStringsIfNeeded(),u.begin()):u.typewrite(u.strings[u.sequence[u.arrayPos]],a))},d)}else this.setPauseStatus(i,a,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(i,a,u){this.pause.typewrite=u,this.pause.curString=i,this.pause.curStrPos=a},s.toggleBlinking=function(i){this.cursor&&(this.pause.status||this.cursorBlinking!==i&&(this.cursorBlinking=i,i?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(i){return Math.round(Math.random()*i/2)+i},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var i=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){i.arrayPos++,i.replaceText(""),i.strings.length>i.arrayPos?i.typewrite(i.strings[i.sequence[i.arrayPos]],0):(i.typewrite(i.strings[0],0),i.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(i){this.attr?this.el.setAttribute(this.attr,i):this.isInput?this.el.value=i:this.contentType==="html"?this.el.innerHTML=i:this.el.textContent=i},s.bindFocusEvents=function(){var i=this;this.isInput&&(this.el.addEventListener("focus",function(a){i.stop()}),this.el.addEventListener("blur",function(a){i.el.value&&i.el.value.length!==0||i.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();const D_=({images:n=["/Resume-Builder/Temp/temp1.png","/Resume-Builder/Temp/temp2.png","/Resume-Builder/Temp/temp3.png","/Resume-Builder/Temp/temp4.png","/Resume-Builder/Temp/temp5.png","/Resume-Builder/Temp/temp6.png"],interval:s=3e3,showIndicators:i=!0})=>{const[a,u]=R.useState(0),[d,m]=R.useState(window.innerWidth<768),[f,h]=R.useState(null),_=R.useRef(null);R.useEffect(()=>{const E=()=>{m(window.innerWidth<768)};return window.addEventListener("resize",E),E(),()=>window.removeEventListener("resize",E)},[]),R.useEffect(()=>{if(n.length<=1)return;const E=setInterval(()=>{h("right"),u(B=>(B+1)%n.length)},s);return()=>clearInterval(E)},[n.length,s]);const v=()=>{if(d)return[a];{const E=(a-1+n.length)%n.length,B=(a+1)%n.length;return[E,a,B]}},k=E=>{h(E>a?"right":"left"),u(E)};if(!n.length)return l.jsx("div",{className:"w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg",children:"No images to display"});const w=v(),j=E=>d?"transition-all duration-500 ease-in-out px-4":E===1?"transition-all duration-700 ease-in-out px-4 scale-110 z-10 opacity-90":E===0?`transition-all duration-700 ease-in-out px-4 scale-90 opacity-70 ${f==="left"?"translate-x-8":""}`:`transition-all duration-700 ease-in-out px-4 scale-90 opacity-70 ${f==="right"?"translate-x-8":""}`;return l.jsxs("div",{className:"w-3/4 bg-gray-300 overflow-hidden dark:bg-slate-950",children:[l.jsx("div",{className:"w-full overflow-hidden py-8",ref:_,children:l.jsx("div",{className:"flex justify-center items-center",children:w.map((E,B)=>l.jsx("div",{className:j(B),children:l.jsx("img",{src:n[E],alt:`Slide ${E+1}`,className:"w-full h-auto object-contain rounded-lg shadow dark:filter dark:brightness-90"})},`slide-${E}`))})}),i&&l.jsx("div",{className:"flex justify-center items-center mb-3 mt-2",children:l.jsx("div",{className:"flex space-x-3",children:n.map((E,B)=>l.jsx("button",{className:`w-3 h-3 rounded-full transition-colors focus:outline-none ${B===a?"bg-blue-500":"bg-gray-400 hover:bg-gray-500 dark:bg-gray-300 dark:hover:bg-gray-400"}`,onClick:()=>k(B),"aria-label":`Go to slide ${B+1}`,"aria-current":B===a?"true":"false"},`indicator-${B}`))})})]})};var ht=function(){return ht=Object.assign||function(s){for(var i,a=1,u=arguments.length;a<u;a++){i=arguments[a];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(s[d]=i[d])}return s},ht.apply(this,arguments)};function ja(n,s,i){if(i||arguments.length===2)for(var a=0,u=s.length,d;a<u;a++)(d||!(a in s))&&(d||(d=Array.prototype.slice.call(s,0,a)),d[a]=s[a]);return n.concat(d||Array.prototype.slice.call(s))}var Re="-ms-",Fi="-moz-",Ce="-webkit-",dh="comm",za="rule",Du="decl",z_="@import",fh="@keyframes",$_="@layer",ph=Math.abs,zu=String.fromCharCode,mu=Object.assign;function F_(n,s){return Ye(n,0)^45?(((s<<2^Ye(n,0))<<2^Ye(n,1))<<2^Ye(n,2))<<2^Ye(n,3):0}function hh(n){return n.trim()}function rn(n,s){return(n=s.exec(n))?n[0]:n}function be(n,s,i){return n.replace(s,i)}function ya(n,s,i){return n.indexOf(s,i)}function Ye(n,s){return n.charCodeAt(s)|0}function Br(n,s,i){return n.slice(s,i)}function Ht(n){return n.length}function mh(n){return n.length}function $i(n,s){return s.push(n),n}function U_(n,s){return n.map(s).join("")}function Yf(n,s){return n.filter(function(i){return!rn(i,s)})}var $a=1,Dr=1,gh=0,Et=0,We=0,Wr="";function Fa(n,s,i,a,u,d,m,f){return{value:n,root:s,parent:i,type:a,props:u,children:d,line:$a,column:Dr,length:m,return:"",siblings:f}}function Tn(n,s){return mu(Fa("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},s)}function Or(n){for(;n.root;)n=Tn(n.root,{children:[n]});$i(n,n.siblings)}function W_(){return We}function H_(){return We=Et>0?Ye(Wr,--Et):0,Dr--,We===10&&(Dr=1,$a--),We}function Mt(){return We=Et<gh?Ye(Wr,Et++):0,Dr++,We===10&&(Dr=1,$a++),We}function nr(){return Ye(Wr,Et)}function va(){return Et}function Ua(n,s){return Br(Wr,n,s)}function gu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G_(n){return $a=Dr=1,gh=Ht(Wr=n),Et=0,[]}function V_(n){return Wr="",n}function Hl(n){return hh(Ua(Et-1,_u(n===91?n+2:n===40?n+1:n)))}function K_(n){for(;(We=nr())&&We<33;)Mt();return gu(n)>2||gu(We)>3?"":" "}function Q_(n,s){for(;--s&&Mt()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Ua(n,va()+(s<6&&nr()==32&&Mt()==32))}function _u(n){for(;Mt();)switch(We){case n:return Et;case 34:case 39:n!==34&&n!==39&&_u(We);break;case 40:n===41&&_u(n);break;case 92:Mt();break}return Et}function X_(n,s){for(;Mt()&&n+We!==57;)if(n+We===84&&nr()===47)break;return"/*"+Ua(s,Et-1)+"*"+zu(n===47?n:Mt())}function Y_(n){for(;!gu(nr());)Mt();return Ua(n,Et)}function q_(n){return V_(ba("",null,null,null,[""],n=G_(n),0,[0],n))}function ba(n,s,i,a,u,d,m,f,h){for(var _=0,v=0,k=m,w=0,j=0,E=0,B=1,b=1,g=1,S=0,W="",T=u,z=d,P=a,I=W;b;)switch(E=S,S=Mt()){case 40:if(E!=108&&Ye(I,k-1)==58){ya(I+=be(Hl(S),"&","&\f"),"&\f",ph(_?f[_-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:I+=Hl(S);break;case 9:case 10:case 13:case 32:I+=K_(E);break;case 92:I+=Q_(va()-1,7);continue;case 47:switch(nr()){case 42:case 47:$i(J_(X_(Mt(),va()),s,i,h),h);break;default:I+="/"}break;case 123*B:f[_++]=Ht(I)*g;case 125*B:case 59:case 0:switch(S){case 0:case 125:b=0;case 59+v:g==-1&&(I=be(I,/\f/g,"")),j>0&&Ht(I)-k&&$i(j>32?Jf(I+";",a,i,k-1,h):Jf(be(I," ","")+";",a,i,k-2,h),h);break;case 59:I+=";";default:if($i(P=qf(I,s,i,_,v,u,f,W,T=[],z=[],k,d),d),S===123)if(v===0)ba(I,s,P,P,T,d,k,f,z);else switch(w===99&&Ye(I,3)===110?100:w){case 100:case 108:case 109:case 115:ba(n,P,P,a&&$i(qf(n,P,P,0,0,u,f,W,u,T=[],k,z),z),u,z,k,f,a?T:z);break;default:ba(I,P,P,P,[""],z,0,f,z)}}_=v=j=0,B=g=1,W=I="",k=m;break;case 58:k=1+Ht(I),j=E;default:if(B<1){if(S==123)--B;else if(S==125&&B++==0&&H_()==125)continue}switch(I+=zu(S),S*B){case 38:g=v>0?1:(I+="\f",-1);break;case 44:f[_++]=(Ht(I)-1)*g,g=1;break;case 64:nr()===45&&(I+=Hl(Mt())),w=nr(),v=k=Ht(W=I+=Y_(va())),S++;break;case 45:E===45&&Ht(I)==2&&(B=0)}}return d}function qf(n,s,i,a,u,d,m,f,h,_,v,k){for(var w=u-1,j=u===0?d:[""],E=mh(j),B=0,b=0,g=0;B<a;++B)for(var S=0,W=Br(n,w+1,w=ph(b=m[B])),T=n;S<E;++S)(T=hh(b>0?j[S]+" "+W:be(W,/&\f/g,j[S])))&&(h[g++]=T);return Fa(n,s,i,u===0?za:f,h,_,v,k)}function J_(n,s,i,a){return Fa(n,s,i,dh,zu(W_()),Br(n,2,-2),0,a)}function Jf(n,s,i,a,u){return Fa(n,s,i,Du,Br(n,0,a),Br(n,a+1,-1),a,u)}function _h(n,s,i){switch(F_(n,s)){case 5103:return Ce+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+n+n;case 4789:return Fi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+n+Fi+n+Re+n+n;case 5936:switch(Ye(n,s+11)){case 114:return Ce+n+Re+be(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ce+n+Re+be(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ce+n+Re+be(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ce+n+Re+n+n;case 6165:return Ce+n+Re+"flex-"+n+n;case 5187:return Ce+n+be(n,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+Re+"flex-$1$2")+n;case 5443:return Ce+n+Re+"flex-item-"+be(n,/flex-|-self/g,"")+(rn(n,/flex-|baseline/)?"":Re+"grid-row-"+be(n,/flex-|-self/g,""))+n;case 4675:return Ce+n+Re+"flex-line-pack"+be(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ce+n+Re+be(n,"shrink","negative")+n;case 5292:return Ce+n+Re+be(n,"basis","preferred-size")+n;case 6060:return Ce+"box-"+be(n,"-grow","")+Ce+n+Re+be(n,"grow","positive")+n;case 4554:return Ce+be(n,/([^-])(transform)/g,"$1"+Ce+"$2")+n;case 6187:return be(be(be(n,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),n,"")+n;case 5495:case 3959:return be(n,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return be(be(n,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+n+n;case 4200:if(!rn(n,/flex-|baseline/))return Re+"grid-column-align"+Br(n,s)+n;break;case 2592:case 3360:return Re+be(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,u){return s=u,rn(a.props,/grid-\w+-end/)})?~ya(n+(i=i[s].value),"span",0)?n:Re+be(n,"-start","")+n+Re+"grid-row-span:"+(~ya(i,"span",0)?rn(i,/\d+/):+rn(i,/\d+/)-+rn(n,/\d+/))+";":Re+be(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return rn(a.props,/grid-\w+-start/)})?n:Re+be(be(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return be(n,/(.+)-inline(.+)/,Ce+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(n)-1-s>6)switch(Ye(n,s+1)){case 109:if(Ye(n,s+4)!==45)break;case 102:return be(n,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+Fi+(Ye(n,s+3)==108?"$3":"$2-$3"))+n;case 115:return~ya(n,"stretch",0)?_h(be(n,"stretch","fill-available"),s,i)+n:n}break;case 5152:case 5920:return be(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,u,d,m,f,h,_){return Re+u+":"+d+_+(m?Re+u+"-span:"+(f?h:+h-+d)+_:"")+n});case 4949:if(Ye(n,s+6)===121)return be(n,":",":"+Ce)+n;break;case 6444:switch(Ye(n,Ye(n,14)===45?18:11)){case 120:return be(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(Ye(n,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+Re+"$2box$3")+n;case 100:return be(n,":",":"+Re)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return be(n,"scroll-","scroll-snap-")+n}return n}function Ea(n,s){for(var i="",a=0;a<n.length;a++)i+=s(n[a],a,n,s)||"";return i}function Z_(n,s,i,a){switch(n.type){case $_:if(n.children.length)break;case z_:case Du:return n.return=n.return||n.value;case dh:return"";case fh:return n.return=n.value+"{"+Ea(n.children,a)+"}";case za:if(!Ht(n.value=n.props.join(",")))return""}return Ht(i=Ea(n.children,a))?n.return=n.value+"{"+i+"}":""}function ex(n){var s=mh(n);return function(i,a,u,d){for(var m="",f=0;f<s;f++)m+=n[f](i,a,u,d)||"";return m}}function tx(n){return function(s){s.root||(s=s.return)&&n(s)}}function nx(n,s,i,a){if(n.length>-1&&!n.return)switch(n.type){case Du:n.return=_h(n.value,n.length,i);return;case fh:return Ea([Tn(n,{value:be(n.value,"@","@"+Ce)})],a);case za:if(n.length)return U_(i=n.props,function(u){switch(rn(u,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Or(Tn(n,{props:[be(u,/:(read-\w+)/,":"+Fi+"$1")]})),Or(Tn(n,{props:[u]})),mu(n,{props:Yf(i,a)});break;case"::placeholder":Or(Tn(n,{props:[be(u,/:(plac\w+)/,":"+Ce+"input-$1")]})),Or(Tn(n,{props:[be(u,/:(plac\w+)/,":"+Fi+"$1")]})),Or(Tn(n,{props:[be(u,/:(plac\w+)/,Re+"input-$1")]})),Or(Tn(n,{props:[u]})),mu(n,{props:Yf(i,a)});break}return""})}}var rx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yt={},zr=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",xh="active",yh="data-styled-version",Wa="6.1.15",$u=`/*!sc*/
`,Ca=typeof window<"u"&&"HTMLElement"in window,ix=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY),Ha=Object.freeze([]),$r=Object.freeze({});function sx(n,s,i){return i===void 0&&(i=$r),n.theme!==i.theme&&n.theme||s||i.theme}var vh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ax=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ox=/(^-|-$)/g;function Zf(n){return n.replace(ax,"-").replace(ox,"")}var lx=/(a)(d)/gi,sa=52,ep=function(n){return String.fromCharCode(n+(n>25?39:97))};function xu(n){var s,i="";for(s=Math.abs(n);s>sa;s=s/sa|0)i=ep(s%sa)+i;return(ep(s%sa)+i).replace(lx,"$1-$2")}var Gl,bh=5381,Mr=function(n,s){for(var i=s.length;i;)n=33*n^s.charCodeAt(--i);return n},wh=function(n){return Mr(bh,n)};function ux(n){return xu(wh(n)>>>0)}function cx(n){return n.displayName||n.name||"Component"}function Vl(n){return typeof n=="string"&&!0}var kh=typeof Symbol=="function"&&Symbol.for,Sh=kh?Symbol.for("react.memo"):60115,dx=kh?Symbol.for("react.forward_ref"):60112,fx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},px={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hx=((Gl={})[dx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gl[Sh]=Nh,Gl);function tp(n){return("type"in(s=n)&&s.type.$$typeof)===Sh?Nh:"$$typeof"in n?hx[n.$$typeof]:fx;var s}var mx=Object.defineProperty,gx=Object.getOwnPropertyNames,np=Object.getOwnPropertySymbols,_x=Object.getOwnPropertyDescriptor,xx=Object.getPrototypeOf,rp=Object.prototype;function jh(n,s,i){if(typeof s!="string"){if(rp){var a=xx(s);a&&a!==rp&&jh(n,a,i)}var u=gx(s);np&&(u=u.concat(np(s)));for(var d=tp(n),m=tp(s),f=0;f<u.length;++f){var h=u[f];if(!(h in px||i&&i[h]||m&&h in m||d&&h in d)){var _=_x(s,h);try{mx(n,h,_)}catch{}}}}return n}function Fr(n){return typeof n=="function"}function Fu(n){return typeof n=="object"&&"styledComponentId"in n}function er(n,s){return n&&s?"".concat(n," ").concat(s):n||s||""}function ip(n,s){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function Hi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function yu(n,s,i){if(i===void 0&&(i=!1),!i&&!Hi(n)&&!Array.isArray(n))return s;if(Array.isArray(s))for(var a=0;a<s.length;a++)n[a]=yu(n[a],s[a]);else if(Hi(s))for(var a in s)n[a]=yu(n[a],s[a]);return n}function Uu(n,s){Object.defineProperty(n,"toString",{value:s})}function Qi(n){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var yx=function(){function n(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return n.prototype.indexOfGroup=function(s){for(var i=0,a=0;a<s;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(s,i){if(s>=this.groupSizes.length){for(var a=this.groupSizes,u=a.length,d=u;s>=d;)if((d<<=1)<0)throw Qi(16,"".concat(s));this.groupSizes=new Uint32Array(d),this.groupSizes.set(a),this.length=d;for(var m=u;m<d;m++)this.groupSizes[m]=0}for(var f=this.indexOfGroup(s+1),h=(m=0,i.length);m<h;m++)this.tag.insertRule(f,i[m])&&(this.groupSizes[s]++,f++)},n.prototype.clearGroup=function(s){if(s<this.length){var i=this.groupSizes[s],a=this.indexOfGroup(s),u=a+i;this.groupSizes[s]=0;for(var d=a;d<u;d++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(s){var i="";if(s>=this.length||this.groupSizes[s]===0)return i;for(var a=this.groupSizes[s],u=this.indexOfGroup(s),d=u+a,m=u;m<d;m++)i+="".concat(this.tag.getRule(m)).concat($u);return i},n}(),wa=new Map,Ta=new Map,ka=1,aa=function(n){if(wa.has(n))return wa.get(n);for(;Ta.has(ka);)ka++;var s=ka++;return wa.set(n,s),Ta.set(s,n),s},vx=function(n,s){ka=s+1,wa.set(n,s),Ta.set(s,n)},bx="style[".concat(zr,"][").concat(yh,'="').concat(Wa,'"]'),wx=new RegExp("^".concat(zr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kx=function(n,s,i){for(var a,u=i.split(","),d=0,m=u.length;d<m;d++)(a=u[d])&&n.registerName(s,a)},Sx=function(n,s){for(var i,a=((i=s.textContent)!==null&&i!==void 0?i:"").split($u),u=[],d=0,m=a.length;d<m;d++){var f=a[d].trim();if(f){var h=f.match(wx);if(h){var _=0|parseInt(h[1],10),v=h[2];_!==0&&(vx(v,_),kx(n,v,h[3]),n.getTag().insertRules(_,u)),u.length=0}else u.push(f)}}},sp=function(n){for(var s=document.querySelectorAll(bx),i=0,a=s.length;i<a;i++){var u=s[i];u&&u.getAttribute(zr)!==xh&&(Sx(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function Nx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Eh=function(n){var s=document.head,i=n||s,a=document.createElement("style"),u=function(f){var h=Array.from(f.querySelectorAll("style[".concat(zr,"]")));return h[h.length-1]}(i),d=u!==void 0?u.nextSibling:null;a.setAttribute(zr,xh),a.setAttribute(yh,Wa);var m=Nx();return m&&a.setAttribute("nonce",m),i.insertBefore(a,d),a},jx=function(){function n(s){this.element=Eh(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,u=0,d=a.length;u<d;u++){var m=a[u];if(m.ownerNode===i)return m}throw Qi(17)}(this.element),this.length=0}return n.prototype.insertRule=function(s,i){try{return this.sheet.insertRule(i,s),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},n.prototype.getRule=function(s){var i=this.sheet.cssRules[s];return i&&i.cssText?i.cssText:""},n}(),Ex=function(){function n(s){this.element=Eh(s),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(s,i){if(s<=this.length&&s>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[s]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},n.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},n}(),Cx=function(){function n(s){this.rules=[],this.length=0}return n.prototype.insertRule=function(s,i){return s<=this.length&&(this.rules.splice(s,0,i),this.length++,!0)},n.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},n.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},n}(),ap=Ca,Tx={isServer:!Ca,useCSSOMInjection:!ix},Ch=function(){function n(s,i,a){s===void 0&&(s=$r),i===void 0&&(i={});var u=this;this.options=ht(ht({},Tx),s),this.gs=i,this.names=new Map(a),this.server=!!s.isServer,!this.server&&Ca&&ap&&(ap=!1,sp(this)),Uu(this,function(){return function(d){for(var m=d.getTag(),f=m.length,h="",_=function(k){var w=function(g){return Ta.get(g)}(k);if(w===void 0)return"continue";var j=d.names.get(w),E=m.getGroup(k);if(j===void 0||!j.size||E.length===0)return"continue";var B="".concat(zr,".g").concat(k,'[id="').concat(w,'"]'),b="";j!==void 0&&j.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),h+="".concat(E).concat(B,'{content:"').concat(b,'"}').concat($u)},v=0;v<f;v++)_(v);return h}(u)})}return n.registerId=function(s){return aa(s)},n.prototype.rehydrate=function(){!this.server&&Ca&&sp(this)},n.prototype.reconstructWithOptions=function(s,i){return i===void 0&&(i=!0),new n(ht(ht({},this.options),s),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(s=function(i){var a=i.useCSSOMInjection,u=i.target;return i.isServer?new Cx(u):a?new jx(u):new Ex(u)}(this.options),new yx(s)));var s},n.prototype.hasNameForId=function(s,i){return this.names.has(s)&&this.names.get(s).has(i)},n.prototype.registerName=function(s,i){if(aa(s),this.names.has(s))this.names.get(s).add(i);else{var a=new Set;a.add(i),this.names.set(s,a)}},n.prototype.insertRules=function(s,i,a){this.registerName(s,i),this.getTag().insertRules(aa(s),a)},n.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},n.prototype.clearRules=function(s){this.getTag().clearGroup(aa(s)),this.clearNames(s)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Px=/&/g,Ix=/^\s*\/\/.*$/gm;function Th(n,s){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(s," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(s," ")),i.props=i.props.map(function(a){return"".concat(s," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Th(i.children,s)),i})}function Ax(n){var s,i,a,u=$r,d=u.options,m=d===void 0?$r:d,f=u.plugins,h=f===void 0?Ha:f,_=function(w,j,E){return E.startsWith(i)&&E.endsWith(i)&&E.replaceAll(i,"").length>0?".".concat(s):w},v=h.slice();v.push(function(w){w.type===za&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Px,i).replace(a,_))}),m.prefix&&v.push(nx),v.push(Z_);var k=function(w,j,E,B){j===void 0&&(j=""),E===void 0&&(E=""),B===void 0&&(B="&"),s=B,i=j,a=new RegExp("\\".concat(i,"\\b"),"g");var b=w.replace(Ix,""),g=q_(E||j?"".concat(E," ").concat(j," { ").concat(b," }"):b);m.namespace&&(g=Th(g,m.namespace));var S=[];return Ea(g,ex(v.concat(tx(function(W){return S.push(W)})))),S};return k.hash=h.length?h.reduce(function(w,j){return j.name||Qi(15),Mr(w,j.name)},bh).toString():"",k}var Rx=new Ch,vu=Ax(),Ph=he.createContext({shouldForwardProp:void 0,styleSheet:Rx,stylis:vu});Ph.Consumer;he.createContext(void 0);function op(){return R.useContext(Ph)}var Ox=function(){function n(s,i){var a=this;this.inject=function(u,d){d===void 0&&(d=vu);var m=a.name+d.hash;u.hasNameForId(a.id,m)||u.insertRules(a.id,m,d(a.rules,m,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=i,Uu(this,function(){throw Qi(12,String(a.name))})}return n.prototype.getName=function(s){return s===void 0&&(s=vu),this.name+s.hash},n}(),Lx=function(n){return n>="A"&&n<="Z"};function lp(n){for(var s="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;Lx(a)?s+="-"+a.toLowerCase():s+=a}return s.startsWith("ms-")?"-"+s:s}var Ih=function(n){return n==null||n===!1||n===""},Ah=function(n){var s,i,a=[];for(var u in n){var d=n[u];n.hasOwnProperty(u)&&!Ih(d)&&(Array.isArray(d)&&d.isCss||Fr(d)?a.push("".concat(lp(u),":"),d,";"):Hi(d)?a.push.apply(a,ja(ja(["".concat(u," {")],Ah(d),!1),["}"],!1)):a.push("".concat(lp(u),": ").concat((s=u,(i=d)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||s in rx||s.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function rr(n,s,i,a){if(Ih(n))return[];if(Fu(n))return[".".concat(n.styledComponentId)];if(Fr(n)){if(!Fr(d=n)||d.prototype&&d.prototype.isReactComponent||!s)return[n];var u=n(s);return rr(u,s,i,a)}var d;return n instanceof Ox?i?(n.inject(i,a),[n.getName(a)]):[n]:Hi(n)?Ah(n):Array.isArray(n)?Array.prototype.concat.apply(Ha,n.map(function(m){return rr(m,s,i,a)})):[n.toString()]}function Mx(n){for(var s=0;s<n.length;s+=1){var i=n[s];if(Fr(i)&&!Fu(i))return!1}return!0}var Bx=wh(Wa),Dx=function(){function n(s,i,a){this.rules=s,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&Mx(s),this.componentId=i,this.baseHash=Mr(Bx,i),this.baseStyle=a,Ch.registerId(i)}return n.prototype.generateAndInjectStyles=function(s,i,a){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))u=er(u,this.staticRulesId);else{var d=ip(rr(this.rules,s,i,a)),m=xu(Mr(this.baseHash,d)>>>0);if(!i.hasNameForId(this.componentId,m)){var f=a(d,".".concat(m),void 0,this.componentId);i.insertRules(this.componentId,m,f)}u=er(u,m),this.staticRulesId=m}else{for(var h=Mr(this.baseHash,a.hash),_="",v=0;v<this.rules.length;v++){var k=this.rules[v];if(typeof k=="string")_+=k;else if(k){var w=ip(rr(k,s,i,a));h=Mr(h,w+v),_+=w}}if(_){var j=xu(h>>>0);i.hasNameForId(this.componentId,j)||i.insertRules(this.componentId,j,a(_,".".concat(j),void 0,this.componentId)),u=er(u,j)}}return u},n}(),Rh=he.createContext(void 0);Rh.Consumer;var Kl={};function zx(n,s,i){var a=Fu(n),u=n,d=!Vl(n),m=s.attrs,f=m===void 0?Ha:m,h=s.componentId,_=h===void 0?function(T,z){var P=typeof T!="string"?"sc":Zf(T);Kl[P]=(Kl[P]||0)+1;var I="".concat(P,"-").concat(ux(Wa+P+Kl[P]));return z?"".concat(z,"-").concat(I):I}(s.displayName,s.parentComponentId):h,v=s.displayName,k=v===void 0?function(T){return Vl(T)?"styled.".concat(T):"Styled(".concat(cx(T),")")}(n):v,w=s.displayName&&s.componentId?"".concat(Zf(s.displayName),"-").concat(s.componentId):s.componentId||_,j=a&&u.attrs?u.attrs.concat(f).filter(Boolean):f,E=s.shouldForwardProp;if(a&&u.shouldForwardProp){var B=u.shouldForwardProp;if(s.shouldForwardProp){var b=s.shouldForwardProp;E=function(T,z){return B(T,z)&&b(T,z)}}else E=B}var g=new Dx(i,w,a?u.componentStyle:void 0);function S(T,z){return function(P,I,O){var H=P.attrs,y=P.componentStyle,F=P.defaultProps,U=P.foldedComponentIds,re=P.styledComponentId,ie=P.target,_e=he.useContext(Rh),xe=op(),ke=P.shouldForwardProp||xe.shouldForwardProp,q=sx(I,_e,F)||$r,oe=function(ye,ve,Ne){for(var ce,Se=ht(ht({},ve),{className:void 0,theme:Ne}),He=0;He<ye.length;He+=1){var Ct=Fr(ce=ye[He])?ce(Se):ce;for(var at in Ct)Se[at]=at==="className"?er(Se[at],Ct[at]):at==="style"?ht(ht({},Se[at]),Ct[at]):Ct[at]}return ve.className&&(Se.className=er(Se.className,ve.className)),Se}(H,I,q),Z=oe.as||ie,L={};for(var V in oe)oe[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&oe.theme===q||(V==="forwardedAs"?L.as=oe.forwardedAs:ke&&!ke(V,Z)||(L[V]=oe[V]));var te=function(ye,ve){var Ne=op(),ce=ye.generateAndInjectStyles(ve,Ne.styleSheet,Ne.stylis);return ce}(y,oe),se=er(U,re);return te&&(se+=" "+te),oe.className&&(se+=" "+oe.className),L[Vl(Z)&&!vh.has(Z)?"class":"className"]=se,O&&(L.ref=O),R.createElement(Z,L)}(W,T,z)}S.displayName=k;var W=he.forwardRef(S);return W.attrs=j,W.componentStyle=g,W.displayName=k,W.shouldForwardProp=E,W.foldedComponentIds=a?er(u.foldedComponentIds,u.styledComponentId):"",W.styledComponentId=w,W.target=a?u.target:n,Object.defineProperty(W,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=a?function(z){for(var P=[],I=1;I<arguments.length;I++)P[I-1]=arguments[I];for(var O=0,H=P;O<H.length;O++)yu(z,H[O],!0);return z}({},u.defaultProps,T):T}}),Uu(W,function(){return".".concat(W.styledComponentId)}),d&&jh(W,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),W}function up(n,s){for(var i=[n[0]],a=0,u=s.length;a<u;a+=1)i.push(s[a],n[a+1]);return i}var cp=function(n){return Object.assign(n,{isCss:!0})};function $x(n){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];if(Fr(n)||Hi(n))return cp(rr(up(Ha,ja([n],s,!0))));var a=n;return s.length===0&&a.length===1&&typeof a[0]=="string"?rr(a):cp(rr(up(a,s)))}function bu(n,s,i){if(i===void 0&&(i=$r),!s)throw Qi(1,s);var a=function(u){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return n(s,i,$x.apply(void 0,ja([u],d,!1)))};return a.attrs=function(u){return bu(n,s,ht(ht({},i),{attrs:Array.prototype.concat(i.attrs,u).filter(Boolean)}))},a.withConfig=function(u){return bu(n,s,ht(ht({},i),u))},a}var Oh=function(n){return bu(zx,n)},Rn=Oh;vh.forEach(function(n){Rn[n]=Oh(n)});const dp=()=>{const{isDark:n}=R.useContext(Da);return l.jsx(Fx,{isDark:n,children:l.jsx("input",{type:"checkbox",className:"switch shadow-lg shadow-slate-400 dark:shadow-slate-600",checked:n,readOnly:!0})})},Fx=Rn.div`
  .switch {
    position: relative;
    width: 69px;
    height: 29px;
    margin: 0px;
    appearance: none;
    -webkit-appearance: none;
    background-color: ${({isDark:n})=>n?"#2e6ada":"rgb(0, 195, 255)"};
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
    transition: background-image .7s ease-in-out;
    outline: none;
    cursor: pointer;
    overflow: hidden;
  }

  .switch:checked {
    background-color: #2558b6; /* Dark Mode */
    background-size: cover;
    transition: background-image 1s ease-in-out;
  }

  .switch:after {
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    transform: translateX(40px); /* Move Right Initially */
    animation: on .7s forwards cubic-bezier(.8, .5, .2, 1.4);
    box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
  }

  @keyframes on {
    0% {
      transform: translateX(0px);
      width: 25px;
    }

    50% {
      width: 37px;
      border-radius: 25px;
    }

    100% {
      transform: translateX(40px);
      width: 25px;
    }
  }

  .switch:checked:after {
    animation: off .7s forwards cubic-bezier(.8, .5, .2, 1.4);
    box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
  }

  @keyframes off {
    0% {
      transform: translateX(40px);
      width: 25px;
    }

    50% {
      width: 37px;
      border-radius: 25px;
    }

    100% {
      transform: translateX(0px);
      width: 25px;
    }
  }

  .switch:checked:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 5px;
    transform-origin: 53px 10px;
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
    animation: moon .7s forwards ease;
  }

  @keyframes moon {
    0% {
      transform: rotate(0deg);
      filter: blur(1px);
    }

    50% {
      filter: blur(1px);
    }

    90% {
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    100% {
      transform: rotate(170deg);
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }
  }

  .switch:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 5px;
    filter: blur(1px);
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4,
    0px 0px 20px #f5deb4,
    0px 0px 30px #f5deb4,
    inset 0px 0px 2px #efd3a3;
    transform-origin: 53px 10px;
    animation: sun .7s forwards ease;
  }

  @keyframes sun {
    0% {
      transform: rotate(170deg);
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    50% {
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    90% {
      background-color: #f5daaa;
      box-shadow: 0px 0px 10px #f5deb4,
      0px 0px 20px #f5deb4,
      0px 0px 30px #f5deb4,
       inset 0px 0px 2px #efd3a3;
      filter: blur(1px);
    }

    100% {
      transform: rotate(0deg);
      background-color: #f5daaa;
      box-shadow: 0px 0px 10px #f5deb4,
      0px 0px 20px #f5deb4,
      0px 0px 30px #f5deb4,
       inset 0px 0px 2px #efd3a3;
      filter: blur(1px);
    }
  }
`,fp=["Build your resume easily","No need to worry about what to add what to not","Get high rated, ATS freindly resumes","Different variants of resume templates available","We carefully selected strong resume data inputs from users after a high research.","Download your resume in pdf or web formate","Use AI to create a perfect summary for your resume","Completely free to use","We didn't store your entered data and generated resumes (for user privacy)","Light weight application. just take 1.8MB of RAM and approximately 0 CPU time"],Ux=()=>{const n=Ru(),s=()=>{n("/GetInfo")},i=()=>{n("/ViewTemplates")},a=()=>{n("/AboutUs")},{isDark:u,setIsDark:d}=R.useContext(Da),m=()=>{d(f=>!f)};return R.useEffect(()=>{const f=new hu("#mobile-typing-text",{strings:fp,loop:!0,typeSpeed:35,backSpeed:25,backDelay:500,cursorChar:" "}),h=new hu("#desktop-typing-text",{strings:fp,loop:!0,typeSpeed:35,backSpeed:25,backDelay:500,cursorChar:" "});return()=>{f.destroy(),h.destroy()}},[]),l.jsxs("div",{className:"flex flex-col h-screen bg-gray-300 text-center px-4 dark:bg-slate-950",children:[l.jsxs("div",{className:"hidden md:flex justify-between items-center w-full px-6 py-3 bg-white shadow-md rounded-3xl mt-3 dark:bg-slate-800",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx("button",{className:"mr-4 mt-1",title:"The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it as you prefer",onClick:m,children:l.jsx(dp,{})}),l.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",onClick:i,title:"View Generated resume samples",children:"Generated Resumes"})]}),l.jsx("h1",{className:"text-xl mr-5 font-bold text-gray-800 dark:text-white no-underline",children:l.jsxs("a",{href:"https://github.com/NishantkSingh0/Resume-Builder",title:"Address to GitHub repository of this project",target:"_blank",children:[l.jsx("span",{className:"lg:hidden",children:"Resume Builder"}),l.jsx("span",{className:"hidden lg:block",children:"Level Up Your First Impression"})]})}),l.jsxs("div",{className:"flex space-x-4",children:[l.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",title:"our contributions and contact information",onClick:a,children:"About Us"}),l.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",title:"Continue fiiling details and craft future jobs",onClick:s,children:"Continue ➤"})]})]}),l.jsxs("div",{className:"hidden md:flex flex-col items-center justify-center flex-1 mt-3 mb-3",children:[l.jsx(D_,{}),l.jsx("span",{id:"desktop-typing-text",className:"hidden md:inline-block text-xl md:text-2xl text-gray-800 h-6 dark:text-white"})]}),l.jsxs("div",{className:"flex md:hidden justify-between items-center w-full h-14 px-6 py-3 bg-white shadow-md mt-6 rounded-3xl dark:bg-slate-800",children:[l.jsx("button",{className:"text-2xl mr-8 mt-1",title:"The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it to your preferred mode.",onClick:m,children:l.jsx(dp,{})}),l.jsx("div",{className:"md:hidden flex space-x-4",children:l.jsx("button",{className:" px-4 py-[3px] bg-blue-500 text-white rounded-full hover:bg-blue-700",onClick:s,children:"Continue"})})]}),l.jsxs("div",{className:"md:hidden flex justify-center flex-col items-center flex-grow",children:[l.jsxs("p",{className:"text-sm sm:text-lg text-gray-500 font-semibold mb-4",children:["   ",l.jsx("span",{id:"mobile-typing-text",className:"md:hidden text-xl sm:text-2xl text-gray-800 h-6 mb-4 dark:text-white"})]}),l.jsx("a",{onClick:i,className:"cursor-pointer text-gray-600 dark:text-gray-300/80 font-bold",children:"Generated Templates"})]}),l.jsxs("div",{className:"md:hidden absolute bottom-4 font-bold text-gray-800 left-1/2 -translate-x-1/2 text-center dark:text-white/80",children:[l.jsx("br",{}),l.jsx("a",{onClick:a,className:"cursor-pointer dark:text-gray-300",children:"About Us"})]})]})};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lh=(...n)=>n.filter((s,i,a)=>!!s&&s.trim()!==""&&a.indexOf(s)===i).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=R.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:u="",children:d,iconNode:m,...f},h)=>R.createElement("svg",{ref:h,...Hx,width:s,height:s,stroke:n,strokeWidth:a?Number(i)*24/Number(s):i,className:Lh("lucide",u),...f},[...m.map(([_,v])=>R.createElement(_,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=(n,s)=>{const i=R.forwardRef(({className:a,...u},d)=>R.createElement(Gx,{ref:d,iconNode:s,className:Lh(`lucide-${Wx(n)}`,a),...u}));return i.displayName=`${n}`,i};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Kx=Hr("Check",Vx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xx=Hr("ChevronRight",Qx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qx=Hr("Eye",Yx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Zx=Hr("Menu",Jx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],oa=Hr("Plus",ey);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pp=Hr("X",ty);let ny={data:""},ry=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||ny,iy=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,sy=/\/\*[^]*?\*\/|  +/g,hp=/\n+/g,Pn=(n,s)=>{let i="",a="",u="";for(let d in n){let m=n[d];d[0]=="@"?d[1]=="i"?i=d+" "+m+";":a+=d[1]=="f"?Pn(m,d):d+"{"+Pn(m,d[1]=="k"?"":s)+"}":typeof m=="object"?a+=Pn(m,s?s.replace(/([^,])+/g,f=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,h=>/&/.test(h)?h.replace(/&/g,f):f?f+" "+h:h)):d):m!=null&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),u+=Pn.p?Pn.p(d,m):d+":"+m+";")}return i+(s&&u?s+"{"+u+"}":u)+a},nn={},Mh=n=>{if(typeof n=="object"){let s="";for(let i in n)s+=i+Mh(n[i]);return s}return n},ay=(n,s,i,a,u)=>{let d=Mh(n),m=nn[d]||(nn[d]=(h=>{let _=0,v=11;for(;_<h.length;)v=101*v+h.charCodeAt(_++)>>>0;return"go"+v})(d));if(!nn[m]){let h=d!==n?n:(_=>{let v,k,w=[{}];for(;v=iy.exec(_.replace(sy,""));)v[4]?w.shift():v[3]?(k=v[3].replace(hp," ").trim(),w.unshift(w[0][k]=w[0][k]||{})):w[0][v[1]]=v[2].replace(hp," ").trim();return w[0]})(n);nn[m]=Pn(u?{["@keyframes "+m]:h}:h,i?"":"."+m)}let f=i&&nn.g?nn.g:null;return i&&(nn.g=nn[m]),((h,_,v,k)=>{k?_.data=_.data.replace(k,h):_.data.indexOf(h)===-1&&(_.data=v?h+_.data:_.data+h)})(nn[m],s,a,f),m},oy=(n,s,i)=>n.reduce((a,u,d)=>{let m=s[d];if(m&&m.call){let f=m(i),h=f&&f.props&&f.props.className||/^go/.test(f)&&f;m=h?"."+h:f&&typeof f=="object"?f.props?"":Pn(f,""):f===!1?"":f}return a+u+(m??"")},"");function Ga(n){let s=this||{},i=n.call?n(s.p):n;return ay(i.unshift?i.raw?oy(i,[].slice.call(arguments,1),s.p):i.reduce((a,u)=>Object.assign(a,u&&u.call?u(s.p):u),{}):i,ry(s.target),s.g,s.o,s.k)}let Bh,wu,ku;Ga.bind({g:1});let an=Ga.bind({k:1});function ly(n,s,i,a){Pn.p=s,Bh=n,wu=i,ku=a}function On(n,s){let i=this||{};return function(){let a=arguments;function u(d,m){let f=Object.assign({},d),h=f.className||u.className;i.p=Object.assign({theme:wu&&wu()},f),i.o=/ *go\d+/.test(h),f.className=Ga.apply(i,a)+(h?" "+h:"");let _=n;return n[0]&&(_=f.as||n,delete f.as),ku&&_[0]&&ku(f),Bh(_,f)}return u}}var uy=n=>typeof n=="function",Pa=(n,s)=>uy(n)?n(s):n,cy=(()=>{let n=0;return()=>(++n).toString()})(),Dh=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");n=!s||s.matches}return n}})(),dy=20,zh=(n,s)=>{switch(s.type){case 0:return{...n,toasts:[s.toast,...n.toasts].slice(0,dy)};case 1:return{...n,toasts:n.toasts.map(d=>d.id===s.toast.id?{...d,...s.toast}:d)};case 2:let{toast:i}=s;return zh(n,{type:n.toasts.find(d=>d.id===i.id)?1:0,toast:i});case 3:let{toastId:a}=s;return{...n,toasts:n.toasts.map(d=>d.id===a||a===void 0?{...d,dismissed:!0,visible:!1}:d)};case 4:return s.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(d=>d.id!==s.toastId)};case 5:return{...n,pausedAt:s.time};case 6:let u=s.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(d=>({...d,pauseDuration:d.pauseDuration+u}))}}},Sa=[],tr={toasts:[],pausedAt:void 0},sr=n=>{tr=zh(tr,n),Sa.forEach(s=>{s(tr)})},fy={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},py=(n={})=>{let[s,i]=R.useState(tr),a=R.useRef(tr);R.useEffect(()=>(a.current!==tr&&i(tr),Sa.push(i),()=>{let d=Sa.indexOf(i);d>-1&&Sa.splice(d,1)}),[]);let u=s.toasts.map(d=>{var m,f,h;return{...n,...n[d.type],...d,removeDelay:d.removeDelay||((m=n[d.type])==null?void 0:m.removeDelay)||(n==null?void 0:n.removeDelay),duration:d.duration||((f=n[d.type])==null?void 0:f.duration)||(n==null?void 0:n.duration)||fy[d.type],style:{...n.style,...(h=n[d.type])==null?void 0:h.style,...d.style}}});return{...s,toasts:u}},hy=(n,s="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:s,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...i,id:(i==null?void 0:i.id)||cy()}),Xi=n=>(s,i)=>{let a=hy(s,n,i);return sr({type:2,toast:a}),a.id},st=(n,s)=>Xi("blank")(n,s);st.error=Xi("error");st.success=Xi("success");st.loading=Xi("loading");st.custom=Xi("custom");st.dismiss=n=>{sr({type:3,toastId:n})};st.remove=n=>sr({type:4,toastId:n});st.promise=(n,s,i)=>{let a=st.loading(s.loading,{...i,...i==null?void 0:i.loading});return typeof n=="function"&&(n=n()),n.then(u=>{let d=s.success?Pa(s.success,u):void 0;return d?st.success(d,{id:a,...i,...i==null?void 0:i.success}):st.dismiss(a),u}).catch(u=>{let d=s.error?Pa(s.error,u):void 0;d?st.error(d,{id:a,...i,...i==null?void 0:i.error}):st.dismiss(a)}),n};var my=(n,s)=>{sr({type:1,toast:{id:n,height:s}})},gy=()=>{sr({type:5,time:Date.now()})},Ui=new Map,_y=1e3,xy=(n,s=_y)=>{if(Ui.has(n))return;let i=setTimeout(()=>{Ui.delete(n),sr({type:4,toastId:n})},s);Ui.set(n,i)},yy=n=>{let{toasts:s,pausedAt:i}=py(n);R.useEffect(()=>{if(i)return;let d=Date.now(),m=s.map(f=>{if(f.duration===1/0)return;let h=(f.duration||0)+f.pauseDuration-(d-f.createdAt);if(h<0){f.visible&&st.dismiss(f.id);return}return setTimeout(()=>st.dismiss(f.id),h)});return()=>{m.forEach(f=>f&&clearTimeout(f))}},[s,i]);let a=R.useCallback(()=>{i&&sr({type:6,time:Date.now()})},[i]),u=R.useCallback((d,m)=>{let{reverseOrder:f=!1,gutter:h=8,defaultPosition:_}=m||{},v=s.filter(j=>(j.position||_)===(d.position||_)&&j.height),k=v.findIndex(j=>j.id===d.id),w=v.filter((j,E)=>E<k&&j.visible).length;return v.filter(j=>j.visible).slice(...f?[w+1]:[0,w]).reduce((j,E)=>j+(E.height||0)+h,0)},[s]);return R.useEffect(()=>{s.forEach(d=>{if(d.dismissed)xy(d.id,d.removeDelay);else{let m=Ui.get(d.id);m&&(clearTimeout(m),Ui.delete(d.id))}})},[s]),{toasts:s,handlers:{updateHeight:my,startPause:gy,endPause:a,calculateOffset:u}}},vy=an`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,by=an`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wy=an`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ky=On("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${by} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${wy} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Sy=an`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ny=On("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${Sy} 1s linear infinite;
`,jy=an`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ey=an`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Cy=On("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ey} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ty=On("div")`
  position: absolute;
`,Py=On("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Iy=an`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ay=On("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Iy} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ry=({toast:n})=>{let{icon:s,type:i,iconTheme:a}=n;return s!==void 0?typeof s=="string"?R.createElement(Ay,null,s):s:i==="blank"?null:R.createElement(Py,null,R.createElement(Ny,{...a}),i!=="loading"&&R.createElement(Ty,null,i==="error"?R.createElement(ky,{...a}):R.createElement(Cy,{...a})))},Oy=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ly=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,My="0%{opacity:0;} 100%{opacity:1;}",By="0%{opacity:1;} 100%{opacity:0;}",Dy=On("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,zy=On("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$y=(n,s)=>{let i=n.includes("top")?1:-1,[a,u]=Dh()?[My,By]:[Oy(i),Ly(i)];return{animation:s?`${an(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${an(u)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Fy=R.memo(({toast:n,position:s,style:i,children:a})=>{let u=n.height?$y(n.position||s||"top-center",n.visible):{opacity:0},d=R.createElement(Ry,{toast:n}),m=R.createElement(zy,{...n.ariaProps},Pa(n.message,n));return R.createElement(Dy,{className:n.className,style:{...u,...i,...n.style}},typeof a=="function"?a({icon:d,message:m}):R.createElement(R.Fragment,null,d,m))});ly(R.createElement);var Uy=({id:n,className:s,style:i,onHeightUpdate:a,children:u})=>{let d=R.useCallback(m=>{if(m){let f=()=>{let h=m.getBoundingClientRect().height;a(n,h)};f(),new MutationObserver(f).observe(m,{subtree:!0,childList:!0,characterData:!0})}},[n,a]);return R.createElement("div",{ref:d,className:s,style:i},u)},Wy=(n,s)=>{let i=n.includes("top"),a=i?{top:0}:{bottom:0},u=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Dh()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(i?1:-1)}px)`,...a,...u}},Hy=Ga`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,la=16,Gy=({reverseOrder:n,position:s="top-center",toastOptions:i,gutter:a,children:u,containerStyle:d,containerClassName:m})=>{let{toasts:f,handlers:h}=yy(i);return R.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:la,left:la,right:la,bottom:la,pointerEvents:"none",...d},className:m,onMouseEnter:h.startPause,onMouseLeave:h.endPause},f.map(_=>{let v=_.position||s,k=h.calculateOffset(_,{reverseOrder:n,gutter:a,defaultPosition:s}),w=Wy(v,k);return R.createElement(Uy,{id:_.id,key:_.id,onHeightUpdate:h.updateHeight,className:_.visible?Hy:"",style:w},_.type==="custom"?Pa(_.message,_):u?u(_):R.createElement(Fy,{toast:_,position:v}))}))},Wt=st;function on(n){return Array.isArray?Array.isArray(n):Uh(n)==="[object Array]"}function Vy(n){if(typeof n=="string")return n;let s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function Ky(n){return n==null?"":Vy(n)}function Gt(n){return typeof n=="string"}function $h(n){return typeof n=="number"}function Qy(n){return n===!0||n===!1||Xy(n)&&Uh(n)=="[object Boolean]"}function Fh(n){return typeof n=="object"}function Xy(n){return Fh(n)&&n!==null}function vt(n){return n!=null}function Ql(n){return!n.trim().length}function Uh(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Yy="Incorrect 'index' type",qy=n=>`Invalid value for key ${n}`,Jy=n=>`Pattern length exceeds max of ${n}.`,Zy=n=>`Missing ${n} property in key`,ev=n=>`Property 'weight' in key '${n}' must be a positive integer`,mp=Object.prototype.hasOwnProperty;class tv{constructor(s){this._keys=[],this._keyMap={};let i=0;s.forEach(a=>{let u=Wh(a);this._keys.push(u),this._keyMap[u.id]=u,i+=u.weight}),this._keys.forEach(a=>{a.weight/=i})}get(s){return this._keyMap[s]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Wh(n){let s=null,i=null,a=null,u=1,d=null;if(Gt(n)||on(n))a=n,s=gp(n),i=Su(n);else{if(!mp.call(n,"name"))throw new Error(Zy("name"));const m=n.name;if(a=m,mp.call(n,"weight")&&(u=n.weight,u<=0))throw new Error(ev(m));s=gp(m),i=Su(m),d=n.getFn}return{path:s,id:i,weight:u,src:a,getFn:d}}function gp(n){return on(n)?n:n.split(".")}function Su(n){return on(n)?n.join("."):n}function nv(n,s){let i=[],a=!1;const u=(d,m,f)=>{if(vt(d))if(!m[f])i.push(d);else{let h=m[f];const _=d[h];if(!vt(_))return;if(f===m.length-1&&(Gt(_)||$h(_)||Qy(_)))i.push(Ky(_));else if(on(_)){a=!0;for(let v=0,k=_.length;v<k;v+=1)u(_[v],m,f+1)}else m.length&&u(_,m,f+1)}};return u(n,Gt(s)?s.split("."):s,0),a?i:i[0]}const rv={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},iv={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,s)=>n.score===s.score?n.idx<s.idx?-1:1:n.score<s.score?-1:1},sv={location:0,threshold:.6,distance:100},av={useExtendedSearch:!1,getFn:nv,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var me={...iv,...rv,...sv,...av};const ov=/[^ ]+/g;function lv(n=1,s=3){const i=new Map,a=Math.pow(10,s);return{get(u){const d=u.match(ov).length;if(i.has(d))return i.get(d);const m=1/Math.pow(d,.5*n),f=parseFloat(Math.round(m*a)/a);return i.set(d,f),f},clear(){i.clear()}}}class Wu{constructor({getFn:s=me.getFn,fieldNormWeight:i=me.fieldNormWeight}={}){this.norm=lv(i,3),this.getFn=s,this.isCreated=!1,this.setIndexRecords()}setSources(s=[]){this.docs=s}setIndexRecords(s=[]){this.records=s}setKeys(s=[]){this.keys=s,this._keysMap={},s.forEach((i,a)=>{this._keysMap[i.id]=a})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Gt(this.docs[0])?this.docs.forEach((s,i)=>{this._addString(s,i)}):this.docs.forEach((s,i)=>{this._addObject(s,i)}),this.norm.clear())}add(s){const i=this.size();Gt(s)?this._addString(s,i):this._addObject(s,i)}removeAt(s){this.records.splice(s,1);for(let i=s,a=this.size();i<a;i+=1)this.records[i].i-=1}getValueForItemAtKeyId(s,i){return s[this._keysMap[i]]}size(){return this.records.length}_addString(s,i){if(!vt(s)||Ql(s))return;let a={v:s,i,n:this.norm.get(s)};this.records.push(a)}_addObject(s,i){let a={i,$:{}};this.keys.forEach((u,d)=>{let m=u.getFn?u.getFn(s):this.getFn(s,u.path);if(vt(m)){if(on(m)){let f=[];const h=[{nestedArrIndex:-1,value:m}];for(;h.length;){const{nestedArrIndex:_,value:v}=h.pop();if(vt(v))if(Gt(v)&&!Ql(v)){let k={v,i:_,n:this.norm.get(v)};f.push(k)}else on(v)&&v.forEach((k,w)=>{h.push({nestedArrIndex:w,value:k})})}a.$[d]=f}else if(Gt(m)&&!Ql(m)){let f={v:m,n:this.norm.get(m)};a.$[d]=f}}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function Hh(n,s,{getFn:i=me.getFn,fieldNormWeight:a=me.fieldNormWeight}={}){const u=new Wu({getFn:i,fieldNormWeight:a});return u.setKeys(n.map(Wh)),u.setSources(s),u.create(),u}function uv(n,{getFn:s=me.getFn,fieldNormWeight:i=me.fieldNormWeight}={}){const{keys:a,records:u}=n,d=new Wu({getFn:s,fieldNormWeight:i});return d.setKeys(a),d.setIndexRecords(u),d}function ua(n,{errors:s=0,currentLocation:i=0,expectedLocation:a=0,distance:u=me.distance,ignoreLocation:d=me.ignoreLocation}={}){const m=s/n.length;if(d)return m;const f=Math.abs(a-i);return u?m+f/u:f?1:m}function cv(n=[],s=me.minMatchCharLength){let i=[],a=-1,u=-1,d=0;for(let m=n.length;d<m;d+=1){let f=n[d];f&&a===-1?a=d:!f&&a!==-1&&(u=d-1,u-a+1>=s&&i.push([a,u]),a=-1)}return n[d-1]&&d-a>=s&&i.push([a,d-1]),i}const Zn=32;function dv(n,s,i,{location:a=me.location,distance:u=me.distance,threshold:d=me.threshold,findAllMatches:m=me.findAllMatches,minMatchCharLength:f=me.minMatchCharLength,includeMatches:h=me.includeMatches,ignoreLocation:_=me.ignoreLocation}={}){if(s.length>Zn)throw new Error(Jy(Zn));const v=s.length,k=n.length,w=Math.max(0,Math.min(a,k));let j=d,E=w;const B=f>1||h,b=B?Array(k):[];let g;for(;(g=n.indexOf(s,E))>-1;){let I=ua(s,{currentLocation:g,expectedLocation:w,distance:u,ignoreLocation:_});if(j=Math.min(I,j),E=g+v,B){let O=0;for(;O<v;)b[g+O]=1,O+=1}}E=-1;let S=[],W=1,T=v+k;const z=1<<v-1;for(let I=0;I<v;I+=1){let O=0,H=T;for(;O<H;)ua(s,{errors:I,currentLocation:w+H,expectedLocation:w,distance:u,ignoreLocation:_})<=j?O=H:T=H,H=Math.floor((T-O)/2+O);T=H;let y=Math.max(1,w-H+1),F=m?k:Math.min(w+H,k)+v,U=Array(F+2);U[F+1]=(1<<I)-1;for(let ie=F;ie>=y;ie-=1){let _e=ie-1,xe=i[n.charAt(_e)];if(B&&(b[_e]=+!!xe),U[ie]=(U[ie+1]<<1|1)&xe,I&&(U[ie]|=(S[ie+1]|S[ie])<<1|1|S[ie+1]),U[ie]&z&&(W=ua(s,{errors:I,currentLocation:_e,expectedLocation:w,distance:u,ignoreLocation:_}),W<=j)){if(j=W,E=_e,E<=w)break;y=Math.max(1,2*w-E)}}if(ua(s,{errors:I+1,currentLocation:w,expectedLocation:w,distance:u,ignoreLocation:_})>j)break;S=U}const P={isMatch:E>=0,score:Math.max(.001,W)};if(B){const I=cv(b,f);I.length?h&&(P.indices=I):P.isMatch=!1}return P}function fv(n){let s={};for(let i=0,a=n.length;i<a;i+=1){const u=n.charAt(i);s[u]=(s[u]||0)|1<<a-i-1}return s}const Ia=String.prototype.normalize?n=>n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):n=>n;class Gh{constructor(s,{location:i=me.location,threshold:a=me.threshold,distance:u=me.distance,includeMatches:d=me.includeMatches,findAllMatches:m=me.findAllMatches,minMatchCharLength:f=me.minMatchCharLength,isCaseSensitive:h=me.isCaseSensitive,ignoreDiacritics:_=me.ignoreDiacritics,ignoreLocation:v=me.ignoreLocation}={}){if(this.options={location:i,threshold:a,distance:u,includeMatches:d,findAllMatches:m,minMatchCharLength:f,isCaseSensitive:h,ignoreDiacritics:_,ignoreLocation:v},s=h?s:s.toLowerCase(),s=_?Ia(s):s,this.pattern=s,this.chunks=[],!this.pattern.length)return;const k=(j,E)=>{this.chunks.push({pattern:j,alphabet:fv(j),startIndex:E})},w=this.pattern.length;if(w>Zn){let j=0;const E=w%Zn,B=w-E;for(;j<B;)k(this.pattern.substr(j,Zn),j),j+=Zn;if(E){const b=w-Zn;k(this.pattern.substr(b),b)}}else k(this.pattern,0)}searchIn(s){const{isCaseSensitive:i,ignoreDiacritics:a,includeMatches:u}=this.options;if(s=i?s:s.toLowerCase(),s=a?Ia(s):s,this.pattern===s){let B={isMatch:!0,score:0};return u&&(B.indices=[[0,s.length-1]]),B}const{location:d,distance:m,threshold:f,findAllMatches:h,minMatchCharLength:_,ignoreLocation:v}=this.options;let k=[],w=0,j=!1;this.chunks.forEach(({pattern:B,alphabet:b,startIndex:g})=>{const{isMatch:S,score:W,indices:T}=dv(s,B,b,{location:d+g,distance:m,threshold:f,findAllMatches:h,minMatchCharLength:_,includeMatches:u,ignoreLocation:v});S&&(j=!0),w+=W,S&&T&&(k=[...k,...T])});let E={isMatch:j,score:j?w/this.chunks.length:1};return j&&u&&(E.indices=k),E}}class Ln{constructor(s){this.pattern=s}static isMultiMatch(s){return _p(s,this.multiRegex)}static isSingleMatch(s){return _p(s,this.singleRegex)}search(){}}function _p(n,s){const i=n.match(s);return i?i[1]:null}class pv extends Ln{constructor(s){super(s)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(s){const i=s===this.pattern;return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class hv extends Ln{constructor(s){super(s)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(s){const a=s.indexOf(this.pattern)===-1;return{isMatch:a,score:a?0:1,indices:[0,s.length-1]}}}class mv extends Ln{constructor(s){super(s)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(s){const i=s.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class gv extends Ln{constructor(s){super(s)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(s){const i=!s.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,s.length-1]}}}class _v extends Ln{constructor(s){super(s)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(s){const i=s.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[s.length-this.pattern.length,s.length-1]}}}class xv extends Ln{constructor(s){super(s)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(s){const i=!s.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,s.length-1]}}}class Vh extends Ln{constructor(s,{location:i=me.location,threshold:a=me.threshold,distance:u=me.distance,includeMatches:d=me.includeMatches,findAllMatches:m=me.findAllMatches,minMatchCharLength:f=me.minMatchCharLength,isCaseSensitive:h=me.isCaseSensitive,ignoreDiacritics:_=me.ignoreDiacritics,ignoreLocation:v=me.ignoreLocation}={}){super(s),this._bitapSearch=new Gh(s,{location:i,threshold:a,distance:u,includeMatches:d,findAllMatches:m,minMatchCharLength:f,isCaseSensitive:h,ignoreDiacritics:_,ignoreLocation:v})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(s){return this._bitapSearch.searchIn(s)}}class Kh extends Ln{constructor(s){super(s)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(s){let i=0,a;const u=[],d=this.pattern.length;for(;(a=s.indexOf(this.pattern,i))>-1;)i=a+d,u.push([a,i-1]);const m=!!u.length;return{isMatch:m,score:m?0:1,indices:u}}}const Nu=[pv,Kh,mv,gv,xv,_v,hv,Vh],xp=Nu.length,yv=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,vv="|";function bv(n,s={}){return n.split(vv).map(i=>{let a=i.trim().split(yv).filter(d=>d&&!!d.trim()),u=[];for(let d=0,m=a.length;d<m;d+=1){const f=a[d];let h=!1,_=-1;for(;!h&&++_<xp;){const v=Nu[_];let k=v.isMultiMatch(f);k&&(u.push(new v(k,s)),h=!0)}if(!h)for(_=-1;++_<xp;){const v=Nu[_];let k=v.isSingleMatch(f);if(k){u.push(new v(k,s));break}}}return u})}const wv=new Set([Vh.type,Kh.type]);class kv{constructor(s,{isCaseSensitive:i=me.isCaseSensitive,ignoreDiacritics:a=me.ignoreDiacritics,includeMatches:u=me.includeMatches,minMatchCharLength:d=me.minMatchCharLength,ignoreLocation:m=me.ignoreLocation,findAllMatches:f=me.findAllMatches,location:h=me.location,threshold:_=me.threshold,distance:v=me.distance}={}){this.query=null,this.options={isCaseSensitive:i,ignoreDiacritics:a,includeMatches:u,minMatchCharLength:d,findAllMatches:f,ignoreLocation:m,location:h,threshold:_,distance:v},s=i?s:s.toLowerCase(),s=a?Ia(s):s,this.pattern=s,this.query=bv(this.pattern,this.options)}static condition(s,i){return i.useExtendedSearch}searchIn(s){const i=this.query;if(!i)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:u,ignoreDiacritics:d}=this.options;s=u?s:s.toLowerCase(),s=d?Ia(s):s;let m=0,f=[],h=0;for(let _=0,v=i.length;_<v;_+=1){const k=i[_];f.length=0,m=0;for(let w=0,j=k.length;w<j;w+=1){const E=k[w],{isMatch:B,indices:b,score:g}=E.search(s);if(B){if(m+=1,h+=g,a){const S=E.constructor.type;wv.has(S)?f=[...f,...b]:f.push(b)}}else{h=0,m=0,f.length=0;break}}if(m){let w={isMatch:!0,score:h/m};return a&&(w.indices=f),w}}return{isMatch:!1,score:1}}}const ju=[];function Sv(...n){ju.push(...n)}function Eu(n,s){for(let i=0,a=ju.length;i<a;i+=1){let u=ju[i];if(u.condition(n,s))return new u(n,s)}return new Gh(n,s)}const Aa={AND:"$and",OR:"$or"},Cu={PATH:"$path",PATTERN:"$val"},Tu=n=>!!(n[Aa.AND]||n[Aa.OR]),Nv=n=>!!n[Cu.PATH],jv=n=>!on(n)&&Fh(n)&&!Tu(n),yp=n=>({[Aa.AND]:Object.keys(n).map(s=>({[s]:n[s]}))});function Qh(n,s,{auto:i=!0}={}){const a=u=>{let d=Object.keys(u);const m=Nv(u);if(!m&&d.length>1&&!Tu(u))return a(yp(u));if(jv(u)){const h=m?u[Cu.PATH]:d[0],_=m?u[Cu.PATTERN]:u[h];if(!Gt(_))throw new Error(qy(h));const v={keyId:Su(h),pattern:_};return i&&(v.searcher=Eu(_,s)),v}let f={children:[],operator:d[0]};return d.forEach(h=>{const _=u[h];on(_)&&_.forEach(v=>{f.children.push(a(v))})}),f};return Tu(n)||(n=yp(n)),a(n)}function Ev(n,{ignoreFieldNorm:s=me.ignoreFieldNorm}){n.forEach(i=>{let a=1;i.matches.forEach(({key:u,norm:d,score:m})=>{const f=u?u.weight:null;a*=Math.pow(m===0&&f?Number.EPSILON:m,(f||1)*(s?1:d))}),i.score=a})}function Cv(n,s){const i=n.matches;s.matches=[],vt(i)&&i.forEach(a=>{if(!vt(a.indices)||!a.indices.length)return;const{indices:u,value:d}=a;let m={indices:u,value:d};a.key&&(m.key=a.key.src),a.idx>-1&&(m.refIndex=a.idx),s.matches.push(m)})}function Tv(n,s){s.score=n.score}function Pv(n,s,{includeMatches:i=me.includeMatches,includeScore:a=me.includeScore}={}){const u=[];return i&&u.push(Cv),a&&u.push(Tv),n.map(d=>{const{idx:m}=d,f={item:s[m],refIndex:m};return u.length&&u.forEach(h=>{h(d,f)}),f})}class Gr{constructor(s,i={},a){this.options={...me,...i},this.options.useExtendedSearch,this._keyStore=new tv(this.options.keys),this.setCollection(s,a)}setCollection(s,i){if(this._docs=s,i&&!(i instanceof Wu))throw new Error(Yy);this._myIndex=i||Hh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(s){vt(s)&&(this._docs.push(s),this._myIndex.add(s))}remove(s=()=>!1){const i=[];for(let a=0,u=this._docs.length;a<u;a+=1){const d=this._docs[a];s(d,a)&&(this.removeAt(a),a-=1,u-=1,i.push(d))}return i}removeAt(s){this._docs.splice(s,1),this._myIndex.removeAt(s)}getIndex(){return this._myIndex}search(s,{limit:i=-1}={}){const{includeMatches:a,includeScore:u,shouldSort:d,sortFn:m,ignoreFieldNorm:f}=this.options;let h=Gt(s)?Gt(this._docs[0])?this._searchStringList(s):this._searchObjectList(s):this._searchLogical(s);return Ev(h,{ignoreFieldNorm:f}),d&&h.sort(m),$h(i)&&i>-1&&(h=h.slice(0,i)),Pv(h,this._docs,{includeMatches:a,includeScore:u})}_searchStringList(s){const i=Eu(s,this.options),{records:a}=this._myIndex,u=[];return a.forEach(({v:d,i:m,n:f})=>{if(!vt(d))return;const{isMatch:h,score:_,indices:v}=i.searchIn(d);h&&u.push({item:d,idx:m,matches:[{score:_,value:d,norm:f,indices:v}]})}),u}_searchLogical(s){const i=Qh(s,this.options),a=(f,h,_)=>{if(!f.children){const{keyId:k,searcher:w}=f,j=this._findMatches({key:this._keyStore.get(k),value:this._myIndex.getValueForItemAtKeyId(h,k),searcher:w});return j&&j.length?[{idx:_,item:h,matches:j}]:[]}const v=[];for(let k=0,w=f.children.length;k<w;k+=1){const j=f.children[k],E=a(j,h,_);if(E.length)v.push(...E);else if(f.operator===Aa.AND)return[]}return v},u=this._myIndex.records,d={},m=[];return u.forEach(({$:f,i:h})=>{if(vt(f)){let _=a(i,f,h);_.length&&(d[h]||(d[h]={idx:h,item:f,matches:[]},m.push(d[h])),_.forEach(({matches:v})=>{d[h].matches.push(...v)}))}}),m}_searchObjectList(s){const i=Eu(s,this.options),{keys:a,records:u}=this._myIndex,d=[];return u.forEach(({$:m,i:f})=>{if(!vt(m))return;let h=[];a.forEach((_,v)=>{h.push(...this._findMatches({key:_,value:m[v],searcher:i}))}),h.length&&d.push({idx:f,item:m,matches:h})}),d}_findMatches({key:s,value:i,searcher:a}){if(!vt(i))return[];let u=[];if(on(i))i.forEach(({v:d,i:m,n:f})=>{if(!vt(d))return;const{isMatch:h,score:_,indices:v}=a.searchIn(d);h&&u.push({score:_,key:s,value:d,idx:m,norm:f,indices:v})});else{const{v:d,n:m}=i,{isMatch:f,score:h,indices:_}=a.searchIn(d);f&&u.push({score:h,key:s,value:d,norm:m,indices:_})}return u}}Gr.version="7.1.0";Gr.createIndex=Hh;Gr.parseIndex=uv;Gr.config=me;Gr.parseQuery=Qh;Sv(kv);const pt=({label:n,placeholder:s,value:i,onChange:a,suggestions:u,isPara:d=!1,isTextArea:m=!1,isMultiSuggestion:f=!0})=>{const[h,_]=R.useState(i||""),[v,k]=R.useState([]),[w,j]=R.useState(!1),[E,B]=R.useState(0),b=new Gr(u,{threshold:.3});R.useEffect(()=>{_(i||"")},[i]);const g=z=>{const P=z.target.value;_(P),a(P);const I=f?P.split(/[,\s]+/).pop():P;if(I.trim()===""){k([]),j(!1);return}const O=b.search(I).map(H=>H.item);k(O),B(0),j(!0)},S=z=>{T(z)},W=z=>{w&&(z.key==="ArrowDown"?(z.preventDefault(),B(P=>P+1<v.length?P+1:0)):z.key==="ArrowUp"?(z.preventDefault(),B(P=>P-1>=0?P-1:v.length-1)):z.key==="Enter"&&(z.preventDefault(),v.length>0&&T(v[E])))},T=z=>{let P=z;if(f){const I=h.trim().split(/[,\s]+/);I[I.length-1]=z,P=d?I.join(" ")+" ":I.join(", ")+", "}_(P),a(P),j(!1)};return l.jsxs("div",{className:"relative space-y-2",children:[n&&l.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:n}),m?l.jsx("textarea",{placeholder:s,className:"w-full h-56 sm:h-48 md:h-44 lg:h-[120px] px-3 py-2 border rounded resize-none peer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:h,onChange:g,onKeyDown:W,onBlur:()=>j(!1),onFocus:()=>h&&k(b.search(f?h.split(/[,\s]+/).pop():h).map(z=>z.item))}):l.jsx("input",{type:"text",placeholder:s,className:"w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:h,onChange:g,onKeyDown:W,onBlur:z=>{j(!1)},onFocus:()=>h&&k(b.search(f?h.split(/[,\s]+/).pop():h).map(z=>z.item))}),w&&v.length>0&&l.jsx("ul",{className:"absolute z-10 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg",children:v.map((z,P)=>l.jsx("li",{className:`px-3 py-2 cursor-pointer text-sm ${P===E?"bg-blue-500 text-white":"hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"}`,onMouseDown:()=>S(z),children:z},P))})]})},vp=n=>n.trim(),Iv=Rn.div`
@media print {
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    line-height: 1.25;
    padding: 0;
    background-color: #f1f1f1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1280px;
  }
  @page {
   size: 950px 1300px; 
   margin: 0;
  }
  .resume {
    margin-top: 10px;
    width: 900px; 
    border-radius: 15px;
    border: 0px solid #ddd !important;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}


body {
  font-family: Arial, sans-serif;
  margin: 0;
  line-height: 1.25;
  padding: 0;
  background-color: #d6cece;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1280px;
}

.resume {
  margin-top: 10px;
  width: 900px; 
  background: #f1f1f1;
  border-radius: 15px;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  border-top: 2px solid #353333;
  padding: 80px 0px 80px 0px; 
  margin: 0px 40px 0px 40px; 
  background-repeat: no-repeat;
  background-size: 250px;
  background-position: center;
  margin-top: 10px;
}

.header h1 {
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  color: #4e4c4c;
}

.header h2 {
  margin: 5px 0 0;
  font-size: 18px;
  font-weight: bold;
  color: #555;
}

.SUsection {
  padding-top: 10px;
  padding-left: 8px;
}

.section,.SUsection {
  margin-bottom: 15px;
  border-bottom: 2px solid #000000;
}

.content .left {
  margin-top: 20px; 
}

.rotate-90 {
  transform: rotate(90deg); 
}

.Contact div {
  margin-bottom: 4px; 
  margin-left: 8px;
}

.Contact {
  width: 33%;
}

.Contact,.Usection {
  padding-top: 20px;
}

.NoneDecorationBlack a {
  text-decoration: none;
  color: #000000;
}

.colorBlue{
  color: #277ca3;
}

.TextLight{     /* Used for subheadings of the content & contact fasfonts to make it more classic */
  color: #333333;
}

.NoneDecoration a {         /* Used in More Certificates to remove text decoration but add blue color to make it Easy to understand */
  text-decoration: none;
  color: #277ca3;
}

.subcont,.SkillSubCon {
  display: flex;
  justify-content: space-between;
}

.section-title {
  font-size: 18px;
  color: #5e6163;
  padding: 0 10px 0 10px; 
  margin-bottom: 10px;
}

.section{
padding-left: 8px;
}

.LDsection{
padding-left: 8px;
}

.content {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #353333;
  margin: 0 20px 0 20px; 
}

.upperContent {
  display: flex;
  justify-content: center;
  margin: 0 20px 0 20px; 
  border-top: 2px solid #353333;
  border-bottom: 2px solid #353333;
}

.upperContent .Usection {
  border-left: 4px solid #5e6163;
  width: 67%;
}

.content .left {
  width: 33%;
  height: 100%;
  border-radius: 2px;
}

.section-title,.content .right .item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content .right {
  width: 67%;
  height: 100%;
  border-left: 4px solid rgb(109, 106, 106);
}

.Litem {
  margin-bottom: 10px;
  padding-right: 20px;
}

.Ritem {
  margin-bottom: 10px;
  padding-left: 10px;
}

.item-title {
  font-weight: bold;
}

.fontLight{
  /* font-weight: bold; */
  color: #5f5f5f;
}

ul {
  list-style: circle;
  padding-left: 20px;
  margin: 5px 0;
}

ul li {
  margin-bottom: 5px;
}`,Av=n=>{try{return new URL(n),!0}catch{return!1}},Pu=({jsonData:n})=>{const s=n.education.map((T,z)=>l.jsxs("div",{children:[l.jsx("div",{className:"TextLight",children:l.jsxs("b",{children:[T.graduationYear,l.jsx("br",{}),T.institutionName]})}),T.degreeName," ",l.jsx("br",{}),"GPA: ",T.currentSGPA,l.jsx("br",{})," ",l.jsx("br",{})]},`Education-${z}`)),i=n.skills.hardSkills.split(",").map(T=>T.trim()).filter(T=>T!==""),a=Math.floor(i.length/4);let u=a,d=a,m=a,f=a;i.length%4===1?u+=1:i.length%4===2?(u+=1,d+=1):i.length%4===2&&(u+=1,d+=1,m+=1);const h=i.slice(0,u).map((T,z)=>l.jsx("li",{children:T},`skill1-${z}`)),_=i.slice(u,u+d).map((T,z)=>l.jsx("li",{children:T},`skill2-${z}`)),v=i.slice(u+d,u+d+m).map((T,z)=>l.jsx("li",{children:T},`skill3-${z}`)),k=i.slice(u+d+m,u+d+m+f).map((T,z)=>l.jsx("li",{children:T},`skill3-${z}`)),w=n.skills.softSkills.split(",").map(T=>T.trim()).filter(T=>T!=="").map((T,z)=>l.jsx("li",{children:vp(T)},`soft-${z}`)),j=n.contactInfo.Languages.split(",").map(T=>T.trim()).filter(T=>T!=="").map((T,z)=>l.jsxs("li",{children:[vp(T),": Fluent"]},`lang-${z}`)),E=n.projects.map((T,z)=>l.jsx("div",{className:"Ritem",children:l.jsxs("li",{children:[l.jsx("div",{className:"item-title TextLight",children:T.projectTitle}),l.jsx("div",{children:T.toolsTechUsed})]})},`proj-${z}`)),B=n.workExperience.map((T,z)=>l.jsxs("li",{children:[l.jsxs("div",{className:"item-title TextLight",children:[T.companyName,l.jsx("div",{children:T.WorkDuration})]}),"(",T.jobTitle,") ",l.jsx("br",{}),T.keyAchievements," ",l.jsx("br",{}),z<f-1&&l.jsx("br",{})]},`work-${z}`)),b=n.certificates.map(T=>T.certificateName),g=n.certificates.map(T=>T.providerName),S=n.certificates.map(T=>T.courseDuration),W=Array(n.certificates.length).fill("--");return l.jsx(Iv,{children:l.jsxs("div",{className:"resume",id:"capture-content",children:[l.jsxs("div",{className:"header",children:[l.jsx("h1",{children:n.contactInfo.fullName}),l.jsx("h2",{children:n.contactInfo.jobTitle})]}),l.jsxs("div",{className:"upperContent",children:[l.jsxs("div",{className:"Contact",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("b",{children:"Contact"})," ",l.jsx("i",{className:"fas fa-address-card"})]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fa fa-phone TextLight"})," ",n.contactInfo.phoneNumber]}),l.jsxs("div",{className:"Litem NoneDecorationBlack",children:[l.jsx("i",{className:"fas fa-envelope TextLight"})," ",l.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:n.contactInfo.emailAddress.split("@")[0]})]}),l.jsxs("div",{className:"Litem NoneDecorationBlack",children:[l.jsx("i",{className:"fab fa-linkedin TextLight"})," ",l.jsx("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.linkedin})]}),l.jsxs("div",{className:"Litem NoneDecorationBlack",children:[l.jsx("i",{className:"fas fa-globe TextLight"})," ",l.jsxs("a",{href:Av(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")]})]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fa fa-map-marker TextLight"})," ",n.contactInfo.Location]}),l.jsx("br",{})]}),l.jsxs("div",{className:"Usection",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Profile Summary"})}),l.jsx("div",{className:"Litem",children:l.jsx("p",{className:"Ritem",children:n.Description.UserDescription})})]})]}),l.jsxs("div",{className:"content",children:[l.jsxs("div",{className:"left",children:[l.jsxs("div",{className:"SUsection",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("b",{children:"Education "}),l.jsx("i",{className:"fas fa-graduation-cap"})]}),s]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("b",{children:"Soft Skills "}),l.jsx("i",{className:"fa fa-book"})]}),l.jsxs("ul",{children:[w,l.jsx("br",{})]})]}),l.jsxs("div",{className:"LDsection",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("b",{children:"Languages "}),l.jsx("i",{className:"fa fa-language"})]}),l.jsx("ul",{children:j})]})]}),l.jsxs("div",{className:"right",children:[l.jsxs("div",{className:"SUsection",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Projects"})}),l.jsx("ul",{children:E})]}),l.jsxs("div",{className:"section",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Work Experience"})}),l.jsx("div",{className:"Ritem",children:l.jsx("ul",{children:B})})]}),l.jsxs("div",{className:"section",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Certificates"})}),l.jsxs("div",{className:"Ritem subcont NoneDecoration",children:[l.jsxs("div",{children:[b.map((T,z)=>l.jsxs(he.Fragment,{children:[T,l.jsx("br",{})]},`cert-${z}`)),l.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),l.jsx("div",{children:W.map((T,z)=>l.jsxs(he.Fragment,{children:[T,l.jsx("br",{})]},`placeholder-${z}`))}),l.jsx("div",{children:g.map((T,z)=>l.jsxs(he.Fragment,{children:[T,l.jsx("br",{})]},`provider-${z}`))}),l.jsx("div",{className:"fontLight",children:S.map((T,z)=>l.jsxs(he.Fragment,{children:["(",T,")",l.jsx("br",{})]},`provider-${z}`))})]})]}),l.jsxs("div",{className:"skills",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Technical Skills"})}),l.jsxs("div",{className:"Ritem subcont",children:[l.jsx("ul",{children:h}),l.jsx("ul",{children:_}),l.jsx("ul",{children:v}),l.jsx("ul",{children:k})]})]})]})]})]})})},Rv=`
    @media print {
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        line-height: 1.25;
        padding: 0;
        background-color: #f1f1f1 !important;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1280px;
      }
      @page {
       size: 950px 1300px; 
       margin: 0;
      }
      .resume {
        margin-top: 10px;
        width: 900px; 
        border-radius: 15px;
        border: 0px solid #ddd !important;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    }
    
    body {
       font-family: Arial, sans-serif;
       margin: 0;
       line-height: 1.25;
       padding: 0;
       background-color: #d6cece;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 1280px;
    }
    
    .resume {
       margin-top: 10px;
       width: 900px; 
       background: #f1f1f1;
       border-radius: 15px;
       border: 1px solid #ddd;
       padding: 20px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .header {
       text-align: center;
       border-top: 2px solid #353333;
       padding: 80px 0px 80px 0px; 
       margin: 0px 40px 0px 40px; 
       background-repeat: no-repeat;
       background-size: 250px;
       background-position: center;
       margin-top: 10px;
    }
    
    .header h1 {
       margin: 0;
       font-size: 40px;
       font-weight: bold;
       color: #4e4c4c;
    }
    
    .header h2 {
       margin: 5px 0 0;
       font-size: 18px;
       font-weight: bold;
       color: #555;
    }
    
    .SUsection {
       padding-top: 10px;
       padding-left: 8px;
    }
    
    .section,.SUsection {
       margin-bottom: 15px;
       border-bottom: 2px solid #000000;
    }
    
    .content .left {
       margin-top: 20px; 
    }
    
    .rotate-90 {
       transform: rotate(90deg); 
    }
    
    .Contact div {
       margin-bottom: 4px; 
       margin-left: 8px;
    }
    
    .Contact {
       width: 33%;
    }
    
    .Contact,.Usection {
       padding-top: 20px;
    }
    
    .NoneDecorationBlack a {
       text-decoration: none;
       color: #000000;
    }
    
    .colorBlue{
       color: #277ca3;
    }
    
    .TextLight{     /* Used for subheadings of the content & contact fasfonts to make it more classic */
       color: #333333;
    }
    
    .NoneDecoration a {         /* Used in More Certificates to remove text decoration but add blue color to make it Easy to understand */
       text-decoration: none;
       color: #277ca3;
    }
    
    .subcont,.SkillSubCon {
       display: flex;
       justify-content: space-between;
    }
    
    .section-title {
       font-size: 18px;
       color: #5e6163;
       padding: 0 10px 0 10px; 
       margin-bottom: 10px;
    }
    
    .section{
     padding-left: 8px;
    }
    
    .LDsection{
     padding-left: 8px;
    }
    
    .content {
       display: flex;
       justify-content: center;
       border-bottom: 2px solid #353333;
       margin: 0 20px 0 20px; 
    }
    
    .upperContent {
       display: flex;
       justify-content: center;
       margin: 0 20px 0 20px; 
       border-top: 2px solid #353333;
       border-bottom: 2px solid #353333;
    }
    
    .upperContent .Usection {
       border-left: 4px solid #5e6163;
       width: 67%;
    }
    
    .content .left {
       width: 33%;
       height: 100%;
       border-radius: 2px;
    }
    
    .section-title,.content .right .item-title {
       display: flex;
       justify-content: space-between;
       align-items: center;
    }
    
    .content .right {
       width: 67%;
       height: 100%;
       border-left: 4px solid rgb(109, 106, 106);
    }
    
    .Litem {
       margin-bottom: 10px;
       padding-right: 20px;
    }
    
    .Ritem {
       margin-bottom: 10px;
       padding-left: 10px;
    }
    
    .item-title {
       font-weight: bold;
    }
    
    .fontLight{
       /* font-weight: bold; */
       color: #5f5f5f;
    }
    
    ul {
       list-style: circle;
       padding-left: 20px;
       margin: 5px 0;
    }
    
    ul li {
       margin-bottom: 5px;
    }`,Ov=Rn.div`
@media print {
  body {
    margin-top: 10px !important;
    font-family: Arial, sans-serif;
    background: #E5E7EB !important;
    color: #333;
    padding: 20px;
  }
  @page {
   size: 930px 1300px; 
   margin: 0;
  }
  .resume-container {
    width: 900px;
    margin: 0 auto;
    background: #E5E7EB;
    border: 0px solid #ddd !important;
    border-radius: 8px;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.05) !important;
    padding: 2rem;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.Name{
  font-family: Verdana;
  font-size: 2rem;
  font-weight: bold;
}

body {
  margin-top: 100px;
  font-family: Arial, sans-serif;
  background: #cfcfcf;
  color: #333;
  padding: 20px;
}

.resume-container {
  width: 900px;
  margin: 0 auto;
  background: #E5E7EB;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2rem;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.header h2 {
  font-size: 1.2rem;
  font-weight: normal;
  color: #666;
  margin-bottom: 0.75rem;
}

.header p {
  font-size: 0.9rem;
  color: #666;
}

.summary p {
  line-height: 1.5;
  margin: 0 20px 0 20px;
  margin-bottom: 0.5rem;
}

.skills ul {
  margin-left: 10px;
  padding-left: 0;
}

.skills li {
  margin: 0 20px 0 30px;
  margin-bottom: 0.5rem;
}

.experience-item {
  margin:0 20px 10px 0;
}

.experience-item h4 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.experience-item span {
  font-size: 0.9rem;
  color: #999;
}

.Certificats span {
  font-size: 0.9rem;
  color: #999;
}

.experience-item ul {
  list-style: disc;
  margin-left: 1.2rem;
  margin-top: 0.5rem;
}

ul{
 list-style-type: circle;
}

.experience-item li {
  margin-bottom: 0.5rem;
}

.education {
  margin-left: 10px;
}

.education-item {
  margin: 0 10px 10px 20px;
}

.education-item h4 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.education-item span {
  font-size: 0.9rem;
  color: #999;
}

.Projects-items {
  margin-bottom: 10px;
  margin-left: 20px;
}

.Projects-items h4 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.Projects-items p {
  font-size: medium;
  font-weight: lighter;
}

.Certificats {
  margin: 10px 20px;
}

.SpaceBetween {
 display: flex;
 flex-direction: row;   /* Force row direction */
 justify-content: space-between;
 font-weight: bolder;
 color: #525151;
}

.mar-30{
 margin: 0 20px 0 20px;
}

.justflex {
 display: flex;
 flex-direction: row;   /* Force row direction */
 align-items: center;
 font-weight: bolder;
 color: #525151;
}

.fontlight{
  color: #494848;
}

.fontBold {
  font-weight: bolder;
  color: #333;
}

.NoneDecoration {
  text-decoration: none;
  color: #2d3499;
}

.Heading {
  padding: 13px 20px 10px 20px;
  color: #424141;
  border-radius: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  background-color: #c5c3c3;
}`,Xh=({jsonData:n})=>{const s=n.skills.hardSkills.split(",").map(f=>f.trim()).filter(f=>f!==""),i=Math.floor(s.length/4);let a=i,u=i,d=i,m=i;return s.length%4===1?a+=1:s.length%4===2?(a+=1,u+=1):s.length%4===3&&(a+=1,u+=1,d+=1),l.jsx(Ov,{children:l.jsxs("div",{className:"resume-container",id:"capture-content",children:[l.jsxs("div",{className:"header",children:[l.jsx("h1",{className:"Name",children:n.contactInfo.fullName}),l.jsx("h2",{className:"fontBold",style:{fontWeight:700},children:n.contactInfo.jobTitle}),l.jsxs("p",{style:{color:"#333"},children:[l.jsx("a",{href:"#",className:"NoneDecoration",children:n.contactInfo.Location})," | ",l.jsx("a",{className:"NoneDecoration",href:`mailto:${n.contactInfo.emailAddress}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.phoneNumber})," | ",l.jsx("a",{className:"NoneDecoration",href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.linkedin})]})]}),l.jsx("h3",{className:"Heading",children:"Summary"}),l.jsxs("div",{className:"summary",children:[l.jsx("p",{children:n.Description.UserDescription}),l.jsx("br",{})]}),l.jsx("h3",{className:"Heading",children:"Education"}),l.jsxs("div",{className:"education",children:[n.education.map((f,h)=>l.jsx("div",{className:"education-item",children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsxs("h4",{className:"SpaceBetween",children:[f.degreeName," ",l.jsx("span",{children:f.graduationYear})]})}),l.jsxs("p",{children:[f.institutionName," || SGPA: ",f.currentSGPA]})]})},h)),l.jsx("br",{})]}),l.jsx("h3",{className:"Heading",children:"Work Experience"}),l.jsxs("div",{className:"experience",children:[n.workExperience.map((f,h)=>l.jsx("div",{className:"experience-item",children:l.jsxs("ul",{children:[l.jsxs("li",{className:"SpaceBetween",children:[f.companyName," | ",f.jobTitle," ",l.jsx("span",{children:f.WorkDuration})]}),f.keyAchievements]})},h)),l.jsx("br",{})]}),l.jsx("h3",{className:"Heading",children:"Projects"}),l.jsxs("div",{className:"education",children:[n.projects.map((f,h)=>l.jsx("div",{className:"Projects-items",children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("h4",{className:"fontlight",children:f.projectTitle})}),l.jsx("p",{children:f.toolsTechUsed})]})},h)),l.jsx("br",{})]}),l.jsx("h3",{className:"Heading",children:"Certifications"}),l.jsxs("div",{className:"justflex Certificats",children:[l.jsxs("div",{className:"mar-30",children:[n.certificates.map((f,h)=>l.jsxs(he.Fragment,{children:[f.certificateName,h<n.certificates.length-1&&l.jsx("br",{})]},h)),l.jsx("br",{}),l.jsx("a",{href:"#",className:"NoneDecoration",target:"_blank",rel:"noreferrer",children:"More Certificates"}),l.jsx("br",{}),l.jsx("br",{})]}),l.jsxs("div",{className:"mar-30",children:[n.certificates.map((f,h)=>l.jsxs(he.Fragment,{children:["--",h<n.certificates.length-1&&l.jsx("br",{})]},h)),l.jsx("br",{}),l.jsx("br",{})," ",l.jsx("br",{})]}),l.jsxs("div",{className:"mar-30",children:[n.certificates.map((f,h)=>l.jsxs(he.Fragment,{children:[f.providerName,h<n.certificates.length-1&&l.jsx("br",{})]},h)),l.jsx("br",{}),l.jsx("br",{}),l.jsx("br",{})]}),l.jsxs("div",{className:"mar-30",children:[n.certificates.map((f,h)=>l.jsxs(he.Fragment,{children:[l.jsx("span",{children:`(${f.courseDuration})`}),h<n.certificates.length-1&&l.jsx("br",{})]},h)),l.jsx("br",{}),l.jsx("br",{}),l.jsx("br",{})]})]}),l.jsx("h3",{className:"Heading",children:"Technical Skills"}),l.jsxs("div",{className:"skills SpaceBetween",children:[l.jsx("ul",{children:s.slice(0,a).map((f,h)=>l.jsx(he.Fragment,{children:l.jsx("li",{children:f})},h))}),l.jsx("ul",{children:s.slice(a,a+u).map((f,h)=>l.jsx(he.Fragment,{children:l.jsx("li",{children:f})},h+a))}),l.jsx("ul",{children:s.slice(a+u,a+u+d).map((f,h)=>l.jsx(he.Fragment,{children:l.jsx("li",{children:f})},h+a+u))}),l.jsx("ul",{children:s.slice(a+u+d,a+u+d+m).map((f,h)=>l.jsx(he.Fragment,{children:l.jsx("li",{children:f})},h+a+u+m))})]})]})})},Lv=`
      @media print {
        body {
          margin-top: 10px !important;
          font-family: Arial, sans-serif;
          background: #E5E7EB !important;
          color: #333;
          padding: 20px;
        }
        @page {
         size: 930px 1300px; 
         margin: 0;
        }
        .resume-container {
          width: 900px;
          margin: 0 auto;
          background: #E5E7EB;
          border: 0px solid #ddd !important;
          border-radius: 8px;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0.05) !important;
          padding: 2rem;
        }
      }
      
      * {
         box-sizing: border-box;
         margin: 0;
         padding: 0;
       }
      
       .Name{
         font-family: Verdana;
         font-size: 2rem;
         font-weight: bold;
       }
      
       body {
         margin-top: 100px;
         font-family: Arial, sans-serif;
         background: #cfcfcf;
         color: #333;
         padding: 20px;
       }
      
       .resume-container {
         width: 900px;
         margin: 0 auto;
         background: #E5E7EB;
         border: 2px solid #ddd;
         border-radius: 8px;
         box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
         padding: 2rem;
       }
      
       .header {
         margin-bottom: 2rem;
       }
      
       .header h1 {
         font-size: 2rem;
         letter-spacing: 1px;
         margin-bottom: 0.25rem;
         text-transform: uppercase;
       }
      
       .header h2 {
         font-size: 1.2rem;
         font-weight: normal;
         color: #666;
         margin-bottom: 0.75rem;
       }
      
       .header p {
         font-size: 0.9rem;
         color: #666;
       }
      
       .summary p {
         line-height: 1.5;
         margin: 0 20px 0 20px;
         margin-bottom: 0.5rem;
       }
      
       .skills ul {
         margin-left: 10px;
         padding-left: 0;
       }
      
       .skills li {
         margin: 0 20px 0 30px;
         margin-bottom: 0.5rem;
       }
      
       .experience-item {
         margin:0 20px 10px 0;
       }
      
       .experience-item h4 {
         font-size: 1rem;
         font-weight: bold;
         margin-bottom: 0.25rem;
       }
      
       .experience-item span {
         font-size: 0.9rem;
         color: #999;
       }
      
       .Certificats span {
         font-size: 0.9rem;
         color: #999;
       }
      
       .experience-item ul {
         list-style: disc;
         margin-left: 1.2rem;
         margin-top: 0.5rem;
       }
      
       ul{
        list-style-type: circle;
       }
      
       .experience-item li {
         margin-bottom: 0.5rem;
       }
      
       .education {
         margin-left: 10px;
       }
      
       .education-item {
         margin: 0 10px 10px 20px;
       }
      
       .education-item h4 {
         font-size: 1rem;
         font-weight: bold;
         margin-bottom: 0.25rem;
       }
      
       .education-item span {
         font-size: 0.9rem;
         color: #999;
       }
      
       .Projects-items {
         margin-bottom: 10px;
         margin-left: 20px;
       }
      
       .Projects-items h4 {
         font-size: 1rem;
         font-weight: bold;
         margin-bottom: 0.25rem;
       }
      
       .Projects-items p {
         font-size: medium;
         font-weight: lighter;
       }
      
       .Certificats {
         margin: 10px 20px;
       }
      
       .SpaceBetween {
        display: flex;
        flex-direction: row;   /* Force row direction */
        justify-content: space-between;
        font-weight: bolder;
        color: #525151;
       }
      
      .mar-30{
        margin: 0 20px 0 20px;
      }
      
       .justflex {
        display: flex;
        flex-direction: row;   /* Force row direction */
        align-items: center;
        font-weight: bolder;
        color: #525151;
       }
      
       .fontlight{
         color: #494848;
       }
      
       .fontBold {
         font-weight: bolder;
         color: #333;
       }
      
       .NoneDecoration {
         text-decoration: none;
         color: #2d3499;
       }
      
       .Heading {
         padding: 13px 20px 10px 20px;
         color: #424141;
         border-radius: 20px;
         margin-bottom: 5px;
         font-weight: bold;
         background-color: #c5c3c3;
       }`,Mv=Rn.div`
body {
  font-family: Arial, sans-serif;
  margin: 100px 0 20px 0;
  padding: 0;
  background-color: #d6cece;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1231px; /* (W/H) Ratio should be 0.7069 */
}

.resume {
  width: 900px;
  background: #ffffff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  margin-top: 0; 
}

.NoDecorationBlue a{
  text-decoration: None;
  color: #0c6291;
}

.TextLight{
  color: #424242;;
  font-weight: 500;
}

.IconLight{
  color: #4e4e4e;
}

.header {
  padding: 20px;
  text-align: center;
  width: 900px;
  background: #b6dbf0;
  padding: 90px 0 90px 0; 
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 0; /* Remove bottom margin */
}

.header h1 {
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  color: #333;
}

.header h2 {
  margin: 5px 0 0;
  font-size: 18px;
  font-weight: bold;
  color: #555;
}

.section, .SUsection {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  color: #0073b1;
  margin-bottom: 10px;
  border-bottom: 1px solid #96a75a;
  padding-bottom: 5px;
}

.content {
  display: flex;
  justify-content: center;
}

.mbb-3 {
  margin-bottom: 0.75rem /* 12px */;
}

.mb-2 {
  margin-bottom: 0.5rem /* 8px */;
}

.content .left {
  width: 35%;
  padding-right: 10px;
  border-right: 4px solid rgb(109, 106, 106);
  border-radius: 2px;
}

.content .right {
  width: 60%;
  margin-left: 10px;
}

.content .left .section-title,.content .right .item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content .right .item-title {
  font-weight: bold;
}

.Contact div {
  margin-bottom: 5px;
}

.content .Contact div a {
  text-decoration: none;
  color: #000000;
}

.subcont,.SkillSubCon {
  display: flex;
  justify-content: space-between;
}

.item {
  margin-bottom: 10px;
}

ul {
  list-style: square;
  padding-left: 20px;
  margin: 5px 0;
}

ul li {
  margin-bottom: 5px;
}

.rotate-90 { 
  transform: rotate(90deg); /* Rotates the icon 90 degrees */ 
}`,Yh=({jsonData:n})=>{const s=h=>h.trim(),i=n.skills.hardSkills.split(",").map(h=>h.trim()).filter(h=>h!=="");console.log(i,"from T3.jsx");const a=Math.floor(i.length/4);let u=a,d=a,m=a,f=a;return i.length%4===1?u+=1:i.length%4===2?(u+=1,d+=1):i.length%4===3&&(u+=1,d+=1,m+=1),l.jsx(Mv,{children:l.jsxs("div",{id:"capture-content",children:[l.jsxs("div",{className:"header",children:[l.jsx("h1",{children:n.contactInfo.fullName}),l.jsx("h2",{children:n.contactInfo.jobTitle})]}),l.jsx("div",{className:"resume",children:l.jsxs("div",{className:"content",children:[l.jsxs("div",{className:"left",children:[l.jsxs("div",{className:"Contact",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("b",{children:"Contact"})," ",l.jsx("i",{className:"fas fa-address-card"})]}),l.jsx("br",{}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fa fa-phone IconLight"})," ",n.contactInfo.phoneNumber," "]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fas fa-envelope IconLight"}),l.jsxs("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:[" ",n.contactInfo.emailAddress.split("@")[0]," "]})]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fab fa-linkedin IconLight"}),l.jsxs("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.linkedin]})]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fas fa-globe IconLight"}),l.jsxs("a",{href:Bv(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")," "]})]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fa fa-map-marker IconLight"})," ",n.contactInfo.Location]})," ",l.jsx("br",{})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("b",{children:"Education "}),l.jsx("i",{className:"fas fa-graduation-cap"})]}),l.jsx("br",{}),l.jsx("div",{className:"Litem",children:n.education.map((h,_)=>l.jsx(he.Fragment,{children:l.jsxs("div",{className:"mbb-3",children:[l.jsx("div",{className:"SubSec-title TextLight",children:l.jsxs("b",{children:[h.graduationYear,l.jsx("br",{}),h.institutionName]})}),h.degreeName," ",l.jsx("br",{}),"GPA: ",h.currentSGPA,_<n.education.length-1&&l.jsx("br",{})]})},_))})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("b",{children:"Soft Skills "}),l.jsx("i",{className:"fa fa-book"})]}),l.jsx("br",{}),l.jsx("ul",{children:n.skills.softSkills.split(",").map(h=>h.trim()).filter(h=>h!=="").map((h,_)=>l.jsx("li",{children:s(h)},_))})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("b",{children:"Languages "}),l.jsx("i",{className:"fa fa-language"})]}),l.jsx("br",{}),l.jsx("ul",{children:n.contactInfo.Languages.split(",").map(h=>h.trim()).filter(h=>h!=="").map((h,_)=>l.jsxs("li",{children:[s(h),": Fluent"]},_))})]})]}),l.jsxs("div",{className:"right",children:[l.jsxs("div",{className:"section",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Profile Summary"})}),l.jsx("p",{children:n.Description.UserDescription})]}),l.jsxs("div",{className:"SUsection",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Projects"})}),l.jsx("ul",{children:n.projects.map((h,_)=>l.jsx("div",{className:"Ritem",children:l.jsxs("li",{children:[l.jsxs("div",{className:"item-title TextLight",children:[h.projectTitle," "]}),l.jsxs("div",{children:[" ",h.toolsTechUsed," "]})]})},_))})]}),l.jsxs("div",{className:"section",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Work Experience"})}),l.jsx("div",{className:"Ritem",children:l.jsx("ul",{children:n.workExperience.map((h,_)=>l.jsxs("li",{className:"mbb-2",children:[l.jsxs("div",{className:"item-title TextLight",children:[h.companyName,l.jsx("div",{children:h.WorkDuration})," "]}),h.jobTitle,l.jsx("br",{}),h.keyAchievements,_<n.workExperience.length-1&&l.jsx("br",{})]},_))})})]}),l.jsxs("div",{className:"section",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Certificates"})}),l.jsxs("div",{className:"Ritem subcont NoDecorationBlue",children:[l.jsxs("div",{children:[n.certificates.map((h,_)=>l.jsxs(he.Fragment,{children:[h.certificateName,_<n.certificates.length-1&&l.jsx("br",{})]},_)),l.jsx("br",{}),l.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),l.jsxs("div",{children:[n.certificates.map((h,_)=>l.jsxs(he.Fragment,{children:["--",_<n.certificates.length-1&&l.jsx("br",{})]},_)),l.jsx("br",{})]}),l.jsxs("div",{children:[n.certificates.map((h,_)=>l.jsxs(he.Fragment,{children:[h.providerName,_<n.certificates.length-1&&l.jsx("br",{})]},_)),l.jsx("br",{})]}),l.jsxs("div",{className:"TextLight",children:[n.certificates.map((h,_)=>l.jsxs(he.Fragment,{children:["(",h.courseDuration,")",_<n.certificates.length-1&&l.jsx("br",{})]},_)),l.jsx("br",{})]})]})]}),l.jsxs("div",{className:"skills",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Technical Skills"})}),l.jsxs("div",{className:"Ritem subcont",children:[l.jsx("ul",{children:i.slice(0,u).map((h,_)=>l.jsx("li",{children:h},_))}),l.jsx("ul",{children:i.slice(u,u+d).map((h,_)=>l.jsx("li",{children:h},_+u))}),l.jsx("ul",{children:i.slice(u+d,u+d+m).map((h,_)=>l.jsx("li",{children:h},_+u+d))}),l.jsx("ul",{children:i.slice(u+d+m,u+d+m+f).map((h,_)=>l.jsx("li",{children:h},_+u+d+f))})]})]})]})]})})]})})},Bv=n=>{try{return new URL(n),!0}catch{return!1}},Dv=`
@media print {
  body {
    font-family: Arial, sans-serif;
    margin: 0 !important;
    padding: 0;
    background-color: #ffffff !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1231px; /* (W/H) Ratio should be 0.7069 */
  }
  @page {
   size: 930px 1200px; 
   margin: 0;
  }
  .resume {
    width: 900px;
    background: #ffffff;
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 0; 
  }
  .header {
    text-align: center;
    width: auto !important;
    background: #b6dbf0;
    padding: 115px 20px 115px 20px; 
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
    margin-bottom: 0; 
  }
}

body {
   font-family: Arial, sans-serif;
   margin: 100px 0 20px 0;
   padding: 0;
   background-color: #d6cece;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 1231px; /* (W/H) Ratio should be 0.7069 */
}

.resume {
   width: 900px;
   background: #ffffff;
   border-bottom-left-radius: 20px;
   border-bottom-right-radius: 20px;
   padding: 20px;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
   margin-top: 0; /* Ensure no space between header and resume */
}

.NoDecorationBlue a{
   text-decoration: None;
   color: #0c6291;
}

.TextLight{
   color: #424242;;
   font-weight: 500;
}

.IconLight{
   color: #4e4e4e;
}

.header {
   text-align: center;
   width: 900px;
   background: #b6dbf0;
   padding: 115px 20px 115px 20px; 
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   margin-bottom: 0; /* Remove bottom margin */
}

.header h1 {
   margin: 0;
   font-size: 40px;
   font-weight: bold;
   color: #333;
}

.header h2 {
   margin: 5px 0 0;
   font-size: 18px;
   font-weight: bold;
   color: #555;
}

.section, .SUsection {
   margin-bottom: 20px;
}

.section-title {
   font-size: 18px;
   color: #0073b1;
   margin-bottom: 10px;
   border-bottom: 1px solid #96a75a;
   padding-bottom: 5px;
}

.content {
   display: flex;
   justify-content: center;
}

.mbb-3 {
   margin-bottom: 0.75rem /* 12px */;
}

.mb-2 {
   margin-bottom: 0.5rem /* 8px */;
}

.content .left {
   width: 35%;
   padding-right: 10px;
   border-right: 4px solid rgb(109, 106, 106);
   border-radius: 2px;
}

.content .right {
   width: 60%;
   margin-left: 10px;
}

.content .left .section-title,.content .right .item-title {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.content .right .item-title {
   font-weight: bold;
}

.Contact div {
   margin-bottom: 5px;
}

.content .Contact div a {
   text-decoration: none;
   color: #000000;
}

.subcont,.SkillSubCon {
   display: flex;
   justify-content: space-between;
}

.item {
   margin-bottom: 10px;
}

ul {
   list-style: square;
   padding-left: 20px;
   margin: 5px 0;
}

ul li {
   margin-bottom: 5px;
}

.rotate-90 { 
   transform: rotate(90deg); /* Rotates the icon 90 degrees */ 
}`,zv=Rn.div`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #d6cece;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1380px; /* (W/H) Ratio should be 0.7069 */
}

.resume {
  width: 900px; /* (W/H) Ratio should be 0.7069 */
  /* height: 1225px; */
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin-top: 100px;
  padding: 0 30px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.Underline{
  width: 75px;
  border:2px solid black;
  margin-top: 10px;
  border-radius: 20px;
}

.NoneDecoration a{
  text-decoration: none;
  color:#0363b1;
}

.header {
  display: flex; 
  align-items: center;
}

.header .left {
  width: 36.6%;
  display: flex;
  justify-content: center;
  padding: 10px 20px 10px 20px;
  background-color: #0363b1;
  border-top-left-radius: 15px;
  border-right: 4px solid #0363b1;
}

.left img{
  width: 200px;
  height: 200px;
  background-color: #4c4fda;
  border-radius: 50%;
  object-fit: cover;
}

.header .right {
  width: 65%;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 40px;
}

.header .right .head {
  padding-left: 40px;
}

.textGray{
  color: #4e4e53;
}

.right h1 {
  font-size: 40px;
  margin-bottom: 5px;
}

.right h2 {
  font-size: 16px;
  color: #4d4b4b;
}

.section-title {
  font-size: 18px;
  color: #3e3e3f;
  margin-bottom: 10px;
  border-bottom: 1px solid #96a75a;
  padding-bottom: 5px;
}

.SkillsSection-title {
  font-size: 18px;
  color: #3e3e3f;
  border-bottom: 1px solid #96a75a;
}

.Lsection-title {
  font-size: 18px;
  color: #f5f5f5;
  margin-bottom: 10px;
  border-bottom: 1px solid #d4d4d2;
  padding-bottom: 5px;
}

.content {
  display: flex;
  justify-content: center;
}

.mtt-3 {
  margin-top: 0.75rem /* 12px */;
}

.content .left {
  width: 35%;
  padding-right: 10px;
  background-color: #0363b1;
  border-bottom-left-radius: 15px;
  border-right: 4px solid #0363b1;
  /* border-top: 4px solid #0363b1; */
}

.content .right {
  width: 65%;
  margin-left: 10px;
}

.Lsection,.Contact {
  margin-bottom: 20px;
  padding-left: 20px;
  color: #e1ebf3;
}

.Contact div {
  margin-bottom: 5px;
}

.content .Contact div a {
  text-decoration: none;
  color: #e1ebf3;
}

.subcont,.SkillSubCon {
   display: flex;
   justify-content: space-between;
}  

.section,.SUsection {
  margin-bottom: 20px;
  color: #141414;
}

.item {
  margin-bottom: 10px;
}

.item-title {
  font-weight: bold;
}

.content .right .item-title,
.content .left .section-title,
.Lsection-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style-type: circle;
  padding-left: 20px;
  margin: 5px 0;
}

ul li {
  margin-bottom: 5px;
}

.textLight{
  font-weight: 500;
  color: #626263;
}

.rotate-90 {
  transform: rotate(90deg);
}

.content .right .section .Cont {
  border-left: 2px solid #53677a;
  margin-left: 5px;
}

.content .right .section .Cont .item {
  margin-left: 10px;
}`,qh=({jsonData:n,desc:s})=>{const i=j=>{try{return new URL(j),!0}catch{return!1}},a=j=>j.trim(),u=n.skills.hardSkills.split(",").map(j=>j.trim()).filter(j=>j!==""),d=Math.floor(u.length/4);let m=d,f=d,h=d,_=d;u.length%4===1?m+=1:u.length%4===2?(m+=1,f+=1):u.length%4===3&&(m+=1,f+=1,h+=1);const v=u.slice(0,m),k=u.slice(m,m+f),w=u.slice(m+f,m+f+h);return u.slice(m+f+h,m+f+h+_),l.jsx(zv,{children:l.jsxs("div",{className:"resume",id:"capture-content",children:[l.jsxs("div",{className:"header",children:[l.jsx("div",{className:"left",children:l.jsx("img",{src:"https://www.skibalawchicago.com/wp-content/uploads/2024/06/profile-placeholder.jpg",alt:"Profile"})}),l.jsx("div",{className:"right",children:l.jsxs("div",{className:"head",children:[l.jsx("h1",{children:n.contactInfo.fullName}),l.jsx("h2",{children:n.contactInfo.jobTitle}),l.jsx("div",{className:"Underline"})]})})]}),l.jsxs("div",{className:"content",children:[l.jsxs("div",{className:"left",children:[l.jsxs("div",{className:"Contact",children:[l.jsxs("div",{className:"Lsection-title",children:[l.jsx("b",{children:"Contact"})," ",l.jsx("i",{className:"fas fa-address-card"})]})," ",l.jsx("br",{}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fa fa-phone"})," ",n.contactInfo.phoneNumber," "]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fas fa-envelope"}),l.jsxs("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:[" ",n.contactInfo.emailAddress.split("@")[0]," "]})]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fab fa-linkedin"}),l.jsxs("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.linkedin]})]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fas fa-globe"}),l.jsxs("a",{href:i(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")," "]})]}),l.jsxs("div",{className:"Litem",children:[l.jsx("i",{className:"fa fa-map-marker"})," ",n.contactInfo.Location]})]}),l.jsxs("div",{className:"Lsection",children:[l.jsxs("div",{className:"Lsection-title",children:[l.jsx("b",{children:"Education "}),l.jsx("i",{className:"fas fa-graduation-cap"})]}),l.jsx("br",{}),l.jsxs("div",{className:"Litem",children:[n.education.map((j,E)=>l.jsxs(he.Fragment,{children:[E>0&&l.jsxs(he.Fragment,{children:[l.jsx("br",{}),l.jsx("br",{})]}),l.jsx("div",{className:"SubSec-title",children:l.jsxs("b",{children:[j.graduationYear,l.jsx("br",{}),j.institutionName]})}),j.degreeName," ",l.jsx("br",{}),"SGPA: ",j.currentSGPA]},E)),l.jsx("br",{})]})]}),l.jsxs("div",{className:"Lsection",children:[l.jsxs("div",{className:"Lsection-title",children:[l.jsx("b",{children:"Soft Skills "}),l.jsx("i",{className:"fa fa-book"})]}),l.jsx("br",{}),l.jsx("ul",{children:n.skills.softSkills.split(",").map(j=>j.trim()).filter(j=>j!=="").map((j,E)=>l.jsx("li",{children:a(j)},E))})]}),l.jsxs("div",{className:"Lsection",children:[l.jsxs("div",{className:"Lsection-title",children:[l.jsx("b",{children:"Languages "}),l.jsx("i",{className:"fa fa-language"})]}),l.jsx("br",{}),l.jsx("ul",{children:n.contactInfo.Languages.split(",").map(j=>j.trim()).filter(j=>j!=="").map((j,E)=>l.jsxs("li",{children:[a(j),": Fluent"]},E))})]})]}),l.jsxs("div",{className:"right",children:[l.jsxs("div",{className:"section",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Profile Summary"})}),l.jsx("p",{children:n.Description.UserDescription})]}),l.jsxs("div",{className:"SUsection",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Projects"})}),l.jsx("ul",{children:n.projects.map((j,E)=>l.jsx("div",{className:"Ritem",children:l.jsxs("li",{children:[l.jsxs("div",{className:"item-title textGray",children:[j.projectTitle," "]}),l.jsxs("div",{children:[" ",j.toolsTechUsed," "]})]})},E))})]}),l.jsx("br",{}),l.jsxs("div",{className:"section",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Work Experience"})}),l.jsx("div",{className:"Ritem",children:l.jsx("ul",{children:n.workExperience.map((j,E)=>l.jsx(he.Fragment,{children:l.jsxs("li",{children:[l.jsxs("div",{className:"item-title textGray mtt-3",children:[j.companyName,l.jsx("div",{children:j.WorkDuration})]}),j.jobTitle,l.jsx("br",{}),l.jsx("div",{dangerouslySetInnerHTML:{__html:j.keyAchievements}})]})},E))})})]}),l.jsxs("div",{className:"section",children:[l.jsx("div",{className:"section-title",children:l.jsx("b",{children:"Certificates"})}),l.jsxs("div",{className:"Ritem subcont NoneDecoration",children:[l.jsxs("div",{children:[n.certificates.map((j,E)=>l.jsxs(he.Fragment,{children:[E>0&&l.jsx("br",{}),j.certificateName]},E)),l.jsx("br",{}),l.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),l.jsxs("div",{children:[n.certificates.map((j,E)=>l.jsxs(he.Fragment,{children:[E>0&&l.jsx("br",{}),"--"]},E)),l.jsx("br",{})]}),l.jsxs("div",{children:[n.certificates.map((j,E)=>l.jsxs(he.Fragment,{children:[E>0&&l.jsx("br",{}),j.providerName]},E)),l.jsx("br",{})]}),l.jsxs("div",{className:"textLight",children:[n.certificates.map((j,E)=>l.jsxs(he.Fragment,{children:[E>0&&l.jsx("br",{}),"(",j.courseDuration,")"]},E)),l.jsx("br",{})]})]})]}),l.jsxs("div",{className:"skills",children:[l.jsx("div",{className:"SkillsSection-title",children:l.jsx("b",{children:"Technical Skills"})}),l.jsx("br",{}),l.jsxs("div",{className:"Ritem subcont",children:[l.jsx("ul",{children:v.map((j,E)=>l.jsx(he.Fragment,{children:l.jsx("li",{children:j})},E))}),l.jsx("ul",{children:k.map((j,E)=>l.jsx(he.Fragment,{children:l.jsx("li",{children:j})},E))}),l.jsx("ul",{children:w.map((j,E)=>l.jsx(he.Fragment,{children:l.jsx("li",{children:j})},E))}),l.jsx("ul",{children:w.map((j,E)=>l.jsx(he.Fragment,{children:l.jsx("li",{children:j})},E))})]})]})]})]})]})})},$v=`
@media print {
  body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #ffffff !important;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 1280px; 
  }
  @page {
   size: 985px 1220px; 
   margin: 0;
  }
  .resume {
     width: 900px;
     /* height: 1225px; */
     background: #ffffff;
     border: 1px solid #ffffff !important;
     border-radius: 15px;
     margin-top: 0px !important;
     padding: 0 32px 0 0;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}

body {
   font-family: Arial, sans-serif;
   margin: 0;
   padding: 0;
   background-color: #d6cece;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 1380px; /* (W/H) Ratio should be 0.7069 */
}

.resume {
   width: 900px; /* (W/H) Ratio should be 0.7069 */
   /* height: 1225px; */
   background: #ffffff;
   border: 1px solid #ddd;
   border-radius: 15px;
   margin-top: 100px;
   padding: 0 30px 0 0;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.Underline{
   width: 75px;
   border:2px solid black;
   margin-top: 10px;
   border-radius: 20px;
}

.NoneDecoration a{
   text-decoration: none;
   color:#0363b1;
}

.header {
   display: flex; 
   align-items: center;
}

.header .left {
   width: 35%;
   display: flex;
   justify-content: center;
   padding: 10px 13px 10px 13px;
   background-color: #0363b1;
   border-top-left-radius: 15px;
   border-right: 4px solid #0363b1;
}

.left img{
   width: 200px;
   height: 200px;
   background-color: #4c4fda;
   border-radius: 50%;
   object-fit: cover;
}

.header .right {
   width: 65%;
   justify-content: center;
   align-items: center;
   height: 100%;
   margin-right: 40px;
}

.header .right .head {
   padding-left: 40px;
}

.textGray{
   color: #4e4e53;
}

.right h1 {
   font-size: 40px;
   margin-bottom: 5px;
}

.right h2 {
   font-size: 16px;
   color: #4d4b4b;
}

.section-title {
   font-size: 18px;
   color: #3e3e3f;
   margin-bottom: 10px;
   border-bottom: 1px solid #96a75a;
   padding-bottom: 5px;
}

.SkillsSection-title {
   font-size: 18px;
   color: #3e3e3f;
   border-bottom: 1px solid #96a75a;
}

.Lsection-title {
   font-size: 18px;
   color: #f5f5f5;
   margin-bottom: 10px;
   border-bottom: 1px solid #d4d4d2;
   padding-bottom: 5px;
}

.content {
   display: flex;
   justify-content: center;
}

.mtt-3 {
   margin-top: 0.75rem /* 12px */;
}

.content .left {
   width: 35%;
   padding-right: 10px;
   background-color: #0363b1;
   border-bottom-left-radius: 15px;
   border-right: 4px solid #0363b1;
   /* border-top: 4px solid #0363b1; */
}

.content .right {
   width: 65%;
   margin-left: 10px;
}

.Lsection,.Contact {
   margin-bottom: 20px;
   padding-left: 20px;
   color: #e1ebf3;
}

.Contact div {
   margin-bottom: 5px;
}

.content .Contact div a {
   text-decoration: none;
   color: #e1ebf3;
}

.subcont,.SkillSubCon {
    display: flex;
    justify-content: space-between;
}  

.section,.SUsection {
   margin-bottom: 20px;
   color: #141414;
}

.item {
   margin-bottom: 10px;
}

.item-title {
   font-weight: bold;
}

.content .right .item-title,
.content .left .section-title,
.Lsection-title {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

ul {
   list-style-type: circle;
   padding-left: 20px;
   margin: 5px 0;
}

ul li {
   margin-bottom: 5px;
}

.textLight{
   font-weight: 500;
   color: #626263;
}

.rotate-90 {
   transform: rotate(90deg);
}

.content .right .section .Cont {
   border-left: 2px solid #53677a;
   margin-left: 5px;
}

.content .right .section .Cont .item {
   margin-left: 10px;
}`,Fv=Rn.div`* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #c9c9c9;
  margin-top: 80px;
  color: #333;
  padding: 20px;
}

.resume-container {
  width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.header h1 {
  font-size: 32px;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
  color: #7d3c98; 
  text-transform: uppercase;
}

.header h2 {
  font-size: 24px;
  font-weight: normal;
  color: #555;
  margin-bottom: 0.75rem;
}

.header p {
  font-size: 0.9rem;
  color: #666;
}

h3 {
  font-size: 19px;
  text-transform: uppercase;
  color: #7d3c98;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
}

.spacebetween {
  display: flex;
  justify-content: space-between;
}

.flexConts{
 display: flex;
}

.mar-30{
 margin: 0 30px 0 30px;
}

.summary, .projects, .experience, .education-section, .Certifications, .skills {
  border-top: 2px solid #333;
  margin-bottom: 25px;
}

.summary p {
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-left: 10px;
  margin-right: 10px;
}

.project-item {
  margin: 0 25px 10px 25px;
}

.experience-item {
  margin-bottom: 1rem;
  margin-right: 20px;
}

.experience-item h4 {
  font-size: 16px;
  margin-bottom: 0.25rem;
  font-weight: bold;
}

.experience-item span {
  font-size: 0.9rem;
  color: #757474;
}

.experience-item ul {
  list-style: circle;
  margin-left: 1.2rem;
  margin-top: 0.5rem;
}

.experience-item li {
  margin-bottom: 0.5rem;
}

.education-item {
  margin: 0 20px 10px 20px;
}

.education-item h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-weight: bold;
}

.education-item span {
  font-size: 0.9rem;
  color: #757474;
}

.Certificate-item {
  margin: 0 10px 0 10px;
}

.skills-item {
  margin-bottom: 5px;
  margin-left: 10px;
}

.DecorationNone {
  text-decoration: none;
  color: #1d4780;
}

.fontLight{
 color: #5e5d5d;
}

.square-list {
  list-style-type: square; 
}`,Jh=({jsonData:n,desc:s})=>{const i=a=>a.indexOf(".")>-1?`https://${a}`:`https://github.com/${a}`;return l.jsx(Fv,{children:l.jsxs("div",{className:"resume-container",id:"capture-content",children:[l.jsxs("div",{className:"header",children:[l.jsx("h1",{children:l.jsx("b",{children:n.contactInfo.fullName})}),l.jsx("br",{}),l.jsxs("p",{children:[l.jsx("a",{className:"DecorationNone",href:i(n.contactInfo.portfolio),target:"_blank",rel:"noreferrer",children:n.contactInfo.portfolio.replace(/^https?:\/\//,"")})," | ",l.jsxs("a",{className:"DecorationNone",href:"#",children:[" ",n.contactInfo.phoneNumber]})," | ",l.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,className:"DecorationNone",target:"_blank",rel:"noreferrer",children:n.contactInfo.emailAddress})," ",l.jsx("br",{}),l.jsx("div",{style:{marginTop:"6px"},children:n.contactInfo.Location})]})]}),l.jsxs("div",{className:"summary",children:[l.jsx("h3",{children:l.jsx("b",{children:"Summary"})}),l.jsx("p",{children:n.Description.UserDescription})]}),l.jsxs("div",{className:"experience",children:[l.jsx("h3",{children:l.jsx("b",{children:"Work Experience"})}),n.workExperience.map((a,u)=>l.jsx("div",{className:"experience-item",children:l.jsxs("ul",{className:"circle-list",children:[l.jsx("li",{children:l.jsxs("h4",{className:"spacebetween",children:[a.companyName," | ",a.jobTitle," ",l.jsx("span",{children:a.WorkDuration})]})}),l.jsx("div",{dangerouslySetInnerHTML:{__html:a.keyAchievements}})]})},u))]}),l.jsxs("div",{className:"education-section",children:[l.jsx("h3",{children:l.jsx("b",{children:"Education"})}),n.education.map((a,u)=>l.jsx("div",{className:"education-item",children:l.jsxs("ul",{className:"square-list",children:[l.jsx("li",{children:l.jsxs("h4",{className:"spacebetween",children:[a.degreeName,l.jsx("span",{children:a.graduationYear})]})}),l.jsxs("p",{children:[a.institutionName," | SGPA: ",a.currentSGPA]})]})},u))]}),l.jsxs("div",{className:"projects",children:[l.jsx("h3",{children:l.jsx("b",{children:"Projects"})}),n.projects.map((a,u)=>l.jsx("div",{className:"project-item",children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("h4",{className:"spacebetween",children:a.projectTitle})}),l.jsx("p",{children:a.toolsTechUsed})]})},u))]}),l.jsxs("div",{className:"Certifications",children:[l.jsx("h3",{children:l.jsx("b",{children:"Certifications"})}),l.jsxs("div",{className:"flexConts Certificate-item",children:[l.jsxs("div",{className:"mar-30",children:[n.certificates.map((a,u)=>l.jsxs(he.Fragment,{children:[u>0&&l.jsx("br",{}),a.certificateName]},u)),l.jsx("br",{}),l.jsx("a",{className:"DecorationNone",href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),l.jsxs("div",{className:"mar-30",children:[n.certificates.map((a,u)=>l.jsxs(he.Fragment,{children:[u>0&&l.jsx("br",{}),"--"]},u)),l.jsx("br",{})]}),l.jsxs("div",{className:"mar-30",children:[n.certificates.map((a,u)=>l.jsxs(he.Fragment,{children:[u>0&&l.jsx("br",{}),a.providerName]},u)),l.jsx("br",{})]}),l.jsxs("div",{className:"mar-30 fontLight",children:[n.certificates.map((a,u)=>l.jsxs(he.Fragment,{children:[u>0&&l.jsx("br",{}),"(",a.courseDuration,")"]},u)),l.jsx("br",{})]})]})]}),l.jsxs("div",{className:"skills",children:[l.jsx("h3",{children:l.jsx("b",{children:"Skills"})}),l.jsxs("p",{className:"skills-item",children:[l.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Soft Skills: "}),n.skills.softSkills]}),l.jsxs("p",{className:"skills-item",children:[l.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Tech Skills: "}),l.jsx("span",{children:n.skills.hardSkills})]})]})]})})},Uv=`
@media print {
  body {
    font-family: Arial, sans-serif;
    background: #fff !important;
    margin-top: 0 !important;
    color: #333;
    padding: 5px !important;
  }
  @page {
   size: 960px 1300px; 
   margin: 0;
  }
 .resume-container {
   width: 900px;
   margin: 10px auto;
   background: #fff;
   border-radius: 15px;
   box-shadow: 0 0 0 rgba(0, 0, 0, 0.05);
   padding: 1rem !important;
 }
}

* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 body {
   font-family: Arial, sans-serif;
   background: #c9c9c9;
   margin-top: 80px;
   color: #333;
   padding: 20px;
 }

 .resume-container {
   width: 900px;
   margin: 0 auto;
   background: #fff;
   border-radius: 15px;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
   padding: 2rem;
 }

 .header {
   text-align: center;
   margin-bottom: 1.5rem;
 }

 .header h1 {
   font-size: 32px;
   letter-spacing: 1px;
   margin-bottom: 0.25rem;
   color: #7d3c98; 
   text-transform: uppercase;
 }

 .header h2 {
   font-size: 24px;
   font-weight: normal;
   color: #555;
   margin-bottom: 0.75rem;
 }

 .header p {
   font-size: 0.9rem;
   color: #666;
 }

 h3 {
   font-size: 19px;
   text-transform: uppercase;
   color: #7d3c98;
   margin-top: 1.5rem;
   margin-bottom: 0.75rem;
   letter-spacing: 1px;
 }

 .spacebetween {
   display: flex;
   justify-content: space-between;
 }

 .flexConts{
  display: flex;
 }

 .mar-30{
  margin: 0 30px 0 30px;
 }

 .summary, .projects, .experience, .education-section, .Certifications, .skills {
   border-top: 2px solid #333;
   margin-bottom: 25px;
 }

 .summary p {
   line-height: 1.5;
   margin-bottom: 0.5rem;
   margin-left: 10px;
   margin-right: 10px;
 }

 .project-item {
   margin: 0 25px 10px 25px;
 }

 .experience-item {
   margin-bottom: 1rem;
   margin-right: 20px;
 }

 .experience-item h4 {
   font-size: 16px;
   margin-bottom: 0.25rem;
   font-weight: bold;
 }

 .experience-item span {
   font-size: 0.9rem;
   color: #757474;
 }

 .experience-item ul {
   list-style: circle;
   margin-left: 1.2rem;
   margin-top: 0.5rem;
 }

 .experience-item li {
   margin-bottom: 0.5rem;
 }

 .education-item {
   margin: 0 20px 10px 20px;
 }

 .education-item h4 {
   font-size: 1rem;
   margin-bottom: 0.25rem;
   font-weight: bold;
 }

 .education-item span {
   font-size: 0.9rem;
   color: #757474;
 }

 .Certificate-item {
   margin: 0 10px 0 10px;
 }

 .skills-item {
   margin-bottom: 5px;
   margin-left: 10px;
 }

 .DecorationNone {
   text-decoration: none;
   color: #1d4780;
 }

 .fontLight{
  color: #5e5d5d;
 }

 .square-list {
   list-style-type: square; 
 }`,Wv=Rn.div`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #d6cece;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;         /* (W/H) Ratio should be 0.7069 */
}
.resume {
  width: 900px;           /* (W/H) Ratio should be 0.7069 */
  /* height: 1131px; */
  background: #F1F5F9;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
ul {
  list-style-type: circle;
  padding-left: 20px;
}
.title{
  font-size: 24px;
  font-weight: bold;
  color: #474646;
  margin-bottom: 10px;
  border-bottom: 1px solid #535351;
  padding-bottom: 5px;
}

.contacts h1{
  font-size: 32px;  /* or whatever you like */
  font-weight: bold;
  color: #333;
}

.NoneDecoration{
  text-decoration: none;
  color: rgb(1, 82, 187);
  padding-left: 20px;
}

.TextGray{
  color:#363636;
  font-weight: bold;
}

.TextLight{
  color:#4e4e4e;
}

.subtitle,.item-title{
  font-size: 18px;
  font-weight: bold;
  color: #474646;
  margin-bottom: 5px;
  margin-top: 15px;
}

.mll-3 {
  margin-left: 0.75rem /* 12px */;
}

.Conts{
  margin-top: 25px;
}

.subcont{
  display: flex;
  /* justify-content: space-between; */
}

.subcont .mid{
  padding-right: 40px;
}

.flexConts{
  display: flex;
}

.mar-30{
  margin: 0 30px 0 30px;
}

.contacts a{
  text-decoration: none;
  color: black;
}

.signature{
  font-family: 'Dancing Script', cursive;
  font-size: 18px;
  font-weight:500;
  display: flex;
  justify-content: end;
  margin-right: 50px;
}

.SpaceBetween{
  display: flex;
  margin-bottom: 2px;
  justify-content: space-between;
  padding: 0 20px 0 20px;
}`,Zh=({jsonData:n})=>{const s=i=>{try{return new URL(i),!0}catch{return!1}};return l.jsx(Wv,{children:l.jsxs("div",{className:"resume",id:"capture-content",children:[l.jsxs("div",{className:"contacts",children:[l.jsx("h1",{children:n.contactInfo.fullName}),l.jsxs("p",{children:[n.contactInfo.Location," ",l.jsx("br",{}),n.contactInfo.phoneNumber," | ",l.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.emailAddress})," | ",l.jsxs("a",{href:s(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")]})]})]}),l.jsxs("div",{className:"Conts",children:[l.jsx("div",{className:"title",children:"Objectives:"}),n.Description.UserDescription]}),l.jsxs("div",{className:"Conts",children:[l.jsx("div",{className:"title",children:"Education:"}),n.education.map((i,a)=>l.jsxs("div",{children:[l.jsx("div",{className:"subtitle",children:i.degreeName}),i.institutionName," | ",i.graduationYear," | SGPA: ",i.currentSGPA]},a))]}),l.jsxs("div",{className:"Conts",children:[l.jsx("div",{className:"title",children:"Technical skills:"}),l.jsxs("div",{className:"subcont SpaceBetween",children:[l.jsxs("div",{className:"left",children:[l.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Tech Skills: "})," ",l.jsx("br",{}),l.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Soft Skills: "})]}),l.jsxs("div",{className:"mid",children:["--",l.jsx("br",{}),"--",l.jsx("br",{})]}),l.jsxs("div",{className:"right",children:[n.skills.hardSkills,l.jsx("br",{}),n.skills.softSkills," ",l.jsx("br",{})]})]})]}),l.jsxs("div",{className:"Conts",children:[l.jsx("div",{className:"title",children:"Academic Projects:"}),l.jsx("ul",{children:n.projects.map((i,a)=>l.jsx("div",{className:"Ritem",children:l.jsxs("li",{children:[l.jsx("div",{className:"item-title",children:i.projectTitle}),l.jsx("div",{children:i.toolsTechUsed})]})},a))})]}),l.jsxs("div",{className:"Conts",children:[l.jsx("div",{className:"title",children:"Work Experience:"}),n.workExperience.map((i,a)=>l.jsxs("div",{children:[l.jsxs("div",{className:"internship TextGray SpaceBetween",children:[l.jsx("div",{className:"left ",children:i.companyName}),l.jsx("div",{className:"Right",children:i.WorkDuration})]}),l.jsx("ul",{children:l.jsx("li",{children:i.keyAchievements})})]},a))]}),l.jsxs("div",{className:"Conts",children:[l.jsx("div",{className:"title",children:"Certifications:"}),l.jsxs("div",{className:"flexConts subcont",children:[l.jsx("div",{className:"mar-30",children:n.certificates.map((i,a)=>l.jsxs(he.Fragment,{children:[a>0&&l.jsx("br",{}),i.certificateName]},a))}),l.jsxs("div",{className:"mar-30",children:[n.certificates.map((i,a)=>l.jsxs(he.Fragment,{children:[a>0&&l.jsx("br",{}),"--"]},a)),l.jsx("br",{})]}),l.jsxs("div",{className:"mar-30",children:[n.certificates.map((i,a)=>l.jsxs(he.Fragment,{children:[a>0&&l.jsx("br",{}),i.providerName]},a)),l.jsx("br",{})]}),l.jsxs("div",{className:"mar-30 TextLight",children:[n.certificates.map((i,a)=>l.jsxs(he.Fragment,{children:[a>0&&l.jsx("br",{}),"(",i.courseDuration,")"]},a)),l.jsx("br",{})]})]}),l.jsx("a",{className:"NoneDecoration mll-3",href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),l.jsxs("div",{className:"Conts",children:[l.jsx("div",{className:"title",children:"Declaration:"}),"I hereby declare that the above information is true to the best of my knowledge."]}),l.jsx("p",{className:"signature",children:n.contactInfo.fullName})]})})},Hv=`
@media print {
  body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #F1F5F9 !important;
     display: flex;
     justify-content: center;
     align-items: center;
     height: auto;        
  }
  @page {
   size: 950px 1300px; 
   margin: 0;
  }
  .resume {
     width: 900px;         
     background: #F1F5F9;
     border: 0px solid #ddd !important;
     border-radius: 15px;
     padding: 20px;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}

body {
   font-family: Arial, sans-serif;
   margin: 0;
   padding: 0;
   background-color: #d6cece;
   display: flex;
   justify-content: center;
   align-items: center;
   height: auto;         /* (W/H) Ratio should be 0.7069 */
}
.resume {
   width: 900px;           /* (W/H) Ratio should be 0.7069 */
   /* height: 1131px; */
   background: #F1F5F9;
   border: 1px solid #ddd;
   border-radius: 15px;
   padding: 20px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
ul {
   list-style-type: circle;
   padding-left: 20px;
 }
.title{
   font-size: 24px;
   font-weight: bold;
   color: #474646;
   margin-bottom: 10px;
   border-bottom: 1px solid #535351;
   padding-bottom: 5px;
}

.contacts h1{
   font-size: 32px;  /* or whatever you like */
   font-weight: bold;
   color: #333;
}

.NoneDecoration{
   text-decoration: none;
   color: rgb(1, 82, 187);
   padding-left: 20px;
}

.TextGray{
   color:#363636;
   font-weight: bold;
}

.TextLight{
   color:#4e4e4e;
}

.subtitle,.item-title{
   font-size: 18px;
   font-weight: bold;
   color: #474646;
   margin-bottom: 5px;
   margin-top: 15px;
}

.mll-3 {
   margin-left: 0.75rem /* 12px */;
}

.Conts{
   margin-top: 25px;
}

.subcont{
   display: flex;
   /* justify-content: space-between; */
}

.subcont .mid{
   padding-right: 40px;
}

.flexConts{
   display: flex;
}

.mar-30{
   margin: 0 30px 0 30px;
}

.contacts a{
   text-decoration: none;
   color: black;
}

.signature{
   font-family: 'Dancing Script', cursive;
   font-size: 18px;
   font-weight:500;
   display: flex;
   justify-content: end;
   margin-right: 50px;
}

.SpaceBetween{
   display: flex;
   margin-bottom: 2px;
   justify-content: space-between;
   padding: 0 20px 0 20px;
}`,Gv=()=>{var at,Mn,ar,Vr,Kr,or,Qr,lr,un,Kt,ur,Xr,Yr,qr,Jr;const[n,s]=R.useState(0),[i,a]=R.useState(!1),u=Ru(),[d,m]=R.useState({selectedTemplate:"2",contactInfo:{fullName:"Nishant kumar",phoneNumber:"9217290469",emailAddress:"nishantsingh.talk@gmail.com",linkedin:"nishantksingh1",portfolio:"nishantksingh0.github.io",jobTitle:"Data Scientist",Languages:"English, Hindi, French",Location:"Haridwar (Uttrakhand)"},skills:{hardSkills:"TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React",softSkills:"TeamWork, Problem-Solving, Leadership, Critical thinking, Communication, Creativity"},workExperience:[{jobTitle:"Data scientist",companyName:"Onlei tech",WorkDuration:"Dec-2024 to Mar-2025",keyAchievements:"Learn to visualize patterns from data using matplotlib and Built several DL models"},{jobTitle:"Python engineer",companyName:"Microsoft",WorkDuration:"May-2024 to Jul-2024",keyAchievements:"Learn to use python in NLP tasks to take advantages of LLM"}],projects:[{projectTitle:"Transformer based translation model",toolsTechUsed:"Tensorflow, Trasformer architecture, NumPy, WMT Translation dataset"},{projectTitle:"Exam Proctoring system",toolsTechUsed:"React, Flask, OpenCV, NumPy, Mediapipe, Pillow, WebSocket, ThreadPool"},{projectTitle:"Persion bounding box detection",toolsTechUsed:"OpenCV, Json, Tensorflow, Pandas, Matplotlib, NumPy"}],education:[{institutionName:"Haridwar University",degreeName:"Batchelor in Computer application",graduationYear:"2023 - 2026",currentSGPA:"8"},{institutionName:"Vidya Mandir Sec-5 (Haridwar)",degreeName:"Primary/Secondary",graduationYear:"2021 - 2023",currentSGPA:"8"}],certificates:[{certificateName:"Azure AI Engineer association",courseDuration:"2 month ",providerName:"Microsoft"},{certificateName:"C/C++",courseDuration:"2 Month",providerName:"Cad Planet"},{certificateName:"DataScientist Internship",courseDuration:"2 Month",providerName:"Onlei Tech"},{certificateName:"Intro To responsive AI",courseDuration:"1 Month",providerName:"SimpliLearn"},{certificateName:"Bits & byts of computer",courseDuration:"1 Month",providerName:"Coursera"}],Description:{UserDescription:"Passionate AI developer & backend specialist with expertise in deep learning, computer vision, NLP, and transformers, focusing on building models from scratch. Proficient in React, frontend design, Flask, and Django, enabling seamless AI integration into real world applications. Developed and deployed 22+ projects, showcased on GitHub & Kaggle. Always eager to solve complex challenges and innovate in AI & software development"}}),[f,h]=R.useState({selectedTemplate:"",contactInfo:{fullName:"",phoneNumber:"",emailAddress:"",linkedin:"",portfolio:"",jobTitle:"",Languages:"",Location:""},skills:{hardSkills:"",softSkills:""},workExperience:[{jobTitle:"",companyName:"",WorkDuration:"",keyAchievements:""}],projects:[{projectTitle:"",toolsTechUsed:""}],education:[{institutionName:"",degreeName:"",graduationYear:"",currentSGPA:""}],certificates:[{certificateName:"",courseDuration:"",providerName:""}],Description:{UserDescription:""}}),_=(at=f.skills.hardSkills)==null?void 0:at.split(",").slice(0,5).map(G=>G.trim()).join(", "),v=[`A passionate ${f.contactInfo.jobTitle} graduated from ${(Mn=f.education[0])==null?void 0:Mn.institutionName}, with expertise in ${_} and more. honed through 8+ projects. Skilled at leveraging cutting-edge tools to deliver innovative solutions. Proficient in ${f.contactInfo.Languages}and recognized for exceptional ${f.skills.softSkills}.`,`A results-driven ${f.contactInfo.jobTitle} Graduated from ${(ar=f.education[0])==null?void 0:ar.institutionName}, mastered in ${_} and more. Built over 10+ real-world projects. Adept in ${f.contactInfo.Languages}and highly valued for strong ${f.skills.softSkills}& creativity that drive Collaborative team work.`,`A dedicated ${f.contactInfo.jobTitle} graduated from ${(Vr=f.education[0])==null?void 0:Vr.institutionName}, specializing in ${_} and more. with hands-on experience in building 12+ impactful projects. Fluent in ${f.contactInfo.Languages}with proven strengths in ${f.skills.softSkills}bringing creativity and precision to every challenge.`,`A skilled ${f.contactInfo.jobTitle} Graduated from ${(Kr=f.education[0])==null?void 0:Kr.institutionName}, with expertise in ${_} and more. built over 22+ practical projects. Familiar with ${f.contactInfo.Languages}and known for outstanding ${f.skills.softSkills}that foster innovation and collaboration.`,`An innovative ${f.contactInfo.jobTitle} graduated from ${(or=f.education[0])==null?void 0:or.institutionName}, with proficiency in ${_} and more. demonstrated through 13+ diverse projects. Well-versed in ${f.contactInfo.Languages}and appreciated for exceptional ${f.skills.softSkills}in dynamic work environments.`,`A forward-thinking ${f.contactInfo.jobTitle} graduated from ${(Qr=f.education[0])==null?void 0:Qr.institutionName}, with strong expertise in ${_} and more. Successfully delivered 15+ innovative projects, demonstrating proficiency in ${f.contactInfo.Languages}and earning recognition for exceptional ${f.skills.softSkills}in fast-paced environments.`,`An enthusiastic ${f.contactInfo.jobTitle} from ${(lr=f.education[0])==null?void 0:lr.institutionName}, with a proven track record in ${_} and more. across 18+ industry-relevant projects. Skilled communicator in ${f.contactInfo.Languages}with a reputation for ${f.skills.softSkills}, problem-solving, and strategic thinking.`,`A dynamic ${f.contactInfo.jobTitle} holding a Bachelor's from ${(un=f.education[0])==null?void 0:un.institutionName}, specializing in ${_} and more. Accomplished 20+ successful projects that blend innovation with practical impact. Strong command over ${f.contactInfo.Languages}and valued for adaptive ${f.skills.softSkills}and leadership abilities.`,`An ambitious ${f.contactInfo.jobTitle} graduated from ${(Kt=f.education[0])==null?void 0:Kt.institutionName}, excelling in ${_} and more. through hands-on contributions to 25+ real-world projects. Proficient in ${f.contactInfo.Languages}with a passion for applying ${f.skills.softSkills}to solve complex challenges collaboratively.`,`A detail-oriented ${f.contactInfo.jobTitle} from ${(ur=f.education[0])==null?void 0:ur.institutionName}, specializing in ${_} and a proven track record of delivering 30+ impactful projects that drive business growth. Proficient in ${f.contactInfo.Languages}, with a strong focus on ${f.skills.softSkills}, bringing innovation, efficiency, and a solution-driven mindset to every project.`,`An accomplished ${f.contactInfo.jobTitle} graduated from ${(Xr=f.education[0])==null?void 0:Xr.institutionName}, with deep knowledge in ${_} and more. Built 17+ scalable projects demonstrating fluency in ${f.contactInfo.Languages}and a consistent record of ${f.skills.softSkills}that foster productive teamwork and innovation.`,`A highly motivated ${f.contactInfo.jobTitle} from ${(Yr=f.education[0])==null?void 0:Yr.institutionName}, specialized in ${_} and more. with extensive hands-on project experience. Delivered 19+ high-quality solutions with strong command over ${f.contactInfo.Languages}and trusted for excellent ${f.skills.softSkills}and professional integrity.`,`A creative and analytical ${f.contactInfo.jobTitle} graduated from ${(qr=f.education[0])==null?void 0:qr.institutionName}, mastering ${_} and more. through development of 14+ impactful projects. Fluent in ${f.contactInfo.Languages}, with exceptional ${f.skills.softSkills}that contribute to innovative product development and collaborative growth.`,`A performance-driven ${f.contactInfo.jobTitle} from ${(Jr=f.education[0])==null?void 0:Jr.institutionName}, leveraging ${_} and more. expertise to deliver 21+ successful projects. Skilled in ${f.contactInfo.Languages}with a commitment to continuous learning and ${f.skills.softSkills}that elevate team performance and project outcomes.`],[k,w]=R.useState(new Set),[j,E]=R.useState(!1),[B,b]=R.useState(!1),[g,S]=R.useState(!1),[W,T]=R.useState(!1),[z,P]=R.useState(!1),[I,O]=R.useState(!1),[H,y]=R.useState(!1),[F,U]=R.useState(!1),[re,ie]=R.useState(!1),[_e,xe]=R.useState(""),[ke,q]=R.useState(!1),[oe,Z]=R.useState(!1),L=["Simpler and Structured","Linear and Classic","Colourfull and Attractive","Colourful and Highly Designed","Simpler and Linear","Highly Simpler and Classic"],V=["Hi, I'm here to assist you in building a strong, high-quality, and ATS-friendly resume. Let's make it impressive together! 🤝","First, start by choosing a template that best fits your style and profession.",`You choosed template ${Number(f.selectedTemplate)} which is ${L[Number(f.selectedTemplate)-1]} 🤟. lets process further and fill details (Click next)`,`Now, start by filling in your basic details as the form asks. 
Don't worry -- you got suggestions onward which saves much of your time ☺️`,`Good job! Now it's time to showcase your skills... 
As you can see, your data is being live-rendered by our app and displayed above in real-time`,"Consider adding 8+ 'relevant' technical skills. It not only demonstrates your technical breadth but also highlights your creativity, adaptability, and eagerness to learn 🚀","The soft skills will show in summary of resume. or either display on template. consider to show your uniqueness","Add 2-3 languages you are familiar with — it helps organizations understand your comfort level and communication ability.","If you are applying for remote jobs add just 'State' else 'city (State)' and process Next... it's 35% done","Now it's time to mention your Experiences, as a intern or full time employee","Consider adding at least two experiences -- it increases your resume score and showcases practical exposure.","Now process Next...","It's time to showcase your projects! We recommend adding at least 3 because it's a good number to reflect your real-world experience.","Now click Next... it's 65% done",`Now Mention your Pre/Post graduations 🎓 here. 
consider to list most recent Qualification first`,"if You only have one degree you can also mention your Primary/Secondary education below...","Proceed further...",`You're 90% Done 😊... 
Just showcase your achieved certificates and proceed further.`,"We recommend to add atleast 5 certifications (Every Colleges and universities offer plenty of certificates during Academics). just mention top 5","Click Next...",`Write 'A' to get some descriptions created by me...
 You can adjust them as per your preference and submit your data — we'll generate a Resume for you in HTML/CSS and PDF format.`,"We didn't store your data due to sensitive informations like your mobile number or personal preferences (job title,certificates,experiences) — to ensure your privacy 🔏 and avoid misuse by third-party ads.",`want to suggest some improvements?? feel free to Mail us on nishantsingh.talk@gmail.com 
i hope we meet again 👋`,"Now process Next..."],[te,se]=R.useState(0);R.useEffect(()=>{const G=new hu("#Suggestion-typing-text",{strings:[V[te]],loop:!1,typeSpeed:40,showCursor:!0});if(te===0){const J=setTimeout(()=>{se(1),Z(!0)},11e3);return()=>clearTimeout(J)}return()=>{G.destroy()}},[te]);const ye=[{title:"Choose a template that suits you best",key:"Template"},{title:"Begin with your contact details",key:"Contact Info"},{title:"Showcase your skills",key:"Skills"},{title:"Share your work experience",key:"Work Experience"},{title:"Highlight your top projects",key:"Projects"},{title:"Demonstrate your knowledge",key:"Education"},{title:"Add your achieved certifications",key:"Certificates"},{title:"Decribe about you",key:"Description"}],ve=()=>{S(!0);const G=new Set;for(let J=0;J<8;J++)G.add(J);w(G)},Ne=G=>{(G.key==="Enter"||G.key=="Tab")&&(_e==="147895"?(Wt.success("Authorized",{duration:3e3,position:"top-right"}),q(!1),ie(!1),ve()):(Wt.error("Pin is incorrect. Authorization declined!",{duration:3e3,position:"top-right"}),q(!0)))},ce=(G,J,ee,Le=null)=>{h(Bn=>{const Dn={...Bn};return Le!==null&&J!=null?Dn[G][Le][J]=ee:typeof Dn[G]=="object"&&!Array.isArray(Dn[G])&&J!=null&&(Dn[G][J]=ee),Dn})},Se=G=>{h(J=>({...J,[G]:[...J[G],G==="workExperience"?{jobTitle:"",companyName:"",WorkDuration:"",keyAchievements:""}:G==="projects"?{projectTitle:"",toolsTechUsed:""}:G==="education"?{institutionName:"",degreeName:"",graduationYear:"",currentSGPA:""}:{certificateName:"",courseDuration:"",providerName:""}]}))},He=()=>{const G={0:[f.selectedTemplate],1:[f.contactInfo.fullName,f.contactInfo.phoneNumber,f.contactInfo.emailAddress,f.contactInfo.linkedin,f.contactInfo.portfolio,f.contactInfo.jobTitle],2:[f.skills.hardSkills,f.skills.softSkills,f.contactInfo.Languages,f.contactInfo.Location],3:f.workExperience.length>0?f.workExperience.map(ee=>[ee.jobTitle,ee.companyName,ee.WorkDuration,ee.keyAchievements]):[[]],4:f.projects.length>0?f.projects.map(ee=>[ee.projectTitle,ee.toolsTechUsed]):[[]],5:f.education.length>0?f.education.map(ee=>[ee.institutionName,ee.degreeName,ee.graduationYear,ee.currentSGPA]):[[]],6:f.certificates.length>0?f.certificates.map(ee=>[ee.certificateName,ee.courseDuration,ee.providerName]):[[]],7:[f.Description.UserDescription]};if(!(n in G)){Wt.error("Invalid step provided.",{duration:3e3,position:"top-right"});return}const J=ee=>ee.every(Le=>typeof Le=="string"&&Le.trim()!=="");a(!1);for(let ee=0;ee<=n;ee++){const Le=G[ee].flat();if(Le.length>0&&!J(Le)&&!g){a(!0),Wt.error("You need to complete the details on this page and the previous one before moving ahead.",{duration:3e3,position:"top-right"}),setTimeout(()=>{a(!1)},4e3);return}}if(w(ee=>new Set(ee.add(n))),n<ye.length-1)s(ee=>ee+1);else{for(let ee=0;ee<=7;ee++){const Le=G[ee].flat();if(Le.length>0&&!J(Le)&&!g){Wt.error("Please complete all required fields before submitting.",{duration:3e3,position:"top-right"});return}}u("/Result",{state:{jsonData:g?d:f}})}},Ct=()=>{switch(n){case 1:return te==2&&se(3),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl mb-4 pb-1 font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Contact Information"}),l.jsxs("div",{className:"space-y-2",children:[l.jsx(pt,{label:"Full Name",placeholder:"Your name",value:g?d.contactInfo.fullName:f.contactInfo.fullName,onChange:G=>{g||ce("contactInfo","fullName",G)},suggestions:["Aarav","Nishant","Amisha","Ankush","Vivaan","Aditya","Kumar","Vihaan","Arjun","Krishna","Aryan","Rohan","Kunal","Aniket","Rahul","Amit","Siddharth","Manish","Karthik","Chirag","Deepak","Gaurav","Harsh","Nikhil","Suresh","Rajesh","Vikram","Prakash","Dinesh","Ravi","Sagar","Abhishek","Yash","Sandeep","Naveen","Mahesh","Ajay","Dev","Ritesh","Sameer","Arvind","Bhavesh","Sumit","Varun","Shivam","Raghav","Parth","Mohan","Rajiv","Vikas","Tejas","Lakshya","Ashu","Jatin","Ashwin","Neha","Priya","Aisha","Ishita","Sanya","Pooja","Divya","Riya","Ananya","Shruti","Meera","Lata","Kavita","Rekha","Sneha","Tanvi","Bhavna","Swati","Preeti","Sonali","Aarohi","Simran","Radhika","Tanya","Nikita","Payal","Vidya","Trisha","Kriti","Aditi","Shalini","Lavanya","Manisha","Mitali","Rupali","Komal","Vaishnavi","Asmita","Prachi","Chaitali","Juhi","Mallika","Harshita","Bhumi","Surbhi","Alisha","Pallavi","Sourav","Bhawna","Arpita","Nidhi","Hari","Srinivas","Ramesh","Venkatesh","Madhavan","Surya","Kiran","Anirudh","Rajinikanth","Karthikeyan","Lakshmi","Radha","Sowmya","Keerthi","Anitha","Revathi","Sindhu","Divyashree","Shruthi","Meenakshi","Subham","Sourav","Shahid","Anupam","Dipankar","Tanmoy","Ritwik","Arindam","Prithwish","Moumita","Sanchari","Madhumita","Sutapa","Piyali","Laboni","Ipsita","Sumita","Gurpreet","Harpreet","Manpreet","Parminder","Baljit","Gagandeep","Satnam","Simranjeet","Kiranpreet","Jasleen","Navjot","Harleen","Ravneet","Ayaan","Zaid","Faizan","Rehan","Irfan","Armaan","Ayesha","Fatima","Zara","Sana","Nazma","Rabia","Jignesh","Dhaval","Hemant","Chintan","Bhavin","Aparna","Supriya","Rupali","Urmila","Mrunal","Sharma","Verma","Singh","Yadav","Gupta","Agarwal","Choudhary","Rana","Thakur","Mehta","Bansal","Goyal","Tripathi","Mishra","Tiwari","Pandey","Dubey","Dwivedi","Joshi","Jha","Pathak","Srivastava","Nigam","Saxena","Rawat","Bhatt","Rastogi","Kulshreshtha","Bhardwaj","Reddy","Naidu","Iyer","Iyengar","Menon","Pillai","Shetty","Rao","Nair","Gowda","Mudaliar","Krishnan","Murthy","Swamy","Chowdary","Kumar","Prasad","Raj","Subramanian","Das","Ghosh","Chakraborty","Mukherjee","Bhattacharya","Bandyopadhyay","Dutta","Sinha","Paul","Chatterjee","Sen","Roy","Bose","Deb","Pal","Sarkar","Mondal","Mitra","Patel","Desai","Modi","Rathod","Joshi","Shah","Rajput","Chauhan","Solanki","Prajapati","Parmar","Dave","Thakkar","Gohil","Barot","Suthar","Jadeja","Mahajan","Kaur","Singh","Dhillon","Sandhu","Sidhu","Grewal","Gill","Brar","Mann","Bajwa","Khan","Ansari","Ali","Sheikh","Qureshi","Syed","Farooqi","Mirza","Siddiqui","Hussain","Fernandes","D'Souza","Dias","Pereira","Rodrigues","George","Mathew","Joseph","Thomas","Abraham"],isPara:!0}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Phone Number"}),l.jsx("input",{type:"number",placeholder:"9658XX1459",className:`w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${j?"focus:ring-red-500":"focus:ring-blue-500"}  dark:bg-gray-800 dark:text-white dark:border-gray-600 
                  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,value:g?d.contactInfo.phoneNumber:f.contactInfo.phoneNumber,onChange:G=>{g||ce("contactInfo","phoneNumber",G.target.value)},onBlur:G=>{const J=G.target.value;!/^\d{10}$/.test(J)&&!g?(Wt.error("Phone number must be of 10 digits",{duration:3e3,position:"top-right"}),E(!0),G.target.focus()):E(!1)}}),l.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${j?"bg-red-500":"bg-blue-500"}`})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Email Address"}),l.jsx("input",{type:"email",placeholder:"xyz231@gmail.com",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${B?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:g?d.contactInfo.emailAddress:f.contactInfo.emailAddress,onChange:G=>{g||ce("contactInfo","emailAddress",G.target.value)},onBlur:G=>{const J=G.target.value;!/^\S+@\S+\.\S+\s*$/.test(J)&&!g?(Wt.error("Invalid email format!",{duration:3e3,position:"top-right"}),b(!0),G.target.focus()):b(!1)}}),l.jsx("div",{className:`ml-4 w-0 h-1 rounded-full transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${B?"bg-red-500":"bg-blue-500"}`})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"LinkedIn UserName"}),l.jsx("input",{type:"text",placeholder:"xyz231",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:g?d.contactInfo.linkedin:f.contactInfo.linkedin,onChange:G=>{g||ce("contactInfo","linkedin",G.target.value)}}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Portfolio URL / Github UserName"}),l.jsx("input",{type:"text",placeholder:"Personal portfolio URL if have else add GitHub UserName",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:g?d.contactInfo.portfolio:f.contactInfo.portfolio,onChange:G=>{g||ce("contactInfo","portfolio",G.target.value)}}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer w-full",children:l.jsx(pt,{label:"Job Title",placeholder:"Data Scientist",value:g?d.contactInfo.jobTitle:f.contactInfo.jobTitle,onChange:G=>{g||ce("contactInfo","jobTitle",G),te==3&&se(23)},suggestions:["Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer","Game Developer","VR/AR Developer","Metaverse Architect","AI Product Manager","AI Trainer","Generative AI Specialist","MLOps Engineer","Cloud Security Engineer","Cybersecurity Consultant","Penetration Tester","Mobile App Developer","iOS Developer","Android Developer","Embedded Systems Engineer","IoT Engineer","Hardware Engineer","Quantum Computing Researcher","Bioinformatics Scientist","Healthcare Data Analyst","Data Visualization Specialist","Creative Technologist","Influencer Marketing Manager","Customer Success Manager","Community Manager","Localization Specialist","E-commerce Manager","UX Researcher","Animation Artist","Video Editor","AI Content Creator","AI Policy Analyst","SaaS Product Manager","Security Engineer","Energy Analyst","Renewable Energy Consultant","Ethical Hacker","Cloud Consultant","Digital Strategist"],isMultiSuggestion:!1})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 2:return te==23&&se(4),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 pb-1 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Skills"}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Technical Skills",placeholder:"TensorFlow, NLP, Scikit-learn, Keras, Transformers, C/C++, Java, JavaScript, React",value:g?d.skills.hardSkills:f.skills.hardSkills,onChange:G=>{g||(te===4&&se(5),ce("skills","hardSkills",G))},suggestions:["Python","C/C++","LLM's","Matplotlib","Java","JavaScript","TypeScript","Golang","Rust","Kotlin","Swift","PHP","Ruby","MATLAB","TensorFlow","PyTorch","Scikit-learn","Keras","Hugging Face","OpenCV","XGBoost","LightGBM","FastAI","Transformers","Stable Diffusion","LangChain","HTML","CSS","Tailwind CSS","React","Next.js","Vue.js","Angular","Node.js","Express.js","Django","Flask","MySQL","PostgreSQL","MongoDB","SQLite","Redis","Cassandra","Firebase","Supabase","Terraform","Linux","Bash Scripting","Docker","Kubernetes","AWS","Azure","Google Cloud Platform (GCP)","Apache Spark","Hadoop","Apache Kafka","Airflow","Pandas","NumPy","SQL","ETL Pipelines","Computer Vision","NLP","Data Analysis","Data Visualization","Tableau","Power BI","REST API","GraphQL","gRPC","Microservices","System Design","CI/CD","Unit Testing","Integration Testing","Design Patterns","OOP","SOLID Principles","Blockchain","Smart Contracts","Solidity","Web3.js","IPFS","Cybersecurity Fundamentals","OWASP","JWT Authentication","OAuth 2.0","Prometheus","Grafana","ELK Stack (Elasticsearch,Logstash,Kibana)","Serverless Architecture","AWS Lambda","Firebase Functions","Figma","Adobe XD","Framer Motion","Three.js","WebGL","Jenkins","GitHub Actions","GitLab CI","CircleCI","BigQuery","Snowflake","Redshift","LangSmith","AutoML","Vertex AI","MLOps","MLflow","Weights & Biases (WandB)","Prompt Engineering","Vector Databases","Pinecone","ChromaDB","Agile Methodology","Scrum","Kanban","Socket.IO","WebSockets","Real-time Applications","MQTT Protocol","IoT Systems","Embedded Systems"]})}),l.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Soft Skills",placeholder:"TeamWork, Problem-Solving, Leadership, Critical thinking, Communication",value:g?d.skills.softSkills:f.skills.softSkills,onChange:G=>{g||(te===5&&se(6),ce("skills","softSkills",G))},suggestions:["Teamwork","Problem-Solving","Leadership","Critical Thinking","Communication","Adaptability","Creativity","Emotional Intelligence","Time Management","Conflict Resolution","Decision Making","Active Listening","Collaboration","Work Ethic","Empathy","Interpersonal Skills","Stress Management","Responsibility","Negotiation","Patience","Flexibility","Positive Attitude","Self-Motivation","Networking","Constructive Feedback","Attention to Detail","Cultural Awareness","Public Speaking","Persuasion","Growth Mindset","Self-Discipline","Accountability","Open-Mindedness","Conflict Management","Professionalism","Emotional Stability","Respectfulness","Customer Service","Strategic Thinking"]})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Languages you are familiar with",placeholder:"English, Hindi, French",value:g?d.contactInfo.Languages:f.contactInfo.Languages,onChange:G=>{g||(te===6&&se(7),ce("contactInfo","Languages",G))},suggestions:["Hindi","English","Spanish","Bengali","Portuguese","Russian","Japanese","Punjabi","Marathi","Telugu","French","German","Tamil","Urdu"]})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"YourLocation",placeholder:"Haridwar (UTTRAKHAND)",value:g?d.contactInfo.Location:f.contactInfo.Location,onChange:G=>{g||(te===7&&se(8),ce("contactInfo","Location",G))},suggestions:["Haridwar (Uttarakhand)","Dehradun (Uttarakhand)","Rishikesh (Uttarakhand)","Nainital (Uttarakhand)","Delhi","New Delhi","Amritsar (Punjab)","Ludhiana (Punjab)","Jalandhar (Punjab)","Patiala (Punjab)","Mohali (Punjab)","Chennai (Tamil Nadu)","Coimbatore (Tamil Nadu)","Madurai (Tamil Nadu)","Tiruchirappalli (Tamil Nadu)","Salem (Tamil Nadu)","Hyderabad (Telangana)","Secunderabad (Telangana)","Warangal (Telangana)","Bengaluru (Karnataka)","Mysuru (Karnataka)","Mangalore (Karnataka)","Hubli (Karnataka)","Pune (Maharashtra)","Mumbai (Maharashtra)","Nagpur (Maharashtra)","Ahmedabad (Gujarat)","Gandhinagar (Gujarat)","Surat (Gujarat)","Noida (Uttar Pradesh)","Lucknow (Uttar Pradesh)","Ghaziabad (Uttar Pradesh)","Gurugram (Haryana)","Faridabad (Haryana)","Panchkula (Haryana)","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],isMultiSuggestion:!1})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 3:return g?l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Work Experience"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job"}),d.workExperience.map((G,J)=>l.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[l.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Experience ",J+1]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Job Title"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.jobTitle}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Company Name"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.companyName}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Work Duration"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.WorkDuration}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Key Achievements"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.keyAchievements}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},J)),l.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Experiences because it is predefined data formate",children:"❌ Add Experience"})]}):(te===8&&se(9),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Work Experience"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job"}),f.workExperience.map((G,J)=>l.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[l.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Experience ",J+1]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Job title",placeholder:"Data Scientist",value:G.jobTitle,onChange:ee=>ce("workExperience","jobTitle",ee,J),suggestions:["Python engineer","Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer","Software Intern","Data Science Intern","Marketing Intern","HR Intern","Operations Intern","Sales Intern","Content Writing Intern","UI/UX Design Intern","Graphic Design Intern","Customer Support Executive","Technical Support Executive","Office Assistant","Data Entry Operator","Junior Software Developer","Trainee Engineer","Research Intern","Quality Assurance Intern","Product Intern","Junior Data Analyst","Telecaller","Field Sales Executive","Backend Support Staff","Campus Ambassador","Freelance Content Writer","Part-time Graphic Designer","Online Tutor","Lab Assistant","Clerical Staff","Receptionist","Front Desk Executive"],isMultiSuggestion:!1})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Company Name",placeholder:"Onlei Teach",value:G.companyName,onChange:ee=>ce("workExperience","companyName",ee,J),suggestions:["OnleiTech","Rubico IT","Tata Consultancy Services","Infosys","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","Simplilearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"],isMultiSuggestion:!1})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Work Duration"}),l.jsx("input",{type:"text",placeholder:"Dec-2023 to Mar-2025",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${W?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:G.WorkDuration,onChange:ee=>ce("workExperience","WorkDuration",ee.target.value,J),onBlur:ee=>{const Le=ee.target.value;/^\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*to\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*$/.test(Le)?T(!1):(Wt.error(`Invalid format!
 Use as Dec-2023 to Mar-2025`,{duration:3e3,position:"top-right"}),ee.target.focus(),T(!0))}}),l.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${W?"bg-red-500":"bg-blue-500"}`})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx(pt,{label:"Key Achievements",placeholder:"Learn to visualize patterns from data using matplotlib and Built several DL models",value:G.keyAchievements,onChange:ee=>{ce("workExperience","keyAchievements",ee,J),te===9?se(10):te===10&&J===1&&se(11)},suggestions:["Education","Learning","Knowledge","Skills","Development","Growth","Discipline","Creativity","Curiosity","Critical","Thinking","Problem-Solving","Innovation","Empowerment","Potential","Opportunities","Success","Wisdom","Literacy","Training","Understanding","Mindset","Character","Focus","Dedication","Motivation","Scholarship","Study","Research","Exploration","Experience","Guidance","Curriculum","Subjects","Syllabus","Mentorship","Coaching","Academics","Assessment","Examination","Evaluation","Concepts","Projects","Presentation","Seminars","Workshops","Internship","Collaboration","Communication","Teamwork","Leadership","Career","Responsibility","Self-Study","Observation","Practical-Learning","Theoretical-Knowledge","Hardwork","Persistence","Vision","Goal-Setting","Time-Management","Experimentation","Exposure","System","Competence","Research-Skills","Interactive-Learning","Future-Ready","Holistic-Education","is","and","or","for","with","to","in","on","by","of","at","from","this","that","these","those","are","was","were","as","an","a","be","has","have","will","can","which","who","whose","where","when","how","it","its","also","but","if","so","then"],isPara:!0}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},J)),l.jsxs("button",{onClick:()=>Se("workExperience"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[l.jsx(oa,{size:16})," Add Experience"]})]}));case 4:return g?l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4  pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Projects"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 3 projects which you did in your academics"}),d.projects.map((G,J)=>l.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[l.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Project ",J+1]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Project Title"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.projectTitle}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Tools/Tech Used"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.toolsTechUsed}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},J)),l.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Projects because it is predefined data formate",children:"❌ Add Project"})]}):((te===11||te===10)&&se(12),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Projects"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 3 projects which you did in your academics"}),f.projects.map((G,J)=>l.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[l.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Project ",J+1]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Project Title"}),l.jsx("input",{type:"text",placeholder:"Transformer based translation model from scratch",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.projectTitle,onChange:ee=>ce("projects","projectTitle",ee.target.value,J)}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Tools/Tech Used",placeholder:"Tensorflow, NumPy, Pandas, Matplotlib, Multi30k Dataset, ModelSubclassing",value:G.toolsTechUsed,onChange:ee=>{if(ce("projects","toolsTechUsed",ee,J),te===12&&J===2){se(13);return}},suggestions:["TensorFlow","WeasyPrint","WebSocket (Live Rendering Protocol)","LLM's","HTML/CSS","Keras","PyTorch","Scikit-learn","XGBoost","LightGBM","CatBoost","FastAI","NumPy","Pandas","Matplotlib","Seaborn","Plotly","Altair","Statsmodels","SciPy","NLTK","SpaCy","Transformers","Gensim","BERT","GPT","Word2Vec","TF-IDF","Llama","OpenCV","Pillow","Albumentations","MMDetection","Detectron2","YOLO","MediaPipe","MNIST Dataset","CIFAR-10","CIFAR-100","ImageNet","COCO Dataset","Multi30k Dataset","Human Parsing Dataset","HuggingFace Datasets","UCI Repository","Transfer Learning","Model Subclassing","Data Augmentation","Feature Engineering","Ensemble Learning","Hyperparameter Tuning","Cross Validation","Grid Search","Early Stopping","Apache Spark","Hadoop","Airflow","Kafka","Snowflake","BigQuery","ETL Pipelines","AWS","Azure","Google Cloud Platform","IBM Cloud","Oracle Cloud","Firebase","Docker","Kubernetes","Terraform","Jenkins","GitHub Actions","Prometheus","Grafana","MySQL","PostgreSQL","MongoDB","Redis","SQLite","Elasticsearch","Cassandra","Django","Flask","FastAPI","Express.js","Spring Boot","Node.js","React","Vue.js","Angular","Next.js","Tailwind CSS","Bootstrap","SASS","Material UI","Python","Java","Advanced C++","C++","C","JavaScript","TypeScript","Go","Rust","R","Julia","SQL","Git","GitHub","GitLab","Bitbucket","Tableau","Power BI","Looker","Google Data Studio","Jupyter Notebook","Google Colab","VS Code","Anaconda","PyCharm","Postman","REST API","GraphQL","gRPC","NGINX","Apache","PyTest","Selenium","Cypress","JUnit","Postman","BeautifulSoup","Scrapy","LangChain","Streamlit","Gradio","Dash","MLflow","Weights & Biases","HuggingFace Hub","OpenAI API","Google API","Cloud Functions"]})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},J)),l.jsxs("button",{onClick:()=>Se("projects"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[l.jsx(oa,{size:16})," Add Project"]})]}));case 5:return g?l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Education"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)"}),d.education.map((G,J)=>l.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[l.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Education ",J+1]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Institution Name"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.institutionName}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Degree Name"}),l.jsx("input",{type:"text",placeholder:"Bachelor in computer application",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.degreeName}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Graduation duration"}),l.jsx("input",{type:"text",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${z?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:G.graduationYear}),l.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${z?"bg-red-500":"bg-blue-500"}`})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Current SGPA"}),l.jsx("input",{type:"text",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${I?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:G.currentSGPA}),l.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${I?"bg-red-500":"bg-blue-500"}`})]})]},J)),l.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Educations because it is predefined data formate",children:"❌ Add Education"})]}):((te===12||te===13)&&se(14),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Education"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)"}),f.education.map((G,J)=>l.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[l.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Education ",J+1]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Institution Name",placeholder:"Haridwar University",value:G.institutionName,onChange:ee=>ce("education","institutionName",ee,J),suggestions:["Haridwar University (HU)","Vidya Mandir Sector-5 BHEL (Haridwar)","Collage of Engineering roorkee (COER)","Roorkee institute of technology (RIT)","Phonix (Roorkee)","","IIT Gandhinagar","IIT Patna","IIT Bhubaneswar","IIT Mandi","IIT Jodhpur","IIT Ropar","IIT Palakkad","IIT Tirupati","IIT Dhanbad (ISM)","NIT Calicut","NIT Kurukshetra","NIT Silchar","NIT Hamirpur","NIT Jalandhar","NIT Durgapur","NIT Jaipur (MNIT)","NIT Nagpur (VNIT)","NIT Surat (SVNIT)","NIT Meghalaya","IIIT Allahabad","IIIT Pune","IIIT Lucknow","IIIT Bhubaneswar","IIIT Kancheepuram","IIIT Gwalior","IIITDM Jabalpur","IIIT Vadodara","Indian Statistical Institute (ISI)","Indian Institute of Information Technology Design & Manufacturing (IIITDM Kancheepuram)","Homi Bhabha National Institute","Indian Institute of Science Education and Research (IISER Pune)","IISER Mohali","IISER Kolkata","IISER Bhopal","IISER Thiruvananthapuram","IISER Tirupati","IISER Berhampur","Delhi University (DU)","Banaras Hindu University (BHU)","Jawaharlal Nehru University (JNU)","Jamia Millia Islamia","Aligarh Muslim University (AMU)","University of Calcutta","University of Mumbai","University of Hyderabad","Osmania University","Anna University","Visvesvaraya Technological University (VTU)","Panjab University","Kurukshetra University","Gujarat Technological University","Guru Nanak Dev University","Pondicherry University","Bharathiar University","Savitribai Phule Pune University (SPPU)","Rajiv Gandhi University of Health Sciences","Mangalore University","Symbiosis International University","Shiv Nadar University","Ashoka University","OP Jindal Global University","Amity University","Lovely Professional University (LPU)","Chandigarh University","MIT World Peace University","SRM Institute of Science and Technology","VIT Vellore","VIT Chennai","Kalinga Institute of Industrial Technology (KIIT)","Birla Institute of Technology Mesra (BIT Mesra)","Indian Institute of Foreign Trade (IIFT)","Narsee Monjee Institute of Management Studies (NMIMS)","Indian School of Business (ISB)","XLRI Jamshedpur","SP Jain Institute of Management and Research","IIM Ahmedabad","IIM Bangalore","IIM Calcutta","IIM Lucknow"],isMultiSuggestion:!1})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Degree Name",placeholder:"Batchelor in computer application (BCA)",value:G.degreeName,onChange:ee=>ce("education","degreeName",ee,J),suggestions:["Bachelor of Science (B.Sc)","Primary/Secondary","Bachelor of Technology (B.Tech)","Bachelor of Engineering (B.E)","Bachelor of Arts (B.A)","Bachelor of Commerce (B.Com)","Bachelor of Computer Applications (BCA)","Bachelor of Business Administration (BBA)","Bachelor of Fine Arts (BFA)","Bachelor of Design (B.Des)","Bachelor of Architecture (B.Arch)","Bachelor of Pharmacy (B.Pharm)","Bachelor of Laws (LLB)","Bachelor of Hotel Management (BHM)","Bachelor of Social Work (BSW)","Bachelor of Education (B.Ed)","Bachelor of Physical Education (B.P.Ed)","Bachelor of Science in Nursing (B.Sc Nursing)","Master of Science (M.Sc)","Master of Technology (M.Tech)","Master of Engineering (M.E)","Master of Computer Applications (MCA)","Master of Arts (M.A)","Master of Commerce (M.Com)","Master of Business Administration (MBA)","Master of Fine Arts (MFA)","Master of Design (M.Des)","Master of Architecture (M.Arch)","Master of Pharmacy (M.Pharm)","Master of Laws (LLM)","Master of Social Work (MSW)","Master of Education (M.Ed)","Master of Physical Education (M.P.Ed)","Master of Science in Nursing (M.Sc Nursing)","Master of Public Health (MPH)","Master of Data Science (MDS)","Master of Finance (MFin)","Master of Management Studies (MMS)","Master of Computer Science (MCS)"],isMultiSuggestion:!1})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Graduation duration"}),l.jsx("input",{type:"text",placeholder:"2023 - 2026",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${z?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:G.graduationYear,onChange:ee=>{ce("education","graduationYear",ee.target.value,J),te===14&&J===0&&se(15)},onBlur:ee=>{const Le=ee.target.value;/^\s*(\d{4})\s*-\s*(\d{4})\s*$/.test(Le)?P(!1):(Wt.error(`Invalid format! 
Use as 2023-2026`,{duration:3e3,position:"top-right"}),ee.target.focus(),P(!0))}}),l.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${z?"bg-red-500":"bg-blue-500"}`})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Current SGPA"}),l.jsx("input",{type:"text",placeholder:"?? / 10",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${I?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:G.currentSGPA,onChange:ee=>{ce("education","currentSGPA",ee.target.value,J),te===15&&J===1&&se(16)},onBlur:ee=>{const Le=ee.target.value;/^\s*([0-9](\.\d{1})?|10(\.0)?)\s*$/.test(Le)?O(!1):(Wt.error(`Invalid format! 
Use as 7 or 8.3 and less then 10`,{duration:3e3,position:"top-right"}),ee.target.focus(),O(!0))}}),l.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${I?"bg-red-500":"bg-blue-500"}`})]})]},J)),l.jsxs("button",{onClick:()=>Se("education"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[l.jsx(oa,{size:16})," Add Education"]})]}));case 6:return g?l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Certificates"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 5 high rated certificates"}),d.certificates.map((G,J)=>l.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[l.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Certificate ",J+1]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Certificate Name"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.certificateName}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Course Duration"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.courseDuration}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Provider Name"}),l.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.providerName}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]})]},J)),l.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Certificates because it is predefined data formate",children:"❌ Add Certificate"})]}):((te===16||te===15)&&se(17),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Certificates"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 5 high rated certificates"}),f.certificates.map((G,J)=>l.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[l.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Certificate ",J+1]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Certificate Name"}),l.jsx("input",{type:"text",placeholder:"Azure AI Engineer Associate",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.certificateName,onChange:ee=>ce("certificates","certificateName",ee.target.value,J)}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Course Duration"}),l.jsx("input",{type:"text",placeholder:"2 Month",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:G.courseDuration,onChange:ee=>ce("certificates","courseDuration",ee.target.value,J)}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Provider Name",placeholder:"Microsoft",value:G.providerName,onChange:ee=>{ce("certificates","providerName",ee,J),te===17&&J===0?se(18):te===18&&J===4&&se(19)},suggestions:["OnleiTech","CadPlanet","Rubico IT","Tata Consultancy Services","Infosys","NIIT Technologies","IIT Bombay","IIT Madras","IIT Kharagpur","IIT Bombay","IIT Madras","IIT Kanpur","IIT Delhi","IIT Guwahati","IIT Roorkee","IIT Ropar","IIT Bhubaneswar","IIT Gandhinagar","IIT Hyderabad","IIT Jodhpur","IIT Patna","IIT Indore","IIT Mandi","IIT (BHU) Varanasi","IIT Palakkad","IIT Tirupati","IIT Dhanbad","IIT Bhilai","IIT Goa","IIT Jammu","IIT Dharwad","NIT Warangal","NIT Tiruchirappalli","NIT Surathkal","NIT Calicut","NIT Rourkela","NIT Kurukshetra","NIT Durgapur","NIT Silchar","NIT Jaipur","NIT Allahabad","NIT Jalandhar","NIT Bhopal","NIT Nagpur","NIT Patna","NIT Raipur","NIT Agartala","NIT Srinagar","NIT Meghalaya","NIT Goa","NIT Delhi","NIT Puducherry","NIT Manipur","NIT Mizoram","NIT Nagaland","NIT Arunachal Pradesh","NIT Sikkim","NIT Uttarakhand","NIT Hamirpur","NIT Jamshedpur","NIT Andhra Pradesh","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","NIIT Technologies","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","SimpliLearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"],isMultiSuggestion:!1})}),l.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]})]},J)),l.jsxs("button",{onClick:()=>Se("certificates"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[l.jsx(oa,{size:16})," Add Certificate"]})]}));case 7:if(g)return l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Description"}),l.jsx("p",{className:"text-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Consider to edit them more and make professional"}),l.jsxs("div",{className:"space-y-2 pt-16 pb-16",children:[l.jsx("textarea",{placeholder:"Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle.",className:"w-full min-h-[145px] px-3 py-2 border rounded resize-none peer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:d.Description.UserDescription}),l.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});if(te===18||te===19){se(20);const G=setTimeout(()=>{se(21)},2e4),J=setTimeout(()=>{se(22)},4e4);return()=>{clearTimeout(G),clearTimeout(J)}}return l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Description"}),l.jsx("p",{className:"text-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Consider to edit them more and make professional"}),l.jsxs("div",{className:"space-y-2 pt-8 pb-16",children:[l.jsx("div",{className:"peer",children:l.jsx(pt,{label:"Resume Description",placeholder:"Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle.",value:f.Description.UserDescription,onChange:G=>ce("Description","UserDescription",G),suggestions:v,isTextArea:!0,isMultiSuggestion:!1})}),l.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 0:return g?l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Choose Template"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"We will frequently add more template designs to provide more resume options."}),l.jsx("div",{className:"grid grid-cols-2 gap-5",children:[1,2,3,4,5,6].map(G=>l.jsxs("div",{onClick:()=>m(J=>({...J,selectedTemplate:String(G)})),className:`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md hover:scale-95 dark:shadow-gray-600  ${d.selectedTemplate===String(G)?"border-blue-600 bg-blue-50 dark:bg-slate-800":"dark:border-gray-700"}`,children:[l.jsx("img",{src:`/Resume-Builder/Temp/temp${G}.png`,alt:`Template ${G}`,className:"w-full h-auto rounded-lg dark:filter dark:brightness-90"}),H?l.jsx("p",{className:"text-center mt-2",children:G}):l.jsx("p",{className:"text-center mt-2 dark:text-gray-200",children:L[G-1]})]},G))})]}):l.jsxs("div",{className:"space-y-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Choose Template"}),l.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"We will frequently add more template designs to provide more robust options."}),l.jsx("div",{className:"grid grid-cols-2 gap-5",children:[1,2,3,4,5,6].map(G=>l.jsxs("div",{onClick:()=>{if(oe){h(ee=>({...ee,selectedTemplate:String(G)})),te===2&&se(1);const J=setTimeout(()=>{(te===1||te===2)&&se(2)},50);return()=>clearTimeout(J)}},className:`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md hover:scale-95 dark:shadow-gray-600  ${f.selectedTemplate===String(G)?"border-blue-600 bg-blue-50 dark:bg-slate-800":"dark:border-gray-700"}`,children:[l.jsx("img",{src:`/Resume-Builder/Temp/temp${G}.png`,alt:`Template ${G}`,className:"w-full h-auto rounded-lg dark:filter dark:brightness-90"}),H?l.jsx("p",{className:"text-center mt-2",children:G}):l.jsx("p",{className:"text-center mt-2 dark:text-gray-200",children:L[G-1]})]},G))})]});default:return null}};return l.jsxs("div",{className:"flex min-h-screen bg-gray-100 dark:bg-slate-900",children:[l.jsxs("div",{className:`fixed top-0 left-0 h-full bg-white border-r shadow-md hover:shadow-xl p-0 lg:p-4 transition-all duration-300 ease-in-out
        ${H?"w-64":"w-0"} lg:w-64 dark:border-r-slate-800 dark:bg-slate-800 z-50`,children:[l.jsx("button",{onClick:()=>{y(!H),F&&U(!F)},className:"absolute top-6 pl-7 lg:hidden p-3 rounded-r-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300",children:H?l.jsx(pp,{size:20}):l.jsx(Zx,{size:20})}),l.jsxs("div",{className:`${H||"hidden lg:block"}`,children:[l.jsx("h1",{className:"text-2xl font-bold pt-20 lg:pt-4 text-center text-blue-800 dark:text-amber-300 cursor-pointer",title:"Details user have to fill",children:"Sections"}),l.jsx("div",{className:"w-[30%] h-1 bg-blue-900 mb-6 mx-auto mt-1 rounded dark:bg-amber-400"}),l.jsx("div",{className:"space-y-4 px-2",children:ye.map((G,J)=>l.jsxs("div",{onClick:()=>s(J),title:G.title,className:`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-transform duration-400 hover:scale-105
                  ${n===J?"bg-blue-50 text-blue-600 dark:bg-slate-700":""}
                  ${k.has(J)?"text-green-600 dark:text-amber-200":"text-gray-600 dark:text-zinc-200"}
                `,children:[l.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ease-in-out
                    ${k.has(J)?"bg-white border-green-600 dark:border-amber-300 dark:bg-gray-800":"border-gray-400 dark:border-gray-400"}
                  `,children:k.has(J)?l.jsx(Kx,{size:14,className:"transition-all duration-300 scale-110 opacity-100"}):l.jsx("span",{className:"text-sm transition-all duration-300 opacity-80",children:J+1})}),l.jsx("span",{className:"text-sm font-medium",children:G.key})]},J))}),l.jsxs("div",{children:[l.jsx("h2",{className:"space-y-3 mx-4 md:mx-0 mt-4 p-2 flex items-center justify-center gap-3 rounded-lg cursor-pointer transition-transform duration-400 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:text-zinc-300 dark:bg-slate-700/50 dark:hover:bg-slate-700/95",title:"It is only for Test & Present purpose. with authorized access",onClick:()=>{ie(!re)},children:"Example Processing"}),re&&l.jsx("div",{className:"mx-4 md:mx-0 dark:bg-gray-800 rounded-lg",children:l.jsx("input",{type:"password",className:`w-full mt-2 p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white ${ke?"border-red-500 dark:border-red-400 focus:ring-red-500":"border-blue-500 dark:border-blue-400 focus:ring-blue-500"} focus:outline-none focus:ring-2`,value:_e,onChange:G=>xe(G.target.value),onKeyDown:Ne,placeholder:"Enter PIN"})})]})]})]}),l.jsx("div",{className:`flex-1 pt-20 pr-3 pl-1 lg:py-8 transition-all duration-300 ${H?"ml-60":"ml-2"} lg:ml-0`,children:l.jsxs("div",{className:"md:max-w-[720px] md:mr-72 lg:ml-64 lg:max-w-[700px] xl:max-w-full xl:px-24 2xl:max-w-3xl mx-auto",children:[Ct(),l.jsx("div",{className:"mt-8 flex justify-end",children:l.jsxs("button",{title:i?"Don't cheat! Fill all details for a good resume":"Fill all details and continue to next page",onClick:He,className:`flex items-center gap-2 px-6 py-2 mt-5 text-white rounded-full transition-all duration-300 ${i?"bg-red-500 hover:bg-red-600 scale-105 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:[n===ye.length-1?"Submit":"Next",l.jsx("span",{className:`transition-all duration-300 ${i?"scale-110 rotate-90":"scale-100 rotate-0"}`,children:i?l.jsx("i",{className:"fas fa-times-circle"}):l.jsx(Xx,{size:16})})]})})]})}),l.jsxs("div",{className:`fixed top-0 right-0 h-full bg-white border-l shadow-md hover:shadow-xl p-0 md:p-4 transition-all duration-300 ease-in-out
        ${F?"w-64":"w-0"} md:w-72 dark:border-l-slate-800 dark:bg-slate-800`,children:[l.jsx("button",{onClick:()=>{U(!F),H&&y(!H)},className:"absolute top-6 mr-0 right-0 pr-8 md:hidden p-3 rounded-l-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300",children:F?l.jsx(pp,{size:20}):l.jsx(qx,{size:20})}),l.jsxs("div",{className:`${F||"hidden md:block"}`,children:[l.jsx("h1",{className:"text-2xl font-bold pt-20 md:pt-4 text-center text-blue-800 dark:text-amber-300 cursor-pointer",title:"Live preview. how your resume looks",children:"Preview"}),l.jsx("div",{className:"w-[25%] h-1 bg-blue-900 mb-4 mx-auto mt-1 rounded dark:bg-amber-400"}),l.jsx("div",{className:"px-2 w-[250px] ml-3 h-[400px] overflow-hidden bg-white dark:bg-slate-800 ",children:l.jsx("div",{className:"scale-[0.24] origin-top-left flex ",children:(g?d.selectedTemplate==1:f.selectedTemplate==1)?l.jsx(Pu,{jsonData:g?d:f}):(g?d.selectedTemplate==2:f.selectedTemplate==2)?l.jsx(Xh,{jsonData:g?d:f}):(g?d.selectedTemplate==3:f.selectedTemplate==3)?l.jsx(Yh,{jsonData:g?d:f}):(g?d.selectedTemplate==4:f.selectedTemplate==4)?l.jsx(qh,{jsonData:g?d:f}):(g?d.selectedTemplate==5:f.selectedTemplate==5)?l.jsx(Jh,{jsonData:g?d:f}):(g?d.selectedTemplate==6:f.selectedTemplate==6)?l.jsx(Zh,{jsonData:g?d:f}):l.jsx("div",{})})}),l.jsxs("div",{className:`whitespace-pre-line dark:text-slate-300 p-1 ${g?"hidden":"block"}`,children:[l.jsxs("div",{className:"flex items-center mb-3",children:[l.jsx("img",{src:"https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true",alt:"N",width:"40",height:"40"}),l.jsxs("div",{className:"ml-2",children:[l.jsx("span",{className:"font-semibold pb-[2px]",children:"Suggestion Bot"}),l.jsx("div",{className:"w-[75%] h-[3px] bg-blue-800 mx-auto mt-1 rounded dark:bg-amber-500"})]})]}),l.jsx("span",{id:"Suggestion-typing-text",className:"text-lime-700 dark:text-lime-400"})]})]})]})]})};var Xl={exports:{}},Di={},ca={exports:{}},Yl={},ql={},bp;function Hu(){if(bp)return ql;bp=1;function n(a){this.__parent=a,this.__character_count=0,this.__indent_count=-1,this.__alignment_count=0,this.__wrap_point_index=0,this.__wrap_point_character_count=0,this.__wrap_point_indent_count=-1,this.__wrap_point_alignment_count=0,this.__items=[]}n.prototype.clone_empty=function(){var a=new n(this.__parent);return a.set_indent(this.__indent_count,this.__alignment_count),a},n.prototype.item=function(a){return a<0?this.__items[this.__items.length+a]:this.__items[a]},n.prototype.has_match=function(a){for(var u=this.__items.length-1;u>=0;u--)if(this.__items[u].match(a))return!0;return!1},n.prototype.set_indent=function(a,u){this.is_empty()&&(this.__indent_count=a||0,this.__alignment_count=u||0,this.__character_count=this.__parent.get_indent_size(this.__indent_count,this.__alignment_count))},n.prototype._set_wrap_point=function(){this.__parent.wrap_line_length&&(this.__wrap_point_index=this.__items.length,this.__wrap_point_character_count=this.__character_count,this.__wrap_point_indent_count=this.__parent.next_line.__indent_count,this.__wrap_point_alignment_count=this.__parent.next_line.__alignment_count)},n.prototype._should_wrap=function(){return this.__wrap_point_index&&this.__character_count>this.__parent.wrap_line_length&&this.__wrap_point_character_count>this.__parent.next_line.__character_count},n.prototype._allow_wrap=function(){if(this._should_wrap()){this.__parent.add_new_line();var a=this.__parent.current_line;return a.set_indent(this.__wrap_point_indent_count,this.__wrap_point_alignment_count),a.__items=this.__items.slice(this.__wrap_point_index),this.__items=this.__items.slice(0,this.__wrap_point_index),a.__character_count+=this.__character_count-this.__wrap_point_character_count,this.__character_count=this.__wrap_point_character_count,a.__items[0]===" "&&(a.__items.splice(0,1),a.__character_count-=1),!0}return!1},n.prototype.is_empty=function(){return this.__items.length===0},n.prototype.last=function(){return this.is_empty()?null:this.__items[this.__items.length-1]},n.prototype.push=function(a){this.__items.push(a);var u=a.lastIndexOf(`
`);u!==-1?this.__character_count=a.length-u:this.__character_count+=a.length},n.prototype.pop=function(){var a=null;return this.is_empty()||(a=this.__items.pop(),this.__character_count-=a.length),a},n.prototype._remove_indent=function(){this.__indent_count>0&&(this.__indent_count-=1,this.__character_count-=this.__parent.indent_size)},n.prototype._remove_wrap_indent=function(){this.__wrap_point_indent_count>0&&(this.__wrap_point_indent_count-=1)},n.prototype.trim=function(){for(;this.last()===" ";)this.__items.pop(),this.__character_count-=1},n.prototype.toString=function(){var a="";return this.is_empty()?this.__parent.indent_empty_lines&&(a=this.__parent.get_indent_string(this.__indent_count)):(a=this.__parent.get_indent_string(this.__indent_count,this.__alignment_count),a+=this.__items.join("")),a};function s(a,u){this.__cache=[""],this.__indent_size=a.indent_size,this.__indent_string=a.indent_char,a.indent_with_tabs||(this.__indent_string=new Array(a.indent_size+1).join(a.indent_char)),u=u||"",a.indent_level>0&&(u=new Array(a.indent_level+1).join(this.__indent_string)),this.__base_string=u,this.__base_string_length=u.length}s.prototype.get_indent_size=function(a,u){var d=this.__base_string_length;return u=u||0,a<0&&(d=0),d+=a*this.__indent_size,d+=u,d},s.prototype.get_indent_string=function(a,u){var d=this.__base_string;return u=u||0,a<0&&(a=0,d=""),u+=a*this.__indent_size,this.__ensure_cache(u),d+=this.__cache[u],d},s.prototype.__ensure_cache=function(a){for(;a>=this.__cache.length;)this.__add_column()},s.prototype.__add_column=function(){var a=this.__cache.length,u=0,d="";this.__indent_size&&a>=this.__indent_size&&(u=Math.floor(a/this.__indent_size),a-=u*this.__indent_size,d=new Array(u+1).join(this.__indent_string)),a&&(d+=new Array(a+1).join(" ")),this.__cache.push(d)};function i(a,u){this.__indent_cache=new s(a,u),this.raw=!1,this._end_with_newline=a.end_with_newline,this.indent_size=a.indent_size,this.wrap_line_length=a.wrap_line_length,this.indent_empty_lines=a.indent_empty_lines,this.__lines=[],this.previous_line=null,this.current_line=null,this.next_line=new n(this),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1,this.__add_outputline()}return i.prototype.__add_outputline=function(){this.previous_line=this.current_line,this.current_line=this.next_line.clone_empty(),this.__lines.push(this.current_line)},i.prototype.get_line_number=function(){return this.__lines.length},i.prototype.get_indent_string=function(a,u){return this.__indent_cache.get_indent_string(a,u)},i.prototype.get_indent_size=function(a,u){return this.__indent_cache.get_indent_size(a,u)},i.prototype.is_empty=function(){return!this.previous_line&&this.current_line.is_empty()},i.prototype.add_new_line=function(a){return this.is_empty()||!a&&this.just_added_newline()?!1:(this.raw||this.__add_outputline(),!0)},i.prototype.get_code=function(a){this.trim(!0);var u=this.current_line.pop();u&&(u[u.length-1]===`
`&&(u=u.replace(/\n+$/g,"")),this.current_line.push(u)),this._end_with_newline&&this.__add_outputline();var d=this.__lines.join(`
`);return a!==`
`&&(d=d.replace(/[\n]/g,a)),d},i.prototype.set_wrap_point=function(){this.current_line._set_wrap_point()},i.prototype.set_indent=function(a,u){return a=a||0,u=u||0,this.next_line.set_indent(a,u),this.__lines.length>1?(this.current_line.set_indent(a,u),!0):(this.current_line.set_indent(),!1)},i.prototype.add_raw_token=function(a){for(var u=0;u<a.newlines;u++)this.__add_outputline();this.current_line.set_indent(-1),this.current_line.push(a.whitespace_before),this.current_line.push(a.text),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1},i.prototype.add_token=function(a){this.__add_space_before_token(),this.current_line.push(a),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=this.current_line._allow_wrap()},i.prototype.__add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&(this.non_breaking_space||this.set_wrap_point(),this.current_line.push(" "))},i.prototype.remove_indent=function(a){for(var u=this.__lines.length;a<u;)this.__lines[a]._remove_indent(),a++;this.current_line._remove_wrap_indent()},i.prototype.trim=function(a){for(a=a===void 0?!1:a,this.current_line.trim();a&&this.__lines.length>1&&this.current_line.is_empty();)this.__lines.pop(),this.current_line=this.__lines[this.__lines.length-1],this.current_line.trim();this.previous_line=this.__lines.length>1?this.__lines[this.__lines.length-2]:null},i.prototype.just_added_newline=function(){return this.current_line.is_empty()},i.prototype.just_added_blankline=function(){return this.is_empty()||this.current_line.is_empty()&&this.previous_line.is_empty()},i.prototype.ensure_empty_line_above=function(a,u){for(var d=this.__lines.length-2;d>=0;){var m=this.__lines[d];if(m.is_empty())break;if(m.item(0).indexOf(a)!==0&&m.item(-1)!==u){this.__lines.splice(d+1,0,new n(this)),this.previous_line=this.__lines[this.__lines.length-2];break}d--}},ql.Output=i,ql}var Jl={},wp;function em(){if(wp)return Jl;wp=1;function n(s,i,a,u){this.type=s,this.text=i,this.comments_before=null,this.newlines=a||0,this.whitespace_before=u||"",this.parent=null,this.next=null,this.previous=null,this.opened=null,this.closed=null,this.directives=null}return Jl.Token=n,Jl}var Zl={},kp;function tm(){return kp||(kp=1,function(n){var s="\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a",i="\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a",a="\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc",u="\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f",d="\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}",m="(?:"+d+"|["+s+a+"])",f="(?:"+d+"|["+i+a+u+"])*";n.identifier=new RegExp(m+f,"g"),n.identifierStart=new RegExp(m),n.identifierMatch=new RegExp("(?:"+d+"|["+i+a+u+"])+"),n.newline=/[\n\r\u2028\u2029]/,n.lineBreak=new RegExp(`\r
|`+n.newline.source),n.allLineBreaks=new RegExp(n.lineBreak.source,"g")}(Zl)),Zl}var eu={},zi={},Sp;function Gu(){if(Sp)return zi;Sp=1;function n(a,u){this.raw_options=s(a,u),this.disabled=this._get_boolean("disabled"),this.eol=this._get_characters("eol","auto"),this.end_with_newline=this._get_boolean("end_with_newline"),this.indent_size=this._get_number("indent_size",4),this.indent_char=this._get_characters("indent_char"," "),this.indent_level=this._get_number("indent_level"),this.preserve_newlines=this._get_boolean("preserve_newlines",!0),this.max_preserve_newlines=this._get_number("max_preserve_newlines",32786),this.preserve_newlines||(this.max_preserve_newlines=0),this.indent_with_tabs=this._get_boolean("indent_with_tabs",this.indent_char==="	"),this.indent_with_tabs&&(this.indent_char="	",this.indent_size===1&&(this.indent_size=4)),this.wrap_line_length=this._get_number("wrap_line_length",this._get_number("max_char")),this.indent_empty_lines=this._get_boolean("indent_empty_lines"),this.templating=this._get_selection_list("templating",["auto","none","angular","django","erb","handlebars","php","smarty"],["auto"])}n.prototype._get_array=function(a,u){var d=this.raw_options[a],m=u||[];return typeof d=="object"?d!==null&&typeof d.concat=="function"&&(m=d.concat()):typeof d=="string"&&(m=d.split(/[^a-zA-Z0-9_\/\-]+/)),m},n.prototype._get_boolean=function(a,u){var d=this.raw_options[a],m=d===void 0?!!u:!!d;return m},n.prototype._get_characters=function(a,u){var d=this.raw_options[a],m=u||"";return typeof d=="string"&&(m=d.replace(/\\r/,"\r").replace(/\\n/,`
`).replace(/\\t/,"	")),m},n.prototype._get_number=function(a,u){var d=this.raw_options[a];u=parseInt(u,10),isNaN(u)&&(u=0);var m=parseInt(d,10);return isNaN(m)&&(m=u),m},n.prototype._get_selection=function(a,u,d){var m=this._get_selection_list(a,u,d);if(m.length!==1)throw new Error("Invalid Option Value: The option '"+a+`' can only be one of the following values:
`+u+`
You passed in: '`+this.raw_options[a]+"'");return m[0]},n.prototype._get_selection_list=function(a,u,d){if(!u||u.length===0)throw new Error("Selection list cannot be empty.");if(d=d||[u[0]],!this._is_valid_selection(d,u))throw new Error("Invalid Default Value!");var m=this._get_array(a,d);if(!this._is_valid_selection(m,u))throw new Error("Invalid Option Value: The option '"+a+`' can contain only the following values:
`+u+`
You passed in: '`+this.raw_options[a]+"'");return m},n.prototype._is_valid_selection=function(a,u){return a.length&&u.length&&!a.some(function(d){return u.indexOf(d)===-1})};function s(a,u){var d={};a=i(a);var m;for(m in a)m!==u&&(d[m]=a[m]);if(u&&a[u])for(m in a[u])d[m]=a[u][m];return d}function i(a){var u={},d;for(d in a){var m=d.replace(/-/g,"_");u[m]=a[d]}return u}return zi.Options=n,zi.normalizeOpts=i,zi.mergeOpts=s,zi}var Np;function nm(){if(Np)return eu;Np=1;var n=Gu().Options,s=["before-newline","after-newline","preserve-newline"];function i(a){n.call(this,a,"js");var u=this.raw_options.brace_style||null;u==="expand-strict"?this.raw_options.brace_style="expand":u==="collapse-preserve-inline"?this.raw_options.brace_style="collapse,preserve-inline":this.raw_options.braces_on_own_line!==void 0&&(this.raw_options.brace_style=this.raw_options.braces_on_own_line?"expand":"collapse");var d=this._get_selection_list("brace_style",["collapse","expand","end-expand","none","preserve-inline"]);this.brace_preserve_inline=!1,this.brace_style="collapse";for(var m=0;m<d.length;m++)d[m]==="preserve-inline"?this.brace_preserve_inline=!0:this.brace_style=d[m];this.unindent_chained_methods=this._get_boolean("unindent_chained_methods"),this.break_chained_methods=this._get_boolean("break_chained_methods"),this.space_in_paren=this._get_boolean("space_in_paren"),this.space_in_empty_paren=this._get_boolean("space_in_empty_paren"),this.jslint_happy=this._get_boolean("jslint_happy"),this.space_after_anon_function=this._get_boolean("space_after_anon_function"),this.space_after_named_function=this._get_boolean("space_after_named_function"),this.keep_array_indentation=this._get_boolean("keep_array_indentation"),this.space_before_conditional=this._get_boolean("space_before_conditional",!0),this.unescape_strings=this._get_boolean("unescape_strings"),this.e4x=this._get_boolean("e4x"),this.comma_first=this._get_boolean("comma_first"),this.operator_position=this._get_selection("operator_position",s),this.test_output_raw=this._get_boolean("test_output_raw"),this.jslint_happy&&(this.space_after_anon_function=!0)}return i.prototype=new n,eu.Options=i,eu}var Lr={},tu={},jp;function Vu(){if(jp)return tu;jp=1;var n=RegExp.prototype.hasOwnProperty("sticky");function s(i){this.__input=i||"",this.__input_length=this.__input.length,this.__position=0}return s.prototype.restart=function(){this.__position=0},s.prototype.back=function(){this.__position>0&&(this.__position-=1)},s.prototype.hasNext=function(){return this.__position<this.__input_length},s.prototype.next=function(){var i=null;return this.hasNext()&&(i=this.__input.charAt(this.__position),this.__position+=1),i},s.prototype.peek=function(i){var a=null;return i=i||0,i+=this.__position,i>=0&&i<this.__input_length&&(a=this.__input.charAt(i)),a},s.prototype.__match=function(i,a){i.lastIndex=a;var u=i.exec(this.__input);return u&&!(n&&i.sticky)&&u.index!==a&&(u=null),u},s.prototype.test=function(i,a){return a=a||0,a+=this.__position,a>=0&&a<this.__input_length?!!this.__match(i,a):!1},s.prototype.testChar=function(i,a){var u=this.peek(a);return i.lastIndex=0,u!==null&&i.test(u)},s.prototype.match=function(i){var a=this.__match(i,this.__position);return a?this.__position+=a[0].length:a=null,a},s.prototype.read=function(i,a,u){var d="",m;return i&&(m=this.match(i),m&&(d+=m[0])),a&&(m||!i)&&(d+=this.readUntil(a,u)),d},s.prototype.readUntil=function(i,a){var u="",d=this.__position;i.lastIndex=this.__position;var m=i.exec(this.__input);return m?(d=m.index,a&&(d+=m[0].length)):d=this.__input_length,u=this.__input.substring(this.__position,d),this.__position=d,u},s.prototype.readUntilAfter=function(i){return this.readUntil(i,!0)},s.prototype.get_regexp=function(i,a){var u=null,d="g";return a&&n&&(d="y"),typeof i=="string"&&i!==""?u=new RegExp(i,d):i&&(u=new RegExp(i.source,d)),u},s.prototype.get_literal_regexp=function(i){return RegExp(i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))},s.prototype.peekUntilAfter=function(i){var a=this.__position,u=this.readUntilAfter(i);return this.__position=a,u},s.prototype.lookBack=function(i){var a=this.__position-1;return a>=i.length&&this.__input.substring(a-i.length,a).toLowerCase()===i},tu.InputScanner=s,tu}var da={},nu={},Ep;function Vv(){if(Ep)return nu;Ep=1;function n(s){this.__tokens=[],this.__tokens_length=this.__tokens.length,this.__position=0,this.__parent_token=s}return n.prototype.restart=function(){this.__position=0},n.prototype.isEmpty=function(){return this.__tokens_length===0},n.prototype.hasNext=function(){return this.__position<this.__tokens_length},n.prototype.next=function(){var s=null;return this.hasNext()&&(s=this.__tokens[this.__position],this.__position+=1),s},n.prototype.peek=function(s){var i=null;return s=s||0,s+=this.__position,s>=0&&s<this.__tokens_length&&(i=this.__tokens[s]),i},n.prototype.add=function(s){this.__parent_token&&(s.parent=this.__parent_token),this.__tokens.push(s),this.__tokens_length+=1},nu.TokenStream=n,nu}var ru={},iu={},Cp;function Va(){if(Cp)return iu;Cp=1;function n(s,i){this._input=s,this._starting_pattern=null,this._match_pattern=null,this._until_pattern=null,this._until_after=!1,i&&(this._starting_pattern=this._input.get_regexp(i._starting_pattern,!0),this._match_pattern=this._input.get_regexp(i._match_pattern,!0),this._until_pattern=this._input.get_regexp(i._until_pattern),this._until_after=i._until_after)}return n.prototype.read=function(){var s=this._input.read(this._starting_pattern);return(!this._starting_pattern||s)&&(s+=this._input.read(this._match_pattern,this._until_pattern,this._until_after)),s},n.prototype.read_match=function(){return this._input.match(this._match_pattern)},n.prototype.until_after=function(s){var i=this._create();return i._until_after=!0,i._until_pattern=this._input.get_regexp(s),i._update(),i},n.prototype.until=function(s){var i=this._create();return i._until_after=!1,i._until_pattern=this._input.get_regexp(s),i._update(),i},n.prototype.starting_with=function(s){var i=this._create();return i._starting_pattern=this._input.get_regexp(s,!0),i._update(),i},n.prototype.matching=function(s){var i=this._create();return i._match_pattern=this._input.get_regexp(s,!0),i._update(),i},n.prototype._create=function(){return new n(this._input,this)},n.prototype._update=function(){},iu.Pattern=n,iu}var Tp;function Kv(){if(Tp)return ru;Tp=1;var n=Va().Pattern;function s(i,a){n.call(this,i,a),a?this._line_regexp=this._input.get_regexp(a._line_regexp):this.__set_whitespace_patterns("",""),this.newline_count=0,this.whitespace_before_token=""}return s.prototype=new n,s.prototype.__set_whitespace_patterns=function(i,a){i+="\\t ",a+="\\n\\r",this._match_pattern=this._input.get_regexp("["+i+a+"]+",!0),this._newline_regexp=this._input.get_regexp("\\r\\n|["+a+"]")},s.prototype.read=function(){this.newline_count=0,this.whitespace_before_token="";var i=this._input.read(this._match_pattern);if(i===" ")this.whitespace_before_token=" ";else if(i){var a=this.__split(this._newline_regexp,i);this.newline_count=a.length-1,this.whitespace_before_token=a[this.newline_count]}return i},s.prototype.matching=function(i,a){var u=this._create();return u.__set_whitespace_patterns(i,a),u._update(),u},s.prototype._create=function(){return new s(this._input,this)},s.prototype.__split=function(i,a){i.lastIndex=0;for(var u=0,d=[],m=i.exec(a);m;)d.push(a.substring(u,m.index)),u=m.index+m[0].length,m=i.exec(a);return u<a.length?d.push(a.substring(u,a.length)):d.push(""),d},ru.WhitespacePattern=s,ru}var Pp;function Ra(){if(Pp)return da;Pp=1;var n=Vu().InputScanner,s=em().Token,i=Vv().TokenStream,a=Kv().WhitespacePattern,u={START:"TK_START",RAW:"TK_RAW",EOF:"TK_EOF"},d=function(m,f){this._input=new n(m),this._options=f||{},this.__tokens=null,this._patterns={},this._patterns.whitespace=new a(this._input)};return d.prototype.tokenize=function(){this._input.restart(),this.__tokens=new i,this._reset();for(var m,f=new s(u.START,""),h=null,_=[],v=new i;f.type!==u.EOF;){for(m=this._get_next_token(f,h);this._is_comment(m);)v.add(m),m=this._get_next_token(f,h);v.isEmpty()||(m.comments_before=v,v=new i),m.parent=h,this._is_opening(m)?(_.push(h),h=m):h&&this._is_closing(m,h)&&(m.opened=h,h.closed=m,h=_.pop(),m.parent=h),m.previous=f,f.next=m,this.__tokens.add(m),f=m}return this.__tokens},d.prototype._is_first_token=function(){return this.__tokens.isEmpty()},d.prototype._reset=function(){},d.prototype._get_next_token=function(m,f){this._readWhitespace();var h=this._input.read(/.+/g);return h?this._create_token(u.RAW,h):this._create_token(u.EOF,"")},d.prototype._is_comment=function(m){return!1},d.prototype._is_opening=function(m){return!1},d.prototype._is_closing=function(m,f){return!1},d.prototype._create_token=function(m,f){var h=new s(m,f,this._patterns.whitespace.newline_count,this._patterns.whitespace.whitespace_before_token);return h},d.prototype._readWhitespace=function(){return this._patterns.whitespace.read()},da.Tokenizer=d,da.TOKEN=u,da}var su={},Ip;function Ku(){if(Ip)return su;Ip=1;function n(s,i){s=typeof s=="string"?s:s.source,i=typeof i=="string"?i:i.source,this.__directives_block_pattern=new RegExp(s+/ beautify( \w+[:]\w+)+ /.source+i,"g"),this.__directive_pattern=/ (\w+)[:](\w+)/g,this.__directives_end_ignore_pattern=new RegExp(s+/\sbeautify\signore:end\s/.source+i,"g")}return n.prototype.get_directives=function(s){if(!s.match(this.__directives_block_pattern))return null;var i={};this.__directive_pattern.lastIndex=0;for(var a=this.__directive_pattern.exec(s);a;)i[a[1]]=a[2],a=this.__directive_pattern.exec(s);return i},n.prototype.readIgnored=function(s){return s.readUntilAfter(this.__directives_end_ignore_pattern)},su.Directives=n,su}var au={},Ap;function rm(){if(Ap)return au;Ap=1;var n=Va().Pattern,s={django:!1,erb:!1,handlebars:!1,php:!1,smarty:!1,angular:!1};function i(a,u){n.call(this,a,u),this.__template_pattern=null,this._disabled=Object.assign({},s),this._excluded=Object.assign({},s),u&&(this.__template_pattern=this._input.get_regexp(u.__template_pattern),this._excluded=Object.assign(this._excluded,u._excluded),this._disabled=Object.assign(this._disabled,u._disabled));var d=new n(a);this.__patterns={handlebars_comment:d.starting_with(/{{!--/).until_after(/--}}/),handlebars_unescaped:d.starting_with(/{{{/).until_after(/}}}/),handlebars:d.starting_with(/{{/).until_after(/}}/),php:d.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),erb:d.starting_with(/<%[^%]/).until_after(/[^%]%>/),django:d.starting_with(/{%/).until_after(/%}/),django_value:d.starting_with(/{{/).until_after(/}}/),django_comment:d.starting_with(/{#/).until_after(/#}/),smarty:d.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),smarty_comment:d.starting_with(/{\*/).until_after(/\*}/),smarty_literal:d.starting_with(/{literal}/).until_after(/{\/literal}/)}}return i.prototype=new n,i.prototype._create=function(){return new i(this._input,this)},i.prototype._update=function(){this.__set_templated_pattern()},i.prototype.disable=function(a){var u=this._create();return u._disabled[a]=!0,u._update(),u},i.prototype.read_options=function(a){var u=this._create();for(var d in s)u._disabled[d]=a.templating.indexOf(d)===-1;return u._update(),u},i.prototype.exclude=function(a){var u=this._create();return u._excluded[a]=!0,u._update(),u},i.prototype.read=function(){var a="";this._match_pattern?a=this._input.read(this._starting_pattern):a=this._input.read(this._starting_pattern,this.__template_pattern);for(var u=this._read_template();u;)this._match_pattern?u+=this._input.read(this._match_pattern):u+=this._input.readUntil(this.__template_pattern),a+=u,u=this._read_template();return this._until_after&&(a+=this._input.readUntilAfter(this._until_pattern)),a},i.prototype.__set_templated_pattern=function(){var a=[];this._disabled.php||a.push(this.__patterns.php._starting_pattern.source),this._disabled.handlebars||a.push(this.__patterns.handlebars._starting_pattern.source),this._disabled.angular||a.push(this.__patterns.handlebars._starting_pattern.source),this._disabled.erb||a.push(this.__patterns.erb._starting_pattern.source),this._disabled.django||(a.push(this.__patterns.django._starting_pattern.source),a.push(this.__patterns.django_value._starting_pattern.source),a.push(this.__patterns.django_comment._starting_pattern.source)),this._disabled.smarty||a.push(this.__patterns.smarty._starting_pattern.source),this._until_pattern&&a.push(this._until_pattern.source),this.__template_pattern=this._input.get_regexp("(?:"+a.join("|")+")")},i.prototype._read_template=function(){var a="",u=this._input.peek();if(u==="<"){var d=this._input.peek(1);!this._disabled.php&&!this._excluded.php&&d==="?"&&(a=a||this.__patterns.php.read()),!this._disabled.erb&&!this._excluded.erb&&d==="%"&&(a=a||this.__patterns.erb.read())}else u==="{"&&(!this._disabled.handlebars&&!this._excluded.handlebars&&(a=a||this.__patterns.handlebars_comment.read(),a=a||this.__patterns.handlebars_unescaped.read(),a=a||this.__patterns.handlebars.read()),this._disabled.django||(!this._excluded.django&&!this._excluded.handlebars&&(a=a||this.__patterns.django_value.read()),this._excluded.django||(a=a||this.__patterns.django_comment.read(),a=a||this.__patterns.django.read())),this._disabled.smarty||this._disabled.django&&this._disabled.handlebars&&(a=a||this.__patterns.smarty_comment.read(),a=a||this.__patterns.smarty_literal.read(),a=a||this.__patterns.smarty.read()));return a},au.TemplatablePattern=i,au}var Rp;function fa(){if(Rp)return Lr;Rp=1;var n=Vu().InputScanner,s=Ra().Tokenizer,i=Ra().TOKEN,a=Ku().Directives,u=tm(),d=Va().Pattern,m=rm().TemplatablePattern;function f(P,I){return I.indexOf(P)!==-1}var h={START_EXPR:"TK_START_EXPR",END_EXPR:"TK_END_EXPR",START_BLOCK:"TK_START_BLOCK",END_BLOCK:"TK_END_BLOCK",WORD:"TK_WORD",RESERVED:"TK_RESERVED",SEMICOLON:"TK_SEMICOLON",STRING:"TK_STRING",EQUALS:"TK_EQUALS",OPERATOR:"TK_OPERATOR",COMMA:"TK_COMMA",BLOCK_COMMENT:"TK_BLOCK_COMMENT",COMMENT:"TK_COMMENT",DOT:"TK_DOT",UNKNOWN:"TK_UNKNOWN",START:i.START,RAW:i.RAW,EOF:i.EOF},_=new a(/\/\*/,/\*\//),v=/0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/,k=/[0-9]/,w=/[^\d\.]/,j=">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "),E=">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";E=E.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),E="\\?\\.(?!\\d) "+E,E=E.replace(/ /g,"|");var B=new RegExp(E),b="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","),g=b.concat(["do","in","of","else","get","set","new","catch","finally","typeof","yield","async","await","from","as","class","extends"]),S=new RegExp("^(?:"+g.join("|")+")$"),W,T=function(P,I){s.call(this,P,I),this._patterns.whitespace=this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,/\u2028\u2029/.source);var O=new d(this._input),H=new m(this._input).read_options(this._options);this.__patterns={template:H,identifier:H.starting_with(u.identifier).matching(u.identifierMatch),number:O.matching(v),punct:O.matching(B),comment:O.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),block_comment:O.starting_with(/\/\*/).until_after(/\*\//),html_comment_start:O.matching(/<!--/),html_comment_end:O.matching(/-->/),include:O.starting_with(/#include/).until_after(u.lineBreak),shebang:O.starting_with(/#!/).until_after(u.lineBreak),xml:O.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),single_quote:H.until(/['\\\n\r\u2028\u2029]/),double_quote:H.until(/["\\\n\r\u2028\u2029]/),template_text:H.until(/[`\\$]/),template_expression:H.until(/[`}\\]/)}};T.prototype=new s,T.prototype._is_comment=function(P){return P.type===h.COMMENT||P.type===h.BLOCK_COMMENT||P.type===h.UNKNOWN},T.prototype._is_opening=function(P){return P.type===h.START_BLOCK||P.type===h.START_EXPR},T.prototype._is_closing=function(P,I){return(P.type===h.END_BLOCK||P.type===h.END_EXPR)&&I&&(P.text==="]"&&I.text==="["||P.text===")"&&I.text==="("||P.text==="}"&&I.text==="{")},T.prototype._reset=function(){W=!1},T.prototype._get_next_token=function(P,I){var O=null;this._readWhitespace();var H=this._input.peek();return H===null?this._create_token(h.EOF,""):(O=O||this._read_non_javascript(H),O=O||this._read_string(H),O=O||this._read_pair(H,this._input.peek(1)),O=O||this._read_word(P),O=O||this._read_singles(H),O=O||this._read_comment(H),O=O||this._read_regexp(H,P),O=O||this._read_xml(H,P),O=O||this._read_punctuation(),O=O||this._create_token(h.UNKNOWN,this._input.next()),O)},T.prototype._read_word=function(P){var I;if(I=this.__patterns.identifier.read(),I!=="")return I=I.replace(u.allLineBreaks,`
`),!(P.type===h.DOT||P.type===h.RESERVED&&(P.text==="set"||P.text==="get"))&&S.test(I)?(I==="in"||I==="of")&&(P.type===h.WORD||P.type===h.STRING)?this._create_token(h.OPERATOR,I):this._create_token(h.RESERVED,I):this._create_token(h.WORD,I);if(I=this.__patterns.number.read(),I!=="")return this._create_token(h.WORD,I)},T.prototype._read_singles=function(P){var I=null;return P==="("||P==="["?I=this._create_token(h.START_EXPR,P):P===")"||P==="]"?I=this._create_token(h.END_EXPR,P):P==="{"?I=this._create_token(h.START_BLOCK,P):P==="}"?I=this._create_token(h.END_BLOCK,P):P===";"?I=this._create_token(h.SEMICOLON,P):P==="."&&w.test(this._input.peek(1))?I=this._create_token(h.DOT,P):P===","&&(I=this._create_token(h.COMMA,P)),I&&this._input.next(),I},T.prototype._read_pair=function(P,I){var O=null;return P==="#"&&I==="{"&&(O=this._create_token(h.START_BLOCK,P+I)),O&&(this._input.next(),this._input.next()),O},T.prototype._read_punctuation=function(){var P=this.__patterns.punct.read();if(P!=="")return P==="="?this._create_token(h.EQUALS,P):P==="?."?this._create_token(h.DOT,P):this._create_token(h.OPERATOR,P)},T.prototype._read_non_javascript=function(P){var I="";if(P==="#"){if(this._is_first_token()&&(I=this.__patterns.shebang.read(),I))return this._create_token(h.UNKNOWN,I.trim()+`
`);if(I=this.__patterns.include.read(),I)return this._create_token(h.UNKNOWN,I.trim()+`
`);P=this._input.next();var O="#";if(this._input.hasNext()&&this._input.testChar(k)){do P=this._input.next(),O+=P;while(this._input.hasNext()&&P!=="#"&&P!=="=");return P==="#"||(this._input.peek()==="["&&this._input.peek(1)==="]"?(O+="[]",this._input.next(),this._input.next()):this._input.peek()==="{"&&this._input.peek(1)==="}"&&(O+="{}",this._input.next(),this._input.next())),this._create_token(h.WORD,O)}this._input.back()}else if(P==="<"&&this._is_first_token()){if(I=this.__patterns.html_comment_start.read(),I){for(;this._input.hasNext()&&!this._input.testChar(u.newline);)I+=this._input.next();return W=!0,this._create_token(h.COMMENT,I)}}else if(W&&P==="-"&&(I=this.__patterns.html_comment_end.read(),I))return W=!1,this._create_token(h.COMMENT,I);return null},T.prototype._read_comment=function(P){var I=null;if(P==="/"){var O="";if(this._input.peek(1)==="*"){O=this.__patterns.block_comment.read();var H=_.get_directives(O);H&&H.ignore==="start"&&(O+=_.readIgnored(this._input)),O=O.replace(u.allLineBreaks,`
`),I=this._create_token(h.BLOCK_COMMENT,O),I.directives=H}else this._input.peek(1)==="/"&&(O=this.__patterns.comment.read(),I=this._create_token(h.COMMENT,O))}return I},T.prototype._read_string=function(P){if(P==="`"||P==="'"||P==='"'){var I=this._input.next();return this.has_char_escapes=!1,P==="`"?I+=this._read_string_recursive("`",!0,"${"):I+=this._read_string_recursive(P),this.has_char_escapes&&this._options.unescape_strings&&(I=z(I)),this._input.peek()===P&&(I+=this._input.next()),I=I.replace(u.allLineBreaks,`
`),this._create_token(h.STRING,I)}return null},T.prototype._allow_regexp_or_xml=function(P){return P.type===h.RESERVED&&f(P.text,["return","case","throw","else","do","typeof","yield"])||P.type===h.END_EXPR&&P.text===")"&&P.opened.previous.type===h.RESERVED&&f(P.opened.previous.text,["if","while","for"])||f(P.type,[h.COMMENT,h.START_EXPR,h.START_BLOCK,h.START,h.END_BLOCK,h.OPERATOR,h.EQUALS,h.EOF,h.SEMICOLON,h.COMMA])},T.prototype._read_regexp=function(P,I){if(P==="/"&&this._allow_regexp_or_xml(I)){for(var O=this._input.next(),H=!1,y=!1;this._input.hasNext()&&(H||y||this._input.peek()!==P)&&!this._input.testChar(u.newline);)O+=this._input.peek(),H?H=!1:(H=this._input.peek()==="\\",this._input.peek()==="["?y=!0:this._input.peek()==="]"&&(y=!1)),this._input.next();return this._input.peek()===P&&(O+=this._input.next(),O+=this._input.read(u.identifier)),this._create_token(h.STRING,O)}return null},T.prototype._read_xml=function(P,I){if(this._options.e4x&&P==="<"&&this._allow_regexp_or_xml(I)){var O="",H=this.__patterns.xml.read_match();if(H){for(var y=H[2].replace(/^{\s+/,"{").replace(/\s+}$/,"}"),F=y.indexOf("{")===0,U=0;H;){var re=!!H[1],ie=H[2],_e=!!H[H.length-1]||ie.slice(0,8)==="![CDATA[";if(!_e&&(ie===y||F&&ie.replace(/^{\s+/,"{").replace(/\s+}$/,"}"))&&(re?--U:++U),O+=H[0],U<=0)break;H=this.__patterns.xml.read_match()}return H||(O+=this._input.match(/[\s\S]*/g)[0]),O=O.replace(u.allLineBreaks,`
`),this._create_token(h.STRING,O)}}return null};function z(P){for(var I="",O=0,H=new n(P),y=null;H.hasNext();)if(y=H.match(/([\s]|[^\\]|\\\\)+/g),y&&(I+=y[0]),H.peek()==="\\"){if(H.next(),H.peek()==="x")y=H.match(/x([0-9A-Fa-f]{2})/g);else if(H.peek()==="u")y=H.match(/u([0-9A-Fa-f]{4})/g),y||(y=H.match(/u\{([0-9A-Fa-f]+)\}/g));else{I+="\\",H.hasNext()&&(I+=H.next());continue}if(!y||(O=parseInt(y[1],16),O>126&&O<=255&&y[0].indexOf("x")===0))return P;O>=0&&O<32||O>1114111?I+="\\"+y[0]:O===34||O===39||O===92?I+="\\"+String.fromCharCode(O):I+=String.fromCharCode(O)}return I}return T.prototype._read_string_recursive=function(P,I,O){var H,y;P==="'"?y=this.__patterns.single_quote:P==='"'?y=this.__patterns.double_quote:P==="`"?y=this.__patterns.template_text:P==="}"&&(y=this.__patterns.template_expression);for(var F=y.read(),U="";this._input.hasNext();){if(U=this._input.next(),U===P||!I&&u.newline.test(U)){this._input.back();break}else U==="\\"&&this._input.hasNext()?(H=this._input.peek(),H==="x"||H==="u"?this.has_char_escapes=!0:H==="\r"&&this._input.peek(1)===`
`&&this._input.next(),U+=this._input.next()):O&&(O==="${"&&U==="$"&&this._input.peek()==="{"&&(U+=this._input.next()),O===U&&(P==="`"?U+=this._read_string_recursive("}",I,"`"):U+=this._read_string_recursive("`",I,"${"),this._input.hasNext()&&(U+=this._input.next())));U+=y.read(),F+=U}return F},Lr.Tokenizer=T,Lr.TOKEN=h,Lr.positionable_operators=j.slice(),Lr.line_starters=b.slice(),Lr}var Op;function Qv(){if(Op)return Yl;Op=1;var n=Hu().Output,s=em().Token,i=tm(),a=nm().Options,u=fa().Tokenizer,d=fa().line_starters,m=fa().positionable_operators,f=fa().TOKEN;function h(y,F){return F.indexOf(y)!==-1}function _(y){return y.replace(/^\s+/g,"")}function v(y){for(var F={},U=0;U<y.length;U++)F[y[U].replace(/-/g,"_")]=y[U];return F}function k(y,F){return y&&y.type===f.RESERVED&&y.text===F}function w(y,F){return y&&y.type===f.RESERVED&&h(y.text,F)}var j=["case","return","do","if","throw","else","await","break","continue","async"],E=["before-newline","after-newline","preserve-newline"],B=v(E),b=[B.before_newline,B.preserve_newline],g={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"};function S(y,F){F.multiline_frame||F.mode===g.ForInitializer||F.mode===g.Conditional||y.remove_indent(F.start_line_index)}function W(y){y=y.replace(i.allLineBreaks,`
`);for(var F=[],U=y.indexOf(`
`);U!==-1;)F.push(y.substring(0,U)),y=y.substring(U+1),U=y.indexOf(`
`);return y.length&&F.push(y),F}function T(y){return y===g.ArrayLiteral}function z(y){return h(y,[g.Expression,g.ForInitializer,g.Conditional])}function P(y,F){for(var U=0;U<y.length;U++){var re=y[U].trim();if(re.charAt(0)!==F)return!1}return!0}function I(y,F){for(var U=0,re=y.length,ie;U<re;U++)if(ie=y[U],ie&&ie.indexOf(F)!==0)return!1;return!0}function O(y,F){F=F||{},this._source_text=y||"",this._output=null,this._tokens=null,this._last_last_text=null,this._flags=null,this._previous_flags=null,this._flag_store=null,this._options=new a(F)}O.prototype.create_flags=function(y,F){var U=0;y&&(U=y.indentation_level,!this._output.just_added_newline()&&y.line_indent_level>U&&(U=y.line_indent_level));var re={mode:F,parent:y,last_token:y?y.last_token:new s(f.START_BLOCK,""),last_word:y?y.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,inline_frame:!1,if_block:!1,else_block:!1,class_start_block:!1,do_block:!1,do_while:!1,import_block:!1,in_case_statement:!1,in_case:!1,case_body:!1,case_block:!1,indentation_level:U,alignment:0,line_indent_level:y?y.line_indent_level:U,start_line_index:this._output.get_line_number(),ternary_depth:0};return re},O.prototype._reset=function(y){var F=y.match(/^[\t ]*/)[0];this._last_last_text="",this._output=new n(this._options,F),this._output.raw=this._options.test_output_raw,this._flag_store=[],this.set_mode(g.BlockStatement);var U=new u(y,this._options);return this._tokens=U.tokenize(),y},O.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var y,F=this._reset(this._source_text),U=this._options.eol;this._options.eol==="auto"&&(U=`
`,F&&i.lineBreak.test(F||"")&&(U=F.match(i.lineBreak)[0]));for(var re=this._tokens.next();re;)this.handle_token(re),this._last_last_text=this._flags.last_token.text,this._flags.last_token=re,re=this._tokens.next();return y=this._output.get_code(U),y},O.prototype.handle_token=function(y,F){y.type===f.START_EXPR?this.handle_start_expr(y):y.type===f.END_EXPR?this.handle_end_expr(y):y.type===f.START_BLOCK?this.handle_start_block(y):y.type===f.END_BLOCK?this.handle_end_block(y):y.type===f.WORD?this.handle_word(y):y.type===f.RESERVED?this.handle_word(y):y.type===f.SEMICOLON?this.handle_semicolon(y):y.type===f.STRING?this.handle_string(y):y.type===f.EQUALS?this.handle_equals(y):y.type===f.OPERATOR?this.handle_operator(y):y.type===f.COMMA?this.handle_comma(y):y.type===f.BLOCK_COMMENT?this.handle_block_comment(y,F):y.type===f.COMMENT?this.handle_comment(y,F):y.type===f.DOT?this.handle_dot(y):y.type===f.EOF?this.handle_eof(y):y.type===f.UNKNOWN?this.handle_unknown(y,F):this.handle_unknown(y,F)},O.prototype.handle_whitespace_and_comments=function(y,F){var U=y.newlines,re=this._options.keep_array_indentation&&T(this._flags.mode);if(y.comments_before)for(var ie=y.comments_before.next();ie;)this.handle_whitespace_and_comments(ie,F),this.handle_token(ie,F),ie=y.comments_before.next();if(re)for(var _e=0;_e<U;_e+=1)this.print_newline(_e>0,F);else if(this._options.max_preserve_newlines&&U>this._options.max_preserve_newlines&&(U=this._options.max_preserve_newlines),this._options.preserve_newlines&&U>1){this.print_newline(!1,F);for(var xe=1;xe<U;xe+=1)this.print_newline(!0,F)}};var H=["async","break","continue","return","throw","yield"];return O.prototype.allow_wrap_or_preserved_newline=function(y,F){if(F=F===void 0?!1:F,!this._output.just_added_newline()){var U=this._options.preserve_newlines&&y.newlines||F,re=h(this._flags.last_token.text,m)||h(y.text,m);if(re){var ie=h(this._flags.last_token.text,m)&&h(this._options.operator_position,b)||h(y.text,m);U=U&&ie}if(U)this.print_newline(!1,!0);else if(this._options.wrap_line_length){if(w(this._flags.last_token,H))return;this._output.set_wrap_point()}}},O.prototype.print_newline=function(y,F){if(!F&&this._flags.last_token.text!==";"&&this._flags.last_token.text!==","&&this._flags.last_token.text!=="="&&(this._flags.last_token.type!==f.OPERATOR||this._flags.last_token.text==="--"||this._flags.last_token.text==="++"))for(var U=this._tokens.peek();this._flags.mode===g.Statement&&!(this._flags.if_block&&k(U,"else"))&&!this._flags.do_block;)this.restore_mode();this._output.add_new_line(y)&&(this._flags.multiline_frame=!0)},O.prototype.print_token_line_indentation=function(y){this._output.just_added_newline()&&(this._options.keep_array_indentation&&y.newlines&&(y.text==="["||T(this._flags.mode))?(this._output.current_line.set_indent(-1),this._output.current_line.push(y.whitespace_before),this._output.space_before_token=!1):this._output.set_indent(this._flags.indentation_level,this._flags.alignment)&&(this._flags.line_indent_level=this._flags.indentation_level))},O.prototype.print_token=function(y){if(this._output.raw){this._output.add_raw_token(y);return}if(this._options.comma_first&&y.previous&&y.previous.type===f.COMMA&&this._output.just_added_newline()&&this._output.previous_line.last()===","){var F=this._output.previous_line.pop();this._output.previous_line.is_empty()&&(this._output.previous_line.push(F),this._output.trim(!0),this._output.current_line.pop(),this._output.trim()),this.print_token_line_indentation(y),this._output.add_token(","),this._output.space_before_token=!0}this.print_token_line_indentation(y),this._output.non_breaking_space=!0,this._output.add_token(y.text),this._output.previous_token_wrapped&&(this._flags.multiline_frame=!0)},O.prototype.indent=function(){this._flags.indentation_level+=1,this._output.set_indent(this._flags.indentation_level,this._flags.alignment)},O.prototype.deindent=function(){this._flags.indentation_level>0&&(!this._flags.parent||this._flags.indentation_level>this._flags.parent.indentation_level)&&(this._flags.indentation_level-=1,this._output.set_indent(this._flags.indentation_level,this._flags.alignment))},O.prototype.set_mode=function(y){this._flags?(this._flag_store.push(this._flags),this._previous_flags=this._flags):this._previous_flags=this.create_flags(null,y),this._flags=this.create_flags(this._previous_flags,y),this._output.set_indent(this._flags.indentation_level,this._flags.alignment)},O.prototype.restore_mode=function(){this._flag_store.length>0&&(this._previous_flags=this._flags,this._flags=this._flag_store.pop(),this._previous_flags.mode===g.Statement&&S(this._output,this._previous_flags),this._output.set_indent(this._flags.indentation_level,this._flags.alignment))},O.prototype.start_of_object_property=function(){return this._flags.parent.mode===g.ObjectLiteral&&this._flags.mode===g.Statement&&(this._flags.last_token.text===":"&&this._flags.ternary_depth===0||w(this._flags.last_token,["get","set"]))},O.prototype.start_of_statement=function(y){var F=!1;return F=F||w(this._flags.last_token,["var","let","const"])&&y.type===f.WORD,F=F||k(this._flags.last_token,"do"),F=F||!(this._flags.parent.mode===g.ObjectLiteral&&this._flags.mode===g.Statement)&&w(this._flags.last_token,H)&&!y.newlines,F=F||k(this._flags.last_token,"else")&&!(k(y,"if")&&!y.comments_before),F=F||this._flags.last_token.type===f.END_EXPR&&(this._previous_flags.mode===g.ForInitializer||this._previous_flags.mode===g.Conditional),F=F||this._flags.last_token.type===f.WORD&&this._flags.mode===g.BlockStatement&&!this._flags.in_case&&!(y.text==="--"||y.text==="++")&&this._last_last_text!=="function"&&y.type!==f.WORD&&y.type!==f.RESERVED,F=F||this._flags.mode===g.ObjectLiteral&&(this._flags.last_token.text===":"&&this._flags.ternary_depth===0||w(this._flags.last_token,["get","set"])),F?(this.set_mode(g.Statement),this.indent(),this.handle_whitespace_and_comments(y,!0),this.start_of_object_property()||this.allow_wrap_or_preserved_newline(y,w(y,["do","for","if","while"])),!0):!1},O.prototype.handle_start_expr=function(y){this.start_of_statement(y)||this.handle_whitespace_and_comments(y);var F=g.Expression;if(y.text==="["){if(this._flags.last_token.type===f.WORD||this._flags.last_token.text===")"){w(this._flags.last_token,d)&&(this._output.space_before_token=!0),this.print_token(y),this.set_mode(F),this.indent(),this._options.space_in_paren&&(this._output.space_before_token=!0);return}F=g.ArrayLiteral,T(this._flags.mode)&&(this._flags.last_token.text==="["||this._flags.last_token.text===","&&(this._last_last_text==="]"||this._last_last_text==="}"))&&(this._options.keep_array_indentation||this.print_newline()),h(this._flags.last_token.type,[f.START_EXPR,f.END_EXPR,f.WORD,f.OPERATOR,f.DOT])||(this._output.space_before_token=!0)}else{if(this._flags.last_token.type===f.RESERVED)this._flags.last_token.text==="for"?(this._output.space_before_token=this._options.space_before_conditional,F=g.ForInitializer):h(this._flags.last_token.text,["if","while","switch"])?(this._output.space_before_token=this._options.space_before_conditional,F=g.Conditional):h(this._flags.last_word,["await","async"])?this._output.space_before_token=!0:this._flags.last_token.text==="import"&&y.whitespace_before===""?this._output.space_before_token=!1:(h(this._flags.last_token.text,d)||this._flags.last_token.text==="catch")&&(this._output.space_before_token=!0);else if(this._flags.last_token.type===f.EQUALS||this._flags.last_token.type===f.OPERATOR)this.start_of_object_property()||this.allow_wrap_or_preserved_newline(y);else if(this._flags.last_token.type===f.WORD){this._output.space_before_token=!1;var U=this._tokens.peek(-3);if(this._options.space_after_named_function&&U){var re=this._tokens.peek(-4);w(U,["async","function"])||U.text==="*"&&w(re,["async","function"])?this._output.space_before_token=!0:this._flags.mode===g.ObjectLiteral?(U.text==="{"||U.text===","||U.text==="*"&&(re.text==="{"||re.text===","))&&(this._output.space_before_token=!0):this._flags.parent&&this._flags.parent.class_start_block&&(this._output.space_before_token=!0)}}else this.allow_wrap_or_preserved_newline(y);(this._flags.last_token.type===f.RESERVED&&(this._flags.last_word==="function"||this._flags.last_word==="typeof")||this._flags.last_token.text==="*"&&(h(this._last_last_text,["function","yield"])||this._flags.mode===g.ObjectLiteral&&h(this._last_last_text,["{",","])))&&(this._output.space_before_token=this._options.space_after_anon_function)}this._flags.last_token.text===";"||this._flags.last_token.type===f.START_BLOCK?this.print_newline():(this._flags.last_token.type===f.END_EXPR||this._flags.last_token.type===f.START_EXPR||this._flags.last_token.type===f.END_BLOCK||this._flags.last_token.text==="."||this._flags.last_token.type===f.COMMA)&&this.allow_wrap_or_preserved_newline(y,y.newlines),this.print_token(y),this.set_mode(F),this._options.space_in_paren&&(this._output.space_before_token=!0),this.indent()},O.prototype.handle_end_expr=function(y){for(;this._flags.mode===g.Statement;)this.restore_mode();this.handle_whitespace_and_comments(y),this._flags.multiline_frame&&this.allow_wrap_or_preserved_newline(y,y.text==="]"&&T(this._flags.mode)&&!this._options.keep_array_indentation),this._options.space_in_paren&&(this._flags.last_token.type===f.START_EXPR&&!this._options.space_in_empty_paren?(this._output.trim(),this._output.space_before_token=!1):this._output.space_before_token=!0),this.deindent(),this.print_token(y),this.restore_mode(),S(this._output,this._previous_flags),this._flags.do_while&&this._previous_flags.mode===g.Conditional&&(this._previous_flags.mode=g.Expression,this._flags.do_block=!1,this._flags.do_while=!1)},O.prototype.handle_start_block=function(y){this.handle_whitespace_and_comments(y);var F=this._tokens.peek(),U=this._tokens.peek(1);this._flags.last_word==="switch"&&this._flags.last_token.type===f.END_EXPR?(this.set_mode(g.BlockStatement),this._flags.in_case_statement=!0):this._flags.case_body?this.set_mode(g.BlockStatement):U&&(h(U.text,[":",","])&&h(F.type,[f.STRING,f.WORD,f.RESERVED])||h(F.text,["get","set","..."])&&h(U.type,[f.WORD,f.RESERVED]))?h(this._last_last_text,["class","interface"])&&!h(U.text,[":",","])?this.set_mode(g.BlockStatement):this.set_mode(g.ObjectLiteral):this._flags.last_token.type===f.OPERATOR&&this._flags.last_token.text==="=>"?this.set_mode(g.BlockStatement):h(this._flags.last_token.type,[f.EQUALS,f.START_EXPR,f.COMMA,f.OPERATOR])||w(this._flags.last_token,["return","throw","import","default"])?this.set_mode(g.ObjectLiteral):this.set_mode(g.BlockStatement),this._flags.last_token&&w(this._flags.last_token.previous,["class","extends"])&&(this._flags.class_start_block=!0);var re=!F.comments_before&&F.text==="}",ie=re&&this._flags.last_word==="function"&&this._flags.last_token.type===f.END_EXPR;if(this._options.brace_preserve_inline){var _e=0,xe=null;this._flags.inline_frame=!0;do if(_e+=1,xe=this._tokens.peek(_e-1),xe.newlines){this._flags.inline_frame=!1;break}while(xe.type!==f.EOF&&!(xe.type===f.END_BLOCK&&xe.opened===y))}(this._options.brace_style==="expand"||this._options.brace_style==="none"&&y.newlines)&&!this._flags.inline_frame?this._flags.last_token.type!==f.OPERATOR&&(ie||this._flags.last_token.type===f.EQUALS||w(this._flags.last_token,j)&&this._flags.last_token.text!=="else")?this._output.space_before_token=!0:this.print_newline(!1,!0):(T(this._previous_flags.mode)&&(this._flags.last_token.type===f.START_EXPR||this._flags.last_token.type===f.COMMA)&&((this._flags.last_token.type===f.COMMA||this._options.space_in_paren)&&(this._output.space_before_token=!0),(this._flags.last_token.type===f.COMMA||this._flags.last_token.type===f.START_EXPR&&this._flags.inline_frame)&&(this.allow_wrap_or_preserved_newline(y),this._previous_flags.multiline_frame=this._previous_flags.multiline_frame||this._flags.multiline_frame,this._flags.multiline_frame=!1)),this._flags.last_token.type!==f.OPERATOR&&this._flags.last_token.type!==f.START_EXPR&&(h(this._flags.last_token.type,[f.START_BLOCK,f.SEMICOLON])&&!this._flags.inline_frame?this.print_newline():this._output.space_before_token=!0)),this.print_token(y),this.indent(),!re&&!(this._options.brace_preserve_inline&&this._flags.inline_frame)&&this.print_newline()},O.prototype.handle_end_block=function(y){for(this.handle_whitespace_and_comments(y);this._flags.mode===g.Statement;)this.restore_mode();var F=this._flags.last_token.type===f.START_BLOCK;this._flags.inline_frame&&!F?this._output.space_before_token=!0:this._options.brace_style==="expand"?F||this.print_newline():F||(T(this._flags.mode)&&this._options.keep_array_indentation?(this._options.keep_array_indentation=!1,this.print_newline(),this._options.keep_array_indentation=!0):this.print_newline()),this.restore_mode(),this.print_token(y)},O.prototype.handle_word=function(y){if(y.type===f.RESERVED){if(h(y.text,["set","get"])&&this._flags.mode!==g.ObjectLiteral)y.type=f.WORD;else if(y.text==="import"&&h(this._tokens.peek().text,["(","."]))y.type=f.WORD;else if(h(y.text,["as","from"])&&!this._flags.import_block)y.type=f.WORD;else if(this._flags.mode===g.ObjectLiteral){var F=this._tokens.peek();F.text===":"&&(y.type=f.WORD)}}if(this.start_of_statement(y)?w(this._flags.last_token,["var","let","const"])&&y.type===f.WORD&&(this._flags.declaration_statement=!0):y.newlines&&!z(this._flags.mode)&&(this._flags.last_token.type!==f.OPERATOR||this._flags.last_token.text==="--"||this._flags.last_token.text==="++")&&this._flags.last_token.type!==f.EQUALS&&(this._options.preserve_newlines||!w(this._flags.last_token,["var","let","const","set","get"]))?(this.handle_whitespace_and_comments(y),this.print_newline()):this.handle_whitespace_and_comments(y),this._flags.do_block&&!this._flags.do_while)if(k(y,"while")){this._output.space_before_token=!0,this.print_token(y),this._output.space_before_token=!0,this._flags.do_while=!0;return}else this.print_newline(),this._flags.do_block=!1;if(this._flags.if_block)if(!this._flags.else_block&&k(y,"else"))this._flags.else_block=!0;else{for(;this._flags.mode===g.Statement;)this.restore_mode();this._flags.if_block=!1,this._flags.else_block=!1}if(this._flags.in_case_statement&&w(y,["case","default"])){this.print_newline(),!this._flags.case_block&&(this._flags.case_body||this._options.jslint_happy)&&this.deindent(),this._flags.case_body=!1,this.print_token(y),this._flags.in_case=!0;return}if((this._flags.last_token.type===f.COMMA||this._flags.last_token.type===f.START_EXPR||this._flags.last_token.type===f.EQUALS||this._flags.last_token.type===f.OPERATOR)&&!this.start_of_object_property()&&!(h(this._flags.last_token.text,["+","-"])&&this._last_last_text===":"&&this._flags.parent.mode===g.ObjectLiteral)&&this.allow_wrap_or_preserved_newline(y),k(y,"function")){(h(this._flags.last_token.text,["}",";"])||this._output.just_added_newline()&&!(h(this._flags.last_token.text,["(","[","{",":","=",","])||this._flags.last_token.type===f.OPERATOR))&&!this._output.just_added_blankline()&&!y.comments_before&&(this.print_newline(),this.print_newline(!0)),this._flags.last_token.type===f.RESERVED||this._flags.last_token.type===f.WORD?w(this._flags.last_token,["get","set","new","export"])||w(this._flags.last_token,H)?this._output.space_before_token=!0:k(this._flags.last_token,"default")&&this._last_last_text==="export"?this._output.space_before_token=!0:this._flags.last_token.text==="declare"?this._output.space_before_token=!0:this.print_newline():this._flags.last_token.type===f.OPERATOR||this._flags.last_token.text==="="?this._output.space_before_token=!0:!this._flags.multiline_frame&&(z(this._flags.mode)||T(this._flags.mode))||this.print_newline(),this.print_token(y),this._flags.last_word=y.text;return}var U="NONE";if(this._flags.last_token.type===f.END_BLOCK?this._previous_flags.inline_frame?U="SPACE":w(y,["else","catch","finally","from"])?this._options.brace_style==="expand"||this._options.brace_style==="end-expand"||this._options.brace_style==="none"&&y.newlines?U="NEWLINE":(U="SPACE",this._output.space_before_token=!0):U="NEWLINE":this._flags.last_token.type===f.SEMICOLON&&this._flags.mode===g.BlockStatement?U="NEWLINE":this._flags.last_token.type===f.SEMICOLON&&z(this._flags.mode)?U="SPACE":this._flags.last_token.type===f.STRING?U="NEWLINE":this._flags.last_token.type===f.RESERVED||this._flags.last_token.type===f.WORD||this._flags.last_token.text==="*"&&(h(this._last_last_text,["function","yield"])||this._flags.mode===g.ObjectLiteral&&h(this._last_last_text,["{",","]))?U="SPACE":this._flags.last_token.type===f.START_BLOCK?this._flags.inline_frame?U="SPACE":U="NEWLINE":this._flags.last_token.type===f.END_EXPR&&(this._output.space_before_token=!0,U="NEWLINE"),w(y,d)&&this._flags.last_token.text!==")"&&(this._flags.inline_frame||this._flags.last_token.text==="else"||this._flags.last_token.text==="export"?U="SPACE":U="NEWLINE"),w(y,["else","catch","finally"]))if((!(this._flags.last_token.type===f.END_BLOCK&&this._previous_flags.mode===g.BlockStatement)||this._options.brace_style==="expand"||this._options.brace_style==="end-expand"||this._options.brace_style==="none"&&y.newlines)&&!this._flags.inline_frame)this.print_newline();else{this._output.trim(!0);var re=this._output.current_line;re.last()!=="}"&&this.print_newline(),this._output.space_before_token=!0}else U==="NEWLINE"?w(this._flags.last_token,j)?this._output.space_before_token=!0:this._flags.last_token.text==="declare"&&w(y,["var","let","const"])?this._output.space_before_token=!0:this._flags.last_token.type!==f.END_EXPR?(this._flags.last_token.type!==f.START_EXPR||!w(y,["var","let","const"]))&&this._flags.last_token.text!==":"&&(k(y,"if")&&k(y.previous,"else")?this._output.space_before_token=!0:this.print_newline()):w(y,d)&&this._flags.last_token.text!==")"&&this.print_newline():this._flags.multiline_frame&&T(this._flags.mode)&&this._flags.last_token.text===","&&this._last_last_text==="}"?this.print_newline():U==="SPACE"&&(this._output.space_before_token=!0);y.previous&&(y.previous.type===f.WORD||y.previous.type===f.RESERVED)&&(this._output.space_before_token=!0),this.print_token(y),this._flags.last_word=y.text,y.type===f.RESERVED&&(y.text==="do"?this._flags.do_block=!0:y.text==="if"?this._flags.if_block=!0:y.text==="import"?this._flags.import_block=!0:this._flags.import_block&&k(y,"from")&&(this._flags.import_block=!1))},O.prototype.handle_semicolon=function(y){this.start_of_statement(y)?this._output.space_before_token=!1:this.handle_whitespace_and_comments(y);for(var F=this._tokens.peek();this._flags.mode===g.Statement&&!(this._flags.if_block&&k(F,"else"))&&!this._flags.do_block;)this.restore_mode();this._flags.import_block&&(this._flags.import_block=!1),this.print_token(y)},O.prototype.handle_string=function(y){y.text.startsWith("`")&&y.newlines===0&&y.whitespace_before===""&&(y.previous.text===")"||this._flags.last_token.type===f.WORD)||(this.start_of_statement(y)?this._output.space_before_token=!0:(this.handle_whitespace_and_comments(y),this._flags.last_token.type===f.RESERVED||this._flags.last_token.type===f.WORD||this._flags.inline_frame?this._output.space_before_token=!0:this._flags.last_token.type===f.COMMA||this._flags.last_token.type===f.START_EXPR||this._flags.last_token.type===f.EQUALS||this._flags.last_token.type===f.OPERATOR?this.start_of_object_property()||this.allow_wrap_or_preserved_newline(y):y.text.startsWith("`")&&this._flags.last_token.type===f.END_EXPR&&(y.previous.text==="]"||y.previous.text===")")&&y.newlines===0?this._output.space_before_token=!0:this.print_newline())),this.print_token(y)},O.prototype.handle_equals=function(y){this.start_of_statement(y)||this.handle_whitespace_and_comments(y),this._flags.declaration_statement&&(this._flags.declaration_assignment=!0),this._output.space_before_token=!0,this.print_token(y),this._output.space_before_token=!0},O.prototype.handle_comma=function(y){this.handle_whitespace_and_comments(y,!0),this.print_token(y),this._output.space_before_token=!0,this._flags.declaration_statement?(z(this._flags.parent.mode)&&(this._flags.declaration_assignment=!1),this._flags.declaration_assignment?(this._flags.declaration_assignment=!1,this.print_newline(!1,!0)):this._options.comma_first&&this.allow_wrap_or_preserved_newline(y)):this._flags.mode===g.ObjectLiteral||this._flags.mode===g.Statement&&this._flags.parent.mode===g.ObjectLiteral?(this._flags.mode===g.Statement&&this.restore_mode(),this._flags.inline_frame||this.print_newline()):this._options.comma_first&&this.allow_wrap_or_preserved_newline(y)},O.prototype.handle_operator=function(y){var F=y.text==="*"&&(w(this._flags.last_token,["function","yield"])||h(this._flags.last_token.type,[f.START_BLOCK,f.COMMA,f.END_BLOCK,f.SEMICOLON])),U=h(y.text,["-","+"])&&(h(this._flags.last_token.type,[f.START_BLOCK,f.START_EXPR,f.EQUALS,f.OPERATOR])||h(this._flags.last_token.text,d)||this._flags.last_token.text===",");if(!this.start_of_statement(y)){var re=!F;this.handle_whitespace_and_comments(y,re)}if(y.text==="*"&&this._flags.last_token.type===f.DOT){this.print_token(y);return}if(y.text==="::"){this.print_token(y);return}if(h(y.text,["-","+"])&&this.start_of_object_property()){this.print_token(y);return}if(this._flags.last_token.type===f.OPERATOR&&h(this._options.operator_position,b)&&this.allow_wrap_or_preserved_newline(y),y.text===":"&&this._flags.in_case){this.print_token(y),this._flags.in_case=!1,this._flags.case_body=!0,this._tokens.peek().type!==f.START_BLOCK?(this.indent(),this.print_newline(),this._flags.case_block=!1):(this._flags.case_block=!0,this._output.space_before_token=!0);return}var ie=!0,_e=!0,xe=!1;if(y.text===":"?this._flags.ternary_depth===0?ie=!1:(this._flags.ternary_depth-=1,xe=!0):y.text==="?"&&(this._flags.ternary_depth+=1),!U&&!F&&this._options.preserve_newlines&&h(y.text,m)){var ke=y.text===":",q=ke&&xe,oe=ke&&!xe;switch(this._options.operator_position){case B.before_newline:this._output.space_before_token=!oe,this.print_token(y),(!ke||q)&&this.allow_wrap_or_preserved_newline(y),this._output.space_before_token=!0;return;case B.after_newline:this._output.space_before_token=!0,!ke||q?this._tokens.peek().newlines?this.print_newline(!1,!0):this.allow_wrap_or_preserved_newline(y):this._output.space_before_token=!1,this.print_token(y),this._output.space_before_token=!0;return;case B.preserve_newline:oe||this.allow_wrap_or_preserved_newline(y),ie=!(this._output.just_added_newline()||oe),this._output.space_before_token=ie,this.print_token(y),this._output.space_before_token=!0;return}}if(F){this.allow_wrap_or_preserved_newline(y),ie=!1;var Z=this._tokens.peek();_e=Z&&h(Z.type,[f.WORD,f.RESERVED])}else if(y.text==="...")this.allow_wrap_or_preserved_newline(y),ie=this._flags.last_token.type===f.START_BLOCK,_e=!1;else if(h(y.text,["--","++","!","~"])||U){if((this._flags.last_token.type===f.COMMA||this._flags.last_token.type===f.START_EXPR)&&this.allow_wrap_or_preserved_newline(y),ie=!1,_e=!1,y.newlines&&(y.text==="--"||y.text==="++"||y.text==="~")){var L=w(this._flags.last_token,j)&&y.newlines;L&&(this._previous_flags.if_block||this._previous_flags.else_block)&&this.restore_mode(),this.print_newline(L,!0)}this._flags.last_token.text===";"&&z(this._flags.mode)&&(ie=!0),this._flags.last_token.type===f.RESERVED?ie=!0:this._flags.last_token.type===f.END_EXPR?ie=!(this._flags.last_token.text==="]"&&(y.text==="--"||y.text==="++")):this._flags.last_token.type===f.OPERATOR&&(ie=h(y.text,["--","-","++","+"])&&h(this._flags.last_token.text,["--","-","++","+"]),h(y.text,["+","-"])&&h(this._flags.last_token.text,["--","++"])&&(_e=!0)),(this._flags.mode===g.BlockStatement&&!this._flags.inline_frame||this._flags.mode===g.Statement)&&(this._flags.last_token.text==="{"||this._flags.last_token.text===";")&&this.print_newline()}this._output.space_before_token=this._output.space_before_token||ie,this.print_token(y),this._output.space_before_token=_e},O.prototype.handle_block_comment=function(y,F){if(this._output.raw){this._output.add_raw_token(y),y.directives&&y.directives.preserve==="end"&&(this._output.raw=this._options.test_output_raw);return}if(y.directives){this.print_newline(!1,F),this.print_token(y),y.directives.preserve==="start"&&(this._output.raw=!0),this.print_newline(!1,!0);return}if(!i.newline.test(y.text)&&!y.newlines){this._output.space_before_token=!0,this.print_token(y),this._output.space_before_token=!0;return}else this.print_block_commment(y,F)},O.prototype.print_block_commment=function(y,F){var U=W(y.text),re,ie=!1,_e=!1,xe=y.whitespace_before,ke=xe.length;if(this.print_newline(!1,F),this.print_token_line_indentation(y),this._output.add_token(U[0]),this.print_newline(!1,F),U.length>1){for(U=U.slice(1),ie=P(U,"*"),_e=I(U,xe),ie&&(this._flags.alignment=1),re=0;re<U.length;re++)ie?(this.print_token_line_indentation(y),this._output.add_token(_(U[re]))):_e&&U[re]?(this.print_token_line_indentation(y),this._output.add_token(U[re].substring(ke))):(this._output.current_line.set_indent(-1),this._output.add_token(U[re])),this.print_newline(!1,F);this._flags.alignment=0}},O.prototype.handle_comment=function(y,F){y.newlines?this.print_newline(!1,F):this._output.trim(!0),this._output.space_before_token=!0,this.print_token(y),this.print_newline(!1,F)},O.prototype.handle_dot=function(y){this.start_of_statement(y)||this.handle_whitespace_and_comments(y,!0),this._flags.last_token.text.match("^[0-9]+$")&&(this._output.space_before_token=!0),w(this._flags.last_token,j)?this._output.space_before_token=!1:this.allow_wrap_or_preserved_newline(y,this._flags.last_token.text===")"&&this._options.break_chained_methods),this._options.unindent_chained_methods&&this._output.just_added_newline()&&this.deindent(),this.print_token(y)},O.prototype.handle_unknown=function(y,F){this.print_token(y),y.text[y.text.length-1]===`
`&&this.print_newline(!1,F)},O.prototype.handle_eof=function(y){for(;this._flags.mode===g.Statement;)this.restore_mode();this.handle_whitespace_and_comments(y)},Yl.Beautifier=O,Yl}var Lp;function Xv(){if(Lp)return ca.exports;Lp=1;var n=Qv().Beautifier,s=nm().Options;function i(a,u){var d=new n(a,u);return d.beautify()}return ca.exports=i,ca.exports.defaultOptions=function(){return new s},ca.exports}var pa={exports:{}},ou={},lu={},Mp;function im(){if(Mp)return lu;Mp=1;var n=Gu().Options;function s(i){n.call(this,i,"css"),this.selector_separator_newline=this._get_boolean("selector_separator_newline",!0),this.newline_between_rules=this._get_boolean("newline_between_rules",!0);var a=this._get_boolean("space_around_selector_separator");this.space_around_combinator=this._get_boolean("space_around_combinator")||a;var u=this._get_selection_list("brace_style",["collapse","expand","end-expand","none","preserve-inline"]);this.brace_style="collapse";for(var d=0;d<u.length;d++)u[d]!=="expand"?this.brace_style="collapse":this.brace_style=u[d]}return s.prototype=new n,lu.Options=s,lu}var Bp;function Yv(){if(Bp)return ou;Bp=1;var n=im().Options,s=Hu().Output,i=Vu().InputScanner,a=Ku().Directives,u=new a(/\/\*/,/\*\//),d=/\r\n|[\r\n]/,m=/\r\n|[\r\n]/g,f=/\s/,h=/(?:\s|\n)+/g,_=/\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,v=/\/\/(?:[^\n\r\u2028\u2029]*)/g;function k(w,j){this._source_text=w||"",this._options=new n(j),this._ch=null,this._input=null,this.NESTED_AT_RULE={page:!0,"font-face":!0,keyframes:!0,media:!0,supports:!0,document:!0},this.CONDITIONAL_GROUP_RULE={media:!0,supports:!0,document:!0},this.NON_SEMICOLON_NEWLINE_PROPERTY=["grid-template-areas","grid-template"]}return k.prototype.eatString=function(w){var j="";for(this._ch=this._input.next();this._ch;){if(j+=this._ch,this._ch==="\\")j+=this._input.next();else if(w.indexOf(this._ch)!==-1||this._ch===`
`)break;this._ch=this._input.next()}return j},k.prototype.eatWhitespace=function(w){for(var j=f.test(this._input.peek()),E=0;f.test(this._input.peek());)this._ch=this._input.next(),w&&this._ch===`
`&&(E===0||E<this._options.max_preserve_newlines)&&(E++,this._output.add_new_line(!0));return j},k.prototype.foundNestedPseudoClass=function(){for(var w=0,j=1,E=this._input.peek(j);E;){if(E==="{")return!0;if(E==="(")w+=1;else if(E===")"){if(w===0)return!1;w-=1}else if(E===";"||E==="}")return!1;j++,E=this._input.peek(j)}return!1},k.prototype.print_string=function(w){this._output.set_indent(this._indentLevel),this._output.non_breaking_space=!0,this._output.add_token(w)},k.prototype.preserveSingleSpace=function(w){w&&(this._output.space_before_token=!0)},k.prototype.indent=function(){this._indentLevel++},k.prototype.outdent=function(){this._indentLevel>0&&this._indentLevel--},k.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var w=this._source_text,j=this._options.eol;j==="auto"&&(j=`
`,w&&d.test(w||"")&&(j=w.match(d)[0])),w=w.replace(m,`
`);var E=w.match(/^[\t ]*/)[0];this._output=new s(this._options,E),this._input=new i(w),this._indentLevel=0,this._nestedLevel=0,this._ch=null;for(var B=0,b=!1,g=!1,S=!1,W=!1,T=!1,z=this._ch,P=!1,I,O,H;I=this._input.read(h),O=I!=="",H=z,this._ch=this._input.next(),this._ch==="\\"&&this._input.hasNext()&&(this._ch+=this._input.next()),z=this._ch,this._ch;)if(this._ch==="/"&&this._input.peek()==="*"){this._output.add_new_line(),this._input.back();var y=this._input.read(_),F=u.get_directives(y);F&&F.ignore==="start"&&(y+=u.readIgnored(this._input)),this.print_string(y),this.eatWhitespace(!0),this._output.add_new_line()}else if(this._ch==="/"&&this._input.peek()==="/")this._output.space_before_token=!0,this._input.back(),this.print_string(this._input.read(v)),this.eatWhitespace(!0);else if(this._ch==="$"){this.preserveSingleSpace(O),this.print_string(this._ch);var U=this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);U.match(/[ :]$/)&&(U=this.eatString(": ").replace(/\s+$/,""),this.print_string(U),this._output.space_before_token=!0),B===0&&U.indexOf(":")!==-1&&(g=!0,this.indent())}else if(this._ch==="@")if(this.preserveSingleSpace(O),this._input.peek()==="{")this.print_string(this._ch+this.eatString("}"));else{this.print_string(this._ch);var re=this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);re.match(/[ :]$/)&&(re=this.eatString(": ").replace(/\s+$/,""),this.print_string(re),this._output.space_before_token=!0),B===0&&re.indexOf(":")!==-1?(g=!0,this.indent()):re in this.NESTED_AT_RULE?(this._nestedLevel+=1,re in this.CONDITIONAL_GROUP_RULE&&(S=!0)):B===0&&!g&&(W=!0)}else if(this._ch==="#"&&this._input.peek()==="{")this.preserveSingleSpace(O),this.print_string(this._ch+this.eatString("}"));else if(this._ch==="{")g&&(g=!1,this.outdent()),W=!1,S?(S=!1,b=this._indentLevel>=this._nestedLevel):b=this._indentLevel>=this._nestedLevel-1,this._options.newline_between_rules&&b&&this._output.previous_line&&this._output.previous_line.item(-1)!=="{"&&this._output.ensure_empty_line_above("/",","),this._output.space_before_token=!0,this._options.brace_style==="expand"?(this._output.add_new_line(),this.print_string(this._ch),this.indent(),this._output.set_indent(this._indentLevel)):(H==="("?this._output.space_before_token=!1:H!==","&&this.indent(),this.print_string(this._ch)),this.eatWhitespace(!0),this._output.add_new_line();else if(this._ch==="}")this.outdent(),this._output.add_new_line(),H==="{"&&this._output.trim(!0),g&&(this.outdent(),g=!1),this.print_string(this._ch),b=!1,this._nestedLevel&&this._nestedLevel--,this.eatWhitespace(!0),this._output.add_new_line(),this._options.newline_between_rules&&!this._output.just_added_blankline()&&this._input.peek()!=="}"&&this._output.add_new_line(!0),this._input.peek()===")"&&(this._output.trim(!0),this._options.brace_style==="expand"&&this._output.add_new_line(!0));else if(this._ch===":"){for(var ie=0;ie<this.NON_SEMICOLON_NEWLINE_PROPERTY.length;ie++)if(this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[ie])){P=!0;break}(b||S)&&!(this._input.lookBack("&")||this.foundNestedPseudoClass())&&!this._input.lookBack("(")&&!W&&B===0?(this.print_string(":"),g||(g=!0,this._output.space_before_token=!0,this.eatWhitespace(!0),this.indent())):(this._input.lookBack(" ")&&(this._output.space_before_token=!0),this._input.peek()===":"?(this._ch=this._input.next(),this.print_string("::")):this.print_string(":"))}else if(this._ch==='"'||this._ch==="'"){var _e=H==='"'||H==="'";this.preserveSingleSpace(_e||O),this.print_string(this._ch+this.eatString(this._ch)),this.eatWhitespace(!0)}else if(this._ch===";")P=!1,B===0?(g&&(this.outdent(),g=!1),W=!1,this.print_string(this._ch),this.eatWhitespace(!0),this._input.peek()!=="/"&&this._output.add_new_line()):(this.print_string(this._ch),this.eatWhitespace(!0),this._output.space_before_token=!0);else if(this._ch==="(")if(this._input.lookBack("url"))this.print_string(this._ch),this.eatWhitespace(),B++,this.indent(),this._ch=this._input.next(),this._ch===")"||this._ch==='"'||this._ch==="'"?this._input.back():this._ch&&(this.print_string(this._ch+this.eatString(")")),B&&(B--,this.outdent()));else{var xe=!1;this._input.lookBack("with")&&(xe=!0),this.preserveSingleSpace(O||xe),this.print_string(this._ch),g&&H==="$"&&this._options.selector_separator_newline?(this._output.add_new_line(),T=!0):(this.eatWhitespace(),B++,this.indent())}else if(this._ch===")")B&&(B--,this.outdent()),T&&this._input.peek()===";"&&this._options.selector_separator_newline&&(T=!1,this.outdent(),this._output.add_new_line()),this.print_string(this._ch);else if(this._ch===",")this.print_string(this._ch),this.eatWhitespace(!0),this._options.selector_separator_newline&&(!g||T)&&B===0&&!W?this._output.add_new_line():this._output.space_before_token=!0;else if((this._ch===">"||this._ch==="+"||this._ch==="~")&&!g&&B===0)this._options.space_around_combinator?(this._output.space_before_token=!0,this.print_string(this._ch),this._output.space_before_token=!0):(this.print_string(this._ch),this.eatWhitespace(),this._ch&&f.test(this._ch)&&(this._ch=""));else if(this._ch==="]")this.print_string(this._ch);else if(this._ch==="[")this.preserveSingleSpace(O),this.print_string(this._ch);else if(this._ch==="=")this.eatWhitespace(),this.print_string("="),f.test(this._ch)&&(this._ch="");else if(this._ch==="!"&&!this._input.lookBack("\\"))this._output.space_before_token=!0,this.print_string(this._ch);else{var ke=H==='"'||H==="'";this.preserveSingleSpace(ke||O),this.print_string(this._ch),!this._output.just_added_newline()&&this._input.peek()===`
`&&P&&this._output.add_new_line()}var q=this._output.get_code(j);return q},ou.Beautifier=k,ou}var Dp;function qv(){if(Dp)return pa.exports;Dp=1;var n=Yv().Beautifier,s=im().Options;function i(a,u){var d=new n(a,u);return d.beautify()}return pa.exports=i,pa.exports.defaultOptions=function(){return new s},pa.exports}var ha={exports:{}},uu={},cu={},zp;function sm(){if(zp)return cu;zp=1;var n=Gu().Options;function s(i){n.call(this,i,"html"),this.templating.length===1&&this.templating[0]==="auto"&&(this.templating=["django","erb","handlebars","php"]),this.indent_inner_html=this._get_boolean("indent_inner_html"),this.indent_body_inner_html=this._get_boolean("indent_body_inner_html",!0),this.indent_head_inner_html=this._get_boolean("indent_head_inner_html",!0),this.indent_handlebars=this._get_boolean("indent_handlebars",!0),this.wrap_attributes=this._get_selection("wrap_attributes",["auto","force","force-aligned","force-expand-multiline","aligned-multiple","preserve","preserve-aligned"]),this.wrap_attributes_min_attrs=this._get_number("wrap_attributes_min_attrs",2),this.wrap_attributes_indent_size=this._get_number("wrap_attributes_indent_size",this.indent_size),this.extra_liners=this._get_array("extra_liners",["head","body","/html"]),this.inline=this._get_array("inline",["a","abbr","area","audio","b","bdi","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","keygen","label","map","mark","math","meter","noscript","object","output","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","template","textarea","time","u","var","video","wbr","text","acronym","big","strike","tt"]),this.inline_custom_elements=this._get_boolean("inline_custom_elements",!0),this.void_elements=this._get_array("void_elements",["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr","!doctype","?xml","basefont","isindex"]),this.unformatted=this._get_array("unformatted",[]),this.content_unformatted=this._get_array("content_unformatted",["pre","textarea"]),this.unformatted_content_delimiter=this._get_characters("unformatted_content_delimiter"),this.indent_scripts=this._get_selection("indent_scripts",["normal","keep","separate"])}return s.prototype=new n,cu.Options=s,cu}var ma={},$p;function Fp(){if($p)return ma;$p=1;var n=Ra().Tokenizer,s=Ra().TOKEN,i=Ku().Directives,a=rm().TemplatablePattern,u=Va().Pattern,d={TAG_OPEN:"TK_TAG_OPEN",TAG_CLOSE:"TK_TAG_CLOSE",CONTROL_FLOW_OPEN:"TK_CONTROL_FLOW_OPEN",CONTROL_FLOW_CLOSE:"TK_CONTROL_FLOW_CLOSE",ATTRIBUTE:"TK_ATTRIBUTE",EQUALS:"TK_EQUALS",VALUE:"TK_VALUE",COMMENT:"TK_COMMENT",TEXT:"TK_TEXT",UNKNOWN:"TK_UNKNOWN",START:s.START,RAW:s.RAW,EOF:s.EOF},m=new i(/<\!--/,/-->/),f=function(h,_){n.call(this,h,_),this._current_tag_name="";var v=new a(this._input).read_options(this._options),k=new u(this._input);if(this.__patterns={word:v.until(/[\n\r\t <]/),word_control_flow_close_excluded:v.until(/[\n\r\t <}]/),single_quote:v.until_after(/'/),double_quote:v.until_after(/"/),attribute:v.until(/[\n\r\t =>]|\/>/),element_name:v.until(/[\n\r\t >\/]/),angular_control_flow_start:k.matching(/\@[a-zA-Z]+[^({]*[({]/),handlebars_comment:k.starting_with(/{{!--/).until_after(/--}}/),handlebars:k.starting_with(/{{/).until_after(/}}/),handlebars_open:k.until(/[\n\r\t }]/),handlebars_raw_close:k.until(/}}/),comment:k.starting_with(/<!--/).until_after(/-->/),cdata:k.starting_with(/<!\[CDATA\[/).until_after(/]]>/),conditional_comment:k.starting_with(/<!\[/).until_after(/]>/),processing:k.starting_with(/<\?/).until_after(/\?>/)},this._options.indent_handlebars&&(this.__patterns.word=this.__patterns.word.exclude("handlebars"),this.__patterns.word_control_flow_close_excluded=this.__patterns.word_control_flow_close_excluded.exclude("handlebars")),this._unformatted_content_delimiter=null,this._options.unformatted_content_delimiter){var w=this._input.get_literal_regexp(this._options.unformatted_content_delimiter);this.__patterns.unformatted_content_delimiter=k.matching(w).until_after(w)}};return f.prototype=new n,f.prototype._is_comment=function(h){return!1},f.prototype._is_opening=function(h){return h.type===d.TAG_OPEN||h.type===d.CONTROL_FLOW_OPEN},f.prototype._is_closing=function(h,_){return h.type===d.TAG_CLOSE&&_&&((h.text===">"||h.text==="/>")&&_.text[0]==="<"||h.text==="}}"&&_.text[0]==="{"&&_.text[1]==="{")||h.type===d.CONTROL_FLOW_CLOSE&&h.text==="}"&&_.text.endsWith("{")},f.prototype._reset=function(){this._current_tag_name=""},f.prototype._get_next_token=function(h,_){var v=null;this._readWhitespace();var k=this._input.peek();return k===null?this._create_token(d.EOF,""):(v=v||this._read_open_handlebars(k,_),v=v||this._read_attribute(k,h,_),v=v||this._read_close(k,_),v=v||this._read_script_and_style(k,h),v=v||this._read_control_flows(k,_),v=v||this._read_raw_content(k,h,_),v=v||this._read_content_word(k,_),v=v||this._read_comment_or_cdata(k),v=v||this._read_processing(k),v=v||this._read_open(k,_),v=v||this._create_token(d.UNKNOWN,this._input.next()),v)},f.prototype._read_comment_or_cdata=function(h){var _=null,v=null,k=null;if(h==="<"){var w=this._input.peek(1);w==="!"&&(v=this.__patterns.comment.read(),v?(k=m.get_directives(v),k&&k.ignore==="start"&&(v+=m.readIgnored(this._input))):v=this.__patterns.cdata.read()),v&&(_=this._create_token(d.COMMENT,v),_.directives=k)}return _},f.prototype._read_processing=function(h){var _=null,v=null,k=null;if(h==="<"){var w=this._input.peek(1);(w==="!"||w==="?")&&(v=this.__patterns.conditional_comment.read(),v=v||this.__patterns.processing.read()),v&&(_=this._create_token(d.COMMENT,v),_.directives=k)}return _},f.prototype._read_open=function(h,_){var v=null,k=null;return(!_||_.type===d.CONTROL_FLOW_OPEN)&&h==="<"&&(v=this._input.next(),this._input.peek()==="/"&&(v+=this._input.next()),v+=this.__patterns.element_name.read(),k=this._create_token(d.TAG_OPEN,v)),k},f.prototype._read_open_handlebars=function(h,_){var v=null,k=null;return(!_||_.type===d.CONTROL_FLOW_OPEN)&&(this._options.templating.includes("angular")||this._options.indent_handlebars)&&h==="{"&&this._input.peek(1)==="{"&&(this._options.indent_handlebars&&this._input.peek(2)==="!"?(v=this.__patterns.handlebars_comment.read(),v=v||this.__patterns.handlebars.read(),k=this._create_token(d.COMMENT,v)):(v=this.__patterns.handlebars_open.read(),k=this._create_token(d.TAG_OPEN,v))),k},f.prototype._read_control_flows=function(h,_){var v="",k=null;if(!this._options.templating.includes("angular"))return k;if(h==="@"){if(v=this.__patterns.angular_control_flow_start.read(),v==="")return k;for(var w=v.endsWith("(")?1:0,j=0;!(v.endsWith("{")&&w===j);){var E=this._input.next();if(E===null)break;E==="("?w++:E===")"&&j++,v+=E}k=this._create_token(d.CONTROL_FLOW_OPEN,v)}else h==="}"&&_&&_.type===d.CONTROL_FLOW_OPEN&&(v=this._input.next(),k=this._create_token(d.CONTROL_FLOW_CLOSE,v));return k},f.prototype._read_close=function(h,_){var v=null,k=null;return _&&_.type===d.TAG_OPEN&&(_.text[0]==="<"&&(h===">"||h==="/"&&this._input.peek(1)===">")?(v=this._input.next(),h==="/"&&(v+=this._input.next()),k=this._create_token(d.TAG_CLOSE,v)):_.text[0]==="{"&&h==="}"&&this._input.peek(1)==="}"&&(this._input.next(),this._input.next(),k=this._create_token(d.TAG_CLOSE,"}}"))),k},f.prototype._read_attribute=function(h,_,v){var k=null,w="";if(v&&v.text[0]==="<")if(h==="=")k=this._create_token(d.EQUALS,this._input.next());else if(h==='"'||h==="'"){var j=this._input.next();h==='"'?j+=this.__patterns.double_quote.read():j+=this.__patterns.single_quote.read(),k=this._create_token(d.VALUE,j)}else w=this.__patterns.attribute.read(),w&&(_.type===d.EQUALS?k=this._create_token(d.VALUE,w):k=this._create_token(d.ATTRIBUTE,w));return k},f.prototype._is_content_unformatted=function(h){return this._options.void_elements.indexOf(h)===-1&&(this._options.content_unformatted.indexOf(h)!==-1||this._options.unformatted.indexOf(h)!==-1)},f.prototype._read_raw_content=function(h,_,v){var k="";if(v&&v.text[0]==="{")k=this.__patterns.handlebars_raw_close.read();else if(_.type===d.TAG_CLOSE&&_.opened.text[0]==="<"&&_.text[0]!=="/"){var w=_.opened.text.substr(1).toLowerCase();this._is_content_unformatted(w)&&(k=this._input.readUntil(new RegExp("</"+w+"[\\n\\r\\t ]*?>","ig")))}return k?this._create_token(d.TEXT,k):null},f.prototype._read_script_and_style=function(h,_){if(_.type===d.TAG_CLOSE&&_.opened.text[0]==="<"&&_.text[0]!=="/"){var v=_.opened.text.substr(1).toLowerCase();if(v==="script"||v==="style"){var k=this._read_comment_or_cdata(h);if(k)return k.type=d.TEXT,k;var w=this._input.readUntil(new RegExp("</"+v+"[\\n\\r\\t ]*?>","ig"));if(w)return this._create_token(d.TEXT,w)}}return null},f.prototype._read_content_word=function(h,_){var v="";return this._options.unformatted_content_delimiter&&h===this._options.unformatted_content_delimiter[0]&&(v=this.__patterns.unformatted_content_delimiter.read()),v||(v=_&&_.type===d.CONTROL_FLOW_OPEN?this.__patterns.word_control_flow_close_excluded.read():this.__patterns.word.read()),v?this._create_token(d.TEXT,v):null},ma.Tokenizer=f,ma.TOKEN=d,ma}var Up;function Jv(){if(Up)return uu;Up=1;var n=sm().Options,s=Hu().Output,i=Fp().Tokenizer,a=Fp().TOKEN,u=/\r\n|[\r\n]/,d=/\r\n|[\r\n]/g,m=function(b,g){this.indent_level=0,this.alignment_size=0,this.max_preserve_newlines=b.max_preserve_newlines,this.preserve_newlines=b.preserve_newlines,this._output=new s(b,g)};m.prototype.current_line_has_match=function(b){return this._output.current_line.has_match(b)},m.prototype.set_space_before_token=function(b,g){this._output.space_before_token=b,this._output.non_breaking_space=g},m.prototype.set_wrap_point=function(){this._output.set_indent(this.indent_level,this.alignment_size),this._output.set_wrap_point()},m.prototype.add_raw_token=function(b){this._output.add_raw_token(b)},m.prototype.print_preserved_newlines=function(b){var g=0;b.type!==a.TEXT&&b.previous.type!==a.TEXT&&(g=b.newlines?1:0),this.preserve_newlines&&(g=b.newlines<this.max_preserve_newlines+1?b.newlines:this.max_preserve_newlines+1);for(var S=0;S<g;S++)this.print_newline(S>0);return g!==0},m.prototype.traverse_whitespace=function(b){return b.whitespace_before||b.newlines?(this.print_preserved_newlines(b)||(this._output.space_before_token=!0),!0):!1},m.prototype.previous_token_wrapped=function(){return this._output.previous_token_wrapped},m.prototype.print_newline=function(b){this._output.add_new_line(b)},m.prototype.print_token=function(b){b.text&&(this._output.set_indent(this.indent_level,this.alignment_size),this._output.add_token(b.text))},m.prototype.indent=function(){this.indent_level++},m.prototype.deindent=function(){this.indent_level>0&&(this.indent_level--,this._output.set_indent(this.indent_level,this.alignment_size))},m.prototype.get_full_indent=function(b){return b=this.indent_level+(b||0),b<1?"":this._output.get_indent_string(b)};var f=function(b){for(var g=null,S=b.next;S.type!==a.EOF&&b.closed!==S;){if(S.type===a.ATTRIBUTE&&S.text==="type"){S.next&&S.next.type===a.EQUALS&&S.next.next&&S.next.next.type===a.VALUE&&(g=S.next.next.text);break}S=S.next}return g},h=function(b,g){var S=null,W=null;return g.closed?(b==="script"?S="text/javascript":b==="style"&&(S="text/css"),S=f(g)||S,S.search("text/css")>-1?W="css":S.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/)>-1?W="javascript":S.search(/(text|application|dojo)\/(x-)?(html)/)>-1?W="html":S.search(/test\/null/)>-1&&(W="null"),W):null};function _(b,g){return g.indexOf(b)!==-1}function v(b,g,S){this.parent=b||null,this.tag=g?g.tag_name:"",this.indent_level=S||0,this.parser_token=g||null}function k(b){this._printer=b,this._current_frame=null}k.prototype.get_parser_token=function(){return this._current_frame?this._current_frame.parser_token:null},k.prototype.record_tag=function(b){var g=new v(this._current_frame,b,this._printer.indent_level);this._current_frame=g},k.prototype._try_pop_frame=function(b){var g=null;return b&&(g=b.parser_token,this._printer.indent_level=b.indent_level,this._current_frame=b.parent),g},k.prototype._get_frame=function(b,g){for(var S=this._current_frame;S&&b.indexOf(S.tag)===-1;){if(g&&g.indexOf(S.tag)!==-1){S=null;break}S=S.parent}return S},k.prototype.try_pop=function(b,g){var S=this._get_frame([b],g);return this._try_pop_frame(S)},k.prototype.indent_to_tag=function(b){var g=this._get_frame(b);g&&(this._printer.indent_level=g.indent_level)};function w(b,g,S,W){this._source_text=b||"",g=g||{},this._js_beautify=S,this._css_beautify=W,this._tag_stack=null;var T=new n(g,"html");this._options=T,this._is_wrap_attributes_force=this._options.wrap_attributes.substr(0,5)==="force",this._is_wrap_attributes_force_expand_multiline=this._options.wrap_attributes==="force-expand-multiline",this._is_wrap_attributes_force_aligned=this._options.wrap_attributes==="force-aligned",this._is_wrap_attributes_aligned_multiple=this._options.wrap_attributes==="aligned-multiple",this._is_wrap_attributes_preserve=this._options.wrap_attributes.substr(0,8)==="preserve",this._is_wrap_attributes_preserve_aligned=this._options.wrap_attributes==="preserve-aligned"}w.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var b=this._source_text,g=this._options.eol;this._options.eol==="auto"&&(g=`
`,b&&u.test(b)&&(g=b.match(u)[0])),b=b.replace(d,`
`);var S=b.match(/^[\t ]*/)[0],W={text:"",type:""},T=new j(this._options),z=new m(this._options,S),P=new i(b,this._options).tokenize();this._tag_stack=new k(z);for(var I=null,O=P.next();O.type!==a.EOF;)O.type===a.TAG_OPEN||O.type===a.COMMENT?(I=this._handle_tag_open(z,O,T,W,P),T=I):O.type===a.ATTRIBUTE||O.type===a.EQUALS||O.type===a.VALUE||O.type===a.TEXT&&!T.tag_complete?I=this._handle_inside_tag(z,O,T,W):O.type===a.TAG_CLOSE?I=this._handle_tag_close(z,O,T):O.type===a.TEXT?I=this._handle_text(z,O,T):O.type===a.CONTROL_FLOW_OPEN?I=this._handle_control_flow_open(z,O):O.type===a.CONTROL_FLOW_CLOSE?I=this._handle_control_flow_close(z,O):z.add_raw_token(O),W=I,O=P.next();var H=z._output.get_code(g);return H},w.prototype._handle_control_flow_open=function(b,g){var S={text:g.text,type:g.type};return b.set_space_before_token(g.newlines||g.whitespace_before!=="",!0),g.newlines?b.print_preserved_newlines(g):b.set_space_before_token(g.newlines||g.whitespace_before!=="",!0),b.print_token(g),b.indent(),S},w.prototype._handle_control_flow_close=function(b,g){var S={text:g.text,type:g.type};return b.deindent(),g.newlines?b.print_preserved_newlines(g):b.set_space_before_token(g.newlines||g.whitespace_before!=="",!0),b.print_token(g),S},w.prototype._handle_tag_close=function(b,g,S){var W={text:g.text,type:g.type};return b.alignment_size=0,S.tag_complete=!0,b.set_space_before_token(g.newlines||g.whitespace_before!=="",!0),S.is_unformatted?b.add_raw_token(g):(S.tag_start_char==="<"&&(b.set_space_before_token(g.text[0]==="/",!0),this._is_wrap_attributes_force_expand_multiline&&S.has_wrapped_attrs&&b.print_newline(!1)),b.print_token(g)),S.indent_content&&!(S.is_unformatted||S.is_content_unformatted)&&(b.indent(),S.indent_content=!1),!S.is_inline_element&&!(S.is_unformatted||S.is_content_unformatted)&&b.set_wrap_point(),W},w.prototype._handle_inside_tag=function(b,g,S,W){var T=S.has_wrapped_attrs,z={text:g.text,type:g.type};return b.set_space_before_token(g.newlines||g.whitespace_before!=="",!0),S.is_unformatted?b.add_raw_token(g):S.tag_start_char==="{"&&g.type===a.TEXT?b.print_preserved_newlines(g)?(g.newlines=0,b.add_raw_token(g)):b.print_token(g):(g.type===a.ATTRIBUTE?b.set_space_before_token(!0):(g.type===a.EQUALS||g.type===a.VALUE&&g.previous.type===a.EQUALS)&&b.set_space_before_token(!1),g.type===a.ATTRIBUTE&&S.tag_start_char==="<"&&((this._is_wrap_attributes_preserve||this._is_wrap_attributes_preserve_aligned)&&(b.traverse_whitespace(g),T=T||g.newlines!==0),this._is_wrap_attributes_force&&S.attr_count>=this._options.wrap_attributes_min_attrs&&(W.type!==a.TAG_OPEN||this._is_wrap_attributes_force_expand_multiline)&&(b.print_newline(!1),T=!0)),b.print_token(g),T=T||b.previous_token_wrapped(),S.has_wrapped_attrs=T),z},w.prototype._handle_text=function(b,g,S){var W={text:g.text,type:"TK_CONTENT"};return S.custom_beautifier_name?this._print_custom_beatifier_text(b,g,S):S.is_unformatted||S.is_content_unformatted?b.add_raw_token(g):(b.traverse_whitespace(g),b.print_token(g)),W},w.prototype._print_custom_beatifier_text=function(b,g,S){var W=this;if(g.text!==""){var T=g.text,z,P=1,I="",O="";S.custom_beautifier_name==="javascript"&&typeof this._js_beautify=="function"?z=this._js_beautify:S.custom_beautifier_name==="css"&&typeof this._css_beautify=="function"?z=this._css_beautify:S.custom_beautifier_name==="html"&&(z=function(ie,_e){var xe=new w(ie,_e,W._js_beautify,W._css_beautify);return xe.beautify()}),this._options.indent_scripts==="keep"?P=0:this._options.indent_scripts==="separate"&&(P=-b.indent_level);var H=b.get_full_indent(P);if(T=T.replace(/\n[ \t]*$/,""),S.custom_beautifier_name!=="html"&&T[0]==="<"&&T.match(/^(<!--|<!\[CDATA\[)/)){var y=/^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(T);if(!y){b.add_raw_token(g);return}I=H+y[1]+`
`,T=y[4],y[5]&&(O=H+y[5]),T=T.replace(/\n[ \t]*$/,""),(y[2]||y[3].indexOf(`
`)!==-1)&&(y=y[3].match(/[ \t]+$/),y&&(g.whitespace_before=y[0]))}if(T)if(z){var F=function(){this.eol=`
`};F.prototype=this._options.raw_options;var U=new F;T=z(H+T,U)}else{var re=g.whitespace_before;re&&(T=T.replace(new RegExp(`
(`+re+")?","g"),`
`)),T=H+T.replace(/\n/g,`
`+H)}I&&(T?T=I+T+`
`+O:T=I+O),b.print_newline(!1),T&&(g.text=T,g.whitespace_before="",g.newlines=0,b.add_raw_token(g),b.print_newline(!0))}},w.prototype._handle_tag_open=function(b,g,S,W,T){var z=this._get_tag_open_token(g);if((S.is_unformatted||S.is_content_unformatted)&&!S.is_empty_element&&g.type===a.TAG_OPEN&&!z.is_start_tag?(b.add_raw_token(g),z.start_tag_token=this._tag_stack.try_pop(z.tag_name)):(b.traverse_whitespace(g),this._set_tag_position(b,g,z,S,W),z.is_inline_element||b.set_wrap_point(),b.print_token(g)),z.is_start_tag&&this._is_wrap_attributes_force){var P=0,I;do I=T.peek(P),I.type===a.ATTRIBUTE&&(z.attr_count+=1),P+=1;while(I.type!==a.EOF&&I.type!==a.TAG_CLOSE)}return(this._is_wrap_attributes_force_aligned||this._is_wrap_attributes_aligned_multiple||this._is_wrap_attributes_preserve_aligned)&&(z.alignment_size=g.text.length+1),!z.tag_complete&&!z.is_unformatted&&(b.alignment_size=z.alignment_size),z};var j=function(b,g,S){if(this.parent=g||null,this.text="",this.type="TK_TAG_OPEN",this.tag_name="",this.is_inline_element=!1,this.is_unformatted=!1,this.is_content_unformatted=!1,this.is_empty_element=!1,this.is_start_tag=!1,this.is_end_tag=!1,this.indent_content=!1,this.multiline_content=!1,this.custom_beautifier_name=null,this.start_tag_token=null,this.attr_count=0,this.has_wrapped_attrs=!1,this.alignment_size=0,this.tag_complete=!1,this.tag_start_char="",this.tag_check="",!S)this.tag_complete=!0;else{var W;this.tag_start_char=S.text[0],this.text=S.text,this.tag_start_char==="<"?(W=S.text.match(/^<([^\s>]*)/),this.tag_check=W?W[1]:""):(W=S.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/),this.tag_check=W?W[1]:"",(S.text.startsWith("{{#>")||S.text.startsWith("{{~#>"))&&this.tag_check[0]===">"&&(this.tag_check===">"&&S.next!==null?this.tag_check=S.next.text.split(" ")[0]:this.tag_check=S.text.split(">")[1])),this.tag_check=this.tag_check.toLowerCase(),S.type===a.COMMENT&&(this.tag_complete=!0),this.is_start_tag=this.tag_check.charAt(0)!=="/",this.tag_name=this.is_start_tag?this.tag_check:this.tag_check.substr(1),this.is_end_tag=!this.is_start_tag||S.closed&&S.closed.text==="/>";var T=2;this.tag_start_char==="{"&&this.text.length>=3&&this.text.charAt(2)==="~"&&(T=3),this.is_end_tag=this.is_end_tag||this.tag_start_char==="{"&&(!b.indent_handlebars||this.text.length<3||/[^#\^]/.test(this.text.charAt(T)))}};w.prototype._get_tag_open_token=function(b){var g=new j(this._options,this._tag_stack.get_parser_token(),b);return g.alignment_size=this._options.wrap_attributes_indent_size,g.is_end_tag=g.is_end_tag||_(g.tag_check,this._options.void_elements),g.is_empty_element=g.tag_complete||g.is_start_tag&&g.is_end_tag,g.is_unformatted=!g.tag_complete&&_(g.tag_check,this._options.unformatted),g.is_content_unformatted=!g.is_empty_element&&_(g.tag_check,this._options.content_unformatted),g.is_inline_element=_(g.tag_name,this._options.inline)||this._options.inline_custom_elements&&g.tag_name.includes("-")||g.tag_start_char==="{",g},w.prototype._set_tag_position=function(b,g,S,W,T){if(S.is_empty_element||(S.is_end_tag?S.start_tag_token=this._tag_stack.try_pop(S.tag_name):(this._do_optional_end_element(S)&&(S.is_inline_element||b.print_newline(!1)),this._tag_stack.record_tag(S),(S.tag_name==="script"||S.tag_name==="style")&&!(S.is_unformatted||S.is_content_unformatted)&&(S.custom_beautifier_name=h(S.tag_check,g)))),_(S.tag_check,this._options.extra_liners)&&(b.print_newline(!1),b._output.just_added_blankline()||b.print_newline(!0)),S.is_empty_element){if(S.tag_start_char==="{"&&S.tag_check==="else"){this._tag_stack.indent_to_tag(["if","unless","each"]),S.indent_content=!0;var z=b.current_line_has_match(/{{#if/);z||b.print_newline(!1)}S.tag_name==="!--"&&T.type===a.TAG_CLOSE&&W.is_end_tag&&S.text.indexOf(`
`)===-1||(S.is_inline_element||S.is_unformatted||b.print_newline(!1),this._calcluate_parent_multiline(b,S))}else if(S.is_end_tag){var P=!1;P=S.start_tag_token&&S.start_tag_token.multiline_content,P=P||!S.is_inline_element&&!(W.is_inline_element||W.is_unformatted)&&!(T.type===a.TAG_CLOSE&&S.start_tag_token===W)&&T.type!=="TK_CONTENT",(S.is_content_unformatted||S.is_unformatted)&&(P=!1),P&&b.print_newline(!1)}else S.indent_content=!S.custom_beautifier_name,S.tag_start_char==="<"&&(S.tag_name==="html"?S.indent_content=this._options.indent_inner_html:S.tag_name==="head"?S.indent_content=this._options.indent_head_inner_html:S.tag_name==="body"&&(S.indent_content=this._options.indent_body_inner_html)),!(S.is_inline_element||S.is_unformatted)&&(T.type!=="TK_CONTENT"||S.is_content_unformatted)&&b.print_newline(!1),this._calcluate_parent_multiline(b,S)},w.prototype._calcluate_parent_multiline=function(b,g){g.parent&&b._output.just_added_newline()&&!((g.is_inline_element||g.is_unformatted)&&g.parent.is_inline_element)&&(g.parent.multiline_content=!0)};var E=["address","article","aside","blockquote","details","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","main","menu","nav","ol","p","pre","section","table","ul"],B=["a","audio","del","ins","map","noscript","video"];return w.prototype._do_optional_end_element=function(b){var g=null;if(!(b.is_empty_element||!b.is_start_tag||!b.parent)){if(b.tag_name==="body")g=g||this._tag_stack.try_pop("head");else if(b.tag_name==="li")g=g||this._tag_stack.try_pop("li",["ol","ul","menu"]);else if(b.tag_name==="dd"||b.tag_name==="dt")g=g||this._tag_stack.try_pop("dt",["dl"]),g=g||this._tag_stack.try_pop("dd",["dl"]);else if(b.parent.tag_name==="p"&&E.indexOf(b.tag_name)!==-1){var S=b.parent.parent;(!S||B.indexOf(S.tag_name)===-1)&&(g=g||this._tag_stack.try_pop("p"))}else b.tag_name==="rp"||b.tag_name==="rt"?(g=g||this._tag_stack.try_pop("rt",["ruby","rtc"]),g=g||this._tag_stack.try_pop("rp",["ruby","rtc"])):b.tag_name==="optgroup"?g=g||this._tag_stack.try_pop("optgroup",["select"]):b.tag_name==="option"?g=g||this._tag_stack.try_pop("option",["select","datalist","optgroup"]):b.tag_name==="colgroup"?g=g||this._tag_stack.try_pop("caption",["table"]):b.tag_name==="thead"?(g=g||this._tag_stack.try_pop("caption",["table"]),g=g||this._tag_stack.try_pop("colgroup",["table"])):b.tag_name==="tbody"||b.tag_name==="tfoot"?(g=g||this._tag_stack.try_pop("caption",["table"]),g=g||this._tag_stack.try_pop("colgroup",["table"]),g=g||this._tag_stack.try_pop("thead",["table"]),g=g||this._tag_stack.try_pop("tbody",["table"])):b.tag_name==="tr"?(g=g||this._tag_stack.try_pop("caption",["table"]),g=g||this._tag_stack.try_pop("colgroup",["table"]),g=g||this._tag_stack.try_pop("tr",["table","thead","tbody","tfoot"])):(b.tag_name==="th"||b.tag_name==="td")&&(g=g||this._tag_stack.try_pop("td",["table","thead","tbody","tfoot","tr"]),g=g||this._tag_stack.try_pop("th",["table","thead","tbody","tfoot","tr"]));return b.parent=this._tag_stack.get_parser_token(),g}},uu.Beautifier=w,uu}var Wp;function Zv(){if(Wp)return ha.exports;Wp=1;var n=Jv().Beautifier,s=sm().Options;function i(a,u,d,m){var f=new n(a,u,d,m);return f.beautify()}return ha.exports=i,ha.exports.defaultOptions=function(){return new s},ha.exports}var Hp;function e1(){if(Hp)return Di;Hp=1;var n=Xv(),s=qv(),i=Zv();function a(u,d,m,f){return m=m||n,f=f||s,i(u,d,m,f)}return a.defaultOptions=i.defaultOptions,Di.js=n,Di.css=s,Di.html=a,Di}var Gp;function t1(){return Gp||(Gp=1,function(n){function s(i,a,u){var d=function(m,f){return i.js_beautify(m,f)};return d.js=i.js_beautify,d.css=a.css_beautify,d.html=u.html_beautify,d.js_beautify=i.js_beautify,d.css_beautify=a.css_beautify,d.html_beautify=u.html_beautify,d}(function(i){var a=e1();a.js_beautify=a.js,a.css_beautify=a.css,a.html_beautify=a.html,i.exports=s(a,a,a)})(n)}(Xl)),Xl.exports}var n1=t1();const r1=()=>{const[n,s]=R.useState("preparing"),[i,a]=R.useState(0),[u,d]=R.useState(""),[m,f]=R.useState({pdf:!1,html:!1}),h=An(),{jsonData:_}=h.state||{},v=(_==null?void 0:_.selectedTemplate)||"1",k=3,w=1e4;R.useEffect(()=>{if(!_){s("error"),d("No resume data found. Please go back and enter your information.");return}setTimeout(()=>{s("waking"),j()},1e3)},[_]);const j=async()=>{try{const S=document.getElementById("capture-content").outerHTML,W=n1.html(S);if(!W)throw new Error("Content element not found. Template may not be rendered correctly.");if(!W.trim())throw new Error("Template content is empty. Please check the template rendering.");console.log("Template HTML captured successfully");const z=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Designed by BRAVERS</title>
          <style>
            ${v==="1"?Rv:v=="2"?Lv:v=="3"?Dv:v=="4"?$v:v=="5"?Uv:Hv}
          </style>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
          <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">
        </head>
        <body>${W}</body>
        </html>
      `;console.log("Sending request to generate PDF..."),s("processing");try{const P=await fetch("https://html2pdfviabravers.onrender.com/generate-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({html:z})});if(!P.ok)throw new Error(`Server responded with status: ${P.status}`);const I=await P.blob(),O=window.URL.createObjectURL(I),H=document.createElement("a");H.href=O,H.download="Resume.pdf",H.click(),window.URL.revokeObjectURL(O),console.log("PDF Downloaded Successfully"),f(re=>({...re,pdf:!0}));const y=new Blob([z],{type:"text/html"}),F=window.URL.createObjectURL(y),U=document.createElement("a");U.href=F,U.download="Resume.html",U.click(),window.URL.revokeObjectURL(F),console.log("HTML Downloaded Successfully"),f(re=>({...re,html:!0})),s("completed")}catch(P){console.error("API Error:",P),i<k?(a(I=>I+1),d(`Request failed: ${P.message}. Retrying in ${w/1e3} seconds...`),setTimeout(()=>{s("waking"),j()},w)):(d(`Failed after ${k} attempts: ${P.message}`),s("error"))}}catch(g){console.error("Error:",g),d(g.message||"An unknown error occurred"),s("error")}},E=()=>{switch(v){case"1":return l.jsx(Pu,{jsonData:_});case"2":return l.jsx(Xh,{jsonData:_});case"3":return l.jsx(Yh,{jsonData:_});case"4":return l.jsx(qh,{jsonData:_});case"5":return l.jsx(Jh,{jsonData:_});case"6":return l.jsx(Zh,{jsonData:_});default:return l.jsx(Pu,{jsonData:_})}},B=()=>{switch(n){case"preparing":return"Preparing your resume...";case"waking":return`Waking up our servers... ${i>0?`(Attempt ${i+1} of ${k+1})`:""}`;case"processing":return"Generating PDF...";case"completed":return`Your resume ${m.pdf?"(PDF)":""} ${m.html?"(HTML)":""} has been downloaded!`;default:return"Designing..."}},b=()=>{a(0),d(""),s("preparing"),f({pdf:!1,html:!1}),setTimeout(()=>{s("waking"),j()},1e3)};return l.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 dark:bg-slate-800 px-4 py-8 transition-colors duration-300",children:[l.jsx("div",{id:"capture-content",className:"scale-[0.4] text-left w-full mb-6",style:{visibility:n==="completed"?"visible":"hidden",position:n==="completed"?"relative":"absolute"},children:_&&E()}),l.jsx("div",{className:"w-full max-w-md mt-0",children:n!=="completed"&&n!=="error"?l.jsx("div",{className:"w-full flex flex-row items-center mb-6",children:l.jsxs("div",{className:"relative w-[220px] h-[320px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2a2a2a] transition-all duration-300",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-[#3449ff] dark:bg-gray-200 opacity-100 filter blur-[8px] animate-blob-bounce transition-colors duration-300"}),l.jsxs("div",{className:"absolute top-[5px] left-[5px] w-[210px] h-[310px] bg-white dark:bg-slate-950 backdrop-blur-[24px] rounded-[10px] outline outline-2 outline-white dark:outline-gray-600 flex flex-col items-center justify-center text-center text-[14px] text-[#3449ff] dark:text-blue-300 font-bold p-[10px] transition-colors duration-300",children:[l.jsx("p",{title:"Server sometimes get sleep. waking them up may take few seconds. please wait",children:B()}),n==="waking"&&l.jsx("p",{className:"text-xs mt-4 text-gray-500 dark:text-gray-400 max-w-[180px]",children:"Our server might be waking up from sleep mode. This can take up to a minute."}),u&&n!=="error"&&l.jsx("p",{className:"text-xs mt-4 text-yellow-600 dark:text-yellow-400 max-w-[180px]",children:u})]})]})}):n==="error"?l.jsxs("div",{className:"w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",children:[l.jsx("strong",{className:"font-bold",children:"Error:"}),l.jsxs("span",{className:"block sm:inline",children:[" ",u]}),l.jsx("button",{className:"mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:b,children:"Try Again"})]}):l.jsxs("div",{className:"w-full flex flex-col items-center",children:[l.jsxs("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative w-full mb-4 text-left",children:[l.jsx("strong",{className:"font-bold",children:"Success!"}),l.jsxs("span",{className:"block sm:inline",children:[" Your resume has been successfully generated and downloaded! I'm confident your ATS score will be ",l.jsx("b",{children:"85+"}),". However, keep in mind — websites like EnhanceCV, LiveCareer, Resumake, Resume-Now, and other online resume builders often show lower scores intentionally to encourage users to rebuild their resumes using their platform. Focus on content quality, clarity, and relevance — that's what truly matters to recruiters and real-world ATS systems!"]})]}),l.jsxs("div",{className:"flex flex-wrap gap-3 justify-center",children:[l.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:b,children:"Download Again"}),l.jsx("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",onClick:()=>window.history.back(),children:"Back to Editor"})]})]})})]})};var am={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vp=he.createContext&&he.createContext(am),i1=["attr","size","title"];function s1(n,s){if(n==null)return{};var i=a1(n,s),a,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(u=0;u<d.length;u++)a=d[u],!(s.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}function a1(n,s){if(n==null)return{};var i={};for(var a in n)if(Object.prototype.hasOwnProperty.call(n,a)){if(s.indexOf(a)>=0)continue;i[a]=n[a]}return i}function Oa(){return Oa=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},Oa.apply(this,arguments)}function Kp(n,s){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);s&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),i.push.apply(i,a)}return i}function La(n){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?arguments[s]:{};s%2?Kp(Object(i),!0).forEach(function(a){o1(n,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Kp(Object(i)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(i,a))})}return n}function o1(n,s,i){return s=l1(s),s in n?Object.defineProperty(n,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[s]=i,n}function l1(n){var s=u1(n,"string");return typeof s=="symbol"?s:s+""}function u1(n,s){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var a=i.call(n,s||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}function om(n){return n&&n.map((s,i)=>he.createElement(s.tag,La({key:i},s.attr),om(s.child)))}function Ka(n){return s=>he.createElement(c1,Oa({attr:La({},n.attr)},s),om(n.child))}function c1(n){var s=i=>{var{attr:a,size:u,title:d}=n,m=s1(n,i1),f=u||i.size||"1em",h;return i.className&&(h=i.className),n.className&&(h=(h?h+" ":"")+n.className),he.createElement("svg",Oa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,a,m,{className:h,style:La(La({color:n.color||i.color},i.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),d&&he.createElement("title",null,d),n.children)};return Vp!==void 0?he.createElement(Vp.Consumer,null,i=>s(i)):s(am)}function d1(n){return Ka({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function f1(n){return Ka({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(n)}function p1(n){return Ka({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function h1(n){return Ka({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(n)}function ga({content:n,message:s,linkText:i,linkUrl:a}){const[u,d]=R.useState(!1),m=f=>typeof f=="string"&&(f.startsWith("resume-builder")||/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f));return l.jsxs("div",{className:"relative inline-block",children:[l.jsx("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:m(n)?l.jsx("img",{src:n,alt:"Logo",className:"w-7 h-7 ml-3 md:ml-4 rounded-full"}):l.jsx("span",{className:"cursor-pointer text-blue-500 font-bold ml-2",children:n})}),u&&l.jsxs("div",{className:`absolute top-1/2 -translate-y-1/2 bg-gray-600/95 text-white text-sm px-4 py-4 rounded-md 
          ${Array.isArray(s)&&s.length>1?"w-[440px] left-[30px]":"w-72 left-[50px]"} text-left`,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[Array.isArray(s)&&s.length>1?l.jsx("ul",{className:"list-disc list-inside",children:s.map((f,h)=>l.jsx("li",{children:f},h))}):l.jsx("p",{children:Array.isArray(s)?s[0]:s}),i&&a&&l.jsx("a",{href:a,target:"_blank",className:"text-blue-400 no-underline hover:underline",children:l.jsx("b",{children:i})})]})]})}const m1=[{name:"Nishant Singh",role:"Handled Frontend and backend processing",github:"Nishantksingh0",gitLink:"https://github.com/NishantkSingh0",linkedin:"Nishantksingh1",linLink:"https://www.linkedin.com/in/nishantksingh1",portfolio:"Nishantksingh0",prtLink:"https://nishantksingh0.github.io",email:"nishantsingh.talk",emailLink:"mailto:nishantsingh.talk@gmail.com"},{name:"Amisha Pal",role:"Handled Designing All Templates",github:"Amisha-Pal",gitLink:"https://github.com/Amisha-Pal",linkedin:"amisha-pal-70",linLink:"https://www.linkedin.com/in/amisha-pal-703493328/",portfolio:"Amisha.dev",prtLink:"",email:"amishapal992",emailLink:"mailto:amishapal9927@gmail.com"},{name:"Ankush Kumar",role:"Handled Written Works of project",github:"Ankush2011",gitLink:"https://github.com/Ankush201109",linkedin:"Ankush-kumar-5",linLink:"https://www.linkedin.com/in/ankush-kumar-505318231",portfolio:"Ankush.dev",prtLink:"",email:"akbahot2004",emailLink:"mailto:akbahot2004@gmail.com"}];function g1(){return l.jsxs("div",{className:"min-h-screen text-gray-100 py-12 px-6 flex flex-col items-center dark:bg-slate-900",children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"text-2xl font-extrabold text-center mb-2 text-gray-500 md:text-3xl dark:text-amber-300",children:[l.jsx("i",{className:"fas fa-user-alt"})," About Us"]}),l.jsx("div",{className:"w-[80%] h-1 bg-gray-600 mx-auto mb-10 mt-1 rounded dark:bg-amber-400"})]}),l.jsx("div",{className:"w-full max-w-4xl flex flex-col space-y-6",children:m1.map((n,s)=>l.jsxs("div",{className:"w-full bg-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-slate-800",style:{minWidth:"33%"},children:[l.jsx("div",{className:"flex items-center bg-blue-600 text-xl font-bold p-3 rounded-2xl mb-3",children:l.jsxs("div",{className:"flex items-center justify-center flex-1",children:[n.name,n.name==="Nishant Singh"&&l.jsx(ga,{content:"/Resume-Builder/BinaryBunch.jpeg",message:"Have secured 3rd rank in University 24hr Hackathon (TechWizard) on",linkText:"Proctoring System",linkUrl:"https://github.com/NishantkSingh0/Proctoring-System"})]})}),l.jsxs("p",{className:"text-green-700 mb-6 font-semibold dark:text-blue-300",children:[n.role,n.name==="Nishant Singh"&&l.jsx(ga,{content:" . . . ",message:["Developed and integrated frontend and backend systems.","Proposed innovative project ideas with structured workflows.","Researched high-rated resumes for optimization.","Analyzed ATS algorithms for effective resume selection.","Handled suggestion items and integrate with UI"]}),n.name==="Amisha Pal"&&l.jsx(ga,{content:" . . . ",message:["Designed all templates in HTML/CSS","Researched designs and innovation ideas","Gived optimization idea for various modules","Researched other Resume builder websites and suggested improvemnets"]}),n.name==="Ankush Kumar"&&l.jsx(ga,{content:" . . . ",message:["Managed All written works (Synopsis, Project file)","Designed PPT for presentation","Researched other Resume builder websites and suggested improvemnets"]})]}),l.jsxs("div",{className:"flex flex-col items-center space-y-4 px-4 md:px-32",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[l.jsx(d1,{className:"text-lg"}),l.jsx("a",{href:n.gitLink,onClick:i=>{n.gitLink||i.preventDefault()},title:n.gitLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.github})]}),l.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[l.jsx(f1,{className:"text-lg"}),l.jsx("a",{href:n.linLink,onClick:i=>{n.linLink||i.preventDefault()},title:n.linLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.linkedin})]})]}),l.jsxs("div",{className:"flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[l.jsx(h1,{className:"text-lg"}),l.jsx("a",{href:n.prtLink,onClick:i=>{n.prtLink||i.preventDefault()},title:n.prtLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.portfolio})]}),l.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[l.jsx(p1,{className:"text-lg"}),l.jsx("a",{href:n.emailLink,onClick:i=>{n.emailLink||i.preventDefault()},title:n.emailLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.email})]})]})]})]},s))})]})}const _1=()=>{const[n,s]=R.useState(""),[i,a]=R.useState(""),u=async()=>{try{const f=await(await fetch("https://your-api.com/verify-mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:i})})).json();alert(f.message||"Verification successful!")}catch{alert("Verification failed! Please try again.")}},d=()=>{s(""),a("")};return l.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:l.jsxs("div",{className:"bg-white p-10 shadow-xl rounded-lg w-96 text-center border border-gray-300",children:[l.jsx("h2",{className:"text-2xl font-semibold mb-6 text-gray-700",children:"Google Mail Verification"}),l.jsx("input",{type:"email",placeholder:"Enter your email",value:n,onChange:m=>s(m.target.value),className:"w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),l.jsx("input",{type:"password",placeholder:"Enter your password",value:i,onChange:m=>a(m.target.value),className:"w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("button",{onClick:u,className:"bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700",children:"Continue"}),l.jsx("button",{onClick:d,className:"bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-600",children:"Reset"})]})]})})};function x1(){const n=["","Simpler & Structured","Linear & Classic","Colourful & Attractive","Colourful & Highly Designed","Simpler & Linear","Highly Simpler & Classic"],s=[{img:"/Resume-Builder/Temp/temp1.png",title:n[1],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T1.html",templateLink:"https://nishantksingh0.github.io/Generated-Templates/T1"},{img:"/Resume-Builder/Temp/temp2.png",title:n[2],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T2.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T2"},{img:"/Resume-Builder/Temp/temp3.png",title:n[3],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T3.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T3"},{img:"/Resume-Builder/Temp/temp4.png",title:n[4],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T4.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T4"},{img:"/Resume-Builder/Temp/temp5.png",title:n[5],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T5.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T5"},{img:"/Resume-Builder/Temp/temp6.png",title:n[6],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T7.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T7"},{img:"/Resume-Builder/Temp/temp8.png",title:n[4],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T8.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T8"},{img:"/Resume-Builder/Temp/temp9.png",title:n[5],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T9.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T9"},{img:"/Resume-Builder/Temp/temp10.png",title:n[7],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T10.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T10"},{img:"/Resume-Builder/Temp/temp11.png",title:n[2],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T11.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T11"}];return l.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 p-4",children:[l.jsx("h3",{className:"mt-10 mb-2 text-3xl text-gray-600 dark:text-slate-200 font-bold",children:"Generated Templates"}),l.jsx("h5",{className:"mb-4 text-sm md:text-base font-semibold text-gray-500",children:"Note: Consider to View Templates only on desktop mode"}),l.jsx("div",{className:"w-[200px] h-1 bg-blue-700 mb-16 mx-auto mt-1 rounded dark:bg-blue-500"}),l.jsx("div",{className:"grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-2 max-w-5xl mx-auto place-items-center",children:s.map((i,a)=>l.jsxs("div",{className:"group relative mb-6 bg-white dark:bg-slate-700 hover:shadow-2xl hover:scale-105 transition-transform border-2 dark:shadow-[0_-4px_10px_rgba(0,0,0,0.1)]  border-gray-300 dark:border-gray-700 dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-lg overflow-hidden w-40 sm:w-44 md:w-48 lg:w-64 xl:w-72 flex flex-col items-center",children:[l.jsx("img",{src:i.img,alt:i.title,className:"w-full h-auto object-cover dark:opacity-80 dark:brightness-80 dark:contrast-90"}),l.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 dark:bg-slate-700 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-transform flex space justify-between flex-col items-center",children:l.jsx("div",{className:"flex space-x-4",children:l.jsxs("div",{className:"flex space-x-2",children:[l.jsx("a",{href:i.codeLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md md:hidden",target:"_blank",children:"Code"}),l.jsx("a",{href:i.templateLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md md:hidden",target:"_blank",children:"View"}),l.jsx("a",{href:i.codeLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md hidden md:block",target:"_blank",children:"View Code"}),l.jsx("a",{href:i.templateLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md hidden md:block",target:"_blank",children:"View Resume"})]})})}),l.jsxs("div",{className:"font-semibold text-gray-600 dark:text-gray-200 text-xs pb-2 pt-1 md:text-base",children:[" ",i.title," "]})]},a))})]})}const y1=()=>l.jsx("div",{className:"flex justify-center items-center h-screen dark:bg-black",children:l.jsx("img",{src:"https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true",alt:"Wait a while 😐",title:"Wait a while 😐. Content is loading",className:"w-15 h-15 animate-step-rotate"})}),v1=()=>{const{isDark:n}=R.useContext(Da),[s,i]=R.useState(!0);return R.useEffect(()=>{n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[n]),R.useEffect(()=>{const a=setTimeout(()=>{i(!1)},2e3);return()=>clearTimeout(a)},[]),s?l.jsx(y1,{}):l.jsxs("div",{children:[l.jsx(Gy,{}),l.jsxs(Q0,{children:[l.jsx(Jn,{path:"/",element:l.jsx(Ux,{})}),l.jsx(Jn,{path:"/AboutUs",element:l.jsx(g1,{})}),l.jsx(Jn,{path:"/VarifyMail",element:l.jsx(_1,{})}),l.jsx(Jn,{path:"/GetInfo",element:l.jsx(Gv,{})}),l.jsx(Jn,{path:"/Result",element:l.jsx(r1,{})}),l.jsx(Jn,{path:"/ViewTemplates",element:l.jsx(x1,{})})]})]})};O_.createRoot(document.getElementById("root")).render(l.jsx(he.StrictMode,{children:l.jsx(x_,{children:l.jsx(L_,{children:l.jsx(v1,{})})})}));
