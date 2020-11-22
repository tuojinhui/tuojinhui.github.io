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
    "revision": "2a045849081f1333b5d8b713b0722f4c"
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
    "url": "assets/js/10.4af77be3.js",
    "revision": "6eb7d36c1fc893e1459ebad4aaecff57"
  },
  {
    "url": "assets/js/11.f854ac87.js",
    "revision": "8665a80bb5119e1ca9611682058011f7"
  },
  {
    "url": "assets/js/12.4bf06396.js",
    "revision": "529cccb691d19f06dbcfb603ad61ea14"
  },
  {
    "url": "assets/js/13.bcd2f40a.js",
    "revision": "5e39511b384722f56edd01d5c9f008d7"
  },
  {
    "url": "assets/js/14.4ce53401.js",
    "revision": "72017e24e02fb8e5957f0a8e21b392e9"
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
    "url": "assets/js/17.a146c57a.js",
    "revision": "7f3a8fe3894db841e60104827661cd5d"
  },
  {
    "url": "assets/js/18.b5d4b9b5.js",
    "revision": "0fa988804bfd060036f054d02cc6b6fb"
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
    "url": "assets/js/3.0553debd.js",
    "revision": "4118ac70958e114c68af965fa35f7dd2"
  },
  {
    "url": "assets/js/30.67937dc0.js",
    "revision": "85ac2cc899186bf1a37477afade76c5e"
  },
  {
    "url": "assets/js/31.e62f9431.js",
    "revision": "da0878db7715b1dd5f0caaa06a6dbcfa"
  },
  {
    "url": "assets/js/32.5b0fd9c2.js",
    "revision": "89a788c1c31b4ce56245b9f491da7537"
  },
  {
    "url": "assets/js/33.43de1ac2.js",
    "revision": "3024a92ed0d58ab9e7c5311ed14348b7"
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
    "url": "assets/js/app.80d070e1.js",
    "revision": "2bf414b032723f5064133e16549bd7f9"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "415afb200d9ae75aed482fe53438f0ee"
  },
  {
    "url": "element/element2/index.html",
    "revision": "b5c1c6fb5eb730a49cf0c049752ae922"
  },
  {
    "url": "element/index.html",
    "revision": "ace98579b75f9a16ea758691d98e38b4"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "79699cebb18f53cd01224e650bd01146"
  },
  {
    "url": "java/index.html",
    "revision": "8842f665620dbb41b973ddba53a40aca"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "b0c9272e883b3de21dcb842c35aad614"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "3fc26969d070534c87189d3bdd24cbbe"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "1a46ae845152972418e8368fbfebf081"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "227b7fdcfa4df9ca4b00836600b98df5"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "90ba30b14b31386bfe5dbd04122f63f7"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "0bea250f1ca1e60b944bb8451aaf5663"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "39b3edc11c6a5ca67b84bc66a00914f8"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "55502e6851b3cc20969543deb963b7d3"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "1cf7219b88a2691b8110744a4a3234e3"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "92df90efdde35dec71dbc78b46fe67f1"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "6c641aa820cafa2ebc55aa32eaf1db8f"
  },
  {
    "url": "java/java2/index.html",
    "revision": "688c6963544bf8a38719bddef34f64e7"
  },
  {
    "url": "mysql/index.html",
    "revision": "69966b853823c396aad848f747374862"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "ac8059f6c4fe34a977854717b0f9fedb"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "fafca20aeecad3ec8479a78ae33b2785"
  },
  {
    "url": "other/index.html",
    "revision": "f3cc6f3b91255a7db949cd64fa1a42ae"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "bc1fbeaef76b8ddd5c94ed05c6a72d97"
  },
  {
    "url": "vue/index.html",
    "revision": "0fb1e08fde74344d03e8df44924ff083"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "9197802ff32c6df8c3c57a922dfba6dc"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "5efb2fdd7324767fc0c34cb6d69cae79"
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
