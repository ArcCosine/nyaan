import Sound from './sound.js';

// say meow and move
const meowMove = (link) => {
    const sound = new Sound();
    sound.start().then(() => {
        window.top.location.href = link;
    });
};


export default meowMove;
