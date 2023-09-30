'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bba2c99c1c0d54ef105e14052bf7a3b0",
"assets/AssetManifest.json": "bf3a18bf232e91d5435a4393f7e0fa63",
"assets/assets/images/bolt.svg": "850ebe22333ab5cf3b40931d10f26746",
"assets/assets/images/calendar.svg": "c6bd6c4d8a5a86180b64ce8145573a59",
"assets/assets/images/chat-dots.svg": "f59bfbda27df76b296611d796c1f3e91",
"assets/assets/images/chat-info.svg": "73a3ac9d23aa9ca1ebcb9a1fd8d00e22",
"assets/assets/images/clipboard-check.svg": "08f4cab75fc405490c42e381f2f1f3ec",
"assets/assets/images/credit-card.svg": "0d845ca71d3804c0b5b460a1ff200759",
"assets/assets/images/envelope.svg": "66d93a6e88cebea62a0778745b65f96b",
"assets/assets/images/eye.svg": "0c482bd93df36adeb422f823fbe3bef5",
"assets/assets/images/file-list.svg": "64055de123279a48b1c46b0f3be1110a",
"assets/assets/images/filter.svg": "fabfddc679c397142d4fdf69b20db3fc",
"assets/assets/images/fire.svg": "a524f07eb8aac405b02c7a774516bd6b",
"assets/assets/images/grid-square.svg": "ebbe395d57fb70239962a8af8f1b6fe6",
"assets/assets/images/grid-web-3.svg": "2a533455053829d5063d5cdda49c2ad1",
"assets/assets/images/grid-web-5.svg": "107c9128b457ceba7f233e6397104b09",
"assets/assets/images/grid-web-6.svg": "e5b15e2ff0e5dc825d3300cc900f9092",
"assets/assets/images/heart.svg": "f1caeaa4a1a91d5b0c79a82fb94ff895",
"assets/assets/images/home.svg": "1ea69c6cf5322c347bc3451729366668",
"assets/assets/images/ic_minus_top.png": "9c64c8c3fcd09b5f96aba5914dbeb1b2",
"assets/assets/images/ic_plus_top.png": "0d6f6b092f8156248f47d058c041b413",
"assets/assets/images/log-out.svg": "3be31f06f9d20d9fad8386380531798a",
"assets/assets/images/logo.png": "ab65ef23e9d2c4bd84f7fd6db56f8953",
"assets/assets/images/menu-left.svg": "9ad94f8f83784cd1374557ba87a86d21",
"assets/assets/images/minus.svg": "4f33709fecaece2a25dffd14a43df272",
"assets/assets/images/moon.svg": "619de177f1128d8ae2577e732ec03cd2",
"assets/assets/images/more-vertical.svg": "15b6e3fe942450ff87f9e0b07c888b15",
"assets/assets/images/octagon-check.svg": "09bbbd8e61f891759df37f13a72c291d",
"assets/assets/images/plus-circle.svg": "340e65b259ba187ed94bf772381bca7a",
"assets/assets/images/profile.png": "616addc5808d60f3fe2ea5963d95c5e2",
"assets/assets/images/rotate-right.svg": "ef2812a7ee6f97f2b89b3617bca37d6b",
"assets/assets/images/search.svg": "baca6c3882f1390c2d327271bcdc2169",
"assets/assets/images/seen.png": "f93c83f36e3d29fad1d750e77773ef32",
"assets/assets/images/settings.svg": "b7b16205b70e8b6c60e637827c76f35c",
"assets/assets/images/shopping-cart.svg": "c2f02d72ddfa3cb87d9757737c2ac7ed",
"assets/assets/images/sun.svg": "f959f8a4222489ab260bcdf0c985cf90",
"assets/assets/images/times.svg": "c54bba2f91e77013bf715db472cc823c",
"assets/assets/images/trash.svg": "58926a7d3521dcfbf560e5e7078d8dd3",
"assets/assets/images/user.svg": "e307872b84b79d980703a37ed426ac3d",
"assets/assets/images/users.svg": "f7761ccc01237da4fd37ce8a763181af",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e87eeb7bf810427025264515fcb7e8e4",
"assets/NOTICES": "c5731f4433a52e8aa3b060d1e189da54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddd42b2118f0fa6993ad18f1b233457a",
"/": "ddd42b2118f0fa6993ad18f1b233457a",
"main.dart.js": "00d0a68d634bcc9d5ae00458ab840b51",
"manifest.json": "a382ec8f3186886571d7db4b7ce6a96d",
"version.json": "3e83f6587ce888c154861812e44eb323"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
