import React, { useState } from 'react'
import RulesLogin from '../.././Components/Commom/RulesLogin'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const ForgotPassword = () => {
  const naviagate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const { error, message } = useSelector((state) => state.password)

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault()
    if (!email) return toast.error('Emaill is required')
    const id = toast.loading('submiting...')

    toast.remove(id)
  }

  return (
    <>
      <div className="bg-black text-white w-1/3 m-auto my-10 rounded-2xl ">
        <div className="flex gap-40 py-5">
          <p className="text-xl font-bold text-white pl-4">NIMO TV</p>
          <div className="flex gap-4">
            <Link to="/Login">
              <i className="fa-solid fa-arrow-left mt-2 hover:text-blue-500"></i>
            </Link>

            <p className="font-bold text-lg">Quên mật khẩu</p>
          </div>
          <i className="fa-solid fa-xmark font-bold cursor-pointer"></i>
        </div>
        <hr className="w-full text-sm text-gray-400"></hr>
        <form onSubmit={handleForgotPasswordSubmit} className="flex gap-14 ">
          <div className="flex-col w-3/5 ml-4 py-4">
            <div className="flex gap-4">
              <p className="text-gray-400 py-4">Nhập email của bạn</p>
            </div>
            <div className="pb-5">
              <input
                className="w-full bg-gray-100 rounded-md text-gray-500"
                type="email"
                value={email}
                placeholder="Nhập email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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

export default ForgotPassword
