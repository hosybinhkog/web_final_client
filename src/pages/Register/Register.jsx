import React, { useState, useEffect } from 'react'
import RulesLogin from '../.././Components/Commom/RulesLogin'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../store/actions/userActions'
import { toast } from 'react-hot-toast'
import { clearErrors } from '../../store/actions/userActions'
import {
  validateEmailRules,
  validatePasswrodReset,
  validateUsernameRules,
} from '../../utils/validatePasswordReset'

const Register = () => {
  const navigate = useNavigate()
  const router = useParams()
  const dispatch = useDispatch()

  const { isAuthenticated, error, success } = useSelector(
    (state) => state.users
  )

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onBlur = () => setErrorMessage('')

  const handleSubmitReg = (e) => {
    e.preventDefault()

    if (!password || !passwordConfirm) {
      const message = 'Passowrd and password confirm is required'
      toast.error(message)
      setErrorMessage(message)
      return
    }

    if (!validateUsernameRules(username.toString())) {
      setErrorMessage('Username ít nhất 4 ký tự')

      toast.error('Username ít nhất 4 ký tự')

      return
    }

    if (!validateEmailRules(email.toString())) {
      setErrorMessage('Email không hợp lệ')

      toast.error('Email không hợp lệ')

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

    const id = toast.loading('Register...')
    dispatch(register(username, email, password))
    toast.remove(id)
  }

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Register success!')
      navigate('/')
    }

    if (success) {
      toast.success('Register success!')
      navigate('/login')
    }

    if (error) {
      const errorCustom = 'Error to register user'
      toast.error(errorCustom)
      setErrorMessage(errorCustom)
      dispatch(clearErrors())
    }
  }, [isAuthenticated, error, navigate, success, dispatch])

  return (
    <>
      <section className="bg-black text-white w-1/3 m-auto my-10 rounded-2xl ">
        <div className="flex gap-48 py-5 pl-4">
          <p className="text-xl font-bold text-white">NIMO TV</p>
          <p className="font-bold text-lg">Đăng ký</p>
          <i className="fa-solid fa-xmark font-bold cursor-pointer mr-4 pl-5"></i>
        </div>
        <hr className="w-full text-sm text-gray-400"></hr>
        <div className="flex gap-14 ">
          <div className="flex-col w-3/5 ml-4 py-4">
            <div className="flex gap-4">
              <i className="fa-solid fa-phone mt-5"></i>
              <p className="text-gray-400 py-4">Đăng ký bằng Email</p>
            </div>
            <form onSubmit={handleSubmitReg}>
              <div className="pb-5">
                <input
                  className="w-full bg-gray-100 rounded-md text-gray-500"
                  type="text"
                  onBlur={onBlur}
                  onFocus={onBlur}
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div className="pb-5">
                <input
                  className="w-full bg-gray-100 rounded-md text-gray-500"
                  type="text"
                  onBlur={onBlur}
                  onFocus={onBlur}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email"
                />
              </div>
              <div className="pb-4">
                <input
                  className="w-full rounded-md bg-gray-100 text-gray-500"
                  type="password"
                  onBlur={onBlur}
                  onFocus={onBlur}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div className="pb-4">
                <input
                  className="w-full rounded-md bg-gray-100 text-gray-500"
                  type="password"
                  onBlur={onBlur}
                  onFocus={onBlur}
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="Xác nhận mật khẩu"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400  font-light text-sm ">
                  Mật khẩu phải có ít nhất 8 - 16 ký tự
                </span>
                <div className="font-normal text-blue-600 hover:text-blue-400">
                  <Link to="/Login">Đã có tài khoản</Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-sky-500 rounded-md h-8 hover:bg-sky-300"
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </div>

          <RulesLogin title={'Đăng ký'} />
        </div>
      </section>
    </>
  )
}

export default Register
