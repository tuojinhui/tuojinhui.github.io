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
    "revision": "168a82f6750a76d27903b975a9c2cbc3"
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
    "url": "assets/js/13.717356e3.js",
    "revision": "20420fa3f2ae2d4aba4a2d4ea62634ae"
  },
  {
    "url": "assets/js/14.f1351a0c.js",
    "revision": "8b10a62682bde034f05c2c27f25701bd"
  },
  {
    "url": "assets/js/15.8590e6d3.js",
    "revision": "10a01505bd023472cbb2b2e366464222"
  },
  {
    "url": "assets/js/16.99efc3ff.js",
    "revision": "7878a78b51c3d6ff9391687bfc4d9c75"
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
    "url": "assets/js/23.52dc09be.js",
    "revision": "34bb748a98abd713bd6fa5f1015bf1a4"
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
    "url": "assets/js/29.1e214f54.js",
    "revision": "ea9c92daf1aa3523f4119bacfc89926d"
  },
  {
    "url": "assets/js/3.504bc785.js",
    "revision": "e2d8f0cc01bfa55a3bd038a20020a043"
  },
  {
    "url": "assets/js/30.85d7673b.js",
    "revision": "27fdc49a30fc8cb1a494de04ec1d2d22"
  },
  {
    "url": "assets/js/31.43e94e86.js",
    "revision": "50ee203f0faee477d57b755a40c3cc81"
  },
  {
    "url": "assets/js/32.42bac26f.js",
    "revision": "71c356568225cc9527f0737d38cfa633"
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
    "url": "assets/js/37.d51066bd.js",
    "revision": "933abeadc163c1894af90dbcd970a0c9"
  },
  {
    "url": "assets/js/38.48acbf9d.js",
    "revision": "b1067c16faaa0c32c16aad9ae6600699"
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
    "url": "assets/js/8.c292ffed.js",
    "revision": "729f0f2ca61826798b5f5dde1c33a7b0"
  },
  {
    "url": "assets/js/9.66d982ac.js",
    "revision": "65d985bcb5ea280e67ffcea805102f8a"
  },
  {
    "url": "assets/js/app.becce906.js",
    "revision": "02982d91815294a5d0d447199a72ff09"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "80e8bdd9077471cbe188cbee296a1eb1"
  },
  {
    "url": "element/element2/index.html",
    "revision": "0b8ee68c7284e8901d8b4bc63aec800f"
  },
  {
    "url": "element/index.html",
    "revision": "c96d15fe0343113449386d1d8a983055"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "50287ad680140db609d926c02ecebaba"
  },
  {
    "url": "java/index.html",
    "revision": "934ac9bfca3339a946f4e40b7816a0a4"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "8015cdcac71f20524b869f4a49cd71c8"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "2e06e72cef7b5a46d6bb6a6a82e9ab69"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "c6b15a1326c8d823800298879c1d4f58"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "3f0700609d0e9ea84f6707dc7473724d"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "0c1f10fc349354142fb107aba22871c7"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "8d05a06ed0a42d9e893bf40d7143c232"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "55031dec3c9adf9a086b40a2308acd84"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "682f4b7cc9a81468817796685ba88f8f"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "4c1d38180fbef4bfcf4ad7b41724a460"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "d0e407f56632543eda0ef2400901a1ee"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "a8853951e6fed463a436b2503cb98db2"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "d35bce5d18926b40c1f6347aeb442a27"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "74c9d31fa6650531ddc8acae91982762"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "9347eedb2244b11a70ef2a9b26a137c4"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "3edc10702d97ee19f2fbde42b2f7e9cf"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "5303fcbc090444478854df0b969d21f8"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "05f9583fa5d1054ddf4f751bf7738572"
  },
  {
    "url": "java/java2/index.html",
    "revision": "0333bd0d676a0816a6e03d57b0f00385"
  },
  {
    "url": "mysql/index.html",
    "revision": "2d8080f3f791d03614d773590f1c5b3d"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "09ceb28d2f3e3e30385d768f6de4a601"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "291212cea5525ea67618bb59ccf3c1a8"
  },
  {
    "url": "other/index.html",
    "revision": "37139716778465a6aa005034111ad53e"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "f4a2d5c66feb6ac13a3e1c190a447caa"
  },
  {
    "url": "vue/index.html",
    "revision": "5a6f47d1f5b01745e32cfe1260e55717"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "4186df55ca9a72123e38019d68255281"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "4aa60d4a909acaf060c38fb7171468a5"
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
