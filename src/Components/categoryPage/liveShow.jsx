import React from 'react'
import ItemCategoryPage from '../Commom/itemCategoryPage'
import NavbarInforUser from '../../Components/Commom/navbarInforUser'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loadDataAllUrlStreamer } from '../../store/actions/streamActions'
import { useEffect } from 'react'
import Loading from '../../Components/Loading'
import FeedStream from '../CategoryItem/components/handleFeed/feedStream'

const LiveShowPage = () => {
  const { streams, loading, error } = useSelector(
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
        {/* navbar category */}
        <div className="w-2/12 bg-[#1A1A1A] text-gray-200">
          <div className="px-1">
            <div className="mb-5 ">
              <div className="text-lg font-semibold">
                <a
                  href="/"
                  className="flex gap-2 pb-3 hover:bg-zinc-500 hover:rounded-lg"
                >
                  <i className="fa-regular fa-heart mt-1"></i>
                  <p>Theo dõi của tôi</p>
                </a>
              </div>
              <div className="p-2 rounded-md bg-zinc-700">
                <div className="">
                  <a
                    href="/"
                    className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
                  >
                    <div className="">
                      <img
                        className="border rounded-full object-cover w-16"
                        src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span>GD Anh</span>
                      <div className="flex gap-28">
                        <span>LMHT</span>
                        <div className=" flex gap-1 items-center">
                          <i class="fa-solid fa-users"></i>
                          <span>25k</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="">
                  <a
                    href="/"
                    className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
                  >
                    <div className="">
                      <img
                        className="border rounded-full object-cover w-16"
                        src="https://th.bing.com/th/id/R.20089d63e4b4b604b6470a5c14a5ca3c?rik=PLGgNhL5N3Merw&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f03%2fcute-Cute-Wallpapers.jpg&ehk=t10GTQLp3c83AcQJfFc42zDnhMImfaePLUkiFsqYtp0%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span>GD Anh2</span>
                      <div className="flex gap-28">
                        <span>LMHT</span>
                        <div className=" flex gap-1 items-center">
                          <i class="fa-solid fa-users"></i>
                          <span>25k</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="">
                  <a href="/">
                    <button className="flex py-2 gap-2 w-full justify-center hover:bg-zinc-900 hover:rounded-lg">
                      Thêm <i className="fa-solid fa-chevron-right mt-1"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <a href="/">
                <div className="flex gap-3 text-lg font-semibold items-center hover:bg-zinc-500 hover:rounded-lg py-3">
                  <i className="fa-solid fa-ranking-star"></i>
                  <span>Bảng Xếp Hạng</span>
                </div>
              </a>
              <a href="/">
                <div className="flex gap-3 text-lg font-semibold items-center hover:bg-zinc-500 hover:rounded-lg py-3">
                  <i class="fa-solid fa-hands-holding-child"></i>
                  <span>Sảnh Danh Vọng</span>
                </div>
              </a>
              <a href="/">
                <div className="flex gap-3 text-lg font-semibold items-center hover:bg-zinc-500 hover:rounded-lg py-3">
                  <i class="fa-solid fa-gamepad"></i>
                  <span>Game</span>
                </div>
              </a>
            </div>
            <div className="p-2 rounded-md bg-zinc-700 mt-4">
              <div className="">
                <a
                  href="/"
                  className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
                >
                  <div className="flex flex-col gap-2 ">
                    <span>League of Legends</span>
                  </div>
                </a>
                <a
                  href="/"
                  className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
                >
                  <div className="flex flex-col gap-2 ">
                    <span>GTA5</span>
                  </div>
                </a>
                <a
                  href="/"
                  className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
                >
                  <div className="flex flex-col gap-2 ">
                    <span>PUBG Mobile</span>
                  </div>
                </a>
              </div>
              <div className="">
                <a href="/">
                  <button className="flex py-2 gap-2 w-full justify-center hover:bg-zinc-900 hover:rounded-lg">
                    Thêm <i className="fa-solid fa-chevron-right mt-1"></i>
                  </button>
                </a>
              </div>
            </div>
            {/* Giai tri */}
            <div className="mt-4">
              <div>
                <a href="/">
                  <div className="flex gap-3 text-lg font-semibold items-center hover:bg-zinc-500 hover:rounded-lg py-3">
                    <i class="fa-solid fa-puzzle-piece"></i>
                    <span>Giải trí</span>
                  </div>
                </a>
              </div>
              <div className="p-2 rounded-md bg-zinc-700 mt-4">
                <div className="">
                  <a
                    href="/"
                    className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
                  >
                    <div className="flex flex-col gap-2 ">
                      <span>Voice Room</span>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
                  >
                    <div className="flex flex-col gap-2 ">
                      <span>NimoShow</span>
                    </div>
                  </a>
                </div>
                <div className="">
                  <a href="/">
                    <button className="flex py-2 gap-2 w-full justify-center hover:bg-zinc-900 hover:rounded-lg">
                      Thêm <i className="fa-solid fa-chevron-right mt-1"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* phụ đề live */}
        <div className="w-10/12 text-white bg-black">
          <div className="relative pl-5 h-72 font-bold bg-[url('/public/liveshow.png')] bg-no-repeat bg-cover">
            <div className="absolute text-green-600 top-12 left-12 flex-col items-center">
              <span className="text-5xl">Video Record</span>
              <div className="flex gap-2 items-center pt-4">
                <i class="fa-brands fa-youtube"></i>
                <span>2 record</span>
              </div>
            </div>
          </div>
          {/* item live */}
          {loading ? (
            <Loading />
          ) : (
            <div className="w-10/12 bg-black flex flex-col pl-10 pt-10 ">
              {streams ? (
                <FeedStream
                  stream={streams}
                  titleStream={'All Video Record Stream'}
                />
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
      </div>
    </>
  )
}

export default LiveShowPage
