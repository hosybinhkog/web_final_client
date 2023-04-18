import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import imgAvatarStreamer from '../../assets/images/defaultAvatarStreamer.png'
import imgThumbnailStreamer from '../../assets/images/defaultThumbnail.jpg'
import { REGISTER_STREAMER_RESET_REGISTER_STREAMER } from '../../store/actions/types'
import {
  clearErrorsRegisterStreamer,
  loadUser,
  registerStreamer,
} from '../../store/actions/userActions'
import { modules } from '../../constants'

const RegisStream = () => {
  const { success, error } = useSelector((state) => state.streamer)
  const { user } = useSelector((state) => state.users)
  const navigate = useNavigate()

  const [imgsStreamerPreview, setImgsStreamerPreview] =
    useState(imgAvatarStreamer)
  const [imgsStreamer, setImgsStreamer] = useState('')
  const [thumbnailsStreamerPreview, setThumbnailsStreamerPreview] =
    useState(imgThumbnailStreamer)
  const [thumbnailsStreamer, setThumbnailsStreamer] = useState('')
  const [listCategoryStream, setListCategoryStream] = useState([])

  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const [streamer, setStreamer] = useState({
    displayName: '',
    discription: '',
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

  // const handleCheckboxCategoryStreamChange = (event) => {
  //   const { value, checked } = event.target.value
  //   if (checked) {
  //     setListCategoryStream([...listCategoryStream, value])
  //   } else {
  //     setListCategoryStream(listCategoryStream.filter((item) => item !== value))
  //   }
  // }

  const handleFormSubmitRegisStreamer = async (e) => {
    e.preventDefault()

    const id = toast.loading('Register Streamer...', { position: 'top-center' })
    const myForm = new FormData()
    myForm.set('displayName', streamer.displayName)
    myForm.set('discription', streamer.discription)
    // myForm.set('listCategoryStream', streamer.listCategoryStream)
    if (imgsStreamer) {
      myForm.set('imgs', imgsStreamer)
    }
    if (thumbnailsStreamer) {
      myForm.set('thumbnails', thumbnailsStreamer)
    }

    await dispatch(registerStreamer(myForm))

    toast.remove(id)
  }

  const onDiscription = (value) => {
    setStreamer({ ...streamer, discription: value })
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    if (error) {
      toast.error(error)
      setErrorMessage(error)
      dispatch(clearErrorsRegisterStreamer())
    }
    if (success) {
      toast.success('Register Streamer successfully !!!')
      navigate('/usersPage')
      dispatch(loadUser())
      dispatch({
        type: REGISTER_STREAMER_RESET_REGISTER_STREAMER,
      })
    }
  }, [error, success, dispatch])

  return (
    <>
      {user?._id ? (
        <div>
          <span className="text-3xl font-bold flex items-center justify-center mt-2">
            Đăng ký để trở thành Streamer
          </span>{' '}
          <form
            onSubmit={handleFormSubmitRegisStreamer}
            className="text-center p-4 min-h-[80vh] w-[1280px]"
          >
            <div className="flex flex-col gap-1 justify-center">
              {/* avatar Streamer */}

              <div className="flex flex-col justify-center items-center">
                <label
                  className="font-semibold text-2xl max-w-max "
                  htmlFor="avatar"
                >
                  Click for Avatar Streamer
                </label>
                <div>
                  <form
                    action=""
                    onClick={() =>
                      document.querySelector('.input-field').click()
                    }
                    className="cursor-pointer max-w-max"
                  >
                    <div className="flex gap-2 justify-center items-center">
                      <input
                        className="input-field hidden"
                        type="file"
                        name="imgsStreamer"
                        id="imgsStreamer"
                        accept="image/"
                        onChange={handleRegisDataStreamer}
                      />
                    </div>

                    <div className="flex justify-center items-center p-2">
                      {imgsStreamerPreview && (
                        <img
                          className="w-[200px] h-[200px] rounded-[50%] object-cover border-[1px] border-[solid] border-[green]"
                          src={imgsStreamerPreview}
                          alt="Img Streamer Preview"
                        />
                      )}
                    </div>
                  </form>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <label
                  className="font-semibold text-2xl max-w-max "
                  htmlFor="avatar"
                >
                  Click for Thumbnails Streamer
                </label>
                <div>
                  <form
                    action=""
                    onClick={() =>
                      document.querySelector('.input-field-thumb').click()
                    }
                    className="cursor-pointer max-w-max"
                  >
                    <div className="flex gap-2 justify-center items-center">
                      <input
                        className="input-field-thumb hidden"
                        type="file"
                        name="thumbnailStreamer"
                        id="thumbnailsStreamer"
                        accept="image/"
                        onChange={handleRegisDataStreamer}
                      />
                    </div>

                    <div className="flex justify-center items-center p-2">
                      {thumbnailsStreamerPreview && (
                        <img
                          className="w-[1280px] h-[600px]  object-cover border-[4px] border-[solid] border-[green]"
                          src={thumbnailsStreamerPreview}
                          alt="Thumbnails Streamer Preview"
                        />
                      )}
                    </div>
                  </form>
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
                  {/* <label className="flex gap-2 items-center mt-3 text-2xl">
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
                  </label> */}
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
                  value={discription}
                  onChange={onDiscription}
                />
              </div>
            </div>
            <div className="flex justify-center font-semibold text-2xl">
              <button className=" w-56 mt-6 p-2 bg-sky-500 rounded-md hover:bg-sky-300 cursor-pointer max-w-max">
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

export default RegisStream
