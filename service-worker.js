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
    "revision": "4365608e6174c51b5815ca7ae9893754"
  },
  {
    "url": "assets/css/0.styles.e95cc0cd.css",
    "revision": "7a01d9d422f0d35ce152d3f74b42e1f3"
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
    "url": "assets/js/10.0ef276a3.js",
    "revision": "023e8364003e0f36fa06e07e3dce1f61"
  },
  {
    "url": "assets/js/11.21a7dd81.js",
    "revision": "b15a21f6cde15289cffd2f4f8e80e1fd"
  },
  {
    "url": "assets/js/12.b1ca900b.js",
    "revision": "34ce9d681f4f744a966db27dbcf93c6e"
  },
  {
    "url": "assets/js/13.39f77793.js",
    "revision": "f797e1a885f07b5228cce16f6da386b3"
  },
  {
    "url": "assets/js/14.13ab12d8.js",
    "revision": "58cb6e9a82a355e63eaba60ff7b1740a"
  },
  {
    "url": "assets/js/15.92c457c4.js",
    "revision": "7223dab8e746a5f09c14245e43dc538c"
  },
  {
    "url": "assets/js/16.3bea756e.js",
    "revision": "a9c0b52475a1609978309c6f8472d0c0"
  },
  {
    "url": "assets/js/17.5ec4f6fb.js",
    "revision": "eeb90467713f28eb11d4aafa0f1ffd62"
  },
  {
    "url": "assets/js/18.596586a8.js",
    "revision": "58e29c2ec1bcba3d962809b6afef4f2d"
  },
  {
    "url": "assets/js/19.ffa862d5.js",
    "revision": "856c4e9ba973871144f8d3a32cf2ad44"
  },
  {
    "url": "assets/js/2.7fcf7245.js",
    "revision": "e3d646246a721be5fb651bc33b115538"
  },
  {
    "url": "assets/js/20.5a4baaad.js",
    "revision": "e44c7e0e2b7f03a8205e2670352c5549"
  },
  {
    "url": "assets/js/21.82e683cd.js",
    "revision": "44f5332d06de8e53101746059fa1a5bd"
  },
  {
    "url": "assets/js/22.de8a6dfe.js",
    "revision": "60d3fc218cac9a4e51730af9bbca5549"
  },
  {
    "url": "assets/js/23.af316be7.js",
    "revision": "49df0f2d9425ea7088e3be570dd8b71e"
  },
  {
    "url": "assets/js/24.70673454.js",
    "revision": "5b5586049736e74600ccf39961c0656e"
  },
  {
    "url": "assets/js/25.f002f475.js",
    "revision": "2abd73d7b1180480ec9fa055884bd726"
  },
  {
    "url": "assets/js/26.f16e3199.js",
    "revision": "7716051a1b1103ab64ca3abd2bec521d"
  },
  {
    "url": "assets/js/27.f5d6ce84.js",
    "revision": "7232686fc0df9f9f27008e1a9a9c5d48"
  },
  {
    "url": "assets/js/28.d094ee34.js",
    "revision": "3a56c92bb266530caf97b0c146cf1bcc"
  },
  {
    "url": "assets/js/29.8d395cad.js",
    "revision": "7d641fec6b528154ab6ee701892a067b"
  },
  {
    "url": "assets/js/3.613d10c3.js",
    "revision": "7dbd09d72785357e7aa8f679a4e00220"
  },
  {
    "url": "assets/js/30.bdd97abc.js",
    "revision": "11a32ef7adf1cbe5f6a5749d26b38f10"
  },
  {
    "url": "assets/js/31.0286bd6f.js",
    "revision": "f2c9eac44cc3c835bae2cdc923ae9f5b"
  },
  {
    "url": "assets/js/32.42e7f2e1.js",
    "revision": "e4327b7af3acd35dc325f97f7ccd1fb6"
  },
  {
    "url": "assets/js/33.ee0cee24.js",
    "revision": "7f4a6ba0ffaef1e0be14e5a4fd0404b0"
  },
  {
    "url": "assets/js/34.c5f69809.js",
    "revision": "e83435a6e8ec4297d7197a8e1048738f"
  },
  {
    "url": "assets/js/35.d97c97e3.js",
    "revision": "135aadd93c523d4dc7a05f8e7cf340c3"
  },
  {
    "url": "assets/js/36.70e9a0a6.js",
    "revision": "49fa3a17785c4abb951b1ca49d29e7b5"
  },
  {
    "url": "assets/js/37.fdff8a21.js",
    "revision": "6eb574bb232a2fcc08e176ecd5a46393"
  },
  {
    "url": "assets/js/38.67a6c753.js",
    "revision": "78a97a2d3fd617fecf0ce13dba84289c"
  },
  {
    "url": "assets/js/39.2e1f48d1.js",
    "revision": "650888206a7d37243db6574c098132a9"
  },
  {
    "url": "assets/js/4.2468c312.js",
    "revision": "ffed854904acd5329a20eb3edaee8349"
  },
  {
    "url": "assets/js/5.1ef6d996.js",
    "revision": "51d158f975ade619e1b7e3ae810ca12c"
  },
  {
    "url": "assets/js/6.61e62206.js",
    "revision": "bfc409bb3c44a156750bf44aa1628f16"
  },
  {
    "url": "assets/js/7.df870bb8.js",
    "revision": "4e7c010b32862c63a46a6564d0573820"
  },
  {
    "url": "assets/js/8.aa4d7331.js",
    "revision": "740fbb79a1ac1923b3b73c9bb3448a6a"
  },
  {
    "url": "assets/js/9.a76b0826.js",
    "revision": "6cd461eb77c9b1ecc76f5faea32ea6e7"
  },
  {
    "url": "assets/js/app.8013c7a3.js",
    "revision": "b45a0715b710e2c48cb5e68d57f18f28"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "9684a52c14c80df96697f7f3d01ba72e"
  },
  {
    "url": "element/element2/index.html",
    "revision": "bf3ed2a671109fea91a33a39c394b7f5"
  },
  {
    "url": "element/index.html",
    "revision": "430aafbc68769f864fb089d8b517238d"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "5cfefaf524c4b561ea223e8837665587"
  },
  {
    "url": "java/index.html",
    "revision": "1a2a44dfbdf1aa68b4d7e2298e617fd7"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "4019eeeaf1268956c2eee408144b6a9a"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "5a39c098973f38848ef60997da5e6ddb"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "81b5417d26cde18bc73eee133f4b873b"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "cc5742953607e232d07287d3e6467634"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "8bdc78b8cea29737e963dff5f885ef15"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "7cc266432bc13dccd35ff0ae5db1ecec"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "5ff548195cda7de3b072bc354236e282"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "20c191e5a303f72fa0833f72a3551b7f"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "da85b7da753a2f2333b0f5662059dc5f"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "a15c73dfa46665d5ec80cd3ba5bc283d"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "f5ee4e7af688a3dc6e1e36ebd75491d5"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "d56cfa3d6be86492c8d932c66e7fdd72"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "2af252585e3d0a1b5652278957ed2e07"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "614e443d5b86f8547e575d7ffa1446f5"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "8255e148ac9d34bb116ece0ee85b6e3b"
  },
  {
    "url": "java/java2/index.html",
    "revision": "468c13ad0c87237efa1ebca52f2dea66"
  },
  {
    "url": "mysql/index.html",
    "revision": "7e50570c665ccd30b634b5f22b3668a0"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "5ab1ae8d5b19cf2ae4c3356b9ac56238"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "9c5a42e7d7a6f00d39055fe1f578d0ee"
  },
  {
    "url": "other/index.html",
    "revision": "5880c5004bdc2c33c4922fd474124698"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "92df2c3ed8c0cb0c39d5e11612bf77c2"
  },
  {
    "url": "vue/index.html",
    "revision": "2ec4b2222f4ea76943d926832b811678"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "3d92f4ad0c28a7e5892ad4a6f31f1c97"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "e87c1198455b18670608332e8d4de28a"
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
