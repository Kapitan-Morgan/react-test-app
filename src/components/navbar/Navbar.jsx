import React from 'react';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="item navbar__item">
        <a className="link item__link" href="/">Home</a>
      </div>
      <div className="item navbar__item">
        <a className="link item__link" href="/dialogs">Messages</a>
      </div>
      <div className="item navbar__item">
        <a className="link item__link" href="/profile">Profile</a>
      </div>
      <div className="item navbar__item">
        <a className="link item__link" href="/#">Music</a>
      </div>
      <div className="item navbar__item">
        <a className="link item__link" href="/#">Settings</a>
      </div>
    </nav>
  )
}

export default Navbar;
