var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Ud(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),$f._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[gt])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(xu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),k=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=kn(h({},An,{newState:0,oldState:0})),er=[9,13,27,32],tr=yn&&`CompositionEvent`in window,nr=null;yn&&`documentMode`in document&&(nr=document.documentMode);var rr=yn&&`TextEvent`in window&&!nr,ir=yn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=Tn(),wn=Cn=Sn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Dd(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){bd(e,0)}function vr(e){if(Gt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(yn){var xr;if(yn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,fn(e)),_n(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var A=typeof Object.is==`function`?Object.is:Ar;function jr(e,t){if(A(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!A(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=yn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Kt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Dd(zr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};yn&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var j=qr(`animationend`),Jr=qr(`animationiteration`),Yr=qr(`animationstart`),Xr=qr(`transitionrun`),Zr=qr(`transitionstart`),Qr=qr(`transitioncancel`),$r=qr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),Mt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=hi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=hi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=hi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-qe(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var M=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(M=e.return;M;)switch(M.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:M=M.return}}function Ki(e){if(e!==M)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Wd(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=df(e)}else t===27?(t=N,Qd(e.type)?(e=uf,uf=null,N=e):N=t):N=M?lf(e.stateNode.nextSibling):null;return!0}function qi(){N=M=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=pe(null),Zi=null,Qi=null;function $i(e,t,n){O(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,me(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;A(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!A(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,F={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function I(){return{controller:new la,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,L=null;function ga(e,t){if(pa===null){var n=pa=[];ma=0,ha=fd(),L={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(_a,_a),t}function _a(){if(--ma===0&&pa!==null){L!==null&&(L.status=`fulfilled`);var e=pa;pa=null,ha=0,L=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=E.S;E.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=pe(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?O(ba,ba.current):O(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:F._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,R=0;function Fa(e){var t=R;return R+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Aa(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case T:return t=Aa(t),f(e,t,n)}if(le(t)||oe(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,sa(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Aa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,sa(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Aa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,sa(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Aa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,sa(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{R=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=L;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ha&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=pe(null),z=pe(0);function eo(e,t){e=Wl,O(z,e),O($a,t),Wl=e|t.baseLanes}function to(){O(z,Wl),O($a,$a.current)}function no(){Wl=z.current,me($a),me(z)}var ro=pe(null),io=null;function ao(e){var t=e.alternate;O(uo,uo.current&1),O(ro,e),io===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){O(uo,uo.current),O(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(O(uo,uo.current),O(ro,e),io===null&&(io=e)):co(e)}function co(){O(uo,uo.current),O(ro,ro.current)}function lo(e){me(ro),io===e&&(io=null),me(uo)}var uo=pe(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function So(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!A(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Vs:Hs,_o=!1,a=n(r,i),_o=!1,go&&(a=Eo(t,n,r,i)),To(e),a}function To(e){E.H=Bs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&ia(e)&&(ac=!0))}function Eo(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Us,o=t(n,r)}while(go);return o}function Do(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Oo(){var e=vo!==0;return vo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function Mo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=ka(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Vs:Hs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===C)return oa(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(Mo(),V,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((po&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Kl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!A(o,e.memoizedState)&&(ac=!0,d&&(n=L,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=Mo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);A(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=B,a=Mo(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!A((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,fs(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||po&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=No(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!A(e,n)}catch{return!0}}function Ko(e){var t=ui(e,2);t!==null&&gu(t,e,2)}function qo(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),_o){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,V,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=B;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=lf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ps.bind(null,B,r),r.dispatch=n,r=qo(!1),a=Is.bind(null,B,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(Mo(),V,e)}function is(e,t,n){if(t=zo(e,t,ts)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===wa?Ea:e}else r=t;t=Mo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=Mo(),n=V;if(n!==null)return is(t,n,e);Mo(),t=t.memoizedState,n=Mo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=No(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return Mo().memoizedState}function ls(e,t,n,r){var i=jo();B.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=Mo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&Co(r,V.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(B.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=No(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=Mo().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),_o){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||po&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),B.lanes|=e,Kl|=e,n)}function Cs(e,t,n,r){return A(n,t)?n:$a.current===null?!(po&42)||po&1073741824&&!(J&261930)?(ac=!0,e.memoizedState=n):(e=hu(),B.lanes|=e,Kl|=e,t):(e=Ss(e,n,r),A(e,t)||(ac=!0),e)}function ws(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Is(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,va(c,r),mu(e)):Fs(e,t,r,mu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,ue,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},mu())}function ks(){return oa($f)}function As(){return Mo().memoizedState}function js(){return Mo().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(gu(r,t,n),Ka(r,t,n)),t={cache:I()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=li(e,t,n,r),n!==null&&(gu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,mu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,A(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return gu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&gu(t,e,2)}function Ls(e){var t=e.alternate;return e===B||t!==null&&t===B}function Rs(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Bs={readContext:oa,use:Fo,useCallback:So,useContext:So,useEffect:So,useImperativeHandle:So,useLayoutEffect:So,useInsertionEffect:So,useMemo:So,useReducer:So,useRef:So,useState:So,useDebugValue:So,useDeferredValue:So,useTransition:So,useSyncExternalStore:So,useId:So,useHostTransitionStatus:So,useFormState:So,useActionState:So,useOptimistic:So,useMemoCache:So,useCacheRefresh:So};Bs.useEffectEvent=So;var Vs={readContext:oa,use:Fo,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(_o){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(_o){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ps.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(jo(),e,t)},useTransition:function(){var e=qo(!1);return e=ws.bind(null,B,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=jo();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Wo.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(P){var n=Pi,r=Ni;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return jo().memoizedState=Ms.bind(null,B)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:oa,use:Fo,useCallback:bs,useContext:oa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Ro,useRef:cs,useState:function(){return Ro(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(Mo(),V.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return Jo(Mo(),V,e,t)},useMemoCache:Io,useCacheRefresh:js};Hs.useEffectEvent=ms;var Us={readContext:oa,use:Fo,useCallback:bs,useContext:oa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Bo,useRef:cs,useState:function(){return Bo(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Mo();return V===null?Ss(n,e,t):Cs(n,V.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=Mo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,V,e,t)},useMemoCache:Io,useCacheRefresh:js};Us.useEffectEvent=ms;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(gu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(gu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(gu(t,e,n),Ka(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){ri(e)}function Xs(e){console.error(e)}function Zs(e){ri(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=Wa(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(P)return t=ro.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=ec(e.stateNode,r,a),qa(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function oc(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ac?(ko(e,t,i),jc(e,t,i)):(P&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref){if(ac=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),to(),co(t)):(Sa(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:F._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),to(),so(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return za(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(oo(t),(e=N)?(e=af(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,M=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ac||ra(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),gu(r,e,s),ic;Ou(),t=mc(e,t,n)}else e=o.treeContext,N=lf(s.nextSibling),M=t,P=!0,Bi=null,Vi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return aa(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ac?(ko(e,t,i),jc(e,t,i)):(P&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ac?(ko(e,t,a),jc(e,t,a)):(P&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Va||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Va||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return qi(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ca()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(uo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(P){if(a?ao(t):co(t),(e=N)?(e=af(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,M=t,N=null)):e=null,e===null)throw Ui(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(ao(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(ac||ra(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),gu(s,e,r),ic;of(c)||Ou(),t=Dc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=lf(c.nextSibling),M=t,P=!0,Bi=null,Vi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ca():(l=F._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return za(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=uo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(uo,o),oc(e,t,r,n),r=P?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ia(e)))}function Nc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),$i(t,F,e.memoizedState.cache),qi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(uo,uo.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:$i(t,F,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!Mc(e,n)&&!(t.flags&128))return ac=!1,Nc(e,t,n);ac=!!(e.flags&131072)}}else ac=!1,P&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Js(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,F,r),r!==o.cache&&na(t,[F],n,!0),Ya(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=Ti(Error(i(424)),t),Yi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=lf(e.firstChild),M=t,P=!0,Bi=null,Vi=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Vd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Fd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&P&&(r=t.stateNode=pf(t.type,t.pendingProps,_e.current),M=t,Vi=!0,a=N,Qd(t.type)?(uf=a,N=lf(r.firstChild)):N=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=nf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,M=t,N=lf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),$f._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=rf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,M=t,N=null,e=!0)),e||Ui(t)),null;case 13:return wc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(F),e===null?(a=xa(),a===null&&(a=K,o=I(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),$i(t,F,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,F,r),r!==a.cache&&na(t,[F],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,F,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw ja=Da,Ta}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t)){if(Tu())e.flags|=8192;else throw ja=Da,Ta}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function zc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(F),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=he.current,Ki(t)?Wi(t,e):(e=pf(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=he.current,Ki(t))Wi(t,o);else{var s=Vd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=M,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Ui(t,!0)}else e=Vd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return be(),e===null&&Cd(t.stateNode.containerInfo),H(t),null;case 10:return ea(t.type),H(t),null;case 19:if(me(uo),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return O(uo,uo.current&1|2),P&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return H(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=uo.current,O(uo,a?n&1|2:n&1),P&&Fi(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(F),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(F),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(uo),null;case 4:return be(),null;case 10:return ea(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&me(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(F),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ea(F),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:me(uo);break;case 10:ea(t.type);break;case 22:case 23:lo(t),no(),e!==null&&me(ba);break;case 24:ea(F)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){X(e,e.return,t)}}}function Kc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[_t]=t}catch(t){X(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[gt]=e,t[_t]=n}catch(t){X(e,e.return,t)}}var nl=!1,rl=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,zd=cp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Uc(5,n);break;case 1:if(Sl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||rl,i=nl;var a=rl;nl=r,(rl=t)&&!a?W(e,n,!!(n.subtreeFlags&8772)):Sl(e,n),nl=i,rl=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:rl||Jc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rl||Jc(n,t);var r=U,i=ul;Qd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),mf(n.stateNode),U=r,ul=i;break;case 5:rl||Jc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null){if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){X(n,t,e)}}break;case 18:U!==null&&(ul?(e=U,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),rl||Wc(4,n,t),dl(e,t,n);break;case 1:rl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:rl=(r=rl)||n.memoizedState!==null,dl(e,t,n),rl=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){X(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){X(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode)}else e.stateNode=Lf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,a=vl,vl=_f(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){X(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=_f(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=rl;if(nl=u||a,rl=d||l,_l(t,e),rl=d,nl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||rl||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Cl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Cl(t);break;case 27:mf(t.stateNode);case 26:case 5:Jc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function W(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:W(i,a,n),Uc(4,a);break;case 1:if(W(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:W(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:W(i,a,n);break;case 31:W(i,a,n),n&&o&4&&pl(i,a);break;case 13:W(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&W(i,a,n),qc(a,a.return);break;case 30:break;default:W(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Kf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=vl;vl=_f(e.stateNode.containerInfo),jl(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var Rl={getCacheForType:function(e){var t=oa(F),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(F).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return G&2&&J!==0?J&-J:E.T===null?pt():fd()}function hu(){if(Yl===0){if(!(J&536870912)||P){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912}return e=ro.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,J,Yl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(ql|=n),Gl===4&&bu(e,J,Yl,!1)),id(e))}function _u(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||nt(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Fe(),10<a)){if(bu(r,t,Yl,!Vl),tt(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!A(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function xu(){return G&6?!0:(ad(0,!1),!1)}function Su(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,Ao(e),Pa=null,R=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function wu(e,t){B=null,E.H=Bs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Qs(e,Ti(t,e.current)))}function Tu(){var e=ro.current;return e===null?!0:(J&4194048)===J?io===null:(J&62914560)===J||J&536870912?e===io:!1}function Eu(){var e=E.H;return E.H=Bs,e===null?Bs:e}function Du(){var e=E.A;return E.A=Rl,e}function Ou(){Gl=4,Vl||(J&4194048)!==J&&ro.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||K===null||bu(K,J,Yl,!1)}function ku(e,t,n){var r=G;G|=2;var i=Eu(),a=Du();(K!==e||J!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,si()),o}function Au(){for(;q!==null;)Nu(q)}function ju(e,t){var n=G;G|=2;var r=Eu(),a=Du();K!==e||J!==t?(ru=null,nu=Fe()+500,Cu(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Pu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),id(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Pu(t)):(Y=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Gf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Iu(u))}break b}}Y=0,Bl=null,Fu(e,t,o,5);break;case 6:Y=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Qi=Zi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,si(),Gl):0}function Mu(){for(;q!==null&&!Ne();)Nu(q)}function Nu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Fu(e,t,n,r){Qi=Zi=null,Ao(t),Pa=null,R=0;var i=t.return;try{if(rc(e,i,t,n,J)){Gl=1,Qs(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Qs(e,Ti(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(ze,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{sl(e,t,n)}finally{G=s,D.p=a,E.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{yl(t,e);var a=Bd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{cl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,Pe();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=ft(cu),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,ad(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Hu(e,t)}}function Gu(e,t,n){t=Ti(n,t),t=ec(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(ot(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ti(n,e),n=tc(2),r=Ga(t,n,2),r!==null&&(nc(n,r,t,e),ot(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Fe()-eu?!(G&2)&&Cu(e,0):Jl|=n,Xl===J&&(Xl=0)),id(e)}function Ju(e,t){t===0&&(t=it()),e=ui(e,t),e!==null&&(ot(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return je(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ud(r,a))}r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Fe(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=ld.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){G&6?je(Le,od):sd()})}function fd(){if(rd===0){var e=ha;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<ti.length;gd++){var _d=ti[gd];ni(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ni(j,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,At.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case j:case Jr:case Yr:l=Vn;break;case $r:l=k;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`toggle`:case`beforetoggle`:l=$n}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c)){if(br)v=kr;else{v=Dr;var y=Er}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,lr=!0)),y=Dd(r,x),0<y.length&&(x=new Un(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=vn(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e!==Gd&&(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body)}n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=D.d;D.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=Ot(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);kt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=Ot(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),kt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=Ot(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),kt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=_e.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Jt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),kt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Jt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,kt(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=I(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function np(e){return e?(e=pi,e):pi}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(gu(n,e,t),Ka(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=dt(t);var n=ui(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,dp(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,dp(e,t,n,r)}finally{D.p=a,E.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Td(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}id(a),!(G&6)&&(nu=Fe()+500,ad(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Td(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function fp(e){return e=fn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[vt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.8`)throw Error(i(527,Rp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{We=Bp.inject(zp),Ge=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[vt]=t.current,Cd(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),S=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,C=/^[\\/]{2}/;function w(e,t){return t+e.replace(/\\/g,`/`)}var ee=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ne(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return oe(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:se(t)}return le(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function re(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ie(){return Math.random().toString(36).substring(2,10)}function ae(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function oe(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ce(t):t,state:n,key:t&&t.key||r||ie(),mask:i}}function se({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ce(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function le(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:oe(h.location,e,t);n&&n(r,e),l=u()+1;let d=ae(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:oe(h.location,e,t);n&&n(r,e),l=u();let i=ae(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return E(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function E(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:se(t);return i=i.replace(/ $/,`%20`),!n&&C.test(i)&&(i=r+i),new URL(i,r)}function D(e,t,n=`/`){return ue(e,t,n,!1)}function ue(e,t,n,r,i){let a=Oe((typeof t==`string`?ce(t):t).pathname||`/`,n);if(a==null)return null;let o=i??de(e),s=null,c=De(a);for(let e=0;s==null&&e<o.length;++e)s=Ce(o[e],c,r);return s}function de(e){let t=fe(e);return me(t),t}function fe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ie([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),fe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:xe(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Ee(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of pe(e.path))a(e,t,!0,n)}),t}function pe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=pe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function me(e){e.sort((e,t)=>e.score===t.score?Se(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var O=/^:[\w-]+$/,he=3,ge=2,_e=1,ve=10,ye=-2,be=e=>e===`*`;function xe(e,t){let n=e.split(`/`),r=n.length;return n.some(be)&&(r+=ye),t&&(r+=ge),n.filter(e=>!be(e)).reduce((e,t)=>e+(O.test(t)?he:t===``?_e:ve),r)}function Se(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ce(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Te(u,l,s.matcher,s.compiledParams):we(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ie([a,d.pathname]),pathnameBase:Re(Ie([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Ie([a,d.pathnameBase]))}return o}function we(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ee(e.path,e.caseSensitive,e.end);return Te(e,t,n,r)}function Te(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ee(e,t=!1,n=!0){re(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function De(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return re(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Oe(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function ke(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ce(e):e,a;return n?(n=Fe(n),a=n.startsWith(`/`)?Ae(n.substring(1),`/`):Ae(n,t)):a=t,{pathname:a,search:ze(r),hash:Be(i)}}function Ae(e,t){let n=Le(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function je(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Me(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ne(e){let t=Me(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Pe(e,t,n,r=!1){let i;typeof e==`string`?i=ce(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),je(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),je(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),je(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ke(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Fe=e=>e.replace(/[\\/]{2,}/g,`/`),Ie=e=>Fe(e.join(`/`)),Le=e=>e.replace(/\/+$/,``),Re=e=>Le(e).replace(/^\/*/,`/`),ze=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Be=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ve=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function He(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ue(e){return Ie(e.map(e=>e.route.path).filter(Boolean))||`/`}var We=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ge(e,t){let n=e;if(typeof n!=`string`||!S.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(We)try{let e=new URL(window.location.href),r=C.test(n)?new URL(w(n,e.protocol)):new URL(n),a=Oe(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{re(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ke=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ke);var qe=[`GET`,...Ke];new Set(qe);var Je=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ye(e){try{return Je.includes(new URL(e).protocol)}catch{return!1}}var Xe=x.createContext(null);Xe.displayName=`DataRouter`;var Ze=x.createContext(null);Ze.displayName=`DataRouterState`;var Qe=x.createContext(!1);function $e(){return x.useContext(Qe)}var et=x.createContext({isTransitioning:!1});et.displayName=`ViewTransition`;var tt=x.createContext(new Map);tt.displayName=`Fetchers`;var nt=x.createContext(null);nt.displayName=`Await`;var rt=x.createContext(null);rt.displayName=`Navigation`;var it=x.createContext(null);it.displayName=`Location`;var at=x.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName=`Route`;var ot=x.createContext(null);ot.displayName=`RouteError`;var st=`REACT_ROUTER_ERROR`,ct=`REDIRECT`,lt=`ROUTE_ERROR_RESPONSE`;function ut(e){if(e.startsWith(`${st}:${ct}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function dt(e){if(e.startsWith(`${st}:${lt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ve(t.status,t.statusText,t.data)}catch{}}function ft(e,{relative:t}={}){T(pt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(rt),{hash:i,pathname:a,search:o}=bt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ie([n,a])),r.createHref({pathname:s,search:o,hash:i})}function pt(){return x.useContext(it)!=null}function mt(){return T(pt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(it).location}var ht=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function gt(e){x.useContext(rt).static||x.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=x.useContext(at);return e?Lt():vt()}function vt(){T(pt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Xe),{basename:t,navigator:n}=x.useContext(rt),{matches:r}=x.useContext(at),{pathname:i}=mt(),a=JSON.stringify(Ne(r)),o=x.useRef(!1);return gt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(re(o.current,ht),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Pe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ie([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function yt(){let{matches:e}=x.useContext(at);return e[e.length-1]?.params??{}}function bt(e,{relative:t}={}){let{matches:n}=x.useContext(at),{pathname:r}=mt(),i=JSON.stringify(Ne(n));return x.useMemo(()=>Pe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function xt(e,t){return St(e,t)}function St(e,t,n){T(pt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(rt),{matches:i}=x.useContext(at),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;zt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=mt(),d;if(t){let e=typeof t==`string`?ce(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):D(e,{pathname:p});re(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),re(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=kt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ie([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ie([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(it.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Ct(){let e=It(),t=He(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var wt=x.createElement(Ct,null),Tt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=dt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(at.Provider,{value:this.props.routeContext},x.createElement(ot.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Dt,{error:e},t):t}};Tt.contextType=Qe;var Et=new WeakMap;function Dt({children:e,error:t}){let{basename:n}=x.useContext(rt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ut(t.digest);if(e){let r=Et.get(t);if(r)throw r;let i=Ge(e.location,n),a=i.absoluteURL||i.to;if(Ye(a))throw Error(`Invalid redirect location`);if(We&&!Et.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Et.set(t,n),n}}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Ot({routeContext:e,match:t,children:n}){let r=x.useContext(Xe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(at.Provider,{value:e},n)}function kt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ue(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||wt,o&&(s<0&&c===0?(zt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(Ot,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Tt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function At(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jt(e){let t=x.useContext(Xe);return T(t,At(e)),t}function Mt(e){let t=x.useContext(Ze);return T(t,At(e)),t}function Nt(e){let t=x.useContext(at);return T(t,At(e)),t}function Pt(e){let t=Nt(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ft(){return Pt(`useRouteId`)}function It(){let e=x.useContext(ot),t=Mt(`useRouteError`),n=Pt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Lt(){let{router:e}=jt(`useNavigate`),t=Pt(`useNavigate`),n=x.useRef(!1);return gt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{re(n.current,ht),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Rt={};function zt(e,t,n){!t&&!Rt[e]&&(Rt[e]=!0,re(!1,n))}x.memo(Bt);function Bt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return St(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Vt(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ht({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!pt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ce(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=Oe(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return re(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(rt.Provider,{value:c},x.createElement(it.Provider,{children:t,value:h}))}function Ut({children:e,location:t}){return xt(Wt(e),t)}x.Component;function Wt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Wt(e.props.children,i));return}T(e.type===Vt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Wt(e.props.children,i)),n.push(a)}),n}var Gt=`get`,Kt=`application/x-www-form-urlencoded`;function qt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Jt(e){return qt(e)&&e.tagName.toLowerCase()===`button`}function Yt(e){return qt(e)&&e.tagName.toLowerCase()===`form`}function Xt(e){return qt(e)&&e.tagName.toLowerCase()===`input`}function Zt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qt(e,t){return e.button===0&&(!t||t===`_self`)&&!Zt(e)}function $t(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function en(e,t){let n=$t(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var tn=null;function nn(){if(tn===null)try{new FormData(document.createElement(`form`),0),tn=!1}catch{tn=!0}return tn}var rn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function an(e){return e!=null&&!rn.has(e)?(re(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kt}"`),null):e}function on(e,t){let n,r,i,a,o;if(Yt(e)){let o=e.getAttribute(`action`);r=o?Oe(o,t):null,n=e.getAttribute(`method`)||Gt,i=an(e.getAttribute(`enctype`))||Kt,a=new FormData(e)}else if(Jt(e)||Xt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Oe(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Gt,i=an(e.getAttribute(`formenctype`))||an(o.getAttribute(`enctype`))||Kt,a=new FormData(o,e),!nn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(qt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Gt,r=null,i=Kt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function sn(e,t){if(e===!1||e==null)throw Error(t)}function cn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Oe(i.pathname,t)===`/`?`${Le(t)}/_root.${r}`:`${Le(i.pathname)}.${r}`,i}async function ln(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function un(e){return e!=null&&typeof e.page==`string`}function dn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function fn(e,t,n){return _n((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ln(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(dn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function pn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function mn(e,t,{includeHydrateFallback:n}={}){return hn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function hn(e){return[...new Set(e)]}function gn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function _n(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!un(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(gn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function vn(){let e=x.useContext(Xe);return sn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function yn(){let e=x.useContext(Ze);return sn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var bn=x.createContext(void 0);bn.displayName=`FrameworkContext`;function xn(){let e=x.useContext(bn);return sn(e,`You must render this element inside a <HydratedRouter> element`),e}function Sn(e,t){let n=x.useContext(bn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Cn(s,p),onBlur:Cn(c,m),onMouseEnter:Cn(l,p),onMouseLeave:Cn(u,m),onTouchStart:Cn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Cn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function wn({page:e,...t}){let n=$e(),{nonce:r}=xn(),{router:i}=vn(),a=x.useMemo(()=>D(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(En,{page:e,matches:a,...t}):x.createElement(Dn,{page:e,matches:a,...t})):null}function Tn(e){let{manifest:t,routeModules:n}=xn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return fn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function En({page:e,matches:t,...n}){let r=mt(),{future:i}=xn(),{basename:a}=vn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=cn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Dn({page:e,matches:t,...n}){let r=mt(),{future:i,manifest:a,routeModules:o}=xn(),{basename:s}=vn(),{loaderData:c,matches:l}=yn(),u=x.useMemo(()=>pn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>pn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=cn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>mn(d,a),[d,a]),m=Tn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function On(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{kn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function An({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=ne({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Ht,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var jn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(rt),v=typeof l==`string`&&S.test(l),y=Ge(l,h);l=y.to;let b=ft(l,{relative:r}),C=mt(),w=null;if(o){let e=Pe(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ie([h,e.pathname])),w=g.createHref(e)}let[ee,te,ne]=Sn(n,p),T=In(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||T(t)}let ie=!(y.isExternal||i),ae=x.createElement(`a`,{...p,...ne,href:(ie?w:void 0)||y.absoluteURL||b,onClick:ie?re:e,ref:On(m,te),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return ee&&!v?x.createElement(x.Fragment,null,ae,x.createElement(wn,{page:b})):ae});jn.displayName=`Link`;var Mn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=bt(a,{relative:c.relative}),d=mt(),f=x.useContext(Ze),{navigator:p,basename:m}=x.useContext(rt),h=f!=null&&Hn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Oe(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,ee;ee=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return x.createElement(jn,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Mn.displayName=`NavLink`;var Nn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Gt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(rt),g=Bn(),_=Vn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&S.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Nn.displayName=`Form`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=x.useContext(Xe);return T(t,Pn(e)),t}function In(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=_t(),d=mt(),f=bt(e,{relative:o});return x.useCallback(p=>{if(Qt(p,t)){p.preventDefault();let t=n===void 0?se(d)===se(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function Ln(e){re(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=x.useRef($t(e)),n=x.useRef(!1),r=mt(),i=x.useMemo(()=>en(r.search,n.current?null:t.current),[r.search]),a=_t();return[i,x.useCallback((e,t)=>{let r=$t(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=x.useContext(rt),n=Ft(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=on(e,t);if(a.navigate===!1){let e=a.fetcherKey||zn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=x.useContext(rt),r=x.useContext(at);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...bt(e||`.`,{relative:t})},o=mt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ie([n,a.pathname])),se(a)}function Hn(e,{relative:t}={}){let n=x.useContext(et);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=bt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Oe(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Oe(n.nextLocation.pathname,r)||n.nextLocation.pathname;return we(i.pathname,o)!=null||we(i.pathname,a)!=null}var Un=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Wn=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Gn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Kn=e=>{let t=Gn(e);return t.charAt(0).toUpperCase()+t.slice(1)},qn={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Jn=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Yn=(0,x.createContext)({}),Xn=()=>(0,x.useContext)(Yn),Zn=(0,x.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=Xn()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,x.createElement)(`svg`,{ref:c,...qn,width:t??l??qn.width,height:t??l??qn.height,stroke:e??f,strokeWidth:m,className:Un(`lucide`,p,i),...!a&&!Jn(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,x.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),k=(e,t)=>{let n=(0,x.forwardRef)(({className:n,...r},i)=>(0,x.createElement)(Zn,{ref:i,iconNode:t,className:Un(`lucide-${Wn(Kn(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Kn(e),n},Qn=k(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),$n=k(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),er=k(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),tr=k(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),nr=k(`briefcase`,[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,key:`jecpp`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),rr=k(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),ir=k(`calendar-days`,[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M8 13h.01`,key:`1sbv64`}],[`path`,{d:`M12 13h.01`,key:`y0uutt`}],[`path`,{d:`M16 13h.01`,key:`wip0gl`}],[`path`,{d:`M8 17h.01`,key:`p3bg7i`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}],[`path`,{d:`M16 17h.01`,key:`ql8jdd`}]]),ar=k(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),or=k(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),sr=k(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),cr=k(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),lr=k(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),ur=k(`clipboard-check`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),dr=k(`clipboard-list`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]),fr=k(`clock-3`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6h4`,key:`135r8i`}]]),pr=k(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),mr=k(`earth`,[[`path`,{d:`M21.54 15H17a2 2 0 0 0-2 2v4.54`,key:`1djwo0`}],[`path`,{d:`M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17`,key:`1tzkfa`}],[`path`,{d:`M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05`,key:`14pb5j`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),hr=k(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),gr=k(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),_r=k(`file-check`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`m9 15 2 2 4-4`,key:`1grp1n`}]]),vr=k(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),yr=k(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),br=k(`headphones`,[[`path`,{d:`M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,key:`1xhozi`}]]),xr=k(`heart-handshake`,[[`path`,{d:`M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762`,key:`17lmqv`}]]),Sr=k(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),Cr=k(`images`,[[`path`,{d:`m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16`,key:`9kzy35`}],[`path`,{d:`M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2`,key:`1t0f0t`}],[`circle`,{cx:`13`,cy:`7`,r:`1`,fill:`currentColor`,key:`1obus6`}],[`rect`,{x:`8`,y:`2`,width:`14`,height:`14`,rx:`2`,key:`1gvhby`}]]),wr=k(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),Tr=k(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),Er=k(`list-checks`,[[`path`,{d:`M13 5h8`,key:`a7qcls`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 19h8`,key:`c3s6r1`}],[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`path`,{d:`m3 7 2 2 4-4`,key:`1obspn`}]]),Dr=k(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Or=k(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),kr=k(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),Ar=k(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),A=k(`message-circle`,[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}]]),jr=k(`navigation`,[[`polygon`,{points:`3 11 22 2 13 21 11 13 3 11`,key:`1ltx0t`}]]),Mr=k(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Nr=k(`plane`,[[`path`,{d:`M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z`,key:`1v9wt8`}]]),Pr=k(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),Fr=k(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Ir=k(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),Lr=k(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Rr=k(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),zr=k(`user-round`,[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]]),Br=k(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Vr=k(`utensils-crossed`,[[`path`,{d:`m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8`,key:`n7qcjb`}],[`path`,{d:`M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7`,key:`d0u48b`}],[`path`,{d:`m2.1 21.8 6.4-6.3`,key:`yn04lh`}],[`path`,{d:`m19 5-7 7`,key:`194lzd`}]]),Hr=k(`wallet-cards`,[[`path`,{d:`M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21`,key:`1vwh6y`}],[`path`,{d:`M3 7h18`,key:`1uiuf2`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}]]),Ur=k(`wallet`,[[`path`,{d:`M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,key:`18etb6`}],[`path`,{d:`M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`,key:`xoc0q4`}]]),Wr=k(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Gr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Kr=o(((e,t)=>{t.exports=Gr()})),qr=c(g(),1),j=Kr();function Jr(){return(0,j.jsxs)(`div`,{className:`relative z-50 w-full overflow-hidden border-b border-white/5 bg-[#040814] text-white`,children:[(0,j.jsxs)(`div`,{className:`pointer-events-none absolute inset-0 opacity-40`,children:[(0,j.jsx)(`div`,{className:`absolute -left-20 top-0 h-full w-1/3 bg-gradient-to-r from-cyan-500/10 to-transparent blur-2xl`}),(0,j.jsx)(`div`,{className:`absolute -right-20 top-0 h-full w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent blur-2xl`})]}),(0,j.jsxs)(`div`,{className:`relative mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,j.jsxs)(`span`,{className:`relative flex h-2 w-2`,children:[(0,j.jsx)(`span`,{className:`absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75`}),(0,j.jsx)(`span`,{className:`relative inline-flex h-2 w-2 rounded-full bg-cyan-500`})]}),(0,j.jsxs)(`span`,{className:`text-[11px] font-medium tracking-wide text-white/80 sm:text-[12.5px]`,children:[(0,j.jsx)(`span`,{className:`sm:hidden`,children:`Trusted Medical Career Guidance`}),(0,j.jsx)(`span`,{className:`hidden sm:inline`,children:`Your Trusted Partner for Medical Education & Career Guidance`})]})]}),(0,j.jsxs)(`div`,{className:`flex items-center gap-2 sm:gap-3`,children:[(0,j.jsxs)(`a`,{href:`tel:+918830451660`,className:`group flex items-center gap-2 rounded-full py-1 pl-1 pr-2 sm:pr-3 transition-all hover:bg-white/5`,"aria-label":`Call us at 8830451660`,children:[(0,j.jsx)(`span`,{className:`flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 ring-1 ring-inset ring-cyan-500/20 transition-all group-hover:bg-cyan-500/20 group-hover:text-cyan-300`,children:(0,j.jsx)(Mr,{size:13,strokeWidth:2.5})}),(0,j.jsx)(`span`,{className:`hidden text-[12.5px] font-medium text-white/90 transition-colors group-hover:text-cyan-300 md:inline`,children:`8830451660`})]}),(0,j.jsxs)(`a`,{href:`tel:+918237794917`,className:`group hidden items-center gap-2 rounded-full py-1 pl-1 pr-3 transition-all hover:bg-white/5 md:flex`,"aria-label":`Call us at 8237794917`,children:[(0,j.jsx)(`span`,{className:`flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 ring-1 ring-inset ring-cyan-500/20 transition-all group-hover:bg-cyan-500/20 group-hover:text-cyan-300`,children:(0,j.jsx)(Mr,{size:13,strokeWidth:2.5})}),(0,j.jsx)(`span`,{className:`text-[12.5px] font-medium text-white/90 transition-colors group-hover:text-cyan-300`,children:`8237794917`})]}),(0,j.jsx)(`span`,{className:`hidden h-6 w-px bg-white/10 md:block`}),(0,j.jsxs)(`a`,{href:`https://wa.me/918830451660`,target:`_blank`,rel:`noopener noreferrer`,className:`group flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 py-1 pl-1 pr-3 shadow-[0_0_15px_-3px_rgba(16,185,129,0.5)] transition-all hover:shadow-[0_0_20px_-2px_rgba(16,185,129,0.8)] hover:from-emerald-400 hover:to-green-500`,"aria-label":`Chat with us on WhatsApp`,children:[(0,j.jsx)(`span`,{className:`flex h-7 w-7 items-center justify-center rounded-full bg-black/10 backdrop-blur-sm`,children:(0,j.jsx)(A,{size:14,strokeWidth:2.5,className:`text-white`})}),(0,j.jsx)(`span`,{className:`text-[12.5px] font-semibold text-white`,children:`WhatsApp Us`})]})]})]}),(0,j.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent`})]})}var Yr=(0,x.createContext)({});function Xr(e){let t=(0,x.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Zr=typeof window<`u`?x.useLayoutEffect:x.useEffect,Qr=(0,x.createContext)(null);function $r(e,t){e.indexOf(t)===-1&&e.push(t)}function ei(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var ti=(e,t,n)=>n>t?t:n<e?e:n,ni={},ri=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ii=e=>typeof e==`object`&&!!e,ai=e=>/^0[^.\s]+$/u.test(e);function oi(e){let t;return()=>(t===void 0&&(t=e()),t)}var si=e=>e,ci=(...e)=>e.reduce((e,t)=>n=>t(e(n))),li=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},ui=class{constructor(){this.subscriptions=[]}add(e){return $r(this.subscriptions,e),()=>ei(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},di=e=>e*1e3,fi=e=>e/1e3,pi=(e,t)=>t?1e3/t*e:0,mi=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,hi=1e-7,gi=12;function _i(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=mi(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>hi&&++s<gi);return o}function vi(e,t,n,r){if(e===t&&n===r)return si;let i=t=>_i(t,0,1,e,n);return e=>e===0||e===1?e:mi(i(e),t,r)}var yi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,bi=e=>t=>1-e(1-t),xi=vi(.33,1.53,.69,.99),Si=bi(xi),Ci=yi(Si),wi=e=>e>=1?1:(e*=2)<1?.5*Si(e):.5*(2-2**(-10*(e-1))),Ti=e=>1-Math.sin(Math.acos(e)),Ei=bi(Ti),Di=yi(Ti),Oi=vi(.42,0,1,1),ki=vi(0,0,.58,1),Ai=vi(.42,0,.58,1),ji=e=>Array.isArray(e)&&typeof e[0]!=`number`,Mi=e=>Array.isArray(e)&&typeof e[0]==`number`,Ni={linear:si,easeIn:Oi,easeInOut:Ai,easeOut:ki,circIn:Ti,circInOut:Di,circOut:Ei,backIn:Si,backInOut:Ci,backOut:xi,anticipate:wi},Pi=e=>typeof e==`string`,Fi=e=>{if(Mi(e)){e.length;let[t,n,r,i]=e;return vi(t,n,r,i)}return Pi(e)?(Ni[e],`${e}`,Ni[e]):e},Ii=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Li(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var Ri=40;function zi(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ii.reduce((e,t)=>(e[t]=Li(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=ni.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Ri),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Ii.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Ii.length;t++)o[Ii[t]].cancel(e)},state:i,steps:o}}var{schedule:M,cancel:N,state:P,steps:Bi}=zi(typeof requestAnimationFrame<`u`?requestAnimationFrame:si,!0),Vi;function Hi(){Vi=void 0}var Ui={now:()=>(Vi===void 0&&Ui.set(P.isProcessing||ni.useManualTiming?P.timestamp:performance.now()),Vi),set:e=>{Vi=e,queueMicrotask(Hi)}},Wi=e=>t=>typeof t==`string`&&t.startsWith(e),Gi=Wi(`--`),Ki=Wi(`var(--`),qi=e=>Ki(e)?Ji.test(e.split(`/*`)[0].trim()):!1,Ji=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Yi(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Xi={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Zi={...Xi,transform:e=>ti(0,1,e)},Qi={...Xi,default:1},$i=e=>Math.round(e*1e5)/1e5,ea=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ta(e){return e==null}var na=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ra=(e,t)=>n=>!!(typeof n==`string`&&na.test(n)&&n.startsWith(e)||t&&!ta(n)&&Object.prototype.hasOwnProperty.call(n,t)),ia=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(ea);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},aa=e=>ti(0,255,e),oa={...Xi,transform:e=>Math.round(aa(e))},sa={test:ra(`rgb`,`red`),parse:ia(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+oa.transform(e)+`, `+oa.transform(t)+`, `+oa.transform(n)+`, `+$i(Zi.transform(r))+`)`};function ca(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var la={test:ra(`#`),parse:ca,transform:sa.transform},ua=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),da=ua(`deg`),F=ua(`%`),I=ua(`px`),fa=ua(`vh`),pa=ua(`vw`),ma={...F,parse:e=>F.parse(e)/100,transform:e=>F.transform(e*100)},ha={test:ra(`hsl`,`hue`),parse:ia(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+F.transform($i(t))+`, `+F.transform($i(n))+`, `+$i(Zi.transform(r))+`)`},L={test:e=>sa.test(e)||la.test(e)||ha.test(e),parse:e=>sa.test(e)?sa.parse(e):ha.test(e)?ha.parse(e):la.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?sa.transform(e):ha.transform(e),getAnimatableNone:e=>{let t=L.parse(e);return t.alpha=0,L.transform(t)}},ga=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function _a(e){return isNaN(e)&&typeof e==`string`&&(e.match(ea)?.length||0)+(e.match(ga)?.length||0)>0}var va=`number`,ya=`color`,ba=`var`,xa=`var(`,Sa="${}",Ca=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wa(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Ca,e=>(L.test(e)?(r.color.push(a),i.push(ya),n.push(L.parse(e))):e.startsWith(xa)?(r.var.push(a),i.push(ba),n.push(e)):(r.number.push(a),i.push(va),n.push(parseFloat(e))),++a,Sa)).split(Sa),indexes:r,types:i}}function Ta(e){return wa(e).values}function Ea({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===va?$i(r[a]):e===ya?L.transform(r[a]):r[a]}return i}}function Da(e){return Ea(wa(e))}var Oa=e=>typeof e==`number`?0:L.test(e)?L.getAnimatableNone(e):e,ka=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Oa(e);function Aa(e){let t=wa(e);return Ea(t)(t.values.map((e,n)=>ka(e,t.split[n])))}var ja={test:_a,parse:Ta,createTransformer:Da,getAnimatableNone:Aa};function Ma(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Na({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Ma(s,r,e+1/3),a=Ma(s,r,e),o=Ma(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Pa(e,t){return n=>n>0?t:e}var R=(e,t,n)=>e+(t-e)*n,Fa=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ia=[la,sa,ha],La=e=>Ia.find(t=>t.test(e));function Ra(e){let t=La(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===ha&&(n=Na(n)),n}var za=(e,t)=>{let n=Ra(e),r=Ra(t);if(!n||!r)return Pa(e,t);let i={...n};return e=>(i.red=Fa(n.red,r.red,e),i.green=Fa(n.green,r.green,e),i.blue=Fa(n.blue,r.blue,e),i.alpha=R(n.alpha,r.alpha,e),sa.transform(i))},Ba=new Set([`none`,`hidden`]);function Va(e,t){return Ba.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Ha(e,t){return n=>R(e,t,n)}function Ua(e){return typeof e==`number`?Ha:typeof e==`string`?qi(e)?Pa:L.test(e)?za:qa:Array.isArray(e)?Wa:typeof e==`object`?L.test(e)?za:Ga:Pa}function Wa(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Ua(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ga(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ua(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ka(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var qa=(e,t)=>{let n=ja.createTransformer(t),r=wa(e),i=wa(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ba.has(e)&&!i.values.length||Ba.has(t)&&!r.values.length?Va(e,t):ci(Wa(Ka(r,i),i.values),n):(`${e}${t}`,Pa(e,t))};function Ja(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?R(e,t,n):Ua(e)(e,t)}var Ya=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>M.update(t,e),stop:()=>N(t),now:()=>P.isProcessing?P.timestamp:Ui.now()}},Xa=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Za=2e4;function Qa(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function $a(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Qa(r),Za);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:fi(i)}}var z={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function eo(e,t){return e*Math.sqrt(1-t*t)}var to=12;function no(e,t,n){let r=n;for(let n=1;n<to;n++)r-=e(r)/t(r);return r}var ro=.001;function io({duration:e=z.duration,bounce:t=z.bounce,velocity:n=z.velocity,mass:r=z.mass}){let i,a;z.maxDuration;let o=1-t;o=ti(z.minDamping,z.maxDamping,o),e=ti(z.minDuration,z.maxDuration,fi(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=eo(t,o),c=Math.exp(-i);return ro-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=eo(t**2,o);return(-i(t)+ro>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=no(i,a,s);if(e=di(e),isNaN(c))return{stiffness:z.stiffness,damping:z.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var ao=[`duration`,`bounce`],oo=[`stiffness`,`damping`,`mass`];function so(e,t){return t.some(t=>e[t]!==void 0)}function co(e){let t={velocity:z.velocity,stiffness:z.stiffness,damping:z.damping,mass:z.mass,isResolvedFromDuration:!1,...e};if(!so(e,oo)&&so(e,ao)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ti(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:z.mass,stiffness:i,damping:a}}else{let n=io({...e,velocity:0});t={...t,...n,mass:z.mass},t.isResolvedFromDuration=!0}}return t}function lo(e=z.visualDuration,t=z.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=co({...n,velocity:-fi(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=fi(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?z.restSpeed.granular:z.restSpeed.default,i||=v?z.restDelta.granular:z.restDelta.default;let y,b,x,S,C,w;if(h<1)x=eo(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let ee={calculatedDuration:p&&d||null,velocity:e=>di(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=di(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=di(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Qa(ee),Za),t=Xa(t=>ee.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return ee}lo.applyToOptions=e=>{let t=$a(e,100,lo);return e.ease=t.ease,e.duration=di(t.duration),e.type=`keyframes`,e};var uo=5;function fo(e,t,n){let r=Math.max(t-uo,0);return pi(n-e(r),t-r)}function po({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=lo({keyframes:[f.value,m(f.value)],velocity:fo(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function B(e,t,n){let r=[],i=n||ni.mix||Ja,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=ci(Array.isArray(t)?t[n]||si:t,a)),r.push(a)}return r}function V(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=B(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=li(e[r],e[r+1],n);return s[r](i)};return n?t=>l(ti(e[0],e[a-1],t)):l}function mo(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=li(0,t,r);e.push(R(n,1,i))}}function ho(e){let t=[0];return mo(t,e.length-1),t}function go(e,t){return e.map(e=>e*t)}function _o(e,t){return e.map(()=>t||Ai).splice(0,e.length-1)}function vo({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=ji(r)?r.map(Fi):Fi(r),a={done:!1,value:t[0]},o=V(go(n&&n.length===t.length?n:ho(t),e),t,{ease:Array.isArray(i)?i:_o(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var yo=e=>e!==null;function bo(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(yo),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var xo={decay:po,inertia:po,tween:vo,keyframes:vo,spring:lo};function So(e){typeof e.type==`string`&&(e.type=xo[e.type])}var Co=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},wo=e=>e/100,To=class extends Co{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Ui.now()&&this.tick(Ui.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;So(e);let{type:t=vo,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||vo;s!==vo&&typeof o[0]!=`number`&&(this.mixKeyframes=ci(wo,Ja(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Qa(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=ti(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==po&&(b.value=bo(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return fi(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+fi(e)}get time(){return fi(this.currentTime)}set time(e){e=di(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return fo(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Ui.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=fi(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Ya,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Ui.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Eo(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Do=e=>e*180/Math.PI,Oo=e=>Ao(Do(Math.atan2(e[1],e[0]))),ko={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Oo,rotateZ:Oo,skewX:e=>Do(Math.atan(e[1])),skewY:e=>Do(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ao=e=>(e%=360,e<0&&(e+=360),e),jo=Oo,Mo=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),No=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Po={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Mo,scaleY:No,scale:e=>(Mo(e)+No(e))/2,rotateX:e=>Ao(Do(Math.atan2(e[6],e[5]))),rotateY:e=>Ao(Do(Math.atan2(-e[2],e[0]))),rotateZ:jo,rotate:jo,skewX:e=>Do(Math.atan(e[4])),skewY:e=>Do(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Fo(e){return+!!e.includes(`scale`)}function Io(e,t){if(!e||e===`none`)return Fo(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Po,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=ko,i=t}if(!i)return Fo(t);let a=r[t],o=i[1].split(`,`).map(Ro);return typeof a==`function`?a(o):o[a]}var Lo=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Io(n,t)};function Ro(e){return parseFloat(e.trim())}var zo=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Bo=new Set([...zo,`pathRotation`]),Vo=e=>e===Xi||e===I,Ho=new Set([`x`,`y`,`z`]),Uo=zo.filter(e=>!Ho.has(e));function Wo(e){let t=[];return Uo.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Go={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Io(t,`x`),y:(e,{transform:t})=>Io(t,`y`)};Go.translateX=Go.x,Go.translateY=Go.y;var Ko=new Set,qo=!1,Jo=!1,Yo=!1;function Xo(){if(Jo){let e=Array.from(Ko).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Wo(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Jo=!1,qo=!1,Ko.forEach(e=>e.complete(Yo)),Ko.clear()}function Zo(){Ko.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Jo=!0)})}function Qo(){Yo=!0,Zo(),Xo(),Yo=!1}var $o=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Ko.add(this),qo||(qo=!0,M.read(Zo),M.resolveKeyframes(Xo))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Eo(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ko.delete(this)}cancel(){this.state===`scheduled`&&(Ko.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},es=e=>e.startsWith(`--`);function ts(e,t,n){es(t)?e.style.setProperty(t,n):e.style[t]=n}var ns={};function rs(e,t){let n=oi(e);return()=>ns[t]??n()}var is=rs(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),as=rs(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),os=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ss={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:os([0,.65,.55,1]),circOut:os([.55,0,1,.45]),backIn:os([.31,.01,.66,-.59]),backOut:os([.33,1.53,.69,.99])};function cs(e,t){if(e)return typeof e==`function`?as()?Xa(e,t):`ease-out`:Mi(e)?os(e):Array.isArray(e)?e.map(e=>cs(e,t)||ss.easeOut):ss[e]}function ls(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=cs(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function us(e){return typeof e==`function`&&`applyToOptions`in e}function ds({type:e,...t}){return us(e)&&as()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var fs=class extends Co{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=ds(e);this.animation=ls(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=bo(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),ts(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return fi(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+fi(e)}get time(){return fi(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=di(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&is()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),si):r(this)}},ps={anticipate:wi,backInOut:Ci,circInOut:Di};function ms(e){return e in ps}function hs(e){typeof e.ease==`string`&&ms(e.ease)&&(e.ease=ps[e.ease])}var gs=10,_s=class extends fs{constructor(e){hs(e),So(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new To({...a,autoplay:!1}),s=Math.max(gs,Ui.now()-this.startTime),c=ti(0,gs,s-gs),l=o.sample(s).value,{name:u}=this.options;i&&u&&ts(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},vs=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(ja.test(e)||e===`0`)&&!e.startsWith(`url(`));function ys(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function bs(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=vs(i,t),s=vs(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:ys(e)||(n===`spring`||us(n))&&r}function xs(e){e.duration=0,e.type=`keyframes`}var Ss=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),Cs=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ws(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Cs.test(e[t]))return!0;return!1}var Ts=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Es=oi(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Ds(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Es()&&n&&(Ss.has(n)||Ts.has(n)&&ws(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Os=40,ks=class extends Co{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ui.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||$o;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Ui.now();let u=!0;bs(e,i,a,o)||(u=!1,(ni.instantAnimations||!s)&&l?.(bo(e,n,t)),e[0]=e[e.length-1],xs(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Os?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Ds(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new _s({...d,element:p})}catch{m=new To(d)}else m=new To(d);m.finished.then(()=>{this.notifyFinished()}).catch(si),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Qo()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function As(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var js=30,Ms=e=>!isNaN(parseFloat(e)),Ns={current:void 0},Ps=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Ui.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ui.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ms(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new ui);let n=this.events[e].add(t);return e===`change`?()=>{n(),M.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ns.current&&Ns.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Ui.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>js)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,js);return pi(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Fs(e,t){return new Ps(e,t)}function Is(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Ls(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Is(n,e)}var Rs={type:`spring`,stiffness:500,damping:25,restSpeed:10},zs=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Bs={type:`keyframes`,duration:.8},Vs={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Hs=(e,{keyframes:t})=>t.length>2?Bs:Bo.has(e)?e.startsWith(`scale`)?zs(t[1]):Rs:Vs,Us=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Ws(e){for(let t in e)if(!Us.has(t))return!0;return!1}var Gs=(e,t,n,r={},i,a)=>o=>{let s=Ls(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=di(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Ws(s)||Object.assign(u,Hs(e,u)),u.duration&&=di(u.duration),u.repeatDelay&&=di(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(xs(u),u.delay===0&&(d=!0)),(ni.instantAnimations||ni.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,xs(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=bo(u.keyframes,s);if(e!==void 0){M.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new To(u):new ks(u)},Ks=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function qs(e){let t=Ks.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Js(e,t,n=1){`${e}`;let[r,i]=qs(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return ri(e)?parseFloat(e):e}return qi(i)?Js(i,t,n+1):i}function Ys(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Xs(e,t,n,r){if(typeof t==`function`){let[i,a]=Ys(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ys(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Zs(e,t,n){let r=e.getProps();return Xs(r,t,n===void 0?r.custom:n,e)}var Qs=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...zo]),$s=e=>Array.isArray(e);function ec(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Fs(n))}function tc(e){return $s(e)?e[e.length-1]||0:e}function nc(e,t){let{transitionEnd:n={},transition:r={},...i}=Zs(e,t)||{};i={...i,...n};for(let t in i)ec(e,t,tc(i[t]))}var rc=e=>!!(e&&e.getVelocity);function ic(e){return!!(rc(e)&&e.add)}function ac(e,t){let n=e.getValue(`willChange`);if(ic(n))return n.add(t);if(!n&&ni.WillChange){let n=new ni.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function oc(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var sc=`data-`+oc(`framerAppearId`);function cc(e){return e.props[sc]}function lc({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function uc(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Is(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&lc(f,t))continue;let o={delay:n,...Ls(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){M.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=cc(e);if(n){let e=window.MotionHandoffAnimation(n,t,M);e!==null&&(o.startTime=e,p=!0)}}ac(e,t);let m=l??e.shouldReduceMotion;r.start(Gs(t,r,i,m&&Qs.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>M.update(()=>{o&&nc(e,o)});d.length?Promise.all(d).then(t):t()}return d}function dc(e,t,n={}){let r=Zs(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(uc(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return fc(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function fc(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(dc(c,t,{...o,delay:n+(typeof r==`function`?0:r)+As(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function pc(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>dc(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=dc(e,t,n);else{let i=typeof t==`function`?Zs(e,t,n.custom):t;r=Promise.all(uc(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var mc={test:e=>e===`auto`,parse:e=>e},hc=e=>t=>t.test(e),gc=[Xi,I,F,da,pa,fa,mc],_c=e=>gc.find(hc(e));function vc(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||ai(e)}var yc=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function bc(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(ea)||[];if(!r)return e;let i=n.replace(r,``),a=+!!yc.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var xc=/\b([a-z-]*)\(.*?\)/gu,Sc={...ja,getAnimatableNone:e=>{let t=e.match(xc);return t?t.map(bc).join(` `):e}},Cc={...ja,getAnimatableNone:e=>{let t=ja.parse(e);return ja.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},wc={...Xi,transform:Math.round},Tc={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,top:I,right:I,bottom:I,left:I,inset:I,insetBlock:I,insetBlockStart:I,insetBlockEnd:I,insetInline:I,insetInlineStart:I,insetInlineEnd:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,paddingBlock:I,paddingBlockStart:I,paddingBlockEnd:I,paddingInline:I,paddingInlineStart:I,paddingInlineEnd:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,marginBlock:I,marginBlockStart:I,marginBlockEnd:I,marginInline:I,marginInlineStart:I,marginInlineEnd:I,fontSize:I,backgroundPositionX:I,backgroundPositionY:I,rotate:da,pathRotation:da,rotateX:da,rotateY:da,rotateZ:da,scale:Qi,scaleX:Qi,scaleY:Qi,scaleZ:Qi,skew:da,skewX:da,skewY:da,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:Zi,originX:ma,originY:ma,originZ:I,zIndex:wc,fillOpacity:Zi,strokeOpacity:Zi,numOctaves:wc},Ec={...Tc,color:L,backgroundColor:L,outlineColor:L,fill:L,stroke:L,borderColor:L,borderTopColor:L,borderRightColor:L,borderBottomColor:L,borderLeftColor:L,filter:Sc,WebkitFilter:Sc,mask:Cc,WebkitMask:Cc},Dc=e=>Ec[e],Oc=new Set([Sc,Cc]);function kc(e,t){let n=Dc(e);return Oc.has(n)||(n=ja),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Ac=new Set([`auto`,`none`,`0`]);function jc(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ac.has(t)&&wa(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=kc(n,i)}var Mc=class extends $o{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),qi(r))){let i=Js(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Qs.has(n)||e.length!==2)return;let[r,i]=e,a=_c(r),o=_c(i);if(Yi(r)!==Yi(i)&&Go[n]){this.needsMeasurement=!0;return}if(a!==o){if(Vo(a)&&Vo(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Go[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||vc(e[t]))&&n.push(t);n.length&&jc(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Go[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Go[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Nc=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function Pc(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Fc=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ic(e){return ii(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Lc,cancel:Rc}=zi(queueMicrotask,!1),zc={x:!1,y:!1};function H(){return zc.x||zc.y}function Bc(e){return e===`x`||e===`y`?zc[e]?null:(zc[e]=!0,()=>{zc[e]=!1}):zc.x||zc.y?null:(zc.x=zc.y=!0,()=>{zc.x=zc.y=!1})}function Vc(e,t){let n=Pc(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Hc(e){return!(e.pointerType===`touch`||H())}function Uc(e,t,n={}){let[r,i,a]=Vc(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Hc(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Wc=(e,t)=>t?e===t||Wc(e,t.parentElement):!1,Gc=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Kc=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function qc(e){return Kc.has(e.tagName)||e.isContentEditable===!0}var Jc=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Yc(e){return Jc.has(e.tagName)||e.isContentEditable===!0}var Xc=new WeakSet;function Zc(e){return t=>{t.key===`Enter`&&e(t)}}function Qc(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var $c=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Zc(()=>{if(Xc.has(n))return;Qc(n,`down`);let e=Zc(()=>{Qc(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Qc(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function el(e){return Gc(e)&&!H()}var tl=new WeakSet;function nl(e,t,n={}){let[r,i,a]=Vc(e,n),o=e=>{let r=e.currentTarget;if(!el(e)||tl.has(e))return;Xc.add(r),n.stopPropagation&&tl.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Xc.has(r)&&Xc.delete(r),el(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Wc(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ic(e)&&(e.addEventListener(`focus`,e=>$c(e,i)),!qc(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function rl(e){return ii(e)&&`ownerSVGElement`in e}var il=new WeakMap,al,ol=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:rl(r)&&`getBBox`in r?r.getBBox()[t]:r[n],sl=ol(`inline`,`width`,`offsetWidth`),cl=ol(`block`,`height`,`offsetHeight`);function ll({target:e,borderBoxSize:t}){il.get(e)?.forEach(n=>{n(e,{get width(){return sl(e,t)},get height(){return cl(e,t)}})})}function U(e){e.forEach(ll)}function ul(){typeof ResizeObserver>`u`||(al=new ResizeObserver(U))}function dl(e,t){al||ul();let n=Pc(e);return n.forEach(e=>{let n=il.get(e);n||(n=new Set,il.set(e,n)),n.add(t),al?.observe(e)}),()=>{n.forEach(e=>{let n=il.get(e);n?.delete(t),n?.size||al?.unobserve(e)})}}var fl=new Set,pl;function ml(){pl=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};fl.forEach(t=>t(e))},window.addEventListener(`resize`,pl)}function hl(e){return fl.add(e),pl||ml(),()=>{fl.delete(e),!fl.size&&typeof pl==`function`&&(window.removeEventListener(`resize`,pl),pl=void 0)}}function gl(e,t){return typeof e==`function`?hl(e):dl(e,t)}var _l={value:null,addProjectionMetrics:null};function vl(e){return rl(e)&&e.tagName===`svg`}var yl=[...gc,L,ja],bl=e=>yl.find(hc(e)),xl=()=>({translate:0,scale:1,origin:0,originPoint:0}),Sl=()=>({x:xl(),y:xl()}),Cl=()=>({min:0,max:0}),W=()=>({x:Cl(),y:Cl()}),wl=new WeakMap;function Tl(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function El(e){return typeof e==`string`||Array.isArray(e)}var Dl=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ol=[`initial`,...Dl];function kl(e){return Tl(e.animate)||Ol.some(t=>El(e[t]))}function Al(e){return!!(kl(e)||e.variants)}function jl(e,t,n){for(let r in t){let i=t[r],a=n[r];if(rc(i))e.addValue(r,i);else if(rc(a))e.addValue(r,Fs(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Fs(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ml={current:null},Nl={current:!1},Pl=typeof window<`u`;function Fl(){if(Nl.current=!0,Pl){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ml.current=e.matches;e.addEventListener(`change`,t),t()}else Ml.current=!1}}var Il=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Ll={};function Rl(e){Ll=e}function zl(){return Ll}var G=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=$o,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Ui.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,M.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=kl(t),this.isVariantNode=Al(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&rc(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,wl.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Nl.current||Fl(),this.shouldReduceMotion=Ml.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),N(this.notifyUpdate),N(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Ss.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new fs({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:di(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Bo.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&M.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Ll){let t=Ll[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):W()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Il.length;t++){let n=Il[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=jl(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Fs(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(ri(n)||ai(n))?n=parseFloat(n):!bl(n)&&ja.test(t)&&(n=kc(e,t)),this.setBaseTarget(e,rc(n)?n.get():n)),rc(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Xs(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!rc(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ui),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Lc.render(this.render)}},K=class extends G{constructor(){super(...arguments),this.KeyframeResolver=Mc}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;rc(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},q=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function J({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Y({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Bl(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Vl(e){return e===void 0||e===1}function Hl({scale:e,scaleX:t,scaleY:n}){return!Vl(e)||!Vl(t)||!Vl(n)}function Ul(e){return Hl(e)||Wl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Wl(e){return Gl(e.x)||Gl(e.y)}function Gl(e){return e&&e!==`0%`}function Kl(e,t,n){return n+t*(e-n)}function ql(e,t,n,r,i){return i!==void 0&&(e=Kl(e,i,r)),Kl(e,n,r)+t}function Jl(e,t=0,n=1,r,i){e.min=ql(e.min,t,n,r,i),e.max=ql(e.max,t,n,r,i)}function Yl(e,{x:t,y:n}){Jl(e.x,t.translate,t.scale,t.originPoint),Jl(e.y,n.translate,n.scale,n.originPoint)}var Xl=.999999999999,Zl=1.0000000000001;function Ql(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&($l(e.x,-a.scroll.offset.x),$l(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Yl(e,o)),r&&Ul(a.latestValues)&&nu(e,a.latestValues,a.layout?.layoutBox))}t.x<Zl&&t.x>Xl&&(t.x=1),t.y<Zl&&t.y>Xl&&(t.y=1)}function $l(e,t){e.min+=t,e.max+=t}function eu(e,t,n,r,i=.5){Jl(e,t,n,R(e.min,e.max,i),r)}function tu(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function nu(e,t,n){let r=n??e;eu(e.x,tu(t.x,r.x),t.scaleX,t.scale,t.originX),eu(e.y,tu(t.y,r.y),t.scaleY,t.scale,t.originY)}function ru(e,t){return J(Bl(e.getBoundingClientRect(),t))}function iu(e,t,n){let r=ru(e,n),{scroll:i}=t;return i&&($l(r.x,i.offset.x),$l(r.y,i.offset.y)),r}var au={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},ou=zo.length;function su(e,t,n){let r=``,i=!0;for(let a=0;a<ou;a++){let o=zo[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Fc(s,Tc[o]);if(!c){i=!1;let t=au[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${Fc(a,Tc.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function cu(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Bo.has(e)){o=!0;continue}if(Gi(e)){i[e]=n;continue}{let t=Fc(n,Tc[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=su(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function lu(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function uu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var du={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(I.test(e))e=parseFloat(e);else return e}return`${uu(e,t.target.x)}% ${uu(e,t.target.y)}%`}},fu={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=ja.parse(e);if(i.length>5)return r;let a=ja.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=R(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},pu={borderRadius:{...du,applyTo:[...Nc]},borderTopLeftRadius:du,borderTopRightRadius:du,borderBottomLeftRadius:du,borderBottomRightRadius:du,boxShadow:fu};function mu(e,{layout:t,layoutId:n}){return Bo.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!pu[e]||e===`opacity`)}function hu(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(rc(r[t])||i&&rc(i[t])||mu(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function gu(e){return window.getComputedStyle(e)}var _u=class extends K{constructor(){super(...arguments),this.type=`html`,this.renderInstance=lu}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(Bo.has(t))return this.projection?.isProjecting?Fo(t):Lo(e,t);{let n=gu(e),r=(Gi(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ru(e,t)}build(e,t,n){cu(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return hu(e,t,n)}},vu={offset:`stroke-dashoffset`,array:`stroke-dasharray`},yu={offset:`strokeDashoffset`,array:`strokeDasharray`};function bu(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?vu:yu;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var xu=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Su(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(cu(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of xu)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&bu(d,i,a,o,!1)}var Cu=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),wu=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Tu(e,t,n,r){lu(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Cu.has(n)?n:oc(n),t.attrs[n])}function Eu(e,t,n){let r=hu(e,t,n);for(let n in e)if(rc(e[n])||rc(t[n])){let t=zo.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Du=class extends K{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=W}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Bo.has(t)){let e=Dc(t);return e&&e.default||0}if(xu.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=Cu.has(t)?t:oc(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Eu(e,t,n)}build(e,t,n){Su(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Tu(e,t,n,r)}mount(e){this.isSVGTag=wu(e.tagName),super.mount(e)}},Ou=Ol.length;function ku(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&ku(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ou;n++){let r=Ol[n],i=e.props[r];(El(i)||i===!1)&&(t[r]=i)}return t}function Au(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var ju=[...Dl].reverse(),Mu=Dl.length;function Nu(e){return t=>Promise.all(t.map(({animation:t,options:n})=>pc(e,t,n)))}function Pu(e){let t=Nu(e),n=Lu(),r=!0,i=!1,a=t=>(n,r)=>{let i=Zs(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=ku(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Mu;t++){let p=ju[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=El(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Tl(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Fu(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},te=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=$s(t)&&$s(n)?!Au(t,n)||y:t!==n,r?t==null?u.add(e):te(e):t!==void 0&&u.has(e)?te(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Zs(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=As(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Zs(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Lu(),i=!0}}}function Fu(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Au(t,e):!1}function Iu(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lu(){return{animate:Iu(!0),whileInView:Iu(),whileHover:Iu(),whileTap:Iu(),whileDrag:Iu(),whileFocus:Iu(),exit:Iu()}}function Ru(e,t){e.min=t.min,e.max=t.max}function zu(e,t){Ru(e.x,t.x),Ru(e.y,t.y)}function Bu(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Vu=.9999,Hu=1.0001,Uu=-.01,Wu=.01;function Gu(e){return e.max-e.min}function X(e,t,n){return Math.abs(e-t)<=n}function Ku(e,t,n,r=.5){e.origin=r,e.originPoint=R(t.min,t.max,e.origin),e.scale=Gu(n)/Gu(t),e.translate=R(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Vu&&e.scale<=Hu||isNaN(e.scale))&&(e.scale=1),(e.translate>=Uu&&e.translate<=Wu||isNaN(e.translate))&&(e.translate=0)}function qu(e,t,n,r){Ku(e.x,t.x,n.x,r?r.originX:void 0),Ku(e.y,t.y,n.y,r?r.originY:void 0)}function Ju(e,t,n,r=0){e.min=(r?R(n.min,n.max,r):n.min)+t.min,e.max=e.min+Gu(t)}function Yu(e,t,n,r){Ju(e.x,t.x,n.x,r?.x),Ju(e.y,t.y,n.y,r?.y)}function Xu(e,t,n,r=0){let i=r?R(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Gu(t)}function Zu(e,t,n,r){Xu(e.x,t.x,n.x,r?.x),Xu(e.y,t.y,n.y,r?.y)}function Qu(e,t,n,r,i){return e-=t,e=Kl(e,1/n,r),i!==void 0&&(e=Kl(e,1/i,r)),e}function $u(e,t=0,n=1,r=.5,i,a=e,o=e){if(F.test(t)&&(t=parseFloat(t),t=R(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=R(a.min,a.max,r);e===a&&(s-=t),e.min=Qu(e.min,t,n,s,i),e.max=Qu(e.max,t,n,s,i)}function ed(e,t,[n,r,i],a,o){$u(e,t[n],t[r],t[i],t.scale,a,o)}var td=[`x`,`scaleX`,`originX`],nd=[`y`,`scaleY`,`originY`];function rd(e,t,n,r){ed(e.x,t,td,n?n.x:void 0,r?r.x:void 0),ed(e.y,t,nd,n?n.y:void 0,r?r.y:void 0)}function id(e){return e.translate===0&&e.scale===1}function ad(e){return id(e.x)&&id(e.y)}function od(e,t){return e.min===t.min&&e.max===t.max}function sd(e,t){return od(e.x,t.x)&&od(e.y,t.y)}function cd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ld(e,t){return cd(e.x,t.x)&&cd(e.y,t.y)}function ud(e){return Gu(e.x)/Gu(e.y)}function dd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function fd(e){return[e(`x`),e(`y`)]}function pd(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var md=Nc.length,hd=e=>typeof e==`string`?parseFloat(e):e,gd=e=>typeof e==`number`||I.test(e);function _d(e,t,n,r,i,a){i?(e.opacity=R(0,n.opacity??1,yd(r)),e.opacityExit=R(t.opacity??1,0,bd(r))):a&&(e.opacity=R(t.opacity??1,n.opacity??1,r));for(let i=0;i<md;i++){let a=Nc[i],o=vd(t,a),s=vd(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||gd(o)===gd(s)?(e[a]=Math.max(R(hd(o),hd(s),r),0),(F.test(s)||F.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=R(t.rotate||0,n.rotate||0,r))}function vd(e,t){return e[t]===void 0?e.borderRadius:e[t]}var yd=Z(0,.5,Ei),bd=Z(.5,.95,si);function Z(e,t,n){return r=>r<e?0:r>t?1:n(li(e,t,r))}function xd(e,t,n){let r=rc(e)?e:Fs(e);return r.start(Gs(``,r,t,n)),r.animation}function Sd(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var Cd=(e,t)=>e.depth-t.depth,wd=class{constructor(){this.children=[],this.isDirty=!1}add(e){$r(this.children,e),this.isDirty=!0}remove(e){ei(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Cd),this.isDirty=!1,this.children.forEach(e)}};function Td(e,t){let n=Ui.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(N(r),e(a-t))};return M.setup(r,!0),()=>N(r)}function Ed(e){return rc(e)?e.get():e}var Dd=class{constructor(){this.members=[]}add(e){$r(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(ei(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(ei(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Od={hasAnimatedSinceResize:!0,hasEverUpdated:!1},kd={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Ad=[``,`X`,`Y`,`Z`],jd=1e3,Md=0;function Nd(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Q(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=cc(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,M,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Q(r)}function Pd({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Md++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,_l.value&&(kd.nodes=kd.calculatedTargetDeltas=kd.calculatedProjections=0),this.nodes.forEach(Ld),this.nodes.forEach(Kd),this.nodes.forEach(qd),this.nodes.forEach(Rd),_l.addProjectionMetrics&&_l.addProjectionMetrics(kd)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new wd)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ui),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=rl(t)&&!vl(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;M.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Td(i,250),Od.hasAnimatedSinceResize&&(Od.hasAnimatedSinceResize=!1,this.nodes.forEach(Gd)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||ef,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!ld(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ls(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Gd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),N(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Jd),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Q(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Vd),this.nodes.forEach(Bd);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Hd);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Ud),this.nodes.forEach(Wd),this.nodes.forEach(Fd),this.nodes.forEach(Id)):this.nodes.forEach(Hd),this.clearAllSnapshots();let e=Ui.now();P.delta=ti(0,1e3/60,e-P.timestamp),P.timestamp=e,P.isProcessing=!0,Bi.update.process(P),Bi.preRender.process(P),Bi.render.process(P),P.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(zd),this.sharedNodes.forEach(Yd)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,M.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){M.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Gu(this.snapshot.measuredBox.x)&&!Gu(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=W(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!ad(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Ul(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),af(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return W();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(sf))){let{scroll:e}=this.root;e&&($l(t.x,e.offset.x),$l(t.y,e.offset.y))}return t}removeElementScroll(e){let t=W();if(zu(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&zu(t,e),$l(t.x,i.offset.x),$l(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||W();zu(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&($l(r.x,-n.scroll.offset.x),$l(r.y,-n.scroll.offset.y)),Ul(n.latestValues)&&nu(r,n.latestValues,n.layout?.layoutBox)}return Ul(this.latestValues)&&nu(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=W();zu(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Ul(n.latestValues))continue;let r;n.instance&&(Hl(n.latestValues)&&n.updateSnapshot(),r=W(),zu(r,n.measurePageBox())),rd(t,n.latestValues,n.snapshot?.layoutBox,r)}return Ul(this.latestValues)&&rd(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==P.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=P.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=W(),this.targetWithTransforms=W()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Yu(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):zu(this.target,this.layout.layoutBox),Yl(this.target,this.targetDelta)):zu(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),_l.value&&kd.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Hl(this.parent.latestValues)||Wl(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=W(),this.relativeTargetOrigin=W(),Zu(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),zu(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===P.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;zu(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ql(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=W());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Bu(this.prevProjectionDelta.x,this.projectionDelta.x),Bu(this.prevProjectionDelta.y,this.projectionDelta.y)),qu(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!dd(this.projectionDelta.x,this.prevProjectionDelta.x)||!dd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),_l.value&&kd.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Sl(),this.projectionDelta=Sl(),this.projectionDeltaWithTransform=Sl()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=Sl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=W(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some($d));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=R(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=R(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Xd(o.x,e.x,n),Xd(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zu(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Qd(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&sd(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=W(),zu(f,this.relativeTarget)),c&&(this.animationValues=a,_d(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(N(this.pendingAnimation),void 0),this.pendingAnimation=M.update(()=>{Od.hasAnimatedSinceResize=!0,this.motionValue||=Fs(0),this.motionValue.jump(0,!1),this.currentAnimation=xd(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(jd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&of(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||W();let t=Gu(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Gu(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}zu(t,n),nu(t,i),qu(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Dd),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Nd(`z`,e,r,this.animationValues);for(let t=0;t<Ad.length;t++)Nd(`rotate${Ad[t]}`,e,r,this.animationValues),Nd(`skew${Ad[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Ed(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Ed(t?.pointerEvents)||``),this.hasProjected&&!Ul(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=pd(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in pu){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=pu[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Ed(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Bd),this.root.sharedNodes.clear()}}}function Fd(e){e.updateLayout()}function Id(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)fd(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Gu(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Ru(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else of(i,t.layoutBox,n)&&fd(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Gu(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Sl();qu(o,n,t.layoutBox);let s=Sl();a?qu(s,e.applyTransform(r,!0),t.measuredBox):qu(s,n,t.layoutBox);let c=!ad(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=W();Zu(s,t.layoutBox,i.layoutBox,o);let c=W();Zu(c,n,a.layoutBox,o),ld(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Ld(e){_l.value&&kd.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Rd(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function zd(e){e.clearSnapshot()}function Bd(e){e.clearMeasurements()}function Vd(e){e.isLayoutDirty=!0,e.updateLayout()}function Hd(e){e.isLayoutDirty=!1}function Ud(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Wd(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Gd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Kd(e){e.resolveTargetDelta()}function qd(e){e.calcProjection()}function Jd(e){e.resetSkewAndRotation()}function Yd(e){e.removeLeadSnapshot()}function Xd(e,t,n){e.translate=R(t.translate,0,n),e.scale=R(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Zd(e,t,n,r){e.min=R(t.min,n.min,r),e.max=R(t.max,n.max,r)}function Qd(e,t,n,r){Zd(e.x,t.x,n.x,r),Zd(e.y,t.y,n.y,r)}function $d(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var ef={duration:.45,ease:[.4,0,.1,1]},tf=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),nf=tf(`applewebkit/`)&&!tf(`chrome/`)?Math.round:si;function rf(e){e.min=nf(e.min),e.max=nf(e.max)}function af(e){rf(e.x),rf(e.y)}function of(e,t,n){return e===`position`||e===`preserve-aspect`&&!X(ud(t),ud(n),.2)}function sf(e){return e!==e.root&&e.scroll?.wasRoot}var cf=Pd({attachResizeListener:(e,t)=>Sd(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),lf={current:void 0},uf=Pd({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!lf.current){let e=new cf({});e.mount(window),e.setOptions({layoutScroll:!0}),lf.current=e}return lf.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),df=(0,x.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function ff(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function pf(...e){return t=>{let n=!1,r=e.map(e=>{let r=ff(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():ff(e[t],null)}}}}function mf(...e){return x.useCallback(pf(...e),e)}var hf=class extends x.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Ic(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Ic(e)&&e.offsetWidth||0,r=Ic(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function gf({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,x.useId)(),s=(0,x.useRef)(null),c=(0,x.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,x.useContext)(df),u=mf(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,x.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,j.jsx)(hf,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:x.cloneElement(e,{ref:u})})}var _f=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Xr(vf),d=(0,x.useId)(),f=(0,x.useRef)(n),p=(0,x.useRef)(r);Zr(()=>{f.current=n,p.current=r});let m=!0,h=(0,x.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(h={...h}),(0,x.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),x.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,j.jsx)(gf,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,j.jsx)(Qr.Provider,{value:h,children:e})};function vf(){return new Map}function yf(e=!0){let t=(0,x.useContext)(Qr);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,x.useId)();(0,x.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,x.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var bf=e=>e.key||``;function xf(e){let t=[];return x.Children.forEach(e,e=>{(0,x.isValidElement)(e)&&t.push(e)}),t}var Sf=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=yf(o),f=(0,x.useMemo)(()=>xf(e),[e]),p=o&&!u?[]:f.map(bf),m=(0,x.useRef)(!0),h=(0,x.useRef)(f),g=Xr(()=>new Map),_=(0,x.useRef)(new Set),[v,y]=(0,x.useState)(f),[b,S]=(0,x.useState)(f);Zr(()=>{o&&!u&&!b.length&&d?.()},[u,o,b.length,d]),Zr(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=bf(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let C=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=bf(n);p.includes(r)||(e.splice(t,0,n),C.push(n))}return a===`wait`&&C.length&&(e=C),S(xf(e)),y(f),null}let{forceRender:w}=(0,x.useContext)(Yr);return(0,j.jsx)(j.Fragment,{children:b.map(e=>{let v=bf(e),y=o&&!u?!1:f===b||p.includes(v);return(0,j.jsx)(_f,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(w?.(),S(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Cf=(0,x.createContext)({strict:!1}),wf={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Tf=!1;function Ef(){if(Tf)return;let e={};for(let t in wf)e[t]={isEnabled:e=>wf[t].some(t=>!!e[t])};Rl(e),Tf=!0}function Df(){return Ef(),zl()}function Of(e){let t=Df();for(let n in e)t[n]={...t[n],...e[n]};Rl(t)}var kf=(0,x.createContext)({});function Af(e,t){if(kl(e)){let{initial:t,animate:n}=e;return{initial:t===!1||El(t)?t:void 0,animate:El(n)?n:void 0}}return e.inherit===!1?{}:t}function jf(e){let{initial:t,animate:n}=Af(e,(0,x.useContext)(kf));return(0,x.useMemo)(()=>({initial:t,animate:n}),[Mf(t),Mf(n)])}function Mf(e){return Array.isArray(e)?e.join(` `):e}var Nf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Pf(e,t,n){for(let r in t)!rc(t[r])&&!mu(r,n)&&(e[r]=t[r])}function Ff({transformTemplate:e},t){return(0,x.useMemo)(()=>{let n=Nf();return cu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function If(e,t){let n=e.style||{},r={};return Pf(r,n,e),Object.assign(r,Ff(e,t)),r}function Lf(e,t){let n={},r=If(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Rf=()=>({...Nf(),attrs:{}});function zf(e,t,n,r){let i=(0,x.useMemo)(()=>{let n=Rf();return Su(n,t,wu(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Pf(t,e.style,e),i.style={...t,...i.style}}return i}var Bf=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Vf(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Bf.has(e)}function Hf(e,t){return e.startsWith(`on`)?!Vf(e):t?.(e)??!Vf(e)}function Uf(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(rc(e[a])||(Hf(a,r)||n===!0&&Vf(a)||!t&&!Vf(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}var Wf=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Gf(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Wf.indexOf(e)>-1||/[A-Z]/u.test(e))}function Kf(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??Gf(e)?zf:Lf)(t,r,i,e),l=Uf(t,typeof e==`string`,a,s),u=e===x.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,x.useMemo)(()=>rc(d)?d.get():d,[d]);return(0,x.createElement)(e,{...u,children:f})}function qf({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Jf(n,r,i,e),renderState:t()}}function Jf(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Ed(a[e]);let{initial:o,animate:s}=e,c=kl(e),l=Al(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Tl(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Xs(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Yf=e=>(t,n)=>{let r=(0,x.useContext)(kf),i=(0,x.useContext)(Qr),a=()=>qf(e,t,r,i);return n?a():Xr(a)},Xf=Yf({scrapeMotionValuesFromProps:hu,createRenderState:Nf}),Zf=Yf({scrapeMotionValuesFromProps:Eu,createRenderState:Rf}),Qf=Symbol.for(`motionComponentSymbol`);function $f(e,t,n){let r=(0,x.useRef)(n);(0,x.useInsertionEffect)(()=>{r.current=n});let i=(0,x.useRef)(null);return(0,x.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var ep=(0,x.createContext)({});function tp(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function np(e,t,n,r,i,a){let{visualElement:o}=(0,x.useContext)(kf),s=(0,x.useContext)(Cf),c=(0,x.useContext)(Qr),l=(0,x.useContext)(df),u=l.reducedMotion,d=l.skipAnimations,f=(0,x.useRef)(null),p=(0,x.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,x.useContext)(ep);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&rp(f.current,n,i,h);let g=(0,x.useRef)(!1);(0,x.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[sc],v=(0,x.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Zr(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,x.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function rp(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:ip(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&tp(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function ip(e){if(e)return e.options.allowProjection===!1?ip(e.parent):e.projection}function ap(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Of(r);let a=n?n===`svg`:Gf(e),o=a?Zf:Xf;function s(n,s){let c,l={...(0,x.useContext)(df),...n,layoutId:op(n)},{isStatic:u,isValidProp:d}=l,f=jf(n),p=o(n,u);if(!u&&typeof window<`u`){sp(l,r);let t=cp(l);c=t.MeasureLayout,f.visualElement=np(e,p,l,i,t.ProjectionNode,a)}return(0,j.jsxs)(kf.Provider,{value:f,children:[c&&f.visualElement?(0,j.jsx)(c,{visualElement:f.visualElement,...l}):null,Kf(e,n,$f(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,x.forwardRef)(s);return c[Qf]=e,c}function op({layoutId:e}){let t=(0,x.useContext)(Yr).id;return t&&e!==void 0?t+`-`+e:e}function sp(e,t){(0,x.useContext)(Cf).strict}function cp(e){let{drag:t,layout:n}=Df();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function lp(e,t){if(typeof Proxy>`u`)return ap;let n=new Map,r=(n,r)=>ap(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,ap(a,void 0,e,t)),n.get(a))})}var up=(e,t)=>t.isSVG??Gf(e)?new Du(t):new _u(t,{allowProjection:e!==x.Fragment}),dp=class extends q{constructor(e){super(e),e.animationState||=Pu(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Tl(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},fp=0,pp={animation:{Feature:dp},exit:{Feature:class extends q{constructor(){super(...arguments),this.id=fp++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Zs(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function mp(e){return{point:{x:e.pageX,y:e.pageY}}}var hp=e=>t=>Gc(t)&&e(t,mp(t));function gp(e,t,n,r){return Sd(e,t,hp(n),r)}var _p=({current:e})=>e?e.ownerDocument.defaultView:null,vp=(e,t)=>Math.abs(e-t);function yp(e,t){let n=vp(e.x,t.x),r=vp(e.y,t.y);return Math.sqrt(n**2+r**2)}var bp=new Set([`auto`,`scroll`]),xp=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Sp(this.lastRawMoveEventInfo,this.transformPagePoint));let e=wp(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=yp(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=P;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Sp(t,this.transformPagePoint),M.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=wp(e.type===`pointercancel`?this.lastMoveEventInfo:Sp(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Gc(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Sp(mp(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=P;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,wp(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=ci(gp(this.contextWindow,`pointermove`,this.handlePointerMove,d),gp(this.contextWindow,`pointerup`,this.handlePointerUp,d),gp(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(bp.has(e.overflowX)||bp.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),M.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),N(this.updatePoint)}};function Sp(e,t){return t?{point:t(e.point)}:e}function Cp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function wp({point:e},t){return{point:e,delta:Cp(e,Ep(t)),offset:Cp(e,Tp(t)),velocity:Dp(t,.1)}}function Tp(e){return e[0]}function Ep(e){return e[e.length-1]}function Dp(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Ep(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>di(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>di(t)*2&&(r=e[1]);let a=fi(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Op(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?R(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?R(n,e,r.max):Math.min(e,n)),e}function kp(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Ap(e,{top:t,left:n,bottom:r,right:i}){return{x:kp(e.x,n,i),y:kp(e.y,t,r)}}function jp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Mp(e,t){return{x:jp(e.x,t.x),y:jp(e.y,t.y)}}function Np(e,t){let n=.5,r=Gu(e),i=Gu(t);return i>r?n=li(t.min,t.max-r,e.min):r>i&&(n=li(e.min,e.max-i,t.min)),ti(0,1,n)}function Pp(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Fp=.35;function Ip(e=Fp){return e===!1?e=0:e===!0&&(e=Fp),{x:Lp(e,`left`,`right`),y:Lp(e,`top`,`bottom`)}}function Lp(e,t,n){return{min:Rp(e,t),max:Rp(e,n)}}function Rp(e,t){return typeof e==`number`?e:e[t]||0}var zp=new WeakMap,Bp=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=W(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(mp(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Bc(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),fd(e=>{let t=this.getAxisMotionValue(e).get()||0;if(F.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Gu(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&M.update(()=>i(e,t),!1,!0),ac(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Wp(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&M.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new xp(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:_p(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&M.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Up(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Op(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&tp(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?Ap(n.layoutBox,e):!1,this.elastic=Ip(t),r!==this.constraints&&!tp(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&fd(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Pp(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!tp(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=iu(n,r.root,this.visualElement.getTransformPagePoint()),a=Mp(r.layout.layoutBox,i);if(t){let e=t(Y(a));this.hasMutatedConstraints=!!e,e&&(a=J(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=fd(o=>{if(!Up(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ac(this.visualElement,e),n.start(Gs(e,n,0,t,this.visualElement,!1))}stopAnimation(){fd(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){fd(t=>{let{drag:n}=this.getProps();if(!Up(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-R(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!tp(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};fd(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Np({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),fd(t=>{if(!Up(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(R(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;zp.set(this.visualElement,this);let e=this.visualElement.current,t=gp(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Yc(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();tp(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Hp(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),M.read(r);let o=Sd(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(fd(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Fp,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Vp(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Hp(e,t,n){let r=gl(e,Vp(n)),i=gl(t,Vp(n));return()=>{r(),i()}}function Up(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Wp(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Gp=class extends q{constructor(e){super(e),this.removeGroupControls=si,this.removeListeners=si,this.controls=new Bp(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||si}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Kp=e=>(t,n)=>{e&&M.update(()=>e(t,n),!1,!0)},qp=class extends q{constructor(){super(...arguments),this.removePointerDownListener=si}onPointerDown(e){this.session=new xp(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_p(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Kp(e),onStart:Kp(t),onMove:Kp(n),onEnd:(e,t)=>{delete this.session,r&&M.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=gp(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Jp=!1,Yp=class extends x.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Jp&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Od.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Jp=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||M.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Lc.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Jp=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Xp(e){let[t,n]=yf(),r=(0,x.useContext)(Yr);return(0,j.jsx)(Yp,{...e,layoutGroup:r,switchLayoutGroup:(0,x.useContext)(ep),isPresent:t,safeToRemove:n})}var Zp={pan:{Feature:qp},drag:{Feature:Gp,ProjectionNode:uf,MeasureLayout:Xp}};function Qp(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&M.postRender(()=>i(t,mp(t)))}var $p=class extends q{mount(){let{current:e}=this.node;e&&(this.unmount=Uc(e,(e,t)=>(Qp(this.node,t,`Start`),e=>Qp(this.node,e,`End`))))}unmount(){}},em=class extends q{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=ci(Sd(this.node.current,`focus`,()=>this.onFocus()),Sd(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function tm(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&M.postRender(()=>i(t,mp(t)))}var nm=class extends q{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=nl(e,(e,t)=>(tm(this.node,t,`Start`),(e,{success:t})=>tm(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},rm=new WeakMap,im=new WeakMap,am=e=>{let t=rm.get(e.target);t&&t(e)},om=e=>{e.forEach(am)};function sm({root:e,...t}){let n=e||document;im.has(n)||im.set(n,{});let r=im.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(om,{root:e,...t})),r[i]}function cm(e,t,n){let r=sm(t);return rm.set(e,n),r.observe(e),()=>{rm.delete(e),r.unobserve(e)}}var lm={some:0,all:1},um=class extends q{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:lm[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=cm(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(dm(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function dm({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var fm={inView:{Feature:um},tap:{Feature:nm},focus:{Feature:em},hover:{Feature:$p}},pm={layout:{ProjectionNode:uf,MeasureLayout:Xp}},$=lp({...pp,...fm,...Zp,...pm},up),mm=`/assets/logo-CWmmc0Ip.jpeg`;function hm(){let e=mt(),[t,n]=(0,x.useState)(!1),[r,i]=(0,x.useState)(!1);(0,x.useEffect)(()=>{let e=()=>{i(window.scrollY>10)};return e(),window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,x.useEffect)(()=>{n(!1)},[e.pathname]),(0,x.useEffect)(()=>(t?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[t]);let a=()=>{n(!1)},o=[{to:`/`,label:`Home`},{to:`/about`,label:`About Us`},{to:`/programs`,label:`MBBS Programs`},{to:`/admissions`,label:`Admissions & Services`},{to:`/gallery`,label:`Gallery`},{to:`/contact`,label:`Contact Us`}];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`header`,{className:`sticky top-0 z-50 transition-all duration-300 ${r?`border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(8,47,91,0.06)]`:`border-b border-transparent bg-white`}`,children:(0,j.jsx)(`div`,{className:`mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10`,children:(0,j.jsxs)(`div`,{className:`flex h-[72px] items-center justify-between lg:h-[88px]`,children:[(0,j.jsx)(jn,{to:`/`,onClick:a,className:`shrink-0 transition-transform duration-300 hover:scale-[1.02] z-10`,children:(0,j.jsx)(`img`,{src:mm,alt:`Kantule Edutech`,className:`h-[52px] w-auto object-contain sm:h-[60px] lg:h-[72px]`})}),(0,j.jsx)(`nav`,{className:`hidden items-center lg:flex`,children:(0,j.jsx)(`div`,{className:`flex items-center gap-1`,children:o.map(t=>(0,j.jsx)(gm,{to:t.to,label:t.label,active:e.pathname===t.to},t.to))})}),(0,j.jsx)(`div`,{className:`hidden lg:block`,children:(0,j.jsxs)(jn,{to:`/contact`,className:`group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#071F3D] to-[#0B2E52] px-6 py-3 text-[12px] font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(8,47,91,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(11,143,211,0.25)]`,children:[(0,j.jsx)(A,{size:16,className:`text-[#16B9D9]`}),`Book Free Counselling`,(0,j.jsx)($n,{size:15,className:`transition-transform duration-300 group-hover:translate-x-1`})]})}),(0,j.jsx)(`button`,{type:`button`,onClick:()=>n(!0),className:`flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#082F5B] shadow-sm transition-colors hover:bg-slate-50 lg:hidden z-10`,"aria-label":`Open menu`,children:(0,j.jsx)(Ar,{size:22,strokeWidth:2})})]})})}),(0,j.jsx)(Sf,{children:t&&(0,j.jsxs)(`div`,{className:`fixed inset-0 z-[100] lg:hidden`,children:[(0,j.jsx)($.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a,className:`absolute inset-0 bg-[#040814]/60 backdrop-blur-md`}),(0,j.jsxs)($.div,{initial:{x:`100%`},animate:{x:0},exit:{x:`100%`},transition:{duration:.4,ease:[.22,1,.36,1]},className:`absolute right-0 top-0 flex h-full w-[85%] max-w-[400px] flex-col bg-white shadow-2xl`,children:[(0,j.jsxs)(`div`,{className:`flex items-center justify-between border-b border-slate-100 px-5 py-4`,children:[(0,j.jsx)(`img`,{src:`/assets/logo-CWmmc0Ip.jpeg`,alt:`Kantule Edutech`,className:`h-12 w-auto object-contain`}),(0,j.jsx)(`button`,{type:`button`,onClick:a,className:`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#082F5B] transition-colors hover:bg-slate-50`,"aria-label":`Close menu`,children:(0,j.jsx)(Wr,{size:20,strokeWidth:2})})]}),(0,j.jsx)(`div`,{className:`flex-1 overflow-y-auto px-5 py-6`,children:(0,j.jsx)($.div,{className:`space-y-2`,initial:`hidden`,animate:`visible`,variants:{visible:{transition:{staggerChildren:.06,delayChildren:.1}}},children:o.map(t=>(0,j.jsx)(_m,{to:t.to,label:t.label,active:e.pathname===t.to,onClick:a},t.to))})}),(0,j.jsx)(`div`,{className:`border-t border-slate-100 bg-slate-50/50 p-5`,children:(0,j.jsxs)(jn,{to:`/contact`,onClick:a,className:`group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B8FD3] to-[#16B9D9] px-5 py-4 text-sm font-bold text-white shadow-lg transition-transform active:scale-[0.98]`,children:[(0,j.jsx)(A,{size:18}),`Book Free Counselling`,(0,j.jsx)($n,{size:16,className:`transition-transform duration-300 group-hover:translate-x-1`})]})})]})]})})]})}function gm({to:e,label:t,active:n}){return(0,j.jsxs)(jn,{to:e,className:`group relative flex items-center px-4 py-2 text-[13.5px] font-semibold transition-colors`,children:[(0,j.jsx)(`span`,{className:`relative z-10 ${n?`text-[#0B5EA8]`:`text-slate-600 group-hover:text-[#082F5B]`}`,children:t}),(0,j.jsx)(`span`,{className:`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0B8FD3] to-[#16B9D9] transition-all duration-300 ease-out ${n?`w-1/2 opacity-100`:`w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100`}`})]})}function _m({to:e,label:t,active:n,onClick:r}){return(0,j.jsx)($.div,{variants:{hidden:{opacity:0,x:20},visible:{opacity:1,x:0}},transition:{duration:.3,ease:[.22,1,.36,1]},children:(0,j.jsxs)(jn,{to:e,onClick:r,className:`group flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-200 ${n?`bg-gradient-to-r from-[#071F3D] to-[#0B2E52] text-white shadow-md`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,j.jsx)(`span`,{className:`text-[15px] font-semibold`,children:t}),(0,j.jsx)(`span`,{className:`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${n?`bg-white/20 text-white`:`bg-slate-100 text-slate-400 group-hover:bg-[#0B8FD3] group-hover:text-white`}`,children:(0,j.jsx)($n,{size:16})})]})})}var vm=[{label:`Home`,href:`/`},{label:`About Us`,href:`/about`},{label:`MBBS Programs`,href:`/programs`},{label:`Admissions & Services`,href:`/admissions`},{label:`Contact Us`,href:`/contact`}],ym=[{label:`MBBS in India`,href:`/programs?country=India`},{label:`MBBS in Russia`,href:`/programs?country=Russia`},{label:`MBBS in Kyrgyzstan`,href:`/programs?country=Kyrgyzstan`},{label:`MBBS in Kazakhstan`,href:`/programs?country=Kazakhstan`},{label:`MBBS in Georgia`,href:`/programs?country=Georgia`},{label:`MBBS in Vietnam`,href:`/programs?country=Vietnam`},{label:`MBBS in Nepal`,href:`/programs?country=Nepal`},{label:`MBBS in Philippines`,href:`/programs?country=Philippines`}],bm=[{icon:Or,content:(0,j.jsxs)(j.Fragment,{children:[`Rukmini Complex, Pachod Road,`,(0,j.jsx)(`br`,{}),`Ambad, District Jalna,`,(0,j.jsx)(`br`,{}),`Maharashtra – 431204`]})},{icon:Mr,content:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`a`,{href:`tel:8830451660`,children:`8830451660`}),(0,j.jsx)(`br`,{}),(0,j.jsx)(`a`,{href:`tel:8237794917`,children:`8237794917`})]})},{icon:A,content:(0,j.jsx)(`a`,{href:`https://wa.me/918830451660`,target:`_blank`,rel:`noreferrer`,children:`8830451660 / 8237794917`})},{icon:Dr,content:(0,j.jsx)(`a`,{href:`mailto:kantuleedutec@gmail.com`,children:`kantuleedutec@gmail.com`})}],xm=`918830451660`;function Sm(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`style`,{children:`
        .ke-footer {
          background: #051c40;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .ke-footer::before {
          content: "";
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22,183,215,.09), transparent 70%);
          top: -260px;
          right: -140px;
          pointer-events: none;
        }

        .ke-footer::after {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,.03), transparent 70%);
          bottom: -220px;
          left: -160px;
          pointer-events: none;
        }

        .ke-footer-main {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 66px 0 52px;
          display: grid;
          grid-template-columns: 1.15fr 0.75fr 0.85fr 1.15fr;
          gap: 40px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        /* ============ BRAND + CONTACT (merged so this column carries
           enough content to balance the taller Quick Enquiry column) ============ */

        .ke-footer-brand {
          max-width: 300px;
        }

        .ke-footer-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .ke-footer-logo {
          width: 54px;
          height: 54px;
          object-fit: cover;
          border-radius: 50%;
          background: #ffffff;
          padding: 3px;
          box-shadow: 0 0 0 1.5px rgba(255,255,255,.22);
        }

        .ke-footer-logo-text strong {
          display: block;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: .2px;
        }

        .ke-footer-logo-text span {
          display: block;
          margin-top: 2px;
          font-size: 11px;
          color: #9fb8dc;
          letter-spacing: .4px;
        }

        .ke-footer-tagline {
          margin: 0 0 24px;
          color: #cddef4;
          font-size: 13.5px;
          line-height: 1.85;
        }

        .ke-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .ke-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #cddef4;
          font-size: 13px;
          line-height: 1.6;
        }

        .ke-footer-contact-icon {
          flex: 0 0 auto;
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.09);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4fc9e8;
        }

        .ke-footer-contact a {
          color: #cddef4;
          text-decoration: none;
          transition: color .2s ease;
        }

        .ke-footer-contact a:hover {
          color: #4fc9e8;
        }

        /* ============ COLUMN TITLES ============ */

        .ke-footer-title {
          font-size: 15px;
          font-weight: 700;
          margin: 3px 0 22px;
          position: relative;
          padding-bottom: 12px;
        }

        .ke-footer-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 26px;
          height: 2px;
          background: #16b7d7;
          border-radius: 10px;
        }

        .ke-footer-links {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .ke-footer-link {
          position: relative;
          width: fit-content;
          color: #cddef4;
          text-decoration: none;
          font-size: 13px;
          line-height: 1.5;
          transition: color .2s ease, transform .2s ease;
        }

        .ke-footer-link::before {
          content: "›";
          margin-right: 6px;
          color: #16b7d7;
          opacity: 0;
          transition: opacity .2s ease;
        }

        .ke-footer-link:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .ke-footer-link:hover::before {
          opacity: 1;
        }

        /* ============ QUICK ENQUIRY — highlighted glass card so this
           column doesn't read as bare empty space next to the form ============ */

        .ke-footer-enquiry {
          padding: 24px;
          border-radius: 16px;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.09);
          backdrop-filter: blur(6px);
        }

        .ke-footer-enquiry .ke-footer-title {
          margin-top: 0;
        }

        .ke-footer-enquiry-sub {
          margin: -14px 0 18px;
          color: #9fb8dc;
          font-size: 12px;
          line-height: 1.6;
        }

        .ke-footer-form {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .ke-footer-input {
          width: 100%;
          box-sizing: border-box;
          height: 40px;
          padding: 0 4px;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,.22);
          background: transparent;
          color: #ffffff;
          outline: none;
          font-size: 12.5px;
          border-radius: 0;
          transition: border-color .2s ease;
        }

        .ke-footer-input::placeholder {
          color: #8ba3c4;
        }

        .ke-footer-input:focus {
          border-color: #16b7d7;
        }

        .ke-footer-select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%238ba3c4'><path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/></svg>");
          background-repeat: no-repeat;
          background-position: right 4px center;
          background-size: 14px;
        }

        .ke-footer-select option {
          color: #111827;
          background: #ffffff;
        }

        .ke-footer-submit {
          margin-top: 6px;
          height: 44px;
          border: 0;
          border-radius: 8px;
          background: linear-gradient(90deg, #0d8fb8, #16b7d7);
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 26px rgba(11,150,192,.28);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .ke-footer-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(11,150,192,.4);
        }

        /* ============ BOTTOM BAR ============ */

        .ke-footer-bottom {
          border-top: 1px solid rgba(255,255,255,.08);
          position: relative;
          z-index: 1;
        }

        .ke-footer-bottom-inner {
          width: min(1180px, calc(100% - 40px));
          min-height: 60px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ke-footer-copy {
          color: #9fb8dc;
          font-size: 12px;
        }

        .ke-footer-legal {
          display: flex;
          gap: 22px;
        }

        .ke-footer-legal a {
          color: #9fb8dc;
          text-decoration: none;
          font-size: 12px;
          transition: color .2s ease;
        }

        .ke-footer-legal a:hover {
          color: #ffffff;
        }

        .ke-footer-credit {
          border-top: 1px solid rgba(255,255,255,.06);
          background: rgba(0,0,0,.18);
          position: relative;
          z-index: 1;
        }

        .ke-footer-credit-inner {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 16px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes creditFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes creditShine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes creditPulse {
          0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(79,201,232,.55); }
          50% { transform: scale(1.15); opacity: .85; box-shadow: 0 0 0 4px rgba(79,201,232,0); }
        }

        .ke-footer-credit-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 16px 8px 13px;
          border-radius: 100px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.1);
          animation: creditFloat 4s ease-in-out infinite;
          transition: border-color .3s ease, background .3s ease, box-shadow .3s ease;
        }

        .ke-footer-credit-badge:hover {
          border-color: rgba(79,201,232,.4);
          background: rgba(79,201,232,.06);
          box-shadow: 0 8px 26px rgba(22,183,215,.18);
        }

        .ke-footer-credit-dot {
          flex: 0 0 auto;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4fc9e8;
          animation: creditPulse 2.2s ease-in-out infinite;
        }

        .ke-footer-credit a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #9fb8dc;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: .2px;
          transition: color .25s ease;
        }

        .ke-footer-credit a strong {
          background: linear-gradient(90deg, #4fc9e8, #16b7d7, #7fe3f7, #16b7d7, #4fc9e8);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 800;
          animation: creditShine 5s linear infinite;
        }

        .ke-footer-credit-badge:hover a {
          color: #cddef4;
        }

        .ke-footer-credit-spark {
          color: #4fc9e8;
          transition: transform .4s ease;
        }

        .ke-footer-credit-badge:hover .ke-footer-credit-spark {
          transform: rotate(180deg) scale(1.2);
        }

        @media (max-width: 1000px) {
          .ke-footer-main {
            grid-template-columns: repeat(2, 1fr);
            gap: 44px 32px;
          }

          .ke-footer-brand {
            max-width: 100%;
          }

          .ke-footer-enquiry {
            grid-column: 1 / -1;
            max-width: 480px;
          }
        }

        @media (max-width: 640px) {
          .ke-footer-main {
            width: min(100% - 30px, 480px);
            padding: 48px 0 36px;
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .ke-footer-enquiry {
            max-width: 100%;
            padding: 20px;
          }

          .ke-footer-title {
            margin-bottom: 16px;
          }

          .ke-footer-bottom-inner {
            width: min(100% - 30px, 480px);
            padding: 18px 0;
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .ke-footer-legal {
            gap: 16px;
          }

          .ke-footer-top {
            width: 40px;
            height: 40px;
          }
        }
      `}),(0,j.jsxs)(`footer`,{className:`ke-footer`,children:[(0,j.jsxs)(`div`,{className:`ke-footer-main`,children:[(0,j.jsxs)(`div`,{className:`ke-footer-brand`,children:[(0,j.jsxs)(`div`,{className:`ke-footer-logo-row`,children:[(0,j.jsx)(`img`,{src:mm,alt:`Kantule Edutech Pvt. Ltd.`,className:`ke-footer-logo`}),(0,j.jsxs)(`div`,{className:`ke-footer-logo-text`,children:[(0,j.jsx)(`strong`,{children:`Kantule Edutech`}),(0,j.jsx)(`span`,{children:`Pvt. Ltd.`})]})]}),(0,j.jsx)(`p`,{className:`ke-footer-tagline`,children:`Your Trusted Partner for Medical Education & Career Guidance`}),(0,j.jsx)(`div`,{className:`ke-footer-contact`,children:bm.map((e,t)=>{let n=e.icon;return(0,j.jsxs)(`div`,{className:`ke-footer-contact-item`,children:[(0,j.jsx)(`span`,{className:`ke-footer-contact-icon`,children:(0,j.jsx)(n,{size:15})}),(0,j.jsx)(`span`,{children:e.content})]},t)})})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{className:`ke-footer-title`,children:`Quick Links`}),(0,j.jsx)(`div`,{className:`ke-footer-links`,children:vm.map(e=>(0,j.jsx)(`a`,{href:e.href,className:`ke-footer-link`,children:e.label},e.label))})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{className:`ke-footer-title`,children:`Our Programs`}),(0,j.jsx)(`div`,{className:`ke-footer-links`,children:ym.map(e=>(0,j.jsx)(`a`,{href:e.href,className:`ke-footer-link`,children:e.label},e.label))})]}),(0,j.jsxs)(`div`,{className:`ke-footer-enquiry`,children:[(0,j.jsx)(`h3`,{className:`ke-footer-title`,children:`Quick Enquiry`}),(0,j.jsx)(`p`,{className:`ke-footer-enquiry-sub`,children:`Share your details, our team will get back to you shortly.`}),(0,j.jsxs)(`form`,{className:`ke-footer-form`,onSubmit:e=>{e.preventDefault();let t=e.target,n=t.name.value.trim(),r=t.mobile.value.trim(),i=t.neet.value.trim(),a=t.interest.value,o=a===`india`?`MBBS in India`:a===`abroad`?`MBBS Abroad`:`Not specified`,s=[`Hello Kantule Edutech, I'd like a free counselling session.`,`Name: ${n||`-`}`,`Mobile: ${r||`-`}`,i?`NEET Score: ${i}`:null,`Interested In: ${o}`].filter(Boolean),c=encodeURIComponent(s.join(`
`));window.open(`https://wa.me/${xm}?text=${c}`,`_blank`,`noreferrer`),t.reset()},children:[(0,j.jsx)(`input`,{className:`ke-footer-input`,type:`text`,name:`name`,placeholder:`Student Name`,required:!0}),(0,j.jsx)(`input`,{className:`ke-footer-input`,type:`tel`,name:`mobile`,placeholder:`Mobile Number`,pattern:`[0-9]{10}`,required:!0}),(0,j.jsx)(`input`,{className:`ke-footer-input`,type:`number`,name:`neet`,placeholder:`NEET Score`}),(0,j.jsxs)(`select`,{className:`ke-footer-input ke-footer-select`,name:`interest`,defaultValue:``,children:[(0,j.jsx)(`option`,{value:``,disabled:!0,children:`Interested In`}),(0,j.jsx)(`option`,{value:`india`,children:`MBBS in India`}),(0,j.jsx)(`option`,{value:`abroad`,children:`MBBS Abroad`})]}),(0,j.jsxs)(`button`,{className:`ke-footer-submit`,type:`submit`,children:[`Get Free Counselling`,(0,j.jsx)(Pr,{size:15})]})]})]})]}),(0,j.jsx)(`div`,{className:`ke-footer-bottom`,children:(0,j.jsxs)(`div`,{className:`ke-footer-bottom-inner`,children:[(0,j.jsx)(`div`,{className:`ke-footer-copy`,children:`© 2026 Kantule Edutech Pvt. Ltd. All Rights Reserved.`}),(0,j.jsx)(`div`,{className:`ke-footer-legal`})]})}),(0,j.jsx)(`div`,{className:`ke-footer-credit`,children:(0,j.jsx)(`div`,{className:`ke-footer-credit-inner`,children:(0,j.jsxs)(`div`,{className:`ke-footer-credit-badge`,children:[(0,j.jsx)(`span`,{className:`ke-footer-credit-dot`}),(0,j.jsxs)(`a`,{href:`https://www.gdaisolutions.com/`,target:`_blank`,rel:`noreferrer`,children:[`Designed by `,(0,j.jsx)(`strong`,{children:`GD AI Solutions`})]})]})})})]})]})}function Cm(){let[e,t]=(0,x.useState)(!1);return(0,j.jsxs)(`div`,{style:{position:`fixed`,right:`clamp(16px, 2.5%, 20px)`,bottom:`clamp(16px, 2.5vh, 20px)`,zIndex:40},onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[e&&(0,j.jsx)(`div`,{style:{position:`absolute`,right:`70px`,bottom:`8px`,background:`#ffffff`,color:`#082d63`,padding:`10px 15px`,borderRadius:`8px`,whiteSpace:`nowrap`,fontSize:`13px`,fontWeight:`600`,boxShadow:`0 6px 20px rgba(0, 0, 0, 0.15)`},children:`Chat with us on WhatsApp`}),(0,j.jsx)(`button`,{type:`button`,onClick:()=>{window.open(`https://wa.me/918830451660?text=Hello%20Kantule%20Edutech%2C%20I%20would%20like%20to%20know%20more%20about%20MBBS%20admission.`,`_blank`)},"aria-label":`Chat with Kantule Edutech on WhatsApp`,style:{width:`60px`,height:`60px`,padding:`0`,margin:`0`,border:`none`,outline:`none`,borderRadius:`50%`,background:`#16C47F`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,boxShadow:`0 8px 24px rgba(22, 196, 127, 0.35)`,transition:`transform 0.25s ease`},onMouseEnter:e=>{e.currentTarget.style.transform=`scale(1.08)`},onMouseLeave:e=>{e.currentTarget.style.transform=`scale(1)`},children:(0,j.jsxs)(`svg`,{width:`31`,height:`31`,viewBox:`0 0 32 32`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,j.jsx)(`path`,{d:`M16 3C8.82 3 3 8.82 3 16C3 18.29 3.59 20.43 4.63 22.3L3.2 28.8L9.76 27.37C11.62 28.41 13.72 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3Z`,fill:`white`}),(0,j.jsx)(`path`,{d:`M21.4 18.4C21.12 18.26 19.76 17.59 19.51 17.49C19.26 17.4 19.08 17.35 18.9 17.63C18.72 17.91 18.2 18.52 18.05 18.7C17.9 18.89 17.74 18.91 17.46 18.77C17.18 18.63 16.28 18.34 15.22 17.39C14.39 16.65 13.89 15.74 13.74 15.46C13.6 15.18 13.73 15.03 13.87 14.89C14 14.76 14.15 14.55 14.29 14.39C14.43 14.22 14.48 14.1 14.57 13.91C14.67 13.72 14.62 13.56 14.55 13.42C14.48 13.28 13.98 12.07 13.77 11.58C13.57 11.09 13.36 11.16 13.2 11.15C13.05 11.14 12.87 11.14 12.69 11.14C12.51 11.14 12.22 11.21 11.98 11.49C11.74 11.77 11.07 12.4 11.07 13.61C11.07 14.82 11.99 15.99 12.12 16.15C12.25 16.33 13.93 18.92 16.51 20.04C17.13 20.31 17.62 20.47 18 20.59C18.62 20.79 19.18 20.76 19.62 20.68C20.12 20.61 21.16 20.07 21.37 19.47C21.58 18.87 21.58 18.36 21.51 18.25C21.45 18.14 21.28 18.08 21.4 18.4Z`,fill:`#16C47F`})]})})]})}var wm=()=>{let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(!0),[c,l]=(0,x.useState)([{id:1,type:`bot`,text:`Hello! 👋 Welcome to Kantule Edutech.`},{id:2,type:`bot`,text:`I’m your MBBS Admission Assistant. I can help you with MBBS in India, MBBS Abroad, NEET guidance, eligibility, admission process and counselling.`}]),u=(0,x.useRef)(null),d=`8830451660`;(0,x.useEffect)(()=>{e&&u.current?.scrollIntoView({behavior:`smooth`})},[c,i,e]),(0,x.useEffect)(()=>{if(!e&&o){let e=setTimeout(()=>{s(!1)},5e3);return()=>clearTimeout(e)}},[e,o]);let f=e=>{let t=encodeURIComponent(e);window.open(`https://wa.me/918830451660?text=${t}`,`_blank`,`noopener,noreferrer`)},p=(e,t,n=[])=>{l(r=>[...r,{id:Date.now(),type:`user`,text:e},{id:Date.now()+1,type:`bot`,text:t,options:n}])},m=[`MBBS in India`,`MBBS Abroad`,`NEET Guidance`,`Eligibility`,`Admission Process`,`Documents Required`,`Free Counselling`],h=[`Government Medical Colleges`,`Private Medical Colleges`,`Deemed Universities`,`NEET Counselling`,`Back to Main Menu`],g=[`Russia`,`Kyrgyzstan`,`Kazakhstan`,`Georgia`,`Philippines`,`Nepal`,`Vietnam`,`USA & Other Countries`,`Back to Main Menu`],_=[`Step 1 – Counselling`,`Step 2 – Selection`,`Step 3 – Application`,`Step 4 – Admission`,`Step 5 – Documents & Visa`,`Step 6 – Pre-Departure`,`Step 7 – Post-Admission`,`Back to Main Menu`],v=[`WhatsApp Counsellor`,`Call Counsellor`,`Back to Main Menu`],y=e=>({Russia:`Kantule Edutech provides MBBS admission counselling for suitable opportunities in Russia. University selection depends on your NEET status, academic profile, budget and other applicable requirements.`,Kyrgyzstan:`Kantule Edutech provides guidance for MBBS opportunities in Kyrgyzstan. Our counsellors help students understand suitable university options, admission requirements, documentation and the overall admission journey.`,Kazakhstan:`We provide counselling for MBBS opportunities in Kazakhstan. Suitable options can be discussed based on your academic profile, NEET status, budget and university-specific requirements.`,Georgia:`Kantule Edutech provides guidance for MBBS opportunities in Georgia, including university selection, application assistance and documentation guidance.`,Philippines:`We provide counselling for medical education opportunities in the Philippines. Eligibility and admission requirements can vary, so our counsellors can guide you based on your profile.`,Nepal:`Kantule Edutech provides guidance regarding suitable MBBS opportunities in Nepal, subject to applicable eligibility and admission requirements.`,Vietnam:`We provide counselling for MBBS opportunities in Vietnam. University and course requirements vary, so personalised counselling is recommended.`,"USA & Other Countries":`Kantule Edutech can also help students explore other international medical education opportunities, including the USA and other destinations, depending on eligibility and applicable requirements.`})[e]||`Please select a destination to know more about MBBS Abroad options.`,b=e=>{a(!0),setTimeout(()=>{a(!1),S(e)},500)},S=e=>{let t=e.toLowerCase().trim();if(t===`back to main menu`||t.includes(`main menu`)||t===`menu`){p(e,`Sure! What would you like to know about?`,m);return}if(t.includes(`whatsapp counsellor`)||t.includes(`whatsapp counselor`)){f(`Hello Kantule Edutech, I would like to speak with a counsellor regarding MBBS admission guidance.`),p(e,`I’m opening WhatsApp for you. You can connect directly with the Kantule Edutech counselling team for personalised guidance.`);return}if(t.includes(`call counsellor`)||t.includes(`call counselor`)){window.location.href=`tel:${d}`,p(e,`You can contact Kantule Edutech on ${d} for admission counselling.`);return}if(t===`mbbs in india`||t.includes(`mbbs india`)||t.includes(`india mbbs`)){p(e,`Kantule Edutech provides guidance for MBBS admission in India through Government Medical Colleges, Private Medical Colleges and Deemed Universities. We also provide NEET counselling guidance.`,h);return}if(t.includes(`government medical colleges`)){p(e,`For Government Medical Colleges, admission is generally linked with NEET and the applicable counselling process. Suitable options depend on your NEET score, category, academic profile and current counselling rules.`,[`NEET Guidance`,`Admission Process`,`Free Counselling`,`Back to Main Menu`]);return}if(t.includes(`private medical colleges`)){p(e,`Kantule Edutech helps students understand Private Medical College options in India based on their NEET profile, budget and career goals. College-specific fees and admission requirements should be confirmed during counselling.`,[`NEET Guidance`,`Admission Process`,`Free Counselling`,`Back to Main Menu`]);return}if(t.includes(`deemed universities`)){p(e,`Deemed Universities are another MBBS option in India. Suitable options depend on your NEET profile, budget, preferences and applicable admission rules. Our counsellors can help you compare suitable possibilities.`,[`NEET Guidance`,`Free Counselling`,`Admission Process`,`Back to Main Menu`]);return}if(t.includes(`neet counselling`)){p(e,`NEET counselling plays an important role in MBBS admissions. Kantule Edutech helps students understand available options based on their NEET score, academic profile, budget and career goals.`,[`Share My NEET Score`,`MBBS in India`,`MBBS Abroad`,`Free Counselling`]);return}if(t===`mbbs abroad`||t.includes(`mbbs abroad`)||t.includes(`study mbbs abroad`)||t.includes(`foreign mbbs`)){p(e,`Kantule Edutech provides MBBS admission counselling for international destinations. We assist with university selection, application, documentation, visa guidance, pre-departure guidance and post-admission support.`,g);return}let n=g.find(e=>e!==`Back to Main Menu`&&t.includes(e.toLowerCase()));if(n){p(e,y(n),[`Eligibility`,`Documents Required`,`Admission Process`,`Free Counselling`,`Back to Main Menu`]);return}if(t===`eligibility`||t.includes(`eligible`)||t.includes(`qualification`)||t.includes(`eligibility`)){p(e,`For MBBS admission, eligibility generally includes 12th Science with Physics, Chemistry and Biology, NEET qualification where applicable, and other requirements prescribed by the concerned authority, university or country. Requirements can vary by destination.`,[`MBBS in India`,`MBBS Abroad`,`NEET Guidance`,`Free Counselling`]);return}if(t===`admission process`||t.includes(`admission process`)||t.includes(`how admission works`)||t.includes(`admission steps`)){p(e,`Our admission journey is designed to guide students and parents step-by-step. Select a step below to understand the process.`,_);return}if(t.includes(`step 1`)){p(e,`Step 1 – Counselling: We understand the student's academic profile, NEET score, budget and career goals before suggesting suitable options.`,[`Step 2 – Selection`,`Step 3 – Application`,`Free Counselling`,`Back to Main Menu`]);return}if(t.includes(`step 2`)){p(e,`Step 2 – Course & University Selection: Suitable colleges, universities and countries are shortlisted according to the student's profile and preferences.`,[`Step 3 – Application`,`Step 4 – Admission`,`Free Counselling`,`Back to Main Menu`]);return}if(t.includes(`step 3`)){p(e,`Step 3 – Application: Required application forms and documents are prepared and submitted according to the university or applicable admission process.`,[`Step 4 – Admission`,`Step 5 – Documents & Visa`,`Free Counselling`,`Back to Main Menu`]);return}if(t.includes(`step 4`)){p(e,`Step 4 – Admission: The admission process is completed according to the selected university and applicable regulations.`,[`Step 5 – Documents & Visa`,`Step 6 – Pre-Departure`,`Free Counselling`,`Back to Main Menu`]);return}if(t.includes(`step 5`)){p(e,`Step 5 – Documentation & Visa Guidance: Students receive guidance regarding required documents and applicable visa procedures.`,[`Step 6 – Pre-Departure`,`Step 7 – Post-Admission`,`Documents Required`,`Back to Main Menu`]);return}if(t.includes(`step 6`)){p(e,`Step 6 – Pre-Departure Guidance: Students and parents receive important information and guidance before travelling.`,[`Step 7 – Post-Admission`,`Free Counselling`,`Back to Main Menu`]);return}if(t.includes(`step 7`)){p(e,`Step 7 – Post-Admission Support: Kantule Edutech provides guidance and support during the student's admission journey.`,[`Free Counselling`,`WhatsApp Counsellor`,`Back to Main Menu`]);return}if(t.includes(`documents`)||t.includes(`document required`)||t.includes(`paperwork`)){p(e,`Documents may include:

• 10th Marksheet
• 12th Marksheet
• NEET Score Card
• NEET Admit Card
• Passport
• Birth Certificate
• Passport-size Photographs
• Medical Fitness Certificate
• Other documents required by the university/country.

Exact requirements can vary by destination.`,[`Admission Process`,`MBBS in India`,`MBBS Abroad`,`Free Counselling`]);return}if(t.includes(`free counselling`)||t.includes(`free counseling`)||t.includes(`counselling`)||t.includes(`counseling`)||t.includes(`guidance`)){p(e,`Absolutely. Kantule Edutech provides personalised MBBS admission counselling for students and parents. Guidance can cover your NEET profile, suitable course/university options, budget, documentation and admission journey.`,v);return}if(t.includes(`share my neet score`)||t.includes(`neet score`)){p(e,`Please share your NEET score with our counsellor along with your preferred option — MBBS in India or MBBS Abroad. Our team can then guide you based on your profile.`,[`WhatsApp Counsellor`,`MBBS in India`,`MBBS Abroad`,`Back to Main Menu`]);return}if(t.includes(`india or abroad`)||t.includes(`which is better`)||t.includes(`india vs abroad`)){p(e,`The right choice depends on your NEET profile, academic background, budget, preferred location, career goals and applicable admission requirements. Kantule Edutech can help you compare suitable options through personalised counselling.`,[`MBBS in India`,`MBBS Abroad`,`Free Counselling`]);return}if(t.includes(`duration`)||t.includes(`how many years`)||t.includes(`course duration`)){p(e,`MBBS in India is generally 5.5 years including internship, as applicable under current regulations. MBBS Abroad duration varies depending on the country and university.`,[`MBBS in India`,`MBBS Abroad`,`Free Counselling`]);return}if(t.includes(`career`)||t.includes(`after mbbs`)||t.includes(`career opportunities`)){p(e,`After completing medical education and fulfilling applicable licensing/regulatory requirements, students can pursue medical practice, postgraduate studies such as MD/MS, hospitals, healthcare organisations, research and academics.`,[`MBBS in India`,`MBBS Abroad`,`Free Counselling`]);return}if(t.includes(`contact`)||t.includes(`phone`)||t.includes(`number`)||t.includes(`call`)){p(e,`You can contact Kantule Edutech for MBBS admission guidance through phone or WhatsApp.`,v);return}if(t===`hi`||t===`hello`||t===`hey`||t.includes(`good morning`)||t.includes(`good afternoon`)){p(e,`Hello! 👋 How can I help you with your MBBS admission journey?`,m);return}p(e,`I can help you with MBBS admissions in India and abroad, NEET guidance, eligibility, admission process, documents, university selection and counselling. Please select an option below or ask your question in simple words.`,m)},C=()=>{let e=n.trim();!e||i||(r(``),a(!0),l(t=>[...t,{id:Date.now(),type:`user`,text:e}]),setTimeout(()=>{a(!1),S(e)},600))};return(0,j.jsxs)(j.Fragment,{children:[e&&(0,j.jsxs)(`div`,{className:`
            fixed
            right-5
            bottom-[114px]
            z-50
            flex
            w-[380px]
            max-w-[calc(100vw-24px)]
            flex-col
            overflow-hidden
            rounded-[22px]
            border
            border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(15,23,42,0.25)]
            sm:right-4
            sm:bottom-[104px]
          `,style:{height:`min(650px, calc(100vh - 130px))`},children:[(0,j.jsxs)(`div`,{className:`
              flex
              shrink-0
              items-center
              justify-between
              bg-gradient-to-r
              from-[#073B78]
              to-[#078FC9]
              px-4
              py-3.5
              text-white
            `,children:[(0,j.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[(0,j.jsx)(`div`,{className:`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#078FC9]
                  shadow-sm
                `,children:(0,j.jsxs)(`svg`,{width:`23`,height:`23`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,j.jsx)(`path`,{d:`M12 3C7.03 3 3 6.58 3 11c0 2.14.91 4.08 2.42 5.49L5 21l4.77-2.19c.71.19 1.46.29 2.23.29 4.97 0 9-3.58 9-8S16.97 3 12 3Z`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinejoin:`round`}),(0,j.jsx)(`path`,{d:`M8 11h.01M12 11h.01M16 11h.01`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`})]})}),(0,j.jsxs)(`div`,{className:`min-w-0`,children:[(0,j.jsx)(`p`,{className:`truncate text-[14px] font-bold`,children:`Kantule Edutech`}),(0,j.jsxs)(`div`,{className:`mt-0.5 flex items-center gap-1.5`,children:[(0,j.jsx)(`span`,{className:`h-2 w-2 rounded-full bg-green-400`}),(0,j.jsx)(`span`,{className:`text-[10px] text-white/85`,children:`Online • MBBS Admission Assistant`})]})]})]}),(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(`button`,{type:`button`,onClick:()=>{l([{id:Date.now(),type:`bot`,text:`Hello! 👋 Welcome to Kantule Edutech.`},{id:Date.now()+1,type:`bot`,text:`I’m your MBBS Admission Assistant. How can I help you today?`,options:m}]),r(``)},className:`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-white/80
                  transition
                  hover:bg-white/10
                  hover:text-white
                `,"aria-label":`Reset chat`,title:`Start new chat`,children:(0,j.jsxs)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,j.jsx)(`path`,{d:`M3 12a9 9 0 1 0 3-6.7`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,j.jsx)(`path`,{d:`M3 4v5h5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,j.jsx)(`button`,{type:`button`,onClick:()=>t(!1),className:`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-white/80
                  transition
                  hover:bg-white/10
                  hover:text-white
                `,"aria-label":`Close chatbot`,children:(0,j.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:(0,j.jsx)(`path`,{d:`M6 6l12 12M18 6 6 18`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})})})]})]}),(0,j.jsx)(`div`,{className:`
              min-h-0
              flex-1
              overflow-y-auto
              bg-[#F7FAFC]
              px-3
              py-4
            `,children:(0,j.jsxs)(`div`,{className:`space-y-3`,children:[c.map(e=>(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{className:`flex ${e.type===`user`?`justify-end`:`justify-start`}`,children:(0,j.jsx)(`div`,{className:`
                        max-w-[82%]
                        whitespace-pre-line
                        rounded-2xl
                        px-3.5
                        py-2.5
                        text-[12px]
                        leading-[1.55]
                        ${e.type===`user`?`rounded-br-md bg-[#078FC9] text-white`:`rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm`}
                      `,children:e.text})}),e.type===`bot`&&e.options&&e.options.length>0&&(0,j.jsx)(`div`,{className:`mt-2 flex flex-wrap gap-1.5 pl-1`,children:e.options.map(e=>(0,j.jsx)(`button`,{type:`button`,onClick:()=>b(e),disabled:i,className:`
                              rounded-full
                              border
                              border-[#B7DDEC]
                              bg-white
                              px-3
                              py-1.5
                              text-[10.5px]
                              font-semibold
                              text-[#087DAF]
                              transition
                              hover:border-[#078FC9]
                              hover:bg-[#EFFAFF]
                              active:scale-[0.97]
                              disabled:cursor-not-allowed
                              disabled:opacity-50
                            `,children:e},e))})]},e.id)),i&&(0,j.jsx)(`div`,{className:`flex justify-start`,children:(0,j.jsx)(`div`,{className:`
                      rounded-2xl
                      rounded-bl-md
                      border
                      border-slate-100
                      bg-white
                      px-4
                      py-3
                      shadow-sm
                    `,children:(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`typing-dot`}),(0,j.jsx)(`span`,{className:`typing-dot delay-1`}),(0,j.jsx)(`span`,{className:`typing-dot delay-2`})]})})}),(0,j.jsx)(`div`,{ref:u})]})}),(0,j.jsxs)(`div`,{className:`shrink-0 border-t border-slate-200 bg-white p-3`,children:[(0,j.jsxs)(`div`,{className:`
                flex
                min-h-[48px]
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-2
                pl-4
                transition
                focus-within:border-[#078FC9]
                focus-within:bg-white
                focus-within:shadow-[0_0_0_3px_rgba(7,143,201,0.08)]
              `,children:[(0,j.jsx)(`input`,{type:`text`,value:n,onChange:e=>r(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),C())},disabled:i,placeholder:`Ask about MBBS admissions...`,className:`
                  min-w-0
                  flex-1
                  bg-transparent
                  py-2
                  text-[12px]
                  text-slate-700
                  outline-none
                  placeholder:text-slate-400
                  disabled:opacity-60
                `}),(0,j.jsx)(`button`,{type:`button`,onClick:C,disabled:!n.trim()||i,className:`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#078FC9]
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#057CAB]
                  hover:scale-105
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-35
                  disabled:hover:scale-100
                `,"aria-label":`Send message`,title:`Send message`,children:(0,j.jsxs)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,j.jsx)(`path`,{d:`M22 2 11 13`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,j.jsx)(`path`,{d:`m22 2-7 20-4-9-9-4 20-7Z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]}),(0,j.jsx)(`p`,{className:`mt-2 text-center text-[9px] text-slate-400`,children:`Kantule Edutech • Medical Education Guidance`})]})]}),(0,j.jsxs)(`div`,{className:`
          fixed
          bottom-[88px]
          right-[clamp(16px,2.5%,20px)]
          z-40
          flex
          items-center
          gap-3
        `,onMouseEnter:()=>s(!0),onMouseLeave:()=>{e||s(!1)},children:[o&&!e&&(0,j.jsxs)(`div`,{className:`
              rounded-2xl
              border
              border-slate-100
              bg-white
              px-4
              py-3
              shadow-[0_10px_35px_rgba(15,23,42,0.14)]
            `,style:{animation:`chatTooltipIn 0.35s cubic-bezier(0.34,1.56,0.64,1)`},children:[(0,j.jsx)(`p`,{className:`whitespace-nowrap text-[12px] font-bold text-slate-900`,children:`Need MBBS Guidance?`}),(0,j.jsx)(`p`,{className:`mt-0.5 whitespace-nowrap text-[10px] text-slate-500`,children:`Chat with our admission assistant`})]}),(0,j.jsxs)(`button`,{type:`button`,onClick:()=>{t(e=>!e),s(!1)},onMouseEnter:()=>{e||s(!0)},"aria-label":e?`Close Kantule Edutech chatbot`:`Open Kantule Edutech chatbot`,title:`Kantule Edutech Admission Assistant`,className:`
            relative
            flex
            h-[60px]
            w-[60px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-[#078FC9]
            to-[#073B78]
            text-white
            shadow-[0_12px_35px_rgba(7,143,201,0.32)]
            transition-all
            duration-300
            hover:scale-110
            active:scale-95
          `,children:[(0,j.jsx)(`span`,{className:`
              absolute
              right-0
              top-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-green-500
            `}),e?(0,j.jsx)(`svg`,{width:`26`,height:`26`,viewBox:`0 0 24 24`,fill:`none`,children:(0,j.jsx)(`path`,{d:`M6 6l12 12M18 6 6 18`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`})}):(0,j.jsxs)(`svg`,{width:`29`,height:`29`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,j.jsx)(`path`,{d:`M20 11.5a7.5 7.5 0 0 1-7.5 7.5c-1.15 0-2.24-.26-3.21-.72L5 20l1.72-4.29A7.46 7.46 0 0 1 5 11.5 7.5 7.5 0 1 1 20 11.5Z`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinejoin:`round`}),(0,j.jsx)(`path`,{d:`M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`})]})]})]}),(0,j.jsx)(`style`,{children:`
        @keyframes chatTooltipIn {
          from {
            opacity: 0;
            transform: translateX(12px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .typing-dot {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #078fc9;
          animation: chatbotTyping 1.2s infinite ease-in-out;
        }

        .delay-1 {
          animation-delay: 0.15s;
        }

        .delay-2 {
          animation-delay: 0.3s;
        }

        @keyframes chatbotTyping {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }

          30% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        @media (max-width: 640px) {
          .chatbot-mobile-window {
            right: 12px;
            left: 12px;
            width: auto;
          }
        }
      `})]})};function Tm(){let{pathname:e}=mt();return(0,x.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`instant`})},[e]),null}var Em=`/assets/img1-ChhraWmz.png`,Dm=`/assets/img2-9ePTytEL.png`,Om=`/assets/img3-B8dwOYXc.png`,km=`/assets/img1-C5KrMMmN.jpg`,Am=`/assets/img2-Du09fF0k.jpg`,jm=`/assets/img3-BgT2s-mk.jpg`,Mm=`/assets/img4-DQ4tqSwx.jpg`,Nm=`/assets/img5-D19C8guJ.jpg`,Pm=[`All Universities`,`Russia`,`Kyrgyzstan`,`Kazakhstan`,`Georgia`,`Philippines`,`Nepal`,`Vietnam`,`USA & Other Destinations`],Fm=[{id:`bsmu`,name:`Bashkir State Medical University`,country:`Russia`,city:`Ufa`,image:`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/bsmu1.webp`},{id:`susmu`,name:`South Ural State Medical University`,country:`Russia`,city:`Chelyabinsk`,image:`https://www.udaanedutech.in/assets/images/udaan/university/susmu/susmu1.webp`},{id:`ncsa`,name:`North Caucasus State Academy`,country:`Russia`,city:`Cherkessk`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/ncsa1.webp`},{id:`rsmu`,name:`Ryazan State Medical University`,country:`Russia`,city:`Ryazan`,image:`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/rsmu1.webp`},{id:`vsmu`,name:`Voronezh State Medical University`,country:`Russia`,city:`Voronezh`,image:`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/vsmu1.webp`},{id:`ysmu`,name:`Yaroslavl State Medical University`,country:`Russia`,city:`Yaroslavl`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ysmu/ysmu1.webp`},{id:`ihsm`,name:`International Higher School of Medicine`,country:`Kyrgyzstan`,city:`Bishkek`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ihsm/ihsm1.webp`},{id:`ksmu-kg`,name:`Kyrgyz State Medical Academy`,country:`Kyrgyzstan`,city:`Bishkek`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ksma/ksma1.webp`},{id:`krmu`,name:`Kazakh Russian Medical University`,country:`Kazakhstan`,city:`Almaty`,image:`https://www.udaanedutech.in/assets/images/udaan/university/krmu/krmu1.webp`},{id:`cism`,name:`Caspian International School of Medicine`,country:`Kazakhstan`,city:`Almaty`,image:`https://www.udaanedutech.in/assets/images/udaan/university/cism/cism1.webp`},{id:`ksu`,name:`Kokshetau State University`,country:`Kazakhstan`,city:`Kokshetau`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ksu/ksu1.webp`},{id:`gau`,name:`Georgian American University`,country:`Georgia`,city:`Tbilisi`,image:`https://www.udaanedutech.in/assets/images/udaan/university/gau/gau1.webp`},{id:`eeu`,name:`East European University`,country:`Georgia`,city:`Tbilisi`,image:`https://www.udaanedutech.in/assets/images/udaan/university/eeu/eeu1.webp`},{id:`alte`,name:`Alte University`,country:`Georgia`,city:`Tbilisi`,image:`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/alte1.webp`},{id:`ctump`,name:`Can Tho University of Medicine and Pharmacy`,country:`Vietnam`,city:`Can Tho`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ctump/ctump1.webp`},{id:`dtu`,name:`Duy Tan University`,country:`Vietnam`,city:`Da Nang`,image:`https://www.udaanedutech.in/assets/images/udaan/university/dtu/dtu1.webp`},{id:`ust-manila`,name:`University of Santo Tomas`,country:`Philippines`,city:`Manila`,image:`https://medicine.ust.edu.ph/wp-content/uploads/2024/10/UST-FMS.jpg`},{id:`up-manila`,name:`University of the Philippines Manila - College of Medicine`,country:`Philippines`,city:`Manila`,image:`https://cm.upm.edu.ph/wp-content/uploads/2020/08/upcm.jpg`},{id:`tribhuvan-iom`,name:`Tribhuvan University Institute of Medicine`,country:`Nepal`,city:`Kathmandu`,image:`https://iom.tu.edu.np/assets/images/logo.png`}],Im=`/assets/ihsm-BTaqrYvi.png`,Lm=`/assets/osh-state-university-CuYRN6bt.png`,Rm=`/assets/asian-medical-institute-DHolf0F1.png`,zm={india:[{id:`aiims-new-delhi`,name:`AIIMS, New Delhi`,location:`New Delhi, India`,type:`Government Institute`,recognition:`NMC Approved`,image:`/images/colleges/india/aiims-new-delhi.jpeg`,description:`All India Institute of Medical Sciences, New Delhi is one of India's leading government medical institutions with extensive clinical exposure and advanced healthcare infrastructure.`,highlights:[`Premier Government Medical Institution`,`Advanced Clinical & Hospital Infrastructure`,`High Patient Exposure`,`Strong Academic & Research Environment`,`Nationally Recognized Medical Education`],admission:`NEET UG / MCC Counselling`,duration:`5.5 Years`,medium:`English`},{id:`mamc-delhi`,name:`Maulana Azad Medical College, Delhi`,location:`New Delhi, India`,type:`Government College`,recognition:`NMC Approved`,image:`/images/colleges/india/mamc-delhi.jpeg`,description:`Maulana Azad Medical College is a major government medical institution in Delhi known for clinical exposure, teaching hospitals and strong medical academics.`,highlights:[`Government Medical College`,`Strong Clinical Patient Exposure`,`Large Teaching Hospital Network`,`Experienced Faculty`,`Strong Academic Environment`],admission:`NEET UG / MCC Counselling`,duration:`5.5 Years`,medium:`English`},{id:`cmc-vellore`,name:`Christian Medical College`,location:`Vellore, Tamil Nadu`,type:`Private / Deemed`,recognition:`NMC Approved`,image:`/images/colleges/india/cmc-vellore.jpeg`,description:`Christian Medical College, Vellore is a reputed medical institution known for healthcare services, medical education, research and clinical training.`,highlights:[`Highly Reputed Medical Institution`,`Advanced Clinical Training`,`Large Teaching Hospital`,`Research-Oriented Environment`,`Experienced Medical Faculty`],admission:`NEET UG`,duration:`5.5 Years`,medium:`English`},{id:`kasturba-manipal`,name:`Kasturba Medical College`,location:`Manipal, Karnataka`,type:`Private / Deemed`,recognition:`NMC Approved`,image:`/images/colleges/india/kasturba-manipal.jpeg`,description:`Kasturba Medical College, Manipal provides modern medical education with advanced clinical facilities, teaching hospitals and a strong academic ecosystem.`,highlights:[`Modern Medical Campus`,`Advanced Hospital Infrastructure`,`Strong Clinical Exposure`,`Research & Academic Opportunities`,`International Student Environment`],admission:`NEET UG`,duration:`5.5 Years`,medium:`English`},{id:`jipmer-puducherry`,name:`JIPMER, Puducherry`,location:`Puducherry, India`,type:`Government Institute`,recognition:`NMC Approved`,image:`/images/colleges/india/jipmer-puducherry.jpeg`,description:`JIPMER is a premier government medical institution known for advanced healthcare, clinical teaching, medical research and comprehensive patient care.`,highlights:[`Premier Government Institute`,`Advanced Clinical Facilities`,`High Patient Footfall`,`Strong Research Environment`,`Experienced Clinical Faculty`],admission:`NEET UG / MCC Counselling`,duration:`5.5 Years`,medium:`English`}],russia:[{id:`bsmu`,name:`Bashkir State Medical University`,location:`Ufa, Russia`,type:`Government Medical University`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/bsmu1.webp`,established:`1932`,course:`MBBS / MD Equivalent`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`399,000 RUB (~$5,000)`,description:`Bashkir State Medical University (BSMU), founded in 1932, is one of Russia's leading state medical universities located in Ufa, the capital of the Republic of Bashkortostan. BSMU offers a 6-year MBBS/MD equivalent program in English for international students and has a strong tradition of academic excellence, clinical training, and medical research. The university is recognized by NMC, WHO, and other major international bodies, making its degree globally accepted.`,highlights:[`Recognized by WHO, NMC and International Medical Councils`,`High-tech Simulation and Surgical Training Center`,`Over 8,000+ Students including International Aspirants`,`Affordable Tuition and University Hostel Facilities`,`English-Medium MBBS / General Medicine Program`,`Practical clinical postings in multi-specialty state hospitals in Ufa`],admission:`NEET Qualified / Direct Merit`,advantages:[`Recognized by WHO, NMC India, WDOMS and FAIMER`,`Established in 1932 — over 90 years of medical excellence`,`Comprehensive 6-year English-medium MBBS program`,`High-tech surgical simulation and skills lab`,`Extensive clinical exposure in large Ufa city hospitals`,`Multicultural student environment with 8,000+ students`,`Affordable tuition and on-campus hostel facilities`,`Strong coaching and preparation for FMGE/NExT and USMLE`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic Medical Sciences — Anatomy, Histology, Biochemistry, Physiology`},{year:`3rd & 4th Year`,description:`Pre-Clinical Studies — Pathology, Pharmacology, Microbiology, Diagnostics`},{year:`5th & 6th Year`,description:`Clinical Rotations — Hospital postings in Surgery, Therapy, Pediatrics, Gynecology and other specialties`}],fees:{tuition:`399,000 RUB/year (~$5,000)`,hostel:`15,000 – 50,000 RUB/year`,totalTuition:`~2,394,000 RUB (~$30,000 total)`},feeNote:`Approximate INR conversion: ₹83 per USD. ~$5,000/year ≈ ₹4.15 Lakhs/year. Total ~$30,000 ≈ ₹24.9 Lakhs for 6 years.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Science and Higher Education of Russia`],campusFacilities:[`Advanced surgical simulation laboratory`,`Vast library with thousands of electronic journals and research resources`,`University dental clinic and multi-profile teaching clinics`,`Sports complex with swimming pool and gymnasium`,`Modern anatomy museum and pathology labs`,`Student clubs and cultural activity centers`],hostelFacilities:[`Affordable government university hostels`,`Furnished rooms with study spaces and shared bathrooms`,`Central heating system and 24/7 hot water supply`,`High level of safety with biometric entry systems`,`Common kitchen and self-cooking facilities`,`Wi-Fi connectivity across hostels`],faqs:[{q:`Is NEET mandatory for BSMU?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC guidelines.`},{q:`Is the MBBS degree from BSMU valid in India?`,a:`Yes. BSMU is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice in India.`},{q:`What is the medium of instruction?`,a:`The MBBS program at BSMU is taught in English for international students.`},{q:`What is the total cost of studying MBBS at BSMU?`,a:`The approximate total tuition for 6 years is around 2,394,000 RUB (~$30,000 / ₹24.9 Lakhs).`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/bsmu1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/bsmu2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/gallery/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/gallery/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/gallery/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/gallery/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/bsmu/gallery/5.webp`]}},{id:`susmu`,name:`South Ural State Medical University`,location:`Chelyabinsk, Russia`,type:`Government Medical University`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/susmu/susmu1.webp`,established:`1944`,course:`MBBS / MD Equivalent`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$3,000 – $4,500 per year`,description:`South Ural State Medical University (SUSMU), founded in 1944, is a state-run medical university in Chelyabinsk, Russia. The university offers a 6-year MBBS/MD equivalent program and is well-known for its strong emphasis on practical and clinical training. SUSMU has a robust infrastructure including modern anatomy and pathology laboratories and is affiliated with multi-specialty teaching hospitals.`,highlights:[`Premier Medical University in Chelyabinsk Region`,`Modern Anatomy and Pathology Laboratories`,`Affiliated Multi-Specialty Teaching Hospitals`,`Comprehensive Practical and Clinical Exposure`,`Comfortable On-Campus International Hostels`],admission:`NEET Qualified / Direct Merit`,advantages:[`Premier medical university in the Chelyabinsk region`,`Modern anatomy and pathology laboratories`,`Affiliated multi-specialty teaching hospitals for clinical training`,`Comprehensive practical and clinical exposure from early years`,`Comfortable on-campus international hostels`,`Qualified teaching faculty with small study groups`,`WHO and NMC recognized degree`,`Strong support for FMGE/NExT exam preparation`],courseStructure:[{year:`1st & 2nd Year`,description:`General and Pre-clinical disciplines — Anatomy, Physiology, Histology, Biochemistry`},{year:`3rd & 4th Year`,description:`Clinical pathologies, diagnostics and surgical basics`},{year:`5th & 6th Year`,description:`Specialized clinical rotations, hospital postings and internship`}],fees:{tuition:`$3,000 – $4,500 per year`,hostel:`$200 – $500 per year`,totalTuition:`$20,000 – $24,000 total`},feeNote:`Approximate INR conversion at ₹83/USD: $3,000–$4,500/year ≈ ₹2.49–3.74 Lakhs/year. Total $20,000–$24,000 ≈ ₹16.6–19.9 Lakhs.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Health of the Russian Federation`],campusFacilities:[`State-of-the-art anatomy museum and practical laboratories`,`Central medical library and research block`,`Affiliated clinics and diagnostic services`,`Gymnasium and athletics halls`,`Modern digital classrooms and simulation rooms`],hostelFacilities:[`Comfortable dormitories within the university campus`,`Equipped kitchens and self-study rooms`,`24/7 security with cameras and security guard checks`,`Proximity to markets and city public transit`,`Central heating and hot water throughout the year`],faqs:[{q:`Is NEET mandatory for SUSMU?`,a:`Yes. Indian students must be NEET qualified as per NMC regulations.`},{q:`Is the MBBS degree from SUSMU recognized in India?`,a:`Yes. SUSMU is recognized by NMC. Graduates must clear NExT/FMGE to practice in India.`},{q:`What is the medium of instruction at SUSMU?`,a:`English is the primary medium of instruction for the MBBS program.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/susmu/susmu1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/susmu/susmu2.webp`],campus:[]}},{id:`ncsa`,name:`North Caucasus State Academy`,location:`Cherkessk, Russia`,type:`State Academy`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/ncsa1.webp`,established:`1936`,course:`MBBS / MD Equivalent`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`280,000 – 300,000 RUB per year`,description:`North Caucasus State Academy (NCSA) is located in Cherkessk, the capital of the Karachay-Cherkess Republic in Russia. Founded in 1936, it offers a 6-year MBBS/MD equivalent program through its medical faculty. The academy is recognized by WHO and NMC India and is popular among international students for its affordable tuition and supportive academic environment.`,highlights:[`NMC & WHO Recognized Medical Degree`,`Strong Emphasis on Early Clinical Practice`,`Affordable Living Expenses and Tuition`,`Supportive International Student Community`,`Modern Digital Classrooms and Libraries`],admission:`NEET Qualified`,advantages:[`NMC & WHO recognized medical degree from a state institution`,`Strong emphasis on early clinical practice in city clinics`,`Highly affordable tuition fees and low living expenses`,`Supportive and growing international student community`,`Modern digital classrooms and updated library resources`,`Safe and peaceful city environment in Cherkessk`],courseStructure:[{year:`1st & 2nd Year`,description:`Foundational medical science subjects — Anatomy, Biochemistry, Physiology`},{year:`3rd & 4th Year`,description:`Clinical diagnostics, therapeutics and surgery basics`},{year:`5th & 6th Year`,description:`Hospital practice, specialized clinical rotations and seminars`}],fees:{tuition:`280,000 – 300,000 RUB per year`,hostel:`10,000 – 12,000 RUB per year`,totalTuition:`1,680,000 – 1,800,000 RUB total`},feeNote:`Approximate INR: 280,000 RUB/year ≈ ₹2.6 Lakhs/year (at ~₹0.93/RUB). Total cost over 6 years ≈ ₹15.6–16.7 Lakhs.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Science and Higher Education of Russia`],campusFacilities:[`Modern lecture halls and practical workrooms`,`Comprehensive library with online academic portals`,`Clinical training centers and city hospital postings`,`Canteens and sports facilities`,`Internet-equipped computer labs`],hostelFacilities:[`Furnished rooms with basic necessities`,`Central heating, water, and power systems`,`Shared kitchen and laundry rooms`,`Secured residential building with access control`],faqs:[{q:`Is NEET mandatory for admission to NCSA?`,a:`Yes. NEET qualification is mandatory for Indian students per NMC guidelines.`},{q:`Is NCSA recognized by NMC?`,a:`Yes. North Caucasus State Academy is recognized by NMC India, WHO and WDOMS.`},{q:`What is the fee at North Caucasus State Academy?`,a:`Tuition is approximately 280,000–300,000 RUB per year (≈ ₹2.6 Lakhs/year). Total for 6 years is approximately 1,680,000–1,800,000 RUB.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/ncsa1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/ncsa2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/gallery/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/gallery/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/gallery/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/gallery/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/gallery/5.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ncsa/gallery/6.webp`]}},{id:`rsmu`,name:`Ryazan State Medical University`,location:`Ryazan, Russia`,type:`Government Medical University`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/rsmu1.webp`,established:`1943`,course:`MBBS / MD Equivalent`,duration:`6 Years (including internship)`,medium:`English / Russian`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$4,000 – $5,500 per year`,description:`Ryazan State Medical University, named after academician I.P. Pavlov, was established in 1943 and is one of Russia's historically significant medical institutions. Located in Ryazan, the university offers a 6-year MBBS/MD program with a strong focus on clinical training. It is recognized by WHO, NMC India, WDOMS, FAIMER, and ECFMG (USA), making its degree valid for licensing worldwide.`,highlights:[`One of Russia's Oldest and Reputed Medical Schools`,`Full English-Medium 6-Year MBBS Curriculum`,`Extensive Clinical Base in City Hospitals`,`High Passing Rate in Licensing Examinations`,`Active Student Life and Research Societies`,`Recognized by ECFMG (USA) and GMC (UK)`],admission:`NEET Qualified`,advantages:[`Named after Nobel laureate I.P. Pavlov — one of Russia's prestigious medical universities`,`Full English-Medium 6-year MBBS curriculum`,`Extensive clinical base in large Ryazan regional hospitals`,`High FMGE/NExT passing rate among graduates`,`Recognized by ECFMG (USA) enabling international residency applications`,`Active student life with research societies and cultural clubs`,`Living cost approximately $150–$250/month`],courseStructure:[{year:`1st & 2nd Year`,description:`Pre-clinical sciences — Anatomy, Physiology, Histology, Biochemistry`},{year:`3rd & 4th Year`,description:`Clinical subjects, Pathology, Pharmacology, Internal Medicine`},{year:`5th & 6th Year`,description:`Clinical rotations — Gynecology, Pediatrics, Surgery, Practical Internship`}],fees:{tuition:`$4,000 – $5,500 per year`,hostel:`$500 – $600 per year`,totalTuition:`$24,000 – $30,000 total`},feeNote:`Approximate INR conversion at ₹83/USD: $4,000–$5,500/year ≈ ₹3.32–4.57 Lakhs/year. Total $24,000–$30,000 ≈ ₹19.9–24.9 Lakhs. Living expenses: $150–$250/month ≈ ₹12,450–20,750/month.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`ECFMG (Educational Commission for Foreign Medical Graduates, USA)`],campusFacilities:[`Well-equipped academic blocks and clinical simulation center`,`Vast scientific library with digital databases and e-journals`,`In-house medical center and affiliated regional clinics`,`Recreational parks, gymnasium, and athletics arena`,`Student club facilities and cultural halls`],hostelFacilities:[`On-campus dormitories with double/triple sharing rooms`,`24/7 security control, CCTV and fire-alarm systems`,`Access to high-speed internet and study halls`,`Communal kitchen spaces and self-cooking utilities`,`Central heating and hot water supply throughout the year`],faqs:[{q:`Is NEET required for admission to RSMU?`,a:`Yes. Indian students must be NEET qualified as per NMC India guidelines.`},{q:`Is Ryazan State Medical University recognized in India?`,a:`Yes. RSMU is recognized by NMC India, WHO and WDOMS. It is also recognized by ECFMG (USA).`},{q:`Can RSMU graduates apply for USMLE?`,a:`Yes. Since RSMU is recognized by ECFMG, graduates are eligible to appear for USMLE for US residency.`},{q:`What is the living expense per month in Ryazan?`,a:`Estimated living expenses are approximately $150–$250 per month (≈ ₹12,450–20,750/month).`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/rsmu1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/rsmu2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/gallery/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/gallery/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/gallery/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/gallery/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/gallery/5.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/rsmu/gallery/6.webp`]}},{id:`vsmu`,name:`Voronezh State Medical University`,location:`Voronezh, Russia`,type:`Government Medical University`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/vsmu1.webp`,established:`1918`,course:`MBBS / MD Equivalent`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`380,000 – 450,000 RUB per year`,description:`Voronezh State Medical University (VSMU), established in 1918, is one of Russia's oldest and most prestigious medical universities. Located in Voronezh, it has a rich history spanning over 100 years and offers a 6-year MBBS/MD equivalent program with a multinational student body. VSMU is recognized by WHO, NMC India, WDOMS and FAIMER and provides extensive clinical training in affiliated city hospitals.`,highlights:[`Centenary Medical Institution with High Reputation`,`Advanced Diagnostic and Clinical Training Centers`,`Multinational Student Body from over 50 Countries`,`Experienced Clinical Faculty and Professors`,`WHO and NMC Approved Medical Curriculum`],admission:`NEET Qualified`,advantages:[`Founded in 1918 — over 100 years of medical education excellence`,`Advanced diagnostic and clinical training centers`,`Multinational student body from over 50 countries`,`Experienced clinical faculty and respected professors`,`WHO and NMC approved medical curriculum`,`Strong preparation for FMGE/NExT licensing examinations`,`Affordable total cost approximately ₹18–22 Lakhs for the complete program`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic sciences, anatomy and theoretical medicine — Anatomy, Histology, Biochemistry, Physiology`},{year:`3rd & 4th Year`,description:`Pre-clinical medicine, pathophysiology and diagnostics`},{year:`5th & 6th Year`,description:`Clinical rotations, hospital practice and clinical internships`}],fees:{tuition:`380,000 – 450,000 RUB per year`,hostel:`50,000 – 60,000 RUB per year`,totalTuition:`Approx. ₹18–22 Lakhs total cost`},feeNote:`Approx. INR: 380,000–450,000 RUB/year ≈ ₹3.5–4.2 Lakhs/year (at ~₹0.93/RUB). Living expenses: $150–$300/month ≈ ₹12,450–24,900/month.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Health & Education of Russia`],campusFacilities:[`Modern classrooms and clinical simulation tools`,`Rich library database with access to electronic systems`,`Research laboratories and specialized academic departments`,`Canteens and sports facilities`,`Student center with cultural and recreational programs`],hostelFacilities:[`Comfortable, safe student dormitories`,`Centralized heating and hot water services throughout the year`,`Shared kitchen and laundry amenities`,`24/7 security with warden surveillance`,`Wi-Fi internet connectivity`],faqs:[{q:`Is NEET mandatory for VSMU?`,a:`Yes. Indian students must have a valid NEET score as per NMC India requirements.`},{q:`Is VSMU recognized by NMC India?`,a:`Yes. Voronezh State Medical University is recognized by NMC India and WHO.`},{q:`What is the total estimated cost of MBBS at VSMU?`,a:`The total cost including tuition and hostel is approximately ₹18–22 Lakhs for the 6-year program.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/vsmu1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/vsmu2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/gallery/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/gallery/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/gallery/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/gallery/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/gallery/5.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/vsmu/gallery/6.webp`]}},{id:`ysmu`,name:`Yaroslavl State Medical University`,location:`Yaroslavl, Russia`,type:`Government Medical University`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ysmu/ysmu1.webp`,established:`1944`,course:`MBBS / MD Equivalent`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`262,000 – 350,000 RUB per year`,description:`Yaroslavl State Medical University (YSMU), established in 1944, is a prominent medical university in the historic city of Yaroslavl, Russia. YSMU offers a 6-year MBBS/MD equivalent program with strong emphasis on clinical training through its network of regional hospitals. The university is recognized by WHO, NMC India, WDOMS and FAIMER, and is known for providing a high quality of life in a safe academic environment.`,highlights:[`Recognized by NMC, WHO and International Boards`,`Modern Clinical Simulation Complex`,`Large Network of Regional Clinical Hospitals`,`High Quality of Life and Safe Environment`,`Continuous Guidance and Mentorship for Foreign Students`],admission:`NEET Qualified`,advantages:[`Recognized by NMC India, WHO, WDOMS and FAIMER`,`Modern clinical simulation complex with advanced equipment`,`Large network of regional hospitals for clinical rotations`,`High quality of life in the historic and safe city of Yaroslavl`,`Continuous academic guidance and mentorship for international students`,`Affordable tuition — one of the lowest among Russian medical universities`,`Strong exam preparation support for FMGE/NExT`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic theory and medical sciences — Anatomy, Histology, Physiology, Biochemistry`},{year:`3rd & 4th Year`,description:`Pathological disciplines and clinical diagnostics`},{year:`5th & 6th Year`,description:`Specialized medicine, surgery and hospital clinical practice`}],fees:{tuition:`262,000 – 350,000 RUB per year`,hostel:`48,000 RUB per year`,totalTuition:`Approx. $23,000 – $24,000 total`},feeNote:`Approx. INR: 262,000–350,000 RUB/year ≈ ₹2.4–3.3 Lakhs/year (at ~₹0.93/RUB). Total ~$23,000–$24,000 ≈ ₹19.1–19.9 Lakhs. Living: $150–$300/month ≈ ₹12,450–24,900/month.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Health & Education of Russia`],campusFacilities:[`Interactive classrooms and modern diagnostic equipment`,`Library with access to global medical research databases`,`Clinical simulation lab and anatomy museum`,`Student center and athletics complex`],hostelFacilities:[`Safe student hostels close to main academic blocks`,`Furnished rooms with study tables, cupboards, and central heating`,`Shared kitchens and laundry areas`,`24/7 monitoring and secure entry checkpoints`,`High-speed Wi-Fi internet access`],faqs:[{q:`Is NEET required for YSMU admission?`,a:`Yes. NEET score is mandatory for Indian students as per NMC India regulations.`},{q:`Is Yaroslavl State Medical University recognized by NMC India?`,a:`Yes. YSMU is recognized by NMC India, WHO, WDOMS and FAIMER.`},{q:`What is the annual tuition fee at YSMU?`,a:`Tuition ranges from 262,000–350,000 RUB per year, which is approximately ₹2.4–3.3 Lakhs per year.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/ysmu/ysmu1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ysmu/ysmu2.webp`],campus:[]}}],kyrgyzstan:[{id:`ihsm`,name:`International Higher School of Medicine`,location:`Bishkek, Kyrgyzstan`,type:`International Medical School`,recognition:`NMC / WHO / FAIMER`,image:Im,established:`2003`,course:`MBBS / MD Equivalent`,duration:`5 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$3,500 – $4,500 per year`,description:`International Higher School of Medicine (IHSM), Bishkek, established in 2003, is Kyrgyzstan's leading international medical school specifically designed for foreign students with 100% English-medium instruction. IHSM has its own multi-profile University Hospital and extensive clinical bases, making it a top choice for Indian medical aspirants. The university is recognized by WHO, NMC India, WDOMS and FAIMER.`,highlights:[`Top Choice for Indian Students in Kyrgyzstan`,`100% English Medium Curriculum`,`Own Multi-profile Hospital and Clinical Bases`,`Indian Mess, Food and Dedicated Hostel Facilities`,`Strong Preparation for NExT / FMGE and USMLE`],admission:`NEET Qualified / Direct`,advantages:[`100% English-medium MBBS program designed for international students`,`Own multi-profile University Hospital for clinical training`,`NMC India, WHO, WDOMS and FAIMER recognized degree`,`Indian mess with authentic Indian food options`,`Dedicated comfortable hostel facilities for Indian students`,`Strong academic support for FMGE/NExT and USMLE preparation`,`Affordable total fee package with transparent fee structure`,`Established in 2003 with over 20 years of experience for international students`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic medical sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`3rd Year`,description:`Pre-clinical and clinical transition — Pathology, Pharmacology, Microbiology`},{year:`4th & 5th Year`,description:`Clinical rotations in IHSM University Hospital and affiliated clinical bases`}],fees:{tuition:`$3,500 – $4,500 per year`,hostel:`$600 – $900 per year`,totalTuition:`$17,500 – $22,500 for 5 years`},feeNote:`Approximate INR conversion at ₹83/USD: $3,500–$4,500/year ≈ ₹2.91–3.74 Lakhs/year. Total $17,500–$22,500 ≈ ₹14.5–18.7 Lakhs for 5 years.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Education and Science of Kyrgyz Republic`],campusFacilities:[`Own multi-profile University Hospital with live patient exposure`,`State-of-the-art simulation labs and anatomy dissection rooms`,`Modern lecture halls and digital learning infrastructure`,`Library with access to international medical journals`,`Sports and recreational facilities within campus`,`Student clubs, cultural centers and support offices`],hostelFacilities:[`Dedicated on-campus hostels for Indian students`,`Indian mess providing authentic North and South Indian meals`,`Furnished double and triple sharing rooms with study areas`,`24/7 security with warden surveillance and biometric access`,`Central heating and Wi-Fi internet connectivity`,`Laundry, housekeeping and common kitchen facilities`],faqs:[{q:`Is NEET mandatory for IHSM Bishkek?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India guidelines.`},{q:`Is IHSM recognized by NMC India?`,a:`Yes. IHSM is recognized by NMC India, WHO, WDOMS and FAIMER.`},{q:`Does IHSM have its own hospital?`,a:`Yes. IHSM has its own multi-profile University Hospital and several affiliated clinical bases for practical training.`},{q:`What is the total fee for MBBS at IHSM?`,a:`Total tuition for 5 years is approximately $17,500–$22,500 (≈ ₹14.5–18.7 Lakhs).`},{q:`Is Indian food available at IHSM?`,a:`Yes. IHSM has dedicated Indian mess providing authentic Indian food for Indian students.`}]},{id:`osh-state-university`,name:`Osh State University`,location:`Osh, Kyrgyzstan`,type:`National State University`,recognition:`NMC / WHO Approved`,image:Lm,established:`1951`,course:`MBBS / MD Equivalent`,duration:`5 to 6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$2,800 – $3,500 per year`,description:`Osh State University (OshSU), established in 1951, is one of the largest and most prestigious public universities in southern Kyrgyzstan. Its Medical Faculty offers a 5–6 year MBBS/MD equivalent program in English. OshSU is recognized by WHO, NMC India and WDOMS, and has produced thousands of Indian graduates who are now practicing physicians worldwide.`,highlights:[`One of the Largest Public Universities in Central Asia`,`Extensive Clinical Rotations in Teaching Hospitals`,`Affordable Tuition and Low Cost of Living`,`Experienced Academic Professors and Doctors`,`Thousands of Indian Graduates Practicing Worldwide`],admission:`NEET Qualified`,advantages:[`One of the largest state universities in Central Asia — established 1951`,`Recognized by WHO, NMC India and WDOMS`,`Extensive clinical rotations in large teaching hospitals in Osh`,`Affordable government university tuition fees`,`Very low cost of living in Osh city`,`Large established Indian student community`,`Thousands of alumni practicing as doctors worldwide`,`Supportive academic environment for international students`],courseStructure:[{year:`1st & 2nd Year`,description:`Foundation medical sciences — Anatomy, Histology, Biochemistry, Physiology, Normal Physiology`},{year:`3rd & 4th Year`,description:`Clinical and pre-clinical sciences — Pathology, Pharmacology, Microbiology, Internal Medicine`},{year:`5th & 6th Year`,description:`Hospital clinical rotations — Surgery, Gynecology, Pediatrics, Dentistry, General Practice`}],fees:{tuition:`$2,800 – $3,500 per year`,hostel:`$400 – $600 per year`,totalTuition:`$14,000 – $21,000 total`},feeNote:`Approximate INR conversion at ₹83/USD: $2,800–$3,500/year ≈ ₹2.32–2.91 Lakhs/year. Total $14,000–$21,000 ≈ ₹11.6–17.4 Lakhs.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Education and Science of Kyrgyz Republic`],campusFacilities:[`Vast university campus with multiple academic faculties`,`Anatomy laboratory with cadaver dissection facilities`,`Teaching hospitals affiliated for direct clinical exposure`,`Digital library and study rooms`,`Cafeteria and student activity spaces`],hostelFacilities:[`Government university hostels at affordable rates`,`Furnished rooms with central heating`,`Common kitchen, laundry and study areas`,`24/7 security and warden management`,`Wi-Fi internet across hostel premises`],faqs:[{q:`Is NEET required for Osh State University?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India regulations.`},{q:`Is Osh State University recognized by NMC?`,a:`Yes. Osh State University is recognized by NMC India, WHO and WDOMS.`},{q:`What is the annual fee at Osh State University?`,a:`Annual tuition is approximately $2,800–$3,500 (≈ ₹2.32–2.91 Lakhs/year).`},{q:`How many Indian students study at Osh State University?`,a:`Osh State University has one of the largest Indian student communities among Kyrgyz universities with thousands of Indian alumni practicing worldwide.`}]},{id:`asian-medical-institute`,name:`Asian Medical Institute`,location:`Kant, Kyrgyzstan`,type:`International Medical Institute`,recognition:`NMC / WHO Approved`,image:Rm,established:`2000`,course:`MBBS / MD Equivalent`,duration:`5 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$3,200 – $4,000 per year`,description:`Asian Medical Institute (ASMI), established in 2000 and located in Kant, Kyrgyzstan, is one of the leading medical institutions for international students in Central Asia. Known for its Indian faculty members, authentic Indian mess, and comprehensive support for Indian students, ASMI offers a 5-year English-medium MBBS program. It is recognized by WHO, NMC India and WDOMS.`,highlights:[`Indian Faculty and Visiting Professors`,`Indian Mess Providing Authentic Indian Food`,`Affordable Complete Package with Hostels`,`WHO and NMC Listed Medical Degree`,`Safe Campus with 24/7 Security and Support`],admission:`NEET Qualified / Direct`,advantages:[`Indian faculty members and visiting Indian professors for familiar learning environment`,`Authentic Indian mess with North and South Indian meal options`,`Affordable all-inclusive package covering tuition, hostel and meals`,`WHO and NMC India recognized medical degree`,`Safe, secure campus with 24/7 security and student support teams`,`5-year compact MBBS program with early clinical exposure`,`Located in Kant, a clean and safe city close to Bishkek`,`Strong coaching for FMGE/NExT and USMLE licensing exams`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic medical sciences — Anatomy, Histology, Physiology, Biochemistry`},{year:`3rd Year`,description:`Pre-clinical subjects — Pathology, Pharmacology, Microbiology, Social Medicine`},{year:`4th & 5th Year`,description:`Clinical rotations and hospital internships at affiliated teaching hospitals`}],fees:{tuition:`$3,200 – $4,000 per year`,hostel:`$700 – $1,000 per year`,totalTuition:`$16,000 – $20,000 total`},feeNote:`Approximate INR conversion at ₹83/USD: $3,200–$4,000/year ≈ ₹2.66–3.32 Lakhs/year. Total $16,000–$20,000 ≈ ₹13.3–16.6 Lakhs for 5 years.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Education and Science of Kyrgyz Republic`],campusFacilities:[`Modern academic building with lecture halls and labs`,`Anatomy dissection lab and pathology practical rooms`,`Library with medical textbooks and digital resources`,`Sports facility and recreational areas`,`Student canteen with Indian and local cuisine`],hostelFacilities:[`On-campus safe hostels with furnished rooms`,`Authentic Indian mess available on campus`,`Central heating and 24/7 hot water supply`,`24/7 warden security and CCTV surveillance`,`Wi-Fi internet, laundry and common kitchen facilities`],faqs:[{q:`Is NEET required for Asian Medical Institute?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India requirements.`},{q:`Is ASMI recognized by NMC India?`,a:`Yes. Asian Medical Institute is recognized by NMC India, WHO and WDOMS.`},{q:`Is Indian food available at ASMI?`,a:`Yes. ASMI has an on-campus Indian mess providing authentic Indian food for students.`},{q:`What is the duration of MBBS at ASMI?`,a:`The MBBS program at Asian Medical Institute is 5 years in duration.`}]},{id:`ksmu-kg`,name:`Kyrgyz State Medical Academy`,location:`Bishkek, Kyrgyzstan`,type:`Government Medical Academy`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ksma/ksma1.webp`,established:`1939`,course:`MBBS / MD Equivalent`,duration:`5 to 6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$3,000 – $4,000 per year`,description:`Kyrgyz State Medical Academy (KSMA), named after I.K. Akhunbaev, is Kyrgyzstan's oldest and most prestigious government medical institution founded in 1939. Located in Bishkek, KSMA is recognized as the flagship center of medical education and research in Central Asia. The academy offers a 5–6 year MBBS/MD equivalent program and has a vast clinical base with high patient inflow through its affiliated state hospitals.`,highlights:[`Kyrgyzstan's Oldest Government Medical Academy`,`Leading Medical Research Center in Central Asia`,`High Inflow of Clinical Cases in State Hospitals`,`NMC, WHO & UNESCO Recognized`,`Comprehensive Library and Digital Anatomy Resources`],admission:`NEET Qualified`,advantages:[`Kyrgyzstan's oldest government medical academy — established 1939`,`Flagship medical research center in Central Asia`,`High volume of clinical cases in affiliated large state hospitals`,`Recognized by NMC India, WHO, WDOMS and UNESCO`,`Comprehensive library and digital anatomy learning resources`,`Affordable government-rate tuition fees`,`Large, established international and Indian student community`,`Strong academic foundation for FMGE/NExT and global licensing`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic sciences — Anatomy, Normal Physiology, Biochemistry, Histology, Latin`},{year:`3rd & 4th Year`,description:`Clinical sciences — Pathological Physiology, Pathological Anatomy, Pharmacology, Internal Diseases`},{year:`5th & 6th Year`,description:`Clinical practice — Surgery, Gynecology, Pediatrics, Neurology, Psychiatry, Hospital rotations`}],fees:{tuition:`$3,000 – $4,000 per year`,hostel:`$500 – $700 per year`,totalTuition:`$15,000 – $24,000 total`},feeNote:`Approximate INR conversion at ₹83/USD: $3,000–$4,000/year ≈ ₹2.49–3.32 Lakhs/year. Total $15,000–$24,000 ≈ ₹12.5–19.9 Lakhs.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`UNESCO`,`Ministry of Education and Science of Kyrgyz Republic`],campusFacilities:[`Historic academic campus with multiple medical faculty departments`,`State-of-the-art anatomy museum and pathology lab`,`Affiliated large state clinical hospitals with high patient flow`,`Digital library with international medical databases`,`Student canteen and sports recreation areas`],hostelFacilities:[`On-campus government dormitories at affordable rates`,`Furnished rooms with central heating and hot water`,`Common kitchen, laundry and study facilities`,`Round-the-clock security and warden supervision`,`Wi-Fi internet access and social spaces`],faqs:[{q:`Is NEET mandatory for KSMA?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India guidelines.`},{q:`Is Kyrgyz State Medical Academy recognized by NMC?`,a:`Yes. KSMA is recognized by NMC India, WHO, WDOMS and FAIMER.`},{q:`What is the duration of MBBS at KSMA?`,a:`The program is 5 to 6 years depending on specialization track and internship inclusion.`},{q:`What is the annual tuition fee at KSMA?`,a:`Annual tuition is approximately $3,000–$4,000 per year (≈ ₹2.49–3.32 Lakhs/year).`}]}],kazakhstan:[{id:`krmu`,name:`Kazakh Russian Medical University`,location:`Almaty, Kazakhstan`,type:`Private Medical University`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/krmu/krmu1.webp`,established:`1992`,course:`MBBS / MD Equivalent`,duration:`6 Years (5 years academic + 1 year internship)`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$4,500 per year`,description:`Kazakh Russian Medical University (KRMU) is a well-known private medical university located in Almaty, Kazakhstan. Established in 1992, KRMU has become a popular destination for international students pursuing medical education. The university offers a 6-year MBBS program consisting of academic study and a clinical internship. KRMU attracts international students because of its English-medium program, affordable tuition fees, modern infrastructure, and strong medical training facilities.`,highlights:[`Globally Recognized Medical Degree`,`English-Medium MBBS Program`,`Modern Laboratories and Classrooms`,`Clinical Training in Affiliated Hospitals`,`Preparation Support for NExT / FMGE, USMLE and PLAB`],admission:`NEET Qualified`,advantages:[`Globally recognized medical degree`,`English-medium MBBS program`,`Affordable tuition fees`,`Modern laboratories and digital classrooms`,`Clinical training in affiliated hospitals`,`Experienced multinational medical faculty`,`Multinational and diverse student environment`,`Safe and comfortable campus`,`Dedicated preparation support for NExT / FMGE`,`Preparation support for USMLE`,`Preparation support for PLAB`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic Medical Sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`3rd & 4th Year`,description:`Pre-Clinical Medical Studies — Pathology, Pharmacology, Microbiology, Internal Medicine`},{year:`5th Year`,description:`Clinical Medical Subjects — Surgery, Pediatrics, Gynecology, Clinical Rotations`},{year:`6th Year`,description:`Internship & Clinical Rotations in affiliated hospitals`}],fees:{tuition:`$4,500 per year`,hostel:`$700 – $900 per year`,food:`$1,500 – $2,500 per year`,totalTuition:`$22,500 – $27,000 total tuition`},feeNote:`Approximate INR conversion at ₹83/USD: $4,500/year ≈ ₹3.74 Lakhs/year. Hostel: $700–$900/year ≈ ₹58,100–74,700/year. Total tuition $22,500–$27,000 ≈ ₹18.7–22.4 Lakhs.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Education and Science of Kazakhstan`],campusFacilities:[`Modern digital classrooms`,`Advanced medical laboratories`,`Well-equipped library and research center`,`Clinical training hospitals`,`Sports and recreational facilities`,`Student activity and cultural clubs`,`High-speed internet throughout campus`],hostelFacilities:[`Fully furnished rooms`,`Separate accommodation for boys and girls`,`24/7 Wi-Fi internet connectivity`,`CCTV security surveillance`,`Electricity and water supply`,`Laundry and housekeeping services`,`Dining and kitchen facilities`,`Safe and secure environment for international students`],faqs:[{q:`Where is Kazakh Russian Medical University located?`,a:`KRMU is located in Almaty, the largest city and financial capital of Kazakhstan.`},{q:`What is the duration of the MBBS course?`,a:`The MBBS program at KRMU is 6 years — 5 years of academic study plus 1 year of clinical internship.`},{q:`What is the medium of instruction?`,a:`The medium of instruction at KRMU is English.`},{q:`Is NEET required for admission?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India regulations.`},{q:`Can graduates practice in India?`,a:`Yes. KRMU is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice in India.`}]},{id:`cism`,name:`Caspian International School of Medicine`,location:`Almaty, Kazakhstan`,type:`International Medical School`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/cism/cism1.webp`,established:`1992`,course:`MBBS / MD Equivalent`,duration:`6 Years (5 years academic + 1 year internship)`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$4,500 – $7,000 per year`,description:`Caspian International School of Medicine (CISM) is affiliated with Caspian University in Almaty, Kazakhstan, established in 1992. CISM offers a 6-year MBBS/MD equivalent program in English and is known for its modern infrastructure, European-standard medical education, and strong clinical training. The school attracts international students from across Asia and beyond.`,highlights:[`Ultra-Modern Campus in Almaty`,`Small Batch Sizes for Interactive Clinical Learning`,`English Medium with Global Curriculum Standards`,`Affiliation with Premier Hospitals in Almaty`,`Active Student Support and International Mentorship`],admission:`NEET Qualified`,advantages:[`Globally recognized medical degree`,`English-medium MBBS program`,`Affordable tuition fees`,`Modern laboratories and medical facilities`,`Clinical training in affiliated hospitals`,`Experienced international medical faculty`,`International and multicultural student environment`,`Safe and comfortable campus`,`Preparation support for NExT / FMGE`,`Preparation support for USMLE`,`Preparation support for PLAB`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic Medical Sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`3rd & 4th Year`,description:`Pre-Clinical Medical Studies — Pathology, Pharmacology, Microbiology, Internal Medicine`},{year:`5th Year`,description:`Clinical Medical Subjects — Surgery, Pediatrics, Obstetrics, Neurology`},{year:`6th Year`,description:`Internship & Clinical Rotations in affiliated hospitals`}],fees:{tuition:`1st Year: $7,000 | 2nd–6th Year: $4,500 per year`,hostel:`$800 – $1,000 per year`,totalTuition:`$32,000 – $34,500 total`},feeNote:`Approximate INR conversion at ₹83/USD: 1st Year $7,000 ≈ ₹5.81 Lakhs. 2nd–6th Year $4,500/year ≈ ₹3.74 Lakhs/year. Total $32,000–$34,500 ≈ ₹26.6–28.6 Lakhs. Hostel: $800–$1,000/year ≈ ₹66,400–83,000/year.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`Ministry of Education and Science of Kazakhstan`],campusFacilities:[`Modern digital classrooms`,`Advanced medical laboratories`,`Clinical training hospitals`,`Library and research centers`,`Sports and recreational facilities`,`Student activity and cultural clubs`,`High-speed Wi-Fi throughout campus`],hostelFacilities:[`Fully furnished hostel rooms`,`Separate accommodation for boys and girls`,`24/7 Wi-Fi internet connectivity`,`CCTV security surveillance`,`Electricity and water supply`,`Laundry and housekeeping services`,`Dining and kitchen facilities`],faqs:[{q:`Where is Caspian International School of Medicine located?`,a:`CISM is located in Almaty, Kazakhstan, affiliated with Caspian University.`},{q:`What is the duration of the MBBS course?`,a:`The MBBS program is 6 years — 5 years of academic study plus 1 year of clinical internship.`},{q:`What is the medium of instruction?`,a:`The medium of instruction at CISM is English.`},{q:`Is NEET required?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India guidelines.`},{q:`Can students practice in India?`,a:`Yes. CISM is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice medicine in India.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/cism/cism1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/cism/cism2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/cism/gallery/campus/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/cism/gallery/campus/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/cism/gallery/campus/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/cism/gallery/campus/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/cism/gallery/campus/5.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/cism/gallery/campus/6.webp`]}},{id:`ksu`,name:`Kokshetau State University`,location:`Kokshetau, Kazakhstan`,type:`Public State University`,recognition:`NMC / WHO Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ksu/ksu1.webp`,established:`1962`,course:`MBBS / MD Equivalent`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$3,800 per year`,description:`Kokshetau State University, also known as Shokan Ualikhanov Kokshetau University, is a public university located in Kokshetau, Kazakhstan. Established in 1962, the university has grown into a recognized institution of higher education in Kazakhstan. Its medical faculty offers a 6-year MBBS/MD equivalent program in English, providing a combination of theoretical academic training and clinical hospital exposure.`,highlights:[`Government State University Accreditation`,`Highly Affordable Tuition and Living Costs`,`English Medium Medical Programs`,`Practical Clinical Posting from 3rd Year Onwards`,`Safe Campus Environment with Full Security`],admission:`NEET Qualified`,advantages:[`Globally recognized medical degree`,`English-medium MBBS program`,`Affordable tuition fees among Kazakhstan universities`,`Modern laboratories and academic infrastructure`,`Clinical training in affiliated hospitals`,`Multinational student community`,`Safe and student-friendly environment`,`Preparation support for NExT/FMGE, USMLE and PLAB`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic Medical Sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`3rd & 4th Year`,description:`Pre-Clinical Medical Studies — Pathology, Pharmacology, Microbiology`},{year:`5th Year`,description:`Clinical Medical Subjects — Internal Medicine, Surgery, Pediatrics`},{year:`6th Year`,description:`Internship & Clinical Rotations in affiliated hospitals`}],fees:{tuition:`$3,800 per year`,hostel:`$800 per year`,food:`$1,300 per year`,totalTuition:`$22,000 – $25,000 total`},feeNote:`Approximate INR conversion at ₹83/USD: $3,800/year ≈ ₹3.15 Lakhs/year. Hostel: $800/year ≈ ₹66,400/year. Mess/Food: $1,300/year ≈ ₹1.08 Lakhs/year. Total $22,000–$25,000 ≈ ₹18.3–20.8 Lakhs.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Education and Science of Kazakhstan`],campusFacilities:[`Modern digital classrooms`,`Advanced medical laboratories`,`Library and research centers`,`Clinical training hospitals`,`Sports and recreational facilities`,`Student clubs and activities`,`High-speed Wi-Fi throughout campus`],hostelFacilities:[`Furnished hostel rooms`,`Separate accommodation for boys and girls`,`24/7 Wi-Fi internet connectivity`,`CCTV security surveillance`,`Electricity and water supply`,`Laundry and housekeeping services`,`Kitchen and dining facilities`],faqs:[{q:`Where is Kokshetau State University located?`,a:`Kokshetau State University is located in Kokshetau city, Kazakhstan. It is also known as Shokan Ualikhanov Kokshetau University.`},{q:`What is the duration of the MBBS course?`,a:`The MBBS program at KSU is 6 years in duration.`},{q:`What is the medium of instruction?`,a:`The medium of instruction is English.`},{q:`Is NEET required?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India regulations.`},{q:`Can students practice in India?`,a:`Yes. KSU is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice medicine in India.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/ksu/ksu1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ksu/ksu2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/ksu/gallery/campus/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ksu/gallery/campus/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ksu/gallery/campus/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ksu/gallery/campus/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ksu/gallery/campus/5.webp`]}},{id:`kaznmu`,name:`Kazakh National Medical University`,location:`Almaty, Kazakhstan`,type:`National Medical University`,recognition:`NMC / WHO Approved`,image:`https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80`,description:`Kazakh National Medical University is the premier national medical university of Kazakhstan, recognized as the flagship center of medical science.`,highlights:[`National Flagship Medical University of Kazakhstan`,`Massive Hospital Network with Thousands of Beds`,`Ranked among Top Central Asian Medical Institutions`,`High Research and Clinical Output`,`Recognized by WHO, NMC, WFME and International Councils`],admission:`NEET Qualified`,duration:`5 to 6 Years`,medium:`English`}],georgia:[{id:`gau`,name:`Georgian American University`,location:`Tbilisi, Georgia`,type:`Private University`,recognition:`WHO / NMC Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/gau/gau1.webp`,established:`2001`,medicalSchoolStarted:`2017`,course:`MD (Equivalent to MBBS)`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$5,500 – $6,000 per year`,description:`Georgian American University (GAU) is a private higher education institution located in Tbilisi, Georgia. The university was established in 2001 and its Medical School was launched in 2017. GAU provides medical education using modern teaching methods and international academic standards. The medical program follows ECTS credit system and includes both theoretical education and clinical training in affiliated hospitals.`,highlights:[`Globally Recognized MD Degree`,`English-Medium 6-Year Medical Program`,`Modern Infrastructure and Medical Laboratories`,`Clinical Training in Affiliated Hospitals`,`Preparation Support for NExT / FMGE, USMLE and PLAB`],admission:`NEET Qualified`,advantages:[`Globally recognized medical degree`,`English-medium education following international standards`,`Affordable tuition fees`,`Modern infrastructure and advanced medical laboratories`,`Clinical training in affiliated Georgian hospitals`,`Experienced international faculty`,`International and multicultural student environment`,`Safe and student-friendly country`,`Preparation support for NExT / FMGE`,`Preparation support for USMLE`,`Preparation support for PLAB`,`Career opportunities after graduation`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic Medical Sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`3rd & 4th Year`,description:`Pre-Clinical Medical Studies — Pathology, Pharmacology, Microbiology, Internal Medicine`},{year:`5th & 6th Year`,description:`Clinical Rotations and Hospital Training — Surgery, Pediatrics, Gynecology and specialties`}],fees:{tuition:`$5,500 – $6,000 per year`,hostel:`$1,500 – $3,000 per year`,food:`$2,000 – $3,000 per year`,totalTuition:`$33,000 – $36,000 total tuition`},feeNote:`Approximate INR conversion at ₹83/USD: $5,500–$6,000/year ≈ ₹4.57–4.98 Lakhs/year. Total tuition $33,000–$36,000 ≈ ₹27.4–29.9 Lakhs. Hostel: $1,500–$3,000/year ≈ ₹1.25–2.49 Lakhs/year. Food & Living: $2,000–$3,000/year ≈ ₹1.66–2.49 Lakhs/year.`,recognitionDetails:[`Ministry of Education and Science of Georgia`,`National Center for Educational Quality Enhancement (Georgia)`,`WHO (World Health Organization)`,`NMC India (National Medical Commission) / Former MCI`,`WDOMS (World Directory of Medical Schools)`],campusFacilities:[`Advanced medical laboratories`,`Modern digital classrooms`,`Medical training and simulation centers`,`Library and research facilities`,`Hostel accommodation`],hostelFacilities:[`Comfortable hostel rooms`,`Separate accommodation for boys and girls`,`24/7 Wi-Fi internet connectivity`,`CCTV security surveillance`,`Electricity and water supply`,`Central heating system`,`Laundry and housekeeping services`,`Common kitchen`,`Dining facilities`,`Recreational areas`],staff:[{name:`Karlo Matitaishvili`,role:`Acting Dean of the Medical School`},{name:`Nino Tsiskarishvili`,role:`Medical School`},{name:`Nino Kasradze`,role:`Medical School`},{name:`Valiko Begiashvili`,role:`Medical School`},{name:`Nino Gzirishvili`,role:`Medical School`},{name:`Guram Kerashvili`,role:`Medical School`},{name:`Medea Khmelidze`,role:`Medical School`},{name:`Sophio Kakaliashvili-Dzagnidze`,role:`Medical School`},{name:`Giorgi Dugashvili`,role:`Medical School`},{name:`Giorgi Kharebava`,role:`Medical School`},{name:`Shorena Tukvadze`,role:`Medical School`}],faqs:[{q:`Where is Georgian American University located?`,a:`GAU is located in Tbilisi, the capital of Georgia.`},{q:`What is the duration of the MD course?`,a:`The MD program at GAU is 6 years in duration.`},{q:`What is the medium of instruction?`,a:`The medium of instruction at GAU is English.`},{q:`Is NEET required for admission?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India regulations.`},{q:`Can graduates practice in India?`,a:`Yes. GAU is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice medicine in India.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/gau/gau1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/gau/gau2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/gau/gallery/campus/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/gau/gallery/campus/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/gau/gallery/campus/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/gau/gallery/campus/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/gau/gallery/campus/5.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/gau/gallery/campus/6.webp`]}},{id:`eeu`,name:`East European University`,location:`Tbilisi, Georgia`,type:`Private University`,recognition:`WHO / NMC Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/eeu/eeu1.webp`,established:`2012`,course:`MD (Equivalent to MBBS)`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$5,000 – $5,500 per year (approx.)`,description:`East European University is a private higher education institution located in Tbilisi, Georgia, established in 2012. The university offers a 6-year MD program equivalent to MBBS with English as the medium of instruction. EEU is recognized by the Ministry of Education and Science of Georgia, WHO, NMC India, WDOMS, ECFMG, FAIMER and WFME, making it a globally accepted medical qualification.`,highlights:[`Globally Recognized MD Degree`,`English-Medium 6-Year Medical Program`,`Modern Digital Classrooms and Simulation Labs`,`Clinical Training in Affiliated Hospitals`,`Recognized by ECFMG, FAIMER and WFME`],admission:`NEET Qualified`,advantages:[`Globally recognized medical degree`,`English-medium education`,`Affordable tuition fees`,`Modern medical laboratories`,`Modern academic infrastructure`,`Clinical training in affiliated hospitals`,`Experienced faculty`,`International and multicultural student community`,`Safe campus environment`,`Preparation support for NExT / FMGE`,`Preparation support for USMLE`,`Preparation support for PLAB`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic Medical Sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`3rd & 4th Year`,description:`Pre-Clinical Medical Studies — Pathology, Pharmacology, Microbiology, Internal Medicine`},{year:`5th & 6th Year`,description:`Clinical Rotations and Hospital Training — Surgery, Pediatrics, Gynecology and specialties`}],fees:{tuition:`$30,000 – $33,000 total (6 years)`,hostelAndLiving:`$18,000 – $20,000 total (6 years)`,totalCost:`$45,000 – $50,000 estimated total`},feeNote:`Approximate INR conversion at ₹83/USD: Total tuition $30,000–$33,000 ≈ ₹24.9–27.4 Lakhs. Hostel & Living $18,000–$20,000 ≈ ₹14.9–16.6 Lakhs. Estimated total $45,000–$50,000 ≈ ₹37.4–41.5 Lakhs.`,recognitionDetails:[`Ministry of Education and Science of Georgia`,`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`ECFMG (Educational Commission for Foreign Medical Graduates)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`WFME (World Federation for Medical Education)`],campusFacilities:[`Modern digital classrooms`,`Advanced medical laboratories`,`Library and research resources`,`Clinical skills and simulation training center`,`Affiliated hospitals for clinical practice`,`Hostel accommodation`,`Cafeteria`,`Sports facilities`,`High-speed Wi-Fi throughout campus`,`Secure campus environment`],hostelFacilities:[`Furnished rooms`,`Separate accommodation for boys and girls`,`Wi-Fi internet connectivity`,`CCTV security surveillance`,`Electricity and water supply`,`Central heating system`,`Laundry facilities`,`Kitchen`,`Dining area`,`Study areas`],faqs:[{q:`Where is East European University located?`,a:`EEU is located in Tbilisi, the capital of Georgia.`},{q:`What is the duration of the MD course?`,a:`The MD program at EEU is 6 years in duration.`},{q:`What is the medium of instruction?`,a:`The medium of instruction at EEU is English.`},{q:`Is NEET required for admission?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India regulations.`},{q:`Can graduates practice in India?`,a:`Yes. EEU is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice medicine in India.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/eeu/eeu1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/eeu/eeu2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/eeu/gallery/campus/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/eeu/gallery/campus/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/eeu/gallery/campus/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/eeu/gallery/campus/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/eeu/gallery/campus/5.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/eeu/gallery/campus/6.webp`]}},{id:`alte`,name:`Alte University`,location:`Tbilisi, Georgia`,type:`Private University`,recognition:`WHO / NMC Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/alte1.webp`,established:`2002`,course:`MD (Equivalent to MBBS)`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$5,500 per year`,description:`Alte University is a modern private university located in Tbilisi, Georgia. It was founded in 2002 and was formerly known as Tbilisi Open University. The university offers a Medical Doctor (MD) program taught in English for international students. Alte University is recognized by the Ministry of Education and Science of Georgia, WHO, NMC India, WDOMS and WFME.`,highlights:[`Globally Recognized MD Degree`,`English-Medium 6-Year Medical Program`,`Modern Digital Classrooms and Laboratories`,`Clinical Training in Affiliated Hospitals`,`Recognized by WHO, NMC, WDOMS and WFME`],admission:`NEET Qualified`,advantages:[`Globally recognized medical degree`,`English-medium medical program`,`Affordable tuition fees`,`Modern digital classrooms`,`Advanced medical laboratories`,`Clinical training in affiliated hospitals`,`Experienced faculty`,`International and multicultural student community`,`Safe campus environment`,`Preparation support for NExT / FMGE`,`Preparation support for USMLE`,`Preparation support for PLAB`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic Medical Sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`3rd & 4th Year`,description:`Pre-Clinical Medical Studies — Pathology, Pharmacology, Microbiology, Internal Medicine`},{year:`5th & 6th Year`,description:`Clinical Rotations and Hospital Training — Surgery, Pediatrics, Gynecology and specialties`}],fees:{tuition:`$5,500 per year`,hostel:`$2,500 – $3,000 per year`,food:`$2,000 – $3,000 per year`,totalTuition:`$30,000 – $33,000 total tuition`},feeNote:`Approximate INR conversion at ₹83/USD: $5,500/year ≈ ₹4.57 Lakhs/year. Total tuition $30,000–$33,000 ≈ ₹24.9–27.4 Lakhs. Hostel: $2,500–$3,000/year ≈ ₹2.08–2.49 Lakhs/year. Food & Living: $2,000–$3,000/year ≈ ₹1.66–2.49 Lakhs/year.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`WFME (World Federation for Medical Education)`,`Ministry of Education and Science of Georgia`],campusFacilities:[`Modern digital classrooms`,`Advanced medical laboratories`,`Library and research facilities`,`Clinical skills and simulation center`,`Affiliated hospitals for clinical training`,`Hostel accommodation`,`Cafeteria`,`Sports facilities`,`High-speed Wi-Fi throughout campus`,`Secure campus environment`],hostelFacilities:[`Furnished rooms`,`Separate accommodation for boys and girls`,`Wi-Fi internet connectivity`,`CCTV security surveillance`,`Electricity and water supply`,`Central heating system`,`Laundry facilities`,`Kitchen`,`Dining area`,`Study areas`],faqs:[{q:`Where is Alte University located?`,a:`Alte University is located in Tbilisi, the capital of Georgia.`},{q:`What is the duration of the MD course?`,a:`The MD program at Alte University is 6 years in duration.`},{q:`What is the medium of instruction?`,a:`The medium of instruction at Alte University is English.`},{q:`Is NEET required for admission?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India regulations.`},{q:`Can graduates practice in India?`,a:`Yes. Alte University is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice medicine in India.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/alte1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/alte2.webp`],campus:[`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/gallery/campus/1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/gallery/campus/2.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/gallery/campus/3.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/gallery/campus/4.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/gallery/campus/5.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/gallery/campus/6.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/alte_university/gallery/campus/7.webp`]}},{id:`batumi-state`,name:`Batumi Shota Rustaveli State University`,location:`Batumi, Georgia`,type:`State University`,recognition:`EU / WHO / NMC`,image:`https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80`,description:`A premier government state university situated in the coastal resort city of Batumi offering affordable European medical education.`,highlights:[`Public State University with Long Standing Legacy`,`Coastal City with High Quality of Life`,`Modern Clinical Departments and Laboratories`,`Affordable Tuition Fees for European MD`,`WHO and NMC Recognized Medical Qualification`],admission:`NEET Qualified`,duration:`6 Years`,medium:`English`}],vietnam:[{id:`ctump`,name:`Can Tho University of Medicine and Pharmacy`,location:`Can Tho City, Vietnam`,type:`Government Medical University`,recognition:`WHO / NMC Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/ctump/ctump1.webp`,established:`1979`,course:`MBBS / MD Equivalent`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$3,800 – $6,000 per year`,description:`Can Tho University of Medicine and Pharmacy is a government medical university located in Can Tho City, Vietnam. The medical faculty was originally founded in 1979 and later developed into an independent medical university serving the Mekong Delta region. The university offers medical education with academic and clinical training programs. CTUMP is recognized by WHO, NMC India, WDOMS and FAIMER.`,highlights:[`Government Medical University`,`Globally Recognized Medical Degree`,`English-Medium MBBS Program`,`Affordable Tuition Fees`,`Clinical Training in Affiliated Hospitals`],admission:`NEET Qualified`,advantages:[`Government medical university with recognized accreditation`,`Globally recognized medical degree`,`English-medium MBBS program`,`Affordable tuition fees`,`Experienced faculty`,`Modern medical laboratories`,`Clinical training in affiliated hospitals`,`International student community`,`Safe and welcoming environment`,`Preparation support for NExT / FMGE`,`Preparation support for USMLE`,`Preparation support for PLAB`],courseStructure:[{year:`1st & 2nd Year`,description:`Basic Medical Sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`3rd & 4th Year`,description:`Pre-Clinical Medical Studies — Pathology, Pharmacology, Microbiology, Internal Medicine`},{year:`5th Year`,description:`Clinical Medical Subjects — Surgery, Pediatrics, Gynecology, Internal Medicine`},{year:`6th Year`,description:`Internship & Clinical Rotations in affiliated hospitals`}],fees:{tuition:`$3,800 – $6,000 per year`,hostel:`Around ₹1.9 Lakhs per year`,food:`₹15,000 – ₹30,000 per month`,totalCost:`Approximately ₹25 – ₹47 Lakhs total (depending on accommodation and expenses)`},feeNote:`Approximate INR conversion at ₹83/USD: $3,800–$6,000/year ≈ ₹3.15–4.98 Lakhs/year. Hostel: approximately ₹1.9 Lakhs/year. Food & Living: ₹15,000–₹30,000/month. Total estimated cost: ₹25–₹47 Lakhs over 6 years.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Education and Training of Vietnam`],campusFacilities:[`Modern classrooms`,`Advanced medical laboratories`,`Clinical simulation centers`,`Library and research facilities`,`Sports facilities`,`Student clubs and activities`,`High-speed Wi-Fi throughout campus`],hostelFacilities:[`Furnished hostel rooms`,`Separate accommodation for boys and girls`,`Wi-Fi internet connectivity`,`CCTV security surveillance`,`Electricity and water supply`,`Laundry facilities`,`Housekeeping services`,`Dining facilities`,`Kitchen`,`Indian food options available`],faqs:[{q:`Where is Can Tho University of Medicine and Pharmacy located?`,a:`CTUMP is located in Can Tho City, Vietnam, in the Mekong Delta region.`},{q:`What is the duration of the MBBS course?`,a:`The MBBS/MD equivalent program at CTUMP is 6 years in duration.`},{q:`What is the medium of instruction?`,a:`The medium of instruction at CTUMP is English.`},{q:`Is NEET required for admission?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India regulations.`},{q:`Can graduates practice in India?`,a:`Yes. CTUMP is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice medicine in India.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/ctump/ctump1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/ctump/ctump2.webp`],campus:[]}},{id:`dtu`,name:`Duy Tan University`,location:`Da Nang, Vietnam`,type:`Private University`,recognition:`WHO / NMC Approved`,image:`https://www.udaanedutech.in/assets/images/udaan/university/dtu/dtu1.webp`,established:`1994`,course:`MBBS / MD Equivalent`,duration:`6 Years`,medium:`English`,eligibility:`12th with PCB + NEET`,annualTuitionFee:`$3,500 – $6,000 per year`,description:`Duy Tan University is a private university located in Da Nang, Vietnam. It was established in 1994 and has grown into one of Vietnam's leading universities. The medical program combines theoretical learning with clinical training and hospital exposure. DTU is recognized by WHO, NMC India, WDOMS and FAIMER.`,highlights:[`Globally Recognized Medical Degree`,`English-Medium MBBS Program`,`Modern Medical Laboratories and Facilities`,`Clinical Training in Affiliated Teaching Hospitals`,`Preparation Support for NExT / FMGE, USMLE and PLAB`],admission:`NEET Qualified`,advantages:[`Globally recognized medical degree`,`English-medium MBBS program`,`Affordable tuition fees`,`Modern advanced medical laboratories`,`Advanced medical facilities`,`Clinical training in affiliated hospitals`,`Experienced faculty`,`International and multicultural student community`,`Safe campus environment`,`Preparation support for NExT / FMGE`,`Preparation support for USMLE`,`Preparation support for PLAB`],courseStructure:[{year:`1st Year`,description:`English foundation & basic sciences`},{year:`2nd & 3rd Year`,description:`Basic Medical Sciences — Anatomy, Physiology, Biochemistry, Histology`},{year:`4th & 5th Year`,description:`Pre-Clinical and Clinical Subjects — Pathology, Pharmacology, Internal Medicine, Surgery`},{year:`6th Year`,description:`Internship & Clinical Rotations in affiliated hospitals`}],fees:{tuition:`$3,500 – $6,000 per year`,hostel:`$600 – $1,000 per year`,food:`$150 – $250 per month`,totalTuition:`$25,000 – $35,000 estimated total`},feeNote:`Approximate INR conversion at ₹83/USD: $3,500–$6,000/year ≈ ₹2.91–4.98 Lakhs/year. Hostel: $600–$1,000/year ≈ ₹49,800–83,000/year. Food & Living: $150–$250/month ≈ ₹12,450–20,750/month. Total $25,000–$35,000 ≈ ₹20.75–29.05 Lakhs.`,recognitionDetails:[`WHO (World Health Organization)`,`NMC India (National Medical Commission)`,`WDOMS (World Directory of Medical Schools)`,`FAIMER (Foundation for Advancement of International Medical Education)`,`Ministry of Education and Training of Vietnam`],campusFacilities:[`Modern classrooms`,`Advanced medical laboratories`,`Clinical simulation centers`,`Library and research facilities`,`Teaching hospitals for clinical training`,`Sports facilities`,`High-speed Wi-Fi throughout campus`],hostelFacilities:[`Furnished hostel rooms`,`Separate accommodation for boys and girls`,`Wi-Fi internet connectivity`,`CCTV security surveillance`,`Electricity and water supply`,`Laundry facilities`,`Housekeeping services`,`Dining facilities`,`Kitchen`,`Indian food options available`],faqs:[{q:`Where is Duy Tan University located?`,a:`Duy Tan University is located in Da Nang, Vietnam.`},{q:`What is the duration of the medical program?`,a:`The MBBS/MD equivalent program at Duy Tan University is 6 years in duration.`},{q:`Is the medical degree internationally recognized?`,a:`Yes. Duy Tan University is recognized by WHO, NMC India, WDOMS and FAIMER.`},{q:`Is NEET required?`,a:`Yes. NEET qualification is mandatory for Indian students as per NMC India regulations.`},{q:`Can students practice in India?`,a:`Yes. DTU is recognized by NMC India. Graduates must clear the NExT (formerly FMGE) to practice medicine in India.`}],gallery:{main:[`https://www.udaanedutech.in/assets/images/udaan/university/dtu/dtu1.webp`,`https://www.udaanedutech.in/assets/images/udaan/university/dtu/dtu2.webp`],campus:[]}},{id:`hiu`,name:`Hong Bang International University`,location:`Ho Chi Minh City, Vietnam`,type:`International University`,recognition:`WHO / NMC Aligned`,image:`https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80`,description:`Located in vibrant Ho Chi Minh City, HIU offers international standard medical programs with advanced clinical training.`,highlights:[`Located in Vietnam's Largest Commercial Capital`,`Modern High-Rise Campus with Advanced Medical Labs`,`100% English Medium Curriculum for Foreign Students`,`Strong Hospital Attachments for Hands-on Training`,`Comfortable International Student Living and Amenities`],admission:`NEET Qualified`,duration:`6 Years`,medium:`English`}],nepal:[{id:`tribhuvan-iom`,name:`Tribhuvan University - Institute of Medicine`,location:`Kathmandu, Nepal`,type:`Government Institute`,recognition:`NMC / WHO Approved`,image:`https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80`,description:`Institute of Medicine (IOM) under Tribhuvan University is Nepal's oldest and most prestigious government medical institution with massive clinical exposure.`,highlights:[`Nepal's Premier Government Medical Institution`,`Curriculum and Clinical Practice Very Similar to India`,`No Visa Required for Indian Students`,`Extensive Clinical Experience in Maharajgunj Teaching Hospital`,`NMC Approved — Direct Practice Licensure Pathway in India`],admission:`NEET UG / MEC Examination`,duration:`5.5 Years`,medium:`English`},{id:`kusms-nepal`,name:`Kathmandu University School of Medical Sciences`,location:`Dhulikhel, Nepal`,type:`Autonomous University School`,recognition:`NMC / WHO Approved`,image:`https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80`,description:`KUSMS is a highly reputed medical institution providing community and hospital-based clinical medical education.`,highlights:[`Autonomous Medical School with High Academic Standards`,`Modern Dhulikhel Teaching Hospital Base`,`English Medium Instruction with Indian Textbooks`,`Close Proximity and Easy Travel Connectivity to India`,`High Success Rate in Indian Licensing Exams`],admission:`NEET UG / MEC Counselling`,duration:`5.5 Years`,medium:`English`},{id:`bpkihs-nepal`,name:`B.P. Koirala Institute of Health Sciences`,location:`Dharan, Nepal`,type:`Autonomous Health University`,recognition:`NMC / WHO Approved`,image:`https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80`,description:`BPKIHS is an autonomous health sciences university established with Indo-Nepal cooperation, known for world-class medical training.`,highlights:[`Established through Indo-Nepal Health Collaboration`,`Vast 800+ Bed Teaching Hospital and Trauma Center`,`High Flow of Indian Students and Faculty`,`Clinical Training Equivalent to Top Indian Govt Medical Colleges`,`NMC Recognized Degree with High FMGE/NExT Pass Record`],admission:`NEET UG / MEC Entrance`,duration:`5.5 Years`,medium:`English`},{id:`mcoms-nepal`,name:`Manipal College of Medical Sciences`,location:`Pokhara, Nepal`,type:`Private Medical College`,recognition:`NMC / WHO Approved`,image:`https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80`,description:`Affiliated with Kathmandu University and managed by Manipal Education Group, MCOMS Pokhara is one of the premier private medical colleges in South Asia.`,highlights:[`Managed by the Renowned Manipal Education Group`,`Located in the Scenic and Pleasant City of Pokhara`,`Two Modern Teaching Hospitals (Manipal Teaching Hospital)`,`Rich Cultural Familiarity and Indian Food Facilities`,`Recognized by NMC, WHO, FAIMER and International Boards`],admission:`NEET UG / MEC Counselling`,duration:`5.5 Years`,medium:`English`},{id:`nmc-nepal`,name:`Nepal Medical College`,location:`Jorpati, Kathmandu, Nepal`,type:`Private Medical College`,recognition:`NMC / WHO Approved`,image:`https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80`,description:`Nepal Medical College is an established medical teaching hospital in Kathmandu offering comprehensive clinical exposure.`,highlights:[`Affiliated with Kathmandu University (KU)`,`700+ Bed Multi-Specialty Teaching Hospital`,`Large Number of Indian Students in Every Batch`,`Familiar Food, Language and Cultural Environment`,`Fully Approved by NMC and WHO`],admission:`NEET UG / MEC Counselling`,duration:`5.5 Years`,medium:`English`}],philippines:[{id:`ust-manila`,name:`University of Santo Tomas Faculty of Medicine`,location:`Manila, Philippines`,type:`Private University`,recognition:`NMC / WHO / USMD`,image:`https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80`,description:`One of the oldest and most prestigious medical schools in Asia following the American MD curriculum.`,highlights:[`Oldest Medical School in the Philippines (Est. 1871)`,`American USMD Medical Education System`,`100% English Medium with No Language Barrier`,`High Passing Rate in USMLE & FMGE Exams`,`Vast University Hospital with Super-Specialty Wings`],admission:`NEET Qualified / NMAT`,duration:`5.5 to 6 Years`,medium:`100% English`},{id:`dmsf-philippines`,name:`Davao Medical School Foundation`,location:`Davao City, Philippines`,type:`Medical Foundation / College`,recognition:`NMC / WHO / USMD`,image:`https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80`,description:`DMSF is one of the most popular medical colleges for Indian students in the Philippines with high FMGE passing statistics.`,highlights:[`Top Destination for Indian Medical Aspirants in Philippines`,`Modern 3D Anatomy Dissection & Simulation Labs`,`Affiliated with 4 Large Hospitals in Davao (4,000+ Beds)`,`Indian Hostels with North & South Indian Mess`,`Proven Track Record in NExT / FMGE / USMLE`],admission:`NEET Qualified`,duration:`5.5 to 6 Years`,medium:`100% English`},{id:`uvgullas-philippines`,name:`UV Gullas College of Medicine`,location:`Cebu City, Philippines`,type:`Private Medical College`,recognition:`NMC / WHO / USMD`,image:`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80`,description:`UV Gullas College of Medicine in Cebu City provides US-based MD education with high clinical rotations.`,highlights:[`Located in Cebu City — Modern Educational Hub`,`Clinical Posting at Vicente Sotto Memorial Medical Center`,`American Clinical Medicine Syllabus`,`High Practical Clinical Exposure in English`,`NMC, WHO and ECFMG Recognized`],admission:`NEET Qualified`,duration:`5.5 to 6 Years`,medium:`100% English`},{id:`olfu-philippines`,name:`Our Lady of Fatima University`,location:`Valenzuela, Manila, Philippines`,type:`Private University`,recognition:`NMC / WHO / USMD`,image:`https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80`,description:`OLFU College of Medicine is renowned for sending medical students to US hospital clerkships and international residencies.`,highlights:[`Institutional Clinical Clerkships in the USA`,`Modern Fatima University Medical Center Base`,`100% English Medium American MD Curriculum`,`Recognized by WHO, NMC, ECFMG and CAAM-HP`,`Dedicated Guidance for USMLE Step 1 & 2`],admission:`NEET Qualified`,duration:`5.5 to 6 Years`,medium:`100% English`}],usa:[{id:`aua-caribbean`,name:`American University of Antigua`,location:`Antigua & Barbuda / USA Pathway`,type:`International Medical University`,recognition:`US / ECFMG / CAAM-HP / NMC`,image:`https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80`,description:`AUA College of Medicine offers direct US medical pathways with clinical rotations in accredited US teaching hospitals.`,highlights:[`Clinical Clerkships in Top US Teaching Hospitals`,`High USMLE Step 1 and Step 2 Match Rate`,`Approved by US Department of Education & CAAM-HP`,`Full Medical Licensure Opportunities in USA, UK & India`,`High-tech Medical Simulation & Clinical Skills Center`],admission:`Academic Profile / NEET / Interview`,duration:`4 to 5.5 Years`,medium:`100% English`},{id:`sgu-grenada`,name:`St. George's University`,location:`Grenada / USA / UK`,type:`International University`,recognition:`US / ECFMG / GMC / NMC`,image:`https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80`,description:`SGU is the #1 provider of doctors into first-year US residencies for the last 10+ consecutive years.`,highlights:[`#1 Provider of US Residencies in the World`,`Extensive Clinical Network in the US & UK`,`Global Alumni Network of 22,000+ Practicing Physicians`,`Accredited by CAAM-HP, WFME, GMC (UK) & NMC`,`State-of-the-Art True Caribbean Island Campus`],admission:`Comprehensive Profile Assessment`,duration:`4 to 5 Years`,medium:`100% English`},{id:`saint-james`,name:`Saint James School of Medicine`,location:`Anguilla / St. Vincent / USA`,type:`International Medical School`,recognition:`ECFMG / CAAM-HP / NMC`,image:`https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80`,description:`Saint James School of Medicine offers high quality, affordable US-curriculum medical education with clinical rotations in the United States.`,highlights:[`Affordable Caribbean USMD Medical Pathway`,`Clinical Rotations in Affiliated Hospitals across the USA`,`Preparation for USMLE and US Residency Match`,`Experienced US and International Medical Faculty`,`Listed in WDOMS and Approved by ECFMG & NMC`],admission:`Profile Review & Interview`,duration:`4 to 5.5 Years`,medium:`100% English`},{id:`avalon-university`,name:`Avalon University School of Medicine`,location:`Curaçao / USA`,type:`International Medical School`,recognition:`ECFMG / CAAM-HP / NMC`,image:`https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1200&q=80`,description:`Avalon University School of Medicine provides structured MD education with early clinical exposure and US hospital rotations.`,highlights:[`Accredited by CAAM-HP & ACCM (US Comparable Standards)`,`54 Weeks of Clinical Rotations in the United States`,`1-on-1 Faculty Mentorship and Small Student Groups`,`Complete Guidance for USMLE, Residency & Fellowships`,`Safe, Modern and Beautiful Island Campus`],admission:`Profile Assessment & NEET`,duration:`4 to 5.5 Years`,medium:`100% English`}]};function Bm(e){if(!e)return null;let t=String(e).trim().toLowerCase(),n={"up-manila":`ust-manila`,"ust-manila":`ust-manila`,"ust-philippines":`ust-manila`,"tribhuvan-iom":`tribhuvan-iom`,mcoms:`mcoms-nepal`,"kyrgyzstan-ihsm":`ihsm`,"kyrgyzstan-osh-state-university":`osh-state-university`,"kyrgyzstan-asian-medical-institute":`asian-medical-institute`},r=t.replace(/^india-/,``).replace(/^russia-/,``).replace(/^kyrgyzstan-/,``).replace(/^kazakhstan-/,``).replace(/^georgia-/,``).replace(/^vietnam-/,``).replace(/^nepal-/,``).replace(/^philippines-/,``).replace(/^usa-/,``),i=[t,r,n[t],n[r]].filter(Boolean),a=[...new Set(i)];for(let e in zm){let t=(zm[e]||[]).find(e=>a.includes(String(e.id).trim().toLowerCase()));if(t)return t}return t===`up-manila`&&(zm.philippines||[]).find(e=>e.id===`ust-manila`||e.id===`ust-philippines`)||null}var Vm={ihsm:`https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"kyrgyzstan-ihsm":`https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"ksmu-kg":`https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,ksma:`https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"kyrgyzstan-ksmu-kg":`https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"ust-manila":`https://i.pinimg.com/originals/f5/a8/b3/f5a8b368eeb595552172066fe20600df.jpg`,"university-of-santo-tomas":`https://i.pinimg.com/originals/f5/a8/b3/f5a8b368eeb595552172066fe20600df.jpg`,"up-manila":`https://th.bing.com/th/id/OIP.cR84ZeNJRaEsg2MPc8bQ3wHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"up-manila-college-of-medicine":`https://th.bing.com/th/id/OIP.cR84ZeNJRaEsg2MPc8bQ3wHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"tribhuvan-iom":`https://th.bing.com/th/id/OIP.97VIS6CI6q0r8nLiqPjIqwHaFj?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`};function Hm(e){return e?String(e).trim().toLowerCase().replace(/^india-/,``).replace(/^russia-/,``).replace(/^kyrgyzstan-/,``).replace(/^kazakhstan-/,``).replace(/^georgia-/,``).replace(/^vietnam-/,``).replace(/^nepal-/,``).replace(/^philippines-/,``).replace(/^usa-/,``):``}function Um(e){if(!e)return``;let t=String(e.id||``).trim().toLowerCase(),n=Hm(e.id);return Vm[t]?Vm[t]:Vm[n]?Vm[n]:e.image?e.image:Bm(e.id)?.image||``}var Wm=[{id:`kyrgyzstan-ihsm`,name:`International Higher School of Medicine`,country:`Kyrgyzstan`,city:`Bishkek`,image:`https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,fallbackImage:Im},{id:`ksmu-kg`,name:`Kyrgyz State Medical Academy`,country:`Kyrgyzstan`,city:`Bishkek`,image:`https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`},{id:`kyrgyzstan-osh-state-university`,name:`Osh State University`,country:`Kyrgyzstan`,city:`Osh`,image:Lm},{id:`kyrgyzstan-asian-medical-institute`,name:`Asian Medical Institute`,country:`Kyrgyzstan`,city:`Kant`,image:Rm}],Gm=[{id:`tribhuvan-iom`,name:`Tribhuvan University Institute of Medicine`,country:`Nepal`,city:`Kathmandu`,image:`https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80`}],Km=`
.card-meta-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.625rem;
}

.card-meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.1875rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.625rem;
  font-weight: 600;
}

.card-meta-pill.type {
  background: #eef7fc;
  color: #1455A0;
  border: 1px solid #d2e7f8;
}

.card-meta-pill.recog {
  background: #e6faf0;
  color: #047857;
  border: 1px solid #a7f3d0;
}

.view-details-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #1455A0;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.375rem 0;
  transition: color 0.2s;
  text-decoration: none;
}

.view-details-trigger:hover {
  color: #0B2D5C;
}
`;function qm({university:e}){let[t,n]=(0,x.useState)(!1),r=Bm(e.id),i=Um(e),a=e.fallbackImage||r?.image||``,o=t&&a&&a!==i?a:i;return(0,j.jsxs)($.div,{layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,scale:.96},transition:{duration:.35,ease:`easeOut`},className:`group relative flex flex-col h-full bg-white rounded-2xl sm:rounded-3xl border border-[#e2edf8] shadow-[0_8px_25px_rgba(11,45,92,0.05)] hover:shadow-[0_22px_45px_rgba(11,45,92,0.12)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`,children:[(0,j.jsxs)(`div`,{className:`relative aspect-[16/10] w-full overflow-hidden bg-[#f0f6fc]`,children:[o?(0,j.jsx)(`img`,{src:o,alt:e.name,loading:`lazy`,onError:()=>n(!0),className:`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105`}):(0,j.jsxs)(`div`,{className:`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B2D5C] to-[#1455A0] text-white p-6 text-center`,children:[(0,j.jsx)(`div`,{className:`w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 text-[#18B8D4]`,children:(0,j.jsx)(rr,{size:24})}),(0,j.jsx)(`span`,{className:`text-xs uppercase tracking-widest text-cyan-200 font-semibold`,children:e.country}),(0,j.jsx)(`span`,{className:`text-sm font-bold text-white line-clamp-2 mt-1`,children:e.name})]}),(0,j.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none`}),(0,j.jsx)(`div`,{className:`absolute top-3.5 left-3.5 z-10`,children:(0,j.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#0B2D5C] backdrop-blur-md shadow-sm border border-white/80`,children:[(0,j.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#18B8D4]`}),e.country]})})]}),(0,j.jsxs)(`div`,{className:`p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{className:`text-lg sm:text-xl font-bold text-[#0B2D5C] group-hover:text-[#1455A0] transition-colors duration-200 leading-snug`,children:e.name}),(0,j.jsxs)(`p`,{className:`text-sm text-slate-500 mt-2.5 flex items-center gap-1.5 font-medium`,children:[(0,j.jsx)(Or,{size:15,className:`text-[#18B8D4] shrink-0`}),(0,j.jsx)(`span`,{children:e.city?`${e.city}, ${e.country}`:e.country})]}),r&&(0,j.jsxs)(`div`,{className:`card-meta-pills`,children:[r.type&&(0,j.jsxs)(`span`,{className:`card-meta-pill type`,children:[(0,j.jsx)(rr,{size:10}),r.type]}),r.recognition&&(0,j.jsxs)(`span`,{className:`card-meta-pill recog`,children:[(0,j.jsx)(Ir,{size:10}),r.recognition]})]})]}),(0,j.jsx)(`div`,{className:`mt-4 pt-1`,children:(0,j.jsxs)(jn,{to:`/university/${e.id}`,className:`view-details-trigger`,children:[`View Details`,(0,j.jsx)(cr,{size:14})]})})]})]})}function Jm(){let[e,t]=(0,x.useState)(`All Universities`),n=[...Fm,...Wm,...Gm].filter((e,t,n)=>t===n.findIndex(t=>t.id===e.id)),r=e===`All Universities`?n:n.filter(t=>t.country===e),i=[`All Universities`,`Kyrgyzstan`,...Pm.filter(e=>e!==`All Universities`&&e!==`Kyrgyzstan`)];return(0,j.jsxs)(`section`,{className:`relative py-20 lg:py-28 bg-[#f8fbfe] overflow-hidden border-t border-slate-100`,children:[(0,j.jsx)(`style`,{children:Km}),(0,j.jsx)(`div`,{className:`absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32`}),(0,j.jsx)(`div`,{className:`absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32`}),(0,j.jsxs)(`div`,{className:`relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8`,children:[(0,j.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-10 sm:mb-14`,children:[(0,j.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d6e6f5] text-[#1455A0] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm`,children:[(0,j.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#18B8D4]`}),`FEATURED UNIVERSITIES`]}),(0,j.jsxs)(`h2`,{className:`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D5C] tracking-tight leading-[1.15]`,children:[`Explore Medical Universities`,` `,(0,j.jsx)(`span`,{className:`bg-gradient-to-r from-[#1455A0] to-[#18B8D4] bg-clip-text text-transparent`,children:`Around the World`})]}),(0,j.jsx)(`p`,{className:`mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto`,children:`Explore leading medical universities across popular MBBS destinations and find the right option based on your academic goals.`})]}),(0,j.jsx)(`div`,{className:`mb-10 sm:mb-12`,children:(0,j.jsx)(`div`,{className:`flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]`,children:i.map(n=>{let r=e===n;return(0,j.jsxs)(`button`,{onClick:()=>t(n),className:`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 select-none ${r?`text-white shadow-md shadow-[#0B2D5C]/15`:`text-slate-600 hover:text-[#0B2D5C] bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm`}`,children:[r&&(0,j.jsx)($.div,{layoutId:`activeCountryPill`,className:`absolute inset-0 rounded-full bg-gradient-to-r from-[#0B2D5C] to-[#1455A0]`,transition:{type:`spring`,stiffness:400,damping:32}}),(0,j.jsx)(`span`,{className:`relative z-10 flex items-center gap-1.5`,children:n})]},n)})})}),(0,j.jsx)(Sf,{mode:`wait`,children:r.length>0?(0,j.jsx)($.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`,children:r.map(e=>(0,j.jsx)(qm,{university:e},e.id))},e):(0,j.jsxs)($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.35},className:`max-w-xl mx-auto text-center py-14 px-6 sm:px-10 bg-white rounded-3xl border border-[#dce8f5] shadow-[0_10px_35px_rgba(11,45,92,0.06)]`,children:[(0,j.jsx)(`div`,{className:`w-16 h-16 rounded-2xl bg-[#eef7fc] text-[#1455A0] flex items-center justify-center mx-auto mb-5 border border-[#d2e7f8]`,children:(0,j.jsx)(yr,{size:32,className:`text-[#18B8D4]`})}),(0,j.jsx)(`h3`,{className:`text-xl sm:text-2xl font-bold text-[#0B2D5C]`,children:`Universities Coming Soon`}),(0,j.jsx)(`p`,{className:`mt-3 text-sm text-slate-600 leading-relaxed`,children:`We are currently updating university information for this destination. Please contact our counselling team for guidance.`}),(0,j.jsx)(`div`,{className:`mt-6 flex justify-center`,children:(0,j.jsxs)(`a`,{href:`#contact`,className:`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1455A0] hover:bg-[#0B2D5C] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-900/20 hover:shadow-lg transition-all duration-200`,children:[`Book Free Counselling`,(0,j.jsx)(er,{size:16})]})})]},`empty-state`)})]})]})}var Ym=[{image:Em,eyebrow:`MEDICAL EDUCATION & CAREER GUIDANCE`,title:`Your Trusted Partner for Medical Education & Career Guidance`,marathi:`वैद्यकीय शिक्षणासाठी योग्य मार्गदर्शन, योग्य निर्णय आणि उज्ज्वल करिअरची सुरुवात.`},{image:Dm,eyebrow:`MBBS ADMISSIONS ABROAD`,title:`Professional Guidance for Your MBBS Journey Abroad`,marathi:`वैद्यकीय शिक्षणासाठी योग्य मार्गदर्शन, योग्य निर्णय आणि उज्ज्वल करिअरची सुरुवात.`},{image:Om,eyebrow:`SHAPE YOUR MEDICAL CAREER`,title:`Build Your Future with the Right Medical Education`,marathi:`वैद्यकीय शिक्षणासाठी योग्य मार्गदर्शन, योग्य निर्णय आणि उज्ज्वल करिअरची सुरुवात.`}],Xm=[{name:`Russia`,code:`ru`},{name:`Kyrgyzstan`,code:`kg`},{name:`Kazakhstan`,code:`kz`},{name:`Georgia`,code:`ge`},{name:`Philippines`,code:`ph`},{name:`Nepal`,code:`np`},{name:`Vietnam`,code:`vn`},{name:`USA`,code:`us`}],Zm=[{icon:Br,title:`Experienced Counselling Team`},{icon:yr,title:`10+ Years in Education Sector`},{icon:zr,title:`Personalized Student Counselling`},{icon:Fr,title:`Transparent Information`},{icon:mr,title:`Multiple MBBS Destinations`},{icon:ur,title:`Complete Admission Guidance`},{icon:vr,title:`Documentation & Application Assistance`},{icon:br,title:`Post-Admission Guidance & Support`},{icon:xr,title:`Parent-Friendly Counselling`}],Qm=[{number:`01`,icon:A,title:`Counselling`},{number:`02`,icon:rr,title:`Course & University Selection`},{number:`03`,icon:vr,title:`Application`},{number:`04`,icon:zr,title:`Admission`},{number:`05`,icon:ur,title:`Documentation & Visa Guidance`},{number:`06`,icon:Nr,title:`Pre-Departure Guidance`},{number:`07`,icon:br,title:`Post-Admission Support`}],$m=[{quote:`The best study abroad consultancy i have seen for USA in JALNA & BEED. Highly recommend all genuine students to visit once and feel the difference and honesty in the counselling. When you visit specially ask for Swapnil Sir.`,name:`Pavan Nilkanth Joshi`,location:`Google Review`,reviews:`1 review`},{quote:`Best consultancy services for studying MBBS in the best colleges. If you are NEET exam qualify and can't get admission in India then must contact KANTULE EDUTECH.`,name:`Aniket Patare`,location:`Google Review`,reviews:`9 reviews`},{quote:`Good edutech organization as flow of all information is transperent and easy to asscable. Working environment is class professional along with that employees with human values.`,name:`Aniket Kale`,location:`Google Review`,reviews:`3 reviews`},{quote:`An ideal place for MBBS councelling. Have multiple options to opt in terms of universities.`,name:`Ajit Pawar`,location:`Google Review`,reviews:`Local Guide · 12 reviews`},{quote:`Nice guidence, good data and information they have. Trusted genuine sevices for mbbs admission.`,name:`Sudarshan Deshmukh`,location:`Google Review`,reviews:`5 reviews`},{quote:`Swapnil sir very helping and humble. Better consultancy service compared to others.`,name:`Rameshwar Kawale`,location:`Google Review`,reviews:`Local Guide · 13 reviews`},{quote:`Beat consultant .have multiple options with affordable price Thank you for counseling and admission`,name:`Anand Shinde`,location:`Google Review`,reviews:`2 reviews`},{quote:`Best abroad education consultant in beed and jalna`,name:`Swaraj Kantule`,location:`Google Review`,reviews:`2 reviews`},{quote:`Amazing councillors u have....thankuu for ur guidance`,name:`Shubham Bhadalkar`,location:`Google Review`,reviews:`11 reviews`},{quote:`Whole hearted person dedicated to his clients....`,name:`Abhi Jadhav`,location:`Google Review`,reviews:`3 reviews`},{quote:`Nice experience of service`,name:`Shridhar Waghmare`,location:`Google Review`,reviews:`Local Guide · 13 reviews · 42 photos`},{quote:`Best MBBS consultant in beed`,name:`Pavan Rajput`,location:`Google Review`,reviews:`2 reviews · 6 photos`}];function eh(){let[e,t]=(0,x.useState)(0);return(0,x.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%Ym.length)},5500);return()=>clearInterval(e)},[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --navy: #092d63;
          --navy-dark: #061f48;
          --navy-deep: #041530;
          --blue: #075ca8;
          --cyan: #16b7d7;
          --cyan-bright: #38d4ec;
          --cyan-light: #eafaff;
          --gold: #0d6faf;
          --gold-light: #edf7ff;
          --gold-deep: #075ca8;
          --text: #102d57;
          --muted: #687a93;
          --border: #e2ebf4;
          --white: #ffffff;
          --shadow: 0 18px 55px rgba(7, 48, 89, .10);
          --shadow-hover: 0 28px 75px rgba(7, 48, 89, .17);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scrollbar-width: auto;
          scrollbar-color: #0b76ad #e9f2f8;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: "Manrope", sans-serif;
          background: #fff;
          color: var(--text);
          overflow-x: hidden;
        }

        body::-webkit-scrollbar {
          width: 14px;
        }

        body::-webkit-scrollbar-track {
          background: linear-gradient(#eef6fb, #e5f0f7);
        }

        body::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #16b7d7, #075ca8);
          border: 3px solid #eaf3f8;
          border-radius: 20px;
        }

        body::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #0d8fbd, #043e78);
        }

        button,
        a {
          font-family: inherit;
        }

        a {
          text-decoration: none;
        }

        .home-page {
          width: 100%;
          overflow: hidden;
          background: #fff;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .001ms !important;
            transition-duration: .001ms !important;
          }
        }

        @keyframes shimmerSweep {
          0% { transform: translateX(-140%) skewX(-14deg); }
          100% { transform: translateX(260%) skewX(-14deg); }
        }

        @keyframes softFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: .55; transform: scale(.92); }
          50% { opacity: 1; transform: scale(1); }
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes ambientMove {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(15px, -12px, 0) scale(1.04); }
        }

        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(-2%, -2%); }
        }

        /* ========================= HERO (MOBILE FIRST) ========================== */
        .hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          isolation: isolate;
          background: #061d40;
          padding-bottom: 160px; 
        }

        .hero::before,
        .hero::after {
          content: "";
          position: absolute;
          z-index: 2;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(2px);
        }

        .hero::before {
          width: 240px;
          height: 240px;
          right: -120px;
          top: 18%;
          background: rgba(22,183,215,.11);
          box-shadow: 0 0 90px rgba(22,183,215,.18);
          animation: ambientMove 8s ease-in-out infinite;
        }

        .hero::after {
          width: 190px;
          height: 190px;
          left: -100px;
          bottom: 20%;
          background: rgba(13,111,175,.14);
          box-shadow: 0 0 80px rgba(13,111,175,.18);
          animation: ambientMove 10s ease-in-out infinite reverse;
        }

        .hero-image-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: kenburns 12s ease-in-out infinite alternate;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(3,18,42,.95) 0%,
              rgba(4,24,53,.86) 35%,
              rgba(5,35,70,.48) 72%,
              rgba(5,35,70,.22) 100%
            );
        }

        .hero-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 78% 22%, rgba(22,183,215,.16), transparent 31%),
            radial-gradient(circle at 15% 80%, rgba(7,92,168,.18), transparent 34%);
        }

        .hero-content {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1280px;
          height: 100%;
          margin: auto;
          padding: 110px 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-text {
          width: 100%;
          max-width: 720px;
          color: #fff;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border: 1px solid rgba(87,218,239,.34);
          border-radius: 100px;
          background: rgba(255,255,255,.075);
          backdrop-filter: blur(16px);
          color: #bceff8;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 1.45px;
          margin-bottom: 19px;
          box-shadow: inset 0 1px rgba(255,255,255,.12), 0 10px 30px rgba(0,0,0,.12);
        }

        .hero-eyebrow-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          border-radius: 50%;
          background: #49d8ef;
          box-shadow: 0 0 16px rgba(73,216,239,.95);
          animation: glowPulse 2.2s ease-in-out infinite;
        }

        .hero-title {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(32px, 8vw, 48px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 800;
          text-wrap: balance;
        }

        .hero-title span {
          background: linear-gradient(100deg, #58e3f6 5%, #13a5d0 70%, #58cce4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-marathi {
          max-width: 650px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.91);
          font-size: 13px;
          line-height: 1.75;
          font-weight: 600;
        }

        .hero-description {
          max-width: 640px;
          margin: 12px auto 0;
          color: rgba(255,255,255,.68);
          font-size: 11.5px;
          line-height: 1.75;
        }

        .hero-buttons {
          display: flex;
          width: 100%;
          gap: 9px;
          margin-top: 25px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .primary-btn,
        .secondary-btn {
          position: relative;
          min-height: 48px;
          padding: 0 17px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 800;
          overflow: hidden;
          transition: transform .35s ease, box-shadow .35s ease, background .35s ease, border-color .35s ease;
        }

        .primary-btn {
          color: #fff;
          background: linear-gradient(135deg, #16bfdc, #0878ae);
          box-shadow: 0 12px 30px rgba(8,166,198,.28);
        }

        .primary-btn::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 45%;
          background: linear-gradient(110deg, transparent, rgba(255,255,255,.42), transparent);
          transform: translateX(-140%) skewX(-14deg);
        }

        .primary-btn:hover::before {
          animation: shimmerSweep .9s ease forwards;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(8,166,198,.38);
        }

        .secondary-btn {
          color: #fff;
          border: 1px solid rgba(255,255,255,.30);
          background: rgba(255,255,255,.075);
          backdrop-filter: blur(14px);
        }

        .secondary-btn:hover {
          color: var(--navy);
          background: #fff;
          border-color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,0,0,.15);
        }

        .hero-arrows {
          position: absolute;
          z-index: 8;
          right: 18px;
          bottom: 180px;
          display: flex;
          gap: 7px;
        }

        .hero-arrow {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 50%;
          background: rgba(0,0,0,.15);
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: .3s ease;
        }

        .hero-arrow:hover {
          background: linear-gradient(135deg, #16b7d7, #075ca8);
          border-color: transparent;
          transform: scale(1.08);
        }

        .hero-dots {
          position: absolute;
          z-index: 8;
          left: 50%;
          transform: translateX(-50%);
          bottom: 190px;
          display: flex;
          gap: 6px;
        }

        .hero-dot {
          width: 7px;
          height: 7px;
          border: 0;
          padding: 0;
          border-radius: 20px;
          background: rgba(255,255,255,.4);
          cursor: pointer;
          transition: .35s ease;
        }

        .hero-dot.active {
          width: 26px;
          background: linear-gradient(90deg, #53e2f4, #0d6faf);
        }

        .hero-stats {
          position: absolute;
          z-index: 10;
          bottom: 0;
          left: 50%;
          width: calc(100% - 24px);
          transform: translateX(-50%);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background: rgba(255,255,255,.975);
          border: 1px solid rgba(255,255,255,.9);
          border-top: 3px solid #12b2d3;
          border-radius: 18px 18px 0 0;
          box-shadow: 0 -18px 55px rgba(4,37,73,.17);
          overflow: hidden;
          backdrop-filter: blur(18px);
        }

        .stat-item {
          min-height: 92px;
          padding: 13px 10px;
          display: flex;
          align-items: center;
          gap: 9px;
          border-right: 1px solid #e7edf4;
          border-bottom: 1px solid #e7edf4;
          transition: background .3s ease, transform .3s ease;
        }

        .stat-item:nth-child(even) {
          border-right: 0;
        }

        .stat-item:nth-last-child(-n+2) {
          border-bottom: 0;
        }

        .stat-item:hover {
          background: linear-gradient(145deg, #fff, #f1faff);
        }

        .stat-icon {
          flex: 0 0 37px;
          width: 37px;
          height: 37px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          color: var(--blue);
          background: #ebf9ff;
          box-shadow: inset 0 0 0 1px rgba(7,92,168,.07);
        }

        .stat-item:nth-child(3) .stat-icon {
          color: #0a91b2;
          background: #e8fbff;
        }

        .stat-number {
          margin: 0;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 800;
          color: var(--navy);
        }

        .stat-label {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 8px;
          line-height: 1.35;
          font-weight: 600;
        }

        /* ========================= COMMON ========================== */
        .section {
          position: relative;
          padding: 60px 16px;
        }

        .section.soft {
          background:
            radial-gradient(circle at 5% 10%, rgba(22,183,215,.075), transparent 28%),
            radial-gradient(circle at 96% 90%, rgba(7,92,168,.06), transparent 28%),
            linear-gradient(180deg, #f9fcff, #f4f9fd);
        }

        .section-container {
          width: 100%;
          max-width: 1180px;
          margin: auto;
        }

        .section-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 30px;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--blue);
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 1.35px;
          text-transform: uppercase;
          margin-bottom: 11px;
        }

        .section-kicker::before {
          content: "";
          width: 7px;
          height: 7px;
          background: var(--cyan);
          border-radius: 2px;
          transform: rotate(45deg);
          box-shadow: 0 0 0 4px rgba(22,183,215,.08);
        }

        .section-title {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(26px, 6vw, 38px);
          line-height: 1.15;
          letter-spacing: -1px;
          color: var(--navy);
        }

        .section-title span {
          background: linear-gradient(100deg, #075ca8, #16b7d7 70%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-description {
          margin: 13px auto 0;
          color: var(--muted);
          font-size: 11.5px;
          line-height: 1.75;
          max-width: 680px;
        }

        /* ========================= INTRO ========================== */
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }

        .intro-visual {
          position: relative;
          min-height: 380px;
        }

        .intro-main-image-wrap {
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 65px rgba(7,6,88,.17);
          outline: 5px solid rgba(255,255,255,.76);
          outline-offset: -5px;
        }

        .intro-main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .intro-floating-card {
          position: absolute;
          right: 10px;
          bottom: -20px;
          width: 155px;
          padding: 16px;
          border-radius: 17px;
          background: rgba(255,255,255,.94);
          box-shadow: 0 22px 55px rgba(5,45,86,.18);
          border: 1px solid rgba(218,229,240,.8);
          backdrop-filter: blur(15px);
          animation: softFloat 5s ease-in-out infinite;
          z-index: 5;
        }

        .intro-floating-card-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #e9faff;
          color: var(--blue);
          margin-bottom: 11px;
        }

        .intro-floating-card strong {
          display: block;
          color: var(--navy);
          font-size: 17px;
        }

        .intro-floating-card span {
          display: block;
          margin-top: 3px;
          color: var(--muted);
          font-size: 9.5px;
        }

        .intro-content h2 {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(26px, 6vw, 38px);
          line-height: 1.15;
          letter-spacing: -1px;
          color: var(--navy);
        }

        .intro-content h2 span {
          background: linear-gradient(100deg, var(--blue), var(--cyan));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .intro-content p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.85;
          margin: 17px 0 0;
        }

        .intro-points {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 23px;
        }

        .intro-point {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          color: #425a76;
          font-size: 11px;
          line-height: 1.55;
          font-weight: 700;
        }

        .check-circle {
          flex: 0 0 19px;
          width: 19px;
          height: 19px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #079bc0;
          background: #e7faff;
        }

        .marathi-info {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e2ebf4;
        }

        .marathi-info p {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.85;
          margin: 0 0 13px;
        }

        .marathi-info p:last-child {
          margin-bottom: 0;
        }

        .marathi-points {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #e2ebf4;
        }

        /* ========================= PROGRAMS ========================== */
        .programs-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .programs-section::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(circle at 8% 20%, rgba(22,183,215,.10), transparent 28%),
            radial-gradient(circle at 92% 78%, rgba(7,92,168,.08), transparent 30%),
            linear-gradient(180deg, rgba(248,252,255,.96), rgba(241,248,253,.98));
        }

        .programs-bg-image {
          display: none; 
        }

        .programs-content {
          position: relative;
          z-index: 2;
        }

        .program-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .program-card {
          position: relative;
          min-height: 450px;
          padding: 25px;
          border-radius: 20px;
          overflow: hidden;
          color: #fff;
          background-color: #082e61;
          background-size: 150%;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: var(--shadow);
          isolation: isolate;
          border: 1px solid rgba(255,255,255,.16);
          transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s ease, border-color .45s ease, background-size .8s ease;
        }

        .program-card:hover {
          transform: translateY(-7px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(62,215,237,.42);
          background-size: 160%;
        }

        .program-card-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(3,20,47,.54) 0%, rgba(4,27,57,.65) 35%, rgba(3,20,45,.86) 68%, rgba(2,17,38,.96) 100%);
        }

        .program-card-overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 88% 7%, rgba(43,213,239,.24), transparent 30%),
            radial-gradient(circle at 8% 95%, rgba(16,142,193,.20), transparent 34%);
        }

        .program-card > *:not(.program-card-overlay) {
          position: relative;
          z-index: 2;
        }

        .program-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: rgba(255,255,255,.13);
          border: 1px solid rgba(255,255,255,.23);
          color: #66d9ee;
          margin-bottom: 19px;
          box-shadow: 0 10px 25px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.10);
          backdrop-filter: blur(10px);
          transition: transform .4s ease, background .4s ease, border-color .4s ease;
        }

        .program-card:hover .program-icon {
          transform: rotate(-6deg) scale(1.1);
          background: rgba(255,255,255,.18);
          border-color: rgba(101,225,241,.42);
        }

        .program-card h3 {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 22px;
          line-height: 1.2;
          letter-spacing: -.6px;
          text-shadow: 0 4px 18px rgba(0,0,0,.28);
        }

        .program-card p {
          margin: 8px 0 0;
          color: rgba(255,255,255,.76);
          font-size: 11px;
          line-height: 1.6;
          text-shadow: 0 3px 15px rgba(0,0,0,.28);
        }

        .program-list {
          margin: 21px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .program-list li {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.45;
          color: rgba(255,255,255,.94);
          text-shadow: 0 3px 14px rgba(0,0,0,.32);
          transition: transform .3s ease;
        }

        .program-card:hover .program-list li {
          transform: translateX(5px);
        }

        .program-list svg {
          flex: 0 0 17px;
          color: #7bdff0;
          filter: drop-shadow(0 2px 7px rgba(22,183,215,.35));
        }

        /* ========================= COUNTRIES ========================== */
        .country-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 36px 14px;
          align-items: stretch;
        }

        .country-card {
          position: relative;
          min-height: 150px;
          padding: 48px 14px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: visible;
          isolation: isolate;
          border: 1px solid rgba(9,45,99,.12);
          border-radius: 18px;
          background: radial-gradient(circle at 85% 8%, rgba(53,207,231,.17), transparent 32%), linear-gradient(145deg, #0b5794 0%, #092f68 52%, #071f4b 100%);
          box-shadow: 0 14px 34px rgba(7,45,88,.11), inset 0 1px 0 rgba(255,255,255,.12);
          transition: transform .42s cubic-bezier(.2,.8,.2,1), box-shadow .42s ease, border-color .42s ease;
        }

        .country-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,.3), transparent 50%, rgba(47,207,232,.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity .4s ease;
        }

        .country-card:hover::before {
          opacity: 1;
        }

        .country-card:hover {
          transform: translateY(-7px) scale(1.02);
          border-color: rgba(47,207,232,.42);
          box-shadow: 0 24px 52px rgba(7,45,88,.18), 0 0 0 1px rgba(47,207,232,.08);
        }

        .country-flag {
          position: absolute;
          z-index: 4;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          padding: 4px;
          background: #fff;
          border: 1px solid rgba(9,45,99,.08);
          box-shadow: 0 10px 25px rgba(4,30,65,.18), 0 0 0 5px rgba(255,255,255,.86);
          overflow: hidden;
          transition: transform .42s cubic-bezier(.2,.8,.2,1), box-shadow .42s ease;
        }

        .country-card:hover .country-flag {
          transform: translateX(-50%) translateY(-6px) scale(1.15) rotate(-5deg);
          box-shadow: 0 15px 32px rgba(4,30,65,.24), 0 0 0 5px rgba(22,183,215,.2);
        }

        .country-flag img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .country-card h3 {
          position: relative;
          z-index: 3;
          margin: 0;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: -.15px;
        }

        .country-card h3::after {
          content: "";
          display: block;
          width: 24px;
          height: 2px;
          margin: 9px auto 0;
          border-radius: 10px;
          background: linear-gradient(90deg, #55e0ef, rgba(255,255,255,.55));
          opacity: .8;
          transition: width .35s ease;
        }

        .country-card:hover h3::after {
          width: 40px;
        }

        /* ========================= WHY CHOOSE (PREMIUM GLASSMORPHISM) ========================== */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .why-card {
          position: relative;
          padding: 24px 22px;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 30px rgba(7, 48, 89, 0.06);
          transition: transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease, border-color .4s ease;
        }

        .why-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -60px;
          top: -60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22, 183, 215, 0.15), transparent 70%);
          transition: transform .5s ease;
          z-index: 0;
        }

        .why-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.8), transparent 50%, rgba(22,183,215,0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 1;
          z-index: 1;
        }

        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(7, 48, 89, 0.1), 0 0 0 1px rgba(22, 183, 215, 0.2);
        }

        .why-card:hover::before {
          transform: scale(1.4);
        }

        .why-icon {
          position: relative;
          z-index: 2;
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #16b7d7, #075ca8);
          color: #fff;
          margin-bottom: 18px;
          box-shadow: 0 8px 20px rgba(7, 92, 168, 0.3);
          transition: transform .4s ease, box-shadow .4s ease;
        }

        .why-card:hover .why-icon {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 25px rgba(22, 183, 215, 0.4);
        }

        .why-card h3 {
          position: relative;
          z-index: 2;
          margin: 0;
          color: var(--navy);
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: -0.2px;
        }

        /* ========================= PROCESS ========================== */
        .process-wrapper {
          position: relative;
          padding-top: 10px;
        }

        .process-line {
          display: none;
        }

        .process-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 12px;
        }

        .process-item {
          text-align: center;
        }

        .process-circle {
          position: relative;
          z-index: 2;
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(145deg, #fff, #f4fbff);
          border: 1px solid #d8e8f2;
          color: var(--blue);
          box-shadow: 0 10px 30px rgba(7,52,91,.09);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }

        .process-item:hover .process-circle {
          transform: translateY(-6px) scale(1.08);
          border-color: #7adcec;
          box-shadow: 0 18px 38px rgba(22,183,215,.20);
          color: var(--gold-deep);
        }

        .process-number {
          position: absolute;
          top: -6px;
          right: -2px;
          width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: linear-gradient(135deg, var(--navy), #0d83b3);
          font-size: 8px;
          font-weight: 800;
          box-shadow: 0 5px 12px rgba(6,31,72,.18);
        }

        .process-item h4 {
          max-width: 135px;
          margin: auto;
          color: var(--navy);
          font-size: 10px;
          line-height: 1.5;
          font-weight: 700;
        }

        /* ========================= TESTIMONIALS ========================== */
        .testimonials-section {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding: 60px 0;
        }

        .testimonials-section::before,
        .testimonials-section::after {
          content: "";
          position: absolute;
          z-index: -2;
          border-radius: 50%;
          pointer-events: none;
          animation: ambientMove 10s ease-in-out infinite;
        }

        .testimonials-section::before {
          width: 300px;
          height: 300px;
          top: 40px;
          left: -180px;
          background: radial-gradient(circle, rgba(22,183,215,.13) 0%, rgba(22,183,215,.035) 45%, transparent 72%);
        }

        .testimonials-section::after {
          width: 360px;
          height: 360px;
          right: -200px;
          bottom: -170px;
          background: radial-gradient(circle, rgba(7,92,168,.10) 0%, rgba(7,92,168,.025) 45%, transparent 72%);
          animation-direction: reverse;
        }

        .testimonials-section .section-heading {
          padding: 0 16px;
          margin-bottom: 30px;
        }

        .testimonial-marquee {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          overflow: hidden;
          padding: 8px 0 18px;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
        }

        .testimonial-track {
          display: flex;
          width: max-content;
          animation: testimonialMarquee 48s linear infinite;
          will-change: transform;
        }

        .testimonial-set {
          display: flex;
          align-items: stretch;
          gap: 16px;
          padding-right: 16px;
        }

        .testimonial-marquee:hover .testimonial-track {
          animation-play-state: paused;
        }

        @keyframes testimonialMarquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .testimonial-card {
          position: relative;
          flex: 0 0 280px;
          width: 280px;
          min-height: 195px;
          padding: 18px 18px 16px;
          border-radius: 18px;
          border: 1px solid rgba(214,228,240,.92);
          background: radial-gradient(circle at 100% 0%, rgba(22,183,215,.075), transparent 31%), linear-gradient(145deg, #ffffff 0%, #f7fbff 100%);
          box-shadow: 0 12px 32px rgba(7,48,89,.07), inset 0 1px 0 rgba(255,255,255,.95);
          overflow: hidden;
          transform: translateZ(0);
          transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .35s ease;
        }

        .testimonial-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 58px;
          height: 3px;
          background: linear-gradient(90deg, #16b7d7, #075ca8);
          border-radius: 0 0 6px 0;
        }

        .testimonial-card::after {
          content: "";
          position: absolute;
          width: 105px;
          height: 105px;
          right: -60px;
          top: -60px;
          border-radius: 50%;
          border: 1px solid rgba(22,183,215,.13);
          box-shadow: 0 0 0 16px rgba(22,183,215,.025), 0 0 0 32px rgba(22,183,215,.018);
          pointer-events: none;
          transition: transform .5s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 22px 48px rgba(7,48,89,.13);
          border-color: #cce4ef;
        }

        .testimonial-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 7px;
        }

        .testimonial-stars {
          display: flex;
          align-items: center;
          gap: 1px;
          padding: 5px 7px;
          border-radius: 100px;
          background: #effaff;
          border: 1px solid #d8f1f8;
        }

        .testimonial-stars svg {
          color: #0a91b2;
          fill: #16b7d7;
          width: 10px;
          height: 10px;
        }

        .testimonial-card p {
          position: relative;
          z-index: 2;
          margin: 9px 0 14px;
          color: #526984;
          font-size: 10px;
          line-height: 1.62;
          font-weight: 600;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }

        .testimonial-user {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          padding-top: 10px;
          border-top: 1px solid #e7eef5;
        }

        .testimonial-user strong {
          display: block;
          color: var(--navy);
          font-size: 10px;
          font-weight: 800;
        }

        /* ========================= GALLERY ========================== */
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 130px;
          gap: 10px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 14px 40px rgba(7,45,88,.09);
        }

        .gallery-item:first-child {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-image-wrap {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .6s cubic-bezier(.2,.8,.2,1), filter .5s ease;
        }

        .gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 48%, rgba(4,21,48,.55));
          opacity: .2;
          transition: opacity .4s ease;
          pointer-events: none;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.08);
          filter: saturate(1.08);
        }

        .gallery-item:hover::after {
          opacity: 1;
        }

        /* ========================= CTA ========================== */
        .cta {
          position: relative;
          margin: 0 16px 60px;
          overflow: hidden;
          border-radius: 20px;
          background:
            radial-gradient(circle at 90% 18%, rgba(22,183,215,.22), transparent 34%),
            radial-gradient(circle at 10% 90%, rgba(7,92,168,.22), transparent 35%),
            linear-gradient(135deg, #041530, #0a4f8d);
          box-shadow: 0 25px 65px rgba(5,43,84,.18);
        }

        .cta-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          margin: auto;
          padding: 40px 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 23px;
        }

        .cta h2 {
          margin: 0;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(24px, 6vw, 36px);
          line-height: 1.15;
          letter-spacing: -1px;
        }

        .cta p {
          margin: 10px 0 0;
          color: rgba(255,255,255,.68);
          font-size: 12px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          width: 100%;
          gap: 9px;
          flex-wrap: wrap;
        }

        .cta-buttons a {
          flex: 1 1 100%;
        }

        /* ========================= TABLET & DESKTOP ========================== */
        @media (min-width: 768px) {
          .hero-content {
            padding: 120px 40px 0;
            text-align: left;
            justify-content: flex-start;
          }
          .hero-buttons {
            justify-content: flex-start;
          }
          .hero-marathi, .hero-description {
            margin-left: 0;
          }
          .hero-arrows {
            right: 40px;
            bottom: 220px;
          }
          .hero-dots {
            left: 40px;
            transform: none;
            bottom: 240px;
          }
          .hero-stats {
            width: calc(100% - 60px);
            grid-template-columns: repeat(4, 1fr);
          }
          .stat-item {
            min-height: 105px;
            padding: 18px 14px;
            border-bottom: 0 !important;
          }
          .stat-item:nth-child(even) {
            border-right: 1px solid #e7edf4;
          }
          .stat-number { font-size: 17px; }
          .stat-label { font-size: 10px; }

          .section { padding: 80px 28px; }

          .intro-grid {
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
          .intro-main-image-wrap { height: 460px; }
          .intro-points, .marathi-points {
            grid-template-columns: 1fr 1fr;
          }

          .programs-bg-image {
            display: block;
            position: absolute;
            z-index: -1;
            right: -20px;
            top: 50%;
            width: min(520px, 50vw);
            height: 430px;
            transform: translateY(-50%);
            border-radius: 42px;
            background-size: cover;
            background-position: center;
            opacity: .075;
            filter: saturate(.75) contrast(.95);
            mask-image: linear-gradient(90deg, transparent 0%, #000 28%, #000 82%, transparent 100%);
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 28%, #000 82%, transparent 100%);
            pointer-events: none;
          }

          .program-grid { grid-template-columns: 1fr 1fr; }
          .program-card { min-height: 520px; padding: 30px; }
          
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .process-grid { grid-template-columns: repeat(4, 1fr); }
          
          .gallery-grid {
            grid-template-columns: 1.4fr .8fr .8fr;
            grid-template-rows: 230px 230px;
            gap: 12px;
          }
          .gallery-item:first-child {
            grid-column: span 1;
            grid-row: 1 / 3;
          }

          .cta {
            margin: 0 28px 80px;
            border-radius: 25px;
          }
          .cta-inner {
            padding: 50px 40px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .cta-buttons { width: auto; }
          .cta-buttons a { flex: 0 0 auto; width: auto; }
        }

        @media (min-width: 1024px) {
          .hero { min-height: 780px; padding-bottom: 140px; }
          .hero-content { padding: 100px 40px 0; }
          .hero-title { font-size: clamp(48px, 5vw, 72px); letter-spacing: -2.5px; }
          .hero-marathi { font-size: 16px; }
          .hero-description { font-size: 13px; }
          
          .section { padding: 110px 30px; }
          .section-title { font-size: clamp(32px, 4vw, 46px); }
          
          .intro-visual { min-height: 550px; }
          .intro-main-image-wrap { height: 520px; }
          .intro-floating-card { width: 250px; padding: 24px; bottom: 25px; }
          
          .program-card { min-height: 530px; padding: 34px; }
          
          .country-grid { grid-template-columns: repeat(4, 1fr); gap: 40px 16px; }
          
          .why-grid { grid-template-columns: repeat(3, 1fr); }
          .why-card { padding: 32px 26px; }
          .why-card h3 { font-size: 15px; }
          
          .process-line {
            display: block;
            position: absolute;
            top: 69px;
            left: 7%;
            right: 7%;
            height: 2px;
            background: linear-gradient(90deg, #bcecf5, #1bb7d5, #075ca8, #1bb7d5, #bcecf5);
            background-size: 200% 100%;
            animation: borderFlow 7s linear infinite;
          }
          .process-grid { grid-template-columns: repeat(7, 1fr); }
          .process-circle { width: 70px; height: 70px; }
          
          .testimonial-card { flex-basis: 320px; width: 320px; min-height: 205px; padding: 28px; }
          .testimonial-card p { font-size: 12px; }
        }
      `}),(0,j.jsxs)(`main`,{className:`home-page`,children:[(0,j.jsxs)(`section`,{className:`hero`,children:[(0,j.jsx)(`div`,{className:`hero-image-wrap`,children:(0,j.jsx)(Sf,{mode:`sync`,children:(0,j.jsx)($.img,{src:Ym[e].image,alt:`Kantule Edutech Medical Education`,className:`hero-image`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.2,ease:`easeInOut`}},e)})}),(0,j.jsx)(`div`,{className:`hero-overlay`}),(0,j.jsx)(`div`,{className:`hero-content`,children:(0,j.jsx)(Sf,{mode:`wait`,children:(0,j.jsxs)($.div,{className:`hero-text`,initial:{opacity:0,y:40},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.7,ease:`easeOut`},children:[(0,j.jsxs)($.div,{className:`hero-eyebrow`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.1},children:[(0,j.jsx)(`span`,{className:`hero-eyebrow-dot`}),Ym[e].eyebrow]}),(0,j.jsx)(`h1`,{className:`hero-title`,children:Ym[e].title.split(`Medical Education`).map((e,t)=>(0,j.jsxs)(x.Fragment,{children:[e,t===0&&(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(`span`,{children:`Medical Education`})})]},t))}),(0,j.jsx)(`p`,{className:`hero-marathi`,children:Ym[e].marathi}),(0,j.jsx)(`p`,{className:`hero-description`,children:`Kantule Edutech is a Maharashtra-based education consultancy specializing in MBBS admission counselling in India and abroad. With around 10 years of experience in the education field, we provide students and parents with transparent, personalized and reliable guidance for medical education.`}),(0,j.jsxs)(`div`,{className:`hero-buttons`,children:[(0,j.jsxs)($.a,{href:`#contact`,className:`primary-btn`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.05},whileTap:{scale:.95},children:[`Enquire Now`,(0,j.jsx)($n,{size:16})]}),(0,j.jsxs)($.a,{href:`#contact`,className:`secondary-btn`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},whileHover:{scale:1.05},whileTap:{scale:.95},children:[`Book Free Counselling`,(0,j.jsx)(er,{size:16})]})]})]},e)})}),(0,j.jsxs)(`div`,{className:`hero-arrows`,children:[(0,j.jsx)(`button`,{className:`hero-arrow`,onClick:()=>{t(e=>(e-1+Ym.length)%Ym.length)},"aria-label":`Previous slide`,children:(0,j.jsx)(sr,{size:19})}),(0,j.jsx)(`button`,{className:`hero-arrow`,onClick:()=>{t(e=>(e+1)%Ym.length)},"aria-label":`Next slide`,children:(0,j.jsx)(cr,{size:19})})]}),(0,j.jsx)(`div`,{className:`hero-dots`,children:Ym.map((n,r)=>(0,j.jsx)(`button`,{className:`hero-dot ${e===r?`active`:``}`,onClick:()=>t(r),"aria-label":`Go to slide ${r+1}`},r))}),(0,j.jsxs)(`div`,{className:`hero-stats`,children:[(0,j.jsxs)(`div`,{className:`stat-item`,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(yr,{size:23})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`stat-number`,children:`10+ Years`}),(0,j.jsx)(`p`,{className:`stat-label`,children:`Experience in Education`})]})]}),(0,j.jsxs)(`div`,{className:`stat-item`,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(Br,{size:22})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`stat-number`,children:`150+ Students`}),(0,j.jsx)(`p`,{className:`stat-label`,children:`Studying MBBS Abroad`})]})]}),(0,j.jsxs)(`div`,{className:`stat-item`,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(rr,{size:21})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`stat-number`,children:`4 Centres`}),(0,j.jsx)(`p`,{className:`stat-label`,children:`Across Maharashtra`})]})]}),(0,j.jsxs)(`div`,{className:`stat-item`,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(mr,{size:21})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`stat-number`,children:`Multiple Countries`}),(0,j.jsx)(`p`,{className:`stat-label`,children:`MBBS Opportunities`})]})]})]})]}),(0,j.jsx)(`section`,{className:`section`,children:(0,j.jsx)(`div`,{className:`section-container`,children:(0,j.jsxs)(`div`,{className:`intro-grid`,children:[(0,j.jsxs)($.div,{className:`intro-visual`,initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.7},children:[(0,j.jsx)(`div`,{className:`intro-main-image-wrap`,children:(0,j.jsx)($.img,{src:Em,alt:`Kantule Edutech`,className:`intro-main-image`,initial:{scale:1.2},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.8}})}),(0,j.jsxs)($.div,{className:`intro-floating-card`,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.3,duration:.5},children:[(0,j.jsx)(`div`,{className:`intro-floating-card-icon`,children:(0,j.jsx)(Lr,{size:22})}),(0,j.jsx)(`strong`,{children:`10+ Years`}),(0,j.jsx)(`span`,{children:`Experience in Education`})]})]}),(0,j.jsxs)($.div,{className:`intro-content`,initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.7},children:[(0,j.jsx)(`div`,{className:`section-kicker`,children:`ABOUT KANTULE EDUTECH`}),(0,j.jsxs)(`h2`,{children:[`Your Trusted Partner for `,(0,j.jsx)(`span`,{children:`Medical Education`})]}),(0,j.jsx)(`p`,{children:`Kantule Edutech is a Maharashtra-based education consultancy specializing in MBBS admission counselling in India and abroad. With around 10 years of experience in the education field, we provide students and parents with transparent, personalized and reliable guidance for medical education.`}),(0,j.jsx)(`p`,{children:`We guide students through the complete admission journey — from course and university selection to documentation, admission procedures and further support.`}),(0,j.jsxs)(`div`,{className:`marathi-info`,children:[(0,j.jsx)(`p`,{children:`Kantule Edutech ही महाराष्ट्रातील शिक्षण सल्लागार संस्था असून भारतात आणि परदेशात MBBS प्रवेशासाठी मार्गदर्शन करते. शिक्षण क्षेत्रातील सुमारे 10 वर्षांच्या अनुभवासह आम्ही विद्यार्थी आणि पालकांना वैद्यकीय शिक्षणासाठी पारदर्शक, वैयक्तिक आणि विश्वासार्ह मार्गदर्शन प्रदान करतो.`}),(0,j.jsx)(`p`,{children:`अभ्यासक्रम आणि विद्यापीठाची निवड करण्यापासून ते कागदपत्रे, प्रवेश प्रक्रिया आणि पुढील मार्गदर्शनापर्यंत आम्ही विद्यार्थ्यांना संपूर्ण प्रवेश प्रक्रियेत मार्गदर्शन करतो.`})]}),(0,j.jsx)(`div`,{className:`intro-points`,children:[`Professional MBBS admission counselling`,`India & Abroad medical admission guidance`,`Personalized counselling for students and parents`,`Assistance with documentation and admission procedures`,`Transparent guidance regarding fees, universities and courses`,`Around 10 years of experience in education counselling`].map((e,t)=>(0,j.jsxs)($.div,{className:`intro-point`,initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:t*.1},children:[(0,j.jsx)(`span`,{className:`check-circle`,children:(0,j.jsx)(ar,{size:12})}),e]},t))}),(0,j.jsx)(`div`,{className:`marathi-points`,children:[`व्यावसायिक MBBS प्रवेश मार्गदर्शन`,`भारत आणि परदेशातील वैद्यकीय प्रवेशासाठी मार्गदर्शन`,`विद्यार्थी आणि पालकांसाठी वैयक्तिक मार्गदर्शन`,`कागदपत्रे आणि प्रवेश प्रक्रियेसाठी सहाय्य`,`फी, विद्यापीठे आणि अभ्यासक्रमाबाबत पारदर्शक मार्गदर्शन`,`शिक्षण क्षेत्रातील सुमारे 10 वर्षांचा अनुभव`].map((e,t)=>(0,j.jsxs)($.div,{className:`intro-point`,initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:t*.1},children:[(0,j.jsx)(`span`,{className:`check-circle`,children:(0,j.jsx)(ar,{size:12})}),e]},t))})]})]})})}),(0,j.jsxs)(`section`,{className:`section soft programs-section`,children:[(0,j.jsx)(`div`,{className:`programs-bg-image`,style:{backgroundImage:`url(${Dm})`},"aria-hidden":`true`}),(0,j.jsxs)(`div`,{className:`section-container programs-content`,children:[(0,j.jsxs)(`div`,{className:`section-heading`,children:[(0,j.jsx)(`div`,{className:`section-kicker`,children:`OUR PROGRAMS`}),(0,j.jsxs)(`h2`,{className:`section-title`,children:[`Medical Education `,(0,j.jsx)(`span`,{children:`Opportunities`})]}),(0,j.jsx)(`p`,{className:`section-description`,children:`We provide transparent, personalized and reliable guidance for medical education in India and abroad.`})]}),(0,j.jsxs)(`div`,{className:`program-grid`,children:[(0,j.jsxs)($.div,{className:`program-card`,style:{backgroundImage:`url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90)`},initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},whileHover:{y:-7},children:[(0,j.jsx)(`div`,{className:`program-card-overlay`,"aria-hidden":`true`}),(0,j.jsx)(`div`,{className:`program-icon`,children:(0,j.jsx)(rr,{size:27})}),(0,j.jsx)(`h3`,{children:`MBBS in India`}),(0,j.jsx)(`p`,{children:`Professional MBBS admission counselling`}),(0,j.jsxs)(`ul`,{className:`program-list`,children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Government Medical Colleges`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Private Medical Colleges`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Deemed Universities`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` NEET counselling guidance`]})]})]}),(0,j.jsxs)($.div,{className:`program-card`,style:{backgroundImage:`url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=90)`},initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.12},whileHover:{y:-7},children:[(0,j.jsx)(`div`,{className:`program-card-overlay`,"aria-hidden":`true`}),(0,j.jsx)(`div`,{className:`program-icon`,children:(0,j.jsx)(mr,{size:27})}),(0,j.jsx)(`h3`,{children:`MBBS Abroad`}),(0,j.jsx)(`p`,{children:`India & Abroad medical admission guidance`}),(0,j.jsxs)(`ul`,{className:`program-list`,children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Russia`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Kyrgyzstan`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Kazakhstan`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Georgia`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Philippines`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Nepal`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` Vietnam`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),` USA and other international opportunities`]})]})]})]})]})]}),(0,j.jsx)(`section`,{className:`section`,style:{background:`radial-gradient(circle at 8% 18%, rgba(22,183,215,.045), transparent 26%), radial-gradient(circle at 92% 82%, rgba(7,92,168,.045), transparent 26%), #ffffff`},children:(0,j.jsxs)(`div`,{className:`section-container`,children:[(0,j.jsxs)(`div`,{className:`section-heading`,children:[(0,j.jsx)(`div`,{className:`section-kicker`,children:`GLOBAL MBBS OPPORTUNITIES`}),(0,j.jsxs)(`h2`,{className:`section-title`,children:[`Study MBBS in `,(0,j.jsx)(`span`,{children:`Top Countries`})]}),(0,j.jsx)(`p`,{className:`section-description`,children:`Multiple MBBS destinations with professional guidance throughout the admission journey.`})]}),(0,j.jsx)(`div`,{className:`country-grid`,children:Xm.map((e,t)=>(0,j.jsxs)($.div,{className:`country-card`,initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.5,delay:t*.06,ease:[.22,1,.36,1]},whileHover:{y:-7},children:[(0,j.jsx)(`div`,{className:`country-flag`,children:(0,j.jsx)(`img`,{src:`https://flagcdn.com/w160/${e.code}.png`,alt:`${e.name} flag`,loading:`lazy`})}),(0,j.jsx)(`h3`,{children:e.name})]},e.name))})]})}),(0,j.jsx)(Jm,{}),(0,j.jsx)(`section`,{className:`section soft`,children:(0,j.jsxs)(`div`,{className:`section-container`,children:[(0,j.jsxs)(`div`,{className:`section-heading`,children:[(0,j.jsx)(`div`,{className:`section-kicker`,children:`WHY CHOOSE KANTULE EDUTECH?`}),(0,j.jsxs)(`h2`,{className:`section-title`,children:[`Guidance You Can `,(0,j.jsx)(`span`,{children:`Trust`})]}),(0,j.jsx)(`p`,{className:`section-description`,children:`Transparent, personalized and reliable guidance for students and parents throughout the medical admission journey.`})]}),(0,j.jsx)(`div`,{className:`why-grid`,children:Zm.map((e,t)=>{let n=e.icon;return(0,j.jsxs)($.div,{className:`why-card`,initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.45,delay:t*.05},whileHover:{y:-8},children:[(0,j.jsx)(`div`,{className:`why-icon`,children:(0,j.jsx)(n,{size:22})}),(0,j.jsx)(`h3`,{children:e.title})]},e.title)})})]})}),(0,j.jsx)(`section`,{className:`section`,children:(0,j.jsxs)(`div`,{className:`section-container`,children:[(0,j.jsxs)(`div`,{className:`section-heading`,children:[(0,j.jsx)(`div`,{className:`section-kicker`,children:`COMPLETE ADMISSION GUIDANCE`}),(0,j.jsxs)(`h2`,{className:`section-title`,children:[`Our Admission `,(0,j.jsx)(`span`,{children:`Process`})]}),(0,j.jsx)(`p`,{className:`section-description`,children:`We guide students through the complete admission journey from counselling to post-admission support.`})]}),(0,j.jsxs)(`div`,{className:`process-wrapper`,children:[(0,j.jsx)(`div`,{className:`process-line`}),(0,j.jsx)(`div`,{className:`process-grid`,children:Qm.map((e,t)=>{let n=e.icon;return(0,j.jsxs)($.div,{className:`process-item`,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.45,delay:t*.08},children:[(0,j.jsxs)(`div`,{className:`process-circle`,children:[(0,j.jsx)(n,{size:24}),(0,j.jsx)(`span`,{className:`process-number`,children:e.number})]}),(0,j.jsx)(`h4`,{children:e.title})]},e.number)})})]})]})}),(0,j.jsx)(`section`,{className:`section soft testimonials-section`,children:(0,j.jsxs)(`div`,{className:`section-container`,children:[(0,j.jsxs)(`div`,{className:`section-heading`,children:[(0,j.jsx)(`div`,{className:`section-kicker`,children:`STUDENT & PARENT EXPERIENCES`}),(0,j.jsxs)(`h2`,{className:`section-title`,children:[`What Your Students & `,(0,j.jsx)(`span`,{children:`Parents Say`})]})]}),(0,j.jsx)(`div`,{className:`testimonial-marquee`,children:(0,j.jsx)(`div`,{className:`testimonial-track`,children:[0,1].map(e=>(0,j.jsx)(`div`,{className:`testimonial-set`,"aria-hidden":e===1,children:$m.map((t,n)=>(0,j.jsxs)($.div,{className:`testimonial-card`,initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.08},transition:{duration:.45,delay:n%4*.04},children:[(0,j.jsx)(`div`,{className:`testimonial-top`,children:(0,j.jsx)(`div`,{className:`testimonial-stars`,"aria-label":`5 star review`,children:[1,2,3,4,5].map(e=>(0,j.jsx)(Rr,{size:10},e))})}),(0,j.jsx)(`p`,{children:t.quote}),(0,j.jsx)(`div`,{className:`testimonial-user`,children:(0,j.jsx)(`strong`,{children:t.name})})]},`${e}-${t.name}-${n}`))},e))})})]})}),(0,j.jsx)(`section`,{className:`section`,children:(0,j.jsxs)(`div`,{className:`section-container`,children:[(0,j.jsxs)(`div`,{className:`section-heading`,children:[(0,j.jsx)(`div`,{className:`section-kicker`,children:`KANTULE EDUTECH`}),(0,j.jsxs)(`h2`,{className:`section-title`,children:[`Your Medical Career `,(0,j.jsx)(`span`,{children:`Starts Here`})]})]}),(0,j.jsxs)(`div`,{className:`gallery-grid`,children:[(0,j.jsx)(`div`,{className:`gallery-item`,children:(0,j.jsx)(`div`,{className:`gallery-image-wrap`,children:(0,j.jsx)($.img,{src:km,alt:`Kantule Edutech`,className:`gallery-image`,loading:`lazy`,initial:{scale:1.2},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.8}})})}),(0,j.jsx)(`div`,{className:`gallery-item`,children:(0,j.jsx)(`div`,{className:`gallery-image-wrap`,children:(0,j.jsx)($.img,{src:Am,alt:`Kantule Edutech`,className:`gallery-image`,loading:`lazy`,initial:{scale:1.2},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.8}})})}),(0,j.jsx)(`div`,{className:`gallery-item`,children:(0,j.jsx)(`div`,{className:`gallery-image-wrap`,children:(0,j.jsx)($.img,{src:jm,alt:`Kantule Edutech`,className:`gallery-image`,loading:`lazy`,initial:{scale:1.2},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.8}})})}),(0,j.jsx)(`div`,{className:`gallery-item`,children:(0,j.jsx)(`div`,{className:`gallery-image-wrap`,children:(0,j.jsx)($.img,{src:Mm,alt:`Kantule Edutech`,className:`gallery-image`,loading:`lazy`,initial:{scale:1.2},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.8}})})}),(0,j.jsx)(`div`,{className:`gallery-item`,children:(0,j.jsx)(`div`,{className:`gallery-image-wrap`,children:(0,j.jsx)($.img,{src:Nm,alt:`Kantule Edutech`,className:`gallery-image`,loading:`lazy`,initial:{scale:1.2},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.8}})})})]})]})}),(0,j.jsx)(`section`,{className:`cta`,id:`contact`,children:(0,j.jsxs)(`div`,{className:`cta-inner`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h2`,{children:`Start Your Medical Career Today!`}),(0,j.jsx)(`p`,{children:`Get expert guidance for MBBS admission in India and abroad.`})]}),(0,j.jsxs)(`div`,{className:`cta-buttons`,children:[(0,j.jsxs)(`a`,{href:`https://wa.me/918830451660?text=Hello%20Kantule%20Edutech%2C%20I%20would%20like%20to%20know%20more%20about%20MBBS%20admission%20guidance.`,target:`_blank`,rel:`noopener noreferrer`,className:`primary-btn`,children:[`Enquire Now`,(0,j.jsx)($n,{size:16})]}),(0,j.jsxs)(`a`,{href:`/contact`,className:`secondary-btn`,children:[`Book Free Counselling`,(0,j.jsx)(er,{size:16})]})]})]})})]})]})}var th=`/assets/about1-Bw_RLMe6.png`,nh=`/assets/about2-B1ZWmJ3Y.png`,rh=`/assets/Swapnil%20R.%20Kantule-oJ4jfmgn.jpg`,ih={hidden:{opacity:0,y:35},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}}},ah={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.8,ease:[.22,1,.36,1]}}},oh={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.8,ease:[.22,1,.36,1]}}},sh=({children:e})=>(0,j.jsxs)(`div`,{className:`section-label`,children:[(0,j.jsx)(`span`,{className:`label-line`}),(0,j.jsx)(`span`,{children:e})]}),ch=()=>{let e=[{icon:yr,value:`150+`,title:`Students Guided`,text:`Students guided for MBBS abroad`},{icon:rr,value:`4`,title:`Counselling Centres`,text:`Across Maharashtra`},{icon:mr,value:`10+`,title:`Years Experience`,text:`In the education sector`},{icon:Or,value:`Multiple`,title:`Regions Served`,text:`Across Maharashtra`}],t=[`To provide transparent and reliable education counselling.`,`To help students select the right medical education option.`,`To provide personalized guidance to every student.`,`To simplify the admission process for students and parents.`,`To connect students with suitable educational opportunities in India and abroad.`,`To support students throughout their admission journey.`],n=[{icon:Fr,title:`Transparent Guidance`,text:`Clear, practical and reliable information for informed decisions.`},{icon:Br,title:`Personalized Counselling`,text:`Guidance based on each student's profile, goals and requirements.`},{icon:xr,title:`Student & Parent Focus`,text:`A supportive counselling approach for students and their parents.`},{icon:_r,title:`Complete Support`,text:`Guidance throughout the medical admission journey.`}];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');

        :root {
          --navy: #092b63;
          --navy-dark: #061f49;
          --blue: #0b72b9;
          --cyan: #13b8d1;
          --text: #13284b;
          --muted: #64748b;
          --light: #f5f9fd;
          --border: #e4edf5;
          --white: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        .about-page {
          width: 100%;
          overflow: hidden;
          background: #fff;
          color: var(--text);
          font-family: "DM Sans", sans-serif;
        }

        .about-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .about-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(5, 31, 70, 0.88) 0%,
              rgba(5, 31, 70, 0.68) 48%,
              rgba(5, 31, 70, 0.38) 100%
            ),
            url(${th}) center / cover no-repeat;
        }

        .hero-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          right: -180px;
          top: -160px;
          border-radius: 50%;
          background: rgba(25, 190, 216, 0.16);
          filter: blur(5px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          color: white;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-size: 14px;
          color: rgba(255,255,255,.78);
        }

        .breadcrumb span:last-child {
          color: #fff;
          font-weight: 600;
        }

        .hero-content h1 {
          margin: 0 0 16px;
          font-family: "Manrope", sans-serif;
          font-size: clamp(42px, 6vw, 68px);
          line-height: 1.05;
          letter-spacing: -2.5px;
          font-weight: 800;
        }

        .hero-content h1 span {
          display: block;
          color: #58d8e9;
        }

        .hero-description {
          max-width: 680px;
          margin: 0;
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255,255,255,.86);
        }

        .hero-decoration {
          position: absolute;
          right: 7%;
          bottom: 38px;
          width: 110px;
          height: 110px;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,.7);
        }

        .hero-decoration::before,
        .hero-decoration::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
        }

        .hero-decoration::before {
          inset: 14px;
        }

        .hero-decoration::after {
          inset: 29px;
        }

        /* INTRO */

        .intro-section {
          padding: 110px 0 90px;
          background: #fff;
        }

        /* INTRO — image first, content underneath on every screen size */
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 52px;
          align-items: start;
        }

        .image-stack {
          position: relative;
          width: min(100%, 900px);
          margin: 0 auto;
          padding: 0 0 42px;
        }

        .main-image {
          position: relative;
          width: 100%;
          height: auto;
          min-height: 0;
          overflow: hidden;
          border-radius: 24px;
          background: #f4f8fb;
          box-shadow: 0 25px 65px rgba(8, 46, 93, 0.14);
        }

        .main-image img {
          width: 100%;
          height: auto;
          min-height: 0;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .image-accent {
          position: absolute;
          width: 180px;
          height: 180px;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--cyan), var(--blue));
          border-radius: 22px;
          z-index: -1;
        }

        .experience-card {
          position: absolute;
          left: -28px;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 18px 45px rgba(8, 46, 93, 0.16);
        }

        .experience-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: white;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
        }

        .experience-card strong {
          display: block;
          font-family: "Manrope", sans-serif;
          font-size: 21px;
          color: var(--navy);
        }

        .experience-card span {
          font-size: 12px;
          color: var(--muted);
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          color: var(--blue);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .label-line {
          width: 27px;
          height: 3px;
          border-radius: 10px;
          background: var(--cyan);
        }

        .intro-content h2,
        .vision-card h2,
        .mission-content h2,
        .values-heading h2 {
          margin: 0 0 22px;
          font-family: "Manrope", sans-serif;
          color: var(--navy);
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.14;
          letter-spacing: -1.6px;
        }

        .gradient-text {
          color: var(--blue);
        }

        .intro-content p,
        .mission-content p {
          margin: 0 0 18px;
          color: #5d6c81;
          font-size: 15.5px;
          line-height: 1.85;
        }

        .intro-highlight {
          margin-top: 30px;
          padding: 20px 22px;
          border-left: 4px solid var(--cyan);
          background: #f3f9fc;
          border-radius: 0 12px 12px 0;
          color: var(--navy);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.65;
        }

        /* Marathi content only for the About introduction */

        .marathi-only-block {
          margin-top: 30px;
          padding-top: 2px;
        }

        .marathi-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 22px;
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .5px;
        }

        .marathi-content p {
          margin: 0 0 18px;
          color: #5d6c81;
          font-size: 15.5px;
          line-height: 1.85;
          font-family: "DM Sans", "Noto Sans Devanagari", sans-serif;
        }

        .marathi-highlight {
          margin-top: 26px;
          border-left-color: var(--blue);
        }

        @media (min-width: 701px) {
          .intro-content {
            width: min(100%, 980px);
            margin: 0 auto;
          }

          .image-stack {
            width: min(100%, 920px);
          }

          .main-image {
            border-radius: 26px;
          }
        }

        @media (max-width: 700px) {
          .marathi-only-block {
            margin-top: 26px;
          }

          .marathi-content p {
            font-size: 14px;
            line-height: 1.8;
          }

          .marathi-highlight {
            padding: 17px 18px;
            font-size: 14px;
            line-height: 1.7;
          }
        }

        /* STATS */

        .stats-section {
          padding: 30px 0 100px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 20px 55px rgba(8, 46, 93, 0.07);
        }

        .stat-card {
          position: relative;
          padding: 34px 25px;
          border-right: 1px solid var(--border);
        }

        .stat-card:last-child {
          border-right: none;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 22px;
          border-radius: 13px;
          color: var(--blue);
          background: #eaf7fb;
        }

        .stat-value {
          display: block;
          margin-bottom: 5px;
          font-family: "Manrope", sans-serif;
          font-size: 31px;
          font-weight: 800;
          color: var(--navy);
        }

        .stat-title {
          display: block;
          margin-bottom: 7px;
          font-weight: 700;
          color: var(--text);
        }

        .stat-text {
          font-size: 13px;
          line-height: 1.5;
          color: var(--muted);
        }

        /* VISION MISSION */

        .vision-section {
          padding: 100px 0;
          background: linear-gradient(180deg, #f7fbfe 0%, #eef7fb 100%);
        }

        .vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .vision-card,
        .mission-card {
          position: relative;
          min-height: 390px;
          padding: 48px;
          overflow: hidden;
          border-radius: 24px;
        }

        .vision-card {
          color: white;
          background:
            linear-gradient(135deg, rgba(5,29,65,.96), rgba(7,91,148,.92)),
            url(${nh}) center / cover;
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 28px 65px rgba(5, 40, 85, .20);
          isolation: isolate;
        }

        .vision-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(19,184,209,.16) 1px, transparent 1px),
            linear-gradient(rgba(19,184,209,.10) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.35), transparent 75%);
          opacity: .45;
        }

        .vision-card::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          right: -105px;
          top: -105px;
          border: 1px solid rgba(91,225,239,.22);
          border-radius: 50%;
          box-shadow:
            0 0 0 22px rgba(91,225,239,.035),
            0 0 0 45px rgba(91,225,239,.025);
          pointer-events: none;
        }

        .vision-card .section-label {
          position: relative;
          z-index: 2;
          color: #72e3ef;
          margin-bottom: 20px;
        }

        .vision-card h2 {
          position: relative;
          z-index: 2;
          max-width: 600px;
          margin: 0 0 24px;
          color: white;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(44px, 5vw, 68px);
          line-height: .96;
          letter-spacing: -1.2px;
          font-style: italic;
          font-weight: 700;
          text-wrap: balance;
          text-shadow: 0 8px 30px rgba(0,0,0,.18);
        }

        .vision-key {
          position: relative;
          display: inline;
          color: #5de0ef;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .vision-key::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 3px;
          border-radius: 8px;
          background: linear-gradient(90deg, #5de0ef, rgba(93,224,239,0));
          opacity: .8;
        }

        .vision-card p {
          position: relative;
          z-index: 2;
          max-width: 540px;
          margin: 0;
          color: rgba(255,255,255,.84);
          line-height: 1.85;
          font-size: 15.5px;
        }

        .vision-watermark {
          position: absolute;
          right: -25px;
          bottom: -45px;
          z-index: 1;
          color: rgba(255,255,255,.055);
          transform: rotate(-8deg);
        }

        .mission-card {
          background:
            radial-gradient(circle at 100% 0%, rgba(19,184,209,.09), transparent 30%),
            #ffffff;
          border: 1px solid var(--border);
          box-shadow: 0 24px 55px rgba(8, 46, 93, .09);
        }

        .mission-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 28px;
          bottom: 28px;
          width: 4px;
          border-radius: 0 8px 8px 0;
          background: linear-gradient(180deg, var(--cyan), var(--blue));
        }

        .mission-card .section-label {
          margin-bottom: 14px;
        }

        .mission-card h2 {
          position: relative;
          z-index: 2;
          margin-bottom: 28px;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(34px, 3.8vw, 48px);
          line-height: 1;
          letter-spacing: -.8px;
          font-style: italic;
          font-weight: 700;
          color: var(--navy);
          text-wrap: balance;
        }

        .mission-key {
          color: var(--blue);
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          font-weight: 700;
        }

        .mission-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .mission-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 10px 12px;
          border: 1px solid transparent;
          border-radius: 11px;
          color: #53647b;
          font-size: 14px;
          line-height: 1.55;
          transition: .25s ease;
        }

        .mission-list li:hover {
          border-color: #dcecf4;
          background: #f7fbfd;
          transform: translateX(4px);
        }

        .mission-list li svg {
          flex: 0 0 auto;
          margin-top: 2px;
          padding: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: var(--blue);
          background: #e7f8fb;
          stroke-width: 3;
        }

        /* VALUES */

        .values-section {
          padding: 110px 0;
          background: white;
        }

        .values-heading {
          max-width: 720px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .values-heading .section-label {
          justify-content: center;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .value-card {
          position: relative;
          padding: 32px 26px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: white;
          transition: .35s ease;
        }

        .value-card:hover {
          transform: translateY(-8px);
          border-color: rgba(13, 184, 209, .3);
          box-shadow: 0 20px 45px rgba(7, 54, 99, .10);
        }

        .value-icon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          margin-bottom: 24px;
          border-radius: 15px;
          color: var(--blue);
          background: linear-gradient(135deg, #e9f8fb, #edf5ff);
        }

        .value-card h3 {
          margin: 0 0 11px;
          font-family: "Manrope", sans-serif;
          font-size: 18px;
          color: var(--navy);
        }

        .value-card p {
          margin: 0;
          color: var(--muted);
          font-size: 13.5px;
          line-height: 1.7;
        }

        /* FOUNDER */

        .founder-section {
          padding: 100px 0;
          background: #f7fafc;
        }

        .founder-grid {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 75px;
          align-items: center;
        }

       .founder-visual {
  position: relative;
  min-height: 440px;
  overflow: hidden;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 25px 60px rgba(7, 43, 86, .15);
}

.founder-visual img {
  width: 100%;
  height: 100%;
  min-height: 440px;
  object-fit: cover;
  opacity: 1;
  mix-blend-mode: normal;
  display: block;
}

        .founder-symbol {
          position: absolute;
          left: 35px;
          bottom: 32px;
          color: white;
        }

        .founder-symbol svg {
          margin-bottom: 14px;
        }

        .founder-symbol small {
          display: block;
          margin-bottom: 4px;
          color: #6ee0ed;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .founder-symbol strong {
          font-family: "Manrope", sans-serif;
          font-size: 25px;
        }

        .founder-content h2 {
          margin: 0 0 10px;
          font-family: "Manrope", sans-serif;
          font-size: clamp(30px, 4vw, 45px);
          line-height: 1.15;
          color: var(--navy);
          letter-spacing: -1.3px;
        }

        .founder-role {
          display: inline-block;
          margin-bottom: 24px;
          color: var(--blue);
          font-size: 14px;
          font-weight: 700;
        }

        .founder-content p {
          margin: 0;
          color: #5d6c81;
          font-size: 15.5px;
          line-height: 1.85;
        }

        /* JOURNEY */

        .journey-section {
          position: relative;
          padding: 105px 0;
          color: white;
          background:
            linear-gradient(120deg, rgba(4, 28, 62, .96), rgba(7, 77, 119, .92)),
            url(${Om}) center / cover;
        }

        .journey-content {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
        }

        .journey-content .section-label {
          justify-content: center;
          color: #67dce9;
        }

        .journey-content h2 {
          margin: 0 0 20px;
          font-family: "Manrope", sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: -1.4px;
        }

        .journey-content p {
          max-width: 680px;
          margin: 0 auto 35px;
          color: rgba(255,255,255,.78);
          line-height: 1.8;
        }

        .journey-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 24px;
          border: none;
          border-radius: 50px;
          color: white;
          background: linear-gradient(135deg, #11b7cf, #0b82ba);
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: .3s ease;
          box-shadow: 0 12px 30px rgba(0, 174, 204, .22);
        }

        .journey-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 35px rgba(0, 174, 204, .35);
        }

        /* MOBILE */

        @media (max-width: 1000px) {
          .intro-grid,
          .founder-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .intro-content {
            max-width: 760px;
          }

          .image-stack {
            height: auto;
            min-height: 0;
            width: 100%;
            padding-right: 0;
          }

          .main-image {
            width: 100%;
            height: auto;
            min-height: 0;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-card:nth-child(2) {
            border-right: none;
          }

          .stat-card:nth-child(-n+2) {
            border-bottom: 1px solid var(--border);
          }

          .vision-grid {
            grid-template-columns: 1fr;
          }

          .founder-visual {
            max-width: 600px;
            width: 100%;
          }
        }

        @media (max-width: 700px) {
          .about-container,
          .hero-content {
            width: min(100% - 30px, 1180px);
          }

          .about-hero {
            min-height: 410px;
            background-position: 60% center;
          }

          .hero-decoration {
            display: none;
          }

          .hero-content h1 {
            font-size: 42px;
            letter-spacing: -1.7px;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.7;
          }

          .intro-section,
          .values-section,
          .founder-section {
            padding: 75px 0;
          }

          .stats-section {
            padding: 10px 0 75px;
          }

          .intro-grid {
            gap: 38px;
          }

          .image-stack {
            width: 100%;
            padding: 0 0 38px;
          }

          .main-image {
            width: 100%;
            height: auto;
            min-height: 0;
          }

          .experience-card {
            left: 10px;
            padding: 14px 17px;
          }

          .experience-card strong {
            font-size: 18px;
          }

          .vision-section,
          .journey-section {
            padding: 75px 0;
          }

          .vision-card,
          .mission-card {
            min-height: auto;
            padding: 34px 25px;
          }

          .vision-card h2 {
            font-size: 46px;
            line-height: .98;
            letter-spacing: -.8px;
          }

          .vision-card p {
            font-size: 14px;
          }

          .mission-card h2 {
            font-size: 38px;
            line-height: 1;
          }

          .mission-list {
            gap: 8px;
          }

          .mission-list li {
            padding: 9px 8px;
            font-size: 13.5px;
          }

          .values-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .stat-card:last-child {
            border-bottom: none;
          }

          .value-card {
            padding: 26px 22px;
          }

          .founder-visual,
          .founder-visual img {
            min-height: 360px;
          }

          .founder-content p {
            font-size: 14px;
          }
        }

        @media (max-width: 430px) {
          .about-hero {
            min-height: 380px;
          }

          .hero-content h1 {
            font-size: 37px;
          }

          .breadcrumb {
            font-size: 12px;
          }

          .intro-content h2,
          .values-heading h2 {
            font-size: 31px;
          }

          .vision-card h2 {
            font-size: 42px;
            line-height: .98;
          }

          .mission-card h2 {
            font-size: 35px;
            line-height: 1;
          }

          .image-stack {
            padding-bottom: 34px;
          }

          .main-image {
            width: 100%;
            height: auto;
            min-height: 0;
            border-radius: 20px;
          }

          .experience-card {
            left: 0;
            bottom: 0;
          }

          .experience-icon {
            width: 40px;
            height: 40px;
          }

        @media (max-width: 360px) {
          .vision-card h2 {
            font-size: 38px;
          }

          .mission-card h2 {
            font-size: 32px;
          }
        }
        }
      `}),(0,j.jsxs)(`main`,{className:`about-page`,children:[(0,j.jsxs)(`section`,{className:`about-hero`,children:[(0,j.jsx)(`div`,{className:`hero-glow`}),(0,j.jsxs)($.div,{className:`hero-content`,initial:`hidden`,animate:`visible`,variants:ih,children:[(0,j.jsxs)(`div`,{className:`breadcrumb`,children:[(0,j.jsx)(`span`,{children:`Home`}),(0,j.jsx)(`span`,{children:`›`}),(0,j.jsx)(`span`,{children:`About Us`})]}),(0,j.jsxs)(`h1`,{children:[`About`,(0,j.jsx)(`span`,{children:`Kantule Edutech`})]}),(0,j.jsx)(`p`,{className:`hero-description`,children:`A trusted education consultancy helping students achieve their dreams of pursuing medical education in India and abroad.`})]}),(0,j.jsx)(`div`,{className:`hero-decoration`,children:(0,j.jsx)(mr,{size:32})})]}),(0,j.jsx)(`section`,{className:`intro-section`,children:(0,j.jsx)(`div`,{className:`about-container`,children:(0,j.jsxs)(`div`,{className:`intro-grid`,children:[(0,j.jsxs)($.div,{className:`image-stack`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},variants:ah,children:[(0,j.jsx)(`div`,{className:`main-image`,children:(0,j.jsx)(`img`,{src:nh,alt:`Kantule Edutech medical education guidance`})}),(0,j.jsx)(`div`,{className:`image-accent`}),(0,j.jsxs)(`div`,{className:`experience-card`,children:[(0,j.jsx)(`div`,{className:`experience-icon`,children:(0,j.jsx)(yr,{size:25})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`strong`,{children:`10+ Years`}),(0,j.jsx)(`span`,{children:`Experience in Education`})]})]})]}),(0,j.jsxs)($.div,{className:`intro-content`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},variants:oh,children:[(0,j.jsx)(sh,{children:`About Kantule Edutech`}),(0,j.jsxs)(`h2`,{children:[`Guiding Students Towards`,(0,j.jsx)(`span`,{className:`gradient-text`,children:` The Right Future`})]}),(0,j.jsx)(`p`,{children:`Kantule Edutech Pvt. Ltd. is a trusted education consultancy based in Maharashtra, dedicated to helping students achieve their dreams of pursuing medical education.`}),(0,j.jsx)(`p`,{children:`With around 10 years of experience in the education field, Kantule Edutech has been providing career guidance and admission counselling to students and parents.`}),(0,j.jsx)(`p`,{children:`Our primary focus is MBBS admission counselling in India and abroad. We help students understand their available options based on their NEET score, academic profile, budget and career goals.`}),(0,j.jsx)(`div`,{className:`intro-highlight`,children:`We believe that choosing a medical college is one of the most important decisions in a student's career. Our counselling process focuses on clear, practical and transparent information so students and parents can make informed decisions.`}),(0,j.jsxs)(`div`,{className:`marathi-only-block`,children:[(0,j.jsx)(`div`,{className:`marathi-divider`}),(0,j.jsxs)(`div`,{className:`marathi-content`,children:[(0,j.jsx)(`p`,{children:`कांतुले एडुटेक प्रा. लि. ही महाराष्ट्रातील एक विश्वासार्ह शैक्षणिक कन्सल्टन्सी आहे. विद्यार्थ्यांना वैद्यकीय शिक्षण घेण्याचे त्यांचे स्वप्न पूर्ण करण्यासाठी आम्ही मार्गदर्शन करतो.`}),(0,j.jsx)(`p`,{children:`शैक्षणिक क्षेत्रातील सुमारे १० वर्षांच्या अनुभवासह, कांतुले एडुटेक विद्यार्थ्यांना आणि पालकांना करिअर मार्गदर्शन व प्रवेश समुपदेशन सेवा प्रदान करत आहे.`}),(0,j.jsx)(`p`,{children:`आमचे प्रमुख उद्दिष्ट भारत आणि परदेशातील MBBS प्रवेशासाठी समुपदेशन करणे आहे. NEET गुण, शैक्षणिक प्रोफाइल, बजेट आणि करिअरच्या उद्दिष्टांनुसार उपलब्ध पर्याय समजून घेण्यासाठी आम्ही विद्यार्थ्यांना मदत करतो.`}),(0,j.jsx)(`div`,{className:`intro-highlight marathi-highlight`,children:`वैद्यकीय महाविद्यालयाची निवड हा विद्यार्थ्याच्या करिअरमधील अत्यंत महत्त्वाचा निर्णय आहे, असे आम्ही मानतो. विद्यार्थ्यांनी आणि पालकांनी योग्य निर्णय घेण्यासाठी आमची समुपदेशन प्रक्रिया स्पष्ट, व्यावहारिक आणि पारदर्शक माहितीवर आधारित असते.`})]})]})]})]})})}),(0,j.jsx)(`section`,{className:`stats-section`,children:(0,j.jsx)(`div`,{className:`about-container`,children:(0,j.jsx)($.div,{className:`stats-grid`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},variants:{hidden:{},visible:{transition:{staggerChildren:.12}}},children:e.map((e,t)=>{let n=e.icon;return(0,j.jsxs)($.div,{className:`stat-card`,variants:ih,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(n,{size:23})}),(0,j.jsx)(`span`,{className:`stat-value`,children:e.value}),(0,j.jsx)(`span`,{className:`stat-title`,children:e.title}),(0,j.jsx)(`span`,{className:`stat-text`,children:e.text})]},t)})})})}),(0,j.jsx)(`section`,{className:`vision-section`,children:(0,j.jsx)(`div`,{className:`about-container`,children:(0,j.jsxs)(`div`,{className:`vision-grid`,children:[(0,j.jsxs)($.div,{className:`vision-card`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},variants:ah,children:[(0,j.jsx)(sh,{children:`Our Vision`}),(0,j.jsxs)(`h2`,{children:[`Creating The `,(0,j.jsx)(`span`,{className:`vision-key`,children:`Right Opportunities`}),` For Every Student`]}),(0,j.jsx)(`p`,{children:`To become a trusted and leading education consultancy that helps students achieve their academic and professional dreams through the right guidance and opportunities.`}),(0,j.jsx)(`div`,{className:`vision-watermark`,children:(0,j.jsx)(gr,{size:180,strokeWidth:1})})]}),(0,j.jsxs)($.div,{className:`mission-card`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},variants:oh,children:[(0,j.jsx)(sh,{children:`Our Mission`}),(0,j.jsxs)(`h2`,{children:[`Simplifying The `,(0,j.jsx)(`span`,{className:`mission-key`,children:`Medical Admission Journey`})]}),(0,j.jsx)(`ul`,{className:`mission-list`,children:t.map((e,t)=>(0,j.jsxs)(`li`,{children:[(0,j.jsx)(ar,{size:18}),(0,j.jsx)(`span`,{children:e})]},t))})]})]})})}),(0,j.jsx)(`section`,{className:`values-section`,children:(0,j.jsxs)(`div`,{className:`about-container`,children:[(0,j.jsxs)($.div,{className:`values-heading`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:ih,children:[(0,j.jsx)(sh,{children:`What We Believe In`}),(0,j.jsxs)(`h2`,{children:[`Guidance Built Around`,(0,j.jsx)(`span`,{className:`gradient-text`,children:` Trust & Clarity`})]})]}),(0,j.jsx)($.div,{className:`values-grid`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.15},variants:{hidden:{},visible:{transition:{staggerChildren:.1}}},children:n.map((e,t)=>{let n=e.icon;return(0,j.jsxs)($.div,{className:`value-card`,variants:ih,children:[(0,j.jsx)(`div`,{className:`value-icon`,children:(0,j.jsx)(n,{size:25})}),(0,j.jsx)(`h3`,{children:e.title}),(0,j.jsx)(`p`,{children:e.text})]},t)})})]})}),(0,j.jsx)(`section`,{className:`founder-section`,children:(0,j.jsx)(`div`,{className:`about-container`,children:(0,j.jsxs)(`div`,{className:`founder-grid`,children:[(0,j.jsxs)($.div,{className:`founder-visual`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},variants:ah,children:[(0,j.jsx)(`img`,{src:rh,alt:`Mr. Swapnil R. Kantule - Founder and Director of Kantule Edutech`}),(0,j.jsxs)(`div`,{className:`founder-symbol`,children:[(0,j.jsx)(yr,{size:45}),(0,j.jsx)(`small`,{children:`Leadership`}),(0,j.jsx)(`strong`,{children:`Kantule Edutech`})]})]}),(0,j.jsxs)($.div,{className:`founder-content`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},variants:oh,children:[(0,j.jsx)(sh,{children:`Founder / Director`}),(0,j.jsx)(`h2`,{children:`Mr. Swapnil R. Kantule`}),(0,j.jsx)(`span`,{className:`founder-role`,children:`Director – Kantule Edutech Pvt. Ltd.`}),(0,j.jsx)(`p`,{children:`Mr. Swapnil R. Kantule is associated with the education counselling sector and works towards providing students with reliable career and admission guidance, particularly in the field of medical education.`}),(0,j.jsx)(`div`,{className:`intro-highlight`,children:`Approximately 10 years of experience in the education sector, with a focus on reliable guidance and student-centric counselling.`})]})]})})}),(0,j.jsx)(`section`,{className:`stats-section`,children:(0,j.jsxs)(`div`,{className:`about-container`,children:[(0,j.jsxs)($.div,{className:`values-heading`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:ih,children:[(0,j.jsx)(sh,{children:`Our Journey`}),(0,j.jsxs)(`h2`,{children:[`Experience That`,(0,j.jsx)(`span`,{className:`gradient-text`,children:` Builds Confidence`})]})]}),(0,j.jsxs)($.div,{className:`stats-grid`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:ih,children:[(0,j.jsxs)(`div`,{className:`stat-card`,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(Tr,{size:23})}),(0,j.jsx)(`span`,{className:`stat-value`,children:`10+`}),(0,j.jsx)(`span`,{className:`stat-title`,children:`Years in Education`}),(0,j.jsx)(`span`,{className:`stat-text`,children:`Approximately 10 years of experience in the education sector.`})]}),(0,j.jsxs)(`div`,{className:`stat-card`,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(yr,{size:23})}),(0,j.jsx)(`span`,{className:`stat-value`,children:`150+`}),(0,j.jsx)(`span`,{className:`stat-title`,children:`Students Guided`}),(0,j.jsx)(`span`,{className:`stat-text`,children:`Students guided for MBBS abroad.`})]}),(0,j.jsxs)(`div`,{className:`stat-card`,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(rr,{size:23})}),(0,j.jsx)(`span`,{className:`stat-value`,children:`4`}),(0,j.jsx)(`span`,{className:`stat-title`,children:`Counselling Centres`}),(0,j.jsx)(`span`,{className:`stat-text`,children:`Counselling centres across Maharashtra.`})]}),(0,j.jsxs)(`div`,{className:`stat-card`,children:[(0,j.jsx)(`div`,{className:`stat-icon`,children:(0,j.jsx)(Or,{size:23})}),(0,j.jsx)(`span`,{className:`stat-value`,children:`MH`}),(0,j.jsx)(`span`,{className:`stat-title`,children:`Regions Served`}),(0,j.jsx)(`span`,{className:`stat-text`,children:`Beed, Jalna, Parbhani, Chhatrapati Sambhajinagar and surrounding areas.`})]})]})]})}),(0,j.jsx)(`section`,{className:`journey-section`,children:(0,j.jsxs)($.div,{className:`journey-content`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:ih,children:[(0,j.jsx)(sh,{children:`Start Your Journey`}),(0,j.jsx)(`h2`,{children:`Your Medical Career Starts With The Right Guidance`}),(0,j.jsx)(`p`,{children:`Kantule Edutech supports students throughout their admission journey with personalized counselling and reliable guidance for medical education in India and abroad.`}),(0,j.jsxs)(`button`,{className:`journey-button`,onClick:()=>{window.location.href=`/contact`},children:[`Get Expert Guidance`,(0,j.jsx)($n,{size:18})]})]})})]})]})};function lh(){let e=_t();(0,x.useEffect)(()=>{let e=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0};e(),requestAnimationFrame(e)},[]);let t=[{id:`india`,code:`IN`,flagCode:`in`,title:`MBBS in India`,tagline:`Medical Education in India`,accentColor:`#079ac7`,badge:`Top Choice`,meta:{duration:`5.5 Years`,recognition:`NMC / WHO`,medium:`English`,admission:`NEET Qualified`},content:{intro:`India offers medical education through government, private, and deemed universities with world-class clinical infrastructure and extensive patient exposure.`,whyStudy:[`Recognized Medical Degrees (NMC / WHO)`,`Affordable Tuition in Govt Medical Colleges`,`Advanced Multispecialty Hospital Infrastructure`,`Distinguished Faculty & Experienced Clinicians`,`Direct NEET-Based Merit Admission Process`,`Strong Pan-India Alumni & Residency Network`],eligibility:[`Minimum 50% marks in PCB in 12th Grade (40% for reserved categories)`,`NEET qualification is mandatory`,`Minimum age 17 years by Dec 31 of admission year`,`Valid identification and domicile documents`],admissionProcess:[`NEET Qualification & Rank Card`,`MCC / State Counselling Registration`,`College Choice Filling & Locking`,`Seat Allotment & Document Verification`,`Fee Payment & Final Enrollment`],documents:[`10th & 12th Mark Sheets and Passing Certificates`,`NEET Scorecard & Admit Card`,`Provisional Allotment Letter`,`Passport / Aadhaar Card ID Proof`,`Medical Fitness Certificate & Photographs`],careerOpportunities:[`Clinical Practice in Top Government & Private Hospitals`,`Postgraduate Medical Specialization (MD / MS / DNB)`,`Hospital Management & Healthcare Administration`,`Biomedical and Clinical Healthcare Research`,`Public Health Services & UPSC Combined Medical Services`]}},{id:`russia`,code:`RU`,flagCode:`ru`,title:`MBBS in Russia`,tagline:`International Medical Education`,accentColor:`#075b91`,badge:`Popular Hub`,meta:{duration:`6 Years`,recognition:`WHO / NMC / ECFMG`,medium:`English`,admission:`NEET Qualified`},content:{intro:`Russia is one of the world's most sought-after destinations for international medical aspirants, with established universities, modern laboratories and extensive clinical exposure.`,whyStudy:[`Globally Recognized Medical Universities`,`Affordable Tuition & Living Costs`,`English-Medium Programs`,`Advanced Medical Simulation & Practical Labs`,`High Clinical Patient Exposure`,`Multicultural International Student Community`],eligibility:[`Minimum 50% aggregate in PCB in 12th grade`,`NEET qualification required for Indian students`,`Minimum age 17 years`,`Valid International Passport`],universities:[`Bashkir State Medical University`,`South Ural State Medical University`,`North Caucasus State Academy`,`Ryazan State Medical University`,`Voronezh State Medical University`,`Yaroslavl State Medical University`],admissionProcess:[`Profile Assessment & University Selection`,`Direct University Application`,`Admission Letter Issuance`,`Ministry Invitation & Visa Processing`,`Travel & Pre-departure Guidance`,`Airport Pickup & Hostel Assistance`],documents:[`10th & 12th Mark Sheets`,`NEET Scorecard`,`Valid International Passport`,`HIV / Medical Fitness Certificate`,`Passport-size Photographs`],careerOpportunities:[`NExT / FMGE License for Medical Practice in India`,`USMLE Pathway for USA Residency`,`PLAB / GMC Pathway for UK`,`Postgraduate Medical Education Worldwide`]}},{id:`kyrgyzstan`,code:`KG`,flagCode:`kg`,title:`MBBS in Kyrgyzstan`,tagline:`Central Asian Medical Hub`,accentColor:`#0ea5e9`,badge:`High ROI`,meta:{duration:`5 to 6 Years`,recognition:`WHO / NMC / FAIMER`,medium:`English`,admission:`Direct / NEET`},content:{intro:`Kyrgyzstan provides budget-friendly medical education with English-medium MBBS programs, affordable living expenses and international student support.`,whyStudy:[`Highly Affordable Tuition & Living Expenses`,`English-Medium Medical Curriculum`,`WHO, NMC & International Recognition`,`Experienced Medical Faculty`,`Indian Food & Student Support`,`Safe Student Environment`],eligibility:[`Minimum 50% PCB in 12th Standard`,`NEET qualification for Indian students`,`Minimum age 17 years`,`Valid Passport`],universities:[`International Higher School of Medicine`,`Kyrgyz State Medical Academy`,`Jalal-Abad State University`,`Osh State University`],admissionProcess:[`Profile Assessment`,`University Application`,`Admission Confirmation`,`Visa & Travel Assistance`,`Hostel Settlement`],documents:[`10th & 12th Mark Sheets`,`NEET Scorecard`,`Valid Passport`,`Medical Fitness Report`,`Passport-size Photos`],careerOpportunities:[`NExT / FMGE Licensure in India`,`USMLE / PLAB International Pathways`,`Postgraduate Medical Specialization`]}},{id:`kazakhstan`,code:`KZ`,flagCode:`kz`,title:`MBBS in Kazakhstan`,tagline:`Modern Medical Education`,accentColor:`#0284c7`,badge:`5-Yr Option`,meta:{duration:`5 to 6 Years`,recognition:`WHO / WFME / NMC`,medium:`English`,admission:`Direct / NEET`},content:{intro:`Kazakhstan offers modern medical education with advanced infrastructure, clinical rotations and affordable international medical programs.`,whyStudy:[`Direct 5-Year MBBS Program Options`,`Affordable Tuition Fees`,`Globally Recognized Degrees`,`Modern Simulation Centers`,`Extensive Clinical Training`,`Safe & Modern Campuses`],eligibility:[`Minimum 50% aggregate in PCB`,`Valid NEET qualification`,`Minimum age 17 years`,`Valid Passport`],universities:[`Kazakh National Medical University`,`Kazakh Russian Medical University`,`Caspian International School of Medicine`,`Semey State Medical University`,`Kokshetau State University`],admissionProcess:[`Profile Evaluation`,`Application Submission`,`Admission & Invitation Letter`,`Student Visa Processing`,`Travel & Campus Onboarding`],documents:[`10th & 12th Mark Sheets`,`NEET Scorecard`,`Valid Passport`,`Medical Certificate`,`Passport Photographs`],careerOpportunities:[`NExT / FMGE`,`USMLE & PLAB Licensing`,`Postgraduate Medical Specializations`]}},{id:`georgia`,code:`GE`,flagCode:`ge`,title:`MBBS in Georgia`,tagline:`European Medical Education`,accentColor:`#e11d48`,badge:`European Standard`,meta:{duration:`6 Years`,recognition:`EU / WHO / NMC`,medium:`English`,admission:`NEET Qualified`},content:{intro:`Georgia provides European-standard medical education with English-medium curriculum, modern university hospitals and international student infrastructure.`,whyStudy:[`European Education Standards`,`Globally Recognized Degrees`,`English-Medium Education`,`Strong Clinical Training`,`Affordable European Tuition`,`Safe International Student Environment`],eligibility:[`Minimum 50% aggregate in PCB`,`NEET qualification required`,`Minimum age 17 years`,`Valid Passport`,`University interview where applicable`],universities:[`Georgian American University`,`East European University`,`Alte University`,`Batumi Shota Rustaveli State University`,`New Vision University`],admissionProcess:[`Profile Assessment`,`University Application`,`University Interview`,`Recognition & Documentation`,`Visa Processing`,`Travel & Accommodation Support`],documents:[`10th & 12th Mark Sheets`,`NEET Scorecard`,`Valid Passport`,`Medical Fitness Certificate`,`Photographs`],careerOpportunities:[`NExT / FMGE`,`EU Medical Licensing`,`USMLE / PLAB Pathways`,`International Clinical Education`]}},{id:`vietnam`,code:`VN`,flagCode:`vn`,title:`MBBS in Vietnam`,tagline:`Growing Medical Education Hub`,accentColor:`#059669`,badge:`Emerging Hub`,meta:{duration:`6 Years`,recognition:`WHO / NMC Aligned`,medium:`English`,admission:`NEET Qualified`},content:{intro:`Vietnam offers growing medical education opportunities with modern university hospitals, affordable costs and increasing international exposure.`,whyStudy:[`Budget-Friendly Medical Education`,`Modern Medical Universities`,`High Patient Exposure`,`Safe Student Environment`,`Convenient Connectivity to India`,`International Medical Curriculum`],eligibility:[`Minimum 50% in PCB`,`NEET qualification mandatory`,`Minimum age 17 years`,`Valid International Passport`],universities:[`Can Tho University of Medicine and Pharmacy`,`Duy Tan University`,`Hong Bang International University`],admissionProcess:[`Profile Assessment`,`University Application`,`Admission Letter`,`Visa Guidance`,`Travel & Hostel Support`],documents:[`10th & 12th Mark Sheets`,`NEET Scorecard`,`Valid Passport`,`Medical Fitness Certificate`,`Photographs`],careerOpportunities:[`NExT / FMGE`,`USMLE / PLAB`,`Postgraduate Medical Education`]}},{id:`nepal`,code:`NP`,flagCode:`np`,title:`MBBS in Nepal`,tagline:`South Asian Medical Education`,accentColor:`#ea580c`,badge:`No Visa Hassle`,meta:{duration:`5.5 Years`,recognition:`NMC / WHO`,medium:`English`,admission:`MEC / NEET`},content:{intro:`Nepal is a convenient medical education destination for Indian students with strong cultural familiarity and easy connectivity to India.`,whyStudy:[`Curriculum Similar to Indian Medical Education`,`No Visa Requirement for Indian Citizens`,`Strong Clinical Training`,`Easy Connectivity to India`,`Familiar Cultural Environment`],eligibility:[`Valid NEET qualification`,`Minimum 50% aggregate in PCB`,`Minimum age 17 years`,`Valid Passport / Voter ID`],admissionProcess:[`Medical Counselling`,`MEC Registration`,`College Selection`,`Admission Confirmation`,`Campus Enrollment`],documents:[`10th & 12th Mark Sheets`,`NEET Scorecard`,`Passport / Indian Voter ID`,`Medical Fitness Certificate`,`Photographs`],careerOpportunities:[`Medical Practice in India`,`Clinical Practice in Nepal`,`USMLE / PLAB / AMC Pathways`,`Postgraduate MD / MS`]}},{id:`philippines`,code:`PH`,flagCode:`ph`,title:`MBBS in Philippines`,tagline:`Asian Medical Opportunities`,accentColor:`#0891b2`,badge:`USMD Aligned`,meta:{duration:`5.5 to 6 Years`,recognition:`US-Based MD / WHO`,medium:`100% English`,admission:`NEET Qualified`},content:{intro:`The Philippines follows a US-based medical education model with English-medium instruction and international career pathways.`,whyStudy:[`American Medical Education System`,`100% English Medium`,`USMLE Pathway`,`Affordable Tuition`,`Clinical Hospital Training`,`International Student Environment`],eligibility:[`Minimum 50% in PCB`,`Valid NEET qualification`,`Minimum age 17 years`,`Valid Passport`],admissionProcess:[`Profile Assessment`,`College Selection`,`Application Submission`,`Acceptance Letter`,`SSP & Visa Guidance`,`Travel & Hostel Support`],documents:[`10th & 12th Mark Sheets`,`NEET Scorecard`,`Valid Passport`,`Medical Certificate`,`Photographs`],careerOpportunities:[`USMLE Pathways`,`NExT / FMGE`,`PLAB / AMC`,`Global Medical Specialization`]}},{id:`usa`,code:`USA`,flagCode:`us`,title:`MBBS in USA & Other Destinations`,tagline:`Global Medical Education`,accentColor:`#1d4ed8`,badge:`Residency Track`,meta:{duration:`Global Pathways`,recognition:`ECFMG / CAAM-HP`,medium:`English`,admission:`Custom Roadmap`},content:{intro:`Explore medical education pathways in the USA, Caribbean, UK and other international destinations with personalized admission guidance.`,whyStudy:[`World-Class Medical Education`,`International Residency Pathways`,`Advanced Clinical Training`,`Global Accreditation`,`Research Opportunities`,`International Career Options`],eligibility:[`Varies by university and destination`,`NEET may be required`,`Strong academic record`,`English proficiency where applicable`,`Valid Passport`],admissionProcess:[`Profile Assessment`,`Destination Shortlisting`,`Application Filing`,`Interview Preparation`,`Visa Guidance`],careerOpportunities:[`US Medical Residency`,`UK Medical Career`,`International Fellowships`,`Global Healthcare Research`]}}],n={india:{isDemo:!0,tuition:{usd:`$5,000 – $25,000`,inr:`₹4.80L – ₹24.00L`},hostel:{usd:`$500 – $1,500`,inr:`₹48K – ₹1.44L`},food:{usd:`$1,000 – $2,000`,inr:`₹96K – ₹1.92L`}},russia:{isDemo:!0,tuition:{usd:`$3,500 – $6,000`,inr:`₹3.36L – ₹5.76L`},hostel:{usd:`$800 – $1,500`,inr:`₹76.8K – ₹1.44L`},food:{usd:`$1,500 – $2,500`,inr:`₹1.44L – ₹2.40L`}},kyrgyzstan:{isDemo:!1,tuition:{usd:`$3,000 – $5,000`,inr:`₹2.88L – ₹4.80L`},hostel:{usd:`$800 – $1,200`,inr:`₹76.8K – ₹1.15L`},food:{usd:`$1,500 – $2,000`,inr:`₹1.44L – ₹1.92L`}},kazakhstan:{isDemo:!1,tuition:{usd:`$3,500 – $6,000`,inr:`₹3.36L – ₹5.76L`},hostel:{usd:`$800 – $1,500`,inr:`₹76.8K – ₹1.44L`},food:{usd:`$1,500 – $2,500`,inr:`₹1.44L – ₹2.40L`}},georgia:{isDemo:!1,tuition:{usd:`$4,000 – $7,000`,inr:`₹3.84L – ₹6.72L`},hostel:{usd:`$1,500 – $3,000`,inr:`₹1.44L – ₹2.88L`},food:{usd:`$2,000 – $3,000`,inr:`₹1.92L – ₹2.88L`}},vietnam:{isDemo:!1,tuition:{usd:`$4,000 – $7,000`,inr:`₹3.84L – ₹6.72L`},hostel:{usd:`$1,000 – $2,000`,inr:`₹96K – ₹1.92L`},food:{usd:`$2,000 – $3,000`,inr:`₹1.92L – ₹2.88L`}},nepal:{isDemo:!0,tuition:{usd:`$5,000 – $8,000`,inr:`₹4.80L – ₹7.68L`},hostel:{usd:`$800 – $1,500`,inr:`₹76.8K – ₹1.44L`},food:{usd:`$1,200 – $2,000`,inr:`₹1.15L – ₹1.92L`}},philippines:{isDemo:!0,tuition:{usd:`$4,000 – $7,000`,inr:`₹3.84L – ₹6.72L`},hostel:{usd:`$1,000 – $2,000`,inr:`₹96K – ₹1.92L`},food:{usd:`$1,500 – $2,500`,inr:`₹1.44L – ₹2.40L`}},usa:{isDemo:!0,tuition:{usd:`$10,000 – $20,000`,inr:`₹9.60L – ₹19.20L`},hostel:{usd:`$4,000 – $8,000`,inr:`₹3.84L – ₹7.68L`},food:{usd:`$3,000 – $6,000`,inr:`₹2.88L – ₹5.76L`}}},[r,i]=Ln(),[a,o]=(0,x.useState)(()=>{let e=r.get(`country`)?.toLowerCase();return t.some(t=>t.id===e)?e:`india`}),s=t.find(e=>e.id===a)||t[0],c=n[s.id];(0,x.useEffect)(()=>{let e=r.get(`country`)?.toLowerCase();e&&t.some(t=>t.id===e)&&o(e)},[r]);let l=[`whyStudy`,`courseStructure`,`eligibility`,`universities`,`admissionProcess`,`documents`,`careerOpportunities`],u={whyStudy:`Why Study Here`,courseStructure:`Course Structure`,eligibility:`Eligibility Criteria`,universities:`Featured Universities`,admissionProcess:`Admission Process`,documents:`Required Documents`,careerOpportunities:`Career Opportunities`},d={whyStudy:Lr,courseStructure:yr,eligibility:lr,universities:rr,admissionProcess:Er,documents:vr,careerOpportunities:nr},f=l.filter(e=>Array.isArray(s.content[e])&&s.content[e].length>0),[p,m]=(0,x.useState)(f[0]||null);(0,x.useEffect)(()=>{m(f[0]||null)},[a]);let h=zm[s.id]||[];function g({fees:e}){if(!e)return null;let t=[{label:`Tuition Fees`,icon:yr,data:e.tuition},{label:`Hostel / Accommodation`,icon:Sr,data:e.hostel},{label:`Food & Living`,icon:Vr,data:e.food}];return(0,j.jsxs)(`div`,{className:`fee-table-panel`,children:[(0,j.jsxs)(`div`,{className:`fee-table-top`,children:[(0,j.jsx)(`div`,{className:`fee-table-top-icon`,children:(0,j.jsx)(Ur,{size:16})}),(0,j.jsxs)(`div`,{className:`fee-table-top-text`,children:[(0,j.jsx)(`p`,{className:`fee-table-subtitle`,children:`Estimated MBBS Fee Structure`}),(0,j.jsx)(`p`,{className:`fee-table-sub2`,children:`Approximate annual expenses`})]}),(0,j.jsx)(`span`,{className:`fee-table-badge`,children:e.isDemo?`DEMO ESTIMATE`:`INDICATIVE FEES`})]}),(0,j.jsx)(`div`,{className:`fee-rows`,children:t.map(e=>{let t=e.icon;return(0,j.jsxs)(`div`,{className:`fee-row`,children:[(0,j.jsxs)(`div`,{className:`fee-row-left`,children:[(0,j.jsx)(`span`,{className:`ft-expense-icon`,children:(0,j.jsx)(t,{size:15})}),(0,j.jsx)(`span`,{className:`fee-row-label`,children:e.label})]}),(0,j.jsxs)(`div`,{className:`fee-row-right`,children:[(0,j.jsxs)(`span`,{className:`ft-usd-cell`,children:[e.data.usd,(0,j.jsx)(`em`,{children:`/yr`})]}),(0,j.jsxs)(`span`,{className:`ft-inr-cell`,children:[`≈ `,e.data.inr]})]})]},e.label)})}),(0,j.jsxs)(`div`,{className:`fee-table-note`,children:[(0,j.jsx)(wr,{size:12}),(0,j.jsx)(`span`,{children:e.isDemo?`Demo estimate • To be updated`:`Indicative fees • Subject to university, city & intake`})]})]})}function _(){let t=s.id===`usa`?`Colleges in USA & Other Destinations`:`Colleges in ${s.title.replace(`MBBS in `,``)}`,n=s.id===`usa`?`Explore top medical universities across the USA, Caribbean and global destinations.`:`Explore featured medical colleges and universities in ${s.title.replace(`MBBS in `,``)}.`;return!h||h.length===0?null:(0,j.jsxs)(`section`,{className:`colleges-section`,children:[(0,j.jsxs)(`div`,{className:`colleges-section-header`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsxs)(`div`,{className:`colleges-eyebrow`,children:[(0,j.jsx)(rr,{size:13}),`EXPLORE MEDICAL COLLEGES`]}),(0,j.jsx)(`h3`,{children:t}),(0,j.jsx)(`p`,{children:n})]}),(0,j.jsxs)(`button`,{type:`button`,className:`view-all-colleges`,onClick:()=>e(`/university/${h[0].id}`),children:[`View All Colleges`,(0,j.jsx)($n,{size:14})]})]}),(0,j.jsx)(`div`,{className:`college-cards-scroll`,children:h.map(e=>(0,j.jsxs)($.article,{className:`college-card`,whileHover:{y:-4},children:[(0,j.jsxs)(`div`,{className:`college-image-wrap`,children:[(0,j.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=`https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80`}}),(0,j.jsx)(`div`,{className:`college-image-overlay`}),(0,j.jsx)(`span`,{className:`college-type-pill`,children:e.type})]}),(0,j.jsxs)(`div`,{className:`college-card-content`,children:[(0,j.jsx)(`h4`,{children:e.name}),(0,j.jsxs)(`div`,{className:`college-location`,children:[(0,j.jsx)(Or,{size:13}),(0,j.jsx)(`span`,{children:e.location})]}),(0,j.jsx)(`div`,{className:`college-badges`,children:e.recognition&&(0,j.jsxs)(`span`,{className:`college-badge green`,children:[(0,j.jsx)(lr,{size:11}),e.recognition]})}),(0,j.jsxs)(jn,{to:`/university/${e.id}`,className:`college-details-btn`,children:[(0,j.jsx)(`span`,{children:`View Details`}),(0,j.jsx)($n,{size:14})]})]})]},e.id))})]})}return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`style`,{children:`

        /* =====================================================
           GLOBAL SAFETY
        ===================================================== */

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html,
        body {
          max-width: 100%;
          overflow-x: hidden;
        }

        body {
          margin: 0;
          scrollbar-color: #0a78b5 #e8f2f8;
        }

        /* =====================================================
           PAGE
        ===================================================== */

        .programs-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 18px 14px 56px;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 10% 18%,
              rgba(8,168,213,.13),
              transparent 25%
            ),
            radial-gradient(
              circle at 90% 10%,
              rgba(7,59,130,.10),
              transparent 27%
            ),
            linear-gradient(
              180deg,
              #f8fcff 0%,
              #eef6fb 52%,
              #f8fbfe 100%
            );
        }

        .programs-container {
          position: relative;
          z-index: 1;
          width: min(1240px, 100%);
          max-width: 100%;
          margin: 0 auto;
          min-width: 0;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .programs-hero {
          width: 100%;

          margin-bottom: 32px;

          padding:
            clamp(42px, 7vw, 82px)
            20px
            32px;

          text-align: center;

          position: relative;
          overflow: hidden;

          border-radius: 26px;

          background:
            linear-gradient(
              90deg,
              rgba(248,252,255,.98),
              rgba(248,252,255,.72)
            );

          border:
            1px solid #e1edf5;

          box-shadow:
            0 24px 65px -48px rgba(7,59,130,.42);
        }

        .programs-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          color: #079ac7;

          background: #ffffff;

          border:
            1px solid rgba(8,168,213,.25);

          padding:
            7px
            16px;

          border-radius: 999px;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .1em;

          margin-bottom: 17px;
        }

        .programs-hero-eyebrow svg {
          width: 13px;
          height: 13px;
        }

        .programs-hero h1 {
          margin:
            0
            0
            12px;

          color: #09285f;

          font-size:
            clamp(31px, 6vw, 58px);

          line-height: 1.13;

          font-weight: 800;

          letter-spacing: -.035em;
        }

        .programs-hero h1 span {
          display: block;

          background:
            linear-gradient(
              110deg,
              #08a8d5,
              #073b82,
              #08a8d5
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }

        .programs-hero p {
          max-width: 760px;

          margin: 0 auto;

          color: #556987;

          font-size: 14px;

          line-height: 1.75;
        }

        /* =====================================================
           TRUST
        ===================================================== */

        .hero-trust-strip {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 1px;

          max-width: 980px;

          margin:
            30px
            auto
            0;

          background: #e1ebf4;

          border:
            1px solid #ffffff;

          border-radius: 18px;

          overflow: hidden;
        }

        .hero-trust-item {
          min-height: 62px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          padding:
            10px;

          background:
            rgba(255,255,255,.85);

          text-align: center;
        }

        .hero-trust-icon {
          width: 28px;
          height: 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #eff9fd;

          color: #08a8d5;

          flex-shrink: 0;
        }

        .hero-trust-icon svg {
          width: 14px;
          height: 14px;
        }

        .hero-trust-item > span:last-child {
          color: #09285f;

          font-size: 10.5px;

          font-weight: 700;

          line-height: 1.3;
        }

        /* =====================================================
           DESTINATION
        ===================================================== */

        .destinations-bar {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 10px;

          flex-wrap: wrap;

          margin-bottom: 10px;

          padding:
            0
            4px;
        }

        .destinations-bar-label {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #09285f;

          font-size: 12px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: .06em;
        }

        .destinations-bar-label svg {
          color: #08a8d5;
        }

        .destinations-bar-hint {
          display: none;

          color: #7a8da3;

          font-size: 11px;

          font-weight: 600;
        }

        @media (min-width: 560px) {
          .destinations-bar-hint {
            display: block;
          }
        }

        .dest-cards-scroll {
          display: flex;

          gap: 12px;

          width: 100%;
          max-width: 100%;

          overflow-x: auto;
          overflow-y: hidden;

          padding:
            5px
            5px
            15px;

          margin:
            0
            0
            18px;

          scrollbar-width: auto;

          scrollbar-color:
            #0aa8d5
            #e7f1f7;

          -webkit-overflow-scrolling: touch;

          touch-action: pan-x;

          overscroll-behavior-x: contain;
        }

        .dest-cards-scroll::-webkit-scrollbar {
          height: 9px;
        }

        .dest-cards-scroll::-webkit-scrollbar-track {
          background: #e7f1f7;

          border-radius: 999px;
        }

        .dest-cards-scroll::-webkit-scrollbar-thumb {
          background:
            linear-gradient(
              90deg,
              #0aa8d5,
              #073b82
            );

          border-radius: 999px;
        }

        .dest-card {
          position: relative;

          flex:
            0 0 148px;

          min-width: 0;

          min-height: 116px;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 11px;

          padding:
            16px
            15px;

          border-radius: 19px;

          background: #ffffff;

          border:
            1px solid #e5eef5;

          cursor: pointer;

          text-align: left;

          font-family: inherit;

          box-shadow:
            0 12px 25px -18px
            rgba(7,59,130,.38);

          transition:
            .25s ease;
        }

        .dest-card:hover {
          transform: translateY(-3px);

          border-color:
            rgba(8,168,213,.42);
        }

        .dest-card.active {
          background:
            linear-gradient(
              145deg,
              #087fb8,
              #075b91 60%,
              #073b82
            );

          color: #ffffff;

          border-color: transparent;

          transform:
            translateY(-3px);

          box-shadow:
            0 22px 40px -20px
            rgba(7,59,130,.58);
        }

        .dest-card-top {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: space-between;
        }

        .dest-card-flag {
          width: 40px;
          height: 30px;

          border-radius: 9px;

          overflow: hidden;

          border:
            1px solid rgba(255,255,255,.9);

          box-shadow:
            0 6px 14px
            rgba(7,59,130,.14);
        }

        .dest-card-flag img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .dest-card-check {
          width: 18px;
          height: 18px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #ffffff;

          color:
            var(--accent,#08a8d5);

          opacity: 0;

          transform:
            scale(.7);

          transition:
            .2s ease;
        }

        .dest-card.active
        .dest-card-check {
          opacity: 1;
          transform: scale(1);
        }

        .dest-card-title {
          margin:
            0
            0
            5px;

          color: #09285f;

          font-size: 12.5px;

          line-height: 1.3;

          font-weight: 800;
        }

        .dest-card.active
        .dest-card-title {
          color: #ffffff;
        }

        .dest-card-badge {
          display: inline-block;

          color:
            var(--accent,#08a8d5);

          background:
            #eef9fd;

          border-radius: 999px;

          padding:
            4px
            8px;

          font-size: 8.5px;

          font-weight: 800;
        }

        .dest-card.active
        .dest-card-badge {
          color: #ffffff;

          background:
            rgba(255,255,255,.16);
        }

        /* =====================================================
           MAIN DETAIL
           
           IMPORTANT FIX:
           minmax(0, ...) prevents right column overflow.
        ===================================================== */

        .detail-panel {
          position: relative;

          width: 100%;
          max-width: 100%;

          min-width: 0;

          overflow: hidden;

          border:
            1px solid rgba(211,228,240,.92);

          border-radius: 28px;

          background:
            linear-gradient(
              120deg,
              rgba(255,255,255,.98),
              rgba(248,252,255,.96)
            );

          box-shadow:
            0 30px 80px -48px
            rgba(7,59,130,.42);
        }

        .detail-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr);

          width: 100%;
          max-width: 100%;

          min-width: 0;
        }

        .detail-main,
        .detail-side,
        .detail-side-inner {
          min-width: 0;
          max-width: 100%;
        }

        @media (min-width: 900px) {
          .detail-grid {
            grid-template-columns:
              minmax(0, 1.55fr)
              minmax(300px, .95fr);
          }
        }

        @media (min-width: 1200px) {
          .detail-grid {
            grid-template-columns:
              minmax(0, 1.55fr)
              minmax(330px, .90fr);
          }
        }

        .detail-main {
          width: 100%;
          min-width: 0;

          padding:
            22px
            16px
            26px;
        }

        @media (min-width: 640px) {
          .detail-main {
            padding:
              30px
              30px
              28px;
          }
        }

        /* =====================================================
           RIGHT SIDEBAR
        ===================================================== */

        .detail-side {
          width: 100%;
          min-width: 0;
          max-width: 100%;

          padding:
            18px
            16px
            24px;

          background:
            linear-gradient(
              180deg,
              rgba(246,251,255,.86),
              rgba(255,255,255,.95)
            );

          border-top:
            1px solid #e4eef6;
        }

        @media (min-width: 640px) {
          .detail-side {
            padding:
              24px
              24px
              28px;
          }
        }

        @media (min-width: 900px) {
          .detail-side {
            padding:
              30px
              28px
              30px;

            border-top: 0;

            border-left:
              1px solid #e4eef6;
          }
        }

        .detail-side-inner {
          width: 100%;
          min-width: 0;
          max-width: 100%;
        }

        /* =====================================================
           DETAIL HEADER
        ===================================================== */

        .detail-header {
          display: flex;

          align-items: flex-start;

          gap: 14px;

          margin-bottom: 20px;

          padding-bottom: 18px;

          border-bottom:
            1px dashed #e3edf6;

          min-width: 0;
        }

        .detail-flag-big {
          width: 62px;
          height: 46px;

          flex:
            0 0 auto;

          border-radius: 13px;

          overflow: hidden;

          background: #ffffff;

          border:
            1px solid #e9f0f7;

          box-shadow:
            0 12px 26px -18px
            rgba(7,59,130,.5);
        }

        @media (min-width: 640px) {
          .detail-flag-big {
            width: 76px;
            height: 56px;
          }
        }

        .detail-flag-big img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .detail-title-wrap {
          min-width: 0;
          flex: 1;
        }

        .detail-badges {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 6px;

          margin-bottom: 7px;
        }

        .detail-badge,
        .detail-code-pill {
          display: inline-flex;

          align-items: center;

          padding:
            3px
            8px;

          border-radius: 999px;

          font-size: 9px;

          font-weight: 800;
        }

        .detail-code-pill {
          color: #079ac7;

          background:
            rgba(8,168,213,.08);

          border:
            1px solid
            rgba(8,168,213,.24);
        }

        .detail-panel h2 {
          margin:
            0
            0
            3px;

          color: #09285f;

          font-size:
            clamp(24px, 4vw, 38px);

          line-height: 1.15;

          font-weight: 800;

          letter-spacing: -.03em;
        }

        .detail-panel .tagline {
          margin: 0;

          color: #5f7a94;

          font-size: 12px;

          line-height: 1.5;
        }

        /* =====================================================
           META
        ===================================================== */

        .detail-meta-strip {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 1px;

          overflow: hidden;

          width: 100%;
          max-width: 100%;

          border:
            1px solid #e3edf6;

          border-radius: 16px;

          background:
            #e3edf6;

          margin-bottom: 20px;
        }

        @media (min-width: 500px) {
          .detail-meta-strip {
            grid-template-columns:
              repeat(4, 1fr);
          }
        }

        .meta-item {
          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 6px;

          padding:
            12px
            11px;

          background:
            #f8fbfe;
        }

        .meta-item-label {
          display: flex;

          align-items: center;

          gap: 5px;

          color: #7a8da3;

          font-size: 9px;

          font-weight: 700;

          text-transform: uppercase;
        }

        .meta-item-label svg {
          width: 12px;
          height: 12px;

          color:
            var(--accent,#08a8d5);

          flex-shrink: 0;
        }

        .meta-item-value {
          color: #09285f;

          font-size: 12px;

          font-weight: 800;

          line-height: 1.35;

          overflow-wrap: anywhere;
        }

        .detail-intro {
          margin:
            0
            0
            18px;

          color: #45597a;

          font-size: 13px;

          line-height: 1.75;
        }

        /* =====================================================
           ACCORDION
        ===================================================== */

        .accordion {
          width: 100%;

          min-width: 0;

          margin-top: 20px;
        }

        .accordion-item {
          width: 100%;

          min-width: 0;

          margin-bottom: 8px;

          padding:
            0
            9px;

          border:
            1px solid #e5eef5;

          border-radius: 15px;

          background:
            rgba(255,255,255,.76);
        }

        .accordion-trigger {
          width: 100%;

          min-width: 0;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 8px;

          padding:
            11px
            3px;

          border: 0;

          background: transparent;

          cursor: pointer;

          font-family: inherit;

          text-align: left;
        }

        .accordion-trigger-left {
          min-width: 0;

          display: flex;

          align-items: center;

          gap: 8px;

          color: #09285f;

          font-size: 12px;

          font-weight: 800;
        }

        .accordion-icon {
          width: 30px;
          height: 30px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          background: #f0f8fd;

          color:
            var(--accent,#08a8d5);
        }

        .accordion-count {
          flex-shrink: 0;

          padding:
            2px
            7px;

          border-radius: 999px;

          color: #9bb0c6;

          background: #f0f4f9;

          font-size: 9px;
        }

        .accordion-chevron {
          flex-shrink: 0;

          color: #9bb0c6;

          transition:
            transform .25s ease;
        }

        .accordion-chevron.rotated {
          transform:
            rotate(180deg);

          color:
            var(--accent,#08a8d5);
        }

        .accordion-list {
          list-style: none;

          margin: 0;

          padding:
            2px
            4px
            15px
            40px;

          display: flex;

          flex-direction: column;

          gap: 8px;
        }

        .accordion-list li {
          display: flex;

          align-items: flex-start;

          gap: 7px;

          color: #47607e;

          font-size: 11.5px;

          line-height: 1.55;
        }

        .accordion-list li svg {
          flex-shrink: 0;

          margin-top: 2px;

          color: #08a8d5;
        }

        /* =====================================================
           COLLEGES
        ===================================================== */

        .colleges-section {
          width: 100%;
          min-width: 0;
          max-width: 100%;

          margin-top: 28px;

          padding-top: 24px;

          border-top:
            1px solid #e7eff6;
        }

        .colleges-section-header {
          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 12px;

          margin-bottom: 14px;
        }

        .colleges-eyebrow {
          display: flex;

          align-items: center;

          gap: 6px;

          margin-bottom: 5px;

          color: #079ac7;

          font-size: 8.5px;

          font-weight: 800;

          letter-spacing: .08em;
        }

        .colleges-section-header h3 {
          margin:
            0
            0
            4px;

          color: #09285f;

          font-size: 22px;

          font-weight: 800;
        }

        .colleges-section-header p {
          margin: 0;

          color: #71859d;

          font-size: 10.5px;

          line-height: 1.5;
        }

        .view-all-colleges {
          flex-shrink: 0;

          display: inline-flex;

          align-items: center;

          gap: 6px;

          padding:
            8px
            10px;

          border:
            1px solid rgba(8,168,213,.25);

          border-radius: 10px;

          background: #f5fbfe;

          color: #087fb8;

          font-size: 9.5px;

          font-weight: 800;

          cursor: pointer;

          font-family: inherit;
        }

        .college-cards-scroll {
          display: flex;

          gap: 11px;

          width: 100%;
          max-width: 100%;

          overflow-x: auto;

          overflow-y: hidden;

          padding:
            4px
            4px
            14px;

          scrollbar-width: thin;

          scrollbar-color:
            #0aa8d5
            #e5f1f7;

          -webkit-overflow-scrolling: touch;

          touch-action: pan-x;
        }

        .college-cards-scroll::-webkit-scrollbar {
          height: 8px;
        }

        .college-cards-scroll::-webkit-scrollbar-track {
          background: #e5f1f7;

          border-radius: 999px;
        }

        .college-cards-scroll::-webkit-scrollbar-thumb {
          background:
            linear-gradient(
              90deg,
              #08a8d5,
              #075b91
            );

          border-radius: 999px;
        }

        .college-card {
          flex:
            0 0 205px;

          min-width: 0;

          overflow: hidden;

          border:
            1px solid #e0ebf3;

          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 12px 30px -24px
            rgba(7,59,130,.45);
        }

        .college-card.selected {
          border-color:
            rgba(8,168,213,.55);

          box-shadow:
            0 18px 38px -24px
            rgba(7,59,130,.5);
        }

        .college-image-wrap {
          position: relative;

          height: 120px;

          overflow: hidden;

          background:
            #e9f5fb;
        }

        .college-image-wrap img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .college-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(3,37,78,.48)
            );
        }

        .college-type-pill {
          position: absolute;

          left: 8px;
          bottom: 8px;

          padding:
            4px
            7px;

          border-radius: 999px;

          background:
            rgba(3,37,78,.72);

          color: #ffffff;

          font-size: 7.5px;

          font-weight: 800;
        }

        .college-card-content {
          padding:
            11px
            11px
            12px;
        }

        .college-card-content h4 {
          min-height: 34px;

          margin:
            0
            0
            6px;

          color: #09285f;

          font-size: 11.5px;

          line-height: 1.35;

          font-weight: 800;
        }

        .college-location {
          display: flex;

          align-items: flex-start;

          gap: 5px;

          margin-bottom: 8px;

          color: #7a8da3;

          font-size: 8.5px;

          line-height: 1.4;
        }

        .college-location svg {
          flex-shrink: 0;

          color: #08a8d5;
        }

        .college-badges {
          min-height: 21px;

          margin-bottom: 8px;
        }

        .college-badge {
          display: inline-flex;

          align-items: center;

          gap: 4px;

          padding:
            4px
            7px;

          border-radius: 999px;

          font-size: 7.5px;

          font-weight: 800;
        }

        .college-badge.green {
          color: #087b55;

          background: #eaf9f2;

          border:
            1px solid #d2f1e2;
        }

        .college-details-btn {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 7px;

          padding:
            8px
            0
            0;

          border: 0;

          border-top:
            1px solid #edf2f6;

          background: transparent;

          color: #0788bf;

          cursor: pointer;

          font-family: inherit;

          font-size: 9px;

          font-weight: 800;

          text-align: left;
        }

        /* =====================================================
           SELECTED COLLEGE
        ===================================================== */

        .selected-college-panel {
          width: 100%;

          min-width: 0;

          overflow: hidden;

          margin-top: 13px;
        }

        .selected-college-inner {
          width: 100%;
          min-width: 0;

          padding:
            16px;

          border:
            1px solid rgba(8,168,213,.22);

          border-radius: 18px;

          background:
            linear-gradient(
              135deg,
              #ffffff,
              #f5fbfe
            );

          box-shadow:
            0 18px 40px -28px
            rgba(7,59,130,.42);
        }

        .selected-college-top {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 10px;

          padding-bottom: 13px;

          margin-bottom: 14px;

          border-bottom:
            1px dashed #dce9f2;
        }

        .selected-college-eyebrow {
          display: flex;

          align-items: center;

          gap: 5px;

          margin-bottom: 4px;

          color: #079ac7;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: .08em;
        }

        .selected-college-top h4 {
          margin:
            0
            0
            4px;

          color: #09285f;

          font-size: 18px;

          line-height: 1.25;

          font-weight: 800;
        }

        .selected-college-location {
          display: flex;

          align-items: center;

          gap: 5px;

          color: #70869e;

          font-size: 9.5px;
        }

        .selected-college-location svg {
          color: #08a8d5;
        }

        .close-college-details {
          width: 30px;
          height: 30px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid #dce9f2;

          border-radius: 9px;

          background: #ffffff;

          color: #6d8299;

          cursor: pointer;
        }

        .selected-college-grid {
          display: grid;

          grid-template-columns:
            1fr;

          gap: 14px;

          min-width: 0;
        }

        @media (min-width: 560px) {
          .selected-college-grid {
            grid-template-columns:
              minmax(160px, .7fr)
              minmax(0, 1.3fr);
          }
        }

        .selected-college-image {
          width: 100%;

          height: 180px;

          overflow: hidden;

          border-radius: 14px;

          background: #e9f5fb;

          border:
            1px solid #dceaf3;
        }

        .selected-college-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .selected-college-info {
          min-width: 0;
        }

        .selected-college-status-row {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          margin-bottom: 9px;
        }

        .status-chip {
          display: inline-flex;

          align-items: center;

          gap: 4px;

          padding:
            5px
            7px;

          border-radius: 999px;

          color: #087b55;

          background: #eaf9f2;

          border:
            1px solid #d2f1e2;

          font-size: 7.5px;

          font-weight: 800;
        }

        .selected-college-description {
          margin:
            0
            0
            12px;

          color: #536a83;

          font-size: 10.5px;

          line-height: 1.65;
        }

        .college-stat-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 6px;
        }

        @media (min-width: 500px) {
          .college-stat-grid {
            grid-template-columns:
              repeat(3, 1fr);
          }
        }

        .college-stat {
          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 3px;

          padding:
            9px;

          border:
            1px solid #e4eef5;

          border-radius: 10px;

          background: #ffffff;
        }

        .college-stat svg {
          color: #08a8d5;

          width: 14px;
          height: 14px;
        }

        .college-stat span {
          color: #8a9caf;

          font-size: 7px;

          font-weight: 700;

          text-transform: uppercase;
        }

        .college-stat strong {
          color: #09285f;

          font-size: 9px;

          line-height: 1.35;

          overflow-wrap: anywhere;
        }

        .college-highlights {
          margin-top: 15px;

          padding-top: 15px;

          border-top:
            1px solid #e4eef5;
        }

        .college-highlights-heading {
          display: flex;

          align-items: center;

          gap: 6px;

          margin-bottom: 9px;

          color: #09285f;

          font-size: 10.5px;

          font-weight: 800;
        }

        .college-highlights-heading svg {
          color: #08a8d5;
        }

        .college-highlight-grid {
          display: grid;

          grid-template-columns:
            1fr;

          gap: 6px;
        }

        @media (min-width: 500px) {
          .college-highlight-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        .college-highlight {
          display: flex;

          align-items: flex-start;

          gap: 6px;

          color: #526b84;

          font-size: 9.5px;

          line-height: 1.45;
        }

        .college-highlight svg {
          flex-shrink: 0;

          margin-top: 1px;

          color: #08a8d5;
        }

        .selected-college-actions {
          display: flex;

          flex-direction: column;

          gap: 7px;

          margin-top: 15px;
        }

        @media (min-width: 480px) {
          .selected-college-actions {
            flex-direction: row;
          }
        }

        .college-action-primary,
        .college-action-secondary {
          min-height: 40px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          padding:
            9px
            13px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 9.5px;

          font-weight: 800;
        }

        .college-action-primary {
          flex: 1;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #073b82,
              #08a8d5
            );
        }

        .college-action-secondary {
          color: #087fb8;

          background: #ffffff;

          border:
            1px solid #d7e8f2;
        }

        /* =====================================================
           FEE TABLE

           IMPORTANT:
           No fixed/min-content width.
           Everything is allowed to shrink.
        ===================================================== */

        .fee-table-panel {
          width: 100%;
          max-width: 100%;
          min-width: 0;

          overflow: hidden;

          border:
            1px solid #d6e7f2;

          border-radius: 20px;

          background:
            rgba(255,255,255,.98);

          box-shadow:
            0 20px 40px -24px
            rgba(7,59,130,.30);

          margin-bottom: 14px;
        }

        .fee-table-top {
          width: 100%;
          min-width: 0;

          display: flex;

          align-items: center;

          gap: 8px;

          padding:
            15px;

          background:
            linear-gradient(
              135deg,
              #073b82,
              #087fb8,
              #08a8d5
            );
        }

        .fee-table-top-icon {
          width: 31px;
          height: 31px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          color: #ffffff;

          background:
            rgba(255,255,255,.18);
        }

        .fee-table-top-text {
          flex: 1;

          min-width: 0;
        }

        .fee-table-subtitle {
          margin: 0;

          color: #ffffff;

          font-size: 12.5px;

          font-weight: 800;

          line-height: 1.3;
        }

        .fee-table-sub2 {
          margin:
            2px
            0
            0;

          color:
            rgba(255,255,255,.78);

          font-size: 9.5px;

          line-height: 1.35;
        }

        .fee-table-badge {
          flex-shrink: 0;

          padding:
            4px
            6px;

          border-radius: 6px;

          color: #ffffff;

          background:
            rgba(255,255,255,.18);

          font-size: 7px;

          font-weight: 800;

          white-space: normal;

          text-align: center;

          max-width: 72px;
        }

        .fee-rows {
          width: 100%;
          min-width: 0;

          padding:
            5px
            10px;
        }

        .fee-row {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(110px, auto);

          align-items: center;

          gap: 8px;

          min-height: 65px;

          padding:
            12px
            5px;

          border-bottom:
            1px solid #f0f5fa;
        }

        .fee-row:last-child {
          border-bottom: 0;
        }

        .fee-row-left {
          min-width: 0;

          display: flex;

          align-items: center;

          gap: 7px;
        }

        .ft-expense-icon {
          width: 29px;
          height: 29px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          color: #08a8d5;

          background: #f0f8fd;
        }

        .fee-row-label {
          min-width: 0;

          color: #09285f;

          font-size: 10px;

          font-weight: 700;

          line-height: 1.35;
        }

        .fee-row-right {
          min-width: 0;

          display: flex;

          flex-direction: column;

          align-items: flex-end;

          gap: 2px;

          text-align: right;
        }

        .ft-usd-cell {
          color: #09285f;

          font-size: 10.5px;

          font-weight: 800;

          line-height: 1.3;

          overflow-wrap: anywhere;
        }

        .ft-usd-cell em {
          margin-left: 2px;

          color: #9bb0c6;

          font-size: 8px;

          font-style: normal;
        }

        .ft-inr-cell {
          color: #8a9bb2;

          font-size: 8.5px;

          font-weight: 600;

          line-height: 1.3;

          overflow-wrap: anywhere;
        }

        .fee-table-note {
          display: flex;

          align-items: flex-start;

          gap: 6px;

          padding:
            9px
            14px
            12px;

          border-top:
            1px solid #f0f5fa;

          color: #8a9bb2;

          font-size: 8.5px;

          line-height: 1.4;
        }

        .fee-table-note svg {
          flex-shrink: 0;

          margin-top: 1px;
        }

        /* =====================================================
           SIDE CTA
        ===================================================== */

        .side-cta-box {
          width: 100%;
          max-width: 100%;

          margin-top: 14px;

          padding:
            17px;

          border-radius: 18px;

          color: #ffffff;

          background:
            linear-gradient(
              150deg,
              #073b82,
              #08a8d5
            );

          box-shadow:
            0 20px 40px -24px
            rgba(7,59,130,.5);
        }

        .side-cta-box p {
          margin:
            0
            0
            12px;

          color:
            rgba(255,255,255,.9);

          font-size: 10.5px;

          line-height: 1.55;
        }

        .side-cta-buttons {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }

        .side-cta-btn {
          min-height: 39px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 6px;

          padding:
            9px
            12px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 10px;

          font-weight: 800;
        }

        .side-cta-btn.primary {
          color: #073b82;

          background: #ffffff;
        }

        .side-cta-btn.secondary {
          color: #ffffff;

          background:
            rgba(255,255,255,.12);

          border:
            1px solid
            rgba(255,255,255,.28);
        }

        /* =====================================================
           BOTTOM CTA
        ===================================================== */

        .programs-cta {
          width: 100%;

          margin-top: 38px;

          padding:
            34px
            18px;

          border-radius: 24px;

          text-align: center;

          background:
            radial-gradient(
              circle at 85% 10%,
              rgba(8,168,213,.42),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #073b82,
              #075b91 55%,
              #08a8d5
            );

          box-shadow:
            0 30px 70px -38px
            rgba(7,59,130,.55);
        }

        .programs-cta-icon {
          width: 44px;
          height: 44px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin:
            0
            auto
            14px;

          border-radius: 13px;

          color: #7fe0ff;

          background:
            rgba(255,255,255,.12);
        }

        .programs-cta h2 {
          margin:
            0
            0
            12px;

          color: #ffffff;

          font-size:
            clamp(22px, 5vw, 36px);

          line-height: 1.2;

          font-weight: 800;
        }

        .programs-cta p {
          max-width: 700px;

          margin:
            0
            auto
            22px;

          color: #e2f0fb;

          font-size: 12px;

          line-height: 1.7;
        }

        .programs-cta-buttons {
          display: flex;

          align-items: center;
          justify-content: center;

          flex-wrap: wrap;

          gap: 9px;
        }

        .cta-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 7px;

          min-height: 42px;

          padding:
            10px
            17px;

          border-radius: 11px;

          text-decoration: none;

          font-size: 11px;

          font-weight: 800;
        }

        .cta-btn-primary {
          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #0795cc,
              #24c1df
            );
        }

        .cta-btn-secondary {
          color: #ffffff;

          background:
            rgba(255,255,255,.08);

          border:
            1px solid
            rgba(255,255,255,.3);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 768px) {

          .programs-page {
            padding:
              30px
              22px
              70px;
          }

          .hero-trust-strip {
            grid-template-columns:
              repeat(4, 1fr);
          }

          .college-card {
            flex-basis: 210px;
          }

          .selected-college-image {
            height: 200px;
          }
        }

        /* =====================================================
           MOBILE FIRST
        ===================================================== */

        @media (max-width: 767px) {

          .programs-page {
            padding:
              0
              12px
              42px;
          }

          .programs-hero {
            margin-left: -12px;
            margin-right: -12px;

            width:
              calc(100% + 24px);

            border-radius: 0;

            border-left: 0;
            border-right: 0;

            padding:
              42px
              18px
              27px;
          }

          .programs-hero h1 {
            font-size:
              clamp(31px, 10vw, 44px);
          }

          .dest-cards-scroll {
            margin-left: -4px;
            margin-right: -4px;
          }

          .detail-panel {
            border-radius: 21px;
          }

          .detail-main {
            padding:
              21px
              14px
              24px;
          }

          .detail-side {
            padding:
              18px
              14px
              22px;
          }

          .detail-meta-strip {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .colleges-section-header {
            align-items: flex-start;
          }

          .view-all-colleges {
            display: none;
          }

          .college-card {
            flex-basis: 205px;
          }

          .selected-college-inner {
            padding:
              14px;
          }

          .programs-cta {
            border-radius: 21px;
          }

          .cta-btn {
            width: 100%;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .detail-main {
            padding-left: 12px;
            padding-right: 12px;
          }

          .detail-side {
            padding-left: 12px;
            padding-right: 12px;
          }

          .detail-header {
            gap: 10px;
          }

          .detail-flag-big {
            width: 55px;
            height: 42px;
          }

          .detail-panel h2 {
            font-size: 23px;
          }

          .fee-row {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(96px, auto);
          }

          .fee-row-label {
            font-size: 9px;
          }

          .ft-usd-cell {
            font-size: 9px;
          }

          .ft-inr-cell {
            font-size: 8px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }

        }

      `}),(0,j.jsx)(`main`,{className:`programs-page`,children:(0,j.jsxs)(`div`,{className:`programs-container`,children:[(0,j.jsxs)($.div,{className:`programs-hero`,initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,j.jsxs)(`div`,{className:`programs-hero-eyebrow`,children:[(0,j.jsx)(Lr,{}),`GLOBAL MEDICAL EDUCATION`]}),(0,j.jsxs)(`h1`,{children:[`Explore MBBS Opportunities`,` `,(0,j.jsx)(`span`,{children:`Worldwide`})]}),(0,j.jsx)(`p`,{children:`Choose the right medical education destination with transparent, personalized counselling and end-to-end admission guidance from Kantule Edutech.`}),(0,j.jsxs)(`div`,{className:`hero-trust-strip`,children:[(0,j.jsxs)(`div`,{className:`hero-trust-item`,children:[(0,j.jsx)(`span`,{className:`hero-trust-icon`,children:(0,j.jsx)(mr,{})}),(0,j.jsx)(`span`,{children:`9 Global Destinations`})]}),(0,j.jsxs)(`div`,{className:`hero-trust-item`,children:[(0,j.jsx)(`span`,{className:`hero-trust-icon`,children:(0,j.jsx)(yr,{})}),(0,j.jsx)(`span`,{children:`NEET-Based Guidance`})]}),(0,j.jsxs)(`div`,{className:`hero-trust-item`,children:[(0,j.jsx)(`span`,{className:`hero-trust-icon`,children:(0,j.jsx)(Fr,{})}),(0,j.jsx)(`span`,{children:`NMC & WHO Recognized`})]}),(0,j.jsxs)(`div`,{className:`hero-trust-item`,children:[(0,j.jsx)(`span`,{className:`hero-trust-icon`,children:(0,j.jsx)(A,{})}),(0,j.jsx)(`span`,{children:`100% Free Counselling`})]})]})]}),(0,j.jsxs)(`div`,{className:`destinations-bar`,children:[(0,j.jsxs)(`div`,{className:`destinations-bar-label`,children:[(0,j.jsx)(mr,{size:16}),(0,j.jsx)(`span`,{children:`Explore Programs by Country`})]}),(0,j.jsx)(`div`,{className:`destinations-bar-hint`,children:`Tap a destination to view fees, eligibility & course details`})]}),(0,j.jsx)($.div,{className:`dest-cards-scroll`,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4},children:t.map(e=>(0,j.jsxs)(`button`,{type:`button`,className:`dest-card ${a===e.id?`active`:``}`,style:{"--accent":e.accentColor},onClick:()=>{o(e.id),i({country:e.id})},children:[(0,j.jsxs)(`div`,{className:`dest-card-top`,children:[(0,j.jsx)(`span`,{className:`dest-card-flag`,children:(0,j.jsx)(`img`,{src:`https://flagcdn.com/w80/${e.flagCode}.png`,alt:``,loading:`lazy`})}),(0,j.jsx)(`span`,{className:`dest-card-check`,children:(0,j.jsx)(lr,{size:11})})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`dest-card-title`,children:e.title.replace(`MBBS in `,``)}),(0,j.jsx)(`span`,{className:`dest-card-badge`,children:e.badge})]})]},e.id))}),(0,j.jsx)(Sf,{mode:`wait`,children:(0,j.jsx)($.div,{className:`detail-panel`,style:{borderTop:`3px solid ${s.accentColor}`,"--accent":s.accentColor},initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.32},children:(0,j.jsxs)(`div`,{className:`detail-grid`,children:[(0,j.jsxs)(`div`,{className:`detail-main`,children:[(0,j.jsxs)(`div`,{className:`detail-header`,children:[(0,j.jsx)(`div`,{className:`detail-flag-big`,children:(0,j.jsx)(`img`,{src:`https://flagcdn.com/w160/${s.flagCode}.png`,alt:``})}),(0,j.jsxs)(`div`,{className:`detail-title-wrap`,children:[(0,j.jsxs)(`div`,{className:`detail-badges`,children:[(0,j.jsx)(`span`,{className:`detail-badge`,style:{color:s.accentColor,backgroundColor:`${s.accentColor}10`,border:`1px solid ${s.accentColor}35`},children:s.badge}),(0,j.jsx)(`span`,{className:`detail-code-pill`,children:s.code})]}),(0,j.jsx)(`h2`,{children:s.title}),(0,j.jsx)(`p`,{className:`tagline`,children:s.tagline})]})]}),(0,j.jsxs)(`div`,{className:`detail-meta-strip`,children:[(0,j.jsxs)(`div`,{className:`meta-item`,children:[(0,j.jsxs)(`span`,{className:`meta-item-label`,children:[(0,j.jsx)(fr,{}),`Duration`]}),(0,j.jsx)(`span`,{className:`meta-item-value`,children:s.meta.duration})]}),(0,j.jsxs)(`div`,{className:`meta-item`,children:[(0,j.jsxs)(`span`,{className:`meta-item-label`,children:[(0,j.jsx)(lr,{}),`Recognition`]}),(0,j.jsx)(`span`,{className:`meta-item-value`,children:s.meta.recognition})]}),(0,j.jsxs)(`div`,{className:`meta-item`,children:[(0,j.jsxs)(`span`,{className:`meta-item-label`,children:[(0,j.jsx)(mr,{}),`Medium`]}),(0,j.jsx)(`span`,{className:`meta-item-value`,children:s.meta.medium})]}),(0,j.jsxs)(`div`,{className:`meta-item`,children:[(0,j.jsxs)(`span`,{className:`meta-item-label`,children:[(0,j.jsx)(yr,{}),`Admission`]}),(0,j.jsx)(`span`,{className:`meta-item-value`,children:s.meta.admission})]})]}),(0,j.jsx)(`p`,{className:`detail-intro`,children:s.content.intro}),(0,j.jsx)(`div`,{className:`accordion`,children:f.map(e=>{let t=d[e],n=p===e,r=s.content[e];return(0,j.jsxs)(`div`,{className:`accordion-item ${n?`is-open`:``}`,children:[(0,j.jsxs)(`button`,{type:`button`,className:`accordion-trigger`,onClick:()=>m(n?null:e),children:[(0,j.jsxs)(`span`,{className:`accordion-trigger-left`,children:[(0,j.jsx)(`span`,{className:`accordion-icon`,children:(0,j.jsx)(t,{size:15})}),(0,j.jsx)(`span`,{children:u[e]}),(0,j.jsx)(`span`,{className:`accordion-count`,children:r.length})]}),(0,j.jsx)(or,{size:17,className:`accordion-chevron ${n?`rotated`:``}`})]}),(0,j.jsx)(Sf,{initial:!1,children:n&&(0,j.jsx)($.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},children:(0,j.jsx)(`ul`,{className:`accordion-list`,children:r.map((e,t)=>(0,j.jsxs)(`li`,{children:[(0,j.jsx)(lr,{size:13}),(0,j.jsx)(`span`,{children:e})]},t))})})})]},e)})}),(0,j.jsx)(_,{})]}),(0,j.jsx)(`aside`,{className:`detail-side`,children:(0,j.jsxs)(`div`,{className:`detail-side-inner`,children:[(0,j.jsx)(g,{fees:c}),(0,j.jsxs)(`div`,{className:`side-cta-box`,children:[(0,j.jsx)(`p`,{children:`Free 1-on-1 guidance on eligibility, fees & the right university fit — from our certified admission directors.`}),(0,j.jsxs)(`div`,{className:`side-cta-buttons`,children:[(0,j.jsxs)(jn,{to:`/contact`,className:`side-cta-btn primary`,children:[(0,j.jsx)(A,{size:14}),`Book Free Counselling`]}),(0,j.jsx)(`a`,{href:`https://wa.me/918830451660?text=I%20want%20to%20know%20more%20about%20MBBS%20programs`,target:`_blank`,rel:`noopener noreferrer`,className:`side-cta-btn secondary`,children:`💬 WhatsApp Us`})]})]})]})})]})},s.id)}),(0,j.jsxs)($.section,{className:`programs-cta`,initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},children:[(0,j.jsx)(`div`,{className:`programs-cta-icon`,children:(0,j.jsx)(A,{size:21})}),(0,j.jsx)(`h2`,{children:`Need Help Choosing the Right Destination?`}),(0,j.jsx)(`p`,{children:`Get personalized guidance based on your NEET score, academic profile, budget and career aspirations from our medical education directors.`}),(0,j.jsxs)(`div`,{className:`programs-cta-buttons`,children:[(0,j.jsxs)(jn,{to:`/contact`,className:`cta-btn cta-btn-primary`,children:[(0,j.jsx)(A,{size:16}),`Book Free Counselling`,(0,j.jsx)($n,{size:15})]}),(0,j.jsxs)(`a`,{href:`https://wa.me/918830451660?text=I%20want%20to%20know%20more%20about%20MBBS%20programs`,target:`_blank`,rel:`noopener noreferrer`,className:`cta-btn cta-btn-secondary`,children:[`💬 WhatsApp Us`,(0,j.jsx)($n,{size:15})]})]})]})]})})]})}var uh=`918830451660`,dh=[{number:`01`,title:`Counselling`,text:`Student's academic profile, NEET score, budget and career goals are discussed thoroughly with certified counsellors.`,icon:zr},{number:`02`,title:`Course & University Selection`,text:`Suitable colleges, universities and destination countries are shortlisted based on merit and individual preferences.`,icon:yr},{number:`03`,title:`Application & Documentation`,text:`Required application forms, transcripts and verification documents are prepared and submitted directly.`,icon:vr},{number:`04`,title:`Admission Confirmation`,text:`Official admission letter is received and seat allocation is confirmed according to university regulations.`,icon:_r},{number:`05`,title:`Visa Processing & Stamping`,text:`Students receive complete guidance and support regarding student visa paperwork and embassy appointments.`,icon:dr},{number:`06`,title:`Pre-Departure Briefing`,text:`Students and parents receive essential travel, accommodation, currency exchange and cultural onboarding guidance.`,icon:Nr},{number:`07`,title:`Post-Admission & On-Campus Support`,text:`Continuous guidance, airport pickup, hostel settlement and Indian mess assistance throughout the course.`,icon:br}],fh=[`10th Marksheet & Passing Certificate`,`12th Marksheet & Passing Certificate`,`NEET Score Card`,`Valid International Passport`,`Passport-size Photographs (White Background)`,`Other documents as required by university/country`],ph=[{title:`Phone Support`,subtitle:`+91 8830451660 / 8237794917`,icon:Mr,action:`tel:+918830451660`,actionText:`Call Directly`},{title:`WhatsApp Chat`,subtitle:`Instant 1-on-1 Guidance`,icon:A,action:`https://wa.me/${uh}`,actionText:`Chat on WhatsApp`},{title:`Online Enquiry Form`,subtitle:`Fast Response within 2 Hours`,icon:vr,action:`#enquiry`,actionText:`Fill Form Below`},{title:`Direct Office Visit`,subtitle:`Ambad, Jalna, Maharashtra`,icon:Or,action:`/contact`,actionText:`View Office Location`}];function mh(){let[e,t]=(0,x.useState)({name:``,mobile:``,score:``,interestedIn:``}),[n,r]=(0,x.useState)(!1);(0,x.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`instant`})},[]);let i=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return(0,j.jsxs)(`main`,{className:`overflow-hidden bg-[#f8fbff] text-[#09285f]`,children:[(0,j.jsx)(`style`,{children:`
        * {
          box-sizing: border-box;
        }

        .ke-hero-section {
          position: relative;
          background: linear-gradient(135deg, #061938 0%, #09285f 55%, #073b82 100%);
          color: #ffffff;
          overflow: hidden;
        }

        .ke-hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 12% 18%, rgba(8, 168, 213, 0.16), transparent 35%),
            radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.12), transparent 38%),
            radial-gradient(circle at 80% 85%, rgba(7, 59, 130, 0.25), transparent 40%),
            radial-gradient(circle at 15% 85%, rgba(8, 168, 213, 0.1), transparent 35%);
          pointer-events: none;
        }

        /* Subtle dot matrix with cyan tint */
        .ke-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(8, 168, 213, 0.14) 1.2px, transparent 1.2px);
          background-size: 24px 24px;
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 80%);
          pointer-events: none;
        }

        .ke-card-sheen {
          position: relative;
          overflow: hidden;
        }

        .ke-card-sheen::after {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 45%;
          height: 100%;
          background: linear-gradient(115deg, transparent, rgba(255, 255, 255, 0.14), transparent);
          transform: skewX(-18deg);
          animation: ke-sheen 6s ease-in-out infinite;
        }

        @keyframes ke-sheen {
          0% { left: -60%; }
          45%, 100% { left: 130%; }
        }

        .ke-corner-fold {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 20px 20px 0;
          border-color: transparent rgba(8, 168, 213, 0.2) transparent transparent;
          transition: border-color 0.3s ease;
        }

        .group:hover .ke-corner-fold {
          border-color: transparent #08a8d5 transparent transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .ke-card-sheen::after {
            animation: none !important;
          }
        }
      `}),(0,j.jsxs)(`section`,{className:`ke-hero-section`,children:[(0,j.jsx)(`div`,{className:`ke-dot-grid`}),(0,j.jsx)(`div`,{className:`relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20`,children:(0,j.jsxs)(`div`,{className:`grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14`,children:[(0,j.jsxs)($.div,{initial:{opacity:0,y:22},animate:{opacity:1,y:0},transition:{duration:.55},children:[(0,j.jsxs)(`div`,{className:`mb-5 inline-flex items-center gap-2 rounded-full border border-[#08a8d5]/40 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#38bdf8] shadow-[0_4px_14px_-4px_rgba(8,168,213,0.35)] backdrop-blur-md`,children:[(0,j.jsx)(Lr,{size:13,className:`text-[#08a8d5]`}),`Admissions & Services`]}),(0,j.jsxs)(`h1`,{className:`max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]`,children:[`Your Admission`,(0,j.jsx)(`span`,{className:`mt-1 block bg-gradient-to-r from-[#38bdf8] via-[#08a8d5] to-[#00c2ff] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(8,168,213,0.35)]`,children:`Journey, Simplified.`})]}),(0,j.jsx)(`p`,{className:`mt-5 max-w-lg text-sm leading-relaxed text-blue-100/85 sm:text-base`,children:`Get complete, transparent guidance through profile assessment, university shortlisting, documentation, visa processing, and continuous post-admission on-campus support.`}),(0,j.jsxs)(`div`,{className:`mt-8 flex flex-wrap items-center gap-4`,children:[(0,j.jsxs)(`a`,{href:`#enquiry`,className:`inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#079ac7] via-[#08a8d5] to-[#00c2ff] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_-6px_rgba(8,168,213,0.5)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-4px_rgba(8,168,213,0.65)] hover:brightness-105`,children:[`Get Free Counselling`,(0,j.jsx)($n,{size:17})]}),(0,j.jsxs)(`a`,{href:`https://wa.me/${uh}`,target:`_blank`,rel:`noreferrer`,className:`inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-white/40 hover:bg-white/10`,children:[(0,j.jsx)(A,{size:17,className:`text-[#38bdf8]`}),`Chat on WhatsApp`]})]}),(0,j.jsxs)(`div`,{className:`mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,j.jsx)(`div`,{className:`flex h-8 w-8 items-center justify-center rounded-lg bg-[#08a8d5]/15 text-[#38bdf8]`,children:(0,j.jsx)(Fr,{size:16})}),(0,j.jsx)(`span`,{className:`text-xs font-semibold text-blue-100/90`,children:`100% Free Guidance`})]}),(0,j.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,j.jsx)(`div`,{className:`flex h-8 w-8 items-center justify-center rounded-lg bg-[#08a8d5]/15 text-[#38bdf8]`,children:(0,j.jsx)(yr,{size:16})}),(0,j.jsx)(`span`,{className:`text-xs font-semibold text-blue-100/90`,children:`NMC & WHO Verified`})]}),(0,j.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,j.jsx)(`div`,{className:`flex h-8 w-8 items-center justify-center rounded-lg bg-[#08a8d5]/15 text-[#38bdf8]`,children:(0,j.jsx)(Nr,{size:16})}),(0,j.jsx)(`span`,{className:`text-xs font-semibold text-blue-100/90`,children:`Visa & Travel Assist`})]})]})]}),(0,j.jsxs)($.div,{initial:{opacity:0,scale:.95,y:14},animate:{opacity:1,scale:1,y:0},transition:{duration:.65,delay:.15},className:`relative mx-auto w-full max-w-[440px]`,children:[(0,j.jsxs)(`div`,{className:`ke-card-sheen relative rounded-[26px] border border-[#08a8d5]/35 bg-gradient-to-br from-[#072654]/95 via-[#08336d]/90 to-[#073b82]/95 p-6 shadow-[0_24px_60px_-10px_rgba(3,18,44,0.6)] backdrop-blur-xl sm:p-7`,children:[(0,j.jsxs)(`div`,{className:`relative flex items-center justify-between border-b border-white/10 pb-4`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#38bdf8]`,children:`ADMISSION SUPPORT`}),(0,j.jsx)(`h2`,{className:`mt-1 text-xl font-extrabold text-white`,children:`7 Simple Steps`})]}),(0,j.jsx)(`div`,{className:`flex h-11 w-11 items-center justify-center rounded-xl border border-[#08a8d5]/30 bg-[#08a8d5]/15 text-[#38bdf8] shadow-[0_4px_14px_rgba(8,168,213,0.25)]`,children:(0,j.jsx)(yr,{size:22})})]}),(0,j.jsxs)(`div`,{className:`relative mt-5 space-y-2.5`,children:[(0,j.jsx)(`div`,{className:`absolute bottom-5 left-[19px] top-4 w-0.5 bg-gradient-to-b from-[#08a8d5]/50 via-[#38bdf8]/30 to-transparent`,"aria-hidden":`true`}),dh.slice(0,4).map(e=>(0,j.jsxs)(`div`,{className:`group relative flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] px-3.5 py-2.5 transition duration-200 hover:border-[#08a8d5]/35 hover:bg-white/[0.08]`,children:[(0,j.jsx)(`span`,{className:`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#08a8d5]/40 bg-[#08a8d5]/20 text-[11px] font-extrabold text-[#38bdf8] shadow-[0_2px_8px_rgba(8,168,213,0.3)]`,children:e.number}),(0,j.jsx)(`span`,{className:`text-xs font-semibold text-blue-50`,children:e.title}),(0,j.jsx)(ar,{size:14,className:`ml-auto shrink-0 text-[#38bdf8]`})]},e.number))]}),(0,j.jsxs)(`div`,{className:`relative mt-4 flex items-center gap-2 rounded-xl border border-[#08a8d5]/25 bg-[#08a8d5]/10 px-3.5 py-3 text-xs font-medium leading-5 text-blue-100`,children:[(0,j.jsx)(lr,{size:15,className:`shrink-0 text-[#38bdf8]`}),(0,j.jsx)(`span`,{children:`Complete guidance from counselling to post-admission settlement.`})]})]}),(0,j.jsx)(`div`,{className:`pointer-events-none absolute -bottom-4 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-full bg-[#08a8d5]/20 blur-2xl`})]})]})}),(0,j.jsx)(`div`,{className:`relative h-px w-full bg-gradient-to-r from-transparent via-[#08a8d5]/40 to-transparent`})]}),(0,j.jsx)(`section`,{className:`bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24`,children:(0,j.jsxs)(`div`,{className:`mx-auto max-w-7xl`,children:[(0,j.jsx)(hh,{eyebrow:`ADMISSION PROCESS`,title:`A Clear Path From Counselling to Admission`,description:`Our structured 7-step admission process is designed to provide complete clarity and transparency at every milestone.`}),(0,j.jsxs)(`div`,{className:`relative mt-14`,children:[(0,j.jsx)(`div`,{className:`absolute bottom-6 left-5 top-6 w-0.5 bg-gradient-to-b from-[#08a8d5] via-[#073b82] to-[#08a8d5] sm:left-6`}),(0,j.jsx)(`div`,{className:`space-y-6`,children:dh.map((e,t)=>{let n=e.icon;return(0,j.jsxs)($.div,{initial:{opacity:0,x:-18},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.25},transition:{duration:.45,delay:t*.05},className:`relative flex gap-4 pl-12 sm:pl-16`,children:[(0,j.jsx)(`span`,{className:`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#08a8d5] bg-white text-[12px] font-extrabold text-[#09285f] shadow-[0_4px_14px_rgba(8,168,213,0.25)] sm:h-12 sm:w-12 sm:text-[13px]`,children:e.number}),(0,j.jsx)(`div`,{className:`flex-1 rounded-2xl border border-[#e2ecf5] bg-white p-5 shadow-[0_8px_24px_-6px_rgba(9,40,95,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#08a8d5]/40 hover:shadow-[0_16px_36px_-6px_rgba(8,168,213,0.14)] sm:p-6`,children:(0,j.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,j.jsx)(`div`,{className:`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#08a8d5]/20 bg-[#f0f8fd] text-[#08a8d5]`,children:(0,j.jsx)(n,{size:21})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{className:`text-base font-extrabold text-[#09285f] sm:text-lg`,children:e.title}),(0,j.jsx)(`p`,{className:`mt-1.5 text-sm leading-relaxed text-[#556987]`,children:e.text})]})]})})]},e.number)})})]})]})}),(0,j.jsx)(`div`,{className:`relative h-px w-full bg-gradient-to-r from-transparent via-[#08a8d5]/20 to-transparent`}),(0,j.jsx)(`section`,{className:`bg-[#f8fbff] px-5 py-16 sm:px-8 lg:px-10 lg:py-24`,children:(0,j.jsxs)(`div`,{className:`mx-auto max-w-7xl`,children:[(0,j.jsx)(hh,{eyebrow:`REQUIRED DOCUMENTS`,title:`Documents You May Need`,description:`Keep the following original documents and photocopies ready for hassle-free MBBS application and visa processing:`}),(0,j.jsx)(`div`,{className:`mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3`,children:fh.map((e,t)=>(0,j.jsxs)($.div,{initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.4,delay:t*.04},className:`group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-[#e2ecf5] bg-white p-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#08a8d5]/45 hover:shadow-[0_12px_28px_-6px_rgba(8,168,213,0.15)]`,children:[(0,j.jsx)(`span`,{className:`ke-corner-fold`}),(0,j.jsx)(`div`,{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#08a8d5]/20 bg-[#f0f8fd] text-[#08a8d5] transition group-hover:bg-[#08a8d5] group-hover:text-white`,children:(0,j.jsx)(ar,{size:16})}),(0,j.jsx)(`span`,{className:`text-sm font-bold text-[#09285f]`,children:e})]},e))})]})}),(0,j.jsx)(`div`,{className:`relative h-px w-full bg-gradient-to-r from-transparent via-[#08a8d5]/20 to-transparent`}),(0,j.jsx)(`section`,{className:`bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24`,children:(0,j.jsxs)(`div`,{className:`mx-auto max-w-7xl`,children:[(0,j.jsx)(hh,{eyebrow:`ENQUIRY PROCESS`,title:`Connect With Kantule Edutech`,description:`Choose your preferred channel to consult directly with our senior medical admission counsellors:`}),(0,j.jsx)(`div`,{className:`mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4`,children:ph.map((e,t)=>{let n=e.icon;return(0,j.jsxs)($.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.4,delay:t*.06},className:`group flex flex-col justify-between rounded-2xl border border-[#e2ecf5] bg-white p-6 text-center shadow-[0_8px_24px_-6px_rgba(9,40,95,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#08a8d5]/45 hover:shadow-[0_16px_36px_-6px_rgba(8,168,213,0.16)]`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{className:`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#08a8d5]/20 bg-[#f0f8fd] text-[#08a8d5] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#079ac7] group-hover:to-[#08a8d5] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(8,168,213,0.35)]`,children:(0,j.jsx)(n,{size:24})}),(0,j.jsx)(`h3`,{className:`mt-4 text-base font-extrabold text-[#09285f]`,children:e.title}),(0,j.jsx)(`p`,{className:`mt-1 text-xs text-[#556987]`,children:e.subtitle})]}),(0,j.jsxs)(`a`,{href:e.action,className:`mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#079ac7] transition group-hover:text-[#08a8d5]`,children:[(0,j.jsx)(`span`,{children:e.actionText}),(0,j.jsx)($n,{size:13})]})]},e.title)})})]})}),(0,j.jsxs)(`section`,{id:`enquiry`,className:`relative overflow-hidden bg-gradient-to-br from-[#061938] via-[#09285f] to-[#073b82] px-5 py-16 sm:px-8 lg:px-10 lg:py-24`,children:[(0,j.jsx)(`div`,{className:`ke-dot-grid`}),(0,j.jsx)(`div`,{className:`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#08a8d5]/15 blur-3xl`}),(0,j.jsx)(`div`,{className:`pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#073b82]/30 blur-3xl`}),(0,j.jsxs)(`div`,{className:`relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center`,children:[(0,j.jsxs)($.div,{initial:{opacity:0,x:-22},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.5},children:[(0,j.jsxs)(`div`,{className:`inline-flex items-center gap-2 rounded-full border border-[#08a8d5]/40 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#38bdf8] backdrop-blur-md`,children:[(0,j.jsx)(A,{size:14,className:`text-[#08a8d5]`}),`Free Medical Counselling`]}),(0,j.jsxs)(`h2`,{className:`mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.65rem]`,children:[`Get Expert`,(0,j.jsx)(`span`,{className:`block bg-gradient-to-r from-[#38bdf8] to-[#00c2ff] bg-clip-text text-transparent`,children:`MBBS Counselling`})]}),(0,j.jsx)(`p`,{className:`mt-4 max-w-lg text-sm leading-relaxed text-blue-100/85 sm:text-base`,children:`Please fill in your details below and our senior medical admission director will connect with you shortly for a personalized roadmap.`}),(0,j.jsx)(`div`,{className:`mt-8 space-y-3.5`,children:[`Personalized NEET score analysis & college matching`,`Transparent tuition fee & hostel breakdown`,`Direct university admission & documentation support`,`Instant WhatsApp enquiry & status tracking`].map(e=>(0,j.jsxs)(`div`,{className:`flex items-center gap-3 text-sm font-medium text-white`,children:[(0,j.jsx)(`span`,{className:`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#08a8d5]/30 bg-[#08a8d5]/20 text-[#38bdf8]`,children:(0,j.jsx)(ar,{size:14})}),(0,j.jsx)(`span`,{children:e})]},e))})]}),(0,j.jsx)($.div,{initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.5,delay:.1},className:`rounded-[26px] border border-[#08a8d5]/30 bg-white/[0.07] p-6 shadow-[0_24px_60px_-10px_rgba(3,18,44,0.6)] backdrop-blur-xl sm:p-8`,children:(0,j.jsxs)(`form`,{onSubmit:t=>{if(t.preventDefault(),!e.name||!e.mobile||!e.score||!e.interestedIn)return;let n=`Hello Kantule Edutech,

I would like to get free MBBS counselling.

Student Name: ${e.name}
Mobile Number: ${e.mobile}
NEET Score: ${e.score}
Interested In: ${e.interestedIn}`,i=`https://wa.me/${uh}?text=${encodeURIComponent(n)}`;r(!0),window.open(i,`_blank`,`noopener,noreferrer`)},className:`space-y-4.5`,children:[(0,j.jsxs)(`div`,{className:`grid gap-4.5 sm:grid-cols-2`,children:[(0,j.jsx)(gh,{label:`Student Name *`,name:`name`,type:`text`,placeholder:`e.g. Rahul Sharma`,value:e.name,onChange:i}),(0,j.jsx)(gh,{label:`Mobile Number (WhatsApp) *`,name:`mobile`,type:`tel`,placeholder:`e.g. 9876543210`,value:e.mobile,onChange:i}),(0,j.jsx)(gh,{label:`NEET Score / Expected Score *`,name:`score`,type:`text`,placeholder:`e.g. 450 / Qualified`,value:e.score,onChange:i}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`label`,{className:`mb-2 block text-xs font-bold text-white/90`,children:`Interested Destination *`}),(0,j.jsxs)(`select`,{name:`interestedIn`,value:e.interestedIn,onChange:i,required:!0,className:`h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition focus:border-[#08a8d5] focus:ring-4 focus:ring-[#08a8d5]/20`,children:[(0,j.jsx)(`option`,{value:``,className:`text-[#09285f]`,children:`Select Destination Program`}),(0,j.jsx)(`option`,{value:`MBBS in India`,className:`text-[#09285f]`,children:`MBBS in India`}),(0,j.jsx)(`option`,{value:`MBBS in Russia`,className:`text-[#09285f]`,children:`MBBS in Russia`}),(0,j.jsx)(`option`,{value:`MBBS in Kyrgyzstan`,className:`text-[#09285f]`,children:`MBBS in Kyrgyzstan`}),(0,j.jsx)(`option`,{value:`MBBS in Kazakhstan`,className:`text-[#09285f]`,children:`MBBS in Kazakhstan`}),(0,j.jsx)(`option`,{value:`MBBS in Georgia`,className:`text-[#09285f]`,children:`MBBS in Georgia`}),(0,j.jsx)(`option`,{value:`MBBS in Vietnam`,className:`text-[#09285f]`,children:`MBBS in Vietnam`}),(0,j.jsx)(`option`,{value:`MBBS in Nepal`,className:`text-[#09285f]`,children:`MBBS in Nepal`}),(0,j.jsx)(`option`,{value:`MBBS in Philippines`,className:`text-[#09285f]`,children:`MBBS in Philippines`}),(0,j.jsx)(`option`,{value:`MBBS in USA & Other Destinations`,className:`text-[#09285f]`,children:`MBBS in USA & Other Destinations`})]})]})]}),(0,j.jsx)(`button`,{type:`submit`,className:`mt-6 flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#079ac7] via-[#08a8d5] to-[#00c2ff] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(8,168,213,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(8,168,213,0.6)] hover:brightness-105`,children:n?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(ar,{size:18}),(0,j.jsx)(`span`,{children:`Enquiry Sent to WhatsApp`})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`span`,{children:`Get Free Counselling`}),(0,j.jsx)(Pr,{size:17})]})}),(0,j.jsx)(`p`,{className:`mt-3 text-center text-[11px] leading-5 text-blue-100/60`,children:`Your enquiry will be connected directly with our senior counselling team via WhatsApp.`})]})})]})]}),(0,j.jsx)(`section`,{className:`bg-[#f8fbff] px-5 py-12 sm:px-8 lg:px-10`,children:(0,j.jsx)(`div`,{className:`mx-auto max-w-5xl`,children:(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-between gap-5 rounded-[24px] border border-[#e2ecf5] bg-white p-6 text-center shadow-[0_8px_24px_-6px_rgba(9,40,95,0.06)] sm:flex-row sm:p-8 sm:text-left`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{className:`text-xl font-extrabold text-[#09285f]`,children:`Need immediate admission assistance?`}),(0,j.jsx)(`p`,{className:`mt-1 text-sm text-[#556987]`,children:`Connect with our medical counselling directors on WhatsApp for real-time answers.`})]}),(0,j.jsxs)(`a`,{href:`https://wa.me/${uh}`,target:`_blank`,rel:`noreferrer`,className:`inline-flex shrink-0 items-center gap-2 rounded-full bg-[#16C47F] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(22,196,127,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,196,127,0.45)]`,children:[(0,j.jsx)(A,{size:18}),`WhatsApp Us`,(0,j.jsx)($n,{size:16})]})]})})})]})}function hh({eyebrow:e,title:t,description:n}){return(0,j.jsxs)(`div`,{className:`mx-auto max-w-2xl text-center`,children:[(0,j.jsxs)(`div`,{className:`inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#079ac7]`,children:[(0,j.jsx)(`span`,{className:`h-1.5 w-1.5 rounded-full bg-[#08a8d5]`}),e]}),(0,j.jsx)(`h2`,{className:`mt-2.5 text-2xl font-extrabold tracking-tight text-[#09285f] sm:text-3xl lg:text-4xl`,children:t}),n&&(0,j.jsx)(`p`,{className:`mt-3 text-sm leading-relaxed text-[#556987] sm:text-base`,children:n})]})}function gh({label:e,name:t,type:n,placeholder:r,value:i,onChange:a}){return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`label`,{className:`mb-2 block text-xs font-bold text-white/90`,children:e}),(0,j.jsx)(`input`,{type:n,name:t,value:i,onChange:a,placeholder:r,required:!0,className:`h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-blue-100/40 focus:border-[#08a8d5] focus:ring-4 focus:ring-[#08a8d5]/20`})]})}var _h=[{id:`KE01`,image:`/assets/KE01-DJEZ5Z-S.jpeg`},{id:`KE02`,image:`/assets/KE02-CYqwQ_Vh.jpeg`},{id:`KE03`,image:`/assets/KE03-DkBq-Ynh.jpeg`},{id:`KE04`,image:`/assets/KE04-BoqOmXK2.jpeg`},{id:`KE05`,image:`/assets/KE05-DZBfeybC.jpeg`},{id:`KE06`,image:`/assets/KE06-P0rrgIUE.jpeg`},{id:`KE07`,image:`/assets/KE07-B5x_r1r4.jpeg`},{id:`KE08`,image:`/assets/KE08-CTNKD4qQ.jpeg`},{id:`KE09`,image:`/assets/KE09-BqvwRfpd.jpeg`},{id:`KE10`,image:`/assets/KE10-DUPMqWlG.jpeg`},{id:`KE11`,image:`/assets/KE11-YFFoUlkj.jpeg`},{id:`KE12`,image:`/assets/KE12-LLp1Q4Ae.jpeg`},{id:`KE13`,image:`/assets/KE13-BnmsqCyD.jpeg`},{id:`KE14`,image:`/assets/KE14-CImgDnAX.jpeg`},{id:`KE15`,image:`/assets/KE15-Bgf68Klj.jpeg`},{id:`KE17`,image:`/assets/KE17-C1apDUNX.jpeg`},{id:`KE18`,image:`/assets/KE18-iJiDGf40.jpeg`},{id:`KE20`,image:`/assets/KE20-CQGu0hDM.jpeg`},{id:`KE22`,image:`/assets/KE22-C5IpsPOM.jpeg`},{id:`KE23`,image:`/assets/KE23-BrFz3o1M.jpeg`},{id:`KE24`,image:`/assets/KE24-2R3phRmD.jpeg`},{id:`KE25`,image:`/assets/KE25-FkyJ9-H9.jpeg`},{id:`KE26`,image:`/assets/KE26-CAA6ZnYf.jpeg`},{id:`KE27`,image:`/assets/KE27-SXuAYZ85.jpeg`}],vh=`918830451660`;function yh(){let[e,t]=(0,x.useState)(null);(0,x.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,x.useEffect)(()=>{let n=n=>{e!==null&&(n.key===`Escape`&&t(null),n.key===`ArrowRight`&&t(e=>(e+1)%_h.length),n.key===`ArrowLeft`&&t(e=>e===0?_h.length-1:e-1))};return window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`keydown`,n)}},[e]),(0,x.useEffect)(()=>(document.body.style.overflow=e===null?``:`hidden`,()=>{document.body.style.overflow=``}),[e]);let n=e=>{t(e)},r=()=>{t(null)};return(0,j.jsxs)(`main`,{className:`min-h-screen bg-[#f7fbff]`,children:[(0,j.jsxs)(`section`,{className:`relative overflow-hidden bg-gradient-to-br from-[#061D38] via-[#082F5B] to-[#087DB8]`,children:[(0,j.jsxs)(`div`,{className:`pointer-events-none absolute inset-0`,children:[(0,j.jsx)(`div`,{className:`
              absolute
              -left-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-cyan-400/20
              blur-3xl
            `}),(0,j.jsx)(`div`,{className:`
              absolute
              -bottom-40
              -right-20
              h-96
              w-96
              rounded-full
              bg-blue-300/20
              blur-3xl
            `}),(0,j.jsx)(`div`,{className:`
              absolute
              inset-0
              opacity-[0.07]
              bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)]
              [background-size:24px_24px]
            `})]}),(0,j.jsx)(`div`,{className:`
            relative
            mx-auto
            max-w-7xl
            px-5
            py-14
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          `,children:(0,j.jsxs)(`div`,{className:`mx-auto max-w-3xl text-center`,children:[(0,j.jsx)($.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},className:`
                mx-auto
                mb-6
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-cyan-300/30
                bg-white/10
                text-cyan-300
                shadow-lg
                backdrop-blur-md
              `,children:(0,j.jsx)(`span`,{className:`text-xl`,children:`✦`})}),(0,j.jsxs)($.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:`
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              `,children:[`Moments That Reflect`,` `,(0,j.jsx)(`span`,{className:`
                  bg-gradient-to-r
                  from-cyan-300
                  via-[#16B9D9]
                  to-white
                  bg-clip-text
                  text-transparent
                `,children:`Our Journey`})]}),(0,j.jsx)($.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:`
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-200
                sm:text-base
                lg:text-lg
              `,children:`A glimpse into the people, experiences and moments that make the Kantule Edutech journey special.`})]})})]}),(0,j.jsx)(`section`,{className:`
          mx-auto
          max-w-7xl
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:px-10
          lg:py-16
        `,children:(0,j.jsx)($.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},className:`
            columns-1
            gap-4
            sm:columns-2
            sm:gap-5
            lg:columns-3
            lg:gap-6
          `,children:_h.map((e,t)=>(0,j.jsx)($.button,{type:`button`,initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.45,delay:Math.min(t*.035,.5)},onClick:()=>n(t),className:`
                group
                relative
                mb-4
                block
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white
                bg-white
                p-1.5
                text-left
                shadow-[0_8px_28px_rgba(8,47,91,0.07)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(8,47,91,0.16)]
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400/60
                sm:mb-5
                lg:mb-6
              `,children:(0,j.jsxs)(`div`,{className:`
                  relative
                  overflow-hidden
                  rounded-[14px]
                  bg-slate-100
                `,children:[(0,j.jsx)(`img`,{src:e.image,alt:`Kantule Edutech ${e.id}`,loading:t<6?`eager`:`lazy`,className:`
                    block
                    h-auto
                    min-h-[180px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.045]
                  `}),(0,j.jsx)(`div`,{className:`
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#061D38]/35
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  `}),(0,j.jsx)(`div`,{className:`
                    absolute
                    right-3
                    top-3
                    sm:right-4
                    sm:top-4
                  `,children:(0,j.jsx)(`span`,{className:`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-black/20
                      text-white
                      shadow-lg
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-white
                      group-hover:text-[#082F5B]
                    `,children:(0,j.jsx)(kr,{size:15})})})]})},e.id))})}),(0,j.jsx)(`div`,{className:`flex justify-center px-4 pb-12 sm:pb-16`,children:(0,j.jsxs)(`div`,{className:`
            flex
            items-center
            gap-3
            rounded-full
            border
            border-[#dce9f5]
            bg-white
            px-5
            py-2.5
            shadow-sm
          `,children:[(0,j.jsxs)(`div`,{className:`flex -space-x-2`,children:[(0,j.jsx)(`span`,{className:`
                h-6
                w-6
                rounded-full
                border-2
                border-white
                bg-gradient-to-br
                from-cyan-300
                to-blue-500
              `}),(0,j.jsx)(`span`,{className:`
                h-6
                w-6
                rounded-full
                border-2
                border-white
                bg-gradient-to-br
                from-blue-300
                to-cyan-600
              `}),(0,j.jsx)(`span`,{className:`
                h-6
                w-6
                rounded-full
                border-2
                border-white
                bg-gradient-to-br
                from-cyan-500
                to-[#0B2D5C]
              `})]}),(0,j.jsxs)(`span`,{className:`
              text-xs
              font-semibold
              text-slate-600
            `,children:[_h.length,` moments`]})]})}),(0,j.jsx)(Sf,{children:e!==null&&(0,j.jsxs)($.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,className:`
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/90
              p-3
              backdrop-blur-md
              sm:p-6
            `,children:[(0,j.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Close image`,className:`
                absolute
                right-4
                top-4
                z-[10000]
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                transition-all
                hover:scale-110
                hover:bg-white/25
                sm:right-6
                sm:top-6
              `,children:(0,j.jsx)(Wr,{size:21})}),_h.length>1&&(0,j.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),t(e=>e===0?_h.length-1:e-1)},"aria-label":`Previous image`,className:`
                  absolute
                  left-2
                  top-1/2
                  z-[10000]
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:scale-110
                  hover:bg-white/25
                  sm:left-6
                `,children:(0,j.jsx)(sr,{size:25})}),_h.length>1&&(0,j.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),t(e=>(e+1)%_h.length)},"aria-label":`Next image`,className:`
                  absolute
                  right-2
                  top-1/2
                  z-[10000]
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:scale-110
                  hover:bg-white/25
                  sm:right-6
                `,children:(0,j.jsx)(cr,{size:25})}),(0,j.jsxs)($.div,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.92},transition:{duration:.25},onClick:e=>e.stopPropagation(),className:`
                relative
                flex
                max-h-[92vh]
                max-w-6xl
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                bg-black
                shadow-2xl
                sm:rounded-3xl
              `,children:[(0,j.jsx)(`img`,{src:_h[e].image,alt:`Kantule Edutech ${_h[e].id}`,className:`
                  max-h-[92vh]
                  max-w-full
                  object-contain
                `}),(0,j.jsxs)(`div`,{className:`
                  absolute
                  bottom-3
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-white/20
                  bg-black/45
                  px-4
                  py-1.5
                  text-[10px]
                  font-semibold
                  text-white
                  backdrop-blur-md
                `,children:[e+1,` / `,_h.length]})]})]})}),(0,j.jsx)(`section`,{className:`
          mx-auto
          max-w-7xl
          px-4
          pb-16
          sm:px-6
          sm:pb-20
          lg:px-10
        `,children:(0,j.jsxs)(`div`,{className:`
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-[#061D38]
            via-[#082F5B]
            to-[#0B5EA8]
            p-7
            text-white
            shadow-[0_20px_60px_rgba(8,47,91,0.18)]
            sm:p-10
            lg:p-14
          `,children:[(0,j.jsx)(`div`,{className:`
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-cyan-400/20
              blur-3xl
            `}),(0,j.jsxs)(`div`,{className:`
              relative
              z-10
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-center
              lg:justify-between
            `,children:[(0,j.jsxs)(`div`,{className:`max-w-2xl`,children:[(0,j.jsx)(`div`,{className:`
                  mb-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-cyan-300
                `,children:(0,j.jsx)(`span`,{className:`text-lg`,children:`✦`})}),(0,j.jsx)(`h2`,{className:`
                  text-2xl
                  font-bold
                  leading-tight
                  sm:text-3xl
                  lg:text-4xl
                `,children:`Start Your Medical Journey`}),(0,j.jsx)(`p`,{className:`
                  mt-3
                  text-sm
                  leading-relaxed
                  text-slate-200
                  sm:text-base
                `,children:`Get personalized MBBS counselling, university selection and step-by-step admission guidance.`})]}),(0,j.jsxs)(`div`,{className:`
                flex
                flex-col
                gap-3
                sm:flex-row
              `,children:[(0,j.jsxs)(jn,{to:`/contact`,className:`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#0B8FD3]
                  to-[#16B9D9]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  hover:-translate-y-0.5
                `,children:[`Book Free Counselling`,(0,j.jsx)($n,{size:16})]}),(0,j.jsxs)(`a`,{href:`https://wa.me/${vh}`,target:`_blank`,rel:`noreferrer`,className:`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  hover:bg-white/20
                `,children:[(0,j.jsx)(A,{size:16}),`WhatsApp Us`]})]})]})]})})]})}var bh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xh=x.createContext&&x.createContext(bh),Sh=[`attr`,`size`,`title`];function Ch(e,t){if(e==null)return{};var n,r,i=wh(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function wh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Th(){return Th=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Th.apply(null,arguments)}function Eh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Dh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Eh(Object(n),!0).forEach(function(t){Oh(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eh(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Oh(e,t,n){return(t=kh(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kh(e){var t=Ah(e,`string`);return typeof t==`symbol`?t:t+``}function Ah(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function jh(e){return e&&e.map((e,t)=>x.createElement(e.tag,Dh({key:t},e.attr),jh(e.child)))}function Mh(e){return t=>x.createElement(Nh,Th({attr:Dh({},e.attr)},t),jh(e.child))}function Nh(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=Ch(e,Sh),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),x.createElement(`svg`,Th({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Dh(Dh({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&x.createElement(`title`,null,i),e.children)};return xh===void 0?t(bh):x.createElement(xh.Consumer,null,e=>t(e))}function Ph(e){return Mh({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function Fh(e){return Mh({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z`},child:[]}]})(e)}function Ih(){let e=`8830451660`,t=`8237794917`;(0,x.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`instant`})},[]);let n=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n=`Hello Kantule Edutech,

Student Name: ${t.get(`name`)}
Mobile Number: ${t.get(`mobile`)}
NEET Score: ${t.get(`neet`)}
Interested In: ${t.get(`interested`)}

I would like to get free MBBS counselling.`;window.open(`https://wa.me/918830451660?text=${encodeURIComponent(n)}`,`_blank`,`noopener,noreferrer`)},r=[{type:`HEAD OFFICE`,title:`Kantule Edutech`,icon:rr,address:`Rukmini Complex, Pachod Road, Ambad, District Jalna, Maharashtra – 431204`,mapQuery:`Rukmini Complex, Pachod Road, Ambad, Jalna, Maharashtra 431204`,mapSearch:`https://www.google.com/maps/search/?api=1&query=Rukmini+Complex,+Pachod+Road,+Ambad,+Jalna,+Maharashtra+431204`,directions:`https://www.google.com/maps/dir/?api=1&destination=Rukmini+Complex,+Pachod+Road,+Ambad,+Jalna,+Maharashtra+431204`,accent:`blue`},{type:`BRANCH OFFICE`,title:`Beed Branch`,icon:Or,address:`Akshay Jewellers, Pangari Rd, near Umakiran Complex, Beed, Maharashtra – 431122, India`,mapQuery:`Akshay Jewellers, Pangari Rd, near Umakiran Complex, Beed, Maharashtra 431122`,mapSearch:`https://www.google.com/maps/search/?api=1&query=Akshay+Jewellers,+Pangari+Rd,+near+Umakiran+Complex,+Beed,+Maharashtra+431122`,directions:`https://www.google.com/maps/dir/?api=1&destination=Akshay+Jewellers,+Pangari+Rd,+near+Umakiran+Complex,+Beed,+Maharashtra+431122`,accent:`cyan`},{type:`BRANCH OFFICE`,title:`Chhatrapati Sambhaji Nagar`,icon:Or,address:`Prozone Mall, C-11, 3rd Floor, Prozone Trade Centre, Chhatrapati Sambhaji Nagar, Maharashtra – 431210, India`,mapQuery:`Prozone Mall, C-11, 3rd Floor, Prozone Trade Centre, Chhatrapati Sambhaji Nagar, Maharashtra 431210`,mapSearch:`https://www.google.com/maps/search/?api=1&query=Prozone+Mall,+C-11,+3rd+Floor,+Prozone+Trade+Centre,+Chhatrapati+Sambhaji+Nagar,+Maharashtra+431210`,directions:`https://www.google.com/maps/dir/?api=1&destination=Prozone+Mall,+C-11,+3rd+Floor,+Prozone+Trade+Centre,+Chhatrapati+Sambhaji+Nagar,+Maharashtra+431210`,accent:`blue`}];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`style`,{children:`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          background: #f7fbff;
          color: #09285f;
          padding-bottom: 80px;
        }

        .contact-page::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 8% 14%,
              rgba(8, 168, 213, 0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 92% 8%,
              rgba(7, 59, 130, 0.08),
              transparent 32%
            ),
            radial-gradient(
              circle at 86% 84%,
              rgba(8, 168, 213, 0.07),
              transparent 30%
            );
        }

        .contact-container {
          position: relative;
          z-index: 1;
          width: min(1220px, calc(100% - 24px));
          margin: 0 auto;
        }

        /* ================= HERO ================= */

        .contact-hero {
          position: relative;
          text-align: center;
          padding: 48px 10px 28px;
        }

        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 15px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(8, 168, 213, 0.22);
          color: #079ac7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 7px 22px rgba(7, 59, 130, 0.07);
          margin-bottom: 17px;
        }

        .contact-eyebrow svg {
          width: 14px;
          height: 14px;
        }

        .contact-hero h1 {
          margin: 0 auto 14px;
          max-width: 850px;
          font-size: clamp(32px, 7vw, 58px);
          line-height: 1.1;
          letter-spacing: -0.035em;
          font-weight: 850;
          color: #09285f;
        }

        .contact-hero h1 span {
          background: linear-gradient(
            120deg,
            #073b82 0%,
            #0874b7 48%,
            #08a8d5 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-hero p {
          max-width: 680px;
          margin: 0 auto;
          color: #5d708d;
          font-size: 14px;
          line-height: 1.7;
        }

        /* ================= MAIN ================= */

        .contact-main {
          padding-top: 8px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.08fr;
            gap: 28px;
          }
        }

        /* ================= INFO CARD ================= */

        .contact-info-card {
          padding: 25px 20px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid #dfebf5;
          box-shadow:
            0 16px 40px rgba(7, 59, 130, 0.07),
            0 2px 8px rgba(7, 59, 130, 0.03);
        }

        @media (min-width: 600px) {
          .contact-info-card {
            padding: 32px;
          }
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #079ac7;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .section-title {
          margin: 0 0 20px;
          color: #09285f;
          font-size: clamp(23px, 4vw, 29px);
          line-height: 1.2;
          font-weight: 850;
        }

        .company-box {
          position: relative;
          display: flex;
          align-items: center;
          gap: 13px;
          overflow: hidden;
          padding: 15px;
          margin-bottom: 19px;
          border-radius: 17px;
          color: white;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(8, 168, 213, 0.4),
              transparent 32%
            ),
            linear-gradient(135deg, #062d64, #0878ad);
          box-shadow: 0 12px 28px rgba(7, 59, 130, 0.22);
        }

        .company-icon {
          width: 43px;
          height: 43px;
          flex: 0 0 43px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: rgba(255,255,255,0.13);
          border: 1px solid rgba(255,255,255,0.25);
        }

        .company-box strong {
          display: block;
          font-size: 14px;
          margin-bottom: 3px;
          font-weight: 850;
        }

        .company-box span {
          color: #d5effa;
          font-size: 11.5px;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 13px;
          border-radius: 15px;
          background: linear-gradient(135deg, #fbfdff, #f5faff);
          border: 1px solid #e7f0f7;
          transition: 0.25s ease;
        }

        .info-item:hover {
          border-color: rgba(8,168,213,0.3);
          transform: translateY(-2px);
          box-shadow: 0 9px 20px rgba(8,168,213,0.08);
        }

        .info-icon {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          color: #08a8d5;
          background: #eaf8fd;
          border: 1px solid #d3edf7;
        }

        .info-content {
          min-width: 0;
          flex: 1;
        }

        .info-item small {
          display: block;
          margin-bottom: 4px;
          color: #70809a;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .info-item p,
        .info-item a {
          margin: 0;
          color: #173d70;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 600;
          text-decoration: none;
        }

        .phone-links {
          display: flex;
          flex-wrap: wrap;
          gap: 7px 16px;
        }

        .phone-links a:hover,
        .info-item a:hover {
          color: #08a8d5;
        }

        /* ================= FORM ================= */

        .contact-form-card {
          position: relative;
          overflow: hidden;
          padding: 26px 21px;
          border-radius: 25px;
          color: white;
          background:
            radial-gradient(
              circle at 95% 5%,
              rgba(8,168,213,0.22),
              transparent 30%
            ),
            linear-gradient(145deg, #061938, #0a315f 65%, #0b477b);
          border: 1px solid rgba(8,168,213,0.28);
          box-shadow: 0 22px 55px rgba(6,25,56,0.25);
        }

        @media (min-width: 600px) {
          .contact-form-card {
            padding: 32px;
          }
        }

        .form-top {
          position: relative;
          z-index: 2;
          margin-bottom: 20px;
        }

        .form-top .section-label {
          color: #42c8ee;
        }

        .form-top h2 {
          margin: 5px 0 7px;
          color: #fff;
          font-size: clamp(24px, 4vw, 30px);
          line-height: 1.2;
          font-weight: 850;
        }

        .form-top p {
          margin: 0;
          color: #c5d7eb;
          font-size: 13px;
          line-height: 1.65;
        }

        .contact-form {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 14px;
        }

        .field label {
          display: block;
          margin-bottom: 6px;
          color: #dce9f6;
          font-size: 12px;
          font-weight: 750;
        }

        .field input,
        .field select {
          width: 100%;
          padding: 13px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.17);
          outline: none;
          background: rgba(255,255,255,0.08);
          color: #fff;
          font: inherit;
          font-size: 13px;
          transition: 0.25s ease;
        }

        .field input::placeholder {
          color: #9eb2cb;
        }

        .field select {
          color: #e8f4ff;
        }

        .field select option {
          color: #09285f;
          background: white;
        }

        .field input:focus,
        .field select:focus {
          border-color: #08a8d5;
          background: rgba(255,255,255,0.13);
          box-shadow: 0 0 0 4px rgba(8,168,213,0.18);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          margin-top: 5px;
          padding: 14px 18px;
          border: 0;
          border-radius: 13px;
          cursor: pointer;
          color: #fff;
          font-size: 13px;
          font-weight: 850;
          background: linear-gradient(135deg, #079ac7, #08b5dd);
          box-shadow: 0 13px 28px rgba(8,168,213,0.3);
          transition: 0.25s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.06);
        }

        .whatsapp-note {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 13px;
          color: #b9d4ed;
          font-size: 11px;
        }

        /* =========================================================
           LOCATIONS
        ========================================================= */

        .locations-section {
          margin-top: 38px;
        }

        .locations-heading {
          text-align: center;
          margin-bottom: 22px;
        }

        .locations-heading .section-label {
          justify-content: center;
        }

        .locations-heading h2 {
          margin: 0;
          color: #09285f;
          font-size: clamp(25px, 5vw, 35px);
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 850;
        }

        .locations-heading p {
          max-width: 620px;
          margin: 8px auto 0;
          color: #687b96;
          font-size: 13px;
          line-height: 1.6;
        }

        .locations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        @media (min-width: 680px) {
          .locations-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1080px) {
          .locations-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
          }
        }

        /* ================= LOCATION CARD ================= */

        .location-card {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-width: 0;
          border-radius: 22px;
          background: rgba(255,255,255,0.98);
          border: 1px solid #deebf5;
          box-shadow:
            0 14px 38px rgba(7,59,130,0.07),
            0 2px 8px rgba(7,59,130,0.025);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .location-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            90deg,
            #073b82,
            #08a8d5,
            #55d6ee
          );
          z-index: 5;
        }

        .location-card:hover {
          transform: translateY(-5px);
          border-color: rgba(8,168,213,0.3);
          box-shadow:
            0 24px 52px rgba(7,59,130,0.12),
            0 8px 20px rgba(8,168,213,0.06);
        }

        /* LOCATION HEADER */

        .location-card-top {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 22px 19px 13px;
        }

        .location-card-icon {
          position: relative;
          width: 47px;
          height: 47px;
          flex: 0 0 47px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #08a8d5;
          background:
            linear-gradient(
              145deg,
              #e9f8fd,
              #f5fbff
            );
          border: 1px solid #cfeaf5;
          box-shadow:
            0 7px 18px rgba(8,168,213,0.12),
            inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .location-card-icon::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 17px;
          border: 1px solid rgba(8,168,213,0.08);
          pointer-events: none;
        }

        .location-heading-content {
          min-width: 0;
          padding-top: 1px;
        }

        .location-type {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 4px;
          color: #079ac7;
          font-size: 9.5px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0.08em;
        }

        .location-type::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #08a8d5;
          box-shadow: 0 0 0 3px rgba(8,168,213,0.08);
        }

        .location-card-top h3 {
          margin: 0;
          color: #09285f;
          font-size: 16px;
          line-height: 1.28;
          font-weight: 850;
          letter-spacing: -0.01em;
        }

        /* ADDRESS */

        .location-address-box {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin: 0 17px 16px;
          padding: 12px 12px;
          min-height: 72px;
          border-radius: 13px;
          background:
            linear-gradient(
              135deg,
              #f8fbfe,
              #f1f8fc
            );
          border: 1px solid #e4eff7;
        }

        .location-address-icon {
          flex: 0 0 auto;
          margin-top: 1px;
          color: #08a8d5;
        }

        .location-address-text {
          color: #5d708d;
          font-size: 12px;
          line-height: 1.6;
          font-weight: 550;
        }

        /* MAP */

        .location-map-wrapper {
          position: relative;
          overflow: hidden;
          margin: 0 11px;
          border-radius: 15px;
          border: 1px solid #e0eaf2;
          background: #edf5fa;
        }

        .location-map-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 15px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.45);
        }

        .location-map {
          display: block;
          width: 100%;
          height: 205px;
          border: 0;
          background: #edf5fa;
        }

        /* MAP LABEL */

        .map-floating-label {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border-radius: 9px;
          background: rgba(255,255,255,0.94);
          color: #09285f;
          font-size: 10px;
          font-weight: 800;
          box-shadow: 0 5px 16px rgba(7,59,130,0.12);
          backdrop-filter: blur(8px);
        }

        .map-floating-label svg {
          color: #08a8d5;
        }

        /* ACTIONS */

        .location-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          padding: 12px 11px 11px;
        }

        .location-actions a {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 850;
          transition: all 0.22s ease;
        }

        .location-map-btn {
          color: #fff;
          background: linear-gradient(
            135deg,
            #073b82,
            #1455a0
          );
          box-shadow: 0 6px 14px rgba(7,59,130,0.17);
        }

        .location-map-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 9px 18px rgba(7,59,130,0.22);
        }

        .location-directions-btn {
          color: #079ac7;
          background: #effafe;
          border: 1px solid #cdebf6;
        }

        .location-directions-btn:hover {
          color: #fff;
          background: #08a8d5;
          border-color: #08a8d5;
          transform: translateY(-1px);
        }

        /* ================= DETAILS ================= */

        .details-strip {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 22px;
        }

        @media (min-width: 640px) {
          .details-strip {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .detail-card {
          padding: 19px;
          border-radius: 17px;
          background: #fff;
          border: 1px solid #e2ecf5;
          box-shadow: 0 9px 25px rgba(7,59,130,0.05);
        }

        .detail-card h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 9px;
          color: #09285f;
          font-size: 14px;
          font-weight: 850;
        }

        .detail-card h3 svg {
          color: #08a8d5;
        }

        .detail-card p {
          margin: 0;
          color: #617491;
          font-size: 12px;
          line-height: 1.6;
        }

        .social-row {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .social-link-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #173d70;
          font-size: 12px;
          font-weight: 650;
          text-decoration: none;
        }

        .social-link-item:hover {
          color: #08a8d5;
        }

        .social-link-item svg {
          color: #08a8d5;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 520px) {
          .contact-container {
            width: calc(100% - 18px);
          }

          .contact-hero {
            padding: 34px 6px 24px;
          }

          .contact-hero p {
            font-size: 13px;
          }

          .contact-info-card,
          .contact-form-card {
            border-radius: 21px;
          }

          .location-card {
            border-radius: 20px;
          }

          .location-card-top {
            padding: 20px 16px 12px;
          }

          .location-address-box {
            margin: 0 14px 14px;
          }

          .location-map-wrapper {
            margin: 0 9px;
          }

          .location-map {
            height: 190px;
          }

          .location-actions {
            padding: 10px 9px 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}),(0,j.jsxs)(`main`,{className:`contact-page`,children:[(0,j.jsx)(`section`,{className:`contact-hero`,children:(0,j.jsx)(`div`,{className:`contact-container`,children:(0,j.jsxs)($.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,j.jsxs)(`div`,{className:`contact-eyebrow`,children:[(0,j.jsx)(Lr,{}),`Contact Us`]}),(0,j.jsxs)(`h1`,{children:[`Let’s Start Your`,` `,(0,j.jsx)(`span`,{children:`Medical Journey.`})]}),(0,j.jsx)(`p`,{children:`Connect with Kantule Edutech for MBBS admission guidance, counselling and support in India and abroad.`})]})})}),(0,j.jsx)(`section`,{className:`contact-main`,children:(0,j.jsxs)(`div`,{className:`contact-container`,children:[(0,j.jsxs)(`div`,{className:`contact-grid`,children:[(0,j.jsxs)($.div,{className:`contact-info-card`,initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.5},children:[(0,j.jsxs)(`div`,{className:`section-label`,children:[(0,j.jsx)(Fr,{size:14}),`Official Admission Support`]}),(0,j.jsx)(`h2`,{className:`section-title`,children:`Get in Touch With Us`}),(0,j.jsxs)(`div`,{className:`company-box`,children:[(0,j.jsx)(`div`,{className:`company-icon`,children:(0,j.jsx)(rr,{size:22})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`strong`,{children:`Kantule Edutech Pvt. Ltd.`}),(0,j.jsx)(`span`,{children:`Medical Education & Career Guidance`})]})]}),(0,j.jsxs)(`div`,{className:`info-list`,children:[(0,j.jsxs)(`div`,{className:`info-item`,children:[(0,j.jsx)(`div`,{className:`info-icon`,children:(0,j.jsx)(Or,{size:18})}),(0,j.jsxs)(`div`,{className:`info-content`,children:[(0,j.jsx)(`small`,{children:`Head Office Address`}),(0,j.jsx)(`p`,{children:`Rukmini Complex, Pachod Road, Ambad, District Jalna, Maharashtra – 431204`})]})]}),(0,j.jsxs)(`div`,{className:`info-item`,children:[(0,j.jsx)(`div`,{className:`info-icon`,children:(0,j.jsx)(Mr,{size:18})}),(0,j.jsxs)(`div`,{className:`info-content`,children:[(0,j.jsx)(`small`,{children:`Call Direct Line`}),(0,j.jsxs)(`div`,{className:`phone-links`,children:[(0,j.jsxs)(`a`,{href:`tel:${e}`,children:[`+91 `,e]}),(0,j.jsxs)(`a`,{href:`tel:${t}`,children:[`+91 `,t]})]})]})]}),(0,j.jsxs)(`div`,{className:`info-item`,children:[(0,j.jsx)(`div`,{className:`info-icon`,children:(0,j.jsx)(A,{size:18})}),(0,j.jsxs)(`div`,{className:`info-content`,children:[(0,j.jsx)(`small`,{children:`WhatsApp Enquiry`}),(0,j.jsxs)(`div`,{className:`phone-links`,children:[(0,j.jsxs)(`a`,{href:`https://wa.me/91${e}`,target:`_blank`,rel:`noreferrer`,children:[`+91 `,e]}),(0,j.jsxs)(`a`,{href:`https://wa.me/91${t}`,target:`_blank`,rel:`noreferrer`,children:[`+91 `,t]})]})]})]}),(0,j.jsxs)(`div`,{className:`info-item`,children:[(0,j.jsx)(`div`,{className:`info-icon`,children:(0,j.jsx)(Dr,{size:18})}),(0,j.jsxs)(`div`,{className:`info-content`,children:[(0,j.jsx)(`small`,{children:`Official Email`}),(0,j.jsx)(`p`,{children:(0,j.jsx)(`a`,{href:`mailto:kantuleedutec@gmail.com`,children:`kantuleedutec@gmail.com`})})]})]}),(0,j.jsxs)(`div`,{className:`info-item`,children:[(0,j.jsx)(`div`,{className:`info-icon`,children:(0,j.jsx)(fr,{size:18})}),(0,j.jsxs)(`div`,{className:`info-content`,children:[(0,j.jsx)(`small`,{children:`Office Working Hours`}),(0,j.jsx)(`p`,{children:`Mon – Sat: 9:30 AM – 7:30 PM (Sun by Appointment)`})]})]})]})]}),(0,j.jsxs)($.div,{className:`contact-form-card`,initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.5,delay:.1},children:[(0,j.jsxs)(`div`,{className:`form-top`,children:[(0,j.jsxs)(`div`,{className:`section-label`,children:[(0,j.jsx)(Pr,{size:13}),`Free Medical Counselling`]}),(0,j.jsx)(`h2`,{children:`Get Expert MBBS Counselling`}),(0,j.jsx)(`p`,{children:`Please fill in your details below and our senior medical admission director will connect with you shortly.`})]}),(0,j.jsxs)(`form`,{className:`contact-form`,onSubmit:n,children:[(0,j.jsxs)(`div`,{className:`field`,children:[(0,j.jsx)(`label`,{htmlFor:`name`,children:`Student Name *`}),(0,j.jsx)(`input`,{id:`name`,name:`name`,type:`text`,placeholder:`e.g. Rahul Sharma`,required:!0})]}),(0,j.jsxs)(`div`,{className:`field`,children:[(0,j.jsx)(`label`,{htmlFor:`mobile`,children:`Mobile Number (WhatsApp) *`}),(0,j.jsx)(`input`,{id:`mobile`,name:`mobile`,type:`tel`,placeholder:`e.g. 9876543210`,required:!0})]}),(0,j.jsxs)(`div`,{className:`field`,children:[(0,j.jsx)(`label`,{htmlFor:`neet`,children:`NEET Score / Expected Score`}),(0,j.jsx)(`input`,{id:`neet`,name:`neet`,type:`text`,placeholder:`e.g. 450 / Qualified / Appearing`,required:!0})]}),(0,j.jsxs)(`div`,{className:`field`,children:[(0,j.jsx)(`label`,{htmlFor:`interested`,children:`Interested Destination *`}),(0,j.jsxs)(`select`,{id:`interested`,name:`interested`,defaultValue:``,required:!0,children:[(0,j.jsx)(`option`,{value:``,disabled:!0,children:`Select Destination Program`}),(0,j.jsx)(`option`,{value:`MBBS in India`,children:`MBBS in India`}),(0,j.jsx)(`option`,{value:`MBBS in Russia`,children:`MBBS in Russia`}),(0,j.jsx)(`option`,{value:`MBBS in Kyrgyzstan`,children:`MBBS in Kyrgyzstan`}),(0,j.jsx)(`option`,{value:`MBBS in Kazakhstan`,children:`MBBS in Kazakhstan`}),(0,j.jsx)(`option`,{value:`MBBS in Georgia`,children:`MBBS in Georgia`}),(0,j.jsx)(`option`,{value:`MBBS in Vietnam`,children:`MBBS in Vietnam`}),(0,j.jsx)(`option`,{value:`MBBS in Nepal`,children:`MBBS in Nepal`}),(0,j.jsx)(`option`,{value:`MBBS in Philippines`,children:`MBBS in Philippines`}),(0,j.jsx)(`option`,{value:`MBBS in USA & Other Destinations`,children:`MBBS in USA & Other Destinations`})]})]}),(0,j.jsxs)(`button`,{type:`submit`,className:`submit-btn`,children:[(0,j.jsx)(`span`,{children:`Get Free Counselling`}),(0,j.jsx)($n,{size:17})]})]}),(0,j.jsxs)(`div`,{className:`whatsapp-note`,children:[(0,j.jsx)(lr,{size:15}),(0,j.jsx)(`span`,{children:`Instant 1-on-1 response delivered via WhatsApp.`})]})]})]}),(0,j.jsxs)(`section`,{className:`locations-section`,children:[(0,j.jsxs)($.div,{className:`locations-heading`,initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.45},children:[(0,j.jsxs)(`div`,{className:`section-label`,children:[(0,j.jsx)(Or,{size:14}),`Our Locations`]}),(0,j.jsx)(`h2`,{children:`Find Kantule Edutech Near You`}),(0,j.jsx)(`p`,{children:`Visit our offices for personalised counselling and medical admission guidance.`})]}),(0,j.jsx)(`div`,{className:`locations-grid`,children:r.map((e,t)=>{let n=e.icon;return(0,j.jsxs)($.article,{className:`location-card`,initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.12},transition:{duration:.45,delay:t*.08},children:[(0,j.jsxs)(`div`,{className:`location-card-top`,children:[(0,j.jsx)(`div`,{className:`location-card-icon`,children:(0,j.jsx)(n,{size:21})}),(0,j.jsxs)(`div`,{className:`location-heading-content`,children:[(0,j.jsx)(`div`,{className:`location-type`,children:e.type}),(0,j.jsx)(`h3`,{children:e.title})]})]}),(0,j.jsxs)(`div`,{className:`location-address-box`,children:[(0,j.jsx)(Or,{className:`location-address-icon`,size:17}),(0,j.jsx)(`div`,{className:`location-address-text`,children:e.address})]}),(0,j.jsxs)(`div`,{className:`location-map-wrapper`,children:[(0,j.jsxs)(`div`,{className:`map-floating-label`,children:[(0,j.jsx)(jr,{size:12}),`Location`]}),(0,j.jsx)(`iframe`,{className:`location-map`,title:`${e.title} map`,src:`https://www.google.com/maps?q=${encodeURIComponent(e.mapQuery)}&output=embed`,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`})]}),(0,j.jsxs)(`div`,{className:`location-actions`,children:[(0,j.jsxs)(`a`,{href:e.mapSearch,target:`_blank`,rel:`noreferrer`,className:`location-map-btn`,children:[(0,j.jsx)(jr,{size:14}),`View Map`,(0,j.jsx)(hr,{size:12})]}),(0,j.jsxs)(`a`,{href:e.directions,target:`_blank`,rel:`noreferrer`,className:`location-directions-btn`,children:[(0,j.jsx)($n,{size:14}),`Directions`]})]})]},e.title)})})]}),(0,j.jsxs)(`div`,{className:`details-strip`,children:[(0,j.jsxs)($.div,{className:`detail-card`,initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.4},children:[(0,j.jsxs)(`h3`,{children:[(0,j.jsx)(Dr,{size:18}),`Official Email`]}),(0,j.jsx)(`p`,{children:(0,j.jsx)(`a`,{href:`mailto:kantuleedutec@gmail.com`,style:{color:`inherit`,textDecoration:`none`},children:`kantuleedutec@gmail.com`})})]}),(0,j.jsxs)($.div,{className:`detail-card`,initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.4,delay:.08},children:[(0,j.jsxs)(`h3`,{children:[(0,j.jsx)(fr,{size:18}),`Office Hours`]}),(0,j.jsx)(`p`,{children:`Mon – Sat: 9:30 AM – 7:30 PM (Sunday by Appointment)`})]}),(0,j.jsxs)($.div,{className:`detail-card`,initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.4,delay:.16},children:[(0,j.jsxs)(`h3`,{children:[(0,j.jsx)(mr,{size:18}),`Social Media`]}),(0,j.jsxs)(`div`,{className:`social-row`,children:[(0,j.jsxs)(`a`,{href:`https://www.instagram.com/kantuleedutech/`,target:`_blank`,rel:`noreferrer`,className:`social-link-item`,children:[(0,j.jsx)(Ph,{size:14}),`@kantuleedutech`]}),(0,j.jsxs)(`a`,{href:`https://www.facebook.com/swapyworld/`,target:`_blank`,rel:`noreferrer`,className:`social-link-item`,children:[(0,j.jsx)(Fh,{size:14}),`Kantule Edutech Facebook`]})]})]})]})]})})]})]})}var Lh={ihsm:`https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"kyrgyzstan-ihsm":`https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"ksmu-kg":`https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,ksma:`https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"kyrgyzstan-ksmu-kg":`https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"ust-manila":`https://i.pinimg.com/originals/f5/a8/b3/f5a8b368eeb595552172066fe20600df.jpg`,"university-of-santo-tomas":`https://i.pinimg.com/originals/f5/a8/b3/f5a8b368eeb595552172066fe20600df.jpg`,"up-manila":`https://th.bing.com/th/id/OIP.cR84ZeNJRaEsg2MPc8bQ3wHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"up-manila-college-of-medicine":`https://th.bing.com/th/id/OIP.cR84ZeNJRaEsg2MPc8bQ3wHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,"tribhuvan-iom":`https://th.bing.com/th/id/OIP.97VIS6CI6q0r8nLiqPjIqwHaFj?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`},Rh=[{id:`kyrgyzstan-ihsm`,name:`International Higher School of Medicine`,country:`Kyrgyzstan`,city:`Bishkek`,image:`https://th.bing.com/th/id/OIP.Sg0aEC4YLGauCD6krfC7RgHaFf?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`,fallbackImage:Im},{id:`ksmu-kg`,name:`Kyrgyz State Medical Academy`,country:`Kyrgyzstan`,city:`Bishkek`,image:`https://th.bing.com/th/id/OIP.cnbM7eiEOkgs1qI-4SusbAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`},{id:`kyrgyzstan-osh-state-university`,name:`Osh State University`,country:`Kyrgyzstan`,city:`Osh`,image:Lm},{id:`kyrgyzstan-asian-medical-institute`,name:`Asian Medical Institute`,country:`Kyrgyzstan`,city:`Kant`,image:Rm}],zh=[{id:`tribhuvan-iom`,name:`Tribhuvan University Institute of Medicine`,country:`Nepal`,city:`Kathmandu`,image:`https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80`}];function Bh(e){return e?String(e).trim().toLowerCase().replace(/^india-/,``).replace(/^russia-/,``).replace(/^kyrgyzstan-/,``).replace(/^kazakhstan-/,``).replace(/^georgia-/,``).replace(/^vietnam-/,``).replace(/^nepal-/,``).replace(/^philippines-/,``).replace(/^usa-/,``):``}function Vh(e,t){let n=e?.id||t?.id||``,r=String(n).trim().toLowerCase(),i=Bh(n);return Lh[r]?Lh[r]:Lh[i]?Lh[i]:e?.image?e.image:t?.image?t.image:``}function Hh(e,t){if(!e)return null;let n=String(e.location||``).trim().split(`,`).map(e=>e.trim()).filter(Boolean),r=n.length>1?n.slice(0,-1).join(`, `):n[0]||``,i=n.length>1?n[n.length-1]:``;return{id:t,name:e.name||`University`,country:i||`International`,city:r,image:e.image||``}}var Uh=83;function Wh(e){if(!e)return null;let t=String(e).match(/\$?\s*([\d,]+(?:\.\d+)?)/);if(!t)return null;let n=Number(t[1].replace(/,/g,``));return Number.isFinite(n)?Math.round(n*Uh).toLocaleString(`en-IN`):null}function Gh({value:e}){let t=Wh(e);return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{children:e}),t&&(0,j.jsxs)(`div`,{className:`mt-1 text-xs sm:text-sm font-semibold text-[#1455A0]`,children:[`≈ ₹`,t]})]})}function Kh(e){if(!e)return 5;let t=String(e);return/6\s*Years/i.test(t)?6:(/5\s*to\s*6\s*Years/i.test(t)||/5\s*Years/i.test(t),5)}function qh(e){return e===1?`1st Year`:e===2?`2nd Year`:e===3?`3rd Year`:`${e}th Year`}function Jh(e,t){if(!e)return null;let n=e.tuition;if(!n)return null;let r=String(n);if(/1st\s*Year\s*:/i.test(r)){if(t===1){let e=r.match(/1st\s*Year\s*:\s*([^|]+)/i);return e?e[1].trim():r}let e=r.match(/2nd[–-]6th\s*Year\s*:\s*([^|]+)/i);return e?e[1].trim():r}return r}function Yh(e,t){let n=e?.fees;return n?.tuition?Jh(n,t):e?.annualTuitionFee||n?.annualTuitionFee||null}function Xh(e){let t=e?.fees;return t?t.hostelAndMess?t.hostelAndMess:t.hostel&&t.food?`${t.hostel} + ${t.food}`:t.hostel||t.food||null:null}function Zh(e){return!!(e?.fees?.tuition||e?.fees?.annualTuitionFee||e?.annualTuitionFee)}function Qh({title:e,icon:t,children:n}){return(0,j.jsxs)(`div`,{className:`bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#e2edf8] shadow-[0_8px_30px_rgba(11,45,92,0.03)]`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-3`,children:[t&&(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-[#eef7fc] text-[#1455A0] flex items-center justify-center`,children:(0,j.jsx)(t,{size:19})}),(0,j.jsx)(`h2`,{className:`text-xl sm:text-2xl font-bold text-[#0B2D5C]`,children:e})]}),(0,j.jsx)(`div`,{className:`w-12 h-1 bg-[#18B8D4] rounded mt-3 mb-5`}),n]})}function $h(){let{universityId:e}=yt(),[t,n]=(0,x.useState)(!1),[r,i]=(0,x.useState)(null);(0,x.useEffect)(()=>{window.scrollTo({top:0,behavior:`instant`}),n(!1),i(null)},[e]);let a=(0,x.useMemo)(()=>[...Fm,...Rh,...zh],[]),o=Bh(e),s=Bm(e);!s&&o&&(s=Bm(o));let c=a.find(t=>t.id===e);if(!c&&o&&(c=a.find(e=>Bh(e.id)===o)),!c&&s&&(c=Hh(s,e)),!s||!c)return(0,j.jsx)(`div`,{className:`min-h-[70vh] flex flex-col items-center justify-center bg-[#f8fbfe] px-4 py-16 text-center`,children:(0,j.jsxs)($.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5},className:`max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-[#dce8f5] shadow-[0_10px_40px_rgba(11,45,92,0.06)]`,children:[(0,j.jsx)(`div`,{className:`w-16 h-16 rounded-2xl bg-[#eef7fc] text-[#1455A0] flex items-center justify-center mx-auto mb-6 border border-[#d2e7f8]`,children:(0,j.jsx)(rr,{size:32,className:`text-[#18B8D4]`})}),(0,j.jsx)(`h2`,{className:`text-2xl sm:text-3xl font-extrabold text-[#0B2D5C] tracking-tight`,children:`University Not Found`}),(0,j.jsx)(`p`,{className:`mt-3.5 text-sm sm:text-base text-slate-500 leading-relaxed`,children:`The university you are looking for does not exist or may have been updated. Please return to the homepage to explore all choices.`}),(0,j.jsx)(`div`,{className:`mt-8`,children:(0,j.jsxs)(jn,{to:`/`,className:`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0B2D5C] to-[#1455A0] hover:shadow-lg hover:shadow-blue-900/20 text-white text-sm font-bold transition-all duration-200`,children:[(0,j.jsx)(Qn,{size:16}),`Back to Universities`]})})]})});let l=Vh(c,s),u=s.image||c.image||``,d=t&&u&&u!==l?u:l,f=c.city&&c.country?`${c.city}, ${c.country}`:s.location||c.country||`Location not available`,p=encodeURIComponent(`Hi, I want to get admission details for ${c.name} in ${c.country}. Please guide me.`),m=[...s.gallery?.main||[],...s.gallery?.campus||[]],h=Kh(s.duration||s.courseDuration);return(0,j.jsxs)(`div`,{className:`bg-[#f8fbfe] min-h-screen pb-16 sm:pb-24`,children:[(0,j.jsx)(`div`,{className:`bg-white border-b border-slate-100 py-4 sm:py-5 sticky top-0 z-30 shadow-[0_1px_3px_rgba(11,45,92,0.02)]`,children:(0,j.jsx)(`div`,{className:`max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8`,children:(0,j.jsxs)(jn,{to:`/`,className:`inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1455A0] hover:text-[#0B2D5C] transition-colors duration-150`,children:[(0,j.jsx)(Qn,{size:16}),(0,j.jsx)(`span`,{children:`Back to Universities`})]})})}),(0,j.jsx)(`section`,{className:`bg-gradient-to-b from-white to-[#f8fbfe] pt-8 sm:pt-12 pb-6 border-b border-slate-100`,children:(0,j.jsx)(`div`,{className:`max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8`,children:(0,j.jsxs)($.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,j.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d6e6f5] text-[#1455A0] text-xs font-extrabold tracking-widest uppercase mb-4 shadow-sm`,children:[(0,j.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#18B8D4]`}),c.country]}),(0,j.jsx)(`h1`,{className:`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2D5C] leading-tight`,children:c.name}),(0,j.jsxs)(`div`,{className:`mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-500 font-medium`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,j.jsx)(Or,{size:15,className:`text-[#18B8D4] shrink-0`}),(0,j.jsx)(`span`,{children:f})]}),s.established&&(0,j.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,j.jsx)(ir,{size:15,className:`text-[#18B8D4]`}),(0,j.jsxs)(`span`,{children:[`Established`,` `,s.established]})]}),s.duration&&(0,j.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,j.jsx)(pr,{size:15,className:`text-[#18B8D4]`}),(0,j.jsx)(`span`,{children:s.duration})]})]}),(0,j.jsxs)(`div`,{className:`mt-4 flex flex-wrap gap-2`,children:[s.type&&(0,j.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#eef7fc] text-[#0B2D5C] border border-[#d2e7f8]`,children:[(0,j.jsx)(rr,{size:12}),s.type]}),s.recognition&&(0,j.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e6faf0] text-[#047857] border border-[#a7f3d0]`,children:[(0,j.jsx)(Ir,{size:12}),s.recognition]})]})]})})}),(0,j.jsx)(`main`,{className:`max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10`,children:(0,j.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`,children:[(0,j.jsxs)($.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.1},className:`lg:col-span-8 space-y-6 sm:space-y-8`,children:[(0,j.jsx)(`div`,{className:`bg-white rounded-2xl sm:rounded-3xl border border-[#e2edf8] shadow-[0_8px_30px_rgba(11,45,92,0.03)] overflow-hidden`,children:(0,j.jsx)(`div`,{className:`relative aspect-[16/9] w-full overflow-hidden bg-[#f0f6fc]`,children:d?(0,j.jsx)(`img`,{src:d,alt:c.name,onError:()=>{if(u&&u!==l){n(!0);return}n(!0)},className:`w-full h-full object-cover`}):(0,j.jsxs)(`div`,{className:`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B2D5C] to-[#1455A0] text-white p-8 text-center`,children:[(0,j.jsx)(rr,{size:48,className:`text-[#18B8D4] mb-3`}),(0,j.jsx)(`h3`,{className:`text-xl font-bold`,children:c.name}),(0,j.jsx)(`p`,{className:`text-sm text-cyan-200 mt-1`,children:c.country})]})})}),s.description&&(0,j.jsx)(Qh,{title:`University Overview`,icon:tr,children:(0,j.jsx)(`p`,{className:`text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line`,children:s.description})}),s.highlights?.length>0&&(0,j.jsx)(Qh,{title:`Key Highlights`,icon:lr,children:(0,j.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:s.highlights.map((e,t)=>(0,j.jsxs)(`div`,{className:`flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100`,children:[(0,j.jsx)(lr,{size:17,className:`text-[#18B8D4] shrink-0 mt-0.5`}),(0,j.jsx)(`span`,{className:`text-sm text-slate-600`,children:e})]},t))})}),s.advantages?.length>0&&(0,j.jsx)(Qh,{title:`Advantages`,icon:Ir,children:(0,j.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:s.advantages.map((e,t)=>(0,j.jsxs)(`div`,{className:`flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100`,children:[(0,j.jsx)(lr,{size:17,className:`text-[#18B8D4] shrink-0 mt-0.5`}),(0,j.jsx)(`span`,{className:`text-sm text-slate-600`,children:e})]},t))})}),s.courseStructure?.length>0&&(0,j.jsxs)(Qh,{title:`Course Structure`,icon:yr,children:[s.courseStructureDescription&&(0,j.jsx)(`p`,{className:`text-sm text-slate-600 leading-relaxed mb-5`,children:s.courseStructureDescription}),(0,j.jsx)(`div`,{className:`space-y-3`,children:s.courseStructure.map((e,t)=>(0,j.jsx)(`div`,{className:`rounded-xl border border-slate-100 bg-slate-50 p-4`,children:(0,j.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0`,children:(0,j.jsx)(tr,{size:17})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`text-sm font-extrabold text-[#0B2D5C]`,children:e.year}),(0,j.jsx)(`p`,{className:`mt-1 text-sm text-slate-600 leading-relaxed`,children:e.description})]})]})},t))})]}),Zh(s)&&(0,j.jsx)(Qh,{title:`Year-wise Tuition`,icon:Hr,children:(0,j.jsx)(`div`,{className:`overflow-x-auto -mx-1 px-1`,children:(0,j.jsxs)(`table`,{className:`w-full min-w-[520px] border-collapse`,children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{className:`border-b border-slate-200`,children:[(0,j.jsx)(`th`,{className:`px-3 py-3 text-left text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wide`,children:`Year`}),(0,j.jsx)(`th`,{className:`px-3 py-3 text-right text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wide`,children:`College Fees`}),(0,j.jsx)(`th`,{className:`px-3 py-3 text-right text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wide`,children:`Hostel + Mess`})]})}),(0,j.jsx)(`tbody`,{children:Array.from({length:h}).map((e,t)=>{let n=t+1,r=Yh(s,n),i=Xh(s);return!r&&!i?null:(0,j.jsxs)(`tr`,{className:`border-b border-slate-100 last:border-0`,children:[(0,j.jsx)(`td`,{className:`px-3 py-4 text-sm font-extrabold text-[#0B2D5C] whitespace-nowrap`,children:qh(n)}),(0,j.jsx)(`td`,{className:`px-3 py-4 text-right text-sm font-bold text-[#1455A0] whitespace-nowrap`,children:r?(0,j.jsx)(Gh,{value:r}):`—`}),(0,j.jsx)(`td`,{className:`px-3 py-4 text-right text-sm font-bold text-[#1455A0] whitespace-nowrap`,children:i||`—`})]},n)})})]})})}),s.fees&&(0,j.jsxs)(Qh,{title:`Fee Structure`,icon:Hr,children:[(0,j.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-4`,children:Object.entries(s.fees).map(([e,t])=>(0,j.jsxs)(`div`,{className:`rounded-xl bg-slate-50 border border-slate-100 p-4`,children:[(0,j.jsx)(`span`,{className:`block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1`,children:e.replace(/([A-Z])/g,` $1`).trim()}),(0,j.jsx)(`div`,{className:`text-sm font-bold text-[#0B2D5C]`,children:(0,j.jsx)(Gh,{value:t})})]},e))}),s.feeNote&&(0,j.jsx)(`p`,{className:`mt-5 text-xs sm:text-sm text-slate-500 leading-relaxed bg-[#f8fbfe] rounded-xl p-4 border border-[#e2edf8]`,children:s.feeNote})]}),s.recognitionDetails?.length>0&&(0,j.jsx)(Qh,{title:`Recognition & Accreditation`,icon:Ir,children:(0,j.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:s.recognitionDetails.map((e,t)=>(0,j.jsxs)(`div`,{className:`flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100`,children:[(0,j.jsx)(lr,{size:17,className:`text-[#18B8D4] shrink-0 mt-0.5`}),(0,j.jsx)(`span`,{className:`text-sm text-slate-600`,children:e})]},t))})}),s.campusFacilities?.length>0&&(0,j.jsx)(Qh,{title:`Campus Facilities`,icon:rr,children:(0,j.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:s.campusFacilities.map((e,t)=>(0,j.jsxs)(`div`,{className:`flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100`,children:[(0,j.jsx)(lr,{size:17,className:`text-[#18B8D4] shrink-0 mt-0.5`}),(0,j.jsx)(`span`,{className:`text-sm text-slate-600`,children:e})]},t))})}),s.hostelFacilities?.length>0&&(0,j.jsx)(Qh,{title:`Hostel Facilities`,icon:rr,children:(0,j.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:s.hostelFacilities.map((e,t)=>(0,j.jsxs)(`div`,{className:`flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100`,children:[(0,j.jsx)(lr,{size:17,className:`text-[#18B8D4] shrink-0 mt-0.5`}),(0,j.jsx)(`span`,{className:`text-sm text-slate-600`,children:e})]},t))})}),s.staff?.length>0&&(0,j.jsx)(Qh,{title:`Staff`,icon:yr,children:(0,j.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4`,children:s.staff.map((e,t)=>(0,j.jsxs)(`div`,{className:`rounded-2xl overflow-hidden bg-slate-50 border border-slate-100`,children:[e.image&&(0,j.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`,className:`w-full aspect-square object-cover`}),(0,j.jsxs)(`div`,{className:`p-3`,children:[(0,j.jsx)(`p`,{className:`text-sm font-bold text-[#0B2D5C] leading-snug`,children:e.name}),(0,j.jsx)(`p`,{className:`mt-1 text-xs text-slate-500 leading-5`,children:e.role})]})]},`${e.name}-${t}`))})}),m.length>0&&(0,j.jsx)(Qh,{title:`University Gallery`,icon:Cr,children:(0,j.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-3 gap-3`,children:m.map((e,t)=>(0,j.jsx)(`button`,{type:`button`,onClick:()=>i(e),className:`group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 aspect-[4/3]`,children:(0,j.jsx)(`img`,{src:e,alt:`${c.name} gallery ${t+1}`,loading:`lazy`,className:`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105`})},`${e}-${t}`))})}),s.faqs?.length>0&&(0,j.jsx)(Qh,{title:`Frequently Asked Questions`,icon:ur,children:(0,j.jsx)(`div`,{className:`space-y-3`,children:s.faqs.map((e,t)=>(0,j.jsxs)(`details`,{className:`group rounded-xl border border-slate-100 bg-slate-50 p-4`,children:[(0,j.jsxs)(`summary`,{className:`cursor-pointer list-none flex items-start justify-between gap-4`,children:[(0,j.jsx)(`span`,{className:`text-sm font-bold text-[#0B2D5C]`,children:e.q}),(0,j.jsx)(`span`,{className:`text-[#18B8D4] text-lg leading-none`,children:`+`})]}),(0,j.jsx)(`p`,{className:`mt-3 text-sm text-slate-600 leading-relaxed`,children:e.a})]},t))})})]}),(0,j.jsxs)($.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.15},className:`lg:col-span-4 lg:sticky lg:top-24 space-y-5`,children:[(0,j.jsxs)(`div`,{className:`bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#e2edf8] shadow-[0_8px_30px_rgba(11,45,92,0.04)]`,children:[(0,j.jsx)(`h3`,{className:`text-lg sm:text-xl font-bold text-[#0B2D5C]`,children:`Quick Information`}),(0,j.jsx)(`div`,{className:`w-10 h-1 bg-[#18B8D4] rounded mt-2 mb-5`}),(0,j.jsxs)(`div`,{className:`space-y-3`,children:[s.course&&(0,j.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0`,children:(0,j.jsx)(yr,{size:18})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`block text-[10px] text-slate-400 font-bold uppercase tracking-wider`,children:`Course`}),(0,j.jsx)(`span`,{className:`text-sm font-bold text-[#0B2D5C]`,children:s.course})]})]}),(s.duration||s.courseDuration)&&(0,j.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0`,children:(0,j.jsx)(pr,{size:18})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`block text-[10px] text-slate-400 font-bold uppercase tracking-wider`,children:`Duration`}),(0,j.jsx)(`span`,{className:`text-sm font-bold text-[#0B2D5C]`,children:s.duration||s.courseDuration})]})]}),s.medium&&(0,j.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0`,children:(0,j.jsx)(tr,{size:18})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`block text-[10px] text-slate-400 font-bold uppercase tracking-wider`,children:`Medium`}),(0,j.jsx)(`span`,{className:`text-sm font-bold text-[#0B2D5C]`,children:s.medium})]})]}),s.admission&&(0,j.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0`,children:(0,j.jsx)(ur,{size:18})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`block text-[10px] text-slate-400 font-bold uppercase tracking-wider`,children:`Admission`}),(0,j.jsx)(`span`,{className:`text-sm font-bold text-[#0B2D5C]`,children:s.admission})]})]}),s.eligibility&&(0,j.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0`,children:(0,j.jsx)(ur,{size:18})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`block text-[10px] text-slate-400 font-bold uppercase tracking-wider`,children:`Eligibility`}),(0,j.jsx)(`span`,{className:`text-sm font-bold text-[#0B2D5C]`,children:s.eligibility})]})]}),s.annualTuitionFee&&(0,j.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100`,children:[(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-[#eef7fc] text-[#1455A0] flex items-center justify-center shrink-0`,children:(0,j.jsx)(Hr,{size:18})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`block text-[10px] text-slate-400 font-bold uppercase tracking-wider`,children:`Annual Tuition`}),(0,j.jsx)(`span`,{className:`text-sm font-bold text-[#0B2D5C]`,children:(0,j.jsx)(Gh,{value:s.annualTuitionFee})})]})]})]})]}),(0,j.jsxs)(`div`,{className:`bg-[#0B2D5C] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#0F366D] shadow-[0_8px_30px_rgba(11,45,92,0.15)] relative overflow-hidden`,children:[(0,j.jsx)(`div`,{className:`absolute -right-16 -bottom-16 w-36 h-36 rounded-full bg-white/5 pointer-events-none`}),(0,j.jsx)(`h3`,{className:`text-lg sm:text-xl font-bold tracking-tight`,children:`Interested in this University?`}),(0,j.jsx)(`p`,{className:`text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed`,children:`Connect directly with our counseling experts to get complete guidance on admission eligibility, fee structures, and application procedures.`}),(0,j.jsxs)(`div`,{className:`mt-6 space-y-3.5`,children:[(0,j.jsxs)(jn,{to:`/contact`,className:`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-[#0B2D5C] text-xs sm:text-sm font-bold shadow-md transition-all duration-200`,children:[(0,j.jsx)(yr,{size:16}),`Get Free Guidance`]}),(0,j.jsxs)(`a`,{href:`https://wa.me/919876543210?text=${p}`,target:`_blank`,rel:`noopener noreferrer`,className:`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-200`,children:[(0,j.jsx)(A,{size:16}),`WhatsApp Consultation`]})]})]})]})]})}),r&&(0,j.jsx)(`div`,{className:`fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4`,onClick:()=>i(null),children:(0,j.jsxs)(`div`,{className:`relative max-w-6xl w-full max-h-[90vh]`,onClick:e=>e.stopPropagation(),children:[(0,j.jsx)(`img`,{src:r,alt:c.name,className:`w-full max-h-[85vh] object-contain rounded-2xl`}),(0,j.jsx)(`button`,{type:`button`,onClick:()=>i(null),className:`absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition`,"aria-label":`Close gallery`,children:`×`})]})})]})}function eg(){return(0,j.jsxs)(An,{children:[(0,j.jsx)(Tm,{}),(0,j.jsx)(Jr,{}),(0,j.jsx)(hm,{}),(0,j.jsxs)(Ut,{children:[(0,j.jsx)(Vt,{path:`/`,element:(0,j.jsx)(eh,{})}),(0,j.jsx)(Vt,{path:`/about`,element:(0,j.jsx)(ch,{})}),(0,j.jsx)(Vt,{path:`/programs`,element:(0,j.jsx)(lh,{})}),(0,j.jsx)(Vt,{path:`/admissions`,element:(0,j.jsx)(mh,{})}),(0,j.jsx)(Vt,{path:`/gallery`,element:(0,j.jsx)(yh,{})}),(0,j.jsx)(Vt,{path:`/contact`,element:(0,j.jsx)(Ih,{})}),(0,j.jsx)(Vt,{path:`/university/:universityId`,element:(0,j.jsx)($h,{})})]}),(0,j.jsx)(Sm,{}),(0,j.jsx)(Cm,{}),(0,j.jsx)(wm,{})]})}qr.createRoot(document.getElementById(`root`)).render((0,j.jsx)(x.StrictMode,{children:(0,j.jsx)(eg,{})}));