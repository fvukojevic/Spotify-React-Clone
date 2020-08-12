import React from 'react'
import './Player.css'
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./footer/Footer";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar spotify={ spotify } />
                <Body spotify={ spotify } />
            </div>
            <Footer />
        </div>
    )
}

export default Player