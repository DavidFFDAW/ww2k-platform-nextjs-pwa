if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>c(e,a),r={module:{uri:a},exports:t,require:o};s[a]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f72a7da992a80a06343817c9f1c34c38"},{url:"/_next/static/chunks/159.e98a3e283a32267d.js",revision:"e98a3e283a32267d"},{url:"/_next/static/chunks/17-f2d707dd60cbbe95.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/chunks/36.7702f70c14ee56b5.js",revision:"7702f70c14ee56b5"},{url:"/_next/static/chunks/617.b448e3255c16c13c.js",revision:"b448e3255c16c13c"},{url:"/_next/static/chunks/app/head-fbf0b755a1944d43.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/chunks/app/layout-5cbbe8d441f8ffaf.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/chunks/app/page-02825fcf235b2705.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/chunks/main-22a88eb7a03dfe04.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/chunks/main-app-5a87b3108610e8dc.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-99a9249a6bd47d94.js",revision:"uwhG6ob_YsSEZTuJ8FZcc"},{url:"/_next/static/css/17f0d613640b4042.css",revision:"17f0d613640b4042"},{url:"/_next/static/css/876d048b5dab7c28.css",revision:"876d048b5dab7c28"},{url:"/_next/static/css/94e3f5b801358148.css",revision:"94e3f5b801358148"},{url:"/_next/static/media/2aaf0723e720e8b9.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/uwhG6ob_YsSEZTuJ8FZcc/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/uwhG6ob_YsSEZTuJ8FZcc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/icon-128x128.png",revision:"ebe07929fcdbae07545af0f12afca396"},{url:"/icons/icon-144x144.png",revision:"3a5dadf32ff89382768d77d077dae538"},{url:"/icons/icon-152x152.png",revision:"14e06f7822cce52a91090e0f60756659"},{url:"/icons/icon-192x192.png",revision:"ddaf97964305419f1c3296a960e82ee7"},{url:"/icons/icon-384x384.png",revision:"83f66c74db45b7f99983ecc622ad99f8"},{url:"/icons/icon-512x512.png",revision:"f0073d0d0be85d87e83cc1626f6e32d6"},{url:"/icons/icon-72x72.png",revision:"2ed60ffd0cb5be13d9c28f2f98a23019"},{url:"/icons/icon-96x96.png",revision:"d6e7017dfe07bb974b35a52dcf0c842e"},{url:"/manifest.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/manifest.webmanifest.json",revision:"761718d1efef690435aa9ef5f52d24f8"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"/wallpaper.jpeg",revision:"b2e90f70e84a15214a939d64f0cf8355"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
