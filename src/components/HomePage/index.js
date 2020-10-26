// Library imports
import React from 'react';
import { Link } from 'react-router-dom';

// CSS imports
import './style.scss';
const profilepicture = "https://media.discordapp.net/attachments/364094342953959424/770280981894004746/20201019_110817.jpg?width=677&height=677";

const HomePage = () => (
  <header className="homepage__header">
    <div className="header__picture-container">
      <img className="header__picture" src={profilepicture} />
    </div>
    <div>
      <div className="header__title">
        Axel Baudain
      </div>
      <div className="header__subtitle">
        Développeur web Fullstack
      </div>
      <div className="header__subtitle">
       Spécialisé en React <i class="fab fa-react" />
      </div>
    </div>
    <Link className="link" to="/menu">
      <button className="btn-discover">
        Me découvrir
    </button>
    </Link>
  </header>
);

export default HomePage;
