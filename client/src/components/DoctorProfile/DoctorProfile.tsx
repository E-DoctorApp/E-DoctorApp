import "./style.css"
import React from "react"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const DoctorProfile = () :  React.JSX.Element => {
  const overview = faBars as IconProp;
  const calendar = faCalendar as IconProp;
  const user = faUser as IconProp;
  const clock = faClock as IconProp;
  const creditCard = faCreditCard as IconProp;
  const message = faEnvelope as IconProp;
  const blog = faFileLines as IconProp;
  const question = faCircleQuestion as IconProp;
  const bell = faBell as IconProp;
  return   (
    <div className="DoctorProfile-body">
      <div className="DoctorProfile-sideBar">
        <div className="DoctorProfile-logo">
          <img className="DoctorProfile-logo1" src={logo1} alt="" />
          <img className="DoctorProfile-logo2" src={logo2} alt="" />
        </div>
        
          <ul className="DoctorProfile-menu">
            <li><FontAwesomeIcon className="DoctorProfile-icon" icon={overview} style={{color: "#070808",}} />Overview</li>
            <li><FontAwesomeIcon className="DoctorProfile-icon" icon={calendar} style={{color: "#070808",}} />Appointment</li>
            <li><FontAwesomeIcon className="DoctorProfile-icon" icon={user} style={{color: "#070808",}} />My Patients</li>
            <li><FontAwesomeIcon className="DoctorProfile-icon" icon={clock} style={{color: "#070808",}} />Schedule Timings</li>
            <li><FontAwesomeIcon className="DoctorProfile-icon" icon={creditCard} style={{color: "#070808",}} />Payments</li>
            <li><FontAwesomeIcon className="DoctorProfile-icon" icon={message} style={{color: "#070808",}} />Message</li>
            <li><FontAwesomeIcon className="DoctorProfile-icon" icon={blog} style={{color: "#070808",}} />Blog</li>
          </ul>
      </div>
      <div className="DoctorProfile-main">
        <div className="DoctorProfile-top">
          <div className="DoctorProfile-top-left">
          <input className="DoctorProfile-search" type="text" placeholder="Search Appointment,Patient or etc" />
          </div>
          <div className="DoctorProfile-top-right">
              <FontAwesomeIcon className="DoctorProfile-main-icon" icon={question} style={{color: "white",}} />
              <FontAwesomeIcon className="DoctorProfile-main-icon" icon={bell} style={{color: "white",}} />
              <div className="DoctorProfile-user">
              <div className="DoctorProfile-image-frame"><img src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" alt="" /></div>
              <div className="DoctorProfile-details">
                <p className="DoctorProfile-name">Stephen Conley</p>
                <p>Cardiologist</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile