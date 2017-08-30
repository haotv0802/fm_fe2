import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import Home from "./app/Home.jsx";
import About from "./app/About.jsx";
import Contact from "./app/Contact.jsx";
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home} />
      <Route path = "home" component = {Home} />
      <Route path = "about" component = {About} />
      <Route path = "contact" component = {Contact} />
    </Route>
  </Router>

), document.getElementById('app'))