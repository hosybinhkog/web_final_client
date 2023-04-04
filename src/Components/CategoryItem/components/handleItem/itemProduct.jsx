import React from 'react'

const ItemProduct = ({
  thumbnailsUrl,
  displayName,
  discription,
  imgsUrl,
  title,
}) => {
  return (
    <>
      <div className="bg-[#1A1A1A] rounded-xl">
        <div className="">
          <a href="/">
            <img
              className="object-cover rounded-lg w-[347px] h-[195px]"
              // src={thumbnailsUrl ? { thumbnailsUrl } : img}
              src={thumbnailsUrl}
              alt=""
            />
          </a>
          {/* <span className="rounded-lg px-1 bg-gray-800 absolute left-3 top-3">
            {title}
          </span> */}
        </div>
        <div>
          <a
            href="/"
            className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
          >
            <div className="">
              <img
                className=" border-[1px] border-[solid] border-[green] rounded-[50%] object-cover w-[58px] h-[48px]"
                src={imgsUrl}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 w-full text-white font-bold">
              <a href="/">
                {' '}
                <span
                  className="hover:text-blue-700 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: discription }}
                ></span>
              </a>
              <div className="flex justify-between text-gray-500">
                <span className="text-xs">{displayName}</span>
                {/* <div className=" flex gap-1 items-center">
                      <i class="fa-solid fa-users"></i>
                      <span>{product.viewer}k</span>
                    </div> */}
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default ItemProduct
