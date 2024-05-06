import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import TimeInfo from "../Pages/TimeInfo";
import PrivetRoute from "./PrivetRoute";
import Profile from "../Components/Phofile/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/date-select"
          element={
            <PrivetRoute>
              <TimeInfo />
            </PrivetRoute>
          }
        />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
