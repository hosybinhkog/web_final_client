import React from 'react'
import ItemAllPost from '../handleItem/itemAllPost'

const FeedItemAllPost = ({ post }) => {
  return (
    <div>
      <div className=" gap-4 grid flex-wrap grid-cols-4 pr-4">
        {post?.map((item) => (
          <ItemAllPost
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

export default FeedItemAllPost
