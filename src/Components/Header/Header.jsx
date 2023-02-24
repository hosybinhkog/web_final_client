import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ButtonSubmit from '../Commom/ButtonSubmit'
import { login } from '../../store/actions/userActions'

const Header = () => {
  // const dispatch = useDispatch();
  const username = useSelector((state) => state.username)

  // const handleLogin = (username, password) => {
  //   dispatch(login(username, password));
  // };

  return (
    <>
      <div className="h-16 w-screen bg-black">
        <div className=" px-4 h-16 m-auto text-gray-400 flex gap-96 cursor-pointer ">
          <div className="flex">
            <div className="text-3xl font-bold my-3 text-white">
              <p className="">NIMO TV</p>
            </div>
            <div className="mx-8">
              <ul className="flex gap-6 text-lg my-3">
                <li className="hover:text-white">Trang chủ</li>
                <li className="hover:text-white">Phát trực tiếp</li>
                <li className="hover:text-white">Nimo Show</li>
                <li className="hover:text-white">Game</li>
                <li className="hover:text-white">Giải đấu</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="my-3">
              <ul className="flex gap-4">
                <li>
                  <input
                    className="rounded-lg text-black mx-1"
                    type="text"
                    placeholder="Tìm kiếm streamer"
                  />
                </li>
                <li className="border rounded-lg px-2 text-white">
                  <i className="fa-regular fa-gem mx-1 text-sky-400"></i>
                  Nạp
                </li>

                <div className=" relative group">
                  <li className=" hover:text-white">
                    Phát trực tiếp <i class="fa-solid fa-chevron-down"></i>
                  </li>
                  <div className="invisible opacity-0 absolute bg-black rounded-lg w-64 mt-8 flex flex-col gap-2 p-3 group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                    <div className="">
                      <a href="/" className="flex gap-2 menu-item">
                        <li className=" w-52">PC Streamer</li>
                        <i className="fa-solid fa-chevron-right mt-1"></i>
                      </a>
                    </div>
                    <div className="">
                      <a href="/" className="flex gap-2 menu-item">
                        <li className=" w-52">Mobile Game & The Nimo Show</li>
                        <i className="fa-solid fa-chevron-right mt-1"></i>
                      </a>
                    </div>

                    <div className="">
                      <a href="/" className="flex gap-2 menu-item">
                        <li className=" w-52">Máy Khách</li>
                        <i className="fa-solid fa-chevron-right mt-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <li className="hover:text-white">Tải xuống</li>
                <li className="hover:text-white">. . .</li>
              </ul>
            </div>
            <div>
              {username ? (
                <div>
                  <p>Hello {username}</p>
                  <div>
                    <Link to="/Login">
                      <ButtonSubmit titleButton={'Thoát'} />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 my-3 text-white">
                  <Link to="/Login">
                    <ButtonSubmit titleButton={'Đăng nhập'} />
                  </Link>
                  <Link to="/Register">
                    <ButtonSubmit titleButton={'Đăng ký'} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
