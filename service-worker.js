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
    "revision": "37f881d554d2ff81c86e7a5cf56fb657"
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
    "url": "assets/js/30.645bbcbc.js",
    "revision": "d1364b1e1d06454908f9a4c964c921e2"
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
    "url": "assets/js/35.88b868ea.js",
    "revision": "612431dc93ed2e4b21a20e887a87eef0"
  },
  {
    "url": "assets/js/36.0740d59d.js",
    "revision": "0e6f84fe6c325bb7841de70acfe66011"
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
    "url": "assets/js/app.83913291.js",
    "revision": "7df8bfb91e0dff9222fd8e637709fc73"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "38450005dc04edf2f5c3213e3a9b1133"
  },
  {
    "url": "element/element2/index.html",
    "revision": "a79a4b698da300fb3cf67f06d9c7180a"
  },
  {
    "url": "element/index.html",
    "revision": "687f04125984227594e38ac4a2aaf54b"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "837441d17fe3d4bb616f84a641242996"
  },
  {
    "url": "java/index.html",
    "revision": "d00b610b494812f1f1895f08d912496f"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "7edf2ba60f713d79e545cd0d9fc92626"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "c2e4d832b4dbf90a4d2dfdfe357eb173"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "d2c75d2e0e81a75db2e9d19072c77b80"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "febe7f4603e3a71d282a2791e82b1e44"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "ea9cab32f5ed9fd73449c7617b01ae76"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "e6835866927c05c61b4bc7f674914f29"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "d6541ba1c5c52ca22e79970d11ffbeee"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "d4e1a31fe6cbf94a6e6f5eb4e54646ae"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "f3c3e994acff481f5224ce8706cf891e"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "7084c7e09a8a078998f200efc62b7b4a"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "d61895d809b741a050080cddaad678c5"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "1cba4b70b200c02b32361c02d4c2222e"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "101f0165b54977a37773717c575124d1"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "de529a8765d969bb89040521fbd00629"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "383670c5dff7f244ddb484144b35bda9"
  },
  {
    "url": "java/java2/index.html",
    "revision": "3912c511bcdcabc61261288a30a2acc5"
  },
  {
    "url": "mysql/index.html",
    "revision": "1d9934e3d84c921f0d25fa445b1a9523"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "cca175044507f41071692b89d018d3e8"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "858f77a84633b88f7c45bc78109d24ad"
  },
  {
    "url": "other/index.html",
    "revision": "e1f940b488d170e4cbd5c20e1f31fe29"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "700f48ebdf3c120b9a471fb0b04538ba"
  },
  {
    "url": "vue/index.html",
    "revision": "dca223916ab792906494b98fcd86d4be"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "da6f1129b6767af4cb23825290ed5aa0"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "8f924f268c21b276be46bb7b9be2bb4e"
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
