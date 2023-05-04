import React from 'react'

import ItemRank from '../CategoryItem/components/handleItem/itemRank'

const Rank = ({ streamRecommend }) => {
  return (
    <>
      <div className="grid grid-cols-2 pb-5">
        {streamRecommend?.slice(0, 1).map((stream) => (
          <ItemRank key={stream._id} urlThumbnail={stream.thumbnail.url} />
        ))}
      </div>
    </>
  )
}

export default Rank
