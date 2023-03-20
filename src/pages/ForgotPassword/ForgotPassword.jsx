import React from 'react'
import RulesLogin from '../.././Components/Commom/RulesLogin'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <div className="bg-black text-white w-1/3 m-auto my-10 rounded-2xl ">
        <div className="flex gap-40 py-5">
          <p className="text-xl font-bold text-white pl-4">NIMO TV</p>
          <div className="flex gap-4">
            <Link to="/Login">
              <a href="">
                <i className="fa-solid fa-arrow-left mt-2 hover:text-blue-500"></i>
              </a>
            </Link>

            <p className="font-bold text-lg">Quên mật khẩu</p>
          </div>
          <i className="fa-solid fa-xmark font-bold cursor-pointer"></i>
        </div>
        <hr className="w-full text-sm text-gray-400"></hr>
        <div className="flex gap-14 ">
          <div className="flex-col w-3/5 ml-4 py-4">
            <div className="flex gap-4">
              <p className="text-gray-400 py-4">Thiết lập lại mật khẩu</p>
            </div>
            <div className="pb-5">
              <input
                className="w-full bg-gray-100 rounded-md text-gray-500"
                type="text"
                placeholder="Nhập email"
              />
            </div>
            <div className="flex justify-between gap-4 items-center">
              <div className="pb-5">
                <input
                  className="w-36 bg-gray-100 rounded-md text-gray-500"
                  type="text"
                  placeholder="Nhập mã xác nhận"
                />
              </div>
              <div className="pb-4">
                <button className="w-36 bg-sky-500 rounded-md h-8 hover:bg-sky-300">
                  Nhận mã xác nhận
                </button>
              </div>
            </div>
            <div className="pb-4">
              <input
                className="w-full rounded-md bg-gray-100 text-gray-500"
                type="password"
                placeholder="Nhập mật khẩu mới"
              />
            </div>

            <span className="text-gray-400 py-4 font-light text-sm">
              Mật khẩu phải có ít nhất 8 ký tự
            </span>
            <button
              type="submit"
              className="w-full mt-6 bg-sky-500 rounded-md h-8 hover:bg-sky-300"
            >
              Gửi
            </button>
          </div>
          <RulesLogin title={'Đăng nhập'} />
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
