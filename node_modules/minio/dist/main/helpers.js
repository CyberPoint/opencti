"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RETENTION_VALIDITY_UNITS = exports.RETENTION_MODES = exports.PART_CONSTRAINTS = exports.LEGAL_HOLD_STATUS = exports.ENCRYPTION_TYPES = exports.CopySourceOptions = exports.CopyDestinationOptions = void 0;
exports.calculateEvenSplits = calculateEvenSplits;
exports.extractMetadata = extractMetadata;
exports.getScope = getScope;
exports.getSourceVersionId = getSourceVersionId;
exports.getVersionId = getVersionId;
exports.insertContentType = insertContentType;
exports.isAmazonEndpoint = isAmazonEndpoint;
exports.isAmzHeader = isAmzHeader;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isReadableStream = isReadableStream;
exports.isStorageclassHeader = isStorageclassHeader;
exports.isString = isString;
exports.isSupportedHeader = isSupportedHeader;
exports.isValidBucketName = isValidBucketName;
exports.isValidDate = isValidDate;
exports.isValidDomain = isValidDomain;
exports.isValidEndpoint = isValidEndpoint;
exports.isValidIP = isValidIP;
exports.isValidObjectName = isValidObjectName;
exports.isValidPort = isValidPort;
exports.isValidPrefix = isValidPrefix;
exports.isVirtualHostStyle = isVirtualHostStyle;
exports.makeDateLong = makeDateLong;
exports.makeDateShort = makeDateShort;
exports.partsRequired = void 0;
exports.pipesetup = pipesetup;
exports.prependXAMZMeta = prependXAMZMeta;
exports.probeContentType = probeContentType;
exports.promisify = promisify;
exports.readableStream = readableStream;
exports.removeDirAndFiles = removeDirAndFiles;
exports.sanitizeETag = sanitizeETag;
exports.toSha256 = exports.toMd5 = exports.toArray = exports.sanitizeObjectKey = void 0;
exports.uriEscape = uriEscape;
exports.uriResourceEscape = uriResourceEscape;

var _stream = _interopRequireDefault(require("stream"));

var _mimeTypes = _interopRequireDefault(require("mime-types"));

var _browserOrNode = require("browser-or-node");

var _lodash = _interopRequireDefault(require("lodash"));

var errors = _interopRequireWildcard(require("./errors.js"));

var _querystring = _interopRequireDefault(require("querystring"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Crypto = require('crypto-browserify');

var ipaddr = require('ipaddr.js');

var fs = require('fs');

var path = require("path");

// Returns a wrapper function that will promisify a given callback function.
// It will preserve 'this'.
function promisify(fn) {
  return function () {
    var _this = this;

    // If the last argument is a function, assume its the callback.
    var callback = arguments[arguments.length - 1]; // If the callback is given, don't promisify, just pass straight in.

    if (typeof callback === 'function') return fn.apply(this, arguments); // Otherwise, create a new set of arguments, and wrap
    // it in a promise.

    var args = Array.prototype.slice.call(arguments);
    return new Promise(function (resolve, reject) {
      // Add the callback function.
      args.push(function (err, value) {
        if (err) return reject(err);
        resolve(value);
      }); // Call the function with our special adaptor callback added.

      fn.apply(_this, args);
    });
  };
} // All characters in string which are NOT unreserved should be percent encoded.
// Unreserved characers are : ALPHA / DIGIT / "-" / "." / "_" / "~"
// Reference https://tools.ietf.org/html/rfc3986#section-2.2


function uriEscape(string) {
  return string.split('').reduce(function (acc, elem) {
    var buf = Buffer.from(elem);

    if (buf.length === 1) {
      // length 1 indicates that elem is not a unicode character.
      // Check if it is an unreserved characer.
      if ('A' <= elem && elem <= 'Z' || 'a' <= elem && elem <= 'z' || '0' <= elem && elem <= '9' || elem === '_' || elem === '.' || elem === '~' || elem === '-') {
        // Unreserved characer should not be encoded.
        acc = acc + elem;
        return acc;
      }
    } // elem needs encoding - i.e elem should be encoded if it's not unreserved
    // character or if it's a unicode character.


    for (var i = 0; i < buf.length; i++) {
      acc = acc + "%" + buf[i].toString(16).toUpperCase();
    }

    return acc;
  }, '');
}

function uriResourceEscape(string) {
  return uriEscape(string).replace(/%2F/g, '/');
}

function getScope(region, date) {
  return `${makeDateShort(date)}/${region}/s3/aws4_request`;
} // isAmazonEndpoint - true if endpoint is 's3.amazonaws.com' or 's3.cn-north-1.amazonaws.com.cn'


function isAmazonEndpoint(endpoint) {
  return endpoint === 's3.amazonaws.com' || endpoint === 's3.cn-north-1.amazonaws.com.cn';
} // isVirtualHostStyle - verify if bucket name is support with virtual
// hosts. bucketNames with periods should be always treated as path
// style if the protocol is 'https:', this is due to SSL wildcard
// limitation. For all other buckets and Amazon S3 endpoint we will
// default to virtual host style.


function isVirtualHostStyle(endpoint, protocol, bucket, pathStyle) {
  if (protocol === 'https:' && bucket.indexOf('.') > -1) {
    return false;
  }

  return isAmazonEndpoint(endpoint) || !pathStyle;
}

function isValidIP(ip) {
  return ipaddr.isValid(ip);
} // isValidEndpoint - true if endpoint is valid domain.


function isValidEndpoint(endpoint) {
  return isValidDomain(endpoint) || isValidIP(endpoint);
} // isValidDomain - true if input host is a valid domain.


function isValidDomain(host) {
  if (!isString(host)) return false; // See RFC 1035, RFC 3696.

  if (host.length === 0 || host.length > 255) {
    return false;
  } // Host cannot start or end with a '-'


  if (host[0] === '-' || host.substr(-1) === '-') {
    return false;
  } // Host cannot start or end with a '_'


  if (host[0] === '_' || host.substr(-1) === '_') {
    return false;
  } // Host cannot start with a '.'


  if (host[0] === '.') {
    return false;
  }

  var alphaNumerics = '`~!@#$%^&*()+={}[]|\\"\';:><?/'.split(''); // All non alphanumeric characters are invalid.

  for (var i in alphaNumerics) {
    if (host.indexOf(alphaNumerics[i]) > -1) {
      return false;
    }
  } // No need to regexp match, since the list is non-exhaustive.
  // We let it be valid and fail later.


  return true;
} // Probes contentType using file extensions.
// For example: probeContentType('file.png') returns 'image/png'.


function probeContentType(path) {
  var contentType = _mimeTypes.default.lookup(path);

  if (!contentType) {
    contentType = 'application/octet-stream';
  }

  return contentType;
} // isValidPort - is input port valid.


function isValidPort(port) {
  // verify if port is a number.
  if (!isNumber(port)) return false; // port cannot be negative.

  if (port < 0) return false; // port '0' is valid and special case return true.

  if (port === 0) return true;
  var min_port = 1;
  var max_port = 65535; // Verify if port is in range.

  return port >= min_port && port <= max_port;
}

function isValidBucketName(bucket) {
  if (!isString(bucket)) return false; // bucket length should be less than and no more than 63
  // characters long.

  if (bucket.length < 3 || bucket.length > 63) {
    return false;
  } // bucket with successive periods is invalid.


  if (bucket.indexOf('..') > -1) {
    return false;
  } // bucket cannot have ip address style.


  if (bucket.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/)) {
    return false;
  } // bucket should begin with alphabet/number and end with alphabet/number,
  // with alphabet/number/.- in the middle.


  if (bucket.match(/^[a-z0-9][a-z0-9.-]+[a-z0-9]$/)) {
    return true;
  }

  return false;
} // check if objectName is a valid object name


function isValidObjectName(objectName) {
  if (!isValidPrefix(objectName)) return false;
  if (objectName.length === 0) return false;
  return true;
} // check if prefix is valid


function isValidPrefix(prefix) {
  if (!isString(prefix)) return false;
  if (prefix.length > 1024) return false;
  return true;
} // check if typeof arg number


function isNumber(arg) {
  return typeof arg === 'number';
} // check if typeof arg function


function isFunction(arg) {
  return typeof arg === 'function';
} // check if typeof arg string


function isString(arg) {
  return typeof arg === 'string';
} // check if typeof arg object


function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
} // check if object is readable stream


