import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import Home from "./app/Home.jsx";
import About from "./app/About.jsx";
import Contact from "./app/Contact.jsx";
import { HashRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </HashRouter>
), document.getElementById('app'))