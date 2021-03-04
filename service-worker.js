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
    "revision": "7b86d9eed6816175274d38c1ced5bba7"
  },
  {
    "url": "assets/css/0.styles.a60ada23.css",
    "revision": "97effbc8cb40955ea1001b501d5127fb"
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
    "url": "assets/js/23.5a14566f.js",
    "revision": "e10b98228bf9ccb401dd0583c6554e26"
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
    "url": "assets/js/5.d8f21aba.js",
    "revision": "ef7bd344858138cdf8666c3c5974156c"
  },
  {
    "url": "assets/js/6.04391c4b.js",
    "revision": "0c693e878743ea0cff6d0ef478b4cb99"
  },
  {
    "url": "assets/js/7.f3329a88.js",
    "revision": "ddb6cfeeb98d01fc2068750047ca6720"
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
    "url": "assets/js/app.f820491b.js",
    "revision": "2b7c1c2b76efe2a501d8ce7f310dde48"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "fe192afe2802a7db0630bf9535affdce"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ad6a015d215011155fc2b5d0e164d3ed"
  },
  {
    "url": "element/index.html",
    "revision": "32ded059e411316dd2762ff3e6dfe269"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "41dd1eee292b51d47e157b7caa1868b8"
  },
  {
    "url": "java/index.html",
    "revision": "5814795be02e3740dac56faa627690b0"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "f0af1e1e528c1049a8ad32e158ec7032"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "81f1ebbddb82fd8a0fc067e330fdb2d3"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "af73bbff22f8cbda11916f6483c43da9"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "4ace56a6b24e7399a414633fb4e5a6bf"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "92d361807ff59d710d6fd9edb55ea10b"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "ac722b8a0b10018d353d6b443557cb91"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "49b5b077194af7f6b3d017c9ca77f909"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "3ea516af4b2475880aaa024dc2971c51"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "c4582959b87736076e2fec90092affae"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "4c922f4894d5a9105a21cdd092e1d1d9"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "cedb0d57313f6a4e181eb38164f2efe0"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "ce7f102a100abaa6c18a354230e74b2b"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "c472e6a8c1ea4a50b65b12d493b95b3b"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "6211b667dfad21c8dc93823848f4be36"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "edadd3139a065e2b4e7c8d26ce712669"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "15f7d755aea69b0a3a4a6560b30d2a11"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "e0dbc8f567165ac702ec787a4310babe"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "bdbf98b0fa577986302e7d42219c011e"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "cb1c80895b0fafb3e16e8476f291cb73"
  },
  {
    "url": "java/java2/index.html",
    "revision": "553ff2000cc2037de9477b51b7288af2"
  },
  {
    "url": "mysql/index.html",
    "revision": "be2a73dcdbb3d9c648fcfe3ee21fb7a8"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "1c312f4238330467590ea5e803637e2a"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "7e429ed76a7676d21a74dde7f0182b69"
  },
  {
    "url": "other/index.html",
    "revision": "38cf56df5adbcd10495da15361048ccf"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "c9d0116ea5ce5e144f1d04c1b55ddab2"
  },
  {
    "url": "vue/index.html",
    "revision": "ccf86ebd13548e69baa6b8c2f9e58865"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "529808f8fdbf736f18c09743644b0d3d"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "668ede15efe0f26bce6bb277fec0455e"
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
