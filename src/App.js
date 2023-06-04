import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "./pages/Home"
import Account from './pages/Account';
import Womenfashion from './pages/Womenfashion';
import Books from "./pages/Books"
import Clinic from "./pages/Clinic"
import Health from "./pages/Health"
import Movies from "./pages/Movies"
import Beauty from "./pages/Beauty"
import Music from "./pages/Music"
import Smartphone from "./pages/Smartphones"
import Menfashion from "./pages/Menfashion"
import Kidsfashion from "./pages/Kidsfashion"
import Tablets from "./pages/Tablets"
import Registerorlog from "./components/Registerorlog"
import Login from './components/Login';



import Userregistration from "./components/Userregistration";
import Businessregistration from "./components/Businessregistration";



import Footer from './components/Footer';


import Navbar from './components/Navbar';
import "./App.css"



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registerorlog' element={<Registerorlog />} />
                <Route path="/userregistration" element={<Userregistration />} />
                <Route path='/businessregistration' element={<Businessregistration />} />

                <Route path="/home" element={<Home />} />
                <Route path="/womenfashion" element={<Womenfashion />} />
                <Route path="/beauty" element={<Beauty />} />
                <Route path="/clinic" element={<Clinic />} />
                <Route path="/health" element={<Health />} />
                <Route path="/Kidsfashion" element={<Kidsfashion />} />
                <Route path="/menfashion" element={<Menfashion />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/music" element={<Music />} />
                <Route path="/smartphones" element={<Smartphone />} />
                <Route path="/books" element={<Books />} />
                <Route path="/tablets" element={<Tablets />} />
                <Route path="/account" element={<Account />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App