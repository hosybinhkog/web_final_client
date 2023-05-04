import React from 'react'

const ItemSearch = ({ urlAvatar, title, description }) => {
  return (
    <>
      <div className="mb-4 border border-black hover:border-[#7859FF] cursor-pointer rounded-lg">
        <div className="flex flex-col gap-1 items-center p-2">
          <div className="w-48 h-48 ">
            <img className="object-cover rounded-full" src={urlAvatar} alt="" />
          </div>
          <span className="font-bold text-xl line-clamp-1">{title}</span>
          <span className="line-clamp-1 text-sm">{description}</span>
        </div>
      </div>
    </>
  )
}

export default ItemSearch
