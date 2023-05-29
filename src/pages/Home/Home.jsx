import React from 'react'
import Rank from '../../Components/Commom/Rank'
import { useSelector } from 'react-redux'
import Loading from '../../Components/Loading'
import FeedCategories from '../../Components/CategoryItem'
import FeedTitle from '../../Components/CategoryItem/components/handleFeed/feedTitle'
import FeedSliderChilren from '../../Components/CategoryItem/components/handleFeed/feedSliderChilren'
import FeedSlider from '../../Components/CategoryItem/components/handleFeed/feedSlider'
import PlayButton from '../../Components/Commom/playButton'
import FeedStream from '../../Components/CategoryItem/components/handleFeed/feedStream'

const Home = () => {
  const { loading, data } = useSelector((state) => state.loadDataIndex)
  const { stream } = useSelector((state) => state.loadDataStream)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="min-h-[80vh] bg-black">
            {/* sliders */}
            <div className="bg-[url('/public/banner.jpg')] bg-no-repeat bg-cover h-[750px] overflow-hidden">
              <div className="flex gap-4 justify-center items-center ">
                <div className="relative ">
                  {data?.streammers && (
                    <FeedSlider streammers={data?.streammers} />
                  )}
                  <PlayButton />
                </div>

                <div className="">
                  {data?.streammers && (
                    <FeedSliderChilren streammers={data?.streammers} />
                  )}
                </div>
              </div>
            </div>
            {/* Đề xuất */}
            <div className="">
              {stream?.data && <Rank streamRecommend={stream.data} />}
            </div>
            {/* categoriesStream */}
            <div>
              {data?.categoriesStream && (
                <FeedCategories
                  categoriesStream={data.categoriesStream}
                  titleCategory={'Categories stream'}
                />
              )}
            </div>
            {/* Stream */}
            <div>
              {stream?.data && (
                <FeedStream stream={stream.data} titleStream={'Stream'} />
              )}
            </div>
            <div className="pb-4">
              {data?.categoriesStream && (
                <FeedTitle
                  streammers={data.streammers}
                  categoriesStream={data.categoriesStream}
                />
              )}
            </div>
            {/* All url stream */}
          </div>
        </>
      )}
    </>
  )
}

export default Home
