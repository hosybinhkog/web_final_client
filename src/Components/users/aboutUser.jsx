import React from 'react'
import { useSelector } from 'react-redux'
import img from '../../assets/images/defauktAvatar.gif'

const AboutUser = () => {
  const { user } = useSelector((state) => state.users)
  return (
    <>
      {user && user.about ? (
        <div className="mt-4 mb-4 max-w-[1280px] w-full ">
          <div className="text-3xl font-bold flex flex-col justify-center items-start">
            Chào mừng bạn đến với trang giới thiệu của {user?.username}
          </div>
          <div className="pb-10 max-w-max">
            <div className="flex gap-4">
              <div>
                {' '}
                {!user?.avatar || !user?.avatar?.url ? (
                  <img
                    className="border rounded-[50%] object-cover w-40"
                    src={img}
                    alt=""
                  />
                ) : (
                  <img
                    className="border rounded-[50%] object-cover w-[64px] h-[64px] mt-4"
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
              <div className="flex items-center justify-center">
                <span className="text-3xl">{user?.username}</span>
              </div>
            </div>
          </div>
          <div className="" dangerouslySetInnerHTML={{ __html: user?.about }} />
        </div>
      ) : (
        <div className="max-w-[1280px]  flex flex-col justify-center items-center">
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
