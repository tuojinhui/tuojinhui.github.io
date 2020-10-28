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
    "revision": "0366bbd6126ceab48ca3ff6d81948759"
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
    "url": "assets/js/15.ae5218a0.js",
    "revision": "cce0eca73fb1d19e616493763f366a5b"
  },
  {
    "url": "assets/js/16.4481e2ee.js",
    "revision": "c8623c5fdb45a3f5b6e1acc95deb216c"
  },
  {
    "url": "assets/js/17.e1544b58.js",
    "revision": "fb6443403cedd29df420959e4ab927db"
  },
  {
    "url": "assets/js/18.3ddbc037.js",
    "revision": "38bc901fb3c78f5af45cb1e673866fd7"
  },
  {
    "url": "assets/js/19.95cd3d36.js",
    "revision": "49746976852af4bb008d5cd227f86d9f"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.275ea0c6.js",
    "revision": "c24508e99384f61d8a29ac4112ded132"
  },
  {
    "url": "assets/js/21.b915d5db.js",
    "revision": "c4dc7891644977d108296b2c2b9e7265"
  },
  {
    "url": "assets/js/22.57275f56.js",
    "revision": "5afb5a59abda5852d995445a540a8e71"
  },
  {
    "url": "assets/js/23.cdef74c1.js",
    "revision": "783af53bf2b6ce08ab0fdd14fc378ddc"
  },
  {
    "url": "assets/js/24.14bf73d7.js",
    "revision": "1a5e9cf8293afeb9596d7aa51d311aa3"
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
    "url": "assets/js/5.32d2293b.js",
    "revision": "b92be8ab8e03e7acd0e34ca8a11b0f36"
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
    "url": "assets/js/app.4544011c.js",
    "revision": "62e7eb96cafc44cd9db610a90149de48"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "d8ba92dec852982da2d7b5bc0ee40b63"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ef15001cab4788388bf41d20dbe7e8c4"
  },
  {
    "url": "element/index.html",
    "revision": "bfac989bc3896ee06717bea07d88a78f"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "3a82da02f76c5d5985ff3c7e3b2890ae"
  },
  {
    "url": "java/index.html",
    "revision": "02f3aa6a8c81d1f4609661b8eab35cea"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "8a27c0e39997af0c96f9e9df24cd000a"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "b576d8d66091d3c1fa6991a5199895dd"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "ab32f2f765e5c31e587560a87f4e5ea0"
  },
  {
    "url": "java/java2/index.html",
    "revision": "9e8dd44dac0a40dca337dde876e7eef8"
  },
  {
    "url": "mysql/index.html",
    "revision": "78495ac00c63a1be728124cbb5b6daac"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "2f1da051325cd8f149fad76445eb6d2c"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "ff120a336dfe372af52fde43187e2a1d"
  },
  {
    "url": "vue/index.html",
    "revision": "05e9b1d1921fdae942067ea583663bee"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "946896ba355fa0d943cf0ca89ef30483"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "af46f6cbc1761e6106c833d42dc73d57"
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
