// replace tags.
const replaceATags = (lang, imageUrl) => {
    Array.from(document.querySelectorAll("section a.text")).map(v =>
        v.setAttribute(
            "href",
            v.href.replace(
                /url=.*?\&/,
                `url=${encodeURIComponent("https://nyaan.work/#/" + lang + "/" + imageUrl)}&`
            )
        )
    );
};

// update page
const updatePage = (url, isUpdateOption) => {
    // set up language
    const urlhash = location.href.match('#\/([^&]+)\/([^&]+)');
    const lang = typeof urlhash !== 'undefined' && urlhash[1] ? urlhash[1] : 'ja';


    // update image
    document.querySelector("header img").src = url;

    // getImage url
    const hasImageUrl = Array.from(new TextEncoder().encode(url))
        .map(v => v.toString(16))
        .join("");

    // update atgas
    replaceATags(lang, hasImageUrl);

    // stop load animation
    document.getElementById("reload").classList.add("loadend");

    // update other information
    if (isUpdateOption) {
        document
            .querySelector('meta[property="og:image"]')
            .setAttribute("content", url);
        history.replaceState(null, null, `/#/${lang}/${hasImageUrl}`);
    }
};

export default updatePage;
