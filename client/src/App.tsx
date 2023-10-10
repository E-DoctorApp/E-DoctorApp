import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactUs from './components/contactUs/ContactUS';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      {/* <ContactUs/> */}

      <Register/>
    </div>
  );
}

export default App;
