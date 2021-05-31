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
    "revision": "5f5d0a9eb65d33931c9d0e2f1ba989ce"
  },
  {
    "url": "assets/css/0.styles.08292296.css",
    "revision": "ee34a3b89d60590f5f2c776289ad1d02"
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
    "url": "assets/js/10.469042e6.js",
    "revision": "f26d8bdd63e3ee0a22a9fcc8d1e9487a"
  },
  {
    "url": "assets/js/11.8b4e1b2b.js",
    "revision": "08e278fdb0c5137f3655a52e73258d4e"
  },
  {
    "url": "assets/js/12.b106cf7f.js",
    "revision": "924024743a7f581b3f3874b830c5b5af"
  },
  {
    "url": "assets/js/13.3f42ac10.js",
    "revision": "c5daf4d9c75a29fc2c165f3b12e5dd8a"
  },
  {
    "url": "assets/js/14.9c2434f6.js",
    "revision": "6d3f22ea0a10260d095fe9eeca6399e6"
  },
  {
    "url": "assets/js/15.7ba841c0.js",
    "revision": "5b295cffccd995e5a64b7041cba06893"
  },
  {
    "url": "assets/js/16.fc2a1899.js",
    "revision": "5aa01b2a9aef2e47bcf77904916bc9a1"
  },
  {
    "url": "assets/js/17.169c555d.js",
    "revision": "e393674b1285af392aa4811a0723166f"
  },
  {
    "url": "assets/js/18.77707db9.js",
    "revision": "c18f3c12e4d4d03a875a09d091fea3f0"
  },
  {
    "url": "assets/js/19.7e98b8f8.js",
    "revision": "518928c32c567dfdcd58c04aaee30eb0"
  },
  {
    "url": "assets/js/2.9354284f.js",
    "revision": "f6e13f386cd9c1994d94b489d6f0585e"
  },
  {
    "url": "assets/js/20.e863ee66.js",
    "revision": "29d308477b8fa3f537cb93059e1a10ec"
  },
  {
    "url": "assets/js/21.3ca19f36.js",
    "revision": "05bad91598e97b47fd042a8f8c8519ae"
  },
  {
    "url": "assets/js/22.e3c2c9f3.js",
    "revision": "061499d635bf141ff478b117a34f895f"
  },
  {
    "url": "assets/js/23.c4322108.js",
    "revision": "e2f16af847c679948535e8abe66d5c33"
  },
  {
    "url": "assets/js/24.8fcb8855.js",
    "revision": "6f1b814249aa6535a828a300be5c2317"
  },
  {
    "url": "assets/js/25.092319d1.js",
    "revision": "12271a59afb39787d749d6cccc2fa859"
  },
  {
    "url": "assets/js/26.11d1dc40.js",
    "revision": "62e9393464faa0542be4f6164944e319"
  },
  {
    "url": "assets/js/27.531aaf67.js",
    "revision": "7ed8becc61451a31fce0618efb1114ec"
  },
  {
    "url": "assets/js/28.1e968980.js",
    "revision": "f247b18731e1da40524239348cf959e8"
  },
  {
    "url": "assets/js/29.29663427.js",
    "revision": "ee66c0b29dc06299229093e5b78fcb52"
  },
  {
    "url": "assets/js/3.1781e0d2.js",
    "revision": "59f59854194c9da588fbc1b188ca4014"
  },
  {
    "url": "assets/js/30.568f0f8b.js",
    "revision": "7674da5e4b2eb66681863808f67ff91a"
  },
  {
    "url": "assets/js/31.1a5e82b8.js",
    "revision": "2f1736bafb630bfdb1ec03639249c102"
  },
  {
    "url": "assets/js/32.cb5ff5e5.js",
    "revision": "610dda602033b2d815f605ef393063a3"
  },
  {
    "url": "assets/js/33.5b9685b0.js",
    "revision": "e226001bf0b12d8725a2be5d651b7dd4"
  },
  {
    "url": "assets/js/34.7f944b1c.js",
    "revision": "1bdb9f175254c71ac50d95570435030a"
  },
  {
    "url": "assets/js/35.28079b54.js",
    "revision": "56c51d3001bf0ca33c82242ecd88265d"
  },
  {
    "url": "assets/js/36.ddd8a136.js",
    "revision": "ed7da9b28b6878810a8f4e85bb645667"
  },
  {
    "url": "assets/js/37.04c71234.js",
    "revision": "12e660b19aa81892bd3a85bde31f71c6"
  },
  {
    "url": "assets/js/38.16c4475e.js",
    "revision": "375762e0946ded9ddde9528918adff82"
  },
  {
    "url": "assets/js/39.0170f49c.js",
    "revision": "dd6e47b48d082ba486aed16c7f4be44b"
  },
  {
    "url": "assets/js/4.d211ec40.js",
    "revision": "6342befcdc91582d34c47d042b56a49b"
  },
  {
    "url": "assets/js/40.8a8fe432.js",
    "revision": "f50bf106abcfdb555187e366905c6996"
  },
  {
    "url": "assets/js/41.f6a9baea.js",
    "revision": "523e89d380da396808733359e24dff01"
  },
  {
    "url": "assets/js/42.4ea96f6b.js",
    "revision": "1835cda31d4d0e704ea12aa542c0fe82"
  },
  {
    "url": "assets/js/43.f0545594.js",
    "revision": "f0078f818e7b1bc530ecd9248ffe9c72"
  },
  {
    "url": "assets/js/44.7571e561.js",
    "revision": "1b2669e4d73fec6680d4ec72b1b74cec"
  },
  {
    "url": "assets/js/45.df4495b6.js",
    "revision": "3544398c1c6705b6baeea5fd8a29a70f"
  },
  {
    "url": "assets/js/46.23662c0e.js",
    "revision": "e9f8d73b992eb452c8ddd9576bee74e2"
  },
  {
    "url": "assets/js/47.936ce98c.js",
    "revision": "b0891a06d5fc56b9ef3a60d376af4b73"
  },
  {
    "url": "assets/js/5.33218771.js",
    "revision": "d635b01965b31c4e26217edc480cc385"
  },
  {
    "url": "assets/js/6.b0da79a0.js",
    "revision": "d8cc9e8c71e03f2540a85ba8aee10b5a"
  },
  {
    "url": "assets/js/7.5e5664da.js",
    "revision": "6335bccf0c1f733f4a2ca666a6e27ee9"
  },
  {
    "url": "assets/js/8.f19d404a.js",
    "revision": "ce67e977f422a9410d66e08ee5f2afe2"
  },
  {
    "url": "assets/js/9.e6e43f28.js",
    "revision": "cf5d02ae5fd548639cbf6efc65a28b05"
  },
  {
    "url": "assets/js/app.b4429a82.js",
    "revision": "9d903fa8b0f74ca4383d8a21f6785c2b"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "cc1c74b0bb461d4beb5c63631eaf789c"
  },
  {
    "url": "element/element2/index.html",
    "revision": "49581451f8435e5089f0982e6d60cce9"
  },
  {
    "url": "element/index.html",
    "revision": "fd16fb8e276094c5fc0360f8a466b452"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "e0070224d3726eebd46acdc5a9c513f2"
  },
  {
    "url": "java/index.html",
    "revision": "400c30b048be751a053a90e52fc831b2"
  },
  {
    "url": "java/java/1-SortingAlgorithm.html",
    "revision": "7de51369048c4a9561334ac89b83fd6d"
  },
  {
    "url": "java/java/2-SearchAlgorithm.html",
    "revision": "1ec5c05e39b1cf06fb717b0f241607b0"
  },
  {
    "url": "java/java/3-DesignPatterns.html",
    "revision": "aaea3cf60bb14bd4afb8717ab8540475"
  },
  {
    "url": "java/java/4-DataStructures.html",
    "revision": "75b9b5cd1d7d8097ecc3b7f5b1794e26"
  },
  {
    "url": "java/java/BigDecimals.html",
    "revision": "4d70348ad618b66b08fdd8e53b5adf8e"
  },
  {
    "url": "java/java/DefaultFastJsonConfig.html",
    "revision": "aacf7c04693b912b755ea7e23fbb44ae"
  },
  {
    "url": "java/java/Enum.html",
    "revision": "68745d36459c202da5c59f3991267892"
  },
  {
    "url": "java/java/Executors.html",
    "revision": "0a77d993487b6c81ed558267f1764a48"
  },
  {
    "url": "java/java/Feature.html",
    "revision": "e8060a44439540612db3f7f27f1d30bf"
  },
  {
    "url": "java/java/Filter.html",
    "revision": "291ed99de45585a9a737b78767047646"
  },
  {
    "url": "java/java/knowledge.html",
    "revision": "73efff0b051d91f0acb4f257371ec428"
  },
  {
    "url": "java/java/LocalDataSourceConfig.html",
    "revision": "50e38c0b1aaeee1fdceeab73f8d9d178"
  },
  {
    "url": "java/java/MapToQueryParam.html",
    "revision": "5956c4cf0742f79746db2ffe1b9fe079"
  },
  {
    "url": "java/java/MenuTree.html",
    "revision": "efab2b6375f5aee2422f732307eeb715"
  },
  {
    "url": "java/java/Optional.html",
    "revision": "68069ee7ee478b7397b6690f1c351c6f"
  },
  {
    "url": "java/java/OptionalCollection.html",
    "revision": "1da4666c53063738852bc503fc80c97c"
  },
  {
    "url": "java/java/RedBlackTree.html",
    "revision": "69862fa82355ab852c2027ff0069f1ac"
  },
  {
    "url": "java/java/RedisKeyExpirationListener.html",
    "revision": "fc2216f654b2b967d995b01354ec143c"
  },
  {
    "url": "java/java/Retry.html",
    "revision": "cb1c03808f764d119595c44342f164f7"
  },
  {
    "url": "java/java/SpringSourceCode.html",
    "revision": "e6ef8b63167e8ae4e0d4a8f5df6b82d9"
  },
  {
    "url": "java/java/TaskExecutorConfig.html",
    "revision": "65470a6fb456a9278a205b9b3706b51b"
  },
  {
    "url": "java/java/ThrowableInterceptConfig.html",
    "revision": "c01250265d73e3b6ef72122148281657"
  },
  {
    "url": "java/java/TreeMap.html",
    "revision": "b706fc84a4fba801cc056f9b8254ad6e"
  },
  {
    "url": "java/java/XssHttpServletRequestWrapper.html",
    "revision": "f14a827bbccd4250bdec6c258d4b232e"
  },
  {
    "url": "mysql/index.html",
    "revision": "deb25a9b6133213c41cde9d48be3e61f"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "66b054c2ba20a74a6bffe3166c3b0916"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "c34fa9898432dfc700aaba3b1b536fa7"
  },
  {
    "url": "other/index.html",
    "revision": "a1059f74253ee90c846a89ebdc967768"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "ffef81d1b79266bc7157a2d8a2444575"
  },
  {
    "url": "vue/index.html",
    "revision": "ffa6888c822998f8b0739d230099e555"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "2bbd20b32f5db198290fb78961288b80"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "34fe6ed28f79400ab693ee6a5b526b7d"
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
