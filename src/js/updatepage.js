import replacePageElement from "./replacePageElement.js";

// update page
const updatePage = (url) => {

    // update image
    document.querySelector("header div img").src = url;

    // update page element 
    replacePageElement(url);

    // stop load animation
    document.getElementById("reload").classList.add("loadend");


};

export default updatePage;
