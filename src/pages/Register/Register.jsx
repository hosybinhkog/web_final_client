import React from 'react'
import RulesLogin from '../.././Components/Commom/RulesLogin'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="bg-black text-white w-1/3 m-auto my-10 rounded-2xl ">
        <div className="flex gap-48 py-5 pl-4">
          <p className="text-xl font-bold text-white">NIMO TV</p>
          <p className="font-bold text-lg">Đăng ký</p>
          <i className="fa-solid fa-xmark font-bold cursor-pointer mr-4 pl-5"></i>
        </div>
        <hr className="w-full text-sm text-gray-400"></hr>
        <div className="flex gap-14 ">
          <div className="flex-col w-3/5 ml-4 py-4">
            <div className="flex gap-4">
              <i className="fa-solid fa-phone mt-5"></i>
              <p className="text-gray-400 py-4">Đăng ký bằng Email</p>
            </div>
            <div className="pb-5">
              <input
                className="w-full bg-gray-100 rounded-md text-gray-500"
                type="text"
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="pb-5">
              <input
                className="w-full bg-gray-100 rounded-md text-gray-500"
                type="text"
                placeholder="Nhập email"
              />
            </div>

            <div className="pb-4">
              <input
                className="w-full rounded-md bg-gray-100 text-gray-500"
                type="password"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="pb-4">
              <input
                className="w-full rounded-md bg-gray-100 text-gray-500"
                type="password"
                placeholder="Xác nhận mật khẩu  "
              />
            </div>
            <span className="text-gray-400 py-4 font-light text-sm">
              Mật khảu phải gồm 6-20 ký tự chữ cái và chữ số
            </span>
            <div className="font-normal   float-left mt-2 text-blue-600 hover:text-blue-400">
              <Link to="/Login">Đã có tài khoản</Link>
            </div>
            <Link to="/Login">
              <button
                type="submit"
                className="w-full mt-2 bg-sky-500 rounded-md h-8 hover:bg-sky-300"
              >
                Đăng ký
              </button>
            </Link>
          </div>
          <RulesLogin title={'Đăng ký'} />
        </div>
      </div>
    </>
  )
}

export default Register
