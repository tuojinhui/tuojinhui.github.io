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
    "revision": "2ec3da43bb1839daaab04857ed611de3"
  },
  {
    "url": "assets/css/0.styles.e95cc0cd.css",
    "revision": "7a01d9d422f0d35ce152d3f74b42e1f3"
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
    "url": "assets/js/10.0ef276a3.js",
    "revision": "023e8364003e0f36fa06e07e3dce1f61"
  },
  {
    "url": "assets/js/11.21a7dd81.js",
    "revision": "b15a21f6cde15289cffd2f4f8e80e1fd"
  },
  {
    "url": "assets/js/12.b1ca900b.js",
    "revision": "34ce9d681f4f744a966db27dbcf93c6e"
  },
  {
    "url": "assets/js/13.39f77793.js",
    "revision": "f797e1a885f07b5228cce16f6da386b3"
  },
  {
    "url": "assets/js/14.13ab12d8.js",
    "revision": "58cb6e9a82a355e63eaba60ff7b1740a"
  },
  {
    "url": "assets/js/15.92c457c4.js",
    "revision": "7223dab8e746a5f09c14245e43dc538c"
  },
  {
    "url": "assets/js/16.3bea756e.js",
    "revision": "a9c0b52475a1609978309c6f8472d0c0"
  },
  {
    "url": "assets/js/17.5ec4f6fb.js",
    "revision": "eeb90467713f28eb11d4aafa0f1ffd62"
  },
  {
    "url": "assets/js/18.596586a8.js",
    "revision": "58e29c2ec1bcba3d962809b6afef4f2d"
  },
  {
    "url": "assets/js/19.ffa862d5.js",
    "revision": "856c4e9ba973871144f8d3a32cf2ad44"
  },
  {
    "url": "assets/js/2.7fcf7245.js",
    "revision": "e3d646246a721be5fb651bc33b115538"
  },
  {
    "url": "assets/js/20.5a4baaad.js",
    "revision": "e44c7e0e2b7f03a8205e2670352c5549"
  },
  {
    "url": "assets/js/21.82e683cd.js",
    "revision": "44f5332d06de8e53101746059fa1a5bd"
  },
  {
    "url": "assets/js/22.a0985500.js",
    "revision": "4604d7b5ae8a7ad0b2f1d56e1323a829"
  },
  {
    "url": "assets/js/23.af316be7.js",
    "revision": "49df0f2d9425ea7088e3be570dd8b71e"
  },
  {
    "url": "assets/js/24.70673454.js",
    "revision": "5b5586049736e74600ccf39961c0656e"
  },
  {
    "url": "assets/js/25.f002f475.js",
    "revision": "2abd73d7b1180480ec9fa055884bd726"
  },
  {
    "url": "assets/js/26.f16e3199.js",
    "revision": "7716051a1b1103ab64ca3abd2bec521d"
  },
  {
    "url": "assets/js/27.f5d6ce84.js",
    "revision": "7232686fc0df9f9f27008e1a9a9c5d48"
  },
  {
    "url": "assets/js/28.d094ee34.js",
    "revision": "3a56c92bb266530caf97b0c146cf1bcc"
  },
  {
    "url": "assets/js/29.0aa71393.js",
    "revision": "b24a5fa7f3565bb72db1324fc17a8e0b"
  },
  {
    "url": "assets/js/3.613d10c3.js",
    "revision": "7dbd09d72785357e7aa8f679a4e00220"
  },
  {
    "url": "assets/js/30.645bbcbc.js",
    "revision": "d1364b1e1d06454908f9a4c964c921e2"
  },
  {
    "url": "assets/js/31.0286bd6f.js",
    "revision": "f2c9eac44cc3c835bae2cdc923ae9f5b"
  },
  {
    "url": "assets/js/32.42e7f2e1.js",
    "revision": "e4327b7af3acd35dc325f97f7ccd1fb6"
  },
  {
    "url": "assets/js/33.ee0cee24.js",
    "revision": "7f4a6ba0ffaef1e0be14e5a4fd0404b0"
  },
  {
    "url": "assets/js/34.c5f69809.js",
    "revision": "e83435a6e8ec4297d7197a8e1048738f"
  },
  {
    "url": "assets/js/35.d97c97e3.js",
    "revision": "135aadd93c523d4dc7a05f8e7cf340c3"
  },
  {
    "url": "assets/js/36.70e9a0a6.js",
    "revision": "49fa3a17785c4abb951b1ca49d29e7b5"
  },
  {
    "url": "assets/js/37.b7809af2.js",
    "revision": "fcf5fc0946ce9c3260a588cf48d5138f"
  },
  {
    "url": "assets/js/38.67a6c753.js",
    "revision": "78a97a2d3fd617fecf0ce13dba84289c"
  },
  {
    "url": "assets/js/39.2e1f48d1.js",
    "revision": "650888206a7d37243db6574c098132a9"
  },
  {
    "url": "assets/js/4.2468c312.js",
    "revision": "ffed854904acd5329a20eb3edaee8349"
  },
  {
    "url": "assets/js/5.1ef6d996.js",
    "revision": "51d158f975ade619e1b7e3ae810ca12c"
  },
  {
    "url": "assets/js/6.61e62206.js",
    "revision": "bfc409bb3c44a156750bf44aa1628f16"
  },
  {
    "url": "assets/js/7.df870bb8.js",
    "revision": "4e7c010b32862c63a46a6564d0573820"
  },
  {
    "url": "assets/js/8.aa4d7331.js",
    "revision": "740fbb79a1ac1923b3b73c9bb3448a6a"
  },
  {
    "url": "assets/js/9.a76b0826.js",
    "revision": "6cd461eb77c9b1ecc76f5faea32ea6e7"
  },
  {
    "url": "assets/js/app.a08b3699.js",
    "revision": "4bacbd09365fb7895d6ac1d87ba653e4"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "e6c010aa642056d5fc2df38e921bcbe5"
  },
  {
    "url": "element/element2/index.html",
    "revision": "6b093cdd6dd71e81dbbfb6a6f2788420"
  },
  {
    "url": "element/index.html",
    "revision": "cf525aacd2ba70a0222acdd2403fb761"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "55ced2d5e12632d5c00b511e1f011e99"
  },
  {
    "url": "java/index.html",
    "revision": "72389026a832c2257ce1745b10483627"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "f1aa71ae0efb30ee86b766ca7fac10a1"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "f3b4d6c83a265f0760687ff74e8fe9ee"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "ecfdbdf4bee3ceca2fec1d2645a104c6"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "ddfbcf6985dbb96956f6a1e92e1a0152"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "6091853bf67a5e3b0f4a0992b1c1a7d5"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "b47bcc0a44902e87ed1b43ef988dd585"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "f0c75ec346c5f1dd71cec81b11818bfa"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "33211f2e4623985ed83f9afcbaed9b3e"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "9892c810f6716cbd7872416fbed99fd4"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "92f35e8485503adecc40106c07ceed15"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "2f58da23b3500700a7de625e4c6119e7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "b0e88bd2e9cb5712e8e06c3d3ece8907"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "e6370b2f7e37bd5c6956ae94c2e25b11"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "30b6a22e851989cbaa5424f9ced56315"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "adecdbcfa4efaae03f619aa129ce9dd7"
  },
  {
    "url": "java/java2/index.html",
    "revision": "eefe9cb48fa8d782b47491967e1ed7aa"
  },
  {
    "url": "mysql/index.html",
    "revision": "c64ddffcf2b91f017982b0114a39802a"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "930018f1a7c7249e0b61c11ad5165b33"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "d8e2df4b5ea5ecde1ab27211ab970073"
  },
  {
    "url": "other/index.html",
    "revision": "16f050fdda6465d0d3e2497ab0f33b5b"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "b0e8610a8e8faa824f21c0b33a45cb15"
  },
  {
    "url": "vue/index.html",
    "revision": "48c3405c7acc56aee84adbbd30089a3c"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "ca3964afe8290213c3290126c0888ab2"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "dfabcb6049776bb4e197e4af58c31ba1"
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
