import React from "react";
import RulesLogin from "../../Commom/RulesLogin";

const Login = () => {
  return (
    <>
      <div className="bg-black text-white w-1/3 m-auto my-10 rounded-2xl ">
        <div className="flex gap-48 py-5 pl-4">
          <p className="text-xl font-bold text-white">NIMO TV</p>
          <p className="font-bold text-lg">Đăng nhập</p>
          <i className="fa-solid fa-xmark font-bold mr-4 cursor-pointer"></i>
        </div>
        <hr className="w-full text-sm text-gray-400"></hr>
        <div className="flex gap-14 ">
          <div className="flex-col w-3/5 ml-4 py-4">
            <div className="flex gap-4">
              <i className="fa-solid fa-phone mt-5"></i>
              <p className="text-gray-400 py-4">Đăng nhập bằng số điện thoại</p>
            </div>
            <div className="pb-4">
              <input
                className="w-full rounded-md text-gray-500 bg-gray-100"
                type="text"
                placeholder="Nhập số điện thoại di động"
              />
            </div>
            <div className="pb-4">
              <input
                className="w-full rounded-md text-gray-500 bg-gray-100"
                type="password"
                placeholder="Nhập mật khẩu"
              />
            </div>

            <span className="block font-normal pb-4 float-right text-blue-600 hover:text-blue-400">
              <a href="">Quên mật khẩu</a>
            </span>
            <button
              type="submit"
              className="w-full mt-6 bg-sky-500 rounded-md h-8 hover:bg-sky-300">
              Đăng nhâp
            </button>
          </div>
          <RulesLogin title={"Đăng nhập"} />
        </div>
      </div>
    </>
  );
};

export default Login;
