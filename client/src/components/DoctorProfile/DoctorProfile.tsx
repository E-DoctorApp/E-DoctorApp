import "./style.css"
import React from "react"
import SideBar from "./SideBar"
import TopNav from "./TopNav";
import Overview from "./Overview";
import { Outlet } from "react-router";

const DoctorProfile = () :  React.JSX.Element => {


  return   (
    <div className="DoctorProfile-body">
      <SideBar/>
      <div className="DoctorProfile-main">
        <TopNav/>
        <Outlet/>
      </div>
    </div>
  )
}

export default DoctorProfile