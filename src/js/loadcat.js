// use promise.
const loadCat = (source)=>{
    return new Promise((resolve,reject)=>{
        const image = new Image();
        image.addEventListener('load', ()=>{
            resolve(source);
        }, false );
        image.src = source;
    });
}

// async load.
const loadScript = (()=>{
    fetch('https://api.thecatapi.com/v1/images/search?size=small&mime_type=jpg,png&format=json&order=RANDOM&limit=10&8ade48b6-7830-43aa-9c6b-5c557d072995').then((response)=>{
        return response.json()
    }).then((jsonres)=>{
        loadCat(jsonres[Math.floor(Math.random()*jsonres.length)].url).then((img)=>{
            document.querySelector('header img').src = img;
        });
    });
})();
