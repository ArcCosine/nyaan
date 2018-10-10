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

// load cats script.
export const loadScript = (url) => {
    if( typeof url === 'undefined' ){
        fetch('https://api.thecatapi.com/v1/images/search?size=small&mime_type=jpg,png&format=json&order=RANDOM&limit=1&8ade48b6-7830-43aa-9c6b-5c557d072995').then((response)=>{
            return response.json()
        }).then((jsonres)=>{
            loadCat(jsonres[0].url).then((img)=>{
                document.querySelector('header img').src = img;
                const encoder = new TextEncoder('utf-8');
                const buf = encoder.encode(img);

                const imgUrl = Array.from(buf).map(v => v.toString(16)).join('');
                const aTags = document.querySelectorAll('section a.text');
                aTags.forEach((node,index,array)=>{
                    node.setAttribute('href', node.href.replace(/text=/, `text=https%3A%2F%2Fnyaan.work%2F%3Fimghash=${imgUrl}%0A`) );
                });
            });
        });
    } else {
        loadCat(url).then((img)=>{
            document.querySelector('header img').src = img;
            const aTags = document.querySelectorAll('section a.text');
            aTags.forEach((node,index,array)=>{
                node.setAttribute('href', node.href.replace(/text=/, `text=https%3A%2F%2Fnyaan.work%2F%3Fimghash=${url}%0A`) );
            });
        });
    }
};
