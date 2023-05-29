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
  createReportStreamer,
  clearErrorsCreateReportStreamer,
} from '../../../store/actions/reportActions'
import { RESET_CREATE_REPORT_STREAMER } from '../../../store/actions/types'

const ReportStreamer = () => {
  const param = useParams()

  const { success, error } = useSelector((state) => state.newReport)

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const [reportStreamer, setReportStreamer] = useState({
    title: '',
    description: '',
  })

  const { title, description } = reportStreamer

  const handleCreateReportStreamer = (e) => {
    setReportStreamer({ ...reportStreamer, [e.target.name]: [e.target.value] })
  }

  const handleFormSubmitCreateReportStreamer = async (e) => {
    e.preventDefault()
    const id = toast.loading('Create Report Streamer...', {
      position: 'top-center',
    })

    const myForm = new FormData()
    myForm.set('title', reportStreamer.title)
    myForm.set('description', reportStreamer.description)

    await dispatch(createReportStreamer(param.id, myForm))
    toast.remove(id)
  }

  const onDescription = (value) => {
    setReportStreamer({ ...reportStreamer, description: value })
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
      dispatch(clearErrorsCreateReportStreamer())
    }
    if (success) {
      toast.success('Create Report Streamer successfully !!!')
      navigate(`/publicIntroduceStream/${param.id}`)
      dispatch({
        type: RESET_CREATE_REPORT_STREAMER,
      })
    }
  }, [error, success, dispatch, param.id])

  return (
    <div className="bg-[url('/public/bgReport.jpeg')] w-full bg-no-repeat bg-cover ">
      {' '}
      <div className="min-h-[80vh] w-[1280px] mx-auto text-white font-bold text-2xl">
        <span className="text-7xl  flex items-center justify-center mt-2 font-serif font-normal">
          Report Streamer
        </span>{' '}
        <form onSubmit={handleFormSubmitCreateReportStreamer} className=" p-4 ">
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
                    onChange={handleCreateReportStreamer}
                  />
                </label>
              </div>
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

export default ReportStreamer
