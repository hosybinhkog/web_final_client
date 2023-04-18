import React from 'react'
import ItemComment from '../handleItem/itemComment'

const FeedItemComment = ({ comment }) => {
  return (
    <div className="mt-4">
      {comment?.map((item) => (
        <ItemComment
          key={item._id}
          avatarUrl={item.imgs[0]?.url}
          username={item.username}
          comment={item.text}
          id={item.postId}
          commentId={item._id}
        />
      ))}
    </div>
  )
}
export default FeedItemComment
