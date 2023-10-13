import "./style.css"

import React from 'react'
import logo from "../../assets/images/logo.png"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { logoutPatient } from "../../store/patinetSlice"

const NavBar = (): React.JSX.Element => {
    const navigate = useNavigate()
    const doctor = useSelector((state: RootState) => state.doctor)
    const patient = useSelector((state: RootState) => state.patient)
    const dipstach: AppDispatch = useDispatch()
    const location = useLocation()
    const pathName = location.pathname
    console.log(pathName);

    return (
        <div className="nav-bar-container" style={{ display: pathName === "/doctorProfile" ? "none" : "flex" }}>
            <div className="nav-logo">
                <img src={logo} />
                <div className="title-health-care">
                    <span className="health-title">Health</span>
                    <span className="care">Care</span>
                </div>
            </div>
            <div className="nav-buttons">
                <span className="item"
                    onClick={() => navigate("/")}
                >Home</span>
                <span className="item"
                    onClick={() => navigate("/services")}
                >Service</span>
                <span className="item"
                    onClick={() => navigate("/contactUs")}
                >Contact us</span>
                <span className="item">Help</span>
                <span className="item">Blogs</span>
            </div>
            <div className="nav-last-buutons">
                <button onClick={() => {
                    !doctor.isAuthenticated && !patient.isAuthenticated ?
                        navigate("/register") :
                        navigate("/doctorProfile")
                }}>{!doctor.isAuthenticated && !patient.isAuthenticated ? "Sign Up" : "Profile"}</button>
                <button onClick={() => {
                    doctor.isAuthenticated || patient.isAuthenticated ?
                        dipstach(logoutPatient()) :
                        navigate("/login")
                }}>{doctor.isAuthenticated || patient.isAuthenticated ? "Log Out" : "Log In"}</button>
            </div>
        </div>
    )
}

export default NavBar