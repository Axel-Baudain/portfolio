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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
