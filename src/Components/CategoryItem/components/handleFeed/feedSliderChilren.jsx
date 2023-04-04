import React from 'react'
import ItemSliderChilren from '../handleItem/itemSliderChilren'

const FeedSliderChilren = ({ streammers }) => {
  return (
    <div>
      <div className="py-3 flex flex-col ">
        {streammers
          ?.sort((a, b) => (a.thumbnails._id > b.thumbnails._id ? 1 : -1))
          .slice(1, 6)
          .map((item) => (
            <ItemSliderChilren
              key={item._id}
              thumbnailsUrlChilren={item.thumbnails[0]?.url}
            />
          ))}
      </div>
    </div>
  )
}
export default FeedSliderChilren
