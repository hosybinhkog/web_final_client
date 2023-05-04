import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

const PaginationStreamer = ({ data, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }
  return (
    <>
      <div className=" ">
        <div className="grid grid-cols-4 gap-2">
          {currentItems?.map((item) => {
            return (
              <>
                <div className="mb-4 border border-black hover:border-[#7859FF] cursor-pointer rounded-lg ">
                  <div className="relative group  ">
                    <a href="/">
                      <img
                        className="object-cover rounded-lg w-[347px] h-[195px] hover:bg-red-700 "
                        src={item.thumbnail?.url}
                        alt=""
                      />
                    </a>
                    <button
                      className={`absolute top-[40%] left-[40%]   text-yellow-500 font-black rounded-full w-[60px] h-[60px] text-5xl shadow-sm  hover:cursor-pointer opacity-0 group-hover:opacity-80 `}
                    >
                      <i className="fas fa-play ml-1"></i>
                    </button>
                  </div>

                  <div className="flex gap-2 pb-4 hover:bg-zinc-900 hover:rounded-lg items-center p-1">
                    <div className="">
                      <img
                        className=" border-[1px] border-[solid] border-[green] rounded-[50%] object-cover w-[58px] h-[48px]"
                        src={item.avatarStreamer?.url}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full text-white font-bold">
                      <div className="flex justify-between text-gray-500">
                        <span className="text-xs">{item.title}</span>
                        {/* <div className=" flex gap-1 items-center">
                      <i class="fa-solid fa-users"></i>
                      <span>{product.viewer}k</span>
                    </div> */}
                      </div>
                      <Link to="/">
                        <span
                          className="hover:text-blue-700 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="mb-4 border border-black hover:border-[#7859FF] cursor-pointer rounded-lg">
                  <div className="flex flex-col gap-1 items-center p-2">
                    <div className="w-48 h-48 ">
                      <img
                        className="object-cover rounded-full"
                        src={item.avatarStreamer?.url}
                        alt=""
                      />
                    </div>
                    <span className="font-bold text-xl line-clamp-1">
                      {item.title}
                    </span>
                    <span className="line-clamp-1 text-sm">
                      {item.description}
                    </span>
                  </div>
                </div> */}
              </>
            )
          })}
        </div>

        <div className="flex flex-col items-center justify-end max-h-max">
          <ReactPaginate
            breakLabel="..."
            // className="flex gap-2 justify-center items-center"
            previousLabel="< Previous"
            nextLabel="Next > "
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        </div>
      </div>
    </>
  )
}

export default PaginationStreamer
