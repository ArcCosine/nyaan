import loadImage from "./loadimage.js";
import updatePage from "./updatepage.js";

// load cats script.
const loadCat = async url => {
    if (typeof url === "undefined") {
        const response = await fetch(
            "https://api.thecatapi.com/v1/images/search?size=small&mime_type=jpg,png&format=json&order=RANDOM&limit=1&8ade48b6-7830-43aa-9c6b-5c557d072995"
        );
        const jsonres = await response.json();

        const img = await loadImage(jsonres[0].url);
        updatePage(img, true);
    } else {
        const img = await loadImage(url);
        updatePage(img, false);
    }
};

export default loadCat;
