'use strict';

import React from 'react';
import h from 'react-hyperscript';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  render() {
    return h('div', {className: 'jk-home'}, [
      h('div', {className: 'jk-info'}, [
        h('h1', 'Jack Ketcham'),
        h('p', 'code, photography, music'),
        h('ul', {className: 'jk-list'}, [
          h('li', [
            h('a', {href: 'https://github.com/jketcham', className: 'jk-link', target: '_blank'}, 'GitHub')
          ]),
          h('li', [
            h('a', {href: 'https://twitter.com/_jket', className: 'jk-link', target: '_blank'}, 'Twitter')
          ]),
          h('li', [
            h('a', {href: 'https://www.flickr.com/photos/71899610@N04', className: 'jk-link', target: '_blank'}, 'Flickr')
          ])
        ]),
        h('a', {href: 'mailto:jack@jackketcham.com'}, 'Email')
      ])
    ]);
  }
}

module.exports = Home;
