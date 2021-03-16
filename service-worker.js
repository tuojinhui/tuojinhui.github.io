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
    "revision": "a73913cefea5108e8e7c01a4fda7592a"
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
    "url": "assets/js/18.7d55ae62.js",
    "revision": "a395987296b5b0f4409cde811f3c290c"
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
    "url": "assets/js/app.460972e3.js",
    "revision": "4f8a055c84db528297c2f06f1c52010d"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "fc7204506069449dfe071c6c619fd99c"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ff5a141b8f805994212bbd8c68aa11a2"
  },
  {
    "url": "element/index.html",
    "revision": "a13808e56eeb704edf9a276e0ae48156"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "f94e84c23b965d8a3a38b4317f57c24a"
  },
  {
    "url": "java/index.html",
    "revision": "d2987d4642bffe174691a09e8dae86c1"
  },
  {
    "url": "java/java1/1-SortingAlgorithm.html",
    "revision": "1810065222ac12de6bc23b741b8d9350"
  },
  {
    "url": "java/java1/2-SearchAlgorithm.html",
    "revision": "5152453b87759456942741f2a5c1231b"
  },
  {
    "url": "java/java1/3-DesignPatterns.html",
    "revision": "99fb33039ebbe3ead15fa03c3ac56ed8"
  },
  {
    "url": "java/java1/4-DataStructures.html",
    "revision": "195663e030d1b643ce01d7430aa479e4"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "9d8297778d5390b3bf1010a42e32ad33"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "b961d2f6e913ed6f82c0cbcbfb5a7d98"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "d7128c9c5f200886d803e4d707a44e18"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "054b4b848d5b3fc431e6e81095c9218f"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "7acf28f5c26fd79469cbe700b73de027"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "c2e27225100eed7a069cee680bed6873"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "477083949a55721b198f77839597f796"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "599524c0cdcd59cc6879326f8683b596"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "9fea91a93d89315c912e9e1e4471bd5e"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "32d494f659051361f17b14ba8fdf8e24"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "6f0eec520da404cb31ca853ad6528b95"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "6ac0839a7c82fe51c1fe767778866f3e"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "0cc4aec4402a537b396927f36b23dcdd"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "9dc5e203ead12c734e05bc2b97be5aa3"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "4ba247a9d1e0c57f3473f6ea3e142a40"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "0f64d938d2dfe5724efb9038c26849c1"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "934469fd198b50c3145beef06bd1c214"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "ec736873cd21c541980c3cb2f05a6bca"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "e2ad5afdccef3775323fe8c23ede467c"
  },
  {
    "url": "java/java2/index.html",
    "revision": "96bf323df4f56ab3bcf43da05d1711c7"
  },
  {
    "url": "mysql/index.html",
    "revision": "ae3dfdc3f47c3d84861dbc63d77f9aeb"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "c73fbf420f613fe647cbc1f4fa41ba75"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "64ed19ac6210805d3f14f9cf0e02a112"
  },
  {
    "url": "other/index.html",
    "revision": "b460ff1cbce3ff49aef537bc1a7dfe94"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "8bcf32d3054e3eccff6601ee3ba4c020"
  },
  {
    "url": "vue/index.html",
    "revision": "485d805ed8be171b43c41d38690d2138"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "655b590c8e4dacdf368e116457286148"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "5445495a013fcaaf0c92c0ae16ae39bc"
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
