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
    "revision": "5a980fd5080ac16b0974f5ac8b8cda5e"
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
    "url": "assets/js/22.c3d84deb.js",
    "revision": "8d4d2adf616de64f5d5eafafc18509cf"
  },
  {
    "url": "assets/js/23.46f177c1.js",
    "revision": "861c90796b5cabc5813f45a66fbb9f9f"
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
    "url": "assets/js/31.0c404637.js",
    "revision": "5cc21975833bac7dd2a66c901fdf5919"
  },
  {
    "url": "assets/js/32.772c7283.js",
    "revision": "327074d5d92372154800cb2073c62362"
  },
  {
    "url": "assets/js/33.59f1d630.js",
    "revision": "aac86d4d915b8c5c63e7ab751c11174d"
  },
  {
    "url": "assets/js/34.e102f3e5.js",
    "revision": "1a064e2e2a073cc2315ecf3e8b02af10"
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
    "url": "assets/js/app.f225d323.js",
    "revision": "3a793eb76a3fe683ef1a0fd237b549bb"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "ac948e7c9c9ca7cf8df22460f6fa2f80"
  },
  {
    "url": "element/element2/index.html",
    "revision": "fa5ccf06bcfb894a3326fc6a0604cc90"
  },
  {
    "url": "element/index.html",
    "revision": "254c02d9522132cd736593fbf3896b5d"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "27cddb12179c74cdc3619b41264f6113"
  },
  {
    "url": "java/index.html",
    "revision": "e17522896c63fef43fe138bb5eaa1b62"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "b95128b6e5e630b6842a9fa262814398"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "a66c08f36bc9c414b07f9222af811494"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "f5a3dedc4c93f76339bdb43593c8f47f"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "66658346abe08a9f5a8dd9bcabfd3d8d"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "951bb99e584d434d056cefbd3d71d913"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "e2df5c744fc01364b1e3038c3d32b6b2"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "76cb76ce1342aaae85a6a7e582664539"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "677bb2f9f51ad9f331f8b7e8ea15e684"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "8f4f2cfcf8e671cd76e5c3966197cafb"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "4fdf5d6c861bf38a647525034dbf7902"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "040ec990db2d1fd0096bb505f50986a1"
  },
  {
    "url": "java/java2/index.html",
    "revision": "6fd19508cdd25ab97d938a31e78552c1"
  },
  {
    "url": "mysql/index.html",
    "revision": "e7c62a771bec6e9d5b36525201eb4d05"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "332517501d5651a83361a3f5ecc288d4"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "c17fd30c276cbaec520515e82dbb96c0"
  },
  {
    "url": "other/index.html",
    "revision": "5d08411069ae57febaf00fbe829108d8"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "b657dda2ccaaaf47b1ef9615bb7afc7f"
  },
  {
    "url": "vue/index.html",
    "revision": "270fdef07409174a6357389322a3024e"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "ea8fa97da5ba6767ad7f1d3bcb37ff9b"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "13d040a903da38bc53a690d562e901af"
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
