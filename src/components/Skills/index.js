import React from 'react';
import { Typewriter } from 'react-typewriting-effect'

import './style.scss';
import './style-mobile.scss';
import SingleSkill from './SingleSkill';

const size = "fa-2x";

const operatingSystems = "fas fa-desktop " + size;
const languages = "fas fa-code " + size;
const frameworks = "fas fa-cogs " + size;
const libraries = "fas fa-book " + size;
const unitTests = "fas fa-vial " + size;
const dataBases = "fas fa-database " + size;
const versionning = "fas fa-server " + size;
const communication = "far fa-comment-alt " + size;
const sideSkills = "fas fa-puzzle-piece " + size;
const futureSkills = "fas fa-download " + size;


const Skills = () => (
  <div className="skills__page">
    <div className="skills__title">
      <Typewriter string="Compétences" delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div className="skills__container" >
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={operatingSystems} />
          <p className="skills__category--title">Syst. D'exploitation</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"Windows 10"} />
          <SingleSkill skillname={"Ubuntu - Linux"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={languages} />
          <p className="skills__category--title">Languages</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"HTML 5"} />
          <SingleSkill skillname={"CSS 3"} />
          <SingleSkill skillname={"SCSS"} />
          <SingleSkill skillname={"PHP 7+"} />
          <SingleSkill skillname={"JavaScript (ES6+)"} />
          <SingleSkill skillname={"SQL"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={frameworks} />
          <p className="skills__category--title">Frameworks</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"React.JS"} />
          <SingleSkill skillname={"Lumen - Laravel (PHP)"} />
          <SingleSkill skillname={"Boostrap (CSS)"} />
          <SingleSkill skillname={"Bulma (CSS)"} />
          <SingleSkill skillname={"SemanticUI (JS)"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={libraries} />
          <p className="skills__category--title">Librairies</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"Redux (JS)"} />
          <SingleSkill skillname={"React-Redux (JS)"} />
          <SingleSkill skillname={"React-Router (JS)"} />
          <SingleSkill skillname={"Axios (JS)"} />
          <SingleSkill skillname={"AltoRouter (PHP)"} />
          <SingleSkill skillname={"AltoDispatcher (PHP)"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={unitTests} />
          <p className="skills__category--title">Tests Unit.</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"Chai.JS"} />
          <SingleSkill skillname={"Mocha.JS"} />
          <SingleSkill skillname={"Enzyme.JS"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={dataBases} />
          <p className="skills__category--title">Bases de Donn.</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"MySQL / MariaDB"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={versionning} />
          <p className="skills__category--title">Versionning</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"Git / Github"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={communication} />
          <p className="skills__category--title">Outils de comm.</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"Discord"} />
          <SingleSkill skillname={"Slack"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={sideSkills} />
          <p className="skills__category--title">Comp. Annexes</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"Discord - Gest. Serveurs"} />
          <SingleSkill skillname={"Adobe Illustrator"} />
          <SingleSkill skillname={"Photoshop"} />
          <SingleSkill skillname={"Gimp 2"} />
          <SingleSkill skillname={"Word / Excel"} />
        </div>
      </div>
      <div className="skills__category">
        <div className="skills__category--header">
          <i className={futureSkills} />
          <p className="skills__category--title">Comp. visées</p>
        </div>
        <div className="skills__category--list">
          <SingleSkill skillname={"Node.JS"} />
          <SingleSkill skillname={"Discord.JS"} />
          <SingleSkill skillname={"Docker"} />
          <SingleSkill skillname={"Firebase"} />
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
