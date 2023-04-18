import React, { useEffect } from 'react'
import NavbarInforUser from '../Commom/navbarInforUser'
import { NavLink } from 'react-router-dom'
import FeedItemPost from '../CategoryItem/components/handleFeed/feedItemPost'
import { useSelector } from 'react-redux'
import { loadPostUser } from '../../store/actions/postActions'
import Loading from '../Loading'
import { useDispatch } from 'react-redux'
import ButtonSubmit from '../Commom/ButtonSubmit'

const PostMe = () => {
  const { postUser, loading } = useSelector((state) => state.loadPostUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPostUser())
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex min-h-[80vh] w-full">
          <NavbarInforUser />
          <div className="w-10/12 bg-black flex flex-col pl-10 pt-10 ">
            <div>
              <div className="text-white text-3xl font-extrabold mb-4">
                {' '}
                <span>Post Me</span>
              </div>

              <div className="text-white">
                {postUser && <FeedItemPost post={postUser} />}
                {postUser?.length === 0 && (
                  <div className="  flex flex-col justify-center items-center">
                    <span className="text-3xl font-bold text-green-600">
                      Bạn chưa có bài viết nào !
                    </span>
                    <img
                      src="https://www.nimo.tv/nms/images/no-info2-dark.1852ffa5dc09a3e98af0edc2a3231bd1.png"
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="max-w-max mx-auto">
                <NavLink to="/createPost">
                  <ButtonSubmit
                    titleButton={'Create Post'}
                    cssButton={'button-create'}
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PostMe
