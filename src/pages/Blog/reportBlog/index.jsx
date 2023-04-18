import React from 'react'
import ButtonSubmit from '../../../Components/Commom/ButtonSubmit'
import { modules } from '../../../constants'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  createReport,
  clearErrorsCreateReport,
  loadCategoriesReportPost,
} from '../../../store/actions/reportActions'
import { RESET_CREATE_REPORT } from '../../../store/actions/types'

const ReportBlog = () => {
  const param = useParams()
  const { post } = useSelector((state) => state.post)
  const { success, error } = useSelector((state) => state.reportPost)
  const { reportPostCategories } = useSelector(
    (state) => state.loadCategoriesReportPost
  )

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const [reportPost, setReportPost] = useState({
    title: '',
    description: '',
    idCategory: '',
  })

  const { title, description, idCategory } = reportPost

  const handleCreateReportPost = (e) => {
    setReportPost({ ...reportPost, [e.target.name]: [e.target.value] })
  }

  const handleFormSubmitCreateReportPost = async (e) => {
    e.preventDefault()
    const id = toast.loading('Create Report Post...', {
      position: 'top-center',
    })

    const myForm = new FormData()
    myForm.set('title', reportPost.title)
    myForm.set('description', reportPost.description)
    myForm.set('idCategory', reportPost.idCategory)

    await dispatch(createReport(param.id, myForm))
    toast.remove(id)
  }

  const onDescription = (value) => {
    setReportPost({ ...reportPost, description: value })
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    dispatch(loadCategoriesReportPost())
    if (error) {
      toast.error(error)
      setErrorMessage(error)
      dispatch(clearErrorsCreateReport())
    }
    if (success) {
      toast.success('Create Report Post successfully !!!')
      navigate(`/blog/${param.id}`)
      dispatch({
        type: RESET_CREATE_REPORT,
      })
    }
  }, [error, success, dispatch, param.id])

  return (
    <div className="bg-[url('/public/bgReport.jpeg')] w-full bg-no-repeat bg-cover ">
      {' '}
      <div className="min-h-[80vh] w-[1280px] mx-auto text-white font-bold text-2xl">
        <span className="text-7xl  flex items-center justify-center mt-2 font-serif font-normal">
          Report Blog
        </span>{' '}
        <form onSubmit={handleFormSubmitCreateReportPost} className=" p-4 ">
          <div className="flex flex-col gap-1 justify-center">
            <div className="flex flex-col ">
              <div>
                {/* Title Report */}
                <label className="flex gap-2 items-center mt-3 text-2xl ">
                  <span className="w-2/5 ">Title Report </span>

                  <input
                    {...{ required: true }}
                    className="w-full rounded-lg text-black "
                    name="title"
                    type="text"
                    value={title}
                    placeholder="Title Report"
                    onChange={handleCreateReportPost}
                  />
                </label>
              </div>
            </div>
            {/* Category Report Post */}
            <div>
              <label className="flex gap-2 items-center mt-3 text-2xl ">
                <span className="w-2/5">Category Report Post </span>

                <select
                  className="cursor-pointer w-full  rounded-lg text-black font-semibold"
                  name="idCategory"
                  value={idCategory}
                  onChange={handleCreateReportPost}
                >
                  <option>Select a category report</option>
                  {reportPostCategories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.typeReport}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {/* Description Report */}
            <div>
              <label className="flex gap-2 items-center mt-3 text-2xl pb-2">
                Description Report{' '}
              </label>
              <div className="">
                <ReactQuill
                  modules={modules}
                  theme="snow"
                  value={description}
                  onChange={onDescription}
                />
              </div>
            </div>
          </div>
          <div>
            <ButtonSubmit titleButton={'Report'} cssButton={'button-report'} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReportBlog
