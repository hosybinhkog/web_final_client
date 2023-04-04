import React from 'react'

const ItemCategorisStreamHeader = ({ thumbnailsUrl, title }) => {
  return (
    <>
      <div className="">
        <div className="relative">
          <a href="/" className="pr-2 ">
            <img
              className="h-[100px] w-[250px] object-cover rounded-md relative"
              src={thumbnailsUrl}
              alt=""
            />
          </a>
          <span className="absolute bottom-0 right-0 left-0 mb-6  bg-[#313131] opacity-70 text-white  flex items-center justify-center">
            {title}
          </span>
        </div>
      </div>
    </>
  )
}

export default ItemCategorisStreamHeader
