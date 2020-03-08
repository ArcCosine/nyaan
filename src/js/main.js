import "../css/style.scss";
import gra from "./gra.js";
import keyEvent from "./keyevent.js";
import mouseEvent from "./mouseevent.js";
import loadCat from "./loadcat.js";
import renderMeow from "./rendermeow.js";
import reloadImage from "./reloadimage.js";
import clickImage from "./clickimage.js";

// for pwa
import "./pwa.js";

// entry point
const load = () => {
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
    fetch("meow.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            const match = location.href.match("#/(.+)?/");
            const lang = match ? match[1] : "ja";
            const list =
                typeof jsondata[lang] !== "undefined"
                    ? jsondata[lang]
                    : jsondata.ja;
            list.sort(() => {
                return Math.random() - 0.5;
            }).forEach(renderMeow);
            // event bind
            document
                .querySelector("header img")
                .addEventListener("click", clickImage, false);
            document.addEventListener("keydown", keyEvent, false);
            document.addEventListener("mousemove", mouseEvent, false);
            document
                .getElementById("reload")
                .addEventListener("click", reloadImage, false);

            //create hash
            const imghash = location.href.match("#/([^&]+)/([^&]+)");
            if (imghash) {
                const bytes = new Uint8Array(
                    imghash[2].match(/.{1,2}/g).map(v => parseInt(v, 16))
                );
                const meta = document.querySelector(
                    'meta[property="og:image"]'
                );
                const imageUrl = new TextDecoder().decode(bytes);
                meta.setAttribute("content", imageUrl);
                loadCat(imageUrl);
            } else {
                loadCat();
            }
        });
};

// Entry Point
document.addEventListener("DOMContentLoaded", load, false);
