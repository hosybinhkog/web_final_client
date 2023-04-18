import React from 'react'
import NavbarInforUser from '../Commom/navbarInforUser'
import { useSelector } from 'react-redux'

const DetailDiamondPage = () => {
  const { user } = useSelector((state) => state.users)
  return (
    <>
      <div className="flex min-h-[80vh] w-full">
        <NavbarInforUser />
        <div className="w-10/12 bg-black flex flex-col pl-10 pt-10 ">
          <div className="text-white">
            <div className="mb-4">
              <span>Số dư tài khoản</span>
            </div>

            <div className="flex gap-2">
              <div className="bg-[url('/public/diamond.png')] w-6 h-6 bg-no-repeat"></div>
              {user?.cost}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailDiamondPage
