import getLang from "./getLang.js";
import renderMeow from "./rendermeow.js";

const switchLanguage = async () => {
document.querySelector('section').innerHTML ='';

    const lang = getLang() === 'ja' ? 'en' : 'ja';
    const match = location.href.match(/#!\/(.+)?\/(.+)/);
    let imageHashUrl = '';
    if( match ){
        imageHashUrl = match[2];
    }
    const response = await fetch("meow.json");
    const jsondata = await response.json();
    const list =
        typeof jsondata[lang] !== "undefined"
        ? jsondata[lang]
        : jsondata.ja;
    list.sort(() => {
        return Math.random() - 0.5;
    }).forEach(renderMeow);

    document.querySelector("#switch-language span").textContent = lang;

    history.replaceState(null, null, `/#!/${lang}/${imageHashUrl}`);
};

export default switchLanguage;
