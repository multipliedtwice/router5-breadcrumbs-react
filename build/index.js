!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"),require("react-router5"));else if("function"===typeof define&&define.amd)define(["react","react-router5"],t);else{var r="object"===typeof exports?t(require("react"),require("react-router5")):t(e.react,e["react-router5"]);for(var n in r)("object"===typeof exports?exports:e)[n]=r[n]}}(this,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){e.exports=r(3)},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t);var c=r(0),i=r.n(c),u=r(1),l=function(e){var t=e.title,r=void 0===t?"To Homepage":t,n=e.strokeWidth,o=void 0===n?"1.5":n,a=e.fill,c=void 0===a?"none":a,u=e.iconClass,l=void 0===u?"mr-2 stroke-current":u;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 20 20",className:l},i.a.createElement("title",null,r),i.a.createElement("path",{d:"M17,10.5v7.85a1.25,1.25,0,0,1-1.33,1.15H4.33A1.25,1.25,0,0,1,3,18.35V10.5",transform:"translate(-0.25 -0.85)",style:{fill:c,strokeWidth:"".concat(o,"px")}}),i.a.createElement("path",{d:"M1.4,11H18.6a.4.4,0,0,0,.28-.68l-8.6-8.6a.4.4,0,0,0-.56,0l-8.6,8.6A.4.4,0,0,0,1.4,11Z",transform:"translate(-0.25 -0.85)",style:{fill:c,strokeWidth:"".concat(o,"px")}}))},s=function(e){var t=e.strokeWidth,r=void 0===t?"1.5":t,n=e.fill,o=void 0===n?"none":n,a=e.iconClass,c=void 0===a?"stroke-current":a;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"13",viewBox:"0 0 10 13",className:c},i.a.createElement("path",{d:"M2.79,11,7.15,6.64a.2.2,0,0,0,0-.29L2.79,2",style:{fill:o,strokeWidth:"".concat(r,"px")}}))},m=function(e,t){var r=Object(u.useRoute)(),n=r.route,o=n.name,a=n.params,c=n.path,i=r.router,l=i.forward,s=(0,i.getDependencies)(),m=function e(t,r){return r.reduce((function(r,n){return r||(n.name===t?n.crumb:n.children?e(t,n.children):null)}),null)};return{filteredPaths:o.split(".").reduce((function(e,t,r){var n=function(e,t,r){return t.length>0?"tab"===e?"".concat(t[r-1].route,".").concat(a.tab):"".concat(t[r-1].route,".").concat(e):e}(t,e,r),o={route:n,name:n.replace(/\./gi,"-"),crumb:s.length?m(t,s):""};return e.push(o),e}),[]).filter((function(t){return!(null===e||void 0===e?void 0:e.includes(t.route,0))})),handleClick:function(){return t?l(t.from,t.to):function(){return null}},dependencies:s,path:c,name:o,params:a}};t.default=function(e){var t=e.hide,r=e.forward,n=e.t,o=void 0===n?function(e){return e}:n,c=e.iconProps,f=e.children,d=e.got,p=void 0===d?{}:d,b=e.homeRouteName,v=void 0===b?["ru","en"]:b,y=e.homeRouteLabel,h=void 0===y?"Home":y,g=e.classes,x=(g=void 0===g?{}:g).wrapper,O=void 0===x?"breadcrumbs flex items-baseline text-xl py-10 whitespace-no-wrap":x,w=g.activeLink,E=void 0===w?"breadcrumbs-link flex items-baseline text-blue-700 hover:underline mx-2":w,j=g.currentPage,P=void 0===j?"breadcrumbs-current text-gray-500 ml-2":j,k=g.activeCrumb,N=void 0===k?"breadcrumbs-crumb list-none flex items-baseline":k,S=e.icons,C=(S=void 0===S?{}:S).CustomHomeIcon,T=void 0===C?i.a.createElement(i.a.Fragment,null):C,M=S.CustomArrowIcon,_=void 0===M?i.a.createElement(i.a.Fragment,null):M,W=m(t,r),A=W.filteredPaths,B=W.handleClick,D=W.dependencies,H=W.path,L=W.name,q=W.params,F=function(){return _.type.name?_:i.a.createElement(s,c)};return"/"!==H&&i.a.createElement("nav",{style:{textTransform:"capitalize"}},i.a.createElement("ol",{className:O},i.a.createElement("li",{itemScope:!0,itemType:"http://data-vocabulary.org/Breadcrumb",className:N},i.a.createElement(u.Link,{className:E,routeName:null===L||void 0===L?void 0:L.split(".")[0],itemProp:"url"},i.a.createElement((function(){return T.type.name?T:i.a.createElement(l,c)}),null),o(h)),i.a.createElement(F,null)),i.a.createElement((function(){return i.a.createElement(i.a.Fragment,null,null===A||void 0===A?void 0:A.map((function(e,t){var r=A.length>t+1;return e.crumb||(e=D.length?a({},e,{},D.find((function(t){return t.name===e.route}))):e),!!Array.isArray(v)&&("@@router5/UNKNOWN_ROUTE"!==e.route&&!v.some((function(t){return e.route===t})))&&i.a.createElement(i.a.Fragment,{key:t},r?o("".concat(e.crumb||e.name))&&i.a.createElement("li",{itemScope:!0,itemType:"http://data-vocabulary.org/Breadcrumb",className:N},i.a.createElement(u.Link,{className:E,routeName:e.route,routeParams:a({},q),routeOptions:{reload:!0},onClick:B,itemProp:"url"},void 0!==p[t]?p[t]:o("".concat(e.crumb||e.name))),i.a.createElement(F,null)):i.a.createElement("li",{itemScope:!0,itemType:"http://data-vocabulary.org/Breadcrumb",className:P},"object"===typeof f?f:o("".concat(f||e.crumb||e.name))))})))}),null)))}}])}));
//# sourceMappingURL=index.js.map