import React from 'react'
import AppointmentRequest from "./AppointmentRequest";

const AppointmentsList = () => {
  return (
    <div className="DoctorProfile-appointment-requests-list">
          <div className="DoctorProfile-appointment-requests-list-header">
            <span className="DoctorProfile-appointment-requests-list-header-title">
              Appointment Request
            </span>
            <span className="DoctorProfile-appointment-requests-list-header-view">
              View all &gt;{" "}
            </span>
          </div>
          <div className="DoctorProfile-appointment-requests-list-container">
            {/* then  map  */}
            <AppointmentRequest isConfirmed={false} isPending={true}/>
            <AppointmentRequest isConfirmed={true} isPending={false}/>
            <AppointmentRequest isConfirmed={false} isPending={false}/>
          </div>
        </div>
  )
}

export default AppointmentsList