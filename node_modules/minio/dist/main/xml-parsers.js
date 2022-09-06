"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBucketEncryptionConfig = parseBucketEncryptionConfig;
exports.parseBucketNotification = parseBucketNotification;
exports.parseBucketRegion = parseBucketRegion;
exports.parseBucketVersioningConfig = parseBucketVersioningConfig;
exports.parseCompleteMultipart = parseCompleteMultipart;
exports.parseCopyObject = parseCopyObject;
exports.parseError = parseError;
exports.parseInitiateMultipart = parseInitiateMultipart;
exports.parseLifecycleConfig = parseLifecycleConfig;
exports.parseListBucket = parseListBucket;
exports.parseListMultipart = parseListMultipart;
exports.parseListObjects = parseListObjects;
exports.parseListObjectsV2 = parseListObjectsV2;
exports.parseListObjectsV2WithMetadata = parseListObjectsV2WithMetadata;
exports.parseListParts = parseListParts;
exports.parseObjectLegalHoldConfig = parseObjectLegalHoldConfig;
exports.parseObjectLockConfig = parseObjectLockConfig;
exports.parseObjectRetentionConfig = parseObjectRetentionConfig;
exports.parseReplicationConfig = parseReplicationConfig;
exports.parseTagging = parseTagging;
exports.uploadPartParser = uploadPartParser;

var _fastXmlParser = _interopRequireDefault(require("fast-xml-parser"));

var _lodash = _interopRequireDefault(require("lodash"));

var errors = _interopRequireWildcard(require("./errors.js"));

var _helpers = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * MinIO Javascript Library for Amazon S3 Compatible Cloud Storage, (C) 2015 MinIO, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var parseXml = function parseXml(xml) {
  var result = null;
  result = _fastXmlParser.default.parse(xml);

  if (result.Error) {
    throw result.Error;
  }

  return result;
}; // Parse XML and return information as Javascript types
// parse error XML response


function parseError(xml, headerInfo) {
  var xmlErr = {};

  var xmlObj = _fastXmlParser.default.parse(xml);

  if (xmlObj.Error) {
    xmlErr = xmlObj.Error;
  }

  var e = new errors.S3Error();

  _lodash.default.each(xmlErr, function (value, key) {
    e[key.toLowerCase()] = value;
  });

  _lodash.default.each(headerInfo, function (value, key) {
    e[key] = value;
  });

  return e;
} // parse XML response for copy object


