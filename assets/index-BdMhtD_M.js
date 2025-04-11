(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function Gf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bl={exports:{}},Ni={},wl={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function Qm(){if(tf)return ge;tf=1;var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=E&&C[E]||C["@@iterator"],typeof C=="function"?C:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,M={};function P(C,L,X){this.props=C,this.context=L,this.refs=M,this.updater=X||w}P.prototype.isReactComponent={},P.prototype.setState=function(C,L){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,L,"setState")},P.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function D(){}D.prototype=P.prototype;function B(C,L,X){this.props=C,this.context=L,this.refs=M,this.updater=X||w}var W=B.prototype=new D;W.constructor=B,k(W,P.prototype),W.isPureReactComponent=!0;var R=Array.isArray,O=Object.prototype.hasOwnProperty,G={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function ie(C,L,X){var ce,me={},fe=null,re=null;if(L!=null)for(ce in L.ref!==void 0&&(re=L.ref),L.key!==void 0&&(fe=""+L.key),L)O.call(L,ce)&&!H.hasOwnProperty(ce)&&(me[ce]=L[ce]);var pe=arguments.length-2;if(pe===1)me.children=X;else if(1<pe){for(var xe=Array(pe),We=0;We<pe;We++)xe[We]=arguments[We+2];me.children=xe}if(C&&C.defaultProps)for(ce in pe=C.defaultProps,pe)me[ce]===void 0&&(me[ce]=pe[ce]);return{$$typeof:n,type:C,key:fe,ref:re,props:me,_owner:G.current}}function de(C,L){return{$$typeof:n,type:C.type,key:L,ref:C.ref,props:C.props,_owner:C._owner}}function ye(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function Ae(C){var L={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(X){return L[X]})}var Ne=/\/+/g;function Fe(C,L){return typeof C=="object"&&C!==null&&C.key!=null?Ae(""+C.key):L.toString(36)}function je(C,L,X,ce,me){var fe=typeof C;(fe==="undefined"||fe==="boolean")&&(C=null);var re=!1;if(C===null)re=!0;else switch(fe){case"string":case"number":re=!0;break;case"object":switch(C.$$typeof){case n:case o:re=!0}}if(re)return re=C,me=me(re),C=ce===""?"."+Fe(re,0):ce,R(me)?(X="",C!=null&&(X=C.replace(Ne,"$&/")+"/"),je(me,L,X,"",function(We){return We})):me!=null&&(ye(me)&&(me=de(me,X+(!me.key||re&&re.key===me.key?"":(""+me.key).replace(Ne,"$&/")+"/")+C)),L.push(me)),1;if(re=0,ce=ce===""?".":ce+":",R(C))for(var pe=0;pe<C.length;pe++){fe=C[pe];var xe=ce+Fe(fe,pe);re+=je(fe,L,X,xe,me)}else if(xe=S(C),typeof xe=="function")for(C=xe.call(C),pe=0;!(fe=C.next()).done;)fe=fe.value,xe=ce+Fe(fe,pe++),re+=je(fe,L,X,xe,me);else if(fe==="object")throw L=String(C),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return re}function He(C,L,X){if(C==null)return C;var ce=[],me=0;return je(C,ce,"","",function(fe){return L.call(X,fe,me++)}),ce}function Be(C){if(C._status===-1){var L=C._result;L=L(),L.then(function(X){(C._status===0||C._status===-1)&&(C._status=1,C._result=X)},function(X){(C._status===0||C._status===-1)&&(C._status=2,C._result=X)}),C._status===-1&&(C._status=0,C._result=L)}if(C._status===1)return C._result.default;throw C._result}var ke={current:null},K={transition:null},te={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:K,ReactCurrentOwner:G};function Q(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:He,forEach:function(C,L,X){He(C,function(){L.apply(this,arguments)},X)},count:function(C){var L=0;return He(C,function(){L++}),L},toArray:function(C){return He(C,function(L){return L})||[]},only:function(C){if(!ye(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ge.Component=P,ge.Fragment=i,ge.Profiler=c,ge.PureComponent=B,ge.StrictMode=u,ge.Suspense=h,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ge.act=Q,ge.cloneElement=function(C,L,X){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ce=k({},C.props),me=C.key,fe=C.ref,re=C._owner;if(L!=null){if(L.ref!==void 0&&(fe=L.ref,re=G.current),L.key!==void 0&&(me=""+L.key),C.type&&C.type.defaultProps)var pe=C.type.defaultProps;for(xe in L)O.call(L,xe)&&!H.hasOwnProperty(xe)&&(ce[xe]=L[xe]===void 0&&pe!==void 0?pe[xe]:L[xe])}var xe=arguments.length-2;if(xe===1)ce.children=X;else if(1<xe){pe=Array(xe);for(var We=0;We<xe;We++)pe[We]=arguments[We+2];ce.children=pe}return{$$typeof:n,type:C.type,key:me,ref:fe,props:ce,_owner:re}},ge.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:f,_context:C},C.Consumer=C},ge.createElement=ie,ge.createFactory=function(C){var L=ie.bind(null,C);return L.type=C,L},ge.createRef=function(){return{current:null}},ge.forwardRef=function(C){return{$$typeof:p,render:C}},ge.isValidElement=ye,ge.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:Be}},ge.memo=function(C,L){return{$$typeof:x,type:C,compare:L===void 0?null:L}},ge.startTransition=function(C){var L=K.transition;K.transition={};try{C()}finally{K.transition=L}},ge.unstable_act=Q,ge.useCallback=function(C,L){return ke.current.useCallback(C,L)},ge.useContext=function(C){return ke.current.useContext(C)},ge.useDebugValue=function(){},ge.useDeferredValue=function(C){return ke.current.useDeferredValue(C)},ge.useEffect=function(C,L){return ke.current.useEffect(C,L)},ge.useId=function(){return ke.current.useId()},ge.useImperativeHandle=function(C,L,X){return ke.current.useImperativeHandle(C,L,X)},ge.useInsertionEffect=function(C,L){return ke.current.useInsertionEffect(C,L)},ge.useLayoutEffect=function(C,L){return ke.current.useLayoutEffect(C,L)},ge.useMemo=function(C,L){return ke.current.useMemo(C,L)},ge.useReducer=function(C,L,X){return ke.current.useReducer(C,L,X)},ge.useRef=function(C){return ke.current.useRef(C)},ge.useState=function(C){return ke.current.useState(C)},ge.useSyncExternalStore=function(C,L,X){return ke.current.useSyncExternalStore(C,L,X)},ge.useTransition=function(){return ke.current.useTransition()},ge.version="18.3.1",ge}var nf;function Zl(){return nf||(nf=1,wl.exports=Qm()),wl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function Ym(){if(rf)return Ni;rf=1;var n=Zl(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(p,h,x){var v,E={},S=null,w=null;x!==void 0&&(S=""+x),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(w=h.ref);for(v in h)u.call(h,v)&&!f.hasOwnProperty(v)&&(E[v]=h[v]);if(p&&p.defaultProps)for(v in h=p.defaultProps,h)E[v]===void 0&&(E[v]=h[v]);return{$$typeof:o,type:p,key:S,ref:w,props:E,_owner:c.current}}return Ni.Fragment=i,Ni.jsx=m,Ni.jsxs=m,Ni}var sf;function Jm(){return sf||(sf=1,bl.exports=Ym()),bl.exports}var a=Jm(),N=Zl();const oe=Gf(N);var Ci={},af;function Xm(){if(af)return Ci;af=1,Object.defineProperty(Ci,"__esModule",{value:!0}),Ci.parse=m,Ci.serialize=x;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,f=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function m(S,w){const k=new f,M=S.length;if(M<2)return k;const P=(w==null?void 0:w.decode)||v;let D=0;do{const B=S.indexOf("=",D);if(B===-1)break;const W=S.indexOf(";",D),R=W===-1?M:W;if(B>R){D=S.lastIndexOf(";",B-1)+1;continue}const O=p(S,D,B),G=h(S,B,O),H=S.slice(O,G);if(k[H]===void 0){let ie=p(S,B+1,R),de=h(S,R,ie);const ye=P(S.slice(ie,de));k[H]=ye}D=R+1}while(D<M);return k}function p(S,w,k){do{const M=S.charCodeAt(w);if(M!==32&&M!==9)return w}while(++w<k);return k}function h(S,w,k){for(;w>k;){const M=S.charCodeAt(--w);if(M!==32&&M!==9)return w+1}return k}function x(S,w,k){const M=(k==null?void 0:k.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const P=M(w);if(!o.test(P))throw new TypeError(`argument val is invalid: ${w}`);let D=S+"="+P;if(!k)return D;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);D+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);D+="; Domain="+k.domain}if(k.path){if(!u.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);D+="; Path="+k.path}if(k.expires){if(!E(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);D+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(D+="; HttpOnly"),k.secure&&(D+="; Secure"),k.partitioned&&(D+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return D}function v(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function E(S){return c.call(S)==="[object Date]"}return Ci}Xm();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var of="popstate";function Zm(n={}){function o(c,f){let{pathname:m="/",search:p="",hash:h=""}=nr(c.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),Ll("",{pathname:m,search:p,hash:h},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function i(c,f){let m=c.document.querySelector("base"),p="";if(m&&m.getAttribute("href")){let h=c.location.href,x=h.indexOf("#");p=x===-1?h:h.slice(0,x)}return p+"#"+(typeof f=="string"?f:Ai(f))}function u(c,f){Ot(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return eg(o,i,u,n)}function Re(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function Ot(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function qm(){return Math.random().toString(36).substring(2,10)}function lf(n,o){return{usr:n.state,key:n.key,idx:o}}function Ll(n,o,i=null,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?nr(o):o,state:i,key:o&&o.key||u||qm()}}function Ai({pathname:n="/",search:o="",hash:i=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function nr(n){let o={};if(n){let i=n.indexOf("#");i>=0&&(o.hash=n.substring(i),n=n.substring(0,i));let u=n.indexOf("?");u>=0&&(o.search=n.substring(u),n=n.substring(0,u)),n&&(o.pathname=n)}return o}function eg(n,o,i,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,m=c.history,p="POP",h=null,x=v();x==null&&(x=0,m.replaceState({...m.state,idx:x},""));function v(){return(m.state||{idx:null}).idx}function E(){p="POP";let P=v(),D=P==null?null:P-x;x=P,h&&h({action:p,location:M.location,delta:D})}function S(P,D){p="PUSH";let B=Ll(M.location,P,D);i(B,P),x=v()+1;let W=lf(B,x),R=M.createHref(B);try{m.pushState(W,"",R)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;c.location.assign(R)}f&&h&&h({action:p,location:M.location,delta:1})}function w(P,D){p="REPLACE";let B=Ll(M.location,P,D);i(B,P),x=v();let W=lf(B,x),R=M.createHref(B);m.replaceState(W,"",R),f&&h&&h({action:p,location:M.location,delta:0})}function k(P){let D=c.location.origin!=="null"?c.location.origin:c.location.href,B=typeof P=="string"?P:Ai(P);return B=B.replace(/ $/,"%20"),Re(D,`No window.location.(origin|href) available to create URL for href: ${B}`),new URL(B,D)}let M={get action(){return p},get location(){return n(c,m)},listen(P){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(of,E),h=P,()=>{c.removeEventListener(of,E),h=null}},createHref(P){return o(c,P)},createURL:k,encodeLocation(P){let D=k(P);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:S,replace:w,go(P){return m.go(P)}};return M}function Vf(n,o,i="/"){return tg(n,o,i,!1)}function tg(n,o,i,u){let c=typeof o=="string"?nr(o):o,f=In(c.pathname||"/",i);if(f==null)return null;let m=Kf(n);ng(m);let p=null;for(let h=0;p==null&&h<m.length;++h){let x=pg(f);p=dg(m[h],x,u)}return p}function Kf(n,o=[],i=[],u=""){let c=(f,m,p)=>{let h={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};h.relativePath.startsWith("/")&&(Re(h.relativePath.startsWith(u),`Absolute route path "${h.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(u.length));let x=sn([u,h.relativePath]),v=i.concat(h);f.children&&f.children.length>0&&(Re(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Kf(f.children,o,v,x)),!(f.path==null&&!f.index)&&o.push({path:x,score:ug(x,f.index),routesMeta:v})};return n.forEach((f,m)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))c(f,m);else for(let h of Qf(f.path))c(f,m,h)}),o}function Qf(n){let o=n.split("/");if(o.length===0)return[];let[i,...u]=o,c=i.endsWith("?"),f=i.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let m=Qf(u.join("/")),p=[];return p.push(...m.map(h=>h===""?f:[f,h].join("/"))),c&&p.push(...m),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function ng(n){n.sort((o,i)=>o.score!==i.score?i.score-o.score:cg(o.routesMeta.map(u=>u.childrenIndex),i.routesMeta.map(u=>u.childrenIndex)))}var rg=/^:[\w-]+$/,ig=3,sg=2,ag=1,og=10,lg=-2,uf=n=>n==="*";function ug(n,o){let i=n.split("/"),u=i.length;return i.some(uf)&&(u+=lg),o&&(u+=sg),i.filter(c=>!uf(c)).reduce((c,f)=>c+(rg.test(f)?ig:f===""?ag:og),u)}function cg(n,o){return n.length===o.length&&n.slice(0,-1).every((u,c)=>u===o[c])?n[n.length-1]-o[o.length-1]:0}function dg(n,o,i=!1){let{routesMeta:u}=n,c={},f="/",m=[];for(let p=0;p<u.length;++p){let h=u[p],x=p===u.length-1,v=f==="/"?o:o.slice(f.length)||"/",E=la({path:h.relativePath,caseSensitive:h.caseSensitive,end:x},v),S=h.route;if(!E&&x&&i&&!u[u.length-1].route.index&&(E=la({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!E)return null;Object.assign(c,E.params),m.push({params:c,pathname:sn([f,E.pathname]),pathnameBase:xg(sn([f,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(f=sn([f,E.pathnameBase]))}return m}function la(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,u]=fg(n.path,n.caseSensitive,n.end),c=o.match(i);if(!c)return null;let f=c[0],m=f.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:u.reduce((x,{paramName:v,isOptional:E},S)=>{if(v==="*"){let k=p[S]||"";m=f.slice(0,f.length-k.length).replace(/(.)\/+$/,"$1")}const w=p[S];return E&&!w?x[v]=void 0:x[v]=(w||"").replace(/%2F/g,"/"),x},{}),pathname:f,pathnameBase:m,pattern:n}}function fg(n,o=!1,i=!0){Ot(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let u=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,p,h)=>(u.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(u.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),u]}function pg(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ot(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function In(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let i=o.endsWith("/")?o.length-1:o.length,u=n.charAt(i);return u&&u!=="/"?null:n.slice(i)||"/"}function hg(n,o="/"){let{pathname:i,search:u="",hash:c=""}=typeof n=="string"?nr(n):n;return{pathname:i?i.startsWith("/")?i:mg(i,o):o,search:yg(u),hash:vg(c)}}function mg(n,o){let i=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function kl(n,o,i,u){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gg(n){return n.filter((o,i)=>i===0||o.route.path&&o.route.path.length>0)}function Yf(n){let o=gg(n);return o.map((i,u)=>u===o.length-1?i.pathname:i.pathnameBase)}function Jf(n,o,i,u=!1){let c;typeof n=="string"?c=nr(n):(c={...n},Re(!c.pathname||!c.pathname.includes("?"),kl("?","pathname","search",c)),Re(!c.pathname||!c.pathname.includes("#"),kl("#","pathname","hash",c)),Re(!c.search||!c.search.includes("#"),kl("#","search","hash",c)));let f=n===""||c.pathname==="",m=f?"/":c.pathname,p;if(m==null)p=i;else{let E=o.length-1;if(!u&&m.startsWith("..")){let S=m.split("/");for(;S[0]==="..";)S.shift(),E-=1;c.pathname=S.join("/")}p=E>=0?o[E]:"/"}let h=hg(c,p),x=m&&m!=="/"&&m.endsWith("/"),v=(f||m===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(x||v)&&(h.pathname+="/"),h}var sn=n=>n.join("/").replace(/\/\/+/g,"/"),xg=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),yg=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,vg=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bg(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Xf=["POST","PUT","PATCH","DELETE"];new Set(Xf);var wg=["GET",...Xf];new Set(wg);var Br=N.createContext(null);Br.displayName="DataRouter";var ya=N.createContext(null);ya.displayName="DataRouterState";var Zf=N.createContext({isTransitioning:!1});Zf.displayName="ViewTransition";var kg=N.createContext(new Map);kg.displayName="Fetchers";var Sg=N.createContext(null);Sg.displayName="Await";var Kt=N.createContext(null);Kt.displayName="Navigation";var Mi=N.createContext(null);Mi.displayName="Location";var ln=N.createContext({outlet:null,matches:[],isDataRoute:!1});ln.displayName="Route";var ql=N.createContext(null);ql.displayName="RouteError";function jg(n,{relative:o}={}){Re(Ri(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:u}=N.useContext(Kt),{hash:c,pathname:f,search:m}=Di(n,{relative:o}),p=f;return i!=="/"&&(p=f==="/"?i:sn([i,f])),u.createHref({pathname:p,search:m,hash:c})}function Ri(){return N.useContext(Mi)!=null}function An(){return Re(Ri(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Mi).location}var qf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ep(n){N.useContext(Kt).static||N.useLayoutEffect(n)}function eu(){let{isDataRoute:n}=N.useContext(ln);return n?_g():Ng()}function Ng(){Re(Ri(),"useNavigate() may be used only in the context of a <Router> component.");let n=N.useContext(Br),{basename:o,navigator:i}=N.useContext(Kt),{matches:u}=N.useContext(ln),{pathname:c}=An(),f=JSON.stringify(Yf(u)),m=N.useRef(!1);return ep(()=>{m.current=!0}),N.useCallback((h,x={})=>{if(Ot(m.current,qf),!m.current)return;if(typeof h=="number"){i.go(h);return}let v=Jf(h,JSON.parse(f),c,x.relative==="path");n==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:sn([o,v.pathname])),(x.replace?i.replace:i.push)(v,x.state,x)},[o,i,f,c,n])}N.createContext(null);function Di(n,{relative:o}={}){let{matches:i}=N.useContext(ln),{pathname:u}=An(),c=JSON.stringify(Yf(i));return N.useMemo(()=>Jf(n,JSON.parse(c),u,o==="path"),[n,c,u,o])}function Cg(n,o){return tp(n,o)}function tp(n,o,i,u){var D;Re(Ri(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=N.useContext(Kt),{matches:f}=N.useContext(ln),m=f[f.length-1],p=m?m.params:{},h=m?m.pathname:"/",x=m?m.pathnameBase:"/",v=m&&m.route;{let B=v&&v.path||"";np(h,!v||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let E=An(),S;if(o){let B=typeof o=="string"?nr(o):o;Re(x==="/"||((D=B.pathname)==null?void 0:D.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${B.pathname}" was given in the \`location\` prop.`),S=B}else S=E;let w=S.pathname||"/",k=w;if(x!=="/"){let B=x.replace(/^\//,"").split("/");k="/"+w.replace(/^\//,"").split("/").slice(B.length).join("/")}let M=Vf(n,{pathname:k});Ot(v||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ot(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=Ag(M&&M.map(B=>Object.assign({},B,{params:Object.assign({},p,B.params),pathname:sn([x,c.encodeLocation?c.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?x:sn([x,c.encodeLocation?c.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),f,i,u);return o&&P?N.createElement(Mi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},P):P}function Eg(){let n=Bg(),o=bg(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},m=null;return console.error("Error handled by React Router default ErrorBoundary:",n),m=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:f},"ErrorBoundary")," or"," ",N.createElement("code",{style:f},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},o),i?N.createElement("pre",{style:c},i):null,m)}var Tg=N.createElement(Eg,null),Pg=class extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error!==void 0?N.createElement(ln.Provider,{value:this.props.routeContext},N.createElement(ql.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ig({routeContext:n,match:o,children:i}){let u=N.useContext(Br);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),N.createElement(ln.Provider,{value:n},i)}function Ag(n,o=[],i=null,u=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(o.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let c=n,f=i==null?void 0:i.errors;if(f!=null){let h=c.findIndex(x=>x.route.id&&(f==null?void 0:f[x.route.id])!==void 0);Re(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,h+1))}let m=!1,p=-1;if(i)for(let h=0;h<c.length;h++){let x=c[h];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=h),x.route.id){let{loaderData:v,errors:E}=i,S=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!E||E[x.route.id]===void 0);if(x.route.lazy||S){m=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((h,x,v)=>{let E,S=!1,w=null,k=null;i&&(E=f&&x.route.id?f[x.route.id]:void 0,w=x.route.errorElement||Tg,m&&(p<0&&v===0?(np("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):p===v&&(S=!0,k=x.route.hydrateFallbackElement||null)));let M=o.concat(c.slice(0,v+1)),P=()=>{let D;return E?D=w:S?D=k:x.route.Component?D=N.createElement(x.route.Component,null):x.route.element?D=x.route.element:D=h,N.createElement(Ig,{match:x,routeContext:{outlet:h,matches:M,isDataRoute:i!=null},children:D})};return i&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?N.createElement(Pg,{location:i.location,revalidation:i.revalidation,component:w,error:E,children:P(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):P()},null)}function tu(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lg(n){let o=N.useContext(Br);return Re(o,tu(n)),o}function Mg(n){let o=N.useContext(ya);return Re(o,tu(n)),o}function Rg(n){let o=N.useContext(ln);return Re(o,tu(n)),o}function nu(n){let o=Rg(n),i=o.matches[o.matches.length-1];return Re(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function Dg(){return nu("useRouteId")}function Bg(){var u;let n=N.useContext(ql),o=Mg("useRouteError"),i=nu("useRouteError");return n!==void 0?n:(u=o.errors)==null?void 0:u[i]}function _g(){let{router:n}=Lg("useNavigate"),o=nu("useNavigate"),i=N.useRef(!1);return ep(()=>{i.current=!0}),N.useCallback(async(c,f={})=>{Ot(i.current,qf),i.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:o,...f}))},[n,o])}var cf={};function np(n,o,i){!o&&!cf[n]&&(cf[n]=!0,Ot(!1,i))}N.memo(Og);function Og({routes:n,future:o,state:i}){return tp(n,void 0,i,o)}function Jn(n){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zg({basename:n="/",children:o=null,location:i,navigationType:u="POP",navigator:c,static:f=!1}){Re(!Ri(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),p=N.useMemo(()=>({basename:m,navigator:c,static:f,future:{}}),[m,c,f]);typeof i=="string"&&(i=nr(i));let{pathname:h="/",search:x="",hash:v="",state:E=null,key:S="default"}=i,w=N.useMemo(()=>{let k=In(h,m);return k==null?null:{location:{pathname:k,search:x,hash:v,state:E,key:S},navigationType:u}},[m,h,x,v,E,S,u]);return Ot(w!=null,`<Router basename="${m}"> is not able to match the URL "${h}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:N.createElement(Kt.Provider,{value:p},N.createElement(Mi.Provider,{children:o,value:w}))}function Fg({children:n,location:o}){return Cg(Ml(n),o)}function Ml(n,o=[]){let i=[];return N.Children.forEach(n,(u,c)=>{if(!N.isValidElement(u))return;let f=[...o,c];if(u.type===N.Fragment){i.push.apply(i,Ml(u.props.children,f));return}Re(u.type===Jn,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!u.props.index||!u.props.children,"An index route cannot have child routes.");let m={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(m.children=Ml(u.props.children,f)),i.push(m)}),i}var ea="get",ta="application/x-www-form-urlencoded";function va(n){return n!=null&&typeof n.tagName=="string"}function $g(n){return va(n)&&n.tagName.toLowerCase()==="button"}function Ug(n){return va(n)&&n.tagName.toLowerCase()==="form"}function Hg(n){return va(n)&&n.tagName.toLowerCase()==="input"}function Wg(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Gg(n,o){return n.button===0&&(!o||o==="_self")&&!Wg(n)}var Vs=null;function Vg(){if(Vs===null)try{new FormData(document.createElement("form"),0),Vs=!1}catch{Vs=!0}return Vs}var Kg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sl(n){return n!=null&&!Kg.has(n)?(Ot(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ta}"`),null):n}function Qg(n,o){let i,u,c,f,m;if(Ug(n)){let p=n.getAttribute("action");u=p?In(p,o):null,i=n.getAttribute("method")||ea,c=Sl(n.getAttribute("enctype"))||ta,f=new FormData(n)}else if($g(n)||Hg(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(u=h?In(h,o):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||ea,c=Sl(n.getAttribute("formenctype"))||Sl(p.getAttribute("enctype"))||ta,f=new FormData(p,n),!Vg()){let{name:x,type:v,value:E}=n;if(v==="image"){let S=x?`${x}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else x&&f.append(x,E)}}else{if(va(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ea,u=null,c=ta,m=n}return f&&c==="text/plain"&&(m=f,f=void 0),{action:u,method:i.toLowerCase(),encType:c,formData:f,body:m}}function ru(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}async function Yg(n,o){if(n.id in o)return o[n.id];try{let i=await import(n.module);return o[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jg(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Xg(n,o,i){let u=await Promise.all(n.map(async c=>{let f=o.routes[c.route.id];if(f){let m=await Yg(f,i);return m.links?m.links():[]}return[]}));return t0(u.flat(1).filter(Jg).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function df(n,o,i,u,c,f){let m=(h,x)=>i[x]?h.route.id!==i[x].route.id:!0,p=(h,x)=>{var v;return i[x].pathname!==h.pathname||((v=i[x].route.path)==null?void 0:v.endsWith("*"))&&i[x].params["*"]!==h.params["*"]};return f==="assets"?o.filter((h,x)=>m(h,x)||p(h,x)):f==="data"?o.filter((h,x)=>{var E;let v=u.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(m(h,x)||p(h,x))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((E=i[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Zg(n,o){return qg(n.map(i=>{let u=o.routes[i.route.id];if(!u)return[];let c=[u.module];return u.imports&&(c=c.concat(u.imports)),c}).flat(1))}function qg(n){return[...new Set(n)]}function e0(n){let o={},i=Object.keys(n).sort();for(let u of i)o[u]=n[u];return o}function t0(n,o){let i=new Set;return new Set(o),n.reduce((u,c)=>{let f=JSON.stringify(e0(c));return i.has(f)||(i.add(f),u.push({key:f,link:c})),u},[])}function n0(n){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname="_root.data":o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function r0(){let n=N.useContext(Br);return ru(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function i0(){let n=N.useContext(ya);return ru(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var iu=N.createContext(void 0);iu.displayName="FrameworkContext";function rp(){let n=N.useContext(iu);return ru(n,"You must render this element inside a <HydratedRouter> element"),n}function s0(n,o){let i=N.useContext(iu),[u,c]=N.useState(!1),[f,m]=N.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:x,onMouseLeave:v,onTouchStart:E}=o,S=N.useRef(null);N.useEffect(()=>{if(n==="render"&&m(!0),n==="viewport"){let M=D=>{D.forEach(B=>{m(B.isIntersecting)})},P=new IntersectionObserver(M,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[n]),N.useEffect(()=>{if(u){let M=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(M)}}},[u]);let w=()=>{c(!0)},k=()=>{c(!1),m(!1)};return i?n!=="intent"?[f,S,{}]:[f,S,{onFocus:Ei(p,w),onBlur:Ei(h,k),onMouseEnter:Ei(x,w),onMouseLeave:Ei(v,k),onTouchStart:Ei(E,w)}]:[!1,S,{}]}function Ei(n,o){return i=>{n&&n(i),i.defaultPrevented||o(i)}}function a0({page:n,...o}){let{router:i}=r0(),u=N.useMemo(()=>Vf(i.routes,n,i.basename),[i.routes,n,i.basename]);return u?N.createElement(l0,{page:n,matches:u,...o}):null}function o0(n){let{manifest:o,routeModules:i}=rp(),[u,c]=N.useState([]);return N.useEffect(()=>{let f=!1;return Xg(n,o,i).then(m=>{f||c(m)}),()=>{f=!0}},[n,o,i]),u}function l0({page:n,matches:o,...i}){let u=An(),{manifest:c,routeModules:f}=rp(),{loaderData:m,matches:p}=i0(),h=N.useMemo(()=>df(n,o,p,c,u,"data"),[n,o,p,c,u]),x=N.useMemo(()=>df(n,o,p,c,u,"assets"),[n,o,p,c,u]),v=N.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let w=new Set,k=!1;if(o.forEach(P=>{var B;let D=c.routes[P.route.id];!D||!D.hasLoader||(!h.some(W=>W.route.id===P.route.id)&&P.route.id in m&&((B=f[P.route.id])!=null&&B.shouldRevalidate)||D.hasClientLoader?k=!0:w.add(P.route.id))}),w.size===0)return[];let M=n0(n);return k&&w.size>0&&M.searchParams.set("_routes",o.filter(P=>w.has(P.route.id)).map(P=>P.route.id).join(",")),[M.pathname+M.search]},[m,u,c,h,o,n,f]),E=N.useMemo(()=>Zg(x,c),[x,c]),S=o0(x);return N.createElement(N.Fragment,null,v.map(w=>N.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),E.map(w=>N.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),S.map(({key:w,link:k})=>N.createElement("link",{key:w,...k})))}function u0(...n){return o=>{n.forEach(i=>{typeof i=="function"?i(o):i!=null&&(i.current=o)})}}var ip=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ip&&(window.__reactRouterVersion="7.1.3")}catch{}function c0({basename:n,children:o,window:i}){let u=N.useRef();u.current==null&&(u.current=Zm({window:i,v5Compat:!0}));let c=u.current,[f,m]=N.useState({action:c.action,location:c.location}),p=N.useCallback(h=>{N.startTransition(()=>m(h))},[m]);return N.useLayoutEffect(()=>c.listen(p),[c,p]),N.createElement(zg,{basename:n,children:o,location:f.location,navigationType:f.action,navigator:c})}var sp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ap=N.forwardRef(function({onClick:o,discover:i="render",prefetch:u="none",relative:c,reloadDocument:f,replace:m,state:p,target:h,to:x,preventScrollReset:v,viewTransition:E,...S},w){let{basename:k}=N.useContext(Kt),M=typeof x=="string"&&sp.test(x),P,D=!1;if(typeof x=="string"&&M&&(P=x,ip))try{let de=new URL(window.location.href),ye=x.startsWith("//")?new URL(de.protocol+x):new URL(x),Ae=In(ye.pathname,k);ye.origin===de.origin&&Ae!=null?x=Ae+ye.search+ye.hash:D=!0}catch{Ot(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=jg(x,{relative:c}),[W,R,O]=s0(u,S),G=h0(x,{replace:m,state:p,target:h,preventScrollReset:v,relative:c,viewTransition:E});function H(de){o&&o(de),de.defaultPrevented||G(de)}let ie=N.createElement("a",{...S,...O,href:P||B,onClick:D||f?o:H,ref:u0(w,R),target:h,"data-discover":!M&&i==="render"?"true":void 0});return W&&!M?N.createElement(N.Fragment,null,ie,N.createElement(a0,{page:B})):ie});ap.displayName="Link";var d0=N.forwardRef(function({"aria-current":o="page",caseSensitive:i=!1,className:u="",end:c=!1,style:f,to:m,viewTransition:p,children:h,...x},v){let E=Di(m,{relative:x.relative}),S=An(),w=N.useContext(ya),{navigator:k,basename:M}=N.useContext(Kt),P=w!=null&&v0(E)&&p===!0,D=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,B=S.pathname,W=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(B=B.toLowerCase(),W=W?W.toLowerCase():null,D=D.toLowerCase()),W&&M&&(W=In(W,M)||W);const R=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let O=B===D||!c&&B.startsWith(D)&&B.charAt(R)==="/",G=W!=null&&(W===D||!c&&W.startsWith(D)&&W.charAt(D.length)==="/"),H={isActive:O,isPending:G,isTransitioning:P},ie=O?o:void 0,de;typeof u=="function"?de=u(H):de=[u,O?"active":null,G?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let ye=typeof f=="function"?f(H):f;return N.createElement(ap,{...x,"aria-current":ie,className:de,ref:v,style:ye,to:m,viewTransition:p},typeof h=="function"?h(H):h)});d0.displayName="NavLink";var f0=N.forwardRef(({discover:n="render",fetcherKey:o,navigate:i,reloadDocument:u,replace:c,state:f,method:m=ea,action:p,onSubmit:h,relative:x,preventScrollReset:v,viewTransition:E,...S},w)=>{let k=x0(),M=y0(p,{relative:x}),P=m.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&sp.test(p),B=W=>{if(h&&h(W),W.defaultPrevented)return;W.preventDefault();let R=W.nativeEvent.submitter,O=(R==null?void 0:R.getAttribute("formmethod"))||m;k(R||W.currentTarget,{fetcherKey:o,method:O,navigate:i,replace:c,state:f,relative:x,preventScrollReset:v,viewTransition:E})};return N.createElement("form",{ref:w,method:P,action:M,onSubmit:u?h:B,...S,"data-discover":!D&&n==="render"?"true":void 0})});f0.displayName="Form";function p0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function op(n){let o=N.useContext(Br);return Re(o,p0(n)),o}function h0(n,{target:o,replace:i,state:u,preventScrollReset:c,relative:f,viewTransition:m}={}){let p=eu(),h=An(),x=Di(n,{relative:f});return N.useCallback(v=>{if(Gg(v,o)){v.preventDefault();let E=i!==void 0?i:Ai(h)===Ai(x);p(n,{replace:E,state:u,preventScrollReset:c,relative:f,viewTransition:m})}},[h,p,x,i,u,o,n,c,f,m])}var m0=0,g0=()=>`__${String(++m0)}__`;function x0(){let{router:n}=op("useSubmit"),{basename:o}=N.useContext(Kt),i=Dg();return N.useCallback(async(u,c={})=>{let{action:f,method:m,encType:p,formData:h,body:x}=Qg(u,o);if(c.navigate===!1){let v=c.fetcherKey||g0();await n.fetch(v,i,c.action||f,{preventScrollReset:c.preventScrollReset,formData:h,body:x,formMethod:c.method||m,formEncType:c.encType||p,flushSync:c.flushSync})}else await n.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:h,body:x,formMethod:c.method||m,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,o,i])}function y0(n,{relative:o}={}){let{basename:i}=N.useContext(Kt),u=N.useContext(ln);Re(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...Di(n||".",{relative:o})},m=An();if(n==null){f.search=m.search;let p=new URLSearchParams(f.search),h=p.getAll("index");if(h.some(v=>v==="")){p.delete("index"),h.filter(E=>E).forEach(E=>p.append("index",E));let v=p.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(f.pathname=f.pathname==="/"?i:sn([i,f.pathname])),Ai(f)}function v0(n,o={}){let i=N.useContext(Zf);Re(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=op("useViewTransitionState"),c=Di(n,{relative:o.relative});if(!i.isTransitioning)return!1;let f=In(i.currentLocation.pathname,u)||i.currentLocation.pathname,m=In(i.nextLocation.pathname,u)||i.nextLocation.pathname;return la(c.pathname,m)!=null||la(c.pathname,f)!=null}new TextEncoder;var jl={exports:{}},ft={},Nl={exports:{}},Cl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff;function b0(){return ff||(ff=1,function(n){function o(K,te){var Q=K.length;K.push(te);e:for(;0<Q;){var C=Q-1>>>1,L=K[C];if(0<c(L,te))K[C]=te,K[Q]=L,Q=C;else break e}}function i(K){return K.length===0?null:K[0]}function u(K){if(K.length===0)return null;var te=K[0],Q=K.pop();if(Q!==te){K[0]=Q;e:for(var C=0,L=K.length,X=L>>>1;C<X;){var ce=2*(C+1)-1,me=K[ce],fe=ce+1,re=K[fe];if(0>c(me,Q))fe<L&&0>c(re,me)?(K[C]=re,K[fe]=Q,C=fe):(K[C]=me,K[ce]=Q,C=ce);else if(fe<L&&0>c(re,Q))K[C]=re,K[fe]=Q,C=fe;else break e}}return te}function c(K,te){var Q=K.sortIndex-te.sortIndex;return Q!==0?Q:K.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var m=Date,p=m.now();n.unstable_now=function(){return m.now()-p}}var h=[],x=[],v=1,E=null,S=3,w=!1,k=!1,M=!1,P=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(K){for(var te=i(x);te!==null;){if(te.callback===null)u(x);else if(te.startTime<=K)u(x),te.sortIndex=te.expirationTime,o(h,te);else break;te=i(x)}}function R(K){if(M=!1,W(K),!k)if(i(h)!==null)k=!0,Be(O);else{var te=i(x);te!==null&&ke(R,te.startTime-K)}}function O(K,te){k=!1,M&&(M=!1,D(ie),ie=-1),w=!0;var Q=S;try{for(W(te),E=i(h);E!==null&&(!(E.expirationTime>te)||K&&!Ae());){var C=E.callback;if(typeof C=="function"){E.callback=null,S=E.priorityLevel;var L=C(E.expirationTime<=te);te=n.unstable_now(),typeof L=="function"?E.callback=L:E===i(h)&&u(h),W(te)}else u(h);E=i(h)}if(E!==null)var X=!0;else{var ce=i(x);ce!==null&&ke(R,ce.startTime-te),X=!1}return X}finally{E=null,S=Q,w=!1}}var G=!1,H=null,ie=-1,de=5,ye=-1;function Ae(){return!(n.unstable_now()-ye<de)}function Ne(){if(H!==null){var K=n.unstable_now();ye=K;var te=!0;try{te=H(!0,K)}finally{te?Fe():(G=!1,H=null)}}else G=!1}var Fe;if(typeof B=="function")Fe=function(){B(Ne)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,He=je.port2;je.port1.onmessage=Ne,Fe=function(){He.postMessage(null)}}else Fe=function(){P(Ne,0)};function Be(K){H=K,G||(G=!0,Fe())}function ke(K,te){ie=P(function(){K(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_continueExecution=function(){k||w||(k=!0,Be(O))},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(K){switch(S){case 1:case 2:case 3:var te=3;break;default:te=S}var Q=S;S=te;try{return K()}finally{S=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(K,te){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Q=S;S=K;try{return te()}finally{S=Q}},n.unstable_scheduleCallback=function(K,te,Q){var C=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?C+Q:C):Q=C,K){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Q+L,K={id:v++,callback:te,priorityLevel:K,startTime:Q,expirationTime:L,sortIndex:-1},Q>C?(K.sortIndex=Q,o(x,K),i(h)===null&&K===i(x)&&(M?(D(ie),ie=-1):M=!0,ke(R,Q-C))):(K.sortIndex=L,o(h,K),k||w||(k=!0,Be(O))),K},n.unstable_shouldYield=Ae,n.unstable_wrapCallback=function(K){var te=S;return function(){var Q=S;S=te;try{return K.apply(this,arguments)}finally{S=Q}}}}(Cl)),Cl}var pf;function w0(){return pf||(pf=1,Nl.exports=b0()),Nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function k0(){if(hf)return ft;hf=1;var n=Zl(),o=w0();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,c={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(c[e]=t,e=0;e<t.length;e++)u.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function S(e){return h.call(E,e)?!0:h.call(v,e)?!1:x.test(e)?E[e]=!0:(v[e]=!0,!1)}function w(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,t,r,s){if(t===null||typeof t>"u"||w(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function M(e,t,r,s,l,d,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=g}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new M(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function B(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(D,B);P[t]=new M(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(D,B);P[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(D,B);P[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,r,s){var l=P.hasOwnProperty(t)?P[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k(t,r,l,s)&&(r=null),s||l===null?S(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,s=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),G=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),K=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,C;function L(e){if(C===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);C=t&&t[1]||""}return`
`+C+e}var X=!1;function ce(e,t){if(!e||X)return"";X=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(A){var s=A}Reflect.construct(e,[],t)}else{try{t.call()}catch(A){s=A}e.call(t.prototype)}else{try{throw Error()}catch(A){s=A}e()}}catch(A){if(A&&s&&typeof A.stack=="string"){for(var l=A.stack.split(`
`),d=s.stack.split(`
`),g=l.length-1,y=d.length-1;1<=g&&0<=y&&l[g]!==d[y];)y--;for(;1<=g&&0<=y;g--,y--)if(l[g]!==d[y]){if(g!==1||y!==1)do if(g--,y--,0>y||l[g]!==d[y]){var b=`
`+l[g].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=g&&0<=y);break}}}finally{X=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?L(e):""}function me(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case G:return"Portal";case de:return"Profiler";case ie:return"StrictMode";case Fe:return"Suspense";case je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ae:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function re(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function We(e){var t=xe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){s=""+g,d.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(g){s=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wt(e){e._valueTracker||(e._valueTracker=We(e))}function at(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=xe(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ir(e,t){var r=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Fr(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=pe(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function V(e,t){_(e,t);var r=pe(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_e(e,t.type,r):t.hasOwnProperty("defaultValue")&&_e(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Y(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function _e(e,t,r){(t!=="number"||Dn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Bn=Array.isArray;function kt(e,t,r,s){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&s&&(e[r].defaultSelected=!0)}else{for(r=""+pe(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Pa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function du(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(i(92));if(Bn(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:pe(r)}}function fu(e,t){var r=pe(t.value),s=pe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oi,mu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oi=Oi||document.createElement("div"),Oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qp=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function gu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function xu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,l=gu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,l):e[r]=l}}var eh=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Aa(e,t){if(t){if(eh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function La(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ma=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,sr=null,ar=null;function yu(e){if(e=ci(e)){if(typeof Da!="function")throw Error(i(280));var t=e.stateNode;t&&(t=os(t),Da(e.stateNode,e.type,t))}}function vu(e){sr?ar?ar.push(e):ar=[e]:sr=e}function bu(){if(sr){var e=sr,t=ar;if(ar=sr=null,yu(e),t)for(e=0;e<t.length;e++)yu(t[e])}}function wu(e,t){return e(t)}function ku(){}var Ba=!1;function Su(e,t,r){if(Ba)return e(t,r);Ba=!0;try{return wu(e,t,r)}finally{Ba=!1,(sr!==null||ar!==null)&&(ku(),bu())}}function Hr(e,t){var r=e.stateNode;if(r===null)return null;var s=os(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var _a=!1;if(p)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){_a=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{_a=!1}function th(e,t,r,s,l,d,g,y,b){var A=Array.prototype.slice.call(arguments,3);try{t.apply(r,A)}catch(F){this.onError(F)}}var Gr=!1,zi=null,Fi=!1,Oa=null,nh={onError:function(e){Gr=!0,zi=e}};function rh(e,t,r,s,l,d,g,y,b){Gr=!1,zi=null,th.apply(nh,arguments)}function ih(e,t,r,s,l,d,g,y,b){if(rh.apply(this,arguments),Gr){if(Gr){var A=zi;Gr=!1,zi=null}else throw Error(i(198));Fi||(Fi=!0,Oa=A)}}function _n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ju(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nu(e){if(_n(e)!==e)throw Error(i(188))}function sh(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,s=t;;){var l=r.return;if(l===null)break;var d=l.alternate;if(d===null){if(s=l.return,s!==null){r=s;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===r)return Nu(l),e;if(d===s)return Nu(l),t;d=d.sibling}throw Error(i(188))}if(r.return!==s.return)r=l,s=d;else{for(var g=!1,y=l.child;y;){if(y===r){g=!0,r=l,s=d;break}if(y===s){g=!0,s=l,r=d;break}y=y.sibling}if(!g){for(y=d.child;y;){if(y===r){g=!0,r=d,s=l;break}if(y===s){g=!0,s=d,r=l;break}y=y.sibling}if(!g)throw Error(i(189))}}if(r.alternate!==s)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function Cu(e){return e=sh(e),e!==null?Eu(e):null}function Eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Eu(e);if(t!==null)return t;e=e.sibling}return null}var Tu=o.unstable_scheduleCallback,Pu=o.unstable_cancelCallback,ah=o.unstable_shouldYield,oh=o.unstable_requestPaint,Oe=o.unstable_now,lh=o.unstable_getCurrentPriorityLevel,za=o.unstable_ImmediatePriority,Iu=o.unstable_UserBlockingPriority,$i=o.unstable_NormalPriority,uh=o.unstable_LowPriority,Au=o.unstable_IdlePriority,Ui=null,zt=null;function ch(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Ui,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:ph,dh=Math.log,fh=Math.LN2;function ph(e){return e>>>=0,e===0?32:31-(dh(e)/fh|0)|0}var Hi=64,Wi=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gi(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,l=e.suspendedLanes,d=e.pingedLanes,g=r&268435455;if(g!==0){var y=g&~l;y!==0?s=Vr(y):(d&=g,d!==0&&(s=Vr(d)))}else g=r&~l,g!==0?s=Vr(g):d!==0&&(s=Vr(d));if(s===0)return 0;if(t!==0&&t!==s&&(t&l)===0&&(l=s&-s,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((s&4)!==0&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-It(t),l=1<<r,s|=e[r],t&=~l;return s}function hh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mh(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var g=31-It(d),y=1<<g,b=l[g];b===-1?((y&r)===0||(y&s)!==0)&&(l[g]=hh(y,t)):b<=t&&(e.expiredLanes|=y),d&=~y}}function Fa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=Hi;return Hi<<=1,(Hi&4194240)===0&&(Hi=64),e}function $a(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Kr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=r}function gh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-It(r),d=1<<l;t[l]=0,s[l]=-1,e[l]=-1,r&=~d}}function Ua(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-It(r),l=1<<s;l&t|e[s]&t&&(e[s]|=t),r&=~l}}var Se=0;function Mu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ru,Ha,Du,Bu,_u,Wa=!1,Vi=[],un=null,cn=null,dn=null,Qr=new Map,Yr=new Map,fn=[],xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function Jr(e,t,r,s,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[l]},t!==null&&(t=ci(t),t!==null&&Ha(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yh(e,t,r,s,l){switch(t){case"focusin":return un=Jr(un,e,t,r,s,l),!0;case"dragenter":return cn=Jr(cn,e,t,r,s,l),!0;case"mouseover":return dn=Jr(dn,e,t,r,s,l),!0;case"pointerover":var d=l.pointerId;return Qr.set(d,Jr(Qr.get(d)||null,e,t,r,s,l)),!0;case"gotpointercapture":return d=l.pointerId,Yr.set(d,Jr(Yr.get(d)||null,e,t,r,s,l)),!0}return!1}function zu(e){var t=On(e.target);if(t!==null){var r=_n(t);if(r!==null){if(t=r.tag,t===13){if(t=ju(r),t!==null){e.blockedOn=t,_u(e.priority,function(){Du(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ma=s,r.target.dispatchEvent(s),Ma=null}else return t=ci(r),t!==null&&Ha(t),e.blockedOn=r,!1;t.shift()}return!0}function Fu(e,t,r){Ki(e)&&r.delete(t)}function vh(){Wa=!1,un!==null&&Ki(un)&&(un=null),cn!==null&&Ki(cn)&&(cn=null),dn!==null&&Ki(dn)&&(dn=null),Qr.forEach(Fu),Yr.forEach(Fu)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vh)))}function Zr(e){function t(l){return Xr(l,e)}if(0<Vi.length){Xr(Vi[0],e);for(var r=1;r<Vi.length;r++){var s=Vi[r];s.blockedOn===e&&(s.blockedOn=null)}}for(un!==null&&Xr(un,e),cn!==null&&Xr(cn,e),dn!==null&&Xr(dn,e),Qr.forEach(t),Yr.forEach(t),r=0;r<fn.length;r++)s=fn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<fn.length&&(r=fn[0],r.blockedOn===null);)zu(r),r.blockedOn===null&&fn.shift()}var or=R.ReactCurrentBatchConfig,Qi=!0;function bh(e,t,r,s){var l=Se,d=or.transition;or.transition=null;try{Se=1,Ga(e,t,r,s)}finally{Se=l,or.transition=d}}function wh(e,t,r,s){var l=Se,d=or.transition;or.transition=null;try{Se=4,Ga(e,t,r,s)}finally{Se=l,or.transition=d}}function Ga(e,t,r,s){if(Qi){var l=Va(e,t,r,s);if(l===null)uo(e,t,s,Yi,r),Ou(e,s);else if(yh(l,e,t,r,s))s.stopPropagation();else if(Ou(e,s),t&4&&-1<xh.indexOf(e)){for(;l!==null;){var d=ci(l);if(d!==null&&Ru(d),d=Va(e,t,r,s),d===null&&uo(e,t,s,Yi,r),d===l)break;l=d}l!==null&&s.stopPropagation()}else uo(e,t,s,null,r)}}var Yi=null;function Va(e,t,r,s){if(Yi=null,e=Ra(s),e=On(e),e!==null)if(t=_n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ju(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yi=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lh()){case za:return 1;case Iu:return 4;case $i:case uh:return 16;case Au:return 536870912;default:return 16}default:return 16}}var pn=null,Ka=null,Ji=null;function Uu(){if(Ji)return Ji;var e,t=Ka,r=t.length,s,l="value"in pn?pn.value:pn.textContent,d=l.length;for(e=0;e<r&&t[e]===l[e];e++);var g=r-e;for(s=1;s<=g&&t[r-s]===l[d-s];s++);return Ji=l.slice(e,1<s?1-s:void 0)}function Xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function Hu(){return!1}function mt(e){function t(r,s,l,d,g){this._reactName=r,this._targetInst=l,this.type=s,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zi:Hu,this.isPropagationStopped=Hu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qa=mt(lr),qr=Q({},lr,{view:0,detail:0}),kh=mt(qr),Ya,Ja,ei,qi=Q({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(Ya=e.screenX-ei.screenX,Ja=e.screenY-ei.screenY):Ja=Ya=0,ei=e),Ya)},movementY:function(e){return"movementY"in e?e.movementY:Ja}}),Wu=mt(qi),Sh=Q({},qi,{dataTransfer:0}),jh=mt(Sh),Nh=Q({},qr,{relatedTarget:0}),Xa=mt(Nh),Ch=Q({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=mt(Ch),Th=Q({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ph=mt(Th),Ih=Q({},lr,{data:0}),Gu=mt(Ih),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mh[e])?!!t[e]:!1}function Za(){return Rh}var Dh=Q({},qr,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Za,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bh=mt(Dh),_h=Q({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vu=mt(_h),Oh=Q({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Za}),zh=mt(Oh),Fh=Q({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$h=mt(Fh),Uh=Q({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hh=mt(Uh),Wh=[9,13,27,32],qa=p&&"CompositionEvent"in window,ti=null;p&&"documentMode"in document&&(ti=document.documentMode);var Gh=p&&"TextEvent"in window&&!ti,Ku=p&&(!qa||ti&&8<ti&&11>=ti),Qu=" ",Yu=!1;function Ju(e,t){switch(e){case"keyup":return Wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Vh(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(Yu=!0,Qu);case"textInput":return e=t.data,e===Qu&&Yu?null:e;default:return null}}function Kh(e,t){if(ur)return e==="compositionend"||!qa&&Ju(e,t)?(e=Uu(),Ji=Ka=pn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ku&&t.locale!=="ko"?null:t.data;default:return null}}var Qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qh[e.type]:t==="textarea"}function qu(e,t,r,s){vu(s),t=is(t,"onChange"),0<t.length&&(r=new Qa("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var ni=null,ri=null;function Yh(e){xc(e,0)}function es(e){var t=hr(e);if(at(t))return e}function Jh(e,t){if(e==="change")return t}var ec=!1;if(p){var eo;if(p){var to="oninput"in document;if(!to){var tc=document.createElement("div");tc.setAttribute("oninput","return;"),to=typeof tc.oninput=="function"}eo=to}else eo=!1;ec=eo&&(!document.documentMode||9<document.documentMode)}function nc(){ni&&(ni.detachEvent("onpropertychange",rc),ri=ni=null)}function rc(e){if(e.propertyName==="value"&&es(ri)){var t=[];qu(t,ri,e,Ra(e)),Su(Yh,t)}}function Xh(e,t,r){e==="focusin"?(nc(),ni=t,ri=r,ni.attachEvent("onpropertychange",rc)):e==="focusout"&&nc()}function Zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es(ri)}function qh(e,t){if(e==="click")return es(t)}function em(e,t){if(e==="input"||e==="change")return es(t)}function tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:tm;function ii(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var l=r[s];if(!h.call(t,l)||!At(e[l],t[l]))return!1}return!0}function ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,t){var r=ic(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ic(r)}}function ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function oc(){for(var e=window,t=Dn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Dn(e.document)}return t}function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nm(e){var t=oc(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ac(r.ownerDocument.documentElement,r)){if(s!==null&&no(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,d=Math.min(s.start,l);s=s.end===void 0?d:Math.min(s.end,l),!e.extend&&d>s&&(l=s,s=d,d=l),l=sc(r,d);var g=sc(r,s);l&&g&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>s?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=p&&"documentMode"in document&&11>=document.documentMode,cr=null,ro=null,si=null,io=!1;function lc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;io||cr==null||cr!==Dn(s)||(s=cr,"selectionStart"in s&&no(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),si&&ii(si,s)||(si=s,s=is(ro,"onSelect"),0<s.length&&(t=new Qa("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=cr)))}function ts(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var dr={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionend:ts("Transition","TransitionEnd")},so={},uc={};p&&(uc=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ns(e){if(so[e])return so[e];if(!dr[e])return e;var t=dr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in uc)return so[e]=t[r];return e}var cc=ns("animationend"),dc=ns("animationiteration"),fc=ns("animationstart"),pc=ns("transitionend"),hc=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){hc.set(e,t),f(t,[e])}for(var ao=0;ao<mc.length;ao++){var oo=mc[ao],im=oo.toLowerCase(),sm=oo[0].toUpperCase()+oo.slice(1);hn(im,"on"+sm)}hn(cc,"onAnimationEnd"),hn(dc,"onAnimationIteration"),hn(fc,"onAnimationStart"),hn("dblclick","onDoubleClick"),hn("focusin","onFocus"),hn("focusout","onBlur"),hn(pc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),am=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function gc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,ih(s,t,void 0,e),e.currentTarget=null}function xc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],l=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var g=s.length-1;0<=g;g--){var y=s[g],b=y.instance,A=y.currentTarget;if(y=y.listener,b!==d&&l.isPropagationStopped())break e;gc(l,y,A),d=b}else for(g=0;g<s.length;g++){if(y=s[g],b=y.instance,A=y.currentTarget,y=y.listener,b!==d&&l.isPropagationStopped())break e;gc(l,y,A),d=b}}}if(Fi)throw e=Oa,Fi=!1,Oa=null,e}function Ee(e,t){var r=t[go];r===void 0&&(r=t[go]=new Set);var s=e+"__bubble";r.has(s)||(yc(t,e,2,!1),r.add(s))}function lo(e,t,r){var s=0;t&&(s|=4),yc(r,e,s,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function oi(e){if(!e[rs]){e[rs]=!0,u.forEach(function(r){r!=="selectionchange"&&(am.has(r)||lo(r,!1,e),lo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,lo("selectionchange",!1,t))}}function yc(e,t,r,s){switch($u(t)){case 1:var l=bh;break;case 4:l=wh;break;default:l=Ga}r=l.bind(null,t,r,e),l=void 0,!_a||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function uo(e,t,r,s,l){var d=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var y=s.stateNode.containerInfo;if(y===l||y.nodeType===8&&y.parentNode===l)break;if(g===4)for(g=s.return;g!==null;){var b=g.tag;if((b===3||b===4)&&(b=g.stateNode.containerInfo,b===l||b.nodeType===8&&b.parentNode===l))return;g=g.return}for(;y!==null;){if(g=On(y),g===null)return;if(b=g.tag,b===5||b===6){s=d=g;continue e}y=y.parentNode}}s=s.return}Su(function(){var A=d,F=Ra(r),$=[];e:{var z=hc.get(e);if(z!==void 0){var J=Qa,q=e;switch(e){case"keypress":if(Xi(r)===0)break e;case"keydown":case"keyup":J=Bh;break;case"focusin":q="focus",J=Xa;break;case"focusout":q="blur",J=Xa;break;case"beforeblur":case"afterblur":J=Xa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=zh;break;case cc:case dc:case fc:J=Eh;break;case pc:J=$h;break;case"scroll":J=kh;break;case"wheel":J=Hh;break;case"copy":case"cut":case"paste":J=Ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Vu}var ee=(t&4)!==0,ze=!ee&&e==="scroll",T=ee?z!==null?z+"Capture":null:z;ee=[];for(var j=A,I;j!==null;){I=j;var U=I.stateNode;if(I.tag===5&&U!==null&&(I=U,T!==null&&(U=Hr(j,T),U!=null&&ee.push(li(j,U,I)))),ze)break;j=j.return}0<ee.length&&(z=new J(z,q,null,r,F),$.push({event:z,listeners:ee}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",z&&r!==Ma&&(q=r.relatedTarget||r.fromElement)&&(On(q)||q[Qt]))break e;if((J||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,J?(q=r.relatedTarget||r.toElement,J=A,q=q?On(q):null,q!==null&&(ze=_n(q),q!==ze||q.tag!==5&&q.tag!==6)&&(q=null)):(J=null,q=A),J!==q)){if(ee=Wu,U="onMouseLeave",T="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Vu,U="onPointerLeave",T="onPointerEnter",j="pointer"),ze=J==null?z:hr(J),I=q==null?z:hr(q),z=new ee(U,j+"leave",J,r,F),z.target=ze,z.relatedTarget=I,U=null,On(F)===A&&(ee=new ee(T,j+"enter",q,r,F),ee.target=I,ee.relatedTarget=ze,U=ee),ze=U,J&&q)t:{for(ee=J,T=q,j=0,I=ee;I;I=fr(I))j++;for(I=0,U=T;U;U=fr(U))I++;for(;0<j-I;)ee=fr(ee),j--;for(;0<I-j;)T=fr(T),I--;for(;j--;){if(ee===T||T!==null&&ee===T.alternate)break t;ee=fr(ee),T=fr(T)}ee=null}else ee=null;J!==null&&vc($,z,J,ee,!1),q!==null&&ze!==null&&vc($,ze,q,ee,!0)}}e:{if(z=A?hr(A):window,J=z.nodeName&&z.nodeName.toLowerCase(),J==="select"||J==="input"&&z.type==="file")var ne=Jh;else if(Zu(z))if(ec)ne=em;else{ne=Zh;var se=Xh}else(J=z.nodeName)&&J.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(ne=qh);if(ne&&(ne=ne(e,A))){qu($,ne,r,F);break e}se&&se(e,z,A),e==="focusout"&&(se=z._wrapperState)&&se.controlled&&z.type==="number"&&_e(z,"number",z.value)}switch(se=A?hr(A):window,e){case"focusin":(Zu(se)||se.contentEditable==="true")&&(cr=se,ro=A,si=null);break;case"focusout":si=ro=cr=null;break;case"mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":io=!1,lc($,r,F);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":lc($,r,F)}var ae;if(qa)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ur?Ju(e,r)&&(ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ue="onCompositionStart");ue&&(Ku&&r.locale!=="ko"&&(ur||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ur&&(ae=Uu()):(pn=F,Ka="value"in pn?pn.value:pn.textContent,ur=!0)),se=is(A,ue),0<se.length&&(ue=new Gu(ue,e,null,r,F),$.push({event:ue,listeners:se}),ae?ue.data=ae:(ae=Xu(r),ae!==null&&(ue.data=ae)))),(ae=Gh?Vh(e,r):Kh(e,r))&&(A=is(A,"onBeforeInput"),0<A.length&&(F=new Gu("onBeforeInput","beforeinput",null,r,F),$.push({event:F,listeners:A}),F.data=ae))}xc($,t)})}function li(e,t,r){return{instance:e,listener:t,currentTarget:r}}function is(e,t){for(var r=t+"Capture",s=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=Hr(e,r),d!=null&&s.unshift(li(e,d,l)),d=Hr(e,t),d!=null&&s.push(li(e,d,l))),e=e.return}return s}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,r,s,l){for(var d=t._reactName,g=[];r!==null&&r!==s;){var y=r,b=y.alternate,A=y.stateNode;if(b!==null&&b===s)break;y.tag===5&&A!==null&&(y=A,l?(b=Hr(r,d),b!=null&&g.unshift(li(r,b,y))):l||(b=Hr(r,d),b!=null&&g.push(li(r,b,y)))),r=r.return}g.length!==0&&e.push({event:t,listeners:g})}var om=/\r\n?/g,lm=/\u0000|\uFFFD/g;function bc(e){return(typeof e=="string"?e:""+e).replace(om,`
`).replace(lm,"")}function ss(e,t,r){if(t=bc(t),bc(e)!==t&&r)throw Error(i(425))}function as(){}var co=null,fo=null;function po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ho=typeof setTimeout=="function"?setTimeout:void 0,um=typeof clearTimeout=="function"?clearTimeout:void 0,wc=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof wc<"u"?function(e){return wc.resolve(null).then(e).catch(dm)}:ho;function dm(e){setTimeout(function(){throw e})}function mo(e,t){var r=t,s=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(s===0){e.removeChild(l),Zr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=l}while(r);Zr(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Ft="__reactFiber$"+pr,ui="__reactProps$"+pr,Qt="__reactContainer$"+pr,go="__reactEvents$"+pr,fm="__reactListeners$"+pr,pm="__reactHandles$"+pr;function On(e){var t=e[Ft];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qt]||r[Ft]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=kc(e);e!==null;){if(r=e[Ft])return r;e=kc(e)}return t}e=r,r=e.parentNode}return null}function ci(e){return e=e[Ft]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function os(e){return e[ui]||null}var xo=[],mr=-1;function gn(e){return{current:e}}function Te(e){0>mr||(e.current=xo[mr],xo[mr]=null,mr--)}function Ce(e,t){mr++,xo[mr]=e.current,e.current=t}var xn={},qe=gn(xn),ot=gn(!1),zn=xn;function gr(e,t){var r=e.type.contextTypes;if(!r)return xn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in r)l[d]=t[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function lt(e){return e=e.childContextTypes,e!=null}function ls(){Te(ot),Te(qe)}function Sc(e,t,r){if(qe.current!==xn)throw Error(i(168));Ce(qe,t),Ce(ot,r)}function jc(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(i(108,re(e)||"Unknown",l));return Q({},r,s)}function us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,zn=qe.current,Ce(qe,e),Ce(ot,ot.current),!0}function Nc(e,t,r){var s=e.stateNode;if(!s)throw Error(i(169));r?(e=jc(e,t,zn),s.__reactInternalMemoizedMergedChildContext=e,Te(ot),Te(qe),Ce(qe,e)):Te(ot),Ce(ot,r)}var Yt=null,cs=!1,yo=!1;function Cc(e){Yt===null?Yt=[e]:Yt.push(e)}function hm(e){cs=!0,Cc(e)}function yn(){if(!yo&&Yt!==null){yo=!0;var e=0,t=Se;try{var r=Yt;for(Se=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Yt=null,cs=!1}catch(l){throw Yt!==null&&(Yt=Yt.slice(e+1)),Tu(za,yn),l}finally{Se=t,yo=!1}}return null}var xr=[],yr=0,ds=null,fs=0,St=[],jt=0,Fn=null,Jt=1,Xt="";function $n(e,t){xr[yr++]=fs,xr[yr++]=ds,ds=e,fs=t}function Ec(e,t,r){St[jt++]=Jt,St[jt++]=Xt,St[jt++]=Fn,Fn=e;var s=Jt;e=Xt;var l=32-It(s)-1;s&=~(1<<l),r+=1;var d=32-It(t)+l;if(30<d){var g=l-l%5;d=(s&(1<<g)-1).toString(32),s>>=g,l-=g,Jt=1<<32-It(t)+l|r<<l|s,Xt=d+e}else Jt=1<<d|r<<l|s,Xt=e}function vo(e){e.return!==null&&($n(e,1),Ec(e,1,0))}function bo(e){for(;e===ds;)ds=xr[--yr],xr[yr]=null,fs=xr[--yr],xr[yr]=null;for(;e===Fn;)Fn=St[--jt],St[jt]=null,Xt=St[--jt],St[jt]=null,Jt=St[--jt],St[jt]=null}var gt=null,xt=null,Ie=!1,Lt=null;function Tc(e,t){var r=Tt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Pc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,xt=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Fn!==null?{id:Jt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Tt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,gt=e,xt=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ko(e){if(Ie){var t=xt;if(t){var r=t;if(!Pc(e,t)){if(wo(e))throw Error(i(418));t=mn(r.nextSibling);var s=gt;t&&Pc(e,t)?Tc(s,r):(e.flags=e.flags&-4097|2,Ie=!1,gt=e)}}else{if(wo(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ie=!1,gt=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function ps(e){if(e!==gt)return!1;if(!Ie)return Ic(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!po(e.type,e.memoizedProps)),t&&(t=xt)){if(wo(e))throw Ac(),Error(i(418));for(;t;)Tc(e,t),t=mn(t.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){xt=mn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=gt?mn(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=xt;e;)e=mn(e.nextSibling)}function vr(){xt=gt=null,Ie=!1}function So(e){Lt===null?Lt=[e]:Lt.push(e)}var mm=R.ReactCurrentBatchConfig;function di(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var s=r.stateNode}if(!s)throw Error(i(147,e));var l=s,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(g){var y=l.refs;g===null?delete y[d]:y[d]=g},t._stringRef=d,t)}if(typeof e!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function hs(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lc(e){var t=e._init;return t(e._payload)}function Mc(e){function t(T,j){if(e){var I=T.deletions;I===null?(T.deletions=[j],T.flags|=16):I.push(j)}}function r(T,j){if(!e)return null;for(;j!==null;)t(T,j),j=j.sibling;return null}function s(T,j){for(T=new Map;j!==null;)j.key!==null?T.set(j.key,j):T.set(j.index,j),j=j.sibling;return T}function l(T,j){return T=Cn(T,j),T.index=0,T.sibling=null,T}function d(T,j,I){return T.index=I,e?(I=T.alternate,I!==null?(I=I.index,I<j?(T.flags|=2,j):I):(T.flags|=2,j)):(T.flags|=1048576,j)}function g(T){return e&&T.alternate===null&&(T.flags|=2),T}function y(T,j,I,U){return j===null||j.tag!==6?(j=hl(I,T.mode,U),j.return=T,j):(j=l(j,I),j.return=T,j)}function b(T,j,I,U){var ne=I.type;return ne===H?F(T,j,I.props.children,U,I.key):j!==null&&(j.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Be&&Lc(ne)===j.type)?(U=l(j,I.props),U.ref=di(T,j,I),U.return=T,U):(U=Os(I.type,I.key,I.props,null,T.mode,U),U.ref=di(T,j,I),U.return=T,U)}function A(T,j,I,U){return j===null||j.tag!==4||j.stateNode.containerInfo!==I.containerInfo||j.stateNode.implementation!==I.implementation?(j=ml(I,T.mode,U),j.return=T,j):(j=l(j,I.children||[]),j.return=T,j)}function F(T,j,I,U,ne){return j===null||j.tag!==7?(j=Yn(I,T.mode,U,ne),j.return=T,j):(j=l(j,I),j.return=T,j)}function $(T,j,I){if(typeof j=="string"&&j!==""||typeof j=="number")return j=hl(""+j,T.mode,I),j.return=T,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case O:return I=Os(j.type,j.key,j.props,null,T.mode,I),I.ref=di(T,null,j),I.return=T,I;case G:return j=ml(j,T.mode,I),j.return=T,j;case Be:var U=j._init;return $(T,U(j._payload),I)}if(Bn(j)||te(j))return j=Yn(j,T.mode,I,null),j.return=T,j;hs(T,j)}return null}function z(T,j,I,U){var ne=j!==null?j.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ne!==null?null:y(T,j,""+I,U);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case O:return I.key===ne?b(T,j,I,U):null;case G:return I.key===ne?A(T,j,I,U):null;case Be:return ne=I._init,z(T,j,ne(I._payload),U)}if(Bn(I)||te(I))return ne!==null?null:F(T,j,I,U,null);hs(T,I)}return null}function J(T,j,I,U,ne){if(typeof U=="string"&&U!==""||typeof U=="number")return T=T.get(I)||null,y(j,T,""+U,ne);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case O:return T=T.get(U.key===null?I:U.key)||null,b(j,T,U,ne);case G:return T=T.get(U.key===null?I:U.key)||null,A(j,T,U,ne);case Be:var se=U._init;return J(T,j,I,se(U._payload),ne)}if(Bn(U)||te(U))return T=T.get(I)||null,F(j,T,U,ne,null);hs(j,U)}return null}function q(T,j,I,U){for(var ne=null,se=null,ae=j,ue=j=0,Ye=null;ae!==null&&ue<I.length;ue++){ae.index>ue?(Ye=ae,ae=null):Ye=ae.sibling;var be=z(T,ae,I[ue],U);if(be===null){ae===null&&(ae=Ye);break}e&&ae&&be.alternate===null&&t(T,ae),j=d(be,j,ue),se===null?ne=be:se.sibling=be,se=be,ae=Ye}if(ue===I.length)return r(T,ae),Ie&&$n(T,ue),ne;if(ae===null){for(;ue<I.length;ue++)ae=$(T,I[ue],U),ae!==null&&(j=d(ae,j,ue),se===null?ne=ae:se.sibling=ae,se=ae);return Ie&&$n(T,ue),ne}for(ae=s(T,ae);ue<I.length;ue++)Ye=J(ae,T,ue,I[ue],U),Ye!==null&&(e&&Ye.alternate!==null&&ae.delete(Ye.key===null?ue:Ye.key),j=d(Ye,j,ue),se===null?ne=Ye:se.sibling=Ye,se=Ye);return e&&ae.forEach(function(En){return t(T,En)}),Ie&&$n(T,ue),ne}function ee(T,j,I,U){var ne=te(I);if(typeof ne!="function")throw Error(i(150));if(I=ne.call(I),I==null)throw Error(i(151));for(var se=ne=null,ae=j,ue=j=0,Ye=null,be=I.next();ae!==null&&!be.done;ue++,be=I.next()){ae.index>ue?(Ye=ae,ae=null):Ye=ae.sibling;var En=z(T,ae,be.value,U);if(En===null){ae===null&&(ae=Ye);break}e&&ae&&En.alternate===null&&t(T,ae),j=d(En,j,ue),se===null?ne=En:se.sibling=En,se=En,ae=Ye}if(be.done)return r(T,ae),Ie&&$n(T,ue),ne;if(ae===null){for(;!be.done;ue++,be=I.next())be=$(T,be.value,U),be!==null&&(j=d(be,j,ue),se===null?ne=be:se.sibling=be,se=be);return Ie&&$n(T,ue),ne}for(ae=s(T,ae);!be.done;ue++,be=I.next())be=J(ae,T,ue,be.value,U),be!==null&&(e&&be.alternate!==null&&ae.delete(be.key===null?ue:be.key),j=d(be,j,ue),se===null?ne=be:se.sibling=be,se=be);return e&&ae.forEach(function(Km){return t(T,Km)}),Ie&&$n(T,ue),ne}function ze(T,j,I,U){if(typeof I=="object"&&I!==null&&I.type===H&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case O:e:{for(var ne=I.key,se=j;se!==null;){if(se.key===ne){if(ne=I.type,ne===H){if(se.tag===7){r(T,se.sibling),j=l(se,I.props.children),j.return=T,T=j;break e}}else if(se.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Be&&Lc(ne)===se.type){r(T,se.sibling),j=l(se,I.props),j.ref=di(T,se,I),j.return=T,T=j;break e}r(T,se);break}else t(T,se);se=se.sibling}I.type===H?(j=Yn(I.props.children,T.mode,U,I.key),j.return=T,T=j):(U=Os(I.type,I.key,I.props,null,T.mode,U),U.ref=di(T,j,I),U.return=T,T=U)}return g(T);case G:e:{for(se=I.key;j!==null;){if(j.key===se)if(j.tag===4&&j.stateNode.containerInfo===I.containerInfo&&j.stateNode.implementation===I.implementation){r(T,j.sibling),j=l(j,I.children||[]),j.return=T,T=j;break e}else{r(T,j);break}else t(T,j);j=j.sibling}j=ml(I,T.mode,U),j.return=T,T=j}return g(T);case Be:return se=I._init,ze(T,j,se(I._payload),U)}if(Bn(I))return q(T,j,I,U);if(te(I))return ee(T,j,I,U);hs(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,j!==null&&j.tag===6?(r(T,j.sibling),j=l(j,I),j.return=T,T=j):(r(T,j),j=hl(I,T.mode,U),j.return=T,T=j),g(T)):r(T,j)}return ze}var br=Mc(!0),Rc=Mc(!1),ms=gn(null),gs=null,wr=null,jo=null;function No(){jo=wr=gs=null}function Co(e){var t=ms.current;Te(ms),e._currentValue=t}function Eo(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function kr(e,t){gs=e,jo=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(gs===null)throw Error(i(308));wr=e,gs.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Un=null;function To(e){Un===null?Un=[e]:Un.push(e)}function Dc(e,t,r,s){var l=t.interleaved;return l===null?(r.next=r,To(t)):(r.next=l.next,l.next=r),t.interleaved=r,Zt(e,s)}function Zt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var vn=!1;function Po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ve&2)!==0){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,Zt(e,r)}return l=s.interleaved,l===null?(t.next=t,To(s)):(t.next=l.next,l.next=t),s.interleaved=t,Zt(e,r)}function xs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Ua(e,r)}}function _c(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var l=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var g={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?l=d=g:d=d.next=g,r=r.next}while(r!==null);d===null?l=d=t:d=d.next=t}else l=d=t;r={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ys(e,t,r,s){var l=e.updateQueue;vn=!1;var d=l.firstBaseUpdate,g=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var b=y,A=b.next;b.next=null,g===null?d=A:g.next=A,g=b;var F=e.alternate;F!==null&&(F=F.updateQueue,y=F.lastBaseUpdate,y!==g&&(y===null?F.firstBaseUpdate=A:y.next=A,F.lastBaseUpdate=b))}if(d!==null){var $=l.baseState;g=0,F=A=b=null,y=d;do{var z=y.lane,J=y.eventTime;if((s&z)===z){F!==null&&(F=F.next={eventTime:J,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var q=e,ee=y;switch(z=t,J=r,ee.tag){case 1:if(q=ee.payload,typeof q=="function"){$=q.call(J,$,z);break e}$=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=ee.payload,z=typeof q=="function"?q.call(J,$,z):q,z==null)break e;$=Q({},$,z);break e;case 2:vn=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,z=l.effects,z===null?l.effects=[y]:z.push(y))}else J={eventTime:J,lane:z,tag:y.tag,payload:y.payload,callback:y.callback,next:null},F===null?(A=F=J,b=$):F=F.next=J,g|=z;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;z=y,y=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);if(F===null&&(b=$),l.baseState=b,l.firstBaseUpdate=A,l.lastBaseUpdate=F,t=l.shared.interleaved,t!==null){l=t;do g|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);Gn|=g,e.lanes=g,e.memoizedState=$}}function Oc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=r,typeof l!="function")throw Error(i(191,l));l.call(s)}}}var fi={},$t=gn(fi),pi=gn(fi),hi=gn(fi);function Hn(e){if(e===fi)throw Error(i(174));return e}function Io(e,t){switch(Ce(hi,t),Ce(pi,e),Ce($t,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ia(t,e)}Te($t),Ce($t,t)}function Sr(){Te($t),Te(pi),Te(hi)}function zc(e){Hn(hi.current);var t=Hn($t.current),r=Ia(t,e.type);t!==r&&(Ce(pi,e),Ce($t,r))}function Ao(e){pi.current===e&&(Te($t),Te(pi))}var Le=gn(0);function vs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=[];function Mo(){for(var e=0;e<Lo.length;e++)Lo[e]._workInProgressVersionPrimary=null;Lo.length=0}var bs=R.ReactCurrentDispatcher,Ro=R.ReactCurrentBatchConfig,Wn=0,Me=null,Ge=null,Ke=null,ws=!1,mi=!1,gi=0,gm=0;function et(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!At(e[r],t[r]))return!1;return!0}function Bo(e,t,r,s,l,d){if(Wn=d,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bs.current=e===null||e.memoizedState===null?bm:wm,e=r(s,l),mi){d=0;do{if(mi=!1,gi=0,25<=d)throw Error(i(301));d+=1,Ke=Ge=null,t.updateQueue=null,bs.current=km,e=r(s,l)}while(mi)}if(bs.current=js,t=Ge!==null&&Ge.next!==null,Wn=0,Ke=Ge=Me=null,ws=!1,t)throw Error(i(300));return e}function _o(){var e=gi!==0;return gi=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Me.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ct(){if(Ge===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ke===null?Me.memoizedState:Ke.next;if(t!==null)Ke=t,Ge=e;else{if(e===null)throw Error(i(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ke===null?Me.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function xi(e,t){return typeof t=="function"?t(e):t}function Oo(e){var t=Ct(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var s=Ge,l=s.baseQueue,d=r.pending;if(d!==null){if(l!==null){var g=l.next;l.next=d.next,d.next=g}s.baseQueue=l=d,r.pending=null}if(l!==null){d=l.next,s=s.baseState;var y=g=null,b=null,A=d;do{var F=A.lane;if((Wn&F)===F)b!==null&&(b=b.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),s=A.hasEagerState?A.eagerState:e(s,A.action);else{var $={lane:F,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};b===null?(y=b=$,g=s):b=b.next=$,Me.lanes|=F,Gn|=F}A=A.next}while(A!==null&&A!==d);b===null?g=s:b.next=y,At(s,t.memoizedState)||(ut=!0),t.memoizedState=s,t.baseState=g,t.baseQueue=b,r.lastRenderedState=s}if(e=r.interleaved,e!==null){l=e;do d=l.lane,Me.lanes|=d,Gn|=d,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function zo(e){var t=Ct(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var s=r.dispatch,l=r.pending,d=t.memoizedState;if(l!==null){r.pending=null;var g=l=l.next;do d=e(d,g.action),g=g.next;while(g!==l);At(d,t.memoizedState)||(ut=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,s]}function Fc(){}function $c(e,t){var r=Me,s=Ct(),l=t(),d=!At(s.memoizedState,l);if(d&&(s.memoizedState=l,ut=!0),s=s.queue,Fo(Wc.bind(null,r,s,e),[e]),s.getSnapshot!==t||d||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,yi(9,Hc.bind(null,r,s,l,t),void 0,null),Qe===null)throw Error(i(349));(Wn&30)!==0||Uc(r,t,l)}return l}function Uc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Hc(e,t,r,s){t.value=r,t.getSnapshot=s,Gc(t)&&Vc(e)}function Wc(e,t,r){return r(function(){Gc(t)&&Vc(e)})}function Gc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!At(e,r)}catch{return!0}}function Vc(e){var t=Zt(e,1);t!==null&&Bt(t,e,1,-1)}function Kc(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,Me,e),[t.memoizedState,e]}function yi(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Qc(){return Ct().memoizedState}function ks(e,t,r,s){var l=Ut();Me.flags|=e,l.memoizedState=yi(1|t,r,void 0,s===void 0?null:s)}function Ss(e,t,r,s){var l=Ct();s=s===void 0?null:s;var d=void 0;if(Ge!==null){var g=Ge.memoizedState;if(d=g.destroy,s!==null&&Do(s,g.deps)){l.memoizedState=yi(t,r,d,s);return}}Me.flags|=e,l.memoizedState=yi(1|t,r,d,s)}function Yc(e,t){return ks(8390656,8,e,t)}function Fo(e,t){return Ss(2048,8,e,t)}function Jc(e,t){return Ss(4,2,e,t)}function Xc(e,t){return Ss(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qc(e,t,r){return r=r!=null?r.concat([e]):null,Ss(4,4,Zc.bind(null,t,e),r)}function $o(){}function ed(e,t){var r=Ct();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Do(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function td(e,t){var r=Ct();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Do(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function nd(e,t,r){return(Wn&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r):(At(r,t)||(r=Lu(),Me.lanes|=r,Gn|=r,e.baseState=!0),t)}function xm(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var s=Ro.transition;Ro.transition={};try{e(!1),t()}finally{Se=r,Ro.transition=s}}function rd(){return Ct().memoizedState}function ym(e,t,r){var s=jn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},id(e))sd(t,r);else if(r=Dc(e,t,r,s),r!==null){var l=it();Bt(r,e,s,l),ad(r,t,s)}}function vm(e,t,r){var s=jn(e),l={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(id(e))sd(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var g=t.lastRenderedState,y=d(g,r);if(l.hasEagerState=!0,l.eagerState=y,At(y,g)){var b=t.interleaved;b===null?(l.next=l,To(t)):(l.next=b.next,b.next=l),t.interleaved=l;return}}catch{}finally{}r=Dc(e,t,l,s),r!==null&&(l=it(),Bt(r,e,s,l),ad(r,t,s))}}function id(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function sd(e,t){mi=ws=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ad(e,t,r){if((r&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Ua(e,r)}}var js={readContext:Nt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},bm={readContext:Nt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:Yc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ks(4194308,4,Zc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return ks(4,2,e,t)},useMemo:function(e,t){var r=Ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Ut();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=ym.bind(null,Me,e),[s.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Kc,useDebugValue:$o,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Kc(!1),t=e[0];return e=xm.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Me,l=Ut();if(Ie){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),Qe===null)throw Error(i(349));(Wn&30)!==0||Uc(s,t,r)}l.memoizedState=r;var d={value:r,getSnapshot:t};return l.queue=d,Yc(Wc.bind(null,s,d,e),[e]),s.flags|=2048,yi(9,Hc.bind(null,s,d,r,t),void 0,null),r},useId:function(){var e=Ut(),t=Qe.identifierPrefix;if(Ie){var r=Xt,s=Jt;r=(s&~(1<<32-It(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=gi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=gm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wm={readContext:Nt,useCallback:ed,useContext:Nt,useEffect:Fo,useImperativeHandle:qc,useInsertionEffect:Jc,useLayoutEffect:Xc,useMemo:td,useReducer:Oo,useRef:Qc,useState:function(){return Oo(xi)},useDebugValue:$o,useDeferredValue:function(e){var t=Ct();return nd(t,Ge.memoizedState,e)},useTransition:function(){var e=Oo(xi)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:$c,useId:rd,unstable_isNewReconciler:!1},km={readContext:Nt,useCallback:ed,useContext:Nt,useEffect:Fo,useImperativeHandle:qc,useInsertionEffect:Jc,useLayoutEffect:Xc,useMemo:td,useReducer:zo,useRef:Qc,useState:function(){return zo(xi)},useDebugValue:$o,useDeferredValue:function(e){var t=Ct();return Ge===null?t.memoizedState=e:nd(t,Ge.memoizedState,e)},useTransition:function(){var e=zo(xi)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:$c,useId:rd,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Uo(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Q({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ns={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=it(),l=jn(e),d=qt(s,l);d.payload=t,r!=null&&(d.callback=r),t=bn(e,d,l),t!==null&&(Bt(t,e,l,s),xs(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=it(),l=jn(e),d=qt(s,l);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=bn(e,d,l),t!==null&&(Bt(t,e,l,s),xs(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=it(),s=jn(e),l=qt(r,s);l.tag=2,t!=null&&(l.callback=t),t=bn(e,l,s),t!==null&&(Bt(t,e,s,r),xs(t,e,s))}};function od(e,t,r,s,l,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,g):t.prototype&&t.prototype.isPureReactComponent?!ii(r,s)||!ii(l,d):!0}function ld(e,t,r){var s=!1,l=xn,d=t.contextType;return typeof d=="object"&&d!==null?d=Nt(d):(l=lt(t)?zn:qe.current,s=t.contextTypes,d=(s=s!=null)?gr(e,l):xn),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ns,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function ud(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Ho(e,t,r,s){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Po(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=Nt(d):(d=lt(t)?zn:qe.current,l.context=gr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Uo(e,t,d,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ns.enqueueReplaceState(l,l.state,null),ys(e,r,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var r="",s=t;do r+=me(s),s=s.return;while(s);var l=r}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function Wo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Go(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function cd(e,t,r){r=qt(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Ls||(Ls=!0,al=s),Go(e,t)},r}function dd(e,t,r){r=qt(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;r.payload=function(){return s(l)},r.callback=function(){Go(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){Go(e,t),typeof s!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),r}function fd(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Sm;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(r)||(l.add(r),e=_m.bind(null,e,t,r),t.then(e,e))}function pd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hd(e,t,r,s,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=qt(-1,1),t.tag=2,bn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var jm=R.ReactCurrentOwner,ut=!1;function rt(e,t,r,s){t.child=e===null?Rc(t,null,r,s):br(t,e.child,r,s)}function md(e,t,r,s,l){r=r.render;var d=t.ref;return kr(t,l),s=Bo(e,t,r,s,d,l),r=_o(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,en(e,t,l)):(Ie&&r&&vo(t),t.flags|=1,rt(e,t,s,l),t.child)}function gd(e,t,r,s,l){if(e===null){var d=r.type;return typeof d=="function"&&!pl(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,xd(e,t,d,s,l)):(e=Os(r.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var g=d.memoizedProps;if(r=r.compare,r=r!==null?r:ii,r(g,s)&&e.ref===t.ref)return en(e,t,l)}return t.flags|=1,e=Cn(d,s),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,r,s,l){if(e!==null){var d=e.memoizedProps;if(ii(d,s)&&e.ref===t.ref)if(ut=!1,t.pendingProps=s=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,en(e,t,l)}return Vo(e,t,r,s,l)}function yd(e,t,r){var s=t.pendingProps,l=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Cr,yt),yt|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Cr,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:r,Ce(Cr,yt),yt|=s}else d!==null?(s=d.baseLanes|r,t.memoizedState=null):s=r,Ce(Cr,yt),yt|=s;return rt(e,t,l,r),t.child}function vd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Vo(e,t,r,s,l){var d=lt(r)?zn:qe.current;return d=gr(t,d),kr(t,l),r=Bo(e,t,r,s,d,l),s=_o(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,en(e,t,l)):(Ie&&s&&vo(t),t.flags|=1,rt(e,t,r,l),t.child)}function bd(e,t,r,s,l){if(lt(r)){var d=!0;us(t)}else d=!1;if(kr(t,l),t.stateNode===null)Es(e,t),ld(t,r,s),Ho(t,r,s,l),s=!0;else if(e===null){var g=t.stateNode,y=t.memoizedProps;g.props=y;var b=g.context,A=r.contextType;typeof A=="object"&&A!==null?A=Nt(A):(A=lt(r)?zn:qe.current,A=gr(t,A));var F=r.getDerivedStateFromProps,$=typeof F=="function"||typeof g.getSnapshotBeforeUpdate=="function";$||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==s||b!==A)&&ud(t,g,s,A),vn=!1;var z=t.memoizedState;g.state=z,ys(t,s,g,l),b=t.memoizedState,y!==s||z!==b||ot.current||vn?(typeof F=="function"&&(Uo(t,r,F,s),b=t.memoizedState),(y=vn||od(t,r,y,s,z,b,A))?($||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=b),g.props=s,g.state=b,g.context=A,s=y):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{g=t.stateNode,Bc(e,t),y=t.memoizedProps,A=t.type===t.elementType?y:Mt(t.type,y),g.props=A,$=t.pendingProps,z=g.context,b=r.contextType,typeof b=="object"&&b!==null?b=Nt(b):(b=lt(r)?zn:qe.current,b=gr(t,b));var J=r.getDerivedStateFromProps;(F=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==$||z!==b)&&ud(t,g,s,b),vn=!1,z=t.memoizedState,g.state=z,ys(t,s,g,l);var q=t.memoizedState;y!==$||z!==q||ot.current||vn?(typeof J=="function"&&(Uo(t,r,J,s),q=t.memoizedState),(A=vn||od(t,r,A,s,z,q,b)||!1)?(F||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(s,q,b),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(s,q,b)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=q),g.props=s,g.state=q,g.context=b,s=A):(typeof g.componentDidUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),s=!1)}return Ko(e,t,r,s,d,l)}function Ko(e,t,r,s,l,d){vd(e,t);var g=(t.flags&128)!==0;if(!s&&!g)return l&&Nc(t,r,!1),en(e,t,d);s=t.stateNode,jm.current=t;var y=g&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&g?(t.child=br(t,e.child,null,d),t.child=br(t,null,y,d)):rt(e,t,y,d),t.memoizedState=s.state,l&&Nc(t,r,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?Sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sc(e,t.context,!1),Io(e,t.containerInfo)}function kd(e,t,r,s,l){return vr(),So(l),t.flags|=256,rt(e,t,r,s),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Yo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sd(e,t,r){var s=t.pendingProps,l=Le.current,d=!1,g=(t.flags&128)!==0,y;if((y=g)||(y=e!==null&&e.memoizedState===null?!1:(l&2)!==0),y?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ce(Le,l&1),e===null)return ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=s.children,e=s.fallback,d?(s=t.mode,d=t.child,g={mode:"hidden",children:g},(s&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=g):d=zs(g,s,0,null),e=Yn(e,s,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=Yo(r),t.memoizedState=Qo,e):Jo(t,g));if(l=e.memoizedState,l!==null&&(y=l.dehydrated,y!==null))return Nm(e,t,g,s,y,l,r);if(d){d=s.fallback,g=t.mode,l=e.child,y=l.sibling;var b={mode:"hidden",children:s.children};return(g&1)===0&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=b,t.deletions=null):(s=Cn(l,b),s.subtreeFlags=l.subtreeFlags&14680064),y!==null?d=Cn(y,d):(d=Yn(d,g,r,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,g=e.child.memoizedState,g=g===null?Yo(r):{baseLanes:g.baseLanes|r,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=e.childLanes&~r,t.memoizedState=Qo,s}return d=e.child,e=d.sibling,s=Cn(d,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Jo(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cs(e,t,r,s){return s!==null&&So(s),br(t,e.child,null,r),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nm(e,t,r,s,l,d,g){if(r)return t.flags&256?(t.flags&=-257,s=Wo(Error(i(422))),Cs(e,t,g,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=s.fallback,l=t.mode,s=zs({mode:"visible",children:s.children},l,0,null),d=Yn(d,l,g,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,(t.mode&1)!==0&&br(t,e.child,null,g),t.child.memoizedState=Yo(g),t.memoizedState=Qo,d);if((t.mode&1)===0)return Cs(e,t,g,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var y=s.dgst;return s=y,d=Error(i(419)),s=Wo(d,s,void 0),Cs(e,t,g,s)}if(y=(g&e.childLanes)!==0,ut||y){if(s=Qe,s!==null){switch(g&-g){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(s.suspendedLanes|g))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,Zt(e,l),Bt(s,e,l,-1))}return fl(),s=Wo(Error(i(421))),Cs(e,t,g,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,xt=mn(l.nextSibling),gt=t,Ie=!0,Lt=null,e!==null&&(St[jt++]=Jt,St[jt++]=Xt,St[jt++]=Fn,Jt=e.id,Xt=e.overflow,Fn=t),t=Jo(t,s.children),t.flags|=4096,t)}function jd(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Eo(e.return,t,r)}function Xo(e,t,r,s,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=l)}function Nd(e,t,r){var s=t.pendingProps,l=s.revealOrder,d=s.tail;if(rt(e,t,s.children,r),s=Le.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,r,t);else if(e.tag===19)jd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ce(Le,s),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&vs(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Xo(t,!1,l,r,d);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&vs(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Xo(t,!0,r,null,d);break;case"together":Xo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Es(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=Cn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Cn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Cm(e,t,r){switch(t.tag){case 3:wd(t),vr();break;case 5:zc(t);break;case 1:lt(t.type)&&us(t);break;case 4:Io(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;Ce(ms,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ce(Le,Le.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Sd(e,t,r):(Ce(Le,Le.current&1),e=en(e,t,r),e!==null?e.sibling:null);Ce(Le,Le.current&1);break;case 19:if(s=(r&t.childLanes)!==0,(e.flags&128)!==0){if(s)return Nd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ce(Le,Le.current),s)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,r)}return en(e,t,r)}var Cd,Zo,Ed,Td;Cd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Zo=function(){},Ed=function(e,t,r,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,Hn($t.current);var d=null;switch(r){case"input":l=ir(e,l),s=ir(e,s),d=[];break;case"select":l=Q({},l,{value:void 0}),s=Q({},s,{value:void 0}),d=[];break;case"textarea":l=Pa(e,l),s=Pa(e,s),d=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=as)}Aa(r,s);var g;r=null;for(A in l)if(!s.hasOwnProperty(A)&&l.hasOwnProperty(A)&&l[A]!=null)if(A==="style"){var y=l[A];for(g in y)y.hasOwnProperty(g)&&(r||(r={}),r[g]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(c.hasOwnProperty(A)?d||(d=[]):(d=d||[]).push(A,null));for(A in s){var b=s[A];if(y=l!=null?l[A]:void 0,s.hasOwnProperty(A)&&b!==y&&(b!=null||y!=null))if(A==="style")if(y){for(g in y)!y.hasOwnProperty(g)||b&&b.hasOwnProperty(g)||(r||(r={}),r[g]="");for(g in b)b.hasOwnProperty(g)&&y[g]!==b[g]&&(r||(r={}),r[g]=b[g])}else r||(d||(d=[]),d.push(A,r)),r=b;else A==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,y=y?y.__html:void 0,b!=null&&y!==b&&(d=d||[]).push(A,b)):A==="children"?typeof b!="string"&&typeof b!="number"||(d=d||[]).push(A,""+b):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(c.hasOwnProperty(A)?(b!=null&&A==="onScroll"&&Ee("scroll",e),d||y===b||(d=[])):(d=d||[]).push(A,b))}r&&(d=d||[]).push("style",r);var A=d;(t.updateQueue=A)&&(t.flags|=4)}},Td=function(e,t,r,s){r!==s&&(t.flags|=4)};function vi(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Em(e,t,r){var s=t.pendingProps;switch(bo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return lt(t.type)&&ls(),tt(t),null;case 3:return s=t.stateNode,Sr(),Te(ot),Te(qe),Mo(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&(ul(Lt),Lt=null))),Zo(e,t),tt(t),null;case 5:Ao(t);var l=Hn(hi.current);if(r=t.type,e!==null&&t.stateNode!=null)Ed(e,t,r,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(i(166));return tt(t),null}if(e=Hn($t.current),ps(t)){s=t.stateNode,r=t.type;var d=t.memoizedProps;switch(s[Ft]=t,s[ui]=d,e=(t.mode&1)!==0,r){case"dialog":Ee("cancel",s),Ee("close",s);break;case"iframe":case"object":case"embed":Ee("load",s);break;case"video":case"audio":for(l=0;l<ai.length;l++)Ee(ai[l],s);break;case"source":Ee("error",s);break;case"img":case"image":case"link":Ee("error",s),Ee("load",s);break;case"details":Ee("toggle",s);break;case"input":Fr(s,d),Ee("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Ee("invalid",s);break;case"textarea":du(s,d),Ee("invalid",s)}Aa(r,d),l=null;for(var g in d)if(d.hasOwnProperty(g)){var y=d[g];g==="children"?typeof y=="string"?s.textContent!==y&&(d.suppressHydrationWarning!==!0&&ss(s.textContent,y,e),l=["children",y]):typeof y=="number"&&s.textContent!==""+y&&(d.suppressHydrationWarning!==!0&&ss(s.textContent,y,e),l=["children",""+y]):c.hasOwnProperty(g)&&y!=null&&g==="onScroll"&&Ee("scroll",s)}switch(r){case"input":wt(s),Y(s,d,!0);break;case"textarea":wt(s),pu(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=as)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{g=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=g.createElement(r,{is:s.is}):(e=g.createElement(r),r==="select"&&(g=e,s.multiple?g.multiple=!0:s.size&&(g.size=s.size))):e=g.createElementNS(e,r),e[Ft]=t,e[ui]=s,Cd(e,t,!1,!1),t.stateNode=e;e:{switch(g=La(r,s),r){case"dialog":Ee("cancel",e),Ee("close",e),l=s;break;case"iframe":case"object":case"embed":Ee("load",e),l=s;break;case"video":case"audio":for(l=0;l<ai.length;l++)Ee(ai[l],e);l=s;break;case"source":Ee("error",e),l=s;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),l=s;break;case"details":Ee("toggle",e),l=s;break;case"input":Fr(e,s),l=ir(e,s),Ee("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=Q({},s,{value:void 0}),Ee("invalid",e);break;case"textarea":du(e,s),l=Pa(e,s),Ee("invalid",e);break;default:l=s}Aa(r,l),y=l;for(d in y)if(y.hasOwnProperty(d)){var b=y[d];d==="style"?xu(e,b):d==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&mu(e,b)):d==="children"?typeof b=="string"?(r!=="textarea"||b!=="")&&$r(e,b):typeof b=="number"&&$r(e,""+b):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(c.hasOwnProperty(d)?b!=null&&d==="onScroll"&&Ee("scroll",e):b!=null&&W(e,d,b,g))}switch(r){case"input":wt(e),Y(e,s,!1);break;case"textarea":wt(e),pu(e);break;case"option":s.value!=null&&e.setAttribute("value",""+pe(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?kt(e,!!s.multiple,d,!1):s.defaultValue!=null&&kt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=as)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Td(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(r=Hn(hi.current),Hn($t.current),ps(t)){if(s=t.stateNode,r=t.memoizedProps,s[Ft]=t,(d=s.nodeValue!==r)&&(e=gt,e!==null))switch(e.tag){case 3:ss(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ss(s.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Ft]=t,t.stateNode=s}return tt(t),null;case 13:if(Te(Le),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ac(),vr(),t.flags|=98560,d=!1;else if(d=ps(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Ft]=t}else vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),d=!1}else Lt!==null&&(ul(Lt),Lt=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?Ve===0&&(Ve=3):fl())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Sr(),Zo(e,t),e===null&&oi(t.stateNode.containerInfo),tt(t),null;case 10:return Co(t.type._context),tt(t),null;case 17:return lt(t.type)&&ls(),tt(t),null;case 19:if(Te(Le),d=t.memoizedState,d===null)return tt(t),null;if(s=(t.flags&128)!==0,g=d.rendering,g===null)if(s)vi(d,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=vs(e),g!==null){for(t.flags|=128,vi(d,!1),s=g.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)d=r,e=s,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,e=g.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ce(Le,Le.current&1|2),t.child}e=e.sibling}d.tail!==null&&Oe()>Er&&(t.flags|=128,s=!0,vi(d,!1),t.lanes=4194304)}else{if(!s)if(e=vs(g),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),vi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ie)return tt(t),null}else 2*Oe()-d.renderingStartTime>Er&&r!==1073741824&&(t.flags|=128,s=!0,vi(d,!1),t.lanes=4194304);d.isBackwards?(g.sibling=t.child,t.child=g):(r=d.last,r!==null?r.sibling=g:t.child=g,d.last=g)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Oe(),t.sibling=null,r=Le.current,Ce(Le,s?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return dl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(yt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Tm(e,t){switch(bo(t),t.tag){case 1:return lt(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),Te(ot),Te(qe),Mo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ao(t),null;case 13:if(Te(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Le),null;case 4:return Sr(),null;case 10:return Co(t.type._context),null;case 22:case 23:return dl(),null;case 24:return null;default:return null}}var Ts=!1,nt=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Nr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){De(e,t,s)}else r.current=null}function qo(e,t,r){try{r()}catch(s){De(e,t,s)}}var Pd=!1;function Im(e,t){if(co=Qi,e=oc(),no(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var l=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var g=0,y=-1,b=-1,A=0,F=0,$=e,z=null;t:for(;;){for(var J;$!==r||l!==0&&$.nodeType!==3||(y=g+l),$!==d||s!==0&&$.nodeType!==3||(b=g+s),$.nodeType===3&&(g+=$.nodeValue.length),(J=$.firstChild)!==null;)z=$,$=J;for(;;){if($===e)break t;if(z===r&&++A===l&&(y=g),z===d&&++F===s&&(b=g),(J=$.nextSibling)!==null)break;$=z,z=$.parentNode}$=J}r=y===-1||b===-1?null:{start:y,end:b}}else r=null}r=r||{start:0,end:0}}else r=null;for(fo={focusedElem:e,selectionRange:r},Qi=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var ee=q.memoizedProps,ze=q.memoizedState,T=t.stateNode,j=T.getSnapshotBeforeUpdate(t.elementType===t.type?ee:Mt(t.type,ee),ze);T.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(U){De(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return q=Pd,Pd=!1,q}function bi(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&qo(t,r,d)}l=l.next}while(l!==s)}}function Ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function el(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Id(e){var t=e.alternate;t!==null&&(e.alternate=null,Id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[ui],delete t[go],delete t[fm],delete t[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=as));else if(s!==4&&(e=e.child,e!==null))for(tl(e,t,r),e=e.sibling;e!==null;)tl(e,t,r),e=e.sibling}function nl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(nl(e,t,r),e=e.sibling;e!==null;)nl(e,t,r),e=e.sibling}var Xe=null,Rt=!1;function wn(e,t,r){for(r=r.child;r!==null;)Md(e,t,r),r=r.sibling}function Md(e,t,r){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Ui,r)}catch{}switch(r.tag){case 5:nt||Nr(r,t);case 6:var s=Xe,l=Rt;Xe=null,wn(e,t,r),Xe=s,Rt=l,Xe!==null&&(Rt?(e=Xe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Xe.removeChild(r.stateNode));break;case 18:Xe!==null&&(Rt?(e=Xe,r=r.stateNode,e.nodeType===8?mo(e.parentNode,r):e.nodeType===1&&mo(e,r),Zr(e)):mo(Xe,r.stateNode));break;case 4:s=Xe,l=Rt,Xe=r.stateNode.containerInfo,Rt=!0,wn(e,t,r),Xe=s,Rt=l;break;case 0:case 11:case 14:case 15:if(!nt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var d=l,g=d.destroy;d=d.tag,g!==void 0&&((d&2)!==0||(d&4)!==0)&&qo(r,t,g),l=l.next}while(l!==s)}wn(e,t,r);break;case 1:if(!nt&&(Nr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(y){De(r,t,y)}wn(e,t,r);break;case 21:wn(e,t,r);break;case 22:r.mode&1?(nt=(s=nt)||r.memoizedState!==null,wn(e,t,r),nt=s):wn(e,t,r);break;default:wn(e,t,r)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Pm),t.forEach(function(s){var l=zm.bind(null,e,s);r.has(s)||(r.add(s),s.then(l,l))})}}function Dt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];try{var d=e,g=t,y=g;e:for(;y!==null;){switch(y.tag){case 5:Xe=y.stateNode,Rt=!1;break e;case 3:Xe=y.stateNode.containerInfo,Rt=!0;break e;case 4:Xe=y.stateNode.containerInfo,Rt=!0;break e}y=y.return}if(Xe===null)throw Error(i(160));Md(d,g,l),Xe=null,Rt=!1;var b=l.alternate;b!==null&&(b.return=null),l.return=null}catch(A){De(l,t,A)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}function Dd(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),Ht(e),s&4){try{bi(3,e,e.return),Ps(3,e)}catch(ee){De(e,e.return,ee)}try{bi(5,e,e.return)}catch(ee){De(e,e.return,ee)}}break;case 1:Dt(t,e),Ht(e),s&512&&r!==null&&Nr(r,r.return);break;case 5:if(Dt(t,e),Ht(e),s&512&&r!==null&&Nr(r,r.return),e.flags&32){var l=e.stateNode;try{$r(l,"")}catch(ee){De(e,e.return,ee)}}if(s&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,g=r!==null?r.memoizedProps:d,y=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{y==="input"&&d.type==="radio"&&d.name!=null&&_(l,d),La(y,g);var A=La(y,d);for(g=0;g<b.length;g+=2){var F=b[g],$=b[g+1];F==="style"?xu(l,$):F==="dangerouslySetInnerHTML"?mu(l,$):F==="children"?$r(l,$):W(l,F,$,A)}switch(y){case"input":V(l,d);break;case"textarea":fu(l,d);break;case"select":var z=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var J=d.value;J!=null?kt(l,!!d.multiple,J,!1):z!==!!d.multiple&&(d.defaultValue!=null?kt(l,!!d.multiple,d.defaultValue,!0):kt(l,!!d.multiple,d.multiple?[]:"",!1))}l[ui]=d}catch(ee){De(e,e.return,ee)}}break;case 6:if(Dt(t,e),Ht(e),s&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(ee){De(e,e.return,ee)}}break;case 3:if(Dt(t,e),Ht(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(ee){De(e,e.return,ee)}break;case 4:Dt(t,e),Ht(e);break;case 13:Dt(t,e),Ht(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(sl=Oe())),s&4&&Rd(e);break;case 22:if(F=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(A=nt)||F,Dt(t,e),nt=A):Dt(t,e),Ht(e),s&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!F&&(e.mode&1)!==0)for(Z=e,F=e.child;F!==null;){for($=Z=F;Z!==null;){switch(z=Z,J=z.child,z.tag){case 0:case 11:case 14:case 15:bi(4,z,z.return);break;case 1:Nr(z,z.return);var q=z.stateNode;if(typeof q.componentWillUnmount=="function"){s=z,r=z.return;try{t=s,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(ee){De(s,r,ee)}}break;case 5:Nr(z,z.return);break;case 22:if(z.memoizedState!==null){Od($);continue}}J!==null?(J.return=z,Z=J):Od($)}F=F.sibling}e:for(F=null,$=e;;){if($.tag===5){if(F===null){F=$;try{l=$.stateNode,A?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(y=$.stateNode,b=$.memoizedProps.style,g=b!=null&&b.hasOwnProperty("display")?b.display:null,y.style.display=gu("display",g))}catch(ee){De(e,e.return,ee)}}}else if($.tag===6){if(F===null)try{$.stateNode.nodeValue=A?"":$.memoizedProps}catch(ee){De(e,e.return,ee)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===e)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===e)break e;for(;$.sibling===null;){if($.return===null||$.return===e)break e;F===$&&(F=null),$=$.return}F===$&&(F=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:Dt(t,e),Ht(e),s&4&&Rd(e);break;case 21:break;default:Dt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ad(r)){var s=r;break e}r=r.return}throw Error(i(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&($r(l,""),s.flags&=-33);var d=Ld(e);nl(e,d,l);break;case 3:case 4:var g=s.stateNode.containerInfo,y=Ld(e);tl(e,y,g);break;default:throw Error(i(161))}}catch(b){De(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,r){Z=e,Bd(e)}function Bd(e,t,r){for(var s=(e.mode&1)!==0;Z!==null;){var l=Z,d=l.child;if(l.tag===22&&s){var g=l.memoizedState!==null||Ts;if(!g){var y=l.alternate,b=y!==null&&y.memoizedState!==null||nt;y=Ts;var A=nt;if(Ts=g,(nt=b)&&!A)for(Z=l;Z!==null;)g=Z,b=g.child,g.tag===22&&g.memoizedState!==null?zd(l):b!==null?(b.return=g,Z=b):zd(l);for(;d!==null;)Z=d,Bd(d),d=d.sibling;Z=l,Ts=y,nt=A}_d(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,Z=d):_d(e)}}function _d(e){for(;Z!==null;){var t=Z;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||Ps(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!nt)if(r===null)s.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Mt(t.type,r.memoizedProps);s.componentDidUpdate(l,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&Oc(t,d,s);break;case 3:var g=t.updateQueue;if(g!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Oc(t,g,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var b=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&r.focus();break;case"img":b.src&&(r.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var A=t.alternate;if(A!==null){var F=A.memoizedState;if(F!==null){var $=F.dehydrated;$!==null&&Zr($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}nt||t.flags&512&&el(t)}catch(z){De(t,t.return,z)}}if(t===e){Z=null;break}if(r=t.sibling,r!==null){r.return=t.return,Z=r;break}Z=t.return}}function Od(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Z=r;break}Z=t.return}}function zd(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ps(4,t)}catch(b){De(t,r,b)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(b){De(t,l,b)}}var d=t.return;try{el(t)}catch(b){De(t,d,b)}break;case 5:var g=t.return;try{el(t)}catch(b){De(t,g,b)}}}catch(b){De(t,t.return,b)}if(t===e){Z=null;break}var y=t.sibling;if(y!==null){y.return=t.return,Z=y;break}Z=t.return}}var Lm=Math.ceil,Is=R.ReactCurrentDispatcher,rl=R.ReactCurrentOwner,Et=R.ReactCurrentBatchConfig,ve=0,Qe=null,$e=null,Ze=0,yt=0,Cr=gn(0),Ve=0,wi=null,Gn=0,As=0,il=0,ki=null,ct=null,sl=0,Er=1/0,tn=null,Ls=!1,al=null,kn=null,Ms=!1,Sn=null,Rs=0,Si=0,ol=null,Ds=-1,Bs=0;function it(){return(ve&6)!==0?Oe():Ds!==-1?Ds:Ds=Oe()}function jn(e){return(e.mode&1)===0?1:(ve&2)!==0&&Ze!==0?Ze&-Ze:mm.transition!==null?(Bs===0&&(Bs=Lu()),Bs):(e=Se,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e)}function Bt(e,t,r,s){if(50<Si)throw Si=0,ol=null,Error(i(185));Kr(e,r,s),((ve&2)===0||e!==Qe)&&(e===Qe&&((ve&2)===0&&(As|=r),Ve===4&&Nn(e,Ze)),dt(e,s),r===1&&ve===0&&(t.mode&1)===0&&(Er=Oe()+500,cs&&yn()))}function dt(e,t){var r=e.callbackNode;mh(e,t);var s=Gi(e,e===Qe?Ze:0);if(s===0)r!==null&&Pu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Pu(r),t===1)e.tag===0?hm($d.bind(null,e)):Cc($d.bind(null,e)),cm(function(){(ve&6)===0&&yn()}),r=null;else{switch(Mu(s)){case 1:r=za;break;case 4:r=Iu;break;case 16:r=$i;break;case 536870912:r=Au;break;default:r=$i}r=Yd(r,Fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Fd(e,t){if(Ds=-1,Bs=0,(ve&6)!==0)throw Error(i(327));var r=e.callbackNode;if(Tr()&&e.callbackNode!==r)return null;var s=Gi(e,e===Qe?Ze:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=_s(e,s);else{t=s;var l=ve;ve|=2;var d=Hd();(Qe!==e||Ze!==t)&&(tn=null,Er=Oe()+500,Kn(e,t));do try{Dm();break}catch(y){Ud(e,y)}while(!0);No(),Is.current=d,ve=l,$e!==null?t=0:(Qe=null,Ze=0,t=Ve)}if(t!==0){if(t===2&&(l=Fa(e),l!==0&&(s=l,t=ll(e,l))),t===1)throw r=wi,Kn(e,0),Nn(e,s),dt(e,Oe()),r;if(t===6)Nn(e,s);else{if(l=e.current.alternate,(s&30)===0&&!Mm(l)&&(t=_s(e,s),t===2&&(d=Fa(e),d!==0&&(s=d,t=ll(e,d))),t===1))throw r=wi,Kn(e,0),Nn(e,s),dt(e,Oe()),r;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(i(345));case 2:Qn(e,ct,tn);break;case 3:if(Nn(e,s),(s&130023424)===s&&(t=sl+500-Oe(),10<t)){if(Gi(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){it(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ho(Qn.bind(null,e,ct,tn),t);break}Qn(e,ct,tn);break;case 4:if(Nn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var g=31-It(s);d=1<<g,g=t[g],g>l&&(l=g),s&=~d}if(s=l,s=Oe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Lm(s/1960))-s,10<s){e.timeoutHandle=ho(Qn.bind(null,e,ct,tn),s);break}Qn(e,ct,tn);break;case 5:Qn(e,ct,tn);break;default:throw Error(i(329))}}}return dt(e,Oe()),e.callbackNode===r?Fd.bind(null,e):null}function ll(e,t){var r=ki;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=_s(e,t),e!==2&&(t=ct,ct=r,t!==null&&ul(t)),e}function ul(e){ct===null?ct=e:ct.push.apply(ct,e)}function Mm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var l=r[s],d=l.getSnapshot;l=l.value;try{if(!At(d(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~il,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-It(t),s=1<<r;e[r]=-1,t&=~s}}function $d(e){if((ve&6)!==0)throw Error(i(327));Tr();var t=Gi(e,0);if((t&1)===0)return dt(e,Oe()),null;var r=_s(e,t);if(e.tag!==0&&r===2){var s=Fa(e);s!==0&&(t=s,r=ll(e,s))}if(r===1)throw r=wi,Kn(e,0),Nn(e,t),dt(e,Oe()),r;if(r===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,ct,tn),dt(e,Oe()),null}function cl(e,t){var r=ve;ve|=1;try{return e(t)}finally{ve=r,ve===0&&(Er=Oe()+500,cs&&yn())}}function Vn(e){Sn!==null&&Sn.tag===0&&(ve&6)===0&&Tr();var t=ve;ve|=1;var r=Et.transition,s=Se;try{if(Et.transition=null,Se=1,e)return e()}finally{Se=s,Et.transition=r,ve=t,(ve&6)===0&&yn()}}function dl(){yt=Cr.current,Te(Cr)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,um(r)),$e!==null)for(r=$e.return;r!==null;){var s=r;switch(bo(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ls();break;case 3:Sr(),Te(ot),Te(qe),Mo();break;case 5:Ao(s);break;case 4:Sr();break;case 13:Te(Le);break;case 19:Te(Le);break;case 10:Co(s.type._context);break;case 22:case 23:dl()}r=r.return}if(Qe=e,$e=e=Cn(e.current,null),Ze=yt=t,Ve=0,wi=null,il=As=Gn=0,ct=ki=null,Un!==null){for(t=0;t<Un.length;t++)if(r=Un[t],s=r.interleaved,s!==null){r.interleaved=null;var l=s.next,d=r.pending;if(d!==null){var g=d.next;d.next=l,s.next=g}r.pending=s}Un=null}return e}function Ud(e,t){do{var r=$e;try{if(No(),bs.current=js,ws){for(var s=Me.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}ws=!1}if(Wn=0,Ke=Ge=Me=null,mi=!1,gi=0,rl.current=null,r===null||r.return===null){Ve=1,wi=t,$e=null;break}e:{var d=e,g=r.return,y=r,b=t;if(t=Ze,y.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var A=b,F=y,$=F.tag;if((F.mode&1)===0&&($===0||$===11||$===15)){var z=F.alternate;z?(F.updateQueue=z.updateQueue,F.memoizedState=z.memoizedState,F.lanes=z.lanes):(F.updateQueue=null,F.memoizedState=null)}var J=pd(g);if(J!==null){J.flags&=-257,hd(J,g,y,d,t),J.mode&1&&fd(d,A,t),t=J,b=A;var q=t.updateQueue;if(q===null){var ee=new Set;ee.add(b),t.updateQueue=ee}else q.add(b);break e}else{if((t&1)===0){fd(d,A,t),fl();break e}b=Error(i(426))}}else if(Ie&&y.mode&1){var ze=pd(g);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),hd(ze,g,y,d,t),So(jr(b,y));break e}}d=b=jr(b,y),Ve!==4&&(Ve=2),ki===null?ki=[d]:ki.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var T=cd(d,b,t);_c(d,T);break e;case 1:y=b;var j=d.type,I=d.stateNode;if((d.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(kn===null||!kn.has(I)))){d.flags|=65536,t&=-t,d.lanes|=t;var U=dd(d,y,t);_c(d,U);break e}}d=d.return}while(d!==null)}Gd(r)}catch(ne){t=ne,$e===r&&r!==null&&($e=r=r.return);continue}break}while(!0)}function Hd(){var e=Is.current;return Is.current=js,e===null?js:e}function fl(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Qe===null||(Gn&268435455)===0&&(As&268435455)===0||Nn(Qe,Ze)}function _s(e,t){var r=ve;ve|=2;var s=Hd();(Qe!==e||Ze!==t)&&(tn=null,Kn(e,t));do try{Rm();break}catch(l){Ud(e,l)}while(!0);if(No(),ve=r,Is.current=s,$e!==null)throw Error(i(261));return Qe=null,Ze=0,Ve}function Rm(){for(;$e!==null;)Wd($e)}function Dm(){for(;$e!==null&&!ah();)Wd($e)}function Wd(e){var t=Qd(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?Gd(e):$e=t,rl.current=null}function Gd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Em(r,t,yt),r!==null){$e=r;return}}else{if(r=Tm(r,t),r!==null){r.flags&=32767,$e=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,$e=null;return}}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Ve===0&&(Ve=5)}function Qn(e,t,r){var s=Se,l=Et.transition;try{Et.transition=null,Se=1,Bm(e,t,r,s)}finally{Et.transition=l,Se=s}return null}function Bm(e,t,r,s){do Tr();while(Sn!==null);if((ve&6)!==0)throw Error(i(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(gh(e,d),e===Qe&&($e=Qe=null,Ze=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Ms||(Ms=!0,Yd($i,function(){return Tr(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=Et.transition,Et.transition=null;var g=Se;Se=1;var y=ve;ve|=4,rl.current=null,Im(e,r),Dd(r,e),nm(fo),Qi=!!co,fo=co=null,e.current=r,Am(r),oh(),ve=y,Se=g,Et.transition=d}else e.current=r;if(Ms&&(Ms=!1,Sn=e,Rs=l),d=e.pendingLanes,d===0&&(kn=null),ch(r.stateNode),dt(e,Oe()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],s(l.value,{componentStack:l.stack,digest:l.digest});if(Ls)throw Ls=!1,e=al,al=null,e;return(Rs&1)!==0&&e.tag!==0&&Tr(),d=e.pendingLanes,(d&1)!==0?e===ol?Si++:(Si=0,ol=e):Si=0,yn(),null}function Tr(){if(Sn!==null){var e=Mu(Rs),t=Et.transition,r=Se;try{if(Et.transition=null,Se=16>e?16:e,Sn===null)var s=!1;else{if(e=Sn,Sn=null,Rs=0,(ve&6)!==0)throw Error(i(331));var l=ve;for(ve|=4,Z=e.current;Z!==null;){var d=Z,g=d.child;if((Z.flags&16)!==0){var y=d.deletions;if(y!==null){for(var b=0;b<y.length;b++){var A=y[b];for(Z=A;Z!==null;){var F=Z;switch(F.tag){case 0:case 11:case 15:bi(8,F,d)}var $=F.child;if($!==null)$.return=F,Z=$;else for(;Z!==null;){F=Z;var z=F.sibling,J=F.return;if(Id(F),F===A){Z=null;break}if(z!==null){z.return=J,Z=z;break}Z=J}}}var q=d.alternate;if(q!==null){var ee=q.child;if(ee!==null){q.child=null;do{var ze=ee.sibling;ee.sibling=null,ee=ze}while(ee!==null)}}Z=d}}if((d.subtreeFlags&2064)!==0&&g!==null)g.return=d,Z=g;else e:for(;Z!==null;){if(d=Z,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:bi(9,d,d.return)}var T=d.sibling;if(T!==null){T.return=d.return,Z=T;break e}Z=d.return}}var j=e.current;for(Z=j;Z!==null;){g=Z;var I=g.child;if((g.subtreeFlags&2064)!==0&&I!==null)I.return=g,Z=I;else e:for(g=j;Z!==null;){if(y=Z,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Ps(9,y)}}catch(ne){De(y,y.return,ne)}if(y===g){Z=null;break e}var U=y.sibling;if(U!==null){U.return=y.return,Z=U;break e}Z=y.return}}if(ve=l,yn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Ui,e)}catch{}s=!0}return s}finally{Se=r,Et.transition=t}}return!1}function Vd(e,t,r){t=jr(r,t),t=cd(e,t,1),e=bn(e,t,1),t=it(),e!==null&&(Kr(e,1,t),dt(e,t))}function De(e,t,r){if(e.tag===3)Vd(e,e,r);else for(;t!==null;){if(t.tag===3){Vd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(kn===null||!kn.has(s))){e=jr(r,e),e=dd(t,e,1),t=bn(t,e,1),e=it(),t!==null&&(Kr(t,1,e),dt(t,e));break}}t=t.return}}function _m(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(Ze&r)===r&&(Ve===4||Ve===3&&(Ze&130023424)===Ze&&500>Oe()-sl?Kn(e,0):il|=r),dt(e,t)}function Kd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Wi,Wi<<=1,(Wi&130023424)===0&&(Wi=4194304)));var r=it();e=Zt(e,t),e!==null&&(Kr(e,t,r),dt(e,r))}function Om(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Kd(e,r)}function zm(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(t),Kd(e,r)}var Qd;Qd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)ut=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ut=!1,Cm(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,Ie&&(t.flags&1048576)!==0&&Ec(t,fs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Es(e,t),e=t.pendingProps;var l=gr(t,qe.current);kr(t,r),l=Bo(null,t,s,e,l,r);var d=_o();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(s)?(d=!0,us(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Po(t),l.updater=Ns,t.stateNode=l,l._reactInternals=t,Ho(t,s,e,r),t=Ko(null,t,s,!0,d,r)):(t.tag=0,Ie&&d&&vo(t),rt(null,t,l,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Es(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=$m(s),e=Mt(s,e),l){case 0:t=Vo(null,t,s,e,r);break e;case 1:t=bd(null,t,s,e,r);break e;case 11:t=md(null,t,s,e,r);break e;case 14:t=gd(null,t,s,Mt(s.type,e),r);break e}throw Error(i(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Mt(s,l),Vo(e,t,s,l,r);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Mt(s,l),bd(e,t,s,l,r);case 3:e:{if(wd(t),e===null)throw Error(i(387));s=t.pendingProps,d=t.memoizedState,l=d.element,Bc(e,t),ys(t,s,null,r);var g=t.memoizedState;if(s=g.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=jr(Error(i(423)),t),t=kd(e,t,s,r,l);break e}else if(s!==l){l=jr(Error(i(424)),t),t=kd(e,t,s,r,l);break e}else for(xt=mn(t.stateNode.containerInfo.firstChild),gt=t,Ie=!0,Lt=null,r=Rc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(vr(),s===l){t=en(e,t,r);break e}rt(e,t,s,r)}t=t.child}return t;case 5:return zc(t),e===null&&ko(t),s=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,g=l.children,po(s,l)?g=null:d!==null&&po(s,d)&&(t.flags|=32),vd(e,t),rt(e,t,g,r),t.child;case 6:return e===null&&ko(t),null;case 13:return Sd(e,t,r);case 4:return Io(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=br(t,null,s,r):rt(e,t,s,r),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Mt(s,l),md(e,t,s,l,r);case 7:return rt(e,t,t.pendingProps,r),t.child;case 8:return rt(e,t,t.pendingProps.children,r),t.child;case 12:return rt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,d=t.memoizedProps,g=l.value,Ce(ms,s._currentValue),s._currentValue=g,d!==null)if(At(d.value,g)){if(d.children===l.children&&!ot.current){t=en(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var y=d.dependencies;if(y!==null){g=d.child;for(var b=y.firstContext;b!==null;){if(b.context===s){if(d.tag===1){b=qt(-1,r&-r),b.tag=2;var A=d.updateQueue;if(A!==null){A=A.shared;var F=A.pending;F===null?b.next=b:(b.next=F.next,F.next=b),A.pending=b}}d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),Eo(d.return,r,t),y.lanes|=r;break}b=b.next}}else if(d.tag===10)g=d.type===t.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(i(341));g.lanes|=r,y=g.alternate,y!==null&&(y.lanes|=r),Eo(g,r,t),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===t){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}rt(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,kr(t,r),l=Nt(l),s=s(l),t.flags|=1,rt(e,t,s,r),t.child;case 14:return s=t.type,l=Mt(s,t.pendingProps),l=Mt(s.type,l),gd(e,t,s,l,r);case 15:return xd(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Mt(s,l),Es(e,t),t.tag=1,lt(s)?(e=!0,us(t)):e=!1,kr(t,r),ld(t,s,l),Ho(t,s,l,r),Ko(null,t,s,!0,e,r);case 19:return Nd(e,t,r);case 22:return yd(e,t,r)}throw Error(i(156,t.tag))};function Yd(e,t){return Tu(e,t)}function Fm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,r,s){return new Fm(e,t,r,s)}function pl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $m(e){if(typeof e=="function")return pl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===He)return 14}return 2}function Cn(e,t){var r=e.alternate;return r===null?(r=Tt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Os(e,t,r,s,l,d){var g=2;if(s=e,typeof e=="function")pl(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case H:return Yn(r.children,l,d,t);case ie:g=8,l|=8;break;case de:return e=Tt(12,r,t,l|2),e.elementType=de,e.lanes=d,e;case Fe:return e=Tt(13,r,t,l),e.elementType=Fe,e.lanes=d,e;case je:return e=Tt(19,r,t,l),e.elementType=je,e.lanes=d,e;case ke:return zs(r,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:g=10;break e;case Ae:g=9;break e;case Ne:g=11;break e;case He:g=14;break e;case Be:g=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Tt(g,r,t,l),t.elementType=e,t.type=s,t.lanes=d,t}function Yn(e,t,r,s){return e=Tt(7,e,s,t),e.lanes=r,e}function zs(e,t,r,s){return e=Tt(22,e,s,t),e.elementType=ke,e.lanes=r,e.stateNode={isHidden:!1},e}function hl(e,t,r){return e=Tt(6,e,null,t),e.lanes=r,e}function ml(e,t,r){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Um(e,t,r,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function gl(e,t,r,s,l,d,g,y,b){return e=new Um(e,t,r,y,b),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Tt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Po(d),e}function Hm(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Jd(e){if(!e)return xn;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var r=e.type;if(lt(r))return jc(e,r,t)}return t}function Xd(e,t,r,s,l,d,g,y,b){return e=gl(r,s,!0,e,l,d,g,y,b),e.context=Jd(null),r=e.current,s=it(),l=jn(r),d=qt(s,l),d.callback=t??null,bn(r,d,l),e.current.lanes=l,Kr(e,l,s),dt(e,s),e}function Fs(e,t,r,s){var l=t.current,d=it(),g=jn(l);return r=Jd(r),t.context===null?t.context=r:t.pendingContext=r,t=qt(d,g),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=bn(l,t,g),e!==null&&(Bt(e,l,g,d),xs(e,l,g)),g}function $s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function xl(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}var qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function yl(e){this._internalRoot=e}Us.prototype.render=yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));Fs(e,t,null,null)},Us.prototype.unmount=yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){Fs(null,e,null,null)}),t[Qt]=null}};function Us(e){this._internalRoot=e}Us.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<fn.length&&t!==0&&t<fn[r].priority;r++);fn.splice(r,0,e),r===0&&zu(e)}};function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ef(){}function Wm(e,t,r,s,l){if(l){if(typeof s=="function"){var d=s;s=function(){var A=$s(g);d.call(A)}}var g=Xd(t,s,e,0,null,!1,!1,"",ef);return e._reactRootContainer=g,e[Qt]=g.current,oi(e.nodeType===8?e.parentNode:e),Vn(),g}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var y=s;s=function(){var A=$s(b);y.call(A)}}var b=gl(e,0,!1,null,null,!1,!1,"",ef);return e._reactRootContainer=b,e[Qt]=b.current,oi(e.nodeType===8?e.parentNode:e),Vn(function(){Fs(t,b,r,s)}),b}function Ws(e,t,r,s,l){var d=r._reactRootContainer;if(d){var g=d;if(typeof l=="function"){var y=l;l=function(){var b=$s(g);y.call(b)}}Fs(t,g,e,l)}else g=Wm(r,t,e,l,s);return $s(g)}Ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Vr(t.pendingLanes);r!==0&&(Ua(t,r|1),dt(t,Oe()),(ve&6)===0&&(Er=Oe()+500,yn()))}break;case 13:Vn(function(){var s=Zt(e,1);if(s!==null){var l=it();Bt(s,e,1,l)}}),xl(e,1)}},Ha=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var r=it();Bt(t,e,134217728,r)}xl(e,134217728)}},Du=function(e){if(e.tag===13){var t=jn(e),r=Zt(e,t);if(r!==null){var s=it();Bt(r,e,t,s)}xl(e,t)}},Bu=function(){return Se},_u=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}},Da=function(e,t,r){switch(t){case"input":if(V(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var l=os(s);if(!l)throw Error(i(90));at(s),V(s,l)}}}break;case"textarea":fu(e,r);break;case"select":t=r.value,t!=null&&kt(e,!!r.multiple,t,!1)}},wu=cl,ku=Vn;var Gm={usingClientEntryPoint:!1,Events:[ci,hr,os,vu,bu,cl]},ji={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vm={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cu(e),e===null?null:e.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{Ui=Gs.inject(Vm),zt=Gs}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm,ft.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vl(t))throw Error(i(200));return Hm(e,t,null,r)},ft.createRoot=function(e,t){if(!vl(e))throw Error(i(299));var r=!1,s="",l=qd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=gl(e,1,!1,null,null,r,!1,s,l),e[Qt]=t.current,oi(e.nodeType===8?e.parentNode:e),new yl(t)},ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Cu(t),e=e===null?null:e.stateNode,e},ft.flushSync=function(e){return Vn(e)},ft.hydrate=function(e,t,r){if(!Hs(t))throw Error(i(200));return Ws(null,e,t,!0,r)},ft.hydrateRoot=function(e,t,r){if(!vl(e))throw Error(i(405));var s=r!=null&&r.hydratedSources||null,l=!1,d="",g=qd;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),t=Xd(t,null,e,1,r??null,l,!1,d,g),e[Qt]=t.current,oi(e),s)for(e=0;e<s.length;e++)r=s[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Us(t)},ft.render=function(e,t,r){if(!Hs(t))throw Error(i(200));return Ws(null,e,t,!1,r)},ft.unmountComponentAtNode=function(e){if(!Hs(e))throw Error(i(40));return e._reactRootContainer?(Vn(function(){Ws(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1},ft.unstable_batchedUpdates=cl,ft.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Hs(r))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Ws(e,t,r,!1,s)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var mf;function S0(){if(mf)return jl.exports;mf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),jl.exports=k0(),jl.exports}var Ks={},gf;function j0(){if(gf)return Ks;gf=1;var n=S0();return Ks.createRoot=n.createRoot,Ks.hydrateRoot=n.hydrateRoot,Ks}var N0=j0();const C0=Gf(N0),ba=N.createContext(),E0=({children:n})=>{const[o,i]=N.useState(Math.random()<.5);return a.jsx(ba.Provider,{value:{isDark:o,setIsDark:i},children:n})};function Rl(){return Rl=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},Rl.apply(this,arguments)}var T0={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,o){},onStringTyped:function(n,o){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,o){},onTypingResumed:function(n,o){},onReset:function(n){},onStop:function(n,o){},onStart:function(n,o){},onDestroy:function(n){}},P0=new(function(){function n(){}var o=n.prototype;return o.load=function(i,u,c){if(i.el=typeof c=="string"?document.querySelector(c):c,i.options=Rl({},T0,u),i.isInput=i.el.tagName.toLowerCase()==="input",i.attr=i.options.attr,i.bindInputFocusEvents=i.options.bindInputFocusEvents,i.showCursor=!i.isInput&&i.options.showCursor,i.cursorChar=i.options.cursorChar,i.cursorBlinking=!0,i.elContent=i.attr?i.el.getAttribute(i.attr):i.el.textContent,i.contentType=i.options.contentType,i.typeSpeed=i.options.typeSpeed,i.startDelay=i.options.startDelay,i.backSpeed=i.options.backSpeed,i.smartBackspace=i.options.smartBackspace,i.backDelay=i.options.backDelay,i.fadeOut=i.options.fadeOut,i.fadeOutClass=i.options.fadeOutClass,i.fadeOutDelay=i.options.fadeOutDelay,i.isPaused=!1,i.strings=i.options.strings.map(function(x){return x.trim()}),i.stringsElement=typeof i.options.stringsElement=="string"?document.querySelector(i.options.stringsElement):i.options.stringsElement,i.stringsElement){i.strings=[],i.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var f=Array.prototype.slice.apply(i.stringsElement.children),m=f.length;if(m)for(var p=0;p<m;p+=1)i.strings.push(f[p].innerHTML.trim())}for(var h in i.strPos=0,i.currentElContent=this.getCurrentElContent(i),i.currentElContent&&i.currentElContent.length>0&&(i.strPos=i.currentElContent.length-1,i.strings.unshift(i.currentElContent)),i.sequence=[],i.strings)i.sequence[h]=h;i.arrayPos=0,i.stopNum=0,i.loop=i.options.loop,i.loopCount=i.options.loopCount,i.curLoop=0,i.shuffle=i.options.shuffle,i.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},i.typingComplete=!1,i.autoInsertCss=i.options.autoInsertCss,i.autoInsertCss&&(this.appendCursorAnimationCss(i),this.appendFadeOutAnimationCss(i))},o.getCurrentElContent=function(i){return i.attr?i.el.getAttribute(i.attr):i.isInput?i.el.value:i.contentType==="html"?i.el.innerHTML:i.el.textContent},o.appendCursorAnimationCss=function(i){var u="data-typed-js-cursor-css";if(i.showCursor&&!document.querySelector("["+u+"]")){var c=document.createElement("style");c.setAttribute(u,"true"),c.innerHTML=`
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
      `,document.body.appendChild(c)}},n}()),xf=new(function(){function n(){}var o=n.prototype;return o.typeHtmlChars=function(i,u,c){if(c.contentType!=="html")return u;var f=i.substring(u).charAt(0);if(f==="<"||f==="&"){var m;for(m=f==="<"?">":";";i.substring(u+1).charAt(0)!==m&&!(1+ ++u>i.length););u++}return u},o.backSpaceHtmlChars=function(i,u,c){if(c.contentType!=="html")return u;var f=i.substring(u).charAt(0);if(f===">"||f===";"){var m;for(m=f===">"?"<":"&";i.substring(u-1).charAt(0)!==m&&!(--u<0););u--}return u},n}()),Dl=function(){function n(i,u){P0.load(this,u,i),this.begin()}var o=n.prototype;return o.toggle=function(){this.pause.status?this.start():this.stop()},o.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},o.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},o.destroy=function(){this.reset(!1),this.options.onDestroy(this)},o.reset=function(i){i===void 0&&(i=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,i&&(this.insertCursor(),this.options.onReset(this),this.begin())},o.begin=function(){var i=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){i.strPos===0?i.typewrite(i.strings[i.sequence[i.arrayPos]],i.strPos):i.backspace(i.strings[i.sequence[i.arrayPos]],i.strPos)},this.startDelay)},o.typewrite=function(i,u){var c=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var f=this.humanizer(this.typeSpeed),m=1;this.pause.status!==!0?this.timeout=setTimeout(function(){u=xf.typeHtmlChars(i,u,c);var p=0,h=i.substring(u);if(h.charAt(0)==="^"&&/^\^\d+/.test(h)){var x=1;x+=(h=/\d+/.exec(h)[0]).length,p=parseInt(h),c.temporaryPause=!0,c.options.onTypingPaused(c.arrayPos,c),i=i.substring(0,u)+i.substring(u+x),c.toggleBlinking(!0)}if(h.charAt(0)==="`"){for(;i.substring(u+m).charAt(0)!=="`"&&(m++,!(u+m>i.length)););var v=i.substring(0,u),E=i.substring(v.length+1,u+m),S=i.substring(u+m+1);i=v+E+S,m--}c.timeout=setTimeout(function(){c.toggleBlinking(!1),u>=i.length?c.doneTyping(i,u):c.keepTyping(i,u,m),c.temporaryPause&&(c.temporaryPause=!1,c.options.onTypingResumed(c.arrayPos,c))},p)},f):this.setPauseStatus(i,u,!0)},o.keepTyping=function(i,u,c){u===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var f=i.substring(0,u+=c);this.replaceText(f),this.typewrite(i,u)},o.doneTyping=function(i,u){var c=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){c.backspace(i,u)},this.backDelay))},o.backspace=function(i,u){var c=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var f=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){u=xf.backSpaceHtmlChars(i,u,c);var m=i.substring(0,u);if(c.replaceText(m),c.smartBackspace){var p=c.strings[c.arrayPos+1];c.stopNum=p&&m===p.substring(0,u)?u:0}u>c.stopNum?(u--,c.backspace(i,u)):u<=c.stopNum&&(c.arrayPos++,c.arrayPos===c.strings.length?(c.arrayPos=0,c.options.onLastStringBackspaced(),c.shuffleStringsIfNeeded(),c.begin()):c.typewrite(c.strings[c.sequence[c.arrayPos]],u))},f)}else this.setPauseStatus(i,u,!1)},o.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},o.setPauseStatus=function(i,u,c){this.pause.typewrite=c,this.pause.curString=i,this.pause.curStrPos=u},o.toggleBlinking=function(i){this.cursor&&(this.pause.status||this.cursorBlinking!==i&&(this.cursorBlinking=i,i?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},o.humanizer=function(i){return Math.round(Math.random()*i/2)+i},o.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},o.initFadeOut=function(){var i=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){i.arrayPos++,i.replaceText(""),i.strings.length>i.arrayPos?i.typewrite(i.strings[i.sequence[i.arrayPos]],0):(i.typewrite(i.strings[0],0),i.arrayPos=0)},this.fadeOutDelay)},o.replaceText=function(i){this.attr?this.el.setAttribute(this.attr,i):this.isInput?this.el.value=i:this.contentType==="html"?this.el.innerHTML=i:this.el.textContent=i},o.bindFocusEvents=function(){var i=this;this.isInput&&(this.el.addEventListener("focus",function(u){i.stop()}),this.el.addEventListener("blur",function(u){i.el.value&&i.el.value.length!==0||i.start()}))},o.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();const I0=({images:n=["/Resume-Builder/Temp/temp1.png","/Resume-Builder/Temp/temp2.png","/Resume-Builder/Temp/temp3.png","/Resume-Builder/Temp/temp4.png","/Resume-Builder/Temp/temp5.png","/Resume-Builder/Temp/temp6.png"],interval:o=3e3,showIndicators:i=!0})=>{const[u,c]=N.useState(0),[f,m]=N.useState(window.innerWidth<768),[p,h]=N.useState(null),x=N.useRef(null);N.useEffect(()=>{const k=()=>{m(window.innerWidth<768)};return window.addEventListener("resize",k),k(),()=>window.removeEventListener("resize",k)},[]),N.useEffect(()=>{if(n.length<=1)return;const k=setInterval(()=>{h("right"),c(M=>(M+1)%n.length)},o);return()=>clearInterval(k)},[n.length,o]);const v=()=>{if(f)return[u];{const k=(u-1+n.length)%n.length,M=(u+1)%n.length;return[k,u,M]}},E=k=>{h(k>u?"right":"left"),c(k)};if(!n.length)return a.jsx("div",{className:"w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg",children:"No images to display"});const S=v(),w=k=>f?"transition-all duration-500 ease-in-out px-4":k===1?"transition-all duration-700 ease-in-out px-4 scale-110 z-10 opacity-90":k===0?`transition-all duration-700 ease-in-out px-4 scale-90 opacity-70 ${p==="left"?"translate-x-8":""}`:`transition-all duration-700 ease-in-out px-4 scale-90 opacity-70 ${p==="right"?"translate-x-8":""}`;return a.jsxs("div",{className:"w-3/4 bg-gray-300 overflow-hidden dark:bg-slate-950",children:[a.jsx("div",{className:"w-full overflow-hidden py-8",ref:x,children:a.jsx("div",{className:"flex justify-center items-center",children:S.map((k,M)=>a.jsx("div",{className:w(M),children:a.jsx("img",{src:n[k],alt:`Slide ${k+1}`,className:"w-full h-auto object-contain rounded-lg shadow dark:filter dark:brightness-90"})},`slide-${k}`))})}),i&&a.jsx("div",{className:"flex justify-center items-center mb-3 mt-2",children:a.jsx("div",{className:"flex space-x-3",children:n.map((k,M)=>a.jsx("button",{className:`w-3 h-3 rounded-full transition-colors focus:outline-none ${M===u?"bg-blue-500":"bg-gray-400 hover:bg-gray-500 dark:bg-gray-300 dark:hover:bg-gray-400"}`,onClick:()=>E(M),"aria-label":`Go to slide ${M+1}`,"aria-current":M===u?"true":"false"},`indicator-${M}`))})})]})};var ht=function(){return ht=Object.assign||function(o){for(var i,u=1,c=arguments.length;u<c;u++){i=arguments[u];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(o[f]=i[f])}return o},ht.apply(this,arguments)};function ua(n,o,i){if(i||arguments.length===2)for(var u=0,c=o.length,f;u<c;u++)(f||!(u in o))&&(f||(f=Array.prototype.slice.call(o,0,u)),f[u]=o[u]);return n.concat(f||Array.prototype.slice.call(o))}var Pe="-ms-",Pi="-moz-",we="-webkit-",lp="comm",wa="rule",su="decl",A0="@import",up="@keyframes",L0="@layer",cp=Math.abs,au=String.fromCharCode,Bl=Object.assign;function M0(n,o){return Je(n,0)^45?(((o<<2^Je(n,0))<<2^Je(n,1))<<2^Je(n,2))<<2^Je(n,3):0}function dp(n){return n.trim()}function rn(n,o){return(n=o.exec(n))?n[0]:n}function he(n,o,i){return n.replace(o,i)}function na(n,o,i){return n.indexOf(o,i)}function Je(n,o){return n.charCodeAt(o)|0}function Ar(n,o,i){return n.slice(o,i)}function Gt(n){return n.length}function fp(n){return n.length}function Ti(n,o){return o.push(n),n}function R0(n,o){return n.map(o).join("")}function yf(n,o){return n.filter(function(i){return!rn(i,o)})}var ka=1,Lr=1,pp=0,Pt=0,Ue=0,_r="";function Sa(n,o,i,u,c,f,m,p){return{value:n,root:o,parent:i,type:u,props:c,children:f,line:ka,column:Lr,length:m,return:"",siblings:p}}function Tn(n,o){return Bl(Sa("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function Pr(n){for(;n.root;)n=Tn(n.root,{children:[n]});Ti(n,n.siblings)}function D0(){return Ue}function B0(){return Ue=Pt>0?Je(_r,--Pt):0,Lr--,Ue===10&&(Lr=1,ka--),Ue}function _t(){return Ue=Pt<pp?Je(_r,Pt++):0,Lr++,Ue===10&&(Lr=1,ka++),Ue}function er(){return Je(_r,Pt)}function ra(){return Pt}function ja(n,o){return Ar(_r,n,o)}function _l(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _0(n){return ka=Lr=1,pp=Gt(_r=n),Pt=0,[]}function O0(n){return _r="",n}function El(n){return dp(ja(Pt-1,Ol(n===91?n+2:n===40?n+1:n)))}function z0(n){for(;(Ue=er())&&Ue<33;)_t();return _l(n)>2||_l(Ue)>3?"":" "}function F0(n,o){for(;--o&&_t()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return ja(n,ra()+(o<6&&er()==32&&_t()==32))}function Ol(n){for(;_t();)switch(Ue){case n:return Pt;case 34:case 39:n!==34&&n!==39&&Ol(Ue);break;case 40:n===41&&Ol(n);break;case 92:_t();break}return Pt}function $0(n,o){for(;_t()&&n+Ue!==57;)if(n+Ue===84&&er()===47)break;return"/*"+ja(o,Pt-1)+"*"+au(n===47?n:_t())}function U0(n){for(;!_l(er());)_t();return ja(n,Pt)}function H0(n){return O0(ia("",null,null,null,[""],n=_0(n),0,[0],n))}function ia(n,o,i,u,c,f,m,p,h){for(var x=0,v=0,E=m,S=0,w=0,k=0,M=1,P=1,D=1,B=0,W="",R=c,O=f,G=u,H=W;P;)switch(k=B,B=_t()){case 40:if(k!=108&&Je(H,E-1)==58){na(H+=he(El(B),"&","&\f"),"&\f",cp(x?p[x-1]:0))!=-1&&(D=-1);break}case 34:case 39:case 91:H+=El(B);break;case 9:case 10:case 13:case 32:H+=z0(k);break;case 92:H+=F0(ra()-1,7);continue;case 47:switch(er()){case 42:case 47:Ti(W0($0(_t(),ra()),o,i,h),h);break;default:H+="/"}break;case 123*M:p[x++]=Gt(H)*D;case 125*M:case 59:case 0:switch(B){case 0:case 125:P=0;case 59+v:D==-1&&(H=he(H,/\f/g,"")),w>0&&Gt(H)-E&&Ti(w>32?bf(H+";",u,i,E-1,h):bf(he(H," ","")+";",u,i,E-2,h),h);break;case 59:H+=";";default:if(Ti(G=vf(H,o,i,x,v,c,p,W,R=[],O=[],E,f),f),B===123)if(v===0)ia(H,o,G,G,R,f,E,p,O);else switch(S===99&&Je(H,3)===110?100:S){case 100:case 108:case 109:case 115:ia(n,G,G,u&&Ti(vf(n,G,G,0,0,c,p,W,c,R=[],E,O),O),c,O,E,p,u?R:O);break;default:ia(H,G,G,G,[""],O,0,p,O)}}x=v=w=0,M=D=1,W=H="",E=m;break;case 58:E=1+Gt(H),w=k;default:if(M<1){if(B==123)--M;else if(B==125&&M++==0&&B0()==125)continue}switch(H+=au(B),B*M){case 38:D=v>0?1:(H+="\f",-1);break;case 44:p[x++]=(Gt(H)-1)*D,D=1;break;case 64:er()===45&&(H+=El(_t())),S=er(),v=E=Gt(W=H+=U0(ra())),B++;break;case 45:k===45&&Gt(H)==2&&(M=0)}}return f}function vf(n,o,i,u,c,f,m,p,h,x,v,E){for(var S=c-1,w=c===0?f:[""],k=fp(w),M=0,P=0,D=0;M<u;++M)for(var B=0,W=Ar(n,S+1,S=cp(P=m[M])),R=n;B<k;++B)(R=dp(P>0?w[B]+" "+W:he(W,/&\f/g,w[B])))&&(h[D++]=R);return Sa(n,o,i,c===0?wa:p,h,x,v,E)}function W0(n,o,i,u){return Sa(n,o,i,lp,au(D0()),Ar(n,2,-2),0,u)}function bf(n,o,i,u,c){return Sa(n,o,i,su,Ar(n,0,u),Ar(n,u+1,-1),u,c)}function hp(n,o,i){switch(M0(n,o)){case 5103:return we+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+n+n;case 4789:return Pi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return we+n+Pi+n+Pe+n+n;case 5936:switch(Je(n,o+11)){case 114:return we+n+Pe+he(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return we+n+Pe+he(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return we+n+Pe+he(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return we+n+Pe+n+n;case 6165:return we+n+Pe+"flex-"+n+n;case 5187:return we+n+he(n,/(\w+).+(:[^]+)/,we+"box-$1$2"+Pe+"flex-$1$2")+n;case 5443:return we+n+Pe+"flex-item-"+he(n,/flex-|-self/g,"")+(rn(n,/flex-|baseline/)?"":Pe+"grid-row-"+he(n,/flex-|-self/g,""))+n;case 4675:return we+n+Pe+"flex-line-pack"+he(n,/align-content|flex-|-self/g,"")+n;case 5548:return we+n+Pe+he(n,"shrink","negative")+n;case 5292:return we+n+Pe+he(n,"basis","preferred-size")+n;case 6060:return we+"box-"+he(n,"-grow","")+we+n+Pe+he(n,"grow","positive")+n;case 4554:return we+he(n,/([^-])(transform)/g,"$1"+we+"$2")+n;case 6187:return he(he(he(n,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),n,"")+n;case 5495:case 3959:return he(n,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return he(he(n,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+n+n;case 4200:if(!rn(n,/flex-|baseline/))return Pe+"grid-column-align"+Ar(n,o)+n;break;case 2592:case 3360:return Pe+he(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(u,c){return o=c,rn(u.props,/grid-\w+-end/)})?~na(n+(i=i[o].value),"span",0)?n:Pe+he(n,"-start","")+n+Pe+"grid-row-span:"+(~na(i,"span",0)?rn(i,/\d+/):+rn(i,/\d+/)-+rn(n,/\d+/))+";":Pe+he(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(u){return rn(u.props,/grid-\w+-start/)})?n:Pe+he(he(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return he(n,/(.+)-inline(.+)/,we+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(n)-1-o>6)switch(Je(n,o+1)){case 109:if(Je(n,o+4)!==45)break;case 102:return he(n,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Pi+(Je(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~na(n,"stretch",0)?hp(he(n,"stretch","fill-available"),o,i)+n:n}break;case 5152:case 5920:return he(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,f,m,p,h,x){return Pe+c+":"+f+x+(m?Pe+c+"-span:"+(p?h:+h-+f)+x:"")+n});case 4949:if(Je(n,o+6)===121)return he(n,":",":"+we)+n;break;case 6444:switch(Je(n,Je(n,14)===45?18:11)){case 120:return he(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(Je(n,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+Pe+"$2box$3")+n;case 100:return he(n,":",":"+Pe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(n,"scroll-","scroll-snap-")+n}return n}function ca(n,o){for(var i="",u=0;u<n.length;u++)i+=o(n[u],u,n,o)||"";return i}function G0(n,o,i,u){switch(n.type){case L0:if(n.children.length)break;case A0:case su:return n.return=n.return||n.value;case lp:return"";case up:return n.return=n.value+"{"+ca(n.children,u)+"}";case wa:if(!Gt(n.value=n.props.join(",")))return""}return Gt(i=ca(n.children,u))?n.return=n.value+"{"+i+"}":""}function V0(n){var o=fp(n);return function(i,u,c,f){for(var m="",p=0;p<o;p++)m+=n[p](i,u,c,f)||"";return m}}function K0(n){return function(o){o.root||(o=o.return)&&n(o)}}function Q0(n,o,i,u){if(n.length>-1&&!n.return)switch(n.type){case su:n.return=hp(n.value,n.length,i);return;case up:return ca([Tn(n,{value:he(n.value,"@","@"+we)})],u);case wa:if(n.length)return R0(i=n.props,function(c){switch(rn(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pr(Tn(n,{props:[he(c,/:(read-\w+)/,":"+Pi+"$1")]})),Pr(Tn(n,{props:[c]})),Bl(n,{props:yf(i,u)});break;case"::placeholder":Pr(Tn(n,{props:[he(c,/:(plac\w+)/,":"+we+"input-$1")]})),Pr(Tn(n,{props:[he(c,/:(plac\w+)/,":"+Pi+"$1")]})),Pr(Tn(n,{props:[he(c,/:(plac\w+)/,Pe+"input-$1")]})),Pr(Tn(n,{props:[c]})),Bl(n,{props:yf(i,u)});break}return""})}}var Y0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},Mr=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",mp="active",gp="data-styled-version",Na="6.1.15",ou=`/*!sc*/
`,da=typeof window<"u"&&"HTMLElement"in window,J0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),Ca=Object.freeze([]),Rr=Object.freeze({});function X0(n,o,i){return i===void 0&&(i=Rr),n.theme!==i.theme&&n.theme||o||i.theme}var xp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Z0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q0=/(^-|-$)/g;function wf(n){return n.replace(Z0,"-").replace(q0,"")}var ex=/(a)(d)/gi,Qs=52,kf=function(n){return String.fromCharCode(n+(n>25?39:97))};function zl(n){var o,i="";for(o=Math.abs(n);o>Qs;o=o/Qs|0)i=kf(o%Qs)+i;return(kf(o%Qs)+i).replace(ex,"$1-$2")}var Tl,yp=5381,Ir=function(n,o){for(var i=o.length;i;)n=33*n^o.charCodeAt(--i);return n},vp=function(n){return Ir(yp,n)};function tx(n){return zl(vp(n)>>>0)}function nx(n){return n.displayName||n.name||"Component"}function Pl(n){return typeof n=="string"&&!0}var bp=typeof Symbol=="function"&&Symbol.for,wp=bp?Symbol.for("react.memo"):60115,rx=bp?Symbol.for("react.forward_ref"):60112,ix={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ax=((Tl={})[rx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tl[wp]=kp,Tl);function Sf(n){return("type"in(o=n)&&o.type.$$typeof)===wp?kp:"$$typeof"in n?ax[n.$$typeof]:ix;var o}var ox=Object.defineProperty,lx=Object.getOwnPropertyNames,jf=Object.getOwnPropertySymbols,ux=Object.getOwnPropertyDescriptor,cx=Object.getPrototypeOf,Nf=Object.prototype;function Sp(n,o,i){if(typeof o!="string"){if(Nf){var u=cx(o);u&&u!==Nf&&Sp(n,u,i)}var c=lx(o);jf&&(c=c.concat(jf(o)));for(var f=Sf(n),m=Sf(o),p=0;p<c.length;++p){var h=c[p];if(!(h in sx||i&&i[h]||m&&h in m||f&&h in f)){var x=ux(o,h);try{ox(n,h,x)}catch{}}}}return n}function Dr(n){return typeof n=="function"}function lu(n){return typeof n=="object"&&"styledComponentId"in n}function Zn(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function Cf(n,o){if(n.length===0)return"";for(var i=n[0],u=1;u<n.length;u++)i+=n[u];return i}function Li(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Fl(n,o,i){if(i===void 0&&(i=!1),!i&&!Li(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)n[u]=Fl(n[u],o[u]);else if(Li(o))for(var u in o)n[u]=Fl(n[u],o[u]);return n}function uu(n,o){Object.defineProperty(n,"toString",{value:o})}function Bi(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var dx=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var i=0,u=0;u<o;u++)i+=this.groupSizes[u];return i},n.prototype.insertRules=function(o,i){if(o>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,f=c;o>=f;)if((f<<=1)<0)throw Bi(16,"".concat(o));this.groupSizes=new Uint32Array(f),this.groupSizes.set(u),this.length=f;for(var m=c;m<f;m++)this.groupSizes[m]=0}for(var p=this.indexOfGroup(o+1),h=(m=0,i.length);m<h;m++)this.tag.insertRule(p,i[m])&&(this.groupSizes[o]++,p++)},n.prototype.clearGroup=function(o){if(o<this.length){var i=this.groupSizes[o],u=this.indexOfGroup(o),c=u+i;this.groupSizes[o]=0;for(var f=u;f<c;f++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(o){var i="";if(o>=this.length||this.groupSizes[o]===0)return i;for(var u=this.groupSizes[o],c=this.indexOfGroup(o),f=c+u,m=c;m<f;m++)i+="".concat(this.tag.getRule(m)).concat(ou);return i},n}(),sa=new Map,fa=new Map,aa=1,Ys=function(n){if(sa.has(n))return sa.get(n);for(;fa.has(aa);)aa++;var o=aa++;return sa.set(n,o),fa.set(o,n),o},fx=function(n,o){aa=o+1,sa.set(n,o),fa.set(o,n)},px="style[".concat(Mr,"][").concat(gp,'="').concat(Na,'"]'),hx=new RegExp("^".concat(Mr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mx=function(n,o,i){for(var u,c=i.split(","),f=0,m=c.length;f<m;f++)(u=c[f])&&n.registerName(o,u)},gx=function(n,o){for(var i,u=((i=o.textContent)!==null&&i!==void 0?i:"").split(ou),c=[],f=0,m=u.length;f<m;f++){var p=u[f].trim();if(p){var h=p.match(hx);if(h){var x=0|parseInt(h[1],10),v=h[2];x!==0&&(fx(v,x),mx(n,v,h[3]),n.getTag().insertRules(x,c)),c.length=0}else c.push(p)}}},Ef=function(n){for(var o=document.querySelectorAll(px),i=0,u=o.length;i<u;i++){var c=o[i];c&&c.getAttribute(Mr)!==mp&&(gx(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function xx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jp=function(n){var o=document.head,i=n||o,u=document.createElement("style"),c=function(p){var h=Array.from(p.querySelectorAll("style[".concat(Mr,"]")));return h[h.length-1]}(i),f=c!==void 0?c.nextSibling:null;u.setAttribute(Mr,mp),u.setAttribute(gp,Na);var m=xx();return m&&u.setAttribute("nonce",m),i.insertBefore(u,f),u},yx=function(){function n(o){this.element=jp(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var u=document.styleSheets,c=0,f=u.length;c<f;c++){var m=u[c];if(m.ownerNode===i)return m}throw Bi(17)}(this.element),this.length=0}return n.prototype.insertRule=function(o,i){try{return this.sheet.insertRule(i,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var i=this.sheet.cssRules[o];return i&&i.cssText?i.cssText:""},n}(),vx=function(){function n(o){this.element=jp(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,i){if(o<=this.length&&o>=0){var u=document.createTextNode(i);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),bx=function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,i){return o<=this.length&&(this.rules.splice(o,0,i),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),Tf=da,wx={isServer:!da,useCSSOMInjection:!J0},Np=function(){function n(o,i,u){o===void 0&&(o=Rr),i===void 0&&(i={});var c=this;this.options=ht(ht({},wx),o),this.gs=i,this.names=new Map(u),this.server=!!o.isServer,!this.server&&da&&Tf&&(Tf=!1,Ef(this)),uu(this,function(){return function(f){for(var m=f.getTag(),p=m.length,h="",x=function(E){var S=function(D){return fa.get(D)}(E);if(S===void 0)return"continue";var w=f.names.get(S),k=m.getGroup(E);if(w===void 0||!w.size||k.length===0)return"continue";var M="".concat(Mr,".g").concat(E,'[id="').concat(S,'"]'),P="";w!==void 0&&w.forEach(function(D){D.length>0&&(P+="".concat(D,","))}),h+="".concat(k).concat(M,'{content:"').concat(P,'"}').concat(ou)},v=0;v<p;v++)x(v);return h}(c)})}return n.registerId=function(o){return Ys(o)},n.prototype.rehydrate=function(){!this.server&&da&&Ef(this)},n.prototype.reconstructWithOptions=function(o,i){return i===void 0&&(i=!0),new n(ht(ht({},this.options),o),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=function(i){var u=i.useCSSOMInjection,c=i.target;return i.isServer?new bx(c):u?new yx(c):new vx(c)}(this.options),new dx(o)));var o},n.prototype.hasNameForId=function(o,i){return this.names.has(o)&&this.names.get(o).has(i)},n.prototype.registerName=function(o,i){if(Ys(o),this.names.has(o))this.names.get(o).add(i);else{var u=new Set;u.add(i),this.names.set(o,u)}},n.prototype.insertRules=function(o,i,u){this.registerName(o,i),this.getTag().insertRules(Ys(o),u)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Ys(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n}(),kx=/&/g,Sx=/^\s*\/\/.*$/gm;function Cp(n,o){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(o," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(o," ")),i.props=i.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Cp(i.children,o)),i})}function jx(n){var o,i,u,c=Rr,f=c.options,m=f===void 0?Rr:f,p=c.plugins,h=p===void 0?Ca:p,x=function(S,w,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(o):S},v=h.slice();v.push(function(S){S.type===wa&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(kx,i).replace(u,x))}),m.prefix&&v.push(Q0),v.push(G0);var E=function(S,w,k,M){w===void 0&&(w=""),k===void 0&&(k=""),M===void 0&&(M="&"),o=M,i=w,u=new RegExp("\\".concat(i,"\\b"),"g");var P=S.replace(Sx,""),D=H0(k||w?"".concat(k," ").concat(w," { ").concat(P," }"):P);m.namespace&&(D=Cp(D,m.namespace));var B=[];return ca(D,V0(v.concat(K0(function(W){return B.push(W)})))),B};return E.hash=h.length?h.reduce(function(S,w){return w.name||Bi(15),Ir(S,w.name)},yp).toString():"",E}var Nx=new Np,$l=jx(),Ep=oe.createContext({shouldForwardProp:void 0,styleSheet:Nx,stylis:$l});Ep.Consumer;oe.createContext(void 0);function Pf(){return N.useContext(Ep)}var Cx=function(){function n(o,i){var u=this;this.inject=function(c,f){f===void 0&&(f=$l);var m=u.name+f.hash;c.hasNameForId(u.id,m)||c.insertRules(u.id,m,f(u.rules,m,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=i,uu(this,function(){throw Bi(12,String(u.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=$l),this.name+o.hash},n}(),Ex=function(n){return n>="A"&&n<="Z"};function If(n){for(var o="",i=0;i<n.length;i++){var u=n[i];if(i===1&&u==="-"&&n[0]==="-")return n;Ex(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var Tp=function(n){return n==null||n===!1||n===""},Pp=function(n){var o,i,u=[];for(var c in n){var f=n[c];n.hasOwnProperty(c)&&!Tp(f)&&(Array.isArray(f)&&f.isCss||Dr(f)?u.push("".concat(If(c),":"),f,";"):Li(f)?u.push.apply(u,ua(ua(["".concat(c," {")],Pp(f),!1),["}"],!1)):u.push("".concat(If(c),": ").concat((o=c,(i=f)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||o in Y0||o.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return u};function tr(n,o,i,u){if(Tp(n))return[];if(lu(n))return[".".concat(n.styledComponentId)];if(Dr(n)){if(!Dr(f=n)||f.prototype&&f.prototype.isReactComponent||!o)return[n];var c=n(o);return tr(c,o,i,u)}var f;return n instanceof Cx?i?(n.inject(i,u),[n.getName(u)]):[n]:Li(n)?Pp(n):Array.isArray(n)?Array.prototype.concat.apply(Ca,n.map(function(m){return tr(m,o,i,u)})):[n.toString()]}function Tx(n){for(var o=0;o<n.length;o+=1){var i=n[o];if(Dr(i)&&!lu(i))return!1}return!0}var Px=vp(Na),Ix=function(){function n(o,i,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Tx(o),this.componentId=i,this.baseHash=Ir(Px,i),this.baseStyle=u,Np.registerId(i)}return n.prototype.generateAndInjectStyles=function(o,i,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))c=Zn(c,this.staticRulesId);else{var f=Cf(tr(this.rules,o,i,u)),m=zl(Ir(this.baseHash,f)>>>0);if(!i.hasNameForId(this.componentId,m)){var p=u(f,".".concat(m),void 0,this.componentId);i.insertRules(this.componentId,m,p)}c=Zn(c,m),this.staticRulesId=m}else{for(var h=Ir(this.baseHash,u.hash),x="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")x+=E;else if(E){var S=Cf(tr(E,o,i,u));h=Ir(h,S+v),x+=S}}if(x){var w=zl(h>>>0);i.hasNameForId(this.componentId,w)||i.insertRules(this.componentId,w,u(x,".".concat(w),void 0,this.componentId)),c=Zn(c,w)}}return c},n}(),Ip=oe.createContext(void 0);Ip.Consumer;var Il={};function Ax(n,o,i){var u=lu(n),c=n,f=!Pl(n),m=o.attrs,p=m===void 0?Ca:m,h=o.componentId,x=h===void 0?function(R,O){var G=typeof R!="string"?"sc":wf(R);Il[G]=(Il[G]||0)+1;var H="".concat(G,"-").concat(tx(Na+G+Il[G]));return O?"".concat(O,"-").concat(H):H}(o.displayName,o.parentComponentId):h,v=o.displayName,E=v===void 0?function(R){return Pl(R)?"styled.".concat(R):"Styled(".concat(nx(R),")")}(n):v,S=o.displayName&&o.componentId?"".concat(wf(o.displayName),"-").concat(o.componentId):o.componentId||x,w=u&&c.attrs?c.attrs.concat(p).filter(Boolean):p,k=o.shouldForwardProp;if(u&&c.shouldForwardProp){var M=c.shouldForwardProp;if(o.shouldForwardProp){var P=o.shouldForwardProp;k=function(R,O){return M(R,O)&&P(R,O)}}else k=M}var D=new Ix(i,S,u?c.componentStyle:void 0);function B(R,O){return function(G,H,ie){var de=G.attrs,ye=G.componentStyle,Ae=G.defaultProps,Ne=G.foldedComponentIds,Fe=G.styledComponentId,je=G.target,He=oe.useContext(Ip),Be=Pf(),ke=G.shouldForwardProp||Be.shouldForwardProp,K=X0(H,He,Ae)||Rr,te=function(me,fe,re){for(var pe,xe=ht(ht({},fe),{className:void 0,theme:re}),We=0;We<me.length;We+=1){var wt=Dr(pe=me[We])?pe(xe):pe;for(var at in wt)xe[at]=at==="className"?Zn(xe[at],wt[at]):at==="style"?ht(ht({},xe[at]),wt[at]):wt[at]}return fe.className&&(xe.className=Zn(xe.className,fe.className)),xe}(de,H,K),Q=te.as||je,C={};for(var L in te)te[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&te.theme===K||(L==="forwardedAs"?C.as=te.forwardedAs:ke&&!ke(L,Q)||(C[L]=te[L]));var X=function(me,fe){var re=Pf(),pe=me.generateAndInjectStyles(fe,re.styleSheet,re.stylis);return pe}(ye,te),ce=Zn(Ne,Fe);return X&&(ce+=" "+X),te.className&&(ce+=" "+te.className),C[Pl(Q)&&!xp.has(Q)?"class":"className"]=ce,ie&&(C.ref=ie),N.createElement(Q,C)}(W,R,O)}B.displayName=E;var W=oe.forwardRef(B);return W.attrs=w,W.componentStyle=D,W.displayName=E,W.shouldForwardProp=k,W.foldedComponentIds=u?Zn(c.foldedComponentIds,c.styledComponentId):"",W.styledComponentId=S,W.target=u?c.target:n,Object.defineProperty(W,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=u?function(O){for(var G=[],H=1;H<arguments.length;H++)G[H-1]=arguments[H];for(var ie=0,de=G;ie<de.length;ie++)Fl(O,de[ie],!0);return O}({},c.defaultProps,R):R}}),uu(W,function(){return".".concat(W.styledComponentId)}),f&&Sp(W,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),W}function Af(n,o){for(var i=[n[0]],u=0,c=o.length;u<c;u+=1)i.push(o[u],n[u+1]);return i}var Lf=function(n){return Object.assign(n,{isCss:!0})};function Lx(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];if(Dr(n)||Li(n))return Lf(tr(Af(Ca,ua([n],o,!0))));var u=n;return o.length===0&&u.length===1&&typeof u[0]=="string"?tr(u):Lf(tr(Af(u,o)))}function Ul(n,o,i){if(i===void 0&&(i=Rr),!o)throw Bi(1,o);var u=function(c){for(var f=[],m=1;m<arguments.length;m++)f[m-1]=arguments[m];return n(o,i,Lx.apply(void 0,ua([c],f,!1)))};return u.attrs=function(c){return Ul(n,o,ht(ht({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return Ul(n,o,ht(ht({},i),c))},u}var Ap=function(n){return Ul(Ax,n)},Ln=Ap;xp.forEach(function(n){Ln[n]=Ap(n)});const Mf=()=>{const{isDark:n}=N.useContext(ba);return a.jsx(Mx,{isDark:n,children:a.jsx("input",{type:"checkbox",className:"switch shadow-lg shadow-slate-400 dark:shadow-slate-600",checked:n,readOnly:!0})})},Mx=Ln.div`
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
`,Rf=["Build your resume easily","No need to worry about what to add what to not","Get high rated, ATS freindly resumes","Different variants of resume templates available","We carefully selected strong resume data inputs from users after a high research.","Download your resume in pdf or web formate","Use AI to create a perfect summary for your resume","Completely free to use","We didn't store your entered data and generated resumes (for user privacy)","Light weight application. just take 1.8MB of RAM and approximately 0 CPU time"],Rx=()=>{const n=eu(),o=()=>{n("/GetInfo")},i=()=>{n("/ViewTemplates")},u=()=>{n("/AboutUs")},{isDark:c,setIsDark:f}=N.useContext(ba),m=()=>{f(p=>!p)};return N.useEffect(()=>{const p=new Dl("#mobile-typing-text",{strings:Rf,loop:!0,typeSpeed:35,backSpeed:25,backDelay:500,cursorChar:" "}),h=new Dl("#desktop-typing-text",{strings:Rf,loop:!0,typeSpeed:35,backSpeed:25,backDelay:500,cursorChar:" "});return()=>{p.destroy(),h.destroy()}},[]),a.jsxs("div",{className:"flex flex-col h-screen bg-gray-300 text-center px-4 dark:bg-slate-950",children:[a.jsxs("div",{className:"hidden md:flex justify-between items-center w-full px-6 py-3 bg-white shadow-md rounded-3xl mt-3 dark:bg-slate-800",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("button",{className:"mr-4 mt-1",title:"The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it as you prefer",onClick:m,children:a.jsx(Mf,{})}),a.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",onClick:i,title:"View Generated resume samples",children:"Generated Resumes"})]}),a.jsx("h1",{className:"text-xl mr-5 font-bold text-gray-800 dark:text-white no-underline",children:a.jsxs("a",{href:"https://github.com/NishantkSingh0/Resume-Builder",title:"Address to GitHub repository of this project",target:"_blank",children:[a.jsx("span",{className:"lg:hidden",children:"Resume Builder"}),a.jsx("span",{className:"hidden lg:block",children:"Level Up Your First Impression"})]})}),a.jsxs("div",{className:"flex space-x-4",children:[a.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",title:"our contributions and contact information",onClick:u,children:"About Us"}),a.jsx("button",{className:"px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105",title:"Continue fiiling details and craft future jobs",onClick:o,children:"Continue ➤"})]})]}),a.jsxs("div",{className:"hidden md:flex flex-col items-center justify-center flex-1 mt-3 mb-3",children:[a.jsx(I0,{}),a.jsx("span",{id:"desktop-typing-text",className:"hidden md:inline-block text-xl md:text-2xl text-gray-800 h-6 dark:text-white"})]}),a.jsxs("div",{className:"flex md:hidden justify-between items-center w-full h-14 px-6 py-3 bg-white shadow-md mt-6 rounded-3xl dark:bg-slate-800",children:[a.jsx("button",{className:"text-2xl mr-8 mt-1",title:"The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it to your preferred mode.",onClick:m,children:a.jsx(Mf,{})}),a.jsx("div",{className:"md:hidden flex space-x-4",children:a.jsx("button",{className:" px-4 py-[3px] bg-blue-500 text-white rounded-full hover:bg-blue-700",onClick:o,children:"Continue"})})]}),a.jsxs("div",{className:"md:hidden flex justify-center flex-col items-center flex-grow",children:[a.jsxs("p",{className:"text-sm sm:text-lg text-gray-500 font-semibold mb-4",children:["   ",a.jsx("span",{id:"mobile-typing-text",className:"md:hidden text-xl sm:text-2xl text-gray-800 h-6 mb-4 dark:text-white"})]}),a.jsx("a",{onClick:i,className:"cursor-pointer text-gray-600 dark:text-gray-300/80 font-bold",children:"Generated Templates"})]}),a.jsxs("div",{className:"md:hidden absolute bottom-4 font-bold text-gray-800 left-1/2 -translate-x-1/2 text-center dark:text-white/80",children:[a.jsx("br",{}),a.jsx("a",{onClick:u,className:"cursor-pointer dark:text-gray-300",children:"About Us"})]})]})};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lp=(...n)=>n.filter((o,i,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===i).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=N.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:m,...p},h)=>N.createElement("svg",{ref:h,...Bx,width:o,height:o,stroke:n,strokeWidth:u?Number(i)*24/Number(o):i,className:Lp("lucide",c),...p},[...m.map(([x,v])=>N.createElement(x,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=(n,o)=>{const i=N.forwardRef(({className:u,...c},f)=>N.createElement(_x,{ref:f,iconNode:o,className:Lp(`lucide-${Dx(n)}`,u),...c}));return i.displayName=`${n}`,i};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zx=Or("Check",Ox);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$x=Or("ChevronRight",Fx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Hx=Or("Eye",Ux);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Gx=Or("Menu",Wx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Js=Or("Plus",Vx);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Df=Or("X",Kx);let Qx={data:""},Yx=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||Qx,Jx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Xx=/\/\*[^]*?\*\/|  +/g,Bf=/\n+/g,Pn=(n,o)=>{let i="",u="",c="";for(let f in n){let m=n[f];f[0]=="@"?f[1]=="i"?i=f+" "+m+";":u+=f[1]=="f"?Pn(m,f):f+"{"+Pn(m,f[1]=="k"?"":o)+"}":typeof m=="object"?u+=Pn(m,o?o.replace(/([^,])+/g,p=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,h=>/&/.test(h)?h.replace(/&/g,p):p?p+" "+h:h)):f):m!=null&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=Pn.p?Pn.p(f,m):f+":"+m+";")}return i+(o&&c?o+"{"+c+"}":c)+u},nn={},Mp=n=>{if(typeof n=="object"){let o="";for(let i in n)o+=i+Mp(n[i]);return o}return n},Zx=(n,o,i,u,c)=>{let f=Mp(n),m=nn[f]||(nn[f]=(h=>{let x=0,v=11;for(;x<h.length;)v=101*v+h.charCodeAt(x++)>>>0;return"go"+v})(f));if(!nn[m]){let h=f!==n?n:(x=>{let v,E,S=[{}];for(;v=Jx.exec(x.replace(Xx,""));)v[4]?S.shift():v[3]?(E=v[3].replace(Bf," ").trim(),S.unshift(S[0][E]=S[0][E]||{})):S[0][v[1]]=v[2].replace(Bf," ").trim();return S[0]})(n);nn[m]=Pn(c?{["@keyframes "+m]:h}:h,i?"":"."+m)}let p=i&&nn.g?nn.g:null;return i&&(nn.g=nn[m]),((h,x,v,E)=>{E?x.data=x.data.replace(E,h):x.data.indexOf(h)===-1&&(x.data=v?h+x.data:x.data+h)})(nn[m],o,u,p),m},qx=(n,o,i)=>n.reduce((u,c,f)=>{let m=o[f];if(m&&m.call){let p=m(i),h=p&&p.props&&p.props.className||/^go/.test(p)&&p;m=h?"."+h:p&&typeof p=="object"?p.props?"":Pn(p,""):p===!1?"":p}return u+c+(m??"")},"");function Ea(n){let o=this||{},i=n.call?n(o.p):n;return Zx(i.unshift?i.raw?qx(i,[].slice.call(arguments,1),o.p):i.reduce((u,c)=>Object.assign(u,c&&c.call?c(o.p):c),{}):i,Yx(o.target),o.g,o.o,o.k)}let Rp,Hl,Wl;Ea.bind({g:1});let an=Ea.bind({k:1});function ey(n,o,i,u){Pn.p=o,Rp=n,Hl=i,Wl=u}function Mn(n,o){let i=this||{};return function(){let u=arguments;function c(f,m){let p=Object.assign({},f),h=p.className||c.className;i.p=Object.assign({theme:Hl&&Hl()},p),i.o=/ *go\d+/.test(h),p.className=Ea.apply(i,u)+(h?" "+h:"");let x=n;return n[0]&&(x=p.as||n,delete p.as),Wl&&x[0]&&Wl(p),Rp(x,p)}return c}}var ty=n=>typeof n=="function",pa=(n,o)=>ty(n)?n(o):n,ny=(()=>{let n=0;return()=>(++n).toString()})(),Dp=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");n=!o||o.matches}return n}})(),ry=20,Bp=(n,o)=>{switch(o.type){case 0:return{...n,toasts:[o.toast,...n.toasts].slice(0,ry)};case 1:return{...n,toasts:n.toasts.map(f=>f.id===o.toast.id?{...f,...o.toast}:f)};case 2:let{toast:i}=o;return Bp(n,{type:n.toasts.find(f=>f.id===i.id)?1:0,toast:i});case 3:let{toastId:u}=o;return{...n,toasts:n.toasts.map(f=>f.id===u||u===void 0?{...f,dismissed:!0,visible:!1}:f)};case 4:return o.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(f=>f.id!==o.toastId)};case 5:return{...n,pausedAt:o.time};case 6:let c=o.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(f=>({...f,pauseDuration:f.pauseDuration+c}))}}},oa=[],qn={toasts:[],pausedAt:void 0},rr=n=>{qn=Bp(qn,n),oa.forEach(o=>{o(qn)})},iy={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},sy=(n={})=>{let[o,i]=N.useState(qn),u=N.useRef(qn);N.useEffect(()=>(u.current!==qn&&i(qn),oa.push(i),()=>{let f=oa.indexOf(i);f>-1&&oa.splice(f,1)}),[]);let c=o.toasts.map(f=>{var m,p,h;return{...n,...n[f.type],...f,removeDelay:f.removeDelay||((m=n[f.type])==null?void 0:m.removeDelay)||(n==null?void 0:n.removeDelay),duration:f.duration||((p=n[f.type])==null?void 0:p.duration)||(n==null?void 0:n.duration)||iy[f.type],style:{...n.style,...(h=n[f.type])==null?void 0:h.style,...f.style}}});return{...o,toasts:c}},ay=(n,o="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:o,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...i,id:(i==null?void 0:i.id)||ny()}),_i=n=>(o,i)=>{let u=ay(o,n,i);return rr({type:2,toast:u}),u.id},st=(n,o)=>_i("blank")(n,o);st.error=_i("error");st.success=_i("success");st.loading=_i("loading");st.custom=_i("custom");st.dismiss=n=>{rr({type:3,toastId:n})};st.remove=n=>rr({type:4,toastId:n});st.promise=(n,o,i)=>{let u=st.loading(o.loading,{...i,...i==null?void 0:i.loading});return typeof n=="function"&&(n=n()),n.then(c=>{let f=o.success?pa(o.success,c):void 0;return f?st.success(f,{id:u,...i,...i==null?void 0:i.success}):st.dismiss(u),c}).catch(c=>{let f=o.error?pa(o.error,c):void 0;f?st.error(f,{id:u,...i,...i==null?void 0:i.error}):st.dismiss(u)}),n};var oy=(n,o)=>{rr({type:1,toast:{id:n,height:o}})},ly=()=>{rr({type:5,time:Date.now()})},Ii=new Map,uy=1e3,cy=(n,o=uy)=>{if(Ii.has(n))return;let i=setTimeout(()=>{Ii.delete(n),rr({type:4,toastId:n})},o);Ii.set(n,i)},dy=n=>{let{toasts:o,pausedAt:i}=sy(n);N.useEffect(()=>{if(i)return;let f=Date.now(),m=o.map(p=>{if(p.duration===1/0)return;let h=(p.duration||0)+p.pauseDuration-(f-p.createdAt);if(h<0){p.visible&&st.dismiss(p.id);return}return setTimeout(()=>st.dismiss(p.id),h)});return()=>{m.forEach(p=>p&&clearTimeout(p))}},[o,i]);let u=N.useCallback(()=>{i&&rr({type:6,time:Date.now()})},[i]),c=N.useCallback((f,m)=>{let{reverseOrder:p=!1,gutter:h=8,defaultPosition:x}=m||{},v=o.filter(w=>(w.position||x)===(f.position||x)&&w.height),E=v.findIndex(w=>w.id===f.id),S=v.filter((w,k)=>k<E&&w.visible).length;return v.filter(w=>w.visible).slice(...p?[S+1]:[0,S]).reduce((w,k)=>w+(k.height||0)+h,0)},[o]);return N.useEffect(()=>{o.forEach(f=>{if(f.dismissed)cy(f.id,f.removeDelay);else{let m=Ii.get(f.id);m&&(clearTimeout(m),Ii.delete(f.id))}})},[o]),{toasts:o,handlers:{updateHeight:oy,startPause:ly,endPause:u,calculateOffset:c}}},fy=an`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,py=an`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,hy=an`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,my=Mn("div")`
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
`,gy=an`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,xy=Mn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${gy} 1s linear infinite;
`,yy=an`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,vy=an`
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
}`,by=Mn("div")`
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
`,wy=Mn("div")`
  position: absolute;
`,ky=Mn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Sy=an`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,jy=Mn("div")`
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
`,Ty="0%{opacity:0;} 100%{opacity:1;}",Py="0%{opacity:1;} 100%{opacity:0;}",Iy=Mn("div")`
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
`,Ay=Mn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ly=(n,o)=>{let i=n.includes("top")?1:-1,[u,c]=Dp()?[Ty,Py]:[Cy(i),Ey(i)];return{animation:o?`${an(u)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${an(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},My=N.memo(({toast:n,position:o,style:i,children:u})=>{let c=n.height?Ly(n.position||o||"top-center",n.visible):{opacity:0},f=N.createElement(Ny,{toast:n}),m=N.createElement(Ay,{...n.ariaProps},pa(n.message,n));return N.createElement(Iy,{className:n.className,style:{...c,...i,...n.style}},typeof u=="function"?u({icon:f,message:m}):N.createElement(N.Fragment,null,f,m))});ey(N.createElement);var Ry=({id:n,className:o,style:i,onHeightUpdate:u,children:c})=>{let f=N.useCallback(m=>{if(m){let p=()=>{let h=m.getBoundingClientRect().height;u(n,h)};p(),new MutationObserver(p).observe(m,{subtree:!0,childList:!0,characterData:!0})}},[n,u]);return N.createElement("div",{ref:f,className:o,style:i},c)},Dy=(n,o)=>{let i=n.includes("top"),u=i?{top:0}:{bottom:0},c=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Dp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(i?1:-1)}px)`,...u,...c}},By=Ea`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Xs=16,_y=({reverseOrder:n,position:o="top-center",toastOptions:i,gutter:u,children:c,containerStyle:f,containerClassName:m})=>{let{toasts:p,handlers:h}=dy(i);return N.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Xs,left:Xs,right:Xs,bottom:Xs,pointerEvents:"none",...f},className:m,onMouseEnter:h.startPause,onMouseLeave:h.endPause},p.map(x=>{let v=x.position||o,E=h.calculateOffset(x,{reverseOrder:n,gutter:u,defaultPosition:o}),S=Dy(v,E);return N.createElement(Ry,{id:x.id,key:x.id,onHeightUpdate:h.updateHeight,className:x.visible?By:"",style:S},x.type==="custom"?pa(x.message,x):c?c(x):N.createElement(My,{toast:x,position:v}))}))},Wt=st;function on(n){return Array.isArray?Array.isArray(n):zp(n)==="[object Array]"}function Oy(n){if(typeof n=="string")return n;let o=n+"";return o=="0"&&1/n==-1/0?"-0":o}function zy(n){return n==null?"":Oy(n)}function Vt(n){return typeof n=="string"}function _p(n){return typeof n=="number"}function Fy(n){return n===!0||n===!1||$y(n)&&zp(n)=="[object Boolean]"}function Op(n){return typeof n=="object"}function $y(n){return Op(n)&&n!==null}function bt(n){return n!=null}function Al(n){return!n.trim().length}function zp(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Uy="Incorrect 'index' type",Hy=n=>`Invalid value for key ${n}`,Wy=n=>`Pattern length exceeds max of ${n}.`,Gy=n=>`Missing ${n} property in key`,Vy=n=>`Property 'weight' in key '${n}' must be a positive integer`,_f=Object.prototype.hasOwnProperty;class Ky{constructor(o){this._keys=[],this._keyMap={};let i=0;o.forEach(u=>{let c=Fp(u);this._keys.push(c),this._keyMap[c.id]=c,i+=c.weight}),this._keys.forEach(u=>{u.weight/=i})}get(o){return this._keyMap[o]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Fp(n){let o=null,i=null,u=null,c=1,f=null;if(Vt(n)||on(n))u=n,o=Of(n),i=Gl(n);else{if(!_f.call(n,"name"))throw new Error(Gy("name"));const m=n.name;if(u=m,_f.call(n,"weight")&&(c=n.weight,c<=0))throw new Error(Vy(m));o=Of(m),i=Gl(m),f=n.getFn}return{path:o,id:i,weight:c,src:u,getFn:f}}function Of(n){return on(n)?n:n.split(".")}function Gl(n){return on(n)?n.join("."):n}function Qy(n,o){let i=[],u=!1;const c=(f,m,p)=>{if(bt(f))if(!m[p])i.push(f);else{let h=m[p];const x=f[h];if(!bt(x))return;if(p===m.length-1&&(Vt(x)||_p(x)||Fy(x)))i.push(zy(x));else if(on(x)){u=!0;for(let v=0,E=x.length;v<E;v+=1)c(x[v],m,p+1)}else m.length&&c(x,m,p+1)}};return c(n,Vt(o)?o.split("."):o,0),u?i:i[0]}const Yy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Jy={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,o)=>n.score===o.score?n.idx<o.idx?-1:1:n.score<o.score?-1:1},Xy={location:0,threshold:.6,distance:100},Zy={useExtendedSearch:!1,getFn:Qy,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var le={...Jy,...Yy,...Xy,...Zy};const qy=/[^ ]+/g;function e1(n=1,o=3){const i=new Map,u=Math.pow(10,o);return{get(c){const f=c.match(qy).length;if(i.has(f))return i.get(f);const m=1/Math.pow(f,.5*n),p=parseFloat(Math.round(m*u)/u);return i.set(f,p),p},clear(){i.clear()}}}class cu{constructor({getFn:o=le.getFn,fieldNormWeight:i=le.fieldNormWeight}={}){this.norm=e1(i,3),this.getFn=o,this.isCreated=!1,this.setIndexRecords()}setSources(o=[]){this.docs=o}setIndexRecords(o=[]){this.records=o}setKeys(o=[]){this.keys=o,this._keysMap={},o.forEach((i,u)=>{this._keysMap[i.id]=u})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Vt(this.docs[0])?this.docs.forEach((o,i)=>{this._addString(o,i)}):this.docs.forEach((o,i)=>{this._addObject(o,i)}),this.norm.clear())}add(o){const i=this.size();Vt(o)?this._addString(o,i):this._addObject(o,i)}removeAt(o){this.records.splice(o,1);for(let i=o,u=this.size();i<u;i+=1)this.records[i].i-=1}getValueForItemAtKeyId(o,i){return o[this._keysMap[i]]}size(){return this.records.length}_addString(o,i){if(!bt(o)||Al(o))return;let u={v:o,i,n:this.norm.get(o)};this.records.push(u)}_addObject(o,i){let u={i,$:{}};this.keys.forEach((c,f)=>{let m=c.getFn?c.getFn(o):this.getFn(o,c.path);if(bt(m)){if(on(m)){let p=[];const h=[{nestedArrIndex:-1,value:m}];for(;h.length;){const{nestedArrIndex:x,value:v}=h.pop();if(bt(v))if(Vt(v)&&!Al(v)){let E={v,i:x,n:this.norm.get(v)};p.push(E)}else on(v)&&v.forEach((E,S)=>{h.push({nestedArrIndex:S,value:E})})}u.$[f]=p}else if(Vt(m)&&!Al(m)){let p={v:m,n:this.norm.get(m)};u.$[f]=p}}}),this.records.push(u)}toJSON(){return{keys:this.keys,records:this.records}}}function $p(n,o,{getFn:i=le.getFn,fieldNormWeight:u=le.fieldNormWeight}={}){const c=new cu({getFn:i,fieldNormWeight:u});return c.setKeys(n.map(Fp)),c.setSources(o),c.create(),c}function t1(n,{getFn:o=le.getFn,fieldNormWeight:i=le.fieldNormWeight}={}){const{keys:u,records:c}=n,f=new cu({getFn:o,fieldNormWeight:i});return f.setKeys(u),f.setIndexRecords(c),f}function Zs(n,{errors:o=0,currentLocation:i=0,expectedLocation:u=0,distance:c=le.distance,ignoreLocation:f=le.ignoreLocation}={}){const m=o/n.length;if(f)return m;const p=Math.abs(u-i);return c?m+p/c:p?1:m}function n1(n=[],o=le.minMatchCharLength){let i=[],u=-1,c=-1,f=0;for(let m=n.length;f<m;f+=1){let p=n[f];p&&u===-1?u=f:!p&&u!==-1&&(c=f-1,c-u+1>=o&&i.push([u,c]),u=-1)}return n[f-1]&&f-u>=o&&i.push([u,f-1]),i}const Xn=32;function r1(n,o,i,{location:u=le.location,distance:c=le.distance,threshold:f=le.threshold,findAllMatches:m=le.findAllMatches,minMatchCharLength:p=le.minMatchCharLength,includeMatches:h=le.includeMatches,ignoreLocation:x=le.ignoreLocation}={}){if(o.length>Xn)throw new Error(Wy(Xn));const v=o.length,E=n.length,S=Math.max(0,Math.min(u,E));let w=f,k=S;const M=p>1||h,P=M?Array(E):[];let D;for(;(D=n.indexOf(o,k))>-1;){let H=Zs(o,{currentLocation:D,expectedLocation:S,distance:c,ignoreLocation:x});if(w=Math.min(H,w),k=D+v,M){let ie=0;for(;ie<v;)P[D+ie]=1,ie+=1}}k=-1;let B=[],W=1,R=v+E;const O=1<<v-1;for(let H=0;H<v;H+=1){let ie=0,de=R;for(;ie<de;)Zs(o,{errors:H,currentLocation:S+de,expectedLocation:S,distance:c,ignoreLocation:x})<=w?ie=de:R=de,de=Math.floor((R-ie)/2+ie);R=de;let ye=Math.max(1,S-de+1),Ae=m?E:Math.min(S+de,E)+v,Ne=Array(Ae+2);Ne[Ae+1]=(1<<H)-1;for(let je=Ae;je>=ye;je-=1){let He=je-1,Be=i[n.charAt(He)];if(M&&(P[He]=+!!Be),Ne[je]=(Ne[je+1]<<1|1)&Be,H&&(Ne[je]|=(B[je+1]|B[je])<<1|1|B[je+1]),Ne[je]&O&&(W=Zs(o,{errors:H,currentLocation:He,expectedLocation:S,distance:c,ignoreLocation:x}),W<=w)){if(w=W,k=He,k<=S)break;ye=Math.max(1,2*S-k)}}if(Zs(o,{errors:H+1,currentLocation:S,expectedLocation:S,distance:c,ignoreLocation:x})>w)break;B=Ne}const G={isMatch:k>=0,score:Math.max(.001,W)};if(M){const H=n1(P,p);H.length?h&&(G.indices=H):G.isMatch=!1}return G}function i1(n){let o={};for(let i=0,u=n.length;i<u;i+=1){const c=n.charAt(i);o[c]=(o[c]||0)|1<<u-i-1}return o}const ha=String.prototype.normalize?n=>n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):n=>n;class Up{constructor(o,{location:i=le.location,threshold:u=le.threshold,distance:c=le.distance,includeMatches:f=le.includeMatches,findAllMatches:m=le.findAllMatches,minMatchCharLength:p=le.minMatchCharLength,isCaseSensitive:h=le.isCaseSensitive,ignoreDiacritics:x=le.ignoreDiacritics,ignoreLocation:v=le.ignoreLocation}={}){if(this.options={location:i,threshold:u,distance:c,includeMatches:f,findAllMatches:m,minMatchCharLength:p,isCaseSensitive:h,ignoreDiacritics:x,ignoreLocation:v},o=h?o:o.toLowerCase(),o=x?ha(o):o,this.pattern=o,this.chunks=[],!this.pattern.length)return;const E=(w,k)=>{this.chunks.push({pattern:w,alphabet:i1(w),startIndex:k})},S=this.pattern.length;if(S>Xn){let w=0;const k=S%Xn,M=S-k;for(;w<M;)E(this.pattern.substr(w,Xn),w),w+=Xn;if(k){const P=S-Xn;E(this.pattern.substr(P),P)}}else E(this.pattern,0)}searchIn(o){const{isCaseSensitive:i,ignoreDiacritics:u,includeMatches:c}=this.options;if(o=i?o:o.toLowerCase(),o=u?ha(o):o,this.pattern===o){let M={isMatch:!0,score:0};return c&&(M.indices=[[0,o.length-1]]),M}const{location:f,distance:m,threshold:p,findAllMatches:h,minMatchCharLength:x,ignoreLocation:v}=this.options;let E=[],S=0,w=!1;this.chunks.forEach(({pattern:M,alphabet:P,startIndex:D})=>{const{isMatch:B,score:W,indices:R}=r1(o,M,P,{location:f+D,distance:m,threshold:p,findAllMatches:h,minMatchCharLength:x,includeMatches:c,ignoreLocation:v});B&&(w=!0),S+=W,B&&R&&(E=[...E,...R])});let k={isMatch:w,score:w?S/this.chunks.length:1};return w&&c&&(k.indices=E),k}}class Rn{constructor(o){this.pattern=o}static isMultiMatch(o){return zf(o,this.multiRegex)}static isSingleMatch(o){return zf(o,this.singleRegex)}search(){}}function zf(n,o){const i=n.match(o);return i?i[1]:null}class s1 extends Rn{constructor(o){super(o)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(o){const i=o===this.pattern;return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class a1 extends Rn{constructor(o){super(o)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(o){const u=o.indexOf(this.pattern)===-1;return{isMatch:u,score:u?0:1,indices:[0,o.length-1]}}}class o1 extends Rn{constructor(o){super(o)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(o){const i=o.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class l1 extends Rn{constructor(o){super(o)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(o){const i=!o.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,o.length-1]}}}class u1 extends Rn{constructor(o){super(o)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(o){const i=o.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[o.length-this.pattern.length,o.length-1]}}}class c1 extends Rn{constructor(o){super(o)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(o){const i=!o.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,o.length-1]}}}class Hp extends Rn{constructor(o,{location:i=le.location,threshold:u=le.threshold,distance:c=le.distance,includeMatches:f=le.includeMatches,findAllMatches:m=le.findAllMatches,minMatchCharLength:p=le.minMatchCharLength,isCaseSensitive:h=le.isCaseSensitive,ignoreDiacritics:x=le.ignoreDiacritics,ignoreLocation:v=le.ignoreLocation}={}){super(o),this._bitapSearch=new Up(o,{location:i,threshold:u,distance:c,includeMatches:f,findAllMatches:m,minMatchCharLength:p,isCaseSensitive:h,ignoreDiacritics:x,ignoreLocation:v})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(o){return this._bitapSearch.searchIn(o)}}class Wp extends Rn{constructor(o){super(o)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(o){let i=0,u;const c=[],f=this.pattern.length;for(;(u=o.indexOf(this.pattern,i))>-1;)i=u+f,c.push([u,i-1]);const m=!!c.length;return{isMatch:m,score:m?0:1,indices:c}}}const Vl=[s1,Wp,o1,l1,c1,u1,a1,Hp],Ff=Vl.length,d1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,f1="|";function p1(n,o={}){return n.split(f1).map(i=>{let u=i.trim().split(d1).filter(f=>f&&!!f.trim()),c=[];for(let f=0,m=u.length;f<m;f+=1){const p=u[f];let h=!1,x=-1;for(;!h&&++x<Ff;){const v=Vl[x];let E=v.isMultiMatch(p);E&&(c.push(new v(E,o)),h=!0)}if(!h)for(x=-1;++x<Ff;){const v=Vl[x];let E=v.isSingleMatch(p);if(E){c.push(new v(E,o));break}}}return c})}const h1=new Set([Hp.type,Wp.type]);class m1{constructor(o,{isCaseSensitive:i=le.isCaseSensitive,ignoreDiacritics:u=le.ignoreDiacritics,includeMatches:c=le.includeMatches,minMatchCharLength:f=le.minMatchCharLength,ignoreLocation:m=le.ignoreLocation,findAllMatches:p=le.findAllMatches,location:h=le.location,threshold:x=le.threshold,distance:v=le.distance}={}){this.query=null,this.options={isCaseSensitive:i,ignoreDiacritics:u,includeMatches:c,minMatchCharLength:f,findAllMatches:p,ignoreLocation:m,location:h,threshold:x,distance:v},o=i?o:o.toLowerCase(),o=u?ha(o):o,this.pattern=o,this.query=p1(this.pattern,this.options)}static condition(o,i){return i.useExtendedSearch}searchIn(o){const i=this.query;if(!i)return{isMatch:!1,score:1};const{includeMatches:u,isCaseSensitive:c,ignoreDiacritics:f}=this.options;o=c?o:o.toLowerCase(),o=f?ha(o):o;let m=0,p=[],h=0;for(let x=0,v=i.length;x<v;x+=1){const E=i[x];p.length=0,m=0;for(let S=0,w=E.length;S<w;S+=1){const k=E[S],{isMatch:M,indices:P,score:D}=k.search(o);if(M){if(m+=1,h+=D,u){const B=k.constructor.type;h1.has(B)?p=[...p,...P]:p.push(P)}}else{h=0,m=0,p.length=0;break}}if(m){let S={isMatch:!0,score:h/m};return u&&(S.indices=p),S}}return{isMatch:!1,score:1}}}const Kl=[];function g1(...n){Kl.push(...n)}function Ql(n,o){for(let i=0,u=Kl.length;i<u;i+=1){let c=Kl[i];if(c.condition(n,o))return new c(n,o)}return new Up(n,o)}const ma={AND:"$and",OR:"$or"},Yl={PATH:"$path",PATTERN:"$val"},Jl=n=>!!(n[ma.AND]||n[ma.OR]),x1=n=>!!n[Yl.PATH],y1=n=>!on(n)&&Op(n)&&!Jl(n),$f=n=>({[ma.AND]:Object.keys(n).map(o=>({[o]:n[o]}))});function Gp(n,o,{auto:i=!0}={}){const u=c=>{let f=Object.keys(c);const m=x1(c);if(!m&&f.length>1&&!Jl(c))return u($f(c));if(y1(c)){const h=m?c[Yl.PATH]:f[0],x=m?c[Yl.PATTERN]:c[h];if(!Vt(x))throw new Error(Hy(h));const v={keyId:Gl(h),pattern:x};return i&&(v.searcher=Ql(x,o)),v}let p={children:[],operator:f[0]};return f.forEach(h=>{const x=c[h];on(x)&&x.forEach(v=>{p.children.push(u(v))})}),p};return Jl(n)||(n=$f(n)),u(n)}function v1(n,{ignoreFieldNorm:o=le.ignoreFieldNorm}){n.forEach(i=>{let u=1;i.matches.forEach(({key:c,norm:f,score:m})=>{const p=c?c.weight:null;u*=Math.pow(m===0&&p?Number.EPSILON:m,(p||1)*(o?1:f))}),i.score=u})}function b1(n,o){const i=n.matches;o.matches=[],bt(i)&&i.forEach(u=>{if(!bt(u.indices)||!u.indices.length)return;const{indices:c,value:f}=u;let m={indices:c,value:f};u.key&&(m.key=u.key.src),u.idx>-1&&(m.refIndex=u.idx),o.matches.push(m)})}function w1(n,o){o.score=n.score}function k1(n,o,{includeMatches:i=le.includeMatches,includeScore:u=le.includeScore}={}){const c=[];return i&&c.push(b1),u&&c.push(w1),n.map(f=>{const{idx:m}=f,p={item:o[m],refIndex:m};return c.length&&c.forEach(h=>{h(f,p)}),p})}class zr{constructor(o,i={},u){this.options={...le,...i},this.options.useExtendedSearch,this._keyStore=new Ky(this.options.keys),this.setCollection(o,u)}setCollection(o,i){if(this._docs=o,i&&!(i instanceof cu))throw new Error(Uy);this._myIndex=i||$p(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(o){bt(o)&&(this._docs.push(o),this._myIndex.add(o))}remove(o=()=>!1){const i=[];for(let u=0,c=this._docs.length;u<c;u+=1){const f=this._docs[u];o(f,u)&&(this.removeAt(u),u-=1,c-=1,i.push(f))}return i}removeAt(o){this._docs.splice(o,1),this._myIndex.removeAt(o)}getIndex(){return this._myIndex}search(o,{limit:i=-1}={}){const{includeMatches:u,includeScore:c,shouldSort:f,sortFn:m,ignoreFieldNorm:p}=this.options;let h=Vt(o)?Vt(this._docs[0])?this._searchStringList(o):this._searchObjectList(o):this._searchLogical(o);return v1(h,{ignoreFieldNorm:p}),f&&h.sort(m),_p(i)&&i>-1&&(h=h.slice(0,i)),k1(h,this._docs,{includeMatches:u,includeScore:c})}_searchStringList(o){const i=Ql(o,this.options),{records:u}=this._myIndex,c=[];return u.forEach(({v:f,i:m,n:p})=>{if(!bt(f))return;const{isMatch:h,score:x,indices:v}=i.searchIn(f);h&&c.push({item:f,idx:m,matches:[{score:x,value:f,norm:p,indices:v}]})}),c}_searchLogical(o){const i=Gp(o,this.options),u=(p,h,x)=>{if(!p.children){const{keyId:E,searcher:S}=p,w=this._findMatches({key:this._keyStore.get(E),value:this._myIndex.getValueForItemAtKeyId(h,E),searcher:S});return w&&w.length?[{idx:x,item:h,matches:w}]:[]}const v=[];for(let E=0,S=p.children.length;E<S;E+=1){const w=p.children[E],k=u(w,h,x);if(k.length)v.push(...k);else if(p.operator===ma.AND)return[]}return v},c=this._myIndex.records,f={},m=[];return c.forEach(({$:p,i:h})=>{if(bt(p)){let x=u(i,p,h);x.length&&(f[h]||(f[h]={idx:h,item:p,matches:[]},m.push(f[h])),x.forEach(({matches:v})=>{f[h].matches.push(...v)}))}}),m}_searchObjectList(o){const i=Ql(o,this.options),{keys:u,records:c}=this._myIndex,f=[];return c.forEach(({$:m,i:p})=>{if(!bt(m))return;let h=[];u.forEach((x,v)=>{h.push(...this._findMatches({key:x,value:m[v],searcher:i}))}),h.length&&f.push({idx:p,item:m,matches:h})}),f}_findMatches({key:o,value:i,searcher:u}){if(!bt(i))return[];let c=[];if(on(i))i.forEach(({v:f,i:m,n:p})=>{if(!bt(f))return;const{isMatch:h,score:x,indices:v}=u.searchIn(f);h&&c.push({score:x,key:o,value:f,idx:m,norm:p,indices:v})});else{const{v:f,n:m}=i,{isMatch:p,score:h,indices:x}=u.searchIn(f);p&&c.push({score:h,key:o,value:f,norm:m,indices:x})}return c}}zr.version="7.1.0";zr.createIndex=$p;zr.parseIndex=t1;zr.config=le;zr.parseQuery=Gp;g1(m1);const pt=({label:n,placeholder:o,value:i,onChange:u,suggestions:c,isPara:f=!1,isTextArea:m=!1,isMultiSuggestion:p=!0})=>{const[h,x]=N.useState(i||""),[v,E]=N.useState([]),[S,w]=N.useState(!1),[k,M]=N.useState(0),P=new zr(c,{threshold:.3});N.useEffect(()=>{x(i||"")},[i]);const D=O=>{const G=O.target.value;x(G),u(G);const H=p?G.split(/[,\s]+/).pop():G;if(H.trim()===""){E([]),w(!1);return}const ie=P.search(H).map(de=>de.item);E(ie),M(0),w(!0)},B=O=>{R(O)},W=O=>{S&&(O.key==="ArrowDown"?(O.preventDefault(),M(G=>G+1<v.length?G+1:0)):O.key==="ArrowUp"?(O.preventDefault(),M(G=>G-1>=0?G-1:v.length-1)):O.key==="Enter"&&(O.preventDefault(),v.length>0&&R(v[k])))},R=O=>{let G=O;if(p){const H=h.trim().split(/[,\s]+/);H[H.length-1]=O,G=f?H.join(" ")+" ":H.join(", ")+", "}x(G),u(G),w(!1)};return a.jsxs("div",{className:"relative space-y-2",children:[n&&a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:n}),m?a.jsx("textarea",{placeholder:o,className:"w-full h-56 sm:h-48 md:h-44 lg:h-[120px] px-3 py-2 border rounded resize-none peer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:h,onChange:D,onKeyDown:W,onBlur:()=>w(!1),onFocus:()=>h&&E(P.search(p?h.split(/[,\s]+/).pop():h).map(O=>O.item))}):a.jsx("input",{type:"text",placeholder:o,className:"w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:h,onChange:D,onKeyDown:W,onBlur:O=>{w(!1)},onFocus:()=>h&&E(P.search(p?h.split(/[,\s]+/).pop():h).map(O=>O.item))}),S&&v.length>0&&a.jsx("ul",{className:"absolute z-10 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg",children:v.map((O,G)=>a.jsx("li",{className:`px-3 py-2 cursor-pointer text-sm ${G===k?"bg-blue-500 text-white":"hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"}`,onMouseDown:()=>B(O),children:O},G))})]})},Uf=n=>n.trim(),S1=Ln.div`
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
}`,j1=n=>{try{return new URL(n),!0}catch{return!1}},Xl=({jsonData:n})=>{const o=n.education.map((R,O)=>a.jsxs("div",{children:[a.jsx("div",{className:"TextLight",children:a.jsxs("b",{children:[R.graduationYear,a.jsx("br",{}),R.institutionName]})}),R.degreeName," ",a.jsx("br",{}),"GPA: ",R.currentSGPA,a.jsx("br",{})," ",a.jsx("br",{})]},`Education-${O}`)),i=n.skills.hardSkills.split(",").map(R=>R.trim()).filter(R=>R!==""),u=Math.floor(i.length/4);let c=u,f=u,m=u,p=u;i.length%4===1?c+=1:i.length%4===2?(c+=1,f+=1):i.length%4===2&&(c+=1,f+=1,m+=1);const h=i.slice(0,c).map((R,O)=>a.jsx("li",{children:R},`skill1-${O}`)),x=i.slice(c,c+f).map((R,O)=>a.jsx("li",{children:R},`skill2-${O}`)),v=i.slice(c+f,c+f+m).map((R,O)=>a.jsx("li",{children:R},`skill3-${O}`)),E=i.slice(c+f+m,c+f+m+p).map((R,O)=>a.jsx("li",{children:R},`skill3-${O}`)),S=n.skills.softSkills.split(",").map(R=>R.trim()).filter(R=>R!=="").map((R,O)=>a.jsx("li",{children:Uf(R)},`soft-${O}`)),w=n.contactInfo.Languages.split(",").map(R=>R.trim()).filter(R=>R!=="").map((R,O)=>a.jsxs("li",{children:[Uf(R),": Fluent"]},`lang-${O}`)),k=n.projects.map((R,O)=>a.jsx("div",{className:"Ritem",children:a.jsxs("li",{children:[a.jsx("div",{className:"item-title TextLight",children:R.projectTitle}),a.jsx("div",{children:R.toolsTechUsed})]})},`proj-${O}`)),M=n.workExperience.map((R,O)=>a.jsxs("li",{children:[a.jsxs("div",{className:"item-title TextLight",children:[R.companyName,a.jsx("div",{children:R.WorkDuration})]}),"(",R.jobTitle,") ",a.jsx("br",{}),R.keyAchievements," ",a.jsx("br",{}),O<p-1&&a.jsx("br",{})]},`work-${O}`)),P=n.certificates.map(R=>R.certificateName),D=n.certificates.map(R=>R.providerName),B=n.certificates.map(R=>R.courseDuration),W=Array(n.certificates.length).fill("--");return a.jsx(S1,{children:a.jsxs("div",{className:"resume",id:"capture-content",children:[a.jsxs("div",{className:"header",children:[a.jsx("h1",{children:n.contactInfo.fullName}),a.jsx("h2",{children:n.contactInfo.jobTitle})]}),a.jsxs("div",{className:"upperContent",children:[a.jsxs("div",{className:"Contact",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("b",{children:"Contact"})," ",a.jsx("i",{className:"fas fa-address-card"})]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fa fa-phone TextLight"})," ",n.contactInfo.phoneNumber]}),a.jsxs("div",{className:"Litem NoneDecorationBlack",children:[a.jsx("i",{className:"fas fa-envelope TextLight"})," ",a.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:n.contactInfo.emailAddress.split("@")[0]})]}),a.jsxs("div",{className:"Litem NoneDecorationBlack",children:[a.jsx("i",{className:"fab fa-linkedin TextLight"})," ",a.jsx("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.linkedin})]}),a.jsxs("div",{className:"Litem NoneDecorationBlack",children:[a.jsx("i",{className:"fas fa-globe TextLight"})," ",a.jsxs("a",{href:j1(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")]})]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fa fa-map-marker TextLight"})," ",n.contactInfo.Location]}),a.jsx("br",{})]}),a.jsxs("div",{className:"Usection",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Profile Summary"})}),a.jsx("div",{className:"Litem",children:a.jsx("p",{className:"Ritem",children:n.Description.UserDescription})})]})]}),a.jsxs("div",{className:"content",children:[a.jsxs("div",{className:"left",children:[a.jsxs("div",{className:"SUsection",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("b",{children:"Education "}),a.jsx("i",{className:"fas fa-graduation-cap"})]}),o]}),a.jsxs("div",{className:"section",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("b",{children:"Soft Skills "}),a.jsx("i",{className:"fa fa-book"})]}),a.jsxs("ul",{children:[S,a.jsx("br",{})]})]}),a.jsxs("div",{className:"LDsection",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("b",{children:"Languages "}),a.jsx("i",{className:"fa fa-language"})]}),a.jsx("ul",{children:w})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"SUsection",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Projects"})}),a.jsx("ul",{children:k})]}),a.jsxs("div",{className:"section",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Work Experience"})}),a.jsx("div",{className:"Ritem",children:a.jsx("ul",{children:M})})]}),a.jsxs("div",{className:"section",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Certificates"})}),a.jsxs("div",{className:"Ritem subcont NoneDecoration",children:[a.jsxs("div",{children:[P.map((R,O)=>a.jsxs(oe.Fragment,{children:[R,a.jsx("br",{})]},`cert-${O}`)),a.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),a.jsx("div",{children:W.map((R,O)=>a.jsxs(oe.Fragment,{children:[R,a.jsx("br",{})]},`placeholder-${O}`))}),a.jsx("div",{children:D.map((R,O)=>a.jsxs(oe.Fragment,{children:[R,a.jsx("br",{})]},`provider-${O}`))}),a.jsx("div",{className:"fontLight",children:B.map((R,O)=>a.jsxs(oe.Fragment,{children:["(",R,")",a.jsx("br",{})]},`provider-${O}`))})]})]}),a.jsxs("div",{className:"skills",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Technical Skills"})}),a.jsxs("div",{className:"Ritem subcont",children:[a.jsx("ul",{children:h}),a.jsx("ul",{children:x}),a.jsx("ul",{children:v}),a.jsx("ul",{children:E})]})]})]})]})]})})},N1=`
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
    }`,C1=Ln.div`
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
}`,Vp=({jsonData:n})=>{const o=n.skills.hardSkills.split(",").map(p=>p.trim()).filter(p=>p!=="").map((p,h)=>a.jsx("li",{children:removespace(p)},`soft-${h}`)),i=Math.floor(o.length/4);let u=i,c=i,f=i,m=i;return o.length%4===1?u+=1:o.length%4===2?(u+=1,c+=1):o.length%4===3&&(u+=1,c+=1,f+=1),a.jsx(C1,{children:a.jsxs("div",{className:"resume-container",id:"capture-content",children:[a.jsxs("div",{className:"header",children:[a.jsx("h1",{className:"Name",children:n.contactInfo.fullName}),a.jsx("h2",{className:"fontBold",style:{fontWeight:700},children:n.contactInfo.jobTitle}),a.jsxs("p",{style:{color:"#333"},children:[a.jsx("a",{href:"#",className:"NoneDecoration",children:n.contactInfo.Location})," | ",a.jsx("a",{className:"NoneDecoration",href:`mailto:${n.contactInfo.emailAddress}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.phoneNumber})," | ",a.jsx("a",{className:"NoneDecoration",href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.linkedin})]})]}),a.jsx("h3",{className:"Heading",children:"Summary"}),a.jsxs("div",{className:"summary",children:[a.jsx("p",{children:n.Description.UserDescription}),a.jsx("br",{})]}),a.jsx("h3",{className:"Heading",children:"Education"}),a.jsxs("div",{className:"education",children:[n.education.map((p,h)=>a.jsx("div",{className:"education-item",children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsxs("h4",{className:"SpaceBetween",children:[p.degreeName," ",a.jsx("span",{children:p.graduationYear})]})}),a.jsxs("p",{children:[p.institutionName," || SGPA: ",p.currentSGPA]})]})},h)),a.jsx("br",{})]}),a.jsx("h3",{className:"Heading",children:"Work Experience"}),a.jsxs("div",{className:"experience",children:[n.workExperience.map((p,h)=>a.jsx("div",{className:"experience-item",children:a.jsxs("ul",{children:[a.jsxs("li",{className:"SpaceBetween",children:[p.companyName," | ",p.jobTitle," ",a.jsx("span",{children:p.WorkDuration})]}),p.keyAchievements]})},h)),a.jsx("br",{})]}),a.jsx("h3",{className:"Heading",children:"Projects"}),a.jsxs("div",{className:"education",children:[n.projects.map((p,h)=>a.jsx("div",{className:"Projects-items",children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("h4",{className:"fontlight",children:p.projectTitle})}),a.jsx("p",{children:p.toolsTechUsed})]})},h)),a.jsx("br",{})]}),a.jsx("h3",{className:"Heading",children:"Certifications"}),a.jsxs("div",{className:"justflex Certificats",children:[a.jsxs("div",{className:"mar-30",children:[n.certificates.map((p,h)=>a.jsxs(oe.Fragment,{children:[p.certificateName,h<n.certificates.length-1&&a.jsx("br",{})]},h)),a.jsx("br",{}),a.jsx("a",{href:"#",className:"NoneDecoration",target:"_blank",rel:"noreferrer",children:"More Certificates"}),a.jsx("br",{}),a.jsx("br",{})]}),a.jsxs("div",{className:"mar-30",children:[n.certificates.map((p,h)=>a.jsxs(oe.Fragment,{children:["--",h<n.certificates.length-1&&a.jsx("br",{})]},h)),a.jsx("br",{}),a.jsx("br",{})," ",a.jsx("br",{})]}),a.jsxs("div",{className:"mar-30",children:[n.certificates.map((p,h)=>a.jsxs(oe.Fragment,{children:[p.providerName,h<n.certificates.length-1&&a.jsx("br",{})]},h)),a.jsx("br",{}),a.jsx("br",{}),a.jsx("br",{})]}),a.jsxs("div",{className:"mar-30",children:[n.certificates.map((p,h)=>a.jsxs(oe.Fragment,{children:[a.jsx("span",{children:`(${p.courseDuration})`}),h<n.certificates.length-1&&a.jsx("br",{})]},h)),a.jsx("br",{}),a.jsx("br",{}),a.jsx("br",{})]})]}),a.jsx("h3",{className:"Heading",children:"Technical Skills"}),a.jsxs("div",{className:"skills SpaceBetween",children:[a.jsx("ul",{children:o.slice(0,u).map((p,h)=>a.jsx(oe.Fragment,{children:a.jsx("li",{children:p})},h))}),a.jsx("ul",{children:o.slice(u,u+c).map((p,h)=>a.jsx(oe.Fragment,{children:a.jsx("li",{children:p})},h+u))}),a.jsx("ul",{children:o.slice(u+c,u+c+f).map((p,h)=>a.jsx(oe.Fragment,{children:a.jsx("li",{children:p})},h+u+c))}),a.jsx("ul",{children:o.slice(u+c+f,u+c+f+m).map((p,h)=>a.jsx(oe.Fragment,{children:a.jsx("li",{children:p})},h+u+c+m))})]})]})})},E1=`
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
       }`,T1=Ln.div`
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
}`,Kp=({jsonData:n})=>{const o=h=>h.trim(),i=n.skills.hardSkills.split(",").map(h=>h.trim()).filter(h=>h!=="");console.log(i,"from T3.jsx");const u=Math.floor(i.length/4);let c=u,f=u,m=u,p=u;return i.length%4===1?c+=1:i.length%4===2?(c+=1,f+=1):i.length%4===3&&(c+=1,f+=1,m+=1),a.jsx(T1,{children:a.jsxs("div",{id:"capture-content",children:[a.jsxs("div",{className:"header",children:[a.jsx("h1",{children:n.contactInfo.fullName}),a.jsx("h2",{children:n.contactInfo.jobTitle})]}),a.jsx("div",{className:"resume",children:a.jsxs("div",{className:"content",children:[a.jsxs("div",{className:"left",children:[a.jsxs("div",{className:"Contact",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("b",{children:"Contact"})," ",a.jsx("i",{className:"fas fa-address-card"})]}),a.jsx("br",{}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fa fa-phone IconLight"})," ",n.contactInfo.phoneNumber," "]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fas fa-envelope IconLight"}),a.jsxs("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:[" ",n.contactInfo.emailAddress.split("@")[0]," "]})]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fab fa-linkedin IconLight"}),a.jsxs("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.linkedin]})]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fas fa-globe IconLight"}),a.jsxs("a",{href:P1(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")," "]})]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fa fa-map-marker IconLight"})," ",n.contactInfo.Location]})," ",a.jsx("br",{})]}),a.jsxs("div",{className:"section",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("b",{children:"Education "}),a.jsx("i",{className:"fas fa-graduation-cap"})]}),a.jsx("br",{}),a.jsx("div",{className:"Litem",children:n.education.map((h,x)=>a.jsx(oe.Fragment,{children:a.jsxs("div",{className:"mbb-3",children:[a.jsx("div",{className:"SubSec-title TextLight",children:a.jsxs("b",{children:[h.graduationYear,a.jsx("br",{}),h.institutionName]})}),h.degreeName," ",a.jsx("br",{}),"GPA: ",h.currentSGPA,x<n.education.length-1&&a.jsx("br",{})]})},x))})]}),a.jsxs("div",{className:"section",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("b",{children:"Soft Skills "}),a.jsx("i",{className:"fa fa-book"})]}),a.jsx("br",{}),a.jsx("ul",{children:n.skills.softSkills.split(",").map(h=>h.trim()).filter(h=>h!=="").map((h,x)=>a.jsx("li",{children:o(h)},x))})]}),a.jsxs("div",{className:"section",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("b",{children:"Languages "}),a.jsx("i",{className:"fa fa-language"})]}),a.jsx("br",{}),a.jsx("ul",{children:n.contactInfo.Languages.split(",").map(h=>h.trim()).filter(h=>h!=="").map((h,x)=>a.jsxs("li",{children:[o(h),": Fluent"]},x))})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"section",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Profile Summary"})}),a.jsx("p",{children:n.Description.UserDescription})]}),a.jsxs("div",{className:"SUsection",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Projects"})}),a.jsx("ul",{children:n.projects.map((h,x)=>a.jsx("div",{className:"Ritem",children:a.jsxs("li",{children:[a.jsxs("div",{className:"item-title TextLight",children:[h.projectTitle," "]}),a.jsxs("div",{children:[" ",h.toolsTechUsed," "]})]})},x))})]}),a.jsxs("div",{className:"section",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Work Experience"})}),a.jsx("div",{className:"Ritem",children:a.jsx("ul",{children:n.workExperience.map((h,x)=>a.jsxs("li",{className:"mbb-2",children:[a.jsxs("div",{className:"item-title TextLight",children:[h.companyName,a.jsx("div",{children:h.WorkDuration})," "]}),h.jobTitle,a.jsx("br",{}),h.keyAchievements,x<n.workExperience.length-1&&a.jsx("br",{})]},x))})})]}),a.jsxs("div",{className:"section",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Certificates"})}),a.jsxs("div",{className:"Ritem subcont NoDecorationBlue",children:[a.jsxs("div",{children:[n.certificates.map((h,x)=>a.jsxs(oe.Fragment,{children:[h.certificateName,x<n.certificates.length-1&&a.jsx("br",{})]},x)),a.jsx("br",{}),a.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),a.jsxs("div",{children:[n.certificates.map((h,x)=>a.jsxs(oe.Fragment,{children:["--",x<n.certificates.length-1&&a.jsx("br",{})]},x)),a.jsx("br",{})]}),a.jsxs("div",{children:[n.certificates.map((h,x)=>a.jsxs(oe.Fragment,{children:[h.providerName,x<n.certificates.length-1&&a.jsx("br",{})]},x)),a.jsx("br",{})]}),a.jsxs("div",{className:"TextLight",children:[n.certificates.map((h,x)=>a.jsxs(oe.Fragment,{children:["(",h.courseDuration,")",x<n.certificates.length-1&&a.jsx("br",{})]},x)),a.jsx("br",{})]})]})]}),a.jsxs("div",{className:"skills",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Technical Skills"})}),a.jsxs("div",{className:"Ritem subcont",children:[a.jsx("ul",{children:i.slice(0,c).map((h,x)=>a.jsx("li",{children:h},x))}),a.jsx("ul",{children:i.slice(c,c+f).map((h,x)=>a.jsx("li",{children:h},x+c))}),a.jsx("ul",{children:i.slice(c+f,c+f+m).map((h,x)=>a.jsx("li",{children:h},x+c+f))}),a.jsx("ul",{children:i.slice(c+f+m,c+f+m+p).map((h,x)=>a.jsx("li",{children:h},x+c+f+p))})]})]})]})]})})]})})},P1=n=>{try{return new URL(n),!0}catch{return!1}},I1=`
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
}`,A1=Ln.div`body {
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
}`,Qp=({jsonData:n,desc:o})=>{const i=w=>{try{return new URL(w),!0}catch{return!1}},u=w=>w.trim(),c=n.skills.hardSkills.split(",").map(w=>w.trim()).filter(w=>w!==""),f=Math.floor(c.length/4);let m=f,p=f,h=f,x=f;c.length%4===1?m+=1:c.length%4===2?(m+=1,p+=1):c.length%4===3&&(m+=1,p+=1,h+=1);const v=c.slice(0,m),E=c.slice(m,m+p),S=c.slice(m+p,m+p+h);return c.slice(m+p+h,m+p+h+x),a.jsx(A1,{children:a.jsxs("div",{className:"resume",id:"capture-content",children:[a.jsxs("div",{className:"header",children:[a.jsx("div",{className:"left",children:a.jsx("img",{src:"https://www.skibalawchicago.com/wp-content/uploads/2024/06/profile-placeholder.jpg",alt:"Profile"})}),a.jsx("div",{className:"right",children:a.jsxs("div",{className:"head",children:[a.jsx("h1",{children:n.contactInfo.fullName}),a.jsx("h2",{children:n.contactInfo.jobTitle}),a.jsx("div",{className:"Underline"})]})})]}),a.jsxs("div",{className:"content",children:[a.jsxs("div",{className:"left",children:[a.jsxs("div",{className:"Contact",children:[a.jsxs("div",{className:"Lsection-title",children:[a.jsx("b",{children:"Contact"})," ",a.jsx("i",{className:"fas fa-address-card"})]})," ",a.jsx("br",{}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fa fa-phone"})," ",n.contactInfo.phoneNumber," "]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fas fa-envelope"}),a.jsxs("a",{href:`mailto:${n.contactInfo.emailAddress}`,children:[" ",n.contactInfo.emailAddress.split("@")[0]," "]})]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fab fa-linkedin"}),a.jsxs("a",{href:`https://www.linkedin.com/in/${n.contactInfo.linkedin}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.linkedin]})]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fas fa-globe"}),a.jsxs("a",{href:i(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")," "]})]}),a.jsxs("div",{className:"Litem",children:[a.jsx("i",{className:"fa fa-map-marker"})," ",n.contactInfo.Location]})]}),a.jsxs("div",{className:"Lsection",children:[a.jsxs("div",{className:"Lsection-title",children:[a.jsx("b",{children:"Education "}),a.jsx("i",{className:"fas fa-graduation-cap"})]}),a.jsx("br",{}),a.jsxs("div",{className:"Litem",children:[n.education.map((w,k)=>a.jsxs(oe.Fragment,{children:[k>0&&a.jsxs(oe.Fragment,{children:[a.jsx("br",{}),a.jsx("br",{})]}),a.jsx("div",{className:"SubSec-title",children:a.jsxs("b",{children:[w.graduationYear,a.jsx("br",{}),w.institutionName]})}),w.degreeName," ",a.jsx("br",{}),"SGPA: ",w.currentSGPA]},k)),a.jsx("br",{})]})]}),a.jsxs("div",{className:"Lsection",children:[a.jsxs("div",{className:"Lsection-title",children:[a.jsx("b",{children:"Soft Skills "}),a.jsx("i",{className:"fa fa-book"})]}),a.jsx("br",{}),a.jsx("ul",{children:n.skills.softSkills.split(",").map(w=>w.trim()).filter(w=>w!=="").map((w,k)=>a.jsx("li",{children:u(w)},k))})]}),a.jsxs("div",{className:"Lsection",children:[a.jsxs("div",{className:"Lsection-title",children:[a.jsx("b",{children:"Languages "}),a.jsx("i",{className:"fa fa-language"})]}),a.jsx("br",{}),a.jsx("ul",{children:n.contactInfo.Languages.split(",").map(w=>w.trim()).filter(w=>w!=="").map((w,k)=>a.jsxs("li",{children:[u(w),": Fluent"]},k))})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"section",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Profile Summary"})}),a.jsx("p",{children:n.Description.UserDescription})]}),a.jsxs("div",{className:"SUsection",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Projects"})}),a.jsx("ul",{children:n.projects.map((w,k)=>a.jsx("div",{className:"Ritem",children:a.jsxs("li",{children:[a.jsxs("div",{className:"item-title textGray",children:[w.projectTitle," "]}),a.jsxs("div",{children:[" ",w.toolsTechUsed," "]})]})},k))})]}),a.jsx("br",{}),a.jsxs("div",{className:"section",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Work Experience"})}),a.jsx("div",{className:"Ritem",children:a.jsx("ul",{children:n.workExperience.map((w,k)=>a.jsx(oe.Fragment,{children:a.jsxs("li",{children:[a.jsxs("div",{className:"item-title textGray mtt-3",children:[w.companyName,a.jsx("div",{children:w.WorkDuration})]}),w.jobTitle,a.jsx("br",{}),a.jsx("div",{dangerouslySetInnerHTML:{__html:w.keyAchievements}})]})},k))})})]}),a.jsxs("div",{className:"section",children:[a.jsx("div",{className:"section-title",children:a.jsx("b",{children:"Certificates"})}),a.jsxs("div",{className:"Ritem subcont NoneDecoration",children:[a.jsxs("div",{children:[n.certificates.map((w,k)=>a.jsxs(oe.Fragment,{children:[k>0&&a.jsx("br",{}),w.certificateName]},k)),a.jsx("br",{}),a.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),a.jsxs("div",{children:[n.certificates.map((w,k)=>a.jsxs(oe.Fragment,{children:[k>0&&a.jsx("br",{}),"--"]},k)),a.jsx("br",{})]}),a.jsxs("div",{children:[n.certificates.map((w,k)=>a.jsxs(oe.Fragment,{children:[k>0&&a.jsx("br",{}),w.providerName]},k)),a.jsx("br",{})]}),a.jsxs("div",{className:"textLight",children:[n.certificates.map((w,k)=>a.jsxs(oe.Fragment,{children:[k>0&&a.jsx("br",{}),"(",w.courseDuration,")"]},k)),a.jsx("br",{})]})]})]}),a.jsxs("div",{className:"skills",children:[a.jsx("div",{className:"SkillsSection-title",children:a.jsx("b",{children:"Technical Skills"})}),a.jsx("br",{}),a.jsxs("div",{className:"Ritem subcont",children:[a.jsx("ul",{children:v.map((w,k)=>a.jsx(oe.Fragment,{children:a.jsx("li",{children:w})},k))}),a.jsx("ul",{children:E.map((w,k)=>a.jsx(oe.Fragment,{children:a.jsx("li",{children:w})},k))}),a.jsx("ul",{children:S.map((w,k)=>a.jsx(oe.Fragment,{children:a.jsx("li",{children:w})},k))}),a.jsx("ul",{children:S.map((w,k)=>a.jsx(oe.Fragment,{children:a.jsx("li",{children:w})},k))})]})]})]})]})]})})},L1=`
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
}`,M1=Ln.div`* {
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
}`,Yp=({jsonData:n,desc:o})=>{const i=u=>u.indexOf(".")>-1?`https://${u}`:`https://github.com/${u}`;return a.jsx(M1,{children:a.jsxs("div",{className:"resume-container",id:"capture-content",children:[a.jsxs("div",{className:"header",children:[a.jsx("h1",{children:a.jsx("b",{children:n.contactInfo.fullName})}),a.jsx("br",{}),a.jsxs("p",{children:[a.jsx("a",{className:"DecorationNone",href:i(n.contactInfo.portfolio),target:"_blank",rel:"noreferrer",children:n.contactInfo.portfolio.replace(/^https?:\/\//,"")})," | ",a.jsxs("a",{className:"DecorationNone",href:"#",children:[" ",n.contactInfo.phoneNumber]})," | ",a.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,className:"DecorationNone",target:"_blank",rel:"noreferrer",children:n.contactInfo.emailAddress})," ",a.jsx("br",{}),a.jsx("div",{style:{marginTop:"6px"},children:n.contactInfo.Location})]})]}),a.jsxs("div",{className:"summary",children:[a.jsx("h3",{children:a.jsx("b",{children:"Summary"})}),a.jsx("p",{children:n.Description.UserDescription})]}),a.jsxs("div",{className:"experience",children:[a.jsx("h3",{children:a.jsx("b",{children:"Work Experience"})}),n.workExperience.map((u,c)=>a.jsx("div",{className:"experience-item",children:a.jsxs("ul",{className:"circle-list",children:[a.jsx("li",{children:a.jsxs("h4",{className:"spacebetween",children:[u.companyName," | ",u.jobTitle," ",a.jsx("span",{children:u.WorkDuration})]})}),a.jsx("div",{dangerouslySetInnerHTML:{__html:u.keyAchievements}})]})},c))]}),a.jsxs("div",{className:"education-section",children:[a.jsx("h3",{children:a.jsx("b",{children:"Education"})}),n.education.map((u,c)=>a.jsx("div",{className:"education-item",children:a.jsxs("ul",{className:"square-list",children:[a.jsx("li",{children:a.jsxs("h4",{className:"spacebetween",children:[u.degreeName,a.jsx("span",{children:u.graduationYear})]})}),a.jsxs("p",{children:[u.institutionName," | SGPA: ",u.currentSGPA]})]})},c))]}),a.jsxs("div",{className:"projects",children:[a.jsx("h3",{children:a.jsx("b",{children:"Projects"})}),n.projects.map((u,c)=>a.jsx("div",{className:"project-item",children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("h4",{className:"spacebetween",children:u.projectTitle})}),a.jsx("p",{children:u.toolsTechUsed})]})},c))]}),a.jsxs("div",{className:"Certifications",children:[a.jsx("h3",{children:a.jsx("b",{children:"Certifications"})}),a.jsxs("div",{className:"flexConts Certificate-item",children:[a.jsxs("div",{className:"mar-30",children:[n.certificates.map((u,c)=>a.jsxs(oe.Fragment,{children:[c>0&&a.jsx("br",{}),u.certificateName]},c)),a.jsx("br",{}),a.jsx("a",{className:"DecorationNone",href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),a.jsxs("div",{className:"mar-30",children:[n.certificates.map((u,c)=>a.jsxs(oe.Fragment,{children:[c>0&&a.jsx("br",{}),"--"]},c)),a.jsx("br",{})]}),a.jsxs("div",{className:"mar-30",children:[n.certificates.map((u,c)=>a.jsxs(oe.Fragment,{children:[c>0&&a.jsx("br",{}),u.providerName]},c)),a.jsx("br",{})]}),a.jsxs("div",{className:"mar-30 fontLight",children:[n.certificates.map((u,c)=>a.jsxs(oe.Fragment,{children:[c>0&&a.jsx("br",{}),"(",u.courseDuration,")"]},c)),a.jsx("br",{})]})]})]}),a.jsxs("div",{className:"skills",children:[a.jsx("h3",{children:a.jsx("b",{children:"Skills"})}),a.jsxs("p",{className:"skills-item",children:[a.jsx("strong",{style:{color:"rgb(75, 77, 77)"},children:"Soft Skills: "}),n.skills.softSkills]}),a.jsxs("p",{className:"skills-item",children:[a.jsx("strong",{children:"Tech Skills: "}),a.jsx("span",{style:{color:"rgb(75, 77, 77)"},children:n.skills.hardSkills})]})]})]})})},R1=`
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
 }`,D1=Ln.div`body {
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
}`,Jp=({jsonData:n})=>{const o=i=>{try{return new URL(i),!0}catch{return!1}};return a.jsx(D1,{children:a.jsxs("div",{className:"resume",id:"capture-content",children:[a.jsxs("div",{className:"contacts",children:[a.jsx("h1",{children:n.contactInfo.fullName}),a.jsxs("p",{children:[n.contactInfo.Location," ",a.jsx("br",{}),n.contactInfo.phoneNumber," | ",a.jsx("a",{href:`mailto:${n.contactInfo.emailAddress}`,target:"_blank",rel:"noreferrer",children:n.contactInfo.emailAddress})," | ",a.jsxs("a",{href:o(n.contactInfo.portfolio)?n.contactInfo.portfolio:`https://github.com/${n.contactInfo.portfolio}`,target:"_blank",rel:"noreferrer",children:[" ",n.contactInfo.portfolio.replace(/^https?:\/\//,"")]})]})]}),a.jsxs("div",{className:"Conts",children:[a.jsx("div",{className:"title",children:"Objectives:"}),n.Description.UserDescription]}),a.jsxs("div",{className:"Conts",children:[a.jsx("div",{className:"title",children:"Education:"}),n.education.map((i,u)=>a.jsxs("div",{children:[a.jsx("div",{className:"subtitle",children:i.degreeName}),i.institutionName," | ",i.graduationYear," | SGPA: ",i.currentSGPA]},u))]}),a.jsxs("div",{className:"Conts",children:[a.jsx("div",{className:"title",children:"Technical skills:"}),a.jsxs("div",{className:"subcont SpaceBetween",children:[a.jsxs("div",{className:"left",children:["Hard Skills ",a.jsx("br",{}),"Soft Skills "]}),a.jsxs("div",{className:"mid",children:["--",a.jsx("br",{}),"--",a.jsx("br",{})]}),a.jsxs("div",{className:"right",children:[n.skills.hardSkills,a.jsx("br",{}),n.skills.softSkills," ",a.jsx("br",{})]})]})]}),a.jsxs("div",{className:"Conts",children:[a.jsx("div",{className:"title",children:"Academic Projects:"}),a.jsx("ul",{children:n.projects.map((i,u)=>a.jsx("div",{className:"Ritem",children:a.jsxs("li",{children:[a.jsx("div",{className:"item-title",children:i.projectTitle}),a.jsx("div",{children:i.toolsTechUsed})]})},u))})]}),a.jsxs("div",{className:"Conts",children:[a.jsx("div",{className:"title",children:"Work Experience:"}),n.workExperience.map((i,u)=>a.jsxs("div",{children:[a.jsxs("div",{className:"internship TextGray SpaceBetween",children:[a.jsx("div",{className:"left ",children:i.companyName}),a.jsx("div",{className:"Right",children:i.WorkDuration})]}),a.jsx("ul",{children:a.jsx("li",{children:i.keyAchievements})})]},u))]}),a.jsxs("div",{className:"Conts",children:[a.jsx("div",{className:"title",children:"Certifications:"}),a.jsxs("div",{className:"flexConts subcont",children:[a.jsx("div",{className:"mar-30",children:n.certificates.map((i,u)=>a.jsxs(oe.Fragment,{children:[u>0&&a.jsx("br",{}),i.certificateName]},u))}),a.jsxs("div",{className:"mar-30",children:[n.certificates.map((i,u)=>a.jsxs(oe.Fragment,{children:[u>0&&a.jsx("br",{}),"--"]},u)),a.jsx("br",{})]}),a.jsxs("div",{className:"mar-30",children:[n.certificates.map((i,u)=>a.jsxs(oe.Fragment,{children:[u>0&&a.jsx("br",{}),i.providerName]},u)),a.jsx("br",{})]}),a.jsxs("div",{className:"mar-30 TextLight",children:[n.certificates.map((i,u)=>a.jsxs(oe.Fragment,{children:[u>0&&a.jsx("br",{}),"(",i.courseDuration,")"]},u)),a.jsx("br",{})]})]}),a.jsx("a",{className:"NoneDecoration mll-3",href:"#",target:"_blank",rel:"noreferrer",children:"More Certificates"})]}),a.jsxs("div",{className:"Conts",children:[a.jsx("div",{className:"title",children:"Declaration:"}),"I hereby declare that the above information is true to the best of my knowledge."]}),a.jsx("p",{className:"signature",children:n.contactInfo.fullName})]})})},B1=`
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
}`,_1=()=>{var wt,at,Dn,ir,Fr;const[n,o]=N.useState(0),[i,u]=N.useState(!1),c=eu(),[f,m]=N.useState({selectedTemplate:"2",contactInfo:{fullName:"Nishant kumar",phoneNumber:"9217290469",emailAddress:"nishantsingh.talk@gmail.com",linkedin:"nishantksingh1",portfolio:"nishantksingh0.github.io",jobTitle:"Data Scientist",Languages:"English, Hindi, French",Location:"Haridwar (Uttrakhand)"},skills:{hardSkills:"TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, C/C++, Java, JavaScript, React",softSkills:"TeamWork, Problem-Solving, Leadership, Critical thinking, Communication, Creativity"},workExperience:[{jobTitle:"Data scientist",companyName:"Onlei tech",WorkDuration:"Dec-2024 to Mar-2025",keyAchievements:"Learn to visualize patterns from data using matplotlib and Built several DL models"},{jobTitle:"Python engineer",companyName:"Microsoft",WorkDuration:"May-2024 to Jul-2024",keyAchievements:"Learn to use python in NLP tasks to take advantages of LLM"}],projects:[{projectTitle:"Transformer based translation model",toolsTechUsed:"Tensorflow, Trasformer architecture, NumPy, WMT Translation dataset"},{projectTitle:"Exam Proctoring system",toolsTechUsed:"React, Flask, OpenCV, NumPy, Mediapipe, Pillow, WebSocket, ThreadPool"},{projectTitle:"Persion bounding box detection",toolsTechUsed:"OpenCV, Json, Tensorflow, Pandas, Matplotlib, NumPy"}],education:[{institutionName:"Haridwar University",degreeName:"Batchelor in Computer application",graduationYear:"2023 - 2026",currentSGPA:"8"},{institutionName:"Vidya Mandir Sec-5 (Haridwar)",degreeName:"Primary/Secondary",graduationYear:"2021 - 2023",currentSGPA:"8"}],certificates:[{certificateName:"Azure AI Engineer association",courseDuration:"2 month ",providerName:"Microsoft"},{certificateName:"C/C++",courseDuration:"2 Month",providerName:"Cad Planet"},{certificateName:"DataScientist Internship",courseDuration:"2 Month",providerName:"Onlei Tech"},{certificateName:"Intro To responsive AI",courseDuration:"1 Month",providerName:"SimpliLearn"},{certificateName:"Bits & byts of computer",courseDuration:"1 Month",providerName:"Coursera"}],Description:{UserDescription:"Passionate AI developer & backend specialist with expertise in deep learning, computer vision, NLP, and transformers, focusing on building models from scratch. Proficient in React, frontend design, Flask, and Django, enabling seamless AI integration into real world applications. Developed and deployed 22+ projects, showcased on GitHub & Kaggle. Always eager to solve complex challenges and innovate in AI & software development"}}),[p,h]=N.useState({selectedTemplate:"",contactInfo:{fullName:"",phoneNumber:"",emailAddress:"",linkedin:"",portfolio:"",jobTitle:"",Languages:"",Location:""},skills:{hardSkills:"",softSkills:""},workExperience:[{jobTitle:"",companyName:"",WorkDuration:"",keyAchievements:""}],projects:[{projectTitle:"",toolsTechUsed:""}],education:[{institutionName:"",degreeName:"",graduationYear:"",currentSGPA:""}],certificates:[{certificateName:"",courseDuration:"",providerName:""}],Description:{UserDescription:""}}),x=[`A passionate ${p.contactInfo.jobTitle} graduated from ${(wt=p.education[0])==null?void 0:wt.institutionName}, with expertise in ${p.skills.hardSkills} honed through 8+ projects. Skilled at leveraging cutting-edge tools to deliver innovative solutions. Proficient in ${p.contactInfo.Languages}and recognized for exceptional ${p.skills.softSkills}.`,`A results-driven ${p.contactInfo.jobTitle} Graduated from ${(at=p.education[0])==null?void 0:at.institutionName}, mastered in ${p.skills.hardSkills} Built over 10+ real-world projects. Adept in ${p.contactInfo.Languages}and highly valued for strong ${p.skills.softSkills}& creativity that drive Collaborative team work.`,`A dedicated ${p.contactInfo.jobTitle} graduated from ${(Dn=p.education[0])==null?void 0:Dn.institutionName}, specializing in ${p.skills.hardSkills} with hands-on experience in building 12+ impactful projects. Fluent in ${p.contactInfo.Languages}with proven strengths in ${p.skills.softSkills}bringing creativity and precision to every challenge.`,`A skilled ${p.contactInfo.jobTitle} Graduated from ${(ir=p.education[0])==null?void 0:ir.institutionName}, with expertise in ${p.skills.hardSkills} built over 22+ practical projects. Familiar with ${p.contactInfo.Languages}and known for outstanding ${p.skills.softSkills}that foster innovation and collaboration.`,`An innovative ${p.contactInfo.jobTitle} graduated from ${(Fr=p.education[0])==null?void 0:Fr.institutionName}, with proficiency in ${p.skills.hardSkills} demonstrated through 13+ diverse projects. Well-versed in ${p.contactInfo.Languages}and appreciated for exceptional ${p.skills.softSkills}in dynamic work environments.`],[v,E]=N.useState(new Set),[S,w]=N.useState(!1),[k,M]=N.useState(!1),[P,D]=N.useState(!1),[B,W]=N.useState(!1),[R,O]=N.useState(!1),[G,H]=N.useState(!1),[ie,de]=N.useState(!1),[ye,Ae]=N.useState(!1),[Ne,Fe]=N.useState(!1),[je,He]=N.useState(""),[Be,ke]=N.useState(!1),[K,te]=N.useState(!1),Q=["Simpler and Structured","Linear and Classic","Colourfull and Attractive","Colourful and Highly Designed","Simpler and Linear","Highly Simpler and Classic"],C=["Hi, I'm here to assist you in building a strong, high-quality, and ATS-friendly resume. Let's make it impressive together! 🤝","First, start by choosing a template that best fits your style and profession.",`You choosed template ${Number(p.selectedTemplate)} which is ${Q[Number(p.selectedTemplate)-1]} 🤟. lets process further and fill details (Click next)`,`Now, start by filling in your basic details as the form asks. 
Don't worry -- you got suggestions onward which saves much of your time ☺️`,`Good job! Now it's time to showcase your skills... 
As you can see, your data is being live-rendered by our app and displayed above in real-time`,"Consider adding 8+ 'relevant' technical skills. It not only demonstrates your technical breadth but also highlights your creativity, adaptability, and eagerness to learn 🚀","The soft skills will show in summary of resume. or either display on template. consider to show your uniqueness","Add 2-3 languages you are familiar with — it helps organizations understand your comfort level and communication ability.","If you are applying for remote jobs add just 'State' else 'city (State)' and process Next... it's 35% done","Now it's time to mention your Experiences, as a intern or full time employee","Consider adding at least two experiences -- it increases your resume score and showcases practical exposure.","Now process Next...","It's time to showcase your projects! We recommend adding at least 3 because it's a good number to reflect your real-world experience.","Now click Next... it's 65% done",`Now Mention your Pre/Post graduations 🎓 here. 
consider to list most recent Qualification first`,"if You only have one degree you can also mention your Primary/Secondary education below...","Proceed further...",`You're 90% Done 😊... 
Just showcase your achieved certificates and proceed further.`,"We recommend to add atleast 5 certifications (Every Colleges and universities offer plenty of certificates during Academics). just mention top 5","Click Next...",`Write 'A' to get some descriptions created by me...
 You can adjust them as per your preference and submit your data — we'll generate a Resume for you in HTML/CSS and PDF format.`,"We didn't store your data due to sensitive informations like your mobile number or personal preferences (job title,certificates,experiences) — to ensure your privacy 🔏 and avoid misuse by third-party ads.",`want to suggest some improvements?? feel free to Mail us on nishantsingh.talk@gmail.com 
