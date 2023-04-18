import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const NavbarInforUser = () => {
  return (
    <>
      <div className="w-2/12 bg-[rgb(35,35,35)] text-[#5A5A5A] flex flex-col px-6 ">
        <span className="text-white text-xl mt-9 mb-2">Trung tâm cá nhân</span>
        <div className="">
          {/* inforUsers */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? '#6C47FF' : '',
                width: isActive ? '100%' : '',
                display: isActive ? 'inline-block' : '',
                borderRadius: isActive ? '8px' : '',
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bold' : '',
              }
            }}
            to="/usersPage"
          >
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2 ">
                <i class="fa-solid fa-user"></i>
                <span>Thông tin của tôi</span>
              </div>
            </div>
          </NavLink>

          {/* Follower */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? '#6C47FF' : '',
                width: isActive ? '100%' : '',
                display: isActive ? 'inline-block' : '',
                borderRadius: isActive ? '8px' : '',
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bold' : '',
              }
            }}
            to="/followerStreamer"
          >
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-heart"></i>
                <span>Theo dõi của tôi</span>
              </div>
            </div>
          </NavLink>

          {/* Chi tiết kim cương */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? '#6C47FF' : '',
                width: isActive ? '100%' : '',
                display: isActive ? 'inline-block' : '',
                borderRadius: isActive ? '8px' : '',
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bold' : '',
              }
            }}
            to="/detailDiamondPage"
          >
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i className="fa-regular fa-gem"></i>
                <span>Chi tiết tài khoản kim cương</span>
              </div>
            </div>
          </NavLink>

          {/* Chi tiết coin  */}
          <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
            <div className="flex gap-3 items-center pl-2">
              <i class="fa-solid fa-coins"></i>
              <span>Chi tiết tài khoản coin</span>
            </div>
          </div>
          {/* Lịch sử */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? '#6C47FF' : '',
                width: isActive ? '100%' : '',
                display: isActive ? 'inline-block' : '',
                borderRadius: isActive ? '8px' : '',
                color: isActive ? 'white' : '',
                fontWeight: isActive ? 'bold' : '',
              }
            }}
            to="/postMe"
          >
            <div className=" py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-table"></i>
                <span>Post me</span>
              </div>
            </div>
          </NavLink>

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
        <ul>
          <li className="">
            <div className="py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-tablet"></i>
                <span>Bảng thống kê</span>
              </div>
            </div>
          </li>
          <li>
            {' '}
            <div className="py-3 hover:bg-black rounded-lg cursor-pointer">
              <div className="flex gap-3 items-center pl-2">
                <i class="fa-solid fa-download"></i>
                <span>Tải về các công cụ phát trực tuyến</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavbarInforUser
