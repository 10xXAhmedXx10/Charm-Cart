import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Account from './components/Account';
import Womenfashion from './components/pages/Womenfashion';

import Navbar from './components/Navbar';
import "./App.css"

function App() {
    return (
        <Router>
          <Navbar />
            <Routes>
                <Route path="/womenfashion" element={<Womenfashion />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </Router>
    );
}

export default App;
