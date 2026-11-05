// sw.js — offline: every app file is cached on install and served cache-first. A new build has a new VERSION,
// so the browser installs the new worker, which drops the old cache. The book lives in IndexedDB, not here.
const VERSION = "zher-e9507c016a";
const FILES = ["./","index.html","app.js","fonts/plex-mono-400.woff2","fonts/plex-mono-500.woff2","fonts/plex-mono-600.woff2","fonts/plex-sans-400.woff2","fonts/plex-sans-500.woff2","fonts/plex-sans-600.woff2","fonts/plex-sans-700.woff2"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
