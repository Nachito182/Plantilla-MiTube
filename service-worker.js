self.addEventListener('install', (e) => {
    console.log('Service Worker instalado');
    e.waitUntil(
      caches.open('mitube-cache').then((cache) => {
        return cache.addAll(['./', './index.html', './style.css', './app.js']);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((res) => {
        return res || fetch(e.request);
      })
    );
  });
  