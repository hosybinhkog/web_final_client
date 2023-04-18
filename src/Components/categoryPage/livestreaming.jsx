import React from 'react'
import NavBarCategories from '../Commom/navBarCategories'
import FeedStream from '../CategoryItem/components/handleFeed/feedStream'
import { useSelector } from 'react-redux'
import Loading from '../Loading'

const LiveStreaming = () => {
  const { stream, loading } = useSelector((state) => state.loadDataStream)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex min-h-[80vh] w-full">
          {/* navbar category */}
          <NavBarCategories />
          {/* phụ đề live */}
          <div className="w-10/12 text-white bg-black">
            <div className="relative pl-5 h-72 font-bold bg-[url('/public/liveshow.png')] bg-no-repeat bg-cover">
              <div className="absolute text-green-600 top-12 left-12 flex-col items-center">
                <span className="text-5xl">LiveStreaming</span>
                <div className="flex gap-2 items-center pt-4">
                  <i class="fa-brands fa-youtube"></i>
                  <span>100 trực tiếp</span>
                </div>
              </div>
            </div>
            {/* item live */}
            <div className="py-5">
              {stream?.data && (
                <FeedStream
                  stream={stream?.data}
                  titleStream={'Đang phát trực tiếp'}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LiveStreaming
