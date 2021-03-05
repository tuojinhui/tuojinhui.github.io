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
    "revision": "3b11c8af9851886b85689afd2b717dfb"
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
    "url": "assets/js/23.8f449f85.js",
    "revision": "f406cbd51769aab6ee9719537e4d8f36"
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
    "url": "assets/js/app.d2a83ace.js",
    "revision": "667046805369561a20ef592605912f6e"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "022d72aaecc9639d2bdfc71f54ba9dca"
  },
  {
    "url": "element/element2/index.html",
    "revision": "3916a1614fb37009b61c0cf7079e014d"
  },
  {
    "url": "element/index.html",
    "revision": "a6135a86f899ad0cd38c49f39de4c13c"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "a2f0a6d1bc850950bff86dd5888978a1"
  },
  {
    "url": "java/index.html",
    "revision": "a4cd48c2a8034117006c1a2963e4cd6e"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "92bdc564cde94697ad44e8392e2ff690"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "73c234093c2ee1a5ae586185cc9c97c8"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "2526a610ebef653636c04ffb3ade0895"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "32ec3c532ed18e7d25912713760dd97b"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "637fd751fc16e44f4a93f97cc6b88ee9"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "f7f4e37a02d0691cc7f7ae6e3a27ac53"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "a4c9841ec9c9fee1d49f63c3468783b7"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "9aa1a9c90930cfde2f211644dd65a97f"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "ae0a0d1561d9d8bbe6a498f4292873f2"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "4df58f0cc0773ba6cb07c05e322e6afd"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "ce913602e14a9bbb9d893f97e641e944"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "fc86dfab7b138cb5965e3ba2159e301a"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "886087153bf1bb13a5d97ba394860712"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "aa00a7b7b9413ea963992d57b83ef0f2"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "ffb0c25d93c57d772ad25e15ea2cb173"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "074c445e15361b036f9748166ca4f565"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "25f3b7c6f557139e26ade09a2d8abb82"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "49884e7c204923fad489d1f9e78e4c52"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "ee7c199d4e79cb28491c8ef6662d43cf"
  },
  {
    "url": "java/java2/index.html",
    "revision": "53c538b7feceef9e08fa94769c444023"
  },
  {
    "url": "mysql/index.html",
    "revision": "09a765533b5e5eb19614a5f66e597f27"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "837ac0b4f5fd3201f7df1224686a60d6"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "9a66dd00d7bb1dcc1e3bddcd5360e90b"
  },
  {
    "url": "other/index.html",
    "revision": "1eb4a3502b6c29cb989fb505fe71d649"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "35f74e24145f16db7d5262a8c3a89325"
  },
  {
    "url": "vue/index.html",
    "revision": "12d5f7ab6a2b02dbeba23d4ca995eb40"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "02b4da4a660d5768ad0a9fdbb114d21a"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "2d50ae0d55d4bc5f09abf81b65d073ee"
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
