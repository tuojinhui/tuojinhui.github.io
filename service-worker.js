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
    "revision": "7f3cf8cc9789751ea61515b343e2328d"
  },
  {
    "url": "assets/css/0.styles.e95cc0cd.css",
    "revision": "7a01d9d422f0d35ce152d3f74b42e1f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d0d970f.js",
    "revision": "52e4f69c8403b8e60a05d701a29513a4"
  },
  {
    "url": "assets/js/11.f854ac87.js",
    "revision": "8665a80bb5119e1ca9611682058011f7"
  },
  {
    "url": "assets/js/12.31113e91.js",
    "revision": "f4cd8d7f50cea99dcfc335f505f484f8"
  },
  {
    "url": "assets/js/13.60a59c4c.js",
    "revision": "3200a54cd84540564ca4ce2f20f9bb41"
  },
  {
    "url": "assets/js/14.56f00c64.js",
    "revision": "637583793cdfcbd4eb7a07f5ac769ced"
  },
  {
    "url": "assets/js/15.e8288b08.js",
    "revision": "93255b8d9c34c6e193a38fd6c3bbecbd"
  },
  {
    "url": "assets/js/16.3dea4ae6.js",
    "revision": "9c6e874f214814c3f2e3ff994b126fa1"
  },
  {
    "url": "assets/js/17.adf4f283.js",
    "revision": "aa699e1dcf7e8a850dc882525292d8d3"
  },
  {
    "url": "assets/js/18.03f46bea.js",
    "revision": "e2655f34fd4fca002e289adc350b5ce4"
  },
  {
    "url": "assets/js/19.8d5126ba.js",
    "revision": "60f46dc3d387fb37f8ceadc85d7c92db"
  },
  {
    "url": "assets/js/2.9af4986e.js",
    "revision": "67ed56c480a2072debf7fe9bb5941b20"
  },
  {
    "url": "assets/js/20.de7275c3.js",
    "revision": "5b25064459da084acf7308156af6f3c9"
  },
  {
    "url": "assets/js/21.1f526455.js",
    "revision": "77200949edc56df68a080c3211406646"
  },
  {
    "url": "assets/js/22.82953b27.js",
    "revision": "c9d8c57f73b11c240df5d7e77685903b"
  },
  {
    "url": "assets/js/23.6bd031b5.js",
    "revision": "9e76b988df99512461f1a8ca770593ce"
  },
  {
    "url": "assets/js/24.bb5aef83.js",
    "revision": "3369ef1829c0272205770106b6ace1a9"
  },
  {
    "url": "assets/js/25.ceb94dc0.js",
    "revision": "26cf187c870ee19239ee24d9b652653b"
  },
  {
    "url": "assets/js/26.495f5b6a.js",
    "revision": "bcaea9cf1bfec7f63a91f91999519a44"
  },
  {
    "url": "assets/js/27.20e340e5.js",
    "revision": "bc423b7de45cecfb2d2b4733a8cba3c4"
  },
  {
    "url": "assets/js/28.9ca51e06.js",
    "revision": "e7fd263e3ad10b4b77399fa073fbc7b2"
  },
  {
    "url": "assets/js/29.07a05b95.js",
    "revision": "752ff27c908fa61c3b7ac981aac48aee"
  },
  {
    "url": "assets/js/3.845e4700.js",
    "revision": "ba41c09d35a338a072657ba01ed1d3c8"
  },
  {
    "url": "assets/js/30.0f46d386.js",
    "revision": "d0d35cb886b066647acbabd0d05f9dbc"
  },
  {
    "url": "assets/js/31.8dbe3040.js",
    "revision": "ec6431434462c8879e1358ef95943ba6"
  },
  {
    "url": "assets/js/32.414f7fb9.js",
    "revision": "e1de115d49190488816c76ad8efd3620"
  },
  {
    "url": "assets/js/33.c8bfd7b2.js",
    "revision": "ad6e00879796caa51d965a24705ed14f"
  },
  {
    "url": "assets/js/34.3005d7bc.js",
    "revision": "323f4e00e7773b374718883ab960c611"
  },
  {
    "url": "assets/js/35.88739406.js",
    "revision": "2b25e24580b09a4ebf6192bf4452a19a"
  },
  {
    "url": "assets/js/36.f7b3011a.js",
    "revision": "8efb3a6e351c0ab9360277e07dfba4f7"
  },
  {
    "url": "assets/js/4.a57b285d.js",
    "revision": "52653d16fafe1abd59642f08652475e9"
  },
  {
    "url": "assets/js/5.af2001f3.js",
    "revision": "1d19d031beefd77eb12c218c87c89bce"
  },
  {
    "url": "assets/js/6.76e41bbe.js",
    "revision": "9c19ba0d448436cf7505e902f43605db"
  },
  {
    "url": "assets/js/7.0ac97f17.js",
    "revision": "0f9cea348e6b9cd1d9f5cb3496b4877a"
  },
  {
    "url": "assets/js/8.e013b273.js",
    "revision": "ec7b5a8df41a7fcfd3cf3efbf99aade1"
  },
  {
    "url": "assets/js/9.a7384414.js",
    "revision": "7db416b6f6b2e1ba6396325809f592e9"
  },
  {
    "url": "assets/js/app.4939138a.js",
    "revision": "37cc337e5ad7868a49254b0dd31b80eb"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "2d239cd8a727d008b6cb5b2e06101781"
  },
  {
    "url": "element/element2/index.html",
    "revision": "3f4dfa923e4570ec8b61a8d0a2c74375"
  },
  {
    "url": "element/index.html",
    "revision": "d4c678257b4f42033cfa231d8a7a9209"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "7a11bfd4458363abae835a899585ee47"
  },
  {
    "url": "java/index.html",
    "revision": "bf31c25b3d14d3de307c120003aeb152"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "3c039f4ec67820dd55ad505365b1c783"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "a2f2b85193a8b6508b293ad4b3b5c171"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "a1a3fa8210f01f749e0701867fdb4885"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "cd97389de832892e1a7ee8ca1369f69d"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "f295cdec0b8f623b145533dbadf7f3bd"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "569583d3a26d1223f7a1817d4b58aa63"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "bcf9b5edd8f2f616229126d580053346"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "e6d5264e81e7f71fa64870e559982a82"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "d0cfa303a49bcae07d3ff6ee81d8d3c1"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "29dac0826cbb3d77f2dca445464a83c5"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "c61465fd3aa2ed0f7cc9704f70e980de"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "519bcbb5d5b2fe0769fac2ea612826b2"
  },
  {
    "url": "java/java2/index.html",
    "revision": "aa55124ed1743276c928da58d1054be3"
  },
  {
    "url": "mysql/index.html",
    "revision": "0cd7a234093832827736ff35c55e2f26"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "d8ece2b088fe016e72fac89012ce1dc3"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "45cf821fb44ab866110297e8844c94ad"
  },
  {
    "url": "other/index.html",
    "revision": "b02c2c56194ffdbb01c1b82bb6ee6f13"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "c5b9558ba0ab1c59a175283bf6521112"
  },
  {
    "url": "vue/index.html",
    "revision": "8b44e32d61d7b441be8754129246a79d"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "37870a3a2891c3ae35e580a4534cf9b0"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "803eb9e561a3cf6617acf96ffca39e54"
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
