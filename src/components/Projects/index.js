import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import './style.scss';

import SingleProject from './SingleProject';

const brokentimetitle = "Broken Time";
const brokentimeimage = "https://images.unsplash.com/photo-1447015237013-0e80b2786ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
const brokentimedesc = "Un site de fictions interactives dans lesquelles les joueurs doivent aider un protagoniste à survivre en milieu hostile. Réalisé lors de l'Apothéose de l'École O'Clock."

const scenariotequetitle = "La scénariothèque"
const scenariothequeimage = "https://images.unsplash.com/photo-1578377375762-cbcc98d68af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const scenariothequedesc = "Work In Progres...";

const lastprojecttitle = "A venir ...";
const lastprojectimage = "https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80";
const lastprojectdesc = "D'autres projets verront le jour et seront affichés ici ! 🚀";

const Projects = () => (
  <div className="projects__page">
    <div className="projects__title">
      <Typewriter string="Mes projets" delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div className="all__projects">
      <SingleProject title={brokentimetitle} emoji="🕰️" desc={brokentimedesc} image={brokentimeimage} link="http://brokentime-project.surge.sh/" available={true} />
      <SingleProject title={scenariotequetitle} emoji="📚" desc={scenariothequedesc} image={scenariothequeimage} />
      <SingleProject title={lastprojecttitle} desc={lastprojectdesc} image={lastprojectimage} />
    </div>
  </div>
);

export default Projects;
