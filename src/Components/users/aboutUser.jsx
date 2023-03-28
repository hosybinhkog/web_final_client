import React from 'react'
import { useSelector } from 'react-redux'

const AboutUser = () => {
  const { user } = useSelector((state) => state.users)
  return (
    <>
      {user && user.about ? (
        <div className="mt-4">
          <div className="text-3xl font-bold ">
            Chào mừng bạn đến với trang giới thiệu của {user?.username}
          </div>
          <div
            className="max-w-[1280px]"
            dangerouslySetInnerHTML={{ __html: user?.about }}
          />
        </div>
      ) : (
        <div className="max-w-[1280px] flex flex-col justify-center items-center">
          <span className="text-3xl font-bold text-green-600">
            Bạn chưa có bài viết giới thiệu bản thân
          </span>
          <img
            src="https://www.nimo.tv/nms/images/no-info2-dark.1852ffa5dc09a3e98af0edc2a3231bd1.png"
            alt=""
          />
        </div>
      )}
    </>
  )
}

export default AboutUser
