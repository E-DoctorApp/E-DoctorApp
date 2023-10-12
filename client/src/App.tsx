import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactUs from './components/contactUs/ContactUS';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import ServicePage from './components/ServicePage/ServicePage';
import Overview from './components/DoctorProfile/Overview';
import AllAppointments from './components/AllAppointments/AllAppointments';


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/contactUs' element={<ContactUs /> } />
        <Route path='/register' element={<Register /> } />
        <Route path='/doctorProfile' element={<DoctorProfile /> } >
          <Route path='' element={<Overview />} />
          <Route path='allAppointments' element={<AllAppointments />} />
          {/* <Route path='pp' element={<h1>4444</h1>} /> */}
        </Route>
        <Route path='/services' element={<ServicePage/> } />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
