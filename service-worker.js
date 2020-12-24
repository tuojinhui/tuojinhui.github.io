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
    "revision": "245841265fb005d7d6dfa4e1d9d51d45"
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
    "url": "assets/js/10.9d0d970f.js",
    "revision": "52e4f69c8403b8e60a05d701a29513a4"
  },
  {
    "url": "assets/js/11.f854ac87.js",
    "revision": "8665a80bb5119e1ca9611682058011f7"
  },
  {
    "url": "assets/js/12.31113e91.js",
    "revision": "f4cd8d7f50cea99dcfc335f505f484f8"
  },
  {
    "url": "assets/js/13.60a59c4c.js",
    "revision": "3200a54cd84540564ca4ce2f20f9bb41"
  },
  {
    "url": "assets/js/14.56f00c64.js",
    "revision": "637583793cdfcbd4eb7a07f5ac769ced"
  },
  {
    "url": "assets/js/15.e8288b08.js",
    "revision": "93255b8d9c34c6e193a38fd6c3bbecbd"
  },
  {
    "url": "assets/js/16.3dea4ae6.js",
    "revision": "9c6e874f214814c3f2e3ff994b126fa1"
  },
  {
    "url": "assets/js/17.adf4f283.js",
    "revision": "aa699e1dcf7e8a850dc882525292d8d3"
  },
  {
    "url": "assets/js/18.03f46bea.js",
    "revision": "e2655f34fd4fca002e289adc350b5ce4"
  },
  {
    "url": "assets/js/19.8d5126ba.js",
    "revision": "60f46dc3d387fb37f8ceadc85d7c92db"
  },
  {
    "url": "assets/js/2.9af4986e.js",
    "revision": "67ed56c480a2072debf7fe9bb5941b20"
  },
  {
    "url": "assets/js/20.de7275c3.js",
    "revision": "5b25064459da084acf7308156af6f3c9"
  },
  {
    "url": "assets/js/21.1f526455.js",
    "revision": "77200949edc56df68a080c3211406646"
  },
  {
    "url": "assets/js/22.82953b27.js",
    "revision": "c9d8c57f73b11c240df5d7e77685903b"
  },
  {
    "url": "assets/js/23.6bd031b5.js",
    "revision": "9e76b988df99512461f1a8ca770593ce"
  },
  {
    "url": "assets/js/24.bb5aef83.js",
    "revision": "3369ef1829c0272205770106b6ace1a9"
  },
  {
    "url": "assets/js/25.ceb94dc0.js",
    "revision": "26cf187c870ee19239ee24d9b652653b"
  },
  {
    "url": "assets/js/26.495f5b6a.js",
    "revision": "bcaea9cf1bfec7f63a91f91999519a44"
  },
  {
    "url": "assets/js/27.20e340e5.js",
    "revision": "bc423b7de45cecfb2d2b4733a8cba3c4"
  },
  {
    "url": "assets/js/28.9ca51e06.js",
    "revision": "e7fd263e3ad10b4b77399fa073fbc7b2"
  },
  {
    "url": "assets/js/29.07a05b95.js",
    "revision": "752ff27c908fa61c3b7ac981aac48aee"
  },
  {
    "url": "assets/js/3.845e4700.js",
    "revision": "ba41c09d35a338a072657ba01ed1d3c8"
  },
  {
    "url": "assets/js/30.0f46d386.js",
    "revision": "d0d35cb886b066647acbabd0d05f9dbc"
  },
  {
    "url": "assets/js/31.8dbe3040.js",
    "revision": "ec6431434462c8879e1358ef95943ba6"
  },
  {
    "url": "assets/js/32.7bfe290b.js",
    "revision": "f6b735938678372f644e1cacd0864bc4"
  },
  {
    "url": "assets/js/33.c8bfd7b2.js",
    "revision": "ad6e00879796caa51d965a24705ed14f"
  },
  {
    "url": "assets/js/34.3005d7bc.js",
    "revision": "323f4e00e7773b374718883ab960c611"
  },
  {
    "url": "assets/js/35.88739406.js",
    "revision": "2b25e24580b09a4ebf6192bf4452a19a"
  },
  {
    "url": "assets/js/36.f7b3011a.js",
    "revision": "8efb3a6e351c0ab9360277e07dfba4f7"
  },
  {
    "url": "assets/js/4.a57b285d.js",
    "revision": "52653d16fafe1abd59642f08652475e9"
  },
  {
    "url": "assets/js/5.af2001f3.js",
    "revision": "1d19d031beefd77eb12c218c87c89bce"
  },
  {
    "url": "assets/js/6.76e41bbe.js",
    "revision": "9c19ba0d448436cf7505e902f43605db"
  },
  {
    "url": "assets/js/7.0ac97f17.js",
    "revision": "0f9cea348e6b9cd1d9f5cb3496b4877a"
  },
  {
    "url": "assets/js/8.e013b273.js",
    "revision": "ec7b5a8df41a7fcfd3cf3efbf99aade1"
  },
  {
    "url": "assets/js/9.a7384414.js",
    "revision": "7db416b6f6b2e1ba6396325809f592e9"
  },
  {
    "url": "assets/js/app.85d6567c.js",
    "revision": "8ecbe0bed35b3503d02d027df66658cc"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "170781479b6db2caf381e40703da4d73"
  },
  {
    "url": "element/element2/index.html",
    "revision": "c5a3208d86199b849f812d1b72a9fb5e"
  },
  {
    "url": "element/index.html",
    "revision": "ef25e66a3445ad6972c06986e80e0564"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "2e6dded3031fb8cbb45edfa46066c44a"
  },
  {
    "url": "java/index.html",
    "revision": "1a70e711b1c251358e7b160fb1180c68"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "2dc24f3594d40503a95a76d0cdf66c4f"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "c4fa5c652da32d2380ba15e9a3b145f1"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "13cdf662fb55354fa0baba7fb8e27f19"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "1b9608d01930b4b1022e2e9b3eb52249"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "0255cad9e1f97a62bbc1da5085d19366"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "78e16b2a32a0dc859316a58335ffe14a"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "0936d2e1b7ce1603457ea03fefccc09d"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "d9f24a71122ec3cbc19ae91e322bdedd"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "db55f5f5dc68d93735432150951db9ec"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "0d28bfeb90e1431f69f2cd36fa8e6ea3"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "0c2bc28b6fdfafb48ded24f81fd2b2a8"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "54b52f10084c8ede173275ae3b052433"
  },
  {
    "url": "java/java2/index.html",
    "revision": "7fc8c7f7d47cc2478137be483d8c276d"
  },
  {
    "url": "mysql/index.html",
    "revision": "f1fbd01abfea0fb9093c12488fcefedb"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "50a8f0821711b75165066be2cff5f9bd"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "01ad27facb20fdc9770e2e37a6482f42"
  },
  {
    "url": "other/index.html",
    "revision": "5143378b19aa1ea4ec917529e1cc5387"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "4ce6bfa115524464dbdc8f9324dec813"
  },
  {
    "url": "vue/index.html",
    "revision": "6f066c5130368f15fd876eea10339c5c"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "58a00703d66b04b0d26ed887ac16efe9"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "fd24c1da025c923f78d46ed5eda726d1"
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
