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
    "revision": "018c563f1bbe0cf403ba6c9eb697241d"
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
    "url": "assets/js/27.fa705486.js",
    "revision": "4495247a213157c0067b9738734981dc"
  },
  {
    "url": "assets/js/28.c7acd35b.js",
    "revision": "d67e96d50c806dd945b62a11487d7c37"
  },
  {
    "url": "assets/js/29.eea7ab26.js",
    "revision": "75d407a72a9231dfaf9f0739f294b11a"
  },
  {
    "url": "assets/js/3.845e4700.js",
    "revision": "ba41c09d35a338a072657ba01ed1d3c8"
  },
  {
    "url": "assets/js/30.a1d83e05.js",
    "revision": "c067de0846db229343be7e26b1bac203"
  },
  {
    "url": "assets/js/31.2135c220.js",
    "revision": "9f3311d5008ec823ab0a4eacb53f98cd"
  },
  {
    "url": "assets/js/32.d9b549a3.js",
    "revision": "1d9714ec0225321b2513d98ea2b9fa91"
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
    "url": "assets/js/app.6ced0603.js",
    "revision": "396e003f21716e3ab99ec04c5e8bc460"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "7b98f768802a64e8311848b4d0a09462"
  },
  {
    "url": "element/element2/index.html",
    "revision": "722b8c352ec6f8d8ce13fa18c6a4e383"
  },
  {
    "url": "element/index.html",
    "revision": "5d44d96f6fed37c7ce4fcbd113ef72ca"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "922258df82d9b80dbf9d995b5bd3baf3"
  },
  {
    "url": "java/index.html",
    "revision": "d82f690ea9aefd37cebdca36acea7c81"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "fc1d6ab329805c9a1d9d05d515d89373"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "8d905276b11b1029d983dcbd158d4d1a"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "9d42f8f85331711faab99945f8daa7d1"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "a6b4555e3c9e7f68c746dfb14136f31a"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "53c6a7d8e91f859d080c23da8344906c"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "9c6b5ab19cf2995fd879220b666be0df"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "fb1f278a22ad65595ba72bba07b2e2ad"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "08130f8c3fce9c65503734458cb25ce7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "10a3c590de42011f2d6c13feb720c92a"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "68c912917a2bd07d8dfd2eec4730afb0"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "47769018e5345a77be68fd9511045d6b"
  },
  {
    "url": "java/java2/index.html",
    "revision": "4f8346ae6f4668d50562447e6d0118d9"
  },
  {
    "url": "mysql/index.html",
    "revision": "be17e0a7e9ba3b63039460fda116e75d"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "21a604f52589294f682692d66e3fe5c9"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "29b41e949dca289ff17dabe3a9f458d7"
  },
  {
    "url": "other/index.html",
    "revision": "2902da213f91ae6d77ae782436eca679"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "21047038ba58665577cec286ebc25de4"
  },
  {
    "url": "vue/index.html",
    "revision": "441d1588ae5535b8fc9ed56efe6819f3"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "3cb02f818b5b7539d3790deaad08f31c"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "fa0c2e13be07fabfc2bf2e6d39a71931"
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
