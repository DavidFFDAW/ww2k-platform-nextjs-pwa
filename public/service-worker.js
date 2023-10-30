const installEvent = () => {
    self.addEventListener("install", (e) => {
        // Force the waiting service worker to become the active service worker.
        self.skipWaiting();

        e.waitUntil(
            caches.open("public").then((cache) => {
                // Cache app public files
                return cache.addAll([
                    "/",
                    "/fonts/DreadnoughtusMedium.ttf",
                    "/icons/icon-192x192.png",
                    "/icons/icon-512x512.png",
                    "/owens.jpg",
                    "/rhea.webp",
                    "/roman.jpg",
                    '/cody.jpg',
                ]);
            })
        );
    });
};
installEvent();

const activateEvent = () => {
    self.addEventListener("activate", () => {
        // Remove old caches
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter((key) => key !== "static")
                    .map((key) => caches.delete(key))
            );
        });

        // Force the waiting service worker to become the active service worker.
        self.clients.claim();
    });
};
activateEvent();