import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axiosClient from '../../apis'
import { useNavigate } from 'react-router-dom'

function CreateRoom() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [templateId, setTemplateId] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/create-room', {
        name,
        description,
        templateId,
      })
      console.log('New room created:', response.data)
      // Show success message and redirect to the new room
      toast.success('Successfully!')
        await axiosClient.post('/stream/createstream', 
        {
          userId: '6400b619ff3cdc769f89cad5',
          room_id: response.data.id,
          cateStreamId: [response.data.id],
          title: response.data.name,
          description: response.data.description,
          thumbnail: 'https://i.ytimg.com/vi/GdvpK0cy7SA/maxresdefault.jpg',
          url: 'https://example.com/my-awesome-stream',
          status: true
        },
      )

      navigate(`/streaming?streamid=${response.data.id}`)
    } catch (error) {
      console.error('Error creating new room:', error)
      // Show error message and clear input fields
      toast.error('Failed!')
      setName('')
      setDescription('')
      setTemplateId('')
    }
  }

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h1 className="text-lg font-bold mb-4 mt-8 text-pink-700 uppercase">
        Create a new livestream room
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="room-name"
          >
            Room Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="room-name"
            type="text"
            placeholder="Enter room name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="room-description"
          >
            Room Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="room-description"
            placeholder="Enter room description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="room-description"
          >
            Room Thumbnail
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="room-description"
            placeholder="Enter room description"
            rows="3"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-20"
            type="submit"
          >
            Create Room
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateRoom
