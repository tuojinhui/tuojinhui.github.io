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
    "revision": "745b3e1825b0cbd5dcc3c781e624ea43"
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
    "url": "assets/js/app.b4f76482.js",
    "revision": "9f94b8de1cb1d6643bb41eea07a4db51"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "d6ab5fbf5fae76ab02876a812de3d994"
  },
  {
    "url": "element/element2/index.html",
    "revision": "b312a1938b3c7c8a70a271eb7875cafd"
  },
  {
    "url": "element/index.html",
    "revision": "ab1c3e2c7c7d830e3695fb3b61c5338a"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "c0ad54a800a56fcca5d70416e7c0f9b9"
  },
  {
    "url": "java/index.html",
    "revision": "e0ec503a7549031d51808e6441ea036e"
  },
  {
    "url": "java/java/1-SortingAlgorithm.html",
    "revision": "7fd0d4a30f00711e1071b12b05419e1e"
  },
  {
    "url": "java/java/2-SearchAlgorithm.html",
    "revision": "b73e0abc0657655aabd2aa1d16ba6ac7"
  },
  {
    "url": "java/java/3-DesignPatterns.html",
    "revision": "fa3aed46da1a85a6fe8deb853b010584"
  },
  {
    "url": "java/java/4-DataStructures.html",
    "revision": "a6e8580108ce9f81c86549daec059a36"
  },
  {
    "url": "java/java/BigDecimals.html",
    "revision": "92c8c78c9b5d31666cf3083bcff99d45"
  },
  {
    "url": "java/java/DefaultFastJsonConfig.html",
    "revision": "187632cbcf076e4492de6e22bfe8649e"
  },
  {
    "url": "java/java/Enum.html",
    "revision": "ac04e1959e9c89c2ac9e1c350887c3de"
  },
  {
    "url": "java/java/Executors.html",
    "revision": "a37cc1c39541daf84a2c56c6012be605"
  },
  {
    "url": "java/java/Feature.html",
    "revision": "6b4e351b3c93515918a105b9428db60b"
  },
  {
    "url": "java/java/Filter.html",
    "revision": "c88bdd08b67397cc4877193cb4e7ee83"
  },
  {
    "url": "java/java/knowledge.html",
    "revision": "2a251dbc112ef26d14886fb4a8308ca5"
  },
  {
    "url": "java/java/LocalDataSourceConfig.html",
    "revision": "1ea31bbd7582500919d24b48676ef5d4"
  },
  {
    "url": "java/java/MapToQueryParam.html",
    "revision": "251ea6ded53f9031adf8df57dcb6baec"
  },
  {
    "url": "java/java/MenuTree.html",
    "revision": "a04968e8afd84e4def8eeba7c87c49fd"
  },
  {
    "url": "java/java/Optional.html",
    "revision": "37d336f2fa837907b2637bb0ea2a62d2"
  },
  {
    "url": "java/java/OptionalCollection.html",
    "revision": "ec498923b71487822b87631f756da6fa"
  },
  {
    "url": "java/java/RedBlackTree.html",
    "revision": "8467d2e6550796c16b86b1f8f6d1abc4"
  },
  {
    "url": "java/java/RedisKeyExpirationListener.html",
    "revision": "0178394fe2cd69083320aa35b4b8a177"
  },
  {
    "url": "java/java/Retry.html",
    "revision": "b90a46e30e0237b2f896c0c9d43bbb2d"
  },
  {
    "url": "java/java/SpringSourceCode.html",
    "revision": "016a0566743a8daeb589769450976e7b"
  },
  {
    "url": "java/java/TaskExecutorConfig.html",
    "revision": "aa474c03513f78390f59f6ab71d4ade7"
  },
  {
    "url": "java/java/ThrowableInterceptConfig.html",
    "revision": "c50ae38318c7985a8019953d303658a8"
  },
  {
    "url": "java/java/TreeMap.html",
    "revision": "2cebfe7910b44ee61f3e8a84cb1308b7"
  },
  {
    "url": "java/java/XssHttpServletRequestWrapper.html",
    "revision": "8d183d45af8d0488aa31dca1505c5597"
  },
  {
    "url": "mysql/index.html",
    "revision": "940a1e01913af6031847c082300c1742"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "eae1ff1bfea141280ba2b7d41ee0d796"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "181bc40c685f1996eda9a4b16725c1c5"
  },
  {
    "url": "other/index.html",
    "revision": "139c0a7d6b61ee5d817104d0a01f04e2"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "b2dd401f6d71dec5586ab39ad7fb13af"
  },
  {
    "url": "vue/index.html",
    "revision": "35f828d12d7d0d592ab5597063700d48"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "22344755bca647ca04fdeb822cdd82a7"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "74bd300b07eb94a3f348125f3c34a555"
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
