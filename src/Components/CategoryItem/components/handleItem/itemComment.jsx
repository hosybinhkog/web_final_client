import React from 'react'
import img from '../../../../assets/images/defaultAvatarStreamer.png'
import { useDispatch } from 'react-redux'
import { deleteCommentPostById } from '../../../../store/actions/postActions'
import { Modal, Ripple, initTE } from 'tw-elements'

import { useEffect } from 'react'
initTE({ Modal, Ripple })

const ItemComment = ({ avatarUrl, username, comment, id, commentId }) => {
  const dispatch = useDispatch()
  const handleDeletePost = () => {
    dispatch(deleteCommentPostById(id, commentId))
  }
  useEffect(() => {
    initTE({ Modal, Ripple })
  }, [])
  return (
    <div className="flex gap-2 mb-2 ">
      <div>
        <img
          className="rounded-full object-cover w-full h-full max-w-[2rem] max-h-[2rem]"
          src={avatarUrl ? avatarUrl : img}
          alt=""
        />
      </div>

      <div className=" relative group ">
        <div className="flex items-center h-full">
          <div className="flex flex-col gap-1 rounded-lg bg-[rgba(115,113,113,0.8)] py-2 px-4">
            <span className="font-extrabold text-black text-lg">
              {username}
            </span>
            <span className="font-light ">{comment}</span>
          </div>
        </div>
        {/* xóa */}
        {/* <div
          
          className="invisible opacity-0 cursor-pointer absolute top-0 right-[-64px] bg-[rgb(241,42,59)] hover:bg-[rgba(241,42,59,.8)]  rounded-lg  px-3 w-16 mt-8 flex flex-col gap-2 p-3 group-hover:opacity-100 group-hover:visible group-hover:mt-0"
        >
          <div className="w-full rounded-lg ">
            <span className=" pl-2">Xóa</span>
          </div>
        </div> */}
        {/* xóa nhẹ */}
        <div>
          {/* <ButtonSubmit titleButton={'Delete Post'} cssButton={'button-report'} /> */}
          <div class="space-y-2 invisible opacity-0 cursor-pointer absolute top-0 right-[-64px] bg-[rgb(241,42,59)] hover:bg-[rgba(241,42,59,.8)]  rounded-lg  px-3 w-16 mt-8 flex flex-col gap-2 p-3 group-hover:opacity-100 group-hover:visible group-hover:mt-0">
            {/* <!-- Button trigger vertically centered modal--> */}
            <button
              type="button"
              className=" "
              data-te-toggle="modal"
              data-te-target="#exampleModalCenter"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Xóa
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
                    Notification Delete Comment
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
                    Are you sure you want to delete this comment?
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
                    Delete Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemComment
