var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!ee.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function T(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function E(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?E(``+e.key):t.toString(36)}function O(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+D(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ne,`$&/`)+`/`),O(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=T(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+D(s,l);c+=O(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+D(s,l++),c+=O(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function k(e,t,n){if(e==null)return e;var r=[],i=0;return O(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var A={current:null},j={transition:null},ie={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:j,ReactCurrentOwner:C};e.Children={map:k,forEach:function(e,t,n){k(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return k(e,function(){t++}),t},toArray:function(e){return k(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!ee.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=w,e.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=j.transition;j.transition={};try{e()}finally{j.transition=t}},e.unstable_act=function(){throw Error(`act(...) is not supported in production builds of React.`)},e.useCallback=function(e,t){return A.current.useCallback(e,t)},e.useContext=function(e){return A.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return A.current.useDeferredValue(e)},e.useEffect=function(e,t){return A.current.useEffect(e,t)},e.useId=function(){return A.current.useId()},e.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return A.current.useMemo(e,t)},e.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},e.useRef=function(e){return A.current.useRef(e)},e.useState=function(e){return A.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return A.current.useTransition()},e.version=`18.2.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,k(x);else{var t=n(l);t!==null&&re(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(ee),ee=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&re(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,ee=-1,w=5,T=-1;function te(){return!(e.unstable_now()-T<w)}function E(){if(C!==null){var t=e.unstable_now();T=t;var n=!0;try{n=C(!0,t)}finally{n?ne():(S=!1,C=null)}}else S=!1}var ne;if(typeof v==`function`)ne=function(){v(E)};else if(typeof MessageChannel<`u`){var D=new MessageChannel,O=D.port2;D.port1.onmessage=E,ne=function(){O.postMessage(null)}}else ne=function(){g(E,0)};function k(e){C=e,S||(S=!0,ne())}function re(t,n){ee=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,k(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(ee),ee=-1):h=!0,re(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,k(x))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d(),n=p();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e){return l.call(m,e)?!0:l.call(f,e)?!1:u.test(e)?m[e]=!0:(f[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for(`react.element`),w=Symbol.for(`react.portal`),T=Symbol.for(`react.fragment`),te=Symbol.for(`react.strict_mode`),E=Symbol.for(`react.profiler`),ne=Symbol.for(`react.provider`),D=Symbol.for(`react.context`),O=Symbol.for(`react.forward_ref`),k=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),A=Symbol.for(`react.memo`),j=Symbol.for(`react.lazy`),ie=Symbol.for(`react.offscreen`),ae=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Object.assign,P;function oe(e){if(P===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||``}return`
`+P+e}var se=!1;function ce(e,t){if(!e||se)return``;se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{se=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?oe(e):``}function le(e){switch(e.tag){case 5:return oe(e.type);case 16:return oe(`Lazy`);case 13:return oe(`Suspense`);case 19:return oe(`SuspenseList`);case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return``}}function ue(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case T:return`Fragment`;case w:return`Portal`;case E:return`Profiler`;case te:return`StrictMode`;case k:return`Suspense`;case re:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case D:return(e.displayName||`Context`)+`.Consumer`;case ne:return(e._context.displayName||`Context`)+`.Provider`;case O:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case A:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case j:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ue(t);case 8:return t===te?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function fe(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function me(e){var t=pe(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function he(e){e._valueTracker||=me(e)}function ge(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=pe(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function _e(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function ve(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ye(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=fe(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function be(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function xe(e,t){be(e,t);var n=fe(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ce(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ce(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Se(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ce(e,t,n){(t!==`number`||_e(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var we=Array.isArray;function Te(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+fe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ee(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return N({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function De(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(we(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:fe(n)}}function Oe(e,t){var n=fe(t.value),r=fe(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function ke(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Ae(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function je(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Ae(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Me,Ne=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Me||=document.createElement(`div`),Me.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Fe).forEach(function(e){Ie.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fe[t]=Fe[e]})});function Le(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Fe.hasOwnProperty(e)&&Fe[e]?(``+t).trim():t+`px`}function Re(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Le(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var ze=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(e,t){if(t){if(ze[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ve(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var He=null;function Ue(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var We=null,Ge=null,Ke=null;function qe(e){if(e=Ii(e)){if(typeof We!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ri(t),We(e.stateNode,e.type,t))}}function Je(e){Ge?Ke?Ke.push(e):Ke=[e]:Ge=e}function Ye(){if(Ge){var e=Ge,t=Ke;if(Ke=Ge=null,qe(e),t)for(e=0;e<t.length;e++)qe(t[e])}}function Xe(e,t){return e(t)}function Ze(){}var Qe=!1;function $e(e,t,n){if(Qe)return e(t,n);Qe=!0;try{return Xe(e,t,n)}finally{Qe=!1,(Ge!==null||Ke!==null)&&(Ze(),Ye())}}function F(e,t){var n=e.stateNode;if(n===null)return null;var i=Ri(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var et=!1;if(c)try{var tt={};Object.defineProperty(tt,`passive`,{get:function(){et=!0}}),window.addEventListener(`test`,tt,tt),window.removeEventListener(`test`,tt,tt)}catch{et=!1}function nt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var rt=!1,it=null,at=!1,ot=null,st={onError:function(e){rt=!0,it=e}};function ct(e,t,n,r,i,a,o,s,c){rt=!1,it=null,nt.apply(st,arguments)}function lt(e,t,n,i,a,o,s,c,l){if(ct.apply(this,arguments),rt){if(rt){var u=it;rt=!1,it=null}else throw Error(r(198));at||(at=!0,ot=u)}}function ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ft(e){if(ut(e)!==e)throw Error(r(188))}function pt(e){var t=e.alternate;if(!t){if(t=ut(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ft(a),e;if(o===i)return ft(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function mt(e){return e=pt(e),e===null?null:ht(e)}function ht(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ht(e);if(t!==null)return t;e=e.sibling}return null}var gt=n.unstable_scheduleCallback,_t=n.unstable_cancelCallback,vt=n.unstable_shouldYield,yt=n.unstable_requestPaint,I=n.unstable_now,bt=n.unstable_getCurrentPriorityLevel,xt=n.unstable_ImmediatePriority,St=n.unstable_UserBlockingPriority,Ct=n.unstable_NormalPriority,R=n.unstable_LowPriority,wt=n.unstable_IdlePriority,Tt=null,Et=null;function Dt(e){if(Et&&typeof Et.onCommitFiberRoot==`function`)try{Et.onCommitFiberRoot(Tt,e,void 0,(e.current.flags&128)==128)}catch{}}var Ot=Math.clz32?Math.clz32:At,z=Math.log,kt=Math.LN2;function At(e){return e>>>=0,e===0?32:31-(z(e)/kt|0)|0}var jt=64,Mt=4194304;function Nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Nt(a))):r=Nt(s)}else o=n&~i,o===0?a!==0&&(r=Nt(a)):r=Nt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function Ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ot(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ft(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Lt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Rt(){var e=jt;return jt<<=1,!(jt&4194240)&&(jt=64),e}function zt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Vt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ht(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Ut(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wt,Gt,Kt,qt,Jt,Yt=!1,V=[],Xt=null,H=null,Zt=null,Qt=new Map,$t=new Map,en=[],tn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function nn(e,t){switch(e){case`focusin`:case`focusout`:Xt=null;break;case`dragenter`:case`dragleave`:H=null;break;case`mouseover`:case`mouseout`:Zt=null;break;case`pointerover`:case`pointerout`:Qt.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:$t.delete(t.pointerId)}}function rn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&Gt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function an(e,t,n,r,i){switch(t){case`focusin`:return Xt=rn(Xt,e,t,n,r,i),!0;case`dragenter`:return H=rn(H,e,t,n,r,i),!0;case`mouseover`:return Zt=rn(Zt,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Qt.set(a,rn(Qt.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,$t.set(a,rn($t.get(a)||null,e,t,n,r,i)),!0}return!1}function on(e){var t=Fi(e.target);if(t!==null){var n=ut(t);if(n!==null){if(t=n.tag,t===13){if(t=dt(n),t!==null){e.blockedOn=t,Jt(e.priority,function(){Kt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_n(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);He=r,n.target.dispatchEvent(r),He=null}else return t=Ii(n),t!==null&&Gt(t),e.blockedOn=n,!1;t.shift()}return!0}function cn(e,t,n){sn(e)&&n.delete(t)}function ln(){Yt=!1,Xt!==null&&sn(Xt)&&(Xt=null),H!==null&&sn(H)&&(H=null),Zt!==null&&sn(Zt)&&(Zt=null),Qt.forEach(cn),$t.forEach(cn)}function un(e,t){e.blockedOn===t&&(e.blockedOn=null,Yt||(Yt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ln)))}function dn(e){function t(t){return un(t,e)}if(0<V.length){un(V[0],e);for(var n=1;n<V.length;n++){var r=V[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&un(Xt,e),H!==null&&un(H,e),Zt!==null&&un(Zt,e),Qt.forEach(t),$t.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)on(n),n.blockedOn===null&&en.shift()}var fn=C.ReactCurrentBatchConfig,pn=!0;function U(e,t,n,r){var i=B,a=fn.transition;fn.transition=null;try{B=1,hn(e,t,n,r)}finally{B=i,fn.transition=a}}function mn(e,t,n,r){var i=B,a=fn.transition;fn.transition=null;try{B=4,hn(e,t,n,r)}finally{B=i,fn.transition=a}}function hn(e,t,n,r){if(pn){var i=_n(e,t,n,r);if(i===null)ci(e,t,r,gn,n),nn(e,r);else if(an(i,e,t,n,r))r.stopPropagation();else if(nn(e,r),t&4&&-1<tn.indexOf(e)){for(;i!==null;){var a=Ii(i);if(a!==null&&Wt(a),a=_n(e,t,n,r),a===null&&ci(e,t,r,gn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ci(e,t,r,null,n)}}var gn=null;function _n(e,t,n,r){if(gn=null,e=Ue(r),e=Fi(e),e!==null)if(t=ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gn=e,null}function vn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(bt()){case xt:return 1;case St:return 4;case Ct:case R:return 16;case wt:return 536870912;default:return 16}default:return 16}}var W=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in W?W.value:W.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=N({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=N({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(N({},Nn,{dataTransfer:0})),In=Tn(N({},On,{relatedTarget:0})),Ln=Tn(N({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(N({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(N({},En,{data:0})),G={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=Tn(N({},On,{key:function(e){if(e.key){var t=G[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=Tn(N({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=Tn(N({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=Tn(N({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=Tn(N({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=[9,13,27,32],Xn=c&&`CompositionEvent`in window,Zn=null;c&&`documentMode`in document&&(Zn=document.documentMode);var Qn=c&&`TextEvent`in window&&!Zn,$n=c&&(!Xn||Zn&&8<Zn&&11>=Zn),er=` `,tr=!1;function nr(e,t){switch(e){case`keyup`:return Yn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function rr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ir=!1;function ar(e,t){switch(e){case`compositionend`:return rr(t);case`keypress`:return t.which===32?(tr=!0,er):null;case`textInput`:return e=t.data,e===er&&tr?null:e;default:return null}}function or(e,t){if(ir)return e===`compositionend`||!Xn&&nr(e,t)?(e=xn(),bn=yn=W=null,ir=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return $n&&t.locale!==`ko`?null:t.data;default:return null}}var sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!sr[e.type]:t===`textarea`}function lr(e,t,n,r){Je(r),t=ui(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ur=null,dr=null;function fr(e){ri(e,0)}function pr(e){if(ge(Li(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(c){var gr;if(c){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){ur&&(ur.detachEvent(`onpropertychange`,br),dr=ur=null)}function br(e){if(e.propertyName===`value`&&pr(dr)){var t=[];lr(t,dr,e,Ue(e)),$e(fr,t)}}function xr(e,t,n){e===`focusin`?(yr(),ur=t,dr=n,ur.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(dr)}function Cr(e,t){if(e===`click`)return pr(t)}function wr(e,t){if(e===`input`||e===`change`)return pr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(){for(var e=window,t=_e();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=_e(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Nr(e){var t=jr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ar(n.ownerDocument.documentElement,n)){if(r!==null&&Mr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=kr(n,a);var o=kr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pr=c&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==_e(r)||(r=Fr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Dr(Lr,r)||(Lr=r,r=ui(Ir,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};c&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionend`),Yr=new Map,Xr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function Zr(e,t){Yr.set(e,t),o(t,[e])}for(var Qr=0;Qr<Xr.length;Qr++){var $r=Xr[Qr];Zr($r.toLowerCase(),`on`+($r[0].toUpperCase()+$r.slice(1)))}Zr(Gr,`onAnimationEnd`),Zr(Kr,`onAnimationIteration`),Zr(qr,`onAnimationStart`),Zr(`dblclick`,`onDoubleClick`),Zr(`focusin`,`onFocus`),Zr(`focusout`,`onBlur`),Zr(Jr,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ei=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ti=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ei));function ni(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,lt(r,t,void 0,e),e.currentTarget=null}function ri(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ni(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ni(i,s,l),a=c}}}if(at)throw e=ot,at=!1,ot=null,e}function K(e,t){var n=t[Mi];n===void 0&&(n=t[Mi]=new Set);var r=e+`__bubble`;n.has(r)||(si(t,e,2,!1),n.add(r))}function ii(e,t,n){var r=0;t&&(r|=4),si(n,e,r,t)}var ai=`_reactListening`+Math.random().toString(36).slice(2);function oi(e){if(!e[ai]){e[ai]=!0,i.forEach(function(t){t!==`selectionchange`&&(ti.has(t)||ii(t,!1,e),ii(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,ii(`selectionchange`,!1,t))}}function si(e,t,n,r){switch(vn(t)){case 1:var i=U;break;case 4:i=mn;break;default:i=hn}n=i.bind(null,t,n,e),i=void 0,!et||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function ci(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Fi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}$e(function(){var r=a,i=Ue(n),o=[];a:{var s=Yr.get(e);if(s!==void 0){var c=Dn,l=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:c=Wn;break;case`focusin`:l=`focus`,c=In;break;case`focusout`:l=`blur`,c=In;break;case`beforeblur`:case`afterblur`:c=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Kn;break;case Gr:case Kr:case qr:c=Ln;break;case Jr:c=qn;break;case`scroll`:c=kn;break;case`wheel`:c=Jn;break;case`copy`:case`cut`:case`paste`:c=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Gn}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=F(p,f),h!=null&&u.push(li(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==He&&(l=n.relatedTarget||n.fromElement)&&(Fi(l)||l[ji]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Fi(l):null,l!==null&&(d=ut(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Pn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Gn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Li(c),m=l==null?s:Li(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Fi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=di(m))p++;for(m=0,h=f;h;h=di(h))m++;for(;0<p-m;)u=di(u),p--;for(;0<m-p;)f=di(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=di(u),f=di(f)}u=null}else u=null;c!==null&&fi(o,s,c,u,!1),l!==null&&d!==null&&fi(o,d,l,u,!0)}}a:{if(s=r?Li(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=mr;else if(cr(s))if(hr)g=wr;else{g=Sr;var _=xr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Cr);if(g&&=g(e,r)){lr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Ce(s,`number`,s.value)}switch(_=r?Li(r):window,e){case`focusin`:(cr(_)||_.contentEditable===`true`)&&(Fr=_,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(o,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(o,n,i)}var v;if(Xn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else ir?nr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&($n&&n.locale!==`ko`&&(ir||y!==`onCompositionStart`?y===`onCompositionEnd`&&ir&&(v=xn()):(W=i,yn=`value`in W?W.value:W.textContent,ir=!0)),_=ui(r,y),0<_.length&&(y=new zn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=rr(n),v!==null&&(y.data=v)))),(v=Qn?ar(e,n):or(e,n))&&(r=ui(r,`onBeforeInput`),0<r.length&&(i=new zn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ri(o,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ui(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=F(e,n),a!=null&&r.unshift(li(e,a,i)),a=F(e,t),a!=null&&r.push(li(e,a,i))),e=e.return}return r}function di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=F(n,a),c!=null&&o.unshift(li(n,c,s))):i||(c=F(n,a),c!=null&&o.push(li(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var pi=/\r\n?/g,mi=/\u0000|\uFFFD/g;function hi(e){return(typeof e==`string`?e:``+e).replace(pi,`
`).replace(mi,``)}function gi(e,t,n){if(t=hi(t),hi(e)!==t&&n)throw Error(r(425))}function _i(){}var vi=null,yi=null;function bi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout==`function`?setTimeout:void 0,Si=typeof clearTimeout==`function`?clearTimeout:void 0,Ci=typeof Promise==`function`?Promise:void 0,wi=typeof queueMicrotask==`function`?queueMicrotask:Ci===void 0?xi:function(e){return Ci.resolve(null).then(e).catch(Ti)};function Ti(e){setTimeout(function(){throw e})}function Ei(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),dn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);dn(t)}function q(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Di(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Oi=Math.random().toString(36).slice(2),ki=`__reactFiber$`+Oi,Ai=`__reactProps$`+Oi,ji=`__reactContainer$`+Oi,Mi=`__reactEvents$`+Oi,Ni=`__reactListeners$`+Oi,Pi=`__reactHandles$`+Oi;function Fi(e){var t=e[ki];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ji]||n[ki]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Di(e);e!==null;){if(n=e[ki])return n;e=Di(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[ki]||e[ji],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Li(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ri(e){return e[Ai]||null}var zi=[],Bi=-1;function Vi(e){return{current:e}}function Hi(e){0>Bi||(e.current=zi[Bi],zi[Bi]=null,Bi--)}function Ui(e,t){Bi++,zi[Bi]=e.current,e.current=t}var J={},Wi=Vi(J),Gi=Vi(!1),Ki=J;function qi(e,t){var n=e.type.contextTypes;if(!n)return J;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ji(e){return e=e.childContextTypes,e!=null}function Yi(){Hi(Gi),Hi(Wi)}function Xi(e,t,n){if(Wi.current!==J)throw Error(r(168));Ui(Wi,t),Ui(Gi,n)}function Zi(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,de(e)||`Unknown`,a));return N({},n,i)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||J,Ki=Wi.current,Ui(Wi,e),Ui(Gi,Gi.current),!0}function $i(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=Zi(e,t,Ki),i.__reactInternalMemoizedMergedChildContext=e,Hi(Gi),Hi(Wi),Ui(Wi,e)):Hi(Gi),Ui(Gi,n)}var ea=null,ta=!1,na=!1;function ra(e){ea===null?ea=[e]:ea.push(e)}function ia(e){ta=!0,ra(e)}function aa(){if(!na&&ea!==null){na=!0;var e=0,t=B;try{var n=ea;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ea=null,ta=!1}catch(t){throw ea!==null&&(ea=ea.slice(e+1)),gt(xt,aa),t}finally{B=t,na=!1}}return null}var oa=[],sa=0,ca=null,la=0,Y=[],ua=0,da=null,fa=1,pa=``;function ma(e,t){oa[sa++]=la,oa[sa++]=ca,ca=e,la=t}function ha(e,t,n){Y[ua++]=fa,Y[ua++]=pa,Y[ua++]=da,da=e;var r=fa;e=pa;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var a=32-Ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fa=1<<32-Ot(t)+i|n<<i|r,pa=a+e}else fa=1<<a|n<<i|r,pa=e}function ga(e){e.return!==null&&(ma(e,1),ha(e,1,0))}function _a(e){for(;e===ca;)ca=oa[--sa],oa[sa]=null,la=oa[--sa],oa[sa]=null;for(;e===da;)da=Y[--ua],Y[ua]=null,pa=Y[--ua],Y[ua]=null,fa=Y[--ua],Y[ua]=null}var va=null,ya=null,ba=!1,xa=null;function Sa(e,t){var n=Jl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ca(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,va=e,ya=q(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,va=e,ya=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=da===null?null:{id:fa,overflow:pa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,va=e,ya=null,!0);default:return!1}}function wa(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Ta(e){if(ba){var t=ya;if(t){var n=t;if(!Ca(e,t)){if(wa(e))throw Error(r(418));t=q(n.nextSibling);var i=va;t&&Ca(e,t)?Sa(i,n):(e.flags=e.flags&-4097|2,ba=!1,va=e)}}else{if(wa(e))throw Error(r(418));e.flags=e.flags&-4097|2,ba=!1,va=e}}}function Ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;va=e}function Da(e){if(e!==va)return!1;if(!ba)return Ea(e),ba=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!bi(e.type,e.memoizedProps)),t&&=ya){if(wa(e))throw Oa(),Error(r(418));for(;t;)Sa(e,t),t=q(t.nextSibling)}if(Ea(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ya=q(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ya=null}}else ya=va?q(e.stateNode.nextSibling):null;return!0}function Oa(){for(var e=ya;e;)e=q(e.nextSibling)}function ka(){ya=va=null,ba=!1}function Aa(e){xa===null?xa=[e]:xa.push(e)}var ja=C.ReactCurrentBatchConfig;function Ma(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Na=Vi(null),Pa=null,Fa=null,Ia=null;function La(){Ia=Fa=Pa=null}function Ra(e){var t=Na.current;Hi(Na),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ba(e,t){Pa=e,Ia=Fa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Is=!0),e.firstContext=null)}function Va(e){var t=e._currentValue;if(Ia!==e)if(e={context:e,memoizedValue:t,next:null},Fa===null){if(Pa===null)throw Error(r(308));Fa=e,Pa.dependencies={lanes:0,firstContext:e}}else Fa=Fa.next=e;return t}var Ha=null;function Ua(e){Ha===null?Ha=[e]:Ha.push(e)}function Wa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ua(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ga(e,r)}function Ga(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ya(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ga(e,n)}return i=r.interleaved,i===null?(t.next=t,Ua(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ga(e,n)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ht(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $a(e,t,n,r){var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=N({},d,f);break a;case 2:Ka=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Xc|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var to=new t.Component().refs;function no(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=Ya(r,i);a.payload=t,n!=null&&(a.callback=n),t=Xa(e,a,i),t!==null&&(gl(t,e,i,r),Za(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=Ya(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Xa(e,a,i),t!==null&&(gl(t,e,i,r),Za(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ml(),r=hl(e),i=Ya(n,r);i.tag=2,t!=null&&(i.callback=t),t=Xa(e,i,r),t!==null&&(gl(t,e,r,n),Za(t,e,r))}};function io(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function ao(e,t,n){var r=!1,i=J,a=t.contextType;return typeof a==`object`&&a?a=Va(a):(i=Ji(t)?Ki:Wi.current,r=t.contextTypes,a=(r=r!=null)?qi(e,i):J),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function oo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function so(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=to,qa(e);var a=t.contextType;typeof a==`object`&&a?i.context=Va(a):(a=Ji(t)?Ki:Wi.current,i.context=qi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(no(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&ro.enqueueReplaceState(i,i.state,null),$a(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function co(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;t===to&&(t=a.refs={}),e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function uo(e){var t=e._init;return t(e._payload)}function fo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Zl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===T?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===j&&uo(i)===t.type)?(r=a(t,n.props),r.ref=co(e,t,n),r.return=e,r):(r=Ql(n.type,n.key,n.props,null,e.mode,r),r.ref=co(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=nu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=$l(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=tu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ee:return n=Ql(t.type,t.key,t.props,null,e.mode,n),n.ref=co(e,null,t),n.return=e,n;case w:return t=nu(t,e.mode,n),t.return=e,t;case j:var r=t._init;return f(e,r(t._payload),n)}if(we(t)||M(t))return t=$l(t,e.mode,n,null),t.return=e,t;lo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ee:return n.key===i?l(e,t,n,r):null;case w:return n.key===i?u(e,t,n,r):null;case j:return i=n._init,p(e,t,i(n._payload),r)}if(we(n)||M(n))return i===null?d(e,t,n,r,null):null;lo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ee:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case w:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case j:var a=r._init;return m(e,t,n,a(r._payload),i)}if(we(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);lo(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),ba&&ma(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return ba&&ma(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),ba&&ma(r,h),l}function g(a,s,c,l){var u=M(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),ba&&ma(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return ba&&ma(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),ba&&ma(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===T&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case ee:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===T){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===j&&uo(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=co(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===T?(r=$l(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Ql(i.type,i.key,i.props,null,e.mode,o),o.ref=co(e,r,i),o.return=e,e=o)}return s(e);case w:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=nu(i,e.mode,o),r.return=e,e=r}return s(e);case j:return l=i._init,_(e,r,l(i._payload),o)}if(we(i))return h(e,r,i,o);if(M(i))return g(e,r,i,o);lo(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=tu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var po=fo(!0),mo=fo(!1),ho={},go=Vi(ho),_o=Vi(ho),vo=Vi(ho);function yo(e){if(e===ho)throw Error(r(174));return e}function bo(e,t){switch(Ui(vo,t),Ui(_o,e),Ui(go,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:je(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=je(t,e)}Hi(go),Ui(go,t)}function xo(){Hi(go),Hi(_o),Hi(vo)}function So(e){yo(vo.current);var t=yo(go.current),n=je(t,e.type);t!==n&&(Ui(_o,e),Ui(go,n))}function Co(e){_o.current===e&&(Hi(go),Hi(_o))}var wo=Vi(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Eo=[];function Do(){for(var e=0;e<Eo.length;e++)Eo[e]._workInProgressVersionPrimary=null;Eo.length=0}var Oo=C.ReactCurrentDispatcher,ko=C.ReactCurrentBatchConfig,Ao=0,jo=null,Mo=null,No=null,Po=!1,Fo=!1,Io=0,Lo=0;function Ro(){throw Error(r(321))}function zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function Bo(e,t,n,i,a,o){if(Ao=o,jo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?Cs:ws,e=n(i,a),Fo){o=0;do{if(Fo=!1,Io=0,25<=o)throw Error(r(301));o+=1,No=Mo=null,t.updateQueue=null,Oo.current=Ts,e=n(i,a)}while(Fo)}if(Oo.current=Ss,t=Mo!==null&&Mo.next!==null,Ao=0,No=Mo=jo=null,Po=!1,t)throw Error(r(300));return e}function Vo(){var e=Io!==0;return Io=0,e}function Ho(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return No===null?jo.memoizedState=No=e:No=No.next=e,No}function Uo(){if(Mo===null){var e=jo.alternate;e=e===null?null:e.memoizedState}else e=Mo.next;var t=No===null?jo.memoizedState:No.next;if(t!==null)No=t,Mo=e;else{if(e===null)throw Error(r(310));Mo=e,e={memoizedState:Mo.memoizedState,baseState:Mo.baseState,baseQueue:Mo.baseQueue,queue:Mo.queue,next:null},No===null?jo.memoizedState=No=e:No=No.next=e}return No}function Wo(e,t){return typeof t==`function`?t(e):t}function Go(e){var t=Uo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Mo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Ao&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,jo.lanes|=d,Xc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Er(i,t.memoizedState)||(Is=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,jo.lanes|=o,Xc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ko(e){var t=Uo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Er(o,t.memoizedState)||(Is=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function qo(){}function Jo(e,t){var n=jo,i=Uo(),a=t(),o=!Er(i.memoizedState,a);if(o&&(i.memoizedState=a,Is=!0),i=i.queue,os(Zo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||No!==null&&No.memoizedState.tag&1){if(n.flags|=2048,ts(9,Xo.bind(null,n,i,a,t),void 0,null),Uc===null)throw Error(r(349));Ao&30||Yo(n,t,a)}return a}function Yo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=jo.updateQueue,t===null?(t={lastEffect:null,stores:null},jo.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xo(e,t,n,r){t.value=n,t.getSnapshot=r,Qo(t)&&$o(e)}function Zo(e,t,n){return n(function(){Qo(t)&&$o(e)})}function Qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function $o(e){var t=Ga(e,1);t!==null&&gl(t,e,1,-1)}function es(e){var t=Ho();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e},t.queue=e,e=e.dispatch=vs.bind(null,jo,e),[t.memoizedState,e]}function ts(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=jo.updateQueue,t===null?(t={lastEffect:null,stores:null},jo.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ns(){return Uo().memoizedState}function rs(e,t,n,r){var i=Ho();jo.flags|=e,i.memoizedState=ts(1|t,n,void 0,r===void 0?null:r)}function is(e,t,n,r){var i=Uo();r=r===void 0?null:r;var a=void 0;if(Mo!==null){var o=Mo.memoizedState;if(a=o.destroy,r!==null&&zo(r,o.deps)){i.memoizedState=ts(t,n,a,r);return}}jo.flags|=e,i.memoizedState=ts(1|t,n,a,r)}function as(e,t){return rs(8390656,8,e,t)}function os(e,t){return is(2048,8,e,t)}function ss(e,t){return is(4,2,e,t)}function cs(e,t){return is(4,4,e,t)}function ls(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){return n=n==null?null:n.concat([e]),is(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=Uo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=Uo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ms(e,t,n){return Ao&21?(Er(n,t)||(n=Rt(),jo.lanes|=n,Xc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Is=!0),e.memoizedState=n)}function hs(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ko.transition;ko.transition={};try{e(!1),t()}finally{B=n,ko.transition=r}}function gs(){return Uo().memoizedState}function _s(e,t,n){var r=hl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ys(e))bs(t,n);else if(n=Wa(e,t,n,r),n!==null){var i=ml();gl(n,e,r,i),xs(n,t,r)}}function vs(e,t,n){var r=hl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ys(e))bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o)){var c=t.interleaved;c===null?(i.next=i,Ua(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Wa(e,t,i,r),n!==null&&(i=ml(),gl(n,e,r,i),xs(n,t,r))}}function ys(e){var t=e.alternate;return e===jo||t!==null&&t===jo}function bs(e,t){Fo=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ht(e,n)}}var Ss={readContext:Va,useCallback:Ro,useContext:Ro,useEffect:Ro,useImperativeHandle:Ro,useInsertionEffect:Ro,useLayoutEffect:Ro,useMemo:Ro,useReducer:Ro,useRef:Ro,useState:Ro,useDebugValue:Ro,useDeferredValue:Ro,useTransition:Ro,useMutableSource:Ro,useSyncExternalStore:Ro,useId:Ro,unstable_isNewReconciler:!1},Cs={readContext:Va,useCallback:function(e,t){return Ho().memoizedState=[e,t===void 0?null:t],e},useContext:Va,useEffect:as,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),rs(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return rs(4,2,e,t)},useMemo:function(e,t){var n=Ho();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ho();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_s.bind(null,jo,e),[r.memoizedState,e]},useRef:function(e){var t=Ho();return e={current:e},t.memoizedState=e},useState:es,useDebugValue:ds,useDeferredValue:function(e){return Ho().memoizedState=e},useTransition:function(){var e=es(!1),t=e[0];return e=hs.bind(null,e[1]),Ho().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=jo,a=Ho();if(ba){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Uc===null)throw Error(r(349));Ao&30||Yo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,as(Zo.bind(null,i,o,e),[e]),i.flags|=2048,ts(9,Xo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Ho(),t=Uc.identifierPrefix;if(ba){var n=pa,r=fa;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Io++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Lo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ws={readContext:Va,useCallback:fs,useContext:Va,useEffect:os,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Go,useRef:ns,useState:function(){return Go(Wo)},useDebugValue:ds,useDeferredValue:function(e){return ms(Uo(),Mo.memoizedState,e)},useTransition:function(){return[Go(Wo)[0],Uo().memoizedState]},useMutableSource:qo,useSyncExternalStore:Jo,useId:gs,unstable_isNewReconciler:!1},Ts={readContext:Va,useCallback:fs,useContext:Va,useEffect:os,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Ko,useRef:ns,useState:function(){return Ko(Wo)},useDebugValue:ds,useDeferredValue:function(e){var t=Uo();return Mo===null?t.memoizedState=e:ms(t,Mo.memoizedState,e)},useTransition:function(){return[Ko(Wo)[0],Uo().memoizedState]},useMutableSource:qo,useSyncExternalStore:Jo,useId:gs,unstable_isNewReconciler:!1};function Es(e,t){try{var n=``,r=t;do n+=le(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Os(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ks=typeof WeakMap==`function`?WeakMap:Map;function As(e,t,n){n=Ya(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,al=r),Os(e,t)},n}function js(e,t,n){n=Ya(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Os(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Os(e,t),typeof r!=`function`&&(ol===null?ol=new Set([this]):ol.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ms(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ks;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vl.bind(null,e,t,n),t.then(e,e))}function Ns(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ps(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ya(-1,1),t.tag=2,Xa(n,t,1))),n.lanes|=1),e)}var Fs=C.ReactCurrentOwner,Is=!1;function Ls(e,t,n,r){t.child=e===null?mo(t,null,n,r):po(t,e.child,n,r)}function X(e,t,n,r,i){n=n.render;var a=t.ref;return Ba(t,i),r=Bo(e,t,n,r,a,i),n=Vo(),e!==null&&!Is?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nc(e,t,i)):(ba&&n&&ga(t),t.flags|=1,Ls(e,t,r,i),t.child)}function Z(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Yl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Rs(e,t,a,r,i)):(e=Ql(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return nc(e,t,i)}return t.flags|=1,e=Zl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Rs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref)if(Is=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Is=!0);else return t.lanes=e.lanes,nc(e,t,i)}return Vs(e,t,n,r,i)}function zs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ui(qc,Kc),Kc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ui(qc,Kc),Kc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,Ui(qc,Kc),Kc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Ui(qc,Kc),Kc|=r;return Ls(e,t,i,n),t.child}function Bs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vs(e,t,n,r,i){var a=Ji(n)?Ki:Wi.current;return a=qi(t,a),Ba(t,i),n=Bo(e,t,n,r,a,i),r=Vo(),e!==null&&!Is?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nc(e,t,i)):(ba&&r&&ga(t),t.flags|=1,Ls(e,t,n,i),t.child)}function Hs(e,t,n,r,i){if(Ji(n)){var a=!0;Qi(t)}else a=!1;if(Ba(t,i),t.stateNode===null)tc(e,t),ao(t,n,r),so(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Va(l):(l=Ji(n)?Ki:Wi.current,l=qi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&oo(t,o,r,l),Ka=!1;var f=t.memoizedState;o.state=f,$a(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Gi.current||Ka?(typeof u==`function`&&(no(t,n,u,r),c=t.memoizedState),(s=Ka||io(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ja(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Ma(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Va(c):(c=Ji(n)?Ki:Wi.current,c=qi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&oo(t,o,r,c),Ka=!1,f=t.memoizedState,o.state=f,$a(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Gi.current||Ka?(typeof p==`function`&&(no(t,n,p,r),m=t.memoizedState),(l=Ka||io(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Us(e,t,n,r,a,i)}function Us(e,t,n,r,i,a){Bs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&$i(t,n,!1),nc(e,t,a);r=t.stateNode,Fs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=po(t,e.child,null,a),t.child=po(t,null,s,a)):Ls(e,t,s,a),t.memoizedState=r.state,i&&$i(t,n,!0),t.child}function Ws(e){var t=e.stateNode;t.pendingContext?Xi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xi(e,t.context,!1),bo(e,t.containerInfo)}function Gs(e,t,n,r,i){return ka(),Aa(i),t.flags|=256,Ls(e,t,n,r),t.child}var Ks={dehydrated:null,treeContext:null,retryLane:0};function qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Js(e,t,n){var r=t.pendingProps,i=wo.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ui(wo,i&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=eu(o,r,0,null),e=$l(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=qs(n),t.memoizedState=Ks,e):Ys(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Zs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Zl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=$l(a,o,n,null),a.flags|=2):a=Zl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?qs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ks,r}return a=e.child,e=a.sibling,r=Zl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ys(e,t){return t=eu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Xs(e,t,n,r){return r!==null&&Aa(r),po(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Ds(Error(r(422))),Xs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=eu({mode:`visible`,children:i.children},a,0,null),o=$l(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&po(t,e.child,null,s),t.child.memoizedState=qs(s),t.memoizedState=Ks,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Xs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Ds(o,i,void 0),Xs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Is||c){if(i=Uc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ga(e,a),gl(i,e,a,-1))}return Al(),i=Ds(Error(r(421))),Xs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Ul.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ya=q(a.nextSibling),va=t,ba=!0,xa=null,e!==null&&(Y[ua++]=fa,Y[ua++]=pa,Y[ua++]=da,fa=e.id,pa=e.overflow,da=t),t=Ys(t,i.children),t.flags|=4096,t)}function Qs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function $s(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ls(e,t,r.children,n),r=wo.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qs(e,n,t);else if(e.tag===19)Qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ui(wo,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$s(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$s(t,!0,n,null,a);break;case`together`:$s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Zl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rc(e,t,n){switch(t.tag){case 3:Ws(t),ka();break;case 5:So(t);break;case 1:Ji(t.type)&&Qi(t);break;case 4:bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ui(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ui(wo,wo.current&1),e=nc(e,t,n),e===null?null:e.sibling):Js(e,t,n):(Ui(wo,wo.current&1),t.flags|=128,null);Ui(wo,wo.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ui(wo,wo.current),r)break;return null;case 22:case 23:return t.lanes=0,zs(e,t,n)}return nc(e,t,n)}var ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ac=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yo(go.current);var o=null;switch(n){case`input`:i=ve(e,i),r=ve(e,r),o=[];break;case`select`:i=N({},i,{value:void 0}),r=N({},r,{value:void 0}),o=[];break;case`textarea`:i=Ee(e,i),r=Ee(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=_i)}Be(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&K(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function sc(e,t){if(!ba)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function cc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lc(e,t,n){var i=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cc(t),null;case 1:return Ji(t.type)&&Yi(),cc(t),null;case 3:return i=t.stateNode,xo(),Hi(Gi),Hi(Wi),Do(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xa!==null&&(bl(xa),xa=null))),cc(t),null;case 5:Co(t);var o=yo(vo.current);if(n=t.type,e!==null&&t.stateNode!=null)ac(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return cc(t),null}if(e=yo(go.current),Da(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[ki]=t,i[Ai]=s,e=(t.mode&1)!=0,n){case`dialog`:K(`cancel`,i),K(`close`,i);break;case`iframe`:case`object`:case`embed`:K(`load`,i);break;case`video`:case`audio`:for(o=0;o<ei.length;o++)K(ei[o],i);break;case`source`:K(`error`,i);break;case`img`:case`image`:case`link`:K(`error`,i),K(`load`,i);break;case`details`:K(`toggle`,i);break;case`input`:ye(i,s),K(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},K(`invalid`,i);break;case`textarea`:De(i,s),K(`invalid`,i)}for(var c in Be(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&gi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&gi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&K(`scroll`,i)}switch(n){case`input`:he(i),Se(i,s,!0);break;case`textarea`:he(i),ke(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=_i)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Ae(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[ki]=t,e[Ai]=i,ic(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ve(n,i),n){case`dialog`:K(`cancel`,e),K(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:K(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ei.length;o++)K(ei[o],e);o=i;break;case`source`:K(`error`,e),o=i;break;case`img`:case`image`:case`link`:K(`error`,e),K(`load`,e),o=i;break;case`details`:K(`toggle`,e),o=i;break;case`input`:ye(e,i),o=ve(e,i),K(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=N({},i,{value:void 0}),K(`invalid`,e);break;case`textarea`:De(e,i),o=Ee(e,i),K(`invalid`,e);break;default:o=i}for(s in Be(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Re(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ne(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Pe(e,u):typeof u==`number`&&Pe(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&K(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:he(e),Se(e,i,!1);break;case`textarea`:he(e),ke(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+fe(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Te(e,!!i.multiple,i.defaultValue,!0):Te(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=_i)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return cc(t),null;case 6:if(e&&t.stateNode!=null)oc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=yo(vo.current),yo(go.current),Da(t)){if(i=t.stateNode,n=t.memoizedProps,i[ki]=t,(s=i.nodeValue!==n)&&(e=va,e!==null))switch(e.tag){case 3:gi(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&gi(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ki]=t,t.stateNode=i}return cc(t),null;case 13:if(Hi(wo),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ba&&ya!==null&&t.mode&1&&!(t.flags&128))Oa(),ka(),t.flags|=98560,s=!1;else if(s=Da(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[ki]=t}else ka(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;cc(t),s=!1}else xa!==null&&(bl(xa),xa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||wo.current&1?Jc===0&&(Jc=3):Al())),t.updateQueue!==null&&(t.flags|=4),cc(t),null);case 4:return xo(),e===null&&oi(t.stateNode.containerInfo),cc(t),null;case 10:return Ra(t.type._context),cc(t),null;case 17:return Ji(t.type)&&Yi(),cc(t),null;case 19:if(Hi(wo),s=t.memoizedState,s===null)return cc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)sc(s,!1);else{if(Jc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=To(e),c!==null){for(t.flags|=128,sc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ui(wo,wo.current&1|2),t.child}e=e.sibling}s.tail!==null&&I()>nl&&(t.flags|=128,i=!0,sc(s,!1),t.lanes=4194304)}else{if(!i)if(e=To(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!ba)return cc(t),null}else 2*I()-s.renderingStartTime>nl&&n!==1073741824&&(t.flags|=128,i=!0,sc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(cc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=I(),t.sibling=null,n=wo.current,Ui(wo,i?n&1|2:n&1),t);case 22:case 23:return El(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Kc&1073741824&&(cc(t),t.subtreeFlags&6&&(t.flags|=8192)):cc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function uc(e,t){switch(_a(t),t.tag){case 1:return Ji(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xo(),Hi(Gi),Hi(Wi),Do(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Co(t),null;case 13:if(Hi(wo),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Hi(wo),null;case 4:return xo(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var dc=!1,fc=!1,pc=typeof WeakSet==`function`?WeakSet:Set,Q=null;function mc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Bl(e,t,n)}else n.current=null}function hc(e,t,n){try{n()}catch(n){Bl(e,t,n)}}var gc=!1;function _c(e,t){if(vi=pn,e=jr(),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},pn=!1,Q=t;Q!==null;)if(t=Q,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ma(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Bl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return h=gc,gc=!1,h}function vc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&hc(t,n,a)}i=i.next}while(i!==r)}}function yc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function xc(e){var t=e.alternate;t!==null&&(e.alternate=null,xc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ki],delete t[Ai],delete t[Mi],delete t[Ni],delete t[Pi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_i));else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}var Ec=null,Dc=!1;function Oc(e,t,n){for(n=n.child;n!==null;)kc(e,t,n),n=n.sibling}function kc(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount==`function`)try{Et.onCommitFiberUnmount(Tt,n)}catch{}switch(n.tag){case 5:fc||mc(n,t);case 6:var r=Ec,i=Dc;Ec=null,Oc(e,t,n),Ec=r,Dc=i,Ec!==null&&(Dc?(e=Ec,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ec.removeChild(n.stateNode));break;case 18:Ec!==null&&(Dc?(e=Ec,n=n.stateNode,e.nodeType===8?Ei(e.parentNode,n):e.nodeType===1&&Ei(e,n),dn(e)):Ei(Ec,n.stateNode));break;case 4:r=Ec,i=Dc,Ec=n.stateNode.containerInfo,Dc=!0,Oc(e,t,n),Ec=r,Dc=i;break;case 0:case 11:case 14:case 15:if(!fc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&hc(n,t,o),i=i.next}while(i!==r)}Oc(e,t,n);break;case 1:if(!fc&&(mc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Bl(n,t,e)}Oc(e,t,n);break;case 21:Oc(e,t,n);break;case 22:n.mode&1?(fc=(r=fc)||n.memoizedState!==null,Oc(e,t,n),fc=r):Oc(e,t,n);break;default:Oc(e,t,n)}}function Ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pc),t.forEach(function(t){var r=Wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function jc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Ec=c.stateNode,Dc=!1;break a;case 3:Ec=c.stateNode.containerInfo,Dc=!0;break a;case 4:Ec=c.stateNode.containerInfo,Dc=!0;break a}c=c.return}if(Ec===null)throw Error(r(160));kc(o,s,a),Ec=null,Dc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Bl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jc(t,e),Nc(e),i&4){try{vc(3,e,e.return),yc(3,e)}catch(t){Bl(e,e.return,t)}try{vc(5,e,e.return)}catch(t){Bl(e,e.return,t)}}break;case 1:jc(t,e),Nc(e),i&512&&n!==null&&mc(n,n.return);break;case 5:if(jc(t,e),Nc(e),i&512&&n!==null&&mc(n,n.return),e.flags&32){var a=e.stateNode;try{Pe(a,``)}catch(t){Bl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&be(a,o),Ve(c,s);var u=Ve(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Re(a,f):d===`dangerouslySetInnerHTML`?Ne(a,f):d===`children`?Pe(a,f):S(a,d,f,u)}switch(c){case`input`:xe(a,o);break;case`textarea`:Oe(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Te(a,!!o.multiple,o.multiple?[]:``,!1):Te(a,!!o.multiple,o.defaultValue,!0)):Te(a,!!o.multiple,m,!1)}a[Ai]=o}catch(t){Bl(e,e.return,t)}}break;case 6:if(jc(t,e),Nc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Bl(e,e.return,t)}}break;case 3:if(jc(t,e),Nc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{dn(t.containerInfo)}catch(t){Bl(e,e.return,t)}break;case 4:jc(t,e),Nc(e);break;case 13:jc(t,e),Nc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(tl=I())),i&4&&Ac(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(fc=(u=fc)||d,jc(t,e),fc=u):jc(t,e),Nc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(f=Q=d;Q!==null;){switch(p=Q,m=p.child,p.tag){case 0:case 11:case 14:case 15:vc(4,p,p.return);break;case 1:mc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Bl(i,n,e)}}break;case 5:mc(p,p.return);break;case 22:if(p.memoizedState!==null){Lc(f);continue}}m===null?Lc(f):(m.return=p,Q=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Le(`display`,s))}catch(t){Bl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Bl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jc(t,e),Nc(e),i&4&&Ac(e);break;case 21:break;default:jc(t,e),Nc(e)}}function Nc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Sc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Pe(a,``),i.flags&=-33),Tc(e,Cc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;wc(e,Cc(e),o);break;default:throw Error(r(161))}}catch(t){Bl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pc(e,t,n){Q=e,Fc(e,t,n)}function Fc(e,t,n){for(var r=(e.mode&1)!=0;Q!==null;){var i=Q,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||fc;s=dc;var l=fc;if(dc=o,(fc=c)&&!l)for(Q=i;Q!==null;)o=Q,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Rc(i):(c.return=o,Q=c);for(;a!==null;)Q=a,Fc(a,t,n),a=a.sibling;Q=i,dc=s,fc=l}Ic(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Ic(e,t,n)}}function Ic(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fc||yc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!fc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ma(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&eo(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eo(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&dn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}fc||t.flags&512&&bc(t)}catch(e){Bl(t,t.return,e)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Lc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Rc(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yc(4,t)}catch(e){Bl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Bl(t,i,e)}}var a=t.return;try{bc(t)}catch(e){Bl(t,a,e)}break;case 5:var o=t.return;try{bc(t)}catch(e){Bl(t,o,e)}}}catch(e){Bl(t,t.return,e)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var zc=Math.ceil,Bc=C.ReactCurrentDispatcher,Vc=C.ReactCurrentOwner,Hc=C.ReactCurrentBatchConfig,$=0,Uc=null,Wc=null,Gc=0,Kc=0,qc=Vi(0),Jc=0,Yc=null,Xc=0,Zc=0,Qc=0,$c=null,el=null,tl=0,nl=1/0,rl=null,il=!1,al=null,ol=null,sl=!1,cl=null,ll=0,ul=0,dl=null,fl=-1,pl=0;function ml(){return $&6?I():fl===-1?fl=I():fl}function hl(e){return e.mode&1?$&2&&Gc!==0?Gc&-Gc:ja.transition===null?(e=B,e===0?(e=window.event,e=e===void 0?16:vn(e.type),e):e):(pl===0&&(pl=Rt()),pl):1}function gl(e,t,n,i){if(50<ul)throw ul=0,dl=null,Error(r(185));Bt(e,n,i),(!($&2)||e!==Uc)&&(e===Uc&&(!($&2)&&(Zc|=n),Jc===4&&Sl(e,Gc)),_l(e,i),n===1&&$===0&&!(t.mode&1)&&(nl=I()+500,ta&&aa()))}function _l(e,t){var n=e.callbackNode;It(e,t);var r=Pt(e,e===Uc?Gc:0);if(r===0)n!==null&&_t(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_t(n),t===1)e.tag===0?ia(Cl.bind(null,e)):ra(Cl.bind(null,e)),wi(function(){!($&6)&&aa()}),n=null;else{switch(Ut(r)){case 1:n=xt;break;case 4:n=St;break;case 16:n=Ct;break;case 536870912:n=wt;break;default:n=Ct}n=Kl(n,vl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vl(e,t){if(fl=-1,pl=0,$&6)throw Error(r(327));var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var i=Pt(e,e===Uc?Gc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=jl(e,i);else{t=i;var a=$;$|=2;var o=kl();(Uc!==e||Gc!==t)&&(rl=null,nl=I()+500,Dl(e,t));do try{Nl();break}catch(t){Ol(e,t)}while(1);La(),Bc.current=o,$=a,Wc===null?(Uc=null,Gc=0,t=Jc):t=0}if(t!==0){if(t===2&&(a=Lt(e),a!==0&&(i=a,t=yl(e,a))),t===1)throw n=Yc,Dl(e,0),Sl(e,i),_l(e,I()),n;if(t===6)Sl(e,i);else{if(a=e.current.alternate,!(i&30)&&!xl(a)&&(t=jl(e,i),t===2&&(o=Lt(e),o!==0&&(i=o,t=yl(e,o))),t===1))throw n=Yc,Dl(e,0),Sl(e,i),_l(e,I()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Il(e,el,rl);break;case 3:if(Sl(e,i),(i&130023424)===i&&(t=tl+500-I(),10<t)){if(Pt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){ml(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=xi(Il.bind(null,e,el,rl),t);break}Il(e,el,rl);break;case 4:if(Sl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Ot(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=I()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zc(i/1960))-i,10<i){e.timeoutHandle=xi(Il.bind(null,e,el,rl),i);break}Il(e,el,rl);break;case 5:Il(e,el,rl);break;default:throw Error(r(329))}}}return _l(e,I()),e.callbackNode===n?vl.bind(null,e):null}function yl(e,t){var n=$c;return e.current.memoizedState.isDehydrated&&(Dl(e,t).flags|=256),e=jl(e,t),e!==2&&(t=el,el=n,t!==null&&bl(t)),e}function bl(e){el===null?el=e:el.push.apply(el,e)}function xl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t){for(t&=~Qc,t&=~Zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if($&6)throw Error(r(327));Rl();var t=Pt(e,0);if(!(t&1))return _l(e,I()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var i=Lt(e);i!==0&&(t=i,n=yl(e,i))}if(n===1)throw n=Yc,Dl(e,0),Sl(e,t),_l(e,I()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Il(e,el,rl),_l(e,I()),null}function wl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(nl=I()+500,ta&&aa())}}function Tl(e){cl!==null&&cl.tag===0&&!($&6)&&Rl();var t=$;$|=1;var n=Hc.transition,r=B;try{if(Hc.transition=null,B=1,e)return e()}finally{B=r,Hc.transition=n,$=t,!($&6)&&aa()}}function El(){Kc=qc.current,Hi(qc)}function Dl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Si(n)),Wc!==null)for(n=Wc.return;n!==null;){var r=n;switch(_a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:xo(),Hi(Gi),Hi(Wi),Do();break;case 5:Co(r);break;case 4:xo();break;case 13:Hi(wo);break;case 19:Hi(wo);break;case 10:Ra(r.type._context);break;case 22:case 23:El()}n=n.return}if(Uc=e,Wc=e=Zl(e.current,null),Gc=Kc=t,Jc=0,Yc=null,Qc=Zc=Xc=0,el=$c=null,Ha!==null){for(t=0;t<Ha.length;t++)if(n=Ha[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ha=null}return e}function Ol(e,t){do{var n=Wc;try{if(La(),Oo.current=Ss,Po){for(var i=jo.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Po=!1}if(Ao=0,No=Mo=jo=null,Fo=!1,Io=0,Vc.current=null,n===null||n.return===null){Jc=1,Yc=t,Wc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Gc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ns(s);if(m!==null){m.flags&=-257,Ps(m,s,c,o,t),m.mode&1&&Ms(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Ms(o,u,t),Al();break a}l=Error(r(426))}}else if(ba&&c.mode&1){var _=Ns(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ps(_,s,c,o,t),Aa(Es(l,c));break a}}o=l=Es(l,c),Jc!==4&&(Jc=2),$c===null?$c=[o]:$c.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=As(o,l,t);Qa(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ol===null||!ol.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=js(o,c,t);Qa(o,x);break a}}o=o.return}while(o!==null)}Fl(n)}catch(e){t=e,Wc===n&&n!==null&&(Wc=n=n.return);continue}break}while(1)}function kl(){var e=Bc.current;return Bc.current=Ss,e===null?Ss:e}function Al(){(Jc===0||Jc===3||Jc===2)&&(Jc=4),Uc===null||!(Xc&268435455)&&!(Zc&268435455)||Sl(Uc,Gc)}function jl(e,t){var n=$;$|=2;var i=kl();(Uc!==e||Gc!==t)&&(rl=null,Dl(e,t));do try{Ml();break}catch(t){Ol(e,t)}while(1);if(La(),$=n,Bc.current=i,Wc!==null)throw Error(r(261));return Uc=null,Gc=0,Jc}function Ml(){for(;Wc!==null;)Pl(Wc)}function Nl(){for(;Wc!==null&&!vt();)Pl(Wc)}function Pl(e){var t=Gl(e.alternate,e,Kc);e.memoizedProps=e.pendingProps,t===null?Fl(e):Wc=t,Vc.current=null}function Fl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uc(n,t),n!==null){n.flags&=32767,Wc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Jc=6,Wc=null;return}}else if(n=lc(n,t,Kc),n!==null){Wc=n;return}if(t=t.sibling,t!==null){Wc=t;return}Wc=t=e}while(t!==null);Jc===0&&(Jc=5)}function Il(e,t,n){var r=B,i=Hc.transition;try{Hc.transition=null,B=1,Ll(e,t,n,r)}finally{Hc.transition=i,B=r}return null}function Ll(e,t,n,i){do Rl();while(cl!==null);if($&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vt(e,o),e===Uc&&(Wc=Uc=null,Gc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Kl(Ct,function(){return Rl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Hc.transition,Hc.transition=null;var s=B;B=1;var c=$;$|=4,Vc.current=null,_c(e,n),Mc(n,e),Nr(yi),pn=!!vi,yi=vi=null,e.current=n,Pc(n,e,a),yt(),$=c,B=s,Hc.transition=o}else e.current=n;if(sl&&(sl=!1,cl=e,ll=a),o=e.pendingLanes,o===0&&(ol=null),Dt(n.stateNode,i),_l(e,I()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(il)throw il=!1,e=al,al=null,e;return ll&1&&e.tag!==0&&Rl(),o=e.pendingLanes,o&1?e===dl?ul++:(ul=0,dl=e):ul=0,aa(),null}function Rl(){if(cl!==null){var e=Ut(ll),t=Hc.transition,n=B;try{if(Hc.transition=null,B=16>e?16:e,cl===null)var i=!1;else{if(e=cl,cl=null,ll=0,$&6)throw Error(r(331));var a=$;for($|=4,Q=e.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:vc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var p=d.sibling,m=d.return;if(xc(d),d===u){Q=null;break}if(p!==null){p.return=m,Q=p;break}Q=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else b:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Q=v;break b}Q=o.return}}var y=e.current;for(Q=y;Q!==null;){s=Q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Q=b;else b:for(s=y;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:yc(9,c)}}catch(e){Bl(c,c.return,e)}if(c===s){Q=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Q=x;break b}Q=c.return}}if($=a,aa(),Et&&typeof Et.onPostCommitFiberRoot==`function`)try{Et.onPostCommitFiberRoot(Tt,e)}catch{}i=!0}return i}finally{B=n,Hc.transition=t}}return!1}function zl(e,t,n){t=Es(n,t),t=As(e,t,1),e=Xa(e,t,1),t=ml(),e!==null&&(Bt(e,1,t),_l(e,t))}function Bl(e,t,n){if(e.tag===3)zl(e,e,n);else for(;t!==null;){if(t.tag===3){zl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ol===null||!ol.has(r))){e=Es(n,e),e=js(t,e,1),t=Xa(t,e,1),e=ml(),t!==null&&(Bt(t,1,e),_l(t,e));break}}t=t.return}}function Vl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ml(),e.pingedLanes|=e.suspendedLanes&n,Uc===e&&(Gc&n)===n&&(Jc===4||Jc===3&&(Gc&130023424)===Gc&&500>I()-tl?Dl(e,0):Qc|=n),_l(e,t)}function Hl(e,t){t===0&&(e.mode&1?(t=Mt,Mt<<=1,!(Mt&130023424)&&(Mt=4194304)):t=1);var n=ml();e=Ga(e,t),e!==null&&(Bt(e,t,n),_l(e,n))}function Ul(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hl(e,n)}function Wl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Hl(e,n)}var Gl=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Gi.current)Is=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Is=!1,rc(e,t,n);Is=!!(e.flags&131072)}else Is=!1,ba&&t.flags&1048576&&ha(t,la,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;tc(e,t),e=t.pendingProps;var a=qi(t,Wi.current);Ba(t,n),a=Bo(null,t,i,e,a,n);var o=Vo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ji(i)?(o=!0,Qi(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,qa(t),a.updater=ro,t.stateNode=a,a._reactInternals=t,so(t,i,e,n),t=Us(null,t,i,!0,o,n)):(t.tag=0,ba&&o&&ga(t),Ls(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(tc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Xl(i),e=Ma(i,e),a){case 0:t=Vs(null,t,i,e,n);break a;case 1:t=Hs(null,t,i,e,n);break a;case 11:t=X(null,t,i,e,n);break a;case 14:t=Z(null,t,i,Ma(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ma(i,a),Vs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ma(i,a),Hs(e,t,i,a,n);case 3:a:{if(Ws(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,Ja(e,t),$a(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Es(Error(r(423)),t),t=Gs(e,t,i,n,a);break a}else if(i!==a){a=Es(Error(r(424)),t),t=Gs(e,t,i,n,a);break a}else for(ya=q(t.stateNode.containerInfo.firstChild),va=t,ba=!0,xa=null,n=mo(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ka(),i===a){t=nc(e,t,n);break a}Ls(e,t,i,n)}t=t.child}return t;case 5:return So(t),e===null&&Ta(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,bi(i,a)?s=null:o!==null&&bi(i,o)&&(t.flags|=32),Bs(e,t),Ls(e,t,s,n),t.child;case 6:return e===null&&Ta(t),null;case 13:return Js(e,t,n);case 4:return bo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=po(t,null,i,n):Ls(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ma(i,a),X(e,t,i,a,n);case 7:return Ls(e,t,t.pendingProps,n),t.child;case 8:return Ls(e,t,t.pendingProps.children,n),t.child;case 12:return Ls(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Ui(Na,i._currentValue),i._currentValue=s,o!==null)if(Er(o.value,s)){if(o.children===a.children&&!Gi.current){t=nc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ya(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),za(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),za(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ls(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ba(t,n),a=Va(a),i=i(a),t.flags|=1,Ls(e,t,i,n),t.child;case 14:return i=t.type,a=Ma(i,t.pendingProps),a=Ma(i.type,a),Z(e,t,i,a,n);case 15:return Rs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ma(i,a),tc(e,t),t.tag=1,Ji(i)?(e=!0,Qi(t)):e=!1,Ba(t,n),ao(t,i,a),so(t,i,a,n),Us(null,t,i,!0,e,n);case 19:return ec(e,t,n);case 22:return zs(e,t,n)}throw Error(r(156,t.tag))};function Kl(e,t){return gt(e,t)}function ql(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jl(e,t,n,r){return new ql(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xl(e){if(typeof e==`function`)return+!!Yl(e);if(e!=null){if(e=e.$$typeof,e===O)return 11;if(e===A)return 14}return 2}function Zl(e,t){var n=e.alternate;return n===null?(n=Jl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ql(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Yl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case T:return $l(n.children,a,o,t);case te:s=8,a|=8;break;case E:return e=Jl(12,n,t,a|2),e.elementType=E,e.lanes=o,e;case k:return e=Jl(13,n,t,a),e.elementType=k,e.lanes=o,e;case re:return e=Jl(19,n,t,a),e.elementType=re,e.lanes=o,e;case ie:return eu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ne:s=10;break a;case D:s=9;break a;case O:s=11;break a;case A:s=14;break a;case j:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Jl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function $l(e,t,n,r){return e=Jl(7,e,r,t),e.lanes=n,e}function eu(e,t,n,r){return e=Jl(22,e,r,t),e.elementType=ie,e.lanes=n,e.stateNode={isHidden:!1},e}function tu(e,t,n){return e=Jl(6,e,null,t),e.lanes=n,e}function nu(e,t,n){return t=Jl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ru(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zt(0),this.expirationTimes=zt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function iu(e,t,n,r,i,a,o,s,c){return e=new ru(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Jl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(a),e}function au(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function ou(e){if(!e)return J;e=e._reactInternals;a:{if(ut(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Ji(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Ji(n))return Zi(e,n,t)}return t}function su(e,t,n,r,i,a,o,s,c){return e=iu(n,r,!0,e,i,a,o,s,c),e.context=ou(null),n=e.current,r=ml(),i=hl(n),a=Ya(r,i),a.callback=t??null,Xa(n,a,i),e.current.lanes=i,Bt(e,i,r),_l(e,r),e}function cu(e,t,n,r){var i=t.current,a=ml(),o=hl(i);return n=ou(n),t.context===null?t.context=n:t.pendingContext=n,t=Ya(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xa(i,t,o),e!==null&&(gl(e,i,o,a),Za(e,i,o)),o}function lu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function du(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function fu(){return null}var pu=typeof reportError==`function`?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}hu.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));cu(e,t,null,null)},hu.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tl(function(){cu(null,e,null,null)}),t[ji]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var t=qt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&on(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function vu(){}function yu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=lu(o);a.call(e)}}var o=su(t,r,e,0,null,!1,!1,``,vu);return e._reactRootContainer=o,e[ji]=o.current,oi(e.nodeType===8?e.parentNode:e),Tl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=lu(c);s.call(e)}}var c=iu(e,0,!1,null,null,!1,!1,``,vu);return e._reactRootContainer=c,e[ji]=c.current,oi(e.nodeType===8?e.parentNode:e),Tl(function(){cu(t,c,n,r)}),c}function bu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=lu(o);s.call(e)}}cu(t,o,e,i)}else o=yu(n,t,e,i,r);return lu(o)}Wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nt(t.pendingLanes);n!==0&&(Ht(t,n|1),_l(t,I()),!($&6)&&(nl=I()+500,aa()))}break;case 13:Tl(function(){var t=Ga(e,1);t!==null&&gl(t,e,1,ml())}),du(e,1)}},Gt=function(e){if(e.tag===13){var t=Ga(e,134217728);t!==null&&gl(t,e,134217728,ml()),du(e,134217728)}},Kt=function(e){if(e.tag===13){var t=hl(e),n=Ga(e,t);n!==null&&gl(n,e,t,ml()),du(e,t)}},qt=function(){return B},Jt=function(e,t){var n=B;try{return B=e,t()}finally{B=n}},We=function(e,t,n){switch(t){case`input`:if(xe(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ri(i);if(!a)throw Error(r(90));ge(i),xe(i,a)}}}break;case`textarea`:Oe(e,n);break;case`select`:t=n.value,t!=null&&Te(e,!!n.multiple,t,!1)}},Xe=wl,Ze=Tl;var xu={usingClientEntryPoint:!1,Events:[Ii,Li,Ri,Je,Ye,wl]},Su={findFiberByHostInstance:Fi,bundleType:0,version:`18.2.0`,rendererPackageName:`react-dom`},Cu={bundleType:Su.bundleType,version:Su.version,rendererPackageName:Su.rendererPackageName,rendererConfig:Su.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mt(e),e===null?null:e.stateNode},findFiberByHostInstance:Su.findFiberByHostInstance||fu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.2.0-next-9e3b772b8-20220608`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{Tt=wu.inject(Cu),Et=wu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(r(200));return au(e,t,null,n)},e.createRoot=function(e,t){if(!gu(e))throw Error(r(299));var n=!1,i=``,a=pu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=iu(e,1,!1,null,null,n,!1,i,a),e[ji]=t.current,oi(e.nodeType===8?e.parentNode:e),new mu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=mt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Tl(e)},e.hydrate=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!gu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=pu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=su(t,null,e,1,n??null,a,!1,o,s),e[ji]=t.current,oi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new hu(t)},e.render=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!_u(e))throw Error(r(40));return e._reactRootContainer?(Tl(function(){bu(null,null,e,!1,function(){e._reactRootContainer=null,e[ji]=null})}),!0):!1},e.unstable_batchedUpdates=wl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!_u(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return bu(e,t,n,!1,i)},e.version=`18.2.0-next-9e3b772b8-20220608`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=h();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),_=`modulepreload`,v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=l(d(),1),S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ne(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:D(t)}return k(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function E(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?O(t):t,state:n,key:t&&t.key||r||te(),unstable_mask:i}}function D({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function O(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function k(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=E(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=E(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return re(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function re(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:D(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function A(e,t,n=`/`){return j(e,t,n,!1)}function j(e,t,n,r){let i=ve((typeof t==`string`?O(t):t).pathname||`/`,n);if(i==null)return null;let a=ae(e);N(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=_e(i);o=me(a[e],t,r)}return o}function ie(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ae(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=De([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ae(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:fe(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of M(e.path))a(e,t,!0,n)}),t}function M(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=M(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function N(e){e.sort((e,t)=>e.score===t.score?pe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var P=/^:[\w-]+$/,oe=3,se=2,ce=1,le=10,ue=-2,de=e=>e===`*`;function fe(e,t){let n=e.split(`/`),r=n.length;return n.some(de)&&(r+=ue),t&&(r+=se),n.filter(e=>!de(e)).reduce((e,t)=>e+(P.test(t)?oe:t===``?ce:le),r)}function pe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function me(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=he({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=he({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:De([a,u.pathname]),pathnameBase:ke(De([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=De([a,u.pathnameBase]))}return o}function he(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ge(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function ge(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function _e(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ve(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var ye=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function be(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?O(e):e,a;return n?(n=Ee(n),a=n.startsWith(`/`)?xe(n.substring(1),`/`):xe(n,t)):a=t,{pathname:a,search:Ae(r),hash:je(i)}}function xe(e,t){let n=Oe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Se(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ce(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function we(e){let t=Ce(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Te(e,t,n,r=!1){let i;typeof e==`string`?i=O(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Se(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Se(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Se(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=be(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ee=e=>e.replace(/\/\/+/g,`/`),De=e=>Ee(e.join(`/`)),Oe=e=>e.replace(/\/+$/,``),ke=e=>Oe(e).replace(/^\/*/,`/`),Ae=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,je=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Me=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ne(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Pe(e){return De(e.map(e=>e.route.path).filter(Boolean))||`/`}var Fe=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ie(e,t){let n=e;if(typeof n!=`string`||!ye.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Fe)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=ve(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Le=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Le);var Re=[`GET`,...Le];new Set(Re);var ze=x.createContext(null);ze.displayName=`DataRouter`;var Be=x.createContext(null);Be.displayName=`DataRouterState`;var Ve=x.createContext(!1);function He(){return x.useContext(Ve)}var Ue=x.createContext({isTransitioning:!1});Ue.displayName=`ViewTransition`;var We=x.createContext(new Map);We.displayName=`Fetchers`;var Ge=x.createContext(null);Ge.displayName=`Await`;var Ke=x.createContext(null);Ke.displayName=`Navigation`;var qe=x.createContext(null);qe.displayName=`Location`;var Je=x.createContext({outlet:null,matches:[],isDataRoute:!1});Je.displayName=`Route`;var Ye=x.createContext(null);Ye.displayName=`RouteError`;var Xe=`REACT_ROUTER_ERROR`,Ze=`REDIRECT`,Qe=`ROUTE_ERROR_RESPONSE`;function $e(e){if(e.startsWith(`${Xe}:${Ze}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function F(e){if(e.startsWith(`${Xe}:${Qe}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Me(t.status,t.statusText,t.data)}catch{}}function et(e,{relative:t}={}){w(tt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(Ke),{hash:i,pathname:a,search:o}=ct(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:De([n,a])),r.createHref({pathname:s,search:o,hash:i})}function tt(){return x.useContext(qe)!=null}function nt(){return w(tt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(qe).location}var rt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function it(e){x.useContext(Ke).static||x.useLayoutEffect(e)}function at(){let{isDataRoute:e}=x.useContext(Je);return e?Tt():ot()}function ot(){w(tt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(ze),{basename:t,navigator:n}=x.useContext(Ke),{matches:r}=x.useContext(Je),{pathname:i}=nt(),a=JSON.stringify(we(r)),o=x.useRef(!1);return it(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(T(o.current,rt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Te(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:De([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function st(){let{matches:e}=x.useContext(Je);return e[e.length-1]?.params??{}}function ct(e,{relative:t}={}){let{matches:n}=x.useContext(Je),{pathname:r}=nt(),i=JSON.stringify(we(n));return x.useMemo(()=>Te(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function lt(e,t){return ut(e,t)}function ut(e,t,n){w(tt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(Ke),{matches:i}=x.useContext(Je),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Dt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=nt(),d;if(t){let e=typeof t==`string`?O(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=A(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=_t(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:De([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:De([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function dt(){let e=wt(),t=Ne(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var ft=x.createElement(dt,null),pt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=F(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(Je.Provider,{value:this.props.routeContext},x.createElement(Ye.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(ht,{error:e},t):t}};pt.contextType=Ve;var mt=new WeakMap;function ht({children:e,error:t}){let{basename:n}=x.useContext(Ke);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=$e(t.digest);if(e){let r=mt.get(t);if(r)throw r;let i=Ie(e.location,n);if(Fe&&!mt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw mt.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function gt({routeContext:e,match:t,children:n}){let r=x.useContext(ze);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Je.Provider,{value:e},n)}function _t(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Pe(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||ft,o&&(s<0&&c===0?(Dt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(gt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(pt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function vt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yt(e){let t=x.useContext(ze);return w(t,vt(e)),t}function I(e){let t=x.useContext(Be);return w(t,vt(e)),t}function bt(e){let t=x.useContext(Je);return w(t,vt(e)),t}function xt(e){let t=bt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function St(){return xt(`useRouteId`)}function Ct(){return I(`useNavigation`).navigation}function R(){let{matches:e,loaderData:t}=I(`useMatches`);return x.useMemo(()=>e.map(e=>ie(e,t)),[e,t])}function wt(){let e=x.useContext(Ye),t=I(`useRouteError`),n=xt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Tt(){let{router:e}=yt(`useNavigate`),t=xt(`useNavigate`),n=x.useRef(!1);return it(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{T(n.current,rt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Et={};function Dt(e,t,n){!t&&!Et[e]&&(Et[e]=!0,T(!1,n))}x.memo(Ot);function Ot({routes:e,future:t,state:n,isStatic:r,onError:i}){return ut(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function z(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function kt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){w(!tt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=O(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=x.useMemo(()=>{let e=ve(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(Ke.Provider,{value:c},x.createElement(qe.Provider,{children:t,value:h}))}function At({children:e,location:t}){return lt(jt(e),t)}x.Component;function jt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,jt(e.props.children,i));return}w(e.type===z,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=jt(e.props.children,i)),n.push(a)}),n}var Mt=`get`,Nt=`application/x-www-form-urlencoded`;function Pt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ft(e){return Pt(e)&&e.tagName.toLowerCase()===`button`}function It(e){return Pt(e)&&e.tagName.toLowerCase()===`form`}function Lt(e){return Pt(e)&&e.tagName.toLowerCase()===`input`}function Rt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zt(e,t){return e.button===0&&(!t||t===`_self`)&&!Rt(e)}function Bt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Vt(e,t){let n=Bt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Ht=null;function B(){if(Ht===null)try{new FormData(document.createElement(`form`),0),Ht=!1}catch{Ht=!0}return Ht}var Ut=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Wt(e){return e!=null&&!Ut.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nt}"`),null):e}function Gt(e,t){let n,r,i,a,o;if(It(e)){let o=e.getAttribute(`action`);r=o?ve(o,t):null,n=e.getAttribute(`method`)||Mt,i=Wt(e.getAttribute(`enctype`))||Nt,a=new FormData(e)}else if(Ft(e)||Lt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ve(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Mt,i=Wt(e.getAttribute(`formenctype`))||Wt(o.getAttribute(`enctype`))||Nt,a=new FormData(o,e),!B()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Pt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Mt,r=null,i=Nt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Kt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},qt=/[&><\u2028\u2029]/g;function Jt(e){return e.replace(qt,e=>Kt[e])}function Yt(e,t){if(e===!1||e==null)throw Error(t)}function V(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&ve(i.pathname,t)===`/`?i.pathname=`${Oe(t)}/_root.${r}`:i.pathname=`${Oe(i.pathname)}.${r}`,i}async function Xt(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function H(e){return e!=null&&typeof e.page==`string`}function Zt(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Qt(e,t,n){return rn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Xt(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Zt).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function $t(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function en(e,t,{includeHydrateFallback:n}={}){return tn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function tn(e){return[...new Set(e)]}function nn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function rn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!H(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(nn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function an(){let e=x.useContext(ze);return Yt(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function on(){let e=x.useContext(Be);return Yt(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var sn=x.createContext(void 0);sn.displayName=`FrameworkContext`;function cn(){let e=x.useContext(sn);return Yt(e,`You must render this element inside a <HydratedRouter> element`),e}function ln(e,t){let n=x.useContext(sn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:un(s,p),onBlur:un(c,m),onMouseEnter:un(l,p),onMouseLeave:un(u,m),onTouchStart:un(d,p)}]:[a,f,{}]:[!1,f,{}]}function un(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function dn({page:e,...t}){let n=He(),{router:r}=an(),i=x.useMemo(()=>A(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(pn,{page:e,matches:i,...t}):x.createElement(U,{page:e,matches:i,...t}):null}function fn(e){let{manifest:t,routeModules:n}=cn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return Qt(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function pn({page:e,matches:t,...n}){let r=nt(),{future:i}=cn(),{basename:a}=an(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=V(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function U({page:e,matches:t,...n}){let r=nt(),{future:i,manifest:a,routeModules:o}=cn(),{basename:s}=an(),{loaderData:c,matches:l}=on(),u=x.useMemo(()=>$t(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>$t(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=V(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>en(d,a),[d,a]),m=fn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function mn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var hn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{hn&&(window.__reactRouterVersion=`7.14.2`)}catch{}function gn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=x.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(kt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function _n({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(kt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}_n.displayName=`unstable_HistoryRouter`;var vn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=x.useContext(Ke),v=typeof l==`string`&&vn.test(l),y=Ie(l,h);l=y.to;let b=et(l,{relative:r}),S=nt(),C=null;if(o){let e=Te(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:De([h,e.pathname])),C=g.createHref(e)}let[ee,w,T]=ln(n,p),te=Tn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function E(t){e&&e(t),t.defaultPrevented||te(t)}let ne=!(y.isExternal||i),D=x.createElement(`a`,{...p,...T,href:(ne?C:void 0)||y.absoluteURL||b,onClick:ne?E:e,ref:mn(m,w),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return ee&&!v?x.createElement(x.Fragment,null,D,x.createElement(dn,{page:b})):D});W.displayName=`Link`;var yn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ct(a,{relative:c.relative}),d=nt(),f=x.useContext(Be),{navigator:p,basename:m}=x.useContext(Ke),h=f!=null&&In(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=ve(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},ee=b?e:void 0,w;w=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(C):i;return x.createElement(W,{...c,"aria-current":ee,className:w,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(C):s)});yn.displayName=`NavLink`;var bn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Mt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=x.useContext(Ke),g=kn(),_=An(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&vn.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});bn.displayName=`Form`;function xn({getKey:e,storageKey:t,...n}){let r=x.useContext(sn),{basename:i}=x.useContext(Ke),a=nt(),o=R();Pn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Nn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${Jt(JSON.stringify(t||jn))}, ${Jt(JSON.stringify(s))})`}})}xn.displayName=`ScrollRestoration`;function Sn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cn(e){let t=x.useContext(ze);return w(t,Sn(e)),t}function wn(e){let t=x.useContext(Be);return w(t,Sn(e)),t}function Tn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=at(),d=nt(),f=ct(e,{relative:o});return x.useCallback(p=>{if(zt(p,t)){p.preventDefault();let t=n===void 0?D(d)===D(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function En(e){T(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=x.useRef(Bt(e)),n=x.useRef(!1),r=nt(),i=x.useMemo(()=>Vt(r.search,n.current?null:t.current),[r.search]),a=at();return[i,x.useCallback((e,t)=>{let r=Bt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var Dn=0,On=()=>`__${String(++Dn)}__`;function kn(){let{router:e}=Cn(`useSubmit`),{basename:t}=x.useContext(Ke),n=St(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Gt(e,t);a.navigate===!1?await r(a.fetcherKey||On(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function An(e,{relative:t}={}){let{basename:n}=x.useContext(Ke),r=x.useContext(Je);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ct(e||`.`,{relative:t})},o=nt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:De([n,a.pathname])),D(a)}var jn=`react-router-scroll-positions`,Mn={};function Nn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:ve(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Pn({getKey:e,storageKey:t}={}){let{router:n}=Cn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=wn(`useScrollRestoration`),{basename:a}=x.useContext(Ke),o=nt(),s=R(),c=Ct();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Fn(x.useCallback(()=>{if(c.state===`idle`){let t=Nn(o,s,a,e);Mn[t]=window.scrollY}try{sessionStorage.setItem(t||jn,JSON.stringify(Mn))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||jn);e&&(Mn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Mn,()=>window.scrollY,e?(t,n)=>Nn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Fn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function In(e,{relative:t}={}){let n=x.useContext(Ue);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Cn(`useViewTransitionState`),i=ct(e,{relative:t});if(!n.isTransitioning)return!1;let a=ve(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ve(n.nextLocation.pathname,r)||n.nextLocation.pathname;return he(i.pathname,o)!=null||he(i.pathname,a)!=null}var Ln=o((e=>{var t=d(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),Rn=o(((e,t)=>{t.exports=Ln()})),zn=l(g(),1),G=Rn(),Bn=[`Namkeen`,`Spices`,`Powder`,`Grains`,`Snacks`],Vn=[{label:`Weighing & Filling`,to:`/machines/weighing`},{label:`Packaging Machines`,to:`/machines/packaging`},{label:`Sealing Machines`,to:`/machines/sealing`},{label:`Labelling Machines`,to:`/machines/labelling`}],Hn=[{label:`Media Home`,to:`/media`},{label:`Videos`,to:`/media/videos`}],Un=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap');

  * { box-sizing: border-box; }

  /* ── NAV BASE ── */
  .nb {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(10, 14, 26, 0.72);
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 2px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
    transition: background 0.35s, box-shadow 0.35s;
  }
  .nb.scrolled {
    background: rgba(8, 12, 22, 0.88);
    box-shadow: 0 4px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07);
  }

  /* subtle animated gradient line at top */
  .nb::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #f5a623 30%, #ff6b35 60%, transparent 100%);
    background-size: 200% 100%;
    animation: shimmer 3s linear infinite;
    opacity: 0.8;
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .nb-inner {
    max-width: 1400px; margin: 0 auto;
    display: flex; align-items: center;
    height: 64px; padding: 0 16px;
    gap: 12px;
  }
  @media (min-width: 960px) {
    .nb-inner { height: 68px; padding: 0 28px; gap: 20px; }
  }

  /* ── LOGO ── */
  .nb-logo {
    display: flex; align-items: center;
    text-decoration: none; flex-shrink: 0;
  }

  /* Tight-fit logo box — glassmorphic pill */
  .nb-logo-box {
    display: inline-flex; align-items: center; justify-content: center;
    height: 44px;
    padding: 4px 10px;
    background: rgba(255,255,255,0.94);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    box-shadow:
      0 2px 12px rgba(0,0,0,0.25),
      0 1px 3px rgba(0,0,0,0.15),
      inset 0 1px 0 rgba(255,255,255,0.9);
    transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
    overflow: hidden;
  }
  .nb-logo-box:hover {
    background: rgba(255,255,255,1);
    box-shadow:
      0 4px 20px rgba(0,0,0,0.3),
      0 2px 6px rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.95);
    transform: translateY(-1px);
  }
  .nb-logo-box img {
    height: 36px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
    display: block;
  }
  @media (min-width: 960px) {
    .nb-logo-box { height: 46px; padding: 4px 12px; }
    .nb-logo-box img { height: 38px; max-width: 160px; }
  }

  /* ── DESKTOP NAV LINKS ── */
  .nb-links {
    display: none;
    align-items: center;
    flex: 1; justify-content: center;
    gap: 2px; list-style: none;
    margin: 0; padding: 0;
  }
  @media (min-width: 960px) { .nb-links { display: flex; } }

  .nb-link {
    display: flex; align-items: center;
    padding: 0 12px; height: 38px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: rgba(220,230,245,0.85); text-decoration: none;
    border-radius: 6px; white-space: nowrap;
    letter-spacing: 0.03em;
    transition: color 0.2s, background 0.2s;
    position: relative;
  }
  .nb-link:hover {
    color: #ffffff;
    background: rgba(255,255,255,0.08);
  }
  .nb-link.active {
    color: #ffffff; font-weight: 600;
  }
  .nb-link.active::after {
    content: '';
    position: absolute; bottom: 5px; left: 50%;
    transform: translateX(-50%);
    width: 18px; height: 2px; border-radius: 2px;
    background: linear-gradient(90deg, #f5a623, #ff6b35);
  }

  /* ── DROPDOWN WRAPPER ── */
  .nb-dd-wrap {
    position: relative;
    display: flex; align-items: center;
  }
  .nb-dd-wrap::after {
    content: '';
    position: absolute; top: 100%; left: 0; right: 0;
    height: 16px; background: transparent;
    pointer-events: auto; display: none;
  }
  .nb-dd-wrap:hover::after { display: block; }

  .nb-dd-btn {
    display: flex; align-items: center; gap: 4px;
    padding: 0 12px; height: 38px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: rgba(220,230,245,0.85); background: none; border: none; cursor: pointer;
    border-radius: 6px; white-space: nowrap;
    letter-spacing: 0.03em;
    transition: color 0.2s, background 0.2s;
  }
  .nb-dd-btn:hover, .nb-dd-btn.open {
    color: #ffffff;
    background: rgba(255,255,255,0.08);
  }
  .nb-chevron { transition: transform 0.25s; flex-shrink: 0; opacity: 0.7; }
  .nb-dd-btn.open .nb-chevron { transform: rotate(180deg); opacity: 1; }

  /* ── DROPDOWN PANEL ── */
  .nb-dropdown {
    position: absolute; top: calc(100% + 12px); left: 50%;
    transform: translateX(-50%) translateY(8px);
    min-width: 200px;
    background: rgba(12, 17, 35, 0.92);
    backdrop-filter: blur(24px) saturate(160%);
    -webkit-backdrop-filter: blur(24px) saturate(160%);
    border: 1px solid rgba(255,255,255,0.1);
    border-top: 2px solid rgba(245,166,35,0.8);
    border-radius: 10px;
    padding: 6px 5px;
    box-shadow:
      0 16px 60px rgba(0,0,0,0.5),
      0 4px 16px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.06);
    opacity: 0; pointer-events: none;
    transition: opacity 0.2s, transform 0.2s;
    z-index: 200;
  }
  .nb-dropdown.open {
    opacity: 1; pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }
  .nb-dropdown::before {
    content: '';
    position: absolute; top: -7px; left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-bottom-color: rgba(245,166,35,0.8);
    border-top: none;
  }

  .nb-dd-item {
    display: flex; align-items: center; gap: 10px;
    width: 100%; padding: 9px 14px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: rgba(210,225,245,0.9); text-decoration: none;
    background: none; border: none; cursor: pointer; text-align: left;
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;
  }
  .nb-dd-item::before {
    content: '';
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(255,255,255,0.2); flex-shrink: 0;
    transition: background 0.2s;
  }
  .nb-dd-item:hover {
    color: #ffffff;
    background: rgba(255,255,255,0.07);
  }
  .nb-dd-item:hover::before { background: #f5a623; }

  /* ── CTA BUTTON ── */
  .nb-cta {
    display: none;
    background: linear-gradient(135deg, #f5a623 0%, #ff6b35 100%);
    color: #0a0e1a;
    padding: 9px 20px; border-radius: 6px; border: none; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px; font-weight: 800;
    letter-spacing: 0.12em; text-transform: uppercase;
    white-space: nowrap; flex-shrink: 0;
    transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(245,166,35,0.35), 0 0 0 1px rgba(245,166,35,0.2);
  }
  .nb-cta:hover {
    opacity: 0.92;
    transform: translateY(-1px);
    box-shadow: 0 6px 28px rgba(245,166,35,0.45), 0 0 0 1px rgba(245,166,35,0.3);
  }
  @media (min-width: 960px) { .nb-cta { display: flex; align-items: center; } }

  /* ── HAMBURGER ── */
  .nb-ham {
    display: flex; flex-direction: column; justify-content: center; gap: 5px;
    width: 40px; height: 40px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    cursor: pointer; padding: 10px; border-radius: 8px;
    margin-left: auto; flex-shrink: 0;
    transition: background 0.2s, border-color 0.2s;
  }
  .nb-ham:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.2);
  }
  .nb-ham span {
    display: block; width: 100%; height: 2px;
    background: rgba(255,255,255,0.85); border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  .nb-ham.open {
    background: rgba(245,166,35,0.12);
    border-color: rgba(245,166,35,0.3);
  }
  .nb-ham.open span { background: #f5a623; }
  .nb-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nb-ham.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nb-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  @media (min-width: 960px) { .nb-ham { display: none; } }

  /* ── MOBILE OVERLAY ── */
  .nb-overlay {
    position: fixed; inset: 0; z-index: 98;
    background: rgba(5,8,20,0.75);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s;
  }
  .nb-overlay.open { opacity: 1; pointer-events: auto; }

  /* ── MOBILE DRAWER ── */
  .nb-drawer {
    position: fixed; top: 64px; left: 0; right: 0; z-index: 99;
    background: rgba(8, 13, 28, 0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
    transform: translateY(-6px); opacity: 0; pointer-events: none;
    transition: transform 0.3s ease, opacity 0.25s;
    max-height: calc(100svh - 64px); overflow-y: auto;
  }
  .nb-drawer.open { transform: translateY(0); opacity: 1; pointer-events: auto; }

  .nb-mob-nav { padding: 8px 0 4px; }

  .nb-mob-link {
    display: flex; align-items: center;
    padding: 13px 20px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px; font-weight: 500;
    color: rgba(200,215,240,0.85); text-decoration: none;
    border-left: 2px solid transparent;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
  }
  .nb-mob-link:hover, .nb-mob-link.active {
    color: #ffffff;
    background: rgba(255,255,255,0.04);
    border-left-color: #f5a623;
  }

  .nb-mob-sep {
    height: 1px; margin: 4px 20px;
    background: rgba(255,255,255,0.06);
  }

  .nb-mob-dd-btn {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; padding: 13px 20px;
    background: none; border: none; cursor: pointer;
    font-family: 'Barlow', sans-serif;
    font-size: 14px; font-weight: 500;
    color: rgba(200,215,240,0.85);
    border-left: 2px solid transparent;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
  }
  .nb-mob-dd-btn:hover, .nb-mob-dd-btn.open {
    color: #ffffff;
    background: rgba(255,255,255,0.04);
    border-left-color: #f5a623;
  }

  .nb-mob-sub {
    max-height: 0; overflow: hidden;
    transition: max-height 0.3s ease;
    background: rgba(255,255,255,0.02);
    border-left: 2px solid rgba(245,166,35,0.15);
    margin-left: 20px;
  }
  .nb-mob-sub.open { max-height: 400px; }

  .nb-mob-sub-item {
    display: flex; align-items: center; gap: 10px;
    width: 100%; padding: 11px 18px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: rgba(180,200,230,0.8); text-decoration: none;
    background: none; border: none; cursor: pointer; text-align: left;
    transition: color 0.2s, background 0.2s;
  }
  .nb-mob-sub-item::before {
    content: '';
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(255,255,255,0.2); flex-shrink: 0;
    transition: background 0.2s;
  }
  .nb-mob-sub-item:hover { color: #fff; background: rgba(255,255,255,0.04); }
  .nb-mob-sub-item:hover::before { background: #f5a623; }

  .nb-mob-cta-wrap {
    padding: 14px 20px 20px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .nb-mob-cta {
    width: 100%; padding: 14px;
    background: linear-gradient(135deg, #f5a623 0%, #ff6b35 100%);
    color: #0a0e1a;
    border: none; border-radius: 8px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 15px; font-weight: 800;
    letter-spacing: 0.14em; text-transform: uppercase;
    box-shadow: 0 4px 20px rgba(245,166,35,0.3);
    transition: opacity 0.2s, transform 0.15s;
  }
  .nb-mob-cta:hover { opacity: 0.9; transform: translateY(-1px); }
`,Wn=()=>(0,G.jsx)(`svg`,{className:`nb-chevron`,width:`10`,height:`10`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,G.jsx)(`polyline`,{points:`6 9 12 15 18 9`})});function Gn(e=130){let[t,n]=(0,x.useState)(!1),r=(0,x.useRef)(null),i=(0,x.useRef)(null);return(0,x.useEffect)(()=>()=>clearTimeout(i.current),[]),{open:t,setOpen:n,ref:r,handleMouseEnter:()=>{clearTimeout(i.current),n(!0)},handleMouseLeave:()=>{i.current=setTimeout(()=>n(!1),e)}}}function Kn(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(!1),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(!1),u=Gn(),d=Gn(),f=Gn(),{pathname:p}=nt(),m=at();(0,x.useEffect)(()=>{let e=()=>r(window.scrollY>10);return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,x.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]);let h=()=>{t(!1),a(!1),s(!1),l(!1),u.setOpen(!1),d.setOpen(!1),f.setOpen(!1)},g=e=>{m(`/applications?type=${encodeURIComponent(e)}`),h()};return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:Un}),(0,G.jsx)(`div`,{className:`nb-overlay${e?` open`:``}`,onClick:h}),(0,G.jsx)(`header`,{className:`nb${n?` scrolled`:``}`,children:(0,G.jsxs)(`div`,{className:`nb-inner`,children:[(0,G.jsx)(W,{to:`/`,className:`nb-logo`,onClick:h,children:(0,G.jsx)(`div`,{className:`nb-logo-box`,children:(0,G.jsx)(`img`,{src:`/suntech/logo.jpeg`,alt:`SunTech Packaging Machines`,loading:`eager`,draggable:`false`})})}),(0,G.jsxs)(`nav`,{className:`nb-links`,children:[(0,G.jsx)(W,{to:`/`,className:`nb-link${p===`/`?` active`:``}`,onClick:h,children:`Home`}),(0,G.jsx)(W,{to:`/about`,className:`nb-link${p===`/about`?` active`:``}`,onClick:h,children:`About`}),(0,G.jsxs)(`div`,{className:`nb-dd-wrap`,onMouseEnter:d.handleMouseEnter,onMouseLeave:d.handleMouseLeave,children:[(0,G.jsxs)(`button`,{className:`nb-dd-btn${d.open||p===`/applications`?` open`:``}`,children:[`Applications `,(0,G.jsx)(Wn,{})]}),(0,G.jsx)(`div`,{className:`nb-dropdown${d.open?` open`:``}`,onMouseEnter:d.handleMouseEnter,onMouseLeave:d.handleMouseLeave,children:Bn.map(e=>(0,G.jsx)(`button`,{className:`nb-dd-item`,onClick:()=>g(e),children:e},e))})]}),(0,G.jsxs)(`div`,{className:`nb-dd-wrap`,onMouseEnter:f.handleMouseEnter,onMouseLeave:f.handleMouseLeave,children:[(0,G.jsxs)(`button`,{className:`nb-dd-btn${f.open||p.startsWith(`/media`)?` open`:``}`,children:[`Media `,(0,G.jsx)(Wn,{})]}),(0,G.jsx)(`div`,{className:`nb-dropdown${f.open?` open`:``}`,onMouseEnter:f.handleMouseEnter,onMouseLeave:f.handleMouseLeave,children:Hn.map(e=>(0,G.jsx)(W,{to:e.to,className:`nb-dd-item`,onClick:h,children:e.label},e.to))})]}),(0,G.jsxs)(`div`,{className:`nb-dd-wrap`,onMouseEnter:u.handleMouseEnter,onMouseLeave:u.handleMouseLeave,children:[(0,G.jsxs)(`button`,{className:`nb-dd-btn${u.open?` open`:``}`,children:[`Machines `,(0,G.jsx)(Wn,{})]}),(0,G.jsx)(`div`,{className:`nb-dropdown${u.open?` open`:``}`,onMouseEnter:u.handleMouseEnter,onMouseLeave:u.handleMouseLeave,children:Vn.map(e=>(0,G.jsx)(W,{to:e.to,className:`nb-dd-item`,onClick:h,children:e.label},e.to))})]}),(0,G.jsx)(W,{to:`/projects`,className:`nb-link${p===`/projects`?` active`:``}`,onClick:h,children:`Projects`}),(0,G.jsx)(W,{to:`/brochure`,className:`nb-link${p===`/brochure`?` active`:``}`,onClick:h,children:`Brochure`}),(0,G.jsx)(W,{to:`/faq`,className:`nb-link${p===`/faq`?` active`:``}`,onClick:h,children:`FAQ`}),(0,G.jsx)(W,{to:`/solutions`,className:`nb-link${p===`/solutions`?` active`:``}`,onClick:h,children:`Solutions`}),(0,G.jsx)(W,{to:`/contact`,className:`nb-link${p===`/contact`?` active`:``}`,onClick:h,children:`Contact`})]}),(0,G.jsx)(`button`,{className:`nb-cta`,onClick:()=>m(`/contact`),children:`Get a Quote`}),(0,G.jsxs)(`button`,{className:`nb-ham${e?` open`:``}`,onClick:()=>t(e=>!e),"aria-label":`Toggle menu`,children:[(0,G.jsx)(`span`,{}),(0,G.jsx)(`span`,{}),(0,G.jsx)(`span`,{})]})]})}),(0,G.jsxs)(`div`,{className:`nb-drawer${e?` open`:``}`,children:[(0,G.jsxs)(`nav`,{className:`nb-mob-nav`,children:[(0,G.jsx)(W,{to:`/`,className:`nb-mob-link${p===`/`?` active`:``}`,onClick:h,children:`Home`}),(0,G.jsx)(W,{to:`/about`,className:`nb-mob-link${p===`/about`?` active`:``}`,onClick:h,children:`About`}),(0,G.jsx)(`div`,{className:`nb-mob-sep`}),(0,G.jsxs)(`button`,{className:`nb-mob-dd-btn${o?` open`:``}`,onClick:()=>s(e=>!e),children:[`Applications `,(0,G.jsx)(Wn,{})]}),(0,G.jsx)(`div`,{className:`nb-mob-sub${o?` open`:``}`,children:Bn.map(e=>(0,G.jsx)(`button`,{className:`nb-mob-sub-item`,onClick:()=>g(e),children:e},e))}),(0,G.jsxs)(`button`,{className:`nb-mob-dd-btn${c?` open`:``}`,onClick:()=>l(e=>!e),children:[`Media `,(0,G.jsx)(Wn,{})]}),(0,G.jsx)(`div`,{className:`nb-mob-sub${c?` open`:``}`,children:Hn.map(e=>(0,G.jsx)(W,{to:e.to,className:`nb-mob-sub-item`,onClick:h,children:e.label},e.to))}),(0,G.jsxs)(`button`,{className:`nb-mob-dd-btn${i?` open`:``}`,onClick:()=>a(e=>!e),children:[`Machines `,(0,G.jsx)(Wn,{})]}),(0,G.jsx)(`div`,{className:`nb-mob-sub${i?` open`:``}`,children:Vn.map(e=>(0,G.jsx)(W,{to:e.to,className:`nb-mob-sub-item`,onClick:h,children:e.label},e.to))}),(0,G.jsx)(`div`,{className:`nb-mob-sep`}),(0,G.jsx)(W,{to:`/projects`,className:`nb-mob-link${p===`/projects`?` active`:``}`,onClick:h,children:`Projects`}),(0,G.jsx)(W,{to:`/brochure`,className:`nb-mob-link${p===`/brochure`?` active`:``}`,onClick:h,children:`Brochure`}),(0,G.jsx)(W,{to:`/faq`,className:`nb-mob-link${p===`/faq`?` active`:``}`,onClick:h,children:`FAQ`}),(0,G.jsx)(W,{to:`/solutions`,className:`nb-mob-link${p===`/solutions`?` active`:``}`,onClick:h,children:`Solutions`}),(0,G.jsx)(W,{to:`/contact`,className:`nb-mob-link${p===`/contact`?` active`:``}`,onClick:h,children:`Contact`})]}),(0,G.jsx)(`div`,{className:`nb-mob-cta-wrap`,children:(0,G.jsx)(`button`,{className:`nb-mob-cta`,onClick:()=>{m(`/contact`),h()},children:`Get a Quote`})})]})]})}var qn=[`ISO 9001 Certified`,`Made in India`,`500+ Installations`,`40+ Cities`,`Custom Engineering`,`After-Sales Support`,`PLC Controlled`,`Stainless Steel Build`,`1-Year Warranty`],Jn=[{label:`Home`,to:`/`},{label:`About Us`,to:`/about`},{label:`Products`,to:`/products`},{label:`Projects`,to:`/projects`},{label:`Contact`,to:`/contact`}],Yn=[{label:`Atta Packaging`,to:`/machines/atta`},{label:`Granules Packing`,to:`/machines/granules`},{label:`Flow Wrapping`,to:`/machines/flow-wrap`},{label:`Masala Packaging`,to:`/machines/masala`},{label:`Vacuum Packaging`,to:`/machines/vacuum`}],Xn=[{label:`Installation`,to:`/services/installation`},{label:`AMC / Service`,to:`/services/amc`},{label:`Spare Parts`,to:`/services/spares`},{label:`Book a Demo`,to:`/services/demo`},{label:`Brochure`,to:`/brochure`}];function Zn(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        /* ── TOKENS ── */
        :root {
          --ft-bg:        #111827;
          --ft-bg-dark:   #0d1117;
          --ft-bg-card:   #1f2937;
          --ft-border:    rgba(255,255,255,0.07);
          --ft-border-s:  rgba(255,255,255,0.04);
          --ft-text:      rgba(255,255,255,0.85);
          --ft-muted:     rgba(255,255,255,0.38);
          --ft-dim:       rgba(255,255,255,0.18);
          --ft-orange:    #f5a623;
          --ft-orange-dk: #c27d10;
          --ft-orange-bg: rgba(245,166,35,0.10);
          --ft-orange-bd: rgba(245,166,35,0.25);
        }

        /* ── BASE ── */
        .ft {
          font-family: 'Barlow', sans-serif;
          background: var(--ft-bg);
          color: var(--ft-text);
          position: relative;
          overflow: hidden;
        }

        /* subtle grid */
        .ft::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none; z-index: 0;
        }

        .ft-z { position: relative; z-index: 1; }

        /* ── TICKER ── */
        .ft-ticker-wrap {
          overflow: hidden;
          border-bottom: 1px solid var(--ft-border);
          background: var(--ft-bg-dark);
        }
        .ft-ticker-track {
          display: flex; width: max-content;
          animation: ft-tick 30s linear infinite;
        }
        @keyframes ft-tick {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ft-ticker-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 11px 24px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--ft-muted); white-space: nowrap;
        }
        .ft-ticker-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--ft-orange); flex-shrink: 0;
        }

        /* ── INNER WRAP ── */
        .ft-inner {
          max-width: 1220px; margin: 0 auto;
          padding: 0 20px;
        }

        /* ── TOP ORANGE BAR ── */
        .ft-top-bar {
          height: 3px;
          background: var(--ft-orange);
        }

        /* ── BRAND SECTION ── */
        .ft-brand {
          padding: 36px 0 28px;
          border-bottom: 1px solid var(--ft-border);
          display: flex; flex-direction: column; gap: 24px;
        }
        @media (min-width: 768px) {
          .ft-brand {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 48px;
            padding: 48px 0 36px;
          }
        }

        /* ── LOGO — same rectangular style, inverted for dark bg ── */
        .ft-logo {
          display: inline-flex; align-items: center;
          text-decoration: none; width: fit-content;
        }
        .ft-logo-box {
          display: flex; align-items: center; justify-content: center;
          height: 56px;
          padding: 6px 14px;
          /* white box so logo is always visible on dark footer */
          background: #ffffff;
          border: 2px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          box-shadow: 3px 3px 0px var(--ft-orange);
          transition: box-shadow 0.2s, transform 0.2s;
          overflow: hidden;
        }
        .ft-logo-box:hover {
          box-shadow: 5px 5px 0px var(--ft-orange);
          transform: translate(-1px, -1px);
        }
        .ft-logo-box img {
          height: 44px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          display: block;
        }

        .ft-desc {
          font-size: 13px; font-weight: 300;
          color: var(--ft-muted); line-height: 1.75;
          margin: 16px 0 0; max-width: 320px;
        }

        /* cert badges */
        .ft-certs { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
        .ft-cert {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--ft-orange);
          background: var(--ft-orange-bg);
          border: 1px solid var(--ft-orange-bd);
          padding: 4px 10px; border-radius: 3px;
        }

        /* stats */
        .ft-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 24px;
        }
        @media (min-width: 480px) {
          .ft-stats { grid-template-columns: repeat(4, auto); gap: 0 32px; }
        }
        .ft-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 34px; font-weight: 900;
          color: #fff; line-height: 1; display: block;
        }
        .ft-stat-num span { color: var(--ft-orange); }
        .ft-stat-lbl {
          font-size: 9px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--ft-muted); margin-top: 4px; display: block;
        }

        /* ── LINKS GRID ── */
        .ft-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 20px;
          padding: 32px 0 28px;
          border-bottom: 1px solid var(--ft-border);
        }
        @media (min-width: 640px) {
          .ft-links-grid { grid-template-columns: repeat(4, 1fr); gap: 36px 28px; }
        }

        .ft-col-head {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .3em; text-transform: uppercase;
          color: var(--ft-orange);
          margin-bottom: 16px;
          display: flex; align-items: center; gap: 8px;
        }
        .ft-col-head::after {
          content: ''; flex: 1; height: 1.5px; max-width: 24px;
          background: var(--ft-orange-bd);
        }

        .ft-col-links {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .ft-col-links a {
          font-size: 13px; font-weight: 400;
          color: var(--ft-muted); text-decoration: none;
          display: inline-flex; align-items: center;
          transition: color .2s, padding-left .2s;
          letter-spacing: .01em;
          position: relative; padding-left: 0;
        }
        .ft-col-links a::before {
          content: '';
          display: inline-block; width: 0; height: 1.5px;
          background: var(--ft-orange);
          transition: width .22s, margin-right .22s;
          margin-right: 0; vertical-align: middle;
        }
        .ft-col-links a:hover { color: rgba(255,255,255,.88); }
        .ft-col-links a:hover::before { width: 10px; margin-right: 7px; }

        /* contact col full-width on mobile */
        .ft-contact-col { grid-column: 1 / -1; }
        @media (min-width: 640px) { .ft-contact-col { grid-column: auto; } }

        .ft-contact-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .ft-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 12.5px; font-weight: 400;
          color: var(--ft-muted); line-height: 1.5;
          transition: color .2s;
        }
        .ft-contact-item:hover { color: rgba(255,255,255,.75); }
        .ft-contact-ico {
          width: 30px; height: 30px; flex-shrink: 0;
          border-radius: 6px;
          background: var(--ft-bg-card);
          border: 1px solid rgba(245,166,35,0.18);
          display: flex; align-items: center; justify-content: center;
          margin-top: -1px;
          transition: background .2s, border-color .2s;
        }
        .ft-contact-item:hover .ft-contact-ico {
          background: var(--ft-orange-bg);
          border-color: var(--ft-orange-bd);
        }
        .ft-contact-ico svg {
          width: 13px; height: 13px;
          stroke: var(--ft-orange); fill: none;
          stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          display: flex; flex-direction: column;
          align-items: center; gap: 12px;
          padding: 18px 0 24px; text-align: center;
        }
        @media (min-width: 640px) {
          .ft-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .ft-copy {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--ft-dim);
        }

        .ft-bottom-right {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          justify-content: center;
        }
        @media (min-width: 640px) { .ft-bottom-right { justify-content: flex-end; } }

        .ft-made {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--ft-orange);
          background: var(--ft-orange-bg);
          border: 1px solid var(--ft-orange-bd);
          padding: 4px 10px; border-radius: 3px;
        }

        .ft-legal { display: flex; gap: 16px; }
        .ft-legal a {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--ft-dim); text-decoration: none;
          transition: color .2s;
        }
        .ft-legal a:hover { color: rgba(255,255,255,.5); }
      `}),(0,G.jsxs)(`footer`,{className:`ft`,children:[(0,G.jsx)(`div`,{className:`ft-top-bar`}),(0,G.jsx)(`div`,{className:`ft-ticker-wrap`,children:(0,G.jsx)(`div`,{className:`ft-ticker-track`,children:[...qn,...qn].map((e,t)=>(0,G.jsxs)(`span`,{className:`ft-ticker-item`,children:[(0,G.jsx)(`span`,{className:`ft-ticker-dot`}),e]},t))})}),(0,G.jsx)(`div`,{className:`ft-z`,children:(0,G.jsxs)(`div`,{className:`ft-inner`,children:[(0,G.jsxs)(`div`,{className:`ft-brand`,children:[(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,maxWidth:340},children:[(0,G.jsx)(W,{to:`/`,className:`ft-logo`,children:(0,G.jsx)(`div`,{className:`ft-logo-box`,children:(0,G.jsx)(`img`,{src:`/logo.jpeg`,alt:`SunTech Packaging Machines`,loading:`lazy`,draggable:`false`})})}),(0,G.jsx)(`p`,{className:`ft-desc`,children:`High-performance industrial packaging machines engineered for precision, speed, and long-term reliability across food, pharma & agro sectors.`}),(0,G.jsxs)(`div`,{className:`ft-certs`,children:[(0,G.jsx)(`span`,{className:`ft-cert`,children:`ISO 9001`}),(0,G.jsx)(`span`,{className:`ft-cert`,children:`CE Marked`}),(0,G.jsx)(`span`,{className:`ft-cert`,children:`Make in India`})]})]}),(0,G.jsx)(`div`,{className:`ft-stats`,children:[{num:`500`,sup:`+`,lbl:`Installations`},{num:`40`,sup:`+`,lbl:`Cities`},{num:`15`,sup:`+`,lbl:`Years Exp.`},{num:`99`,sup:`%`,lbl:`Uptime`}].map((e,t)=>(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`span`,{className:`ft-stat-num`,children:[e.num,(0,G.jsx)(`span`,{children:e.sup})]}),(0,G.jsx)(`span`,{className:`ft-stat-lbl`,children:e.lbl})]},t))})]}),(0,G.jsxs)(`div`,{className:`ft-links-grid`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`p`,{className:`ft-col-head`,children:`Navigate`}),(0,G.jsx)(`ul`,{className:`ft-col-links`,children:Jn.map(e=>(0,G.jsx)(`li`,{children:(0,G.jsx)(W,{to:e.to,children:e.label})},e.to))})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`p`,{className:`ft-col-head`,children:`Machines`}),(0,G.jsx)(`ul`,{className:`ft-col-links`,children:Yn.map(e=>(0,G.jsx)(`li`,{children:(0,G.jsx)(W,{to:e.to,children:e.label})},e.to))})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`p`,{className:`ft-col-head`,children:`Services`}),(0,G.jsx)(`ul`,{className:`ft-col-links`,children:Xn.map(e=>(0,G.jsx)(`li`,{children:(0,G.jsx)(W,{to:e.to,children:e.label})},e.to))})]}),(0,G.jsxs)(`div`,{className:`ft-contact-col`,children:[(0,G.jsx)(`p`,{className:`ft-col-head`,children:`Contact`}),(0,G.jsxs)(`ul`,{className:`ft-contact-list`,children:[(0,G.jsxs)(`li`,{className:`ft-contact-item`,children:[(0,G.jsx)(`span`,{className:`ft-contact-ico`,children:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,G.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}),(0,G.jsxs)(`span`,{children:[`MIDC Industrial Area, Bhiwandi,`,(0,G.jsx)(`br`,{}),`Maharashtra – 421302`]})]}),(0,G.jsxs)(`li`,{className:`ft-contact-item`,children:[(0,G.jsx)(`span`,{className:`ft-contact-ico`,children:(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,G.jsx)(`path`,{d:`M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z`})})}),(0,G.jsx)(`span`,{children:`+91 00111 11111`})]}),(0,G.jsxs)(`li`,{className:`ft-contact-item`,children:[(0,G.jsx)(`span`,{className:`ft-contact-ico`,children:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,G.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,G.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]})}),(0,G.jsx)(`span`,{children:`info@suntech.in`})]})]})]})]}),(0,G.jsxs)(`div`,{className:`ft-bottom`,children:[(0,G.jsxs)(`span`,{className:`ft-copy`,children:[`© `,new Date().getFullYear(),` SunTech Packaging Machines. All rights reserved.`]}),(0,G.jsxs)(`div`,{className:`ft-bottom-right`,children:[(0,G.jsx)(`span`,{className:`ft-made`,children:`🇮🇳 Made in India`}),(0,G.jsxs)(`div`,{className:`ft-legal`,children:[(0,G.jsx)(`a`,{href:`#`,children:`Privacy Policy`}),(0,G.jsx)(`a`,{href:`#`,children:`Terms of Use`}),(0,G.jsx)(`a`,{href:`#`,children:`Sitemap`})]})]})]})]})})]})]})}var Qn=[`Initializing systems`,`Loading components`,`Calibrating precision`,`Syncing modules`,`Systems ready`],$n=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ══ ROOT ══ */
  .ld {
    position: fixed; inset: 0; z-index: 9999;
    background: #080C14;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Barlow', sans-serif;
    overflow: hidden;
  }

  /* ── Exit: vertical split wipe ── */
  .ld.ld-out {
    animation: ldExit 1s cubic-bezier(0.76,0,0.24,1) forwards;
    pointer-events: none;
  }
  @keyframes ldExit {
    0%   { opacity:1; transform: scaleY(1); }
    100% { opacity:0; transform: scaleY(0); transform-origin: top; }
  }

  /* ══ BG LAYERS ══ */

  /* Steel plate texture via repeating lines */
  .ld-steel {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 3px,
        rgba(255,255,255,0.012) 3px,
        rgba(255,255,255,0.012) 4px
      );
  }

  /* Fine grid */
  .ld-grid {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%);
  }

  /* Central radial glow — deep orange */
  .ld-glow {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 48% 42% at 50% 50%,
        rgba(245,140,20,0.07) 0%,
        rgba(245,140,20,0.02) 50%,
        transparent 70%),
      radial-gradient(ellipse 70% 60% at 50% 50%,
        rgba(15,40,80,0.40) 0%,
        transparent 100%);
    animation: ldGlow 6s ease-in-out infinite;
  }
  @keyframes ldGlow {
    0%,100% { opacity:0.8; }
    50%     { opacity:1; }
  }

  /* Horizontal accent lines */
  .ld-hline {
    position: absolute; left:0; right:0; height:1px;
    z-index:1; pointer-events:none;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(245,140,20,0.15) 25%,
      rgba(245,140,20,0.22) 50%,
      rgba(245,140,20,0.15) 75%,
      transparent 100%
    );
  }
  .ld-hline-t { top: clamp(60px,10vh,100px); }
  .ld-hline-b { bottom: clamp(60px,10vh,100px); }

  /* Vertical accent lines */
  .ld-vline {
    position: absolute; top:0; bottom:0; width:1px;
    z-index:1; pointer-events:none;
    background: linear-gradient(to bottom,
      transparent 0%,
      rgba(255,255,255,0.04) 25%,
      rgba(255,255,255,0.06) 50%,
      rgba(255,255,255,0.04) 75%,
      transparent 100%
    );
  }
  .ld-vline-l { left: clamp(40px,8vw,80px); }
  .ld-vline-r { right: clamp(40px,8vw,80px); }

  /* Corner brackets — engineering style */
  .ld-bracket {
    position: absolute; z-index:2; pointer-events:none;
    width: clamp(28px,5vw,44px);
    height: clamp(28px,5vw,44px);
  }
  .ld-bracket svg { width:100%; height:100%; }
  .ld-bracket-tl { top:clamp(18px,3vw,30px);  left:clamp(18px,3vw,30px);  }
  .ld-bracket-tr { top:clamp(18px,3vw,30px);  right:clamp(18px,3vw,30px); transform:scaleX(-1); }
  .ld-bracket-bl { bottom:clamp(18px,3vw,30px); left:clamp(18px,3vw,30px);  transform:scaleY(-1); }
  .ld-bracket-br { bottom:clamp(18px,3vw,30px); right:clamp(18px,3vw,30px); transform:scale(-1); }

  /* Scanning line across full screen */
  .ld-scanner {
    position: absolute; left:0; right:0; height:1px;
    z-index:3; pointer-events:none;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(245,140,20,0.0) 10%,
      rgba(245,140,20,0.30) 50%,
      rgba(245,140,20,0.0) 90%,
      transparent 100%
    );
    animation: ldScanner 4s ease-in-out infinite;
  }
  @keyframes ldScanner {
    0%   { top:10%;  opacity:0; }
    5%   { opacity:1; }
    95%  { opacity:0.6; }
    100% { top:90%;  opacity:0; }
  }

  /* ══ BODY ══ */
  .ld-body {
    position:relative; z-index:10;
    display:flex; flex-direction:column; align-items:center;
    width: min(92vw, 360px);
    animation: ldBodyIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both;
  }
  @keyframes ldBodyIn {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ══ LOGO UNIT ══ */
  .ld-unit {
    position:relative;
    width: clamp(140px,38vw,172px);
    height: clamp(140px,38vw,172px);
    margin-bottom: clamp(28px,5vw,38px);
    display:flex; align-items:center; justify-content:center;
  }

  /* Outer dashed engineering ring */
  .ld-ro {
    position:absolute; inset:0; border-radius:50%;
    border: 1px dashed rgba(255,255,255,0.10);
    animation: ldSpin 22s linear infinite;
  }
  /* 4 tick marks */
  .ld-ro::before,.ld-ro::after {
    content:'';
    position:absolute;
    background: rgba(245,140,20,0.55);
    border-radius:1px;
  }
  .ld-ro::before { top:50%; left:-4px; width:8px; height:1.5px; }
  .ld-ro::after  { top:-4px; left:50%; width:1.5px; height:8px; transform:translateX(-50%); }

  /* Mid orange ring */
  .ld-rm {
    position:absolute; inset:14px; border-radius:50%;
    border: 1px solid rgba(245,140,20,0.20);
    animation: ldSpin 14s linear infinite reverse;
  }
  .ld-rm::before,.ld-rm::after {
    content:'';
    position:absolute;
    width:5px; height:5px; border-radius:50%;
    background:#F58C14; opacity:0.9;
    box-shadow: 0 0 8px #F58C14;
    top:50%; left:-2.5px;
  }
  .ld-rm::after { top:-2.5px; left:50%; transform:translateX(-50%); }

  @keyframes ldSpin { to { transform:rotate(360deg); } }

  /* Inner logo box — dark steel */
  .ld-box {
    position:absolute; inset:26px; border-radius:50%;
    background: linear-gradient(145deg, #111827 0%, #0D1420 100%);
    border: 1px solid rgba(255,255,255,0.10);
    display:flex; align-items:center; justify-content:center;
    overflow:hidden;
    box-shadow:
      0 0 0 1px rgba(245,140,20,0.08),
      0 12px 40px rgba(0,0,0,0.70),
      inset 0 1px 0 rgba(255,255,255,0.07),
      inset 0 -1px 0 rgba(0,0,0,0.40);
  }
  .ld-box::before {
    content:'';
    position:absolute; inset:0; border-radius:50%;
    background: radial-gradient(circle at 50% 25%, rgba(255,255,255,0.06) 0%, transparent 55%);
    pointer-events:none;
  }

  .ld-logo {
    width:70%; height:70%;
    object-fit:contain;
    position:relative; z-index:1;
    opacity:0;
    animation: ldLogoIn 0.8s cubic-bezier(0.34,1.4,0.64,1) 0.55s forwards;
    filter: brightness(1.05) drop-shadow(0 2px 10px rgba(0,0,0,0.40));
  }
  @keyframes ldLogoIn {
    from { opacity:0; transform:scale(0.70); }
    to   { opacity:1; transform:scale(1); }
  }

  /* Scan line inside logo box */
  .ld-scan {
    position:absolute; inset:26px; border-radius:50%;
    overflow:hidden; pointer-events:none; z-index:5;
  }
  .ld-scan::after {
    content:'';
    position:absolute; left:0; right:0; height:2px;
    background:linear-gradient(90deg,transparent,rgba(245,140,20,0.55),transparent);
    opacity:0;
    animation: ldScanBox 2.4s ease 0.9s infinite;
  }
  @keyframes ldScanBox {
    0%  { top:0%;   opacity:0; }
    8%  { opacity:0.9; }
    92% { opacity:0.5; }
    100%{ top:100%; opacity:0; }
  }

  /* Live status dot */
  .ld-dot {
    position:absolute; bottom:24px; right:24px;
    width:10px; height:10px; border-radius:50%;
    background:#22C55E;
    box-shadow: 0 0 0 2px #0D1420, 0 0 12px rgba(34,197,94,0.50);
    z-index:6;
    animation: ldDotPulse 2s ease-in-out infinite;
  }
  @keyframes ldDotPulse {
    0%,100%{ box-shadow: 0 0 0 2px #0D1420, 0 0 8px rgba(34,197,94,0.40); }
    50%    { box-shadow: 0 0 0 2px #0D1420, 0 0 22px rgba(34,197,94,0.65), 0 0 40px rgba(34,197,94,0.20); }
  }

  /* ══ WORDMARK ══ */
  .ld-name {
    font-family:'Barlow Condensed',sans-serif;
    font-size: clamp(28px,8vw,38px);
    font-weight:900; letter-spacing:0.22em;
    text-transform:uppercase;
    color:#F0EDE8;
    line-height:1;
    margin-bottom:8px;
    opacity:0;
    animation: ldFadeUp 0.55s ease 1.1s forwards;
    display:flex; align-items:center; gap:2px;
  }
  .ld-name-plain { color:#F0EDE8; }
  .ld-name-accent { color:#F58C14; }

  /* ── Divider ── */
  .ld-div {
    width:48px; height:2px;
    background:linear-gradient(90deg,transparent,rgba(245,140,20,0.60),transparent);
    margin: 0 auto 10px;
    opacity:0;
    animation: ldFadeUp 0.5s ease 1.25s forwards;
  }

  /* Tagline */
  .ld-tag {
    font-family:'Barlow Condensed',sans-serif;
    font-size: clamp(9px,2.2vw,10.5px);
    font-weight:600; letter-spacing:0.32em;
    text-transform:uppercase;
    color:rgba(240,237,232,0.28);
    margin-bottom:34px;
    opacity:0;
    animation: ldFadeUp 0.55s ease 1.4s forwards;
  }

  @keyframes ldFadeUp {
    from { opacity:0; transform:translateY(9px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ══ PROGRESS ══ */
  .ld-prog {
    width:100%;
    opacity:0;
    animation: ldFadeUp 0.5s ease 1.6s forwards;
  }

  /* Segment indicators */
  .ld-segs {
    display:flex; gap:3px; margin-bottom:10px;
  }
  .ld-seg {
    flex:1; height:2px; border-radius:1px;
    background:rgba(255,255,255,0.06);
    transition:background 0.3s ease, box-shadow 0.3s ease;
  }
  .ld-seg.on {
    background:#F58C14;
    box-shadow:0 0 6px rgba(245,140,20,0.45);
  }

  /* Track */
  .ld-track {
    position:relative; height:2px;
    background:rgba(255,255,255,0.06);
    border-radius:2px; overflow:visible;
    margin-bottom:13px;
  }
  /* tick marks */
  .ld-track::before {
    content:'';
    position:absolute; inset:0;
    background-image:repeating-linear-gradient(
      90deg,
      transparent 0px, transparent 19px,
      rgba(255,255,255,0.05) 19px, rgba(255,255,255,0.05) 20px
    );
  }
  .ld-fill {
    position:absolute; top:0; left:0; height:100%;
    background:linear-gradient(90deg,rgba(245,140,20,0.6),#F58C14);
    border-radius:2px;
    transition:width 0.055s linear;
    box-shadow:0 0 10px rgba(245,140,20,0.45);
  }
  .ld-cursor {
    position:absolute; top:50%;
    transform:translate(-50%,-50%);
    width:8px; height:8px; border-radius:50%;
    background:#F5A623;
    box-shadow:0 0 0 2px rgba(245,140,20,0.18), 0 0 14px rgba(245,140,20,0.55);
    transition:left 0.055s linear;
    z-index:2;
  }

  /* Footer */
  .ld-foot {
    display:flex; justify-content:space-between;
    align-items:center; gap:8px;
  }
  .ld-msg {
    font-family:'Barlow Condensed',sans-serif;
    font-size:clamp(8.5px,2vw,10px); font-weight:600;
    letter-spacing:0.24em; text-transform:uppercase;
    color:rgba(240,237,232,0.20);
    flex:1; min-width:0; overflow:hidden;
    text-overflow:ellipsis; white-space:nowrap;
  }
  .ld-pct {
    font-family:'Barlow Condensed',sans-serif;
    font-weight:700; font-size:clamp(13px,3.5vw,16px);
    letter-spacing:0.08em;
    color:rgba(245,140,20,0.75);
    flex-shrink:0;
  }

  /* ══ ARC PROGRESS SVG ══ */
  .ld-arc {
    position:absolute; inset:14px;
    border-radius:50%; pointer-events:none;
  }
`;function er({pct:e}){let t=2*Math.PI*80,n=t*(1-e/100);return(0,G.jsxs)(`svg`,{className:`ld-arc`,viewBox:`0 0 200 200`,children:[(0,G.jsx)(`circle`,{cx:100,cy:100,r:80,fill:`none`,stroke:`rgba(245,140,20,0.08)`,strokeWidth:`1.5`}),(0,G.jsx)(`circle`,{cx:100,cy:100,r:80,fill:`none`,stroke:`#F58C14`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeDasharray:t,strokeDashoffset:n,transform:`rotate(-90 100 100)`,style:{transition:`stroke-dashoffset 0.055s linear`,opacity:.6}}),(0,G.jsx)(`circle`,{cx:100,cy:100,r:71,fill:`none`,stroke:`rgba(255,255,255,0.04)`,strokeWidth:`0.8`})]})}var tr=()=>(0,G.jsxs)(`svg`,{viewBox:`0 0 44 44`,fill:`none`,children:[(0,G.jsx)(`path`,{d:`M4 26 L4 4 L26 4`,stroke:`rgba(245,140,20,0.28)`,strokeWidth:`1.2`,strokeLinecap:`round`}),(0,G.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`,fill:`rgba(245,140,20,0.40)`}),(0,G.jsx)(`line`,{x1:`4`,y1:`14`,x2:`8`,y2:`14`,stroke:`rgba(245,140,20,0.18)`,strokeWidth:`0.8`}),(0,G.jsx)(`line`,{x1:`14`,y1:`4`,x2:`14`,y2:`8`,stroke:`rgba(245,140,20,0.18)`,strokeWidth:`0.8`})]});function nr({onFinish:e}){let[t,n]=(0,x.useState)(0),[r,i]=(0,x.useState)(0),[a,o]=(0,x.useState)(!1),s=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let t=performance.now(),r=a=>{let c=a-t,l=Math.min(c/3200,1),u=1-(1-l)**3;n(Math.round(u*100)),i(Math.min(Qn.length-1,Math.floor(u*Qn.length))),l<1?s.current=requestAnimationFrame(r):setTimeout(()=>{o(!0),setTimeout(()=>e?.(),1e3)},600)};return s.current=requestAnimationFrame(r),()=>cancelAnimationFrame(s.current)},[e]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:$n}),(0,G.jsxs)(`div`,{className:`ld${a?` ld-out`:``}`,children:[(0,G.jsx)(`div`,{className:`ld-steel`}),(0,G.jsx)(`div`,{className:`ld-grid`}),(0,G.jsx)(`div`,{className:`ld-glow`}),(0,G.jsx)(`div`,{className:`ld-hline ld-hline-t`}),(0,G.jsx)(`div`,{className:`ld-hline ld-hline-b`}),(0,G.jsx)(`div`,{className:`ld-vline ld-vline-l`}),(0,G.jsx)(`div`,{className:`ld-vline ld-vline-r`}),(0,G.jsx)(`div`,{className:`ld-bracket ld-bracket-tl`,children:(0,G.jsx)(tr,{})}),(0,G.jsx)(`div`,{className:`ld-bracket ld-bracket-tr`,children:(0,G.jsx)(tr,{})}),(0,G.jsx)(`div`,{className:`ld-bracket ld-bracket-bl`,children:(0,G.jsx)(tr,{})}),(0,G.jsx)(`div`,{className:`ld-bracket ld-bracket-br`,children:(0,G.jsx)(tr,{})}),(0,G.jsx)(`div`,{className:`ld-scanner`}),(0,G.jsxs)(`div`,{className:`ld-body`,children:[(0,G.jsxs)(`div`,{className:`ld-unit`,children:[(0,G.jsx)(`div`,{className:`ld-ro`}),(0,G.jsx)(`div`,{className:`ld-rm`}),(0,G.jsx)(er,{pct:t}),(0,G.jsx)(`div`,{className:`ld-box`,children:(0,G.jsx)(`img`,{className:`ld-logo`,src:`/logo.png`,alt:`SunTech`,draggable:!1})}),(0,G.jsx)(`div`,{className:`ld-scan`}),(0,G.jsx)(`div`,{className:`ld-dot`})]}),(0,G.jsxs)(`p`,{className:`ld-name`,children:[(0,G.jsx)(`span`,{className:`ld-name-plain`,children:`Sun`}),(0,G.jsx)(`span`,{className:`ld-name-accent`,children:`Tech`})]}),(0,G.jsx)(`div`,{className:`ld-div`}),(0,G.jsx)(`p`,{className:`ld-tag`,children:`Precision Packaging Systems`}),(0,G.jsxs)(`div`,{className:`ld-prog`,children:[(0,G.jsx)(`div`,{className:`ld-segs`,children:[0,20,40,60,80].map((e,n)=>(0,G.jsx)(`div`,{className:`ld-seg${t>=e?` on`:``}`},n))}),(0,G.jsxs)(`div`,{className:`ld-track`,children:[(0,G.jsx)(`div`,{className:`ld-fill`,style:{width:`${t}%`}}),(0,G.jsx)(`div`,{className:`ld-cursor`,style:{left:`${t}%`}})]}),(0,G.jsxs)(`div`,{className:`ld-foot`,children:[(0,G.jsx)(`span`,{className:`ld-msg`,children:Qn[r]}),(0,G.jsxs)(`span`,{className:`ld-pct`,children:[String(t).padStart(3,`0`),`%`]})]})]})]})]})]})}var rr=[{keyword:`namkeen`,tag:`Namkeen`},{keyword:`snacks`,tag:`Snacks`},{keyword:`spices`,tag:`Spices`},{keyword:`powder`,tag:`Powder`},{keyword:`grain`,tag:`Grains`},{keyword:`seeds`,tag:`Grains`},{keyword:`rice`,tag:`Grains`},{keyword:`masala`,tag:`Spices`},{keyword:`flour`,tag:`Powder`},{keyword:`chips`,tag:`Snacks`},{keyword:`nut`,tag:`Snacks`}],ir=(e=``)=>{let t=String(e).toLowerCase(),n=new Set;return rr.forEach(({keyword:e,tag:r})=>{t.includes(e)&&n.add(r)}),Array.from(n)},ar=e=>{let t=e?.specs?.[`Machine Type`]?.toLowerCase()||``;return/weigh|fill|vffs|pouch|auger/.test(t)?`Filling & Packaging`:/seal|vacuum|shrink|band/.test(t)?`Sealing`:/label|print|coder|inkjet|tablet/.test(t)?`Labelling & Coding`:/processor|slicer|cleaner|grinder|destoner|slicing/.test(t)?`Processing`:`Industrial Equipment`},or=[{name:`Banana Slicer Machine`,image:`/suntech/products/Banana Slicer Making Machine.png`,shortDesc:`Uniform-cut banana slicing for high-volume chips & snack production lines.`,specs:{"Machine Type":`Banana Slicing Machine`,Material:`Stainless Steel (SS 304)`,"Automation Grade":`Semi-Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`0.5 HP`,Capacity:`200–400 kg/hr`,"Slice Thickness":`1–4 mm (adjustable)`,"Drive System":`Belt & Pulley`,Application:`Banana chips, plantain snacks, food processing units`,Frame:`Heavy-duty MS powder-coated`,Warranty:`1 Year`}},{name:`Camphor Making Machine`,image:`/suntech/products/Camphor Making Machine.png`,shortDesc:`Automatic tablet-press compacting camphor powder into uniform tablet form.`,specs:{"Machine Type":`Tablet / Camphor Press Machine`,Material:`Mild Steel (MS) with SS contact parts`,"Automation Grade":`Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`1 HP`,"Production Capacity":`60,000–80,000 tablets/hr`,"Tablet Size":`5 g – 50 g (interchangeable dies)`,"Drive System":`Rotary cam mechanism`,Application:`Camphor tablets, moth balls, pharmaceutical tablets`,Frame:`Heavy-duty welded MS frame`,Warranty:`1 Year`}},{name:`Coder Printer`,image:`/suntech/products/Coder Printer.png`,shortDesc:`Continuous inkjet coder for high-resolution batch, date & lot printing on pouches.`,specs:{"Machine Type":`Continuous Inkjet (CIJ) Coder`,Material:`Stainless Steel housing`,"Automation Grade":`Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Print Resolution":`Up to 600 DPI`,"Print Speed":`Up to 800 m/min`,"No. of Print Lines":`Up to 5 lines`,"Ink Type":`Fast-dry / MEK-based inks`,Application:`Pouches, bottles, cartons, pipes, cables`,Interface:`LCD touchscreen, USB port`,Warranty:`1 Year`}},{name:`Coding Machine`,image:`/suntech/products/Coding Machine.png`,shortDesc:`Inline thermal-transfer batch/date coder for flexible packaging and carton lines.`,specs:{"Machine Type":`Thermal Transfer Overprinter (TTO)`,Material:`Powder-coated MS body`,"Automation Grade":`Semi-Automatic / Inline`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Print Area":`Max 53 mm × 110 mm`,"Ribbon Width":`33 mm / 55 mm`,Characters:`Alphanumeric, logos, barcodes`,Application:`Date coding on pouches, cartons, labels, bottles`,Speed:`Up to 500 packs/min`,Interface:`Digital keypad`,Warranty:`1 Year`}},{name:`Collar Type VFFS Machine`,image:`/suntech/products/Collar Type VFFS Machine.png`,shortDesc:`Vertical Form-Fill-Seal with collar former for free-flow powders, granules & seeds.`,specs:{"Machine Type":`Collar Type Vertical Form Fill Seal (VFFS)`,Material:`SS 304 contact parts, MS frame`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`380V / 50 Hz, Three Phase`,"Motor Power":`2.5 HP`,"Pouch Size":`50 g – 5 kg`,Speed:`20–40 pouches/min`,"Sealing Type":`Horizontal + Vertical fin seal (heat seal)`,"Filling System":`Auger / Cup / Weigh filler (optional)`,Application:`Spices, flour, grains, seeds, coffee, tea`,Warranty:`1 Year`}},{name:`Food Processing Machine`,image:`/suntech/products/Food Processing Machines.png`,shortDesc:`Multi-function food processing unit for cutting, mixing and pre-processing applications.`,specs:{"Machine Type":`Multi-function Food Processor`,Material:`Stainless Steel SS 304 (all food-contact parts)`,"Automation Grade":`Semi-Automatic`,"Power Source":`Electric`,Voltage:`220V–440V / 50 Hz`,"Motor Power":`1–5 HP (model dependent)`,Capacity:`100–500 kg/hr`,Functions:`Slicing, dicing, grinding, mixing`,Application:`Vegetables, fruits, snacks, bakery, namkeen, food factories`,Compliance:`Food-grade, ISO-compliant`,Frame:`Heavy-duty SS tubular frame`,Warranty:`1 Year`}},{name:`Heat Air Gun`,image:`/suntech/products/Heat Air Gun.png`,shortDesc:`Industrial hot-air gun for shrink-wrap finishing, heat-sealing rework and PVC sleeve application.`,specs:{"Machine Type":`Industrial Heat Gun`,"Body Material":`Heat-resistant ABS / Aluminium nozzle`,"Automation Grade":`Manual`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Power Consumption":`1600 W – 2000 W`,"Temperature Range":`50°C – 650°C (variable)`,Airflow:`250 – 500 L/min (2 speed settings)`,Application:`Shrink sleeves, PVC wrap, heat-shrink tubing, packaging rework`,"Safety Feature":`Overheat protection, stand-base included`,Warranty:`6 Months`}},{name:`Labelling Machine`,image:`/suntech/products/Labelling Machine.png`,shortDesc:`High-speed self-adhesive labeller for accurate front/back and wraparound label placement.`,specs:{"Machine Type":`Self-Adhesive Pressure Sensitive Labelling Machine`,Material:`SS 304 & powder-coated MS`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`0.5 HP (AC servo)`,"Labelling Speed":`40–120 bottles/min`,"Label Size":`W: 10–150 mm, L: 20–350 mm`,"Container Diameter":`20–120 mm`,Accuracy:`± 0.5 mm`,Application:`Bottles, jars, spices, masala, food, cosmetics — pharma, namkeen pouches`,Warranty:`1 Year`}},{name:`Liquid Filling Machine`,image:`/suntech/products/Liquid Filling Machine.png`,shortDesc:`High-precision volumetric piston filling for liquids, edible oils, syrups and chemicals.`,specs:{"Machine Type":`Volumetric Piston Liquid Filling Machine`,Material:`SS 316 contact parts, SS 304 frame`,"Automation Grade":`Semi-Automatic / Automatic`,"Power Source":`Electric + Pneumatic`,Voltage:`220V / 50 Hz, Single Phase`,"Air Pressure":`0.4–0.6 MPa`,"Filling Range":`50 ml – 5,000 ml`,"Filling Accuracy":`± 0.5%`,"No. of Filling Heads":`1 – 6 (configurable)`,Speed:`20–60 fills/min`,Application:`Edible oil, water, syrup, shampoo, disinfectant, pharma liquids`,Warranty:`1 Year`}},{name:`Nitrogen Flushing Machine`,image:`/suntech/products/Nitrogen Flushing Machine.png`,shortDesc:`MAP sealing unit with nitrogen/gas flushing to extend shelf life and maintain freshness.`,specs:{"Machine Type":`Nitrogen Flushing & Sealing Machine`,Material:`SS 304`,"Automation Grade":`Semi-Automatic`,"Power Source":`Electric + Gas supply (N₂ / CO₂)`,Voltage:`220V / 50 Hz, Single Phase`,"Sealing Width":`Up to 12 mm`,"Gas Pressure":`0.1–0.3 MPa`,"Gas Residual O₂":`< 1% (after flush)`,Speed:`10–25 packs/min`,Application:`Chips, nuts, snacks, biscuits, namkeen, cheese, coffee, pharma — MAP packaging`,"Bag Type":`Flat/pillow/gusset pouches`,Warranty:`1 Year`}},{name:`Packaging Machine`,image:`/suntech/products/Packaging Machine.png`,shortDesc:`Multi-purpose automatic packaging machine for powders, granules and free-flow materials.`,specs:{"Machine Type":`Automatic Packaging Machine (Auger Filler + VFFS)`,Material:`SS 304 food-grade contact parts`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`380V / 50 Hz, Three Phase`,"Motor Power":`3 HP`,"Pouch Weight Range":`50 g – 2 kg`,Speed:`25–50 pouches/min`,"Sealing Type":`Heat seal, back/fin seal`,Application:`Atta flour, masala spices, salt, sugar, coffee, rice grains, namkeen`,"HMI Control":`PLC + Touchscreen`,Warranty:`1 Year`}},{name:`Packing Machine`,image:`/suntech/products/Packing Machine.png`,shortDesc:`Compact semi-auto packing solution suited for small to mid-scale production facilities.`,specs:{"Machine Type":`Semi-Automatic Granule / Powder Packing Machine`,Material:`MS powder-coated body, SS 304 contact parts`,"Automation Grade":`Semi-Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`1.5 HP`,"Pack Weight":`100 g – 5 kg`,Speed:`8–20 pouches/min`,Sealing:`Impulse heat sealing`,Application:`Spices, pulses, seeds grain, detergent, namkeen, chemical powders`,Frame:`Mild steel, heavy-duty`,Warranty:`1 Year`}},{name:`Pouch Packaging Machine`,image:`/suntech/products/Pouch Packaging Machine.png`,shortDesc:`Pre-made pouch fill-seal machine for snacks, namkeen, seeds and small granules.`,specs:{"Machine Type":`Pre-made Pouch Fill & Seal Machine`,Material:`SS 304 & anodised aluminium`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric + Pneumatic`,Voltage:`220V / 50 Hz, Single Phase`,"Air Pressure":`0.5–0.7 MPa`,"Pouch Size":`60×80 mm – 250×350 mm`,Speed:`15–40 pouches/min`,"Weighing System":`Multi-head combination weigher (optional)`,Application:`Namkeen, chips, popcorn, snacks, seeds grain, candy, frozen foods`,"Pouch Types":`Pillow, gusset, stand-up zipper`,Warranty:`1 Year`}},{name:`Powder Packaging Machine`,image:`/suntech/products/Powder Packaging Machine.png`,shortDesc:`Dedicated auger-fill system for fine, free-flowing and non-free-flowing powders.`,specs:{"Machine Type":`Auger Filler Powder Packaging Machine`,Material:`SS 316 auger & hopper, SS 304 frame`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`380V / 50 Hz, Three Phase`,"Motor Power":`2.5 HP`,"Filling Range":`10 g – 3 kg`,"Filling Accuracy":`± 1–2%`,Speed:`20–60 pouches/min`,Application:`Masala spices, chilli powder, turmeric, flour powder, protein powder, cement additives`,"Sealing Type":`Back / fin seal (heat seal)`,Warranty:`1 Year`}},{name:`Rice Destoner Cleaning Machine`,image:`/suntech/products/Rice Destoner Cleaning Machine.png`,shortDesc:`Gravity separator that effectively removes stones, pebbles and heavy impurities from grain.`,specs:{"Machine Type":`Gravity Rice Destoner / Grain Cleaner`,Material:`Mild Steel with SS mesh screens`,"Automation Grade":`Automatic`,"Power Source":`Electric`,Voltage:`220V–440V / 50 Hz`,"Motor Power":`0.75–1.5 HP`,Capacity:`500 kg – 3,000 kg/hr`,"Cleaning Efficiency":`> 98% stone removal`,"Screen Size":`Adjustable mesh sizes`,Application:`Rice grain, wheat grain, maize, dal, sesame seeds, sunflower seeds`,Frame:`Heavy-duty welded MS`,Warranty:`1 Year`}},{name:`Scrubber Packaging Machine`,image:`/suntech/products/Scrubber Packaging Machine.png`,shortDesc:`Custom-configured packaging machine for scrubber pads and household cleaning products.`,specs:{"Machine Type":`Horizontal / Flow-Wrap Scrubber Packing Machine`,Material:`SS 304 & powder-coated MS`,"Automation Grade":`Semi-Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`1 HP`,"Pack Size":`Customisable (single / multi-pack)`,Speed:`20–60 packs/min`,"Film Type":`BOPP, POF, PVC shrink film`,Application:`Scrubber pads, sponges, dishwash items, household goods`,"Film Width":`Up to 500 mm`,Warranty:`1 Year`}},{name:`Sealing Machine`,image:`/suntech/products/Sealing Machine.png`,shortDesc:`Continuous band sealer for fast, consistent and airtight closure of all pouch types.`,specs:{"Machine Type":`Continuous Band Sealing Machine`,Material:`MS body, SS 304 seal area`,"Automation Grade":`Automatic (continuous)`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`180 W`,"Sealing Width":`6 mm / 10 mm`,"Sealing Speed":`0–12 m/min (variable)`,"Temperature Range":`0–300°C (digital control)`,"Bag Type":`All laminated films, PE, PP, foil, BOPP`,Application:`Namkeen, spices, food, pharma, chemical, FMCG pouches, snacks`,Warranty:`1 Year`}},{name:`Seeds Packaging Machine`,image:`/suntech/products/Seeds Packaging Machine.png`,shortDesc:`Precision weigher-filler engineered for vegetable seeds, spice seeds and agricultural inputs.`,specs:{"Machine Type":`Automatic Seeds Weighing & Packaging Machine`,Material:`SS 304 hopper & contact parts`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`1.5 HP`,"Pack Weight":`5 g – 500 g`,"Weighing Accuracy":`± 0.5 g`,Speed:`25–50 packs/min`,Application:`Vegetable seeds, spice seeds grain, agricultural seed sachets`,Sealing:`Heat seal (fin / back seal)`,Warranty:`1 Year`}},{name:`Shrink Tunnel Packaging Machine`,image:`/suntech/products/Shrink Tunnel Packaging Machine.png`,shortDesc:`Conveyor-fed heat-shrink tunnel providing tamper-evident, tightly-wrapped bundle packaging.`,specs:{"Machine Type":`Hot Air Shrink Tunnel`,Material:`SS 304 inner chamber, MS outer body`,"Automation Grade":`Automatic (inline conveyor)`,"Power Source":`Electric`,Voltage:`380V / 50 Hz, Three Phase`,"Motor Power":`1.5 HP`,"Tunnel Dimensions":`W: 400–600 mm, H: 150–250 mm`,"Temperature Range":`90°C – 200°C`,"Belt Speed":`0–10 m/min (variable)`,"Film Type":`PVC, POF, PE shrink film`,Application:`Bottles, cans, multipacks, snacks, biscuits, electronics`,Warranty:`1 Year`}},{name:`Strapping Machine`,image:`/suntech/products/Strapping Machine.png`,shortDesc:`Automatic PET/PP strapping machine for secure carton and bundle unitising at high throughput.`,specs:{"Machine Type":`Automatic Table-top / Arch Strapping Machine`,Material:`MS powder-coated frame, SS wear parts`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`750 W`,"Strap Width":`9 mm / 12 mm / 15 mm`,"Strap Material":`PP / PET`,"Strapping Speed":`1.5–2.5 sec/strap`,"Table Height":`750 mm (standard)`,Application:`Cartons, newspapers, corrugated boxes, bundled products, namkeen cartons, snacks boxes`,Warranty:`1 Year`}},{name:`Vacuum Packaging Machine`,image:`/suntech/products/Vacuum Packaging Machine.png`,shortDesc:`Chamber-type vacuum sealer for extended shelf life across food and pharmaceutical products.`,specs:{"Machine Type":`Double-Chamber Vacuum Packaging Machine`,Material:`SS 304 full body`,"Automation Grade":`Automatic (cycle-based)`,"Power Source":`Electric`,Voltage:`220V–380V / 50 Hz`,"Vacuum Pump Power":`0.37–0.75 kW`,"Vacuum Degree":`–0.098 MPa`,"Chamber Size":`400×500 mm (standard)`,"Sealing Bar":`2 × 400 mm`,"Cycle Time":`20–40 sec`,Application:`Meat, cheese, seafood, pickles, nuts snacks, namkeen, pharma items`,Warranty:`1 Year`}},{name:`Wrapping Machine`,image:`/suntech/products/Wrapping Machine.png`,shortDesc:`Horizontal flow-wrap machine for biscuits, soaps, bars and flat rectangular products.`,specs:{"Machine Type":`Horizontal Flow Wrapping Machine (HFFS)`,Material:`SS 304 contact parts, painted MS frame`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`2 HP (servo-driven)`,"Wrap Speed":`60–200 packs/min`,"Pack Size":`L: 60–380 mm, W: 30–180 mm, H: 10–80 mm`,"Film Type":`BOPP, CPP, PVC, laminated film`,"Sealing Type":`Fin seal + end seal (heat)`,Application:`Biscuits snacks, bread, soap bars, energy bars, namkeen, sanitary pads`,Warranty:`1 Year`}}].map(e=>({...e,description:e.shortDesc||``,category:ar(e),application:ir(e.specs?.Application)})),sr=[`Namkeen`,`Spices`,`Powder`,`Grains`,`Snacks`],cr={Namkeen:{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,G.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z`}),(0,G.jsx)(`path`,{d:`M8 12s1.5 2 4 2 4-2 4-2`}),(0,G.jsx)(`path`,{d:`M9 9h.01M15 9h.01`})]}),label:`Namkeen`,desc:`Savoury snack production lines`,count_label:`Namkeen Machines`},Spices:{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,G.jsx)(`path`,{d:`M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`})]}),label:`Spices`,desc:`Masala & spice blending units`,count_label:`Spice Machines`},Powder:{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,G.jsx)(`path`,{d:`M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z`}),(0,G.jsx)(`polyline`,{points:`9 22 9 12 15 12 15 22`})]}),label:`Powder`,desc:`Fine powder filling & sealing`,count_label:`Powder Machines`},Grains:{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,G.jsx)(`ellipse`,{cx:`12`,cy:`12`,rx:`4`,ry:`7`}),(0,G.jsx)(`path`,{d:`M12 5C8 3 4 5 4 9M12 19c-4 2-8 0-8-4M12 5c4-2 8 0 8 4M12 19c4 2 8 0 8-4`})]}),label:`Grains`,desc:`Grain & seed handling`,count_label:`Grain Machines`},Snacks:{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,G.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,G.jsx)(`path`,{d:`M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2`}),(0,G.jsx)(`line`,{x1:`12`,y1:`12`,x2:`12`,y2:`16`}),(0,G.jsx)(`line`,{x1:`10`,y1:`14`,x2:`14`,y2:`14`})]}),label:`Snacks`,desc:`Snack food processing`,count_label:`Snack Machines`}};function lr(){let[e]=En(),t=at(),n=e.get(`type`)||`Namkeen`,[r,i]=(0,x.useState)(n),a=(0,x.useRef)(n);(0,x.useEffect)(()=>{n===a.current||(a.current=n),i(n)},[n]);let o=e=>{i(e),t(`/applications?type=${encodeURIComponent(e)}`,{replace:!0})},s=or.filter(e=>Array.isArray(e.application)&&e.application.includes(r)),c=cr[r]||{};return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-900: #111827;
          --blue-800: #0d1117;
          --blue-700: #1f2937;
          --blue-600: #1f2937;
          --blue-500: #111827;
          --blue-400: #1f2937;
          --blue-300: rgba(17,24,39,0.3);
          --blue-200: rgba(17,24,39,0.2);
          --blue-100: rgba(17,24,39,0.1);
          --blue-50:  rgba(17,24,39,0.05);
          --white:    #ffffff;
          --gray-50:  #f8fafc;
          --gray-100: #f1f5f9;
          --gray-200: #e2e8f0;
          --gray-400: #94a3b8;
          --gray-600: #475569;
          --gray-800: #1e293b;
        }

        .app-page {
          font-family: 'Barlow', sans-serif;
          background: var(--white);
        }

        /* ── TICKER ── */
        .app-topband {
          background: var(--blue-900);
          padding: 14px 0;
          overflow: hidden;
        }

        .app-ticker {
          display: flex;
          gap: 64px;
          animation: appTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes appTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .app-ticker-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .app-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-400);
          flex-shrink: 0;
        }

        /* ── HERO ── */
        .app-hero {
          position: relative;
          background: var(--blue-900);
          padding: 72px 28px 0;
          overflow: hidden;
        }

        /* blueprint grid */
        .app-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        /* radial glow */
        .app-hero::after {
          content: '';
          position: absolute;
          top: -100px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 65%);
          pointer-events: none;
        }

        .app-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1220px;
          margin: 0 auto;
          padding-bottom: 0;
        }

        .app-hero-top {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 48px;
        }

        .app-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--blue-400);
        }

        .app-eyebrow::before {
          content: '';
          display: block;
          width: 32px; height: 2px;
          background: var(--blue-400);
        }

        .app-hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 800;
          color: var(--white);
          margin: 0;
          line-height: 0.95;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .app-hero-title span { color: var(--blue-400); }

        .app-hero-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          margin: 6px 0 0;
          max-width: 520px;
          line-height: 1.75;
          font-weight: 300;
        }

        /* ── FILTER TABS (attached to hero bottom) ── */
        .app-filter-band {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 0;
          border-top: 1.5px solid rgba(255,255,255,0.07);
          margin-top: 40px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .app-filter-band::-webkit-scrollbar { display: none; }

        .app-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 18px 28px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          border-bottom: 3px solid transparent;
          background: transparent;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }

        .app-filter-btn svg { opacity: 0.5; transition: opacity 0.2s; }

        .app-filter-btn:hover {
          color: rgba(255,255,255,0.75);
          background: rgba(255,255,255,0.04);
        }

        .app-filter-btn:hover svg { opacity: 0.8; }

        .app-filter-btn.active {
          color: var(--white);
          border-bottom-color: var(--blue-400);
          background: rgba(59,130,246,0.08);
        }

        .app-filter-btn.active svg { opacity: 1; color: var(--blue-400); }

        /* ── CONTENT AREA ── */
        .app-content {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 28px 96px;
        }

        /* ── META BAR ── */
        .app-meta-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 0 28px;
          border-bottom: 1.5px solid var(--gray-200);
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .app-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--blue-600);
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          padding: 6px 14px;
          border-radius: 5px;
        }

        .app-meta-pill svg { color: var(--blue-500); }

        .app-meta-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gray-200);
          flex-shrink: 0;
        }

        .app-meta-count {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--gray-400);
          text-transform: uppercase;
        }

        .app-meta-count strong {
          color: var(--blue-900);
        }

        .app-meta-desc {
          font-size: 13px;
          color: var(--gray-400);
        }

        /* ── GRID ── */
        .app-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
        }

        @media (min-width: 600px) { .app-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .app-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── CARD ── */
        .app-card {
          position: relative;
          background: var(--white);
          border-right: 1.5px solid var(--gray-200);
          border-bottom: 1.5px solid var(--gray-200);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s;
          animation: appCardIn 0.45s cubic-bezier(0.22,1,0.36,1) both;
          overflow: hidden;
        }

        .app-card:nth-child(3n) { border-right: none; }
        @media (max-width: 999px) { .app-card:nth-child(2n) { border-right: none; } .app-card:nth-child(3n) { border-right: 1.5px solid var(--gray-200); } }
        @media (max-width: 599px) { .app-card { border-right: none; } }

        @keyframes appCardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .app-card:hover {
          background: var(--blue-50);
          z-index: 2;
          box-shadow: 0 0 0 1.5px var(--blue-400) inset, 0 12px 40px rgba(37,99,235,0.08);
        }

        /* top accent line */
        .app-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--blue-500);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);
          z-index: 3;
        }

        .app-card:hover::before { transform: scaleX(1); }

        /* ── CARD IMAGE ── */
        .app-card-img {
          height: 200px;
          background: var(--gray-50);
          position: relative;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1.5px solid var(--gray-200);
          overflow: hidden;
          transition: background 0.2s;
        }

        /* blueprint grid on image bg */
        .app-card-img::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .app-card:hover .app-card-img {
          background: var(--blue-50);
          border-bottom-color: var(--blue-200);
        }

        .app-card-img img {
          max-height: 100%; max-width: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
          filter: drop-shadow(0 8px 20px rgba(10,22,40,0.1));
        }

        .app-card:hover .app-card-img img {
          transform: translateY(-6px) scale(1.05);
        }

        /* category badge */
        .app-card-cat {
          position: absolute;
          top: 12px; right: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 9px;
          border-radius: 4px;
          background: var(--gray-100);
          color: var(--gray-400);
          border: 1px solid var(--gray-200);
          z-index: 2;
          transition: background 0.2s, color 0.2s;
        }

        .app-card:hover .app-card-cat {
          background: var(--blue-500);
          color: var(--white);
          border-color: var(--blue-500);
        }

        /* ── CARD BODY ── */
        .app-card-body {
          padding: 20px 22px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .app-card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: var(--blue-900);
          margin: 0;
          line-height: 1.15;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        .app-card-tags {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .app-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 3px;
          background: var(--blue-50);
          color: var(--blue-600);
          border: 1px solid var(--blue-200);
        }

        .app-card-desc {
          font-size: 12.5px;
          color: var(--gray-600);
          line-height: 1.7;
          margin: 0;
          flex: 1;
          font-weight: 400;
        }

        /* card footer */
        .app-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1.5px solid var(--gray-100);
          margin-top: auto;
        }

        .app-card-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--blue-500);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }

        .app-card:hover .app-card-link { gap: 10px; }

        .app-card-arrow {
          width: 28px; height: 28px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }

        .app-card:hover .app-card-arrow {
          background: var(--blue-600);
          border-color: var(--blue-600);
          transform: translateX(2px);
        }

        .app-card:hover .app-card-arrow svg { stroke: var(--white); }

        /* ── EMPTY STATE ── */
        .app-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 24px;
          color: var(--gray-400);
        }

        .app-empty-icon {
          width: 64px; height: 64px;
          margin: 0 auto 20px;
          border-radius: 10px;
          background: var(--gray-100);
          border: 1.5px solid var(--gray-200);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-empty-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          color: var(--gray-600);
        }

        .app-empty-sub {
          font-size: 13px;
          font-weight: 400;
          color: var(--gray-400);
        }
      `}),(0,G.jsxs)(`main`,{className:`app-page`,children:[(0,G.jsx)(`div`,{className:`app-topband`,children:(0,G.jsx)(`div`,{className:`app-ticker`,children:[...[,,]].map((e,t)=>[`Food Industry`,`Pharma Packaging`,`Agro Products`,`FMCG Lines`,`Custom Solutions`,`ISO 9001 Certified`,`500+ Installations`,`40+ Cities`].map((e,n)=>(0,G.jsxs)(`span`,{className:`app-ticker-item`,children:[(0,G.jsx)(`span`,{className:`app-ticker-dot`}),e]},`${t}-${n}`)))})}),(0,G.jsx)(`section`,{className:`app-hero`,children:(0,G.jsxs)(`div`,{className:`app-hero-inner`,children:[(0,G.jsxs)(`div`,{className:`app-hero-top`,children:[(0,G.jsx)(`span`,{className:`app-eyebrow`,children:`Industry Applications`}),(0,G.jsxs)(`h1`,{className:`app-hero-title`,children:[`Machines for `,(0,G.jsx)(`span`,{children:`Every`}),` Industry`]}),(0,G.jsx)(`p`,{className:`app-hero-sub`,children:`Select your industry below to discover packaging machines engineered for your specific production requirements.`})]}),(0,G.jsx)(`div`,{className:`app-filter-band`,children:sr.map(e=>(0,G.jsxs)(`button`,{onClick:()=>o(e),className:`app-filter-btn${r===e?` active`:``}`,children:[cr[e]?.icon,e]},e))})]})}),(0,G.jsxs)(`div`,{className:`app-content`,children:[(0,G.jsxs)(`div`,{className:`app-meta-bar`,children:[(0,G.jsxs)(`span`,{className:`app-meta-pill`,children:[c.icon,c.label]}),(0,G.jsx)(`span`,{className:`app-meta-sep`}),(0,G.jsxs)(`span`,{className:`app-meta-count`,children:[(0,G.jsx)(`strong`,{children:s.length}),` Machine`,s.length===1?``:`s`,` Found`]}),c.desc&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`span`,{className:`app-meta-sep`}),(0,G.jsx)(`span`,{className:`app-meta-desc`,children:c.desc})]})]}),(0,G.jsx)(`div`,{className:`app-grid`,children:s.length===0?(0,G.jsxs)(`div`,{className:`app-empty`,children:[(0,G.jsx)(`div`,{className:`app-empty-icon`,children:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,width:`28`,height:`28`,style:{color:`#94a3b8`},children:[(0,G.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,G.jsx)(`path`,{d:`M21 21l-4.35-4.35`})]})}),(0,G.jsx)(`div`,{className:`app-empty-title`,children:`No Machines Found`}),(0,G.jsxs)(`div`,{className:`app-empty-sub`,children:[`No products matched for "`,r,`" — try another category.`]})]}):s.map((e,t)=>(0,G.jsxs)(W,{to:`/product/${encodeURIComponent(e.name)}`,className:`app-card`,style:{animationDelay:`${t*55}ms`},children:[(0,G.jsxs)(`div`,{className:`app-card-img`,children:[(0,G.jsx)(`span`,{className:`app-card-cat`,children:e.category}),(0,G.jsx)(`img`,{src:e.image,alt:e.name})]}),(0,G.jsxs)(`div`,{className:`app-card-body`,children:[(0,G.jsx)(`h3`,{className:`app-card-name`,children:e.name}),e.application?.length>0&&(0,G.jsx)(`div`,{className:`app-card-tags`,children:e.application.map(e=>(0,G.jsx)(`span`,{className:`app-tag`,children:e},e))}),(0,G.jsx)(`p`,{className:`app-card-desc`,children:e.description||e.shortDesc}),(0,G.jsxs)(`div`,{className:`app-card-footer`,children:[(0,G.jsxs)(`span`,{className:`app-card-link`,children:[`View Details`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})]}),(0,G.jsx)(`span`,{className:`app-card-arrow`,children:(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`#1f2937`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})})]})]})]},t))})]})]})]})}var ur=[{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`polygon`,{points:`23 7 16 12 23 17 23 7`}),(0,G.jsx)(`rect`,{x:`1`,y:`5`,width:`15`,height:`14`,rx:`2`})]}),title:`Product Videos`,desc:`Watch live demonstrations of our packaging machines in real production environments.`,tag:`Video Library`,link:`/media/videos`},{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`path`,{d:`M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2`}),(0,G.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,G.jsx)(`path`,{d:`M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75`})]}),title:`Customer Stories`,desc:`Real testimonials and case studies from 500+ clients across India and abroad.`,tag:`Testimonials`,link:`/media/stories`},{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`}),(0,G.jsx)(`line`,{x1:`8`,y1:`21`,x2:`16`,y2:`21`}),(0,G.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12`,y2:`21`})]}),title:`Factory Tours`,desc:`Go inside our MIDC manufacturing facility and see our quality-first process firsthand.`,tag:`Behind the Scenes`,link:`/media/factory`}],dr=[{num:`500+`,label:`Installations`},{num:`40+`,label:`Cities`},{num:`15+`,label:`Years`},{num:`99%`,label:`Uptime`}];function fr(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-900: #111827;
          --blue-800: #0d1117;
          --blue-600: #1f2937;
          --blue-500: #111827;
          --blue-400: #1f2937;
          --blue-300: rgba(17,24,39,0.3);
          --blue-200: rgba(17,24,39,0.2);
          --blue-100: rgba(17,24,39,0.1);
          --blue-50:  rgba(17,24,39,0.05);
          --white:    #ffffff;
          --gray-50:  #f8fafc;
          --gray-100: #f1f5f9;
          --gray-200: #e2e8f0;
          --gray-400: #94a3b8;
          --gray-600: #475569;
        }

        .media-page {
          font-family: 'Barlow', sans-serif;
          background: var(--white);
          min-height: 100vh;
        }

        /* ── TICKER ── */
        .media-topband {
          background: var(--blue-900);
          padding: 14px 0;
          overflow: hidden;
        }

        .media-ticker {
          display: flex;
          gap: 64px;
          animation: mediaTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes mediaTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .media-ticker-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .media-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-400);
          flex-shrink: 0;
        }

        /* ── HERO ── */
        .media-hero {
          position: relative;
          background: var(--blue-900);
          overflow: hidden;
        }

        .media-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .media-hero::after {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%);
          pointer-events: none;
        }

        .media-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 28px 64px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 48px;
        }

        @media (max-width: 768px) {
          .media-hero-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .media-hero-left {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .media-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--blue-400);
        }

        .media-eyebrow::before {
          content: '';
          display: block;
          width: 32px; height: 2px;
          background: var(--blue-400);
        }

        .media-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 800;
          color: var(--white);
          margin: 0;
          line-height: 0.95;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .media-title span { color: var(--blue-400); }

        .media-subtitle {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          margin: 4px 0 0;
          max-width: 500px;
          line-height: 1.75;
          font-weight: 300;
        }

        .media-cta-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .media-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 6px;
          background: var(--blue-500);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          transition: background 0.2s, gap 0.2s, transform 0.2s;
        }

        .media-btn-primary:hover {
          background: var(--blue-400);
          gap: 14px;
          transform: translateY(-1px);
        }

        .media-btn-primary svg { flex-shrink: 0; }

        .media-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 6px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.18);
          transition: border-color 0.2s, color 0.2s, gap 0.2s;
        }

        .media-btn-secondary:hover {
          border-color: rgba(255,255,255,0.45);
          color: var(--white);
          gap: 14px;
        }

        /* stats on right */
        .media-hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          flex-shrink: 0;
        }

        .media-stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .media-stat:first-child { border-radius: 8px 0 0 0; }
        .media-stat:nth-child(2) { border-radius: 0 8px 0 0; }
        .media-stat:nth-child(3) { border-radius: 0 0 0 8px; }
        .media-stat:last-child { border-radius: 0 0 8px 0; }

        .media-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: var(--white);
          line-height: 1;
        }

        .media-stat-num span { color: var(--blue-400); }

        .media-stat-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── DIVIDER ── */
        .media-section-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 1220px;
          margin: 56px auto 0;
          padding: 0 28px 40px;
        }

        .media-divider-line {
          flex: 1;
          height: 1.5px;
          background: var(--gray-200);
        }

        .media-divider-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gray-400);
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .media-divider-label::before,
        .media-divider-label::after {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-400);
        }

        /* ── FEATURES ── */
        .media-features-wrap {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 28px 96px;
        }

        .media-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
        }

        @media (min-width: 700px) {
          .media-features { grid-template-columns: repeat(3, 1fr); }
        }

        .media-feat-card {
          background: var(--white);
          border-right: 1.5px solid var(--gray-200);
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: background 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .media-feat-card:last-child { border-right: none; }

        @media (max-width: 699px) {
          .media-feat-card {
            border-right: none;
            border-bottom: 1.5px solid var(--gray-200);
          }
          .media-feat-card:last-child { border-bottom: none; }
        }

        .media-feat-card:hover {
          background: var(--blue-50);
          z-index: 2;
          box-shadow: 0 0 0 1.5px var(--blue-400) inset;
        }

        .media-feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--blue-500);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);
        }

        .media-feat-card:hover::before { transform: scaleX(1); }

        .media-feat-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .media-feat-icon {
          width: 48px; height: 48px;
          border-radius: 8px;
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-500);
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .media-feat-card:hover .media-feat-icon {
          background: var(--blue-600);
          border-color: var(--blue-600);
          color: var(--white);
        }

        .media-feat-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--blue-500);
          background: var(--blue-50);
          border: 1px solid var(--blue-200);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .media-feat-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: var(--blue-900);
          text-transform: uppercase;
          letter-spacing: 0.3px;
          line-height: 1.1;
        }

        .media-feat-desc {
          font-size: 13px;
          font-weight: 400;
          color: var(--gray-600);
          line-height: 1.7;
          flex: 1;
        }

        .media-feat-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--blue-500);
          margin-top: 4px;
          transition: gap 0.2s;
        }

        .media-feat-card:hover .media-feat-link { gap: 10px; }

        /* ── BOTTOM CTA ── */
        .media-bottom-cta {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 28px 96px;
        }

        .media-cta-block {
          background: var(--blue-900);
          border-radius: 10px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .media-cta-block { grid-template-columns: 1fr; }
          .media-cta-block-btn { width: 100%; justify-content: center; }
        }

        .media-cta-block::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .media-cta-block::after {
          content: '';
          position: absolute;
          right: -60px; top: -60px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);
        }

        .media-cta-text {
          position: relative; z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .media-cta-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-400);
        }

        .media-cta-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: var(--white);
          margin: 0;
          text-transform: uppercase;
        }

        .media-cta-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          margin: 0;
        }

        .media-cta-block-btn {
          position: relative; z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--blue-500);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .media-cta-block-btn:hover {
          background: var(--blue-400);
          gap: 14px;
        }
      `}),(0,G.jsxs)(`main`,{className:`media-page`,children:[(0,G.jsx)(`div`,{className:`media-topband`,children:(0,G.jsx)(`div`,{className:`media-ticker`,children:[...[,,]].map((e,t)=>[`Product Demos`,`Factory Tours`,`Customer Stories`,`Installation Videos`,`Machine Walkthroughs`,`Live Demos Available`,`ISO 9001 Certified`].map((e,n)=>(0,G.jsxs)(`span`,{className:`media-ticker-item`,children:[(0,G.jsx)(`span`,{className:`media-ticker-dot`}),e]},`${t}-${n}`)))})}),(0,G.jsx)(`section`,{className:`media-hero`,children:(0,G.jsxs)(`div`,{className:`media-hero-inner`,children:[(0,G.jsxs)(`div`,{className:`media-hero-left`,children:[(0,G.jsx)(`span`,{className:`media-eyebrow`,children:`Media Center`}),(0,G.jsxs)(`h1`,{className:`media-title`,children:[`See Our `,(0,G.jsx)(`span`,{children:`Machines`}),(0,G.jsx)(`br`,{}),`In Action`]}),(0,G.jsx)(`p`,{className:`media-subtitle`,children:`Browse product videos, factory tours, and real customer stories that demonstrate our industrial packaging solutions in real environments.`}),(0,G.jsxs)(`div`,{className:`media-cta-group`,children:[(0,G.jsxs)(W,{to:`/media/videos`,className:`media-btn-primary`,children:[(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,width:`14`,height:`14`,children:(0,G.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})}),`Watch Videos`]}),(0,G.jsxs)(W,{to:`/applications`,className:`media-btn-secondary`,children:[`Browse Applications`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})]})]})]}),(0,G.jsx)(`div`,{className:`media-hero-stats`,children:dr.map((e,t)=>(0,G.jsxs)(`div`,{className:`media-stat`,children:[(0,G.jsxs)(`span`,{className:`media-stat-num`,children:[e.num.replace(/[+%]/g,``),(0,G.jsx)(`span`,{children:e.num.match(/[+%]/)?.[0]})]}),(0,G.jsx)(`span`,{className:`media-stat-label`,children:e.label})]},t))})]})}),(0,G.jsxs)(`div`,{className:`media-section-divider`,children:[(0,G.jsx)(`div`,{className:`media-divider-line`}),(0,G.jsx)(`span`,{className:`media-divider-label`,children:`What You'll Find`}),(0,G.jsx)(`div`,{className:`media-divider-line`})]}),(0,G.jsx)(`div`,{className:`media-features-wrap`,children:(0,G.jsx)(`div`,{className:`media-features`,children:ur.map((e,t)=>(0,G.jsxs)(W,{to:e.link,className:`media-feat-card`,children:[(0,G.jsxs)(`div`,{className:`media-feat-top`,children:[(0,G.jsx)(`div`,{className:`media-feat-icon`,children:e.icon}),(0,G.jsx)(`span`,{className:`media-feat-tag`,children:e.tag})]}),(0,G.jsx)(`div`,{className:`media-feat-title`,children:e.title}),(0,G.jsx)(`div`,{className:`media-feat-desc`,children:e.desc}),(0,G.jsxs)(`span`,{className:`media-feat-link`,children:[`Explore`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})]})]},t))})}),(0,G.jsx)(`div`,{className:`media-bottom-cta`,children:(0,G.jsxs)(`div`,{className:`media-cta-block`,children:[(0,G.jsxs)(`div`,{className:`media-cta-text`,children:[(0,G.jsx)(`span`,{className:`media-cta-eyebrow`,children:`Book a Demo`}),(0,G.jsx)(`p`,{className:`media-cta-title`,children:`Want a Live Machine Demo?`}),(0,G.jsx)(`p`,{className:`media-cta-sub`,children:`Visit our factory or schedule a video walkthrough with our engineers.`})]}),(0,G.jsxs)(W,{to:`/contact`,className:`media-cta-block-btn`,children:[`Schedule Demo`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`13`,height:`13`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})]})]})})]})]})}var pr=[{title:`Namkeen Packing Machine`,youtubeId:`dQw4w9WgXcQ`},{title:`Automatic Pouch Packing`,youtubeId:`jNQXAC9IVRw`},{title:`High-Speed Sealing System`,youtubeId:`9bZkp7q19f0`},{title:`Industrial Coding Solution`,youtubeId:`OPf0YbXqDm0`},{title:`Food Processing Workflow`,youtubeId:`kffacxfA7g4`},{title:`Customer Testimonial Showcase`,youtubeId:`FxHBI6NZTNU`}],mr={youtubeId:`z72m41Uln2Q`,title:`Automatic Kurkure / Namkeen Packing Machine`,desc:`Watch our fully automatic namkeen packing machine in action — precision filling, sealing, and packaging for high-speed production lines.`},hr=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

  :root {
    --blue-dark:  #111827;
    --blue-brand: #111827;
    --blue-light: #1f2937;
    --blue-pale:  rgba(17,24,39,0.05);
    --accent:     #f5a623;
    --white:      #ffffff;
    --off-white:  #f0f5fc;
    --text:       #1a2d4a;
    --text-muted: #6e8db5;
    --border:     rgba(17,24,39,0.12);

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .vid-page {
    font-family: 'Barlow', sans-serif;
    background: var(--off-white);
    min-height: 100vh;
  }

  /* ── HERO HEADER ── */
  .vid-hero {
    background: var(--blue-dark);
    padding: 64px 24px 56px;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .vid-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 40px 40px; pointer-events: none;
  }
  .vid-hero-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

  .vid-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--accent);
    background: rgba(245,166,35,0.12);
    border: 1.5px solid rgba(245,166,35,0.3);
    border-radius: 4px; padding: 6px 14px;
    margin-bottom: 20px; position: relative; z-index: 1;
  }
  .vid-hero-eyebrow::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); animation: blink 2s infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }

  .vid-hero-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 900; color: #fff;
    text-transform: uppercase; letter-spacing: -.01em;
    line-height: 1.0; margin-bottom: 14px;
    position: relative; z-index: 1;
  }
  .vid-hero-title span { color: var(--blue-light); }

  .vid-hero-sub {
    font-size: 15px; color: rgba(192,215,245,0.65);
    font-weight: 300; line-height: 1.7;
    max-width: 480px; margin: 0 auto;
    position: relative; z-index: 1;
  }

  /* ── WRAP ── */
  .vid-wrap {
    max-width: 1160px; margin: 0 auto; padding: 48px 24px 80px;
  }

  /* ── SECTION LABEL ── */
  .vid-section-label {
    display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
  }
  .vid-label-text {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--blue-brand); white-space: nowrap;
    display: flex; align-items: center; gap: 8px;
  }
  .vid-label-text::before {
    content: ''; width: 24px; height: 2px;
    background: var(--blue-brand); border-radius: 2px;
  }
  .vid-label-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--accent);
    background: rgba(245,166,35,0.1);
    border: 1px solid rgba(245,166,35,0.3);
    border-radius: 4px; padding: 4px 10px;
  }
  .vid-label-badge::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: var(--accent); animation: blink 2s infinite;
  }
  .vid-label-line { flex: 1; height: 1px; background: var(--border); }

  /* ── FEATURED CARD ── */
  .vid-featured {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-radius: 10px; overflow: hidden;
    box-shadow: 0 4px 24px rgba(18,81,163,0.08);
    margin-bottom: 48px;
    transition: box-shadow .3s, transform .3s;
    position: relative;
  }
  .vid-featured-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); z-index: 2; }
  .vid-featured:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 48px rgba(18,81,163,0.13);
  }
  .vid-featured-frame {
    width: 100%; aspect-ratio: 16/9;
    background: var(--blue-dark); display: block;
  }
  .vid-featured-body {
    padding: 24px 28px;
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 20px; border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }
  .vid-featured-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px; font-weight: 900;
    color: var(--blue-dark); text-transform: uppercase;
    letter-spacing: .02em; margin-bottom: 6px;
  }
  .vid-featured-desc {
    font-size: 13.5px; color: var(--text-muted);
    font-weight: 300; line-height: 1.7; max-width: 540px;
  }
  .vid-yt-link {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 20px; border-radius: 4px;
    background: var(--blue-brand); color: #fff;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    text-decoration: none; white-space: nowrap; flex-shrink: 0;
    transition: background .2s, transform .15s;
    box-shadow: 0 4px 14px rgba(18,81,163,0.3);
  }
  .vid-yt-link:hover { background: var(--blue-light); transform: translateY(-2px); }

  /* ── MORE VIDEOS ── */
  .vid-grid {
    display: grid; grid-template-columns: 1fr; gap: 20px;
  }
  @media (min-width: 640px)  { .vid-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .vid-grid { grid-template-columns: repeat(3, 1fr); } }

  .vid-card {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-radius: 10px; overflow: hidden;
    box-shadow: 0 2px 10px rgba(18,81,163,0.04);
    transition: border-color .25s, box-shadow .3s, transform .3s;
    position: relative;
  }
  .vid-card:hover {
    border-color: var(--blue-brand);
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(18,81,163,0.12);
  }
  .vid-card-bar {
    height: 3px; background: var(--border); transition: background .25s;
  }
  .vid-card:hover .vid-card-bar { background: var(--blue-brand); }
  .vid-card-frame {
    width: 100%; aspect-ratio: 16/9;
    background: var(--blue-dark); display: block;
  }
  .vid-card-body {
    padding: 18px 20px 20px; border-top: 1px solid var(--border);
  }
  .vid-card-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px; font-weight: 800;
    color: var(--blue-dark); text-transform: uppercase;
    letter-spacing: .02em; margin-bottom: 8px; line-height: 1.2;
  }
  .vid-card-desc {
    font-size: 12.5px; color: var(--text-muted);
    font-weight: 300; line-height: 1.7;
  }

  /* ── EMPTY ── */
  .vid-empty {
    text-align: center; padding: 64px 24px;
    background: var(--white); border: 1.5px solid var(--border);
    border-radius: 10px;
  }
  .vid-empty-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 22px; font-weight: 800;
    color: var(--blue-dark); text-transform: uppercase;
    margin-bottom: 8px;
  }
  .vid-empty-sub { font-size: 14px; color: var(--text-muted); }

  @keyframes vidIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .vid-card { animation: vidIn .4s ease both; }
`;function gr(){let e=[mr,...(pr||[]).filter(e=>e.youtubeId!==mr.youtubeId)],[t,...n]=e;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:hr}),(0,G.jsxs)(`div`,{className:`vid-page`,children:[(0,G.jsxs)(`div`,{className:`vid-hero`,children:[(0,G.jsx)(`div`,{className:`vid-hero-top`}),(0,G.jsx)(`div`,{className:`vid-hero-eyebrow`,children:`Video Library`}),(0,G.jsxs)(`h1`,{className:`vid-hero-title`,children:[`Machine `,(0,G.jsx)(`span`,{children:`Demos`}),(0,G.jsx)(`br`,{}),`& Videos`]}),(0,G.jsx)(`p`,{className:`vid-hero-sub`,children:`Explore our latest demonstrations, case studies, and product walkthroughs.`})]}),(0,G.jsxs)(`div`,{className:`vid-wrap`,children:[(0,G.jsxs)(`div`,{className:`vid-section-label`,children:[(0,G.jsx)(`span`,{className:`vid-label-badge`,children:`Featured`}),(0,G.jsx)(`div`,{className:`vid-label-line`})]}),(0,G.jsxs)(`div`,{className:`vid-featured`,children:[(0,G.jsx)(`div`,{className:`vid-featured-top`}),(0,G.jsx)(`iframe`,{className:`vid-featured-frame`,src:`https://www.youtube.com/embed/${t.youtubeId}`,title:t.title,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0,loading:`lazy`}),(0,G.jsxs)(`div`,{className:`vid-featured-body`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`div`,{className:`vid-featured-name`,children:t.title}),(0,G.jsx)(`div`,{className:`vid-featured-desc`,children:t.desc})]}),(0,G.jsxs)(`a`,{href:`https://www.youtube.com/watch?v=${t.youtubeId}`,target:`_blank`,rel:`noreferrer`,className:`vid-yt-link`,children:[(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,width:`13`,height:`13`,children:(0,G.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})}),`Watch on YouTube`]})]})]}),n.length>0&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:`vid-section-label`,style:{marginBottom:24},children:[(0,G.jsx)(`span`,{className:`vid-label-text`,children:`More Videos`}),(0,G.jsx)(`div`,{className:`vid-label-line`})]}),(0,G.jsx)(`div`,{className:`vid-grid`,children:n.map((e,t)=>(0,G.jsxs)(`article`,{className:`vid-card`,style:{animationDelay:`${t*70}ms`},children:[(0,G.jsx)(`div`,{className:`vid-card-bar`}),(0,G.jsx)(`iframe`,{className:`vid-card-frame`,src:`https://www.youtube.com/embed/${e.youtubeId}`,title:e.title,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0,loading:`lazy`}),(0,G.jsxs)(`div`,{className:`vid-card-body`,children:[(0,G.jsx)(`h2`,{className:`vid-card-name`,children:e.title}),(0,G.jsx)(`p`,{className:`vid-card-desc`,children:e.desc||`Watch this overview to learn more about our industrial packaging equipment.`})]})]},e.youtubeId))})]}),e.length===0&&(0,G.jsxs)(`div`,{className:`vid-empty`,children:[(0,G.jsx)(`div`,{className:`vid-empty-title`,children:`No Videos Yet`}),(0,G.jsx)(`div`,{className:`vid-empty-sub`,children:`Check back soon for product demonstrations.`})]})]})]})]})}function _r(e,t){return function(){return e.apply(t,arguments)}}var{toString:vr}=Object.prototype,{getPrototypeOf:yr}=Object,{iterator:br,toStringTag:xr}=Symbol,Sr=(e=>t=>{let n=vr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Cr=e=>(e=e.toLowerCase(),t=>Sr(t)===e),wr=e=>t=>typeof t===e,{isArray:Tr}=Array,Er=wr(`undefined`);function Dr(e){return e!==null&&!Er(e)&&e.constructor!==null&&!Er(e.constructor)&&jr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Or=Cr(`ArrayBuffer`);function kr(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Or(e.buffer),t}var Ar=wr(`string`),jr=wr(`function`),Mr=wr(`number`),Nr=e=>typeof e==`object`&&!!e,Pr=e=>e===!0||e===!1,Fr=e=>{if(Sr(e)!==`object`)return!1;let t=yr(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(xr in e)&&!(br in e)},Ir=e=>{if(!Nr(e)||Dr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Lr=Cr(`Date`),Rr=Cr(`File`),zr=e=>!!(e&&e.uri!==void 0),Br=e=>e&&e.getParts!==void 0,Vr=Cr(`Blob`),Hr=Cr(`FileList`),Ur=e=>Nr(e)&&jr(e.pipe);function Wr(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Gr=Wr(),Kr=Gr.FormData===void 0?void 0:Gr.FormData,qr=e=>{if(!e)return!1;if(Kr&&e instanceof Kr)return!0;let t=yr(e);if(!t||t===Object.prototype||!jr(e.append))return!1;let n=Sr(e);return n===`formdata`||n===`object`&&jr(e.toString)&&e.toString()===`[object FormData]`},Jr=Cr(`URLSearchParams`),[Yr,Xr,Zr,Qr]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(Cr),$r=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function ei(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),Tr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Dr(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function ti(e,t){if(Dr(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var ni=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,ri=e=>!Er(e)&&e!==ni;function K(...e){let{caseless:t,skipUndefined:n}=ri(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&ti(r,i)||i,o=hi(r,a)?r[a]:void 0;Fr(o)&&Fr(e)?r[a]=K(o,e):Fr(e)?r[a]=K({},e):Tr(e)?r[a]=e.slice():(!n||!Er(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++)e[t]&&ei(e[t],i);return r}var ii=(e,t,n,{allOwnKeys:r}={})=>(ei(t,(t,r)=>{n&&jr(t)?Object.defineProperty(e,r,{__proto__:null,value:_r(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),ai=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),oi=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,`constructor`,{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,`super`,{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},si=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&yr(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ci=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},li=e=>{if(!e)return null;if(Tr(e))return e;let t=e.length;if(!Mr(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},ui=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&yr(Uint8Array)),di=(e,t)=>{let n=(e&&e[br]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},fi=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pi=Cr(`HTMLFormElement`),mi=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),hi=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),gi=Cr(`RegExp`),_i=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};ei(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},vi=e=>{_i(e,(t,n)=>{if(jr(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(jr(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},yi=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return Tr(e)?r(e):r(String(e).split(t)),n},bi=()=>{},xi=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Si(e){return!!(e&&jr(e.append)&&e[xr]===`FormData`&&e[br])}var Ci=e=>{let t=Array(10),n=(e,r)=>{if(Nr(e)){if(t.indexOf(e)>=0)return;if(Dr(e))return e;if(!(`toJSON`in e)){t[r]=e;let i=Tr(e)?[]:{};return ei(e,(e,t)=>{let a=n(e,r+1);!Er(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},wi=Cr(`AsyncFunction`),Ti=e=>e&&(Nr(e)||jr(e))&&jr(e.then)&&jr(e.catch),Ei=((e,t)=>e?setImmediate:t?((e,t)=>(ni.addEventListener(`message`,({source:n,data:r})=>{n===ni&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),ni.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,jr(ni.postMessage)),q={isArray:Tr,isArrayBuffer:Or,isBuffer:Dr,isFormData:qr,isArrayBufferView:kr,isString:Ar,isNumber:Mr,isBoolean:Pr,isObject:Nr,isPlainObject:Fr,isEmptyObject:Ir,isReadableStream:Yr,isRequest:Xr,isResponse:Zr,isHeaders:Qr,isUndefined:Er,isDate:Lr,isFile:Rr,isReactNativeBlob:zr,isReactNative:Br,isBlob:Vr,isRegExp:gi,isFunction:jr,isStream:Ur,isURLSearchParams:Jr,isTypedArray:ui,isFileList:Hr,forEach:ei,merge:K,extend:ii,trim:$r,stripBOM:ai,inherits:oi,toFlatObject:si,kindOf:Sr,kindOfTest:Cr,endsWith:ci,toArray:li,forEachEntry:di,matchAll:fi,isHTMLForm:pi,hasOwnProperty:hi,hasOwnProp:hi,reduceDescriptors:_i,freezeMethods:vi,toObjectSet:yi,toCamelCase:mi,noop:bi,toFiniteNumber:xi,findKey:ti,global:ni,isContextDefined:ri,isSpecCompliantForm:Si,toJSONObject:Ci,isAsyncFn:wi,isThenable:Ti,setImmediate:Ei,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(ni):typeof process<`u`&&process.nextTick||Ei,isIterable:e=>e!=null&&jr(e[br])},Di=q.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),Oi=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&Di[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},ki=Symbol(`internals`),Ai=/[^\x09\x20-\x7E\x80-\xFF]/g;function ji(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}function Mi(e){return e&&String(e).trim().toLowerCase()}function Ni(e){return ji(e.replace(Ai,``))}function Pi(e){return e===!1||e==null?e:q.isArray(e)?e.map(Pi):Ni(String(e))}function Fi(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Ii=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Li(e,t,n,r,i){if(q.isFunction(r))return r.call(this,t,n);if(i&&(t=n),q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function Ri(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function zi(e,t){let n=q.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Bi=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=Mi(t);if(!i)throw Error(`header name must be a non-empty string`);let a=q.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=Pi(e))}let a=(e,t)=>q.forEach(e,(e,n)=>i(e,n,t));if(q.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(q.isString(e)&&(e=e.trim())&&!Ii(e))a(Oi(e),t);else if(q.isObject(e)&&q.isIterable(e)){let n={},r,i;for(let t of e){if(!q.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?q.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=Mi(e),e){let n=q.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return Fi(e);if(q.isFunction(t))return t.call(this,e,n);if(q.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=Mi(e),e){let n=q.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Li(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=Mi(e),e){let i=q.findKey(n,e);i&&(!t||Li(n,n[i],i,t))&&(delete n[i],r=!0)}}return q.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Li(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return q.forEach(this,(r,i)=>{let a=q.findKey(n,i);if(a){t[a]=Pi(r),delete t[i];return}let o=e?Ri(i):String(i).trim();o!==i&&delete t[i],t[o]=Pi(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return q.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&q.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[ki]=this[ki]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=Mi(e);t[r]||(zi(n,e),t[r]=!0)}return q.isArray(e)?e.forEach(r):r(e),this}};Bi.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),q.reduceDescriptors(Bi.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),q.freezeMethods(Bi);var Vi=`[REDACTED ****]`;function Hi(e){if(q.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(q.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function Ui(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||q.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof Bi&&(e=e.toJSON()),r.push(e);let t;if(q.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);q.isUndefined(r)||(t[n]=r)});else{if(!q.isPlainObject(e)&&Hi(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Vi:i(a);q.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}var J=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,`message`,{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&q.hasOwnProp(e,`redact`)?e.redact:void 0,n=q.isArray(t)&&t.length>0?Ui(e,t):q.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};J.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,J.ERR_BAD_OPTION=`ERR_BAD_OPTION`,J.ECONNABORTED=`ECONNABORTED`,J.ETIMEDOUT=`ETIMEDOUT`,J.ECONNREFUSED=`ECONNREFUSED`,J.ERR_NETWORK=`ERR_NETWORK`,J.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,J.ERR_DEPRECATED=`ERR_DEPRECATED`,J.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,J.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,J.ERR_CANCELED=`ERR_CANCELED`,J.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,J.ERR_INVALID_URL=`ERR_INVALID_URL`,J.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function Wi(e){return q.isPlainObject(e)||q.isArray(e)}function Gi(e){return q.endsWith(e,`[]`)?e.slice(0,-2):e}function Ki(e,t,n){return e?e.concat(t).map(function(e,t){return e=Gi(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function qi(e){return q.isArray(e)&&!e.some(Wi)}var Ji=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function Yi(e,t,n){if(!q.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!q.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||d,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&q.isSpecCompliantForm(t);if(!q.isFunction(i))throw TypeError(`visitor must be a function`);function u(e){if(e===null)return``;if(q.isDate(e))return e.toISOString();if(q.isBoolean(e))return e.toString();if(!l&&q.isBlob(e))throw new J(`Blob is not supported. Use a Buffer instead.`);return q.isArrayBuffer(e)||q.isTypedArray(e)?l&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function d(e,n,i){let s=e;if(q.isReactNative(t)&&q.isReactNativeBlob(e))return t.append(Ki(i,n,a),u(e)),!1;if(e&&!i&&typeof e==`object`){if(q.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(q.isArray(e)&&qi(e)||(q.isFileList(e)||q.endsWith(n,`[]`))&&(s=q.toArray(e)))return n=Gi(n),s.forEach(function(e,r){!(q.isUndefined(e)||e===null)&&t.append(o===!0?Ki([n],r,a):o===null?n:n+`[]`,u(e))}),!1}return Wi(e)?!0:(t.append(Ki(i,n,a),u(e)),!1)}let f=[],p=Object.assign(Ji,{defaultVisitor:d,convertValue:u,isVisitable:Wi});function m(e,n,r=0){if(!q.isUndefined(e)){if(r>c)throw new J(`Object is too deeply nested (`+r+` levels). Max depth: `+c,J.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));f.push(e),q.forEach(e,function(e,a){(!(q.isUndefined(e)||e===null)&&i.call(t,e,q.isString(a)?a.trim():a,n,p))===!0&&m(e,n?n.concat(a):[a],r+1)}),f.pop()}}if(!q.isObject(e))throw TypeError(`data must be an object`);return m(e),t}function Xi(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function Zi(e,t){this._pairs=[],e&&Yi(e,this,t)}var Qi=Zi.prototype;Qi.append=function(e,t){this._pairs.push([e,t])},Qi.toString=function(e){let t=e?function(t){return e.call(this,t,Xi)}:Xi;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function $i(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function ea(e,t,n){if(!t)return e;let r=n&&n.encode||$i,i=q.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):q.isURLSearchParams(t)?t.toString():new Zi(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var ta=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){q.forEach(this.handlers,function(t){t!==null&&e(t)})}},na={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},ra={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Zi,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},ia=s({hasBrowserEnv:()=>aa,hasStandardBrowserEnv:()=>sa,hasStandardBrowserWebWorkerEnv:()=>ca,navigator:()=>oa,origin:()=>la}),aa=typeof window<`u`&&typeof document<`u`,oa=typeof navigator==`object`&&navigator||void 0,sa=aa&&(!oa||[`ReactNative`,`NativeScript`,`NS`].indexOf(oa.product)<0),ca=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,la=aa&&window.location.href||`http://localhost`,Y={...ia,...ra};function ua(e,t){return Yi(e,new Y.classes.URLSearchParams,{visitor:function(e,t,n,r){return Y.isNode&&q.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function da(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function fa(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function pa(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&q.isArray(r)?r.length:a,s?(q.hasOwnProp(r,a)?r[a]=q.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!r[a]||!q.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&q.isArray(r[a])&&(r[a]=fa(r[a])),!o)}if(q.isFormData(e)&&q.isFunction(e.entries)){let n={};return q.forEachEntry(e,(e,r)=>{t(da(e),r,n,0)}),n}return null}var ma=(e,t)=>e!=null&&q.hasOwnProp(e,t)?e[t]:void 0;function ha(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var ga={transitional:na,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=q.isObject(e);if(i&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return r?JSON.stringify(pa(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=ma(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return ua(e,t).toString();if((a=q.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=ma(this,`env`),r=n&&n.FormData;return Yi(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),ha(e)):e}],transformResponse:[function(e){let t=ma(this,`transitional`)||ga.transitional,n=t&&t.forcedJSONParsing,r=ma(this,`responseType`),i=r===`json`;if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,ma(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?J.from(e,J.ERR_BAD_RESPONSE,this,null,ma(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:Y.classes.FormData,Blob:Y.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};q.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{ga.headers[e]={}});function _a(e,t){let n=this||ga,r=t||n,i=Bi.from(r.headers),a=r.data;return q.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function va(e){return!!(e&&e.__CANCEL__)}var ya=class extends J{constructor(e,t,n){super(e??`canceled`,J.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function ba(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new J(`Request failed with status code `+n.status,n.status>=400&&n.status<500?J.ERR_BAD_REQUEST:J.ERR_BAD_RESPONSE,n.config,n.request,n))}function xa(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function Sa(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Ca(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var wa=(e,t,n=3)=>{let r=0,i=Sa(50,250);return Ca(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=o==null?a:Math.min(a,o),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Ta=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ea=e=>(...t)=>q.asap(()=>e(...t)),Da=Y.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Y.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Y.origin),Y.navigator&&/(msie|trident)/i.test(Y.navigator.userAgent)):()=>!0,Oa=Y.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];q.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),q.isString(r)&&s.push(`path=${r}`),q.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),q.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)return decodeURIComponent(r.slice(i+1))}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function ka(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function Aa(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function ja(e,t,n){let r=!ka(t);return e&&(r||n===!1)?Aa(e,t):t}var Ma=e=>e instanceof Bi?{...e}:e;function Na(e,t){t||={};let n=Object.create(null);Object.defineProperty(n,`hasOwnProperty`,{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return q.isPlainObject(e)&&q.isPlainObject(t)?q.merge.call({caseless:r},e,t):q.isPlainObject(t)?q.merge({},t):q.isArray(t)?t.slice():t}function i(e,t,n,i){if(!q.isUndefined(t))return r(e,t,n,i);if(!q.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!q.isUndefined(t))return r(void 0,t)}function o(e,t){if(!q.isUndefined(t))return r(void 0,t);if(!q.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(q.hasOwnProp(t,a))return r(n,i);if(q.hasOwnProp(e,a))return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(Ma(e),Ma(t),n,!0)};return q.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=q.hasOwnProp(c,r)?c[r]:i,o=a(q.hasOwnProp(e,r)?e[r]:void 0,q.hasOwnProp(t,r)?t[r]:void 0,r);q.isUndefined(o)&&a!==s||(n[r]=o)}),n}var Pa=[`content-type`,`content-length`];function Fa(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t).forEach(([t,n])=>{Pa.includes(t.toLowerCase())&&e.set(t,n)})}var Ia=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),La=e=>{let t=Na({},e),n=e=>q.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Bi.from(s),t.url=ea(ja(l,d,u),e.params,e.paramsSerializer),c&&s.set(`Authorization`,`Basic `+btoa((c.username||``)+`:`+(c.password?Ia(c.password):``))),q.isFormData(r)&&(Y.hasStandardBrowserEnv||Y.hasStandardBrowserWebWorkerEnv?s.setContentType(void 0):q.isFunction(r.getHeaders)&&Fa(s,r.getHeaders(),n(`formDataHeaderPolicy`))),Y.hasStandardBrowserEnv&&(q.isFunction(i)&&(i=i(t)),i===!0||i==null&&Da(t.url))){let e=a&&o&&Oa.read(o);e&&s.set(a,e)}return t},Ra=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=La(e),i=r.data,a=Bi.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Bi.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());ba(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new J(`Request aborted`,J.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new J(t&&t.message?t.message:`Network Error`,J.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||na;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new J(t,i.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&q.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),q.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=wa(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=wa(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new ya(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=xa(r.url);if(_&&!Y.protocols.includes(_)){n(new J(`Unsupported protocol `+_+`:`,J.ERR_BAD_REQUEST,e));return}h.send(i||null)})},za=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof J?t:new ya(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new J(`timeout of ${t}ms exceeded`,J.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>q.asap(o),s}},Ba=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Va=async function*(e,t){for await(let n of Ha(e))yield*Ba(n,t)},Ha=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ua=(e,t,n,r)=>{let i=Va(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};function Wa(e){if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let t=e.indexOf(`,`);if(t<0)return 0;let n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let e=r.length,t=r.length;for(let n=0;n<t;n++)if(r.charCodeAt(n)===37&&n+2<t){let t=r.charCodeAt(n+1),i=r.charCodeAt(n+2);(t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102)&&(i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102)&&(e-=2,n+=2)}let n=0,i=t-1,a=e=>e>=2&&r.charCodeAt(e-2)===37&&r.charCodeAt(e-1)===51&&(r.charCodeAt(e)===68||r.charCodeAt(e)===100);i>=0&&(r.charCodeAt(i)===61?(n++,i--):a(i)&&(n++,i-=3)),n===1&&i>=0&&(r.charCodeAt(i)===61||a(i))&&n++;let o=Math.floor(e/4)*3-(n||0);return o>0?o:0}if(typeof Buffer<`u`&&typeof Buffer.byteLength==`function`)return Buffer.byteLength(r,`utf8`);let i=0;for(let e=0,t=r.length;e<t;e++){let n=r.charCodeAt(e);if(n<128)i+=1;else if(n<2048)i+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=r.charCodeAt(e+1);t>=56320&&t<=57343?(i+=4,e++):i+=3}else i+=3}return i}var Ga=`1.16.0`,Ka=64*1024,{isFunction:qa}=q,Ja=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ya=e=>{let t=q.global??globalThis,{ReadableStream:n,TextEncoder:r}=t;e=q.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?qa(i):typeof fetch==`function`,c=qa(a),l=qa(o);if(!s)return!1;let u=s&&qa(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&Ja(()=>{let e=!1,t=new a(Y.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&Ja(()=>q.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new J(`Response type '${e}' is not supported`,J.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(q.isBlob(e))return e.size;if(q.isSpecCompliantForm(e))return(await new a(Y.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(q.isArrayBufferView(e)||q.isArrayBuffer(e))return e.byteLength;if(q.isURLSearchParams(e)&&(e+=``),q.isString(e))return(await d(e)).byteLength},g=async(e,t)=>q.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:u,timeout:d,onDownloadProgress:h,onUploadProgress:_,responseType:v,headers:y,withCredentials:b=`same-origin`,fetchOptions:x,maxContentLength:S,maxBodyLength:C}=La(e),ee=q.isNumber(S)&&S>-1,w=q.isNumber(C)&&C>-1,T=i||fetch;v=v?(v+``).toLowerCase():`text`;let te=za([l,u&&u.toAbortSignal()],d),E=null,ne=te&&te.unsubscribe&&(()=>{te.unsubscribe()}),D;try{if(ee&&typeof t==`string`&&t.startsWith(`data:`)&&Wa(t)>S)throw new J(`maxContentLength size of `+S+` exceeded`,J.ERR_BAD_RESPONSE,e,E);if(w&&n!==`get`&&n!==`head`){let t=await g(y,s);if(typeof t==`number`&&isFinite(t)&&t>C)throw new J(`Request body larger than maxBodyLength limit`,J.ERR_BAD_REQUEST,e,E)}if(_&&f&&n!==`get`&&n!==`head`&&(D=await g(y,s))!==0){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(q.isFormData(s)&&(n=e.headers.get(`content-type`))&&y.setContentType(n),e.body){let[t,n]=Ta(D,wa(Ea(_)));s=Ua(e.body,Ka,t,n)}}q.isString(b)||(b=b?`include`:`omit`);let i=c&&`credentials`in a.prototype;if(q.isFormData(s)){let e=y.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&y.delete(`content-type`)}y.set(`User-Agent`,`axios/`+Ga,!1);let l={...x,signal:te,method:n.toUpperCase(),headers:y.normalize().toJSON(),body:s,duplex:`half`,credentials:i?b:void 0};E=c&&new a(t,l);let u=await(c?T(E,x):T(t,l));if(ee){let t=q.toFiniteNumber(u.headers.get(`content-length`));if(t!=null&&t>S)throw new J(`maxContentLength size of `+S+` exceeded`,J.ERR_BAD_RESPONSE,e,E)}let d=p&&(v===`stream`||v===`response`);if(p&&u.body&&(h||ee||d&&ne)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=u[e]});let n=q.toFiniteNumber(u.headers.get(`content-length`)),[r,i]=h&&Ta(n,wa(Ea(h),!0))||[],a=0;u=new o(Ua(u.body,Ka,t=>{if(ee&&(a=t,a>S))throw new J(`maxContentLength size of `+S+` exceeded`,J.ERR_BAD_RESPONSE,e,E);r&&r(t)},()=>{i&&i(),ne&&ne()}),t)}v||=`text`;let O=await m[q.findKey(m,v)||`text`](u,e);if(ee&&!p&&!d){let t;if(O!=null&&(typeof O.byteLength==`number`?t=O.byteLength:typeof O.size==`number`?t=O.size:typeof O==`string`&&(t=typeof r==`function`?new r().encode(O).byteLength:O.length)),typeof t==`number`&&t>S)throw new J(`maxContentLength size of `+S+` exceeded`,J.ERR_BAD_RESPONSE,e,E)}return!d&&ne&&ne(),await new Promise((t,n)=>{ba(t,n,{data:O,headers:Bi.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:E})})}catch(t){if(ne&&ne(),te&&te.aborted&&te.reason instanceof J){let n=te.reason;throw n.config=e,E&&(n.request=E),t!==n&&(n.cause=t),n}throw t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new J(`Network Error`,J.ERR_NETWORK,e,E,t&&t.response),{cause:t.cause||t}):J.from(t,t&&t.code,e,E,t&&t.response)}}},Xa=new Map,Za=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Xa;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:Ya(t)),l=c;return c};Za();var Qa={http:null,xhr:Ra,fetch:{get:Za}};q.forEach(Qa,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{__proto__:null,value:t})}catch{}Object.defineProperty(e,`adapterName`,{__proto__:null,value:t})}});var $a=e=>`- ${e}`,eo=e=>q.isFunction(e)||e===null||e===!1;function to(e,t){e=q.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!eo(r)&&(i=Qa[(n=String(r)).toLowerCase()],i===void 0))throw new J(`Unknown adapter '${n}'`);if(i&&(q.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new J(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map($a).join(`
`):` `+$a(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var no={getAdapter:to,adapters:Qa};function ro(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ya(null,e)}function io(e){return ro(e),e.headers=Bi.from(e.headers),e.data=_a.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),no.getAdapter(e.adapter||ga.adapter,e)(e).then(function(t){ro(e),e.response=t;try{t.data=_a.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=Bi.from(t.headers),t},function(t){if(!va(t)&&(ro(e),t&&t.response)){e.response=t.response;try{t.response.data=_a.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=Bi.from(t.response.headers)}return Promise.reject(t)})}var ao={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{ao[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var oo={};ao.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Ga+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new J(r(i,` has been removed`+(t?` in `+t:``)),J.ERR_DEPRECATED);return t&&!oo[i]&&(oo[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},ao.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function so(e,t,n){if(typeof e!=`object`)throw new J(`options must be an object`,J.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new J(`option `+a+` must be `+n,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J(`Unknown option `+a,J.ERR_BAD_OPTION)}}var co={assertOptions:so,validators:ao},lo=co.validators,uo=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ta,response:new ta}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Na(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&co.assertOptions(n,{silentJSONParsing:lo.transitional(lo.boolean),forcedJSONParsing:lo.transitional(lo.boolean),clarifyTimeoutError:lo.transitional(lo.boolean),legacyInterceptorReqResOrdering:lo.transitional(lo.boolean)},!1),r!=null&&(q.isFunction(r)?t.paramsSerializer={serialize:r}:co.assertOptions(r,{encode:lo.function,serialize:lo.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),co.assertOptions(t,{baseUrl:lo.spelling(`baseURL`),withXsrfToken:lo.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&q.merge(i.common,i[t.method]);i&&q.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=Bi.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||na;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[io.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=io.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Na(this.defaults,e),ea(ja(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};q.forEach([`delete`,`get`,`head`,`options`],function(e){uo.prototype[e]=function(t,n){return this.request(Na(n||{},{method:e,url:t,data:(n||{}).data}))}}),q.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(Na(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}uo.prototype[e]=t(),e!==`query`&&(uo.prototype[e+`Form`]=t(!0))});var fo=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new ya(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function po(e){return function(t){return e.apply(null,t)}}function mo(e){return q.isObject(e)&&e.isAxiosError===!0}var ho={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ho).forEach(([e,t])=>{ho[t]=e});function go(e){let t=new uo(e),n=_r(uo.prototype.request,t);return q.extend(n,uo.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return go(Na(e,t))},n}var _o=go(ga);_o.Axios=uo,_o.CanceledError=ya,_o.CancelToken=fo,_o.isCancel=va,_o.VERSION=Ga,_o.toFormData=Yi,_o.AxiosError=J,_o.Cancel=_o.CanceledError,_o.all=function(e){return Promise.all(e)},_o.spread=po,_o.isAxiosError=mo,_o.mergeConfig=Na,_o.AxiosHeaders=Bi,_o.formToJSON=e=>pa(q.isHTMLForm(e)?new FormData(e):e),_o.getAdapter=no.getAdapter,_o.HttpStatusCode=ho,_o.default=_o;var vo={name:``,email:``,phone:``,message:``},yo=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@400;500&display=swap');

  /* ── RESET & BASE ── */
  .ct * { box-sizing: border-box; margin: 0; padding: 0; }
  .ct { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #2d3a4a; }

  /* ── NOISE GRAIN OVERLAY ── */
  .ct::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 128px 128px;
  }

  /* ── PAGE SHELL ── */
  .ct-page {
    position: relative; z-index: 1;
    min-height: 100vh;
    padding: 80px 20px 0;
    background: #ffffff;
  }

  /* ── HERO BANNER ── */
  .ct-hero {
    max-width: 1180px; margin: 0 auto 64px;
    padding: 72px 56px;
    background: linear-gradient(135deg, #0e1c2f 0%, #0b1826 60%, #060d17 100%);
    border-radius: 28px;
    position: relative; overflow: hidden;
    border: 1px solid rgba(232,160,32,0.1);
  }
  .ct-hero::before {
    content: '';
    position: absolute; top: -80px; right: -80px;
    width: 380px; height: 380px; border-radius: 50%;
    background: radial-gradient(circle, rgba(232,160,32,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .ct-hero::after {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(232,160,32,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,160,32,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 90% 100% at 100% 0%, rgba(0,0,0,0.7) 0%, transparent 65%);
    pointer-events: none;
  }

  .ct-hero-inner {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; gap: 14px;
  }
  .ct-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px; align-self: flex-start;
    font-family: 'DM Mono', monospace; font-size: 10.5px; letter-spacing: 3px; text-transform: uppercase;
    color: #e8a020;
    padding: 5px 14px; border-radius: 100px;
    border: 1px solid rgba(232,160,32,0.25);
    background: rgba(232,160,32,0.08);
  }
  .ct-hero-eyebrow::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: #e8a020; box-shadow: 0 0 7px #e8a020;
    animation: pulse-dot 2s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.7); }
  }

  .ct-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4.5vw, 52px); font-weight: 700;
    font-style: italic;
    line-height: 1.08; letter-spacing: -1.5px;
    color: #ffffff;
    max-width: 600px;
  }
  .ct-hero-title em { font-style: italic; color: #e8a020; }

  .ct-hero-sub {
    font-size: 15px; font-weight: 300;
    font-style: italic;
    color: rgba(255,255,255,0.45); line-height: 1.65;
    max-width: 460px;
  }

  .ct-hero-stats {
    display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px;
  }
  .ct-stat {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 16px; border-radius: 100px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    font-size: 12px; color: rgba(255,255,255,0.5); font-weight: 400;
    font-style: italic;
  }
  .ct-stat strong { color: #fff; font-weight: 600; margin-right: 2px; font-style: normal; }

  /* ── BODY GRID ── */
  .ct-body {
    max-width: 1180px; margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 80px;
  }
  @media (min-width: 900px) {
    .ct-body { grid-template-columns: 380px 1fr; }
  }

  /* ── INFO CARD ── */
  .ct-info {
    display: flex; flex-direction: column; gap: 0;
    border-radius: 24px; overflow: hidden;
    border: 1px solid rgba(232,160,32,0.12);
    box-shadow: 0 4px 40px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3);
  }

  .ct-map {
    height: 180px;
    background: linear-gradient(135deg, #0e1c2f 0%, #0b1826 100%);
    position: relative; overflow: hidden;
    flex-shrink: 0;
  }
  .ct-map-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(232,160,32,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,160,32,0.07) 1px, transparent 1px);
    background-size: 32px 32px;
  }
  .ct-map-glow {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 180px; height: 180px; border-radius: 50%;
    background: radial-gradient(circle, rgba(232,160,32,0.15) 0%, transparent 70%);
  }
  .ct-map-pin {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    display: flex; flex-direction: column; align-items: center; gap: 0;
  }
  .ct-map-pin-dot {
    width: 14px; height: 14px; border-radius: 50%;
    background: #e8a020; border: 2px solid #fff;
    box-shadow: 0 0 0 6px rgba(232,160,32,0.2), 0 0 20px rgba(232,160,32,0.4);
    animation: pin-pulse 2.2s ease-in-out infinite;
  }
  @keyframes pin-pulse {
    0%, 100% { box-shadow: 0 0 0 6px rgba(232,160,32,0.2), 0 0 20px rgba(232,160,32,0.4); }
    50%       { box-shadow: 0 0 0 12px rgba(232,160,32,0.08), 0 0 30px rgba(232,160,32,0.2); }
  }
  .ct-map-pin-line { width: 2px; height: 20px; background: linear-gradient(to bottom, #e8a020, transparent); }
  .ct-map-label {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, calc(-50% - 36px));
    font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    background: rgba(232,160,32,0.15); color: #e8a020;
    border: 1px solid rgba(232,160,32,0.3); border-radius: 100px;
    padding: 4px 10px; white-space: nowrap;
    backdrop-filter: blur(8px);
  }

  .ct-info-body {
    background: #0e1c2f;
    border-top: 1px solid rgba(232,160,32,0.08);
    padding: 28px; display: flex; flex-direction: column; gap: 0; flex: 1;
  }

  .ct-info-row {
    padding: 18px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex; flex-direction: column; gap: 5px;
  }
  .ct-info-row:last-child { border-bottom: none; padding-bottom: 0; }
  .ct-info-row:first-child { padding-top: 0; }

  .ct-info-label {
    font-family: 'DM Mono', monospace; font-size: 9.5px; letter-spacing: 2.5px; text-transform: uppercase;
    color: #e8a020; font-weight: 500;
  }
  .ct-info-value {
    font-size: 15px; font-weight: 500;
    font-style: italic;
    color: rgba(255,255,255,0.85); line-height: 1.4;
    text-decoration: none; transition: color 0.2s;
  }
  .ct-info-value:hover { color: #e8a020; }

  .ct-wa-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 100%; padding: 14px 20px; margin-top: 20px;
    background: linear-gradient(135deg, #e8a020 0%, #f5b830 100%);
    color: #0e1c2f;
    border: none; border-radius: 14px; cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 700;
    font-style: italic;
    letter-spacing: 0.3px;
    text-decoration: none;
    position: relative; overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(232,160,32,0.3);
  }
  .ct-wa-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
    opacity: 0; transition: opacity 0.25s;
  }
  .ct-wa-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(232,160,32,0.45); }
  .ct-wa-btn:hover::before { opacity: 1; }

  .ct-wa-icon {
    width: 20px; height: 20px; border-radius: 50%;
    background: rgba(14,28,47,0.2); display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  /* ── FORM CARD ── */
  .ct-form-card {
    background: #0e1c2f;
    border-radius: 24px; overflow: hidden;
    border: 1px solid rgba(232,160,32,0.12);
    box-shadow: 0 4px 40px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3);
  }

  .ct-form-header {
    padding: 32px 36px 28px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex; align-items: center; gap: 16px;
  }
  .ct-form-header-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: rgba(232,160,32,0.1);
    border: 1px solid rgba(232,160,32,0.25);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .ct-form-header-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    font-style: italic;
    color: #ffffff; letter-spacing: -0.4px;
  }
  .ct-form-header-text p {
    font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 300;
    font-style: italic;
    margin-top: 2px;
  }

  .ct-form-body { padding: 32px 36px 36px; }

  .ct-field-row { display: grid; grid-template-columns: 1fr; gap: 18px; margin-bottom: 18px; }
  @media (min-width: 560px) { .ct-field-row { grid-template-columns: 1fr 1fr; } }

  .ct-field { display: flex; flex-direction: column; gap: 7px; }
  .ct-label {
    font-size: 11.5px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    font-style: italic;
  }
  .ct-required { color: #e8a020; margin-left: 2px; }

  .ct-input, .ct-textarea {
    width: 100%; background: rgba(255,255,255,0.04);
    border: 1.5px solid rgba(255,255,255,0.1);
    border-radius: 12px; padding: 13px 16px;
    font-family: 'DM Sans', sans-serif; font-size: 14.5px; font-weight: 400;
    font-style: italic;
    color: #ffffff;
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
  }
  .ct-input::placeholder, .ct-textarea::placeholder {
    color: rgba(255,255,255,0.2);
    font-style: italic;
  }
  .ct-input:focus, .ct-textarea:focus {
    background: rgba(232,160,32,0.05);
    border-color: #e8a020;
    box-shadow: 0 0 0 4px rgba(232,160,32,0.08);
  }
  .ct-input:hover:not(:focus), .ct-textarea:hover:not(:focus) {
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.06);
  }

  .ct-textarea { resize: none; min-height: 130px; border-radius: 14px; line-height: 1.6; }

  .ct-char-count { font-size: 11px; color: rgba(255,255,255,0.2); text-align: right; margin-top: -4px; }

  /* ── BROCHURE HINT ── */
  .ct-brochure-hint {
    display: flex; align-items: center; gap: 8px;
    padding: 12px 16px; margin-top: 16px; margin-bottom: 0;
    background: rgba(232,160,32,0.07);
    border: 1px solid rgba(232,160,32,0.2);
    border-radius: 10px;
  }
  .ct-brochure-hint-icon { flex-shrink: 0; }
  .ct-brochure-hint-text {
    font-size: 12.5px; color: rgba(255,255,255,0.55);
    font-style: italic; line-height: 1.5;
  }
  .ct-brochure-hint-text strong { color: #e8a020; font-weight: 600; font-style: normal; }

  /* ── SUBMIT ── */
  .ct-submit {
    width: 100%; padding: 16px 24px; margin-top: 14px;
    background: linear-gradient(135deg, #e8a020 0%, #f5b830 100%);
    border: none; border-radius: 14px; cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-size: 14px; font-weight: 700;
    font-style: italic;
    letter-spacing: 0.5px;
    color: #0e1c2f;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    position: relative; overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 24px rgba(232,160,32,0.3);
  }
  .ct-submit::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 4px; background: rgba(14,28,47,0.3);
  }
  .ct-submit::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
    opacity: 0; transition: opacity 0.25s;
  }
  .ct-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 36px rgba(232,160,32,0.45); }
  .ct-submit:hover::after { opacity: 1; }
  .ct-submit:active { transform: translateY(0); }
  .ct-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

  .ct-submit-arrow {
    width: 28px; height: 28px; border-radius: 50%;
    background: rgba(14,28,47,0.15); border: 1px solid rgba(14,28,47,0.2);
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.2s, background 0.2s;
    flex-shrink: 0;
  }
  .ct-submit:hover .ct-submit-arrow { transform: translateX(3px); background: rgba(14,28,47,0.25); }

  .ct-trust {
    display: flex; align-items: center; gap: 6px; margin-top: 14px; justify-content: center;
    font-size: 11.5px; color: rgba(255,255,255,0.25);
    font-style: italic;
  }
  .ct-trust svg { flex-shrink: 0; }

  /* ── TOAST ── */
  .ct-toast {
    position: fixed; bottom: 28px; right: 28px; z-index: 9999;
    background: linear-gradient(135deg, #0e1c2f 0%, #0b1826 100%);
    color: #fff;
    padding: 14px 20px; border-radius: 14px;
    display: flex; align-items: center; gap: 12px;
    font-size: 13.5px; font-weight: 500;
    font-style: italic;
    box-shadow: 0 8px 40px rgba(0,0,0,0.5);
    border: 1px solid rgba(232,160,32,0.2);
    border-left: 3px solid #e8a020;
    animation: toast-in 0.35s cubic-bezier(0.4,0,0.2,1);
    max-width: 320px;
  }
  @keyframes toast-in {
    from { opacity: 0; transform: translateY(16px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* ── FOOTER STRIP ── */
  .ct-footer-strip {
    max-width: 1180px; margin: 0 auto;
    padding: 24px 0 40px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 12px;
  }
  .ct-footer-copy {
    font-size: 12px; color: rgba(255,255,255,0.25);
    font-style: italic;
  }
  .ct-footer-links { display: flex; gap: 20px; }
  .ct-footer-link {
    font-size: 12px; color: rgba(255,255,255,0.3); text-decoration: none;
    font-style: italic;
    transition: color 0.2s;
  }
  .ct-footer-link:hover { color: #e8a020; }

  /* ── SPIN ANIMATION ── */
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── RESPONSIVE ── */
  @media (max-width: 640px) {
    .ct-hero { padding: 40px 24px; border-radius: 20px; }
    .ct-hero-title { font-size: 26px; letter-spacing: -0.8px; }
    .ct-form-header { padding: 24px 20px 20px; }
    .ct-form-body { padding: 24px 20px 28px; }
    .ct-info-body { padding: 20px; }
    .ct-body { padding-bottom: 50px; }
    .ct-toast { right: 12px; bottom: 12px; left: 12px; max-width: none; }
    .ct-footer-strip { flex-direction: column; align-items: flex-start; padding-bottom: 60px; }
  }

  /* ── FIELD ENTER ANIM ── */
  @keyframes fieldIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ct-field { animation: fieldIn 0.4s cubic-bezier(0.4,0,0.2,1) both; }
  .ct-field:nth-child(1) { animation-delay: 0.05s; }
  .ct-field:nth-child(2) { animation-delay: 0.10s; }
  .ct-field:nth-child(3) { animation-delay: 0.15s; }
  .ct-field:nth-child(4) { animation-delay: 0.20s; }
`;function bo(){let e=nt(),[t,n]=(0,x.useState)(vo),[r,i]=(0,x.useState)(``),[a,o]=(0,x.useState)(!1);(0,x.useEffect)(()=>{let t=new URLSearchParams(e.search).get(`product`)||``;t&&n(e=>({...e,message:`I would like to inquire about the ${t}.`}))},[e.search]);let s=e=>t=>n(n=>({...n,[e]:t.target.value})),c=async e=>{e.preventDefault(),o(!0),i(``);try{await _o.post(`undefined/api/contact`,{name:t.name,email:t.email,phone:t.phone,message:t.message}),n(vo),i(`Message sent successfully! Download will begin shortly.`);let e=document.createElement(`a`);e.href=`/suntech_brochure.pdf`,e.download=`SunTech-Brochure.pdf`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(e){console.error(e),i(`Failed to send message. Please try again later.`)}finally{o(!1),window.setTimeout(()=>i(``),3500)}},l=t.message.length;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:yo}),(0,G.jsx)(`div`,{className:`ct`,children:(0,G.jsxs)(`main`,{className:`ct-page`,children:[(0,G.jsx)(`section`,{className:`ct-hero`,children:(0,G.jsxs)(`div`,{className:`ct-hero-inner`,children:[(0,G.jsx)(`span`,{className:`ct-hero-eyebrow`,children:`Get In Touch`}),(0,G.jsxs)(`h1`,{className:`ct-hero-title`,children:[`Let's build your`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`em`,{children:`perfect solution`})]}),(0,G.jsx)(`p`,{className:`ct-hero-sub`,children:`Tell us your packaging requirements — we engineer machines to match every production demand.`}),(0,G.jsxs)(`div`,{className:`ct-hero-stats`,children:[(0,G.jsxs)(`div`,{className:`ct-stat`,children:[(0,G.jsx)(`strong`,{children:`500+`}),` machines delivered`]}),(0,G.jsxs)(`div`,{className:`ct-stat`,children:[(0,G.jsx)(`strong`,{children:`24hr`}),` response time`]}),(0,G.jsxs)(`div`,{className:`ct-stat`,children:[(0,G.jsx)(`strong`,{children:`Pan India`}),` service`]})]})]})}),(0,G.jsxs)(`div`,{className:`ct-body`,children:[(0,G.jsxs)(`aside`,{className:`ct-info`,children:[(0,G.jsxs)(`div`,{className:`ct-map`,children:[(0,G.jsx)(`div`,{className:`ct-map-grid`}),(0,G.jsx)(`div`,{className:`ct-map-glow`}),(0,G.jsxs)(`div`,{className:`ct-map-pin`,children:[(0,G.jsx)(`div`,{className:`ct-map-pin-dot`}),(0,G.jsx)(`div`,{className:`ct-map-pin-line`})]}),(0,G.jsx)(`div`,{className:`ct-map-label`,children:`Maharashtra, India`})]}),(0,G.jsxs)(`div`,{className:`ct-info-body`,children:[(0,G.jsxs)(`div`,{className:`ct-info-row`,children:[(0,G.jsx)(`span`,{className:`ct-info-label`,children:`Phone`}),(0,G.jsx)(`a`,{href:`tel:+919876543210`,className:`ct-info-value`,children:`+91 98765 43210`})]}),(0,G.jsxs)(`div`,{className:`ct-info-row`,children:[(0,G.jsx)(`span`,{className:`ct-info-label`,children:`Email`}),(0,G.jsx)(`a`,{href:`mailto:info@suntech.com`,className:`ct-info-value`,children:`info@suntech.com`})]}),(0,G.jsxs)(`div`,{className:`ct-info-row`,children:[(0,G.jsx)(`span`,{className:`ct-info-label`,children:`Address`}),(0,G.jsx)(`span`,{className:`ct-info-value`,children:`Maharashtra, India`})]}),(0,G.jsxs)(`div`,{className:`ct-info-row`,children:[(0,G.jsx)(`span`,{className:`ct-info-label`,children:`Working Hours`}),(0,G.jsx)(`span`,{className:`ct-info-value`,children:`Mon – Sat · 9 AM – 7 PM`})]}),(0,G.jsxs)(`a`,{href:`tel:+919876543210`,className:`ct-wa-btn`,children:[(0,G.jsx)(`span`,{className:`ct-wa-icon`,children:(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#0e1c2f`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,G.jsx)(`path`,{d:`M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.23 11.72 11.72 0 003.7.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.23 1.11l-2.24 2.24z`})})}),`Call Sales`,(0,G.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`rgba(14,28,47,0.5)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`14`,height:`14`,style:{marginLeft:`auto`},children:(0,G.jsx)(`path`,{d:`M3 8h10M9 4l4 4-4 4`})})]})]})]}),(0,G.jsxs)(`section`,{className:`ct-form-card`,children:[(0,G.jsxs)(`div`,{className:`ct-form-header`,children:[(0,G.jsx)(`div`,{className:`ct-form-header-icon`,children:(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#e8a020`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:(0,G.jsx)(`path`,{d:`M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z`})})}),(0,G.jsxs)(`div`,{className:`ct-form-header-text`,children:[(0,G.jsx)(`h2`,{children:`Send us a message`}),(0,G.jsx)(`p`,{children:`We'll get back to you within 24 hours`})]})]}),(0,G.jsx)(`div`,{className:`ct-form-body`,children:(0,G.jsxs)(`form`,{onSubmit:c,children:[(0,G.jsxs)(`div`,{className:`ct-field-row`,children:[(0,G.jsxs)(`div`,{className:`ct-field`,children:[(0,G.jsxs)(`label`,{className:`ct-label`,children:[`Name `,(0,G.jsx)(`span`,{className:`ct-required`,children:`*`})]}),(0,G.jsx)(`input`,{type:`text`,value:t.name,onChange:s(`name`),required:!0,className:`ct-input`,placeholder:`Your full name`})]}),(0,G.jsxs)(`div`,{className:`ct-field`,children:[(0,G.jsxs)(`label`,{className:`ct-label`,children:[`Email `,(0,G.jsx)(`span`,{className:`ct-required`,children:`*`})]}),(0,G.jsx)(`input`,{type:`email`,value:t.email,onChange:s(`email`),required:!0,className:`ct-input`,placeholder:`you@company.com`})]})]}),(0,G.jsxs)(`div`,{className:`ct-field`,style:{marginBottom:`18px`},children:[(0,G.jsx)(`label`,{className:`ct-label`,children:`Phone`}),(0,G.jsx)(`input`,{type:`tel`,value:t.phone,onChange:s(`phone`),className:`ct-input`,placeholder:`+91 98765 43210`})]}),(0,G.jsxs)(`div`,{className:`ct-field`,style:{marginBottom:`4px`},children:[(0,G.jsx)(`label`,{className:`ct-label`,children:`Message`}),(0,G.jsx)(`textarea`,{value:t.message,onChange:s(`message`),className:`ct-textarea`,placeholder:`Tell us about your machine requirements, production capacity, or any questions…`,maxLength:500}),(0,G.jsxs)(`span`,{className:`ct-char-count`,children:[l,` / 500`]})]}),(0,G.jsxs)(`div`,{className:`ct-brochure-hint`,children:[(0,G.jsx)(`span`,{className:`ct-brochure-hint-icon`,children:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#e8a020`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`18`,height:`18`,children:[(0,G.jsx)(`path`,{d:`M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z`}),(0,G.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,G.jsx)(`line`,{x1:`12`,y1:`18`,x2:`12`,y2:`12`}),(0,G.jsx)(`line`,{x1:`9`,y1:`15`,x2:`15`,y2:`15`})]})}),(0,G.jsxs)(`p`,{className:`ct-brochure-hint-text`,children:[(0,G.jsx)(`strong`,{children:`Free Brochure —`}),` Submit the form and our product brochure will download automatically.`]})]}),(0,G.jsx)(`button`,{type:`submit`,className:`ct-submit`,disabled:a,children:a?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#0e1c2f`,strokeWidth:`2`,strokeLinecap:`round`,width:`18`,height:`18`,style:{animation:`spin 1s linear infinite`},children:(0,G.jsx)(`path`,{d:`M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83`})}),`Sending message...`]}):(0,G.jsxs)(G.Fragment,{children:[`Send Message & Download Brochure`,(0,G.jsx)(`span`,{className:`ct-submit-arrow`,children:(0,G.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`#0e1c2f`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,G.jsx)(`path`,{d:`M3 8h10M9 4l4 4-4 4`})})})]})}),(0,G.jsxs)(`div`,{className:`ct-trust`,children:[(0,G.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,G.jsx)(`path`,{d:`M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.5l-3.71 1.95.71-4.12L2 5.5l4.15-.75z`})}),`Your information is private and will only be used to contact you`]})]})})]})]}),(0,G.jsxs)(`div`,{className:`ct-footer-strip`,children:[(0,G.jsx)(`span`,{className:`ct-footer-copy`,children:`© 2025 SunTech Machines. All rights reserved.`}),(0,G.jsxs)(`div`,{className:`ct-footer-links`,children:[(0,G.jsx)(`a`,{href:`/about`,className:`ct-footer-link`,children:`About`}),(0,G.jsx)(`a`,{href:`/solutions`,className:`ct-footer-link`,children:`Solutions`}),(0,G.jsx)(`a`,{href:`/applications`,className:`ct-footer-link`,children:`Applications`})]})]})]})}),r&&(0,G.jsxs)(`div`,{className:`ct-toast`,children:[(0,G.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,background:`#e8a020`,flexShrink:0}}),r]})]})}function xo(e,t){let n=(0,x.useRef)(t);(0,x.useEffect)(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function So(e){return Object.freeze({__version:1,map:e})}function Co(e,t){return Object.freeze({...e,...t})}var wo=(0,x.createContext)(null),To=wo.Provider;function Eo(){let e=(0,x.useContext)(wo);if(e==null)throw Error(`No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>`);return e}var Do=l(h(),1);function Oo(e){function t(t,n){let{instance:r,context:i}=e(t).current;return(0,x.useImperativeHandle)(n,()=>r),t.children==null?null:x.createElement(To,{value:i},t.children)}return(0,x.forwardRef)(t)}function ko(e){function t(t,n){let[r,i]=(0,x.useState)(!1),{instance:a}=e(t,i).current;(0,x.useImperativeHandle)(n,()=>a),(0,x.useEffect)(function(){r&&a.update()},[a,r,t.children]);let o=a._contentNode;return o?(0,Do.createPortal)(t.children,o):null}return(0,x.forwardRef)(t)}function Ao(e){function t(t,n){let{instance:r}=e(t).current;return(0,x.useImperativeHandle)(n,()=>r),null}return(0,x.forwardRef)(t)}function jo(e,t){let n=(0,x.useRef)();(0,x.useEffect)(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function Mo(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function No(e,t){return function(n,r){let i=Eo(),a=e(Mo(n,i),i);return xo(i.map,n.attribution),jo(a.current,n.eventHandlers),t(a.current,i,n,r),a}}var Po=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.leaflet={}))})(e,(function(e){var t=`1.9.4`;function n(e){var t,n,r,i;for(n=1,r=arguments.length;n<r;n++)for(t in i=arguments[n],i)e[t]=i[t];return e}var r=Object.create||(function(){function e(){}return function(t){return e.prototype=t,new e}})();function i(e,t){var n=Array.prototype.slice;if(e.bind)return e.bind.apply(e,n.call(arguments,1));var r=n.call(arguments,2);return function(){return e.apply(t,r.length?r.concat(n.call(arguments)):arguments)}}var a=0;function o(e){return`_leaflet_id`in e||(e._leaflet_id=++a),e._leaflet_id}function s(e,t,n){var r,i,a,o=function(){r=!1,i&&=(a.apply(n,i),!1)};return a=function(){r?i=arguments:(e.apply(n,arguments),setTimeout(o,t),r=!0)},a}function c(e,t,n){var r=t[1],i=t[0],a=r-i;return e===r&&n?e:((e-i)%a+a)%a+i}function l(){return!1}function u(e,t){if(t===!1)return e;var n=10**(t===void 0?6:t);return Math.round(e*n)/n}function d(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,``)}function f(e){return d(e).split(/\s+/)}function p(e,t){for(var n in Object.prototype.hasOwnProperty.call(e,`options`)||(e.options=e.options?r(e.options):{}),t)e.options[n]=t[n];return e.options}function m(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+`=`+encodeURIComponent(e[i]));return(!t||t.indexOf(`?`)===-1?`?`:`&`)+r.join(`&`)}var h=/\{ *([\w_ -]+) *\}/g;function g(e,t){return e.replace(h,function(e,n){var r=t[n];if(r===void 0)throw Error(`No value provided for variable `+e);return typeof r==`function`&&(r=r(t)),r})}var _=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`};function v(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1}var y=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`;function b(e){return window[`webkit`+e]||window[`moz`+e]||window[`ms`+e]}var x=0;function S(e){var t=+new Date,n=Math.max(0,16-(t-x));return x=t+n,window.setTimeout(e,n)}var C=window.requestAnimationFrame||b(`RequestAnimationFrame`)||S,ee=window.cancelAnimationFrame||b(`CancelAnimationFrame`)||b(`CancelRequestAnimationFrame`)||function(e){window.clearTimeout(e)};function w(e,t,n){if(n&&C===S)e.call(t);else return C.call(window,i(e,t))}function T(e){e&&ee.call(window,e)}var te={__proto__:null,extend:n,create:r,bind:i,get lastId(){return a},stamp:o,throttle:s,wrapNum:c,falseFn:l,formatNum:u,trim:d,splitWords:f,setOptions:p,getParamString:m,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:C,cancelFn:ee,requestAnimFrame:w,cancelAnimFrame:T};function E(){}E.extend=function(e){var t=function(){p(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=t.__super__=this.prototype,a=r(i);for(var o in a.constructor=t,t.prototype=a,this)Object.prototype.hasOwnProperty.call(this,o)&&o!==`prototype`&&o!==`__super__`&&(t[o]=this[o]);return e.statics&&n(t,e.statics),e.includes&&(ne(e.includes),n.apply(null,[a].concat(e.includes))),n(a,e),delete a.statics,delete a.includes,a.options&&(a.options=i.options?r(i.options):{},n(a.options,e.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=a._initHooks.length;e<t;e++)a._initHooks[e].call(this)}},t},E.include=function(e){var t=this.prototype.options;return n(this.prototype,e),e.options&&(this.prototype.options=t,this.mergeOptions(e.options)),this},E.mergeOptions=function(e){return n(this.prototype.options,e),this},E.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e==`function`?e:function(){this[e].apply(this,t)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function ne(e){if(!(typeof L>`u`||!L||!L.Mixin)){e=_(e)?e:[e];for(var t=0;t<e.length;t++)e[t]===L.Mixin.Events&&console.warn(`Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.`,Error().stack)}}var D={on:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n)}return this},off:function(e,t,n){if(!arguments.length)delete this._events;else if(typeof e==`object`)for(var r in e)this._off(r,e[r],t);else{e=f(e);for(var i=arguments.length===1,a=0,o=e.length;a<o;a++)i?this._off(e[a]):this._off(e[a],t,n)}return this},_on:function(e,t,n,r){if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}if(this._listens(e,t,n)===!1){n===this&&(n=void 0);var i={fn:t,ctx:n};r&&(i.once=!0),this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(i)}},_off:function(e,t,n){var r,i,a;if(this._events&&(r=this._events[e],r)){if(arguments.length===1){if(this._firingCount)for(i=0,a=r.length;i<a;i++)r[i].fn=l;delete this._events[e];return}if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}var o=this._listens(e,t,n);if(o!==!1){var s=r[o];this._firingCount&&(s.fn=l,this._events[e]=r=r.slice()),r.splice(o,1)}}},fire:function(e,t,r){if(!this.listens(e,r))return this;var i=n({},t,{type:e,target:this,sourceTarget:t&&t.sourceTarget||this});if(this._events){var a=this._events[e];if(a){this._firingCount=this._firingCount+1||1;for(var o=0,s=a.length;o<s;o++){var c=a[o],l=c.fn;c.once&&this.off(e,l,c.ctx),l.call(c.ctx||this,i)}this._firingCount--}}return r&&this._propagateEvent(i),this},listens:function(e,t,n,r){typeof e!=`string`&&console.warn(`"string" type argument expected`);var i=t;typeof t!=`function`&&(r=!!t,i=void 0,n=void 0);var a=this._events&&this._events[e];if(a&&a.length&&this._listens(e,i,n)!==!1)return!0;if(r){for(var o in this._eventParents)if(this._eventParents[o].listens(e,t,n,r))return!0}return!1},_listens:function(e,t,n){if(!this._events)return!1;var r=this._events[e]||[];if(!t)return!!r.length;n===this&&(n=void 0);for(var i=0,a=r.length;i<a;i++)if(r[i].fn===t&&r[i].ctx===n)return i;return!1},once:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t,!0);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n,!0)}return this},addEventParent:function(e){return this._eventParents=this._eventParents||{},this._eventParents[o(e)]=e,this},removeEventParent:function(e){return this._eventParents&&delete this._eventParents[o(e)],this},_propagateEvent:function(e){for(var t in this._eventParents)this._eventParents[t].fire(e.type,n({layer:e.target,propagatedFrom:e.target},e),!0)}};D.addEventListener=D.on,D.removeEventListener=D.clearAllEventListeners=D.off,D.addOneTimeEventListener=D.once,D.fireEvent=D.fire,D.hasEventListeners=D.listens;var O=E.extend(D);function k(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t}var re=Math.trunc||function(e){return e>0?Math.floor(e):Math.ceil(e)};k.prototype={clone:function(){return new k(this.x,this.y)},add:function(e){return this.clone()._add(A(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(A(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},scaleBy:function(e){return new k(this.x*e.x,this.y*e.y)},unscaleBy:function(e){return new k(this.x/e.x,this.y/e.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=re(this.x),this.y=re(this.y),this},distanceTo:function(e){e=A(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=A(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=A(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return`Point(`+u(this.x)+`, `+u(this.y)+`)`}};function A(e,t,n){return e instanceof k?e:_(e)?new k(e[0],e[1]):e==null?e:typeof e==`object`&&`x`in e&&`y`in e?new k(e.x,e.y):new k(e,t,n)}function j(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}j.prototype={extend:function(e){var t,n;if(!e)return this;if(e instanceof k||typeof e[0]==`number`||`x`in e)t=n=A(e);else if(e=ie(e),t=e.min,n=e.max,!t||!n)return this;return!this.min&&!this.max?(this.min=t.clone(),this.max=n.clone()):(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(e){return A((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return A(this.min.x,this.max.y)},getTopRight:function(){return A(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return e=typeof e[0]==`number`||e instanceof k?A(e):ie(e),e instanceof j?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=ie(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>=t.x&&r.x<=n.x,o=i.y>=t.y&&r.y<=n.y;return a&&o},overlaps:function(e){e=ie(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>t.x&&r.x<n.x,o=i.y>t.y&&r.y<n.y;return a&&o},isValid:function(){return!!(this.min&&this.max)},pad:function(e){var t=this.min,n=this.max,r=Math.abs(t.x-n.x)*e,i=Math.abs(t.y-n.y)*e;return ie(A(t.x-r,t.y-i),A(n.x+r,n.y+i))},equals:function(e){return e?(e=ie(e),this.min.equals(e.getTopLeft())&&this.max.equals(e.getBottomRight())):!1}};function ie(e,t){return!e||e instanceof j?e:new j(e,t)}function ae(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}ae.prototype={extend:function(e){var t=this._southWest,n=this._northEast,r,i;if(e instanceof N)r=e,i=e;else if(e instanceof ae){if(r=e._southWest,i=e._northEast,!r||!i)return this}else return e?this.extend(P(e)||M(e)):this;return!t&&!n?(this._southWest=new N(r.lat,r.lng),this._northEast=new N(i.lat,i.lng)):(t.lat=Math.min(r.lat,t.lat),t.lng=Math.min(r.lng,t.lng),n.lat=Math.max(i.lat,n.lat),n.lng=Math.max(i.lng,n.lng)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,i=Math.abs(t.lng-n.lng)*e;return new ae(new N(t.lat-r,t.lng-i),new N(n.lat+r,n.lng+i))},getCenter:function(){return new N((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new N(this.getNorth(),this.getWest())},getSouthEast:function(){return new N(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){e=typeof e[0]==`number`||e instanceof N||`lat`in e?P(e):M(e);var t=this._southWest,n=this._northEast,r,i;return e instanceof ae?(r=e.getSouthWest(),i=e.getNorthEast()):r=i=e,r.lat>=t.lat&&i.lat<=n.lat&&r.lng>=t.lng&&i.lng<=n.lng},intersects:function(e){e=M(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>=t.lat&&r.lat<=n.lat,o=i.lng>=t.lng&&r.lng<=n.lng;return a&&o},overlaps:function(e){e=M(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>t.lat&&r.lat<n.lat,o=i.lng>t.lng&&r.lng<n.lng;return a&&o},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(`,`)},equals:function(e,t){return e?(e=M(e),this._southWest.equals(e.getSouthWest(),t)&&this._northEast.equals(e.getNorthEast(),t)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function M(e,t){return e instanceof ae?e:new ae(e,t)}function N(e,t,n){if(isNaN(e)||isNaN(t))throw Error(`Invalid LatLng object: (`+e+`, `+t+`)`);this.lat=+e,this.lng=+t,n!==void 0&&(this.alt=+n)}N.prototype={equals:function(e,t){return e?(e=P(e),Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng))<=(t===void 0?1e-9:t)):!1},toString:function(e){return`LatLng(`+u(this.lat,e)+`, `+u(this.lng,e)+`)`},distanceTo:function(e){return se.distance(this,P(e))},wrap:function(){return se.wrapLatLng(this)},toBounds:function(e){var t=180*e/40075017,n=t/Math.cos(Math.PI/180*this.lat);return M([this.lat-t,this.lng-n],[this.lat+t,this.lng+n])},clone:function(){return new N(this.lat,this.lng,this.alt)}};function P(e,t,n){return e instanceof N?e:_(e)&&typeof e[0]!=`object`?e.length===3?new N(e[0],e[1],e[2]):e.length===2?new N(e[0],e[1]):null:e==null?e:typeof e==`object`&&`lat`in e?new N(e.lat,`lng`in e?e.lng:e.lon,e.alt):t===void 0?null:new N(e,t,n)}var oe={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},unproject:function(e){return this.projection.unproject(e)},scale:function(e){return 256*2**e},zoom:function(e){return Math.log(e/256)/Math.LN2},getProjectedBounds:function(e){if(this.infinite)return null;var t=this.projection.bounds,n=this.scale(e);return new j(this.transformation.transform(t.min,n),this.transformation.transform(t.max,n))},infinite:!1,wrapLatLng:function(e){var t=this.wrapLng?c(e.lng,this.wrapLng,!0):e.lng,n=this.wrapLat?c(e.lat,this.wrapLat,!0):e.lat,r=e.alt;return new N(n,t,r)},wrapLatLngBounds:function(e){var t=e.getCenter(),n=this.wrapLatLng(t),r=t.lat-n.lat,i=t.lng-n.lng;if(r===0&&i===0)return e;var a=e.getSouthWest(),o=e.getNorthEast();return new ae(new N(a.lat-r,a.lng-i),new N(o.lat-r,o.lng-i))}},se=n({},oe,{wrapLng:[-180,180],R:6371e3,distance:function(e,t){var n=Math.PI/180,r=e.lat*n,i=t.lat*n,a=Math.sin((t.lat-e.lat)*n/2),o=Math.sin((t.lng-e.lng)*n/2),s=a*a+Math.cos(r)*Math.cos(i)*o*o,c=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*c}}),ce=6378137,le={R:ce,MAX_LATITUDE:85.0511287798,project:function(e){var t=Math.PI/180,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),i=Math.sin(r*t);return new k(this.R*e.lng*t,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(e){var t=180/Math.PI;return new N((2*Math.atan(Math.exp(e.y/this.R))-Math.PI/2)*t,e.x*t/this.R)},bounds:(function(){var e=ce*Math.PI;return new j([-e,-e],[e,e])})()};function ue(e,t,n,r){if(_(e)){this._a=e[0],this._b=e[1],this._c=e[2],this._d=e[3];return}this._a=e,this._b=t,this._c=n,this._d=r}ue.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t||=1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t||=1,new k((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}};function de(e,t,n,r){return new ue(e,t,n,r)}var fe=n({},se,{code:`EPSG:3857`,projection:le,transformation:function(){var e=.5/(Math.PI*le.R);return de(e,.5,-e,.5)}()}),pe=n({},fe,{code:`EPSG:900913`});function me(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e)}function he(e,t){var n=``,r,i,a,o,s,c;for(r=0,a=e.length;r<a;r++){for(s=e[r],i=0,o=s.length;i<o;i++)c=s[i],n+=(i?`L`:`M`)+c.x+` `+c.y;n+=t?F.svg?`z`:`x`:``}return n||`M0 0`}var ge=document.documentElement.style,_e=`ActiveXObject`in window,ve=_e&&!document.addEventListener,ye=`msLaunchUri`in navigator&&!(`documentMode`in document),be=$e(`webkit`),xe=$e(`android`),Se=$e(`android 2`)||$e(`android 3`),Ce=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),we=xe&&$e(`Google`)&&Ce<537&&!(`AudioNode`in window),Te=!!window.opera,Ee=!ye&&$e(`chrome`),De=$e(`gecko`)&&!be&&!Te&&!_e,Oe=!Ee&&$e(`safari`),ke=$e(`phantom`),Ae=`OTransition`in ge,je=navigator.platform.indexOf(`Win`)===0,Me=_e&&`transition`in ge,Ne=`WebKitCSSMatrix`in window&&`m11`in new window.WebKitCSSMatrix&&!Se,Pe=`MozPerspective`in ge,Fe=!window.L_DISABLE_3D&&(Me||Ne||Pe)&&!Ae&&!ke,Ie=typeof orientation<`u`||$e(`mobile`),Le=Ie&&be,Re=Ie&&Ne,ze=!window.PointerEvent&&window.MSPointerEvent,Be=!!(window.PointerEvent||ze),Ve=`ontouchstart`in window||!!window.TouchEvent,He=!window.L_NO_TOUCH&&(Ve||Be),Ue=Ie&&Te,We=Ie&&De,Ge=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ke=function(){var e=!1;try{var t=Object.defineProperty({},`passive`,{get:function(){e=!0}});window.addEventListener(`testPassiveEventSupport`,l,t),window.removeEventListener(`testPassiveEventSupport`,l,t)}catch{}return e}(),qe=function(){return!!document.createElement(`canvas`).getContext}(),Je=!!(document.createElementNS&&me(`svg`).createSVGRect),Ye=!!Je&&(function(){var e=document.createElement(`div`);return e.innerHTML=`<svg/>`,(e.firstChild&&e.firstChild.namespaceURI)===`http://www.w3.org/2000/svg`})(),Xe=!Je&&function(){try{var e=document.createElement(`div`);e.innerHTML=`<v:shape adj="1"/>`;var t=e.firstChild;return t.style.behavior=`url(#default#VML)`,t&&typeof t.adj==`object`}catch{return!1}}(),Ze=navigator.platform.indexOf(`Mac`)===0,Qe=navigator.platform.indexOf(`Linux`)===0;function $e(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}var F={ie:_e,ielt9:ve,edge:ye,webkit:be,android:xe,android23:Se,androidStock:we,opera:Te,chrome:Ee,gecko:De,safari:Oe,phantom:ke,opera12:Ae,win:je,ie3d:Me,webkit3d:Ne,gecko3d:Pe,any3d:Fe,mobile:Ie,mobileWebkit:Le,mobileWebkit3d:Re,msPointer:ze,pointer:Be,touch:He,touchNative:Ve,mobileOpera:Ue,mobileGecko:We,retina:Ge,passiveEvents:Ke,canvas:qe,svg:Je,vml:Xe,inlineSvg:Ye,mac:Ze,linux:Qe},et=F.msPointer?`MSPointerDown`:`pointerdown`,tt=F.msPointer?`MSPointerMove`:`pointermove`,nt=F.msPointer?`MSPointerUp`:`pointerup`,rt=F.msPointer?`MSPointerCancel`:`pointercancel`,it={touchstart:et,touchmove:tt,touchend:nt,touchcancel:rt},at={touchstart:ht,touchmove:mt,touchend:mt,touchcancel:mt},ot={},st=!1;function ct(e,t,n){return t===`touchstart`&&pt(),at[t]?(n=at[t].bind(this,n),e.addEventListener(it[t],n,!1),n):(console.warn(`wrong event specified:`,t),l)}function lt(e,t,n){if(!it[t]){console.warn(`wrong event specified:`,t);return}e.removeEventListener(it[t],n,!1)}function ut(e){ot[e.pointerId]=e}function dt(e){ot[e.pointerId]&&(ot[e.pointerId]=e)}function ft(e){delete ot[e.pointerId]}function pt(){st||=(document.addEventListener(et,ut,!0),document.addEventListener(tt,dt,!0),document.addEventListener(nt,ft,!0),document.addEventListener(rt,ft,!0),!0)}function mt(e,t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||`mouse`)){for(var n in t.touches=[],ot)t.touches.push(ot[n]);t.changedTouches=[t],e(t)}}function ht(e,t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&an(t),mt(e,t)}function gt(e){var t={},n,r;for(r in e)n=e[r],t[r]=n&&n.bind?n.bind(e):n;return e=t,t.type=`dblclick`,t.detail=2,t.isTrusted=!1,t._simulated=!0,t}var _t=200;function vt(e,t){e.addEventListener(`dblclick`,t);var n=0,r;function i(e){if(e.detail!==1){r=e.detail;return}if(!(e.pointerType===`mouse`||e.sourceCapabilities&&!e.sourceCapabilities.firesTouchEvents)){var i=sn(e);if(!(i.some(function(e){return e instanceof HTMLLabelElement&&e.attributes.for})&&!i.some(function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement}))){var a=Date.now();a-n<=_t?(r++,r===2&&t(gt(e))):r=1,n=a}}}return e.addEventListener(`click`,i),{dblclick:t,simDblclick:i}}function yt(e,t){e.removeEventListener(`dblclick`,t.dblclick),e.removeEventListener(`click`,t.simDblclick)}var I=Pt([`transform`,`webkitTransform`,`OTransform`,`MozTransform`,`msTransform`]),bt=Pt([`webkitTransition`,`transition`,`OTransition`,`MozTransition`,`msTransition`]),xt=bt===`webkitTransition`||bt===`OTransition`?bt+`End`:`transitionend`;function St(e){return typeof e==`string`?document.getElementById(e):e}function Ct(e,t){var n=e.style[t]||e.currentStyle&&e.currentStyle[t];if((!n||n===`auto`)&&document.defaultView){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n===`auto`?null:n}function R(e,t,n){var r=document.createElement(e);return r.className=t||``,n&&n.appendChild(r),r}function wt(e){var t=e.parentNode;t&&t.removeChild(e)}function Tt(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Et(e){var t=e.parentNode;t&&t.lastChild!==e&&t.appendChild(e)}function Dt(e){var t=e.parentNode;t&&t.firstChild!==e&&t.insertBefore(e,t.firstChild)}function Ot(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=jt(e);return n.length>0&&RegExp(`(^|\\s)`+t+`(\\s|$)`).test(n)}function z(e,t){if(e.classList!==void 0)for(var n=f(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!Ot(e,t)){var a=jt(e);At(e,(a?a+` `:``)+t)}}function kt(e,t){e.classList===void 0?At(e,d((` `+jt(e)+` `).replace(` `+t+` `,` `))):e.classList.remove(t)}function At(e,t){e.className.baseVal===void 0?e.className=t:e.className.baseVal=t}function jt(e){return e.correspondingElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}function Mt(e,t){`opacity`in e.style?e.style.opacity=t:`filter`in e.style&&Nt(e,t)}function Nt(e,t){var n=!1,r=`DXImageTransform.Microsoft.Alpha`;try{n=e.filters.item(r)}catch{if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=` progid:`+r+`(opacity=`+t+`)`}function Pt(e){for(var t=document.documentElement.style,n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1}function Ft(e,t,n){var r=t||new k(0,0);e.style[I]=(F.ie3d?`translate(`+r.x+`px,`+r.y+`px)`:`translate3d(`+r.x+`px,`+r.y+`px,0)`)+(n?` scale(`+n+`)`:``)}function It(e,t){e._leaflet_pos=t,F.any3d?Ft(e,t):(e.style.left=t.x+`px`,e.style.top=t.y+`px`)}function Lt(e){return e._leaflet_pos||new k(0,0)}var Rt,zt,Bt;if(`onselectstart`in document)Rt=function(){V(window,`selectstart`,an)},zt=function(){H(window,`selectstart`,an)};else{var Vt=Pt([`userSelect`,`WebkitUserSelect`,`OUserSelect`,`MozUserSelect`,`msUserSelect`]);Rt=function(){if(Vt){var e=document.documentElement.style;Bt=e[Vt],e[Vt]=`none`}},zt=function(){Vt&&(document.documentElement.style[Vt]=Bt,Bt=void 0)}}function Ht(){V(window,`dragstart`,an)}function B(){H(window,`dragstart`,an)}var Ut,Wt;function Gt(e){for(;e.tabIndex===-1;)e=e.parentNode;e.style&&(Kt(),Ut=e,Wt=e.style.outlineStyle,e.style.outlineStyle=`none`,V(window,`keydown`,Kt))}function Kt(){Ut&&(Ut.style.outlineStyle=Wt,Ut=void 0,Wt=void 0,H(window,`keydown`,Kt))}function qt(e){do e=e.parentNode;while((!e.offsetWidth||!e.offsetHeight)&&e!==document.body);return e}function Jt(e){var t=e.getBoundingClientRect();return{x:t.width/e.offsetWidth||1,y:t.height/e.offsetHeight||1,boundingClientRect:t}}var Yt={__proto__:null,TRANSFORM:I,TRANSITION:bt,TRANSITION_END:xt,get:St,getStyle:Ct,create:R,remove:wt,empty:Tt,toFront:Et,toBack:Dt,hasClass:Ot,addClass:z,removeClass:kt,setClass:At,getClass:jt,setOpacity:Mt,testProp:Pt,setTransform:Ft,setPosition:It,getPosition:Lt,get disableTextSelection(){return Rt},get enableTextSelection(){return zt},disableImageDrag:Ht,enableImageDrag:B,preventOutline:Gt,restoreOutline:Kt,getSizedParentNode:qt,getScale:Jt};function V(e,t,n,r){if(t&&typeof t==`object`)for(var i in t)$t(e,i,t[i],n);else{t=f(t);for(var a=0,o=t.length;a<o;a++)$t(e,t[a],n,r)}return this}var Xt=`_leaflet_events`;function H(e,t,n,r){if(arguments.length===1)Zt(e),delete e[Xt];else if(t&&typeof t==`object`)for(var i in t)en(e,i,t[i],n);else if(t=f(t),arguments.length===2)Zt(e,function(e){return v(t,e)!==-1});else for(var a=0,o=t.length;a<o;a++)en(e,t[a],n,r);return this}function Zt(e,t){for(var n in e[Xt]){var r=n.split(/\d/)[0];(!t||t(r))&&en(e,r,null,null,n)}}var Qt={mouseenter:`mouseover`,mouseleave:`mouseout`,wheel:!(`onwheel`in window)&&`mousewheel`};function $t(e,t,n,r){var i=t+o(n)+(r?`_`+o(r):``);if(e[Xt]&&e[Xt][i])return this;var a=function(t){return n.call(r||e,t||window.event)},s=a;!F.touchNative&&F.pointer&&t.indexOf(`touch`)===0?a=ct(e,t,a):F.touch&&t===`dblclick`?a=vt(e,a):`addEventListener`in e?t===`touchstart`||t===`touchmove`||t===`wheel`||t===`mousewheel`?e.addEventListener(Qt[t]||t,a,F.passiveEvents?{passive:!1}:!1):t===`mouseenter`||t===`mouseleave`?(a=function(t){t||=window.event,dn(e,t)&&s(t)},e.addEventListener(Qt[t],a,!1)):e.addEventListener(t,s,!1):e.attachEvent(`on`+t,a),e[Xt]=e[Xt]||{},e[Xt][i]=a}function en(e,t,n,r,i){i||=t+o(n)+(r?`_`+o(r):``);var a=e[Xt]&&e[Xt][i];if(!a)return this;!F.touchNative&&F.pointer&&t.indexOf(`touch`)===0?lt(e,t,a):F.touch&&t===`dblclick`?yt(e,a):`removeEventListener`in e?e.removeEventListener(Qt[t]||t,a,!1):e.detachEvent(`on`+t,a),e[Xt][i]=null}function tn(e){return e.stopPropagation?e.stopPropagation():e.originalEvent?e.originalEvent._stopped=!0:e.cancelBubble=!0,this}function nn(e){return $t(e,`wheel`,tn),this}function rn(e){return V(e,`mousedown touchstart dblclick contextmenu`,tn),e._leaflet_disable_click=!0,this}function an(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this}function on(e){return an(e),tn(e),this}function sn(e){if(e.composedPath)return e.composedPath();for(var t=[],n=e.target;n;)t.push(n),n=n.parentNode;return t}function cn(e,t){if(!t)return new k(e.clientX,e.clientY);var n=Jt(t),r=n.boundingClientRect;return new k((e.clientX-r.left)/n.x-t.clientLeft,(e.clientY-r.top)/n.y-t.clientTop)}var ln=F.linux&&F.chrome?window.devicePixelRatio:F.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function un(e){return F.edge?e.wheelDeltaY/2:e.deltaY&&e.deltaMode===0?-e.deltaY/ln:e.deltaY&&e.deltaMode===1?-e.deltaY*20:e.deltaY&&e.deltaMode===2?-e.deltaY*60:e.deltaX||e.deltaZ?0:e.wheelDelta?(e.wheelDeltaY||e.wheelDelta)/2:e.detail&&Math.abs(e.detail)<32765?-e.detail*20:e.detail?e.detail/-32765*60:0}function dn(e,t){var n=t.relatedTarget;if(!n)return!0;try{for(;n&&n!==e;)n=n.parentNode}catch{return!1}return n!==e}var fn={__proto__:null,on:V,off:H,stopPropagation:tn,disableScrollPropagation:nn,disableClickPropagation:rn,preventDefault:an,stop:on,getPropagationPath:sn,getMousePosition:cn,getWheelDelta:un,isExternalTarget:dn,addListener:V,removeListener:H},pn=O.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=Lt(e),this._offset=t.subtract(this._startPos),this._startTime=+new Date,this.fire(`start`),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=w(this._animate,this),this._step()},_step:function(e){var t=+new Date-this._startTime,n=this._duration*1e3;t<n?this._runFrame(this._easeOut(t/n),e):(this._runFrame(1),this._complete())},_runFrame:function(e,t){var n=this._startPos.add(this._offset.multiplyBy(e));t&&n._round(),It(this._el,n),this.fire(`step`)},_complete:function(){T(this._animId),this._inProgress=!1,this.fire(`end`)},_easeOut:function(e){return 1-(1-e)**this._easeOutPower}}),U=O.extend({options:{crs:fe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(e,t){t=p(this,t),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(e),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.zoom!==void 0&&(this._zoom=this._limitZoom(t.zoom)),t.center&&t.zoom!==void 0&&this.setView(P(t.center),t.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=bt&&F.any3d&&!F.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),V(this._proxy,xt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(e,t,r){return t=t===void 0?this._zoom:this._limitZoom(t),e=this._limitCenter(P(e),t,this.options.maxBounds),r||={},this._stop(),this._loaded&&!r.reset&&r!==!0&&(r.animate!==void 0&&(r.zoom=n({animate:r.animate},r.zoom),r.pan=n({animate:r.animate,duration:r.duration},r.pan)),this._zoom===t?this._tryAnimatedPan(e,r.pan):this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom))?(clearTimeout(this._sizeTimer),this):(this._resetView(e,t,r.pan&&r.pan.noMoveStart),this)},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=e,this)},zoomIn:function(e,t){return e||=F.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom+e,t)},zoomOut:function(e,t){return e||=F.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom-e,t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),i=this.getSize().divideBy(2),a=(e instanceof k?e:this.latLngToContainerPoint(e)).subtract(i).multiplyBy(1-1/r),o=this.containerPointToLatLng(i.add(a));return this.setView(o,t,{zoom:n})},_getBoundsCenterZoom:function(e,t){t||={},e=e.getBounds?e.getBounds():M(e);var n=A(t.paddingTopLeft||t.padding||[0,0]),r=A(t.paddingBottomRight||t.padding||[0,0]),i=this.getBoundsZoom(e,!1,n.add(r));if(i=typeof t.maxZoom==`number`?Math.min(t.maxZoom,i):i,i===1/0)return{center:e.getCenter(),zoom:i};var a=r.subtract(n).divideBy(2),o=this.project(e.getSouthWest(),i),s=this.project(e.getNorthEast(),i);return{center:this.unproject(o.add(s).divideBy(2).add(a),i),zoom:i}},fitBounds:function(e,t){if(e=M(e),!e.isValid())throw Error(`Bounds are not valid.`);var n=this._getBoundsCenterZoom(e,t);return this.setView(n.center,n.zoom,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e,t){if(e=A(e).round(),t||={},!e.x&&!e.y)return this.fire(`moveend`);if(t.animate!==!0&&!this.getSize().contains(e))return this._resetView(this.unproject(this.project(this.getCenter()).add(e)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new pn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire(`movestart`),t.animate!==!1){z(this._mapPane,`leaflet-pan-anim`);var n=this._getMapPanePos().subtract(e).round();this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire(`move`).fire(`moveend`);return this},flyTo:function(e,t,n){if(n||={},n.animate===!1||!F.any3d)return this.setView(e,t,n);this._stop();var r=this.project(this.getCenter()),i=this.project(e),a=this.getSize(),o=this._zoom;e=P(e),t=t===void 0?o:t;var s=Math.max(a.x,a.y),c=s*this.getZoomScale(o,t),l=i.distanceTo(r)||1,u=1.42,d=u*u;function f(e){var t=e?-1:1,n=e?c:s,r=(c*c-s*s+t*d*d*l*l)/(2*n*d*l),i=Math.sqrt(r*r+1)-r;return i<1e-9?-18:Math.log(i)}function p(e){return(Math.exp(e)-Math.exp(-e))/2}function m(e){return(Math.exp(e)+Math.exp(-e))/2}function h(e){return p(e)/m(e)}var g=f(0);function _(e){return s*(m(g)/m(g+u*e))}function v(e){return s*(m(g)*h(g+u*e)-p(g))/d}function y(e){return 1-(1-e)**1.5}var b=Date.now(),x=(f(1)-g)/u,S=n.duration?1e3*n.duration:1e3*x*.8;function C(){var n=(Date.now()-b)/S,a=y(n)*x;n<=1?(this._flyToFrame=w(C,this),this._move(this.unproject(r.add(i.subtract(r).multiplyBy(v(a)/l)),o),this.getScaleZoom(s/_(a),o),{flyTo:!0})):this._move(e,t)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),C.call(this),this},flyToBounds:function(e,t){var n=this._getBoundsCenterZoom(e,t);return this.flyTo(n.center,n.zoom,t)},setMaxBounds:function(e){return e=M(e),this.listens(`moveend`,this._panInsideMaxBounds)&&this.off(`moveend`,this._panInsideMaxBounds),e.isValid()?(this.options.maxBounds=e,this._loaded&&this._panInsideMaxBounds(),this.on(`moveend`,this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(e){var t=this.options.minZoom;return this.options.minZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()<this.options.minZoom)?this.setZoom(e):this},setMaxZoom:function(e){var t=this.options.maxZoom;return this.options.maxZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()>this.options.maxZoom)?this.setZoom(e):this},panInsideBounds:function(e,t){this._enforcingBounds=!0;var n=this.getCenter(),r=this._limitCenter(n,this._zoom,M(e));return n.equals(r)||this.panTo(r,t),this._enforcingBounds=!1,this},panInside:function(e,t){t||={};var n=A(t.paddingTopLeft||t.padding||[0,0]),r=A(t.paddingBottomRight||t.padding||[0,0]),i=this.project(this.getCenter()),a=this.project(e),o=this.getPixelBounds(),s=ie([o.min.add(n),o.max.subtract(r)]),c=s.getSize();if(!s.contains(a)){this._enforcingBounds=!0;var l=a.subtract(s.getCenter()),u=s.extend(a).getSize().subtract(c);i.x+=l.x<0?-u.x:u.x,i.y+=l.y<0?-u.y:u.y,this.panTo(this.unproject(i),t),this._enforcingBounds=!1}return this},invalidateSize:function(e){if(!this._loaded)return this;e=n({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var r=this.getSize(),a=t.divideBy(2).round(),o=r.divideBy(2).round(),s=a.subtract(o);return!s.x&&!s.y?this:(e.animate&&e.pan?this.panBy(s):(e.pan&&this._rawPanBy(s),this.fire(`move`),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,`moveend`),200)):this.fire(`moveend`)),this.fire(`resize`,{oldSize:t,newSize:r}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire(`viewreset`),this._stop()},locate:function(e){if(e=this._locateOptions=n({timeout:1e4,watch:!1},e),!(`geolocation`in navigator))return this._handleGeolocationError({code:0,message:`Geolocation not supported.`}),this;var t=i(this._handleGeolocationResponse,this),r=i(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){if(this._container._leaflet_id){var t=e.code,n=e.message||(t===1?`permission denied`:t===2?`position unavailable`:`timeout`);this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire(`locationerror`,{code:t,message:`Geolocation error: `+n+`.`})}},_handleGeolocationResponse:function(e){if(this._container._leaflet_id){var t=e.coords.latitude,n=e.coords.longitude,r=new N(t,n),i=r.toBounds(e.coords.accuracy*2),a=this._locateOptions;if(a.setView){var o=this.getBoundsZoom(i);this.setView(r,a.maxZoom?Math.min(o,a.maxZoom):o)}var s={latlng:r,bounds:i,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]==`number`&&(s[c]=e.coords[c]);this.fire(`locationfound`,s)}},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off(`moveend`,this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error(`Map container is being reused by another instance`);try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}for(var e in this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),wt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&=(T(this._resizeRequest),null),this._clearHandlers(),this._loaded&&this.fire(`unload`),this._layers)this._layers[e].remove();for(e in this._panes)wt(this._panes[e]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(e,t){var n=R(`div`,`leaflet-pane`+(e?` leaflet-`+e.replace(`Pane`,``)+`-pane`:``),t||this._mapPane);return e&&(this._panes[e]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds();return new ae(this.unproject(e.getBottomLeft()),this.unproject(e.getTopRight()))},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=M(e),n=A(n||[0,0]);var r=this.getZoom()||0,i=this.getMinZoom(),a=this.getMaxZoom(),o=e.getNorthWest(),s=e.getSouthEast(),c=this.getSize().subtract(n),l=ie(this.project(s,r),this.project(o,r)).getSize(),u=F.any3d?this.options.zoomSnap:1,d=c.x/l.x,f=c.y/l.y,p=t?Math.max(d,f):Math.min(d,f);return r=this.getScaleZoom(p,r),u&&(r=Math.round(r/(u/100))*(u/100),r=t?Math.ceil(r/u)*u:Math.floor(r/u)*u),Math.max(i,Math.min(a,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new k(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(e,t){var n=this._getTopLeftPoint(e,t);return new j(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(e){return this.options.crs.getProjectedBounds(e===void 0?this.getZoom():e)},getPane:function(e){return typeof e==`string`?this._panes[e]:e},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e,t){var n=this.options.crs;return t=t===void 0?this._zoom:t,n.scale(e)/n.scale(t)},getScaleZoom:function(e,t){var n=this.options.crs;t=t===void 0?this._zoom:t;var r=n.zoom(e*n.scale(t));return isNaN(r)?1/0:r},project:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.latLngToPoint(P(e),t)},unproject:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.pointToLatLng(A(e),t)},layerPointToLatLng:function(e){var t=A(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){return this.project(P(e))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(e){return this.options.crs.wrapLatLng(P(e))},wrapLatLngBounds:function(e){return this.options.crs.wrapLatLngBounds(M(e))},distance:function(e,t){return this.options.crs.distance(P(e),P(t))},containerPointToLayerPoint:function(e){return A(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return A(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(A(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(P(e)))},mouseEventToContainerPoint:function(e){return cn(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=St(e);if(!t)throw Error(`Map container not found.`);if(t._leaflet_id)throw Error(`Map container is already initialized.`);V(t,`scroll`,this._onScroll,this),this._containerId=o(t)},_initLayout:function(){var e=this._container;this._fadeAnimated=this.options.fadeAnimation&&F.any3d,z(e,`leaflet-container`+(F.touch?` leaflet-touch`:``)+(F.retina?` leaflet-retina`:``)+(F.ielt9?` leaflet-oldie`:``)+(F.safari?` leaflet-safari`:``)+(this._fadeAnimated?` leaflet-fade-anim`:``));var t=Ct(e,`position`);t!==`absolute`&&t!==`relative`&&t!==`fixed`&&t!==`sticky`&&(e.style.position=`relative`),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._paneRenderers={},this._mapPane=this.createPane(`mapPane`,this._container),It(this._mapPane,new k(0,0)),this.createPane(`tilePane`),this.createPane(`overlayPane`),this.createPane(`shadowPane`),this.createPane(`markerPane`),this.createPane(`tooltipPane`),this.createPane(`popupPane`),this.options.markerZoomAnimation||(z(e.markerPane,`leaflet-zoom-hide`),z(e.shadowPane,`leaflet-zoom-hide`))},_resetView:function(e,t,n){It(this._mapPane,new k(0,0));var r=!this._loaded;this._loaded=!0,t=this._limitZoom(t),this.fire(`viewprereset`);var i=this._zoom!==t;this._moveStart(i,n)._move(e,t)._moveEnd(i),this.fire(`viewreset`),r&&this.fire(`load`)},_moveStart:function(e,t){return e&&this.fire(`zoomstart`),t||this.fire(`movestart`),this},_move:function(e,t,n,r){t===void 0&&(t=this._zoom);var i=this._zoom!==t;return this._zoom=t,this._lastCenter=e,this._pixelOrigin=this._getNewPixelOrigin(e),r?n&&n.pinch&&this.fire(`zoom`,n):((i||n&&n.pinch)&&this.fire(`zoom`,n),this.fire(`move`,n)),this},_moveEnd:function(e){return e&&this.fire(`zoomend`),this.fire(`moveend`)},_stop:function(){return T(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(e){It(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error(`Set map center and zoom first.`)},_initEvents:function(e){this._targets={},this._targets[o(this._container)]=this;var t=e?H:V;t(this._container,`click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup`,this._handleDOMEvent,this),this.options.trackResize&&t(window,`resize`,this._onResize,this),F.any3d&&this.options.transform3DLimit&&(e?this.off:this.on).call(this,`moveend`,this._onMoveEnd)},_onResize:function(){T(this._resizeRequest),this._resizeRequest=w(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var e=this._getMapPanePos();Math.max(Math.abs(e.x),Math.abs(e.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(e,t){for(var n=[],r,i=t===`mouseout`||t===`mouseover`,a=e.target||e.srcElement,s=!1;a;){if(r=this._targets[o(a)],r&&(t===`click`||t===`preclick`)&&this._draggableMoved(r)){s=!0;break}if(r&&r.listens(t,!0)&&(i&&!dn(a,e)||(n.push(r),i))||a===this._container)break;a=a.parentNode}return!n.length&&!s&&!i&&this.listens(t,!0)&&(n=[this]),n},_isClickDisabled:function(e){for(;e&&e!==this._container;){if(e._leaflet_disable_click)return!0;e=e.parentNode}},_handleDOMEvent:function(e){var t=e.target||e.srcElement;if(!(!this._loaded||t._leaflet_disable_events||e.type===`click`&&this._isClickDisabled(t))){var n=e.type;n===`mousedown`&&Gt(t),this._fireDOMEvent(e,n)}},_mouseEvents:[`click`,`dblclick`,`mouseover`,`mouseout`,`contextmenu`],_fireDOMEvent:function(e,t,r){if(e.type===`click`){var i=n({},e);i.type=`preclick`,this._fireDOMEvent(i,i.type,r)}var a=this._findEventTargets(e,t);if(r){for(var o=[],s=0;s<r.length;s++)r[s].listens(t,!0)&&o.push(r[s]);a=o.concat(a)}if(a.length){t===`contextmenu`&&an(e);var c=a[0],l={originalEvent:e};if(e.type!==`keypress`&&e.type!==`keydown`&&e.type!==`keyup`){var u=c.getLatLng&&(!c._radius||c._radius<=10);l.containerPoint=u?this.latLngToContainerPoint(c.getLatLng()):this.mouseEventToContainerPoint(e),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=u?c.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(s=0;s<a.length;s++)if(a[s].fire(t,l,!0),l.originalEvent._stopped||a[s].options.bubblingMouseEvents===!1&&v(this._mouseEvents,t)!==-1)return}},_draggableMoved:function(e){return e=e.dragging&&e.dragging.enabled()?e:this,e.dragging&&e.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,{target:this}):this.on(`load`,e,t),this},_getMapPanePos:function(){return Lt(this._mapPane)||new k(0,0)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(e,t){return(e&&t!==void 0?this._getNewPixelOrigin(e,t):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return this.project(e,t)._subtract(r)},_latLngBoundsToNewLayerBounds:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return ie([this.project(e.getSouthWest(),t)._subtract(r),this.project(e.getNorthWest(),t)._subtract(r),this.project(e.getSouthEast(),t)._subtract(r),this.project(e.getNorthEast(),t)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),i=this.getSize().divideBy(2),a=new j(r.subtract(i),r.add(i)),o=this._getBoundsOffset(a,n,t);return Math.abs(o.x)<=1&&Math.abs(o.y)<=1?e:this.unproject(r.add(o),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new j(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=ie(this.project(t.getNorthEast(),n),this.project(t.getSouthWest(),n)),i=r.min.subtract(e.min),a=r.max.subtract(e.max);return new k(this._rebound(i.x,-a.x),this._rebound(i.y,-a.y))},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom(),r=F.any3d?this.options.zoomSnap:1;return r&&(e=Math.round(e/r)*r),Math.max(t,Math.min(n,e))},_onPanTransitionStep:function(){this.fire(`move`)},_onPanTransitionEnd:function(){kt(this._mapPane,`leaflet-pan-anim`),this.fire(`moveend`)},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._trunc();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)},_createAnimProxy:function(){var e=this._proxy=R(`div`,`leaflet-proxy leaflet-zoom-animated`);this._panes.mapPane.appendChild(e),this.on(`zoomanim`,function(e){var t=I,n=this._proxy.style[t];Ft(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[t]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on(`load moveend`,this._animMoveEnd,this),this._on(`unload`,this._destroyAnimProxy,this)},_destroyAnimProxy:function(){wt(this._proxy),this.off(`load moveend`,this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var e=this.getCenter(),t=this.getZoom();Ft(this._proxy,this.project(e,t),this.getZoomScale(t,1))},_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf(`transform`)>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName(`leaflet-zoom-animated`).length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;if(n||={},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r);return n.animate!==!0&&!this.getSize().contains(i)?!1:(w(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(e,t,!0)},this),!0)},_animateZoom:function(e,t,n,r){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=e,this._animateToZoom=t,z(this._mapPane,`leaflet-zoom-anim`)),this.fire(`zoomanim`,{center:e,zoom:t,noUpdate:r}),this._tempFireZoomEvent||=this._zoom!==this._animateToZoom,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&kt(this._mapPane,`leaflet-zoom-anim`),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire(`zoom`),delete this._tempFireZoomEvent,this.fire(`move`),this._moveEnd(!0))}});function mn(e,t){return new U(e,t)}var hn=E.extend({options:{position:`topright`},initialize:function(e){p(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this.remove(),this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return z(t,`leaflet-control`),n.indexOf(`bottom`)===-1?r.appendChild(t):r.insertBefore(t,r.firstChild),this._map.on(`unload`,this.remove,this),this},remove:function(){return this._map?(wt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off(`unload`,this.remove,this),this._map=null,this):this},_refocusOnMap:function(e){this._map&&e&&e.screenX>0&&e.screenY>0&&this._map.getContainer().focus()}}),gn=function(e){return new hn(e)};U.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.remove(),this},_initControlPos:function(){var e=this._controlCorners={},t=`leaflet-`,n=this._controlContainer=R(`div`,t+`control-container`,this._container);function r(r,i){var a=t+r+` `+t+i;e[r+i]=R(`div`,a,n)}r(`top`,`left`),r(`top`,`right`),r(`bottom`,`left`),r(`bottom`,`right`)},_clearControlPos:function(){for(var e in this._controlCorners)wt(this._controlCorners[e]);wt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var _n=hn.extend({options:{collapsed:!0,position:`topright`,autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(e,t,n,r){return n<r?-1:+(r<n)}},initialize:function(e,t,n){for(var r in p(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){this._initLayout(),this._update(),this._map=e,e.on(`zoomend`,this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.on(`add remove`,this._onLayerChange,this);return this._container},addTo:function(e){return hn.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(){this._map.off(`zoomend`,this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.off(`add remove`,this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._map?this._update():this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._map?this._update():this},removeLayer:function(e){e.off(`add remove`,this._onLayerChange,this);var t=this._getLayer(o(e));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){z(this._container,`leaflet-control-layers-expanded`),this._section.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._section.clientHeight?(z(this._section,`leaflet-control-layers-scrollbar`),this._section.style.height=e+`px`):kt(this._section,`leaflet-control-layers-scrollbar`),this._checkDisabledLayers(),this},collapse:function(){return kt(this._container,`leaflet-control-layers-expanded`),this},_initLayout:function(){var e=`leaflet-control-layers`,t=this._container=R(`div`,e),n=this.options.collapsed;t.setAttribute(`aria-haspopup`,!0),rn(t),nn(t);var r=this._section=R(`section`,e+`-list`);n&&(this._map.on(`click`,this.collapse,this),V(t,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var i=this._layersLink=R(`a`,e+`-toggle`,t);i.href=`#`,i.title=`Layers`,i.setAttribute(`role`,`button`),V(i,{keydown:function(e){e.keyCode===13&&this._expandSafely()},click:function(e){an(e),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=R(`div`,e+`-base`,r),this._separator=R(`div`,e+`-separator`,r),this._overlaysList=R(`div`,e+`-overlays`,r),t.appendChild(r)},_getLayer:function(e){for(var t=0;t<this._layers.length;t++)if(this._layers[t]&&o(this._layers[t].layer)===e)return this._layers[t]},_addLayer:function(e,t,n){this._map&&e.on(`add remove`,this._onLayerChange,this),this._layers.push({layer:e,name:t,overlay:n}),this.options.sortLayers&&this._layers.sort(i(function(e,t){return this.options.sortFunction(e.layer,t.layer,e.name,t.name)},this)),this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Tt(this._baseLayersList),Tt(this._overlaysList),this._layerControlInputs=[];var e,t,n,r,i=0;for(n=0;n<this._layers.length;n++)r=this._layers[n],this._addItem(r),t||=r.overlay,e||=!r.overlay,i+=+!r.overlay;return this.options.hideSingleBase&&(e&&=i>1,this._baseLayersList.style.display=e?``:`none`),this._separator.style.display=t&&e?``:`none`,this},_onLayerChange:function(e){this._handlingClick||this._update();var t=this._getLayer(o(e.target)),n=t.overlay?e.type===`add`?`overlayadd`:`overlayremove`:e.type===`add`?`baselayerchange`:null;n&&this._map.fire(n,t)},_createRadioElement:function(e,t){var n=`<input type="radio" class="leaflet-control-layers-selector" name="`+e+`"`+(t?` checked="checked"`:``)+`/>`,r=document.createElement(`div`);return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement(`label`),n=this._map.hasLayer(e.layer),r;e.overlay?(r=document.createElement(`input`),r.type=`checkbox`,r.className=`leaflet-control-layers-selector`,r.defaultChecked=n):r=this._createRadioElement(`leaflet-base-layers_`+o(this),n),this._layerControlInputs.push(r),r.layerId=o(e.layer),V(r,`click`,this._onInputClick,this);var i=document.createElement(`span`);i.innerHTML=` `+e.name;var a=document.createElement(`span`);return t.appendChild(a),a.appendChild(r),a.appendChild(i),(e.overlay?this._overlaysList:this._baseLayersList).appendChild(t),this._checkDisabledLayers(),t},_onInputClick:function(){if(!this._preventClick){var e=this._layerControlInputs,t,n,r=[],i=[];this._handlingClick=!0;for(var a=e.length-1;a>=0;a--)t=e[a],n=this._getLayer(t.layerId).layer,t.checked?r.push(n):t.checked||i.push(n);for(a=0;a<i.length;a++)this._map.hasLayer(i[a])&&this._map.removeLayer(i[a]);for(a=0;a<r.length;a++)this._map.hasLayer(r[a])||this._map.addLayer(r[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var e=this._layerControlInputs,t,n,r=this._map.getZoom(),i=e.length-1;i>=0;i--)t=e[i],n=this._getLayer(t.layerId).layer,t.disabled=n.options.minZoom!==void 0&&r<n.options.minZoom||n.options.maxZoom!==void 0&&r>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var e=this._section;this._preventClick=!0,V(e,`click`,an),this.expand();var t=this;setTimeout(function(){H(e,`click`,an),t._preventClick=!1})}}),vn=function(e,t,n){return new _n(e,t,n)},W=hn.extend({options:{position:`topleft`,zoomInText:`<span aria-hidden="true">+</span>`,zoomInTitle:`Zoom in`,zoomOutText:`<span aria-hidden="true">&#x2212;</span>`,zoomOutTitle:`Zoom out`},onAdd:function(e){var t=`leaflet-control-zoom`,n=R(`div`,t+` leaflet-bar`),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,t+`-in`,n,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,t+`-out`,n,this._zoomOut),this._updateDisabled(),e.on(`zoomend zoomlevelschange`,this._updateDisabled,this),n},onRemove:function(e){e.off(`zoomend zoomlevelschange`,this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(e){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(e.shiftKey?3:1))},_zoomOut:function(e){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(e.shiftKey?3:1))},_createButton:function(e,t,n,r,i){var a=R(`a`,n,r);return a.innerHTML=e,a.href=`#`,a.title=t,a.setAttribute(`role`,`button`),a.setAttribute(`aria-label`,t),rn(a),V(a,`click`,on),V(a,`click`,i,this),V(a,`click`,this._refocusOnMap,this),a},_updateDisabled:function(){var e=this._map,t=`leaflet-disabled`;kt(this._zoomInButton,t),kt(this._zoomOutButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`false`),this._zoomOutButton.setAttribute(`aria-disabled`,`false`),(this._disabled||e._zoom===e.getMinZoom())&&(z(this._zoomOutButton,t),this._zoomOutButton.setAttribute(`aria-disabled`,`true`)),(this._disabled||e._zoom===e.getMaxZoom())&&(z(this._zoomInButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`true`))}});U.mergeOptions({zoomControl:!0}),U.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new W,this.addControl(this.zoomControl))});var yn=function(e){return new W(e)},bn=hn.extend({options:{position:`bottomleft`,maxWidth:100,metric:!0,imperial:!0},onAdd:function(e){var t=`leaflet-control-scale`,n=R(`div`,t),r=this.options;return this._addScales(r,t+`-line`,n),e.on(r.updateWhenIdle?`moveend`:`move`,this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?`moveend`:`move`,this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=R(`div`,t,n)),e.imperial&&(this._iScale=R(`div`,t,n))},_update:function(){var e=this._map,t=e.getSize().y/2,n=e.distance(e.containerPointToLatLng([0,t]),e.containerPointToLatLng([this.options.maxWidth,t]));this._updateScales(n)},_updateScales:function(e){this.options.metric&&e&&this._updateMetric(e),this.options.imperial&&e&&this._updateImperial(e)},_updateMetric:function(e){var t=this._getRoundNum(e),n=t<1e3?t+` m`:t/1e3+` km`;this._updateScale(this._mScale,n,t/e)},_updateImperial:function(e){var t=e*3.2808399,n,r,i;t>5280?(n=t/5280,r=this._getRoundNum(n),this._updateScale(this._iScale,r+` mi`,r/n)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+` ft`,i/t))},_updateScale:function(e,t,n){e.style.width=Math.round(this.options.maxWidth*n)+`px`,e.innerHTML=t},_getRoundNum:function(e){var t=10**((Math.floor(e)+``).length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),xn=function(e){return new bn(e)},Sn=hn.extend({options:{position:`bottomright`,prefix:`<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">`+(F.inlineSvg?`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> `:``)+`Leaflet</a>`},initialize:function(e){p(this,e),this._attributions={}},onAdd:function(e){for(var t in e.attributionControl=this,this._container=R(`div`,`leaflet-control-attribution`),rn(this._container),e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return this._update(),e.on(`layeradd`,this._addAttribution,this),this._container},onRemove:function(e){e.off(`layeradd`,this._addAttribution,this)},_addAttribution:function(e){e.layer.getAttribution&&(this.addAttribution(e.layer.getAttribution()),e.layer.once(`remove`,function(){this.removeAttribution(e.layer.getAttribution())},this))},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e?(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this):this},removeAttribution:function(e){return e&&this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(`, `)),this._container.innerHTML=n.join(` <span aria-hidden="true">|</span> `)}}});U.mergeOptions({attributionControl:!0}),U.addInitHook(function(){this.options.attributionControl&&new Sn().addTo(this)}),hn.Layers=_n,hn.Zoom=W,hn.Scale=bn,hn.Attribution=Sn,gn.layers=vn,gn.zoom=yn,gn.scale=xn,gn.attribution=function(e){return new Sn(e)};var Cn=E.extend({initialize:function(e){this._map=e},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Cn.addTo=function(e,t){return e.addHandler(t,this),this};var wn={Events:D},Tn=F.touch?`touchstart mousedown`:`mousedown`,En=O.extend({options:{clickTolerance:3},initialize:function(e,t,n,r){p(this,r),this._element=e,this._dragStartTarget=t||e,this._preventOutline=n},enable:function(){this._enabled||=(V(this._dragStartTarget,Tn,this._onDown,this),!0)},disable:function(){this._enabled&&(En._dragging===this&&this.finishDrag(!0),H(this._dragStartTarget,Tn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(e){if(this._enabled&&(this._moved=!1,!Ot(this._element,`leaflet-zoom-anim`))){if(e.touches&&e.touches.length!==1){En._dragging===this&&this.finishDrag();return}if(!(En._dragging||e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)&&(En._dragging=this,this._preventOutline&&Gt(this._element),Ht(),Rt(),!this._moving)){this.fire(`down`);var t=e.touches?e.touches[0]:e,n=qt(this._element);this._startPoint=new k(t.clientX,t.clientY),this._startPos=Lt(this._element),this._parentScale=Jt(n);var r=e.type===`mousedown`;V(document,r?`mousemove`:`touchmove`,this._onMove,this),V(document,r?`mouseup`:`touchend touchcancel`,this._onUp,this)}}},_onMove:function(e){if(this._enabled){if(e.touches&&e.touches.length>1){this._moved=!0;return}var t=e.touches&&e.touches.length===1?e.touches[0]:e,n=new k(t.clientX,t.clientY)._subtract(this._startPoint);!n.x&&!n.y||Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,an(e),this._moved||(this.fire(`dragstart`),this._moved=!0,z(document.body,`leaflet-dragging`),this._lastTarget=e.target||e.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),z(this._lastTarget,`leaflet-drag-target`)),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=e,this._updatePosition())}},_updatePosition:function(){var e={originalEvent:this._lastEvent};this.fire(`predrag`,e),It(this._element,this._newPos),this.fire(`drag`,e)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(e){kt(document.body,`leaflet-dragging`),this._lastTarget&&=(kt(this._lastTarget,`leaflet-drag-target`),null),H(document,`mousemove touchmove`,this._onMove,this),H(document,`mouseup touchend touchcancel`,this._onUp,this),B(),zt();var t=this._moved&&this._moving;this._moving=!1,En._dragging=!1,t&&this.fire(`dragend`,{noInertia:e,distance:this._newPos.distanceTo(this._startPos)})}});function Dn(e,t,n){var r,i=[1,4,2,8],a,o,s,c,l,u,d,f;for(a=0,u=e.length;a<u;a++)e[a]._code=G(e[a],t);for(s=0;s<4;s++){for(d=i[s],r=[],a=0,u=e.length,o=u-1;a<u;o=a++)c=e[a],l=e[o],c._code&d?l._code&d||(f=zn(l,c,d,t,n),f._code=G(f,t),r.push(f)):(l._code&d&&(f=zn(l,c,d,t,n),f._code=G(f,t),r.push(f)),r.push(c));e=r}return e}function On(e,t){var n,r,i,a,o,s,c,l,u;if(!e||e.length===0)throw Error(`latlngs not passed`);Hn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var d=P([0,0]),f=M(e);f.getNorthWest().distanceTo(f.getSouthWest())*f.getNorthEast().distanceTo(f.getNorthWest())<1700&&(d=kn(e));var p=e.length,m=[];for(n=0;n<p;n++){var h=P(e[n]);m.push(t.project(P([h.lat-d.lat,h.lng-d.lng])))}for(s=c=l=0,n=0,r=p-1;n<p;r=n++)i=m[n],a=m[r],o=i.y*a.x-a.y*i.x,c+=(i.x+a.x)*o,l+=(i.y+a.y)*o,s+=o*3;u=s===0?m[0]:[c/s,l/s];var g=t.unproject(A(u));return P([g.lat+d.lat,g.lng+d.lng])}function kn(e){for(var t=0,n=0,r=0,i=0;i<e.length;i++){var a=P(e[i]);t+=a.lat,n+=a.lng,r++}return P([t/r,n/r])}var An={__proto__:null,clipPolygon:Dn,polygonCenter:On,centroid:kn};function jn(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=In(e,n),e=Pn(e,n),e}function Mn(e,t,n){return Math.sqrt(Vn(e,t,n,!0))}function Nn(e,t,n){return Vn(e,t,n)}function Pn(e,t){var n=e.length,r=new(typeof Uint8Array<`u`?Uint8Array:Array)(n);r[0]=r[n-1]=1,Fn(e,r,t,0,n-1);var i,a=[];for(i=0;i<n;i++)r[i]&&a.push(e[i]);return a}function Fn(e,t,n,r,i){var a=0,o,s,c;for(s=r+1;s<=i-1;s++)c=Vn(e[s],e[r],e[i],!0),c>a&&(o=s,a=c);a>n&&(t[o]=1,Fn(e,t,n,r,o),Fn(e,t,n,o,i))}function In(e,t){for(var n=[e[0]],r=1,i=0,a=e.length;r<a;r++)Bn(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<a-1&&n.push(e[a-1]),n}var Ln;function Rn(e,t,n,r,i){var a=r?Ln:G(e,n),o=G(t,n),s,c,l;for(Ln=o;;){if(!(a|o))return[e,t];if(a&o)return!1;s=a||o,c=zn(e,t,s,n,i),l=G(c,n),s===a?(e=c,a=l):(t=c,o=l)}}function zn(e,t,n,r,i){var a=t.x-e.x,o=t.y-e.y,s=r.min,c=r.max,l,u;return n&8?(l=e.x+a*(c.y-e.y)/o,u=c.y):n&4?(l=e.x+a*(s.y-e.y)/o,u=s.y):n&2?(l=c.x,u=e.y+o*(c.x-e.x)/a):n&1&&(l=s.x,u=e.y+o*(s.x-e.x)/a),new k(l,u,i)}function G(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n}function Bn(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function Vn(e,t,n,r){var i=t.x,a=t.y,o=n.x-i,s=n.y-a,c=o*o+s*s,l;return c>0&&(l=((e.x-i)*o+(e.y-a)*s)/c,l>1?(i=n.x,a=n.y):l>0&&(i+=o*l,a+=s*l)),o=e.x-i,s=e.y-a,r?o*o+s*s:new k(i,a)}function Hn(e){return!_(e[0])||typeof e[0][0]!=`object`&&e[0][0]!==void 0}function Un(e){return console.warn(`Deprecated use of _flat, please use L.LineUtil.isFlat instead.`),Hn(e)}function Wn(e,t){var n,r,i,a,o,s,c,l;if(!e||e.length===0)throw Error(`latlngs not passed`);Hn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var u=P([0,0]),d=M(e);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(u=kn(e));var f=e.length,p=[];for(n=0;n<f;n++){var m=P(e[n]);p.push(t.project(P([m.lat-u.lat,m.lng-u.lng])))}for(n=0,r=0;n<f-1;n++)r+=p[n].distanceTo(p[n+1])/2;if(r===0)l=p[0];else for(n=0,a=0;n<f-1;n++)if(o=p[n],s=p[n+1],i=o.distanceTo(s),a+=i,a>r){c=(a-r)/i,l=[s.x-c*(s.x-o.x),s.y-c*(s.y-o.y)];break}var h=t.unproject(A(l));return P([h.lat+u.lat,h.lng+u.lng])}var Gn={__proto__:null,simplify:jn,pointToSegmentDistance:Mn,closestPointOnSegment:Nn,clipSegment:Rn,_getEdgeIntersection:zn,_getBitCode:G,_sqClosestPointOnSegment:Vn,isFlat:Hn,_flat:Un,polylineCenter:Wn},Kn={project:function(e){return new k(e.lng,e.lat)},unproject:function(e){return new N(e.y,e.x)},bounds:new j([-180,-90],[180,90])},qn={R:6378137,R_MINOR:6356752.314245179,bounds:new j([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(e){var t=Math.PI/180,n=this.R,r=e.lat*t,i=this.R_MINOR/n,a=Math.sqrt(1-i*i),o=a*Math.sin(r),s=Math.tan(Math.PI/4-r/2)/((1-o)/(1+o))**(a/2);return r=-n*Math.log(Math.max(s,1e-10)),new k(e.lng*t*n,r)},unproject:function(e){for(var t=180/Math.PI,n=this.R,r=this.R_MINOR/n,i=Math.sqrt(1-r*r),a=Math.exp(-e.y/n),o=Math.PI/2-2*Math.atan(a),s=0,c=.1,l;s<15&&Math.abs(c)>1e-7;s++)l=i*Math.sin(o),l=((1-l)/(1+l))**(i/2),c=Math.PI/2-2*Math.atan(a*l)-o,o+=c;return new N(o*t,e.x*t/n)}},Jn={__proto__:null,LonLat:Kn,Mercator:qn,SphericalMercator:le},Yn=n({},se,{code:`EPSG:3395`,projection:qn,transformation:function(){var e=.5/(Math.PI*qn.R);return de(e,.5,-e,.5)}()}),Xn=n({},se,{code:`EPSG:4326`,projection:Kn,transformation:de(1/180,1,-1/180,.5)}),Zn=n({},oe,{projection:Kn,transformation:de(1,0,-1,0),scale:function(e){return 2**e},zoom:function(e){return Math.log(e)/Math.LN2},distance:function(e,t){var n=t.lng-e.lng,r=t.lat-e.lat;return Math.sqrt(n*n+r*r)},infinite:!0});oe.Earth=se,oe.EPSG3395=Yn,oe.EPSG3857=fe,oe.EPSG900913=pe,oe.EPSG4326=Xn,oe.Simple=Zn;var Qn=O.extend({options:{pane:`overlayPane`,attribution:null,bubblingMouseEvents:!0},addTo:function(e){return e.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(e){return e&&e.removeLayer(this),this},getPane:function(e){return this._map.getPane(e?this.options[e]||e:this.options.pane)},addInteractiveTarget:function(e){return this._map._targets[o(e)]=this,this},removeInteractiveTarget:function(e){return delete this._map._targets[o(e)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(e){var t=e.target;if(t.hasLayer(this)){if(this._map=t,this._zoomAnimated=t._zoomAnimated,this.getEvents){var n=this.getEvents();t.on(n,this),this.once(`remove`,function(){t.off(n,this)},this)}this.onAdd(t),this.fire(`add`),t.fire(`layeradd`,{layer:this})}}});U.include({addLayer:function(e){if(!e._layerAdd)throw Error(`The provided object is not a Layer.`);var t=o(e);return this._layers[t]?this:(this._layers[t]=e,e._mapToAdd=this,e.beforeAdd&&e.beforeAdd(this),this.whenReady(e._layerAdd,e),this)},removeLayer:function(e){var t=o(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&(this.fire(`layerremove`,{layer:e}),e.fire(`remove`)),e._map=e._mapToAdd=null,this):this},hasLayer:function(e){return o(e)in this._layers},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},_addLayers:function(e){e=e?_(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_addZoomLimit:function(e){(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[o(e)]=e,this._updateZoomLevels())},_removeZoomLimit:function(e){var t=o(e);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var e=1/0,t=-1/0,n=this._getZoomSpan();for(var r in this._zoomBoundLayers){var i=this._zoomBoundLayers[r].options;e=i.minZoom===void 0?e:Math.min(e,i.minZoom),t=i.maxZoom===void 0?t:Math.max(t,i.maxZoom)}this._layersMaxZoom=t===-1/0?void 0:t,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire(`zoomlevelschange`),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var $n=Qn.extend({initialize:function(e,t){p(this,t),this._layers={};var n,r;if(e)for(n=0,r=e.length;n<r;n++)this.addLayer(e[n])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return(typeof e==`number`?e:this.getLayerId(e))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e)},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];return this.eachLayer(e.push,e),e},setZIndex:function(e){return this.invoke(`setZIndex`,e)},getLayerId:function(e){return o(e)}}),er=function(e,t){return new $n(e,t)},tr=$n.extend({addLayer:function(e){return this.hasLayer(e)?this:(e.addEventParent(this),$n.prototype.addLayer.call(this,e),this.fire(`layeradd`,{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.removeEventParent(this),$n.prototype.removeLayer.call(this,e),this.fire(`layerremove`,{layer:e})):this},setStyle:function(e){return this.invoke(`setStyle`,e)},bringToFront:function(){return this.invoke(`bringToFront`)},bringToBack:function(){return this.invoke(`bringToBack`)},getBounds:function(){var e=new ae;for(var t in this._layers){var n=this._layers[t];e.extend(n.getBounds?n.getBounds():n.getLatLng())}return e}}),nr=function(e,t){return new tr(e,t)},rr=E.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(e){p(this,e)},createIcon:function(e){return this._createIcon(`icon`,e)},createShadow:function(e){return this._createIcon(`shadow`,e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e===`icon`)throw Error(`iconUrl not set in Icon options (see the docs).`);return null}var r=this._createImg(n,t&&t.tagName===`IMG`?t:null);return this._setIconStyles(r,e),(this.options.crossOrigin||this.options.crossOrigin===``)&&(r.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),r},_setIconStyles:function(e,t){var n=this.options,r=n[t+`Size`];typeof r==`number`&&(r=[r,r]);var i=A(r),a=A(t===`shadow`&&n.shadowAnchor||n.iconAnchor||i&&i.divideBy(2,!0));e.className=`leaflet-marker-`+t+` `+(n.className||``),a&&(e.style.marginLeft=-a.x+`px`,e.style.marginTop=-a.y+`px`),i&&(e.style.width=i.x+`px`,e.style.height=i.y+`px`)},_createImg:function(e,t){return t||=document.createElement(`img`),t.src=e,t},_getIconUrl:function(e){return F.retina&&this.options[e+`RetinaUrl`]||this.options[e+`Url`]}});function ir(e){return new rr(e)}var ar=rr.extend({options:{iconUrl:`marker-icon.png`,iconRetinaUrl:`marker-icon-2x.png`,shadowUrl:`marker-shadow.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return typeof ar.imagePath!=`string`&&(ar.imagePath=this._detectIconPath()),(this.options.imagePath||ar.imagePath)+rr.prototype._getIconUrl.call(this,e)},_stripUrl:function(e){var t=function(e,t,n){var r=t.exec(e);return r&&r[n]};return e=t(e,/^url\((['"])?(.+)\1\)$/,2),e&&t(e,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var e=R(`div`,`leaflet-default-icon-path`,document.body),t=Ct(e,`background-image`)||Ct(e,`backgroundImage`);if(document.body.removeChild(e),t=this._stripUrl(t),t)return t;var n=document.querySelector(`link[href$="leaflet.css"]`);return n?n.href.substring(0,n.href.length-11-1):``}}),or=Cn.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||=new En(e,e,!0),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),z(e,`leaflet-marker-draggable`)},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&kt(this._marker._icon,`leaflet-marker-draggable`)},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(e){var t=this._marker,n=t._map,r=this._marker.options.autoPanSpeed,i=this._marker.options.autoPanPadding,a=Lt(t._icon),o=n.getPixelBounds(),s=n.getPixelOrigin(),c=ie(o.min._subtract(s).add(i),o.max._subtract(s).subtract(i));if(!c.contains(a)){var l=A((Math.max(c.max.x,a.x)-c.max.x)/(o.max.x-c.max.x)-(Math.min(c.min.x,a.x)-c.min.x)/(o.min.x-c.min.x),(Math.max(c.max.y,a.y)-c.max.y)/(o.max.y-c.max.y)-(Math.min(c.min.y,a.y)-c.min.y)/(o.min.y-c.min.y)).multiplyBy(r);n.panBy(l,{animate:!1}),this._draggable._newPos._add(l),this._draggable._startPos._add(l),It(t._icon,this._draggable._newPos),this._onDrag(e),this._panRequest=w(this._adjustPan.bind(this,e))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire(`movestart`).fire(`dragstart`)},_onPreDrag:function(e){this._marker.options.autoPan&&(T(this._panRequest),this._panRequest=w(this._adjustPan.bind(this,e)))},_onDrag:function(e){var t=this._marker,n=t._shadow,r=Lt(t._icon),i=t._map.layerPointToLatLng(r);n&&It(n,r),t._latlng=i,e.latlng=i,e.oldLatLng=this._oldLatLng,t.fire(`move`,e).fire(`drag`,e)},_onDragEnd:function(e){T(this._panRequest),delete this._oldLatLng,this._marker.fire(`moveend`).fire(`dragend`,e)}}),sr=Qn.extend({options:{icon:new ar,interactive:!0,keyboard:!0,title:``,alt:`Marker`,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:`markerPane`,shadowPane:`shadowPane`,bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(e,t){p(this,t),this._latlng=P(e)},onAdd:function(e){this._zoomAnimated=this._zoomAnimated&&e.options.markerZoomAnimation,this._zoomAnimated&&e.on(`zoomanim`,this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(e){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&e.off(`zoomanim`,this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(e){var t=this._latlng;return this._latlng=P(e),this.update(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update()},getIcon:function(){return this.options.icon},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=`leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`),n=e.icon.createIcon(this._icon),r=!1;n!==this._icon&&(this._icon&&this._removeIcon(),r=!0,e.title&&(n.title=e.title),n.tagName===`IMG`&&(n.alt=e.alt||``)),z(n,t),e.keyboard&&(n.tabIndex=`0`,n.setAttribute(`role`,`button`)),this._icon=n,e.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&V(n,`focus`,this._panOnFocus,this);var i=e.icon.createShadow(this._shadow),a=!1;i!==this._shadow&&(this._removeShadow(),a=!0),i&&(z(i,t),i.alt=``),this._shadow=i,e.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&a&&this.getPane(e.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&H(this._icon,`focus`,this._panOnFocus,this),wt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&wt(this._shadow),this._shadow=null},_setPos:function(e){this._icon&&It(this._icon,e),this._shadow&&It(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon&&(this._icon.style.zIndex=this._zIndex+e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(this.options.interactive&&(z(this._icon,`leaflet-interactive`),this.addInteractiveTarget(this._icon),or)){var e=this.options.draggable;this.dragging&&(e=this.dragging.enabled(),this.dragging.disable()),this.dragging=new or(this),e&&this.dragging.enable()}},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var e=this.options.opacity;this._icon&&Mt(this._icon,e),this._shadow&&Mt(this._shadow,e)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var e=this._map;if(e){var t=this.options.icon.options,n=t.iconSize?A(t.iconSize):A(0,0),r=t.iconAnchor?A(t.iconAnchor):A(0,0);e.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:n.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function cr(e,t){return new sr(e,t)}var lr=Qn.extend({options:{stroke:!0,color:`#3388ff`,weight:3,opacity:1,lineCap:`round`,lineJoin:`round`,dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:`evenodd`,interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(e){this._renderer=e.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(e){return p(this,e),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&e&&Object.prototype.hasOwnProperty.call(e,`weight`)&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ur=lr.extend({options:{fill:!0,radius:10},initialize:function(e,t){p(this,t),this._latlng=P(e),this._radius=this.options.radius},setLatLng:function(e){var t=this._latlng;return this._latlng=P(e),this.redraw(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius},setStyle:function(e){var t=e&&e.radius||this._radius;return lr.prototype.setStyle.call(this,e),this.setRadius(t),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var e=this._radius,t=this._radiusY||e,n=this._clickTolerance(),r=[e+n,t+n];this._pxBounds=new j(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(e){return e.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function dr(e,t){return new ur(e,t)}var fr=ur.extend({initialize:function(e,t,r){if(typeof t==`number`&&(t=n({},r,{radius:t})),p(this,t),this._latlng=P(e),isNaN(this.options.radius))throw Error(`Circle radius cannot be NaN`);this._mRadius=this.options.radius},setRadius:function(e){return this._mRadius=e,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var e=[this._radius,this._radiusY||this._radius];return new ae(this._map.layerPointToLatLng(this._point.subtract(e)),this._map.layerPointToLatLng(this._point.add(e)))},setStyle:lr.prototype.setStyle,_project:function(){var e=this._latlng.lng,t=this._latlng.lat,n=this._map,r=n.options.crs;if(r.distance===se.distance){var i=Math.PI/180,a=this._mRadius/se.R/i,o=n.project([t+a,e]),s=n.project([t-a,e]),c=o.add(s).divideBy(2),l=n.unproject(c).lat,u=Math.acos((Math.cos(a*i)-Math.sin(t*i)*Math.sin(l*i))/(Math.cos(t*i)*Math.cos(l*i)))/i;(isNaN(u)||u===0)&&(u=a/Math.cos(Math.PI/180*t)),this._point=c.subtract(n.getPixelOrigin()),this._radius=isNaN(u)?0:c.x-n.project([l,e-u]).x,this._radiusY=c.y-o.y}else{var d=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(d).x}this._updateBounds()}});function pr(e,t,n){return new fr(e,t,n)}var mr=lr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(e,t){p(this,t),this._setLatLngs(e)},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._setLatLngs(e),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(e){for(var t=1/0,n=null,r=Vn,i,a,o=0,s=this._parts.length;o<s;o++)for(var c=this._parts[o],l=1,u=c.length;l<u;l++){i=c[l-1],a=c[l];var d=r(e,i,a,!0);d<t&&(t=d,n=r(e,i,a))}return n&&(n.distance=Math.sqrt(t)),n},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return Wn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(e,t){return t||=this._defaultShape(),e=P(e),t.push(e),this._bounds.extend(e),this.redraw()},_setLatLngs:function(e){this._bounds=new ae,this._latlngs=this._convertLatLngs(e)},_defaultShape:function(){return Hn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(e){for(var t=[],n=Hn(e),r=0,i=e.length;r<i;r++)n?(t[r]=P(e[r]),this._bounds.extend(t[r])):t[r]=this._convertLatLngs(e[r]);return t},_project:function(){var e=new j;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,e),this._bounds.isValid()&&e.isValid()&&(this._rawPxBounds=e,this._updateBounds())},_updateBounds:function(){var e=this._clickTolerance(),t=new k(e,e);this._rawPxBounds&&(this._pxBounds=new j([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(e,t,n){var r=e[0]instanceof N,i=e.length,a,o;if(r){for(o=[],a=0;a<i;a++)o[a]=this._map.latLngToLayerPoint(e[a]),n.extend(o[a]);t.push(o)}else for(a=0;a<i;a++)this._projectLatlngs(e[a],t,n)},_clipPoints:function(){var e=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}var t=this._parts,n,r,i,a,o,s,c;for(n=0,i=0,a=this._rings.length;n<a;n++)for(c=this._rings[n],r=0,o=c.length;r<o-1;r++)s=Rn(c[r],c[r+1],e,r,!0),s&&(t[i]=t[i]||[],t[i].push(s[0]),(s[1]!==c[r+1]||r===o-2)&&(t[i].push(s[1]),i++))}},_simplifyPoints:function(){for(var e=this._parts,t=this.options.smoothFactor,n=0,r=e.length;n<r;n++)e[n]=jn(e[n],t)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(e,t){var n,r,i,a,o,s,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(n=0,a=this._parts.length;n<a;n++)for(s=this._parts[n],r=0,o=s.length,i=o-1;r<o;i=r++)if(!(!t&&r===0)&&Mn(e,s[i],s[r])<=c)return!0;return!1}});function hr(e,t){return new mr(e,t)}mr._flat=Un;var gr=mr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return On(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(e){var t=mr.prototype._convertLatLngs.call(this,e),n=t.length;return n>=2&&t[0]instanceof N&&t[0].equals(t[n-1])&&t.pop(),t},_setLatLngs:function(e){mr.prototype._setLatLngs.call(this,e),Hn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Hn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var e=this._renderer._bounds,t=this.options.weight,n=new k(t,t);if(e=new j(e.min.subtract(n),e.max.add(n)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}for(var r=0,i=this._rings.length,a;r<i;r++)a=Dn(this._rings[r],e,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(e){var t=!1,n,r,i,a,o,s,c,l;if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(a=0,c=this._parts.length;a<c;a++)for(n=this._parts[a],o=0,l=n.length,s=l-1;o<l;s=o++)r=n[o],i=n[s],r.y>e.y!=i.y>e.y&&e.x<(i.x-r.x)*(e.y-r.y)/(i.y-r.y)+r.x&&(t=!t);return t||mr.prototype._containsPoint.call(this,e,!0)}});function _r(e,t){return new gr(e,t)}var vr=tr.extend({initialize:function(e,t){p(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=_(e)?e:e.features,n,r,i;if(t){for(n=0,r=t.length;n<r;n++)i=t[n],(i.geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var a=this.options;if(a.filter&&!a.filter(e))return this;var o=yr(e,a);return o?(o.feature=Er(e),o.defaultOptions=o.options,this.resetStyle(o),a.onEachFeature&&a.onEachFeature(e,o),this.addLayer(o)):this},resetStyle:function(e){return e===void 0?this.eachLayer(this.resetStyle,this):(e.options=n({},e.defaultOptions),this._setLayerStyle(e,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){e.setStyle&&(typeof t==`function`&&(t=t(e.feature)),e.setStyle(t))}});function yr(e,t){var n=e.type===`Feature`?e.geometry:e,r=n?n.coordinates:null,i=[],a=t&&t.pointToLayer,o=t&&t.coordsToLatLng||xr,s,c,l,u;if(!r&&!n)return null;switch(n.type){case`Point`:return s=o(r),br(a,e,s,t);case`MultiPoint`:for(l=0,u=r.length;l<u;l++)s=o(r[l]),i.push(br(a,e,s,t));return new tr(i);case`LineString`:case`MultiLineString`:return c=Sr(r,n.type===`LineString`?0:1,o),new mr(c,t);case`Polygon`:case`MultiPolygon`:return c=Sr(r,n.type===`Polygon`?1:2,o),new gr(c,t);case`GeometryCollection`:for(l=0,u=n.geometries.length;l<u;l++){var d=yr({geometry:n.geometries[l],type:`Feature`,properties:e.properties},t);d&&i.push(d)}return new tr(i);case`FeatureCollection`:for(l=0,u=n.features.length;l<u;l++){var f=yr(n.features[l],t);f&&i.push(f)}return new tr(i);default:throw Error(`Invalid GeoJSON object.`)}}function br(e,t,n,r){return e?e(t,n):new sr(n,r&&r.markersInheritOptions&&r)}function xr(e){return new N(e[1],e[0],e[2])}function Sr(e,t,n){for(var r=[],i=0,a=e.length,o;i<a;i++)o=t?Sr(e[i],t-1,n):(n||xr)(e[i]),r.push(o);return r}function Cr(e,t){return e=P(e),e.alt===void 0?[u(e.lng,t),u(e.lat,t)]:[u(e.lng,t),u(e.lat,t),u(e.alt,t)]}function wr(e,t,n,r){for(var i=[],a=0,o=e.length;a<o;a++)i.push(t?wr(e[a],Hn(e[a])?0:t-1,n,r):Cr(e[a],r));return!t&&n&&i.length>0&&i.push(i[0].slice()),i}function Tr(e,t){return e.feature?n({},e.feature,{geometry:t}):Er(t)}function Er(e){return e.type===`Feature`||e.type===`FeatureCollection`?e:{type:`Feature`,properties:{},geometry:e}}var Dr={toGeoJSON:function(e){return Tr(this,{type:`Point`,coordinates:Cr(this.getLatLng(),e)})}};sr.include(Dr),fr.include(Dr),ur.include(Dr),mr.include({toGeoJSON:function(e){var t=!Hn(this._latlngs),n=wr(this._latlngs,+!!t,!1,e);return Tr(this,{type:(t?`Multi`:``)+`LineString`,coordinates:n})}}),gr.include({toGeoJSON:function(e){var t=!Hn(this._latlngs),n=t&&!Hn(this._latlngs[0]),r=wr(this._latlngs,n?2:+!!t,!0,e);return t||(r=[r]),Tr(this,{type:(n?`Multi`:``)+`Polygon`,coordinates:r})}}),$n.include({toMultiPoint:function(e){var t=[];return this.eachLayer(function(n){t.push(n.toGeoJSON(e).geometry.coordinates)}),Tr(this,{type:`MultiPoint`,coordinates:t})},toGeoJSON:function(e){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(t===`MultiPoint`)return this.toMultiPoint(e);var n=t===`GeometryCollection`,r=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(e);if(n)r.push(i.geometry);else{var a=Er(i);a.type===`FeatureCollection`?r.push.apply(r,a.features):r.push(a)}}}),n?Tr(this,{geometries:r,type:`GeometryCollection`}):{type:`FeatureCollection`,features:r}}});function Or(e,t){return new vr(e,t)}var kr=Or,Ar=Qn.extend({options:{opacity:1,alt:``,interactive:!1,crossOrigin:!1,errorOverlayUrl:``,zIndex:1,className:``},initialize:function(e,t,n){this._url=e,this._bounds=M(t),p(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(z(this._image,`leaflet-interactive`),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){wt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(e){return this.options.opacity=e,this._image&&this._updateOpacity(),this},setStyle:function(e){return e.opacity&&this.setOpacity(e.opacity),this},bringToFront:function(){return this._map&&Et(this._image),this},bringToBack:function(){return this._map&&Dt(this._image),this},setUrl:function(e){return this._url=e,this._image&&(this._image.src=e),this},setBounds:function(e){return this._bounds=M(e),this._map&&this._reset(),this},getEvents:function(){var e={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var e=this._url.tagName===`IMG`,t=this._image=e?this._url:R(`img`);if(z(t,`leaflet-image-layer`),this._zoomAnimated&&z(t,`leaflet-zoom-animated`),this.options.className&&z(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onload=i(this.fire,this,`load`),t.onerror=i(this._overlayOnError,this,`error`),(this.options.crossOrigin||this.options.crossOrigin===``)&&(t.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),e){this._url=t.src;return}t.src=this._url,t.alt=this.options.alt},_animateZoom:function(e){var t=this._map.getZoomScale(e.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,e.zoom,e.center).min;Ft(this._image,n,t)},_reset:function(){var e=this._image,t=new j(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=t.getSize();It(e,t.min),e.style.width=n.x+`px`,e.style.height=n.y+`px`},_updateOpacity:function(){Mt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire(`error`);var e=this.options.errorOverlayUrl;e&&this._url!==e&&(this._url=e,this._image.src=e)},getCenter:function(){return this._bounds.getCenter()}}),jr=function(e,t,n){return new Ar(e,t,n)},Mr=Ar.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var e=this._url.tagName===`VIDEO`,t=this._image=e?this._url:R(`video`);if(z(t,`leaflet-image-layer`),this._zoomAnimated&&z(t,`leaflet-zoom-animated`),this.options.className&&z(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onloadeddata=i(this.fire,this,`load`),e){for(var n=t.getElementsByTagName(`source`),r=[],a=0;a<n.length;a++)r.push(n[a].src);this._url=n.length>0?r:[t.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(t.style,`objectFit`)&&(t.style.objectFit=`fill`),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop,t.muted=!!this.options.muted,t.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var s=R(`source`);s.src=this._url[o],t.appendChild(s)}}});function Nr(e,t,n){return new Mr(e,t,n)}var Pr=Ar.extend({_initImage:function(){var e=this._image=this._url;z(e,`leaflet-image-layer`),this._zoomAnimated&&z(e,`leaflet-zoom-animated`),this.options.className&&z(e,this.options.className),e.onselectstart=l,e.onmousemove=l}});function Fr(e,t,n){return new Pr(e,t,n)}var Ir=Qn.extend({options:{interactive:!1,offset:[0,0],className:``,pane:void 0,content:``},initialize:function(e,t){e&&(e instanceof N||_(e))?(this._latlng=P(e),p(this,t)):(p(this,e),this._source=t),this.options.content&&(this._content=this.options.content)},openOn:function(e){return e=arguments.length?e:this._source._map,e.hasLayer(this)||e.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(e){return this._map?this.close():(arguments.length?this._source=e:e=this._source,this._prepareOpen(),this.openOn(e._map)),this},onAdd:function(e){this._zoomAnimated=e._zoomAnimated,this._container||this._initLayout(),e._fadeAnimated&&Mt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),e._fadeAnimated&&Mt(this._container,1),this.bringToFront(),this.options.interactive&&(z(this._container,`leaflet-interactive`),this.addInteractiveTarget(this._container))},onRemove:function(e){e._fadeAnimated?(Mt(this._container,0),this._removeTimeout=setTimeout(i(wt,void 0,this._container),200)):wt(this._container),this.options.interactive&&(kt(this._container,`leaflet-interactive`),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=P(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility=`hidden`,this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility=``,this._adjustPan())},getEvents:function(){var e={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Et(this._container),this},bringToBack:function(){return this._map&&Dt(this._container),this},_prepareOpen:function(e){var t=this._source;if(!t._map)return!1;if(t instanceof tr){t=null;var n=this._source._layers;for(var r in n)if(n[r]._map){t=n[r];break}if(!t)return!1;this._source=t}if(!e)if(t.getCenter)e=t.getCenter();else if(t.getLatLng)e=t.getLatLng();else if(t.getBounds)e=t.getBounds().getCenter();else throw Error(`Unable to get source layer LatLng.`);return this.setLatLng(e),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var e=this._contentNode,t=typeof this._content==`function`?this._content(this._source||this):this._content;if(typeof t==`string`)e.innerHTML=t;else{for(;e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t)}this.fire(`contentupdate`)}},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=A(this.options.offset),n=this._getAnchor();this._zoomAnimated?It(this._container,e.add(n)):t=t.add(e).add(n);var r=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x;this._container.style.bottom=r+`px`,this._container.style.left=i+`px`}},_getAnchor:function(){return[0,0]}});U.include({_initOverlay:function(e,t,n,r){var i=t;return i instanceof e||(i=new e(r).setContent(t)),n&&i.setLatLng(n),i}}),Qn.include({_initOverlay:function(e,t,n,r){var i=n;return i instanceof e?(p(i,r),i._source=this):(i=t&&!r?t:new e(r,this),i.setContent(n)),i}});var Lr=Ir.extend({options:{pane:`popupPane`,offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:``},openOn:function(e){return e=arguments.length?e:this._source._map,!e.hasLayer(this)&&e._popup&&e._popup.options.autoClose&&e.removeLayer(e._popup),e._popup=this,Ir.prototype.openOn.call(this,e)},onAdd:function(e){Ir.prototype.onAdd.call(this,e),e.fire(`popupopen`,{popup:this}),this._source&&(this._source.fire(`popupopen`,{popup:this},!0),this._source instanceof lr||this._source.on(`preclick`,tn))},onRemove:function(e){Ir.prototype.onRemove.call(this,e),e.fire(`popupclose`,{popup:this}),this._source&&(this._source.fire(`popupclose`,{popup:this},!0),this._source instanceof lr||this._source.off(`preclick`,tn))},getEvents:function(){var e=Ir.prototype.getEvents.call(this);return(this.options.closeOnClick===void 0?this._map.options.closePopupOnClick:this.options.closeOnClick)&&(e.preclick=this.close),this.options.keepInView&&(e.moveend=this._adjustPan),e},_initLayout:function(){var e=`leaflet-popup`,t=this._container=R(`div`,e+` `+(this.options.className||``)+` leaflet-zoom-animated`),n=this._wrapper=R(`div`,e+`-content-wrapper`,t);if(this._contentNode=R(`div`,e+`-content`,n),rn(t),nn(this._contentNode),V(t,`contextmenu`,tn),this._tipContainer=R(`div`,e+`-tip-container`,t),this._tip=R(`div`,e+`-tip`,this._tipContainer),this.options.closeButton){var r=this._closeButton=R(`a`,e+`-close-button`,t);r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`Close popup`),r.href=`#close`,r.innerHTML=`<span aria-hidden="true">&#215;</span>`,V(r,`click`,function(e){an(e),this.close()},this)}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width=``,t.whiteSpace=`nowrap`;var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+`px`,t.whiteSpace=``,t.height=``;var r=e.offsetHeight,i=this.options.maxHeight,a=`leaflet-popup-scrolled`;i&&r>i?(t.height=i+`px`,z(e,a)):kt(e,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center),n=this._getAnchor();It(this._container,t.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var e=this._map,t=parseInt(Ct(this._container,`marginBottom`),10)||0,n=this._container.offsetHeight+t,r=this._containerWidth,i=new k(this._containerLeft,-n-this._containerBottom);i._add(Lt(this._container));var a=e.layerPointToContainerPoint(i),o=A(this.options.autoPanPadding),s=A(this.options.autoPanPaddingTopLeft||o),c=A(this.options.autoPanPaddingBottomRight||o),l=e.getSize(),u=0,d=0;a.x+r+c.x>l.x&&(u=a.x+r-l.x+c.x),a.x-u-s.x<0&&(u=a.x-s.x),a.y+n+c.y>l.y&&(d=a.y+n-l.y+c.y),a.y-d-s.y<0&&(d=a.y-s.y),(u||d)&&(this.options.keepInView&&(this._autopanning=!0),e.fire(`autopanstart`).panBy([u,d]))}},_getAnchor:function(){return A(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Rr=function(e,t){return new Lr(e,t)};U.mergeOptions({closePopupOnClick:!0}),U.include({openPopup:function(e,t,n){return this._initOverlay(Lr,e,t,n).openOn(this),this},closePopup:function(e){return e=arguments.length?e:this._popup,e&&e.close(),this}}),Qn.include({bindPopup:function(e,t){return this._popup=this._initOverlay(Lr,this._popup,e,t),this._popupHandlersAdded||=(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),!0),this},unbindPopup:function(){return this._popup&&=(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,null),this},openPopup:function(e){return this._popup&&(this instanceof tr||(this._popup._source=this),this._popup._prepareOpen(e||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},getPopup:function(){return this._popup},_openPopup:function(e){if(!(!this._popup||!this._map)){on(e);var t=e.layer||e.target;if(this._popup._source===t&&!(t instanceof lr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(e.latlng);return}this._popup._source=t,this.openPopup(e.latlng)}},_movePopup:function(e){this._popup.setLatLng(e.latlng)},_onKeyPress:function(e){e.originalEvent.keyCode===13&&this._openPopup(e)}});var zr=Ir.extend({options:{pane:`tooltipPane`,offset:[0,0],direction:`auto`,permanent:!1,sticky:!1,opacity:.9},onAdd:function(e){Ir.prototype.onAdd.call(this,e),this.setOpacity(this.options.opacity),e.fire(`tooltipopen`,{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire(`tooltipopen`,{tooltip:this},!0))},onRemove:function(e){Ir.prototype.onRemove.call(this,e),e.fire(`tooltipclose`,{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire(`tooltipclose`,{tooltip:this},!0))},getEvents:function(){var e=Ir.prototype.getEvents.call(this);return this.options.permanent||(e.preclick=this.close),e},_initLayout:function(){var e=`leaflet-tooltip `+(this.options.className||``)+` leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`);this._contentNode=this._container=R(`div`,e),this._container.setAttribute(`role`,`tooltip`),this._container.setAttribute(`id`,`leaflet-tooltip-`+o(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(e){var t,n,r=this._map,i=this._container,a=r.latLngToContainerPoint(r.getCenter()),o=r.layerPointToContainerPoint(e),s=this.options.direction,c=i.offsetWidth,l=i.offsetHeight,u=A(this.options.offset),d=this._getAnchor();s===`top`?(t=c/2,n=l):s===`bottom`?(t=c/2,n=0):s===`center`?(t=c/2,n=l/2):s===`right`?(t=0,n=l/2):s===`left`?(t=c,n=l/2):o.x<a.x?(s=`right`,t=0,n=l/2):(s=`left`,t=c+(u.x+d.x)*2,n=l/2),e=e.subtract(A(t,n,!0)).add(u).add(d),kt(i,`leaflet-tooltip-right`),kt(i,`leaflet-tooltip-left`),kt(i,`leaflet-tooltip-top`),kt(i,`leaflet-tooltip-bottom`),z(i,`leaflet-tooltip-`+s),It(i,e)},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},setOpacity:function(e){this.options.opacity=e,this._container&&Mt(this._container,e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)},_getAnchor:function(){return A(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Br=function(e,t){return new zr(e,t)};U.include({openTooltip:function(e,t,n){return this._initOverlay(zr,e,t,n).openOn(this),this},closeTooltip:function(e){return e.close(),this}}),Qn.include({bindTooltip:function(e,t){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(zr,this._tooltip,e,t),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&=(this._initTooltipInteractions(!0),this.closeTooltip(),null),this},_initTooltipInteractions:function(e){if(!(!e&&this._tooltipHandlersAdded)){var t=e?`off`:`on`,n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[t](n),this._tooltipHandlersAdded=!e}},openTooltip:function(e){return this._tooltip&&(this instanceof tr||(this._tooltip._source=this),this._tooltip._prepareOpen(e)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(e){return this._tooltip&&this._tooltip.setContent(e),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&(V(t,`focus`,function(){this._tooltip._source=e,this.openTooltip()},this),V(t,`blur`,this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&t.setAttribute(`aria-describedby`,this._tooltip._container.id)},_openTooltip:function(e){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var t=this;this._map.once(`moveend`,function(){t._openOnceFlag=!1,t._openTooltip(e)});return}this._tooltip._source=e.layer||e.target,this.openTooltip(this._tooltip.options.sticky?e.latlng:void 0)}},_moveTooltip:function(e){var t=e.latlng,n,r;this._tooltip.options.sticky&&e.originalEvent&&(n=this._map.mouseEventToContainerPoint(e.originalEvent),r=this._map.containerPointToLayerPoint(n),t=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(t)}});var Vr=rr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:`leaflet-div-icon`},createIcon:function(e){var t=e&&e.tagName===`DIV`?e:document.createElement(`div`),n=this.options;if(n.html instanceof Element?(Tt(t),t.appendChild(n.html)):t.innerHTML=n.html===!1?``:n.html,n.bgPos){var r=A(n.bgPos);t.style.backgroundPosition=-r.x+`px `+-r.y+`px`}return this._setIconStyles(t,`icon`),t},createShadow:function(){return null}});function Hr(e){return new Vr(e)}rr.Default=ar;var Ur=Qn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:F.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:`tilePane`,className:``,keepBuffer:2},initialize:function(e){p(this,e)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(e){e._addZoomLimit(this)},onRemove:function(e){this._removeAllTiles(),wt(this._container),e._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Et(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Dt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var e=this._clampZoom(this._map.getZoom());e!==this._tileZoom&&(this._tileZoom=e,this._updateLevels()),this._update()}return this},getEvents:function(){var e={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||=s(this._onMoveEnd,this.options.updateInterval,this),e.move=this._onMove),this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},createTile:function(){return document.createElement(`div`)},getTileSize:function(){var e=this.options.tileSize;return e instanceof k?e:new k(e,e)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e){for(var t=this.getPane().children,n=-e(-1/0,1/0),r=0,i=t.length,a;r<i;r++)a=t[r].style.zIndex,t[r]!==this._container&&a&&(n=e(n,+a));isFinite(n)&&(this.options.zIndex=n+e(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!F.ielt9){Mt(this._container,this.options.opacity);var e=+new Date,t=!1,n=!1;for(var r in this._tiles){var i=this._tiles[r];if(!(!i.current||!i.loaded)){var a=Math.min(1,(e-i.loaded)/200);Mt(i.el,a),a<1?t=!0:(i.active?n=!0:this._onOpaqueTile(i),i.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),t&&(T(this._fadeFrame),this._fadeFrame=w(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=R(`div`,`leaflet-layer `+(this.options.className||``)),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var e=this._tileZoom,t=this.options.maxZoom;if(e!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===e?(this._levels[n].el.style.zIndex=t-Math.abs(e-n),this._onUpdateLevel(n)):(wt(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var r=this._levels[e],i=this._map;return r||(r=this._levels[e]={},r.el=R(`div`,`leaflet-tile-container leaflet-zoom-animated`,this._container),r.el.style.zIndex=t,r.origin=i.project(i.unproject(i.getPixelOrigin()),e).round(),r.zoom=e,this._setZoomTransform(r,i.getCenter(),i.getZoom()),r.el.offsetWidth,this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var e,t,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(e in this._tiles)t=this._tiles[e],t.retain=t.current;for(e in this._tiles)if(t=this._tiles[e],t.current&&!t.active){var r=t.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(e in this._tiles)this._tiles[e].retain||this._removeTile(e)}},_removeTilesAtZoom:function(e){for(var t in this._tiles)this._tiles[t].coords.z===e&&this._removeTile(t)},_removeAllTiles:function(){for(var e in this._tiles)this._removeTile(e)},_invalidateAll:function(){for(var e in this._levels)wt(this._levels[e].el),this._onRemoveLevel(Number(e)),delete this._levels[e];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(e,t,n,r){var i=Math.floor(e/2),a=Math.floor(t/2),o=n-1,s=new k(+i,+a);s.z=+o;var c=this._tileCoordsToKey(s),l=this._tiles[c];return l&&l.active?(l.retain=!0,!0):(l&&l.loaded&&(l.retain=!0),o>r?this._retainParent(i,a,o,r):!1)},_retainChildren:function(e,t,n,r){for(var i=2*e;i<2*e+2;i++)for(var a=2*t;a<2*t+2;a++){var o=new k(i,a);o.z=n+1;var s=this._tileCoordsToKey(o),c=this._tiles[s];if(c&&c.active){c.retain=!0;continue}else c&&c.loaded&&(c.retain=!0);n+1<r&&this._retainChildren(i,a,n+1,r)}},_resetView:function(e){var t=e&&(e.pinch||e.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(e){this._setView(e.center,e.zoom,!0,e.noUpdate)},_clampZoom:function(e){var t=this.options;return t.minNativeZoom!==void 0&&e<t.minNativeZoom?t.minNativeZoom:t.maxNativeZoom!==void 0&&t.maxNativeZoom<e?t.maxNativeZoom:e},_setView:function(e,t,n,r){var i=Math.round(t);i=this.options.maxZoom!==void 0&&i>this.options.maxZoom||this.options.minZoom!==void 0&&i<this.options.minZoom?void 0:this._clampZoom(i);var a=this.options.updateWhenZooming&&i!==this._tileZoom;(!r||a)&&(this._tileZoom=i,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),i!==void 0&&this._update(e),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(e,t)},_setZoomTransforms:function(e,t){for(var n in this._levels)this._setZoomTransform(this._levels[n],e,t)},_setZoomTransform:function(e,t,n){var r=this._map.getZoomScale(n,e.zoom),i=e.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(t,n)).round();F.any3d?Ft(e.el,i,r):It(e.el,i)},_resetGrid:function(){var e=this._map,t=e.options.crs,n=this._tileSize=this.getTileSize(),r=this._tileZoom,i=this._map.getPixelWorldBounds(this._tileZoom);i&&(this._globalTileRange=this._pxBoundsToTileRange(i)),this._wrapX=t.wrapLng&&!this.options.noWrap&&[Math.floor(e.project([0,t.wrapLng[0]],r).x/n.x),Math.ceil(e.project([0,t.wrapLng[1]],r).x/n.y)],this._wrapY=t.wrapLat&&!this.options.noWrap&&[Math.floor(e.project([t.wrapLat[0],0],r).y/n.x),Math.ceil(e.project([t.wrapLat[1],0],r).y/n.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(e){var t=this._map,n=t._animatingZoom?Math.max(t._animateToZoom,t.getZoom()):t.getZoom(),r=t.getZoomScale(n,this._tileZoom),i=t.project(e,this._tileZoom).floor(),a=t.getSize().divideBy(r*2);return new j(i.subtract(a),i.add(a))},_update:function(e){var t=this._map;if(t){var n=this._clampZoom(t.getZoom());if(e===void 0&&(e=t.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(e),i=this._pxBoundsToTileRange(r),a=i.getCenter(),o=[],s=this.options.keepBuffer,c=new j(i.getBottomLeft().subtract([s,-s]),i.getTopRight().add([s,-s]));if(!(isFinite(i.min.x)&&isFinite(i.min.y)&&isFinite(i.max.x)&&isFinite(i.max.y)))throw Error(`Attempted to load an infinite number of tiles`);for(var l in this._tiles){var u=this._tiles[l].coords;(u.z!==this._tileZoom||!c.contains(new k(u.x,u.y)))&&(this._tiles[l].current=!1)}if(Math.abs(n-this._tileZoom)>1){this._setView(e,n);return}for(var d=i.min.y;d<=i.max.y;d++)for(var f=i.min.x;f<=i.max.x;f++){var p=new k(f,d);if(p.z=this._tileZoom,this._isValidTile(p)){var m=this._tiles[this._tileCoordsToKey(p)];m?m.current=!0:o.push(p)}}if(o.sort(function(e,t){return e.distanceTo(a)-t.distanceTo(a)}),o.length!==0){this._loading||(this._loading=!0,this.fire(`loading`));var h=document.createDocumentFragment();for(f=0;f<o.length;f++)this._addTile(o[f],h);this._level.el.appendChild(h)}}}},_isValidTile:function(e){var t=this._map.options.crs;if(!t.infinite){var n=this._globalTileRange;if(!t.wrapLng&&(e.x<n.min.x||e.x>n.max.x)||!t.wrapLat&&(e.y<n.min.y||e.y>n.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(e);return M(this.options.bounds).overlaps(r)},_keyToBounds:function(e){return this._tileCoordsToBounds(this._keyToTileCoords(e))},_tileCoordsToNwSe:function(e){var t=this._map,n=this.getTileSize(),r=e.scaleBy(n),i=r.add(n);return[t.unproject(r,e.z),t.unproject(i,e.z)]},_tileCoordsToBounds:function(e){var t=this._tileCoordsToNwSe(e),n=new ae(t[0],t[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(e){return e.x+`:`+e.y+`:`+e.z},_keyToTileCoords:function(e){var t=e.split(`:`),n=new k(+t[0],+t[1]);return n.z=+t[2],n},_removeTile:function(e){var t=this._tiles[e];t&&(wt(t.el),delete this._tiles[e],this.fire(`tileunload`,{tile:t.el,coords:this._keyToTileCoords(e)}))},_initTile:function(e){z(e,`leaflet-tile`);var t=this.getTileSize();e.style.width=t.x+`px`,e.style.height=t.y+`px`,e.onselectstart=l,e.onmousemove=l,F.ielt9&&this.options.opacity<1&&Mt(e,this.options.opacity)},_addTile:function(e,t){var n=this._getTilePos(e),r=this._tileCoordsToKey(e),a=this.createTile(this._wrapCoords(e),i(this._tileReady,this,e));this._initTile(a),this.createTile.length<2&&w(i(this._tileReady,this,e,null,a)),It(a,n),this._tiles[r]={el:a,coords:e,current:!0},t.appendChild(a),this.fire(`tileloadstart`,{tile:a,coords:e})},_tileReady:function(e,t,n){t&&this.fire(`tileerror`,{error:t,tile:n,coords:e});var r=this._tileCoordsToKey(e);n=this._tiles[r],n&&(n.loaded=+new Date,this._map._fadeAnimated?(Mt(n.el,0),T(this._fadeFrame),this._fadeFrame=w(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),t||(z(n.el,`leaflet-tile-loaded`),this.fire(`tileload`,{tile:n.el,coords:e})),this._noTilesToLoad()&&(this._loading=!1,this.fire(`load`),F.ielt9||!this._map._fadeAnimated?w(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(e){return e.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(e){var t=new k(this._wrapX?c(e.x,this._wrapX):e.x,this._wrapY?c(e.y,this._wrapY):e.y);return t.z=e.z,t},_pxBoundsToTileRange:function(e){var t=this.getTileSize();return new j(e.min.unscaleBy(t).floor(),e.max.unscaleBy(t).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var e in this._tiles)if(!this._tiles[e].loaded)return!1;return!0}});function Wr(e){return new Ur(e)}var Gr=Ur.extend({options:{minZoom:0,maxZoom:18,subdomains:`abc`,errorTileUrl:``,zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(e,t){this._url=e,t=p(this,t),t.detectRetina&&F.retina&&t.maxZoom>0?(t.tileSize=Math.floor(t.tileSize/2),t.zoomReverse?(t.zoomOffset--,t.minZoom=Math.min(t.maxZoom,t.minZoom+1)):(t.zoomOffset++,t.maxZoom=Math.max(t.minZoom,t.maxZoom-1)),t.minZoom=Math.max(0,t.minZoom)):t.zoomReverse?t.minZoom=Math.min(t.maxZoom,t.minZoom):t.maxZoom=Math.max(t.minZoom,t.maxZoom),typeof t.subdomains==`string`&&(t.subdomains=t.subdomains.split(``)),this.on(`tileunload`,this._onTileRemove)},setUrl:function(e,t){return this._url===e&&t===void 0&&(t=!0),this._url=e,t||this.redraw(),this},createTile:function(e,t){var n=document.createElement(`img`);return V(n,`load`,i(this._tileOnLoad,this,t,n)),V(n,`error`,i(this._tileOnError,this,t,n)),(this.options.crossOrigin||this.options.crossOrigin===``)&&(n.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),typeof this.options.referrerPolicy==`string`&&(n.referrerPolicy=this.options.referrerPolicy),n.alt=``,n.src=this.getTileUrl(e),n},getTileUrl:function(e){var t={r:F.retina?`@2x`:``,s:this._getSubdomain(e),x:e.x,y:e.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var r=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=r),t[`-y`]=r}return g(this._url,n(t,this.options))},_tileOnLoad:function(e,t){F.ielt9?setTimeout(i(e,this,null,t),0):e(null,t)},_tileOnError:function(e,t,n){var r=this.options.errorTileUrl;r&&t.getAttribute(`src`)!==r&&(t.src=r),e(n,t)},_onTileRemove:function(e){e.tile.onload=null},_getZoomForUrl:function(){var e=this._tileZoom,t=this.options.maxZoom,n=this.options.zoomReverse,r=this.options.zoomOffset;return n&&(e=t-e),e+r},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var e,t;for(e in this._tiles)if(this._tiles[e].coords.z!==this._tileZoom&&(t=this._tiles[e].el,t.onload=l,t.onerror=l,!t.complete)){t.src=y;var n=this._tiles[e].coords;wt(t),delete this._tiles[e],this.fire(`tileabort`,{tile:t,coords:n})}},_removeTile:function(e){var t=this._tiles[e];if(t)return t.el.setAttribute(`src`,y),Ur.prototype._removeTile.call(this,e)},_tileReady:function(e,t,n){if(!(!this._map||n&&n.getAttribute(`src`)===y))return Ur.prototype._tileReady.call(this,e,t,n)}});function Kr(e,t){return new Gr(e,t)}var qr=Gr.extend({defaultWmsParams:{service:`WMS`,request:`GetMap`,layers:``,styles:``,format:`image/jpeg`,transparent:!1,version:`1.1.1`},options:{crs:null,uppercase:!1},initialize:function(e,t){this._url=e;var r=n({},this.defaultWmsParams);for(var i in t)i in this.options||(r[i]=t[i]);t=p(this,t);var a=t.detectRetina&&F.retina?2:1,o=this.getTileSize();r.width=o.x*a,r.height=o.y*a,this.wmsParams=r},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?`crs`:`srs`;this.wmsParams[t]=this._crs.code,Gr.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._tileCoordsToNwSe(e),n=this._crs,r=ie(n.project(t[0]),n.project(t[1])),i=r.min,a=r.max,o=(this._wmsVersion>=1.3&&this._crs===Xn?[i.y,i.x,a.y,a.x]:[i.x,i.y,a.x,a.y]).join(`,`),s=Gr.prototype.getTileUrl.call(this,e);return s+m(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?`&BBOX=`:`&bbox=`)+o},setParams:function(e,t){return n(this.wmsParams,e),t||this.redraw(),this}});function Jr(e,t){return new qr(e,t)}Gr.WMS=qr,Kr.wms=Jr;var Yr=Qn.extend({options:{padding:.1},initialize:function(e){p(this,e),o(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),z(this._container,`leaflet-zoom-animated`)),this.getPane().appendChild(this._container),this._update(),this.on(`update`,this._updatePaths,this)},onRemove:function(){this.off(`update`,this._updatePaths,this),this._destroyContainer()},getEvents:function(){var e={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(e.zoomanim=this._onAnimZoom),e},_onAnimZoom:function(e){this._updateTransform(e.center,e.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(e,t){var n=this._map.getZoomScale(t,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),i=this._map.project(this._center,t),a=r.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(e,t));F.any3d?Ft(this._container,a,n):It(this._container,a)},_reset:function(){for(var e in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[e]._reset()},_onZoomEnd:function(){for(var e in this._layers)this._layers[e]._project()},_updatePaths:function(){for(var e in this._layers)this._layers[e]._update()},_update:function(){var e=this.options.padding,t=this._map.getSize(),n=this._map.containerPointToLayerPoint(t.multiplyBy(-e)).round();this._bounds=new j(n,n.add(t.multiplyBy(1+e*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Xr=Yr.extend({options:{tolerance:0},getEvents:function(){var e=Yr.prototype.getEvents.call(this);return e.viewprereset=this._onViewPreReset,e},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Yr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var e=this._container=document.createElement(`canvas`);V(e,`mousemove`,this._onMouseMove,this),V(e,`click dblclick mousedown mouseup contextmenu`,this._onClick,this),V(e,`mouseout`,this._handleMouseOut,this),e._leaflet_disable_events=!0,this._ctx=e.getContext(`2d`)},_destroyContainer:function(){T(this._redrawRequest),delete this._ctx,wt(this._container),H(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var e;for(var t in this._redrawBounds=null,this._layers)e=this._layers[t],e._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Yr.prototype._update.call(this);var e=this._bounds,t=this._container,n=e.getSize(),r=F.retina?2:1;It(t,e.min),t.width=r*n.x,t.height=r*n.y,t.style.width=n.x+`px`,t.style.height=n.y+`px`,F.retina&&this._ctx.scale(2,2),this._ctx.translate(-e.min.x,-e.min.y),this.fire(`update`)}},_reset:function(){Yr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(e){this._updateDashArray(e),this._layers[o(e)]=e;var t=e._order={layer:e,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(e){this._requestRedraw(e)},_removePath:function(e){var t=e._order,n=t.next,r=t.prev;n?n.prev=r:this._drawLast=r,r?r.next=n:this._drawFirst=n,delete e._order,delete this._layers[o(e)],this._requestRedraw(e)},_updatePath:function(e){this._extendRedrawBounds(e),e._project(),e._update(),this._requestRedraw(e)},_updateStyle:function(e){this._updateDashArray(e),this._requestRedraw(e)},_updateDashArray:function(e){if(typeof e.options.dashArray==`string`){var t=e.options.dashArray.split(/[, ]+/),n=[],r,i;for(i=0;i<t.length;i++){if(r=Number(t[i]),isNaN(r))return;n.push(r)}e.options._dashArray=n}else e.options._dashArray=e.options.dashArray},_requestRedraw:function(e){this._map&&(this._extendRedrawBounds(e),this._redrawRequest=this._redrawRequest||w(this._redraw,this))},_extendRedrawBounds:function(e){if(e._pxBounds){var t=(e.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new j,this._redrawBounds.extend(e._pxBounds.min.subtract([t,t])),this._redrawBounds.extend(e._pxBounds.max.add([t,t]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var e=this._redrawBounds;if(e){var t=e.getSize();this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var e,t=this._redrawBounds;if(this._ctx.save(),t){var n=t.getSize();this._ctx.beginPath(),this._ctx.rect(t.min.x,t.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)e=r.layer,(!t||e._pxBounds&&e._pxBounds.intersects(t))&&e._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(e,t){if(this._drawing){var n,r,i,a,o=e._parts,s=o.length,c=this._ctx;if(s){for(c.beginPath(),n=0;n<s;n++){for(r=0,i=o[n].length;r<i;r++)a=o[n][r],c[r?`lineTo`:`moveTo`](a.x,a.y);t&&c.closePath()}this._fillStroke(c,e)}}},_updateCircle:function(e){if(!(!this._drawing||e._empty())){var t=e._point,n=this._ctx,r=Math.max(Math.round(e._radius),1),i=(Math.max(Math.round(e._radiusY),1)||r)/r;i!==1&&(n.save(),n.scale(1,i)),n.beginPath(),n.arc(t.x,t.y/i,r,0,Math.PI*2,!1),i!==1&&n.restore(),this._fillStroke(n,e)}},_fillStroke:function(e,t){var n=t.options;n.fill&&(e.globalAlpha=n.fillOpacity,e.fillStyle=n.fillColor||n.color,e.fill(n.fillRule||`evenodd`)),n.stroke&&n.weight!==0&&(e.setLineDash&&e.setLineDash(t.options&&t.options._dashArray||[]),e.globalAlpha=n.opacity,e.lineWidth=n.weight,e.strokeStyle=n.color,e.lineCap=n.lineCap,e.lineJoin=n.lineJoin,e.stroke())},_onClick:function(e){for(var t=this._map.mouseEventToLayerPoint(e),n,r,i=this._drawFirst;i;i=i.next)n=i.layer,n.options.interactive&&n._containsPoint(t)&&(!(e.type===`click`||e.type===`preclick`)||!this._map._draggableMoved(n))&&(r=n);this._fireEvent(r?[r]:!1,e)},_onMouseMove:function(e){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var t=this._map.mouseEventToLayerPoint(e);this._handleMouseHover(e,t)}},_handleMouseOut:function(e){var t=this._hoveredLayer;t&&(kt(this._container,`leaflet-interactive`),this._fireEvent([t],e,`mouseout`),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(e,t){if(!this._mouseHoverThrottled){for(var n,r,a=this._drawFirst;a;a=a.next)n=a.layer,n.options.interactive&&n._containsPoint(t)&&(r=n);r!==this._hoveredLayer&&(this._handleMouseOut(e),r&&(z(this._container,`leaflet-interactive`),this._fireEvent([r],e,`mouseover`),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,e),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(e,t,n){this._map._fireDOMEvent(t,n||t.type,e)},_bringToFront:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(n)n.prev=r;else return;r?r.next=n:n&&(this._drawFirst=n),t.prev=this._drawLast,this._drawLast.next=t,t.next=null,this._drawLast=t,this._requestRedraw(e)}},_bringToBack:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(r)r.next=n;else return;n?n.prev=r:r&&(this._drawLast=r),t.prev=null,t.next=this._drawFirst,this._drawFirst.prev=t,this._drawFirst=t,this._requestRedraw(e)}}});function Zr(e){return F.canvas?new Xr(e):null}var Qr=(function(){try{return document.namespaces.add(`lvml`,`urn:schemas-microsoft-com:vml`),function(e){return document.createElement(`<lvml:`+e+` class="lvml">`)}}catch{}return function(e){return document.createElement(`<`+e+` xmlns="urn:schemas-microsoft.com:vml" class="lvml">`)}})(),$r={_initContainer:function(){this._container=R(`div`,`leaflet-vml-container`)},_update:function(){this._map._animatingZoom||(Yr.prototype._update.call(this),this.fire(`update`))},_initPath:function(e){var t=e._container=Qr(`shape`);z(t,`leaflet-vml-shape `+(this.options.className||``)),t.coordsize=`1 1`,e._path=Qr(`path`),t.appendChild(e._path),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){var t=e._container;this._container.appendChild(t),e.options.interactive&&e.addInteractiveTarget(t)},_removePath:function(e){var t=e._container;wt(t),e.removeInteractiveTarget(t),delete this._layers[o(e)]},_updateStyle:function(e){var t=e._stroke,n=e._fill,r=e.options,i=e._container;i.stroked=!!r.stroke,i.filled=!!r.fill,r.stroke?(t||=e._stroke=Qr(`stroke`),i.appendChild(t),t.weight=r.weight+`px`,t.color=r.color,t.opacity=r.opacity,r.dashArray?t.dashStyle=_(r.dashArray)?r.dashArray.join(` `):r.dashArray.replace(/( *, *)/g,` `):t.dashStyle=``,t.endcap=r.lineCap.replace(`butt`,`flat`),t.joinstyle=r.lineJoin):t&&(i.removeChild(t),e._stroke=null),r.fill?(n||=e._fill=Qr(`fill`),i.appendChild(n),n.color=r.fillColor||r.color,n.opacity=r.fillOpacity):n&&(i.removeChild(n),e._fill=null)},_updateCircle:function(e){var t=e._point.round(),n=Math.round(e._radius),r=Math.round(e._radiusY||n);this._setPath(e,e._empty()?`M0 0`:`AL `+t.x+`,`+t.y+` `+n+`,`+r+` 0,23592600`)},_setPath:function(e,t){e._path.v=t},_bringToFront:function(e){Et(e._container)},_bringToBack:function(e){Dt(e._container)}},ei=F.vml?Qr:me,ti=Yr.extend({_initContainer:function(){this._container=ei(`svg`),this._container.setAttribute(`pointer-events`,`none`),this._rootGroup=ei(`g`),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){wt(this._container),H(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Yr.prototype._update.call(this);var e=this._bounds,t=e.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(t))&&(this._svgSize=t,n.setAttribute(`width`,t.x),n.setAttribute(`height`,t.y)),It(n,e.min),n.setAttribute(`viewBox`,[e.min.x,e.min.y,t.x,t.y].join(` `)),this.fire(`update`)}},_initPath:function(e){var t=e._path=ei(`path`);e.options.className&&z(t,e.options.className),e.options.interactive&&z(t,`leaflet-interactive`),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(e._path),e.addInteractiveTarget(e._path)},_removePath:function(e){wt(e._path),e.removeInteractiveTarget(e._path),delete this._layers[o(e)]},_updatePath:function(e){e._project(),e._update()},_updateStyle:function(e){var t=e._path,n=e.options;t&&(n.stroke?(t.setAttribute(`stroke`,n.color),t.setAttribute(`stroke-opacity`,n.opacity),t.setAttribute(`stroke-width`,n.weight),t.setAttribute(`stroke-linecap`,n.lineCap),t.setAttribute(`stroke-linejoin`,n.lineJoin),n.dashArray?t.setAttribute(`stroke-dasharray`,n.dashArray):t.removeAttribute(`stroke-dasharray`),n.dashOffset?t.setAttribute(`stroke-dashoffset`,n.dashOffset):t.removeAttribute(`stroke-dashoffset`)):t.setAttribute(`stroke`,`none`),n.fill?(t.setAttribute(`fill`,n.fillColor||n.color),t.setAttribute(`fill-opacity`,n.fillOpacity),t.setAttribute(`fill-rule`,n.fillRule||`evenodd`)):t.setAttribute(`fill`,`none`))},_updatePoly:function(e,t){this._setPath(e,he(e._parts,t))},_updateCircle:function(e){var t=e._point,n=Math.max(Math.round(e._radius),1),r=Math.max(Math.round(e._radiusY),1)||n,i=`a`+n+`,`+r+` 0 1,0 `,a=e._empty()?`M0 0`:`M`+(t.x-n)+`,`+t.y+i+n*2+`,0 `+i+-n*2+`,0 `;this._setPath(e,a)},_setPath:function(e,t){e._path.setAttribute(`d`,t)},_bringToFront:function(e){Et(e._path)},_bringToBack:function(e){Dt(e._path)}});F.vml&&ti.include($r);function ni(e){return F.svg||F.vml?new ti(e):null}U.include({getRenderer:function(e){var t=e.options.renderer||this._getPaneRenderer(e.options.pane)||this.options.renderer||this._renderer;return t||=this._renderer=this._createRenderer(),this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(e){if(e===`overlayPane`||e===void 0)return!1;var t=this._paneRenderers[e];return t===void 0&&(t=this._createRenderer({pane:e}),this._paneRenderers[e]=t),t},_createRenderer:function(e){return this.options.preferCanvas&&Zr(e)||ni(e)}});var ri=gr.extend({initialize:function(e,t){gr.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){return this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=M(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}});function K(e,t){return new ri(e,t)}ti.create=ei,ti.pointsToPath=he,vr.geometryToLayer=yr,vr.coordsToLatLng=xr,vr.coordsToLatLngs=Sr,vr.latLngToCoords=Cr,vr.latLngsToCoords=wr,vr.getFeature=Tr,vr.asFeature=Er,U.mergeOptions({boxZoom:!0});var ii=Cn.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._resetStateTimeout=0,e.on(`unload`,this._destroy,this)},addHooks:function(){V(this._container,`mousedown`,this._onMouseDown,this)},removeHooks:function(){H(this._container,`mousedown`,this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){wt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Rt(),Ht(),this._startPoint=this._map.mouseEventToContainerPoint(e),V(document,{contextmenu:on,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(e){this._moved||(this._moved=!0,this._box=R(`div`,`leaflet-zoom-box`,this._container),z(this._container,`leaflet-crosshair`),this._map.fire(`boxzoomstart`)),this._point=this._map.mouseEventToContainerPoint(e);var t=new j(this._point,this._startPoint),n=t.getSize();It(this._box,t.min),this._box.style.width=n.x+`px`,this._box.style.height=n.y+`px`},_finish:function(){this._moved&&(wt(this._box),kt(this._container,`leaflet-crosshair`)),zt(),B(),H(document,{contextmenu:on,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(e){if(!(e.which!==1&&e.button!==1)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var t=new ae(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(t).fire(`boxzoomend`,{boxZoomBounds:t})}},_onKeyDown:function(e){e.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});U.addInitHook(`addHandler`,`boxZoom`,ii),U.mergeOptions({doubleClickZoom:!0});var ai=Cn.extend({addHooks:function(){this._map.on(`dblclick`,this._onDoubleClick,this)},removeHooks:function(){this._map.off(`dblclick`,this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom(),r=t.options.zoomDelta,i=e.originalEvent.shiftKey?n-r:n+r;t.options.doubleClickZoom===`center`?t.setZoom(i):t.setZoomAround(e.containerPoint,i)}});U.addInitHook(`addHandler`,`doubleClickZoom`,ai),U.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var oi=Cn.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new En(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on(`predrag`,this._onPreDragLimit,this),e.options.worldCopyJump&&(this._draggable.on(`predrag`,this._onPreDragWrap,this),e.on(`zoomend`,this._onZoomEnd,this),e.whenReady(this._onZoomEnd,this))}z(this._map._container,`leaflet-grab leaflet-touch-drag`),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){kt(this._map._container,`leaflet-grab`),kt(this._map._container,`leaflet-touch-drag`),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var e=this._map;if(e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var t=M(this._map.options.maxBounds);this._offsetLimit=ie(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;e.fire(`movestart`).fire(`dragstart`),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(e){if(this._map.options.inertia){var t=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(t),this._prunePositions(t)}this._map.fire(`move`,e).fire(`drag`,e)},_prunePositions:function(e){for(;this._positions.length>1&&e-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var e=this._map.getSize().divideBy(2),t=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(e,t){return e-(e-t)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var e=this._draggable._newPos.subtract(this._draggable._startPos),t=this._offsetLimit;e.x<t.min.x&&(e.x=this._viscousLimit(e.x,t.min.x)),e.y<t.min.y&&(e.y=this._viscousLimit(e.y,t.min.y)),e.x>t.max.x&&(e.x=this._viscousLimit(e.x,t.max.x)),e.y>t.max.y&&(e.y=this._viscousLimit(e.y,t.max.y)),this._draggable._newPos=this._draggable._startPos.add(e)}},_onPreDragWrap:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,a=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(a+n)?i:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=!n.inertia||e.noInertia||this._times.length<2;if(t.fire(`dragend`,e),r)t.fire(`moveend`);else{this._prunePositions(+new Date);var i=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,o=n.easeLinearity,s=i.multiplyBy(o/a),c=s.distanceTo([0,0]),l=Math.min(n.inertiaMaxSpeed,c),u=s.multiplyBy(l/c),d=l/(n.inertiaDeceleration*o),f=u.multiplyBy(-d/2).round();!f.x&&!f.y?t.fire(`moveend`):(f=t._limitOffset(f,t.options.maxBounds),w(function(){t.panBy(f,{duration:d,easeLinearity:o,noMoveStart:!0,animate:!0})}))}}});U.addInitHook(`addHandler`,`dragging`,oi),U.mergeOptions({keyboard:!0,keyboardPanDelta:80});var si=Cn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(e){this._map=e,this._setPanDelta(e.options.keyboardPanDelta),this._setZoomDelta(e.options.zoomDelta)},addHooks:function(){var e=this._map._container;e.tabIndex<=0&&(e.tabIndex=`0`),V(e,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),H(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var e=document.body,t=document.documentElement,n=e.scrollTop||t.scrollTop,r=e.scrollLeft||t.scrollLeft;this._map._container.focus(),window.scrollTo(r,n)}},_onFocus:function(){this._focused=!0,this._map.fire(`focus`)},_onBlur:function(){this._focused=!1,this._map.fire(`blur`)},_setPanDelta:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomDelta:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){V(document,`keydown`,this._onKeyDown,this)},_removeHooks:function(){H(document,`keydown`,this._onKeyDown,this)},_onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=e.keyCode,n=this._map,r;if(t in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress)if(r=this._panKeys[t],e.shiftKey&&(r=A(r).multiplyBy(3)),n.options.maxBounds&&(r=n._limitOffset(A(r),n.options.maxBounds)),n.options.worldCopyJump){var i=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(r)));n.panTo(i)}else n.panBy(r)}else if(t in this._zoomKeys)n.setZoom(n.getZoom()+(e.shiftKey?3:1)*this._zoomKeys[t]);else if(t===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;on(e)}}});U.addInitHook(`addHandler`,`keyboard`,si),U.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ci=Cn.extend({addHooks:function(){V(this._map._container,`wheel`,this._onWheelScroll,this),this._delta=0},removeHooks:function(){H(this._map._container,`wheel`,this._onWheelScroll,this)},_onWheelScroll:function(e){var t=un(e),n=this._map.options.wheelDebounceTime;this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||=+new Date;var r=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),r),on(e)},_performZoom:function(){var e=this._map,t=e.getZoom(),n=this._map.options.zoomSnap||0;e._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),i=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,a=n?Math.ceil(i/n)*n:i,o=e._limitZoom(t+(this._delta>0?a:-a))-t;this._delta=0,this._startTime=null,o&&(e.options.scrollWheelZoom===`center`?e.setZoom(t+o):e.setZoomAround(this._lastMousePos,t+o))}});U.addInitHook(`addHandler`,`scrollWheelZoom`,ci);var li=600;U.mergeOptions({tapHold:F.touchNative&&F.safari&&F.mobile,tapTolerance:15});var ui=Cn.extend({addHooks:function(){V(this._map._container,`touchstart`,this._onDown,this)},removeHooks:function(){H(this._map._container,`touchstart`,this._onDown,this)},_onDown:function(e){if(clearTimeout(this._holdTimeout),e.touches.length===1){var t=e.touches[0];this._startPos=this._newPos=new k(t.clientX,t.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(V(document,`touchend`,an),V(document,`touchend touchcancel`,this._cancelClickPrevent),this._simulateEvent(`contextmenu`,t))},this),li),V(document,`touchend touchcancel contextmenu`,this._cancel,this),V(document,`touchmove`,this._onMove,this)}},_cancelClickPrevent:function e(){H(document,`touchend`,an),H(document,`touchend touchcancel`,e)},_cancel:function(){clearTimeout(this._holdTimeout),H(document,`touchend touchcancel contextmenu`,this._cancel,this),H(document,`touchmove`,this._onMove,this)},_onMove:function(e){var t=e.touches[0];this._newPos=new k(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(e,t){var n=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY});n._simulated=!0,t.target.dispatchEvent(n)}});U.addInitHook(`addHandler`,`tapHold`,ui),U.mergeOptions({touchZoom:F.touch,bounceAtZoomLimits:!0});var di=Cn.extend({addHooks:function(){z(this._map._container,`leaflet-touch-zoom`),V(this._map._container,`touchstart`,this._onTouchStart,this)},removeHooks:function(){kt(this._map._container,`leaflet-touch-zoom`),H(this._map._container,`touchstart`,this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)){var n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),t.options.touchZoom!==`center`&&(this._pinchStartLatLng=t.containerPointToLatLng(n.add(r)._divideBy(2))),this._startDist=n.distanceTo(r),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),V(document,`touchmove`,this._onTouchMove,this),V(document,`touchend touchcancel`,this._onTouchEnd,this),an(e)}},_onTouchMove:function(e){if(!(!e.touches||e.touches.length!==2||!this._zooming)){var t=this._map,n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]),a=n.distanceTo(r)/this._startDist;if(this._zoom=t.getScaleZoom(a,this._startZoom),!t.options.bounceAtZoomLimits&&(this._zoom<t.getMinZoom()&&a<1||this._zoom>t.getMaxZoom()&&a>1)&&(this._zoom=t._limitZoom(this._zoom)),t.options.touchZoom===`center`){if(this._center=this._startLatLng,a===1)return}else{var o=n._add(r)._divideBy(2)._subtract(this._centerPoint);if(a===1&&o.x===0&&o.y===0)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||=(t._moveStart(!0,!1),!0),T(this._animRequest);var s=i(t._move,t,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=w(s,this,!0),an(e)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,T(this._animRequest),H(document,`touchmove`,this._onTouchMove,this),H(document,`touchend touchcancel`,this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});U.addInitHook(`addHandler`,`touchZoom`,di),U.BoxZoom=ii,U.DoubleClickZoom=ai,U.Drag=oi,U.Keyboard=si,U.ScrollWheelZoom=ci,U.TapHold=ui,U.TouchZoom=di,e.Bounds=j,e.Browser=F,e.CRS=oe,e.Canvas=Xr,e.Circle=fr,e.CircleMarker=ur,e.Class=E,e.Control=hn,e.DivIcon=Vr,e.DivOverlay=Ir,e.DomEvent=fn,e.DomUtil=Yt,e.Draggable=En,e.Evented=O,e.FeatureGroup=tr,e.GeoJSON=vr,e.GridLayer=Ur,e.Handler=Cn,e.Icon=rr,e.ImageOverlay=Ar,e.LatLng=N,e.LatLngBounds=ae,e.Layer=Qn,e.LayerGroup=$n,e.LineUtil=Gn,e.Map=U,e.Marker=sr,e.Mixin=wn,e.Path=lr,e.Point=k,e.PolyUtil=An,e.Polygon=gr,e.Polyline=mr,e.Popup=Lr,e.PosAnimation=pn,e.Projection=Jn,e.Rectangle=ri,e.Renderer=Yr,e.SVG=ti,e.SVGOverlay=Pr,e.TileLayer=Gr,e.Tooltip=zr,e.Transformation=ue,e.Util=te,e.VideoOverlay=Mr,e.bind=i,e.bounds=ie,e.canvas=Zr,e.circle=pr,e.circleMarker=dr,e.control=gn,e.divIcon=Hr,e.extend=n,e.featureGroup=nr,e.geoJSON=Or,e.geoJson=kr,e.gridLayer=Wr,e.icon=ir,e.imageOverlay=jr,e.latLng=P,e.latLngBounds=M,e.layerGroup=er,e.map=mn,e.marker=cr,e.point=A,e.polygon=_r,e.polyline=hr,e.popup=Rr,e.rectangle=K,e.setOptions=p,e.stamp=o,e.svg=ni,e.svgOverlay=Fr,e.tileLayer=Kr,e.tooltip=Br,e.transformation=de,e.version=t,e.videoOverlay=Nr;var fi=window.L;e.noConflict=function(){return window.L=fi,this},window.L=e}))}));function Fo(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function Io(e,t){return t==null?function(t,n){let r=(0,x.useRef)();return r.current||=e(t,n),r}:function(n,r){let i=(0,x.useRef)();i.current||=e(n,r);let a=(0,x.useRef)(n),{instance:o}=i.current;return(0,x.useEffect)(function(){a.current!==n&&(t(o,n,a.current),a.current=n)},[o,n,r]),i}}function Lo(e,t){(0,x.useEffect)(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function Ro(e){return function(t){let n=Eo(),r=e(Mo(t,n),n);return xo(n.map,t.attribution),jo(r.current,t.eventHandlers),Lo(r.current,n),r}}function zo(e,t){return Oo(Ro(Io(e,t)))}function Bo(e,t){return ko(No(Io(e),t))}function Vo(e,t){return Ao(Ro(Io(e,t)))}function Ho(e,t,n){let{opacity:r,zIndex:i}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),i!=null&&i!==n.zIndex&&e.setZIndex(i)}function Uo(){return Eo().map}var Wo=l(Po(),1);function Go(){return Go=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Go.apply(this,arguments)}function Ko({bounds:e,boundsOptions:t,center:n,children:r,className:i,id:a,placeholder:o,style:s,whenReady:c,zoom:l,...u},d){let[f]=(0,x.useState)({className:i,id:a,style:s}),[p,m]=(0,x.useState)(null);(0,x.useImperativeHandle)(d,()=>p?.map??null,[p]);let h=(0,x.useCallback)(r=>{if(r!==null&&p===null){let i=new Wo.Map(r,u);n!=null&&l!=null?i.setView(n,l):e!=null&&i.fitBounds(e,t),c!=null&&i.whenReady(c),m(So(i))}},[]);(0,x.useEffect)(()=>()=>{p?.map.remove()},[p]);let g=p?x.createElement(To,{value:p},r):o??null;return x.createElement(`div`,Go({},f,{ref:h}),g)}var qo=(0,x.forwardRef)(Ko),Jo=zo(function({position:e,...t},n){let r=new Wo.Marker(e,t);return Fo(r,Co(n,{overlayContainer:r}))},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),t.icon!=null&&t.icon!==n.icon&&e.setIcon(t.icon),t.zIndexOffset!=null&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),t.opacity!=null&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),e.dragging!=null&&t.draggable!==n.draggable&&(t.draggable===!0?e.dragging.enable():e.dragging.disable())}),Yo=Bo(function(e,t){return Fo(new Wo.Popup(e,t.overlayContainer),t)},function(e,t,{position:n},r){(0,x.useEffect)(function(){let{instance:i}=e;function a(e){e.popup===i&&(i.update(),r(!0))}function o(e){e.popup===i&&r(!1)}return t.map.on({popupopen:a,popupclose:o}),t.overlayContainer==null?(n!=null&&i.setLatLng(n),i.openOn(t.map)):t.overlayContainer.bindPopup(i),function(){t.map.off({popupopen:a,popupclose:o}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(i)}},[e,t,r,n])}),Xo=Vo(function({url:e,...t},n){return Fo(new Wo.TileLayer(e,Mo(t,n)),n)},function(e,t,n){Ho(e,t,n);let{url:r}=t;r!=null&&r!==n.url&&e.setUrl(r)}),Zo=`#111827`,Qo=`#FF8C00`,$o=`#FFFFFF`,es=[{id:`nagpur`,label:`Nagpur`,lat:21.1458,lng:79.0882,isHQ:!0,installs:87,machines:[`VFFS Machine`,`Powder Filler`,`Band Sealer`],since:2008},{id:`pune`,label:`Pune`,lat:18.5204,lng:73.8567,isHQ:!1,installs:96,machines:[`VFFS Machine`,`Strapping Machine`,`Coding Machine`],since:2012},{id:`mumbai`,label:`Mumbai`,lat:19.076,lng:72.8777,isHQ:!1,installs:124,machines:[`Liquid Filler`,`Label Applicator`,`Vacuum Pack`],since:2011},{id:`nashik`,label:`Nashik`,lat:19.9975,lng:73.7898,isHQ:!1,installs:54,machines:[`Powder Filler`,`Pouch Packaging`,`Sealing Machine`],since:2015},{id:`aurangabad`,label:`Aurangabad`,lat:19.8762,lng:75.3433,isHQ:!1,installs:43,machines:[`VFFS Machine`,`Nitrogen Flushing`,`Labelling Machine`],since:2017}],ts=Math.max(...es.map(e=>e.installs));function ns(e,t){let n=t<480?e.isHQ?30:18:t<768?e.isHQ?36:22:e.isHQ?44:Math.max(24,18+e.installs/ts*14),r=n/2,i=r*.8,a=r*.46,o=r*.22,s=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${n}"
    height="${n}"
    viewBox="0 0 ${n} ${n}"
  >
    ${e.isHQ?`
      <circle
        cx="${r}"
        cy="${r}"
        r="${i}"
        fill="${Qo}"
        opacity="0"
      >
        <animate
          attributeName="r"
          values="${i*.65};${i*1.5}"
          dur="2.2s"
          repeatCount="indefinite"
        />

        <animate
          attributeName="opacity"
          values="0.45;0"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </circle>
    `:``}

    <circle
      cx="${r}"
      cy="${r}"
      r="${i}"
      fill="none"
      stroke="${Qo}"
      stroke-width="1.1"
      opacity="0.25"
    />

    <circle
      cx="${r}"
      cy="${r}"
      r="${a}"
      fill="${Qo}"
      opacity="0.90"
    />

    <circle
      cx="${r}"
      cy="${r}"
      r="${o}"
      fill="white"
      opacity="0.96"
    />
  </svg>
  `;return Wo.divIcon({html:s,className:``,iconSize:[n,n],iconAnchor:[n/2,n/2]})}function rs({city:e}){let t=Math.round(e.installs/ts*100);return(0,G.jsxs)(`div`,{style:{fontFamily:`'Segoe UI',system-ui,sans-serif`,minWidth:170,padding:`11px 13px 10px`,background:$o,borderRadius:10},children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,marginBottom:2},children:[(0,G.jsx)(`span`,{style:{fontWeight:800,fontSize:13,color:Zo,textTransform:`uppercase`,letterSpacing:`0.05em`},children:e.label}),e.isHQ&&(0,G.jsx)(`span`,{style:{fontSize:8,fontWeight:800,color:Qo,border:`1.5px solid ${Qo}`,borderRadius:3,padding:`1px 5px`,letterSpacing:`0.16em`,textTransform:`uppercase`},children:`HQ`})]}),(0,G.jsxs)(`div`,{style:{fontSize:9,color:`#888`,marginBottom:7},children:[`Partner since `,e.since]}),(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:5,marginBottom:7},children:[(0,G.jsx)(`span`,{style:{fontSize:24,fontWeight:900,color:Qo,lineHeight:1},children:e.installs}),(0,G.jsx)(`span`,{style:{fontSize:10,color:`#666`,fontWeight:600},children:`Installations`})]}),(0,G.jsx)(`div`,{style:{height:3,background:`rgba(0,0,0,0.08)`,borderRadius:2,marginBottom:9,overflow:`hidden`},children:(0,G.jsx)(`div`,{style:{height:`100%`,borderRadius:2,width:`${t}%`,background:`linear-gradient(
              90deg,
              ${Qo},
              #ffb347
            )`}})}),(0,G.jsx)(`div`,{style:{fontSize:8,fontWeight:700,color:`#aaa`,letterSpacing:`0.14em`,textTransform:`uppercase`,marginBottom:5},children:`Machines`}),(0,G.jsx)(`ul`,{style:{listStyle:`none`,margin:0,padding:0,display:`flex`,flexDirection:`column`,gap:3},children:e.machines.map(e=>(0,G.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:6,fontSize:11,color:Zo,fontWeight:600},children:[(0,G.jsx)(`span`,{style:{width:4,height:4,borderRadius:`50%`,background:Qo,flexShrink:0,display:`inline-block`}}),e]},e))})]})}function is({city:e,screenW:t}){let n=Uo(),r=(0,x.useRef)(null),i=(0,x.useRef)(null),a=t<768,o=ns(e,t),s=()=>r.current?.openPopup(),c=()=>r.current?.closePopup();return(0,x.useEffect)(()=>{let e=r.current;if(!e)return;let t=()=>{clearTimeout(i.current),s()},n=()=>{i.current=setTimeout(c,220)},o=()=>{r.current?.isPopupOpen()?c():s()};return a||(e.on(`mouseover`,t),e.on(`mouseout`,n)),e.on(`click`,o),()=>{clearTimeout(i.current),e.off(`mouseover`,t),e.off(`mouseout`,n),e.off(`click`,o)}},[a]),(0,x.useEffect)(()=>{let e=()=>c();return n.on(`click`,e),()=>n.off(`click`,e)},[n]),(0,G.jsx)(Jo,{ref:r,position:[e.lat,e.lng],icon:o,zIndexOffset:e.isHQ?1e3:0,children:(0,G.jsx)(Yo,{closeButton:!1,autoClose:!1,closeOnClick:!1,maxWidth:210,className:`hw-popup`,children:(0,G.jsx)(rs,{city:e})})})}function as(){let e=Uo();return(0,x.useEffect)(()=>{let t=()=>e.invalidateSize();return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[e]),null}function os(){let[e,t]=(0,x.useState)(window.innerWidth);return(0,x.useEffect)(()=>{let e=()=>t(window.innerWidth);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,G.jsxs)(`section`,{className:`hw`,children:[(0,G.jsx)(`div`,{className:`hw-map`,children:(0,G.jsxs)(qo,{center:e<400?[20.1,75.8]:e<600?[20,75.9]:[19.8,76.2],zoom:e<480?6.4:6.8,zoomControl:!1,attributionControl:!1,scrollWheelZoom:!1,dragging:!0,doubleClickZoom:!1,style:{width:`100%`,height:`100%`},children:[(0,G.jsx)(as,{}),(0,G.jsx)(Xo,{url:`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`,subdomains:`abcd`}),es.map(t=>(0,G.jsx)(is,{city:t,screenW:e},t.id))]})}),(0,G.jsx)(`div`,{className:`hw-veil-l`}),(0,G.jsx)(`div`,{className:`hw-dots`}),(0,G.jsxs)(`div`,{className:`hw-text`,children:[(0,G.jsx)(`div`,{className:`hw-badge`,children:`● INDUSTRIAL PACKAGING SOLUTIONS`}),(0,G.jsxs)(`h3`,{className:`hw-h1`,children:[`Engineering`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{style:{color:Qo,fontStyle:`italic`},children:`Precision`}),(0,G.jsx)(`br`,{}),`Machines`]}),(0,G.jsx)(`div`,{className:`hw-div`}),(0,G.jsx)(`p`,{className:`hw-desc`,children:`SUNTECH delivers industrial-grade packaging machinery built for speed, scale, and reliability — trusted by manufacturers across Maharashtra and 40+ cities worldwide.`}),(0,G.jsx)(`div`,{className:`hw-stats`,children:[{value:`500+`,label:`Installs`},{value:`40+`,label:`Cities`},{value:`99%`,label:`Uptime`},{value:`24h`,label:`Support`}].map(({value:e,label:t})=>(0,G.jsxs)(`div`,{className:`hw-stat`,children:[(0,G.jsx)(`span`,{className:`hw-stat-n`,children:e}),(0,G.jsx)(`span`,{className:`hw-stat-l`,children:t})]},t))}),(0,G.jsxs)(`div`,{className:`hw-ctas`,children:[(0,G.jsx)(`a`,{href:`/machines`,className:`hw-btn hw-btn-p`,children:`Explore Machines →`}),(0,G.jsx)(`a`,{href:`/contact`,className:`hw-btn hw-btn-s`,children:`Request a Quote`})]}),(0,G.jsx)(`div`,{className:`hw-certs`,children:[`ISO 9001`,`CE Mark`,`FSSAI`,`Export Ready`].map(e=>(0,G.jsxs)(`span`,{className:`hw-chip`,children:[`✓ `,e]},e))})]}),`/* ========================================================================== HERO.JSX — FULL FINAL VERSION PART 3 (CSS + END) ========================================================================== */`,(0,G.jsx)(`style`,{children:`

        * {
          box-sizing:border-box;
        }

        .leaflet-container {
          background:${Zo};
        }

        .leaflet-popup-content-wrapper {
          border-radius:12px;
          padding:0;
          overflow:hidden;
        }

        .leaflet-popup-content {
          margin:0;
        }

        .leaflet-popup-tip {
          background:white;
        }

        .hw {
          position:relative;

          width:100%;

          height:100svh;

          min-height:740px;

          overflow:hidden;

          background:${Zo};

          font-family:
            'Inter',
            sans-serif;
        }

        .hw-map {
          position:absolute;

          inset:0;

          z-index:0;

          overflow:hidden;
        }

        .hw-map .leaflet-container {
          width:100%;
          height:100%;
        }

        .hw-veil-l {
          position:absolute;

          inset:0;

          z-index:1;

          pointer-events:none;

          background:linear-gradient(
            105deg,
            rgba(17,24,39,0.70) 0%,
            rgba(17,24,39,0.52) 28%,
            rgba(17,24,39,0.18) 58%,
            rgba(17,24,39,0.02) 100%
          );
        }

        .hw-dots {
          position:absolute;

          inset:0;

          z-index:1;

          pointer-events:none;

          background-image:
            radial-gradient(
              rgba(255,255,255,0.04) 1px,
              transparent 1px
            );

          background-size:28px 28px;
        }

        .hw-text {
          position:absolute;

          z-index:10;

          left:0;
          right:0;
          bottom:0;

          display:flex;

          flex-direction:column;

          justify-content:flex-end;

          width:min(92%,520px);

          padding-top:
            clamp(20px,3vh,40px);

          padding-bottom:
            clamp(18px,4vh,42px);

          padding-left:
            clamp(16px,4vw,72px);

          padding-right:
            clamp(16px,3vw,32px);
        }

        .hw-badge {
          display:inline-flex;

          align-items:center;

          gap:6px;

          width:fit-content;

          background:
            rgba(255,140,0,0.12);

          border:
            1px solid rgba(255,140,0,0.35);

          border-radius:4px;

          padding:4px 10px;

          font-size:
            clamp(0.42rem,1vw,0.54rem);

          font-weight:800;

          letter-spacing:0.18em;

          text-transform:uppercase;

          color:${Qo};

          margin-bottom:12px;
        }

        /* FIXED ENGINEERING BREAK ISSUE */

        .hw-h1 {
          font-size:
            clamp(2.4rem,6vw,5rem);

          font-weight:900;

          line-height:0.88;

          color:${$o};

          margin:
            0 0 clamp(6px,1vh,10px);

          letter-spacing:-0.04em;

          text-wrap:balance;

          word-break:normal;

          overflow-wrap:normal;

          max-width:100%;

          text-shadow:
            0 2px 24px rgba(0,0,0,0.35);
        }

        .hw-div {
          width:
            clamp(24px,5vw,40px);

          height:3px;

          background:${Qo};

          border-radius:2px;

          margin-bottom:
            clamp(6px,1.2vh,12px);
        }

        .hw-desc {
          font-size:
            clamp(0.72rem,1.7vw,0.92rem);

          line-height:1.45;

          color:
            rgba(255,255,255,0.68);

          margin-bottom:
            clamp(8px,1.6vh,16px);

          max-width:92%;
        }

        .hw-stats {
          display:grid;

          grid-template-columns:
            repeat(4,1fr);

          width:100%;

          background:
            rgba(17,24,39,0.52);

          backdrop-filter:
            blur(14px);

          border:
            1px solid rgba(255,255,255,0.07);

          border-radius:8px;

          overflow:hidden;

          margin-bottom:14px;
        }

        .hw-stat {
          padding:8px 4px;

          text-align:center;

          border-right:
            1px solid rgba(255,255,255,0.06);

          display:flex;

          flex-direction:column;

          gap:1px;
        }

        .hw-stat:last-child {
          border-right:none;
        }

        .hw-stat-n {
          font-size:
            clamp(0.82rem,2vw,1.5rem);

          font-weight:900;

          color:${$o};

          line-height:1;
        }

        .hw-stat-l {
          font-size:
            clamp(0.38rem,1vw,0.54rem);

          font-weight:700;

          letter-spacing:0.08em;

          text-transform:uppercase;

          color:
            rgba(255,255,255,0.38);
        }

        .hw-ctas {
          display:flex;

          flex-wrap:wrap;

          gap:8px;

          margin-bottom:12px;
        }

        .hw-btn {
          display:inline-flex;

          align-items:center;

          justify-content:center;

          padding:9px 14px;

          border-radius:5px;

          font-size:
            clamp(0.56rem,1.4vw,0.72rem);

          font-weight:700;

          letter-spacing:0.05em;

          text-transform:uppercase;

          text-decoration:none;

          cursor:pointer;

          transition:
            transform 0.2s ease,
            opacity 0.2s ease;

          border:none;
        }

        .hw-btn:hover {
          transform:translateY(-1px);
        }

        .hw-btn-p {
          background:${Qo};

          color:${$o};

          box-shadow:
            0 8px 22px
            rgba(255,140,0,0.24);
        }

        .hw-btn-s {
          background:
            rgba(255,255,255,0.10);

          color:${$o};

          border:
            1px solid rgba(255,255,255,0.20);
        }

        .hw-certs {
          display:flex;

          flex-wrap:wrap;

          gap:5px;
        }

        .hw-chip {
          display:inline-flex;

          align-items:center;

          gap:3px;

          background:
            rgba(17,24,39,0.46);

          border:
            1px solid rgba(255,255,255,0.08);

          border-radius:100px;

          padding:3px 8px;

          font-size:
            clamp(0.40rem,1vw,0.54rem);

          font-weight:700;

          letter-spacing:0.08em;

          text-transform:uppercase;

          color:
            rgba(255,255,255,0.42);
        }

        /* =====================================================
           MOBILE FIXES
        ===================================================== */

        @media (max-width:479px) {

          .leaflet-container {
            transform:scale(1.08);

            transform-origin:center;
          }

          .hw-map {
            filter:
              brightness(1.1)
              contrast(1.05);
          }

          .hw {
            min-height:100svh;
          }

          .hw-text {

            justify-content:flex-end;

            width:100%;

            max-width:100%;

            padding-left:18px;

            padding-right:18px;

            padding-bottom:20px;
          }

          .hw-h1 {
            font-size:3.6rem;

            line-height:0.86;

            letter-spacing:-0.05em;

            max-width:92%;
          }

          .hw-desc {
            max-width:100%;
          }

          .hw-veil-l {

            background:
              linear-gradient(
                180deg,
                rgba(17,24,39,0.56) 0%,
                rgba(17,24,39,0.44) 45%,
                rgba(17,24,39,0.18) 75%,
                rgba(17,24,39,0.02) 100%
              );
          }

          .leaflet-popup-content-wrapper {
            transform:scale(0.92);
            transform-origin:bottom center;
          }
        }

      `})]})}var ss=[{title:`Packaging Machine`,desc:`High-performance packaging machines for various industries with precision and efficiency.`,img:`/products/Packaging Machine.png`,tag:`Precision`,number:`01`},{title:`Sealing Machine`,desc:`Advanced sealing solutions ensuring durability and product safety in packaging.`,img:`/products/Sealing Machine.png`,tag:`Durability`,number:`02`},{title:`Wrapping Machine`,desc:`Efficient wrapping machines designed for secure and protective packaging.`,img:`/products/Wrapping Machine.png`,tag:`Efficiency`,number:`03`}];function cs(){let e=(0,x.useRef)([]);return(0,x.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`cat-card--in`)})},{threshold:.12});return e.current.forEach(e=>e&&t.observe(e)),()=>t.disconnect()},[]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-dark:  #111827;
          --blue-brand: #111827;
          --blue-light: #1f2937;
          --blue-pale:  rgba(17,24,39,0.05);
          --accent:     #f5a623;
          --white:      #ffffff;
          --off-white:  #f0f5fc;
          --text:       #1a2d4a;
          --text-muted: #6e8db5;
          --border:     rgba(255,255,255,0.07);
        }

        .cat-section {
          background: var(--off-white);
          padding: 80px 0 96px;
          font-family: 'Barlow', sans-serif;
        }

        .cat-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── HEADER ── */
        .cat-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .cat-header-left { display: flex; flex-direction: column; gap: 12px; }

        .cat-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue-brand);
        }
        .cat-eyebrow::before {
          content: '';
          width: 28px; height: 2px;
          background: var(--blue-brand); border-radius: 2px;
        }

        .cat-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
          color: var(--blue-dark);
          line-height: 1.0;
          letter-spacing: -.01em;
          text-transform: uppercase;
          margin: 0;
        }
        .cat-title span { color: var(--blue-brand); }

        .cat-subtitle {
          font-size: 14px;
          color: var(--text-muted);
          max-width: 400px;
          line-height: 1.75;
          margin: 0;
          font-weight: 400;
        }

        .cat-header-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--blue-brand); color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          padding: 13px 24px; border-radius: 4px; border: none;
          cursor: pointer; text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(18,81,163,0.3);
          transition: background .2s, transform .15s, box-shadow .2s;
          flex-shrink: 0;
        }
        .cat-header-cta:hover {
          background: var(--blue-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(18,81,163,0.4);
        }

        /* ── GRID ── */
        .cat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .cat-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── CARD ── */
        .cat-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: box-shadow .3s, transform .3s, border-color .3s;
          box-shadow: 0 2px 12px rgba(18,81,163,0.05);
          position: relative;
        }
        .cat-card.cat-card--in {
          animation: catCardIn .5s ease forwards;
        }
        .cat-card:nth-child(2).cat-card--in { animation-delay: .1s; }
        .cat-card:nth-child(3).cat-card--in { animation-delay: .2s; }
        @keyframes catCardIn {
          to { opacity: 1; transform: translateY(0); }
        }
        .cat-card:hover {
          box-shadow: 0 12px 40px rgba(18,81,163,0.13);
          transform: translateY(-4px);
          border-color: var(--blue-brand);
        }

        /* top bar */
        .cat-card-bar {
          height: 4px;
          background: var(--border);
          transition: background .3s;
        }
        .cat-card:hover .cat-card-bar { background: var(--blue-brand); }

        /* number badge */
        .cat-card-num {
          position: absolute;
          top: 16px; left: 16px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 800;
          letter-spacing: .15em; color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1.5px solid var(--border);
          border-radius: 4px; padding: 3px 8px;
          z-index: 2;
        }

        /* image area */
        .cat-img-wrap {
          height: 220px;
          display: flex; align-items: center; justify-content: center;
          padding: 40px 32px 32px;
          background: var(--off-white);
          border-bottom: 1px solid var(--border);
          position: relative;
          transition: background .3s;
          overflow: hidden;
        }
        .cat-card:hover .cat-img-wrap { background: rgba(17,24,39,0.05); }

        .cat-img-num-bg {
          position: absolute;
          bottom: -8px; right: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 80px; font-weight: 900;
          color: rgba(18,81,163,0.05);
          line-height: 1; pointer-events: none; user-select: none;
          transition: color .3s;
        }
        .cat-card:hover .cat-img-num-bg { color: rgba(18,81,163,0.09); }

        .cat-img {
          width: 70%; max-width: 190px; height: 100%;
          object-fit: contain; position: relative; z-index: 1;
          transition: transform .45s cubic-bezier(.25,1,.5,1);
          filter: drop-shadow(0 8px 20px rgba(18,81,163,0.12));
        }
        .cat-card:hover .cat-img { transform: translateY(-6px) scale(1.04); }

        /* body */
        .cat-body { padding: 24px 24px 28px; }

        .cat-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1px solid var(--border);
          border-radius: 3px; padding: 4px 10px;
          margin-bottom: 12px;
        }
        .cat-tag::before {
          content: ''; width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }

        .cat-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px; font-weight: 900;
          color: var(--blue-dark);
          margin: 0 0 10px;
          line-height: 1.1; text-transform: uppercase;
          letter-spacing: .02em;
        }

        .cat-card-desc {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.7; margin: 0 0 22px;
          font-weight: 400;
        }

        .cat-card-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .08em; text-transform: uppercase;
          color: var(--blue-brand); text-decoration: none;
          transition: gap .2s, color .2s;
        }
        .cat-card-link:hover { gap: 14px; color: var(--blue-light); }
        .cat-card-link svg { width: 13px; height: 13px; flex-shrink: 0; }

        /* ── FOOTER STRIP ── */
        .cat-footer {
          margin-top: 48px;
          background: var(--blue-dark);
          border-radius: 10px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
          position: relative; overflow: hidden;
        }
        .cat-footer::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .cat-footer-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

        .cat-stats { display: flex; gap: 0; position: relative; z-index: 1; }

        .cat-stat {
          display: flex; flex-direction: column; gap: 3px;
          padding: 0 28px 0 0;
          border-right: 1px solid rgba(255,255,255,0.08);
          margin-right: 28px;
        }
        .cat-stat:last-child { border-right: none; margin-right: 0; }

        .cat-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 28px; font-weight: 900;
          color: var(--white); line-height: 1;
        }
        .cat-stat-num span { color: var(--accent); }

        .cat-stat-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: rgba(192,215,245,0.45);
        }

        .cat-footer-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--blue-brand); color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          padding: 13px 24px; border-radius: 4px; border: none;
          cursor: pointer; text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          transition: background .2s, transform .15s;
          position: relative; z-index: 1;
        }
        .cat-footer-cta:hover { background: var(--blue-light); transform: translateY(-2px); }
        .cat-footer-cta svg { width: 14px; height: 14px; flex-shrink: 0; }
      `}),(0,G.jsx)(`section`,{className:`cat-section`,children:(0,G.jsxs)(`div`,{className:`cat-inner`,children:[(0,G.jsxs)(`div`,{className:`cat-header`,children:[(0,G.jsxs)(`div`,{className:`cat-header-left`,children:[(0,G.jsx)(`span`,{className:`cat-eyebrow`,children:`Product Range`}),(0,G.jsxs)(`h2`,{className:`cat-title`,children:[`Our `,(0,G.jsx)(`span`,{children:`Machine`}),(0,G.jsx)(`br`,{}),`Categories`]}),(0,G.jsx)(`p`,{className:`cat-subtitle`,children:`Industrial-grade machines engineered for precision, reliability, and long-term performance across industries.`})]}),(0,G.jsxs)(`a`,{href:`#`,className:`cat-header-cta`,children:[`View All Products`,(0,G.jsx)(`svg`,{viewBox:`0 0 14 14`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:(0,G.jsx)(`path`,{d:`M2 7h10M8 3l4 4-4 4`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]}),(0,G.jsx)(`div`,{className:`cat-grid`,children:ss.map((t,n)=>(0,G.jsxs)(`div`,{ref:t=>e.current[n]=t,className:`cat-card`,children:[(0,G.jsx)(`div`,{className:`cat-card-bar`}),(0,G.jsx)(`span`,{className:`cat-card-num`,children:t.number}),(0,G.jsxs)(`div`,{className:`cat-img-wrap`,children:[(0,G.jsx)(`span`,{className:`cat-img-num-bg`,children:t.number}),(0,G.jsx)(`img`,{src:t.img,alt:t.title,className:`cat-img`})]}),(0,G.jsxs)(`div`,{className:`cat-body`,children:[(0,G.jsx)(`span`,{className:`cat-tag`,children:t.tag}),(0,G.jsx)(`h3`,{className:`cat-card-title`,children:t.title}),(0,G.jsx)(`p`,{className:`cat-card-desc`,children:t.desc}),(0,G.jsxs)(`a`,{href:`#`,className:`cat-card-link`,children:[`Explore Range`,(0,G.jsx)(`svg`,{viewBox:`0 0 12 12`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:(0,G.jsx)(`path`,{d:`M2 6h8M7 3l3 3-3 3`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]},n))}),(0,G.jsxs)(`div`,{className:`cat-footer`,children:[(0,G.jsx)(`div`,{className:`cat-footer-top`}),(0,G.jsxs)(`div`,{className:`cat-stats`,children:[(0,G.jsxs)(`div`,{className:`cat-stat`,children:[(0,G.jsxs)(`span`,{className:`cat-stat-num`,children:[`30`,(0,G.jsx)(`span`,{children:`+`})]}),(0,G.jsx)(`span`,{className:`cat-stat-label`,children:`Models`})]}),(0,G.jsxs)(`div`,{className:`cat-stat`,children:[(0,G.jsxs)(`span`,{className:`cat-stat-num`,children:[`40`,(0,G.jsx)(`span`,{children:`+`})]}),(0,G.jsx)(`span`,{className:`cat-stat-label`,children:`Cities`})]}),(0,G.jsxs)(`div`,{className:`cat-stat`,children:[(0,G.jsxs)(`span`,{className:`cat-stat-num`,children:[`20`,(0,G.jsx)(`span`,{children:`yr`})]}),(0,G.jsx)(`span`,{className:`cat-stat-label`,children:`Experience`})]})]}),(0,G.jsxs)(`a`,{href:`#`,className:`cat-footer-cta`,children:[`View All Products`,(0,G.jsx)(`svg`,{viewBox:`0 0 14 14`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:(0,G.jsx)(`path`,{d:`M2 7h10M8 3l4 4-4 4`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]})})]})}var ls=[{id:1,label:`Packing
Machine`,angle:0},{id:2,label:`Sealing
Machine`,angle:30},{id:3,label:`Filling
Machine`,angle:60},{id:4,label:`Coding
Machine`,angle:90},{id:5,label:`Labelling
Machine`,angle:120},{id:6,label:`Wrapping
Machine`,angle:150},{id:7,label:`Shrinking
Machine`,angle:180},{id:8,label:`Strapping
Machine`,angle:210},{id:9,label:`Vacuum
Machine`,angle:240},{id:10,label:`Pulverizer
Machine`,angle:270},{id:11,label:`Food Processing
Machine`,angle:300},{id:12,label:`Coding
Machine`,angle:330}],us=[{pos:`left`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,G.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`}),(0,G.jsx)(`path`,{d:`M8 21h8M12 17v4`}),(0,G.jsx)(`path`,{d:`M7 8h4M7 11h6`})]}),title:`Infrastructure`,desc:`3 sophisticated production units with modern machinery and QC systems.`},{pos:`left`,icon:(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:(0,G.jsx)(`path`,{d:`M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z`})}),title:`Trusted Brands`,desc:`Marketed under recognized brands like Sampack, trusted across industries.`},{pos:`right`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,G.jsx)(`path`,{d:`M9 12l2 2 4-4`})]}),title:`Quality Standards`,desc:`Compliant with international standards and regulations across all product lines.`},{pos:`right`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,G.jsx)(`path`,{d:`M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20`})]}),title:`Market Presence`,desc:`2 decades of experience with wide reach across India and global markets.`}],ds=12,fs=130,ps=52,ms=2,hs=360/ds,gs=[`#111827`,`#1f2937`,`#111827`,`#1f2937`,`#111827`,`#1f2937`,`#111827`,`#1f2937`,`#111827`,`#1f2937`,`#111827`,`#1f2937`],_s=`#f5a623`;function vs(e,t,n,r){let i=(r-90)*Math.PI/180;return{x:e+n*Math.cos(i),y:t+n*Math.sin(i)}}function ys(e,t,n,r,i,a){let o=vs(e,t,r,i),s=vs(e,t,r,a),c=vs(e,t,n,a),l=vs(e,t,n,i),u=+(a-i>180);return[`M ${o.x} ${o.y}`,`A ${r} ${r} 0 ${u} 1 ${s.x} ${s.y}`,`L ${c.x} ${c.y}`,`A ${n} ${n} 0 ${u} 0 ${l.x} ${l.y}`,`Z`].join(` `)}function bs(){let[e,t]=(0,x.useState)(null),n=(0,x.useRef)([]),r=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`wcu--in`)}),{threshold:.1});return n.current.forEach(t=>t&&e.observe(t)),r.current&&e.observe(r.current),()=>e.disconnect()},[]);let i=us.filter(e=>e.pos===`left`),a=us.filter(e=>e.pos===`right`);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-dark:  #111827;
          --blue-brand: #111827;
          --blue-light: #1f2937;
          --blue-pale:  rgba(17,24,39,0.05);
          --accent:     #f5a623;
          --white:      #ffffff;
          --off-white:  #f0f5fc;
          --text:       #1a2d4a;
          --text-muted: #6e8db5;
          --border:     rgba(17,24,39,0.12);
        }

        .wcu {
          background: var(--white);
          padding: 80px 0 96px;
          font-family: 'Barlow', sans-serif;
          overflow: hidden;
          border-top: 1px solid var(--border);
        }

        .wcu-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── HEADER ── */
        .wcu-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }

        .wcu-header-left { display: flex; flex-direction: column; gap: 10px; }

        .wcu-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue-brand);
        }
        .wcu-eyebrow::before {
          content: '';
          width: 28px; height: 2px;
          background: var(--blue-brand); border-radius: 2px;
        }

        .wcu-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 900; color: var(--blue-dark);
          margin: 0; line-height: 1.0;
          letter-spacing: -.01em; text-transform: uppercase;
        }
        .wcu-title span { color: var(--blue-brand); }

        .wcu-subtitle {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.75; margin: 0; max-width: 440px; font-weight: 400;
        }

        /* ── BODY LAYOUT ── */
        .wcu-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 900px) {
          .wcu-body { grid-template-columns: 1fr auto 1fr; gap: 32px; }
        }
        @media (max-width: 899px) and (min-width: 600px) {
          .wcu-body { grid-template-columns: 1fr 1fr; }
          .wcu-wheel-wrap { grid-column: span 2; justify-self: center; }
        }

        /* ── FEATURE COLUMN ── */
        .wcu-col { display: flex; flex-direction: column; gap: 28px; }
        @media (min-width: 900px) {
          .wcu-col--left  { align-items: flex-end; text-align: right; }
          .wcu-col--right { align-items: flex-start; text-align: left; }
        }

        /* ── FEATURE CARD ── */
        .wcu-feat {
          display: flex; flex-direction: column; gap: 10px;
          opacity: 0; transform: translateY(18px);
          max-width: 220px;
          background: var(--off-white);
          border: 1.5px solid var(--border);
          border-radius: 10px; padding: 20px;
          transition: border-color .3s, box-shadow .3s, transform .3s;
          cursor: default;
        }
        .wcu-feat.wcu--in { animation: wcuFeatIn .5s ease forwards; }
        @keyframes wcuFeatIn { to { opacity: 1; transform: translateY(0); } }
        .wcu-feat:hover {
          border-color: var(--blue-brand);
          box-shadow: 0 8px 28px rgba(18,81,163,0.1);
          transform: translateY(-3px) !important;
        }

        .wcu-feat-icon-wrap {
          width: 44px; height: 44px; border-radius: 8px;
          background: var(--white);
          border: 1.5px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background .25s, border-color .25s;
        }
        .wcu-feat:hover .wcu-feat-icon-wrap {
          background: var(--blue-brand); border-color: var(--blue-brand);
        }
        .wcu-feat-icon-wrap svg {
          width: 20px; height: 20px; color: var(--blue-brand);
          transition: color .25s;
        }
        .wcu-feat:hover .wcu-feat-icon-wrap svg { color: #fff; }

        @media (min-width: 900px) {
          .wcu-col--left .wcu-feat { align-items: flex-end; }
          .wcu-col--left .wcu-feat-icon-wrap { align-self: flex-end; }
        }

        .wcu-feat-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 16px; font-weight: 800;
          color: var(--blue-dark); margin: 0;
          text-transform: uppercase; letter-spacing: .03em;
        }

        .wcu-feat-desc {
          font-size: 12.5px; color: var(--text-muted);
          line-height: 1.7; margin: 0; font-weight: 400;
        }

        /* ── WHEEL ── */
        .wcu-wheel-wrap {
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(0.9);
        }
        .wcu-wheel-wrap.wcu--in {
          animation: wcuWheelIn .7s cubic-bezier(.25,1,.5,1) forwards;
          animation-delay: .1s;
        }
        @keyframes wcuWheelIn { to { opacity: 1; transform: scale(1); } }

        .wcu-wheel-svg {
          width: min(300px, 80vw); height: min(300px, 80vw);
          filter: drop-shadow(0 12px 36px rgba(18,81,163,0.18));
        }

        .wcu-seg { cursor: pointer; }

        .wcu-seg-text {
          font-family: 'Barlow', sans-serif;
          font-size: 6.5px; font-weight: 600;
          fill: rgba(255,255,255,0.92);
          text-anchor: middle; pointer-events: none;
          dominant-baseline: middle; letter-spacing: .2px;
        }

        /* ── STATS BAR ── */
        .wcu-stats {
          margin-top: 56px;
          background: var(--blue-dark);
          border-radius: 10px; overflow: hidden;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          position: relative;
        }
        @media (min-width: 640px) {
          .wcu-stats { grid-template-columns: repeat(4, 1fr); }
        }
        .wcu-stats::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .wcu-stats-top {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--blue-brand);
        }

        .wcu-stat {
          padding: 28px 24px; display: flex; flex-direction: column; gap: 4px;
          border-right: 1px solid rgba(255,255,255,0.07);
          position: relative; z-index: 1;
          transition: background .2s;
        }
        .wcu-stat:last-child { border-right: none; }
        .wcu-stat:hover { background: rgba(255,255,255,0.03); }

        .wcu-stat-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 32px; font-weight: 900;
          color: var(--white); line-height: 1;
        }
        .wcu-stat-val span { color: var(--accent); }

        .wcu-stat-lbl {
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: rgba(192,215,245,0.45);
        }
      `}),(0,G.jsx)(`section`,{className:`wcu`,children:(0,G.jsxs)(`div`,{className:`wcu-inner`,children:[(0,G.jsx)(`div`,{className:`wcu-header`,children:(0,G.jsxs)(`div`,{className:`wcu-header-left`,children:[(0,G.jsx)(`span`,{className:`wcu-eyebrow`,children:`Our Strengths`}),(0,G.jsxs)(`h2`,{className:`wcu-title`,children:[`Why `,(0,G.jsx)(`span`,{children:`Choose`}),` Us`]}),(0,G.jsx)(`p`,{className:`wcu-subtitle`,children:`From Nashik to global markets — our machines, brands, and service define industrial packaging excellence.`})]})}),(0,G.jsxs)(`div`,{className:`wcu-body`,children:[(0,G.jsx)(`div`,{className:`wcu-col wcu-col--left`,children:i.map((e,t)=>(0,G.jsxs)(`div`,{className:`wcu-feat`,ref:e=>n.current[t]=e,style:{animationDelay:`${t*.12}s`},children:[(0,G.jsx)(`div`,{className:`wcu-feat-icon-wrap`,children:e.icon}),(0,G.jsx)(`h3`,{className:`wcu-feat-title`,children:e.title}),(0,G.jsx)(`p`,{className:`wcu-feat-desc`,children:e.desc})]},t))}),(0,G.jsx)(`div`,{className:`wcu-wheel-wrap`,ref:r,children:(0,G.jsxs)(`svg`,{viewBox:`0 0 320 320`,className:`wcu-wheel-svg`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,G.jsx)(`circle`,{cx:`160`,cy:`160`,r:`148`,fill:`none`,stroke:`#d0dff0`,strokeWidth:`1`,strokeDasharray:`4 4`}),ls.map((n,r)=>{let i=r*hs+ms/2,a=(r+1)*hs-ms/2,o=(i+a)/2,s=vs(160,160,(fs+ps)/2+4,o),c=n.label.split(`
`);return(0,G.jsxs)(`g`,{className:`wcu-seg`,onMouseEnter:()=>t(r),onMouseLeave:()=>t(null),children:[(0,G.jsx)(`path`,{d:ys(160,160,ps,fs,i,a),fill:e===r?_s:gs[r],style:{transition:`fill .2s ease`}}),(0,G.jsx)(`text`,{x:vs(160,160,fs-10,o).x,y:vs(160,160,fs-10,o).y,className:`wcu-seg-text`,style:{fontSize:`5px`,opacity:.55},children:String(r+1).padStart(2,`0`)}),c.map((e,t)=>(0,G.jsx)(`text`,{x:s.x,y:s.y+(t-(c.length-1)/2)*8,className:`wcu-seg-text`,children:e},t))]},r)}),(0,G.jsx)(`circle`,{cx:`160`,cy:`160`,r:ps-4,fill:`#ffffff`,filter:`drop-shadow(0 2px 12px rgba(0,0,0,0.08))`}),(0,G.jsx)(`circle`,{cx:`160`,cy:`160`,r:ps-4,fill:`none`,stroke:`#d0dff0`,strokeWidth:`1`}),(0,G.jsx)(`text`,{x:`160`,y:`151`,fontFamily:`'Barlow Condensed', sans-serif`,fontSize:`7`,fontWeight:`700`,fill:`#6e8db5`,textAnchor:`middle`,dominantBaseline:`middle`,letterSpacing:`2`,children:`PRODUCT`}),(0,G.jsx)(`text`,{x:`160`,y:`162`,fontFamily:`'Barlow Condensed', sans-serif`,fontSize:`11`,fontWeight:`900`,fill:`#111827`,textAnchor:`middle`,dominantBaseline:`middle`,letterSpacing:`1`,children:`RANGE`}),(0,G.jsx)(`text`,{x:`160`,y:`173`,fontFamily:`'Barlow Condensed', sans-serif`,fontSize:`7`,fontWeight:`700`,fill:`#1f2937`,textAnchor:`middle`,dominantBaseline:`middle`,letterSpacing:`2`,children:`12 TYPES`})]})}),(0,G.jsx)(`div`,{className:`wcu-col wcu-col--right`,children:a.map((e,t)=>(0,G.jsxs)(`div`,{className:`wcu-feat`,ref:e=>n.current[t+2]=e,style:{animationDelay:`${(t+2)*.12}s`},children:[(0,G.jsx)(`div`,{className:`wcu-feat-icon-wrap`,children:e.icon}),(0,G.jsx)(`h3`,{className:`wcu-feat-title`,children:e.title}),(0,G.jsx)(`p`,{className:`wcu-feat-desc`,children:e.desc})]},t))})]}),(0,G.jsxs)(`div`,{className:`wcu-stats`,children:[(0,G.jsx)(`div`,{className:`wcu-stats-top`}),[{val:`20`,sup:`+`,lbl:`Years Experience`},{val:`500`,sup:`+`,lbl:`Machines Installed`},{val:`40`,sup:`+`,lbl:`Cities Served`},{val:`98`,sup:`%`,lbl:`Client Retention`}].map((e,t)=>(0,G.jsxs)(`div`,{className:`wcu-stat`,children:[(0,G.jsxs)(`span`,{className:`wcu-stat-val`,children:[e.val,(0,G.jsx)(`span`,{children:e.sup})]}),(0,G.jsx)(`span`,{className:`wcu-stat-lbl`,children:e.lbl})]},t))]})]})})]})}var xs=[{name:`Atta Packaging Machine`,img:`/products/Packaging Machine.png`,tag:`Powder & Flour`,num:`01`,spec:`5–50 kg/bag`},{name:`Granules Packaging Machine`,img:`/products/Packing Machine.png`,tag:`Granules`,num:`02`,spec:`100g–25 kg`},{name:`Flow Wrapping Machine`,img:`/products/Wrapping Machine.png`,tag:`Wrapping`,num:`03`,spec:`Up to 120 ppm`},{name:`Masala Packaging Machine`,img:`/products/Powder Packaging Machine.png`,tag:`Spices & Powder`,num:`04`,spec:`10g–1 kg`},{name:`Sealing Machine`,img:`/products/Sealing Machine.png`,tag:`Sealing`,num:`05`,spec:`Continuous / Impulse`},{name:`Vacuum Packaging Machine`,img:`/products/Vacuum Packaging Machine.png`,tag:`Vacuum`,num:`06`,spec:`99.9% Vacuum`}];function Ss(){let e=at(),t=(0,x.useRef)([]),n=(0,x.useRef)(null);return(0,x.useRef)(null),(0,x.useEffect)(()=>{let e=new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting&&e.target.classList.add(`pg--in`)),{threshold:.08});return n.current&&e.observe(n.current),t.current.forEach(t=>t&&e.observe(t)),()=>e.disconnect()},[]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-900: #111827;
          --blue-800: #0d1117;
          --blue-700: #1f2937;
          --blue-600: #1f2937;
          --blue-500: #111827;
          --blue-400: #1f2937;
          --blue-300: rgba(17,24,39,0.3);
          --blue-100: rgba(17,24,39,0.1);
          --blue-50:  rgba(17,24,39,0.05);
          --white: #ffffff;
          --gray-50: #f8fafc;
          --gray-100: #f1f5f9;
          --gray-200: #e2e8f0;
          --gray-400: #94a3b8;
          --gray-600: #475569;
          --gray-800: #1e293b;
          --accent: #f59e0b;
        }

        .pg-section {
          background: var(--white);
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ── TOP BAND ── */
        .pg-topband {
          background: var(--blue-900);
          padding: 14px 0;
          overflow: hidden;
        }

        .pg-ticker {
          display: flex;
          gap: 64px;
          animation: ticker 28s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .pg-ticker-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pg-ticker-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--blue-500);
          flex-shrink: 0;
        }

        /* ── MAIN INNER ── */
        .pg-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 28px 96px;
        }

        /* ── HEADER BLOCK ── */
        .pg-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(20px);
        }

        .pg-header.pg--in {
          animation: pgRise 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes pgRise {
          to { opacity: 1; transform: translateY(0); }
        }

        .pg-header-left {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--blue-500);
        }

        .pg-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background: var(--blue-500);
        }

        .pg-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 800;
          color: var(--blue-900);
          margin: 0;
          line-height: 0.95;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .pg-title span {
          color: var(--blue-500);
        }

        .pg-subtitle {
          font-size: 14px;
          color: var(--gray-600);
          margin: 4px 0 0;
          max-width: 460px;
          line-height: 1.7;
          font-weight: 400;
        }

        .pg-header-stats {
          display: flex;
          gap: 32px;
          flex-shrink: 0;
        }

        @media (max-width: 700px) {
          .pg-header { grid-template-columns: 1fr; }
          .pg-header-stats { display: none; }
        }

        .pg-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }

        .pg-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: var(--blue-900);
          line-height: 1;
        }

        .pg-stat-num span {
          color: var(--blue-500);
        }

        .pg-stat-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gray-400);
        }

        /* ── FILTER TABS ── */
        .pg-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .pg-tab {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 4px;
          border: 1.5px solid var(--gray-200);
          background: var(--white);
          color: var(--gray-600);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pg-tab:hover, .pg-tab.active {
          background: var(--blue-900);
          border-color: var(--blue-900);
          color: var(--white);
        }

        /* ── GRID ── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
        }

        @media (max-width: 900px) { .pg-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .pg-grid { grid-template-columns: 1fr; } }

        /* ── CARD ── */
        .pg-card {
          background: var(--white);
          display: flex;
          flex-direction: column;
          position: relative;
          opacity: 0;
          transform: translateY(24px);
          border-right: 1.5px solid var(--gray-200);
          border-bottom: 1.5px solid var(--gray-200);
          cursor: pointer;
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .pg-card:nth-child(3n) { border-right: none; }
        @media (max-width: 900px) { .pg-card:nth-child(2n) { border-right: none; } .pg-card:nth-child(3n) { border-right: 1.5px solid var(--gray-200); } }
        @media (max-width: 560px) { .pg-card { border-right: none; } }

        .pg-card.pg--in { animation: pgRise 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .pg-card:nth-child(2).pg--in { animation-delay: 0.07s; }
        .pg-card:nth-child(3).pg--in { animation-delay: 0.14s; }
        .pg-card:nth-child(4).pg--in { animation-delay: 0.18s; }
        .pg-card:nth-child(5).pg--in { animation-delay: 0.24s; }
        .pg-card:nth-child(6).pg--in { animation-delay: 0.30s; }

        .pg-card:hover {
          background: var(--blue-50);
          z-index: 2;
          box-shadow: 0 0 0 1.5px var(--blue-400) inset, 0 12px 40px rgba(37,99,235,0.08);
        }

        /* ── NUMBER BADGE ── */
        .pg-num {
          position: absolute;
          top: 16px;
          left: 16px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--gray-400);
          background: var(--gray-100);
          padding: 3px 8px;
          border-radius: 3px;
          z-index: 2;
        }

        .pg-card:hover .pg-num {
          background: var(--blue-500);
          color: var(--white);
        }

        /* ── CERTIFICATION BADGE ── */
        .pg-cert {
          position: absolute;
          top: 16px;
          right: 16px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--blue-600);
          border: 1.5px solid var(--blue-200, #bfdbfe);
          background: var(--blue-50);
          padding: 3px 8px;
          border-radius: 3px;
        }

        /* ── IMAGE ZONE ── */
        .pg-img-zone {
          position: relative;
          height: 200px;
          background: var(--gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow: hidden;
          border-bottom: 1.5px solid var(--gray-200);
          transition: background 0.2s ease;
        }

        .pg-card:hover .pg-img-zone {
          background: var(--blue-50);
          border-bottom-color: var(--blue-200, #bfdbfe);
        }

        /* blueprint grid bg */
        .pg-img-zone::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .pg-img {
          width: 68%;
          max-width: 180px;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
          filter: drop-shadow(0 8px 24px rgba(10,22,40,0.12));
        }

        .pg-card:hover .pg-img {
          transform: translateY(-8px) scale(1.05);
        }

        /* ── BODY ── */
        .pg-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .pg-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-500);
        }

        .pg-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--blue-900);
          margin: 0;
          line-height: 1.15;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        /* spec row */
        .pg-spec {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--gray-600);
          font-weight: 500;
        }

        .pg-spec-icon {
          width: 14px;
          height: 14px;
          color: var(--blue-400);
          flex-shrink: 0;
        }

        .pg-divider {
          height: 1.5px;
          background: var(--gray-100);
        }

        /* ── ACTIONS ── */
        .pg-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 2px;
        }

        .pg-btn-inquiry {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue-600);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 10px 18px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
        }

        .pg-btn-inquiry:hover {
          background: var(--blue-500);
          gap: 12px;
        }

        .pg-btn-inquiry svg { width: 13px; height: 13px; }

        .pg-btn-detail {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--gray-400);
          background: none;
          border: 1.5px solid var(--gray-200);
          border-radius: 5px;
          padding: 9px 14px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .pg-btn-detail:hover {
          color: var(--blue-600);
          border-color: var(--blue-300);
          background: var(--blue-50);
          gap: 8px;
        }

        .pg-btn-detail svg { width: 12px; height: 12px; }

        /* ── FOOTER CTA ── */
        .pg-footer {
          margin-top: 48px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 24px;
          padding: 32px 40px;
          background: var(--blue-900);
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .pg-footer { grid-template-columns: 1fr; }
          .pg-footer-cta { width: 100%; justify-content: center; }
        }

        /* blueprint lines on footer */
        .pg-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .pg-footer::after {
          content: '';
          position: absolute;
          right: -60px;
          top: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .pg-footer-text {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pg-footer-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-400);
        }

        .pg-footer-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: var(--white);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pg-footer-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          margin: 0;
          font-weight: 400;
        }

        .pg-footer-cta {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--blue-500);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
        }

        .pg-footer-cta:hover { background: var(--blue-400); gap: 14px; }
        .pg-footer-cta svg { width: 14px; height: 14px; }
      `}),(0,G.jsx)(`div`,{className:`pg-topband`,children:(0,G.jsx)(`div`,{className:`pg-ticker`,children:[...[,,]].map((e,t)=>[`ISO 9001 Certified`,`Made in India`,`500+ Installations`,`40+ Cities Served`,`Custom Engineering`,`After-Sales Support`,`99.2% Uptime Record`,`PLC Controlled`,`Stainless Steel Construction`].map((e,n)=>(0,G.jsxs)(`span`,{className:`pg-ticker-item`,children:[(0,G.jsx)(`span`,{className:`pg-ticker-dot`}),e]},`${t}-${n}`)))})}),(0,G.jsx)(`section`,{className:`pg-section`,children:(0,G.jsxs)(`div`,{className:`pg-inner`,children:[(0,G.jsxs)(`div`,{className:`pg-header`,ref:n,children:[(0,G.jsxs)(`div`,{className:`pg-header-left`,children:[(0,G.jsx)(`span`,{className:`pg-eyebrow`,children:`Machine Catalogue`}),(0,G.jsxs)(`h2`,{className:`pg-title`,children:[`Our `,(0,G.jsx)(`span`,{children:`Product`}),` Range`]}),(0,G.jsx)(`p`,{className:`pg-subtitle`,children:`Industrial-grade packaging machines engineered for high throughput, accuracy, and long-term reliability across food, pharma, and agro sectors.`})]}),(0,G.jsxs)(`div`,{className:`pg-header-stats`,children:[(0,G.jsxs)(`div`,{className:`pg-stat`,children:[(0,G.jsxs)(`span`,{className:`pg-stat-num`,children:[`500`,(0,G.jsx)(`span`,{children:`+`})]}),(0,G.jsx)(`span`,{className:`pg-stat-label`,children:`Installations`})]}),(0,G.jsxs)(`div`,{className:`pg-stat`,children:[(0,G.jsxs)(`span`,{className:`pg-stat-num`,children:[`40`,(0,G.jsx)(`span`,{children:`+`})]}),(0,G.jsx)(`span`,{className:`pg-stat-label`,children:`Cities`})]}),(0,G.jsxs)(`div`,{className:`pg-stat`,children:[(0,G.jsx)(`span`,{className:`pg-stat-num`,children:`6`}),(0,G.jsx)(`span`,{className:`pg-stat-label`,children:`Machine Types`})]})]})]}),(0,G.jsx)(`div`,{className:`pg-tabs`,children:[`All Machines`,`Powder & Flour`,`Granules`,`Wrapping`,`Sealing`,`Vacuum`].map((e,t)=>(0,G.jsx)(`button`,{className:`pg-tab${t===0?` active`:``}`,children:e},t))}),(0,G.jsx)(`div`,{className:`pg-grid`,children:xs.map((n,r)=>(0,G.jsxs)(`div`,{className:`pg-card`,ref:e=>t.current[r]=e,children:[(0,G.jsx)(`span`,{className:`pg-num`,children:n.num}),(0,G.jsx)(`span`,{className:`pg-cert`,children:`ISO 9001`}),(0,G.jsx)(`div`,{className:`pg-img-zone`,children:(0,G.jsx)(`img`,{src:n.img,alt:n.name,className:`pg-img`})}),(0,G.jsxs)(`div`,{className:`pg-body`,children:[(0,G.jsx)(`span`,{className:`pg-tag`,children:n.tag}),(0,G.jsx)(`h3`,{className:`pg-name`,children:n.name}),(0,G.jsxs)(`div`,{className:`pg-spec`,children:[(0,G.jsxs)(`svg`,{className:`pg-spec-icon`,viewBox:`0 0 14 14`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,G.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`}),(0,G.jsx)(`path`,{d:`M4 7h6M7 4v6`,strokeLinecap:`round`})]}),n.spec]}),(0,G.jsx)(`div`,{className:`pg-divider`}),(0,G.jsxs)(`div`,{className:`pg-actions`,children:[(0,G.jsxs)(`button`,{className:`pg-btn-inquiry`,onClick:()=>e(`/contact`,{state:{product:n.name}}),children:[`Inquiry`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,G.jsxs)(`button`,{className:`pg-btn-detail`,children:[`Details`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]})]},r))}),(0,G.jsxs)(`div`,{className:`pg-footer`,children:[(0,G.jsxs)(`div`,{className:`pg-footer-text`,children:[(0,G.jsx)(`span`,{className:`pg-footer-eyebrow`,children:`Custom Engineering`}),(0,G.jsx)(`p`,{className:`pg-footer-title`,children:`Need a Custom Solution?`}),(0,G.jsx)(`p`,{className:`pg-footer-sub`,children:`We design and build machines to your exact production specifications.`})]}),(0,G.jsxs)(`a`,{href:`/contact`,className:`pg-footer-cta`,children:[`Request a Quote`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]})})]})}function Cs(){let[e,t]=(0,x.useState)({name:``,email:``,phone:``,subject:``,message:``}),[n,r]=(0,x.useState)(null),[i,a]=(0,x.useState)(!1),o=(0,x.useRef)(null),s=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting&&e.target.classList.add(`cs--in`)),{threshold:.08});return o.current&&e.observe(o.current),s.current&&e.observe(s.current),()=>e.disconnect()},[]);let c=n=>t({...e,[n.target.name]:n.target.value}),l=e=>{e.preventDefault(),a(!0),setTimeout(()=>a(!1),4e3)},u=[{name:`name`,label:`Full Name`,type:`text`,required:!0,half:!0},{name:`email`,label:`Email Address`,type:`email`,required:!0,half:!0},{name:`phone`,label:`Phone Number`,type:`text`,required:!1,half:!0},{name:`subject`,label:`Machine / Subject`,type:`text`,required:!1,half:!0},{name:`message`,label:`Message`,type:`textarea`,required:!1,half:!1}],d=[{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,G.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),label:`Factory Address`,value:`MIDC Industrial Area, Bhiwandi, Maharashtra – 421302`},{icon:(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:(0,G.jsx)(`path`,{d:`M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z`})}),label:`Sales Hotline`,value:`+91 00111 11111`},{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,G.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,G.jsx)(`path`,{d:`M22 6l-10 7L2 6`})]}),label:`Email`,value:`info@suntech.in`},{icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,G.jsx)(`rect`,{x:`5`,y:`2`,width:`14`,height:`20`,rx:`2`,ry:`2`}),(0,G.jsx)(`line`,{x1:`12`,y1:`18`,x2:`12.01`,y2:`18`})]}),label:`WhatsApp`,value:`+91 00111 11111`}],f=[{q:`Delivery time किती असतो?`,a:`Standard machines: 4–6 weeks. Custom builds: 8–12 weeks.`},{q:`Installation support मिळतो का?`,a:`Yes — on-site installation + 1-year AMC available.`},{q:`Demo मिळेल का?`,a:`Factory demo किंवा video demo arrange करता येतो.`}];return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-900: #111827;
          --blue-800: #0d1117;
          --blue-700: #1f2937;
          --blue-600: #1f2937;
          --blue-500: #111827;
          --blue-400: #1f2937;
          --blue-300: rgba(17,24,39,0.3);
          --blue-200: rgba(17,24,39,0.2);
          --blue-100: rgba(17,24,39,0.1);
          --blue-50:  rgba(17,24,39,0.05);
          --white:    #ffffff;
          --gray-50:  #f8fafc;
          --gray-100: #f1f5f9;
          --gray-200: #e2e8f0;
          --gray-400: #94a3b8;
          --gray-600: #475569;
          --gray-800: #1e293b;
          --accent:   #f59e0b;
        }

        /* ── TOP BAND ── */
        .cs-topband {
          background: var(--blue-900);
          padding: 14px 0;
          overflow: hidden;
        }

        .cs-ticker {
          display: flex;
          gap: 64px;
          animation: csTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes csTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .cs-ticker-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cs-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-500);
          flex-shrink: 0;
        }

        /* ── SECTION ── */
        .cs-section {
          background: var(--white);
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* blueprint bg */
        .cs-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .cs-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 28px 96px;
          position: relative;
          z-index: 1;
        }

        /* ── HEADER ── */
        .cs-page-header {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(20px);
        }

        .cs-page-header.cs--in {
          animation: csRise 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes csRise {
          to { opacity: 1; transform: translateY(0); }
        }

        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--blue-500);
        }

        .cs-eyebrow::before {
          content: '';
          display: block;
          width: 32px; height: 2px;
          background: var(--blue-500);
        }

        .cs-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(38px, 6vw, 62px);
          font-weight: 800;
          color: var(--blue-900);
          margin: 0;
          line-height: 0.95;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .cs-title span { color: var(--blue-500); }

        .cs-subtitle {
          font-size: 14px;
          color: var(--gray-600);
          margin: 6px 0 0;
          max-width: 500px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* ── BODY GRID ── */
        .cs-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }

        @media (min-width: 960px) {
          .cs-body {
            grid-template-columns: 380px 1fr;
            gap: 56px;
          }
        }

        /* ── LEFT PANEL ── */
        .cs-left {
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: 0;
          transform: translateY(24px);
        }

        .cs-left.cs--in {
          animation: csRise 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
        }

        /* info card */
        .cs-info-card {
          background: var(--blue-900);
          border-radius: 10px 10px 0 0;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }

        .cs-info-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .cs-info-card::after {
          content: '';
          position: absolute;
          right: -40px; bottom: -40px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .cs-info-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-400);
          margin: 0 0 24px;
          position: relative;
          z-index: 1;
        }

        .cs-infos {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .cs-info {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .cs-info-icon {
          width: 40px; height: 40px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .cs-info:hover .cs-info-icon {
          background: var(--blue-600);
          border-color: var(--blue-500);
        }

        .cs-info-icon svg {
          width: 17px; height: 17px;
          color: var(--blue-400);
        }

        .cs-info-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-top: 3px;
        }

        .cs-info-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .cs-info-value {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }

        /* hours strip */
        .cs-hours-strip {
          background: var(--blue-600);
          border-radius: 0 0 10px 10px;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cs-hours-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4ade80;
          flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(74,222,128,0.2);
          animation: csPulse 2s ease-in-out infinite;
        }

        @keyframes csPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(74,222,128,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(74,222,128,0.08); }
        }

        .cs-hours-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
        }

        /* FAQ accordion */
        .cs-faq {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1.5px solid var(--gray-200);
          border-radius: 10px;
          overflow: hidden;
        }

        .cs-faq-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gray-400);
          padding: 14px 18px 10px;
          border-bottom: 1.5px solid var(--gray-200);
        }

        .cs-faq-item {
          padding: 14px 18px;
          border-bottom: 1px solid var(--gray-100);
          cursor: pointer;
          transition: background 0.15s;
        }

        .cs-faq-item:last-child { border-bottom: none; }
        .cs-faq-item:hover { background: var(--blue-50); }

        .cs-faq-q {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--blue-900);
          letter-spacing: 0.2px;
        }

        .cs-faq-a {
          font-size: 12px;
          color: var(--gray-600);
          margin-top: 4px;
          line-height: 1.6;
        }

        /* ── RIGHT: FORM ── */
        .cs-right {
          opacity: 0;
          transform: translateY(24px);
        }

        .cs-right.cs--in {
          animation: csRise 0.6s cubic-bezier(0.22,1,0.36,1) 0.18s forwards;
        }

        .cs-form-card {
          background: var(--white);
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(10,22,40,0.07);
        }

        /* form header */
        .cs-form-top {
          background: var(--blue-900);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          position: relative;
          overflow: hidden;
        }

        .cs-form-top::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .cs-form-top-left {
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: relative;
          z-index: 1;
        }

        .cs-form-top-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: var(--white);
          margin: 0;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .cs-form-top-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
        }

        .cs-form-badge {
          position: relative;
          z-index: 1;
          background: rgba(74,222,128,0.12);
          border: 1.5px solid rgba(74,222,128,0.3);
          border-radius: 5px;
          padding: 6px 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4ade80;
          white-space: nowrap;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cs-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: csPulse 2s infinite;
        }

        /* step indicators */
        .cs-steps {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 0 32px;
          border-bottom: 1.5px solid var(--gray-100);
          background: var(--gray-50);
        }

        .cs-step {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 0;
          flex: 1;
          position: relative;
        }

        .cs-step:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%; transform: translateY(-50%);
          width: 24px; height: 1.5px;
          background: var(--gray-200);
        }

        .cs-step-num {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--blue-600);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cs-step-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--gray-400);
        }

        /* form body */
        .cs-form-body {
          padding: 32px;
        }

        .cs-fields {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        @media (min-width: 480px) {
          .cs-fields { grid-template-columns: 1fr 1fr; }
          .cs-field--full { grid-column: span 2; }
        }

        .cs-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }

        .cs-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gray-400);
          transition: color 0.2s;
        }

        .cs-field--focused .cs-label { color: var(--blue-500); }

        .cs-input-wrap {
          position: relative;
        }

        .cs-input,
        .cs-textarea {
          width: 100%;
          background: var(--gray-50);
          border: 1.5px solid var(--gray-200);
          border-radius: 7px;
          padding: 11px 14px;
          font-family: 'Barlow', sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          color: var(--blue-900);
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
          -webkit-appearance: none;
          resize: none;
        }

        .cs-input::placeholder,
        .cs-textarea::placeholder {
          color: var(--gray-400);
          font-weight: 300;
        }

        .cs-input:focus,
        .cs-textarea:focus {
          border-color: var(--blue-500);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(37,99,235,0.08);
        }

        .cs-textarea { min-height: 110px; }

        /* submit row */
        .cs-submit-row {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cs-note {
          font-size: 11px;
          color: var(--gray-400);
          font-weight: 400;
        }

        .cs-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--blue-600);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 13px 28px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, gap 0.2s, transform 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cs-btn:hover {
          background: var(--blue-500);
          gap: 14px;
          transform: translateY(-1px);
        }

        .cs-btn svg { width: 14px; height: 14px; }

        /* success */
        .cs-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 56px 32px;
          text-align: center;
          animation: csRise 0.4s ease forwards;
        }

        .cs-success-icon {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: var(--blue-50);
          border: 2px solid var(--blue-200);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cs-success-icon svg {
          width: 26px; height: 26px;
          color: var(--blue-600);
        }

        .cs-success-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--blue-900);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cs-success-sub {
          font-size: 13px;
          color: var(--gray-600);
          margin: 0;
          line-height: 1.75;
          font-weight: 400;
          max-width: 300px;
        }

        /* ── BOTTOM MAP BAR ── */
        .cs-map-bar {
          margin-top: 48px;
          border: 1.5px solid var(--gray-200);
          border-radius: 10px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          background: var(--gray-50);
        }

        @media (max-width: 640px) { .cs-map-bar { grid-template-columns: 1fr; } }

        .cs-map-bar-left {
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cs-map-icon {
          width: 44px; height: 44px;
          border-radius: 8px;
          background: var(--blue-600);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cs-map-icon svg {
          width: 20px; height: 20px;
          color: var(--white);
        }

        .cs-map-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .cs-map-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gray-400);
        }

        .cs-map-addr {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--blue-900);
          letter-spacing: 0.2px;
        }

        .cs-map-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 24px;
          background: var(--blue-900);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 12px 22px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
        }

        .cs-map-btn:hover { background: var(--blue-600); gap: 12px; }
        .cs-map-btn svg { width: 13px; height: 13px; }

        @media (max-width: 640px) {
          .cs-map-btn { margin: 0 0 20px 28px; }
        }
      `}),(0,G.jsx)(`div`,{className:`cs-topband`,children:(0,G.jsx)(`div`,{className:`cs-ticker`,children:[...[,,]].map((e,t)=>[`24hr Response Guarantee`,`On-Site Installation`,`Free Demo Available`,`Pan-India Delivery`,`AMC Available`,`Technical Support`,`Custom Engineering`,`ISO 9001 Certified`].map((e,n)=>(0,G.jsxs)(`span`,{className:`cs-ticker-item`,children:[(0,G.jsx)(`span`,{className:`cs-ticker-dot`}),e]},`${t}-${n}`)))})}),(0,G.jsx)(`section`,{className:`cs-section`,children:(0,G.jsxs)(`div`,{className:`cs-inner`,children:[(0,G.jsxs)(`div`,{className:`cs-page-header`,ref:e=>{e&&new IntersectionObserver(([t])=>t.isIntersecting&&e.classList.add(`cs--in`),{threshold:.1}).observe(e)},children:[(0,G.jsx)(`span`,{className:`cs-eyebrow`,children:`Contact Us`}),(0,G.jsxs)(`h2`,{className:`cs-title`,children:[`Get In `,(0,G.jsx)(`span`,{children:`Touch`})]}),(0,G.jsx)(`p`,{className:`cs-subtitle`,children:`Our sales engineers are ready to help you find the right packaging machine for your production line. Response within 24 hours.`})]}),(0,G.jsxs)(`div`,{className:`cs-body`,children:[(0,G.jsxs)(`div`,{className:`cs-left`,ref:o,children:[(0,G.jsxs)(`div`,{className:`cs-info-card`,children:[(0,G.jsx)(`p`,{className:`cs-info-card-title`,children:`Contact Details`}),(0,G.jsx)(`div`,{className:`cs-infos`,children:d.map((e,t)=>(0,G.jsxs)(`div`,{className:`cs-info`,children:[(0,G.jsx)(`div`,{className:`cs-info-icon`,children:e.icon}),(0,G.jsxs)(`div`,{className:`cs-info-text`,children:[(0,G.jsx)(`span`,{className:`cs-info-label`,children:e.label}),(0,G.jsx)(`span`,{className:`cs-info-value`,children:e.value})]})]},t))})]}),(0,G.jsxs)(`div`,{className:`cs-hours-strip`,children:[(0,G.jsx)(`span`,{className:`cs-hours-dot`}),(0,G.jsx)(`span`,{className:`cs-hours-text`,children:`Mon – Sat \xA0·\xA0 9:00 AM – 6:30 PM IST`})]}),(0,G.jsxs)(`div`,{className:`cs-faq`,children:[(0,G.jsx)(`div`,{className:`cs-faq-title`,children:`Quick FAQs`}),f.map((e,t)=>(0,G.jsxs)(`div`,{className:`cs-faq-item`,children:[(0,G.jsx)(`div`,{className:`cs-faq-q`,children:e.q}),(0,G.jsx)(`div`,{className:`cs-faq-a`,children:e.a})]},t))]})]}),(0,G.jsx)(`div`,{className:`cs-right`,ref:s,children:(0,G.jsxs)(`div`,{className:`cs-form-card`,children:[(0,G.jsxs)(`div`,{className:`cs-form-top`,children:[(0,G.jsxs)(`div`,{className:`cs-form-top-left`,children:[(0,G.jsx)(`p`,{className:`cs-form-top-title`,children:`Send an Inquiry`}),(0,G.jsx)(`p`,{className:`cs-form-top-sub`,children:`Fill the form — we respond within 24 hours`})]}),(0,G.jsxs)(`span`,{className:`cs-form-badge`,children:[(0,G.jsx)(`span`,{className:`cs-badge-dot`}),`Online`]})]}),(0,G.jsx)(`div`,{className:`cs-steps`,children:[`Your Details`,`Requirements`,`Submit`].map((e,t)=>(0,G.jsxs)(`div`,{className:`cs-step`,children:[(0,G.jsx)(`span`,{className:`cs-step-num`,children:t+1}),(0,G.jsx)(`span`,{className:`cs-step-label`,children:e})]},t))}),i?(0,G.jsxs)(`div`,{className:`cs-success`,children:[(0,G.jsx)(`div`,{className:`cs-success-icon`,children:(0,G.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:(0,G.jsx)(`path`,{d:`M20 6L9 17l-5-5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,G.jsx)(`p`,{className:`cs-success-title`,children:`Inquiry Sent!`}),(0,G.jsx)(`p`,{className:`cs-success-sub`,children:`Our sales team will contact you within 24 hours with the best solution.`})]}):(0,G.jsx)(`div`,{className:`cs-form-body`,children:(0,G.jsxs)(`form`,{onSubmit:l,children:[(0,G.jsx)(`div`,{className:`cs-fields`,children:u.map(t=>(0,G.jsxs)(`div`,{className:`cs-field${t.half?``:` cs-field--full`}${n===t.name?` cs-field--focused`:``}`,children:[(0,G.jsxs)(`label`,{className:`cs-label`,children:[t.label,t.required&&` *`]}),(0,G.jsx)(`div`,{className:`cs-input-wrap`,children:t.type===`textarea`?(0,G.jsx)(`textarea`,{name:t.name,className:`cs-textarea`,placeholder:`Enter your ${t.label.toLowerCase()}`,value:e[t.name],onChange:c,onFocus:()=>r(t.name),onBlur:()=>r(null)}):(0,G.jsx)(`input`,{type:t.type,name:t.name,className:`cs-input`,placeholder:`Enter ${t.label.toLowerCase()}`,value:e[t.name],onChange:c,onFocus:()=>r(t.name),onBlur:()=>r(null),required:t.required})})]},t.name))}),(0,G.jsxs)(`div`,{className:`cs-submit-row`,children:[(0,G.jsx)(`span`,{className:`cs-note`,children:`* Required fields`}),(0,G.jsxs)(`button`,{type:`submit`,className:`cs-btn`,children:[`Send Inquiry`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]})})]})})]}),(0,G.jsxs)(`div`,{className:`cs-map-bar`,children:[(0,G.jsxs)(`div`,{className:`cs-map-bar-left`,children:[(0,G.jsx)(`div`,{className:`cs-map-icon`,children:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,G.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}),(0,G.jsxs)(`div`,{className:`cs-map-text`,children:[(0,G.jsx)(`span`,{className:`cs-map-label`,children:`Factory Location`}),(0,G.jsx)(`span`,{className:`cs-map-addr`,children:`MIDC Industrial Area, Bhiwandi, Maharashtra – 421302`})]})]}),(0,G.jsxs)(`a`,{href:`https://maps.google.com`,target:`_blank`,rel:`noreferrer`,className:`cs-map-btn`,children:[`View on Map`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]})})]})}function ws(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(os,{}),(0,G.jsx)(cs,{}),(0,G.jsx)(bs,{}),(0,G.jsx)(Ss,{}),(0,G.jsx)(Cs,{})]})}var Ts=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=Barlow:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --blue-dark:  #111827;
    --blue-mid:   #1f2937;
    --blue-brand: #111827;
    --blue-light: #1f2937;
    --blue-pale:  rgba(17,24,39,0.05);
    --accent:     #f5a623;
    --accent-lt:  #ffd07a;
    --white:      #ffffff;
    --off-white:  #f0f5fc;
    --text:       #1a2d4a;
    --text-muted: #6e8db5;
    --border:     rgba(17,24,39,0.12);
    --border-dk:  rgba(17,24,39,0.08);
  }

  html { scroll-behavior: smooth; }
  body { background: var(--off-white); color: var(--text); font-family: 'Barlow', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

  /* ── Scroll reveal ── */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.in { opacity: 1; transform: none; }
  .reveal-d1 { transition-delay: .1s; }
  .reveal-d2 { transition-delay: .2s; }
  .reveal-d3 { transition-delay: .3s; }
  .reveal-d4 { transition-delay: .4s; }

  /* ── Tag pill ── */
  .tag-pill {
    display: inline-flex; align-items: center; gap: 7px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--blue-brand);
    background: var(--blue-pale);
    border: 1.5px solid var(--border);
    border-radius: 4px; padding: 6px 14px;
  }
  .tag-pill::before {
    content: '';
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); flex-shrink: 0;
  }

  /* ── Section label ── */
  .section-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .25em; text-transform: uppercase;
    color: var(--text-muted);
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 16px;
  }
  .section-label::after {
    content: ''; flex: 1; max-width: 60px; height: 2px;
    background: var(--blue-brand); border-radius: 2px;
  }

  /* ── Stat card ── */
  .stat-card {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-top: 4px solid var(--blue-brand);
    border-radius: 10px;
    padding: 28px 20px;
    text-align: center;
    transition: transform .3s, box-shadow .3s, border-color .3s;
    box-shadow: 0 2px 12px rgba(18,81,163,0.05);
  }
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(18,81,163,0.12);
    border-color: var(--blue-brand);
  }
  .stat-card .val {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(2.4rem, 8vw, 3.2rem);
    font-weight: 900; line-height: 1;
    color: var(--blue-dark);
    margin-bottom: 6px; letter-spacing: -.01em;
  }
  .stat-card .val span { color: var(--accent); }
  .stat-card .lbl {
    font-size: 11px; letter-spacing: .16em; text-transform: uppercase;
    color: var(--text-muted); font-weight: 600;
  }

  /* ── Why card ── */
  .why-card {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-radius: 10px;
    padding: 28px 24px;
    display: flex; gap: 20px; align-items: flex-start;
    transition: transform .3s, box-shadow .3s, border-color .3s;
    box-shadow: 0 2px 12px rgba(18,81,163,0.04);
    position: relative; overflow: hidden;
  }
  .why-card::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
    background: var(--blue-brand);
    transform: scaleY(0); transform-origin: bottom;
    transition: transform .3s ease;
  }
  .why-card:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(18,81,163,0.1); border-color: var(--border-dk); }
  .why-card:hover::before { transform: scaleY(1); }
  .why-card .icon-wrap {
    width: 48px; height: 48px; border-radius: 8px; flex-shrink: 0;
    background: var(--blue-pale);
    border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }
  .why-card h3 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 17px; font-weight: 800; letter-spacing: .03em;
    color: var(--blue-dark); margin-bottom: 8px; text-transform: uppercase;
  }
  .why-card p { font-size: 14px; line-height: 1.7; color: var(--text-muted); font-weight: 400; }

  /* ── Value row ── */
  .value-row {
    display: flex; align-items: flex-start; gap: 16px;
    padding: 20px 0; border-bottom: 1px solid var(--border);
  }
  .value-row:last-child { border-bottom: none; }
  .value-row .dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--blue-brand); margin-top: 6px; flex-shrink: 0;
    border: 2px solid var(--border);
  }
  .value-row p { font-size: 15px; line-height: 1.65; color: var(--text-muted); }
  .value-row strong { color: var(--blue-dark); font-weight: 700; display: block; margin-bottom: 4px; font-family: 'Barlow Condensed', sans-serif; font-size: 16px; letter-spacing: .04em; text-transform: uppercase; }

  /* ── Marquee ── */
  .marquee-wrap { overflow: hidden; position: relative; background: var(--blue-dark); }
  .marquee-wrap::before, .marquee-wrap::after {
    content: ''; position: absolute; top: 0; bottom: 0; width: 80px; z-index: 2; pointer-events: none;
  }
  .marquee-wrap::before { left: 0; background: linear-gradient(90deg, var(--blue-dark), transparent); }
  .marquee-wrap::after  { right: 0; background: linear-gradient(-90deg, var(--blue-dark), transparent); }
  .marquee-track {
    display: flex; animation: marquee 26s linear infinite; width: max-content;
  }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .marquee-item {
    display: flex; align-items: center; gap: 12px; padding: 0 28px;
    white-space: nowrap; font-family: 'Barlow Condensed', sans-serif;
    font-size: 12px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }
  .marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

  /* ── CTA Button ── */
  .cta-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--blue-brand); color: var(--white);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    padding: 14px 28px; border-radius: 4px; border: none; cursor: pointer;
    box-shadow: 0 6px 24px rgba(18,81,163,0.35);
    transition: background .2s, transform .2s, box-shadow .2s;
  }
  .cta-btn:hover { background: var(--blue-light); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(18,81,163,0.45); }
  .cta-btn svg { transition: transform .2s; }
  .cta-btn:hover svg { transform: translateX(4px); }

  .cta-btn-ghost {
    display: inline-flex; align-items: center; gap: 10px;
    background: transparent; color: var(--white);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    padding: 14px 28px; border-radius: 4px;
    border: 1.5px solid rgba(255,255,255,0.3); cursor: pointer;
    transition: border-color .2s, background .2s, transform .2s;
  }
  .cta-btn-ghost:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.07); transform: translateY(-2px); }

  /* ── Hero blueprint grid ── */
  .hero-grid-bg {
    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
    background-image:
      linear-gradient(rgba(18,81,163,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(18,81,163,0.07) 1px, transparent 1px);
    background-size: 48px 48px;
  }
`,Es=[`Packaging Machinery`,`Pharmaceutical`,`Food & Beverage`,`Manufacturing`,`Export Quality`,`ISO Certified`,`Smart Automation`,`Custom Solutions`,`Established 2003`];function Ds(){(0,x.useEffect)(()=>{let e=document.querySelectorAll(`.reveal`),t=new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting&&e.target.classList.add(`in`)),{threshold:.12});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[])}function Os(e,t=1400,n=!1){let[r,i]=(0,x.useState)(0);return(0,x.useEffect)(()=>{if(!n)return;let r=null,a=parseInt(e),o=e=>{r||=e;let n=Math.min((e-r)/t,1);i(Math.floor(n*a)),n<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[n,e,t]),r}function ks({value:e,label:t,delay:n=0}){let r=(0,x.useRef)(null),[i,a]=(0,x.useState)(!1),o=parseInt(e),s=e.replace(String(o),``),c=Os(o,1400,i);return(0,x.useEffect)(()=>{let e=r.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(a(!0),t.disconnect())},{threshold:.4});return t.observe(e),()=>t.disconnect()},[]),(0,G.jsxs)(`div`,{ref:r,className:`stat-card reveal`,style:{transitionDelay:`${n}s`},children:[(0,G.jsxs)(`div`,{className:`val`,children:[i?c:0,(0,G.jsx)(`span`,{children:s})]}),(0,G.jsx)(`div`,{className:`lbl`,children:t})]})}function As({icon:e,title:t,desc:n,delay:r=0}){return(0,G.jsxs)(`div`,{className:`why-card reveal`,style:{transitionDelay:`${r}s`},children:[(0,G.jsx)(`div`,{className:`icon-wrap`,children:e}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h3`,{children:t}),(0,G.jsx)(`p`,{children:n})]})]})}function js(){return(0,G.jsx)(`div`,{className:`marquee-wrap`,style:{padding:`14px 0`},children:(0,G.jsx)(`div`,{className:`marquee-track`,children:[...Es,...Es].map((e,t)=>(0,G.jsxs)(`div`,{className:`marquee-item`,children:[(0,G.jsx)(`span`,{className:`marquee-dot`}),e]},t))})})}var Ms=()=>(0,G.jsx)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 16 16`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M3 8h10M9 4l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})});function Ns(){return Ds(),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:Ts}),(0,G.jsxs)(`div`,{style:{minHeight:`100vh`,overflowX:`hidden`},children:[(0,G.jsxs)(`section`,{style:{background:`var(--blue-dark)`,position:`relative`,padding:`100px 24px 80px`,overflow:`hidden`},children:[(0,G.jsx)(`div`,{className:`hero-grid-bg`}),(0,G.jsx)(`div`,{style:{position:`absolute`,top:0,right:0,width:240,height:240,background:`linear-gradient(225deg, rgba(245,166,35,0.1) 0%, transparent 70%)`,pointerEvents:`none`}}),(0,G.jsxs)(`div`,{style:{position:`relative`,zIndex:1,maxWidth:640,margin:`0 auto`,textAlign:`center`},children:[(0,G.jsx)(`div`,{className:`reveal`,style:{marginBottom:20},children:(0,G.jsx)(`span`,{className:`tag-pill`,style:{background:`rgba(245,166,35,0.12)`,border:`1.5px solid rgba(245,166,35,0.3)`,color:`var(--accent)`},children:`Established 2003`})}),(0,G.jsxs)(`h1`,{className:`reveal reveal-d1`,style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:`clamp(52px, 12vw, 88px)`,fontWeight:900,lineHeight:1,color:`#fff`,textTransform:`uppercase`,letterSpacing:`-.01em`,marginBottom:24},children:[`About`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{style:{color:`var(--blue-light)`},children:`SunTech`})]}),(0,G.jsx)(`p`,{className:`reveal reveal-d2`,style:{fontSize:16,lineHeight:1.75,color:`rgba(192,215,245,0.72)`,marginBottom:40,maxWidth:440,margin:`0 auto 40px`,fontWeight:300},children:`Engineering the future of packaging — with decades of precision, innovation, and trust.`}),(0,G.jsxs)(`div`,{className:`reveal reveal-d3`,style:{display:`flex`,justifyContent:`center`,gap:14,flexWrap:`wrap`},children:[(0,G.jsxs)(`button`,{className:`cta-btn`,children:[`Our Story `,(0,G.jsx)(Ms,{})]}),(0,G.jsx)(`button`,{className:`cta-btn-ghost`,children:`View Projects`})]})]})]}),(0,G.jsx)(js,{}),(0,G.jsxs)(`section`,{style:{padding:`72px 24px`,maxWidth:760,margin:`0 auto`},children:[(0,G.jsx)(`div`,{className:`section-label reveal`,children:`Who We Are`}),(0,G.jsxs)(`h2`,{className:`reveal reveal-d1`,style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:`clamp(32px, 7vw, 52px)`,fontWeight:900,lineHeight:1.05,color:`var(--blue-dark)`,textTransform:`uppercase`,letterSpacing:`-.01em`,marginBottom:40},children:[`Precision. Scale.`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{style:{color:`var(--blue-brand)`,fontStyle:`italic`},children:`Reliability.`})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`div`,{className:`value-row reveal reveal-d1`,children:[(0,G.jsx)(`div`,{className:`dot`}),(0,G.jsxs)(`p`,{children:[(0,G.jsx)(`strong`,{children:`Our Mission`}),`Suntech is a leading manufacturer of packaging machinery, delivering cutting-edge solutions for food, pharmaceutical, and industrial sectors worldwide.`]})]}),(0,G.jsxs)(`div`,{className:`value-row reveal reveal-d2`,children:[(0,G.jsx)(`div`,{className:`dot`,style:{background:`var(--accent)`,borderColor:`rgba(245,166,35,0.3)`}}),(0,G.jsxs)(`p`,{children:[(0,G.jsx)(`strong`,{children:`Our Promise`}),`Efficient, durable, high-performance machines engineered to help businesses scale production without compromise.`]})]}),(0,G.jsxs)(`div`,{className:`value-row reveal reveal-d3`,children:[(0,G.jsx)(`div`,{className:`dot`}),(0,G.jsxs)(`p`,{children:[(0,G.jsx)(`strong`,{children:`Global Reach`}),`Trusted by manufacturers across 40+ Cities, our machines run millions of cycles in demanding environments every day.`]})]})]})]}),(0,G.jsx)(`section`,{style:{padding:`0 24px 72px`,background:`var(--white)`,borderTop:`1px solid var(--border)`,borderBottom:`1px solid var(--border)`},children:(0,G.jsxs)(`div`,{style:{maxWidth:760,margin:`0 auto`,paddingTop:56},children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:32,flexWrap:`wrap`,gap:12},children:[(0,G.jsx)(`div`,{className:`section-label reveal`,style:{marginBottom:0},children:`By The Numbers`}),(0,G.jsx)(`div`,{className:`reveal`,style:{background:`var(--blue-dark)`,color:`rgba(255,255,255,0.5)`,padding:`6px 16px`,borderRadius:`4px`,fontFamily:`'Barlow Condensed', sans-serif`,fontSize:11,fontWeight:700,letterSpacing:`.15em`,textTransform:`uppercase`},children:`Since 2003`})]}),(0,G.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:16},children:[(0,G.jsx)(ks,{value:`20+`,label:`Years Experience`,delay:0}),(0,G.jsx)(ks,{value:`500+`,label:`Machines Delivered`,delay:.1}),(0,G.jsx)(ks,{value:`100+`,label:`Global Clients`,delay:.2}),(0,G.jsx)(ks,{value:`40+`,label:`Cities Served`,delay:.3})]})]})}),(0,G.jsx)(`section`,{style:{padding:`72px 24px`},children:(0,G.jsxs)(`div`,{style:{maxWidth:760,margin:`0 auto`},children:[(0,G.jsxs)(`div`,{style:{marginBottom:40},children:[(0,G.jsx)(`div`,{className:`section-label reveal`,children:`Why Choose Us`}),(0,G.jsxs)(`h2`,{className:`reveal reveal-d1`,style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:`clamp(30px, 6vw, 48px)`,fontWeight:900,lineHeight:1.05,color:`var(--blue-dark)`,textTransform:`uppercase`,letterSpacing:`-.01em`},children:[`Built Different,`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{style:{color:`var(--blue-brand)`},children:`By Design.`})]})]}),(0,G.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:14},children:[(0,G.jsx)(As,{icon:`⚙️`,title:`International Quality Standards`,desc:`Every machine is engineered with precision-grade materials and validated against global manufacturing benchmarks.`,delay:0}),(0,G.jsx)(As,{icon:`⚡`,title:`Smart Automation`,desc:`Proprietary control systems and IoT-ready architecture bring modern intelligence to production lines.`,delay:.1}),(0,G.jsx)(As,{icon:`🛡️`,title:`End-to-End Support`,desc:`From installation to maintenance, our dedicated service team ensures zero downtime and maximum output.`,delay:.2}),(0,G.jsx)(As,{icon:`🌍`,title:`Export-Grade Manufacturing`,desc:`Designed for global deployment — compliant with CE, ISO, and regional standards across 40+ Cities.`,delay:.3})]})]})}),(0,G.jsx)(`section`,{style:{padding:`0 24px 64px`},children:(0,G.jsxs)(`div`,{style:{maxWidth:760,margin:`0 auto`,background:`var(--blue-dark)`,borderRadius:12,border:`1.5px solid rgba(255,255,255,0.08)`,padding:`56px 40px`,textAlign:`center`,position:`relative`,overflow:`hidden`},children:[(0,G.jsx)(`div`,{style:{position:`absolute`,inset:0,pointerEvents:`none`,backgroundImage:`linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,backgroundSize:`40px 40px`}}),(0,G.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,height:3,background:`var(--blue-brand)`}}),(0,G.jsxs)(`div`,{className:`reveal`,style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:`clamp(28px, 6vw, 44px)`,fontWeight:900,lineHeight:1.1,color:`#fff`,textTransform:`uppercase`,marginBottom:16,position:`relative`,zIndex:1},children:[`Ready to Scale`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{style:{color:`var(--accent)`},children:`Your Production?`})]}),(0,G.jsx)(`p`,{className:`reveal reveal-d1`,style:{color:`rgba(192,215,245,0.65)`,fontSize:15,marginBottom:32,lineHeight:1.7,position:`relative`,zIndex:1,fontWeight:300},children:`Talk to our engineering team and discover the right solution for your line.`}),(0,G.jsxs)(`div`,{className:`reveal reveal-d2`,style:{display:`flex`,justifyContent:`center`,gap:14,flexWrap:`wrap`,position:`relative`,zIndex:1},children:[(0,G.jsxs)(`button`,{className:`cta-btn`,children:[`Get in Touch `,(0,G.jsx)(Ms,{})]}),(0,G.jsx)(`button`,{className:`cta-btn-ghost`,children:`View Brochure`})]})]})}),(0,G.jsxs)(`footer`,{style:{borderTop:`2px solid var(--blue-brand)`,background:`var(--blue-dark)`,padding:`20px 24px`,textAlign:`center`,color:`rgba(192,215,245,0.4)`,fontSize:11,letterSpacing:`.15em`,textTransform:`uppercase`,fontFamily:`'Barlow Condensed', sans-serif`,fontWeight:700},children:[`© `,new Date().getFullYear(),` Suntech Packaging · All Rights Reserved`]})]})]})}var Ps={weighing:{title:`Weighing & Filling`,titleItalic:`Machines`,subtitle:`High-accuracy weighing and volumetric filling solutions for consistent, repeatable output on any production scale.`,slugs:[`Liquid Filling Machine`,`Collar Type VFFS Machine`]},packaging:{title:`Packaging`,titleItalic:`Machines`,subtitle:`Industrial-grade VFFS and pre-made pouch systems for powders, granules, solids and more.`,slugs:[`Packaging Machine`,`Packing Machine`,`Powder Packaging Machine`,`Pouch Packaging Machine`,`Vacuum Packaging Machine`,`Shrink Tunnel Packaging Machine`,`Wrapping Machine`,`Seeds Packaging Machine`,`Scrubber Packaging Machine`]},sealing:{title:`Sealing`,titleItalic:`Machines`,subtitle:`Durable continuous band and chamber-type sealing systems for airtight, tamper-evident closure.`,slugs:[`Sealing Machine`,`Nitrogen Flushing Machine`]},labelling:{title:`Labelling & Coding`,titleItalic:`Machines`,subtitle:`Precision self-adhesive labellers and high-speed inkjet coders for complete traceability.`,slugs:[`Labelling Machine`,`Coding Machine`,`Coder Printer`]}};function Fs({product:e}){let t=at();return(0,G.jsxs)(`div`,{className:`mp-card`,children:[(0,G.jsx)(`div`,{className:`mp-card-bar`}),(0,G.jsx)(`div`,{className:`mp-card-img`,children:(0,G.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`})}),(0,G.jsxs)(`div`,{className:`mp-card-body`,children:[(0,G.jsxs)(`div`,{className:`mp-card-tag`,children:[(0,G.jsx)(`span`,{className:`mp-tag-dot`}),e.specs?.[`Machine Type`]||`Industrial Machine`]}),(0,G.jsx)(`h3`,{className:`mp-card-name`,children:e.name}),(0,G.jsx)(`p`,{className:`mp-card-desc`,children:e.shortDesc}),(0,G.jsxs)(`div`,{className:`mp-card-actions`,children:[(0,G.jsxs)(W,{className:`mp-btn-details`,to:`/product/${e.name}`,children:[`View Details`,(0,G.jsx)(`svg`,{viewBox:`0 0 12 12`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,width:`11`,height:`11`,children:(0,G.jsx)(`path`,{d:`M2 6h8M7 3l3 3-3 3`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,G.jsx)(`button`,{className:`mp-btn-inq`,onClick:()=>t(`/contact`,{state:{product:e.name}}),children:`Inquiry →`})]})]})]})}function Is(){let{type:e}=st();at();let t=Ps[e?.toLowerCase()];if(!t)return(0,G.jsx)(`div`,{style:{minHeight:`100vh`,background:`#f0f5fc`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`'Barlow', sans-serif`},children:(0,G.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,G.jsx)(`p`,{style:{fontSize:48,margin:0},children:`⚙️`}),(0,G.jsx)(`h2`,{style:{marginTop:16,fontFamily:`'Barlow Condensed', sans-serif`,fontSize:28,color:`#111827`,textTransform:`uppercase`},children:`Category Not Found`}),(0,G.jsx)(W,{to:`/products`,style:{marginTop:20,display:`inline-block`,background:`#1f2937`,color:`#fff`,padding:`12px 28px`,borderRadius:4,textDecoration:`none`,fontSize:13,fontWeight:700,letterSpacing:`.08em`,textTransform:`uppercase`},children:`← All Products`})]})});let n=t.slugs.map(e=>or.find(t=>t.name===e)).filter(Boolean),r=n[0];return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-dark:  #111827;
          --blue-brand: #111827;
          --blue-light: #1f2937;
          --blue-pale:  rgba(17,24,39,0.05);
          --accent:     #f5a623;
          --white:      #ffffff;
          --off-white:  #f0f5fc;
          --text:       #1a2d4a;
          --text-muted: #6e8db5;
          --border:     rgba(17,24,39,0.12);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mp-page {
          background: var(--off-white);
          min-height: 100vh;
          font-family: 'Barlow', sans-serif;
          color: var(--text);
          padding-bottom: 80px;
        }

        /* ── BREADCRUMB ── */
        .mp-crumb {
          background: var(--blue-dark);
          padding: 12px 24px;
          display: flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: .12em; text-transform: uppercase;
        }
        .mp-crumb a { color: rgba(192,215,245,0.6); text-decoration: none; transition: color .2s; }
        .mp-crumb a:hover { color: var(--accent); }
        .mp-crumb-sep { color: rgba(255,255,255,0.2); }
        .mp-crumb-cur { color: var(--accent); }

        /* ── HERO ── */
        .mp-hero {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 48px 24px;
        }
        .mp-hero-inner {
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr;
          gap: 40px; align-items: center;
        }
        @media (min-width: 780px) {
          .mp-hero-inner { grid-template-columns: 1fr 1fr; gap: 56px; }
        }

        .mp-hero-img {
          background: var(--off-white);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          padding: 40px 32px; min-height: 240px; position: relative; overflow: hidden;
        }
        .mp-hero-img::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(18,81,163,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(18,81,163,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .mp-hero-img img {
          position: relative; z-index: 1;
          max-height: 220px; width: 100%; object-fit: contain;
          filter: drop-shadow(0 12px 24px rgba(18,81,163,0.12));
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .mp-hero-img:hover img { transform: scale(1.04); }

        .mp-hero-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1.5px solid var(--border);
          border-radius: 4px; padding: 5px 12px;
          margin-bottom: 16px;
        }
        .mp-hero-tag::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }

        .mp-hero-h1 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(32px, 5.5vw, 56px);
          font-weight: 900; color: var(--blue-dark);
          line-height: 1.0; letter-spacing: -.01em;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .mp-hero-h1 span { color: var(--blue-brand); display: block; }

        .mp-hero-sub {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.8; font-weight: 300; max-width: 420px;
          margin-bottom: 28px;
        }

        .mp-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .mp-btn-fill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue-brand); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          padding: 12px 24px; border-radius: 4px; border: none; cursor: pointer; text-decoration: none;
          box-shadow: 0 4px 16px rgba(18,81,163,0.3);
          transition: background .2s, transform .15s;
        }
        .mp-btn-fill:hover { background: var(--blue-light); transform: translateY(-2px); }
        .mp-btn-out {
          display: inline-flex; align-items: center;
          background: transparent; color: var(--text);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          padding: 12px 20px; border-radius: 4px;
          border: 1.5px solid var(--border); cursor: pointer; text-decoration: none;
          transition: border-color .2s, color .2s;
        }
        .mp-btn-out:hover { border-color: var(--blue-brand); color: var(--blue-brand); }

        /* ── SECTION ── */
        .mp-section {
          max-width: 1160px; margin: 40px auto 0; padding: 0 24px;
        }

        .mp-section-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
          border-bottom: 1px solid var(--border); padding-bottom: 16px;
        }
        .mp-section-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue-brand);
          display: flex; align-items: center; gap: 8px;
        }
        .mp-section-label::before {
          content: ''; width: 24px; height: 2px;
          background: var(--blue-brand); border-radius: 2px;
        }
        .mp-section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 26px; font-weight: 900;
          color: var(--blue-dark); text-transform: uppercase;
          letter-spacing: -.01em;
        }
        .mp-section-count {
          font-family: 'Barlow', sans-serif;
          font-size: 13px; color: var(--text-muted);
          font-weight: 400; margin-left: 4px;
        }

        /* ── CARDS GRID ── */
        .mp-grid {
          display: grid; grid-template-columns: 1fr; gap: 18px;
        }
        @media (min-width: 500px) { .mp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 800px) { .mp-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── CARD ── */
        .mp-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 10px; overflow: hidden;
          display: flex; flex-direction: column;
          position: relative;
          box-shadow: 0 2px 10px rgba(18,81,163,0.04);
          transition: border-color .25s, box-shadow .3s, transform .3s;
        }
        .mp-card:hover {
          border-color: var(--blue-brand);
          box-shadow: 0 10px 36px rgba(18,81,163,0.12);
          transform: translateY(-4px);
        }
        .mp-card-bar {
          height: 3px; background: var(--border);
          transition: background .25s;
        }
        .mp-card:hover .mp-card-bar { background: var(--blue-brand); }

        .mp-card-img {
          height: 160px; background: var(--off-white);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; border-bottom: 1px solid var(--border);
        }
        .mp-card-img img {
          max-height: 120px; width: 100%; object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(18,81,163,0.1));
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .mp-card:hover .mp-card-img img { transform: scale(1.06) translateY(-3px); }

        .mp-card-body {
          padding: 16px 18px 18px;
          display: flex; flex-direction: column; flex: 1;
        }
        .mp-card-tag {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1px solid var(--border);
          border-radius: 3px; padding: 3px 8px;
          margin-bottom: 10px; width: fit-content;
        }
        .mp-tag-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }
        .mp-card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 17px; font-weight: 900;
          color: var(--blue-dark); margin-bottom: 8px;
          text-transform: uppercase; letter-spacing: .02em; line-height: 1.1;
        }
        .mp-card-desc {
          font-size: 12.5px; color: var(--text-muted);
          line-height: 1.7; flex: 1; margin-bottom: 14px; font-weight: 400;
        }
        .mp-card-actions {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 12px; border-top: 1px solid var(--border); gap: 8px;
        }
        .mp-btn-details {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          color: var(--blue-brand); text-decoration: none;
          border: 1.5px solid var(--border);
          padding: 7px 12px; border-radius: 4px;
          transition: background .2s, color .2s, border-color .2s;
        }
        .mp-btn-details:hover {
          background: var(--blue-brand); color: #fff; border-color: var(--blue-brand);
        }
        .mp-btn-inq {
          display: inline-flex; align-items: center;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          color: #fff; background: var(--blue-brand);
          border: none; cursor: pointer;
          padding: 7px 14px; border-radius: 4px;
          transition: background .2s;
        }
        .mp-btn-inq:hover { background: var(--blue-light); }

        /* ── CTA BAND ── */
        .mp-cta {
          max-width: 1160px; margin: 40px auto 0; padding: 0 24px;
        }
        .mp-cta-inner {
          background: var(--blue-dark);
          border-radius: 10px; padding: 36px 40px;
          display: flex; flex-direction: column; gap: 20px;
          position: relative; overflow: hidden;
        }
        .mp-cta-inner::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 36px 36px; pointer-events: none;
        }
        .mp-cta-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }
        @media (min-width: 600px) {
          .mp-cta-inner { flex-direction: row; align-items: center; justify-content: space-between; }
        }
        .mp-cta-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(20px, 3.5vw, 30px); font-weight: 900;
          color: #fff; text-transform: uppercase; line-height: 1.1;
          position: relative; z-index: 1;
        }
        .mp-cta-title span { color: var(--accent); }
        .mp-cta-sub {
          font-size: 13px; color: rgba(192,215,245,0.6);
          font-weight: 300; margin-top: 6px; position: relative; z-index: 1;
        }
        .mp-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: var(--blue-dark);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 4px; border: none; cursor: pointer;
          text-decoration: none; white-space: nowrap; flex-shrink: 0;
          position: relative; z-index: 1;
          transition: opacity .2s, transform .15s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        .mp-cta-btn:hover { opacity: 0.9; transform: translateY(-2px); }
      `}),(0,G.jsxs)(`div`,{className:`mp-page`,children:[(0,G.jsxs)(`nav`,{className:`mp-crumb`,children:[(0,G.jsx)(`a`,{href:`/`,children:`Home`}),(0,G.jsx)(`span`,{className:`mp-crumb-sep`,children:`›`}),(0,G.jsx)(`a`,{href:`/machines`,children:`Machines`}),(0,G.jsx)(`span`,{className:`mp-crumb-sep`,children:`›`}),(0,G.jsxs)(`span`,{className:`mp-crumb-cur`,children:[t.title,` `,t.titleItalic]})]}),r&&(0,G.jsx)(`div`,{className:`mp-hero`,children:(0,G.jsxs)(`div`,{className:`mp-hero-inner`,children:[(0,G.jsx)(`div`,{className:`mp-hero-img`,children:(0,G.jsx)(`img`,{src:r.image,alt:r.name})}),(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`div`,{className:`mp-hero-tag`,children:[t.title,` `,t.titleItalic]}),(0,G.jsxs)(`h1`,{className:`mp-hero-h1`,children:[t.title,(0,G.jsx)(`span`,{children:t.titleItalic})]}),(0,G.jsx)(`p`,{className:`mp-hero-sub`,children:t.subtitle}),(0,G.jsxs)(`div`,{className:`mp-hero-btns`,children:[(0,G.jsxs)(W,{to:`/contact`,className:`mp-btn-fill`,children:[`Get a Quote`,(0,G.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,width:`12`,height:`12`,children:(0,G.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,G.jsx)(W,{to:`/machines`,className:`mp-btn-out`,children:`All Machines`})]})]})]})}),(0,G.jsxs)(`section`,{className:`mp-section`,children:[(0,G.jsxs)(`div`,{className:`mp-section-header`,children:[(0,G.jsx)(`span`,{className:`mp-section-label`,children:`Range`}),(0,G.jsxs)(`h2`,{className:`mp-section-title`,children:[`All Machines`,(0,G.jsxs)(`span`,{className:`mp-section-count`,children:[`(`,n.length,`)`]})]})]}),(0,G.jsx)(`div`,{className:`mp-grid`,children:n.map(e=>(0,G.jsx)(Fs,{product:e},e.name))})]}),(0,G.jsx)(`div`,{className:`mp-cta`,children:(0,G.jsxs)(`div`,{className:`mp-cta-inner`,children:[(0,G.jsx)(`div`,{className:`mp-cta-top`}),(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`p`,{className:`mp-cta-title`,children:[`Need a `,(0,G.jsx)(`span`,{children:`Custom`}),` Specification?`]}),(0,G.jsx)(`p`,{className:`mp-cta-sub`,children:`We engineer solutions to your exact production requirements.`})]}),(0,G.jsx)(W,{to:`/contact`,className:`mp-cta-btn`,children:`Request Custom Quote →`})]})})]})]})}function Ls(){let{name:e}=st(),t=at(),[n,r]=(0,x.useState)(!1),[i,a]=(0,x.useState)(`specs`),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)({name:``,contact:``,requirement:``}),[u,d]=(0,x.useState)(!1),f=or.find(t=>t.name===e);if(!f)return(0,G.jsx)(`div`,{style:Z.notFound,children:(0,G.jsxs)(`div`,{style:Z.notFoundCard,children:[(0,G.jsx)(`div`,{style:Z.notFoundIcon,children:`⚠`}),(0,G.jsx)(`h2`,{style:Z.notFoundTitle,children:`Product Not Found`}),(0,G.jsx)(`p`,{style:Z.notFoundSub,children:`We couldn't locate this product.`}),(0,G.jsx)(`button`,{onClick:()=>t(-1),style:Z.btnPrimary,children:`← Go Back`})]})});let p=Object.entries(f.specs||{}),m=[`Industrial-grade stainless steel construction`,`Precision-machined components for long service life`,`Wide operating temperature & voltage range`,`Compliant with FSSAI, CE & ISO standards`,`Low maintenance with easy-clean design`,`Energy-efficient motor technology`],h=[{emoji:`📄`,label:`Datasheet`,sub:`Download product PDF`,color:`#0ea5e9`,bg:`rgba(14,165,233,0.08)`},{emoji:`🔧`,label:`Installation Guide`,sub:`Step-by-step setup manual`,color:`#10b981`,bg:`rgba(16,185,129,0.08)`},{emoji:`📞`,label:`Technical Support`,sub:`Talk to an engineer`,color:`#f59e0b`,bg:`rgba(245,158,11,0.08)`},{emoji:`🛡`,label:`Warranty Information`,sub:`Coverage & return policy`,color:`#8b5cf6`,bg:`rgba(139,92,246,0.08)`}],g=()=>{d(!0),setTimeout(()=>{d(!1),r(!1),l({name:``,contact:``,requirement:``})},2e3)};return(0,G.jsxs)(`main`,{style:Z.page,children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .pd-back-btn:hover { background: rgba(255,255,255,0.12) !important; }
        .pd-icon-btn:hover { background: rgba(255,255,255,0.1) !important; border-color: rgba(255,255,255,0.3) !important; }
        .pd-tab:hover { color: #f0f0f0 !important; }
        .pd-spec-row:hover td { background: rgba(232,160,32,0.06) !important; }
        .pd-feat-row:hover { background: rgba(232,160,32,0.04) !important; }
        .pd-support-btn:hover { background: rgba(255,255,255,0.04) !important; }
        .pd-quote-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(232,160,32,0.45) !important; }
        .pd-quote-btn:active { transform: translateY(0px); }
        .pd-action-icon:hover { border-color: #e8a020 !important; color: #e8a020 !important; }

        input:focus, textarea:focus {
          outline: none;
          border-color: #e8a020 !important;
          background: rgba(232,160,32,0.04) !important;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes sheetUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .pd-hero { animation: slideUp 0.5s ease both; }
        .pd-content { animation: slideUp 0.5s 0.1s ease both; opacity: 0; animation-fill-mode: forwards; }
        .pd-sidebar { animation: slideUp 0.5s 0.15s ease both; opacity: 0; animation-fill-mode: forwards; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 2px; }
      `}),(0,G.jsxs)(`header`,{style:Z.header,children:[(0,G.jsxs)(`button`,{className:`pd-back-btn`,onClick:()=>t(-1),style:Z.backBtn,children:[(0,G.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,style:{flexShrink:0},children:(0,G.jsx)(`path`,{d:`M10 3L5 8L10 13`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Back`]}),(0,G.jsxs)(`div`,{style:Z.breadcrumb,children:[(0,G.jsx)(`span`,{style:Z.breadcrumbItem,children:`Products`}),(0,G.jsx)(`span`,{style:Z.breadcrumbSep,children:`›`}),(0,G.jsx)(`span`,{style:Z.breadcrumbCurrent,children:f.category||`Machine`})]}),(0,G.jsxs)(`div`,{style:Z.headerActions,children:[(0,G.jsx)(`button`,{className:`pd-icon-btn`,onClick:()=>s(!o),style:Z.iconBtn,title:o?`Remove bookmark`:`Bookmark`,children:(0,G.jsx)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:o?`#e8a020`:`none`,children:(0,G.jsx)(`path`,{d:`M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z`,stroke:o?`#e8a020`:`rgba(255,255,255,0.5)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,G.jsx)(`button`,{className:`pd-icon-btn`,style:Z.iconBtn,title:`Share`,children:(0,G.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,G.jsx)(`circle`,{cx:`18`,cy:`5`,r:`2.5`,stroke:`rgba(255,255,255,0.5)`,strokeWidth:`1.5`}),(0,G.jsx)(`circle`,{cx:`6`,cy:`12`,r:`2.5`,stroke:`rgba(255,255,255,0.5)`,strokeWidth:`1.5`}),(0,G.jsx)(`circle`,{cx:`18`,cy:`19`,r:`2.5`,stroke:`rgba(255,255,255,0.5)`,strokeWidth:`1.5`}),(0,G.jsx)(`path`,{d:`M8.5 10.5L15.5 6.5M8.5 13.5L15.5 17.5`,stroke:`rgba(255,255,255,0.5)`,strokeWidth:`1.5`})]})})]})]}),(0,G.jsxs)(`div`,{style:Z.layout,children:[(0,G.jsxs)(`aside`,{className:`pd-hero`,style:Z.heroPan,children:[f.category&&(0,G.jsx)(`div`,{style:Z.categoryBadge,children:f.category}),(0,G.jsxs)(`div`,{style:Z.imageWrap,children:[(0,G.jsx)(`div`,{style:Z.imageGlow}),(0,G.jsx)(`div`,{style:Z.imageGrid}),(0,G.jsx)(`img`,{src:f.image,alt:f.name,style:Z.productImg})]}),(0,G.jsxs)(`div`,{style:Z.heroMeta,children:[(0,G.jsx)(`h1`,{style:Z.productTitle,children:f.name}),(0,G.jsx)(`p`,{style:Z.productDesc,children:f.description})]}),(0,G.jsxs)(`div`,{style:Z.ctaGroup,children:[(0,G.jsx)(`button`,{className:`pd-quote-btn`,onClick:()=>r(!0),style:Z.btnPrimary,children:`Get a Quote`}),(0,G.jsxs)(`div`,{style:Z.secondaryCtas,children:[(0,G.jsxs)(`button`,{className:`pd-action-icon`,style:Z.actionIconBtn,title:`Call us`,children:[(0,G.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Call Us`]}),(0,G.jsxs)(`button`,{className:`pd-action-icon`,style:Z.actionIconBtn,title:`Print`,children:[(0,G.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-6 0h.008v.008H12V10.5Zm-3 0h.008v.008H9V10.5Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Print`]})]})]}),(0,G.jsx)(`div`,{style:Z.trustRow,children:[`FSSAI`,`CE`,`ISO 9001`].map(e=>(0,G.jsx)(`span`,{style:Z.trustBadge,children:e},e))})]}),(0,G.jsxs)(`section`,{className:`pd-content`,style:Z.contentPan,children:[(0,G.jsx)(`div`,{style:Z.tabBar,children:[`specs`,`features`,`support`].map(e=>(0,G.jsxs)(`button`,{className:`pd-tab`,onClick:()=>a(e),style:{...Z.tabBtn,...i===e?Z.tabBtnActive:{}},children:[e===`specs`&&(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0},children:(0,G.jsx)(`path`,{d:`M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`})}),e===`features`&&(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0},children:(0,G.jsx)(`path`,{d:`M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e===`support`&&(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0},children:(0,G.jsx)(`path`,{d:`M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e.charAt(0).toUpperCase()+e.slice(1),i===e&&(0,G.jsx)(`span`,{style:Z.tabPip})]},e))}),(0,G.jsxs)(`div`,{style:Z.tabContent,children:[i===`specs`&&(0,G.jsx)(`div`,{style:Z.specsWrap,children:p.length===0?(0,G.jsx)(`p`,{style:Z.emptyMsg,children:`No specifications available.`}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`p`,{style:Z.tabIntro,children:[`Technical specifications for `,f.name,`. All values are subject to standard tolerances.`]}),(0,G.jsx)(`table`,{style:Z.specTable,children:(0,G.jsx)(`tbody`,{children:p.map(([e,t],n)=>(0,G.jsxs)(`tr`,{className:`pd-spec-row`,style:{...Z.specRow,background:n%2==0?`transparent`:`rgba(255,255,255,0.02)`},children:[(0,G.jsxs)(`td`,{style:Z.specKey,children:[(0,G.jsx)(`span`,{style:Z.specDot}),e.replace(/_/g,` `)]}),(0,G.jsx)(`td`,{style:Z.specVal,children:t})]},e))})})]})}),i===`features`&&(0,G.jsxs)(`div`,{style:Z.featWrap,children:[(0,G.jsx)(`p`,{style:Z.tabIntro,children:`Engineered for industrial performance, reliability, and ease of maintenance.`}),(0,G.jsx)(`div`,{style:Z.featGrid,children:(f.features||m).map((e,t)=>(0,G.jsxs)(`div`,{className:`pd-feat-row`,style:Z.featCard,children:[(0,G.jsx)(`span`,{style:Z.featCheck,children:`✓`}),(0,G.jsx)(`span`,{style:Z.featText,children:e})]},t))})]}),i===`support`&&(0,G.jsxs)(`div`,{style:Z.supportWrap,children:[(0,G.jsx)(`p`,{style:Z.tabIntro,children:`Access documentation, technical assistance, and warranty details for your product.`}),(0,G.jsx)(`div`,{style:Z.supportGrid,children:h.map(({emoji:e,label:t,sub:n,color:r,bg:i})=>(0,G.jsxs)(`button`,{className:`pd-support-btn`,style:Z.supportCard,children:[(0,G.jsx)(`span`,{style:{...Z.supportIcon,background:i,color:r},children:e}),(0,G.jsxs)(`div`,{style:Z.supportText,children:[(0,G.jsx)(`p`,{style:Z.supportLabel,children:t}),(0,G.jsx)(`p`,{style:Z.supportSub,children:n})]}),(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,style:{marginLeft:`auto`,flexShrink:0,opacity:.3},children:(0,G.jsx)(`path`,{d:`M6 3L11 8L6 13`,stroke:`white`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})]},t))})]})]})]})]}),n&&(0,G.jsx)(`div`,{style:Z.modalOverlay,onClick:()=>r(!1),children:(0,G.jsxs)(`div`,{style:Z.modalSheet,onClick:e=>e.stopPropagation(),children:[(0,G.jsxs)(`div`,{style:Z.modalHeader,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h3`,{style:Z.modalTitle,children:`Request a Quote`}),(0,G.jsx)(`p`,{style:Z.modalSub,children:f.name})]}),(0,G.jsx)(`button`,{onClick:()=>r(!1),style:Z.modalClose,children:`✕`})]}),u?(0,G.jsxs)(`div`,{style:Z.successState,children:[(0,G.jsx)(`div`,{style:Z.successIcon,children:`✓`}),(0,G.jsx)(`p`,{style:Z.successText,children:`Request sent successfully!`}),(0,G.jsx)(`p`,{style:Z.successSub,children:`Our team will contact you within 24 hours.`})]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{style:Z.formGroup,children:[(0,G.jsx)(`label`,{style:Z.formLabel,children:`Full Name`}),(0,G.jsx)(`input`,{type:`text`,placeholder:`e.g. Rajesh Kumar`,value:c.name,onChange:e=>l({...c,name:e.target.value}),style:Z.formInput})]}),(0,G.jsxs)(`div`,{style:Z.formGroup,children:[(0,G.jsx)(`label`,{style:Z.formLabel,children:`Email / Phone`}),(0,G.jsx)(`input`,{type:`text`,placeholder:`your@email.com or +91 XXXXX`,value:c.contact,onChange:e=>l({...c,contact:e.target.value}),style:Z.formInput})]}),(0,G.jsxs)(`div`,{style:Z.formGroup,children:[(0,G.jsx)(`label`,{style:Z.formLabel,children:`Requirement`}),(0,G.jsx)(`textarea`,{placeholder:`Quantity, customization, delivery location...`,rows:3,value:c.requirement,onChange:e=>l({...c,requirement:e.target.value}),style:{...Z.formInput,resize:`none`,lineHeight:`1.6`}})]}),(0,G.jsx)(`button`,{className:`pd-quote-btn`,onClick:g,style:{...Z.btnPrimary,width:`100%`,marginTop:`8px`},children:`Send Request →`})]})]})})]})}var X={bg:`#0f1117`,surface:`#161b27`,surfaceHover:`#1c2333`,border:`rgba(255,255,255,0.07)`,borderLight:`rgba(255,255,255,0.04)`,text:`#f0f2f5`,textMuted:`rgba(240,242,245,0.45)`,textDim:`rgba(240,242,245,0.28)`,accent:`#e8a020`,accentDark:`#c47d0e`,accentGlow:`rgba(232,160,32,0.18)`},Z={page:{minHeight:`100vh`,background:X.bg,color:X.text,fontFamily:`'Outfit', sans-serif`,backgroundImage:`
      radial-gradient(ellipse 80% 50% at 20% -20%, rgba(232,160,32,0.06) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 110%, rgba(14,165,233,0.04) 0%, transparent 60%)
    `},header:{position:`sticky`,top:0,zIndex:30,background:`rgba(15,17,23,0.85)`,backdropFilter:`blur(16px)`,borderBottom:`1px solid ${X.border}`,height:`56px`,padding:`0 32px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`16px`},backBtn:{display:`flex`,alignItems:`center`,gap:`6px`,color:X.textMuted,background:`transparent`,border:`none`,cursor:`pointer`,fontSize:`13px`,fontWeight:500,fontFamily:`'Outfit', sans-serif`,padding:`6px 10px`,borderRadius:`8px`,transition:`all 0.15s`},breadcrumb:{display:`flex`,alignItems:`center`,gap:`6px`,flex:1,justifyContent:`center`},breadcrumbItem:{fontSize:`12px`,color:X.textDim,fontWeight:400},breadcrumbSep:{color:X.textDim,fontSize:`12px`},breadcrumbCurrent:{fontSize:`12px`,color:X.accent,fontWeight:600,letterSpacing:`0.04em`,textTransform:`uppercase`},headerActions:{display:`flex`,gap:`6px`},iconBtn:{width:`34px`,height:`34px`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`8px`,border:`1px solid rgba(255,255,255,0.1)`,background:`transparent`,cursor:`pointer`,transition:`all 0.15s`},layout:{display:`grid`,gridTemplateColumns:`380px 1fr`,gap:`0`,minHeight:`calc(100vh - 56px)`,maxWidth:`1300px`,margin:`0 auto`,padding:`32px 32px 60px`,gap:`32px`},heroPan:{display:`flex`,flexDirection:`column`,gap:`0`,position:`sticky`,top:`88px`,height:`fit-content`},categoryBadge:{display:`inline-flex`,alignSelf:`flex-start`,fontSize:`10px`,fontWeight:700,letterSpacing:`0.14em`,textTransform:`uppercase`,color:X.accent,background:X.accentGlow,border:`1px solid rgba(232,160,32,0.2)`,padding:`4px 10px`,borderRadius:`20px`,marginBottom:`16px`},imageWrap:{position:`relative`,background:X.surface,border:`1px solid ${X.border}`,borderRadius:`20px`,overflow:`hidden`,aspectRatio:`1 / 1`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`32px`,marginBottom:`20px`},imageGrid:{position:`absolute`,inset:0,backgroundImage:`
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
    `,backgroundSize:`32px 32px`},imageGlow:{position:`absolute`,bottom:0,left:`50%`,transform:`translateX(-50%)`,width:`220px`,height:`120px`,background:`radial-gradient(ellipse, rgba(232,160,32,0.15) 0%, transparent 70%)`,filter:`blur(20px)`},productImg:{position:`relative`,zIndex:2,maxWidth:`100%`,maxHeight:`280px`,objectFit:`contain`,filter:`drop-shadow(0 20px 48px rgba(0,0,0,0.5))`,transition:`transform 0.3s ease`},heroMeta:{marginBottom:`20px`},productTitle:{fontFamily:`'Syne', sans-serif`,fontSize:`1.75rem`,fontWeight:700,color:X.text,lineHeight:1.2,letterSpacing:`-0.02em`,marginBottom:`10px`},productDesc:{fontSize:`0.875rem`,color:X.textMuted,lineHeight:1.7,fontWeight:300},ctaGroup:{display:`flex`,flexDirection:`column`,gap:`10px`,marginBottom:`16px`},btnPrimary:{background:`linear-gradient(135deg, ${X.accent} 0%, ${X.accentDark} 100%)`,color:`#fff`,border:`none`,borderRadius:`12px`,padding:`14px 24px`,fontSize:`14px`,fontWeight:700,fontFamily:`'Outfit', sans-serif`,cursor:`pointer`,letterSpacing:`0.02em`,transition:`all 0.2s ease`,boxShadow:`0 4px 20px rgba(232,160,32,0.3)`},secondaryCtas:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`8px`},actionIconBtn:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`7px`,background:`transparent`,border:`1px solid ${X.border}`,borderRadius:`10px`,padding:`10px 14px`,fontSize:`12.5px`,fontWeight:500,color:X.textMuted,fontFamily:`'Outfit', sans-serif`,cursor:`pointer`,transition:`all 0.15s`},trustRow:{display:`flex`,gap:`8px`,flexWrap:`wrap`},trustBadge:{fontSize:`10px`,fontWeight:600,letterSpacing:`0.08em`,color:X.textDim,border:`1px solid ${X.borderLight}`,borderRadius:`6px`,padding:`4px 10px`,background:`rgba(255,255,255,0.02)`},contentPan:{display:`flex`,flexDirection:`column`,minHeight:`500px`},tabBar:{display:`flex`,gap:`4px`,background:X.surface,border:`1px solid ${X.border}`,borderRadius:`14px`,padding:`5px`,marginBottom:`20px`},tabBtn:{flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`7px`,padding:`10px 16px`,borderRadius:`10px`,border:`none`,background:`transparent`,color:X.textMuted,fontSize:`13px`,fontWeight:500,fontFamily:`'Outfit', sans-serif`,cursor:`pointer`,transition:`all 0.2s ease`,position:`relative`},tabBtnActive:{background:`rgba(232,160,32,0.12)`,color:X.accent,fontWeight:600},tabPip:{position:`absolute`,bottom:`6px`,left:`50%`,transform:`translateX(-50%)`,width:`18px`,height:`2px`,background:X.accent,borderRadius:`1px`},tabContent:{background:X.surface,border:`1px solid ${X.border}`,borderRadius:`16px`,overflow:`hidden`,flex:1},specsWrap:{padding:`0`},tabIntro:{fontSize:`13px`,color:X.textMuted,lineHeight:1.6,padding:`20px 24px 0`,marginBottom:`12px`,fontWeight:300},specTable:{width:`100%`,borderCollapse:`collapse`},specRow:{borderBottom:`1px solid ${X.borderLight}`,transition:`background 0.15s`},specKey:{padding:`14px 24px`,fontSize:`12.5px`,fontWeight:500,color:X.textMuted,textTransform:`capitalize`,width:`42%`,verticalAlign:`middle`},specDot:{display:`inline-block`,width:`5px`,height:`5px`,borderRadius:`50%`,background:X.accentDark,marginRight:`10px`,verticalAlign:`middle`,opacity:.6},specVal:{padding:`14px 24px`,fontSize:`13.5px`,fontWeight:600,color:X.text,textAlign:`right`,verticalAlign:`middle`},emptyMsg:{padding:`60px 24px`,textAlign:`center`,color:X.textDim,fontSize:`14px`},featWrap:{padding:`0 0 8px`},featGrid:{padding:`8px 20px 16px`,display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`8px`},featCard:{display:`flex`,alignItems:`flex-start`,gap:`10px`,padding:`14px 16px`,background:`rgba(255,255,255,0.02)`,border:`1px solid ${X.borderLight}`,borderRadius:`12px`,cursor:`default`,transition:`background 0.15s`},featCheck:{flexShrink:0,width:`20px`,height:`20px`,borderRadius:`6px`,background:X.accentGlow,border:`1px solid rgba(232,160,32,0.25)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:X.accent,fontSize:`11px`,fontWeight:700,marginTop:`1px`},featText:{fontSize:`13px`,color:X.textMuted,lineHeight:1.55,fontWeight:400},supportWrap:{padding:`0 0 8px`},supportGrid:{padding:`8px 16px 16px`,display:`flex`,flexDirection:`column`,gap:`6px`},supportCard:{display:`flex`,alignItems:`center`,gap:`14px`,padding:`14px 16px`,background:`rgba(255,255,255,0.02)`,border:`1px solid ${X.borderLight}`,borderRadius:`12px`,cursor:`pointer`,transition:`background 0.15s`,textAlign:`left`,fontFamily:`'Outfit', sans-serif`,width:`100%`},supportIcon:{width:`40px`,height:`40px`,borderRadius:`10px`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`18px`,flexShrink:0},supportText:{flex:1,minWidth:0},supportLabel:{fontSize:`14px`,fontWeight:600,color:X.text,marginBottom:`2px`},supportSub:{fontSize:`12px`,color:X.textMuted},modalOverlay:{position:`fixed`,inset:0,zIndex:50,background:`rgba(0,0,0,0.6)`,backdropFilter:`blur(8px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,animation:`fadeIn 0.2s ease`},modalSheet:{width:`100%`,maxWidth:`480px`,background:`#1a2035`,border:`1px solid ${X.border}`,borderRadius:`20px`,padding:`28px`,animation:`slideUp 0.3s ease`,boxShadow:`0 24px 80px rgba(0,0,0,0.6)`},modalHeader:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,marginBottom:`24px`},modalTitle:{fontFamily:`'Syne', sans-serif`,fontSize:`1.4rem`,fontWeight:700,color:X.text},modalSub:{fontSize:`12px`,color:X.textMuted,marginTop:`4px`},modalClose:{width:`32px`,height:`32px`,borderRadius:`8px`,background:`rgba(255,255,255,0.06)`,border:`1px solid ${X.border}`,color:X.textMuted,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`12px`,transition:`all 0.15s`,fontFamily:`'Outfit', sans-serif`},formGroup:{marginBottom:`16px`},formLabel:{display:`block`,fontSize:`10px`,fontWeight:700,letterSpacing:`0.14em`,textTransform:`uppercase`,color:X.textDim,marginBottom:`7px`},formInput:{width:`100%`,background:`rgba(255,255,255,0.04)`,border:`1px solid ${X.border}`,borderRadius:`10px`,padding:`12px 14px`,fontSize:`13.5px`,color:X.text,fontFamily:`'Outfit', sans-serif`,transition:`all 0.15s`,display:`block`},successState:{textAlign:`center`,padding:`20px 0`,animation:`fadeIn 0.3s ease`},successIcon:{width:`56px`,height:`56px`,borderRadius:`16px`,background:`rgba(16,185,129,0.12)`,border:`1px solid rgba(16,185,129,0.25)`,color:`#10b981`,fontSize:`22px`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 16px`},successText:{fontSize:`17px`,fontWeight:700,color:X.text,fontFamily:`'Syne', sans-serif`,marginBottom:`6px`},successSub:{fontSize:`13px`,color:X.textMuted},notFound:{minHeight:`100vh`,background:X.bg,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`'Outfit', sans-serif`},notFoundCard:{textAlign:`center`,padding:`48px 40px`,background:X.surface,border:`1px solid ${X.border}`,borderRadius:`20px`},notFoundIcon:{fontSize:`32px`,marginBottom:`16px`},notFoundTitle:{fontFamily:`'Syne', sans-serif`,fontSize:`1.4rem`,fontWeight:700,color:X.text,marginBottom:`8px`},notFoundSub:{fontSize:`14px`,color:X.textMuted,marginBottom:`24px`}},Rs=[{id:`food-snacks`,name:`Food & Snacks Packaging`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`path`,{d:`M3 6h18M3 12h18M3 18h18`}),(0,G.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`18`,rx:`2`})]}),title:`Food & Snacks Packaging Solutions`,subtitle:`High-Speed Packaging for Namkeen, Chips & Processed Snacks`,description:`Purpose-built packaging systems for namkeen, extruded snacks, chips, biscuits, and ready-to-eat products. Our machines handle fragile products gently while maintaining output speeds of up to 120 packs/min with minimal product breakage.`,image:`https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=700&q=85`,subSolutions:[`Vertical Form Fill Seal (VFFS) Machines`,`Multi-head Combination Weigher Integration`,`Pillow Pouch & Gusseted Bag Packaging`,`Nitrogen Flushing Systems`,`Checkweigher & Metal Detector Lines`],features:[`Output: 20–120 packs/min depending on pack size`,`Servo-driven jaw system for precise seal integrity`,`Compatible with BOPP, Metalized, and Laminated films`,`PLC + HMI touchscreen with recipe storage`,`Quick changeover for multi-SKU production lines`],applications:[`Namkeen & Bhujia`,`Extruded Snacks & Puffed Rice`,`Potato Chips & Wafers`,`Biscuits & Cookies`,`Dry Fruits & Trail Mix`]},{id:`powder-spices`,name:`Powder & Spices Packaging`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`path`,{d:`M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z`}),(0,G.jsx)(`path`,{d:`M8 12h8M12 8v8`})]}),title:`Powder & Spices Packaging Solutions`,subtitle:`Accurate Filling & Dust-Proof Sealing for Free-Flowing Powders`,description:`Engineered for spices, masala blends, turmeric, chilli, flour, and other free-flowing or semi-free-flowing powders. Auger-based filling ensures precise grammage with ±0.5 g accuracy across all pack sizes.`,image:`https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=85`,subSolutions:[`Auger Filling Machines (50g–5kg)`,`Pouch Form Fill Seal for Powders`,`Sachet & Stick Pack Packaging Lines`,`Vacuum Sealing & Desiccant Insertion`,`Bulk Bag & Stand-Up Pouch Systems`],features:[`Auger filler accuracy: ±0.3–0.5 g across all pack weights`,`Dust-containment filling head — zero contamination`,`Compatible with moisture-barrier and kraft laminate films`,`Anti-bridging agitator for lumpy or sticky powders`,`Speed: 15–80 packs/min (size dependent)`],applications:[`Red Chilli & Turmeric Powder`,`Mixed Masala & Curry Blends`,`Wheat Flour & Gram Flour`,`Coffee & Tea Powder`,`Detergent & Chemical Powders`]},{id:`grains-seeds`,name:`Grains & Seeds Packaging`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`ellipse`,{cx:`12`,cy:`5`,rx:`4`,ry:`2`}),(0,G.jsx)(`path`,{d:`M6 12c0-3 2.5-5 6-5s6 2 6 5c0 4-3 7-6 7s-6-3-6-7z`})]}),title:`Grains & Seeds Packaging Solutions`,subtitle:`Volume & Weight-Based Packaging for Loose Granular Products`,description:`Robust filling systems for rice, dal, pulses, wheat, seeds, and coarse granular materials. Multi-head weighers combined with bagging systems ensure speed and weight consistency across 500g to 50kg pack formats.`,image:`https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&q=85`,subSolutions:[`10/14-Head Multihead Combination Weighers`,`Net-Weight Bagging Machines (500g–25kg)`,`Jaw-Sealing Pouch Packing for Pulses`,`FFS Bagging Lines with Conveyor Discharge`,`Stitching & Heat Seal for Woven PP Bags`],features:[`Weighing accuracy: ±1–2g on combination weighers`,`Handles granule sizes from 2mm to 30mm`,`Stainless steel contact parts — food-grade compliant`,`Auto bag-feed with empty-bag rejection system`,`Output: 500g–5kg packs at 40–80 bags/min`],applications:[`Basmati & Non-Basmati Rice`,`Toor, Moong & Chana Dal`,`Wheat, Jowar & Ragi`,`Sesame, Flaxseed & Sunflower Seeds`,`Fertilizer & Agricultural Granules`]},{id:`liquid-filling`,name:`Liquid Filling Solutions`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`path`,{d:`M12 2v6M8 8l4-6 4 6`}),(0,G.jsx)(`path`,{d:`M5 10h14l-1.5 10H6.5L5 10z`})]}),title:`Liquid Filling Solutions`,subtitle:`Volumetric & Gravity Filling for Edible Oils, Sauces & Beverages`,description:`Designed for thin-to-viscous liquids including edible oils, sauces, pickles, beverages, and industrial fluids. Our piston and flowmeter-based fillers deliver clean, drip-free filling with consistent volume accuracy.`,image:`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85`,subSolutions:[`Piston Filling Machines (50ml–5L)`,`Overflow & Gravity Fill Systems`,`Rotary Bottle Filling & Capping Lines`,`Pouch Filling & Sealing (Liquid Sachets)`,`Inline Bottle Washing, Filling & Labelling`],features:[`Volumetric accuracy: ±0.5% across all fill sizes`,`Drip-free nozzle design — no product wastage`,`Handles viscosity range: water to thick paste`,`SS 316 contact parts, CIP-compatible design`,`6–32 head configurations for high-speed lines`],applications:[`Edible Oils & Ghee`,`Tomato Ketchup & Sauces`,`Fruit Juices & Drinks`,`Pickle & Chutneys`,`Lubricants & Industrial Liquids`]},{id:`weighing-automation`,name:`Weighing & Filling Automation`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,G.jsx)(`path`,{d:`M16 7V5a4 4 0 0 0-8 0v2`}),(0,G.jsx)(`line`,{x1:`12`,y1:`12`,x2:`12`,y2:`16`})]}),title:`Weighing & Filling Automation`,subtitle:`Precision Dosing Systems & Automated Batch Weighing`,description:`Integrated weighing and dosing solutions for high-throughput production floors. From single-head electronic weighers to 14-head combination systems, Suntech delivers consistent batch accuracy that reduces give-away and rework.`,image:`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=85`,subSolutions:[`Multi-head Combination Weighers (10/14/16 Head)`,`Linear Weighers for Sticky Products`,`Automatic Batch Weighing Hoppers`,`Loss-in-Weight Feeders for Dosing Lines`,`Checkweighers with Auto Rejection`],features:[`Weighing speed: up to 120 weighings/min (14-head)`,`Accuracy: ±0.1g–1g depending on product type`,`IP65 washdown rated — suitable for wet environments`,`Modbus/RS485 integration with upstream VFFS machines`,`Automatic tare compensation for film weight variation`],applications:[`Snacks & Fried Products`,`Frozen Vegetables & Seafood`,`Hardware & Industrial Components`,`Confectionery & Candies`,`Fresh Produce & Cut Vegetables`]},{id:`packaging-lines`,name:`End-to-End Packaging Lines`,icon:(0,G.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,G.jsx)(`path`,{d:`M5 12H2l3-8 3 8H5zm14 0h-3l3-8 3 8h-3z`}),(0,G.jsx)(`path`,{d:`M5 12h14`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2`})]}),title:`End-to-End Packaging Line Solutions`,subtitle:`Turnkey Line Integration from Raw Material to Finished Carton`,description:`Complete packaging line design, supply, installation, and commissioning. Suntech integrates feeding, weighing, filling, sealing, labelling, coding, and carton packing into a single synchronized production line.`,image:`https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&q=85`,subSolutions:[`Fully Automatic Integrated Packaging Lines`,`Conveyor & Product Transfer Systems`,`Online Printing & Labelling (TTO / Inkjet / BOPP)`,`Carton Erecting, Packing & Sealing`,`SCADA-Ready Line Monitoring Panels`],features:[`Single-vendor turnkey supply — design to commissioning`,`Line speeds from 30 to 200+ packs/min`,`Modular design — expand capacity without full line replacement`,`CE-compliant electrical panels with safety interlocks`,`On-site installation, trial runs & operator training included`],applications:[`FMCG Snack & Namkeen Plants`,`Flour Mill Packaging Lines`,`Spice Processing & Packing Units`,`Edible Oil Bottling Plants`,`Agro-Processing & Seed Packaging`]}];function zs(){let[e,t]=(0,x.useState)(Rs[0]),[n,r]=(0,x.useState)(0),i=n=>{n.id!==e.id&&(t(n),r(e=>e+1))},a=Rs.findIndex(t=>t.id===e.id);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --blue-dark:  #111827;
          --blue-brand: #111827;
          --blue-light: #1f2937;
          --blue-pale:  rgba(17,24,39,0.05);
          --accent:     #f5a623;
          --white:      #ffffff;
          --off-white:  #f0f5fc;
          --text:       #1a2d4a;
          --text-muted: #6e8db5;
          --border:     rgba(17,24,39,0.12);
          --sidebar-w:  280px;
        }

        .sol-root {
          font-family: 'Barlow', sans-serif;
          background: var(--off-white);
          min-height: 100vh; color: var(--text);
        }

        /* ── HEADER ── */
        .sol-header {
          background: var(--blue-dark);
          padding: 56px 32px 48px;
          text-align: center; position: relative; overflow: hidden;
        }
        .sol-header::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none;
        }
        .sol-header-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

        .sol-header-badge {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
          color: var(--accent);
          background: rgba(245,166,35,0.12); border: 1.5px solid rgba(245,166,35,0.3);
          border-radius: 4px; padding: 5px 12px; margin-bottom: 18px;
          position: relative; z-index: 1;
        }
        .sol-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
        .sol-header-sub {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .3em; text-transform: uppercase;
          color: rgba(192,215,245,0.45); margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .sol-header-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(34px, 5vw, 60px); font-weight: 900;
          color: #fff; text-transform: uppercase;
          letter-spacing: -.01em; line-height: 1.0; margin-bottom: 14px;
          position: relative; z-index: 1;
        }
        .sol-header-title span { color: var(--blue-light); }
        .sol-header-desc {
          font-size: 14px; color: rgba(192,215,245,0.6);
          font-weight: 300; max-width: 520px; margin: 0 auto;
          line-height: 1.7; position: relative; z-index: 1;
        }

        /* ── LAYOUT ── */
        .sol-layout {
          display: grid;
          grid-template-columns: var(--sidebar-w) 1fr;
          min-height: calc(100vh - 220px);
        }
        @media (max-width: 860px) {
          .sol-layout { grid-template-columns: 1fr; }
        }

        /* ── SIDEBAR ── */
        .sol-sidebar {
          border-right: 1.5px solid var(--border);
          background: var(--white);
          padding: 28px 0;
          position: sticky; top: 0;
          height: 100vh; overflow-y: auto;
        }
        @media (max-width: 860px) {
          .sol-sidebar {
            position: static; height: auto;
            border-right: none; border-bottom: 1.5px solid var(--border);
            padding: 12px 0 0;
          }
        }
        .sol-sidebar-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .25em; text-transform: uppercase;
          color: var(--text-muted);
          padding: 0 20px 14px;
          border-bottom: 1px solid var(--border); margin-bottom: 6px;
        }
        .sol-nav {
          display: flex; flex-direction: column;
        }
        @media (max-width: 860px) {
          .sol-nav { flex-direction: row; overflow-x: auto; padding: 0 12px 4px; gap: 0; scrollbar-width: none; }
          .sol-nav::-webkit-scrollbar { display: none; }
        }

        .sol-nav-item {
          display: flex; align-items: center; gap: 12px;
          width: 100%; padding: 13px 20px;
          border: none; background: transparent; cursor: pointer;
          text-align: left; position: relative;
          border-left: 3px solid transparent;
          transition: background .2s, border-color .2s;
        }
        .sol-nav-item:hover { background: var(--blue-pale); }
        .sol-nav-item.active {
          background: var(--blue-pale); border-left-color: var(--blue-brand);
        }
        @media (max-width: 860px) {
          .sol-nav-item {
            flex-direction: column; gap: 4px; align-items: center;
            border-left: none; border-bottom: 2px solid transparent;
            padding: 8px 14px; flex-shrink: 0; white-space: nowrap;
          }
          .sol-nav-item.active { background: transparent; border-bottom-color: var(--blue-brand); }
        }

        .sol-nav-icon {
          color: var(--text-muted); flex-shrink: 0;
          transition: color .2s;
        }
        .sol-nav-item.active .sol-nav-icon, .sol-nav-item:hover .sol-nav-icon { color: var(--blue-brand); }

        .sol-nav-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px; font-weight: 700; color: var(--text);
          text-transform: uppercase; letter-spacing: .03em; line-height: 1.2;
          transition: color .2s;
        }
        .sol-nav-item.active .sol-nav-label { color: var(--blue-brand); }

        .sol-nav-arrow {
          margin-left: auto; color: var(--blue-brand);
          opacity: 0; transform: translateX(-4px);
          transition: all .2s; flex-shrink: 0;
        }
        .sol-nav-item.active .sol-nav-arrow { opacity: 1; transform: translateX(0); }
        @media (max-width: 860px) { .sol-nav-arrow { display: none; } }

        /* ── CONTENT ── */
        .sol-content {
          padding: 40px 48px 72px;
          background: var(--off-white); overflow-y: auto;
        }
        @media (max-width: 860px) { .sol-content { padding: 28px 16px 56px; } }

        @keyframes solFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sol-panel {
          animation: solFadeUp .35s cubic-bezier(.22,1,.36,1) both;
          max-width: 760px;
        }

        /* Counter */
        .sol-counter {
          display: flex; align-items: center; gap: 12px; margin-bottom: 18px;
        }
        .sol-counter-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: .1em;
          color: var(--blue-brand);
        }
        .sol-counter-line { flex: 1; max-width: 40px; height: 2px; background: var(--blue-brand); opacity: .4; border-radius: 2px; }
        .sol-counter-cat {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--text-muted);
        }

        /* Title */
        .sol-panel-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(26px, 4vw, 44px); font-weight: 900;
          color: var(--blue-dark); text-transform: uppercase;
          letter-spacing: -.01em; line-height: 1.0; margin-bottom: 6px;
        }
        .sol-panel-subtitle {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          color: var(--blue-brand); margin-bottom: 20px;
        }
        .sol-panel-desc {
          font-size: 14px; font-weight: 300; line-height: 1.85;
          color: var(--text-muted); margin-bottom: 28px;
          border-left: 3px solid var(--blue-brand);
          padding-left: 18px;
        }

        /* Image */
        .sol-img-wrap {
          height: 240px; border-radius: 10px; overflow: hidden;
          margin-bottom: 28px; background: var(--border);
          border: 1.5px solid var(--border); position: relative;
        }
        .sol-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
        .sol-img-wrap:hover .sol-img { transform: scale(1.04); }
        .sol-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,31,60,.4) 0%, transparent 50%);
          pointer-events: none;
        }
        .sol-img-tag {
          position: absolute; bottom: 14px; left: 14px;
          background: var(--blue-brand); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 3px;
        }

        /* Two-col grid */
        .sol-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        @media (max-width: 600px) { .sol-grid { grid-template-columns: 1fr; } }

        .sol-card {
          background: var(--white); border: 1.5px solid var(--border);
          border-radius: 8px; padding: 20px;
        }
        .sol-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue-brand); margin-bottom: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .sol-card-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }

        .sol-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sol-list-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; font-weight: 300; color: var(--text-muted); line-height: 1.5;
        }
        .sol-list-item::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--blue-brand); flex-shrink: 0; margin-top: 6px;
        }

        .sol-feat-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; font-weight: 300; color: var(--text-muted); line-height: 1.5;
        }
        .sol-feat-check {
          width: 16px; height: 16px; border-radius: 50%;
          background: var(--blue-brand); color: #fff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }

        /* Apps */
        .sol-apps { display: flex; flex-wrap: wrap; gap: 8px; }
        .sol-app-tag {
          padding: 5px 14px; background: var(--white);
          border: 1.5px solid var(--border); border-radius: 4px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
          color: var(--text-muted);
          transition: border-color .2s, color .2s, background .2s; cursor: default;
        }
        .sol-app-tag:hover {
          border-color: var(--blue-brand); color: var(--blue-brand); background: var(--blue-pale);
        }

        /* CTA row */
        .sol-cta-row {
          display: flex; gap: 12px; flex-wrap: wrap;
          margin-top: 28px; padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .sol-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; background: var(--blue-brand); color: #fff;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(18,81,163,0.3);
          transition: background .2s, transform .15s;
        }
        .sol-btn-primary:hover { background: var(--blue-light); transform: translateY(-2px); }
        .sol-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 20px; background: transparent; color: var(--text);
          border: 1.5px solid var(--border); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          transition: border-color .2s, color .2s;
        }
        .sol-btn-ghost:hover { border-color: var(--blue-brand); color: var(--blue-brand); }

        /* Progress */
        .sol-progress { display: flex; gap: 6px; margin-top: 32px; }
        .sol-prog-item {
          flex: 1; height: 3px; border-radius: 3px;
          background: var(--border); cursor: pointer;
          transition: background .3s;
        }
        .sol-prog-item.active { background: var(--blue-brand); }
        .sol-prog-item:hover:not(.active) { background: var(--text-muted); }
      `}),(0,G.jsxs)(`div`,{className:`sol-root`,children:[(0,G.jsxs)(`header`,{className:`sol-header`,children:[(0,G.jsx)(`div`,{className:`sol-header-bar`}),(0,G.jsxs)(`div`,{className:`sol-header-badge`,children:[(0,G.jsx)(`span`,{className:`sol-badge-dot`}),`Suntech Engineering Pvt. Ltd.`]}),(0,G.jsx)(`p`,{className:`sol-header-sub`,children:`Packaging Machinery Solutions`}),(0,G.jsxs)(`h1`,{className:`sol-header-title`,children:[`Industrial `,(0,G.jsx)(`span`,{children:`Packaging`}),(0,G.jsx)(`br`,{}),`Solutions`]}),(0,G.jsx)(`p`,{className:`sol-header-desc`,children:`Specialised packaging machinery for food, spices, grains, liquids, and automated production lines — engineered for Indian & global manufacturing standards.`})]}),(0,G.jsxs)(`div`,{className:`sol-layout`,children:[(0,G.jsxs)(`aside`,{className:`sol-sidebar`,children:[(0,G.jsx)(`p`,{className:`sol-sidebar-title`,children:`Solution Categories`}),(0,G.jsx)(`div`,{className:`sol-nav`,children:Rs.map(t=>(0,G.jsxs)(`button`,{className:`sol-nav-item${e.id===t.id?` active`:``}`,onClick:()=>i(t),onMouseEnter:()=>i(t),children:[(0,G.jsx)(`span`,{className:`sol-nav-icon`,children:t.icon}),(0,G.jsx)(`span`,{className:`sol-nav-label`,children:t.name}),(0,G.jsx)(`span`,{className:`sol-nav-arrow`,children:(0,G.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 14 14`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M3 7h8M7 3l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]},t.id))})]}),(0,G.jsx)(`main`,{className:`sol-content`,children:(0,G.jsxs)(`div`,{className:`sol-panel`,children:[(0,G.jsxs)(`div`,{className:`sol-counter`,children:[(0,G.jsxs)(`span`,{className:`sol-counter-num`,children:[String(a+1).padStart(2,`0`),` / `,String(Rs.length).padStart(2,`0`)]}),(0,G.jsx)(`span`,{className:`sol-counter-line`}),(0,G.jsx)(`span`,{className:`sol-counter-cat`,children:`Suntech Solutions`})]}),(0,G.jsx)(`h2`,{className:`sol-panel-title`,children:e.title}),(0,G.jsx)(`p`,{className:`sol-panel-subtitle`,children:e.subtitle}),(0,G.jsx)(`p`,{className:`sol-panel-desc`,children:e.description}),(0,G.jsxs)(`div`,{className:`sol-img-wrap`,children:[(0,G.jsx)(`img`,{src:e.image,alt:e.title,className:`sol-img`}),(0,G.jsx)(`div`,{className:`sol-img-overlay`}),(0,G.jsx)(`span`,{className:`sol-img-tag`,children:`Suntech Machinery`})]}),(0,G.jsxs)(`div`,{className:`sol-grid`,children:[(0,G.jsxs)(`div`,{className:`sol-card`,children:[(0,G.jsx)(`p`,{className:`sol-card-title`,children:`Sub-Solutions`}),(0,G.jsx)(`ul`,{className:`sol-list`,children:e.subSolutions.map((e,t)=>(0,G.jsx)(`li`,{className:`sol-list-item`,children:e},t))})]}),(0,G.jsxs)(`div`,{className:`sol-card`,children:[(0,G.jsx)(`p`,{className:`sol-card-title`,children:`Key Features`}),(0,G.jsx)(`ul`,{className:`sol-list`,children:e.features.map((e,t)=>(0,G.jsxs)(`li`,{className:`sol-feat-item`,children:[(0,G.jsx)(`span`,{className:`sol-feat-check`,children:(0,G.jsx)(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M1.5 4l2 2 3-3`,stroke:`white`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),e]},t))})]})]}),(0,G.jsxs)(`div`,{className:`sol-card`,style:{marginBottom:0},children:[(0,G.jsx)(`p`,{className:`sol-card-title`,children:`Industries & Applications`}),(0,G.jsx)(`div`,{className:`sol-apps`,children:e.applications.map((e,t)=>(0,G.jsx)(`span`,{className:`sol-app-tag`,children:e},t))})]}),(0,G.jsxs)(`div`,{className:`sol-cta-row`,children:[(0,G.jsxs)(`button`,{className:`sol-btn-primary`,children:[`Request Quotation`,(0,G.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 14 14`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M2 7H12M8 3l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,G.jsx)(`button`,{className:`sol-btn-ghost`,children:`View Brochure`}),(0,G.jsx)(`button`,{className:`sol-btn-ghost`,children:`Talk to an Engineer`})]}),(0,G.jsx)(`div`,{className:`sol-progress`,children:Rs.map((t,n)=>(0,G.jsx)(`div`,{className:`sol-prog-item${e.id===t.id?` active`:``}`,onClick:()=>i(t),title:t.name},t.id))})]},n)})]})]})]})}var Bs=[{title:`Namkeen Packaging Setup`,desc:`Complete automatic packaging line installed for a leading snack industry client — tailored for high-volume, airtight output.`,tag:`Snack Industry`,year:`2024`,stat:`1200 packs/hr`,num:`01`},{title:`Spices Packing Unit`,desc:`High-speed powder packing solution with precision filling mechanisms, ensuring zero spillage and consistent weight accuracy.`,tag:`Spice Industry`,year:`2023`,stat:`±0.5g precision`,num:`02`},{title:`Flour Packaging Line`,desc:`Multi-head weigher integration for a flour mill — fully automated from conveyor feed to sealed pouch output.`,tag:`Flour Mill`,year:`2024`,stat:`2 tonne/day`,num:`03`}];function Vs(){return(0,G.jsxs)(`main`,{style:{minHeight:`100vh`,background:`#f0f5fc`,fontFamily:`'Barlow', sans-serif`,margin:0,padding:0},children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-dark:  #111827;
          --blue-brand: #111827;
          --blue-light: #1f2937;
          --blue-pale:  rgba(17,24,39,0.05);
          --accent:     #f5a623;
          --white:      #ffffff;
          --off-white:  #f0f5fc;
          --text:       #1a2d4a;
          --text-muted: #6e8db5;
          --border:     rgba(255,255,255,0.07);
        }
        * { box-sizing: border-box; }

        .proj-hero {
          background: var(--blue-dark);
          padding: 72px 24px 56px;
          position: relative; overflow: hidden;
        }
        .proj-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none;
        }
        .proj-hero-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

        .proj-hero-inner { max-width: 1160px; margin: 0 auto; position: relative; z-index: 1; }

        .proj-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 20px;
        }
        .proj-eyebrow::before {
          content: ''; width: 28px; height: 2px;
          background: var(--accent); border-radius: 2px;
        }

        .proj-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(44px, 8vw, 80px);
          font-weight: 900; color: #fff;
          text-transform: uppercase; line-height: 1.0;
          letter-spacing: -.01em; margin-bottom: 16px;
        }
        .proj-title span { color: var(--blue-light); display: block; }

        .proj-subtitle {
          font-size: 15px; color: rgba(192,215,245,0.65);
          font-weight: 300; line-height: 1.7; max-width: 480px;
        }

        /* ── GRID ── */
        .proj-grid {
          padding: 48px 24px 64px;
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr; gap: 20px;
        }
        @media (min-width: 640px) {
          .proj-grid { grid-template-columns: 1fr 1fr; }
          .proj-card:first-child { grid-column: 1 / -1; }
        }
        @media (min-width: 900px) {
          .proj-grid { grid-template-columns: repeat(3, 1fr); }
          .proj-card:first-child { grid-column: auto; }
        }

        /* ── CARD ── */
        .proj-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 10px; padding: 28px 24px;
          position: relative; overflow: hidden;
          box-shadow: 0 2px 10px rgba(17,24,39,0.04);
          transition: box-shadow .3s, transform .3s, border-color .3s;
        }
        .proj-card:hover {
          box-shadow: 0 12px 40px rgba(17,24,39,0.12);
          transform: translateY(-4px);
          border-color: var(--blue-brand);
        }
        .proj-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--blue-brand);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform .3s ease;
        }
        .proj-card:hover::before { transform: scaleY(1); }

        .proj-card-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 20px;
        }
        .proj-card-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1px solid var(--border);
          border-radius: 3px; padding: 4px 10px;
        }
        .proj-card-tag::before {
          content: ''; width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }
        .proj-card-year {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; color: var(--text-muted);
          letter-spacing: .08em;
        }

        .proj-card-num {
          position: absolute; bottom: 20px; right: 20px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 56px; font-weight: 900;
          color: rgba(17,24,39,0.05); line-height: 1;
          pointer-events: none; user-select: none;
        }

        .proj-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(20px, 4vw, 26px); font-weight: 900;
          color: var(--blue-dark); margin-bottom: 12px;
          text-transform: uppercase; letter-spacing: .02em; line-height: 1.1;
        }
        .proj-card-desc {
          font-size: 13.5px; color: var(--text-muted);
          line-height: 1.75; margin-bottom: 20px; font-weight: 400;
        }
        .proj-card-stat {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px; font-weight: 800;
          color: var(--blue-brand);
          border-top: 1.5px solid var(--border);
          padding-top: 14px; width: 100%;
          letter-spacing: .04em; text-transform: uppercase;
        }
        .proj-card-stat::before {
          content: '↗';
          color: var(--accent); font-size: 16px;
        }

        /* ── FOOTER NOTE ── */
        .proj-footer {
          max-width: 1160px; margin: 0 auto;
          padding: 0 24px 48px;
          display: flex; align-items: center; gap: 14px;
        }
        .proj-footer-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase;
          color: var(--text-muted);
        }
        .proj-footer-line { flex: 1; height: 1px; background: var(--border); }
      `}),(0,G.jsxs)(`div`,{className:`proj-hero`,children:[(0,G.jsx)(`div`,{className:`proj-hero-bar`}),(0,G.jsxs)(`div`,{className:`proj-hero-inner`,children:[(0,G.jsx)(`div`,{className:`proj-eyebrow`,children:`Our Work`}),(0,G.jsxs)(`h1`,{className:`proj-title`,children:[`Featured`,(0,G.jsx)(`span`,{children:`Projects`})]}),(0,G.jsx)(`p`,{className:`proj-subtitle`,children:`Real installations. Proven results across India's food processing sector.`})]})]}),(0,G.jsx)(`div`,{className:`proj-grid`,children:Bs.map((e,t)=>(0,G.jsxs)(`div`,{className:`proj-card`,children:[(0,G.jsxs)(`div`,{className:`proj-card-top`,children:[(0,G.jsx)(`span`,{className:`proj-card-tag`,children:e.tag}),(0,G.jsx)(`span`,{className:`proj-card-year`,children:e.year})]}),(0,G.jsx)(`span`,{className:`proj-card-num`,children:e.num}),(0,G.jsx)(`h3`,{className:`proj-card-title`,children:e.title}),(0,G.jsx)(`p`,{className:`proj-card-desc`,children:e.desc}),(0,G.jsx)(`span`,{className:`proj-card-stat`,children:e.stat})]},t))}),(0,G.jsxs)(`div`,{className:`proj-footer`,children:[(0,G.jsx)(`div`,{className:`proj-footer-line`}),(0,G.jsxs)(`span`,{className:`proj-footer-text`,children:[Bs.length,` projects shown · More available on request`]})]})]})}function Hs(){return(0,G.jsxs)(`main`,{style:{minHeight:`100vh`,background:`#f0f5fc`,fontFamily:`'Barlow', sans-serif`,margin:0,padding:0},children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-dark:  #111827;
          --blue-brand: #111827;
          --blue-light: #1f2937;
          --blue-pale:  rgba(17,24,39,0.05);
          --accent:     #f5a623;
          --white:      #ffffff;
          --off-white:  #f0f5fc;
          --text:       #1a2d4a;
          --text-muted: #6e8db5;
          --border:     rgba(17,24,39,0.12);
        }
        * { box-sizing: border-box; }

        .bro-page {
          min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 80px 24px;
          position: relative;
        }

        .bro-hero {
          background: var(--blue-dark);
          border-radius: 12px;
          padding: 56px 48px;
          text-align: center;
          width: 100%; max-width: 560px;
          position: relative; overflow: hidden;
          box-shadow: 0 16px 56px rgba(18,81,163,0.2);
          margin-bottom: 24px;
        }
        .bro-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 36px 36px; pointer-events: none;
        }
        .bro-hero-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

        .bro-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--accent);
          background: rgba(245,166,35,0.12);
          border: 1.5px solid rgba(245,166,35,0.3);
          border-radius: 4px; padding: 5px 12px;
          margin-bottom: 20px; position: relative; z-index: 1;
        }
        .bro-eyebrow::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }

        .bro-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(44px, 10vw, 72px);
          font-weight: 900; color: #fff;
          text-transform: uppercase; letter-spacing: -.01em;
          line-height: 1.0; margin-bottom: 8px;
          position: relative; z-index: 1;
        }
        .bro-title span { color: var(--blue-light); display: block; }

        .bro-sub {
          font-size: 14px; color: rgba(192,215,245,0.65);
          font-weight: 300; line-height: 1.75;
          max-width: 360px; margin: 0 auto 36px;
          position: relative; z-index: 1;
        }

        .bro-download-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: var(--accent); color: var(--blue-dark);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 15px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
          padding: 16px 36px; border-radius: 4px; border: none; cursor: pointer;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(245,166,35,0.35);
          transition: opacity .2s, transform .15s;
          position: relative; z-index: 1;
        }
        .bro-download-btn:hover { opacity: .92; transform: translateY(-2px); }
        .bro-download-icon { transition: transform .3s; }
        .bro-download-btn:hover .bro-download-icon { transform: translateY(3px); }

        /* ── PREVIEW CARD ── */
        .bro-preview {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          padding: 28px 28px;
          width: 100%; max-width: 560px;
          position: relative;
          box-shadow: 0 4px 20px rgba(18,81,163,0.06);
        }
        .bro-preview-badge {
          position: absolute; top: -12px; right: 20px;
          background: var(--blue-brand); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
          padding: 4px 12px; border-radius: 3px;
        }
        .bro-preview-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px; font-weight: 900;
          color: var(--blue-dark); text-transform: uppercase;
          letter-spacing: .03em; margin-bottom: 4px;
        }
        .bro-preview-meta {
          font-size: 13px; color: var(--text-muted); margin-bottom: 20px;
          font-weight: 400;
        }
        .bro-includes {
          border-top: 1px solid var(--border);
          padding-top: 16px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .bro-inc-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: var(--text);
        }
        .bro-inc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue-brand); flex-shrink: 0;
        }

        .bro-footnote {
          margin-top: 24px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          color: var(--text-muted); text-align: center;
        }
      `}),(0,G.jsxs)(`div`,{className:`bro-page`,children:[(0,G.jsxs)(`div`,{className:`bro-hero`,children:[(0,G.jsx)(`div`,{className:`bro-hero-top`}),(0,G.jsx)(`div`,{className:`bro-eyebrow`,children:`Resources`}),(0,G.jsxs)(`h1`,{className:`bro-title`,children:[`Our`,(0,G.jsx)(`span`,{children:`Brochure`})]}),(0,G.jsx)(`p`,{className:`bro-sub`,children:`A complete overview of our packaging machines, technical specs, and installation capabilities.`}),(0,G.jsxs)(`a`,{href:`/suntech_brochure.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`bro-download-btn`,children:[(0,G.jsx)(`svg`,{className:`bro-download-icon`,viewBox:`0 0 20 20`,fill:`none`,width:`18`,height:`18`,children:(0,G.jsx)(`path`,{d:`M10 3v10M10 13l-3-3M10 13l3-3M3 16h14`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Download Brochure`]})]}),(0,G.jsxs)(`div`,{className:`bro-preview`,children:[(0,G.jsx)(`div`,{className:`bro-preview-badge`,children:`PDF`}),(0,G.jsx)(`div`,{className:`bro-preview-title`,children:`Company Brochure 2024`}),(0,G.jsx)(`div`,{className:`bro-preview-meta`,children:`Packaging Machinery — Complete Product Catalogue`}),(0,G.jsx)(`div`,{className:`bro-includes`,children:[`Machine specifications & models`,`Technical drawings & dimensions`,`Pricing tiers & delivery terms`,`After-sales support details`].map((e,t)=>(0,G.jsxs)(`div`,{className:`bro-inc-item`,children:[(0,G.jsx)(`div`,{className:`bro-inc-dot`}),e]},t))})]}),(0,G.jsx)(`p`,{className:`bro-footnote`,children:`— Available in English & Hindi upon request`})]})]})}var Us=[{q:`What is delivery time?`,a:`2–4 weeks depending on machine type and customization requirements. Express delivery options are available on request.`},{q:`Do you provide customization?`,a:`Yes — every machine can be tailored to your specific production needs, from hopper size to sealing type and output speed.`},{q:`Do you provide service?`,a:`Absolutely. We offer full post-installation support, scheduled maintenance, and on-site assistance across India.`},{q:`What industries do you serve?`,a:`We cater to namkeen, spices, grains, flour, rice, and a wide range of dry food packaging industries.`}];function Ws(){let[e,t]=(0,x.useState)(null);return(0,G.jsxs)(`main`,{style:{minHeight:`100vh`,background:`#f0f5fc`,fontFamily:`'Barlow', sans-serif`,margin:0,padding:0},children:[(0,G.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-dark:  #111827;
          --blue-brand: #111827;
          --blue-light: #1f2937;
          --blue-pale:  rgba(17,24,39,0.05);
          --accent:     #f5a623;
          --white:      #ffffff;
          --off-white:  #f0f5fc;
          --text:       #1a2d4a;
          --text-muted: #6e8db5;
          --border:     rgba(17,24,39,0.12);
        }
        * { box-sizing: border-box; }

        .faq-hero {
          background: var(--blue-dark);
          padding: 72px 24px 56px;
          position: relative; overflow: hidden;
        }
        .faq-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none;
        }
        .faq-hero-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }
        .faq-hero-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }

        .faq-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 18px;
        }
        .faq-eyebrow::before {
          content: ''; width: 28px; height: 2px;
          background: var(--accent); border-radius: 2px;
        }
        .faq-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(36px, 7vw, 64px);
          font-weight: 900; color: #fff;
          text-transform: uppercase; letter-spacing: -.01em; line-height: 1.0;
          margin-bottom: 14px;
        }
        .faq-title span { color: var(--blue-light); display: block; }
        .faq-subtitle {
          font-size: 15px; color: rgba(192,215,245,0.65);
          font-weight: 300; line-height: 1.7;
        }

        /* ── LIST ── */
        .faq-list {
          padding: 48px 24px 32px;
          max-width: 760px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 0;
        }

        .faq-item {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 8px; overflow: hidden;
          margin-bottom: 12px;
          box-shadow: 0 2px 10px rgba(18,81,163,0.04);
          transition: border-color .25s, box-shadow .25s;
        }
        .faq-item.is-open {
          border-color: var(--blue-brand);
          box-shadow: 0 6px 24px rgba(18,81,163,0.1);
        }

        .faq-question {
          width: 100%; background: none; border: none;
          padding: 22px 24px;
          display: flex; justify-content: space-between; align-items: center;
          cursor: pointer; text-align: left; gap: 16px;
        }
        .faq-q-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(17px, 3.5vw, 21px); font-weight: 800;
          color: var(--blue-dark); text-transform: uppercase;
          letter-spacing: .03em; line-height: 1.2; flex: 1;
        }
        .faq-item.is-open .faq-q-text { color: var(--blue-brand); }

        .faq-icon {
          width: 32px; height: 32px; border-radius: 6px;
          border: 1.5px solid var(--border);
          background: var(--off-white);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all .25s;
          color: var(--text-muted); font-size: 18px;
          font-family: 'Barlow', sans-serif; font-weight: 300;
        }
        .faq-icon.open {
          background: var(--blue-brand); border-color: var(--blue-brand);
          color: #fff; transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0; overflow: hidden;
          transition: max-height .4s ease, padding .3s ease;
        }
        .faq-answer.open {
          max-height: 220px; padding-bottom: 24px;
        }
        .faq-a-text {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.8; font-weight: 400;
          border-left: 3px solid var(--blue-brand);
          padding: 0 24px 0 20px; margin-left: 24px;
        }

        /* ── FOOTER CTA ── */
        .faq-footer {
          max-width: 760px; margin: 0 auto;
          padding: 16px 24px 56px;
        }
        .faq-footer-card {
          background: var(--blue-dark);
          border-radius: 10px; padding: 32px 28px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          position: relative; overflow: hidden;
        }
        .faq-footer-card::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .faq-footer-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }
        .faq-footer-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px; font-weight: 800; color: #fff;
          text-transform: uppercase; letter-spacing: .02em;
          position: relative; z-index: 1;
        }
        .faq-footer-text span { color: var(--accent); }
        .faq-footer-sub {
          font-size: 13px; color: rgba(192,215,245,0.6);
          font-weight: 300; margin-top: 4px;
          position: relative; z-index: 1;
        }
        .faq-contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue-brand); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          padding: 12px 24px; border-radius: 4px; border: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          transition: background .2s; position: relative; z-index: 1;
        }
        .faq-contact-btn:hover { background: var(--blue-light); }
      `}),(0,G.jsxs)(`div`,{className:`faq-hero`,children:[(0,G.jsx)(`div`,{className:`faq-hero-bar`}),(0,G.jsxs)(`div`,{className:`faq-hero-inner`,children:[(0,G.jsx)(`div`,{className:`faq-eyebrow`,children:`Support & Information`}),(0,G.jsxs)(`h1`,{className:`faq-title`,children:[`Frequently`,(0,G.jsx)(`span`,{children:`Asked Questions`})]}),(0,G.jsx)(`p`,{className:`faq-subtitle`,children:`Everything you need to know about our packaging solutions.`})]})]}),(0,G.jsx)(`div`,{className:`faq-list`,children:Us.map((n,r)=>(0,G.jsxs)(`div`,{className:`faq-item${e===r?` is-open`:``}`,children:[(0,G.jsxs)(`button`,{className:`faq-question`,onClick:()=>t(e===r?null:r),"aria-expanded":e===r,children:[(0,G.jsx)(`span`,{className:`faq-q-text`,children:n.q}),(0,G.jsx)(`span`,{className:`faq-icon${e===r?` open`:``}`,children:`+`})]}),(0,G.jsx)(`div`,{className:`faq-answer${e===r?` open`:``}`,children:(0,G.jsx)(`p`,{className:`faq-a-text`,children:n.a})})]},r))}),(0,G.jsx)(`div`,{className:`faq-footer`,children:(0,G.jsxs)(`div`,{className:`faq-footer-card`,children:[(0,G.jsx)(`div`,{className:`faq-footer-top`}),(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`div`,{className:`faq-footer-text`,children:[`Still have `,(0,G.jsx)(`span`,{children:`questions?`})]}),(0,G.jsx)(`div`,{className:`faq-footer-sub`,children:`Our team is happy to walk you through every detail before you invest.`})]}),(0,G.jsx)(`button`,{className:`faq-contact-btn`,children:`Contact Our Team →`})]})})]})}var Gs={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ks=x.createContext&&x.createContext(Gs),qs=[`attr`,`size`,`title`];function Js(e,t){if(e==null)return{};var n,r,i=Ys(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ys(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(null,arguments)}function Zs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Qs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Zs(Object(n),!0).forEach(function(t){$s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zs(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $s(e,t,n){return(t=ec(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ec(e){var t=tc(e,`string`);return typeof t==`symbol`?t:t+``}function tc(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function nc(e){return e&&e.map((e,t)=>x.createElement(e.tag,Qs({key:t},e.attr),nc(e.child)))}function rc(e){return t=>x.createElement(ic,Xs({attr:Qs({},e.attr)},t),nc(e.child))}function ic(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Js(e,qs),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),x.createElement(`svg`,Xs({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Qs(Qs({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&x.createElement(`title`,null,i),e.children)};return Ks===void 0?t(Gs):x.createElement(Ks.Consumer,null,e=>t(e))}function ac(e){return rc({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`},child:[]}]})(e)}function oc(){return(0,G.jsx)(`a`,{href:`https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20inquire%20about%20your%20machines`,target:`_blank`,rel:`noopener noreferrer`,className:`fixed bottom-6 left-6 z-50`,children:(0,G.jsx)(`div`,{className:`bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300`,children:(0,G.jsx)(ac,{size:28})})})}var sc=()=>(0,G.jsx)(`div`,{className:`text-white text-3xl text-center mt-20`,children:`Services Page`}),cc=()=>(0,G.jsx)(`div`,{className:`text-white text-3xl text-center mt-20`,children:`404 – Page Not Found`});function lc(){let[e,t]=(0,x.useState)(!0);return(0,G.jsxs)(G.Fragment,{children:[e&&(0,G.jsx)(nr,{onFinish:()=>t(!1)}),!e&&(0,G.jsxs)(`div`,{className:`bg-[#111827] min-h-screen flex flex-col`,children:[(0,G.jsx)(Kn,{}),(0,G.jsx)(`div`,{className:`pt-20 flex-1`,children:(0,G.jsxs)(At,{children:[(0,G.jsx)(z,{path:`/`,element:(0,G.jsx)(ws,{})}),(0,G.jsx)(z,{path:`/about`,element:(0,G.jsx)(Ns,{})}),(0,G.jsx)(z,{path:`/services`,element:(0,G.jsx)(sc,{})}),(0,G.jsx)(z,{path:`/solutions`,element:(0,G.jsx)(zs,{})}),(0,G.jsx)(z,{path:`/media`,element:(0,G.jsx)(fr,{})}),(0,G.jsx)(z,{path:`/media/videos`,element:(0,G.jsx)(gr,{})}),(0,G.jsx)(z,{path:`/contact`,element:(0,G.jsx)(bo,{})}),(0,G.jsx)(z,{path:`/machines/:type`,element:(0,G.jsx)(Is,{})}),(0,G.jsx)(z,{path:`/product/:name`,element:(0,G.jsx)(Ls,{})}),(0,G.jsx)(z,{path:`/applications`,element:(0,G.jsx)(lr,{})}),(0,G.jsx)(z,{path:`/projects`,element:(0,G.jsx)(Vs,{})}),(0,G.jsx)(z,{path:`/brochure`,element:(0,G.jsx)(Hs,{})}),(0,G.jsx)(z,{path:`/faq`,element:(0,G.jsx)(Ws,{})}),(0,G.jsx)(z,{path:`*`,element:(0,G.jsx)(cc,{})})]})}),(0,G.jsx)(Zn,{}),(0,G.jsx)(oc,{})]})]})}zn.createRoot(document.getElementById(`root`)).render((0,G.jsx)(x.StrictMode,{children:(0,G.jsx)(gn,{basename:`/suntech`,children:(0,G.jsx)(lc,{})})}));