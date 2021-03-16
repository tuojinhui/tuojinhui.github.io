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
    "revision": "cfcb35476a66cc21aded8fe20951f73a"
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
    "url": "assets/js/app.fe8e2332.js",
    "revision": "cc37ef33577d7b6d5d357dc891f76ea2"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "f8d88e728a533596dceab270d7c62ff3"
  },
  {
    "url": "element/element2/index.html",
    "revision": "6a268616de633b5859dd8e15c0abdc8a"
  },
  {
    "url": "element/index.html",
    "revision": "2a0b1f5aaa0b4f94b9081f9c1ec0b373"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "94010e4e6909b4b2886649caf67917a9"
  },
  {
    "url": "java/index.html",
    "revision": "a30c18b7b7fd7c7268d64fb8ef6d2987"
  },
  {
    "url": "java/java1/1-DataStructures.html",
    "revision": "21c24f68d2099b08c2fcdfb84906cc91"
  },
  {
    "url": "java/java1/2-SortingAlgorithm.html",
    "revision": "cda89301953643def52f38c30e3cf140"
  },
  {
    "url": "java/java1/3-SearchAlgorithm.html",
    "revision": "c2eb3d4455812271603c191ddc95eb48"
  },
  {
    "url": "java/java1/4-DesignPatterns.html",
    "revision": "8e75b83cb7b4dd0359be1aeb3a476502"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "9a8aa0d97279bbc17fe9ce9d3702e0d5"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "c5932a1f26af33c21995fd5b5d5fc8c3"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "7ac49a95aa40dba10286dea58f5d257e"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "41fa41da3e50a77ffbc6d552291aa8c8"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "db5064f1d70a85293704403ec9e07d70"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "265f09acd550e37ffd383795b3dab59d"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "7939b0008b1fc1a32280491c1c154ff2"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "dd094af4bfdcfaa7cb46e856d8b006d0"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "15b6da8fe91d9eae8adf82eee1a375e9"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "77886559f370a980c2cb94d8d320eec7"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "607a65bfeecb1aff8f27075d0d1b4467"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "d491f4bdd43d3af6377ac7227dc83a05"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "dec8106799d37483f264e25679efabc6"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "524fda17c7adf7e2422a9465468229d9"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "d75a0417378a53f4306d4e19faec29d6"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "df1166735108d3ebf4c17a67fa184fcc"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "6c3c137b1228f7c8ffb52116d61d7334"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "f45c98b91c0efca68403167b2cc25da0"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "d1d2e5112a74dca505251a0285c03ec2"
  },
  {
    "url": "java/java2/index.html",
    "revision": "9f76eac942847bca9bd00f77a9bab85c"
  },
  {
    "url": "mysql/index.html",
    "revision": "57d943e55d89782977e149a79d6adb4d"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "234afff16161494428747bda80ee653f"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "df3bd5493c9c0d2fdcb47961dfe1ed98"
  },
  {
    "url": "other/index.html",
    "revision": "1bb3078c0911af43b4db60b81509b16e"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "8f7f972e6199a92578f72810c165d1e6"
  },
  {
    "url": "vue/index.html",
    "revision": "d1a944bb386e13cb4cdf634ec61a9e6d"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "c55e4573b6bf2c4592eea375c08dd466"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "63cbcffa1804df574c2d726093972802"
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
