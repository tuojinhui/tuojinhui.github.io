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
    "revision": "e6089124498114733c596dbff4e14fdb"
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
    "url": "assets/js/17.be644c70.js",
    "revision": "1e0264d6ea327aab3d744c281895fc7a"
  },
  {
    "url": "assets/js/18.90504fb7.js",
    "revision": "e082f35371dc64f7766d3d9aaa8127dc"
  },
  {
    "url": "assets/js/19.4347eb7d.js",
    "revision": "5f7ee1f8993fb2cdf587f022052ff9b6"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.85807592.js",
    "revision": "c49961513d8cc60b3265c587f33b901e"
  },
  {
    "url": "assets/js/21.28cc3810.js",
    "revision": "fa262e18fbe32afbe67600ceb216ab93"
  },
  {
    "url": "assets/js/22.f09bb180.js",
    "revision": "05c15d5170eac8832d3c4440181c1f9b"
  },
  {
    "url": "assets/js/23.bbb5f9c0.js",
    "revision": "8fb16178fa423505657d410f147636b0"
  },
  {
    "url": "assets/js/24.8a8a810b.js",
    "revision": "92387a937b95fc72cee53c6fa6b7c706"
  },
  {
    "url": "assets/js/25.f891c61f.js",
    "revision": "ddc57c5be3ab7dc8308c26f949a3753c"
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
    "url": "assets/js/5.d01bb0ef.js",
    "revision": "b4bdad053a74b76ce0b8c340dcdcd173"
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
    "url": "assets/js/app.5bd6be59.js",
    "revision": "0bb6be9a22619a75ae27816110876a98"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "80ad95331be6fc6de2ebafdb04ed0d51"
  },
  {
    "url": "element/element2/index.html",
    "revision": "aea67b0fe77c6f8ba5d9af585ab89de4"
  },
  {
    "url": "element/index.html",
    "revision": "f79ab04d800aa9e5ffe283e72119ef45"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "e724512287dc4aa5c082915c308441c6"
  },
  {
    "url": "java/index.html",
    "revision": "24b210a2fcc792d20ae1a9e81354dec6"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "ba61ea70693ce8458ec70a867b083513"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "1f38306802af5cdf2cc3350fd08386b8"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "861b912db281db581434f6620680bd5b"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "b315aee05897e8ab44d2251e7f8431ce"
  },
  {
    "url": "java/java2/index.html",
    "revision": "c65dcfc0f593d1e1c6c0c3d34f216e7f"
  },
  {
    "url": "mysql/index.html",
    "revision": "7d2ea83bac1e239550e269dc98e93374"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "e1ca7c4ca91d93df302e7dc8e34f50af"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "dcbf1f6ce021ab791c3b9fcb5f6e4052"
  },
  {
    "url": "vue/index.html",
    "revision": "d8ead5b5160168d868583d196d209a15"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "e0153643677735d25697f1c2df9d24af"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "315b7e215320794e01600febbfe4d966"
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
