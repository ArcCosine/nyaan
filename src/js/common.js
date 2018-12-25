import { Sound } from './sound.js';
import { loadScript } from './loadcat.js';

// get random array
const gra = (array) => {
    return array[Math.floor(Math.random() * array.length - 1)];
};


// say meow and move
const meowMove = (link) => {
    const sound = new Sound();
    sound.start().then(() => {
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

// move Nodes.
const moveNode = (activeNode, judgeNode) => {
    if (judgeNode) {
        activeNode.classList.remove('active');
        judgeNode.classList.add('active');
        window.scrollTo({
            top: judgeNode.offsetTop,
            behavior: 'smooth'
        });
    }
};

export { gra, clickImage, reloadImage, clickLink, moveNode }
