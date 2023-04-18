import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadDataAllPost } from '../../store/actions/postActions'
import Loading from '../../Components/Loading'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import FeedItemAllPost from '../../Components/CategoryItem/components/handleFeed/feedItemAllPost'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  const { post, loading, error } = useSelector((state) => state.loadDataAllPost)
  const { categories } = useSelector((state) => state.loadCategoriesPost)
  const dispatch = useDispatch()
  console.log(post)
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    if (error) {
      toast.error('Trang không tồn tại')
      navigate('/404')
    }
    dispatch(loadDataAllPost())
  }, [error])
  if (loading) return <Loading />
  return (
    <>
      <div className="flex min-h-[80vh] w-full">
        <div className=" bg-black flex flex-col pl-10 pt-10 ">
          <div>
            <div className="text-white text-3xl font-extrabold mb-4">
              {' '}
              <span>BLOG</span>
              <div className="flex gap-2">
                {categories?.map((category) => (
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        display: isActive ? 'inline-block' : '',
                        borderBottom: isActive ? '1px solid #40a9ff' : '',
                        color: isActive ? '#40a9ff' : '',
                        fontWeight: isActive ? 'bold' : '',
                      }
                    }}
                    to="/feedItemCategoriesPost"
                  >
                    <span className="rounded-md px-3"> {category.name} </span>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="text-white">
              {post && <FeedItemAllPost post={post} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
