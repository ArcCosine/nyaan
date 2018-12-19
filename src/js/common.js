import { Sound } from './sound.js';
import { loadScript } from './loadcat.js';

// get random array
const gra = (array) => {
    return array[Math.floor(Math.random()*array.length-1)];
};


//
const meowMove = (link) => {
    const sound = new Sound();
    sound.start().then(()=>{
        window.top.location.href = link;
    });
};

// click meow image
const clickImage = (eve) => {
    eve.preventDefault();
    meowMove(gra(document.querySelectorAll('a.text')).href);
};


// click meow
const clickLink = (eve) => {
    eve.preventDefault();
    meowMove(eve.target.href);
};

// reload meow
const reloadImage = (eve) => {
    eve.preventDefault();
    document.getElementById('reload').classList.remove('loadend');
    loadScript();
};


export { gra, clickImage, reloadImage, clickLink }
