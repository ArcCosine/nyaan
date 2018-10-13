!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(7)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"body {\n  text-align: center;\n  background: #7E735F;\n  padding: 0;\n  margin: 0;\n  line-height: 1.0; }\n\nsection {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr; }\n  @media screen and (max-width: 1000px) {\n    section {\n      grid-template-columns: 1fr 1fr; } }\n  @media screen and (max-width: 600px) {\n    section {\n      grid-template-columns: 1fr; } }\n\na.text {\n  font-size: 4vh;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.5);\n  display: block;\n  margin: 0px 10px 10px 10px;\n  padding: 4vh 0;\n  line-height: 4vh;\n  border: solid 1px rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29); }\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n  ul li {\n    list-style-type: none;\n    margin: 0.5em 0 0 0;\n    padding: 0; }\n\na.active {\n  color: #999 !important; }\n\na.text:active {\n  box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);\n  transform: translateY(2px); }\n\nheader {\n  padding: 2vh 0; }\n  header img {\n    cursor: pointer; }\n\nfooter {\n  color: rgba(255, 255, 255, 0.5);\n  margin: 2em 0; }\n  footer a {\n    color: rgba(255, 255, 255, 0.5); }\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,u=0,d=[],f=n(5);function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=v(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return l(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&l(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t){window.addEventListener("load",()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("./serviceworker.js").then(function(e){}).catch(function(e){})})},function(e,t,n){"use strict";n.r(t);n(1);const r=(e,t)=>{t&&(e.classList.remove("active"),t.classList.add("active"),window.scrollTo({top:t.offsetTop,behavior:"smooth"}))},o=e=>{if(e.defaultPrevented)return;const t=document.querySelector(".active");switch(event.key){case"Enter":case"o":t.click();break;case"ArrowDown":case"j":r(t,t.nextSibling);break;case"ArrowUp":case"k":r(t,t.previousSibling);break;default:return}e.preventDefault()};n(6);const i=e=>new Promise((t,n)=>{const r=new Image;r.addEventListener("load",()=>{t(e)},!1),r.src=e}),a=(e,t)=>{void 0===e?fetch("https://api.thecatapi.com/v1/images/search?size=small&mime_type=jpg,png&format=json&order=RANDOM&limit=1&8ade48b6-7830-43aa-9c6b-5c557d072995").then(e=>e.json()).then(e=>{i(e[0].url).then(e=>{document.querySelector("header img").src=e;const t=new TextEncoder("utf-8").encode(e),n=Array.from(t).map(e=>e.toString(16)).join("");document.querySelectorAll("section a.text").forEach((e,t,r)=>{e.setAttribute("href",e.href.replace(/text=/,`text=${encodeURIComponent("https://nyaan.work/#/")}${n}%0A`))})})}):i(e).then(e=>{document.querySelector("header img").src=e,document.querySelectorAll("section a.text").forEach((e,n,r)=>{e.setAttribute("href",e.href.replace(/text=/,`text=${encodeURIComponent("https://nyaan.work/#/")}${t}%0A`))})})},s=function(){const e=new(window.AudioContext||window.webkitAudioContext),t=this;let n,r;const o=t=>{e.resume(),!0!=!!r?fetch("kitty.mp3").then(e=>e.arrayBuffer()).then(n=>{e.decodeAudioData(n,e=>{t(e)})}):t(r)};this.start=(()=>new Promise((r,i)=>{o(o=>{(n=e.createBufferSource()).connect(e.destination),n.buffer=o,n.addEventListener("ended",()=>{t.stop(),r()},!1),n.start(0),n.loop=!1})})),this.stop=(()=>{!0==!!n&&(n.loop=!1)}),o(e=>{r=e})},c=e=>e[Math.floor(Math.random()*e.length-1)],u=e=>{e.preventDefault(),(new s).start().then(()=>{window.top.location.href=c(document.querySelectorAll("a.text")).href})},d=(e,t)=>{const n=document.querySelector("section").appendChild(document.createElement("a"));n.appendChild(document.createTextNode(e)),n.setAttribute("href",`https://twitter.com/share?text=${encodeURIComponent(e)}&url=${encodeURIComponent("https://nyaan.work/")}&hashtags=${encodeURIComponent("nyaan")}`),n.setAttribute("target","_blank"),n.classList.add("text"),0===t&&n.classList.add("active"),n.addEventListener("click",e=>{(new s).start()},!1)};document.addEventListener("DOMContentLoaded",()=>{document.body.style.backgroundColor=c(["#FFB900","#E74856","#0078D7","#0099BC","#7A7574","#767676","#FF8C00","#E81123","#0063B1","#2D7D9A","#5D5A58","#4C4A48","#F7630C","#EA005E","#8E8CD8","#00B7C3","#68768A","#69797E","#CA5010","#C30052","#6B69D6","#038387","#515C6B","#4A5459","#DA3B01","#E3008C","#8764B8","#00B294","#567C73","#647C64","#EF6950","#BF0077","#744DA9","#018574","#486860","#525E54","#D13438","#C239B3","#B146C2","#00CC6A","#498205","#847545","#FF4343","#9A0089","#881798","#10893E","#107C10","#7E735F"]),fetch("meow.json").then(e=>e.json()).then(e=>{const t=location.href.match("[?&]lang=([^&]+)"),n=t?t[1]:"ja";(void 0!==e[n]?e[n]:e.ja).sort(()=>Math.random()-.5).forEach(d)}),document.querySelector("header img").addEventListener("click",u,!1),document.addEventListener("keydown",o,!1);const e=location.href.match("#/([^&]+)");if(e){const t=new Uint8Array(e[1].match(/.{1,2}/g).map(e=>parseInt(e,16))),n=new TextDecoder("utf-8"),r=document.querySelector('meta[property="og:image"]'),o=n.decode(t);r.setAttribute("content",o),a(o,e[1])}else a()},!1)}]);