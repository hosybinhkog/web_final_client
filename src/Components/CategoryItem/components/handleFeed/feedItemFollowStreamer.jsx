import React from 'react'
import ItemFollowStreamer from '../handleItem/itemFollowStreamer'

const FeedItemFollowStreamer = ({ listFollow }) => {
  return (
    <div className="grid grid-cols-3">
      {listFollow?.listFollowStreamer?.map((item) => (
        <ItemFollowStreamer
          key={item._id}
          avatarUrl={item.avatar?.url}
          username={item.name}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default FeedItemFollowStreamer
