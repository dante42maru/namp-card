// sw.js

var CACHE_NAME = 'namp-card.firebaseapp.com-cache-v1';
var urlsToCache = [
	'/'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log(`Opened cache for namp-card ${new Date()}`);
			return cache.addAll(urlsToCache);
		})
	);
});
