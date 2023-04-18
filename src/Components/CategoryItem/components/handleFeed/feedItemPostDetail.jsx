import React from 'react'
import ItemPostDetail from '../handleItem/itemPostDetail'

const FeedItemPostDetail = ({ post }) => {
  return (
    <div>
      <div className="min-w-[1280px] px-5">
        <ItemPostDetail
          key={post._id}
          avatarUserUrl={post.avatarUser?.url}
          username={post.username}
          descriptionShort={post.descriptionShort}
          createTimePost={post.createdAt}
          titlePost={post.title}
          thumbnailPostUrl={post.imgThumnail?.url}
          bodyPost={post.body}
          id={post._id}
        />
      </div>
    </div>
  )
}

export default FeedItemPostDetail
