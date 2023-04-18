import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import img from '../../assets/images/defauktAvatar.gif'
import NavbarInforUser from '../Commom/navbarInforUser'

const UsersPage = () => {
  const { user } = useSelector((state) => state.users)

  return (
    <>
      <div className="flex min-h-[80vh] w-full">
        <NavbarInforUser />

        <div className="w-10/12 bg-black flex flex-col pl-10 pt-10 ">
          <div className="pb-10 max-w-max">
            {!user?.avatar || !user?.avatar?.url ? (
              <img
                className="border rounded-[50%] object-cover w-40"
                src={img}
                alt=""
              />
            ) : (
              <img
                className="border-[1px] border-[solid] border-[green] rounded-[50%] object-cover w-[200px] h-[200px]"
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
          </div>
          <div className="text-white flex flex-col gap-5">
            {user?.isStreammer ? (
              <Link to="/IntroduceStreamer">
                <span className="flex gap-1 items-center hover:text-sky-500 cursor-pointer max-w-max text-yellow-400">
                  Bạn đã trở thành Streamer được công nhận
                  <i className="fa-solid fa-chevron-right mt-1"></i>
                </span>
              </Link>
            ) : (
              <Link to="/RegisStream">
                {' '}
                <span className="hover:text-sky-500 cursor-pointer max-w-max text-yellow-400">
                  Trở thành Streamer ngay bây giờ{' '}
                  <i className="fa-solid fa-chevron-right mt-1"></i>
                </span>
              </Link>
            )}

            <span className="flex gap-3 max-w-max">
              Username: <p>{user?.username}</p>
            </span>

            {user?.email && user?.show_email ? (
              <span className="flex gap-3 max-w-max">
                Email: <p>{user?.email}</p>
              </span>
            ) : (
              <span className="hidden"></span>
            )}

            {user?.gender && user?.show_gender ? (
              <span className="flex gap-3 max-w-max">
                Gender: {user?.gender ? <p>Nam</p> : <p>Nữ</p>}{' '}
              </span>
            ) : (
              <span className="hidden"></span>
            )}

            {user?.phone && user?.show_phone ? (
              <span className="flex gap-3 max-w-max">
                Phone: <p>{user?.phone}</p>
              </span>
            ) : (
              <span className="hidden"></span>
            )}

            {user?.address && user?.show_address ? (
              <span className="flex gap-3 max-w-max">
                Address: <p>{user?.address}</p>
              </span>
            ) : (
              <span className="hidden"></span>
            )}

            {user?.birthday && user?.show_birthday ? (
              <span className="flex gap-3 max-w-max">
                Birthday:{' '}
                <p>{new Date(user?.birthday).toLocaleDateString('en-GB')}</p>
              </span>
            ) : (
              <span className="hidden"></span>
            )}

            {user?.profileDescription && user?.show_profile_index ? (
              <span className="flex gap-3 max-w-max">
                Profile Description: <p>{user?.profileDescription}</p>
              </span>
            ) : (
              <span className="hidden"></span>
            )}

            <span className="flex gap-3 ">
              About me:
              <Link to="/AboutUser">
                <span className="flex gap-1 items-center cursor-pointer hover:text-sky-500 max-w-max">
                  Nhấn vào để đến trang giới thiệu bản thân
                  <i className="fa-solid fa-chevron-right mt-1"></i>
                </span>
              </Link>
            </span>

            <span className="flex gap-3">
              <div className="bg-[url('/public/diamond.png')] w-6 h-6 bg-no-repeat"></div>
              {user?.cost}
            </span>
            <Link to="/updateUser">
              <button className="flex justify-center w-44 mt-6 p-2 bg-sky-500 rounded-md hover:bg-sky-300 cursor-pointer max-w-max">
                Cập nhật tài khoản
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersPage
