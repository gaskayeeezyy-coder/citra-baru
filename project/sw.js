const CACHE_NAME = 'pwa-app-v1';
const urlsToCache = [
    './',
    './index.html',
    './css/style.css',
    './css/animation.css',
    './js/app.js',
    './js/animation.js',
    './manifest.json'
];

// Install Event - Menyimpan file ke cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate Event - Membersihkan cache lama jika ada versi baru
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch Event - Mengambil file dari cache jika offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; 
                }
                return fetch(event.request);
            })
    );
});
