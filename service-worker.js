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
    "revision": "de5a8ab1824e1e1facdf928dc57d2159"
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
    "url": "assets/js/13.30982864.js",
    "revision": "62497288086fda192ebfa400fa159914"
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
    "url": "assets/js/app.0f75fbc8.js",
    "revision": "1f864ee9a8a0f00184010c1d9e467339"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "a2873e9136d9279d1d15cf1fc54dcaaf"
  },
  {
    "url": "element/element2/index.html",
    "revision": "fdb265fc2ea51d267397c5ae5ff02569"
  },
  {
    "url": "element/index.html",
    "revision": "deb0fbe25dac45afc0f37dfb24c72f0a"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "b297cc12005dd2b98b9437f25fa452f4"
  },
  {
    "url": "java/index.html",
    "revision": "e100533caac65e5854869df3ba5171c0"
  },
  {
    "url": "java/java1/1-SortingAlgorithm.html",
    "revision": "52dd4414e6cd06a986c255bc5db4ebc4"
  },
  {
    "url": "java/java1/2-SearchAlgorithm.html",
    "revision": "68cecececedc338f789f5cb73bbcdb85"
  },
  {
    "url": "java/java1/3-DesignPatterns.html",
    "revision": "4373fe92a8249bb64147667255716e09"
  },
  {
    "url": "java/java1/4-DataStructures.html",
    "revision": "754bd58dfbf0c0eb64c39a000235b183"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "03567bf41102ca8d013be1cb1598d9e1"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "0d89ada59b8b169a540aabec5b9c391b"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "e7c13f8fe3abd7154a8b493cfc1b5042"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "fae2255b8778d4bbe6325fa47efbd9d3"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "2bf81736f4ada41ad13809d1ee72c52a"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "6306cb2eeb958563684ec824786abf90"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "9b0ebe46de82447905ca6e86cdf8dd39"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "d232479fec53510c076bb9fdc89dc76e"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "8fdc427cdd2a5ae37313eadca67cd5e6"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "7b4746d1b1eb7c499d6bede5e664b725"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "d09b3fd3b06567cced4d5e3e293fa076"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "f94a7cf152442ecf1ff1adddeb7ae79a"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "773a3837985597d505e3676724070b2f"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "61d648431fa1985ad12bc244cffd40f2"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "b8bbfe88636db404841ba70b4a9ae59b"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "a543649a1ecd6fbc229c2988bbc22941"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "c2d90300b7ab6d0bc9bc8e6feb2a5584"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "9a42241dac48874e55346995c263074e"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "602725eb7b966828e37f6ff627d130cb"
  },
  {
    "url": "java/java2/index.html",
    "revision": "d1a76b4c2094f309c8647ee4d8c8e33b"
  },
  {
    "url": "mysql/index.html",
    "revision": "603e50aa6b3985ada67c4cb517952f7f"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "fb6eb40280da3d36981c80fd71058eb9"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "36bf804e5432f5c29d3a4d33281ddcb0"
  },
  {
    "url": "other/index.html",
    "revision": "ebc84bfe3be33a16b49fca5bbd46fbc0"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "106ec018bd44ea7757dcc87b7ba374b3"
  },
  {
    "url": "vue/index.html",
    "revision": "b4b830390bd02688ab3c5fae68524f29"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "07799db14abdc9b34a4347e9f97e12bb"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "0e8852d09671050971c82adcc2cc95db"
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
