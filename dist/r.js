parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FoEN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CODE=void 0;var e=""+Math.random();exports.CODE=e;
},{}],"aRuQ":[function(require,module,exports) {
"use strict";function e(){var r=d(["",""]);return e=function(){return r},r}function r(){var e=d(["?",""]);return r=function(){return e},e}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(){var e=d([">",""]);return n=function(){return e},e}function o(){var e=d(["?",""]);return o=function(){return e},e}function i(){var e=d(["None"]);return i=function(){return e},e}function a(){var e=d(["None"]);return a=function(){return e},e}function u(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=y(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw i}}}}function c(e){return p(e)||s(e)||y(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,r){if(e){if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,r):void 0}}function s(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function p(e){if(Array.isArray(e))return l(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function v(){var e=d(["None"]);return v=function(){return e},e}function d(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.T=g;var h=[Symbol,Boolean,Number,String,Object,Set,Map,WeakMap,WeakSet,Uint8Array,Uint16Array,Uint32Array,Float32Array,Float64Array,Int8Array,Int16Array,Int32Array,Uint8ClampedArray,Node,NodeList,Element,HTMLElement,Blob,ArrayBuffer,FileList,Text,HTMLDocument,Document,DocumentFragment,Error,File,Event,EventTarget,URL],m=!1,w=!0,b=function(e){return null==e||null==e},T=new Map;function g(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=t.reduce(function(r,t,n){return r+t+e[n+1]},e[0]);if(!T.has(o))throw new TypeError("Cannot use type ".concat(o," before it is defined."));return T.get(o).type}function S(e,r){return E(e,r,{partial:!0})}function E(e,r){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).partial,n=void 0!==t&&t;V(e),q(e);var o=e.name,i=T.get(o),a=i.spec,f=i.kind,y=i.help,s=i.verify,p=i.verifiers,l=i.sealed,d=a?F(a).sort():[],h=new Set(d),m=[];switch(f){case"def":var w=!0;if(a){var S=n?F(r,h):d;w=!b(r)&&S.every(function(e){var t=j(r,e,function(){return O(j(a,e).resolved,g(v()))}),n=t.resolved,i=t.errors;if(m.push.apply(m,c(i)),i.length)return!1;var u=j(a,e).resolved;if(!(u&&u instanceof D))return m.push({error:"Key path '".concat(e,"' is not present in the spec for type '").concat(o,"'")}),!1;var f=E(u,n),y=f.valid,s=f.errors;return m.push.apply(m,c(s)),y})}var A=!0;if(n&&!a&&s)throw new TypeError("Type checking with option 'partial' is not a valid option for types that only use a verify function but have no spec");if(s)try{if(!(A=s(r))){if(p)throw{error:"Type ".concat(o," value '").concat(JSON.stringify(r),"' violated at least 1 verify function in:\n").concat(p.map(function(e){return"\t"+(e.help||"")+" ("+e.verify.toString()+")"}).join("\n"))};if(e.isSumType)throw{error:"Value '".concat(JSON.stringify(r),"' did not match any of: ").concat(c(e.types.keys()).map(function(e){return e.name})),verify:s,verifiers:p};var k="";throw y&&(k="Help: ".concat(y,". ")),{error:"".concat(k,"Type ").concat(o," Value '").concat(JSON.stringify(r),"' violated verify function in: ").concat(s.toString())}}}catch(z){m.push(z),A=!1}var N=!0;if(l&&a){var C=d,I=F(r,h).sort();if(!(N=I.join(",")==C.join(",")))if(I.length<C.length)N=!0;else{var P,W=[],L=new Set(C),M=u(I);try{for(M.s();!(P=M.n()).done;){var U=P.value;L.has(U)||W.push({error:"Key path '".concat(U,"' is not in the spec for type ").concat(o)})}}catch(R){M.e(R)}finally{M.f()}W.length&&m.push.apply(m,W)}}return{valid:w&&A&&N,errors:m,partial:n};case"defCollection":var x=E(a.container,r),B=x.valid,H=x.errors,J=!0,K=!0;if(m.push.apply(m,c(H)),n)throw new TypeError("Type checking with option 'partial' is not a valid option for Collection types");if(B&&(J=c(r).every(function(e){var r=E(a.member,e),t=r.valid,n=r.errors;return m.push.apply(m,c(n)),t})),s)try{K=s(r)}catch(z){m.push(z),K=!1}return{valid:B&&J&&K,errors:m};default:throw new TypeError("Checking for type kind ".concat(f," is not yet implemented."))}}function A(){return E.apply(void 0,arguments).valid}function j(e,r,t){if(b(e))throw new TypeError("Lookup requires a non-unset object.");if(!r)throw new TypeError("keyPath must not be empty");for(var n=r.split(/\./g),o=[],i=[],a=e;n.length;){var u=n.shift();if(a=a[u],o.push(u),null==a){n.length?i.push({error:"Lookup on key path '".concat(r,"' failed at '")+o.join(".")+"' when ".concat(a," was found at '").concat(u,"'.")}):t&&t()?a=void 0:i.push({error:"Resolution on key path '".concat(r,"' failed")+"when ".concat(a," was found at '").concat(u,"' and the Type of this")+"key's value cannot be None."});break}}return{resolved:a,errors:i}}function O(e,r){return V(e),q(e),V(r),q(r),e===r||(!(!e.isSumType||!e.types.has(r))||(!(!r.isSumType||!r.types.has(e))||(!(!e.name.startsWith("?")||r!=g(a()))||(!(!r.name.startsWith("?")||e!=g(i()))||((e.name.startsWith(">")||r.name.startsWith(">"))&&console.error(new Error("Check type match has not been implemented for derived//sub types yet.")),!1)))))}function k(e){return g(o(),e.name)}function N(e){return g(n(),e.name)}function C(e,r){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.verify,i=void 0===o?void 0:o,a=n.help,u=void 0===a?"":a,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(V(e),q(e),i||(i=function(){return!0}),e.native){t=[{help:u,verify:i}],i=function(r){return r instanceof e.native};var f="Needs to be of type ".concat(e.native.name,". ").concat(u||"");t.push({help:f,verify:i})}return H("".concat(c,">").concat(e.name),r,{verify:i,help:u,verifiers:t})}function I(e){if(!e)throw new TypeError("Type must be named.");W(e);for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=new Set(t);return H(e,null,{verify:function(e){return o.has(e)},help:"Value of Enum type ".concat(e," must be one of ").concat(t.join(","))})}function P(e){return T.has(e)}function W(e){if(P(e))throw new TypeError("Type ".concat(e," cannot be redefined."))}function F(e,r){var n=!r;return function e(o,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";var u=Object.getOwnPropertyNames(o);var f=u.map(function(e){return a+(a.length?".":"")+e});u.forEach(function(u,c){var y=o[u];if(n)if(y instanceof D)i.add(f[c]);else{if("object"!=t(y))throw new TypeError("Spec cannot contain leaf values that are not valid Types");if(Array.isArray(y))throw m&&console.warn({o:o,v:y,keyPathSet:i,lastLevel:a}),new TypeError("We don't support Types that use Arrays as structure, just yet.");e(y,i,f[c])}else r.has(f[c])?i.add(f[c]):"object"==t(y)?Array.isArray(y)?y.forEach(function(r,t){return e(r,i,f[c]+"."+t)}):e(y,i,f[c]):i.add(f[c])});return c(i)}(e,new Set,"")}function L(e){V(e);var r=e.name;return g.def("?".concat(r),null,{verify:function(r){return _(r)||g.check(e,r)}})}function M(e){try{return L(e)}catch(t){}return g(r(),e.name)}function U(){return A.apply(void 0,arguments)}function x(e,r){var t=r.container,n=r.member,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.sealed,a=void 0===i?w:i,u=o.verify,c=void 0===u?void 0:u;if(!e)throw new TypeError("Type must be named.");if(!t||!n)throw new TypeError("Type must be specified.");W(e);var f=new D(e),y={kind:"defCollection",spec:{container:t,member:n},verify:c,sealed:a,type:f};return T.set(e,y),f}function B(e,r){var t=r.pattern;if(!e)throw new TypeError("Type must be named.");if(!t)throw new TypeError("Type must be specified.");var n={};t.forEach(function(e,r){return n[r]=e});var o=new D(e),i={kind:"def",spec:n,type:o};return T.set(e,i),o}function D(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(this instanceof D?this.constructor:void 0))throw new TypeError("Type with new only.");if(Object.defineProperty(this,"name",{get:function(){return e}}),this.typeName=e,r.types){var t=r.types,n=new Set(t);Object.defineProperty(this,"isSumType",{get:function(){return!0}}),Object.defineProperty(this,"types",{get:function(){return n}})}if(r.native){var o=r.native;Object.defineProperty(this,"native",{get:function(){return o}})}}function H(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.help,o=void 0===n?"":n,i=t.verify,a=void 0===i?void 0:i,u=t.sealed,c=void 0===u?void 0:u,f=t.types,y=void 0===f?void 0:f,s=t.verifiers,p=void 0===s?void 0:s,l=t.native,v=void 0===l?void 0:l;if(!e)throw new TypeError("Type must be named.");if(W(e),e.startsWith("?")){if(r)throw new TypeError("Option type can not have a spec.");if(!a(null))throw new TypeError("Option type must be OK to be unset.")}void 0===c&&(c=!0);var d=new D(e,{types:y,native:v}),h={spec:r,kind:"def",help:o,verify:a,verifiers:p,sealed:c,types:y,native:v,type:d};return T.set(e,h),d}function J(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return g.def(e,null,{types:t,verify:function(e){return t.some(function(r){return A(r,e)})}})}function K(e,r){V(e),q(e);var t=E(e,r),n=t.valid,o=t.errors;if(!n)throw new TypeError("Type ".concat(e," requested, but item is not of that type: ").concat(o.join(", ")))}function V(e){if(!(e instanceof D))throw new TypeError("Type must be a valid Type object.")}function q(e){var r=G(e);if(!P(r))throw new TypeError("Type must exist. Type ".concat(r," has not been defined."))}function z(){return E.apply(void 0,arguments).errors}function R(){h.forEach(function(e){return H(G(e),null,{native:e,verify:function(r){return G(r.constructor)===G(e)}})}),h.forEach(function(r){return C(g(e(),G(r)))})}function $(){g.def("Any",null,{verify:function(){return!0}}),g.def("Some",null,{verify:function(e){return!_(e)}}),g.def("None",null,{verify:function(e){return _(e)}}),g.def("Function",null,{verify:function(e){return e instanceof Function}}),g.def("Integer",null,{verify:function(e){return Number.isInteger(e)}}),g.def("Array",null,{verify:function(e){return Array.isArray(e)}}),g.def("Iterable",null,{verify:function(e){return e[Symbol.iterator]instanceof Function}})}function _(e){return null==e}function G(e){if(e&&e.name)return e.name;var r=Object.prototype.toString.call(e).replace(/\[object |\]/g,"");return r.endsWith("Constructor")?r.replace(/Constructor$/,""):r}g.def=H,g.check=A,g.sub=N,g.verify=U,g.validate=E,g.partialMatch=S,g.defEnum=I,g.defSub=C,g.defTuple=B,g.defCollection=x,g.defOr=J,g.option=k,g.defOption=L,g.maybe=M,g.guard=K,g.errors=z,m&&(self.T=g,self.typeCache=T),g[Symbol.for("jtype-system.typeCache")]=T,$(),R(),D.prototype.toString=function(){return"".concat(this.typeName," Type")};
},{}],"eFF2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Types=exports.SSR=exports.BS=exports.TSBrutalArray=exports.TSBrutalObject=exports.TBrutalArray=exports.TBrutalObject=exports.TBrutalLikeObject=exports.TMarkupAttrObject=exports.TMarkupObject=exports.TEmptyArray=exports.TFuncArray=exports.THandlers=exports.TKey=exports.default=void 0;var r=require("./t.js"),t=require("./common.js");function n(){var r=H(["SBrutalObject"]);return n=function(){return r},r}function e(){var r=H(["Array"]);return e=function(){return r},r}function u(){var r=H(["String"]);return u=function(){return r},r}function o(){var r=H(["BrutalObject"]);return o=function(){return r},r}function c(){var r=H(["Array"]);return c=function(){return r},r}function a(){var r=H(["Array"]);return a=function(){return r},r}function i(){var r=H(["Function"]);return i=function(){return r},r}function f(){var r=H(["Function"]);return f=function(){return r},r}function T(){var r=H(["Array"]);return T=function(){return r},r}function v(){var r=H(["Array"]);return v=function(){return r},r}function s(){var r=H(["String"]);return s=function(){return r},r}function y(){var r=H(["Array"]);return y=function(){return r},r}function p(){var r=H(["Function"]);return p=function(){return r},r}function l(){var r=H(["Function"]);return l=function(){return r},r}function d(){var r=H(["Array"]);return d=function(){return r},r}function x(){var r=H(["Array"]);return x=function(){return r},r}function b(){var r=H(["String"]);return b=function(){return r},r}function A(){var r=H(["String"]);return A=function(){return r},r}function O(){var r=H(["String"]);return O=function(){return r},r}function j(){var r=H(["String"]);return j=function(){return r},r}function S(){var r=H(["Array"]);return S=function(){return r},r}function B(){var r=H(["Array"]);return B=function(){return r},r}function k(){var r=H(["String"]);return k=function(){return r},r}function m(){var r=H(["String"]);return m=function(){return r},r}function g(){var r=H(["Function"]);return g=function(){return r},r}function F(){var r=H(["Array"]);return F=function(){return r},r}function M(){var r=H(["Function"]);return M=function(){return r},r}function C(){var r=H(["String"]);return C=function(){return r},r}function E(){var r=H(["Object"]);return E=function(){return r},r}function K(){var r=H(["Number"]);return K=function(){return r},r}function h(){var r=H(["String"]);return h=function(){return r},r}function H(r,t){return t||(t=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(t)}}))}var L=r.T;exports.default=L;var D=r.T.def("Key",{key:r.T.defOr("ValidKey",(0,r.T)(h()),(0,r.T)(K()))});exports.TKey=D;var R=r.T.def("Handlers",null,{verify:function(t){if(!r.T.check((0,r.T)(E()),t))return!1;var n=Object.keys(t),e=Object.values(t),u=n.every(function(t){return r.T.check((0,r.T)(C()),t)}),o=e.every(function(t){return r.T.check((0,r.T)(M()),t)});return u&&o}});exports.THandlers=R;var q=r.T.defCollection("FuncArray",{container:(0,r.T)(F()),member:(0,r.T)(g())});exports.TFuncArray=q;var z=r.T.def("EmptyArray",null,{verify:function(r){return Array.isArray(r)&&0==r.length}});exports.TEmptyArray=z;var P=r.T.def("MarkupObject",{type:(0,r.T)(m()),code:(0,r.T)(k()),nodes:(0,r.T)(B()),externals:(0,r.T)(S())},{verify:function(r){return"MarkupObject"==r.type&&r.code==t.CODE}});exports.TMarkupObject=P;var _=r.T.def("MarkupAttrObject",{type:(0,r.T)(j()),code:(0,r.T)(O()),str:(0,r.T)(A())},{verify:function(r){return"MarkupAttrObject"==r.type&&r.code==t.CODE}});exports.TMarkupAttrObject=_;var w=r.T.def("BrutalLikeObject",{code:(0,r.T)(b()),externals:(0,r.T)(x()),nodes:(0,r.T)(d()),to:(0,r.T)(l()),update:(0,r.T)(p()),v:(0,r.T)(y())});exports.TBrutalLikeObject=w;var N=r.T.def("BrutalObject",{code:(0,r.T)(s()),externals:(0,r.T)(v()),nodes:(0,r.T)(T()),to:(0,r.T)(f()),update:(0,r.T)(i()),v:(0,r.T)(a())},{verify:function(r){return W(r)}});exports.TBrutalObject=N;var V=r.T.defCollection("BrutalArray",{container:(0,r.T)(c()),member:(0,r.T)(o())});exports.TBrutalArray=V;var G=r.T.def("SBrutalObject",{str:(0,r.T)(u()),handlers:R});exports.TSBrutalObject=G;var I=r.T.defCollection("SBrutalArray",{container:(0,r.T)(e()),member:(0,r.T)(n())});exports.TSBrutalArray=I;var J={TKey:D,THandlers:R,TFuncArray:q,TBrutalObject:N,TBrutalLikeObject:w,TBrutalArray:V};exports.BS=J;var Q={TKey:D,THandlers:R,TFuncArray:q,TSBrutalObject:G,TSBrutalArray:I};exports.SSR=Q;var U={BS:J,SSR:Q};function W(r){return t.CODE===r.code}exports.Types=U;
},{"./t.js":"aRuQ","./common.js":"FoEN"}],"P2pW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=le,exports.X=fe,exports.u=exports.d=void 0;var e=require("./common.js"),n=t(require("./types.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(){var e=q([">Node"]);return r=function(){return e},e}function a(){var e=q(["BrutalLikeObject"]);return a=function(){return e},e}function o(){var e=q(["BrutalObject"]);return o=function(){return e},e}function u(){var e=q(["MarkupAttrObject"]);return u=function(){return e},e}function c(){var e=q(["MarkupObject"]);return c=function(){return e},e}function i(){var e=q(["FuncArray"]);return i=function(){return e},e}function l(){var e=q(["BrutalArray"]);return l=function(){return e},e}function f(){var e=q(["Object"]);return f=function(){return e},e}function s(){var e=q(["None"]);return s=function(){return e},e}function d(){var e=q(["Function"]);return d=function(){return e},e}function v(){var e=q(["MarkupObject"]);return v=function(){return e},e}function h(){var e=q(["BrutalObject"]);return h=function(){return e},e}function p(){var e=q(["Key"]);return p=function(){return e},e}function b(){var e=q(["None"]);return b=function(){return e},e}function m(){var e=q(["None"]);return m=function(){return e},e}function y(){var e=q(["None"]);return y=function(){return e},e}function g(){var e=q(["FuncArray"]);return g=function(){return e},e}function k(){var e=q(["MarkupAttrObject"]);return k=function(){return e},e}function x(){var e=q(["MarkupObject"]);return x=function(){return e},e}function O(){var e=q(["BrutalObject"]);return O=function(){return e},e}function E(){var e=q(["Handlers"]);return E=function(){return e},e}function j(){var e=q(["Function"]);return j=function(){return e},e}function w(e,n){return M(e)||N(e,n)||B(e,n)||C()}function N(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}}function A(){var e=q(["Handlers"]);return A=function(){return e},e}function S(e){return M(e)||I(e)||B(e)||C()}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(e){if(Array.isArray(e))return e}function T(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=B(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw o}}}}function V(){var e=q([">Node"]);return V=function(){return e},e}function L(e){return F(e)||I(e)||B(e)||D()}function D(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e,n){if(e){if("string"==typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,n):void 0}}function I(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function F(e){if(Array.isArray(e))return _(e)}function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function H(){var e=q(["Handlers"]);return H=function(){return e},e}function P(){var e=q(["Key"]);return P=function(){return e},e}function q(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function z(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function J(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,n,t){return n&&J(e.prototype,n),t&&J(e,t),e}var K=Te,R=Ve,U=!1,W=function(){},$=/(?:<!\-\-)?(key\d+)(?:\-\->)?/gm,G=/\w+=/,Q=20,Y=function(){return"Possible XSS / object forgery attack detected. Object code could not be verified."},Z=function(){return"Object values not allowed here."},ee=function(){return"Unset values not allowed here."},ne=function(){return"Error inserting template into DOM. Position must be one of: replace, beforebegin, afterbegin, beforeend, innerhtml, afterend"},te=function(e){return"Error inserting template into DOM. "+"Location ".concat(e," was not found in the document.")},re=new(function(){function e(){z(this,e)}return X(e,[{key:"beforeend",value:function(e,n){n.appendChild(e)}},{key:"beforebegin",value:function(e,n){n.parentNode.insertBefore(e,n)}},{key:"afterend",value:function(e,n){n.parentNode.insertBefore(e,n.nextSibling)}},{key:"replace",value:function(e,n){n.parentNode.replaceChild(e,n)}},{key:"afterbegin",value:function(e,n){n.insertBefore(e,n.firstChild)}},{key:"innerhtml",value:function(e,n){n.innerHTML="",n.appendChild(e)}}]),e}());self.onerror=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return console.log(n,n[0]+"",n[4]&&n[4].message,n[4]&&n[4].stack),!0};var ae=function(e){return n.default.check((0,n.default)(P()),e)},oe=function(e){return n.default.check((0,n.default)(H()),e)},ue={},ce=le;exports.d=ce;var ie=fe;function le(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return se(e,t)}function fe(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return se(e,t,{useCache:!1})}function se(n,t){var r,a,o=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).useCache,u=void 0===o||o;if(t=t.map(Fe),u){r=(t.find(ae)||{}).key;var c=Me(a=n.join("<link rel=join>"),t,r),i=c.cached;if(!c.firstCall)return i.update(t),i}n=L(n);for(var l={},f=t.map(Be(l)),s=[],d="";n.length>1;)d+=n.shift()+f.shift();var v=Ie(d+=n.shift()),h=document.createTreeWalker(v,NodeFilter.SHOW_ALL);do{ve({walker:h,vmap:l,externals:s})}while(h.nextNode());var p={externals:s,v:Object.values(l),to:de,update:qe,code:e.CODE,nodes:L(v.childNodes)};return u&&(r?ue[a].instances[r]=p:ue[a]=p),p}function de(e,t){var r=(t||"replace").toLocaleLowerCase(),a=document.createDocumentFragment();this.nodes.forEach(function(e){return a.appendChild(e)});var o=n.default.check((0,n.default)(V()),e),u=o?e:document.querySelector(e);try{re[r](a,u)}catch(c){switch(U&&console.log({location:e,options:t,e:c,elem:u,isNode:o}),U&&console.warn(c),c.constructor&&c.constructor.name){case"DOMException":ze({error:ne()},c);break;case"TypeError":ze({error:te(e)},c);break;default:throw c}}for(;this.externals.length;)this.externals.shift()()}function ve(e){var n=e.walker,t=e.vmap,r=e.externals,a=n.currentNode;switch(a.nodeType){case Node.ELEMENT_NODE:ye({node:a,vmap:t,externals:r});break;case Node.COMMENT_NODE:case Node.TEXT_NODE:he({node:a,vmap:t,externals:r})}}function he(e){for(var n=e.node,t=e.vmap,r=e.externals,a=[],o=n.nodeValue,u=$.exec(o),c=function(){var e=u.index,c=u[1],i=t[c],l=pe({node:n,index:e,lengths:a,val:i});r.push(function(){return l(i.val)}),i.replacers.push(l),u=$.exec(o)};u;)c()}function pe(e){var n=e.node,t=Object.assign({},e,{oldVal:{length:Q},oldNodes:[n],lastAnchor:n});return function(e){if(t.oldVal!=e)switch(t.val.val=e,Se(e)){case"markupobject":case"brutalobject":be(e,t);break;default:me(e,t)}}}function be(e,n){var t=n.oldNodes,r=n.lastAnchor;if(e.nodes.length)Array.from(e.nodes).reverse().forEach(function(e){r.parentNode.insertBefore(e,r.nextSibling),n.lastAnchor=r.nextSibling}),n.lastAnchor=e.nodes[0];else{var a=Ce(r);r.parentNode.insertBefore(a,r.nextSibling),n.lastAnchor=a}var o=Pe(t,e.nodes);if(o.size){var u=document.createDocumentFragment();o.forEach(function(e){return u.appendChild(e)})}for(n.oldNodes=e.nodes||[r];e.externals.length;){e.externals.shift()()}}function me(e,n){var t=n.oldVal,r=n.index,a=n.val,o=n.lengths,u=n.node,c=a.vi,i=Object.keys(o.slice(0,c)).length*Q,l=o.slice(0,c).reduce(function(e,n){return e+n},0),f=u.nodeValue;o[c]=e.length;var s=l-i,d=f.slice(0,r+s)+e+f.slice(r+s+t.length);u.nodeValue=d,n.oldVal=e}function ye(e){var n=e.node,t=e.vmap,r=e.externals;Oe(n).forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.name,o=e.value,u={node:n,vmap:t,externals:r,name:a,lengths:[]};$.lastIndex=0;for(var c=$.exec(a);c;)ge(c,u,{updateName:!0}),c=$.exec(a);for($.lastIndex=0,c=$.exec(o);c;)ge(c,u,{updateName:!1}),c=$.exec(o)})}function ge(e,n,t){var r,a=t.updateName,o=e.index,u=e.input,c=Object.assign({},n,{index:o,input:u,updateName:a,val:n.vmap[e[1]],oldVal:{length:Q},oldName:n.name});r=a?ke(c):xe(c),c.externals.push(function(){return r(c.val.val)}),c.val.replacers.push(r)}function ke(e){var n=e.oldName,t=e.node,r=e.val;return function(e){if(n!=e){r.val=e;var a=t.hasAttribute(n)?n:"";if(a!==e){if(a&&(t.removeAttribute(n),t[n]=void 0),e){var o=e=e.trim(),u=void 0;if(G.test(e)){var c=e.indexOf("="),i=[e.slice(0,c),e.slice(c+1)];o=i[0],u=i[1]}Ae(t,o,u)}n=e}}}}function xe(e){return function(n){if(e.oldVal!=n)switch(e.val.val=n,Se(n)){case"funcarray":je(n,e);break;case"function":Ee(n,e);break;case"handlers":we(n,e);break;case"markupobject":case"brutalobject":Ne(n=He(n.nodes),e);break;case"markupattrobject":n=n.str;default:Ne(n,e)}}}function Oe(e){if(!e.hasAttribute)return[];if(e.hasAttribute("class")&&e.setAttribute("class",De(e.getAttribute("class"))),e.attributes&&Number.isInteger(e.attributes.length))return Array.from(e.attributes);var n,t=[],r=T(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.hasAttribute(a)&&t.push({name:a,value:e.getAttribute(a)})}}catch(o){r.e(o)}finally{r.f()}return t}function Ee(e,n){var t=n.oldVal,r=n.node,a=n.name,o=n.externals;if("bond"!==a){var u={};if(a.includes(":")){var c=S(a.split(":"));a=c[0],u=(u=c.slice(1)).reduce(function(e,n){return e[n]=!0,e},{})}t&&r.removeEventListener(a,t,u),r.addEventListener(a,e,u)}else{if(t){var i=o.indexOf(t);i>=0&&o.splice(i,1)}o.push(function(){return e(r)})}n.oldVal=e}function je(e,n){var t=n.oldVal,r=n.node,a=n.name,o=n.externals;if(t&&!Array.isArray(t)&&(t=[t]),"bond"!==a){var u={};if(a.includes(":")){var c=S(a.split(":"));a=c[0],u=(u=c.slice(1)).reduce(function(e,n){return e[n]=!0,e},{})}t&&t.forEach(function(e){return r.removeEventListener(a,e,u)}),e.forEach(function(e){return r.addEventListener(a,e,u)})}else t&&t.forEach(function(e){var n=o.indexOf(e);n>=0&&o.splice(n,1)}),e.forEach(function(e){return o.push(function(){return e(r)})});n.oldVal=e}function we(e,t){var r=t.oldVal,a=t.node,o=t.externals;r&&n.default.check((0,n.default)(A()),r)&&Object.entries(r).forEach(function(e){var n=w(e,2),t=n[0],r=n[1];if("bond"!==t){var u={};if(t.includes(":")){var c=S(t.split(":"));t=c[0],u=(u=c.slice(1)).reduce(function(e,n){return e[n]=!0,e},{})}console.log(t,r,u),a.removeEventListener(t,r,u)}else{var i=o.indexOf(r);i>=0&&o.splice(i,1)}}),Object.entries(e).forEach(function(e){var n=w(e,2),t=n[0],r=n[1];if("bond"!==t){var u={};if(t.includes(":")){var c=S(t.split(":"));t=c[0],u=(u=c.slice(1)).reduce(function(e,n){return e[n]=!0,e},{})}a.addEventListener(t,r,u)}else o.push(function(){return r(a)})}),t.oldVal=e}function Ne(e,n){var t=n.oldVal,r=n.node,a=n.index,o=n.name,u=n.val,c=n.lengths,i=0,l=u.vi,f=Object.keys(c.slice(0,l)).length*Q;"class"==o&&(0==(e=e.trim()).length&&(i=-1),n.val.val=e),c[l]=e.length+i;var s,d=r.getAttribute(o),v=c.slice(0,l).reduce(function(e,n){return e+n},0),h=v-f,p=d.slice(0,a+h),b=d.slice(a+h+t.length);if("class"==o){var m=0==t.length?" ":"";s=p+m+e+m+b}else s=p+e+b;U&&console.log(JSON.stringify({newVal:e,valIndex:l,lengths:c,attr:d,lengthBefore:v,originalLengthBefore:f,correction:h,before:p,after:b,newAttrValue:s},null,2)),Ae(r,o,s),n.oldVal=e}function Ae(e,n,t){"class"==n&&(t=De(t));try{e.setAttribute(n,t)}catch(r){U&&console.warn(r)}try{e[n]=null==t||t}catch(r){U&&console.warn(r)}}function Se(e){return n.default.check((0,n.default)(j()),e)?"function":n.default.check((0,n.default)(E()),e)?"handlers":n.default.check((0,n.default)(O()),e)?"brutalobject":n.default.check((0,n.default)(x()),e)?"markupobject":n.default.check((0,n.default)(k()),e)?"markupattrobject":n.default.check((0,n.default)(g()),e)?"funcarray":"default"}function Ce(e){var n=L(e.parentNode.childNodes).find(function(e){return e.nodeType==Node.COMMENT_NODE&&"brutal-placeholder"==e.nodeValue});return n||(n=Ie("\x3c!--brutal-placeholder--\x3e").firstChild),n}function Me(e,n,t){var r,a=ue[e];return null==a?(a=ue[e]={},t&&(a.instances={},a=a.instances[t]={}),r=!0):t?a.instances?r=!(a=a.instances[t]):(a.instances={},r=!0):r=!1,{cached:a,firstCall:r}}function Te(t){var r=Ie(t=n.default.check((0,n.default)(y()),t)?"":t);return{type:"MarkupObject",code:e.CODE,nodes:L(r.childNodes),externals:[]}}function Ve(t){return t=(t=n.default.check((0,n.default)(m()),t)?"":t).replace(/"/g,"&quot;"),{type:"MarkupAttrObject",code:e.CODE,str:t}}function Le(e){return Array.isArray(e)?0==e.length?[W]:e:n.default.check((0,n.default)(b()),e)?W:void 0}function De(e){return e=(e=e.trim()).replace(/\s+/g," ")}function Be(e){return function(t,r){if(n.default.check((0,n.default)(p()),t))return"";var a=("key"+Math.random()).replace(".","").padEnd(Q,"0").slice(0,Q),o=a;return(n.default.check((0,n.default)(h()),t)||n.default.check((0,n.default)(v()),t))&&(o="\x3c!--".concat(o,"--\x3e")),e[a.trim()]={vi:r,val:t,replacers:[]},o}}function Ie(e){var n,t=(new DOMParser).parseFromString("<template>".concat(e,"</template>"),"text/html").head.firstElementChild;if(t instanceof HTMLTemplateElement)return(n=t.content).normalize(),n;throw new TypeError("Could not find template element after parsing string to DOM:\n=START=\n".concat(e,"\n=END="))}function Fe(e){var t=n.default.check((0,n.default)(d()),e),r=n.default.check((0,n.default)(s()),e),v=n.default.check((0,n.default)(f()),e),h=n.default.check((0,n.default)(l()),e),p=n.default.check((0,n.default)(i()),e),b=n.default.check((0,n.default)(c()),e),m=n.default.check((0,n.default)(u()),e),y=n.default.check((0,n.default)(o()),e),g=n.default.check((0,n.default)(a()),e)&&!y;return t?e:y?e:ae(e)?e:oe(e)?e:h?_e(e):p?e:b?e:m?e:(r&&ze({error:ee()}),g&&ze({error:Y()}),v&&ze({error:Z()}),e+"")}function _e(n){var t=[],r=[];return n.forEach(function(e){return t.push.apply(t,L(e.externals)),r.push.apply(r,L(e.nodes))}),{v:[],code:e.CODE,nodes:r,to:de,update:qe,externals:t}}function He(e){var n=document.createDocumentFragment();e.forEach(function(e){return n.appendChild(e.cloneNode(!0))});var t=document.createElement("body");return t.appendChild(n),t.innerHTML}function Pe(e,n){return e=new Set(e),n=new Set(n),new Set(L(e).filter(function(e){return!n.has(e)}))}function qe(e){this.v.forEach(function(n){var t=n.vi;return n.replacers.forEach(function(n){return n(e[t])})})}function ze(e,n){throw U&&n&&console.warn(n),e.stack=(U&&n||new Error).stack.split(/\s*\n\s*/g),JSON.stringify(e,null,2)}function Je(e){U&&(console.log(JSON.stringify(e,Xe,2)),console.info("."))}function Xe(e,t){var a=t;if(n.default.check((0,n.default)(r()),t))a="<".concat(t.nodeName.toLowerCase()," ").concat(t.attributes?L(t.attributes).map(function(e){var n=e.name,t=e.value;return"".concat(n,"='").concat(t,"'")}).join(" "):"",">").concat(t.nodeValue||(t.children&&t.children.length<=1?t.innerText:""));else if("function"==typeof t)return"".concat(t.name||"anon","() { ... }");return a}exports.u=ie,Object.assign(le,{s:Je,attrskip:R,skip:K,attrmarkup:Ve,markup:Te,guardEmptyHandlers:Le,die:ze}),U&&Object.assign(self,{d:ce,u:ie,T:n.default});
},{"./common.js":"FoEN","./types.js":"eFF2"}]},{},["P2pW"], null)
//# sourceMappingURL=/r.js.map