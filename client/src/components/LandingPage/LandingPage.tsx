import "./style.css"

import React from 'react'
import doctor from "../../assets/images/image 17.png"
import container from "../../assets/images/Container.png"
import CardService from "../CardSevice/CardService"
import TeamMember from "../TeamMemberCard/TeamMember"


const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <div className="landing-page-container-child-1">
                <div className="sub1-child-1">
                    <div className="texts">
                        <div className="sous-text">
                            <div className="sub-texts">
                                Providing Quality {" "}
                                <span style={{ color: "#007E85" }}>Healthcare</span>  {" "}
                                for a  {" "}  <br />
                                <span style={{ color: "#6EAB36" }}>Brighter</span> and  {" "}
                                <span style={{ color: "#6EAB36" }}>Healthy</span> {" "}
                                Future
                            </div>
                            <p className="paragraph">At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approa
                                ch make us a leader in the healthcare industry</p>
                        </div>
                        <div className="texts-buttons">
                            <div className="texts-buttons-btn1">Appointements</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <circle cx="25.5" cy="25.5" r="25.5" fill="#007E85" />
                                <path d="M34.5 24.634C35.1667 25.0189 35.1667 25.9811 34.5 26.366L21.75 33.7272C21.0833 34.1121 20.25 33.631 20.25 32.8612L20.25 18.1388C20.25 17.369 21.0833 16.8879 21.75 17.2728L34.5 24.634Z" fill="white" />
                            </svg>
                            <div>Watch Video</div>

                        </div>
                    </div>
                    <div className="image-docotor-wrapper">
                        <img className="image-docotor" src={doctor} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="520" height="548" viewBox="0 0 520 548" fill="none">
                            <path d="M371.861 69.4458C407.056 98.7392 437.929 129.716 463.554 167.091C489.178 204.802 510.172 248.91 517.273 297.732C524.374 346.555 517.582 399.754 497.205 447.903C477.138 495.716 437.796 488.481 395.5 507C363.5 529 316 548 263.5 548C214 548 182 545 139 522C102 490.5 41.5208 478.544 18.9835 441.506C-3.86244 404.468 0.151041 348.912 0.459771 293.355C0.7685 238.135 -2.62753 182.579 14.97 136.114C32.5676 89.6481 71.1588 52.2738 114.998 28.3677C158.838 4.46155 208.235 -5.63964 252.692 3.11472C297.149 12.2058 336.666 40.1524 371.861 69.4458Z" fill="url(#paint0_linear_47_34)" />
                            <defs>
                                <linearGradient id="paint0_linear_47_34" x1="260" y1="0" x2="260" y2="548" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#007E85" />
                                    <stop offset="1" stop-color="#2B8500" stop-opacity="0.49" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="sub2-child-1 find-doctor">
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
            <div className="landing-page-container-child-2 d-flex">
                <span>Our results in numbers</span>
                <div className="d-flex justify-content-evenly w-100">
                    <div className="wrapper">
                        <span>99%</span>
                        <span>Customer satisfaction</span>
                    </div>
                    <div className="wrapper">
                        <span>15K</span>
                        <span>Online Patients</span>
                    </div>
                    <div className="wrapper">
                        <span>12K</span>
                        <span>Patients Recovered</span>
                    </div>
                    <div className="wrapper">
                        <span>99%</span>
                        <span>Company growth</span>
                    </div>
                </div>
            </div>
            <div className="landing-page-container-child-3 d-flex flex-row">
                <div className="d-flex flex-column align-items-center justify-content-center w-50 gap-5">
                    <span style={{ color: "#007E85", fontSize: "2.25rem", fontWeight: "700" }}>
                        You have lots of reasons <br /> to choose us
                    </span>
                    <span style={{ color: "#555", fontWeight: "400" }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing eli <br /> mattis sit phasellus mollis sit aliquam sit nullam.
                    </span>
                    <div className="d-flex gap-4">
                        <div style={{
                            color: "#fff",
                            borderRadius: "2.5rem",
                            backgroundColor: "#007E85",
                            padding: "1rem 2.25rem",
                        }}>Get Satrted</div>
                        <div
                            style={{
                                color: "#007E85",
                                borderRadius: "2.5rem",
                                backgroundColor: "#fff",
                                padding: "1rem 2.25rem",
                            }}
                        >Talk to sales</div>
                    </div>
                </div>
                <div>
                    <img src={container} alt="conatiner" />
                </div>
            </div>
            <div className="landing-page-container-child-4 mt-4">
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
            <div className="landing-page-container-child-5 mt-4">
                <div className="mb-5">
                    <span style={{ color: "#007E85", fontSize: "2.25rem", fontWeight: "700" }}>Meet our team members</span>
                    <p style={{ color: "#555", fontWeight: "400" }}>Lorem ipsum dolor sit amet consectetur adipiscing elit semp
                        er<br /> dalar elementum tempus hac tellus libero accumsan. </p>
                </div>
                <div style={{ padding: "0rem 4rem 1rem 7rem" }} className="all-services-cards-container d-flex  flex-wrap gap-4 w-100">
                   <TeamMember/>
                   <TeamMember/>
                   <TeamMember/>
                   <TeamMember/>
                   <TeamMember/>
                   <TeamMember/>
                   <TeamMember/>
                </div>
            </div>
        </div >
    )
}

export default LandingPage