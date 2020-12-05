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
    "revision": "c1f7c470702291d1fb53201491c8470d"
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
    "url": "assets/js/23.6c940ca9.js",
    "revision": "7d39b04845096ff6c7164edc9869fd87"
  },
  {
    "url": "assets/js/24.eeb02ee9.js",
    "revision": "e0a28f349e1fec17f1ca62314cde3b01"
  },
  {
    "url": "assets/js/25.2c9012b6.js",
    "revision": "10467b98a148eb9c7d9bca6d758ddaed"
  },
  {
    "url": "assets/js/26.7ab15fd5.js",
    "revision": "68634d0033dea89a1c2cb664cb97ca5f"
  },
  {
    "url": "assets/js/27.44fa171c.js",
    "revision": "fc85eebd05acb9d147235d56ed010b62"
  },
  {
    "url": "assets/js/28.739b0f7d.js",
    "revision": "9d1ee75c7d389f733517d904207ba995"
  },
  {
    "url": "assets/js/29.38a5f779.js",
    "revision": "1f1a707c6add5251646a72ffda909172"
  },
  {
    "url": "assets/js/3.845e4700.js",
    "revision": "ba41c09d35a338a072657ba01ed1d3c8"
  },
  {
    "url": "assets/js/30.67937dc0.js",
    "revision": "85ac2cc899186bf1a37477afade76c5e"
  },
  {
    "url": "assets/js/31.e62f9431.js",
    "revision": "da0878db7715b1dd5f0caaa06a6dbcfa"
  },
  {
    "url": "assets/js/32.772c7283.js",
    "revision": "327074d5d92372154800cb2073c62362"
  },
  {
    "url": "assets/js/33.169c8a2b.js",
    "revision": "d0521deb4d772aacc02a4397a0295921"
  },
  {
    "url": "assets/js/34.1a529719.js",
    "revision": "0867f898dfcda8ba4be4269b1d03da61"
  },
  {
    "url": "assets/js/35.0a9d5870.js",
    "revision": "8b21ab28755c9ea1762849dfdf432e3b"
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
    "url": "assets/js/6.007d358e.js",
    "revision": "efa6185ae23e109b89b62bb88ea280af"
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
    "url": "assets/js/app.22454757.js",
    "revision": "a2246ad9d9f1b20bf4e11202df2293f7"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "98ce19ac979c3351cc942b6492537d79"
  },
  {
    "url": "element/element2/index.html",
    "revision": "7a1c2c80d641e8c624bf881ac7055ede"
  },
  {
    "url": "element/index.html",
    "revision": "94f8e28d902edaaa05008c77b594b523"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "c544f0a342398f5ab18dad8a83d4284c"
  },
  {
    "url": "java/index.html",
    "revision": "25bb0aa91d1aaa060315a978c5dc537d"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "f886f3f2a0051d33696b7395b0f06249"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "93d76c8c9f0ec7f0e2fb273dd125576e"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "215d19eba3ae79e36dfadae6d66f9c99"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "a311dfa8989bb993cd3a13942f14bca2"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "10dabb8ff9202a98d1430ff285edf15a"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "55d3184c616bd5cb51f8040e2427ebfd"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "df6557c7376946ba84cc05423fc4b76d"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "9a6c080204c17bd3868d07a4c23a1288"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "f584fdfa85e6b2ffc037365450aa6beb"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "3521bbcf2904c2e859dbe1e7aa8bb959"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "acb8504c894a4b3d8cb69492e0d1b0c9"
  },
  {
    "url": "java/java2/index.html",
    "revision": "a39fcd94b45c03490b35b555b0f9ba2c"
  },
  {
    "url": "mysql/index.html",
    "revision": "89fd7ac04ad8b970ee94b6c1d8c2bb21"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "e1bd65a7760363e7bd38c6f56b853b1e"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "2df60e3fd1acc9edb415edff1e45ed60"
  },
  {
    "url": "other/index.html",
    "revision": "21f7619402c1e03f4696a11b830b3da3"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "2c389efcc302b9f7bb9039862489ac18"
  },
  {
    "url": "vue/index.html",
    "revision": "31e94a48451a9b27d86ee777f7ebb92f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "c16443b657737396d9f706de78123a2c"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "749c812216171131527615f98b3e7381"
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
