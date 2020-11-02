import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import './style.scss';

const Contact = () => (
  <div className="contact__page">
    <div className="contact__title">
      <Typewriter string="Contactez-moi !" delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div>
      Alors, convaincu&#40;e&#41; ?<br />
      Vous pouvez me joindre par les moyens suivants !
    </div>
    <div className="contact__methods">
      <div>
        <i className="fas fa-envelope" /> Mail : <a className="link" href="mailto:axel.baudain@gmail.com">axel.baudain@gmail.com</a>
      </div>
      <div>
        <i className="fab fa-linkedin" /> LinkedIn : <a className="link" href="https://www.linkedin.com/in/axel-baudain/">https://www.linkedin.com/in/axel-baudain/</a>
      </div>
    </div>
  </div>
);

export default Contact;
