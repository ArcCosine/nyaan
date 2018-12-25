// use promise.
const loadCat = (source) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(source);
        }, false);
        image.src = source;
    });
};

// update page
const updatePage = (url, isUpdateOption) => {

    // update image
    document.querySelector('header img').src = url;

    // getImage url
    const hasImageUrl = Array.from(new TextEncoder().encode(url)).map(v => v.toString(16)).join('');

    // update atgas
    replaceATags(hasImageUrl);

    // stop load animation
    document.getElementById('reload').classList.add('loadend');

    // update other information
    if( isUpdateOption ){
        document.querySelector('meta[property="og:image"]').setAttribute('content', url);
        history.replaceState(null, null, `/#/${hasImageUrl}`);
    }
};


// replace tags.
const replaceATags = (imageUrl) => {
    Array.from(document.querySelectorAll('section a.text')).map(v => v.setAttribute('href', v.href.replace(/url=.*?\&/, `url=${encodeURIComponent('https://nyaan.work/#/' + imageUrl)}&`)))
};

// load cats script.
export const loadScript = (url) => {
    if (typeof url === 'undefined') {
        fetch('https://api.thecatapi.com/v1/images/search?size=small&mime_type=jpg,png&format=json&order=RANDOM&limit=1&8ade48b6-7830-43aa-9c6b-5c557d072995').then((response) => {
            return response.json()
        }).then((jsonres) => {
            loadCat(jsonres[0].url).then((img) => {
                updatePage(img, true)
            });
        });
    } else {
        loadCat(url).then((img) => {
            updatePage(img, false)
        });
    }
};
