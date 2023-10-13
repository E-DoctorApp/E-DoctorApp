import React from "react";
// import CalendarComponent from "./CalendarComponent";
import Stocks from "./Stocks";
import Charts from "./Charts";
import DonePatients from "./DonePatients";
import DoctorCards from "./DoctorCards";
import AppointmentsList from "./AppointmentsList";
import Calendar from "react-calendar";

const Overview = () => {
  return (
    <div style={{backgroundColor:"#F7F6F6"}}>
      <div className="DoctorProfile-mid">
        <span className="DoctorProfile-welcome">Welcome, Dr.Stephen</span>
        <span>Have a nice day at great work</span>
      </div>
      <DoctorCards/>
      <div className="DoctorProfile-middle">
        <AppointmentsList/>
        <div className="DoctorProfile-statistics">
          <Stocks/>
          <Charts/>
        </div>
        <div className="DoctorProfile-Calendar-section">
          <Calendar className="DoctorProfile-calendar"/>
        </div>
      </div>
      <DonePatients/>
    </div>
  );
};

export default Overview;
