import React, { useEffect } from 'react';
import { Typewriter } from 'react-typewriting-effect';
import progressbarReducer from '../../reducers/progressbar';
import './style.scss';

function App({ incrementProgressBar, progression }) {
  let interval = {};
  useEffect(() => {
    interval = setInterval(() => {
      incrementProgressBar();
    }, 15);
  }, [])

setTimeout(() => {
  clearInterval(interval);
}, 2000);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
