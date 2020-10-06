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
    "revision": "dcbdafd1899a848887829224a595e881"
  },
  {
    "url": "assets/css/0.styles.6fd9f23b.css",
    "revision": "e3ae77970418d16b64e0c395398528bf"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4d86103f.js",
    "revision": "a7fb147fce441a23aa0a75051fe09330"
  },
  {
    "url": "assets/js/2.a68b495b.js",
    "revision": "d5ebe0233692491b937537b4ed26de10"
  },
  {
    "url": "assets/js/3.e0c39fa9.js",
    "revision": "e38425a7d53ff34bb210f964a0e55b87"
  },
  {
    "url": "assets/js/4.11ff91a8.js",
    "revision": "f4fd2dba19877ed8a0633c1b356c1674"
  },
  {
    "url": "assets/js/5.806b3d92.js",
    "revision": "48f40c13a8b73a683cebe9b47573f882"
  },
  {
    "url": "assets/js/6.0dd52fb4.js",
    "revision": "5dad6f93c8307672a1cbb2e8304b0555"
  },
  {
    "url": "assets/js/7.3d59de7d.js",
    "revision": "481b382930158246c40306d4f871e41c"
  },
  {
    "url": "assets/js/8.9ee4ea19.js",
    "revision": "cf96f866a3e01facea877386d2822a7c"
  },
  {
    "url": "assets/js/9.e0e62601.js",
    "revision": "f533240bba860839d82881659b41921c"
  },
  {
    "url": "assets/js/app.c3db233a.js",
    "revision": "c3c64d2087cd244b1b6dada6330a57da"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "80f275f5684755f4976bafbfd626ff29"
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
