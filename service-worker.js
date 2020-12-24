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
    "revision": "bf4e087f8d2fffb52da029e17337c299"
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
    "url": "assets/js/32.5da30e4c.js",
    "revision": "22ad97dd7f7dd067ac7036d96b74e192"
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
    "url": "assets/js/app.5cbcff74.js",
    "revision": "b89aadcb9053233987a2b13afa662bd4"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "8d005420ed7ad084a69adec9fd5237c7"
  },
  {
    "url": "element/element2/index.html",
    "revision": "660b3716934bd6ec10cf13aa3d0e7fc3"
  },
  {
    "url": "element/index.html",
    "revision": "41413289279bbc5826be42d63ec67b5a"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "97e9e6f042c01a259180581dc105d98b"
  },
  {
    "url": "java/index.html",
    "revision": "1e1511f20b583acc918ce1a3953bae04"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "318bc77c5a57aa0f5e84a119842f106e"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "318bd476941321135c54f7b8abe45401"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "53243612b03cc6b9fa8cbf0b3de1d3cc"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "14798d2060ba308b383ae9942d9a720c"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "bcb35bd2cb89a74e224b7eb16f94ef8f"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "acd83adef4cdbef0f9b5decab10fde1d"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "1297785eac9a4cb0f7605a0cf000a431"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "60ac40a676dc98512799a0e4042f425a"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "07ca274454670acaa3db4e3081c9ff39"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "094fdef455e1cfc69d974b9f37d172da"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "722025ceefc5d24f9870634ed24bba3b"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "2ff81bbd62a8afacc7d84b2481a42b91"
  },
  {
    "url": "java/java2/index.html",
    "revision": "ef19bad19dd01f092cc789dd81e65eed"
  },
  {
    "url": "mysql/index.html",
    "revision": "6e32a9396e9f49509d705d1613c4be6f"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "7c8eaaf206dfb5ebf57c4d0c09f7538b"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "8fb1be7a0ca6fd312caa5b64773491e7"
  },
  {
    "url": "other/index.html",
    "revision": "2cb5572a0900dd9e9509af9e25684972"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "c001aab55745ceea231225ec11ee1482"
  },
  {
    "url": "vue/index.html",
    "revision": "4db7e5c9528b5ec601a6c4b36371d8e8"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "f3eb2bf80c81ae6602624c1f6f1126cf"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "dea18fa0952c86997aa589012995a171"
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
