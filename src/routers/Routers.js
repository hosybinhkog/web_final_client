import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../Components/pages/Errot404/Error404";
import ForgotPassword from "../Components/pages/ForgotPassword/ForgotPassword";
import Home from "../Components/pages/Home/Home";
import Login from "../Components/pages/Login/Login";
import Register from "../Components/pages/Register/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routers;