i hope we meet again 👋`,"Now process Next..."],[L,X]=N.useState(0);N.useEffect(()=>{const _=new Dl("#Suggestion-typing-text",{strings:[C[L]],loop:!1,typeSpeed:40,showCursor:!0});if(L===0){const V=setTimeout(()=>{X(1),te(!0)},11e3);return()=>clearTimeout(V)}return()=>{_.destroy()}},[L]);const ce=[{title:"Choose a template that suits you best",key:"Template"},{title:"Begin with your contact details",key:"Contact Info"},{title:"Showcase your skills",key:"Skills"},{title:"Share your work experience",key:"Work Experience"},{title:"Highlight your top projects",key:"Projects"},{title:"Demonstrate your knowledge",key:"Education"},{title:"Add your achieved certifications",key:"Certificates"},{title:"Decribe about you",key:"Description"}],me=()=>{D(!0);const _=new Set;for(let V=0;V<8;V++)_.add(V);E(_)},fe=_=>{(_.key==="Enter"||_.key=="Tab")&&(je==="147895"?(Wt.success("Authorized",{duration:3e3,position:"top-right"}),ke(!1),Fe(!1),me()):(Wt.error("Pin is incorrect. Authorization declined!",{duration:3e3,position:"top-right"}),ke(!0)))},re=(_,V,Y,_e=null)=>{h(Bn=>{const kt={...Bn};return _e!==null&&V!=null?kt[_][_e][V]=Y:typeof kt[_]=="object"&&!Array.isArray(kt[_])&&V!=null&&(kt[_][V]=Y),kt})},pe=_=>{h(V=>({...V,[_]:[...V[_],_==="workExperience"?{jobTitle:"",companyName:"",WorkDuration:"",keyAchievements:""}:_==="projects"?{projectTitle:"",toolsTechUsed:""}:_==="education"?{institutionName:"",degreeName:"",graduationYear:"",currentSGPA:""}:{certificateName:"",courseDuration:"",providerName:""}]}))},xe=()=>{const _={0:[p.selectedTemplate],1:[p.contactInfo.fullName,p.contactInfo.phoneNumber,p.contactInfo.emailAddress,p.contactInfo.linkedin,p.contactInfo.portfolio,p.contactInfo.jobTitle],2:[p.skills.hardSkills,p.skills.softSkills,p.contactInfo.Languages,p.contactInfo.Location],3:p.workExperience.length>0?p.workExperience.map(Y=>[Y.jobTitle,Y.companyName,Y.WorkDuration,Y.keyAchievements]):[[]],4:p.projects.length>0?p.projects.map(Y=>[Y.projectTitle,Y.toolsTechUsed]):[[]],5:p.education.length>0?p.education.map(Y=>[Y.institutionName,Y.degreeName,Y.graduationYear,Y.currentSGPA]):[[]],6:p.certificates.length>0?p.certificates.map(Y=>[Y.certificateName,Y.courseDuration,Y.providerName]):[[]],7:[p.Description.UserDescription]};if(!(n in _)){Wt.error("Invalid step provided.",{duration:3e3,position:"top-right"});return}const V=Y=>Y.every(_e=>typeof _e=="string"&&_e.trim()!=="");u(!1);for(let Y=0;Y<=n;Y++){const _e=_[Y].flat();if(_e.length>0&&!V(_e)&&!P){u(!0),Wt.error("You need to complete the details on this page and the previous one before moving ahead.",{duration:3e3,position:"top-right"}),setTimeout(()=>{u(!1)},4e3);return}}if(E(Y=>new Set(Y.add(n))),n<ce.length-1)o(Y=>Y+1);else{for(let Y=0;Y<=7;Y++){const _e=_[Y].flat();if(_e.length>0&&!V(_e)&&!P){Wt.error("Please complete all required fields before submitting.",{duration:3e3,position:"top-right"});return}}c("/Result",{state:{jsonData:P?f:p}})}},We=()=>{switch(n){case 1:return L==2&&X(3),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl mb-4 pb-1 font-bold border-b-4 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Contact Information"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(pt,{label:"Full Name",placeholder:"Your name",value:P?f.contactInfo.fullName:p.contactInfo.fullName,onChange:_=>{P||re("contactInfo","fullName",_)},suggestions:["Aarav","Nishant","Amisha","Ankush","Vivaan","Aditya","Kumar","Vihaan","Arjun","Krishna","Aryan","Rohan","Kunal","Aniket","Rahul","Amit","Siddharth","Manish","Karthik","Chirag","Deepak","Gaurav","Harsh","Nikhil","Suresh","Rajesh","Vikram","Prakash","Dinesh","Ravi","Sagar","Abhishek","Yash","Sandeep","Naveen","Mahesh","Ajay","Dev","Ritesh","Sameer","Arvind","Bhavesh","Sumit","Varun","Shivam","Raghav","Parth","Mohan","Rajiv","Vikas","Tejas","Lakshya","Ashu","Jatin","Ashwin","Neha","Priya","Aisha","Ishita","Sanya","Pooja","Divya","Riya","Ananya","Shruti","Meera","Lata","Kavita","Rekha","Sneha","Tanvi","Bhavna","Swati","Preeti","Sonali","Aarohi","Simran","Radhika","Tanya","Nikita","Payal","Vidya","Trisha","Kriti","Aditi","Shalini","Lavanya","Manisha","Mitali","Rupali","Komal","Vaishnavi","Asmita","Prachi","Chaitali","Juhi","Mallika","Harshita","Bhumi","Surbhi","Alisha","Pallavi","Sourav","Bhawna","Arpita","Nidhi","Hari","Srinivas","Ramesh","Venkatesh","Madhavan","Surya","Kiran","Anirudh","Rajinikanth","Karthikeyan","Lakshmi","Radha","Sowmya","Keerthi","Anitha","Revathi","Sindhu","Divyashree","Shruthi","Meenakshi","Subham","Sourav","Shahid","Anupam","Dipankar","Tanmoy","Ritwik","Arindam","Prithwish","Moumita","Sanchari","Madhumita","Sutapa","Piyali","Laboni","Ipsita","Sumita","Gurpreet","Harpreet","Manpreet","Parminder","Baljit","Gagandeep","Satnam","Simranjeet","Kiranpreet","Jasleen","Navjot","Harleen","Ravneet","Ayaan","Zaid","Faizan","Rehan","Irfan","Armaan","Ayesha","Fatima","Zara","Sana","Nazma","Rabia","Jignesh","Dhaval","Hemant","Chintan","Bhavin","Aparna","Supriya","Rupali","Urmila","Mrunal","Sharma","Verma","Singh","Yadav","Gupta","Agarwal","Choudhary","Rana","Thakur","Mehta","Bansal","Goyal","Tripathi","Mishra","Tiwari","Pandey","Dubey","Dwivedi","Joshi","Jha","Pathak","Srivastava","Nigam","Saxena","Rawat","Bhatt","Rastogi","Kulshreshtha","Bhardwaj","Reddy","Naidu","Iyer","Iyengar","Menon","Pillai","Shetty","Rao","Nair","Gowda","Mudaliar","Krishnan","Murthy","Swamy","Chowdary","Kumar","Prasad","Raj","Subramanian","Das","Ghosh","Chakraborty","Mukherjee","Bhattacharya","Bandyopadhyay","Dutta","Sinha","Paul","Chatterjee","Sen","Roy","Bose","Deb","Pal","Sarkar","Mondal","Mitra","Patel","Desai","Modi","Rathod","Joshi","Shah","Rajput","Chauhan","Solanki","Prajapati","Parmar","Dave","Thakkar","Gohil","Barot","Suthar","Jadeja","Mahajan","Kaur","Singh","Dhillon","Sandhu","Sidhu","Grewal","Gill","Brar","Mann","Bajwa","Khan","Ansari","Ali","Sheikh","Qureshi","Syed","Farooqi","Mirza","Siddiqui","Hussain","Fernandes","D'Souza","Dias","Pereira","Rodrigues","George","Mathew","Joseph","Thomas","Abraham"],isPara:!0}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Phone Number"}),a.jsx("input",{type:"number",placeholder:"9658XX1459",className:`w-full sm:p-2 sm:px-6 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${S?"focus:ring-red-500":"focus:ring-blue-500"}  dark:bg-gray-800 dark:text-white dark:border-gray-600 
                  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,value:P?f.contactInfo.phoneNumber:p.contactInfo.phoneNumber,onChange:_=>{P||re("contactInfo","phoneNumber",_.target.value)},onBlur:_=>{const V=_.target.value;!/^\d{10}$/.test(V)&&!P?(Wt.error("Phone number must be of 10 digits",{duration:3e3,position:"top-right"}),w(!0),_.target.focus()):w(!1)}}),a.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${S?"bg-red-500":"bg-blue-500"}`})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Email Address"}),a.jsx("input",{type:"email",placeholder:"xyz231@gmail.com",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${k?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:P?f.contactInfo.emailAddress:p.contactInfo.emailAddress,onChange:_=>{P||re("contactInfo","emailAddress",_.target.value)},onBlur:_=>{const V=_.target.value;!/^\S+@\S+\.\S+\s*$/.test(V)&&!P?(Wt.error("Invalid email format!",{duration:3e3,position:"top-right"}),M(!0),_.target.focus()):M(!1)}}),a.jsx("div",{className:`ml-4 w-0 h-1 rounded-full transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${k?"bg-red-500":"bg-blue-500"}`})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"LinkedIn UserName"}),a.jsx("input",{type:"text",placeholder:"xyz231",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:P?f.contactInfo.linkedin:p.contactInfo.linkedin,onChange:_=>{P||re("contactInfo","linkedin",_.target.value)}}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Portfolio URL / Github UserName"}),a.jsx("input",{type:"text",placeholder:"Personal portfolio URL if have else add GitHub UserName",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:P?f.contactInfo.portfolio:p.contactInfo.portfolio,onChange:_=>{P||re("contactInfo","portfolio",_.target.value)}}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer w-full",children:a.jsx(pt,{label:"Job Title",placeholder:"Data Scientist",value:P?f.contactInfo.jobTitle:p.contactInfo.jobTitle,onChange:_=>{P||re("contactInfo","jobTitle",_),L==3&&X(23)},suggestions:["Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer","Game Developer","VR/AR Developer","Metaverse Architect","AI Product Manager","AI Trainer","Generative AI Specialist","MLOps Engineer","Cloud Security Engineer","Cybersecurity Consultant","Penetration Tester","Mobile App Developer","iOS Developer","Android Developer","Embedded Systems Engineer","IoT Engineer","Hardware Engineer","Quantum Computing Researcher","Bioinformatics Scientist","Healthcare Data Analyst","Data Visualization Specialist","Creative Technologist","Influencer Marketing Manager","Customer Success Manager","Community Manager","Localization Specialist","E-commerce Manager","UX Researcher","Animation Artist","Video Editor","AI Content Creator","AI Policy Analyst","SaaS Product Manager","Security Engineer","Energy Analyst","Renewable Energy Consultant","Ethical Hacker","Cloud Consultant","Digital Strategist"],isMultiSuggestion:!1})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 2:return L==23&&X(4),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 border-blue-900 mb-4 pb-1 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Skills"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Technical Skills",placeholder:"TensorFlow, NLP, Scikit-learn, Keras, Transformers, C/C++, Java, JavaScript, React",value:P?f.skills.hardSkills:p.skills.hardSkills,onChange:_=>{P||(L===4&&X(5),re("skills","hardSkills",_))},suggestions:["Python","C/C++","LLM's","Matplotlib","Java","JavaScript","TypeScript","Golang","Rust","Kotlin","Swift","PHP","Ruby","MATLAB","TensorFlow","PyTorch","Scikit-learn","Keras","Hugging Face","OpenCV","XGBoost","LightGBM","FastAI","Transformers","Stable Diffusion","LangChain","HTML","CSS","Tailwind CSS","React","Next.js","Vue.js","Angular","Node.js","Express.js","Django","Flask","MySQL","PostgreSQL","MongoDB","SQLite","Redis","Cassandra","Firebase","Supabase","Terraform","Linux","Bash Scripting","Docker","Kubernetes","AWS","Azure","Google Cloud Platform (GCP)","Apache Spark","Hadoop","Apache Kafka","Airflow","Pandas","NumPy","SQL","ETL Pipelines","Computer Vision","NLP","Data Analysis","Data Visualization","Tableau","Power BI","REST API","GraphQL","gRPC","Microservices","System Design","CI/CD","Unit Testing","Integration Testing","Design Patterns","OOP","SOLID Principles","Blockchain","Smart Contracts","Solidity","Web3.js","IPFS","Cybersecurity Fundamentals","OWASP","JWT Authentication","OAuth 2.0","Prometheus","Grafana","ELK Stack (Elasticsearch,Logstash,Kibana)","Serverless Architecture","AWS Lambda","Firebase Functions","Figma","Adobe XD","Framer Motion","Three.js","WebGL","Jenkins","GitHub Actions","GitLab CI","CircleCI","BigQuery","Snowflake","Redshift","LangSmith","AutoML","Vertex AI","MLOps","MLflow","Weights & Biases (WandB)","Prompt Engineering","Vector Databases","Pinecone","ChromaDB","Agile Methodology","Scrum","Kanban","Socket.IO","WebSockets","Real-time Applications","MQTT Protocol","IoT Systems","Embedded Systems"]})}),a.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Soft Skills",placeholder:"TeamWork, Problem-Solving, Leadership, Critical thinking, Communication",value:P?f.skills.softSkills:p.skills.softSkills,onChange:_=>{P||(L===5&&X(6),re("skills","softSkills",_))},suggestions:["Teamwork","Problem-Solving","Leadership","Critical Thinking","Communication","Adaptability","Creativity","Emotional Intelligence","Time Management","Conflict Resolution","Decision Making","Active Listening","Collaboration","Work Ethic","Empathy","Interpersonal Skills","Stress Management","Responsibility","Negotiation","Patience","Flexibility","Positive Attitude","Self-Motivation","Networking","Constructive Feedback","Attention to Detail","Cultural Awareness","Public Speaking","Persuasion","Growth Mindset","Self-Discipline","Accountability","Open-Mindedness","Conflict Management","Professionalism","Emotional Stability","Respectfulness","Customer Service","Strategic Thinking"]})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Languages you are familiar with",placeholder:"English, Hindi, French",value:P?f.contactInfo.Languages:p.contactInfo.Languages,onChange:_=>{P||(L===6&&X(7),re("contactInfo","Languages",_))},suggestions:["Hindi","English","Spanish","Bengali","Portuguese","Russian","Japanese","Punjabi","Marathi","Telugu","French","German","Tamil","Urdu"]})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"YourLocation",placeholder:"Haridwar (UTTRAKHAND)",value:P?f.contactInfo.Location:p.contactInfo.Location,onChange:_=>{P||(L===7&&X(8),re("contactInfo","Location",_))},suggestions:["Haridwar (Uttarakhand)","Dehradun (Uttarakhand)","Rishikesh (Uttarakhand)","Nainital (Uttarakhand)","Delhi","New Delhi","Amritsar (Punjab)","Ludhiana (Punjab)","Jalandhar (Punjab)","Patiala (Punjab)","Mohali (Punjab)","Chennai (Tamil Nadu)","Coimbatore (Tamil Nadu)","Madurai (Tamil Nadu)","Tiruchirappalli (Tamil Nadu)","Salem (Tamil Nadu)","Hyderabad (Telangana)","Secunderabad (Telangana)","Warangal (Telangana)","Bengaluru (Karnataka)","Mysuru (Karnataka)","Mangalore (Karnataka)","Hubli (Karnataka)","Pune (Maharashtra)","Mumbai (Maharashtra)","Nagpur (Maharashtra)","Ahmedabad (Gujarat)","Gandhinagar (Gujarat)","Surat (Gujarat)","Noida (Uttar Pradesh)","Lucknow (Uttar Pradesh)","Ghaziabad (Uttar Pradesh)","Gurugram (Haryana)","Faridabad (Haryana)","Panchkula (Haryana)","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],isMultiSuggestion:!1})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 3:return P?a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Work Experience"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job"}),f.workExperience.map((_,V)=>a.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[a.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Experience ",V+1]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Job Title"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.jobTitle}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Company Name"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.companyName}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Work Duration"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.WorkDuration}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Key Achievements"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.keyAchievements}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},V)),a.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Experiences because it is predefined data formate",children:"❌ Add Experience"})]}):(L===8&&X(9),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Work Experience"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 2 work Experiences from previous companies. as internship or full time job"}),p.workExperience.map((_,V)=>a.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[a.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Experience ",V+1]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Job title",placeholder:"Data Scientist",value:_.jobTitle,onChange:Y=>re("workExperience","jobTitle",Y,V),suggestions:["Python engineer","Data Scientist","Machine Learning Engineer","AI Researcher","Data Analyst","Software Engineer","Full Stack Developer","Backend Developer","Frontend Developer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Database Administrator","Blockchain Developer","Computer Vision Engineer","NLP Engineer","Data Engineer","Big Data Engineer","Research Scientist","Product Manager","Project Manager","Scrum Master","Program Manager","Technical Program Manager","Operations Manager","IT Manager","Marketing Manager","Digital Marketing Specialist","SEO Specialist","Content Manager","Brand Manager","Sales Executive","Business Development Manager","Social Media Manager","Growth Hacker","UI/UX Designer","Graphic Designer","Product Designer","Visual Designer","Creative Director","Motion Graphics Designer","Financial Analyst","Accountant","Investment Banker","Business Analyst","Management Consultant","HR Manager","Recruiter","Legal Advisor","AI Ethics Researcher","Prompt Engineer","Data Privacy Consultant","Automation Engineer","Robotics Engineer","Sustainability Consultant","Technical Writer","Software Intern","Data Science Intern","Marketing Intern","HR Intern","Operations Intern","Sales Intern","Content Writing Intern","UI/UX Design Intern","Graphic Design Intern","Customer Support Executive","Technical Support Executive","Office Assistant","Data Entry Operator","Junior Software Developer","Trainee Engineer","Research Intern","Quality Assurance Intern","Product Intern","Junior Data Analyst","Telecaller","Field Sales Executive","Backend Support Staff","Campus Ambassador","Freelance Content Writer","Part-time Graphic Designer","Online Tutor","Lab Assistant","Clerical Staff","Receptionist","Front Desk Executive"],isMultiSuggestion:!1})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Company Name",placeholder:"Onlei Teach",value:_.companyName,onChange:Y=>re("workExperience","companyName",Y,V),suggestions:["OnleiTech","Rubico IT","Tata Consultancy Services","Infosys","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","Simplilearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"],isMultiSuggestion:!1})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Work Duration"}),a.jsx("input",{type:"text",placeholder:"Dec-2023 to Mar-2025",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${B?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:_.WorkDuration,onChange:Y=>re("workExperience","WorkDuration",Y.target.value,V),onBlur:Y=>{const _e=Y.target.value;/^\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*to\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2,4})\s*$/.test(_e)?W(!1):(Wt.error(`Invalid format!
 Use as Dec-2023 to Mar-2025`,{duration:3e3,position:"top-right"}),Y.target.focus(),W(!0))}}),a.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${B?"bg-red-500":"bg-blue-500"}`})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(pt,{label:"Key Achievements",placeholder:"Learn to visualize patterns from data using matplotlib and Built several DL models",value:_.keyAchievements,onChange:Y=>{re("workExperience","keyAchievements",Y,V),L===9?X(10):L===10&&V===1&&X(11)},suggestions:["Education","Learning","Knowledge","Skills","Development","Growth","Discipline","Creativity","Curiosity","Critical","Thinking","Problem-Solving","Innovation","Empowerment","Potential","Opportunities","Success","Wisdom","Literacy","Training","Understanding","Mindset","Character","Focus","Dedication","Motivation","Scholarship","Study","Research","Exploration","Experience","Guidance","Curriculum","Subjects","Syllabus","Mentorship","Coaching","Academics","Assessment","Examination","Evaluation","Concepts","Projects","Presentation","Seminars","Workshops","Internship","Collaboration","Communication","Teamwork","Leadership","Career","Responsibility","Self-Study","Observation","Practical-Learning","Theoretical-Knowledge","Hardwork","Persistence","Vision","Goal-Setting","Time-Management","Experimentation","Exposure","System","Competence","Research-Skills","Interactive-Learning","Future-Ready","Holistic-Education","is","and","or","for","with","to","in","on","by","of","at","from","this","that","these","those","are","was","were","as","an","a","be","has","have","will","can","which","who","whose","where","when","how","it","its","also","but","if","so","then"],isPara:!0}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},V)),a.jsxs("button",{onClick:()=>pe("workExperience"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[a.jsx(Js,{size:16})," Add Experience"]})]}));case 4:return P?a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4  pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Projects"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 3 projects which you did in your academics"}),f.projects.map((_,V)=>a.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[a.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Project ",V+1]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Project Title"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.projectTitle}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Tools/Tech Used"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.toolsTechUsed}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},V)),a.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Projects because it is predefined data formate",children:"❌ Add Project"})]}):((L===11||L===10)&&X(12),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Projects"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 3 projects which you did in your academics"}),p.projects.map((_,V)=>a.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[a.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Project ",V+1]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Project Title"}),a.jsx("input",{type:"text",placeholder:"Transformer based translation model from scratch",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.projectTitle,onChange:Y=>re("projects","projectTitle",Y.target.value,V)}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Tools/Tech Used",placeholder:"Tensorflow, NumPy, Pandas, Matplotlib, Multi30k Dataset, ModelSubclassing",value:_.toolsTechUsed,onChange:Y=>{if(re("projects","toolsTechUsed",Y,V),L===12&&V===2){X(13);return}},suggestions:["TensorFlow","WeasyPrint","WebSocket (Live Rendering Protocol)","LLM's","HTML/CSS","Keras","PyTorch","Scikit-learn","XGBoost","LightGBM","CatBoost","FastAI","NumPy","Pandas","Matplotlib","Seaborn","Plotly","Altair","Statsmodels","SciPy","NLTK","SpaCy","Transformers","Gensim","BERT","GPT","Word2Vec","TF-IDF","Llama","OpenCV","Pillow","Albumentations","MMDetection","Detectron2","YOLO","MediaPipe","MNIST Dataset","CIFAR-10","CIFAR-100","ImageNet","COCO Dataset","Multi30k Dataset","Human Parsing Dataset","HuggingFace Datasets","UCI Repository","Transfer Learning","Model Subclassing","Data Augmentation","Feature Engineering","Ensemble Learning","Hyperparameter Tuning","Cross Validation","Grid Search","Early Stopping","Apache Spark","Hadoop","Airflow","Kafka","Snowflake","BigQuery","ETL Pipelines","AWS","Azure","Google Cloud Platform","IBM Cloud","Oracle Cloud","Firebase","Docker","Kubernetes","Terraform","Jenkins","GitHub Actions","Prometheus","Grafana","MySQL","PostgreSQL","MongoDB","Redis","SQLite","Elasticsearch","Cassandra","Django","Flask","FastAPI","Express.js","Spring Boot","Node.js","React","Vue.js","Angular","Next.js","Tailwind CSS","Bootstrap","SASS","Material UI","Python","Java","Advanced C++","C++","C","JavaScript","TypeScript","Go","Rust","R","Julia","SQL","Git","GitHub","GitLab","Bitbucket","Tableau","Power BI","Looker","Google Data Studio","Jupyter Notebook","Google Colab","VS Code","Anaconda","PyCharm","Postman","REST API","GraphQL","gRPC","NGINX","Apache","PyTest","Selenium","Cypress","JUnit","Postman","BeautifulSoup","Scrapy","LangChain","Streamlit","Gradio","Dash","MLflow","Weights & Biases","HuggingFace Hub","OpenAI API","Google API","Cloud Functions"]})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]},V)),a.jsxs("button",{onClick:()=>pe("projects"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[a.jsx(Js,{size:16})," Add Project"]})]}));case 5:return P?a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Education"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)"}),f.education.map((_,V)=>a.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[a.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Education ",V+1]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Institution Name"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.institutionName}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Degree Name"}),a.jsx("input",{type:"text",placeholder:"Bachelor in computer application",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.degreeName}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Graduation duration"}),a.jsx("input",{type:"text",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${R?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:_.graduationYear}),a.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${R?"bg-red-500":"bg-blue-500"}`})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Current SGPA"}),a.jsx("input",{type:"text",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${G?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:_.currentSGPA}),a.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${G?"bg-red-500":"bg-blue-500"}`})]})]},V)),a.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Educations because it is predefined data formate",children:"❌ Add Education"})]}):((L===12||L===13)&&X(14),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Education"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add your pre/post graduations on different sections (Consider listing your most recent Qualifications first)"}),p.education.map((_,V)=>a.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[a.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Education ",V+1]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Institution Name",placeholder:"Haridwar University",value:_.institutionName,onChange:Y=>re("education","institutionName",Y,V),suggestions:["Haridwar University (HU)","Vidya Mandir Sector-5 BHEL (Haridwar)","Collage of Engineering roorkee (COER)","Roorkee institute of technology (RIT)","Phonix (Roorkee)","","IIT Gandhinagar","IIT Patna","IIT Bhubaneswar","IIT Mandi","IIT Jodhpur","IIT Ropar","IIT Palakkad","IIT Tirupati","IIT Dhanbad (ISM)","NIT Calicut","NIT Kurukshetra","NIT Silchar","NIT Hamirpur","NIT Jalandhar","NIT Durgapur","NIT Jaipur (MNIT)","NIT Nagpur (VNIT)","NIT Surat (SVNIT)","NIT Meghalaya","IIIT Allahabad","IIIT Pune","IIIT Lucknow","IIIT Bhubaneswar","IIIT Kancheepuram","IIIT Gwalior","IIITDM Jabalpur","IIIT Vadodara","Indian Statistical Institute (ISI)","Indian Institute of Information Technology Design & Manufacturing (IIITDM Kancheepuram)","Homi Bhabha National Institute","Indian Institute of Science Education and Research (IISER Pune)","IISER Mohali","IISER Kolkata","IISER Bhopal","IISER Thiruvananthapuram","IISER Tirupati","IISER Berhampur","Delhi University (DU)","Banaras Hindu University (BHU)","Jawaharlal Nehru University (JNU)","Jamia Millia Islamia","Aligarh Muslim University (AMU)","University of Calcutta","University of Mumbai","University of Hyderabad","Osmania University","Anna University","Visvesvaraya Technological University (VTU)","Panjab University","Kurukshetra University","Gujarat Technological University","Guru Nanak Dev University","Pondicherry University","Bharathiar University","Savitribai Phule Pune University (SPPU)","Rajiv Gandhi University of Health Sciences","Mangalore University","Symbiosis International University","Shiv Nadar University","Ashoka University","OP Jindal Global University","Amity University","Lovely Professional University (LPU)","Chandigarh University","MIT World Peace University","SRM Institute of Science and Technology","VIT Vellore","VIT Chennai","Kalinga Institute of Industrial Technology (KIIT)","Birla Institute of Technology Mesra (BIT Mesra)","Indian Institute of Foreign Trade (IIFT)","Narsee Monjee Institute of Management Studies (NMIMS)","Indian School of Business (ISB)","XLRI Jamshedpur","SP Jain Institute of Management and Research","IIM Ahmedabad","IIM Bangalore","IIM Calcutta","IIM Lucknow"],isMultiSuggestion:!1})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Degree Name",placeholder:"Batchelor in computer application (BCA)",value:_.degreeName,onChange:Y=>re("education","degreeName",Y,V),suggestions:["Bachelor of Science (B.Sc)","Primary/Secondary","Bachelor of Technology (B.Tech)","Bachelor of Engineering (B.E)","Bachelor of Arts (B.A)","Bachelor of Commerce (B.Com)","Bachelor of Computer Applications (BCA)","Bachelor of Business Administration (BBA)","Bachelor of Fine Arts (BFA)","Bachelor of Design (B.Des)","Bachelor of Architecture (B.Arch)","Bachelor of Pharmacy (B.Pharm)","Bachelor of Laws (LLB)","Bachelor of Hotel Management (BHM)","Bachelor of Social Work (BSW)","Bachelor of Education (B.Ed)","Bachelor of Physical Education (B.P.Ed)","Bachelor of Science in Nursing (B.Sc Nursing)","Master of Science (M.Sc)","Master of Technology (M.Tech)","Master of Engineering (M.E)","Master of Computer Applications (MCA)","Master of Arts (M.A)","Master of Commerce (M.Com)","Master of Business Administration (MBA)","Master of Fine Arts (MFA)","Master of Design (M.Des)","Master of Architecture (M.Arch)","Master of Pharmacy (M.Pharm)","Master of Laws (LLM)","Master of Social Work (MSW)","Master of Education (M.Ed)","Master of Physical Education (M.P.Ed)","Master of Science in Nursing (M.Sc Nursing)","Master of Public Health (MPH)","Master of Data Science (MDS)","Master of Finance (MFin)","Master of Management Studies (MMS)","Master of Computer Science (MCS)"],isMultiSuggestion:!1})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Graduation duration"}),a.jsx("input",{type:"text",placeholder:"2023 - 2026",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${R?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:_.graduationYear,onChange:Y=>{re("education","graduationYear",Y.target.value,V),L===14&&V===0&&X(15)},onBlur:Y=>{const _e=Y.target.value;/^\s*(\d{4})\s*-\s*(\d{4})\s*$/.test(_e)?O(!1):(Wt.error(`Invalid format! 
Use as 2023-2026`,{duration:3e3,position:"top-right"}),Y.target.focus(),O(!0))}}),a.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${R?"bg-red-500":"bg-blue-500"}`})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Current SGPA"}),a.jsx("input",{type:"text",placeholder:"?? / 10",className:`w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 ${G?"focus:ring-red-500":"focus:ring-blue-500"} dark:bg-gray-800 dark:text-white dark:border-gray-600`,value:_.currentSGPA,onChange:Y=>{re("education","currentSGPA",Y.target.value,V),L===15&&V===1&&X(16)},onBlur:Y=>{const _e=Y.target.value;/^\s*([0-9](\.\d{1})?|10(\.0)?)\s*$/.test(_e)?H(!1):(Wt.error(`Invalid format! 
Use as 7 or 8.3 and less then 10`,{duration:3e3,position:"top-right"}),Y.target.focus(),H(!0))}}),a.jsx("div",{class:`ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%] ${G?"bg-red-500":"bg-blue-500"}`})]})]},V)),a.jsxs("button",{onClick:()=>pe("education"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[a.jsx(Js,{size:16})," Add Education"]})]}));case 6:return P?a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Certificates"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 5 high rated certificates"}),f.certificates.map((_,V)=>a.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[a.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Certificate ",V+1]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Certificate Name"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.certificateName}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Course Duration"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.courseDuration}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Provider Name"}),a.jsx("input",{type:"text",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.providerName}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]})]},V)),a.jsx("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",title:"You can't add Certificates because it is predefined data formate",children:"❌ Add Certificate"})]}):((L===16||L===15)&&X(17),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Certificates"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Add atleast 5 high rated certificates"}),p.certificates.map((_,V)=>a.jsxs("div",{className:"p-4 border-2 rounded space-y-4 dark:border-slate-700",children:[a.jsxs("h3",{className:"font-medium text-lg dark:text-slate-200",children:["Certificate ",V+1]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Certificate Name"}),a.jsx("input",{type:"text",placeholder:"Azure AI Engineer Associate",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.certificateName,onChange:Y=>re("certificates","certificateName",Y.target.value,V)}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"block text-sm font-medium dark:text-slate-300",children:"Course Duration"}),a.jsx("input",{type:"text",placeholder:"2 Month",className:"w-full sm:px-6 sm:p-2 border rounded peer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:_.courseDuration,onChange:Y=>re("certificates","courseDuration",Y.target.value,V)}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Provider Name",placeholder:"Microsoft",value:_.providerName,onChange:Y=>{re("certificates","providerName",Y,V),L===17&&V===0?X(18):L===18&&V===4&&X(19)},suggestions:["OnleiTech","CadPlanet","Rubico IT","Tata Consultancy Services","Infosys","NIIT Technologies","IIT Bombay","IIT Madras","IIT Kharagpur","IIT Bombay","IIT Madras","IIT Kanpur","IIT Delhi","IIT Guwahati","IIT Roorkee","IIT Ropar","IIT Bhubaneswar","IIT Gandhinagar","IIT Hyderabad","IIT Jodhpur","IIT Patna","IIT Indore","IIT Mandi","IIT (BHU) Varanasi","IIT Palakkad","IIT Tirupati","IIT Dhanbad","IIT Bhilai","IIT Goa","IIT Jammu","IIT Dharwad","NIT Warangal","NIT Tiruchirappalli","NIT Surathkal","NIT Calicut","NIT Rourkela","NIT Kurukshetra","NIT Durgapur","NIT Silchar","NIT Jaipur","NIT Allahabad","NIT Jalandhar","NIT Bhopal","NIT Nagpur","NIT Patna","NIT Raipur","NIT Agartala","NIT Srinagar","NIT Meghalaya","NIT Goa","NIT Delhi","NIT Puducherry","NIT Manipur","NIT Mizoram","NIT Nagaland","NIT Arunachal Pradesh","NIT Sikkim","NIT Uttarakhand","NIT Hamirpur","NIT Jamshedpur","NIT Andhra Pradesh","HCL Technologies","Wipro","Tech Mahindra","Cognizant Technology Solutions","IBM India","Larsen & Toubro Infotech","Mindtree","Mphasis","Oracle Financial Services Software","Redington India","Ingram Micro India","Dell India","SAP India","Capgemini India","Accenture India","Cisco Systems India","Amazon Development Centre India","Google India","Microsoft India","Adobe Systems India","Intel Technology India","HP India","Siemens India","Samsung R&D Institute India","Infosys BPM","Wipro Technologies","HCL Infosystems","Tech Mahindra Business Services","L&T Technology Services","Persistent Systems","Hexaware Technologies","Zensar Technologies","Birlasoft","NIIT Technologies","Cyient","Sonata Software","Mindtree Consulting","Mastek","Sasken Technologies","Polaris Consulting & Services","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge","eClerx Services","Firstsource Solutions","L&T Infotech","Syntel","QuEST Global","KPIT Technologies","Nucleus Software Exports","Oracle India","IBM Daksh","Dell International Services","Concentrix India","Genpact","EXL Service","WNS Global Services","Hinduja Global Solutions","Teleperformance India","Sutherland Global Services","Aegis Limited","Infosys McCamish Systems","TCS e-Serve","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Infosys BPO","TCS BPO","Mphasis BPO","HCL BPO","Wipro BPO","Tech Mahindra BPO","Cognizant BPO","Capgemini BPO","Accenture BPO","Genpact BPO","EXL Service BPO","WNS BPO","HGS BPO","Teleperformance BPO","Sutherland BPO","Aegis BPO","Zoho Corporation","Freshworks","Paytm","Ola Cabs","Zomato","Swiggy","Byju's","Flipkart","Snapdeal","MakeMyTrip","PolicyBazaar","Delhivery","InMobi","Quikr","Hike","Naukri.com","BookMyShow","BigBasket","Lenskart","OYO Rooms","CureFit","Razorpay","PhonePe","Myntra","ShopClues","UrbanClap","Practo","1mg","CarDekho","Housing.com","Pepperfry","Nykaa","Dream11","Udaan","Meesho","ShareChat","Dunzo","BlackBuck","Rivigo","Infra.Market","Moglix","OfBusiness","UpGrad","Unacademy","Vedantu","WhiteHat Jr.","Eruditus","SimpliLearn","Toppr","Lido Learning","Classplus","Testbook","Doubtnut","Embibe","Khatabook","OkCredit","BharatPe","CRED","Groww","Zerodha","Smallcase","INDmoney","CoinSwitch Kuber","WazirX","Instamojo","Mswipe","Pine Labs","Chargebee","Capillary Technologies","WebEngage","MoEngage","Netcore Solutions","BrowserStack","Postman","Wingify","FusionCharts","HackerRank","HackerEarth","InterviewBit","Scaler","Coding Ninjas","GeeksforGeeks","Tata Elxsi","Cyient","Persistent Systems","Zensar Technologies","Sonata Software","Mastek","Sasken Technologies","Mindtree","L&T Technology Services","Birlasoft","Hexaware Technologies","NIIT Technologies","Mphasis","QuEST Global","KPIT Technologies","Nucleus Software Exports","Ramco Systems","CMC Limited","iGate","Patni Computer Systems","Mahindra Satyam","3i Infotech","Coforge"],isMultiSuggestion:!1})}),a.jsx("div",{class:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]})]},V)),a.jsxs("button",{onClick:()=>pe("certificates"),className:"flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200/95 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[a.jsx(Js,{size:16})," Add Certificate"]})]}));case 7:if(P)return a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Description"}),a.jsx("p",{className:"text-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Consider to edit them more and make professional"}),a.jsxs("div",{className:"space-y-2 pt-16 pb-16",children:[a.jsx("textarea",{placeholder:"Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle.",className:"w-full min-h-[145px] px-3 py-2 border rounded resize-none peer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",value:f.Description.UserDescription}),a.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});if(L===18||L===19){X(20);const _=setTimeout(()=>{X(21)},2e4),V=setTimeout(()=>{X(22)},4e4);return()=>{clearTimeout(_),clearTimeout(V)}}return a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Description"}),a.jsx("p",{className:"text-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"Hint: Consider to edit them more and make professional"}),a.jsxs("div",{className:"space-y-2 pt-8 pb-16",children:[a.jsx("div",{className:"peer",children:a.jsx(pt,{label:"Resume Description",placeholder:"Passionate AI Developer & Backend Specialist with expertise in Deep Learning, Computer Vision, NLP, and Transformers. Skilled at building models from scratch and integrating them into real-world applications using React, Flask, and Django. Developed and deployed 22+ projects available on GitHub & Kaggle.",value:p.Description.UserDescription,onChange:_=>re("Description","UserDescription",_),suggestions:x,isTextArea:!0,isMultiSuggestion:!1})}),a.jsx("div",{className:"ml-4 w-0 h-1 rounded-full bg-blue-500 transition-all duration-300 peer-hover:w-[60%] peer-focus:w-[88%] sm:peer-focus:w-[94%]"})]})]});case 0:return P?a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Choose Template"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"We will frequently add more template designs to provide more resume options."}),a.jsx("div",{className:"grid grid-cols-2 gap-5",children:[1,2,3,4,5,6].map(_=>a.jsxs("div",{onClick:()=>m(V=>({...V,selectedTemplate:String(_)})),className:`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md hover:scale-95 dark:shadow-gray-600  ${f.selectedTemplate===String(_)?"border-blue-600 bg-blue-50 dark:bg-slate-800":"dark:border-gray-700"}`,children:[a.jsx("img",{src:`/Resume-Builder/Temp/temp${_}.png`,alt:`Template ${_}`,className:"w-full h-auto rounded-lg dark:filter dark:brightness-90"}),ie?a.jsx("p",{className:"text-center mt-2",children:_}):a.jsx("p",{className:"text-center mt-2 dark:text-gray-200",children:Q[_-1]})]},_))})]}):a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl sm:text-2xl font-bold border-b-4 pb-1 border-blue-900 mb-4 text-blue-800 dark:border-blue-500 dark:text-blue-400",children:"Choose Template"}),a.jsx("p",{className:"test-xl font-semibold mb-6 text-gray-600 dark:text-gray-200",children:"We will frequently add more template designs to provide more robust options."}),a.jsx("div",{className:"grid grid-cols-2 gap-5",children:[1,2,3,4,5,6].map(_=>a.jsxs("div",{onClick:()=>{if(K){h(Y=>({...Y,selectedTemplate:String(_)})),L===2&&X(1);const V=setTimeout(()=>{(L===1||L===2)&&X(2)},50);return()=>clearTimeout(V)}},className:`p-4 border-2 rounded-lg cursor-pointer transition-transform duration-400 shadow-md hover:scale-95 dark:shadow-gray-600  ${p.selectedTemplate===String(_)?"border-blue-600 bg-blue-50 dark:bg-slate-800":"dark:border-gray-700"}`,children:[a.jsx("img",{src:`/Resume-Builder/Temp/temp${_}.png`,alt:`Template ${_}`,className:"w-full h-auto rounded-lg dark:filter dark:brightness-90"}),ie?a.jsx("p",{className:"text-center mt-2",children:_}):a.jsx("p",{className:"text-center mt-2 dark:text-gray-200",children:Q[_-1]})]},_))})]});default:return null}};return a.jsxs("div",{className:"flex min-h-screen bg-gray-100 dark:bg-slate-900",children:[a.jsxs("div",{className:`fixed top-0 left-0 h-full bg-white border-r shadow-md hover:shadow-xl p-0 md:p-4 transition-all duration-300 ease-in-out
        ${ie?"w-64":"w-0"} md:w-64 dark:border-r-slate-800 dark:bg-slate-800 z-50`,children:[a.jsx("button",{onClick:()=>{de(!ie),ye&&Ae(!ye)},className:"absolute top-6 pl-7 md:hidden p-3 rounded-r-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300",children:ie?a.jsx(Df,{size:20}):a.jsx(Gx,{size:20})}),a.jsxs("div",{className:`${ie||"hidden md:block"}`,children:[a.jsx("h1",{className:"text-2xl font-bold pt-20 md:pt-4 text-center text-blue-800 dark:text-amber-300 cursor-pointer",title:"Details user have to fill",children:"Sections"}),a.jsx("div",{className:"w-[30%] h-1 bg-blue-900 mb-6 mx-auto mt-1 rounded dark:bg-amber-400"}),a.jsx("div",{className:"space-y-4 px-2",children:ce.map((_,V)=>a.jsxs("div",{onClick:()=>o(V),title:_.title,className:`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-transform duration-400 hover:scale-105
                  ${n===V?"bg-blue-50 text-blue-600 dark:bg-slate-700":""}
                  ${v.has(V)?"text-green-600 dark:text-amber-200":"text-gray-600 dark:text-zinc-200"}
                `,children:[a.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ease-in-out
                    ${v.has(V)?"bg-white border-green-600 dark:border-amber-300 dark:bg-gray-800":"border-gray-400 dark:border-gray-400"}
                  `,children:v.has(V)?a.jsx(zx,{size:14,className:"transition-all duration-300 scale-110 opacity-100"}):a.jsx("span",{className:"text-sm transition-all duration-300 opacity-80",children:V+1})}),a.jsx("span",{className:"text-sm font-medium",children:_.key})]},V))}),a.jsxs("div",{children:[a.jsx("h2",{className:"space-y-3 mx-4 md:mx-0 mt-4 p-2 flex items-center justify-center gap-3 rounded-lg cursor-pointer transition-transform duration-400 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:text-zinc-300 dark:bg-slate-700/50 dark:hover:bg-slate-700/95",title:"It is only for Test & Present purpose. with authorized access",onClick:()=>{Fe(!Ne)},children:"Example Processing"}),Ne&&a.jsx("div",{className:"mx-4 md:mx-0 dark:bg-gray-800 rounded-lg",children:a.jsx("input",{type:"password",className:`w-full mt-2 p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white ${Be?"border-red-500 dark:border-red-400 focus:ring-red-500":"border-blue-500 dark:border-blue-400 focus:ring-blue-500"} focus:outline-none focus:ring-2`,value:je,onChange:_=>He(_.target.value),onKeyDown:fe,placeholder:"Enter PIN"})})]})]})]}),a.jsx("div",{className:`flex-1 pt-20 pr-3 pl-1 md:py-8 transition-all duration-300 ${ie?"ml-60":"ml-2"} md:ml-0`,children:a.jsxs("div",{className:"md:max-w-96 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto",children:[We(),a.jsx("div",{className:"mt-8 flex justify-end",children:a.jsxs("button",{title:i?"Don't cheat! Fill all details for a good resume":"Fill all details and continue to next page",onClick:xe,className:`flex items-center gap-2 px-6 py-2 mt-5 text-white rounded-full transition-all duration-300 ${i?"bg-red-500 hover:bg-red-600 scale-105 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:[n===ce.length-1?"Submit":"Next",a.jsx("span",{className:`transition-all duration-300 ${i?"scale-110 rotate-90":"scale-100 rotate-0"}`,children:i?a.jsx("i",{className:"fas fa-times-circle"}):a.jsx($x,{size:16})})]})})]})}),a.jsxs("div",{className:`fixed top-0 right-0 h-full bg-white border-l shadow-md hover:shadow-xl p-0 md:p-4 transition-all duration-300 ease-in-out
        ${ye?"w-64":"w-0"} md:w-72 dark:border-l-slate-800 dark:bg-slate-800`,children:[a.jsx("button",{onClick:()=>{Ae(!ye),ie&&de(!ie)},className:"absolute top-6 mr-0 right-0 pr-8 md:hidden p-3 rounded-l-full bg-gray-200 dark:bg-gray-600 dark:text-cyan-300",children:ye?a.jsx(Df,{size:20}):a.jsx(Hx,{size:20})}),a.jsxs("div",{className:`${ye||"hidden md:block"}`,children:[a.jsx("h1",{className:"text-2xl font-bold pt-20 md:pt-4 text-center text-blue-800 dark:text-amber-300 cursor-pointer",title:"Live preview. how your resume looks",children:"Preview"}),a.jsx("div",{className:"w-[25%] h-1 bg-blue-900 mb-4 mx-auto mt-1 rounded dark:bg-amber-400"}),a.jsx("div",{className:"px-2 w-[250px] ml-3 h-[400px] overflow-hidden bg-white dark:bg-slate-800 ",children:a.jsx("div",{className:"scale-[0.24] origin-top-left flex ",children:(P?f.selectedTemplate==1:p.selectedTemplate==1)?a.jsx(Xl,{jsonData:P?f:p}):(P?f.selectedTemplate==2:p.selectedTemplate==2)?a.jsx(Vp,{jsonData:P?f:p}):(P?f.selectedTemplate==3:p.selectedTemplate==3)?a.jsx(Kp,{jsonData:P?f:p}):(P?f.selectedTemplate==4:p.selectedTemplate==4)?a.jsx(Qp,{jsonData:P?f:p}):(P?f.selectedTemplate==5:p.selectedTemplate==5)?a.jsx(Yp,{jsonData:P?f:p}):(P?f.selectedTemplate==6:p.selectedTemplate==6)?a.jsx(Jp,{jsonData:P?f:p}):a.jsx("div",{})})}),a.jsxs("div",{className:`whitespace-pre-line dark:text-slate-300 p-1 ${P?"hidden":"block"}`,children:[a.jsxs("div",{className:"flex items-center mb-3",children:[a.jsx("img",{src:"https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true",alt:"N",width:"40",height:"40"}),a.jsxs("div",{className:"ml-2",children:[a.jsx("span",{className:"font-semibold pb-[2px]",children:"Suggestion Bot"}),a.jsx("div",{className:"w-[75%] h-[3px] bg-blue-800 mx-auto mt-1 rounded dark:bg-amber-500"})]})]}),a.jsx("span",{id:"Suggestion-typing-text",className:"text-lime-700 dark:text-lime-400"})]})]})]})]})},O1=()=>{const[n,o]=N.useState("preparing"),[i,u]=N.useState(0),[c,f]=N.useState(""),[m,p]=N.useState({pdf:!1,html:!1}),h=An(),{jsonData:x}=h.state||{},v=(x==null?void 0:x.selectedTemplate)||"1",E=3,S=1e4;N.useEffect(()=>{if(!x){o("error"),f("No resume data found. Please go back and enter your information.");return}setTimeout(()=>{o("waking"),w()},1e3)},[x]);const w=async()=>{try{const D=document.getElementById("capture-content");if(!D)throw new Error("Content element not found. Template may not be rendered correctly.");const B=D.innerHTML;if(!B.trim())throw new Error("Template content is empty. Please check the template rendering.");console.log("Template HTML captured successfully");const R=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Designed by BRAVERS</title>
          <style>
            ${v==="1"?N1:v=="2"?E1:v=="3"?I1:v=="4"?L1:v=="5"?R1:B1}
          </style>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
          <link rel="icon" href="https://raw.githubusercontent.com/NishantkSingh0/Resume-Builder/main/public/N.png">
        </head>
        <body>${B}</body>
        </html>
      `;console.log("Sending request to generate PDF..."),o("processing");try{const O=await fetch("https://html2pdfviabravers.onrender.com/generate-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({html:R})});if(!O.ok)throw new Error(`Server responded with status: ${O.status}`);const G=await O.blob(),H=window.URL.createObjectURL(G),ie=document.createElement("a");ie.href=H,ie.download="Resume.pdf",ie.click(),window.URL.revokeObjectURL(H),console.log("PDF Downloaded Successfully"),p(Ne=>({...Ne,pdf:!0}));const de=new Blob([R],{type:"text/html"}),ye=window.URL.createObjectURL(de),Ae=document.createElement("a");Ae.href=ye,Ae.download="Resume.html",Ae.click(),window.URL.revokeObjectURL(ye),console.log("HTML Downloaded Successfully"),p(Ne=>({...Ne,html:!0})),o("completed")}catch(O){console.error("API Error:",O),i<E?(u(G=>G+1),f(`Request failed: ${O.message}. Retrying in ${S/1e3} seconds...`),setTimeout(()=>{o("waking"),w()},S)):(f(`Failed after ${E} attempts: ${O.message}`),o("error"))}}catch(D){console.error("Error:",D),f(D.message||"An unknown error occurred"),o("error")}},k=()=>{switch(v){case"1":return a.jsx(Xl,{jsonData:x});case"2":return a.jsx(Vp,{jsonData:x});case"3":return a.jsx(Kp,{jsonData:x});case"4":return a.jsx(Qp,{jsonData:x});case"5":return a.jsx(Yp,{jsonData:x});case"6":return a.jsx(Jp,{jsonData:x});default:return a.jsx(Xl,{jsonData:x})}},M=()=>{switch(n){case"preparing":return"Preparing your resume...";case"waking":return`Waking up our servers... ${i>0?`(Attempt ${i+1} of ${E+1})`:""}`;case"processing":return"Generating PDF...";case"completed":return`Your resume ${m.pdf?"(PDF)":""} ${m.html?"(HTML)":""} has been downloaded!`;default:return"Designing..."}},P=()=>{u(0),f(""),o("preparing"),p({pdf:!1,html:!1}),setTimeout(()=>{o("waking"),w()},1e3)};return a.jsxs("div",{className:"flex items-center justify-center h-screen w-screen text-center transition-colors duration-300 bg-gray-100 dark:bg-slate-800",children:[a.jsx("div",{id:"capture-content",className:"scale-[0.4] text-left",style:{visibility:n==="completed"?"visible":"hidden",position:n==="completed"?"relative":"absolute"},children:x&&k()}),n!=="completed"&&n!=="error"?a.jsxs("div",{className:"relative w-[220px] h-[320px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#1a1a1a,-20px_-20px_60px_#2a2a2a] transition-all duration-300",children:[a.jsx("div",{className:"absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-[#3449ff] dark:bg-gray-200 opacity-100 filter blur-[8px] animate-blob-bounce transition-colors duration-300"}),a.jsxs("div",{className:"absolute top-[5px] left-[5px] w-[210px] h-[310px] bg-white dark:bg-slate-950 backdrop-blur-[24px] rounded-[10px] outline outline-2 outline-white dark:outline-gray-600 flex flex-col items-center justify-center text-center text-[14px] text-[#3449ff] dark:text-blue-300 font-bold p-[10px] transition-colors duration-300",children:[a.jsx("p",{title:"Server sometimes get sleep. waking them up may take few seconds. please wait",children:M()}),n==="waking"&&a.jsx("p",{className:"text-xs mt-4 text-gray-500 dark:text-gray-400 max-w-[180px]",children:"Our server might be waking up from sleep mode. This can take up to a minute."}),c&&n!=="error"&&a.jsx("p",{className:"text-xs mt-4 text-yellow-600 dark:text-yellow-400 max-w-[180px]",children:c})]})]}):n==="error"?a.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md",children:[a.jsx("strong",{className:"font-bold",children:"Error:"}),a.jsxs("span",{className:"block sm:inline",children:[" ",c]}),a.jsx("button",{className:"mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:P,children:"Try Again"})]}):a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsxs("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 ml- py-3 rounded relative max-w-md mb-4",children:[a.jsx("strong",{className:"font-bold",children:"Success!"}),a.jsxs("span",{className:"block sm:inline",children:[" Your resume has been successfully generated and downloaded. Believe me your ATS score will be ",a.jsx("b",{children:"85+"})]})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:P,children:"Download Again"}),a.jsx("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",onClick:()=>window.history.back(),children:"Back to Editor"})]})]})]})};var Xp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Hf=oe.createContext&&oe.createContext(Xp),z1=["attr","size","title"];function F1(n,o){if(n==null)return{};var i=$1(n,o),u,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(c=0;c<f.length;c++)u=f[c],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(n,u)&&(i[u]=n[u])}return i}function $1(n,o){if(n==null)return{};var i={};for(var u in n)if(Object.prototype.hasOwnProperty.call(n,u)){if(o.indexOf(u)>=0)continue;i[u]=n[u]}return i}function ga(){return ga=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},ga.apply(this,arguments)}function Wf(n,o){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);o&&(u=u.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),i.push.apply(i,u)}return i}function xa(n){for(var o=1;o<arguments.length;o++){var i=arguments[o]!=null?arguments[o]:{};o%2?Wf(Object(i),!0).forEach(function(u){U1(n,u,i[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Wf(Object(i)).forEach(function(u){Object.defineProperty(n,u,Object.getOwnPropertyDescriptor(i,u))})}return n}function U1(n,o,i){return o=H1(o),o in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,n}function H1(n){var o=W1(n,"string");return typeof o=="symbol"?o:o+""}function W1(n,o){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var u=i.call(n,o||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function Zp(n){return n&&n.map((o,i)=>oe.createElement(o.tag,xa({key:i},o.attr),Zp(o.child)))}function Ta(n){return o=>oe.createElement(G1,ga({attr:xa({},n.attr)},o),Zp(n.child))}function G1(n){var o=i=>{var{attr:u,size:c,title:f}=n,m=F1(n,z1),p=c||i.size||"1em",h;return i.className&&(h=i.className),n.className&&(h=(h?h+" ":"")+n.className),oe.createElement("svg",ga({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,u,m,{className:h,style:xa(xa({color:n.color||i.color},i.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),f&&oe.createElement("title",null,f),n.children)};return Hf!==void 0?oe.createElement(Hf.Consumer,null,i=>o(i)):o(Xp)}function V1(n){return Ta({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function K1(n){return Ta({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(n)}function Q1(n){return Ta({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function Y1(n){return Ta({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(n)}function qs({content:n,message:o,linkText:i,linkUrl:u}){const[c,f]=N.useState(!1),m=p=>typeof p=="string"&&(p.startsWith("resume-builder")||/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(p));return a.jsxs("div",{className:"relative inline-block",children:[a.jsx("div",{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:m(n)?a.jsx("img",{src:n,alt:"Logo",className:"w-7 h-7 ml-3 md:ml-4 rounded-full"}):a.jsx("span",{className:"cursor-pointer text-blue-500 font-bold ml-2",children:n})}),c&&a.jsxs("div",{className:`absolute top-1/2 -translate-y-1/2 bg-gray-600/95 text-white text-sm px-4 py-4 rounded-md 
          ${Array.isArray(o)&&o.length>1?"w-[440px] left-[30px]":"w-72 left-[50px]"} text-left`,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[Array.isArray(o)&&o.length>1?a.jsx("ul",{className:"list-disc list-inside",children:o.map((p,h)=>a.jsx("li",{children:p},h))}):a.jsx("p",{children:Array.isArray(o)?o[0]:o}),i&&u&&a.jsx("a",{href:u,target:"_blank",className:"text-blue-400 no-underline hover:underline",children:a.jsx("b",{children:i})})]})]})}const J1=[{name:"Nishant Singh",role:"Handled Frontend and backend processing",github:"Nishantksingh0",gitLink:"https://github.com/NishantkSingh0",linkedin:"Nishantksingh1",linLink:"https://www.linkedin.com/in/nishantksingh1",portfolio:"Nishantksingh0",prtLink:"https://nishantksingh0.github.io",email:"nishantsingh.talk",emailLink:"mailto:nishantsingh.talk@gmail.com"},{name:"Amisha Pal",role:"Handled Designing All Templates",github:"Amisha-Pal",gitLink:"https://github.com/Amisha-Pal",linkedin:"amisha-pal-70",linLink:"https://www.linkedin.com/in/amisha-pal-703493328/",portfolio:"Amisha.dev",prtLink:"",email:"amishapal992",emailLink:"mailto:amishapal9927@gmail.com"},{name:"Ankush Kumar",role:"Handled Written Works of project",github:"Ankush2011",gitLink:"https://github.com/Ankush201109",linkedin:"Ankush-kumar-5",linLink:"https://www.linkedin.com/in/ankush-kumar-505318231",portfolio:"Ankush.dev",prtLink:"",email:"akbahot2004",emailLink:"mailto:akbahot2004@gmail.com"}];function X1(){return a.jsxs("div",{className:"min-h-screen text-gray-100 py-12 px-6 flex flex-col items-center dark:bg-slate-900",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"text-2xl font-extrabold text-center mb-2 text-gray-500 md:text-3xl dark:text-amber-300",children:[a.jsx("i",{className:"fas fa-user-alt"})," About Us"]}),a.jsx("div",{className:"w-[80%] h-1 bg-gray-600 mx-auto mb-10 mt-1 rounded dark:bg-amber-400"})]}),a.jsx("div",{className:"w-full max-w-4xl flex flex-col space-y-6",children:J1.map((n,o)=>a.jsxs("div",{className:"w-full bg-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-slate-800",style:{minWidth:"33%"},children:[a.jsx("div",{className:"flex items-center bg-blue-600 text-xl font-bold p-3 rounded-2xl mb-3",children:a.jsxs("div",{className:"flex items-center justify-center flex-1",children:[n.name,n.name==="Nishant Singh"&&a.jsx(qs,{content:"/Resume-Builder/BinaryBunch.jpeg",message:"Have secured 3rd rank in University 24hr Hackathon (TechWizard) on",linkText:"Proctoring System",linkUrl:"https://github.com/NishantkSingh0/Proctoring-System"})]})}),a.jsxs("p",{className:"text-green-700 mb-6 font-semibold dark:text-blue-300",children:[n.role,n.name==="Nishant Singh"&&a.jsx(qs,{content:" . . . ",message:["Developed and integrated frontend and backend systems.","Proposed innovative project ideas with structured workflows.","Researched high-rated resumes for optimization.","Analyzed ATS algorithms for effective resume selection.","Handled suggestion items and integrate with UI"]}),n.name==="Amisha Pal"&&a.jsx(qs,{content:" . . . ",message:["Designed all templates in HTML/CSS","Researched designs and innovation ideas","Gived optimization idea for various modules","Researched other Resume builder websites and suggested improvemnets"]}),n.name==="Ankush Kumar"&&a.jsx(qs,{content:" . . . ",message:["Managed All written works (Synopsis, Project file)","Designed PPT for presentation","Researched other Resume builder websites and suggested improvemnets"]})]}),a.jsxs("div",{className:"flex flex-col items-center space-y-4 px-4 md:px-32",children:[a.jsxs("div",{className:"flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10",children:[a.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[a.jsx(V1,{className:"text-lg"}),a.jsx("a",{href:n.gitLink,onClick:i=>{n.gitLink||i.preventDefault()},title:n.gitLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.github})]}),a.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[a.jsx(K1,{className:"text-lg"}),a.jsx("a",{href:n.linLink,onClick:i=>{n.linLink||i.preventDefault()},title:n.linLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.linkedin})]})]}),a.jsxs("div",{className:"flex flex-col md:flex-row justify-between w-full max-w-2xl space-y-4 md:space-y-0 md:space-x-10",children:[a.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[a.jsx(Y1,{className:"text-lg"}),a.jsx("a",{href:n.prtLink,onClick:i=>{n.prtLink||i.preventDefault()},title:n.prtLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.portfolio})]}),a.jsxs("div",{className:"flex items-center space-x-2 text-gray-700 font-semibold w-full md:w-1/2 justify-center md:justify-start dark:text-slate-300",children:[a.jsx(Q1,{className:"text-lg"}),a.jsx("a",{href:n.emailLink,onClick:i=>{n.emailLink||i.preventDefault()},title:n.emailLink,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:n.email})]})]})]})]},o))})]})}const Z1=()=>{const[n,o]=N.useState(""),[i,u]=N.useState(""),c=async()=>{try{const p=await(await fetch("https://your-api.com/verify-mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:i})})).json();alert(p.message||"Verification successful!")}catch{alert("Verification failed! Please try again.")}},f=()=>{o(""),u("")};return a.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:a.jsxs("div",{className:"bg-white p-10 shadow-xl rounded-lg w-96 text-center border border-gray-300",children:[a.jsx("h2",{className:"text-2xl font-semibold mb-6 text-gray-700",children:"Google Mail Verification"}),a.jsx("input",{type:"email",placeholder:"Enter your email",value:n,onChange:m=>o(m.target.value),className:"w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsx("input",{type:"password",placeholder:"Enter your password",value:i,onChange:m=>u(m.target.value),className:"w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("button",{onClick:c,className:"bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700",children:"Continue"}),a.jsx("button",{onClick:f,className:"bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-600",children:"Reset"})]})]})})};function q1(){const n=["","Simpler & Structured","Linear & Classic","Colourful & Attractive","Colourful & Highly Designed","Simpler & Linear","Highly Simpler & Classic"],o=[{img:"/Resume-Builder/Temp/temp1.png",title:n[1],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T1.html",templateLink:"https://nishantksingh0.github.io/Generated-Templates/T1"},{img:"/Resume-Builder/Temp/temp2.png",title:n[2],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T2.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T2"},{img:"/Resume-Builder/Temp/temp3.png",title:n[3],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T3.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T3"},{img:"/Resume-Builder/Temp/temp4.png",title:n[4],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T4.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T4"},{img:"/Resume-Builder/Temp/temp5.png",title:n[5],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T5.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T5"},{img:"/Resume-Builder/Temp/temp6.png",title:n[6],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T7.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T7"},{img:"/Resume-Builder/Temp/temp8.png",title:n[4],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T8.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T8"},{img:"/Resume-Builder/Temp/temp9.png",title:n[5],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T9.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T9"},{img:"/Resume-Builder/Temp/temp10.png",title:n[7],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T10.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T10"},{img:"/Resume-Builder/Temp/temp11.png",title:n[2],codeLink:"https://github.com/NishantkSingh0/Generated-Templates/blob/main/T11.html",templateLink:"https://NishantkSingh0.github.io/Generated-Templates/T11"}];return a.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 p-4",children:[a.jsx("h3",{className:"mt-10 mb-2 text-3xl text-gray-600 dark:text-slate-200 font-bold",children:"Generated Templates"}),a.jsx("h5",{className:"mb-4 text-sm md:text-base font-semibold text-gray-500",children:"Note: Consider to View Templates only on desktop mode"}),a.jsx("div",{className:"w-[200px] h-1 bg-blue-700 mb-16 mx-auto mt-1 rounded dark:bg-blue-500"}),a.jsx("div",{className:"grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-2 max-w-5xl mx-auto place-items-center",children:o.map((i,u)=>a.jsxs("div",{className:"group relative mb-6 bg-white dark:bg-slate-700 hover:shadow-2xl hover:scale-105 transition-transform border-2 dark:shadow-[0_-4px_10px_rgba(0,0,0,0.1)]  border-gray-300 dark:border-gray-700 dark:shadow-gray-800 dark:hover:shadow-gray-700 rounded-lg overflow-hidden w-40 sm:w-44 md:w-48 lg:w-64 xl:w-72 flex flex-col items-center",children:[a.jsx("img",{src:i.img,alt:i.title,className:"w-full h-auto object-cover dark:opacity-80 dark:brightness-80 dark:contrast-90"}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 dark:bg-slate-700 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-transform flex space justify-between flex-col items-center",children:a.jsx("div",{className:"flex space-x-4",children:a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("a",{href:i.codeLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md md:hidden",target:"_blank",children:"Code"}),a.jsx("a",{href:i.templateLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md md:hidden",target:"_blank",children:"View"}),a.jsx("a",{href:i.codeLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md hidden md:block",target:"_blank",children:"View Code"}),a.jsx("a",{href:i.templateLink,className:"text-gray-50 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md hidden md:block",target:"_blank",children:"View Resume"})]})})}),a.jsxs("div",{className:"font-semibold text-gray-600 dark:text-gray-200 text-xs pb-2 pt-1 md:text-base",children:[" ",i.title," "]})]},u))})]})}const ev=()=>a.jsx("div",{className:"flex justify-center items-center h-screen dark:bg-black",children:a.jsx("img",{src:"https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true",alt:"Wait a while 😐",title:"Wait a while 😐. Content is loading",className:"w-15 h-15 animate-step-rotate"})}),tv=()=>{const{isDark:n}=N.useContext(ba),[o,i]=N.useState(!0);return N.useEffect(()=>{n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[n]),N.useEffect(()=>{const u=setTimeout(()=>{i(!1)},2e3);return()=>clearTimeout(u)},[]),o?a.jsx(ev,{}):a.jsxs("div",{children:[a.jsx(_y,{}),a.jsxs(Fg,{children:[a.jsx(Jn,{path:"/",element:a.jsx(Rx,{})}),a.jsx(Jn,{path:"/AboutUs",element:a.jsx(X1,{})}),a.jsx(Jn,{path:"/VarifyMail",element:a.jsx(Z1,{})}),a.jsx(Jn,{path:"/GetInfo",element:a.jsx(_1,{})}),a.jsx(Jn,{path:"/Result",element:a.jsx(O1,{})}),a.jsx(Jn,{path:"/ViewTemplates",element:a.jsx(q1,{})})]})]})};C0.createRoot(document.getElementById("root")).render(a.jsx(oe.StrictMode,{children:a.jsx(c0,{children:a.jsx(E0,{children:a.jsx(tv,{})})})}));
