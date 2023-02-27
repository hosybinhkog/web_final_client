import React from 'react'
import ItemProduct from '../Commom/itemProduct'

const ItemCategoryPage = ({ title }) => {
  return (
    <>
      <div className="bg-black text-white px-6">
        <div>
          <a href="/">
            <div className="py-4 ">
              <span className="text-3xl font-bold hover:text-gray-500">
                {title}
              </span>
            </div>
          </a>
        </div>
        <div className="flex gap-4 grid flex-wrap grid-cols-5">
          <ItemProduct />
        </div>
      </div>
    </>
  )
}

export default ItemCategoryPage
