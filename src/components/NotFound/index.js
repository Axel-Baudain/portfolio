import React from 'react';
import { Typewriter } from 'react-typewriting-effect'

import './style.scss';

const NotFound = () => (
  <div className="notfound">
    <p className="notfound__title">
      <Typewriter string="404" delay={100} cursor="|" stopBlinkinOnComplete />
    </p>
    <p className="notfound__content">
      <Typewriter
        string="On dirait que vous vous êtes perdu ..."
        delay={15}
        cursor="|"
        stopBlinkinOnComplete
      />
    </p>
  </div>
);

export default NotFound;
