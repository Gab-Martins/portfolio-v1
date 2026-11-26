// Cache para funcionar offline. Ao alterar arquivos, aumente a versão.
const CACHE = "toronto-v15";
const ASSETS = ["./", "index.html", "data.js", "app.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png",
  "img/andar.jpg", "img/baldwin.jpg", "img/casa-loma.jpg", "img/cataratas.jpg", "img/chinatown.jpg", "img/cn-tower.jpg", "img/cottage.jpg", "img/distillery.jpg", "img/eaton.jpg", "img/festival.jpg", "img/fisher.jpg", "img/graffiti.jpg", "img/hardrock.jpg", "img/indigo.jpg", "img/kensington.jpg", "img/letreiro.jpg", "img/poutine.jpg", "img/power.jpg", "img/queens-park.jpg", "img/reference.jpg", "img/ripleys.jpg", "img/rom-cafe.jpg", "img/rom.jpg", "img/skywheel.jpg", "img/stjames.jpg", "img/stlawrence.jpg", "img/uoft.jpg", "img/vaughan.jpg", "img/yonge.jpg"];

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
