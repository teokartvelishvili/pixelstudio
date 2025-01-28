// // public/service-worker.js
// const CACHE_NAME = "image-cache-v1";
// const urlsToCache = [
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1737913892/IMG_3851_oocsey.jpg",
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1737914249/_MG_1175_ab7eda.jpg",
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1737913884/Firefly_Inpaint_20230805233255_kaa6ik.png",
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1737913881/IMG_4834_ujg6l7.jpg",
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1737913872/IMG_2462_t3tmju.jpg",
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1737913869/IMG_1366_fdxajh.jpg",
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1737913866/IMG_0749_ms8tyi.jpg",
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1735510838/IMG_0984_kpglis.jpg",
//   "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024,h_768/v1737914249/%E1%83%90%E1%83%A1_%E1%83%91%E1%83%94%E1%83%A0%E1%83%92_yxfqo3.jpg",
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Return the cached response if found, otherwise fetch it
//       return response || fetch(event.request);
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       )
//     )
//   );
// });
