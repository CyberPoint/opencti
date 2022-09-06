/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var React = require('react');

var ReactRelayContext = require('./ReactRelayContext');

function ReactRelayFragmentMockRenderer(props) {
  return /*#__PURE__*/React.createElement(ReactRelayContext.Provider, {
    value: {
      environment: props.environment
    }
  }, props.render());
}

module.exports = ReactRelayFragmentMockRenderer;