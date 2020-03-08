// use promise.
const loadImage = (source) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(source);
        }, false);
        image.src = source;
    });
};

export default loadImage;
