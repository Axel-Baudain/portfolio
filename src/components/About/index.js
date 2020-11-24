import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import './style.scss';
import './style-mobile.scss';

import profilePicture from "../../assets/images/20201019_110817.jpg";

const About = () => (
  <div className="about__page">
    <div className="image__container">
      <img className="picture-profile" src={profilePicture} alt="Axel Baudain"/>
    </div>
    <div className="about__title">
      <Typewriter string="A propos de moi ..." delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div className="about__content">
      Anciennement technicien de laboratoire <span role="img" aria-label="Blouse de laboratoire">🥼</span>, je me suis lancé dans ma passion principale : Le développement. Après avoir remarqué que ce tournant pouvait
      m'apporter les talents nécessaires au développement de ma créativité, je me suis lancé dans le grand bain <span role="img" aria-label="Emoji natation">🏊</span>.
    </div>
  </div>
);

export default About;
