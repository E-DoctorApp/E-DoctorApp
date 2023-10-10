import "./style.css"

import React from 'react'
import logo from "../../assets/images/logo.png"

const NavBar = (): React.JSX.Element => {
    return (
        <div className="nav-bar-container">
            <div className="nav-logo">
                <img src={logo} />
                <div className="title-health-care">
                    <span className="health-title">Health</span>
                    <span className="care">Care</span>
                </div>
            </div>
            <div className="nav-buttons">
                <span className="item">Home</span>
                <span className="item">Service</span>
                <span className="item">Contact us</span>
                <span className="item">Help</span>
                <span className="item">Blogs</span>
            </div>
            <div className="nav-last-buutons">
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </div>
    )
}

export default NavBar