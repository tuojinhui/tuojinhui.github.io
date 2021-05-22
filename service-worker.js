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
    "revision": "c9368203e5d312d76e5254601aa8c7eb"
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
    "url": "assets/js/16.fc2a1899.js",
    "revision": "5aa01b2a9aef2e47bcf77904916bc9a1"
  },
  {
    "url": "assets/js/17.169c555d.js",
    "revision": "e393674b1285af392aa4811a0723166f"
  },
  {
    "url": "assets/js/18.77707db9.js",
    "revision": "c18f3c12e4d4d03a875a09d091fea3f0"
  },
  {
    "url": "assets/js/19.7e98b8f8.js",
    "revision": "518928c32c567dfdcd58c04aaee30eb0"
  },
  {
    "url": "assets/js/2.9354284f.js",
    "revision": "f6e13f386cd9c1994d94b489d6f0585e"
  },
  {
    "url": "assets/js/20.e863ee66.js",
    "revision": "29d308477b8fa3f537cb93059e1a10ec"
  },
  {
    "url": "assets/js/21.3ca19f36.js",
    "revision": "05bad91598e97b47fd042a8f8c8519ae"
  },
  {
    "url": "assets/js/22.e3c2c9f3.js",
    "revision": "061499d635bf141ff478b117a34f895f"
  },
  {
    "url": "assets/js/23.c4322108.js",
    "revision": "e2f16af847c679948535e8abe66d5c33"
  },
  {
    "url": "assets/js/24.8fcb8855.js",
    "revision": "6f1b814249aa6535a828a300be5c2317"
  },
  {
    "url": "assets/js/25.092319d1.js",
    "revision": "12271a59afb39787d749d6cccc2fa859"
  },
  {
    "url": "assets/js/26.11d1dc40.js",
    "revision": "62e9393464faa0542be4f6164944e319"
  },
  {
    "url": "assets/js/27.531aaf67.js",
    "revision": "7ed8becc61451a31fce0618efb1114ec"
  },
  {
    "url": "assets/js/28.1e968980.js",
    "revision": "f247b18731e1da40524239348cf959e8"
  },
  {
    "url": "assets/js/29.bad8e54f.js",
    "revision": "3afa75ccd6f42037825a3746d43eb450"
  },
  {
    "url": "assets/js/3.1781e0d2.js",
    "revision": "59f59854194c9da588fbc1b188ca4014"
  },
  {
    "url": "assets/js/30.30ddae4d.js",
    "revision": "47d15e7eae221e3ed2469ddd0593b8a2"
  },
  {
    "url": "assets/js/31.3277530b.js",
    "revision": "3dc321eef8dd4f3eaedd02386d5fd535"
  },
  {
    "url": "assets/js/32.8ea2b322.js",
    "revision": "51ddc11b78bad5b5671571f1718577d8"
  },
  {
    "url": "assets/js/33.2d1455f5.js",
    "revision": "b6edb2851d9c765b264b985c747965ba"
  },
  {
    "url": "assets/js/34.b1021cd2.js",
    "revision": "32a0c655d7d248208719548127c748ba"
  },
  {
    "url": "assets/js/35.f7ebd689.js",
    "revision": "08c6343eb133047d58661087b9afce48"
  },
  {
    "url": "assets/js/36.186b7d48.js",
    "revision": "0e4e61927cae1a10720d41a27f8791ec"
  },
  {
    "url": "assets/js/37.ecb40dd4.js",
    "revision": "646e7efc3818d18a4623d0eabe736804"
  },
  {
    "url": "assets/js/38.b9d185bf.js",
    "revision": "a1da3dac1faf8d6cd5163d34ba3f85f4"
  },
  {
    "url": "assets/js/39.62feeb1f.js",
    "revision": "619cadaeaf7baf4cd0f96e897e512b53"
  },
  {
    "url": "assets/js/4.d211ec40.js",
    "revision": "6342befcdc91582d34c47d042b56a49b"
  },
  {
    "url": "assets/js/40.0c0f1714.js",
    "revision": "84c0f07fc0c7e14ca2cec803258d8234"
  },
  {
    "url": "assets/js/41.384c8b91.js",
    "revision": "2682839fcf341213ddb66ed92693a859"
  },
  {
    "url": "assets/js/42.11218fb9.js",
    "revision": "956a4f039cf376677a09d23fa12f7972"
  },
  {
    "url": "assets/js/43.3d24936f.js",
    "revision": "5249ed44a589229fe77b825b60642443"
  },
  {
    "url": "assets/js/44.cffb48ce.js",
    "revision": "85e31c1472c6a736bca3325bdabdafcc"
  },
  {
    "url": "assets/js/45.1accf7a6.js",
    "revision": "592ac015f3604596b70860b779c57e75"
  },
  {
    "url": "assets/js/46.7a22369b.js",
    "revision": "dda027c959e7b45fe0155e72c7b52d93"
  },
  {
    "url": "assets/js/5.ab9c1798.js",
    "revision": "72c93c38f155fb942d45c1df8eedd190"
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
    "url": "assets/js/8.f19d404a.js",
    "revision": "ce67e977f422a9410d66e08ee5f2afe2"
  },
  {
    "url": "assets/js/9.e6e43f28.js",
    "revision": "cf5d02ae5fd548639cbf6efc65a28b05"
  },
  {
    "url": "assets/js/app.07930d51.js",
    "revision": "2eeacd49155c9f2c94accbeffc1093e9"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "16d371222555413caa4c45be4b088780"
  },
  {
    "url": "element/element2/index.html",
    "revision": "b41f65d6bd16056f669159f0d84ecd2b"
  },
  {
    "url": "element/index.html",
    "revision": "b7ed3dbd12ee648b58242875fa3dd4ac"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "c5439375619d297b35b4748e715b45e1"
  },
  {
    "url": "java/index.html",
    "revision": "897f6de5561c0836610d390f3a9f5e32"
  },
  {
    "url": "java/java/1-SortingAlgorithm.html",
    "revision": "814cedea190c731b0db48e19070c8217"
  },
  {
    "url": "java/java/2-SearchAlgorithm.html",
    "revision": "2efe45fe1bbefba62ae3366bfdf998e5"
  },
  {
    "url": "java/java/3-DesignPatterns.html",
    "revision": "82c9d49c44c1dfb83b17097326bdf6d3"
  },
  {
    "url": "java/java/4-DataStructures.html",
    "revision": "cc1a6aa8e0dca6ab33673363853dc8c9"
  },
  {
    "url": "java/java/BigDecimals.html",
    "revision": "f3cb090650e09da05d1a08a2e1c98bc4"
  },
  {
    "url": "java/java/DefaultFastJsonConfig.html",
    "revision": "64f0b45f18b4f080fe1521632537ca32"
  },
  {
    "url": "java/java/Enum.html",
    "revision": "dcda93ed6cf725c594f4d283fcc0d6ac"
  },
  {
    "url": "java/java/Executors.html",
    "revision": "b357d28785846e35fe558140f3b7a0d8"
  },
  {
    "url": "java/java/Feature.html",
    "revision": "9a7f9f096148b1d8e2ddd105236bfd05"
  },
  {
    "url": "java/java/Filter.html",
    "revision": "d3b1159010162ba69acfd1aaf80009bb"
  },
  {
    "url": "java/java/knowledge.html",
    "revision": "2ca13d4cdadabf54952bc5870bef0cd4"
  },
  {
    "url": "java/java/LocalDataSourceConfig.html",
    "revision": "5f4c90621468b9e01252ca858b1b4d0d"
  },
  {
    "url": "java/java/MapToQueryParam.html",
    "revision": "1013c5f2b2a9a51b9337ab8b11a23ffe"
  },
  {
    "url": "java/java/MenuTree.html",
    "revision": "57fc1f633a941279c9c3b6be218c6793"
  },
  {
    "url": "java/java/Optional.html",
    "revision": "495476a13cc45c6425543c5c537a3ce7"
  },
  {
    "url": "java/java/RedBlackTree.html",
    "revision": "e7838ed043676a73f67a6a194fecca4d"
  },
  {
    "url": "java/java/RedisKeyExpirationListener.html",
    "revision": "6e16ed3677f3b1dd277e34ac0b9022c8"
  },
  {
    "url": "java/java/Retry.html",
    "revision": "a4b93eff0f5986283bd3ae89e07d2ef3"
  },
  {
    "url": "java/java/SpringSourceCode.html",
    "revision": "372000b00d9242c30a24d19b52035445"
  },
  {
    "url": "java/java/TaskExecutorConfig.html",
    "revision": "796cdfaf7a83de843da84b53f6fbfd2a"
  },
  {
    "url": "java/java/ThrowableInterceptConfig.html",
    "revision": "3f8a0dfd45059667923b642b6998ab21"
  },
  {
    "url": "java/java/TreeMap.html",
    "revision": "508f7d80e2681c952abca9a4d743d4a5"
  },
  {
    "url": "java/java/XssHttpServletRequestWrapper.html",
    "revision": "a46fe45c32c5d26eb46c315d52562de6"
  },
  {
    "url": "mysql/index.html",
    "revision": "07aed1253b997acbcb200f0cd94418f3"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "5bb4d0535e5616ef7ad404b39ed22f07"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "4af3e8f4c987b6bd26e7031fcb31836d"
  },
  {
    "url": "other/index.html",
    "revision": "49fecdd10c9ee7dc279acd0799b8fe6f"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "8075b6cbe65501d85545d81e1480cb02"
  },
  {
    "url": "vue/index.html",
    "revision": "284d10319992798dec72fa6ac6c3abbc"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "067abd6d6ac43fcf1d547aa51f0fadb0"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "3c06cb6f9564bf9baecc007b8bf0211b"
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
