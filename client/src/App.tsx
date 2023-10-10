import React from 'react';
import logo from './logo.svg';
import './App.css';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import ContactUs from './components/contactUs/ContactUS';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <DoctorProfile/>
      <ContactUs/>
    </div>
  );
}

export default App;
