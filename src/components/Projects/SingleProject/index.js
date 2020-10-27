import React from 'react';
import './style.scss';

const SingleProject = ({ image, desc="", link="", title="A venir ..." }) => (
  <div className="project__card">
    <img className="project__image" src={image} />
    <div className="appearhover">
      <div className="project__title">{title}</div>
      <div>
      {desc}
      </div>
      <a href={link}>
        <i class="fas fa-angle-double-right fa-2x btn-toproject" />
      </a>
    </div>
  </div>
);

export default SingleProject;
