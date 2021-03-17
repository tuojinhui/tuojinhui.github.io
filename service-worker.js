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
    "revision": "49740430b3ddfdc17417ee0e73174cd5"
  },
  {
    "url": "assets/css/0.styles.08292296.css",
    "revision": "ee34a3b89d60590f5f2c776289ad1d02"
  },
  {
    "url": "assets/img/Optional.1bd3000c.png",
    "revision": "1bd3000cde5a374e06c50a3f2f679a3d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.469042e6.js",
    "revision": "f26d8bdd63e3ee0a22a9fcc8d1e9487a"
  },
  {
    "url": "assets/js/11.8b4e1b2b.js",
    "revision": "08e278fdb0c5137f3655a52e73258d4e"
  },
  {
    "url": "assets/js/12.b106cf7f.js",
    "revision": "924024743a7f581b3f3874b830c5b5af"
  },
  {
    "url": "assets/js/13.3f42ac10.js",
    "revision": "c5daf4d9c75a29fc2c165f3b12e5dd8a"
  },
  {
    "url": "assets/js/14.9c2434f6.js",
    "revision": "6d3f22ea0a10260d095fe9eeca6399e6"
  },
  {
    "url": "assets/js/15.7ba841c0.js",
    "revision": "5b295cffccd995e5a64b7041cba06893"
  },
  {
    "url": "assets/js/16.977c89af.js",
    "revision": "5aa01b2a9aef2e47bcf77904916bc9a1"
  },
  {
    "url": "assets/js/17.3d44eab4.js",
    "revision": "e393674b1285af392aa4811a0723166f"
  },
  {
    "url": "assets/js/18.5661d43e.js",
    "revision": "c18f3c12e4d4d03a875a09d091fea3f0"
  },
  {
    "url": "assets/js/19.5edad561.js",
    "revision": "518928c32c567dfdcd58c04aaee30eb0"
  },
  {
    "url": "assets/js/2.9354284f.js",
    "revision": "f6e13f386cd9c1994d94b489d6f0585e"
  },
  {
    "url": "assets/js/20.35b65fd3.js",
    "revision": "6a013b2e07340763a4fe5f1bb3449878"
  },
  {
    "url": "assets/js/21.271e1aa4.js",
    "revision": "05bad91598e97b47fd042a8f8c8519ae"
  },
  {
    "url": "assets/js/22.2d0ac5b3.js",
    "revision": "061499d635bf141ff478b117a34f895f"
  },
  {
    "url": "assets/js/23.1f298027.js",
    "revision": "e2f16af847c679948535e8abe66d5c33"
  },
  {
    "url": "assets/js/24.b19d8f5c.js",
    "revision": "6f1b814249aa6535a828a300be5c2317"
  },
  {
    "url": "assets/js/25.4fa9b1f6.js",
    "revision": "3b380c4a77e670c841d0fd17b07cf5b8"
  },
  {
    "url": "assets/js/26.3999b2f2.js",
    "revision": "62e9393464faa0542be4f6164944e319"
  },
  {
    "url": "assets/js/27.5c3404f3.js",
    "revision": "7ed8becc61451a31fce0618efb1114ec"
  },
  {
    "url": "assets/js/28.a15243ab.js",
    "revision": "fa8392d9e8653593be248e8077d444f0"
  },
  {
    "url": "assets/js/29.84b68688.js",
    "revision": "000fbf9db94f715b05f1fbbcbe9ed57c"
  },
  {
    "url": "assets/js/3.1781e0d2.js",
    "revision": "59f59854194c9da588fbc1b188ca4014"
  },
  {
    "url": "assets/js/30.8f294fc7.js",
    "revision": "47d15e7eae221e3ed2469ddd0593b8a2"
  },
  {
    "url": "assets/js/31.67a689db.js",
    "revision": "3dc321eef8dd4f3eaedd02386d5fd535"
  },
  {
    "url": "assets/js/32.90c75e4b.js",
    "revision": "51ddc11b78bad5b5671571f1718577d8"
  },
  {
    "url": "assets/js/33.3c76b850.js",
    "revision": "b6edb2851d9c765b264b985c747965ba"
  },
  {
    "url": "assets/js/34.5eb94f7f.js",
    "revision": "32a0c655d7d248208719548127c748ba"
  },
  {
    "url": "assets/js/35.a217351c.js",
    "revision": "08c6343eb133047d58661087b9afce48"
  },
  {
    "url": "assets/js/36.b9ccef24.js",
    "revision": "0e4e61927cae1a10720d41a27f8791ec"
  },
  {
    "url": "assets/js/37.30df3280.js",
    "revision": "269e10fc2830762fd5e9df586197ac3f"
  },
  {
    "url": "assets/js/38.96215ae9.js",
    "revision": "fd824fbb7de682a51194fbf224d3b818"
  },
  {
    "url": "assets/js/39.0170f49c.js",
    "revision": "dd6e47b48d082ba486aed16c7f4be44b"
  },
  {
    "url": "assets/js/4.d211ec40.js",
    "revision": "6342befcdc91582d34c47d042b56a49b"
  },
  {
    "url": "assets/js/40.8a8fe432.js",
    "revision": "f50bf106abcfdb555187e366905c6996"
  },
  {
    "url": "assets/js/41.f6a9baea.js",
    "revision": "523e89d380da396808733359e24dff01"
  },
  {
    "url": "assets/js/42.4ea96f6b.js",
    "revision": "1835cda31d4d0e704ea12aa542c0fe82"
  },
  {
    "url": "assets/js/43.e8eeee79.js",
    "revision": "00114e72f1de81cd8550515f9245c2d2"
  },
  {
    "url": "assets/js/44.7571e561.js",
    "revision": "1b2669e4d73fec6680d4ec72b1b74cec"
  },
  {
    "url": "assets/js/45.df4495b6.js",
    "revision": "3544398c1c6705b6baeea5fd8a29a70f"
  },
  {
    "url": "assets/js/46.23662c0e.js",
    "revision": "e9f8d73b992eb452c8ddd9576bee74e2"
  },
  {
    "url": "assets/js/47.936ce98c.js",
    "revision": "b0891a06d5fc56b9ef3a60d376af4b73"
  },
  {
    "url": "assets/js/5.33218771.js",
    "revision": "d635b01965b31c4e26217edc480cc385"
  },
  {
    "url": "assets/js/6.b0da79a0.js",
    "revision": "d8cc9e8c71e03f2540a85ba8aee10b5a"
  },
  {
    "url": "assets/js/7.5e5664da.js",
    "revision": "6335bccf0c1f733f4a2ca666a6e27ee9"
  },
  {
    "url": "assets/js/8.9ed1bbd5.js",
    "revision": "ce67e977f422a9410d66e08ee5f2afe2"
  },
  {
    "url": "assets/js/9.e6e43f28.js",
    "revision": "cf5d02ae5fd548639cbf6efc65a28b05"
  },
  {
    "url": "assets/js/app.a4d3953b.js",
    "revision": "8ec8f5d148f6ecb55e604f8138881389"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "a8d928074d8c867d4bbe55f9bc1d36d0"
  },
  {
    "url": "element/element2/index.html",
    "revision": "6c7d578bfaa048bcef00bdf13e62c3c9"
  },
  {
    "url": "element/index.html",
    "revision": "01b8e13a1e19f6d4ba81e515dac0024c"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "e28cd5942f3bf24215fb330e716c995e"
  },
  {
    "url": "java/index.html",
    "revision": "1ef7ae86e95679eb5b0d9fa7da86a47c"
  },
  {
    "url": "java/java1/1-SortingAlgorithm.html",
    "revision": "f764d2203f714eee56846a4a86898094"
  },
  {
    "url": "java/java1/2-SearchAlgorithm.html",
    "revision": "690e56764b4f29373b22ac44485b2e3d"
  },
  {
    "url": "java/java1/3-DesignPatterns.html",
    "revision": "2ea58d0fa7d977d28806f7f95396a739"
  },
  {
    "url": "java/java1/4-DataStructures.html",
    "revision": "dbb5af3cf368b3e4fcdfd82f6eb5075d"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "d54d38d0749058c81df80a5a1aaa6bae"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "54a0467cd7f9460e57b346f93eef293b"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "2b8fad6b3dc66c5182fe49ca983b094b"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "34ff7cfbd5489448c062c4f4c41db5b2"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "acea1b81693791096d1c41610d99e771"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "4863cf1e2ef4a7bfafb38a57daf809fd"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "e2d5c638145ea6705b08fd94169c9aea"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "95f204ea932629315a0d6a6965a17f1d"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "c17f3c03449a8623e59fe0da852a7e6a"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "7ac8e781ed917c94dd071ad29321c135"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "711bbe02889ebf0dd22c009988fe27cb"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "2a1af22b59cc4da311e08527e23748c8"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "bcd7fac6dd530a1ef6395b6a3c6aa12c"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "1860f6c8f35de0d7500233de27e2a311"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "98754f64ee8b3c287085c85e1db75d09"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "194376d355b328c5962928772fa9cfa0"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "f49304acbdd4c8294905ed8c7639d046"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "792cd70e61747130ab01d2ff3edec862"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "cb0151d1064f91a1b4f2db9e2b1e1120"
  },
  {
    "url": "java/java2/index.html",
    "revision": "345f86a2b242afd2886e3e2df3d4a26f"
  },
  {
    "url": "mysql/index.html",
    "revision": "418ade76c767ee39dda8747865332c6a"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "e2c6a123f877b759768a09a562ed658e"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "5bca6330cbffd83aaf838efb8dfb2b54"
  },
  {
    "url": "other/index.html",
    "revision": "fb33425c438ec618471cf300716fcbe5"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "809c50251e5eb50e83fa8dd6ba50a5c5"
  },
  {
    "url": "vue/index.html",
    "revision": "2e425298804625dd48f68d395b9e349d"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "1aa8f07d32a0d0ebf3222f6d8bcb157f"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "012533a42654c6b9ee61ee89504bdecd"
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
