import React, { useEffect } from 'react';
import { Typewriter } from 'react-typewriting-effect';
import progressbarReducer from '../../reducers/progressbar';
import './style.scss';

function App({ incrementProgressBar, progression }) {
  let interval = {};
  useEffect(() => {
    interval = setInterval(() => {
      incrementProgressBar();
    }, 20);
  }, [])

  setTimeout(() => {
    clearInterval(interval);
  }, 3000);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Axel Baudain <br />
            Développeur web Fullstack
          </p>
        </div>
        <p className="loading__name">
          <Typewriter
            string="Chargement en cours, veuillez patienter ..."
            delay={30}
            cursor="_"
            stopBlinkinOnComplete
          />
        </p>
        <div className="loading-bar">
          <div className="loading-bar__level" style={{ width: `${progression}%` }} />
        </div>
        <div>
          <button>Continuer</button>
        </div>
      </header>
    </div>
  );
}

export default App;
