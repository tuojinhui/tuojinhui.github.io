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
    "revision": "c348495306e13f056ea0ae6c8a267f3f"
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
    "url": "assets/js/17.a55c0a92.js",
    "revision": "14910439fcb2a680491a1343d1e27569"
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
    "url": "assets/js/23.06ab31e3.js",
    "revision": "6a85766fb3c83090e64a229002854588"
  },
  {
    "url": "assets/js/24.e735728f.js",
    "revision": "a7d3cef419424a27399ca2c5019840af"
  },
  {
    "url": "assets/js/25.b0adaa20.js",
    "revision": "f25ec5f0680ea45a09b3f934cf9f04bc"
  },
  {
    "url": "assets/js/26.bc683d7e.js",
    "revision": "4bb9ed749a006ab4ce00694ea33ef246"
  },
  {
    "url": "assets/js/27.675e10ce.js",
    "revision": "83cc57b8ae9ff7ab1ccd23ae090585b1"
  },
  {
    "url": "assets/js/28.7c83742d.js",
    "revision": "0dc94afd6b633acbbd2c289fd4178546"
  },
  {
    "url": "assets/js/29.279b36a2.js",
    "revision": "3790ded520cb51300780a59ae61029e1"
  },
  {
    "url": "assets/js/3.504bc785.js",
    "revision": "e2d8f0cc01bfa55a3bd038a20020a043"
  },
  {
    "url": "assets/js/30.dd0c5933.js",
    "revision": "6e75cc72cba52334d71e110e7b36b6e0"
  },
  {
    "url": "assets/js/31.4ade73bf.js",
    "revision": "164db906dd46b7f0d41be1ff43f06101"
  },
  {
    "url": "assets/js/32.33d162f8.js",
    "revision": "2c06a5f07977e73e7c3bc39b28911387"
  },
  {
    "url": "assets/js/33.76dc15f8.js",
    "revision": "7d7d9e8a9a20b97a94e46a18bfc746e8"
  },
  {
    "url": "assets/js/34.c716ac5a.js",
    "revision": "9f411a4eb3bbbe8facbbd15b3c782380"
  },
  {
    "url": "assets/js/35.9aaf4362.js",
    "revision": "ee2c10a70151e1847d6dfd2a250ed55d"
  },
  {
    "url": "assets/js/36.8802ac2a.js",
    "revision": "d4e15001285175f38d7ad0227503f3c7"
  },
  {
    "url": "assets/js/37.1dad0360.js",
    "revision": "651d8223aa7f01db65b315eeeb3fe4e4"
  },
  {
    "url": "assets/js/38.28f6d47e.js",
    "revision": "c052fc0c26d376e26f6fb5ff84a9a664"
  },
  {
    "url": "assets/js/39.b10a6e50.js",
    "revision": "68df9b7711a820c47abc1cf3b1ccbe03"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.4a5d74a8.js",
    "revision": "0904f93653269f62c152ee683e0bd33c"
  },
  {
    "url": "assets/js/41.1e2bab95.js",
    "revision": "5e55d8533e2d3bf5c72ae7807cfe470e"
  },
  {
    "url": "assets/js/42.0d49ba4f.js",
    "revision": "f0b6e907b7101875828b3df417cad691"
  },
  {
    "url": "assets/js/43.bc1e0d72.js",
    "revision": "6dc689e3792f5a67d89e9281a17e2200"
  },
  {
    "url": "assets/js/44.debd8c74.js",
    "revision": "f74f6d04824225b156a9554cc647d725"
  },
  {
    "url": "assets/js/5.dcf9a730.js",
    "revision": "0bb0bb1faf589acf53bfc02611266dc7"
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
    "url": "assets/js/8.8febdd87.js",
    "revision": "db310fe863c078dab24c9dac85f0c60d"
  },
  {
    "url": "assets/js/9.66d982ac.js",
    "revision": "65d985bcb5ea280e67ffcea805102f8a"
  },
  {
    "url": "assets/js/app.3d9265c3.js",
    "revision": "954812572ad500d12b11bef7c69507c9"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "a24048cf97d52a84bc6ed4129a5fdc51"
  },
  {
    "url": "element/element2/index.html",
    "revision": "a9973f16e2821c1caa6a2d3257a29b9e"
  },
  {
    "url": "element/index.html",
    "revision": "b05a41b6b3cf33b7eadb828431cf76c8"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "64c4d8cb9b0dccf106a890cce6f82193"
  },
  {
    "url": "java/index.html",
    "revision": "a1fe0903995e2f9fdb6e53d3e559d4d4"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "54b3c08430dfaf2a8d2cd5d97a36a516"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "d33625b0e386ed9007ee0a3723b0982d"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "3f8f2928f5b4ea7b94c6f278143af6e9"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "9e4380a5f2776f109be63df7c9adae99"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "2456b41b8b18430ffa4c114f1d8ab92a"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "92cc6fdbb5ed2bdc916309be201bf27f"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "788195eba3b194416bdb541acce6dd0b"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "1255c75bdf5af8cc28d9281f1b9af2e4"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "da7a532367e3aad826c4a98dd9639019"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "4ede753be371b58784e0202e6da0a0bb"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "e948c4a75c22c997f1d4e730d9f43344"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "29fa97808038d49321a3a392ddc3e87c"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "11400e854265bee6173e85d9e1448af8"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "bc5e9f87c0a5f41ec8034fbe942a457c"
  },
  {
    "url": "java/java1/SortingAlgorithm.html",
    "revision": "0123e038c3675fdba1e0c5703a6cabbe"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "b95de2c6631a317f885d19781dc88fdb"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "7ae9041bb2c8f51bdc030947cd6a41a3"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "4c6c89de9a4329961044edbea124c33f"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "fb2229c56aa3ccb82b45957cd33e162f"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "040e6bb2a654b78a47194eea95e06d3c"
  },
  {
    "url": "java/java2/index.html",
    "revision": "f48b5296228870216b2251c4c4e78380"
  },
  {
    "url": "mysql/index.html",
    "revision": "eafd372e9266c24f55566ef831885abc"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "66b16eceb3b37cf5ce27f85881da1782"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "154020e94b9f34270094309ff630dfe2"
  },
  {
    "url": "other/index.html",
    "revision": "963f83d37bd0ed3fbece375fa8b8b831"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "dd418fa84d1c80c0624d83780f157f97"
  },
  {
    "url": "vue/index.html",
    "revision": "b3634afdb33e3737ade7ff09105867e3"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "072499b64e27f53399f662e31f522898"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "7c9dbcb645ce1dfb447df539923a1d63"
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
