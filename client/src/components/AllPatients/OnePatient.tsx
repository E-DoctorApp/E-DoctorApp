import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


const OnePatient = () => {
    const ellipsis = faEllipsisVertical as IconProp;

  return (
    
         <div className='OnePatient'>
              <div className='OnePatient-details'>
              <div className="DoctorProfile-th">
              <div className="DoctorProfile-patient-done">
              <div className="DoctorProfile-image-frame3">
                <img
                  src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                  alt=""
                />
              </div>
              <div className="DoctorProfile-appointment-requests-list-container-request-details">
                <span className="DoctorProfile-appointment-requests-list-container-request-details-name">
                  Jenny Wilson
                </span>
              </div>
            </div>
              </div>
              <span>hello</span>
              <span>@twitter</span>
              <span>@twitter</span>
              <span>@twitter</span>
              <span>@twitter</span>
              </div>
              
                <FontAwesomeIcon icon={ellipsis} />
              
            </div>
  )
}

export default OnePatient