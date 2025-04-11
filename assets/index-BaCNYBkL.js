(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function Vf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Cl={exports:{}},Ri={},El={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function Qm(){if(nf)return me;nf=1;var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=E&&C[E]||C["@@iterator"],typeof C=="function"?C:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,L={};function R(C,B,J){this.props=C,this.context=B,this.refs=L,this.updater=J||w}R.prototype.isReactComponent={},R.prototype.setState=function(C,B){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,B,"setState")},R.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function T(){}T.prototype=R.prototype;function _(C,B,J){this.props=C,this.context=B,this.refs=L,this.updater=J||w}var W=_.prototype=new T;W.constructor=_,k(W,R.prototype),W.isPureReactComponent=!0;var M=Array.isArray,O=Object.prototype.hasOwnProperty,V={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function de(C,B,J){var Z,fe={},pe=null,xe=null;if(B!=null)for(Z in B.ref!==void 0&&(xe=B.ref),B.key!==void 0&&(pe=""+B.key),B)O.call(B,Z)&&!U.hasOwnProperty(Z)&&(fe[Z]=B[Z]);var re=arguments.length-2;if(re===1)fe.children=J;else if(1<re){for(var ge=Array(re),We=0;We<re;We++)ge[We]=arguments[We+2];fe.children=ge}if(C&&C.defaultProps)for(Z in re=C.defaultProps,re)fe[Z]===void 0&&(fe[Z]=re[Z]);return{$$typeof:n,type:C,key:pe,ref:xe,props:fe,_owner:V.current}}function oe(C,B){return{$$typeof:n,type:C.type,key:B,ref:C.ref,props:C.props,_owner:C._owner}}function we(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function Ne(C){var B={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(J){return B[J]})}var Ce=/\/+/g;function He(C,B){return typeof C=="object"&&C!==null&&C.key!=null?Ne(""+C.key):B.toString(36)}function ke(C,B,J,Z,fe){var pe=typeof C;(pe==="undefined"||pe==="boolean")&&(C=null);var xe=!1;if(C===null)xe=!0;else switch(pe){case"string":case"number":xe=!0;break;case"object":switch(C.$$typeof){case n:case o:xe=!0}}if(xe)return xe=C,fe=fe(xe),C=Z===""?"."+He(xe,0):Z,M(fe)?(J="",C!=null&&(J=C.replace(Ce,"$&/")+"/"),ke(fe,B,J,"",function(We){return We})):fe!=null&&(we(fe)&&(fe=oe(fe,J+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(Ce,"$&/")+"/")+C)),B.push(fe)),1;if(xe=0,Z=Z===""?".":Z+":",M(C))for(var re=0;re<C.length;re++){pe=C[re];var ge=Z+He(pe,re);xe+=ke(pe,B,J,ge,fe)}else if(ge=S(C),typeof ge=="function")for(C=ge.call(C),re=0;!(pe=C.next()).done;)pe=pe.value,ge=Z+He(pe,re++),xe+=ke(pe,B,J,ge,fe);else if(pe==="object")throw B=String(C),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return xe}function ze(C,B,J){if(C==null)return C;var Z=[],fe=0;return ke(C,Z,"","",function(pe){return B.call(J,pe,fe++)}),Z}function _e(C){if(C._status===-1){var B=C._result;B=B(),B.then(function(J){(C._status===0||C._status===-1)&&(C._status=1,C._result=J)},function(J){(C._status===0||C._status===-1)&&(C._status=2,C._result=J)}),C._status===-1&&(C._status=0,C._result=B)}if(C._status===1)return C._result.default;throw C._result}var je={current:null},K={transition:null},ne={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:K,ReactCurrentOwner:V};function Y(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:ze,forEach:function(C,B,J){ze(C,function(){B.apply(this,arguments)},J)},count:function(C){var B=0;return ze(C,function(){B++}),B},toArray:function(C){return ze(C,function(B){return B})||[]},only:function(C){if(!we(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},me.Component=R,me.Fragment=i,me.Profiler=c,me.PureComponent=_,me.StrictMode=u,me.Suspense=h,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,me.act=Y,me.cloneElement=function(C,B,J){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var Z=k({},C.props),fe=C.key,pe=C.ref,xe=C._owner;if(B!=null){if(B.ref!==void 0&&(pe=B.ref,xe=V.current),B.key!==void 0&&(fe=""+B.key),C.type&&C.type.defaultProps)var re=C.type.defaultProps;for(ge in B)O.call(B,ge)&&!U.hasOwnProperty(ge)&&(Z[ge]=B[ge]===void 0&&re!==void 0?re[ge]:B[ge])}var ge=arguments.length-2;if(ge===1)Z.children=J;else if(1<ge){re=Array(ge);for(var We=0;We<ge;We++)re[We]=arguments[We+2];Z.children=re}return{$$typeof:n,type:C.type,key:fe,ref:pe,props:Z,_owner:xe}},me.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:f,_context:C},C.Consumer=C},me.createElement=de,me.createFactory=function(C){var B=de.bind(null,C);return B.type=C,B},me.createRef=function(){return{current:null}},me.forwardRef=function(C){return{$$typeof:p,render:C}},me.isValidElement=we,me.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:_e}},me.memo=function(C,B){return{$$typeof:x,type:C,compare:B===void 0?null:B}},me.startTransition=function(C){var B=K.transition;K.transition={};try{C()}finally{K.transition=B}},me.unstable_act=Y,me.useCallback=function(C,B){return je.current.useCallback(C,B)},me.useContext=function(C){return je.current.useContext(C)},me.useDebugValue=function(){},me.useDeferredValue=function(C){return je.current.useDeferredValue(C)},me.useEffect=function(C,B){return je.current.useEffect(C,B)},me.useId=function(){return je.current.useId()},me.useImperativeHandle=function(C,B,J){return je.current.useImperativeHandle(C,B,J)},me.useInsertionEffect=function(C,B){return je.current.useInsertionEffect(C,B)},me.useLayoutEffect=function(C,B){return je.current.useLayoutEffect(C,B)},me.useMemo=function(C,B){return je.current.useMemo(C,B)},me.useReducer=function(C,B,J){return je.current.useReducer(C,B,J)},me.useRef=function(C){return je.current.useRef(C)},me.useState=function(C){return je.current.useState(C)},me.useSyncExternalStore=function(C,B,J){return je.current.useSyncExternalStore(C,B,J)},me.useTransition=function(){return je.current.useTransition()},me.version="18.3.1",me}var rf;function iu(){return rf||(rf=1,El.exports=Qm()),El.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function Ym(){if(af)return Ri;af=1;var n=iu(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(p,h,x){var v,E={},S=null,w=null;x!==void 0&&(S=""+x),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(w=h.ref);for(v in h)u.call(h,v)&&!f.hasOwnProperty(v)&&(E[v]=h[v]);if(p&&p.defaultProps)for(v in h=p.defaultProps,h)E[v]===void 0&&(E[v]=h[v]);return{$$typeof:o,type:p,key:S,ref:w,props:E,_owner:c.current}}return Ri.Fragment=i,Ri.jsx=m,Ri.jsxs=m,Ri}var sf;function Jm(){return sf||(sf=1,Cl.exports=Ym()),Cl.exports}var s=Jm(),N=iu();const le=Vf(N);var Di={},of;function Xm(){if(of)return Di;of=1,Object.defineProperty(Di,"__esModule",{value:!0}),Di.parse=m,Di.serialize=x;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,f=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function m(S,w){const k=new f,L=S.length;if(L<2)return k;const R=(w==null?void 0:w.decode)||v;let T=0;do{const _=S.indexOf("=",T);if(_===-1)break;const W=S.indexOf(";",T),M=W===-1?L:W;if(_>M){T=S.lastIndexOf(";",_-1)+1;continue}const O=p(S,T,_),V=h(S,_,O),U=S.slice(O,V);if(k[U]===void 0){let de=p(S,_+1,M),oe=h(S,M,de);const we=R(S.slice(de,oe));k[U]=we}T=M+1}while(T<L);return k}function p(S,w,k){do{const L=S.charCodeAt(w);if(L!==32&&L!==9)return w}while(++w<k);return k}function h(S,w,k){for(;w>k;){const L=S.charCodeAt(--w);if(L!==32&&L!==9)return w+1}return k}function x(S,w,k){const L=(k==null?void 0:k.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const R=L(w);if(!o.test(R))throw new TypeError(`argument val is invalid: ${w}`);let T=S+"="+R;if(!k)return T;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);T+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);T+="; Domain="+k.domain}if(k.path){if(!u.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);T+="; Path="+k.path}if(k.expires){if(!E(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);T+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(T+="; HttpOnly"),k.secure&&(T+="; Secure"),k.partitioned&&(T+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":T+="; Priority=Low";break;case"medium":T+="; Priority=Medium";break;case"high":T+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":T+="; SameSite=Strict";break;case"lax":T+="; SameSite=Lax";break;case"none":T+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return T}function v(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function E(S){return c.call(S)==="[object Date]"}return Di}Xm();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lf="popstate";function Zm(n={}){function o(c,f){let{pathname:m="/",search:p="",hash:h=""}=ir(c.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),Ol("",{pathname:m,search:p,hash:h},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function i(c,f){let m=c.document.querySelector("base"),p="";if(m&&m.getAttribute("href")){let h=c.location.href,x=h.indexOf("#");p=x===-1?h:h.slice(0,x)}return p+"#"+(typeof f=="string"?f:zi(f))}function u(c,f){_t(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return eg(o,i,u,n)}function De(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function _t(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function qm(){return Math.random().toString(36).substring(2,10)}function uf(n,o){return{usr:n.state,key:n.key,idx:o}}function Ol(n,o,i=null,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?ir(o):o,state:i,key:o&&o.key||u||qm()}}function zi({pathname:n="/",search:o="",hash:i=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ir(n){let o={};if(n){let i=n.indexOf("#");i>=0&&(o.hash=n.substring(i),n=n.substring(0,i));let u=n.indexOf("?");u>=0&&(o.search=n.substring(u),n=n.substring(0,u)),n&&(o.pathname=n)}return o}function eg(n,o,i,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,m=c.history,p="POP",h=null,x=v();x==null&&(x=0,m.replaceState({...m.state,idx:x},""));function v(){return(m.state||{idx:null}).idx}function E(){p="POP";let R=v(),T=R==null?null:R-x;x=R,h&&h({action:p,location:L.location,delta:T})}function S(R,T){p="PUSH";let _=Ol(L.location,R,T);i(_,R),x=v()+1;let W=uf(_,x),M=L.createHref(_);try{m.pushState(W,"",M)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;c.location.assign(M)}f&&h&&h({action:p,location:L.location,delta:1})}function w(R,T){p="REPLACE";let _=Ol(L.location,R,T);i(_,R),x=v();let W=uf(_,x),M=L.createHref(_);m.replaceState(W,"",M),f&&h&&h({action:p,location:L.location,delta:0})}function k(R){let T=c.location.origin!=="null"?c.location.origin:c.location.href,_=typeof R=="string"?R:zi(R);return _=_.replace(/ $/,"%20"),De(T,`No window.location.(origin|href) available to create URL for href: ${_}`),new URL(_,T)}let L={get action(){return p},get location(){return n(c,m)},listen(R){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(lf,E),h=R,()=>{c.removeEventListener(lf,E),h=null}},createHref(R){return o(c,R)},createURL:k,encodeLocation(R){let T=k(R);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:S,replace:w,go(R){return m.go(R)}};return L}function Kf(n,o,i="/"){return tg(n,o,i,!1)}function tg(n,o,i,u){let c=typeof o=="string"?ir(o):o,f=An(c.pathname||"/",i);if(f==null)return null;let m=Qf(n);ng(m);let p=null;for(let h=0;p==null&&h<m.length;++h){let x=pg(f);p=dg(m[h],x,u)}return p}function Qf(n,o=[],i=[],u=""){let c=(f,m,p)=>{let h={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};h.relativePath.startsWith("/")&&(De(h.relativePath.startsWith(u),`Absolute route path "${h.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(u.length));let x=an([u,h.relativePath]),v=i.concat(h);f.children&&f.children.length>0&&(De(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Qf(f.children,o,v,x)),!(f.path==null&&!f.index)&&o.push({path:x,score:ug(x,f.index),routesMeta:v})};return n.forEach((f,m)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))c(f,m);else for(let h of Yf(f.path))c(f,m,h)}),o}function Yf(n){let o=n.split("/");if(o.length===0)return[];let[i,...u]=o,c=i.endsWith("?"),f=i.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let m=Yf(u.join("/")),p=[];return p.push(...m.map(h=>h===""?f:[f,h].join("/"))),c&&p.push(...m),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function ng(n){n.sort((o,i)=>o.score!==i.score?i.score-o.score:cg(o.routesMeta.map(u=>u.childrenIndex),i.routesMeta.map(u=>u.childrenIndex)))}var rg=/^:[\w-]+$/,ig=3,ag=2,sg=1,og=10,lg=-2,cf=n=>n==="*";function ug(n,o){let i=n.split("/"),u=i.length;return i.some(cf)&&(u+=lg),o&&(u+=ag),i.filter(c=>!cf(c)).reduce((c,f)=>c+(rg.test(f)?ig:f===""?sg:og),u)}function cg(n,o){return n.length===o.length&&n.slice(0,-1).every((u,c)=>u===o[c])?n[n.length-1]-o[o.length-1]:0}function dg(n,o,i=!1){let{routesMeta:u}=n,c={},f="/",m=[];for(let p=0;p<u.length;++p){let h=u[p],x=p===u.length-1,v=f==="/"?o:o.slice(f.length)||"/",E=gs({path:h.relativePath,caseSensitive:h.caseSensitive,end:x},v),S=h.route;if(!E&&x&&i&&!u[u.length-1].route.index&&(E=gs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!E)return null;Object.assign(c,E.params),m.push({params:c,pathname:an([f,E.pathname]),pathnameBase:xg(an([f,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(f=an([f,E.pathnameBase]))}return m}function gs(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,u]=fg(n.path,n.caseSensitive,n.end),c=o.match(i);if(!c)return null;let f=c[0],m=f.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:u.reduce((x,{paramName:v,isOptional:E},S)=>{if(v==="*"){let k=p[S]||"";m=f.slice(0,f.length-k.length).replace(/(.)\/+$/,"$1")}const w=p[S];return E&&!w?x[v]=void 0:x[v]=(w||"").replace(/%2F/g,"/"),x},{}),pathname:f,pathnameBase:m,pattern:n}}function fg(n,o=!1,i=!0){_t(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let u=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,p,h)=>(u.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(u.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),u]}function pg(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return _t(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function An(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let i=o.endsWith("/")?o.length-1:o.length,u=n.charAt(i);return u&&u!=="/"?null:n.slice(i)||"/"}function hg(n,o="/"){let{pathname:i,search:u="",hash:c=""}=typeof n=="string"?ir(n):n;return{pathname:i?i.startsWith("/")?i:mg(i,o):o,search:yg(u),hash:vg(c)}}function mg(n,o){let i=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Tl(n,o,i,u){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gg(n){return n.filter((o,i)=>i===0||o.route.path&&o.route.path.length>0)}function Jf(n){let o=gg(n);return o.map((i,u)=>u===o.length-1?i.pathname:i.pathnameBase)}function Xf(n,o,i,u=!1){let c;typeof n=="string"?c=ir(n):(c={...n},De(!c.pathname||!c.pathname.includes("?"),Tl("?","pathname","search",c)),De(!c.pathname||!c.pathname.includes("#"),Tl("#","pathname","hash",c)),De(!c.search||!c.search.includes("#"),Tl("#","search","hash",c)));let f=n===""||c.pathname==="",m=f?"/":c.pathname,p;if(m==null)p=i;else{let E=o.length-1;if(!u&&m.startsWith("..")){let S=m.split("/");for(;S[0]==="..";)S.shift(),E-=1;c.pathname=S.join("/")}p=E>=0?o[E]:"/"}let h=hg(c,p),x=m&&m!=="/"&&m.endsWith("/"),v=(f||m===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(x||v)&&(h.pathname+="/"),h}var an=n=>n.join("/").replace(/\/\/+/g,"/"),xg=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),yg=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,vg=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bg(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Zf=["POST","PUT","PATCH","DELETE"];new Set(Zf);var wg=["GET",...Zf];new Set(wg);var Fr=N.createContext(null);Fr.displayName="DataRouter";var Cs=N.createContext(null);Cs.displayName="DataRouterState";var qf=N.createContext({isTransitioning:!1});qf.displayName="ViewTransition";var kg=N.createContext(new Map);kg.displayName="Fetchers";var Sg=N.createContext(null);Sg.displayName="Await";var Vt=N.createContext(null);Vt.displayName="Navigation";var Ui=N.createContext(null);Ui.displayName="Location";var ln=N.createContext({outlet:null,matches:[],isDataRoute:!1});ln.displayName="Route";var au=N.createContext(null);au.displayName="RouteError";function jg(n,{relative:o}={}){De(Hi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:u}=N.useContext(Vt),{hash:c,pathname:f,search:m}=Wi(n,{relative:o}),p=f;return i!=="/"&&(p=f==="/"?i:an([i,f])),u.createHref({pathname:p,search:m,hash:c})}function Hi(){return N.useContext(Ui)!=null}function Ln(){return De(Hi(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ui).location}var ep="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tp(n){N.useContext(Vt).static||N.useLayoutEffect(n)}function su(){let{isDataRoute:n}=N.useContext(ln);return n?_g():Ng()}function Ng(){De(Hi(),"useNavigate() may be used only in the context of a <Router> component.");let n=N.useContext(Fr),{basename:o,navigator:i}=N.useContext(Vt),{matches:u}=N.useContext(ln),{pathname:c}=Ln(),f=JSON.stringify(Jf(u)),m=N.useRef(!1);return tp(()=>{m.current=!0}),N.useCallback((h,x={})=>{if(_t(m.current,ep),!m.current)return;if(typeof h=="number"){i.go(h);return}let v=Xf(h,JSON.parse(f),c,x.relative==="path");n==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:an([o,v.pathname])),(x.replace?i.replace:i.push)(v,x.state,x)},[o,i,f,c,n])}N.createContext(null);function Wi(n,{relative:o}={}){let{matches:i}=N.useContext(ln),{pathname:u}=Ln(),c=JSON.stringify(Jf(i));return N.useMemo(()=>Xf(n,JSON.parse(c),u,o==="path"),[n,c,u,o])}function Cg(n,o){return np(n,o)}function np(n,o,i,u){var T;De(Hi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=N.useContext(Vt),{matches:f}=N.useContext(ln),m=f[f.length-1],p=m?m.params:{},h=m?m.pathname:"/",x=m?m.pathnameBase:"/",v=m&&m.route;{let _=v&&v.path||"";rp(h,!v||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let E=Ln(),S;if(o){let _=typeof o=="string"?ir(o):o;De(x==="/"||((T=_.pathname)==null?void 0:T.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${_.pathname}" was given in the \`location\` prop.`),S=_}else S=E;let w=S.pathname||"/",k=w;if(x!=="/"){let _=x.replace(/^\//,"").split("/");k="/"+w.replace(/^\//,"").split("/").slice(_.length).join("/")}let L=Kf(n,{pathname:k});_t(v||L!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),_t(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=Ag(L&&L.map(_=>Object.assign({},_,{params:Object.assign({},p,_.params),pathname:an([x,c.encodeLocation?c.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?x:an([x,c.encodeLocation?c.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),f,i,u);return o&&R?N.createElement(Ui.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},R):R}function Eg(){let n=Bg(),o=bg(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},m=null;return console.error("Error handled by React Router default ErrorBoundary:",n),m=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:f},"ErrorBoundary")," or"," ",N.createElement("code",{style:f},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},o),i?N.createElement("pre",{style:c},i):null,m)}var Tg=N.createElement(Eg,null),Ig=class extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error!==void 0?N.createElement(ln.Provider,{value:this.props.routeContext},N.createElement(au.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Pg({routeContext:n,match:o,children:i}){let u=N.useContext(Fr);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),N.createElement(ln.Provider,{value:n},i)}function Ag(n,o=[],i=null,u=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(o.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let c=n,f=i==null?void 0:i.errors;if(f!=null){let h=c.findIndex(x=>x.route.id&&(f==null?void 0:f[x.route.id])!==void 0);De(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,h+1))}let m=!1,p=-1;if(i)for(let h=0;h<c.length;h++){let x=c[h];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=h),x.route.id){let{loaderData:v,errors:E}=i,S=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!E||E[x.route.id]===void 0);if(x.route.lazy||S){m=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((h,x,v)=>{let E,S=!1,w=null,k=null;i&&(E=f&&x.route.id?f[x.route.id]:void 0,w=x.route.errorElement||Tg,m&&(p<0&&v===0?(rp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):p===v&&(S=!0,k=x.route.hydrateFallbackElement||null)));let L=o.concat(c.slice(0,v+1)),R=()=>{let T;return E?T=w:S?T=k:x.route.Component?T=N.createElement(x.route.Component,null):x.route.element?T=x.route.element:T=h,N.createElement(Pg,{match:x,routeContext:{outlet:h,matches:L,isDataRoute:i!=null},children:T})};return i&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?N.createElement(Ig,{location:i.location,revalidation:i.revalidation,component:w,error:E,children:R(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):R()},null)}function ou(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lg(n){let o=N.useContext(Fr);return De(o,ou(n)),o}function Mg(n){let o=N.useContext(Cs);return De(o,ou(n)),o}function Rg(n){let o=N.useContext(ln);return De(o,ou(n)),o}function lu(n){let o=Rg(n),i=o.matches[o.matches.length-1];return De(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function Dg(){return lu("useRouteId")}function Bg(){var u;let n=N.useContext(au),o=Mg("useRouteError"),i=lu("useRouteError");return n!==void 0?n:(u=o.errors)==null?void 0:u[i]}function _g(){let{router:n}=Lg("useNavigate"),o=lu("useNavigate"),i=N.useRef(!1);return tp(()=>{i.current=!0}),N.useCallback(async(c,f={})=>{_t(i.current,ep),i.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:o,...f}))},[n,o])}var df={};function rp(n,o,i){!o&&!df[n]&&(df[n]=!0,_t(!1,i))}N.memo(Og);function Og({routes:n,future:o,state:i}){return np(n,void 0,i,o)}function Zn(n){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $g({basename:n="/",children:o=null,location:i,navigationType:u="POP",navigator:c,static:f=!1}){De(!Hi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),p=N.useMemo(()=>({basename:m,navigator:c,static:f,future:{}}),[m,c,f]);typeof i=="string"&&(i=ir(i));let{pathname:h="/",search:x="",hash:v="",state:E=null,key:S="default"}=i,w=N.useMemo(()=>{let k=An(h,m);return k==null?null:{location:{pathname:k,search:x,hash:v,state:E,key:S},navigationType:u}},[m,h,x,v,E,S,u]);return _t(w!=null,`<Router basename="${m}"> is not able to match the URL "${h}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:N.createElement(Vt.Provider,{value:p},N.createElement(Ui.Provider,{children:o,value:w}))}function zg({children:n,location:o}){return Cg($l(n),o)}function $l(n,o=[]){let i=[];return N.Children.forEach(n,(u,c)=>{if(!N.isValidElement(u))return;let f=[...o,c];if(u.type===N.Fragment){i.push.apply(i,$l(u.props.children,f));return}De(u.type===Zn,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!u.props.index||!u.props.children,"An index route cannot have child routes.");let m={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(m.children=$l(u.props.children,f)),i.push(m)}),i}var ls="get",us="application/x-www-form-urlencoded";function Es(n){return n!=null&&typeof n.tagName=="string"}function Fg(n){return Es(n)&&n.tagName.toLowerCase()==="button"}function Ug(n){return Es(n)&&n.tagName.toLowerCase()==="form"}function Hg(n){return Es(n)&&n.tagName.toLowerCase()==="input"}function Wg(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Gg(n,o){return n.button===0&&(!o||o==="_self")&&!Wg(n)}var es=null;function Vg(){if(es===null)try{new FormData(document.createElement("form"),0),es=!1}catch{es=!0}return es}var Kg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Il(n){return n!=null&&!Kg.has(n)?(_t(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${us}"`),null):n}function Qg(n,o){let i,u,c,f,m;if(Ug(n)){let p=n.getAttribute("action");u=p?An(p,o):null,i=n.getAttribute("method")||ls,c=Il(n.getAttribute("enctype"))||us,f=new FormData(n)}else if(Fg(n)||Hg(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(u=h?An(h,o):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||ls,c=Il(n.getAttribute("formenctype"))||Il(p.getAttribute("enctype"))||us,f=new FormData(p,n),!Vg()){let{name:x,type:v,value:E}=n;if(v==="image"){let S=x?`${x}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else x&&f.append(x,E)}}else{if(Es(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ls,u=null,c=us,m=n}return f&&c==="text/plain"&&(m=f,f=void 0),{action:u,method:i.toLowerCase(),encType:c,formData:f,body:m}}function uu(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}async function Yg(n,o){if(n.id in o)return o[n.id];try{let i=await import(n.module);return o[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jg(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Xg(n,o,i){let u=await Promise.all(n.map(async c=>{let f=o.routes[c.route.id];if(f){let m=await Yg(f,i);return m.links?m.links():[]}return[]}));return t0(u.flat(1).filter(Jg).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function ff(n,o,i,u,c,f){let m=(h,x)=>i[x]?h.route.id!==i[x].route.id:!0,p=(h,x)=>{var v;return i[x].pathname!==h.pathname||((v=i[x].route.path)==null?void 0:v.endsWith("*"))&&i[x].params["*"]!==h.params["*"]};return f==="assets"?o.filter((h,x)=>m(h,x)||p(h,x)):f==="data"?o.filter((h,x)=>{var E;let v=u.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(m(h,x)||p(h,x))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((E=i[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Zg(n,o){return qg(n.map(i=>{let u=o.routes[i.route.id];if(!u)return[];let c=[u.module];return u.imports&&(c=c.concat(u.imports)),c}).flat(1))}function qg(n){return[...new Set(n)]}function e0(n){let o={},i=Object.keys(n).sort();for(let u of i)o[u]=n[u];return o}function t0(n,o){let i=new Set;return new Set(o),n.reduce((u,c)=>{let f=JSON.stringify(e0(c));return i.has(f)||(i.add(f),u.push({key:f,link:c})),u},[])}function n0(n){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname="_root.data":o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function r0(){let n=N.useContext(Fr);return uu(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function i0(){let n=N.useContext(Cs);return uu(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var cu=N.createContext(void 0);cu.displayName="FrameworkContext";function ip(){let n=N.useContext(cu);return uu(n,"You must render this element inside a <HydratedRouter> element"),n}function a0(n,o){let i=N.useContext(cu),[u,c]=N.useState(!1),[f,m]=N.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:x,onMouseLeave:v,onTouchStart:E}=o,S=N.useRef(null);N.useEffect(()=>{if(n==="render"&&m(!0),n==="viewport"){let L=T=>{T.forEach(_=>{m(_.isIntersecting)})},R=new IntersectionObserver(L,{threshold:.5});return S.current&&R.observe(S.current),()=>{R.disconnect()}}},[n]),N.useEffect(()=>{if(u){let L=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(L)}}},[u]);let w=()=>{c(!0)},k=()=>{c(!1),m(!1)};return i?n!=="intent"?[f,S,{}]:[f,S,{onFocus:Bi(p,w),onBlur:Bi(h,k),onMouseEnter:Bi(x,w),onMouseLeave:Bi(v,k),onTouchStart:Bi(E,w)}]:[!1,S,{}]}function Bi(n,o){return i=>{n&&n(i),i.defaultPrevented||o(i)}}function s0({page:n,...o}){let{router:i}=r0(),u=N.useMemo(()=>Kf(i.routes,n,i.basename),[i.routes,n,i.basename]);return u?N.createElement(l0,{page:n,matches:u,...o}):null}function o0(n){let{manifest:o,routeModules:i}=ip(),[u,c]=N.useState([]);return N.useEffect(()=>{let f=!1;return Xg(n,o,i).then(m=>{f||c(m)}),()=>{f=!0}},[n,o,i]),u}function l0({page:n,matches:o,...i}){let u=Ln(),{manifest:c,routeModules:f}=ip(),{loaderData:m,matches:p}=i0(),h=N.useMemo(()=>ff(n,o,p,c,u,"data"),[n,o,p,c,u]),x=N.useMemo(()=>ff(n,o,p,c,u,"assets"),[n,o,p,c,u]),v=N.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let w=new Set,k=!1;if(o.forEach(R=>{var _;let T=c.routes[R.route.id];!T||!T.hasLoader||(!h.some(W=>W.route.id===R.route.id)&&R.route.id in m&&((_=f[R.route.id])!=null&&_.shouldRevalidate)||T.hasClientLoader?k=!0:w.add(R.route.id))}),w.size===0)return[];let L=n0(n);return k&&w.size>0&&L.searchParams.set("_routes",o.filter(R=>w.has(R.route.id)).map(R=>R.route.id).join(",")),[L.pathname+L.search]},[m,u,c,h,o,n,f]),E=N.useMemo(()=>Zg(x,c),[x,c]),S=o0(x);return N.createElement(N.Fragment,null,v.map(w=>N.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),E.map(w=>N.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),S.map(({key:w,link:k})=>N.createElement("link",{key:w,...k})))}function u0(...n){return o=>{n.forEach(i=>{typeof i=="function"?i(o):i!=null&&(i.current=o)})}}var ap=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ap&&(window.__reactRouterVersion="7.1.3")}catch{}function c0({basename:n,children:o,window:i}){let u=N.useRef();u.current==null&&(u.current=Zm({window:i,v5Compat:!0}));let c=u.current,[f,m]=N.useState({action:c.action,location:c.location}),p=N.useCallback(h=>{N.startTransition(()=>m(h))},[m]);return N.useLayoutEffect(()=>c.listen(p),[c,p]),N.createElement($g,{basename:n,children:o,location:f.location,navigationType:f.action,navigator:c})}var sp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,op=N.forwardRef(function({onClick:o,discover:i="render",prefetch:u="none",relative:c,reloadDocument:f,replace:m,state:p,target:h,to:x,preventScrollReset:v,viewTransition:E,...S},w){let{basename:k}=N.useContext(Vt),L=typeof x=="string"&&sp.test(x),R,T=!1;if(typeof x=="string"&&L&&(R=x,ap))try{let oe=new URL(window.location.href),we=x.startsWith("//")?new URL(oe.protocol+x):new URL(x),Ne=An(we.pathname,k);we.origin===oe.origin&&Ne!=null?x=Ne+we.search+we.hash:T=!0}catch{_t(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=jg(x,{relative:c}),[W,M,O]=a0(u,S),V=h0(x,{replace:m,state:p,target:h,preventScrollReset:v,relative:c,viewTransition:E});function U(oe){o&&o(oe),oe.defaultPrevented||V(oe)}let de=N.createElement("a",{...S,...O,href:R||_,onClick:T||f?o:U,ref:u0(w,M),target:h,"data-discover":!L&&i==="render"?"true":void 0});return W&&!L?N.createElement(N.Fragment,null,de,N.createElement(s0,{page:_})):de});op.displayName="Link";var d0=N.forwardRef(function({"aria-current":o="page",caseSensitive:i=!1,className:u="",end:c=!1,style:f,to:m,viewTransition:p,children:h,...x},v){let E=Wi(m,{relative:x.relative}),S=Ln(),w=N.useContext(Cs),{navigator:k,basename:L}=N.useContext(Vt),R=w!=null&&v0(E)&&p===!0,T=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,_=S.pathname,W=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(_=_.toLowerCase(),W=W?W.toLowerCase():null,T=T.toLowerCase()),W&&L&&(W=An(W,L)||W);const M=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let O=_===T||!c&&_.startsWith(T)&&_.charAt(M)==="/",V=W!=null&&(W===T||!c&&W.startsWith(T)&&W.charAt(T.length)==="/"),U={isActive:O,isPending:V,isTransitioning:R},de=O?o:void 0,oe;typeof u=="function"?oe=u(U):oe=[u,O?"active":null,V?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let we=typeof f=="function"?f(U):f;return N.createElement(op,{...x,"aria-current":de,className:oe,ref:v,style:we,to:m,viewTransition:p},typeof h=="function"?h(U):h)});d0.displayName="NavLink";var f0=N.forwardRef(({discover:n="render",fetcherKey:o,navigate:i,reloadDocument:u,replace:c,state:f,method:m=ls,action:p,onSubmit:h,relative:x,preventScrollReset:v,viewTransition:E,...S},w)=>{let k=x0(),L=y0(p,{relative:x}),R=m.toLowerCase()==="get"?"get":"post",T=typeof p=="string"&&sp.test(p),_=W=>{if(h&&h(W),W.defaultPrevented)return;W.preventDefault();let M=W.nativeEvent.submitter,O=(M==null?void 0:M.getAttribute("formmethod"))||m;k(M||W.currentTarget,{fetcherKey:o,method:O,navigate:i,replace:c,state:f,relative:x,preventScrollReset:v,viewTransition:E})};return N.createElement("form",{ref:w,method:R,action:L,onSubmit:u?h:_,...S,"data-discover":!T&&n==="render"?"true":void 0})});f0.displayName="Form";function p0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lp(n){let o=N.useContext(Fr);return De(o,p0(n)),o}function h0(n,{target:o,replace:i,state:u,preventScrollReset:c,relative:f,viewTransition:m}={}){let p=su(),h=Ln(),x=Wi(n,{relative:f});return N.useCallback(v=>{if(Gg(v,o)){v.preventDefault();let E=i!==void 0?i:zi(h)===zi(x);p(n,{replace:E,state:u,preventScrollReset:c,relative:f,viewTransition:m})}},[h,p,x,i,u,o,n,c,f,m])}var m0=0,g0=()=>`__${String(++m0)}__`;function x0(){let{router:n}=lp("useSubmit"),{basename:o}=N.useContext(Vt),i=Dg();return N.useCallback(async(u,c={})=>{let{action:f,method:m,encType:p,formData:h,body:x}=Qg(u,o);if(c.navigate===!1){let v=c.fetcherKey||g0();await n.fetch(v,i,c.action||f,{preventScrollReset:c.preventScrollReset,formData:h,body:x,formMethod:c.method||m,formEncType:c.encType||p,flushSync:c.flushSync})}else await n.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:h,body:x,formMethod:c.method||m,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,o,i])}function y0(n,{relative:o}={}){let{basename:i}=N.useContext(Vt),u=N.useContext(ln);De(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...Wi(n||".",{relative:o})},m=Ln();if(n==null){f.search=m.search;let p=new URLSearchParams(f.search),h=p.getAll("index");if(h.some(v=>v==="")){p.delete("index"),h.filter(E=>E).forEach(E=>p.append("index",E));let v=p.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(f.pathname=f.pathname==="/"?i:an([i,f.pathname])),zi(f)}function v0(n,o={}){let i=N.useContext(qf);De(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=lp("useViewTransitionState"),c=Wi(n,{relative:o.relative});if(!i.isTransitioning)return!1;let f=An(i.currentLocation.pathname,u)||i.currentLocation.pathname,m=An(i.nextLocation.pathname,u)||i.nextLocation.pathname;return gs(c.pathname,m)!=null||gs(c.pathname,f)!=null}new TextEncoder;var Pl={exports:{}},ft={},Al={exports:{}},Ll={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function b0(){return pf||(pf=1,function(n){function o(K,ne){var Y=K.length;K.push(ne);e:for(;0<Y;){var C=Y-1>>>1,B=K[C];if(0<c(B,ne))K[C]=ne,K[Y]=B,Y=C;else break e}}function i(K){return K.length===0?null:K[0]}function u(K){if(K.length===0)return null;var ne=K[0],Y=K.pop();if(Y!==ne){K[0]=Y;e:for(var C=0,B=K.length,J=B>>>1;C<J;){var Z=2*(C+1)-1,fe=K[Z],pe=Z+1,xe=K[pe];if(0>c(fe,Y))pe<B&&0>c(xe,fe)?(K[C]=xe,K[pe]=Y,C=pe):(K[C]=fe,K[Z]=Y,C=Z);else if(pe<B&&0>c(xe,Y))K[C]=xe,K[pe]=Y,C=pe;else break e}}return ne}function c(K,ne){var Y=K.sortIndex-ne.sortIndex;return Y!==0?Y:K.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var m=Date,p=m.now();n.unstable_now=function(){return m.now()-p}}var h=[],x=[],v=1,E=null,S=3,w=!1,k=!1,L=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(K){for(var ne=i(x);ne!==null;){if(ne.callback===null)u(x);else if(ne.startTime<=K)u(x),ne.sortIndex=ne.expirationTime,o(h,ne);else break;ne=i(x)}}function M(K){if(L=!1,W(K),!k)if(i(h)!==null)k=!0,_e(O);else{var ne=i(x);ne!==null&&je(M,ne.startTime-K)}}function O(K,ne){k=!1,L&&(L=!1,T(de),de=-1),w=!0;var Y=S;try{for(W(ne),E=i(h);E!==null&&(!(E.expirationTime>ne)||K&&!Ne());){var C=E.callback;if(typeof C=="function"){E.callback=null,S=E.priorityLevel;var B=C(E.expirationTime<=ne);ne=n.unstable_now(),typeof B=="function"?E.callback=B:E===i(h)&&u(h),W(ne)}else u(h);E=i(h)}if(E!==null)var J=!0;else{var Z=i(x);Z!==null&&je(M,Z.startTime-ne),J=!1}return J}finally{E=null,S=Y,w=!1}}var V=!1,U=null,de=-1,oe=5,we=-1;function Ne(){return!(n.unstable_now()-we<oe)}function Ce(){if(U!==null){var K=n.unstable_now();we=K;var ne=!0;try{ne=U(!0,K)}finally{ne?He():(V=!1,U=null)}}else V=!1}var He;if(typeof _=="function")He=function(){_(Ce)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ze=ke.port2;ke.port1.onmessage=Ce,He=function(){ze.postMessage(null)}}else He=function(){R(Ce,0)};function _e(K){U=K,V||(V=!0,He())}function je(K,ne){de=R(function(){K(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_continueExecution=function(){k||w||(k=!0,_e(O))},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(K){switch(S){case 1:case 2:case 3:var ne=3;break;default:ne=S}var Y=S;S=ne;try{return K()}finally{S=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(K,ne){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Y=S;S=K;try{return ne()}finally{S=Y}},n.unstable_scheduleCallback=function(K,ne,Y){var C=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?C+Y:C):Y=C,K){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=Y+B,K={id:v++,callback:ne,priorityLevel:K,startTime:Y,expirationTime:B,sortIndex:-1},Y>C?(K.sortIndex=Y,o(x,K),i(h)===null&&K===i(x)&&(L?(T(de),de=-1):L=!0,je(M,Y-C))):(K.sortIndex=B,o(h,K),k||w||(k=!0,_e(O))),K},n.unstable_shouldYield=Ne,n.unstable_wrapCallback=function(K){var ne=S;return function(){var Y=S;S=ne;try{return K.apply(this,arguments)}finally{S=Y}}}}(Ll)),Ll}var hf;function w0(){return hf||(hf=1,Al.exports=b0()),Al.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function k0(){if(mf)return ft;mf=1;var n=iu(),o=w0();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,c={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(c[e]=t,e=0;e<t.length;e++)u.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function S(e){return h.call(E,e)?!0:h.call(v,e)?!1:x.test(e)?E[e]=!0:(v[e]=!0,!1)}function w(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,t,r,a){if(t===null||typeof t>"u"||w(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,r,a,l,d,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=g}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function _(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T,_);R[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T,_);R[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T,_);R[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,r,a){var l=R.hasOwnProperty(t)?R[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k(t,r,l,a)&&(r=null),a||l===null?S(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var M=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),V=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),we=Symbol.for("react.provider"),Ne=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),K=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,C;function B(e){if(C===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);C=t&&t[1]||""}return`
`+C+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(A){var a=A}Reflect.construct(e,[],t)}else{try{t.call()}catch(A){a=A}e.call(t.prototype)}else{try{throw Error()}catch(A){a=A}e()}}catch(A){if(A&&a&&typeof A.stack=="string"){for(var l=A.stack.split(`
`),d=a.stack.split(`
`),g=l.length-1,y=d.length-1;1<=g&&0<=y&&l[g]!==d[y];)y--;for(;1<=g&&0<=y;g--,y--)if(l[g]!==d[y]){if(g!==1||y!==1)do if(g--,y--,0>y||l[g]!==d[y]){var b=`
`+l[g].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=g&&0<=y);break}}}finally{J=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?B(e):""}function fe(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case V:return"Portal";case oe:return"Profiler";case de:return"StrictMode";case He:return"Suspense";case ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ne:return(e.displayName||"Context")+".Consumer";case we:return(e._context.displayName||"Context")+".Provider";case Ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function We(e){var t=ge(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,d.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tt(e){e._valueTracker||(e._valueTracker=We(e))}function st(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=ge(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function Bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sr(e,t){var r=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Gr(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=re(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vr(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function or(e,t){Vr(e,t);var r=re(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lr(e,t.type,r):t.hasOwnProperty("defaultValue")&&lr(e,t.type,re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kr(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function lr(e,t,r){(t!=="number"||Bn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var un=Array.isArray;function Kt(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+re(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ur(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qr(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(i(92));if(un(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:re(r)}}function Yr(e,t){var r=re(t.value),a=re(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Jr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function D(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var G,Q=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(G=G||document.createElement("div"),G.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=G.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Le(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},On=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){On.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function xu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function yu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=xu(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var eh=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _s(e,t){if(t){if(eh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $s=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,cr=null,dr=null;function vu(e){if(e=vi(e)){if(typeof Fs!="function")throw Error(i(280));var t=e.stateNode;t&&(t=ma(t),Fs(e.stateNode,e.type,t))}}function bu(e){cr?dr?dr.push(e):dr=[e]:cr=e}function wu(){if(cr){var e=cr,t=dr;if(dr=cr=null,vu(e),t)for(e=0;e<t.length;e++)vu(t[e])}}function ku(e,t){return e(t)}function Su(){}var Us=!1;function ju(e,t,r){if(Us)return e(t,r);Us=!0;try{return ku(e,t,r)}finally{Us=!1,(cr!==null||dr!==null)&&(Su(),wu())}}function Zr(e,t){var r=e.stateNode;if(r===null)return null;var a=ma(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var Hs=!1;if(p)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Hs=!1}function th(e,t,r,a,l,d,g,y,b){var A=Array.prototype.slice.call(arguments,3);try{t.apply(r,A)}catch(z){this.onError(z)}}var ei=!1,Ki=null,Qi=!1,Ws=null,nh={onError:function(e){ei=!0,Ki=e}};function rh(e,t,r,a,l,d,g,y,b){ei=!1,Ki=null,th.apply(nh,arguments)}function ih(e,t,r,a,l,d,g,y,b){if(rh.apply(this,arguments),ei){if(ei){var A=Ki;ei=!1,Ki=null}else throw Error(i(198));Qi||(Qi=!0,Ws=A)}}function $n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Nu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cu(e){if($n(e)!==e)throw Error(i(188))}function ah(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var d=l.alternate;if(d===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===r)return Cu(l),e;if(d===a)return Cu(l),t;d=d.sibling}throw Error(i(188))}if(r.return!==a.return)r=l,a=d;else{for(var g=!1,y=l.child;y;){if(y===r){g=!0,r=l,a=d;break}if(y===a){g=!0,a=l,r=d;break}y=y.sibling}if(!g){for(y=d.child;y;){if(y===r){g=!0,r=d,a=l;break}if(y===a){g=!0,a=d,r=l;break}y=y.sibling}if(!g)throw Error(i(189))}}if(r.alternate!==a)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function Eu(e){return e=ah(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tu(e);if(t!==null)return t;e=e.sibling}return null}var Iu=o.unstable_scheduleCallback,Pu=o.unstable_cancelCallback,sh=o.unstable_shouldYield,oh=o.unstable_requestPaint,Oe=o.unstable_now,lh=o.unstable_getCurrentPriorityLevel,Gs=o.unstable_ImmediatePriority,Au=o.unstable_UserBlockingPriority,Yi=o.unstable_NormalPriority,uh=o.unstable_LowPriority,Lu=o.unstable_IdlePriority,Ji=null,Ot=null;function ch(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:ph,dh=Math.log,fh=Math.LN2;function ph(e){return e>>>=0,e===0?32:31-(dh(e)/fh|0)|0}var Xi=64,Zi=4194304;function ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,d=e.pingedLanes,g=r&268435455;if(g!==0){var y=g&~l;y!==0?a=ti(y):(d&=g,d!==0&&(a=ti(d)))}else g=r&~l,g!==0?a=ti(g):d!==0&&(a=ti(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-It(t),l=1<<r,a|=e[r],t&=~l;return a}function hh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mh(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var g=31-It(d),y=1<<g,b=l[g];b===-1?((y&r)===0||(y&a)!==0)&&(l[g]=hh(y,t)):b<=t&&(e.expiredLanes|=y),d&=~y}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mu(){var e=Xi;return Xi<<=1,(Xi&4194240)===0&&(Xi=64),e}function Ks(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ni(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=r}function gh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-It(r),d=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~d}}function Qs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-It(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var Se=0;function Ru(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Du,Ys,Bu,_u,Ou,Js=!1,ea=[],cn=null,dn=null,fn=null,ri=new Map,ii=new Map,pn=[],xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $u(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(t.pointerId)}}function ai(e,t,r,a,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:d,targetContainers:[l]},t!==null&&(t=vi(t),t!==null&&Ys(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yh(e,t,r,a,l){switch(t){case"focusin":return cn=ai(cn,e,t,r,a,l),!0;case"dragenter":return dn=ai(dn,e,t,r,a,l),!0;case"mouseover":return fn=ai(fn,e,t,r,a,l),!0;case"pointerover":var d=l.pointerId;return ri.set(d,ai(ri.get(d)||null,e,t,r,a,l)),!0;case"gotpointercapture":return d=l.pointerId,ii.set(d,ai(ii.get(d)||null,e,t,r,a,l)),!0}return!1}function zu(e){var t=zn(e.target);if(t!==null){var r=$n(t);if(r!==null){if(t=r.tag,t===13){if(t=Nu(r),t!==null){e.blockedOn=t,Ou(e.priority,function(){Bu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ta(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);$s=a,r.target.dispatchEvent(a),$s=null}else return t=vi(r),t!==null&&Ys(t),e.blockedOn=r,!1;t.shift()}return!0}function Fu(e,t,r){ta(e)&&r.delete(t)}function vh(){Js=!1,cn!==null&&ta(cn)&&(cn=null),dn!==null&&ta(dn)&&(dn=null),fn!==null&&ta(fn)&&(fn=null),ri.forEach(Fu),ii.forEach(Fu)}function si(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vh)))}function oi(e){function t(l){return si(l,e)}if(0<ea.length){si(ea[0],e);for(var r=1;r<ea.length;r++){var a=ea[r];a.blockedOn===e&&(a.blockedOn=null)}}for(cn!==null&&si(cn,e),dn!==null&&si(dn,e),fn!==null&&si(fn,e),ri.forEach(t),ii.forEach(t),r=0;r<pn.length;r++)a=pn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<pn.length&&(r=pn[0],r.blockedOn===null);)zu(r),r.blockedOn===null&&pn.shift()}var fr=M.ReactCurrentBatchConfig,na=!0;function bh(e,t,r,a){var l=Se,d=fr.transition;fr.transition=null;try{Se=1,Xs(e,t,r,a)}finally{Se=l,fr.transition=d}}function wh(e,t,r,a){var l=Se,d=fr.transition;fr.transition=null;try{Se=4,Xs(e,t,r,a)}finally{Se=l,fr.transition=d}}function Xs(e,t,r,a){if(na){var l=Zs(e,t,r,a);if(l===null)go(e,t,a,ra,r),$u(e,a);else if(yh(l,e,t,r,a))a.stopPropagation();else if($u(e,a),t&4&&-1<xh.indexOf(e)){for(;l!==null;){var d=vi(l);if(d!==null&&Du(d),d=Zs(e,t,r,a),d===null&&go(e,t,a,ra,r),d===l)break;l=d}l!==null&&a.stopPropagation()}else go(e,t,a,null,r)}}var ra=null;function Zs(e,t,r,a){if(ra=null,e=zs(a),e=zn(e),e!==null)if(t=$n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Nu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function Uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lh()){case Gs:return 1;case Au:return 4;case Yi:case uh:return 16;case Lu:return 536870912;default:return 16}default:return 16}}var hn=null,qs=null,ia=null;function Hu(){if(ia)return ia;var e,t=qs,r=t.length,a,l="value"in hn?hn.value:hn.textContent,d=l.length;for(e=0;e<r&&t[e]===l[e];e++);var g=r-e;for(a=1;a<=g&&t[r-a]===l[d-a];a++);return ia=l.slice(e,1<a?1-a:void 0)}function aa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sa(){return!0}function Wu(){return!1}function mt(e){function t(r,a,l,d,g){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?sa:Wu,this.isPropagationStopped=Wu,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=mt(pr),li=Y({},pr,{view:0,detail:0}),kh=mt(li),to,no,ui,oa=Y({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(to=e.screenX-ui.screenX,no=e.screenY-ui.screenY):no=to=0,ui=e),to)},movementY:function(e){return"movementY"in e?e.movementY:no}}),Gu=mt(oa),Sh=Y({},oa,{dataTransfer:0}),jh=mt(Sh),Nh=Y({},li,{relatedTarget:0}),ro=mt(Nh),Ch=Y({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=mt(Ch),Th=Y({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ih=mt(Th),Ph=Y({},pr,{data:0}),Vu=mt(Ph),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mh[e])?!!t[e]:!1}function io(){return Rh}var Dh=Y({},li,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=aa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:io,charCode:function(e){return e.type==="keypress"?aa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?aa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bh=mt(Dh),_h=Y({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=mt(_h),Oh=Y({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:io}),$h=mt(Oh),zh=Y({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=mt(zh),Uh=Y({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hh=mt(Uh),Wh=[9,13,27,32],ao=p&&"CompositionEvent"in window,ci=null;p&&"documentMode"in document&&(ci=document.documentMode);var Gh=p&&"TextEvent"in window&&!ci,Qu=p&&(!ao||ci&&8<ci&&11>=ci),Yu=" ",Ju=!1;function Xu(e,t){switch(e){case"keyup":return Wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function Vh(e,t){switch(e){case"compositionend":return Zu(t);case"keypress":return t.which!==32?null:(Ju=!0,Yu);case"textInput":return e=t.data,e===Yu&&Ju?null:e;default:return null}}function Kh(e,t){if(hr)return e==="compositionend"||!ao&&Xu(e,t)?(e=Hu(),ia=qs=hn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qu&&t.locale!=="ko"?null:t.data;default:return null}}var Qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qh[e.type]:t==="textarea"}function ec(e,t,r,a){bu(a),t=fa(t,"onChange"),0<t.length&&(r=new eo("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var di=null,fi=null;function Yh(e){yc(e,0)}function la(e){var t=vr(e);if(st(t))return e}function Jh(e,t){if(e==="change")return t}var tc=!1;if(p){var so;if(p){var oo="oninput"in document;if(!oo){var nc=document.createElement("div");nc.setAttribute("oninput","return;"),oo=typeof nc.oninput=="function"}so=oo}else so=!1;tc=so&&(!document.documentMode||9<document.documentMode)}function rc(){di&&(di.detachEvent("onpropertychange",ic),fi=di=null)}function ic(e){if(e.propertyName==="value"&&la(fi)){var t=[];ec(t,fi,e,zs(e)),ju(Yh,t)}}function Xh(e,t,r){e==="focusin"?(rc(),di=t,fi=r,di.attachEvent("onpropertychange",ic)):e==="focusout"&&rc()}function Zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return la(fi)}function qh(e,t){if(e==="click")return la(t)}function em(e,t){if(e==="input"||e==="change")return la(t)}function tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:tm;function pi(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!h.call(t,l)||!Pt(e[l],t[l]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,t){var r=ac(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ac(r)}}function oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lc(){for(var e=window,t=Bn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Bn(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nm(e){var t=lc(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&oc(r.ownerDocument.documentElement,r)){if(a!==null&&lo(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,d=Math.min(a.start,l);a=a.end===void 0?d:Math.min(a.end,l),!e.extend&&d>a&&(l=a,a=d,d=l),l=sc(r,d);var g=sc(r,a);l&&g&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=p&&"documentMode"in document&&11>=document.documentMode,mr=null,uo=null,hi=null,co=!1;function uc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;co||mr==null||mr!==Bn(a)||(a=mr,"selectionStart"in a&&lo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),hi&&pi(hi,a)||(hi=a,a=fa(uo,"onSelect"),0<a.length&&(t=new eo("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=mr)))}function ua(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gr={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},fo={},cc={};p&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function ca(e){if(fo[e])return fo[e];if(!gr[e])return e;var t=gr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in cc)return fo[e]=t[r];return e}var dc=ca("animationend"),fc=ca("animationiteration"),pc=ca("animationstart"),hc=ca("transitionend"),mc=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){mc.set(e,t),f(t,[e])}for(var po=0;po<gc.length;po++){var ho=gc[po],im=ho.toLowerCase(),am=ho[0].toUpperCase()+ho.slice(1);mn(im,"on"+am)}mn(dc,"onAnimationEnd"),mn(fc,"onAnimationIteration"),mn(pc,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(hc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function xc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,ih(a,t,void 0,e),e.currentTarget=null}function yc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var g=a.length-1;0<=g;g--){var y=a[g],b=y.instance,A=y.currentTarget;if(y=y.listener,b!==d&&l.isPropagationStopped())break e;xc(l,y,A),d=b}else for(g=0;g<a.length;g++){if(y=a[g],b=y.instance,A=y.currentTarget,y=y.listener,b!==d&&l.isPropagationStopped())break e;xc(l,y,A),d=b}}}if(Qi)throw e=Ws,Qi=!1,Ws=null,e}function Te(e,t){var r=t[ko];r===void 0&&(r=t[ko]=new Set);var a=e+"__bubble";r.has(a)||(vc(t,e,2,!1),r.add(a))}function mo(e,t,r){var a=0;t&&(a|=4),vc(r,e,a,t)}var da="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[da]){e[da]=!0,u.forEach(function(r){r!=="selectionchange"&&(sm.has(r)||mo(r,!1,e),mo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[da]||(t[da]=!0,mo("selectionchange",!1,t))}}function vc(e,t,r,a){switch(Uu(t)){case 1:var l=bh;break;case 4:l=wh;break;default:l=Xs}r=l.bind(null,t,r,e),l=void 0,!Hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function go(e,t,r,a,l){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var y=a.stateNode.containerInfo;if(y===l||y.nodeType===8&&y.parentNode===l)break;if(g===4)for(g=a.return;g!==null;){var b=g.tag;if((b===3||b===4)&&(b=g.stateNode.containerInfo,b===l||b.nodeType===8&&b.parentNode===l))return;g=g.return}for(;y!==null;){if(g=zn(y),g===null)return;if(b=g.tag,b===5||b===6){a=d=g;continue e}y=y.parentNode}}a=a.return}ju(function(){var A=d,z=zs(r),F=[];e:{var $=mc.get(e);if($!==void 0){var X=eo,ee=e;switch(e){case"keypress":if(aa(r)===0)break e;case"keydown":case"keyup":X=Bh;break;case"focusin":ee="focus",X=ro;break;case"focusout":ee="blur",X=ro;break;case"beforeblur":case"afterblur":X=ro;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=$h;break;case dc:case fc:case pc:X=Eh;break;case hc:X=Fh;break;case"scroll":X=kh;break;case"wheel":X=Hh;break;case"copy":case"cut":case"paste":X=Ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Ku}var te=(t&4)!==0,$e=!te&&e==="scroll",I=te?$!==null?$+"Capture":null:$;te=[];for(var j=A,P;j!==null;){P=j;var H=P.stateNode;if(P.tag===5&&H!==null&&(P=H,I!==null&&(H=Zr(j,I),H!=null&&te.push(xi(j,H,P)))),$e)break;j=j.return}0<te.length&&($=new X($,ee,null,r,z),F.push({event:$,listeners:te}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",$&&r!==$s&&(ee=r.relatedTarget||r.fromElement)&&(zn(ee)||ee[Qt]))break e;if((X||$)&&($=z.window===z?z:($=z.ownerDocument)?$.defaultView||$.parentWindow:window,X?(ee=r.relatedTarget||r.toElement,X=A,ee=ee?zn(ee):null,ee!==null&&($e=$n(ee),ee!==$e||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(X=null,ee=A),X!==ee)){if(te=Gu,H="onMouseLeave",I="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ku,H="onPointerLeave",I="onPointerEnter",j="pointer"),$e=X==null?$:vr(X),P=ee==null?$:vr(ee),$=new te(H,j+"leave",X,r,z),$.target=$e,$.relatedTarget=P,H=null,zn(z)===A&&(te=new te(I,j+"enter",ee,r,z),te.target=P,te.relatedTarget=$e,H=te),$e=H,X&&ee)t:{for(te=X,I=ee,j=0,P=te;P;P=xr(P))j++;for(P=0,H=I;H;H=xr(H))P++;for(;0<j-P;)te=xr(te),j--;for(;0<P-j;)I=xr(I),P--;for(;j--;){if(te===I||I!==null&&te===I.alternate)break t;te=xr(te),I=xr(I)}te=null}else te=null;X!==null&&bc(F,$,X,te,!1),ee!==null&&$e!==null&&bc(F,$e,ee,te,!0)}}e:{if($=A?vr(A):window,X=$.nodeName&&$.nodeName.toLowerCase(),X==="select"||X==="input"&&$.type==="file")var ie=Jh;else if(qu($))if(tc)ie=em;else{ie=Zh;var ae=Xh}else(X=$.nodeName)&&X.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(ie=qh);if(ie&&(ie=ie(e,A))){ec(F,ie,r,z);break e}ae&&ae(e,$,A),e==="focusout"&&(ae=$._wrapperState)&&ae.controlled&&$.type==="number"&&lr($,"number",$.value)}switch(ae=A?vr(A):window,e){case"focusin":(qu(ae)||ae.contentEditable==="true")&&(mr=ae,uo=A,hi=null);break;case"focusout":hi=uo=mr=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,uc(F,r,z);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":uc(F,r,z)}var se;if(ao)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else hr?Xu(e,r)&&(ce="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ce="onCompositionStart");ce&&(Qu&&r.locale!=="ko"&&(hr||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&hr&&(se=Hu()):(hn=z,qs="value"in hn?hn.value:hn.textContent,hr=!0)),ae=fa(A,ce),0<ae.length&&(ce=new Vu(ce,e,null,r,z),F.push({event:ce,listeners:ae}),se?ce.data=se:(se=Zu(r),se!==null&&(ce.data=se)))),(se=Gh?Vh(e,r):Kh(e,r))&&(A=fa(A,"onBeforeInput"),0<A.length&&(z=new Vu("onBeforeInput","beforeinput",null,r,z),F.push({event:z,listeners:A}),z.data=se))}yc(F,t)})}function xi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function fa(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=Zr(e,r),d!=null&&a.unshift(xi(e,d,l)),d=Zr(e,t),d!=null&&a.push(xi(e,d,l))),e=e.return}return a}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bc(e,t,r,a,l){for(var d=t._reactName,g=[];r!==null&&r!==a;){var y=r,b=y.alternate,A=y.stateNode;if(b!==null&&b===a)break;y.tag===5&&A!==null&&(y=A,l?(b=Zr(r,d),b!=null&&g.unshift(xi(r,b,y))):l||(b=Zr(r,d),b!=null&&g.push(xi(r,b,y)))),r=r.return}g.length!==0&&e.push({event:t,listeners:g})}var om=/\r\n?/g,lm=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(om,`
`).replace(lm,"")}function pa(e,t,r){if(t=wc(t),wc(e)!==t&&r)throw Error(i(425))}function ha(){}var xo=null,yo=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,um=typeof clearTimeout=="function"?clearTimeout:void 0,kc=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof kc<"u"?function(e){return kc.resolve(null).then(e).catch(dm)}:bo;function dm(e){setTimeout(function(){throw e})}function wo(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),oi(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);oi(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),$t="__reactFiber$"+yr,yi="__reactProps$"+yr,Qt="__reactContainer$"+yr,ko="__reactEvents$"+yr,fm="__reactListeners$"+yr,pm="__reactHandles$"+yr;function zn(e){var t=e[$t];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qt]||r[$t]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Sc(e);e!==null;){if(r=e[$t])return r;e=Sc(e)}return t}e=r,r=e.parentNode}return null}function vi(e){return e=e[$t]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function ma(e){return e[yi]||null}var So=[],br=-1;function xn(e){return{current:e}}function Ie(e){0>br||(e.current=So[br],So[br]=null,br--)}function Ee(e,t){br++,So[br]=e.current,e.current=t}var yn={},qe=xn(yn),ot=xn(!1),Fn=yn;function wr(e,t){var r=e.type.contextTypes;if(!r)return yn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in r)l[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function lt(e){return e=e.childContextTypes,e!=null}function ga(){Ie(ot),Ie(qe)}function jc(e,t,r){if(qe.current!==yn)throw Error(i(168));Ee(qe,t),Ee(ot,r)}function Nc(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(i(108,xe(e)||"Unknown",l));return Y({},r,a)}function xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Fn=qe.current,Ee(qe,e),Ee(ot,ot.current),!0}function Cc(e,t,r){var a=e.stateNode;if(!a)throw Error(i(169));r?(e=Nc(e,t,Fn),a.__reactInternalMemoizedMergedChildContext=e,Ie(ot),Ie(qe),Ee(qe,e)):Ie(ot),Ee(ot,r)}var Yt=null,ya=!1,jo=!1;function Ec(e){Yt===null?Yt=[e]:Yt.push(e)}function hm(e){ya=!0,Ec(e)}function vn(){if(!jo&&Yt!==null){jo=!0;var e=0,t=Se;try{var r=Yt;for(Se=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Yt=null,ya=!1}catch(l){throw Yt!==null&&(Yt=Yt.slice(e+1)),Iu(Gs,vn),l}finally{Se=t,jo=!1}}return null}var kr=[],Sr=0,va=null,ba=0,wt=[],kt=0,Un=null,Jt=1,Xt="";function Hn(e,t){kr[Sr++]=ba,kr[Sr++]=va,va=e,ba=t}function Tc(e,t,r){wt[kt++]=Jt,wt[kt++]=Xt,wt[kt++]=Un,Un=e;var a=Jt;e=Xt;var l=32-It(a)-1;a&=~(1<<l),r+=1;var d=32-It(t)+l;if(30<d){var g=l-l%5;d=(a&(1<<g)-1).toString(32),a>>=g,l-=g,Jt=1<<32-It(t)+l|r<<l|a,Xt=d+e}else Jt=1<<d|r<<l|a,Xt=e}function No(e){e.return!==null&&(Hn(e,1),Tc(e,1,0))}function Co(e){for(;e===va;)va=kr[--Sr],kr[Sr]=null,ba=kr[--Sr],kr[Sr]=null;for(;e===Un;)Un=wt[--kt],wt[kt]=null,Xt=wt[--kt],wt[kt]=null,Jt=wt[--kt],wt[kt]=null}var gt=null,xt=null,Ae=!1,At=null;function Ic(e,t){var r=Ct(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Pc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,xt=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Un!==null?{id:Jt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ct(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,gt=e,xt=null,!0):!1;default:return!1}}function Eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function To(e){if(Ae){var t=xt;if(t){var r=t;if(!Pc(e,t)){if(Eo(e))throw Error(i(418));t=gn(r.nextSibling);var a=gt;t&&Pc(e,t)?Ic(a,r):(e.flags=e.flags&-4097|2,Ae=!1,gt=e)}}else{if(Eo(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ae=!1,gt=e}}}function Ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function wa(e){if(e!==gt)return!1;if(!Ae)return Ac(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=xt)){if(Eo(e))throw Lc(),Error(i(418));for(;t;)Ic(e,t),t=gn(t.nextSibling)}if(Ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){xt=gn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=gt?gn(e.stateNode.nextSibling):null;return!0}function Lc(){for(var e=xt;e;)e=gn(e.nextSibling)}function jr(){xt=gt=null,Ae=!1}function Io(e){At===null?At=[e]:At.push(e)}var mm=M.ReactCurrentBatchConfig;function bi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var a=r.stateNode}if(!a)throw Error(i(147,e));var l=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(g){var y=l.refs;g===null?delete y[d]:y[d]=g},t._stringRef=d,t)}if(typeof e!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function ka(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mc(e){var t=e._init;return t(e._payload)}function Rc(e){function t(I,j){if(e){var P=I.deletions;P===null?(I.deletions=[j],I.flags|=16):P.push(j)}}function r(I,j){if(!e)return null;for(;j!==null;)t(I,j),j=j.sibling;return null}function a(I,j){for(I=new Map;j!==null;)j.key!==null?I.set(j.key,j):I.set(j.index,j),j=j.sibling;return I}function l(I,j){return I=En(I,j),I.index=0,I.sibling=null,I}function d(I,j,P){return I.index=P,e?(P=I.alternate,P!==null?(P=P.index,P<j?(I.flags|=2,j):P):(I.flags|=2,j)):(I.flags|=1048576,j)}function g(I){return e&&I.alternate===null&&(I.flags|=2),I}function y(I,j,P,H){return j===null||j.tag!==6?(j=bl(P,I.mode,H),j.return=I,j):(j=l(j,P),j.return=I,j)}function b(I,j,P,H){var ie=P.type;return ie===U?z(I,j,P.props.children,H,P.key):j!==null&&(j.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===_e&&Mc(ie)===j.type)?(H=l(j,P.props),H.ref=bi(I,j,P),H.return=I,H):(H=Va(P.type,P.key,P.props,null,I.mode,H),H.ref=bi(I,j,P),H.return=I,H)}function A(I,j,P,H){return j===null||j.tag!==4||j.stateNode.containerInfo!==P.containerInfo||j.stateNode.implementation!==P.implementation?(j=wl(P,I.mode,H),j.return=I,j):(j=l(j,P.children||[]),j.return=I,j)}function z(I,j,P,H,ie){return j===null||j.tag!==7?(j=Xn(P,I.mode,H,ie),j.return=I,j):(j=l(j,P),j.return=I,j)}function F(I,j,P){if(typeof j=="string"&&j!==""||typeof j=="number")return j=bl(""+j,I.mode,P),j.return=I,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case O:return P=Va(j.type,j.key,j.props,null,I.mode,P),P.ref=bi(I,null,j),P.return=I,P;case V:return j=wl(j,I.mode,P),j.return=I,j;case _e:var H=j._init;return F(I,H(j._payload),P)}if(un(j)||ne(j))return j=Xn(j,I.mode,P,null),j.return=I,j;ka(I,j)}return null}function $(I,j,P,H){var ie=j!==null?j.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ie!==null?null:y(I,j,""+P,H);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case O:return P.key===ie?b(I,j,P,H):null;case V:return P.key===ie?A(I,j,P,H):null;case _e:return ie=P._init,$(I,j,ie(P._payload),H)}if(un(P)||ne(P))return ie!==null?null:z(I,j,P,H,null);ka(I,P)}return null}function X(I,j,P,H,ie){if(typeof H=="string"&&H!==""||typeof H=="number")return I=I.get(P)||null,y(j,I,""+H,ie);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case O:return I=I.get(H.key===null?P:H.key)||null,b(j,I,H,ie);case V:return I=I.get(H.key===null?P:H.key)||null,A(j,I,H,ie);case _e:var ae=H._init;return X(I,j,P,ae(H._payload),ie)}if(un(H)||ne(H))return I=I.get(P)||null,z(j,I,H,ie,null);ka(j,H)}return null}function ee(I,j,P,H){for(var ie=null,ae=null,se=j,ce=j=0,Ye=null;se!==null&&ce<P.length;ce++){se.index>ce?(Ye=se,se=null):Ye=se.sibling;var ve=$(I,se,P[ce],H);if(ve===null){se===null&&(se=Ye);break}e&&se&&ve.alternate===null&&t(I,se),j=d(ve,j,ce),ae===null?ie=ve:ae.sibling=ve,ae=ve,se=Ye}if(ce===P.length)return r(I,se),Ae&&Hn(I,ce),ie;if(se===null){for(;ce<P.length;ce++)se=F(I,P[ce],H),se!==null&&(j=d(se,j,ce),ae===null?ie=se:ae.sibling=se,ae=se);return Ae&&Hn(I,ce),ie}for(se=a(I,se);ce<P.length;ce++)Ye=X(se,I,ce,P[ce],H),Ye!==null&&(e&&Ye.alternate!==null&&se.delete(Ye.key===null?ce:Ye.key),j=d(Ye,j,ce),ae===null?ie=Ye:ae.sibling=Ye,ae=Ye);return e&&se.forEach(function(Tn){return t(I,Tn)}),Ae&&Hn(I,ce),ie}function te(I,j,P,H){var ie=ne(P);if(typeof ie!="function")throw Error(i(150));if(P=ie.call(P),P==null)throw Error(i(151));for(var ae=ie=null,se=j,ce=j=0,Ye=null,ve=P.next();se!==null&&!ve.done;ce++,ve=P.next()){se.index>ce?(Ye=se,se=null):Ye=se.sibling;var Tn=$(I,se,ve.value,H);if(Tn===null){se===null&&(se=Ye);break}e&&se&&Tn.alternate===null&&t(I,se),j=d(Tn,j,ce),ae===null?ie=Tn:ae.sibling=Tn,ae=Tn,se=Ye}if(ve.done)return r(I,se),Ae&&Hn(I,ce),ie;if(se===null){for(;!ve.done;ce++,ve=P.next())ve=F(I,ve.value,H),ve!==null&&(j=d(ve,j,ce),ae===null?ie=ve:ae.sibling=ve,ae=ve);return Ae&&Hn(I,ce),ie}for(se=a(I,se);!ve.done;ce++,ve=P.next())ve=X(se,I,ce,ve.value,H),ve!==null&&(e&&ve.alternate!==null&&se.delete(ve.key===null?ce:ve.key),j=d(ve,j,ce),ae===null?ie=ve:ae.sibling=ve,ae=ve);return e&&se.forEach(function(Km){return t(I,Km)}),Ae&&Hn(I,ce),ie}function $e(I,j,P,H){if(typeof P=="object"&&P!==null&&P.type===U&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case O:e:{for(var ie=P.key,ae=j;ae!==null;){if(ae.key===ie){if(ie=P.type,ie===U){if(ae.tag===7){r(I,ae.sibling),j=l(ae,P.props.children),j.return=I,I=j;break e}}else if(ae.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===_e&&Mc(ie)===ae.type){r(I,ae.sibling),j=l(ae,P.props),j.ref=bi(I,ae,P),j.return=I,I=j;break e}r(I,ae);break}else t(I,ae);ae=ae.sibling}P.type===U?(j=Xn(P.props.children,I.mode,H,P.key),j.return=I,I=j):(H=Va(P.type,P.key,P.props,null,I.mode,H),H.ref=bi(I,j,P),H.return=I,I=H)}return g(I);case V:e:{for(ae=P.key;j!==null;){if(j.key===ae)if(j.tag===4&&j.stateNode.containerInfo===P.containerInfo&&j.stateNode.implementation===P.implementation){r(I,j.sibling),j=l(j,P.children||[]),j.return=I,I=j;break e}else{r(I,j);break}else t(I,j);j=j.sibling}j=wl(P,I.mode,H),j.return=I,I=j}return g(I);case _e:return ae=P._init,$e(I,j,ae(P._payload),H)}if(un(P))return ee(I,j,P,H);if(ne(P))return te(I,j,P,H);ka(I,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,j!==null&&j.tag===6?(r(I,j.sibling),j=l(j,P),j.return=I,I=j):(r(I,j),j=bl(P,I.mode,H),j.return=I,I=j),g(I)):r(I,j)}return $e}var Nr=Rc(!0),Dc=Rc(!1),Sa=xn(null),ja=null,Cr=null,Po=null;function Ao(){Po=Cr=ja=null}function Lo(e){var t=Sa.current;Ie(Sa),e._currentValue=t}function Mo(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function Er(e,t){ja=e,Po=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(ja===null)throw Error(i(308));Cr=e,ja.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Wn=null;function Ro(e){Wn===null?Wn=[e]:Wn.push(e)}function Bc(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,Ro(t)):(r.next=l.next,l.next=r),t.interleaved=r,Zt(e,a)}function Zt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var bn=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Zt(e,r)}return l=a.interleaved,l===null?(t.next=t,Ro(a)):(t.next=l.next,l.next=t),a.interleaved=t,Zt(e,r)}function Na(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Qs(e,r)}}function Oc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var g={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?l=d=g:d=d.next=g,r=r.next}while(r!==null);d===null?l=d=t:d=d.next=t}else l=d=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ca(e,t,r,a){var l=e.updateQueue;bn=!1;var d=l.firstBaseUpdate,g=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var b=y,A=b.next;b.next=null,g===null?d=A:g.next=A,g=b;var z=e.alternate;z!==null&&(z=z.updateQueue,y=z.lastBaseUpdate,y!==g&&(y===null?z.firstBaseUpdate=A:y.next=A,z.lastBaseUpdate=b))}if(d!==null){var F=l.baseState;g=0,z=A=b=null,y=d;do{var $=y.lane,X=y.eventTime;if((a&$)===$){z!==null&&(z=z.next={eventTime:X,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var ee=e,te=y;switch($=t,X=r,te.tag){case 1:if(ee=te.payload,typeof ee=="function"){F=ee.call(X,F,$);break e}F=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=te.payload,$=typeof ee=="function"?ee.call(X,F,$):ee,$==null)break e;F=Y({},F,$);break e;case 2:bn=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,$=l.effects,$===null?l.effects=[y]:$.push(y))}else X={eventTime:X,lane:$,tag:y.tag,payload:y.payload,callback:y.callback,next:null},z===null?(A=z=X,b=F):z=z.next=X,g|=$;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;$=y,y=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);if(z===null&&(b=F),l.baseState=b,l.firstBaseUpdate=A,l.lastBaseUpdate=z,t=l.shared.interleaved,t!==null){l=t;do g|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);Kn|=g,e.lanes=g,e.memoizedState=F}}function $c(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(i(191,l));l.call(a)}}}var wi={},zt=xn(wi),ki=xn(wi),Si=xn(wi);function Gn(e){if(e===wi)throw Error(i(174));return e}function Bo(e,t){switch(Ee(Si,t),Ee(ki,e),Ee(zt,wi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:D(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=D(t,e)}Ie(zt),Ee(zt,t)}function Tr(){Ie(zt),Ie(ki),Ie(Si)}function zc(e){Gn(Si.current);var t=Gn(zt.current),r=D(t,e.type);t!==r&&(Ee(ki,e),Ee(zt,r))}function _o(e){ki.current===e&&(Ie(zt),Ie(ki))}var Me=xn(0);function Ea(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oo=[];function $o(){for(var e=0;e<Oo.length;e++)Oo[e]._workInProgressVersionPrimary=null;Oo.length=0}var Ta=M.ReactCurrentDispatcher,zo=M.ReactCurrentBatchConfig,Vn=0,Re=null,Ge=null,Ke=null,Ia=!1,ji=!1,Ni=0,gm=0;function et(){throw Error(i(321))}function Fo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Pt(e[r],t[r]))return!1;return!0}function Uo(e,t,r,a,l,d){if(Vn=d,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ta.current=e===null||e.memoizedState===null?bm:wm,e=r(a,l),ji){d=0;do{if(ji=!1,Ni=0,25<=d)throw Error(i(301));d+=1,Ke=Ge=null,t.updateQueue=null,Ta.current=km,e=r(a,l)}while(ji)}if(Ta.current=La,t=Ge!==null&&Ge.next!==null,Vn=0,Ke=Ge=Re=null,Ia=!1,t)throw Error(i(300));return e}function Ho(){var e=Ni!==0;return Ni=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Re.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function jt(){if(Ge===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ke===null?Re.memoizedState:Ke.next;if(t!==null)Ke=t,Ge=e;else{if(e===null)throw Error(i(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ke===null?Re.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Ci(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=jt(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var a=Ge,l=a.baseQueue,d=r.pending;if(d!==null){if(l!==null){var g=l.next;l.next=d.next,d.next=g}a.baseQueue=l=d,r.pending=null}if(l!==null){d=l.next,a=a.baseState;var y=g=null,b=null,A=d;do{var z=A.lane;if((Vn&z)===z)b!==null&&(b=b.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),a=A.hasEagerState?A.eagerState:e(a,A.action);else{var F={lane:z,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};b===null?(y=b=F,g=a):b=b.next=F,Re.lanes|=z,Kn|=z}A=A.next}while(A!==null&&A!==d);b===null?g=a:b.next=y,Pt(a,t.memoizedState)||(ut=!0),t.memoizedState=a,t.baseState=g,t.baseQueue=b,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do d=l.lane,Re.lanes|=d,Kn|=d,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Go(e){var t=jt(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,d=t.memoizedState;if(l!==null){r.pending=null;var g=l=l.next;do d=e(d,g.action),g=g.next;while(g!==l);Pt(d,t.memoizedState)||(ut=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,a]}function Fc(){}function Uc(e,t){var r=Re,a=jt(),l=t(),d=!Pt(a.memoizedState,l);if(d&&(a.memoizedState=l,ut=!0),a=a.queue,Vo(Gc.bind(null,r,a,e),[e]),a.getSnapshot!==t||d||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,Ei(9,Wc.bind(null,r,a,l,t),void 0,null),Qe===null)throw Error(i(349));(Vn&30)!==0||Hc(r,t,l)}return l}function Hc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Wc(e,t,r,a){t.value=r,t.getSnapshot=a,Vc(t)&&Kc(e)}function Gc(e,t,r){return r(function(){Vc(t)&&Kc(e)})}function Vc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Pt(e,r)}catch{return!0}}function Kc(e){var t=Zt(e,1);t!==null&&Dt(t,e,1,-1)}function Qc(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,Re,e),[t.memoizedState,e]}function Ei(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Yc(){return jt().memoizedState}function Pa(e,t,r,a){var l=Ft();Re.flags|=e,l.memoizedState=Ei(1|t,r,void 0,a===void 0?null:a)}function Aa(e,t,r,a){var l=jt();a=a===void 0?null:a;var d=void 0;if(Ge!==null){var g=Ge.memoizedState;if(d=g.destroy,a!==null&&Fo(a,g.deps)){l.memoizedState=Ei(t,r,d,a);return}}Re.flags|=e,l.memoizedState=Ei(1|t,r,d,a)}function Jc(e,t){return Pa(8390656,8,e,t)}function Vo(e,t){return Aa(2048,8,e,t)}function Xc(e,t){return Aa(4,2,e,t)}function Zc(e,t){return Aa(4,4,e,t)}function qc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,r){return r=r!=null?r.concat([e]):null,Aa(4,4,qc.bind(null,t,e),r)}function Ko(){}function td(e,t){var r=jt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Fo(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function nd(e,t){var r=jt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Fo(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function rd(e,t,r){return(Vn&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r):(Pt(r,t)||(r=Mu(),Re.lanes|=r,Kn|=r,e.baseState=!0),t)}function xm(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var a=zo.transition;zo.transition={};try{e(!1),t()}finally{Se=r,zo.transition=a}}function id(){return jt().memoizedState}function ym(e,t,r){var a=Nn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},ad(e))sd(t,r);else if(r=Bc(e,t,r,a),r!==null){var l=it();Dt(r,e,a,l),od(r,t,a)}}function vm(e,t,r){var a=Nn(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(ad(e))sd(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var g=t.lastRenderedState,y=d(g,r);if(l.hasEagerState=!0,l.eagerState=y,Pt(y,g)){var b=t.interleaved;b===null?(l.next=l,Ro(t)):(l.next=b.next,b.next=l),t.interleaved=l;return}}catch{}finally{}r=Bc(e,t,l,a),r!==null&&(l=it(),Dt(r,e,a,l),od(r,t,a))}}function ad(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function sd(e,t){ji=Ia=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function od(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Qs(e,r)}}var La={readContext:St,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},bm={readContext:St,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Jc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Pa(4194308,4,qc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var r=Ft();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Ft();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=ym.bind(null,Re,e),[a.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Qc,useDebugValue:Ko,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Qc(!1),t=e[0];return e=xm.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Re,l=Ft();if(Ae){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),Qe===null)throw Error(i(349));(Vn&30)!==0||Hc(a,t,r)}l.memoizedState=r;var d={value:r,getSnapshot:t};return l.queue=d,Jc(Gc.bind(null,a,d,e),[e]),a.flags|=2048,Ei(9,Wc.bind(null,a,d,r,t),void 0,null),r},useId:function(){var e=Ft(),t=Qe.identifierPrefix;if(Ae){var r=Xt,a=Jt;r=(a&~(1<<32-It(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ni++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=gm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wm={readContext:St,useCallback:td,useContext:St,useEffect:Vo,useImperativeHandle:ed,useInsertionEffect:Xc,useLayoutEffect:Zc,useMemo:nd,useReducer:Wo,useRef:Yc,useState:function(){return Wo(Ci)},useDebugValue:Ko,useDeferredValue:function(e){var t=jt();return rd(t,Ge.memoizedState,e)},useTransition:function(){var e=Wo(Ci)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Uc,useId:id,unstable_isNewReconciler:!1},km={readContext:St,useCallback:td,useContext:St,useEffect:Vo,useImperativeHandle:ed,useInsertionEffect:Xc,useLayoutEffect:Zc,useMemo:nd,useReducer:Go,useRef:Yc,useState:function(){return Go(Ci)},useDebugValue:Ko,useDeferredValue:function(e){var t=jt();return Ge===null?t.memoizedState=e:rd(t,Ge.memoizedState,e)},useTransition:function(){var e=Go(Ci)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Uc,useId:id,unstable_isNewReconciler:!1};function Lt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Qo(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:Y({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ma={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=it(),l=Nn(e),d=qt(a,l);d.payload=t,r!=null&&(d.callback=r),t=wn(e,d,l),t!==null&&(Dt(t,e,l,a),Na(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=it(),l=Nn(e),d=qt(a,l);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=wn(e,d,l),t!==null&&(Dt(t,e,l,a),Na(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=it(),a=Nn(e),l=qt(r,a);l.tag=2,t!=null&&(l.callback=t),t=wn(e,l,a),t!==null&&(Dt(t,e,a,r),Na(t,e,a))}};function ld(e,t,r,a,l,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,g):t.prototype&&t.prototype.isPureReactComponent?!pi(r,a)||!pi(l,d):!0}function ud(e,t,r){var a=!1,l=yn,d=t.contextType;return typeof d=="object"&&d!==null?d=St(d):(l=lt(t)?Fn:qe.current,a=t.contextTypes,d=(a=a!=null)?wr(e,l):yn),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ma,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function cd(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&Ma.enqueueReplaceState(t,t.state,null)}function Yo(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Do(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=St(d):(d=lt(t)?Fn:qe.current,l.context=wr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Qo(e,t,d,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ma.enqueueReplaceState(l,l.state,null),Ca(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var r="",a=t;do r+=fe(a),a=a.return;while(a);var l=r}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function Jo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Xo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function dd(e,t,r){r=qt(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){za||(za=!0,fl=a),Xo(e,t)},r}function fd(e,t,r){r=qt(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){Xo(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){Xo(e,t),typeof a!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),r}function pd(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Sm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=_m.bind(null,e,t,r),t.then(e,e))}function hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function md(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=qt(-1,1),t.tag=2,wn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var jm=M.ReactCurrentOwner,ut=!1;function rt(e,t,r,a){t.child=e===null?Dc(t,null,r,a):Nr(t,e.child,r,a)}function gd(e,t,r,a,l){r=r.render;var d=t.ref;return Er(t,l),a=Uo(e,t,r,a,d,l),r=Ho(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,en(e,t,l)):(Ae&&r&&No(t),t.flags|=1,rt(e,t,a,l),t.child)}function xd(e,t,r,a,l){if(e===null){var d=r.type;return typeof d=="function"&&!vl(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,yd(e,t,d,a,l)):(e=Va(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var g=d.memoizedProps;if(r=r.compare,r=r!==null?r:pi,r(g,a)&&e.ref===t.ref)return en(e,t,l)}return t.flags|=1,e=En(d,a),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,r,a,l){if(e!==null){var d=e.memoizedProps;if(pi(d,a)&&e.ref===t.ref)if(ut=!1,t.pendingProps=a=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,en(e,t,l)}return Zo(e,t,r,a,l)}function vd(e,t,r){var a=t.pendingProps,l=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ar,yt),yt|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Ar,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:r,Ee(Ar,yt),yt|=a}else d!==null?(a=d.baseLanes|r,t.memoizedState=null):a=r,Ee(Ar,yt),yt|=a;return rt(e,t,l,r),t.child}function bd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Zo(e,t,r,a,l){var d=lt(r)?Fn:qe.current;return d=wr(t,d),Er(t,l),r=Uo(e,t,r,a,d,l),a=Ho(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,en(e,t,l)):(Ae&&a&&No(t),t.flags|=1,rt(e,t,r,l),t.child)}function wd(e,t,r,a,l){if(lt(r)){var d=!0;xa(t)}else d=!1;if(Er(t,l),t.stateNode===null)Da(e,t),ud(t,r,a),Yo(t,r,a,l),a=!0;else if(e===null){var g=t.stateNode,y=t.memoizedProps;g.props=y;var b=g.context,A=r.contextType;typeof A=="object"&&A!==null?A=St(A):(A=lt(r)?Fn:qe.current,A=wr(t,A));var z=r.getDerivedStateFromProps,F=typeof z=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==a||b!==A)&&cd(t,g,a,A),bn=!1;var $=t.memoizedState;g.state=$,Ca(t,a,g,l),b=t.memoizedState,y!==a||$!==b||ot.current||bn?(typeof z=="function"&&(Qo(t,r,z,a),b=t.memoizedState),(y=bn||ld(t,r,y,a,$,b,A))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=b),g.props=a,g.state=b,g.context=A,a=y):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{g=t.stateNode,_c(e,t),y=t.memoizedProps,A=t.type===t.elementType?y:Lt(t.type,y),g.props=A,F=t.pendingProps,$=g.context,b=r.contextType,typeof b=="object"&&b!==null?b=St(b):(b=lt(r)?Fn:qe.current,b=wr(t,b));var X=r.getDerivedStateFromProps;(z=typeof X=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==F||$!==b)&&cd(t,g,a,b),bn=!1,$=t.memoizedState,g.state=$,Ca(t,a,g,l);var ee=t.memoizedState;y!==F||$!==ee||ot.current||bn?(typeof X=="function"&&(Qo(t,r,X,a),ee=t.memoizedState),(A=bn||ld(t,r,A,a,$,ee,b)||!1)?(z||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,ee,b),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,ee,b)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ee),g.props=a,g.state=ee,g.context=b,a=A):(typeof g.componentDidUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),a=!1)}return qo(e,t,r,a,d,l)}function qo(e,t,r,a,l,d){bd(e,t);var g=(t.flags&128)!==0;if(!a&&!g)return l&&Cc(t,r,!1),en(e,t,d);a=t.stateNode,jm.current=t;var y=g&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&g?(t.child=Nr(t,e.child,null,d),t.child=Nr(t,null,y,d)):rt(e,t,y,d),t.memoizedState=a.state,l&&Cc(t,r,!0),t.child}function kd(e){var t=e.stateNode;t.pendingContext?jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jc(e,t.context,!1),Bo(e,t.containerInfo)}function Sd(e,t,r,a,l){return jr(),Io(l),t.flags|=256,rt(e,t,r,a),t.child}var el={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function jd(e,t,r){var a=t.pendingProps,l=Me.current,d=!1,g=(t.flags&128)!==0,y;if((y=g)||(y=e!==null&&e.memoizedState===null?!1:(l&2)!==0),y?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ee(Me,l&1),e===null)return To(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=a.children,e=a.fallback,d?(a=t.mode,d=t.child,g={mode:"hidden",children:g},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=g):d=Ka(g,a,0,null),e=Xn(e,a,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=tl(r),t.memoizedState=el,e):nl(t,g));if(l=e.memoizedState,l!==null&&(y=l.dehydrated,y!==null))return Nm(e,t,g,a,y,l,r);if(d){d=a.fallback,g=t.mode,l=e.child,y=l.sibling;var b={mode:"hidden",children:a.children};return(g&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=b,t.deletions=null):(a=En(l,b),a.subtreeFlags=l.subtreeFlags&14680064),y!==null?d=En(y,d):(d=Xn(d,g,r,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,g=e.child.memoizedState,g=g===null?tl(r):{baseLanes:g.baseLanes|r,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=e.childLanes&~r,t.memoizedState=el,a}return d=e.child,e=d.sibling,a=En(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function nl(e,t){return t=Ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ra(e,t,r,a){return a!==null&&Io(a),Nr(t,e.child,null,r),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nm(e,t,r,a,l,d,g){if(r)return t.flags&256?(t.flags&=-257,a=Jo(Error(i(422))),Ra(e,t,g,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,l=t.mode,a=Ka({mode:"visible",children:a.children},l,0,null),d=Xn(d,l,g,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&Nr(t,e.child,null,g),t.child.memoizedState=tl(g),t.memoizedState=el,d);if((t.mode&1)===0)return Ra(e,t,g,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var y=a.dgst;return a=y,d=Error(i(419)),a=Jo(d,a,void 0),Ra(e,t,g,a)}if(y=(g&e.childLanes)!==0,ut||y){if(a=Qe,a!==null){switch(g&-g){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|g))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,Zt(e,l),Dt(a,e,l,-1))}return yl(),a=Jo(Error(i(421))),Ra(e,t,g,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,xt=gn(l.nextSibling),gt=t,Ae=!0,At=null,e!==null&&(wt[kt++]=Jt,wt[kt++]=Xt,wt[kt++]=Un,Jt=e.id,Xt=e.overflow,Un=t),t=nl(t,a.children),t.flags|=4096,t)}function Nd(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Mo(e.return,t,r)}function rl(e,t,r,a,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=r,d.tailMode=l)}function Cd(e,t,r){var a=t.pendingProps,l=a.revealOrder,d=a.tail;if(rt(e,t,a.children,r),a=Me.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,r,t);else if(e.tag===19)Nd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ee(Me,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Ea(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),rl(t,!1,l,r,d);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ea(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}rl(t,!0,r,null,d);break;case"together":rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Da(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=En(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=En(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Cm(e,t,r){switch(t.tag){case 3:kd(t),jr();break;case 5:zc(t);break;case 1:lt(t.type)&&xa(t);break;case 4:Bo(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Ee(Sa,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ee(Me,Me.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?jd(e,t,r):(Ee(Me,Me.current&1),e=en(e,t,r),e!==null?e.sibling:null);Ee(Me,Me.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Cd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ee(Me,Me.current),a)break;return null;case 22:case 23:return t.lanes=0,vd(e,t,r)}return en(e,t,r)}var Ed,il,Td,Id;Ed=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},il=function(){},Td=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Gn(zt.current);var d=null;switch(r){case"input":l=sr(e,l),a=sr(e,a),d=[];break;case"select":l=Y({},l,{value:void 0}),a=Y({},a,{value:void 0}),d=[];break;case"textarea":l=ur(e,l),a=ur(e,a),d=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ha)}_s(r,a);var g;r=null;for(A in l)if(!a.hasOwnProperty(A)&&l.hasOwnProperty(A)&&l[A]!=null)if(A==="style"){var y=l[A];for(g in y)y.hasOwnProperty(g)&&(r||(r={}),r[g]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(c.hasOwnProperty(A)?d||(d=[]):(d=d||[]).push(A,null));for(A in a){var b=a[A];if(y=l!=null?l[A]:void 0,a.hasOwnProperty(A)&&b!==y&&(b!=null||y!=null))if(A==="style")if(y){for(g in y)!y.hasOwnProperty(g)||b&&b.hasOwnProperty(g)||(r||(r={}),r[g]="");for(g in b)b.hasOwnProperty(g)&&y[g]!==b[g]&&(r||(r={}),r[g]=b[g])}else r||(d||(d=[]),d.push(A,r)),r=b;else A==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,y=y?y.__html:void 0,b!=null&&y!==b&&(d=d||[]).push(A,b)):A==="children"?typeof b!="string"&&typeof b!="number"||(d=d||[]).push(A,""+b):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(c.hasOwnProperty(A)?(b!=null&&A==="onScroll"&&Te("scroll",e),d||y===b||(d=[])):(d=d||[]).push(A,b))}r&&(d=d||[]).push("style",r);var A=d;(t.updateQueue=A)&&(t.flags|=4)}},Id=function(e,t,r,a){r!==a&&(t.flags|=4)};function Ti(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Em(e,t,r){var a=t.pendingProps;switch(Co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return lt(t.type)&&ga(),tt(t),null;case 3:return a=t.stateNode,Tr(),Ie(ot),Ie(qe),$o(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(ml(At),At=null))),il(e,t),tt(t),null;case 5:_o(t);var l=Gn(Si.current);if(r=t.type,e!==null&&t.stateNode!=null)Td(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(i(166));return tt(t),null}if(e=Gn(zt.current),wa(t)){a=t.stateNode,r=t.type;var d=t.memoizedProps;switch(a[$t]=t,a[yi]=d,e=(t.mode&1)!==0,r){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(l=0;l<mi.length;l++)Te(mi[l],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Gr(a,d),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Te("invalid",a);break;case"textarea":Qr(a,d),Te("invalid",a)}_s(r,d),l=null;for(var g in d)if(d.hasOwnProperty(g)){var y=d[g];g==="children"?typeof y=="string"?a.textContent!==y&&(d.suppressHydrationWarning!==!0&&pa(a.textContent,y,e),l=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(d.suppressHydrationWarning!==!0&&pa(a.textContent,y,e),l=["children",""+y]):c.hasOwnProperty(g)&&y!=null&&g==="onScroll"&&Te("scroll",a)}switch(r){case"input":Tt(a),Kr(a,d,!0);break;case"textarea":Tt(a),Jr(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=ha)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{g=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xr(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=g.createElement(r,{is:a.is}):(e=g.createElement(r),r==="select"&&(g=e,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):e=g.createElementNS(e,r),e[$t]=t,e[yi]=a,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(g=Os(r,a),r){case"dialog":Te("cancel",e),Te("close",e),l=a;break;case"iframe":case"object":case"embed":Te("load",e),l=a;break;case"video":case"audio":for(l=0;l<mi.length;l++)Te(mi[l],e);l=a;break;case"source":Te("error",e),l=a;break;case"img":case"image":case"link":Te("error",e),Te("load",e),l=a;break;case"details":Te("toggle",e),l=a;break;case"input":Gr(e,a),l=sr(e,a),Te("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=Y({},a,{value:void 0}),Te("invalid",e);break;case"textarea":Qr(e,a),l=ur(e,a),Te("invalid",e);break;default:l=a}_s(r,l),y=l;for(d in y)if(y.hasOwnProperty(d)){var b=y[d];d==="style"?yu(e,b):d==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Q(e,b)):d==="children"?typeof b=="string"?(r!=="textarea"||b!=="")&&Le(e,b):typeof b=="number"&&Le(e,""+b):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(c.hasOwnProperty(d)?b!=null&&d==="onScroll"&&Te("scroll",e):b!=null&&W(e,d,b,g))}switch(r){case"input":Tt(e),Kr(e,a,!1);break;case"textarea":Tt(e),Jr(e);break;case"option":a.value!=null&&e.setAttribute("value",""+re(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?Kt(e,!!a.multiple,d,!1):a.defaultValue!=null&&Kt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ha)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Id(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(r=Gn(Si.current),Gn(zt.current),wa(t)){if(a=t.stateNode,r=t.memoizedProps,a[$t]=t,(d=a.nodeValue!==r)&&(e=gt,e!==null))switch(e.tag){case 3:pa(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pa(a.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[$t]=t,t.stateNode=a}return tt(t),null;case 13:if(Ie(Me),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Lc(),jr(),t.flags|=98560,d=!1;else if(d=wa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[$t]=t}else jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),d=!1}else At!==null&&(ml(At),At=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Me.current&1)!==0?Ve===0&&(Ve=3):yl())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Tr(),il(e,t),e===null&&gi(t.stateNode.containerInfo),tt(t),null;case 10:return Lo(t.type._context),tt(t),null;case 17:return lt(t.type)&&ga(),tt(t),null;case 19:if(Ie(Me),d=t.memoizedState,d===null)return tt(t),null;if(a=(t.flags&128)!==0,g=d.rendering,g===null)if(a)Ti(d,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=Ea(e),g!==null){for(t.flags|=128,Ti(d,!1),a=g.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)d=r,e=a,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,e=g.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(Me,Me.current&1|2),t.child}e=e.sibling}d.tail!==null&&Oe()>Lr&&(t.flags|=128,a=!0,Ti(d,!1),t.lanes=4194304)}else{if(!a)if(e=Ea(g),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ti(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ae)return tt(t),null}else 2*Oe()-d.renderingStartTime>Lr&&r!==1073741824&&(t.flags|=128,a=!0,Ti(d,!1),t.lanes=4194304);d.isBackwards?(g.sibling=t.child,t.child=g):(r=d.last,r!==null?r.sibling=g:t.child=g,d.last=g)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Oe(),t.sibling=null,r=Me.current,Ee(Me,a?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return xl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(yt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Tm(e,t){switch(Co(t),t.tag){case 1:return lt(t.type)&&ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),Ie(ot),Ie(qe),$o(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return _o(t),null;case 13:if(Ie(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Me),null;case 4:return Tr(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return xl(),null;case 24:return null;default:return null}}var Ba=!1,nt=!1,Im=typeof WeakSet=="function"?WeakSet:Set,q=null;function Pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Be(e,t,a)}else r.current=null}function al(e,t,r){try{r()}catch(a){Be(e,t,a)}}var Pd=!1;function Pm(e,t){if(xo=na,e=lc(),lo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var g=0,y=-1,b=-1,A=0,z=0,F=e,$=null;t:for(;;){for(var X;F!==r||l!==0&&F.nodeType!==3||(y=g+l),F!==d||a!==0&&F.nodeType!==3||(b=g+a),F.nodeType===3&&(g+=F.nodeValue.length),(X=F.firstChild)!==null;)$=F,F=X;for(;;){if(F===e)break t;if($===r&&++A===l&&(y=g),$===d&&++z===a&&(b=g),(X=F.nextSibling)!==null)break;F=$,$=F.parentNode}F=X}r=y===-1||b===-1?null:{start:y,end:b}}else r=null}r=r||{start:0,end:0}}else r=null;for(yo={focusedElem:e,selectionRange:r},na=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var te=ee.memoizedProps,$e=ee.memoizedState,I=t.stateNode,j=I.getSnapshotBeforeUpdate(t.elementType===t.type?te:Lt(t.type,te),$e);I.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var P=t.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(H){Be(t,t.return,H)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return ee=Pd,Pd=!1,ee}function Ii(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&al(t,r,d)}l=l.next}while(l!==a)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function sl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[yi],delete t[ko],delete t[fm],delete t[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ol(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ha));else if(a!==4&&(e=e.child,e!==null))for(ol(e,t,r),e=e.sibling;e!==null;)ol(e,t,r),e=e.sibling}function ll(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ll(e,t,r),e=e.sibling;e!==null;)ll(e,t,r),e=e.sibling}var Xe=null,Mt=!1;function kn(e,t,r){for(r=r.child;r!==null;)Rd(e,t,r),r=r.sibling}function Rd(e,t,r){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ji,r)}catch{}switch(r.tag){case 5:nt||Pr(r,t);case 6:var a=Xe,l=Mt;Xe=null,kn(e,t,r),Xe=a,Mt=l,Xe!==null&&(Mt?(e=Xe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Xe.removeChild(r.stateNode));break;case 18:Xe!==null&&(Mt?(e=Xe,r=r.stateNode,e.nodeType===8?wo(e.parentNode,r):e.nodeType===1&&wo(e,r),oi(e)):wo(Xe,r.stateNode));break;case 4:a=Xe,l=Mt,Xe=r.stateNode.containerInfo,Mt=!0,kn(e,t,r),Xe=a,Mt=l;break;case 0:case 11:case 14:case 15:if(!nt&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var d=l,g=d.destroy;d=d.tag,g!==void 0&&((d&2)!==0||(d&4)!==0)&&al(r,t,g),l=l.next}while(l!==a)}kn(e,t,r);break;case 1:if(!nt&&(Pr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(y){Be(r,t,y)}kn(e,t,r);break;case 21:kn(e,t,r);break;case 22:r.mode&1?(nt=(a=nt)||r.memoizedState!==null,kn(e,t,r),nt=a):kn(e,t,r);break;default:kn(e,t,r)}}function Dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Im),t.forEach(function(a){var l=$m.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function Rt(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var d=e,g=t,y=g;e:for(;y!==null;){switch(y.tag){case 5:Xe=y.stateNode,Mt=!1;break e;case 3:Xe=y.stateNode.containerInfo,Mt=!0;break e;case 4:Xe=y.stateNode.containerInfo,Mt=!0;break e}y=y.return}if(Xe===null)throw Error(i(160));Rd(d,g,l),Xe=null,Mt=!1;var b=l.alternate;b!==null&&(b.return=null),l.return=null}catch(A){Be(l,t,A)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bd(t,e),t=t.sibling}function Bd(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Ut(e),a&4){try{Ii(3,e,e.return),_a(3,e)}catch(te){Be(e,e.return,te)}try{Ii(5,e,e.return)}catch(te){Be(e,e.return,te)}}break;case 1:Rt(t,e),Ut(e),a&512&&r!==null&&Pr(r,r.return);break;case 5:if(Rt(t,e),Ut(e),a&512&&r!==null&&Pr(r,r.return),e.flags&32){var l=e.stateNode;try{Le(l,"")}catch(te){Be(e,e.return,te)}}if(a&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,g=r!==null?r.memoizedProps:d,y=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{y==="input"&&d.type==="radio"&&d.name!=null&&Vr(l,d),Os(y,g);var A=Os(y,d);for(g=0;g<b.length;g+=2){var z=b[g],F=b[g+1];z==="style"?yu(l,F):z==="dangerouslySetInnerHTML"?Q(l,F):z==="children"?Le(l,F):W(l,z,F,A)}switch(y){case"input":or(l,d);break;case"textarea":Yr(l,d);break;case"select":var $=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var X=d.value;X!=null?Kt(l,!!d.multiple,X,!1):$!==!!d.multiple&&(d.defaultValue!=null?Kt(l,!!d.multiple,d.defaultValue,!0):Kt(l,!!d.multiple,d.multiple?[]:"",!1))}l[yi]=d}catch(te){Be(e,e.return,te)}}break;case 6:if(Rt(t,e),Ut(e),a&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(te){Be(e,e.return,te)}}break;case 3:if(Rt(t,e),Ut(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(te){Be(e,e.return,te)}break;case 4:Rt(t,e),Ut(e);break;case 13:Rt(t,e),Ut(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(dl=Oe())),a&4&&Dd(e);break;case 22:if(z=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(A=nt)||z,Rt(t,e),nt=A):Rt(t,e),Ut(e),a&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!z&&(e.mode&1)!==0)for(q=e,z=e.child;z!==null;){for(F=q=z;q!==null;){switch($=q,X=$.child,$.tag){case 0:case 11:case 14:case 15:Ii(4,$,$.return);break;case 1:Pr($,$.return);var ee=$.stateNode;if(typeof ee.componentWillUnmount=="function"){a=$,r=$.return;try{t=a,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(te){Be(a,r,te)}}break;case 5:Pr($,$.return);break;case 22:if($.memoizedState!==null){$d(F);continue}}X!==null?(X.return=$,q=X):$d(F)}z=z.sibling}e:for(z=null,F=e;;){if(F.tag===5){if(z===null){z=F;try{l=F.stateNode,A?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(y=F.stateNode,b=F.memoizedProps.style,g=b!=null&&b.hasOwnProperty("display")?b.display:null,y.style.display=xu("display",g))}catch(te){Be(e,e.return,te)}}}else if(F.tag===6){if(z===null)try{F.stateNode.nodeValue=A?"":F.memoizedProps}catch(te){Be(e,e.return,te)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;z===F&&(z=null),F=F.return}z===F&&(z=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Rt(t,e),Ut(e),a&4&&Dd(e);break;case 21:break;default:Rt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ld(r)){var a=r;break e}r=r.return}throw Error(i(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Le(l,""),a.flags&=-33);var d=Md(e);ll(e,d,l);break;case 3:case 4:var g=a.stateNode.containerInfo,y=Md(e);ol(e,y,g);break;default:throw Error(i(161))}}catch(b){Be(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,r){q=e,_d(e)}function _d(e,t,r){for(var a=(e.mode&1)!==0;q!==null;){var l=q,d=l.child;if(l.tag===22&&a){var g=l.memoizedState!==null||Ba;if(!g){var y=l.alternate,b=y!==null&&y.memoizedState!==null||nt;y=Ba;var A=nt;if(Ba=g,(nt=b)&&!A)for(q=l;q!==null;)g=q,b=g.child,g.tag===22&&g.memoizedState!==null?zd(l):b!==null?(b.return=g,q=b):zd(l);for(;d!==null;)q=d,_d(d),d=d.sibling;q=l,Ba=y,nt=A}Od(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,q=d):Od(e)}}function Od(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||_a(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!nt)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Lt(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&$c(t,d,a);break;case 3:var g=t.updateQueue;if(g!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}$c(t,g,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var b=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&r.focus();break;case"img":b.src&&(r.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var A=t.alternate;if(A!==null){var z=A.memoizedState;if(z!==null){var F=z.dehydrated;F!==null&&oi(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}nt||t.flags&512&&sl(t)}catch($){Be(t,t.return,$)}}if(t===e){q=null;break}if(r=t.sibling,r!==null){r.return=t.return,q=r;break}q=t.return}}function $d(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,q=r;break}q=t.return}}function zd(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{_a(4,t)}catch(b){Be(t,r,b)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(b){Be(t,l,b)}}var d=t.return;try{sl(t)}catch(b){Be(t,d,b)}break;case 5:var g=t.return;try{sl(t)}catch(b){Be(t,g,b)}}}catch(b){Be(t,t.return,b)}if(t===e){q=null;break}var y=t.sibling;if(y!==null){y.return=t.return,q=y;break}q=t.return}}var Lm=Math.ceil,Oa=M.ReactCurrentDispatcher,ul=M.ReactCurrentOwner,Nt=M.ReactCurrentBatchConfig,ye=0,Qe=null,Fe=null,Ze=0,yt=0,Ar=xn(0),Ve=0,Pi=null,Kn=0,$a=0,cl=0,Ai=null,ct=null,dl=0,Lr=1/0,tn=null,za=!1,fl=null,Sn=null,Fa=!1,jn=null,Ua=0,Li=0,pl=null,Ha=-1,Wa=0;function it(){return(ye&6)!==0?Oe():Ha!==-1?Ha:Ha=Oe()}function Nn(e){return(e.mode&1)===0?1:(ye&2)!==0&&Ze!==0?Ze&-Ze:mm.transition!==null?(Wa===0&&(Wa=Mu()),Wa):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Uu(e.type)),e)}function Dt(e,t,r,a){if(50<Li)throw Li=0,pl=null,Error(i(185));ni(e,r,a),((ye&2)===0||e!==Qe)&&(e===Qe&&((ye&2)===0&&($a|=r),Ve===4&&Cn(e,Ze)),dt(e,a),r===1&&ye===0&&(t.mode&1)===0&&(Lr=Oe()+500,ya&&vn()))}function dt(e,t){var r=e.callbackNode;mh(e,t);var a=qi(e,e===Qe?Ze:0);if(a===0)r!==null&&Pu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Pu(r),t===1)e.tag===0?hm(Ud.bind(null,e)):Ec(Ud.bind(null,e)),cm(function(){(ye&6)===0&&vn()}),r=null;else{switch(Ru(a)){case 1:r=Gs;break;case 4:r=Au;break;case 16:r=Yi;break;case 536870912:r=Lu;break;default:r=Yi}r=Jd(r,Fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Fd(e,t){if(Ha=-1,Wa=0,(ye&6)!==0)throw Error(i(327));var r=e.callbackNode;if(Mr()&&e.callbackNode!==r)return null;var a=qi(e,e===Qe?Ze:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Ga(e,a);else{t=a;var l=ye;ye|=2;var d=Wd();(Qe!==e||Ze!==t)&&(tn=null,Lr=Oe()+500,Yn(e,t));do try{Dm();break}catch(y){Hd(e,y)}while(!0);Ao(),Oa.current=d,ye=l,Fe!==null?t=0:(Qe=null,Ze=0,t=Ve)}if(t!==0){if(t===2&&(l=Vs(e),l!==0&&(a=l,t=hl(e,l))),t===1)throw r=Pi,Yn(e,0),Cn(e,a),dt(e,Oe()),r;if(t===6)Cn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!Mm(l)&&(t=Ga(e,a),t===2&&(d=Vs(e),d!==0&&(a=d,t=hl(e,d))),t===1))throw r=Pi,Yn(e,0),Cn(e,a),dt(e,Oe()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(i(345));case 2:Jn(e,ct,tn);break;case 3:if(Cn(e,a),(a&130023424)===a&&(t=dl+500-Oe(),10<t)){if(qi(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){it(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=bo(Jn.bind(null,e,ct,tn),t);break}Jn(e,ct,tn);break;case 4:if(Cn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var g=31-It(a);d=1<<g,g=t[g],g>l&&(l=g),a&=~d}if(a=l,a=Oe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Lm(a/1960))-a,10<a){e.timeoutHandle=bo(Jn.bind(null,e,ct,tn),a);break}Jn(e,ct,tn);break;case 5:Jn(e,ct,tn);break;default:throw Error(i(329))}}}return dt(e,Oe()),e.callbackNode===r?Fd.bind(null,e):null}function hl(e,t){var r=Ai;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Ga(e,t),e!==2&&(t=ct,ct=r,t!==null&&ml(t)),e}function ml(e){ct===null?ct=e:ct.push.apply(ct,e)}function Mm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],d=l.getSnapshot;l=l.value;try{if(!Pt(d(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~cl,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-It(t),a=1<<r;e[r]=-1,t&=~a}}function Ud(e){if((ye&6)!==0)throw Error(i(327));Mr();var t=qi(e,0);if((t&1)===0)return dt(e,Oe()),null;var r=Ga(e,t);if(e.tag!==0&&r===2){var a=Vs(e);a!==0&&(t=a,r=hl(e,a))}if(r===1)throw r=Pi,Yn(e,0),Cn(e,t),dt(e,Oe()),r;if(r===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,ct,tn),dt(e,Oe()),null}function gl(e,t){var r=ye;ye|=1;try{return e(t)}finally{ye=r,ye===0&&(Lr=Oe()+500,ya&&vn())}}function Qn(e){jn!==null&&jn.tag===0&&(ye&6)===0&&Mr();var t=ye;ye|=1;var r=Nt.transition,a=Se;try{if(Nt.transition=null,Se=1,e)return e()}finally{Se=a,Nt.transition=r,ye=t,(ye&6)===0&&vn()}}function xl(){yt=Ar.current,Ie(Ar)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,um(r)),Fe!==null)for(r=Fe.return;r!==null;){var a=r;switch(Co(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ga();break;case 3:Tr(),Ie(ot),Ie(qe),$o();break;case 5:_o(a);break;case 4:Tr();break;case 13:Ie(Me);break;case 19:Ie(Me);break;case 10:Lo(a.type._context);break;case 22:case 23:xl()}r=r.return}if(Qe=e,Fe=e=En(e.current,null),Ze=yt=t,Ve=0,Pi=null,cl=$a=Kn=0,ct=Ai=null,Wn!==null){for(t=0;t<Wn.length;t++)if(r=Wn[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,d=r.pending;if(d!==null){var g=d.next;d.next=l,a.next=g}r.pending=a}Wn=null}return e}function Hd(e,t){do{var r=Fe;try{if(Ao(),Ta.current=La,Ia){for(var a=Re.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}Ia=!1}if(Vn=0,Ke=Ge=Re=null,ji=!1,Ni=0,ul.current=null,r===null||r.return===null){Ve=1,Pi=t,Fe=null;break}e:{var d=e,g=r.return,y=r,b=t;if(t=Ze,y.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var A=b,z=y,F=z.tag;if((z.mode&1)===0&&(F===0||F===11||F===15)){var $=z.alternate;$?(z.updateQueue=$.updateQueue,z.memoizedState=$.memoizedState,z.lanes=$.lanes):(z.updateQueue=null,z.memoizedState=null)}var X=hd(g);if(X!==null){X.flags&=-257,md(X,g,y,d,t),X.mode&1&&pd(d,A,t),t=X,b=A;var ee=t.updateQueue;if(ee===null){var te=new Set;te.add(b),t.updateQueue=te}else ee.add(b);break e}else{if((t&1)===0){pd(d,A,t),yl();break e}b=Error(i(426))}}else if(Ae&&y.mode&1){var $e=hd(g);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),md($e,g,y,d,t),Io(Ir(b,y));break e}}d=b=Ir(b,y),Ve!==4&&(Ve=2),Ai===null?Ai=[d]:Ai.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var I=dd(d,b,t);Oc(d,I);break e;case 1:y=b;var j=d.type,P=d.stateNode;if((d.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(Sn===null||!Sn.has(P)))){d.flags|=65536,t&=-t,d.lanes|=t;var H=fd(d,y,t);Oc(d,H);break e}}d=d.return}while(d!==null)}Vd(r)}catch(ie){t=ie,Fe===r&&r!==null&&(Fe=r=r.return);continue}break}while(!0)}function Wd(){var e=Oa.current;return Oa.current=La,e===null?La:e}function yl(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Qe===null||(Kn&268435455)===0&&($a&268435455)===0||Cn(Qe,Ze)}function Ga(e,t){var r=ye;ye|=2;var a=Wd();(Qe!==e||Ze!==t)&&(tn=null,Yn(e,t));do try{Rm();break}catch(l){Hd(e,l)}while(!0);if(Ao(),ye=r,Oa.current=a,Fe!==null)throw Error(i(261));return Qe=null,Ze=0,Ve}function Rm(){for(;Fe!==null;)Gd(Fe)}function Dm(){for(;Fe!==null&&!sh();)Gd(Fe)}function Gd(e){var t=Yd(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?Vd(e):Fe=t,ul.current=null}function Vd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Em(r,t,yt),r!==null){Fe=r;return}}else{if(r=Tm(r,t),r!==null){r.flags&=32767,Fe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Fe=null;return}}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ve===0&&(Ve=5)}function Jn(e,t,r){var a=Se,l=Nt.transition;try{Nt.transition=null,Se=1,Bm(e,t,r,a)}finally{Nt.transition=l,Se=a}return null}function Bm(e,t,r,a){do Mr();while(jn!==null);if((ye&6)!==0)throw Error(i(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(gh(e,d),e===Qe&&(Fe=Qe=null,Ze=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Fa||(Fa=!0,Jd(Yi,function(){return Mr(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=Nt.transition,Nt.transition=null;var g=Se;Se=1;var y=ye;ye|=4,ul.current=null,Pm(e,r),Bd(r,e),nm(yo),na=!!xo,yo=xo=null,e.current=r,Am(r),oh(),ye=y,Se=g,Nt.transition=d}else e.current=r;if(Fa&&(Fa=!1,jn=e,Ua=l),d=e.pendingLanes,d===0&&(Sn=null),ch(r.stateNode),dt(e,Oe()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(za)throw za=!1,e=fl,fl=null,e;return(Ua&1)!==0&&e.tag!==0&&Mr(),d=e.pendingLanes,(d&1)!==0?e===pl?Li++:(Li=0,pl=e):Li=0,vn(),null}function Mr(){if(jn!==null){var e=Ru(Ua),t=Nt.transition,r=Se;try{if(Nt.transition=null,Se=16>e?16:e,jn===null)var a=!1;else{if(e=jn,jn=null,Ua=0,(ye&6)!==0)throw Error(i(331));var l=ye;for(ye|=4,q=e.current;q!==null;){var d=q,g=d.child;if((q.flags&16)!==0){var y=d.deletions;if(y!==null){for(var b=0;b<y.length;b++){var A=y[b];for(q=A;q!==null;){var z=q;switch(z.tag){case 0:case 11:case 15:Ii(8,z,d)}var F=z.child;if(F!==null)F.return=z,q=F;else for(;q!==null;){z=q;var $=z.sibling,X=z.return;if(Ad(z),z===A){q=null;break}if($!==null){$.return=X,q=$;break}q=X}}}var ee=d.alternate;if(ee!==null){var te=ee.child;if(te!==null){ee.child=null;do{var $e=te.sibling;te.sibling=null,te=$e}while(te!==null)}}q=d}}if((d.subtreeFlags&2064)!==0&&g!==null)g.return=d,q=g;else e:for(;q!==null;){if(d=q,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Ii(9,d,d.return)}var I=d.sibling;if(I!==null){I.return=d.return,q=I;break e}q=d.return}}var j=e.current;for(q=j;q!==null;){g=q;var P=g.child;if((g.subtreeFlags&2064)!==0&&P!==null)P.return=g,q=P;else e:for(g=j;q!==null;){if(y=q,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:_a(9,y)}}catch(ie){Be(y,y.return,ie)}if(y===g){q=null;break e}var H=y.sibling;if(H!==null){H.return=y.return,q=H;break e}q=y.return}}if(ye=l,vn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ji,e)}catch{}a=!0}return a}finally{Se=r,Nt.transition=t}}return!1}function Kd(e,t,r){t=Ir(r,t),t=dd(e,t,1),e=wn(e,t,1),t=it(),e!==null&&(ni(e,1,t),dt(e,t))}function Be(e,t,r){if(e.tag===3)Kd(e,e,r);else for(;t!==null;){if(t.tag===3){Kd(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sn===null||!Sn.has(a))){e=Ir(r,e),e=fd(t,e,1),t=wn(t,e,1),e=it(),t!==null&&(ni(t,1,e),dt(t,e));break}}t=t.return}}function _m(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(Ze&r)===r&&(Ve===4||Ve===3&&(Ze&130023424)===Ze&&500>Oe()-dl?Yn(e,0):cl|=r),dt(e,t)}function Qd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Zi,Zi<<=1,(Zi&130023424)===0&&(Zi=4194304)));var r=it();e=Zt(e,t),e!==null&&(ni(e,t,r),dt(e,r))}function Om(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Qd(e,r)}function $m(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(t),Qd(e,r)}var Yd;Yd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)ut=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ut=!1,Cm(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,Ae&&(t.flags&1048576)!==0&&Tc(t,ba,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Da(e,t),e=t.pendingProps;var l=wr(t,qe.current);Er(t,r),l=Uo(null,t,a,e,l,r);var d=Ho();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(a)?(d=!0,xa(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Do(t),l.updater=Ma,t.stateNode=l,l._reactInternals=t,Yo(t,a,e,r),t=qo(null,t,a,!0,d,r)):(t.tag=0,Ae&&d&&No(t),rt(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(Da(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=Fm(a),e=Lt(a,e),l){case 0:t=Zo(null,t,a,e,r);break e;case 1:t=wd(null,t,a,e,r);break e;case 11:t=gd(null,t,a,e,r);break e;case 14:t=xd(null,t,a,Lt(a.type,e),r);break e}throw Error(i(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Lt(a,l),Zo(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Lt(a,l),wd(e,t,a,l,r);case 3:e:{if(kd(t),e===null)throw Error(i(387));a=t.pendingProps,d=t.memoizedState,l=d.element,_c(e,t),Ca(t,a,null,r);var g=t.memoizedState;if(a=g.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=Ir(Error(i(423)),t),t=Sd(e,t,a,r,l);break e}else if(a!==l){l=Ir(Error(i(424)),t),t=Sd(e,t,a,r,l);break e}else for(xt=gn(t.stateNode.containerInfo.firstChild),gt=t,Ae=!0,At=null,r=Dc(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(jr(),a===l){t=en(e,t,r);break e}rt(e,t,a,r)}t=t.child}return t;case 5:return zc(t),e===null&&To(t),a=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,g=l.children,vo(a,l)?g=null:d!==null&&vo(a,d)&&(t.flags|=32),bd(e,t),rt(e,t,g,r),t.child;case 6:return e===null&&To(t),null;case 13:return jd(e,t,r);case 4:return Bo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Nr(t,null,a,r):rt(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Lt(a,l),gd(e,t,a,l,r);case 7:return rt(e,t,t.pendingProps,r),t.child;case 8:return rt(e,t,t.pendingProps.children,r),t.child;case 12:return rt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,d=t.memoizedProps,g=l.value,Ee(Sa,a._currentValue),a._currentValue=g,d!==null)if(Pt(d.value,g)){if(d.children===l.children&&!ot.current){t=en(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var y=d.dependencies;if(y!==null){g=d.child;for(var b=y.firstContext;b!==null;){if(b.context===a){if(d.tag===1){b=qt(-1,r&-r),b.tag=2;var A=d.updateQueue;if(A!==null){A=A.shared;var z=A.pending;z===null?b.next=b:(b.next=z.next,z.next=b),A.pending=b}}d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),Mo(d.return,r,t),y.lanes|=r;break}b=b.next}}else if(d.tag===10)g=d.type===t.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(i(341));g.lanes|=r,y=g.alternate,y!==null&&(y.lanes|=r),Mo(g,r,t),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===t){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}rt(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,Er(t,r),l=St(l),a=a(l),t.flags|=1,rt(e,t,a,r),t.child;case 14:return a=t.type,l=Lt(a,t.pendingProps),l=Lt(a.type,l),xd(e,t,a,l,r);case 15:return yd(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Lt(a,l),Da(e,t),t.tag=1,lt(a)?(e=!0,xa(t)):e=!1,Er(t,r),ud(t,a,l),Yo(t,a,l,r),qo(null,t,a,!0,e,r);case 19:return Cd(e,t,r);case 22:return vd(e,t,r)}throw Error(i(156,t.tag))};function Jd(e,t){return Iu(e,t)}function zm(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,r,a){return new zm(e,t,r,a)}function vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fm(e){if(typeof e=="function")return vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ce)return 11;if(e===ze)return 14}return 2}function En(e,t){var r=e.alternate;return r===null?(r=Ct(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Va(e,t,r,a,l,d){var g=2;if(a=e,typeof e=="function")vl(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case U:return Xn(r.children,l,d,t);case de:g=8,l|=8;break;case oe:return e=Ct(12,r,t,l|2),e.elementType=oe,e.lanes=d,e;case He:return e=Ct(13,r,t,l),e.elementType=He,e.lanes=d,e;case ke:return e=Ct(19,r,t,l),e.elementType=ke,e.lanes=d,e;case je:return Ka(r,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case we:g=10;break e;case Ne:g=9;break e;case Ce:g=11;break e;case ze:g=14;break e;case _e:g=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Ct(g,r,t,l),t.elementType=e,t.type=a,t.lanes=d,t}function Xn(e,t,r,a){return e=Ct(7,e,a,t),e.lanes=r,e}function Ka(e,t,r,a){return e=Ct(22,e,a,t),e.elementType=je,e.lanes=r,e.stateNode={isHidden:!1},e}function bl(e,t,r){return e=Ct(6,e,null,t),e.lanes=r,e}function wl(e,t,r){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Um(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function kl(e,t,r,a,l,d,g,y,b){return e=new Um(e,t,r,y,b),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Ct(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(d),e}function Hm(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function Xd(e){if(!e)return yn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var r=e.type;if(lt(r))return Nc(e,r,t)}return t}function Zd(e,t,r,a,l,d,g,y,b){return e=kl(r,a,!0,e,l,d,g,y,b),e.context=Xd(null),r=e.current,a=it(),l=Nn(r),d=qt(a,l),d.callback=t??null,wn(r,d,l),e.current.lanes=l,ni(e,l,a),dt(e,a),e}function Qa(e,t,r,a){var l=t.current,d=it(),g=Nn(l);return r=Xd(r),t.context===null?t.context=r:t.pendingContext=r,t=qt(d,g),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=wn(l,t,g),e!==null&&(Dt(e,l,g,d),Na(e,l,g)),g}function Ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Sl(e,t){qd(e,t),(e=e.alternate)&&qd(e,t)}var ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}Ja.prototype.render=jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));Qa(e,t,null,null)},Ja.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){Qa(null,e,null,null)}),t[Qt]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=_u();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pn.length&&t!==0&&t<pn[r].priority;r++);pn.splice(r,0,e),r===0&&zu(e)}};function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tf(){}function Wm(e,t,r,a,l){if(l){if(typeof a=="function"){var d=a;a=function(){var A=Ya(g);d.call(A)}}var g=Zd(t,a,e,0,null,!1,!1,"",tf);return e._reactRootContainer=g,e[Qt]=g.current,gi(e.nodeType===8?e.parentNode:e),Qn(),g}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var y=a;a=function(){var A=Ya(b);y.call(A)}}var b=kl(e,0,!1,null,null,!1,!1,"",tf);return e._reactRootContainer=b,e[Qt]=b.current,gi(e.nodeType===8?e.parentNode:e),Qn(function(){Qa(t,b,r,a)}),b}function Za(e,t,r,a,l){var d=r._reactRootContainer;if(d){var g=d;if(typeof l=="function"){var y=l;l=function(){var b=Ya(g);y.call(b)}}Qa(t,g,e,l)}else g=Wm(r,t,e,l,a);return Ya(g)}Du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ti(t.pendingLanes);r!==0&&(Qs(t,r|1),dt(t,Oe()),(ye&6)===0&&(Lr=Oe()+500,vn()))}break;case 13:Qn(function(){var a=Zt(e,1);if(a!==null){var l=it();Dt(a,e,1,l)}}),Sl(e,1)}},Ys=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var r=it();Dt(t,e,134217728,r)}Sl(e,134217728)}},Bu=function(e){if(e.tag===13){var t=Nn(e),r=Zt(e,t);if(r!==null){var a=it();Dt(r,e,t,a)}Sl(e,t)}},_u=function(){return Se},Ou=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}},Fs=function(e,t,r){switch(t){case"input":if(or(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=ma(a);if(!l)throw Error(i(90));st(a),or(a,l)}}}break;case"textarea":Yr(e,r);break;case"select":t=r.value,t!=null&&Kt(e,!!r.multiple,t,!1)}},ku=gl,Su=Qn;var Gm={usingClientEntryPoint:!1,Events:[vi,vr,ma,bu,wu,gl]},Mi={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vm={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:M.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Ji=qa.inject(Vm),Ot=qa}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm,ft.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nl(t))throw Error(i(200));return Hm(e,t,null,r)},ft.createRoot=function(e,t){if(!Nl(e))throw Error(i(299));var r=!1,a="",l=ef;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=kl(e,1,!1,null,null,r,!1,a,l),e[Qt]=t.current,gi(e.nodeType===8?e.parentNode:e),new jl(t)},ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Eu(t),e=e===null?null:e.stateNode,e},ft.flushSync=function(e){return Qn(e)},ft.hydrate=function(e,t,r){if(!Xa(t))throw Error(i(200));return Za(null,e,t,!0,r)},ft.hydrateRoot=function(e,t,r){if(!Nl(e))throw Error(i(405));var a=r!=null&&r.hydratedSources||null,l=!1,d="",g=ef;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),t=Zd(t,null,e,1,r??null,l,!1,d,g),e[Qt]=t.current,gi(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Ja(t)},ft.render=function(e,t,r){if(!Xa(t))throw Error(i(200));return Za(null,e,t,!1,r)},ft.unmountComponentAtNode=function(e){if(!Xa(e))throw Error(i(40));return e._reactRootContainer?(Qn(function(){Za(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1},ft.unstable_batchedUpdates=gl,ft.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Xa(r))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Za(e,t,r,!1,a)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var gf;function S0(){if(gf)return Pl.exports;gf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Pl.exports=k0(),Pl.exports}var ts={},xf;function j0(){if(xf)return ts;xf=1;var n=S0();return ts.createRoot=n.createRoot,ts.hydrateRoot=n.hydrateRoot,ts}var N0=j0();const C0=Vf(N0),Ts=N.createContext(),E0=({children:n})=>{const[o,i]=N.useState(Math.random()<.5);return s.jsx(Ts.Provider,{value:{isDark:o,setIsDark:i},children:n})};function zl(){return zl=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},zl.apply(this,arguments)}var T0={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,o){},onStringTyped:function(n,o){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,o){},onTypingResumed:function(n,o){},onReset:function(n){},onStop:function(n,o){},onStart:function(n,o){},onDestroy:function(n){}},I0=new(function(){function n(){}var o=n.prototype;return o.load=function(i,u,c){if(i.el=typeof c=="string"?document.querySelector(c):c,i.options=zl({},T0,u),i.isInput=i.el.tagName.toLowerCase()==="input",i.attr=i.options.attr,i.bindInputFocusEvents=i.options.bindInputFocusEvents,i.showCursor=!i.isInput&&i.options.showCursor,i.cursorChar=i.options.cursorChar,i.cursorBlinking=!0,i.elContent=i.attr?i.el.getAttribute(i.attr):i.el.textContent,i.contentType=i.options.contentType,i.typeSpeed=i.options.typeSpeed,i.startDelay=i.options.startDelay,i.backSpeed=i.options.backSpeed,i.smartBackspace=i.options.smartBackspace,i.backDelay=i.options.backDelay,i.fadeOut=i.options.fadeOut,i.fadeOutClass=i.options.fadeOutClass,i.fadeOutDelay=i.options.fadeOutDelay,i.isPaused=!1,i.strings=i.options.strings.map(function(x){return x.trim()}),i.stringsElement=typeof i.options.stringsElement=="string"?document.querySelector(i.options.stringsElement):i.options.stringsElement,i.stringsElement){i.strings=[],i.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var f=Array.prototype.slice.apply(i.stringsElement.children),m=f.length;if(m)for(var p=0;p<m;p+=1)i.strings.push(f[p].innerHTML.trim())}for(var h in i.strPos=0,i.currentElContent=this.getCurrentElContent(i),i.currentElContent&&i.currentElContent.length>0&&(i.strPos=i.currentElContent.length-1,i.strings.unshift(i.currentElContent)),i.sequence=[],i.strings)i.sequence[h]=h;i.arrayPos=0,i.stopNum=0,i.loop=i.options.loop,i.loopCount=i.options.loopCount,i.curLoop=0,i.shuffle=i.options.shuffle,i.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},i.typingComplete=!1,i.autoInsertCss=i.options.autoInsertCss,i.autoInsertCss&&(this.appendCursorAnimationCss(i),this.appendFadeOutAnimationCss(i))},o.getCurrentElContent=function(i){return i.attr?i.el.getAttribute(i.attr):i.isInput?i.el.value:i.contentType==="html"?i.el.innerHTML:i.el.textContent},o.appendCursorAnimationCss=function(i){var u="data-typed-js-cursor-css";if(i.showCursor&&!document.querySelector("["+u+"]")){var c=document.createElement("style");c.setAttribute(u,"true"),c.innerHTML=`
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
      `,document.body.appendChild(c)}},o.appendFadeOutAnimationCss=function(i){var u="data-typed-fadeout-js-css";if(i.fadeOut&&!document.querySelector("["+u+"]")){var c=document.createElement("style");c.setAttribute(u,"true"),c.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(c)}},n}()),yf=new(function(){function n(){}var o=n.prototype;return o.typeHtmlChars=function(i,u,c){if(c.contentType!=="html")return u;var f=i.substring(u).charAt(0);if(f==="<"||f==="&"){var m;for(m=f==="<"?">":";";i.substring(u+1).charAt(0)!==m&&!(1+ ++u>i.length););u++}return u},o.backSpaceHtmlChars=function(i,u,c){if(c.contentType!=="html")return u;var f=i.substring(u).charAt(0);if(f===">"||f===";"){var m;for(m=f===">"?"<":"&";i.substring(u-1).charAt(0)!==m&&!(--u<0););u--}return u},n}()),Fl=function(){function n(i,u){I0.load(this,u,i),this.begin()}var o=n.prototype;return o.toggle=function(){this.pause.status?this.start():this.stop()},o.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},o.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},o.destroy=function(){this.reset(!1),this.options.onDestroy(this)},o.reset=function(i){i===void 0&&(i=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,i&&(this.insertCursor(),this.options.onReset(this),this.begin())},o.begin=function(){var i=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){i.strPos===0?i.typewrite(i.strings[i.sequence[i.arrayPos]],i.strPos):i.backspace(i.strings[i.sequence[i.arrayPos]],i.strPos)},this.startDelay)},o.typewrite=function(i,u){var c=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var f=this.humanizer(this.typeSpeed),m=1;this.pause.status!==!0?this.timeout=setTimeout(function(){u=yf.typeHtmlChars(i,u,c);var p=0,h=i.substring(u);if(h.charAt(0)==="^"&&/^\^\d+/.test(h)){var x=1;x+=(h=/\d+/.exec(h)[0]).length,p=parseInt(h),c.temporaryPause=!0,c.options.onTypingPaused(c.arrayPos,c),i=i.substring(0,u)+i.substring(u+x),c.toggleBlinking(!0)}if(h.charAt(0)==="`"){for(;i.substring(u+m).charAt(0)!=="`"&&(m++,!(u+m>i.length)););var v=i.substring(0,u),E=i.substring(v.length+1,u+m),S=i.substring(u+m+1);i=v+E+S,m--}c.timeout=setTimeout(function(){c.toggleBlinking(!1),u>=i.length?c.doneTyping(i,u):c.keepTyping(i,u,m),c.temporaryPause&&(c.temporaryPause=!1,c.options.onTypingResumed(c.arrayPos,c))},p)},f):this.setPauseStatus(i,u,!0)},o.keepTyping=function(i,u,c){u===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var f=i.substring(0,u+=c);this.replaceText(f),this.typewrite(i,u)},o.doneTyping=function(i,u){var c=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){c.backspace(i,u)},this.backDelay))},o.backspace=function(i,u){var c=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var f=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){u=yf.backSpaceHtmlChars(i,u,c);var m=i.substring(0,u);if(c.replaceText(m),c.smartBackspace){var p=c.strings[c.arrayPos+1];c.stopNum=p&&m===p.substring(0,u)?u:0}u>c.stopNum?(u--,c.backspace(i,u)):u<=c.stopNum&&(c.arrayPos++,c.arrayPos===c.strings.length?(c.arrayPos=0,c.options.onLastStringBackspaced(),c.shuffleStringsIfNeeded(),c.begin()):c.typewrite(c.strings[c.sequence[c.arrayPos]],u))},f)}else this.setPauseStatus(i,u,!1)},o.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},o.setPauseStatus=function(i,u,c){this.pause.typewrite=c,this.pause.curString=i,this.pause.curStrPos=u},o.toggleBlinking=function(i){this.cursor&&(this.pause.status||this.cursorBlinking!==i&&(this.cursorBlinking=i,i?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},o.humanizer=function(i){return Math.round(Math.random()*i/2)+i},o.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},o.initFadeOut=function(){var i=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){i.arrayPos++,i.replaceText(""),i.strings.length>i.arrayPos?i.typewrite(i.strings[i.sequence[i.arrayPos]],0):(i.typewrite(i.strings[0],0),i.arrayPos=0)},this.fadeOutDelay)},o.replaceText=function(i){this.attr?this.el.setAttribute(this.attr,i):this.isInput?this.el.value=i:this.contentType==="html"?this.el.innerHTML=i:this.el.textContent=i},o.bindFocusEvents=function(){var i=this;this.isInput&&(this.el.addEventListener("focus",function(u){i.stop()}),this.el.addEventListener("blur",function(u){i.el.value&&i.el.value.length!==0||i.start()}))},o.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();const P0=({images:n=["/Resume-Builder/Temp/temp1.png","/Resume-Builder/Temp/temp2.png","/Resume-Builder/Temp/temp3.png","/Resume-Builder/Temp/temp4.png","/Resume-Builder/Temp/temp5.png","/Resume-Builder/Temp/temp6.png"],interval:o=3e3,showIndicators:i=!0})=>{const[u,c]=N.useState(0),[f,m]=N.useState(window.innerWidth<768),[p,h]=N.useState(null),x=N.useRef(null);N.useEffect(()=>{const k=()=>{m(window.innerWidth<768)};return window.addEventListener("resize",k),k(),()=>window.removeEventListener("resize",k)},[]),N.useEffect(()=>{if(n.length<=1)return;const k=setInterval(()=>{h("right"),c(L=>(L+1)%n.length)},o);return()=>clearInterval(k)},[n.length,o]);const v=()=>{if(f)return[u];{const k=(u-1+n.length)%n.length,L=(u+1)%n.length;return[k,u,L]}},E=k=>{h(k>u?"right":"left"),c(k)};if(!n.length)return s.jsx("div",{className:"w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg",children:"No images to display"});const S=v(),w=k=>f?"transition-all duration-500 ease-in-out px-4":k===1?"transition-all duration-700 ease-in-out px-4 scale-110 z-10 opacity-90":k===0?`transition-all duration-700 ease-in-out px-4 scale-90 opacity-70 ${p==="left"?"translate-x-8":""}`:`transition-all duration-700 ease-in-out px-4 scale-90 opacity-70 ${p==="right"?"translate-x-8":""}`;return s.jsxs("div",{className:"w-3/4 bg-gray-300 overflow-hidden dark:bg-slate-950",children:[s.jsx("div",{className:"w-full overflow-hidden py-8",ref:x,children:s.jsx("div",{className:"flex justify-center items-center",children:S.map((k,L)=>s.jsx("div",{className:w(L),children:s.jsx("img",{src:n[k],alt:`Slide ${k+1}`,className:"w-full h-auto object-contain rounded-lg shadow dark:filter dark:brightness-90"})},`slide-${k}`))})}),i&&s.jsx("div",{className:"flex justify-center items-center mb-3 mt-2",children:s.jsx("div",{className:"flex space-x-3",children:n.map((k,L)=>s.jsx("button",{className:`w-3 h-3 rounded-full transition-colors focus:outline-none ${L===u?"bg-blue-500":"bg-gray-400 hover:bg-gray-500 dark:bg-gray-300 dark:hover:bg-gray-400"}`,onClick:()=>E(L),"aria-label":`Go to slide ${L+1}`,"aria-current":L===u?"true":"false"},`indicator-${L}`))})})]})};var ht=function(){return ht=Object.assign||function(o){for(var i,u=1,c=arguments.length;u<c;u++){i=arguments[u];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(o[f]=i[f])}return o},ht.apply(this,arguments)};function xs(n,o,i){if(i||arguments.length===2)for(var u=0,c=o.length,f;u<c;u++)(f||!(u in o))&&(f||(f=Array.prototype.slice.call(o,0,u)),f[u]=o[u]);return n.concat(f||Array.prototype.slice.call(o))}var Pe="-ms-",Oi="-moz-",be="-webkit-",up="comm",Is="rule",du="decl",A0="@import",cp="@keyframes",L0="@layer",dp=Math.abs,fu=String.fromCharCode,Ul=Object.assign;function M0(n,o){return Je(n,0)^45?(((o<<2^Je(n,0))<<2^Je(n,1))<<2^Je(n,2))<<2^Je(n,3):0}function fp(n){return n.trim()}function rn(n,o){return(n=o.exec(n))?n[0]:n}function he(n,o,i){return n.replace(o,i)}function cs(n,o,i){return n.indexOf(o,i)}function Je(n,o){return n.charCodeAt(o)|0}function Br(n,o,i){return n.slice(o,i)}function Wt(n){return n.length}function pp(n){return n.length}function _i(n,o){return o.push(n),n}function R0(n,o){return n.map(o).join("")}function vf(n,o){return n.filter(function(i){return!rn(i,o)})}var Ps=1,_r=1,hp=0,Et=0,Ue=0,Ur="";function As(n,o,i,u,c,f,m,p){return{value:n,root:o,parent:i,type:u,props:c,children:f,line:Ps,column:_r,length:m,return:"",siblings:p}}function In(n,o){return Ul(As("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function Rr(n){for(;n.root;)n=In(n.root,{children:[n]});_i(n,n.siblings)}function D0(){return Ue}function B0(){return Ue=Et>0?Je(Ur,--Et):0,_r--,Ue===10&&(_r=1,Ps--),Ue}function Bt(){return Ue=Et<hp?Je(Ur,Et++):0,_r++,Ue===10&&(_r=1,Ps++),Ue}function nr(){return Je(Ur,Et)}function ds(){return Et}function Ls(n,o){return Br(Ur,n,o)}function Hl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _0(n){return Ps=_r=1,hp=Wt(Ur=n),Et=0,[]}function O0(n){return Ur="",n}function Ml(n){return fp(Ls(Et-1,Wl(n===91?n+2:n===40?n+1:n)))}function $0(n){for(;(Ue=nr())&&Ue<33;)Bt();return Hl(n)>2||Hl(Ue)>3?"":" "}function z0(n,o){for(;--o&&Bt()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return Ls(n,ds()+(o<6&&nr()==32&&Bt()==32))}function Wl(n){for(;Bt();)switch(Ue){case n:return Et;case 34:case 39:n!==34&&n!==39&&Wl(Ue);break;case 40:n===41&&Wl(n);break;case 92:Bt();break}return Et}function F0(n,o){for(;Bt()&&n+Ue!==57;)if(n+Ue===84&&nr()===47)break;return"/*"+Ls(o,Et-1)+"*"+fu(n===47?n:Bt())}function U0(n){for(;!Hl(nr());)Bt();return Ls(n,Et)}function H0(n){return O0(fs("",null,null,null,[""],n=_0(n),0,[0],n))}function fs(n,o,i,u,c,f,m,p,h){for(var x=0,v=0,E=m,S=0,w=0,k=0,L=1,R=1,T=1,_=0,W="",M=c,O=f,V=u,U=W;R;)switch(k=_,_=Bt()){case 40:if(k!=108&&Je(U,E-1)==58){cs(U+=he(Ml(_),"&","&\f"),"&\f",dp(x?p[x-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:U+=Ml(_);break;case 9:case 10:case 13:case 32:U+=$0(k);break;case 92:U+=z0(ds()-1,7);continue;case 47:switch(nr()){case 42:case 47:_i(W0(F0(Bt(),ds()),o,i,h),h);break;default:U+="/"}break;case 123*L:p[x++]=Wt(U)*T;case 125*L:case 59:case 0:switch(_){case 0:case 125:R=0;case 59+v:T==-1&&(U=he(U,/\f/g,"")),w>0&&Wt(U)-E&&_i(w>32?wf(U+";",u,i,E-1,h):wf(he(U," ","")+";",u,i,E-2,h),h);break;case 59:U+=";";default:if(_i(V=bf(U,o,i,x,v,c,p,W,M=[],O=[],E,f),f),_===123)if(v===0)fs(U,o,V,V,M,f,E,p,O);else switch(S===99&&Je(U,3)===110?100:S){case 100:case 108:case 109:case 115:fs(n,V,V,u&&_i(bf(n,V,V,0,0,c,p,W,c,M=[],E,O),O),c,O,E,p,u?M:O);break;default:fs(U,V,V,V,[""],O,0,p,O)}}x=v=w=0,L=T=1,W=U="",E=m;break;case 58:E=1+Wt(U),w=k;default:if(L<1){if(_==123)--L;else if(_==125&&L++==0&&B0()==125)continue}switch(U+=fu(_),_*L){case 38:T=v>0?1:(U+="\f",-1);break;case 44:p[x++]=(Wt(U)-1)*T,T=1;break;case 64:nr()===45&&(U+=Ml(Bt())),S=nr(),v=E=Wt(W=U+=U0(ds())),_++;break;case 45:k===45&&Wt(U)==2&&(L=0)}}return f}function bf(n,o,i,u,c,f,m,p,h,x,v,E){for(var S=c-1,w=c===0?f:[""],k=pp(w),L=0,R=0,T=0;L<u;++L)for(var _=0,W=Br(n,S+1,S=dp(R=m[L])),M=n;_<k;++_)(M=fp(R>0?w[_]+" "+W:he(W,/&\f/g,w[_])))&&(h[T++]=M);return As(n,o,i,c===0?Is:p,h,x,v,E)}function W0(n,o,i,u){return As(n,o,i,up,fu(D0()),Br(n,2,-2),0,u)}function wf(n,o,i,u,c){return As(n,o,i,du,Br(n,0,u),Br(n,u+1,-1),u,c)}function mp(n,o,i){switch(M0(n,o)){case 5103:return be+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+n+n;case 4789:return Oi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return be+n+Oi+n+Pe+n+n;case 5936:switch(Je(n,o+11)){case 114:return be+n+Pe+he(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return be+n+Pe+he(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return be+n+Pe+he(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return be+n+Pe+n+n;case 6165:return be+n+Pe+"flex-"+n+n;case 5187:return be+n+he(n,/(\w+).+(:[^]+)/,be+"box-$1$2"+Pe+"flex-$1$2")+n;case 5443:return be+n+Pe+"flex-item-"+he(n,/flex-|-self/g,"")+(rn(n,/flex-|baseline/)?"":Pe+"grid-row-"+he(n,/flex-|-self/g,""))+n;case 4675:return be+n+Pe+"flex-line-pack"+he(n,/align-content|flex-|-self/g,"")+n;case 5548:return be+n+Pe+he(n,"shrink","negative")+n;case 5292:return be+n+Pe+he(n,"basis","preferred-size")+n;case 6060:return be+"box-"+he(n,"-grow","")+be+n+Pe+he(n,"grow","positive")+n;case 4554:return be+he(n,/([^-])(transform)/g,"$1"+be+"$2")+n;case 6187:return he(he(he(n,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),n,"")+n;case 5495:case 3959:return he(n,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return he(he(n,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+n+n;case 4200:if(!rn(n,/flex-|baseline/))return Pe+"grid-column-align"+Br(n,o)+n;break;case 2592:case 3360:return Pe+he(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(u,c){return o=c,rn(u.props,/grid-\w+-end/)})?~cs(n+(i=i[o].value),"span",0)?n:Pe+he(n,"-start","")+n+Pe+"grid-row-span:"+(~cs(i,"span",0)?rn(i,/\d+/):+rn(i,/\d+/)-+rn(n,/\d+/))+";":Pe+he(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(u){return rn(u.props,/grid-\w+-start/)})?n:Pe+he(he(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return he(n,/(.+)-inline(.+)/,be+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(n)-1-o>6)switch(Je(n,o+1)){case 109:if(Je(n,o+4)!==45)break;case 102:return he(n,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+Oi+(Je(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~cs(n,"stretch",0)?mp(he(n,"stretch","fill-available"),o,i)+n:n}break;case 5152:case 5920:return he(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,f,m,p,h,x){return Pe+c+":"+f+x+(m?Pe+c+"-span:"+(p?h:+h-+f)+x:"")+n});case 4949:if(Je(n,o+6)===121)return he(n,":",":"+be)+n;break;case 6444:switch(Je(n,Je(n,14)===45?18:11)){case 120:return he(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Je(n,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Pe+"$2box$3")+n;case 100:return he(n,":",":"+Pe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(n,"scroll-","scroll-snap-")+n}return n}function ys(n,o){for(var i="",u=0;u<n.length;u++)i+=o(n[u],u,n,o)||"";return i}function G0(n,o,i,u){switch(n.type){case L0:if(n.children.length)break;case A0:case du:return n.return=n.return||n.value;case up:return"";case cp:return n.return=n.value+"{"+ys(n.children,u)+"}";case Is:if(!Wt(n.value=n.props.join(",")))return""}return Wt(i=ys(n.children,u))?n.return=n.value+"{"+i+"}":""}function V0(n){var o=pp(n);return function(i,u,c,f){for(var m="",p=0;p<o;p++)m+=n[p](i,u,c,f)||"";return m}}function K0(n){return function(o){o.root||(o=o.return)&&n(o)}}function Q0(n,o,i,u){if(n.length>-1&&!n.return)switch(n.type){case du:n.return=mp(n.value,n.length,i);return;case cp:return ys([In(n,{value:he(n.value,"@","@"+be)})],u);case Is:if(n.length)return R0(i=n.props,function(c){switch(rn(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Rr(In(n,{props:[he(c,/:(read-\w+)/,":"+Oi+"$1")]})),Rr(In(n,{props:[c]})),Ul(n,{props:vf(i,u)});break;case"::placeholder":Rr(In(n,{props:[he(c,/:(plac\w+)/,":"+be+"input-$1")]})),Rr(In(n,{props:[he(c,/:(plac\w+)/,":"+Oi+"$1")]})),Rr(In(n,{props:[he(c,/:(plac\w+)/,Pe+"input-$1")]})),Rr(In(n,{props:[c]})),Ul(n,{props:vf(i,u)});break}return""})}}var Y0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},Or=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",gp="active",xp="data-styled-version",Ms="6.1.15",pu=`/*!sc*/
`,vs=typeof window<"u"&&"HTMLElement"in window,J0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),Rs=Object.freeze([]),$r=Object.freeze({});function X0(n,o,i){return i===void 0&&(i=$r),n.theme!==i.theme&&n.theme||o||i.theme}var yp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Z0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q0=/(^-|-$)/g;function kf(n){return n.replace(Z0,"-").replace(q0,"")}var ex=/(a)(d)/gi,ns=52,Sf=function(n){return String.fromCharCode(n+(n>25?39:97))};function Gl(n){var o,i="";for(o=Math.abs(n);o>ns;o=o/ns|0)i=Sf(o%ns)+i;return(Sf(o%ns)+i).replace(ex,"$1-$2")}var Rl,vp=5381,Dr=function(n,o){for(var i=o.length;i;)n=33*n^o.charCodeAt(--i);return n},bp=function(n){return Dr(vp,n)};function tx(n){return Gl(bp(n)>>>0)}function nx(n){return n.displayName||n.name||"Component"}function Dl(n){return typeof n=="string"&&!0}var wp=typeof Symbol=="function"&&Symbol.for,kp=wp?Symbol.for("react.memo"):60115,rx=wp?Symbol.for("react.forward_ref"):60112,ix={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ax={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sx=((Rl={})[rx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rl[kp]=Sp,Rl);function jf(n){return("type"in(o=n)&&o.type.$$typeof)===kp?Sp:"$$typeof"in n?sx[n.$$typeof]:ix;var o}var ox=Object.defineProperty,lx=Object.getOwnPropertyNames,Nf=Object.getOwnPropertySymbols,ux=Object.getOwnPropertyDescriptor,cx=Object.getPrototypeOf,Cf=Object.prototype;function jp(n,o,i){if(typeof o!="string"){if(Cf){var u=cx(o);u&&u!==Cf&&jp(n,u,i)}var c=lx(o);Nf&&(c=c.concat(Nf(o)));for(var f=jf(n),m=jf(o),p=0;p<c.length;++p){var h=c[p];if(!(h in ax||i&&i[h]||m&&h in m||f&&h in f)){var x=ux(o,h);try{ox(n,h,x)}catch{}}}}return n}function zr(n){return typeof n=="function"}function hu(n){return typeof n=="object"&&"styledComponentId"in n}function er(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function Ef(n,o){if(n.length===0)return"";for(var i=n[0],u=1;u<n.length;u++)i+=n[u];return i}function Fi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Vl(n,o,i){if(i===void 0&&(i=!1),!i&&!Fi(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)n[u]=Vl(n[u],o[u]);else if(Fi(o))for(var u in o)n[u]=Vl(n[u],o[u]);return n}function mu(n,o){Object.defineProperty(n,"toString",{value:o})}function Gi(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var dx=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var i=0,u=0;u<o;u++)i+=this.groupSizes[u];return i},n.prototype.insertRules=function(o,i){if(o>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,f=c;o>=f;)if((f<<=1)<0)throw Gi(16,"".concat(o));this.groupSizes=new Uint32Array(f),this.groupSizes.set(u),this.length=f;for(var m=c;m<f;m++)this.groupSizes[m]=0}for(var p=this.indexOfGroup(o+1),h=(m=0,i.length);m<h;m++)this.tag.insertRule(p,i[m])&&(this.groupSizes[o]++,p++)},n.prototype.clearGroup=function(o){if(o<this.length){var i=this.groupSizes[o],u=this.indexOfGroup(o),c=u+i;this.groupSizes[o]=0;for(var f=u;f<c;f++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(o){var i="";if(o>=this.length||this.groupSizes[o]===0)return i;for(var u=this.groupSizes[o],c=this.indexOfGroup(o),f=c+u,m=c;m<f;m++)i+="".concat(this.tag.getRule(m)).concat(pu);return i},n}(),ps=new Map,bs=new Map,hs=1,rs=function(n){if(ps.has(n))return ps.get(n);for(;bs.has(hs);)hs++;var o=hs++;return ps.set(n,o),bs.set(o,n),o},fx=function(n,o){hs=o+1,ps.set(n,o),bs.set(o,n)},px="style[".concat(Or,"][").concat(xp,'="').concat(Ms,'"]'),hx=new RegExp("^".concat(Or,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mx=function(n,o,i){for(var u,c=i.split(","),f=0,m=c.length;f<m;f++)(u=c[f])&&n.registerName(o,u)},gx=function(n,o){for(var i,u=((i=o.textContent)!==null&&i!==void 0?i:"").split(pu),c=[],f=0,m=u.length;f<m;f++){var p=u[f].trim();if(p){var h=p.match(hx);if(h){var x=0|parseInt(h[1],10),v=h[2];x!==0&&(fx(v,x),mx(n,v,h[3]),n.getTag().insertRules(x,c)),c.length=0}else c.push(p)}}},Tf=function(n){for(var o=document.querySelectorAll(px),i=0,u=o.length;i<u;i++){var c=o[i];c&&c.getAttribute(Or)!==gp&&(gx(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function xx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Np=function(n){var o=document.head,i=n||o,u=document.createElement("style"),c=function(p){var h=Array.from(p.querySelectorAll("style[".concat(Or,"]")));return h[h.length-1]}(i),f=c!==void 0?c.nextSibling:null;u.setAttribute(Or,gp),u.setAttribute(xp,Ms);var m=xx();return m&&u.setAttribute("nonce",m),i.insertBefore(u,f),u},yx=function(){function n(o){this.element=Np(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var u=document.styleSheets,c=0,f=u.length;c<f;c++){var m=u[c];if(m.ownerNode===i)return m}throw Gi(17)}(this.element),this.length=0}return n.prototype.insertRule=function(o,i){try{return this.sheet.insertRule(i,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var i=this.sheet.cssRules[o];return i&&i.cssText?i.cssText:""},n}(),vx=function(){function n(o){this.element=Np(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,i){if(o<=this.length&&o>=0){var u=document.createTextNode(i);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),bx=function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,i){return o<=this.length&&(this.rules.splice(o,0,i),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),If=vs,wx={isServer:!vs,useCSSOMInjection:!J0},Cp=function(){function n(o,i,u){o===void 0&&(o=$r),i===void 0&&(i={});var c=this;this.options=ht(ht({},wx),o),this.gs=i,this.names=new Map(u),this.server=!!o.isServer,!this.server&&vs&&If&&(If=!1,Tf(this)),mu(this,function(){return function(f){for(var m=f.getTag(),p=m.length,h="",x=function(E){var S=function(T){return bs.get(T)}(E);if(S===void 0)return"continue";var w=f.names.get(S),k=m.getGroup(E);if(w===void 0||!w.size||k.length===0)return"continue";var L="".concat(Or,".g").concat(E,'[id="').concat(S,'"]'),R="";w!==void 0&&w.forEach(function(T){T.length>0&&(R+="".concat(T,","))}),h+="".concat(k).concat(L,'{content:"').concat(R,'"}').concat(pu)},v=0;v<p;v++)x(v);return h}(c)})}return n.registerId=function(o){return rs(o)},n.prototype.rehydrate=function(){!this.server&&vs&&Tf(this)},n.prototype.reconstructWithOptions=function(o,i){return i===void 0&&(i=!0),new n(ht(ht({},this.options),o),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=function(i){var u=i.useCSSOMInjection,c=i.target;return i.isServer?new bx(c):u?new yx(c):new vx(c)}(this.options),new dx(o)));var o},n.prototype.hasNameForId=function(o,i){return this.names.has(o)&&this.names.get(o).has(i)},n.prototype.registerName=function(o,i){if(rs(o),this.names.has(o))this.names.get(o).add(i);else{var u=new Set;u.add(i),this.names.set(o,u)}},n.prototype.insertRules=function(o,i,u){this.registerName(o,i),this.getTag().insertRules(rs(o),u)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(rs(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n}(),kx=/&/g,Sx=/^\s*\/\/.*$/gm;function Ep(n,o){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(o," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(o," ")),i.props=i.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Ep(i.children,o)),i})}function jx(n){var o,i,u,c=$r,f=c.options,m=f===void 0?$r:f,p=c.plugins,h=p===void 0?Rs:p,x=function(S,w,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(o):S},v=h.slice();v.push(function(S){S.type===Is&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(kx,i).replace(u,x))}),m.prefix&&v.push(Q0),v.push(G0);var E=function(S,w,k,L){w===void 0&&(w=""),k===void 0&&(k=""),L===void 0&&(L="&"),o=L,i=w,u=new RegExp("\\".concat(i,"\\b"),"g");var R=S.replace(Sx,""),T=H0(k||w?"".concat(k," ").concat(w," { ").concat(R," }"):R);m.namespace&&(T=Ep(T,m.namespace));var _=[];return ys(T,V0(v.concat(K0(function(W){return _.push(W)})))),_};return E.hash=h.length?h.reduce(function(S,w){return w.name||Gi(15),Dr(S,w.name)},vp).toString():"",E}var Nx=new Cp,Kl=jx(),Tp=le.createContext({shouldForwardProp:void 0,styleSheet:Nx,stylis:Kl});Tp.Consumer;le.createContext(void 0);function Pf(){return N.useContext(Tp)}var Cx=function(){function n(o,i){var u=this;this.inject=function(c,f){f===void 0&&(f=Kl);var m=u.name+f.hash;c.hasNameForId(u.id,m)||c.insertRules(u.id,m,f(u.rules,m,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=i,mu(this,function(){throw Gi(12,String(u.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=Kl),this.name+o.hash},n}(),Ex=function(n){return n>="A"&&n<="Z"};function Af(n){for(var o="",i=0;i<n.length;i++){var u=n[i];if(i===1&&u==="-"&&n[0]==="-")return n;Ex(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var Ip=function(n){return n==null||n===!1||n===""},Pp=function(n){var o,i,u=[];for(var c in n){var f=n[c];n.hasOwnProperty(c)&&!Ip(f)&&(Array.isArray(f)&&f.isCss||zr(f)?u.push("".concat(Af(c),":"),f,";"):Fi(f)?u.push.apply(u,xs(xs(["".concat(c," {")],Pp(f),!1),["}"],!1)):u.push("".concat(Af(c),": ").concat((o=c,(i=f)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||o in Y0||o.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return u};function rr(n,o,i,u){if(Ip(n))return[];if(hu(n))return[".".concat(n.styledComponentId)];if(zr(n)){if(!zr(f=n)||f.prototype&&f.prototype.isReactComponent||!o)return[n];var c=n(o);return rr(c,o,i,u)}var f;return n instanceof Cx?i?(n.inject(i,u),[n.getName(u)]):[n]:Fi(n)?Pp(n):Array.isArray(n)?Array.prototype.concat.apply(Rs,n.map(function(m){return rr(m,o,i,u)})):[n.toString()]}function Tx(n){for(var o=0;o<n.length;o+=1){var i=n[o];if(zr(i)&&!hu(i))return!1}return!0}var Ix=bp(Ms),Px=function(){function n(o,i,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Tx(o),this.componentId=i,this.baseHash=Dr(Ix,i),this.baseStyle=u,Cp.registerId(i)}return n.prototype.generateAndInjectStyles=function(o,i,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))c=er(c,this.staticRulesId);else{var f=Ef(rr(this.rules,o,i,u)),m=Gl(Dr(this.baseHash,f)>>>0);if(!i.hasNameForId(this.componentId,m)){var p=u(f,".".concat(m),void 0,this.componentId);i.insertRules(this.componentId,m,p)}c=er(c,m),this.staticRulesId=m}else{for(var h=Dr(this.baseHash,u.hash),x="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")x+=E;else if(E){var S=Ef(rr(E,o,i,u));h=Dr(h,S+v),x+=S}}if(x){var w=Gl(h>>>0);i.hasNameForId(this.componentId,w)||i.insertRules(this.componentId,w,u(x,".".concat(w),void 0,this.componentId)),c=er(c,w)}}return c},n}(),Ap=le.createContext(void 0);Ap.Consumer;var Bl={};function Ax(n,o,i){var u=hu(n),c=n,f=!Dl(n),m=o.attrs,p=m===void 0?Rs:m,h=o.componentId,x=h===void 0?function(M,O){var V=typeof M!="string"?"sc":kf(M);Bl[V]=(Bl[V]||0)+1;var U="".concat(V,"-").concat(tx(Ms+V+Bl[V]));return O?"".concat(O,"-").concat(U):U}(o.displayName,o.parentComponentId):h,v=o.displayName,E=v===void 0?function(M){return Dl(M)?"styled.".concat(M):"Styled(".concat(nx(M),")")}(n):v,S=o.displayName&&o.componentId?"".concat(kf(o.displayName),"-").concat(o.componentId):o.componentId||x,w=u&&c.attrs?c.attrs.concat(p).filter(Boolean):p,k=o.shouldForwardProp;if(u&&c.shouldForwardProp){var L=c.shouldForwardProp;if(o.shouldForwardProp){var R=o.shouldForwardProp;k=function(M,O){return L(M,O)&&R(M,O)}}else k=L}var T=new Px(i,S,u?c.componentStyle:void 0);function _(M,O){return function(V,U,de){var oe=V.attrs,we=V.componentStyle,Ne=V.defaultProps,Ce=V.foldedComponentIds,He=V.styledComponentId,ke=V.target,ze=le.useContext(Ap),_e=Pf(),je=V.shouldForwardProp||_e.shouldForwardProp,K=X0(U,ze,Ne)||$r,ne=function(fe,pe,xe){for(var re,ge=ht(ht({},pe),{className:void 0,theme:xe}),We=0;We<fe.length;We+=1){var Tt=zr(re=fe[We])?re(ge):re;for(var st in Tt)ge[st]=st==="className"?er(ge[st],Tt[st]):st==="style"?ht(ht({},ge[st]),Tt[st]):Tt[st]}return pe.className&&(ge.className=er(ge.className,pe.className)),ge}(oe,U,K),Y=ne.as||ke,C={};for(var B in ne)ne[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&ne.theme===K||(B==="forwardedAs"?C.as=ne.forwardedAs:je&&!je(B,Y)||(C[B]=ne[B]));var J=function(fe,pe){var xe=Pf(),re=fe.generateAndInjectStyles(pe,xe.styleSheet,xe.stylis);return re}(we,ne),Z=er(Ce,He);return J&&(Z+=" "+J),ne.className&&(Z+=" "+ne.className),C[Dl(Y)&&!yp.has(Y)?"class":"className"]=Z,de&&(C.ref=de),N.createElement(Y,C)}(W,M,O)}_.displayName=E;var W=le.forwardRef(_);return W.attrs=w,W.componentStyle=T,W.displayName=E,W.shouldForwardProp=k,W.foldedComponentIds=u?er(c.foldedComponentIds,c.styledComponentId):"",W.styledComponentId=S,W.target=u?c.target:n,Object.defineProperty(W,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=u?function(O){for(var V=[],U=1;U<arguments.length;U++)V[U-1]=arguments[U];for(var de=0,oe=V;de<oe.length;de++)Vl(O,oe[de],!0);return O}({},c.defaultProps,M):M}}),mu(W,function(){return".".concat(W.styledComponentId)}),f&&jp(W,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),W}function Lf(n,o){for(var i=[n[0]],u=0,c=o.length;u<c;u+=1)i.push(o[u],n[u+1]);return i}var Mf=function(n){return Object.assign(n,{isCss:!0})};function Lx(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];if(zr(n)||Fi(n))return Mf(rr(Lf(Rs,xs([n],o,!0))));var u=n;return o.length===0&&u.length===1&&typeof u[0]=="string"?rr(u):Mf(rr(Lf(u,o)))}function Ql(n,o,i){if(i===void 0&&(i=$r),!o)throw Gi(1,o);var u=function(c){for(var f=[],m=1;m<arguments.length;m++)f[m-1]=arguments[m];return n(o,i,Lx.apply(void 0,xs([c],f,!1)))};return u.attrs=function(c){return Ql(n,o,ht(ht({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return Ql(n,o,ht(ht({},i),c))},u}var Lp=function(n){return Ql(Ax,n)},Mn=Lp;yp.forEach(function(n){Mn[n]=Lp(n)});const Rf=()=>{const{isDark:n}=N.useContext(Ts);return s.jsx(Mx,{isDark:n,children:s.jsx("input",{type:"checkbox",className:"switch shadow-lg shadow-slate-400 dark:shadow-slate-600",checked:n,readOnly:!0})})},Mx=Mn.div`
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
`,Df=["Build your resume easily","No need to worry about what to add what to not","Get high rated, ATS freindly resumes","Different variants of resume templates available","We carefully selected strong resume data inputs from users after a high research.","Download your resume in pdf or web formate","Use AI to create a perfect summary for your resume","Completely free to use","We didn't store your entered data and generated resumes (for user privacy)","Light weight application. just take 1.8MB of RAM and approximately 0 CPU time"],Rx=()=>{const n=su(),o=()=>{n("/GetInfo")},i=()=>{n("/ViewTemplates")},u=()=>{n("/AboutUs")},{isDark:c,setIsDark:f}=N.useContext(Ts),m=()=>{f(p=>!p)};return N.useEffect(()=>{const p=new Fl("#mobile-typing-text",{strings:Df,loop:!0,typeSpeed:35,backSpeed:25,backDelay:500,cursorChar:" "}),h=new Fl("#desktop-typing-text",{strings:Df,loop:!0,typeSpeed:35,backSpeed:25,backDelay:500,cursorChar:" "});return()=>{p.destroy(),h.destroy()}},[]),s.jsxs("div",{className:"flex flex-col h-screen bg-gray-300 text-center px-4 dark:bg-slate-950",children:[s.jsxs("div",{className:"hidden md:flex justify-between items-center w-full px-6 py-3 bg-white shadow-md rounded-3xl mt-3 dark:bg-slate-800",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx("button",{className:"mr-4 mt-1",title:"The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it as you prefer",onClick:m,children:s.jsx(Rf,{})}),s.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",onClick:i,title:"View Generated resume samples",children:"Generated Resumes"})]}),s.jsx("h1",{className:"text-xl mr-5 font-bold text-gray-800 dark:text-white no-underline",children:s.jsxs("a",{href:"https://github.com/NishantkSingh0/Resume-Builder",title:"Address to GitHub repository of this project",target:"_blank",children:[s.jsx("span",{className:"lg:hidden",children:"Resume Builder"}),s.jsx("span",{className:"hidden lg:block",children:"Level Up Your First Impression"})]})}),s.jsxs("div",{className:"flex space-x-4",children:[s.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",title:"our contributions and contact information",onClick:u,children:"About Us"}),s.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",title:"Continue fiiling details and craft future jobs",onClick:o,children:"Continue ➤"})]})]}),s.jsxs("div",{className:"hidden md:flex flex-col items-center justify-center flex-1 mt-3 mb-3",children:[s.jsx(P0,{}),s.jsx("span",{id:"desktop-typing-text",className:"hidden md:inline-block text-xl md:text-2xl text-gray-800 h-6 dark:text-white"})]}),s.jsxs("div",{className:"flex md:hidden justify-between items-center w-full h-14 px-6 py-3 bg-white shadow-md mt-6 rounded-3xl dark:bg-slate-800",children:[s.jsx("button",{className:"text-2xl mr-8 mt-1",title:"The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it to your preferred mode.",onClick:m,children:s.jsx(Rf,{})}),s.jsx("div",{className:"md:hidden flex space-x-4",children:s.jsx("button",{className:" px-4 py-[3px] bg-blue-500 text-white rounded-full hover:bg-blue-700",onClick:o,children:"Continue"})})]}),s.jsxs("div",{className:"md:hidden flex justify-center flex-col items-center flex-grow",children:[s.jsxs("p",{className:"text-sm sm:text-lg text-gray-500 font-semibold mb-4",children:["   ",s.jsx("span",{id:"mobile-typing-text",className:"md:hidden text-xl sm:text-2xl text-gray-800 h-6 mb-4 dark:text-white"})]}),s.jsx("a",{onClick:i,className:"cursor-pointer text-gray-600 dark:text-gray-300/80 font-bold",children:"Generated Templates"})]}),s.jsxs("div",{className:"md:hidden absolute bottom-4 font-bold text-gray-800 left-1/2 -translate-x-1/2 text-center dark:text-white/80",children:[s.jsx("br",{}),s.jsx("a",{onClick:u,className:"cursor-pointer dark:text-gray-300",children:"About Us"})]})]})};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mp=(...n)=>n.filter((o,i,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===i).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=N.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:m,...p},h)=>N.createElement("svg",{ref:h,...Bx,width:o,height:o,stroke:n,strokeWidth:u?Number(i)*24/Number(o):i,className:Mp("lucide",c),...p},[...m.map(([x,v])=>N.createElement(x,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=(n,o)=>{const i=N.forwardRef(({className:u,...c},f)=>N.createElement(_x,{ref:f,iconNode:o,className:Mp(`lucide-${Dx(n)}`,u),...c}));return i.displayName=`${n}`,i};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$x=Hr("Check",Ox);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Fx=Hr("ChevronRight",zx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Hx=Hr("Eye",Ux);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Gx=Hr("Menu",Wx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],is=Hr("Plus",Vx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bf=Hr("X",Kx);let Qx={data:""},Yx=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||Qx,Jx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Xx=/\/\*[^]*?\*\/|  +/g,_f=/\n+/g,Pn=(n,o)=>{let i="",u="",c="";for(let f in n){let m=n[f];f[0]=="@"?f[1]=="i"?i=f+" "+m+";":u+=f[1]=="f"?Pn(m,f):f+"{"+Pn(m,f[1]=="k"?"":o)+"}":typeof m=="object"?u+=Pn(m,o?o.replace(/([^,])+/g,p=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,h=>/&/.test(h)?h.replace(/&/g,p):p?p+" "+h:h)):f):m!=null&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=Pn.p?Pn.p(f,m):f+":"+m+";")}return i+(o&&c?o+"{"+c+"}":c)+u},nn={},Rp=n=>{if(typeof n=="object"){let o="";for(let i in n)o+=i+Rp(n[i]);return o}return n},Zx=(n,o,i,u,c)=>{let f=Rp(n),m=nn[f]||(nn[f]=(h=>{let x=0,v=11;for(;x<h.length;)v=101*v+h.charCodeAt(x++)>>>0;return"go"+v})(f));if(!nn[m]){let h=f!==n?n:(x=>{let v,E,S=[{}];for(;v=Jx.exec(x.replace(Xx,""));)v[4]?S.shift():v[3]?(E=v[3].replace(_f," ").trim(),S.unshift(S[0][E]=S[0][E]||{})):S[0][v[1]]=v[2].replace(_f," ").trim();return S[0]})(n);nn[m]=Pn(c?{["@keyframes "+m]:h}:h,i?"":"."+m)}let p=i&&nn.g?nn.g:null;return i&&(nn.g=nn[m]),((h,x,v,E)=>{E?x.data=x.data.replace(E,h):x.data.indexOf(h)===-1&&(x.data=v?h+x.data:x.data+h)})(nn[m],o,u,p),m},qx=(n,o,i)=>n.reduce((u,c,f)=>{let m=o[f];if(m&&m.call){let p=m(i),h=p&&p.props&&p.props.className||/^go/.test(p)&&p;m=h?"."+h:p&&typeof p=="object"?p.props?"":Pn(p,""):p===!1?"":p}return u+c+(m??"")},"");function Ds(n){let o=this||{},i=n.call?n(o.p):n;return Zx(i.unshift?i.raw?qx(i,[].slice.call(arguments,1),o.p):i.reduce((u,c)=>Object.assign(u,c&&c.call?c(o.p):c),{}):i,Yx(o.target),o.g,o.o,o.k)}let Dp,Yl,Jl;Ds.bind({g:1});let sn=Ds.bind({k:1});function ey(n,o,i,u){Pn.p=o,Dp=n,Yl=i,Jl=u}function Rn(n,o){let i=this||{};return function(){let u=arguments;function c(f,m){let p=Object.assign({},f),h=p.className||c.className;i.p=Object.assign({theme:Yl&&Yl()},p),i.o=/ *go\d+/.test(h),p.className=Ds.apply(i,u)+(h?" "+h:"");let x=n;return n[0]&&(x=p.as||n,delete p.as),Jl&&x[0]&&Jl(p),Dp(x,p)}return c}}var ty=n=>typeof n=="function",ws=(n,o)=>ty(n)?n(o):n,ny=(()=>{let n=0;return()=>(++n).toString()})(),Bp=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");n=!o||o.matches}return n}})(),ry=20,_p=(n,o)=>{switch(o.type){case 0:return{...n,toasts:[o.toast,...n.toasts].slice(0,ry)};case 1:return{...n,toasts:n.toasts.map(f=>f.id===o.toast.id?{...f,...o.toast}:f)};case 2:let{toast:i}=o;return _p(n,{type:n.toasts.find(f=>f.id===i.id)?1:0,toast:i});case 3:let{toastId:u}=o;return{...n,toasts:n.toasts.map(f=>f.id===u||u===void 0?{...f,dismissed:!0,visible:!1}:f)};case 4:return o.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(f=>f.id!==o.toastId)};case 5:return{...n,pausedAt:o.time};case 6:let c=o.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(f=>({...f,pauseDuration:f.pauseDuration+c}))}}},ms=[],tr={toasts:[],pausedAt:void 0},ar=n=>{tr=_p(tr,n),ms.forEach(o=>{o(tr)})},iy={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ay=(n={})=>{let[o,i]=N.useState(tr),u=N.useRef(tr);N.useEffect(()=>(u.current!==tr&&i(tr),ms.push(i),()=>{let f=ms.indexOf(i);f>-1&&ms.splice(f,1)}),[]);let c=o.toasts.map(f=>{var m,p,h;return{...n,...n[f.type],...f,removeDelay:f.removeDelay||((m=n[f.type])==null?void 0:m.removeDelay)||(n==null?void 0:n.removeDelay),duration:f.duration||((p=n[f.type])==null?void 0:p.duration)||(n==null?void 0:n.duration)||iy[f.type],style:{...n.style,...(h=n[f.type])==null?void 0:h.style,...f.style}}});return{...o,toasts:c}},sy=(n,o="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:o,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...i,id:(i==null?void 0:i.id)||ny()}),Vi=n=>(o,i)=>{let u=sy(o,n,i);return ar({type:2,toast:u}),u.id},at=(n,o)=>Vi("blank")(n,o);at.error=Vi("error");at.success=Vi("success");at.loading=Vi("loading");at.custom=Vi("custom");at.dismiss=n=>{ar({type:3,toastId:n})};at.remove=n=>ar({type:4,toastId:n});at.promise=(n,o,i)=>{let u=at.loading(o.loading,{...i,...i==null?void 0:i.loading});return typeof n=="function"&&(n=n()),n.then(c=>{let f=o.success?ws(o.success,c):void 0;return f?at.success(f,{id:u,...i,...i==null?void 0:i.success}):at.dismiss(u),c}).catch(c=>{let f=o.error?ws(o.error,c):void 0;f?at.error(f,{id:u,...i,...i==null?void 0:i.error}):at.dismiss(u)}),n};var oy=(n,o)=>{ar({type:1,toast:{id:n,height:o}})},ly=()=>{ar({type:5,time:Date.now()})},$i=new Map,uy=1e3,cy=(n,o=uy)=>{if($i.has(n))return;let i=setTimeout(()=>{$i.delete(n),ar({type:4,toastId:n})},o);$i.set(n,i)},dy=n=>{let{toasts:o,pausedAt:i}=ay(n);N.useEffect(()=>{if(i)return;let f=Date.now(),m=o.map(p=>{if(p.duration===1/0)return;let h=(p.duration||0)+p.pauseDuration-(f-p.createdAt);if(h<0){p.visible&&at.dismiss(p.id);return}return setTimeout(()=>at.dismiss(p.id),h)});return()=>{m.forEach(p=>p&&clearTimeout(p))}},[o,i]);let u=N.useCallback(()=>{i&&ar({type:6,time:Date.now()})},[i]),c=N.useCallback((f,m)=>{let{reverseOrder:p=!1,gutter:h=8,defaultPosition:x}=m||{},v=o.filter(w=>(w.position||x)===(f.position||x)&&w.height),E=v.findIndex(w=>w.id===f.id),S=v.filter((w,k)=>k<E&&w.visible).length;return v.filter(w=>w.visible).slice(...p?[S+1]:[0,S]).reduce((w,k)=>w+(k.height||0)+h,0)},[o]);return N.useEffect(()=>{o.forEach(f=>{if(f.dismissed)cy(f.id,f.removeDelay);else{let m=$i.get(f.id);m&&(clearTimeout(m),$i.delete(f.id))}})},[o]),{toasts:o,handlers:{updateHeight:oy,startPause:ly,endPause:u,calculateOffset:c}}},fy=sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,py=sn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,hy=sn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,my=Rn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${py} 0.15s ease-out forwards;
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
    animation: ${hy} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,gy=sn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,xy=Rn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${gy} 1s linear infinite;
`,yy=sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,vy=sn`
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
}`,by=Rn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${yy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${vy} 0.2s ease-out forwards;
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
`,wy=Rn("div")`
  position: absolute;
`,ky=Rn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Sy=sn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,jy=Rn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Sy} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ny=({toast:n})=>{let{icon:o,type:i,iconTheme:u}=n;return o!==void 0?typeof o=="string"?N.createElement(jy,null,o):o:i==="blank"?null:N.createElement(ky,null,N.createElement(xy,{...u}),i!=="loading"&&N.createElement(wy,null,i==="error"?N.createElement(my,{...u}):N.createElement(by,{...u})))},Cy=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ey=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,Ty="0%{opacity:0;} 100%{opacity:1;}",Iy="0%{opacity:1;} 100%{opacity:0;}",Py=Rn("div")`
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
`,Ay=Rn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ly=(n,o)=>{let i=n.includes("top")?1:-1,[u,c]=Bp()?[Ty,Iy]:[Cy(i),Ey(i)];return{animation:o?`${sn(u)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${sn(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},My=N.memo(({toast:n,position:o,style:i,children:u})=>{let c=n.height?Ly(n.position||o||"top-center",n.visible):{opacity:0},f=N.createElement(Ny,{toast:n}),m=N.createElement(Ay,{...n.ariaProps},ws(n.message,n));return N.createElement(Py,{className:n.className,style:{...c,...i,...n.style}},typeof u=="function"?u({icon:f,message:m}):N.createElement(N.Fragment,null,f,m))});ey(N.createElement);var Ry=({id:n,className:o,style:i,onHeightUpdate:u,children:c})=>{let f=N.useCallback(m=>{if(m){let p=()=>{let h=m.getBoundingClientRect().height;u(n,h)};p(),new MutationObserver(p).observe(m,{subtree:!0,childList:!0,characterData:!0})}},[n,u]);return N.createElement("div",{ref:f,className:o,style:i},c)},Dy=(n,o)=>{let i=n.includes("top"),u=i?{top:0}:{bottom:0},c=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Bp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(i?1:-1)}px)`,...u,...c}},By=Ds`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,as=16,_y=({reverseOrder:n,position:o="top-center",toastOptions:i,gutter:u,children:c,containerStyle:f,containerClassName:m})=>{let{toasts:p,handlers:h}=dy(i);return N.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:as,left:as,right:as,bottom:as,pointerEvents:"none",...f},className:m,onMouseEnter:h.startPause,onMouseLeave:h.endPause},p.map(x=>{let v=x.position||o,E=h.calculateOffset(x,{reverseOrder:n,gutter:u,defaultPosition:o}),S=Dy(v,E);return N.createElement(Ry,{id:x.id,key:x.id,onHeightUpdate:h.updateHeight,className:x.visible?By:"",style:S},x.type==="custom"?ws(x.message,x):c?c(x):N.createElement(My,{toast:x,position:v}))}))},Ht=at;function on(n){return Array.isArray?Array.isArray(n):zp(n)==="[object Array]"}function Oy(n){if(typeof n=="string")return n;let o=n+"";return o=="0"&&1/n==-1/0?"-0":o}function $y(n){return n==null?"":Oy(n)}function Gt(n){return typeof n=="string"}function Op(n){return typeof n=="number"}function zy(n){return n===!0||n===!1||Fy(n)&&zp(n)=="[object Boolean]"}function $p(n){return typeof n=="object"}function Fy(n){return $p(n)&&n!==null}function bt(n){return n!=null}function _l(n){return!n.trim().length}function zp(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Uy="Incorrect 'index' type",Hy=n=>`Invalid value for key ${n}`,Wy=n=>`Pattern length exceeds max of ${n}.`,Gy=n=>`Missing ${n} property in key`,Vy=n=>`Property 'weight' in key '${n}' must be a positive integer`,Of=Object.prototype.hasOwnProperty;class Ky{constructor(o){this._keys=[],this._keyMap={};let i=0;o.forEach(u=>{let c=Fp(u);this._keys.push(c),this._keyMap[c.id]=c,i+=c.weight}),this._keys.forEach(u=>{u.weight/=i})}get(o){return this._keyMap[o]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Fp(n){let o=null,i=null,u=null,c=1,f=null;if(Gt(n)||on(n))u=n,o=$f(n),i=Xl(n);else{if(!Of.call(n,"name"))throw new Error(Gy("name"));const m=n.name;if(u=m,Of.call(n,"weight")&&(c=n.weight,c<=0))throw new Error(Vy(m));o=$f(m),i=Xl(m),f=n.getFn}return{path:o,id:i,weight:c,src:u,getFn:f}}function $f(n){return on(n)?n:n.split(".")}function Xl(n){return on(n)?n.join("."):n}function Qy(n,o){let i=[],u=!1;const c=(f,m,p)=>{if(bt(f))if(!m[p])i.push(f);else{let h=m[p];const x=f[h];if(!bt(x))return;if(p===m.length-1&&(Gt(x)||Op(x)||zy(x)))i.push($y(x));else if(on(x)){u=!0;for(let v=0,E=x.length;v<E;v+=1)c(x[v],m,p+1)}else m.length&&c(x,m,p+1)}};return c(n,Gt(o)?o.split("."):o,0),u?i:i[0]}const Yy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Jy={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,o)=>n.score===o.score?n.idx<o.idx?-1:1:n.score<o.score?-1:1},Xy={location:0,threshold:.6,distance:100},Zy={useExtendedSearch:!1,getFn:Qy,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ue={...Jy,...Yy,...Xy,...Zy};const qy=/[^ ]+/g;function e1(n=1,o=3){const i=new Map,u=Math.pow(10,o);return{get(c){const f=c.match(qy).length;if(i.has(f))return i.get(f);const m=1/Math.pow(f,.5*n),p=parseFloat(Math.round(m*u)/u);return i.set(f,p),p},clear(){i.clear()}}}class gu{constructor({getFn:o=ue.getFn,fieldNormWeight:i=ue.fieldNormWeight}={}){this.norm=e1(i,3),this.getFn=o,this.isCreated=!1,this.setIndexRecords()}setSources(o=[]){this.docs=o}setIndexRecords(o=[]){this.records=o}setKeys(o=[]){this.keys=o,this._keysMap={},o.forEach((i,u)=>{this._keysMap[i.id]=u})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Gt(this.docs[0])?this.docs.forEach((o,i)=>{this._addString(o,i)}):this.docs.forEach((o,i)=>{this._addObject(o,i)}),this.norm.clear())}add(o){const i=this.size();Gt(o)?this._addString(o,i):this._addObject(o,i)}removeAt(o){this.records.splice(o,1);for(let i=o,u=this.size();i<u;i+=1)this.records[i].i-=1}getValueForItemAtKeyId(o,i){return o[this._keysMap[i]]}size(){return this.records.length}_addString(o,i){if(!bt(o)||_l(o))return;let u={v:o,i,n:this.norm.get(o)};this.records.push(u)}_addObject(o,i){let u={i,$:{}};this.keys.forEach((c,f)=>{let m=c.getFn?c.getFn(o):this.getFn(o,c.path);if(bt(m)){if(on(m)){let p=[];const h=[{nestedArrIndex:-1,value:m}];for(;h.length;){const{nestedArrIndex:x,value:v}=h.pop();if(bt(v))if(Gt(v)&&!_l(v)){let E={v,i:x,n:this.norm.get(v)};p.push(E)}else on(v)&&v.forEach((E,S)=>{h.push({nestedArrIndex:S,value:E})})}u.$[f]=p}else if(Gt(m)&&!_l(m)){let p={v:m,n:this.norm.get(m)};u.$[f]=p}}}),this.records.push(u)}toJSON(){return{keys:this.keys,records:this.records}}}function Up(n,o,{getFn:i=ue.getFn,fieldNormWeight:u=ue.fieldNormWeight}={}){const c=new gu({getFn:i,fieldNormWeight:u});return c.setKeys(n.map(Fp)),c.setSources(o),c.create(),c}function t1(n,{getFn:o=ue.getFn,fieldNormWeight:i=ue.fieldNormWeight}={}){const{keys:u,records:c}=n,f=new gu({getFn:o,fieldNormWeight:i});return f.setKeys(u),f.setIndexRecords(c),f}function ss(n,{errors:o=0,currentLocation:i=0,expectedLocation:u=0,distance:c=ue.distance,ignoreLocation:f=ue.ignoreLocation}={}){const m=o/n.length;if(f)return m;const p=Math.abs(u-i);return c?m+p/c:p?1:m}function n1(n=[],o=ue.minMatchCharLength){let i=[],u=-1,c=-1,f=0;for(let m=n.length;f<m;f+=1){let p=n[f];p&&u===-1?u=f:!p&&u!==-1&&(c=f-1,c-u+1>=o&&i.push([u,c]),u=-1)}return n[f-1]&&f-u>=o&&i.push([u,f-1]),i}const qn=32;function r1(n,o,i,{location:u=ue.location,distance:c=ue.distance,threshold:f=ue.threshold,findAllMatches:m=ue.findAllMatches,minMatchCharLength:p=ue.minMatchCharLength,includeMatches:h=ue.includeMatches,ignoreLocation:x=ue.ignoreLocation}={}){if(o.length>qn)throw new Error(Wy(qn));const v=o.length,E=n.length,S=Math.max(0,Math.min(u,E));let w=f,k=S;const L=p>1||h,R=L?Array(E):[];let T;for(;(T=n.indexOf(o,k))>-1;){let U=ss(o,{currentLocation:T,expectedLocation:S,distance:c,ignoreLocation:x});if(w=Math.min(U,w),k=T+v,L){let de=0;for(;de<v;)R[T+de]=1,de+=1}}k=-1;let _=[],W=1,M=v+E;const O=1<<v-1;for(let U=0;U<v;U+=1){let de=0,oe=M;for(;de<oe;)ss(o,{errors:U,currentLocation:S+oe,expectedLocation:S,distance:c,ignoreLocation:x})<=w?de=oe:M=oe,oe=Math.floor((M-de)/2+de);M=oe;let we=Math.max(1,S-oe+1),Ne=m?E:Math.min(S+oe,E)+v,Ce=Array(Ne+2);Ce[Ne+1]=(1<<U)-1;for(let ke=Ne;ke>=we;ke-=1){let ze=ke-1,_e=i[n.charAt(ze)];if(L&&(R[ze]=+!!_e),Ce[ke]=(Ce[ke+1]<<1|1)&_e,U&&(Ce[ke]|=(_[ke+1]|_[ke])<<1|1|_[ke+1]),Ce[ke]&O&&(W=ss(o,{errors:U,currentLocation:ze,expectedLocation:S,distance:c,ignoreLocation:x}),W<=w)){if(w=W,k=ze,k<=S)break;we=Math.max(1,2*S-k)}}if(ss(o,{errors:U+1,currentLocation:S,expectedLocation:S,distance:c,ignoreLocation:x})>w)break;_=Ce}const V={isMatch:k>=0,score:Math.max(.001,W)};if(L){const U=n1(R,p);U.length?h&&(V.indices=U):V.isMatch=!1}return V}function i1(n){let o={};for(let i=0,u=n.length;i<u;i+=1){const c=n.charAt(i);o[c]=(o[c]||0)|1<<u-i-1}return o}const ks=String.prototype.normalize?n=>n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):n=>n;class Hp{constructor(o,{location:i=ue.location,threshold:u=ue.threshold,distance:c=ue.distance,includeMatches:f=ue.includeMatches,findAllMatches:m=ue.findAllMatches,minMatchCharLength:p=ue.minMatchCharLength,isCaseSensitive:h=ue.isCaseSensitive,ignoreDiacritics:x=ue.ignoreDiacritics,ignoreLocation:v=ue.ignoreLocation}={}){if(this.options={location:i,threshold:u,distance:c,includeMatches:f,findAllMatches:m,minMatchCharLength:p,isCaseSensitive:h,ignoreDiacritics:x,ignoreLocation:v},o=h?o:o.toLowerCase(),o=x?ks(o):o,this.pattern=o,this.chunks=[],!this.pattern.length)return;const E=(w,k)=>{this.chunks.push({pattern:w,alphabet:i1(w),startIndex:k})},S=this.pattern.length;if(S>qn){let w=0;const k=S%qn,L=S-k;for(;w<L;)E(this.pattern.substr(w,qn),w),w+=qn;if(k){const R=S-qn;E(this.pattern.substr(R),R)}}else E(this.pattern,0)}searchIn(o){const{isCaseSensitive:i,ignoreDiacritics:u,includeMatches:c}=this.options;if(o=i?o:o.toLowerCase(),o=u?ks(o):o,this.pattern===o){let L={isMatch:!0,score:0};return c&&(L.indices=[[0,o.length-1]]),L}const{location:f,distance:m,threshold:p,findAllMatches:h,minMatchCharLength:x,ignoreLocation:v}=this.options;let E=[],S=0,w=!1;this.chunks.forEach(({pattern:L,alphabet:R,startIndex:T})=>{const{isMatch:_,score:W,indices:M}=r1(o,L,R,{location:f+T,distance:m,threshold:p,findAllMatches:h,minMatchCharLength:x,includeMatches:c,ignoreLocation:v});_&&(w=!0),S+=W,_&&M&&(E=[...E,...M])});let k={isMatch:w,score:w?S/this.chunks.length:1};return w&&c&&(k.indices=E),k}}class Dn{constructor(o){this.pattern=o}static isMultiMatch(o){return zf(o,this.multiRegex)}static isSingleMatch(o){return zf(o,this.singleRegex)}search(){}}function zf(n,o){const i=n.match(o);return i?i[1]:null}class a1 extends Dn{constructor(o){super(o)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(o){const i=o===this.pattern;return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class s1 extends Dn{constructor(o){super(o)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(o){const u=o.indexOf(this.pattern)===-1;return{isMatch:u,score:u?0:1,indices:[0,o.length-1]}}}class o1 extends Dn{constructor(o){super(o)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(o){const i=o.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class l1 extends Dn{constructor(o){super(o)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(o){const i=!o.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,o.length-1]}}}class u1 extends Dn{constructor(o){super(o)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(o){const i=o.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[o.length-this.pattern.length,o.length-1]}}}class c1 extends Dn{constructor(o){super(o)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(o){const i=!o.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,o.length-1]}}}class Wp extends Dn{constructor(o,{location:i=ue.location,threshold:u=ue.threshold,distance:c=ue.distance,includeMatches:f=ue.includeMatches,findAllMatches:m=ue.findAllMatches,minMatchCharLength:p=ue.minMatchCharLength,isCaseSensitive:h=ue.isCaseSensitive,ignoreDiacritics:x=ue.ignoreDiacritics,ignoreLocation:v=ue.ignoreLocation}={}){super(o),this._bitapSearch=new Hp(o,{location:i,threshold:u,distance:c,includeMatches:f,findAllMatches:m,minMatchCharLength:p,isCaseSensitive:h,ignoreDiacritics:x,ignoreLocation:v})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(o){return this._bitapSearch.searchIn(o)}}class Gp extends Dn{constructor(o){super(o)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(o){let i=0,u;const c=[],f=this.pattern.length;for(;(u=o.indexOf(this.pattern,i))>-1;)i=u+f,c.push([u,i-1]);const m=!!c.length;return{isMatch:m,score:m?0:1,indices:c}}}const Zl=[a1,Gp,o1,l1,c1,u1,s1,Wp],Ff=Zl.length,d1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,f1="|";function p1(n,o={}){return n.split(f1).map(i=>{let u=i.trim().split(d1).filter(f=>f&&!!f.trim()),c=[];for(let f=0,m=u.length;f<m;f+=1){const p=u[f];let h=!1,x=-1;for(;!h&&++x<Ff;){const v=Zl[x];let E=v.isMultiMatch(p);E&&(c.push(new v(E,o)),h=!0)}if(!h)for(x=-1;++x<Ff;){const v=Zl[x];let E=v.isSingleMatch(p);if(E){c.push(new v(E,o));break}}}return c})}const h1=new Set([Wp.type,Gp.type]);class m1{constructor(o,{isCaseSensitive:i=ue.isCaseSensitive,ignoreDiacritics:u=ue.ignoreDiacritics,includeMatches:c=ue.includeMatches,minMatchCharLength:f=ue.minMatchCharLength,ignoreLocation:m=ue.ignoreLocation,findAllMatches:p=ue.findAllMatches,location:h=ue.location,threshold:x=ue.threshold,distance:v=ue.distance}={}){this.query=null,this.options={isCaseSensitive:i,ignoreDiacritics:u,includeMatches:c,minMatchCharLength:f,findAllMatches:p,ignoreLocation:m,location:h,threshold:x,distance:v},o=i?o:o.toLowerCase(),o=u?ks(o):o,this.pattern=o,this.query=p1(this.pattern,this.options)}static condition(o,i){return i.useExtendedSearch}searchIn(o){const i=this.query;if(!i)return{isMatch:!1,score:1};const{includeMatches:u,isCaseSensitive:c,ignoreDiacritics:f}=this.options;o=c?o:o.toLowerCase(),o=f?ks(o):o;let m=0,p=[],h=0;for(let x=0,v=i.length;x<v;x+=1){const E=i[x];p.length=0,m=0;for(let S=0,w=E.length;S<w;S+=1){const k=E[S],{isMatch:L,indices:R,score:T}=k.search(o);if(L){if(m+=1,h+=T,u){const _=k.constructor.type;h1.has(_)?p=[...p,...R]:p.push(R)}}else{h=0,m=0,p.length=0;break}}if(m){let S={isMatch:!0,score:h/m};return u&&(S.indices=p),S}}return{isMatch:!1,score:1}}}const ql=[];function g1(...n){ql.push(...n)}function eu(n,o){for(let i=0,u=ql.length;i<u;i+=1){let c=ql[i];if(c.condition(n,o))return new c(n,o)}return new Hp(n,o)}const Ss={AND:"$and",OR:"$or"},tu={PATH:"$path",PATTERN:"$val"},nu=n=>!!(n[Ss.AND]||n[Ss.OR]),x1=n=>!!n[tu.PATH],y1=n=>!on(n)&&$p(n)&&!nu(n),Uf=n=>({[Ss.AND]:Object.keys(n).map(o=>({[o]:n[o]}))});function Vp(n,o,{auto:i=!0}={}){const u=c=>{let f=Object.keys(c);const m=x1(c);if(!m&&f.length>1&&!nu(c))return u(Uf(c));if(y1(c)){const h=m?c[tu.PATH]:f[0],x=m?c[tu.PATTERN]:c[h];if(!Gt(x))throw new Error(Hy(h));const v={keyId:Xl(h),pattern:x};return i&&(v.searcher=eu(x,o)),v}let p={children:[],operator:f[0]};return f.forEach(h=>{const x=c[h];on(x)&&x.forEach(v=>{p.children.push(u(v))})}),p};return nu(n)||(n=Uf(n)),u(n)}function v1(n,{ignoreFieldNorm:o=ue.ignoreFieldNorm}){n.forEach(i=>{let u=1;i.matches.forEach(({key:c,norm:f,score:m})=>{const p=c?c.weight:null;u*=Math.pow(m===0&&p?Number.EPSILON:m,(p||1)*(o?1:f))}),i.score=u})}function b1(n,o){const i=n.matches;o.matches=[],bt(i)&&i.forEach(u=>{if(!bt(u.indices)||!u.indices.length)return;const{indices:c,value:f}=u;let m={indices:c,value:f};u.key&&(m.key=u.key.src),u.idx>-1&&(m.refIndex=u.idx),o.matches.push(m)})}function w1(n,o){o.score=n.score}function k1(n,o,{includeMatches:i=ue.includeMatches,includeScore:u=ue.includeScore}={}){const c=[];return i&&c.push(b1),u&&c.push(w1),n.map(f=>{const{idx:m}=f,p={item:o[m],refIndex:m};return c.length&&c.forEach(h=>{h(f,p)}),p})}class Wr{constructor(o,i={},u){this.options={...ue,...i},this.options.useExtendedSearch,this._keyStore=new Ky(this.options.keys),this.setCollection(o,u)}setCollection(o,i){if(this._docs=o,i&&!(i instanceof gu))throw new Error(Uy);this._myIndex=i||Up(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(o){bt(o)&&(this._docs.push(o),this._myIndex.add(o))}remove(o=()=>!1){const i=[];for(let u=0,c=this._docs.length;u<c;u+=1){const f=this._docs[u];o(f,u)&&(this.removeAt(u),u-=1,c-=1,i.push(f))}return i}removeAt(o){this._docs.splice(o,1),this._myIndex.removeAt(o)}getIndex(){return this._myIndex}search(o,{limit:i=-1}={}){const{includeMatches:u,includeScore:c,shouldSort:f,sortFn:m,ignoreFieldNorm:p}=this.options;let h=Gt(o)?Gt(this._docs[0])?this._searchStringList(o):this._searchObjectList(o):this._searchLogical(o);return v1(h,{ignoreFieldNorm:p}),f&&h.sort(m),Op(i)&&i>-1&&(h=h.slice(0,i)),k1(h,this._docs,{includeMatches:u,includeScore:c})}_searchStringList(o){const i=eu(o,this.options),{records:u}=this._myIndex,c=[];return u.forEach(({v:f,i:m,n:p})=>{if(!bt(f))return;const{isMatch:h,score:x,indices:v}=i.searchIn(f);h&&c.push({item:f,idx:m,matches:[{score:x,value:f,norm:p,indices:v}]})}),c}_searchLogical(o){const i=Vp(o,this.options),u=(p,h,x)=>{if(!p.children){const{keyId:E,searcher:S}=p,w=this._findMatches({key:this._keyStore.get(E),value:this._myIndex.getValueForItemAtKeyId(h,E),searcher:S});return w&&w.length?[{idx:x,item:h,matches:w}]:[]}const v=[];for(let E=0,S=p.children.length;E<S;E+=1){const w=p.children[E],k=u(w,h,x);if(k.length)v.push(...k);else if(p.operator===Ss.AND)return[]}return v},c=this._myIndex.records,f={},m=[];return c.forEach(({$:p,i:h})=>{if(bt(p)){let x=u(i,p,h);x.length&&(f[h]||(f[h]={idx:h,item:p,matches:[]},m.push(f[h])),x.forEach(({matches:v})=>{f[h].matches.push(...v)}))}}),m}_searchObjectList(o){const i=eu(o,this.options),{keys:u,records:c}=this._myIndex,f=[];return c.forEach(({$:m,i:p})=>{if(!bt(m))return;let h=[];u.forEach((x,v)=>{h.push(...this._findMatches({key:x,value:m[v],searcher:i}))}),h.length&&f.push({idx:p,item:m,matches:h})}),f}_findMatches({key:o,value:i,searcher:u}){if(!bt(i))return[];let c=[];if(on(i))i.forEach(({v:f,i:m,n:p})=>{if(!bt(f))return;const{isMatch:h,score:x,indices:v}=u.searchIn(f);h&&c.push({score:x,key:o,value:f,idx:m,norm:p,indices:v})});else{const{v:f,n:m}=i,{isMatch:p,score:h,indices:x}=u.searchIn(f);p&&c.push({score:h,key:o,value:f,norm:m,indices:x})}return c}}Wr.version="7.1.0";Wr.createIndex=Up;Wr.parseIndex=t1;Wr.config=ue;Wr.parseQuery=Vp;g1(m1);const pt=({label:n,placeholder:o,value:i,onChange:u,suggestions:c,isPara:f=!1,isTextArea:m=!1,isMultiSuggestion:p=!0})=>{const[h,x]=N.useState(i||""),[v,E]=N.useState([]),[S,w]=N.useState(!1),[k,L]=N.useState(0),R=new Wr(c,{threshold:.3});N.useEffect(()=>{x(i||"")},[i]);const T=O=>{const V=O.target.value;x(V),u(V);const U=p?V.split(/[,\s]+/).pop():V;if(U.trim()===""){E([]),w(!1);return}const de=R.search(U).map(oe=>oe.item);E(de),L(0),w(!0)},_=O=>{M(O)},W=O=>{S&&(O.key==="ArrowDown"?(O.preventDefault(),L(V=>V+1<v.length?V+1:0)):O.key==="ArrowUp"?(O.preventDefault(),L(V=>V-1>=0?V-1:v.length-1)):O.key==="Enter"&&(O.preventDefault(),v.length>0&&M(v[k])))},M=O=>{let V=O;if(p){const U=h.trim().split(/[,\s]+/);U[U.length-1]=O,V=f?U.join(" ")+" ":U.join(", ")+", "}x(V),u(V),w(!1)};return s.jsxs("div",{className:"relative space-y-2",children:[n&&s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:n}),m?s.jsx("textarea",{placeholder:o,className:"w-full h-56 sm:h-48 md:h-44 lg:h-[120px] px-3 py-2 border rounded resize-none peer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:h,onChange:T,onKeyDown:W,onBlur:()=>w(!1),onFocus:()=>h&&E(R.search(p?h.split(/[,\s]+/).pop():h).map(O=>O.item))}):s.jsx("input",{type:"text",placeholder:o,className:"w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:h,onChange:T,onKeyDown:W,onBlur:O=>{w(!1)},onFocus:()=>h&&E(R.search(p?h.split(/[,\s]+/).pop():h).map(O=>O.item))}),S&&v.length>0&&s.jsx("ul",{className:"absolute z-10 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg",children:v.map((O,V)=>s.jsx("li",{className:`px-3 py-2 cursor-pointer text-sm ${V===k?"bg-blue-500 text-white":"hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"}`,onMouseDown:()=>_(O),children:O},V))})]})},Hf=n=>n.trim(),S1=Mn.div`
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
}`,j1=n=>{try{return new URL(n),!0}catch{return!1}},ru=({jsonData:n})=>{const o=n.education.map((M,O)=>s.jsxs("div",{children:[s.jsx("div",{className:"TextLight",children:s.jsxs("b",{children:[M.graduationYear,s.jsx("br",{}),M.institutionName]})}),M.degreeName," ",s.jsx("br",{}),"GPA: ",M.currentSGPA,s.jsx("br",{})," ",s.jsx("br",{})]},`Education-${O}`)),i=n.skills.hardSkills.split(",").map(M=>M.trim()).filter(M=>M!==""),u=Math.floor(i.length/4);let c=u,f=u,m=u,p=u;i.length%4===1?c+=1:i.length%4===2?(c+=1,f+=1):i.length%4===2&&(c+=1,f+=1,m+=1);const h=i.slice(0,c).map((M,O)=>s.jsx("li",{children:M},`skill1-${O}`)),x=i.slice(c,c+f).map((M,O)=>s.jsx("li",{children:M},`skill2-${O}`)),v=i.slice(c+f,c+f+m).map((M,O)=>s.jsx("li",{children:M},`skill3-${O}`)),E=i.slice(c+f+m,c+f+m+p).map((M,O)=>s.jsx("li",{children:M},`skill3-${O}`)),S=n.skills.softSkills.split(",").map(M=>M.trim()).filter(M=>M!=="").map((M,O)=>s.jsx("li",{children:Hf(M)},`soft-${O}`)),w=n.contactInfo.Languages.split(",").map(M=>M.trim()).filter(M=>M!=="").map((M,O)=>s.jsxs("li",{children:[Hf(M),": Fluent"]},`lang-${O}`)),k=n.projects.map((M,O)=>s.jsx("div",{className:"Ritem",children:s.jsxs("li",{children:[s.jsx("div",{className:"item-title TextLight",children:M.projectTitle}),s.jsx("div",{children:M.toolsTechUsed})]})},`proj-${O}`)),L=n.workExperience.map((M,O)=>s.jsxs("li",{children:[s.jsxs("div",{className:"item-title TextLight",children:[M.companyName,s.jsx("div",{children:M.WorkDuration})]}),"(",M.jobTitle,") ",s.jsx("br",{}),M.keyAchievements," ",s.jsx("br",{}),O<p-1&&s.jsx("br",{})]},`work-${O}`)),R=n.certificates.map(M=>M.certificateName),T=n.certificates.map(M=>M.providerName),_=n.certificates.map(M=>M.courseDuration),W=Array(n.certificates.length).fill("--");return s.jsx(S1,{children:s.jsxs("div",{className:"resume",id:"capture-content",children:[s.jsxs("div",{className:"header",children:[s.jsx("h1",{children:n.contactInfo.fullName}),s.jsx("h2",{children:n.contactInfo.jobTitle})]}),s.jsxs("div",{className:"upperContent",children:[s.jsxs("div",{className:"Contact",children:[s.jsxs("div",{className:"section-title",children:[s.jsx("b",{children:"Contact"})," ",s.jsx("i",{className:"fas fa-address-card"})]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fa fa-phone TextLight"})," ",n.contactInfo.phoneNumber]}),s.jsxs("div",{className:"Litem NoneDecorationBlack",children:[s.jsx("i",{className:"fas fa-envelope TextLight"})," ",s.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:n.contactInfo.emailAddress.split("@")[0]})]}),s.jsxs("div",{className:"Litem NoneDecorationBlack",children:[s.jsx("i",{className:"fab fa-linkedin TextLight"})," ",s.jsx("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.linkedin})]}),s.jsxs("div",{className:"Litem NoneDecorationBlack",children:[s.jsx("i",{className:"fas fa-globe TextLight"})," ",s.jsxs("a",{href:j1(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")]})]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fa fa-map-marker TextLight"})," ",n.contactInfo.Location]}),s.jsx("br",{})]}),s.jsxs("div",{className:"Usection",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Profile Summary"})}),s.jsx("div",{className:"Litem",children:s.jsx("p",{className:"Ritem",children:n.Description.UserDescription})})]})]}),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"left",children:[s.jsxs("div",{className:"SUsection",children:[s.jsxs("div",{className:"section-title",children:[s.jsx("b",{children:"Education "}),s.jsx("i",{className:"fas fa-graduation-cap"})]}),o]}),s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-title",children:[s.jsx("b",{children:"Soft Skills "}),s.jsx("i",{className:"fa fa-book"})]}),s.jsxs("ul",{children:[S,s.jsx("br",{})]})]}),s.jsxs("div",{className:"LDsection",children:[s.jsxs("div",{className:"section-title",children:[s.jsx("b",{children:"Languages "}),s.jsx("i",{className:"fa fa-language"})]}),s.jsx("ul",{children:w})]})]}),s.jsxs("div",{className:"right",children:[s.jsxs("div",{className:"SUsection",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Projects"})}),s.jsx("ul",{children:k})]}),s.jsxs("div",{className:"section",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Work Experience"})}),s.jsx("div",{className:"Ritem",children:s.jsx("ul",{children:L})})]}),s.jsxs("div",{className:"section",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Certificates"})}),s.jsxs("div",{className:"Ritem subcont NoneDecoration",children:[s.jsxs("div",{children:[R.map((M,O)=>s.jsxs(le.Fragment,{children:[M,s.jsx("br",{})]},`cert-${O}`)),s.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),s.jsx("div",{children:W.map((M,O)=>s.jsxs(le.Fragment,{children:[M,s.jsx("br",{})]},`placeholder-${O}`))}),s.jsx("div",{children:T.map((M,O)=>s.jsxs(le.Fragment,{children:[M,s.jsx("br",{})]},`provider-${O}`))}),s.jsx("div",{className:"fontLight",children:_.map((M,O)=>s.jsxs(le.Fragment,{children:["(",M,")",s.jsx("br",{})]},`provider-${O}`))})]})]}),s.jsxs("div",{className:"skills",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Technical Skills"})}),s.jsxs("div",{className:"Ritem subcont",children:[s.jsx("ul",{children:h}),s.jsx("ul",{children:x}),s.jsx("ul",{children:v}),s.jsx("ul",{children:E})]})]})]})]})]})})},N1=`
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
    }`,C1=Mn.div`
@media print {
  body {
    margin-top: 10px !important;
    font-family: Arial, sans-serif;
    background: #fff !important;
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
    background: #fff;
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
  background: #e4e4e4;
  color: #333;
  padding: 20px;
}

.resume-container {
  width: 900px;
 //  height: 1300px;
  margin: 0 auto;
  background: #fff;
  border: 2px solid #ddd !important;
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
}`,Kp=({jsonData:n})=>{const o=n.skills.hardSkills.split(",").map(p=>p.trim()).filter(p=>p!==""),i=Math.floor(o.length/4);let u=i,c=i,f=i,m=i;return o.length%4===1?u+=1:o.length%4===2?(u+=1,c+=1):o.length%4===3&&(u+=1,c+=1,f+=1),s.jsx(C1,{children:s.jsxs("div",{className:"resume-container",id:"capture-content",children:[s.jsxs("div",{className:"header",children:[s.jsx("h1",{className:"Name",children:n.contactInfo.fullName}),s.jsx("h2",{className:"fontBold",style:{fontWeight:700},children:n.contactInfo.jobTitle}),s.jsxs("p",{style:{color:"#333"},children:[s.jsx("a",{href:"#",className:"NoneDecoration",children:n.contactInfo.Location})," | ",s.jsx("a",{className:"NoneDecoration",href:`mailto:${n.contactInfo.emailAddress}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.phoneNumber})," | ",s.jsx("a",{className:"NoneDecoration",href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.linkedin})]})]}),s.jsx("h3",{className:"Heading",children:"Summary"}),s.jsxs("div",{className:"summary",children:[s.jsx("p",{children:n.Description.UserDescription}),s.jsx("br",{})]}),s.jsx("h3",{className:"Heading",children:"Education"}),s.jsxs("div",{className:"education",children:[n.education.map((p,h)=>s.jsx("div",{className:"education-item",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsxs("h4",{className:"SpaceBetween",children:[p.degreeName," ",s.jsx("span",{children:p.graduationYear})]})}),s.jsxs("p",{children:[p.institutionName," || SGPA: ",p.currentSGPA]})]})},h)),s.jsx("br",{})]}),s.jsx("h3",{className:"Heading",children:"Work Experience"}),s.jsxs("div",{className:"experience",children:[n.workExperience.map((p,h)=>s.jsx("div",{className:"experience-item",children:s.jsxs("ul",{children:[s.jsxs("li",{className:"SpaceBetween",children:[p.companyName," | ",p.jobTitle," ",s.jsx("span",{children:p.WorkDuration})]}),p.keyAchievements]})},h)),s.jsx("br",{})]}),s.jsx("h3",{className:"Heading",children:"Projects"}),s.jsxs("div",{className:"education",children:[n.projects.map((p,h)=>s.jsx("div",{className:"Projects-items",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("h4",{className:"fontlight",children:p.projectTitle})}),s.jsx("p",{children:p.toolsTechUsed})]})},h)),s.jsx("br",{})]}),s.jsx("h3",{className:"Heading",children:"Certifications"}),s.jsxs("div",{className:"justflex Certificats",children:[s.jsxs("div",{className:"mar-30",children:[n.certificates.map((p,h)=>s.jsxs(le.Fragment,{children:[p.certificateName,h<n.certificates.length-1&&s.jsx("br",{})]},h)),s.jsx("br",{}),s.jsx("a",{href:"#",className:"NoneDecoration",target:"_blank",rel:"noreferrer",children:"More Certificates"}),s.jsx("br",{}),s.jsx("br",{})]}),s.jsxs("div",{className:"mar-30",children:[n.certificates.map((p,h)=>s.jsxs(le.Fragment,{children:["--",h<n.certificates.length-1&&s.jsx("br",{})]},h)),s.jsx("br",{}),s.jsx("br",{})," ",s.jsx("br",{})]}),s.jsxs("div",{className:"mar-30",children:[n.certificates.map((p,h)=>s.jsxs(le.Fragment,{children:[p.providerName,h<n.certificates.length-1&&s.jsx("br",{})]},h)),s.jsx("br",{}),s.jsx("br",{}),s.jsx("br",{})]}),s.jsxs("div",{className:"mar-30",children:[n.certificates.map((p,h)=>s.jsxs(le.Fragment,{children:[s.jsx("span",{children:`(${p.courseDuration})`}),h<n.certificates.length-1&&s.jsx("br",{})]},h)),s.jsx("br",{}),s.jsx("br",{}),s.jsx("br",{})]})]}),s.jsx("h3",{className:"Heading",children:"Technical Skills"}),s.jsxs("div",{className:"skills SpaceBetween",children:[s.jsx("ul",{children:o.slice(0,u).map((p,h)=>s.jsx(le.Fragment,{children:s.jsx("li",{children:p})},h))}),s.jsx("ul",{children:o.slice(u,u+c).map((p,h)=>s.jsx(le.Fragment,{children:s.jsx("li",{children:p})},h+u))}),s.jsx("ul",{children:o.slice(u+c,u+c+f).map((p,h)=>s.jsx(le.Fragment,{children:s.jsx("li",{children:p})},h+u+c))}),s.jsx("ul",{children:o.slice(u+c+f,u+c+f+m).map((p,h)=>s.jsx(le.Fragment,{children:s.jsx("li",{children:p})},h+u+c+m))})]})]})})},E1=`
      @media print {
        body {
          margin-top: 10px !important;
          font-family: Arial, sans-serif;
          background: #fff !important;
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
          background: #fff;
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
         background: #e4e4e4;
         color: #333;
         padding: 20px;
       }
      
       .resume-container {
         width: 900px;
        //  height: 1300px;
         margin: 0 auto;
         background: #fff;
         border: 0px solid #ddd !important;
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
       }`,T1=Mn.div`
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
}`,Qp=({jsonData:n})=>{const o=h=>h.trim(),i=n.skills.hardSkills.split(",").map(h=>h.trim()).filter(h=>h!=="");console.log(i,"from T3.jsx");const u=Math.floor(i.length/4);let c=u,f=u,m=u,p=u;return i.length%4===1?c+=1:i.length%4===2?(c+=1,f+=1):i.length%4===3&&(c+=1,f+=1,m+=1),s.jsx(T1,{children:s.jsxs("div",{id:"capture-content",children:[s.jsxs("div",{className:"header",children:[s.jsx("h1",{children:n.contactInfo.fullName}),s.jsx("h2",{children:n.contactInfo.jobTitle})]}),s.jsx("div",{className:"resume",children:s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"left",children:[s.jsxs("div",{className:"Contact",children:[s.jsxs("div",{className:"section-title",children:[s.jsx("b",{children:"Contact"})," ",s.jsx("i",{className:"fas fa-address-card"})]}),s.jsx("br",{}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fa fa-phone IconLight"})," ",n.contactInfo.phoneNumber," "]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fas fa-envelope IconLight"}),s.jsxs("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:[" ",n.contactInfo.emailAddress.split("@")[0]," "]})]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fab fa-linkedin IconLight"}),s.jsxs("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.linkedin]})]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fas fa-globe IconLight"}),s.jsxs("a",{href:I1(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")," "]})]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fa fa-map-marker IconLight"})," ",n.contactInfo.Location]})," ",s.jsx("br",{})]}),s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-title",children:[s.jsx("b",{children:"Education "}),s.jsx("i",{className:"fas fa-graduation-cap"})]}),s.jsx("br",{}),s.jsx("div",{className:"Litem",children:n.education.map((h,x)=>s.jsx(le.Fragment,{children:s.jsxs("div",{className:"mbb-3",children:[s.jsx("div",{className:"SubSec-title TextLight",children:s.jsxs("b",{children:[h.graduationYear,s.jsx("br",{}),h.institutionName]})}),h.degreeName," ",s.jsx("br",{}),"GPA: ",h.currentSGPA,x<n.education.length-1&&s.jsx("br",{})]})},x))})]}),s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-title",children:[s.jsx("b",{children:"Soft Skills "}),s.jsx("i",{className:"fa fa-book"})]}),s.jsx("br",{}),s.jsx("ul",{children:n.skills.softSkills.split(",").map(h=>h.trim()).filter(h=>h!=="").map((h,x)=>s.jsx("li",{children:o(h)},x))})]}),s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-title",children:[s.jsx("b",{children:"Languages "}),s.jsx("i",{className:"fa fa-language"})]}),s.jsx("br",{}),s.jsx("ul",{children:n.contactInfo.Languages.split(",").map(h=>h.trim()).filter(h=>h!=="").map((h,x)=>s.jsxs("li",{children:[o(h),": Fluent"]},x))})]})]}),s.jsxs("div",{className:"right",children:[s.jsxs("div",{className:"section",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Profile Summary"})}),s.jsx("p",{children:n.Description.UserDescription})]}),s.jsxs("div",{className:"SUsection",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Projects"})}),s.jsx("ul",{children:n.projects.map((h,x)=>s.jsx("div",{className:"Ritem",children:s.jsxs("li",{children:[s.jsxs("div",{className:"item-title TextLight",children:[h.projectTitle," "]}),s.jsxs("div",{children:[" ",h.toolsTechUsed," "]})]})},x))})]}),s.jsxs("div",{className:"section",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Work Experience"})}),s.jsx("div",{className:"Ritem",children:s.jsx("ul",{children:n.workExperience.map((h,x)=>s.jsxs("li",{className:"mbb-2",children:[s.jsxs("div",{className:"item-title TextLight",children:[h.companyName,s.jsx("div",{children:h.WorkDuration})," "]}),h.jobTitle,s.jsx("br",{}),h.keyAchievements,x<n.workExperience.length-1&&s.jsx("br",{})]},x))})})]}),s.jsxs("div",{className:"section",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Certificates"})}),s.jsxs("div",{className:"Ritem subcont NoDecorationBlue",children:[s.jsxs("div",{children:[n.certificates.map((h,x)=>s.jsxs(le.Fragment,{children:[h.certificateName,x<n.certificates.length-1&&s.jsx("br",{})]},x)),s.jsx("br",{}),s.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),s.jsxs("div",{children:[n.certificates.map((h,x)=>s.jsxs(le.Fragment,{children:["--",x<n.certificates.length-1&&s.jsx("br",{})]},x)),s.jsx("br",{})]}),s.jsxs("div",{children:[n.certificates.map((h,x)=>s.jsxs(le.Fragment,{children:[h.providerName,x<n.certificates.length-1&&s.jsx("br",{})]},x)),s.jsx("br",{})]}),s.jsxs("div",{className:"TextLight",children:[n.certificates.map((h,x)=>s.jsxs(le.Fragment,{children:["(",h.courseDuration,")",x<n.certificates.length-1&&s.jsx("br",{})]},x)),s.jsx("br",{})]})]})]}),s.jsxs("div",{className:"skills",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Technical Skills"})}),s.jsxs("div",{className:"Ritem subcont",children:[s.jsx("ul",{children:i.slice(0,c).map((h,x)=>s.jsx("li",{children:h},x))}),s.jsx("ul",{children:i.slice(c,c+f).map((h,x)=>s.jsx("li",{children:h},x+c))}),s.jsx("ul",{children:i.slice(c+f,c+f+m).map((h,x)=>s.jsx("li",{children:h},x+c+f))}),s.jsx("ul",{children:i.slice(c+f+m,c+f+m+p).map((h,x)=>s.jsx("li",{children:h},x+c+f+p))})]})]})]})]})})]})})},I1=n=>{try{return new URL(n),!0}catch{return!1}},P1=`
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
}`,A1=Mn.div`body {
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
}`,Yp=({jsonData:n,desc:o})=>{const i=w=>{try{return new URL(w),!0}catch{return!1}},u=w=>w.trim(),c=n.skills.hardSkills.split(",").map(w=>w.trim()).filter(w=>w!==""),f=Math.floor(c.length/4);let m=f,p=f,h=f,x=f;c.length%4===1?m+=1:c.length%4===2?(m+=1,p+=1):c.length%4===3&&(m+=1,p+=1,h+=1);const v=c.slice(0,m),E=c.slice(m,m+p),S=c.slice(m+p,m+p+h);return c.slice(m+p+h,m+p+h+x),s.jsx(A1,{children:s.jsxs("div",{className:"resume",id:"capture-content",children:[s.jsxs("div",{className:"header",children:[s.jsx("div",{className:"left",children:s.jsx("img",{src:"https://www.skibalawchicago.com/wp-content/uploads/2024/06/profile-placeholder.jpg",alt:"Profile"})}),s.jsx("div",{className:"right",children:s.jsxs("div",{className:"head",children:[s.jsx("h1",{children:n.contactInfo.fullName}),s.jsx("h2",{children:n.contactInfo.jobTitle}),s.jsx("div",{className:"Underline"})]})})]}),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"left",children:[s.jsxs("div",{className:"Contact",children:[s.jsxs("div",{className:"Lsection-title",children:[s.jsx("b",{children:"Contact"})," ",s.jsx("i",{className:"fas fa-address-card"})]})," ",s.jsx("br",{}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fa fa-phone"})," ",n.contactInfo.phoneNumber," "]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fas fa-envelope"}),s.jsxs("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:[" ",n.contactInfo.emailAddress.split("@")[0]," "]})]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fab fa-linkedin"}),s.jsxs("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.linkedin]})]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fas fa-globe"}),s.jsxs("a",{href:i(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")," "]})]}),s.jsxs("div",{className:"Litem",children:[s.jsx("i",{className:"fa fa-map-marker"})," ",n.contactInfo.Location]})]}),s.jsxs("div",{className:"Lsection",children:[s.jsxs("div",{className:"Lsection-title",children:[s.jsx("b",{children:"Education "}),s.jsx("i",{className:"fas fa-graduation-cap"})]}),s.jsx("br",{}),s.jsxs("div",{className:"Litem",children:[n.education.map((w,k)=>s.jsxs(le.Fragment,{children:[k>0&&s.jsxs(le.Fragment,{children:[s.jsx("br",{}),s.jsx("br",{})]}),s.jsx("div",{className:"SubSec-title",children:s.jsxs("b",{children:[w.graduationYear,s.jsx("br",{}),w.institutionName]})}),w.degreeName," ",s.jsx("br",{}),"SGPA: ",w.currentSGPA]},k)),s.jsx("br",{})]})]}),s.jsxs("div",{className:"Lsection",children:[s.jsxs("div",{className:"Lsection-title",children:[s.jsx("b",{children:"Soft Skills "}),s.jsx("i",{className:"fa fa-book"})]}),s.jsx("br",{}),s.jsx("ul",{children:n.skills.softSkills.split(",").map(w=>w.trim()).filter(w=>w!=="").map((w,k)=>s.jsx("li",{children:u(w)},k))})]}),s.jsxs("div",{className:"Lsection",children:[s.jsxs("div",{className:"Lsection-title",children:[s.jsx("b",{children:"Languages "}),s.jsx("i",{className:"fa fa-language"})]}),s.jsx("br",{}),s.jsx("ul",{children:n.contactInfo.Languages.split(",").map(w=>w.trim()).filter(w=>w!=="").map((w,k)=>s.jsxs("li",{children:[u(w),": Fluent"]},k))})]})]}),s.jsxs("div",{className:"right",children:[s.jsxs("div",{className:"section",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Profile Summary"})}),s.jsx("p",{children:n.Description.UserDescription})]}),s.jsxs("div",{className:"SUsection",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Projects"})}),s.jsx("ul",{children:n.projects.map((w,k)=>s.jsx("div",{className:"Ritem",children:s.jsxs("li",{children:[s.jsxs("div",{className:"item-title textGray",children:[w.projectTitle," "]}),s.jsxs("div",{children:[" ",w.toolsTechUsed," "]})]})},k))})]}),s.jsx("br",{}),s.jsxs("div",{className:"section",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Work Experience"})}),s.jsx("div",{className:"Ritem",children:s.jsx("ul",{children:n.workExperience.map((w,k)=>s.jsx(le.Fragment,{children:s.jsxs("li",{children:[s.jsxs("div",{className:"item-title textGray mtt-3",children:[w.companyName,s.jsx("div",{children:w.WorkDuration})]}),w.jobTitle,s.jsx("br",{}),s.jsx("div",{dangerouslySetInnerHTML:{__html:w.keyAchievements}})]})},k))})})]}),s.jsxs("div",{className:"section",children:[s.jsx("div",{className:"section-title",children:s.jsx("b",{children:"Certificates"})}),s.jsxs("div",{className:"Ritem subcont NoneDecoration",children:[s.jsxs("div",{children:[n.certificates.map((w,k)=>s.jsxs(le.Fragment,{children:[k>0&&s.jsx("br",{}),w.certificateName]},k)),s.jsx("br",{}),s.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),s.jsxs("div",{children:[n.certificates.map((w,k)=>s.jsxs(le.Fragment,{children:[k>0&&s.jsx("br",{}),"--"]},k)),s.jsx("br",{})]}),s.jsxs("div",{children:[n.certificates.map((w,k)=>s.jsxs(le.Fragment,{children:[k>0&&s.jsx("br",{}),w.providerName]},k)),s.jsx("br",{})]}),s.jsxs("div",{className:"textLight",children:[n.certificates.map((w,k)=>s.jsxs(le.Fragment,{children:[k>0&&s.jsx("br",{}),"(",w.courseDuration,")"]},k)),s.jsx("br",{})]})]})]}),s.jsxs("div",{className:"skills",children:[s.jsx("div",{className:"SkillsSection-title",children:s.jsx("b",{children:"Technical Skills"})}),s.jsx("br",{}),s.jsxs("div",{className:"Ritem subcont",children:[s.jsx("ul",{children:v.map((w,k)=>s.jsx(le.Fragment,{children:s.jsx("li",{children:w})},k))}),s.jsx("ul",{children:E.map((w,k)=>s.jsx(le.Fragment,{children:s.jsx("li",{children:w})},k))}),s.jsx("ul",{children:S.map((w,k)=>s.jsx(le.Fragment,{children:s.jsx("li",{children:w})},k))}),s.jsx("ul",{children:S.map((w,k)=>s.jsx(le.Fragment,{children:s.jsx("li",{children:w})},k))})]})]})]})]})]})})},L1=`
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
}`,M1=Mn.div`* {
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
 //  height: 1300px;
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
}`,Jp=({jsonData:n,desc:o})=>{const i=u=>u.indexOf(".")>-1?`https://${u}`:`https://github.com/${u}`;return s.jsx(M1,{children:s.jsxs("div",{className:"resume-container",id:"capture-content",children:[s.jsxs("div",{className:"header",children:[s.jsx("h1",{children:s.jsx("b",{children:n.contactInfo.fullName})}),s.jsx("br",{}),s.jsxs("p",{children:[s.jsx("a",{className:"DecorationNone",href:i(n.contactInfo.portfolio),target:"_blank",rel:"noreferrer",children:n.contactInfo.portfolio.replace(/^https?:\/\//,"")})," | ",s.jsxs("a",{className:"DecorationNone",href:"#",children:[" ",n.contactInfo.phoneNumber]})," | ",s.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,className:"DecorationNone",target:"_blank",rel:"noreferrer",children:n.contactInfo.emailAddress})," ",s.jsx("br",{}),s.jsx("div",{style:{marginTop:"6px"},children:n.contactInfo.Location})]})]}),s.jsxs("div",{className:"summary",children:[s.jsx("h3",{children:s.jsx("b",{children:"Summary"})}),s.jsx("p",{children:n.Description.UserDescription})]}),s.jsxs("div",{className:"experience",children:[s.jsx("h3",{children:s.jsx("b",{children:"Work Experience"})}),n.workExperience.map((u,c)=>s.jsx("div",{className:"experience-item",children:s.jsxs("ul",{className:"circle-list",children:[s.jsx("li",{children:s.jsxs("h4",{className:"spacebetween",children:[u.companyName," | ",u.jobTitle," ",s.jsx("span",{children:u.WorkDuration})]})}),s.jsx("div",{dangerouslySetInnerHTML:{__html:u.keyAchievements}})]})},c))]}),s.jsxs("div",{className:"education-section",children:[s.jsx("h3",{children:s.jsx("b",{children:"Education"})}),n.education.map((u,c)=>s.jsx("div",{className:"education-item",children:s.jsxs("ul",{className:"square-list",children:[s.jsx("li",{children:s.jsxs("h4",{className:"spacebetween",children:[u.degreeName,s.jsx("span",{children:u.graduationYear})]})}),s.jsxs("p",{children:[u.institutionName," | SGPA: ",u.currentSGPA]})]})},c))]}),s.jsxs("div",{className:"projects",children:[s.jsx("h3",{children:s.jsx("b",{children:"Projects"})}),n.projects.map((u,c)=>s.jsx("div",{className:"project-item",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("h4",{className:"spacebetween",children:u.projectTitle})}),s.jsx("p",{children:u.toolsTechUsed})]})},c))]}),s.jsxs("div",{className:"Certifications",children:[s.jsx("h3",{children:s.jsx("b",{children:"Certifications"})}),s.jsxs("div",{className:"flexConts Certificate-item",children:[s.jsxs("div",{className:"mar-30",children:[n.certificates.map((u,c)=>s.jsxs(le.Fragment,{children:[c>0&&s.jsx("br",{}),u.certificateName]},c)),s.jsx("br",{}),s.jsx("a",{className:"DecorationNone",href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),s.jsxs("div",{className:"mar-30",children:[n.certificates.map((u,c)=>s.jsxs(le.Fragment,{children:[c>0&&s.jsx("br",{}),"--"]},c)),s.jsx("br",{})]}),s.jsxs("div",{className:"mar-30",children:[n.certificates.map((u,c)=>s.jsxs(le.Fragment,{children:[c>0&&s.jsx("br",{}),u.providerName]},c)),s.jsx("br",{})]}),s.jsxs("div",{className:"mar-30 fontLight",children:[n.certificates.map((u,c)=>s.jsxs(le.Fragment,{children:[c>0&&s.jsx("br",{}),"(",u.courseDuration,")"]},c)),s.jsx("br",{})]})]})]}),s.jsxs("div",{className:"skills",children:[s.jsx("h3",{children:s.jsx("b",{children:"Skills"})}),s.jsxs("p",{className:"skills-item",children:[s.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Soft Skills: "}),n.skills.softSkills]}),s.jsxs("p",{className:"skills-item",children:[s.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Tech Skills: "}),s.jsx("span",{children:n.skills.hardSkills})]})]})]})})},R1=`
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
  //  height: 1300px;
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
  //  height: 1300px;
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
 }`,D1=Mn.div`body {
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
  background: #ffffff;
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
}`,Xp=({jsonData:n})=>{const o=i=>{try{return new URL(i),!0}catch{return!1}};return s.jsx(D1,{children:s.jsxs("div",{className:"resume",id:"capture-content",children:[s.jsxs("div",{className:"contacts",children:[s.jsx("h1",{children:n.contactInfo.fullName}),s.jsxs("p",{children:[n.contactInfo.Location," ",s.jsx("br",{}),n.contactInfo.phoneNumber," | ",s.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.emailAddress})," | ",s.jsxs("a",{href:o(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")]})]})]}),s.jsxs("div",{className:"Conts",children:[s.jsx("div",{className:"title",children:"Objectives:"}),n.Description.UserDescription]}),s.jsxs("div",{className:"Conts",children:[s.jsx("div",{className:"title",children:"Education:"}),n.education.map((i,u)=>s.jsxs("div",{children:[s.jsx("div",{className:"subtitle",children:i.degreeName}),i.institutionName," | ",i.graduationYear," | SGPA: ",i.currentSGPA]},u))]}),s.jsxs("div",{className:"Conts",children:[s.jsx("div",{className:"title",children:"Technical skills:"}),s.jsxs("div",{className:"subcont SpaceBetween",children:[s.jsxs("div",{className:"left",children:[s.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Tech Skills: "})," ",s.jsx("br",{}),s.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Soft Skills: "})]}),s.jsxs("div",{className:"mid",children:["--",s.jsx("br",{}),"--",s.jsx("br",{})]}),s.jsxs("div",{className:"right",children:[n.skills.hardSkills,s.jsx("br",{}),n.skills.softSkills," ",s.jsx("br",{})]})]})]}),s.jsxs("div",{className:"Conts",children:[s.jsx("div",{className:"title",children:"Academic Projects:"}),s.jsx("ul",{children:n.projects.map((i,u)=>s.jsx("div",{className:"Ritem",children:s.jsxs("li",{children:[s.jsx("div",{className:"item-title",children:i.projectTitle}),s.jsx("div",{children:i.toolsTechUsed})]})},u))})]}),s.jsxs("div",{className:"Conts",children:[s.jsx("div",{className:"title",children:"Work Experience:"}),n.workExperience.map((i,u)=>s.jsxs("div",{children:[s.jsxs("div",{className:"internship TextGray SpaceBetween",children:[s.jsx("div",{className:"left ",children:i.companyName}),s.jsx("div",{className:"Right",children:i.WorkDuration})]}),s.jsx("ul",{children:s.jsx("li",{children:i.keyAchievements})})]},u))]}),s.jsxs("div",{className:"Conts",children:[s.jsx("div",{className:"title",children:"Certifications:"}),s.jsxs("div",{className:"flexConts subcont",children:[s.jsx("div",{className:"mar-30",children:n.certificates.map((i,u)=>s.jsxs(le.Fragment,{children:[u>0&&s.jsx("br",{}),i.certificateName]},u))}),s.jsxs("div",{className:"mar-30",children:[n.certificates.map((i,u)=>s.jsxs(le.Fragment,{children:[u>0&&s.jsx("br",{}),"--"]},u)),s.jsx("br",{})]}),s.jsxs("div",{className:"mar-30",children:[n.certificates.map((i,u)=>s.jsxs(le.Fragment,{children:[u>0&&s.jsx("br",{}),i.providerName]},u)),s.jsx("br",{})]}),s.jsxs("div",{className:"mar-30 TextLight",children:[n.certificates.map((i,u)=>s.jsxs(le.Fragment,{children:[u>0&&s.jsx("br",{}),"(",i.courseDuration,")"]},u)),s.jsx("br",{})]})]}),s.jsx("a",{className:"NoneDecoration mll-3",href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),s.jsxs("div",{className:"Conts",children:[s.jsx("div",{className:"title",children:"Declaration:"}),"I hereby declare that the above information is true to the best of my knowledge."]}),s.jsx("p",{className:"signature",children:n.contactInfo.fullName})]})})},B1=`
@media print {
  body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #ffffff !important;
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
     background: #ffffff;
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
   background: #ffffff;
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
}`,_1=()=>{var st,Bn,sr,Gr,Vr,or,Kr,lr,un,Kt,ur,Qr,Yr,Jr,Xr;const[n,o]=N.useState(0),[i,u]=N.useState(!1),c=su(),[f,m]=N.useState({selectedTemplate:"2",contactInfo:{fullName:"Nishant kumar",phoneNumber:"9217290469",emailAddress:"nishantsingh.talk@gmail.com",linkedin:"nishantksingh1",portfolio:"nishantksingh0.github.io",jobTitle:"Data Scientist",Languages:"English, Hindi, French",Location:"Haridwar (Uttrakhand)"},skills:{hardSkills:"TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React",softSkills:"TeamWork, Problem-Solving, Leadership, Critical thinking, Communication, Creativity"},workExperience:[{jobTitle:"Data scientist",companyName:"Onlei tech",WorkDuration:"Dec-2024 to Mar-2025",keyAchievements:"Learn to visualize patterns from data using matplotlib and Built several DL models"},{jobTitle:"Python engineer",companyName:"Microsoft",WorkDuration:"May-2024 to Jul-2024",keyAchievements:"Learn to use python in NLP tasks to take advantages of LLM"}],projects:[{projectTitle:"Transformer based translation model",toolsTechUsed:"Tensorflow, Trasformer architecture, NumPy, WMT Translation dataset"},{projectTitle:"Exam Proctoring system",toolsTechUsed:"React, Flask, OpenCV, NumPy, Mediapipe, Pillow, WebSocket, ThreadPool"},{projectTitle:"Persion bounding box detection",toolsTechUsed:"OpenCV, Json, Tensorflow, Pandas, Matplotlib, NumPy"}],education:[{institutionName:"Haridwar University",degreeName:"Batchelor in Computer application",graduationYear:"2023 - 2026",currentSGPA:"8"},{institutionName:"Vidya Mandir Sec-5 (Haridwar)",degreeName:"Primary/Secondary",graduationYear:"2021 - 2023",currentSGPA:"8"}],certificates:[{certificateName:"Azure AI Engineer association",courseDuration:"2 month ",providerName:"Microsoft"},{certificateName:"C/C++",courseDuration:"2 Month",providerName:"Cad Planet"},{certificateName:"DataScientist Internship",courseDuration:"2 Month",providerName:"Onlei Tech"},{certificateName:"Intro To responsive AI",courseDuration:"1 Month",providerName:"SimpliLearn"},{certificateName:"Bits & byts of computer",courseDuration:"1 Month",providerName:"Coursera"}],Description:{UserDescription:"Passionate AI developer & backend specialist with expertise in deep learning, computer vision, NLP, and transformers, focusing on building models from scratch. Proficient in React, frontend design, Flask, and Django, enabling seamless AI integration into real world applications. Developed and deployed 22+ projects, showcased on GitHub & Kaggle. Always eager to solve complex challenges and innovate in AI & software development"}}),[p,h]=N.useState({selectedTemplate:"",contactInfo:{fullName:"",phoneNumber:"",emailAddress:"",linkedin:"",portfolio:"",jobTitle:"",Languages:"",Location:""},skills:{hardSkills:"",softSkills:""},workExperience:[{jobTitle:"",companyName:"",WorkDuration:"",keyAchievements:""}],projects:[{projectTitle:"",toolsTechUsed:""}],education:[{institutionName:"",degreeName:"",graduationYear:"",currentSGPA:""}],certificates:[{certificateName:"",courseDuration:"",providerName:""}],Description:{UserDescription:""}}),x=(st=p.skills.hardSkills)==null?void 0:st.split(",").slice(0,5).map(D=>D.trim()).join(", "),v=[`A passionate ${p.contactInfo.jobTitle} graduated from ${(Bn=p.education[0])==null?void 0:Bn.institutionName}, with expertise in ${x} and more. honed through 8+ projects. Skilled at leveraging cutting-edge tools to deliver innovative solutions. Proficient in ${p.contactInfo.Languages}and recognized for exceptional ${p.skills.softSkills}.`,`A results-driven ${p.contactInfo.jobTitle} Graduated from ${(sr=p.education[0])==null?void 0:sr.institutionName}, mastered in ${x} and more. Built over 10+ real-world projects. Adept in ${p.contactInfo.Languages}and highly valued for strong ${p.skills.softSkills}& creativity that drive Collaborative team work.`,`A dedicated ${p.contactInfo.jobTitle} graduated from ${(Gr=p.education[0])==null?void 0:Gr.institutionName}, specializing in ${x} and more. with hands-on experience in building 12+ impactful projects. Fluent in ${p.contactInfo.Languages}with proven strengths in ${p.skills.softSkills}bringing creativity and precision to every challenge.`,`A skilled ${p.contactInfo.jobTitle} Graduated from ${(Vr=p.education[0])==null?void 0:Vr.institutionName}, with expertise in ${x} and more. built over 22+ practical projects. Familiar with ${p.contactInfo.Languages}and known for outstanding ${p.skills.softSkills}that foster innovation and collaboration.`,`An innovative ${p.contactInfo.jobTitle} graduated from ${(or=p.education[0])==null?void 0:or.institutionName}, with proficiency in ${x} and more. demonstrated through 13+ diverse projects. Well-versed in ${p.contactInfo.Languages}and appreciated for exceptional ${p.skills.softSkills}in dynamic work environments.`,`A forward-thinking ${p.contactInfo.jobTitle} graduated from ${(Kr=p.education[0])==null?void 0:Kr.institutionName}, with strong expertise in ${x} and more. Successfully delivered 15+ innovative projects, demonstrating proficiency in ${p.contactInfo.Languages}and earning recognition for exceptional ${p.skills.softSkills}in fast-paced environments.`,`An enthusiastic ${p.contactInfo.jobTitle} from ${(lr=p.education[0])==null?void 0:lr.institutionName}, with a proven track record in ${x} and more. across 18+ industry-relevant projects. Skilled communicator in ${p.contactInfo.Languages}with a reputation for ${p.skills.softSkills}, problem-solving, and strategic thinking.`,`A dynamic ${p.contactInfo.jobTitle} holding a Bachelor's from ${(un=p.education[0])==null?void 0:un.institutionName}, specializing in ${x} and more. Accomplished 20+ successful projects that blend innovation with practical impact. Strong command over ${p.contactInfo.Languages}and valued for adaptive ${p.skills.softSkills}and leadership abilities.`,`An ambitious ${p.contactInfo.jobTitle} graduated from ${(Kt=p.education[0])==null?void 0:Kt.institutionName}, excelling in ${x} and more. through hands-on contributions to 25+ real-world projects. Proficient in ${p.contactInfo.Languages}with a passion for applying ${p.skills.softSkills}to solve complex challenges collaboratively.`,`A detail-oriented ${p.contactInfo.jobTitle} from ${(ur=p.education[0])==null?void 0:ur.institutionName}, specializing in ${x} and a proven track record of delivering 30+ impactful projects that drive business growth. Proficient in ${p.contactInfo.Languages}, with a strong focus on ${p.skills.softSkills}, bringing innovation, efficiency, and a solution-driven mindset to every project.`,`An accomplished ${p.contactInfo.jobTitle} graduated from ${(Qr=p.education[0])==null?void 0:Qr.institutionName}, with deep knowledge in ${x} and more. Built 17+ scalable projects demonstrating fluency in ${p.contactInfo.Languages}and a consistent record of ${p.skills.softSkills}that foster productive teamwork and innovation.`,`A highly motivated ${p.contactInfo.jobTitle} from ${(Yr=p.education[0])==null?void 0:Yr.institutionName}, specialized in ${x} and more. with extensive hands-on project experience. Delivered 19+ high-quality solutions with strong command over ${p.contactInfo.Languages}and trusted for excellent ${p.skills.softSkills}and professional integrity.`,`A creative and analytical ${p.contactInfo.jobTitle} graduated from ${(Jr=p.education[0])==null?void 0:Jr.institutionName}, mastering ${x} and more. through development of 14+ impactful projects. Fluent in ${p.contactInfo.Languages}, with exceptional ${p.skills.softSkills}that contribute to innovative product development and collaborative growth.`,`A performance-driven ${p.contactInfo.jobTitle} from ${(Xr=p.education[0])==null?void 0:Xr.institutionName}, leveraging ${x} and more. expertise to deliver 21+ successful projects. Skilled in ${p.contactInfo.Languages}with a commitment to continuous learning and ${p.skills.softSkills}that elevate team performance and project outcomes.`],[E,S]=N.useState(new Set),[w,k]=N.useState(!1),[L,R]=N.useState(!1),[T,_]=N.useState(!1),[W,M]=N.useState(!1),[O,V]=N.useState(!1),[U,de]=N.useState(!1),[oe,we]=N.useState(!1),[Ne,Ce]=N.useState(!1),[He,ke]=N.useState(!1),[ze,_e]=N.useState(""),[je,K]=N.useState(!1),[ne,Y]=N.useState(!1),C=["Simpler and Structured","Linear and Classic","Colourfull and Attractive","Colourful and Highly Designed","Simpler and Linear","Highly Simpler and Classic"],B=["Hi, I'm here to assist you in building a strong, high-quality, and ATS-friendly resume. Let's make it impressive together! 🤝","First, start by choosing a template that best fits your style and profession.",`You choosed template ${Number(p.selectedTemplate)} which is ${C[Number(p.selectedTemplate)-1]} 🤟. lets process further and fill details (Click next)`,`Now, start by filling in your basic details as the form asks. 
Don't worry -- you got suggestions onward which saves much of your time ☺️`,`Good job! Now it's time to showcase your skills... 
As you can see, your data is being live-rendered by our app and displayed above in real-time`,"Consider adding 8+ 'relevant' technical skills. It not only demonstrates your technical breadth but also highlights your creativity, adaptability, and eagerness to learn 🚀","The soft skills will show in summary of resume. or either display on template. consider to show your uniqueness","Add 2-3 languages you are familiar with — it helps organizations understand your comfort level and communication ability.","If you are applying for remote jobs add just 'State' else 'city (State)' and process Next... it's 35% done","Now it's time to mention your Experiences, as a intern or full time employee","Consider adding at least two experiences -- it increases your resume score and showcases practical exposure.","Now process Next...","It's time to showcase your projects! We recommend adding at least 3 because it's a good number to reflect your real-world experience.","Now click Next... it's 65% done",`Now Mention your Pre/Post graduations 🎓 here. 
consider to list most recent Qualification first`,"if You only have one degree you can also mention your Primary/Secondary education below...","Proceed further...",`You're 90% Done 😊... 
Just showcase your achieved certificates and proceed further.`,"We recommend to add atleast 5 certifications (Every Colleges and universities offer plenty of certificates during Academics). just mention top 5","Click Next...",`Write 'A' to get some descriptions created by me...
 You can adjust them as per your preference and submit your data — we'll generate a Resume for you in HTML/CSS and PDF format.`,"We didn't store your data due to sensitive informations like your mobile number or personal preferences (job title,certificates,experiences) — to ensure your privacy 🔏 and avoid misuse by third-party ads.",`want to suggest some improvements?? feel free to Mail us on nishantsingh.talk@gmail.com 
i hope we meet again 👋`,"Now process Next..."],[J,Z]=N.useState(0);N.useEffect(()=>{const D=new Fl("#Suggestion-typing-text",{strings:[B[J]],loop:!1,typeSpeed:40,showCursor:!0});if(J===0){const G=setTimeout(()=>{Z(1),Y(!0)},11e3);return()=>clearTimeout(G)}return()=>{D.destroy()}},[J]);const fe=[{title:"Choose a template that suits you best",key:"Template"},{title:"Begin with your contact details",key:"Contact Info"},{title:"Showcase your skills",key:"Skills"},{title:"Share your work experience",key:"Work Experience"},{title:"Highlight your top projects",key:"Projects"},{title:"Demonstrate your knowledge",key:"Education"},{title:"Add your achieved certifications",key:"Certificates"},{title:"Decribe about you",key:"Description"}],pe=()=>{_(!0);const D=new Set;for(let G=0;G<8;G++)D.add(G);S(D)},xe=D=>{(D.key==="Enter"||D.key=="Tab")&&(ze==="147895"?(Ht.success("Authorized",{duration:3e3,position:"top-right"}),K(!1),ke(!1),pe()):(Ht.error("Pin is incorrect. Authorization declined!",{duration:3e3,position:"top-right"}),K(!0)))},re=(D,G,Q,Le=null)=>{h(_n=>{const On={..._n};return Le!==null&&G!=null?On[D][Le][G]=Q:typeof On[D]=="object"&&!Array.isArray(On[D])&&G!=null&&(On[D][G]=Q),On})},ge=D=>{h(G=>({...G,[D]:[...G[D],D==="workExperience"?{jobTitle:"",companyName:"",WorkDuration:"",keyAchievements:""}:D==="projects"?{projectTitle:"",toolsTechUsed:""}:D==="education"?{institutionName:"",degreeName:"",graduationYear:"",currentSGPA:""}:{certificateName:"",courseDuration:"",providerName:""}]}))},We=()=>{const D={0:[p.selectedTemplate],1:[p.contactInfo.fullName,p.contactInfo.phoneNumber,p.contactInfo.emailAddress,p.contactInfo.linkedin,p.contactInfo.portfolio,p.contactInfo.jobTitle],2:[p.skills.hardSkills,p.skills.softSkills,p.contactInfo.Languages,p.contactInfo.Location],3:p.workExperience.length>0?p.workExperience.map(Q=>[Q.jobTitle,Q.companyName,Q.WorkDuration,Q.keyAchievements]):[[]],4:p.projects.length>0?p.projects.map(Q=>[Q.projectTitle,Q.toolsTechUsed]):[[]],5:p.education.length>0?p.education.map(Q=>[Q.institutionName,Q.degreeName,Q.graduationYear,Q.currentSGPA]):[[]],6:p.certificates.length>0?p.certificates.map(Q=>[Q.certificateName,Q.courseDuration,Q.providerName]):[[]],7:[p.Description.UserDescription]};if(!(n in D)){Ht.error("Invalid step provided.",{duration:3e3,position:"top-right"});return}const G=Q=>Q.every(Le=>typeof Le=="string"&&Le.trim()!=="");u(!1);for(let Q=0;Q<=n;Q++){const Le=D[Q].flat();if(Le.length>0&&!G(Le)&&!T){u(!0),Ht.error("You need to complete the details on this page and the previous one before moving ahead.",{duration:3e3,position:"top-right"}),setTimeout(()=>{u(!1)},4e3);return}}if(S(Q=>new Set(Q.add(n))),n<fe.length-1)o(Q=>Q+1);else{for(let Q=0;Q<=7;Q++){const Le=D[Q].flat();if(Le.length>0&&!G(Le)&&!T){Ht.error("Please complete all required fields before submitting.",{duration:3e3,position:"top-right"});return}}c("/Result",{state:{jsonData:T?f:p}})}},Tt=()=>{switch(n){case 1:return J==2&&Z(3),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl mb-4 pb-1 font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Contact Information"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx(pt,{label:"Full Name",placeholder:"Your name",value:T?f.contactInfo.fullName:p.contactInfo.fullName,onChange:D=>{T||re("contactInfo","fullName",D)},suggestions:["Aarav","Nishant","Amisha","Ankush","Vivaan","Aditya","Kumar","Vihaan","Arjun","Krishna","Aryan","Rohan","Kunal","Aniket","Rahul","Amit","Siddharth","Manish","Karthik","Chirag","Deepak","Gaurav","Harsh","Nikhil","Suresh","Rajesh","Vikram","Prakash","Dinesh","Ravi","Sagar","Abhishek","Yash","Sandeep","Naveen","Mahesh","Ajay","Dev","Ritesh","Sameer","Arvind","Bhavesh","Sumit","Varun","Shivam","Raghav","Parth","Mohan","Rajiv","Vikas","Tejas","Lakshya","Ashu","Jatin","Ashwin","Neha","Priya","Aisha","Ishita","Sanya","Pooja","Divya","Riya","Ananya","Shruti","Meera","Lata","Kavita","Rekha","Sneha","Tanvi","Bhavna","Swati","Preeti","Sonali","Aarohi","Simran","Radhika","Tanya","Nikita","Payal","Vidya","Trisha","Kriti","Aditi","Shalini","Lavanya","Manisha","Mitali","Rupali","Komal","Vaishnavi","Asmita","Prachi","Chaitali","Juhi","Mallika","Harshita","Bhumi","Surbhi","Alisha","Pallavi","Sourav","Bhawna","Arpita","Nidhi","Hari","Srinivas","Ramesh","Venkatesh","Madhavan","Surya","Kiran","Anirudh","Rajinikanth","Karthikeyan","Lakshmi","Radha","Sowmya","Keerthi","Anitha","Revathi","Sindhu","Divyashree","Shruthi","Meenakshi","Subham","Sourav","Shahid","Anupam","Dipankar","Tanmoy","Ritwik","Arindam","Prithwish","Moumita","Sanchari","Madhumita","Sutapa","Piyali","Laboni","Ipsita","Sumita","Gurpreet","Harpreet","Manpreet","Parminder","Baljit","Gagandeep","Satnam","Simranjeet","Kiranpreet","Jasleen","Navjot","Harleen","Ravneet","Ayaan","Zaid","Faizan","Rehan","Irfan","Armaan","Ayesha","Fatima","Zara","Sana","Nazma","Rabia","Jignesh","Dhaval","Hemant","Chintan","Bhavin","Aparna","Supriya","Rupali","Urmila","Mrunal","Sharma","Verma","Singh","Yadav","Gupta","Agarwal","Choudhary","Rana","Thakur","Mehta","Bansal","Goyal","Tripathi","Mishra","Tiwari","Pandey","Dubey","Dwivedi","Joshi","Jha","Pathak","Srivastava","Nigam","Saxena","Rawat","Bhatt","Rastogi","Kulshreshtha","Bhardwaj","Reddy","Naidu","Iyer","Iyengar","Menon","Pillai","Shetty","Rao","Nair","Gowda","Mudaliar","Krishnan","Murthy","Swamy","Chowdary","Kumar","Prasad","Raj","Subramanian","Das","Ghosh","Chakraborty","Mukherjee","Bhattacharya","Bandyopadhyay","Dutta","Sinha","Paul","Chatterjee","Sen","Roy","Bose","Deb","Pal","Sarkar","Mondal","Mitra","Patel","Desai","Modi","Rathod","Joshi","Shah","Rajput","Chauhan","Solanki","Prajapati","Parmar","Dave","Thakkar","Gohil","Barot","Suthar","Jadeja","Mahajan","Kaur","Singh","Dhillon","Sandhu","Sidhu","Grewal","Gill","Brar","Mann","Bajwa","Khan","Ansari","Ali","Sheikh","Qureshi","Syed","Farooqi","Mirza","Siddiqui","Hussain","Fernandes","D'Souza","Dias","Pereira","Rodrigues","George","Mathew","Joseph","Thomas","Abraham"],isPara:!0}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Phone Number"}),s.jsx("input",{type:"number",placeholder:"9658XX1459",className:`w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${w?"focus:ring-red-500":"focus:ring-blue-500"}  dark:bg-gray-800 dark:text-white dark:border-gray-600 
                  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,value:T?f.contactInfo.phoneNumber:p.contactInfo.phoneNumber,onChange:D=>{T||re("contactInfo","phoneNumber",D.target.value)},onBlur:D=>{const G=D.target.value;!/^\d{10}$/.test(G)&&!T?(Ht.error("Phone number must be of 10 digits",{duration:3e3,position:"top-right"}),k(!0),D.target.focus()):k(!1)}}),s.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${w?"bg-red-500":"bg-blue-500"}`})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Email Address"}),s.jsx("input",{type:"email",placeholder:"xyz231@gmail.com",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${L?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:T?f.contactInfo.emailAddress:p.contactInfo.emailAddress,onChange:D=>{T||re("contactInfo","emailAddress",D.target.value)},onBlur:D=>{const G=D.target.value;!/^\S+@\S+\.\S+\s*$/.test(G)&&!T?(Ht.error("Invalid email format!",{duration:3e3,position:"top-right"}),R(!0),D.target.focus()):R(!1)}}),s.jsx("div",{className:`ml-4 w-0 h-1 rounded-full transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${L?"bg-red-500":"bg-blue-500"}`})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"LinkedIn UserName"}),s.jsx("input",{type:"text",placeholder:"xyz231",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:T?f.contactInfo.linkedin:p.contactInfo.linkedin,onChange:D=>{T||re("contactInfo","linkedin",D.target.value)}}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Portfolio URL / Github UserName"}),s.jsx("input",{type:"text",placeholder:"Personal portfolio URL if have else add GitHub UserName",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:T?f.contactInfo.portfolio:p.contactInfo.portfolio,onChange:D=>{T||re("contactInfo","portfolio",D.target.value)}}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer w-full",children:s.jsx(pt,{label:"Job Title",placeholder:"Data Scientist",value:T?f.contactInfo.jobTitle:p.contactInfo.jobTitle,onChange:D=>{T||re("contactInfo","jobTitle",D),J==3&&Z(23)},suggestions:["Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer","Game Developer","VR/AR Developer","Metaverse Architect","AI Product Manager","AI Trainer","Generative AI Specialist","MLOps Engineer","Cloud Security Engineer","Cybersecurity Consultant","Penetration Tester","Mobile App Developer","iOS Developer","Android Developer","Embedded Systems Engineer","IoT Engineer","Hardware Engineer","Quantum Computing Researcher","Bioinformatics Scientist","Healthcare Data Analyst","Data Visualization Specialist","Creative Technologist","Influencer Marketing Manager","Customer Success Manager","Community Manager","Localization Specialist","E-commerce Manager","UX Researcher","Animation Artist","Video Editor","AI Content Creator","AI Policy Analyst","SaaS Product Manager","Security Engineer","Energy Analyst","Renewable Energy Consultant","Ethical Hacker","Cloud Consultant","Digital Strategist"],isMultiSuggestion:!1})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 2:return J==23&&Z(4),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 pb-1 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Skills"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Technical Skills",placeholder:"TensorFlow, NLP, Scikit-learn, Keras, Transformers, C/C++, Java, JavaScript, React",value:T?f.skills.hardSkills:p.skills.hardSkills,onChange:D=>{T||(J===4&&Z(5),re("skills","hardSkills",D))},suggestions:["Python","C/C++","LLM's","Matplotlib","Java","JavaScript","TypeScript","Golang","Rust","Kotlin","Swift","PHP","Ruby","MATLAB","TensorFlow","PyTorch","Scikit-learn","Keras","Hugging Face","OpenCV","XGBoost","LightGBM","FastAI","Transformers","Stable Diffusion","LangChain","HTML","CSS","Tailwind CSS","React","Next.js","Vue.js","Angular","Node.js","Express.js","Django","Flask","MySQL","PostgreSQL","MongoDB","SQLite","Redis","Cassandra","Firebase","Supabase","Terraform","Linux","Bash Scripting","Docker","Kubernetes","AWS","Azure","Google Cloud Platform (GCP)","Apache Spark","Hadoop","Apache Kafka","Airflow","Pandas","NumPy","SQL","ETL Pipelines","Computer Vision","NLP","Data Analysis","Data Visualization","Tableau","Power BI","REST API","GraphQL","gRPC","Microservices","System Design","CI/CD","Unit Testing","Integration Testing","Design Patterns","OOP","SOLID Principles","Blockchain","Smart Contracts","Solidity","Web3.js","IPFS","Cybersecurity Fundamentals","OWASP","JWT Authentication","OAuth 2.0","Prometheus","Grafana","ELK Stack (Elasticsearch,Logstash,Kibana)","Serverless Architecture","AWS Lambda","Firebase Functions","Figma","Adobe XD","Framer Motion","Three.js","WebGL","Jenkins","GitHub Actions","GitLab CI","CircleCI","BigQuery","Snowflake","Redshift","LangSmith","AutoML","Vertex AI","MLOps","MLflow","Weights & Biases (WandB)","Prompt Engineering","Vector Databases","Pinecone","ChromaDB","Agile Methodology","Scrum","Kanban","Socket.IO","WebSockets","Real-time Applications","MQTT Protocol","IoT Systems","Embedded Systems"]})}),s.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Soft Skills",placeholder:"TeamWork, Problem-Solving, Leadership, Critical thinking, Communication",value:T?f.skills.softSkills:p.skills.softSkills,onChange:D=>{T||(J===5&&Z(6),re("skills","softSkills",D))},suggestions:["Teamwork","Problem-Solving","Leadership","Critical Thinking","Communication","Adaptability","Creativity","Emotional Intelligence","Time Management","Conflict Resolution","Decision Making","Active Listening","Collaboration","Work Ethic","Empathy","Interpersonal Skills","Stress Management","Responsibility","Negotiation","Patience","Flexibility","Positive Attitude","Self-Motivation","Networking","Constructive Feedback","Attention to Detail","Cultural Awareness","Public Speaking","Persuasion","Growth Mindset","Self-Discipline","Accountability","Open-Mindedness","Conflict Management","Professionalism","Emotional Stability","Respectfulness","Customer Service","Strategic Thinking"]})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Languages you are familiar with",placeholder:"English, Hindi, French",value:T?f.contactInfo.Languages:p.contactInfo.Languages,onChange:D=>{T||(J===6&&Z(7),re("contactInfo","Languages",D))},suggestions:["Hindi","English","Spanish","Bengali","Portuguese","Russian","Japanese","Punjabi","Marathi","Telugu","French","German","Tamil","Urdu"]})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"YourLocation",placeholder:"Haridwar (UTTRAKHAND)",value:T?f.contactInfo.Location:p.contactInfo.Location,onChange:D=>{T||(J===7&&Z(8),re("contactInfo","Location",D))},suggestions:["Haridwar (Uttarakhand)","Dehradun (Uttarakhand)","Rishikesh (Uttarakhand)","Nainital (Uttarakhand)","Delhi","New Delhi","Amritsar (Punjab)","Ludhiana (Punjab)","Jalandhar (Punjab)","Patiala (Punjab)","Mohali (Punjab)","Chennai (Tamil Nadu)","Coimbatore (Tamil Nadu)","Madurai (Tamil Nadu)","Tiruchirappalli (Tamil Nadu)","Salem (Tamil Nadu)","Hyderabad (Telangana)","Secunderabad (Telangana)","Warangal (Telangana)","Bengaluru (Karnataka)","Mysuru (Karnataka)","Mangalore (Karnataka)","Hubli (Karnataka)","Pune (Maharashtra)","Mumbai (Maharashtra)","Nagpur (Maharashtra)","Ahmedabad (Gujarat)","Gandhinagar (Gujarat)","Surat (Gujarat)","Noida (Uttar Pradesh)","Lucknow (Uttar Pradesh)","Ghaziabad (Uttar Pradesh)","Gurugram (Haryana)","Faridabad (Haryana)","Panchkula (Haryana)","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],isMultiSuggestion:!1})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 3:return T?s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Work Experience"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job"}),f.workExperience.map((D,G)=>s.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[s.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Experience ",G+1]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Job Title"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.jobTitle}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Company Name"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.companyName}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Work Duration"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.WorkDuration}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Key Achievements"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.keyAchievements}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},G)),s.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Experiences because it is predefined data formate",children:"❌ Add Experience"})]}):(J===8&&Z(9),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Work Experience"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job"}),p.workExperience.map((D,G)=>s.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[s.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Experience ",G+1]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Job title",placeholder:"Data Scientist",value:D.jobTitle,onChange:Q=>re("workExperience","jobTitle",Q,G),suggestions:["Python engineer","Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer","Software Intern","Data Science Intern","Marketing Intern","HR Intern","Operations Intern","Sales Intern","Content Writing Intern","UI/UX Design Intern","Graphic Design Intern","Customer Support Executive","Technical Support Executive","Office Assistant","Data Entry Operator","Junior Software Developer","Trainee Engineer","Research Intern","Quality Assurance Intern","Product Intern","Junior Data Analyst","Telecaller","Field Sales Executive","Backend Support Staff","Campus Ambassador","Freelance Content Writer","Part-time Graphic Designer","Online Tutor","Lab Assistant","Clerical Staff","Receptionist","Front Desk Executive"],isMultiSuggestion:!1})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Company Name",placeholder:"Onlei Teach",value:D.companyName,onChange:Q=>re("workExperience","companyName",Q,G),suggestions:["OnleiTech","Rubico IT","Tata Consultancy Services","Infosys","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","Simplilearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"],isMultiSuggestion:!1})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Work Duration"}),s.jsx("input",{type:"text",placeholder:"Dec-2023 to Mar-2025",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${W?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:D.WorkDuration,onChange:Q=>re("workExperience","WorkDuration",Q.target.value,G),onBlur:Q=>{const Le=Q.target.value;/^\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*to\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*$/.test(Le)?M(!1):(Ht.error(`Invalid format!
 Use as Dec-2023 to Mar-2025`,{duration:3e3,position:"top-right"}),Q.target.focus(),M(!0))}}),s.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${W?"bg-red-500":"bg-blue-500"}`})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx(pt,{label:"Key Achievements",placeholder:"Learn to visualize patterns from data using matplotlib and Built several DL models",value:D.keyAchievements,onChange:Q=>{re("workExperience","keyAchievements",Q,G),J===9?Z(10):J===10&&G===1&&Z(11)},suggestions:["Education","Learning","Knowledge","Skills","Development","Growth","Discipline","Creativity","Curiosity","Critical","Thinking","Problem-Solving","Innovation","Empowerment","Potential","Opportunities","Success","Wisdom","Literacy","Training","Understanding","Mindset","Character","Focus","Dedication","Motivation","Scholarship","Study","Research","Exploration","Experience","Guidance","Curriculum","Subjects","Syllabus","Mentorship","Coaching","Academics","Assessment","Examination","Evaluation","Concepts","Projects","Presentation","Seminars","Workshops","Internship","Collaboration","Communication","Teamwork","Leadership","Career","Responsibility","Self-Study","Observation","Practical-Learning","Theoretical-Knowledge","Hardwork","Persistence","Vision","Goal-Setting","Time-Management","Experimentation","Exposure","System","Competence","Research-Skills","Interactive-Learning","Future-Ready","Holistic-Education","is","and","or","for","with","to","in","on","by","of","at","from","this","that","these","those","are","was","were","as","an","a","be","has","have","will","can","which","who","whose","where","when","how","it","its","also","but","if","so","then"],isPara:!0}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},G)),s.jsxs("button",{onClick:()=>ge("workExperience"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[s.jsx(is,{size:16})," Add Experience"]})]}));case 4:return T?s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4  pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Projects"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 3 projects which you did in your academics"}),f.projects.map((D,G)=>s.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[s.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Project ",G+1]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Project Title"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.projectTitle}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Tools/Tech Used"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.toolsTechUsed}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},G)),s.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Projects because it is predefined data formate",children:"❌ Add Project"})]}):((J===11||J===10)&&Z(12),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Projects"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 3 projects which you did in your academics"}),p.projects.map((D,G)=>s.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[s.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Project ",G+1]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Project Title"}),s.jsx("input",{type:"text",placeholder:"Transformer based translation model from scratch",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.projectTitle,onChange:Q=>re("projects","projectTitle",Q.target.value,G)}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Tools/Tech Used",placeholder:"Tensorflow, NumPy, Pandas, Matplotlib, Multi30k Dataset, ModelSubclassing",value:D.toolsTechUsed,onChange:Q=>{if(re("projects","toolsTechUsed",Q,G),J===12&&G===2){Z(13);return}},suggestions:["TensorFlow","WeasyPrint","WebSocket (Live Rendering Protocol)","LLM's","HTML/CSS","Keras","PyTorch","Scikit-learn","XGBoost","LightGBM","CatBoost","FastAI","NumPy","Pandas","Matplotlib","Seaborn","Plotly","Altair","Statsmodels","SciPy","NLTK","SpaCy","Transformers","Gensim","BERT","GPT","Word2Vec","TF-IDF","Llama","OpenCV","Pillow","Albumentations","MMDetection","Detectron2","YOLO","MediaPipe","MNIST Dataset","CIFAR-10","CIFAR-100","ImageNet","COCO Dataset","Multi30k Dataset","Human Parsing Dataset","HuggingFace Datasets","UCI Repository","Transfer Learning","Model Subclassing","Data Augmentation","Feature Engineering","Ensemble Learning","Hyperparameter Tuning","Cross Validation","Grid Search","Early Stopping","Apache Spark","Hadoop","Airflow","Kafka","Snowflake","BigQuery","ETL Pipelines","AWS","Azure","Google Cloud Platform","IBM Cloud","Oracle Cloud","Firebase","Docker","Kubernetes","Terraform","Jenkins","GitHub Actions","Prometheus","Grafana","MySQL","PostgreSQL","MongoDB","Redis","SQLite","Elasticsearch","Cassandra","Django","Flask","FastAPI","Express.js","Spring Boot","Node.js","React","Vue.js","Angular","Next.js","Tailwind CSS","Bootstrap","SASS","Material UI","Python","Java","Advanced C++","C++","C","JavaScript","TypeScript","Go","Rust","R","Julia","SQL","Git","GitHub","GitLab","Bitbucket","Tableau","Power BI","Looker","Google Data Studio","Jupyter Notebook","Google Colab","VS Code","Anaconda","PyCharm","Postman","REST API","GraphQL","gRPC","NGINX","Apache","PyTest","Selenium","Cypress","JUnit","Postman","BeautifulSoup","Scrapy","LangChain","Streamlit","Gradio","Dash","MLflow","Weights & Biases","HuggingFace Hub","OpenAI API","Google API","Cloud Functions"]})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},G)),s.jsxs("button",{onClick:()=>ge("projects"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[s.jsx(is,{size:16})," Add Project"]})]}));case 5:return T?s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Education"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)"}),f.education.map((D,G)=>s.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[s.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Education ",G+1]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Institution Name"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.institutionName}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Degree Name"}),s.jsx("input",{type:"text",placeholder:"Bachelor in computer application",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.degreeName}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Graduation duration"}),s.jsx("input",{type:"text",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${O?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:D.graduationYear}),s.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${O?"bg-red-500":"bg-blue-500"}`})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Current SGPA"}),s.jsx("input",{type:"text",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${U?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:D.currentSGPA}),s.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${U?"bg-red-500":"bg-blue-500"}`})]})]},G)),s.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Educations because it is predefined data formate",children:"❌ Add Education"})]}):((J===12||J===13)&&Z(14),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Education"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)"}),p.education.map((D,G)=>s.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[s.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Education ",G+1]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Institution Name",placeholder:"Haridwar University",value:D.institutionName,onChange:Q=>re("education","institutionName",Q,G),suggestions:["Haridwar University (HU)","Vidya Mandir Sector-5 BHEL (Haridwar)","Collage of Engineering roorkee (COER)","Roorkee institute of technology (RIT)","Phonix (Roorkee)","","IIT Gandhinagar","IIT Patna","IIT Bhubaneswar","IIT Mandi","IIT Jodhpur","IIT Ropar","IIT Palakkad","IIT Tirupati","IIT Dhanbad (ISM)","NIT Calicut","NIT Kurukshetra","NIT Silchar","NIT Hamirpur","NIT Jalandhar","NIT Durgapur","NIT Jaipur (MNIT)","NIT Nagpur (VNIT)","NIT Surat (SVNIT)","NIT Meghalaya","IIIT Allahabad","IIIT Pune","IIIT Lucknow","IIIT Bhubaneswar","IIIT Kancheepuram","IIIT Gwalior","IIITDM Jabalpur","IIIT Vadodara","Indian Statistical Institute (ISI)","Indian Institute of Information Technology Design & Manufacturing (IIITDM Kancheepuram)","Homi Bhabha National Institute","Indian Institute of Science Education and Research (IISER Pune)","IISER Mohali","IISER Kolkata","IISER Bhopal","IISER Thiruvananthapuram","IISER Tirupati","IISER Berhampur","Delhi University (DU)","Banaras Hindu University (BHU)","Jawaharlal Nehru University (JNU)","Jamia Millia Islamia","Aligarh Muslim University (AMU)","University of Calcutta","University of Mumbai","University of Hyderabad","Osmania University","Anna University","Visvesvaraya Technological University (VTU)","Panjab University","Kurukshetra University","Gujarat Technological University","Guru Nanak Dev University","Pondicherry University","Bharathiar University","Savitribai Phule Pune University (SPPU)","Rajiv Gandhi University of Health Sciences","Mangalore University","Symbiosis International University","Shiv Nadar University","Ashoka University","OP Jindal Global University","Amity University","Lovely Professional University (LPU)","Chandigarh University","MIT World Peace University","SRM Institute of Science and Technology","VIT Vellore","VIT Chennai","Kalinga Institute of Industrial Technology (KIIT)","Birla Institute of Technology Mesra (BIT Mesra)","Indian Institute of Foreign Trade (IIFT)","Narsee Monjee Institute of Management Studies (NMIMS)","Indian School of Business (ISB)","XLRI Jamshedpur","SP Jain Institute of Management and Research","IIM Ahmedabad","IIM Bangalore","IIM Calcutta","IIM Lucknow"],isMultiSuggestion:!1})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Degree Name",placeholder:"Batchelor in computer application (BCA)",value:D.degreeName,onChange:Q=>re("education","degreeName",Q,G),suggestions:["Bachelor of Science (B.Sc)","Primary/Secondary","Bachelor of Technology (B.Tech)","Bachelor of Engineering (B.E)","Bachelor of Arts (B.A)","Bachelor of Commerce (B.Com)","Bachelor of Computer Applications (BCA)","Bachelor of Business Administration (BBA)","Bachelor of Fine Arts (BFA)","Bachelor of Design (B.Des)","Bachelor of Architecture (B.Arch)","Bachelor of Pharmacy (B.Pharm)","Bachelor of Laws (LLB)","Bachelor of Hotel Management (BHM)","Bachelor of Social Work (BSW)","Bachelor of Education (B.Ed)","Bachelor of Physical Education (B.P.Ed)","Bachelor of Science in Nursing (B.Sc Nursing)","Master of Science (M.Sc)","Master of Technology (M.Tech)","Master of Engineering (M.E)","Master of Computer Applications (MCA)","Master of Arts (M.A)","Master of Commerce (M.Com)","Master of Business Administration (MBA)","Master of Fine Arts (MFA)","Master of Design (M.Des)","Master of Architecture (M.Arch)","Master of Pharmacy (M.Pharm)","Master of Laws (LLM)","Master of Social Work (MSW)","Master of Education (M.Ed)","Master of Physical Education (M.P.Ed)","Master of Science in Nursing (M.Sc Nursing)","Master of Public Health (MPH)","Master of Data Science (MDS)","Master of Finance (MFin)","Master of Management Studies (MMS)","Master of Computer Science (MCS)"],isMultiSuggestion:!1})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Graduation duration"}),s.jsx("input",{type:"text",placeholder:"2023 - 2026",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${O?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:D.graduationYear,onChange:Q=>{re("education","graduationYear",Q.target.value,G),J===14&&G===0&&Z(15)},onBlur:Q=>{const Le=Q.target.value;/^\s*(\d{4})\s*-\s*(\d{4})\s*$/.test(Le)?V(!1):(Ht.error(`Invalid format! 
Use as 2023-2026`,{duration:3e3,position:"top-right"}),Q.target.focus(),V(!0))}}),s.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${O?"bg-red-500":"bg-blue-500"}`})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Current SGPA"}),s.jsx("input",{type:"text",placeholder:"?? / 10",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${U?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:D.currentSGPA,onChange:Q=>{re("education","currentSGPA",Q.target.value,G),J===15&&G===1&&Z(16)},onBlur:Q=>{const Le=Q.target.value;/^\s*([0-9](\.\d{1})?|10(\.0)?)\s*$/.test(Le)?de(!1):(Ht.error(`Invalid format! 
Use as 7 or 8.3 and less then 10`,{duration:3e3,position:"top-right"}),Q.target.focus(),de(!0))}}),s.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${U?"bg-red-500":"bg-blue-500"}`})]})]},G)),s.jsxs("button",{onClick:()=>ge("education"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[s.jsx(is,{size:16})," Add Education"]})]}));case 6:return T?s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Certificates"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 5 high rated certificates"}),f.certificates.map((D,G)=>s.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[s.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Certificate ",G+1]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Certificate Name"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.certificateName}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Course Duration"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.courseDuration}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Provider Name"}),s.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.providerName}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]})]},G)),s.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Certificates because it is predefined data formate",children:"❌ Add Certificate"})]}):((J===16||J===15)&&Z(17),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Certificates"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 5 high rated certificates"}),p.certificates.map((D,G)=>s.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[s.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Certificate ",G+1]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Certificate Name"}),s.jsx("input",{type:"text",placeholder:"Azure AI Engineer Associate",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.certificateName,onChange:Q=>re("certificates","certificateName",Q.target.value,G)}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Course Duration"}),s.jsx("input",{type:"text",placeholder:"2 Month",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:D.courseDuration,onChange:Q=>re("certificates","courseDuration",Q.target.value,G)}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Provider Name",placeholder:"Microsoft",value:D.providerName,onChange:Q=>{re("certificates","providerName",Q,G),J===17&&G===0?Z(18):J===18&&G===4&&Z(19)},suggestions:["OnleiTech","CadPlanet","Rubico IT","Tata Consultancy Services","Infosys","NIIT Technologies","IIT Bombay","IIT Madras","IIT Kharagpur","IIT Bombay","IIT Madras","IIT Kanpur","IIT Delhi","IIT Guwahati","IIT Roorkee","IIT Ropar","IIT Bhubaneswar","IIT Gandhinagar","IIT Hyderabad","IIT Jodhpur","IIT Patna","IIT Indore","IIT Mandi","IIT (BHU) Varanasi","IIT Palakkad","IIT Tirupati","IIT Dhanbad","IIT Bhilai","IIT Goa","IIT Jammu","IIT Dharwad","NIT Warangal","NIT Tiruchirappalli","NIT Surathkal","NIT Calicut","NIT Rourkela","NIT Kurukshetra","NIT Durgapur","NIT Silchar","NIT Jaipur","NIT Allahabad","NIT Jalandhar","NIT Bhopal","NIT Nagpur","NIT Patna","NIT Raipur","NIT Agartala","NIT Srinagar","NIT Meghalaya","NIT Goa","NIT Delhi","NIT Puducherry","NIT Manipur","NIT Mizoram","NIT Nagaland","NIT Arunachal Pradesh","NIT Sikkim","NIT Uttarakhand","NIT Hamirpur","NIT Jamshedpur","NIT Andhra Pradesh","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","NIIT Technologies","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","SimpliLearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"],isMultiSuggestion:!1})}),s.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]})]},G)),s.jsxs("button",{onClick:()=>ge("certificates"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[s.jsx(is,{size:16})," Add Certificate"]})]}));case 7:if(T)return s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Description"}),s.jsx("p",{className:"text-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Consider to edit them more and make professional"}),s.jsxs("div",{className:"space-y-2 pt-16 pb-16",children:[s.jsx("textarea",{placeholder:"Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle.",className:"w-full min-h-[145px] px-3 py-2 border rounded resize-none peer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:f.Description.UserDescription}),s.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});if(J===18||J===19){Z(20);const D=setTimeout(()=>{Z(21)},2e4),G=setTimeout(()=>{Z(22)},4e4);return()=>{clearTimeout(D),clearTimeout(G)}}return s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Description"}),s.jsx("p",{className:"text-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Consider to edit them more and make professional"}),s.jsxs("div",{className:"space-y-2 pt-8 pb-16",children:[s.jsx("div",{className:"peer",children:s.jsx(pt,{label:"Resume Description",placeholder:"Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle.",value:p.Description.UserDescription,onChange:D=>re("Description","UserDescription",D),suggestions:v,isTextArea:!0,isMultiSuggestion:!1})}),s.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 0:return T?s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Choose Template"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"We will frequently add more template designs to provide more resume options."}),s.jsx("div",{className:"grid grid-cols-2 gap-5",children:[1,2,3,4,5,6].map(D=>s.jsxs("div",{onClick:()=>m(G=>({...G,selectedTemplate:String(D)})),className:`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md hover:scale-95 dark:shadow-gray-600  ${f.selectedTemplate===String(D)?"border-blue-600 bg-blue-50 dark:bg-slate-800":"dark:border-gray-700"}`,children:[s.jsx("img",{src:`/Resume-Builder/Temp/temp${D}.png`,alt:`Template ${D}`,className:"w-full h-auto rounded-lg dark:filter dark:brightness-90"}),oe?s.jsx("p",{className:"text-center mt-2",children:D}):s.jsx("p",{className:"text-center mt-2 dark:text-gray-200",children:C[D-1]})]},D))})]}):s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Choose Template"}),s.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"We will frequently add more template designs to provide more robust options."}),s.jsx("div",{className:"grid grid-cols-2 gap-5",children:[1,2,3,4,5,6].map(D=>s.jsxs("div",{onClick:()=>{if(ne){h(Q=>({...Q,selectedTemplate:String(D)})),J===2&&Z(1);const G=setTimeout(()=>{(J===1||J===2)&&Z(2)},50);return()=>clearTimeout(G)}},className:`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md hover:scale-95 dark:shadow-gray-600  ${p.selectedTemplate===String(D)?"border-blue-600 bg-blue-50 dark:bg-slate-800":"dark:border-gray-700"}`,children:[s.jsx("img",{src:`/Resume-Builder/Temp/temp${D}.png`,alt:`Template ${D}`,className:"w-full h-auto rounded-lg dark:filter dark:brightness-90"}),oe?s.jsx("p",{className:"text-center mt-2",children:D}):s.jsx("p",{className:"text-center mt-2 dark:text-gray-200",children:C[D-1]})]},D))})]});default:return null}};return s.jsxs("div",{className:"flex min-h-screen bg-gray-100 dark:bg-slate-900",children:[s.jsxs("div",{className:`fixed top-0 left-0 h-full bg-white border-r shadow-md hover:shadow-xl p-0 lg:p-4 transition-all duration-300 ease-in-out
        ${oe?"w-64":"w-0"} lg:w-64 dark:border-r-slate-800 dark:bg-slate-800 z-50`,children:[s.jsx("button",{onClick:()=>{we(!oe),Ne&&Ce(!Ne)},className:"absolute top-6 pl-7 lg:hidden p-3 rounded-r-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300",children:oe?s.jsx(Bf,{size:20}):s.jsx(Gx,{size:20})}),s.jsxs("div",{className:`${oe||"hidden lg:block"}`,children:[s.jsx("h1",{className:"text-2xl font-bold pt-20 lg:pt-4 text-center text-blue-800 dark:text-amber-300 cursor-pointer",title:"Details user have to fill",children:"Sections"}),s.jsx("div",{className:"w-[30%] h-1 bg-blue-900 mb-6 mx-auto mt-1 rounded dark:bg-amber-400"}),s.jsx("div",{className:"space-y-4 px-2",children:fe.map((D,G)=>s.jsxs("div",{onClick:()=>o(G),title:D.title,className:`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-transform duration-400 hover:scale-105
                  ${n===G?"bg-blue-50 text-blue-600 dark:bg-slate-700":""}
                  ${E.has(G)?"text-green-600 dark:text-amber-200":"text-gray-600 dark:text-zinc-200"}
                `,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ease-in-out
                    ${E.has(G)?"bg-white border-green-600 dark:border-amber-300 dark:bg-gray-800":"border-gray-400 dark:border-gray-400"}
                  `,children:E.has(G)?s.jsx($x,{size:14,className:"transition-all duration-300 scale-110 opacity-100"}):s.jsx("span",{className:"text-sm transition-all duration-300 opacity-80",children:G+1})}),s.jsx("span",{className:"text-sm font-medium",children:D.key})]},G))}),s.jsxs("div",{children:[s.jsx("h2",{className:"space-y-3 mx-4 md:mx-0 mt-4 p-2 flex items-center justify-center gap-3 rounded-lg cursor-pointer transition-transform duration-400 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:text-zinc-300 dark:bg-slate-700/50 dark:hover:bg-slate-700/95",title:"It is only for Test & Present purpose. with authorized access",onClick:()=>{ke(!He)},children:"Example Processing"}),He&&s.jsx("div",{className:"mx-4 md:mx-0 dark:bg-gray-800 rounded-lg",children:s.jsx("input",{type:"password",className:`w-full mt-2 p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white ${je?"border-red-500 dark:border-red-400 focus:ring-red-500":"border-blue-500 dark:border-blue-400 focus:ring-blue-500"} focus:outline-none focus:ring-2`,value:ze,onChange:D=>_e(D.target.value),onKeyDown:xe,placeholder:"Enter PIN"})})]})]})]}),s.jsx("div",{className:`flex-1 pt-20 pr-3 pl-1 lg:py-8 transition-all duration-300 ${oe?"ml-60":"ml-2"} lg:ml-0`,children:s.jsxs("div",{className:"md:max-w-[720px] md:mr-72 lg:ml-64 lg:max-w-[700px] xl:max-w-full xl:px-24 2xl:max-w-3xl mx-auto",children:[Tt(),s.jsx("div",{className:"mt-8 flex justify-end",children:s.jsxs("button",{title:i?"Don't cheat! Fill all details for a good resume":"Fill all details and continue to next page",onClick:We,className:`flex items-center gap-2 px-6 py-2 mt-5 text-white rounded-full transition-all duration-300 ${i?"bg-red-500 hover:bg-red-600 scale-105 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:[n===fe.length-1?"Submit":"Next",s.jsx("span",{className:`transition-all duration-300 ${i?"scale-110 rotate-90":"scale-100 rotate-0"}`,children:i?s.jsx("i",{className:"fas fa-times-circle"}):s.jsx(Fx,{size:16})})]})})]})}),s.jsxs("div",{className:`fixed top-0 right-0 h-full bg-white border-l shadow-md hover:shadow-xl p-0 md:p-4 transition-all duration-300 ease-in-out
        ${Ne?"w-64":"w-0"} md:w-72 dark:border-l-slate-800 dark:bg-slate-800`,children:[s.jsx("button",{onClick:()=>{Ce(!Ne),oe&&we(!oe)},className:"absolute top-6 mr-0 right-0 pr-8 md:hidden p-3 rounded-l-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300",children:Ne?s.jsx(Bf,{size:20}):s.jsx(Hx,{size:20})}),s.jsxs("div",{className:`${Ne||"hidden md:block"}`,children:[s.jsx("h1",{className:"text-2xl font-bold pt-20 md:pt-4 text-center text-blue-800 dark:text-amber-300 cursor-pointer",title:"Live preview. how your resume looks",children:"Preview"}),s.jsx("div",{className:"w-[25%] h-1 bg-blue-900 mb-4 mx-auto mt-1 rounded dark:bg-amber-400"}),s.jsx("div",{className:"px-2 w-[250px] ml-3 h-[400px] overflow-hidden bg-white dark:bg-slate-800 ",children:s.jsx("div",{className:"scale-[0.24] origin-top-left flex ",children:(T?f.selectedTemplate==1:p.selectedTemplate==1)?s.jsx(ru,{jsonData:T?f:p}):(T?f.selectedTemplate==2:p.selectedTemplate==2)?s.jsx(Kp,{jsonData:T?f:p}):(T?f.selectedTemplate==3:p.selectedTemplate==3)?s.jsx(Qp,{jsonData:T?f:p}):(T?f.selectedTemplate==4:p.selectedTemplate==4)?s.jsx(Yp,{jsonData:T?f:p}):(T?f.selectedTemplate==5:p.selectedTemplate==5)?s.jsx(Jp,{jsonData:T?f:p}):(T?f.selectedTemplate==6:p.selectedTemplate==6)?s.jsx(Xp,{jsonData:T?f:p}):s.jsx("div",{})})}),s.jsxs("div",{className:`whitespace-pre-line dark:text-slate-300 p-1 ${T?"hidden":"block"}`,children:[s.jsxs("div",{className:"flex items-center mb-3",children:[s.jsx("img",{src:"https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true",alt:"N",width:"40",height:"40"}),s.jsxs("div",{className:"ml-2",children:[s.jsx("span",{className:"font-semibold pb-[2px]",children:"Suggestion Bot"}),s.jsx("div",{className:"w-[75%] h-[3px] bg-blue-800 mx-auto mt-1 rounded dark:bg-amber-500"})]})]}),s.jsx("span",{id:"Suggestion-typing-text",className:"text-lime-700 dark:text-lime-400"})]})]})]})]})},O1=()=>{const[n,o]=N.useState("preparing"),[i,u]=N.useState(0),[c,f]=N.useState(""),[m,p]=N.useState({pdf:!1,html:!1}),h=Ln(),{jsonData:x}=h.state||{},v=(x==null?void 0:x.selectedTemplate)||"1",E=3,S=1e4;N.useEffect(()=>{if(!x){o("error"),f("No resume data found. Please go back and enter your information.");return}setTimeout(()=>{o("waking"),w()},1e3)},[x]);const w=async()=>{try{const T=document.getElementById("capture-content");if(!T)throw new Error("Content element not found. Template may not be rendered correctly.");const _=T.innerHTML;if(!_.trim())throw new Error("Template content is empty. Please check the template rendering.");console.log("Template HTML captured successfully");const M=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Designed by BRAVERS</title>
          <style>
            ${v==="1"?N1:v=="2"?E1:v=="3"?P1:v=="4"?L1:v=="5"?R1:B1}
          </style>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
          <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">
        </head>
        <body>${_}</body>
        </html>
      `;console.log("Sending request to generate PDF..."),o("processing");try{const O=await fetch("https://html2pdfviabravers.onrender.com/generate-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({html:M})});if(!O.ok)throw new Error(`Server responded with status: ${O.status}`);const V=await O.blob(),U=window.URL.createObjectURL(V),de=document.createElement("a");de.href=U,de.download="Resume.pdf",de.click(),window.URL.revokeObjectURL(U),console.log("PDF Downloaded Successfully"),p(Ce=>({...Ce,pdf:!0}));const oe=new Blob([M],{type:"text/html"}),we=window.URL.createObjectURL(oe),Ne=document.createElement("a");Ne.href=we,Ne.download="Resume.html",Ne.click(),window.URL.revokeObjectURL(we),console.log("HTML Downloaded Successfully"),p(Ce=>({...Ce,html:!0})),o("completed")}catch(O){console.error("API Error:",O),i<E?(u(V=>V+1),f(`Request failed: ${O.message}. Retrying in ${S/1e3} seconds...`),setTimeout(()=>{o("waking"),w()},S)):(f(`Failed after ${E} attempts: ${O.message}`),o("error"))}}catch(T){console.error("Error:",T),f(T.message||"An unknown error occurred"),o("error")}},k=()=>{switch(v){case"1":return s.jsx(ru,{jsonData:x});case"2":return s.jsx(Kp,{jsonData:x});case"3":return s.jsx(Qp,{jsonData:x});case"4":return s.jsx(Yp,{jsonData:x});case"5":return s.jsx(Jp,{jsonData:x});case"6":return s.jsx(Xp,{jsonData:x});default:return s.jsx(ru,{jsonData:x})}},L=()=>{switch(n){case"preparing":return"Preparing your resume...";case"waking":return`Waking up our servers... ${i>0?`(Attempt ${i+1} of ${E+1})`:""}`;case"processing":return"Generating PDF...";case"completed":return`Your resume ${m.pdf?"(PDF)":""} ${m.html?"(HTML)":""} has been downloaded!`;default:return"Designing..."}},R=()=>{u(0),f(""),o("preparing"),p({pdf:!1,html:!1}),setTimeout(()=>{o("waking"),w()},1e3)};return s.jsxs("div",{className:"flex items-center justify-center h-screen w-screen text-center transition-colors duration-300 bg-gray-100 dark:bg-slate-800",children:[s.jsx("div",{id:"capture-content",className:"scale-[0.4] text-left",style:{visibility:n==="completed"?"visible":"hidden",position:n==="completed"?"relative":"absolute"},children:x&&k()}),n!=="completed"&&n!=="error"?s.jsxs("div",{className:"relative w-[220px] h-[320px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2a2a2a] transition-all duration-300",children:[s.jsx("div",{className:"absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-[#3449ff] dark:bg-gray-200 opacity-100 filter blur-[8px] animate-blob-bounce transition-colors duration-300"}),s.jsxs("div",{className:"absolute top-[5px] left-[5px] w-[210px] h-[310px] bg-white dark:bg-slate-950 backdrop-blur-[24px] rounded-[10px] outline outline-2 outline-white dark:outline-gray-600 flex flex-col items-center justify-center text-center text-[14px] text-[#3449ff] dark:text-blue-300 font-bold p-[10px] transition-colors duration-300",children:[s.jsx("p",{title:"Server sometimes get sleep. waking them up may take few seconds. please wait",children:L()}),n==="waking"&&s.jsx("p",{className:"text-xs mt-4 text-gray-500 dark:text-gray-400 max-w-[180px]",children:"Our server might be waking up from sleep mode. This can take up to a minute."}),c&&n!=="error"&&s.jsx("p",{className:"text-xs mt-4 text-yellow-600 dark:text-yellow-400 max-w-[180px]",children:c})]})]}):n==="error"?s.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md",children:[s.jsx("strong",{className:"font-bold",children:"Error:"}),s.jsxs("span",{className:"block sm:inline",children:[" ",c]}),s.jsx("button",{className:"mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:R,children:"Try Again"})]}):s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 ml- py-3 rounded relative max-w-md mb-4",children:[s.jsx("strong",{className:"font-bold",children:"Success!"}),s.jsxs("span",{className:"block sm:inline",children:[" Your resume has been successfully generated and downloaded. Believe me your ATS score will be ",s.jsx("b",{children:"85+"})]})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:R,children:"Download Again"}),s.jsx("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",onClick:()=>window.history.back(),children:"Back to Editor"})]})]})]})};var Zp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wf=le.createContext&&le.createContext(Zp),$1=["attr","size","title"];function z1(n,o){if(n==null)return{};var i=F1(n,o),u,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(c=0;c<f.length;c++)u=f[c],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(n,u)&&(i[u]=n[u])}return i}function F1(n,o){if(n==null)return{};var i={};for(var u in n)if(Object.prototype.hasOwnProperty.call(n,u)){if(o.indexOf(u)>=0)continue;i[u]=n[u]}return i}function js(){return js=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},js.apply(this,arguments)}function Gf(n,o){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);o&&(u=u.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),i.push.apply(i,u)}return i}function Ns(n){for(var o=1;o<arguments.length;o++){var i=arguments[o]!=null?arguments[o]:{};o%2?Gf(Object(i),!0).forEach(function(u){U1(n,u,i[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Gf(Object(i)).forEach(function(u){Object.defineProperty(n,u,Object.getOwnPropertyDescriptor(i,u))})}return n}function U1(n,o,i){return o=H1(o),o in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,n}function H1(n){var o=W1(n,"string");return typeof o=="symbol"?o:o+""}function W1(n,o){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var u=i.call(n,o||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function qp(n){return n&&n.map((o,i)=>le.createElement(o.tag,Ns({key:i},o.attr),qp(o.child)))}function Bs(n){return o=>le.createElement(G1,js({attr:Ns({},n.attr)},o),qp(n.child))}function G1(n){var o=i=>{var{attr:u,size:c,title:f}=n,m=z1(n,$1),p=c||i.size||"1em",h;return i.className&&(h=i.className),n.className&&(h=(h?h+" ":"")+n.className),le.createElement("svg",js({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,u,m,{className:h,style:Ns(Ns({color:n.color||i.color},i.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),f&&le.createElement("title",null,f),n.children)};return Wf!==void 0?le.createElement(Wf.Consumer,null,i=>o(i)):o(Zp)}function V1(n){return Bs({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function K1(n){return Bs({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(n)}function Q1(n){return Bs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function Y1(n){return Bs({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(n)}function os({content:n,message:o,linkText:i,linkUrl:u}){const[c,f]=N.useState(!1),m=p=>typeof p=="string"&&(p.startsWith("resume-builder")||/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(p));return s.jsxs("div",{className:"relative inline-block",children:[s.jsx("div",{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:m(n)?s.jsx("img",{src:n,alt:"Logo",className:"w-7 h-7 ml-3 md:ml-4 rounded-full"}):s.jsx("span",{className:"cursor-pointer text-blue-500 font-bold ml-2",children:n})}),c&&s.jsxs("div",{className:`absolute top-1/2 -translate-y-1/2 bg-gray-600/95 text-white text-sm px-4 py-4 rounded-md 
          ${Array.isArray(o)&&o.length>1?"w-[440px] left-[30px]":"w-72 left-[50px]"} text-left`,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[Array.isArray(o)&&o.length>1?s.jsx("ul",{className:"list-disc list-inside",children:o.map((p,h)=>s.jsx("li",{children:p},h))}):s.jsx("p",{children:Array.isArray(o)?o[0]:o}),i&&u&&s.jsx("a",{href:u,target:"_blank",className:"text-blue-400 no-underline hover:underline",children:s.jsx("b",{children:i})})]})]})}const J1=[{name:"Nishant Singh",role:"Handled Frontend and backend processing",github:"Nishantksingh0",gitLink:"https://github.com/NishantkSingh0",linkedin:"Nishantksingh1",linLink:"https://www.linkedin.com/in/nishantksingh1",portfolio:"Nishantksingh0",prtLink:"https://nishantksingh0.github.io",email:"nishantsingh.talk",emailLink:"mailto:nishantsingh.talk@gmail.com"},{name:"Amisha Pal",role:"Handled Designing All Templates",github:"Amisha-Pal",gitLink:"https://github.com/Amisha-Pal",linkedin:"amisha-pal-70",linLink:"https://www.linkedin.com/in/amisha-pal-703493328/",portfolio:"Amisha.dev",prtLink:"",email:"amishapal992",emailLink:"mailto:amishapal9927@gmail.com"},{name:"Ankush Kumar",role:"Handled Written Works of project",github:"Ankush2011",gitLink:"https://github.com/Ankush201109",linkedin:"Ankush-kumar-5",linLink:"https://www.linkedin.com/in/ankush-kumar-505318231",portfolio:"Ankush.dev",prtLink:"",email:"akbahot2004",emailLink:"mailto:akbahot2004@gmail.com"}];function X1(){return s.jsxs("div",{className:"min-h-screen text-gray-100 py-12 px-6 flex flex-col items-center dark:bg-slate-900",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-extrabold text-center mb-2 text-gray-500 md:text-3xl dark:text-amber-300",children:[s.jsx("i",{className:"fas fa-user-alt"})," About Us"]}),s.jsx("div",{className:"w-[80%] h-1 bg-gray-600 mx-auto mb-10 mt-1 rounded dark:bg-amber-400"})]}),s.jsx("div",{className:"w-full max-w-4xl flex flex-col space-y-6",children:J1.map((n,o)=>s.jsxs("div",{className:"w-full bg-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-slate-800",style:{minWidth:"33%"},children:[s.jsx("div",{className:"flex items-center bg-blue-600 text-xl font-bold p-3 rounded-2xl mb-3",children:s.jsxs("div",{className:"flex items-center justify-center flex-1",children:[n.name,n.name==="Nishant Singh"&&s.jsx(os,{content:"/Resume-Builder/BinaryBunch.jpeg",message:"Have secured 3rd rank in University 24hr Hackathon (TechWizard) on",linkText:"Proctoring System",linkUrl:"https://github.com/NishantkSingh0/Proctoring-System"})]})}),s.jsxs("p",{className:"text-green-700 mb-6 font-semibold dark:text-blue-300",children:[n.role,n.name==="Nishant Singh"&&s.jsx(os,{content:" . . . ",message:["Developed and integrated frontend and backend systems.","Proposed innovative project ideas with structured workflows.","Researched high-rated resumes for optimization.","Analyzed ATS algorithms for effective resume selection.","Handled suggestion items and integrate with UI"]}),n.name==="Amisha Pal"&&s.jsx(os,{content:" . . . ",message:["Designed all templates in HTML/CSS","Researched designs and innovation ideas","Gived optimization idea for various modules","Researched other Resume builder websites and suggested improvemnets"]}),n.name==="Ankush Kumar"&&s.jsx(os,{content:" . . . ",message:["Managed All written works (Synopsis, Project file)","Designed PPT for presentation","Researched other Resume builder websites and suggested improvemnets"]})]}),s.jsxs("div",{className:"flex flex-col items-center space-y-4 px-4 md:px-32",children:[s.jsxs("div",{className:"flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10",children:[s.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[s.jsx(V1,{className:"text-lg"}),s.jsx("a",{href:n.gitLink,onClick:i=>{n.gitLink||i.preventDefault()},title:n.gitLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.github})]}),s.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[s.jsx(K1,{className:"text-lg"}),s.jsx("a",{href:n.linLink,onClick:i=>{n.linLink||i.preventDefault()},title:n.linLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.linkedin})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10",children:[s.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[s.jsx(Y1,{className:"text-lg"}),s.jsx("a",{href:n.prtLink,onClick:i=>{n.prtLink||i.preventDefault()},title:n.prtLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.portfolio})]}),s.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[s.jsx(Q1,{className:"text-lg"}),s.jsx("a",{href:n.emailLink,onClick:i=>{n.emailLink||i.preventDefault()},title:n.emailLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.email})]})]})]})]},o))})]})}const Z1=()=>{const[n,o]=N.useState(""),[i,u]=N.useState(""),c=async()=>{try{const p=await(await fetch("https://your-api.com/verify-mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:i})})).json();alert(p.message||"Verification successful!")}catch{alert("Verification failed! Please try again.")}},f=()=>{o(""),u("")};return s.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:s.jsxs("div",{className:"bg-white p-10 shadow-xl rounded-lg w-96 text-center border border-gray-300",children:[s.jsx("h2",{className:"text-2xl font-semibold mb-6 text-gray-700",children:"Google Mail Verification"}),s.jsx("input",{type:"email",placeholder:"Enter your email",value:n,onChange:m=>o(m.target.value),className:"w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),s.jsx("input",{type:"password",placeholder:"Enter your password",value:i,onChange:m=>u(m.target.value),className:"w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("button",{onClick:c,className:"bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700",children:"Continue"}),s.jsx("button",{onClick:f,className:"bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-600",children:"Reset"})]})]})})};function q1(){const n=["","Simpler & Structured","Linear & Classic","Colourful & Attractive","Colourful & Highly Designed","Simpler & Linear","Highly Simpler & Classic"],o=[{img:"/Resume-Builder/Temp/temp1.png",title:n[1],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T1.html",templateLink:"https://nishantksingh0.github.io/Generated-Templates/T1"},{img:"/Resume-Builder/Temp/temp2.png",title:n[2],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T2.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T2"},{img:"/Resume-Builder/Temp/temp3.png",title:n[3],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T3.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T3"},{img:"/Resume-Builder/Temp/temp4.png",title:n[4],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T4.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T4"},{img:"/Resume-Builder/Temp/temp5.png",title:n[5],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T5.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T5"},{img:"/Resume-Builder/Temp/temp6.png",title:n[6],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T7.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T7"},{img:"/Resume-Builder/Temp/temp8.png",title:n[4],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T8.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T8"},{img:"/Resume-Builder/Temp/temp9.png",title:n[5],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T9.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T9"},{img:"/Resume-Builder/Temp/temp10.png",title:n[7],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T10.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T10"},{img:"/Resume-Builder/Temp/temp11.png",title:n[2],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T11.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T11"}];return s.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 p-4",children:[s.jsx("h3",{className:"mt-10 mb-2 text-3xl text-gray-600 dark:text-slate-200 font-bold",children:"Generated Templates"}),s.jsx("h5",{className:"mb-4 text-sm md:text-base font-semibold text-gray-500",children:"Note: Consider to View Templates only on desktop mode"}),s.jsx("div",{className:"w-[200px] h-1 bg-blue-700 mb-16 mx-auto mt-1 rounded dark:bg-blue-500"}),s.jsx("div",{className:"grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-2 max-w-5xl mx-auto place-items-center",children:o.map((i,u)=>s.jsxs("div",{className:"group relative mb-6 bg-white dark:bg-slate-700 hover:shadow-2xl hover:scale-105 transition-transform border-2 dark:shadow-[0_-4px_10px_rgba(0,0,0,0.1)]  border-gray-300 dark:border-gray-700 dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-lg overflow-hidden w-40 sm:w-44 md:w-48 lg:w-64 xl:w-72 flex flex-col items-center",children:[s.jsx("img",{src:i.img,alt:i.title,className:"w-full h-auto object-cover dark:opacity-80 dark:brightness-80 dark:contrast-90"}),s.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 dark:bg-slate-700 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-transform flex space justify-between flex-col items-center",children:s.jsx("div",{className:"flex space-x-4",children:s.jsxs("div",{className:"flex space-x-2",children:[s.jsx("a",{href:i.codeLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md md:hidden",target:"_blank",children:"Code"}),s.jsx("a",{href:i.templateLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md md:hidden",target:"_blank",children:"View"}),s.jsx("a",{href:i.codeLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md hidden md:block",target:"_blank",children:"View Code"}),s.jsx("a",{href:i.templateLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md hidden md:block",target:"_blank",children:"View Resume"})]})})}),s.jsxs("div",{className:"font-semibold text-gray-600 dark:text-gray-200 text-xs pb-2 pt-1 md:text-base",children:[" ",i.title," "]})]},u))})]})}const ev=()=>s.jsx("div",{className:"flex justify-center items-center h-screen dark:bg-black",children:s.jsx("img",{src:"https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true",alt:"Wait a while 😐",title:"Wait a while 😐. Content is loading",className:"w-15 h-15 animate-step-rotate"})}),tv=()=>{const{isDark:n}=N.useContext(Ts),[o,i]=N.useState(!0);return N.useEffect(()=>{n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[n]),N.useEffect(()=>{const u=setTimeout(()=>{i(!1)},2e3);return()=>clearTimeout(u)},[]),o?s.jsx(ev,{}):s.jsxs("div",{children:[s.jsx(_y,{}),s.jsxs(zg,{children:[s.jsx(Zn,{path:"/",element:s.jsx(Rx,{})}),s.jsx(Zn,{path:"/AboutUs",element:s.jsx(X1,{})}),s.jsx(Zn,{path:"/VarifyMail",element:s.jsx(Z1,{})}),s.jsx(Zn,{path:"/GetInfo",element:s.jsx(_1,{})}),s.jsx(Zn,{path:"/Result",element:s.jsx(O1,{})}),s.jsx(Zn,{path:"/ViewTemplates",element:s.jsx(q1,{})})]})]})};C0.createRoot(document.getElementById("root")).render(s.jsx(le.StrictMode,{children:s.jsx(c0,{children:s.jsx(E0,{children:s.jsx(tv,{})})})}));
