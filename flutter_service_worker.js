'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fbf1a8025b7a365483cee7904604e045",
"version.json": "33163093754c037342d92727b1043f42",
"index.html": "192c5baee83e8cc1236d73d1a5ebf4aa",
"/": "192c5baee83e8cc1236d73d1a5ebf4aa",
"main.dart.js": "c8f12528a355d909dd033cee0c67bb7d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "6bdaea9b1ea5e231b78064c724893c53",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7679d1e4d40b99ef765373b314fbc96a",
".git/config": "305573b981836d20bab94c2d4ec9e076",
".git/objects/0d/76ab7b497c519f85228ea5ad702e8c284d545b": "c7fe55c5f453fb2449b6225ba4a26c25",
".git/objects/0d/5960fadc2819f1d0e6370dd9e50f2067c2e4d5": "1605f2d3350914634fc9d9ac9140892b",
".git/objects/3e/1cc509a341b13a91cdd6ed8931f964a8eb614d": "8e73989556f56d30fd2fda78521bfd7f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/103685b815e3be5e34120eed981f664942e403": "cf1a711e775235260baf453590f29632",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/90d81fa14af79d393ca81d53f140543414e2ae": "bbbd57916074cf6a2275b2025e4bc097",
".git/objects/5a/8cb68b190ac317e3002c36e300b148c018bd04": "dee1cd4eb5de17c6c1c5301f1ffa8fed",
".git/objects/05/52a7ec0fc0fd3fe3eea18e7d0d77379da97de3": "cfbf99ddd8e4810deb6add9bbf2abc21",
".git/objects/02/8105f4452937a6f37648635e0e9c165928fe4d": "75a5f944d82891f05cba92e1ba97ec84",
".git/objects/d9/e26f8b97ae934fc951e34b8558e3295848eca5": "f4640376fe7936774f7a9da840a404d6",
".git/objects/bb/16a77081c929aea4973b7956e06d14c43370b3": "d69bac4eb8486a28dfb77e0eb08497b8",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/beda0a5ad7d608b0e29fd75aab41ad725f8d1a": "81f91f78741867f0a5bcad562e877d85",
".git/objects/d7/d587e3f07783826ab9d8300844df70c11b84c0": "5e07517b544ad1440e62f7bea5376994",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/320b327cc84b89943691dd57975bb9d236659f": "261b6459989932a1630b2b635fcca67c",
".git/objects/ab/bdb6753ef011e2c89b4b8b89a2e735434ff75a": "850e6819e028420cd30c7f98240a2871",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/aab9a246d1212404a66e5520f7ef450ad09f29": "38f3e303a3636360709721b8b1fc24b3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/04e222306a912685b83fda0feff76b5ba97c04": "839590dd24fed9dd2293275cbb90139f",
".git/objects/cf/7097a3ffe14addd5cae4b2f66777f7bac22ed2": "4833b70f60f2df68850a92b89def372c",
".git/objects/c8/7a1839d6e19c0b5bfde15fbf12ca4b92206328": "2b031cb7400b6c28ac29f9cb19a0e6e3",
".git/objects/c1/f0c414d92a8a166ab82b7cb4df501f36d9e5b7": "452513d9e727e2960f985e7b0069010a",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/288d8d757be1153e9181c9d7e862ae651676b9": "fe05ce8e3fa8d9494a1502887008def6",
".git/objects/4b/db2879f02754c833524e44cbb31c1a9f9efdd7": "ef359254fdf3b6d8ff514e861adce090",
".git/objects/7d/1cc51ed3c70fc8302b232215bc1e234cbb3efe": "7fbd4088efee37b1c04f46ab90b89cbd",
".git/objects/16/c37c8d36aeda6be2ca4daa513cf74c4145ede2": "9b0e3168491b8507421cc7ec8ca33409",
".git/objects/42/bf0b045270f572c2d8ab23c6c6ea91ea9a480b": "e802a326fa6c5e8880ae947812cb19fd",
".git/objects/42/9c3838c40d9de93a497d3f8cbcf3eafcb46054": "f29d1ec19205ad44476c461552f1b2b1",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/863455f74d57bef60ca3000409282f5ae7f87c": "e3f628595dfe5ed4e3bb6fd7447ed360",
".git/objects/26/3ed396688c6e17ed7a1e4c21d212554169602e": "fee1c0c57fd356c4d2aeff90f4a35132",
".git/objects/2a/fb72b60d2c86ecbfeb66bdb0783ab2cbf4101a": "2a5cb4b783a5b9a27a985a1c80775068",
".git/objects/88/406b7b0f55b27b8b62e000db0192b82b97bd07": "2f5f095200742be2b918ca6dc0593465",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5d/02e5c3a80f3a27f61d087d0f7fe308c093a927": "83af64d586d22f098e8b7fb2d7ba69b9",
".git/objects/5d/04177cc7c8b9216f7546352fadd9c58be0eece": "5fef78b3dfaaf1b45494151ab7b3b398",
".git/objects/91/b358ff96ed91fe5da8c55a33a63310824fa6fc": "7e5a673983a1a0eb03746fdc318e4be5",
".git/objects/54/8ec775263d4328a7560a8fb9775eebb26172cd": "bff26e062640fed690d71810922e87dd",
".git/objects/98/d1af68d8e361887a85806e6ab0a056ef58fe6f": "a20fe29f46caba20a4dd66ff8e1b4021",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/b711e3e5006b50fbc569e211dc4849d9795072": "ac371b1e4f965b861a0d9b188b89bb1c",
".git/objects/5b/52f14cb2e6355ac9dd0c137dbcb6a11f3ae5e0": "15150faae54fcc7eadc52a661768ddd6",
".git/objects/6c/280bc90ad0b1894ecd1f84cb9190de40d13df2": "de08f9c52e81fa6fc96f51553df57f08",
".git/objects/63/25fa8e1785dc451ac40b080beef5ed4b099d6c": "2bfab1134fbf81be31cfb2fd8c381403",
".git/objects/90/628cf436e79f2f9a454d8c8390c86665d7bad3": "300e26edebc193f4bf99248b38517474",
".git/objects/d3/feee976accd94cb5242b6c5d7e8480ee1fd405": "097777fabdd2dde27f24af1d68579461",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/61d44de7e895cbe6ea1c32d9ec7e5ad45ac343": "7ec20b16d5ff644521e38de2ef8f2e90",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/b2ac427c7e1cab5a238e7114b0562fb5db5cd8": "cef42860c2e5fec69e6b593affd0ae64",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/f1e1f9d77f1c46bf9d8d11aa45642bf7daa767": "f02062e24f9e5630286d7e1537db29e4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c2/4689e622d840f57f0bd72740220a0006ac205e": "402ca4f36dba02f8501ddcb135412ab9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/29ceb8dd854a50a8c5b5ee066361ffcd367eb9": "cfc2030e7aa870630ee24113af610b82",
".git/objects/1b/aa1faa5da95c53c771b3c0cbddc1c8c874324d": "8cd7906fee04eebd3e2dd350775a91b9",
".git/objects/77/3b96e5c27ac2032a337056530e78baaf5b14b0": "e4b89f583cb388f3a8879d2d13a7b58b",
".git/objects/48/90e5bcb636ff5af28f4885986725d25c6ae09c": "b2f8cc2e8f0942712210ddeac15cfffd",
".git/objects/70/ba48d2f3f7aff5130d1c042d21c7ad18aa91e1": "f84584f888db977f3747081600b47f73",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/12/ca47ca2817789afbb526b590a426c3c09d3bd8": "8c47176babfa482d179b2fc5588a3562",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/56c3d97f74dba5ef5b3ed47c71c52ca028f285": "95f07108fae265f60993c1b6ecca4f0e",
".git/objects/2b/8c2e42447cdf17c7dd56f81e129048f8c5c6ae": "31df96a7b9d6fb21e7566edfd944c8e6",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "50bd192b287ce4b68d1616bca584daa8",
".git/logs/refs/heads/dev": "72c2a3d29bb674c4ac19300e255a21f9",
".git/logs/refs/heads/main": "2048a051c5dd585f48c51ba904ddbec2",
".git/logs/refs/remotes/origin/dev": "8a47f4c07e177db5269aafba9f987bcd",
".git/logs/refs/remotes/origin/main": "b5e2605a2482738b3b9c5b5203b6b1c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/dev": "1a6fdece8f96f1877f38dc2ccd6eccff",
".git/refs/heads/main": "e6587f8f8836811d9c0b2b2dda432e9a",
".git/refs/remotes/origin/dev": "1a6fdece8f96f1877f38dc2ccd6eccff",
".git/refs/remotes/origin/main": "41fa89de5aec6bce578b6c91f0d39770",
".git/index": "2fab6e78cc574d6a3fc5f5b1724a0d3d",
".git/COMMIT_EDITMSG": "c2ed5e75f1bbb436b9a0b9271044f79c",
".git/FETCH_HEAD": "0b9f4d22e09308aee72c9464beb7843b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "a7ab5566b9e61efb822093ec3955cc4b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "603ce4294d44261217986ef913d5f266",
"canvaskit/canvaskit.js.symbols": "9f3ec51152264bb934742f7ab3182998",
"canvaskit/skwasm.wasm": "6ea61703abbea6435662c461c051cea7",
"canvaskit/chromium/canvaskit.js.symbols": "81e4e248569fa8a3f066e1cb0cc50758",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "8f7556f94d744990271abf76b25880f9",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "a6f69d75a570a799d3a698863d7b3bf9",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
