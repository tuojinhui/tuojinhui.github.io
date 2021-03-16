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
    "revision": "84943573f03b75a2bdae6f31e0686ecf"
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
    "url": "assets/js/16.696edd36.js",
    "revision": "2c145e857053e5841be68885f79c67a0"
  },
  {
    "url": "assets/js/17.1ae3fb72.js",
    "revision": "dae337edd479133b69282d1567ec52a3"
  },
  {
    "url": "assets/js/18.b62010f1.js",
    "revision": "c80a719ebe6f045e747c990dad5fce28"
  },
  {
    "url": "assets/js/19.20de7cc3.js",
    "revision": "1dec0d29b84d37ec02bf49c0e4ce2df3"
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
    "url": "assets/js/app.48df60fd.js",
    "revision": "4d8a910a93b30ca4a63d909a0f0108a0"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "bf1e40f0ffbdca270c89a4e9b620d41d"
  },
  {
    "url": "element/element2/index.html",
    "revision": "9a87af57515e02b698062386f1e55f79"
  },
  {
    "url": "element/index.html",
    "revision": "23d89a2043dd89e03656b776c2ef2fac"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "8639c94d39923357dca8603298e4aa5d"
  },
  {
    "url": "java/index.html",
    "revision": "e686b617f10443ca1ffd0aca9b1374a4"
  },
  {
    "url": "java/java1/1-DataStructures.html",
    "revision": "0d7b66bbf5ca9bd0971f532f16cb249f"
  },
  {
    "url": "java/java1/2-SortingAlgorithm.html",
    "revision": "55af76366cc25a066c09a6eec47b088a"
  },
  {
    "url": "java/java1/3-SearchAlgorithm.html",
    "revision": "531cd1f7fea761f11afa09a39ebe7909"
  },
  {
    "url": "java/java1/4-DesignPatterns.html",
    "revision": "8945ef7d59fbcc1bfc99029723263fa0"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "96a7288d7f72bec0fc247b6b56d8ccb2"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "e16421f6df8f004f7dbf3f8392d20a89"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "46a89eee1a8c07c19b6680fe1f7cc219"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "8cfc5fd0bcf291d743a5b40fb58815fd"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "e0a78c0b1e249dbe85d7e8e2d1e279a6"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "51a0252b4fe9ab03defa2ed8f99c8155"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "91148a6fdab5cd2f0f4e30930112f331"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "b82f646b240957081e94f94e4dde949f"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "7df3be9f5f5b4bb800e9de3d132300fe"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "f9668d155dc0911c0860d49bb4a53c2f"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "b630d92d748c46fa2e01e2a85b0a205e"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "3832b8086d6c675f242e8d6b03a3459b"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "953e3b1b8b117995561452278305aa62"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "911742888304bc562726a31456e0afe7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "d6bd9a7d22c1c1194253805aa0fa633b"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "1418b940127fc57032e1a61d2b820d98"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "4ebb3117913d3eb32395680224272f05"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "5b79fda41d62776af71e6ffde9a73feb"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "e35e6c9891ae9289c89f7db672898d7e"
  },
  {
    "url": "java/java2/index.html",
    "revision": "8d362ace2b1a45ac4afc7ff4647c53c2"
  },
  {
    "url": "mysql/index.html",
    "revision": "98916bd03272d20db56dc36b045faac3"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "47afb42e3c5bf4b7a560a049e80e3820"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "199eb27a74f59e2eb31307635c5ff7a6"
  },
  {
    "url": "other/index.html",
    "revision": "d22012f9f6b8eb2961d774377e421d1a"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "880c73168b18b5894959bc26f9966a7b"
  },
  {
    "url": "vue/index.html",
    "revision": "cd4da1b9b08db67e535e524bf7e921ac"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "82c13b83b7f5082e632e10b98daa5624"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "5430f1b9e666a0f1f72a64f0485c96dc"
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
