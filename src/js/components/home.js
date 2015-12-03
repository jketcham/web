'use strict';

import React from 'react';
import h from 'react-hyperscript';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cool: true // will remove
    };
  }

  render() {
    var { cool } = this.state;

    return h('div', {className: 'jk-home'}, [
      h('h1', 'Jack Ketcham'),
      h('p', 'is this cool?'),
      h('strong', cool.toString())
    ]);
  }
}

module.exports = Home;
