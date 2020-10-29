import React from 'react';
import './style.scss';

const SingleSkill = ({ skillname, percent }) => {

  return (
    <div className="single__skill">
      <div className="skill__name">
        {skillname}
      </div>
      <div className="progression">
        <div className="progression__bar" style={{ width: `${percent}%` }} />
      </div>
      <div className="skill__percent">
        {percent}%
    </div>
    </div>
  );
};

export default SingleSkill;
