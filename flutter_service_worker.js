'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
"assets/assets/logos/github.png": "5dff3cd71c914e14408ae778cb0528c1",
"assets/assets/logos/fmri.png": "68ba33ffe0d09f9e07217c0ae4ff04ba",
"assets/assets/logos/mmiv.png": "5cf865b0a618d89366cf3e2120711b59",
"assets/assets/logos/weblate.svg": "39d364dbd134844929ea10a2c598eaa9",
"assets/assets/logos/uib.png": "ab31705349850daeb97167c18b290d72",
"assets/assets/languages.txt": "e53b64edc41116db6d6a1723a590c6c5",
"assets/assets/video/NL.mp4": "d1af66f573f3c1a0c6ccc0fa952511e4",
"assets/assets/audio/Ka-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ga-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ba-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Ga.wav": "d735fd37701c6c8f7d47e390038006dc",
"assets/assets/audio/Ta-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Ba.wav": "0d9e52490f202432c2b85d36d13bbb6f",
"assets/assets/audio/Ka-Pa.wav": "92201496ed8f307e83c9ba9c1dc9401f",
"assets/assets/audio/Ga-Ka.wav": "6e89744cbc15baa21b35cf6c6fc49d68",
"assets/assets/audio/Da-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ba-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Da-Ga.wav": "d5fb4763885ca71c95ea6243d0b90898",
"assets/assets/audio/Ka-Da.wav": "1d519a48ae0f564d7ef2c7ff83f6596c",
"assets/assets/audio/Ka-Ga.wav": "38cb5cf33f3e4778cae25823b58695bc",
"assets/assets/audio/Ta-Ga.wav": "64738e2deba311558e41a19ee13c19fc",
"assets/assets/audio/Ta-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ga-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Da-Pa.wav": "a91baae624b9463c6f4af3713f2121fc",
"assets/assets/audio/Ka-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ka-Ba.wav": "edf7b12319057105669563ecfbc93907",
"assets/assets/audio/Ba-Ba.wav": "5ee19ebfe3abf57b4ba25f21b5ef9f6a",
"assets/assets/audio/Ga-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ga-Ta.wav": "84e9629ea86f5296feb8da9644b2eeab",
"assets/assets/audio/Da-Ta.wav": "3d7b4d8cfc20335c7835ce165c816c71",
"assets/assets/audio/Ta-Da.wav": "e2f1be83c514c60e787726d15d6b1877",
"assets/assets/audio/Da-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Da.wav": "6e334de1e64263830dc64ef188b5e484",
"assets/assets/audio/Ba-Ta.wav": "5021efa528bedd003215e6debb141e1f",
"assets/assets/audio/Da-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ta-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ta-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ka-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ka-Ka.wav": "9fef3bf56770ede849e33053554ac4a5",
"assets/assets/audio/Da-Ka.wav": "ffc953054cf1854b5dff033b49afe237",
"assets/assets/audio/Ga-Pa.wav": "b0056a69bb40bd7a6b16dee97ba9e46b",
"assets/assets/audio/Pa-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ba-Pa.wav": "a742a4bef5c0f9e52c95c96460494461",
"assets/assets/audio/Pa-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ga-Ba.wav": "d1755c8c360ee02dc4fe2c2e69da82a7",
"assets/assets/audio/Ga-Da.wav": "2490f71075bd1a22a2d923a3452a38b3",
"assets/assets/audio/Ga-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ba-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Da-Ba.wav": "53aaf66543194400e72410fe101c8f0c",
"assets/assets/audio/Da-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Da-Da.wav": "89e2af97bd8ad37151977b7291313d4c",
"assets/assets/audio/Ka-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ta-Pa.wav": "83511adf5c2b723b6eca1303419e288c",
"assets/assets/audio/Ta-Ka.wav": "4a2e23a3dc305fd4a88095319f803ced",
"assets/assets/audio/Ba-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ta-Ta.wav": "35f373770588e545811cb384818c86c6",
"assets/assets/audio/Ka-Ba.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ba-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Ta.wav": "c99ebc92063b5b12f09540da73c9ad2f",
"assets/assets/audio/Da-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ba-Ga.wav": "a827d5a0c0b7605b012510ac230ca677",
"assets/assets/audio/Ga-Ga.wav": "fc9467598d6a0f4100e45ed08133846a",
"assets/assets/audio/Ta-Ta.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Da-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Ga.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ka-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Pa-Ka.wav": "8cfd16e262480a065e7ff0b57c34d7dd",
"assets/assets/audio/Ga-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ta-Da.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ta-Ba.wav": "b5af8a176e8888fb599656929b9c65d4",
"assets/assets/audio/Ka-Ta.wav": "cfcbd6e226de2ebf7e71318a3004dac9",
"assets/assets/audio/Ba-Ka.wav": "0f2d2f7d6cdab003ee03c2ae47b24962",
"assets/assets/audio/Pa-Pa.wav": "fe251b779e1329157986cf6765929981",
"assets/assets/audio/Ba-Da.wav": "addad1aef67ea399f1ad33bccb8be13b",
"assets/assets/audio/Ga-Ka.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/Ba-Pa.wav.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/AssetManifest.json": "3dc441a57d28eb4aea61c898ca7bc68e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "41804bf71cfcf864ba309c0636ffd610",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "6ddca61f03944b33ce9eb6974f399db8",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "46a360dfef71c33b8da27ae777b0fab5",
"version.json": "716b54feee17c7de22f57fdcb251415d",
"index.html": "025eb0dd0a5e1c9f6c83b10095d5614c",
"/": "025eb0dd0a5e1c9f6c83b10095d5614c",
"manifest.json": "d79e74d0b02d13c330046bbaff46bcba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
