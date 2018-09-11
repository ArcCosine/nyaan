self.addEventListener('fetch',(event)=>{});

const version = "0.0.1";
const cacheName = `nyaan-${version}`;

self.addEventListener('install', (eve)=>{
    eve.waitUntil(
        caches.open(cacheName).then((cache)=>{
            return cache.addAll([
                '/',
                '/index.html',
                'kitty.mp3'
            ])
            .then(()=>self.skipWaiting())
        })
    );
});
