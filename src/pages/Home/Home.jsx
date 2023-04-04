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
            <div className="grid grid-cols-2 pb-5">
              <div className="mt-[13px]">
                <div className="bg-black text-white px-6">
                  <div>
                    <a href="/">
                      <div className="pb-5">
                        <span className="text-3xl font-bold  hover:text-gray-500">
                          Được đề xuất
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <a href="/">
                        <img
                          className="rounded-xl h-[350px]"
                          src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="flex-col gap-5">
                      <div className="pb-5">
                        <a href="/">
                          <img
                            className="rounded-xl h-[165px] object-cover"
                            src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div>
                        <a href="/">
                          <img
                            className="h-[165px] rounded-xl object-cover"
                            src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bảng xếp hạng */}
              <div className="">
                <Rank />
              </div>
            </div>
            {/* LMHT */}
            <div>
              {data?.categoriesStream && (
                <FeedCategories
                  categoriesStream={data.categoriesStream}
                  titleCategory={'Categories stream'}
                />
              )}
            </div>

            {/* PUBG */}
            <div>
              {stream?.data && (
                <FeedStream stream={stream.data} titleStream={'Stream'} />
              )}
            </div>
            <div>
              {data?.categoriesStream && (
                <FeedTitle
                  streammers={data.streammers}
                  categoriesStream={data.categoriesStream}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
