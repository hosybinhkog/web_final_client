import React from 'react'
import ItemPost from '../handleItem/itemPost'

const FeedItemPost = ({ post }) => {
  return (
    <div>
      <div className=" gap-4 grid flex-wrap grid-cols-4 pr-4">
        {post?.map((item) => (
          <ItemPost
            key={item._id}
            avatarUserUrl={item.avatarUser?.url}
            username={item.username}
            descriptionShort={item.descriptionShort}
            createTimePost={item.createdAt}
            titlePost={item.title}
            thumbnailPostUrl={item.imgThumnail?.url}
            id={item._id}
          />
        ))}
      </div>
    </div>
  )
}

export default FeedItemPost
