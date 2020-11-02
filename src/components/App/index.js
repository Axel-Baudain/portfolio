// Library imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// CSS imports
import './style.scss';

// Components imports
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import Header from '../Header';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';

// TODO : Changer la police d'écriture globale

function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
