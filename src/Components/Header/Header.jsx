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
      <div className="h-16 w-screen bg-black ">
        <div className=" px-4 h-16 m-auto text-gray-400 flex items-center justify-between grid grid-cols-2">
          <div className="flex cursor-pointer ">
            <div className="text-3xl font-bold my-3 text-white">
              <p className="">PBA TV</p>
            </div>
            <div className="mx-8">
              <ul className="flex gap-6 text-lg my-3">
                <Link to="/">
                  <li className="hover:text-white">Trang chủ</li>
                </Link>
                <Link to="/LiveStreaming">
                  <li className="hover:text-white">Phát trực tiếp</li>
                </Link>
                <Link to="/LiveShowPage">
                  <li className="hover:text-white">Nimo Show</li>
                </Link>
                <Link to="/">
                  <li className="hover:text-white">
                    Game <i class="fa-solid fa-chevron-down"></i>
                  </li>
                </Link>
                <Link to="/">
                  <li className="hover:text-white">
                    Giải đấu <i class="fa-solid fa-chevron-down"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex ml-auto items-center gap-2 pr-4">
            <div className="my-3">
              <ul className="flex gap-4">
                <li>
                  <input
                    className="rounded-lg text-black mx-1"
                    type="text"
                    placeholder="Tìm kiếm streamer"
                  />
                </li>
                <li className="border rounded-lg px-2 text-white cursor-pointer flex items-center">
                  <i className="fa-regular fa-gem mx-1 text-sky-400"></i>
                  Nạp
                </li>

                <div className=" relative group ">
                  <div className="flex items-center h-full">
                    <li className=" hover:text-white cursor-pointer">
                      Tải xuống <i class="fa-solid fa-download"></i>
                    </li>
                  </div>

                  <div className=" invisible opacity-0 absolute bg-black rounded-lg w-64 mt-8 flex flex-col gap-2 p-3 group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                    <span className="text-white text-xl mb-2">
                      Tải về ứng dụng
                    </span>
                    <div className="">
                      <a href="/" className="flex gap-2 menu-item items-center">
                        <i class="fa-brands fa-apple"></i>
                        <li className=" w-52">App Store</li>
                      </a>
                    </div>
                    <div className="">
                      <a href="/" className="flex gap-2 menu-item items-center">
                        <i class="fa-brands fa-google"></i>
                        <li className=" w-52">Google Play</li>
                      </a>
                    </div>
                  </div>
                </div>

                <div className=" relative group ">
                  <div className="flex items-center h-full">
                    <li className=" hover:text-white cursor-pointer">
                      Phát trực tiếp <i class="fa-solid fa-chevron-down"></i>
                    </li>
                  </div>

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

                {/* <li className="hover:text-white cursor-pointer flex gap-2 items-center">
                    Tải xuống <i class="fa-solid fa-download"></i>
                  </li> */}
                <li className="hover:text-white cursor-pointer flex items-center">
                  . . .
                </li>
              </ul>
            </div>
            <div>
              {username ? (
                <div className="flex items-center gap-4 my-3 text-white">
                  <span>Hello {username}</span>
                  <div>
                    <Link to="/Login">
                      <ButtonSubmit titleButton={'Thoát'} />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 my-3 text-white">
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
