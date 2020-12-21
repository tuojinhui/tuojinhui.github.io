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
    "revision": "42add31927a34beffb734519edab13c3"
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
    "url": "assets/js/31.0c404637.js",
    "revision": "5cc21975833bac7dd2a66c901fdf5919"
  },
  {
    "url": "assets/js/32.772c7283.js",
    "revision": "327074d5d92372154800cb2073c62362"
  },
  {
    "url": "assets/js/33.4a22562b.js",
    "revision": "613c2803e55d774d4c31bbedda906d62"
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
    "url": "assets/js/app.0084fa1d.js",
    "revision": "fce1d01f3879be7c19d81549c5c95b0a"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "158ca3a4c2c71382cdd47a7c36bb36c0"
  },
  {
    "url": "element/element2/index.html",
    "revision": "a449ffe1f0bd632e4ba8dc3a44e2747e"
  },
  {
    "url": "element/index.html",
    "revision": "7a31867cd189c4c5947fee9c16594c5d"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "1e4867254b084b8eda5d23c5fea988e6"
  },
  {
    "url": "java/index.html",
    "revision": "f2babaecd7b0d4d2cc7b56899b8c0157"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "ea23e80b0979e54dae012f0f05b82497"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "cdb9256ec02c104c5f0c5159c657f287"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "701f20db82f740a3bde034108bcb4208"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "6a2a3df66481a840856eb5abd099d14e"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "7b3cf55c916d56fb8d0886af57a98400"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "df68a29a668962b3a3ec7d920defad9e"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "de6e9340a9ddf3e5f419590a59fe7d70"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "da3ea322c10aa6c97ea29660a2c28f27"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "e2d69ad5a06a22e926f6c99422fb7a8b"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "c0b515814f91b7edc5c8deed561e12f2"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "0bbf9f6bd114fa79b2e876b24befa7e5"
  },
  {
    "url": "java/java2/index.html",
    "revision": "c0652e23da9bcf434a2fa632dc2f14d3"
  },
  {
    "url": "mysql/index.html",
    "revision": "cad0358f2450babcbddd4649c255bbac"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "dc466cd48dbfb5def3421529e4f8a7be"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "788ff20d66f1eb209ddb0004eedad435"
  },
  {
    "url": "other/index.html",
    "revision": "1f153a5b56d09642402f3770d4252418"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "a07697b82cce8d11a3696d35b36cabe2"
  },
  {
    "url": "vue/index.html",
    "revision": "f84491063f642ed8fb68e98433ee405a"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "638b562aa2182fddd9ce246ea7aadc8f"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "35b7e4541199e88a4e927d454373259c"
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
