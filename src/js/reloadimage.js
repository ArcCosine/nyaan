import loadCat from './loadcat.js';
import getLang from './getLang.js';

// reload meow
const reloadImage = (eve) => {
    eve.preventDefault();
    document.getElementById('reload').classList.remove('loadend');
    history.replaceState(null, null, `/#!${getLang()}/`)
    loadCat();
};

export default reloadImage;
