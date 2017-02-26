// sw.js

var CACHE_NAME = 'namp-card.firebaseapp.com-cache-v1';
var urlsToCache = [
	'/',
	'/index.html',
	'/profile.png',
	'icon-192x192.png',
	'icon-384x384.png'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log(`Opened cache for namp-card ${new Date()}`);
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request.url).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
