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
    "revision": "94fe69c6ec43e2f3d4c3502c5e693521"
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
    "url": "assets/js/app.191b70c9.js",
    "revision": "5740d89e3a0bb6c02fc5f4b7d185908e"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "a13344b6858098a9c5b96b6a0fe3bc77"
  },
  {
    "url": "element/element2/index.html",
    "revision": "261faa32d64fd56f4dc5a9728d6dc936"
  },
  {
    "url": "element/index.html",
    "revision": "2124d73b54e9c6f00e6f7fbebc47db49"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "4b2080e67fdcd60b211857b3815ef1f8"
  },
  {
    "url": "java/index.html",
    "revision": "6a224226767895cc4c84f14512329276"
  },
  {
    "url": "java/java/1-SortingAlgorithm.html",
    "revision": "a9867c37fd6e6c16b5560edbc54a4538"
  },
  {
    "url": "java/java/2-SearchAlgorithm.html",
    "revision": "42ced06be7e0148c43c556f40ae0d3d9"
  },
  {
    "url": "java/java/3-DesignPatterns.html",
    "revision": "1c58f80ccd56e4e0033370823dfc143d"
  },
  {
    "url": "java/java/4-DataStructures.html",
    "revision": "1767c044f165c5923c7b3c050565f341"
  },
  {
    "url": "java/java/BigDecimals.html",
    "revision": "5e1150264e4c55c49b5c99d6771061fe"
  },
  {
    "url": "java/java/DefaultFastJsonConfig.html",
    "revision": "c8547fb30ad970be750cef29c23dbcc2"
  },
  {
    "url": "java/java/Enum.html",
    "revision": "b8f3fae8716cc3f04021a332cbad2b30"
  },
  {
    "url": "java/java/Executors.html",
    "revision": "dcd2b935eb193c53126cadc59baeb123"
  },
  {
    "url": "java/java/Feature.html",
    "revision": "9135f77ec21f7b8ad194352a2f513b3e"
  },
  {
    "url": "java/java/Filter.html",
    "revision": "9edf4adb787a69fa1b0cfe6f4470b587"
  },
  {
    "url": "java/java/knowledge.html",
    "revision": "4105aadb409b310896960251dc9dbb2d"
  },
  {
    "url": "java/java/LocalDataSourceConfig.html",
    "revision": "ec6b08093ec2fab3b46bc7763f3299d0"
  },
  {
    "url": "java/java/MapToQueryParam.html",
    "revision": "42f26447044314e49559638fddcff18e"
  },
  {
    "url": "java/java/MenuTree.html",
    "revision": "4f56d4b7ca5e8ef7e61a4b1654d9ff34"
  },
  {
    "url": "java/java/Optional.html",
    "revision": "621016bdc2caff2de6314c1bfb3aa909"
  },
  {
    "url": "java/java/OptionalCollection.html",
    "revision": "4be89635701d9910cec8db3418494dee"
  },
  {
    "url": "java/java/RedBlackTree.html",
    "revision": "849fc6bbdb38bc6cce568e5b98b0f30e"
  },
  {
    "url": "java/java/RedisKeyExpirationListener.html",
    "revision": "310a4c830f439ab0e14ebaa1f1e2d58e"
  },
  {
    "url": "java/java/Retry.html",
    "revision": "51d1f6d7ef564f3ab69a7db3f3e26765"
  },
  {
    "url": "java/java/SpringSourceCode.html",
    "revision": "a7c0f73f3886b61ff9b4457d2665435f"
  },
  {
    "url": "java/java/TaskExecutorConfig.html",
    "revision": "70635972f03923c1883f729e13a79574"
  },
  {
    "url": "java/java/ThrowableInterceptConfig.html",
    "revision": "f28b0305e9e2392722cf0bdc3fee1205"
  },
  {
    "url": "java/java/TreeMap.html",
    "revision": "c37627b0f3af2f56c2bdb10be1c1781e"
  },
  {
    "url": "java/java/XssHttpServletRequestWrapper.html",
    "revision": "635131727ed83b33683d649d170a098e"
  },
  {
    "url": "mysql/index.html",
    "revision": "579c51537705b36d5e1cd20f77baffbd"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "5c309747654f3e2bca6f3bcbfde0b198"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "c2b5084e69a8b72fbe31f9e5b246ff46"
  },
  {
    "url": "other/index.html",
    "revision": "bbf5a95376a1fb3f408014dd875e6b2b"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "5d630b6f3926c0373fa18cd3db3e8759"
  },
  {
    "url": "vue/index.html",
    "revision": "8841e23469950e0afb88d5329a69f9d6"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "ab9691f4640e8ce55cca6e42ee56b3dc"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "9b5d0d0730636480a317ef25ef19d0aa"
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
