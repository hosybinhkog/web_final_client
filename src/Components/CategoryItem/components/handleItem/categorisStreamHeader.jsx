import React from 'react'
import ItemCategorisStreamHeader from '.././handleItem/itemCategorisStreamHeader'

const CategorisStreamHeader = ({ categoriesStream }) => {
  return (
    <>
      <div className="bg-black text-white px-6">
        <div className=" gap-4 grid flex-wrap grid-cols-3">
          {categoriesStream?.slice(0, 6).map((item) => (
            <ItemCategorisStreamHeader
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

export default CategorisStreamHeader
