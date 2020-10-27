import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img className="header__logo" src={logo} alt="Logo représentant un A et un B stylisés." />
    </Link>
    <div className="links">
      <NavLink className="header__link" exact to="/"><i class="fas fa-home" /></NavLink>
      <NavLink className="header__link" exact to="/about"><i class="far fa-user" /></NavLink>
      <NavLink className="header__link" exact to="/projects"><i class="fas fa-book" /></NavLink>
      <NavLink className="header__link" exact to="/skills"><i class="fas fa-tasks" /></NavLink>
      <NavLink className="header__link" exact to="/contact"><i class="far fa-address-card" /></NavLink>
    </div>
    <div className="links">
      <a href="https://www.linkedin.com/in/axel-baudain/" alt="Lien vers mon profil Linkedin" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x header__link" /></a>
      <a href="https://github.com/Axel-Baudain" alt="Lien vers mon profil Github" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square fa-2x header__link" /></a>
    </div>
  </div>
);

export default Header;
