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
    "revision": "1f711d6add33e5232329a94c7cf0650a"
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
    "url": "assets/js/14.b9216273.js",
    "revision": "40ddb46ea82b4d5995d5c937ccbec93e"
  },
  {
    "url": "assets/js/15.e988cc5b.js",
    "revision": "ccaa1b3d0987c4a2961aa87bc37415c6"
  },
  {
    "url": "assets/js/16.b8d0fba0.js",
    "revision": "c5c7b1de3ca21ec95db2e30c2a078fde"
  },
  {
    "url": "assets/js/17.e040739f.js",
    "revision": "5bfa813ac5cec5bef2c016b2ee81641c"
  },
  {
    "url": "assets/js/18.0dfaab79.js",
    "revision": "e4b3376fcb72aa4678cedcce27affec7"
  },
  {
    "url": "assets/js/19.42eb2c12.js",
    "revision": "17cd94af554df2de4729d7d9d2586571"
  },
  {
    "url": "assets/js/2.bb0186c9.js",
    "revision": "cf323e06f21cacfa0a08ac9ba680573f"
  },
  {
    "url": "assets/js/3.231e9399.js",
    "revision": "81b23d4eacf9c2c2a6217db91880fb93"
  },
  {
    "url": "assets/js/4.87f492cf.js",
    "revision": "fe0a1511701d226a5e96cd3eec6d41b9"
  },
  {
    "url": "assets/js/5.69314bd9.js",
    "revision": "86f6bb4df52a4d0a2fb008f624d63242"
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
    "url": "assets/js/9.3e89ad5d.js",
    "revision": "ecbd37eb4b60e9f9d08501569b3d3e72"
  },
  {
    "url": "assets/js/app.5711e777.js",
    "revision": "0af5736c2497fa9a40e7d744c364c8f5"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "21706d13b6e993ee0601f321f56652cd"
  },
  {
    "url": "element/element2/index.html",
    "revision": "5798d8dc6c9c5591fb1618d87442c8af"
  },
  {
    "url": "element/index.html",
    "revision": "25ada586cd9d9f5dc58a0d659d7853b9"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "192c4f90d4bf8543d16fb8a7ee3bc055"
  },
  {
    "url": "java/index.html",
    "revision": "6775c5de20439f9124b1658e5464512c"
  },
  {
    "url": "java/java1/index.html",
    "revision": "b2651b6cddd39dad2d44bbccc622ff6c"
  },
  {
    "url": "java/java2/index.html",
    "revision": "5fab5fb574cddc2045c1d4998df10f20"
  },
  {
    "url": "vue/index.html",
    "revision": "5e66daa9667667447c22f33d51e2310f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "3bc724244538bff5768499715047da3e"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "4395331f4cd679426cdef8424d8a0352"
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
