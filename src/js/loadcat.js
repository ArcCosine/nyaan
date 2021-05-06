import getImageUrl from "./getImageUrl.js";
import loadImage from "./loadimage.js";
import updatePage from "./updatepage.js";

// load cats script.
const loadCat = async () => {
    let imageUrl = getImageUrl();
    if (!imageUrl) {
        const response = await fetch(
            "https://api.thecatapi.com/v1/images/search?size=full&mime_type=jpg,png&format=json&order=RANDOM&limit=1&8ade48b6-7830-43aa-9c6b-5c557d072995"
        );
        const jsonres = await response.json();
        imageUrl = jsonres[0].url
    } 
    updatePage(await loadImage(imageUrl));
};

export default loadCat;
