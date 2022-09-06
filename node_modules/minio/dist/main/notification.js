"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildARN = exports.TopicConfig = exports.QueueConfig = exports.ObjectRemovedDeleteMarkerCreated = exports.ObjectRemovedDelete = exports.ObjectRemovedAll = exports.ObjectReducedRedundancyLostObject = exports.ObjectCreatedPut = exports.ObjectCreatedPost = exports.ObjectCreatedCopy = exports.ObjectCreatedCompleteMultipartUpload = exports.ObjectCreatedAll = exports.NotificationPoller = exports.NotificationConfig = exports.CloudFunctionConfig = void 0;

var _events = require("events");

var transformers = _interopRequireWildcard(require("./transformers"));

var _helpers = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Notification config - array of target configs.
// Target configs can be
// 1. Topic (simple notification service)
// 2. Queue (simple queue service)
// 3. CloudFront (lambda function)
var NotificationConfig = /*#__PURE__*/function () {
  function NotificationConfig() {
    _classCallCheck(this, NotificationConfig);
  }

  _createClass(NotificationConfig, [{
    key: "add",
    value: function add(target) {
      var instance = '';

      if (target instanceof TopicConfig) {
        instance = 'TopicConfiguration';
      }

      if (target instanceof QueueConfig) {
        instance = 'QueueConfiguration';
      }

      if (target instanceof CloudFunctionConfig) {
        instance = 'CloudFunctionConfiguration';
      }

      if (!this[instance]) this[instance] = [];
      this[instance].push(target);
    }
  }]);

  return NotificationConfig;
}(); // Base class for three supported configs.


exports.NotificationConfig = NotificationConfig;

var TargetConfig = /*#__PURE__*/function () {
  function TargetConfig() {
    _classCallCheck(this, TargetConfig);
  }

  _createClass(TargetConfig, [{
    key: "setId",
    value: function setId(id) {
      this.Id = id;
    }
  }, {
    key: "addEvent",
    value: function addEvent(newevent) {
      if (!this.Event) this.Event = [];
      this.Event.push(newevent);
    }
  }, {
    key: "addFilterSuffix",
    value: function addFilterSuffix(suffix) {
      if (!this.Filter) this.Filter = {
        S3Key: {
          FilterRule: []
        }
      };
      this.Filter.S3Key.FilterRule.push({
        Name: "suffix",
        Value: suffix
      });
    }
  }, {
    key: "addFilterPrefix",
    value: function addFilterPrefix(prefix) {
      if (!this.Filter) this.Filter = {
        S3Key: {
          FilterRule: []
        }
      };
      this.Filter.S3Key.FilterRule.push({
        Name: "prefix",
        Value: prefix
      });
    }
  }]);

  return TargetConfig;
}(); // 1. Topic (simple notification service)


var TopicConfig = /*#__PURE__*/function (_TargetConfig) {
  _inherits(TopicConfig, _TargetConfig);

  var _super = _createSuper(TopicConfig);

  function TopicConfig(arn) {
    var _this;

    _classCallCheck(this, TopicConfig);

    _this = _super.call(this);
    _this.Topic = arn;
    return _this;
  }

  return _createClass(TopicConfig);
}(TargetConfig); // 2. Queue (simple queue service)


exports.TopicConfig = TopicConfig;

var QueueConfig = /*#__PURE__*/function (_TargetConfig2) {
  _inherits(QueueConfig, _TargetConfig2);

  var _super2 = _createSuper(QueueConfig);

  function QueueConfig(arn) {
    var _this2;

    _classCallCheck(this, QueueConfig);

    _this2 = _super2.call(this);
    _this2.Queue = arn;
    return _this2;
  }

  return _createClass(QueueConfig);
}(TargetConfig); // 3. CloudFront (lambda function)


exports.QueueConfig = QueueConfig;

var CloudFunctionConfig = /*#__PURE__*/function (_TargetConfig3) {
  _inherits(CloudFunctionConfig, _TargetConfig3);

  var _super3 = _createSuper(CloudFunctionConfig);

  function CloudFunctionConfig(arn) {
    var _this3;

    _classCallCheck(this, CloudFunctionConfig);

    _this3 = _super3.call(this);
    _this3.CloudFunction = arn;
    return _this3;
  }

  return _createClass(CloudFunctionConfig);
}(TargetConfig);

exports.CloudFunctionConfig = CloudFunctionConfig;

var buildARN = function buildARN(partition, service, region, accountId, resource) {
  return "arn:" + partition + ":" + service + ":" + region + ":" + accountId + ":" + resource;
};

