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
import IntroduceStreamer from '../Components/users/introduceStreamer'
import EditStreamer from '../Components/users/editStreamer'
import NavbarInforUser from '../Components/Commom/navbarInforUser'
import FollowerStreamer from '../Components/users/followerStreamer'
import ItemProduct from '../Components/CategoryItem/components/handleItem/itemProduct'
import PlayButton from '../Components/Commom/playButton'
import PageCategorisStream from '../Components/categoryPage/pageCategorisStream'
import PostMe from '../Components/users/postMe'
import Blog from '../pages/Blog'
import CreatePost from '../Components/users/createPost'
import DetailPost from '../pages/Blog/detail'
import DetailDiamondPage from '../Components/users/detailDiamondPage'
import ReportBlog from '../pages/Blog/reportBlog'
import FeedItemAllPost from '../Components/CategoryItem/components/handleFeed/feedItemAllPost'
import FeedItemCategoriesAllPost from '../Components/CategoryItem/components/handleFeed/feedItemCategoriesPost'
import ModalNoti from '../Components/Commom/modalNoti'
import PublicIntroduceStream from '../pages/publicIntroduceStream'
import Cloudari from '../Components/Commom/cloudari'

const Routers = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/navbarInforUser" element={<NavbarInforUser />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/liveShowPage" element={<LiveShowPage />} />
      <Route path="/liveStreaming" element={<LiveStreaming />} />
      <Route path="/404" element={<Error404 />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<DetailPost />} />
      <Route path="/blog/:id/reportBlog/:id" element={<ReportBlog />} />
      <Route path="/feedItemAllPost" element={<FeedItemAllPost />} />
      <Route
        path="/feedItemCategoriesPost"
        element={<FeedItemCategoriesAllPost />}
      />
      <Route path="/modalNoti" element={<ModalNoti />} />
      <Route path="/cloudari" element={<Cloudari />} />
      <Route path="*" element={<Error404 />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/usersPage" element={<UsersPage />} />
        <Route path="/itemProduct" element={<ItemProduct />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/aboutUser" element={<AboutUser />} />
        <Route path="/introduceStreamer" element={<IntroduceStreamer />} />
        <Route
          path="/publicIntroduceStream/:id"
          element={<PublicIntroduceStream />}
        />
        <Route path="/editStreamer" element={<EditStreamer />} />
        <Route path="/feedProduct" element={<FeedProduct />} />
        <Route path="/regisStream" element={<RegisStream />} />
        <Route path="/followerStreamer" element={<FollowerStreamer />} />
        <Route path="/detailDiamondPage" element={<DetailDiamondPage />} />
        <Route path="/playButton" element={<PlayButton />} />
        <Route path="/pageCategorisStream" element={<PageCategorisStream />} />
        <Route path="/postMe" element={<PostMe />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Route>
    </Routes>
  )
}

export default Routers
