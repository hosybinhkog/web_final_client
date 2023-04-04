import React from 'react'
import Loading from '../Loading'
import FeedPageCategorisStream from '../CategoryItem/components/handleFeed/feedPageCategorisStream'
import { useSelector } from 'react-redux'

import NavBarCategories from '../Commom/navBarCategories'

const PageCategorisStream = () => {
  const { data, loading } = useSelector((state) => state.loadDataIndex)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex min-h-[80vh] w-full">
            <NavBarCategories />
            <div className="w-10/12 bg-black pl-5 pt-10 ">
              <div className="mb-5">
                <span className="text-white font-bold text-2xl">
                  Tất cả trò chơi
                </span>
              </div>
              <div className="flex gap-4">
                <button className="border-[1px] bg-black text-white  w-full mb-5  rounded-md h-8 hover:bg-sky-300 max-w-max py-2 px-4 flex items-center justify-center">
                  PC Game
                </button>
                <button className="border-[1px] bg-black text-white w-full mb-5  rounded-md h-8 hover:bg-sky-300 max-w-max py-2  px-4 flex items-center justify-center">
                  Giải trí
                </button>
              </div>
              <div>
                {data?.streammers && (
                  <FeedPageCategorisStream
                    categoriesStream={data?.categoriesStream}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default PageCategorisStream
