if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("worker-7xDouvcBXSGYQ-eZ7Af2Y.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7xDouvcBXSGYQ-eZ7Af2Y/_buildManifest.js",revision:"22da3f6a15429326f1ade42303d6985b"},{url:"/_next/static/7xDouvcBXSGYQ-eZ7Af2Y/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-ae5402f46aa9d597.js",revision:"ae5402f46aa9d597"},{url:"/_next/static/chunks/252f366e-049cdb37ad7f10c7.js",revision:"049cdb37ad7f10c7"},{url:"/_next/static/chunks/378-3334980765286c8c.js",revision:"3334980765286c8c"},{url:"/_next/static/chunks/545f34e4-e97f18665ff3f702.js",revision:"e97f18665ff3f702"},{url:"/_next/static/chunks/675-b73f41980c39ec6a.js",revision:"b73f41980c39ec6a"},{url:"/_next/static/chunks/78e521c3-96497789681a43a2.js",revision:"96497789681a43a2"},{url:"/_next/static/chunks/d0447323-b970bcf60294e9d9.js",revision:"b970bcf60294e9d9"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-d410565154d1e735.js",revision:"d410565154d1e735"},{url:"/_next/static/chunks/pages/_app-68fd65cd7d2742ce.js",revision:"68fd65cd7d2742ce"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/admin-13741f82991b4ad8.js",revision:"13741f82991b4ad8"},{url:"/_next/static/chunks/pages/admin/posts-d6ef3125a194ac6c.js",revision:"d6ef3125a194ac6c"},{url:"/_next/static/chunks/pages/auth/login-479504b440cf596f.js",revision:"479504b440cf596f"},{url:"/_next/static/chunks/pages/blog-a57b541604228924.js",revision:"a57b541604228924"},{url:"/_next/static/chunks/pages/index-1f697a2d16ee5146.js",revision:"1f697a2d16ee5146"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/bde20b521a294134.css",revision:"bde20b521a294134"},{url:"/favicon.ico",revision:"9e4f80b6224b3c702d3e4fb22159527d"},{url:"/icons/android-chrome-192x192.png",revision:"ddaf97964305419f1c3296a960e82ee7"},{url:"/icons/apple-touch-icon.png",revision:"14e06f7822cce52a91090e0f60756659"},{url:"/icons/icon-128x128.png",revision:"ebe07929fcdbae07545af0f12afca396"},{url:"/icons/icon-144x144.png",revision:"3a5dadf32ff89382768d77d077dae538"},{url:"/icons/icon-152x152.png",revision:"14e06f7822cce52a91090e0f60756659"},{url:"/icons/icon-192x192.png",revision:"ddaf97964305419f1c3296a960e82ee7"},{url:"/icons/icon-384x384.png",revision:"83f66c74db45b7f99983ecc622ad99f8"},{url:"/icons/icon-512x512.png",revision:"93f275700fdae27b4cdc2e248a2ad4b9"},{url:"/icons/icon-72x72.png",revision:"2ed60ffd0cb5be13d9c28f2f98a23019"},{url:"/icons/icon-96x96.png",revision:"d6e7017dfe07bb974b35a52dcf0c842e"},{url:"/manifest.json",revision:"f1c79be086d11c7c0280b707da62c3eb"},{url:"/manifest.webmanifest.json",revision:"c89286357471079c5d5e22402e19bc2c"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"/wallpaper.jpeg",revision:"b2e90f70e84a15214a939d64f0cf8355"},{url:"/wlp-admn.jpg",revision:"5e2cb08a89eb200f4051f7ae9ea3ea58"},{url:"/wlp2.jpg",revision:"089f0186bef30ef16e9245b72d0d8872"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
