import React from 'react'

const ItemFollowStreamer = ({ avatarUrl, username, description }) => {
  return (
    <>
      <div className="w-[380px] h-[110px] text-white border rounded-md hover:bg-[rgba(130,125,125,0.7)] cursor-pointer mb-4">
        <div className="flex gap-2 p-[10px]">
          <div className=" ">
            <img
              className="rounded-md w-[90px] h-[90px] object-cover "
              src={avatarUrl}
              alt=""
            />
          </div>

          <div>
            <div className="flex flex-col mb-4 font-bold">
              <span className="inline-block">{username}</span>
              <div
                className="line-clamp-1"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemFollowStreamer
