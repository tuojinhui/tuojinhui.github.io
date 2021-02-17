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
    "revision": "ff30aa235c3ed7e88e46086dd8015774"
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
    "url": "assets/js/22.dffc291c.js",
    "revision": "51afa1fd65d4dee5002ea5c9c2c06f3a"
  },
  {
    "url": "assets/js/23.9282c767.js",
    "revision": "4f1c0481d5bceef9266752759c314959"
  },
  {
    "url": "assets/js/24.0f6b4be3.js",
    "revision": "870d45421eb02a08dbbd6224abc8dcc0"
  },
  {
    "url": "assets/js/25.b06ab415.js",
    "revision": "70f2b3691df5f387acb3ec643c59f669"
  },
  {
    "url": "assets/js/26.92ff8f81.js",
    "revision": "8193fde84acdff757e53ac77a622b649"
  },
  {
    "url": "assets/js/27.8acebb86.js",
    "revision": "8c3b4f4ca114388f7a2397111a4af0a2"
  },
  {
    "url": "assets/js/28.5c6238cf.js",
    "revision": "3fe4dc51bdb76baf671645267f5132a2"
  },
  {
    "url": "assets/js/29.cb303746.js",
    "revision": "a3619500b74901d137023848d9bc16d8"
  },
  {
    "url": "assets/js/3.613d10c3.js",
    "revision": "7dbd09d72785357e7aa8f679a4e00220"
  },
  {
    "url": "assets/js/30.eb06eb19.js",
    "revision": "bf36ae4223c366bfef9e0e02135b7381"
  },
  {
    "url": "assets/js/31.1cffa4b5.js",
    "revision": "905237d044ad0a3cc9a8378989a48444"
  },
  {
    "url": "assets/js/32.c80bd51d.js",
    "revision": "d1ad83cdaac4f5e5565bcea7589099a1"
  },
  {
    "url": "assets/js/33.47766675.js",
    "revision": "5553a9a0f1d4657a53a4272d8256c6f5"
  },
  {
    "url": "assets/js/34.81597b5d.js",
    "revision": "6878b83d44d5c0fa22f40106e7ec5f42"
  },
  {
    "url": "assets/js/35.b1be9c3f.js",
    "revision": "306d5b5d68a8a7b2f6158fee64ccc663"
  },
  {
    "url": "assets/js/36.c5e5aefd.js",
    "revision": "49fa3a17785c4abb951b1ca49d29e7b5"
  },
  {
    "url": "assets/js/37.a04b0300.js",
    "revision": "9c4bddafc7be1b1529777c4a754e83ca"
  },
  {
    "url": "assets/js/38.b4a43399.js",
    "revision": "a1bb85dabab2bd89675a89de52122bc5"
  },
  {
    "url": "assets/js/39.fe046be0.js",
    "revision": "362b40e07359a17036bdfce6c878189a"
  },
  {
    "url": "assets/js/4.2468c312.js",
    "revision": "ffed854904acd5329a20eb3edaee8349"
  },
  {
    "url": "assets/js/40.fcdd7901.js",
    "revision": "f4fad009c434b4a0ceb0809030cf2786"
  },
  {
    "url": "assets/js/41.95c258c4.js",
    "revision": "cb2500c26830e0bfe2077f5435f667b2"
  },
  {
    "url": "assets/js/5.1ef6d996.js",
    "revision": "51d158f975ade619e1b7e3ae810ca12c"
  },
  {
    "url": "assets/js/6.13426184.js",
    "revision": "5be460fe924b18728205d2d16db775a9"
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
    "url": "assets/js/app.08afa8c7.js",
    "revision": "b94a001d52dcb7126eaadde6ea370e07"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "38a73b50c6d2ca306005aadf70ddeae4"
  },
  {
    "url": "element/element2/index.html",
    "revision": "97351d4199b592321e8dae508251f586"
  },
  {
    "url": "element/index.html",
    "revision": "42fd9f025753fa7c31baa81f53a580dc"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "e389bfde96be7568b05496ffe7ed155d"
  },
  {
    "url": "java/index.html",
    "revision": "70403daa9d82c7df1448c41e43175c88"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "909b9caa6c0914326039a421ff8c2035"
  },
  {
    "url": "java/java1/Enum.html",
    "revision": "3aa9c504b539e7eb69503792b82eb7cd"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "81dc10933c147075e635b42879fb8c08"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "7fdc09ef24407830761fb41f1c9fa620"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "9a785ed109e87beb9b905bdf53c33d2a"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "053f0063210be2dcc22bc4e180353e3e"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "d9b843eee98ae4ceaa0057990010e875"
  },
  {
    "url": "java/java1/MenuTree.html",
    "revision": "7dfcbca0d6dd04004c7e0987991ccaef"
  },
  {
    "url": "java/java1/Optional.html",
    "revision": "b9c40cbf5e0a01fe8deda5453e1b4c69"
  },
  {
    "url": "java/java1/RedBlackTree.html",
    "revision": "ac07b66fa0a32fbd4355518ec79cae11"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "f438fd2a1b3ea6556e21ab16b8bf3e2a"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "2058503e87dddc8f2791d9a92e7487e7"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "b0632a66bd2d1eb62ed8b62b21befbc0"
  },
  {
    "url": "java/java1/TaskExecutorConfig.html",
    "revision": "24ff369fcf94c966f736e8016dfabfba"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "925cbec3a23f29ba96bd1e6072b39e52"
  },
  {
    "url": "java/java1/TreeMap.html",
    "revision": "92b84680baf56c87908253833e38632e"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "85dc59eeb47d9098f4fdab8e50e1a128"
  },
  {
    "url": "java/java2/index.html",
    "revision": "44eed2dc6f3f345c7285bc715d28f139"
  },
  {
    "url": "mysql/index.html",
    "revision": "0ae9f377499387f81d71dd462e24edf2"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "ff33086a9f30bbf0c8d5d40e0fef9f7a"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "bc80d3accc9c95406956f5e6c317919e"
  },
  {
    "url": "other/index.html",
    "revision": "7fde8e5e2c41a22b23674665a8528f5b"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "ce68f52442682e0b2a6bdc045de569e0"
  },
  {
    "url": "vue/index.html",
    "revision": "7dca2fa89b35c0de023aa6c4922f8a08"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "28624810f3647de54e815fbad06d82ba"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "f295699a1455a27f4c959710379c6236"
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