exports.buildARN = buildARN;
var ObjectCreatedAll = "s3:ObjectCreated:*";
exports.ObjectCreatedAll = ObjectCreatedAll;
var ObjectCreatedPut = "s3:ObjectCreated:Put";
exports.ObjectCreatedPut = ObjectCreatedPut;
var ObjectCreatedPost = "s3:ObjectCreated:Post";
exports.ObjectCreatedPost = ObjectCreatedPost;
var ObjectCreatedCopy = "s3:ObjectCreated:Copy";
exports.ObjectCreatedCopy = ObjectCreatedCopy;
var ObjectCreatedCompleteMultipartUpload = "s3:ObjectCreated:CompleteMultipartUpload";
exports.ObjectCreatedCompleteMultipartUpload = ObjectCreatedCompleteMultipartUpload;
var ObjectRemovedAll = "s3:ObjectRemoved:*";
exports.ObjectRemovedAll = ObjectRemovedAll;
var ObjectRemovedDelete = "s3:ObjectRemoved:Delete";
exports.ObjectRemovedDelete = ObjectRemovedDelete;
var ObjectRemovedDeleteMarkerCreated = "s3:ObjectRemoved:DeleteMarkerCreated";
exports.ObjectRemovedDeleteMarkerCreated = ObjectRemovedDeleteMarkerCreated;
var ObjectReducedRedundancyLostObject = "s3:ReducedRedundancyLostObject"; // Poll for notifications, used in #listenBucketNotification.
// Listening constitutes repeatedly requesting s3 whether or not any
// changes have occurred.

exports.ObjectReducedRedundancyLostObject = ObjectReducedRedundancyLostObject;

var NotificationPoller = /*#__PURE__*/function (_EventEmitter) {
  _inherits(NotificationPoller, _EventEmitter);

  var _super4 = _createSuper(NotificationPoller);

  function NotificationPoller(client, bucketName, prefix, suffix, events) {
    var _this4;

    _classCallCheck(this, NotificationPoller);

    _this4 = _super4.call(this);
    _this4.client = client;
    _this4.bucketName = bucketName;
    _this4.prefix = prefix;
    _this4.suffix = suffix;
    _this4.events = events;
    _this4.ending = false;
    return _this4;
  } // Starts the polling.


  _createClass(NotificationPoller, [{
    key: "start",
    value: function start() {
      var _this5 = this;

      this.ending = false;
      process.nextTick(function () {
        _this5.checkForChanges();
      });
    } // Stops the polling.

  }, {
    key: "stop",
    value: function stop() {
      this.ending = true;
    }
  }, {
    key: "checkForChanges",
    value: function checkForChanges() {
      var _this6 = this;

      // Don't continue if we're looping again but are cancelled.
      if (this.ending) return;
      var method = 'GET';
      var queries = [];

      if (this.prefix) {
        var prefix = (0, _helpers.uriEscape)(this.prefix);
        queries.push(`prefix=${prefix}`);
      }

      if (this.suffix) {
        var suffix = (0, _helpers.uriEscape)(this.suffix);
        queries.push(`suffix=${suffix}`);
      }

      if (this.events) {
        this.events.forEach(function (s3event) {
          return queries.push('events=' + (0, _helpers.uriEscape)(s3event));
        });
      }

      queries.sort();
      var query = '';

      if (queries.length > 0) {
        query = `${queries.join('&')}`;
      }

      var region = this.client.region || 'us-east-1';
      this.client.makeRequest({
        method,
        bucketName: this.bucketName,
        query
      }, '', [200], region, true, function (e, response) {
        if (e) return _this6.emit('error', e);
        var transformer = transformers.getNotificationTransformer();
        (0, _helpers.pipesetup)(response, transformer).on('data', function (result) {
          // Data is flushed periodically (every 5 seconds), so we should
          // handle it after flushing from the JSON parser.
          var records = result.Records; // If null (= no records), change to an empty array.

          if (!records) records = []; // Iterate over the notifications and emit them individually.

          records.forEach(function (record) {
            _this6.emit('notification', record);
          }); // If we're done, stop.

          if (_this6.ending) response.destroy();
        }).on('error', function (e) {
          return _this6.emit('error', e);
        }).on('end', function () {
          // Do it again, if we haven't cancelled yet.
          process.nextTick(function () {
            _this6.checkForChanges();
          });
        });
      });
    }
  }]);

  return NotificationPoller;
}(_events.EventEmitter);

exports.NotificationPoller = NotificationPoller;
//# sourceMappingURL=notification.js.map
