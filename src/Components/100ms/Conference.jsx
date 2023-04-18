import {
  selectPeers,
  useHMSStore,
  selectRecordingState,
  selectRTMPState,selectRoom
} from '@100mslive/react-sdk'
import { useRecordingStreaming, useHMSActions } from '@100mslive/react-sdk'
import React from 'react'
import VideoCamera from './VideoStream/VideoCamera'
import VideoScreen from './VideoStream/VideoScreen'
import { useScreenShare, useAVToggle } from '@100mslive/react-sdk'
import EndRoomButton from './EndRoomButton'
import ChatContainer from './Chat/ChatContainer'

function Conference() {
  const peers = useHMSStore(selectPeers)
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } =
    useAVToggle()

  const handleError = (error) => {
    console.error(error)
  }

  const {
    amIScreenSharing,
    toggleScreenShare,
    screenSharingPeerName,
  } = useScreenShare(handleError)

  const handleToggle = async () => {
    try {
      await toggleScreenShare()
    } catch (error) {
      console.error(error)
    }
  }

  const hmsActions = useHMSActions()

  const {
    isBrowserRecordingOn,
  } = useRecordingStreaming()

  const recordingState = useHMSStore(selectRecordingState)
  const rtmpState = useHMSStore(selectRTMPState)

  const handleStartRecording = async () => {
    const params = {
      operation: 'start',
      meetingURL:
        'https://monsterofdarkness.app.100ms.live/preview/pjc-cnhi-cvy?skip_preview=true',
      record: true,
    }
    try {
      await hmsActions.startRTMPOrRecording(params)
      console.log('is sfu recording going on - ', recordingState.server.running)
      console.log(recordingState)
      console.log(isBrowserRecordingOn)

      if (recordingState.browser.running) {
        console.log(
          'time when browser recording was started - ',
          recordingState.browser.startedAt
        )
      } else if (recordingState.browser.error) {
        console.error(
          'error in browser recording - ',
          recordingState.browser.error
        )
      }

      if (rtmpState.running) {
        console.log('time when RTMP was started - ', rtmpState.startedAt)
      } else if (rtmpState.error) {
        console.error('error in RTMP streaming - ', rtmpState.error)
      }
    } catch (err) {
      console.error('failed to start RTMP/recording', err)
    }
  }

  const handleStopRecording = async () => {
    try {
      await hmsActions.stopRTMPAndRecording()
    } catch (err) {
      console.error('failed to stop RTMP/recording', err)
    }
  }

  return (
    <div className="conference-section">
      <div className="peers-container flex">
        {peers.map((peer) => (
          // <Peer key={peer.id} peer={peer} />
          <>
            {peer.roleName === 'streamer' ? (
              <div className="flex flex-col justify-center items-center max-w-screen-lg">
                <div className="p-4">
                  <VideoScreen key={peer.id} peer={peer} />
                </div>
                <div className="p-4 flex justify-center items-center">
                  <VideoCamera key={peer.id} peer={peer} />
                  {peer.roleName === 'streamer' ? (
                    <div className="flex gap-4 mt-20 justify-center items-center ml-24">
                      <button
                        className="rounded bg-green-500 px-4 py-2 text-white"
                        onClick={toggleAudio}
                      >
                        {isLocalAudioEnabled ? (
                          <i class="fa fa-microphone"></i>
                        ) : (
                          <i class="fa fa-microphone-slash"></i>
                        )}
                      </button>
                      <button
                        className="rounded bg-green-500 px-4 py-2 text-white"
                        onClick={toggleVideo}
                      >
                        {isLocalVideoEnabled ? (
                          <i class="fa fa-video-camera"></i>
                        ) : (
                          <i class="fa fa-stop"></i>
                        )}
                      </button>

                      {amIScreenSharing ? (
                        <div>
                          <button
                            className="fa-window-close bg-orange-600 hover:bg-orange-500 py-3 px-8 rounded text-orange-100 transition duration-500"
                            onClick={handleToggle}
                          >
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="fa fa-desktop bg-orange-600 hover:bg-orange-500 py-3 px-8 rounded text-orange-100 transition duration-500"
                            onClick={handleToggle}
                          >
                          </button>
                        </div>
                      )}
                      {screenSharingPeerName && (
                        <p>{`${screenSharingPeerName} is sharing their screen`}</p>
                      )}
                      {/* {isRecordingOn ? ( */}
                      <button
                        className="bg-orange-600 hover:bg-orange-500 py-3 px-8 rounded-full text-orange-100 transition duration-500"
                        onClick={handleStopRecording}
                      >
                        Stop
                      </button>
                      {/* ) : ( */}
                      <button
                        className="bg-orange-600 hover:bg-orange-500 py-3 px-8 rounded-full text-orange-100 transition duration-500"
                        onClick={handleStartRecording}
                      >
                        Record
                      </button>
                      {/* )} */}
                      <EndRoomButton />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ))}

        <ChatContainer />
      </div>
    </div>
  )
}

export default Conference
