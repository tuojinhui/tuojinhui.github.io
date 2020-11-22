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
    "revision": "87a0f3e4bd724a1cb5a46714b63afa6e"
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
    "url": "assets/js/13.26316aa2.js",
    "revision": "41f9e44f328c0215f17f4734380f4d71"
  },
  {
    "url": "assets/js/14.4ce53401.js",
    "revision": "72017e24e02fb8e5957f0a8e21b392e9"
  },
  {
    "url": "assets/js/15.d82a91d5.js",
    "revision": "6753fd165759140be22786db566f7e18"
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
    "url": "assets/js/3.72deba6d.js",
    "revision": "df6d35cd7cdb25cd31553cf1265674c9"
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
    "url": "assets/js/app.d53c95d6.js",
    "revision": "c04774c9a0b74ea5aaa76f3a63f6b99b"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "e9f66f9d590aaa328c774061f9b097db"
  },
  {
    "url": "element/element2/index.html",
    "revision": "6313dec2446ae04ae52e2af8fd738771"
  },
  {
    "url": "element/index.html",
    "revision": "985af8cafad2d09b370cb4ef964f7e3f"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "2275c30465ea2d85dc14c7772d2017f7"
  },
  {
    "url": "java/index.html",
    "revision": "44e68f4c2939c9f894b9222f712a8bc5"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "5e152f78cd943e1c383abee2587232e7"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "ae03f4e2edb470d1acfda2a907fe1204"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "14da0733f1637f450ce5b2eac97b14e9"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "497b5230b2344ff0f69921679cbf2fdc"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "fc5ff402ca7f7333b60fb0b17dba7724"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "b6605a3d44b96b07b7919362201767df"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "847dd1e318a9d1f5e5e3b70455712b56"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "78d5a2893afd2ccdc9fc9b4e7c9382d6"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "99bf30afc9bf674b7c93e82e10a92c9c"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "3f5fa9632b902a6e351cac998bde3c6b"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "4712175454853e05b3be3e6f009b1bf0"
  },
  {
    "url": "java/java2/index.html",
    "revision": "06504440d022059c289dcb60cb08d760"
  },
  {
    "url": "mysql/index.html",
    "revision": "9c0c3d102fa83c73591edb3388d3f216"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "660ba2ee8511379a28487fbedb74a0d1"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "0fa6d8473c2354d8f504c225b18bc7f9"
  },
  {
    "url": "other/index.html",
    "revision": "308763d448d9bfdefec3c945a3b43af6"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "1ea1ac048587a44fde07435c504e40b4"
  },
  {
    "url": "vue/index.html",
    "revision": "fd9c9e07e48b8e1cdf2a9fbdad7898a4"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "e60c47a1e1f7890a32ace258fb26f92c"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "b0af14e6b3bbd064488fe277984646e0"
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
