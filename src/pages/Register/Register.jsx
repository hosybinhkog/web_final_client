import React, { useState, useEffect } from 'react'
import RulesLogin from '../.././Components/Commom/RulesLogin'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../store/actions/userActions'

const Register = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector((state) => state.users)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSubmitReg = (e) => {
    e.preventDefault()
    dispatch(register(username, email, password))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      <section className="bg-black text-white w-1/3 m-auto my-10 rounded-2xl ">
        <form onSubmit={handleSubmitReg}>
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

              <div className="pb-5">
                <input
                  className="w-full bg-gray-100 rounded-md text-gray-500"
                  type="text"
                  id="username"
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
                  id="email"
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
                  id="password"
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
                  id="passwordConfirm"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="Xác nhận mật khẩu"
                />
              </div>

              <span className="text-gray-400 py-4 font-light text-sm">
                Mật khẩu phải gồm 8 ký tự và ít nhất 1 chữ hoa 1 chữ thường và 1
                số
              </span>
              <div className="font-normal float-left mt-2 text-blue-600 hover:text-blue-400">
                <Link to="/Login">Đã có tài khoản</Link>
              </div>
              {/* <Link to="/Login"> */}
              <div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-sky-500 rounded-md h-8 hover:bg-sky-300"
                >
                  Đăng ký
                </button>
              </div>

              {/* </Link> */}
            </div>

            <RulesLogin title={'Đăng ký'} />
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
