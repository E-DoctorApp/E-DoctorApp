import React from "react";
import CreateDoughnutData from "./DoghhnutsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import CalendarComponent from "./CalendarComponent";
import AppointmentRequest from "./AppointmentRequest";

const Overview = () => {
  const calendar = faCalendar as IconProp;
  const user = faUser as IconProp;
  const building = faBuilding as IconProp;
  const video = faVideo as IconProp;
  const decline = faRectangleXmark as IconProp;
  const accept = faSquareCheck as IconProp;
  const trendUp = faArrowTrendUp as IconProp;
  const ellipsis = faEllipsisVertical as IconProp;
  return (
    <div>
      <div className="DoctorProfile-mid">
        <span className="DoctorProfile-welcome">Welcome, Dr.Stephen</span>
        <span>Have a nice day at great work</span>
      </div>
      <div className="DoctorProfile-card-container">
        <div
          className="DoctorProfile-card"
          id="DoctorProfile-card-appointments"
        >
          <div className="DoctorProfile-card-icon-container">
            <FontAwesomeIcon
              className="DoctorProfile-card-icon"
              icon={calendar}
              style={{ color: "white" }}
            />
          </div>
          <div className="DoctorProfile-card-details">
            <span className="DoctorProfile-card-stat">24.4K</span>
            <span className="DoctorProfile-card-title">Appointments</span>
          </div>
        </div>
        <div className="DoctorProfile-card" id="DoctorProfile-card-patient">
          <div className="DoctorProfile-card-icon-container">
            <FontAwesomeIcon
              className="DoctorProfile-card-icon"
              icon={user}
              style={{ color: "white" }}
            />
          </div>
          <div className="DoctorProfile-card-details">
            <span className="DoctorProfile-card-stat">166.3K</span>
            <span className="DoctorProfile-card-title">Total Patient</span>
          </div>
        </div>
        <div className="DoctorProfile-card" id="DoctorProfile-card-clinic">
          <div className="DoctorProfile-card-icon-container">
            <FontAwesomeIcon
              className="DoctorProfile-card-icon"
              icon={building}
              style={{ color: "white" }}
            />
          </div>
          <div className="DoctorProfile-card-details">
            <span className="DoctorProfile-card-stat">53.5K</span>
            <span className="DoctorProfile-card-title">Clinic Consulting</span>
          </div>
        </div>
        <div className="DoctorProfile-card" id="DoctorProfile-card-video">
          <div className="DoctorProfile-card-icon-container">
            <FontAwesomeIcon
              className="DoctorProfile-card-icon"
              icon={video}
              style={{ color: "white" }}
            />
          </div>
          <div className="DoctorProfile-card-details">
            <span className="DoctorProfile-card-stat">28.0K</span>
            <span className="DoctorProfile-card-title">Video Consulting</span>
          </div>
        </div>
      </div>
      <div className="DoctorProfile-middle">
        <div className="DoctorProfile-appointment-requests-list">
          <div className="DoctorProfile-appointment-requests-list-header">
            <span className="DoctorProfile-appointment-requests-list-header-title">
              Appointment Request
            </span>
            <span className="DoctorProfile-appointment-requests-list-header-view">
              View all &gt;{" "}
            </span>
          </div>
          <div className="DoctorProfile-appointment-requests-list-container">
            {/* then  map  */}
            <AppointmentRequest isConfirmed={false} isPending={true}/>
            <AppointmentRequest isConfirmed={true} isPending={false}/>
            <AppointmentRequest isConfirmed={false} isPending={false}/>
          </div>
        </div>
        <div className="DoctorProfile-statistics">
          <div className="DoctorProfile-statistics-stocks">
            <div className="DoctorProfile-statistics-stocks-header">
              <span className="DoctorProfile-statistics-stocks-header-title">
                Patients
              </span>
              <select
                className="DoctorProfile-statistics-stocks-header-select"
                name=""
                id=""
              >
                <option value="">2018</option>
                <option value="">2019</option>
                <option value="">2020</option>
                <option value="">2021</option>
                <option value="">2022</option>
              </select>
            </div>
            <div className="DoctorProfile-statistics-stocks-container">
              <div className="DoctorProfile-statistics-stock">
                <div className="DoctorProfile-stock-icon-container">
                  <FontAwesomeIcon
                    className="DoctorProfile-stock-icon"
                    icon={user}
                    style={{ color: "rgb(26, 88, 244)" }}
                  />
                </div>
                <div className="DoctorProfile-statistics-stock-details">
                  <span className="DoctorProfile-statistics-stock-details-data">
                    24.4K
                  </span>
                  <span className="DoctorProfile-statistics-stock-details-title">
                    New Patient
                  </span>
                </div>
                <div className="DoctorProfile-statistics-stock-data">
                  <FontAwesomeIcon
                    className="DoctorProfile-statistics-stock-data-icon"
                    icon={trendUp}
                    style={{ color: "blueviolet" }}
                  />
                  <span className="DoctorProfile-statistics-stock-data-value">
                    15%
                  </span>
                </div>
              </div>
              <div className="DoctorProfile-statistics-stock">
                <div className="DoctorProfile-stock-icon-container2">
                  <FontAwesomeIcon
                    className="DoctorProfile-stock-icon"
                    icon={user}
                    style={{ color: "orange" }}
                  />
                </div>
                <div className="DoctorProfile-statistics-stock-details">
                  <span className="DoctorProfile-statistics-stock-details-data">
                    166.8K
                  </span>
                  <span className="DoctorProfile-statistics-stock-details-title">
                    Old Patient
                  </span>
                </div>
                <div className="DoctorProfile-statistics-stock-data">
                  <FontAwesomeIcon
                    className="DoctorProfile-statistics-stock-data-icon"
                    icon={trendUp}
                    style={{ color: "blueviolet" }}
                  />
                  <span className="DoctorProfile-statistics-stock-data-value">
                    15%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="DoctorProfile-statistics-charts">
            <div
              className="DoctorProfile-statistics-stocks-header"
              style={{ alignItems: "center" }}
            >
              <span className="DoctorProfile-statistics-stocks-header-title">
                Gender
              </span>
              <select
                className="DoctorProfile-statistics-stocks-header-select"
                name=""
                id=""
              >
                <option value="">2018</option>
                <option value="">2019</option>
                <option value="">2020</option>
                <option value="">2021</option>
                <option value="">2022</option>
              </select>
            </div>
            <div className="DoctorProfile-statistics-charts-content">
              <CreateDoughnutData />
              <div className="DoctorProfile-statistics-charts-labels">
                <FontAwesomeIcon
                  id="DoctorProfile-statistics-charts-labels-male"
                  icon={faSquare}
                />
                <span className="DoctorProfile-statistics-charts-labels-title">
                  Male
                </span>
                <FontAwesomeIcon
                  id="DoctorProfile-statistics-charts-labels-female"
                  icon={faSquare}
                />
                <span className="DoctorProfile-statistics-charts-labels-title">
                  Female
                </span>
                <FontAwesomeIcon
                  id="DoctorProfile-statistics-charts-labels-child"
                  icon={faSquare}
                />
                <span className="DoctorProfile-statistics-charts-labels-title">
                  Children
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="DoctorProfile-Calendar-section">
          <CalendarComponent />
        </div>
      </div>
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
    </div>
  );
};

export default Overview;
