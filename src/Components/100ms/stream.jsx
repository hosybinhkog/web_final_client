import { useState, useEffect } from 'react'
import { useHMSActions } from '@100mslive/react-sdk'
import axios from 'axios'
import { useSelector } from 'react-redux'

function Stream() {
  const [roomId, setRoomId] = useState('')
  const hmsActions = useHMSActions()
  const [inputValues, setInputValues] = useState({
    name: 'NNN',
    token: '',
  })

  const params = new URLSearchParams(window.location.search)
  const streamId = params.get('streamid')

  const { data } = useSelector((state) => state.loadDataIndex)
  console.log(data)

  useEffect(() => {
    const joinRoom = async () => {

      try {
        const response = await axios.post('http://localhost:5000/auth-token', {
          room_id: streamId,
          user_id: '6409a23753769ecd1da2603d',
          role: 'streamer',
        })
        console.log('Success:', response.data)
        await hmsActions.join({
          authToken: response.data.token,
        })
      } catch (error) {
        console.log('Error:', error.response.data)
      }
    }

    joinRoom()
  },)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/auth-token', {
        room_id: roomId,
        user_id: '6409a23753769ecd1da2603d',
        role: 'streamer',
      })
      console.log('Success:', response.data)
      await hmsActions.join({
        authToken: response.data.token,
      })
    } catch (error) {
      console.log('Error:', error.response.data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="room-id">Room ID:</label>
        <input
          id="room-id"
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
      </div>
      <button type="submit">Join Room</button>
    </form>
    // <></>
  )
}

export default Stream
