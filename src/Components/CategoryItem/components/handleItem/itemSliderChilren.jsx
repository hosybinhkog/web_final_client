import React from 'react'

const ItemSliderChilren = ({ thumbnailsUrlChilren }) => {
  return (
    <>
      <div className="max-w-max py-2">
        <a className="" href="/">
          <img
            className="bg-[#1A1A1A]  rounded-xl mb-2 object-cover  w-[196px] h-[120px] "
            src={thumbnailsUrlChilren}
            alt=""
          />
        </a>
      </div>
    </>
    //     <>
    //       <div className="py-3 flex gap-4 max-h-[195px] max-w-[346px] object-cover rounded-md  w-full h-full overflow-hidden">
    //         <img className="" src={thumbnailsUrlChilren} alt="" />
    //       </div>
    //     </>
    //   )
  )
}

export default ItemSliderChilren
