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
    "revision": "b652001da0d0c8e2e218eeceafa8c168"
  },
  {
    "url": "assets/css/0.styles.2272f8e8.css",
    "revision": "34c5f19399be367472df3120ffc08e6c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b2ae4c01.js",
    "revision": "58bcde32def22efb75f7097fca98596c"
  },
  {
    "url": "assets/js/11.ff9cece0.js",
    "revision": "66472213c6f5986f938cf0adc0ab9f16"
  },
  {
    "url": "assets/js/12.5bca53c2.js",
    "revision": "457bd3262eccf09efc2028685731b593"
  },
  {
    "url": "assets/js/13.8c96d692.js",
    "revision": "2c1609918ff0511e0e00057d3faabaf3"
  },
  {
    "url": "assets/js/14.e8a64a7a.js",
    "revision": "4cf41c4825e534e2199f4aca07288352"
  },
  {
    "url": "assets/js/15.1f459008.js",
    "revision": "0929c60343014000117a18b0d09842fd"
  },
  {
    "url": "assets/js/16.af536128.js",
    "revision": "05867aac328de33776be2498e0a014b2"
  },
  {
    "url": "assets/js/17.f472062a.js",
    "revision": "3c7ec25c042fb2cb3f0eb42e4ff971cd"
  },
  {
    "url": "assets/js/18.a9b53c17.js",
    "revision": "9348d7be5181b133f8d650b7224dcdec"
  },
  {
    "url": "assets/js/2.ade5517f.js",
    "revision": "5b601ca25b8e9645d60ae275244e5f40"
  },
  {
    "url": "assets/js/3.a904d518.js",
    "revision": "9f7b71139b27ad5da899354293ae8e05"
  },
  {
    "url": "assets/js/4.324eca46.js",
    "revision": "aac2cdf0f8204854c620ccc5828a9354"
  },
  {
    "url": "assets/js/5.77b82cf2.js",
    "revision": "199c9aec018ae0bdbb375dc2d98b2b28"
  },
  {
    "url": "assets/js/6.fd9200e9.js",
    "revision": "4a87737f765167913dd3e90793eb78d4"
  },
  {
    "url": "assets/js/7.b27ec7bb.js",
    "revision": "93820a4f7302f34ece1679d6f96dbf0d"
  },
  {
    "url": "assets/js/8.996169f3.js",
    "revision": "00ad68e962849266c93b3c4dc5a0ac6b"
  },
  {
    "url": "assets/js/9.9c9caa87.js",
    "revision": "9faf61fe1d33a027e2448e4ce8357388"
  },
  {
    "url": "assets/js/app.64997c48.js",
    "revision": "52c3472fe949c5c0fb6850f78fca9514"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "46fd2c2497e5cf5d2b205c7e2895b4a1"
  },
  {
    "url": "element/element2/index.html",
    "revision": "3952a4928591a74ff6d12cb64e49a168"
  },
  {
    "url": "element/index.html",
    "revision": "97c393293f89d15b5414c0b2d4746fec"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "8c35819fa339e1360186a75fcd9db168"
  },
  {
    "url": "java/index.html",
    "revision": "2103e20f5312519094fbde522dae7520"
  },
  {
    "url": "java/java1/index.html",
    "revision": "17960976bd3796e4d5e68ea586b10de2"
  },
  {
    "url": "java/java2/index.html",
    "revision": "8706f957bb79882beabb950e0a96267b"
  },
  {
    "url": "vue/index.html",
    "revision": "2619655b9649e5737e5b29533815cfb8"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "0edd63c63795a9c1ae974daf8bc47246"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "089d9f03eb898bd64963c342b50d69df"
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
