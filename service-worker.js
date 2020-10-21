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
    "revision": "1344a20af426b24aef9f23de5ffb8972"
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
    "url": "assets/js/12.b93049b7.js",
    "revision": "c25bd50660f64e9f40e02314b6aab4fc"
  },
  {
    "url": "assets/js/13.033b12ab.js",
    "revision": "fd9a4e0d3699eb016ae93e6c3b61e619"
  },
  {
    "url": "assets/js/14.48ec11c1.js",
    "revision": "83144eecff1513f7e15d337e806bb3c7"
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
    "url": "assets/js/17.6e5a8863.js",
    "revision": "9d475326d71fd679d96759a6d38a2500"
  },
  {
    "url": "assets/js/18.3c9ee597.js",
    "revision": "ef95d7ce79ce4631898f87efe7fe42a1"
  },
  {
    "url": "assets/js/19.08f98233.js",
    "revision": "cebec820fe92a6915c53dd1879ddc1ef"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.752585e2.js",
    "revision": "d10528e584809255f23ae880eb573469"
  },
  {
    "url": "assets/js/21.987bdd36.js",
    "revision": "c59317cfc4e3229878a07b94b9e9c593"
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
    "url": "assets/js/app.e883711d.js",
    "revision": "7fce827c5904524cb706a4038a04d725"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "da24beeed16b0f4cd7bb978de0f697a5"
  },
  {
    "url": "element/element2/index.html",
    "revision": "197c6ca437ea4b41b8fa73ce568779a6"
  },
  {
    "url": "element/index.html",
    "revision": "1442df4b19338938be8195b3bf9391cd"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "5b83d14342540a7b963f943a9a6289b5"
  },
  {
    "url": "java/index.html",
    "revision": "51c42d28bd2a503c2eb6008c0fc74a59"
  },
  {
    "url": "java/java1/index.html",
    "revision": "42b2f070a9e840136b93db1404cdac3c"
  },
  {
    "url": "java/java2/index.html",
    "revision": "3ec083f297aedcb5fc29a314f7be9b27"
  },
  {
    "url": "mysql/index.html",
    "revision": "6846ac669b894551bb1925f88cc79530"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "cdc2b100650253365bd29fd9e4f557c1"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "2bbd7a43e11f0415b7bbbf4956abdf48"
  },
  {
    "url": "vue/index.html",
    "revision": "bc7edd83625246aff47b52ae856606fc"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "6289711a96553c0f275017088bd90de8"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "0ceb1d216d5855711daede368139a556"
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
