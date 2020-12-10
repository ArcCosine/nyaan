(()=>{var e={642:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(645),n=o.n(r)()((function(e){return e[1]}));n.push([e.id,"body{text-align:center;background:#7e735f;padding:0;margin:0;line-height:1}.pageA-bg{background-color:#d13438}.pageB-bg{background-color:#e81123}.pageC-bg{background-color:#107c10}.pageD-bg{background-color:#2d7d9a}.pageE-bg{background-color:#881798}.pageF-bg{background-color:#525e54}.pageG-bg{background-color:#5d5a58}.pageH-bg{background-color:#ff8c00}.pageI-bg{background-color:#038387}.pageJ-bg{background-color:#744da9}.pageK-bg{background-color:#c30052}.pageL-bg{background-color:#4c4a48}main{position:relative}header{padding:2vh 0}header .meow-image{cursor:pointer;margin:0px auto 1em;width:250px;height:250px;border:10px solid #fff;box-shadow:1px 1px 2px #e6e6e6}header .meow-image img{display:block;width:100%;height:100%;object-fit:cover;object-position:top center}section#meow{display:grid;grid-template-columns:1fr 1fr 1fr;max-width:1000px;margin:0px auto}@media screen and (max-width: 1000px){section#meow{grid-template-columns:1fr 1fr}}@media screen and (max-width: 400px){section#meow{grid-template-columns:1fr}}a.text{font-size:4vh;text-decoration:none;color:#fff;display:block;margin:0px 10px 10px 10px;padding:4vh 0;line-height:4vh;border:solid 1px #fff;border-radius:10px;background-color:transparent;transition:all 1s linear 1}a.text:active{background-color:#038387;box-shadow:inset 0 0 2px rgba(128,128,128,.1);transform:translateY(2px)}a.text:hover{background-color:#038387}a.active{background-color:#038387}a.active.invisible{background-color:transparent}ul{list-style-type:none;margin:0;padding:0}ul li{list-style-type:none;margin:.5em 0 0 0;padding:0}button{position:relative;border:1px solid #4caf50;border-radius:5px;outline:none;padding:.5em 1em;font-size:16px;font-weight:600;background:#4caf50;box-shadow:1px 1px 1px rgba(0,0,0,.5);color:#000}button div#reload{display:inline-block;vertical-align:middle;width:.7em;height:.7em;margin:0px .5em 0px 0px;position:relative;border:.3em solid rgba(255,255,255,.2);border-left:.3em solid rgba(255,255,255,.8);transform:translateZ(0);animation:load8 1.1s infinite linear;border-radius:50%;-webkit-tap-highlight-color:transparent}button div#reload::after{border-radius:50%}button:hover,button:active,button:focus{outline:none;background:#4caf50}button:hover{cursor:pointer}div#reload.loadend{border:.3em solid rgba(255,255,255,.8)}@keyframes load8{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}section#help{display:none;position:fixed;text-align:left;background:rgba(0,0,0,.8);border-radius:1em;top:5vh;left:5vw;width:calc( 90vw - 2em );height:calc( 90vh - 2em );padding:1em}section#help.show{display:block}section#help span{color:#dd0}section#help table{color:#fff}section#help table tr th{padding:1em}section#help table tr th:nth-child(1){color:#dd0}section#help table tr td{padding:1em}section#help table tr td:nth-child(1){color:#dd0}footer{color:#fff;margin:2em 0}footer a{color:#fff}",""]);const a=n},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(n[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&n[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),t.push(d))}},t}},379:(e,t,o)=>{"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),i=[];function c(e){for(var t=-1,o=0;o<i.length;o++)if(i[o].identifier===e){t=o;break}return t}function d(e,t){for(var o={},r=[],n=0;n<e.length;n++){var a=e[n],d=t.base?a[0]+t.base:a[0],s=o[d]||0,l="".concat(d," ").concat(s);o[d]=s+1;var u=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:h(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=o.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,o,r){var n=o?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function g(e,t,o){var r=o.css,n=o.media,a=o.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,t){var o,r,n;if(t.singleton){var a=m++;o=f||(f=s(t)),r=p.bind(null,o,a,!1),n=p.bind(null,o,a,!0)}else o=s(t),r=g.bind(null,o,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var o=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<o.length;r++){var n=c(o[r]);i[n].references--}for(var a=d(e,t),s=0;s<o.length;s++){var l=c(o[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}o=a}}}},500:()=>{window.addEventListener("load",(async()=>{"serviceWorker"in navigator&&await navigator.serviceWorker.register("./serviceworker.js")}))}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(379),t=o.n(e),r=o(642),n={insert:"head",singleton:!1};t()(r.Z,n);r.Z.locals;const a=e=>e[Math.floor(Math.random()*e.length-1)],i=(e,t)=>{t&&(e.classList.remove("active"),t.classList.add("active"),window.scrollTo({top:t.offsetTop,behavior:"smooth"}))},c=()=>{let e="";const t=location.href.match(/#!([^&]+)\/([^&]+)/);if(t){const o=new Uint8Array(t[2].match(/.{1,2}/g).map((e=>parseInt(e,16))));e=(new TextDecoder).decode(o)}return e},d=e=>new Promise(((t,o)=>{const r=new Image;r.addEventListener("load",(()=>{t(e)}),!1),r.src=e})),s=()=>{const e=location.href.match(/#!(.+)?\//);return e?e[1]:"ja"},l=e=>{const t=s(),o=Array.from((new TextEncoder).encode(e)).map((e=>e.toString(16))).join("");document.querySelector('meta[property="og:image"]').setAttribute("content",e),history.replaceState(null,null,`/#!${t}/${o}`),window.prerenderReady=!0;const r=encodeURIComponent(`https://nyaan.work/#!${t}/${o}`);Array.from(document.querySelectorAll("section a.text")).map((e=>e.setAttribute("href",e.href.replace(/url=.*?\&/,`url=${r}&`))))},u=e=>{document.querySelector("header div img").src=e,l(e),document.getElementById("reload").classList.add("loadend")},p=async()=>{let e=c();if(!e){const t=await fetch("https://api.thecatapi.com/v1/images/search?size=small&mime_type=jpg,png&format=json&order=RANDOM&limit=1&8ade48b6-7830-43aa-9c6b-5c557d072995");e=(await t.json())[0].url}u(await d(e))},g=e=>{e.preventDefault(),document.getElementById("reload").classList.remove("loadend"),history.replaceState(null,null,`/#!${s()}/`),p()},f=e=>{document.getElementById("help").classList.toggle("show")},m=e=>{if(e.defaultPrevented)return;const t=document.querySelector(".active");switch(t.classList.remove("invisible"),e.key){case"Enter":case"o":t.click();break;case"ArrowDown":case"j":i(t,t.nextSibling);break;case"ArrowUp":case"k":i(t,t.previousSibling);break;case"r":if(e.ctrlKey)return;g(e);break;case"?":f(e);break;case"[":e.ctrlKey&&f(e);break;default:return}e.preventDefault()},h=e=>{e.defaultPrevented||document.querySelector(".active").classList.add("invisible")},b=function(){const e=new(window.AudioContext||window.webkitAudioContext),t=this;let o,r;const n=async t=>{if(e.resume(),!0==!!r)return void t(r);const o=await fetch("kitty.mp3"),n=await o.arrayBuffer();e.decodeAudioData(n,(e=>{t(e)}))};this.start=()=>new Promise(((r,a)=>{n((n=>{o=e.createBufferSource(),o.connect(e.destination),o.buffer=n,o.addEventListener("ended",(()=>{t.stop(),r()}),!1),o.start(0),o.loop=!1}))})),this.stop=()=>{!0==!!o&&(o.loop=!1)},n((e=>{r=e}))},v=e=>{(new b).start().then((()=>{window.top.location.href=e}))},w=e=>{e.preventDefault(),v(e.target.href)},y=(e,t)=>{const o=document.querySelector("section").appendChild(document.createElement("a"));o.appendChild(document.createTextNode(e)),o.setAttribute("href",`https://twitter.com/share?text=${encodeURIComponent(e)}&url=${encodeURIComponent("https://nyaan.work/")}&hashtags=${encodeURIComponent("nyaan")}`),o.classList.add("text"),0===t&&o.classList.add("active"),o.addEventListener("click",w,!1)},x=e=>{e.preventDefault(),v(a(document.querySelectorAll("a.text")).href)};o(500);document.addEventListener("DOMContentLoaded",(async()=>{document.body.classList.add(a(["pageA-bg","pageB-bg","pageC-bg","pageD-bg","pageE-bg","pageF-bg","pageG-bg","pageH-bg","pageI-bg","pageJ-bg","pageK-bg","pageL-bg"]));const e=await fetch("meow.json"),t=await e.json(),o=s();(void 0!==t[o]?t[o]:t.ja).sort((()=>Math.random()-.5)).forEach(y),document.querySelector("header div img").addEventListener("click",x,!1),document.addEventListener("keydown",m,!1),document.addEventListener("mousemove",h,!1),document.getElementById("reload-button").addEventListener("click",g,!1),p()}),!1)})()})();