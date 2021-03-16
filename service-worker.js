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
    "revision": "f1e223b96e5ffa69dac769a57765e759"
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
    "url": "assets/js/13.37320d36.js",
    "revision": "08957615d6391066ce7b86435490d030"
  },
  {
    "url": "assets/js/14.4bb63457.js",
    "revision": "1a651afcfc49b58398325b9f48c2f71c"
  },
  {
    "url": "assets/js/15.9ee96bbb.js",
    "revision": "b8072e725753ea22ad4b2cc20dc293a1"
  },
  {
    "url": "assets/js/16.6064da52.js",
    "revision": "343c920e925316697688ac8265c4d9e5"
  },
  {
    "url": "assets/js/17.7a5b9821.js",
    "revision": "a3af87fb3970483d3826c67db153bd3f"
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
    "url": "assets/js/37.50da5717.js",
    "revision": "7b1efbc026508c8fa69eef8dae187263"
  },
  {
    "url": "assets/js/38.8ce61d09.js",
    "revision": "4436cab3150ffff959a9538ca93a069c"
  },
  {
    "url": "assets/js/39.fa18ec18.js",
    "revision": "1644f83fac1bf764caeb461d2f507881"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.7e0992b2.js",
    "revision": "1254223897e5c289c50aa85f526aff19"
  },
  {
    "url": "assets/js/41.2e1a38cb.js",
    "revision": "a7f2b84f45c02a1da7b83d8793d88073"
  },
  {
    "url": "assets/js/42.52271590.js",
    "revision": "becbfde7d2e74a4bab6fb5bede5683a6"
  },
  {
    "url": "assets/js/43.b42df57f.js",
    "revision": "45abf9c44504c5a5de121c8cde381fbe"
  },
  {
    "url": "assets/js/44.ffce9cbe.js",
    "revision": "a7a9f3c3aa19391329f439200cf77a6b"
  },
  {
    "url": "assets/js/45.7cc4ba06.js",
    "revision": "b21a605daf2007575571c90984cb8c3a"
  },
  {
    "url": "assets/js/46.be1592b9.js",
    "revision": "cd992d2579faf62c9a9b2706fb6acce1"
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
    "url": "assets/js/app.19a4026c.js",
    "revision": "2017896f8943901d44d3c1e9381116a2"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "5fb22ca2880b38af3536b906450a78ba"
  },
  {
    "url": "element/element2/index.html",
    "revision": "d2c115a5ec3546f9ba79c5a96744a4ce"
  },
  {
    "url": "element/index.html",
    "revision": "7eb6737c3df256d3c694fc614c9bc3fd"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "129de7bca8b1d895727963c03f623dca"
  },
  {
    "url": "java/index.html",
    "revision": "61e010137e9fb8fa5d159a14138aa0e3"
  },
  {
    "url": "java/java1/1-SortingAlgorithm.html",
    "revision": "6b006a0f138938333148984dd44b9c39"
  },
  {
    "url": "java/java1/2-SearchAlgorithm.html",
    "revision": "053f7df4c9802615538e71cfe4d14410"
  },
  {
    "url": "java/java1/3-DesignPatterns.html",
    "revision": "528ff154a0abbf268f07900f8ed8d1ae"
  },
  {
    "url": "java/java1/4-DataStructures.html",
    "revision": "a4f3231b5f752ddbeb2f469ccc8aad5d"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "b723d842d1555790025a818916595287"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "118072ca32555ea679989e486244c50c"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "9f2e81d652fa14a6830d198a27c657cf"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "b4514ddca233a4ef0299bd4712bc1961"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "fe440f27feb7c59d3aea88b1ca7f6f99"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "6df46d323bd04af50a617c6311d308cd"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "da0725e218409131265f86b5cc2b0ef4"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "ee6dfa89e018b63ef4b145ebb265c648"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "4d177fc707f88ca683f0c0ced8336755"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "e979e10e6ecce0e0b72704c228781043"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "70d612152fcaf7c1dc646f21d2123b09"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "d2edc457c8c25ffa176032f7d3f5bd90"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "ed909b6578ade32d85d5bab92c240839"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "68d327e0f7308d0e7a27627e69e2b401"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "e68f9f4b35880d5dcd8ddca9e7296a08"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "9a563a104f99016bd9dc7f195fc5a241"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "5ed156d80b7fde51f8e3323fd33015a7"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "bcf959f9fd3206e5e86f44fa1a9da58d"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "0d95a1a8c93dd21b598a01c0c62d2461"
  },
  {
    "url": "java/java2/index.html",
    "revision": "849940a030b7f2afdbdca94378599e1a"
  },
  {
    "url": "mysql/index.html",
    "revision": "c71957b9693c3530c49dc023e1aaf913"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "9f0a76f85b1a9479fbd97e026568a5b3"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "62680bf60e6aa0f8534bfee6718963ee"
  },
  {
    "url": "other/index.html",
    "revision": "df8a877b80425fbf2b592bf989560898"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "7d4300f26128218ffdc64a51aacaad77"
  },
  {
    "url": "vue/index.html",
    "revision": "6348c3352166566f7d1214fbb9e34765"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "95b906059917a2c20165f5cc75fd2ed9"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "d0720be7e30c05e7ea59b24682539c89"
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
