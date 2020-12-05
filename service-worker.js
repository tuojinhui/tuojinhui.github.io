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
    "revision": "7634d46ada4bbd1cfd61353d8575d7f8"
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
    "url": "assets/js/12.017c4ec5.js",
    "revision": "cb280fbf2af233238ebec4a2317b2689"
  },
  {
    "url": "assets/js/13.e2d5d5b5.js",
    "revision": "e6f29ba005eec4349aed0a829fd24e78"
  },
  {
    "url": "assets/js/14.793524e1.js",
    "revision": "e6a8779e4c769a0ace2dcfd537d042c8"
  },
  {
    "url": "assets/js/15.09192b26.js",
    "revision": "f4cd3941bc74a7e4d967ba708aa81a6b"
  },
  {
    "url": "assets/js/16.0be6008c.js",
    "revision": "5a5a0dfdbcfceb67ca80eee5ec0fc02c"
  },
  {
    "url": "assets/js/17.1ac3f856.js",
    "revision": "7e4dd0cfb692aac970d3bb3a2be22206"
  },
  {
    "url": "assets/js/18.5c87d8f4.js",
    "revision": "4a686551d2676b761d931c5d3ce58fb7"
  },
  {
    "url": "assets/js/19.d815ea6c.js",
    "revision": "b90784b10875c80822679711d2c4f619"
  },
  {
    "url": "assets/js/2.9af4986e.js",
    "revision": "67ed56c480a2072debf7fe9bb5941b20"
  },
  {
    "url": "assets/js/20.ea2ab4ca.js",
    "revision": "e4bd54afb82373400a09f1c9c605c86d"
  },
  {
    "url": "assets/js/21.7095526f.js",
    "revision": "139e28a6a1b2d9ce903f11332157da71"
  },
  {
    "url": "assets/js/22.e887bde2.js",
    "revision": "ac24ee60186a67a255099a6c19d7e5b2"
  },
  {
    "url": "assets/js/23.25af0ce5.js",
    "revision": "f054c602719f8ee0324663728b6439a9"
  },
  {
    "url": "assets/js/24.f951f43c.js",
    "revision": "fd3f0771f6273b56ee9a1a2779bab356"
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
    "url": "assets/js/32.5b0fd9c2.js",
    "revision": "89a788c1c31b4ce56245b9f491da7537"
  },
  {
    "url": "assets/js/33.4f4abba6.js",
    "revision": "b48e4182d2bc38625be623b10ebfe9f9"
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
    "url": "assets/js/app.6e2ee119.js",
    "revision": "82e6b9be2910657ed36731c947d285c2"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "6347d4e3e2545bb21fb62a4bb940c623"
  },
  {
    "url": "element/element2/index.html",
    "revision": "7d147f8cde36b10cd92f70351e0ce796"
  },
  {
    "url": "element/index.html",
    "revision": "2cb926608d6abf3ef2a44689ebaa7d63"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "62c307ffc85ee47a79f6765180233068"
  },
  {
    "url": "java/index.html",
    "revision": "176ef19815e1c684eed4267e510f0aa2"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "fcdc2b5c6dc6f97c5e0cda92b07f9177"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "254b65dccbf82029d2f89117a9b55a6b"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "e1abe953aa3b52e230992fc40d10bd2a"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "a8036400da4afa3feedec023c4501ce4"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "54f3d8b328c9583dd7becb87c1e25e0c"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "33d87f559c5311ad2b786a0b7d092fb9"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "d03a67feb0491c041946fc4e6bff8e97"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "85e8398e23912128d193faa6ba292e76"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "10f771371a8078edab2004f77624128c"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "d7cd8b4993aa15cb1a7b7ad1b71a8019"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "efeed01c6bc7c0a3a310b64688ee8a25"
  },
  {
    "url": "java/java2/index.html",
    "revision": "8e0de1359534ade295a88267d66c079d"
  },
  {
    "url": "mysql/index.html",
    "revision": "90ae4ff77f6d5b5dccc5e4b6072c55e2"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "568e90bca79ac8ef1d01bad58e2ccb83"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "71fa95e7289ecbf840ec50246c43f2bb"
  },
  {
    "url": "other/index.html",
    "revision": "9d91cdfb868880073180bdc842685d83"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "8114c79b1ed2a6c6fd14a45fe4e8a280"
  },
  {
    "url": "vue/index.html",
    "revision": "31778514c8f29021ba742e8e9467af49"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "07e370e2db1ab9294057c97ac5781e83"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "e0bd331ad0f20e6b560ce14ea5781237"
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
