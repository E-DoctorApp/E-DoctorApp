import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactUs from './components/contactUs/ContactUS';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <ContactUs />
      <DoctorProfile/>
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
