import React from 'react'
import ButtonSubmit from '../../../Commom/ButtonSubmit'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearErrorsFollowAndUnFollowStreamer,
  clearFollowAndUnFollowStreamerSuccess,
  followStreamer,
  loadUser,
} from '../../../../store/actions/userActions'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const ItemStatusFollow = ({ streamerId }) => {
  const { success, error } = useSelector((state) => state.followStreamer)

  const { user } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleFollowAndUnfollowStreamer = () => {
    dispatch(followStreamer(streamerId))
  }

  const navigate = useNavigate()

  const changeFollow = user?.listFollowStreamer
    ?.map((item) => item.idStreamer)
    .includes(streamerId)

  console.log(changeFollow)
  useEffect(() => {
    if (success) {
      if (changeFollow) {
        toast.success('UnFollow successfully !')
      } else {
        toast.success('Follow successfully !')
      }
      navigate(`/publicIntroduceStream/${streamerId}`)
      dispatch(loadUser())

      dispatch(clearFollowAndUnFollowStreamerSuccess())
    }
    if (error) {
      toast.error('Follow failed')
      dispatch(clearErrorsFollowAndUnFollowStreamer())
    }
  }, [success, error, changeFollow])

  return (
    <>
      {user?.listFollowStreamer
        ?.map((item) => item.idStreamer)
        .includes(streamerId) ? (
        <div
          onClick={() => handleFollowAndUnfollowStreamer()}
          className="flex justify-center  items-center"
        >
          <ButtonSubmit titleButton={'UnFollow'} cssButton={'button-report'} />
        </div>
      ) : (
        <div
          onClick={() => handleFollowAndUnfollowStreamer()}
          className="flex justify-center  items-center"
        >
          <ButtonSubmit titleButton={'Follow'} cssButton={'button-create'} />
        </div>
      )}
    </>
  )
}

export default ItemStatusFollow
