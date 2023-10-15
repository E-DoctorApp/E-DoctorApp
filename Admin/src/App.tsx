import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Reports from "./components/Reports/Reports";
import ContactUs from "./components/ContactUs/ContuctUs";
import axios from "axios";

function App() {
  const [id, setId] = useState("");

  const handleUpdate = async (body:object) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/AdminDoc/${id}`,body);
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
    <Router>
      <div>
        <div>
          {/* <Navbar /> */}
        </div>
        <div>
          {/* <Switch> */}
            <Route path="/reports">
              <Reports />
            </Route>
            <Route path="/contact">
              {/* <ContactUs /> */}
            </Route>
            <Route path="/">
              {/* Default route, you can render any component here */}
              <h1>Welcome to the homepage</h1>
            </Route>
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
