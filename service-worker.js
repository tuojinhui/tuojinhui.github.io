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
    "revision": "b20040578e5c646d3c46d5456bbe385a"
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
    "url": "assets/js/10.4719140b.js",
    "revision": "172d805b9315c48f7b1da4d71cad6a2c"
  },
  {
    "url": "assets/js/11.fa57c4c2.js",
    "revision": "b1e4a80a96f72de14ba0bb5b351f43d7"
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
    "url": "assets/js/14.b9216273.js",
    "revision": "40ddb46ea82b4d5995d5c937ccbec93e"
  },
  {
    "url": "assets/js/15.e988cc5b.js",
    "revision": "ccaa1b3d0987c4a2961aa87bc37415c6"
  },
  {
    "url": "assets/js/16.8f962486.js",
    "revision": "7759a79b195c1c70ae23130fd9dd1f0a"
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
    "url": "assets/js/9.e7959bff.js",
    "revision": "e97d1b5ecd4b84082a04efe0c9fcdea2"
  },
  {
    "url": "assets/js/app.b16025ea.js",
    "revision": "c06c71b76b8eb76386717ae0fdf6b949"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "be73c4000bd0fa3dbc8b2a27b0dd1fdc"
  },
  {
    "url": "element/element2/index.html",
    "revision": "8be4fee29b496dd9a2f23e77aed5cc96"
  },
  {
    "url": "element/index.html",
    "revision": "63729d9bdd6cc04801bf99f3341102b4"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "2c2808a1031a9b81c073890a200c42b3"
  },
  {
    "url": "java/index.html",
    "revision": "f4bb2c5f2a9a5706aa2e1c61b53e793c"
  },
  {
    "url": "java/java1/index.html",
    "revision": "115c36e10e8cd9d07ee4973c65c16a58"
  },
  {
    "url": "java/java2/index.html",
    "revision": "61212cf95a18858c6ddd7c4f2b438ad4"
  },
  {
    "url": "vue/index.html",
    "revision": "48cefd76907d136e9317fb914d0f4278"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "901edaf573561a5ff2f968f8962bfab1"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "46c8bb721550d2e10cc9068bc10619b0"
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
