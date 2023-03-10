import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import './style.scss';
import './style-mobile.scss';

import profilePicture from "../../assets/images/20201019_110817.png";

const About = () => (
  <div className="about__page">
    <div className="about__title">
      <Typewriter string="A propos de moi ..." delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div className="about__content">
    <span role="img" aria-label="Blouse de laboratoire">🥼</span>Actuellement technicien de laboratoire, je cherche à finaliser une reconversion professionnelle dans le développement.
    <br />
    <span role="img" aria-label="Emoji natation">⚡</span> Ce domaine m'étant familier depuis des années, je me suis lancé dans une formation complète afin de pouvoir acquérir des compétences cruciales à mon efficacité en entreprise.
    <br />
    <span role="img" aria-label="Emoji natation">🧠</span> En attendant de pouvoir accroître mes compétences et mes connaissances à vos côtés, j'assouvis ma curiosité par mes propres moyens !
    </div>
  </div>
);

export default About;
