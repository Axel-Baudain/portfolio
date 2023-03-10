import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import './style.scss';
import './style-mobile.scss';

import SingleProject from './SingleProject';

import brokentimeimage from '../../assets/images/pocketwatch.jpg';
import scenariothequeimage from '../../assets/images/library.jpg';
import pongremasteredimage from '../../assets/images/arcade.jpg';
import haircutimage from '../../assets/images/haircut.jpg';
import lastprojectimage from '../../assets/images/rocket.jpg';

const brokentimetitle = "Broken Time";
const brokentimedesc = "Un site de fictions interactives dans lesquelles les joueurs doivent aider un protagoniste à survivre en milieu hostile. Réalisé lors de l'Apothéose de l'École O'Clock."

const scenariotequetitle = "Scenarioz"
const scenariothequedesc = "Une bibliothèque communautaire de scénarios de jeux de rôles, destinée aux maîtres de jeux. [EN PAUSE ⏸️]";

const pongtitle = "Pong Remastered"
const pongdesc = "Le célèbre jeu PONG revisité et mis en ligne. Jouable à deux en local !";

const haircuttitle = "Betty B. Coiffure"
const haircutdesc = "Le site vitrine d'un salon de coiffure réalisé gratuitement au bénéfice de sa propriétaire [EN PAUSE ⏸️]";

const lastprojecttitle = "A venir ...";
const lastprojectdesc = "D'autres projets verront le jour et seront affichés ici ! 🚀";

const Projects = () => (
  <div className="projects__page">
    <div className="projects__title">
      <Typewriter string="Mes projets" delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div className="all__projects">
      <SingleProject title={brokentimetitle} emoji="🕰️" desc={brokentimedesc} image={brokentimeimage} link="http://brokentime-project.surge.sh/" available={true} />
      <SingleProject title={pongtitle} emoji="🎮" desc={pongdesc} image={pongremasteredimage} link="https://pong-remastered.surge.sh" available={true} />
      <SingleProject title={scenariotequetitle} emoji="📚" desc={scenariothequedesc} image={scenariothequeimage} link="https://scenarioz.surge.sh" available={false} />
      <SingleProject title={haircuttitle} emoji="✂️" desc={haircutdesc} image={haircutimage} link="https://bettybcoiffure-demo.surge.sh" available={false} />
      <SingleProject title={lastprojecttitle} desc={lastprojectdesc} image={lastprojectimage} />
    </div>
  </div>
);

export default Projects;
