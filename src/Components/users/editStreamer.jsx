import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UPDATE_PROFILE_STREAMER_RESET } from '../../store/actions/types'
import {
  clearErrorsRegisterStreamer,
  loadStreamer,
  updateProfileStreamer,
} from '../../store/actions/userActions'
import Loading from '../Loading'
import { modules } from '../../constants'

const EditStreamer = () => {
  const { streamer: streamerSelect, loading } = useSelector(
    (state) => state.loadStreamer
  )
  const { error, isUpdated } = useSelector(
    (state) => state.updateProfileStreamer
  )
  const [imgsPreview, setImgsPreview] = useState(streamerSelect?.imgs?.url)
  const [imgs, setImgs] = useState('')
  const [thumbnailsStreamerPreview, setThumbnailsStreamerPreview] = useState('')
  const [thumbnailsStreamer, setThumbnailsStreamer] = useState('')
  // const [listCategoryStream, setListCategoryStream] = useState([])

  const [errorMessage, setErrorMessage] = useState('')

  const [streamer, setStreamer] = useState({
    displayName: streamerSelect?.displayName,
    discription: streamerSelect?.discription,
  })

  const { displayName, discription } = streamer

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeDataStreamerUpdate = (e) => {
    if (e.target.name === 'imgs') {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgs(reader.result)
          setImgsPreview(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
    if (e.target.name === 'thumbnailStreamer') {
      const readerThumbnail = new FileReader()
      readerThumbnail.onload = () => {
        if (readerThumbnail.readyState === 2) {
          setThumbnailsStreamer(readerThumbnail.result)
          setThumbnailsStreamerPreview(readerThumbnail.result)
        }
      }
      readerThumbnail.readAsDataURL(e.target.files[0])
    } else {
      setStreamer({ ...streamer, [e.target.name]: [e.target.value] })
    }
  }

  const handleFormSubmitUpdateStreamer = async (e) => {
    e.preventDefault()

    const id = toast.loading('Updating Profile Streamer...', {
      position: 'top-center',
    })
    const myForm = new FormData()
    myForm.set('displayName', streamer.displayName)
    myForm.set('discription', streamer.discription)
    // myForm.set('listCategoryStream', streamer.listCategoryStream)
    if (imgs) {
      myForm.set('imgs', imgs)
    }
    if (thumbnailsStreamer) {
      myForm.set('thumbnails', thumbnailsStreamer)
    }

    await dispatch(updateProfileStreamer(myForm))

    toast.remove(id)
  }

  const onBlur = () => setErrorMessage('')

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
    if (isUpdated) {
      toast.success('Update successfully !!!')
      navigate('/introduceStreamer')
      dispatch(loadStreamer())

      dispatch({
        type: UPDATE_PROFILE_STREAMER_RESET,
      })
    }

    if (streamerSelect?.displayName) {
      setStreamer({
        displayName: streamerSelect.displayName,
        discription: streamerSelect.discription,
      })
      if (streamerSelect.imgs && streamerSelect.imgs.url) {
        setImgsPreview(streamerSelect.imgs.url)
      }
      if (streamerSelect.thumbnails && streamerSelect.thumbnails[0].url) {
        setThumbnailsStreamerPreview(streamerSelect.thumbnails[0].url)
      }
    }
  }, [error, toast, isUpdated, dispatch, streamerSelect])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <span className="text-3xl font-bold flex items-center justify-center mt-2">
            Edit Profile Streamer
          </span>{' '}
          <form
            onSubmit={handleFormSubmitUpdateStreamer}
            className="text-center p-4 min-h-[80vh] w-[1280px]"
          >
            <div className="flex flex-col gap-1 justify-center">
              {/* avatar Streamer */}
              <div className="flex flex-col justify-center items-center">
                <label
                  className="font-semibold text-2xl max-w-max "
                  htmlFor="avatar"
                >
                  Avatar Streamer
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
                        name="imgs"
                        id="imgs"
                        accept="image/"
                        onChange={handleChangeDataStreamerUpdate}
                      />
                    </div>

                    <div className="flex justify-center items-center p-2">
                      {imgsPreview && (
                        <img
                          className="w-[200px] h-[200px] rounded-[50%] object-cover border-[1px] border-[solid] border-[green]"
                          src={imgsPreview}
                          alt="Img Streamer Preview"
                        />
                      )}
                    </div>
                  </form>
                </div>
              </div>

              {/* thumbnails Streamer */}
              <div className="flex flex-col justify-center items-center">
                <label
                  className="font-semibold text-2xl max-w-max "
                  htmlFor="thumbnailStreamer"
                >
                  Thumbnails Streamer
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
                        onChange={handleChangeDataStreamerUpdate}
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
                      onChange={handleChangeDataStreamerUpdate}
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
              <button className=" w-44 mt-6 bg-sky-500 rounded-md hover:bg-sky-300 cursor-pointer">
                Cập nhật profile Streamer{' '}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default EditStreamer
