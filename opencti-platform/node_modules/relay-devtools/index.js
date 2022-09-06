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
/******/ 	return __webpack_require__(__webpack_require__.s = 789);
/******/ })
/************************************************************************/
/******/ ({

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// A transport for sending and listening for messages over the bridge.

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Ensure every call can be associated with call resolution using a nonce.
var nonceCounter = 0;

// Polyfill requestIdleCallback


// https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline


// The types of messages which are sent over the bridge.
var lastRunTime = 50;
var performanceNow = (typeof performance === 'undefined' ? 'undefined' : _typeof(performance)) === 'object' ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
var cancelIdle = typeof cancelIdleCallback === 'function' ? cancelIdleCallback : clearTimeout;
var requestIdle = typeof requestIdleCallback === 'function' ? requestIdleCallback : function (cb) {
  // Custom polyfill that runs the queue with a backoff.
  // If you change it, make sure it behaves reasonably well in Firefox.
  // Magic numbers determined by tweaking in Firefox.
  // There is no special meaning to them.
  return setTimeout(function () {
    var startTime = performanceNow();
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        // Upper limit of 50ms
        return startTime + 50 - performanceNow();
      }
    });
    lastRunTime = performanceNow() - startTime;
  }, Math.min(500, 3 * lastRunTime));
};

/**
 * Bridge:
 *
 * Responsible for serializing and sending messages between the Agent
 * (browser-side) and Frontend (console-side).
 *
 * It must be constructed with a BridgeTransport which can send serializable
 * data to the Bridge on the other side.
 */

var Bridge = function () {
  function Bridge(transport) {
    var _this = this;

    _classCallCheck(this, Bridge);

    this._transport = transport;
    this._incomingBuffer = [];
    this._outgoingBuffer = [];
    this._listeners = {};
    this._callers = {};
    this._defers = {};
    this._flushHandle = null;
    this._paused = false;
    transport.listen(function (message) {
      return _this._receiveMessage(message);
    });
  }

  _createClass(Bridge, [{
    key: 'on',
    value: function on(name, fn) {
      if (!this._listeners[name]) {
        this._listeners[name] = [fn];
      } else {
        this._listeners[name].push(fn);
      }
    }
  }, {
    key: 'off',
    value: function off(name, fn) {
      if (this._listeners[name]) {
        var i = this._listeners[name].indexOf(fn);
        if (i !== -1) {
          this._listeners[name].splice(i, 1);
        }
      }
    }
  }, {
    key: 'once',
    value: function once(name, fn) {
      var _this2 = this;

      var listenOnce = function listenOnce(data) {
        fn(data);
        _this2.off(name, listenOnce);
      };
      this.on(name, listenOnce);
    }
  }, {
    key: 'emit',
    value: function emit(name, data) {
      this._sendMessage({ type: 'event', name: name, data: data });
    }
  }, {
    key: 'onCall',
    value: function onCall(name, handler) {
      if (this._callers[name]) {
        throw new Error('Only one call handler per call name allowed.');
      }
      this._callers[name] = handler;
    }
  }, {
    key: 'call',
    value: function call(name) {
      var _this3 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        var nonce = ++nonceCounter;
        _this3._defers[nonce] = { resolve: resolve, reject: reject };
        _this3._sendMessage({ type: 'call', nonce: nonce, name: name, args: args });
      });
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._sendMessage({ type: 'pause' });
    }
  }, {
    key: 'resume',
    value: function resume() {
      this._sendMessage({ type: 'resume' });
    }
  }, {
    key: '_receiveMessage',
    value: function _receiveMessage(message) {
      this._incomingBuffer.push(message);
      this._scheduleFlush();
    }
  }, {
    key: '_sendMessage',
    value: function _sendMessage(message) {
      this._outgoingBuffer.push(message);
      this._scheduleFlush();
    }
  }, {
    key: '_scheduleFlush',
    value: function _scheduleFlush() {
      var _this4 = this;

      if (!this._flushHandle && this._hasBufferedMessages()) {
        var timeout = this._paused ? 5000 : 500;
        this._flushHandle = requestIdle(function (deadline) {
          return _this4._flushWhileIdle(deadline);
        }, { timeout: timeout });
      }
    }
  }, {
    key: '_cancelFlush',
    value: function _cancelFlush() {
      if (this._flushHandle) {
        cancelIdle(this._flushHandle);
        this._flushHandle = null;
      }
    }
  }, {
    key: '_flushWhileIdle',
    value: function _flushWhileIdle(deadline) {
      this._flushHandle = null;

      var halfPast = deadline.timeRemaining() / 2;
      while (this._incomingBuffer.length > 0 && (deadline.didTimeout || deadline.timeRemaining() > halfPast)) {
        this._handleIncomingMessage(this._incomingBuffer.shift());
      }

      // Magic numbers were determined by tweaking in a heavy UI and seeing
      // what performs reasonably well both when DevTools are hidden and visible.
      // The goal is that we try to catch up but avoid blocking the UI.
      // When paused, it's okay to lag more, but not forever because otherwise
      // when user activates DevTools tab, it will freeze syncing.
      var chunkCount = this._paused ? 20 : 10;
      var chunkSize = Math.round(this._outgoingBuffer.length / chunkCount);
      var minChunkSize = this._paused ? 50 : 100;

      while (this._outgoingBuffer.length > 0 && (deadline.didTimeout || deadline.timeRemaining() > 0)) {
        var take = Math.min(this._outgoingBuffer.length, Math.max(minChunkSize, chunkSize));
        this._flushOutgoingMessages(this._outgoingBuffer.splice(0, take));
      }

      if (this._hasBufferedMessages()) {
        this._scheduleFlush();
      }
    }
  }, {
    key: '_hasBufferedMessages',
    value: function _hasBufferedMessages() {
      return this._incomingBuffer.length > 0 || this._outgoingBuffer.length > 0;
    }
  }, {
    key: '_handleIncomingMessage',
    value: function _handleIncomingMessage(message) {
      var _this5 = this;

      if (message.type === 'event') {
        var listeners = this._listeners[message.name];
        if (listeners) {
          listeners.forEach(function (listener) {
            return listener(message.data);
          });
        }
        return;
      }

      if (message.type === 'call') {
        new Promise(function (resolve) {
          var fn = _this5._callers[message.name];
          if (!fn) {
            throw new Error('unknown call: "' + message.name + '"');
          }
          resolve(fn.apply(undefined, _toConsumableArray(message.args)));
        }).then(function (value) {
          return _this5._sendMessage({ type: 'resolve', nonce: message.nonce, value: value });
        }, function (error) {
          return _this5._sendMessage({
            type: 'reject',
            nonce: message.nonce,
            error: error.message + '\n' + error.stack
          });
        });
        return;
      }

      if (message.type === 'resolve') {
        var deferred = this._defers[message.nonce];
        delete this._defers[message.nonce];
        deferred.resolve(message.value);
        return;
      }

      if (message.type === 'reject') {
        var _deferred = this._defers[message.nonce];
        delete this._defers[message.nonce];
        _deferred.reject(new Error(message.error));
        return;
      }

      if (message.type === 'pause') {
        this._paused = true;
        this._cancelFlush();
        return;
      }

      if (message.type === 'resume') {
        this._paused = false;
        this._scheduleFlush();
        return;
      }

      if (message.type === 'batch') {
        message.messages.forEach(function (batchedMessage) {
          _this5._handleIncomingMessage(batchedMessage);
        });
      }
    }
  }, {
    key: '_flushOutgoingMessages',
    value: function _flushOutgoingMessages(messages) {
      if (messages.length === 1) {
        this._transport.send(messages[0]);
      } else {
        this._transport.send({ type: 'batch', messages: messages });
      }
    }
  }]);

  return Bridge;
}();

exports.default = Bridge;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installRelayDevTools = installRelayDevTools;

var _GlobalHook = __webpack_require__(286);

var _connectBackend = __webpack_require__(287);

var _connectBackend2 = _interopRequireDefault(_connectBackend);

var _Bridge = __webpack_require__(128);

var _Bridge2 = _interopRequireDefault(_Bridge);

var _wsClientTransport = __webpack_require__(325);

