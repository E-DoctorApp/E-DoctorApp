import React from 'react';
import logo from './logo.svg';
import './App.css';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import ContactUs from './components/contactUs/ContactUS';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">




      <NavBar />




      <DoctorProfile />
      {/* <ContactUs/> */}

      <Login />

      <ContactUs />



      {/* <LandingPage /> */}





      <Footer />
    </div>
  );
}

export default App;
