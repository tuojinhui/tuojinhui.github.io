/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a182e26deaa8defb411f65497609215e"
  },
  {
    "url": "assets/css/0.styles.e95c68f0.css",
    "revision": "3dac3af6f8c8286833586a1fc1ca2c5b"
  },
  {
    "url": "assets/img/Optional.1bd3000c.png",
    "revision": "1bd3000cde5a374e06c50a3f2f679a3d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.50298c07.js",
    "revision": "cce385c8da2f86a12a7bc78f8337275b"
  },
  {
    "url": "assets/js/11.a76ff963.js",
    "revision": "5114d9af376b70b6fb64d46d1a0f15ee"
  },
  {
    "url": "assets/js/12.50e024ed.js",
    "revision": "422ff3a97f0b9de39398387b6462c23e"
  },
  {
    "url": "assets/js/13.30982864.js",
    "revision": "62497288086fda192ebfa400fa159914"
  },
  {
    "url": "assets/js/14.c7f8ee9f.js",
    "revision": "bb7c708376fc7acf5fce20987543b9b1"
  },
  {
    "url": "assets/js/15.02498c4a.js",
    "revision": "2087ca0f1c5dad7d111239c4ed688e03"
  },
  {
    "url": "assets/js/16.04e40284.js",
    "revision": "9c87840a03e7d4f849559a3c68364b56"
  },
  {
    "url": "assets/js/17.6f7752d2.js",
    "revision": "bac3ca25f9333213ddc2b2e0d91f5888"
  },
  {
    "url": "assets/js/18.95d2dd9c.js",
    "revision": "4460f82baabf9ff1998a0f0bc8c96f22"
  },
  {
    "url": "assets/js/19.60ef47d4.js",
    "revision": "ac9cd2a49745e5c33c62e0b4b918244e"
  },
  {
    "url": "assets/js/2.e5d7992a.js",
    "revision": "0070ca731afa0b1544bd959308507b5d"
  },
  {
    "url": "assets/js/20.8b50fbb5.js",
    "revision": "739e125f21e79eb48293470df297223c"
  },
  {
    "url": "assets/js/21.f6b9a7e2.js",
    "revision": "dfe28b60f31843838a4e817d61ad4298"
  },
  {
    "url": "assets/js/22.b495b41d.js",
    "revision": "628a5ceb90402c752211b24c03a61aa6"
  },
  {
    "url": "assets/js/23.9e63dd7a.js",
    "revision": "fc5f702d2e601252626bd7373013d8d5"
  },
  {
    "url": "assets/js/24.82d0de24.js",
    "revision": "a58e8431fddf853e824e1f4ae0ee9643"
  },
  {
    "url": "assets/js/25.b5a174ba.js",
    "revision": "f6d5b62c9e0fa738c0f2974709b27592"
  },
  {
    "url": "assets/js/26.584d5dd5.js",
    "revision": "6957edf64cb93fa13835c37e3f607a72"
  },
  {
    "url": "assets/js/27.c68fd98f.js",
    "revision": "887bec03d7276a229627666b114d736a"
  },
  {
    "url": "assets/js/28.5255c01e.js",
    "revision": "f67284805e65c27a0175d8c82e93a969"
  },
  {
    "url": "assets/js/29.113f77f1.js",
    "revision": "292c81596e37a5f4c51e838f3a181055"
  },
  {
    "url": "assets/js/3.504bc785.js",
    "revision": "e2d8f0cc01bfa55a3bd038a20020a043"
  },
  {
    "url": "assets/js/30.fe989c09.js",
    "revision": "8541675dc7ba8e2ead2365af958adaf8"
  },
  {
    "url": "assets/js/31.e6d11533.js",
    "revision": "e2b394c741d1fe1f425947e004e0ccbe"
  },
  {
    "url": "assets/js/32.d3ce662f.js",
    "revision": "6d82b5e2c7fc9dd56dd0c699901b425a"
  },
  {
    "url": "assets/js/33.c5f54378.js",
    "revision": "9e1db24501b7d7bd446a07ae11cb4792"
  },
  {
    "url": "assets/js/34.f818c133.js",
    "revision": "bf81afc5dc12cbf3b6d4ef8a8fbb4a28"
  },
  {
    "url": "assets/js/35.bb21d55b.js",
    "revision": "012aeaac2235e17d7d12bf171a9e7a09"
  },
  {
    "url": "assets/js/36.3fee4fd3.js",
    "revision": "5417645ff4180e004def9d5ffba15961"
  },
  {
    "url": "assets/js/37.57ba1d06.js",
    "revision": "c588856b3c16ff165b9a186c3496268a"
  },
  {
    "url": "assets/js/38.1b14c845.js",
    "revision": "8e9d97ff8b34228a243092fcd5ac9b02"
  },
  {
    "url": "assets/js/39.cdbefa6e.js",
    "revision": "ef5ae9bafb3f3c8d3d1303dfa00a9e7a"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.932283da.js",
    "revision": "134e22462accf19ffc9764857ff24ffb"
  },
  {
    "url": "assets/js/41.78eb7679.js",
    "revision": "77c2bff6e8ffb0a34bf1931874834b7a"
  },
  {
    "url": "assets/js/5.9be01b1a.js",
    "revision": "6d18628e5fe5fdff03b46664be85923d"
  },
  {
    "url": "assets/js/6.003f7a09.js",
    "revision": "fd8ec98b8bd9268731c3f7291d788500"
  },
  {
    "url": "assets/js/7.d330c35e.js",
    "revision": "f6ba086f7df81ccc3038928a7a2321ba"
  },
  {
    "url": "assets/js/8.28d5eee3.js",
    "revision": "4ed0c7a408effb0a80d366c0f564bfff"
  },
  {
    "url": "assets/js/9.66d982ac.js",
    "revision": "65d985bcb5ea280e67ffcea805102f8a"
  },
  {
    "url": "assets/js/app.3475a171.js",
    "revision": "51eb6ff71de27027d734b33745905b38"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "a667f9b6e2a4873a2e708890c09aa588"
  },
  {
    "url": "element/element2/index.html",
    "revision": "cf0bad57b5a2a94540aa252bf2467913"
  },
  {
    "url": "element/index.html",
    "revision": "08f0dbb2dae4c53cbcc861392c44e9e6"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "79c0ecc997b6b90771817e9fd987371a"
  },
  {
    "url": "java/index.html",
    "revision": "e313bea2ce5bf2278025ed06a3795a17"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "c0adbe30b758fe22d436616c070e4388"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "9e2da3b6646a82ee91692062f01e56bb"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "1f3fb3ceef0f5234c5486555cab17974"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "686a426a96fc45c692bc1cabc9c3d1a0"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "326c42fff6cfaefc306cb24c84d3471d"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "42f7fef296b67b00805e3c066493ecfb"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "a7d60d1dd869ec03a702ac21d79c9305"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "3b7809c16d6c53ce111fd7121f06badc"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "fccfd325d19610e69af1d4b6020faa83"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "ecdf359f5c15b4c7dc1f9145d2c0a5fa"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "fd8ab27899e2d5f5c636759c4f026733"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "653b80a82160e60804db14940115281d"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "0ada2341fdae421edea482de1786b3b6"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "9632429b8400912761315bbd6babc377"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "fc091a035d1d36110fd3328862db403a"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "6616f62051d250db8c1fbfe261993cd7"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "06524504fba41ff8c315848e8379b81d"
  },
  {
    "url": "java/java2/index.html",
    "revision": "4d52428524fe4d19ae34d0f3201519c6"
  },
  {
    "url": "mysql/index.html",
    "revision": "81efb055c9dec0f15d1e910e46fd05e7"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "4c6a3de6869e5169f58f3ed2f98e3bc2"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "652ee9cc7565ce2472a1da26c056cd5a"
  },
  {
    "url": "other/index.html",
    "revision": "913306c6ae03d2e95f0e1e7047117078"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "b9a6739f2d61df8079b603ecf717cd24"
  },
  {
    "url": "vue/index.html",
    "revision": "f049593bfc9503914ec481cada012954"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "75a7db2e8aa93ea96abbed370b47778f"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "7c966840a20c714bec1253e3d646298a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