var _wsClientTransport2 = _interopRequireDefault(_wsClientTransport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Install the Relay DevTools backend in your application code so it can be
 * inspected with Relay DevTools standalone app.
 *
 * Ensure this function is called *before* creating a Relay Environment.
 *
 * By default, this will look for the Relay DevTools app at localhost:8734,
 * however both the port and host can be configured.
 */
function installRelayDevTools(port, host, prompt) {
  if (prompt !== null) {
    // eslint-disable-next-line no-console
    console.log(prompt || 'Installing Relay DevTools backend. Inspect Relay Environments in ' + 'this app by running `relay-devtools`. Remember to remove this ' + 'in production!');
  }
  if ((0, _GlobalHook.installGlobalHook)(global)) {
    (0, _wsClientTransport2.default)(host, port).then(function (transport) {
      var hook = (0, _GlobalHook.getGlobalHook)(global);
      if (hook) {
        var bridge = new _Bridge2.default(transport);
        (0, _connectBackend2.default)(hook, bridge);
      }
    });
  }
}

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deepCopy = __webpack_require__(288);

var _deepCopy2 = _interopRequireDefault(_deepCopy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Agent:
 *
 * Responsible for listening to events on and exposing an inspection API for
 * a Relay Environment.
 */
var EnvironmentAgent = function () {
  function EnvironmentAgent(environment, id, emit) {
    _classCallCheck(this, EnvironmentAgent);

    this._environment = environment;
    this._id = id;
    this._emit = emit;
    this._snapshot = getInitialSnapshot(environment.getStore());

    // Monkey patch methods within Environment to follow various events.
    this._monkeyPatchExecute();
    this._monkeyPatchExecuteMutation();
    this._monkeyPatchNetwork();
    this._monkeyPatchStoreNotify();
  }

  _createClass(EnvironmentAgent, [{
    key: 'getEnvironment',
    value: function getEnvironment() {
      return this._environment;
    }
  }, {
    key: 'getId',
    value: function getId() {
      return this._id;
    }
  }, {
    key: 'getMatchingRecords',
    value: function getMatchingRecords(matchStr, matchType) {
      function isMatching(id, record) {
        if (matchType === 'idtype') {
          return id.includes(matchStr) || Boolean(record.__typename) && record.__typename.includes(matchStr);
        }
        if (matchType === 'id') {
          return id.includes(matchStr);
        }
        if (matchType === 'type') {
          return Boolean(record.__typename) && record.__typename.includes(matchStr);
        }
        throw new Error('Unknown match type: ' + matchType);
      }

      var source = this._environment.getStore().getSource();
      var recordMap = {};
      source.getRecordIDs().forEach(function (id) {
        var record = source.get(id);
        if (isMatching(id, record)) {
          recordMap[id] = record.__typename;
        }
      });
      return recordMap;
    }
  }, {
    key: 'getRecord',
    value: function getRecord(id) {
      return (0, _deepCopy2.default)(this._environment.getStore().getSource().get(id));
    }
  }, {
    key: '_monkeyPatchExecute',
    value: function _monkeyPatchExecute() {
      var _this = this;

      monkeyPatch(this._environment, 'execute', function (execute) {
        return _this._monkeyPatchExecuteUnsubscribe(execute);
      });
    }
  }, {
    key: '_monkeyPatchExecuteMutation',
    value: function _monkeyPatchExecuteMutation() {
      var _this2 = this;

      monkeyPatch(this._environment, 'executeMutation', function (executeMutation) {
        return _this2._monkeyPatchExecuteUnsubscribe(executeMutation);
      });
    }

    // When monkey-patching the network, "unsubscribe" events occur *after*
    // the corresponding publish, rather than *before* as "next" and "error"
    // events. To account for this, we monkey-patch environment's execute() and
    // executeMutation() methods for their "unsubscribe" events, which do in fact
    // occur *before* the corresponding publish.

  }, {
    key: '_monkeyPatchExecuteUnsubscribe',
    value: function _monkeyPatchExecuteUnsubscribe(execute) {
      var agent = this;
      return function () {
        var observable = execute.apply(this, arguments);
        // Get the network event corresponding to the "Request" start.
        var lastNetworkEvent = agent._lastNetworkEvent;
        return observable.do({
          unsubscribe: function unsubscribe() {
            return (
              // Produce a mirrored "Unsubscribe" network event.
              agent._networkEvent(_extends({}, lastNetworkEvent, {
                eventName: 'Unsubscribe'
              }))
            );
          }
        });
      };
    }
  }, {
    key: '_monkeyPatchNetwork',
    value: function _monkeyPatchNetwork() {
      var agent = this;
      monkeyPatch(this._environment.getNetwork(), 'execute', function (execute) {
        return function (operation, variables) {
          var seriesId = nextSeriesId();
          agent._networkEvent({
            eventName: 'Request',
            seriesId: seriesId,
            operation: operation,
            variables: variables
          });
          var observable = execute.apply(this, arguments);
          return observable.do({
            next: function next(payload) {
              return agent._networkEvent({
                eventName: 'Response',
                seriesId: seriesId,
                operation: operation,
                variables: variables,
                response: payload.response
              });
            },
            error: function error(_error) {
              return agent._networkEvent({
                eventName: 'Request Error',
                seriesId: seriesId,
                operation: operation,
                variables: variables,
                response: { isError: true, message: _error.message }
              });
            }
          });
        };
      });
    }
  }, {
    key: '_monkeyPatchStoreNotify',
    value: function _monkeyPatchStoreNotify() {
      var agent = this;
      monkeyPatch(this._environment.getStore(), 'notify', function (notify) {
        return function () {
          agent._runPublishEvent();
          notify.apply(this, arguments);
        };
      });
    }
  }, {
    key: '_networkEvent',
    value: function _networkEvent(partialEvent) {
      var _this3 = this;

      if (this._flushLastNetworkEventTimer) {
        this._flushLastNetworkEvent();
      }
      this._lastNetworkEvent = partialEvent;
      this._flushLastNetworkEventTimer = setTimeout(function () {
        return _this3._flushLastNetworkEvent();
      });
    }
  }, {
    key: '_flushLastNetworkEvent',
    value: function _flushLastNetworkEvent() {
      var data = this._lastNetworkEvent;
      this._clearLastNetworkEvent();
      this._emit('update', data);
    }
  }, {
    key: '_clearLastNetworkEvent',
    value: function _clearLastNetworkEvent() {
      clearTimeout(this._flushLastNetworkEventTimer);
      this._lastNetworkEvent = null;
      this._flushLastNetworkEventTimer = null;
    }
  }, {
    key: '_runPublishEvent',
    value: function _runPublishEvent() {
      var store = this._environment.getStore();
      var lastNetworkEvent = this._lastNetworkEvent;
      var networkEventName = lastNetworkEvent && lastNetworkEvent.eventName;
      var eventName = networkEventName === 'Request' ? 'Optimistic Update' : networkEventName === 'Unsubscribe' ? 'Revert Optimistic Update' : networkEventName ? networkEventName : 'Local Update';
      var seriesId = lastNetworkEvent ? lastNetworkEvent.seriesId : nextSeriesId();
      var snapshotChanges = getSnapshotChanges(store, this._snapshot, store.__getUpdatedRecordIDs());
      var data = _extends({}, lastNetworkEvent, snapshotChanges, {
        eventName: eventName,
        seriesId: seriesId
      });
      this._clearLastNetworkEvent();
      this._emit('update', data);
    }
  }]);

  return EnvironmentAgent;
}();

// Create an in-memory copy of the store which can be used to derive diffs
// on each publish event.


exports.default = EnvironmentAgent;
function getInitialSnapshot(store) {
  var snapshot = {};
  var source = store.getSource();
  var ids = source.getRecordIDs();
  ids.forEach(function (id) {
    snapshot[id] = (0, _deepCopy2.default)(source.get(id));
  });
  return snapshot;
}

// From a publish event, update the store snapshot with the latest data
// while returning a before/after of any updated records to visualize.
function getSnapshotChanges(store, snapshot, updatedRecordIds) {
  var snapshotBefore = {};
  var snapshotAfter = {};
  var source = store.getSource();
  var ids = Object.keys(updatedRecordIds);
  for (var ii = 0; ii < ids.length; ii++) {
    var _id = ids[ii];
    var beforeRecord = snapshot[_id];
    if (beforeRecord !== undefined) {
      snapshotBefore[_id] = beforeRecord;
    }
    // Always include records in "after", even if they're null.
    snapshotAfter[_id] = snapshot[_id] = (0, _deepCopy2.default)(source.get(_id));
  }
  return { snapshotBefore: snapshotBefore, snapshotAfter: snapshotAfter };
}

function monkeyPatch(source, method, patch) {
  source[method] = patch(source[method]);
}

var seriesIdCounter = 0;
var seriesIdPrefix = Math.random().toString(16).slice(-5);
function nextSeriesId() {
  return seriesIdPrefix + seriesIdCounter++;
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installGlobalHook = installGlobalHook;
exports.getGlobalHook = getGlobalHook;


/**
 * Hook:
 *
 * Responsible for installing itself as a global variable which Relay
 * Environment instances will look for to register themselves, and which
 * connectBackend will use to find environments.
 */
function installGlobalHook(window) {
  if (!window || window.__RELAY_DEVTOOLS_HOOK__) {
    return false;
  }
  var environments = [];
  var listeners = [];

  var hook = {
    registerEnvironment: function registerEnvironment(environment) {
      environments.push(environment);
      listeners.forEach(function (listener) {
        return listener(environment);
      });
    },
    getEnvironments: function getEnvironments() {
      return environments;
    },
    onEnvironment: function onEnvironment(listener) {
      listeners.push(listener);
    }
  };

  Object.defineProperty(window, '__RELAY_DEVTOOLS_HOOK__', {
    value: hook
  });

  return true;
}

function getGlobalHook(window) {
  return window && window.__RELAY_DEVTOOLS_HOOK__;
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = connectBackend;

var _EnvironmentAgent = __webpack_require__(285);

var _EnvironmentAgent2 = _interopRequireDefault(_EnvironmentAgent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * connectBackend:
 *
 * Given a Hook and a Bridge, create Agents for every Relay Environment found,
 * and attach Bridge callbacks to Agent methods.
 */
function connectBackend(hook, bridge) {
  var agents = [];

  function connectAgent(environment) {
    try {
      var emit = function emit(name, data) {
        bridge.emit(name, _extends({}, data, { environment: id }));
      };

      var id = agents.length;

      var agent = new _EnvironmentAgent2.default(environment, id, emit);
      agents.push(agent);
      bridge.emit('register');
    } catch (error) {
      /* eslint-disable no-console */
      console.error('Relay DevTools: Failed to connect agent');
      console.error(error);
      /* eslint-enable no-console */
    }
  }

  hook.getEnvironments().forEach(connectAgent);
  hook.onEnvironment(connectAgent);

  bridge.onCall('relayDebugger:getEnvironments', function () {
    return Object.keys(agents);
  });

  bridge.onCall('relayDebugger:getRecord', function (env, id) {
    return agents[env].getRecord(id);
  });

  bridge.onCall('relayDebugger:getMatchingRecords', function (env, search, type) {
    return agents[env].getMatchingRecords(search, type);
  });

  bridge.onCall('hasDetectedRelay', function () {
    return agents.length !== 0;
  });
}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @format
 */



/**
 * A helper to create a deep clone of a plain value, Object, or Array.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = deepCopy;
function deepCopy(value) {
  if (Array.isArray(value)) {
    return value.map(deepCopy);
  }
  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var copy = {};
    for (var prop in value) {
      if (hasOwnProperty.call(value, prop)) {
        copy[prop] = deepCopy(value[prop]);
      }
    }
    return copy;
  }
  return value;
}

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wsClientTransport;


/**
 * Creates a WebSocket based BridgeTransport for use on the client, which can
 * be used to connect a Relay environment in a Browser that does not have a
 * debugging console, or in a React Native simulator.
 *
 * The resulting Promise will resolve when a WebSocket connection is
 * successfully connected.
 */
function wsClientTransport() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localhost';
  var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8734;

  return new Promise(function (resolve, reject) {
    var connection = void 0;
    var reconnect = void 0;
    var messageListeners = [];

    connect();

    function connect() {
      try {
        connection = new WebSocket('ws://' + host + ':' + port);
        connection.onopen = handleOpen;
        connection.onclose = attemptReconnect;
        connection.onerror = attemptReconnect;
        connection.onmessage = handleMessage;
      } catch (error) {
        reject(error);
      }
    }

    function handleOpen() {
      var transport = {
        listen: function listen(fn) {
          messageListeners.push(fn);
        },
        send: function send(message) {
          sendMessage(message);
        }
      };
      resolve(transport);
    }

    function attemptReconnect() {
      connection = null;
      if (!reconnect) {
        reconnect = setTimeout(function () {
          reconnect = null;
          connect();
        }, 2000);
      }
    }

    function handleMessage(evt) {
      var data = void 0;
      try {
        data = JSON.parse(evt.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Relay DevTools: Failed to parse message: ' + evt.data);
      }
      if (data) {
        var message = data.relayDevTools;
        if (message) {
          messageListeners.forEach(function (fn) {
            return fn(message);
          });
        }
      }
    }

    function sendMessage(message) {
      if (connection && connection.readyState === WebSocket.OPEN) {
        connection.send(JSON.stringify({ relayDevTools: message }));
      }
    }
  });
}

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(283);


/***/ })

/******/ });