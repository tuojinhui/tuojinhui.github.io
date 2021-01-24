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
    "revision": "35c8f90ee8500b4145d835e24c45f73b"
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
    "url": "assets/js/22.5d36cb8e.js",
    "revision": "d75e9d3ed5a0a12ebd3a4151c9626274"
  },
  {
    "url": "assets/js/23.73dc6eef.js",
    "revision": "330ac044f6aa7371d6f2afc8a5dc39c3"
  },
  {
    "url": "assets/js/24.0e911f02.js",
    "revision": "548bdcaee5594e3e5dd222679b5866e5"
  },
  {
    "url": "assets/js/25.e32c648c.js",
    "revision": "e53359b918ce51acb4092b23b425cb92"
  },
  {
    "url": "assets/js/26.fb8b485f.js",
    "revision": "2d4ffe1a34be2b706a3497db124da051"
  },
  {
    "url": "assets/js/27.bc595419.js",
    "revision": "f2755158cbbb482e9ace120f03765d29"
  },
  {
    "url": "assets/js/28.d2fdc4b7.js",
    "revision": "bf1a1200817a43f1d9aeb31645e0bb18"
  },
  {
    "url": "assets/js/29.3323911a.js",
    "revision": "cc547e513b251e5366bfb03657ef81cd"
  },
  {
    "url": "assets/js/3.613d10c3.js",
    "revision": "7dbd09d72785357e7aa8f679a4e00220"
  },
  {
    "url": "assets/js/30.b6f0b342.js",
    "revision": "abda54f04c4c041d8b0ecb26ba00e2ba"
  },
  {
    "url": "assets/js/31.64240178.js",
    "revision": "e12f08e8ff01c8d87b9ce17846a6abad"
  },
  {
    "url": "assets/js/32.c492b642.js",
    "revision": "47381a34f3289da348079a4dd27b1a37"
  },
  {
    "url": "assets/js/33.9c7fd51a.js",
    "revision": "b733a1009a994e2929f7408274a38b4b"
  },
  {
    "url": "assets/js/34.92405fc9.js",
    "revision": "b420e1fa7ded2e980973553133763e3f"
  },
  {
    "url": "assets/js/35.ba0d4bf2.js",
    "revision": "29f12d4ba47429dc8cc7073c517b1cca"
  },
  {
    "url": "assets/js/36.28250c4d.js",
    "revision": "13a91193943450fbde7a8ab486d8b0e8"
  },
  {
    "url": "assets/js/37.4d249c93.js",
    "revision": "5bda92b6bcd0b16d722d75f165eccc2b"
  },
  {
    "url": "assets/js/38.8f72118d.js",
    "revision": "14eef447ddeda69f81c5c8021c00db29"
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
    "url": "assets/js/6.270c91e5.js",
    "revision": "a6dedea4a32fc77cab72aef71d21c51f"
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
    "url": "assets/js/app.3815cf8a.js",
    "revision": "cac3de57243268485b88832f19429b10"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "22533e553b59f21d32ca9e53bb814c65"
  },
  {
    "url": "element/element2/index.html",
    "revision": "c39460ff2725307f9a0aa56f0162fe21"
  },
  {
    "url": "element/index.html",
    "revision": "063338f639f51eddafec29aff004b00e"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "f5f442b3e0f014f29bdc2fc507ab02f3"
  },
  {
    "url": "java/index.html",
    "revision": "8ab3da1760723ccb8a8b4edf2ef65cc1"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "f70b14dadf07fe22da0565a81afc66c4"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "c3228056a9525d2408f3cef1a33913de"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "abd0410410809420b9ee04aab814cf59"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "807b90998381149689df4bc3ffb6832d"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "55354089143c519d5c27bdfea01e4bfc"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "6acb47be3d9a580d815bf9b00a6955eb"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "2e12a869ed67abbf318f20f759bcfea6"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "71362d556c197c0e9d7c4661ada6420e"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "a269ee964a608b627cd503a3c96abffe"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "1d8548eb3c1f4556358561f7cf48d12a"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "c40007b0aa6316b2a77e509933a346c0"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "220d0f6f37e094d8c0d75574d3ec84f7"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "a1c4b24cb6e6a5bedea581cb4c099192"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "ed31ac0781608c6745e7ccb0c44f718c"
  },
  {
    "url": "java/java2/index.html",
    "revision": "a7f00fe3cf7bb5fb421c14bd4de7d187"
  },
  {
    "url": "mysql/index.html",
    "revision": "b69497e993b4366e22ecaa0c4233997d"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "b949705643b0cb0586d6972023a604e7"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "020301006239af650c1653de5764e917"
  },
  {
    "url": "other/index.html",
    "revision": "ec6f8e092622105156eea9be728e5faf"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "15023e8863a8e97ea95bfa23443e4e6f"
  },
  {
    "url": "vue/index.html",
    "revision": "be7114c9e4965a96d8666883b43a3828"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "59b5bc99806a9ba06779981db96f8f1e"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "dea16fba9326347ef7cb244924f00ad4"
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
