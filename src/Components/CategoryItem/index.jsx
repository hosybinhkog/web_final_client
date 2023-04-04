import React from 'react'

import CategoriesItem from './components/handleItem/categoriesItem'

const FeedCategories = ({ categoriesStream, titleCategory }) => {
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
          {categoriesStream.map((item) => (
            <CategoriesItem
              key={item._id}
              title={item.title}
              description={item.description}
              thumbnailsUrl={item.thumbnail.url}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FeedCategories
