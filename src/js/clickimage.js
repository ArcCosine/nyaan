import gra from "./gra.js";

// click meow image
const clickImage = (eve) => {
    eve.preventDefault();
    window.top.location.href = gra(document.querySelectorAll("a.text")).href;
};

export default clickImage;
