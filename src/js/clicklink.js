// click meow
const clickLink = (eve) => {
    eve.preventDefault();
    window.top.location.href = eve.target.href;
};

export default clickLink;
