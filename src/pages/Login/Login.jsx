import React from "react";
import { useState } from "react";
import RulesLogin from "../../Components/Commom/RulesLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      window.location.href = "/";
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  // Api Login
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       // Lưu thông tin người dùng vào phiên hoặc cookie
  //       // Chuyển hướng người dùng đến trang chính
  //       window.location.href = '/home';
  //     } else {
  //       setError(data.message);
  //     }
  //   } catch (error) {
  //     setError('Lỗi kết nối đến máy chủ');
  //   }
  // };

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
              <p className="text-gray-400 py-4">Đăng nhập bằng Email</p>
            </div>
            <div className="pb-4">
              <input
                className="w-full rounded-md text-gray-500 bg-gray-100"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Nhập Email"
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="pb-4">
              <input
                className="w-full rounded-md text-gray-500 bg-gray-100"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="flex place-content-between">
              <div className=" font-normal pb-4 float-right text-blue-600 hover:text-blue-400">
                <Link to="/ForgotPassword">Quên mật khẩu</Link>
              </div>
              <div className="font-normal pb-4 float-right text-blue-600 hover:text-blue-400">
                <Link to="/Register">Đăng ký tài khoản mới</Link>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
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
