import React from "react";
import './style.css'
import img from "../../assets/images/hospital.png"
const ContactUs = () => {
    return (
        <div>
        <img src={img} alt="hospital" /><br /><br /><br /><br />
        <div className="container">
        
             
            <div className="mainInputsContainer">
                <div className="titles">
                    <h5 style={{fontSize: "21.33px;"}}>Get In Touch</h5>
                    <h1 style={{ fontSize: "64px" }}>Contact Us</h1>
                    <p style={{fontSize: "24px;"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="te3baLa3bed" >
                    <form className="row g-5">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">First name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Enter your first name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Last name</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Enter you last name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Phone number</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Enter your phone number" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label-wahadha">Choose a topic</label>
                            <select className="form-select" id="validationCustom04" required>
                                <option selected disabled value="">Select one...</option>
                                <option>Select one...</option>
                            </select>
                        </div>
                        <div className="form-floating">
                            <label htmlFor="floatingTextarea2" className="messageLabel" >Message</label>
                            <textarea className="form-control" placeholder="aretzgrhtfjf" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                        </div>

                        <div className="col-12">
                            <button type="submit"   className="btn btn-primary_y btn-removeHover">submit</button>
                        </div>
                    </form><br /><br /><br /><br />
                    <div className="search-bottom-Maincontainer">
                        <div>

                        <h2>Subscribe to our newsletter</h2>
                        <div className="search-bottom-container d-flex gap-4">
                            <input className="bottom-input" type="text" placeholder="Enter you email here" />
                            <button className="last-button">Subscribe</button>
                        </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        </div>
    )
}

export default ContactUs;