const version = '0.1.0';
const cacheName = `nyaan-${version}`;

self.addEventListener('install', (eve) => {
    eve.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/basecat.png',
                '/android-chrome-96x96.png',
                '/apple-touch-icon.png',
                '/browserconfig.xml',
                '/favicon-16x16.png',
                '/favicon-32x32.png',
                '/favicon.ico',
                '/meow.json',
                '/mstile-150x150.png',
                '/safari-pinned-tab.svg',
                '/kitty.mp3',
                '/icon-192x192.png',
                '/icon-512x512.png'
            ])
                .then(() => self.skipWaiting())
        })
    );
});

self.addEventListener('fetch', (event) => {

    //console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );

});
