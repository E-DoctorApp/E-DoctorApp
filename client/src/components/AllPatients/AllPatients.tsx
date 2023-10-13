import React from 'react'
import "./style.css"
import OnePatient from './OnePatient'

const AllPatients = () => {
  return (
    <div className='Patients-content'>
      <div className='Patients-container'>
        <div className='Patients-container-header'>
            <span>Patient Name</span>
            <span>Visit Id</span>
            <span>Date</span>
            <span>Gender</span>
            <span>Diseases</span>
            <span>Status</span>
        </div>
        <OnePatient/>
        <OnePatient/>
        <OnePatient/>
        <OnePatient/>
    </div>
    </div>
  )
}

export default AllPatients