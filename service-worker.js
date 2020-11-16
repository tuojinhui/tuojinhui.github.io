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
    "revision": "4a5d420bb05ece00ac8e3ecb7af0d878"
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
    "url": "assets/js/10.80d3f854.js",
    "revision": "f0ac21d334545c91c1b9217ba2b8d6a3"
  },
  {
    "url": "assets/js/11.f3557921.js",
    "revision": "eef769c036d2c084acb4191cbe17bdb7"
  },
  {
    "url": "assets/js/12.1f105204.js",
    "revision": "c4b410454084847665aac8fb7516aff6"
  },
  {
    "url": "assets/js/13.175a7632.js",
    "revision": "c9a1fc65fd7c188e1f04fef479110337"
  },
  {
    "url": "assets/js/14.450e3bb7.js",
    "revision": "6b089fadb8758d22990f6e5e6a17b55e"
  },
  {
    "url": "assets/js/15.3c2e8747.js",
    "revision": "8bf5c55daf84da5ecd3c05fbeeec3454"
  },
  {
    "url": "assets/js/16.baf89572.js",
    "revision": "da9b3693f900f47ea1da9e9dc9148826"
  },
  {
    "url": "assets/js/17.1e7a8db4.js",
    "revision": "15bd19b2679f524fa1afa51b7a7ae2e2"
  },
  {
    "url": "assets/js/18.1cb50de2.js",
    "revision": "f343197859a6d9c548b2f10812ee51d5"
  },
  {
    "url": "assets/js/19.e97509e4.js",
    "revision": "48902a79177f86457efdc3d5ac07ab2d"
  },
  {
    "url": "assets/js/2.f8b112bb.js",
    "revision": "d4f1dffd4d91cf040bd6852f9fb13bf8"
  },
  {
    "url": "assets/js/20.b748ea43.js",
    "revision": "fc151754d3aca5188a19cdea5f454147"
  },
  {
    "url": "assets/js/21.9b5b0600.js",
    "revision": "7f49b9b78c2d378e4cba0daf484d1cc5"
  },
  {
    "url": "assets/js/22.009413a0.js",
    "revision": "20ec09cf2662f9b2fc444bf340fc8e63"
  },
  {
    "url": "assets/js/23.1bf427af.js",
    "revision": "e16ed3af5e557f194fe8c80073b72974"
  },
  {
    "url": "assets/js/24.0f838f6f.js",
    "revision": "bb741ad70fd083cee3fe351cb1f0fdef"
  },
  {
    "url": "assets/js/25.aaa6789e.js",
    "revision": "23842b3e40903aa2311fd89dec9aaea8"
  },
  {
    "url": "assets/js/26.415a14ea.js",
    "revision": "294bd06c583501254f989151b635e31b"
  },
  {
    "url": "assets/js/27.6483751a.js",
    "revision": "6cde5f0bc26b3e355b65d8e1bf0d13a0"
  },
  {
    "url": "assets/js/28.a3853f07.js",
    "revision": "f8e9e17c5644e179066ff9841a69970a"
  },
  {
    "url": "assets/js/29.200b1830.js",
    "revision": "65da037205efce69f1fbb2b7e84b489f"
  },
  {
    "url": "assets/js/3.7a781a4f.js",
    "revision": "acdc69c1c4fcc81c019fb04c2ec7fbb7"
  },
  {
    "url": "assets/js/30.dd099ee0.js",
    "revision": "e2368a01f2b70707b16f176832489fbc"
  },
  {
    "url": "assets/js/31.0693b7e8.js",
    "revision": "8d3d55369952cd26aca7b0a8b35d751c"
  },
  {
    "url": "assets/js/32.d9c9e966.js",
    "revision": "05acfa251a4f8c180bff3ebbba6c202d"
  },
  {
    "url": "assets/js/4.4152d5ff.js",
    "revision": "e3df1a766be9bf33b3a40d99b38c07b3"
  },
  {
    "url": "assets/js/5.94a8d57e.js",
    "revision": "48b06a78ac07e4e9544389d892e3ae69"
  },
  {
    "url": "assets/js/6.174d13b5.js",
    "revision": "e269599725710b59f02cf1c1597ad0f0"
  },
  {
    "url": "assets/js/7.4ff95929.js",
    "revision": "7a0d896587ff2f78c36a4a36a02ecfa2"
  },
  {
    "url": "assets/js/8.25791c08.js",
    "revision": "f0d9f601d39263a7880e06bb76f8d917"
  },
  {
    "url": "assets/js/9.116148d7.js",
    "revision": "fe7ea1d4b2c887ed18751d1438ca6c5d"
  },
  {
    "url": "assets/js/app.c85b3c56.js",
    "revision": "98b839923a74adc9d8e0d0e3b4fe754b"
  },
  {
    "url": "css/scrollbar.css",
    "revision": "96389065241eedda7bc61630b180ea6f"
  },
  {
    "url": "element/element1/index.html",
    "revision": "f12890fbe7487a5aaab579be74ba56ba"
  },
  {
    "url": "element/element2/index.html",
    "revision": "74d27e9966cf6378ccf38b68d580646f"
  },
  {
    "url": "element/index.html",
    "revision": "6cb28a3e3a6b6a83273f9e66beab8c24"
  },
  {
    "url": "image/java8.jpg",
    "revision": "b45f1c34c9c2ea08bdca8e374c0c8093"
  },
  {
    "url": "index.html",
    "revision": "6f4c2a368656bcd149c70a7acf1015a6"
  },
  {
    "url": "java/index.html",
    "revision": "868452ef4533552728bdc6db92c8860f"
  },
  {
    "url": "java/java1/BigDecimals.html",
    "revision": "2fc830e28063a29e5000a83b60c3808e"
  },
  {
    "url": "java/java1/Executors.html",
    "revision": "d557bf9cdde74f38c474faf195d4d146"
  },
  {
    "url": "java/java1/Feature.html",
    "revision": "9d19d61dc61fb475c18d2e3885af0414"
  },
  {
    "url": "java/java1/Filter.html",
    "revision": "734de110cc0c7b81ff9db2114f281432"
  },
  {
    "url": "java/java1/knowledge.html",
    "revision": "bdc8e8924896a4fa3a63472626493270"
  },
  {
    "url": "java/java1/LocalDataSourceConfig.html",
    "revision": "1ddfac018c873a78065d5680e4b8f077"
  },
  {
    "url": "java/java1/RedisKeyExpirationListener.html",
    "revision": "9b00f2dd1e157f790e6ade4abe90d0a2"
  },
  {
    "url": "java/java1/Retry.html",
    "revision": "68f21f61c1d6e291af087d81aa183a24"
  },
  {
    "url": "java/java1/SpringSourceCode.html",
    "revision": "42cc1f481c69f5c15d4b4a649bc37a44"
  },
  {
    "url": "java/java1/ThrowableInterceptConfig.html",
    "revision": "bb4890c771f0418dd87d478135e418a2"
  },
  {
    "url": "java/java1/XssHttpServletRequestWrapper.html",
    "revision": "ba15061e00f2e314832890e89f08afb5"
  },
  {
    "url": "java/java2/index.html",
    "revision": "6e7d7822bc2a1bbcdebf831150e0367b"
  },
  {
    "url": "mysql/index.html",
    "revision": "e0def063730d27245cbba1fe34670d48"
  },
  {
    "url": "mysql/mysql1/index.html",
    "revision": "de41153da1eef99bd6474942ac5b4610"
  },
  {
    "url": "mysql/mysql2/index.html",
    "revision": "6269b2fc0b63c1d9a696004339fd4512"
  },
  {
    "url": "vue/index.html",
    "revision": "a54f8fc8114b661622aa86dfdf1b1d24"
  },
  {
    "url": "vue/vue1/index.html",
    "revision": "a05228db3532cef7bb7d83158092a412"
  },
  {
    "url": "vue/vue2/index.html",
    "revision": "4cf0caadc986cd8d492f4bda453a7975"
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
