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
    "revision": "726752c9af740322bcb72c963aa73fd8"
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
    "url": "assets/js/10.9d0d970f.js",
    "revision": "52e4f69c8403b8e60a05d701a29513a4"
  },
  {
    "url": "assets/js/11.f854ac87.js",
    "revision": "8665a80bb5119e1ca9611682058011f7"
  },
  {
    "url": "assets/js/12.31113e91.js",
    "revision": "f4cd8d7f50cea99dcfc335f505f484f8"
  },
  {
    "url": "assets/js/13.60a59c4c.js",
    "revision": "3200a54cd84540564ca4ce2f20f9bb41"
  },
  {
    "url": "assets/js/14.56f00c64.js",
    "revision": "637583793cdfcbd4eb7a07f5ac769ced"
  },
  {
    "url": "assets/js/15.e8288b08.js",
    "revision": "93255b8d9c34c6e193a38fd6c3bbecbd"
  },
  {
    "url": "assets/js/16.3dea4ae6.js",
    "revision": "9c6e874f214814c3f2e3ff994b126fa1"
  },
  {
    "url": "assets/js/17.adf4f283.js",
    "revision": "aa699e1dcf7e8a850dc882525292d8d3"
  },
  {
    "url": "assets/js/18.03f46bea.js",
    "revision": "e2655f34fd4fca002e289adc350b5ce4"
  },
  {
    "url": "assets/js/19.8d5126ba.js",
    "revision": "60f46dc3d387fb37f8ceadc85d7c92db"
  },
  {
    "url": "assets/js/2.9af4986e.js",
    "revision": "67ed56c480a2072debf7fe9bb5941b20"
  },
  {
    "url": "assets/js/20.de7275c3.js",
    "revision": "5b25064459da084acf7308156af6f3c9"
  },
  {
    "url": "assets/js/21.1f526455.js",
    "revision": "77200949edc56df68a080c3211406646"
  },
  {
    "url": "assets/js/22.82953b27.js",
    "revision": "c9d8c57f73b11c240df5d7e77685903b"
  },
  {
    "url": "assets/js/23.6c940ca9.js",
    "revision": "7d39b04845096ff6c7164edc9869fd87"
  },
  {
    "url": "assets/js/24.eeb02ee9.js",
    "revision": "e0a28f349e1fec17f1ca62314cde3b01"
  },
  {
    "url": "assets/js/25.2c9012b6.js",
    "revision": "10467b98a148eb9c7d9bca6d758ddaed"
  },
  {
    "url": "assets/js/26.7ab15fd5.js",
    "revision": "68634d0033dea89a1c2cb664cb97ca5f"
  },
  {
    "url": "assets/js/27.44fa171c.js",
    "revision": "fc85eebd05acb9d147235d56ed010b62"
  },
  {
    "url": "assets/js/28.739b0f7d.js",
    "revision": "9d1ee75c7d389f733517d904207ba995"
  },
  {
    "url": "assets/js/29.38a5f779.js",
    "revision": "1f1a707c6add5251646a72ffda909172"
  },
  {
    "url": "assets/js/3.845e4700.js",
    "revision": "ba41c09d35a338a072657ba01ed1d3c8"
  },
  {
    "url": "assets/js/30.67937dc0.js",
    "revision": "85ac2cc899186bf1a37477afade76c5e"
  },
  {
    "url": "assets/js/31.b0aabac9.js",
    "revision": "693b40f85c319ec621e7a018a3ae8ad6"
  },
  {
    "url": "assets/js/32.772c7283.js",
    "revision": "327074d5d92372154800cb2073c62362"
  },
  {
    "url": "assets/js/33.5e5828bc.js",
    "revision": "2f3418b7d97273e7e7b4d83e38ac1e76"
  },
  {
    "url": "assets/js/34.1a529719.js",
    "revision": "0867f898dfcda8ba4be4269b1d03da61"
  },
  {
    "url": "assets/js/35.0a9d5870.js",
    "revision": "8b21ab28755c9ea1762849dfdf432e3b"
  },
  {
    "url": "assets/js/4.a57b285d.js",
    "revision": "52653d16fafe1abd59642f08652475e9"
  },
  {
    "url": "assets/js/5.af2001f3.js",
    "revision": "1d19d031beefd77eb12c218c87c89bce"
  },
  {
    "url": "assets/js/6.007d358e.js",
    "revision": "efa6185ae23e109b89b62bb88ea280af"
  },
  {
    "url": "assets/js/7.0ac97f17.js",
    "revision": "0f9cea348e6b9cd1d9f5cb3496b4877a"
  },
  {
    "url": "assets/js/8.e013b273.js",
    "revision": "ec7b5a8df41a7fcfd3cf3efbf99aade1"
  },
  {
    "url": "assets/js/9.a7384414.js",
    "revision": "7db416b6f6b2e1ba6396325809f592e9"
  },
  {
    "url": "assets/js/app.8a48bf46.js",
    "revision": "0fe67d03a74534e0b6097e1ea1f227e7"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "77a37d94bb92c798c2d14589a1faa179"
  },
  {
    "url": "element/element2/index.html",
    "revision": "eb1ed03eaea16f2e6f20ff8f8aa64dcf"
  },
  {
    "url": "element/index.html",
    "revision": "8704cefad155972da043ce19cde7042c"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "3eb3c96d9f5e9f5ff74693349640cce4"
  },
  {
    "url": "java/index.html",
    "revision": "e6e79951cee80c1ddc2a8aac634db46d"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "b145a21d0153a3d5f0304360fcc7560b"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "5b48ebc3fad7e35989831fdb8e4e57f3"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "022c10453afafb4e760167a10b5d3b17"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "3a9be0a16d4c35d5908df1744b07458d"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "a0be42fc24e991add690ce027283e142"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "56ae540e64fafa76ec34112042af05ae"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "07d2746d046fd05b5a836ca675f977a9"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "b32c3681c23c80ca1bac6c4cdeecec0b"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "8ac07a7241176f7276bf74ab39bfd9ec"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "892dc6c9de084f5d0eaea84f2827c913"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "071addc86d716e3a7506574f7e9a1108"
  },
  {
    "url": "java/java2/index.html",
    "revision": "8a89a05a8095fc473bb21b0321e83f9c"
  },
  {
    "url": "mysql/index.html",
    "revision": "0d804b4d8ba1e320df3178fb3dafabda"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "4bd3ae4c3eba16c98900c68f23ab5a3a"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "56eb2990449c3a044be10dc7c35b2102"
  },
  {
    "url": "other/index.html",
    "revision": "c43312bff3139298aca0d62860795e13"
  },
  {
    "url": "other/nginx/nginx.html",
    "revision": "2c7f9d149b949f116c788ac336e92fcb"
  },
  {
    "url": "vue/index.html",
    "revision": "4cbe34d801aaa08954c0d4fef1a4064d"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "29589690e759772e52163f084956c112"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "799af3e6886445962d896a241f9647b0"
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
