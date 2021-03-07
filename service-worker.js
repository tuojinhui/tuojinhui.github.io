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
    "revision": "e68812a2b0c70629d2b60beb7eb1c41a"
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
    "url": "assets/js/23.fbf2af84.js",
    "revision": "6f1ce948597bc8ecc7fc435afe4abd37"
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
    "url": "assets/js/40.ba1ae94c.js",
    "revision": "3f5531c766c7f8b7c981e748160e14f5"
  },
  {
    "url": "assets/js/41.75915a2b.js",
    "revision": "77071128cf80d39fc03dfa8e9011db70"
  },
  {
    "url": "assets/js/42.6f9f00c4.js",
    "revision": "075520887cdd6490d403707082aaa9a9"
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
    "url": "assets/js/app.e893c150.js",
    "revision": "536762b1461cc998b8c8db73ee8838a4"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "4e1ce72f3729a3d0641dcd42101bea5d"
  },
  {
    "url": "element/element2/index.html",
    "revision": "b52e05f9aff7bb47a7ec3ec608aac94c"
  },
  {
    "url": "element/index.html",
    "revision": "fa43c9111f550934e17c2c69b4e82311"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "3d40f900ddd3c36e0faa8548adf879fe"
  },
  {
    "url": "java/index.html",
    "revision": "4968d8f5b05fe3a6004b1232ca93bb22"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "69042f1f190a4e25918d8950531b2e9a"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "c3f1c5429ba71ca9cbe6acc28b75240a"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "246163cc182f757f1710709052a58977"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "514deb48a65709870831a1b439e8f10e"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "0613bd01a80d3507f61cf4026a94c3d9"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "c61262d4dfa5f922138436812b9c3c2d"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "af46e2971cfbc5bd4c14f7a2282861b0"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "1c32f343efd7d5d7b45e95c5467575ab"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "a9b259744d50a57c7a8127a01f8de133"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "d9206b0d8e5cb7a4593b455198db256e"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "b5fca8ec851085d9b0b51437e2ca62e0"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "265297cba67a59ff736f686c0be6b835"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "4135756cc3524d4b650fb1858fd4a899"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "5626e39e5b4190f087ede1438b41a671"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "2c8b551beee7afb0825d532a6637c4a2"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "9bcee21eeff0d785eb4e0d75a5202833"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "e7bcdef5262f5f4cf15ca314712006a8"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "812226ded8d136debb08c57d37e7042d"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "d13961ea5c14e4ac7fc04f0a7532dc07"
  },
  {
    "url": "java/java2/index.html",
    "revision": "a74a0843f915944b4dbc9458ebfb1423"
  },
  {
    "url": "mysql/index.html",
    "revision": "86bf06cdca945ca8cde6f2155bfbd8fe"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "c9f37d221358cfc6b952bd7ea9d02c2b"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "dba618bf8264a3c62f6af88859e4a9ad"
  },
  {
    "url": "other/index.html",
    "revision": "f2ce0c39de10677515c7568e1d3796e2"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "ea22e5310fe4409909f4738cc74305cb"
  },
  {
    "url": "vue/index.html",
    "revision": "52b520e1aa29654467a697ed10406473"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "836c1c945664853124e0e391e4bfaac4"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "9061ee63203f085157044c51ab9407ef"
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
