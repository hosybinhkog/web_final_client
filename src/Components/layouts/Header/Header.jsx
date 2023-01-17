import React from "react";

const Header = () => {
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
                <div className="hover:text-white">
                  <li className="">
                    Phát trực tiếp <i class="fa-solid fa-chevron-down"></i>
                  </li>
                </div>
                <div>
                  <ul className="absolute bg-black mt-14 rounded-lg hidden">
                    <li>PC Streamer </li>
                    <li>Mobile Game & The Nimo Show</li>
                    <li>Máy Khách</li>
                  </ul>
                </div>
                <li className="hover:text-white">Tải xuống</li>
                <li className="hover:text-white">. . .</li>
              </ul>
            </div>
            <div className="flex gap-4 my-3 text-white">
              <div className="border rounded-lg px-2 mb-2 hover:bg-sky-600">
                <button className="hover:text-white">Đăng nhập</button>
              </div>
              <div className="border rounded-lg px-2 mb-2 hover:text-white hover:bg-sky-600">
                <button>Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
