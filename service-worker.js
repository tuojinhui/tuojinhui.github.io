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
    "revision": "6f5b5045b533a3a73050abbfaf301df3"
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
    "url": "assets/js/16.1d4df6e7.js",
    "revision": "2d3deb66b1e31c48b7d23135ec0c124e"
  },
  {
    "url": "assets/js/17.ec726492.js",
    "revision": "5eddf9246ccdf7148b4b108fa3cf15fd"
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
    "url": "assets/js/app.78a02cb3.js",
    "revision": "0a933f475b9c819aaca4b841f8f15103"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "9aabbed3d6fe0e02de027a735850ba9e"
  },
  {
    "url": "element/element2/index.html",
    "revision": "aae7d2f46184f0097072600a37ce8079"
  },
  {
    "url": "element/index.html",
    "revision": "4cbac0075718b38222044b14f838067d"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "2ec45730742a6cc1652035b1e92548ff"
  },
  {
    "url": "java/index.html",
    "revision": "2f082234f650c7c249aca2db0f3c6ff6"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "e91ee0e82f340e0eca805f74b09984d0"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "0e47b657fde53014a89e65d2fb52a4d4"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "95d4d5fae88f2ebc9fd1cc7c6e27b502"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "2c4461bbdd435deeb0ce12842eeb3a09"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "cfb043a7c6b8056f8515276dc5e803fc"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "e51f7467de93a54e01b51a7a9efbd991"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "cbdf6c02330774481d9bc22338438ebe"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "851553a0486d3fb186863e06437cc965"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "0ba66cfd318e095dbbf9d89a2a11f3a5"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "3804d266269e2874c2c299de8bd01d2d"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "7c9f25cf76943e10ace4ca1869a5eaed"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "f05108f84021c577753cdfb35b78bd35"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "8dd2a34e0a9da83b6a807649ed37c5fd"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "4197de586fc87f1b4052c88e64c63860"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "5b5227291dc40d351a640eb03ad60f25"
  },
  {
    "url": "java/java2/index.html",
    "revision": "3bd9a59bd4701e81526c63ceaadd1be8"
  },
  {
    "url": "mysql/index.html",
    "revision": "3d622d8cb37197c8cf5ab8fd30f18ef6"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "1b08d8eff3f730c3c66a82c5566e92ab"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "36738dac33c930d057cfc57811832ca6"
  },
  {
    "url": "other/index.html",
    "revision": "20d5916441ab1c4226736c834c9087d0"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "4ddb758aa40b1e35644f4a492b588fbd"
  },
  {
    "url": "vue/index.html",
    "revision": "79668d6c65a43b8bc7f14e24793be42f"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "30e9cfa432cecc642f204e4b784fd595"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "989912d348801c047fe534acc8a544fd"
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
