import React from "react";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type Appprops = {
  appo: any;
};

const OneAppointment = ({ appo }: Appprops) => {
  const decline = faRectangleXmark as IconProp;
  const accept = faSquareCheck as IconProp;
  const doctor: any = useSelector((state: RootState) => state.doctor)
  const type = localStorage.getItem('type');
  

  return (
    <div className="appointment-requests-list-container-request">
      <div className="image-frame2">
        <img
          src={type === "patient" ? appo.Doctor.avatarUrl : type === "doctor" ? appo.Patient.avatarUrl : ""}
          alt=""
        />
      </div>
      <div className="appointment-requests-list-container-request-details">
        <span className="appointment-requests-list-container-request-details-name">
          {type === "patient" ? appo.Doctor.name : type === "doctor" ? appo.Patient.name : ""}
        </span>
        <span className="appointment-requests-list-container-request-details-data">
          {type === "patient" ? appo.date : type === "doctor" ? appo.Patient.gender.toUpperCase() +' , '+ appo.date : ""}
        </span>
      </div>
      {appo.status !== "pending" ? (
        <div
          className={
            appo.status === "accepted" ? "confirmed" : "declined"
          }
        >
          <span className={
            appo.status === "accepted" ? "confirmed-content" : "declined-content"
          }>
            {appo.status === "accepted" ? "Confirmed" : "Declined"}
          </span>
        </div>
      ) : (
        <div className="pending">
          {doctor.isAuthenticated ? (
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
          ) : (
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
