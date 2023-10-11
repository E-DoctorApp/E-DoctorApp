import "./style.css"
import React from "react"
import SideBar from "./SideBar"
import TopNav from "./TopNav";
import Overview from "./Overview";

const DoctorProfile = () :  React.JSX.Element => {


  return   (
    <div className="DoctorProfile-body">
      <SideBar/>
      <div className="DoctorProfile-main">
        <TopNav/>
        <Overview/>
      </div>
    </div>
  )
}

export default DoctorProfile