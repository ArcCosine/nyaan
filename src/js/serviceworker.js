self.addEventListener('fetch',(event)=>{});

const version = "0.0.4";
const cacheName = `nyaan-${version}`;

self.addEventListener('install', (eve)=>{
    eve.waitUntil(
        caches.open(cacheName).then((cache)=>{
            return cache.addAll([
                '/basecat.png',
                '/index.html',
                '/kitty.mp3'
            ])
            .then(()=>self.skipWaiting())
        })
    );
});
