// use promise.
const loadCat = (source)=>{
    return new Promise((resolve,reject)=>{
        const image = new Image();
        image.onload = ()=>{
            resolve(source);
        }
        image.src = source;
    });
}

window.nyaan = (res)=>{
    const pos = Math.floor(Math.random()*res.length);
    const catLink = res[pos];
    loadCat(catLink).then((img)=>{
        document.querySelector('header img').src = img;
    });
};

// async load.
const loadScript = (()=>{
    const script = document.createElement('script');
    script.src = 'https://script.google.com/macros/s/AKfycbzeDnzoGh0ht17HfPlrCRjoVouWxYvpYP3aPafox2FzAfnxnc79/exec?callback=nyaan';
    script.async = true;
    document.body.appendChild(script);
})();
