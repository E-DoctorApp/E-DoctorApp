import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactUs from './components/contactUs/ContactUS';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ContactUs />



      <LandingPage />




      <Footer />
    </div>
  );
}

export default App;
