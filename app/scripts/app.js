/*global define */
define([], function () {
  'use strict';

  return {
    /**
     * lol tagline word swapping
     * @param {String} element Element to swap new words in to
     * @return {String} Word to swap in place in the element
     */
    wordSwap: function(element) {
      setInterval(function() {
        var tagline_words = ['it', 'shit', 'pixels', 'coffee', 'burritos', 'hackathons', 'Javascript', 'designs', 'impromptu jam sessions', '...', 'cool stuff'];
        var random = Math.floor(Math.random() * tagline_words.length);
        element['innerText'] = tagline_words[random];
      }, 2000);
    },

    /**
     * For the curious
     * Outputs some information to the console using styles
     */
    consoleSwag: function() {
      console.log('%c Oh hello! I suppose you might be interested to see how I made this site.', 'color: red; font-weight: bold; font-size: 12px;');
      console.log('Run siteInfo() if you want to find out more');
      window.siteInfo = function() {
        console.log('This website was made using: JQuery, RequireJS, Bootstrap and swag.  Redirecting you to the GitHub repo...');
        setTimeout(window.location.replace('https://github.com/jketcham/portfolio'), 3000);
      }
    }
  }
});