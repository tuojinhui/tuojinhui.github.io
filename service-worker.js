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
    "revision": "b29703620f00ce2d40524980eb4c398b"
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
    "url": "assets/js/10.80d3f854.js",
    "revision": "f0ac21d334545c91c1b9217ba2b8d6a3"
  },
  {
    "url": "assets/js/11.f3557921.js",
    "revision": "eef769c036d2c084acb4191cbe17bdb7"
  },
  {
    "url": "assets/js/12.1f105204.js",
    "revision": "c4b410454084847665aac8fb7516aff6"
  },
  {
    "url": "assets/js/13.175a7632.js",
    "revision": "c9a1fc65fd7c188e1f04fef479110337"
  },
  {
    "url": "assets/js/14.450e3bb7.js",
    "revision": "6b089fadb8758d22990f6e5e6a17b55e"
  },
  {
    "url": "assets/js/15.6b155a24.js",
    "revision": "bff86f6b051d1c95e66b6d061284e169"
  },
  {
    "url": "assets/js/16.a8254bba.js",
    "revision": "9902af3bed4623a7fae9f107a08560bc"
  },
  {
    "url": "assets/js/17.bb44977a.js",
    "revision": "f469c4be03b57a2858a7b0400ef7dce5"
  },
  {
    "url": "assets/js/18.b8f99ea8.js",
    "revision": "a2e0eec5c6030fa5669ce3c05cd64574"
  },
  {
    "url": "assets/js/19.a26798d1.js",
    "revision": "4cff584e7bf589f22c40f4ee82728fc1"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.9721215c.js",
    "revision": "417e7a51958fecee549476567e871fcf"
  },
  {
    "url": "assets/js/21.d18c219a.js",
    "revision": "ef67d70e45656b6f24a36e2d864321df"
  },
  {
    "url": "assets/js/22.dcfc6340.js",
    "revision": "7e1c334bc84ad7fb846e2735d82598a7"
  },
  {
    "url": "assets/js/23.87153515.js",
    "revision": "e750fe6eb5931c6d8c454a7c8c27e378"
  },
  {
    "url": "assets/js/24.ef9ae79b.js",
    "revision": "6de0dcd6459d160833e55b7a20ac1a37"
  },
  {
    "url": "assets/js/25.bf52dcd1.js",
    "revision": "87d6e4694bb012e2a9684542ead5a821"
  },
  {
    "url": "assets/js/26.3be4072f.js",
    "revision": "4f36fb48a9cb8a2f998eea6338216ded"
  },
  {
    "url": "assets/js/27.ffd5c73e.js",
    "revision": "e91d2f4ad4b4f540b0d8b6a7ccf7c548"
  },
  {
    "url": "assets/js/28.8b25d774.js",
    "revision": "9bd8c55b453df266f752ceb7732593a8"
  },
  {
    "url": "assets/js/29.1b1a7183.js",
    "revision": "6fb0397f10ee32bf1fede118348e2b71"
  },
  {
    "url": "assets/js/3.7a781a4f.js",
    "revision": "acdc69c1c4fcc81c019fb04c2ec7fbb7"
  },
  {
    "url": "assets/js/30.da5cdab5.js",
    "revision": "3a6a5b7dc87ccdae803bb07656ea70a8"
  },
  {
    "url": "assets/js/31.d3b91379.js",
    "revision": "e8dddd093d7efe4e6e884030485d9b2f"
  },
  {
    "url": "assets/js/4.4152d5ff.js",
    "revision": "e3df1a766be9bf33b3a40d99b38c07b3"
  },
  {
    "url": "assets/js/5.0307023e.js",
    "revision": "e424d4efad08aaa4ea098cdd861ed7b7"
  },
  {
    "url": "assets/js/6.174d13b5.js",
    "revision": "e269599725710b59f02cf1c1597ad0f0"
  },
  {
    "url": "assets/js/7.4ff95929.js",
    "revision": "7a0d896587ff2f78c36a4a36a02ecfa2"
  },
  {
    "url": "assets/js/8.25791c08.js",
    "revision": "f0d9f601d39263a7880e06bb76f8d917"
  },
  {
    "url": "assets/js/9.116148d7.js",
    "revision": "fe7ea1d4b2c887ed18751d1438ca6c5d"
  },
  {
    "url": "assets/js/app.3350e13d.js",
    "revision": "b7146447d3536bd132f5e8cfd53dfd06"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "13e87ce2a12aaede945a3622ae30a689"
  },
  {
    "url": "element/element2/index.html",
    "revision": "e1736b5726165a13192d3b23e3f500a0"
  },
  {
    "url": "element/index.html",
    "revision": "3be274492bd4114b9035798d3d8a0491"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "324c27fe6d6cf0ccdea42a9b8336f0e3"
  },
  {
    "url": "java/index.html",
    "revision": "fbbab0e49e488f6ed5569573723bc0a5"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "de248432f69e7491ff542a5b47c5ee5a"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "1881575a3704aeb89ac2bf9699f55a34"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "9678fc84a353977f3831134a84e0076c"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "6eab53664ff13f38029e3bf8f626aac3"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "5fd8eef7e0e67e05fdb0c4ced67a487e"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "ff74b4ddde5dc5f3322a2bdf7748f829"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "f7ce1915555a36970fc3905a13adaa13"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "977dabdce17c021d25145e07cd1969bc"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "ab7adc9e14fe5a8871695dbd5c82974a"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "f56fe78089a55692ffa43cbf4fdb9a81"
  },
  {
    "url": "java/java2/index.html",
    "revision": "2c6aaf3d510b4457e42c89fc289655b3"
  },
  {
    "url": "mysql/index.html",
    "revision": "5a2392e1eb05248124c61219606a9cd1"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "ed495c6dc8fce9f580041e48fab93fc6"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "4644ba86432f7a37a20bdfc2f5807b03"
  },
  {
    "url": "vue/index.html",
    "revision": "e84245780181d5b7b20ec44327f0849a"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "71c3cefc3b95d07d912c7f3e051c2059"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "2297efaf92e207a9d6a9a8d1b94fba0e"
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
