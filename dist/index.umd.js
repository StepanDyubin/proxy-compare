!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).proxyCompare={})}(this,function(t){var e=Symbol(),r=Symbol(),n=Symbol(),o=function(t){try{var e=Object.getPrototypeOf(t);return e===Object.prototype||e===Array.prototype}catch(t){return!1}},i=function(t,f,u){if(!o(t))return t;var s,a=t[n]||t,c=u&&u.get(a);return c||(((s={}).r=function(t){if(!this.t){var e=this.a.get(this.o);e||(e=new Set,this.a.set(this.o,e)),e.add(t)}},s.u=function(){this.t=!0,this.a.delete(this.o)},s.get=function(t,e){return e===n?this.o:(this.r(e),i(t[e],this.a,this.c))},s.has=function(t,e){return e===r?(this.u(),!0):(this.r(e),e in t)},s.ownKeys=function(t){return this.r(e),Reflect.ownKeys(t)},c=s).p=new Proxy(function(t){return Object.isFrozen(t)?Array.isArray(t)?Array.from(t):Object.assign({},t):t}(a),c),c.o=a,c.t=!1,u&&u.set(a,c)),c.a=f,c.c=u,c.p},f=function(t,e){var r=Reflect.ownKeys(t),n=Reflect.ownKeys(e);return r.length!==n.length||r.some(function(t,e){return t!==n[e]})};t.MODE_ASSUME_UNCHANGED_IF_UNAFFECTED=1,t.MODE_ASSUME_UNCHANGED_IF_UNAFFECTED_IN_DEEP=4,t.MODE_IGNORE_REF_EQUALITY=2,t.MODE_IGNORE_REF_EQUALITY_IN_DEEP=8,t.createDeepProxy=i,t.getUntrackedObject=function(t){return o(t)&&t[n]||null},t.isDeepChanged=function t(r,n,o,i,u){if(void 0===u&&(u=0),r===n&&0==(2&u))return!1;if("object"!=typeof r||null===r)return!0;if("object"!=typeof n||null===n)return!0;var s=o.get(r);if(!s)return 0==(1&u);if(i&&0==(2&u)){var a,c=i.get(r);if(c&&c.n===n)return c.g;i.set(r,((a={}).n=n,a.g=!1,a))}var y,l=null,h=s,E=Array.isArray(h),p=0;for(h=E?h:h[Symbol.iterator]();;){var _;if(E){if(p>=h.length)break;_=h[p++]}else{if((p=h.next()).done)break;_=p.value}var b=_,g=b===e?f(r,n):t(r[b],n[b],o,i,u>>>2<<2|u>>>2);if(!0!==g&&!1!==g||(l=g),l)break}return null===l&&(l=0==(1&u)),i&&0==(2&u)&&i.set(r,((y={}).n=n,y.g=l,y)),l},t.trackMemo=function(t){return!!o(t)&&r in t}});
//# sourceMappingURL=index.umd.js.map
