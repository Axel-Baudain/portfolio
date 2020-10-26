import React from 'react';
import './style.scss';

function App({ incrementProgressBar, progression }) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="header__title">
            Axel Baudain <br />
            Développeur web Fullstack
          </p>
        </div>
        <button className="loading__name">
          Me découvrir
        </button>
      </header>
    </div>
  );
}

export default App;
