import React from 'react'
import { useSelector } from 'react-redux'
import thumbnail from '../../assets/images/defaultThumbnail.jpg'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const IntroduceStreamer = () => {
  const { streamer, loading } = useSelector((state) => state.loadStreamer)
  
  const { user } = useSelector((state) => state.users)
  if (loading) return <Loading />
  return (
    <>
      {user && user.isStreammer ? (
        <div className="flex flex-col max-w-[1280px] ">
          <div className=" ">
            {!streamer?.thumbnails ? (
              <img className=" object-cover w-full" src={thumbnail} alt="" />
            ) : (
              <img
                className="object-cover min-w-[1280px] w-full max-h-[600px] h-full"
                src={
                  streamer?.thumbnails
                    ? streamer?.thumbnails[0]?.url
                    : streamer?.thumbnails[0]?.url
                    ? streamer?.thumbnails[0]?.url
                    : null
                }
                alt=""
              />
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div>
                {' '}
                {!streamer?.imgs || !streamer?.imgs?.url ? (
                  <img
                    className="border rounded-[50%] object-cover w-40"
                    src={thumbnail}
                    alt=""
                  />
                ) : (
                  <img
                    className="border-[1px] border-[solid] border-[gray] rounded-[50%] object-cover w-[200px] h-[200px] mt-[-36px] ml-7"
                    src={
                      streamer?.imgs
                        ? streamer?.imgs?.url
                        : streamer?.imgs?.url
                        ? streamer?.imgs?.url
                        : null
                    }
                    alt=""
                  />
                )}
              </div>
              <div className="flex items-center justify-centerm">
                <span className="text-3xl font-bold ">
                  {streamer?.displayName}
                </span>
              </div>
            </div>
            <div className="flex justify-center  items-center">
              <Link to="/EditStreamer">
                <button className="  flex justify-center  items-center gap-2 bg-[#E4E6EB]  w-full mt-6 px-4 py-2 rounded-md hover:bg-sky-300 cursor-pointer max-w-max">
                  <i class="fa-solid fa-pen"></i>
                  Chỉnh sửa thông tin Streamer
                </button>
              </Link>
            </div>
          </div>

          <div
            className="text-lg mt-10"
            dangerouslySetInnerHTML={{ __html: streamer?.discription }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default IntroduceStreamer
