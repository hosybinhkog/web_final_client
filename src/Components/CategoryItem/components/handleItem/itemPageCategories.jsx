import React from 'react'

const ItemPageCategories = ({ thumbnailsUrl, title }) => {
  return (
    <>
      <div className="min-h-[80vh]">
        <div className="hover:bg-[#7859FF] cursor-pointer rounded-lg">
          <div className="p-1">
            <a href="/" className=" ">
              <img
                className="h-[350px] w-[300px] object-cover rounded-md "
                src={thumbnailsUrl}
                alt=""
              />
            </a>
            <span className=" font-bold text-white  flex items-center justify-center">
              {title}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemPageCategories
