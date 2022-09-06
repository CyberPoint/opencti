"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecretKeyRequiredError = exports.S3Error = exports.InvalidXMLError = exports.InvalidPrefixError = exports.InvalidPortError = exports.InvalidObjectNameError = exports.InvalidEndpointError = exports.InvalidDateError = exports.InvalidBucketPolicyError = exports.InvalidBucketNameError = exports.InvalidArgumentError = exports.IncorrectSizeError = exports.ExpiresParamError = exports.AnonymousRequestError = exports.AccessKeyRequiredError = void 0;

var _es6Error = _interopRequireDefault(require("es6-error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// AnonymousRequestError is generated for anonymous keys on specific
// APIs. NOTE: PresignedURL generation always requires access keys.
var AnonymousRequestError = /*#__PURE__*/function (_ExtendableError) {
  _inherits(AnonymousRequestError, _ExtendableError);

  var _super = _createSuper(AnonymousRequestError);

  function AnonymousRequestError(message) {
    _classCallCheck(this, AnonymousRequestError);

    return _super.call(this, message);
  }

  return _createClass(AnonymousRequestError);
}(_es6Error.default); // InvalidArgumentError is generated for all invalid arguments.


exports.AnonymousRequestError = AnonymousRequestError;

var InvalidArgumentError = /*#__PURE__*/function (_ExtendableError2) {
  _inherits(InvalidArgumentError, _ExtendableError2);

  var _super2 = _createSuper(InvalidArgumentError);

  function InvalidArgumentError(message) {
    _classCallCheck(this, InvalidArgumentError);

    return _super2.call(this, message);
  }

  return _createClass(InvalidArgumentError);
}(_es6Error.default); // InvalidPortError is generated when a non integer value is provided
// for ports.


exports.InvalidArgumentError = InvalidArgumentError;

var InvalidPortError = /*#__PURE__*/function (_ExtendableError3) {
  _inherits(InvalidPortError, _ExtendableError3);

  var _super3 = _createSuper(InvalidPortError);

  function InvalidPortError(message) {
    _classCallCheck(this, InvalidPortError);

    return _super3.call(this, message);
  }

  return _createClass(InvalidPortError);
}(_es6Error.default); // InvalidEndpointError is generated when an invalid end point value is
// provided which does not follow domain standards.


exports.InvalidPortError = InvalidPortError;

var InvalidEndpointError = /*#__PURE__*/function (_ExtendableError4) {
  _inherits(InvalidEndpointError, _ExtendableError4);

  var _super4 = _createSuper(InvalidEndpointError);

  function InvalidEndpointError(message) {
    _classCallCheck(this, InvalidEndpointError);

    return _super4.call(this, message);
  }

  return _createClass(InvalidEndpointError);
}(_es6Error.default); // InvalidBucketNameError is generated when an invalid bucket name is
// provided which does not follow AWS S3 specifications.
// http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html


exports.InvalidEndpointError = InvalidEndpointError;

var InvalidBucketNameError = /*#__PURE__*/function (_ExtendableError5) {
  _inherits(InvalidBucketNameError, _ExtendableError5);

  var _super5 = _createSuper(InvalidBucketNameError);

  function InvalidBucketNameError(message) {
    _classCallCheck(this, InvalidBucketNameError);

    return _super5.call(this, message);
  }

  return _createClass(InvalidBucketNameError);
}(_es6Error.default); // InvalidObjectNameError is generated when an invalid object name is
// provided which does not follow AWS S3 specifications.
// http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html


exports.InvalidBucketNameError = InvalidBucketNameError;

var InvalidObjectNameError = /*#__PURE__*/function (_ExtendableError6) {
  _inherits(InvalidObjectNameError, _ExtendableError6);

  var _super6 = _createSuper(InvalidObjectNameError);

  function InvalidObjectNameError(message) {
    _classCallCheck(this, InvalidObjectNameError);

    return _super6.call(this, message);
  }

  return _createClass(InvalidObjectNameError);
}(_es6Error.default); // AccessKeyRequiredError generated by signature methods when access
// key is not found.


exports.InvalidObjectNameError = InvalidObjectNameError;

var AccessKeyRequiredError = /*#__PURE__*/function (_ExtendableError7) {
  _inherits(AccessKeyRequiredError, _ExtendableError7);

  var _super7 = _createSuper(AccessKeyRequiredError);

  function AccessKeyRequiredError(message) {
    _classCallCheck(this, AccessKeyRequiredError);

    return _super7.call(this, message);
  }

  return _createClass(AccessKeyRequiredError);
}(_es6Error.default); // SecretKeyRequiredError generated by signature methods when secret
// key is not found.


exports.AccessKeyRequiredError = AccessKeyRequiredError;

var SecretKeyRequiredError = /*#__PURE__*/function (_ExtendableError8) {
  _inherits(SecretKeyRequiredError, _ExtendableError8);

  var _super8 = _createSuper(SecretKeyRequiredError);

  function SecretKeyRequiredError(message) {
    _classCallCheck(this, SecretKeyRequiredError);

    return _super8.call(this, message);
  }

  return _createClass(SecretKeyRequiredError);
}(_es6Error.default); // ExpiresParamError generated when expires parameter value is not
// well within stipulated limits.


exports.SecretKeyRequiredError = SecretKeyRequiredError;

var ExpiresParamError = /*#__PURE__*/function (_ExtendableError9) {
  _inherits(ExpiresParamError, _ExtendableError9);

  var _super9 = _createSuper(ExpiresParamError);

  function ExpiresParamError(message) {
    _classCallCheck(this, ExpiresParamError);

    return _super9.call(this, message);
  }

  return _createClass(ExpiresParamError);
}(_es6Error.default); // InvalidDateError generated when invalid date is found.


exports.ExpiresParamError = ExpiresParamError;

var InvalidDateError = /*#__PURE__*/function (_ExtendableError10) {
  _inherits(InvalidDateError, _ExtendableError10);

  var _super10 = _createSuper(InvalidDateError);

  function InvalidDateError(message) {
    _classCallCheck(this, InvalidDateError);

    return _super10.call(this, message);
  }

  return _createClass(InvalidDateError);
}(_es6Error.default); // InvalidPrefixError generated when object prefix provided is invalid
// or does not conform to AWS S3 object key restrictions.


exports.InvalidDateError = InvalidDateError;

var InvalidPrefixError = /*#__PURE__*/function (_ExtendableError11) {
  _inherits(InvalidPrefixError, _ExtendableError11);

  var _super11 = _createSuper(InvalidPrefixError);

  function InvalidPrefixError(message) {
    _classCallCheck(this, InvalidPrefixError);

    return _super11.call(this, message);
  }

  return _createClass(InvalidPrefixError);
}(_es6Error.default); // InvalidBucketPolicyError generated when the given bucket policy is invalid.


exports.InvalidPrefixError = InvalidPrefixError;

var InvalidBucketPolicyError = /*#__PURE__*/function (_ExtendableError12) {
  _inherits(InvalidBucketPolicyError, _ExtendableError12);

  var _super12 = _createSuper(InvalidBucketPolicyError);

  function InvalidBucketPolicyError(message) {
    _classCallCheck(this, InvalidBucketPolicyError);

    return _super12.call(this, message);
  }

  return _createClass(InvalidBucketPolicyError);
}(_es6Error.default); // IncorrectSizeError generated when total data read mismatches with
// the input size.


exports.InvalidBucketPolicyError = InvalidBucketPolicyError;

var IncorrectSizeError = /*#__PURE__*/function (_ExtendableError13) {
  _inherits(IncorrectSizeError, _ExtendableError13);

  var _super13 = _createSuper(IncorrectSizeError);

  function IncorrectSizeError(message) {
    _classCallCheck(this, IncorrectSizeError);

    return _super13.call(this, message);
  }

  return _createClass(IncorrectSizeError);
}(_es6Error.default); // InvalidXMLError generated when an unknown XML is found.


exports.IncorrectSizeError = IncorrectSizeError;

var InvalidXMLError = /*#__PURE__*/function (_ExtendableError14) {
  _inherits(InvalidXMLError, _ExtendableError14);

  var _super14 = _createSuper(InvalidXMLError);

  function InvalidXMLError(message) {
    _classCallCheck(this, InvalidXMLError);

    return _super14.call(this, message);
  }

  return _createClass(InvalidXMLError);
}(_es6Error.default); // S3Error is generated for errors returned from S3 server.
// see getErrorTransformer for details


exports.InvalidXMLError = InvalidXMLError;

var S3Error = /*#__PURE__*/function (_ExtendableError15) {
  _inherits(S3Error, _ExtendableError15);

  var _super15 = _createSuper(S3Error);

  function S3Error(message) {
    _classCallCheck(this, S3Error);

    return _super15.call(this, message);
  }

  return _createClass(S3Error);
}(_es6Error.default);

exports.S3Error = S3Error;
//# sourceMappingURL=errors.js.map
