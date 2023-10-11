import "./style.css"

import React from 'react'
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router"

const NavBar = (): React.JSX.Element => {
    const navigate=useNavigate()
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
                <span className="item"
                onClick={()=>navigate("/")}
                >Home</span>
                <span className="item"
                // onClick={()=>navigate("/services")}
                >Service</span>
                <span className="item"
                onClick={()=>navigate("/contactUs")}
                >Contact us</span>
                <span className="item">Help</span>
                <span className="item">Blogs</span>
            </div>
            <div className="nav-last-buutons">
                <button onClick={()=>navigate("/register")}>Sign Up</button>
                <button   onClick={()=>navigate("/login")}>Log In</button>
            </div>
        </div>
    )
}

export default NavBar