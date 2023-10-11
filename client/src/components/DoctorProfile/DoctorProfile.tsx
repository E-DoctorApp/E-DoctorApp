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
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Doughnut } from 'react-chartjs-2';
import CreateDoughnutData from "./DoghhnutsData"

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
  const building = faBuilding as IconProp;
  const video = faVideo as IconProp;
  const decline = faRectangleXmark as IconProp;
  const accept = faSquareCheck as IconProp;
  const trendUp = faArrowTrendUp as IconProp;

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
                <span className="DoctorProfile-name">Stephen Conley</span>
                <span>Cardiologist</span>
              </div>
              </div>
          </div>
        </div>
        <div className="DoctorProfile-mid">
          <span className="DoctorProfile-welcome">Welcome, Dr.Stephen</span>
          <span>Have a nice day at great work</span>
        </div>
        <div className="DoctorProfile-card-container">
            <div className="DoctorProfile-card" id="DoctorProfile-card-appointments">
              <div className="DoctorProfile-card-icon-container">
                    <FontAwesomeIcon className="DoctorProfile-card-icon" icon={calendar} style={{color: "white",}}  />
              </div>
              <div className="DoctorProfile-card-details">
                <span className="DoctorProfile-card-stat">24.4K</span>
                <span className="DoctorProfile-card-title">Appointments</span>
              </div>
            </div>
            <div className="DoctorProfile-card" id="DoctorProfile-card-patient">
              <div className="DoctorProfile-card-icon-container">
                    <FontAwesomeIcon className="DoctorProfile-card-icon" icon={user} style={{color: "white",}}  />
              </div>
              <div className="DoctorProfile-card-details">
                <span className="DoctorProfile-card-stat">166.3K</span>
                <span className="DoctorProfile-card-title">Total Patient</span>
              </div>
            </div>
            <div className="DoctorProfile-card" id="DoctorProfile-card-clinic">
              <div className="DoctorProfile-card-icon-container"> 
                    <FontAwesomeIcon className="DoctorProfile-card-icon" icon={building} style={{color: "white",}}  />
              </div>
              <div className="DoctorProfile-card-details">
                <span className="DoctorProfile-card-stat">53.5K</span>
                <span className="DoctorProfile-card-title">Clinic Consulting</span>
              </div>
            </div>
            <div className="DoctorProfile-card" id="DoctorProfile-card-video">
              <div className="DoctorProfile-card-icon-container">
                    <FontAwesomeIcon className="DoctorProfile-card-icon" icon={video} style={{color: "white",}}  />
              </div>
              <div className="DoctorProfile-card-details">
                <span className="DoctorProfile-card-stat">28.0K</span>
                <span className="DoctorProfile-card-title">Video Consulting</span>
              </div>
            </div>
        </div>
        <div className="DoctorProfile-middle">
        <div className="DoctorProfile-appointment-requests-list">
            <div className="DoctorProfile-appointment-requests-list-header">
                <span className="DoctorProfile-appointment-requests-list-header-title">Appointment Request</span>
                <span className="DoctorProfile-appointment-requests-list-header-view">View all &gt; </span>
            </div>
            <div className="DoctorProfile-appointment-requests-list-container">
              <div className="DoctorProfile-appointment-requests-list-container-request">
              <div className="DoctorProfile-image-frame2"><img src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" alt="" /></div>
              <div className="DoctorProfile-appointment-requests-list-container-request-details">
                <span className="DoctorProfile-appointment-requests-list-container-request-details-name">Jenny Wilson</span>
                <span className="DoctorProfile-appointment-requests-list-container-request-details-data">Female, 25 April 10:30 AM</span>
              </div>
              <div className="DoctorProfile-confirmed">
                <span className="DoctorProfile-confirmed-content">Confirmed</span>
              </div>
              </div>
              <div className="DoctorProfile-appointment-requests-list-container-request">
              <div className="DoctorProfile-image-frame2"><img src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" alt="" /></div>
              <div className="DoctorProfile-appointment-requests-list-container-request-details">
                <span className="DoctorProfile-appointment-requests-list-container-request-details-name">Jenny Wilson</span>
                <span className="DoctorProfile-appointment-requests-list-container-request-details-data">Female, 25 April 10:30 AM</span>
              </div>
              <div className="DoctorProfile-declined">
                <span className="DoctorProfile-declined-content">Declined</span>
              </div>
              </div>
              <div className="DoctorProfile-appointment-requests-list-container-request">
              <div className="DoctorProfile-image-frame2"><img src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" alt="" /></div>
              <div className="DoctorProfile-appointment-requests-list-container-request-details">
                <span className="DoctorProfile-appointment-requests-list-container-request-details-name">Jenny Wilson</span>
                <span className="DoctorProfile-appointment-requests-list-container-request-details-data">Female, 25 April 10:30 AM</span>
              </div>
              <div className="DoctorProfile-pending">
                <FontAwesomeIcon className="DoctorProfile-pending-buttons" icon={decline} style={{color: "rgb(242, 0, 255)",}}  />
                <FontAwesomeIcon className="DoctorProfile-pending-buttons" icon={accept} style={{color: "rgb(26, 88, 244)",}} />
              </div>
              </div>
            </div>
        </div>
        <div className="DoctorProfile-statistics">
            <div className="DoctorProfile-statistics-stocks">
              <div className="DoctorProfile-statistics-stocks-header">
                <span className="DoctorProfile-statistics-stocks-header-title">Patients</span>
                <select className="DoctorProfile-statistics-stocks-header-select" name="" id="">
                  <option value="">2018</option>
                  <option value="">2019</option>
                  <option value="">2020</option>
                  <option value="">2021</option>
                  <option value="">2022</option>
                </select>
              </div>
              <div className="DoctorProfile-statistics-stocks-container">
                  <div className="DoctorProfile-statistics-stock">
                  <div className="DoctorProfile-stock-icon-container">
                    <FontAwesomeIcon className="DoctorProfile-stock-icon" icon={user} style={{color: "rgb(26, 88, 244)",}}  />
              </div>
              <div className="DoctorProfile-statistics-stock-details">
                  <span className="DoctorProfile-statistics-stock-details-data">24.4K</span>
                  <span className="DoctorProfile-statistics-stock-details-title">New Patient</span>
              </div>
              <div className="DoctorProfile-statistics-stock-data">
              <FontAwesomeIcon  className="DoctorProfile-statistics-stock-data-icon" icon={trendUp} style={{color: "blueviolet",}}  />
              <span className="DoctorProfile-statistics-stock-data-value">15%</span>
              </div>
                  </div>
                  <div className="DoctorProfile-statistics-stock">
                  <div className="DoctorProfile-stock-icon-container2">
                    <FontAwesomeIcon className="DoctorProfile-stock-icon" icon={user} style={{color: "orange",}}  />
              </div>
              <div className="DoctorProfile-statistics-stock-details">
                  <span className="DoctorProfile-statistics-stock-details-data">166.8K</span>
                  <span className="DoctorProfile-statistics-stock-details-title">Old Patient</span>
              </div>
              <div className="DoctorProfile-statistics-stock-data">
              <FontAwesomeIcon  className="DoctorProfile-statistics-stock-data-icon" icon={trendUp} style={{color: "blueviolet",}}  />
              <span className="DoctorProfile-statistics-stock-data-value">15%</span>
              </div>
                  </div>
              </div>
            </div>
            <div className="DoctorProfile-statistics-charts">
            <div className="DoctorProfile-statistics-stocks-header">
                <span className="DoctorProfile-statistics-stocks-header-title">Gender</span>
                <select className="DoctorProfile-statistics-stocks-header-select" name="" id="">
                  <option value="">2018</option>
                  <option value="">2019</option>
                  <option value="">2020</option>
                  <option value="">2021</option>
                  <option value="">2022</option>
                </select>
              </div>
                <div className="DoctorProfile-statistics-charts-content">
                <CreateDoughnutData  />
                <div className="DoctorProfile-statistics-charts-labels">
                    
                </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile