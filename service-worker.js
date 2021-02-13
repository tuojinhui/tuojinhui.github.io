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
    "revision": "b3e7f31c323915e3fa00b91bc00a5453"
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
    "url": "assets/js/22.de8a6dfe.js",
    "revision": "60d3fc218cac9a4e51730af9bbca5549"
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
    "url": "assets/js/29.8d395cad.js",
    "revision": "7d641fec6b528154ab6ee701892a067b"
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
    "url": "assets/js/37.fdff8a21.js",
    "revision": "6eb574bb232a2fcc08e176ecd5a46393"
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
    "url": "assets/js/app.901078df.js",
    "revision": "d6504a3345eadf4cda75c866b5857cb4"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "e2a26537469b07dd02caa4bd89b9ec54"
  },
  {
    "url": "element/element2/index.html",
    "revision": "4b50e275c33e04e9fbc18f088dbc3e18"
  },
  {
    "url": "element/index.html",
    "revision": "ea04473f8c22f0de990ad1b8d6395415"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "9f08b3cd9ff64032919114699d98d684"
  },
  {
    "url": "java/index.html",
    "revision": "68167b863687da82922431e986f43db6"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "f6046847d39da449a93eaea5a5a0103e"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "8b2f96522cdd5222b9be9f7548e47393"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "31601d3735829397ed6f1a72596db1b6"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "03f127a1d461922f10fcdea3ca0b5bdc"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "8d6ff9d92eb7c161bcacd41bb402c9d0"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "dea4bfb0d5ad8ddc50109010b99739a5"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "e0f86d48bca78bc9e7803109bfad8db7"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "9bd614fbd3a719c54a1eed3c641a774a"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "cb9194aa9e5f31bae0f4934a7c4e76b2"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "057f9703bad9b7debe78f1150ea88699"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "92e4a2f71c76142736c2d822c201b597"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "3b9a805b3b5044644fd3bb323244858e"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "dc39d8fd30e9cdb86d819a6297c255fe"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "f663e7606fd4c6b6c8ef33301bede376"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "8dbd2bcc2acf13b322e6bb41f01c9ba9"
  },
  {
    "url": "java/java2/index.html",
    "revision": "77dd0b21a4035b9ab8ad0ed31bf8319e"
  },
  {
    "url": "mysql/index.html",
    "revision": "77962a37c8da141d696a482e288c8ce1"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "492b33de11c462b0091ff6556374cdde"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "7cead3b7f7b2d0e09f372caa2fe1a33b"
  },
  {
    "url": "other/index.html",
    "revision": "608567a32af8600922d38dc943439989"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "cface840b46c7e867f16340d04b459f3"
  },
  {
    "url": "vue/index.html",
    "revision": "7b7e71efb83b76d570694503c16dc5d0"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "7e663eba776e32adab3b67cdccad67aa"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "6b0a30efee9070059d4255f3ac4d706b"
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
