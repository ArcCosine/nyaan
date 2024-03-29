const version = '0.3.4';
const cacheName = `nyaan-${version}`;
const CACHE_KEYS = [
  cacheName
];

self.addEventListener('install', (eve) => {
    eve.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/basecat.png',
                '/witch-cat.png',
                '/language.png',
                '/android-chrome-96x96.png',
                '/apple-touch-icon.png',
                '/browserconfig.xml',
                '/favicon-16x16.png',
                '/favicon-32x32.png',
                '/maskable_icon.png',
                '/favicon.ico',
                '/meow.json',
                '/mstile-150x150.png',
                '/icon-192x192.png',
                '/icon-512x512.png'
            ])
                .then(() => self.skipWaiting())
        })
    );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => {
          return !CACHE_KEYS.includes(key);
        }).map(key => {
          return caches.delete(key);
        })
      );
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
