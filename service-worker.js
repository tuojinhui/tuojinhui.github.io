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
    "revision": "5767bda248e70b1840df2026ec0edbdd"
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
    "url": "assets/js/16.371d6a12.js",
    "revision": "01a4d81b5b5a0d1ea24cd76c74d097ef"
  },
  {
    "url": "assets/js/17.3dc0dd51.js",
    "revision": "987a39cf7b9d5c285112610d69fa5e8a"
  },
  {
    "url": "assets/js/18.9a10af1b.js",
    "revision": "ec85db0663e4a95c005ca2ceb992656d"
  },
  {
    "url": "assets/js/19.572e3efb.js",
    "revision": "525f71a1b69ce4a7b766ea4a2b5a407a"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.62011179.js",
    "revision": "ac2c41affdd87df6ce7c5031ad81c53a"
  },
  {
    "url": "assets/js/21.085ce3c2.js",
    "revision": "acdd6571486cf77af4bd96fc3e8c3f0a"
  },
  {
    "url": "assets/js/22.35c77841.js",
    "revision": "d692b2ae4862e2bd0d5a243d12c5f137"
  },
  {
    "url": "assets/js/23.c9d99ba6.js",
    "revision": "53027d62bb96afa6a2d74ddc8f572402"
  },
  {
    "url": "assets/js/24.689dd912.js",
    "revision": "6e23ebeac4049bc578a21644a7721e4d"
  },
  {
    "url": "assets/js/25.62096d1b.js",
    "revision": "5188e5aa2d7f2992c5df17f17331a906"
  },
  {
    "url": "assets/js/26.e41958d4.js",
    "revision": "88a158472a3d0ff74a2a9cc86dc7bda3"
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
    "url": "assets/js/5.9dbd7858.js",
    "revision": "38e9fce41fd36719f9b85f4c1a65012d"
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
    "url": "assets/js/app.97a80ff0.js",
    "revision": "d5b9ea7c3e93cde421171352acf202bd"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "60dc17032d30635a6c6dd1b956c08fa0"
  },
  {
    "url": "element/element2/index.html",
    "revision": "da689ee6c7000fcc57e92aa7f2338e50"
  },
  {
    "url": "element/index.html",
    "revision": "e594344ef7e98b301be719fa45ab21cd"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "de8a1c28bbd27c2c34f46d458227d484"
  },
  {
    "url": "java/index.html",
    "revision": "3226f987b405e47cd6171cda9dae1edc"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "dd10c15eed11c4bd3c8aa448dd6f9133"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "719e6c16a1a1faa2055826c860290a96"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "90cfd4d25052d7f2934973c54672e4ce"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "7a96f70a6e4ef473e0429c294920ee8c"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "284fa3cbb01540f350d661e2586b1023"
  },
  {
    "url": "java/java2/index.html",
    "revision": "fc73b756a3f6f0c88a58ff8a406c81db"
  },
  {
    "url": "mysql/index.html",
    "revision": "312e96c83f9226a277b7de9fc04614a1"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "0233b02a4beb9cc895055175b4fb5041"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "fa3319385b373464b07a3300e7a4ed43"
  },
  {
    "url": "vue/index.html",
    "revision": "a926bd298a8e0b52a66d9aa364912a60"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "3b86bb7e2eaaad87790eacc58a589506"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "f628a958b2d49ecf3d303f205d4f0e00"
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
