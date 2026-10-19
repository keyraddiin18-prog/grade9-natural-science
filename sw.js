const CACHE_NAME = 'g9-science-v1';
const ASSETS_TO_CACHE = [
    './',
    'index.html',
    'css/style.css',
    'js/app.js',
    'manifest.json',
    'units/biology-unit-1.html',
    'units/biology-unit-2.html',
    'units/biology-unit-3.html',
    'units/biology-unit-4.html',
    'units/biology-unit-5.html',
    'units/biology-unit-6.html',
    'pdfs/biology-unit-1.pdf',
    'pdfs/biology-unit-2.pdf',
    'pdfs/biology-unit-3.pdf',
    'pdfs/biology-unit-4.pdf',
    'pdfs/biology-unit-5.pdf',
    'pdfs/biology-unit-6.pdf'
];

// Yeroo jalqabaatti faayilii hunda kuusuu (Install)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Faayilii duraanii haquu (Activate)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Internet malee faayilii cache keessa jiru argachuu (Fetch)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});