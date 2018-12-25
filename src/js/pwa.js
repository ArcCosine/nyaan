window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("./serviceworker.js")
            .then(function (registration) {
                //console.log("serviceWorker registed.");
            }).catch(function (error) {
                //console.warn("serviceWorker error.", error);
            });
    }
});
