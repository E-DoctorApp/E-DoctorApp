import "./style.css";
import doctorImg from "../../assets/images/image 17.png";
import back from "../../assets/images/back.png";
import { useDispatch } from "react-redux";
import { createPatient } from "../../store/patinetSlice";
import { AppDispatch } from "../../store/store";
import { createDoctor } from "../../store/doctorSlice";
import { useNavigate } from "react-router-dom";
import React, { useState, ChangeEvent } from "react";
import "./style.css";

const Register = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [userType, setUserType] = useState("");
  const [showDoctorFields, setShowDoctorFields] = useState(false);

  const handleUserTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserType(e.target.value);
    setShowDoctorFields(e.target.value === "2");
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    gender: "",
    phone: "",
  });
  const handleFormChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (type === "doctor") {
      console.log("here");

      // we nee to add the papers to the docotor
      dispatch(createDoctor({ ...form, age: +form.age }));
      // i nedd to check the error later then navigate
      // navigate("/login")
    } else if (type === "patient") {
      dispatch(createPatient({ ...form, age: +form.age }));
      // i nedd to check the error later then navigate
      // navigate("/login")
    }
  };
  return (
    <div className="allRegisterContainer">
      <div className="signInFormContainer">
        <select
          className="form-select form-select-sm user-type"
          aria-label=".form-select-sm example"
          onChange={handleUserTypeChange}
          value={userType}
        >
          <option value="">User type</option>
          <option value="1">Patient</option>
          <option value="2">Doctor</option>
        </select>
        <div className="formOutline mb-3">
          <input
            onChange={(e) => handleFormChange(e)}
            name="name"
            className="formInput formInputLarge"
            placeholder="Name"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Name
          </label>
        </div>
        <div className="formOutline mb-3">
          <input className="formInput formInputLarge" placeholder="Enter Age" />
        </div>

        <div className="formOutline mb-3">
          <input
            name="age"
            onChange={(e) => handleFormChange(e)}
            className="formInput formInputLarge"
            placeholder="Give Age"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Age
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            onChange={(e) => handleFormChange(e)}
            name="gender"
            className="formInput formInputLarge"
            placeholder="Gender"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Age
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            onChange={(e) => handleFormChange(e)}
            name="phone"
            className="formInput formInputLarge"
            placeholder="Enter Phone"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Gender
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            className="formInput formInputLarge"
            placeholder="Enter Phone"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Phone
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            onChange={(e) => handleFormChange(e)}
            name="email"
            className="formInput formInputLarge"
            placeholder="example@example.com"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Email
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            onChange={(e) => handleFormChange(e)}
            name="address"
            className="formInput formInputLarge"
            placeholder="Enter Address"
          />
          <label className="formLabel" htmlFor="passwordInput">
            Address
          </label>
        </div>
        <div className="formOutline mb-3">
          <input
            onChange={(e) => handleFormChange(e)}
            name="password"
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
            name="cin"
            type="text"
            maxLength={8}
            minLength={8}
            onChange={(e) => handleFormChange(e)}
            className="formInput formInputLarge"
            placeholder="Cin"
          />
          <label className="formLabel" htmlFor="passwordInput">
            CIN
          </label>
        </div>
        {showDoctorFields && (
          <div>
            <div className="formOutline mb-3">
              <input
                className="formInput formInputLarge"
                placeholder="Enter papers"
                type="password"
                id="papers"
              />
              <label className="formLabel" htmlFor="passwordInput">
                Papers
              </label>
            </div>

            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Choose your department</option>
              <option value="1">Neurologist</option>
              <option value="2">Dermatology</option>
              <option value="3">Gynecologist</option>
              <option value="4">Generalist</option>
              <option value="5">Radiology</option>
              <option value="6">Orthopedics</option>
              <option value="7">Dentistry</option>
              <option value="8">Surgery</option>
            </select>
          </div>
        )}

        <div className="formOutline mb-3">
          <select required onChange={(e) => setType(e.target.value)}>
            <option selected>Choose One Please</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <div className="textCenter mt-4 pt-2">
          <button
            onClick={(e) => handleSubmit(e)}
            type="button"
            className="btn btnPrimary btnLarge button"
            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="imageContainer">
        <img src={doctorImg} alt="Doctor" className="doctorImage" />
        <img src={back} alt="Back" className="backImage" />
        <img src={back} className="backImage" />
      </div>
    </div>
  );
};

export default Register;
