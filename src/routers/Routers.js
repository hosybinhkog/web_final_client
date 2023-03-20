import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../pages/Error404/Error404'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Rank from '../Components/Commom/Rank'
import FeedProduct from '../Components/Product/feedProduct'
import LiveShowPage from '../Components/categoryPage/liveShow'
import LiveStreaming from '../Components/categoryPage/livestreaming'
import UsersPage from '../Components/users/usersPage'
<<<<<<< HEAD
import UpdateUser from '../Components/users/updateUser'
=======
import ResetPassword from '../pages/reset-password'
>>>>>>> bf9a77d0a34130bc7a36424012a4562ae4e47eba

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/feedProduct" element={<FeedProduct />} />
      <Route path="/liveShowPage" element={<LiveShowPage />} />
      <Route path="/liveStreaming" element={<LiveStreaming />} />
      <Route path="/usersPage" element={<UsersPage />} />
      <Route path="/updateUser" element={<UpdateUser />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Routers
