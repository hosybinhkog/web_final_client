import React, { useEffect } from 'react'
import avatarDefault from '../../../../assets/images/defaultAvatarStreamer.png'
import { Link } from 'react-router-dom'

const ItemCategoriesPost = ({
  avatarUserUrl,
  username,
  descriptionShort,
  createTimePost,
  titlePost,
  thumbnailPostUrl,
  id,
}) => {
  return (
    <div className="flex flex-col gap-2 p-2 hover:border-[1px] hover:border-[solid] hover:border-[#3B9AE8] hover:rounded-md">
      <div className="">
        <Link to={`/blog/${id}`}>
          <img
            className="object-cover rounded-md h-[250px] w-full"
            src={thumbnailPostUrl}
            alt=""
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="font-bold text-xl max-w-max hover:text-blue-500"
          to={`/blog/${id}`}
        >
          {' '}
          {titlePost}
        </Link>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              className=" border-[1px] border-[solid] border-[green] rounded-[50%] object-cover w-[48px] h-[48px]"
              src={avatarUserUrl ? avatarUserUrl : avatarDefault}
              alt=""
            />
            <span>{username}</span>
          </div>
          <div>
            <span> {new Date(createTimePost).toLocaleDateString('en-GB')}</span>
          </div>
        </div>
        <span className="text-base">{descriptionShort}</span>
      </div>
    </div>
  )
}

export default ItemCategoriesPost