function isReadableStream(arg) {
  return isObject(arg) && isFunction(arg._read);
} // check if arg is boolean


function isBoolean(arg) {
  return typeof arg === 'boolean';
} // check if arg is array


function isArray(arg) {
  return Array.isArray(arg);
} // check if arg is a valid date


function isValidDate(arg) {
  return arg instanceof Date && !isNaN(arg);
} // Create a Date string with format:
// 'YYYYMMDDTHHmmss' + Z


function makeDateLong(date) {
  date = date || new Date(); // Gives format like: '2017-08-07T16:28:59.889Z'

  date = date.toISOString();
  return date.substr(0, 4) + date.substr(5, 2) + date.substr(8, 5) + date.substr(14, 2) + date.substr(17, 2) + 'Z';
} // Create a Date string with format:
// 'YYYYMMDD'


function makeDateShort(date) {
  date = date || new Date(); // Gives format like: '2017-08-07T16:28:59.889Z'

  date = date.toISOString();
  return date.substr(0, 4) + date.substr(5, 2) + date.substr(8, 2);
} // pipesetup sets up pipe() from left to right os streams array
// pipesetup will also make sure that error emitted at any of the upstream Stream
// will be emitted at the last stream. This makes error handling simple


function pipesetup() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  return streams.reduce(function (src, dst) {
    src.on('error', function (err) {
      return dst.emit('error', err);
    });
    return src.pipe(dst);
  });
} // return a Readable stream that emits data


function readableStream(data) {
  var s = new _stream.default.Readable();

  s._read = function () {};

  s.push(data);
  s.push(null);
  return s;
} // Process metadata to insert appropriate value to `content-type` attribute


function insertContentType(metaData, filePath) {
  // check if content-type attribute present in metaData
  for (var key in metaData) {
    if (key.toLowerCase() === 'content-type') {
      return metaData;
    }
  } // if `content-type` attribute is not present in metadata,
  // then infer it from the extension in filePath


  var newMetadata = Object.assign({}, metaData);
  newMetadata['content-type'] = probeContentType(filePath);
  return newMetadata;
} // Function prepends metadata with the appropriate prefix if it is not already on


function prependXAMZMeta(metaData) {
  var newMetadata = Object.assign({}, metaData);

  for (var key in metaData) {
    if (!isAmzHeader(key) && !isSupportedHeader(key) && !isStorageclassHeader(key)) {
      newMetadata["X-Amz-Meta-" + key] = newMetadata[key];
      delete newMetadata[key];
    }
  }

  return newMetadata;
} // Checks if it is a valid header according to the AmazonS3 API


function isAmzHeader(key) {
  var temp = key.toLowerCase();
  return temp.startsWith("x-amz-meta-") || temp === "x-amz-acl" || temp.startsWith("x-amz-server-side-encryption-") || temp === "x-amz-server-side-encryption";
} // Checks if it is a supported Header


function isSupportedHeader(key) {
  var supported_headers = ['content-type', 'cache-control', 'content-encoding', 'content-disposition', 'content-language', 'x-amz-website-redirect-location'];
  return supported_headers.indexOf(key.toLowerCase()) > -1;
} // Checks if it is a storage header


function isStorageclassHeader(key) {
  return key.toLowerCase() === "x-amz-storage-class";
}

function extractMetadata(metaData) {
  var newMetadata = {};

  for (var key in metaData) {
    if (isSupportedHeader(key) || isStorageclassHeader(key) || isAmzHeader(key)) {
      if (key.toLowerCase().startsWith("x-amz-meta-")) {
        newMetadata[key.slice(11, key.length)] = metaData[key];
      } else {
        newMetadata[key] = metaData[key];
      }
    }
  }

  return newMetadata;
}

function getVersionId() {
  var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var versionIdValue = headers["x-amz-version-id"];
  return versionIdValue || null;
}

function getSourceVersionId() {
  var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sourceVersionId = headers["x-amz-copy-source-version-id"];
  return sourceVersionId || null;
}

function sanitizeETag() {
  var etag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var replaceChars = {
    '"': '',
    '&quot;': '',
    '&#34;': '',
    '&QUOT;': '',
    '&#x00022': ''
  };
  return etag.replace(/^("|&quot;|&#34;)|("|&quot;|&#34;)$/g, function (m) {
    return replaceChars[m];
  });
}

var RETENTION_MODES = {
  GOVERNANCE: "GOVERNANCE",
  COMPLIANCE: "COMPLIANCE"
};
exports.RETENTION_MODES = RETENTION_MODES;
var RETENTION_VALIDITY_UNITS = {
  DAYS: "Days",
  YEARS: "Years"
};
exports.RETENTION_VALIDITY_UNITS = RETENTION_VALIDITY_UNITS;
var LEGAL_HOLD_STATUS = {
  ENABLED: "ON",
  DISABLED: "OFF"
};
exports.LEGAL_HOLD_STATUS = LEGAL_HOLD_STATUS;

var objectToBuffer = function objectToBuffer(payload) {
  var payloadBuf = Buffer.from(Buffer.from(payload));
  return payloadBuf;
};

var toMd5 = function toMd5(payload) {
  var payLoadBuf = objectToBuffer(payload); // use string from browser and buffer from nodejs
  // browser support is tested only against minio server

  payLoadBuf = _browserOrNode.isBrowser ? payLoadBuf.toString() : payLoadBuf;
  return Crypto.createHash('md5').update(payLoadBuf).digest().toString('base64');
};

exports.toMd5 = toMd5;

var toSha256 = function toSha256(payload) {
  return Crypto.createHash('sha256').update(payload).digest('hex');
}; // toArray returns a single element array with param being the element,
// if param is just a string, and returns 'param' back if it is an array
// So, it makes sure param is always an array


exports.toSha256 = toSha256;

var toArray = function toArray(param) {
  if (!Array.isArray(param)) {
    return Array(param);
  }

  return param;
};

exports.toArray = toArray;

var sanitizeObjectKey = function sanitizeObjectKey(objectName) {
  // + symbol characters are not decoded as spaces in JS. so replace them first and decode to get the correct result.
  var asStrName = (objectName || "").replace(/\+/g, ' ');
  var sanitizedName = decodeURIComponent(asStrName);
  return sanitizedName;
};

exports.sanitizeObjectKey = sanitizeObjectKey;
var PART_CONSTRAINTS = {
  // absMinPartSize - absolute minimum part size (5 MiB)
  ABS_MIN_PART_SIZE: 1024 * 1024 * 5,
  // MIN_PART_SIZE - minimum part size 16MiB per object after which
  MIN_PART_SIZE: 1024 * 1024 * 16,
  // MAX_PARTS_COUNT - maximum number of parts for a single multipart session.
  MAX_PARTS_COUNT: 10000,
  // MAX_PART_SIZE - maximum part size 5GiB for a single multipart upload
  // operation.
  MAX_PART_SIZE: 1024 * 1024 * 1024 * 5,
  // MAX_SINGLE_PUT_OBJECT_SIZE - maximum size 5GiB of object per PUT
  // operation.
  MAX_SINGLE_PUT_OBJECT_SIZE: 1024 * 1024 * 1024 * 5,
  // MAX_MULTIPART_PUT_OBJECT_SIZE - maximum size 5TiB of object for
  // Multipart operation.
  MAX_MULTIPART_PUT_OBJECT_SIZE: 1024 * 1024 * 1024 * 1024 * 5
};
exports.PART_CONSTRAINTS = PART_CONSTRAINTS;
var ENCRYPTION_TYPES = {
  // SSEC represents server-side-encryption with customer provided keys
  SSEC: "SSE-C",
  // KMS represents server-side-encryption with managed keys
  KMS: "KMS"
};
exports.ENCRYPTION_TYPES = ENCRYPTION_TYPES;
var GENERIC_SSE_HEADER = "X-Amz-Server-Side-Encryption";
var ENCRYPTION_HEADERS = {
  // sseGenericHeader is the AWS SSE header used for SSE-S3 and SSE-KMS.
  sseGenericHeader: GENERIC_SSE_HEADER,
  // sseKmsKeyID is the AWS SSE-KMS key id.
  sseKmsKeyID: GENERIC_SSE_HEADER + "-Aws-Kms-Key-Id"
};
/**
 * Return Encryption headers
 * @param encConfig
 * @returns an object with key value pairs that can be used in headers.
 */

function getEncryptionHeaders(encConfig) {
  var encType = encConfig.type;
  var encHeaders = {};

  if (!_lodash.default.isEmpty(encType)) {
    if (encType === ENCRYPTION_TYPES.SSEC) {
      return {
        [encHeaders[ENCRYPTION_HEADERS.sseGenericHeader]]: "AES256"
      };
    } else if (encType === ENCRYPTION_TYPES.KMS) {
      return {
        [ENCRYPTION_HEADERS.sseGenericHeader]: encConfig.SSEAlgorithm,
        [ENCRYPTION_HEADERS.sseKmsKeyID]: encConfig.KMSMasterKeyID
      };
    }
  }

  return encHeaders;
}

var CopySourceOptions = /*#__PURE__*/function () {
  /**
     *
     * @param Bucket __string__ Bucket Name
     * @param Object __string__ Object Name
     * @param VersionID __string__ Valid versionId
     * @param MatchETag __string__ Etag to match
     * @param NoMatchETag __string__ Etag to exclude
     * @param MatchModifiedSince __string__ Modified Date of the object/part.  UTC Date in string format
     * @param MatchUnmodifiedSince __string__ Modified Date of the object/part to exclude UTC Date in string format
     * @param MatchRange __boolean__ true or false Object range to match
     * @param Start
     * @param End
     * @param Encryption
     */
  function CopySourceOptions() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$Bucket = _ref.Bucket,
        Bucket = _ref$Bucket === void 0 ? "" : _ref$Bucket,
        _ref$Object = _ref.Object,
        Object = _ref$Object === void 0 ? "" : _ref$Object,
        _ref$VersionID = _ref.VersionID,
        VersionID = _ref$VersionID === void 0 ? "" : _ref$VersionID,
        _ref$MatchETag = _ref.MatchETag,
        MatchETag = _ref$MatchETag === void 0 ? "" : _ref$MatchETag,
        _ref$NoMatchETag = _ref.NoMatchETag,
        NoMatchETag = _ref$NoMatchETag === void 0 ? "" : _ref$NoMatchETag,
        _ref$MatchModifiedSin = _ref.MatchModifiedSince,
        MatchModifiedSince = _ref$MatchModifiedSin === void 0 ? null : _ref$MatchModifiedSin,
        _ref$MatchUnmodifiedS = _ref.MatchUnmodifiedSince,
        MatchUnmodifiedSince = _ref$MatchUnmodifiedS === void 0 ? null : _ref$MatchUnmodifiedS,
        _ref$MatchRange = _ref.MatchRange,
        MatchRange = _ref$MatchRange === void 0 ? false : _ref$MatchRange,
        _ref$Start = _ref.Start,
        Start = _ref$Start === void 0 ? 0 : _ref$Start,
        _ref$End = _ref.End,
        End = _ref$End === void 0 ? 0 : _ref$End,
        _ref$Encryption = _ref.Encryption,
        Encryption = _ref$Encryption === void 0 ? {} : _ref$Encryption;

    _classCallCheck(this, CopySourceOptions);

    this.Bucket = Bucket;
    this.Object = Object;
    this.VersionID = VersionID;
    this.MatchETag = MatchETag;
    this.NoMatchETag = NoMatchETag;
    this.MatchModifiedSince = MatchModifiedSince;
    this.MatchUnmodifiedSince = MatchUnmodifiedSince;
    this.MatchRange = MatchRange;
    this.Start = Start;
    this.End = End;
    this.Encryption = Encryption;
  }

  _createClass(CopySourceOptions, [{
    key: "validate",
    value: function validate() {
      if (!isValidBucketName(this.Bucket)) {
        throw new errors.InvalidBucketNameError('Invalid Source bucket name: ' + this.Bucket);
      }

      if (!isValidObjectName(this.Object)) {
        throw new errors.InvalidObjectNameError(`Invalid Source object name: ${this.Object}`);
      }

      if (this.MatchRange && this.Start !== -1 && this.End !== -1 && this.Start > this.End || this.Start < 0) {
        throw new errors.InvalidObjectNameError("Source start must be non-negative, and start must be at most end.");
      } else if (this.MatchRange && !isNumber(this.Start) || !isNumber(this.End)) {
        throw new errors.InvalidObjectNameError("MatchRange is specified. But  Invalid Start and End values are specified. ");
      }

      return true;
    }
  }, {
    key: "getHeaders",
    value: function getHeaders() {
      var headerOptions = {};
      headerOptions["x-amz-copy-source"] = encodeURI(this.Bucket + "/" + this.Object);

      if (!_lodash.default.isEmpty(this.VersionID)) {
        headerOptions["x-amz-copy-source"] = encodeURI(this.Bucket + "/" + this.Object) + "?versionId=" + this.VersionID;
      }

      if (!_lodash.default.isEmpty(this.MatchETag)) {
        headerOptions["x-amz-copy-source-if-match"] = this.MatchETag;
      }

      if (!_lodash.default.isEmpty(this.NoMatchETag)) {
        headerOptions["x-amz-copy-source-if-none-match"] = this.NoMatchETag;
      }

      if (!_lodash.default.isEmpty(this.MatchModifiedSince)) {
        headerOptions["x-amz-copy-source-if-modified-since"] = this.MatchModifiedSince;
      }

      if (!_lodash.default.isEmpty(this.MatchUnmodifiedSince)) {
        headerOptions["x-amz-copy-source-if-unmodified-since"] = this.MatchUnmodifiedSince;
      }

      return headerOptions;
    }
  }]);

  return CopySourceOptions;
}();

