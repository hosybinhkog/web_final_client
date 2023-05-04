import React from 'react'
import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
  getDataAllStreamerFilter,
  getFilteredProductsCount,
} from '../../store/actions/searchActions'

const FiltersForm = () => {
  const [keyword, setKeyWord] = useState('')

  return (
    <form className="rounded-md text-black ">
      <input
        className="w-full h-full"
        type="text"
        // value={keyword}
        onChange={(e) => setKeyWord(e.target.value)}
        placeholder="Tìm kiếm streamer"
      />
    </form>
  )
}

export default FiltersForm
