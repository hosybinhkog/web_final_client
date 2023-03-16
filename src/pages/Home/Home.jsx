import React from 'react'
import FeedProduct from '../../Components/Product/feedProduct'
import Rank from '../../Components/Commom/Rank'

const Home = () => {
  return (
    <>
      <div className="min-h-[80vh] bg-black">
        {/* sliders */}
        <div className="bg-[url('/public/banner.jpg')] bg-no-repeat bg-cover h-[750px]">
          <div className="flex gap-4 justify-center items-center ">
            <div className="">
              <img
                className="h-[750px] py-6 "
                src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                alt=""
              />
            </div>
            <div className="">
              <div className="py-3 cursor-pointer">
                <img
                  className="h-[120px] object-cover rounded-md"
                  src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                  alt=""
                />
              </div>
              <div className="py-3">
                <img
                  className="h-[120px] object-cover rounded-md"
                  src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                  alt=""
                />
              </div>
              <div className="py-3">
                <img
                  className="h-[120px] object-cover rounded-md"
                  src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                  alt=""
                />
              </div>
              <div className="py-3">
                <img
                  className="h-[120px] object-cover rounded-md"
                  src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                  alt=""
                />
              </div>
              <div className="py-3">
                <img
                  className="h-[120px] object-cover rounded-md"
                  src="https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Hot */}
        <div className="py-5">
          <FeedProduct />
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
          <FeedProduct />
        </div>
        {/* PUBG */}
        <div>
          <FeedProduct />
        </div>
      </div>
    </>
  )
}

export default Home
