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
    "revision": "dad31c13f71ca65cc148b5e7a67e21c9"
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
    "url": "assets/js/10.80d3f854.js",
    "revision": "f0ac21d334545c91c1b9217ba2b8d6a3"
  },
  {
    "url": "assets/js/11.7d5c93db.js",
    "revision": "0e0a3f52827fc260aef4a054300b8f09"
  },
  {
    "url": "assets/js/12.8d089c9e.js",
    "revision": "8add3738bc482f46140787896d2d93b7"
  },
  {
    "url": "assets/js/13.175a7632.js",
    "revision": "c9a1fc65fd7c188e1f04fef479110337"
  },
  {
    "url": "assets/js/14.450e3bb7.js",
    "revision": "6b089fadb8758d22990f6e5e6a17b55e"
  },
  {
    "url": "assets/js/15.6b155a24.js",
    "revision": "bff86f6b051d1c95e66b6d061284e169"
  },
  {
    "url": "assets/js/16.9759a165.js",
    "revision": "ce6f0431af42bff6d7125de8e9089668"
  },
  {
    "url": "assets/js/17.5c07fda3.js",
    "revision": "a84a049509dc6734be5eaadc49f0e125"
  },
  {
    "url": "assets/js/18.0744d47c.js",
    "revision": "31a047587158bd6a6b8e78a9758916af"
  },
  {
    "url": "assets/js/19.d0bd7820.js",
    "revision": "fe452036bbc416e9b8ac994d03a4d9be"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.12b62da3.js",
    "revision": "a90191abafe9ff150bab887bb0f6a581"
  },
  {
    "url": "assets/js/21.8382aece.js",
    "revision": "b5a5ab593bbf5e455aa00509f0d6b631"
  },
  {
    "url": "assets/js/22.0178ab4e.js",
    "revision": "9c23118e1706c73a457e7ccfab780853"
  },
  {
    "url": "assets/js/23.ecbc4f2a.js",
    "revision": "825e2d7b64291dc1c3aed9a38f09f608"
  },
  {
    "url": "assets/js/24.fb52340c.js",
    "revision": "0eb258f0bb405b82680ba75433bc529e"
  },
  {
    "url": "assets/js/25.e6eae865.js",
    "revision": "2d8ee11cc4b9a815c8f3a2dbfe4c9d7b"
  },
  {
    "url": "assets/js/26.ecf98f8d.js",
    "revision": "001d2424b0b82ef4b1ef8e9ecab02e40"
  },
  {
    "url": "assets/js/27.5b84a35e.js",
    "revision": "05cf4f80541791b784479c17cf435a47"
  },
  {
    "url": "assets/js/3.7a781a4f.js",
    "revision": "acdc69c1c4fcc81c019fb04c2ec7fbb7"
  },
  {
    "url": "assets/js/4.4152d5ff.js",
    "revision": "e3df1a766be9bf33b3a40d99b38c07b3"
  },
  {
    "url": "assets/js/5.5eb3de10.js",
    "revision": "a3463df2d7328f7c893e42a214309c2b"
  },
  {
    "url": "assets/js/6.174d13b5.js",
    "revision": "e269599725710b59f02cf1c1597ad0f0"
  },
  {
    "url": "assets/js/7.4ff95929.js",
    "revision": "7a0d896587ff2f78c36a4a36a02ecfa2"
  },
  {
    "url": "assets/js/8.25791c08.js",
    "revision": "f0d9f601d39263a7880e06bb76f8d917"
  },
  {
    "url": "assets/js/9.116148d7.js",
    "revision": "fe7ea1d4b2c887ed18751d1438ca6c5d"
  },
  {
    "url": "assets/js/app.f91456df.js",
    "revision": "ba258d82c0b0c6faaf8a92f5c08c4f02"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "f3f537ff1746ba8c198a88c17590440d"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ee7657a7d3041fa2793d1265e8ba60a3"
  },
  {
    "url": "element/index.html",
    "revision": "2e2e362a8fbf3b02cdbe2ef1db5e36ed"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "62f079e2c86481e2181e6004bf804c7c"
  },
  {
    "url": "java/index.html",
    "revision": "8de94683baf5d0133791d0ef9db1589e"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "311ba3721c1a432b963a35a98258b65a"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "be58e0f8cce2acd10c2fce8639d32c00"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "de04715404b3ef345be2a58a98fd19b3"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "777ea25f8cbf4ca09abe71af33883922"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "58dd734c14214dda7f09384d2849adb7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "718d8f5a20bf643309cebd4ac82b5671"
  },
  {
    "url": "java/java2/index.html",
    "revision": "9ecb81e62923f9376f9146061fd56205"
  },
  {
    "url": "mysql/index.html",
    "revision": "79d58e229f5c842bf218cb2f5d6a5203"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "e670bb925a7842e06ed3e88b40a02417"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "3bee8d838349e0ac5250f05bc463d38e"
  },
  {
    "url": "vue/index.html",
    "revision": "f5da6f1911a288b3091eb0c887701680"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "d1693651f2e0daadcbe3624698afe65c"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "b3003c43d87fbff679aae2d8aaa671ac"
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
