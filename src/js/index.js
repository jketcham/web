'use strict';

var h = require('react-hyperscript');
var history = require('history/lib/createBrowserHistory');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

var Root = require('./components/root');
var Home = require('./components/home');

var routes = (
  h(Route, {path: "/", component: Root}, [
    h(IndexRoute, {component: Home})
  ])
);

ReactDOM.render(h(Router, {history: history()}, [routes]), document.getElementById('root'));

// let people know what's up
console.log('%cWant to check out the code for this website? Type go()', 'color:#03A0FF');

window.go = function() {
  window.location.href = 'https://github.com/jketcham/portfolio';
  return 'cool!';
}
