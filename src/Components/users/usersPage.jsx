import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UsersPage = () => {
  const { user } = useSelector((state) => state.users)

  return (
    <>
      <div className="flex min-h-[80vh] w-full">
        <div className="w-2/12 bg-[rgb(35,35,35)] text-[#5A5A5A] flex flex-col px-6 ">
          <span className="text-white text-xl mt-9 mb-2">
            Trung tâm cá nhân
          </span>
          <div className="">
            {/* inforUsers */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-user"></i>
                <span>Thông tin của tôi</span>
              </div>
            </div>
            {/* Follower */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-heart"></i>
                <span>Theo dõi của tôi</span>
              </div>
            </div>
            {/* Chi tiết kim cương */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i className="fa-regular fa-gem"></i>
                <span>Chi tiết tài khoản kim cương</span>
              </div>
            </div>
            {/* Chi tiết coin  */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-coins"></i>
                <span>Chi tiết tài khoản coin</span>
              </div>
            </div>
            {/* Lịch sử */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-table"></i>
                <span>Lịch sử dự đoán</span>
              </div>
            </div>
            {/* Subs */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-registered"></i>
                <span>Subs của tôi</span>
              </div>
            </div>
            {/* Thành tựu  */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-award"></i>
                <span>Quà của tôi / Tường thành tựu</span>
              </div>
            </div>
            {/* Family */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-house"></i>
                <span>Family của tôi</span>
              </div>
            </div>
            {/* Video */}
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-brands fa-youtube"></i>
                <span>Video của tôi</span>
              </div>
            </div>
          </div>
          <span className="text-white text-xl mt-9 mb-2">Tôi là Streamer</span>
          <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
            <div className="flex gap-3 items-center pl-2">
              <i class="fa-solid fa-tablet"></i>
              <span>Bảng thống kê</span>
            </div>
          </div>
          <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
            <div className="flex gap-3 items-center pl-2">
              <i class="fa-solid fa-download"></i>
              <span>Tải về các công cụ phát trực tuyến</span>
            </div>
          </div>
        </div>
        <div className="w-10/12 bg-black flex flex-col pl-10 pt-10">
          <div className="pb-10">
            {!user.avatar ? (
              <img
                className="border rounded-[50%] object-cover w-40"
                src="https://upanh123.com/wp-content/uploads/2021/03/hinh-anh-cute13.jpg"
                alt=""
              />
            ) : (
              <img
                className="border rounded-[50%] object-cover w-40"
                src={user.avatar.url}
                alt=""
              />
            )}
          </div>
          <div className="text-white flex flex-col gap-5">
            <span className="flex gap-3">
              username: <p>{user.username}</p>
            </span>
            <span className="flex gap-3">
              email: <p>{user.email}</p>
            </span>
            <span className="flex gap-3">
              Gender: {user.gender ? <p>Nam</p> : <p>Nữ</p>}{' '}
            </span>
            <span className="flex gap-3">
              <div className="bg-[url('/public/diamond.png')] w-6 h-6 bg-no-repeat"></div>
              {user.cost}
            </span>
            <Link to="/updateUser">
              <button className="flex justify-center w-44 mt-6 bg-sky-500 rounded-md hover:bg-sky-300 cursor-pointer">
                Cập nhật tài khoản
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersPage
