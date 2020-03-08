import meowMove from "./meowmove.js";

// click meow
const clickLink = eve => {
    eve.preventDefault();
    meowMove(eve.target.href);
};

export default clickLink;
