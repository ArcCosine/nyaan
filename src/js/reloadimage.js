import loadCat from './loadcat.js';
import getLang from './getLang.js';

// reload meow
const reloadImage = (eve) => {
    eve.preventDefault();
    document.getElementById('reload').classList.add('start');
    document.getElementById("reload-button").disabled = true;
    history.replaceState(null, null, `/#!/${getLang()}/`)
    loadCat();
};

export default reloadImage;
