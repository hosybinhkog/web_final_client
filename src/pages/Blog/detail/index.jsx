import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostById } from '../../../store/actions/postActions'
import { toast } from 'react-hot-toast'
import { CLEAR_LOAD_POST_ID_FAIL } from '../../../store/actions/types'
import FeedItemPostDetail from '../../../Components/CategoryItem/components/handleFeed/feedItemPostDetail'
import Loading from '../../../Components/Loading'

const DetailPost = () => {
  const dispatch = useDispatch()
  const param = useParams()
  const { loading, post, error } = useSelector((state) => state.getPostById)
  const navigate = useNavigate()
  const errorMessage = 'Blog không tồn tại !'
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    if (error) {
      toast.error(errorMessage)
      dispatch({ type: CLEAR_LOAD_POST_ID_FAIL })
      navigate('/blog')
    }

    dispatch(getPostById(param.id))
  }, [param.id, error])
  if (loading) return <Loading />
  return (
    <>
      <div className="bg-[url('/public/bgPost.png')] w-full bg-no-repeat bg-cover ">
        <div className="flex min-h-[80vh] w-full">
          <div className=" bg-[rgba(0,0,0,.7)] flex flex-col mx-auto border-x-[1px] border-x-[solid] border-x-[#7855E2] ">
            <div className="text-white font-semibold ">
              {post && <FeedItemPostDetail post={post} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPost
