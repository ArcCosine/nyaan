import meowMove from "./meowMove.js";

// click meow
const clickLink = eve => {
    eve.preventDefault();
    meowMove(eve.target.href);
};

export default clickLink;
