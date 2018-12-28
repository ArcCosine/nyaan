import '../css/style.scss';
import * as common from './common.js';
import { keyEvents } from './keyevent.js';
import { mouseEvents } from './mouseevent.js';
import './pwa.js';
import { loadScript } from './loadcat.js';


// render meow
const renderMeow = (text, index) => {
    const section = document.querySelector('section');
    const link = section.appendChild(document.createElement('a'));
    const hashtag = 'nyaan';
    link.appendChild(document.createTextNode(text));
    link.setAttribute('href', `https://twitter.com/share?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://nyaan.work/')}&hashtags=${encodeURIComponent(hashtag)}`);
    link.classList.add('text');
    if (index === 0) {
        link.classList.add('active');
    }
    link.addEventListener('click', common.clickLink, false);
};


// entry point
const load = () => {
    const backColors = [
        "pageA-bg",
        "pageB-bg",
        "pageC-bg",
        "pageD-bg",
        "pageE-bg",
        "pageF-bg",
        "pageG-bg",
        "pageH-bg",
        "pageI-bg",
        "pageJ-bg",
        "pageK-bg",
        "pageL-bg",
    ];
    document.body.classList.add(common.gra(backColors));

    // load meow
    fetch('meow.json').then((response) => {
        return response.json();
    }).then((jsondata) => {
        const match = location.href.match('[?&]lang=([^&]+)');
        const lang = match ? match[1] : 'ja';
        const list = typeof jsondata[lang] !== 'undefined' ? jsondata[lang] : jsondata.ja;
        list.sort(() => { return Math.random() - .5 }).forEach(renderMeow)
    });

    // event bind
    document.querySelector('header img').addEventListener('click', common.clickImage, false);
    document.addEventListener('keydown', keyEvents, false);
    document.addEventListener('mousemove', mouseEvents, false);
    document.getElementById('reload').addEventListener('click', common.reloadImage, false);

    //create hash
    const imghash = location.href.match('#\/([^&]+)');
    if (imghash) {
        const bytes = new Uint8Array(imghash[1].match(/.{1,2}/g).map(v => parseInt(v, 16)));
        const meta = document.querySelector('meta[property="og:image"]');
        const imageUrl = new TextDecoder().decode(bytes);
        meta.setAttribute('content', imageUrl);
        loadScript(imageUrl);
    } else {
        loadScript();
    }
};

// Entry Point
document.addEventListener('DOMContentLoaded', load, false);
