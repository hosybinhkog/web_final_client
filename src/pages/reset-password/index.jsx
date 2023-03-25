import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import RulesLogin from '../../Components/Commom/RulesLogin'
import {
  clearErrors,
  loadUser,
  resetPassword,
} from '../../store/actions/userActions'
import { validatePasswrodReset } from '../../utils/validatePasswordReset.js'

const ResetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const router = useParams()

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const { error, success } = useSelector((state) => state.password)
  const onBlur = () => setErrorMessage('')

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault()

    if (!password || !passwordConfirm) {
      const message = 'Password and password confirm is required'
      toast.error(message)
      setErrorMessage(message)
      return
    }

    if (
      !validatePasswrodReset(password.toString(), passwordConfirm.toString())
    ) {
      setErrorMessage(
        'Password phải có ít nhất 8 ký tự và trùng với ConfirmPassword'
      )

      toast.error(
        'Password phải có ít nhất 8 ký tự và trùng với ConfirmPassword'
      )

      return
    }

    const id = toast.loading('Submitting...')
    const myForm = new FormData()
    myForm.set('newPassword', password)
    myForm.set('confirmPassword', passwordConfirm)
    dispatch(resetPassword(router.token, myForm))
    toast.remove(id)
  }

  useEffect(() => {
    if (success) {
      navigate('/')
      toast.success('Change password succeess!!')
      // @ts-ignore
      dispatch(loadUser())
    }

    if (error) {
      toast.error(error)
      setErrorMessage(error)
      // @ts-ignore
      dispatch(clearErrors())
    }
  }, [dispatch, error, success, navigate])

  return (
    <>
      <div className="bg-black text-white w-1/3 m-auto my-10 rounded-2xl ">
        <div className="flex gap-40 py-5">
          <p className="text-xl font-bold text-white pl-4">NIMO TV</p>
          <div className="flex gap-4">
            <Link to="/Login">
              <i className="fa-solid fa-arrow-left mt-2 hover:text-blue-500"></i>
            </Link>

            <p className="font-bold text-lg">Reset password</p>
          </div>
          <i className="fa-solid fa-xmark font-bold cursor-pointer"></i>
        </div>
        <hr className="w-full text-sm text-gray-400"></hr>
        <form onSubmit={handleResetPasswordSubmit} className="flex gap-14 ">
          <div className="flex-col w-3/5 ml-4 py-4">
            <div className="flex gap-4">
              <p className="text-gray-400 py-4">New password</p>
            </div>
            <div className="">
              <input
                className="w-full bg-gray-100 rounded-md text-gray-500"
                type="password"
                name="password"
                value={password}
                onBlur={onBlur}
                onFocus={onBlur}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex">
              <p className="text-gray-400 py-4">Re-enter password</p>
            </div>
            <div className="pb-5">
              <input
                className="w-full bg-gray-100 rounded-md text-gray-500"
                type="password"
                name="confirmPassword"
                onBlur={onBlur}
                onFocus={onBlur}
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <p className="text-xs text-red-300">{errorMessage}</p>
            <button
              type="submit"
              className="w-full mt-6 bg-sky-500 rounded-md h-8 hover:bg-sky-300"
            >
              Gửi
            </button>
          </div>
          <RulesLogin title={'Đăng nhập'} />
        </form>
      </div>
    </>
  )
}

export default ResetPassword
