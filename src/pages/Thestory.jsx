import React from "react";
import { NavLink } from 'react-router-dom';

function Thestory() {
    return (
        <div className="story-container">
            <NavLink to="/Thestorypage" className="story-link story-link-left">
                <img className="story-image" src="/assets/images/Storytime.png" alt="thestory" />
                <div className="text-container">
                    <h1 className="story-text-right">Find out the story of the website and why it was created 👀.</h1>
                </div>
            </NavLink>
            
            <NavLink to="/Storytimeline" className="story-link story-link-right">
                <div className="text-container">
                    <h1 className="story-text-left">Website progress and timeline ⌚</h1>
                </div>
                <img className="story-image" src="/assets/images/Storytimeline.png" alt="storytimeline" />
            </NavLink>

            <NavLink to="/challenges" className="story-link story-link-left">
                <img className="story-image" src="/assets/images/challenges.png" alt="challenges" />
                <div className="text-container">
                    <h1 className="story-text-right">the challenges i faced building the website 🏆</h1>
                </div>
            </NavLink>

              <NavLink to="/whereto" className="story-link story-link-right">
                <div className="text-container">
                    <h1 className="story-text-left">where to ❓</h1>
                </div>
                <img className="story-image" src="/assets/images/whereto.png" alt="whereto" />
            </NavLink>
        </div>

        
    )
}

export default Thestory;
