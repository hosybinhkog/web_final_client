import React from 'react'
import ItemStatusFollow from '../handleItem/itemStatusFollow'

const FeedItemStatusFollow = ({ follow }) => {
  return (
    <div>
      {follow?.listFollowStreamer?.map((item) => (
        <ItemStatusFollow key={item._id} streamerId={item.idStreamer} />
      ))}
    </div>
  )
}

export default FeedItemStatusFollow
