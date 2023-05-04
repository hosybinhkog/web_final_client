import React, { useEffect, useState } from 'react'
import FeedItemSearch from '../../Components/CategoryItem/components/handleFeed/feedItemSearch'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearErrorsStreamerFilter,
  clearStreamerFilterSuccess,
  getDataAllStreamerFilter,
} from '../../store/actions/searchActions'
import Loading from '../../Components/Loading'
import { useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import PaginationStreamer from '../../Components/pagination/paginationStreamer'

const SearchStreamer = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let keyword = searchParams.get('keyword')
  let page = searchParams.get('page')
  console.log(keyword)
  console.log(page)
  const {
    streams,
    loading,
    filteredProductsCount,
    resultPerPage,
    success,
    error,
  } = useSelector((state) => state.getDataAllStreamerFilter)

  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(resultPerPage)
  console.log(streams)
  console.log(keyword)

  const dispatch = useDispatch()
  useEffect(() => {
    if (success) {
      dispatch(getDataAllStreamerFilter(keyword))
      setItemsPerPage(resultPerPage)
      dispatch(clearStreamerFilterSuccess())
    }
    if (error) {
      toast.error('Search Streamer Failed')
      dispatch(clearErrorsStreamerFilter())
    }
  }, [keyword])

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage)
  }

  // if (loading) return <Loading />
  return (
    <div className=" w-full bg-black">
      <div className="min-h-[80vh] w-[1280px] mx-auto text-white ">
        <div className="mb-4 font-bold text-xl">
          <span className="flex gap-1">
            Tìm thấy <p className="text-red-500">{filteredProductsCount} </p>{' '}
            kết quả
          </span>
        </div>
        <PaginationStreamer data={streams} itemsPerPage={itemsPerPage} />
        {/* {streams && <FeedItemSearch streams={streams} />}
        <div className="flex justify-center mb-4">
          <Pagination
            data={streams}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div> */}
      </div>
    </div>
  )
}

export default SearchStreamer
