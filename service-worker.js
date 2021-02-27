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
    "revision": "72972bbce36fadd65eb998c100408c06"
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
    "url": "assets/js/17.344795f7.js",
    "revision": "b72e206e4f9c3de89f2118f882c7f1a2"
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
    "url": "assets/js/23.a7533afb.js",
    "revision": "5b3f73f7e5ec27fd32c52eb3b629dba2"
  },
  {
    "url": "assets/js/24.3d0f2676.js",
    "revision": "90e2eb9223c513b9dd201629fb3166ff"
  },
  {
    "url": "assets/js/25.640eb169.js",
    "revision": "b7deefa6913b1c53fd0a358222edd757"
  },
  {
    "url": "assets/js/26.11632ec7.js",
    "revision": "8a8785e555a83f2f567245473e1e22a3"
  },
  {
    "url": "assets/js/27.981144c6.js",
    "revision": "2edf61a309428af37719e5491a580ff3"
  },
  {
    "url": "assets/js/28.62228966.js",
    "revision": "03553a19c82c7345b77c8b6733c02fb9"
  },
  {
    "url": "assets/js/29.7b239dba.js",
    "revision": "6ffe2efb9b9ed3413ee667a98ab7e837"
  },
  {
    "url": "assets/js/3.504bc785.js",
    "revision": "e2d8f0cc01bfa55a3bd038a20020a043"
  },
  {
    "url": "assets/js/30.1ea98e52.js",
    "revision": "7d8343d4eab763a9498babbc0b54e234"
  },
  {
    "url": "assets/js/31.a13c9d69.js",
    "revision": "9c00c9fc519bfbb489124d7dfd64335d"
  },
  {
    "url": "assets/js/32.78380a1d.js",
    "revision": "b16d1642895c8617a62bf7fa10f99a6b"
  },
  {
    "url": "assets/js/33.a70cb69a.js",
    "revision": "2fb29b428a2daf8c5aab19e4ab6e0901"
  },
  {
    "url": "assets/js/34.0eaa84d3.js",
    "revision": "4f39b4df64d63b4c1b535787a2ccd79c"
  },
  {
    "url": "assets/js/35.3a80fd2b.js",
    "revision": "9ef680f2908e8fdac7524e3bc0f2671c"
  },
  {
    "url": "assets/js/36.cf2c2e1b.js",
    "revision": "57e6a657ae63678ec3135a4494716f6a"
  },
  {
    "url": "assets/js/37.4fa92258.js",
    "revision": "5e5ac71448fce99685a8c06642601b33"
  },
  {
    "url": "assets/js/38.a8561f60.js",
    "revision": "fb81cd3eb89ebdfadeded0876a07b1e1"
  },
  {
    "url": "assets/js/39.80c80aad.js",
    "revision": "68df9b7711a820c47abc1cf3b1ccbe03"
  },
  {
    "url": "assets/js/4.0a0278b2.js",
    "revision": "09612f5898fcc2f72689168d45524b52"
  },
  {
    "url": "assets/js/40.df17c836.js",
    "revision": "4701d9dbc32249505895a4e4322e5732"
  },
  {
    "url": "assets/js/41.e0c2f11d.js",
    "revision": "9af2fe27e5618f23dc7f970ff590075d"
  },
  {
    "url": "assets/js/42.74030adb.js",
    "revision": "42a905cc57e1387706d693627c8d8de7"
  },
  {
    "url": "assets/js/5.1d6a025b.js",
    "revision": "93e6c4bc1ed1a1ed3436c434c8434a60"
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
    "url": "assets/js/8.28d5eee3.js",
    "revision": "4ed0c7a408effb0a80d366c0f564bfff"
  },
  {
    "url": "assets/js/9.66d982ac.js",
    "revision": "65d985bcb5ea280e67ffcea805102f8a"
  },
  {
    "url": "assets/js/app.e47f9666.js",
    "revision": "04da9c1440e5a010ee4fff330287ef6d"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "b66672d62ff083552e46f7983dc84796"
  },
  {
    "url": "element/element2/index.html",
    "revision": "2d718526075e9496fa73336aecbaa739"
  },
  {
    "url": "element/index.html",
    "revision": "116bf2843242d5267938fa04a2e8eede"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "060e1ad68ae0e8a826951013e55c714f"
  },
  {
    "url": "java/index.html",
    "revision": "8e5f556791cf52956bfbe31c33c1c263"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "fb306c099184ba66108c1446df74287d"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "f9a8c9570a8b0fa151efeb37f05c8c3c"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "72fb179d149a405d9618eefa0e05cc08"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "44ff491aefefa2867aff1c933629f32f"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "599293af0278c6435d0a2cd6eaeb8bec"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "f010909b889249cc5fc63a1e49fa7c9a"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "db12bab13fafc765d0027cdcb69d2899"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "cf7998e42afea3f60b5ffb8ac9519b86"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "c2c5169f514dddf9b851daef55d2b1c1"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "4aaea44a1b9418e4ce8922875f4148c3"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "1b2bf8c64b5d9ed3dfdaebcb0bf8eb27"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "20d14a89a984b33c9a547e1f3f3a4bd2"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "95e52bb24b7404341c5e37b8c3a9eb2f"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "8ec8e760d46cb3a84f77844b17fb4346"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "444756befa9b737b3780d10e54f2dd55"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "4761756ec67fb52871e6c15771bb8051"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "87424bc3973f31f86be088d69f0b2f89"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "f85aa79a7bf2a66a4b7d6e498ffe77a0"
  },
  {
    "url": "java/java2/index.html",
    "revision": "c03b4eb5e6b132e03978d2f220d361a9"
  },
  {
    "url": "mysql/index.html",
    "revision": "8dcf761483d34457ee56eba6332ea398"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "178b20439ce65ee9b26e4141eb373410"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "a6e4451770f46980bf4470df41074b7f"
  },
  {
    "url": "other/index.html",
    "revision": "e6359ee2659a30fa54af982349625508"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "722af91efe77cf23e3eef17bb143085b"
  },
  {
    "url": "vue/index.html",
    "revision": "76235e3a0e28e019c990374a65647893"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "b34f2ae37e6e82ca446ffbe18396f894"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "adcc26bbe1b92b5718e5d4deaae1ae10"
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
