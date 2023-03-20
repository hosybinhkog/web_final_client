import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RulesLogin from '../../Components/Commom/RulesLogin'
import { Link, useNavigate } from 'react-router-dom'
import { clearErrors, login } from '../../store/actions/userActions'
import { toast } from 'react-hot-toast'
import Loading from '../../Components/Loading'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()
  const { user, error, loading } = useSelector((state) => state.users)
  console.log(error)

  console.log(user)

  const navigate = useNavigate()

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const loadingId = toast.loading('Loading', { duration: 300 })
    dispatch(login(email, password))
    toast.remove(loadingId)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      left: 0,
    })
    if (user && user.email) {
      toast.success('Login success!')
      navigate('/')
    }
    if (error) {
      toast.error(error)
      setErrorMessage(error)
      dispatch(clearErrors())
    }
  }, [user, dispatch, navigate, error])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-black text-white w-1/3 m-auto my-10 rounded-2xl ">
          <div className="flex gap-48 py-5 pl-4">
            <p className="text-xl font-bold text-white">NIMO TV</p>
            <p className="font-bold text-lg">Đăng nhập</p>
            <i className="fa-solid fa-xmark font-bold mr-4 cursor-pointer"></i>
          </div>
          <hr className="w-full text-sm text-gray-400"></hr>
          <div className="flex gap-14 ">
            <div className="flex-col w-3/5 ml-4 py-4">
              <div className="flex gap-4">
                <i className="fa-solid fa-phone mt-5"></i>
                <p className="text-gray-400 py-4">Đăng nhập bằng Email</p>
              </div>
              <div className="pb-4">
                <input
                  className="w-full rounded-md text-gray-500 bg-gray-100"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Nhập Email"
                />
              </div>
              {errorMessage && <p className="text-red-600">{errorMessage}</p>}
              <div className="pb-4">
                <input
                  className="w-full rounded-md text-gray-500 bg-gray-100"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div className="flex place-content-between">
                <div className=" font-normal pb-4 float-right text-blue-600 hover:text-blue-400">
                  <Link to="/ForgotPassword">Quên mật khẩu</Link>
                </div>
                <div className="font-normal pb-4 float-right text-blue-600 hover:text-blue-400">
                  <Link to="/register">Đăng ký tài khoản mới</Link>
                </div>
              </div>

              <button
                type="submit"
                onClick={handleSubmitLogin}
                className="w-full mt-6 bg-sky-500 rounded-md h-8 hover:bg-sky-300"
              >
                Đăng nhâp
              </button>
            </div>
            <RulesLogin title={'Đăng nhập'} />
          </div>
        </div>
      )}
    </>
  )
}

export default Login
