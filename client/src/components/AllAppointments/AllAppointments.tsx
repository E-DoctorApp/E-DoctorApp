import React from 'react'
import './style.css'
import OneAppointment from './OneAppointment'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AllAppointments = () => {
  const doctor: any = useSelector((state: RootState) => state.doctor.doctorInfo)
  const patient: any = useSelector((state: RootState) => state.patient.patientInfo)
  const type = localStorage.getItem('type');
  return (
    <div className="appointments-container">
      {type === "patient" ?
        patient.Appointments.map((appo: any, i: number) => !appo.isFinished ? <OneAppointment key={i} appo={appo} /> : null) :
        doctor.Appointments.map((appo: any, i: number) => !appo.isFinished ? < OneAppointment key={i} appo={appo} /> : null)
      }
    </div>
  )
}

export default AllAppointments