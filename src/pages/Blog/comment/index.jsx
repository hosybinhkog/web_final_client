import React from 'react'
import { modules } from '../../../constants'
import img from '../../../assets/images/defaultAvatarStreamer.png'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { clearErrorsCreateComment } from '../../../store/actions/postActions'
import { toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import {
  getCommentPostById,
  createComment,
} from '../../../store/actions/postActions'
import { RESET_CREATE_POST } from '../../../store/actions/types'
import FeedItemComment from '../../../Components/CategoryItem/components/handleFeed/feedItemComment'

const Comment = () => {
  const param = useParams()
  const { post } = useSelector((state) => state.getPostById)
  const { success, error } = useSelector((state) => state.createComment)
  const { commentPost } = useSelector((state) => state.getCommentPostById)

  const { user } = useSelector((state) => state.users)

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleFormSubmitCreateComment = async (e) => {
    e.preventDefault()
    const id = toast.loading('Comment Post...', { position: 'top-center' })
    await dispatch(createComment(param.id, text))
    toast.remove(id)
    setText('')
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    if (error) {
      toast.error(error)
      setErrorMessage(error)
      dispatch(clearErrorsCreateComment())
    }
    if (success) {
      toast.success('Comment Post successfully !!!')
      navigate(`/blog/${param.id}`)
      dispatch({
        type: RESET_CREATE_POST,
      })
    }
    dispatch(getCommentPostById(param.id))
  }, [error, success, dispatch, param.id])
  return (
    <div className="flex gap-1 mt-6">
      <div>
        {!user?.avatar || !user?.avatar?.url ? (
          <img
            className="rounded-full object-cover w-full h-full max-w-[2rem] max-h-[2rem]"
            src={img}
            alt=""
          />
        ) : (
          <img
            className="rounded-full object-cover w-full h-full max-w-[2rem] max-h-[2rem]"
            src={
              user?.avatar
                ? user?.avatar?.url
                : user?.avatar?.url
                ? user?.avatar?.url
                : null
            }
            alt=""
          />
        )}
      </div>
      <div className="flex flex-col w-full text-white font-semibold">
        <form onSubmit={handleFormSubmitCreateComment}>
          <div>
            <textarea
              className="bg-[rgba(255,255,255,.6)] text-black rounded-lg w-full"
              type="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Viết bình luận của bạn"
            />
          </div>
          <div className="mt-2 flex justify-end">
            <button className="p-2 rounded-lg bg-[#F05123] hover:bg-[#F3744F]">
              Bình luận
            </button>
          </div>
        </form>
        {/* detail content */}

        <div className="text-white">
          {commentPost && <FeedItemComment comment={commentPost} />}
        </div>
        {/* <div className="flex gap-2">
          <div>
            <img
              className="rounded-full object-cover w-full h-full max-w-[2rem] max-h-[2rem]"
              src={img}
              alt=""
            />
          </div>

          <div className=" relative group ">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-2 rounded-lg bg-[rgba(115,113,113,0.8)] p-2">
                <span className="font-extrabold">Thế Anh</span>
                <span className="font-light">Comment của Ta</span>
              </div>
            </div>

            <div className="invisible opacity-0 absolute bg-black rounded-lg  px-3 w-48 mt-8 flex flex-col gap-2 p-3 group-hover:opacity-100 group-hover:visible group-hover:mt-0">
              <div className="w-full hover:bg-[rgba(76,74,74,0.8)] rounded-lg ">
                <span className="cursor-pointer pl-2 ">Chỉnh sửa</span>
              </div>
              <div className="w-full hover:bg-[rgba(76,74,74,0.8)] rounded-lg">
                <span className="cursor-pointer pl-2">Xóa</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Comment
