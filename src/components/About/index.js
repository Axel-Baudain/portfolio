import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import './style.scss';

const About = () => (
  <div className="about__page">
    <div className="about__title">
      <Typewriter string="A propos de moi ..." delay={10} cursor="|" stopBlinkinOnComplete />
    </div>
    <div className="about__content">
      Anciennement technicien de laboratoire <span role="img" aria-label="Blouse de laboratoire">🥼</span>, je me suis lancé dans ma passion principale : Le développement. Après avoir remarqué que ce tournant pouvait
      m'apporter les talents nécessaires au développement de ma créativité, je me suis lancé dans le grand bain <span role="img" aria-label="Emoji natation">🏊</span>.
    </div>
  </div>
);

export default About;
