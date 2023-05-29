import React from 'react'
import avatarDefault from '../../../.././assets/images/defaultAvatarStreamer.png'
import { useSelector } from 'react-redux'
import PlayButton from '../../../Commom/playButton'
import { Link } from 'react-router-dom'

const ItemStream = ({ thumbnailsUrl, description, title, avatarStreamer }) => {
  return (
    <>
      <div className="bg-[#1A1A1A] rounded-xl ">
        <div className="relative group  ">
          <Link to="/videostream">
            {' '}
            <img
              className="object-cover rounded-lg w-[347px] h-[195px] hover:bg-red-700 "
              src={thumbnailsUrl}
            ></img>
          </Link>

          <button
            className={`absolute top-[40%] left-[40%]   text-yellow-500 font-black rounded-full w-[60px] h-[60px] text-5xl shadow-sm  hover:cursor-pointer opacity-0 group-hover:opacity-80 `}
          >
            <i className="fas fa-play ml-1"></i>
          </button>
        </div>

        <div className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1">
          <div className="">
            <img
              className=" border-[1px] border-[solid] border-[green] rounded-[50%] object-cover w-[58px] h-[48px]"
              src={avatarStreamer}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 w-full text-white font-bold">
            <div className="flex justify-between text-gray-500">
              <span className="text-xs">{title}</span>
              {/* <div className=" flex gap-1 items-center">
                      <i class="fa-solid fa-users"></i>
                      <span>{product.viewer}k</span>
                    </div> */}
            </div>
            <Link to="/">
              <span
                className="hover:text-blue-700 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: description }}
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemStream
