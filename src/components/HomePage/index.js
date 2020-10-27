// Library imports
import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-typewriting-effect'

// CSS imports
import './style.scss';

const HomePage = () => (
  <header className="home__header">
    <div className="home__title home__item">
      <Typewriter string="Axel Baudain" delay={30} stopBlinkinOnComplete cursor="|" />
    </div>
    <div className="home__item">
      <div className="home__subtitle">
        Développeur web <span className="fullstack">Fullstack</span> 💻
      </div>
      <div className="home__subtitle">
        Spécialisé en <span className="react">React <i class="fab fa-react" /></span>
      </div>
    </div>
    <Link className="home__item link" to="/menu">
      <button className="btn-discover">
        Me découvrir
    </button>
    </Link>
  </header>
);

export default HomePage;
