// sw.js
const CACHE_NAME = 'exchange-calc-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // アイコン画像もキャッシュする場合
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response ? response : fetch(event.request);
      })
  );
});
