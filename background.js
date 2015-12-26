/**
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 **/


/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('calculator.html', {
    id: "CalcTax",
    innerBounds: {
      width: 250,
      height: 350,
      minWidth: 250,
      minHeight: 350,
      maxWidth: 250,
      maxHeight: 350
    }
  });
});
