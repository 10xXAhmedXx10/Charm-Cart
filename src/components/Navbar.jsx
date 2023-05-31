import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <nav className="navbar">
       <div>
        <a href="/home"><img className='logo' src='/assets/images/logo.svg' height={"300px"} alt='Logo' /></a> 
      </div>
      <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
        <img src={`/assets/images/${isOpen ? 'hamburger.close.svg' : 'hamburger-menu.svg'}`} alt="Menu" className="hamburger-menu"/>
      </div>
      <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
        <NavLink exact to="/clinic" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Clinic
        </NavLink>
          <NavLink exact to="/health" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Health
          </NavLink>
          <NavLink exact to="/womenfashion" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Women Fashion
          </NavLink>
          <NavLink exact to="/menfashion" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Men Fashion
          </NavLink>
          <NavLink exact to="/kidsfashion" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Kids Fashion
          </NavLink>
          <NavLink exact to="/movies" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Movies
          </NavLink>
          <NavLink exact to="/music" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Music
          </NavLink>
          <NavLink exact to="/smartphones" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Smart Phones
          </NavLink>
          <NavLink exact to="/tablets" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Tablets
          </NavLink>
          <NavLink to="/account" activeClassName="active" className="nav-link" onClick={closeMenu} >
            Account
          </NavLink>
        </div>
    </nav>
  );
};


export default Navbar;
