import React from 'react'

const ItemSlider = ({ thumbnailsUrlSlider }) => {
  return (
    <>
      <div className="max-w-max">
        <a className="" href="/">
          <img
            className="bg-[#1A1A1A]  rounded-xl  object-cover  h-[710px] w-[1190px]"
            src={thumbnailsUrlSlider}
            alt=""
          />
        </a>
      </div>
    </>
  )
}

export default ItemSlider
