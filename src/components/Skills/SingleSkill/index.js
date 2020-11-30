import React from 'react';
import './style.scss';

const SingleSkill = ({ skillname }) => {

  return (
    <div className="single__skill">
      {skillname}
    </div>
  );
};

export default SingleSkill;
