import React from 'react'
import { useSelector } from 'react-redux'
import thumbnail from '../../../../assets/images/defaultThumbnailBlog.jpg'
import avatar from '../../../../assets/images/defaultAvatarStreamer.png'
import avatarDefault from '../../../../assets/images/defaultAvatarStreamer.png'
import Comment from '../../../../pages/Blog/comment'
import ButtonSubmit from '../../../Commom/ButtonSubmit'
import { NavLink } from 'react-router-dom'

const ItemPostDetail = ({
  avatarUserUrl,
  username,
  descriptionShort,
  createTimePost,
  thumbnailPostUrl,
  titlePost,
  bodyPost,
  id,
}) => {
  return (
    <>
      <div className="flex flex-col max-w-[1280px] mb-3">
        <div className=" ">
          <img
            className="object-cover min-w-[1280px] w-full max-h-[600px] h-full"
            src={thumbnailPostUrl}
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div>
              <img
                className="border-[1px] border-[solid] border-[gray] rounded-[50%] object-cover w-[200px] h-[200px] mt-[-36px] ml-7"
                src={avatarUserUrl ? avatarUserUrl : avatarDefault}
                alt=""
              />
            </div>
            <div className="flex items-center justify-centerm">
              <span className="text-3xl font-bold ">{username}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-bold ">
              Ngày đăng:
              {new Date(createTimePost).toLocaleDateString('en-GB')}
            </p>
            <NavLink to={`/blog/${id}/reportBlog/${id}`}>
              {' '}
              <ButtonSubmit
                titleButton={'Report Post'}
                cssButton={'button-report'}
              />
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col px-6 w-full mt-10">
          <span className="text-3xl font-bold">{titlePost}</span>
          <span className="text-red-500 font-semibold">{descriptionShort}</span>
          <div
            className="text-lg mt-8 "
            dangerouslySetInnerHTML={{ __html: bodyPost }}
          />
        </div>
        <Comment />
      </div>
    </>
  )
}

export default ItemPostDetail
