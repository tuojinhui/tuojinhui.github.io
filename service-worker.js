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
    "revision": "991128cc530b1095c9af632967093fd0"
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
    "url": "assets/js/app.480c90e9.js",
    "revision": "c8c1bd0fee3dc10c261c0de1f7a4e3a9"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "895308bba9c008c670cc3eb3aabdaccb"
  },
  {
    "url": "element/element2/index.html",
    "revision": "5dbade87531183416918d32899561f80"
  },
  {
    "url": "element/index.html",
    "revision": "479a2b49ce2a586f11e3ad4526ad672a"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "641f23d44b100b0ec3849a30998ba214"
  },
  {
    "url": "java/index.html",
    "revision": "4e063a43823152a560f62ac17c77f969"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "039c72414b1dfae428c1f2bc4bcc3706"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "467ad9ec1a77c89046203b76ebafc71c"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "5126573fb94851def3a7bf2b631f13ac"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "721e5f808b2c045d00d360e447492273"
  },
  {
    "url": "java/java2/index.html",
    "revision": "e4bd18d12de03b2d41abe962bed62592"
  },
  {
    "url": "mysql/index.html",
    "revision": "33bfe56005c2a764d4074218bfe985aa"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "d8f7e733b16b9c705a9a9fde5cd43c85"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "d4045346ed9faa38ec11d5ea19e5319b"
  },
  {
    "url": "vue/index.html",
    "revision": "8d8b0dcdec3d7a8925bf07e632eaa492"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "2933abd9ab154739145628f06502425b"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "21e1bf86c3bdf246c060d882c8df74fd"
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
