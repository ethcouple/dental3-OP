// service-worker.js
self.addEventListener("install", (event) => {
    console.log("Service Worker installed.");
    event.waitUntil(
        caches.open("dental3-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/styles.css",
                "/manifest.json",
                "/icon-192.png",
                "/icon-512.png",
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
