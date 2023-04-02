import React from 'react'

const CategoriesItem = ({thumbnailsUrl, description, title}) => {
  return (
    <>
      <div className="">
        <div className="relative">
          <a href="/">
            <img
              className="object-cover rounded-lg relative"
              src={thumbnailsUrl}
              alt=""
            />
          </a>
          <span className="rounded-lg px-1 bg-gray-800 absolute left-3 top-3">
                          {title}
          </span>
        </div>
        <div>
          <a
            href="/"
            className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1"
          >
            {/*<div className="">*/}
            {/*  <img*/}
            {/*    className="border rounded-full object-cover w-16"*/}
            {/*    src={imgsUrl}*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="flex flex-col gap-2 w-full text-white font-bold">
              <a href="/">
                {' '}
                <div className="hover:text-blue-700 line-clamp-2" dangerouslySetInnerHTML={{__html: description}}></div>
              </a>
              {/*<div className="flex justify-between text-gray-500">*/}
              {/*  <span className="text-xs">{displayName}</span>*/}
              {/*  /!* <div className=" flex gap-1 items-center">*/}
              {/*        <i class="fa-solid fa-users"></i>*/}
              {/*        <span>{product.viewer}k</span>*/}
              {/*      </div> *!/*/}
              {/*</div>*/}
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default CategoriesItem
