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
      <NavLink className="header__link" to="/">Some Link</NavLink>
      <NavLink className="header__link" to="/">Some Link</NavLink>
      <NavLink className="header__link" to="/">Some Link</NavLink>
    </div>
  </div>
);

export default Header;
