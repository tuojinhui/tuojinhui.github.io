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
    "revision": "fc9433153f3334a142ce0a23a6eb592a"
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
    "url": "assets/js/17.b986c58e.js",
    "revision": "eef2478dec415d207017af9e2be6a3d3"
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
    "url": "assets/js/25.640eb169.js",
    "revision": "b7deefa6913b1c53fd0a358222edd757"
  },
  {
    "url": "assets/js/26.11632ec7.js",
    "revision": "8a8785e555a83f2f567245473e1e22a3"
  },
  {
    "url": "assets/js/27.981144c6.js",
    "revision": "2edf61a309428af37719e5491a580ff3"
  },
  {
    "url": "assets/js/28.62228966.js",
    "revision": "03553a19c82c7345b77c8b6733c02fb9"
  },
  {
    "url": "assets/js/29.5da5b313.js",
    "revision": "1b569c002d392b62ba8867faefa848b0"
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
    "url": "assets/js/31.a13c9d69.js",
    "revision": "9c00c9fc519bfbb489124d7dfd64335d"
  },
  {
    "url": "assets/js/32.78380a1d.js",
    "revision": "b16d1642895c8617a62bf7fa10f99a6b"
  },
  {
    "url": "assets/js/33.a70cb69a.js",
    "revision": "2fb29b428a2daf8c5aab19e4ab6e0901"
  },
  {
    "url": "assets/js/34.0eaa84d3.js",
    "revision": "4f39b4df64d63b4c1b535787a2ccd79c"
  },
  {
    "url": "assets/js/35.3a80fd2b.js",
    "revision": "9ef680f2908e8fdac7524e3bc0f2671c"
  },
  {
    "url": "assets/js/36.cf2c2e1b.js",
    "revision": "57e6a657ae63678ec3135a4494716f6a"
  },
  {
    "url": "assets/js/37.4fa92258.js",
    "revision": "5e5ac71448fce99685a8c06642601b33"
  },
  {
    "url": "assets/js/38.a8561f60.js",
    "revision": "fb81cd3eb89ebdfadeded0876a07b1e1"
  },
  {
    "url": "assets/js/39.80c80aad.js",
    "revision": "68df9b7711a820c47abc1cf3b1ccbe03"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.df17c836.js",
    "revision": "4701d9dbc32249505895a4e4322e5732"
  },
  {
    "url": "assets/js/41.e0c2f11d.js",
    "revision": "9af2fe27e5618f23dc7f970ff590075d"
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
    "url": "assets/js/app.a71167bb.js",
    "revision": "e4485ba9e7d1173eee20f2d1b9ba81bc"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "bece43430d825eae2adb352b62e014e0"
  },
  {
    "url": "element/element2/index.html",
    "revision": "d3f68a662c5d9df6dc9a463a56581c37"
  },
  {
    "url": "element/index.html",
    "revision": "0d5dd014479b26ad719d3780961eb3af"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "f59799acabd64e7c655c372ec9f5308f"
  },
  {
    "url": "java/index.html",
    "revision": "f1f604c5039f8ba1287a1ad28ff730ec"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "77d494d8e520824a87236af3dfd6c53d"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "e037655be82f980949a54d565f5ab749"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "53d151512eb0375b6c1ed5dbdeb6d802"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "7d7c28be096737c8153aa15d03bbc0fd"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "d77f7ac7a97688f978453af6d826bf16"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "737547cca58328076769b4ffdca0139e"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "b24b0db80a71d06858b1342fcb797e3a"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "ba58a097c784692e7e9c605624547ff9"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "bda2178b024fe6a3b7716c36cbb78317"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "a64e7d5ef4fd524e14307fcdbf82f7df"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "ae4ffe31b4dc5a1d543a34568efe8231"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "1c0b83e76a8e63c6442d04c0dd23d75e"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "a8492d78f14441c11f1e54a4fed71788"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "eb1291929c20e0d3ab4d5b7470ac463e"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "2c2eea482a8a766f71563c1292deb1fe"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "538e1284e0424fc0f65d11e7e42f8ff9"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "f6a5dbc3e5e36c96c4312436e8316aa3"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "68a51b2508a538fd6536d44d79446c09"
  },
  {
    "url": "java/java2/index.html",
    "revision": "a7fb33db10699175698c75435c1c34f5"
  },
  {
    "url": "mysql/index.html",
    "revision": "c7852161cef440e3acf18b014402075d"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "d7aa8090d93eba17060d0123aabe3e4a"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "998f4f6399a00105398559ad15d42cd0"
  },
  {
    "url": "other/index.html",
    "revision": "95df0e4e642023535caa0987b659e4d6"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "18e08cfc30a147b8a3f80c4ddadea994"
  },
  {
    "url": "vue/index.html",
    "revision": "515b22030e37df0943a6d9bd391b649c"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "9d065e0d940e6e8f446d8ee42fd84cce"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "9a4c7c1185b6442a138148d2029a6ca9"
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
