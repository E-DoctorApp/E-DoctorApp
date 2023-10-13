import React from 'react'
import doctorAvatar from "../../assets/images/avatar-doctor.png"


function LeadingMedicine() {
    return (
        <div className='one-leading-card d-flex flex-column align-items-start gap-4 p-4' style={{ background: "#fff",width:"25rem",height:"15rem" }}>
            <div className='d-flex gap-2' style={{ color: "yellow" }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </div>
            <div className='d-flex align-items-start'>Slate helps you see how many more days you need to work to reach your financial goal</div>
            <div className='d-flex' style={{ height: "3rem", width: "3rem" }}>
                <img src={doctorAvatar} style={{ width: "100%", height: "100%" }} alt='doctor-avatar' />
            </div>
        </div>
    )
}

export default LeadingMedicine