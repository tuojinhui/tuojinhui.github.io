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
    "revision": "4f74ba434b9de4e0e28bbb9b19d99384"
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
    "url": "assets/js/16.cfbd97ba.js",
    "revision": "c0a7bb7c6441414bb1e90b33bf8cbe6b"
  },
  {
    "url": "assets/js/17.6fec35c2.js",
    "revision": "5a41051b3f636cff7adf9bf24d64e3af"
  },
  {
    "url": "assets/js/18.d4a3fb5e.js",
    "revision": "9eacac30239a7cae0f031ecd7f488774"
  },
  {
    "url": "assets/js/19.f3d0a68b.js",
    "revision": "3915f717ec8703208a7340f832535178"
  },
  {
    "url": "assets/js/2.e5d7992a.js",
    "revision": "0070ca731afa0b1544bd959308507b5d"
  },
  {
    "url": "assets/js/20.d2c4838a.js",
    "revision": "54540e4da8a90a0eb1905b4ac03fbc9e"
  },
  {
    "url": "assets/js/21.67f20e7d.js",
    "revision": "ca3c9e79c023e90858a944861eccd792"
  },
  {
    "url": "assets/js/22.7b68983a.js",
    "revision": "39a40e11efcc5f0c842c43091230ce57"
  },
  {
    "url": "assets/js/23.ac5de1b2.js",
    "revision": "39258964e3ce333e95413af75318bf17"
  },
  {
    "url": "assets/js/24.2e686edc.js",
    "revision": "c2d9f8eed284f2df1fa532d654c7d9cd"
  },
  {
    "url": "assets/js/25.97629b27.js",
    "revision": "0c01ed3d71d4527415ad9a2d6d493651"
  },
  {
    "url": "assets/js/26.4d8247fa.js",
    "revision": "e15db3ee15ce1401a3dcfc84dd9bf8e5"
  },
  {
    "url": "assets/js/27.7a5e086c.js",
    "revision": "6e91c79d0e514fa7da2e85c0b819b618"
  },
  {
    "url": "assets/js/28.583b9898.js",
    "revision": "e216ee334d6b0b5197fefba7379b46b5"
  },
  {
    "url": "assets/js/29.91869ae4.js",
    "revision": "25e956b3996ba17c0594f1f66b28d4d6"
  },
  {
    "url": "assets/js/3.504bc785.js",
    "revision": "e2d8f0cc01bfa55a3bd038a20020a043"
  },
  {
    "url": "assets/js/30.4beaa4ec.js",
    "revision": "38fdc2d8e4f4fdfa00e9e4f21df808e0"
  },
  {
    "url": "assets/js/31.a80a1474.js",
    "revision": "4e95446c4ea79b912c67ce1b0b4d1c64"
  },
  {
    "url": "assets/js/32.70311c14.js",
    "revision": "36bddd50db4dcd8f37b1be5c713ff6d6"
  },
  {
    "url": "assets/js/33.ff61139d.js",
    "revision": "51a8f9cf45f2fb54ad0e4e47684aee36"
  },
  {
    "url": "assets/js/34.98b2c000.js",
    "revision": "0be42c3075d5bce9dc86097e2a9da0b8"
  },
  {
    "url": "assets/js/35.5ab75769.js",
    "revision": "8f5214a4f8470ff02fe23f6bdaa9a33a"
  },
  {
    "url": "assets/js/36.af3b3677.js",
    "revision": "391390dca3358ab2bb66229d41d4120d"
  },
  {
    "url": "assets/js/37.2eaf2cf9.js",
    "revision": "c0e9d1b1258b124595473d7b0542d888"
  },
  {
    "url": "assets/js/38.8ce61d09.js",
    "revision": "4436cab3150ffff959a9538ca93a069c"
  },
  {
    "url": "assets/js/39.d7c6081f.js",
    "revision": "a8fb3a917f746b8fe91e72c42c894c1a"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.07a1846b.js",
    "revision": "66a4a7838e0155c2bfb8d07dc2e5f224"
  },
  {
    "url": "assets/js/41.25b7ae25.js",
    "revision": "ba593e03f45073a0d80d5ecd64fdccce"
  },
  {
    "url": "assets/js/42.a6184a26.js",
    "revision": "f0c644a04d8fe1ca5cf15106e9364859"
  },
  {
    "url": "assets/js/43.68224c9b.js",
    "revision": "fb3585c1b58bfb7fcafaa28ed6b5e6ad"
  },
  {
    "url": "assets/js/44.4c2c5614.js",
    "revision": "65a0a869871c09ca34d9bf4c4c99073e"
  },
  {
    "url": "assets/js/45.e20a92db.js",
    "revision": "59347489e0b362a80e2b9fd3c70fac1c"
  },
  {
    "url": "assets/js/46.73560605.js",
    "revision": "66a2668904ceb85e7d4371c1c6713a00"
  },
  {
    "url": "assets/js/47.8e88bb86.js",
    "revision": "e75e786e30fd032ed2e6541800652302"
  },
  {
    "url": "assets/js/5.4afa5335.js",
    "revision": "edecb8e1799bf13e9721003db64ead08"
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
    "url": "assets/js/8.d18870c7.js",
    "revision": "af874c3b4afa01b56960ed65655f87ef"
  },
  {
    "url": "assets/js/9.66d982ac.js",
    "revision": "65d985bcb5ea280e67ffcea805102f8a"
  },
  {
    "url": "assets/js/app.2ad82816.js",
    "revision": "b119f5466e761f07ff4457c9dd14fa25"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "de2e7fb0f069442f1df891df192501ae"
  },
  {
    "url": "element/element2/index.html",
    "revision": "4cc2e816821c5b76dbd52b31572f2efc"
  },
  {
    "url": "element/index.html",
    "revision": "9ea0004a9ef36bea5d39bc5b96995724"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "15df6f7cae495627e251d6477e6199a5"
  },
  {
    "url": "java/index.html",
    "revision": "24c26418eb78810ba256c71f8200819a"
  },
  {
    "url": "java/java1/1-SortingAlgorithm.html",
    "revision": "c6aa4ffddc887a72cc91131e6656a202"
  },
  {
    "url": "java/java1/2-SearchAlgorithm.html",
    "revision": "495022bc94a83f7f098a3ac9fb4bb3e7"
  },
  {
    "url": "java/java1/3-DesignPatterns.html",
    "revision": "085e432c3f0e079839ab462264827279"
  },
  {
    "url": "java/java1/4-DataStructures.html",
    "revision": "aefde1eddbc296da59c24c94ef577682"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "e6e7685ac2298678199ab6a3aab06659"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "aff90f9061d1e3e1be1a5d0d809fc743"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "b82149659229452c4ab0afca1a7760b7"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "daee0858bbd50e3c96380d3e401580d6"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "56a6c6480dba354ad7e1934a275b5cb6"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "4b842116cd4371308f8c7ee9c6f22a44"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "9466dff3d9e1c01033d6addd2af9ba7b"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "d92d5c3466529ccb33709df5b0b8a6b1"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "ac4505494d82471c6e27a7f7b2ef8c07"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "23d283cdc734f5462321712313aad8d1"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "8e617ab19e97a28704f622ef39ce40f6"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "30fdca37cb16151a556c25d8d0b30e2e"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "c1041bd62db946c4f8876081327f2a23"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "16169fbf4b726d83467e3e97e50c8ec7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "11840f6c79ba54438145bbff66b9704d"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "ffdab1f0ab112f2ac99e9f6608b2ed20"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "6d15c4b478eeb6fc53a90a04b82ea009"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "ddf5b7fb7c8785cd63c5554f7819adb9"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "021ec9b482b407713dc23b3618f554fa"
  },
  {
    "url": "java/java2/index.html",
    "revision": "ca20e795df92e56471fbd011233aeee5"
  },
  {
    "url": "mysql/index.html",
    "revision": "171113b8ea1469b90ee54e3b39fcb8c1"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "c9018f335b7a86e2f607906125066e18"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "3bbd8a7c88636f537eed4ed8f7082c97"
  },
  {
    "url": "other/index.html",
    "revision": "95ad97902d5301f0fe7a030e222b40d2"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "e45b35a4a36535ee247361d28bb437de"
  },
  {
    "url": "vue/index.html",
    "revision": "0f17f6e9ac1a64f4cc8aade970b7b0be"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "bbb1fb8d006e6b6eb3e5a1272c529f10"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "16d93734bdf0133f294e64eac40bc300"
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
