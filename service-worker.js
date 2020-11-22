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
    "revision": "4c611e10d5f3ccf88c28d94b440bfdc6"
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
    "url": "assets/js/app.e033261c.js",
    "revision": "25ae6f64f6ff3ddd00443852e218058a"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "2f156569d0a201428ca6b36890e5f1dd"
  },
  {
    "url": "element/element2/index.html",
    "revision": "1f65530179da60c1bd3e54b0f1b8081c"
  },
  {
    "url": "element/index.html",
    "revision": "5cd369201d8cfd17aaaba71af23fbd52"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "f7c3001abb1446287bd99eba8999a67b"
  },
  {
    "url": "java/index.html",
    "revision": "cb61815832003e2148e8ce1f7ae9cc82"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "25fe21979591083d84dd67c04eb3a3d8"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "f65b08c6bc3fd1a706682f79e3d432d5"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "838287a1b7cde339b09a14386fda55f2"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "8bf83aead069ceab7c4e7274ce6201ee"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "e99389017a20f3b0348ea85c5890a0e7"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "b5339b8f4d17cc09c04ba381fc30a0c9"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "18e6402424e820d013b29ed3befccfa0"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "059a76df4496e524a952b8f7d2b56692"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "bb7e51bb4f9ac56846a19ebbf6fc2037"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "53d67ab2fc2ab3b40d1e2f9f52d788f4"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "b46bacd457b4d966d310a5dcd09e2cca"
  },
  {
    "url": "java/java2/index.html",
    "revision": "f963e58409801581a5689ccfad185846"
  },
  {
    "url": "mysql/index.html",
    "revision": "b6311759d9c21d95b2dec0df41c789d8"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "8a3d1b4b109a1f1d2d0d19ed1cf51d30"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "1fea8e29d0438370270b386ac65bc127"
  },
  {
    "url": "other/index.html",
    "revision": "a6aff9dd6985ee49a8d5a7e8898d5776"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "040e6b7b15af91aa19ece3b1d614beb2"
  },
  {
    "url": "vue/index.html",
    "revision": "419d4576b46ec935fbfb196df60196fb"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "e0883ebd5802271fd9142eaf14469304"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "c8e87af63e749b5fa0eb1983000590d3"
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
