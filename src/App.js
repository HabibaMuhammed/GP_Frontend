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
import LearningEnv from "./pages/LearningEnv";import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import Forget from "./pages/Forget";
import ResetPassword from "./pages/ResetPassword";
import Try from "./pages/Try";
import Otp from "./pages/Otp";

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
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/forget" element={<Forget />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/try" element={<Try />} />
              <Route path="/otp" element={<Otp />} />

              <Route path="/learningcontent" element={<LearningEnv />}/>
             <Route path="*" Component={PageNotFound} />
             
              <Route path="/content" element={<LabContent />} />
            </Routes>
          </BrowserRouter>
        </LogoutContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
