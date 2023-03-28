import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../pages/Error404/Error404'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import FeedProduct from '../Components/Product/feedProduct'
import LiveShowPage from '../Components/categoryPage/liveShow'
import LiveStreaming from '../Components/categoryPage/livestreaming'
import UsersPage from '../Components/users/usersPage'
import UpdateUser from '../Components/users/updateUser'
import ResetPassword from '../pages/reset-password'
import AboutUser from '../Components/users/aboutUser'
import ProtectedRoute from '../Components/layouts/auth/protectedRoute'
import RegisStream from '../Components/users/regisStream'

const Routers = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/liveShowPage" element={<LiveShowPage />} />
      <Route path="/liveStreaming" element={<LiveStreaming />} />
      <Route path="*" element={<Error404 />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/usersPage" element={<UsersPage />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/aboutUser" element={<AboutUser />} />
        <Route path="/feedProduct" element={<FeedProduct />} />
        <Route path="/regisStream" element={<RegisStream />} />
      </Route>
    </Routes>
  )
}

export default Routers
