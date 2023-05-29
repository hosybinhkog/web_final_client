import React from 'react'
import NavbarInforUser from '../Commom/navbarInforUser'
import { useSelector } from 'react-redux'
import FeedStream from '../CategoryItem/components/handleFeed/feedStream'
import { useDispatch } from 'react-redux'
import { loadDataAllUrlStreamer } from '../../store/actions/streamActions'
import { useEffect } from 'react'
import Loading from '../Loading'
import { toast } from 'react-hot-toast'

const PageVideo = () => {
  const { streams, loading, success, error } = useSelector(
    (state) => state.loadDataAllUrlStreamer
  )
  console.log(streams, error)
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    dispatch(loadDataAllUrlStreamer())
  }, [])

  return (
    <>
      <div className="flex min-h-[80vh] w-full">
        <NavbarInforUser />
        {loading ? (
          <Loading />
        ) : (
          <div className="w-10/12 bg-black flex flex-col pl-10 pt-10 ">
            {streams ? (
              <FeedStream stream={streams} titleStream={'Restream'} />
            ) : (
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
        )}
      </div>
    </>
  )
}

export default PageVideo
