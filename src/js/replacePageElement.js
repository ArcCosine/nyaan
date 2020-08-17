import getLang from "./getLang.js";

// replace page element.
const replacePageElement = url => {
    // set up language
    const lang = getLang();

    // update image hash url
    const imageHashUrl = Array.from(new TextEncoder().encode(url))
        .map(v => v.toString(16))
        .join("");

    // update meta data.
    document
        .querySelector('meta[property="og:image"]')
        .setAttribute("content", url);
    history.replaceState(null, null, `/#!${lang}/${imageHashUrl}`);

    const fixUrl = encodeURIComponent(
        `https://nyaan.work/#!${lang}/${imageHashUrl}`
    );

    Array.from(document.querySelectorAll("section a.text")).map(v =>
        v.setAttribute("href", v.href.replace(/url=.*?\&/, `url=${fixUrl}&`))
    );
};

export default replacePageElement;
