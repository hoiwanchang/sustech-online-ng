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
    "revision": "30eff1da38d3f619cf7a880387126215"
  },
  {
    "url": "about.html",
    "revision": "4922230a5a1c8b3a3f5cafb8c36912b6"
  },
  {
    "url": "assets/css/0.styles.1c298ec6.css",
    "revision": "79bea1e968d997dce3bac63e11a41dad"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/js/10.eba481c7.js",
    "revision": "4bae81f688b8b7a63cb04097600726e4"
  },
  {
    "url": "assets/js/11.3bf98fee.js",
    "revision": "124c360a5a05935ac5ddda51d3dc9fb7"
  },
  {
    "url": "assets/js/12.b341b64d.js",
    "revision": "0503b8c2d2321c69ec4736d178f553da"
  },
  {
    "url": "assets/js/13.dc3724a5.js",
    "revision": "f500618bc1adbe55537ff3f275797eed"
  },
  {
    "url": "assets/js/14.c4492fd5.js",
    "revision": "78e345e0bc5a6e01e2c741b34730508d"
  },
  {
    "url": "assets/js/15.8ee667a9.js",
    "revision": "dcc0041ff8cad3aec4dd2b4083227f97"
  },
  {
    "url": "assets/js/16.1f5b3bda.js",
    "revision": "67d9d753402655f588d2037a94d3f815"
  },
  {
    "url": "assets/js/17.1bc3a26c.js",
    "revision": "95bf3e35b5260af5b50edb1c1c0759f0"
  },
  {
    "url": "assets/js/18.6c2ce4f8.js",
    "revision": "616ef8d6c833796fb5f9b080e2817fb0"
  },
  {
    "url": "assets/js/19.2ec21d82.js",
    "revision": "1c56ae3a76cb83707b827cfe7aacefca"
  },
  {
    "url": "assets/js/2.2f3b95f7.js",
    "revision": "4f52adcc432bc1ffe0b11da9cd032ab9"
  },
  {
    "url": "assets/js/20.29477679.js",
    "revision": "b6c1f6ffc5ac81298d785435357c4089"
  },
  {
    "url": "assets/js/21.c7e48a09.js",
    "revision": "fddf0ed3d37ff63c01c3fa57330886aa"
  },
  {
    "url": "assets/js/22.6e548377.js",
    "revision": "36ddc4954ec54ed5adce4aedb4960c76"
  },
  {
    "url": "assets/js/23.c10ce862.js",
    "revision": "0374522ecbd0e0d4a67868c6edc5bbd7"
  },
  {
    "url": "assets/js/24.d6f41416.js",
    "revision": "65d60db98d9bb906e31d9216fefc6a27"
  },
  {
    "url": "assets/js/25.a2f48cdc.js",
    "revision": "a6a8d541228b2fdf345fdfbfb6a66481"
  },
  {
    "url": "assets/js/26.02334f2e.js",
    "revision": "fff0feb8d4f507e6b3cd5661c3f474ca"
  },
  {
    "url": "assets/js/27.3d9bef0c.js",
    "revision": "7a6ceb4be26a173e28f25c6e9511d8b3"
  },
  {
    "url": "assets/js/28.c66a3a95.js",
    "revision": "7cb90bd89e40d953356098b6d77cce03"
  },
  {
    "url": "assets/js/29.c23a155e.js",
    "revision": "67789f9178213037c402277b1e10206f"
  },
  {
    "url": "assets/js/3.7045d50d.js",
    "revision": "02b36aad21c3bf7859eed7563ff8fbfc"
  },
  {
    "url": "assets/js/30.8aad1559.js",
    "revision": "5c47007201b1d27a1ffb388011d9fc38"
  },
  {
    "url": "assets/js/31.82569b39.js",
    "revision": "04f9a2c8c834d7693bf605a657aa79a2"
  },
  {
    "url": "assets/js/4.7c9f02be.js",
    "revision": "cd6568ac3e9d48e76a499a8d58d7cbff"
  },
  {
    "url": "assets/js/5.a8046a47.js",
    "revision": "25bb2523340cee53f0fb66cbcca0da08"
  },
  {
    "url": "assets/js/6.9bfbd14c.js",
    "revision": "acc15f77713f569c8f11c8ba1ba745c4"
  },
  {
    "url": "assets/js/7.a9c12a7d.js",
    "revision": "f702e681356a882beff1e0bdb9a77774"
  },
  {
    "url": "assets/js/8.3bbc2b47.js",
    "revision": "69042431b8fa2bd7b47385b1f699b088"
  },
  {
    "url": "assets/js/9.254d4330.js",
    "revision": "ccf4f101a46bdc2b7a397701deeee071"
  },
  {
    "url": "assets/js/app.e12ee75a.js",
    "revision": "47e3b91b26ca0ded057425bee0258caf"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "8f9b7c19c8c42cc92268e848feb7198f"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "555239e89840f4801cdb2c341dfc2218"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "9dedccc665b40a0cb5b533210ecacc05"
  },
  {
    "url": "calendar/index.html",
    "revision": "0bea1e7c2b687c88b8fe69fa1c2d651a"
  },
  {
    "url": "catering/index.html",
    "revision": "9adc80d73cd3ccb4542019c289d1ae64"
  },
  {
    "url": "contact/index.html",
    "revision": "7fbf3cfc64c0684ea6fce9d8b48ca393"
  },
  {
    "url": "facility/index.html",
    "revision": "a74d5b3c650a22d657c48f7252aee9d8"
  },
  {
    "url": "facility/panolens.html",
    "revision": "f52e3c88dfc5c83c70bac5d0bb9cd292"
  },
  {
    "url": "index.html",
    "revision": "a7889c66544a52553529e88e719fd2b1"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "b26cca50e4c07d4a90f837e03bc3a9dc"
  },
  {
    "url": "network/apply-for-vpn/index.html",
    "revision": "3ab1954ec0760ce7eed11e0ee10778c3"
  },
  {
    "url": "network/index.html",
    "revision": "a06258b818a0464a5dd5f993d0f1e9bc"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "1279f59425b2090d7158b90b11464ae9"
  },
  {
    "url": "service/index.html",
    "revision": "b1381c9f07806eeaceb7004c597d9b71"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "ab19e3a351c1f55dd970b6b5ce04c192"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "66fbebf6fe19dc785375794aef57db3b"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "43e760576add5f2476506569a5ce0e30"
  },
  {
    "url": "site-help/index.html",
    "revision": "8296e18f3f353327cde1b83774f1b8cc"
  },
  {
    "url": "study-and-organization/index.html",
    "revision": "6d96d1af09bf9af74c59b945e5a3a49a"
  },
  {
    "url": "study-and-organization/registered-organization.html",
    "revision": "568b94e19a84cc9a8ffb9224abf78d20"
  },
  {
    "url": "surroundings/index.html",
    "revision": "1ae77eeb532e0d68f698d159f2750669"
  },
  {
    "url": "transport/holiday.html",
    "revision": "d8eda836834b5ccd453d0229e66a6e04"
  },
  {
    "url": "transport/index.html",
    "revision": "a6727b6cd17fa6ab3ed2c3e8f9807c74"
  },
  {
    "url": "transport/workday.html",
    "revision": "02d578a2a9b7b022f29ef87944bc4fe4"
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
