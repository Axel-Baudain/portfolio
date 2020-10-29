import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import './style.scss';

const Contact = () => (
  <div className="contact__page">
    <div className="contact__title">
      <Typewriter string="Contactez-moi !" delay={20} cursor="|" stopBlinkinOnComplete />
    </div>
    <div>
      Cette page est en cours de développement... <span role="img" aria-label="Emoji laptop">💻</span>
    </div>
    <div>
      Elle arrivera bientôt ! <span role="img" aria-label="Emoji rocket">🚀</span>
    </div>
  </div>
);

export default Contact;
