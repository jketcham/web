'use strict';

import React from 'react';
import h from 'react-hyperscript';

class Root extends React.Component {
  render() {
    return this.props.children;
  }
}

module.exports = Root;
