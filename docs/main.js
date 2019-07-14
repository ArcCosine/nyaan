!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(7)},function(e,n,t){var r=t(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(3)(!1)).push([e.i,"/*================ SETTINGS ================*/\n/*================ Mixins ================*/\n/*================ COMMON ================*/\nbody {\n  text-align: center;\n  background: #7E735F;\n  padding: 0;\n  margin: 0;\n  line-height: 1.0; }\n\n.pageA-bg {\n  background-color: #D13438; }\n\n.pageB-bg {\n  background-color: #E81123; }\n\n.pageC-bg {\n  background-color: #107C10; }\n\n.pageD-bg {\n  background-color: #2D7D9A; }\n\n.pageE-bg {\n  background-color: #881798; }\n\n.pageF-bg {\n  background-color: #525E54; }\n\n.pageG-bg {\n  background-color: #5D5A58; }\n\n.pageH-bg {\n  background-color: #FF8C00; }\n\n.pageI-bg {\n  background-color: #038387; }\n\n.pageJ-bg {\n  background-color: #744DA9; }\n\n.pageK-bg {\n  background-color: #C30052; }\n\n.pageL-bg {\n  background-color: #4C4A48; }\n\nheader {\n  padding: 2vh 0; }\n  header img {\n    cursor: pointer;\n    margin-right: 10px; }\n\nsection {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr; }\n  @media screen and (max-width: 1000px) {\n    section {\n      grid-template-columns: 1fr 1fr; } }\n  @media screen and (max-width: 400px) {\n    section {\n      grid-template-columns: 1fr; } }\n\na.text {\n  font-size: 4vh;\n  text-decoration: none;\n  color: white;\n  display: block;\n  margin: 0px 10px 10px 10px;\n  padding: 4vh 0;\n  line-height: 4vh;\n  border: solid 1px white;\n  border-radius: 10px;\n  background-color: transparent;\n  transition: all 1s linear 1; }\n\na.text:active {\n  background-color: #038387;\n  box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);\n  transform: translateY(2px); }\n\na.text:hover {\n  background-color: #038387; }\n\na.active {\n  background-color: #038387; }\n  a.active.invisible {\n    background-color: transparent; }\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n  ul li {\n    list-style-type: none;\n    margin: 0.5em 0 0 0;\n    padding: 0; }\n\ndiv#reload {\n  display: inline-block;\n  width: 2vh;\n  height: 2vh;\n  margin: 0px;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border: 0.5em solid rgba(255, 255, 255, 0.2);\n  border-left: 0.5em solid rgba(255, 255, 255, 0.8);\n  transform: translateZ(0);\n  animation: load8 1.1s infinite linear;\n  border-radius: 50%;\n  -webkit-tap-highlight-color: transparent; }\n  div#reload::after {\n    border-radius: 50%; }\n  div#reload:hover {\n    cursor: pointer; }\n\ndiv#reload.loadend {\n  border: 0.5em solid rgba(255, 255, 255, 0.8); }\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\nfooter {\n  color: white;\n  margin: 2em 0; }\n  footer a {\n    color: white; }\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[t].concat(a).concat([o]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var c=e[i];null!=c[0]&&r[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),n.push(c))}},n}},function(e,n,t){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),s=null,d=0,l=[],u=t(5);function f(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(v(r.parts[i],n))}else{var c=[];for(i=0;i<r.parts.length;i++)c.push(v(r.parts[i],n));a[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var a=e[o],i=n.base?a[0]+n.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):t.push(r[i]={id:i,parts:[c]})}return t}function g(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),l.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,t);t.insertBefore(n,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=l.indexOf(e);n>=0&&l.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return b(n,e.attrs),g(e,n),n}function b(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function v(e,n){var t,r,o,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var i=d++;t=s||(s=m(n)),r=x.bind(null,t,i,!1),o=x.bind(null,t,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(n,e.attrs),g(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||a)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,t,n),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return f(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var i=t[o];(c=a[i.id]).refs--,r.push(c)}e&&f(p(e,n),n);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete a[c.id]}}}};var y,w=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function x(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n){window.addEventListener("load",()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("./serviceworker.js").then(function(e){}).catch(function(e){})})},function(e,n,t){"use strict";t.r(n);t(1);const r=function(){const e=new(window.AudioContext||window.webkitAudioContext),n=this;let t,r;const o=n=>{e.resume(),!0!=!!r?fetch("kitty.mp3").then(e=>e.arrayBuffer()).then(t=>{e.decodeAudioData(t,e=>{n(e)})}):n(r)};this.start=(()=>new Promise((r,a)=>{o(o=>{(t=e.createBufferSource()).connect(e.destination),t.buffer=o,t.addEventListener("ended",()=>{n.stop(),r()},!1),t.start(0),t.loop=!1})})),this.stop=(()=>{!0==!!t&&(t.loop=!1)}),o(e=>{r=e})},o=e=>new Promise((n,t)=>{const r=new Image;r.addEventListener("load",()=>{n(e)},!1),r.src=e}),a=(e,n)=>{document.querySelector("header img").src=e;const t=Array.from((new TextEncoder).encode(e)).map(e=>e.toString(16)).join("");i(t),document.getElementById("reload").classList.add("loadend"),n&&(document.querySelector('meta[property="og:image"]').setAttribute("content",e),history.replaceState(null,null,`/#/${t}`))},i=e=>{Array.from(document.querySelectorAll("section a.text")).map(n=>n.setAttribute("href",n.href.replace(/url=.*?\&/,`url=${encodeURIComponent("https://nyaan.work/#/"+e)}&`)))},c=e=>{void 0===e?fetch("https://api.thecatapi.com/v1/images/search?size=small&mime_type=jpg,png&format=json&order=RANDOM&limit=1&8ade48b6-7830-43aa-9c6b-5c557d072995").then(e=>e.json()).then(e=>{o(e[0].url).then(e=>{a(e,!0)})}):o(e).then(e=>{a(e,!1)})},s=e=>e[Math.floor(Math.random()*e.length-1)],d=e=>{(new r).start().then(()=>{window.top.location.href=e})},l=e=>{e.preventDefault(),d(s(document.querySelectorAll("a.text")).href)},u=e=>{e.preventDefault(),d(e.target.href)},f=e=>{e.preventDefault(),document.getElementById("reload").classList.remove("loadend"),c()},p=(e,n)=>{n&&(e.classList.remove("active"),n.classList.add("active"),window.scrollTo({top:n.offsetTop,behavior:"smooth"}))},g=e=>{if(e.defaultPrevented)return;const n=document.querySelector(".active");switch(n.classList.remove("invisible"),event.key){case"Enter":case"o":n.click();break;case"ArrowDown":case"j":p(n,n.nextSibling);break;case"ArrowUp":case"k":p(n,n.previousSibling);break;case"r":if(e.ctrlKey)return;f(e);break;default:return}e.preventDefault()},h=e=>{e.defaultPrevented||document.querySelector(".active").classList.add("invisible")};t(6);const m=(e,n)=>{const t=document.querySelector("section").appendChild(document.createElement("a"));t.appendChild(document.createTextNode(e)),t.setAttribute("href",`https://twitter.com/share?text=${encodeURIComponent(e)}&url=${encodeURIComponent("https://nyaan.work/")}&hashtags=${encodeURIComponent("nyaan")}`),t.classList.add("text"),0===n&&t.classList.add("active"),t.addEventListener("click",u,!1)};document.addEventListener("DOMContentLoaded",()=>{document.body.classList.add(s(["pageA-bg","pageB-bg","pageC-bg","pageD-bg","pageE-bg","pageF-bg","pageG-bg","pageH-bg","pageI-bg","pageJ-bg","pageK-bg","pageL-bg"])),fetch("meow.json").then(e=>e.json()).then(e=>{const n=location.href.match("[?&]lang=([^&]+)"),t=n?n[1]:"ja";(void 0!==e[t]?e[t]:e.ja).sort(()=>Math.random()-.5).forEach(m)}),document.querySelector("header img").addEventListener("click",l,!1),document.addEventListener("keydown",g,!1),document.addEventListener("mousemove",h,!1),document.getElementById("reload").addEventListener("click",f,!1);const e=location.href.match("#/([^&]+)");if(e){const n=new Uint8Array(e[1].match(/.{1,2}/g).map(e=>parseInt(e,16))),t=document.querySelector('meta[property="og:image"]'),r=(new TextDecoder).decode(n);t.setAttribute("content",r),c(r)}else c()},!1)}]);