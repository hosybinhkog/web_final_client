import React from 'react'

import ItemProduct from '../handleItem/itemProduct'

const FeedStreamer = ({ streammers, titleCategory }) => {
  return (
    <>
      <div className="bg-black text-white px-6">
        <div className="max-w-max">
          <a href="/">
            <div className="flex gap-2 py-4 ">
              <span className="text-3xl font-bold  hover:text-gray-500">
                {titleCategory}
              </span>
              <div className="flex gap-1 text-gray-400 text-base">
                <span>Thêm</span>
                <i className="fa-solid fa-chevron-right mt-1"></i>
              </div>
            </div>
          </a>
        </div>
        <div className=" gap-4 grid flex-wrap grid-cols-5">
          {streammers?.map((item) => (
            <ItemProduct
              key={item._id}
              title={item.title}
              discription={item.discription}
              displayName={item.displayName}
              imgsUrl={item.imgs.url}
              thumbnailsUrl={item.thumbnails[0].url}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FeedStreamer
