import "../css/style.scss";
import gra from "./gra.js";
import keyEvent from "./keyevent.js";
import loadCat from "./loadcat.js";
import renderMeow from "./rendermeow.js";
import reloadImage from "./reloadimage.js";
import clickImage from "./clickimage.js";
import getLang from "./getLang.js";
import getImageUrl from "./getImageUrl.js";
import replacePageElement from "./replacePageElement.js";
import switchLanguage from "./switchLanguage.js";

// for pwa
import "./pwa.js";

// entry point
const load = async () => {
    // update 
    const imageUrl = getImageUrl();

    if( imageUrl !== "" ){
        replacePageElement(imageUrl);
    }

    const backColors = [
        "pageA-bg",
        "pageB-bg",
        "pageC-bg",
        "pageD-bg",
        "pageE-bg",
        "pageF-bg",
        "pageG-bg",
        "pageH-bg",
        "pageI-bg",
        "pageJ-bg",
        "pageK-bg",
        "pageL-bg"
    ];
    document.body.classList.add(gra(backColors));

    // load meow
    const response = await fetch("meow.json");
    const jsondata = await response.json();
    const lang = getLang();
    const list =
        typeof jsondata[lang] !== "undefined"
        ? jsondata[lang]
        : jsondata.ja;
    list.sort(() => {
        return Math.random() - 0.5;
    }).forEach(renderMeow);

    // event bind
    document
        .querySelector("header div img")
        .addEventListener("click", clickImage, false);
    document.addEventListener("keydown", keyEvent, false);
    document
        .getElementById("reload-button")
        .addEventListener("click", reloadImage, false);
    document.getElementById("switch-language").addEventListener("click", switchLanguage, false);

    //create hash
    loadCat();
};

// Entry Point
document.addEventListener("DOMContentLoaded", load, false);
