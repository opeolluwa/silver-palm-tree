/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3589c0c5'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/AllEmailView.6a397453.css",
    "revision": null
  }, {
    "url": "assets/AllEmailView.c1bb380f.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.1a2fe560.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5c78dd7a.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.1ceb7517.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.d8a000c5.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.b58f9d81.js",
    "revision": null
  }, {
    "url": "assets/AppModal.8343d420.css",
    "revision": null
  }, {
    "url": "assets/AppModal.8bb3523b.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2be742d1.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.7782dfee.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.e6bea473.css",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.fb50281c.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.ff2ac5c4.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.22d9834f.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.7a36fab9.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.1748d5d7.js",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.dcd9f8dd.css",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.313a0094.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.8f768f3e.js",
    "revision": null
  }, {
    "url": "assets/index.178d1826.css",
    "revision": null
  }, {
    "url": "assets/index.79959ad7.js",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/notes.38063ce3.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.9a6bfdce.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.25101350.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotificationView.5df79c27.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.70c52c29.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.c4ec40f1.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.5a24bb36.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.89d60941.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.47312c78.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.474e6fb0.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.f1ec760e.js",
    "revision": null
  }, {
    "url": "assets/SignupView.53b2d109.js",
    "revision": null
  }, {
    "url": "assets/SignupView.6c5aebe7.css",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.f2755a0d.js",
    "revision": null
  }, {
    "url": "assets/style.5aa240b0.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/tasks.d14a67d0.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.39663ef1.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.c006e7c5.css",
    "revision": null
  }, {
    "url": "assets/UpdateNote.cf2f311d.js",
    "revision": null
  }, {
    "url": "assets/ViewNote.217e3269.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.80f3c53a.js",
    "revision": null
  }, {
    "url": "assets/web.c7d26e49.js",
    "revision": null
  }, {
    "url": "assets/web.cf0bbfbe.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "72867350f83acd5dc340cfc89a7a2fc3"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "manifest.webmanifest",
    "revision": "2278a49869c66e44212511dd80370d3c"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));