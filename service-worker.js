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
    "revision": "ea458b046772e531fcba6d581313f488"
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
    "url": "assets/js/17.a55c0a92.js",
    "revision": "14910439fcb2a680491a1343d1e27569"
  },
  {
    "url": "assets/js/18.88a22965.js",
    "revision": "a0c8c5901269d5ce56800429cf8d0cff"
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
    "url": "assets/js/21.fad457a5.js",
    "revision": "d6e33650ebfdef4fb672c0c9383df25e"
  },
  {
    "url": "assets/js/22.b4c11e84.js",
    "revision": "630ae0a7feb333d025a31d059bbceb6f"
  },
  {
    "url": "assets/js/23.a7533afb.js",
    "revision": "5b3f73f7e5ec27fd32c52eb3b629dba2"
  },
  {
    "url": "assets/js/24.3d0f2676.js",
    "revision": "90e2eb9223c513b9dd201629fb3166ff"
  },
  {
    "url": "assets/js/25.d0166f47.js",
    "revision": "48291b13120290e655d2abec1e0ed35a"
  },
  {
    "url": "assets/js/26.4c01cb39.js",
    "revision": "ae9533cd9398e4bafb2d012eec71c0e7"
  },
  {
    "url": "assets/js/27.8aaab2f3.js",
    "revision": "a9c1355efd7810af0464e2fa71612f17"
  },
  {
    "url": "assets/js/28.160c0222.js",
    "revision": "2e37cb9a1f89760ac4b91ea422fa336b"
  },
  {
    "url": "assets/js/29.99715bae.js",
    "revision": "afac3e259cf7da7dad9ff875cce97c7f"
  },
  {
    "url": "assets/js/3.504bc785.js",
    "revision": "e2d8f0cc01bfa55a3bd038a20020a043"
  },
  {
    "url": "assets/js/30.8df26176.js",
    "revision": "0d5814b1b2f1f0acccca7903f3885288"
  },
  {
    "url": "assets/js/31.ebfa7bbd.js",
    "revision": "3a7b2897a8e437369a88180d6df44261"
  },
  {
    "url": "assets/js/32.8eb49444.js",
    "revision": "64bbe8d8a425537142423ee97babe230"
  },
  {
    "url": "assets/js/33.f28ee3d8.js",
    "revision": "7732d063b7629341b35c4833f83f0696"
  },
  {
    "url": "assets/js/34.6b124bb1.js",
    "revision": "f3cec6238a9f4b23f1f00ba019672a18"
  },
  {
    "url": "assets/js/35.6ae34791.js",
    "revision": "221b8592854209135f3f566c449157e3"
  },
  {
    "url": "assets/js/36.29e5a9c2.js",
    "revision": "b0c45a732b4b3e0deafa337780ef1f82"
  },
  {
    "url": "assets/js/37.8e18361c.js",
    "revision": "b208695de3a31a6a7dd404eb472fc638"
  },
  {
    "url": "assets/js/38.ce343584.js",
    "revision": "4d5d5c91d616c61ca1d1e111ffa387c1"
  },
  {
    "url": "assets/js/39.74ec66b7.js",
    "revision": "2cf54fab07114d856ee73480c08c9c28"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.0ba7e395.js",
    "revision": "6c0936d8ea5ce97b856e0e8afc0fe449"
  },
  {
    "url": "assets/js/41.9d389aad.js",
    "revision": "4d06c5073432b51e2dfffad6c8937516"
  },
  {
    "url": "assets/js/42.74030adb.js",
    "revision": "42a905cc57e1387706d693627c8d8de7"
  },
  {
    "url": "assets/js/5.1d6a025b.js",
    "revision": "93e6c4bc1ed1a1ed3436c434c8434a60"
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
    "url": "assets/js/app.685854cf.js",
    "revision": "8aee7b4a239c54d3933d54ecfb2391dd"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "5ba0dafb05c9a2b37f338128c11f5217"
  },
  {
    "url": "element/element2/index.html",
    "revision": "c8f5fbb8b1aec5f208ec7c26e4e12091"
  },
  {
    "url": "element/index.html",
    "revision": "11f988ef2ce14cfb3837ab5aec078ae3"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "d91478388128c9c943a3f17a9a2ff785"
  },
  {
    "url": "java/index.html",
    "revision": "caaed2ea44de9ad2675686ad64fdfcc3"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "be26d671d4bc427d2754bf884be3474f"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "18ce164aeb0a0d4475b21349f53d7a70"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "a0db3ae6527a29d5043a0fbb832969d8"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "12401304478eb0173b0cdd16d7930670"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "20181a9f631d690c09332d99e41b6f4d"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "4562d66c1071323aed8689bb6ec6237a"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "35b029f3f7c2f455689f76437efce60e"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "8d7c7b79c4d8e77edce664919fc80c1e"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "c936a5e9e2c3a1fc99f511d75174f841"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "3a5aa81a51f157a30d6ca385adb5075c"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "250e606861248eb072a365975f01ceac"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "2e5e108ae1a46546695dcca99eabdf41"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "55200a9a404afa7556b768e82ea451d5"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "2e3b909984d8bce933ea7895c386d1f0"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "58244dd97f40c8f2e4e5df211ec8f06f"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "7c9909f1b6126319ad34d4c66c06acc9"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "37418f05349ee81d510e70e1003f6ed7"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "81c64562452cea84e7bb866d5e402ed1"
  },
  {
    "url": "java/java2/index.html",
    "revision": "3eef5613ab031d7f088740942769f41f"
  },
  {
    "url": "mysql/index.html",
    "revision": "44dc0b340a344ea64a05575fb6eea84a"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "54c6f7658c1c7eb572b3e003068801ab"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "43d7e8a1a2100960fa9b8dbf622c76aa"
  },
  {
    "url": "other/index.html",
    "revision": "d7c810b31cc99aa5158a9713f8f098a0"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "d1a5cc0a6e43340471c5e69180c10050"
  },
  {
    "url": "vue/index.html",
    "revision": "ca5feeb7de5d515efbb70222faa1aaac"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "04880e33a3cbd64b5dddec6a6fda46be"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "f21dde0465a5c00f50afa5e422ada82c"
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
