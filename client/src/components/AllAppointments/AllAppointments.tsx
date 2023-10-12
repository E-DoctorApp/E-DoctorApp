import React from 'react'
import './style.css'
import OneAppointment from './OneAppointment'

const AllAppointments = () => {
  return (
    <div className="appointments-container">
        <OneAppointment isConfirmed={false} isPending={true}/>
        <OneAppointment isConfirmed={true} isPending={false}/>
        <OneAppointment isConfirmed={false} isPending={false}/>
    </div>
  )
}

export default AllAppointments