'use strict';

import React from 'react';
import h from 'react-hyperscript';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Lines extends React.Component {
  constructor(props) {
    super(props);

    this.randomAngles = this.randomAngles.bind(this);
  }

  randomAngles() {
    var lines = [];

    for (let i = 0; i < getRandomInt(3, 6); i++) {
      var style = {
        width: getRandomInt(100, 500) + 'px',
        transform: 'rotate(' + getRandomInt(-180, 180) + 'deg) translateY(' + getRandomInt(-100, 100) + 'px)',
        animation: 'spin-' + getRandomInt(1, 5) + ' ' + getRandomInt(150, 500) + 's infinite'
      };

      var line = h('div', {className: 'line', style: style, key: 'line-' + i});

      lines.push(line);
    }

    return lines;
  }

  render() {
    return h('div', {className: 'lines'}, [
      this.randomAngles()
    ])
  }
}

module.exports = Lines;
