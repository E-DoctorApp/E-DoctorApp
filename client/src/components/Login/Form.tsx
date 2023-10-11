import React, { useState } from 'react';
import "./style.css"
import { RootState, AppDispatch } from "../../store/store"
import { useSelector, useDispatch } from 'react-redux'
import { loginFunc } from '../../store/userSlice'

function Form() {
  const user = useSelector((state: RootState) => state.aziz)
  console.log("user", user);
  const dispatch: AppDispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    dispatch(loginFunc({
      email,
      password
    }))


  }
  return (
    <div className='signIn'>
      <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start gap-4">
        <p className="lead fw-normal mb-0 me-3">Sign in with</p>

        <a href="https://www.facebook.com">
          <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png" alt="facebbok" width={25} />
        </a>
        <a href="https://www.google.com">
          <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="google" width={25} />
        </a>

      </div>
      <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0">Or</p>
      </div>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form3Example3"
          className="form-control form-control-lg"
          placeholder="Enter a valid email address"
          onChange={(e) => {
            console.log(e.target.value)
            setEmail(e.target.value)
          }
          }
        />
        <label className="form-label" htmlFor="form3Example3">
          Email address
        </label>
      </div>
      <div className="form-outline mb-3">
        <input
          type="password"
          id="form3Example4"
          className="form-control form-control-lg"
          placeholder="Enter password"
          onChange={(e) => {
            console.log(e.target.value)
            setPassword(e.target.value)

          }}
        />
        <label className="form-label" htmlFor="form3Example4">
          Password
        </label>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check mb-0">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form2Example3"
          />
          <label className="form-check-label" htmlFor="form2Example3">
            Remember me
          </label>
        </div>
        <a href="#!" className="text-body">
          Forgot password?
        </a>
      </div>

      <div className="text-center text-lg-start mt-4 pt-2">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
          onClick={(e) => {
            e.preventDefault()
            dispatch(loginFunc({
              email,
              password
            }))
          }}
        >
          Log In
        </button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Don't have an account? <a href="#!" className="link-danger">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Form;