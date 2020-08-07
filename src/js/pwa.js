window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        await navigator.serviceWorker.register("./serviceworker.js");
    }
});
