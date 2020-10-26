// Library imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// CSS imports
import './style.scss';

// Components imports
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import Menu from '../Menu';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route>
         <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
