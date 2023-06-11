import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "./pages/Home"

import Womenfashion from './pages/Womenfashion';
import Books from "./pages/Books"
import Contact from './footer/Contact'
import Gym from "./pages/Gym"
import Movies from "./pages/Movies"
import Whereto from './thestorypages/Whereto'
import Music from "./pages/Music"
import Smartphone from "./pages/Smartphones"
import Menfashion from "./pages/Menfashion"
import Kidsfashion from "./pages/Kidsfashion"
import Tablets from "./pages/Tablets"
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
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='contact' element={<Contact />} />
                <Route path='Whereto' element={<Whereto />} />
                <Route path='Challenges' element={<Challenges />} />
<Route path='/Timeline' element={<Timeline />} />
                <Route path='/Createpost' element={<CreatePost />} />
                <Route path='/Thestory' element={<Thestory />} />
                <Route path='/Thestorypage' element={<Thestorypage />} />
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registerorlog' element={<Registerorlog />} />
                <Route path="/userregistration" element={<Userregistration />} />
                <Route path='/businessregistration' element={<Businessregistration />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/home" element={<Home />} />
                <Route path="/womenfashion" element={<Womenfashion />} />
           
                <Route path="/Gym" element={<Gym />} />
                <Route path="/Kidsfashion" element={<Kidsfashion />} />
                <Route path="/menfashion" element={<Menfashion />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/music" element={<Music />} />
                <Route path="/smartphones" element={<Smartphone />} />
                <Route path="/books" element={<Books />} />
                <Route path="/tablets" element={<Tablets />} />
              
                <Route path='/about' element= {<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;