import meowMove from './meowMove.js';
import gra from './gra.js';

// click meow image
const clickImage = (eve) => {
    eve.preventDefault();
    meowMove(gra(document.querySelectorAll('a.text')).href);
};

export default clickImage;
