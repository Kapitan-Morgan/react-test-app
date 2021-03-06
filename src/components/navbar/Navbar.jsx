import React from 'react';
import { NavLink } from "react-router-dom";
import Friends from './friends/Friends';

import './navbar.css';

const Navbar = (props) => {
  
  return (
    <nav className="navbar">
      <div className="item navbar__item">
        <NavLink className="link item__link" to="/">
          <span className="span item__span">
            Home
          </span>
        </NavLink>
      </div>
      <div className="item navbar__item">
        <NavLink className="link item__link" activeClassName="item__link_active" to="/dialogs">
          <span className="span item__span">
            Messages
          </span>
        </NavLink>
      </div>
      <div className="item navbar__item">
        <NavLink className="link item__link" activeClassName="item__link_active" to="/profile">
          <span className="span item__span">
            Profile
          </span>
        </NavLink>
      </div>
      <div className="item navbar__item">
        <NavLink className="link item__link" to="/#">
          <span className="span item__span">
            Music
          </span>
        </NavLink>
      </div>
      <div className="item navbar__item">
        <NavLink className="link item__link" to="/#">
          <span className="span item__span">
            Settings
          </span>
        </NavLink>
      </div>
      <Friends friends={props.state.friends}/>
    </nav>
  )
}

export default Navbar;
