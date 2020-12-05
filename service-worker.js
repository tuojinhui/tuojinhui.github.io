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
    "revision": "fceb059d0617f41405ea78df9b92b7ff"
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
    "url": "assets/js/14.48857e42.js",
    "revision": "6ca601e6d82d266ea40fad25017d3d0c"
  },
  {
    "url": "assets/js/15.d82a91d5.js",
    "revision": "6753fd165759140be22786db566f7e18"
  },
  {
    "url": "assets/js/16.f1058051.js",
    "revision": "a740945450bbbb6660028b0385dedbac"
  },
  {
    "url": "assets/js/17.38393b32.js",
    "revision": "7689608c356a612fca8cdeac3dc20cd2"
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
    "url": "assets/js/27.1409fea7.js",
    "revision": "a22fc9616779992a07ab2a6b1a53d402"
  },
  {
    "url": "assets/js/28.c7acd35b.js",
    "revision": "d67e96d50c806dd945b62a11487d7c37"
  },
  {
    "url": "assets/js/29.10934030.js",
    "revision": "f263c80bfac54c4205cbd974c2e49434"
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
    "url": "assets/js/31.e62f9431.js",
    "revision": "da0878db7715b1dd5f0caaa06a6dbcfa"
  },
  {
    "url": "assets/js/32.97d7b426.js",
    "revision": "d9428cd7abcfd8830c03fe50fe3274df"
  },
  {
    "url": "assets/js/33.fa3081ed.js",
    "revision": "201ba9b623f914b419c5e0b98dcc7f15"
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
    "url": "assets/js/app.a772f0ba.js",
    "revision": "6866da5be897c68e0ae1037b36f2d969"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "9c62f312f9c0cfcba79e1d2a31df50ff"
  },
  {
    "url": "element/element2/index.html",
    "revision": "32cb4f10cfa5aea0bd66f3a7ec54ccac"
  },
  {
    "url": "element/index.html",
    "revision": "b2603df9b9a69da9a694eca5d0a0073b"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "2a109f094e46436c9447ec57db78073e"
  },
  {
    "url": "java/index.html",
    "revision": "96f9f41aa452791cbce4eba670879993"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "9897ba05fabf4b983816a4dcf309f9ca"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "1a9836d2248a89443a24dd5efc830c30"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "cbfdbde33638f8ba843710efd60baaca"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "fc93a2401b45170c3123d565a88ee136"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "dd1054509bd25615cc051959b87cf960"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "4e75a924e6ddab9af5d4508ca5e55a3e"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "42a1eaeee9e5b6f53215f9ed79e32278"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "8e50b9a9f417bc578ab82fcf6c514856"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "a0d3c6100dad3793efbf97917edc2d9d"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "d0707ee6d26bc6e7c0bb72eeb02ca888"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "3b0c412ae9e04b947cecc737d638eea9"
  },
  {
    "url": "java/java2/index.html",
    "revision": "2d33eae54d1a900fddf44a2396489aab"
  },
  {
    "url": "mysql/index.html",
    "revision": "7ae7c229b584c00d6e64e34bf0780c61"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "1bf23e622593691499535e289d79344e"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "818fab52d7242fc74d472c3ed1562da2"
  },
  {
    "url": "other/index.html",
    "revision": "aaefb2bab07e114e22ade89d0cdd46b9"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "c1680c2c1347b59146af1e9ee6ab17c1"
  },
  {
    "url": "vue/index.html",
    "revision": "86089c422f142d6ef36d838a6d21681b"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "3b27ab6ec86b934614297a66fe38deda"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "47ab62e85e84332407af111bed993b1b"
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
