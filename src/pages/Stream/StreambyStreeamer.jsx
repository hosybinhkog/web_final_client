import React from 'react'
import { useEffect } from 'react'
import Stream from '../../Components/100ms/stream.jsx'
import JoinForm from '../../Components/100ms/JoinForm'
import Conference from '../../Components/100ms/Conference'
import TitleStream from '../../Components/100ms/TitleStream'

import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'

const StreambyStreeamer = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  const hmsActions = useHMSActions()

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave()
      }
    }
  }, [isConnected, hmsActions])

  return (
    <div className="min-h-100 min-w-100 bg-black">
      {isConnected ? (
        <div className="flex flex-col gap-4  ">
          <TitleStream/>
          <Conference />
        </div>
      ) : (
        <>
          <Stream />
        </>
      )}
    </div>
  )
}

export default StreambyStreeamer