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
    "revision": "ce02c50e910b101e972c26917b639262"
  },
  {
    "url": "assets/css/0.styles.800fd1f2.css",
    "revision": "0375818e6dffab234b9c05b8fe14853f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a9c13cf9.js",
    "revision": "c7054b68059531cb656d6eef57488dfa"
  },
  {
    "url": "assets/js/11.c0584c31.js",
    "revision": "b9525ecda2878a369a593865db6c2976"
  },
  {
    "url": "assets/js/12.ec400ff4.js",
    "revision": "c051b298cc8043f87551b4510337ffff"
  },
  {
    "url": "assets/js/13.dc87bea1.js",
    "revision": "c982514dfc57268e64149590d75d74f8"
  },
  {
    "url": "assets/js/14.997750e8.js",
    "revision": "a940536ba69dca434373b3fb864cab4e"
  },
  {
    "url": "assets/js/15.62a77079.js",
    "revision": "363b44bb6ec519c04c3c0ac044c98279"
  },
  {
    "url": "assets/js/16.69b86b0f.js",
    "revision": "8f863be37f0ec4b43e965b4e2be5a600"
  },
  {
    "url": "assets/js/17.74fca095.js",
    "revision": "6965c4f23abf8c2c318ec8e09e756119"
  },
  {
    "url": "assets/js/18.f7d3726b.js",
    "revision": "de7fa797537fbf3d01ecb3a5784b47bb"
  },
  {
    "url": "assets/js/19.41afaafb.js",
    "revision": "27bca2dd6a2a4ff7afbe3f086b6c44e2"
  },
  {
    "url": "assets/js/2.c760e413.js",
    "revision": "2ddead91067982e00db1b780b30eea9c"
  },
  {
    "url": "assets/js/3.050042b3.js",
    "revision": "41002d88c5b6c1ec8323819a08331214"
  },
  {
    "url": "assets/js/4.b4ee5aba.js",
    "revision": "435b681de86c5302e17457296d829405"
  },
  {
    "url": "assets/js/5.a8b64565.js",
    "revision": "169a2716ee43686da53a73faa797bfb3"
  },
  {
    "url": "assets/js/6.b13da0c7.js",
    "revision": "3bdf76e8d27e7a1303f1162635e73b99"
  },
  {
    "url": "assets/js/7.5d9413b2.js",
    "revision": "2836c23e031bf8d82d393632d926cfee"
  },
  {
    "url": "assets/js/8.7bb1a2c7.js",
    "revision": "0f2af13ee6f05d569a4589c0dc320651"
  },
  {
    "url": "assets/js/9.b54bbc4b.js",
    "revision": "1a49bd9ed60e75cbea32f7b1c5af2b74"
  },
  {
    "url": "assets/js/app.33c615ab.js",
    "revision": "0e4b0a0aa888243e0e39df6d8dccf2f2"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "81b0bcfbdc493956e315981ede21c75b"
  },
  {
    "url": "element/element2/index.html",
    "revision": "e6aba1b146ff36a51cdee4c708388d34"
  },
  {
    "url": "element/index.html",
    "revision": "cd36659c588689826983b2872daaf638"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "bf0cabbd9f400237aaa5c6bc1e3d0a71"
  },
  {
    "url": "java/index.html",
    "revision": "5dcf3da755c6e3f571d7583e1cc7d4ad"
  },
  {
    "url": "java/java1/index.html",
    "revision": "2db2c74bb0bf2f3d671025330b2a3a41"
  },
  {
    "url": "java/java2/index.html",
    "revision": "110c24fbef43dd1097073541e1decf9e"
  },
  {
    "url": "vue/index.html",
    "revision": "1c741f98c71238716acefb3b9c09c9f1"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "ddc0a85bbd3ea8e371c307deeeddbb7f"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "7faf127aeef57cf0df520966b5d458a7"
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
