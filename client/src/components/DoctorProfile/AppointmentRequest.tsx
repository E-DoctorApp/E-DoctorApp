import React from "react";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Appprops = {
  isConfirmed: boolean;
  isPending: boolean;
};

const AppointmentRequest = ({ isConfirmed, isPending }: Appprops) => {
  const decline = faRectangleXmark as IconProp;
  const accept = faSquareCheck as IconProp;
  return (
    <div className="DoctorProfile-appointment-requests-list-container-request">
      <div className="DoctorProfile-image-frame2">
        <img
          src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt=""
        />
      </div>
      <div className="DoctorProfile-appointment-requests-list-container-request-details">
        <span className="DoctorProfile-appointment-requests-list-container-request-details-name">
          Jenny Wilson
        </span>
        <span className="DoctorProfile-appointment-requests-list-container-request-details-data">
          Female, 25 April 10:30 AM
        </span>
      </div>
      {!isPending ? (
        <div
          className={
            isConfirmed ? "DoctorProfile-confirmed" : "DoctorProfile-declined"
          }
        >
          <span className={
            isConfirmed ? "DoctorProfile-confirmed-content" : "DoctorProfile-declined-content"
          }>
            {isConfirmed ? "Confirmed" : "Declined"}
          </span>
        </div>
      ) : (
        <div className="DoctorProfile-pending">
          <FontAwesomeIcon
            className="DoctorProfile-pending-buttons"
            icon={decline}
            style={{ color: "rgb(242, 0, 255)" }}
          />
          <FontAwesomeIcon
            className="DoctorProfile-pending-buttons"
            icon={accept}
            style={{ color: "rgb(26, 88, 244)" }}
          />
        </div>
      )}
    </div>
  );
};

export default AppointmentRequest;
