// Library imports
import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-typewriting-effect'

// CSS imports
import './style.scss';

const HomePage = () => (
  <header className="homepage__header">
    <h1 className="home__title home__item">
      <Typewriter string="Salut ! 👋" delay={20} stopBlinkinOnComplete cursor="|" />
    </h1>
    <div className="home__item">
      <div className="home__subtitle">
        Je suis Axel Baudain,
      </div>
      <div className="home__subtitle">
        un développeur web <span className="fullstack">Fullstack</span> 💻
      </div>
      <div className="home__subtitle">
        Spécialisé en <span className="react">React <i class="fab fa-react" /></span>
      </div>
    </div>
    <Link className="home__item link" to="/about">
      <button className="btn-discover">
        Me découvrir
    </button>
    </Link>
  </header>
);

export default HomePage;
