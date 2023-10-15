import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Reports from "./components/Reports/Reports";
import ContactUs from "./components/ContactUs/ContuctUs";
import axios from "axios";

function App() {
  const [id, setId] = useState("");

  const handleUpdate = async (body: object) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/AdminDoc/${id}`, body);
      console.log("Data updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  };

  // useEffect(() => {
  //   handleUpdate({isVerified});
  // }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Reports/> } />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </div>

  );
}

export default App;
