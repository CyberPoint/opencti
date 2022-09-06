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
'use strict';

var useIsOperationNodeActive = require('./useIsOperationNodeActive');

var useStaticFragmentNodeWarning = require('./useStaticFragmentNodeWarning');

var _require = require('relay-runtime'),
    getFragment = _require.getFragment;

function useIsParentQueryActive(fragmentInput, fragmentRef) {
  var fragmentNode = getFragment(fragmentInput);
  useStaticFragmentNodeWarning(fragmentNode, 'first argument of useIsParentQueryActive()');
  return useIsOperationNodeActive(fragmentNode, fragmentRef);
}

module.exports = useIsParentQueryActive;