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
    "revision": "a1a9b422796bfb0a5fea24dbe8d87671"
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
    "url": "assets/js/11.f3557921.js",
    "revision": "eef769c036d2c084acb4191cbe17bdb7"
  },
  {
    "url": "assets/js/12.1f105204.js",
    "revision": "c4b410454084847665aac8fb7516aff6"
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
    "url": "assets/js/16.47106669.js",
    "revision": "87a907ee979d39a961c8b01ae0efcc87"
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
    "url": "assets/js/app.164ea725.js",
    "revision": "2870d25a240e5f9791b6bc04d32f23a0"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "4c98e4e48db2e56e38514a90f4ee3393"
  },
  {
    "url": "element/element2/index.html",
    "revision": "56ef5c7b5132db63b0e9b6238531d34f"
  },
  {
    "url": "element/index.html",
    "revision": "b3f5dbc75a97d4640e03314039407c9d"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "0c3542e763748137573a8fa9947ffb17"
  },
  {
    "url": "java/index.html",
    "revision": "7c394327333fb1d76e025581319860ce"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "d9c095cc13660504f86ea725156ec103"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "5f899632ca109ba32c1be68445b62b88"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "19d40a1fed487bbb755883543624bb91"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "22d9b60b589fcabc6f88f032e9f733fa"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "647de079b8a777fa0aa21f8469bec54c"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "4e2cc356dcaf8dae158baf14e488f5ae"
  },
  {
    "url": "java/java2/index.html",
    "revision": "8089934a8bf4085a9253be6a66cb9539"
  },
  {
    "url": "mysql/index.html",
    "revision": "331453c5c6015a68679e910946a6abc2"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "481a266307362edecb6a886fd5f68232"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "ca9e636b4d08e9f95bf3526e7919a974"
  },
  {
    "url": "vue/index.html",
    "revision": "fde970ac0eb2387aa8ff52b1468738e7"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "5f9940becd54115156fdc19c3d05c6cf"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "2d3e89cdd3f7713a9902e0961c1aafe4"
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
