import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { modules } from '../../constants'
import {
  createPost,
  clearErrorsCreatePost,
  loadPostUser,
  loadCategoriesPost,
} from '../../store/actions/postActions'
import thumnaildefault from '../.././assets/images/defaultThumbnail.jpg'
import { RESET_CREATE_POST } from '../../store/actions/types'

const CreatePost = () => {
  const { success, error } = useSelector((state) => state.post)
  const { categories } = useSelector((state) => state.loadCategoriesPost)

  const navigate = useNavigate()

  const [imgThumnailPostPreview, setImgThumnailPostPreview] =
    useState(thumnaildefault)
  const [imgThumnailPost, setImgThumnailPost] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const [post, setPost] = useState({
    title: '',
    descriptionShort: '',
    body: '',
    categoryPostId: '',
  })

  const { title, descriptionShort, body, categoryPostId } = post

  const handleCreatePost = (e) => {
    if (e.target.name === 'imgThumnailPost') {
      const readerThumbnail = new FileReader()
      readerThumbnail.onload = () => {
        if (readerThumbnail.readyState === 2) {
          setImgThumnailPost(readerThumbnail.result)
          setImgThumnailPostPreview(readerThumbnail.result)
        }
      }
      readerThumbnail.readAsDataURL(e.target.files[0])
    } else {
      setPost({ ...post, [e.target.name]: [e.target.value] })
    }
  }

  const handleFormSubmitCreatePost = async (e) => {
    e.preventDefault()

    const id = toast.loading('Create Post...', { position: 'top-center' })
    const myForm = new FormData()
    myForm.set('title', post.title)
    myForm.set('descriptionShort', post.descriptionShort)
    myForm.set('body', post.body)
    myForm.set('categoryPostId', post.categoryPostId)

    if (imgThumnailPost) {
      myForm.set('imgThumnail', imgThumnailPost)
    }
    await dispatch(createPost(myForm))
    toast.remove(id)
  }

  const onBody = (value) => {
    setPost({ ...post, body: value })
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    dispatch(loadCategoriesPost())
    if (error) {
      toast.error(error)
      setErrorMessage(error)
      dispatch(clearErrorsCreatePost())
    }
    if (success) {
      toast.success('Create Post successfully !!!')
      navigate('/postMe')
      dispatch(loadPostUser())
      dispatch({
        type: RESET_CREATE_POST,
      })
    }
  }, [error, success, dispatch])

  return (
    <>
      <div>
        <span className="text-7xl  flex items-center justify-center mt-2 font-serif font-normal">
          Create Post
        </span>{' '}
        <form
          onSubmit={handleFormSubmitCreatePost}
          className=" p-4 min-h-[80vh] w-[1280px]"
        >
          <div className="flex flex-col gap-1 justify-center">
            {/* thumbail Post */}

            <div className="flex flex-col justify-center items-center">
              <label
                className="font-semibold text-2xl max-w-max "
                htmlFor="avatar"
              >
                Click for Thumbnails Post
              </label>
              <div>
                <form
                  action=""
                  onClick={() =>
                    document.querySelector('.input-field-thumb').click()
                  }
                  className="cursor-pointer max-w-max"
                >
                  <div className="flex gap-2 justify-center items-center">
                    <input
                      className="input-field-thumb hidden"
                      type="file"
                      name="imgThumnailPost"
                      id="imgThumnailPost "
                      accept="image/"
                      onChange={handleCreatePost}
                    />
                  </div>

                  <div className="flex justify-center items-center p-2">
                    {imgThumnailPostPreview && (
                      <img
                        className="w-[1280px] h-[600px]  object-cover border-[4px] border-[solid] border-[green]"
                        src={imgThumnailPostPreview}
                        alt="Thumbnails Streamer Preview"
                      />
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-col w-[50%]">
              <div>
                {/* Username */}
                <label className="flex gap-2 items-center mt-3 text-2xl  ">
                  <span className="w-2/5 ">Title Post </span>

                  <input
                    {...{ required: true }}
                    className="w-full rounded-lg"
                    // border-t-0 border-x-0  border-b-[1px] border-b-[solid]  border-b-[black] pb-1 outline-none
                    name="title"
                    type="text"
                    value={title}
                    placeholder="Your name chanel"
                    onChange={handleCreatePost}
                  />
                  {/* <i className="fa-solid fa-pen-to-square cursor-pointer"></i> */}
                </label>
              </div>
              <div>
                <label className="flex gap-2 items-center mt-3 text-2xl ">
                  <span className="w-2/5"> Desciption Short </span>

                  <input
                    {...{ required: true }}
                    className=" w-full  rounded-lg"
                    name="descriptionShort"
                    type="text"
                    value={descriptionShort}
                    placeholder="Your Description Short"
                    onChange={handleCreatePost}
                  />
                  {/* <i className="fa-solid fa-pen-to-square cursor-pointer"></i> */}
                </label>
              </div>
              <div>
                <label className="flex gap-2 items-center mt-3 text-2xl">
                  <span className="w-2/5">Category Post </span>

                  <select
                    className="cursor-pointer w-full  rounded-lg"
                    name="categoryPostId"
                    value={categoryPostId}
                    onChange={handleCreatePost}
                  >
                    <option>Select a category</option>
                    {categories?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            {/* Body post */}
            <div>
              <label className="flex gap-2 items-center mt-3 text-2xl pb-2">
                Body Post{' '}
              </label>
              <ReactQuill
                modules={modules}
                theme="snow"
                value={body}
                onChange={onBody}
              />
            </div>
          </div>
          <div className="flex justify-center font-semibold text-2xl">
            <button className=" w-56 mt-6 p-2 bg-sky-500 rounded-md hover:bg-sky-300 cursor-pointer max-w-max">
              Create Post{' '}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreatePost
