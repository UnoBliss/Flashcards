self.addEventListener('fetch', (event) => {
  // Basic fetch handler to satisfy PWA installation criteria
  event.respondWith(fetch(event.request));
});
