import React from 'react'
import ItemStream from '../handleItem/itemStream'

const FeedStream = ({ stream, titleStream }) => {
  return (
    <>
      <div className="bg-black text-white px-6">
        <div className="max-w-max">
          <a href="/">
            <div className="flex gap-2 py-4 ">
              <span className="text-3xl font-bold  hover:text-gray-500">
                {titleStream}
              </span>
              <div className="flex gap-1 text-gray-400 text-base">
                <span>Thêm</span>
                <i className="fa-solid fa-chevron-right mt-1"></i>
              </div>
            </div>
          </a>
        </div>
        <div className=" gap-4 grid flex-wrap grid-cols-5">
          {stream?.map((item) =>
            item.status ? (
              <ItemStream
                key={item.userId}
                description={item.description}
                title={item.title}
                thumbnailsUrl={item.thumbnail?.url}
                roomid={item.room_id}
              />
            ) : (
              <div className="hidden"></div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default FeedStream
