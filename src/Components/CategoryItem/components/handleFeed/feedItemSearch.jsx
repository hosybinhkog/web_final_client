import React from 'react'
import ItemSearch from '../handleItem/itemSearch'

const FeedItemSearch = ({ streams }) => {
  return (
    <div className="grid grid-cols-5 ">
      {streams?.map((item) => (
        <ItemSearch
          key={item._id}
          urlAvatar={item.avatarStreamer?.url}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default FeedItemSearch
