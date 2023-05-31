import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


import Navbar from './components/Navbar';
import "./App.css"

function App() {
    return (
        <Router>
          <Navbar />
            <Routes>

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
        </Router>
        
    );
}

export default App;
