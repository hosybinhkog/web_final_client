import React from 'react'
import products from '../../data-fake/products'

const ItemProduct = () => {
  return (
    <>
      {products.length &&
        products.map((product) => (
          <div className="">
            <div className="relative">
              <a href="/">
                <img
                  className="object-cover rounded-lg relative"
                  src={product.image}
                  alt=""
                />
              </a>
              <span className="rounded-lg px-1 bg-gray-800 absolute left-3 top-3">
                {product.game}
              </span>
            </div>
            <div>
              <a
                href="/"
                className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
              >
                <div className="">
                  <img
                    className="border rounded-full object-cover w-16"
                    src={product.avatar}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 w-full text-white font-bold">
                  <a href="/">
                    {' '}
                    <span className="hover:text-blue-700">{product.title}</span>
                  </a>
                  <div className="flex justify-between text-gray-500">
                    <span className="text-xs">{product.name}</span>
                    <div className=" flex gap-1 items-center">
                      <i class="fa-solid fa-users"></i>
                      <span>{product.viewer}k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
    </>
  )
}

export default ItemProduct
