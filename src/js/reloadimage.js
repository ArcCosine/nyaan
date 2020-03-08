import loadCat from './loadcat.js';

// reload meow
const reloadImage = (eve) => {
    eve.preventDefault();
    document.getElementById('reload').classList.remove('loadend');
    loadCat();
};

export default reloadImage;
