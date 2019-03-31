const cacheName = 'shuxia123_index';
const RUNTIME = 'shuxia123_runtime';
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll([
            '/dev/index.js'
        ]))
    );
});

self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.open(RUNTIME).then(cache => {
                return fetch(event.request).then(response => {
                    return cache.put(event.request, response.clone()).then(() => {
                        return response;
                    });
                }).catch((error) => {
                    return caches.match(event.request).then(cachedResponse => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                    });
                });
            })
        );
    }
});

self.addEventListener('activate', event => {
    console.log('active');
});
