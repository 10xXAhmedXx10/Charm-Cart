import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import WomenFashion from './pages/WomenFashion'
import Home from "./pages/Home"
import Account from './components/Account'
import CharmCartHome from './pages/CharmCartHome'
import Contact from './footer/Contact'
import Exercise from "./pages/Exercise"

import Whereto from './thestorypages/Whereto'
import Pets from './pages/Pets'

import Registerorlog from "./components/Registerorlog"
import Login from './components/Login';
import Cart from "./components/Cart"
import About from './footer/About';
import Thestory from './footer/Thestory';
import Userregistration from "./components/Userregistration";
import Businessregistration from "./components/Businessregistration";

import Thestorypage from './thestorypages/Thestorypage';
import Timeline from './thestorypages/Timeline'
import CreatePost from './components/CreatePost';
import Challenges from './thestorypages/Challenges'
import Footer from './components/Footer';


import Navbar from './components/Navbar';
import "./App.css"



function App() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
      
        const storedUserName = localStorage.getItem('username');

        if (storedUserName) {




            
            setUserName(storedUserName);
        }
    }, []);

    const handleSetUserName = (name) => {
        localStorage.setItem('username', name);
        setUserName(name);
    };


const handleLogout = () => {
   
    localStorage.removeItem('username');
  
    setUserName('');
};

    return (
        <Router>
            <Navbar userName={userName} onLogout={handleLogout} />
            <Routes>
            <Route path='Pets' element={<Pets />} />
            <Route path="/account" element={<Account name={userName} />} />
                <Route path='/login' element={<Login onLogin={handleSetUserName} />} />
           
                <Route path='contact' element={<Contact />} />
                <Route path='Whereto' element={<Whereto />} />
                <Route path='Challenges' element={<Challenges />} />
<Route path='/Timeline' element={<Timeline />} />
                <Route path='/Createpost' element={<CreatePost />} />
                <Route path='/Thestory' element={<Thestory />} />
                <Route path='/Thestorypage' element={<Thestorypage />} />
                <Route path="/" element={<Navigate to="/Home" />} />
               
                <Route path='/registerorlog' element={<Registerorlog />} />
                <Route path="/userregistration" element={<Userregistration />} />
                <Route path='/businessregistration' element={<Businessregistration />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/home" element={<Home />} />
               <Route path='CharmCartHome' element={<CharmCartHome />} />
           
                <Route path="/Exercise" element={<Exercise />} />
              
             <Route path='WomenFashion' element={<WomenFashion />} />
              
                <Route path='/about' element= {<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;