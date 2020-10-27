import React from 'react';
import './style.scss';

import SingleProject from './SingleProject';

const brokentimetitle = "Broken Time";
const brokentimeimage = "https://images.unsplash.com/photo-1447015237013-0e80b2786ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
const brokentimedesc = "Un site de fictions interactives dans lesquelles les joueurs doivent aider un protagoniste à survivre en milieu hostile. Réalisé lors de l'Apothéose de l'École O'Clock."

const fakeimage = "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const fakeimage2 = "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1343&q=80"
const fakeimage3 = "https://images.unsplash.com/photo-1542924597-e73e0e35c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=621&q=80"

const Projects = () => (
  <div className="projects__page">
    <div className="projects__title">
      Mes projets
    </div>
    <div className="all__projects">
      <SingleProject title={brokentimetitle} desc={brokentimedesc} image={brokentimeimage} link="http://brokentime-project.surge.sh/" />
      <SingleProject image={fakeimage} />
      <SingleProject image={fakeimage2} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
      <SingleProject image={fakeimage3} />
    </div>
  </div>
);

export default Projects;
