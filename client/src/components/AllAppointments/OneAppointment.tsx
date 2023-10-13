import React from "react";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type Appprops = {
  isConfirmed: boolean;
  isPending: boolean;
};

const OneAppointment = ({ isConfirmed, isPending }: Appprops) => {
  const decline = faRectangleXmark as IconProp;
  const accept = faSquareCheck as IconProp;
  const doctor = useSelector((state : RootState)=> state.doctor)
  return (
    <div className="appointment-requests-list-container-request">
      <div className="image-frame2">
        <img
          src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt=""
        />
      </div>
      <div className="appointment-requests-list-container-request-details">
        <span className="appointment-requests-list-container-request-details-name">
          Jenny Wilson
        </span>
        <span className="appointment-requests-list-container-request-details-data">
          Female, 25 April 10:30 AM
        </span>
      </div>
      {!isPending ? (
        <div
          className={
            isConfirmed ? "confirmed" : "declined"
          }
        >
          <span className={
            isConfirmed ? "confirmed-content" : "declined-content"
          }>
            {isConfirmed ? "Confirmed" : "Declined"}
          </span>
        </div>
      ) : (
        <div className="pending">
         {doctor.isAuthenticated? (
           <>
           <FontAwesomeIcon
             className="pending-buttons"
             icon={decline}
             style={{ color: "rgb(242, 0, 255)" }}
           />
           <FontAwesomeIcon
             className="pending-buttons"
             icon={accept}
             style={{ color: "rgb(26, 88, 244)" }}
           />
           </>
         ): (
          <div className="pending-patient">
          <span className="pending-patient-content">Pending</span>
        </div>
         )
         }
        </div>
      )}
    </div>
  );
};

export default OneAppointment;
