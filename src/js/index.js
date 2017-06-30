const h = require('react-hyperscript');
const history = require('history/lib/createBrowserHistory');
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;
const Route = ReactRouter.Route;

const Root = require('./components/root');
const Home = require('./components/home');

const routes = (
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
