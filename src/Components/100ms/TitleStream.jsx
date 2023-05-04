import React,{useEffect, useState} from 'react'
import axiosClient from '../../apis'
import { useSelector } from 'react-redux'

const TitleStream = () => {
  const streamer = useSelector((state) => state.loadStreamer.streamer)
  const [stream, setStream] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const response = axiosClient.get(
          `stream/streamstatus/${streamer?._id}/STREAMING`
        )
        setStream(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  console.log("stream")
  console.log(stream)
  // console.log(stream?.PromiseResult?.data)

  return (
    <div className="flex flex-row gap-4 bg-gray-800 h-28 p-4 border-4 rounded-lg border-gray-800">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBnCtqSc3WByZtlqHBrjc9MzaYPucxQ_DoMU52E27DojFe53QLX4BYykGaywkA5tqg3U&usqp=CAU"
        alt=""
        class="w-16 h-16 border-2 rounded-md animate-pulse"
      />

      <div className=" flex flex-col gap-2 min-w-50">
        <p className="text-2xl font-bold text-white">title</p>
        <div className="flex flex-row gap-2 text-sm font-medium">
          <p className="text-white">streamername</p>
          <p className="text-gray-500">
            999
            <i className="fas fa-user ml-1"></i>
          </p>
          <p className="text-cyan-500">249,586 followers</p>
        </div>
      </div>

      <div className="">
        <div className="">
          <div className="bg-yellow text-sm flex text-center justify-center pt-2">
            <p className="text-white font-medium">Xếp hạng Streamer: </p>
            <p className="font-bold text-yellow-400 ml-2">#10</p>
          </div>
        </div>
      </div>

      <div className="">
        <button class="rounded-lg px-4 py-2 bg-purple-800 text-purple-100 hover:bg-purple-600 duration-300 font-semibold ml-2">
          Theo dõi
        </button>
        <button class="rounded-lg px-4 py-2 bg-purple-800 text-purple-100 hover:bg-purple-600 duration-300 font-semibold ml-2">
          Đăng ký
        </button>

        <button class="rounded-lg px-4 py-2 border-2 border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-gray-900 duration-300 font-semibold ml-2">
          Chia sẻ
        </button>
      </div>
    </div>
  )
}

export default TitleStream
