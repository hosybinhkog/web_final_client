import {
  useHMSStore,
  useHMSActions,
  selectPermissions,
} from '@100mslive/react-sdk'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../apis'
import { useDispatch } from 'react-redux'
import { loadStreamer } from '../../store/actions/userActions'
import { useEffect, useState } from 'react'

export default function EndRoomButton() {
  const permissions = useHMSStore(selectPermissions)
  const hmsActions = useHMSActions()
  const streamer = useSelector((state) => state.loadStreamer.streamer)
  const navigate = useNavigate()
  console.log(streamer)
  const dispatch = useDispatch()
  const [stream, setStream] = useState('')

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = axiosClient.get(
  //         `stream/streamstatus/${streamer?._id}/STREAMING`
  //       )
  //       setStream(response)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  console.log('first')
  // console.log(stream)

  const setStatusStreamer = async () => {
    const url = `http://localhost:4444/api/v1/streammer/${streamer?._id}/toggleStreaming`

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'UPLOADING' }),
    })

    if (!response.ok) {
      throw new Error('Failed to toggle streaming status.')
    }

    // Return the response body if needed
    // return response.json()
  }

  const setStatusStream = async () => {
    const response = await axiosClient.put(
      `/stream/streamstatus/${streamer?._id}/STREAMING/UPLOADING`,
    )

    if (!response.ok) {
      throw new Error('Failed to toggle streaming status.')
    }

    // Return the response body if needed
    // return response.json()
  }

  const endRoom = async () => {
    try {
      const lock = false // set to true to disallow rejoins
      const reason = 'party is over'
      await hmsActions.endRoom(lock, reason)
      await setStatusStreamer()
      dispatch(loadStreamer())
      await setStatusStream()
      navigate(`/uploadvideo?streamerid=${streamer?._id}`)
    } catch (error) {
      // Permission denied or not connected to room
      console.error(error)
    }
  }

  return permissions.endRoom ? (
    <button
      className="rounded-md bg-red-500 px-4 py-2 text-white"
      onClick={endRoom}
    >
      End
    </button>
  ) : null
}
