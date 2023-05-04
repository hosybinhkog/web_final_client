import React from 'react'
import { useEffect, useState } from 'react'
import Stream from '../../Components/100ms/stream.jsx'
import JoinForm from '../../Components/100ms/JoinForm'
import Conference from '../../Components/100ms/Conference'
import TitleStream from '../../Components/100ms/TitleStream'
import { useDispatch, useSelector } from 'react-redux'
import { loadStreamer } from '../../store/actions/userActions'
import Loading from '../../Components/Loading/index.jsx'
import Error404 from '../Error404/Error404.jsx'
import axiosClient from '../../apis/index.jsx'

import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'

const StreambyStreeamer = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  const hmsActions = useHMSActions()
  const [stream, setStream] = useState('')

  const streamer = useSelector((state) => state.loadStreamer.streamer)

  const urlParams = new URLSearchParams(window.location.search)
  const streamId = urlParams.get('streamid')

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave()
      }
    }
  }, [isConnected, hmsActions])

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = axiosClient.get(`stream/streamstatus/${streamer?._id}/STREAMING`)
  //       setStream(response)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // console.log(stream?.data)

  // const { streamer: streamerSelect, loading } = useSelector(
  //   (state) => state.loadStreamer
  // )

  // const [errorMessage, setErrorMessage] = useState('')

  // const [streamer, setStreamer] = useState({
  //   displayName: streamerSelect?.displayName,
  //   discription: streamerSelect?.discription,
  // })

  // useEffect(() => {
  //   if (streamerSelect?.displayName) {
  //     setStreamer({
  //       displayName: streamerSelect.displayName,
  //       discription: streamerSelect.discription,
  //     })
  //   }
  // }, [ streamerSelect ])

  return (
    // <>
    // {Loading ? (
    //   <Loading />
    // ) : (

    // <>
    //   {streamer?.isStreaming === true ? (
    <>
      {streamId === streamer?.room_id ? (
        <div className="min-h-100 w-full bg-black">
          {isConnected ? (
            <div className="flex flex-col gap-4  ">
              {/* <TitleStream /> */}
              <Conference />
            </div>
          ) : (
            <>
              <Stream />
            </>
          )}
        </div>
      ) : (
        <Error404 />
      )}
    </>
    //   ) : (
    //     <Error404 />
    //   )}
    // </>

    // )}
    // </>
  )
}

export default StreambyStreeamer
