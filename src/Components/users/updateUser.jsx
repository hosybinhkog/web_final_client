import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import imgAvatar from './avatar.jpg'
import { useNavigate } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'
import {
  clearErrors,
  loadUser,
  updateProfileUser,
} from '../../store/actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../store/actions/types'
import QuillEditor from '../Commom/quillEditor'
import ReactQuill from 'react-quill'

const UpdateUser = () => {
  const { user: userSelect, loading } = useSelector((state) => state.users)
  const { error, isUpdated } = useSelector((state) => state.updateProfileUser)
  const [avatarPreview, setAvatarPreview] = useState(imgAvatar)
  const [avatar, setAvatar] = useState(
    'https://phunugioi.com/wp-content/uploads/2020/02/anh-anime-cute-girl.jpg'
  )

  // const [about, setAbout] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const [user, setUser] = useState({
    username: userSelect?.username,
    gender: userSelect?.gender,
    phone: userSelect?.phone,
    address: userSelect?.address,
    birthday: userSelect?.birthday,
    profileDescription: userSelect?.profileDescription,
    about: userSelect?.about,
    show_phone: userSelect?.show_phone,
    show_address: userSelect?.show_address,
    show_profile_index: userSelect?.show_profile_index,
    show_birthday: userSelect?.show_birthday,
    show_email: userSelect?.show_email,
    show_gender: userSelect?.show_gender,
  })

  const {
    username,
    gender,
    phone,
    address,
    birthday,
    profileDescription,
    about,
    show_phone,
    show_address,
    show_profile_index,
    show_birthday,
    show_email,
    show_gender,
  } = user

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeDataUpdate = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result)
          setAvatarPreview(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    } else {
      setUser({ ...user, [e.target.name]: [e.target.value] })
    }
  }

  const handleFormSubmitUpdate = async (e) => {
    e.preventDefault()

    const id = toast.loading('Updating...', { position: 'top-center' })
    const myForm = new FormData()
    myForm.set('username', user.username)
    myForm.set('gender', user.gender)
    myForm.set('phone', user.phone)
    myForm.set('address', user.address)
    myForm.set('birthday', user.birthday)
    myForm.set('profileDescription', user.profileDescription)
    myForm.set('about', user.about)
    myForm.set('show_phone', user.show_phone)
    myForm.set('show_address', user.show_address)
    myForm.set('show_profile_index', user.show_profile_index)
    myForm.set('show_birthday', user.show_birthday)
    myForm.set('show_email', user.show_email)
    myForm.set('show_gender', user.show_gender)
    if (avatar) {
      console.log('avatar')
      myForm.set('avatar', avatar)
    }

    await dispatch(updateProfileUser(myForm))
    navigate('/')
    toast.remove(id)
  }

  const onBlur = () => setErrorMessage('')

  const onAbout = (value) => {
    setUser({ ...user, about: value })
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      setErrorMessage(error)
      dispatch(clearErrors())
    }
    if (isUpdated) {
      toast.success('Update successfully !!!')
      dispatch(loadUser())

      dispatch({
        type: UPDATE_PROFILE_RESET,
      })
    }

    if (userSelect?.username) {
      setUser({
        username: userSelect.username,
        gender: userSelect.gender,
        phone: userSelect.phone,
        address: userSelect.address,
        birthday: userSelect.birthday,
        profileDescription: userSelect.profileDescription,
        about: userSelect.about,
        show_phone: userSelect.show_phone,
        show_address: userSelect.show_address,
        show_profile_index: userSelect.show_profile_index,
        show_birthday: userSelect.show_birthday,
        show_email: userSelect.show_email,
        show_gender: userSelect.show_gender,
      })
      if (userSelect.avatar && userSelect.avatar.url) {
        setAvatarPreview(userSelect.avatar.url)
      }
    }
  }, [error, toast, isUpdated, dispatch, userSelect])
  return (
    <>
      <form
        onSubmit={handleFormSubmitUpdate}
        className="text-center p-4 min-h-[80vh]"
      >
        <div className="flex flex-col gap-1 justify-center">
          {/* avatar  */}
          <div className="flex flex-col justify-center">
            <label className="font-semibold text-2xl" htmlFor="avatar">
              Avatar
            </label>
            <div className="flex justify-center items-center p-2">
              {avatarPreview && (
                <img
                  className="w-[200px] h-[200px] rounded-[50%] object-cover border-[4px] border-[solid] border-[green]"
                  src={avatarPreview}
                  alt="Avatar preview"
                />
              )}
            </div>
            <div className="flex gap-2 items-center">
              <input
                className="border-[1px] border-[solid] border-[green] mt-2 cursor-pointer"
                type="file"
                name="avatar"
                id="avatar"
                accept="image/"
                placeholder="avatar.jpg"
                onChange={handleChangeDataUpdate}
              />
            </div>
          </div>
          {/* Username */}
          <label className="flex gap-2 items-center mt-3 text-2xl">
            Username:{' '}
            <input
              className="border-[1px] border-[solid] border-[green]"
              name="username"
              type="text"
              value={username}
              placeholder="Your name"
              onChange={handleChangeDataUpdate}
            />
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
          </label>
          {/* Gender  */}
          <label
            htmlFor="gender"
            className="mt-3 text-2xl flex gap-2 items-center"
          >
            Gender:
            <div
              className="flex gap-2"
              name="gender"
              value={gender}
              onChange={handleChangeDataUpdate}
            >
              <div className="flex gap-2 items-center">
                <label for="male">Nam</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="true"
                ></input>
              </div>

              <div className="flex gap-2 items-center">
                <label for="female">Nữ</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="false"
                ></input>
              </div>
            </div>
          </label>
          {/* show_gender */}
          <div
            className="flex gap-2"
            name="show_gender"
            value={show_gender}
            onChange={handleChangeDataUpdate}
          >
            <label htmlFor="">Hiển thị Gender: </label>
            <div className="flex gap-2 items-center">
              <label for="yes">Có</label>
              <input
                type="radio"
                id="yes"
                name="show_gender"
                value="true"
              ></input>
            </div>

            <div className="flex gap-2 items-center">
              <label for="No">Không</label>
              <input
                type="radio"
                id="No"
                name="show_gender"
                value="false"
              ></input>
            </div>
          </div>
          {/* Phone  */}
          <label className="flex gap-2 items-center mt-3 text-2xl">
            Phone:{' '}
            <input
              className="border-[1px] border-[solid] border-[green]"
              type="text"
              value={phone}
              name="phone"
              placeholder="Your phone number"
              onChange={handleChangeDataUpdate}
            />
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
          </label>
          {/* show_phone */}
          <div
            className="flex gap-2"
            name="show_phone"
            value={show_phone}
            onChange={handleChangeDataUpdate}
          >
            <label htmlFor="">Hiển thị Phone: </label>
            <div className="flex gap-2 items-center">
              <label for="yes">Có</label>
              <input
                type="radio"
                id="yes"
                name="show_phone"
                value="true"
              ></input>
            </div>

            <div className="flex gap-2 items-center">
              <label for="No">Không</label>
              <input
                type="radio"
                id="No"
                name="show_phone"
                value="false"
              ></input>
            </div>
          </div>
          {/* Address */}
          <label className="flex gap-2 items-center mt-3 text-2xl">
            Address:{' '}
            <input
              className="border-[1px] border-[solid] border-[green]"
              type="text"
              value={address}
              name="address"
              placeholder="Your address"
              onChange={handleChangeDataUpdate}
            />
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
          </label>
          {/* show_address */}
          <div
            className="flex gap-2"
            name="show_address"
            value={show_address}
            onChange={handleChangeDataUpdate}
          >
            <label htmlFor="">Hiển thị Address: </label>
            <div className="flex gap-2 items-center">
              <label for="yes">Có</label>
              <input
                type="radio"
                id="yes"
                name="show_address"
                value="true"
              ></input>
            </div>

            <div className="flex gap-2 items-center">
              <label for="No">Không</label>
              <input
                type="radio"
                id="No"
                name="show_address"
                value="false"
              ></input>
            </div>
          </div>
          {/* Birthday  */}
          <label className="flex gap-2 items-center mt-3 text-2xl">
            Birthday:{' '}
            <input
              className="border-[1px] border-[solid] border-[green]"
              type="date"
              value={birthday}
              name="birthday"
              placeholder="Your birthday"
              onChange={handleChangeDataUpdate}
            />
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
          </label>
          {/* show_birthday */}
          <div
            className="flex gap-2"
            name="show_birthday"
            value={show_birthday}
            onChange={handleChangeDataUpdate}
          >
            <label htmlFor="">Hiển thị Birthday: </label>
            <div className="flex gap-2 items-center">
              <label for="yes">Có</label>
              <input
                type="radio"
                id="yes"
                name="show_birthday"
                value="true"
              ></input>
            </div>

            <div className="flex gap-2 items-center">
              <label for="No">Không</label>
              <input
                type="radio"
                id="No"
                name="show_birthday"
                value="false"
              ></input>
            </div>
          </div>
          {/* ProfileDescription */}
          <label className="flex gap-2 items-center mt-3 text-2xl">
            ProfileDescription:{' '}
            <input
              className="border-[1px] border-[solid] border-[green]"
              type="text"
              value={profileDescription}
              name="profileDescription"
              placeholder="Your Description"
              onChange={handleChangeDataUpdate}
            />
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
          </label>
          {/* show_profileDescription */}
          <div
            className="flex gap-2"
            name="show_profile_index"
            value={show_profile_index}
            onChange={handleChangeDataUpdate}
          >
            <label htmlFor="">Hiển thị ProfileDescription: </label>
            <div className="flex gap-2 items-center">
              <label for="yes">Có</label>
              <input
                type="radio"
                id="yes"
                name="show_profile_index"
                value="true"
              ></input>
            </div>

            <div className="flex gap-2 items-center">
              <label for="No">Không</label>
              <input
                type="radio"
                id="No"
                name="show_profile_index"
                value="false"
              ></input>
            </div>
          </div>
          {/* about */}
          <div>
            <label className="flex gap-2 items-center mt-3 text-2xl">
              About me:{' '}
            </label>
            <ReactQuill
              modules={modules}
              theme="snow"
              value={user.about}
              onChange={onAbout}
            />
          </div>
        </div>
        <div className="flex justify-center font-semibold text-2xl">
          <button className=" w-44 mt-6 bg-sky-500 rounded-md hover:bg-sky-300 cursor-pointer">
            Lưu thay đổi{' '}
          </button>
        </div>
      </form>
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

export default UpdateUser
