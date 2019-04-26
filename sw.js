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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-33756ddc8d1833645eca.js"
  },
  {
    "url": "app-801fdc74e71da9007661.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4416548a8a89fd6c21f2.js"
  },
  {
    "url": "index.html",
    "revision": "11525c91f6a89500597b4918f76e1352"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "750dc0248ffa8f547b7d584b24214db4"
  },
  {
    "url": "styles.effb6d52f4575b702410.css"
  },
  {
    "url": "component---src-pages-index-js-e296ecfdd1cc7c880282.js"
  },
  {
    "url": "styles-85ea654cd70af1fb133d.js"
  },
  {
    "url": "2-9bd9c90abfaf7915891e.js"
  },
  {
    "url": "3-5da577b41ce068563b2b.js"
  },
  {
    "url": "1-7c642ad700fbba5e9a4f.js"
  },
  {
    "url": "static/d/140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8.json",
    "revision": "02094403799cfe9d216f51de06d00d63"
  },
  {
    "url": "component---src-pages-404-js-7c2c254db5658ecae7a8.js"
  },
  {
    "url": "static/d/285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8.json",
    "revision": "02094403799cfe9d216f51de06d00d63"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json",
    "revision": "e0f3b054b6dcf2c5a113801b73f75867"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c1d64e56823e5f57a7d30182ac1087f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});