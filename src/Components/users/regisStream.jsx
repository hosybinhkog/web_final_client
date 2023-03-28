import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {
  registerStreamer,
  clearErrorsRegisterStreamer,
} from '../../store/actions/userActions'
import imgAvatar from '../../assets/images/defauktAvatar.gif'
import { REGISTER_STREAMER_RESET_REGISTER_STREAMER } from '../../store/actions/types'

const RegisStream = () => {
  const {
    streamer: streamerSelect,
    success,
    error,
    loading,
  } = useSelector((state) => state.streamer)
  const { user } = useSelector((state) => state.users)

  const [imgsStreamerPreview, setImgsStreamerPreview] = useState(imgAvatar)
  const [imgsStreamer, setImgsStreamer] = useState('')
  const [thumbnailsStreamerPreview, setThumbnailsStreamerPreview] =
    useState(imgAvatar)
  const [thumbnailsStreamer, setThumbnailsStreamer] = useState('')
  const [listCategoryStream, setListCategoryStream] = useState([])

  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [streamer, setStreamer] = useState({
    displayName: streamerSelect?.displayName,
    discription: streamerSelect?.discription,
    // listCategoryStream: streamerSelect?.listCategoryStream,
  })

  const {
    displayName,
    discription,
    // listCategoryStream
  } = streamer

  const handleRegisDataStreamer = (e) => {
    if (e.target.name === 'thumbnailStreamer') {
      const readerThumbnail = new FileReader()
      readerThumbnail.onload = () => {
        if (readerThumbnail.readyState === 2) {
          setThumbnailsStreamer(readerThumbnail.result)
          setThumbnailsStreamerPreview(readerThumbnail.result)
        }
      }
      readerThumbnail.readAsDataURL(e.target.files[0])
    }
    if (e.target.name === 'imgsStreamer') {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgsStreamer(reader.result)
          setImgsStreamerPreview(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    } else {
      setStreamer({ ...streamer, [e.target.name]: [e.target.value] })
    }
  }

  const handleCheckboxCategoryStreamChange = (event) => {
    const { value, checked } = event.target.value
    if (checked) {
      setListCategoryStream([...listCategoryStream, value])
    } else {
      setListCategoryStream(listCategoryStream.filter((item) => item !== value))
    }
  }

  const handleFormSubmitRegisStreamer = async (e) => {
    e.preventDefault()

    const id = toast.loading('Register Streamer...', { position: 'top-center' })
    const myForm = new FormData()
    myForm.set('displayName', streamer.displayName)
    myForm.set('discription', streamer.discription)
    // myForm.set('listCategoryStream', streamer.listCategoryStream)
    if (imgsStreamer) {
      console.log('imgsStreamer')
      myForm.set('imgs', imgsStreamer)
    }
    if (thumbnailsStreamer) {
      console.log('thumbnailsStreamer')
      myForm.set('thumbnails', thumbnailsStreamer)
    }

    await dispatch(registerStreamer(myForm))

    toast.remove(id)
  }

  const onDiscription = (value) => {
    setStreamer({ ...streamer, discription: value })
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      setErrorMessage(error)
      dispatch(clearErrorsRegisterStreamer())
      navigate('/regisStream')
    }
    if (success) {
      toast.success('Register Streamer successfully !!!')
      navigate('/usersPage')
      dispatch({
        type: REGISTER_STREAMER_RESET_REGISTER_STREAMER,
      })
    }

    if (streamerSelect?.displayName) {
      setStreamer({
        displayName: streamerSelect.displayName,
        discription: streamerSelect.discription,
        // listCategoryStream: streamerSelect.listCategoryStream,
      })
      if (streamerSelect.imgs && streamerSelect.imgs.url) {
        setImgsStreamerPreview(streamerSelect.imgs.url)
      }
      if (streamerSelect.thumbnails && streamerSelect.thumbnails.url) {
        setThumbnailsStreamerPreview(streamerSelect.thumbnails.url)
      }
    }
  }, [error, toast, dispatch, streamerSelect])

  return (
    <>
      {user?._id ? (
        <div>
          <span className="text-3xl font-bold">
            Đăng ký để trở thành Streamer
          </span>{' '}
          <form
            onSubmit={handleFormSubmitRegisStreamer}
            className="text-center p-4 min-h-[80vh] w-[1280px]"
          >
            <div className="flex flex-col gap-1 justify-center">
              {/* avatar Streamer */}
              <div className="flex flex-col justify-center">
                <label className="font-semibold text-2xl" htmlFor="avatar">
                  Avatar Streamer
                </label>
                <div className="flex justify-center items-center p-2">
                  {imgsStreamerPreview && (
                    <img
                      className="w-[200px] h-[200px] rounded-[50%] object-cover border-[4px] border-[solid] border-[green]"
                      src={imgsStreamerPreview}
                      alt="Img Streamer Preview"
                    />
                  )}
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    className="border-[1px] border-[solid] border-[green] mt-2 cursor-pointer"
                    type="file"
                    name="imgsStreamer"
                    id="imgsStreamer"
                    accept="image/"
                    placeholder="avatar.jpg"
                    onChange={handleRegisDataStreamer}
                  />
                </div>
              </div>
              {/* thumbnails Streamer */}
              <div className="flex flex-col justify-center">
                <label className="font-semibold text-2xl" htmlFor="avatar">
                  Thumbnails Streamer
                </label>
                <div className="flex justify-center items-center p-2">
                  {thumbnailsStreamerPreview && (
                    <img
                      className="w-[200px] h-[200px] rounded-[50%] object-cover border-[4px] border-[solid] border-[green]"
                      src={thumbnailsStreamerPreview}
                      alt="Thumbnails Streamer Preview"
                    />
                  )}
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    className="border-[1px] border-[solid] border-[green] mt-2 cursor-pointer"
                    type="file"
                    name="thumbnailStreamer"
                    id="thumbnailsStreamer"
                    accept="image/"
                    placeholder="thumbnails.jpg"
                    onChange={handleRegisDataStreamer}
                  />
                </div>
              </div>

              <div className="flex justify-around">
                <div>
                  {/* Username */}
                  <label className="flex gap-2 items-center mt-3 text-2xl">
                    DisplayName Chanel{' '}
                    <input
                      className="border-[1px] border-[solid] border-[green]"
                      name="displayName"
                      type="text"
                      value={displayName}
                      placeholder="Your name chanel"
                      onChange={handleRegisDataStreamer}
                    />
                    <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
                  </label>
                  {/* listCategoryStream  */}
                  <label className="flex gap-2 items-center mt-3 text-2xl">
                    Select Category Stream{' '}
                    <div>
                      <div>
                        <span>LMHT</span>
                        <input
                          type="checkbox"
                          id="LMHT"
                          value="LMHT"
                          onChange={handleCheckboxCategoryStreamChange}
                        />
                      </div>
                      <div>
                        <span>PUBG</span>
                        <input
                          type="checkbox"
                          id="PUBG"
                          value="PUBG"
                          onChange={handleCheckboxCategoryStreamChange}
                        />
                      </div>
                      <div>
                        <span>GTA 5</span>
                        <input
                          type="checkbox"
                          id="GTA"
                          value="GTA"
                          onChange={handleCheckboxCategoryStreamChange}
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              {/* discription */}
              <div>
                <label className="flex gap-2 items-center mt-3 text-2xl">
                  Description Streamer{' '}
                </label>
                <ReactQuill
                  modules={modules}
                  theme="snow"
                  value={streamer.discription}
                  onChange={onDiscription}
                />
              </div>
            </div>
            <div className="flex justify-center font-semibold text-2xl">
              <button className=" w-44 mt-6 bg-sky-500 rounded-md hover:bg-sky-300 cursor-pointer">
                Đăng ký Streamer{' '}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  ['bold', 'italic', 'underline', 'strike'],

  ['code-block', 'image', 'link'],

  [{ list: 'ordered' }, { list: 'bullet' }],

  [{ color: [] }, { background: [] }],
  [{ align: [] }],

  ['clean'],
]

const modules = {
  toolbar: toolbarOptions,
}

export default RegisStream