function parseCopyObject(xml) {
  var result = {
    etag: "",
    lastModified: ""
  };
  var xmlobj = parseXml(xml);

  if (!xmlobj.CopyObjectResult) {
    throw new errors.InvalidXMLError('Missing tag: "CopyObjectResult"');
  }

  xmlobj = xmlobj.CopyObjectResult;
  if (xmlobj.ETag) result.etag = xmlobj.ETag.replace(/^"/g, '').replace(/"$/g, '').replace(/^&quot;/g, '').replace(/&quot;$/g, '').replace(/^&#34;/g, '').replace(/&#34;$/g, '');
  if (xmlobj.LastModified) result.lastModified = new Date(xmlobj.LastModified);
  return result;
} // parse XML response for listing in-progress multipart uploads


function parseListMultipart(xml) {
  var result = {
    uploads: [],
    prefixes: [],
    isTruncated: false
  };
  var xmlobj = parseXml(xml);

  if (!xmlobj.ListMultipartUploadsResult) {
    throw new errors.InvalidXMLError('Missing tag: "ListMultipartUploadsResult"');
  }

  xmlobj = xmlobj.ListMultipartUploadsResult;
  if (xmlobj.IsTruncated) result.isTruncated = xmlobj.IsTruncated;
  if (xmlobj.NextKeyMarker) result.nextKeyMarker = xmlobj.NextKeyMarker;
  if (xmlobj.NextUploadIdMarker) result.nextUploadIdMarker = xmlobj.nextUploadIdMarker;

  if (xmlobj.CommonPrefixes) {
    (0, _helpers.toArray)(xmlobj.CommonPrefixes).forEach(function (prefix) {
      result.prefixes.push({
        prefix: (0, _helpers.sanitizeObjectKey)((0, _helpers.toArray)(prefix.Prefix)[0])
      });
    });
  }

  if (xmlobj.Upload) {
    (0, _helpers.toArray)(xmlobj.Upload).forEach(function (upload) {
      var key = upload.Key;
      var uploadId = upload.UploadId;
      var initiator = {
        id: upload.Initiator.ID,
        displayName: upload.Initiator.DisplayName
      };
      var owner = {
        id: upload.Owner.ID,
        displayName: upload.Owner.DisplayName
      };
      var storageClass = upload.StorageClass;
      var initiated = new Date(upload.Initiated);
      result.uploads.push({
        key,
        uploadId,
        initiator,
        owner,
        storageClass,
        initiated
      });
    });
  }

  return result;
} // parse XML response to list all the owned buckets


function parseListBucket(xml) {
  var result = [];
  var xmlobj = parseXml(xml);

  if (!xmlobj.ListAllMyBucketsResult) {
    throw new errors.InvalidXMLError('Missing tag: "ListAllMyBucketsResult"');
  }

  xmlobj = xmlobj.ListAllMyBucketsResult;

  if (xmlobj.Buckets) {
    if (xmlobj.Buckets.Bucket) {
      (0, _helpers.toArray)(xmlobj.Buckets.Bucket).forEach(function (bucket) {
        var name = bucket.Name;
        var creationDate = new Date(bucket.CreationDate);
        result.push({
          name,
          creationDate
        });
      });
    }
  }

  return result;
} // parse XML response for bucket notification


function parseBucketNotification(xml) {
  var result = {
    TopicConfiguration: [],
    QueueConfiguration: [],
    CloudFunctionConfiguration: []
  }; // Parse the events list

  var genEvents = function genEvents(events) {
    var result = [];

    if (events) {
      (0, _helpers.toArray)(events).forEach(function (s3event) {
        result.push(s3event);
      });
    }

    return result;
  }; // Parse all filter rules


  var genFilterRules = function genFilterRules(filters) {
    var result = [];

    if (filters) {
      filters = (0, _helpers.toArray)(filters);

      if (filters[0].S3Key) {
        filters[0].S3Key = (0, _helpers.toArray)(filters[0].S3Key);

        if (filters[0].S3Key[0].FilterRule) {
          (0, _helpers.toArray)(filters[0].S3Key[0].FilterRule).forEach(function (rule) {
            var Name = (0, _helpers.toArray)(rule.Name)[0];
            var Value = (0, _helpers.toArray)(rule.Value)[0];
            result.push({
              Name,
              Value
            });
          });
        }
      }
    }

    return result;
  };

  var xmlobj = parseXml(xml);
  xmlobj = xmlobj.NotificationConfiguration; // Parse all topic configurations in the xml

  if (xmlobj.TopicConfiguration) {
    (0, _helpers.toArray)(xmlobj.TopicConfiguration).forEach(function (config) {
      var Id = (0, _helpers.toArray)(config.Id)[0];
      var Topic = (0, _helpers.toArray)(config.Topic)[0];
      var Event = genEvents(config.Event);
      var Filter = genFilterRules(config.Filter);
      result.TopicConfiguration.push({
        Id,
        Topic,
        Event,
        Filter
      });
    });
  } // Parse all topic configurations in the xml


  if (xmlobj.QueueConfiguration) {
    (0, _helpers.toArray)(xmlobj.QueueConfiguration).forEach(function (config) {
      var Id = (0, _helpers.toArray)(config.Id)[0];
      var Queue = (0, _helpers.toArray)(config.Queue)[0];
      var Event = genEvents(config.Event);
      var Filter = genFilterRules(config.Filter);
      result.QueueConfiguration.push({
        Id,
        Queue,
        Event,
        Filter
      });
    });
  } // Parse all QueueConfiguration arrays


  if (xmlobj.CloudFunctionConfiguration) {
    (0, _helpers.toArray)(xmlobj.CloudFunctionConfiguration).forEach(function (config) {
      var Id = (0, _helpers.toArray)(config.Id)[0];
      var CloudFunction = (0, _helpers.toArray)(config.CloudFunction)[0];
      var Event = genEvents(config.Event);
      var Filter = genFilterRules(config.Filter);
      result.CloudFunctionConfiguration.push({
        Id,
        CloudFunction,
        Event,
        Filter
      });
    });
  }

  return result;
} // parse XML response for bucket region


function parseBucketRegion(xml) {
  // return region information
  return parseXml(xml).LocationConstraint;
} // parse XML response for list parts of an in progress multipart upload


function parseListParts(xml) {
  var xmlobj = parseXml(xml);
  var result = {
    isTruncated: false,
    parts: [],
    marker: undefined
  };

  if (!xmlobj.ListPartsResult) {
    throw new errors.InvalidXMLError('Missing tag: "ListPartsResult"');
  }

  xmlobj = xmlobj.ListPartsResult;
  if (xmlobj.IsTruncated) result.isTruncated = xmlobj.IsTruncated;
  if (xmlobj.NextPartNumberMarker) result.marker = +(0, _helpers.toArray)(xmlobj.NextPartNumberMarker)[0];

  if (xmlobj.Part) {
    (0, _helpers.toArray)(xmlobj.Part).forEach(function (p) {
      var part = +(0, _helpers.toArray)(p.PartNumber)[0];
      var lastModified = new Date(p.LastModified);
      var etag = p.ETag.replace(/^"/g, '').replace(/"$/g, '').replace(/^&quot;/g, '').replace(/&quot;$/g, '').replace(/^&#34;/g, '').replace(/&#34;$/g, '');
      result.parts.push({
        part,
        lastModified,
        etag
      });
    });
  }

  return result;
} // parse XML response when a new multipart upload is initiated


function parseInitiateMultipart(xml) {
  var xmlobj = parseXml(xml);

  if (!xmlobj.InitiateMultipartUploadResult) {
    throw new errors.InvalidXMLError('Missing tag: "InitiateMultipartUploadResult"');
  }

  xmlobj = xmlobj.InitiateMultipartUploadResult;
  if (xmlobj.UploadId) return xmlobj.UploadId;
  throw new errors.InvalidXMLError('Missing tag: "UploadId"');
} // parse XML response when a multipart upload is completed


function parseCompleteMultipart(xml) {
  var xmlobj = parseXml(xml).CompleteMultipartUploadResult;

  if (xmlobj.Location) {
    var location = (0, _helpers.toArray)(xmlobj.Location)[0];
    var bucket = (0, _helpers.toArray)(xmlobj.Bucket)[0];
    var key = xmlobj.Key;
    var etag = xmlobj.ETag.replace(/^"/g, '').replace(/"$/g, '').replace(/^&quot;/g, '').replace(/&quot;$/g, '').replace(/^&#34;/g, '').replace(/&#34;$/g, '');
    return {
      location,
      bucket,
      key,
      etag
    };
  } // Complete Multipart can return XML Error after a 200 OK response


  if (xmlobj.Code && xmlobj.Message) {
    var errCode = (0, _helpers.toArray)(xmlobj.Code)[0];
    var errMessage = (0, _helpers.toArray)(xmlobj.Message)[0];
    return {
      errCode,
      errMessage
    };
  }
}

var formatObjInfo = function formatObjInfo(content) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var Key = content.Key,
      LastModified = content.LastModified,
      ETag = content.ETag,
      Size = content.Size,
      VersionId = content.VersionId,
      IsLatest = content.IsLatest;

  if (!(0, _helpers.isObject)(opts)) {
    opts = {};
  }

  var name = (0, _helpers.sanitizeObjectKey)((0, _helpers.toArray)(Key)[0]);
  var lastModified = new Date((0, _helpers.toArray)(LastModified)[0]);
  var etag = (0, _helpers.sanitizeETag)((0, _helpers.toArray)(ETag)[0]);
  return {
    name,
    lastModified,
    etag,
    size: Size,
    versionId: VersionId,
    isLatest: IsLatest,
    isDeleteMarker: opts.IsDeleteMarker ? opts.IsDeleteMarker : false
  };
}; // parse XML response for list objects in a bucket


function parseListObjects(xml) {
  var result = {
    objects: [],
    isTruncated: false
  };
  var isTruncated = false;
  var nextMarker, nextVersionKeyMarker;
  var xmlobj = parseXml(xml);

  var parseCommonPrefixesEntity = function parseCommonPrefixesEntity(responseEntity) {
    if (responseEntity) {
      (0, _helpers.toArray)(responseEntity).forEach(function (commonPrefix) {
        result.objects.push({
          prefix: (0, _helpers.sanitizeObjectKey)((0, _helpers.toArray)(commonPrefix.Prefix)[0]),
          size: 0
        });
      });
    }
  };

  var listBucketResult = xmlobj.ListBucketResult;
  var listVersionsResult = xmlobj.ListVersionsResult;

  if (listBucketResult) {
    if (listBucketResult.IsTruncated) {
      isTruncated = listBucketResult.IsTruncated;
    }

    if (listBucketResult.Contents) {
      (0, _helpers.toArray)(listBucketResult.Contents).forEach(function (content) {
        var name = (0, _helpers.sanitizeObjectKey)((0, _helpers.toArray)(content.Key)[0]);
        var lastModified = new Date((0, _helpers.toArray)(content.LastModified)[0]);
        var etag = (0, _helpers.sanitizeETag)((0, _helpers.toArray)(content.ETag)[0]);
        var size = content.Size;
        result.objects.push({
          name,
          lastModified,
          etag,
          size
        });
      });
    }

    if (listBucketResult.NextMarker) {
      nextMarker = listBucketResult.NextMarker;
    }

    parseCommonPrefixesEntity(listBucketResult.CommonPrefixes);
  }

  if (listVersionsResult) {
    if (listVersionsResult.IsTruncated) {
      isTruncated = listVersionsResult.IsTruncated;
    }

    if (listVersionsResult.Version) {
      (0, _helpers.toArray)(listVersionsResult.Version).forEach(function (content) {
        result.objects.push(formatObjInfo(content));
      });
    }

    if (listVersionsResult.DeleteMarker) {
      (0, _helpers.toArray)(listVersionsResult.DeleteMarker).forEach(function (content) {
        result.objects.push(formatObjInfo(content, {
          IsDeleteMarker: true
        }));
      });
    }

    if (listVersionsResult.NextKeyMarker) {
      nextVersionKeyMarker = listVersionsResult.NextKeyMarker;
    }

    if (listVersionsResult.NextVersionIdMarker) {
      result.versionIdMarker = listVersionsResult.NextVersionIdMarker;
    }

    parseCommonPrefixesEntity(listVersionsResult.CommonPrefixes);
  }

  result.isTruncated = isTruncated;

  if (isTruncated) {
    result.nextMarker = nextVersionKeyMarker || nextMarker;
  }

  return result;
} // parse XML response for list objects v2 in a bucket


function parseListObjectsV2(xml) {
  var result = {
    objects: [],
    isTruncated: false
  };
  var xmlobj = parseXml(xml);

  if (!xmlobj.ListBucketResult) {
    throw new errors.InvalidXMLError('Missing tag: "ListBucketResult"');
  }

  xmlobj = xmlobj.ListBucketResult;
  if (xmlobj.IsTruncated) result.isTruncated = xmlobj.IsTruncated;
  if (xmlobj.NextContinuationToken) result.nextContinuationToken = xmlobj.NextContinuationToken;

  if (xmlobj.Contents) {
    (0, _helpers.toArray)(xmlobj.Contents).forEach(function (content) {
      var name = (0, _helpers.sanitizeObjectKey)((0, _helpers.toArray)(content.Key)[0]);
      var lastModified = new Date(content.LastModified);
      var etag = (0, _helpers.sanitizeETag)(content.ETag);
      var size = content.Size;
      result.objects.push({
        name,
        lastModified,
        etag,
        size
      });
    });
  }

  if (xmlobj.CommonPrefixes) {
    (0, _helpers.toArray)(xmlobj.CommonPrefixes).forEach(function (commonPrefix) {
      result.objects.push({
        prefix: (0, _helpers.sanitizeObjectKey)((0, _helpers.toArray)(commonPrefix.Prefix)[0]),
        size: 0
      });
    });
  }

  return result;
} // parse XML response for list objects v2 with metadata in a bucket


function parseListObjectsV2WithMetadata(xml) {
  var result = {
    objects: [],
    isTruncated: false
  };
  var xmlobj = parseXml(xml);

  if (!xmlobj.ListBucketResult) {
    throw new errors.InvalidXMLError('Missing tag: "ListBucketResult"');
  }

  xmlobj = xmlobj.ListBucketResult;
  if (xmlobj.IsTruncated) result.isTruncated = xmlobj.IsTruncated;
  if (xmlobj.NextContinuationToken) result.nextContinuationToken = xmlobj.NextContinuationToken;

  if (xmlobj.Contents) {
    (0, _helpers.toArray)(xmlobj.Contents).forEach(function (content) {
      var name = (0, _helpers.sanitizeObjectKey)(content.Key);
      var lastModified = new Date(content.LastModified);
      var etag = (0, _helpers.sanitizeETag)(content.ETag);
      var size = content.Size;
      var metadata;

      if (content.UserMetadata != null) {
        metadata = (0, _helpers.toArray)(content.UserMetadata)[0];
      } else {
        metadata = null;
      }

      result.objects.push({
        name,
        lastModified,
        etag,
        size,
        metadata
      });
    });
  }

  if (xmlobj.CommonPrefixes) {
    (0, _helpers.toArray)(xmlobj.CommonPrefixes).forEach(function (commonPrefix) {
      result.objects.push({
        prefix: (0, _helpers.sanitizeObjectKey)((0, _helpers.toArray)(commonPrefix.Prefix)[0]),
        size: 0
      });
    });
  }

  return result;
}

function parseBucketVersioningConfig(xml) {
  var xmlObj = parseXml(xml);
  return xmlObj.VersioningConfiguration;
}

function parseTagging(xml) {
  var xmlObj = parseXml(xml);
  var result = [];

  if (xmlObj.Tagging && xmlObj.Tagging.TagSet && xmlObj.Tagging.TagSet.Tag) {
    var tagResult = xmlObj.Tagging.TagSet.Tag; // if it is a single tag convert into an array so that the return value is always an array.

    if ((0, _helpers.isObject)(tagResult)) {
      result.push(tagResult);
    } else {
      result = tagResult;
    }
  }

  return result;
}

function parseLifecycleConfig(xml) {
  var xmlObj = parseXml(xml);
  return xmlObj.LifecycleConfiguration;
}

function parseObjectLockConfig(xml) {
  var xmlObj = parseXml(xml);
  var lockConfigResult = {};

  if (xmlObj.ObjectLockConfiguration) {
    lockConfigResult = {
      objectLockEnabled: xmlObj.ObjectLockConfiguration.ObjectLockEnabled
    };
    var retentionResp;

    if (xmlObj.ObjectLockConfiguration && xmlObj.ObjectLockConfiguration.Rule && xmlObj.ObjectLockConfiguration.Rule.DefaultRetention) {
      retentionResp = xmlObj.ObjectLockConfiguration.Rule.DefaultRetention || {};
      lockConfigResult.mode = retentionResp.Mode;
    }

    if (retentionResp) {
      var isUnitYears = retentionResp.Years;

      if (isUnitYears) {
        lockConfigResult.validity = isUnitYears;
        lockConfigResult.unit = _helpers.RETENTION_VALIDITY_UNITS.YEARS;
      } else {
        lockConfigResult.validity = retentionResp.Days;
        lockConfigResult.unit = _helpers.RETENTION_VALIDITY_UNITS.DAYS;
      }
    }

    return lockConfigResult;
  }
}

function parseObjectRetentionConfig(xml) {
  var xmlObj = parseXml(xml);
  var retentionConfig = xmlObj.Retention;
  return {
    mode: retentionConfig.Mode,
    retainUntilDate: retentionConfig.RetainUntilDate
  };
}

function parseBucketEncryptionConfig(xml) {
  var encConfig = parseXml(xml);
  return encConfig;
}

function parseReplicationConfig(xml) {
  var xmlObj = parseXml(xml);
  var replicationConfig = {
    ReplicationConfiguration: {
      role: xmlObj.ReplicationConfiguration.Role,
      rules: (0, _helpers.toArray)(xmlObj.ReplicationConfiguration.Rule)
    }
  };
  return replicationConfig;
}

function parseObjectLegalHoldConfig(xml) {
  var xmlObj = parseXml(xml);
  return xmlObj.LegalHold;
}

function uploadPartParser(xml) {
  var xmlObj = parseXml(xml);
  var respEl = xmlObj.CopyPartResult;
  return respEl;
}
//# sourceMappingURL=xml-parsers.js.map
