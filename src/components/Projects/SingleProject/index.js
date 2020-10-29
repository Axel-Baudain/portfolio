import React from 'react';
import './style.scss';

const SingleProject = ({ image, desc = "", link = "", title = "A venir ...", available }) => {
const classToApply = available ? "fa-angle-double-right" : "fa-times unvavailable"
const btnClass = available ? "available" : "unavailable";

  return (
    <div className="project__card">
      <img className="project__image" src={image} />
      <div className="project__desc">
        <div className="project__title">
          {title}
        </div>
        {desc}
        <a className={`btn-toproject ${btnClass}`} href={link} target="_blank" rel="noopener noreferrer" ><i class={`fas ${classToApply} fa-2x`} ></i></a>
      </div>
    </div>
  );
};

export default SingleProject;
