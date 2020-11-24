import React from 'react';
import './style.scss';

const SingleSkill = ({ skillname, percent }) => {

  return (
    <div className="single__skill">
      <div className="skill__name">
        {skillname}
      </div>
    </div>
  );
};

export default SingleSkill;
