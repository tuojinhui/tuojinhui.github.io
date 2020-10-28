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
    "revision": "8f99a6f25a618fbe95b55bab00483433"
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
    "url": "assets/js/17.1e9c85d3.js",
    "revision": "88def1196728dce594e97e21adfd6019"
  },
  {
    "url": "assets/js/18.2d7f5cff.js",
    "revision": "cb1d48c226c8a980310d140e249ef415"
  },
  {
    "url": "assets/js/19.b8237ceb.js",
    "revision": "ff05f6eab399fc5c309eba4c0f60d9ce"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.cbb985bd.js",
    "revision": "07a71812837df6ac7822796e26b6dc2f"
  },
  {
    "url": "assets/js/21.5b377428.js",
    "revision": "41957135420e7f9263b6248e9556d02e"
  },
  {
    "url": "assets/js/22.8e9271f7.js",
    "revision": "36330d1116d016db0de2ca534ae324ef"
  },
  {
    "url": "assets/js/23.8e4bf116.js",
    "revision": "7a1a4457a33f7ddc305bb6fb5afe80a2"
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
    "url": "assets/js/5.6db6a853.js",
    "revision": "d0d5c8266acec5af546c08a790de7415"
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
    "url": "assets/js/app.f6a22d11.js",
    "revision": "f9990f870008f6f118a931562069e805"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "31e5f19da468c8e94f50988fece86252"
  },
  {
    "url": "element/element2/index.html",
    "revision": "228ceb5c142606b38b76883f41946ae3"
  },
  {
    "url": "element/index.html",
    "revision": "9b3e40c614993a8d0a61bb6ca895d7f4"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "c8ab8700448d313f9271f762504efe37"
  },
  {
    "url": "java/index.html",
    "revision": "400988b59bb9b24a1c0777f9acf4320e"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "137df59f41acbd5f5a29916672fdcb80"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "37e169b46073f9b5c8b11375dcc1335b"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "c404e2da07c07d79774a9af2e843795c"
  },
  {
    "url": "mysql/index.html",
    "revision": "b316ac059dd0982984ecd92e0e330c05"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "b088e63e44f276e8ea7c106f9877d732"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "413d94d9c84065ef5055d277cd59c35e"
  },
  {
    "url": "vue/index.html",
    "revision": "70244896f1c073aad060875d486b1f1f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "8639b5564070cff0f0223cc029bdd1df"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "89d9834af5b18b2b8ec3e4f035b66596"
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
