import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactUs from './components/contactUs/ContactUS';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import { Route, Routes } from 'react-router';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/contactUs' element={<ContactUs /> } />
        <Route path='/register' element={<Register /> } />
        <Route path='/doctorProfile' element={<DoctorProfile /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
