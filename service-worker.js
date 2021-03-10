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
    "revision": "9514eb2f6f8ddd079d4eee4ced9fb9b2"
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
    "url": "assets/js/28.7b2020b3.js",
    "revision": "ff1f4dc85647db5e2ab88f5666f28dc1"
  },
  {
    "url": "assets/js/29.1d4c93f6.js",
    "revision": "c5216b75090677799745a7bd8a147d4d"
  },
  {
    "url": "assets/js/3.504bc785.js",
    "revision": "e2d8f0cc01bfa55a3bd038a20020a043"
  },
  {
    "url": "assets/js/30.76835977.js",
    "revision": "905c183368d87c83616a61c670d459dc"
  },
  {
    "url": "assets/js/31.5b45a44e.js",
    "revision": "7703bbc1b7463fd6dbebef38707457d4"
  },
  {
    "url": "assets/js/32.8844bdcb.js",
    "revision": "d797a19b9c843946d2ae2e10b2f10544"
  },
  {
    "url": "assets/js/33.df312adf.js",
    "revision": "b308c0cee1eff942b8e94364c9ebba51"
  },
  {
    "url": "assets/js/34.67014bdd.js",
    "revision": "cb9a84cb8ab7c1cbb7144a34c9bb81e8"
  },
  {
    "url": "assets/js/35.2dd5c7db.js",
    "revision": "96b9719a8caa6ec9123dc7bfab49c421"
  },
  {
    "url": "assets/js/36.83f29a42.js",
    "revision": "b81fa597e0236d6343d1c7f83af0e21a"
  },
  {
    "url": "assets/js/37.4a1a9df5.js",
    "revision": "79f39b92561be9ada5bb09e5e1d7f1d2"
  },
  {
    "url": "assets/js/38.be138595.js",
    "revision": "8e9d97ff8b34228a243092fcd5ac9b02"
  },
  {
    "url": "assets/js/39.39aac720.js",
    "revision": "49907b0bae2d4c890285eaec59f77ec9"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.71779a6f.js",
    "revision": "029702bca4afe183fe34a241815ab891"
  },
  {
    "url": "assets/js/41.3eb4e407.js",
    "revision": "e3a7cc52242abe88ced7bbbcf720d6e3"
  },
  {
    "url": "assets/js/42.0b6c79d4.js",
    "revision": "4de2ceaa568f34493134e55bf00fa221"
  },
  {
    "url": "assets/js/43.41cfef93.js",
    "revision": "b2607888771eb91d10112dae1b1594c1"
  },
  {
    "url": "assets/js/5.9f28446d.js",
    "revision": "ec3fb7310dc1ace0efe76ad09f35910f"
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
    "url": "assets/js/app.52ec3d74.js",
    "revision": "1db5db812ef12f74f7c949c4411a22e6"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "a6d0865f4a891fdee841468868594870"
  },
  {
    "url": "element/element2/index.html",
    "revision": "f2b2a057cc2c568891c11dec3729bd59"
  },
  {
    "url": "element/index.html",
    "revision": "c06120dbff5828d1588d4a3aae9c91ea"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "c5744e45a3096b80a1a17eeacce7c510"
  },
  {
    "url": "java/index.html",
    "revision": "dcf5eede07a8c138d01224d95cfaf077"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "cda7a835b68754c90bf7a32f072e93b8"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "a070156c44ea281c88e6e2e1183a35e9"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "ede80551bd30973c624c9a611a034fd1"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "4504391e4e96e2ccbd3fb985605ea7a5"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "1a7b1ad27b5b04e2bb3886270c5edc58"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "018b9ef4bf06b059addeb911a1a49da9"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "beedd3d1c349a0dd6836488c8bd55d7c"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "60741677d06a92322536de8a4ae61d50"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "374d3b388915bdf15884698d044a9ee3"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "90dde82d49581540ca602b211576987a"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "99596a31d464f85b08f34661b65f505b"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "7fcb66e1936c22dc3fb49bda5194ac67"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "b491dc24111cecc07d7191efa2afb8b8"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "776c4d7cf214879122f33105158eb553"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "7bd14e5f54de4fd174db9e5a20500fca"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "20d8d1c75816111479f4b28f97b16681"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "45841c40e581a739683e5c602c9cf8e3"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "b443bb32e43264eb451b4763be3da3e9"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "dca0bfe01100c3dd17430865bb5d6e1d"
  },
  {
    "url": "java/java2/index.html",
    "revision": "d8c7bb07fb6396dea9b528e40cb45660"
  },
  {
    "url": "mysql/index.html",
    "revision": "c571c1d396f00a05d5e399d6b9ca7082"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "0cd616b0b56d02ab5547ece122e69c71"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "578b2ba3e679fb206d4109a8002f0916"
  },
  {
    "url": "other/index.html",
    "revision": "bfd9ee10f72b6ba754e250eb552594d0"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "b41dfa5203c889401ca75a6cc60db67e"
  },
  {
    "url": "vue/index.html",
    "revision": "8a724578e7899e7b023a6c9915783a48"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "86f524439745c4f867fb789dcd402004"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "572a7007214a67e0da7800035a27c89a"
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
