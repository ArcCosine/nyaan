const version="0.3.4",cacheName="nyaan-0.3.4",CACHE_KEYS=[cacheName];self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheName).then((e=>e.addAll(["/","/index.html","/basecat.png","/witch-cat.png","/language.png","/android-chrome-96x96.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/maskable_icon.png","/favicon.ico","/meow.json","/mstile-150x150.png","/icon-192x192.png","/icon-512x512.png"]).then((()=>self.skipWaiting())))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.filter((e=>!CACHE_KEYS.includes(e))).map((e=>caches.delete(e)))))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((function(n){return n||fetch(e.request)})))}));