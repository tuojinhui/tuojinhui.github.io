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
    "revision": "f7d131a2d1f8bdfc71a0ca262b2ec23e"
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
    "url": "assets/js/23.3992be20.js",
    "revision": "c0df5caa5e9cd09b139bc063ee40c15e"
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
    "url": "assets/js/app.13bb6fda.js",
    "revision": "b7d63d4036d5e1c65c969aae53367992"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "211e351ec6a547ec8ace403472fa8273"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ae0c57ade909ed6d9449a7b4f8b64d80"
  },
  {
    "url": "element/index.html",
    "revision": "6b3e05d856d0ac87fa8ed7565187881e"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "a0fbba52772d8bae6c2877ada94edc0f"
  },
  {
    "url": "java/index.html",
    "revision": "97e8a7ea30ed7a72f56d809e4be67248"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "59ecf58d8dc0bc612eeef4752e84b27f"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "13080eaca65ad1a6cb56aa2e90595281"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "d9e613d52bd0259ea8428d74449c406b"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "f4a99f3449220e1bd481fb3c66ae6c3f"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "1428adc9d8fb3f4c444a872877be3d58"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "671fa04de0d1d73a18792f2f940267dc"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "91f6d7bfc7e9249e93abddbd4d0c6f77"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "01ec01d23a966ba2229eb0b4dc973ed8"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "b120bd9682d2f536d431fb2af0bc075a"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "6ad1a3e952826a824d458f9ed6a9a374"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "4c90125aa2e4dc781b006c782d054a3c"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "d15acc66570bbd7da908394767c26075"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "252a7b68466350fd5db35befb65e0894"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "19db602e319111029714ff92a9d64a53"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "d61e3041c78865744cdd92387e55e96b"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "2b38fab2bac860cfb16c5c8b8020986b"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "c90fa6dd7320fcd4482898c5ba08314c"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "07bd201dbc6a17dd4e59d13637c37b09"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "cd9238ee89858cc9ae9556065cee4fd1"
  },
  {
    "url": "java/java2/index.html",
    "revision": "16f15910be62eb56622ac1541c5ef0a0"
  },
  {
    "url": "mysql/index.html",
    "revision": "bd5e0a43d1a75ea14013d0e554ba6dee"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "d06300971bfde2d401a1cabfd4ddf506"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "aa0b7f058a5d9eebef900e661983c0d5"
  },
  {
    "url": "other/index.html",
    "revision": "7e6e7ba7da3f47a4faf5c665d6b0af20"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "1f1b850eb40dce2352915354d8898366"
  },
  {
    "url": "vue/index.html",
    "revision": "9bf272d4e10f8fc153664daa8a064ff0"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "0a2e992f54edd6b462b14b444afc94c9"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "07ddedf1e36de6699bf0daab51fc768f"
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
