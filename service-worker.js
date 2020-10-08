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
    "revision": "b99a8b3d55b84dd357448164e7bf57ce"
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
    "url": "assets/js/app.6b6bda9e.js",
    "revision": "5d76f287e65dcb29496b5974142999e5"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "92da31134f00e30df1670f23a88517df"
  },
  {
    "url": "element/element2/index.html",
    "revision": "ba36bb2f9cb1417a89b4b3df78486593"
  },
  {
    "url": "element/index.html",
    "revision": "a1e9a888a7df45b0486f456fdaa48df6"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "ee84cbb355b87d1f93dca13a4ee46fda"
  },
  {
    "url": "java/index.html",
    "revision": "990161c847e5efa6b2d35006b73ecba0"
  },
  {
    "url": "java/java1/index.html",
    "revision": "e8fd59ac7d3a3a00e2b5ab5b2f2dc5b4"
  },
  {
    "url": "java/java2/index.html",
    "revision": "57decf84a518d614891de8ab0e300793"
  },
  {
    "url": "vue/index.html",
    "revision": "460663bc1a824cca0c1cca02afe34cef"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "4366783b2b2513a2125b8e16c17afc13"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "be193e0a042b82ce1b3f8cd4fec64596"
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
