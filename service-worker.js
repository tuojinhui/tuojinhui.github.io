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
    "revision": "ddb95242f6598e98975b06818d1a2836"
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
    "url": "assets/js/11.a480c8ae.js",
    "revision": "411d4c245bfc22557ae99c76c9ad083d"
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
    "url": "assets/js/18.806a675a.js",
    "revision": "e1c878dd5bd1b402d5183ad2955facf1"
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
    "url": "assets/js/app.69e7ab4c.js",
    "revision": "599b4c11f1ebe7e11cccc522ff43460c"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "033fc0dc21aa32f9d9f29d46badf65d1"
  },
  {
    "url": "element/element2/index.html",
    "revision": "8b3342dc9e23535a21cfbf1d235924d7"
  },
  {
    "url": "element/index.html",
    "revision": "235782646cf637a58bac13bfaeccc6ee"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "5430179a40438f73b9ed0b278345a122"
  },
  {
    "url": "java/index.html",
    "revision": "80b08264587ad0ada0b348b5ea3293b0"
  },
  {
    "url": "java/java1/1-SortingAlgorithm.html",
    "revision": "5a5e94cb840aad640dcf85452b2244d5"
  },
  {
    "url": "java/java1/2-SearchAlgorithm.html",
    "revision": "940f2b3c2a97caf9e2c801cd47884a1e"
  },
  {
    "url": "java/java1/3-DesignPatterns.html",
    "revision": "6025f14e2100fa51e6733f54a251052a"
  },
  {
    "url": "java/java1/4-DataStructures.html",
    "revision": "4a56b6fe71ec981436378695f081ece0"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "f1df0424cb20153c8a23380af0f5902d"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "9baebc5fb6fadb9936947fa3f8ff0fd3"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "538bd8fc9305e6a7e5aa2484e7c62ea9"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "9a6aacbc67ae61fb7c4d82b51f5c613d"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "51196553000ccdee5791d8e7d79b34c5"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "b013ac74b05d8bf91c2087a1e6fcd482"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "8ce530410f7ae4198b084eb7ea991fa9"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "6169f1718c9c3f5668e340f2ac2bc6dc"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "4d3a09f3868597e3bff673f4bfaa2e80"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "d42c5bea635b34761d2142410eb99bce"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "af9bdbe613aa447c4c0b2ad6f6c03ac2"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "52af6aa11b84bd37c9e9c057e1fb9474"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "5449e9cb2539b81d868659cf29d4e4ae"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "b3f0e97710b3ad784c3c73cf5f87576e"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "ccd99626cc0ab2a95befa6332c2b1b91"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "53b838561d92676719aed10259b61fe5"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "a832a8761d9c123a8eee4742360f9cfb"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "657977fda194b550a4698ae0f520ddf0"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "9696d9e5b807ec53f0cafa8f4187606e"
  },
  {
    "url": "java/java2/index.html",
    "revision": "dd71bebc6319c7533b1c18cbd2115b2f"
  },
  {
    "url": "mysql/index.html",
    "revision": "3f0fd670a9a6305ca2c90f260bf30caa"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "28a6a1bca2a72420e0751f96dd33a88f"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "230abf4574a5468436db24a0b829da48"
  },
  {
    "url": "other/index.html",
    "revision": "a0eaf425f86f5593181c6a98b681cfaa"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "69068d5c9baedf80c8e15b273e3fd4d4"
  },
  {
    "url": "vue/index.html",
    "revision": "849ba1b153685061b39dbf0bf9df712f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "436a44615e71372e7c80c117aa8525f8"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "6297444a8ea7b08c65085c210425c5b7"
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
