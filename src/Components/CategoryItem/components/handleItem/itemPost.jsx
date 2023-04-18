import React, { useEffect } from 'react'
import avatarDefault from '../../../../assets/images/defaultAvatarStreamer.png'
import { Link } from 'react-router-dom'
import ButtonSubmit from '../../../Commom/ButtonSubmit'
import { useDispatch, useSelector } from 'react-redux'
import {
  deletePostById,
  clearDeletePostSuccess,
} from '../../../../store/actions/postActions'
import { loadPostUser } from '../../../../store/actions/postActions'
import { Modal, Ripple, initTE } from 'tw-elements'

const ItemPost = ({
  avatarUserUrl,
  username,
  descriptionShort,
  createTimePost,
  titlePost,
  thumbnailPostUrl,
  id,
}) => {
  const { success } = useSelector((state) => state.post)
  const dispatch = useDispatch()
  const handleDeletePost = () => {
    dispatch(deletePostById(id))
  }

  useEffect(() => {
    initTE({ Modal, Ripple })
    if (success) {
      dispatch(loadPostUser())
      dispatch(clearDeletePostSuccess())
    }
  }, [success])

  return (
    <div className="flex flex-col gap-2 p-2 hover:border-[1px] hover:border-[solid] hover:border-[#3B9AE8] hover:rounded-md">
      <div className="">
        <Link to={`/blog/${id}`}>
          <img
            className="object-cover rounded-md h-[250px] w-full"
            src={thumbnailPostUrl}
            alt=""
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="font-bold text-xl max-w-max hover:text-blue-500"
          to={`/blog/${id}`}
        >
          {' '}
          {titlePost}
        </Link>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              className=" border-[1px] border-[solid] border-[green] rounded-[50%] object-cover w-[48px] h-[48px]"
              src={avatarUserUrl ? avatarUserUrl : avatarDefault}
              alt=""
            />
            <span>{username}</span>
          </div>
          <div>
            <span> {new Date(createTimePost).toLocaleDateString('en-GB')}</span>
          </div>
        </div>
        <span className="text-base">{descriptionShort}</span>
      </div>
      <div>
        {/* <ButtonSubmit titleButton={'Delete Post'} cssButton={'button-report'} /> */}
        <div class="space-y-2">
          {/* <!-- Button trigger vertically centered modal--> */}
          <button
            type="button"
            className="flex justify-center w-44 mt-6 p-2 bg-[rgb(241,42,59)] rounded-md hover:bg-[rgba(241,42,59,.8)] cursor-pointer mx-auto text-white  text-xl font-bold mb-4"
            data-te-toggle="modal"
            data-te-target="#exampleModalCenter"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Delete Post
          </button>
        </div>

        {/* <!--Verically centered modal--> */}
        <div
          data-te-modal-init
          class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalCenter"
          tabindex="-1"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog"
        >
          <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
          >
            <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                {/* <!--Modal title--> */}
                <h5
                  class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                  id="exampleModalScrollableLabel"
                >
                  Notification Delete Post
                </h5>
                {/* <!--Close button--> */}
                <button
                  type="button"
                  class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* <!--Modal body--> */}
              <div class="relative p-4">
                <p className="text-black">
                  Are you sure you want to delete this post?
                </p>
              </div>

              {/* <!--Modal footer--> */}
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  class="inline-block rounded bg-[#E2EAF7] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#5D7DAF] transition duration-150 ease-in-out hover:bg-[#7ba4e7]  focus:bg-[#7ba4e7] focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Close
                </button>

                <button
                  onClick={() => handleDeletePost()}
                  type="button"
                  class="ml-1 inline-block bg-[rgb(241,42,59)] rounded-md px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[rgba(241,42,59,.8)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemPost
