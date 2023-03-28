import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonSubmit from '../Commom/ButtonSubmit'
import { Link } from 'react-router-dom'
import { logout } from '../../store/actions/userActions'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/images/defauktAvatar.gif'

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmitLogout = (e) => {
    e.preventDefault()

    if (isAuthenticated) {
      toast.success('Logout success!')
      dispatch(logout())
      navigate('/')
    }
  }

  console.log(img)

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
              {user && user.username ? (
                <div className="flex items-center gap-4 my-3 text-white">
                  <div className=" relative group ">
                    <div className="flex items-center h-full">
                      <Link to="/UsersPage">
                        <div className="flex gap-2 mb-2">
                          {!user?.avatar || !user?.avatar?.url ? (
                            <img
                              className="rounded-full object-cover w-full h-full max-w-[2rem] max-h-[2rem]"
                              src={img}
                              alt=""
                            />
                          ) : (
                            <img
                              className="rounded-full object-cover max-w-[2rem] max-h-[2rem]"
                              src={
                                user?.avatar
                                  ? user?.avatar?.url
                                  : user?.avatar?.url
                                  ? user?.avatar?.url
                                  : null
                              }
                              alt=""
                            />
                          )}
                          {/* <img
                            className="border rounded-full object-cover max-w-[2rem] max-h-[2rem]"                   
                            src={
                              user?.avatar
                                ? user?.avatar?.url
                                : user?.avatar?.url
                                ? user?.avatar?.url
                                : null
                            }
                            alt=""
                          /> */}
                          <span className="text-white text-xl ">
                            {user.username}
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className=" invisible opacity-0 absolute right-0 bg-[rgb(35,35,35)]  bg-black rounded-lg w-96 mt-8 flex flex-col gap-2 p-3 group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 mb-2 items-center  ">
                          {!user?.avatar ? (
                            <img
                              className="border rounded-full object-cover max-w-[2rem] max-h-[2rem]"
                              src={img}
                              alt=""
                            />
                          ) : (
                            <img
                              className="border rounded-full object-cover max-w-[2rem] max-h-[2rem]"
                              src={
                                user?.avatar
                                  ? user?.avatar?.url
                                  : user?.avatar?.url
                                  ? user?.avatar?.url
                                  : null
                              }
                              alt=""
                            />
                          )}
                          <span className="text-white text-xl flex items-center">
                            {user.username}
                          </span>
                        </div>
                        <div className="mt-1 " onClick={handleSubmitLogout}>
                          <ButtonSubmit titleButton={'Logout'} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <Link to="/UsersPage">
                          <div>
                            <a
                              href="/"
                              className="flex gap-2 items-center menu-item"
                            >
                              <i class="fa-solid fa-user"></i>
                              <span>Thông tin cá nhân</span>
                            </a>
                          </div>
                        </Link>
                        <div>
                          <a
                            href="/"
                            className="flex gap-2 items-center menu-item"
                          >
                            <i class="fa-solid fa-tablet"></i>
                            <span className="">Thống kê stream</span>
                          </a>
                        </div>
                      </div>
                    </div>
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
