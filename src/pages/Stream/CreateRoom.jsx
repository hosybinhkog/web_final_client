import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axiosClient from '../../apis'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadStreamer } from '../../store/actions/userActions'
import { useEffect } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase'

function CreateRoom() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [templateId, setTemplateId] = useState('')
  const navigate = useNavigate()
  const streamer = useSelector((state) => state.loadStreamer.streamer)
  const dispatch = useDispatch()
  const [thumbnailfile, setthumbnailfile] = useState('')
  const [urlThumbnail, setUrlThumbnail] = useState('')
  const [uploadStatus, setUploadStatus] = useState('')
  const isDisabled = uploadStatus === 'uploading'
  const [uploadSuccessful, setUploadSuccessful] = useState(false)
  const [uploadCheck, setUploadCheck] = useState('not-uploaded')

  const setStatusStreamer = async () => {
    const url = `http://localhost:4444/api/v1/streammer/${streamer?._id}/toggleStreaming`

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'STREAMING' }),
    })

    if (!response.ok) {
      throw new Error('Failed to toggle streaming status.')
    }

    // Return the response body if needed
    // return response.json()
  }
  // const  uploadThumbnail = (thumbnailfile) => {
  //   // Get a reference to the file in Firebase Storage
  //   const thumbnailref = ref(storage, `/thumbnail/${thumbnailfile.name}`)

  //   // Upload the file to Firebase Storage using a resumable upload
  //   const uploadTask = uploadBytesResumable(thumbnailref, thumbnailfile)

  //   // Listen for state changes (progress, success, failure)
  //   uploadTask.on(
  //     'state_changed',
  //     (snapshot) => {
  //       // Handle progress updates
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       console.log(`Upload is ${progress}% done`)
  //     },
  //     (error) => {
  //       // Handle unsuccessful uploads
  //       console.error(error)
  //     },
  //     async () => {
  //       // Handle successful uploads
  //       const url = await getDownloadURL(thumbnailref)
  //       console.log(url)
  //       setUrlThumbnail(url)
  //       setUploadStatus('success')
  //       console.log('Upload successful!')
  //     }
  //   )
  // }

  const uploadThumbnail = (thumbnailfile, onSuccess, onFailure) => {
    // Get a reference to the file in Firebase Storage
    const thumbnailRef = ref(storage, `/thumbnail/${thumbnailfile.name}`)

    // Upload the file to Firebase Storage using a resumable upload
    const uploadTask = uploadBytesResumable(thumbnailRef, thumbnailfile)

    // Listen for state changes (progress, success, failure)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress updates
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`Upload is ${progress}% done`)
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error(error)
        onFailure(error)
      },
      async () => {
        try {
          // Handle successful uploads
          const url = await getDownloadURL(thumbnailRef)
          setUrlThumbnail(url)
          setUploadStatus('success')
          console.log('Upload successful!')
          onSuccess()
        } catch (error) {
          // Handle errors retrieving the URL
          console.error(error)
          onFailure(error)
        }
      }
    )
  }

  // Call the upload function on button click
  const handleUpload = () => {
    setUploadCheck('uploading')
    if (thumbnailfile == null) return
    uploadThumbnail(thumbnailfile)
    setUploadSuccessful(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // if (thumbnailfile === '') return
      // await new Promise((resolve, reject) => {
      //   uploadThumbnail(thumbnailfile, resolve, reject)
      //   console.log(urlThumbnail)
      // })

      await axiosClient.post('/stream/createstream', {
        streamerId: streamer?._id,
        room_id: streamer?.room_id,
        // cateStreamId: [response.data.id],
        title: name,
        description: description,
        thumbnail: urlThumbnail,
        // thumbnail:"https://firebasestorage.googleapis.com/v0/b/stream-project-8216c.appspot.com/o/thumbnail%2Fbgt.jpg?alt=media&token=a3d91c7b-546c-4e33-9bd0-0c35e066fc49",
        url: '',
        status: 'STREAMING',
      })
      await setStatusStreamer()
      dispatch(loadStreamer())
      navigate(`/streaming?streamid=${streamer?.room_id}`)
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
    <div className="w-full min-h-screen bg-[url('https://antimatter.vn/wp-content/uploads/2022/03/hinh-nen-may-tinh-1080x1920-toi-gian.jpg')] bg-no-repeat bg-cover">
      <div className="min-w-[664px] mt-[50px] justify-center items-center flex flex-col">
        <h1 className="font-bold mb-4 mt-8 text-white uppercase text-center text-2xl">
          Create a new livestream
        </h1>
        {/* <form
          className="justify-center items-center bg-[#596275] p-8 rounded w-[400px]"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="room-name"
            >
              Stream Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="room-name"
              type="text"
              placeholder="Enter room name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="room-description"
            >
              Stream Description
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="room-description"
              placeholder="Enter room description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-6">
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {
                setthumbnailfile(e.target.files[0])
              }}
            ></input>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 mt-[60px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create livestream
            </button>
          </div>
        </form> */}

        <form
          className="justify-center items-center bg-[#596275] p-8 rounded w-[400px]"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="room-name"
            >
              Stream Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="room-name"
              type="text"
              placeholder="Enter room name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="room-description"
            >
              Stream Description
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="room-description"
              placeholder="Enter room description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-6">
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {
                setthumbnailfile(e.target.files[0])
              }}
            ></input>
            {/* <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              disabled={!thumbnailfile || isDisabled}
              onClick={handleUpload}
            >
              {uploadStatus === 'uploading'
                ? 'Uploading...'
                : 'Upload Thumbnail'}
            </button> */}
          </div>
          {/* <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            disabled={!name || !description || isDisabled}
          >
            Create Livestream
          </button> */}
          <div>
            {uploadSuccessful ? (
              <button
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                disabled={!name || !description || isDisabled}
                type="submit"
              >
                Create Livestream
              </button>
            ) : (
              <button
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                disabled={!thumbnailfile || isDisabled}
                onClick={handleUpload}
              >
                {uploadStatus === 'uploading'
                  ? 'Uploading...'
                  : 'Upload Thumbnail'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRoom
