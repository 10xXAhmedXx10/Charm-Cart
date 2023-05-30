import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className='logo' src='/assets/images/Charm.svg' alt='logo' />
      <NavLink exact to="/clinic" activeClassName="active" className="nav-link">
      Clinic
      </NavLink>
      <NavLink exact to="/health" activeClassName="active" className="nav-link">
      Health
      </NavLink>
      <NavLink exact to="/womenfashion" activeClassName="active" className="nav-link">
      Women Fashion
      </NavLink>
      <NavLink exact to="/menfashion" activeClassName="active" className="nav-link">
      Men Fashion
      </NavLink>
      <NavLink exact to="/kidsfashion" activeClassName="active" className="nav-link">
      Kids Fashion
      </NavLink>
      <NavLink exact to="/movies" activeClassName="active" className="nav-link">
      Movies
      </NavLink>
      <NavLink exact to="/music" activeClassName="active" className="nav-link">
      Music
      </NavLink>
      <NavLink exact to="/smartphones" activeClassName="active" className="nav-link">
      Smart Phones
      </NavLink>
      <NavLink exact to="/tablets" activeClassName="active" className="nav-link">
      Tablets
      </NavLink>
      <NavLink to="/account" activeClassName="active" className="nav-link">
        Account
      </NavLink>
    </nav>
  );
};

export default Navbar;
