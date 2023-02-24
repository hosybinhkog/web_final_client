import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="h-48 w-screen bg-gray-800 text-white">
        <div className="flex justify-center gap-6 font-bold text-2xl">
          <div>
            <a href="">
              <i className="fa-brands fa-square-facebook hover:text-gray-400"></i>
            </a>
          </div>
          <div>
            <a href="">
              <i className="fa-brands fa-twitter hover:text-gray-400"></i>
            </a>
          </div>
          <div>
            <a href="">
              <i className="fa-brands fa-instagram hover:text-gray-400"></i>
            </a>
          </div>
          <div>
            <a href="">
              <i className="fa-brands fa-youtube hover:text-gray-400"></i>
            </a>
          </div>
        </div>
        <div>
          <ul className="flex gap-10 justify-center my-4">
            <li className="hover:text-blue-800">
              <a href="">Về chúng tôi </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="">Liên lạc với chúng tôi</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="">Tải về</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="">Chính sách Cookie</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="">Chính sách Quyền riêng tư</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="">Chính sách bản quyền</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="">Thỏa thuận</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="">BXH Cảm ơn</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="">Open Platform</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="flex justify-center">
            Copyright © 2018-2023 Huya PTE. LTD. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
