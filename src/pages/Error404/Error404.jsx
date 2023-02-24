import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="flex flex-col items-center pt-10 bg-white">
      <div className="cursor-pointer max-w-4xl">
        <span className="text-rose-600 tracking-wider font-bold text-8xl">
          404 SORRY
        </span>
        <p className=" text-gray-500 font-bold leading-7 tracking-wide">
          We couldn't find that page
        </p>
        <p className="text-gray-500 font-bold leading-7 tracking-wide">
          Try searching or go to{' '}
          <span className="text-blue-600 font-semibold leading-7">
            <Link to="/">NimoTV's home page.</Link>
          </span>
        </p>
      </div>
      <Link to="/">
        <img
          src="https://topshare.vn/wp-content/uploads/2021/01/Hinh-nen-den-trang-buon-cuc-dep-12.jpg"
          alt=""
          className="NotFound__img"
        />
      </Link>
    </div>
  )
}

export default Error404
