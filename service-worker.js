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
    "revision": "876603b60edde0ef90e519a0c82c4d25"
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
    "url": "assets/js/23.6c940ca9.js",
    "revision": "7d39b04845096ff6c7164edc9869fd87"
  },
  {
    "url": "assets/js/24.eeb02ee9.js",
    "revision": "e0a28f349e1fec17f1ca62314cde3b01"
  },
  {
    "url": "assets/js/25.2c9012b6.js",
    "revision": "10467b98a148eb9c7d9bca6d758ddaed"
  },
  {
    "url": "assets/js/26.7ab15fd5.js",
    "revision": "68634d0033dea89a1c2cb664cb97ca5f"
  },
  {
    "url": "assets/js/27.44fa171c.js",
    "revision": "fc85eebd05acb9d147235d56ed010b62"
  },
  {
    "url": "assets/js/28.739b0f7d.js",
    "revision": "9d1ee75c7d389f733517d904207ba995"
  },
  {
    "url": "assets/js/29.38a5f779.js",
    "revision": "1f1a707c6add5251646a72ffda909172"
  },
  {
    "url": "assets/js/3.845e4700.js",
    "revision": "ba41c09d35a338a072657ba01ed1d3c8"
  },
  {
    "url": "assets/js/30.67937dc0.js",
    "revision": "85ac2cc899186bf1a37477afade76c5e"
  },
  {
    "url": "assets/js/31.7be25f40.js",
    "revision": "08da590fc6fc35ca3ccd1de2dfeb4d8c"
  },
  {
    "url": "assets/js/32.772c7283.js",
    "revision": "327074d5d92372154800cb2073c62362"
  },
  {
    "url": "assets/js/33.4a22562b.js",
    "revision": "613c2803e55d774d4c31bbedda906d62"
  },
  {
    "url": "assets/js/34.1a529719.js",
    "revision": "0867f898dfcda8ba4be4269b1d03da61"
  },
  {
    "url": "assets/js/35.0a9d5870.js",
    "revision": "8b21ab28755c9ea1762849dfdf432e3b"
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
    "url": "assets/js/6.007d358e.js",
    "revision": "efa6185ae23e109b89b62bb88ea280af"
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
    "url": "assets/js/app.71b182b9.js",
    "revision": "1f24f79ff6264096c01de83735ef6e95"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "7a36a9b7da5a4071f45885a2249ba685"
  },
  {
    "url": "element/element2/index.html",
    "revision": "46b22f99a444b57fa4d30856d8794cc4"
  },
  {
    "url": "element/index.html",
    "revision": "5c195be63339c54c3bda7cd307cfbdd1"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "e46781b8a3f642e3ae719e63b7608b1e"
  },
  {
    "url": "java/index.html",
    "revision": "f8a82abf99d91f0d62a49eb330eadb68"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "3d5675dc02c89cff89a9c8673ffc615b"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "aa00826b829247e140e795dc66f1dcad"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "4c434fed653c2bc4499e58775b39ccc9"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "b2affd804b7c5ee56101fd2783e77ad1"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "e74713b13f0b0c83b00d1174f036ad9f"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "9be8cf0bf482073b1d7982c0a739f8c6"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "a989a7c5815cedab83f04c9adc4299ec"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "a58a091225762222ce054ecf721c5cb4"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "a17e5e58f9ca58c8fe7a17c005e6433d"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "06c0299fbf4fac5b0efece867ffe0584"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "087121c8fbe224719ee754aff6d43bb2"
  },
  {
    "url": "java/java2/index.html",
    "revision": "8e786db72dc5753af3a1dcf81abd4ca1"
  },
  {
    "url": "mysql/index.html",
    "revision": "08bf58d47130d84390f26288e0efad47"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "e8177a18f5b8f3a900c1ea45a6e61485"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "ce026867f7ea6e45808c3b82b315da9d"
  },
  {
    "url": "other/index.html",
    "revision": "8153cea6f9a286393cb33bb2609ba785"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "81e1d6001c5f08a602d07a7f471845b4"
  },
  {
    "url": "vue/index.html",
    "revision": "7ea397777c30e061fe17db816e5f5941"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "acb7542e687fa119f4586ae4a63dd157"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "7730b64893259ce4e9dff1eabee41cc9"
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
