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
    "revision": "2830d7a823f1c45437856562edcd9021"
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
    "url": "assets/js/13.41cf56bc.js",
    "revision": "e98dd044113bebda429decc759f8e3aa"
  },
  {
    "url": "assets/js/14.4bb63457.js",
    "revision": "1a651afcfc49b58398325b9f48c2f71c"
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
    "url": "assets/js/17.1c0ad293.js",
    "revision": "dae337edd479133b69282d1567ec52a3"
  },
  {
    "url": "assets/js/18.665d995c.js",
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
    "url": "assets/js/app.a3013c92.js",
    "revision": "06bb7fe5e6f47be00d704767c8b5e7a7"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "9e21c38dee8954fbf2518cfe23d7ffa8"
  },
  {
    "url": "element/element2/index.html",
    "revision": "b5749a5751f2ff0306225865faf8f981"
  },
  {
    "url": "element/index.html",
    "revision": "018038f8b8a2b304e40cf0903ed10da9"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "d854d1b3f7160065e223c02d8361046e"
  },
  {
    "url": "java/index.html",
    "revision": "2815bbfc94f72f9f9de5931c4090b060"
  },
  {
    "url": "java/java1/1-DataStructures.html",
    "revision": "a7e23b79aea8634520abfb9486ce8201"
  },
  {
    "url": "java/java1/1-SortingAlgorithm.html",
    "revision": "1be7c1cb40149600da86ec33c552424c"
  },
  {
    "url": "java/java1/2-SearchAlgorithm.html",
    "revision": "1c858056e197a56b64693358241ee606"
  },
  {
    "url": "java/java1/4-DesignPatterns.html",
    "revision": "969a41ec12976e3b4a9f26c28efaf3c1"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "14e6c92dc7398df28881b1c8e90441ec"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "b8284eb1ffa63a2514a17f6bc8eb3929"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "57ed1480707addccf7af3c5e9eb8f027"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "16fbbae07e5f579c6244c44160252b8b"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "66005405e29ff72fa77812a41c9e3bcf"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "9af3bf25bb210b210e3e03f2d839cad8"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "5fb9c3907a8a1ff8ed3125fca990a332"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "45f017980c4c9c61845121a111b97474"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "c74fe123b16b9fbe546e663d92bdba38"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "af4b5f0cd279741ad4bdc22a36e30c8b"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "a9507f65134843f5016b071548c7596b"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "cc1e96a7caba46f270aeaf4cbd49ddcc"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "c4a42a164e3a65961ba8bf3948bce234"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "202d6b9e0d2d92bc49ea1cb573d9cc8e"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "93b09a9e09f06aab751879f499b3d10a"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "1fd875584809566b5aeff82e3f7bd65b"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "78eb0c1afb70c95913b0e67e61d91ae0"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "913bf1dc679940215637a0762aa67b10"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "facd69ea973d0d6d0ebf8a50e19b50a4"
  },
  {
    "url": "java/java2/index.html",
    "revision": "a0411e8cd888b0fa3f079ed211819008"
  },
  {
    "url": "mysql/index.html",
    "revision": "121312c9d753fe01f7c8cfca7bb07eb9"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "4dd168fe1929a4477510ae0e265f5932"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "02c41cc3a74504bcbee081f12d7e9a77"
  },
  {
    "url": "other/index.html",
    "revision": "428b4c2f0d93d3a02495a9bb7d0e1ab1"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "06ca0c48557a7a7cf6fa77fe085e0655"
  },
  {
    "url": "vue/index.html",
    "revision": "d937809a1a832da1f138027ffdbd8965"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "08471644d6d6eaf06d0546fe605a9118"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "69bc3f71c6bcfb4a461f7b92c3709220"
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
