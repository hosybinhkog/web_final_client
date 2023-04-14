import React from 'react'
import { useEffect } from 'react'
import JoinFormID from '../../Components/100ms/JoinRoomID'
import JoinForm from '../../Components/100ms/JoinForm'
import Conference2 from '../../Components/100ms/Conference2'
import TitleStream from '../../Components/100ms/TitleStream'
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'

const JoinRoom = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  const hmsActions = useHMSActions()

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave()
      }
    }
  }, [hmsActions])

  return (
    <div>
      {isConnected ? (
        <>
          <div className="flex flex-col gap-4  bg-black">
            <TitleStream />
            <Conference2 />
          </div>
        </>
      ) : (
        <>
          <JoinFormID />
        </>
      )}
    </div>
  )
}

export default JoinRoom
