import React, { useState } from 'react'
import "./style.css"
import hospital from "../../assets/images/hospital.png"
import Calendar from 'react-calendar'
import CardService from '../CardSevice/CardService'
import LeadingMedicine from './LeadingMedicine'


const ServicePage = () => {
    return (
        <div className='services-page-conatiner'>
            <div className='services-hospital-image-wrapper'>
                <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={hospital} alt='hospital*image' />
                <div className='absolute-div-wrapper'>
                    <div className='make-the-best-hosptial mt-4'>
                        <span style={{ color: "#fff", fontSize: "2rem", fontWeight: "900" }}>Meet The Best Hospital</span>
                        <span className='d-flex gap-4' style={{ color: "#fff", fontWeight: "200" }}>We know how large Objects<br /> will act but things on a small scale</span>
                        <div className='make-the-best-hosptial-buttons d-flex gap-3'>
                            <div className='d-flex align-items-center justify-content-center' style={{ color: "#fff", background: "#007e85", padding: "1rem 3rem", borderRadius: "2.5rem" }}>Get Quote Now</div>
                            <div className='d-flex align-items-center justify-content-center' style={{ color: "#fff", background: "transparent", padding: "1rem 3rem", borderRadius: "2.5rem", border: "0.1rem solid #007e85" }}>Get Quote Now</div>
                        </div>


                    </div>
                    <div className='book-appointment'>
                        <div className='book-appointment-warrper-child'>
                            <div className='d-flex flex-column align-items-center gap-4'>
                                <span style={{ color: "#000", fontSize: "2rem", fontWeight: "900" }}>Book Appointment</span>
                                <div className='w-100 d-flex flex-column align-items-start gap-2'>
                                    <span>Name *</span>
                                    <input placeholder='Full Name' className=' formInput input-service-book-appointment' type='text' />
                                </div>
                                <div className='w-100 d-flex flex-column align-items-start gap-2'>
                                    <span>Email address *</span>
                                    <input placeholder='example@gmail.com' className='formInput input-service-book-appointment' type='text' />
                                </div>
                                <div className='w-100 d-flex flex-column align-items-start gap-2'>
                                    <span>Departement * </span >
                                    <select
                                        className="form-select form-select-xl"
                                        aria-label=".form-select-sm"
                                    >
                                        <option selected>Choose your department</option>
                                        <option value="Neurologist">Neurologist</option>
                                        <option value="Dermatology">Dermatology</option>
                                        <option value="Gynecologist">Gynecologist</option>
                                        <option value="Generalist">Generalist</option>
                                        <option value="Radiology">Radiology</option>
                                        <option value="Orthopedics">Orthopedics</option>
                                        <option value="Dentistry">Dentistry</option>
                                        <option value="Surgery">Surgery</option>
                                    </select>

                                </div>
                                <div className='w-100 d-flex flex-column align-items-start gap-2'>
                                    <span>Time *</span>


                                    <select
                                        className="form-select form-select-xl"
                                        aria-label=".form-select-sm"
                                    >
                                        <option selected>Choose your department</option>
                                        <option value="Neurologist">1:00 Available</option>
                                        <option value="Dermatology">2:00 Available</option>
                                        <option value="Gynecologist">3:00 Available</option>
                                        <option value="Generalist">4:00 Available</option>
                                        <option value="Radiology">5:00 Available</option>
                                        <option value="Orthopedics">6:00 Available</option>
                                        <option value="Dentistry">7:00 Available</option>
                                        <option value="Surgery">8:00 Available</option>
                                    </select>



                                </div>
                                <div className='d-flex btn-service-book-appointement w-80' style={{
                                    padding: "0.9rem 2.5rem",
                                    borderRadius: "0.3125rem",
                                    background: "#007E85",
                                    color: "#fff"

                                }}>
                                    Book Appointment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div  className="service-find-doctor"style={{padding:"0rem 5rem"}}>
                <div className="sub2-child-1 find-doctor w-100">
                    <div className="find-A-Doctor">Find A doctor</div>
                    <div className="find-A-Doctor-inputs">
                        <div className="d-flex gap-4">
                            <input placeholder="Name" />
                            <input placeholder="Department" />
                        </div>
                        <div className="d-flex align-items-center gap-4">
                            <span>Available</span>
                            <i className="fa-solid fa-toggle-on fa-2xl" style={{ color: " #36bab1" }}></i>
                        </div>
                        <div className="serach-input">
                            Search
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-landing-page-container-child-4 mt-4">
                <div className="mb-5">
                    <span style={{ color: "#007E85", fontSize: "2.25rem", fontWeight: "700" }}>Services we provide</span>
                    <p style={{ color: "#555", fontWeight: "400" }}>Lorem ipsum dolor sit amet consectetur adipiscing elit semp
                        er<br /> dalar elementum tempus hac tellus libero accumsan. </p>
                </div>
                <div style={{ padding: "0rem 4rem 1rem 7rem" }} className="all-services-cards-container d-flex  flex-wrap gap-4 w-100">
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                </div>

            </div>
            <div className="service-landing-page-container-child-4 mt-4">
                <div className="mb-5">
                    <span style={{ color: "#007E85", fontSize: "2.25rem", fontWeight: "700" }}>Leading Medicine</span>
                    <p style={{ color: "#555", fontWeight: "400" }}>Problems trying to reslove the conflict betwenn the two major realms of Classical physics Newtonian mechanics </p>
                </div>
                <div style={{ padding: "0rem 4rem 1rem 7rem" }} className="all-leading-cards-container d-flex flex-wrap gap-4 ">
                    <LeadingMedicine />
                    <LeadingMedicine />
                    <LeadingMedicine />
                    <LeadingMedicine />
                    <LeadingMedicine />
                    <LeadingMedicine />
                    <LeadingMedicine />
                    <LeadingMedicine />
                    <LeadingMedicine />
                </div>
            </div>
        </div >
    )
}

export default ServicePage