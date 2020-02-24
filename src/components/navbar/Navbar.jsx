import React from 'react';
import { NavLink } from "react-router-dom";

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="item navbar__item">
        <NavLink className="link item__link" to="/">Home</NavLink>
      </div>
      <div className="item navbar__item">
        <NavLink className="link item__link" to="/dialogs">Messages</NavLink>
      </div>
      <div className="item navbar__item">
        <NavLink className="link item__link" to="/profile">Profile</NavLink>
      </div>
      <div className="item navbar__item">
        <NavLink className="link item__link" to="/#">Music</NavLink>
      </div>
      <div className="item navbar__item">
        <NavLink className="link item__link" to="/#">Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
