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
    "revision": "e2fcf96f8d9d9b7e2ad0157b0b363007"
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
    "url": "assets/js/16.a80ee57c.js",
    "revision": "a1aad3eb0962688d67b3b3612a9ad70c"
  },
  {
    "url": "assets/js/17.5c07fda3.js",
    "revision": "a84a049509dc6734be5eaadc49f0e125"
  },
  {
    "url": "assets/js/18.0744d47c.js",
    "revision": "31a047587158bd6a6b8e78a9758916af"
  },
  {
    "url": "assets/js/19.d0bd7820.js",
    "revision": "fe452036bbc416e9b8ac994d03a4d9be"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.12b62da3.js",
    "revision": "a90191abafe9ff150bab887bb0f6a581"
  },
  {
    "url": "assets/js/21.8382aece.js",
    "revision": "b5a5ab593bbf5e455aa00509f0d6b631"
  },
  {
    "url": "assets/js/22.0178ab4e.js",
    "revision": "9c23118e1706c73a457e7ccfab780853"
  },
  {
    "url": "assets/js/23.ecbc4f2a.js",
    "revision": "825e2d7b64291dc1c3aed9a38f09f608"
  },
  {
    "url": "assets/js/24.fb52340c.js",
    "revision": "0eb258f0bb405b82680ba75433bc529e"
  },
  {
    "url": "assets/js/25.e6eae865.js",
    "revision": "2d8ee11cc4b9a815c8f3a2dbfe4c9d7b"
  },
  {
    "url": "assets/js/26.ecf98f8d.js",
    "revision": "001d2424b0b82ef4b1ef8e9ecab02e40"
  },
  {
    "url": "assets/js/27.5b84a35e.js",
    "revision": "05cf4f80541791b784479c17cf435a47"
  },
  {
    "url": "assets/js/3.7a781a4f.js",
    "revision": "acdc69c1c4fcc81c019fb04c2ec7fbb7"
  },
  {
    "url": "assets/js/4.4152d5ff.js",
    "revision": "e3df1a766be9bf33b3a40d99b38c07b3"
  },
  {
    "url": "assets/js/5.5eb3de10.js",
    "revision": "a3463df2d7328f7c893e42a214309c2b"
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
    "url": "assets/js/app.0b2e8e2c.js",
    "revision": "e7f459724ceae2f13a81e00981e8a440"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "c293634d288004bc55f14bb2beb38263"
  },
  {
    "url": "element/element2/index.html",
    "revision": "c48060cff64e0b606d23a9c4daa8c355"
  },
  {
    "url": "element/index.html",
    "revision": "fa8a9aaaa8f89ecb6095ef787e77d1cb"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "980e98c9edd218e2b6e650e600136adf"
  },
  {
    "url": "java/index.html",
    "revision": "e3cce0bae09be34732debe4c2323ad8f"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "dcf34344bf20d571234279517fc41552"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "aec6246b4496a50d7e4b968a26e5fdc2"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "cfcbf4a97d22cf53eaa6a8c8a909ce4e"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "29fbaf2508b963c3c4b94261723243d7"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "660a302cd4ab7b784b4c4a7eb17f3b9f"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "8db1be9b9df4560a3f5880d0eb63538c"
  },
  {
    "url": "java/java2/index.html",
    "revision": "4829460eccebac45070a1f6cba14c777"
  },
  {
    "url": "mysql/index.html",
    "revision": "a30cf6f9a501832d02cc395b17dcb026"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "4db9557a3d8b80d2d20900b715e54979"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "2aeed59aaea27c7842df4ac085def666"
  },
  {
    "url": "vue/index.html",
    "revision": "df2df88c33d55d36fbee2753bf0115d6"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "26e27a19b8fbca249a9e531b78c8d47c"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "058de0a94adb46bda935c149cce10ef1"
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
