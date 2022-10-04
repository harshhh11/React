import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch> // Only the first one that matches is displayed 
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*"> // Catch All Path
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};
//path is specific prop you can't change it.

export default ReactRouterSetup;
