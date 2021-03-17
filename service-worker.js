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
    "revision": "cbb14d27108d6150856ff4f2948fc4e9"
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
    "url": "assets/js/app.c4106048.js",
    "revision": "90fc86c7a57836c571285ba07583b96d"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "8d167fcc4c4c042886fb0aa3d09fa09e"
  },
  {
    "url": "element/element2/index.html",
    "revision": "45c80f1fc243a3c3df1bd5fc945573eb"
  },
  {
    "url": "element/index.html",
    "revision": "5df29f105df5237dd28bf0c70bfde01e"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "09d4606576ae5d9b311519d086b7d486"
  },
  {
    "url": "java/index.html",
    "revision": "80fd349722674a0d58125d638a838950"
  },
  {
    "url": "java/java1/1-SortingAlgorithm.html",
    "revision": "1ed7d5da15296a673cd23b8cd58bfcce"
  },
  {
    "url": "java/java1/2-SearchAlgorithm.html",
    "revision": "9d45a7213c856ddb0366e141fd55440a"
  },
  {
    "url": "java/java1/3-DesignPatterns.html",
    "revision": "d68a8d51bde430045aff6490f0586787"
  },
  {
    "url": "java/java1/4-DataStructures.html",
    "revision": "9a1b187b1d8bac95d05ba832a0218e36"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "a325d2dcc9bd41676f55e13b9a58bdf1"
  },
  {
    "url": "java/java1/DefaultFastJsonConfig.html",
    "revision": "c28c75651bd8c9e8fb6249209d2644a9"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "3b8abf557d3dada2aa4633bc4b255df3"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "2a2f45f8ce7f57c52dab03db0f6a0e4b"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "ccb2de1b51eaf392f16ab0deda5e7bf1"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "f136a4ea385a14dd08e98e66ff0fec6f"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "58d538bcd995bc1bd4d1a7d2e225f212"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "a8192627824bcb977f890383c4029f3c"
  },
  {
    "url": "java/java1/MapToQueryParam.html",
    "revision": "4babed8970981989e43a851879fa4f4c"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "aa120d888dd56f04ac93146acc1d8a59"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "a0b47ab7bf74651d3ecc4f4d6452cbd9"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "fd2839d76bd12e89d79392e9fe78b0c3"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "a2d724090277d4622cc5d6b49edb74e1"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "c8a6e74220c6da8fb63cbc9ff8eebd26"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "38e8b68de15118dadad02cd44dcadbb3"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "4fb508ce1b1e245f20a9c7482aa85298"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "9918c89fdeecb3be53bb30af33e9fcc4"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "0184aff21d97944e1b52eb8061610020"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "100d7551d635ff898b8955f40ed17146"
  },
  {
    "url": "java/java2/index.html",
    "revision": "8356514ae73d45c37235eb5fd8238e84"
  },
  {
    "url": "mysql/index.html",
    "revision": "bbf2276edcefb33874847f02e67aed73"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "46a37b9126fa42dd7b08b348daeab4c9"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "76e3010a9952fc9e11dc2161a2b0ac43"
  },
  {
    "url": "other/index.html",
    "revision": "b407fc2a81177e17f083a904f59ef607"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "e7be72fd1647a1ec672373c7f349a4c2"
  },
  {
    "url": "vue/index.html",
    "revision": "c9763ed22982c556cc72100efc8015aa"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "6ab830f00566277887540135942a8b58"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "f01dc6d44c15dc6851fd12ab5eda0fd9"
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
