import React from 'react'

const PlayButton = () => {
  return (
    <button className="absolute top-[50%] left-[50%] bg-gray-400 opacity-80 border text-white rounded-full w-[60px] h-[60px] text-2xl shadow-sm hover:bg-[#3e4247] hover:cursor-pointer">
      <i className="fas fa-play ml-1"></i>
    </button>
  )
}

export default PlayButton
