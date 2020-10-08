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
    "revision": "86ec2ffa2cbee2e6554a5d42dc1c85c4"
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
    "url": "assets/js/app.abb9b19c.js",
    "revision": "1e233214091f417145f9757ad29769b9"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "4d6fc68648ea9e398675eb74d8817abc"
  },
  {
    "url": "element/element2/index.html",
    "revision": "e463860c515acd6ad665f7cfb8a61c27"
  },
  {
    "url": "element/index.html",
    "revision": "f94a31b4525ab2617b6c5624a1f3ac84"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "13a7f58aa0529d85a4e1a71dd1d8db81"
  },
  {
    "url": "java/index.html",
    "revision": "7f5a209c2473d34350c3c4d5b283a677"
  },
  {
    "url": "java/java1/index.html",
    "revision": "ac01c3a1ca65b5082ccaec60242fc44c"
  },
  {
    "url": "java/java2/index.html",
    "revision": "d86cb189548ab90609c69f6dfda16325"
  },
  {
    "url": "vue/index.html",
    "revision": "a75c285dcdf57413464673608c907b34"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "565941e9e01027213a3647b0f315dc66"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "2dc5bc6a238ba04aaad214cdb8d252b1"
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
