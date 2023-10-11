import React from "react";
import "./style.css"; 
import doctorImg from "../../assets/images/image 17.png";
import back from "../../assets/images/back.png"


const Register = () => {

  return (
    <div className="allRegisterContainer">
      <div className="signInFormContainer">
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter password"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Name
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter name"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Age
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter age"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Gender
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter gender"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Phone
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter phone number"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Email
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter Email"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Address
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter password"
            type="password"
            id="passwordInput"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Password
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter password"
          />
          <label className="formLabel" htmlFor="passwordInput">
            CIN
          </label>
        </div>
        <div className="textCenter mt-4 pt-2">
          <button
            type="button"
            className="btn btnPrimary btnLarge button"
            style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="imageContainer">
        <img src={doctorImg} alt="Doctor" className="doctorImage" />
       <img src = {back} className="backImage"/>
      </div>
    </div>
  );
};

export default Register;
