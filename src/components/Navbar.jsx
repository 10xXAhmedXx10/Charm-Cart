import React, { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = ({ onLogout, userName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    closeMenu();
    navigate('/login');
  };

  return (
    <nav className="navbar">
       <div>
       <a href="/home"><img className='logo' src='/assets/images/logo.png' height={"130px"}  alt='Logo' /></a>

      </div>
      <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
        <img src={`/assets/images/${isOpen ? 'hamburger.close.svg' : 'hamburger-menu.svg'}`} alt="Menu" className="hamburger-menu"/>
      </div>
      <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
      
          <NavLink exact to="/exercise" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Exercise
          </NavLink>
          <NavLink exact to="/charmcarthome" activeClassName="active" className="nav-link" onClick={closeMenu} >
          CharmCart Home
          </NavLink>
          <NavLink exact to="/pets" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Pets
          </NavLink>
          <NavLink exact to="/WomenFashion" activeClassName="active" className="nav-link" onClick={closeMenu} >
          Women's Fashion
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
        
        
          {userName ? (
          
          <>
            <NavLink exact to="/account" activeClassName="active" className="nav-link-special" onClick={closeMenu}>
            Account
          </NavLink>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </>
        ) : (
          
          <NavLink exact to="/registerorlog" activeClassName="active" className="nav-link-special" onClick={closeMenu}>
          Register/log in
        </NavLink>
      )}
      
          

      {userName && (
          <NavLink exact to="/cart" activeClassName="active" className="" onClick={closeMenu}>
            <img src="/assets/images/cart.png" height={"40px"} alt="shopping cart" />
          </NavLink>
          )}
        </div>
    </nav>
  );
};


export default Navbar;
