/*! For license information please see component---src-pages-new-home-js-17427c8be56a02960bdd.js.LICENSE.txt */
"use strict";(self.webpackChunkpeter_zaffina=self.webpackChunkpeter_zaffina||[]).push([[596],{7631:function(n,t,e){e.r(t),e.d(t,{default:function(){return nt}});var r=e(7294),a=e(977),i=e(4832),o=e(9983);function s(n){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s(n)}function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){f(n,t,e[t])}))}return n}function u(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){},p={},d={},h={mark:m,measure:m};try{"undefined"!=typeof window&&(p=window),"undefined"!=typeof document&&(d=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(h=performance)}catch(tt){}var g=(p.navigator||{}).userAgent,y=void 0===g?"":g,b=p,v=d,w=h,k=(b.document,!!v.documentElement&&!!v.head&&"function"==typeof v.addEventListener&&"function"==typeof v.createElement),x=(~y.indexOf("MSIE")||y.indexOf("Trident/"),"svg-inline--fa"),O="data-fa-i2svg",_=(function(){try{}catch(tt){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),z=_.concat([11,12,13,14,15,16,17,18,19,20]),E={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},A=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",E.GROUP,E.SWAP_OPACITY,E.PRIMARY,E.SECONDARY].concat(_.map((function(n){return"".concat(n,"x")}))).concat(z.map((function(n){return"w-".concat(n)}))),b.FontAwesomeConfig||{});if(v&&"function"==typeof v.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=u(n,2),e=t[0],r=t[1],a=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=v.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=a&&(A[r]=a)}))}var P=l({},{familyPrefix:"fa",replacementClass:x,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},A);P.autoReplaceSvg||(P.observeMutations=!1);var j=l({},P);b.FontAwesomeConfig=j;var M=b||{};M.___FONT_AWESOME___||(M.___FONT_AWESOME___={}),M.___FONT_AWESOME___.styles||(M.___FONT_AWESOME___.styles={}),M.___FONT_AWESOME___.hooks||(M.___FONT_AWESOME___.hooks={}),M.___FONT_AWESOME___.shims||(M.___FONT_AWESOME___.shims=[]);var C=M.___FONT_AWESOME___,S=[];k&&((v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState)||v.addEventListener("DOMContentLoaded",(function n(){v.removeEventListener("DOMContentLoaded",n),1,S.map((function(n){return n()}))})));var I,N="pending",T="settled",L="fulfilled",R="rejected",W=function(){},D=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,F="undefined"==typeof setImmediate?setTimeout:setImmediate,Y=[];function X(){for(var n=0;n<Y.length;n++)Y[n][0](Y[n][1]);Y=[],I=!1}function U(n,t){Y.push([n,t]),I||(I=!0,F(X,0))}function Z(n){var t=n.owner,e=t._state,r=t._data,a=n[e],i=n.then;if("function"==typeof a){e=L;try{r=a(r)}catch(tt){G(i,tt)}}B(i,r)||(e===L&&H(i,r),e===R&&G(i,r))}function B(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===s(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){e||(e=!0,t===r?q(n,r):H(n,r))}),(function(t){e||(e=!0,G(n,t))})),!0}}catch(tt){return e||G(n,tt),!0}return!1}function H(n,t){n!==t&&B(n,t)||q(n,t)}function q(n,t){n._state===N&&(n._state=T,n._data=t,U(K,n))}function G(n,t){n._state===N&&(n._state=T,n._data=t,U(J,n))}function V(n){n._then=n._then.forEach(Z)}function K(n){n._state=L,V(n)}function J(n){n._state=R,V(n),!n._handled&&D&&e.g.process.emit("unhandledRejection",n._data,n)}function Q(n){e.g.process.emit("rejectionHandled",n)}function $(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof $==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){G(t,n)}try{n((function(n){H(t,n)}),e)}catch(tt){e(tt)}}(n,this)}$.prototype={constructor:$,_state:N,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(W),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===R&&D&&U(Q,this)),this._state===L||this._state===R?U(Z,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},$.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new $((function(t,e){var r=[],a=0;function i(n){return a++,function(e){r[n]=e,--a||t(r)}}for(var o,s=0;s<n.length;s++)(o=n[s])&&"function"==typeof o.then?o.then(i(s),e):r[s]=o;a||t(r)}))},$.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new $((function(t,e){for(var r,a=0;a<n.length;a++)(r=n[a])&&"function"==typeof r.then?r.then(t,e):t(r)}))},$.resolve=function(n){return n&&"object"===s(n)&&n.constructor===$?n:new $((function(t){t(n)}))},$.reject=function(n){return new $((function(t,e){e(n)}))};var nn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tn(n){if(n&&k){var t=v.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=v.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return v.head.insertBefore(t,r),n}}function en(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function rn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function an(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function on(n){return n.size!==nn.size||n.x!==nn.x||n.y!==nn.y||n.rotate!==nn.rotate||n.flipX||n.flipY}function sn(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var cn={x:0,y:0,width:"100%",height:"100%"};function fn(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function ln(n){var t=n.icons,e=t.main,r=t.mask,a=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,c=n.title,f=n.maskId,u=n.titleId,m=n.extra,p=n.watchable,d=void 0!==p&&p,h=r.found?r:e,g=h.width,y=h.height,b="fak"===a,v=b?"":"fa-w-".concat(Math.ceil(g/y*16)),w=[j.replacementClass,i?"".concat(j.familyPrefix,"-").concat(i):"",v].filter((function(n){return-1===m.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(m.classes).join(" "),k={children:[],attributes:l({},m.attributes,{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})},x=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/y*16*.0625,"em")}:{};d&&(k.attributes[O]=""),c&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||en())},children:[c]});var _=l({},k,{prefix:a,iconName:i,main:e,mask:r,maskId:f,transform:o,symbol:s,styles:l({},x,m.styles)}),z=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,a=n.main,i=n.mask,o=n.maskId,s=n.transform,c=a.width,f=a.icon,u=i.width,m=i.icon,p=sn({transform:s,containerWidth:u,iconWidth:c}),d={tag:"rect",attributes:l({},cn,{fill:"white"})},h=f.children?{children:f.children.map(fn)}:{},g={tag:"g",attributes:l({},p.inner),children:[fn(l({tag:f.tag,attributes:l({},f.attributes,p.path)},h))]},y={tag:"g",attributes:l({},p.outer),children:[g]},b="mask-".concat(o||en()),v="clip-".concat(o||en()),w={tag:"mask",attributes:l({},cn,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,y]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=m,"g"===t.tag?t.children:[t])},w]};return e.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},cn)}),{children:e,attributes:r}}(_):function(n){var t=n.children,e=n.attributes,r=n.main,a=n.transform,i=an(n.styles);if(i.length>0&&(e.style=i),on(a)){var o=sn({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:l({},o.outer),children:[{tag:"g",attributes:l({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:l({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(_),E=z.children,A=z.attributes;return _.children=E,_.attributes=A,s?function(n){var t=n.prefix,e=n.iconName,r=n.children,a=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l({},a,{id:!0===i?"".concat(t,"-").concat(j.familyPrefix,"-").concat(e):i}),children:r}]}]}(_):function(n){var t=n.children,e=n.main,r=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(on(o)&&e.found&&!r.found){var s={x:e.width/e.height/2,y:.5};a.style=an(l({},i,{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(_)}var un=function(){},mn=(j.measurePerformance&&w&&w.mark&&w.measure,function(n,t,e,r){var a,i,o,s=Object.keys(n),c=s.length,f=void 0!==r?function(n,t){return function(e,r,a,i){return n.call(t,e,r,a,i)}}(t,r):t;for(void 0===e?(a=1,o=n[s[0]]):(a=0,o=e);a<c;a++)o=f(o,n[i=s[a]],i,n);return o});function pn(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,a=void 0!==r&&r,i=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!=typeof C.hooks.addPack||a?C.styles[n]=l({},C.styles[n]||{},i):C.hooks.addPack(n,i),"fas"===n&&pn("fa",t)}var dn=C.styles,hn=C.shims,gn=function(){var n=function(n){return mn(dn,(function(t,e,r){return t[r]=mn(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in dn;mn(hn,(function(n,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||t||(a="fas"),n[r]={prefix:a,iconName:i},n}),{})};gn();C.styles;function yn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function bn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,a=n.children,i=void 0===a?[]:a;return"string"==typeof n?rn(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(rn(n[e]),'" ')}),"").trim()}(r),">").concat(i.map(bn).join(""),"</").concat(t,">")}var vn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return n.flipX=!0,n;if(r&&"v"===a)return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a}return n}),t):t};function wn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}wn.prototype=Object.create(Error.prototype),wn.prototype.constructor=wn;var kn={fill:"currentColor"},xn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},On={tag:"path",attributes:l({},kn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},_n=l({},xn,{attributeName:"opacity"});l({},kn,{cx:"256",cy:"364",r:"28"}),l({},xn,{attributeName:"r",values:"28;14;28;28;14;28;"}),l({},_n,{values:"1;0;1;1;0;1;"}),l({},kn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),l({},_n,{values:"1;0;0;0;0;1;"}),l({},kn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),l({},_n,{values:"0;0;1;1;0;0;"}),C.styles;function zn(n){var t=n[0],e=n[1],r=u(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(E.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(E.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(E.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}C.styles;function En(){var n="fa",t=x,e=j.familyPrefix,r=j.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==n||r!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(r))}return a}var An=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(t){n.definitions[t]=l({},n.definitions[t]||{},a[t]),pn(t,a[t]),gn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],a=r.prefix,i=r.iconName,o=r.icon;n[a]||(n[a]={}),n[a][i]=o})),n}}],e&&c(t.prototype,e),r&&c(t,r),n}();function Pn(){j.autoAddCss&&!In&&(tn(En()),In=!0)}function jn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return bn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(k){var t=v.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function Mn(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return yn(Sn.definitions,e,r)||yn(C.styles,e,r)}var Cn,Sn=new An,In=!1,Nn={transform:function(n){return vn(n)}},Tn=(Cn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?nn:e,a=t.symbol,i=void 0!==a&&a,o=t.mask,s=void 0===o?null:o,c=t.maskId,f=void 0===c?null:c,u=t.title,m=void 0===u?null:u,p=t.titleId,d=void 0===p?null:p,h=t.classes,g=void 0===h?[]:h,y=t.attributes,b=void 0===y?{}:y,v=t.styles,w=void 0===v?{}:v;if(n){var k=n.prefix,x=n.iconName,O=n.icon;return jn(l({type:"icon"},n),(function(){return Pn(),j.autoA11y&&(m?b["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(d||en()):(b["aria-hidden"]="true",b.focusable="false")),ln({icons:{main:zn(O),mask:s?zn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:x,transform:l({},nn,r),symbol:i,title:m,maskId:f,titleId:d,extra:{attributes:b,styles:w,classes:g}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:Mn(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Mn(r||{})),Cn(e,l({},t,{mask:r}))}),Ln=e(5697),Rn=e.n(Ln);function Wn(n){return Wn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wn(n)}function Dn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Fn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Yn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Fn(Object(e),!0).forEach((function(t){Dn(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Fn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Xn(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function Un(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Zn(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function Bn(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),a=Zn(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[a]=i,n}),{})}var Hn=!1;try{Hn=!0}catch(tt){}function qn(n){return n&&"object"===Wn(n)&&n.prefix&&n.iconName&&n.icon?n:Nn.icon?Nn.icon(n):null===n?null:n&&"object"===Wn(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function Gn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Dn({},n,t):{}}function Vn(n){var t=n.forwardedRef,e=Xn(n,["forwardedRef"]),r=e.icon,a=e.mask,i=e.symbol,o=e.className,s=e.title,c=e.titleId,f=qn(r),l=Gn("classes",[].concat(Un(function(n){var t,e=n.spin,r=n.pulse,a=n.fixedWidth,i=n.inverse,o=n.border,s=n.listItem,c=n.flip,f=n.size,l=n.rotation,u=n.pull,m=(Dn(t={"fa-spin":e,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(f),null!=f),Dn(t,"fa-rotate-".concat(l),null!=l&&0!==l),Dn(t,"fa-pull-".concat(u),null!=u),Dn(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(m).map((function(n){return m[n]?n:null})).filter((function(n){return n}))}(e)),Un(o.split(" ")))),u=Gn("transform","string"==typeof e.transform?Nn.transform(e.transform):e.transform),m=Gn("mask",qn(a)),p=Tn(f,Yn({},l,{},u,{},m,{symbol:i,title:s,titleId:c}));if(!p)return function(){var n;!Hn&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",f),null;var d=p.abstract,h={ref:t};return Object.keys(e).forEach((function(n){Vn.defaultProps.hasOwnProperty(n)||(h[n]=e[n])})),Kn(d[0],h)}Vn.displayName="FontAwesomeIcon",Vn.propTypes={border:Rn().bool,className:Rn().string,mask:Rn().oneOfType([Rn().object,Rn().array,Rn().string]),fixedWidth:Rn().bool,inverse:Rn().bool,flip:Rn().oneOf(["horizontal","vertical","both"]),icon:Rn().oneOfType([Rn().object,Rn().array,Rn().string]),listItem:Rn().bool,pull:Rn().oneOf(["right","left"]),pulse:Rn().bool,rotation:Rn().oneOf([0,90,180,270]),size:Rn().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Rn().bool,symbol:Rn().oneOfType([Rn().bool,Rn().string]),title:Rn().string,transform:Rn().oneOfType([Rn().string,Rn().object]),swapOpacity:Rn().bool},Vn.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Kn=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=Bn(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[Zn(t)]=r}return n}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,c=Xn(r,["style"]);return i.attrs.style=Yn({},i.attrs.style,{},s),t.apply(void 0,[e.tag,Yn({},i.attrs,{},c)].concat(Un(a)))}.bind(null,r.createElement),Jn=e(8014),Qn=e(7190);Sn.add(Jn.SvR,Jn.FU$,Jn.IBq,Qn.pUg,Jn.m08);var $n=function(){return(0,a.tZ)(o.kC,{as:"nav",sx:{color:"darkblue",fontFamily:"Helvetica",justifyContent:"Center"}},(0,a.tZ)(o.OL,{href:"https://github.com/pdzaffina",px:2},(0,a.tZ)(Vn,{icon:"user-circle"})),(0,a.tZ)(o.OL,{href:"#!",px:2},(0,a.tZ)(Vn,{icon:"envelope"})))},nt=function(){return(0,a.tZ)(i.Z,{pageTitle:"Peter Zaffina | Business Process Expert"},(0,a.tZ)("h1",{sx:{textAlign:"center"}},"Hi! I'm Peter Zaffina"),(0,a.tZ)("p",{sx:{fontSize:4,marginX:6}},"I work with businesses to help them achieve their goals using technology to solve their biggest challenges. I'm passionate about connecting clients with their data in order to help them improve outcomes for their business and their customers. I'm excited about the possibilities of connecting developers with domain experts in order to reduce the time it takes to create innovative systems that support frontline workers."),(0,a.tZ)($n,null))}}}]);
//# sourceMappingURL=component---src-pages-new-home-js-17427c8be56a02960bdd.js.map