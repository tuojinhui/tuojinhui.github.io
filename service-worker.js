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
    "revision": "80808272a1642bdbd1f945494fc97e9f"
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
    "url": "assets/js/14.49dfeb26.js",
    "revision": "f95f02185f0ac400d8b46670b2f13d39"
  },
  {
    "url": "assets/js/15.e988cc5b.js",
    "revision": "ccaa1b3d0987c4a2961aa87bc37415c6"
  },
  {
    "url": "assets/js/16.ed973ea8.js",
    "revision": "70ff8e80b4860d4dd4f7344055089001"
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
    "url": "assets/js/19.1d60d43f.js",
    "revision": "886615eca68b1368f2020f55ad5af1ac"
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
    "url": "assets/js/app.ec2b3529.js",
    "revision": "e4f8621933b1154a200ffb28868afba0"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "dfd9f304909372ff2c064cbab3a21be9"
  },
  {
    "url": "element/element2/index.html",
    "revision": "f6b79d02b5fef45d78586ffe755934bc"
  },
  {
    "url": "element/index.html",
    "revision": "73b12166ddf8c35dc4042c329d81e731"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "8ca6ff51107eee15a9b87912f6b1fc68"
  },
  {
    "url": "java/index.html",
    "revision": "095d01dead16d2b6c20d43bd64ee948c"
  },
  {
    "url": "java/java1/index.html",
    "revision": "9f9a4290a3de8854494e750984003d0e"
  },
  {
    "url": "java/java2/index.html",
    "revision": "5807fdbe6c6adfb689200cbc4eb4b591"
  },
  {
    "url": "mysql/index.html",
    "revision": "811ea933fc865463b5c728a823c0cfd6"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "cfa0048459f4b1f72255dbf2b787aef4"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "4d34b6f4ec1430146e0fee6afb637f4e"
  },
  {
    "url": "vue/index.html",
    "revision": "2d33268dae9db16c275000284d9b8969"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "1256a05821ab229d6ea0ccac6ce5236a"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "68b3ab64cd196b03304a5a32fcf4265c"
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
