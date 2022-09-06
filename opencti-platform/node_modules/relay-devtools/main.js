module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 790);
/******/ })
/************************************************************************/
/******/ ({

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var path = __webpack_require__(785);
var url = __webpack_require__(786);

var _require = __webpack_require__(783),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

app.setName('Relay DevTools');
app.dock.setIcon(path.join(__dirname, 'imgs/logo.png'));

var mainWindow = void 0;

// Insist on a single instance of the app, since it runs a ws server.
var isDupe = app.makeSingleInstance(function () {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }
    mainWindow.show();
    mainWindow.focus();
  }
});

if (isDupe) {
  app.quit();
}

app.once('window-all-closed', function () {
  app.quit();
});

app.once('ready', function () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'Relay DevTools',
    icon: path.join(__dirname, 'imgs/logo.png')
  });

  var appUrl = url.format({
    protocol: 'file',
    slashes: true,
    pathname: path.join(__dirname, 'app.html')
  });

  // Load the app entry point.
  mainWindow.loadURL(appUrl);

  // Emitted when the window is closed.
  mainWindow.once('closed', function () {
    mainWindow = null;
  });
});

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(284);


/***/ })

/******/ });