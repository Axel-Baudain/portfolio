import React from 'react';
import { Typewriter } from 'react-typewriting-effect'

import './style.scss';
import SingleSkill from './SingleSkill';

const size = "fa-2x";

const operatingSystems = "fas fa-desktop " + size;
const languages = "fas fa-code " + size;
const frameworks = "fas fa-cogs " + size;
const unitTests = "fas fa-vial " + size;
const dataBases = "fas fa-database " + size;
const versionning = "fas fa-server " + size;
const sideSkills = "fas fa-puzzle-piece " + size;


const Skills = () => (
  <div className="skills__page">
    <div className="skills__title">
      <Typewriter string="Compétences" delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div className="skills__list">
      <div className="skill__header">
        <i className={operatingSystems} />
        <div className="skill__title">
          Operating Systems
        </div>
      </div>
      <div className="associated__skills">
        <SingleSkill skillname="Windows 10" percent={95} />
        <SingleSkill skillname="Ubuntu (Linux)" percent={75} />
      </div>
    </div>

    <div className="skills__list">
      <div className="skill__header">
        <i className={languages} />
        <div className="skill__title">
          Languages
        </div>
      </div>
      <div className="associated__skills">
        <SingleSkill skillname="HTML 5" percent={75} />
        <SingleSkill skillname="CSS 3" percent={80} />
        <SingleSkill skillname="PHP 7+" percent={70} />
        <SingleSkill skillname="JavaScript" percent={90} />
        <SingleSkill skillname="SQL" percent={60} />
      </div>
    </div>

    <div className="skills__list">
      <div className="skill__header">
        <i className={frameworks} />
        <div className="skill__title">
          Frameworks
        </div>
      </div>
      <div className="associated__skills">
        <SingleSkill skillname="React-JS" percent={90} />
        <SingleSkill skillname="Redux" percent={85} />
        <SingleSkill skillname="SemanticUI" percent={55} />
        <SingleSkill skillname="Bootstrap (CSS)" percent={60} />
        <SingleSkill skillname="AltoRouter (PHP)" percent={85} />
        <SingleSkill skillname="Lumen (PHP)" percent={50} />
      </div>
    </div>

    <div className="skills__list">
      <div className="skill__header">
        <i className={unitTests} />
        <div className="skill__title">
          Unit Tests
        </div>
      </div>
      <div className="associated__skills">
        <SingleSkill skillname="TDD" percent={30} />
        <SingleSkill skillname="Mocha-JS" percent={75} />
        <SingleSkill skillname="Chai-JS" percent={70} />
        <SingleSkill skillname="Enzyme-JS" percent={50} />
      </div>
    </div>

    <div className="skills__list">
      <div className="skill__header">
        <i className={dataBases} />
        <div className="skill__title">
          Databases
        </div>
      </div>
      <div className="associated__skills">
        <SingleSkill skillname="MySQL" percent={60} />
        <SingleSkill skillname="MariaDB" percent={60} />
      </div>
    </div>

    <div className="skills__list">
      <div className="skill__header">
        <i className={versionning} />
        <div className="skill__title">
          Versionning
        </div>
      </div>
      <div className="associated__skills">
        <SingleSkill skillname="GIT" percent={75} />
      </div>
    </div>

    <div className="skills__list">
      <div className="skill__header">
        <i className={sideSkills} />
        <div className="skill__title">
          Side skills
        </div>
      </div>
      <div className="associated__skills">
        <SingleSkill skillname="Whimsical" percent={80} />
        <SingleSkill skillname="Draw.IO" percent={70} />
        <SingleSkill skillname="Adobe Illustrator" percent={25} />
      </div>
    </div>
  </div>
);

export default Skills;
