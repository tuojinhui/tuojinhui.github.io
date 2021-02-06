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
    "revision": "b46665e0a1c8f310200d4c5252a3df7f"
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
    "url": "assets/js/13.1327a793.js",
    "revision": "461c75f465d8d1ffc8a7561d6bf3c968"
  },
  {
    "url": "assets/js/14.741986e9.js",
    "revision": "3890c448e51cc498f90bb7b693a6592c"
  },
  {
    "url": "assets/js/15.1b75d1ec.js",
    "revision": "29f3ef14512720025cd10cd7b84e3079"
  },
  {
    "url": "assets/js/16.5d1d3ad0.js",
    "revision": "cced0b2b04582aecab20a8ae914720d5"
  },
  {
    "url": "assets/js/17.ec726492.js",
    "revision": "5eddf9246ccdf7148b4b108fa3cf15fd"
  },
  {
    "url": "assets/js/18.f80ce871.js",
    "revision": "f4aed77f9ee2148596185bfea27d2454"
  },
  {
    "url": "assets/js/19.fdc21000.js",
    "revision": "0b6e4b66ed06c84b0eb971f34f6fde6c"
  },
  {
    "url": "assets/js/2.7fcf7245.js",
    "revision": "e3d646246a721be5fb651bc33b115538"
  },
  {
    "url": "assets/js/20.2c15e8ca.js",
    "revision": "dd00a019937681648cc7f6c15bcc40e0"
  },
  {
    "url": "assets/js/21.4c6fff05.js",
    "revision": "fc8444f768fd80fc7c35501f8cb9273b"
  },
  {
    "url": "assets/js/22.a0e0d886.js",
    "revision": "eca6c62649de5bf49263e4210ec6baa8"
  },
  {
    "url": "assets/js/23.47193c70.js",
    "revision": "a94a6192d8aab96635293749c0153eb7"
  },
  {
    "url": "assets/js/24.58d28bcb.js",
    "revision": "6510f37c835cfdde61b82d46f131225e"
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
    "url": "assets/js/9.d78e45fb.js",
    "revision": "7aa81498150806746770cd0936b72177"
  },
  {
    "url": "assets/js/app.f3cc219e.js",
    "revision": "70d30836aa9c46df45ab7283aecc2d7c"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "bb6005a67546fb883498d507630247b8"
  },
  {
    "url": "element/element2/index.html",
    "revision": "1ff64f87886ca4e9c80755f98d5592c4"
  },
  {
    "url": "element/index.html",
    "revision": "60160d65647bde04b9797d3e95c33395"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "5496e8f66ddfda39d2097c4e0b76dfea"
  },
  {
    "url": "java/index.html",
    "revision": "7db1b35ab003fc4622332b20078ec7f9"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "216a7e6b0d42887c33d998138f9ca6ac"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "83c4ba93e6e4f8ccaf63e4e03979d28a"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "4c30f3cb50778fcba26313eca8b87b78"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "2498ca0337598785f0f4ffea5c2c79f2"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "a4c1f9106990b615859f6c676b3e4a43"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "86d6c0df17aa884ced55b62f10b5e37e"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "029791464cbdbce8ac7c777803b80d6b"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "7bc2d246cb45067b4f04a09f15f934b9"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "0a2e50c97bd27ddad1981e138cecd367"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "6244f61dec5bf5426f1a5a301cb27b95"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "5da22abfc199bbeadd785d4449f92145"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "212e9fc22f6e26c4c63b1f9d683d7350"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "ecdeaedfa39cffbcdc7a977e388b7e91"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "78ea6cffd58cd41ae671ec0d11273472"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "8199ea675ec437b23c55f3ec565ea209"
  },
  {
    "url": "java/java2/index.html",
    "revision": "53a68ff633749f3b2b853085fe1b1bbd"
  },
  {
    "url": "mysql/index.html",
    "revision": "07636555375d85b09c5e044cd59a9913"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "f7b1d390e2f2d42582d53a51d172072a"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "8de1ef2aef296784474be5b38c4d2565"
  },
  {
    "url": "other/index.html",
    "revision": "52abc17b6dc461804436598233ee8dbd"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "eed6b74c1ba0bfffac49bbec274bc864"
  },
  {
    "url": "vue/index.html",
    "revision": "678785b4383612db9675670a54f36a6b"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "0c6f5c48200f1724e0d60b60342bba47"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "a9c2bc4c4ad5d15f7397c8c993d8b3ca"
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
