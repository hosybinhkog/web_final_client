import React from "react";

const RulesLogin = ({ title }) => {
  return (
    <>
      <div className="w-2/5 mr-4 py-4">
        <span className="text-gray-400 pb-4">
          Đăng nhập bằng ứng dụng của bên thứ 3
        </span>
        <div className="my-4 py-2 pl-4 font-extralight text-sm h-9 gap-4 flex border rounded-2xl border-white hover:bg-gray-600 cursor-pointer">
          <i className="fa-brands fa-facebook-f text-blue-600"></i>
          <span>Đăng nhập bằng Facebook</span>
        </div>
        <div className="my-4 py-2 pl-4 font-extralight text-sm h-9 gap-2 flex border rounded-2xl border-white hover:bg-gray-600 cursor-pointer">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt=""
          />
          <span>Đăng nhập với google</span>
        </div>
        <div className="my-4 py-2 pl-4 font-extralight text-sm h-9 gap-4 flex border rounded-2xl border-white hover:bg-gray-600 cursor-pointer">
          <i className="fa-brands fa-twitter text-sky-500"></i>
          <span>Đăng nhập với Twitter</span>
        </div>
        <div className="text-xs">
          <span className="text-gray-400">
            {title} có nghĩa bạn đồng ý với{" "}
            <a className="text-blue-700 hover:text-blue-500" href="">
              Thỏa thuận người dùng
            </a>{" "}
            và {""}
            <a className="text-blue-700 hover:text-blue-500" href="">
              Chính sách quyền riêng tư
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default RulesLogin;
