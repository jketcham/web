'use strict';

import React from 'react';
import h from 'react-hyperscript';

import Lines from './lines';

class Home extends React.Component {
  render() {
    return h('div', [
      h('div', {className: 'jk-center'}, [
        h('div', {className: 'jk-info__container'}, [
          h(Lines),
          h('h1', {id: 'name-jack'}, 'Jack'),
          h('div', {className: 'jk-info'}, [
            h('h1', 'Ketcham'),
            h('p', 'code, photography, music, design'),
            h('ul', {className: 'jk-list'}, [
              h('li', [
                h('a', {href: 'https://github.com/jketcham', className: 'jk-link', target: '_blank'}, 'GitHub')
              ]),
              h('li', [
                h('a', {href: 'https://twitter.com/_jket', className: 'jk-link', target: '_blank'}, 'Twitter')
              ]),
              h('li', [
                h('a', {href: 'https://www.flickr.com/photos/jackketcham', className: 'jk-link', target: '_blank'}, 'Flickr')
              ])
            ]),
            h('a', {href: 'mailto:jack@jackketcham.com'}, 'Email')
          ])
        ])
      ])
    ]);
  }
}

module.exports = Home;
