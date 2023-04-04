import React from 'react'
import FeedStreamer from './feedStreamer'
import { useSelector } from 'react-redux'

const FeedTitle = ({ categoriesStream }) => {
  const { data } = useSelector((state) => state.loadDataIndex)
  return (
    <div>
      {' '}
      {categoriesStream?.map((item) => (
        <FeedStreamer
          key={item._id}
          titleCategory={item.title}
          streammers={data.streammers}
        />
      ))}
    </div>
  )
}

export default FeedTitle
