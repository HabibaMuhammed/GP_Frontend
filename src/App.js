import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Labs from "./pages/Labs";
import LabContent from "./pages/LabContent";
import PageNotFound from "./components/error/Error";
export const UserContext = createContext(null);
export const LogoutContext = createContext(() => {});

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const config = {
          headers: { Authorization: ` ${token}` },
        };
        const response = await axios.get(
          "http://localhost:5001/api/user/profile",
          config
        );
        setUser(response.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    // perform any additional logout-related actions here
  };

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LogoutContext.Provider value={handleLogout}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login onLogin={setUser} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/labs" element={<Labs />} />
              <Route path="/content" element={<LabContent />} />
             <Route path="*" Component={PageNotFound} />
         
            </Routes>
          </BrowserRouter>
        </LogoutContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
