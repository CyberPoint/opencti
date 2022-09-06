/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var preloadQuery = require('./preloadQuery_DEPRECATED');

function prepareEntryPoint(environmentProvider, entryPoint, entryPointParams) {
  // Start loading the code for the entrypoint
  if (entryPoint.root.getModuleIfRequired() == null) {
    entryPoint.root.load();
  }

  var preloadProps = entryPoint.getPreloadProps(entryPointParams);
  var queries = preloadProps.queries,
      entryPoints = preloadProps.entryPoints;
  var preloadedQueries = {};
  var preloadedEntryPoints = {};

  if (queries != null) {
    var queriesPropNames = Object.keys(queries);
    queriesPropNames.forEach(function (queryPropName) {
      var _queries$queryPropNam = queries[queryPropName],
          environmentProviderOptions = _queries$queryPropNam.environmentProviderOptions,
          options = _queries$queryPropNam.options,
          parameters = _queries$queryPropNam.parameters,
          variables = _queries$queryPropNam.variables;
      var environment = environmentProvider.getEnvironment(environmentProviderOptions);
      preloadedQueries[queryPropName] = preloadQuery(environment, parameters, variables, options, environmentProviderOptions);
    });
  }

  if (entryPoints != null) {
    var entryPointPropNames = Object.keys(entryPoints);
    entryPointPropNames.forEach(function (entryPointPropName) {
      var entryPointDescription = entryPoints[entryPointPropName];

      if (entryPointDescription == null) {
        return;
      }

      var nestedEntryPoint = entryPointDescription.entryPoint,
          nestedParams = entryPointDescription.entryPointParams;
      preloadedEntryPoints[entryPointPropName] = prepareEntryPoint(environmentProvider, nestedEntryPoint, nestedParams);
    });
  }
}

module.exports = prepareEntryPoint;