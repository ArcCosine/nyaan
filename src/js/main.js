import '../css/style.scss';
import { keyEvents } from './keyevent.js';
import './pwa.js';
import { loadScript } from './loadcat.js';
import { Kitty } from './sound.js';



// get random array
const gra = (array) => {
    return array[Math.floor(Math.random()*array.length-1)];
};

// click meow
const clickImage = (eve) => {
    eve.preventDefault();
    const sound = new Kitty();
    sound.start().then(()=>{
        window.top.location.href = gra(document.querySelectorAll('a.text')).href;
    });
};

const reloadImage = (eve) => {
    eve.preventDefault();
    document.getElementById('reload').classList.remove('loadend');
    loadScript();
}


// render meow
const renderMeow = (text, index ) => {
    const section = document.querySelector('section');
    const link = section.appendChild(document.createElement('a'));
    const hashtag = 'nyaan';
    link.appendChild(document.createTextNode(text));
    link.setAttribute('href', `https://twitter.com/share?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://nyaan.work/')}&hashtags=${encodeURIComponent(hashtag)}`);
    link.setAttribute('target','_blank');
    link.classList.add('text');
    if( index === 0 ){
        link.classList.add('active');
    }
    link.addEventListener('click', (eve)=>{
        const sound = new Kitty();
        sound.start();
    }, false);
};


// entry point
const load = () =>{
    const backColors = [
        "#FFB900","#E74856","#0078D7","#0099BC","#7A7574","#767676","#FF8C00",
        "#E81123","#0063B1","#2D7D9A","#5D5A58","#4C4A48","#F7630C","#EA005E",
        "#8E8CD8","#00B7C3","#68768A","#69797E","#CA5010","#C30052","#6B69D6",
        "#038387","#515C6B","#4A5459","#DA3B01","#E3008C","#8764B8","#00B294",
        "#567C73","#647C64","#EF6950","#BF0077","#744DA9","#018574","#486860",
        "#525E54","#D13438","#C239B3","#B146C2","#00CC6A","#498205","#847545",
        "#FF4343","#9A0089","#881798","#10893E","#107C10","#7E735F"
    ];
    document.body.style.backgroundColor = gra(backColors);

    // load meow
    fetch('meow.json').then((response)=>{
        return response.json();
    }).then((jsondata)=>{
        const match = location.href.match('[?&]lang=([^&]+)');
        const lang = match ? match[1] : 'ja';
        const list = typeof jsondata[lang] !== 'undefined' ? jsondata[lang] : jsondata.ja;
        list.sort(()=>{return Math.random()-.5}).forEach(renderMeow)
    });

    // event bind
    document.querySelector('header img').addEventListener('click', clickImage, false);
    document.addEventListener('keydown', keyEvents, false);
    document.getElementById('reload').addEventListener('click', reloadImage, false );

    //create hash
    const imghash = location.href.match('#\/([^&]+)');
    if( imghash ){
        const bytes = new Uint8Array(imghash[1].match(/.{1,2}/g).map(v => parseInt(v, 16)));
        const decoder = new TextDecoder("utf-8");
        const meta = document.querySelector('meta[property="og:image"]');
        const imageUrl = decoder.decode(bytes);
        meta.setAttribute('content',imageUrl);
        loadScript(imageUrl, imghash[1]);
    } else {
        loadScript();
    }
};

// Entry Point
document.addEventListener('DOMContentLoaded', load, false );
