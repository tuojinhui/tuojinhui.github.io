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
    "revision": "73b905b9a691c68dc31350bf9e5dee39"
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
    "url": "assets/js/3.80dd012f.js",
    "revision": "06fb14387b6cc112eca9fa0c471cf3ae"
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
    "url": "assets/js/app.5b3841e8.js",
    "revision": "77e20b265f8b3fcde76ce4b06b74026e"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "db40fadcd4738f231c4a6bbd6390d623"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ba89be64d9a4972aff48704f2e9fa5a0"
  },
  {
    "url": "element/index.html",
    "revision": "deba044dae37248831f646a07fd6a2f5"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "2ff4fa8c6410591b4e900b482f99c03d"
  },
  {
    "url": "java/index.html",
    "revision": "7eda468e71df369a2a8b49861abfae54"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "e0ea905d825a7cf64dc7d365a58c8c5b"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "00c3057f89e8e9b7c8866599849a48c5"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "87e03f76433bfd7764d15e42bc4abfb5"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "22c64fd18affc9eb77814120d6f7fcd0"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "f3eda2baf742020b378b260fd9d46719"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "68d1a2010695ef0578813b7e570f56b7"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "fc1354da557c9e0bfff02678b1e36af9"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "7df4d1331df427fd3f0006b1f91b8085"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "a37fdc1c16de23283c064f6ffaa2c60d"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "e3b112dd773e2f3b275547c799e18b6e"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "2483ad48d661537c11715ec0f509c50b"
  },
  {
    "url": "java/java2/index.html",
    "revision": "4b65c99fec24c65b595084a3a6f80746"
  },
  {
    "url": "mysql/index.html",
    "revision": "c200dbf00cf29f1d6f68bce8a8c53bce"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "a41450f7e1fb58cd50946b17dc71bfcb"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "670e2481eeceb54b7b50565eb2a94653"
  },
  {
    "url": "other/index.html",
    "revision": "a6f841b350b8881d1eabdc39a67fd4cb"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "6db40e6c2d9afdb2333e33c9c18ea84f"
  },
  {
    "url": "vue/index.html",
    "revision": "d26ba58c88e927f14fb9acec7da045cf"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "7d878de1a7e6dd2a523dea4be93af5d9"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "e7453462b6b20d9cecc30f2825543c67"
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
