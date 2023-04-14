import React from 'react'
import {
  useHMSActions,
  useHMSStore,
  selectCameraStreamByPeerID
} from '@100mslive/react-sdk'

const VideoCamera = ({ peer, isLocal }) => {
  const hmsActions = useHMSActions()
  const videoRef = React.useRef(null)
  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id))
  console.log(videoTrack)
  console.log(videoRef.current)
  
  React.useEffect(() => {
    ;(async () => {
      console.log(videoRef.current)
      
      if (videoRef.current && videoTrack) {
        if (videoTrack.enabled) {
          await hmsActions.attachVideo(videoTrack.id, videoRef.current)
        } else {
          await hmsActions.detachVideo(videoTrack.id, videoRef.current)
        }
      }
    })()
  }, [videoTrack, hmsActions])

  return (
    <div className="flex m-1">
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted={true}
          controls
          className={`object-cover rounded-lg shadow-lg w-52 h-52 ${
            isLocal ? 'mirror' : ''
          }`}
        ></video>

      </div>
    </div>
  )
}

export default VideoCamera
