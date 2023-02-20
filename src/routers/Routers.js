import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404/Error404";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Rank from "../Components/Commom/Rank";
import FeedProduct from "../Components/Product/feedProduct";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/feedProduct" element={<FeedProduct />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routers;
