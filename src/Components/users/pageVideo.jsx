import React from 'react'
import NavbarInforUser from '../Commom/navbarInforUser'

const PageVideo = () => {
  return (
    <>
      <div className="flex min-h-[80vh] w-full">
        <NavbarInforUser />
        <div className="w-10/12 bg-black flex flex-col pl-10 pt-10 ">
          <span>aaa</span>
          {/* {user && <FeedItemFollowStreamer listFollow={user} />}
          {user?.listFollowStreamer?.length === 0 && (
            <div className="  flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-green-600">
                Bạn chưa theo dõi Streamer nào !
              </span>
              <img
                src="https://www.nimo.tv/nms/images/no-info2-dark.1852ffa5dc09a3e98af0edc2a3231bd1.png"
                alt=""
              />
            </div>
          )} */}
        </div>
      </div>
    </>
  )
}

export default PageVideo
