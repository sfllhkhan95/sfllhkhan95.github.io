/** This is the "Offline copy of assets" service worker
 *
 * A solution that expands the offline capabilities of your app. A copy of each
 * pages is stored in the cache as your visitors view them. This allows a
 * visitor to load any previously viewed page while they are offline.
 */

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);
