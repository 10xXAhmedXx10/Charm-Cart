import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/womenfashion" activeClassName="active" className="nav-link">
      womenfashion
      </NavLink>
      <NavLink to="/account" activeClassName="active" className="nav-link">
        Account
      </NavLink>
    </nav>
  );
};

export default Navbar;
