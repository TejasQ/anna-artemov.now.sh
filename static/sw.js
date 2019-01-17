const CACHE_NAME = "simple-cache-v1";
const urlsToCache = [
  "/",
  "/coaching",
  "/ueber-anna",
  "/vortraege",
  "/static/anna.webp",
  "/static/anna2.webp",
  "/static/badges.webp",
  "/static/cv.docx",
  "/static/logo.webp",
  "/static/logomark.webp",
  "/static/style.css",
  "/static/fonts/hello-sunshine.woff",
  "/static/fonts/hello-sunshine.woff2",
  "/static/fonts/hinted-LetterGothicStd-BoldSlanted.woff",
  "/static/fonts/hinted-LetterGothicStd-BoldSlanted.woff2",
  "/static/fonts/hinted-LetterGothicStd-Slanted.woff",
  "/static/fonts/hinted-LetterGothicStd-Slanted.woff2",
  "/static/fonts/hinted-LetterGothicStd.woff",
  "/static/fonts/hinted-LetterGothicStd.woff2",
];

self.addEventListener("install", event => {
  const preLoaded = caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache));
  event.waitUntil(preLoaded);
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }),
  );
});
