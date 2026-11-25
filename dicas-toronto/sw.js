// Cache para funcionar offline. Ao alterar arquivos, aumente a versão.
const CACHE = "toronto-v9";
const ASSETS = ["./", "index.html", "data.js", "app.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png",
  "img/rom.jpg", "img/distillery.jpg", "img/poutine.jpg", "img/yonge.jpg", "img/ikea.jpg", "img/eaton.jpg", "img/vs.jpg", "img/indigo.jpg", "img/bmv.jpg", "img/stlawrence.jpg", "img/queens-park.jpg", "img/stjames.jpg", "img/valuevillage.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Rede primeiro (pega atualizações), cache como reserva offline.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
