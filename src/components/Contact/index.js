import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import './style.scss';

const Contact = () => (
  <div className="contact__page">
    <div className="contact__title">
      <Typewriter string="Contactez-moi !" delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div>
      En espérant vous avoir convaincu, je vous laisse la possibilité de<br />
      me joindre par les moyens suivants.
    </div>
    <div className="contact__methods">
      <div>
        <i className="fas fa-envelope" /> Mail : <a className="link" href="mailto:axel.baudain@gmail.com">axel.baudain@gmail.com</a>
      </div>
      <div>
      <i class="fas fa-phone-alt" /> Téléphone : <a className="link" href="tel:+33635468870">06 35 46 88 70</a>
      </div>
    </div>
  </div>
);

export default Contact;
