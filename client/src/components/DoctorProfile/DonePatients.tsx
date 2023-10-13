import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const DonePatients = () => {
    const ellipsis = faEllipsisVertical as IconProp;
  return (
    <div className="DoctorProfile-bottom">
        <div className="DoctorProfile-appointment-requests-list-header">
          <span className="DoctorProfile-appointment-requests-list-header-title">
            Recent Patients
          </span>
          <span className="DoctorProfile-appointment-requests-list-header-view">
            View all &gt;{" "}
          </span>
        </div>
        <table className="table table-borderless">
          <thead className="DoctorProfile-patients-done">
            <tr className="table-secondary">
              <th scope="col">Patient Name</th>
              <th scope="col">Visit Id</th>
              <th scope="col">Date</th>
              <th scope="col">Gender</th>
              <th scope="col">Diseases</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="DoctorProfile-th">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <FontAwesomeIcon icon={ellipsis} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="DoctorProfile-th">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>
                <FontAwesomeIcon icon={ellipsis} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="DoctorProfile-th">
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
              </th>
              <td>hello</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>
                <FontAwesomeIcon icon={ellipsis} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default DonePatients