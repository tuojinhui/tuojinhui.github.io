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
    "revision": "ddd57a41191d7703ef1eed6b3cb84f8a"
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
    "url": "assets/js/31.3c892970.js",
    "revision": "b1d0e8d191398f2a3c7a9be5b7c7df6d"
  },
  {
    "url": "assets/js/32.692a45bf.js",
    "revision": "b80030860b0864a5e2f430c0ba2440f8"
  },
  {
    "url": "assets/js/33.9bc86eac.js",
    "revision": "ca46a2bdb9ffaedeaabbb3e2d90530ec"
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
    "url": "assets/js/app.139b745a.js",
    "revision": "e44b03889268997b4b8824e1233be647"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "833e0466903088325175bad3d38c3636"
  },
  {
    "url": "element/element2/index.html",
    "revision": "29e09306ea4e3b492e38e1dd99b092dc"
  },
  {
    "url": "element/index.html",
    "revision": "733c9d4d94a338e65fd96f74245806b6"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "8fb9d5c9186643c655b1ce962f277309"
  },
  {
    "url": "java/index.html",
    "revision": "30a2c558382b18b5ac769c88bfea70fd"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "0c6d6fd2dc9ac7d180afa3659ac859bc"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "0ce9f8d7cb622052bdcc5c23aae08dc3"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "c09bd93381f7c0e776e7e7ad1345ad28"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "95db9cc5abae3df977832f862ac50deb"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "84ecc248f6e881cd17e27c4a74e00e15"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "da26d0d3126fde2701f9e65b2dd16a94"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "3c7a265e236fd074d736956437ffd0f3"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "2fac429fbcbee43d0d7f42ad7496fca1"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "d0b11fb7d8b56657ccfaa4bb26466e1c"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "fb470d6715537ec7aa6028fbb714ea65"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "b27984c3f63fa4f12991578d6dbb4c88"
  },
  {
    "url": "java/java2/index.html",
    "revision": "bc6d4b9a37a8f6979531c8c8f462210e"
  },
  {
    "url": "mysql/index.html",
    "revision": "484b21260412f279eea8a77e9a90d610"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "a7557282d95ec3e66281c0afc6f31e75"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "b766cee31c22268348f0b10490926788"
  },
  {
    "url": "other/index.html",
    "revision": "e15a6cfe33788c7af08d8e5f3ca9e958"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "7c7ac33f415987d5f43c5e33356b0e56"
  },
  {
    "url": "vue/index.html",
    "revision": "600d2440d02705a8989aab095c207c3f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "34bcf92ba43146a40c12f2b0250a7bfb"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "23003e9048921198e8f1234abcc70e64"
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
