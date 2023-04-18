import React from 'react'
import ItemCategoriesPost from '../handleItem/itemCategoriesPost'
import { useSelector } from 'react-redux'

const FeedItemCategoriesAllPost = () => {
  const { post } = useSelector((state) => state.loadDataAllPost)
  const { categories } = useSelector((state) => state.loadCategoriesPost)
  const target = '643422f14811c80d3ec22505'
  return (
    <div>
      <div className=" gap-4 grid flex-wrap grid-cols-4 pr-4">
        {post?.map((item) => (
          <ItemCategoriesPost
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

export default FeedItemCategoriesAllPost
//   ?.filter((item) => item.categoryPostId === target)