exports.CopySourceOptions = CopySourceOptions;

var CopyDestinationOptions = /*#__PURE__*/function () {
  /*
   * @param Bucket __string__
   * @param Object __string__ Object Name for the destination (composed/copied) object defaults
   * @param Encryption __object__ Encryption configuration defaults to {}
   * @param UserMetadata __object__
   * @param UserTags __object__ | __string__
   * @param LegalHold __string__  ON | OFF
   * @param RetainUntilDate __string__ UTC Date String
   * @param Mode
  */
  function CopyDestinationOptions(_ref2) {
    var _ref2$Bucket = _ref2.Bucket,
        Bucket = _ref2$Bucket === void 0 ? "" : _ref2$Bucket,
        _ref2$Object = _ref2.Object,
        Object = _ref2$Object === void 0 ? "" : _ref2$Object,
        _ref2$Encryption = _ref2.Encryption,
        Encryption = _ref2$Encryption === void 0 ? null : _ref2$Encryption,
        _ref2$UserMetadata = _ref2.UserMetadata,
        UserMetadata = _ref2$UserMetadata === void 0 ? null : _ref2$UserMetadata,
        _ref2$UserTags = _ref2.UserTags,
        UserTags = _ref2$UserTags === void 0 ? null : _ref2$UserTags,
        _ref2$LegalHold = _ref2.LegalHold,
        LegalHold = _ref2$LegalHold === void 0 ? null : _ref2$LegalHold,
        _ref2$RetainUntilDate = _ref2.RetainUntilDate,
        RetainUntilDate = _ref2$RetainUntilDate === void 0 ? null : _ref2$RetainUntilDate,
        _ref2$Mode = _ref2.Mode,
        Mode = _ref2$Mode === void 0 ? null : _ref2$Mode;

    _classCallCheck(this, CopyDestinationOptions);

    this.Bucket = Bucket;
    this.Object = Object;
    this.Encryption = Encryption;
    this.UserMetadata = UserMetadata;
    this.UserTags = UserTags;
    this.LegalHold = LegalHold;
    this.Mode = Mode; // retention mode

    this.RetainUntilDate = RetainUntilDate;
  }

  _createClass(CopyDestinationOptions, [{
    key: "getHeaders",
    value: function getHeaders() {
      var _this2 = this;

      var replaceDirective = "REPLACE";
      var headerOptions = {};
      var userTags = this.UserTags;

      if (!_lodash.default.isEmpty(userTags)) {
        headerOptions["X-Amz-Tagging-Directive"] = replaceDirective;
        headerOptions["X-Amz-Tagging"] = isObject(userTags) ? _querystring.default.stringify(userTags) : isString(userTags) ? userTags : "";
      }

      if (!_lodash.default.isEmpty(this.Mode)) {
        headerOptions["X-Amz-Object-Lock-Mode"] = this.Mode; // GOVERNANCE or COMPLIANCE
      }

      if (!_lodash.default.isEmpty(this.RetainUntilDate)) {
        headerOptions["X-Amz-Object-Lock-Retain-Until-Date"] = this.RetainUntilDate; // needs to be UTC.
      }

      if (!_lodash.default.isEmpty(this.LegalHold)) {
        headerOptions["X-Amz-Object-Lock-Legal-Hold"] = this.LegalHold; // ON or OFF
      }

      if (!_lodash.default.isEmpty(this.UserMetadata)) {
        var headerKeys = Object.keys(this.UserMetadata);
        headerKeys.forEach(function (key) {
          headerOptions[`X-Amz-Meta-${key}`] = _this2.UserMetadata[key];
        });
      }

      if (!_lodash.default.isEmpty(this.Encryption)) {
        var encryptionHeaders = getEncryptionHeaders(this.Encryption);
        Object.keys(encryptionHeaders).forEach(function (key) {
          headerOptions[key] = encryptionHeaders[key];
        });
      }

      return headerOptions;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!isValidBucketName(this.Bucket)) {
        throw new errors.InvalidBucketNameError('Invalid Destination bucket name: ' + this.Bucket);
      }

      if (!isValidObjectName(this.Object)) {
        throw new errors.InvalidObjectNameError(`Invalid Destination object name: ${this.Object}`);
      }

      if (!_lodash.default.isEmpty(this.UserMetadata) && !isObject(this.UserMetadata)) {
        throw new errors.InvalidObjectNameError(`Destination UserMetadata should be an object with key value pairs`);
      }

      if (!_lodash.default.isEmpty(this.Mode) && ![RETENTION_MODES.GOVERNANCE, RETENTION_MODES.COMPLIANCE].includes(this.Mode)) {
        throw new errors.InvalidObjectNameError(`Invalid Mode specified for destination object it should be one of [GOVERNANCE,COMPLIANCE]`);
      }

      if (!_lodash.default.isEmpty(this.Encryption) && _lodash.default.isEmpty(this.Encryption)) {
        throw new errors.InvalidObjectNameError(`Invalid Encryption configuration for destination object `);
      }

      return true;
    }
  }]);

  return CopyDestinationOptions;
}();

