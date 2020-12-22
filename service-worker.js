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
    "revision": "7ebcbd62a7cba7ac4d9bc1c539b7e48c"
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
    "url": "assets/js/31.aec7db5d.js",
    "revision": "70f162336df25c2e50b2229b81077ee4"
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
    "url": "assets/js/app.8ee1e48e.js",
    "revision": "119bd64e9c8f0534a0c600270cead3a4"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "0f5c1cfb452f258c0157b6cfc1e849a3"
  },
  {
    "url": "element/element2/index.html",
    "revision": "6b6da4598f46553fa3c966e1a34fceee"
  },
  {
    "url": "element/index.html",
    "revision": "8339bed0ce32146b5cd2307d8ef11fb2"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "7785d206cfdf43b897104cf0c8d66ac3"
  },
  {
    "url": "java/index.html",
    "revision": "0af05e6ba25891312952c3e09e0b106f"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "83d91a461408c4ad4c49c049c3ed7e7d"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "4cc4a12d779655e38c854aed209d1b84"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "1b6d52c6a0f4462d1e23444d6f5e04d2"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "0a48dce9ede70a38690ab3da17c96abc"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "867a17560b3049abf113df6fca976e1a"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "d15395f429684a699df98deca4fc397d"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "b4f7bddc20f402bef35fb1fecafef02b"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "5e3a1503b8e05f87c4de71742855f022"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "5b8876bd90d8a0a81395aac53002acf0"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "aaad821e6f48ff77e63c495a1617535e"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "afbbc741f60b191efbde649c914e2313"
  },
  {
    "url": "java/java2/index.html",
    "revision": "3cea9428350dd0da3ae0cd9f4830c3a8"
  },
  {
    "url": "mysql/index.html",
    "revision": "19eb79642eacfcd7abafaa08bc2ad27d"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "e9b0ab980fa5ec896ce73a5ea7cc07a9"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "2575208d6aee54ece1966d4ea727065c"
  },
  {
    "url": "other/index.html",
    "revision": "903bbcdf2149bc56c86bda9002cee1b2"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "661bfeb53515ef58a5cce0cb908fcd80"
  },
  {
    "url": "vue/index.html",
    "revision": "a0cb67c45c4248ad2710ade70ca91003"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "2cdba3fdb58f15996128f7ca0e50cdff"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "091a085334f9287893ea111e95ffa07f"
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
