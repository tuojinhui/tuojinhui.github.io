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
    "revision": "ab651bd9d82139258e8d03eb9ceedcf6"
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
    "url": "assets/js/11.1efa69ec.js",
    "revision": "6393b59e9046e21fa4b8700efdb96f7c"
  },
  {
    "url": "assets/js/12.8d089c9e.js",
    "revision": "8add3738bc482f46140787896d2d93b7"
  },
  {
    "url": "assets/js/13.033b12ab.js",
    "revision": "fd9a4e0d3699eb016ae93e6c3b61e619"
  },
  {
    "url": "assets/js/14.d02970a2.js",
    "revision": "a28654cdcc9fded611f69b717f1deb8f"
  },
  {
    "url": "assets/js/15.f404e912.js",
    "revision": "d00ff171628e6319d7b79e484627c715"
  },
  {
    "url": "assets/js/16.966ee9cb.js",
    "revision": "b411a722b6ae1e859512fb514bb9761c"
  },
  {
    "url": "assets/js/17.dbf0a872.js",
    "revision": "dc4d7b53495ba0553564094622637ebc"
  },
  {
    "url": "assets/js/18.54060625.js",
    "revision": "f49fdf7cc1bfd432e5f2ef3ce17cd256"
  },
  {
    "url": "assets/js/19.ecf18086.js",
    "revision": "0ea996c10eb4ca32e209cc03477f3a56"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.02354924.js",
    "revision": "dc3722ed5bb9e8bd6d7e5cd5c530f1ae"
  },
  {
    "url": "assets/js/21.f78baaef.js",
    "revision": "ed7724ea383fa759239a0e3df4b3b048"
  },
  {
    "url": "assets/js/22.c15f12cf.js",
    "revision": "f23d982e9b2880979091221f4b10e458"
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
    "url": "assets/js/5.d5f3e356.js",
    "revision": "a4deccf790582e7ccac93bbdd8877c5f"
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
    "url": "assets/js/app.86f44022.js",
    "revision": "533abcf816b79f9c10690be2b44f2ee9"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "e42279bb64c76257ee988a273429838e"
  },
  {
    "url": "element/element2/index.html",
    "revision": "8eae3a548c01004c46ab0b9a5d8bad6d"
  },
  {
    "url": "element/index.html",
    "revision": "85f7417f295a5e3c5e841fe706e25a3f"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "398ae1982f81448d0b05d620568c87f9"
  },
  {
    "url": "java/index.html",
    "revision": "694eac5b666da7ede8896a797975478a"
  },
  {
    "url": "java/java1/index.html",
    "revision": "4302a8ade32bfeb0673f8095ce29007e"
  },
  {
    "url": "java/java2/index.html",
    "revision": "e464e606e88153d6fca26e4d0ed4971c"
  },
  {
    "url": "mysql/index.html",
    "revision": "5eeb068de285afb527c87fd87f7d5273"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "491ed9bc61bf22e4af91416929af3a93"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "c4b73e9a7a733f37c75dc7f0cb58643c"
  },
  {
    "url": "vue/index.html",
    "revision": "4ed479cfd96e6cb5c04335e0470c9fff"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "ed04ef10ab6fb01156c4300d3d7d4e94"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "996fedd924c4512cffba57b172833f72"
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
