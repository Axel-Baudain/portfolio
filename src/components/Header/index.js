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
      <NavLink className="header__link" to="/">Qui suis-je ?</NavLink>
      <NavLink className="header__link" to="/">Projets</NavLink>
      <NavLink className="header__link" to="/">Contact</NavLink>
    </div>
  </div>
);

export default Header;
