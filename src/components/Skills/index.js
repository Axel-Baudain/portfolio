import React from 'react';
import { Typewriter } from 'react-typewriting-effect'

import './style.scss';
import SingleSkill from './SingleSkill';

const Skills = () => (
  <div className="skills__page">
    <div className="skills__title">
      <Typewriter string="Mes skills" delay={20} cursor="|" stopBlinkinOnComplete />
  </div>
    <div className="skills__list">
      <div className="list__title">
        Systèmes d'exploitation
      </div>
      <SingleSkill skillname="Windows 10" percent={95} />
      <SingleSkill skillname="Ubuntu (Linux)" percent={75} />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Langages
      </div>
      <SingleSkill skillname="HTML 5" percent={75} />
      <SingleSkill skillname="CSS 3" percent={80} />
      <SingleSkill skillname="PHP 7+" percent={70} />
      <SingleSkill skillname="JavaScript" percent={90} />
      <SingleSkill skillname="SQL" percent={60} />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Frameworks
      </div>
      <SingleSkill skillname="React-JS" percent={90} />
      <SingleSkill skillname="Redux" percent={85} />
      <SingleSkill skillname="SemanticUI" percent={55} />
      <SingleSkill skillname="Bootstrap (CSS)" percent={60} />
      <SingleSkill skillname="AltoRouter (PHP)" percent={85} />
      <SingleSkill skillname="Lumen (PHP)" percent={50} />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Tests unitaires
      </div>
      <SingleSkill skillname="TDD" percent={30} />
      <SingleSkill skillname="Mocha-JS" percent={75} />
      <SingleSkill skillname="Chai-JS" percent={70} />
      <SingleSkill skillname="Enzyme-JS" percent={50} />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Base de données
      </div>
      <SingleSkill skillname="MySQL" percent={60} />
      <SingleSkill skillname="MariaDB" percent={60} />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Outil de versionning
      </div>
      <SingleSkill skillname="GIT" percent={75} />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Skills annexes
      </div>
      <SingleSkill skillname="Whimsical" percent={80} />
      <SingleSkill skillname="Draw.IO" percent={70} />
      <SingleSkill skillname="Adobe Illustrator" percent={25} />
    </div>
  </div>
);

export default Skills;
