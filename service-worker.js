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
    "revision": "a58a2a44d32388ac328a4b2904e616b0"
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
    "url": "assets/js/31.e62f9431.js",
    "revision": "da0878db7715b1dd5f0caaa06a6dbcfa"
  },
  {
    "url": "assets/js/32.60f51875.js",
    "revision": "5207f78261a0e11e1a5561662f4d2bd1"
  },
  {
    "url": "assets/js/33.34f74b6e.js",
    "revision": "e874164b714ba2c9c100adab30d90eac"
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
    "url": "assets/js/app.76ebcb73.js",
    "revision": "0da5fa0d7fffbc1df4abaacde532018f"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "b4fcc1e9066a0d8d1ae36546a7b16ba6"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ac975ca2797a604be5467fff53a4a7c1"
  },
  {
    "url": "element/index.html",
    "revision": "ddc109e6ec07a8574e1ef0bef84602e1"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "f0e88bb8a25379b6fa31cb1e2d376424"
  },
  {
    "url": "java/index.html",
    "revision": "49adeca30c8ae3d02c96de5e83a1bf70"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "b70704cb0a1ee707ba96d923c6b39d03"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "8139f0e7e6b970f2a45b7d5f78b00a15"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "c6f54693a57a684c16beac97c0b5e37c"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "d98223b6066d1ca92cd056f092dac12b"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "9cc3b45486214bc196181b292ec92d45"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "c6646f08055e0b26954f72c58b531727"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "1ac8a3abf291e800a4c7f0031bbc4652"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "ddc2fe7ea060e456a59d2bbf3ed0cf1e"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "c30862bcdebc76fd485dd38c694a1421"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "2520ca6e596a07aef016899e58f1b621"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "591c156a02b88261b63269250ca86ddd"
  },
  {
    "url": "java/java2/index.html",
    "revision": "92a1f23e02b45643416a90edb0fe1876"
  },
  {
    "url": "mysql/index.html",
    "revision": "f5fcc6d1174a7d9337520d73b60db286"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "30995cc1d8d4e5a650f27cc318ad6f16"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "c3d0cd11c50e52fa482f31f26bd647f5"
  },
  {
    "url": "other/index.html",
    "revision": "443e09cd8f6f4995632b7b05df699e08"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "c1bae3a6b0d451be864344caf0a8381e"
  },
  {
    "url": "vue/index.html",
    "revision": "4432ef19c1a2e8b91a6e207297dbcdaf"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "c4be5c7d03026e38f6ee231ea9846304"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "767679ed0c183c89933e4313573cd589"
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
