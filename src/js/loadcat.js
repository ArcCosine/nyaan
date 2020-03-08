import loadImage from "./loadimage.js";
import updatePage from "./updatepage.js";

// load cats script.
const loadCat = url => {
    if (typeof url === "undefined") {
        fetch(
            "https://api.thecatapi.com/v1/images/search?size=small&mime_type=jpg,png&format=json&order=RANDOM&limit=1&8ade48b6-7830-43aa-9c6b-5c557d072995"
        )
            .then(response => {
                return response.json();
            })
            .then(jsonres => {
                loadImage(jsonres[0].url).then(img => {
                    updatePage(img, true);
                });
            });
    } else {
        loadImage(url).then(img => {
            updatePage(img, false);
        });
    }
};

export default loadCat;
