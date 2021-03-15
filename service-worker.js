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
    "revision": "b8cf19e0b7fb08ec885be873742876e6"
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
    "url": "assets/js/17.a5dd0958.js",
    "revision": "36e2b12d2ce8a07fe464a4e835e6aca6"
  },
  {
    "url": "assets/js/18.d3035df8.js",
    "revision": "2e85472798102cbe3a6f2d569a795c0c"
  },
  {
    "url": "assets/js/19.8c2ca7fd.js",
    "revision": "dcd8e3381c8c82741d19a1f03a862558"
  },
  {
    "url": "assets/js/2.e5d7992a.js",
    "revision": "0070ca731afa0b1544bd959308507b5d"
  },
  {
    "url": "assets/js/20.3cd88a12.js",
    "revision": "e0599e28fb141a28ed7683ff46d83420"
  },
  {
    "url": "assets/js/21.f6a1d1df.js",
    "revision": "d31efcdbeaf185d4873864c1e1a43fc0"
  },
  {
    "url": "assets/js/22.e408dfc9.js",
    "revision": "667b64651f8b5e33f6161169587bbd27"
  },
  {
    "url": "assets/js/23.60641a3a.js",
    "revision": "fb8bc36570d7dfafca8edaa2df6bd0de"
  },
  {
    "url": "assets/js/24.be6dbae6.js",
    "revision": "5235a021621021683b585951d3e0737d"
  },
  {
    "url": "assets/js/25.b0adaa20.js",
    "revision": "f25ec5f0680ea45a09b3f934cf9f04bc"
  },
  {
    "url": "assets/js/26.bc683d7e.js",
    "revision": "4bb9ed749a006ab4ce00694ea33ef246"
  },
  {
    "url": "assets/js/27.675e10ce.js",
    "revision": "83cc57b8ae9ff7ab1ccd23ae090585b1"
  },
  {
    "url": "assets/js/28.7b2020b3.js",
    "revision": "ff1f4dc85647db5e2ab88f5666f28dc1"
  },
  {
    "url": "assets/js/29.1d4c93f6.js",
    "revision": "c5216b75090677799745a7bd8a147d4d"
  },
  {
    "url": "assets/js/3.504bc785.js",
    "revision": "e2d8f0cc01bfa55a3bd038a20020a043"
  },
  {
    "url": "assets/js/30.76835977.js",
    "revision": "905c183368d87c83616a61c670d459dc"
  },
  {
    "url": "assets/js/31.5b45a44e.js",
    "revision": "7703bbc1b7463fd6dbebef38707457d4"
  },
  {
    "url": "assets/js/32.8844bdcb.js",
    "revision": "d797a19b9c843946d2ae2e10b2f10544"
  },
  {
    "url": "assets/js/33.5c1112db.js",
    "revision": "d55ceca6f9d2e6f9c016d274853747d0"
  },
  {
    "url": "assets/js/34.67014bdd.js",
    "revision": "cb9a84cb8ab7c1cbb7144a34c9bb81e8"
  },
  {
    "url": "assets/js/35.2dd5c7db.js",
    "revision": "96b9719a8caa6ec9123dc7bfab49c421"
  },
  {
    "url": "assets/js/36.83f29a42.js",
    "revision": "b81fa597e0236d6343d1c7f83af0e21a"
  },
  {
    "url": "assets/js/37.4a1a9df5.js",
    "revision": "79f39b92561be9ada5bb09e5e1d7f1d2"
  },
  {
    "url": "assets/js/38.be138595.js",
    "revision": "8e9d97ff8b34228a243092fcd5ac9b02"
  },
  {
    "url": "assets/js/39.39aac720.js",
    "revision": "49907b0bae2d4c890285eaec59f77ec9"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.71779a6f.js",
    "revision": "029702bca4afe183fe34a241815ab891"
  },
  {
    "url": "assets/js/41.3eb4e407.js",
    "revision": "e3a7cc52242abe88ced7bbbcf720d6e3"
  },
  {
    "url": "assets/js/42.0b6c79d4.js",
    "revision": "4de2ceaa568f34493134e55bf00fa221"
  },
  {
    "url": "assets/js/43.41cfef93.js",
    "revision": "b2607888771eb91d10112dae1b1594c1"
  },
  {
    "url": "assets/js/5.9f28446d.js",
    "revision": "ec3fb7310dc1ace0efe76ad09f35910f"
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
    "url": "assets/js/app.b126dca6.js",
    "revision": "fbe4ed11868750f8d81df34a8a41336d"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "4148d0d52082827930ec9cab849b1ff4"
  },
  {
    "url": "element/element2/index.html",
    "revision": "91df38157827901b9c500c4fbd457d41"
  },
  {
    "url": "element/index.html",
    "revision": "33fc03116bb70e867150a5651ec92ecc"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "40a8a0c2ae183b0402da3164513c351f"
  },
  {
    "url": "java/index.html",
    "revision": "1a73adae2a8d0f741ac4f0a8fcd0c3e3"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "5f5a3692d43e00141c6da112a68c4919"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "0dda14b8fd10e6a23adbdd1f00a05e3b"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "c17337a07715b431af42955d4f7d8ea5"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "5a9ec69fc6a4b9cc23b851c306635ded"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "5715a579cf4de0d3c8df5f42d7b9bde8"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "14694f2f1eadba78107c3ef8b8d49902"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "93fb9641712a8b028b43c5ea48801a1e"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "bb77d8fec6f1692a611ae1d8229e8d95"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "31662ae92da618d63e7aadf2ab635866"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "34fe5bd3c5c4de0bbf2907ccc065a6cb"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "1d6499dd1cbefffe805e596965df8dbe"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "124dd9898e5913e83ce5f9b5659e983c"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "597f99c314c61c4d537b2153c75546ef"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "4408689087de1bc79ccc580aadc14bbc"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "00a805c9ec3f6ba39a20e537397da25c"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "40376784a81c84f5d9797cba93dd3080"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "f744df126bc82d247bd081b208cbad3c"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "d7c1d9025861595b7993416fc136bddf"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "3d9aa0d716bb71de97518352619f34bb"
  },
  {
    "url": "java/java2/index.html",
    "revision": "5caf21fcb328f3648f70ffbf94156647"
  },
  {
    "url": "mysql/index.html",
    "revision": "a97064409cdec20a7cf7f969f99d1a34"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "9e9fdd0a16b8da8fac996d3f255c645a"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "28c5d30358437a9112ff79d2483ad88b"
  },
  {
    "url": "other/index.html",
    "revision": "d0a68802c9579c89ad279ba866f784c2"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "ac263cdb839fef99283a80e5d0f92a23"
  },
  {
    "url": "vue/index.html",
    "revision": "b0eab3beb1b5637121ad5228ef2cefd6"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "5e036c4b8e2d93e169965d9f3d9ab78b"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "236460fb4ed3b20465e99d52bb01e733"
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
