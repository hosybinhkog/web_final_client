import React from 'react'
import ItemSlider from './itemSlider'

const FeedSlider = ({ streammers }) => {
  return (
    <div>
      <div className="py-3 flex flex-col ">
        {
          //   ?.sort((a, b) => (a.thumbnails._id > b.thumbnails._id ? 1 : -1))
          streammers?.slice(0, 1).map((item) => (
            <ItemSlider
              key={item._id}
              thumbnailsUrlSlider={item.thumbnails[0]?.url}
            />
          ))
        }
      </div>
    </div>
  )
}
export default FeedSlider
