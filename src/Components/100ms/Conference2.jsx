import { selectPeers, useHMSStore } from '@100mslive/react-sdk'
import React from 'react'
import VideoCamera from './VideoStream/VideoCamera'
import VideoScreen from './VideoStream/VideoScreen'
import { useAVToggle } from '@100mslive/react-sdk'
import ChatContainer from './Chat/ChatContainer'

function Conference() {
  const peers = useHMSStore(selectPeers)

  return (
    <div className="conference-section">
      <div className="peers-container flex">
        {peers.map((peer) => (
          <>
            {peer.roleName === 'viewer' ? (
              <></>
            ) : (
              <div className="flex flex-col justify-center items-center max-w-screen-lg">
                {/* <div className="p-4">
                  <VideoScreen key={peer.id} peer={peer} />
                </div> */}
                <div className="p-4 flex justify-center items-center">
                  <VideoCamera key={peer.id} peer={peer} />
                </div>
              </div>
            )}
          </>
        ))}

        <ChatContainer />
      </div>
    </div>
  )
}

export default Conference