exports.CopyDestinationOptions = CopyDestinationOptions;

var partsRequired = function partsRequired(size) {
  var maxPartSize = PART_CONSTRAINTS.MAX_MULTIPART_PUT_OBJECT_SIZE / (PART_CONSTRAINTS.MAX_PARTS_COUNT - 1);
  var requiredPartSize = size / maxPartSize;

  if (size % maxPartSize > 0) {
    requiredPartSize++;
  }

  requiredPartSize = Math.trunc(requiredPartSize);
  return requiredPartSize;
}; // calculateEvenSplits - computes splits for a source and returns
// start and end index slices. Splits happen evenly to be sure that no
// part is less than 5MiB, as that could fail the multipart request if
// it is not the last part.


exports.partsRequired = partsRequired;
var startIndexParts = [];
var endIndexParts = [];

function calculateEvenSplits(size, objInfo) {
  if (size === 0) {
    return null;
  }

  var reqParts = partsRequired(size);
  startIndexParts = new Array(reqParts);
  endIndexParts = new Array(reqParts);
  var start = objInfo.Start;

  if (_lodash.default.isEmpty(objInfo.Start) || start === -1) {
    start = 0;
  }

  var divisorValue = Math.trunc(size / reqParts);
  var reminderValue = size % reqParts;
  var nextStart = start;

  for (var i = 0; i < reqParts; i++) {
    var curPartSize = divisorValue;

    if (i < reminderValue) {
      curPartSize++;
    }

    var currentStart = nextStart;
    var currentEnd = currentStart + curPartSize - 1;
    nextStart = currentEnd + 1;
    startIndexParts[i] = currentStart;
    endIndexParts[i] = currentEnd;
  }

  return {
    startIndex: startIndexParts,
    endIndex: endIndexParts,
    objInfo: objInfo
  };
}

function removeDirAndFiles(dirPath, removeSelf) {
  if (removeSelf === undefined) removeSelf = true;

  try {
    var files = fs.readdirSync(dirPath);
  } catch (e) {
    return;
  }

  if (files.length > 0) for (var i = 0; i < files.length; i++) {
    var filePath = path.join(dirPath, files[i]);
    if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);else removeDirAndFiles(filePath);
  }
  if (removeSelf) fs.rmdirSync(dirPath);
}
//# sourceMappingURL=helpers.js.map
