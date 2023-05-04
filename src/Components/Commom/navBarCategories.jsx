import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBarCategories = () => {
  const { data } = useSelector((state) => state.loadDataIndex)
  return (
    <div className="w-2/12 bg-[#1A1A1A] text-gray-200">
      <div className="px-1">
        <div className="mb-5 ">
          <div className="text-lg font-semibold">
            <a
              href="/"
              className="flex gap-2 pb-3 hover:bg-zinc-500 hover:rounded-lg"
            >
              <i className="fa-regular fa-heart mt-1"></i>
              <p>Theo dõi của tôi</p>
            </a>
          </div>
          <div className="p-2 rounded-md bg-zinc-700">
            <div className="">
              <a
                href="/"
                className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
              >
                <div className="">
                  <img
                    className="border rounded-full object-cover w-16"
                    src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span>GD Anh</span>
                  <div className="flex gap-28">
                    <span>LMHT</span>
                    <div className=" flex gap-1 items-center">
                      <i class="fa-solid fa-users"></i>
                      <span>25k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="">
              <a
                href="/"
                className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
              >
                <div className="">
                  <img
                    className="border rounded-full object-cover w-16"
                    src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span>GD Anh2</span>
                  <div className="flex gap-28">
                    <span>LMHT</span>
                    <div className=" flex gap-1 items-center">
                      <i class="fa-solid fa-users"></i>
                      <span>25k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="">
              <a href="/">
                <button className="flex py-2 gap-2 w-full justify-center hover:bg-zinc-900 hover:rounded-lg">
                  Thêm <i className="fa-solid fa-chevron-right mt-1"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <a href="/">
            <div className="flex gap-3 text-lg font-semibold items-center hover:bg-zinc-500 hover:rounded-lg py-3">
              <i className="fa-solid fa-ranking-star"></i>
              <span>Bảng Xếp Hạng</span>
            </div>
          </a>
          <a href="/">
            <div className="flex gap-3 text-lg font-semibold items-center hover:bg-zinc-500 hover:rounded-lg py-3">
              <i class="fa-solid fa-hands-holding-child"></i>
              <span>Sảnh Danh Vọng</span>
            </div>
          </a>
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
            to="/pageCategorisStream"
          >
            <div className="flex gap-3 text-lg font-semibold items-center hover:bg-zinc-500 hover:rounded-lg py-3">
              <i class="fa-solid fa-gamepad"></i>
              <span>Game</span>
            </div>
          </NavLink>
        </div>
        <div className="p-2 rounded-md bg-zinc-700 mt-4">
          <div className="">
            {data?.categoriesStream &&
              data?.categoriesStream?.map((categoriesStream) => (
                <a
                  href="/"
                  className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
                >
                  <div className="flex flex-col gap-2 ">
                    <span>{categoriesStream.title}</span>
                  </div>
                </a>
              ))}
          </div>
          <div className="">
            <NavLink to="/pageCategorisStream">
              <button className="flex py-2 gap-2 w-full justify-center hover:bg-zinc-900 hover:rounded-lg">
                Thêm <i className="fa-solid fa-chevron-right mt-1"></i>
              </button>
            </NavLink>
          </div>
        </div>
        {/* Giai tri */}
        <div className="mt-4">
          <div>
            <a href="/">
              <div className="flex gap-3 text-lg font-semibold items-center hover:bg-zinc-500 hover:rounded-lg py-3">
                <i class="fa-solid fa-puzzle-piece"></i>
                <span>Giải trí</span>
              </div>
            </a>
          </div>
          <div className="p-2 rounded-md bg-zinc-700 mt-4">
            <div className="">
              <a
                href="/"
                className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
              >
                <div className="flex flex-col gap-2 ">
                  <span>Voice Room</span>
                </div>
              </a>
              <a
                href="/"
                className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
              >
                <div className="flex flex-col gap-2 ">
                  <span>PBAShow</span>
                </div>
              </a>
            </div>
            <div className="">
              <a href="/">
                <button className="flex py-2 gap-2 w-full justify-center hover:bg-zinc-900 hover:rounded-lg">
                  Thêm <i className="fa-solid fa-chevron-right mt-1"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarCategories
