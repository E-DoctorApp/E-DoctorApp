import "./style.css"

import React from 'react'
import logo from "../../assets/images/logo.png"


const Footer = () => {
    return (
        <div className="footer-container-all">
            <div className="footer-container">
                <div className="child1 ">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" />
                        <div className="foot-logo-div">
                            <span >Health</span>
                            <span >Care</span>
                        </div>
                    </div>
                    <span>
                        Copyright © 2022 BRIX Templates | All Rights Reserved
                    </span>
                </div>
                <div className="child2 ">
                    <span>Product</span>
                    <div className="child2-"></div>
                </div>
                <div className="child3 "></div>
                <div className="child4 "></div>
                <div className="child5 "></div>
            </div>
        </div>
    )
}

export default Footer