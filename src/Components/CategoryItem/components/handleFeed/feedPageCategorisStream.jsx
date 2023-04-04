import React from 'react'
import ItemPageCategories from '../handleItem/itemPageCategories'

const FeedPageCategorisStream = ({ categoriesStream }) => {
  return (
    <>
      <div className="bg-black text-white px-6">
        <div className=" gap-2 grid flex-wrap grid-cols-7">
          {categoriesStream?.slice(0, 1000).map((item) => (
            <ItemPageCategories
              key={item._id}
              title={item.title}
              thumbnailsUrl={item.thumbnail.url}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FeedPageCategorisStream
