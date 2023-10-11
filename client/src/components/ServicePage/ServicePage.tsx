import React from 'react'
import "./style.css"
import hospital from "../../assets/images/hospital.png"
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
                            <div className='d-flex flex-column align-items-start'>
                                <span style={{ color: "#000", fontSize: "2rem", fontWeight: "900" }}>Book Appointment</span>
                                Name *
                                <input type='text' />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePage