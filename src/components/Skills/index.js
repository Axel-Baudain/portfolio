import React from 'react';
import './style.scss';
import SingleSkill from './SingleSkill';

const Skills = () => (
  <div className="skills__page">
    <div className="skills__title">
      Mes skills
  </div>
    <div className="skills__list">
      <div className="list__title">
        Titre skills
      </div>
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Titre skills
      </div>
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Titre skills
      </div>
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
    </div>
    <div className="skills__list">
      <div className="list__title">
        Titre skills
      </div>
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
      <SingleSkill />
    </div>
  </div>
);

export default Skills;
