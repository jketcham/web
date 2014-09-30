/*global define */
define([], function () {
  'use strict';

  return {
    /**
     * lol tagline word swapping
     * @param {String} element Element to swap new words in to
     * @return {String} Word to swap in place in the element
     */
    swapWord: function(element) {
      setInterval(function() {
        var tagline_words = ['it', 'shit', 'pixels', 'code', 'experiences', 'ideas', 'dreams', 'coffee', 'burritos', 'hackathons', 'Javascript', 'designs', 'impromptu jam sessions', '...', 'cool stuff'];
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
    },

    /**
     * Apply reading theme depending on user input and day/night
     * @return {Boolean} True if it is night, false if day
     */
    applyReadingTheme: function() {
      var storage = localStorage.getItem('readingTheme'),
          doc = document.documentElement;

      if(storage == 'true') {
        doc.classList.add('dark-theme');
      }

      document.querySelectorAll('.js-toggle-theme').addEventListener('click', function() {
        if(doc.classList.contains('dark-theme')) {
          doc.classList.remove('dark-theme');
          localStorage.setItem('readingTheme', 'false');
        } else {
          doc.classList.add('dark-theme');
          localStorage.setItem('readingTheme', 'true');
        }
      });
    }
  }
});