"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stream = _interopRequireDefault(require("stream"));

var transformers = _interopRequireWildcard(require("./transformers"));

var errors = _interopRequireWildcard(require("./errors.js"));

var _helpers = require("./helpers.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var extensions = /*#__PURE__*/function () {
  function extensions(client) {
    _classCallCheck(this, extensions);

    this.client = client;
  } // List the objects in the bucket using S3 ListObjects V2 With Metadata
  //
  // __Arguments__
  // * `bucketName` _string_: name of the bucket
  // * `prefix` _string_: the prefix of the objects that should be listed (optional, default `''`)
  // * `recursive` _bool_: `true` indicates recursive style listing and `false` indicates directory style listing delimited by '/'. (optional, default `false`)
  // * `startAfter` _string_: Specifies the key to start after when listing objects in a bucket. (optional, default `''`)
  //
  // __Return Value__
  // * `stream` _Stream_: stream emitting the objects in the bucket, the object is of the format:
  //   * `obj.name` _string_: name of the object
  //   * `obj.prefix` _string_: name of the object prefix
  //   * `obj.size` _number_: size of the object
  //   * `obj.etag` _string_: etag of the object
  //   * `obj.lastModified` _Date_: modified time stamp
  //   * `obj.metadata` _object_: metadata of the object


  _createClass(extensions, [{
    key: "listObjectsV2WithMetadata",
    value: function listObjectsV2WithMetadata(bucketName, prefix, recursive, startAfter) {
      var _this = this;

      if (prefix === undefined) prefix = '';
      if (recursive === undefined) recursive = false;
      if (startAfter === undefined) startAfter = '';

      if (!(0, _helpers.isValidBucketName)(bucketName)) {
        throw new errors.InvalidBucketNameError('Invalid bucket name: ' + bucketName);
      }

      if (!(0, _helpers.isValidPrefix)(prefix)) {
        throw new errors.InvalidPrefixError(`Invalid prefix : ${prefix}`);
      }

      if (!(0, _helpers.isString)(prefix)) {
        throw new TypeError('prefix should be of type "string"');
      }

      if (!(0, _helpers.isBoolean)(recursive)) {
        throw new TypeError('recursive should be of type "boolean"');
      }

      if (!(0, _helpers.isString)(startAfter)) {
        throw new TypeError('startAfter should be of type "string"');
      } // if recursive is false set delimiter to '/'


      var delimiter = recursive ? '' : '/';
      var continuationToken = '';
      var objects = [];
      var ended = false;

      var readStream = _stream.default.Readable({
        objectMode: true
      });

      readStream._read = function () {
        // push one object per _read()
        if (objects.length) {
          readStream.push(objects.shift());
          return;
        }

        if (ended) return readStream.push(null); // if there are no objects to push do query for the next batch of objects

        _this.listObjectsV2WithMetadataQuery(bucketName, prefix, continuationToken, delimiter, 1000, startAfter).on('error', function (e) {
          return readStream.emit('error', e);
        }).on('data', function (result) {
          if (result.isTruncated) {
            continuationToken = result.nextContinuationToken;
          } else {
            ended = true;
          }

          objects = result.objects;

          readStream._read();
        });
      };

      return readStream;
    } // listObjectsV2WithMetadataQuery - (List Objects V2 with metadata) - List some or all (up to 1000) of the objects in a bucket.
    //
    // You can use the request parameters as selection criteria to return a subset of the objects in a bucket.
    // request parameters :-
    // * `bucketName` _string_: name of the bucket
    // * `prefix` _string_: Limits the response to keys that begin with the specified prefix.
    // * `continuation-token` _string_: Used to continue iterating over a set of objects.
    // * `delimiter` _string_: A delimiter is a character you use to group keys.
    // * `max-keys` _number_: Sets the maximum number of keys returned in the response body.
    // * `start-after` _string_: Specifies the key to start after when listing objects in a bucket.

  }, {
    key: "listObjectsV2WithMetadataQuery",
    value: function listObjectsV2WithMetadataQuery(bucketName, prefix, continuationToken, delimiter, maxKeys, startAfter) {
      if (!(0, _helpers.isValidBucketName)(bucketName)) {
        throw new errors.InvalidBucketNameError('Invalid bucket name: ' + bucketName);
      }

      if (!(0, _helpers.isString)(prefix)) {
        throw new TypeError('prefix should be of type "string"');
      }

      if (!(0, _helpers.isString)(continuationToken)) {
        throw new TypeError('continuationToken should be of type "string"');
      }

      if (!(0, _helpers.isString)(delimiter)) {
        throw new TypeError('delimiter should be of type "string"');
      }

      if (!(0, _helpers.isNumber)(maxKeys)) {
        throw new TypeError('maxKeys should be of type "number"');
      }

      if (!(0, _helpers.isString)(startAfter)) {
        throw new TypeError('startAfter should be of type "string"');
      }

      var queries = []; // Call for listing objects v2 API

      queries.push(`list-type=2`);
      queries.push(`encoding-type=url`); // escape every value in query string, except maxKeys

      queries.push(`prefix=${(0, _helpers.uriEscape)(prefix)}`);
      queries.push(`delimiter=${(0, _helpers.uriEscape)(delimiter)}`);
      queries.push(`metadata=true`);

      if (continuationToken) {
        continuationToken = (0, _helpers.uriEscape)(continuationToken);
        queries.push(`continuation-token=${continuationToken}`);
      } // Set start-after


      if (startAfter) {
        startAfter = (0, _helpers.uriEscape)(startAfter);
        queries.push(`start-after=${startAfter}`);
      } // no need to escape maxKeys


      if (maxKeys) {
        if (maxKeys >= 1000) {
          maxKeys = 1000;
        }

        queries.push(`max-keys=${maxKeys}`);
      }

      queries.sort();
      var query = '';

      if (queries.length > 0) {
        query = `${queries.join('&')}`;
      }

      var method = 'GET';
      var transformer = transformers.getListObjectsV2WithMetadataTransformer();
      this.client.makeRequest({
        method,
        bucketName,
        query
      }, '', [200], '', true, function (e, response) {
        if (e) return transformer.emit('error', e);
        (0, _helpers.pipesetup)(response, transformer);
      });
      return transformer;
    }
  }]);

  return extensions;
}();

exports.default = extensions;
//# sourceMappingURL=extensions.js.map
