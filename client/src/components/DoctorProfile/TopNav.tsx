import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const TopNav = () => {
    const question = faCircleQuestion as IconProp;
    const bell = faBell as IconProp;
  return (
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
                <span className="DoctorProfile-name">Stephen Conley</span>
                <span>Cardiologist</span>
              </div>
              </div>
          </div>
        </div>
  )
}

export default TopNav