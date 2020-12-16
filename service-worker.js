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
    "revision": "bc1c1deafaf72285243f1120ca295988"
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
    "url": "assets/js/12.229b54a4.js",
    "revision": "75f0a2f618d64772528ae52a8291e92c"
  },
  {
    "url": "assets/js/13.bcd2f40a.js",
    "revision": "5e39511b384722f56edd01d5c9f008d7"
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
    "url": "assets/js/31.f3032441.js",
    "revision": "7ea2879847ffdd40f32bfc45c157674f"
  },
  {
    "url": "assets/js/32.692a45bf.js",
    "revision": "b80030860b0864a5e2f430c0ba2440f8"
  },
  {
    "url": "assets/js/33.bebd7cd9.js",
    "revision": "a8e40504e22871a4de1af935d57f2ca2"
  },
  {
    "url": "assets/js/34.e102f3e5.js",
    "revision": "1a064e2e2a073cc2315ecf3e8b02af10"
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
    "url": "assets/js/app.e00ebd8a.js",
    "revision": "32935eca48ac4e29f47ea3d6a6589dd7"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "abacf0b97806ed8054088aef5af35662"
  },
  {
    "url": "element/element2/index.html",
    "revision": "36bedcdcc27207d5a74ac3a1db84e79b"
  },
  {
    "url": "element/index.html",
    "revision": "1543119962afc7837a8d58ad9fdb047f"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "9493fd065b7a9f8e51bb57a4c7304192"
  },
  {
    "url": "java/index.html",
    "revision": "ed790d2c71b244dbd2957fec94421fd8"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "369b81ff7d7ad30a6364925401c3ae39"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "11fe4f26c2b8364dbcc0d0b7c9c9b2f0"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "f04722b1579d7e99d895e8e222ff0e70"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "14f5a8007d570280e6fac9f41b2cc871"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "2294d1b73a538c88736ed7f9a26b0abb"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "a9caeb7ad0944b165f1f910ef76d1a1b"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "0ec44f732d3c583f5d9f2a8da61565e9"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "0ff1c202f60e5b77fb53d4222d64e7d7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "75b19ea5ab33b4d0cba593ab395b55fd"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "b6aafc626aab932d0c92f349537e0c49"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "08fb091e4de43fb8c90926a34c5806e1"
  },
  {
    "url": "java/java2/index.html",
    "revision": "38a40368028389dbf0e7ade7d00cf5a7"
  },
  {
    "url": "mysql/index.html",
    "revision": "62e12c80a21ea853453ad8c88ac409cb"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "7b214fe409164110f8342017650cf46e"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "8393012516bf5cf893393adb03117b7e"
  },
  {
    "url": "other/index.html",
    "revision": "598c0b3bc72699739c2bff1b3593d2d5"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "ef41c9582bf866bf104de7ca7a540856"
  },
  {
    "url": "vue/index.html",
    "revision": "fdb9e556a4cf8bc00abab1acaa8aad8f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "37856135be8c3c6d2fe8a8309a961356"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "24082b521568d485eef3930028457d47"
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
